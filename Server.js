const express = require("express");
const path = require("path");

const PORT = 3000;

const app = express()


app.use(express.static(path.join(__dirname,"home")))

app.get('/', (req,res)=>{
res.send("Hello");
})

app.listen(PORT, ()=>console.log(`server Started on port : ${PORT}`))
