import axios from "axios";

// Crear la instancia de axios con la URL base
const api = axios.create({
  baseURL: "http://localhost:3000/api", // URL base del backend
});

// Agregar el interceptor para insertar el token en los encabezados
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // O el método que uses para almacenar el token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Agregar el token a los encabezados
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Obtener todos los incidentes
export const fetchIncidents = async () => {
    const username = localStorage.getItem("username");
    if (!username) {
        throw new Error("Usuario no encontrado en localStorage");
    }

    // Llamada con el usuario como parámetro en la URL
    const response = await api.get(`/incidents/${username}`);
    console.log("Respuesta del servidor:", response.data.data, "Usuario:", username);
    return response.data.data; // Ajusta según el formato de respuesta del backend
};


// Crear un nuevo incidente
export const createIncident = async (incident) => {
    try {
      const username = localStorage.getItem("username");
      if (!username) {
        throw new Error("Usuario no encontrado en el localStorage");
      }
  
      incident.user = username;  // Añadir el usuario al objeto incident
      console.log(incident)
      const response = await api.post("/incident", incident);  // Realizar el POST
      return response.data;  // Retornar los datos de la respuesta
  
    } catch (error) {
      console.error("Error al crear el incidente:", error);
      // Manejar el error adecuadamente, como mostrar un mensaje al usuario o registrar el error
      throw error;  // Volver a lanzar el error para manejarlo en otro lugar si es necesario
    }
  };
  

// Actualizar un incidente
export const updateIncident = async (id, incident) => {
  const username = localStorage.getItem("username");
  incident.user = username;
  const response = await api.put(`/incident/${id}`, incident);
  return response.data;
};

// Eliminar un incidente
export const deleteIncident = async (id) => {
  const response = await api.delete(`/incident/${id}`);
  return response.data;
};
