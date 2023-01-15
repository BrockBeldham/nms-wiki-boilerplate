import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import reducer from '../reducers/base';
import * as ga from '../lib/ga';
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
  const [codeCopied, setCodeCopied] = useState(false);
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const codeTemplate = `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Creature infobox
| name = ${data.title}
| image = ${data.image || 'nmsMisc_NotAvailable.png'}
| galaxy = ${data.galaxy}
| region = ${data.region}
| system = ${data.system}
| planet = ${data.planet}
| moon = ${data.moon}
| coordinates = ${data.coordinates}
| hemisphere =
| rarity = ${data.rarity}
| ecosystem = ${data.ecosystem}
| activity = ${data.activity}
| bait = 
| gender = ${data.gender}
| behaviour = ${data.behaviour}
| diet = ${data.diet}
| weight = ${data.weight}
| height = ${data.height}
| notes = ${data.notes}
| produces = ${data.produces}
| genus = ${data.genus}
| civilized = ${data.civ || 'No Man\'s High Hub'}
| discovered = ${data.discoveredLink ? '' : data.discovered}
| discoveredlink = ${data.discoveredLink}
| researchteam = ${data.researchteam}
| mode = ${data.mode}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${data.title}''' is a creature.

==Summary==
'''${data.title}''' is a [[creature]], a member of the [[${data.genus}]] [[genus]].

==Appearance==
${data.appearance}

==Alias Names==
${data.defaultTitle ? `{{aliasc|text=Original|name=${data.defaultTitle}}}\n` : ''}{{aliasc|text=Current|name=${data.title}}}

==Discovery Menu==
[[File:${data.discoveryMenu}|400px]]

==Location==
It can be found on the [[planet]] [[${data.planet}]] in the [[${data.system}]] [[star system]].

===Coordinates===
${data.coordinates ? `{{coords|${data.coordinates.split(':')[0] ? data.coordinates.split(':')[0] : 'XXXX'}|${data.coordinates.split(':')[1] ? data.coordinates.split(':')[1] : 'XXXX'}|${data.coordinates.split(':')[2] ? data.coordinates.split(':')[2] : 'XXXX'}|${data.coordinates.split(':')[3] ? data.coordinates.split(':')[3] : 'XXXX'}}}` : ''}

===Glyphs===
{{Gl|${data.glyphs}}}

==Additional Information==
${data.additionalInfo}

==Gallery==
${data.gallery.length > 0 ? `<gallery>
${data.gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).toString().replace(/,/g,'')}</gallery>` : ''}`;

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
      <Input id='glyphs' type='text' label='Planetary Glyphs' tooltip='Found in screenshot mode. Glyphs are specific to each planet.' defaultValue={data.glyphs} onChange={(value) => dispatch({ type: 'glyphs', value })} />
      <Glyphs onChange={(value) => dispatch({ type: 'glyphs.selector', value })} />
      <div className='frmGroup50'>
        <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/' onChange={(value) => dispatch({ type: 'coordinates', value })} />
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
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => dispatch({ type: 'civilized', value })} />
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
      <CreateCategory type='system' title={data.system} parentTitle={data.region} />
    </CodeView>
  );
}