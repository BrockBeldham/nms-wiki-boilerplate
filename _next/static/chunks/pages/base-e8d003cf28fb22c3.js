(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{2237:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/base",function(){return c(845)}])},9211:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(5893),e=c(5697),f=c.n(e),g=c(3967),h=c(9501),i=c(5632),j=c.n(i);function k(a){var b=a.gallery,c=a.onUpload,e=a.onChange;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.Z,{label:"Other Images for Gallery",maxFiles:20,onUpload:function(a){return c(a)}}),b.length>0&&(0,d.jsx)("ul",{className:j().galleryList,children:b.map(function(a,b){return(0,d.jsxs)("li",{className:j().galleryListItem,children:[(0,d.jsx)("div",{className:j().galleryImage,style:{backgroundImage:"url(".concat(a.preview,")")}}),(0,d.jsx)(h.Z,{frmItemClass:"frmItemGallery",id:"gallery".concat(b),type:"text",label:"Gallery Caption",onChange:function(a){return e(a,b)}})]},b)})})]})}k.propTypes={gallery:f().array,onUpload:f().func,onChange:f().func}},8494:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(5893),e=c(5697),f=c.n(e),g=c(2283),h=c.n(g);function i(a){var b=a.onChange;return(0,d.jsxs)("div",{className:h().glyphs,children:[(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("0")},children:"0"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("1")},children:"1"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("2")},children:"2"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("3")},children:"3"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("4")},children:"4"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("5")},children:"5"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("6")},children:"6"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("7")},children:"7"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("8")},children:"8"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("9")},children:"9"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("A")},children:"A"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("B")},children:"B"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("C")},children:"C"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("D")},children:"D"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("E")},children:"E"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("F")},children:"F"})]})}i.propTypes={onChange:f().func}},3166:function(a,b,c){"use strict";c.d(b,{Z:function(){return h}});var d=c(5893),e=c(5697),f=c.n(e),g=c(6069);function h(a){var b=a.onChange;return(0,d.jsx)(g.Z,{id:"mode",label:"Which Game Mode",config:[{value:"Normal",label:"Normal"},{value:"Survival",label:"Survival"},{value:"Permadeath",label:"Permadeath"},{value:"Creative",label:"Creative"},{value:"Custom",label:"Custom"}],onChange:function(a){return b(a)}})}h.propTypes={onChange:f().func}},6394:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(5697),g=c.n(f),h=c(5356),i=c.n(h);function j(a){var b=a.frmItemClass,c=a.id,f=a.label,g=a.placeholder,h=a.onChange,j=(0,e.useState)(""),k=j[0],l=j[1];return(0,d.jsxs)("div",{className:"frmItem ".concat(b?i()[b]:""),children:[(0,d.jsx)("label",{htmlFor:c,className:"frmLabel ".concat(k.toString().length>0?"frmLabelShow":""),children:f}),(0,d.jsx)("textarea",{className:i().textarea,id:c,name:c,placeholder:g||f,cols:"30",rows:"10",value:k,onChange:function(a){var b=a.target;l(b.value),h&&h(b.value)}})]})}j.propTypes={frmItemClass:g().string,id:g().oneOfType([g().string,g().number]).isRequired,label:g().string,placeholder:g().string,onChange:g().func},b.Z=j},845:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return G}});var d=c(828),e=c(5893),f=c(7294),g=c(9008),h=c.n(g),i=c(8062),j=c(9424),k=c(2487),l=c(833),m=c(9501),n=c(8494),o=c(3967),p=c(6069),q=c(6394),r=c(9211),s=c(6769),t=c(5697),u=c.n(t),v=c(4999),w=c(255),x=c.n(w),y=c(3419);function z(a){var b=a.onChange,c=(0,f.useState)([]),d=c[0],g=c[1];return(0,e.jsxs)("div",{className:"frmItem",children:[(0,e.jsx)("label",{htmlFor:"features",className:"frmLabel ".concat(d.length>0?"frmLabelShow":""),children:"Features"}),(0,e.jsx)(v.ZP,{className:x().select,styles:y.Z,id:"features",name:"features",placeholder:"Features",options:[{value:"Exocraft Summoning Station",label:"Exocraft Summoning Station"},{value:"Pilgrim Geobay",label:"Pilgrim Geobay"},{value:"Nomad Geobay",label:"Nomad Geobay"},{value:"Roamer Geobay",label:"Roamer Geobay"},{value:"Colossus Geobay",label:"Colossus Geobay"},{value:"Message Module",label:"Message Module"},{value:"Signal Booster",label:"Signal Booster"},{value:"Save Beacon",label:"Save Beacon"},{value:"Save Point",label:"Save Point"},{value:"Communications Station",label:"Communications Station"},{value:"Atmosphere Harvester",label:"Atmosphere Harvester"},{value:"Autonomous Mining Unit",label:"Autonomous Mining Unit"},{value:"Portable Refiner",label:"Portable Refiner"},{value:"Base Computer",label:"Base Computer"},{value:"Oxygen Harvester",label:"Oxygen Harvester"},{value:"Blueprint Analyser",label:"Blueprint Analyser"},{value:"Marine Shelter",label:"Marine Shelter"},{value:"Landing Pad",label:"Landing Pad"},{value:"Base Teleport Module",label:"Base Teleport Module"},{value:"Base Salvage Capsule",label:"Base Salvage Capsule"},{value:"Galactic Trade Terminal",label:"Galactic Trade Terminal"},{value:"Health Station",label:"Health Station"},{value:"Hazard Protection Unit",label:"Hazard Protection Unit"},{value:"Medium Refiner",label:"Medium Refiner"},{value:"Large Refiner",label:"Large Refiner"},{value:"Appearance Modifier",label:"Appearance Modifier"}],onChange:function(a){g(a),b&&b(a)},isMulti:!0})]})}z.propTypes={onChange:u().func};var A=z,B=c(3166);function C(a){var b=a.onChange;return(0,e.jsx)(p.Z,{id:"platform",label:"Which Platform",config:[{value:"",label:"Which Platform"},{value:"PS",label:"PS"},{value:"Xbox",label:"Xbox"},{value:"PC",label:"PC"}],onChange:function(a){return b(a)}})}C.propTypes={onChange:u().func};var D=c(8862),E=c.n(D),F={title:"",image:"",civ:"",builder:"",builderLink:"",galaxy:"",region:"",system:"",planet:"",moon:"",axes:"",glyphs:"",coordinates:"",mode:"",platform:"",farm:"",geobay:"",arena:"",landingpad:"",racetrack:"",terminal:"",layout:"",features:[],additionalInfo:"",gallery:[]};function G(){var a,b=(0,f.useRef)(null),c=(0,d.Z)((0,k.Z)(),2),g=c[0],t=c[1],u=(0,f.useState)(!1),v=u[0],w=u[1],x=(0,f.useReducer)(i.Z,F),y=x[0],z=x[1],D=(a=y,"{{Version|".concat("Waypoint","}}\n{{Base infobox\n| name = ").concat(a.title,"\n| image = ").concat(a.image,"\n| civilized = ").concat(a.civ||"No Man's High Hub","\n| builder = ").concat(a.builderLink?"":a.builder,"\n| builderlink = ").concat(a.builderLink,"\n| galaxy = ").concat(a.galaxy,"\n| region = ").concat(a.region,"\n| system = ").concat(a.system,"\n| planet = ").concat(a.planet,"\n| moon = ").concat(a.moon,"\n| axes = ").concat(a.axes,"\n| coordinates = ").concat(a.coordinates,"\n| portalglyphs = ").concat(a.glyphs?"{{Gl/Small|".concat(a.glyphs,"}}"):"","\n| type = \n| mode = ").concat(a.mode,"\n| platform = ").concat(a.platform,"\n| release = ").concat("Waypoint","\n| farm = ").concat(a.farm,"\n| geobay = ").concat(a.geobay,"\n| arena = ").concat(a.arena,"\n| landingpad = ").concat(a.landingpad,"\n| racetrack = ").concat(a.racetrack,"\n| terminal = ").concat(a.terminal,"\n| censusplayer=\n| censusreddit=\n| censusdiscord=\n| censusfriend = \n| censusarrival=\n| censusrenewal=\n| censusshow=\n}}\n'''").concat(a.title,"''' is a player base.\n\n==Summary==\n'''").concat(a.title,"''' is a [[Habitable Base|player base]], located on the planet [[").concat(a.planet,"]] in the [[").concat(a.system,"]] system.\n\n==Layout==\n").concat(a.layout,"\n\n==Features==\n").concat(a.features.map(function(a){return"* [[".concat(a.value,"]]\n")}).toString().replace(/,/g,""),"\n==Additional Information==\n").concat(a.additionalInfo,"\n\n==Gallery==\n").concat(a.gallery.length>0?"<gallery>\n".concat(a.gallery.map(function(a){return"".concat(a.name).concat(a.caption?"|".concat(a.caption):"","\n")}).toString().replace(/,/g,""),"</gallery>"):""));return(0,e.jsxs)(l.Z,{code:D,title:"Create A New Base",viewCode:v,closeEditor:function(){return w(!1)},children:[(0,e.jsxs)(h(),{children:[(0,e.jsx)("title",{children:"New Base | No Man's Sky Wiki Boilerplate Creator"}),(0,e.jsx)("meta",{name:"description",content:"Generate boilerplate markdown code for a new base. Create a new base page on the No Man's Sky Fandom wiki with your generated code."})]}),(0,e.jsxs)("div",{className:"frmGroup50",ref:b,children:[(0,e.jsx)(m.Z,{id:"title",type:"text",label:"Base Name",onChange:function(a){return z({type:"title",value:a})}}),(0,e.jsx)(m.Z,{id:"civilized",type:"text",label:"Civilization Name",onChange:function(a){return z({type:"civ",value:a})}}),(0,e.jsx)(o.Z,{label:"Image of Base",maxFiles:1,onUpload:function(a){return z({type:"image",value:a[0].name})}}),(0,e.jsx)(m.Z,{id:"builder",type:"text",label:"Builder in-game username",onChange:function(a){return z({type:"builder",value:a})}}),(0,e.jsx)(m.Z,{id:"builderLink",type:"text",label:"Builder wiki username",tooltip:'If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Builder Name.',onChange:function(a){return z({type:"builderLink",value:a})}}),(0,e.jsx)(m.Z,{id:"galaxy",type:"text",label:"Galaxy Name",onChange:function(a){return z({type:"galaxy",value:a})}}),(0,e.jsx)(m.Z,{id:"region",type:"text",label:"Region Name",tooltip:"Found on the expanded view of the galaxy map.",onChange:function(a){return z({type:"region",value:a})}}),(0,e.jsx)(m.Z,{id:"system",type:"text",label:"Star System Name",onChange:function(a){return z({type:"system",value:a})}}),(0,e.jsx)(m.Z,{id:"planet",type:"text",label:"Planet Name",tooltip:"Planet Name OR the planet circled by the moon where the base can be found.",onChange:function(a){return z({type:"planet",value:a})}}),(0,e.jsx)(m.Z,{id:"moon",type:"text",label:"Moon Name",tooltip:"If the base is located on a moon. Leave blank if the base is on a planet.",onChange:function(a){return z({type:"moon",value:a})}}),(0,e.jsx)(m.Z,{id:"axes",type:"text",label:"Planetary Longitude and Latitude",tooltip:"Found using your analysis visor OR on your ships dashboard",onChange:function(a){return z({type:"axes",value:a})}})]}),(0,e.jsx)(m.Z,{id:"glyphs",type:"text",label:"Planetary Glyphs",tooltip:"Found in screenshot mode. Glyphs are specific to each planet.",defaultValue:y.glyphs,onChange:function(a){return z({type:"glyphs",value:a})}}),(0,e.jsx)(n.Z,{onChange:function(a){return z({type:"glyphs.selector",value:a})}}),(0,e.jsxs)("div",{className:"frmGroup50",children:[(0,e.jsx)(m.Z,{id:"coordinates",type:"text",label:"Signal Booster Coordinates",tooltip:"Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/",onChange:function(a){return z({type:"coordinates",value:a})}}),(0,e.jsx)(B.Z,{onChange:function(a){return z({type:"mode",value:a})}}),(0,e.jsx)(C,{onChange:function(a){return z({type:"platform",value:a})}}),(0,e.jsx)(p.Z,{id:"farm",label:"Farm?",config:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],onChange:function(a){return z({type:"farm",value:a})}}),(0,e.jsx)(p.Z,{id:"geobay",label:"Geobay?",config:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],onChange:function(a){return z({type:"geobay",value:a})}}),(0,e.jsx)(p.Z,{id:"arena",label:"Arena?",config:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],onChange:function(a){return z({type:"arena",value:a})}}),(0,e.jsx)(p.Z,{id:"landingpad",label:"Landing Pad?",config:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],onChange:function(a){return z({type:"landingpad",value:a})}}),(0,e.jsx)(p.Z,{id:"racetrack",label:"Racetrack?",config:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],onChange:function(a){return z({type:"racetrack",value:a})}}),(0,e.jsx)(p.Z,{id:"terminal",label:"Trade Terminal?",config:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],onChange:function(a){return z({type:"terminal",value:a})}})]}),(0,e.jsx)(q.Z,{id:"layout",label:"Layout",placeholder:"Walk us through your base as if you were a realtor.",onChange:function(a){return z({type:"layout",value:a})}}),(0,e.jsx)(A,{onChange:function(a){return z({type:"features",value:a})}}),(0,e.jsx)(q.Z,{id:"additionalInfo",label:"Additional Info",placeholder:"Any nearby resources, tourist traps, other bases.",onChange:function(a){return z({type:"additionalInfo",value:a})}}),(0,e.jsx)(r.Z,{gallery:y.gallery,onUpload:function(a){return z({type:"gallery.upload",value:a})},onChange:function(a,b){return z({type:"gallery.caption",value:a,index:b})}}),(0,e.jsxs)("div",{className:E().btnContainer,children:[(0,e.jsx)("button",{type:"button",className:"btn whiteBtn ".concat(E().btn),onClick:function(){b.current.scrollIntoView(),w(!0),j.O5("View Code")},children:"View Code"}),(0,e.jsx)("button",{type:"button",className:"btn whiteBtn ".concat(E().btn),onClick:function(){t(D),j.O5("Copy Code"),j.wc(y.civ)},children:g?"Code Copied":"Copy Code"}),(0,e.jsx)("a",{href:"https://nomanssky.fandom.com/wiki/".concat(y.title.replace(/ /g,"_"),"?action=edit"),className:"btn whiteBtn ".concat(E().btn),target:"_blank",rel:"noreferrer",onClick:function(){return j.O5("Create Page")},children:"Create Page"})]}),(0,e.jsx)(s.Z,{type:y.moon?"moon":"planet",title:y.moon||y.planet,parentTitle:y.system})]})}},255:function(a){a.exports={select:"select-features_select__dOwlO"}},5632:function(a){a.exports={galleryList:"gallery_galleryList__73tJM",galleryListItem:"gallery_galleryListItem__bMQl2",galleryImage:"gallery_galleryImage__58PmZ"}},2283:function(a){a.exports={glyphs:"glyphs_glyphs__r2ed_",glyphBtn:"glyphs_glyphBtn__VgPl_"}},5356:function(a){a.exports={textarea:"textarea_textarea__YdMu4"}}},function(a){a.O(0,[247,599,999,774,888,179],function(){var b;return a(a.s=2237)}),_N_E=a.O()}])