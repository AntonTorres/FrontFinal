import { ErrorMessage } from "../components/ErrorMessage";
import { NewService } from "../components/NewService";
import { ServicesList } from "../components/ServicesList";
import { useServices } from "../hooks/useServices";

export const Home = () => {
  const { services, loading, error, addService, removeService } = useServices();
  const token = localStorage.getItem("token");

  if (loading) return <p>Cargando servicios..</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {token ? <NewService addService={addService} /> : null}
      <h1 className="H1">Últimos servicios</h1>
      <ServicesList services={services} removeService={removeService} />
    </section>
  );
};
