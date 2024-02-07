import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      {/*  This element will render either <About/> when the url is "/about",<Contact/> when the url is "/contact" or null if it is "/" */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
