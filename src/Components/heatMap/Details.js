import React from "react"
import {useFetch} from '../../hooks/useFetch';
import ReactHeatmap  from 'react-heatmap';

import './HeatMap.css';

function randFromInterval(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}
const Details = ({ match }) => {
    const {data, error}    = useFetch(`clicks/${match.params.id}`)
   console.log("error")
   console.log(error)
    if(!data){        
        return <p>Buscando dados do  projeto </p>
    }  
    if(data.length === 0){
        return <p>Sem dados</p>
    }
   const clicks = []
   const dataClicks = data[0].heatMaps[0].clicks
   
    for(let i = 0; i < dataClicks.length; i++) {
        clicks.push({x:dataClicks[i].x,y:dataClicks[i].y,value:dataClicks[i].event});
    }
	console.log(clicks)	
    return (
        <div className="content">            
            <div style={{width: 1500, height: "92vh"}}>                
				<ReactHeatmap max={150} data={clicks} unit="px" />
            </div>       
        </div>    
    )
}

export default Details;
