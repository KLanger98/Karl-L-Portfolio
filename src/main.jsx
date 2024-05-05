import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx"
import ContactPage from './pages/ContactPage.jsx'
import ProjectsGallery from './pages/ProjectsGallery.jsx'
import Error from "./pages/Error.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Projects",
        element: <ProjectsGallery />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
