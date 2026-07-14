const express= require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

//connection
mongoose.connect("mongodb://Amritha:Amritha043@ac-o22rub6-shard-00-00.trbtgpr.mongodb.net:27017,ac-o22rub6-shard-00-01.trbtgpr.mongodb.net:27017,ac-o22rub6-shard-00-02.trbtgpr.mongodb.net:27017/nssdb?ssl=true&replicaSet=atlas-bu3c5t-shard-0&authSource=admin&appName=Cluster0").then(
    ()=>{
        console.log("MongoDB connected")
    }
).catch(
    (error)=>{
        console.log(error)
    }
)

const Nss = mongoose.model("volunteer", new mongoose.Schema({
    volunteer_id: Number,
    full_name: String,
    email: String,
    phone: String,
    date_of_birth: String,
    gender: String,
    blood_group: String,
    department: String,
    year_of_Study: String,
    camp_name: String,
    hours_completed: String,
    address: String,
    unit_number: String
}));


app.post("/add-volunteer",async(req,res)=>{
    await Nss.create(req.body)
    res.json({"status":"success"})
})

app.get("/view-volunteer",async(req,res)=>{
    const nsss=await Nss.find()
    res.json(nsss)
})

app.listen(3001,()=>{
    console.log("server started")
})