const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://cohort0to1:Iwd4P23B2vvSiVwg@cluster0.9cfvukm.mongodb.net/newUsers?retryWrites=true&w=majority&appName=Cluster0");

const usersModel = mongoose.model('Users',{name: 'String',email: 'String',password:'String'})

app.post('/signup', async(req,res)=>{

    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const emailExist = await usersModel.findOne({email:username});
    if(emailExist){
        return res.status(400).send("User already exist.");
    }

    const users = new usersModel({
        name: name,
        email: username,
        password: password,
    });
    
    users.save();
    res.json({
        message: 'User created Sucessfully.',
    })
})

app.listen(3000, ()=>{
     console.log('App is running at port 3000.');
})