import { Link } from "react-router-dom";
import { DASHBOARD_ROUTES } from "../config/routes";

const Nav = () =>{
    return (
        <div className="w-screen h-20 bg-slate-300 flex flex-row justify-between">
            <h2 className="pt-4 pl-4 pr-4  text-white hover:bg-sky-800">Gestión de Inicidentes </h2>
            <ul className="flex flex-row gap-4">
              {DASHBOARD_ROUTES.map((route, index) => (
                <li key={index} className="text-sm p-5 hover:bg-sky-800 text-white">
                    <Link to={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
        </div>

    );
}


export default Nav;