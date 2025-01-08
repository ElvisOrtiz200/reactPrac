


import axios from 'axios';


const API_URL = "http://localhost:3000/api/auth";

export const login = async (credentials) =>{
    try {
        
        const response = await axios.post(`${API_URL}/login`, credentials)
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error desconocido" };
    }
}

export const register = async (credentials)=>{
    try {
        const response = await axios.post(`${API_URL}/register`, credentials);
        return response.data;
    } catch (error) {
        throw error.response?.data || {message : "Error"}
    }
}
