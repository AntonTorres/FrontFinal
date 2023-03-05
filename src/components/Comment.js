/* import { useState, useEffect } from "react";
import { Service } from "./Service";

export const Comment = ({ comment }) => {
  const [file, setFile] = useState("");

  useEffect(() => {
    const getFile = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND}/services/${Service}/comment`
        );
        const data = await response.json();
        setFile(data.file);
      } catch (error) {
        console.log(error);
      }
    };
    getFile();
  }, [comment]);
}; */
