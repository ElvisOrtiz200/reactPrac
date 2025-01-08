


import axios from 'axios';

/**https://nodeprac-s89d.onrender.com 
 * http://localhost:3000
*/
const API_URL = "https://nodeprac-s89d.onrender.com/api/auth";

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
