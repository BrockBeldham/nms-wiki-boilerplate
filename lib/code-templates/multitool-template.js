export default function multitoolTemplate(data) {
  return `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Multitool infobox
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
| type = ${data.type}
| crystals = ${data.crystals}
| horns = ${data.horns}
| glowtubes = ${data.glowtubes}
| class = ${data.mtClass}
| slots = ${data.slots}
| cost = ${data.cost}
| civilized = ${data.civ}
| discovered = ${data.discovered}
| discoveredlink = ${data.discoveredLink}
| mode = ${data.mode}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${data.title}''' is a multi-tool.

==Summary==
'''${data.title}''' is a${['Alien', 'Experimental'].includes(data.type) ? 'n' : ''} [[Starship Catalogue - ${data.type}|${data.type} multi-tool]].

==Appearance==
${data.appearance}

==Location==
A${['A', 'S'].includes(data.mtClass) ? 'n' : ''} {{class|${data.mtClass}}} class version of this multi-tool was found in the [[${data.system}]] system, located in the [[${data.region}]].

===Coordinates===
${data.coordinates ? `{{coords|${data.coordinates.split(':')[0] ? data.coordinates.split(':')[0] : 'XXXX'}|${data.coordinates.split(':')[1] ? data.coordinates.split(':')[1] : 'XXXX'}|${data.coordinates.split(':')[2] ? data.coordinates.split(':')[2] : 'XXXX'}|${data.coordinates.split(':')[3] ? data.coordinates.split(':')[3] : 'XXXX'}}}` : ''}

===Glyphs===
{{Gl|${data.glyphs}}}

==Stats==
The {{class|${data.mtClass}}} class version of this weapon has the following bonus stats:
* '''Damage Potential''': ${data.damage}
* '''Scanner Range''': ${data.scanner}

==Acquirement==
${data.acquirement}

==Additional Information==
${data.additionalInfo}

==Gallery==
${data.gallery.length > 0 ? `<gallery>
${data.gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).toString().replace(/,/g,'')}</gallery>` : ''}`;
}