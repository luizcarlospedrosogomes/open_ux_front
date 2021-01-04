import React from "react"
import { Redirect, Link } from 'react-router-dom'

import {useFetch} from '../../hooks/useFetch';

import List from './List';

import './HeatMap.css';

const HeatMap = () => {
    const {data}    = useFetch(`heatmap`)
    
    console.log(data)

    if(!data) return <p>Buscando HeatMap </p>;    
    
    if(data.status == 401) return <Redirect to={{ pathname: "/login",  }}/>;
    
    if(data.status == 404)  return <p>Nenhum Heatmap cadastrado. <Link to="/heatmap/new">Novo</Link></p>

    return (
        <div className="content">
            <div>{process.env.API_URL}</div>
            <h2>HeatMaps</h2>
            <List heatmaps={data} name={data.name}/>
        </div>
    )
}
export default HeatMap;