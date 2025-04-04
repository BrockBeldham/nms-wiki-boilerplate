import Image from 'next/image';
import * as ga from '../../lib/ga';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.container}>
      <hr className={styles.linebreak} />
      <p className={styles.text}>This site was heavily inspired by Lenni&apos;s Eisvana specific <a href='https://wiki.eisvana.com' target='_blank' rel='noreferrer' onClick={() => ga.event('click', 'Footer', 'GH')}>Eisvana Wiki Page Creator</a>.</p>
      <p className={styles.text}>Huge thanks to these communities for using and testing the wiki page creator!</p>
      <ul className={styles.logoList}>
        <li className={styles.logoItem}>
          <a
            href="https://nomanssky.fandom.com/wiki/No_Man's_High_Hub"
            className='nolink'
            target='_blank'
            rel='noreferrer'
            onClick={() => ga.event('click', 'Footer', 'NMH')}>
            <Image
              src='/images/logo-NMHH.webp'
              alt='No Man`s High Hub Logo'
              width={300}
              height={293}
            />
          </a>
        </li>
        <li className={styles.logoItem}>
          <a
            href='https://nomanssky.fandom.com/wiki/United_Nations_42'
            className='nolink'
            target='_blank'
            rel='noreferrer'
            onClick={() => ga.event('click', 'Footer', 'UN42')}>
            <Image
              src='/images/logo-UN42.webp'
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
