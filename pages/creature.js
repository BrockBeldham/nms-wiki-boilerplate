import { useState, useRef } from 'react';
import Head from 'next/head';
import CodeView from '../components/layouts/code-view';
import Input from '../components/input';
import Glyphs from '../components/glyphs';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import Textarea from '../components/textarea';
import Gallery from '../components/gallery';
import SelectGameMode from '../components/select-game-mode';
import faunaEcosystem from '../lib/select-data/fauna-ecosystem';
import faunaGender from '../lib/select-data/fauna-gender';
import faunaGenus from '../lib/select-data/fauna-genus';
import faunaBehaviour from '../lib/select-data/fauna-behaviour';
import faunaProducts from '../lib/select-data/fauna-products';

import styles from '../styles/forms.module.scss';

export default function Creature() {
  const myRef = useRef(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [viewCode, setViewCode] = useState(false);
  const [title, setTitle] = useState('');
  const [defaultTitle, setDefaultTitle] = useState('');
  const [image, setImage] = useState('');
  const [galaxy, setGalaxy] = useState('');
  const [region, setRegion] = useState('');
  const [system, setSystem] = useState('');
  const [planet, setPlanet] = useState('');
  const [moon, setMoon] = useState('');
  const [glyphs, setGlyphs] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [rarity, setRarity] = useState('');
  const [ecosystem, setEcosystem] = useState('');
  const [activity, setActivity] = useState('');
  const [gender, setGender] = useState('');
  const [behaviour, setBehaviour] = useState('');
  const [diet, setDiet] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [notes, setNotes] = useState('');
  const [produces, setProduces] = useState('');
  const [genus, setGenus] = useState('');
  const [civ, setCiv] = useState('');
  const [discovered, setDiscovered] = useState('');
  const [discoveredLink, setDiscoveredLink] = useState('');
  const [researchteam, setResearchteam] = useState('');
  const [mode, setMode] = useState('');
  const [appearance, setAppearance] = useState('');
  const [discoveryMenu, setDiscoveryMenu] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [gallery, setGallery] = useState([]);

  const codeTemplate = `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Creature infobox
| name = ${title}
| image = ${image}
| galaxy = ${galaxy}
| region = ${region}
| system = ${system}
| planet = ${planet}
| moon = ${moon}
| coordinates = ${coordinates}
| hemisphere =
| rarity = ${rarity}
| ecosystem = ${ecosystem}
| activity = ${activity}
| bait = 
| gender = ${gender}
| behaviour = ${behaviour}
| diet = ${diet}
| weight = ${weight}
| height = ${height}
| notes = ${notes}
| produces = ${produces}
| genus = ${genus}
| civilized = ${civ || 'No Man\'s High Hub'}
| discovered = ${discoveredLink ? '' : discovered}
| discoveredlink = ${discoveredLink}
| researchteam = ${researchteam}
| mode = ${mode}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${title}''' is a creature.

==Summary==
'''${title}''' is a [[creature]], a member of the [[${genus}]] [[genus]].

==Appearance==
${appearance}

==Alias names==
${defaultTitle ? `{{aliasc|text=Original|name=${defaultTitle}}}\n` : ''}{{aliasc|text=Current|name=${title}}}

==Discovery Menu==
[[File:${discoveryMenu}|400px]]

==Location==
It can be found on the [[planet]] [[${planet}]] in the [[${system}]] [[star system]].

===Coordinates===
${coordinates ? `{{coords|${coordinates.split(':')[0] ? coordinates.split(':')[0] : 'XXXX'}|${coordinates.split(':')[1] ? coordinates.split(':')[1] : 'XXXX'}|${coordinates.split(':')[2] ? coordinates.split(':')[2] : 'XXXX'}|${coordinates.split(':')[3] ? coordinates.split(':')[3] : 'XXXX'}}}` : ''}

===Glyphs===
{{Gl|${glyphs}}}

==Additional information==
${additionalInfo}

==Gallery==
${gallery.length > 0 ? `<gallery>
${gallery.map((image) => {
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
      title='Create A New Creature'
      viewCode={viewCode}
      closeEditor={() => setViewCode(false)}
    >
      <Head>
        <title>New Creature | No Man&apos;s Sky Wiki Boilerplate Creator</title>
        <meta name='description' content="Generate boilerplate markdown code for a new creature. Create a new creature page on the No Man's Sky Fandom wiki with your generated code." />
      </Head>
      <div className='frmGroup50' ref={myRef}>
        <Input id='title' type='text' label='Base Name' onChange={(value) => setTitle(value)} />
        <Input id='defaultTitle' type='text' label='Original Procgen Name' onChange={(value) => setDefaultTitle(value)} />
        <Dropzone label='Image of Base' maxFiles={1} onUpload={(photos) => setImage(photos[0].name)} />
        <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => setGalaxy(value)} />
        <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setRegion(value)} />
        <Input id='system' type='text' label='Star System Name' onChange={(value) => setSystem(value)} />
        <Input id='planet' type='text' label='Planet Name' tooltip='Planet Name OR the planet circled by the moon where the creature can be found.' onChange={(value) => setPlanet(value)} />
        <Input id='moon' type='text' label='Moon Name' tooltip='If the creature is located on a moon. Leave blank if the creature is on a planet.' onChange={(value) => setMoon(value)} />
      </div>
      <Input id='glyphs' type='text' label='Planetary Glyphs' tooltip='Found in screenshot mode. Glyphs are specific to each planet.' defaultValue={glyphs} onChange={(value) => setGlyphs(value)} />
      <Glyphs onChange={(value) => setGlyphs(glyphs + value)} />
      <div className='frmGroup50'>
        <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/' onChange={(value) => setCoordinates(value)} />
        <Select id='rarity' label='Rarity' config={[
          { label: 'Common', value: 'Common' },
          { label: 'Uncommon', value: 'Uncommon' },
          { label: 'Rare', value: 'Rare' }
        ]} onChange={(value) => setRarity(value)} />
        <Select id='ecosystem' label='Ecosystem' config={faunaEcosystem} isSearchable onChange={(value) => setEcosystem(value)} />
        <Select id='activity' label='Activity' config={[
          { label: 'Nocturnal', value: 'Nocturnal' },
          { label: 'Diurnal', value: 'Diurnal' },
          { label: 'Always Active', value: 'Always Active' }
        ]} onChange={(value) => setActivity(value)} />
        <Select id='gender' label='Gender' config={faunaGender} isSearchable onChange={(value) => setGender(value)} />
        <Select id='behaviour' label='Behaviour' config={faunaBehaviour} isSearchable onChange={(value) => setBehaviour(value)} />
        <Input id='diet' type='text' label='Diet' onChange={(value) => setDiet(value)} />
        <Input id='weight' type='number' label='Weight' onChange={(value) => setWeight(value)} />
        <Input id='height' type='number' label='Height' onChange={(value) => setHeight(value)} />
        <Input id='notes' type='text' label='Additional Observations' onChange={(value) => setNotes(value)} />
        <Select id='produces' label='Produces' config={faunaProducts} isSearchable onChange={(value) => setProduces(value)} />
        <Select id='genus' label='Genus' config={faunaGenus} isSearchable onChange={(value) => setGenus(value)} />
        <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => setCiv(value)} />
        <Input id='discovered' type='text' label='Discoverer in-game username' onChange={(value) => setDiscovered(value)} />
        <Input id='discoveredLink' type='text' label='Discoverer wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.' onChange={(value) => setDiscoveredLink(value)} />
        <Input id='researchTeam' type='text' label='Research Team' onChange={(value) => setResearchteam(value)} />
        <SelectGameMode onChange={(value) => setMode(value)} />
      </div>
      <Textarea id='appearance' label='Appearance' placeholder='Describe what the creature looks like.' onChange={(value) => setAppearance(value)} />
      <Dropzone label='Discovery Menu' maxFiles={1} onUpload={(photos) => setDiscoveryMenu(photos[0].name)} />
      <Textarea id='additionalInfo' label='Additional Info' placeholder='Any nearby resources, tourist traps, other bases.' onChange={(value) => setAdditionalInfo(value)} />
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
        <a href={`https://nomanssky.fandom.com/wiki/${title.replace(/ /g,'_')}?action=edit`} className={`btn whiteBtn ${styles.btn}`} target='_blank' rel='noreferrer'>
          Create Page
        </a>
      </div>
    </CodeView>
  );
}