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

  console.log(resources);
  console.log(planets);

  const renderPlanets = () => {
    const usedResources = [];
    return planets.map((planet) => planet ? `
| [[File:${planet.photo}|150px]] 
| ${planet.name}
| ${planet.type}
| ${planet.weather}
| ${planet.sentinels}
| ${planet.fauna}
| ${planet.flora}
|-
|colspan=2 | '''Resources:''' ${planet.resources ? planet.resources.map((resource) => {
  console.log(usedResources, resource.value, !usedResources.includes(resource.value));
  if (!usedResources.includes(resource.value)) {
    usedResources.push(resource.value);
    return ` [[${resource.value}]]`;
  } else {
    return ` ${resource.value}`;
  }
}) : ''}
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
`).toString().replace(/,/g,'');
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

==Notable locations / Waypoints==
Notable Bases include:
{{CARGOBasesSys|${title}}}

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
[[File:${galaxyMap}|300px]]

===System Location===

==Space station==
The space station merchants offer the following S-class items for sale:

${multitoolTech.length > 0 ? `===Multi-tool Technology Merchant===
${multitoolTech.map((tech) => (`* [[${tech.value}]]\n`)).toString().replace(/,/g,'')}` : ''}
${starshipTech.length > 0 ? `===Starship Technology Merchant===
${starshipTech.map((tech) => (`* [[${tech.value}]]\n`)).toString().replace(/,/g,'')}` : ''}
${exosuitTech.length > 0 ? `===Exosuit Technology Merchant===
${exosuitTech.map((tech) => (`* [[${tech.value}]]\n`)).toString().replace(/,/g,'')}` : ''}
${vehicleTech.length > 0 ? `===Vehicle Shop Merchant===
${vehicleTech.map((tech) => (`* [[${tech.value}]]\n`)).toString().replace(/,/g,'')}` : ''}
==Additional information==
${additionalInfo}

==Gallery==
${gallery.length > 0 ? `
<gallery>
${gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).toString().replace(/,/g,'')}
</gallery>
` : ''}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeTemplate);
    setCodeCopied(true);
    setTimeout(() => {
      setCodeCopied(false);
    }, 3000)
  };

  const renderGalleries = () => {
    return gallery.map((image, index) => (
      <li className={styles.galleryListItem} key={index}>
        <div className={styles.galleryImage} style={{ backgroundImage: `url(${image.preview})` }} />
        <Input frmItemClass='frmItemGallery' id={`gallery${index}`} type='text' label='Gallery Caption' onChange={(value) => {
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
      </li>
    ))
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
        <Input id='planet' type='number' min='2' max='6' label='Planet Amount' tooltip='The amount of planetary bodies in this system' onChange={(value) => setPlanet(value)} />
        <Input id='moon' type='number' min='0' max='4' label='Moon Amount' tooltip='The amount of lunar bodies in this system' onChange={(value) => setMoon(value)} />
        <Select id='water' label='Contains Water' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => setWater(value)} />
        <Select id='gateway' label='Gateway System' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => setGateway(value)} />
        <Select id='faction' label='System`s Faction' config={[
          { value: 'Gek', label :'Gek' },
          { value: 'Korvax', label :'Korvax' },
          { value: `Vy'keen`, label :`Vy'keen` },
          { value: 'Gek Abandoned', label :'Gek Abandoned' },
          { value: 'Korvax Abandoned', label :'Korvax Abandoned' },
          { value: `Vy'keen Abandoned`, label :`Vy'keen Abandoned` },
          { value: 'Uncharted', label :'Uncharted' }
        ]} onChange={(value) => setFaction(value)} />
        <Select id='economy' label='Economy Type' config={[
          { value: 'Mercantile', label: 'Mercantile' },
          { value: 'Trading', label: 'Trading' },
          { value: 'Shipping', label: 'Shipping' },
          { value: 'Commercial', label: 'Commercial' },
          { value: 'Material Fusion', label: 'Material Fusion' },
          { value: 'Alchemical', label: 'Alchemical' },
          { value: 'Metal Processing', label: 'Metal Processing' },
          { value: 'Ore Processing', label: 'Ore Processing' },
          { value: 'Research', label: 'Research' },
          { value: 'Scientific', label: 'Scientific' },
          { value: 'Experimental', label: 'Experimental' },
          { value: 'Mathematical', label: 'Mathematical' },
          { value: 'Mining', label: 'Mining' },
          { value: 'Minerals', label: 'Minerals' },
          { value: 'Ore Extraction', label: 'Ore Extraction' },
          { value: 'Prospecting', label: 'Prospecting' },
          { value: 'Manufacturing', label: 'Manufacturing' },
          { value: 'Industrial', label: 'Industrial' },
          { value: 'Construction', label: 'Construction' },
          { value: 'Mass Production', label: 'Mass Production' },
          { value: 'High Tech', label: 'High Tech' },
          { value: 'Technology', label: 'Technology' },
          { value: 'Nano-construction', label: 'Nano-construction' },
          { value: 'Engineering', label: 'Engineering' },
          { value: 'Power Generation', label: 'Power Generation' },
          { value: 'Energy Supply', label: 'Energy Supply' },
          { value: 'Fuel Generation', label: 'Fuel Generation' },
          { value: 'High Voltage', label: 'High Voltage' }
        ]} isSearchable onChange={(value) => setEconomy(value)} />
        <Input id='economybuy' type='text' label='Economy Buy Rate' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setEconomybuy(value)} />
        <Input id='economysell' type='text' label='Economy Sell Rate' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setEconomysell(value)} />
        <Select id='wealth' label='System`s Wealth' config={[
          { value: 'Declining', label: 'Declining' },
          { value: 'Destitute', label: 'Destitute' },
          { value: 'Failing', label: 'Failing' },
          { value: 'Fledgling', label: 'Fledgling' },
          { value: 'Low Supply', label: 'Low Supply' },
          { value: 'Struggling', label: 'Struggling' },
          { value: 'Unsuccessful', label: 'Unsuccessful' },
          { value: 'Unpromising', label: 'Unpromising' },
          { value: 'Adequate', label: 'Adequate' },
          { value: 'Balanced', label: 'Balanced' },
          { value: 'Comfortable', label: 'Comfortable' },
          { value: 'Developing', label: 'Developing' },
          { value: 'Medium Supply', label: 'Medium Supply' },
          { value: 'Promising', label: 'Promising' },
          { value: 'Satisfactory', label: 'Satisfactory' },
          { value: 'Sustainable', label: 'Sustainable' },
          { value: 'Advanced', label: 'Advanced' },
          { value: 'Affluent', label: 'Affluent' },
          { value: 'Booming', label: 'Booming' },
          { value: 'Flourishing', label: 'Flourishing' },
          { value: 'High Supply', label: 'High Supply' },
          { value: 'Opulent', label: 'Opulent' },
          { value: 'Prosperous', label: 'Prosperous' },
          { value: 'Wealthy', label: 'Wealthy' },
          { value: 'Black Market', label: 'Black Market' }
        ]} isSearchable onChange={(value) => setWealth(value)} />
        <Select id='conflict' label='System`s Conflict' config={[
          { value: 'Gentle', label: 'Gentle' },
          { value: 'Low', label: 'Low' },
          { value: 'Mild', label: 'Mild' },
          { value: 'Peaceful', label: 'Peaceful' },
          { value: 'Relaxed', label: 'Relaxed' },
          { value: 'Stable', label: 'Stable' },
          { value: 'Tranquil', label: 'Tranquil' },
          { value: 'Trivial', label: 'Trivial' },
          { value: 'Unthreatening', label: 'Unthreatening' },
          { value: 'Untroubled', label: 'Untroubled' },
          { value: 'Belligerent', label: 'Belligerent' },
          { value: 'Boisterous', label: 'Boisterous' },
          { value: 'Fractious', label: 'Fractious' },
          { value: 'Intermittent', label: 'Intermittent' },
          { value: 'Medium', label: 'Medium' },
          { value: 'Rowdy', label: 'Rowdy' },
          { value: 'Sporadic', label: 'Sporadic' },
          { value: 'Testy', label: 'Testy' },
          { value: 'Unruly', label: 'Unruly' },
          { value: 'Unstable', label: 'Unstable' },
          { value: 'Aggressive', label: 'Aggressive' },
          { value: 'Alarming', label: 'Alarming' },
          { value: 'At War', label: 'At War' },
          { value: 'Critical', label: 'Critical' },
          { value: 'Dangerous', label: 'Dangerous' },
          { value: 'Destructive', label: 'Destructive' },
          { value: 'Formidable', label: 'Formidable' },
          { value: 'High', label: 'High' },
          { value: 'Lawless', label: 'Lawless' },
          { value: 'Perilous', label: 'Perilous' },
          { value: 'Pirate Controlled', label: 'Pirate Controlled' }
        ]} isSearchable onChange={(value) => setConflict(value)} />
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
        <Dropzone label='Other Images for Gallery' maxFiles={20} onUpload={(photos) => setGallery(photos)} />
        {gallery.length > 0 &&
          <ul className={styles.galleryList}>
            {renderGalleries()}
          </ul>
        }
        <SelectMulti id='multitoolTech' label='Multi-tool S-class Upgrades Available' config={[
          { value: 'Scanner', label: 'Scanner' },
          { value: 'Mining Beam', label: 'Mining Beam' },
          { value: 'Boltcaster', label: 'Boltcaster' },
          { value: 'Blaze Javelin', label: 'Blaze Javelin' },
          { value: 'Pulse Spitter', label: 'Pulse Spitter' },
          { value: 'Scatter Blaster', label: 'Scatter Blaster' },
          { value: 'Plasma Launcher', label: 'Plasma Launcher' },
          { value: 'Geology Cannon', label: 'Geology Cannon' },
          { value: 'Neutron Cannon', label: 'Neutron Cannon' }
        ]} onChange={(items) => setMultitoolTech(items)} />
        <SelectMulti id='starshipTech' label='Starship S-class Upgrades Available' config={[
          { value: 'Launch Thruster', label: 'Launch Thruster' },
          { value: 'Pulse Engine', label: 'Pulse Engine' },
          { value: 'Deflector Shield', label: 'Deflector Shield' },
          { value: 'Hyperdrive', label: 'Hyperdrive' },
          { value: 'Photon Cannon', label: 'Photon Cannon' },
          { value: 'Phase Beam', label: 'Phase Beam' },
          { value: 'Positron', label: 'Positron' },
          { value: 'Infra-Knife', label: 'Infra-Knife' },
          { value: 'Cyclotron', label: 'Cyclotron' }
        ]} onChange={(items) => setStarshipTech(items)} />
        <SelectMulti id='exosuitTech' label='Exosuit S-class Upgrades Available' config={[
          { value: 'Life Support', label: 'Life Support' },
          { value: 'Movement', label: 'Movement' },
          { value: 'Defence Systems', label: 'Defence Systems' },
          { value: 'Toxic Protection Module', label: 'Toxic Protection Module' },
          { value: 'Radiation Protection Module', label: 'Radiation Protection Module' },
          { value: 'Thermal Protection Module (high temp)', label: 'Thermal Protection Module (high temp)' },
          { value: 'Thermal Protection Module (sub-zero)', label: 'Thermal Protection Module (sub-zero)' },
          { value: 'Underwater Protection Module', label: 'Underwater Protection Module' }
        ]} onChange={(items) => setExosuitTech(items)} />
        <SelectMulti id='vehicleTech' label='Vehicle S-class Upgrades Available' config={[
          { value: 'Fusion Engine', label: 'Fusion Engine' },
          { value: 'Exocraft Acceleration Module', label: 'Exocraft Acceleration Module' },
          { value: 'Exocraft Mining Laser', label: 'Exocraft Mining Laser' },
          { value: 'Exocraft Mounted Cannon', label: 'Exocraft Mounted Cannon' },
          { value: 'Minotaur Engine Upgrade', label: 'Minotaur Engine Upgrade' },
          { value: 'Minotaur Laser Upgrade', label: 'Minotaur Laser Upgrade' },
          { value: 'Minotaur Cannon Upgrade', label: 'Minotaur Cannon Upgrade' },
          { value: 'Humboldt Drive', label: 'Humboldt Drive' },
          { value: 'Nautilon Cannon', label: 'Nautilon Cannon' }
        ]} onChange={(items) => setVehicleTech(items)} />
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