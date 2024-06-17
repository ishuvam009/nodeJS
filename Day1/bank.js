const express = require('express');
const app = express();

app.get('/user/', (req,res)=> {

    //const bankId = req.query.bankid;
    const userId = req.query.userid;
    const password = req.query.password;

    if(password == 123 && userId == 21053049){
        res.json({
            message: 'Your avl balance is 12,24,50,000',
        })
        return;
    }else{
        res.send('Your details are wrong plese check again.');
        return;
    }
});

app.listen(3000,()=>{
    console.log('Server is running at 3000.');
});