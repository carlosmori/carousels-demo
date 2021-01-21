import Head from 'next/head'
import ReactResponsiveCarousel from '../components/ReactResponsiveCarousel/ReactResponsiveCarousel.tsx'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Carousels Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to React Carousels Demo
        </h1>
        <ReactResponsiveCarousel />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
