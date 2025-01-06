import { useState } from "react";



const LoginForm = () =>{
    const [formData, setFormData] = useState({username : "", password : ""});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        onsubmit(formData)
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Nombre de usuario
            </label>
            <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="block w-full border rounded p-2"
                required
            />
            </div>
            <div>   
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
            </label>
            <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full border rounded p-2"
                required
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Iniciar sesión
            </button>
            </div>
        </form>
    );
}



export default LoginForm;