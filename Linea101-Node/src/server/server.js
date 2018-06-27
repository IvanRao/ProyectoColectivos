const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const fecth = require('node-fetch')
const app = express()
const appModule = require('./app')

const baseFolder = path.resolve(__dirname,'../../public')

app.use("/",express.static(baseFolder))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let allData = []

const urls = [
    "http://localhost:8000/api/branch/1",
    "http://localhost:8000/api/branch/2",
]

app.get("/test", function(req, resp){
    resp.end("Hola mundo")
}) //Esto es un servicio

app.get("/test2", (req, resp)=>{
    resp.json({"msg":"Works!"})
}) //Envía un JSON

app.get("/colectivos", (req, resp)=>{
    
    let promises = []

    urls.forEach((url) => {
        promises.push(fecth(url).then(function(res) {return res.json()} ))
    })

    Promise.all(promises).then(function(data) {
        resp.json(data)        
    }).catch(function (error) {
        console.log(error);
    })
})

app.post("/api/branch/", (req, resp)=>{
    const dest = req.body
    let from = dest.start
    let to = dest.end
    let route = appModule.obtainRoute(from, to)
    resp.json(route)
})


app.listen(8080,()=>{
    console.log("Server UP!")
})


