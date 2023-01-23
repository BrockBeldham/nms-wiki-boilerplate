import PropTypes from 'prop-types';
import Dropzone from '../dropzone';
import Input from '../input';
import Select from '../select';
import faunaGenus from '../../lib/select-data/fauna-genus';

import styles from './fauna-details.module.scss';

export default function FaunaDetails({ details, onChange, deleteFauna, addFauna }) {
  return (
    <div className={styles.container}>
      {details.map((fauna, index) => (
        <div className={`frmGroup50 ${styles.fauna}`} key={index}>
          <h2 className={styles.title}>Creature {index + 1}</h2>
          <button className={`icon ${styles.deleteFauna}`} onClick={() => deleteFauna(index)}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
              <use href='#svgClose' />
            </svg>
          </button>
          <Dropzone label='Image' maxFiles={1} onUpload={(photos) => onChange(index, 'image', photos[0].name)} />
          <Input defaultValue={fauna.name} id={`nameFauna_${index}`} type='text' label='Name' onChange={(value) => onChange(index, 'name', value)} />
          <Select defaultValue={fauna.ecosystem} id={`ecosystemFauna_${index}`} label='Ecosystem' config={[
            { label: 'Flying', value: 'Flying' },
            { label: 'Ground', value: 'Ground' },
            { label: 'Underground', value: 'Underground' },
            { label: 'Underwater', value: 'Underwater' }
          ]} onChange={(value) => onChange(index, 'ecosystem', value)} />
          <Select defaultValue={fauna.genus} id={`genusFauna_${index}`} label='Genus' config={faunaGenus} isSearchable onChange={(value) => onChange(index, 'genus', value)} />
          <Input defaultValue={fauna.height} id={`heightFauna_${index}`} type='text' label='Height' onChange={(value) => onChange(index, 'height', value)} />
          <Input defaultValue={fauna.weight} id={`weightFauna_${index}`} type='text' label='Weight' onChange={(value) => onChange(index, 'weight', value)} />
          <Input defaultValue={fauna.discovered} id={`discoveredFauna_${index}`} type='text' label='Discovered' onChange={(value) => onChange(index, 'discovered', value)} />
          <Input defaultValue={fauna.description} id={`descriptionFauna_${index}`} type='text' label='Brief description' onChange={(value) => onChange(index, 'description', value)} />
        </div>
      ))}
      <div className={styles.btnContainer}>
        <button
          type='button'
          className='btn'
          onClick={() => addFauna({
            image: '',
            name: '',
            ecosystem: '',
            genus: '',
            height: '',
            weight: '',
            discovered: '',
            description: ''
          })}>
          Add Creature
        </button>
      </div>
    </div>
  );
}

FaunaDetails.propTypes = {
  details: PropTypes.array,
  onChange: PropTypes.func,
  deleteFauna: PropTypes.func,
  addFauna: PropTypes.func
};
