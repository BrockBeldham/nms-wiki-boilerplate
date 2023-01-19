export default function civTemplate(data) {
  return `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Civilized Space}}
{{Civilized Space infobox
| name = ${data.title}
| image = ${data.image || 'nmsMisc_NotAvailable.png'}
| galaxy = ${data.galaxy}
| quadrant = ${data.quadrant}
| region = ${data.region}
| system = ${data.system}
| planet = ${data.planet}
| coordinates = ${data.coordinates}
| portalglyphs = {{Gl/Small|${data.glyphs}}}
| government = ${data.government}
| civsize = ${data.civSize}
| civtype = ${data.civType}
| founder = ${data.founder}
| founderlink = ${data.founderLink}
| leader = ${data.leader}
| federation = ${data.federation}
| un42 = ${data.un}
| platform = ${data.platform.map((item) => item.value).join('/')}
| release = Waypoint
}}
'''${data.title}''' is a civilized space community.

==Summary==
'''${data.title}''' is a [[Civilized space]] community.

It is located in the [[${data.region}]] region of the [[${data.galaxy}]] galaxy.

===Mission===
${data.mission || 'Our mission is to...'}

==Background==
${data.background || 'The civilization first started...'}

==Naming Guidelines==
${data.guidelines || 'Members are encouraged to name planets/moons with...'}

==Joining==
${data.joining || 'If you want to join, you should...'}

==Members==

{| class="wikitable"
! Member name !! {{platform}} !! Homeplanet !! Homesystem
${data.members.map((member) => `|-
| ${member.name} || ${member.platform} || ${member.homePlanet} || ${member.homeSystem}\n`).join('')}|}

==Systems Discovered==
The following systems have been documented:

{{CARGOCivSystems|${data.title}}}

==Rules==
${data.rules.length > 0 ? `Rules for this civilization include:
${data.rules.map((rule) => `* ${rule}\n`).join('')}` : ''}

==Additional Information==
${data.additionalInfo}

==Gallery==
${data.gallery.length > 0 ? `<gallery>
${data.gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).join('')}</gallery>` : ''}

[[Category:${data.title}| ]]`;
}