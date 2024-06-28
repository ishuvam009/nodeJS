const express = require('express');
const app = express();

app.use(express.json());


app.get('/sumfTwo/',(ewq,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    const sum = a+b;
    res.send(`The sum of ${a} and ${b} is :  ${sum} `);
    return sum;
})

app.listen(3000,()=>{
    console.log('App is running at port 3000.')
});