import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navigation from "./Nav/Navigation";
import Business from "./pages/Business";
import Personal from "./pages/Personal";
import Pricing from "./pages/Pricing";
import UseCase from "./pages/UseCase";
import ResourcesDetails from "./pages/ResourcesDetails";
import { CTA, Article } from "./components";
import { Header, Footer, Feature, Possibility, Blog } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="Nav_Header">
        <switch> </switch>
        <Routes>
          <Route path="Business" element={<Business />} />
          <Route path="SumAN" element={<Personal />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="UseCase" element={<UseCase />} />
          <Route path="ResourcesDetails" element={<ResourcesDetails />} />
        </Routes>

        {/* <Navbar /> */}
        <Navigation />
      </div>

      <Header />
      <Feature />
      <CTA />
      <Possibility />
      <Blog />
      <Article />

      <div className="Footer_Contaier">
        <Footer />
      </div>
    </div>
  );
}

export default App;
