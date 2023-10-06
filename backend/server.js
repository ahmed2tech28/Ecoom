import express from "express"
import { config } from "dotenv"
import cors from "cors"

import db from "./config/db"

config()
db()

let app = express()

app.use(express.json())
app.use(cors())

// using routes


app.listen(process.env.PORT, ()=>console.log(`http://localhost:${process.env.PORT}`))