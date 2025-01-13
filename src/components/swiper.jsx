import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ColorThief from "colorthief";

import p1 from "../assets/w1.jpg";
import p2 from "../assets/w2.jpg";
import p3 from "../assets/w3.jpg";
import p4 from "../assets/w4.jpg";
import p5 from "../assets/w5.jpg";
import p6 from "../assets/w6.jpg";
import p7 from "../assets/w7.jpg";
import p8 from "../assets/w8.jpg";

const SwiperComponent = ({ sendColor }) => {
  const [imageColor, setImageColor] = useState([]);
  const imgRef = useRef(null);

  const getImage = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex + 1];
    const activeImg = activeSlide.querySelector("img");
    if (activeImg) {
      getDominantColor(activeImg.src);
    }
  };

  const getDominantColor = (imageUrl) => {
    const colorThief = new ColorThief();
    const img = new Image();
    img.src = imageUrl;
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const color = colorThief.getColor(img);
      setImageColor([color[0], color[1], color[2]]);
    };
    handleImageChange(imageColor);
  };

  const handleImageChange = (clr) => {
    sendColor(clr);
  };

  const slides = [
    { id: 1, image: p1, alt: "Slide 1" },
    { id: 2, image: p2, alt: "Slide 2" },
    { id: 3, image: p3, alt: "Slide 3" },
    { id: 4, image: p4, alt: "Slide 4" },
    { id: 5, image: p5, alt: "Slide 5" },
    { id: 6, image: p6, alt: "Slide 6" },
    { id: 7, image: p7, alt: "Slide 7" },
    { id: 8, image: p8, alt: "Slide 8" },
  ];

  return (
    <div className="flex mb-28 items-center justify-center w-full h-auto overflow-hidden">
      <Swiper
        modules={[Pagination, EffectCoverflow, Autoplay]}
        className="w-full max-w-[1200px] h-[600px] sm:h-[350px] md:h-[450px] xl:h-[600px]"
        onSlideChange={getImage}
        ref={imgRef}
        loop={true}
        autoplay={{ delay: 3000 }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          clickable: false,
          
        }}
        speed={2000}
        preventClicks={true}
        coverflowEffect={{
          rotate: -11,
          stretch: -100,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
  src={slide.image}
  alt={slide.alt}
  className="w-[100%] max-h-[500px] sm:max-h-[300px] md:max-h-[400px] xl:max-h-[500px] object-cover rounded-3xl transition-all duration-300"
  style={{
    boxShadow: '12px 12px 40px rgba(0, 0, 0, 0.3), -12px -12px 40px rgba(0, 0, 0, 0.15)',
    transform: 'scale(1.1)',
  }}
/>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper {
          overflow: hidden;
        }
        .swiper-pagination {
          z-index: 50;
          visibility: hidden;
        }

      `}</style>
    </div>
  );
};

export default SwiperComponent;
