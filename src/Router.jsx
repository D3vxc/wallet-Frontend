import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Transaction from "./pages/Transaction";
import ViewTransaction from "./pages/ViewTransaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "view",
        element: <ViewTransaction />,
      },
     ]
  }
]);
export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
