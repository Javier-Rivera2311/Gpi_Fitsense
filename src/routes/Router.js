import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

const LoginLayout = Loadable(
  lazy(() => import("../layouts/login-layout/LoginLayout"))
);

const MainLayoutSF = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayoutSF"))
);


/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/Home/Home")));

const Login = Loadable(lazy(() => import("../pages/Log/Login")));
<Login path="/Account" component={Login} />

const Register = Loadable(lazy(() => import("../pages/Log/Register")));
<Register path="/Register" component={Register} />

const NewPassword = Loadable(lazy(() => import("../pages/Log/NewPassword")));
<NewPassword path="/NewPassword" component={NewPassword} />

const Profile = Loadable(lazy(() => import("../pages/Profile/Profile")));
<Profile path="/Profile" component={Profile} />

const Prices = Loadable(lazy(() => import("../pages/Prices/Prices")));
<Prices path="/Prices" component={Prices} />

const Contact = Loadable(lazy(() => import("../pages/Contact/Contact")));
<Contact path="/Contact" component={Contact} />

const Blog = Loadable(lazy(() => import("../pages/Blog/Blog")));
<Blog path="/Blog" component={Blog} />

const Workout = Loadable(lazy(() => import("../pages/Workout/Workout")));
<Workout path="/Workout" component={Workout} />

const Tecnica = Loadable(lazy(() => import("../pages/Workout/Tecnica")));
<Tecnica path="/Tecnica" component={Tecnica} />

const AboutUs = Loadable(lazy(() => import("../pages/AboutUs/AboutUs")));
<AboutUs path="/AboutUs" component={AboutUs} />

const CreateRoutine = Loadable(lazy(() => import("../pages/Workout/CreateRoutine")));
<CreateRoutine path="/CreateRoutine" component={CreateRoutine} />

/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <HomePage /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      {path: "Profile",exact: true, element: <ProtectedRoute><Profile/></ProtectedRoute>},
      {path: "Prices",exact: true, element: <Prices/>},
      {path: "Contact",exact: true, element: <Contact/>},
      {path: "Blog",exact: true, element: <ProtectedRoute><Blog/></ProtectedRoute>},
      {path: "AboutUs",exact: true, element: <AboutUs/>},


    ],
  },
  {
    path: "/",
    element: <MainLayoutSF />,
    children: [
      {path: "Workout",exact: true, element: <ProtectedRoute><Workout/></ProtectedRoute>},
      {path: "Tecnica",exact: true, element: <ProtectedRoute><Tecnica/></ProtectedRoute>},
      {path: "CreateRoutine",exact: true, element: <ProtectedRoute><CreateRoutine/></ProtectedRoute>},
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
      {path: "NewPassword",exact: true, element: <NewPassword/>},

    ],
  },
];

export default Router;
