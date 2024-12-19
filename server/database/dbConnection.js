import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"CHOICE_JOB_DB",
    }).then (()=>{
        console.log("connected to db");
    }).catch((err)=>{
        console.log(`error connecting to db : ${err}`);
    });
}