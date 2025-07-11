import mongoose from "mongoose";
import dotenv from "dotenv"
import { DB_NAME } from "../constants.js";

dotenv.config(
{
  path : './.env'
}
);

const connectDB = async() => {

  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)


    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    
  } catch (error) {
    console.error('Error : ',error);
    process.exit(1);
  }
}

export default connectDB;