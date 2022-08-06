const express=require('express');
const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send('hello this is second node')
})

app.listen(port,()=>{
    console.log('listenning port',port)
})
