import Image from 'next/image';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.container}>
      <hr className={styles.linebreak} />
      <p className={styles.text}>This site was heavily inspired by Lenni&apos;s Galactic Hub specific <a href='https://lenni009.github.io/HubWikiPageCreator/' target='_blank' rel='noreferrer'>Hub Wiki Page Creator</a>.</p>
      <p className={styles.text}>Huge thanks to these communities for using and testing the wiki page creator!</p>
      <ul className={styles.logoList}>
        <li className={styles.logoItem}>
          <a href="https://nomanssky.fandom.com/wiki/No_Man's_High_Hub" className='nolink' target='_blank' rel='noreferrer'>
            <Image
              src='/images/logo-NMHH.png'
              alt='No Man`s High Hub Logo'
              width={300}
              height={293}
            />
          </a>
        </li>
        <li className={styles.logoItem}>
          <a href='https://nomanssky.fandom.com/wiki/United_Nations_42' className='nolink' target='_blank' rel='noreferrer'>
            <Image
              src='/images/logo-UN42.png'
              alt='United Nations 42 Logo'
              width={300}
              height={293}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
