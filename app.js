import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/jugadoresbasket_controllers.js"

dotenvconfig()
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("funciona la base de datos")
})
.catch((error)=>{
console.log("No funciona", error)
})

const app=express();
app.use(cors());
app.listen(4050, ()=>{
    console.log("se escucha el servidor")
})

test()