// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import SelectMulti from '../select-multi';
import Dropzone from '../dropzone';
import planetResources from '../../lib/select-data/planet-resources';

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
          <Input id={`weather_${index}`} type='text' label='Planet Weather' onChange={(value) => onChange(index, 'weather', value)} />
          <Input id={`sentinels_${index}`} type='text' label='Planet Sentinels' onChange={(value) => onChange(index, 'sentinels', value)} />
          <Input id={`fauna_${index}`} type='text' label='Planet Fauna' onChange={(value) => onChange(index, 'fauna', value)} />
          <Input id={`flora_${index}`} type='text' label='Planet Flora' onChange={(value) => onChange(index, 'flora', value)} />
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