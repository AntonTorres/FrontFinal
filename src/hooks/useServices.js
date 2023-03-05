import { useEffect, useState } from "react";
import { getAllServicesUtil } from "../utils";

export const useServices = (id) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);

        const data = await getAllServicesUtil();

        setServices(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, [id]);

  const addService = (data) => {
    setServices({ data, ...services });
  };

  const removeService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };
  return { services, loading, error, addService, removeService };
};
