import PropTypes from 'prop-types';

import styles from './glyphs.module.scss';

export default function Glyphs({ onChange }) {
  return (
    <div className={styles.glyphs}>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('0')}>0</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('1')}>1</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('2')}>2</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('3')}>3</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('4')}>4</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('5')}>5</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('6')}>6</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('7')}>7</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('8')}>8</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('9')}>9</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('A')}>A</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('B')}>B</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('C')}>C</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('D')}>D</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('E')}>E</button>
      <button type='button' className={styles.glyphBtn} onClick={() => onChange('F')}>F</button>
    </div>
  );
}

Glyphs.propTypes = {
  onChange: PropTypes.object
};