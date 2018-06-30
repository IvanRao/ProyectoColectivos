
class Point{

    constructor(latitude,longitude){
        this.latitude = latitude
        this.longitude = longitude
    }

    distance(point){
        const R = 6371; // Radius of the earth in km
        const dLat = (point.latitude-this.latitude) * (Math.PI/180)  // deg2rad below
        const dLon = (point.longitude-this.longitude) * (Math.PI/180) 
        const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.latitude * (Math.PI/180)) * Math.cos( point.latitude * (Math.PI/180)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const d = R * c; // Distance in km
        return d;
    }

}

class Stop extends Point{
constructor(data){
    super(data.latitude,data.longitude)
    this.id = data.id
    this.branch_id = data.branch_id
    this.name = data.name
}
}

// configuración de tiempos y velocidades
const walkKmh = 1
const busKmh = 60
const busWaitH = 0.5 
const maxWalkKm = 0.8



module.exports.findRoute = function (busStosData,routeData){
    const allStops = busStosData
                    .reduce( (stops,branch) => stops.concat(branch.stops) ,[])
                    .map(s => new Stop(s))
    
    
    const start = new Point(
            parseFloat(routeData.from.lat),
            parseFloat(routeData.from.lng)
        )
    const destination = new Point(
            parseFloat(routeData.to.lat),
            parseFloat(routeData.to.lng)
        )

    function getNextStop(point){
        if(! point instanceof Stop ){
            return null
        }
        const stopIndx = allStops.findIndex( s => point.id === s.id)
        if( allStops.length -1 === stopIndx ){
            return null
        } else if( allStops[stopIndx + 1].branch_id !== point.branch_id ){
            return null
        } 
        return allStops[stopIndx + 1]
    }
    
    function getCloseStops(from){
        return allStops
                .filter(stop=> from.distance(stop) <= maxWalkKm )
    }
    
    function posiblesNextStops(stop){
        const ns = getNextStop(stop)
        const closestStops = getCloseStops(stop)
        return closestStops.concat( ns ? ns : [] )
    }
    
    
    class Route{
    
        constructor(points){
            this.p = points
        }
    
        isValid(){
            for( let i = 0 ; i < this.p.length - 1 ; i ++ ){
                for( let j = i +1 ; j < this.p.length ; j ++) {
                    if(this.p[i].id != null && this.p[j].id !=null && this.p[i].id == this.p[j].id )
                        return false
                }
            }
            return true
        }
    
        isEqual(otherRoute){
            if(this.p.length !== otherRoute.p.length)
                return false
            for( let i = 0 ; i < otherRoute.p.length ; i ++ ){
                if(otherRoute.p[i].id != null && this.p[i].id !=null && otherRoute.p[i].id != this.p[i].id )
                    return false
            }
            return true
        }
    
        distance(destination){
            const lastPoint = this.p[this.p.length - 1]
            return lastPoint.distance(destination)
        }
    
        getNexRoutes(){
            const lastPoint = this.p[this.p.length - 1]
            const nextStops = posiblesNextStops(lastPoint)
            return nextStops.map( s => new Route (this.p.concat(s)) )
                            .filter(r => r.isValid() )
        }
    
    }
    
    const firstStops = getCloseStops(start) 
    if(firstStops.length < 1){
        throw new Error("No existen paradas para empezar")
    }
    
    const endsStops = getCloseStops(destination)
    if(firstStops.length < 1){
        throw new Error("No existen paradas para empezar")
    }

    const maxRoutes = 10000
    
    let allRoutes = firstStops.map( s => new Route([s]) )
    let go = true
    let maxCount = 50
    while (go) {
        const nextRoutes = allRoutes.map( r =>r.getNexRoutes() )
                                    .filter( r => r.length)
        if(nextRoutes.length === 0 || maxCount === 0 ){
            go = false
        } else {
            nextRoutes.forEach((routes)=>{
                routes.forEach( (r )=>allRoutes.push(r))
            })
        }
        maxCount --
        allRoutes = allRoutes.filter( (r1,i,self) => self.findIndex( r2 => r2.isEqual(r1)) === i )
        allRoutes.sort( (r1,r2) => r1.distance(destination) - r2.distance(destination) )
        if(allRoutes[0].distance(destination) < walkKmh ){
            go = false
        }
        allRoutes = allRoutes.slice(0,maxRoutes)
    }
    
    validRoutes = allRoutes.filter( r => r.distance(destination) < maxWalkKm )
    if(validRoutes.length){
        return validRoutes[0].p
    }
    throw new Error("No hay rutas disponibles") 
}

