import useSWR from 'swr'
import api from '../services/api';

export function useFetch(url, params){
    const { data, error, mutate } = useSWR(url, async url => {
        console.log(url)
        console.log(params)
        const response = await api.get(url, params);
    
        return response.data;
    })
    
    return { data, error, mutate }
}