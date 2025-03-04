(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[999],{6769:function(a,b,c){"use strict";c.d(b,{Z:function(){return l}});var d=c(828),e=c(5893),f=c(5697),g=c.n(f),h=c(9424),i=c(2487),j=c(9203),k=c.n(j);function l(a){var b=a.type,c=a.title,f=a.parentTitle,g=(0,d.Z)((0,i.Z)(),2),j=g[0],l=g[1],m={region:"This category is for content related to the '''".concat(c,"''' [[region]].\n\n[[Category: Regions]]\n[[Category: ").concat(f,"]]"),system:"This category is for content related to the '''".concat(c,"''' [[star system]].\n\n[[Category: Star systems]]\n[[Category: ").concat(f,"]]"),planet:"This category is for content related to the '''".concat(c,"''' [[planet]].\n\n[[Category: Planets]]\n[[Category: ").concat(f,"]]"),moon:"This category is for content related to the '''".concat(c,"''' [[moon]].\n\n[[Category: Moons]]\n[[Category: ").concat(f,"]]")};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h2",{className:k().title,children:"Create Category"}),(0,e.jsx)("p",{className:k().text,children:'When you create a new page, you should always create a category. This keeps your pages organized in a hierarchical structure. Simple click "copy category" and then click "create category" to open the Wiki and create a category for this page.'}),(0,e.jsxs)("div",{className:k().btnContainer,children:[(0,e.jsx)("button",{type:"button",className:"btn whiteBtn ".concat(k().btn),onClick:function(){l(m[b]),h.B("click","Copy Category",c)},children:j?"Category Copied":"Copy Category"}),(0,e.jsx)("a",{href:"https://nomanssky.fandom.com/wiki/Category:".concat(c.replace(/ /g,"_"),"?action=edit"),className:"btn whiteBtn ".concat(k().btn),target:"_blank",rel:"noreferrer",onClick:function(){return h.B("click","Create Category",c)},children:"Create Category"})]})]})}l.propTypes={gaTitle:g().string,type:g().string,title:g().string,parentTitle:g().string}},3967:function(a,b,c){"use strict";var d=c(6042),e=c(9396),f=c(5893),g=c(7294),h=c(5697),i=c.n(h),j=c(8523),k=c(8402),l=c.n(k);function m(a){var b=a.label,c=a.maxFiles,h=a.onUpload,i=(0,g.useState)([]),k=i[0],m=i[1],n=(0,g.useState)(""),o=n[0],p=n[1],q=(0,j.uI)({accept:{"image/png":[".png",".jpg",".jpeg",".webp"]},maxFiles:c,maxSize:10485760,onDrop:function(a,b){b.length>0?p("One of your images is larger than 10MB"):(m(a.map(function(a){return Object.assign(a,{preview:URL.createObjectURL(a)})})),h(a))}}),r=q.getRootProps,s=q.getInputProps,t=q.isDragActive,u=k.map(function(a,b){return(0,f.jsx)("div",{className:l().thumb,style:{backgroundImage:"url(".concat(a.preview,")")}},b)})[0];return(0,g.useEffect)(function(){return function(){k.forEach(function(a){return URL.revokeObjectURL(a.preview)})}},[k]),(0,f.jsxs)("div",{className:l().container,children:[b&&(0,f.jsx)("label",{className:"frmLabel frmLabelShow",children:b}),(0,f.jsxs)("div",(0,e.Z)((0,d.Z)({},r({className:l().dropzone})),{children:[(0,f.jsx)("input",(0,d.Z)({},s())),0===k.length||k.length>1?o?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"icon ".concat(l().dropIcon," ").concat(t?l().dropIconActive:null),children:(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",viewBox:"0 0 24 24",children:(0,f.jsx)("use",{href:"#svgUpload"})})}),(0,f.jsx)("p",{className:l().dropTextError,children:o}),(0,f.jsxs)("p",{className:l().dropTextError,children:["Drag & drop image here or ",(0,f.jsx)("button",{type:"button",className:"btnLink ".concat(l().dropBtn),children:"click to browse"})]})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"icon ".concat(l().dropIcon," ").concat(t?l().dropIconActive:null),children:(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",viewBox:"0 0 24 24",children:(0,f.jsx)("use",{href:"#svgUpload"})})}),(0,f.jsxs)("p",{className:l().dropText,children:["Drag & drop image here or ",(0,f.jsx)("button",{type:"button",className:"btnLink ".concat(l().dropBtn),children:"click to browse"})]})]}):u]})),(0,f.jsxs)("p",{className:l().note,children:[(0,f.jsx)("strong",{children:"Editor's note:"})," Images are not uploaded to the wiki from this site or saved in any way. You need to upload to the wiki yourself. This upload tool is to take the image name and place it into the wiki page code."]})]})}m.propTypes={label:i().string,maxFiles:i().number,onUpload:i().func},b.Z=m},9501:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(5697),g=c.n(f),h=c(5617),i=c(4467),j=c.n(i);function k(a){var b=a.frmItemClass,c=a.defaultValue,f=a.id,g=a.min,i=a.max,k=a.type,l=a.label,m=a.placeholder,n=a.onChange,o=a.tooltip,p=(0,e.useState)(""),q=p[0],r=p[1];return(0,e.useEffect)(function(){c&&r(c)},[c]),(0,d.jsxs)("div",{className:"frmItem ".concat(b?j()[b]:""),children:[(0,d.jsx)("label",{htmlFor:f,className:"frmLabel ".concat(q.toString().length>0?"frmLabelShow":""),children:l}),(0,d.jsx)("input",{className:"input",type:k,id:f,min:g,max:i,name:f,placeholder:m||l,value:q,onChange:function(a){var b=a.target;r(b.value),n&&n(b.value)}}),o&&(0,d.jsx)(h.Z,{overlay:o})]})}k.propTypes={frmItemClass:g().string,defaultValue:g().string,id:g().oneOfType([g().string,g().number]).isRequired,min:g().string,max:g().string,type:g().string.isRequired,label:g().string,placeholder:g().string,onChange:g().func,tooltip:g().oneOfType([g().string,g().object])},b.Z=k},833:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(5893),e=c(5697),f=c.n(e),g=c(1664),h=c.n(g),i=c(377),j=c(9424),k=c(6117),l=c.n(k);function m(a){var b=a.children,c=a.code,e=a.title,f=a.viewCode,g=a.closeEditor;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h(),{href:"/",children:(0,d.jsx)("a",{className:"btn ".concat(l().backBtn),children:"Back"})}),(0,d.jsxs)("div",{className:l().intro,children:[(0,d.jsx)("h1",{className:l().title,children:e}),(0,d.jsx)("p",{className:l().text,children:"Creating a wiki page is easy! Just fill out this form as completely as you can. Once the form is completed, click 'Copy Code' to copy the Markdown to your clipboard and then click 'Create Page' to open the wiki in a new window. Paste the Markdown code into the Wiki editor and hit 'Save Changes'!"}),(0,d.jsxs)("p",{className:l().text,children:["If you notice any errors or bugs on this page please DM ",(0,d.jsx)("a",{href:"https://www.reddit.com/user/hotbrowndoubledouble",target:"_blank",rel:"noreferrer",onClick:function(){return j.B("outbound_click","Intro","/u/hotbrowndoubledouble")},children:"HotbrownDoubleDouble"})," on Reddit."]})]}),(0,d.jsxs)("div",{className:l().container,children:[(0,d.jsx)("div",{className:l().form,children:b}),(0,d.jsxs)("div",{className:"".concat(l().editor," ").concat(f?l().editorShow:""),children:[(0,d.jsx)("button",{className:"icon ".concat(l().editorClose),onClick:function(){j.B("click","Close Editor",e),g()},children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 360 360",children:(0,d.jsx)("use",{href:"#svgClose"})})}),(0,d.jsx)("pre",{className:l().editorCode,children:(0,d.jsx)("code",{children:c})})]})]}),(0,d.jsx)(i.Z,{})]})}m.propTypes={children:f().array,code:f().string,title:f().string,viewCode:f().bool,closeEditor:f().func}},377:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d=c(5893),e=c(5675),f=c.n(e),g=c(9424),h=c(6561),i=c.n(h);function j(){return(0,d.jsxs)("div",{className:i().container,children:[(0,d.jsx)("hr",{className:i().linebreak}),(0,d.jsxs)("p",{className:i().text,children:["This site was heavily inspired by Lenni's Eisvana specific ",(0,d.jsx)("a",{href:"https://wiki.eisvana.com",target:"_blank",rel:"noreferrer",onClick:function(){return g.B("click","Footer","GH")},children:"Eisvana Wiki Page Creator"}),"."]}),(0,d.jsx)("p",{className:i().text,children:"Huge thanks to these communities for using and testing the wiki page creator!"}),(0,d.jsxs)("ul",{className:i().logoList,children:[(0,d.jsx)("li",{className:i().logoItem,children:(0,d.jsx)("a",{href:"https://nomanssky.fandom.com/wiki/No_Man's_High_Hub",className:"nolink",target:"_blank",rel:"noreferrer",onClick:function(){return g.B("click","Footer","NMH")},children:(0,d.jsx)(f(),{src:"/images/logo-NMHH.webp",alt:"No Man`s High Hub Logo",width:300,height:293})})}),(0,d.jsx)("li",{className:i().logoItem,children:(0,d.jsx)("a",{href:"https://nomanssky.fandom.com/wiki/United_Nations_42",className:"nolink",target:"_blank",rel:"noreferrer",onClick:function(){return g.B("click","Footer","UN42")},children:(0,d.jsx)(f(),{src:"/images/logo-UN42.webp",alt:"United Nations 42 Logo",width:300,height:293})})})]})]})}},6069:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(5697),g=c.n(f),h=c(6608),i=c(5617),j=c(2622),k=c.n(j),l=c(3419);function m(a){var b=a.className,c=a.id,f=a.label,g=a.placeholder,j=a.isSearchable,m=a.config,n=a.onChange,o=a.tooltip,p=(0,e.useState)(""),q=p[0],r=p[1];return(0,d.jsxs)("div",{className:"frmItem ".concat(b?k()[b]:""),children:[f&&(0,d.jsx)("label",{htmlFor:c,className:"frmLabel ".concat(q.toString().length>0?"frmLabelShow":""),children:f}),(0,d.jsx)(h.ZP,{className:k().select,styles:l.Z,id:c,name:c,placeholder:g||f,isSearchable:!!j,value:""===q?q:m.filter(function(a){return"boolean"==typeof a.value?a.value===("true"===q.toString()):a.value===q}),options:m,onChange:function(a){var b=a.value;r(b),n&&n(b)}}),o&&(0,d.jsx)(i.Z,{overlay:o})]})}m.propTypes={className:g().string,id:g().string.isRequired,label:g().string,placeholder:g().string,isSearchable:g().bool,config:g().array.isRequired,onChange:g().func,tooltip:g().oneOfType([g().string,g().object])},b.Z=m},5617:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(5893),e=c(7294),f=c(5697),g=c.n(f),h=c(9341),i=c.n(h);function j(a){var b=a.children,c=a.onClose;return(0,d.jsxs)("div",{className:i().pop,children:[(0,d.jsx)("div",{className:i().popBg,onClick:c,"aria-hidden":"true"}),(0,d.jsxs)("div",{className:i().popWin,children:[(0,d.jsx)("button",{className:i().popClose,onClick:c,children:(0,d.jsx)("svg",{viewBox:"0 0 28.7 28.9",children:(0,d.jsx)("use",{href:"#svgClose"})})}),(0,d.jsx)("div",{className:i().popCnt,children:b})]})]})}j.propTypes={children:g().oneOfType([g().object,g().array]),onClose:g().func};var k=c(4493),l=c.n(k);function m(a){var b=a.overlay,c=(0,e.useState)(!1),f=c[0],g=c[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"icon iconWhite ".concat(l().tooltipIcon),onClick:function(){return g(!0)},children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)("use",{href:"#svgHelp"})})}),f&&(0,d.jsx)(j,{onClose:function(){return g(!1)},children:!0==("string"==typeof b)?(0,d.jsx)("p",{children:b}):b})]})}m.propTypes={overlay:g().oneOfType([g().object,g().array,g().string])}},2487:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(7294);function e(){var a=function(a){navigator.clipboard.writeText(a),e(!0),setTimeout(function(){e(!1)},3e3)},b=(0,d.useState)(!1),c=b[0],e=b[1];return[c,a]}},9424:function(a,b,c){"use strict";c.d(b,{B:function(){return d}});var d=function(a,b,c){window.gtag("event",a,{event_category:b,event_label:c})}},3419:function(a,b,c){"use strict";var d=c(6042),e=c(9396);b.Z={control:function(){return{alignItems:"center",border:"1px solid #666666",cursor:"pointer",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:"36px",outline:"0 !important",position:"relative",transition:"all 100ms",boxSizing:"border-box",backgroundColor:"#010b14",color:"#ffffff",fontSize:"14px"}},valueContainer:function(a){return(0,e.Z)((0,d.Z)({},a),{alignItems:"center",display:"flex",flex:1,flexWrap:"wrap",padding:"0 10px",position:"relative",overflow:"hidden",boxSizing:"border-box",color:"#ffffff"})},singleValue:function(a){return(0,e.Z)((0,d.Z)({},a),{color:"#ffffff"})},multiValue:function(a){return(0,e.Z)((0,d.Z)({},a),{color:"#ffffff",backgroundColor:"#ff8400"})},placeholder:function(){return{color:"#777777",marginLeft:"2px",marginRight:"2px",position:"absolute",top:"50%",transform:"translateY(-50%)",boxSizing:"border-box",letterSpacing:"normal"}},input:function(){return{margin:"0 2px",padding:0,visibility:"visible",color:"#ffffff"}},indicatorSeparator:function(){return{display:"none"}},indicatorsContainer:function(a){return(0,e.Z)((0,d.Z)({},a),{alignSelf:"flex-start",alignItems:"center",display:"flex"})},indicatorContainer:function(a){return(0,e.Z)((0,d.Z)({},a),{color:"#E0DDDD",display:"flex",padding:"6px",transition:"color 150ms",boxSizing:"border-box"})},menu:function(){return{top:"100%",backgroundColor:"#010b14",color:"#ffffff",borderRadius:"4px",boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1),0 4px 11px hsla(0, 0%, 0%, 0.1)",margin:0,position:"absolute",width:"100%",zIndex:1,boxSizing:"border-box",textAlign:"left"}},MenuList:function(){return{maxHeight:"300px",overflowY:"auto",padding:"4px 0",position:"relative",boxSizing:"border-box"}},option:function(a,b){return(0,e.Z)((0,d.Z)({},a),{padding:"5px 10px",color:"#ffffff",fontSize:"0.8em",cursor:"pointer",backgroundColor:b.isFocused?"#ff8400":"#010b14"})}}},8062:function(a,b,c){"use strict";var d=c(4924),e=c(6042),f=c(9396),g=c(9815);b.Z=function(a,b){switch(b.type){case"glyphs.selector":return(0,f.Z)((0,e.Z)({},a),{glyphs:a.glyphs+b.value});case"gallery.upload":return(0,f.Z)((0,e.Z)({},a),{gallery:b.value});case"gallery.caption":return(0,f.Z)((0,e.Z)({},a),{gallery:a.gallery.map(function(a,c){return b.index===c?{path:a.path,preview:a.preview,name:a.name,caption:b.value}:a})});case"planets.set":return(0,f.Z)((0,e.Z)({},a),{planets:(0,g.Z)(Array(b.value))});case"changeObjInArray":return(0,f.Z)((0,e.Z)({},a),(0,d.Z)({},b.id,a[b.id].map(function(a,c){return b.index===c?(0,f.Z)((0,e.Z)({},a),(0,d.Z)({},b.key,b.value)):a})));case"changeItemInArray":return(0,f.Z)((0,e.Z)({},a),(0,d.Z)({},b.id,a[b.id].map(function(a,c){return b.index===c?b.value:a})));case"deleteItemFromArray":return(0,f.Z)((0,e.Z)({},a),(0,d.Z)({},b.id,a[b.id].filter(function(a,c){return c!==b.value})));case"addItemToArray":return(0,f.Z)((0,e.Z)({},a),(0,d.Z)({},b.id,(0,g.Z)(a[b.id]).concat([b.value])));default:return(0,f.Z)((0,e.Z)({},a),(0,d.Z)({},b.type,b.value))}}},9203:function(a){a.exports={btnContainer:"create-category_btnContainer__O44My",btn:"create-category_btn__ija9M",title:"create-category_title__ZxnAi",text:"create-category_text__wcvFR"}},8402:function(a){a.exports={container:"dropzone_container__7h7l_",dropzone:"dropzone_dropzone__oDM46",dropIcon:"dropzone_dropIcon__8QSsp",dropText:"dropzone_dropText__Pknyk",dropTextError:"dropzone_dropTextError__qQeun",dropIconActive:"dropzone_dropIconActive__R5Lx3",dropBtn:"dropzone_dropBtn__qIuc5",thumb:"dropzone_thumb__2xaua",note:"dropzone_note__jYeto"}},4467:function(a){a.exports={frmItemGallery:"input_frmItemGallery__ZwIQX",civRules:"input_civRules__2kj9w"}},6117:function(a){a.exports={backBtn:"code-view_backBtn__yNOPK",intro:"code-view_intro__obyP9",title:"code-view_title__IRyO_",text:"code-view_text__URNIS",container:"code-view_container__DaQ1Y",form:"code-view_form__96hyQ",editor:"code-view_editor__ANgMR",editorCode:"code-view_editorCode__FGQ7Y",editorClose:"code-view_editorClose__Jb4xY",editorShow:"code-view_editorShow__XfAJ3"}},6561:function(a){a.exports={container:"footer_container__ryxRE",linebreak:"footer_linebreak__6KCPZ",text:"footer_text__WWpR2",logoList:"footer_logoList__1YrRW",logoItem:"footer_logoItem___m6Dy"}},9341:function(a){a.exports={pop:"modal_pop__xUsU_",popBg:"modal_popBg__Of_r9",popWin:"modal_popWin__4irEb",docusignModal:"modal_docusignModal__SL4O7",popCnt:"modal_popCnt__Dn6eO",popClose:"modal_popClose__BMqvi"}},2622:function(a){a.exports={select:"select_select__mwcUf"}},4493:function(a){a.exports={tooltipIcon:"tooltip_tooltipIcon__PibFc"}},8862:function(a){a.exports={heading:"forms_heading__4vvo_",btnContainer:"forms_btnContainer__3WHhz",btn:"forms_btn__CBkue",ruleContainer:"forms_ruleContainer__WXMAw",deleteRule:"forms_deleteRule__Gwuyy"}}}])