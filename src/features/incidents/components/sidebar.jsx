import { useState } from "react";

import { DASHBOARD_ROUTES } from "../config/routes";
import { Link } from "react-router-dom";

const Sidebar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    /** {isOpen ?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                className="size-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>} */

    return (
        <div >
           
            <button onClick={toggleMenu} 
                className={`absolute size-6 bg-slate-300 rounded-none-xl top-4 ${isOpen ? "left-44" : "left-4"}`}
            >
               {isOpen ?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                className="size-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>}
            </button>  


            <div
                className={`w-44 bg-slate-400 h-screen absolute top-0 ${isOpen ? "left-0" : "-left-full"} transition-all duration-500 ease-in-out z-40`}
            >
               <h2 className="text-white text-base p-5">Gestión de Inicidentes</h2>
               <ul>
                {DASHBOARD_ROUTES.map((route, index) =>(
                    <li key={index} className="text-sm p-5 hover:bg-sky-800 text-white">
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                ))}
               </ul>
            </div>
            
        </div>
    );


}

export default Sidebar;