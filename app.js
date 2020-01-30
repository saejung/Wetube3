import express from "express"; //const express = require('express');
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"; 

const app = express();

const handleHome = (req, res) => res.send('Hello from home!');

const betweenHome = (req, res, next) => {    
    console.log("I'm between");
    next();
}
const handleProfile = (req, res) => res.send("You are on my sjkProfile");

//app.use(betweenHome);
app.use(cookieParser());

//서버가 유저로 부터 받은 데이터를 이해하는 방법
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 

app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;