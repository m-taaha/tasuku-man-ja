
import { User } from "../models/user.model.js"
import { userRegisterSchema, userLoginSchema } from "../validators/user.validator.js"
import jwt from 'jsonwebtoken';


//register
export const userRegister = async (req, res) => {
    
    try{
        //validating the req using zod

        const validation = userRegisterSchema.safeParse(req.body);

        if(!validation.success){
          return  res.status(400).json({
                message: `invalid input data`,
                error: validation.error.errors
            })
        }

        const {firstName, lastName, userName, email, password} = validation.data;

        //check if userExist
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(409).json({
                message: `User with this email already exists`
            })
        }

        const newUser = await User.create({
          firstName,
          lastName,
          userName,
          email,
          password,
        });

        return res.status(201).json({
          message: "User registered successfully",
          user: {
            id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            userName: newUser.userName,
            email: newUser.email,
            createdAt: newUser.createdAt,
          },
        });

    }catch(error) {
        console.log('Register Error:', error)
       return res.status(500).json({message: `Server Error`})
        }

}

//login 
export const userLogin = async (req, res) => {
try {
    const validation = userLoginSchema.safeParse(req.body);

    if(!validation.success){
        return res.status(400).json({
            message: `Invalid Credentials`,
            error: validation.error.errors
        })
    }

    const {email, password} = validation.data;

    //check if userExist
    const user = await User.findOne({email});

    // check if user exists
    if(!user){
        return res.status(401).json({
            message: 'Invalid Credentials: User does not exist',
        })
    }
// check if password matches
    const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: `Invalid Credentials` });
      }

    //generate jwt user token key and send it back 
    const userToken = jwt.sign({userId: user._id}, process.env.JWT_USER_KEY ,{
        expiresIn: process.env.EXPIRES_IN,
    })

     //set userToken in httpOnly cookie
    res.cookie("userToken", userToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, //7days
    });

return res.status(200).json({
  message: "User Logged In Successfully",
  user: {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
  },
});

} catch (error) {
  res.status(500).json({ message: `Server Error` });
}

}

// logout 
export const userLogout = async (req, res) => {
//to logout we will set the token to null and clear it's value
  //set the expiration date to a time in the past

  try {
    res.clearCookie("userToken", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({
        success: true,
         message: "User logged out successfully" });
} catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({ 
        success: false, 
        message: "Server Error" });
  }
}
