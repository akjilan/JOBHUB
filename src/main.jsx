import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.jsx'
import './main.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import Errorpage from './pages/Errorpage/Errorpage.jsx';
import Homepage from './pages/Homepage/Homepage.jsx';
import JobDetails from './components/Homepage_components/JobDetails.jsx'
import Statistics from './pages/Statistics/Statistics.jsx'
import Blogs from './pages/Blogs/Blogs.jsx'
import AppliedJobs from './pages/AppliedJobs/AppliedJobs.jsx'
import Alljobs from './pages/AllJobs/AllJobs.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Homepage></Homepage>
      },
      {
        path:"/job/:id",
        element: <JobDetails></JobDetails>
      },
      {
        path:"/alljobs",
        element: <Alljobs></Alljobs>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/blogs",
        element: <Blogs></Blogs>
      },
      {
        path:"/appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
