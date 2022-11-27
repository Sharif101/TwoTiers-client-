import { createBrowserRouter } from "react-router-dom";
import Bikes from "../Bikes/Bikes";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Privateroute from "./Privateroute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("http://localhost:5000/categories");
        },
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/dashboard",
        element: (
          <Privateroute>
            <Dashboard></Dashboard>
          </Privateroute>
        ),
      },
      {
        path: "/category/:id",
        loader: async ({ params }) => {
          return fetch(` http://localhost:5000/bikes/${params.id}`);
        },
        element: <Bikes></Bikes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
