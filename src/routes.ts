import AppLayout from "components/layouts";
import ProductDetails from "pages/product_details";
import React from "react";
import { createHashRouter } from "react-router-dom";

export const routes = createHashRouter([
  {
    path: '/',
    element: React.createElement(AppLayout),
    children: [
      {
        path: '/',
        element: React.createElement(ProductDetails)
      }
    ]
  }
]);