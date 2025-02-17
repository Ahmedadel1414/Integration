"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderInfo } from "@/constants/ImagSliderInfo";

const ImagSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: Math.min(sliderInfo.length, 8),
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(sliderInfo.length, 6),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(sliderInfo.length, 4),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(sliderInfo.length, 2),
        },
      },
    ],
  };

  return (
    <section className="space-y-14 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">شركاء النجاح</h2>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
      </div>

      <div>
        <div className="mx-auto p-4">
          <Slider {...settings}>
            {sliderInfo.map((slider, index) => (
              <Image
                key={index}
                src={slider.sliderSrc}
                width={100}
                height={100}
                alt={slider.sliderAlt}
                loading="eager"
                className="w-[100px] bg-transparent px-1"
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default ImagSlider;
