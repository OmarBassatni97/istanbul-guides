import "./App.css";
import Banner from "./components/Banner";
import ExploreCards from "./components/ExploreCards";
import FeaturedService from "./components/FeaturedService";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Slider />
      <ExploreCards />
      <FeaturedService />
      <Footer />
    </>
  );
}

export default App;
