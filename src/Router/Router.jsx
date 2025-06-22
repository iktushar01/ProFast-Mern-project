import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Authantication/Login/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
        {
            index:true,
            element: <Home/>
        }
    ]
  },
  {
    path: '/',
    element: <AuthLayout/>,
    children: [
      {
        path: 'login',
        element: <Login/>
      }
    ]
  }
]);