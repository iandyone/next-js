import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
