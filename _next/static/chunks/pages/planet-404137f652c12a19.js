(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{8323:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/planet",function(){return c(7762)}])},7762:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return G}});var d=c(828),e=c(5893),f=c(7294),g=c(9008),h=c.n(g),i=c(8062),j=c(9424),k=c(2487),l=c(833),m=c(9501),n=c(8494),o=c(3967),p=c(6069),q=c(5122),r=c(6394),s=c(3166),t=c(4569),u=c(6646),v=c(9211),w=c(6769),x=c(1065),y=c(9066),z=c(6098),A=c(3299),B=c(4137),C=c(6497),D=c(8862),E=c.n(D),F={title:"",defaultTitle:"",image:"",galaxy:"",region:"",system:"",moon:"",description:"",type:"",atmosphere:"",terrain:"",weather:"",resources:[],sentinels:"",flora:"",fauna:"",garden:"",civ:"",mode:"",discovered:"",discoveredLink:"",bases:"",planetType:"",temp:"",tempUnit:"",daytemp:"",nighttemp:"",radnorm:"",toxicnorm:"",daystormtemp:"",nightstormtemp:"",radstorm:"",toxicstorm:"",daycavetemp:"",nightcavetemp:"",daystormcavetemp:"",nightstormcavetemp:"",radcave:"",toxiccave:"",cavestormrad:"",cavestormtoxic:"",daywatertemp:"",nightwatertemp:"",waterrad:"",watertoxic:"",daystormwatertemp:"",nightstormwatertemp:"",waterstormrad:"",waterstormtoxic:"",glyphs:"",moonsDetails:"",sentinelDetails:"",additionalInfo:"",gallery:[],faunaDetails:[],floraDetails:[]};function G(){var a,b=(0,f.useRef)(null),c=(0,d.Z)((0,k.Z)(),2),g=c[0],D=c[1],G=(0,f.useState)(!1),H=G[0],I=G[1],J=(0,f.useReducer)(i.Z,F),K=J[0],L=J[1],M=(a=K,"{{Version|".concat("Fractal","}}\n{{Planet infobox\n| name = ").concat(a.title,"\n| image = ").concat(a.image||"nmsMisc_NotAvailable.png","\n| moon = ").concat(a.moon,"\n| system = ").concat(a.system,"\n| region = ").concat(a.region,"\n| galaxy = ").concat(a.galaxy,"\n| description = ").concat(a.description,"\n| type = ").concat(a.type,"\n| atmosphere = ").concat(a.atmosphere,"\n| terrain = ").concat(a.terrain,"\n| weather = ").concat(a.weather,"\n| resources = ").concat(a.resources.map(function(a){return a.value}).join(", "),"\n| sentinel = ").concat(a.sentinels,"\n| flora = ").concat(a.flora,"\n| fauna = ").concat(a.fauna,"\n| garden = ").concat("Yes"===a.garden.value?"Yes":"","\n| civilized = ").concat(a.civ||"No Man's High Hub","\n| discovered = ").concat(a.discoveredLink?"":a.discovered,"\n| discoveredlink = ").concat(a.discoveredLink,"\n| mode = ").concat(a.mode,"\n| release = ").concat("Fractal","\n}}\n'''").concat(a.title,"''' is a planet.\n\n==Summary==\n'''").concat(a.title,"''' is a [[planet]] in the [[").concat(a.system,"]] [[star system]].\n\n==Alias Names==").concat(a.defaultTitle?"\n{{aliasc|text=Original|name=".concat(a.defaultTitle,"}}"):"","\n{{aliasc|text=Current|name=").concat(a.title,"}}\n\n==Planet Type==\n").concat(a.planetType,"\n").concat("Yes"===a.temp?"===Environment Conditions===\nThe surface has ".concat(a.weather," weather conditions.\n\n{{PlanetWeather\n|tunit=").concat(a.tempUnit,"\n|daytemp=").concat(a.daytemp,"\n|nighttemp=").concat(a.nighttemp,"\n|radnorm=").concat(a.radnorm,"\n|toxicnorm=").concat(a.toxicnorm,"\n|daystormtemp=").concat(a.daystormtemp,"\n|nightstormtemp=").concat(a.nightstormtemp,"\n|radstorm=").concat(a.radstorm,"\n|toxicstorm=").concat(a.toxicstorm,"\n|daycavetemp=").concat(a.daycavetemp,"\n|nightcavetemp=").concat(a.nightcavetemp,"\n|daystormcavetemp=").concat(a.daystormcavetemp,"\n|nightstormcavetemp=").concat(a.nightstormcavetemp,"\n|radcave=").concat(a.radcave,"\n|toxiccave=").concat(a.toxiccave,"\n|cavestormrad=").concat(a.cavestormrad,"\n|cavestormtoxic=").concat(a.cavestormtoxic,"\n|daywatertemp=").concat(a.daywatertemp,"\n|nightwatertemp=").concat(a.nightwatertemp,"\n|waterrad=").concat(a.waterrad,"\n|watertoxic=").concat(a.watertoxic,"\n|daystormwatertemp=").concat(a.daystormwatertemp,"\n|nightstormwatertemp=").concat(a.nightstormwatertemp,"\n|waterstormrad=").concat(a.waterstormrad,"\n|waterstormtoxic=").concat(a.waterstormtoxic,"\n}}"):"","\n\n===Moons===\n").concat(a.moonsDetails?a.moonsDetails:"".concat(a.title," is not orbited by any moons."),"\n\n==Planet Glyphs==").concat(a.glyphs?"\n{{Gl|".concat(a.glyphs,"}}"):"","\n\n==Notable Locations / Waypoints==\n").concat(a.bases?"Notable Bases include:\n\n{{CARGOBasesPlanet|".concat(a.title,"}}"):"","\n\n==Life==\n===Fauna===\n").concat(0!==a.faunaDetails.length||a.faunaDetails.image||a.faunaDetails.name||a.faunaDetails.ecosystem||a.faunaDetails.genus||a.faunaDetails.height||a.faunaDetails.weight||a.faunaDetails.discovered||a.faunaDetails.description?'{| class="article-table" style="width:100%; max-width: 1000px;"\n! width="150px" | Image !! Name !! Ecosystem !! Genus !! Height !! Weight !! Discovered !! Brief description\n'.concat(a.faunaDetails.map(function(a){return"|-\n| [[File:".concat(a.image||"nmsMisc_NotAvailable.png","|150px]]\n| '''").concat(a.name,"'''\n| ").concat(a.ecosystem,"\n| ").concat(a.genus,"\n| ").concat(a.height,"\n| ").concat(a.weight,"\n| ").concat(a.discovered,"\n| ").concat(a.description)}).join(""),"\n|}\n"):"Fauna has not been logged at this time.","\n\n===Flora===\n").concat(0!==a.floraDetails.length||a.floraDetails.image||a.floraDetails.name||a.floraDetails.age||a.floraDetails.roots||a.floraDetails.nutrients||a.floraDetails.elements||a.floraDetails.discovered||a.floraDetails.description?'{| class="article-table" style="width:100%; max-width: 1000px;"\n! width="150px" | Image !! Name !! Age !! Root Structure !! Nutrient Source !! Elements !! Discovered !! Brief description\n'.concat(a.floraDetails.map(function(a){return"|-\n| [[File:".concat(a.image||"nmsMisc_NotAvailable.png","|150px]]\n| '''").concat(a.name,"'''\n| ").concat(a.age,"\n| ").concat(a.roots,"\n| ").concat(a.nutrients,"\n| ").concat(a.elements,"\n| ").concat(a.discovered,"\n| ").concat(a.description)}).join(""),"\n|}"):"Flora has not been logged at this time.","\n\n==Sentinels==\n").concat(a.sentinelDetails,"\n\n==Resources==\n").concat(a.resources.length>0?"The following resources can be found on this planet:\n".concat(a.resources.map(function(a){return"* {{Resource2icon|".concat(a.value,"}} [[").concat(a.value,"]]\n")}).join("")):"","\n==Additional Information==\n").concat(a.additionalInfo,"\n\n==Gallery==\n").concat(a.gallery.length>0?"<gallery>\n".concat(a.gallery.map(function(a){return"".concat(a.name).concat(a.caption?"|".concat(a.caption):"","\n")}).join(""),"</gallery>"):""));return(0,e.jsxs)(l.Z,{code:M,title:"Create A Planet",viewCode:H,closeEditor:function(){return I(!1)},children:[(0,e.jsxs)(h(),{children:[(0,e.jsx)("title",{children:"New Planet | No Man's Sky Wiki Boilerplate Creator"}),(0,e.jsx)("meta",{name:"description",content:"Generate boilerplate markdown code for a new planet. Create a new planet page on the No Man's Sky Fandom wiki with your generated code."})]}),(0,e.jsxs)("div",{className:"frmGroup50",ref:b,children:[(0,e.jsx)(m.Z,{id:"title",type:"text",label:"Planet/Moon Name",onChange:function(a){return L({type:"title",value:a})}}),(0,e.jsx)(m.Z,{id:"defaultTitle",type:"text",label:"Original Procgen Name",onChange:function(a){return L({type:"defaultTitle",value:a})}}),(0,e.jsx)(o.Z,{label:"Planetary Surface Image",maxFiles:1,onUpload:function(a){return L({type:"image",value:a[0].name})}}),(0,e.jsx)(m.Z,{id:"moon",type:"text",label:"Planet`s Moon",tooltip:"Name(s) of the moon(s) orbiting this planet or number of orbiting moons. Leave blank if there are no moons.",onChange:function(a){return L({type:"moon",value:a})}}),(0,e.jsx)(m.Z,{id:"system",type:"text",label:"System Name",onChange:function(a){return L({type:"system",value:a})}}),(0,e.jsx)(m.Z,{id:"region",type:"text",label:"Region Name",tooltip:"Found on the expanded view of the galaxy map.",onChange:function(a){return L({type:"region",value:a})}}),(0,e.jsx)(m.Z,{id:"galaxy",type:"text",label:"Galaxy Name",onChange:function(a){return L({type:"galaxy",value:a})}}),(0,e.jsx)(p.Z,{id:"description",label:"Planet`s Description",config:y.Z,isSearchable:!0,onChange:function(a){return L({type:"description",value:a})}}),(0,e.jsx)(p.Z,{id:"type",label:"Planet`s Biome Type",config:x.Z,isSearchable:!0,onChange:function(a){return L({type:"type",value:a})}}),(0,e.jsx)(m.Z,{id:"atmosphere",type:"text",label:"Atmosphere Make-up",onChange:function(a){return L({type:"atmosphere",value:a})}}),(0,e.jsx)(m.Z,{id:"terrain",type:"text",label:"Terrain",onChange:function(a){return L({type:"terrain",value:a})}}),(0,e.jsx)(p.Z,{id:"weather",label:"Weather",config:z.Z,isSearchable:!0,onChange:function(a){return L({type:"weather",value:a})}}),(0,e.jsx)(q.Z,{id:"resources",label:"Resources",config:C.Z,isSearchable:!0,onChange:function(a){return L({type:"resources",value:a})}}),(0,e.jsx)(p.Z,{id:"sentinels",label:"Sentinels",config:A.Z,isSearchable:!0,onChange:function(a){return L({type:"sentinels",value:a})}}),(0,e.jsx)(p.Z,{id:"flora",label:"Flora",config:B.Z,isSearchable:!0,onChange:function(a){return L({type:"flora",value:a})}}),(0,e.jsx)(p.Z,{id:"fauna",label:"Fauna",config:B.Z,isSearchable:!0,onChange:function(a){return L({type:"fauna",value:a})}}),(0,e.jsx)(p.Z,{id:"garden",label:"Garden World",config:[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],tooltip:"See https://nomanssky.fandom.com/wiki/Garden_World for official definition.",onChange:function(a){return L({type:"garden",value:a})}}),(0,e.jsx)(m.Z,{id:"civilized",type:"text",label:"Civilization Name",onChange:function(a){return L({type:"civ",value:a})}}),(0,e.jsx)(m.Z,{id:"discovered",type:"text",label:"Discoverer in-game username",onChange:function(a){return L({type:"discovered",value:a})}}),(0,e.jsx)(m.Z,{id:"discoveredLink",type:"text",label:"Discoverer wiki username",tooltip:'If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.',onChange:function(a){return L({type:"discoveredLink",value:a})}}),(0,e.jsx)(s.Z,{onChange:function(a){return L({type:"mode",value:a})}}),(0,e.jsx)(p.Z,{id:"bases",label:"Are there, or will there be, bases on this planet?",config:[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],onChange:function(a){return L({type:"bases",value:a})}})]}),(0,e.jsx)(r.Z,{id:"planetType",label:"Planet Type",placeholder:"Describe the planet`s surface (geology, grass and ocean colour, types of flora and fauna etc.)",onChange:function(a){return L({type:"planetType",value:a})}}),(0,e.jsxs)("div",{className:"frmGroup50",children:[(0,e.jsx)(p.Z,{id:"temp",label:"Include surface temperatures?",config:[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],onChange:function(a){return L({type:"temp",value:a})}}),"Yes"===K.temp&&(0,e.jsx)(p.Z,{id:"tempUnit",label:"Temperature Units",config:[{label:"C",value:"C"},{label:"F",value:"F"}],onChange:function(a){return L({type:"tempUnit",value:a})}})]}),"Yes"===K.temp&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h2",{className:E().heading,children:"Environmental Conditions"}),(0,e.jsxs)("div",{className:"frmGroup50",children:[(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"daytemp",type:"number",label:"Daytime",onChange:function(a){return L({type:"daytemp",value:a})}}),(0,e.jsx)(m.Z,{id:"nighttemp",type:"number",label:"Nighttime",onChange:function(a){return L({type:"nighttemp",value:a})}})]}),(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"radnorm",type:"number",label:"Radiation",onChange:function(a){return L({type:"radnorm",value:a})}}),(0,e.jsx)(m.Z,{id:"toxicnorm",type:"number",label:"Toxicity",onChange:function(a){return L({type:"toxicnorm",value:a})}})]}),(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"daystormtemp",type:"number",label:"Daytime Storm",onChange:function(a){return L({type:"daystormtemp",value:a})}}),(0,e.jsx)(m.Z,{id:"nightstormtemp",type:"number",label:"Nighttime Storm",onChange:function(a){return L({type:"nightstormtemp",value:a})}})]}),(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"radstorm",type:"number",label:"Radiation Storm",onChange:function(a){return L({type:"radstorm",value:a})}}),(0,e.jsx)(m.Z,{id:"toxicstorm",type:"number",label:"Toxicity Storm",onChange:function(a){return L({type:"toxicstorm",value:a})}})]}),(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"daycavetemp",type:"number",label:"Daytime",onChange:function(a){return L({type:"daycavetemp",value:a})}}),(0,e.jsx)(m.Z,{id:"nightcavetemp",type:"number",label:"Nighttime",onChange:function(a){return L({type:"nightcavetemp",value:a})}})]}),(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"daystormcavetemp",type:"number",label:"Radiation",onChange:function(a){return L({type:"daystormcavetemp",value:a})}}),(0,e.jsx)(m.Z,{id:"nightstormcavetemp",type:"number",label:"Toxicity",onChange:function(a){return L({type:"nightstormcavetemp",value:a})}})]}),(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"radcave",type:"number",label:"Daytime Storm",onChange:function(a){return L({type:"radcave",value:a})}}),(0,e.jsx)(m.Z,{id:"toxiccave",type:"number",label:"Nighttime Storm",onChange:function(a){return L({type:"toxiccave",value:a})}})]}),(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"cavestormrad",type:"number",label:"Radiation Storm",onChange:function(a){return L({type:"cavestormrad",value:a})}}),(0,e.jsx)(m.Z,{id:"cavestormtoxic",type:"number",label:"Toxicity Storm",onChange:function(a){return L({type:"cavestormtoxic",value:a})}})]}),(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"daywatertemp",type:"number",label:"Daytime",onChange:function(a){return L({type:"daywatertemp",value:a})}}),(0,e.jsx)(m.Z,{id:"nightwatertemp",type:"number",label:"Nighttime",onChange:function(a){return L({type:"nightwatertemp",value:a})}})]}),(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"waterrad",type:"number",label:"Radiation",onChange:function(a){return L({type:"waterrad",value:a})}}),(0,e.jsx)(m.Z,{id:"watertoxic",type:"number",label:"Toxicity",onChange:function(a){return L({type:"watertoxic",value:a})}})]}),(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"daystormwatertemp",type:"number",label:"Daytime Storm",onChange:function(a){return L({type:"daystormwatertemp",value:a})}}),(0,e.jsx)(m.Z,{id:"nightstormwatertemp",type:"number",label:"Nighttime Storm",onChange:function(a){return L({type:"nightstormwatertemp",value:a})}})]}),(0,e.jsxs)("div",{className:"frmGroup50 frmItem",children:[(0,e.jsx)(m.Z,{id:"waterstormrad",type:"number",label:"Radiation Storm",onChange:function(a){return L({type:"waterstormrad",value:a})}}),(0,e.jsx)(m.Z,{id:"waterstormtoxic",type:"number",label:"Toxicity Storm",onChange:function(a){return L({type:"waterstormtoxic",value:a})}})]})]})]}),(0,e.jsx)(n.Z,{noCoords:!0,changeGlyphs:function(a){return L({type:"glyphs",value:a})}}),(0,e.jsx)(r.Z,{id:"moons",label:"Moons",placeholder:"Does this planet have any moons? Leave blank if none.",onChange:function(a){return L({type:"moons",value:a})}}),(0,e.jsx)(t.Z,{details:K.faunaDetails,onChange:function(a,b,c){return L({type:"changeObjInArray",id:"faunaDetails",value:c,index:a,key:b})},deleteFauna:function(a){return L({type:"deleteItemFromArray",id:"faunaDetails",value:a})},addFauna:function(a){return L({type:"addItemToArray",id:"faunaDetails",value:a})}}),(0,e.jsx)(u.Z,{details:K.floraDetails,onChange:function(a,b,c){return L({type:"changeObjInArray",id:"floraDetails",value:c,index:a,key:b})},deleteFlora:function(a){return L({type:"deleteItemFromArray",id:"floraDetails",value:a})},addFlora:function(a){return L({type:"addItemToArray",id:"floraDetails",value:a})}}),(0,e.jsx)(r.Z,{id:"sentinelDetails",label:"Sentinels",placeholder:"Describe the Sentinels behaviour.",onChange:function(a){return L({type:"sentinelDetails",value:a})}}),(0,e.jsx)(r.Z,{id:"additionalInfo",label:"Additional Info",placeholder:"Anything special to note about the planet.",onChange:function(a){return L({type:"additionalInfo",value:a})}}),(0,e.jsx)("div",{className:"frmGroup50",children:(0,e.jsx)(v.Z,{gallery:K.gallery,onUpload:function(a){return L({type:"gallery.upload",value:a})},onChange:function(a,b){return L({type:"gallery.caption",value:a,index:b})}})}),(0,e.jsxs)("div",{className:E().btnContainer,children:[(0,e.jsx)("button",{type:"button",className:"btn ".concat(E().btn),onClick:function(){b.current.scrollIntoView(),I(!0),j.O5("View Code")},children:"View Code"}),(0,e.jsx)("button",{type:"button",className:"btn ".concat(E().btn),onClick:function(){D(M),j.O5("Copy Code"),j.wc(K.civ)},children:g?"Code Copied":"Copy Code"}),(0,e.jsx)("a",{href:"https://nomanssky.fandom.com/wiki/".concat(K.title.replace(/ /g,"_"),"?action=edit"),className:"btn whiteBtn ".concat(E().btn),target:"_blank",rel:"noreferrer",onClick:function(){return j.O5("Create Page")},children:"Create Page"})]}),(0,e.jsx)(w.Z,{type:"planet",title:K.title,parentTitle:K.system})]})}}},function(a){a.O(0,[247,158,999,145,341,774,888,179],function(){var b;return a(a.s=8323)}),_N_E=a.O()}])