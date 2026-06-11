import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import PortfolioPage from "../pages/PortfolioPage";
import Technologies from "../pages/Technologies";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/technologies" element={<Technologies />} />
    </Routes>
  );
}
