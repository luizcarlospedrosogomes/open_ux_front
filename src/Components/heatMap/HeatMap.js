import React from "react"
import { Redirect } from 'react-router-dom'

import {useFetch} from '../../hooks/useFetch';

import List from './List';

import './HeatMap.css';

const HeatMap = () => {
    const {data}    = useFetch(`projeto`)
    
    if(!data){        
        return <p>Buscando dados do  projeto </p>
    }
    console.log(data)
    if(data.status == 401){
        return   <Redirect to={{ pathname: "/login",  }}/>
    }
    

    return (
        <div className="content">
            <div>{process.env.API_URL}</div>
            <h2>HeatMaps</h2>
            <List heatmaps={data.heatMaps} name={data.name}/>
        </div>
    )
}
export default HeatMap;