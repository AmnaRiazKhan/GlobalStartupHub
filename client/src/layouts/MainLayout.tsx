import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FixedContactButton from "../components/FixedContactButton";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FixedContactButton />
    </>
  );
};

export default MainLayout;
