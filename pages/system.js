import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import reducer from '../reducers';
import * as ga from '../lib/ga';
import useCopyToClipboard from '../hooks/copy-to-clipboard';
import systemTemplate from '../lib/code-templates/system-template';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Glyphs from '../components/glyphs';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import SelectMulti from '../components/select-multi';
import Textarea from '../components/textarea';
import SelectGameMode from '../components/select-game-mode';
import Planets from '../components/system/planets';
import Gallery from '../components/gallery';
import CreateCategory from '../components/create-category';
import systemEconomy from '../lib/select-data/system-economy';
import systemFaction from '../lib/select-data/system-faction';
import systemWealth from '../lib/select-data/system-wealth';
import systemConflict from '../lib/select-data/system-conflict';
import systemMultitoolTech from '../lib/select-data/system-tech-multitool';
import systemStarshipTech from '../lib/select-data/system-tech-starship';
import systemExosuitTech from '../lib/select-data/system-tech-exosuit';
import systemVehicleTech from '../lib/select-data/system-tech-vehicle';

import styles from '../styles/forms.module.scss';

const initialState = {
  title: '',
  image: '',
  region: '',
  galaxy: '',
  multiplestars: '',
  color: '',
  starClass: '',
  distance: '',
  coordinates: '',
  planet: '2',
  moon: '0',
  water: '',
  dissonant: '',
  gateway: '',
  faction: '',
  economy: '',
  economybuy: '',
  economysell: '',
  wealth: '',
  conflict: '',
  mode: '',
  civ: '',
  discovered: '',
  discoveredLink: '',
  defaultTitle: '',
  planets: [...Array(2)],
  resources: [],
  glyphs: '',
  galaxyMap: '',
  multitoolTech: [],
  starshipTech: [],
  exosuitTech: [],
  vehicleTech: [],
  additionalInfo: '',
  gallery: [],
};

export default function System() {
  const myRef = useRef(null);
  const [codeCopied, handleCopy] = useCopyToClipboard();
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const codeTemplate = systemTemplate(data);

  return (
    <CodeView
      code={codeTemplate}
      title='Create A Star System'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <Head>
        <title>New Star System | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new star system. Create a new star system page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='System Name' onChange={(value) => dispatch({ type: 'title', value })} />
        <Input id='defaultTitle' type='text' label='Original Procgen Name' onChange={(value) => dispatch({ type: 'defaultTitle', value })} />
        <Dropzone label='Space Station or Star System Image' maxFiles={1} onUpload={(photos) => dispatch({ type: 'image', value: photos[0].name })} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => dispatch({ type: 'galaxy', value })} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'region', value })} />
        <Select id='multiplestars' label='Amount of Stars' config={[
          { value: '1', label :'1' },
          { value: '2', label :'2' },
          { value: '3', label :'3' }
        ]} onChange={(value) => dispatch({ type: 'multiplestars', value })} />
        <Select id='color' label='Star Color' config={[
          { value: 'Yellow', label :'Yellow' },
          { value: 'Green', label :'Green' },
          { value: 'Red', label :'Red' },
          { value: 'Blue', label :'Blue' },
          { value: 'Black Hole', label :'Black Hole' }
        ]} onChange={(value) => dispatch({ type: 'color', value })} />
        <Input id='starClass' type='text' label='Star Class' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'starClass', value })} />
        <Input id='distance' type='text' label='Distance to Center' tooltip='Found in the top right of the galaxy map.' onChange={(value) => dispatch({ type: 'distance', value })} />
        <Glyphs
          changeCoords={(value) => dispatch({ type: 'coordinates', value })}
          changeGlyphs={(value) => dispatch({ type: 'glyphs', value })}
        />
        <Input id='planet' type='number' min='2' max='6' label='Planet Amount' tooltip='The amount of planetary bodies in this system' onChange={(value) => {
          dispatch({ type: 'planet', value });
          dispatch({ type: 'planets.set', value: Number(value) + Number(data.moon) });
        }} />
        <Input id='moon' type='number' min='0' max='4' label='Moon Amount' tooltip='The amount of lunar bodies in this system' onChange={(value) => {
          dispatch({ type: 'moon', value });
          dispatch({ type: 'planets.set', value: Number(value) + Number(data.planet) });
        }} />
        <Select id='water' label='Contains Water' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'water', value })} />
        <Select id='gateway' label='Dissonant' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'dissonant', value })} />
        <Select id='gateway' label='Gateway System' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'gateway', value })} />
        <Select id='faction' label='System`s Faction' config={systemFaction} onChange={(value) => dispatch({ type: 'faction', value })} />
        <Select id='economy' label='Economy Type' config={systemEconomy} isSearchable onChange={(value) => dispatch({ type: 'economy', value })} />
        <Input id='economybuy' type='text' label='Economy Buy Rate' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'economybuy', value })} />
        <Input id='economysell' type='text' label='Economy Sell Rate' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'economysell', value })} />
        <Select id='wealth' label='System`s Wealth' config={systemWealth} isSearchable onChange={(value) => dispatch({ type: 'wealth', value })} />
        <Select id='conflict' label='System`s Conflict' config={systemConflict} isSearchable onChange={(value) => dispatch({ type: 'conflict', value })} />
        <SelectGameMode onChange={(value) => dispatch({ type: 'mode', value })} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => dispatch({ type: 'civ', value })} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => dispatch({ type: 'discovered', value })} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => dispatch({ type: 'discoveredLink', value })} />
      </div>
      <Planets amount={Number(data.moon) + Number(data.planet)} onChange={(index, key, value) => {
        if (key === 'resources') {
          const flatValues = value.map((val) => (val.label));
          const newResources = data.resources;
          newResources[index] = flatValues;
          dispatch({ type: 'resources', value: newResources.flat() });
        }
        dispatch({ type: 'changeObjInArray', id: 'planets', value, index, key });
      }} />
      <div className='frmGroup50'>
        <Dropzone label='Galaxy Map' maxFiles={1} onUpload={(photos) => dispatch({ type: 'galaxyMap', value: photos[0].name })} />
        <Gallery
          gallery={data.gallery}
          onUpload={(photos) => dispatch({ type: 'gallery.upload', value: photos })}
          onChange={(value, index) => dispatch({ type: 'gallery.caption', value, index })}
        />
        <SelectMulti id='multitoolTech' label='Multi-tool S-class Upgrades Available' config={systemMultitoolTech} onChange={(items) => dispatch({ type: 'multitoolTech', value: items })} />
        <SelectMulti id='starshipTech' label='Starship S-class Upgrades Available' config={systemStarshipTech} onChange={(items) => dispatch({ type: 'starshipTech', value: items })} />
        <SelectMulti id='exosuitTech' label='Exosuit S-class Upgrades Available' config={systemExosuitTech} onChange={(items) => dispatch({ type: 'exosuitTech', value: items })} />
        <SelectMulti id='vehicleTech' label='Vehicle S-class Upgrades Available' config={systemVehicleTech} onChange={(items) => dispatch({ type: 'vehicleTech', value: items })} />
      </div>
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Anything else to note?' onChange={(value) => dispatch({ type: 'additionalInfo', value })} />
      <div className={styles.btnContainer}>
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => {
          myRef.current.scrollIntoView();
          setViewCode(true);
          ga.buttonClick('View Code');
        }}>
          View Code
        </button>
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => {
          handleCopy(codeTemplate);
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
      <CreateCategory type='system' title={data.title} parentTitle={data.region} />
    </CodeView>
  );
}