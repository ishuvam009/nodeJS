const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


app.get('/sumfTwo/',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a+b;
    res.send(`The sum of ${a} and ${b} is :  ${sum} `);
    return sum;
})

app.listen(3000,()=>{
    console.log('App is running at port 3000.')
});