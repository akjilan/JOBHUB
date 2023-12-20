import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.jsx";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Errorpage from "./pages/Errorpage/Errorpage.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import JobDetails from "./components/Homepage_components/JobDetails.jsx";
import Statistics from "./pages/Statistics/Statistics.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs.jsx";
import Alljobs from "./pages/AllJobs/AllJobs.jsx";
import Login from "./Auth/Login.jsx";
import Signin from "./Auth/Signin.jsx";
import Register from "./Auth/Register.jsx";
import Signup from "./Auth/Signup.jsx";
import NewsDetails from "./pages/Blogs/NewsDetails.jsx";
import AuthProvider from "./Auth/AuthProvider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/alljobs",
        element: <Alljobs></Alljobs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blogs/:id",
        element: <Blogs></Blogs>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/news/${params.id}`),
      },
      {
        path: `/catagory/:id`,
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/news/${params.id}`),
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
