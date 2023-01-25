import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import { Home } from "../pages/Home";
import Introduccion from "../pages/Introduccion";
import Dashboard from "../ui/Dashboard";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        <Route path="dashboard" element={<Dashboard />}>
          <Route path="introduccion" element={<Introduccion />} />
          {/* <Route path="estructuras" element={<DashboardTasks />} /> */}
        </Route>

        {/* Sin no hay ninguna otra ruta */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
