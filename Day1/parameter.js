const expresss = require('express');
const app = expresss();

app.get('/user/:id',(req,res)=>{
    const userId = req.params.id;
    const userLogedData = [console.log(userId)];
    res.send(`User ID is: ${userId}`);
})

app.listen(3000,()=>{
    console.log('App is listning at port 3000.');
});