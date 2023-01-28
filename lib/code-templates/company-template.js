export default function companyTemplate(data) {
  return `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Companies}}
{{Companies infobox
| name = ${data.title}
| image = ${data.image || 'nmsMisc_NotAvailable.png'}
| galaxy = ${data.galaxy}
| quadrant = ${data.quadrant}
| region = ${data.region}
| system = ${data.system}
| headquarters = ${data.headquarters}
| founder = ${data.founder}
| founderlink = ${data.founderLink}
| type = ${data.type}
| branches = ${data.branches}
| specialisation = ${data.specialization}
| services = ${data.services}
| federation = ${data.federation}
| uca = ${data.uca}
| platform = ${data.platform.map((item) => item.value).join('/')}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${data.title}''' is a company.

==Summary==
'''${data.title}''' is a [[company]].

It is located in the [[${data.region}]] region of the [[${data.galaxy}]] galaxy.

===Mission===
${data.mission || 'Our mission is to...'}

==Location==
===Headquarters===
Company headquarters are located in the ${data.region} region of the ${data.galaxy} galaxy.

===Regions===
${data.regions.length > 0 ? `Company branch locations can be found in these regions:
${data.regions.map((region) => `* [[${region}]]\n`).join('')}` : ''}


===Branch Offices===
CompanyName has the following branches:
{{CARGOCivSystems|${data.title}}}

==Background==
${data.background || 'The company was founded...'}

==Partnerships==
${data.partnerships.length > 0 ? `Other companies and [[Civilized space|civilizations]] that share a preferred partnership:
${data.partnerships.map((partner) => `* [[${partner}]]\n`).join('')}` : ''}

==Guidelines==
${data.guidelines}

==Structure==
${data.structure}

==Joining==
${data.joining || 'If you want to join our company, you should...'}

==Employees==
{| class="article-table"
! Member name !! {{platform}} !! Homeplanet
${data.members.map((member) => `|-
| ${member.name} || ${member.platform} || ${member.homePlanet} || ${member.homeSystem}\n`).join('')}|}

==Additional Information==
${data.additionalInfo}

==Gallery==
${data.gallery.length > 0 ? `<gallery>
${data.gallery.map((image) => {
  return `${image.name}${image.caption ? `|${image.caption}` : ''}\n`;
}).join('')}</gallery>` : ''}

[[Category:${data.title}| ]]`;
}
