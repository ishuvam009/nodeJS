const express = require('express');
const app = express();

app.use(express.json());

app.post('/uaer/car-info',(req,res)=>{
    //cars = [].

    const cars = req.body.cars;
    const carsLength =  cars.length;

    res.send(`You have: ${carsLength} no of cars.`);
})

app.use( function(err,req,res,next) {
    res.json({
        message: 'Something went wrong :(',
    });
})

app.listen(3000,()=>{
    console.log('App is running at port 3000.');
});