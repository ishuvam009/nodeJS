const express = require('express');
const app = express();
const zod = require('zod');

app.use(express.json());

const schema = zod.array(zod.number());

app.post('/uaer/car-info',(req,res)=>{
    //cars = [].

    const cars = req.body.cars;
    const response =  schema.safeParse(cars);

    res.send({
        response
    });
});

app.listen(3000,()=>{
    console.log('App is running at port 3000.');
});