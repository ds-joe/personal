import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "@/Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
}

export default Router;
