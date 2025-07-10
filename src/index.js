import mongoose from "mongoose"
import dotenv from "dotenv"
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
// import express from "express";

dotenv.config();

connectDB();





// const app = express();


// dotenv.config();

// async function connectDB(){

//   try {
//     await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//     app.on('error',(error) => {
//       console.log('Error ',error);
//       throw error
      
//     })

//     app.listen(process.env.PORT, ()=> {
//       console.log(`App is listening on port ${process.env.PORT}`);
      
//     })
//   } catch (error) {
//     console.error('Error : ',error);
//     throw error;
//   }
// }

// connectDB()