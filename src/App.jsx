import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Paintings from './pages/Paintings';
import Photos from './pages/Photos';
import GenerativeArt from './pages/GenerativeArt';
import Poems from './pages/Poems';




const MainLayout = () => (
  <div className="min-h-screen max-w-screen-xl mx-auto">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

const PortfolioLayout = () => (
  <div className="min-h-screen max-w-screen-xl mx-auto">
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>

);

const App = () =>{
  return (
      <Router>
  
  
          <Routes>

            <Route element={<MainLayout />}>
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Portfolio />} />

            </Route>

            <Route path="/portfolio" element={<PortfolioLayout />}>
              <Route path="paintings" element={<Paintings />} />
              <Route path="photos" element={<Photos />} />
              <Route path="generative-art" element={<GenerativeArt />} />
              <Route path="poems" element={<Poems />} />

            </Route>



              
          </Routes>

      </Router>



  );
};


export default App;