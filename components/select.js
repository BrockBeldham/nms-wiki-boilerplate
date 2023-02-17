import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import Tooltip from './tooltip';

import styles from './select.module.scss';
import customStyles from '../lib/select-styles';

function Select({
  className,
  id,
  label,
  placeholder,
  isSearchable,
  config,
  onChange,
  tooltip
}) {
  const [value, setValue] = useState('');

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
        isSearchable={isSearchable ? true : false}
        value={value === '' ? value : config.filter((o) => {
          // eslint-disable-next-line eqeqeq
          if (typeof o.value == 'boolean') {
            return o.value === (value.toString() === 'true');
          } else {
            return o.value === value;
          }
        })}
        options={config}
        onChange={({ value }) => {
          setValue(value);
          if (onChange) {
            onChange(value);
          }
        }}
      />
      {tooltip &&
        <Tooltip overlay={tooltip} />
      }
    </div>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isSearchable: PropTypes.bool,
  config: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  tooltip: PropTypes.string
};

export default Select;
