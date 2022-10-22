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

import styles from '../styles/forms.module.scss';

export default function Multitool() {
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
  const [type, setType] = useState('');
  const [crystals, setCrystals] = useState('');
  const [horns, setHorns] = useState('');
  const [glowtubes, setGlowtubes] = useState('');
  const [mtClass, setMtClass] = useState('');
  const [slots, setSlots] = useState('');
  const [cost, setCost] = useState('');
  const [civ, setCiv] = useState('');
  const [discovered, setDiscovered] = useState('');
  const [discoveredLink, setDiscoveredLink] = useState('');
  const [mode, setMode] = useState('');
  const [appearance, setAppearance] = useState('');
  const [damage, setDamage] = useState('');
  const [scanner, setScanner] = useState('');
  const [acquirement, setAcquirement] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [gallery, setGallery] = useState([]);

  const codeTemplate = `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Multitool infobox
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
| type = ${type}
| crystals = ${crystals}
| horns = ${horns}
| glowtubes = ${glowtubes}
| class = ${mtClass}
| slots = ${slots}
| cost = ${cost}
| civilized = ${civ}
| discovered = ${discovered}
| discoveredlink = ${discoveredLink}
| mode = ${mode}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${title}''' is a multi-tool.

==Summary==
'''${title}''' is a${['Alien', 'Experimental'].includes(type) ? 'n' : ''} [[Starship Catalogue - ${type}|${type} multi-tool]].

==Appearance==
${appearance}

==Location==
A${['A', 'S'].includes(mtClass) ? 'n' : ''} {{class|${mtClass}}} class version of this multi-tool was found in the [[${system}]] system, located in the [[${region}]].

===Coordinates===
${coordinates ? `{{coords|${coordinates.split(':')[0] ? coordinates.split(':')[0] : 'XXXX'}|${coordinates.split(':')[1] ? coordinates.split(':')[1] : 'XXXX'}|${coordinates.split(':')[2] ? coordinates.split(':')[2] : 'XXXX'}|${coordinates.split(':')[3] ? coordinates.split(':')[3] : 'XXXX'}}}` : ''}

===Glyphs===
{{Gl|${glyphs}}}

==Stats==
The {{class|${mtClass}}} class version of this weapon has the following bonus stats:
* '''Damage Potential''': ${damage}
* '''Scanner Range''': ${scanner}

==Acquirement==
${acquirement}

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
    }, 3000);
  };

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
        <Input id='title' type='text' label='Base Name' onChange={(value) => setTitle(value)} />
        <Dropzone label='Image of Base' maxFiles={1} onUpload={(photos) => setImage(photos[0].name)} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => setGalaxy(value)} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setRegion(value)} />
        <Input id='system' type='text' label='Star System Name' onChange={(value) => setSystem(value)} />
        <Input id='planet' type='text' label='Planet Name' tooltip='Planet Name OR the planet circled by the moon where the multi-tool can be found.' onChange={(value) => setPlanet(value)} />
        <Input id='moon' type='text' label='Moon Name' tooltip='If the starship is located on a moon. Leave blank if the starship is on a planet.' onChange={(value) => setMoon(value)} />
        <Select id='location' label='Location' config={[
          { label: 'Trading Post', value: 'Trading Post' },
          { label: 'Space Station', value: 'Space Station' },
          { label: 'Space Anomaly', value: 'Space Anomaly' }
        ]} onChange={(value) => setLocation(value)} />
        <Input id='axes' type='text' label='Planetary Longitude and Latitude' tooltip='Found using your analysis visor OR on your ships dashboard' onChange={(value) => setAxes(value)} />
      </div>
      <Input id='glyphs' type='text' label='Planetary Glyphs' tooltip='Found in screenshot mode. Glyphs are specific to each planet.' defaultValue={glyphs} onChange={(value) => setGlyphs(value)} />
      <Glyphs onChange={(value) => setGlyphs(glyphs + value)} />
      <div className='frmGroup50'>
        <Select id='type' label='Ship Type' config={[
          { label: 'Alien', value: 'Alien' },
          { label: 'Experimental', value: 'Experimental' },
          { label: 'Pistol', value: 'Pistol' },
          { label: 'Rifle', value: 'Rifle' }
        ]} isSearchable onChange={(value) => setType(value)} />
        <Input id='slots' type='text' label='Slots' onChange={(value) => setSlots(value)} />
        <Select id='crystals' label='Crystals' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} tooltip='Does the multitool have crystals?' onChange={(value) => setCrystals(value)} />
        <Select id='horns' label='Horns' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} tooltip='Does the multitool have horns?' onChange={(value) => setHorns(value)} />
        <Select id='tubes' label='Glow Tubes' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} tooltip='Does the multitool have glow tubes?' onChange={(value) => setGlowtubes(value)} />
        <Select id='class' label='Class' config={[
          { value: 'C', label: 'C' },
          { value: 'B', label: 'B' },
          { value: 'A', label: 'A' },
          { value: 'S', label: 'S' }
        ]} isSearchable onChange={(value) => setMtClass(value)} />
        <Input id='slots' type='text' label='Slots' onChange={(value) => setSlots(value)} />
        <Input id='cost' type='text' label='Cost' onChange={(value) => setCost(value)} />
        <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/' onChange={(value) => setCoordinates(value)} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => setCiv(value)} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => setDiscovered(value)} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => setDiscoveredLink(value)} />
        <SelectGameMode onChange={(value) => setMode(value)} />
      </div>
      <Textarea id='appearance' label='Appearance' placeholder='Describe what the multi-tool looks like.' onChange={(value) => setAppearance(value)} />
      <div className='frmGroup50'>
        <Input id='damage' type='text' label='Damage Potential' onChange={(value) => setDamage(value)} />
        <Input id='scanner' type='text' label='Scanner Range' onChange={(value) => setScanner(value)} />
      </div>
      <Textarea id='acquirement' label='Acquirement' placeholder='Any special directions to acquire this multi-tool.' onChange={(value) => setAcquirement(value)} />
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Anything special to note about the multi-tool.' onChange={(value) => setAdditionalInfo(value)} />
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
        <a href={`https://nomanssky.fandom.com/wiki/${title.replace(/ /g,'_')}?action=edit`} className={`btn whiteBtn ${styles.btn}`} target='_blank' rel='noreferrer'>
          Create Page
        </a>
      </div>
    </CodeView>
  );
}
