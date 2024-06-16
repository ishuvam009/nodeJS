const expres = require("express");
const app = expres();

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Hello!');
})

//add1 to 10 function
function add(n){
    let ans = 0;
    for (let i=1;i<=n;i++){
        ans += i;
    }
    return ans;
}

app.get('/add',(req,res)=>{
    const result = add(10);
    res.send(result.toString());
})

app.listen(PORT, () => {
    console.log(`Server is listning at PORT ${PORT}`);
})