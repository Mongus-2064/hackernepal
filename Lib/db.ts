import mongoose from "mongoose";

const DATABASE_URI = process.env.MONGO_URI

export const db = async() => {
  try {
    if (!DATABASE_URI) {
      return console.log("Database URI not Found");
    }

   await mongoose.connect(DATABASE_URI);
    return console.log("Database connected Successfully!");
  } catch (error) {
    return console.log("Internal Server error");
  }
};
