import express from "express"; //const express = require('express');
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routers from "./routes";
import userRouter from "./routers/userRouter"; 
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet());
app.set('view engine', "pug");
app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); //서버가 유저로 부터 받은 데이터를 이해하는 방법
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routers.home, globalRouter);
app.use(routers.users, userRouter);
app.use(routers.videos, videoRouter);

export default app;