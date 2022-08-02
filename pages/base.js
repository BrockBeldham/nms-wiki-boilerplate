import { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import Input from '../components/input';
import Dropzone from '../components/dropzone';
import Select from '../components/select';
import Textarea from '../components/textarea';
import SelectFeatures from '../components/base/select-features';
import SelectGameMode from '../components/select-game-mode';
import SelectPlatform from '../components/select-platform';

import styles from '../styles/pages/base.module.scss';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

export default function Base() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [civ, setCiv] = useState('');
  const [builder, setBuilder] = useState('');
  const [builderLink, setBuilderLink] = useState('');
  const [galaxy, setGalaxy] = useState('');
  const [region, setRegion] = useState('');
  const [system, setSystem] = useState('');
  const [planet, setPlanet] = useState('');
  const [moon, setMoon] = useState('');
  const [axes, setAxes] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [mode, setMode] = useState('');
  const [platform, setPlatform] = useState('');
  const [farm, setFarm] = useState('');
  const [geobay, setGeobay] = useState('');
  const [arena, setArena] = useState('');
  const [landingpad, setLandingpad] = useState('');
  const [racetrack, setRacetrack] = useState('');
  const [terminal, setTerminal] = useState('');
  const [layout, setLayout] = useState('');
  const [features, setFeatures] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [gallery, setGallery] = useState([]);
  const [codeCopied, setCodeCopied] = useState(false);

  const codeTemplate = `
{{Version|Endurance}}
{{Base infobox
| name = ${title}
| image = ${image}
| civilized = ${civ || 'No Man\'s High Hub'}
| builder = ${builderLink ? '' : builder}
| builderlink = ${builderLink}
| galaxy = ${galaxy}
| region = ${region}
| system = ${system}
| planet = ${planet}
| moon = ${moon}
| axes = ${axes}
| coordinates = ${coordinates}
| portalglyphs = 
| type = 
| mode = ${mode}
| platform = ${platform}
| release = Endurance
| farm = ${farm}
| geobay = ${geobay}
| arena = ${arena}
| landingpad = ${landingpad}
| racetrack = ${racetrack}
| terminal = ${terminal}
| censusplayer=
| censusreddit=
| censusdiscord=
| censusfriend = 
| censusarrival=
| censusrenewal=
| censusshow=
}}
'''${title}''' is a player base.

==Summary==
'''${title}''' is a [[Habitable Base|player base]], located on the planet [[${planet}]] in the [[${system}]] system.

==Layout==
${layout}

==Features==
${features.map((feature) => (`* [[${feature.value}]]\n`)).toString().replace(/,/g,'')}

==Additional information==
${additionalInfo}

==Gallery==
${gallery.length > 0 ? `
<gallery>
${gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).toString().replace(/,/g,'')}
</gallery>
` : ''}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeTemplate);
    setCodeCopied(true);
    setTimeout(() => {
      setCodeCopied(false);
    }, 3000)
  };

  const renderGalleries = () => {
    return gallery.map((image, index) => (
      <li className={styles.galleryListItem} key={index}>
        <div className={styles.galleryImage} style={{ backgroundImage: `url(${image.preview})` }} />
        <Input id={`gallery${index}`} type='text' label='Gallery Caption' onChange={(value) => {
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
      </li>
    ))
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className='frmGroup50'>
          <Input id='title' type='text' label='Base Name' onChange={(value) => setTitle(value)} />
          <Input id='civilized' type='text' label='Civilization Name' onChange={(value) => setCiv(value)} />
          <Dropzone maxFiles={1} onUpload={(photos) => setImage(photos[0].name)} />
          <Input id='builder' type='text' label='Builder in-game username' onChange={(value) => setBuilder(value)} />
          <Input id='builderLink' type='text' label='Builder wiki username' tooltip='If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Builder Name.' onChange={(value) => setBuilderLink(value)} />
          <Input id='galaxy' type='text' label='Galaxy Name' onChange={(value) => setGalaxy(value)} />
          <Input id='region' type='text' label='Region Name' tooltip='Found on the expanded view of the galaxy map.' onChange={(value) => setRegion(value)} />
          <Input id='system' type='text' label='Star System Name' onChange={(value) => setSystem(value)} />
          <Input id='planet' type='text' label='Planet Name' tooltip='Planet Name OR the planet circled by the moon where the base can be found.' onChange={(value) => setPlanet(value)} />
          <Input id='moon' type='text' label='Moon Name' tooltip='If the base is located on a moon. Leave blank if the base is on a planet.' onChange={(value) => setMoon(value)} />
          <Input id='axes' type='text' label='Planetary Longitude and Latitude' tooltip='Found using your analysis visor OR on your ships dashboard' onChange={(value) => setAxes(value)} />
          <Input id='coordinates' type='text' label='Signal Booster Coordinates' tooltip='Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/' onChange={(value) => setCoordinates(value)} />
          <SelectGameMode onChange={(value) => setMode(value)} />
          <SelectPlatform onChange={(value) => setPlatform(value)} />
          <Select id='farm' label='Farm?' config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]} onChange={(value) => setFarm(value)} />
          <Select id='geobay' label='Geobay?' config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]} onChange={(value) => setGeobay(value)} />
          <Select id='arena' label='Arena?' config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]} onChange={(value) => setArena(value)} />
          <Select id='landingpad' label='Landing Pad?' config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]} onChange={(value) => setLandingpad(value)} />
          <Select id='racetrack' label='Racetrack?' config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]} onChange={(value) => setRacetrack(value)} />
          <Select id='terminal' label='Trade Terminal?' config={[
            { value: 'Yes', label :'Yes' },
            { value: 'No', label :'No' }
          ]} onChange={(value) => setTerminal(value)} />
        </div>
        <Textarea id='layout' label='Layout' placeholder='Walk us through your base as if you were a realtor.' onChange={(value) => setLayout(value)} />
        <SelectFeatures onChange={(items) => setFeatures(items)} />
        <Textarea id='additionalInfo' label='Additional Info' placeholder='Any nearby resources, tourist traps, other bases.' onChange={(value) => setAdditionalInfo(value)} />
        <Dropzone maxFiles={20} onUpload={(photos) => setGallery(photos)} />
        {gallery.length > 0 &&
          <ul className={styles.galleryList}>
            {renderGalleries()}
          </ul>
        }
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => copyToClipboard()}>
          {codeCopied ? 'Code Copied' : 'Copy Code'}
        </button>
        <a href={`https://nomanssky.fandom.com/wiki/${title.replace(/ /g,"_")}?action=edit`} className={`btn whiteBtn ${styles.btn}`} target='_blank' rel='noreferrer'>
          Create Page
        </a>
      </div>
      <div className={styles.editor}>
        <pre className={styles.editorCode}>
          <code>{codeTemplate}</code>
        </pre>
      </div>
    </div>
  );
}