const express=require("express");
const cors=require("cors");
const helmet=require("helmet");
const { CLIENT_URL } = require("./configs/env");

const app=express();

app.use(express.json({limit:"2mb"}));
app.use(express.urlencoded({limit:"2mb",extended:true}));

app.use(cors({
    credentials:true,
    origin:CLIENT_URL
}));
app.use(helmet());

app.use("/api/v1/health",(_,res)=>{
    res.status(200).json({
        success:true,
        statusCode:200,
        message:"Api is working!"
    });
});

module.exports=app;