
import Sidebar from "../features/incidents/components/sidebar";
import Nav from "../features/incidents/components/nav";
import Inicidents from "../features/incidents/pages/Incidents"
import IncidentMaintainer from "../features/incidents/pages/IncidentMaintainer"
import ManageIncidents from "../features/incidents/pages/ManageIncidents"
import { Route, Routes, Outlet  } from "react-router-dom";

const Dashboard = () =>{
    return (
        <div>
             <div className="lg:hidden">
                <Sidebar />
            </div>
            <div className="hidden lg:block">
                <Nav />
            </div> 

            <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<h1 className="text-2xl font-bold">Bienvenido al Dashboard</h1>} />
          <Route path="incidents" element={<Inicidents/>} />
          <Route path="incident-maintainer" element={<IncidentMaintainer />} />
          <Route path="manage-incidents" element={<ManageIncidents />} />
          <Route path="*" element={<h1 className="text-2xl font-bold">Página no encontrada</h1>} />
        </Routes>
        {/* Esto renderizará el contenido de las rutas hijas */}
        <Outlet />
      </div>
        </div>

    );
}

export default Dashboard