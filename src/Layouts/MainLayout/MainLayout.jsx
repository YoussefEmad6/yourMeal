import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components/common";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
