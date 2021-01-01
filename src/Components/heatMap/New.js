import { React, useState} from "react";
import { Redirect, Link } from 'react-router-dom';
//componentes
import {TextField, Submit} from '../inputs/index';
//hooks
import {useFetch} from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
//services
import api, {APIFetch} from '../../services/api'
import './HeatMap.css';

const New = () => {
    const [{ values, loading }, handleChange, handleSubmit] = useForm();
    const [msg,setMsg] = useState('')
    const handleSubmitForm = async () =>{     
        setMsg('')
        try {
            let response = await api.post("/heatmap", values) 
            console.log(response.status)   
            if(response.status == 401) return <Redirect to={{ pathname: "/logout",  }}/>
            if(response.status == 200 || response.status == 201) return window.location.href = "/heatmaps";
            
            
        }catch(error){
            setMsg(error.response.data.msg)
            console.log(error.response.data.msg)
        }
    }

    return ( 
        <>
            <h2>HeatMap</h2>
            
            <form id="formHeatmap" name="heatmap" onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="heatMapName">                    
                    <TextField label="Nome" name="name" type="text" onChange={handleChange}/>
                </div>
                <div>                    
                    <TextField label="URL" name="url" type="text" onChange={handleChange}/>
                </div>
                <div className="heatMapooter">                    
                    <Submit type="submit" value="Cadastrar HeatMap"/>
                </div>
                <div className="message">{msg}</div>
            </form>
        </>
    )
}
export default New;