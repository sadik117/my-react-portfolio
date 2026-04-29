import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./layout/NavBar";
import Headroom from "react-headroom";
import Footer from "./layout/Footer";
import BackgroundOrbs from "./components/BackgroundOrbs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="max-w-[1920px] mx-auto">
      <BackgroundOrbs />
      <ScrollToTop />
      <Headroom>
        <NavBar></NavBar>
      </Headroom>

      <Outlet></Outlet>
      {pathname !== "/" && <Footer></Footer>}
    </div>
  );
}

export default App;
