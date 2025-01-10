import { useState, useEffect } from "react";
import { fetchIncidents, createIncident, updateIncident, deleteIncident } from "../services/incident";
import IncidentTable from "../components/IncidentTable";
import IncidentForm from "../components/IncidentForm";

const Incident = () => {
  const [incidents, setIncidents] = useState([]);
  const [editingIncident, setEditingIncident] = useState(null);

  useEffect(() => {
    const loadIncidents = async () => {
      const data = await fetchIncidents();
      setIncidents(data);
    };
    loadIncidents();
  }, []);

  const handleCreateOrUpdate = async (incident) => {
    if (editingIncident) {
      await updateIncident(editingIncident._id, incident);
    } else {
      await createIncident(incident);
    }
    const data = await fetchIncidents();
    setIncidents(data);
    setEditingIncident(null);
  };

  const handleDelete = async (id) => {
    await deleteIncident(id);
    setIncidents(incidents.filter((incident) => incident._id !== id));
  };

  return (
    <div>
      <h1>Gestión de Incidentes</h1>
      <IncidentForm
        onSubmit={handleCreateOrUpdate}
        initialData={editingIncident}
      />
      <IncidentTable
        data={incidents}
        onEdit={setEditingIncident}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Incident;
