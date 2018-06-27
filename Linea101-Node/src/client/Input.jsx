import React from 'react';
import {render} from 'react-dom';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {valueFrom : "", valueTo: "", latFrom: 0, lngFrom: 0, latTo: 0, lngTo: 0, route : {} }
        this.getInputValueFrom = this.getInputValueFrom.bind(this);
        this.getInputValueTo = this.getInputValueTo.bind(this);
        this.printRoute = this.printRoute.bind(this);
    }
    
    getInputValueFrom(event) {
        this.setState({valueFrom: event.target.value});
    }
    
    getInputValueTo(event) {
        this.setState({valueTo: event.target.value});
    }
    
    printRoute(){
        
        let googleKey = "AIzaSyD-9eVfLZ8aOuIUrh84nDcvAZsS53RRoiQ"
        
        if(this.state.valueFrom != "" & this.state.valueTo != ""){
            
            /*Hago dos fetch para poder obtener las Latitudes y Longitudes del Desde y el Hasta y asigno los resultados a 
            sus correspondientes estados*/
            fetch("https://maps.googleapis.com/maps/api/geocode/json?key=" + googleKey + "&address=" + this.state.valueFrom)
                .then( r => r.json() )
                .then(msg => {
                    this.setState({latFrom: msg.results[0].geometry.location.lat, lngFrom: msg.results[0].geometry.location.lng})
                    console.log("Lat Desde: " + this.state.latFrom + " Lng Desde: " + this.state.lngFrom)
                })
            
            fetch("https://maps.googleapis.com/maps/api/geocode/json?key=" + googleKey + "&address=" + this.state.valueTo)
                .then( r => r.json() )
                .then(msg => {
                    this.setState({latTo: msg.results[0].geometry.location.lat, lngTo: msg.results[0].geometry.location.lng})
                    console.log("Lat Hasta: " + this.state.latTo + " Lng Hasta: " + this.state.lngTo)
                })
            
        } else {
            console.log("Defina un Desde y un Hasta")
        }
        
        setTimeout(()=>{
            
            if(this.state.latTo != 0 & this.state.lngTo != 0 & this.state.latFrom != 0 & this.state.lngFrom != 0){
           
           /*En este fetch envio las latitudes y longitudes del Desde y Hasta y me retorna el recorrido*/
            let destination = {
                start : {
                    lat: this.state.latFrom,
                    lng: this.state.lngFrom
                },
                end : {
                    lat: this.state.latTo,
                    lng: this.state.lngTo                    
                }
            }
            
            console.log(destination)
            
            fetch("/api/branch/", {method:"POST", headers:{'content-type': 'application/json'}, body : JSON.stringify(destination)})
                .then( r => r.json())
                .then(msg => {
                    this.setState({route: msg});
                })
            } else {
                console.log("Hubo errores")
            }
        },3000)
    }   
    
    render() {
                                                 
        return (
            <div className="row">
                <div className = "col-4">
                    <label className="sp">Desde: </label>
                    <input type="text" value={this.state.valueFrom} onChange={this.getInputValueFrom} className="form-control" />
                    <label className="sp">Hasta: </label>
                    <input type="text" value={this.state.valueTo} onChange={this.getInputValueTo} className="form-control"/>
                    <div className="sp">
                        <button onClick={this.printRoute} type="button" className="btn btn-secondary btn-block">Buscar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Input;