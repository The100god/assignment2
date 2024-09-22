import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/body/home/HomePage";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Products from "./components/body/product/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
