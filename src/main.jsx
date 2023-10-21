import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import { AuthProvider } from "./Provider/AuthProvider";
import AddPorducts from "./Page/Products/AddPorducts";
import PrivetRoute from "./Provider/PrivetRoute";
import Samsung from "./Components/Samsung/Samsung";
import Microsoft from "./Components/Microsoft/Microsoft";
import Apple from "./Components/Apple/Apple";
import Sony from "./Components/Sony/Sony";
import Lg from "./Components/Lg/Lg";
import Google from "./Components/Google/Google";
import Update from "./Page/Update/Update";
import ProductDetails from "./Page/Details/ProductDetails";
import MyCart from "./Page/MyCart/MyCart";
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet></Outlet>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Json/Data.json"),
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
        path: "/Samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch("http://localhost:5000/brand/samsung"),
      },
      {
        path: "/microsoft",
        element: <Microsoft></Microsoft>,

        loader: () => fetch("http://localhost:5000/brand/microsoft"),
      },
      {
        path: "/apple",
        element: <Apple></Apple>,

        loader: () => fetch("http://localhost:5000/brand/apple"),
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () => fetch("http://localhost:5000/brand/sony"),
      },
      {
        path: "/lg",
        element: <Lg></Lg>,
        loader: () => fetch("http://localhost:5000/brand/lg"),
      },
      {
        path: "/google",
        element: <Google></Google>,
        loader: () => fetch("http://localhost:5000/brand/google"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <Update></Update>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brand/${params.id}`),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivetRoute>
            <ProductDetails></ProductDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brand/${params.id}`),
      },
      {
        path: "/myCart",
        element: (
          <PrivetRoute>
            <MyCart></MyCart>
          </PrivetRoute>
        ),
      },
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
