import mongoose from "mongoose";
const jobSchema=new mongoose.Schema(
    {
        title:{
            type:string;
            required:true
        }
    }
)