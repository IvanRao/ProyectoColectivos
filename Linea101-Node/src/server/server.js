const path = require("path")
const express = require("express")
const ServerMockup = require("./ServerMockup") // TODO cambiar por la llamada al servicio de laravel
const findLogic = require("./FindLogic")
const app = express()


const baseFolder = path.resolve(__dirname,'../../public')

app.use("/",express.static(baseFolder))

app.use(express.json())

app.get("/allRoutes",(req,resp)=>{
    ServerMockup()
        .then( busStopsData => resp.json(busStopsData) )
})

app.post("/route",(req,resp) => {
    const routeData = req.body
    ServerMockup()
        .then( busStopsData =>{
            const route = findLogic.findRoute(busStopsData,routeData)
            resp.json(route) 
        })
        .catch( (err) => {
            console.error(err)
            resp.json({error :err.message})
        } )
})

app.listen(8080,()=>{
    console.log("Server UP!")
})