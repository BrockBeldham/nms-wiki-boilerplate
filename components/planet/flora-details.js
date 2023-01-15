import PropTypes from 'prop-types';
import Dropzone from '../dropzone';
import Input from '../input';

import styles from './flora-details.module.scss';

export default function FloraDetails({ details, onChange, deleteFlora }) {
  return (
    <div className={styles.container}>
      {details.map((flora, index) => (
        <div className={`frmGroup50 ${styles.flora}`} key={index}>
          <h2 className={styles.title}>Plant {index + 1}</h2>
          {index > 0 &&
            <button className={`icon ${styles.deleteFlora}`} onClick={() => deleteFlora(index)}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                <use href='#svgClose' />
              </svg>
            </button>
          }
          <Dropzone label='Image' maxFiles={1} onUpload={(photos) => onChange(index, 'image', photos[0].name)} />
          <Input defaultValue={flora.name} id={`nameFlora_${index}`} type='text' label='Name' onChange={(value) => onChange(index, 'name', value)} />
          <Input defaultValue={flora.age} id={`ageFlora_${index}`} type='text' label='Age' onChange={(value) => onChange(index, 'age', value)} />
          <Input defaultValue={flora.roots} id={`rootsFlora_${index}`} type='text' label='Root Structure' onChange={(value) => onChange(index, 'roots', value)} />
          <Input defaultValue={flora.nutrients} id={`nutrientsFlora_${index}`} type='text' label='Nutrient Source' onChange={(value) => onChange(index, 'nutrients', value)} />
          <Input defaultValue={flora.elements} id={`elementsFlora_${index}`} type='text' label='Elements' onChange={(value) => onChange(index, 'elements', value)} />
          <Input defaultValue={flora.discovered} id={`discoveredFlora_${index}`} type='text' label='Discovered' onChange={(value) => onChange(index, 'discovered', value)} />
          <Input defaultValue={flora.description} id={`descriptionFlora_${index}`} type='text' label='Brief description' onChange={(value) => onChange(index, 'description', value)} />
        </div>
      ))}
    </div>
  );
}

FloraDetails.propTypes = {
  details: PropTypes.array,
  onChange: PropTypes.func,
  deleteFlora: PropTypes.func
};
