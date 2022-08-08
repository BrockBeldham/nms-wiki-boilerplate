// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import SelectMulti from '../select-multi';
import Dropzone from '../dropzone';

import styles from './planets.module.scss';

export default function Planets({ amount, onChange }) {
  return [...Array(amount)].map((a, index) => (
    <div className={`frmGroup50 ${styles.planet}`} key={index}>
      <h2>Planet {index + 1}</h2>
      <Dropzone label='Planet Image' maxFiles={1} onUpload={(photos) => onChange(index, 'photo', photos[0].name)} />
      <Input id='title' type='text' label='Planet Name' onChange={(value) => onChange(index, 'name', value)} />
      <Input id='type' type='text' label='Planet Type' onChange={(value) => onChange(index, 'type', value)} />
      <Input id='weather' type='text' label='Planet Weather' onChange={(value) => onChange(index, 'weather', value)} />
      <Input id='sentinels' type='text' label='Planet Sentinels' onChange={(value) => onChange(index, 'sentinels', value)} />
      <Input id='fauna' type='text' label='Planet Fauna' onChange={(value) => onChange(index, 'fauna', value)} />
      <Input id='flora' type='text' label='Planet Flora' onChange={(value) => onChange(index, 'flora', value)} />
      <SelectMulti id='resources' label='Resources' config={[
        { label: 'Fungal Mould', value: 'Fungal Mould' },
        { label: 'Frost Crystal', value: 'Frost Crystal' },
        { label: 'Gamma Root', value: 'Gamma Root' },
        { label: 'Cactus Flesh', value: 'Cactus Flesh' },
        { label: 'Solanium', value: 'Solanium' },
        { label: 'Star Bulb', value: 'Star Bulb' },
        { label: 'Faecium', value: 'Faecium' },
        { label: 'Copper', value: 'Copper' },
        { label: 'Cadmium', value: 'Cadmium' },
        { label: 'Emeril', value: 'Emeril' },
        { label: 'Indium', value: 'Indium' },
        { label: 'Activated Copper', value: 'Activated Copper' },
        { label: 'Activated Cadmium', value: 'Activated Cadmium' },
        { label: 'Activated Emeril', value: 'Activated Emeril' },
        { label: 'Activated Indium', value: 'Activated Indium' },
        { label: 'Mordite', value: 'Mordite' },
        { label: 'Pugneum', value: 'Pugneum' },
        { label: 'Silver', value: 'Silver' },
        { label: 'Gold', value: 'Gold' },
        { label: 'Platinum', value: 'Platinum' },
        { label: 'Paraffinium', value: 'Paraffinium' },
        { label: 'Pyrite', value: 'Pyrite' },
        { label: 'Ammonia', value: 'Ammonia' },
        { label: 'Uranium', value: 'Uranium' },
        { label: 'Dioxite', value: 'Dioxite' },
        { label: 'Phosphorus', value: 'Phosphorus' },
        { label: 'Basalt', value: 'Basalt' },
        { label: 'Pure Ferrite', value: 'Pure Ferrite' },
        { label: 'Magnetised Ferrite', value: 'Magnetised Ferrite' },
        { label: 'Sodium', value: 'Sodium' },
        { label: 'Cobalt', value: 'Cobalt' },
        { label: 'Salt', value: 'Salt' },
        { label: 'Rusted Metal', value: 'Rusted Metal' },
        { label: 'Ancient Bones', value: 'Ancient Bones' },
        { label: 'Salvageable Scrap', value: 'Salvageable Scrap' }
      ]} isSearchable onChange={(value) => onChange(index, 'resources', value)} />
      <Input id='notes' type='text' label='Planet Notes' onChange={(value) => onChange(index, 'notes', value)} />
    </div>
  ))
}

Planets.propTypes = {
  amount: PropTypes.number,
  onChange: PropTypes.func
};