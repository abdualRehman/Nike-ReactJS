import Explore from "./Layout/Body/Explore/Explore";
import SportCarousel from "./Layout/Body/Sport Carousel/SportCarousel";
import BackgroundVideo from "./Layout/Body/Video/BackgroundVideo";
import WeatherClothingCarousel from "./Layout/Body/Weather Clothing Carousel/WeatherClothingCarousel";
import Footer from "./Layout/Footer/Footer";
import AdCarousel from "./Layout/Header/Ad Carousel/AdCarousel";
import KeepRunning from "./Layout/Header/Keep Running/KeepRunning";
import Navbar from "./Layout/Header/NavBar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AdCarousel />
      <KeepRunning />
      <BackgroundVideo />
      <WeatherClothingCarousel />
      <Explore />
      <SportCarousel />
      <Footer />
    </>
  );
}

export default App;
