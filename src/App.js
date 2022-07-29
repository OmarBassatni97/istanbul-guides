import "./App.css";
import Banner from "./components/Banner";
import ExploreCards from "./components/ExploreCards";
import FeaturedService from "./components/FeaturedService";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MarqueeSlider from "./components/MarqueeSlider";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <MarqueeSlider />
      <ExploreCards />
      <FeaturedService />
      <Footer />
    </>
  );
}

export default App;
