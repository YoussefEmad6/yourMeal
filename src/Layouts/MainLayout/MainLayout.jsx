import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components/common";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
