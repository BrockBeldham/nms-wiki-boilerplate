import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import styles from './select-features.module.scss';
import customStyles from '../../lib/select-styles';

function SelectFeatures({ onChange }) {
  const [value, setValue] = useState([]);

  return (
    <div className='frmItem'>
      <label htmlFor='features' className={`frmLabel ${value.length > 0 ? 'frmLabelShow' : ''}`}>Features</label>
      <ReactSelect
        className={styles.select}
        styles={customStyles}
        id='features'
        name='features'
        placeholder='Features'
        options={[
          { value: 'Exocraft Summoning Station', label: 'Exocraft Summoning Station' },
          { value: 'Pilgrim Geobay', label: 'Pilgrim Geobay' },
          { value: 'Nomad Geobay', label: 'Nomad Geobay' },
          { value: 'Roamer Geobay', label: 'Roamer Geobay' },
          { value: 'Colossus Geobay', label: 'Colossus Geobay' },
          { value: 'Message Module', label: 'Message Module' },
          { value: 'Signal Booster', label: 'Signal Booster' },
          { value: 'Save Beacon', label: 'Save Beacon' },
          { value: 'Save Point', label: 'Save Point' },
          { value: 'Communications Station', label: 'Communications Station' },
          { value: 'Atmosphere Harvester', label: 'Atmosphere Harvester' },
          { value: 'Autonomous Mining Unit', label: 'Autonomous Mining Unit' },
          { value: 'Portable Refiner', label: 'Portable Refiner' },
          { value: 'Base Computer', label: 'Base Computer' },
          { value: 'Oxygen Harvester', label: 'Oxygen Harvester' },
          { value: 'Blueprint Analyser', label: 'Blueprint Analyser' },
          { value: 'Marine Shelter', label: 'Marine Shelter' },
          { value: 'Landing Pad', label: 'Landing Pad' },
          { value: 'Base Teleport Module', label: 'Base Teleport Module' },
          { value: 'Base Salvage Capsule', label: 'Base Salvage Capsule' },
          { value: 'Galactic Trade Terminal', label: 'Galactic Trade Terminal' },
          { value: 'Health Station', label: 'Health Station' },
          { value: 'Hazard Protection Unit', label: 'Hazard Protection Unit' },
          { value: 'Medium Refiner', label: 'Medium Refiner' },
          { value: 'Large Refiner', label: 'Large Refiner' },
          { value: 'Appearance Modifier', label: 'Appearance Modifier' }
        ]}
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

SelectFeatures.propTypes = {
  onChange: PropTypes.func
};

export default SelectFeatures;
