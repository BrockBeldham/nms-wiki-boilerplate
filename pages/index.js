import Link from 'next/link'
import Footer from '../components/layouts/footer'

import styles from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.title}>No Man&apos;s Sky</h1>
          <h2 className={styles.subtitle}>Wiki Page Creator</h2>
          <p className={styles.text}>Which page do you want to create?</p>
        </div>
        <Link href='/system'>
          <a className={`btn ${styles.btn}`}>
            New Star System
          </a>
        </Link>
        {/* <button type='button' className={`btn btnDisabled ${styles.btn}`}>
          New Planet
        </button> */}
        <Link href='/planet'>
          <a className={`btn ${styles.btn}`}>
            New Planet
          </a>
        </Link>
        <button type='button' className={`btn btnDisabled ${styles.btn}`}>
          New Moon
        </button>
        <Link href='/base'>
          <a className={`btn ${styles.btn}`}>
            New Base
          </a>
        </Link>
        <button type='button' className={`btn btnDisabled ${styles.btn}`}>
          New Fauna
        </button>
        <button type='button' className={`btn btnDisabled ${styles.btn}`}>
          New Starship
        </button>
        <button type='button' className={`btn btnDisabled ${styles.btn}`}>
          New NMH Fauna Album Entry
        </button>
        <button type='button' className={`btn btnDisabled ${styles.btn}`}>
          New NMH Starship Album Entry
        </button>
      </div>
      <Footer />
    </>
  )
}
