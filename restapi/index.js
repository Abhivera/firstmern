import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

 main().catch(err => console.log(err));

 async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/pyaaradb');
 
   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 }

const wolfSchema = new mongoose.Schema({
   username:String,
   password:String
});

const Abhi = mongoose.model('Abhijit',wolfSchema);







const app = express();
const PORT = 8080;
 app.use(cors());
 app.use(bodyParser.json());
 app.get("/demo",(req,res)=>{
  res.send("hello abhijit");  
 })
 app.post("/abhi",async(req,res)=>{ 
   res.send(req.body);
   let abhi = new Abhi();
   abhi.username=req.body.myname
   abhi.password=req.body.mypassword
   await abhi.save();
 })
 app.listen(PORT,()=>{
    console.log(`The server is running on http://localhost:${PORT}/`)
 })