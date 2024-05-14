import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";
//import ProtectedRoute from "./ProtectedRoute";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

const LoginLayout = Loadable(
  lazy(() => import("../layouts/login-layout/LoginLayout"))
);


/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/Home/Home")));

const Login = Loadable(lazy(() => import("../pages/Log/Login")));
<Login path="/Account" component={Login} />

const Register = Loadable(lazy(() => import("../pages/Log/Register")));
<Register path="/Register" component={Register} />

/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <HomePage /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },

    ],
  },
  {
    path: "/auth",
    element: <LoginLayout />,
    children: [
      { path: "", exact: true, element: <Navigate to="/auth/Login" /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      {path: "Login",exact: true, element: <Login/>},
      {path: "Register",exact: true, element: <Register/>},

    ],
  },
];

export default Router;
