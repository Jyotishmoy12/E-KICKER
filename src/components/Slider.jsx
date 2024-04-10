import React from 'react'
import image1 from "../assets/images1.jpeg";
import image2 from "../assets/images2.jpeg";
import image3 from "../assets/images3.jpeg";
import ImageSlider from './ImageSlider'; 
import './Slider.css';
const Slider = () => {
    const slides=[
        image1, image2, image3
    ]
  return (
    <div>
    <h1>Products</h1>
    <div className="containerStyles">
    <ImageSlider slides={slides}/>
    </div>
    
    </div>

  )
}

export default Slider