import react from "react";
import { Routes, Route, useNavigate, Router } from "react-router-dom";
import { facebook } from "react-icons/fa";
import "./App.css";
import "./index.css";
import ResourcesDetails from "./pages/ResourcesDetails";
import { Navbar, CTA, Article } from "./components";
import {
  Header,
  Footer,
  Feature,
  Possibility,
  Blog,
  footer,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="Nav_Header">
        <Navbar />
      </div>
      <div className="Body">
        <Header />
        <Feature />
        <CTA />
        <Possibility />
        <Blog />
        <Article />
      </div>

      <div className="Footer_Contaier">
        <Footer />
      </div>
    </div>
  );
}

export default App;
