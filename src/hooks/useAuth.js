
import { useState } from "react";
import { login, register } from "../services/authService";
import { useNavigate } from "react-router-dom";


const useAuth = () =>{
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const handleLogin = async (credentials) => {
        try {
          const data = await login(credentials);
          
          if (data?.token && data?.usuario) {
            console.log(data);  
            setUser(data.user);
            localStorage.setItem("token", data.token);
            console.log(data.usuario.username)
            localStorage.setItem("username", data.usuario.username);
            setError(null);
            navigate("/dashboard"); // Redirige solo si los datos son válidos
          } else {
            throw new Error("Credenciales inválidas o datos incompletos");
          }
        } catch (err) {
          setError(err.message || "Error al iniciar sesión");
        }
      };

    const handleRegister = async (credentials)=>{
        try {
            const data = await register(credentials);
            setUser(data.user);
            setError(null);
        } catch (error) {
            setError(error.message || "Error al registrarse");
        }
    }

    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("username1");

      navigate("/"); 
  };


    return { user, error, handleLogin, handleRegister, logout };
}

export default useAuth;

