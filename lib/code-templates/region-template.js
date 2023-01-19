export default function regionTemplate(data) {
  return `{{Version|${process.env.NEXT_PUBLIC_VERSION}}}
{{Region infobox
| name = ${data.title}
| image = ${data.image || 'nmsMisc_NotAvailable.png'}
| galaxy = ${data.galaxy}
| quadrant = ${data.quadrant}
| coordinates = ${data.coordinates.split(':')[0] ? data.coordinates.split(':')[0] : 'XXXX'}:${data.coordinates.split(':')[1] ? data.coordinates.split(':')[1] : 'XXXX'}:${data.coordinates.split(':')[2] ? data.coordinates.split(':')[2] : 'XXXX'}:XXXX
| distance = ${data.distance}
| civilized = ${data.civ}
| release = ${process.env.NEXT_PUBLIC_VERSION}
}}
'''${data.title}''' is a region.

==Summary==
'''${data.title}''' is a [[region]] in the [[${data.galaxy}]] [[galaxy]].

==Region Stats==
{{CARGORegionStats}}

==Documented Systems==
{{CARGORegionSystems}}

==Other Systems==

==Location==
This region is approximately ${data.distance || 'XXX,XXX'} light years from the [[Galaxy Centre]] in the ${data.quadrant} [[quadrant]].
${data.coordinates ? `{{coords|${data.coordinates.split(':')[0] ? data.coordinates.split(':')[0] : 'XXXX'}|${data.coordinates.split(':')[1] ? data.coordinates.split(':')[1] : 'XXXX'}|${data.coordinates.split(':')[2] ? data.coordinates.split(':')[2] : 'XXXX'}|XXXX}}` : ''}

===Adjoining Regions===
The following regions border ${data.title}:
{{RegionNeighbours|coord=${data.coordinates.split(':')[0] ? data.coordinates.split(':')[0] : 'XXXX'}:${data.coordinates.split(':')[1] ? data.coordinates.split(':')[1] : 'XXXX'}:${data.coordinates.split(':')[2] ? data.coordinates.split(':')[2] : 'XXXX'}:XXXX|gal=${data.galaxy || 'Euclid'}}}

==Civilized Space==
${data.civ ? `This region has been explored by the [[${data.civ}]].` : 'This region has not been explored by a [[Civilized space|civilization]]'}`;
}