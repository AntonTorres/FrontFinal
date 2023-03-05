import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { ServicePage } from "./pages/ServicePage";
import { NotFound } from "./pages/NotFound";

function App() {
  const currentPath = useLocation().pathname;

  return (
    <main>
      {currentPath !== "/login" && currentPath !== "/register" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServicePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
