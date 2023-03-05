/* import { useEffect, useState } from "react";
import { getAllFiles } from "../utils";

export const useFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFiles = async () => {
      try {
        setLoading(true);

        const data = await getAllFiles();

        setFiles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadFiles();
  }, []);

  return { files, loading, error };
}; */
