import PropTypes from 'prop-types';
import Select from './select';

export default function SelectPlatform({ onChange }) {
  return (
    <Select id='platform' label='Which Platform' config={[
      { value: '', label :'Which Platform' },
      { value: 'PS', label :'PS' },
      { value: 'Xbox', label :'Xbox' },
      { value: 'PC', label :'PC' }
    ]} onChange={(value) => onChange(value)} />
  );
}

SelectPlatform.propTypes = {
  onChange: PropTypes.func
};