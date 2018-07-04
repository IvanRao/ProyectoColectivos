function appStop(){
    const data = {
        branch : {},
        modStop : {
            address : ""
        },
        stopToCreate : {
            name :"",
            order : 0,
            latitude : 0,
            longitude : 0,
            branch_id : 0,
            address : ""
        },
        fillStop : {}
    }

    const searchParams = new URLSearchParams(window.location.search.substring(1));
    const branchId = searchParams.get("id")

    const googleKey = "AIzaSyDwpxOB_1gTbUHGwkyQ6XdCRXZG6hX3t94";
    const geocoder = new google.maps.Geocoder;
    let map;
    let directionsDisplay;
    let directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer({ 
        polylineOptions: {strokeColor:"#4a4a4a",strokeWeight:5}, 
        suppressMarkers:true });

    setTimeout(()=>{
        let bsas = {lat: -34.6037, lng: -58.3816};
        let mapOptions = {
            zoom: 12,
            center: bsas
        }

        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        map.addListener("click", (e) => {
            placeMarker(event.latLng);
        });

        directionsDisplay.setMap(map);

    } , 100)

    function placeMarker(location) {
        var marker = new google.maps.Marker({
            position: location, 
            map: map,
            suppressMarkers: true
        });
    }

    function updateMarkers (stops){

        const points = stops.map( s => ({lat:s.latitude,lng:s.longitude, number: s.order, name: s.name, branch_id: s.branch_id, id : s.id}))

        points.forEach( p => {
            const marker = new google.maps.Marker({
                position: p,
                map: map,
                draggable: false,
                label: "" + p.number
            })
            marker.addListener("dragend",()=> {
                axios.put("api/stop/" + p.id, {latitude:marker.position.lat() , longitude: marker.position.lng(), number: p.order, name: p.name, branch_id: p.branch_id, })
                    .then( r => updatePage() )
                    .catch(error => console.error(error.response ? error.response.data : error))
            })
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
            } else {
                console.error(response);
            }
        })
    }

    function updatePage(){
        axios.get(`api/branch/${branchId}`)
        .then(resp => { 
            data.branch = resp.data
            updateMarkers(data.branch.stops.sort(function(a,b) {return (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0);}))
        })
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
        stop.address == geocodeLatLng(geocoder, stop)
        axios.get("api/stop/" + stop.id)
            .then((resp)=>
                  data.modStop = resp.data,
                  data.modStop.address = stop.address
                 )
            .catch((err)=>
                   console.error(err.response.data)
                  )
    }

    // function fillModifyModal(fillStop){
    //     fetch("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + fillStop.latitude + ","+ fillStop.longitude + "&sensor=true")
    //     .then( r => r.json() )
    //     .then(msg => {
    //         fillStop.address = msg.results[0];

    //         axios.get("api/stop/" + fillStop.id)
    //         .then((resp)=>{
    //               data.modStop = resp.data,
    //               data.modStop.address = fillStop.address
                 
    //         })
    //         .catch((err)=>{
    //                console.error(err.response.data)
    //         }) 
    //     })
    // }

    function geocodeLatLng(geocoder, stop) {
        var latlng = {lat: stop.latitude, lng: stop.longitude};
        geocoder.geocode({'location': latlng}, function(results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    return results[0]
                }
            } else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    }

    function modifyStop(modStop){
        fetch("https://maps.googleapis.com/maps/api/geocode/json?key=" + googleKey + "&address=" + this.modStop.address)
        .then( r => r.json() )
        .then(msg => {
            this.modStop.latitude = msg.results[0].geometry.location.lat;
            this.modStop.longitude = msg.results[0].geometry.location.lng;

            axios.put("api/stop/" + modStop.id, {order:modStop.order, name:modStop.name, latitude:modStop.latitude, longitude:modStop.longitude, branch_id:modStop.branch_id})
            .then((resp)=>{
                data.modStop.name = "";   
                data.modStop.order = 0; 
                data.modStop.latitude = 0; 
                data.modStop.longitude = 0;
                updatePage(); 
            })
            .catch((err)=>{
                console.error(err.response.data)
            }) 
        })
    }

    function addStop (stopToCreate){
        stopToCreate.branch_id = branchId
        fetch("https://maps.googleapis.com/maps/api/geocode/json?key=" + googleKey + "&address=" + this.stopToCreate.address)
            .then( r => r.json() )
            .then(msg => {
                this.stopToCreate.latitude = msg.results[0].geometry.location.lat;
                this.stopToCreate.longitude = msg.results[0].geometry.location.lng;
                console.log("Lat: " + this.stopToCreate.latitude + " Lng: " + this.stopToCreate.longitude);
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
            })
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

