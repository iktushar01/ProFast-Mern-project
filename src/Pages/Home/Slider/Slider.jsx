import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://i.postimg.cc/brzJsrwm/banner1.png",
    "https://i.postimg.cc/PxnNn2ss/banner2.png",
    "https://i.postimg.cc/mD3kLCBc/banner3.png",
  ];

  return (
    <div className="w-full mt-10 cursor-grab">
      <SlickSlider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded"
            />
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;
