import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Comingsoon from './Pages/Comingsoon/Comingsoon';
import ScrollToTopPage from './Components/ScrollToTopPage/ScrollToTopPage';
import Resources from './Pages/Resources/Resources';
function App() {

  return (
    <>
      <Router>
        <ScrollToTopPage />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/comingsoon" element={<Comingsoon />} />
          <Route path="/Resources" element={<Resources />} />
        </Routes>
        <Footer />
      </Router>
      <ScrollToTop />
    </>
  )
}

export default App
