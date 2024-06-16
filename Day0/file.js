const express = require('express');
const fs = require ('fs');

const app = express();

const PORT = 3500;

app.use('/file/:fileName',function (req,res){
    const name = req.params.fileName;
    console.log(name);
    fs.readFile(name, "utf-8", (err,data)=>{
        res.json({
            data
        })
    })
});

app.listen(3500,()=>{
    console.log(`Server is listning at PORT: ${PORT}`);
});