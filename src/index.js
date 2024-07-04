// to make change visible everytime something changes in server
// to automattically restart server
// use NODEMON
const express = require('express')
const ServerConfig = require('./config/ServerConfig');
const connectDB = require('./config/DbConfig');


const app = express();

app.listen(ServerConfig.PORT,async ()=>{
    await connectDB();
    console.log(`server started at port ${ServerConfig.PORT}...!!`);
})
