import { useState, useRef, useReducer } from 'react';
import Head from 'next/head';
import reducer from '../reducers';
import * as ga from '../lib/ga';
import useCopyToClipboard from '../hooks/copy-to-clipboard';
import companyTemplate from '../lib/code-templates/company-template';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
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
  headquarters: '',
  founder: '',
  founderLink: '',
  type: '',
  branches: '',
  specialization: '',
  services: '',
  federation: '',
  uca: '',
  platform: [],
  mission: '',
  regions: [''],
  background: '',
  partnerships: [''],
  guidelines: '',
  structures: '',
  joining: '',
  members: [memberDefault],
  additionalInfo: '',
  gallery: [],
};

export default function Company() {
  const myRef = useRef(null);
  const [codeCopied, handleCopy] = useCopyToClipboard();
  const [viewCode, setViewCode] = useState(false);
  const [data, dispatch] = useReducer(reducer, initialState);

  const codeTemplate = companyTemplate(data);

  return (
    <CodeView
      code={codeTemplate}
      title='Create A Company'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <Head>
        <title>New Company | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new company. Create a new company embassy page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Company Name' onChange={(value) => dispatch({ type: 'title', value })} />
        <Dropzone label='Company Logo' maxFiles={1} onUpload={(photos) => dispatch({ type: 'image', value: photos[0].name })} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => dispatch({ type: 'galaxy', value })} />
        <Select id='quadrant' label='Quadrant' tooltip='What quadrant the company is located in. Use the minimap in the top left of the galaxy map page. More info on quadrants: https://nomanssky.fandom.com/wiki/Quadrant.' config={[
          { value: 'Alpha', label :'Alpha' },
          { value: 'Beta', label :'Beta' },
          { value: 'Gamma', label :'Gamma' },
          { value: 'Delta', label: 'Delta' }
        ]} onChange={(value) => dispatch({ type: 'quadrant', value })} />
        <Input id='region' type='text' label='Headquarter Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => dispatch({ type: 'region', value })} />
        <Input id='system' type='text' label='Headquarter Star System Name' onChange={(value) => dispatch({ type: 'system', value })} />
        <Input id='headquarters' type='text' label='Headquarter Planet Name' onChange={(value) => dispatch({ type: 'headquarters', value })} />
        <Input id='founder' type='text' label='Company Founder In-Game Username' onChange={(value) => dispatch({ type: 'founder', value })} />
        <Input id='founderLink' type='text' label='Company Founder Wiki Username' tooltip='If a wiki username is filled, the code will link the company to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => dispatch({ type: 'founderLink', value })} />
        <Select id='type' label='Company Type' tooltip='Classification of the company. More info: https://nomanssky.fandom.com/wiki/Company_Categories' config={[
          { value: 'SPs', label :'SPs' },
          { value: 'GPs', label :'GPs' },
          { value: 'LPs', label :'LPs' },
          { value: 'SPs', label: 'SPs' },
          { value: 'MC', label :'MC' },
          { value: 'SPs', label :'SPs' },
          { value: 'NpC', label :'NpC' },
          { value: 'LLC', label :'LLC' }
        ]} onChange={(value) => dispatch({ type: 'type', value })} />
        <Input id='branches' type='text' label='Branches' tooltip='The total number of branches.' onChange={(value) => dispatch({ type: 'branches', value })} />
        <Input id='specialization' type='text' label='Specialization' tooltip='The focus of the company.' onChange={(value) => dispatch({ type: 'specialization', value })} />
        <Input id='services' type='text' label='Services' tooltip='The primary service(s) offered by this company.' onChange={(value) => dispatch({ type: 'services', value })} />
        <Select id='federation' label='Part of the UFT Alliance?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'federation', value })} />
        <Select id='uca' label='Part of the UN42 Alliance?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => dispatch({ type: 'uca', value })} />
        <SelectMulti id='platform' label='Platform' config={[
          { value: 'PC', label: 'PC' },
          { value: 'PS', label: 'PS' },
          { value: 'XB', label: 'XB' },
          { value: 'NS', label: 'NS' },
          { value: 'All', label: 'All' },
        ]} isSearchable onChange={(items) => dispatch({ type: 'platform', value: items })} />
      </div>
      <Textarea id='mission' label='Company Mission' placeholder='Our mission is to...' onChange={(value) => dispatch({ type: 'mission', value })} />
      <div className='frmGroup50'>
        {data.regions.map((region, index) => (
          <div className={`frmItem ${styles.ruleContainer}`} key={index}>
            <Input
              frmItemClass='civRules'
              defaultValue={region}
              id={`regions_${index}`}
              type='text'
              label={`Additional Region ${index + 1}`}
              onChange={(value) => dispatch({ type: 'changeItemInArray', id: 'regions', value, index })}
            />
            {index > 0 &&
              <button className={`icon ${styles.deleteRule}`} onClick={() => dispatch({ type: 'deleteItemFromArray', id: 'regions', value: index })}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                  <use href='#svgClose' />
                </svg>
              </button>
            }
          </div>
        ))}
      </div>
      <button type='button' className={`btn ${styles.btn}`} onClick={() => dispatch({ type: 'addItemToArray', id: 'regions', value: '' })}>
        Add Region
      </button>
      <Textarea id='background' label='Company`s Background/History' placeholder='The company was founded..' onChange={(value) => dispatch({ type: 'background', value })} />
      <div className='frmGroup50'>
        {data.partnerships.map((partnership, index) => (
          <div className={`frmItem ${styles.ruleContainer}`} key={index}>
            <Input
              frmItemClass='civRules'
              defaultValue={partnership}
              id={`partnerships_${index}`}
              type='text'
              label={`Partnership ${index + 1}`}
              onChange={(value) => dispatch({ type: 'changeItemInArray', id: 'partnerships', value, index })}
            />
            {index > 0 &&
              <button className={`icon ${styles.deleteRule}`} onClick={() => dispatch({ type: 'deleteItemFromArray', id: 'partnerships', value: index })}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                  <use href='#svgClose' />
                </svg>
              </button>
            }
          </div>
        ))}
      </div>
      <button type='button' className={`btn ${styles.btn}`} onClick={() => dispatch({ type: 'addItemToArray', id: 'partnerships', value: '' })}>
        Add Partnership
      </button>
      <Textarea id='guidelines' label='Naming Guidlines' placeholder='Members are encouraged to name planets/moons with...' onChange={(value) => dispatch({ type: 'guidelines', value })} />
      <Textarea id='structure' label='Company Structure' placeholder='Members are encouraged to name planets/moons with...' onChange={(value) => dispatch({ type: 'guidelines', value })} />
      <Textarea id='joining' label='How to Join' placeholder='If you want to join our company, you should...' onChange={(value) => dispatch({ type: 'joining', value })} />
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