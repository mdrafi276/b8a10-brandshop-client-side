import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import { AuthProvider } from './Provider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Outlet></Outlet>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element: <Register></Register>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
