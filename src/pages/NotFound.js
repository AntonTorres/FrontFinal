import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <section>
      <h1>Not Found</h1>
      <Link to="/">Vuelve a la página principal</Link>
    </section>
  );
};
