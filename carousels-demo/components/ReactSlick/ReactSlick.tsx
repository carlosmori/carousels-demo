import React from 'react'
import Slider from 'react-slick'
import styles from './ReactSlick.module.scss'
function ReactSlick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  /*
    <img src="http://rocketinsights.imgix.net/Gucci.png" />
    <img src="http://rocketinsights.imgix.net/Desert.jpeg" />
    <img src="http://rocketinsights.imgix.net/Sports.png" />
  */

  return (
    <div className={styles.slickCarousel}>
      <Slider {...settings}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Slider>
    </div>
  )
}

export default ReactSlick
