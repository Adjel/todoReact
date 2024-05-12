import React from "react"
import ErrorPage from "./errorPage"
import SignIn from "./SignInComponent"
import Example from "./Example"
import Home from './Home/Home';
import Todos from "./Todos"
import Login from "./Login"
import { createBrowserRouter } from "react-router-dom";

const PageRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "Todos/",
      element: <Todos/>,
    },
    {
      path: "Login",
      element: <Login />,
    },
    {
      path: "example/:exampleId",
      element: <Example />,
    },
    {
      path: "Signin/",
      element: <SignIn />,
    },
  ]);

  export default PageRouter