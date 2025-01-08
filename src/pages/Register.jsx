import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForms";
import useAuth from "../hooks/useAuth";



const Register = () =>{
    const {handleRegister, error} = useAuth();
    const fields = [
        { name: "username", type: "text", label: "Nombre de usuarioo" },
        { name: "contra", type: "password", label: "Contraseña" },
        {
            name: "rol",
            type: "select", // Tipo especial para identificar el combobox
            label: "Rol", // Etiqueta para el campo
            options: [
              { value: "resolver", label: "Resuelve incidentes" },
              { value: "ingresar", label: "Ingresa incidentes" },
            ],
          },
        { name: "confirmPassword", type: "password", label: "Confirmar contraseña" },
    ];


    const handleSubmit = async (formData) => {
        if (formData.contra !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        await handleRegister(formData);  {/* Aquí pasamos handleRegister */}
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold text-center mb-4">Registrarse</h2>
                <AuthForm
                    onSubmit={handleSubmit}  
                    fields={fields}
                    buttonText="Registrarse"
                    error={error} 
                />
                 <div className="text-center mt-4">
                   
                   <Link
                       to="/"
                       className="text-blue-500 hover:underline"
                   >
                       Iniciar Sesión
                   </Link>
           </div>
            </div>
           
        </div>
    );

};

export default Register;