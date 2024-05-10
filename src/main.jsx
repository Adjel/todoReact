import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import ErrorPage from "./errorPage"
import Login from "./routes/login"
import Example from "./routes/example"
import TodoProvider from "./providers/TodoProvider/TodoProvider"
import UserProvider from './providers/UserProvider/UserProvider';
import Home from './routes/Home/Home';

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
      <UserProvider>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
      </UserProvider>
  </React.StrictMode>
);