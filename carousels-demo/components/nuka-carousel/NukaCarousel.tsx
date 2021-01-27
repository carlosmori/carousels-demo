import React, { useEffect, useState } from 'react'
import Carousel from 'nuka-carousel'
import styles from './NukaCarousel.module.scss'

function NukaCarousel() {
  const [props, setProps] = useState({})
  const [currentImage, setCurrentImage] = useState('')
  useEffect(() => {
    setProps({
      wrapAround: true,
      heightMode: 'current',
      cellAlign: 'center',
      slidesToShow: 1.5,
      //   cellSpacing: 10,
      initialSlideHeight: 600,
      initialSlideWidth: 800,
      //   slideWidth: '800px',
      //   animation: 'zoom',
      //   zoomScale: 0.1,
      // autoGenerateStyleTag: true,
    })
  }, [])
  useEffect(() => {
    setCurrentImage('http://rocketinsights.imgix.net/Gucci.png?crop=top,left&w=1100&h=550')
  }, [])
  return (
    <div className={styles.carousel}>
      <div
        className={styles.carousel__bg_image}
        style={{ backgroundImage: `url(${currentImage})` }}
      ></div>
      <Carousel
        {...props}
        beforeSlide={(slideIndex) => {
          console.info('Variable slideIndex is equal to: ')
          console.log(slideIndex)
          switch (slideIndex) {
            case 0:
              setCurrentImage(
                'http://rocketinsights.imgix.net/Patagonia.jpeg?crop=top,left&w=1100&h=550'
              )
              break
            case 1:
              setCurrentImage(
                'http://rocketinsights.imgix.net/Manifestation.jpeg?crop=top,left&w=1100&h=550'
              )
              break
            case 2:
              setCurrentImage(
                'http://rocketinsights.imgix.net/Patagonia.jpegR?crop=top,left&w=1100&h=550'
              )
              break
            case 3:
              setCurrentImage(
                'http://rocketinsights.imgix.net/Gucci.png?crop=top,left&w=1100&h=550'
              )
              break
            default:
              break
          }
        }}
        renderCenterLeftControls={({ previousSlide }) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="50"
            color="white"
            onClick={previousSlide}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="50"
            color="white"
            onClick={nextSlide}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        )}
      >
        {/* <div className={styles.carousel}> */}
        <div
          className={styles.carousel__slide}
          style={{
            backgroundImage: `url('http://rocketinsights.imgix.net/Gucci.png?crop=top,left&w=1100&h=550')`,
          }}
        ></div>
        <div
          className={styles.carousel__slide}
          style={{
            backgroundImage: `url('http://rocketinsights.imgix.net/Patagonia.jpeg?crop=top,left&w=1100&h=550')`,
          }}
        ></div>
        <div
          className={styles.carousel__slide}
          style={{
            backgroundImage: `url('http://rocketinsights.imgix.net/Manifestation.jpeg?crop=top,left&w=1100&h=550')`,
          }}
        ></div>
        <div
          className={styles.carousel__slide}
          style={{
            backgroundImage: `url('http://rocketinsights.imgix.net/Patagonia.jpeg?crop=top,left&w=1100&h=550')`,
          }}
        ></div>

        {/* 
    <img src="http://rocketinsights.imgix.net/Desert.jpeg?w=800&h=600" alt="Desert" />
 */}
      </Carousel>
    </div>
  )
}

export default NukaCarousel
