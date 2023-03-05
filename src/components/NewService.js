import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { InsertService } from "../utils";

export const NewService = ({ addService }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      const service = await InsertService({ data, token });

      addService(service);

      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="crb">
      <h1 className="crh">Crea un servicio nuevo</h1>
      <fieldset>
        <label htmlFor="tittle">Título</label>
        <input type="text" id="tittle" name="tittle" />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Descripcion</label>
        <input type="text" id="description" name="description" />
      </fieldset>
      <button type="submit">Crear servicio</button>
      {error ? <p>{error}</p> : null}
      {loading ? <p>Creando servicio..</p> : null}
    </form>
  );
};
