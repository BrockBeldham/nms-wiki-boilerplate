import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import * as ga from '../lib/ga';
import reducer from '../reducers';
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

let initialState = {
  title: '',
  defaultTitle: '',
  image: '',
  galaxy: '',
  region: '',
  system: '',
  planet: '',
  description: '',
  type: '',
  atmosphere: '',
  terrain: '',
  weather: '',
  resources: [],
  sentinels: '',
  flora: '',
  fauna: '',
  garden: '',
  civ: '',
  mode: '',
  discovered: '',
  discoveredLink: '',
  bases: '',
  moonType: '',
  temp: '',
  tempUnit: '',
  daytemp: '',
  nighttemp: '',
  radnorm: '',
  toxicnorm: '',
  daystormtemp: '',
  nightstormtemp: '',
  radstorm: '',
  toxicstorm: '',
  daycavetemp: '',
  nightcavetemp: '',
  daystormcavetemp: '',
  nightstormcavetemp: '',
  radcave: '',
  toxiccave: '',
  cavestormrad: '',
  cavestormtoxic: '',
  daywatertemp: '',
  nightwatertemp: '',
  waterrad: '',
  watertoxic: '',
  daystormwatertemp: '',
  nightstormwatertemp: '',
  waterstormrad: '',
  waterstormtoxic: '',
  glyphs: '',
  sentinelDetails: '',
  additionalInfo: '',
  gallery: [],
  faunaDetails: [faunaDefault],
  floraDetails: [floraDefault]
};

