"use strict";(()=>{var rt=Object.defineProperty;var St=Object.getOwnPropertyDescriptor;var Ct=(o,t,e)=>t in o?rt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var F=(o,t,e,i)=>{for(var s=i>1?void 0:i?St(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&rt(t,e,s),s};var L=(o,t,e)=>Ct(o,typeof t!="symbol"?t+"":t,e);var D=globalThis,j=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),ot=new WeakMap,C=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(j&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ot.set(e,t))}return t}toString(){return this.cssText}},nt=o=>new C(typeof o=="string"?o:o+"",void 0,W),G=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new C(e,o,W)},at=(o,t)=>{if(j)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=D.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},X=j?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return nt(e)})(o):o;var{is:kt,defineProperty:Pt,getOwnPropertyDescriptor:Rt,getOwnPropertyNames:Ut,getOwnPropertySymbols:Nt,getPrototypeOf:Mt}=Object,g=globalThis,lt=g.trustedTypes,Tt=lt?lt.emptyScript:"",Ot=g.reactiveElementPolyfillSupport,k=(o,t)=>o,P={toAttribute(o,t){switch(t){case Boolean:o=o?Tt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},q=(o,t)=>!kt(o,t),ct={attribute:!0,type:String,converter:P,reflect:!1,useDefault:!1,hasChanged:q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ct){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Pt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=Rt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let a=s?.call(this);r?.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ct}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;let t=Mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){let e=this.properties,i=[...Ut(e),...Nt(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(X(s))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:P).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:P;this._$Em=s;let a=n.fromAttribute(e,r.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){let n=this.constructor;if(s===!1&&(r=this[t]),i??(i=n.getPropertyOptions(t)),!((i.hasChanged??q)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:n}=r,a=this[s];n!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,r,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[k("elementProperties")]=new Map,_[k("finalized")]=new Map,Ot?.({ReactiveElement:_}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.1.2");var U=globalThis,ht=o=>o,B=U.trustedTypes,dt=B?B.createPolicy("lit-html",{createHTML:o=>o}):void 0,gt="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,bt="?"+b,zt=`<${bt}>`,w=document,N=()=>w.createComment(""),M=o=>o===null||typeof o!="object"&&typeof o!="function",et=Array.isArray,Ht=o=>et(o)||typeof o?.[Symbol.iterator]=="function",Z=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,ut=/>/g,$=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,_t=/"/g,vt=/^(?:script|style|textarea|title)$/i,it=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),u=it(1),Xt=it(2),Zt=it(3),x=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),ft=new WeakMap,y=w.createTreeWalker(w,129);function $t(o,t){if(!et(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(t):t}var Lt=(o,t)=>{let e=o.length-1,i=[],s,r=t===2?"<svg>":t===3?"<math>":"",n=R;for(let a=0;a<e;a++){let l=o[a],d,p,c=-1,m=0;for(;m<l.length&&(n.lastIndex=m,p=n.exec(l),p!==null);)m=n.lastIndex,n===R?p[1]==="!--"?n=pt:p[1]!==void 0?n=ut:p[2]!==void 0?(vt.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=$):p[3]!==void 0&&(n=$):n===$?p[0]===">"?(n=s??R,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?$:p[3]==='"'?_t:mt):n===_t||n===mt?n=$:n===pt||n===ut?n=R:(n=$,s=void 0);let f=n===$&&o[a+1].startsWith("/>")?" ":"";r+=n===R?l+zt:c>=0?(i.push(d),l.slice(0,c)+gt+l.slice(c)+b+f):l+b+(c===-2?a:f)}return[$t(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},T=class o{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,a=t.length-1,l=this.parts,[d,p]=Lt(t,e);if(this.el=o.createElement(d,i),y.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=y.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let c of s.getAttributeNames())if(c.endsWith(gt)){let m=p[n++],f=s.getAttribute(c).split(b),H=/([.?@])?(.*)/.exec(m);l.push({type:1,index:r,name:H[2],strings:f,ctor:H[1]==="."?J:H[1]==="?"?Q:H[1]==="@"?Y:E}),s.removeAttribute(c)}else c.startsWith(b)&&(l.push({type:6,index:r}),s.removeAttribute(c));if(vt.test(s.tagName)){let c=s.textContent.split(b),m=c.length-1;if(m>0){s.textContent=B?B.emptyScript:"";for(let f=0;f<m;f++)s.append(c[f],N()),y.nextNode(),l.push({type:2,index:++r});s.append(c[m],N())}}}else if(s.nodeType===8)if(s.data===bt)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(b,c+1))!==-1;)l.push({type:7,index:r}),c+=b.length-1}r++}}static createElement(t,e){let i=w.createElement("template");return i.innerHTML=t,i}};function A(o,t,e=o,i){if(t===x)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,r=M(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=A(o,s._$AS(o,t.values),s,i)),t}var K=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??w).importNode(e,!0);y.currentNode=s;let r=y.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new O(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new tt(r,this,t)),this._$AV.push(d),l=i[++a]}n!==l?.index&&(r=y.nextNode(),n++)}return y.currentNode=w,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},O=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),M(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ht(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement($t(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new K(s,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=ft.get(t.strings);return e===void 0&&ft.set(t.strings,e=new T(t)),e}k(t){et(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new o(this.O(N()),this.O(N()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=ht(t).nextSibling;ht(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},E=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(r===void 0)t=A(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{let a=t,l,d;for(t=r[0],l=0;l<r.length-1;l++)d=A(this,a[i+l],e,l),d===x&&(d=this._$AH[l]),n||(n=!M(d)||d!==this._$AH[l]),d===h?t=h:t!==h&&(t+=(d??"")+r[l+1]),this._$AH[l]=d}n&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},J=class extends E{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},Q=class extends E{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},Y=class extends E{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=A(this,t,e,0)??h)===x)return;let i=this._$AH,s=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},tt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}};var Dt=U.litHtmlPolyfillSupport;Dt?.(T,O),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.3");var yt=(o,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let r=e?.renderBefore??null;i._$litPart$=s=new O(t.insertBefore(N(),r),r,void 0,e??{})}return s._$AI(o),s};var z=globalThis,v=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=yt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}};v._$litElement$=!0,v.finalized=!0,z.litElementHydrateSupport?.({LitElement:v});var jt=z.litElementPolyfillSupport;jt?.({LitElement:v});(z.litElementVersions??(z.litElementVersions=[])).push("4.2.2");var wt=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var qt={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:q},Bt=(o=qt,t,e)=>{let{kind:i,metadata:s}=e,r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),r.set(e.name,o),i==="accessor"){let{name:n}=e;return{set(a){let l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,o,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,o,a),a}}}if(i==="setter"){let{name:n}=e;return function(a){let l=this[n];t.call(this,a),this.requestUpdate(n,l,o,!0,a)}}throw Error("Unsupported decorator location: "+i)};function xt(o){return(t,e)=>typeof e=="object"?Bt(o,t,e):((i,s,r)=>{let n=s.hasOwnProperty(r);return s.constructor.createProperty(r,i),n?Object.getOwnPropertyDescriptor(s,r):void 0})(o,t,e)}function At(o){return xt({...o,state:!0,attribute:!1})}var st=100,Et=12,V={negative_color:"var(--error-color)",positive_color:"var(--success-color)",zero_divider_color:"var(--secondary-text-color)",background_color:"var(--secondary-background-color)"},S=class extends v{constructor(){super(...arguments);L(this,"_hass");L(this,"_config",null)}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{}}},{type:"expandable",name:"range",label:"Range",flatten:!0,schema:[{name:"min",selector:{number:{min:-1e5,max:1e5,step:1}}},{name:"max",default:st,selector:{number:{min:-1e5,max:1e5,step:1}}}]},{type:"expandable",name:"colors",label:"Colors",flatten:!0,schema:[{name:"negative_color",selector:{ui_color:{}}},{name:"positive_color",selector:{ui_color:{}}},{name:"zero_divider_color",selector:{ui_color:{}}},{name:"background_color",selector:{ui_color:{}}}]},{type:"expandable",name:"labels",label:"Labels",flatten:!0,schema:[{name:"title",selector:{text:{}}},{name:"negative_label",selector:{text:{}}},{name:"positive_label",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"precision",default:1,selector:{number:{min:0,max:5,step:1}}}]},{type:"expandable",name:"appearance",label:"Appearance",flatten:!0,schema:[{name:"bar_height",default:Et,selector:{number:{min:4,max:50,step:1,unit_of_measurement:"px"}}},{name:"show_zero_divider",default:!0,selector:{boolean:{}}},{name:"show_value",default:!0,selector:{boolean:{}}},{name:"show_icon",default:!1,selector:{boolean:{}}},{name:"icon",selector:{icon:{}}},{name:"show_scale_units",default:!1,selector:{boolean:{}}}]},{type:"expandable",name:"behavior",label:"Behavior",flatten:!0,schema:[{name:"inverted",default:!1,selector:{boolean:{}}},{name:"animation",default:!0,selector:{boolean:{}}},{name:"tap_action",default:"more-info",selector:{select:{options:[{value:"more-info",label:"More-info"},{value:"toggle",label:"Toggle"},{value:"navigate",label:"Navigate"},{value:"none",label:"None"}]}}},{name:"navigate_path",selector:{text:{}}}]}],computeLabel:(r,n)=>({entity:"Entity",min:"Minimum value",max:"Maximum value",negative_color:"Negative (export) color",positive_color:"Positive (import) color",zero_divider_color:"Zero divider color",background_color:"Background color",title:"Card title",negative_label:"Negative label",positive_label:"Positive label",unit:"Unit override",precision:"Decimal precision",bar_height:"Bar height",show_zero_divider:"Show zero divider",show_value:"Show value",show_icon:"Show icon",icon:"Icon",show_scale_units:"Show scale units",inverted:"Invert direction",animation:"Flow animation"})[r.name]||n?.(`ui.panel.lovelace.editor.card.generic.${r.name}`)||r.name,assertConfig:r=>{if(!r.entity||typeof r.entity!="string"||r.entity.trim()==="")throw new Error("Entity is required");if(r.min!=null&&r.max!=null&&Number(r.min)>=Number(r.max))throw new Error("Minimum must be less than maximum");if(r.precision!=null){let n=Number(r.precision);if(!Number.isInteger(n)||n<0||n>5)throw new Error("Precision must be between 0 and 5")}if(r.bar_height!=null){let n=Number(r.bar_height);if(!Number.isInteger(n)||n<4||n>50)throw new Error("Bar height must be between 4 and 50 pixels")}}}}static getStubConfig(){return{entity:"",max:st}}getCardSize(){return 2}set hass(e){this._hass=e,this.requestUpdate()}get hass(){return this._hass}render(){if(!this._config)return h;let e=this._config,i=this.hass?.states?.[e.entity],s=!i||i.state==="unavailable"||i.state==="unknown",r=s?0:this._parseValue(i.state),n=this._clampValue(r),a=this._computeZeroPosition(),l=this._computeNegativeFill(n,a),d=this._computePositiveFill(n,a),p=s?"\u2014":this._formatValue(r),c=e.unit??i?.attributes?.unit_of_measurement??"",m=c?` ${c}`:"";return u`
      <ha-card class="card ${s?"unavailable":""}"
        @click=${this._handleAction}>
        ${this._renderTitleRow(p,m,i,e)}
        ${this._renderBarTrack(a,l,d,e)}
        ${this._renderScaleRow(e,a,c)}
      </ha-card>
    `}_renderTitleRow(e,i,s,r){if(r.title==="")return h;let n=r.title??s?.attributes?.friendly_name??r.entity,a=r.icon||s?.attributes?.icon||"";return u`
      <div class="title-row">
        <span class="title-row__name">${n}</span>
        <span class="title-row__value">
          ${r.show_icon&&a?u`<ha-icon
                class="title-row__icon"
                .icon=${a}
              ></ha-icon>`:h}
          ${r.show_value?u`<span>${e}${i}</span>`:h}
        </span>
      </div>
    `}_renderBarTrack(e,i,s,r){let n=r.animation?"animated":"";return u`
      <div class="bar-wrapper">
        ${r.negative_label?u`<span class="bar-label bar-label--negative"
              >${r.negative_label}</span
            >`:h}
        <div
          class="bar-track"
          style="height: ${r.bar_height}px; background: ${r.background_color};"
        >
          ${i>0?u`<div
                class="bar-track__fill bar-track__fill--negative ${n}"
                style="left: ${e-i}%; width: ${i}%; background: ${r.negative_color};"
              >
                ${r.animation?u`<div class="flow-indicator flow-indicator--left">
                      <div class="flow-indicator__stripes"></div>
                    </div>`:h}
              </div>`:h}
          ${s>0?u`<div
                class="bar-track__fill bar-track__fill--positive ${n}"
                style="left: ${e}%; width: ${s}%; background: ${r.positive_color};"
              >
                ${r.animation?u`<div class="flow-indicator flow-indicator--right">
                      <div class="flow-indicator__stripes"></div>
                    </div>`:h}
              </div>`:h}
          ${r.show_zero_divider?u`<div
                class="bar-track__zero-divider"
                style="left: ${e}%; background: ${r.zero_divider_color};"
              ></div>`:h}
        </div>
        ${r.positive_label?u`<span class="bar-label bar-label--positive"
              >${r.positive_label}</span
            >`:h}
      </div>
    `}_renderScaleRow(e,i,s){let r=e.show_scale_units&&s?` ${s}`:"";return u`
      <div class="scale-row">
        <span class="scale-row__label scale-row__label--min"
          >${this._formatScaleLabel(e.min,e.precision)}${r}</span
        >
        <span class="scale-row__zero" style="left: ${i}%;">0${r}</span>
        <span class="scale-row__label scale-row__label--max"
          >${this._formatScaleLabel(e.max,e.precision)}${r}</span
        >
      </div>
    `}_computeZeroPosition(){let e=this._config;return(0-e.min)/(e.max-e.min)*100}_computeNegativeFill(e,i){let s=this._config.inverted?-e:e;if(s>=0)return 0;let r=this._config,n=Math.abs(r.min);return n===0?0:Math.abs(s)/n*i}_computePositiveFill(e,i){let s=this._config.inverted?-e:e;if(s<=0)return 0;let r=this._config,n=100-i;return r.max===0?0:s/r.max*n}_clampValue(e){let i=this._config;return Math.max(i.min,Math.min(i.max,e))}_parseValue(e){let i=parseFloat(e);return Number.isFinite(i)?i:0}_formatValue(e){let i=this._config;return e.toFixed(i.precision)}_chevrons(e){return(e==="left"?"\u25C2 ":" \u25B8").repeat(40)}_buildBarBackground(e,i,s,r){let n=r.background_color,a=r.negative_color,l=r.positive_color,d=Math.max(0,e-i),p=Math.min(100,e+s),c=[];return i>0&&(c.push(`${n} ${d}%`),c.push(`${a} ${d}%`),c.push(`${a} ${e}%`)),s>0&&(c.push(`${n} ${e}%`),c.push(`${l} ${e}%`),c.push(`${l} ${p}%`)),c.length===0?n:(c.push(`${n} ${i>0?e:p}%`),`linear-gradient(to right, ${c.join(", ")})`)}_formatScaleLabel(e,i){return Number.isInteger(e)?e.toString():e.toFixed(i)}_handleAction(e){if(!this._config||!this.hass)return;let i=this._config,s=i.tap_action??"more-info";if(s==="none")return;let n=e.detail?.action??"tap";if(s==="more-info")this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:i.entity}}));else if(s==="toggle"&&i.entity){let a=i.entity.split(".")[0];this.hass.callService(a,"toggle",{entity_id:i.entity})}else s==="navigate"&&i.navigate_path&&(history.pushState(null,"",i.navigate_path),this.dispatchEvent(new Event("location-changed",{bubbles:!0})))}setConfig(e){if(!e.entity)throw new Error("Entity is required");let i=e.max??st,s=e.min??-i;if(!Number.isFinite(s)||!Number.isFinite(i))throw new Error("min and max must be finite numbers");if(s>=i)throw new Error("min must be less than max");let r=e.precision??(i>=1e3?0:1),n=e.bar_height??Et;this._config={entity:e.entity,min:s,max:i,negative_color:e.negative_color??V.negative_color,positive_color:e.positive_color??V.positive_color,zero_divider_color:e.zero_divider_color??V.zero_divider_color,background_color:e.background_color??V.background_color,title:e.title,negative_label:e.negative_label??"",positive_label:e.positive_label??"",unit:e.unit,precision:r,bar_height:n,show_zero_divider:e.show_zero_divider??!0,show_value:e.show_value??!0,show_icon:e.show_icon??!1,icon:e.icon??"",inverted:e.inverted??!1,animation:e.animation??!0,show_scale_units:e.show_scale_units??!1,tap_action:e.tap_action??"more-info",navigate_path:e.navigate_path??""}}};L(S,"styles",G`
    :host {
      display: block;
    }

    .card {
      padding: 4px 0 0px 0;
    }

    /* Title row — name left, icon + value right */
    .title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px 4px 16px;
      min-height: 28px;
    }
    .title-row__name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
    }
    .title-row__value {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      white-space: nowrap;
      margin-left: 8px;
    }
    .title-row__icon {
      --mdc-icon-size: 18px;
      color: var(--primary-text-color);
    }

    /* Bar track — contains fills, divider, and labels */
    .bar-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 16px;
    }
    .bar-track {
      position: relative;
      flex: 1;
      border-radius: 6px;
      overflow: hidden;
    }

    /* Fill bars — absolutely positioned within the track, growing from zero */
    .bar-track__fill {
      position: absolute;
      top: 0;
      height: 100%;
      overflow: hidden;
    }
    .bar-track__fill--negative {
      border-radius: 6px 0 0 6px;
    }
    .bar-track__fill--positive {
      border-radius: 0 6px 6px 0;
    }

    /* Zero divider — thin vertical line at the zero position */
    .bar-track__zero-divider {
      position: absolute;
      top: 0;
      height: 100%;
      width: 2px;
      transform: translateX(-1px);
      z-index: 2;
    }

    /* Animation transition for smooth fill changes */
    .animated {
      transition: left 0.3s ease, width 0.3s ease;
    }

    /* Flow indicator — angled diagonal stripes that scroll in the flow direction */
    .flow-indicator {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      pointer-events: none;
      border-radius: inherit;
    }
    .flow-indicator__stripes {
      width: 200%;
      height: 100%;
      background: repeating-linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0) 0px,
        rgba(255, 255, 255, 0) 4px,
        rgba(255, 255, 255, 0.25) 4px,
        rgba(255, 255, 255, 0.25) 8px
      );
    }
    .flow-indicator--left .flow-indicator__stripes {
      animation: flow-left 5s linear infinite;
    }
    .flow-indicator--right .flow-indicator__stripes {
      animation: flow-right 5s linear infinite;
    }
    @keyframes flow-right {
      from { transform: translateX(-50%); }
      to { transform: translateX(0%); }
    }
    @keyframes flow-left {
      from { transform: translateX(0%); }
      to { transform: translateX(-50%); }
    }

    /* Unavailable state — dim the bar and fills */
    .unavailable .bar-track__negative-fill,
    .unavailable .bar-track__positive-fill,
    .unavailable .bar-track__zero-divider {
      opacity: 0.25;
    }

    /* Direction labels — positioned outside the bar track */
    .bar-label {
      font-size: 11px;
      color: var(--secondary-text-color);
      white-space: nowrap;
      min-width: 40px;
    }
    .bar-label--negative {
      text-align: right;
    }
    .bar-label--positive {
      text-align: left;
    }

    /* Scale labels row — min, zero, max beneath the bar */
    .scale-row {
      position: relative;
      padding: 2px 16px 4px 16px;
      font-size: 12px;
      color: var(--secondary-text-color);
      height: 20px;
    }
    .scale-row__label {
      position: absolute;
      font-size: 11px;
    }
    .scale-row__label--min {
      left: 16px;
    }
    .scale-row__label--max {
      right: 16px;
    }
    .scale-row__zero {
      position: absolute;
      font-weight: 500;
      font-size: 11px;
      transform: translateX(-50%);
    }
  `),F([At()],S.prototype,"_config",2),S=F([wt("horizontal-bidirectional-gauge")],S);window.customCards=window.customCards||[];window.customCards.push({type:"horizontal-bidirectional-gauge",name:"Horizontal Bidirectional Gauge",description:"Bidirectional bar gauge with zero divider for energy flow visualization"});})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
