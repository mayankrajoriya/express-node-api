const express=require("express");
const app= express();

const confiq=require("dotenv").config();
const port=process.env.PORT || 8088
const restAPIDATA=require("./jsondata")

function middleware(req,res,next){

    console.log("middleware started...")
    next()

}

app.get("/",(req,res)=>{
    res.send("welcome to node server")
})
app.get("/home",(req,res)=>{
    res.send("welcome to home")
})
app.get("/api/data",(req,res)=>{
    res.json(restAPIDATA)
})




app.listen(port,(error)=>{
    if(error){
        console.log("problem")
    }else{
        console.log("server listening port",port)
    }
})