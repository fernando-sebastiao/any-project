import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/login-page";
import { DashboardPage } from "./pages/dashboard-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
