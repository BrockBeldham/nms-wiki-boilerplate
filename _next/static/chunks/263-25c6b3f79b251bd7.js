(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{3967:function(a,b,c){"use strict";var d=c(6042),e=c(9396),f=c(5893),g=c(7294),h=c(5697),i=c.n(h),j=c(8523),k=c(8402),l=c.n(k);function m(a){var b=a.label,c=a.maxFiles,h=a.onUpload,i=(0,g.useState)([]),k=i[0],m=i[1],n=(0,g.useState)(""),o=n[0],p=n[1],q=(0,j.uI)({accept:{"image/png":[".png",".jpg",".jpeg",".webp"]},maxFiles:c,maxSize:10485760,onDrop:function(a,b){b.length>0?p("One of your images is larger than 10MB"):(m(a.map(function(a){return Object.assign(a,{preview:URL.createObjectURL(a)})})),h(a))}}),r=q.getRootProps,s=q.getInputProps,t=q.isDragActive,u=k.map(function(a,b){return(0,f.jsx)("div",{className:l().thumb,style:{backgroundImage:"url(".concat(a.preview,")")}},b)})[0];return(0,g.useEffect)(function(){return function(){k.forEach(function(a){return URL.revokeObjectURL(a.preview)})}},[k]),(0,f.jsxs)("div",{className:l().container,children:[b&&(0,f.jsx)("label",{className:"frmLabel frmLabelShow",children:b}),(0,f.jsxs)("div",(0,e.Z)((0,d.Z)({},r({className:l().dropzone})),{children:[(0,f.jsx)("input",(0,d.Z)({},s())),0===k.length||k.length>1?o?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"icon ".concat(l().dropIcon," ").concat(t?l().dropIconActive:null),children:(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",viewBox:"0 0 24 24",children:(0,f.jsx)("use",{href:"#svgUpload"})})}),(0,f.jsx)("p",{className:l().dropTextError,children:o}),(0,f.jsxs)("p",{className:l().dropTextError,children:["Drag & drop image here or ",(0,f.jsx)("button",{type:"button",className:"btnLink ".concat(l().dropBtn),children:"click to browse"})]})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"icon ".concat(l().dropIcon," ").concat(t?l().dropIconActive:null),children:(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",viewBox:"0 0 24 24",children:(0,f.jsx)("use",{href:"#svgUpload"})})}),(0,f.jsxs)("p",{className:l().dropText,children:["Drag & drop image here or ",(0,f.jsx)("button",{type:"button",className:"btnLink ".concat(l().dropBtn),children:"click to browse"})]})]}):u]})),(0,f.jsxs)("p",{className:l().note,children:[(0,f.jsx)("strong",{children:"Editor's note:"})," Images are not uploaded to the wiki from this site or saved in any way. You need to do upload to the wiki yourself. This upload tool is to place the image name into the page code."]})]})}m.propTypes={label:i().string,maxFiles:i().number,onUpload:i().func},b.Z=m},8494:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(5893),e=c(5697),f=c.n(e),g=c(2283),h=c.n(g);function i(a){var b=a.onChange;return(0,d.jsxs)("div",{className:h().glyphs,children:[(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("0")},children:"0"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("1")},children:"1"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("2")},children:"2"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("3")},children:"3"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("4")},children:"4"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("5")},children:"5"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("6")},children:"6"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("7")},children:"7"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("8")},children:"8"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("9")},children:"9"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("A")},children:"A"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("B")},children:"B"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("C")},children:"C"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("D")},children:"D"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("E")},children:"E"}),(0,d.jsx)("button",{type:"button",className:h().glyphBtn,onClick:function(){return b("F")},children:"F"})]})}i.propTypes={onChange:f().func}},9501:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(5697),g=c.n(f),h=c(8757),i=c(4467),j=c.n(i);function k(a){var b=a.frmItemClass,c=a.defaultValue,f=a.id,g=a.min,i=a.max,k=a.type,l=a.label,m=a.placeholder,n=a.onChange,o=a.tooltip,p=(0,e.useState)(""),q=p[0],r=p[1];return(0,e.useEffect)(function(){c&&r(c)},[c]),(0,d.jsxs)("div",{className:"frmItem ".concat(b?j()[b]:""),children:[(0,d.jsx)("label",{htmlFor:f,className:"frmLabel ".concat(q.toString().length>0?"frmLabelShow":""),children:l}),(0,d.jsx)("input",{className:"input",type:k,id:f,min:g,max:i,name:f,placeholder:m||l,value:q,onChange:function(a){var b=a.target;r(b.value),n&&n(b.value)}}),o&&(0,d.jsx)(h.Z,{trigger:"click",placement:"right",overlay:o,children:(0,d.jsx)("span",{className:"icon iconWhite ".concat(j().ttpIcon),children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)("use",{href:"#svgHelp"})})})})]})}k.propTypes={frmItemClass:g().string,defaultValue:g().string,id:g().oneOfType([g().string,g().number]).isRequired,min:g().string,max:g().string,type:g().string.isRequired,label:g().string,placeholder:g().string,onChange:g().func,tooltip:g().string},b.Z=k},833:function(a,b,c){"use strict";c.d(b,{Z:function(){return l}});var d=c(5893),e=c(5697),f=c.n(e),g=c(1664),h=c.n(g),i=c(377),j=c(6117),k=c.n(j);function l(a){var b=a.children,c=a.code,e=a.title;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h(),{href:"/",children:(0,d.jsx)("a",{className:"btn ".concat(k().backBtn),children:"Back"})}),(0,d.jsxs)("div",{className:k().intro,children:[(0,d.jsx)("h1",{className:k().title,children:e}),(0,d.jsx)("p",{className:k().text,children:"Creating a wiki page is easy! Just fill out this form as completely as you can. Once the form is completed, click 'Copy Code' to copy the Markdown to your clipboard and then click 'Create Page' to open the wiki in a new window. Paste the Markdown code into the Wiki editor and hit 'Saev Changes'!"}),(0,d.jsxs)("p",{className:k().text,children:["If you notice any errors or bugs on this page please DM ",(0,d.jsx)("a",{href:"https://www.reddit.com/user/hotbrowndoubledouble",target:"_blank",rel:"noreferrer",children:"HotbrownDoubleDouble"})," on Reddit."]})]}),(0,d.jsxs)("div",{className:k().container,children:[(0,d.jsx)("div",{className:k().form,children:b}),(0,d.jsx)("div",{className:k().editor,children:(0,d.jsx)("pre",{className:k().editorCode,children:(0,d.jsx)("code",{children:c})})})]}),(0,d.jsx)(i.Z,{})]})}l.propTypes={children:f().array,code:f().string,title:f().string}},377:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(5893),e=c(6561),f=c.n(e);function g(){return(0,d.jsx)("div",{className:f().container,children:(0,d.jsxs)("p",{children:["This site was heavily inspired by Lenni's Galactic Hub specific ",(0,d.jsx)("a",{href:"https://lenni009.github.io/NMSWikiPageCreator/",target:"_blank",rel:"noreferrer",children:"Hub Wiki Page Creator"})]})})}},3166:function(a,b,c){"use strict";c.d(b,{Z:function(){return h}});var d=c(5893),e=c(5697),f=c.n(e),g=c(6069);function h(a){var b=a.onChange;return(0,d.jsx)(g.Z,{id:"mode",label:"Which Game Mode",config:[{value:"Normal",label:"Normal"},{value:"Survival",label:"Survival"},{value:"Permadeath",label:"Permadeath"},{value:"Creative",label:"Creative"}],onChange:function(a){return b(a)}})}h.propTypes={onChange:f().func}},6069:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(5697),g=c.n(f),h=c(4999),i=c(2622),j=c.n(i),k=c(3419);function l(a){var b=a.className,c=a.id,f=a.label,g=a.placeholder,i=a.isSearchable,l=a.config,m=a.onChange,n=(0,e.useState)(""),o=n[0],p=n[1];return(0,d.jsxs)("div",{className:"frmItem ".concat(b?j()[b]:""),children:[f&&(0,d.jsx)("label",{htmlFor:c,className:"frmLabel ".concat(o.toString().length>0?"frmLabelShow":""),children:f}),(0,d.jsx)(h.ZP,{className:j().select,styles:k.Z,id:c,name:c,placeholder:g||f,isSearchable:!!i,value:""===o?o:l.filter(function(a){return"boolean"==typeof a.value?a.value===("true"===o.toString()):a.value===o}),options:l,onChange:function(a){var b=a.value;p(b),m&&m(b)}})]})}l.propTypes={className:g().string,id:g().string.isRequired,label:g().string,placeholder:g().string,isSearchable:g().bool,config:g().array.isRequired,onChange:g().func},b.Z=l},6394:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(5697),g=c.n(f),h=c(5356),i=c.n(h);function j(a){var b=a.frmItemClass,c=a.id,f=a.label,g=a.placeholder,h=a.onChange,j=(0,e.useState)(""),k=j[0],l=j[1];return(0,d.jsxs)("div",{className:"frmItem ".concat(b?i()[b]:""),children:[(0,d.jsx)("label",{htmlFor:c,className:"frmLabel ".concat(k.toString().length>0?"frmLabelShow":""),children:f}),(0,d.jsx)("textarea",{className:i().textarea,id:c,name:c,placeholder:g||f,cols:"30",rows:"10",value:k,onChange:function(a){var b=a.target;l(b.value),h&&h(b.value)}})]})}j.propTypes={frmItemClass:g().string,id:g().oneOfType([g().string,g().number]).isRequired,label:g().string,placeholder:g().string,onChange:g().func},b.Z=j},3419:function(a,b,c){"use strict";var d=c(6042),e=c(9396);b.Z={control:function(){return{alignItems:"center",border:"1px solid #666666",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:"38px",outline:"0 !important",position:"relative",transition:"all 100ms",boxSizing:"border-box",backgroundColor:"#010b14",color:"#ffffff",fontSize:"14px"}},valueContainer:function(){return{alignItems:"center",display:"flex",flex:1,flexWrap:"wrap",padding:"0 5px",position:"relative",overflow:"hidden",boxSizing:"border-box",color:"#ffffff"}},singleValue:function(a){return(0,e.Z)((0,d.Z)({},a),{color:"#ffffff"})},multiValue:function(a){return(0,e.Z)((0,d.Z)({},a),{color:"#ffffff",backgroundColor:"#ff8400"})},placeholder:function(){return{color:"#777777",marginLeft:"2px",marginRight:"2px",position:"absolute",top:"50%",transform:"translateY(-50%)",boxSizing:"border-box",letterSpacing:"normal"}},input:function(){return{margin:"0 2px",padding:0,visibility:"visible",color:"#ffffff"}},indicatorSeparator:function(){return{display:"none"}},indicatorsContainer:function(){return{alignSelf:"flex-start",alignItems:"center",display:"flex"}},indicatorContainer:function(){return{color:"#E0DDDD",display:"flex",padding:"10px",transition:"color 150ms",boxSizing:"border-box"}},menu:function(){return{top:"100%",backgroundColor:"#010b14",color:"#ffffff",borderRadius:"4px",boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1),0 4px 11px hsla(0, 0%, 0%, 0.1)",margin:0,position:"absolute",width:"100%",zIndex:1,boxSizing:"border-box",textAlign:"left"}},MenuList:function(){return{maxHeight:"300px",overflowY:"auto",padding:"4px 0",position:"relative",boxSizing:"border-box"}},option:function(a,b){return(0,e.Z)((0,d.Z)({},a),{padding:"5px 10px",color:"#ffffff",fontSize:"0.8em",cursor:"pointer",backgroundColor:b.isFocused?"#ff8400":"#010b14"})}}},8402:function(a){a.exports={container:"dropzone_container__7h7l_",dropzone:"dropzone_dropzone__oDM46",dropIcon:"dropzone_dropIcon__8QSsp",dropText:"dropzone_dropText__Pknyk",dropTextError:"dropzone_dropTextError__qQeun",dropIconActive:"dropzone_dropIconActive__R5Lx3",dropBtn:"dropzone_dropBtn__qIuc5",thumb:"dropzone_thumb__2xaua",note:"dropzone_note__jYeto"}},2283:function(a){a.exports={glyphs:"glyphs_glyphs__r2ed_",glyphBtn:"glyphs_glyphBtn__VgPl_"}},4467:function(a){a.exports={frmItemGallery:"input_frmItemGallery__ZwIQX",ttpIcon:"input_ttpIcon__NPuW6"}},6117:function(a){a.exports={backBtn:"code-view_backBtn__yNOPK",intro:"code-view_intro__obyP9",title:"code-view_title__IRyO_",text:"code-view_text__URNIS",container:"code-view_container__DaQ1Y",form:"code-view_form__96hyQ",editor:"code-view_editor__ANgMR",editorCode:"code-view_editorCode__FGQ7Y"}},6561:function(a){a.exports={container:"footer_container__ryxRE"}},2622:function(a){a.exports={select:"select_select__mwcUf"}},5356:function(a){a.exports={textarea:"textarea_textarea__YdMu4"}}}])