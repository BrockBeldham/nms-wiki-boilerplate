(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{7831:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/multitool",function(){return c(6480)}])},9211:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(5893),e=c(5697),f=c.n(e),g=c(3967),h=c(9501),i=c(5632),j=c.n(i);function k(a){var b=a.gallery,c=a.onUpload,e=a.onChange;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.Z,{label:"Other Images for Gallery",maxFiles:20,onUpload:function(a){return c(a)}}),b.length>0&&(0,d.jsx)("ul",{className:j().galleryList,children:b.map(function(a,b){return(0,d.jsxs)("li",{className:j().galleryListItem,children:[(0,d.jsx)("div",{className:j().galleryImage,style:{backgroundImage:"url(".concat(a.preview,")")}}),(0,d.jsx)(h.Z,{frmItemClass:"frmItemGallery",id:"gallery".concat(b),type:"text",label:"Gallery Caption",onChange:function(a){return e(a,b)}})]},b)})})]})}k.propTypes={gallery:f().array,onUpload:f().func,onChange:f().func}},8494:function(a,b,c){"use strict";c.d(b,{Z:function(){return l}});var d=c(828),e=c(5893),f=c(7294),g=c(5697),h=c.n(g),i=c(9501),j=c(2283),k=c.n(j);function l(a){var b=a.changeCoords,c=a.noCoords,g=a.changeGlyphs,h=(0,f.useState)(""),j=h[0],l=h[1],m=(0,f.useState)(""),n=m[0],o=m[1],p=function(a){var b=a.replace(/\s/g,""),c=b.toUpperCase(),e=c.replace(/[^a-fA-F0-9:]+/,""),f=b.split(":").join(""),h=(0,d.Z)(b.split(":"),4),i=h[0],j=h[1],k=h[2],m=h[3];if(c!==e||16!==f.length||!i||!j||!k||!m||parseInt(i,16)>4096||0>parseInt(i,16)||parseInt(j,16)>255||0>parseInt(j,16)||parseInt(k,16)>4096||0>parseInt(k,16)||parseInt(m,16)>767||0>parseInt(m,16))return!1;var n=q(i),o=r(j),p=s(k),t=m.slice(1),u="1".concat(t).concat(o).concat(p).concat(n);l(u),g(u)},q=function(a){return(a=(a=Math.abs((parseInt(a,16)+2049)%4096)).toString(16).toUpperCase()).padStart(3,"0")},r=function(a){return(a=(a=Math.abs((parseInt(a,16)+129)%256)).toString(16).toUpperCase()).padStart(2,"0")},s=function(a){return(a=(a=Math.abs((parseInt(a,16)+2049)%4096)).toString(16).toUpperCase()).padStart(3,"0")},t=function(a){var c=a.replace(/\s/g,""),e=c.toUpperCase(),f=e.replace(/[^a-fA-F0-9:]+/,""),g=c.replace(/(\S{1})(\S{3})(\S{2})(\S{3})(\S{3})/g,"$1:$2:$3:$4:$5"),h=(0,d.Z)(g.split(":"),5),i=h[0],j=h[1],k=h[2],l=h[3],m=h[4];if(e!==f||12!==c.length||!i||!j||!k||!l||!m||parseInt(j,16)>767)return!1;var n=j.padStart(4,"0"),p=u(k),q=v(l),r=w(m),s="".concat(r,":").concat(p,":").concat(q,":").concat(n);o(s),b(s)},u=function(a){return(a=(a=Math.abs((parseInt(a,16)+127)%256).toString(16).toUpperCase()).toString(16).toUpperCase()).padStart(4,"0")},v=function(a){return(a=(a=Math.abs((parseInt(a,16)+2047)%4096)).toString(16).toUpperCase()).padStart(4,"0")},w=function(a){return(a=(a=Math.abs((parseInt(a,16)+2047)%4096)).toString(16).toUpperCase()).padStart(4,"0")};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"frmGroup50",children:[!c&&(0,e.jsx)(i.Z,{id:"coordinates",type:"text",label:"Signal Booster Coordinates",tooltip:(0,e.jsxs)("p",{children:["Found using a signal booster OR convert glyphs here: ",(0,e.jsx)("a",{href:"https://nmsportals.github.io/",target:"_blank",rel:"noreferrer",children:"https://nmsportals.github.io/"})]}),defaultValue:n,onChange:function(a){p(a),b(a)}}),(0,e.jsx)(i.Z,{id:"glyphs",type:"text",label:"Planetary Glyphs",tooltip:"Found in screenshot mode. Glyphs are specific to each planet.",defaultValue:j,onChange:function(a){c||t(a),g(a)}})]}),(0,e.jsxs)("div",{className:k().glyphs,children:[(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"0")})},children:"0"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"1")})},children:"1"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"2")})},children:"2"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"3")})},children:"3"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"4")})},children:"4"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"5")})},children:"5"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"6")})},children:"6"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"7")})},children:"7"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"8")})},children:"8"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"9")})},children:"9"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"A")})},children:"A"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"B")})},children:"B"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"C")})},children:"C"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"D")})},children:"D"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"E")})},children:"E"}),(0,e.jsx)("button",{type:"button",className:k().glyphBtn,onClick:function(){return l(function(a){return"".concat(a,"F")})},children:"F"})]})]})}l.propTypes={changeCoords:h().func,noCoords:h().bool,changeGlyphs:h().func}},3166:function(a,b,c){"use strict";c.d(b,{Z:function(){return h}});var d=c(5893),e=c(5697),f=c.n(e),g=c(6069);function h(a){var b=a.onChange;return(0,d.jsx)(g.Z,{id:"mode",label:"Which Game Mode",config:[{value:"Normal",label:"Normal"},{value:"Survival",label:"Survival"},{value:"Permadeath",label:"Permadeath"},{value:"Creative",label:"Creative"},{value:"Custom",label:"Custom"}],onChange:function(a){return b(a)}})}h.propTypes={onChange:f().func}},6394:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(5697),g=c.n(f),h=c(5356),i=c.n(h);function j(a){var b=a.frmItemClass,c=a.id,f=a.label,g=a.placeholder,h=a.onChange,j=(0,e.useState)(""),k=j[0],l=j[1];return(0,d.jsxs)("div",{className:"frmItem ".concat(b?i()[b]:""),children:[(0,d.jsx)("label",{htmlFor:c,className:"frmLabel ".concat(k.toString().length>0?"frmLabelShow":""),children:f}),(0,d.jsx)("textarea",{className:i().textarea,id:c,name:c,placeholder:g||f,cols:"30",rows:"10",value:k,onChange:function(a){var b=a.target;l(b.value),h&&h(b.value)}})]})}j.propTypes={frmItemClass:g().string,id:g().oneOfType([g().string,g().number]).isRequired,label:g().string,placeholder:g().string,onChange:g().func},b.Z=j},6480:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return x}});var d=c(828),e=c(5893),f=c(7294),g=c(9008),h=c.n(g),i=c(8062),j=c(9424),k=c(2487),l=c(833),m=c(9501),n=c(8494),o=c(3967),p=c(6069),q=c(6394),r=c(9211),s=c(3166),t=c(6769),u=c(8862),v=c.n(u),w={title:"",image:"",galaxy:"",region:"",system:"",planet:"",moon:"",location:"",axes:"",coordinates:"",glyphs:"",type:"",crystals:"",horns:"",glowtubes:"",mtClass:"",slots:"",cost:"",civ:"",discovered:"",discoveredLink:"",mode:"",appearance:"",damage:"",scanner:"",acquirement:"",additionalInfo:"",gallery:[]};function x(){var a,b=(0,f.useRef)(null),c=(0,d.Z)((0,k.Z)(),2),g=c[0],u=c[1],x=(0,f.useState)(!1),y=x[0],z=x[1],A=(0,f.useReducer)(i.Z,w),B=A[0],C=A[1],D=(a=B,"{{Version|".concat("Echoes","}}\n{{Multitool infobox\n| name = ").concat(a.title,"\n| image = ").concat(a.image||"nmsMisc_NotAvailable.png","\n| galaxy = ").concat(a.galaxy,"\n| region = ").concat(a.region,"\n| system = ").concat(a.system,"\n| planet = ").concat(a.planet,"\n| moon = ").concat(a.moon,"\n| location = ").concat(a.location,"\n| axes = ").concat(a.axes,"\n| coordinates = ").concat(a.coordinates,"\n| portalglyphs = ").concat(a.glyphs,"\n| type = ").concat(a.type,"\n| crystals = ").concat(a.crystals,"\n| horns = ").concat(a.horns,"\n| glowtubes = ").concat(a.glowtubes,"\n| class = ").concat(a.mtClass,"\n| slots = ").concat(a.slots,"\n| cost = ").concat(a.cost,"\n| civilized = ").concat(a.civ,"\n| discovered = ").concat(a.discovered,"\n| discoveredlink = ").concat(a.discoveredLink,"\n| mode = ").concat(a.mode,"\n| release = ").concat("Echoes","\n}}\n'''").concat(a.title,"''' is a multi-tool.\n\n==Summary==\n'''").concat(a.title,"''' is a").concat(["Alien","Experimental"].includes(a.type)?"n":""," [[Starship Catalogue - ").concat(a.type,"|").concat(a.type," multi-tool]].\n\n==Appearance==\n").concat(a.appearance,"\n\n==Location==\nA").concat(["A","S"].includes(a.mtClass)?"n":""," {{class|").concat(a.mtClass,"}} class version of this multi-tool was found in the [[").concat(a.system,"]] system, located in the [[").concat(a.region,"]].\n\n===Coordinates===\n").concat(a.coordinates?"{{coords|".concat(a.coordinates.split(":")[0]?a.coordinates.split(":")[0]:"XXXX","|").concat(a.coordinates.split(":")[1]?a.coordinates.split(":")[1]:"XXXX","|").concat(a.coordinates.split(":")[2]?a.coordinates.split(":")[2]:"XXXX","|").concat(a.coordinates.split(":")[3]?a.coordinates.split(":")[3]:"XXXX","}}"):"","\n\n===Glyphs===").concat(a.glyphs?"\n{{Gl|".concat(a.glyphs,"}}"):"","\n\n==Stats==\nThe {{class|").concat(a.mtClass,"}} class version of this weapon has the following bonus stats:\n* '''Damage Potential''': ").concat(a.damage,"\n* '''Scanner Range''': ").concat(a.scanner,"\n\n==Acquirement==\n").concat(a.acquirement,"\n\n==Additional Information==\n").concat(a.additionalInfo,"\n\n==Gallery==\n").concat(a.gallery.length>0?"<gallery>\n".concat(a.gallery.map(function(a){return"".concat(a.name).concat(a.caption?"|".concat(a.caption):"","\n")}).toString().replace(/,/g,""),"</gallery>"):""));return(0,e.jsxs)(l.Z,{code:D,title:"Create A New Multi-tool",viewCode:y,closeEditor:function(){return z(!1)},children:[(0,e.jsxs)(h(),{children:[(0,e.jsx)("title",{children:"New Multi-tool | No Man's Sky Wiki Boilerplate Creator"}),(0,e.jsx)("meta",{name:"description",content:"Generate boilerplate markdown code for a new multi-tool. Create a new multi-tool page on the No Man's Sky Fandom wiki with your generated code."})]}),(0,e.jsxs)("div",{className:"frmGroup50",ref:b,children:[(0,e.jsx)(m.Z,{id:"title",type:"text",label:"Multi-tool Name",onChange:function(a){return C({type:"title",value:a})}}),(0,e.jsx)(o.Z,{label:"Image of Base",maxFiles:1,onUpload:function(a){return C({type:"image",value:a[0].name})}}),(0,e.jsx)(m.Z,{id:"galaxy",type:"text",label:"Galaxy Name",onChange:function(a){return C({type:"galaxy",value:a})}}),(0,e.jsx)(m.Z,{id:"region",type:"text",label:"Region Name",tooltip:"Found on the expanded view of the galaxy map.",onChange:function(a){return C({type:"region",value:a})}}),(0,e.jsx)(m.Z,{id:"system",type:"text",label:"Star System Name",onChange:function(a){return C({type:"system",value:a})}}),(0,e.jsx)(m.Z,{id:"planet",type:"text",label:"Planet Name",tooltip:"Planet Name OR the planet circled by the moon where the multi-tool can be found.",onChange:function(a){return C({type:"planet",value:a})}}),(0,e.jsx)(m.Z,{id:"moon",type:"text",label:"Moon Name",tooltip:"If the starship is located on a moon. Leave blank if the starship is on a planet.",onChange:function(a){return C({type:"moon",value:a})}}),(0,e.jsx)(p.Z,{id:"location",label:"Location",config:[{label:"Trading Post",value:"Trading Post"},{label:"Space Station",value:"Space Station"},{label:"Space Anomaly",value:"Space Anomaly"}],onChange:function(a){return C({type:"location",value:a})}}),(0,e.jsx)(m.Z,{id:"axes",type:"text",label:"Planetary Longitude and Latitude",tooltip:"Found using your analysis visor OR on your ships dashboard",onChange:function(a){return C({type:"axes",value:a})}})]}),(0,e.jsx)(n.Z,{changeCoords:function(a){return C({type:"coordinates",value:a})},changeGlyphs:function(a){return C({type:"glyphs",value:a})}}),(0,e.jsxs)("div",{className:"frmGroup50",children:[(0,e.jsx)(p.Z,{id:"type",label:"Ship Type",config:[{label:"Alien",value:"Alien"},{label:"Experimental",value:"Experimental"},{label:"Pistol",value:"Pistol"},{label:"Rifle",value:"Rifle"}],isSearchable:!0,onChange:function(a){return C({type:"type",value:a})}}),(0,e.jsx)(m.Z,{id:"slots",type:"text",label:"Slots",onChange:function(a){return C({type:"slots",value:a})}}),(0,e.jsx)(p.Z,{id:"crystals",label:"Crystals",config:[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],tooltip:"Does the multitool have crystals?",onChange:function(a){return C({type:"crystals",value:a})}}),(0,e.jsx)(p.Z,{id:"horns",label:"Horns",config:[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],tooltip:"Does the multitool have horns?",onChange:function(a){return C({type:"horns",value:a})}}),(0,e.jsx)(p.Z,{id:"tubes",label:"Glow Tubes",config:[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],tooltip:"Does the multitool have glow tubes?",onChange:function(a){return C({type:"tubes",value:a})}}),(0,e.jsx)(p.Z,{id:"class",label:"Class",config:[{value:"C",label:"C"},{value:"B",label:"B"},{value:"A",label:"A"},{value:"S",label:"S"}],isSearchable:!0,onChange:function(a){return C({type:"class",value:a})}}),(0,e.jsx)(m.Z,{id:"slots",type:"text",label:"Slots",onChange:function(a){return C({type:"slots",value:a})}}),(0,e.jsx)(m.Z,{id:"cost",type:"text",label:"Cost",onChange:function(a){return C({type:"cost",value:a})}}),(0,e.jsx)(m.Z,{id:"civilized",type:"text",label:"Civilization Name",onChange:function(a){return C({type:"civ",value:a})}}),(0,e.jsx)(m.Z,{id:"discovered",type:"text",label:"Discoverer in-game username",onChange:function(a){return C({type:"discovered",value:a})}}),(0,e.jsx)(m.Z,{id:"discoveredLink",type:"text",label:"Discoverer wiki username",tooltip:'If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.',onChange:function(a){return C({type:"discoveredLink",value:a})}}),(0,e.jsx)(s.Z,{onChange:function(a){return C({type:"mode",value:a})}})]}),(0,e.jsx)(q.Z,{id:"appearance",label:"Appearance",placeholder:"Describe what the multi-tool looks like.",onChange:function(a){return C({type:"appearance",value:a})}}),(0,e.jsxs)("div",{className:"frmGroup50",children:[(0,e.jsx)(m.Z,{id:"damage",type:"text",label:"Damage Potential",onChange:function(a){return C({type:"damage",value:a})}}),(0,e.jsx)(m.Z,{id:"scanner",type:"text",label:"Scanner Range",onChange:function(a){return C({type:"scanner",value:a})}})]}),(0,e.jsx)(q.Z,{id:"acquirement",label:"Acquirement",placeholder:"Any special directions to acquire this multi-tool.",onChange:function(a){return C({type:"acquirement",value:a})}}),(0,e.jsx)(q.Z,{id:"additionalInfo",label:"Additional Info",placeholder:"Anything special to note about the multi-tool.",onChange:function(a){return C({type:"additionalInfo",value:a})}}),(0,e.jsx)(r.Z,{gallery:B.gallery,onUpload:function(a){return C({type:"gallery.upload",value:a})},onChange:function(a,b){return C({type:"gallery.caption",value:a,index:b})}}),(0,e.jsxs)("div",{className:v().btnContainer,children:[(0,e.jsx)("button",{type:"button",className:"btn whiteBtn ".concat(v().btn),onClick:function(){b.current.scrollIntoView(),z(!0),j.B("click","View Multitool Code",window.innerWidth<800?"Popup":"ScrollTo")},children:"View Code"}),(0,e.jsx)("button",{type:"button",className:"btn whiteBtn ".concat(v().btn),onClick:function(){u(D),j.B("click","Copy Multitool",B.civ)},children:g?"Code Copied":"Copy Code"}),(0,e.jsx)("a",{href:"https://nomanssky.fandom.com/wiki/".concat(B.title.replace(/ /g,"_"),"?action=edit"),className:"btn whiteBtn ".concat(v().btn),target:"_blank",rel:"noreferrer",onClick:function(){return j.B("click","Create Multitool",B.civ)},children:"Create Page"})]}),(0,e.jsx)(t.Z,{type:"system",title:B.system,parentTitle:B.region})]})}},5632:function(a){a.exports={galleryList:"gallery_galleryList__73tJM",galleryListItem:"gallery_galleryListItem__bMQl2",galleryImage:"gallery_galleryImage__58PmZ"}},2283:function(a){a.exports={glyphs:"glyphs_glyphs__r2ed_",glyphBtn:"glyphs_glyphBtn__VgPl_"}},5356:function(a){a.exports={textarea:"textarea_textarea__YdMu4"}}},function(a){a.O(0,[247,158,999,774,888,179],function(){var b;return a(a.s=7831)}),_N_E=a.O()}])