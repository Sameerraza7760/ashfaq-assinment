import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "../Product";
import Productdetail from "../ProductDeatail/ProductDetail";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";

import ErrorBoundary from "./Error";

function router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Signin />,
    },
    {
      path: "/product",
      element: <ProductPage />,
    },
    {
      path: "/productdetail/:id",  // Use dynamic parameter :id
      element: <Productdetail />,
    },
  ]);

  // Wrap the RouterProvider with the ErrorBoundary
  return <ErrorBoundary><RouterProvider router={router} /></ErrorBoundary>;
}

export default router;
