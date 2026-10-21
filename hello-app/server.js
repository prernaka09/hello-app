const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("HEllo Prerna Kanherkar");
});

app.listen(3000,()=>{
    console.log('Server running on port 3000');
});