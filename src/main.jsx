import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Home from './routes/home';
import ErrorPage from "./errorPage"
import Login from "./routes/login"
import Example from "./routes/example"
import TodoProvider from '../../providers/TodoProvider/TodoProvider';

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
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </React.StrictMode>
);