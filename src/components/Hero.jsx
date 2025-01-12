import React, {useState} from 'react';
import backImage from '../assets/back.jpg';
import child from '../assets/topchild.png';
import SwiperComponent from './swiper';

const Hero = () => {

  const [imageColorDetails, setImageColorDetails] = useState([]);

  const handleColorChange = (newValue) => {
    rgbToHsl(newValue);
  };

  const rgbToHsl = ([r, g, b]) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const hsl = [0, 0, (max + min) / 2];

    if (max === min) {
      hsl[0] = hsl[1] = 0; // No hue, saturation
    } else {
      const d = max - min;
      hsl[1] = hsl[2] > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) {
        hsl[0] = (g - b) / d + (g < b ? 6 : 0);
      } else if (max === g) {
        hsl[0] = (b - r) / d + 2;
      } else {
        hsl[0] = (r - g) / d + 4;
      }
      hsl[0] /= 6;
    }

    setImageColorDetails(hsl);
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center text-white flex justify-center items-center relative"
      style={{ backgroundImage: `url(${backImage})` }}
    >
        <div
          className="fixed h-screen w-full bg-cover bg-center text-white flex justify-center items-center z-40 pointer-events-none"
          style={{
            backgroundImage: `url(${child})`,
            filter: `hue-rotate(${imageColorDetails[0]*360}deg) saturate(${imageColorDetails[1]*100}%) brightness(${imageColorDetails[2]*100 + 200}%)`,
            transition: "filter 2s ease-out", 
          }}
        ></div>

        <SwiperComponent sendColor={handleColorChange}/>
    </div>
  );
};

export default Hero;
