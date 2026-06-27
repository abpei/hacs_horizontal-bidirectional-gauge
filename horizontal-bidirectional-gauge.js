"use strict";(()=>{var re=Object.defineProperty;var Ee=Object.getOwnPropertyDescriptor;var Ce=(o,e,t)=>e in o?re(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var F=(o,e,t,s)=>{for(var i=s>1?void 0:s?Ee(e,t):e,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&re(e,t,i),i};var L=(o,e,t)=>Ce(o,typeof e!="symbol"?e+"":e,t);var D=globalThis,j=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),oe=new WeakMap,C=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(j&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=oe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&oe.set(t,e))}return e}toString(){return this.cssText}},ne=o=>new C(typeof o=="string"?o:o+"",void 0,W),G=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new C(t,o,W)},ae=(o,e)=>{if(j)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=D.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,o.appendChild(s)}},X=j?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return ne(t)})(o):o;var{is:ke,defineProperty:Pe,getOwnPropertyDescriptor:Re,getOwnPropertyNames:Ue,getOwnPropertySymbols:Ne,getPrototypeOf:Me}=Object,b=globalThis,le=b.trustedTypes,Te=le?le.emptyScript:"",Oe=b.reactiveElementPolyfillSupport,k=(o,e)=>o,P={toAttribute(o,e){switch(e){case Boolean:o=o?Te:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},q=(o,e)=>!ke(o,e),ce={attribute:!0,type:String,converter:P,reflect:!1,useDefault:!1,hasChanged:q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Pe(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=Re(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){let l=i?.call(this);r?.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ce}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;let e=Me(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){let t=this.properties,s=[...Ue(t),...Ne(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(X(i))}else e!==void 0&&t.push(X(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ae(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:P).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:P;this._$Em=i;let l=n.fromAttribute(t,r.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,s,i=!1,r){if(e!==void 0){let n=this.constructor;if(i===!1&&(r=this[e]),s??(s=n.getPropertyOptions(e)),!((s.hasChanged??q)(r,t)||s.useDefault&&s.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,r,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[k("elementProperties")]=new Map,_[k("finalized")]=new Map,Oe?.({ReactiveElement:_}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.2");var U=globalThis,he=o=>o,B=U.trustedTypes,de=B?B.createPolicy("lit-html",{createHTML:o=>o}):void 0,be="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,ge="?"+g,ze=`<${ge}>`,w=document,N=()=>w.createComment(""),M=o=>o===null||typeof o!="object"&&typeof o!="function",te=Array.isArray,He=o=>te(o)||typeof o?.[Symbol.iterator]=="function",Z=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,ue=/>/g,$=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),me=/'/g,_e=/"/g,ve=/^(?:script|style|textarea|title)$/i,se=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),u=se(1),Xe=se(2),Ze=se(3),x=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),fe=new WeakMap,y=w.createTreeWalker(w,129);function $e(o,e){if(!te(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return de!==void 0?de.createHTML(e):e}var Le=(o,e)=>{let t=o.length-1,s=[],i,r=e===2?"<svg>":e===3?"<math>":"",n=R;for(let l=0;l<t;l++){let a=o[l],d,p,c=-1,m=0;for(;m<a.length&&(n.lastIndex=m,p=n.exec(a),p!==null);)m=n.lastIndex,n===R?p[1]==="!--"?n=pe:p[1]!==void 0?n=ue:p[2]!==void 0?(ve.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=$):p[3]!==void 0&&(n=$):n===$?p[0]===">"?(n=i??R,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?$:p[3]==='"'?_e:me):n===_e||n===me?n=$:n===pe||n===ue?n=R:(n=$,i=void 0);let f=n===$&&o[l+1].startsWith("/>")?" ":"";r+=n===R?a+ze:c>=0?(s.push(d),a.slice(0,c)+be+a.slice(c)+g+f):a+g+(c===-2?l:f)}return[$e(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},T=class o{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,n=0,l=e.length-1,a=this.parts,[d,p]=Le(e,t);if(this.el=o.createElement(d,s),y.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=y.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(be)){let m=p[n++],f=i.getAttribute(c).split(g),H=/([.?@])?(.*)/.exec(m);a.push({type:1,index:r,name:H[2],strings:f,ctor:H[1]==="."?J:H[1]==="?"?Q:H[1]==="@"?Y:S}),i.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:r}),i.removeAttribute(c));if(ve.test(i.tagName)){let c=i.textContent.split(g),m=c.length-1;if(m>0){i.textContent=B?B.emptyScript:"";for(let f=0;f<m;f++)i.append(c[f],N()),y.nextNode(),a.push({type:2,index:++r});i.append(c[m],N())}}}else if(i.nodeType===8)if(i.data===ge)a.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:r}),c+=g.length-1}r++}}static createElement(e,t){let s=w.createElement("template");return s.innerHTML=e,s}};function A(o,e,t=o,s){if(e===x)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,r=M(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=A(o,i._$AS(o,e.values),i,s)),e}var K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??w).importNode(t,!0);y.currentNode=i;let r=y.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new O(r,r.nextSibling,this,e):a.type===1?d=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(d=new ee(r,this,e)),this._$AV.push(d),a=s[++l]}n!==a?.index&&(r=y.nextNode(),n++)}return y.currentNode=w,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},O=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),M(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==x&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):He(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=T.createElement($e(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new K(i,this),n=r.u(this.options);r.p(t),this.T(n),this._$AH=r}}_$AC(e){let t=fe.get(e.strings);return t===void 0&&fe.set(e.strings,t=new T(e)),t}k(e){te(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let r of e)i===t.length?t.push(s=new o(this.O(N()),this.O(N()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=he(e).nextSibling;he(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,i){let r=this.strings,n=!1;if(r===void 0)e=A(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==x,n&&(this._$AH=e);else{let l=e,a,d;for(e=r[0],a=0;a<r.length-1;a++)d=A(this,l[s+a],t,a),d===x&&(d=this._$AH[a]),n||(n=!M(d)||d!==this._$AH[a]),d===h?e=h:e!==h&&(e+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!i&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},J=class extends S{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},Q=class extends S{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},Y=class extends S{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??h)===x)return;let s=this._$AH,i=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ee=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}};var De=U.litHtmlPolyfillSupport;De?.(T,O),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.3");var ye=(o,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let r=t?.renderBefore??null;s._$litPart$=i=new O(e.insertBefore(N(),r),r,void 0,t??{})}return i._$AI(o),i};var z=globalThis,v=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}};v._$litElement$=!0,v.finalized=!0,z.litElementHydrateSupport?.({LitElement:v});var je=z.litElementPolyfillSupport;je?.({LitElement:v});(z.litElementVersions??(z.litElementVersions=[])).push("4.2.2");var we=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};var qe={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:q},Be=(o=qe,e,t)=>{let{kind:s,metadata:i}=t,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),r.set(t.name,o),s==="accessor"){let{name:n}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,o,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,o,l),l}}}if(s==="setter"){let{name:n}=t;return function(l){let a=this[n];e.call(this,l),this.requestUpdate(n,a,o,!0,l)}}throw Error("Unsupported decorator location: "+s)};function xe(o){return(e,t)=>typeof t=="object"?Be(o,e,t):((s,i,r)=>{let n=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),n?Object.getOwnPropertyDescriptor(i,r):void 0})(o,e,t)}function Ae(o){return xe({...o,state:!0,attribute:!1})}var ie=100,Se=12,V={negative_color:"var(--error-color)",positive_color:"var(--success-color)",zero_divider_color:"var(--secondary-text-color)",background_color:"var(--secondary-background-color)"},E=class extends v{constructor(){super(...arguments);L(this,"_hass");L(this,"_config",null)}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{}}},{type:"expandable",name:"range",label:"Range",flatten:!0,schema:[{name:"min",selector:{number:{min:-1e5,max:1e5,step:1}}},{name:"max",default:ie,selector:{number:{min:-1e5,max:1e5,step:1}}}]},{type:"expandable",name:"colors",label:"Colors",flatten:!0,schema:[{name:"negative_color",selector:{ui_color:{}}},{name:"positive_color",selector:{ui_color:{}}},{name:"zero_divider_color",selector:{ui_color:{}}},{name:"background_color",selector:{ui_color:{}}}]},{type:"expandable",name:"labels",label:"Labels",flatten:!0,schema:[{name:"title",selector:{text:{}}},{name:"name",selector:{text:{}}},{name:"negative_label",selector:{text:{}}},{name:"positive_label",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"precision",default:1,selector:{number:{min:0,max:5,step:1}}}]},{type:"expandable",name:"appearance",label:"Appearance",flatten:!0,schema:[{name:"bar_height",default:Se,selector:{number:{min:4,max:50,step:1,unit_of_measurement:"px"}}},{name:"show_zero_divider",default:!0,selector:{boolean:{}}},{name:"show_value",default:!0,selector:{boolean:{}}},{name:"show_icon",default:!1,selector:{boolean:{}}},{name:"icon",selector:{icon:{}}},{name:"show_scale_units",default:!1,selector:{boolean:{}}}]},{type:"expandable",name:"behavior",label:"Behavior",flatten:!0,schema:[{name:"inverted",default:!1,selector:{boolean:{}}},{name:"animation",default:!0,selector:{boolean:{}}}]}],computeLabel:(r,n)=>({entity:"Entity",min:"Minimum value",max:"Maximum value",negative_color:"Negative (export) color",positive_color:"Positive (import) color",zero_divider_color:"Zero divider color",background_color:"Background color",title:"Card title",name:"Name override",negative_label:"Negative label",positive_label:"Positive label",unit:"Unit override",precision:"Decimal precision",bar_height:"Bar height",show_zero_divider:"Show zero divider",show_value:"Show value",show_icon:"Show icon",icon:"Icon",show_scale_units:"Show scale units",inverted:"Invert direction",animation:"Flow animation"})[r.name]||n?.(`ui.panel.lovelace.editor.card.generic.${r.name}`)||r.name,assertConfig:r=>{if(!r.entity||typeof r.entity!="string"||r.entity.trim()==="")throw new Error("Entity is required");if(r.min!=null&&r.max!=null&&Number(r.min)>=Number(r.max))throw new Error("Minimum must be less than maximum");if(r.precision!=null){let n=Number(r.precision);if(!Number.isInteger(n)||n<0||n>5)throw new Error("Precision must be between 0 and 5")}if(r.bar_height!=null){let n=Number(r.bar_height);if(!Number.isInteger(n)||n<4||n>50)throw new Error("Bar height must be between 4 and 50 pixels")}}}}static getStubConfig(){return{entity:"",max:ie}}getCardSize(){return 2}set hass(t){this._hass=t,this.requestUpdate()}get hass(){return this._hass}render(){if(!this._config)return h;let t=this._config,s=this.hass?.states?.[t.entity],i=!s||s.state==="unavailable"||s.state==="unknown",r=i?0:this._parseValue(s.state),n=this._clampValue(r),l=this._computeZeroPosition(),a=this._computeNegativeFill(n,l),d=this._computePositiveFill(n,l),p=i?"\u2014":this._formatValue(r),c=t.unit??s?.attributes?.unit_of_measurement??"",m=c?` ${c}`:"";return u`
      <ha-card class="card ${i?"unavailable":""}">
        ${this._renderTitleRow(p,m,s,t)}
        ${this._renderBarTrack(l,a,d,t)}
        ${this._renderScaleRow(t,l,c)}
      </ha-card>
    `}_renderTitleRow(t,s,i,r){if(r.title==="")return h;let n=r.title??r.name??i?.attributes?.friendly_name??r.entity,l=r.icon||i?.attributes?.icon||"";return u`
      <div class="title-row">
        <span class="title-row__name">${n}</span>
        <span class="title-row__value">
          ${r.show_icon&&l?u`<ha-icon
                class="title-row__icon"
                .icon=${l}
              ></ha-icon>`:h}
          ${r.show_value?u`<span>${t}${s}</span>`:h}
        </span>
      </div>
    `}_renderBarTrack(t,s,i,r){let n=r.animation?"animated":"";return u`
      <div class="bar-wrapper">
        ${r.negative_label?u`<span class="bar-label bar-label--negative"
              >${r.negative_label}</span
            >`:h}
        <div
          class="bar-track"
          style="height: ${r.bar_height}px; background: ${r.background_color};"
        >
          ${s>0?u`<div
                class="bar-track__fill bar-track__fill--negative ${n}"
                style="left: ${t-s}%; width: ${s}%; background: ${r.negative_color};"
              >
                ${r.animation?u`<div class="flow-indicator flow-indicator--left">
                      <div class="flow-indicator__stripes"></div>
                    </div>`:h}
              </div>`:h}
          ${i>0?u`<div
                class="bar-track__fill bar-track__fill--positive ${n}"
                style="left: ${t}%; width: ${i}%; background: ${r.positive_color};"
              >
                ${r.animation?u`<div class="flow-indicator flow-indicator--right">
                      <div class="flow-indicator__stripes"></div>
                    </div>`:h}
              </div>`:h}
          ${r.show_zero_divider?u`<div
                class="bar-track__zero-divider"
                style="left: ${t}%; background: ${r.zero_divider_color};"
              ></div>`:h}
        </div>
        ${r.positive_label?u`<span class="bar-label bar-label--positive"
              >${r.positive_label}</span
            >`:h}
      </div>
    `}_renderScaleRow(t,s,i){let r=t.show_scale_units&&i?` ${i}`:"";return u`
      <div class="scale-row">
        <span class="scale-row__label scale-row__label--min"
          >${this._formatScaleLabel(t.min,t.precision)}${r}</span
        >
        <span class="scale-row__zero" style="left: ${s}%;">0${r}</span>
        <span class="scale-row__label scale-row__label--max"
          >${this._formatScaleLabel(t.max,t.precision)}${r}</span
        >
      </div>
    `}_computeZeroPosition(){let t=this._config;return(0-t.min)/(t.max-t.min)*100}_computeNegativeFill(t,s){let i=this._config.inverted?-t:t;if(i>=0)return 0;let r=this._config,n=Math.abs(r.min);return n===0?0:Math.abs(i)/n*s}_computePositiveFill(t,s){let i=this._config.inverted?-t:t;if(i<=0)return 0;let r=this._config,n=100-s;return r.max===0?0:i/r.max*n}_clampValue(t){let s=this._config;return Math.max(s.min,Math.min(s.max,t))}_parseValue(t){let s=parseFloat(t);return Number.isFinite(s)?s:0}_formatValue(t){let s=this._config;return t.toFixed(s.precision)}_chevrons(t){return(t==="left"?"\u25C2 ":" \u25B8").repeat(40)}_buildBarBackground(t,s,i,r){let n=r.background_color,l=r.negative_color,a=r.positive_color,d=Math.max(0,t-s),p=Math.min(100,t+i),c=[];return s>0&&(c.push(`${n} ${d}%`),c.push(`${l} ${d}%`),c.push(`${l} ${t}%`)),i>0&&(c.push(`${n} ${t}%`),c.push(`${a} ${t}%`),c.push(`${a} ${p}%`)),c.length===0?n:(c.push(`${n} ${s>0?t:p}%`),`linear-gradient(to right, ${c.join(", ")})`)}_formatScaleLabel(t,s){return Number.isInteger(t)?t.toString():t.toFixed(s)}setConfig(t){if(!t.entity)throw new Error("Entity is required");let s=t.max??ie,i=t.min??-s;if(!Number.isFinite(i)||!Number.isFinite(s))throw new Error("min and max must be finite numbers");if(i>=s)throw new Error("min must be less than max");let r=t.precision??(s>=1e3?0:1),n=t.bar_height??Se;this._config={entity:t.entity,min:i,max:s,negative_color:t.negative_color??V.negative_color,positive_color:t.positive_color??V.positive_color,zero_divider_color:t.zero_divider_color??V.zero_divider_color,background_color:t.background_color??V.background_color,title:t.title,negative_label:t.negative_label??"",positive_label:t.positive_label??"",unit:t.unit,precision:r,name:t.name??"",bar_height:n,show_zero_divider:t.show_zero_divider??!0,show_value:t.show_value??!0,show_icon:t.show_icon??!1,icon:t.icon??"",inverted:t.inverted??!1,animation:t.animation??!0,show_scale_units:t.show_scale_units??!1}}};L(E,"styles",G`
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
  `),F([Ae()],E.prototype,"_config",2),E=F([we("horizontal-bidirectional-gauge")],E);window.customCards=window.customCards||[];window.customCards.push({type:"horizontal-bidirectional-gauge",name:"Horizontal Bidirectional Gauge",description:"Bidirectional bar gauge with zero divider for energy flow visualization"});})();
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
