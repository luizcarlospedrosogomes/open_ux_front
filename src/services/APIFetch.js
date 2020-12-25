
export const APIFetch = (url, values, method) => {
    const apiUrl    = process.env.REACT_APP_API_URL
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
       
    var raw = JSON.stringify(values);

    var requestOptions = {
            method: method,
            headers: myHeaders,
            body: raw,            
    };
    return fetch(apiUrl+url, requestOptions) 
}