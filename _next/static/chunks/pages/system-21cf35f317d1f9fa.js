(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{6985:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/system",function(){return c(306)}])},5860:function(a,b){"use strict";b.Z=[{value:"Mercantile",label:"Mercantile"},{value:"Trading",label:"Trading"},{value:"Shipping",label:"Shipping"},{value:"Commercial",label:"Commercial"},{value:"Material Fusion",label:"Material Fusion"},{value:"Alchemical",label:"Alchemical"},{value:"Metal Processing",label:"Metal Processing"},{value:"Ore Processing",label:"Ore Processing"},{value:"Research",label:"Research"},{value:"Scientific",label:"Scientific"},{value:"Experimental",label:"Experimental"},{value:"Mathematical",label:"Mathematical"},{value:"Mining",label:"Mining"},{value:"Minerals",label:"Minerals"},{value:"Ore Extraction",label:"Ore Extraction"},{value:"Prospecting",label:"Prospecting"},{value:"Manufacturing",label:"Manufacturing"},{value:"Industrial",label:"Industrial"},{value:"Construction",label:"Construction"},{value:"Mass Production",label:"Mass Production"},{value:"High Tech",label:"High Tech"},{value:"Technology",label:"Technology"},{value:"Nano-construction",label:"Nano-construction"},{value:"Engineering",label:"Engineering"},{value:"Power Generation",label:"Power Generation"},{value:"Energy Supply",label:"Energy Supply"},{value:"Fuel Generation",label:"Fuel Generation"},{value:"High Voltage",label:"High Voltage"}]},306:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return Q}});var d=c(828),e=c(9815),f=c(5893),g=c(7294),h=c(9008),i=c.n(h),j=c(8062),k=c(9424),l=c(2487),m=c(833),n=c(9501),o=c(8494),p=c(3967),q=c(6069),r=c(5122),s=c(6394),t=c(3166),u=c(5697),v=c.n(u),w=c(6497),x=c(6098),y=c(3299),z=c(4137),A=c(3558),B=c.n(A);function C(a){var b=a.amount,c=a.onChange;return(0,f.jsx)("div",{children:(0,e.Z)(Array(b)).map(function(a,b){return(0,f.jsxs)("div",{className:"frmGroup50 ".concat(B().planet),children:[(0,f.jsxs)("h2",{className:B().title,children:["Planet ",b+1]}),(0,f.jsx)(p.Z,{label:"Planet Image",maxFiles:1,onUpload:function(a){return c(b,"photo",a[0].name)}}),(0,f.jsx)(n.Z,{id:"name_".concat(b),type:"text",label:"Planet Name",onChange:function(a){return c(b,"name",a)}}),(0,f.jsx)(n.Z,{id:"type_".concat(b),type:"text",label:"Planet Type",onChange:function(a){return c(b,"type",a)}}),(0,f.jsx)(q.Z,{id:"weather_".concat(b),label:"Planet Weather",config:x.Z,isSearchable:!0,onChange:function(a){return c(b,"weather",a)}}),(0,f.jsx)(q.Z,{id:"sentinels_".concat(b),label:"Planet Sentinels",config:y.Z,isSearchable:!0,onChange:function(a){return c(b,"sentinels",a)}}),(0,f.jsx)(q.Z,{id:"flora_".concat(b),label:"Planet Flora",config:z.Z,isSearchable:!0,onChange:function(a){return c(b,"flora",a)}}),(0,f.jsx)(q.Z,{id:"fauna_".concat(b),label:"Planet Fauna",config:z.Z,isSearchable:!0,onChange:function(a){return c(b,"fauna",a)}}),(0,f.jsx)(r.Z,{id:"resources_".concat(b),label:"Resources",config:w.Z,isSearchable:!0,onChange:function(a){return c(b,"resources",a)}}),(0,f.jsx)(n.Z,{id:"notes_".concat(b),type:"text",label:"Planet Notes",onChange:function(a){return c(b,"notes",a)}})]},b)})})}C.propTypes={amount:v().number,onChange:v().func};var D=c(9211),E=c(6769),F=c(5860),G=[{value:"Gek",label:"Gek"},{value:"Korvax",label:"Korvax"},{value:"Vy'keen",label:"Vy'keen"},{value:"Gek Abandoned",label:"Gek Abandoned"},{value:"Korvax Abandoned",label:"Korvax Abandoned"},{value:"Vy'keen Abandoned",label:"Vy'keen Abandoned"},{value:"Uncharted",label:"Uncharted"}],H=[{value:"Declining",label:"Declining"},{value:"Destitute",label:"Destitute"},{value:"Failing",label:"Failing"},{value:"Fledgling",label:"Fledgling"},{value:"Low Supply",label:"Low Supply"},{value:"Struggling",label:"Struggling"},{value:"Unsuccessful",label:"Unsuccessful"},{value:"Unpromising",label:"Unpromising"},{value:"Adequate",label:"Adequate"},{value:"Balanced",label:"Balanced"},{value:"Comfortable",label:"Comfortable"},{value:"Developing",label:"Developing"},{value:"Medium Supply",label:"Medium Supply"},{value:"Promising",label:"Promising"},{value:"Satisfactory",label:"Satisfactory"},{value:"Sustainable",label:"Sustainable"},{value:"Advanced",label:"Advanced"},{value:"Affluent",label:"Affluent"},{value:"Booming",label:"Booming"},{value:"Flourishing",label:"Flourishing"},{value:"High Supply",label:"High Supply"},{value:"Opulent",label:"Opulent"},{value:"Prosperous",label:"Prosperous"},{value:"Wealthy",label:"Wealthy"},{value:"Black Market",label:"Black Market"}],I=[{value:"Gentle",label:"Gentle"},{value:"Low",label:"Low"},{value:"Mild",label:"Mild"},{value:"Peaceful",label:"Peaceful"},{value:"Relaxed",label:"Relaxed"},{value:"Stable",label:"Stable"},{value:"Tranquil",label:"Tranquil"},{value:"Trivial",label:"Trivial"},{value:"Unthreatening",label:"Unthreatening"},{value:"Untroubled",label:"Untroubled"},{value:"Belligerent",label:"Belligerent"},{value:"Boisterous",label:"Boisterous"},{value:"Fractious",label:"Fractious"},{value:"Intermittent",label:"Intermittent"},{value:"Medium",label:"Medium"},{value:"Rowdy",label:"Rowdy"},{value:"Sporadic",label:"Sporadic"},{value:"Testy",label:"Testy"},{value:"Unruly",label:"Unruly"},{value:"Unstable",label:"Unstable"},{value:"Aggressive",label:"Aggressive"},{value:"Alarming",label:"Alarming"},{value:"At War",label:"At War"},{value:"Critical",label:"Critical"},{value:"Dangerous",label:"Dangerous"},{value:"Destructive",label:"Destructive"},{value:"Formidable",label:"Formidable"},{value:"High",label:"High"},{value:"Lawless",label:"Lawless"},{value:"Perilous",label:"Perilous"},{value:"Pirate Controlled",label:"Pirate Controlled"}],J=[{value:"Scanner",label:"Scanner"},{value:"Mining Beam",label:"Mining Beam"},{value:"Boltcaster",label:"Boltcaster"},{value:"Blaze Javelin",label:"Blaze Javelin"},{value:"Pulse Spitter",label:"Pulse Spitter"},{value:"Scatter Blaster",label:"Scatter Blaster"},{value:"Plasma Launcher",label:"Plasma Launcher"},{value:"Geology Cannon",label:"Geology Cannon"},{value:"Neutron Cannon",label:"Neutron Cannon"}],K=[{value:"Launch Thruster",label:"Launch Thruster"},{value:"Pulse Engine",label:"Pulse Engine"},{value:"Deflector Shield",label:"Deflector Shield"},{value:"Hyperdrive",label:"Hyperdrive"},{value:"Photon Cannon",label:"Photon Cannon"},{value:"Phase Beam",label:"Phase Beam"},{value:"Positron Ejector",label:"Positron Ejector"},{value:"Infra-Knife",label:"Infra-Knife"},{value:"Cyclotron",label:"Cyclotron"}],L=[{value:"Life Support",label:"Life Support"},{value:"Movement System Upgrade",label:"Movement System Upgrade"},{value:"Defence Systems Upgrade",label:"Defence Systems Upgrade"},{value:"Toxic Protection Module",label:"Toxic Protection Module"},{value:"Radiation Protection Module",label:"Radiation Protection Module"},{value:"Thermal Protection Module (Heat)",label:"Thermal Protection Module (Heat)"},{value:"Thermal Protection Module (Cold)",label:"Thermal Protection Module (Cold)"},{value:"Underwater Protection Module",label:"Underwater Protection Module"}],M=[{value:"Fusion Engine",label:"Fusion Engine"},{value:"Exocraft Acceleration Module",label:"Exocraft Acceleration Module"},{value:"Exocraft Mining Laser",label:"Exocraft Mining Laser"},{value:"Exocraft Mounted Cannon",label:"Exocraft Mounted Cannon"},{value:"Minotaur Engine Upgrade",label:"Minotaur Engine Upgrade"},{value:"Minotaur Laser Upgrade",label:"Minotaur Laser Upgrade"},{value:"Minotaur Cannon Upgrade",label:"Minotaur Cannon Upgrade"},{value:"Humboldt Drive",label:"Humboldt Drive"},{value:"Nautilon Cannon",label:"Nautilon Cannon"}],N=c(8862),O=c.n(N),P={title:"",image:"",region:"",galaxy:"",multiplestars:"",color:"",starClass:"",distance:"",coordinates:"",planet:"2",moon:"0",water:"",dissonant:"",gateway:"",faction:"",economy:"",economybuy:"",economysell:"",wealth:"",conflict:"",mode:"",civ:"",discovered:"",discoveredLink:"",defaultTitle:"",planets:(0,e.Z)([,,]),resources:[],glyphs:"",galaxyMap:"",multitoolTech:[],starshipTech:[],exosuitTech:[],vehicleTech:[],additionalInfo:"",gallery:[]};function Q(){var a,b,c=(0,g.useRef)(null),e=(0,d.Z)((0,l.Z)(),2),h=e[0],u=e[1],v=(0,g.useState)(!1),w=v[0],x=v[1],y=(0,g.useReducer)(j.Z,P),z=y[0],A=y[1],B=(a=z,"{{Version|".concat("Singularity","}}\n{{System infobox\n| name = ").concat(a.title,"\n| image = ").concat(a.image||"nmsMisc_NotAvailable.png","\n| region = ").concat(a.region,"\n| galaxy = ").concat(a.galaxy,"\n| multiplestars = ").concat("1"!==a.multiplestars?a.multiplestars:"","\n| color = ").concat(a.color,"\n| class = ").concat(a.starClass,"\n| distance = ").concat(a.distance,"\n| coordinates = ").concat(a.coordinates,"\n| planet = ").concat(a.planet,"\n| moon = ").concat(a.moon||0,"\n| water = ").concat(a.water,"\n| dissonant= ").concat(a.dissonant,"\n| gateway = ").concat("Yes"===a.gateway?"Yes":"","\n| faction = ").concat(a.faction,"\n| economy = ").concat(a.economy,"\n| economybuy = ").concat(a.economybuy?"".concat(a.economybuy.replace(/[^\d.-]/g,""),"%"):"","\n| economysell = ").concat(a.economysell?"".concat(a.economysell.replace(/[^\d.-]/g,""),"%"):"","\n| wealth = ").concat(a.wealth,"\n| conflict = ").concat(a.conflict,"\n| mode = ").concat(a.mode,"\n| civilized = ").concat(a.civ||"No Man's High Hub","\n| discovered = ").concat(a.discoveredLink?"":a.discovered,"\n| discoveredlink = ").concat(a.discoveredLink,"\n| release = ").concat("Singularity","\n}}\n'''").concat(a.title,"''' is a star system.\n\n==Summary==\n'''").concat(a.title,"''' is a [[star system]] in the [[").concat(a.region,"]].\n\n==Alias Names==").concat(a.defaultTitle?"\n{{aliasc|text=Original|name=".concat(a.defaultTitle,"}}"):"","\n{{aliasc|text=Current|name=").concat(a.title,'}}\n\n==Planets & Moons==\n{| class="article-table" style="width:100%; max-width: 1000px;"\n|-\n! {{Style_header}} width=150 | Planet Image\n! {{Style_header}} | Planet Name\n! {{Style_header}} width=100 | Type\n! {{Style_header}} width=100 | Weather\n! {{Style_header}} width=100 | Sentinels\n! {{Style_header}} width=100 | Fauna\n! {{Style_header}} width=100 | Flora\n|-').concat((b=[],a.planets.map(function(a){return a?"\n| [[File:".concat(a.photo||"nmsMisc_NotAvailable.png","|150px]] \n| ").concat(a.name||"[[PlanetName]]","\n| ").concat(a.type||"type","\n| ").concat(a.weather||"weather","\n| ").concat(a.sentinels||"sentinels","\n| ").concat(a.fauna||"fauna","\n| ").concat(a.flora||"flora","\n|-\n|colspan=2 | '''Resources:''' ").concat(a.resources?a.resources.map(function(a){return b.includes(a.value)?"".concat(a.value):(b.push(a.value),"[[".concat(a.value,"]]"))}).join(", "):"","\n|colspan=5 | '''Notes:''' ").concat(a.notes||"","\n|-"):"\n| [[File:nmsMisc_NotAvailable.png|150px]] \n| [[PlanetName]]\n| type\n| weather\n| sentinels\n| fauna\n| flora\n|-\n|colspan=2 | '''Resources:'''\n|colspan=5 | '''Notes:'''\n|-"}).join("")),"\n|}\n\n==Location information==\n===Coordinates===").concat(a.coordinates?"\n{{coords|".concat(a.coordinates.split(":")[0]?a.coordinates.split(":")[0]:"XXXX","|").concat(a.coordinates.split(":")[1]?a.coordinates.split(":")[1]:"XXXX","|").concat(a.coordinates.split(":")[2]?a.coordinates.split(":")[2]:"XXXX","|").concat(a.coordinates.split(":")[3]?a.coordinates.split(":")[3]:"XXXX","}}"):"","\n\n===Glyphs===\n").concat(a.glyphs?"{{Gl|".concat(a.glyphs,"}}"):"","\n\n===Navigation Images===\n").concat(a.galaxyMap?"[[File:".concat(a.galaxyMap,"|400px]]"):"","\n\n===System Location===\n\n==Space Station==\n").concat(0===a.multitoolTech.length&&0===a.starshipTech.length&&0===a.exosuitTech.length&&0===a.vehicleTech.length?"The space station merchants' inventory has not been logged at this time.":"The space station merchants offer the following {{class|S}} class items for sale:\n\n".concat(a.multitoolTech.length>0?"===Multi-tool Technology Merchant===\n".concat(a.multitoolTech.map(function(a){return"* [[".concat(a.value,"]]\n")}).join("")):"","\n").concat(a.starshipTech.length>0?"===Starship Technology Merchant===\n".concat(a.starshipTech.map(function(a){return"* [[".concat(a.value,"]]\n")}).join("")):"","\n").concat(a.exosuitTech.length>0?"===Exosuit Technology Merchant===\n".concat(a.exosuitTech.map(function(a){return"* [[".concat(a.value,"]]\n")}).join("")):"","\n").concat(a.vehicleTech.length>0?"===Vehicle Shop Merchant===\n".concat(a.vehicleTech.map(function(a){return"* [[".concat(a.value,"]]\n")}).join("")):""),"\n\n==Additional Information==\n").concat(a.additionalInfo,"\n\n==Gallery==\n").concat(a.gallery.length>0?"<gallery>\n".concat(a.gallery.map(function(a){return"".concat(a.name).concat(a.caption?"|".concat(a.caption):"","\n")}).join(""),"</gallery>"):""));return(0,f.jsxs)(m.Z,{code:B,title:"Create A Star System",viewCode:w,closeEditor:function(){return x(!1)},children:[(0,f.jsxs)(i(),{children:[(0,f.jsx)("title",{children:"New Star System | No Man's Sky Wiki Boilerplate Creator"}),(0,f.jsx)("meta",{name:"description",content:"Generate boilerplate markdown code for a new star system. Create a new star system page on the No Man's Sky Fandom wiki with your generated code."})]}),(0,f.jsxs)("div",{className:"frmGroup50",ref:c,children:[(0,f.jsx)(n.Z,{id:"title",type:"text",label:"System Name",onChange:function(a){return A({type:"title",value:a})}}),(0,f.jsx)(n.Z,{id:"defaultTitle",type:"text",label:"Original Procgen Name",onChange:function(a){return A({type:"defaultTitle",value:a})}}),(0,f.jsx)(p.Z,{label:"Space Station or Star System Image",maxFiles:1,onUpload:function(a){return A({type:"image",value:a[0].name})}}),(0,f.jsx)(n.Z,{id:"galaxy",type:"text",label:"Galaxy Name",onChange:function(a){return A({type:"galaxy",value:a})}}),(0,f.jsx)(n.Z,{id:"region",type:"text",label:"Region Name",tooltip:"Found on the expanded view of the galaxy map.",onChange:function(a){return A({type:"region",value:a})}}),(0,f.jsx)(q.Z,{id:"multiplestars",label:"Amount of Stars",config:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"}],onChange:function(a){return A({type:"multiplestars",value:a})}}),(0,f.jsx)(q.Z,{id:"color",label:"Star Color",config:[{value:"Yellow",label:"Yellow"},{value:"Green",label:"Green"},{value:"Red",label:"Red"},{value:"Blue",label:"Blue"},{value:"Black Hole",label:"Black Hole"}],onChange:function(a){return A({type:"color",value:a})}}),(0,f.jsx)(n.Z,{id:"starClass",type:"text",label:"Star Class",tooltip:"Found on the expanded view of the galaxy map.",onChange:function(a){return A({type:"starClass",value:a})}}),(0,f.jsx)(n.Z,{id:"distance",type:"text",label:"Distance to Center",tooltip:"Found in the top right of the galaxy map.",onChange:function(a){return A({type:"distance",value:a})}}),(0,f.jsx)(o.Z,{changeCoords:function(a){return A({type:"coordinates",value:a})},changeGlyphs:function(a){return A({type:"glyphs",value:a})}}),(0,f.jsx)(n.Z,{id:"planet",type:"number",min:"2",max:"6",label:"Planet Amount",tooltip:"The amount of planetary bodies in this system",onChange:function(a){A({type:"planet",value:a}),A({type:"planets.set",value:Number(a)+Number(z.moon)})}}),(0,f.jsx)(n.Z,{id:"moon",type:"number",min:"0",max:"4",label:"Moon Amount",tooltip:"The amount of lunar bodies in this system",onChange:function(a){A({type:"moon",value:a}),A({type:"planets.set",value:Number(a)+Number(z.planet)})}}),(0,f.jsx)(q.Z,{id:"water",label:"Contains Water",config:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],onChange:function(a){return A({type:"water",value:a})}}),(0,f.jsx)(q.Z,{id:"gateway",label:"Dissonant",config:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],onChange:function(a){return A({type:"dissonant",value:a})}}),(0,f.jsx)(q.Z,{id:"gateway",label:"Gateway System",config:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],onChange:function(a){return A({type:"gateway",value:a})}}),(0,f.jsx)(q.Z,{id:"faction",label:"System`s Faction",config:G,onChange:function(a){return A({type:"faction",value:a})}}),(0,f.jsx)(q.Z,{id:"economy",label:"Economy Type",config:F.Z,isSearchable:!0,onChange:function(a){return A({type:"economy",value:a})}}),(0,f.jsx)(n.Z,{id:"economybuy",type:"text",label:"Economy Buy Rate",tooltip:"Found on the expanded view of the galaxy map.",onChange:function(a){return A({type:"economybuy",value:a})}}),(0,f.jsx)(n.Z,{id:"economysell",type:"text",label:"Economy Sell Rate",tooltip:"Found on the expanded view of the galaxy map.",onChange:function(a){return A({type:"economysell",value:a})}}),(0,f.jsx)(q.Z,{id:"wealth",label:"System`s Wealth",config:H,isSearchable:!0,onChange:function(a){return A({type:"wealth",value:a})}}),(0,f.jsx)(q.Z,{id:"conflict",label:"System`s Conflict",config:I,isSearchable:!0,onChange:function(a){return A({type:"conflict",value:a})}}),(0,f.jsx)(t.Z,{onChange:function(a){return A({type:"mode",value:a})}}),(0,f.jsx)(n.Z,{id:"civilized",type:"text",label:"Civilization Name",onChange:function(a){return A({type:"civ",value:a})}}),(0,f.jsx)(n.Z,{id:"discovered",type:"text",label:"Discoverer in-game username",onChange:function(a){return A({type:"discovered",value:a})}}),(0,f.jsx)(n.Z,{id:"discoveredLink",type:"text",label:"Discoverer wiki username",tooltip:'If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.',onChange:function(a){return A({type:"discoveredLink",value:a})}})]}),(0,f.jsx)(C,{amount:Number(z.moon)+Number(z.planet),onChange:function(a,b,c){if("resources"===b){var d=c.map(function(a){return a.label}),e=z.resources;e[a]=d,A({type:"resources",value:e.flat()})}A({type:"changeObjInArray",id:"planets",value:c,index:a,key:b})}}),(0,f.jsxs)("div",{className:"frmGroup50",children:[(0,f.jsx)(p.Z,{label:"Galaxy Map",maxFiles:1,onUpload:function(a){return A({type:"galaxyMap",value:a[0].name})}}),(0,f.jsx)(D.Z,{gallery:z.gallery,onUpload:function(a){return A({type:"gallery.upload",value:a})},onChange:function(a,b){return A({type:"gallery.caption",value:a,index:b})}}),(0,f.jsx)(r.Z,{id:"multitoolTech",label:"Multi-tool S-class Upgrades Available",config:J,onChange:function(a){return A({type:"multitoolTech",value:a})}}),(0,f.jsx)(r.Z,{id:"starshipTech",label:"Starship S-class Upgrades Available",config:K,onChange:function(a){return A({type:"starshipTech",value:a})}}),(0,f.jsx)(r.Z,{id:"exosuitTech",label:"Exosuit S-class Upgrades Available",config:L,onChange:function(a){return A({type:"exosuitTech",value:a})}}),(0,f.jsx)(r.Z,{id:"vehicleTech",label:"Vehicle S-class Upgrades Available",config:M,onChange:function(a){return A({type:"vehicleTech",value:a})}})]}),(0,f.jsx)(s.Z,{id:"additionalInfo",label:"Additional Info",placeholder:"Anything else to note?",onChange:function(a){return A({type:"additionalInfo",value:a})}}),(0,f.jsxs)("div",{className:O().btnContainer,children:[(0,f.jsx)("button",{type:"button",className:"btn whiteBtn ".concat(O().btn),onClick:function(){c.current.scrollIntoView(),x(!0),k.B("click","View System Code",window.innerWidth<800?"Popup":"ScrollTo")},children:"View Code"}),(0,f.jsx)("button",{type:"button",className:"btn whiteBtn ".concat(O().btn),onClick:function(){u(B),k.B("click","Copy System",z.civ)},children:h?"Code Copied":"Copy Code"}),(0,f.jsx)("a",{href:"https://nomanssky.fandom.com/wiki/".concat(z.title.replace(/ /g,"_"),"?action=edit"),className:"btn whiteBtn ".concat(O().btn),target:"_blank",rel:"noreferrer",onClick:function(){return k.B("click","Create System",z.civ)},children:"Create Page"})]}),(0,f.jsx)(E.Z,{type:"system",title:z.title,parentTitle:z.region})]})}},3558:function(a){a.exports={planet:"planets_planet__auxu8",title:"planets_title__EHL_E"}}},function(a){a.O(0,[247,158,999,145,774,888,179],function(){var b;return a(a.s=6985)}),_N_E=a.O()}])