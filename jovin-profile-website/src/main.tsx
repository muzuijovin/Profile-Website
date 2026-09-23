import { createRoot } from "react-dom/client";
import "./index.css";
import { LandingPage } from "./pages/app/landingpage";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
