import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import Gallery1 from "../assets/Gallery1.jpeg";
import Gallery2 from "../assets/Gallery2.jpeg";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  const images = [Gallery1, Gallery2];

  return (
    <div className="w-full max-w-3xl mx-auto py-10" id="gallery">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <div className="relative w-full h-[280px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg">
              <img
                src={img}
                alt={`slide-${index}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
