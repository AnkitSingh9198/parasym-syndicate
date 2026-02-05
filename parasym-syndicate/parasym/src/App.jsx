import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Centralized from "./components/Centralized";
import Decentralized from "./components/Decentralized";
import Industry from "./components/Industry";
import WhyUs from "./components/WhyUs";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import useSmoothScroll from "./hooks/useSmoothScroll";
import Products from "./components/Product";
import useSectionParallax from "./hooks/useSectionParallax";

function App() {
  useSmoothScroll();
  useSectionParallax();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products/>
      <Centralized />
      <Decentralized />
      <Industry />
      <WhyUs />
      <Careers />
      <Footer />
    </>
  );
}

export default App;
