import mongoose from "mongoose";

export async function initStorage () {
  try {
    await mongoose.connect(process.env.MONGO_DB as string)
    console.log('Connected to DB')
  } catch (error) {
    console.log(error)
  }
}  