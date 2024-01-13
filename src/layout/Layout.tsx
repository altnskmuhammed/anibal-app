import React, { ReactNode } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="Layout shadow-lg  bg-gray-100/50 border">
      <header>
        <Header />
      </header>
      <main className=" ">{children}</main>
      <footer className="mt-[5rem]">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
