import "./App.css";
// import Card from './components/Card'
// import Button from './components/Button'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Beranda from "./pages/beranda/Beranda";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import "./assets/stylebaru.scss";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productdetail/ProductDetail";
import DetailNegara from "./pages/DetailNegara";
import Negara from "./pages/negara/Negara";
import ThemeContext from "./components/context/ThemeContext";

// import Grid from './components/Grid'

function App() {

  const theme = useState("light");

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
        <Navbar />
        <Routes>
          <Route path="/beranda" element={<Beranda />} />
          <Route path="profil" element={<Profil />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
          <Route path="/product" element={<Product />} />
          <Route path="/produk/:id" element={<ProductDetail />} />
          <Route path="/negara" element={<Negara />} />
          <Route path="/detailnegara/:id" element={<DetailNegara />} />
          </Routes>
          </ThemeContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
