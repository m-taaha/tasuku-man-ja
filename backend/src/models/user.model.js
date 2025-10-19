import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  userName: {
    type: String,
    required: [true, `Please enter your username`],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, `Please enter your email`],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, `Please enter your password`],
    trim: true,
  },
}, {timestamps: true});

//pre -save hook for hashing password
userSchema.pre('save', async function (next) {
  //call this function only if the password is modified or created
  if(!this.isModified('password')) return next();
  


  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

//comparing password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};



export const User = mongoose.model("User", userSchema)