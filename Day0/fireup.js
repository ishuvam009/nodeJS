const expres = require("express");
const app = expres();

const PORT = 3000;

app.get('/',(req,res)=>{
    console.log('Hello!');
})

app.listen(PORT, () => {
    console.log(`Server is listning at PORT ${PORT}`);
})