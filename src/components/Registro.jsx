import FacebookIcon from "../assets/facebook.svg";
import GithubIcon from "../assets/github.svg";
import LinkinIcon from "../assets/linkin.svg";
import { Formulario } from "./Formulario";
import { SocialButtons } from "./SocialButtons";

export const Registro = () => {
  const redesSociales = [
    { nombre: "Facebook", url: "https://www.facebook.com", icon: FacebookIcon },
    { nombre: "Github", url: "https://www.github.com", icon: GithubIcon },
    { nombre: "Linkin", url: "https://www.linkin.com", icon: LinkinIcon },
  ];

  return (
    <div className="box">
      <h1>Crear una cuenta</h1>
      <SocialButtons redesSociales={redesSociales} />
      <p>o usa tu email para registrarte</p>
      <Formulario />
    </div>
  );
};
