// Dependencies
import { useEffect } from "react";

// Types
import type { LayoutProps } from "./types/Layout";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Layout: RC<LayoutProps> = ({ children, title }) => {

  // Change title
  useEffect(() => {
    document.title = title ? title : "";
  }, [title]);

  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout;
