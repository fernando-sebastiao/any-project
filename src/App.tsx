import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/login-page";
import { DashboardPage } from "./pages/dashboard-page";
import { Cadastro } from "./pages/cadastro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
