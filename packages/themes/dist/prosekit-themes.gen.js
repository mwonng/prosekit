var Ie=Object.defineProperty;var Ee=(e,r)=>{for(var t in r)Ie(e,t,{get:r[t],enumerable:!0})};var $={};Ee($,{AUTOCOMPLETE_MENU:()=>pr,AUTOCOMPLETE_MENU_ITEM:()=>fr,BLOCK_HANDLE:()=>Cr,DROP_CURSOR:()=>Er,EDITOR_CONTENT:()=>lr,EDITOR_SCROLLING:()=>sr,EDITOR_VIEWPORT:()=>ir,ICON_ARROW_LEFT:()=>it,ICON_ARROW_RIGHT:()=>st,ICON_BOLD:()=>Lr,ICON_CHEVRON_RIGHT:()=>lt,ICON_CLOSE:()=>nt,ICON_CODE:()=>Pr,ICON_CODE_BLOCK:()=>et,ICON_CORNER_HANDLE:()=>rt,ICON_DRAG_HANDLE:()=>tt,ICON_H1:()=>Ur,ICON_H2:()=>$r,ICON_H3:()=>jr,ICON_H4:()=>Br,ICON_H5:()=>Hr,ICON_H6:()=>Dr,ICON_IMAGE:()=>Kr,ICON_ITALIC:()=>Sr,ICON_LINK:()=>Fr,ICON_LIST_BULLET:()=>Zr,ICON_LIST_DEDENT:()=>Qr,ICON_LIST_INDENT:()=>Jr,ICON_LIST_ORDERED:()=>qr,ICON_LIST_TASK:()=>Xr,ICON_LIST_TOGGLE:()=>Yr,ICON_REDO:()=>Wr,ICON_SEARCH:()=>ot,ICON_STRIKE:()=>Gr,ICON_UNDERLINE:()=>Mr,ICON_UNDO:()=>Vr,IMAGE_RESIZEALE:()=>vr,IMAGE_RESIZEALE_HANDLE:()=>Ir,IMAGE_RESIZEALE_IMAGE:()=>_r,IMAGE_UPLOAD_BUTTON:()=>yr,IMAGE_UPLOAD_CARD:()=>xr,IMAGE_UPLOAD_INPUT:()=>wr,INLINE_MENU_LINK:()=>cr,INLINE_MENU_LINK_INPUT:()=>dr,INLINE_MENU_LINK_REMOVE_BUTTON:()=>ur,INLINE_MENU_MAIN:()=>ar,LANGUAGE_SELECT:()=>gr,LANGUAGE_WRAPPER:()=>br,SEARCH:()=>Or,SEARCH_CONTROLLER:()=>zr,SEARCH_ICON_BUTTON:()=>Ar,SEARCH_INPUT:()=>Rr,SEARCH_TEXT_BUTTON:()=>kr,TOGGLE_BUTTON:()=>hr,TOOLBAR:()=>mr,TOOLTIP_CONTENT:()=>Nr,TOOLTIP_TRIGGER:()=>Tr});function ne(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(t=ne(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function ie(){for(var e,r,t=0,o="",s=arguments.length;t<s;t++)(e=arguments[t])&&(r=ne(e))&&(o&&(o+=" "),o+=r);return o}var K="-";function Ce(e){let r=Ne(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function s(l){let c=l.split(K);return c[0]===""&&c.length!==1&&c.shift(),ae(c,r)||Te(l)}function i(l,c){let u=t[l]||[];return c&&o[l]?[...u,...o[l]]:u}return{getClassGroupId:s,getConflictingClassGroupIds:i}}function ae(e,r){if(e.length===0)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),s=o?ae(e.slice(1),o):void 0;if(s)return s;if(r.validators.length===0)return;let i=e.join(K);return r.validators.find(({validator:l})=>l(i))?.classGroupId}var se=/^\[(.+)\]$/;function Te(e){if(se.test(e)){let r=se.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function Ne(e){let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Ae(Object.entries(e.classGroups),t).forEach(([i,l])=>{W(l,o,i,r)}),o}function W(e,r,t,o){e.forEach(s=>{if(typeof s=="string"){let i=s===""?r:le(r,s);i.classGroupId=t;return}if(typeof s=="function"){if(Oe(s)){W(s(o),r,t,o);return}r.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,l])=>{W(l,le(r,i),t,o)})})}function le(e,r){let t=e;return r.split(K).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function Oe(e){return e.isThemeGetter}function Ae(e,r){return r?e.map(([t,o])=>{let s=o.map(i=>typeof i=="string"?r+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,c])=>[r+l,c])):i);return[t,s]}):e}function ke(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function s(i,l){t.set(i,l),r++,r>e&&(r=0,o=t,t=new Map)}return{get(i){let l=t.get(i);if(l!==void 0)return l;if((l=o.get(i))!==void 0)return s(i,l),l},set(i,l){t.has(i)?t.set(i,l):s(i,l)}}}var ce="!";function Re(e){let r=e.separator,t=r.length===1,o=r[0],s=r.length;return function(l){let c=[],u=0,f=0,b;for(let g=0;g<l.length;g++){let h=l[g];if(u===0){if(h===o&&(t||l.slice(g,g+s)===r)){c.push(l.slice(f,g)),f=g+s;continue}if(h==="/"){b=g;continue}}h==="["?u++:h==="]"&&u--}let m=c.length===0?l:l.substring(f),x=m.startsWith(ce),v=x?m.substring(1):m,T=b&&b>f?b-f:void 0;return{modifiers:c,hasImportantModifier:x,baseClassName:v,maybePostfixModifierPosition:T}}}function ze(e){if(e.length<=1)return e;let r=[],t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function Se(e){return{cache:ke(e.cacheSize),splitModifiers:Re(e),...Ce(e)}}var Le=/\s+/;function Me(e,r){let{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:s}=r,i=new Set;return e.trim().split(Le).map(l=>{let{modifiers:c,hasImportantModifier:u,baseClassName:f,maybePostfixModifierPosition:b}=t(l),m=o(b?f.substring(0,b):f),x=!!b;if(!m){if(!b)return{isTailwindClass:!1,originalClassName:l};if(m=o(f),!m)return{isTailwindClass:!1,originalClassName:l};x=!1}let v=ze(c).join(":");return{isTailwindClass:!0,modifierId:u?v+ce:v,classGroupId:m,originalClassName:l,hasPostfixModifier:x}}).reverse().filter(l=>{if(!l.isTailwindClass)return!0;let{modifierId:c,classGroupId:u,hasPostfixModifier:f}=l,b=c+u;return i.has(b)?!1:(i.add(b),s(u,f).forEach(m=>i.add(c+m)),!0)}).reverse().map(l=>l.originalClassName).join(" ")}function Ge(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=de(r))&&(o&&(o+=" "),o+=t);return o}function de(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=de(e[o]))&&(t&&(t+=" "),t+=r);return t}function Pe(e,...r){let t,o,s,i=l;function l(u){let f=r.reduce((b,m)=>m(b),e());return t=Se(f),o=t.cache.get,s=t.cache.set,i=c,c(u)}function c(u){let f=o(u);if(f)return f;let b=Me(u,t);return s(u,b),b}return function(){return i(Ge.apply(null,arguments))}}function d(e){let r=t=>t[e]||[];return r.isThemeGetter=!0,r}var ue=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ue=/^\d+\/\d+$/,$e=new Set(["px","full","screen"]),je=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Be=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,He=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,De=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ve=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function y(e){return C(e)||$e.has(e)||Ue.test(e)}function I(e){return N(e,"length",Je)}function C(e){return!!e&&!Number.isNaN(Number(e))}function M(e){return N(e,"number",C)}function k(e){return!!e&&Number.isInteger(Number(e))}function We(e){return e.endsWith("%")&&C(e.slice(0,-1))}function a(e){return ue.test(e)}function E(e){return je.test(e)}var Ke=new Set(["length","size","percentage"]);function Fe(e){return N(e,Ke,pe)}function Ze(e){return N(e,"position",pe)}var qe=new Set(["image","url"]);function Xe(e){return N(e,qe,er)}function Ye(e){return N(e,"",Qe)}function R(){return!0}function N(e,r,t){let o=ue.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Je(e){return Be.test(e)&&!He.test(e)}function pe(){return!1}function Qe(e){return De.test(e)}function er(e){return Ve.test(e)}function rr(){let e=d("colors"),r=d("spacing"),t=d("blur"),o=d("brightness"),s=d("borderColor"),i=d("borderRadius"),l=d("borderSpacing"),c=d("borderWidth"),u=d("contrast"),f=d("grayscale"),b=d("hueRotate"),m=d("invert"),x=d("gap"),v=d("gradientColorStops"),T=d("gradientColorStopPositions"),g=d("inset"),h=d("margin"),_=d("opacity"),w=d("padding"),q=d("saturate"),j=d("scale"),X=d("sepia"),Y=d("skew"),J=d("space"),Q=d("translate"),B=()=>["auto","contain","none"],H=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",a,r],p=()=>[a,r],ee=()=>["",y,I],z=()=>["auto",C,a],re=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],S=()=>["solid","dashed","dotted","double","none"],te=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],O=()=>["","0",a],oe=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>[C,M],L=()=>[C,a];return{cacheSize:500,separator:":",theme:{colors:[R],spacing:[y,I],blur:["none","",E,a],brightness:A(),borderColor:[e],borderRadius:["none","","full",E,a],borderSpacing:p(),borderWidth:ee(),contrast:A(),grayscale:O(),hueRotate:L(),invert:O(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[We,I],inset:D(),margin:D(),opacity:A(),padding:p(),saturate:A(),scale:A(),sepia:O(),skew:L(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[E]}],"break-after":[{"break-after":oe()}],"break-before":[{"break-before":oe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...re(),a]}],overflow:[{overflow:H()}],"overflow-x":[{"overflow-x":H()}],"overflow-y":[{"overflow-y":H()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",k,a]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:O()}],shrink:[{shrink:O()}],order:[{order:["first","last","none",k,a]}],"grid-cols":[{"grid-cols":[R]}],"col-start-end":[{col:["auto",{span:["full",k,a]},a]}],"col-start":[{"col-start":z()}],"col-end":[{"col-end":z()}],"grid-rows":[{"grid-rows":[R]}],"row-start-end":[{row:["auto",{span:[k,a]},a]}],"row-start":[{"row-start":z()}],"row-end":[{"row-end":z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,r]}],"min-w":[{"min-w":[a,r,"min","max","fit"]}],"max-w":[{"max-w":[a,r,"none","full","min","max","fit","prose",{screen:[E]},E]}],h:[{h:[a,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,r,"auto","min","max","fit"]}],"font-size":[{text:["base",E,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",M]}],"font-family":[{font:[R]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",C,M]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",y,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...S(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",y,I]}],"underline-offset":[{"underline-offset":["auto",y,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...re(),Ze]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Fe]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Xe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[T]}],"gradient-via-pos":[{via:[T]}],"gradient-to-pos":[{to:[T]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[...S(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:S()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...S()]}],"outline-offset":[{"outline-offset":[y,a]}],"outline-w":[{outline:[y,I]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[y,I]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",E,Ye]}],"shadow-color":[{shadow:[R]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":[...te(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":te()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",E,a]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[m]}],saturate:[{saturate:[q]}],sepia:[{sepia:[X]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[q]}],"backdrop-sepia":[{"backdrop-sepia":[X]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[k,a]}],"translate-x":[{"translate-x":[Q]}],"translate-y":[{"translate-y":[Q]}],"skew-x":[{"skew-x":[Y]}],"skew-y":[{"skew-y":[Y]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[y,I,M]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var fe=Pe(rr);var F=[["background","white","neutral-900"],["foreground","neutral-900","zinc-50"],["primary","zinc-900","zinc-50"],["primary-foreground","zinc-50","zinc-900"],["secondary","zinc-100","zinc-800"],["secondary-foreground","zinc-900","zinc-50"],["muted","zinc-100","zinc-800"],["muted-foreground","zinc-500","zinc-500"],["accent","gray-200","gray-700"],["accent-foreground","zinc-900","zinc-50"],["destructive","red-500","red-900"],["destructive-foreground","zinc-50","zinc-50"],["border","zinc-200","zinc-800"],["input","zinc-200","zinc-800"],["ring","zinc-900","zinc-300"]],be=["text","bg","border","ring","ring-offset"],G=new RegExp("^(?<prefix>.*?)(?<group>"+be.join("|")+")-(?<alias>"+F.map(([e])=>e).sort((e,r)=>r.length-e.length).join("|")+")(?<suffix>.*)$","g");function ge(e){if(G.lastIndex=0,!G.test(e))return e;let r=[];for(let t of e.split(" ")){G.lastIndex=0;let o=G.exec(t);if(o){let{prefix:s,group:i,alias:l,suffix:c}=o.groups||{},[,u,f]=F.find(([b])=>b===l);if(!u||!f||!i||!l)throw new Error(`Unable to parse color from "${t}"`);r.push(`${s}${i}-${u}${c} dark:${s}${i}-${f}${c}`)}else r.push(t)}return r.join(" ")}var me={};for(let[e,r,t]of F)for(let o of be)for(let s=0;s<=100;s+=5){let i=s===0?"":`/${s}`;me[`${o}-${e}${i}`]=`${o}-${r}${i} dark:${o}-${t}${i}`}function n(...e){return fe(ge(ie(...e)))}var P=n("z-10 box-border rounded-lg border border-border bg-background shadow-lg"),he=n("will-change-transform","data-[state=open]:animate-in","data-[state=closed]:animate-out","data-[state=open]:fade-in-0","data-[state=closed]:fade-out-0","data-[state=open]:zoom-in-95","data-[state=closed]:zoom-out-95","data-[state=open]:animate-duration-150","data-[state=closed]:animate-duration-200"),xe=n(he,"data-[side=bottom]:slide-in-from-top-2","data-[side=bottom]:slide-out-to-top-2","data-[side=left]:slide-in-from-right-2","data-[side=left]:slide-out-to-right-2","data-[side=right]:slide-in-from-left-2","data-[side=right]:slide-out-to-left-2","data-[side=top]:slide-in-from-bottom-2","data-[side=top]:slide-out-to-bottom-2"),tr=n("box-border cursor-default select-none whitespace-nowrap outline-none data-[focused]:bg-secondary"),U=n("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"),we=n("bg-primary text-primary-foreground hover:bg-primary/90"),ye=n("bg-secondary text-secondary-foreground hover:bg-secondary/80"),ve="h-10 px-4 py-2",or="h-9 px-3",nr="h-10 w-10",Z=n("flex h-9 rounded-md w-full bg-background px-3 py-2 text-sm placeholder:text-muted-foreground transition","border box-border border-border border-solid","ring-0 ring-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0","outline-none focus-visible:outline-none","file:border-0 file:bg-transparent file:text-sm file:font-medium","disabled:cursor-not-allowed disabled:opacity-50"),ir=n("box-border h-full w-full min-h-36 overflow-y-hidden overflow-x-hidden rounded-md border border-solid border-gray-200 shadow dark:border-zinc-700 flex flex-col bg-background"),sr=n("relative w-full flex-1 box-border overflow-y-scroll"),lr=n("ProseMirror","box-border min-h-full px-[max(40px,_calc(50%-330px))] py-[24px] outline-none outline-0",'[&_span[data-mention="user"]]:text-blue-500','[&_span[data-mention="tag"]]:text-violet-500',"[&_pre]:text-white [&_pre]:bg-zinc-800"),ar=n(P,"relative flex min-w-[120px] space-x-1 overflow-auto whitespace-nowrap rounded-md p-1"),cr=n(P,"relative flex flex-col w-xs rounded-lg p-4 gap-y-2 items-stretch"),dr=n(Z),ur=n(U,we,or),pr=n("relative block max-h-[400px] min-w-[120px] select-none overflow-auto whitespace-nowrap p-1",P),fr=n("relative block min-w-[120px] scroll-my-1 rounded px-3 py-1.5",tr),br=n("relative left-2 top-3 h-0 select-none overflow-visible"),gr=n("outline-unset focus:outline-unset relative box-border w-auto cursor-pointer select-none appearance-none rounded border-none bg-transparent px-2 py-1 text-xs transition text-white","opacity-0 hover:opacity-80 [div[data-node-view-root]:hover_&]:opacity-50 [div[data-node-view-root]:hover_&]:hover:opacity-80"),_e=n("z-2 box-border","border-border border-solid border-l-0 border-r-0 border-t-0 border-b"),mr=n(_e,"flex flex-wrap gap-1 p-2 items-center"),hr=n("outline-unset focus-visible:outline-unset flex items-center justify-center rounded-md p-2 font-medium transition focus-visible:ring-2 text-sm focus-visible:ring-ring disabled:pointer-events-none min-w-9 min-h-9","disabled:opacity-50 hover:disabled:opacity-50","bg-transparent hover:bg-secondary data-[state=on]:bg-accent"),xr=n("flex flex-col gap-y-4 p-6 text-sm w-sm",P,xe),wr=n(Z),yr=n(U,we,ve,"w-full"),vr=n("relative block max-h-[600px] max-w-full"),_r=n("h-full w-full object-contain"),Ir=n("absolute bottom-0 right-0 rounded mb-1.5 mr-1.5 p-0.5 transition bg-gray-900/30 active:bg-gray-800/60 text-white/50 active:text-white/80 active:translate-x-0.5 active:translate-y-0.5","opacity-0 hover:opacity-100 [prosekit-resizable:hover_&]:opacity-100 [prosekit-resizable[data-resizing]_&]:opacity-100"),Er=n("transition-all bg-blue-500"),Cr=n("flex items-center box-border justify-center my-[0.5em] h-[1.5em] w-[1.2em] hover:bg-secondary rounded text-muted-foreground/50 transition",he),Tr=n("block"),Nr=n("z-50 overflow-hidden rounded-md border border-solid bg-primary px-3 py-1.5 text-xs text-primary-foreground shadow-sm",xe),Or=n(_e,"grid grid-cols-[min-content_1fr_min-content] gap-2 p-2"),Ar=n(U,ye,nr),kr=n(U,ye,ve),Rr=n(Z,"col-start-2"),zr=n("flex items-center justify-between gap-1"),Sr=n("i-lucide-italic h-5 w-5"),Lr=n("i-lucide-bold h-5 w-5"),Mr=n("i-lucide-underline h-5 w-5"),Gr=n("i-lucide-strikethrough h-5 w-5"),Pr=n("i-lucide-code h-5 w-5"),Ur=n("i-lucide-heading-1 h-5 w-5"),$r=n("i-lucide-heading-2 h-5 w-5"),jr=n("i-lucide-heading-3 h-5 w-5"),Br=n("i-lucide-heading-4 h-5 w-5"),Hr=n("i-lucide-heading-5 h-5 w-5"),Dr=n("i-lucide-heading-6 h-5 w-5"),Vr=n("i-lucide-undo-2 h-5 w-5"),Wr=n("i-lucide-redo-2 h-5 w-5"),Kr=n("i-lucide-image h-5 w-5"),Fr=n("i-lucide-link h-5 w-5"),Zr=n("i-lucide-list h-5 w-5"),qr=n("i-lucide-list-ordered h-5 w-5"),Xr=n("i-lucide-list-checks h-5 w-5"),Yr=n("i-lucide-list-collapse h-5 w-5"),Jr=n("i-lucide-indent-increase h-5 w-5"),Qr=n("i-lucide-indent-decrease h-5 w-5"),et=n("i-lucide-square-code h-5 w-5"),rt=n("i-lucide-arrow-down-right h-4 w-4"),tt=n("i-lucide-grip-vertical h-5 w-5"),ot=n("i-lucide-search h-5 w-5"),nt=n("i-lucide-x h-5 w-5"),it=n("i-lucide-arrow-left h-5 w-5"),st=n("i-lucide-arrow-right h-5 w-5"),lt=n("i-lucide-chevron-right h-5 w-5");function at(e,r){let t=Object.keys(r);t.sort((o,s)=>s.length-o.length);for(let o of t)e=ct(e,o,r[o]);return e}function ct(e,r,t){if(t.includes("'"))throw new Error("Target cannot contain single quotes: "+t);return e.replaceAll(` :class="Themes.${r}"`,` class='${t}'`).replaceAll(` className={Themes.${r}}`,` className='${t}'`).replaceAll(` class={Themes.${r}}`,` class='${t}'`).replaceAll(` class=\${Themes.${r}}`,` class='${t}'`).replaceAll(`Themes.${r}`,`'${t}'`).replaceAll(r,t)}function dt(e){return e.replace(/import\s*{\s*Themes\s*}\s*from\s*["']@prosekit\/themes["'];?\n/m,"")}function ut(e){return dt(at(e,$))}export{me as Colors,$ as Themes,ut as replaceThemes};
