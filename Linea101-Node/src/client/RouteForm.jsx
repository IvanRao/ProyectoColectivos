import React from 'react'

export default class RouterForm extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {valueFrom : "", valueTo: "" }
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
            debugger
            const fromP =  fetch("https://maps.googleapis.com/maps/api/geocode/json?key=" + googleKey + "&address=" + this.state.valueFrom)
                .then( r => r.json() )
                .then(msg => {
                    return {lat: msg.results[0].geometry.location.lat, lng: msg.results[0].geometry.location.lng}
                })
            
            const toP =  fetch("https://maps.googleapis.com/maps/api/geocode/json?key=" + googleKey + "&address=" + this.state.valueTo)
                .then( r => r.json() )
                .then(msg => {
                    return {lat: msg.results[0].geometry.location.lat, lng: msg.results[0].geometry.location.lng}
                })

            Promise.all([fromP,toP])
                .then( ([from,to]) => {
                    this.props.onFind( { from , to })
                } )
            
        } else {
            console.log("Defina un Desde y un Hasta")
        }
    
        
    }

    render() {
                                                
        return (
            <div className="row">
                <div className = "col-md-6">
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
