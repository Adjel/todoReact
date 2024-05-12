import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import TodoProvider from "./providers/TodoProvider/TodoProvider"
import UserProvider from './providers/UserProvider/UserProvider';
import PageRouter from './routes/PageRouter';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <UserProvider>
        <TodoProvider>
          <RouterProvider router={PageRouter} />
        </TodoProvider>
      </UserProvider>
  </React.StrictMode>
);