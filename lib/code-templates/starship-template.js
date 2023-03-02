export default function starshipTemplate(data) {
  return `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Starship infobox
| name = ${data.title}
| image = ${data.image || 'nmsMisc_NotAvailable.png'}
| galaxy = ${data.galaxy}
| region = ${data.region}
| system = ${data.system}
| planet = ${data.planet}
| moon = ${data.moon}
| location = ${data.location}
| axes = ${data.axes}
| coordinates = ${data.coordinates}
| portalglyphs = ${data.glyphs}
| economy = ${data.economy}
| pilot = ${data.pilot}
| type = ${data.type}
| subtype = ${data.subtype}
| exotic = ${data.exotic}
| class = ${data.shipClass}
| inventory = ${data.inventory}
| techslots = ${data.techslots}
| cargoslots = ${data.cargoslots}
| cost = ${data.cost}
| civilized = ${data.civ}
| discovered = ${data.discovered}
| discoveredlink = ${data.discoveredLink}
| mode = ${data.mode}
| release = ${process.env.NEXT_PUBLIC_VERSION}
| maneuverB = ${data.maneuverB}
| damageB = ${data.damageB}
| shieldB = ${data.shieldB}
| warpB = ${data.warpB}
}}
'''${data.title}''' is a starship.

==Summary==
'''${data.title}''' is a${['Explorer', 'Exotic'].includes(data.type) ? 'n' : ''} [[Starship Catalogue - ${data.type}|${data.type}]]-type [[starship]].

==Appearance==
${data.appearance}

==Location==
A${['A', 'S'].includes(data.shipClass) ? 'n' : ''} {{class|${data.shipClass}}} class version of this starship was discovered in the [[${data.system}]] system, located in the [[${data.region}]].

===Coordinates===
${data.coordinates ? `{{coords|${data.coordinates.split(':')[0] ? data.coordinates.split(':')[0] : 'XXXX'}|${data.coordinates.split(':')[1] ? data.coordinates.split(':')[1] : 'XXXX'}|${data.coordinates.split(':')[2] ? data.coordinates.split(':')[2] : 'XXXX'}|${data.coordinates.split(':')[3] ? data.coordinates.split(':')[3] : 'XXXX'}}}` : ''}

===Glyphs===${data.glyphs ? `
{{Gl|${data.glyphs}}}` : ''}

==Additional Information==
${data.additionalInfo}

==Gallery==
${data.gallery.length > 0 ? `<gallery>
${data.gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).toString().replace(/,/g,'')}</gallery>` : ''}`;
}