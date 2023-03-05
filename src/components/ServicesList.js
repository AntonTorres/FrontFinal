import { Service } from "./Service";

export const ServicesList = ({ services, removeService }) => {
  return services.length ? (
    <ul>
      {services.map((service) => (
        <li key={service.id}>
          <Service service={service} removeService={removeService} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay servicios todavía.</p>
  );
};
