import AppLayout from "components/layouts";
import ProductDetailPage from "pages/product_detail_page";
import React from "react";
import { createHashRouter } from "react-router-dom";

export const routes = createHashRouter([
  {
    path: '/',
    element: React.createElement(AppLayout),
    children: [
      {
        path: '/',
        element: React.createElement(ProductDetailPage)
      }
    ]
  }
]);