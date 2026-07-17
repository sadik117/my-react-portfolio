import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeLayout from "./layout/HomeLayout.jsx";
import About from "./layout/About.jsx";
import Contact from "./layout/Contact.jsx";

import AssetsContext from "./AssetsContext.jsx";
import Home from "./layout/Home.jsx";
import ProjectDetails from "./layout/ProjectDetails.jsx";
import ErrorPage from "./layout/ErrorPage.jsx";
import { HelmetProvider } from "react-helmet-async";
import Projects from "./layout/Projects.jsx";
import Skill from "./layout/Skill.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skill",
        element: <Skill></Skill>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <AssetsContext>
      <RouterProvider router={router} />
    </AssetsContext>
    </HelmetProvider>
  </StrictMode>
);
