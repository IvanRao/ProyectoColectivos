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
                    <input type="text" value={this.props.from} onChange={(e) => this.changeValue("lat",e.target.value)} />
                </div>
                <div>
                    <span>Lon:</span>
                    <input type="text" value={this.props.to} onChange={(e) => this.changeValue("lng",e.target.value)} />
                </div>
            </div>
        )
    }

}