import React from 'react'

export default class LatLongFields extends React.Component{

    constructor(props){
        super(props)
        
    }

    changeValue(field,value){
        this.props.onChange(this.props.id,field,value)
    }

    render(){
        return (
            <div>
                <label>{this.props.title}</label>
                <div>
                    <span>Lat:</span>
                    <input type="number" value={this.props.value.lat} onChange={(e) => this.changeValue("lat",e.target.value)} />
                </div>
                <div>
                    <span>Lon:</span>
                    <input type="number" value={this.props.value.lng} onChange={(e) => this.changeValue("lng",e.target.value)} />
                </div>
            </div>
        )
    }

}