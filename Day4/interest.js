const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/intrestCalculater/',(req,res)=>{
    const principalAmount = parseInt(req.query.p);
    const roi = parseInt(req.query.r);
    const time = parseInt(req.query.t);

    const interest = principalAmount * roi/100 * time;
    const finalAmount = interest+principalAmount;

    // debug the addition..

    res.send(`Your Principal Amount is: ${principalAmount}, Rate of interest is: ${roi} and Time is: ${time}. And Interest is: ${interest} & Total Amount is: ${finalAmount}`)
})

app.listen(3000,()=>{
    console.log('App is running at port 3000.');
})