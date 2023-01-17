import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import * as ga from '../lib/ga';
import reducer from '../reducers';
import useCopyToClipboard from '../hooks/copy-to-clipboard';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Glyphs from '../components/glyphs';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import Textarea from '../components/textarea';
import Gallery from '../components/gallery';
import SelectGameMode from '../components/select-game-mode';
import CreateCategory from '../components/create-category';
import systemEconomy from '../lib/select-data/system-economy';
import starshipType from '../lib/select-data/starship-type';

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
  economy: '',
  pilot: '',
  type: '',
  subtype: '',
  exotic: '',
  shipClass: '',
  inventory: '',
  techslots: '',
  cargoslots: '',
  cost: '',
  civ: '',
  discovered: '',
  discoveredLink: '',
  mode: '',
  maneuverB: '',
  damageB: '',
  shieldB: '',
  warpB: '',
  appearance: '',
  additionalInfo: '',
  gallery: []
};

export default function Starship() {
  const myRef = useRef(null);
  const [codeCopied, handleCopy] = useCopyToClipboard();
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const codeTemplate = `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Starship infobox
| name = ${data.title}
| image = ${data.image || 'nmsMisc_NotAvailable.png'}
| galaxy = ${data.galaxy}
| region = ${data.region}
| system = ${data.system}
| planet = ${data.planet}
| moon = ${data.moon}
| location = ${data.location}
| axes = ${data.axes}
| coordinates = ${data.coordinates}
| portalglyphs = ${data.glyphs}
| economy = ${data.economy}
| pilot = ${data.pilot}
| type = ${data.type}
| subtype = ${data.subtype}
| exotic = ${data.exotic}
| class = ${data.shipClass}
| inventory = ${data.inventory}
| techslots = ${data.techslots}
| cargoslots = ${data.cargoslots}
| cost = ${data.cost}
| civilized = ${data.civ}
| discovered = ${data.discovered}
| discoveredlink = ${data.discoveredLink}
| mode = ${data.mode}
| release = ${process.env.NEXT_PUBLIC_VERSION}
| maneuverB = ${data.maneuverB}
| damageB = ${data.damageB}
| shieldB = ${data.shieldB}
| warpB = ${data.warpB}
}}
'''${data.title}''' is a starship.

==Summary==
'''${data.title}''' is a${['Explorer', 'Exotic'].includes(data.type) ? 'n' : ''} [[Starship Catalogue - ${data.type}|${data.type}]]-type [[starship]].

==Appearance==
${data.appearance}

==Location==
A${['A', 'S'].includes(data.shipClass) ? 'n' : ''} {{class|${data.shipClass}}} class version of this starship was discovered in the [[${data.system}]] system, located in the [[${data.region}]].

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

  return (
    <CodeView
      code={codeTemplate}
      title='Create A New Starship'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <Head>
        <title>New Starhisp | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new starship. Create a new starship page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Starship Name' onChange={(value) => dispatch({ type: 'title', value })} />
        <Dropzone label='Image of Base' maxFiles={1} onUpload={(photos) => dispatch({ type: 'image', value: photos[0].name })} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => dispatch({ type: 'galaxy', value })} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'region', value })} />
        <Input id='system' type='text' label='Star System Name' onChange={(value) => dispatch({ type: 'system', value })} />
        <Input id='planet' type='text' label='Planet Name' tooltip='Planet Name OR the planet circled by the moon where the starship can be found.' onChange={(value) => dispatch({ type: 'planet', value })} />
        <Input id='moon' type='text' label='Moon Name' tooltip='If the starship is located on a moon. Leave blank if the starship is on a planet.' onChange={(value) => dispatch({ type: 'moon', value })} />
        <Select id='location' label='Location' config={[
          { label: 'Trading Post', value: 'Trading Post' },
          { label: 'Space Station', value: 'Space Station' },
          { label: 'Base Landing Pad', value: 'Base Landing Pad' },
          { label: 'Freighter', value: 'Freighter' },
          { label: 'Star System', value: 'Star System' }
        ]} onChange={(value) => dispatch({ type: 'location', value })} />
        <Input id='axes' type='text' label='Planetary Longitude and Latitude' tooltip='Found using your analysis visor OR on your ships dashboard' onChange={(value) => dispatch({ type: 'axes', value })} />
      </div>
      <Input id='glyphs' type='text' label='Planetary Glyphs' tooltip='Found in screenshot mode. Glyphs are specific to each planet.' defaultValue={data.glyphs} onChange={(value) => dispatch({ type: 'glyphs', value })} />
      <Glyphs onChange={(value) => dispatch({ type: 'glyphs.selector', value })} />
      <div className='frmGroup50'>
        <Select id='economy' label='Economy Type' config={systemEconomy} isSearchable onChange={(value) => dispatch({ type: 'economy', value })} />
        <Input id='pilot' type='text' label='NPC Pilot`s Name' onChange={(value) => dispatch({ type: 'pilot', value })} />
        <Select id='type' label='Ship Type' config={starshipType} isSearchable onChange={(value) => dispatch({ type: 'type', value })} />
        {data.type === 'Freighter' || data.type === 'Frigate' &&
          <Select id='subtype' label='Freighter or Frigate Subtype' config={starshipType} isSearchable onChange={(value) => dispatch({ type: 'subtype', value })} />
        }
        {data.type === 'Exotic' &&
          <Select id='exotic' label='Exotic Subtype' config={[
            { value: 'Squid', label: 'Squid' },
            { value: 'Ball', label: 'Ball' },
            { value: 'Guppy', label: 'Guppy' },
            { value: 'Mosquito', label: 'Mosquito' }
          ]} isSearchable onChange={(value) => dispatch({ type: 'exotic', value })} />
        }
        <Select id='class' label='Class' config={[
          { value: 'C', label: 'C' },
          { value: 'B', label: 'B' },
          { value: 'A', label: 'A' },
          { value: 'S', label: 'S' }
        ]} isSearchable onChange={(value) => dispatch({ type: 'class', value })} />
        <Select id='inventory' label='Inventory Size' config={[
          { value: 'Small', label: 'Small' },
          { value: 'Medium', label: 'Medium' },
          { value: 'Large', label: 'Large' }
        ]} isSearchable onChange={(value) => dispatch({ type: 'inventory', value })} />
        <Input id='techslots' type='text' label='Tech Slots' onChange={(value) => dispatch({ type: 'techslots', value })} />
        <Input id='cargoslots' type='text' label='Cargo Slots' onChange={(value) => dispatch({ type: 'cargoslots', value })} />
        <Input id='cost' type='text' label='Cost' onChange={(value) => dispatch({ type: 'cost', value })} />
        <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/' onChange={(value) => dispatch({ type: 'coordinates', value })} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => dispatch({ type: 'civ', value })} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => dispatch({ type: 'discovered', value })} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => dispatch({ type: 'discoveredLink', value })} />
        <SelectGameMode onChange={(value) => dispatch({ type: 'mode', value })} />
        <Input id='maneuverB' type='text' label='Maneuverability' onChange={(value) => dispatch({ type: 'maneuverB', value })} />
        <Input id='damageB' type='text' label='Maximum Damage' onChange={(value) => dispatch({ type: 'damageB', value })} />
        <Input id='shieldB' type='text' label='Maximum Shield' onChange={(value) => dispatch({ type: 'shieldB', value })} />
        <Input id='warpB' type='text' label='Maximum Warp' onChange={(value) => dispatch({ type: 'warpB', value })} />
      </div>
      <Textarea id='appearance' label='Appearance' placeholder='Describe what the starship looks like.' onChange={(value) => dispatch({ type: 'appearance', value })} />
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Anything special to note about the starship.' onChange={(value) => dispatch({ type: 'additionalInfo', value })} />
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