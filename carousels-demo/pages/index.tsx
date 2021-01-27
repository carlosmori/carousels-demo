import Head from 'next/head'
import Header from '../components/Header/Header'
import NukaCarousel from '../components/nuka-carousel/NukaCarousel.tsx'
import ReactResponsiveCarousel from '../components/ReactResponsiveCarousel/ReactResponsiveCarousel.tsx'
import ReactSlick from '../components/ReactSlick/ReactSlick.tsx'
import styles from '../styles/Index.module.css'
import dynamic from 'next/dynamic'

export default function Home() {
  const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/nuka-carousel/NukaCarousel'),
    { ssr: false }
  )

  return (
    <div>
      <Head>
        <title>React Carousels Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-col justify-start items-center bg-black">
        {/* <main className="bg-black"> */}
        <Header />
        {/* <ReactResponsiveCarousel /> */}
        {/* <ReactSlick /> */}
        {/* <DynamicComponentWithNoSSR /> */}
        <NukaCarousel />
      </main>
    </div>
  )
}
