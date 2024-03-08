import { useState } from "react";
import { MensajeAlerta } from "./Alert";
export const Formulario = () => {
  const [mensaje, setMensaje] = useState("");
  const [variant, setVariant] = useState("");
  const [inputValues, setInputValues] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const camposVacios = Object.values(inputValues).some(
      (value) => value === ""
    );
    if (camposVacios) {
      setMensaje("No pueden haber campos vacios.");
      setVariant("danger");
    } else if (inputValues.password !== inputValues.confirmPassword) {
      setMensaje("Las contraseñas deben ser iguales.");
      setVariant("warning");
    } else {
      setMensaje("Usuario registrado correctamente.");
      setVariant("success");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={inputValues.nombre}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="tuemail@correo.cl"
        value={inputValues.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={inputValues.password}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar tu contraseña"
        value={inputValues.confirmPassword}
        onChange={handleInputChange}
      />
      <button type="submit">Registrarse</button>
      {mensaje && <MensajeAlerta variant={variant}>{mensaje}</MensajeAlerta>}
    </form>
  );
};
