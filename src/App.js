import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact"
import Donations from "./pages/Donations"
import Home from "./pages/Home"
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
