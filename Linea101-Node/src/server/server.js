const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const baseFolder = path.resolve(__dirname,'../../public')

app.use("/",express.static(baseFolder))

app.listen(8080,()=>{
    console.log("Server UP!")
})


