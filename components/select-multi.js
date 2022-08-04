import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import styles from './select-multi.module.scss';
import customStyles from '../lib/select-styles';

function SelectMulti({ className, id, label, placeholder, isSearchable, config, onChange }) {
  const [value, setValue] = useState([]);
  
  return (
    <div className={`frmItem ${className ? styles[className] : ''}`}>
      {label &&
        <label htmlFor={id} className={`frmLabel ${value.toString().length > 0 ? 'frmLabelShow' : ''}`}>{label}</label>
      }
      <ReactSelect
        className={styles.select}
        styles={customStyles}
        id={id}
        name={id}
        placeholder={placeholder || label}
        isSearchable={isSearchable}
        options={config}
        onChange={(items) => {
          setValue(items);
          if (onChange) {
            onChange(items);
          }
        }}
        isMulti
      />
    </div>
  );
}

SelectMulti.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  config: PropTypes.array.isRequired,
  onChange: PropTypes.func
};

export default SelectMulti;
