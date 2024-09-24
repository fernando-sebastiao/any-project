import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/login-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
