import AdCarousel from "../../Header/Ad Carousel/AdCarousel";
import Navbar from "../../Header/NavBar/Navbar";


function ComingSoon() {
  return (
    <div>
      <Navbar/>
      <AdCarousel/>
      <h1
        style={{
          fontWeight: 500,
          textTransform: "capitalize",
          fontSize: "46px",
          textAlign: "center",
          marginTop: "20%"
        }}
      >
        Sorry! This is still under construction please try again at a later time!
      </h1>
    </div>
  );
}

export default ComingSoon;
