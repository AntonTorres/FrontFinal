import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUserUtil } from "../utils";
import "../styles/login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handdleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUserUtil({ email, password });

      login(data.token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="login">
  <div className="card">
    <div className="left">
      <h1>NeedNow.</h1>
      <p>Unete a nuestra comunidad y aprovecha al máximo todas las soluciones digitales que tenemos para ofrecerte. ¡Te esperamos!</p>
      <Link to="/register">¿Aún no tienes cuenta?</Link>
    </div>
    <div className="right">
      <h2>Login</h2>
      <form onSubmit={handdleForm}>
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
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button>Iniciar sesión</button>
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  </div>
</section>
  );
};
