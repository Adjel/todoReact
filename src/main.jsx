import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Home from './routes/Home';
import ErrorPage from "./errorPage"
import Login from "./routes/Login"
import Example from "./routes/Example"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "login/",
    element: <Login />,
  },
  {
    path: "example/:exampleId",
    element: <Example />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);