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
        element: (
          <PrivetRoute>
            {" "}
            <Samsung></Samsung>
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-mdrafi276.vercel.app/brand/Samsung"
          ),
      },
      {
        path: "/microsoft",
        element: (
          <PrivetRoute>
            <Microsoft></Microsoft>
          </PrivetRoute>
        ),

        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-mdrafi276.vercel.app/brand/microsoft"
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

        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-mdrafi276.vercel.app/brand/apple"
          ),
      },
      {
        path: "/sony",
        element: (
          <PrivetRoute>
            <Sony></Sony>
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-mdrafi276.vercel.app/brand/sony"
          ),
      },
      {
        path: "/lg",
        element: (
          <PrivetRoute>
            <Lg></Lg>
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-mdrafi276.vercel.app/brand/lg"
          ),
      },
      {
        path: "/google",
        element: (
          <PrivetRoute>
            {" "}
            <Google></Google>
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-mdrafi276.vercel.app/brand/google"
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <Update></Update>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-mdrafi276.vercel.app/brand/${params.id}`
          ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivetRoute>
            <ProductDetails></ProductDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-mdrafi276.vercel.app/brand/${params.id}`
          ),
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
