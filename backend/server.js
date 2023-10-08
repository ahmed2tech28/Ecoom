import express from "express"
import { config } from "dotenv"
import cors from "cors"

import db from "./config/db.js"

config()
db()

let app = express()

app.use(express.json())
app.use(cors())

import productRoutes from "./routes/Product.js"
// using routes

app.use("/api/v1/products", productRoutes)


app.listen(process.env.PORT, ()=>console.log(`http://localhost:${process.env.PORT}`))