import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`✅ MONGODB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log("MONGODB Connection Err :", error);
    process.exit(1);
  }
};

export { connectDB };
