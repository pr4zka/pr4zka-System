import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import SimpleLayout from "./layouts/simple";
//
import BlogPage from "./pages/BlogPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import ProductsPage from "./pages/ProductsPage";
import DashboardAppPage from "./pages/DashboardAppPage";
import Compras from "./pages/Compras";
import ComprasForm from "./pages/ComprasForm";
import Ciudades from "./pages/pagesMov/Ciudades";
import Mercaderias from "./pages/pagesMov/Mercaderias";
import CiudadesForm from "./pages/pagesMov/CiudadesForm";
import { ProtectedRoutes } from "./hooks/ProtetedRoutes";
import { useSelector } from "react-redux";
import  Ventas  from "./pages/ventas/Ventas";
import Proveedores from "./pages/Proveedores";
import ProveedoresForm from "./pages/ProveedoresForm";
import MercasderiasForm from "./pages/pagesMov/MercaderiasForm";
import Apertura from "./pages/ventas/Apertura";

export default function Router() {
  const { isAuth } = useSelector((state) => state.auth);
  const routes = useRoutes([
    {
      path: "/menu",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/menu/app" />, index: true },
        {
          path: "app",
          element: (
            <ProtectedRoutes isAllowed={isAuth}>
              <DashboardAppPage />
            </ProtectedRoutes>
          ),
        },

        { path: "user", element: <UserPage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "blog", element: <BlogPage /> },
        { path: "compras", element: <Compras /> },
        { path: "new/compras", element: <ComprasForm /> },
        { path: "ciudades", element: <Ciudades /> },
        { path: "new/ciudades", element: <CiudadesForm /> },
        { path: "mercaderias", element: <Mercaderias /> },
        { path: "new/mercaderias", element: <MercasderiasForm /> },
        { path: "proveedores", element: <Proveedores /> },
        { path: "new/proveedores", element: <ProveedoresForm /> },
        //ventas
        { path: "ventas", element: <Ventas /> },
        { path: "new/ventas", element: <Ventas /> },
        {path: "apertura", element: <Apertura />}
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/menu/app" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);

  return routes;
}
