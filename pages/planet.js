import { useState, useRef } from 'react';
import Head from 'next/head';
import * as ga from '../lib/ga';
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
import CreateCategory from '../components/create-category';
import planetBiome from '../lib/select-data/planet-biome';
import planetDescription from '../lib/select-data/planet-description';
import planetWeather from '../lib/select-data/planet-weather';
import planetSentinels from '../lib/select-data/planet-sentinels';
import planetFloraFauna from '../lib/select-data/planet-flora-fauna';
import planetResources from '../lib/select-data/planet-resources';

import styles from '../styles/forms.module.scss';

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
  const [defaultTitle, setDefaultTitle] = useState('');
  const [image, setImage] = useState('');
  const [galaxy, setGalaxy] = useState('');
  const [region, setRegion] = useState('');
  const [system, setSystem] = useState('');
  const [moon, setMoon] = useState('');
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
  const [bases, setBases] = useState('');
  const [planetType, setPlanetType] = useState('');
  const [temp, setTemp] = useState('');
  const [tempUnit, setTempUnit] = useState('');
  const [daytemp, setDaytemp] = useState('');
  const [nighttemp, setNighttemp] = useState('');
  const [radnorm, setRadnorm] = useState('');
  const [toxicnorm, setToxicnorm] = useState('');
  const [daystormtemp, setDaystormtemp] = useState('');
  const [nightstormtemp, setNightstormtemp] = useState('');
  const [radstorm, setRadstorm] = useState('');
  const [toxicstorm, setToxicstorm] = useState('');
  const [daycavetemp, setDaycavetemp] = useState('');
  const [nightcavetemp, setNightcavetemp] = useState('');
  const [daystormcavetemp, setDaystormcavetemp] = useState('');
  const [nightstormcavetemp, setNightstormcavetemp] = useState('');
  const [radcave, setRadcavetemp] = useState('');
  const [toxiccave, setToxiccavetemp] = useState('');
  const [cavestormrad, setCavestormrad] = useState('');
  const [cavestormtoxic, setCavestormtoxic] = useState('');
  const [daywatertemp, setDaywatertemp] = useState('');
  const [nightwatertemp, setNightwatertemp] = useState('');
  const [waterrad, setWaterrad] = useState('');
  const [watertoxic, setWatertoxic] = useState('');
  const [daystormwatertemp, setDaystormwatertemp] = useState('');
  const [nightstormwatertemp, setNightstormwatertemp] = useState('');
  const [waterstormrad, setWaterstormrad] = useState('');
  const [waterstormtoxic, setWaterstormtoxic] = useState('');
  const [glyphs, setGlyphs] = useState('');
  const [moonsDetails, setMoonsDetails] = useState('');
  const [sentinelDetails, setSentinelDetails] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [gallery, setGallery] = useState([]);
  const [faunaDetails, setFaunaDetails] = useState([faunaDefault]);
  const [floraDetails, setFloraDetails] = useState([floraDefault]);

  const renderFauna = () => {
    if (faunaDetails.length === 1
      && !faunaDetails.image
      && !faunaDetails.name
      && !faunaDetails.ecosystem
      && !faunaDetails.genus
      && !faunaDetails.height
      && !faunaDetails.weight
      && !faunaDetails.discovered
      && !faunaDetails.description) {
      return 'Fauna has not been logged at this time.';
    } else {
      return `
{| class="article-table" style="width:100%; max-width: 1000px;"
! width="150px" | Image !! Name !! Ecosystem !! Genus !! Height !! Weight !! Discovered !! Brief description
${faunaDetails.map((f) => (`
|-
| [[File:${f.image || 'nmsMisc_NotAvailable.png'}|150px]]
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
  };

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
      return 'Flora has not been logged at this time.';
    } else {
      return `
{| class="article-table" style="width:100%; max-width: 1000px;"
! width="150px" | Image !! Name !! Age !! Root Structure !! Nutrient Source !! Elements !! Discovered !! Brief description
${floraDetails.map((f) => (`
|-
| [[File:${f.image || 'nmsMisc_NotAvailable.png'}|150px]]
| '''${f.name}'''
| ${f.age}
| ${f.roots}
| ${f.nutrients}
| ${f.elements}
| ${f.discovered}
| ${f.description}`)).join('')}
|}`;
    }
  };

  const codeTemplate = `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Planet infobox
| name = ${title}
| image = ${image || 'nmsMisc_NotAvailable.png'}
| moon = ${moon}
| system = ${system}
| region = ${region}
| galaxy = ${galaxy}
| description = ${description}
| type = ${type}
| atmosphere = ${atmosphere}
| terrain = ${terrain}
| weather = ${weather}
| resources = ${resources.map((resource) => resource.value).join(', ')}
| sentinel = ${sentinels}
| flora = ${flora}
| fauna = ${fauna}
| garden = ${garden.value === 'Yes' ? 'Yes' : ''}
| civilized = ${civ || 'No Man\'s High Hub'}
| discovered = ${discoveredLink ? '' : discovered}
| discoveredlink = ${discoveredLink}
| mode = ${mode}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${title}''' is a planet.

==Summary==
'''${title}''' is a [[planet]] in the [[${system}]] [[star system]].

==Alias Names==
${defaultTitle ? `{{aliasc|text=Original|name=${defaultTitle}}}\n` : ''}{{aliasc|text=Current|name=${title}}}

==Planet Type==
${planetType}

${temp === 'Yes' ?
`===Environment Conditions===
The surface has ${weather} weather conditions.

