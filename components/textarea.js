import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './textarea.module.scss';

function Input({
  frmItemClass,
  id,
  label,
  placeholder,
  onChange
}) {
  const [value, setValue] = useState('');

  return (
    <div className={`frmItem ${frmItemClass ? styles[frmItemClass] : ''}`}>
      <label htmlFor={id} className={`frmLabel ${value.toString().length > 0 ? 'frmLabelShow' : ''}`}>
        {label}
      </label>
      <textarea
        className={styles.textarea}
        id={id}
        name={id}
        placeholder={placeholder || label}
        cols='30'
        rows='10'
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          if (onChange) {
            onChange(target.value);
          }
        }}
      />
    </div>
  );
}

Input.propTypes = {
  frmItemClass: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
