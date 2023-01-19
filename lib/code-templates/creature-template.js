export default function creatureTemplate(data) {
  return `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Creature infobox
| name = ${data.title}
| image = ${data.image || 'nmsMisc_NotAvailable.png'}
| galaxy = ${data.galaxy}
| region = ${data.region}
| system = ${data.system}
| planet = ${data.planet}
| moon = ${data.moon}
| coordinates = ${data.coordinates}
| hemisphere =
| rarity = ${data.rarity}
| ecosystem = ${data.ecosystem}
| activity = ${data.activity}
| bait = 
| gender = ${data.gender}
| behaviour = ${data.behaviour}
| diet = ${data.diet}
| weight = ${data.weight}
| height = ${data.height}
| notes = ${data.notes}
| produces = ${data.produces}
| genus = ${data.genus}
| civilized = ${data.civ || 'No Man\'s High Hub'}
| discovered = ${data.discoveredLink ? '' : data.discovered}
| discoveredlink = ${data.discoveredLink}
| researchteam = ${data.researchteam}
| mode = ${data.mode}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${data.title}''' is a creature.

==Summary==
'''${data.title}''' is a [[creature]], a member of the [[${data.genus}]] [[genus]].

==Appearance==
${data.appearance}

==Alias Names==
${data.defaultTitle ? `{{aliasc|text=Original|name=${data.defaultTitle}}}\n` : ''}{{aliasc|text=Current|name=${data.title}}}

==Discovery Menu==
[[File:${data.discoveryMenu}|400px]]

==Location==
It can be found on the [[planet]] [[${data.planet}]] in the [[${data.system}]] [[star system]].

===Coordinates===
${data.coordinates ? `{{coords|${data.coordinates.split(':')[0] ? data.coordinates.split(':')[0] : 'XXXX'}|${data.coordinates.split(':')[1] ? data.coordinates.split(':')[1] : 'XXXX'}|${data.coordinates.split(':')[2] ? data.coordinates.split(':')[2] : 'XXXX'}|${data.coordinates.split(':')[3] ? data.coordinates.split(':')[3] : 'XXXX'}}}` : ''}

===Glyphs===
{{Gl|${data.glyphs}}}

==Additional Information==
${data.additionalInfo}

==Gallery==
${data.gallery.length > 0 ? `<gallery>
${data.gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).toString().replace(/,/g,'')}</gallery>` : ''}`;
}