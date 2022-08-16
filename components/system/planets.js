// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import Select from '../select';
import SelectMulti from '../select-multi';
import Dropzone from '../dropzone';
import planetResources from '../../lib/select-data/planet-resources';
import planetWeather from '../../lib/select-data/planet-weather';
import planetSentinels from '../../lib/select-data/planet-sentinels';
import planetFloraFauna from '../../lib/select-data/planet-flora-fauna';

import styles from './planets.module.scss';

export default function Planets({ amount, onChange }) {
  return(
    <div>
      {[...Array(amount)].map((a, index) => (
        <div className={`frmGroup50 ${styles.planet}`} key={index}>
          <h2 className={styles.title}>Planet {index + 1}</h2>
          <Dropzone label='Planet Image' maxFiles={1} onUpload={(photos) => onChange(index, 'photo', photos[0].name)} />
          <Input id={`name_${index}`} type='text' label='Planet Name' onChange={(value) => onChange(index, 'name', value)} />
          <Input id={`type_${index}`} type='text' label='Planet Type' onChange={(value) => onChange(index, 'type', value)} />
          <Select id={`weather_${index}`} label='Planet Weather' config={planetWeather} isSearchable onChange={(value) => onChange(index, 'weather', value)} />
          <Select id={`sentinels_${index}`} label='Planet Sentinels' config={planetSentinels} isSearchable onChange={(value) => onChange(index, 'sentinels', value)} />
          <Select id={`flora_${index}`} label='Planet Flora' config={planetFloraFauna} isSearchable onChange={(value) => onChange(index, 'flora', value)} />
          <Select id={`fauna_${index}`} label='Planet Fauna' config={planetFloraFauna} isSearchable onChange={(value) => onChange(index, 'fauna', value)} />
          <SelectMulti id={`resources_${index}`} label='Resources' config={planetResources} isSearchable onChange={(value) => onChange(index, 'resources', value)} />
          <Input id={`notes_${index}`} type='text' label='Planet Notes' onChange={(value) => onChange(index, 'notes', value)} />
        </div>
      ))}
    </div>
  );
}

Planets.propTypes = {
  amount: PropTypes.number,
  onChange: PropTypes.func
};