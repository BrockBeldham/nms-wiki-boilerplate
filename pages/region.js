import { useState, useRef } from 'react';
import Head from 'next/head';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Dropzone from '../components/dropzone';
import Select from '../components/select';

import styles from '../styles/forms.module.scss';

export default function Creature() {
  const myRef = useRef(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [viewCode, setViewCode] = useState(false);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [galaxy, setGalaxy] = useState('');
  const [quadrant, setQuadrant] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [distance, setDistance] = useState('');
  const [civ, setCiv] = useState('');

  const codeTemplate = `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Region infobox
| name = ${title}
| image = ${image}
| galaxy = ${galaxy}
| quadrant = ${quadrant}
| coordinates = ${coordinates.split(':')[0] ? coordinates.split(':')[0] : 'XXXX'}:${coordinates.split(':')[1] ? coordinates.split(':')[1] : 'XXXX'}:${coordinates.split(':')[2] ? coordinates.split(':')[2] : 'XXXX'}:XXXX
| distance = ${distance}
| civilized = ${civ}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${title}''' is a region.

==Summary==
'''${title}''' is a [[region]] in the [[${galaxy}]] [[galaxy]].

==Region Stats==
{{CARGORegionStats}}

==Documented Systems==
{{CARGORegionSystems}}

==Other Systems==

==Location==
This region is approximately ${distance || 'XXX,XXX'} light years from the [[Galaxy Centre]] in the ${quadrant} [[quadrant]].
${coordinates ? `{{coords|${coordinates.split(':')[0] ? coordinates.split(':')[0] : 'XXXX'}|${coordinates.split(':')[1] ? coordinates.split(':')[1] : 'XXXX'}|${coordinates.split(':')[2] ? coordinates.split(':')[2] : 'XXXX'}|XXXX}}` : ''}

===Adjoining Regions===
The following regions border ${title}:
{{RegionNeighbours|coord=${coordinates.split(':')[0] ? coordinates.split(':')[0] : 'XXXX'}:${coordinates.split(':')[1] ? coordinates.split(':')[1] : 'XXXX'}:${coordinates.split(':')[2] ? coordinates.split(':')[2] : 'XXXX'}:XXXX|gal=${galaxy || 'Euclid'}}}

==Civilized Space==
${civ ? `This region has been explored by the [[${civ}]].` : 'This region has not been explored by a [[Civilized Space|civilization]]'}`;

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
        <Input id='title' type='text' label='Region Name' onChange={(value) => setTitle(value)} />
        <Dropzone label='Image of Base' maxFiles={1} onUpload={(photos) => setImage(photos[0].name)} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => setGalaxy(value)} />
        <Select id='quadrant' label='Quadrant' config={[
          { label: 'Alpha', value: 'Alpha' },
          { label: 'Beta', value: 'Beta' },
          { label: 'Gamma', value: 'Gamma' },
          { label: 'Delta', value: 'Delta' }
        ]} onChange={(value) => setQuadrant(value)} />
        <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/. Note: only the first 12 digits apply to region coordinates.' onChange={(value) => setCoordinates(value)} />
        <Input id='distance' type='text' label='Distance to Center' tooltip='Found in the top right of the galaxy map.' onChange={(value) => setDistance(value)} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => setCiv(value)} />
      </div>
      <div className='btnContainer'>
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => {
          myRef.current.scrollIntoView();
          setViewCode(true);
        }}>
          View Code
        </button>
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => copyToClipboard()}>
          {codeCopied ? 'Code Copied' : 'Copy Code'}
        </button>
        <a href={`https://nomanssky.fandom.com/wiki/${title.replace(/ /g,'_')}?action=edit`} className={`btn whiteBtn ${styles.btn}`} target='_blank' rel='noreferrer'>
          Create Page
        </a>
      </div>
    </CodeView>
  );
}