{{PlanetWeather
|tunit=${tempUnit}
|daytemp=${daytemp}
|nighttemp=${nighttemp}
|radnorm=${radnorm}
|toxicnorm=${toxicnorm}
|daystormtemp=${daystormtemp}
|nightstormtemp=${nightstormtemp}
|radstorm=${radstorm}
|toxicstorm=${toxicstorm}
|daycavetemp=${daycavetemp}
|nightcavetemp=${nightcavetemp}
|daystormcavetemp=${daystormcavetemp}
|nightstormcavetemp=${nightstormcavetemp}
|radcave=${radcave}
|toxiccave=${toxiccave}
|cavestormrad=${cavestormrad}
|cavestormtoxic=${cavestormtoxic}
|daywatertemp=${daywatertemp}
|nightwatertemp=${nightwatertemp}
|waterrad=${waterrad}
|watertoxic=${watertoxic}
|daystormwatertemp=${daystormwatertemp}
|nightstormwatertemp=${nightstormwatertemp}
|waterstormrad=${waterstormrad}
|waterstormtoxic=${waterstormtoxic}
}}` : ''}

===Moons===
${moonsDetails ? moonsDetails : `${title} is not orbited by any moons.`}

==Planet Glyphs==
{{Gl|${glyphs}}}

==Notable Locations / Waypoints==
${bases ? (`Notable Bases include:

