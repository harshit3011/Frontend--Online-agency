const express= require("express");
const path = require("path");
const app= express();
const port=80;
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
})
// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./index.html'));
// })

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});