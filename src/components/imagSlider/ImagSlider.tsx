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
    <section className="space-y-14 my-20">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          موثوق بنا من قبل شركات التأمين الرائدة فى السوق المصرى
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div>
        <div className="mx-auto px-4">
          <Slider {...settings}>
            {sliderInfo.map((slider, index) => (
              <div key={index}>
                <Image
                  src={slider.sliderSrc}
                  width={120}
                  height={96}
                  alt={slider.sliderUlt}
                  loading="eager"
                  className="mix-blend-multiply object-contain h-24 px-1"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default ImagSlider;
