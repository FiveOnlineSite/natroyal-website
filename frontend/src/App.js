import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ScrollToSection from "./components/ScrollToSesction";
import Company from "./pages/Company";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import RoyalHouse from "./pages/RoyalHouse";
import LVT from "./pages/LVT";
import VinylFlooring from "./pages/VinylFlooring";
import RoyalKnit from "./pages/RoyalKnit";
import SeatingComponents from "./pages/SeatingComponents";
import CoatedFabrics from "./pages/CoatedFabrics";
import AboutCoated from "./pages/AboutCoated";
import Laboratory from "./pages/Laboratory";
import Applications from "./pages/VinylApplications";
import VinylApplications from "./pages/VinylApplications";
import CoatedApplications from "./pages/CoatedApplications";
import SeatingApplications from "./pages/SeatingApplications";
import VinylnnerApplication from "./pages/VinylnnerApplication";

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-divisions" element={<Company />} />
        <Route path="/royal-house" element={<RoyalHouse />} />
        <Route path="/lvt-flooring" element={<LVT />} />
        <Route path="/vinyl-flooring" element={<VinylFlooring />} />
        <Route path="/knit-fabrics" element={<RoyalKnit />} />
        <Route path="/seating-components" element={<SeatingComponents />} />
        <Route path="/coated-fabrics" element={<CoatedFabrics />} />
        <Route path="/about-coated" element={<AboutCoated />} />
        <Route path="/laboratory-tested" element={<Laboratory />} />
        {/* <Route path="/vinyl-applications" element={<VinylApplications />} /> */}
        <Route
          path="/vinyl-flooring/:category"
          element={<VinylApplications />}
        />
        <Route
          path="/coated-fabrics/:category"
          element={<CoatedApplications />}
        />
        <Route
          path="/seating-components/:category"
          element={<SeatingApplications />}
        />
        <Route path="/:innercategory" element={<VinylnnerApplication />} />
      </Routes>
      <FloatingWhatsapp />
    </Router>
  );
}

export default App;
