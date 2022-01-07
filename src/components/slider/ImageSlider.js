import React, { useState } from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import "./slider.css";

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const  length = slides.length

    const nextSlide = () =>{
        setCurrent(current === length-1 ? 0 : current + 1)
    }
    const prevSlide = () =>{
        setCurrent(current === 0 ? length-1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    return ( 
        <div className='sl'>
            <div className="sl-texts">
                <h1 className="sl-title">Veilles Technologiques</h1>
            </div>
            <section className='slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
                {SliderData.map((slide,index)=>{
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} >
                            {index === current && (
                            <img className='img-slider' 
                                src={slide.img}  
                                alt='Veille Tech'
                                key={index}/>
                            )}
                            
                        </div>
                        )
                })}
            </section>
        </div>
     );
}
 
export default ImageSlider;
