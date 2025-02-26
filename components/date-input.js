import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

function DateInput({
  id,
  label,
  placeholder,
  defaultValue,
  onChange,
  onBlur,
  selected,
  minDate,
  maxDate,
  dateFormat
}) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (defaultValue && defaultValue !== value) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const renderLabel = () => {
    if (label) {
      return (
        <label htmlFor={id} className={`frmLabel ${placeholder || value.toString().length > 0 ? 'frmLabelShow' : ''}`}>
          {label}
        </label>
      );
    }
  };

  return (
    <div className='frmItem'>
      {renderLabel()}
      <DatePicker
        className='input'
        id={id}
        name={id}
        autoComplete='off'
        selected={selected || value}
        minDate={minDate}
        maxDate={maxDate}
        onChange={(date) => {
          setValue(date);
          if (onChange) {
            onChange(date);
          }
        }}
        onBlur={(date) => {
          if (onBlur) {
            onBlur(date);
          }
        }}
        dateFormat={dateFormat}
        placeholderText={placeholder || label}
        popperPlacement='top-start'
        showMonthDropdown
        showYearDropdown
        dropdownMode='select'
      />
    </div>
  );
}

DateInput.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  noError: PropTypes.bool,
  selected: PropTypes.object,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  dateFormat: PropTypes.string
};

export default DateInput;
