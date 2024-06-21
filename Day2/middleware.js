const express = require('express');
const app = express();


function checkUser(req,res,next){

    
    const userName = req.query.username;
    const password = req.query.password;

    if (userName==3049 && password==='Shuv@123'){
        next();
    }else{
        res.json({
            message: 'Wrong Credetials.',
        });
    }
}

app.get('/user/login', checkUser,(req,res)=>{
    const name = req.query.name;
    res.json({
        message: `Your Name is: ${name}`,
    });
})

app.listen(3000,()=>{
    console.log('App is running at PORT 3000.');
})