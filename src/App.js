import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Products from './pages/Products';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <section id="banner">
                    <Banner />
                  </section>
                  <section id="about">
                    <About />
                  </section>
                  <section id="services">
                    <Services />
                  </section>
                  <section id="contacts">
                    <contact />
                  </section>
                  
                </>
              } />
              <Route path="/products" element={<Products />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
