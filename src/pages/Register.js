import { useState } from "react";
import { registerUserUtil } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";

export const Register = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");
  const [error, setError] = useState("");

  const handdleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (pass1 !== pass2) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      await registerUserUtil({ name, email, password: pass1, biography });

      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="register">
      <div className="cardR">
        <div className="leftReg">
          <h1>NeedNow.</h1>
          <p>
            {" "}
            ¡Bienvenido a NeedNow! tu portal de necesidades digitales en
            comunidad! Si estás buscando soluciones digitales para tu empresa,
            negocio o emprendimiento, ¡has llegado al lugar indicado! En nuestro
            portal, no solo encontrarás una amplia gama de servicios para cubrir
            todas tus necesidades digitales, sino que también formarás parte de
            una comunidad de profesionales y expertos en tecnología y marketing
            digital. Podrás compartir tus ideas, hacer preguntas y recibir
            asesoramiento de otros miembros de la comunidad, lo que te ayudará a
            mejorar tus estrategias y a obtener resultados aún mejores en el
            mundo digital.{" "}
          </p>
        </div>

        <div className="rightR">
          <h2>Registrarse</h2>
          <form onSubmit={handdleForm}>
            <fieldset>
              <label htmlFor="name"></label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Nombre"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="pass1"></label>
              <input
                type="password"
                id="pass1"
                name="pass1"
                placeholder="Contraseña"
                required
                onChange={(e) => setPass1(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="pass2"></label>
              <input
                type="password"
                id="pass2"
                name="pass2"
                placeholder="Repite contraseña"
                required
                onChange={(e) => setPass2(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="text"></label>
              <input
                type="text"
                id="biography"
                name="biography"
                placeholder="Biografía"
                onChange={(e) => setBiography(e.target.value)}
              />
            </fieldset>

            <button>Registrarse</button>
            <Link to="/login">¿Ya tienes cuenta?</Link>
            {error ? <p>{error}</p> : null}
            {/* <fieldset>
              <label htmlFor="email">Foto</label>
              <input type ="email" id="email" name="email" />
            </fieldset> */}
          </form>
        </div>
      </div>
    </section>
  );
};
