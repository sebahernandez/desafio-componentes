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
      setMensaje("No pueden haber campos vacíos.");
      setVariant("danger");
    } else if (!nombreValid(inputValues.nombre)){
      setMensaje("El nombre debe contener solo letras.");
      setVariant("warning");

    } else if(!passValid(inputValues.password)){
      setMensaje("La contraseña debe comenzar con mayúscula y cintener al menos 8 caracteres.");
      setVariant("warning");
    
    } else if (inputValues.password !== inputValues.confirmPassword) {
      setMensaje("Las contraseñas deben ser iguales.");
      setVariant("warning");

    } else if (!emailValid(inputValues.email)) {
      setMensaje("El email no es válido.");
      setVariant("warning");
    } else {
      setMensaje("Usuario registrado correctamente.");
      setVariant("success");
    }
  };

  const emailValid = (email) => {
    const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
    return rgExp.test(email);
  };
  const nombreValid = (nombre) => {
    const rgExp2 =/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/;
    return rgExp2.test(nombre);
  };
  const passValid = (password) => {
    const regex = /^(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  }

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
