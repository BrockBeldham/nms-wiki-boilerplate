import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './input';

import styles from './glyphs.module.scss';

export default function Glyphs({
  changeCoords,
  noCoords,
  changeGlyphs
}) {
  const [glyphs, setGlyphs] = useState('');
  const [coordinates, setCoordinates] = useState('');

  const convertCoordsToGlyphs = (value) => {
    const noSpace = value.replace(/\s/g, '');
    const upperVal = noSpace.toUpperCase();
    const validVal = upperVal.replace(/[^a-fA-F0-9:]+/, '');
    const nocolonVal = noSpace.split(':').join('');
    const [X, Y, Z, SS] = noSpace.split(':');
    if (upperVal !== validVal
      || nocolonVal.length !== 16
      || !X
      || !Y
      || !Z
      || !SS
      || parseInt(X, 16) > 4096 || parseInt(X, 16) < 0
      || parseInt(Y, 16) > 255 || parseInt(Y, 16) < 0
      || parseInt(Z, 16) > 4096 || parseInt(Z, 16) < 0
      || parseInt(SS, 16) > 767 || parseInt(SS, 16) < 0) {
      return false;
    }
    const finalX = convertX(X);
    const finalY = convertY(Y);
    const finalZ = convertZ(Z);
    const finalSS = SS.slice(1);
    const final = `1${finalSS}${finalY}${finalZ}${finalX}`;
    setGlyphs(final);
    changeGlyphs(final);
  };

  const convertX = (X) => {
    X = Math.abs((parseInt(X, 16) + 2049) % 4096);
    X = X.toString(16).toUpperCase();
    return X.padStart(3, '0');
  };

  const convertY = (Y) => {
    Y = Math.abs((parseInt(Y, 16) + 129) % 256);
    Y = Y.toString(16).toUpperCase();
    return Y.padStart(2, '0');
  };

  const convertZ = (Z) => {
    Z = Math.abs((parseInt(Z, 16) + 2049) % 4096);
    Z = Z.toString(16).toUpperCase();
    return Z.padStart(3, '0');
  };

  const convertGlyphsToCoords = (value) => {
    const noSpace = value.replace(/\s/g, '');
    const upperVal = noSpace.toUpperCase();
    const validVal = upperVal.replace(/[^a-fA-F0-9:]+/, '');
    var subst = '$1:$2:$3:$4:$5';
    var regex = /(\S{1})(\S{3})(\S{2})(\S{3})(\S{3})/g;
    var resultcoords = noSpace.replace(regex, subst);
    var [P, SS, Y, Z, X] = resultcoords.split(':');
    if (upperVal !== validVal
      || noSpace.length !== 12
      || !P
      || !SS
      || !Y
      || !Z
      || !X
      || parseInt(SS, 16) > 767) {
      return false;
    }
    const finalSS = SS.padStart(4, '0');
    const finalY = convertGlyphY(Y);
    const finalZ = convertGlyphZ(Z);
    const finalX = convertGlyphX(X);
    const final = `${finalX}:${finalY}:${finalZ}:${finalSS}`;
    setCoordinates(final);
    changeCoords(final);
  };

  const convertGlyphY = (Y) => {
    Y = Math.abs((parseInt(Y, 16) + 127) % 256).toString(16).toUpperCase();
    Y = Y.toString(16).toUpperCase();
    return Y.padStart(4, '0');
  };

  const convertGlyphZ = (Z) => {
    Z = Math.abs((parseInt(Z, 16) + 2047) % 4096);
    Z = Z.toString(16).toUpperCase();
    return Z.padStart(4, '0');
  };

  const convertGlyphX = (X) => {
    X = Math.abs((parseInt(X, 16) + 2047) % 4096);
    X = X.toString(16).toUpperCase();
    return X.padStart(4, '0');
  };

  return (
    <>
      <div className='frmGroup50'>
        {!noCoords &&
          <Input
            id='coordinates'
            type='text'
            label='Signal Booster Coordinates'
            tooltip={<p>Found using a signal booster OR convert glyphs here: <a href='https://nmsportals.github.io/' target='_blank' rel='noreferrer'>https://nmsportals.github.io/</a></p>}
            defaultValue={coordinates}
            onChange={(value) => {
              convertCoordsToGlyphs(value);
              changeCoords(value);
            }}
          />
        }
        <Input
          id='glyphs'
          type='text'
          label='Planetary Glyphs'
          tooltip='Found in screenshot mode. Glyphs are specific to each planet.'
          defaultValue={glyphs}
          onChange={(value) => {
            if (!noCoords) {
              convertGlyphsToCoords(value);
            }
            changeGlyphs(value);
          }}
        />
      </div>
      <div className={styles.glyphs}>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}0`)}>0</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}1`)}>1</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}2`)}>2</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}3`)}>3</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}4`)}>4</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}5`)}>5</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}6`)}>6</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}7`)}>7</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}8`)}>8</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}9`)}>9</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}A`)}>A</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}B`)}>B</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}C`)}>C</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}D`)}>D</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}E`)}>E</button>
        <button type='button' className={styles.glyphBtn} onClick={() => setGlyphs((prevState) => `${prevState}F`)}>F</button>
      </div>
    </>
  );
}

Glyphs.propTypes = {
  changeCoords: PropTypes.func,
  noCoords: PropTypes.bool,
  changeGlyphs: PropTypes.func
};