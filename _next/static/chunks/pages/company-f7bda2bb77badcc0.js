(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{3326:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/company",function(){return c(1680)}])},7898:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(5893),e=c(5697),f=c.n(e),g=c(9501),h=c(6069),i=c(3108),j=c.n(i);function k(a){var b=a.details,c=a.onChange,e=a.deleteMember;return(0,d.jsx)("div",{className:j().container,children:b.map(function(a,b){return(0,d.jsxs)("div",{className:"frmGroup50 ".concat(j().member),children:[(0,d.jsxs)("h2",{className:j().title,children:["Member ",b+1]}),b>0&&(0,d.jsx)("button",{className:"icon ".concat(j().deleteMember),onClick:function(){return e(b)},children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:(0,d.jsx)("use",{href:"#svgClose"})})}),(0,d.jsx)(g.Z,{defaultValue:a.name,id:"nameMember_".concat(b),type:"text",label:"Name",onChange:function(a){return c(b,"name",a)}}),(0,d.jsx)(h.Z,{defaultValue:a.platform,id:"platformMember_".concat(b),label:"Platform",config:[{value:"PC",label:"PC"},{value:"PS",label:"PS"},{value:"XB",label:"XB"},{value:"NS",label:"NS"},],onChange:function(a){return c(b,"platform",a)}}),(0,d.jsx)(g.Z,{defaultValue:a.homePlanet,id:"homePlanetMember_".concat(b),type:"text",label:"Home Planet",onChange:function(a){return c(b,"homePlanet",a)}}),(0,d.jsx)(g.Z,{defaultValue:a.homeSystem,id:"homeSystemMember_".concat(b),type:"text",label:"Home System",onChange:function(a){return c(b,"homeSystem",a)}})]},b)})})}k.propTypes={details:f().array,onChange:f().func,deleteMember:f().func}},9211:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(5893),e=c(5697),f=c.n(e),g=c(3967),h=c(9501),i=c(5632),j=c.n(i);function k(a){var b=a.gallery,c=a.onUpload,e=a.onChange;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.Z,{label:"Other Images for Gallery",maxFiles:20,onUpload:function(a){return c(a)}}),b.length>0&&(0,d.jsx)("ul",{className:j().galleryList,children:b.map(function(a,b){return(0,d.jsxs)("li",{className:j().galleryListItem,children:[(0,d.jsx)("div",{className:j().galleryImage,style:{backgroundImage:"url(".concat(a.preview,")")}}),(0,d.jsx)(h.Z,{frmItemClass:"frmItemGallery",id:"gallery".concat(b),type:"text",label:"Gallery Caption",onChange:function(a){return e(a,b)}})]},b)})})]})}k.propTypes={gallery:f().array,onUpload:f().func,onChange:f().func}},5122:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(5697),g=c.n(f),h=c(6608),i=c(1771),j=c.n(i),k=c(3419);function l(a){var b=a.className,c=a.id,f=a.label,g=a.placeholder,i=a.isSearchable,l=a.config,m=a.onChange,n=(0,e.useState)([]),o=n[0],p=n[1];return(0,d.jsxs)("div",{className:"frmItem ".concat(b?j()[b]:""),children:[f&&(0,d.jsx)("label",{htmlFor:c,className:"frmLabel ".concat(o.toString().length>0?"frmLabelShow":""),children:f}),(0,d.jsx)(h.ZP,{className:j().select,styles:k.Z,id:c,name:c,placeholder:g||f,isSearchable:i,options:l,onChange:function(a){p(a),m&&m(a)},isMulti:!0})]})}l.propTypes={className:g().string,id:g().string.isRequired,label:g().string,placeholder:g().string,isSearchable:g().bool,isMulti:g().bool,config:g().array.isRequired,onChange:g().func},b.Z=l},6394:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(5697),g=c.n(f),h=c(5356),i=c.n(h);function j(a){var b=a.frmItemClass,c=a.id,f=a.label,g=a.placeholder,h=a.onChange,j=(0,e.useState)(""),k=j[0],l=j[1];return(0,d.jsxs)("div",{className:"frmItem ".concat(b?i()[b]:""),children:[(0,d.jsx)("label",{htmlFor:c,className:"frmLabel ".concat(k.toString().length>0?"frmLabelShow":""),children:f}),(0,d.jsx)("textarea",{className:i().textarea,id:c,name:c,placeholder:g||f,cols:"30",rows:"10",value:k,onChange:function(a){var b=a.target;l(b.value),h&&h(b.value)}})]})}j.propTypes={frmItemClass:g().string,id:g().oneOfType([g().string,g().number]).isRequired,label:g().string,placeholder:g().string,onChange:g().func},b.Z=j},1680:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return y}});var d=c(828),e=c(5893),f=c(7294),g=c(9008),h=c.n(g),i=c(8062),j=c(9424),k=c(2487),l=c(833),m=c(9501),n=c(3967),o=c(6069),p=c(5122),q=c(6394),r=c(7898),s=c(9211),t=c(6769),u=c(8862),v=c.n(u),w={name:"",platform:"",homePlanet:"",homeSystem:""},x={title:"",image:"",galaxy:"",quadrant:"",region:"",system:"",headquarters:"",founder:"",founderLink:"",type:"",branches:"",specialization:"",services:"",federation:"",uca:"",platform:[],mission:"",regions:[""],background:"",partnerships:[""],guidelines:"",structures:"",joining:"",members:[w],additionalInfo:"",gallery:[]};function y(){var a,b=(0,f.useRef)(null),c=(0,d.Z)((0,k.Z)(),2),g=c[0],u=c[1],y=(0,f.useState)(!1),z=y[0],A=y[1],B=(0,f.useReducer)(i.Z,x),C=B[0],D=B[1],E=(a=C,"{{Version|".concat("Orbital","}}\n{{Companies}}\n{{Companies infobox\n| name = ").concat(a.title,"\n| image = ").concat(a.image||"nmsMisc_NotAvailable.png","\n| galaxy = ").concat(a.galaxy,"\n| quadrant = ").concat(a.quadrant,"\n| region = ").concat(a.region,"\n| system = ").concat(a.system,"\n| headquarters = ").concat(a.headquarters,"\n| founder = ").concat(a.founder,"\n| founderlink = ").concat(a.founderLink,"\n| type = ").concat(a.type,"\n| branches = ").concat(a.branches,"\n| specialisation = ").concat(a.specialization,"\n| services = ").concat(a.services,"\n| federation = ").concat(a.federation,"\n| uca = ").concat(a.uca,"\n| platform = ").concat(a.platform.map(function(a){return a.value}).join("/"),"\n| release = ").concat("Orbital","\n}}\n'''").concat(a.title,"''' is a company.\n\n==Summary==\n'''").concat(a.title,"''' is a [[company]].\n\nIt is located in the [[").concat(a.region||"RegionName","]] region of the [[").concat(a.galaxy||"GalaxyName","]] galaxy.\n\n===Mission===\n").concat(a.mission||"Our mission is to...","\n\n==Location==\n===Headquarters===\nCompany headquarters are located in the ").concat(a.region||"RegionName"," region of the ").concat(a.galaxy||"GalaxyName"," galaxy.\n\n===Regions===\n").concat(a.region?"Company branch locations can be found in these regions:\n* [[".concat(a.region,"]]\n"):"Company branch locations can be found in these regions:").concat(a.regions.length>0&&""!==a.regions[0]?a.regions.map(function(a){return"* [[".concat(a,"]]\n")}).join(""):"","\n\n===Branch Offices===\n").concat(a.title," has the following branches:\n{{CARGOCivSystems|").concat(a.title,"}}\n\n==Background==\n").concat(a.background||"The company was founded...","\n\n==Partnerships==\n").concat(a.partnerships.length>0&&""!==a.partnerships[0]?"Other companies and [[Civilized space|civilizations]] that share a preferred partnership:\n".concat(a.partnerships.map(function(a){return"* [[".concat(a,"]]\n")}).join("")):"","\n\n==Guidelines==\n").concat(a.guidelines,"\n\n==Structure==\n").concat(a.structure,"\n\n==Joining==\n").concat(a.joining||"If you want to join our company, you should...",'\n\n==Employees==\n{| class="article-table"\n! Member name !! {{platform}} !! Homeplanet\n').concat(a.members.map(function(a){return"|-\n| ".concat(a.name," || ").concat(a.platform," || ").concat(a.homePlanet," || ").concat(a.homeSystem,"\n")}).join(""),"|}\n\n==Additional Information==\n").concat(a.additionalInfo,"\n\n==Gallery==\n").concat(a.gallery.length>0?"<gallery>\n".concat(a.gallery.map(function(a){return"".concat(a.name).concat(a.caption?"|".concat(a.caption):"","\n")}).join(""),"</gallery>"):"","\n\n[[Category:").concat(a.title,"| ]]"));return(0,e.jsxs)(l.Z,{code:E,title:"Create A Company",viewCode:z,closeEditor:function(){return A(!1)},children:[(0,e.jsxs)(h(),{children:[(0,e.jsx)("title",{children:"New Company | No Man's Sky Wiki Boilerplate Creator"}),(0,e.jsx)("meta",{name:"description",content:"Generate boilerplate markdown code for a new company. Create a new company embassy page on the No Man's Sky Fandom wiki with your generated code."})]}),(0,e.jsxs)("div",{className:"frmGroup50",ref:b,children:[(0,e.jsx)(m.Z,{id:"title",type:"text",label:"Company Name",onChange:function(a){return D({type:"title",value:a})}}),(0,e.jsx)(n.Z,{label:"Company Logo",maxFiles:1,onUpload:function(a){return D({type:"image",value:a[0].name})}}),(0,e.jsx)(m.Z,{id:"galaxy",type:"text",label:"Galaxy Name",onChange:function(a){return D({type:"galaxy",value:a})}}),(0,e.jsx)(o.Z,{id:"quadrant",label:"Quadrant",tooltip:"What quadrant the company is located in. Use the minimap in the top left of the galaxy map page. More info on quadrants: https://nomanssky.fandom.com/wiki/Quadrant.",config:[{value:"Alpha",label:"Alpha"},{value:"Beta",label:"Beta"},{value:"Gamma",label:"Gamma"},{value:"Delta",label:"Delta"}],onChange:function(a){return D({type:"quadrant",value:a})}}),(0,e.jsx)(m.Z,{id:"region",type:"text",label:"Headquarter Region Name",tooltip:"Found on the expanded view of the galaxy map.",onChange:function(a){return D({type:"region",value:a})}}),(0,e.jsx)(m.Z,{id:"system",type:"text",label:"Headquarter Star System Name",onChange:function(a){return D({type:"system",value:a})}}),(0,e.jsx)(m.Z,{id:"headquarters",type:"text",label:"Headquarter Planet Name",onChange:function(a){return D({type:"headquarters",value:a})}}),(0,e.jsx)(m.Z,{id:"founder",type:"text",label:"Company Founder In-Game Username",onChange:function(a){return D({type:"founder",value:a})}}),(0,e.jsx)(m.Z,{id:"founderLink",type:"text",label:"Company Founder Wiki Username",tooltip:'If a wiki username is filled, the code will link the company to the wiki username. If no wiki username is supplied, the code will "revert" to the In-Game Discoverer Name.',onChange:function(a){return D({type:"founderLink",value:a})}}),(0,e.jsx)(o.Z,{id:"type",label:"Company Type",tooltip:"Classification of the company. More info: https://nomanssky.fandom.com/wiki/Company_Categories",config:[{value:"SPs",label:"SPs"},{value:"GPs",label:"GPs"},{value:"LPs",label:"LPs"},{value:"SPs",label:"SPs"},{value:"MC",label:"MC"},{value:"SPs",label:"SPs"},{value:"NpC",label:"NpC"},{value:"LLC",label:"LLC"}],onChange:function(a){return D({type:"type",value:a})}}),(0,e.jsx)(m.Z,{id:"branches",type:"text",label:"Branches",tooltip:"The total number of branches.",onChange:function(a){return D({type:"branches",value:a})}}),(0,e.jsx)(m.Z,{id:"specialization",type:"text",label:"Specialization",tooltip:"The focus of the company.",onChange:function(a){return D({type:"specialization",value:a})}}),(0,e.jsx)(m.Z,{id:"services",type:"text",label:"Services",tooltip:"The primary service(s) offered by this company.",onChange:function(a){return D({type:"services",value:a})}}),(0,e.jsx)(o.Z,{id:"federation",label:"Part of the UFT Alliance?",config:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],onChange:function(a){return D({type:"federation",value:a})}}),(0,e.jsx)(o.Z,{id:"uca",label:"Part of the UN42 Alliance?",config:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],onChange:function(a){return D({type:"uca",value:a})}}),(0,e.jsx)(p.Z,{id:"platform",label:"Platform",config:[{value:"PC",label:"PC"},{value:"PS",label:"PS"},{value:"XB",label:"XB"},{value:"NS",label:"NS"},{value:"All",label:"All"},],isSearchable:!0,onChange:function(a){return D({type:"platform",value:a})}})]}),(0,e.jsx)(q.Z,{id:"mission",label:"Company Mission",placeholder:"Our mission is to...",onChange:function(a){return D({type:"mission",value:a})}}),(0,e.jsx)("div",{className:"frmGroup50",children:C.regions.map(function(a,b){return(0,e.jsxs)("div",{className:"frmItem ".concat(v().ruleContainer),children:[(0,e.jsx)(m.Z,{frmItemClass:"civRules",defaultValue:a,id:"regions_".concat(b),type:"text",label:"Additional Region ".concat(b+1),onChange:function(a){return D({type:"changeItemInArray",id:"regions",value:a,index:b})}}),b>0&&(0,e.jsx)("button",{className:"icon ".concat(v().deleteRule),onClick:function(){return D({type:"deleteItemFromArray",id:"regions",value:b})},children:(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:(0,e.jsx)("use",{href:"#svgClose"})})})]},b)})}),(0,e.jsx)("button",{type:"button",className:"btn ".concat(v().btn),onClick:function(){return D({type:"addItemToArray",id:"regions",value:""})},children:"Add Region"}),(0,e.jsx)(q.Z,{id:"background",label:"Company`s Background/History",placeholder:"The company was founded..",onChange:function(a){return D({type:"background",value:a})}}),(0,e.jsx)("div",{className:"frmGroup50",children:C.partnerships.map(function(a,b){return(0,e.jsxs)("div",{className:"frmItem ".concat(v().ruleContainer),children:[(0,e.jsx)(m.Z,{frmItemClass:"civRules",defaultValue:a,id:"partnerships_".concat(b),type:"text",label:"Partnership ".concat(b+1),onChange:function(a){return D({type:"changeItemInArray",id:"partnerships",value:a,index:b})}}),b>0&&(0,e.jsx)("button",{className:"icon ".concat(v().deleteRule),onClick:function(){return D({type:"deleteItemFromArray",id:"partnerships",value:b})},children:(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:(0,e.jsx)("use",{href:"#svgClose"})})})]},b)})}),(0,e.jsx)("button",{type:"button",className:"btn ".concat(v().btn),onClick:function(){return D({type:"addItemToArray",id:"partnerships",value:""})},children:"Add Partnership"}),(0,e.jsx)(q.Z,{id:"guidelines",label:"Naming Guidlines",placeholder:"Members are encouraged to name planets/moons with...",onChange:function(a){return D({type:"guidelines",value:a})}}),(0,e.jsx)(q.Z,{id:"structure",label:"Company Structure",placeholder:"Members are encouraged to name planets/moons with...",onChange:function(a){return D({type:"guidelines",value:a})}}),(0,e.jsx)(q.Z,{id:"joining",label:"How to Join",placeholder:"If you want to join our company, you should...",onChange:function(a){return D({type:"joining",value:a})}}),(0,e.jsx)(r.Z,{details:C.members,onChange:function(a,b,c){return D({type:"changeObjInArray",id:"members",value:c,index:a,key:b})},deleteMember:function(a){return D({type:"deleteItemFromArray",id:"members",value:a})}}),(0,e.jsx)("button",{type:"button",className:"btn ".concat(v().btn),onClick:function(){return D({type:"addItemToArray",id:"members",value:w})},children:"Add Member"}),(0,e.jsx)("div",{className:"frmGroup50",children:(0,e.jsx)(s.Z,{gallery:C.gallery,onUpload:function(a){return D({type:"gallery.upload",value:a})},onChange:function(a,b){return D({type:"gallery.caption",value:a,index:b})}})}),(0,e.jsx)(q.Z,{id:"additionalInfo",label:"Additional Info",placeholder:"Anything else to note?",onChange:function(a){return D({type:"additionalInfo",value:a})}}),(0,e.jsxs)("div",{className:v().btnContainer,children:[(0,e.jsx)("button",{type:"button",className:"btn whiteBtn ".concat(v().btn),onClick:function(){b.current.scrollIntoView(),A(!0),j.B("click","View Company Code",window.innerWidth<800?"Popup":"ScrollTo")},children:"View Code"}),(0,e.jsx)("button",{type:"button",className:"btn whiteBtn ".concat(v().btn),onClick:function(){u(E),j.B("click","Copy Company",C.title)},children:g?"Code Copied":"Copy Code"}),(0,e.jsx)("a",{href:"https://nomanssky.fandom.com/wiki/".concat(C.title.replace(/ /g,"_"),"?action=edit"),className:"btn whiteBtn ".concat(v().btn),target:"_blank",rel:"noreferrer",onClick:function(){return j.B("click","Create Company",C.title)},children:"Create Page"})]}),(0,e.jsx)(t.Z,{type:"system",title:C.title,parentTitle:C.region})]})}},3108:function(a){a.exports={container:"members_container__u_7Iu",member:"members_member__cGF6j",title:"members_title__MKewm",deleteMember:"members_deleteMember__1nVr6"}},5632:function(a){a.exports={galleryList:"gallery_galleryList__73tJM",galleryListItem:"gallery_galleryListItem__bMQl2",galleryImage:"gallery_galleryImage__58PmZ"}},1771:function(a){a.exports={select:"select-multi_select__yO3C1"}},5356:function(a){a.exports={textarea:"textarea_textarea__YdMu4"}}},function(a){a.O(0,[247,158,999,774,888,179],function(){var b;return a(a.s=3326)}),_N_E=a.O()}])