const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/userRoute");

const errorHandler = require("./middileware/errorMiddileware");


const app = express()


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', ['PATCH', 'POST', 'GET', 'DELETE', 'PUT']);
    res.setHeader('Access-Control-Allow-Headers', ['Content-Type']);
    res.setHeader('Access-Control-Expose-Headers', ['Content-Type']);
    next();
  });



//Middilewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(
    cors({
    origin :["http://localhost:3000/", "http://zeepzeeapp.vercel.app"], //jekahne deploy korbo sekhane likhbo
    credentials:true,

    
})
)

//Routes

app.use("/api/users",userRoute);


app.get("/" ,(req,res)=>{
    res.send("Home Page...")
})

//Error Middileware

app.use(errorHandler)

const PORT = process.env.PORT  ||5000

mongoose.connect(process.env.MONGO_URI).then(() =>{
    app.listen(PORT, () =>{
        console.log(`server running on port ${PORT}`)
    })
    
}).catch((e) =>{
    console.log(e);
})


.catch((err)=>console.log(err) )








// mongodb+srv://hritwickghosh1999:Hritwick1999@cluster0.txryolq.mongodb.net/?retryWrites=true&w=majority