{{CARGOBasesPlanet|${title}}}`) : ''}
  
==Life==
===Fauna===
${renderFauna()}
  
===Flora===
${renderFlora()}
  
==Sentinels==
${sentinelDetails}

==Resources==
${resources.length > 0 ? `The following resources can be found on this planet:
${resources.map((resource) => `* {{Resource2icon|${resource.value}}} [[${resource.value}]]\n`).join('')}` : ''}
==Additional Information==
${additionalInfo}

==Gallery==
${gallery.length > 0 ? `<gallery>
${gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).join('')}</gallery>` : ''}`;

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
      title='Create A Planet'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <Head>
        <title>New Planet | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new planet. Create a new planet page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Planet/Moon Name' onChange={(value) => setTitle(value)} />
        <Input id='defaultTitle' type='text' label='Original Procgen Name' onChange={(value) => setDefaultTitle(value)} />
        <Dropzone label='Planetary Surface Image' maxFiles={1} onUpload={(photos) => setImage(photos[0].name)} />
        <Input id='moon' type='text' label='Planet`s Moon' tooltip='Name(s) of the moon(s) orbiting this planet or number of orbiting moons. Leave blank if there are no moons.' onChange={(value) => setMoon(value)} />
        <Input id='system' type='text' label='System Name' onChange={(value) => setSystem(value)} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setRegion(value)} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => setGalaxy(value)} />
        <Select id='description' label='Planet`s Description' config={planetDescription} isSearchable onChange={(value) => setDescription(value)} />
        <Select id='type' label='Planet`s Biome Type' config={planetBiome} isSearchable onChange={(value) => setType(value)} />
        <Input id='atmosphere' type='text' label='Atmosphere Make-up' onChange={(value) => setAtmosphere(value)} />
        <Input id='terrain' type='text' label='Terrain' onChange={(value) => setTerrain(value)} />
        <Select id='weather' label='Weather' config={planetWeather} isSearchable onChange={(value) => setWeather(value)} />
        <SelectMulti id='resources' label='Resources' config={planetResources} isSearchable onChange={(items) => setResources(items)} />
        <Select id='sentinels' label='Sentinels' config={planetSentinels} isSearchable onChange={(items) => setSentinels(items)} />
        <Select id='flora' label='Flora' config={planetFloraFauna} isSearchable onChange={(items) => setFlora(items)} />
        <Select id='fauna' label='Fauna' config={planetFloraFauna} isSearchable onChange={(items) => setFauna(items)} />
        <Select id='garden' label='Garden World' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} tooltip='See https://nomanssky.fandom.com/wiki/Garden_World for official definition.' onChange={(value) => setGarden(value)} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => setCiv(value)} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => setDiscovered(value)} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => setDiscoveredLink(value)} />
        <SelectGameMode onChange={(value) => setMode(value)} />
        <Select id='bases' label='Are there, or will there be, bases on this planet?' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} onChange={(value) => setBases(value)} />
      </div>
      <Textarea id='planetType' label='Planet Type' placeholder='Describe the planet`s surface (geology, grass and ocean colour, types of flora and fauna etc.)' onChange={(value) => setPlanetType(value)} />
      <div className='frmGroup50'>
        <Select id='temp' label='Include surface temperatures?' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} onChange={(value) => setTemp(value)} />
        {temp === 'Yes' &&
          <Select id='tempUnit' label='Temperature Units' config={[
            { label: 'C', value: 'C' },
            { label: 'F', value: 'F' }
          ]} onChange={(value) => setTempUnit(value)} />
        }
      </div>
      {temp === 'Yes' &&
        <>
          <h2 className={styles.heading}>Environmental Conditions</h2>
          <div className='frmGroup50'>
            <div className='frmGroup50 frmItem'>
              <Input id='daytemp' type='number' label='Daytime' onChange={(value) => setDaytemp(value)} />
              <Input id='nighttemp' type='number' label='Nighttime' onChange={(value) => setNighttemp(value)} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='radnorm' type='number' label='Radiation' onChange={(value) => setRadnorm(value)} />
              <Input id='toxicnorm' type='number' label='Toxicity' onChange={(value) => setToxicnorm(value)} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='daystormtemp' type='number' label='Daytime Storm' onChange={(value) => setDaystormtemp(value)} />
              <Input id='nightstormtemp' type='number' label='Nighttime Storm' onChange={(value) => setNightstormtemp(value)} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='radstorm' type='number' label='Radiation Storm' onChange={(value) => setRadstorm(value)} />
              <Input id='toxicstorm' type='number' label='Toxicity Storm' onChange={(value) => setToxicstorm(value)} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='daycavetemp' type='number' label='Daytime' onChange={(value) => setDaycavetemp(value)} />
              <Input id='nightcavetemp' type='number' label='Nighttime' onChange={(value) => setNightcavetemp(value)} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='daystormcavetemp' type='number' label='Radiation' onChange={(value) => setDaystormcavetemp(value)} />
              <Input id='nightstormcavetemp' type='number' label='Toxicity' onChange={(value) => setNightstormcavetemp(value)} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='radcave' type='number' label='Daytime Storm' onChange={(value) => setRadcavetemp(value)} />
              <Input id='toxiccave' type='number' label='Nighttime Storm' onChange={(value) => setToxiccavetemp(value)} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='cavestormrad' type='number' label='Radiation Storm' onChange={(value) => setCavestormrad(value)} />
              <Input id='cavestormtoxic' type='number' label='Toxicity Storm' onChange={(value) => setCavestormtoxic(value)} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='daywatertemp' type='number' label='Daytime' onChange={(value) => setDaywatertemp(value)} />
              <Input id='nightwatertemp' type='number' label='Nighttime' onChange={(value) => setNightwatertemp(value)} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='waterrad' type='number' label='Radiation' onChange={(value) => setWaterrad(value)} />
              <Input id='watertoxic' type='number' label='Toxicity' onChange={(value) => setWatertoxic(value)} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='daystormwatertemp' type='number' label='Daytime Storm' onChange={(value) => setDaystormwatertemp(value)} />
              <Input id='nightstormwatertemp' type='number' label='Nighttime Storm' onChange={(value) => setNightstormwatertemp(value)} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='waterstormrad' type='number' label='Radiation Storm' onChange={(value) => setWaterstormrad(value)} />
              <Input id='waterstormtoxic' type='number' label='Toxicity Storm' onChange={(value) => setWaterstormtoxic(value)} />
            </div>
          </div>
        </>
      }
      <Input id='glyphs' type='text' label='Planetary Glyphs' tooltip='Found in screenshot mode. Glyphs are specific to each planet.' defaultValue={glyphs} onChange={(value) => setGlyphs(value)} />
      <Glyphs onChange={(value) => setGlyphs(glyphs + value)} />
      <Textarea id='moons' label='Moons' placeholder='Does this planet have any moons? Leave blank if none.' onChange={(value) => setMoonsDetails(value)} />
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
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Anything special to note about the planet.' onChange={(value) => setAdditionalInfo(value)} />
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
      <div className={styles.btnContainer}>
        <button type='button' className={`btn ${styles.btn}`} onClick={() => {
          myRef.current.scrollIntoView();
          setViewCode(true);
          ga.buttonClick('View Code');
        }}>
          View Code
        </button>
        <button type='button' className={`btn ${styles.btn}`} onClick={() => {
          copyToClipboard();
          ga.buttonClick('Copy Code');
          ga.recordCiv(civ);
        }}>
          {codeCopied ? 'Code Copied' : 'Copy Code'}
        </button>
        <a href={`https://nomanssky.fandom.com/wiki/${title.replace(/ /g,'_')}?action=edit`}
          className={`btn whiteBtn ${styles.btn}`}
          target='_blank'
          rel='noreferrer'
          onClick={() => ga.buttonClick('Create Page')}>
          Create Page
        </a>
      </div>
      <CreateCategory type='planet' title={title} parentTitle={system} />
    </CodeView>
  );
}