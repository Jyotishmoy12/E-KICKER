import React, { useState } from 'react';
import './Slider.css'; // Import the CSS file


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious=()=>{
    const isFirstSlide=currentIndex===0;
    const newIndex=isFirstSlide? slides.length-1:currentIndex-1;
    setCurrentIndex(newIndex)
  }
  const goToNext=()=>{
    const isLastSlide=currentIndex===slides.length-1;
    const newIndex=isLastSlide? 0:currentIndex+1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className="image-slider">
      <div className="leftArrowStyles" onClick={goToPrevious}>(</div>
      <div className="rightArrowStyles" onClick={goToNext}>)</div>
      <div className="slider" style={{ backgroundImage: `url(${slides[currentIndex]})` }}></div>
    </div>
  );
};

export default ImageSlider;
