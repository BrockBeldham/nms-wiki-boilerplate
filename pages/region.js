import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import * as ga from '../lib/ga';
import reducer from '../reducers';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import CreateCategory from '../components/create-category';

import styles from '../styles/forms.module.scss';

const initialState = {
  title: '',
  image: '',
  galaxy: '',
  quadrant: '',
  coordinates: '',
  distance: '',
  civ: ''
};

export default function Creature() {
  const myRef = useRef(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const codeTemplate = `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Region infobox
| name = ${data.title}
| image = ${data.image || 'nmsMisc_NotAvailable.png'}
| galaxy = ${data.galaxy}
| quadrant = ${data.quadrant}
| coordinates = ${data.coordinates.split(':')[0] ? data.coordinates.split(':')[0] : 'XXXX'}:${data.coordinates.split(':')[1] ? data.coordinates.split(':')[1] : 'XXXX'}:${data.coordinates.split(':')[2] ? data.coordinates.split(':')[2] : 'XXXX'}:XXXX
| distance = ${data.distance}
| civilized = ${data.civ}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${data.title}''' is a region.

==Summary==
'''${data.title}''' is a [[region]] in the [[${data.galaxy}]] [[galaxy]].

==Region Stats==
{{CARGORegionStats}}

==Documented Systems==
{{CARGORegionSystems}}

==Other Systems==

==Location==
This region is approximately ${data.distance || 'XXX,XXX'} light years from the [[Galaxy Centre]] in the ${data.quadrant} [[quadrant]].
${data.coordinates ? `{{coords|${data.coordinates.split(':')[0] ? data.coordinates.split(':')[0] : 'XXXX'}|${data.coordinates.split(':')[1] ? data.coordinates.split(':')[1] : 'XXXX'}|${data.coordinates.split(':')[2] ? data.coordinates.split(':')[2] : 'XXXX'}|XXXX}}` : ''}

===Adjoining Regions===
The following regions border ${data.title}:
{{RegionNeighbours|coord=${data.coordinates.split(':')[0] ? data.coordinates.split(':')[0] : 'XXXX'}:${data.coordinates.split(':')[1] ? data.coordinates.split(':')[1] : 'XXXX'}:${data.coordinates.split(':')[2] ? data.coordinates.split(':')[2] : 'XXXX'}:XXXX|gal=${data.galaxy || 'Euclid'}}}

==Civilized Space==
${data.civ ? `This region has been explored by the [[${data.civ}]].` : 'This region has not been explored by a [[Civilized space|civilization]]'}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeTemplate);
    setCodeCopied(true);
    setTimeout(() => {
      setCodeCopied(false);
    }, 3000);
  };

  return (
    <CodeView
      code={codeTemplate}
      title='Create A New Region'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <Head>
        <title>New Region | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new region. Create a new region page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Region Name' onChange={(value) => dispatch({ type: 'title', value })} />
        <Dropzone label='Image of Base' maxFiles={1} onUpload={(photos) => dispatch({ type: 'image', value: photos[0].name })} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => dispatch({ type: 'galaxy', value })} />
        <Select id='quadrant' label='Quadrant' config={[
          { label: 'Alpha', value: 'Alpha' },
          { label: 'Beta', value: 'Beta' },
          { label: 'Gamma', value: 'Gamma' },
          { label: 'Delta', value: 'Delta' }
        ]} onChange={(value) => dispatch({ type: 'quadrant', value })} />
        <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/. Note: only the first 12 digits apply to region coordinates.' onChange={(value) => dispatch({ type: 'coordinates', value })} />
        <Input id='distance' type='text' label='Distance to Center' tooltip='Found in the top right of the galaxy map.' onChange={(value) => dispatch({ type: 'distance', value })} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => dispatch({ type: 'civ', value })} />
      </div>
      <div className={styles.btnContainer}>
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => {
          myRef.current.scrollIntoView();
          setViewCode(true);
          ga.buttonClick('View Code');
        }}>
          View Code
        </button>
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => {
          copyToClipboard();
          ga.buttonClick('Copy Code');
          ga.recordCiv(data.civ);
        }}>
          {codeCopied ? 'Code Copied' : 'Copy Code'}
        </button>
        <a href={`https://nomanssky.fandom.com/wiki/${data.title.replace(/ /g,'_')}?action=edit`}
          className={`btn whiteBtn ${styles.btn}`}
          target='_blank'
          rel='noreferrer'
          onClick={() => ga.buttonClick('Create Page')}>
          Create Page
        </a>
      </div>
      <CreateCategory type='planet' title={data.title} parentTitle={data.galaxy} />
    </CodeView>
  );
}
