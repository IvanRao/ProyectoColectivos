import React from 'react'

export default class RouterForm extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {valueFrom : "", valueTo: "", latFrom: 0, lngFrom: 0, latTo: 0, lngTo: 0 }
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
            
        if(this.state.latTo != 0 & this.state.lngTo != 0 & this.state.latFrom != 0 & this.state.lngFrom != 0){
        
            let destination = {
                from : {
                    lat: this.state.latFrom,
                    lng: this.state.lngFrom
                },
                to : {
                    lat: this.state.latTo,
                    lng: this.state.lngTo                    
                }
            }
            
            console.log(destination)
            this.props.onFind(destination)
        }
        
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
                        <button onClick={this.printRoute} type="button" className="btn btn-secondary btn-block">Buscar rutas</button>
                    </div>
                </div>
            </div>
        )
    }

}
