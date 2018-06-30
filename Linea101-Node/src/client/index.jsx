import React from 'react';
import {render} from 'react-dom';
import RouterForm from './RouteForm';
import Result from './Result';

class App extends React.Component{

  constructor(props){
    super(props)
    this.findRoute = this.findRoute.bind(this)
    this.state = { route : {} }
  }

  findRoute(routeData){
    console.log(routeData)
    fetch("/api/branch",{
      method : "POST",
      headers : {
        "content-type":"application/json"
      },
      body : JSON.stringify(routeData)
    }).then(resp => resp.json())
      .then( route => this.setState({route}) 
        // TODO dibujar la ruta en el mapa
      )
      .catch(alert)
  }

  render(){
    return ( 
      <main>
        <RouterForm onFind={this.findRoute}/>
        <Result route={this.state.route} />
      </main>
    )
  }

}

render(<App/>, document.getElementById('app'));

// Mapa de google maps
var directionsDisplay = new google.maps.DirectionsRenderer;
var directionsService = new google.maps.DirectionsService;

var bsas = {lat: -34.6037, lng: -58.3816};

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: bsas
})
directionsDisplay.setMap(map);

fetch("/api/branch")
  .then(reps => resp.json())
  .then()
  .catch(console.error)