import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import reducer from '../reducers';
import * as ga from '../lib/ga';
import useCopyToClipboard from '../hooks/copy-to-clipboard';
import planetTemplate from '../lib/code-templates/planet-template';
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

const initialState = {
  title: '',
  defaultTitle: '',
  image: '',
  galaxy: '',
  region: '',
  system: '',
  moon: '',
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
  planetType: '',
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
  moonsDetails: '',
  sentinelDetails: '',
  additionalInfo: '',
  gallery: [],
  faunaDetails: [],
  floraDetails: []
};

export default function Planet() {
  const myRef = useRef(null);
  const [codeCopied, handleCopy] = useCopyToClipboard();
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const codeTemplate = planetTemplate(data);

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
        <Input id='title' type='text' label='Planet/Moon Name' onChange={(value) => dispatch({ type: 'title', value })} />
        <Input id='defaultTitle' type='text' label='Original Procgen Name' onChange={(value) => dispatch({ type: 'defaultTitle', value })} />
        <Dropzone label='Planetary Surface Image' maxFiles={1} onUpload={(photos) => dispatch({ type: 'image', value: photos[0].name })} />
        <Input id='moon' type='text' label='Planet`s Moon' tooltip='Name(s) of the moon(s) orbiting this planet or number of orbiting moons. Leave blank if there are no moons.' onChange={(value) => dispatch({ type: 'moon', value })} />
        <Input id='system' type='text' label='System Name' onChange={(value) => dispatch({ type: 'system', value })} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'region', value })} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => dispatch({ type: 'galaxy', value })} />
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
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => dispatch({ type: 'civ', value })} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => dispatch({ type: 'discovered', value })} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => dispatch({ type: 'discoveredLink', value })} />
        <SelectGameMode onChange={(value) => dispatch({ type: 'mode', value })} />
        <Select id='bases' label='Are there, or will there be, bases on this planet?' config={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' }
        ]} onChange={(value) => dispatch({ type: 'bases', value })} />
      </div>
      <Textarea id='planetType' label='Planet Type' placeholder='Describe the planet`s surface (geology, grass and ocean colour, types of flora and fauna etc.)' onChange={(value) => dispatch({ type: 'planetType', value })} />
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
              <Input id='daytemp' type='number' label='Daytime' onChange={(value) => dispatch({ type: 'daytemp', value })} />
              <Input id='nighttemp' type='number' label='Nighttime' onChange={(value) => dispatch({ type: 'nighttemp', value })} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='radnorm' type='number' label='Radiation' onChange={(value) => dispatch({ type: 'radnorm', value })} />
              <Input id='toxicnorm' type='number' label='Toxicity' onChange={(value) => dispatch({ type: 'toxicnorm', value })} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='daystormtemp' type='number' label='Daytime Storm' onChange={(value) => dispatch({ type: 'daystormtemp', value })} />
              <Input id='nightstormtemp' type='number' label='Nighttime Storm' onChange={(value) => dispatch({ type: 'nightstormtemp', value })} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='radstorm' type='number' label='Radiation Storm' onChange={(value) => dispatch({ type: 'radstorm', value })} />
              <Input id='toxicstorm' type='number' label='Toxicity Storm' onChange={(value) => dispatch({ type: 'toxicstorm', value })} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='daycavetemp' type='number' label='Daytime' onChange={(value) => dispatch({ type: 'daycavetemp', value })} />
              <Input id='nightcavetemp' type='number' label='Nighttime' onChange={(value) => dispatch({ type: 'nightcavetemp', value })} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='daystormcavetemp' type='number' label='Radiation' onChange={(value) => dispatch({ type: 'daystormcavetemp', value })} />
              <Input id='nightstormcavetemp' type='number' label='Toxicity' onChange={(value) => dispatch({ type: 'nightstormcavetemp', value })} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='radcave' type='number' label='Daytime Storm' onChange={(value) => dispatch({ type: 'radcave', value })} />
              <Input id='toxiccave' type='number' label='Nighttime Storm' onChange={(value) => dispatch({ type: 'toxiccave', value })} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='cavestormrad' type='number' label='Radiation Storm' onChange={(value) => dispatch({ type: 'cavestormrad', value })} />
              <Input id='cavestormtoxic' type='number' label='Toxicity Storm' onChange={(value) => dispatch({ type: 'cavestormtoxic', value })} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='daywatertemp' type='number' label='Daytime' onChange={(value) => dispatch({ type: 'daywatertemp', value })} />
              <Input id='nightwatertemp' type='number' label='Nighttime' onChange={(value) => dispatch({ type: 'nightwatertemp', value })} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='waterrad' type='number' label='Radiation' onChange={(value) => dispatch({ type: 'waterrad', value })} />
              <Input id='watertoxic' type='number' label='Toxicity' onChange={(value) => dispatch({ type: 'watertoxic', value })} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='daystormwatertemp' type='number' label='Daytime Storm' onChange={(value) => dispatch({ type: 'daystormwatertemp', value })} />
              <Input id='nightstormwatertemp' type='number' label='Nighttime Storm' onChange={(value) => dispatch({ type: 'nightstormwatertemp', value })} />
            </div>
            <div className='frmGroup50 frmItem'>
              <Input id='waterstormrad' type='number' label='Radiation Storm' onChange={(value) => dispatch({ type: 'waterstormrad', value })} />
              <Input id='waterstormtoxic' type='number' label='Toxicity Storm' onChange={(value) => dispatch({ type: 'waterstormtoxic', value })} />
            </div>
          </div>
        </>
      }
      <Glyphs
        noCoords
        changeGlyphs={(value) => dispatch({ type: 'glyphs', value })}
      />
      <Textarea id='moons' label='Moons' placeholder='Does this planet have any moons? Leave blank if none.' onChange={(value) => dispatch({ type: 'moons', value })} />
      <FaunaDetails
        details={data.faunaDetails}
        onChange={(index, key, value) => dispatch({ type: 'changeObjInArray', id: 'faunaDetails', value, index, key })}
        deleteFauna={(value) => dispatch({ type: 'deleteItemFromArray', id: 'faunaDetails', value })}
        addFauna={(value) => dispatch({ type: 'addItemToArray', id: 'faunaDetails', value })}
      />
      <FloraDetails
        details={data.floraDetails}
        onChange={(index, key, value) => dispatch({ type: 'changeObjInArray', id: 'floraDetails', value, index, key })}
        deleteFlora={(value) => dispatch({ type: 'deleteItemFromArray', id: 'floraDetails', value })}
        addFlora={(value) => dispatch({ type: 'addItemToArray', id: 'floraDetails', value })}
      />
      <Textarea id='sentinelDetails' label='Sentinels' placeholder='Describe the Sentinels behaviour.' onChange={(value) => dispatch({ type: 'sentinelDetails', value })} />
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Anything special to note about the planet.' onChange={(value) => dispatch({ type: 'additionalInfo', value })} />
      <div className='frmGroup50'>
        <Gallery
          gallery={data.gallery}
          onUpload={(photos) => dispatch({ type: 'gallery.upload', value: photos })}
          onChange={(value, index) => dispatch({ type: 'gallery.caption', value, index })}
        />
      </div>
      <div className={styles.btnContainer}>
        <button type='button' className={`btn ${styles.btn}`} onClick={() => {
          myRef.current.scrollIntoView();
          setViewCode(true);
          ga.event('click', 'View Planet Code', window.innerWidth < 800 ? 'Popup' : 'ScrollTo');
        }}>
          View Code
        </button>
        <button type='button' className={`btn ${styles.btn}`} onClick={() => {
          handleCopy(codeTemplate);
          ga.event('click', 'Copy Planet', data.civ);
        }}>
          {codeCopied ? 'Code Copied' : 'Copy Code'}
        </button>
        <a href={`https://nomanssky.fandom.com/wiki/${data.title.replace(/ /g,'_')}?action=edit`}
          className={`btn whiteBtn ${styles.btn}`}
          target='_blank'
          rel='noreferrer'
          onClick={() => ga.event('click', 'Create Planet', data.civ)}>
          Create Page
        </a>
      </div>
      <CreateCategory type='planet' title={data.title} parentTitle={data.system} />
    </CodeView>
  );
}