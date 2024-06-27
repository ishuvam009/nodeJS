const express = require('express');
const app = express();

function checkTicket(req,res,next){
    const ticket = req.query.ticket;
    if(ticket=='free'){
        next();
    }else{
        res.status(403).send('You ticket is not valid.');
    }
}

function ageChecker(req,res,next){
    const age = req.query.age;
    if(age>=18){
        next();
    }else{
        res.status(403).send('You are not allowed to ride.');
    }
}

app.use(checkTicket);

app.get('/ride1',ageChecker,(req,res)=>{
    res.send('You rode the first ride.');
});

app.get('/ride2',(req,res)=>{
    res.send('You rode the second ride.');
});

app.get('/ride3',ageChecker,(req,res)=>{
    res.send('You rode the third ride.');
});

app.listen(3000,()=>{
    console.log('App is srunning at PORT 3000.');
})