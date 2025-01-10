import PropTypes from "prop-types";

const IncidentTable = ({ data, onEdit, onDelete }) => (
  <div className="overflow-x-auto max-w-full">
    <table className="min-w-full bg-white border border-gray-200 box-border">
      <thead>
        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">Título</th>
          <th className="py-3 px-6 text-left">Descripción</th>
          <th className="py-3 px-6 text-left">Usuario</th>
          <th className="py-3 px-6 text-left">Severidad</th>
          <th className="py-3 px-6 text-left">Completado</th>
          <th className="py-3 px-6 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {data.map((incident) => (
          <tr key={incident._id} className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6">{incident.title}</td>
            <td className="py-3 px-6 break-words">{incident.description}</td>
            <td className="py-3 px-6">{incident.user}</td>
            <td className="py-3 px-6">{incident.severity}</td>
            <td className="py-3 px-6">{incident.completed ? "Sí" : "No"}</td>
            <td className="py-3 px-6 flex space-x-2">
              <button
                onClick={() => onEdit(incident)}
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(incident._id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

IncidentTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      severity: PropTypes.oneOf(["low", "medium", "high"]).isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default IncidentTable;
