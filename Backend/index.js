const express = require("express");
const { connection } = require("./config/db");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT,async(req,res) => {
    try{
        await connection;
        console.log("db connected successfully.")
        console.log(`Server is running at port ${PORT}.`);
    }catch(e){
        console.log(e);
    }
})