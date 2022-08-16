import { useState, useRef } from 'react';
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
import systemEconomy from '../lib/select-data/system-economy';
import systemFaction from '../lib/select-data/system-faction';
import systemWealth from '../lib/select-data/system-wealth';
import systemConflict from '../lib/select-data/system-conflict';
import systemMultitoolTech from '../lib/select-data/system-tech-multitool';
import systemStarshipTech from '../lib/select-data/system-tech-starship';
import systemExosuitTech from '../lib/select-data/system-tech-exosuit';
import systemVehicleTech from '../lib/select-data/system-tech-vehicle';

import styles from '../styles/pages/system.module.scss';

export default function System() {
  const myRef = useRef(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [viewCode, setViewCode] = useState(false);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [region, setRegion] = useState('');
  const [galaxy, setGalaxy] = useState('');
  const [multiplestars, setMultiplestars] = useState('');
  const [color, setColor] = useState('');
  const [starClass, setStarClass] = useState('');
  const [distance, setDistance] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [planet, setPlanet] = useState('2');
  const [moon, setMoon] = useState('0');
  const [water, setWater] = useState('');
  const [gateway, setGateway] = useState('');
  const [faction, setFaction] = useState('');
  const [economy, setEconomy] = useState('');
  const [economybuy, setEconomybuy] = useState('');
  const [economysell, setEconomysell] = useState('');
  const [wealth, setWealth] = useState('');
  const [conflict, setConflict] = useState('');
  const [mode, setMode] = useState('');
  const [civ, setCiv] = useState('');
  const [discovered, setDiscovered] = useState('');
  const [discoveredLink, setDiscoveredLink] = useState('');
  const [defaultTitle, setDefaultTitle] = useState('');
  const [planets, setPlanets] = useState([...Array(2)]);
  const [resources, setResources] = useState([]);
  const [glyphs, setGlyphs] = useState('');
  const [galaxyMap, setGalaxyMap] = useState('');
  const [multitoolTech, setMultitoolTech] = useState([]);
  const [starshipTech, setStarshipTech] = useState([]);
  const [exosuitTech, setExosuitTech] = useState([]);
  const [vehicleTech, setVehicleTech] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [gallery, setGallery] = useState([]);

  console.log(planets);

  const renderPlanets = () => {
    const usedResources = [];
    return planets.map((planet) => planet ? `
| [[File:${planet.photo}|150px]] 
| ${planet.name || '[[PlanetName]]'}
| ${planet.type || 'type'}
| ${planet.weather || 'weather'}
| ${planet.sentinels || 'sentinels'}
| ${planet.fauna || 'fauna'}
| ${planet.flora || 'flora'}
|-
|colspan=2 | '''Resources:''' ${planet.resources ? planet.resources.map((resource, index) => {
  if (!usedResources.includes(resource.value)) {
    usedResources.push(resource.value);
    console.log(index, planet.resources.length - 1, index !== planet.resources.length - 1);
    return `[[${resource.value}]]`;
  } else {
    return `${resource.value}`;
  }
}).join(', ') : ''}
|colspan=5 | '''Notes:''' ${planet.notes || ''}
|-`
:
`| [[File:nmsMisc_NotAvailable.png|150px]] 
| [[PlanetName]]
| type
| weather
| sentinels
| fauna
| flora
|-
|colspan=2 | '''Resources:'''
|colspan=5 | '''Notes:'''
|-
`).join('');
  };

  const renderSpaceStation = () => {
    if (multitoolTech.length === 0 && starshipTech.length === 0 && exosuitTech.length === 0 && vehicleTech.length === 0) {
      return 'The space station merchants\' inventory has not been logged at this time.'
    } else {
      return `The space station merchants offer the following S-class items for sale:

${multitoolTech.length > 0 ? `===Multi-tool Technology Merchant===
${multitoolTech.map((tech) => (`* [[${tech.value}]]\n`)).join('')}` : ''}
${starshipTech.length > 0 ? `===Starship Technology Merchant===
${starshipTech.map((tech) => (`* [[${tech.value}]]\n`)).join('')}` : ''}
${exosuitTech.length > 0 ? `===Exosuit Technology Merchant===
${exosuitTech.map((tech) => (`* [[${tech.value}]]\n`)).join('')}` : ''}
${vehicleTech.length > 0 ? `===Vehicle Shop Merchant===
${vehicleTech.map((tech) => (`* [[${tech.value}]]\n`)).join('')}` : ''}`;
    }
  };

  const codeTemplate = `{{Version|Endurance}}
{{System infobox
| name = ${title}
| image = ${image}
| region = ${region}
| galaxy = ${galaxy}
| multiplestars = ${multiplestars !== '1' ? multiplestars : ''}
| color = ${color}
| class = ${starClass}
| distance = ${distance}
| coordinates = ${coordinates}
| planet = ${planet}
| moon = ${moon || 0}
| water = ${water}
| gateway = ${gateway === 'Yes' ? 'Yes' : ''}
| faction = ${faction}
| economy = ${economy}
| economybuy = ${economybuy}
| economysell = ${economysell}
| wealth = ${wealth}
| conflict = ${conflict}
| mode = ${mode}
| civilized = ${civ || 'No Man\'s High Hub'}
| discovered = ${discoveredLink ? '' : discovered}
| discoveredlink = ${discoveredLink}
| release = Endurance
}}
'''${title}''' is a star system.

==Summary==
'''${title}''' is a [[star system]] in the [[${region}]].

==Alias names==
{{aliasc|text=Original|name=${defaultTitle}}}
{{aliasc|text=Current|name=${title}}}

==Planets & Moons==
{| class="article-table" style="width:100%; max-width: 1000px;"
|-
! {{Style_header}} width=150 | Planet Image
! {{Style_header}} | Planet Name
! {{Style_header}} width=100 | Type
! {{Style_header}} width=100 | Weather
! {{Style_header}} width=100 | Sentinels
! {{Style_header}} width=100 | Fauna
! {{Style_header}} width=100 | Flora
|-
${renderPlanets()}
|}

==Location information==
===Coordinates===
{{coords|${coordinates.split(':')[0]}|${coordinates.split(':')[1]}|${coordinates.split(':')[2]}|${coordinates.split(':')[3]}}}

===Glyphs===
{{Gl|${glyphs}}}

===Navigation Images===
[[File:${galaxyMap}|400px]]

===System Location===

==Space station==
${renderSpaceStation()}

==Additional information==
${additionalInfo}

==Gallery==
${gallery.length > 0 ? `
<gallery>
${gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).join('')}
</gallery>
` : ''}`;

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
      title='Create A Star System'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='System Name' onChange={(value) => setTitle(value)} />
        <Input id='defaultTitle' type='text' label='Original Procgen Name' onChange={(value) => setDefaultTitle(value)} />
        <Dropzone label='Space Station or Star System Image' maxFiles={1} onUpload={(photos) => setImage(photos[0].name)} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => setGalaxy(value)} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setRegion(value)} />
        <Select id='multiplestars' label='Amount of Stars' config={[
          { value: '1', label :'1' },
          { value: '2', label :'2' },
          { value: '3', label :'3' }
        ]} onChange={(value) => setMultiplestars(value)} />
        <Select id='color' label='Star Color' config={[
          { value: 'Yellow', label :'Yellow' },
          { value: 'Green', label :'Green' },
          { value: 'Red', label :'Red' },
          { value: 'Blue', label :'Blue' },
          { value: 'Black Hole', label :'Black Hole' }
        ]} onChange={(value) => setColor(value)} />
        <Input id='starClass' type='text' label='Star Class' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setStarClass(value)} />
        <Input id='distance' type='text' label='Distance to Center' tooltip='Found in the top right of the galaxy map.' onChange={(value) => setDistance(value)} />
        <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/' onChange={(value) => setCoordinates(value)} />
        <Input id='planet' type='number' min='2' max='6' label='Planet Amount' tooltip='The amount of planetary bodies in this system' onChange={(value) => {
          setPlanet(value);
          setPlanets([...Array(Number(value) + Number(moon))]);
        }} />
        <Input id='moon' type='number' min='0' max='4' label='Moon Amount' tooltip='The amount of lunar bodies in this system' onChange={(value) => {
          setMoon(value);
          setPlanets([...Array(Number(planet) + Number(value))]);
        }} />
        <Select id='water' label='Contains Water' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => setWater(value)} />
        <Select id='gateway' label='Gateway System' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => setGateway(value)} />
        <Select id='faction' label='System`s Faction' config={systemFaction} onChange={(value) => setFaction(value)} />
        <Select id='economy' label='Economy Type' config={systemEconomy} isSearchable onChange={(value) => setEconomy(value)} />
        <Input id='economybuy' type='text' label='Economy Buy Rate' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setEconomybuy(value)} />
        <Input id='economysell' type='text' label='Economy Sell Rate' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setEconomysell(value)} />
        <Select id='wealth' label='System`s Wealth' config={systemWealth} isSearchable onChange={(value) => setWealth(value)} />
        <Select id='conflict' label='System`s Conflict' config={systemConflict} isSearchable onChange={(value) => setConflict(value)} />
        <SelectGameMode onChange={(value) => setMode(value)} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => setCiv(value)} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => setDiscovered(value)} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => setDiscoveredLink(value)} />
      </div>
      <Planets amount={Number(moon) + Number(planet)} onChange={(index, key, value) => {
        if (key === 'resources') {
          const flatValues = value.map((val) => (val.label));
          const newResources = resources;
          newResources[index] = flatValues;
          setResources(newResources.flat());
        }
        setPlanets((prevState) => {
          return prevState.map((p, prevIndex) => {
            if (index === prevIndex) {
              return { ...p, [key]: value };
            }

            return p;
          });
        });
      }} />
      <Input id='glyphs' type='text' label='Planetary Glyphs' tooltip='Found in screenshot mode. Glyphs are specific to each planet.' defaultValue={glyphs} onChange={(value) => setGlyphs(value)} />
      <Glyphs onChange={(value) => setGlyphs(glyphs + value)} />
      <div className='frmGroup50'>
        <Dropzone label='Galaxy Map' maxFiles={1} onUpload={(photos) => setGalaxyMap(photos[0].name)} />
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
        <SelectMulti id='multitoolTech' label='Multi-tool S-class Upgrades Available' config={systemMultitoolTech} onChange={(items) => setMultitoolTech(items)} />
        <SelectMulti id='starshipTech' label='Starship S-class Upgrades Available' config={systemStarshipTech} onChange={(items) => setStarshipTech(items)} />
        <SelectMulti id='exosuitTech' label='Exosuit S-class Upgrades Available' config={systemExosuitTech} onChange={(items) => setExosuitTech(items)} />
        <SelectMulti id='vehicleTech' label='Vehicle S-class Upgrades Available' config={systemVehicleTech} onChange={(items) => setVehicleTech(items)} />
      </div>
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Anything else to note?' onChange={(value) => setAdditionalInfo(value)} />
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