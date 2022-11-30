import { createBrowserRouter } from "react-router-dom";
import Bikes from "../Bikes/Bikes";
import Main from "../Layout/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllBuyer from "../Pages/AllBuyer/AllBuyer";
import AllSeller from "../Pages/AllSeller/AllSeller";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyProduct from "../Pages/MyProduct/MyProduct";
import Register from "../Pages/Register/Register";
import ReportedItem from "../Pages/ReportedItem/ReportedItem";
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
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "allseller",
            loader: async () => {
              return fetch("http://localhost:5000/members/Seller");
            },
            element: <AllSeller></AllSeller>,
          },
          {
            path: "allbuyers",
            loader: async () => {
              return fetch("http://localhost:5000/members/Buyer");
            },
            element: <AllBuyer></AllBuyer>,
          },
          {
            path: "addproduct",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "myorders",
            element: <MyOrders></MyOrders>,
          },
          {
            path: "reportitem",
            loader: async () => {
              return fetch("http://localhost:5000/reportedItem");
            },
            element: <ReportedItem></ReportedItem>,
          },
          {
            path: "myproudct/:email",
            loader: async ({ params }) => {
              return fetch(`http://localhost:5000/bike/${params.email}`);
            },
            element: <MyProduct></MyProduct>,
          },
        ],
      },
      {
        path: "/category/:id",
        loader: async ({ params }) => {
          return fetch(` http://localhost:5000/bikes/${params.id}`);
        },
        element: (
          <Privateroute>
            <Bikes></Bikes>
          </Privateroute>
        ),
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
