import React from "react"
import { Link, BrowserRouter} from 'react-router-dom'
//componentes
import CodeTracking from './CodeTracking';
//css
import './HeatMap.css'

const List = ({heatmaps, name}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Url</th>
                    <th>Status</th>
                    <th>Code Tracking</th>
                    <th>Ações</th>
                    
                </tr>
            </thead>
            <tbody>
                {heatmaps.map((heatmap, i) =>(
                    <tr key={i}>

                        <td>{heatmap.name}</td>
                        <td>{heatmap.url}</td>
                        <td>{(heatmap.status ? 'Ativo': 'Desativado')}</td>
                        <td><CodeTracking/></td>
                        <td><Link to={{pathname:`/heatmap/${heatmap._id}`}}>Detalhes</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
       
    )
};
export default List;