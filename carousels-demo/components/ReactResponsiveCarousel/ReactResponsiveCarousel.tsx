import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import styles from './ReactResponsiveCarousel.module.scss'
function ReactResponsiveCarousel() {
  /* 
    http://rocketinsights.imgix.net/Gucci.png
    http://rocketinsights.imgix.net/Desert.jpeg
    http://rocketinsights.imgix.net/Sports.png
    Docs: https://www.npmjs.com/package/react-responsive-carousel
    */
  const config = {
    showArrows: true,
    showStatus: true,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: false,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 3000,
    transitionTime: 150,
    swipeScrollTolerance: 5,
    centerMode: true,
    centerSlidePercentage: 80,
  }
  return (
    <div className={styles.carousel}>
      <h2>React Responsive Carousel</h2>
      <Carousel {...config}>
        <div>
          <img className="carousel__img" src="http://rocketinsights.imgix.net/Gucci.png" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img className="carousel__img" src="http://rocketinsights.imgix.net/Desert.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img className="carousel__img" src="http://rocketinsights.imgix.net/Sports.png" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}

export default ReactResponsiveCarousel
