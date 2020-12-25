import { useState, React } from "react";
import { Redirect } from 'react-router-dom'

import {TextField, Submit} from '../inputs/index'
import useForm from '../../hooks/useForm'
import {login} from '../../services/auth';
import {APIFetch} from '../../services/APIFetch'
import './user.css';



const Login = () => {    
    const [{ values, loading }, handleChange, handleSubmit] = useForm();
    const [msg,setMsg] = useState('')
    const handleSubmitForm = async () =>{     
        setMsg('')
        
        try {
            let response = await APIFetch("/user/login", values, 'POST')    
            let json     = await response.json();

            if(response.status === 401){
                setMsg(json.msg)
            }
            console.log(response.status)
            if(response.status == 200 || response.status == 201){
                console.log("to heatmaps")
                login(json.token)
                return   <Redirect to={{ pathname: "/heatmaps",  }}/>
            }
        } catch (error) {
           console.log(error) 
        }
        
    }
    return (
        <>
            <h1>OPENUX</h1>
            <h2>Login</h2>
            
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="loginEmail">                    
                    <TextField label="Email" name="email" type="email" onChange={handleChange}/>
                </div>
                <div>                    
                    <TextField label="Senha" name="password" type="password" onChange={handleChange}/>
                </div>
                <div className="loginFooter">                    
                    <div className="loginButton">
                        <Submit type="submit" value="Login"/>
                    </div>
                </div>
                <div className="message">{msg}</div>
            </form>
        </>
    )
}

export default Login;