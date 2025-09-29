import React from "react";
import NavBar from "./navbar";
import Footer from "./footer/index";
// import SideBar from "./sidebar";

const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <NavBar />

      <main className="flex w-full">

        <aside className="">
        </aside>

        <section className="flex-1 min-w-0">{children}</section>
      </main>

      <Footer />
    </div>
  );
};

export default LayoutDefault;
