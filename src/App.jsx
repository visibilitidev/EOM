// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Comingsoon from "./Pages/Comingsoon/Comingsoon";
import ScrollToTopPage from "./Components/ScrollToTopPage/ScrollToTopPage";
import Resources from "./Pages/Resources/Resources";
import Blog from "./Pages/Blog/Blog";
import Preloader from "./Components/Preloader/Preloader";
import "./App.css";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Show preloader on initial load and during route changes
  useEffect(() => {
    setLoading(true); // Start loading
    const timer = setTimeout(() => setLoading(false), 2000); // Set 2-second delay
    return () => clearTimeout(timer); // Clear timer on unmount
  }, [location]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/comingsoon" element={<Comingsoon />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTopPage />
      <AppContent />
      <ScrollToTop />
    </Router>
  );
}

export default App;
