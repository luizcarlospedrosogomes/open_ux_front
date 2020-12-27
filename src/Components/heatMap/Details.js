import React from "react"
import { Redirect } from 'react-router-dom'
import ReactHeatmap  from 'react-heatmap';

import {useFetch} from '../../hooks/useFetch';
import api from '../../services/api'

import './HeatMap.css';

const Details = ({ match }) => {
        
    const {data}        = useFetch(`clicks/${match.params.id}`)    

    if(!data)return <p>Buscando dados do  projeto </p>  
    if(data.status === 401) return   <Redirect to={{ pathname: "/login",  }}/>
    if(data.length === 0)  return <p>Sem dados</p>
    
   const clicks = []
   const dataClicks = data[0].heatMaps[0].clicks
   const screenshot = data[0].heatMaps[0].screenshot[0]
    for(let i = 0; i < dataClicks.length; i++) {
        clicks.push({x:dataClicks[i].x,y:dataClicks[i].y,value:dataClicks[i].event});
    }
    console.log(screenshot)
    return (
        <div className="content">            
            <div style={{width: 1500, height: "92vh"}}>                
				<ReactHeatmap max={150} data={clicks} unit="px" />
            </div>       
        </div>    
    )
}

export default Details;
