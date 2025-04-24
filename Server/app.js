const express=require("express");
const dotenv=require("dotenv");
const dbConnect=require("./config/db");
const userroute=require("./Routes/userRoutes");
dotenv.config();
const app=express();
const Port=process.env.PORT || 3000;
dbConnect();
app.use(express.json());
app.use("/",userroute);
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})