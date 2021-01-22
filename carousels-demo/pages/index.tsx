import Head from 'next/head'
import Header from '../components/Header/Header'
import ReactResponsiveCarousel from '../components/ReactResponsiveCarousel/ReactResponsiveCarousel.tsx'
import ReactSlick from '../components/ReactSlick/ReactSlick.tsx'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Carousels Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-col justify-start items-center bg-black">
        <Header />
        {/* <ReactResponsiveCarousel /> */}
        <ReactSlick />
      </main>
    </div>
  )
}
