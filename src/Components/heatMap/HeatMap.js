import React from "react"

import {useFetch} from '../../hooks/useFetch';

import List from './List';

import './HeatMap.css';

const HeatMap = () => {
    const query = {'owner':"lcpg", 'name': "teste projeto"}
   const params = {headers: query}

    const {data}    = useFetch(`projeto`, params)
    console.log(data)

    if(!data){
        
    return <p>Buscando dados do  projeto </p>
    }

    return (
        <div className="content">
            <div>{process.env.API_URL}</div>
            <h2>HeatMaps</h2>
            <List heatmaps={data.heatMaps} id={data._id}/>
        </div>
    )
}
export default HeatMap;