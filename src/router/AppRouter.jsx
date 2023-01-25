import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import { Home } from "../pages/Home";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />

        {/* Sin no hay ninguna otra ruta */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
