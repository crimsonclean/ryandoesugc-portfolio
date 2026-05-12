import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import TrybeMetrics from "./components/TrybeMetrics";
import Brands from "./components/Brands";
import Portfolio from "./components/Portfolio";
import Rates from "./components/Rates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <TrybeMetrics />
      <Brands />
      <Portfolio />
      <Rates />
      <Contact />
      <Footer />
    </>
  );
}
