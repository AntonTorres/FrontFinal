import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Service = ({ service, removeService }) => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteService = async (id) => {
    try {
      await deleteService({ id, token });
      if (removeService) {
        removeService(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article>
      <p>{service.tittle}</p>
      <p>{service.description}</p>
      <p>
        {" "}
        <Link to={`/service/${service.id}`}>{service.userId} </Link>
      </p>
      {token ? (
        <section>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "Estás seguro de que quieres borrar el servicio?"
                )
              )
                deleteService(service.id);
            }}
          >
            Borrar servicio
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
