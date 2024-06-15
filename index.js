import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({status:200,message:"HI",})
})


app.listen(8003,()=>{
    console.log(`server are running on port ${8003}`)
})