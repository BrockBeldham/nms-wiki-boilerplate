import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './tooltip';

import styles from './input.module.scss';

function Input({
  frmItemClass,
  defaultValue,
  id,
  min,
  max,
  type,
  label,
  placeholder,
  onChange,
  tooltip
}) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className={`frmItem ${frmItemClass ? styles[frmItemClass] : ''}`}>
      <label htmlFor={id} className={`frmLabel ${value.toString().length > 0 ? 'frmLabelShow' : ''}`}>
        {label}
      </label>
      <input
        className='input'
        type={type}
        id={id}
        min={min}
        max={max}
        name={id}
        placeholder={placeholder || label}
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          if (onChange) {
            onChange(target.value);
          }
        }}
      />
      {tooltip &&
        <Tooltip overlay={tooltip} />
      }
    </div>
  );
}

Input.propTypes = {
  frmItemClass: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  tooltip: PropTypes.string
};

export default Input;
