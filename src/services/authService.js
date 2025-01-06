


import axios from 'axios';


const API_URL = "https://miapi.com/auth";

export const login = async (credentials) =>{
    const response = await axios.post(`${API_URL}/login`, credentials)
    return response.data;
}