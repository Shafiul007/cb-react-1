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
import ProductDetails from "../components/ProductDetails";
import UpdateCart from "../components/UpdateCart";

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
          path:"/detail/:id",
          element:<PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
          loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
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
          path:"/carts",
          element:<PrivateRoutes><Cart></Cart></PrivateRoutes>,
        },
        {
          path:"/updateCart/:id",
          element:<PrivateRoutes><UpdateCart></UpdateCart></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:3000/products/${params.id}`)
        }

      ]
    },
  ]);