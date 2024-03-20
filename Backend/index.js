const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { bookRouter } = require("./routes/book.routes");
const { orderRouter } = require("./routes/order.routes");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());

app.use("/api", userRouter);
app.use("/api/books", bookRouter);
app.use("/api/orders", orderRouter);

app.get("/",(req,res) => {
    res.json({ mssg : "Welcome to the home page"})
})

app.use("*", (req,res) => {
    res.status(404).json({ mssg: "OOps! page does not exist"})
})

app.listen(PORT,async(req,res) => {
    try{
        await connection;
        console.log("db connected successfully.")
        console.log(`Server is running at port ${PORT}.`);
    }catch(e){
        console.log(e);
    }
})