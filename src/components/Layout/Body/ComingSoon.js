import CarouselAds from "../Header/carousel";
import NikeNavbar from "../Header/navbar";

function ComingSoon() {
  return (
    <div>
      <NikeNavbar/>
      <CarouselAds/>
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
