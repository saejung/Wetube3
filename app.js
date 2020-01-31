import express from "express"; //const express = require('express');
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter"; 
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routers from "./routes";

const app = express();

app.use(cookieParser());

//서버가 유저로 부터 받은 데이터를 이해하는 방법
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(helmet());
app.use(morgan("dev"));

app.use(routers.home, globalRouter);
app.use(routers.users, userRouter);
app.use(routers.videos, videoRouter);

export default app;