export default function System() {
  const myRef = useRef(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const renderFauna = () => {
    if (data.faunaDetails.length === 1
      && !data.faunaDetails.image
      && !data.faunaDetails.name
      && !data.faunaDetails.ecosystem
      && !data.faunaDetails.genus
      && !data.faunaDetails.height
      && !data.faunaDetails.weight
      && !data.faunaDetails.discovered
      && !data.faunaDetails.description) {
      return 'Fauna has not been logged at this time.';
    } else {
      return `
{| class="article-table" style="width:100%; max-width: 1000px;"
! width="150px" | Image !! Name !! Ecosystem !! Genus !! Height !! Weight !! Discovered !! Brief description
${data.faunaDetails.map((f) => (`
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
    if (data.floraDetails.length === 1
      && !data.floraDetails.image
      && !data.floraDetails.name
      && !data.floraDetails.age
      && !data.floraDetails.roots
      && !data.floraDetails.nutrients
      && !data.floraDetails.elements
      && !data.floraDetails.discovered
      && !data.floraDetails.description) {
      return 'Flora has not been logged at this time.';
    } else {
      return `
{| class="article-table" style="width:100%; max-width: 1000px;"
! width="150px" | Image !! Name !! Age !! Root Structure !! Nutrient Source !! Elements !! Discovered !! Brief description
${data.floraDetails.map((f) => (`
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
{{Moon infobox
| name = ${data.title}
| image = ${data.image || 'nmsMisc_NotAvailable.png'}
| planet = ${data.planet}
| system = ${data.system}
| region = ${data.region}
| galaxy = ${data.galaxy}
| description = ${data.description}
| type = ${data.type}
| atmosphere = ${data.atmosphere}
| terrain = ${data.terrain}
| weather = ${data.weather}
| resources = ${data.resources.map((resource) => resource.value).join(', ')}
| sentinel = ${data.sentinels}
| flora = ${data.flora}
| fauna = ${data.fauna}
| garden = ${data.garden.value === 'Yes' ? 'Yes' : ''}
| civilized = ${data.civ || 'No Man\'s High Hub'}
| discovered = ${data.discoveredLink ? '' : data.discovered}
| discoveredlink = ${data.discoveredLink}
| mode = ${data.mode}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${data.title}''' is a moon.

==Summary==
'''${data.title}''' is a [[moon]] in the [[${data.system}]] [[star system]].

It orbits the planet [[${data.planet}]].

==Alias Names==
${data.defaultTitle ? `{{aliasc|text=Original|name=${data.defaultTitle}}}\n` : ''}{{aliasc|text=Current|name=${data.title}}}

==Moon Type==
${data.moonType}

${data.temp === 'Yes' ?
`===Environment Conditions===
The surface has ${data.weather} weather conditions.

{{PlanetWeather
|tunit=${data.tempUnit}
|daytemp=${data.daytemp}
|nighttemp=${data.nighttemp}
|radnorm=${data.radnorm}
|toxicnorm=${data.toxicnorm}
|daystormtemp=${data.daystormtemp}
|nightstormtemp=${data.nightstormtemp}
|radstorm=${data.radstorm}
|toxicstorm=${data.toxicstorm}
|daycavetemp=${data.daycavetemp}
|nightcavetemp=${data.nightcavetemp}
|daystormcavetemp=${data.daystormcavetemp}
|nightstormcavetemp=${data.nightstormcavetemp}
|radcave=${data.radcave}
|toxiccave=${data.toxiccave}
|cavestormrad=${data.cavestormrad}
|cavestormtoxic=${data.cavestormtoxic}
|daywatertemp=${data.daywatertemp}
|nightwatertemp=${data.nightwatertemp}
|waterrad=${data.waterrad}
|watertoxic=${data.watertoxic}
|daystormwatertemp=${data.daystormwatertemp}
|nightstormwatertemp=${data.nightstormwatertemp}
|waterstormrad=${data.waterstormrad}
|waterstormtoxic=${data.waterstormtoxic}
}}` : ''}

==Moon Glyphs==
{{Gl|${data.glyphs}}}

==Notable Locations / Waypoints==
${data.bases ? (`Notable Bases include:

{{CARGOBasesPlanet|${data.title}}}`) : ''}
  
==Life==
===Fauna===
${renderFauna()}
  
===Flora===
${renderFlora()}
  
==Sentinels==
${data.sentinelDetails}

==Resources==
${data.resources.length > 0 ? `The following resources can be found on this planet:
${data.resources.map((resource) => `* {{Resource2icon|${resource.value}}} [[${resource.value}]]\n`).join('')}` : ''}
==Additional Information==
${data.additionalInfo}

==Gallery==
${data.gallery.length > 0 ? `<gallery>
${data.gallery.map((image) => {
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
        <title>New Moon | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new moon. Create a new moon page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Planet/Moon Name' onChange={(value) => dispatch({ type: 'title', value })} />
        <Input id='defaultTitle' type='text' label='Original Procgen Name' onChange={(value) => dispatch({ type: 'defaultTitle', value })} />
        <Dropzone label='Planetary Surface Image' maxFiles={1} onUpload={(photos) => dispatch({ type: 'image', value: photos[0].name })} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => dispatch({ type: 'galaxy', value })} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'region', value })} />
        <Input id='system' type='text' label='System Name' onChange={(value) => dispatch({ type: 'system', value })} />
        <Input id='planet' type='text' label='Moon`s Planet' tooltip='The name of the planet this moon orbits.' onChange={(value) => dispatch({ type: 'planet', value })} />
        <Select id='description' label='Planet`s Description' config={planetDescription} isSearchable onChange={(value) => dispatch({ type: 'description', value })} />
        <Select id='type' label='Planet`s Biome Type' config={planetBiome} isSearchable onChange={(value) => dispatch({ type: 'type', value })} />
        <Input id='atmosphere' type='text' label='Atmosphere Make-up' onChange={(value) => dispatch({ type: 'atmosphere', value })} />
        <Input id='terrain' type='text' label='Terrain' onChange={(value) => dispatch({ type: 'terrain', value })} />
        <Select id='weather' label='Weather' config={planetWeather} isSearchable onChange={(value) => dispatch({ type: 'weather', value })} />
        <SelectMulti id='resources' label='Resources' config={planetResources} isSearchable onChange={(items) => dispatch({ type: 'resources', value: items })} />
        <Select id='sentinels' label='Sentinels' config={planetSentinels} isSearchable onChange={(items) => dispatch({ type: 'sentinels', value: items })} />
        <Select id='flora' label='Flora' config={planetFloraFauna} isSearchable onChange={(items) => dispatch({ type: 'flora', value: items })} />
        <Select id='fauna' label='Fauna' config={planetFloraFauna} isSearchable onChange={(items) => dispatch({ type: 'fauna', value: items })} />
        <Select id='garden' label='Garden World' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} tooltip='See https://nomanssky.fandom.com/wiki/Garden_World for official definition.' onChange={(value) => dispatch({ type: 'garden', value })} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => dispatch({ type: 'civilized', value })} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => dispatch({ type: 'discovered', value })} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => dispatch({ type: 'discoveredLink', value })} />
        <SelectGameMode onChange={(value) => dispatch({ type: 'mode', value })} />
        <Select id='bases' label='Are there, or will there be, bases on this planet?' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} onChange={(value) => dispatch({ type: '', value })} />
      </div>
      <Textarea id='moonType' label='Moon Type' placeholder='Describe the moon`s surface (geology, grass and ocean colour, types of flora and fauna etc.)' onChange={(value) => dispatch({ type: '', value })} />
      <div className='frmGroup50'>
        <Select id='temp' label='Include surface temperatures?' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} onChange={(value) => dispatch({ type: 'temp', value })} />
        {data.temp === 'Yes' &&
          <Select id='tempUnit' label='Temperature Units' config={[
            { label: 'C', value: 'C' },
            { label: 'F', value: 'F' }
          ]} onChange={(value) => dispatch({ type: 'tempUnit', value })} />
        }
      </div>
      {data.temp === 'Yes' &&
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
      <CreateCategory type='moon' title={title} parentTitle={planet} />
    </CodeView>
  );
}