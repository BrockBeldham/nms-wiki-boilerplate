import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/layouts/footer';

import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Use these forms to generate boilerplate markdown code. Create a page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.title}>No Man&apos;s Sky</h1>
          <h2 className={styles.subtitle}>Wiki Boilerplate Creator</h2>
          <p className={styles.text}>Which page do you want to create?</p>
        </div>
        <button type='button' className={`btn btnDisabled ${styles.btn}`}>
          New Region
        </button>
        <Link href='/system'>
          <a className={`btn ${styles.btn}`}>
            New Star System
          </a>
        </Link>
        <Link href='/planet'>
          <a className={`btn ${styles.btn}`}>
            New Planet
          </a>
        </Link>
        <Link href='/moon'>
          <a className={`btn ${styles.btn}`}>
            New Moon
          </a>
        </Link>
        <Link href='/base'>
          <a className={`btn ${styles.btn}`}>
            New Base
          </a>
        </Link>
        <Link href='/creature'>
          <a className={`btn ${styles.btn}`}>
            New Creature
          </a>
        </Link>
        <Link href='/starship'>
          <a className={`btn ${styles.btn}`}>
            New Starship
          </a>
        </Link>
        <Link href='/multitool'>
          <a className={`btn ${styles.btn}`}>
            New Multitool
          </a>
        </Link>
        <button type='button' className={`btn btnDisabled ${styles.btn}`}>
          New NMH Fauna Album Entry
        </button>
        <button type='button' className={`btn btnDisabled ${styles.btn}`}>
          New NMH Starship Album Entry
        </button>
      </div>
      <Footer />
    </>
  );
}
