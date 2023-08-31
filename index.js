import express from "express"
import { connect } from "./database/connection.js";
import defaults from "./defaults.js";

import cors from "cors"
import router from "./router/router.js";
import bodyParser from "body-parser";



const app=express();

connect()


// app.use(bodyParser())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))


app.use(cors())
app.use("/",router)





defaults()

app.listen(8000,()=>{
    console.log("hosted done")
})