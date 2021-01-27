import React from 'react'
import Slider from 'react-slick'
import styles from './ReactSlick.module.scss'
function ReactSlick() {
  const settings = {
    className: 'custom-center-class',
    centerMode: true,
    centerPadding: '120px',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    focusOnSelect: true,
    useCss: true,
    face: true,
  }

  return (
    <div className={`${styles.slickCarousel} w-screen bg-yellow-200 h-3/6 p-36`}>
      <Slider {...settings}>
        <div>
          <img src="http://rocketinsights.imgix.net/Gucci.png" alt="Gucci" />
        </div>
        <div>
          <img src="http://rocketinsights.imgix.net/Desert.jpeg" alt="Desert" />
        </div>
        <div>
          <img src="http://rocketinsights.imgix.net/Sports.png" alt="Sports" />
        </div>
        <div>
          <img src="http://rocketinsights.imgix.net/Sports.png" alt="Sports2" />
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick
