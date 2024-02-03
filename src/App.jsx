import React from "react";
import Home from "./pages/home";
import Header from "./components/header";
import "./App.css";
import {
  createBrowserRouter,
  ScrollRestoration,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer";
import PayTable from "./pages/PayTable";
import Payment1 from "./pages/payment";
import Client from "./components/client";
import Login from "./pages/Login";
import FileUpload from "./components/FileUpload";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/paytable",
        element: <PayTable />,
      },
      {
        path: "/fileupload",
        element: <FileUpload />,
      },
      {
        path: "/payment",
        element: <Payment1 />,
      },
      {
        path: "/client",
        element: <Client />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className=" font-bodyFont">
      <RouterProvider router={Router} />
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       <Header />
//       {/* <Home /> */}
//       <PayTable />
//       <Footer />
//     </div>
//   );
// };
export default App;
