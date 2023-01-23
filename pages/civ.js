import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import reducer from '../reducers';
import * as ga from '../lib/ga';
import useCopyToClipboard from '../hooks/copy-to-clipboard';
import civTemplate from '../lib/code-templates/civ-template';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Glyphs from '../components/glyphs';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import SelectMulti from '../components/select-multi';
import Textarea from '../components/textarea';
import Members from '../components/civ/members';
import Gallery from '../components/gallery';
import CreateCategory from '../components/create-category';

import styles from '../styles/forms.module.scss';

const memberDefault = {
  name: '',
  platform: '',
  homePlanet: '',
  homeSystem: '',
};

const initialState = {
  title: '',
  image: '',
  galaxy: '',
  quadrant: '',
  region: '',
  system: '',
  planet: '',
  coordinates: '',
  glyphs: '',
  government: '',
  civSize: '',
  civType: '',
  founder: '',
  founderLink: '',
  leader: '',
  federation: '',
  un: '',
  platform: [],
  mission: '',
  background: '',
  guidelines: '',
  joining: '',
  members: [memberDefault],
  rules: [''],
  additionalInfo: '',
  gallery: [],
};

export default function Civ() {
  const myRef = useRef(null);
  const [codeCopied, handleCopy] = useCopyToClipboard();
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const codeTemplate = civTemplate(data);

  return (
    <CodeView
      code={codeTemplate}
      title='Create A Civilization'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <Head>
        <title>New Civilization | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new civilization. Create a new civilization embassy page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Civilization Name' onChange={(value) => dispatch({ type: 'title', value })} />
        <Dropzone label='Civilization Logo' maxFiles={1} onUpload={(photos) => dispatch({ type: 'image', value: photos[0].name })} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => dispatch({ type: 'galaxy', value })} />
        <Select id='quadrant' label='Quadrant' tooltip='What quadrant the civilization is located in. Use the minimap in the top left of the galaxy map page. More info on quadrants: https://nomanssky.fandom.com/wiki/Quadrant.' config={[
          { value: 'Alpha', label :'Alpha' },
          { value: 'Beta', label :'Beta' },
          { value: 'Gamma', label :'Gamma' },
          { value: 'Delta', label: 'Delta' }
        ]} onChange={(value) => dispatch({ type: 'quadrant', value })} />
        <Input id='region' type='text' label='Capital Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'region', value })} />
        <Input id='system' type='text' label='Capital Star System Name' onChange={(value) => dispatch({ type: 'system', value })} />
        <Input id='planet' type='text' label='Capital Planet Name' onChange={(value) => dispatch({ type: 'planet', value })} />
        <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/' onChange={(value) => dispatch({ type: 'coordinates', value })} />
      </div>
      <Input id='glyphs' type='text' label='Planetary Glyphs' tooltip='Found in screenshot mode. Glyphs are specific to each planet.' defaultValue={data.glyphs} onChange={(value) => dispatch({ type: 'glyphs', value })} />
      <Glyphs onChange={(value) => dispatch({ type: 'glyphs.selector', value })} />
      <div className='frmGroup50'>
        <Select id='government' label='Government Style' tooltip='How the civilization is governed. More info: https://nomanssky.fandom.com/wiki/Civilization_Categories#Government' config={[
          { value: 'Anarchy', label :'Anarchy' },
          { value: 'Anocracy', label :'Anocracy' },
          { value: 'Autocracy', label :'Autocracy' },
          { value: 'Democracy', label: 'Democracy' },
          { value: 'Meritocracy', label :'Meritocracy' },
          { value: 'Oligarchy', label :'Oligarchy' },
          { value: 'Republic', label :'Republic' }
        ]} onChange={(value) => dispatch({ type: 'government', value })} />
        <Select id='civSize' label='Civilization Size' tooltip='How large is the civilization. More info: https://nomanssky.fandom.com/wiki/Civilization_Categories#Size' config={[
          { value: 'Abandoned', label :'Abandoned' },
          { value: 'Secret', label :'Secret' },
          { value: 'Solo', label :'Solo - 1 player' },
          { value: 'Rural', label: 'Rural - 2-5 players' },
          { value: 'Standard', label :'Standard - 6-19 players' },
          { value: 'Hub', label :'Hub - 20-119 documented players' },
          { value: 'Nexus', label :'Nexus - 120+ documented' }
        ]} onChange={(value) => dispatch({ type: 'civSize', value })} />
        <Select id='civType' label='Civilization Type' tooltip='How does your civilization like to play. More info: https://nomanssky.fandom.com/wiki/Civilization_Categories#Type' config={[
          { value: 'Casual', label :'Casual' },
          { value: 'Construction', label :'Construction' },
          { value: 'Fanfiction', label :'Fanfiction' },
          { value: 'Gameplay/Documentation', label: 'Gameplay/Documentation' },
          { value: 'Militant', label :'Militant' },
          { value: 'Non-localized', label :'Non-localized' },
          { value: 'Profit', label :'Profit' },
          { value: 'Modded', label :'Modded' }
        ]} onChange={(value) => dispatch({ type: 'civType', value })} />
        <Input id='founder' type='text' label='Civilization Founder In-Game Username' onChange={(value) => dispatch({ type: 'founder', value })} />
        <Input id='founderLink' type='text' label='Civilization Founder Wiki Username' tooltip='If a wiki username is filled, the code will link the civilization to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => dispatch({ type: 'founderLink', value })} />
        <Input id='leader' type='text' label='Civilization Leader' tooltip='Only fill this out if the person who runs the civilization is different than the Founder' onChange={(value) => dispatch({ type: 'leader', value })} />
        <Select id='federation' label='Part of the UFT Alliance?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'federation', value })} />
        <Select id='un' label='Part of the UN42 Alliance?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'un', value })} />
        <SelectMulti id='platform' label='Platform' config={[
          { value: 'PC', label: 'PC' },
          { value: 'PS', label: 'PS' },
          { value: 'XB', label: 'XB' },
          { value: 'NS', label: 'NS' },
          { value: 'All', label: 'All' },
        ]} isSearchable onChange={(items) => dispatch({ type: 'platform', value: items })} />
      </div>
      <Textarea id='mission' label='Civilization`s Mission' placeholder='Our mission is to...' onChange={(value) => dispatch({ type: 'mission', value })} />
      <Textarea id='background' label='Civilization`s Background/History' placeholder='The civilization first started...' onChange={(value) => dispatch({ type: 'background', value })} />
      <Textarea id='guidelines' label='Naming Guidlines' placeholder='Members are encouraged to name planets/moons with...' onChange={(value) => dispatch({ type: 'guidelines', value })} />
      <Textarea id='joining' label='How to Join' placeholder='If you want to join, you should...' onChange={(value) => dispatch({ type: 'joining', value })} />
      <Members
        details={data.members}
        onChange={(index, key, value) => dispatch({ type: 'changeObjInArray', id: 'members', value, index, key })}
        deleteMember={(value) => dispatch({ type: 'deleteItemFromArray', id: 'members', value })}
      />
      <button
        type='button'
        className={`btn ${styles.btn}`}
        onClick={() => dispatch({ type: 'addItemToArray', id: 'members', value: memberDefault })}>
        Add Member
      </button>
      <div className='frmGroup50'>
        {data.rules.map((rule, index) => (
          <div className={`frmItem ${styles.ruleContainer}`} key={index}>
            <Input
              frmItemClass='civRules'
              defaultValue={rule}
              id={`rule_${index}`}
              type='text'
              label={`Rule ${index + 1}`}
              onChange={(value) => dispatch({ type: 'changeItemInArray', id: 'rules', value, index })}
            />
            {index > 0 &&
              <button className={`icon ${styles.deleteRule}`} onClick={() => dispatch({ type: 'deleteItemFromArray', id: 'rules', value: index })}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                  <use href='#svgClose' />
                </svg>
              </button>
            }
          </div>
        ))}
      </div>
      <button type='button' className={`btn ${styles.btn}`} onClick={() => dispatch({ type: 'addItemToArray', id: 'rules', value: '' })}>
        Add Rule
      </button>
      <div className='frmGroup50'>
        <Gallery
          gallery={data.gallery}
          onUpload={(photos) => dispatch({ type: 'gallery.upload', value: photos })}
          onChange={(value, index) => dispatch({ type: 'gallery.caption', value, index })}
        />
      </div>
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Anything else to note?' onChange={(value) => dispatch({ type: 'additionalInfo', value })} />
      <div className={styles.btnContainer}>
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => {
          myRef.current.scrollIntoView();
          setViewCode(true);
          ga.buttonClick('View Code');
        }}>
          View Code
        </button>
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => {
          handleCopy(codeTemplate);
          ga.buttonClick('Copy Code');
          ga.recordCiv(data.title);
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
      <CreateCategory type='system' title={data.title} parentTitle={data.region} />
    </CodeView>
  );
}