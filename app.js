import express from 'express';
const app= express()
import dotenv from 'dotenv'
dotenv.config()

import morgan from 'morgan' 
app.use(morgan("tiny"))
import cors from 'cors' 
app.use(cors())

const PORT=8000

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())


// connecting database
import mongoCLient from './config/db.js'
mongoCLient()
// Load router
import categoryRouter from './router/categoryRouter.js'
app.use('/api/v1/',categoryRouter)

app.use("/", (req,res)=>{
    res.send("hellow woorld")
})

app.listen(PORT, (error)=>{
    if(error)console.log(error);
    console.log(`server running at http://localhost:${PORT}`)
    
})