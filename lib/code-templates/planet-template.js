export default function planetTemplate(data) {
  const renderFauna = () => {
    if (data.faunaDetails.length === 0
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
      return `{| class="article-table" style="width:100%; max-width: 1000px;"
! width="150px" | Image !! Name !! Ecosystem !! Genus !! Height !! Weight !! Discovered !! Brief description
${data.faunaDetails.map((f) => (`|-
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
    if (data.floraDetails.length === 0
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
      return `{| class="article-table" style="width:100%; max-width: 1000px;"
! width="150px" | Image !! Name !! Age !! Root Structure !! Nutrient Source !! Elements !! Discovered !! Brief description
${data.floraDetails.map((f) => (`|-
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

  return `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
  {{Planet infobox
  | name = ${data.title}
  | image = ${data.image || 'nmsMisc_NotAvailable.png'}
  | moon = ${data.moon}
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
  '''${data.title}''' is a planet.
  
  ==Summary==
  '''${data.title}''' is a [[planet]] in the [[${data.system}]] [[star system]].
  
  ==Alias Names==
  ${data.defaultTitle ? `{{aliasc|text=Original|name=${data.defaultTitle}}}\n` : ''}{{aliasc|text=Current|name=${data.title}}}
  
  ==Planet Type==
  ${data.planetType}
  
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
  
  ===Moons===
  ${data.moonsDetails ? data.moonsDetails : `${data.title} is not orbited by any moons.`}
  
  ==Planet Glyphs==
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
}