import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Products from "../components/Products";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoutes from './PrivateRoutes';
import Cart from "../components/Cart";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/products",
            element:<Products></Products>,
            loader:()=>fetch('https://dummyjson.com/products')
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/cart",
          element:<PrivateRoutes><Cart></Cart></PrivateRoutes>
        }
      ]
    },
  ]);