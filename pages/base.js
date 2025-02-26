import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import reducer from '../reducers';
import * as ga from '../lib/ga';
import useCopyToClipboard from '../hooks/copy-to-clipboard';
import baseTemplate from '../lib/code-templates/base-template';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Checkbox from '../components/checkbox';
import DateInput from '../components/date-input';
import Glyphs from '../components/glyphs';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import SelectMulti from '../components/select-multi';
import Textarea from '../components/textarea';
import Gallery from '../components/gallery';
import CreateCategory from '../components/create-category';
import SelectGameMode from '../components/select-game-mode';
import SelectPlatform from '../components/select-platform';
import baseFeatures from '../lib/select-data/base-features';

import styles from '../styles/forms.module.scss';

const initialState = {
  title: '',
  image: '',
  civ: '',
  builder: '',
  builderLink: '',
  reddit: '',
  discord: '',
  friendCode: '',
  arrival: '',
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
  const [codeCopied, handleCopy] = useCopyToClipboard();
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const codeTemplate = baseTemplate(data);

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
        <Input
          id='title'
          type='text'
          label='Base Name'
          onChange={(value) => dispatch({ type: 'title', value })}
        />
        <Input
          id='civilized'
          type='text'
          label='Civilization Name'
          onChange={(value) => dispatch({ type: 'civ', value })}
        />
        <Dropzone
          label='Image of Base'
          maxFiles={1}
          onUpload={(photos) => dispatch({ type: 'image', value: photos[0].name })}
        />
        <Input
          id='builder'
          type='text'
          label='Builder in-game username'
          onChange={(value) => dispatch({ type: 'builder', value })}
        />
        <Input
          id='builderLink'
          type='text'
          label='Builder wiki username'
          tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Builder Name.'
          onChange={(value) => dispatch({ type: 'builderLink', value })}
        />
      </div>
      <Checkbox id='census' label='This is a census base' onChange={(value) => dispatch({ type: 'census', value })} />
      {data.census &&
        <div className='frmGroup50'>
          <Input
            id='reddit'
            type='text'
            label='Reddit Username'
            onChange={(value) => dispatch({ type: 'reddit', value })}
            defaultValue={data.reddit}
          />
          <Input
            id='discord'
            type='text'
            label='Discord Username'
            onChange={(value) => dispatch({ type: 'discord', value })}
            defaultValue={data.discord}
          />
          <Input
            id='friendCode'
            type='text'
            label='Friend Code'
            onChange={(value) => dispatch({ type: 'friendCode', value })}
            defaultValue={data.friendCode}
          />
          <DateInput
            id='arrival'
            label='Arrival Date'
            maxDate={new Date()}
            dateFormat='yyyy/MM/dd'
            onChange={(value) => dispatch({ type: 'arrival', value: format(value, 'yyyy/MM/dd') })}
          />
        </div>
      }
      <div className='frmGroup50'>
        <Input
          id='galaxy'
          type='text'
          label='Galaxy Name'
          onChange={(value) => dispatch({ type: 'galaxy', value })}
        />
        <Input
          id='region'
          type='text'
          label='Region Name'
          tooltip='Found on the expanded view of the galaxy map.'
          onChange={(value) => dispatch({ type: 'region', value })}
        />
        <Input
          id='system'
          type='text'
          label='Star System Name'
          onChange={(value) => dispatch({ type: 'system', value })}
        />
        <Input
          id='planet'
          type='text'
          label='Planet Name'
          tooltip='Planet Name OR the planet circled by the moon where the base can be found.'
          onChange={(value) => dispatch({ type: 'planet', value })}
        />
        <Input
          id='moon'
          type='text'
          label='Moon Name'
          tooltip='If the base is located on a moon. Leave blank if the base is on a planet.'
          onChange={(value) => dispatch({ type: 'moon', value })}
        />
        <Input
          id='axes'
          type='text'
          label='Planetary Longitude and Latitude'
          tooltip='Found using your analysis visor OR on your ships dashboard'
          onChange={(value) => dispatch({ type: 'axes', value })}
        />
      </div>
      <Glyphs
        changeCoords={(value) => dispatch({ type: 'coordinates', value })}
        changeGlyphs={(value) => dispatch({ type: 'glyphs', value })}
      />
      <div className='frmGroup50'>
        <SelectGameMode onChange={(value) => dispatch({ type: 'mode', value })} />
        <SelectPlatform onChange={(value) => dispatch({ type: 'platform', value })} />
        <Select
          id='farm'
          label='Farm?'
          config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]}
          onChange={(value) => dispatch({ type: 'farm', value })}
        />
        <Select
          id='geobay'
          label='Geobay?'
          config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]}
          onChange={(value) => dispatch({ type: 'geobay', value })}
        />
        <Select
          id='arena'
          label='Arena?'
          config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]}
          onChange={(value) => dispatch({ type: 'arena', value })}
        />
        <Select
          id='landingpad'
          label='Landing Pad?'
          config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]}
          onChange={(value) => dispatch({ type: 'landingpad', value })}
        />
        <Select
          id='racetrack'
          label='Racetrack?'
          config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]}
          onChange={(value) => dispatch({ type: 'racetrack', value })}
        />
        <Select
          id='terminal'
          label='Trade Terminal?'
          config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]}
          onChange={(value) => dispatch({ type: 'terminal', value })}
        />
      </div>
      <Textarea
        id='layout'
        label='Layout'
        placeholder='Walk us through your base as if you were a realtor.'
        onChange={(value) => dispatch({ type: 'layout', value })} />
      <SelectMulti
        id='features'
        label='Features'
        config={baseFeatures}
        isSearchable
        onChange={(items) => dispatch({ type: 'features', value: items })}
      />
      <Textarea
        id='additionalInfo'
        label='Additional Info'
        placeholder='Any nearby resources, tourist traps, other bases.'
        onChange={(value) => dispatch({ type: 'additionalInfo', value })} />
      <Gallery
        gallery={data.gallery}
        onUpload={(photos) => dispatch({ type: 'gallery.upload', value: photos })}
        onChange={(value, index) => dispatch({ type: 'gallery.caption', value, index })}
      />
      <div className={styles.btnContainer}>
        <button
          type='button'
          className={`btn whiteBtn ${styles.btn}`}
          onClick={() => {
            myRef.current.scrollIntoView();
            setViewCode(true);
            ga.event('click', 'View Base Code', window.innerWidth < 800 ? 'Popup' : 'ScrollTo');
          }}>
          View Code
        </button>
        <button
          type='button'
          className={`btn whiteBtn ${styles.btn}`}
          onClick={() => {
            handleCopy(codeTemplate);
            ga.event('click', 'Copy Base', data.civ);
          }}>
          {codeCopied ? 'Code Copied' : 'Copy Code'}
        </button>
        <a
          href={`https://nomanssky.fandom.com/wiki/${data.title.replace(/ /g,'_')}?action=edit`}
          className={`btn whiteBtn ${styles.btn}`}
          target='_blank'
          rel='noreferrer'
          onClick={() => ga.event('click', 'Create Base', data.civ)}>
          Create Page
        </a>
      </div>
      <CreateCategory
        type={data.moon ? 'moon' : 'planet'}
        title={data.moon || data.planet}
        parentTitle={data.system}
      />
    </CodeView>
  );
}