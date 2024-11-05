/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,C=O.trustedTypes,D=C?C.createPolicy("lit-html",{createHTML:r=>r}):void 0,M="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+A,tt=`<${U}>`,g=document,H=()=>g.createComment(""),w=r=>r===null||typeof r!="object"&&typeof r!="function",B=Array.isArray,F=r=>B(r)||typeof r?.[Symbol.iterator]=="function",R=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,L=/>/g,f=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,V=/"/g,z=/^(?:script|style|textarea|title)$/i,v=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),W=new WeakMap,m=g.createTreeWalker(g,129);function G(r,t){if(!B(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return D!==void 0?D.createHTML(t):t}const Z=(r,t)=>{const i=r.length-1,n=[];let e,o=t===2?"<svg>":t===3?"<math>":"",s=x;for(let h=0;h<i;h++){const l=r[h];let a,d,c=-1,u=0;for(;u<l.length&&(s.lastIndex=u,d=s.exec(l),d!==null);)u=s.lastIndex,s===x?d[1]==="!--"?s=k:d[1]!==void 0?s=L:d[2]!==void 0?(z.test(d[2])&&(e=RegExp("</"+d[2],"g")),s=f):d[3]!==void 0&&(s=f):s===f?d[0]===">"?(s=e??x,c=-1):d[1]===void 0?c=-2:(c=s.lastIndex-d[2].length,a=d[1],s=d[3]===void 0?f:d[3]==='"'?V:j):s===V||s===j?s=f:s===k||s===L?s=x:(s=f,e=void 0);const _=s===f&&r[h+1].startsWith("/>")?" ":"";o+=s===x?l+tt:c>=0?(n.push(a),l.slice(0,c)+M+l.slice(c)+A+_):l+A+(c===-2?h:_)}return[G(r,o+(r[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class P{constructor({strings:t,_$litType$:i},n){let e;this.parts=[];let o=0,s=0;const h=t.length-1,l=this.parts,[a,d]=Z(t,i);if(this.el=P.createElement(a,n),m.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(e=m.nextNode())!==null&&l.length<h;){if(e.nodeType===1){if(e.hasAttributes())for(const c of e.getAttributeNames())if(c.endsWith(M)){const u=d[s++],_=e.getAttribute(c).split(A),N=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:N[2],strings:_,ctor:N[1]==="."?q:N[1]==="?"?J:N[1]==="@"?K:I}),e.removeAttribute(c)}else c.startsWith(A)&&(l.push({type:6,index:o}),e.removeAttribute(c));if(z.test(e.tagName)){const c=e.textContent.split(A),u=c.length-1;if(u>0){e.textContent=C?C.emptyScript:"";for(let _=0;_<u;_++)e.append(c[_],H()),m.nextNode(),l.push({type:2,index:++o});e.append(c[u],H())}}}else if(e.nodeType===8)if(e.data===U)l.push({type:2,index:o});else{let c=-1;for(;(c=e.data.indexOf(A,c+1))!==-1;)l.push({type:7,index:o}),c+=A.length-1}o++}}static createElement(t,i){const n=g.createElement("template");return n.innerHTML=t,n}}function y(r,t,i=r,n){if(t===v)return t;let e=n!==void 0?i._$Co?.[n]:i._$Cl;const o=w(t)?void 0:t._$litDirective$;return e?.constructor!==o&&(e?._$AO?.(!1),o===void 0?e=void 0:(e=new o(r),e._$AT(r,i,n)),n!==void 0?(i._$Co??=[])[n]=e:i._$Cl=e),e!==void 0&&(t=y(r,e._$AS(r,t.values),e,n)),t}class Y{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,e=(t?.creationScope??g).importNode(i,!0);m.currentNode=e;let o=m.nextNode(),s=0,h=0,l=n[0];for(;l!==void 0;){if(s===l.index){let a;l.type===2?a=new b(o,o.nextSibling,this,t):l.type===1?a=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(a=new Q(o,this,t)),this._$AV.push(a),l=n[++h]}s!==l?.index&&(o=m.nextNode(),s++)}return m.currentNode=g,e}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class b{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,n,e){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=y(this,t,i),w(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):F(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&w(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:n}=t,e=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=P.createElement(G(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===e)this._$AH.p(i);else{const o=new Y(e,this),s=o.u(this.options);o.p(i),this.T(s),this._$AH=o}}_$AC(t){let i=W.get(t.strings);return i===void 0&&W.set(t.strings,i=new P(t)),i}k(t){B(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,e=0;for(const o of t)e===i.length?i.push(n=new b(this.O(H()),this.O(H()),this,this.options)):n=i[e],n._$AI(o),e++;e<i.length&&(this._$AR(n&&n._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,e,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=p}_$AI(t,i=this,n,e){const o=this.strings;let s=!1;if(o===void 0)t=y(this,t,i,0),s=!w(t)||t!==this._$AH&&t!==v,s&&(this._$AH=t);else{const h=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=y(this,h[n+l],i,l),a===v&&(a=this._$AH[l]),s||=!w(a)||a!==this._$AH[l],a===p?t=p:t!==p&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}s&&!e&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class q extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class J extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class K extends I{constructor(t,i,n,e,o){super(t,i,n,e,o),this.type=5}_$AI(t,i=this){if((t=y(this,t,i,0)??p)===v)return;const n=this._$AH,e=t===p&&n!==p||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==p&&(n===p||e);e&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){y(this,t)}}const $={M,P:A,A:U,C:1,L:Z,R:Y,D:F,V:y,I:b,H:I,N:J,U:K,B:q,F:Q},et=O.litHtmlPolyfillSupport;et?.(P,b),(O.litHtmlVersions??=[]).push("3.2.1");const it=(r,t,i)=>{const n=i?.renderBefore??t;let e=n._$litPart$;if(e===void 0){const o=i?.renderBefore??null;n._$litPart$=e=new b(t.insertBefore(H(),o),o,void 0,i??{})}return e._$AI(r),e};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=null;const nt={boundAttributeSuffix:$.M,marker:$.P,markerMatch:$.A,HTML_RESULT:$.C,getTemplateHtml:$.L,overrideDirectiveResolve:(r,t)=>class extends r{_$AS(i,n){return t(this,n)}},patchDirectiveResolve:(r,t)=>{if(r.prototype._$AS!==t){S??=r.prototype._$AS.name;for(let i=r.prototype;i!==Object.prototype;i=Object.getPrototypeOf(i))if(i.hasOwnProperty(S))return void(i[S]=t);throw Error("Internal error: It is possible that both dev mode and production mode Lit was mixed together during SSR. Please comment on the issue: https://github.com/lit/lit/issues/4527")}},setDirectiveClass(r,t){r._$litDirective$=t},getAttributePartCommittedValue:(r,t,i)=>{let n=v;return r.j=e=>n=e,r._$AI(t,r,i),n},connectedDisconnectable:r=>({...r,_$AU:!0}),resolveDirective:$.V,AttributePart:$.H,PropertyPart:$.B,BooleanAttributePart:$.N,EventPart:$.U,ElementPart:$.F,TemplateInstance:$.R,isIterable:$.D,ChildPart:$.I};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=r=>r===null||typeof r!="object"&&typeof r!="function",st=(r,t)=>r?._$litType$!==void 0,ot=r=>r?._$litType$?.h!=null,lt=r=>r.strings===void 0;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{TemplateInstance:at,isIterable:ht,resolveDirective:X,ChildPart:E,ElementPart:ct}=nt,dt=(r,t,i={})=>{if(t._$litPart$!==void 0)throw Error("container already contains a live render");let n,e,o;const s=[],h=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT);let l;for(;(l=h.nextNode())!==null;){const a=l.data;if(a.startsWith("lit-part")){if(s.length===0&&n!==void 0)throw Error(`There must be only one root part per container. Found a part marker (${l}) when we already have a root part marker (${e})`);o=pt(r,l,s,i),n===void 0&&(n=o),e??=l}else if(a.startsWith("lit-node"))ut(l,s,i);else if(a.startsWith("/lit-part")){if(s.length===1&&o!==n)throw Error("internal error");o=$t(l,o,s)}}if(n===void 0){const a=t instanceof ShadowRoot?"{container.host.localName}'s shadow root":t instanceof DocumentFragment?"DocumentFragment":t.localName;console.error(`There should be exactly one root part in a render container, but we didn't find any in ${a}.`)}t._$litPart$=n},pt=(r,t,i,n)=>{let e,o;if(i.length===0)o=new E(t,null,void 0,n),e=r;else{const s=i[i.length-1];if(s.type==="template-instance")o=new E(t,null,s.instance,n),s.instance._$AV.push(o),e=s.result.values[s.instancePartIndex++],s.templatePartIndex++;else if(s.type==="iterable"){o=new E(t,null,s.part,n);const h=s.iterator.next();if(h.done)throw e=void 0,s.done=!0,Error("Unhandled shorter than expected iterable");e=h.value,s.part._$AH.push(o)}else o=new E(t,null,s.part,n)}if(e=X(o,e),e===v)i.push({part:o,type:"leaf"});else if(rt(e))i.push({part:o,type:"leaf"}),o._$AH=e;else if(st(e)){if(ot(e))throw Error("compiled templates are not supported");const s="lit-part "+At(e);if(t.data!==s)throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");{const h=E.prototype._$AC(e),l=new at(h,o);i.push({type:"template-instance",instance:l,part:o,templatePartIndex:0,instancePartIndex:0,result:e}),o._$AH=l}}else ht(e)?(i.push({part:o,type:"iterable",value:e,iterator:e[Symbol.iterator](),done:!1}),o._$AH=[]):(i.push({part:o,type:"leaf"}),o._$AH=e??"");return o},$t=(r,t,i)=>{if(t===void 0)throw Error("unbalanced part marker");t._$AB=r;const n=i.pop();if(n.type==="iterable"&&!n.iterator.next().done)throw Error("unexpected longer than expected iterable");if(i.length>0)return i[i.length-1].part},ut=(r,t,i)=>{const n=/lit-node (\d+)/.exec(r.data),e=parseInt(n[1]),o=r.nextElementSibling;if(o===null)throw Error("could not find node for attribute parts");o.removeAttribute("defer-hydration");const s=t[t.length-1];if(s.type!=="template-instance")throw Error("Hydration value mismatch: Primitive found where TemplateResult expected. This usually occurs due to conditional rendering that resulted in a different value or template being rendered between the server and client.");{const h=s.instance;for(;;){const l=h._$AD.parts[s.templatePartIndex];if(l===void 0||l.type!==T.ATTRIBUTE&&l.type!==T.ELEMENT||l.index!==e)break;if(l.type===T.ATTRIBUTE){const a=new l.ctor(o,l.name,l.strings,s.instance,i),d=lt(a)?s.result.values[s.instancePartIndex]:s.result.values,c=!(a.type===T.EVENT||a.type===T.PROPERTY);a._$AI(d,a,s.instancePartIndex,c),s.instancePartIndex+=l.strings.length-1,h._$AV.push(a)}else{const a=new ct(o,s.instance,i);X(a,s.result.values[s.instancePartIndex++]),h._$AV.push(a)}s.templatePartIndex++}}},At=r=>{const t=new Uint32Array(2).fill(5381);for(const n of r.strings)for(let e=0;e<n.length;e++)t[e%2]=33*t[e%2]^n.charCodeAt(e);const i=String.fromCharCode(...new Uint8Array(t.buffer));return btoa(i)};globalThis.litElementHydrateSupport=({LitElement:r})=>{const t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(r),"observedAttributes").get;Object.defineProperty(r,"observedAttributes",{get(){return[...t.call(this),"defer-hydration"]}});const i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,h,l){s==="defer-hydration"&&l===null&&n.call(this),i.call(this,s,h,l)};const n=r.prototype.connectedCallback;r.prototype.connectedCallback=function(){this.hasAttribute("defer-hydration")||n.call(this)};const e=r.prototype.createRenderRoot;r.prototype.createRenderRoot=function(){return this.shadowRoot?(this._$AG=!0,this.shadowRoot):e.call(this)};const o=Object.getPrototypeOf(r.prototype).update;r.prototype.update=function(s){const h=this.render();if(o.call(this,s),this._$AG){this._$AG=!1;for(let l=0;l<this.attributes.length;l++){const a=this.attributes[l];if(a.name.startsWith("hydrate-internals-")){const d=a.name.slice(18);this.removeAttribute(d),this.removeAttribute(a.name)}}dt(h,this.renderRoot,this.renderOptions)}else it(h,this.renderRoot,this.renderOptions)}};
