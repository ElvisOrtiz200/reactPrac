import PropTypes from 'prop-types'; // Importa PropTypes
import { useState } from 'react';

const AuthForm = ({ onSubmit, fields, buttonText, error }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    if (onSubmit) {
        await onSubmit(formData); // Llama a la función pasada como prop
    } else {
        console.error("onSubmit no está definido.");
    }
};

return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {fields.map(({ name, type, label, options }) => (
        <div key={name}>
          <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          {type === "select" ? ( // Renderiza un combobox si el tipo es "select"
            <select
              name={name}
              id={name}
              value={formData[name]}
              onChange={handleChange}
              className="block w-full border rounded p-2"
              required
            >
              <option value="" disabled>Seleccione una opción</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : ( // Renderiza un input para otros tipos
            <input
              type={type}
              name={name}
              id={name}
              value={formData[name]}
              onChange={handleChange}
              className="block w-full border rounded p-2"
              required
            />
          )}
        </div>
      ))}
      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        {buttonText}
      </button>
    </form>
  );
};

// Validación de las props del componente con PropTypes
AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // onSubmit debe ser una función y es requerida
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired, // name debe ser un string y es requerido
    type: PropTypes.string.isRequired, // type debe ser un string y es requerido
    label: PropTypes.string.isRequired, // label debe ser un string y es requerido
  })).isRequired, // fields debe ser un arreglo de objetos con las propiedades mencionadas
  buttonText: PropTypes.string.isRequired, // buttonText debe ser un string y es requerido
  error: PropTypes.string, // error debe ser un string, no es requerido
};

export default AuthForm;
