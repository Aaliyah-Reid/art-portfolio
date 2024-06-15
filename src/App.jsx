import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Paintings from './components/Paintings';
import Photos from './components/Photos';
import GenerativeArt from './components/GenerativeArt';
import Poems from './components/Poems';




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