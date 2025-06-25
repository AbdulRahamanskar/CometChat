import React from "react";
import { Outlet } from "react-router-dom";
import Navheader from "./Navheader";

const Layout = () => {
  return (
    <>
      <Outlet />
      {/* <Navheader/> */}
    </>
  );
};

export default Layout;
