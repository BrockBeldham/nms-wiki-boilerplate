import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './checkbox.module.scss';

function Checkbox({
  frmItemClass,
  fullWidth,
  className,
  id,
  name,
  label,
  value,
  defaultChecked,
  onChange
}) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <div className={`frmItem ${frmItemClass ? styles[frmItemClass] : ''} ${fullWidth ? styles.frmItemFull : ''}`}>
      <div className={styles.checkbox}>
        <input
          className={className || ''}
          type='checkbox'
          id={id}
          name={name || id}
          checked={checked}
          value={value || 'on'}
          onChange={({ target }) => {
            setChecked(target.checked);
            if (onChange) {
              onChange(target.checked);
            }
          }}
        />
        {/*eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
        <label htmlFor={id} dangerouslySetInnerHTML={{ __html: label }} />
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  frmItemClass: PropTypes.string,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
