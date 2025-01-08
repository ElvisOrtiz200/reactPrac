import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForms";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const {handleLogin, error} = useAuth();
    
    const fields = [
        {name: "username", type: "text", label: "Nombre de usuario"},
        {name: "contra", type: "password", label: "Contraseña"}
    ]

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold text-center mb-4">Iniciar sesión</h2>
                <AuthForm
                    onSubmit={handleLogin}
                    fields={fields}
                    buttonText="Iniciar sesión"
                    error={error}
                />
                <div className="text-center mt-4">
                    <span className="text-sm text-gray-600">
                        ¿No tienes usuario?{" "}
                        <Link
                            to="/register"
                            className="text-blue-500 hover:underline"
                        >
                            Regístrate aquí
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Login;