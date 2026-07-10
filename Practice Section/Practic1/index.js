const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello every one I am rohan pandey server.");
});

app.post("/sum",(req,res)=>{
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    const sum = a + b;
    console.log(sum);
    res.send(sum);
})

app.listen(port,()=>{
    console.log("server running into ",port);
});
