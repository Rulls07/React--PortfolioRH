import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import ProductList from "./components/productList/ProductList";
import { useContext } from "react";
import { ThemeContext } from "./context";
import ImageSlider from "./components/slider/ImageSlider";
import { SliderData } from "./components/slider/SliderData";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#000" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Navbar/>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/aboutme" element={<About/>}/>
          <Route path="/portfolio" element={<ProductList/>}/>
          <Route path="/veille" element={<ImageSlider slides={SliderData}/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
};

export default App;

