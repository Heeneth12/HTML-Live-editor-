import HomePage from "./Pages/HomePage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ContactUs from "./Pages/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
