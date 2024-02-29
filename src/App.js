import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import Privacy from "./Pages/Privacy";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Privacy" element={<Privacy />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
