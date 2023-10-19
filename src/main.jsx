import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import { AuthProvider } from './Provider/AuthProvider';
import AddPorducts from './Page/Products/AddPorducts';
import PrivetRoute from './Provider/PrivetRoute';
import AllProduct from './Page/AllPorduct/AllProduct';
import Samsung from './Components/Samsung/Samsung';
import Microsoft from './Components/Microsoft/Microsoft';
import Apple from './Components/Apple/Apple';
import Sony from './Components/Sony/Sony';
import Lg from './Components/Lg/Lg';
import Google from './Components/Google/Google';
import Update from './Page/Update/Update';
import ProductDetails from './Page/Details/ProductDetails';
import MyCart from './Page/MyCart/MyCart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet></Outlet>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/Json/Data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addPorduct",
        element: (
          <PrivetRoute>
            <AddPorducts></AddPorducts>
          </PrivetRoute>
        ),
      },
      {
        path: "/allProduct",
        element: (
          <PrivetRoute>
            {" "}
            <AllProduct></AllProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "/Samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch("http://localhost:5000/brand/samsung"),
      },
      {
        path: "/microsoft",
        element: (
          <PrivetRoute>
            <Microsoft></Microsoft>
          </PrivetRoute>
        ),
      },
      {
        path: "/apple",
        element: (
          <PrivetRoute>
            {" "}
            <Apple></Apple>
          </PrivetRoute>
        ),
      },
      {
        path: "/sony",
        element: (
          <PrivetRoute>
            <Sony></Sony>
          </PrivetRoute>
        ),
      },
      {
        path: "/lg",
        element: (
          <PrivetRoute>
            <Lg></Lg>
          </PrivetRoute>
        ),
      },
      {
        path: "/google",
        element: (
          <PrivetRoute>
            <Google></Google>
          </PrivetRoute>
        ),
      },
      {
        path: "/update",
        element: <Update></Update>,
      },
      {
        path: "/priductDetails",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path:"/myCart",
        element:<MyCart></MyCart>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
