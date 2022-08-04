import Link from 'next/link'
import styles from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <button type='button' className={`btn btnDisabled ${styles.btn}`}>
        New Star System
      </button>
      {/* <Link href='/system'>
        <a className={`btn ${styles.btn}`}>
          New Star System
        </a>
      </Link> */}
      <button type='button' className={`btn btnDisabled ${styles.btn}`}>
        New Planet
      </button>
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
  )
}
