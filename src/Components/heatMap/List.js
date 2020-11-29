import React from "react"
import { Link, BrowserRouter} from 'react-router-dom'

import './HeatMap.css'

const List = ({heatmaps, id}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Url</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {heatmaps.map((heatmap, i) =>(
                    <tr key={i}>

                        <td>{heatmap.url}</td>
                        <td>{heatmap.url}</td>
                        <td>{(heatmap.status ? 'Ativo': 'Desativado')}</td>
                        <td><Link to={{pathname:`/heatmap/${id}`}}>Detalhes</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
       
    )
};
export default List;