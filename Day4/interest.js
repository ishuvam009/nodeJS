const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/intrestCalculater/',(req,res)=>{
    const principalAmount = req.query.p;
    const roi = req.query.r;
    const time = req.query.t;

    const interest = principalAmount * roi * time;

    // debug the addition..

    res.send(`Your Principal Amount is: ${principalAmount}, Rate of interest is: ${roi} and Time is: ${time}. And Interest is: ${interest} and total amount is ${interest+principalAmount}`)
})

app.listen(3000,()=>{
    console.log('App is running at port 3000.');
})