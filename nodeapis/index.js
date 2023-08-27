import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

main().catch(err => console.log(err));
const abhiSchema = new mongoose.Schema({
    meranaam: String,
    meragupt:String,
  });

const Abhi = mongoose.model('Abhijit',abhiSchema)//Abhi is class ,Abhijit schema name in database 

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('dbconnected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

















const app = express();
const PORT =5000;
app.use(cors());
app.use(bodyParser.json())

app.post("/demo",async (req,res)=>{
    res.send(req.body);
    let abhi = new Abhi();
    abhi.meranaam=req.body.myname;
    abhi.meragupt = req.body.mypassword;
    const doc = await abhi.save();
    console.log(doc)
    
})

app.get('/demo', async (req, res) => {
  try {
    const docs = await Abhi.find({});
    res.send(docs);
    console.log("get is working");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data.");
  }
});


app.listen(PORT,()=>{
    console.log("you have to alone to be succeed ,just few years")
})