const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = '#%^&&*6fgasvvgc32786';

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
    username: 'shuvam@gmail.com',
    password: '1234',
    name: 'Shuvam'
},
{
    username: 'abhipoo@hotmail.com',
    password: 'abhipoo123',
    name: 'Abhijeet'
},
{
    username: 'ramji123@gmail.com',
    password: 'sita123',
    name: 'Sri Ram'
},
{
    username: 'krishna@gmail.com',
    password: 'radha123',
    name: 'Sri Krishna'
},
];

//function to check user OR Authentication
function userExist(username,password){
    let userExist = false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            userExist = true;
        }
    }
    return userExist;
}

//POST Route
app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    if(!userExist(username,password)){
        return res.status(403).json({
            message: 'User not exit in the In Memory DB.',
        })
    }

    let token = jwt.sign({username: username,name:name}, jwtPassword);
    return res.json({
        token,
    });
});


//GET Route
app.get('/users',(req,res)=>{

    try {
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({
                message: 'No token Provided.',
            })
        }

        const decode = jwt.verify(token,jwtPassword);
        const username = decode.username;
        const otherUsers = ALL_USERS.filter(usesr => usesr.username !== username);

        
         res.json({
            persons: ALL_USERS,
        })

    } catch (error) {
        console.error(error.message);
        res.status(401).json({
            message: 'Invalid Token.',
        })
    }

});


app.listen(3000,()=>{
    console.log('App is running at Port 3000.');
})