import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import { MainLayout } from "../Layouts";
// pages
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Products from "../pages/Products/Products";
import LogIn from "../pages/Log-in/LogIn";
import SignUp from "../pages/Sign-up/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "products",
        element: <Products />,
      },
      //   {
      //     path: "about-us",
      //     element: <AboutUs />,
      //   },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
