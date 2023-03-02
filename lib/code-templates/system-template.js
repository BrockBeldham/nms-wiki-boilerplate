export default function systemTemplate(data) {
  const renderPlanets = () => {
    const usedResources = [];
    return data.planets.map((planet) => planet ? `| [[File:${planet.photo || 'nmsMisc_NotAvailable.png'}|150px]] 
| ${planet.name || '[[PlanetName]]'}
| ${planet.type || 'type'}
| ${planet.weather || 'weather'}
| ${planet.sentinels || 'sentinels'}
| ${planet.fauna || 'fauna'}
| ${planet.flora || 'flora'}
|-
|colspan=2 | '''Resources:''' ${planet.resources ? planet.resources.map((resource) => {
  if (!usedResources.includes(resource.value)) {
    usedResources.push(resource.value);
    return `[[${resource.value}]]`;
  } else {
    return `${resource.value}`;
  }
}).join(', ') : ''}
|colspan=5 | '''Notes:''' ${planet.notes || ''}
|-`
:
`
| [[File:nmsMisc_NotAvailable.png|150px]] 
| [[PlanetName]]
| type
| weather
| sentinels
| fauna
| flora
|-
|colspan=2 | '''Resources:'''
|colspan=5 | '''Notes:'''
|-`).join('');
  };

  const renderSpaceStation = () => {
    if (data.multitoolTech.length === 0 && data.starshipTech.length === 0 && data.exosuitTech.length === 0 && data.vehicleTech.length === 0) {
      return 'The space station merchants\' inventory has not been logged at this time.';
    } else {
      return `The space station merchants offer the following {{class|S}} class items for sale:

${data.multitoolTech.length > 0 ? `===Multi-tool Technology Merchant===
${data.multitoolTech.map((tech) => (`* [[${tech.value}]]\n`)).join('')}` : ''}
${data.starshipTech.length > 0 ? `===Starship Technology Merchant===
${data.starshipTech.map((tech) => (`* [[${tech.value}]]\n`)).join('')}` : ''}
${data.exosuitTech.length > 0 ? `===Exosuit Technology Merchant===
${data.exosuitTech.map((tech) => (`* [[${tech.value}]]\n`)).join('')}` : ''}
${data.vehicleTech.length > 0 ? `===Vehicle Shop Merchant===
${data.vehicleTech.map((tech) => (`* [[${tech.value}]]\n`)).join('')}` : ''}`;
    }
  };

  return `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{System infobox
| name = ${data.title}
| image = ${data.image || 'nmsMisc_NotAvailable.png'}
| region = ${data.region}
| galaxy = ${data.galaxy}
| multiplestars = ${data.multiplestars !== '1' ? data.multiplestars : ''}
| color = ${data.color}
| class = ${data.starClass}
| distance = ${data.distance}
| coordinates = ${data.coordinates}
| planet = ${data.planet}
| moon = ${data.moon || 0}
| water = ${data.water}
| gateway = ${data.gateway === 'Yes' ? 'Yes' : ''}
| faction = ${data.faction}
| economy = ${data.economy}
| economybuy = ${data.economybuy}
| economysell = ${data.economysell}
| wealth = ${data.wealth}
| conflict = ${data.conflict}
| mode = ${data.mode}
| civilized = ${data.civ || 'No Man\'s High Hub'}
| discovered = ${data.discoveredLink ? '' : data.discovered}
| discoveredlink = ${data.discoveredLink}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${data.title}''' is a star system.

==Summary==
'''${data.title}''' is a [[star system]] in the [[${data.region}]].

==Alias Names==${data.defaultTitle ? `
{{aliasc|text=Original|name=${data.defaultTitle}}}` : ''}
{{aliasc|text=Current|name=${data.title}}}

==Planets & Moons==
{| class="article-table" style="width:100%; max-width: 1000px;"
|-
! {{Style_header}} width=150 | Planet Image
! {{Style_header}} | Planet Name
! {{Style_header}} width=100 | Type
! {{Style_header}} width=100 | Weather
! {{Style_header}} width=100 | Sentinels
! {{Style_header}} width=100 | Fauna
! {{Style_header}} width=100 | Flora
|-${renderPlanets()}
|}

==Location information==
===Coordinates===${data.coordinates ? `
{{coords|${data.coordinates.split(':')[0] ? data.coordinates.split(':')[0] : 'XXXX'}|${data.coordinates.split(':')[1] ? data.coordinates.split(':')[1] : 'XXXX'}|${data.coordinates.split(':')[2] ? data.coordinates.split(':')[2] : 'XXXX'}|${data.coordinates.split(':')[3] ? data.coordinates.split(':')[3] : 'XXXX'}}}` : ''}

===Glyphs===${data.glyphs ? `
{{Gl|${data.glyphs}}}` : ''}

===Navigation Images===${data.galaxyMap ? `
[[File:${data.galaxyMap}|400px]]`: ''}

===System Location===

==Space Station==
${renderSpaceStation()}
==Additional Information==
${data.additionalInfo}

==Gallery==
${data.gallery.length > 0 ? `<gallery>
${data.gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).join('')}</gallery>` : ''}`;
}