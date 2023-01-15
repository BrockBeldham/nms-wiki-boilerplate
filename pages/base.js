import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import baseReducer from '../reducers/base';
import * as ga from '../lib/ga';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Glyphs from '../components/glyphs';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import Textarea from '../components/textarea';
import Gallery from '../components/gallery';
import CreateCategory from '../components/create-category';
import SelectFeatures from '../components/base/select-features';
import SelectGameMode from '../components/select-game-mode';
import SelectPlatform from '../components/select-platform';

import styles from '../styles/forms.module.scss';

const initialState = {
  title: '',
  image: '',
  civ: '',
  builder: '',
  builderLink: '',
  galaxy: '',
  region: '',
  system: '',
  planet: '',
  moon: '',
  axes: '',
  glyphs: '',
  coordinates: '',
  mode: '',
  platform: '',
  farm: '',
  geobay: '',
  arena: '',
  landingpad: '',
  racetrack: '',
  terminal: '',
  layout: '',
  features: [],
  additionalInfo: '',
  gallery: []
};

export default function Base() {
  const myRef = useRef(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(baseReducer, initialState);

  const codeTemplate = `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Base infobox
| name = ${data.title}
| image = ${data.image}
| civilized = ${data.civ || 'No Man\'s High Hub'}
| builder = ${data.builderLink ? '' : data.builder}
| builderlink = ${data.builderLink}
| galaxy = ${data.galaxy}
| region = ${data.region}
| system = ${data.system}
| planet = ${data.planet}
| moon = ${data.moon}
| axes = ${data.axes}
| coordinates = ${data.coordinates}
| portalglyphs = ${data.glyphs ? `{{Gl/Small|${data.glyphs}}}` : ''}
| type = 
| mode = ${data.mode}
| platform = ${data.platform}
| release = ${process.env.NEXT_PUBLIC_VERSION}
| farm = ${data.farm}
| geobay = ${data.geobay}
| arena = ${data.arena}
| landingpad = ${data.landingpad}
| racetrack = ${data.racetrack}
| terminal = ${data.terminal}
| censusplayer=
| censusreddit=
| censusdiscord=
| censusfriend = 
| censusarrival=
| censusrenewal=
| censusshow=
}}
'''${data.title}''' is a player base.

==Summary==
'''${data.title}''' is a [[Habitable Base|player base]], located on the planet [[${data.planet}]] in the [[${data.system}]] system.

==Layout==
${data.layout}

==Features==
${data.features.map((feature) => (`* [[${feature.value}]]\n`)).toString().replace(/,/g,'')}
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
      title='Create A New Base'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <Head>
        <title>New Base | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new base. Create a new base page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Base Name' onChange={(value) => dispatch({ type: 'title', value })} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => dispatch({ type: 'civilized', value })} />
        <Dropzone label='Image of Base' maxFiles={1} onUpload={(photos) => dispatch({ type: 'image', value: photos[0].name })} />
        <Input id='builder' type='text' label='Builder in-game username' onChange={(value) => dispatch({ type: 'builder', value })} />
        <Input id='builderLink' type='text' label='Builder wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Builder Name.' onChange={(value) => dispatch({ type: 'builderLink', value })} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => dispatch({ type: 'galaxy', value })} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'region', value })} />
        <Input id='system' type='text' label='Star System Name' onChange={(value) => dispatch({ type: 'system', value })} />
        <Input id='planet' type='text' label='Planet Name' tooltip='Planet Name OR the planet circled by the moon where the base can be found.' onChange={(value) => dispatch({ type: 'planet', value })} />
        <Input id='moon' type='text' label='Moon Name' tooltip='If the base is located on a moon. Leave blank if the base is on a planet.' onChange={(value) => dispatch({ type: 'moon', value })} />
        <Input id='axes' type='text' label='Planetary Longitude and Latitude' tooltip='Found using your analysis visor OR on your ships dashboard' onChange={(value) => dispatch({ type: 'axes', value })} />
      </div>
      <Input id='glyphs' type='text' label='Planetary Glyphs' tooltip='Found in screenshot mode. Glyphs are specific to each planet.' defaultValue={data.glyphs} onChange={(value) => dispatch({ type: 'glyphs', value })} />
      <Glyphs onChange={(value) => dispatch({ type: 'glyphs.selector', value })} />
      <div className='frmGroup50'>
        <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/' onChange={(value) => dispatch({ type: 'coordinates', value })} />
        <SelectGameMode onChange={(value) => dispatch({ type: 'mode', value })} />
        <SelectPlatform onChange={(value) => dispatch({ type: 'platform', value })} />
        <Select id='farm' label='Farm?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'farm', value })} />
        <Select id='geobay' label='Geobay?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'geobay', value })} />
        <Select id='arena' label='Arena?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'arena', value })} />
        <Select id='landingpad' label='Landing Pad?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'landingpad', value })} />
        <Select id='racetrack' label='Racetrack?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'racetrack', value })} />
        <Select id='terminal' label='Trade Terminal?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'terminal', value })} />
      </div>
      <Textarea id='layout' label='Layout' placeholder='Walk us through your base as if you were a realtor.' onChange={(value) => dispatch({ type: 'layout', value })} />
      <SelectFeatures onChange={(items) => dispatch({ type: 'features', value: items })} />
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
      <CreateCategory type={data.moon ? 'moon' : 'planet'} title={data.moon || data.planet} parentTitle={data.system} />
    </CodeView>
  );
}