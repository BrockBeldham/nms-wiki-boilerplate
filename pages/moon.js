import { useState, useRef } from 'react';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Glyphs from '../components/glyphs';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import SelectMulti from '../components/select-multi';
import Textarea from '../components/textarea';
import SelectGameMode from '../components/select-game-mode';
import FaunaDetails from '../components/planet/fauna-details';
import FloraDetails from '../components/planet/flora-details';
import Gallery from '../components/gallery';
import planetBiome from '../lib/select-data/planet-biome';
import planetDescription from '../lib/select-data/planet-description';
import planetWeather from '../lib/select-data/planet-weather';
import planetResources from '../lib/select-data/planet-resources';

import styles from '../styles/pages/planet.module.scss';

export default function System() {
  const faunaDefault = {
    image: '',
    name: '',
    ecosystem: '',
    genus: '',
    height: '',
    weight: '',
    discovered: '',
    description: ''
  };
  const floraDefault = {
    image: '',
    name: '',
    age: '',
    roots: '',
    nutrients: '',
    elements: '',
    discovered: '',
    description: ''
  };

  const myRef = useRef(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [viewCode, setViewCode] = useState(false);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [galaxy, setGalaxy] = useState('');
  const [region, setRegion] = useState('');
  const [system, setSystem] = useState('');
  const [planet, setPlanet] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [atmosphere, setAtmosphere] = useState('');
  const [terrain, setTerrain] = useState('');
  const [weather, setWeather] = useState('');
  const [resources, setResources] = useState([]);
  const [sentinels, setSentinels] = useState('');
  const [flora, setFlora] = useState('');
  const [fauna, setFauna] = useState('');
  const [garden, setGarden] = useState('');
  const [civ, setCiv] = useState('');
  const [mode, setMode] = useState('');
  const [discovered, setDiscovered] = useState('');
  const [discoveredLink, setDiscoveredLink] = useState('');
  const [defaultTitle, setDefaultTitle] = useState('');
  const [moonType, setMoonType] = useState('');
  const [glyphs, setGlyphs] = useState('');
  const [sentinelDetails, setSentinelDetails] = useState('');
  const [gallery, setGallery] = useState([]);
  const [faunaDetails, setFaunaDetails] = useState([faunaDefault]);
  const [floraDetails, setFloraDetails] = useState([floraDefault]);

  const renderFauna = () => {
    if (floraDetails.length === 1
      && !floraDetails.image
      && !floraDetails.name
      && !floraDetails.ecosystem
      && !floraDetails.genus
      && !floraDetails.height
      && !floraDetails.weight
      && !floraDetails.discovered
      && !floraDetails.description) {
      return `Fauna has not been logged at this time.`
    } else {
      return `
{| class="article-table" style="width:100%; max-width: 1000px;"
! width="150px" | Image !! Name !! Ecosystem !! Genus !! Height !! Weight !! Discovered !! Brief description
${floraDetails.map((f) => (`
|-
| [[File:${f.image}|150px]]
| '''${f.name}'''
| ${f.ecosystem}
| ${f.genus}
| ${f.height}
| ${f.weight}
| ${f.discovered}
| ${f.description}`)).join('')}
|}
`;
    }
  }

  const renderFlora = () => {
    if (floraDetails.length === 1
      && !floraDetails.image
      && !floraDetails.name
      && !floraDetails.age
      && !floraDetails.roots
      && !floraDetails.nutrients
      && !floraDetails.elements
      && !floraDetails.discovered
      && !floraDetails.description) {
      return `Flora has not been logged at this time.`
    } else {
      return `
{| class="article-table" style="width:100%; max-width: 1000px;"
! width="150px" | Image !! Name !! Age !! Root Structure !! Nutrient Source !! Elements !! Discovered !! Brief description
${floraDetails.map((f) => (`
|-
| [[File:${f.image}|150px]]
| '''${f.name}'''
| ${f.age}
| ${f.roots}
| ${f.nutrients}
| ${f.elements}
| ${f.discovered}
| ${f.description}`)).join('')}
|}`;
    }
  }

  const codeTemplate = `{{Version|Endurance}}
{{Moon infobox
| name = ${title}
| image = ${image}
| planet = ${planet}
| system = ${system}
| region = ${region}
| galaxy = ${galaxy}
| description = ${description}
| type = ${type}
| atmosphere = ${atmosphere}
| terrain = ${terrain}
| weather = ${weather}
| resources = ${resources.map((resource) => resource.value).join('')}
| sentinel = ${sentinels}
| flora = ${flora}
| fauna = ${fauna}
| garden = ${garden.value === 'Yes' ? 'Yes' : ''}
| civilized = ${civ || 'No Man\'s High Hub'}
| discovered = ${discoveredLink ? '' : discovered}
| discoveredlink = ${discoveredLink}
| mode = ${mode}
| release = Endurance
}}
'''${title}''' is a planet in No Man's Sky.

==Summary==
'''${title}''' is a [[planet]] in the [[star system]] [[${system}]].

==Alias names==
{{aliasc|text=Original|name=${defaultTitle}}}
{{aliasc|text=Current|name=${title}}}

==Moon type==
${moonType}

==Location information==
===Glyphs===
{{Gl|${glyphs}}}

==Notable locations / Waypoints==
Notable Bases include:

{{CARGOBasesPlanet|${title}}}
  
==Life==
===Fauna===
${renderFauna()}
  
===Flora===
${renderFlora()}
  
==Sentinels==
${sentinelDetails}

==Resources==
${resources.length > 0 ? `
The following resources can be found on this planet:
${resources.map((resource) => `* {{Resource2icon|${resource.value}}} [[${resource.value}]]\n`).join('')}
` : ''}

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
      title='Create A Planet'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Planet/Moon Name' onChange={(value) => setTitle(value)} />
        <Input id='defaultTitle' type='text' label='Original Procgen Name' onChange={(value) => setDefaultTitle(value)} />
        <Dropzone label='Planetary Surface Image' maxFiles={1} onUpload={(photos) => setImage(photos[0].name)} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => setGalaxy(value)} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setRegion(value)} />
        <Input id='system' type='text' label='System Name' onChange={(value) => setSystem(value)} />
        <Input id='planet' type='text' label='Moon`s Planet' tooltip='The name of the planet this moon orbits.' onChange={(value) => setPlanet(value)} />
        <Select id='description' label='Planet`s Description' config={planetDescription} isSearchable onChange={(value) => setDescription(value)} />
        <Select id='type' label='Planet`s Biome Type' config={planetBiome} isSearchable onChange={(value) => setType(value)} />
        <Input id='atmosphere' type='text' label='Atmosphere Make-up' onChange={(value) => setAtmosphere(value)} />
        <Input id='terrain' type='text' label='Terrain' onChange={(value) => setTerrain(value)} />
        <Select id='weather' label='Weather' config={planetWeather} isSearchable onChange={(value) => setWeather(value)} />
        <SelectMulti id='resources' label='Resources' config={planetResources} isSearchable onChange={(items) => setResources(items)} />
        <Input id='sentinels' type='text' label='Sentinels' onChange={(value) => setSentinels(value)} />
        <Input id='flora' type='text' label='Flora' onChange={(value) => setFlora(value)} />
        <Input id='fauna' type='text' label='Fauna' onChange={(value) => setFauna(value)} />
        <Select id='garden' label='Garden World' config={[
          { label: 'Yes', value: 'Yes'},
          { label: 'No', value: 'No' }
        ]} tooltip='See https://nomanssky.fandom.com/wiki/Garden_World for official definition.' onChange={(value) => setGarden(value)} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => setCiv(value)} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => setDiscovered(value)} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => setDiscoveredLink(value)} />
        <SelectGameMode onChange={(value) => setMode(value)} />
      </div>
      <Textarea id='moonType' label='Moon Type' placeholder='Describe the moon`s surface (geology, grass and ocean colour, types of flora and fauna etc.)' onChange={(value) => setMoonType(value)} />
      <Input id='glyphs' type='text' label='Planetary Glyphs' tooltip='Found in screenshot mode. Glyphs are specific to each planet.' defaultValue={glyphs} onChange={(value) => setGlyphs(value)} />
      <Glyphs onChange={(value) => setGlyphs(glyphs + value)} />
      <FaunaDetails details={faunaDetails} onChange={(index, key, value) => {
        setFaunaDetails((prevState) => (prevState.map((f, prevIndex) => {
          if (index === prevIndex) {
            return { ...f, [key]: value };
          }

          return f;
        })));
      }} deleteFauna={(id) => {
        const filterFauna = faunaDetails.filter((_item, index) => (index !== id));
        setFaunaDetails(filterFauna);
      }} />
      <button type='button' className={`btn ${styles.btn}`} onClick={() => setFaunaDetails([
        ...faunaDetails,
        faunaDefault
      ])}>
        Add Creature
      </button>
      <FloraDetails details={floraDetails} onChange={(index, key, value) => {
        setFloraDetails((prevState) => (prevState.map((f, prevIndex) => {
          if (index === prevIndex) {
            return { ...f, [key]: value };
          }

          return f;
        })));
      }} deleteFlora={(id) => {
        const filterFlora = floraDetails.filter((_item, index) => (index !== id));
        setFloraDetails(filterFlora);
      }} />
      <button type='button' className={`btn ${styles.btn}`} onClick={() => setFloraDetails([
        ...floraDetails,
        floraDefault
      ])}>
        Add Plant
      </button>
      <Textarea id='moons' label='Sentinels' placeholder='Describe the Sentinels behaviour.' onChange={(value) => setSentinelDetails(value)} />
      <div className='frmGroup50'>
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
      </div>
      <div className='btnContainer'>
        <button type='button' className={`btn ${styles.btn}`} onClick={() => {
          myRef.current.scrollIntoView();
          setViewCode(true);
        }}>
          View Code
        </button>
        <button type='button' className={`btn ${styles.btn}`} onClick={() => copyToClipboard()}>
          {codeCopied ? 'Code Copied' : 'Copy Code'}
        </button>
        <a href={`https://nomanssky.fandom.com/wiki/${title.replace(/ /g,"_")}?action=edit`} className={`btn whiteBtn ${styles.btn}`} target='_blank' rel='noreferrer'>
          Create Page
        </a>
      </div>
    </CodeView>
  );
}