import React from 'react';
import image_array from "./cities_images"
import { Zoom } from 'react-slideshow-image';

const zoomOutProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Zoom {...zoomOutProperties}>
                {
                    image_array.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} alt={"city"} />)
                }
            </Zoom>
        </div>
    )
}

export default Slideshow
