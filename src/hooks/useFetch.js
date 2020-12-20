import useSWR from 'swr'
import api from '../services/api';

export function useFetch(url, params){
    const { data, error, mutate } = useSWR(url, async url => {
        try {
            const response = await api.get(url, params); 
            console.log(response.status)       
            return response.data;
        } catch (error) {
            console.log(error.response)
             return error.response
        }
        
    })
    
    return { data, error, mutate }
}