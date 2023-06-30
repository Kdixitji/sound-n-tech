import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Route/Home";
import About from "./Route/About";
import Products from "./Route/Products";
import Testimonial from "./Route/Testimonial";
import Contact from "./Route/Contact";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
  );
}

export default App;
