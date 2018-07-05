import React from 'react';
import {
    render
} from 'react-dom';
import RouterForm from './RouteForm';
import Result from './Result';
import NavBarReact from './navbar.jsx';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.findRoute = this.findRoute.bind(this)
        this.state = {
            route: {}
        }
    }

    findRoute(routeData) {
        console.log(routeData)
        fetch("/route", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(routeData)
            }).then(resp => resp.json())
            .then(route => {
                this.setState({
                    route
                })
                const points = route.map(s => ({
                    lat: parseFloat(s.latitude),
                    lng: parseFloat(s.longitude)
                }))
                const waypoints = points.slice(1, -1).map(p => ({
                    location: p,
                    stopover: false
                }))
                points.forEach(parada => {
                    new google.maps.Marker({
                        position: {
                            lat: parada["lat"],
                            lng: parada["lng"]
                        },
                        map: map,
                        draggable: false
                    })
                })


                debugger
                var directionsDisplay = new google.maps.DirectionsRenderer({
                    polylineOptions: {
                        strokeColor: 'red'
                    }
                })
                directionsDisplay.setMap(map);
                var directionsService = new google.maps.DirectionsService;

                directionsService.route({
                    origin: points[0],
                    destination: points[points.length - 1],
                    waypoints: waypoints,
                    optimizeWaypoints: true,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(response);
                        directionsDisplay.setOptions({
                            suppressMarkers: true
                        });
                    } else {
                        console.error(response);
                    }
                })
            })
            .catch(alert)
    }

    render() {
        return (
             <main>
                <NavBarReact />
                <div className = "container-fluid" >
                    <RouterForm onFind = {this.findRoute} /> 
                    <Result route = { this.state.route }/>
                </div> 
            </main>
        )
    }

}

render( < App /> , document.getElementById('app'));

// Mapa de google maps
// var directionsDisplay = new google.maps.DirectionsRenderer;
// var directionsService = new google.maps.DirectionsService;

var bsas = {
    lat: -34.6037,
    lng: -58.3816
};

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: bsas
})
directionsDisplay.setMap(map);

fetch("/allRoutes")
    .then(resp => resp.json())
    .then()
    .catch(console.error)