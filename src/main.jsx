import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import ErrorPage from "./Pages/404";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./Pages/products";
import ProfilePage from "./Pages/profile";
import DetailProductPage from "./Pages/detailProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/products",
    element: <ProductsPage></ProductsPage>,
  },
  {
    path: "/profile",
    element: <ProfilePage></ProfilePage>,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage></DetailProductPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
