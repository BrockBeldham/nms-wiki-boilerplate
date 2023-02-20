import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import reducer from '../reducers';
import * as ga from '../lib/ga';
import useCopyToClipboard from '../hooks/copy-to-clipboard';
import creatureTemplate from '../lib/code-templates/creature-template';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Glyphs from '../components/glyphs';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import Textarea from '../components/textarea';
import Gallery from '../components/gallery';
import CreateCategory from '../components/create-category';
import SelectGameMode from '../components/select-game-mode';
import faunaEcosystem from '../lib/select-data/fauna-ecosystem';
import faunaGender from '../lib/select-data/fauna-gender';
import faunaGenus from '../lib/select-data/fauna-genus';
import faunaBehaviour from '../lib/select-data/fauna-behaviour';
import faunaProducts from '../lib/select-data/fauna-products';

import styles from '../styles/forms.module.scss';

const initialState = {
  title: '',
  defaultTitle: '',
  image: '',
  galaxy: '',
  region: '',
  system: '',
  planet: '',
  moon: '',
  glyphs: '',
  coordinates: '',
  rarity: '',
  ecosystem: '',
  activity: '',
  gender: '',
  behaviour: '',
  diet: '',
  weight: '',
  height: '',
  notes: '',
  produces: '',
  genus: '',
  civ: '',
  discovered: '',
  discoveredLink: '',
  researchteam: '',
  mode: '',
  appearance: '',
  discoveryMenu: '',
  additionalInfo: '',
  gallery: [],
};

export default function Creature() {
  const myRef = useRef(null);
  const [codeCopied, handleCopy] = useCopyToClipboard();
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const codeTemplate = creatureTemplate(data);

  return (
    <CodeView
      code={codeTemplate}
      title='Create A New Creature'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <Head>
        <title>New Creature | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new creature. Create a new creature page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Creature Name' onChange={(value) => dispatch({ type: 'title', value })} />
        <Input id='defaultTitle' type='text' label='Original Procgen Name' onChange={(value) => dispatch({ type: 'defaultTitle', value })} />
        <Dropzone label='Image of Base' maxFiles={1} onUpload={(photos) => dispatch({ type: 'image', value: photos[0].name })} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => dispatch({ type: 'galaxy', value })} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'region', value })} />
        <Input id='system' type='text' label='Star System Name' onChange={(value) => dispatch({ type: 'system', value })} />
        <Input id='planet' type='text' label='Planet Name' tooltip='Planet Name OR the planet circled by the moon where the creature can be found.' onChange={(value) => dispatch({ type: 'planet', value })} />
        <Input id='moon' type='text' label='Moon Name' tooltip='If the creature is located on a moon. Leave blank if the creature is on a planet.' onChange={(value) => dispatch({ type: 'moon', value })} />
      </div>
      <Glyphs
        changeCoords={(value) => dispatch({ type: 'coordinates', value })}
        changeGlyphs={(value) => dispatch({ type: 'glyphs', value })}
      />
      <div className='frmGroup50'>
        <Select id='rarity' label='Rarity' config={[
          { label: 'Common', value: 'Common' },
          { label: 'Uncommon', value: 'Uncommon' },
          { label: 'Rare', value: 'Rare' }
        ]} onChange={(value) => dispatch({ type: 'rarity', value })} />
        <Select id='ecosystem' label='Ecosystem' config={faunaEcosystem} isSearchable onChange={(value) => dispatch({ type: 'ecosystem', value })} />
        <Select id='activity' label='Activity' config={[
          { label: 'Nocturnal', value: 'Nocturnal' },
          { label: 'Diurnal', value: 'Diurnal' },
          { label: 'Always Active', value: 'Always Active' }
        ]} onChange={(value) => dispatch({ type: 'activity', value })} />
        <Select id='gender' label='Gender' config={faunaGender} isSearchable onChange={(value) => dispatch({ type: 'gender', value })} />
        <Select id='behaviour' label='Behaviour' config={faunaBehaviour} isSearchable onChange={(value) => dispatch({ type: 'behaviour', value })} />
        <Input id='diet' type='text' label='Diet' onChange={(value) => dispatch({ type: 'diet', value })} />
        <Input id='weight' type='number' label='Weight' onChange={(value) => dispatch({ type: 'weight', value })} />
        <Input id='height' type='number' label='Height' onChange={(value) => dispatch({ type: 'height', value })} />
        <Input id='notes' type='text' label='Additional Observations' onChange={(value) => dispatch({ type: 'notes', value })} />
        <Select id='produces' label='Produces' config={faunaProducts} isSearchable onChange={(value) => dispatch({ type: 'produces', value })} />
        <Select id='genus' label='Genus' config={faunaGenus} isSearchable onChange={(value) => dispatch({ type: 'genus', value })} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => dispatch({ type: 'civ', value })} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => dispatch({ type: 'discovered', value })} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => dispatch({ type: 'discoveredLink', value })} />
        <Input id='researchTeam' type='text' label='Research Team' onChange={(value) => dispatch({ type: 'researchTeam', value })} />
        <SelectGameMode onChange={(value) => dispatch({ type: 'mode', value })} />
      </div>
      <Textarea id='appearance' label='Appearance' placeholder='Describe what the creature looks like.' onChange={(value) => dispatch({ type: 'mode', value })} />
      <Dropzone label='Discovery Menu' maxFiles={1} onUpload={(photos) => dispatch({ type: 'discoveryMenu', value: photos[0].name })} />
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Any nearby resources, tourist traps, other bases.' onChange={(value) => dispatch({ type: 'additionalInfo', value })} />
      <Gallery
        gallery={data.gallery}
        onUpload={(photos) => dispatch({ type: 'gallery.upload', value: photos })}
        onChange={(value, index) => dispatch({ type: 'gallery.caption', value, index })}
      />
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
      <CreateCategory type='system' title={data.system} parentTitle={data.region} />
    </CodeView>
  );
}