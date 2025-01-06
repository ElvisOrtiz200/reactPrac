import LoginForm from "../components/LoginForm"
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
const Login = () => {
    const navigate = useNavigate();
    const handleLogin = async (formData) => {
        try {
          const { token } = await login(formData);
          localStorage.setItem("authToken", token); // Guardar el token
          navigate("/dashboard"); // Redirigir al dashboard
        } catch (error) {
          console.error("Error en el login:", error);
          alert("Credenciales incorrectas");
        }
      };

    return (
        <div  className="flex items-center justify-center min-h-screen bg-gray-100">
           <div className="w-full max-w-md bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold text-center mb-4">Iniciar sesión</h2>
                <LoginForm onSubmit={handleLogin} />
           </div>
        </div>
    );
}

export default Login;