import React from 'react'
import {render} from 'react-dom';
import LatLongFields from './LatLongFields';

export default class RouterForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            from : { lat : -34.72140969215578 , lng : -58.46293106807826},
            to : { lat : -34.677398798798066 , lng : -58.46412897519815}
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(id,field,value){
        this.setState( prevState => {
            const newField = Object.assign({},prevState[id],{[field]:value})
            return Object.assign({},prevState,{[id]:newField})
        })
    }

    render(){
        return (
            <div>
                <LatLongFields 
                    id="from" 
                    title="Desde" 
                    value={this.state.from}
                    onChange={this.onChange} />
                <LatLongFields 
                        id="to" 
                        title="Hasta" 
                        value={this.state.to}
                        onChange={this.onChange} />
                <button onClick={() => this.props.onFind(this.state)}>Buscar routa</button>
            </div>
        )
    }
    
    // constructor(props) {
    //     super(props);
    //     this.state = {valueFrom : "", valueTo: "", latFrom: 0, lngFrom: 0, latTo: 0, lngTo: 0, route : {} }
    //     this.getInputValueFrom = this.getInputValueFrom.bind(this);
    //     this.getInputValueTo = this.getInputValueTo.bind(this);
    //     this.printRoute = this.printRoute.bind(this);
    // }
    
    // getInputValueFrom(event) {
    //     this.setState({valueFrom: event.target.value});
    // }
    
    // getInputValueTo(event) {
    //     this.setState({valueTo: event.target.value});
    // }
    
    // printRoute(){
        
    //     let googleKey = "AIzaSyD-9eVfLZ8aOuIUrh84nDcvAZsS53RRoiQ"
        
    //     if(this.state.valueFrom != "" & this.state.valueTo != ""){
            
    //         /*Hago dos fetch para poder obtener las Latitudes y Longitudes del Desde y el Hasta y asigno los resultados a 
    //         sus correspondientes estados*/
    //         fetch("https://maps.googleapis.com/maps/api/geocode/json?key=" + googleKey + "&address=" + this.state.valueFrom)
    //             .then( r => r.json() )
    //             .then(msg => {
    //                 this.setState({latFrom: msg.results[0].geometry.location.lat, lngFrom: msg.results[0].geometry.location.lng})
    //                 console.log("Lat Desde: " + this.state.latFrom + " Lng Desde: " + this.state.lngFrom)
    //             })
            
    //         fetch("https://maps.googleapis.com/maps/api/geocode/json?key=" + googleKey + "&address=" + this.state.valueTo)
    //             .then( r => r.json() )
    //             .then(msg => {
    //                 this.setState({latTo: msg.results[0].geometry.location.lat, lngTo: msg.results[0].geometry.location.lng})
    //                 console.log("Lat Hasta: " + this.state.latTo + " Lng Hasta: " + this.state.lngTo)
    //             })
            
    //         } else {
    //             console.log("Defina un Desde y un Hasta")
    //         }
            
    //         if(this.state.latTo != 0 & this.state.lngTo != 0 & this.state.latFrom != 0 & this.state.lngFrom != 0){
            
    //         let destination = {
    //             start : {
    //                 lat: this.state.latFrom,
    //                 lng: this.state.lngFrom
    //             },
    //             end : {
    //                 lat: this.state.latTo,
    //                 lng: this.state.lngTo                    
    //             }
    //         }
            
    //         console.log(destination)
    //         }
    //     }
     
    
    // render() {
                                                 
    //     return (
    //         <div className="row">
    //             <div className = "col-4">
    //                 <label className="sp">Desde: </label>
    //                 <input type="text" value={this.state.valueFrom} onChange={this.getInputValueFrom} className="form-control" />
    //                 <label className="sp">Hasta: </label>
    //                 <input type="text" value={this.state.valueTo} onChange={this.getInputValueTo} className="form-control"/>
    //                 <div className="sp">
    //                     <button onClick={this.printRoute} type="button" className="btn btn-secondary btn-block">Mostrar opciones</button>
    //                 </div>
    //                 <div className="row">
    //                     <div className="col-12 sp" >
    //                     </div>                  
    //                 </div>
    //             </div>
    //             <div id="map" className="col-8"/>
    //         </div>
    //     )
    // }
}
