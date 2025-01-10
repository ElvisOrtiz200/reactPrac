import { Link } from "react-router-dom";
import { DASHBOARD_ROUTES } from "../config/routes";
import useAuth from "../../../hooks/useAuth"; // Importar el hook para el logout

const Nav = () => {
    const { logout } = useAuth(); // Obtener la función logout desde el hook

    const handleRouteClick = (route) => {
        if (route.onClick === "logout") {
            logout(); // Ejecutar logout si es necesario
        }
    };

    return (
        <div className="w-screen h-20 bg-slate-300 flex flex-row justify-between items-center px-4">
            {/* Título o logo */}
            <h2 className="text-white hover:bg-sky-800 p-2 rounded cursor-pointer">
                Gestión de Incidentes
            </h2>

            {/* Lista de rutas */}
            <ul className="flex flex-row gap-4">
                {DASHBOARD_ROUTES.map((route, index) => (
                    <li
                        key={index}
                        className="text-sm p-3 hover:bg-sky-800 text-white rounded cursor-pointer"
                        onClick={() => handleRouteClick(route)} // Manejar clics en rutas
                    >
                        {route.path ? (
                            <Link to={route.path}>{route.name}</Link> // Usar Link si hay un path
                        ) : (
                            <span>{route.name}</span> // Mostrar solo texto si no hay path
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nav;
