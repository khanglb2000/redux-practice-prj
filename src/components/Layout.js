import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <main className="App">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
