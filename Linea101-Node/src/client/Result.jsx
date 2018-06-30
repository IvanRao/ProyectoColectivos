import React from 'react'

// borra todas las paradas intermedias
function beautifyRoute( points ){
    console.log(points)
    return points.reduce( (route,point)=> {
        const resp = route.concat(point)
        
        if(resp.length < 3){
            return resp
        }

        if( resp[resp.length - 2].branch_id === resp[resp.length - 1].branch_id &&
            resp[resp.length - 3].branch_id === resp[resp.length - 2].branch_id ){
            resp.splice( resp.length - 2 , 1 )
            return resp
        }
        return resp

    } ,[])
}


export default function Result (props){
    if(! props.route || !props.route.length)
        return null 
    const route = beautifyRoute(props.route)
    const lis = route.map( (point,i)  =>{
        const action = i % 2 == 0 ? "Caminar hasta " : "Bajarse en " 
        const label = point.name + " del ramal #" + point.branch_id
        return <li key={i}>{ action + label }</li>
    })
    return <ul>{lis}</ul>
}