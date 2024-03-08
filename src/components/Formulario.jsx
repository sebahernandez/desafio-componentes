export const Formulario = () => {
  return (
    <form onSubmit={""}>
      <input type="text" placeholder="Nombre" />
      <input type="email" placeholder="tuemail@correo.cl" />
      <input type="password" placeholder="Contraseña" />
      <input type="password" placeholder="Confirmar tu contraseña" />
      <button>Registrarse</button>
    </form>
  );
};
