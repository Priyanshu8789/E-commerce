const cors = require('cors')
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
//Routes Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

const errorMiddleware = require("./middleware/error");
app.use(cookieParser());

app.use(cors())

// for parsing application/xwww-
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded
// app.use(express.json());

app.post('/path',(req,res)=>{

    cosole.log('hi');

})


app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1", order);
//Middleware for errors
app.use(errorMiddleware);




module.exports = app;