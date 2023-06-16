import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import reducer from '../reducers';
import * as ga from '../lib/ga';
import useCopyToClipboard from '../hooks/copy-to-clipboard';
import multitoolTemplate from '../lib/code-templates/multitool-template';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Glyphs from '../components/glyphs';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import Textarea from '../components/textarea';
import Gallery from '../components/gallery';
import SelectGameMode from '../components/select-game-mode';
import CreateCategory from '../components/create-category';

import styles from '../styles/forms.module.scss';

const initialState = {
  title: '',
  image: '',
  galaxy: '',
  region: '',
  system: '',
  planet: '',
  moon: '',
  location: '',
  axes: '',
  coordinates: '',
  glyphs: '',
  type: '',
  crystals: '',
  horns: '',
  glowtubes: '',
  mtClass: '',
  slots: '',
  cost: '',
  civ: '',
  discovered: '',
  discoveredLink: '',
  mode: '',
  appearance: '',
  damage: '',
  scanner: '',
  acquirement: '',
  additionalInfo: '',
  gallery: []
};

export default function Multitool() {
  const myRef = useRef(null);
  const [codeCopied, handleCopy] = useCopyToClipboard();
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const codeTemplate = multitoolTemplate(data);

  return (
    <CodeView
      code={codeTemplate}
      title='Create A New Multi-tool'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <Head>
        <title>New Multi-tool | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new multi-tool. Create a new multi-tool page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Multi-tool Name' onChange={(value) => dispatch({ type: 'title', value })} />
        <Dropzone label='Image of Base' maxFiles={1} onUpload={(photos) => dispatch({ type: 'image', value: photos[0].name })} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => dispatch({ type: 'galaxy', value })} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'region', value })} />
        <Input id='system' type='text' label='Star System Name' onChange={(value) => dispatch({ type: 'system', value })} />
        <Input id='planet' type='text' label='Planet Name' tooltip='Planet Name OR the planet circled by the moon where the multi-tool can be found.' onChange={(value) => dispatch({ type: 'planet', value })} />
        <Input id='moon' type='text' label='Moon Name' tooltip='If the starship is located on a moon. Leave blank if the starship is on a planet.' onChange={(value) => dispatch({ type: 'moon', value })} />
        <Select id='location' label='Location' config={[
          { label: 'Trading Post', value: 'Trading Post' },
          { label: 'Space Station', value: 'Space Station' },
          { label: 'Space Anomaly', value: 'Space Anomaly' }
        ]} onChange={(value) => dispatch({ type: 'location', value })} />
        <Input id='axes' type='text' label='Planetary Longitude and Latitude' tooltip='Found using your analysis visor OR on your ships dashboard' onChange={(value) => dispatch({ type: 'axes', value })} />
      </div>
      <Glyphs
        changeCoords={(value) => dispatch({ type: 'coordinates', value })}
        changeGlyphs={(value) => dispatch({ type: 'glyphs', value })}
      />
      <div className='frmGroup50'>
        <Select id='type' label='Ship Type' config={[
          { label: 'Alien', value: 'Alien' },
          { label: 'Experimental', value: 'Experimental' },
          { label: 'Pistol', value: 'Pistol' },
          { label: 'Rifle', value: 'Rifle' }
        ]} isSearchable onChange={(value) => dispatch({ type: 'type', value })} />
        <Input id='slots' type='text' label='Slots' onChange={(value) => dispatch({ type: 'slots', value })} />
        <Select id='crystals' label='Crystals' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} tooltip='Does the multitool have crystals?' onChange={(value) => dispatch({ type: 'crystals', value })} />
        <Select id='horns' label='Horns' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} tooltip='Does the multitool have horns?' onChange={(value) => dispatch({ type: 'horns', value })} />
        <Select id='tubes' label='Glow Tubes' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} tooltip='Does the multitool have glow tubes?' onChange={(value) => dispatch({ type: 'tubes', value })} />
        <Select id='class' label='Class' config={[
          { value: 'C', label: 'C' },
          { value: 'B', label: 'B' },
          { value: 'A', label: 'A' },
          { value: 'S', label: 'S' }
        ]} isSearchable onChange={(value) => dispatch({ type: 'class', value })} />
        <Input id='slots' type='text' label='Slots' onChange={(value) => dispatch({ type: 'slots', value })} />
        <Input id='cost' type='text' label='Cost' onChange={(value) => dispatch({ type: 'cost', value })} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => dispatch({ type: 'civ', value })} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => dispatch({ type: 'discovered', value })} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => dispatch({ type: 'discoveredLink', value })} />
        <SelectGameMode onChange={(value) => dispatch({ type: 'mode', value })} />
      </div>
      <Textarea id='appearance' label='Appearance' placeholder='Describe what the multi-tool looks like.' onChange={(value) => dispatch({ type: 'appearance', value })} />
      <div className='frmGroup50'>
        <Input id='damage' type='text' label='Damage Potential' onChange={(value) => dispatch({ type: 'damage', value })} />
        <Input id='scanner' type='text' label='Scanner Range' onChange={(value) => dispatch({ type: 'scanner', value })} />
      </div>
      <Textarea id='acquirement' label='Acquirement' placeholder='Any special directions to acquire this multi-tool.' onChange={(value) => dispatch({ type: 'acquirement', value })} />
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Anything special to note about the multi-tool.' onChange={(value) => dispatch({ type: 'additionalInfo', value })} />
      <Gallery
        gallery={data.gallery}
        onUpload={(photos) => dispatch({ type: 'gallery.upload', value: photos })}
        onChange={(value, index) => dispatch({ type: 'gallery.caption', value, index })}
      />
      <div className={styles.btnContainer}>
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => {
          myRef.current.scrollIntoView();
          setViewCode(true);
          ga.event('View Code', 'Multitool', window.innerWidth < 800 ? 'Popup' : 'ScrollTo');
        }}>
          View Code
        </button>
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => {
          handleCopy(codeTemplate);
          ga.event('Copy Code', 'Multitool', data.civ);
        }}>
          {codeCopied ? 'Code Copied' : 'Copy Code'}
        </button>
        <a href={`https://nomanssky.fandom.com/wiki/${data.title.replace(/ /g,'_')}?action=edit`}
          className={`btn whiteBtn ${styles.btn}`}
          target='_blank'
          rel='noreferrer'
          onClick={() => ga.event('Create Page', 'Multitool', data.civ)}>
          Create Page
        </a>
      </div>
      <CreateCategory type='system' title={data.system} parentTitle={data.region} />
    </CodeView>
  );
}
