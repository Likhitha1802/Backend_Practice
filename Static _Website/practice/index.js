const express=require("express");
const appserver=express();
appserver.listen(3000,()=>console.log("i am listening"));
appserver.get("/",(req,res)=> {
    res.send("hello world!");
})
appserver.get("/aditya/class/:id",(req,res)=>{
    res.send("i am a student in aditya"+req.params.id);
})