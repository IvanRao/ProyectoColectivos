module.exports.obtainRoute= function(from, to){
    
    const allData = [{"id":1,"name":"Ingeniero Budge - Retiro","created_at":"2018-06-17 20:44:23","updated_at":"2018-06-17 20:44:23","stops":[{"id":3,"order":1,"name":"Estacion Budge","latitude":-34.71931254,"longitude":-58.46209804,"branch_id":1,"created_at":"2018-06-27 03:33:14","updated_at":"2018-06-27 03:33:14"},{"id":4,"order":2,"name":"Recondo y Montiel","latitude":-34.71746936,"longitude":-58.45586469,"branch_id":1,"created_at":"2018-06-27 03:33:55","updated_at":"2018-06-27 03:33:55"},{"id":5,"order":3,"name":"Camino Pres. Juan Domingo Per\u00f3n y Necol","latitude":-34.71339241,"longitude":-58.45240464,"branch_id":1,"created_at":"2018-06-27 03:34:52","updated_at":"2018-06-27 03:34:52"},{"id":6,"order":4,"name":"Terminal La Noria","latitude":-34.70702522,"longitude":-58.45390668,"branch_id":1,"created_at":"2018-06-27 03:36:12","updated_at":"2018-06-27 03:36:12"},{"id":7,"order":5,"name":"Av. Gral. Paz y Av. Coronel Roca","latitude":-34.69809336,"longitude":-58.47011022,"branch_id":1,"created_at":"2018-06-27 03:37:05","updated_at":"2018-06-27 03:37:05"},{"id":8,"order":6,"name":"Plaza la Democracia","latitude":-34.69128997,"longitude":-58.46371583,"branch_id":1,"created_at":"2018-06-27 03:38:19","updated_at":"2018-06-27 03:38:19"},{"id":9,"order":7,"name":"A. Salvat","latitude":-34.68645598,"longitude":-58.46651147,"branch_id":1,"created_at":"2018-06-27 03:39:44","updated_at":"2018-06-27 03:39:44"},{"id":10,"order":8,"name":"Estaci\u00f3n X Lugano","latitude":-34.68358808,"longitude":-58.47003731,"branch_id":1,"created_at":"2018-06-27 03:40:38","updated_at":"2018-06-27 03:40:38"},{"id":11,"order":9,"name":"Easy Escalada","latitude":-34.67639338,"longitude":-58.4624484,"branch_id":1,"created_at":"2018-06-27 03:41:44","updated_at":"2018-06-27 03:41:44"},{"id":12,"order":10,"name":"Jumbo Parque Brown","latitude":-34.67401563,"longitude":-58.45984915,"branch_id":1,"created_at":"2018-06-27 03:42:46","updated_at":"2018-06-27 03:42:46"},{"id":13,"order":11,"name":"Au. Pres. H\u00e9ctor Jos\u00e9 C\u00e1mpora","latitude":-34.66503394,"longitude":-58.44987429,"branch_id":1,"created_at":"2018-06-27 03:44:08","updated_at":"2018-06-27 03:44:08"},{"id":14,"order":12,"name":"Av. de la Cruz y Av. LaFuente","latitude":-34.65976903,"longitude":-58.44251833,"branch_id":1,"created_at":"2018-06-27 03:45:29","updated_at":"2018-06-27 03:45:29"},{"id":15,"order":13,"name":"Av. de la Cruz y Av. Perito Moreno","latitude":-34.65043436,"longitude":-58.43130507,"branch_id":1,"created_at":"2018-06-27 04:27:15","updated_at":"2018-06-27 04:27:15"}]}]

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
        this.number = data.number
        this.branch_id = data.branch_id
        this.name = data.name
    }
    }

    // configuración de tiempos y velocidades
    const walkKmh = 1
    const busKmh = 60
    const busWaitH = 0.5 
    const maxWalkKm = 1.2 //Solo se utiliza esta variable

    const allStops = allData
                    .reduce( (stops,branch) => stops.concat(branch.stops) ,[])
                    .map(s => new Stop(s))

    const start = new Point(from.lat, from.lng)
    const destination = new Point (to.lat, to.lng)

    function getBranchById(id){
        return allData.find( branch => branch.id === id)
    }

    function getNextStop(point){ // Obtiene la próxima parada de un mismo ramal a partir de una parada
        if(! point instanceof Stop ){
            return null
        }
        const stopIndx = allStops.findIndex( s => point.number === s.number)
        if( allStops.length -1 === stopIndx ){
            return null
        } else if( allStops[stopIndx + 1].branch_id !== point.branch_id ){
            return null
        } 
        return allStops[stopIndx + 1]
    }

    function getCloseStops(from){// Le paso un punto (no una parada) y me obtiene la parada más cercana
        return allStops
                .filter(stop=> from.distance(stop) <= maxWalkKm )
    }

    function posiblesNextStops(stop){ // Obtiene las 8 posibles siguientes paradas pasando una parada
        const ns = getNextStop(stop)
        const closestStops = getCloseStops(stop)
        return closestStops.concat( ns ? ns : [] )
    }


    class Route{

        constructor(points){
            this.p = points //p es la lista de puntos
        }

        isValid(){ //Se fija si hay 
            for( let i = 0 ; i < this.p.length - 1 ; i ++ ){
                for( let j = i +1 ; j < this.p.length ; j ++) {
                    if(this.p[i].number != null && this.p[j].number !=null && this.p[i].number == this.p[j].number )
                        return false
                }
            }
            return true
        }

        isEqual(otherRoute){ //Compara si dos rutas son iguales
            if(this.p.length !== otherRoute.p.length)
                return false
            for( let i = 0 ; i < otherRoute.p.length ; i ++ ){
                if(otherRoute.p[i].number != null && this.p[i].number !=null && otherRoute.p[i].number != this.p[i].number )
                    return false
            }
            return true
        }

        distance(destination){//
            const lastPoint = this.p[this.p.length - 1]
            return lastPoint.distance(destination)
        }

        getNexRoutes(){//Permite conocer las posibles siguientes rutas
            const lastPoint = this.p[this.p.length - 1]
            const nextStops = posiblesNextStops(lastPoint)
            return nextStops.map( s => new Route (this.p.concat(s)) )
                            .filter(r => r.isValid() )
        }

        //Ruta: Secuencia de paradas de diferentes ramalas

    }

    const firstStops = getCloseStops(start) 
    if(firstStops.length < 1){
        throw new Error("Para el inicio no existen paradas para empezar")
    }

    const endsStops = getCloseStops(destination)
    if(endsStops.length < 1){
        throw new Error("Para el destino no existen paradas para empezar")
    }


    const maxRoutes = 5000 //Máxima cantidad de rutas a calcular

    let allRoutes = firstStops.map( s => new Route([s]) )
    let go = true
    let maxCount = 30
    while (go) {
        //console.log(allRoutes[0].distance(destination))
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

    return validRoutes[0] //Mostrar las cuatro primeras

}

