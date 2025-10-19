import {z} from 'zod';

export const userRegisterSchema = z.object({
  firstName: z.string().trim().min(1, { message: `Name cannnot be Empty` }),

  lastName: z.string().trim(),

  userName: z
    .string({ required_error: `Username is required` })
    .trim()
    .min(1, { message: `Name cannnot be Empty` }),

  email: z
    .string({ required_error: `Email is required` })
    .email({message: `Invalid Email Address`})
    .trim()
    .min(1, { message: `Email cannot be empty` }),

  password: z.string({ required_error: `Password is required` })
  .trim()
  .min(6, { message: `at least 6 characters are required`})
});


export const userLoginSchema = z.object({
  email: z
    .string({ required_error: `Email is required` })
    .email({ message: `Invalid Email Address` })
    .trim()
    .min(1, { message: `Email cannot be empty` }),

  password: z
    .string({ required_error: `Password is required` })
    .trim()
    .min(6, { message: `at least 6 characters are required` }),
});