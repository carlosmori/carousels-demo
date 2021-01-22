import React from 'react'
import Slider from 'react-slick'
import styles from './ReactSlick.module.scss'
function ReactSlick() {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    focusOnSelect: true,
  }
  /*
   */

  return (
    <div className="w-screen bg-yellow-200 h-3/6 p-36">
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
          <img src="http://rocketinsights.imgix.net/Sports.png" alt="Sports" />
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick
