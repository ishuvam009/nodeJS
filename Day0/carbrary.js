const express = require('express');
const app = express();

const user = [{
    name: 'John Dee',
    kidney: [{
        healthy: true,
    },
    {
        healthy: true,
    }
]
}];

app.get('/',(req,res)=> {
    const johnKidney = user[0].kidney;
    const noOfKidney = johnKidney.length;

    let noOfHealthyKidney = 0;

    for (let i=0;i<johnKidney.length;i++){
        if (johnKidney[i].healthy){
            noOfHealthyKidney +=1;
        }
    }
    const noOfUnhealthyKidney = noOfKidney-noOfHealthyKidney;
    res.json({
        noOfKidney,
        noOfHealthyKidney,
        noOfUnhealthyKidney
    })
})

app.listen(3000,()=>{
    console.log("App is listning at 3000.");
});