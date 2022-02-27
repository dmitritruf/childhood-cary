// pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

// react router
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// scroll to top
// import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <section className=" h-screen font-DMSans mx-auto max-w-screen-2xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
