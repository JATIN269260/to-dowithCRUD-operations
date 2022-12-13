const express=require('express');
const mongoose=require('mongoose');

const app=express();

//connection to mogodb
mongoose.connect("mongodb://localhost:27017/to_do",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//middlewares

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine","ejs");

//routes
app.use(require('./routes/index'));
app.use(require('./routes/todo'));

//server configuration
app.listen(8080,()=>{
    console.log("Server started at port: 8080");
})
