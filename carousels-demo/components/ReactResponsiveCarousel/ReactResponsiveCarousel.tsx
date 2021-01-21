import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ReactResponsiveCarousel() {
    /* 
    http://rocketinsights.imgix.net/Gucci.png
    http://rocketinsights.imgix.net/Desert.jpeg
    http://rocketinsights.imgix.net/Sports.png
    Docs: https://www.npmjs.com/package/react-responsive-carousel
    */
    return (
        <div>
            <Carousel>
                <div>
                    <img src="http://rocketinsights.imgix.net/Gucci.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://rocketinsights.imgix.net/Desert.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://rocketinsights.imgix.net/Sports.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}


export default ReactResponsiveCarousel
