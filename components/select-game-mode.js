import PropTypes from 'prop-types';
import Select from './select';

export default function SelectGameMode({ onChange }) {
  return (
    <Select id='mode' label='Which Game Mode' config={[
      { value: 'Normal', label :'Normal' },
      { value: 'Survival', label :'Survival' },
      { value: 'Permadeath', label :'Permadeath' },
      { value: 'Creative', label :'Creative' }
    ]} onChange={(value) => onChange(value)} />
  );
}

SelectGameMode.propTypes = {
  onChange: PropTypes.func
};