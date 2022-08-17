const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();
const cors = require('cors');

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router)

mongoose.connect("mongodb+srv://admin:9UHAVAWVXeutRGcR@cluster0.xalva.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Connnected to database")).then
(()=>{app.listen(5000);
}).catch((err)=>console.log(err));