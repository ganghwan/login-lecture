
"use strict";

// 모듈
const express = require("express");
const bodyParser = require( "body-parser");
const dotenv = require("dotenv");
// const morgan = require('morgan');



const app = express();

dotenv.config();


// 라우팅
const home = require("./src/routes/home"); 

// winston 이용 로그
// const logger = require("./src/config/logger");
// logger.error("Hello 들");
 
// morgan 이용 로그
// const accessLogStream = require("./src/config/log")

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

//URL을 통해 전달되는 데이터 인식문제 해결
app.use(bodyParser.urlencoded({extended:true}));

// morgan 이용 로그
// app.use(morgan("dev"));
// app.use(morgan("common",{stream: accessLogStream}));


app.use("/", home); // use -> 미들웨어를 등록해주는 메소드.

module.exports = app;