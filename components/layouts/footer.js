import PropTypes from 'prop-types';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>This site was heavily inspired by Lenni&apos;s Galactic Hub specific <a href='https://lenni009.github.io/NMSWikiPageCreator/' target='_blank' rel='noreferrer'>Hub Wiki Page Creator</a></p>
    </div>
  );
}
