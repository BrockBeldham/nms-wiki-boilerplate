import PropTypes from 'prop-types';
import Input from '../input';
import Select from '../select';

import styles from './members.module.scss';

export default function Members({ details, onChange, deleteMember }) {
  return (
    <div className={styles.container}>
      {details.map((member, index) => (
        <div className={`frmGroup50 ${styles.member}`} key={index}>
          <h2 className={styles.title}>Member {index + 1}</h2>
          {index > 0 &&
            <button className={`icon ${styles.deleteMember}`} onClick={() => deleteMember(index)}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                <use href='#svgClose' />
              </svg>
            </button>
          }
          <Input defaultValue={member.name} id={`nameMember_${index}`} type='text' label='Name' onChange={(value) => onChange(index, 'name', value)} />
          <Select defaultValue={member.platform} id={`platformMember_${index}`} label='Platform' config={[
            { value: 'PC', label: 'PC' },
            { value: 'PS', label: 'PS' },
            { value: 'XB', label: 'XB' },
            { value: 'NS', label: 'NS' },
          ]} onChange={(value) => onChange(index, 'platform', value)} />
          <Input defaultValue={member.homePlanet} id={`homePlanetMember_${index}`} type='text' label='Home Planet' onChange={(value) => onChange(index, 'homePlanet', value)} />
          <Input defaultValue={member.homeSystem} id={`homeSystemMember_${index}`} type='text' label='Home System' onChange={(value) => onChange(index, 'homeSystem', value)} />
        </div>
      ))}
    </div>
  );
}

Members.propTypes = {
  details: PropTypes.array,
  onChange: PropTypes.func,
  deleteMember: PropTypes.func
};
