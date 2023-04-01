import React from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Products from "./pages/Products";


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Products/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
      </Router>
    </div>
  );
}
