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
import Members from '../components/civ/members';
import Gallery from '../components/gallery';
import CreateCategory from '../components/create-category';

import styles from '../styles/forms.module.scss';

export default function Civ() {
  const memberDefault = {
    name: '',
    platform: '',
    homePlanet: '',
    homeSystem: '',
  };

  const myRef = useRef(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [viewCode, setViewCode] = useState(false);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [galaxy, setGalaxy] = useState('');
  const [quadrant, setQuadrant] = useState('');
  const [region, setRegion] = useState('');
  const [system, setSystem] = useState('');
  const [planet, setPlanet] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [glyphs, setGlyphs] = useState('');
  const [government, setGovernment] = useState('');
  const [civSize, setCivSize] = useState('');
  const [civType, setCivType] = useState('');
  const [founder, setFounder] = useState('');
  const [founderLink, setFounderLink] = useState('');
  const [leader, setLeader] = useState('');
  const [federation, setFederation] = useState('');
  const [un, setUn] = useState('');
  const [platform, setPlatform] = useState([]);
  const [mission, setMission] = useState('');
  const [background, setBackground] = useState('');
  const [guidelines, setGuidelines] = useState('');
  const [joining, setJoining] = useState('');
  const [members, setMembers] = useState([ memberDefault ]);
  const [rules, setRules] = useState([ '' ]);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [gallery, setGallery] = useState([]);

  console.log(platform);

  const codeTemplate = `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Civilized Space}}
{{Civilized Space infobox
| name = ${title}
| image = ${image || 'nmsMisc_NotAvailable.png'}
| galaxy = ${galaxy}
| quadrant = ${quadrant}
| region = ${region}
| system = ${system}
| planet = ${planet}
| coordinates = ${coordinates}
| portalglyphs = {{Gl/Small|${glyphs}}}
| government = ${government}
| civsize = ${civSize}
| civtype = ${civType}
| founder = ${founder}
| founderlink = ${founderLink}
| leader = ${leader}
| federation = ${federation}
| un42 = ${un}
| platform = ${platform.map((item) => item.value).join('/')}
| release = Waypoint
}}
'''${title}''' is a civilized space community.

==Summary==
'''${title}''' is a [[Civilized space]] community.

It is located in the [[${region}]] region of the [[${galaxy}]] galaxy.

===Mission===
${mission || 'Our mission is to...'}

==Background==
${background || 'The civilization first started...'}

==Naming Guidelines==
${guidelines || 'Members are encouraged to name planets/moons with...'}

==Joining==
${joining || 'If you want to join, you should...'}

==Members==

{| class="wikitable"
! Member name !! {{platform}} !! Homeplanet !! Homesystem
${members.map((member) => `|-
| ${member.name} || ${member.platform} || ${member.homePlanet} || ${member.homeSystem}\n`).join('')}|}

==Systems Discovered==
The following systems have been documented:

{{CARGOCivSystems|${title}}}

==Rules==
${rules.length > 0 ? `Rules for this civilization include:
${rules.map((rule) => `* ${rule}\n`).join('')}` : ''}

==Additional Information==
${additionalInfo}

==Gallery==
${gallery.length > 0 ? `<gallery>
${gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).join('')}</gallery>` : ''}

[[Category:CivName | ${title}]]`;

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
      title='Create A Civilization'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <Head>
        <title>New Civilization | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new civilization. Create a new civilization embassy page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Civilization Name' onChange={(value) => setTitle(value)} />
        <Dropzone label='Civilization Logo' maxFiles={1} onUpload={(photos) => setImage(photos[0].name)} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => setGalaxy(value)} />
        <Select id='quadrant' label='Quadrant' tooltip='What quadrant the civilization is located in. Use the minimap in the top left of the galaxy map page. More info on quadrants: https://nomanssky.fandom.com/wiki/Quadrant.' config={[
          { value: 'Alpha', label :'Alpha' },
          { value: 'Beta', label :'Beta' },
          { value: 'Gamma', label :'Gamma' },
          { value: 'Delta', label: 'Delta' }
        ]} onChange={(value) => setQuadrant(value)} />
        <Input id='region' type='text' label='Capital Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setRegion(value)} />
        <Input id='system' type='text' label='Capital Star System Name' onChange={(value) => setSystem(value)} />
        <Input id='planet' type='text' label='Capital Planet Name' onChange={(value) => setPlanet(value)} />
        <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/' onChange={(value) => setCoordinates(value)} />
      </div>
      <Input id='glyphs' type='text' label='Planetary Glyphs' tooltip='Found in screenshot mode. Glyphs are specific to each planet.' defaultValue={glyphs} onChange={(value) => setGlyphs(value)} />
      <Glyphs onChange={(value) => setGlyphs(glyphs + value)} />
      <div className='frmGroup50'>
        <Select id='government' label='Government Style' tooltip='How the civilization is governed. More info: https://nomanssky.fandom.com/wiki/Civilization_Categories#Government' config={[
          { value: 'Anarchy', label :'Anarchy' },
          { value: 'Anocracy', label :'Anocracy' },
          { value: 'Autocracy', label :'Autocracy' },
          { value: 'Democracy', label: 'Democracy' },
          { value: 'Meritocracy', label :'Meritocracy' },
          { value: 'Oligarchy', label :'Oligarchy' },
          { value: 'Republic', label :'Republic' }
        ]} onChange={(value) => setGovernment(value)} />
        <Select id='civSize' label='Civilization Size' tooltip='How large is the civilization. More info: https://nomanssky.fandom.com/wiki/Civilization_Categories#Size' config={[
          { value: 'Abandoned', label :'Abandoned' },
          { value: 'Secret', label :'Secret' },
          { value: 'Solo', label :'Solo - 1 player' },
          { value: 'Rural', label: 'Rural - 2-5 players' },
          { value: 'Standard', label :'Standard - 6-19 players' },
          { value: 'Hub', label :'Hub - 20-119 documented players' },
          { value: 'Nexus', label :'Nexus - 120+ documented' }
        ]} onChange={(value) => setCivSize(value)} />
        <Select id='civType' label='Civilization Type' tooltip='How does your civilization like to play. More info: https://nomanssky.fandom.com/wiki/Civilization_Categories#Type' config={[
          { value: 'Casual', label :'Casual' },
          { value: 'Construction', label :'Construction' },
          { value: 'Fanfiction', label :'Fanfiction' },
          { value: 'Gameplay/Documentation', label: 'Gameplay/Documentation' },
          { value: 'Militant', label :'Militant' },
          { value: 'Non-localized', label :'Non-localized' },
          { value: 'Profit', label :'Profit' },
          { value: 'Modded', label :'Modded' }
        ]} onChange={(value) => setCivType(value)} />
        <Input id='founder' type='text' label='Civilization Founder In-Game Username' onChange={(value) => setFounder(value)} />
        <Input id='founderLink' type='text' label='Civilization Founder Wiki Username' tooltip='If a wiki username is filled, the code will link the civilization to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => setFounderLink(value)} />
        <Input id='leader' type='text' label='Civilization Leader' tooltip='Only fill this out if the person who runs the civilization is different than the Founder' onChange={(value) => setLeader(value)} />
        <Select id='federation' label='Part of the UFT Alliance?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => setFederation(value)} />
        <Select id='un' label='Part of the UN42 Alliance?' config={[
          { value: 'Yes', label :'Yes' },
          { value: 'No', label :'No' }
        ]} onChange={(value) => setUn(value)} />
        <SelectMulti id='platform' label='Platform' config={[
          { value: 'PC', label: 'PC' },
          { value: 'PS', label: 'PS' },
          { value: 'XB', label: 'XB' },
          { value: 'NS', label: 'NS' },
          { value: 'All', label: 'All' },
        ]} isSearchable onChange={(items) => setPlatform(items)} />
      </div>
      <Textarea id='mission' label='Civilization`s Mission' placeholder='Our mission is to...' onChange={(value) => setMission(value)} />
      <Textarea id='background' label='Civilization`s Background/History' placeholder='The civilization first started...' onChange={(value) => setBackground(value)} />
      <Textarea id='guidelines' label='Naming Guidlines' placeholder='Members are encouraged to name planets/moons with...' onChange={(value) => setGuidelines(value)} />
      <Textarea id='joining' label='How to Join' placeholder='If you want to join, you should...' onChange={(value) => setJoining(value)} />
      <Members details={members} onChange={(index, key, value) => {
        setMembers((prevState) => (prevState.map((f, prevIndex) => {
          if (index === prevIndex) {
            return { ...f, [key]: value };
          }

          return f;
        })));
      }} deleteFauna={(id) => {
        const filterFauna = members.filter((_item, index) => (index !== id));
        setMembers(filterFauna);
      }} />
      <button type='button' className={`btn ${styles.btn}`} onClick={() => setMembers([
        ...members,
        memberDefault
      ])}>
        Add Member
      </button>
      <div className='frmGroup50'>
        {rules.map((rule, index) => (
          <div className={`frmItem ${styles.ruleContainer}`} key={index}>
            <Input
              frmItemClass='civRules'
              defaultValue={rule}
              id={`rule_${index}`}
              type='text'
              label={`Rule ${index + 1}`}
              onChange={(value) => setRules((prevState) => (prevState.map((f, prevIndex) => index === prevIndex ? value : f)))}
            />
            {index > 0 &&
              <button className={`icon ${styles.deleteRule}`} onClick={() => {
                const filterFlora = rules.filter((_item, i) => (i !== index));
                setRules(filterFlora);
              }}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                  <use href='#svgClose' />
                </svg>
              </button>
            }
          </div>
        ))}
      </div>
      <button type='button' className={`btn ${styles.btn}`} onClick={() => setRules([ ...rules, '' ])}>
        Add Rule
      </button>
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
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Anything else to note?' onChange={(value) => setAdditionalInfo(value)} />
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
          ga.recordCiv(title);
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
      <CreateCategory type='system' title={title} parentTitle={region} />
    </CodeView>
  );
}