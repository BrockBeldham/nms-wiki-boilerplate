(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{7831:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/multitool",function(){return c(1842)}])},9211:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(5893),e=c(5697),f=c.n(e),g=c(3967),h=c(9501),i=c(5632),j=c.n(i);function k(a){var b=a.gallery,c=a.onUpload,e=a.onChange;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.Z,{label:"Other Images for Gallery",maxFiles:20,onUpload:function(a){return c(a)}}),b.length>0&&(0,d.jsx)("ul",{className:j().galleryList,children:b.map(function(a,b){return(0,d.jsxs)("li",{className:j().galleryListItem,children:[(0,d.jsx)("div",{className:j().galleryImage,style:{backgroundImage:"url(".concat(a.preview,")")}}),(0,d.jsx)(h.Z,{frmItemClass:"frmItemGallery",id:"gallery".concat(b),type:"text",label:"Gallery Caption",onChange:function(a){return e(a,b)}})]},b)})})]})}k.propTypes={gallery:f().array,onUpload:f().func,onChange:f().func}},8494:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(5893),e=c(5697),f=c.n(e),g=c(2283),h=c.n(g);function i(a){var b=a.onChange;return(0,d.jsxs)("div",{className:h().glyphs,children:[(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("0")},children:"0"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("1")},children:"1"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("2")},children:"2"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("3")},children:"3"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("4")},children:"4"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("5")},children:"5"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("6")},children:"6"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("7")},children:"7"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("8")},children:"8"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("9")},children:"9"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("A")},children:"A"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("B")},children:"B"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("C")},children:"C"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("D")},children:"D"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("E")},children:"E"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("F")},children:"F"})]})}i.propTypes={onChange:f().func}},3166:function(a,b,c){"use strict";c.d(b,{Z:function(){return h}});var d=c(5893),e=c(5697),f=c.n(e),g=c(6069);function h(a){var b=a.onChange;return(0,d.jsx)(g.Z,{id:"mode",label:"Which Game Mode",config:[{value:"Normal",label:"Normal"},{value:"Survival",label:"Survival"},{value:"Permadeath",label:"Permadeath"},{value:"Creative",label:"Creative"},{value:"Custom",label:"Custom"}],onChange:function(a){return b(a)}})}h.propTypes={onChange:f().func}},6394:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(5697),g=c.n(f),h=c(5356),i=c.n(h);function j(a){var b=a.frmItemClass,c=a.id,f=a.label,g=a.placeholder,h=a.onChange,j=(0,e.useState)(""),k=j[0],l=j[1];return(0,d.jsxs)("div",{className:"frmItem ".concat(b?i()[b]:""),children:[(0,d.jsx)("label",{htmlFor:c,className:"frmLabel ".concat(k.toString().length>0?"frmLabelShow":""),children:f}),(0,d.jsx)("textarea",{className:i().textarea,id:c,name:c,placeholder:g||f,cols:"30",rows:"10",value:k,onChange:function(a){var b=a.target;l(b.value),h&&h(b.value)}})]})}j.propTypes={frmItemClass:g().string,id:g().oneOfType([g().string,g().number]).isRequired,label:g().string,placeholder:g().string,onChange:g().func},b.Z=j},1842:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return s}});var d=c(5893),e=c(7294),f=c(9008),g=c.n(f),h=c(833),i=c(9501),j=c(8494),k=c(3967),l=c(6069),m=c(6394),n=c(9211),o=c(3166),p=c(6769),q=c(8862),r=c.n(q);function s(){var a=(0,e.useRef)(null),b=(0,e.useState)(!1),c=b[0],f=b[1],q=(0,e.useState)(!1),s=q[0],t=q[1],u=(0,e.useState)(""),v=u[0],w=u[1],x=(0,e.useState)(""),y=x[0],z=x[1],A=(0,e.useState)(""),B=A[0],C=A[1],D=(0,e.useState)(""),E=D[0],F=D[1],G=(0,e.useState)(""),H=G[0],I=G[1],J=(0,e.useState)(""),K=J[0],L=J[1],M=(0,e.useState)(""),N=M[0],O=M[1],P=(0,e.useState)(""),Q=P[0],R=P[1],S=(0,e.useState)(""),T=S[0],U=S[1],V=(0,e.useState)(""),W=V[0],X=V[1],Y=(0,e.useState)(""),Z=Y[0],$=Y[1],_=(0,e.useState)(""),aa=_[0],ab=_[1],ac=(0,e.useState)(""),ad=ac[0],ae=ac[1],af=(0,e.useState)(""),ag=af[0],ah=af[1],ai=(0,e.useState)(""),aj=ai[0],ak=ai[1],al=(0,e.useState)(""),am=al[0],an=al[1],ao=(0,e.useState)(""),ap=ao[0],aq=ao[1],ar=(0,e.useState)(""),as=ar[0],at=ar[1],au=(0,e.useState)(""),av=au[0],aw=au[1],ax=(0,e.useState)(""),ay=ax[0],az=ax[1],aA=(0,e.useState)(""),aB=aA[0],aC=aA[1],aD=(0,e.useState)(""),aE=aD[0],aF=aD[1],aG=(0,e.useState)(""),aH=aG[0],aI=aG[1],aJ=(0,e.useState)(""),aK=aJ[0],aL=aJ[1],aM=(0,e.useState)(""),aN=aM[0],aO=aM[1],aP=(0,e.useState)(""),aQ=aP[0],aR=aP[1],aS=(0,e.useState)(""),aT=aS[0],aU=aS[1],aV=(0,e.useState)([]),aW=aV[0],aX=aV[1],aY="{{Version|".concat("Waypoint","}}\n{{Multitool infobox\n| name = ").concat(v,"\n| image = ").concat(y,"\n| galaxy = ").concat(B,"\n| region = ").concat(E,"\n| system = ").concat(H,"\n| planet = ").concat(K,"\n| moon = ").concat(N,"\n| location = ").concat(Q,"\n| axes = ").concat(T,"\n| coordinates = ").concat(W,"\n| portalglyphs = ").concat(Z,"\n| type = ").concat(aa,"\n| crystals = ").concat(ad,"\n| horns = ").concat(ag,"\n| glowtubes = ").concat(aj,"\n| class = ").concat(am,"\n| slots = ").concat(ap,"\n| cost = ").concat(as,"\n| civilized = ").concat(av,"\n| discovered = ").concat(ay,"\n| discoveredlink = ").concat(aB,"\n| mode = ").concat(aE,"\n| release = ").concat("Waypoint","\n}}\n'''").concat(v,"''' is a multi-tool.\n\n==Summary==\n'''").concat(v,"''' is a").concat(["Alien","Experimental"].includes(aa)?"n":""," [[Starship Catalogue - ").concat(aa,"|").concat(aa," multi-tool]].\n\n==Appearance==\n").concat(aH,"\n\n==Location==\nA").concat(["A","S"].includes(am)?"n":""," {{class|").concat(am,"}} class version of this multi-tool was found in the [[").concat(H,"]] system, located in the [[").concat(E,"]].\n\n===Coordinates===\n").concat(W?"{{coords|".concat(W.split(":")[0]?W.split(":")[0]:"XXXX","|").concat(W.split(":")[1]?W.split(":")[1]:"XXXX","|").concat(W.split(":")[2]?W.split(":")[2]:"XXXX","|").concat(W.split(":")[3]?W.split(":")[3]:"XXXX","}}"):"","\n\n===Glyphs===\n{{Gl|").concat(Z,"}}\n\n==Stats==\nThe {{class|").concat(am,"}} class version of this weapon has the following bonus stats:\n* '''Damage Potential''': ").concat(aK,"\n* '''Scanner Range''': ").concat(aN,"\n\n==Acquirement==\n").concat(aQ,"\n\n==Additional information==\n").concat(aT,"\n\n==Gallery==\n").concat(aW.length>0?"<gallery>\n".concat(aW.map(function(a){return"".concat(a.name).concat(a.caption?"|".concat(a.caption):"","\n")}).toString().replace(/,/g,""),"</gallery>"):""),aZ=function(){navigator.clipboard.writeText(aY),f(!0),setTimeout(function(){f(!1)},3e3)};return(0,d.jsxs)(h.Z,{code:aY,title:"Create A New Multi-tool",viewCode:s,closeEditor:function(){return t(!1)},children:[(0,d.jsxs)(g(),{children:[(0,d.jsx)("title",{children:"New Multi-tool | No Man's Sky Wiki Boilerplate Creator"}),(0,d.jsx)("meta",{name:"description",content:"Generate boilerplate markdown code for a new multi-tool. Create a new multi-tool page on the No Man's Sky Fandom wiki with your generated code."})]}),(0,d.jsxs)("div",{className:"frmGroup50",ref:a,children:[(0,d.jsx)(i.Z,{id:"title",type:"text",label:"Multi-tool Name",onChange:function(a){return w(a)}}),(0,d.jsx)(k.Z,{label:"Image of Base",maxFiles:1,onUpload:function(a){return z(a[0].name)}}),(0,d.jsx)(i.Z,{id:"galaxy",type:"text",label:"Galaxy Name",onChange:function(a){return C(a)}}),(0,d.jsx)(i.Z,{id:"region",type:"text",label:"Region Name",tooltip:"Found on the expanded view of the galaxy map.",onChange:function(a){return F(a)}}),(0,d.jsx)(i.Z,{id:"system",type:"text",label:"Star System Name",onChange:function(a){return I(a)}}),(0,d.jsx)(i.Z,{id:"planet",type:"text",label:"Planet Name",tooltip:"Planet Name OR the planet circled by the moon where the multi-tool can be found.",onChange:function(a){return L(a)}}),(0,d.jsx)(i.Z,{id:"moon",type:"text",label:"Moon Name",tooltip:"If the starship is located on a moon. Leave blank if the starship is on a planet.",onChange:function(a){return O(a)}}),(0,d.jsx)(l.Z,{id:"location",label:"Location",config:[{label:"Trading Post",value:"Trading Post"},{label:"Space Station",value:"Space Station"},{label:"Space Anomaly",value:"Space Anomaly"}],onChange:function(a){return R(a)}}),(0,d.jsx)(i.Z,{id:"axes",type:"text",label:"Planetary Longitude and Latitude",tooltip:"Found using your analysis visor OR on your ships dashboard",onChange:function(a){return U(a)}})]}),(0,d.jsx)(i.Z,{id:"glyphs",type:"text",label:"Planetary Glyphs",tooltip:"Found in screenshot mode. Glyphs are specific to each planet.",defaultValue:Z,onChange:function(a){return $(a)}}),(0,d.jsx)(j.Z,{onChange:function(a){return $(Z+a)}}),(0,d.jsxs)("div",{className:"frmGroup50",children:[(0,d.jsx)(l.Z,{id:"type",label:"Ship Type",config:[{label:"Alien",value:"Alien"},{label:"Experimental",value:"Experimental"},{label:"Pistol",value:"Pistol"},{label:"Rifle",value:"Rifle"}],isSearchable:!0,onChange:function(a){return ab(a)}}),(0,d.jsx)(i.Z,{id:"slots",type:"text",label:"Slots",onChange:function(a){return aq(a)}}),(0,d.jsx)(l.Z,{id:"crystals",label:"Crystals",config:[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],tooltip:"Does the multitool have crystals?",onChange:function(a){return ae(a)}}),(0,d.jsx)(l.Z,{id:"horns",label:"Horns",config:[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],tooltip:"Does the multitool have horns?",onChange:function(a){return ah(a)}}),(0,d.jsx)(l.Z,{id:"tubes",label:"Glow Tubes",config:[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],tooltip:"Does the multitool have glow tubes?",onChange:function(a){return ak(a)}}),(0,d.jsx)(l.Z,{id:"class",label:"Class",config:[{value:"C",label:"C"},{value:"B",label:"B"},{value:"A",label:"A"},{value:"S",label:"S"}],isSearchable:!0,onChange:function(a){return an(a)}}),(0,d.jsx)(i.Z,{id:"slots",type:"text",label:"Slots",onChange:function(a){return aq(a)}}),(0,d.jsx)(i.Z,{id:"cost",type:"text",label:"Cost",onChange:function(a){return at(a)}}),(0,d.jsx)(i.Z,{id:"coordinates",type:"text",label:"Signal Booster Coordinates",tooltip:"Found using a signal booster OR convert glyphs here: https://nmsportals.github.io/",onChange:function(a){return X(a)}}),(0,d.jsx)(i.Z,{id:"civilized",type:"text",label:"Civilization Name",onChange:function(a){return aw(a)}}),(0,d.jsx)(i.Z,{id:"discovered",type:"text",label:"Discoverer in-game username",onChange:function(a){return az(a)}}),(0,d.jsx)(i.Z,{id:"discoveredLink",type:"text",label:"Discoverer wiki username",tooltip:'If a wiki username is filled, the code will link the base to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.',onChange:function(a){return aC(a)}}),(0,d.jsx)(o.Z,{onChange:function(a){return aF(a)}})]}),(0,d.jsx)(m.Z,{id:"appearance",label:"Appearance",placeholder:"Describe what the multi-tool looks like.",onChange:function(a){return aI(a)}}),(0,d.jsxs)("div",{className:"frmGroup50",children:[(0,d.jsx)(i.Z,{id:"damage",type:"text",label:"Damage Potential",onChange:function(a){return aL(a)}}),(0,d.jsx)(i.Z,{id:"scanner",type:"text",label:"Scanner Range",onChange:function(a){return aO(a)}})]}),(0,d.jsx)(m.Z,{id:"acquirement",label:"Acquirement",placeholder:"Any special directions to acquire this multi-tool.",onChange:function(a){return aR(a)}}),(0,d.jsx)(m.Z,{id:"additionalInfo",label:"Additional Info",placeholder:"Anything special to note about the multi-tool.",onChange:function(a){return aU(a)}}),(0,d.jsx)(n.Z,{gallery:aW,onUpload:function(a){return aX(a)},onChange:function(a,b){aX(function(c){return c.map(function(c,d){return b===d?{path:c.path,preview:c.preview,name:c.name,caption:a}:c})})}}),(0,d.jsxs)("div",{className:r().btnContainer,children:[(0,d.jsx)("button",{type:"button",className:"btn whiteBtn ".concat(r().btn),onClick:function(){a.current.scrollIntoView(),t(!0)},children:"View Code"}),(0,d.jsx)("button",{type:"button",className:"btn whiteBtn ".concat(r().btn),onClick:function(){return aZ()},children:c?"Code Copied":"Copy Code"}),(0,d.jsx)("a",{href:"https://nomanssky.fandom.com/wiki/".concat(v.replace(/ /g,"_"),"?action=edit"),className:"btn whiteBtn ".concat(r().btn),target:"_blank",rel:"noreferrer",children:"Create Page"})]}),(0,d.jsx)(p.Z,{type:"system",title:H,parentTitle:E})]})}},5632:function(a){a.exports={galleryList:"gallery_galleryList__73tJM",galleryListItem:"gallery_galleryListItem__bMQl2",galleryImage:"gallery_galleryImage__58PmZ"}},2283:function(a){a.exports={glyphs:"glyphs_glyphs__r2ed_",glyphBtn:"glyphs_glyphBtn__VgPl_"}},5356:function(a){a.exports={textarea:"textarea_textarea__YdMu4"}}},function(a){a.O(0,[247,299,471,774,888,179],function(){var b;return a(a.s=7831)}),_N_E=a.O()}])