import PropTypes from 'prop-types';

import styles from './modal.module.scss';

export default function Modal({
  children,
  onClose
}) {
  return (
    <div className={styles.pop}>
      <div className={styles.popBg} onClick={onClose} aria-hidden='true'/>
      <div className={styles.popWin}>
        <button className={styles.popClose} onClick={onClose}>
          <svg viewBox='0 0 28.7 28.9'>
            <use href='#svgClose'/>
          </svg>
        </button>
        <div className={styles.popCnt}>
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  onClose: PropTypes.func
};

