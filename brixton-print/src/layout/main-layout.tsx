import { ReactNode } from "react";
import Header from "@/components/header/header";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
