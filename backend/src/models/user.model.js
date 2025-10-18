import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
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

export const User = mongoose.model("User", userSchema)