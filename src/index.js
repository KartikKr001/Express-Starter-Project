// to make change visible everytime something changes in server
// to automattically restart server
// use NODEMON
const express = require('express')
const ServerConfig = require('./config/ServerConfig')

const app = express();

app.listen(ServerConfig.PORT,()=>{
    console.log(`server started at port ${ServerConfig.PORT}...!!`);
})
