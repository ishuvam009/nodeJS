const express = require('express');
const app = express();

let requestCount = 0;

function midd(req,res,next){
    requestCount++;
    console.log(requestCount);
    next();
}

app.get('/user',midd,(req,res)=>{
    res.json({
        message: 'Hi from server.',
    });
})

app.listen(3000,()=>{
    console.log('App is running at port 3000.');
})