import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Service } from "../components/Service";
import { useService } from "../hooks/useService";

export const ServicePage = () => {
  const { id } = useParams();

  const { service, loading, error } = useService(id);

  if (loading) return <p>Cargando servicios..</p>;
  if (error) return <ErrorMessage message={error} />;
  return (
    <section>
      <h1>Servicio creado por {service.userId}</h1>
      <Service service={service} />
    </section>
  );
};