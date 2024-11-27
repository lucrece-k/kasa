import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
export default Layout;
