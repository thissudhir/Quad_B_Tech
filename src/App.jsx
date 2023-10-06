import { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Application from "./pages/Application";
import JobDescription from "./pages/JobDescription";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Landing /> */}
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    // children: [
    //   {
    //     path: "/home",
    //     element: <Layout />,
    //   },
    // ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/application",
        element: <Application />,
      },
      {
        path: "/home",
        element: <Landing />,
      },
      // {
      //   path: "/home",
      //   element: <Layout />,
      // },
      {
        path: "/jobdescription/:job_id",
        element: <JobDescription />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    // children: [
    //   {
    //     path: "/home",
    //     element: <Layout />,
    //   },
    // ],
  },
  // {
  //   path: "/login",
  //   element: (
  //     <div>
  //       <Login />
  //     </div>
  //   ),
  // },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/application",
  //   element: <Application />,
  // },
  // {
  //   path: "/home",
  //   element: <Layout />,
  // },
  // {
  //   path: "/jobdescription",
  //   element: <JobDescription />,
  // },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
export default App;
