function appStop(){

    const data = {
        branch : {},
        modStop : {},
        stopToCreate : {
            name :"",
            order : 0,
            latitude : 0,
            longitude : 0,
            branch_id : 0
        }
    }

    const searchParams = new URLSearchParams(window.location.search.substring(1));
    const branchId = searchParams.get("id")
    
    function updatePage(){
        axios.get(`api/branch/${branchId}`)
            .then(resp => data.branch = resp.data)
            .catch(error => console.error(error.response.data))
    }

    function deleteStop(stop){
        axios.delete("api/stop/" + stop.id)
            .then((resp)=>updatePage())
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    function fillModifyModal(stop){
        axios.get("api/stop/" + stop.id)
            .then((resp)=>
                data.modStop = resp.data
            )
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    function modifyStop(stop){
        axios.put("api/stop/" + stop.id, {order:stop.order, name:stop.name, latitude:stop.latitude, longitude:stop.longitude, branch_id:stop.branch_id})
        .then((resp)=>{
            updatePage();
            data.modStop.name = "";   
            data.modStop.order = 0; 
            data.modStop.latitude = 0; 
            data.modStop.longitude = 0; 
        })
        .catch((err)=>
            console.error(err.response.data)
        )
    }

    setTimeout( () =>{
        var bsas = {lat: -34.6037, lng: -58.3816};
    
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: bsas
        })

        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        directionsDisplay.setMap(map);

        map.addListener("click", (e) => {
            const latLng = e.latLng
            data.stopToCreate.latitude = latLng.lat()
            data.stopToCreate.longitude = latLng.lng()
        })
        
    },100)

    setTimeout( () =>{
        var bsas = {lat: -34.6037, lng: -58.3816};
    
        var map2 = new google.maps.Map(document.getElementById('map2'), {
            zoom: 12,
            center: bsas
        })

        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        directionsDisplay.setMap(map2);

        map2.addListener("click", (e) => {
            const latLng = e.latLng
            data.modStop.latitude = latLng.lat()
            data.modStop.longitude = latLng.lng()
        })
        
    },100)

    setTimeout( () =>{
        var bsas = {lat: -34.6037, lng: -58.3816};
    
        var map3 = new google.maps.Map(document.getElementById('map3'), {
            zoom: 12,
            center: bsas
        })

        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        directionsDisplay.setMap(map3);

        map3.addListener("click", (e) => {
            const latLng = e.latLng
            data.modStop.latitude = latLng.lat()
            data.modStop.longitude = latLng.lng()
        })
        
    },100)

    let markers = []

    function updateMarkers (stops){

        markers.forEach(m=> m.setMap(null))
        markers = []

        const points = stops.map( s => ({lat:s.latitude,lng:s.longitude, id : s.id}))

        points.forEach( p => {    
            const marker = new google.maps.Marker({
                position: p,
                map: map,
                draggable: true,
                label: "" + p.id
            })
            marker.addListener("dragend",()=> {
                axios.put(`api/stop/${p.id}`,{latitude : marker.position.lat() , longitude : marker.position.lng()})
                    .then( r => updatePage() )
                    .catch(error => console.error(error.response ? error.response.data : error))
            })

            markers.push(marker)

        })

        const waypoints =  points.slice(1, -1).map( p => ({ location : p , stopover : false}))

        directionsService.route({
            origin: points[0],
            destination: points[points.length - 1],
            waypoints: waypoints,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
        },function(response, status) {
            if (status === 'OK') {
            directionsDisplay.setDirections(response);
            directionsDisplay.setOptions({
                    suppressMarkers: true
                });
            } else {
                console.error(response);
            }
        })

    }

    function addStop (stopToCreate){
        stopToCreate.branch_id = branchId
        axios.post("api/stop",stopToCreate)
            .then(resp => { 
                data.stopToCreate =  {
                    order : 0,
                    name :"",
                    latitude : 0,
                    longitude : 0
                }
                updatePage()
            })
            .catch(error => console.error(error.response.data))
    }
    
    //Comando Vue Js

    new Vue({
        el: '#appStop',
        data: data,
        methods:{
            deleteStop : deleteStop,
            addStop : addStop,
            modifyStop : modifyStop,
            fillModifyModal : fillModifyModal,
            updateMarkers : updateMarkers
        }
    })
    updatePage();
}
