export default function baseTemplate(data) {
  return `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Base infobox
| name = ${data.title}
| image = ${data.image}
| civilized = ${data.civ || 'No Man\'s High Hub'}
| builder = ${data.builderLink ? '' : data.builder}
| builderlink = ${data.builderLink}
| galaxy = ${data.galaxy}
| region = ${data.region}
| system = ${data.system}
| planet = ${data.planet}
| moon = ${data.moon}
| axes = ${data.axes}
| coordinates = ${data.coordinates}
| portalglyphs = ${data.glyphs ? `{{Gl/Small|${data.glyphs}}}` : ''}
| type = 
| mode = ${data.mode}
| platform = ${data.platform}
| release = ${process.env.NEXT_PUBLIC_VERSION}
| farm = ${data.farm}
| geobay = ${data.geobay}
| arena = ${data.arena}
| landingpad = ${data.landingpad}
| racetrack = ${data.racetrack}
| terminal = ${data.terminal}
| censusplayer=
| censusreddit=
| censusdiscord=
| censusfriend = 
| censusarrival=
| censusrenewal=
| censusshow=
}}
'''${data.title}''' is a player base.

==Summary==
'''${data.title}''' is a [[Habitable Base|player base]], located on the planet [[${data.planet}]] in the [[${data.system}]] system.

==Layout==
${data.layout}

==Features==
${data.features.map((feature) => (`* [[${feature.value}]]\n`)).toString().replace(/,/g,'')}
==Additional Information==
${data.additionalInfo}

==Gallery==
${data.gallery.length > 0 ? `<gallery>
${data.gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).toString().replace(/,/g,'')}</gallery>` : ''}`;
}
