import { useState, useRef } from 'react';
import Head from 'next/head';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Glyphs from '../components/glyphs';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import Textarea from '../components/textarea';
import Gallery from '../components/gallery';
import SelectGameMode from '../components/select-game-mode';
import systemEconomy from '../lib/select-data/system-economy';

import styles from '../styles/pages/creature.module.scss';

export default function Creature() {
  const myRef = useRef(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [viewCode, setViewCode] = useState(false);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [galaxy, setGalaxy] = useState('');
  const [region, setRegion] = useState('');
  const [system, setSystem] = useState('');
  const [planet, setPlanet] = useState('');
  const [moon, setMoon] = useState('');
  const [location, setLocation] = useState('');
  const [axes, setAxes] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [glyphs, setGlyphs] = useState('');
  const [economy, setEconomy] = useState('');
  const [pilot, setPilot] = useState('');
  const [type, setType] = useState('');
  const [subtype, setSubtype] = useState('');
  const [exotic, setExotic] = useState('');
  const [shipClass, setShipClass] = useState('');
  const [inventory, setInventory] = useState('');
  const [slots, setSlots] = useState('');
  const [techslots, setTechslots] = useState('');
  const [cargoslots, setCargoslots] = useState('');
  const [cost, setCost] = useState('');
  const [civ, setCiv] = useState('');
  const [discovered, setDiscovered] = useState('');
  const [discoveredLink, setDiscoveredLink] = useState('');
  const [mode, setMode] = useState('');
  const [maneuverB, setManeuverB] = useState('');
  const [damageB, setDamageB] = useState('');
  const [shieldB, setShieldB] = useState('');
  const [warpB, setWarpB] = useState('');
  const [appearance, setAppearance] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [gallery, setGallery] = useState([]);

  const codeTemplate = `{{Version|Waypoint}}
{{Starship infobox
| name = ${title}
| image = ${image}
| galaxy = ${galaxy}
| region = ${region}
| system = ${system}
| planet = ${planet}
| moon = ${moon}
| location = ${location}
| axes = ${axes}
| coordinates = ${coordinates}
| portalglyphs = ${glyphs}
| economy = ${economy}
| pilot = ${pilot}
| type = ${type}
| subtype = ${subtype}
| exotic = ${exotic}
| class = ${shipClass}
| inventory = ${inventory}
| slots = ${slots}
| techslots = ${techslots}
| cargoslots = ${cargoslots}
| cost = ${cost}
| civilized = ${civ}
| discovered = ${discovered}
| discoveredlink = ${discoveredLink}
| mode = ${mode}
| release = Waypoint
| maneuverB = ${maneuverB}
| damageB = ${damageB}
| shieldB = ${shieldB}
| warpB = ${warpB}
}}
'''${title}''' is a starship.

==Summary==
'''${title}''' is a${['Explorer', 'Exotic'].includes(type) ? 'n' : ''} [[Starship Catalogue - ${type}|${type}]]-type [[starship]].

==Appearance==
${appearance}

==Location==
A${['A', 'S'].includes(shipClass) ? 'n' : ''} ${shipClass}-class version of this starship was discovered in the [[${system}]] system, located in the [[${region}]].

===Coordinates===
${coordinates ? `{{coords|${coordinates.split(':')[0] ? coordinates.split(':')[0] : 'XXXX'}|${coordinates.split(':')[1] ? coordinates.split(':')[1] : 'XXXX'}|${coordinates.split(':')[2] ? coordinates.split(':')[2] : 'XXXX'}|${coordinates.split(':')[3] ? coordinates.split(':')[3] : 'XXXX'}}}` : ''}

===Glyphs===
{{Gl|${glyphs}}}

==Additional information==
${additionalInfo}

==Gallery==
${gallery.length > 0 ? `<gallery>
${gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).toString().replace(/,/g,'')}</gallery>` : ''}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeTemplate);
    setCodeCopied(true);
    setTimeout(() => {
      setCodeCopied(false);
    }, 3000)
  };

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
        <Input id='title' type='text' label='Base Name' onChange={(value) => setTitle(value)} />
        <Dropzone label='Image of Base' maxFiles={1} onUpload={(photos) => setImage(photos[0].name)} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => setGalaxy(value)} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setRegion(value)} />
        <Input id='system' type='text' label='Star System Name' onChange={(value) => setSystem(value)} />
        <Input id='planet' type='text' label='Planet Name' tooltip='Starship Name OR the starship circled by the moon where the starship can be found.' onChange={(value) => setPlanet(value)} />
        <Input id='moon' type='text' label='Moon Name' tooltip='If the starship is located on a moon. Leave blank if the starship is on a planet.' onChange={(value) => setMoon(value)} />
        <Select id='location' label='Location' config={[
          { label: 'Trading Post', value: 'Trading Post' },
          { label: 'Space Station', value: 'Space Station' },
          { label: 'Base Landing Pad', value: 'Base Landing Pad' },
          { label: 'Freighter', value: 'Freighter' },
          { label: 'Star System', value: 'Star System' }
        ]} onChange={(value) => setLocation(value)} />
        <Input id='axes' type='text' label='Planetary Longitude and Latitude' tooltip='Found using your analysis visor OR on your ships dashboard' onChange={(value) => setAxes(value)} />
      </div>
      <Input id='glyphs' type='text' label='Planetary Glyphs' tooltip='Found in screenshot mode. Glyphs are specific to each planet.' defaultValue={glyphs} onChange={(value) => setGlyphs(value)} />
      <Glyphs onChange={(value) => setGlyphs(glyphs + value)} />
      <div className='frmGroup50'>
        <Select id='economy' label='Economy Type' config={systemEconomy} isSearchable onChange={(value) => setEconomy(value)} />
        <Input id='pilot' type='text' label='NPC Pilot`s Name' onChange={(value) => setPilot(value)} />



        
        <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/' onChange={(value) => setCoordinates(value)} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => setCiv(value)} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => setDiscovered(value)} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => setDiscoveredLink(value)} />
        <SelectGameMode onChange={(value) => setMode(value)} />
      </div>
      <Textarea id='appearance' label='Appearance' placeholder='Describe what the creature looks like.' onChange={(value) => setAppearance(value)} />
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Any nearby resources, tourist traps, other bases.' onChange={(value) => setAdditionalInfo(value)} />
      <Gallery gallery={gallery} onUpload={(photos) => setGallery(photos)} onChange={(value, index) => {
        setGallery((prevState) => {
          const newState = prevState.map((image, prevIndex) => {
            if (index === prevIndex) {
              return {
                path: image.path,
                preview: image.preview,
                name: image.name,
                caption: value
              };
            }

            return image;
          });

          return newState;
        });
      }} />
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
        <a href={`https://nomanssky.fandom.com/wiki/${title.replace(/ /g,"_")}?action=edit`} className={`btn whiteBtn ${styles.btn}`} target='_blank' rel='noreferrer'>
          Create Page
        </a>
      </div>
    </CodeView>
  );
}