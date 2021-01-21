import Head from 'next/head'
import ReactResponsiveCarousel from '../components/ReactResponsiveCarousel/ReactResponsiveCarousel.tsx'
import ReactSlick from '../components/ReactSlick/ReactSlick.tsx'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Carousels Demo</title>
        <link rel="icon" href="/favicon.ico" />
        {/* 
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 
        */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to React Carousels Demo
        </h1>
        {/* <ReactResponsiveCarousel /> */}
        {/* <ReactSlick /> */}
      </main>
    </div>
  )
}
