"use strict";(()=>{var o0=Object.create;var _l=Object.defineProperty;var Jb=Object.getOwnPropertyDescriptor;var s0=Object.getOwnPropertyNames;var l0=Object.getPrototypeOf,c0=Object.prototype.hasOwnProperty;var ie=(a,t)=>()=>(a&&(t=a(a=0)),t);var u0=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),eg=(a,t)=>{for(var e in t)_l(a,e,{get:t[e],enumerable:!0})},p0=(a,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of s0(t))!c0.call(a,n)&&n!==e&&_l(a,n,{get:()=>t[n],enumerable:!(i=Jb(t,n))||i.enumerable});return a};var m0=(a,t,e)=>(e=a!=null?o0(l0(a)):{},p0(t||!a||!a.__esModule?_l(e,"default",{value:a,enumerable:!0}):e,a));var p=(a,t,e,i)=>{for(var n=i>1?void 0:i?Jb(t,e):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&_l(t,e,n),n};function ig(a,t){return a.exec(t)?.groups}var ag=ie(()=>{"use strict"});function Yl(a){let t=a.type;if(ng.test(a.type)&&"components"in a){t="(";let e=a.components.length;for(let n=0;n<e;n++){let r=a.components[n];t+=Yl(r),n<e-1&&(t+=", ")}let i=ig(ng,a.type);return t+=`)${i?.array??""}`,Yl({...a,type:t})}return"indexed"in a&&a.indexed&&(t=`${t} indexed`),a.name?`${t} ${a.name}`:t}var ng,rg=ie(()=>{"use strict";ag();ng=/^tuple(?<array>(\[(\d*)\])*)$/});function $n(a){let t="",e=a.length;for(let i=0;i<e;i++){let n=a[i];t+=Yl(n),i!==e-1&&(t+=", ")}return t}var og=ie(()=>{"use strict";rg()});function hy(a){return a.type==="function"?`function ${a.name}(${$n(a.inputs)})${a.stateMutability&&a.stateMutability!=="nonpayable"?` ${a.stateMutability}`:""}${a.outputs.length?` returns (${$n(a.outputs)})`:""}`:a.type==="event"?`event ${a.name}(${$n(a.inputs)})`:a.type==="error"?`error ${a.name}(${$n(a.inputs)})`:a.type==="constructor"?`constructor(${$n(a.inputs)})${a.stateMutability==="payable"?" payable":""}`:a.type==="fallback"?"fallback()":"receive() external payable"}var sg=ie(()=>{"use strict";og()});var lg=ie(()=>{"use strict";sg()});function Vt(a,{includeName:t=!1}={}){if(a.type!=="function"&&a.type!=="event"&&a.type!=="error")throw new vo(a.type);return`${a.name}(${go(a.inputs,{includeName:t})})`}function go(a,{includeName:t=!1}={}){return a?a.map(e=>g0(e,{includeName:t})).join(t?", ":","):""}function g0(a,{includeName:t}){return a.type.startsWith("tuple")?`(${go(a.components,{includeName:t})})${a.type.slice(5)}`:a.type+(t&&a.name?` ${a.name}`:"")}var pn=ie(()=>{"use strict";_t()});function at(a,{strict:t=!0}={}){return!a||typeof a!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(a):a.startsWith("0x")}var wi=ie(()=>{"use strict"});function $e(a){return at(a,{strict:!1})?Math.ceil((a.length-2)/2):a.length}var Aa=ie(()=>{"use strict";wi()});var cg,ug=ie(()=>{"use strict";cg="2.9.3"});var pg,mn,mg,Lo=ie(()=>{"use strict";ug();pg=a=>a,mn=a=>a,mg=()=>`viem@${cg}`});function dg(a,t){return t?.(a)?a:a&&typeof a=="object"&&"cause"in a?dg(a.cause,t):t?null:a}var F,Ge=ie(()=>{"use strict";Lo();F=class a extends Error{constructor(t,e={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:mg()});let i=e.cause instanceof a?e.cause.details:e.cause?.message?e.cause.message:e.details,n=e.cause instanceof a&&e.cause.docsPath||e.docsPath;this.message=[t||"An error occurred.","",...e.metaMessages?[...e.metaMessages,""]:[],...n?[`Docs: https://viem.sh${n}${e.docsSlug?`#${e.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join(`
`),e.cause&&(this.cause=e.cause),this.details=i,this.docsPath=n,this.metaMessages=e.metaMessages,this.shortMessage=t}walk(t){return dg(this,t)}}});var _o,Xn,dn,xi,wo,xo,Io,hn,Eo,fn,Qn,aa,To,$l,So,pi,Ii,Co,ko,Ao,vo,_t=ie(()=>{"use strict";pn();Aa();Ge();_o=class extends F{constructor({docsPath:t}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}},Xn=class extends F{constructor({docsPath:t}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}},dn=class extends F{constructor({data:t,params:e,size:i}){super([`Data size of ${i} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${go(e,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=e,this.size=i}},xi=class extends F{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}},wo=class extends F{constructor({expectedLength:t,givenLength:e,type:i}){super([`ABI encoding array length mismatch for type ${i}.`,`Expected length: ${t}`,`Given length: ${e}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}},xo=class extends F{constructor({expectedSize:t,value:e}){super(`Size of bytes "${e}" (bytes${$e(e)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}},Io=class extends F{constructor({expectedLength:t,givenLength:e}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${e}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}},hn=class extends F{constructor(t,{docsPath:e}){super([`Encoded error signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}},Eo=class extends F{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}},fn=class extends F{constructor(t,{docsPath:e}){super([`Encoded event signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}},Qn=class extends F{constructor(t,{docsPath:e}={}){super([`Event ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}},aa=class extends F{constructor(t,{docsPath:e}={}){super([`Function ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}},To=class extends F{constructor(t,{docsPath:e}){super([`Function "${t}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}},$l=class extends F{constructor(t,e){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${t.type}\` in \`${Vt(t.abiItem)}\`, and`,`\`${e.type}\` in \`${Vt(e.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}},So=class extends F{constructor({expectedSize:t,givenSize:e}){super(`Expected bytes${t}, got bytes${e}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}},pi=class extends F{constructor({abiItem:t,data:e,params:i,size:n}){super([`Data size of ${n} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${go(i,{includeName:!0})})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=e,this.params=i,this.size=n}},Ii=class extends F{constructor({abiItem:t,param:e}){super([`Expected a topic for indexed event parameter${e.name?` "${e.name}"`:""} on event "${Vt(t,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}},Co=class extends F{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}},ko=class extends F{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}},Ao=class extends F{constructor(t){super([`Value "${t}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}},vo=class extends F{constructor(t){super([`"${t}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}});var Do,Mo,Bo,Ql=ie(()=>{"use strict";Ge();Do=class extends F{constructor({offset:t,position:e,size:i}){super(`Slice ${e==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${i}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}},Mo=class extends F{constructor({size:t,targetSize:e,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${t}) exceeds padding size (${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}},Bo=class extends F{constructor({size:t,targetSize:e,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} is expected to be ${e} ${i} long, but is ${t} ${i} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}});function Da(a,{dir:t,size:e=32}={}){return typeof a=="string"?na(a,{dir:t,size:e}):v0(a,{dir:t,size:e})}function na(a,{dir:t,size:e=32}={}){if(e===null)return a;let i=a.replace("0x","");if(i.length>e*2)throw new Mo({size:Math.ceil(i.length/2),targetSize:e,type:"hex"});return`0x${i[t==="right"?"padEnd":"padStart"](e*2,"0")}`}function v0(a,{dir:t,size:e=32}={}){if(e===null)return a;if(a.length>e)throw new Mo({size:a.length,targetSize:e,type:"bytes"});let i=new Uint8Array(e);for(let n=0;n<e;n++){let r=t==="right";i[r?n:e-n-1]=a[r?n:a.length-n-1]}return i}var Zl=ie(()=>{"use strict";Ql()});var Jl,ec,tc,ic=ie(()=>{"use strict";Ge();Jl=class extends F{constructor({max:t,min:e,signed:i,size:n,value:r}){super(`Number "${r}" is not in safe ${n?`${n*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${t?`(${e} to ${t})`:`(above ${e})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}},ec=class extends F{constructor(t){super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}},tc=class extends F{constructor({givenSize:t,maxSize:e}){super(`Size cannot exceed ${e} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}});function yn(a,{dir:t="left"}={}){let e=typeof a=="string"?a.replace("0x",""):a,i=0;for(let n=0;n<e.length-1&&e[t==="left"?n:e.length-n-1].toString()==="0";n++)i++;return e=t==="left"?e.slice(i):e.slice(0,e.length-i),typeof a=="string"?(e.length===1&&t==="right"&&(e=`${e}0`),`0x${e.length%2===1?`0${e}`:e}`):e}var ac=ie(()=>{"use strict"});function ii(a,{size:t}){if($e(a)>t)throw new tc({givenSize:$e(a),maxSize:t})}function Ma(a,t={}){let{signed:e}=t;t.size&&ii(a,{size:t.size});let i=BigInt(a);if(!e)return i;let n=(a.length-2)/2,r=(1n<<BigInt(n)*8n-1n)-1n;return i<=r?i:i-BigInt(`0x${"f".padStart(n*2,"f")}`)-1n}function Mt(a,t={}){return Number(Ma(a,t))}var mi=ie(()=>{"use strict";ic();Aa()});function Qe(a,t={}){return typeof a=="number"||typeof a=="bigint"?ye(a,t):typeof a=="string"?bn(a,t):typeof a=="boolean"?Po(a,t):bt(a,t)}function Po(a,t={}){let e=`0x${Number(a)}`;return typeof t.size=="number"?(ii(e,{size:t.size}),Da(e,{size:t.size})):e}function bt(a,t={}){let e="";for(let n=0;n<a.length;n++)e+=L0[a[n]];let i=`0x${e}`;return typeof t.size=="number"?(ii(i,{size:t.size}),Da(i,{dir:"right",size:t.size})):i}function ye(a,t={}){let{signed:e,size:i}=t,n=BigInt(a),r;i?e?r=(1n<<BigInt(i)*8n-1n)-1n:r=2n**(BigInt(i)*8n)-1n:typeof a=="number"&&(r=BigInt(Number.MAX_SAFE_INTEGER));let o=typeof r=="bigint"&&e?-r-1n:0;if(r&&n>r||n<o){let l=typeof a=="bigint"?"n":"";throw new Jl({max:r?`${r}${l}`:void 0,min:`${o}${l}`,signed:e,size:i,value:`${a}${l}`})}let s=`0x${(e&&n<0?(1n<<BigInt(i*8))+BigInt(n):n).toString(16)}`;return i?Da(s,{size:i}):s}function bn(a,t={}){let e=_0.encode(a);return bt(e,t)}var L0,_0,Re=ie(()=>{"use strict";ic();Zl();mi();L0=Array.from({length:256},(a,t)=>t.toString(16).padStart(2,"0"));_0=new TextEncoder});function ai(a,t={}){return typeof a=="number"||typeof a=="bigint"?I0(a,t):typeof a=="boolean"?x0(a,t):at(a)?nc(a,t):$t(a,t)}function x0(a,t={}){let e=new Uint8Array(1);return e[0]=Number(a),typeof t.size=="number"?(ii(e,{size:t.size}),Da(e,{size:t.size})):e}function hg(a){if(a>=ra.zero&&a<=ra.nine)return a-ra.zero;if(a>=ra.A&&a<=ra.F)return a-(ra.A-10);if(a>=ra.a&&a<=ra.f)return a-(ra.a-10)}function nc(a,t={}){let e=a;t.size&&(ii(e,{size:t.size}),e=Da(e,{dir:"right",size:t.size}));let i=e.slice(2);i.length%2&&(i=`0${i}`);let n=i.length/2,r=new Uint8Array(n);for(let o=0,s=0;o<n;o++){let l=hg(i.charCodeAt(s++)),c=hg(i.charCodeAt(s++));if(l===void 0||c===void 0)throw new F(`Invalid byte sequence ("${i[s-2]}${i[s-1]}" in "${i}").`);r[o]=l*16+c}return r}function I0(a,t){let e=ye(a,t);return nc(e)}function $t(a,t={}){let e=w0.encode(a);return typeof t.size=="number"?(ii(e,{size:t.size}),Da(e,{dir:"right",size:t.size})):e}var w0,ra,Ei=ie(()=>{"use strict";Ge();wi();Zl();mi();Re();w0=new TextEncoder;ra={zero:48,nine:57,A:65,F:70,a:97,f:102}});function Ro(a){if(!Number.isSafeInteger(a)||a<0)throw new Error(`Wrong positive integer: ${a}`)}function No(a,...t){if(!(a instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(a.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${a.length}`)}function fg(a){if(typeof a!="function"||typeof a.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ro(a.outputLen),Ro(a.blockLen)}function oa(a,t=!0){if(a.destroyed)throw new Error("Hash instance has been destroyed");if(t&&a.finished)throw new Error("Hash#digest() has already been called")}function rc(a,t){No(a);let e=t.outputLen;if(a.length<e)throw new Error(`digestInto() expects output buffer of length at least ${e}`)}var oc=ie(()=>{"use strict"});function E0(a,t=!1){return t?{h:Number(a&sc),l:Number(a>>yg&sc)}:{h:Number(a>>yg&sc)|0,l:Number(a&sc)|0}}function bg(a,t=!1){let e=new Uint32Array(a.length),i=new Uint32Array(a.length);for(let n=0;n<a.length;n++){let{h:r,l:o}=E0(a[n],t);[e[n],i[n]]=[r,o]}return[e,i]}var sc,yg,gg,vg,Lg,_g,wg=ie(()=>{"use strict";sc=BigInt(4294967295),yg=BigInt(32);gg=(a,t,e)=>a<<e|t>>>32-e,vg=(a,t,e)=>t<<e|a>>>32-e,Lg=(a,t,e)=>t<<e-32|a>>>64-e,_g=(a,t,e)=>a<<e-32|t>>>64-e});var lc,xg=ie(()=>{"use strict";lc=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0});function S0(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function Pa(a){if(typeof a=="string"&&(a=S0(a)),!Ig(a))throw new Error(`expected Uint8Array, got ${typeof a}`);return a}function Tg(...a){let t=new Uint8Array(a.reduce((i,n)=>i+n.length,0)),e=0;return a.forEach(i=>{if(!Ig(i))throw new Error("Uint8Array expected");t.set(i,e),e+=i.length}),t}function uc(a){let t=i=>a().update(Pa(i)).digest(),e=a();return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=()=>a(),t}function Sg(a){let t=(i,n)=>a(n).update(Pa(i)).digest(),e=a({});return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=i=>a(i),t}function Cg(a=32){if(lc&&typeof lc.getRandomValues=="function")return lc.getRandomValues(new Uint8Array(a));throw new Error("crypto.getRandomValues must be defined")}var Ig,Eg,cc,Ti,T0,Ba,c2,Zn=ie(()=>{"use strict";xg();Ig=a=>a instanceof Uint8Array,Eg=a=>new Uint32Array(a.buffer,a.byteOffset,Math.floor(a.byteLength/4)),cc=a=>new DataView(a.buffer,a.byteOffset,a.byteLength),Ti=(a,t)=>a<<32-t|a>>>t,T0=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!T0)throw new Error("Non little-endian hardware is not supported");Ba=class{clone(){return this._cloneInto()}},c2={}.toString});function R0(a,t=24){let e=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let o=0;o<10;o++)e[o]=a[o]^a[o+10]^a[o+20]^a[o+30]^a[o+40];for(let o=0;o<10;o+=2){let s=(o+8)%10,l=(o+2)%10,c=e[l],u=e[l+1],m=kg(c,u,1)^e[s],v=Ag(c,u,1)^e[s+1];for(let w=0;w<50;w+=10)a[o+w]^=m,a[o+w+1]^=v}let n=a[2],r=a[3];for(let o=0;o<24;o++){let s=Mg[o],l=kg(n,r,s),c=Ag(n,r,s),u=Dg[o];n=a[u],r=a[u+1],a[u]=l,a[u+1]=c}for(let o=0;o<50;o+=10){for(let s=0;s<10;s++)e[s]=a[o+s];for(let s=0;s<10;s++)a[o+s]^=~e[(s+2)%10]&e[(s+4)%10]}a[0]^=B0[i],a[1]^=P0[i]}e.fill(0)}var Dg,Mg,Bg,C0,Oo,k0,A0,D0,M0,B0,P0,kg,Ag,pc,Ra,h2,f2,y2,b2,g2,Pg,v2,L2,Rg,_2,w2,Ng=ie(()=>{"use strict";oc();wg();Zn();[Dg,Mg,Bg]=[[],[],[]],C0=BigInt(0),Oo=BigInt(1),k0=BigInt(2),A0=BigInt(7),D0=BigInt(256),M0=BigInt(113);for(let a=0,t=Oo,e=1,i=0;a<24;a++){[e,i]=[i,(2*e+3*i)%5],Dg.push(2*(5*i+e)),Mg.push((a+1)*(a+2)/2%64);let n=C0;for(let r=0;r<7;r++)t=(t<<Oo^(t>>A0)*M0)%D0,t&k0&&(n^=Oo<<(Oo<<BigInt(r))-Oo);Bg.push(n)}[B0,P0]=bg(Bg,!0),kg=(a,t,e)=>e>32?Lg(a,t,e):gg(a,t,e),Ag=(a,t,e)=>e>32?_g(a,t,e):vg(a,t,e);pc=class a extends Ba{constructor(t,e,i,n=!1,r=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=i,this.enableXOF=n,this.rounds=r,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Ro(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Eg(this.state)}keccak(){R0(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){oa(this);let{blockLen:e,state:i}=this;t=Pa(t);let n=t.length;for(let r=0;r<n;){let o=Math.min(e-this.pos,n-r);for(let s=0;s<o;s++)i[this.pos++]^=t[r++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:e,pos:i,blockLen:n}=this;t[i]^=e,e&128&&i===n-1&&this.keccak(),t[n-1]^=128,this.keccak()}writeInto(t){oa(this,!1),No(t),this.finish();let e=this.state,{blockLen:i}=this;for(let n=0,r=t.length;n<r;){this.posOut>=i&&this.keccak();let o=Math.min(i-this.posOut,r-n);t.set(e.subarray(this.posOut,this.posOut+o),n),this.posOut+=o,n+=o}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Ro(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(rc(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:e,suffix:i,outputLen:n,rounds:r,enableXOF:o}=this;return t||(t=new a(e,i,n,o,r)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=r,t.suffix=i,t.outputLen=n,t.enableXOF=o,t.destroyed=this.destroyed,t}},Ra=(a,t,e)=>uc(()=>new pc(t,a,e)),h2=Ra(6,144,224/8),f2=Ra(6,136,256/8),y2=Ra(6,104,384/8),b2=Ra(6,72,512/8),g2=Ra(1,144,224/8),Pg=Ra(1,136,256/8),v2=Ra(1,104,384/8),L2=Ra(1,72,512/8),Rg=(a,t,e)=>Sg((i={})=>new pc(t,a,i.dkLen===void 0?e:i.dkLen,!0)),_2=Rg(31,168,128/8),w2=Rg(31,136,256/8)});function mt(a,t){let e=t||"hex",i=Pg(at(a,{strict:!1})?ai(a):a);return e==="bytes"?i:Qe(i)}var Na=ie(()=>{"use strict";Ng();wi();Ei();Re()});function Og(a){return N0(a)}var N0,Hg=ie(()=>{"use strict";Ei();Na();N0=a=>mt(ai(a))});function Ug(a){let t=!0,e="",i=0,n="",r=!1;for(let o=0;o<a.length;o++){let s=a[o];if(["(",")",","].includes(s)&&(t=!0),s==="("&&i++,s===")"&&i--,!!t){if(i===0){if(s===" "&&["event","function",""].includes(n))n="";else if(n+=s,s===")"){r=!0;break}continue}if(s===" "){a[o-1]!==","&&e!==","&&e!==",("&&(e="",t=!1);continue}n+=s,e+=s}}if(!r)throw new F("Unable to normalize signature.");return n}var Vg=ie(()=>{"use strict";Ge()});var Fg,zg=ie(()=>{"use strict";lg();Vg();Fg=a=>{let t=(()=>typeof a=="string"?a:hy(a))();return Ug(t)}});function mc(a){return Og(Fg(a))}var fy=ie(()=>{"use strict";Hg();zg()});var Jn,dc=ie(()=>{"use strict";fy();Jn=mc});var Bt,gn=ie(()=>{"use strict";Ge();Bt=class extends F{constructor({address:t}){super(`Address "${t}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}});var hc,Gg=ie(()=>{"use strict";hc=class extends Map{constructor(t){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=t}set(t,e){return super.set(t,e),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}});function vn(a,t){let e=t?`${t}${a.toLowerCase()}`:a.substring(2).toLowerCase(),i=mt($t(e),"bytes"),n=(t?e.substring(`${t}0x`.length):e).split("");for(let r=0;r<40;r+=2)i[r>>1]>>4>=8&&n[r]&&(n[r]=n[r].toUpperCase()),(i[r>>1]&15)>=8&&n[r+1]&&(n[r+1]=n[r+1].toUpperCase());return`0x${n.join("")}`}function jg(a,t){if(!wt(a))throw new Bt({address:a});return vn(a,t)}var Ho=ie(()=>{"use strict";gn();Ei();Na();Oa()});function wt(a,{strict:t=!0}={}){if(yy.has(a))return yy.get(a);let e=(()=>O0.test(a)?a.toLowerCase()===a?!0:t?vn(a)===a:!0:!1)();return yy.set(a,e),e}var O0,yy,Oa=ie(()=>{"use strict";Gg();Ho();O0=/^0x[a-fA-F0-9]{40}$/,yy=new hc(8192)});function Ft(a){return typeof a[0]=="string"?Uo(a):H0(a)}function H0(a){let t=0;for(let n of a)t+=n.length;let e=new Uint8Array(t),i=0;for(let n of a)e.set(n,i),i+=n.length;return e}function Uo(a){return`0x${a.reduce((t,e)=>t+e.replace("0x",""),"")}`}var Ha=ie(()=>{"use strict"});function Ln(a,t,e,{strict:i}={}){return at(a,{strict:!1})?U0(a,t,e,{strict:i}):by(a,t,e,{strict:i})}function qg(a,t){if(typeof t=="number"&&t>0&&t>$e(a)-1)throw new Do({offset:t,position:"start",size:$e(a)})}function Wg(a,t,e){if(typeof t=="number"&&typeof e=="number"&&$e(a)!==e-t)throw new Do({offset:e,position:"end",size:$e(a)})}function by(a,t,e,{strict:i}={}){qg(a,t);let n=a.slice(t,e);return i&&Wg(n,t,e),n}function U0(a,t,e,{strict:i}={}){qg(a,t);let n=`0x${a.replace("0x","").slice((t??0)*2,(e??a.length)*2)}`;return i&&Wg(n,t,e),n}var Vo=ie(()=>{"use strict";Ql();wi();Aa()});function Si(a,t){if(a.length!==t.length)throw new Io({expectedLength:a.length,givenLength:t.length});let e=V0({params:a,values:t}),i=vy(e);return i.length===0?"0x":i}function V0({params:a,values:t}){let e=[];for(let i=0;i<a.length;i++)e.push(gy({param:a[i],value:t[i]}));return e}function gy({param:a,value:t}){let e=fc(a.type);if(e){let[i,n]=e;return z0(t,{length:i,param:{...a,type:n}})}if(a.type==="tuple")return K0(t,{param:a});if(a.type==="address")return F0(t);if(a.type==="bool")return j0(t);if(a.type.startsWith("uint")||a.type.startsWith("int")){let i=a.type.startsWith("int");return q0(t,{signed:i})}if(a.type.startsWith("bytes"))return G0(t,{param:a});if(a.type==="string")return W0(t);throw new Co(a.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function vy(a){let t=0;for(let r=0;r<a.length;r++){let{dynamic:o,encoded:s}=a[r];o?t+=32:t+=$e(s)}let e=[],i=[],n=0;for(let r=0;r<a.length;r++){let{dynamic:o,encoded:s}=a[r];o?(e.push(ye(t+n,{size:32})),i.push(s),n+=$e(s)):e.push(s)}return Ft([...e,...i])}function F0(a){if(!wt(a))throw new Bt({address:a});return{dynamic:!1,encoded:na(a.toLowerCase())}}function z0(a,{length:t,param:e}){let i=t===null;if(!Array.isArray(a))throw new Ao(a);if(!i&&a.length!==t)throw new wo({expectedLength:t,givenLength:a.length,type:`${e.type}[${t}]`});let n=!1,r=[];for(let o=0;o<a.length;o++){let s=gy({param:e,value:a[o]});s.dynamic&&(n=!0),r.push(s)}if(i||n){let o=vy(r);if(i){let s=ye(r.length,{size:32});return{dynamic:!0,encoded:r.length>0?Ft([s,o]):s}}if(n)return{dynamic:!0,encoded:o}}return{dynamic:!1,encoded:Ft(r.map(({encoded:o})=>o))}}function G0(a,{param:t}){let[,e]=t.type.split("bytes"),i=$e(a);if(!e){let n=a;return i%32!==0&&(n=na(n,{dir:"right",size:Math.ceil((a.length-2)/2/32)*32})),{dynamic:!0,encoded:Ft([na(ye(i,{size:32})),n])}}if(i!==parseInt(e))throw new xo({expectedSize:parseInt(e),value:a});return{dynamic:!1,encoded:na(a,{dir:"right"})}}function j0(a){if(typeof a!="boolean")throw new F(`Invalid boolean value: "${a}" (type: ${typeof a}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:na(Po(a))}}function q0(a,{signed:t}){return{dynamic:!1,encoded:ye(a,{size:32,signed:t})}}function W0(a){let t=bn(a),e=Math.ceil($e(t)/32),i=[];for(let n=0;n<e;n++)i.push(na(Ln(t,n*32,(n+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Ft([na(ye($e(t),{size:32})),...i])}}function K0(a,{param:t}){let e=!1,i=[];for(let n=0;n<t.components.length;n++){let r=t.components[n],o=Array.isArray(a)?n:r.name,s=gy({param:r,value:a[o]});i.push(s),s.dynamic&&(e=!0)}return{dynamic:e,encoded:e?vy(i):Ft(i.map(({encoded:n})=>n))}}function fc(a){let t=a.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}var _n=ie(()=>{"use strict";_t();gn();Ge();Oa();Ha();Zl();Aa();Vo();Re()});var er,yc=ie(()=>{"use strict";Vo();fy();er=a=>Ln(mc(a),0,4)});function Ri(a){let{abi:t,args:e=[],name:i}=a,n=at(i,{strict:!1}),r=t.filter(s=>n?s.type==="function"?er(s)===i:s.type==="event"?Jn(s)===i:!1:"name"in s&&s.name===i);if(r.length===0)return;if(r.length===1)return r[0];let o;for(let s of r){if(!("inputs"in s))continue;if(!e||e.length===0){if(!s.inputs||s.inputs.length===0)return s;continue}if(!s.inputs||s.inputs.length===0||s.inputs.length!==e.length)continue;if(e.every((c,u)=>{let m="inputs"in s&&s.inputs[u];return m?Ly(c,m):!1})){if(o&&"inputs"in o&&o.inputs){let c=Kg(s.inputs,o.inputs,e);if(c)throw new $l({abiItem:s,type:c[0]},{abiItem:o,type:c[1]})}o=s}}return o||r[0]}function Ly(a,t){let e=typeof a,i=t.type;switch(i){case"address":return wt(a,{strict:!1});case"bool":return e==="boolean";case"function":return e==="string";case"string":return e==="string";default:return i==="tuple"&&"components"in t?Object.values(t.components).every((n,r)=>Ly(Object.values(a)[r],n)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)?e==="number"||e==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)?e==="string"||a instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)?Array.isArray(a)&&a.every(n=>Ly(n,{...t,type:i.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function Kg(a,t,e){for(let i in a){let n=a[i],r=t[i];if(n.type==="tuple"&&r.type==="tuple"&&"components"in n&&"components"in r)return Kg(n.components,r.components,e[i]);let o=[n.type,r.type];if((()=>o.includes("address")&&o.includes("bytes20")?!0:o.includes("address")&&o.includes("string")?wt(e[i],{strict:!1}):o.includes("address")&&o.includes("bytes")?wt(e[i],{strict:!1}):!1)())return o}}var tr=ie(()=>{"use strict";_t();wi();Oa();dc();yc()});function Ze(a){return typeof a=="string"?{address:a,type:"json-rpc"}:a}var ni=ie(()=>{"use strict"});function Qg(a){let{abi:t,args:e,functionName:i}=a,n=t[0];if(i){let r=Ri({abi:t,args:e,name:i});if(!r)throw new aa(i,{docsPath:Xg});n=r}if(n.type!=="function")throw new aa(void 0,{docsPath:Xg});return{abi:[n],functionName:er(Vt(n))}}var Xg,Zg=ie(()=>{"use strict";_t();yc();pn();tr();Xg="/docs/contract/encodeFunctionData"});function Pt(a){let{args:t}=a,{abi:e,functionName:i}=(()=>a.abi.length===1&&a.functionName?.startsWith("0x")?a:Qg(a))(),n=e[0],r=i,o="inputs"in n&&n.inputs?Si(n.inputs,t??[]):void 0;return Uo([r,o??"0x"])}var sa=ie(()=>{"use strict";Ha();_n();Zg()});var gc,Jg,ev,vc=ie(()=>{"use strict";gc={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},Jg={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},ev={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}});var Fo,ir,Lc,_y=ie(()=>{"use strict";Ge();Fo=class extends F{constructor({offset:t}){super(`Offset \`${t}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}},ir=class extends F{constructor({length:t,position:e}){super(`Position \`${e}\` is out of bounds (\`0 < position < ${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}},Lc=class extends F{constructor({count:t,limit:e}){super(`Recursive read limit of \`${e}\` exceeded (recursive read count: \`${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}});function tv(a,{recursiveReadLimit:t=8192}={}){let e=Object.create(Y0);return e.bytes=a,e.dataView=new DataView(a.buffer,a.byteOffset,a.byteLength),e.positionReadCount=new Map,e.recursiveReadLimit=t,e}var Y0,iv=ie(()=>{"use strict";_y();Y0={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Lc({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(a){if(a<0||a>this.bytes.length-1)throw new ir({length:this.bytes.length,position:a})},decrementPosition(a){if(a<0)throw new Fo({offset:a});let t=this.position-a;this.assertPosition(t),this.position=t},getReadCount(a){return this.positionReadCount.get(a||this.position)||0},incrementPosition(a){if(a<0)throw new Fo({offset:a});let t=this.position+a;this.assertPosition(t),this.position=t},inspectByte(a){let t=a??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(a,t){let e=t??this.position;return this.assertPosition(e+a-1),this.bytes.subarray(e,e+a)},inspectUint8(a){let t=a??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(a){let t=a??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(a){let t=a??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(a){let t=a??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushBytes(a){this.assertPosition(this.position+a.length-1),this.bytes.set(a,this.position),this.position+=a.length},pushUint8(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushUint16(a){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,a),this.position+=2},pushUint24(a){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,a>>8),this.dataView.setUint8(this.position+2,a&255),this.position+=3},pushUint32(a){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,a),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let a=this.inspectByte();return this.position++,a},readBytes(a,t){this.assertReadLimit(),this._touch();let e=this.inspectBytes(a);return this.position+=t??a,e},readUint8(){this.assertReadLimit(),this._touch();let a=this.inspectUint8();return this.position+=1,a},readUint16(){this.assertReadLimit(),this._touch();let a=this.inspectUint16();return this.position+=2,a},readUint24(){this.assertReadLimit(),this._touch();let a=this.inspectUint24();return this.position+=3,a},readUint32(){this.assertReadLimit(),this._touch();let a=this.inspectUint32();return this.position+=4,a},get remaining(){return this.bytes.length-this.position},setPosition(a){let t=this.position;return this.assertPosition(a),this.position=a,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let a=this.getReadCount();this.positionReadCount.set(this.position,a+1),a>0&&this.recursiveReadCount++}}});function av(a,t={}){typeof t.size<"u"&&ii(a,{size:t.size});let e=bt(a,t);return Ma(e,t)}function nv(a,t={}){let e=a;if(typeof t.size<"u"&&(ii(e,{size:t.size}),e=yn(e)),e.length>1||e[0]>1)throw new ec(e);return!!e[0]}function Ni(a,t={}){typeof t.size<"u"&&ii(a,{size:t.size});let e=bt(a,t);return Mt(e,t)}function rv(a,t={}){let e=a;return typeof t.size<"u"&&(ii(e,{size:t.size}),e=yn(e,{dir:"right"})),new TextDecoder().decode(e)}var ov=ie(()=>{"use strict";ic();ac();mi();Re()});function wn(a,t){let e=typeof t=="string"?nc(t):t,i=tv(e);if($e(e)===0&&a.length>0)throw new xi;if($e(t)&&$e(t)<32)throw new dn({data:typeof t=="string"?t:bt(t),params:a,size:$e(t)});let n=0,r=[];for(let o=0;o<a.length;++o){let s=a[o];i.setPosition(n);let[l,c]=ar(i,s,{staticPosition:0});n+=c,r.push(l)}return r}function ar(a,t,{staticPosition:e}){let i=fc(t.type);if(i){let[n,r]=i;return X0(a,{...t,type:r},{length:n,staticPosition:e})}if(t.type==="tuple")return ew(a,t,{staticPosition:e});if(t.type==="address")return $0(a);if(t.type==="bool")return Q0(a);if(t.type.startsWith("bytes"))return Z0(a,t,{staticPosition:e});if(t.type.startsWith("uint")||t.type.startsWith("int"))return J0(a,t);if(t.type==="string")return tw(a,{staticPosition:e});throw new ko(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function $0(a){let t=a.readBytes(32);return[vn(bt(by(t,-20))),32]}function X0(a,t,{length:e,staticPosition:i}){if(!e){let o=Ni(a.readBytes(wy)),s=i+o,l=s+sv;a.setPosition(s);let c=Ni(a.readBytes(sv)),u=zo(t),m=0,v=[];for(let w=0;w<c;++w){a.setPosition(l+(u?w*32:m));let[x,b]=ar(a,t,{staticPosition:l});m+=b,v.push(x)}return a.setPosition(i+32),[v,32]}if(zo(t)){let o=Ni(a.readBytes(wy)),s=i+o,l=[];for(let c=0;c<e;++c){a.setPosition(s+c*32);let[u]=ar(a,t,{staticPosition:s});l.push(u)}return a.setPosition(i+32),[l,32]}let n=0,r=[];for(let o=0;o<e;++o){let[s,l]=ar(a,t,{staticPosition:i+n});n+=l,r.push(s)}return[r,n]}function Q0(a){return[nv(a.readBytes(32),{size:32}),32]}function Z0(a,t,{staticPosition:e}){let[i,n]=t.type.split("bytes");if(!n){let o=Ni(a.readBytes(32));a.setPosition(e+o);let s=Ni(a.readBytes(32));if(s===0)return a.setPosition(e+32),["0x",32];let l=a.readBytes(s);return a.setPosition(e+32),[bt(l),32]}return[bt(a.readBytes(parseInt(n),32)),32]}function J0(a,t){let e=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256"),n=a.readBytes(32);return[i>48?av(n,{signed:e}):Ni(n,{signed:e}),32]}function ew(a,t,{staticPosition:e}){let i=t.components.length===0||t.components.some(({name:o})=>!o),n=i?[]:{},r=0;if(zo(t)){let o=Ni(a.readBytes(wy)),s=e+o;for(let l=0;l<t.components.length;++l){let c=t.components[l];a.setPosition(s+r);let[u,m]=ar(a,c,{staticPosition:s});r+=m,n[i?l:c?.name]=u}return a.setPosition(e+32),[n,32]}for(let o=0;o<t.components.length;++o){let s=t.components[o],[l,c]=ar(a,s,{staticPosition:e});n[i?o:s?.name]=l,r+=c}return[n,r]}function tw(a,{staticPosition:t}){let e=Ni(a.readBytes(32)),i=t+e;a.setPosition(i);let n=Ni(a.readBytes(32));if(n===0)return a.setPosition(t+32),["",32];let r=a.readBytes(n,32),o=rv(yn(r));return a.setPosition(t+32),[o,32]}function zo(a){let{type:t}=a;if(t==="string"||t==="bytes"||t.endsWith("[]"))return!0;if(t==="tuple")return a.components?.some(zo);let e=fc(a.type);return!!(e&&zo({...a,type:e[1]}))}var sv,wy,_c=ie(()=>{"use strict";_t();Ho();iv();Aa();Vo();ac();ov();Ei();Re();_n();sv=32,wy=32});function wc(a){let{abi:t,data:e}=a,i=Ln(e,0,4);if(i==="0x")throw new xi;let r=[...t||[],Jg,ev].find(o=>o.type==="error"&&i===er(Vt(o)));if(!r)throw new hn(i,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:r,args:"inputs"in r&&r.inputs&&r.inputs.length>0?wn(r.inputs,Ln(e,4)):void 0,errorName:r.name}}var xy=ie(()=>{"use strict";vc();_t();Vo();yc();_c();pn()});var qe,ri=ie(()=>{"use strict";qe=(a,t,e)=>JSON.stringify(a,(i,n)=>{let r=typeof n=="bigint"?n.toString():n;return typeof t=="function"?t(i,r):r},e)});function Iy({abiItem:a,args:t,includeFunctionName:e=!0,includeName:i=!1}){if("name"in a&&"inputs"in a&&a.inputs)return`${e?a.name:""}(${a.inputs.map((n,r)=>`${i&&n.name?`${n.name}: `:""}${typeof t[r]=="object"?qe(t[r]):t[r]}`).join(", ")})`}var lv=ie(()=>{"use strict";ri()});var xc,cv,Ic=ie(()=>{"use strict";xc={gwei:9,wei:18},cv={ether:-9,wei:9}});function Ec(a,t){let e=a.toString(),i=e.startsWith("-");i&&(e=e.slice(1)),e=e.padStart(t,"0");let[n,r]=[e.slice(0,e.length-t),e.slice(e.length-t)];return r=r.replace(/(0+)$/,""),`${i?"-":""}${n||"0"}${r?`.${r}`:""}`}var Ey=ie(()=>{"use strict"});function Oi(a,t="wei"){return Ec(a,xc[t])}var Go=ie(()=>{"use strict";Ic();Ey()});function gt(a,t="wei"){return Ec(a,cv[t])}var nr=ie(()=>{"use strict";Ic();Ey()});function uv(a){return a.reduce((t,{slot:e,value:i})=>`${t}        ${e}: ${i}
`,"")}function pv(a){return a.reduce((t,{address:e,...i})=>{let n=`${t}    ${e}:
`;return i.nonce&&(n+=`      nonce: ${i.nonce}
`),i.balance&&(n+=`      balance: ${i.balance}
`),i.code&&(n+=`      code: ${i.code}
`),i.state&&(n+=`      state:
`,n+=uv(i.state)),i.stateDiff&&(n+=`      stateDiff:
`,n+=uv(i.stateDiff)),n},`  State Override:
`).slice(0,-1)}var Tc,Sc,Ty=ie(()=>{"use strict";Ge();Tc=class extends F{constructor({address:t}){super(`State for account "${t}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}},Sc=class extends F{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}});function xn(a){let t=Object.entries(a).map(([i,n])=>n===void 0||n===!1?null:[i,n]).filter(Boolean),e=t.reduce((i,[n])=>Math.max(i,n.length),0);return t.map(([i,n])=>`  ${`${i}:`.padEnd(e+1)}  ${n}`).join(`
`)}var Cc,kc,Ac,rr,or,Dc,la=ie(()=>{"use strict";Go();nr();Ge();Cc=class extends F{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}},kc=class extends F{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",xn(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}},Ac=class extends F{constructor(t,{account:e,docsPath:i,chain:n,data:r,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:m,value:v}){let w=xn({chain:n&&`${n?.name} (id: ${n?.id})`,from:e?.address,to:m,value:typeof v<"u"&&`${Oi(v)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:r,gas:o,gasPrice:typeof s<"u"&&`${gt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${gt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${gt(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}},rr=class extends F{constructor({blockHash:t,blockNumber:e,blockTag:i,hash:n,index:r}){let o="Transaction";i&&r!==void 0&&(o=`Transaction at block time "${i}" at index "${r}"`),t&&r!==void 0&&(o=`Transaction at block hash "${t}" at index "${r}"`),e&&r!==void 0&&(o=`Transaction at block number "${e}" at index "${r}"`),n&&(o=`Transaction with hash "${n}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}},or=class extends F{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}},Dc=class extends F{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}});var In,jo,kt,qo,ca,Va=ie(()=>{"use strict";ni();vc();xy();pn();lv();tr();Go();nr();_t();Ge();Ty();la();Lo();In=class extends F{constructor(t,{account:e,docsPath:i,chain:n,data:r,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:m,value:v,stateOverride:w}){let x=e?Ze(e):void 0,b=xn({from:x?.address,to:m,value:typeof v<"u"&&`${Oi(v)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:r,gas:o,gasPrice:typeof s<"u"&&`${gt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${gt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${gt(c)} gwei`,nonce:u});w&&(b+=`
${pv(w)}`),super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",b].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}},jo=class extends F{constructor(t,{abi:e,args:i,contractAddress:n,docsPath:r,functionName:o,sender:s}){let l=Ri({abi:e,args:i,name:o}),c=l?Iy({abiItem:l,args:i,includeFunctionName:!1,includeName:!1}):void 0,u=l?Vt(l,{includeName:!0}):void 0,m=xn({address:n&&pg(n),function:u,args:c&&c!=="()"&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${c}`,sender:s});super(t.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",m].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=e,this.args=i,this.cause=t,this.contractAddress=n,this.functionName=o,this.sender=s}},kt=class extends F{constructor({abi:t,data:e,functionName:i,message:n}){let r,o,s,l;if(e&&e!=="0x")try{o=wc({abi:t,data:e});let{abiItem:u,errorName:m,args:v}=o;if(m==="Error")l=v[0];else if(m==="Panic"){let[w]=v;l=gc[w]}else{let w=u?Vt(u,{includeName:!0}):void 0,x=u&&v?Iy({abiItem:u,args:v,includeFunctionName:!1,includeName:!1}):void 0;s=[w?`Error: ${w}`:"",x&&x!=="()"?`       ${[...Array(m?.length??0).keys()].map(()=>" ").join("")}${x}`:""]}}catch(u){r=u}else n&&(l=n);let c;r instanceof hn&&(c=r.signature,s=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${i}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${i}" reverted.`,{cause:r,metaMessages:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=o,this.reason=l,this.signature=c}},qo=class extends F{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}},ca=class extends F{constructor({data:t,message:e}){super(e||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}});var di,sr,Wo,lr=ie(()=>{"use strict";ri();Ge();Lo();di=class extends F{constructor({body:t,details:e,headers:i,status:n,url:r}){super("HTTP request failed.",{details:e,metaMessages:[n&&`Status: ${n}`,`URL: ${mn(r)}`,t&&`Request body: ${qe(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=i,this.status=n,this.url=r}},sr=class extends F{constructor({body:t,error:e,url:i}){super("RPC Request failed.",{cause:e,details:e.message,metaMessages:[`URL: ${mn(i)}`,`Request body: ${qe(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=e.code}},Wo=class extends F{constructor({body:t,url:e}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${mn(e)}`,`Request body: ${qe(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}});var iw,Rt,Fa,cr,ur,pr,mr,ua,Hi,dr,hr,fr,yr,En,br,Tn,gr,vr,Lr,_r,wr,Mc,Ko=ie(()=>{"use strict";Ge();lr();iw=-1,Rt=class extends F{constructor(t,{code:e,docsPath:i,metaMessages:n,shortMessage:r}){super(r,{cause:t,docsPath:i,metaMessages:n||t?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof sr?t.code:e??iw}},Fa=class extends Rt{constructor(t,e){super(t,e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e.data}},cr=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}};Object.defineProperty(cr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});ur=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}};Object.defineProperty(ur,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});pr=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}};Object.defineProperty(pr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});mr=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}};Object.defineProperty(mr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});ua=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}};Object.defineProperty(ua,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});Hi=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}};Object.defineProperty(Hi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});dr=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}};Object.defineProperty(dr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});hr=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}};Object.defineProperty(hr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});fr=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}};Object.defineProperty(fr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});yr=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}};Object.defineProperty(yr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});En=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}};Object.defineProperty(En,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});br=class a extends Rt{constructor(t){super(t,{code:a.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}};Object.defineProperty(br,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});Tn=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}};Object.defineProperty(Tn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});gr=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}};Object.defineProperty(gr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});vr=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}};Object.defineProperty(vr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});Lr=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}};Object.defineProperty(Lr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});_r=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}};Object.defineProperty(_r,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});wr=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}};Object.defineProperty(wr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});Mc=class extends Rt{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}});var ma,za,xr,Ir,Er,Tr,Sr,Cr,kr,Ar,Ga,Ui,Dr=ie(()=>{"use strict";nr();Ge();ma=class extends F{constructor({cause:t,message:e}={}){let i=e?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}};Object.defineProperty(ma,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(ma,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});za=class extends F{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${gt(e)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}};Object.defineProperty(za,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});xr=class extends F{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${gt(e)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}};Object.defineProperty(xr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});Ir=class extends F{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}};Object.defineProperty(Ir,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});Er=class extends F{constructor({cause:t,nonce:e}={}){super([`Nonce provided for the transaction ${e?`(${e}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}};Object.defineProperty(Er,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});Tr=class extends F{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}};Object.defineProperty(Tr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});Sr=class extends F{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}};Object.defineProperty(Sr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});Cr=class extends F{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}};Object.defineProperty(Cr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});kr=class extends F{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}};Object.defineProperty(kr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});Ar=class extends F{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}};Object.defineProperty(Ar,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});Ga=class extends F{constructor({cause:t,maxPriorityFeePerGas:e,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${e?` = ${gt(e)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${gt(i)} gwei`:""}).`].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}};Object.defineProperty(Ga,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});Ui=class extends F{constructor({cause:t}){super(`An error occurred while executing: ${t?.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}});function Mr(a,t){let e=(a.details||"").toLowerCase(),i=a instanceof F?a.walk(n=>n.code===ma.code):a;return i instanceof F?new ma({cause:a,message:i.details}):ma.nodeMessage.test(e)?new ma({cause:a,message:a.details}):za.nodeMessage.test(e)?new za({cause:a,maxFeePerGas:t?.maxFeePerGas}):xr.nodeMessage.test(e)?new xr({cause:a,maxFeePerGas:t?.maxFeePerGas}):Ir.nodeMessage.test(e)?new Ir({cause:a,nonce:t?.nonce}):Er.nodeMessage.test(e)?new Er({cause:a,nonce:t?.nonce}):Tr.nodeMessage.test(e)?new Tr({cause:a,nonce:t?.nonce}):Sr.nodeMessage.test(e)?new Sr({cause:a}):Cr.nodeMessage.test(e)?new Cr({cause:a,gas:t?.gas}):kr.nodeMessage.test(e)?new kr({cause:a,gas:t?.gas}):Ar.nodeMessage.test(e)?new Ar({cause:a}):Ga.nodeMessage.test(e)?new Ga({cause:a,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new Ui({cause:a})}var Pc=ie(()=>{"use strict";Ge();Dr()});function Br(a,{format:t}){if(!t)return{};let e={};function i(r){let o=Object.keys(r);for(let s of o)s in a&&(e[s]=a[s]),r[s]&&typeof r[s]=="object"&&!Array.isArray(r[s])&&i(r[s])}let n=t(a||{});return i(n),e}var Rc=ie(()=>{"use strict"});function ja(a){let t={...a};return typeof a.blobs<"u"&&typeof a.blobs[0]!="string"&&(t.blobs=a.blobs.map(e=>bt(e))),typeof a.gas<"u"&&(t.gas=ye(a.gas)),typeof a.gasPrice<"u"&&(t.gasPrice=ye(a.gasPrice)),typeof a.maxFeePerBlobGas<"u"&&(t.maxFeePerBlobGas=ye(a.maxFeePerBlobGas)),typeof a.maxFeePerGas<"u"&&(t.maxFeePerGas=ye(a.maxFeePerGas)),typeof a.maxPriorityFeePerGas<"u"&&(t.maxPriorityFeePerGas=ye(a.maxPriorityFeePerGas)),typeof a.nonce<"u"&&(t.nonce=ye(a.nonce)),typeof a.type<"u"&&(t.type=nw[a.type]),typeof a.value<"u"&&(t.value=ye(a.value)),t}var nw,Yo=ie(()=>{"use strict";Re();nw={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"}});function Vi(a){let{account:t,gasPrice:e,maxFeePerGas:i,maxPriorityFeePerGas:n,to:r}=a,o=t?Ze(t):void 0;if(o&&!wt(o.address))throw new Bt({address:o.address});if(r&&!wt(r))throw new Bt({address:r});if(typeof e<"u"&&(typeof i<"u"||typeof n<"u"))throw new Cc;if(i&&i>2n**256n-1n)throw new za({maxFeePerGas:i});if(n&&i&&n>i)throw new Ga({maxFeePerGas:i,maxPriorityFeePerGas:n})}var Pr=ie(()=>{"use strict";ni();gn();Dr();la();Oa()});function hi(a){let{abi:t,args:e,functionName:i,data:n}=a,r=t[0];if(i){let s=Ri({abi:t,args:e,name:i});if(!s)throw new aa(i,{docsPath:ky});r=s}if(r.type!=="function")throw new aa(void 0,{docsPath:ky});if(!r.outputs)throw new To(r.name,{docsPath:ky});let o=wn(r.outputs,n);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}var ky,Cn=ie(()=>{"use strict";_t();_c();tr();ky="/docs/contract/decodeFunctionResult"});var $o,gv,Gc,vv,Ay,Dy,Lv,kn=ie(()=>{"use strict";$o=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],gv=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],Gc=[...gv,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],vv=[...gv,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],Ay=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],Dy=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],Lv=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]});var _v,wv=ie(()=>{"use strict";_v="0x82ad56cb"});var An,jc,qc,Xo,Wc=ie(()=>{"use strict";Ge();An=class extends F{constructor({blockNumber:t,chain:e,contract:i}){super(`Chain "${e.name}" does not support contract "${i.name}".`,{metaMessages:["This could be due to any of the following:",...t&&i.blockCreated&&i.blockCreated>t?[`- The contract "${i.name}" was not deployed until block ${i.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${i.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}},jc=class extends F{constructor({chain:t,currentChainId:e}){super(`The current chain of the wallet (id: ${e}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${e}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}},qc=class extends F{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}},Xo=class extends F{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}});function fi({blockNumber:a,chain:t,contract:e}){let i=t?.contracts?.[e];if(!i)throw new An({chain:t,contract:{name:e}});if(a&&i.blockCreated&&i.blockCreated>a)throw new An({blockNumber:a,chain:t,contract:{name:e,blockCreated:i.blockCreated}});return i.address}var Dn=ie(()=>{"use strict";Wc()});function xv(a,{docsPath:t,...e}){let i=(()=>{let n=Mr(a,e);return n instanceof Ui?a:n})();return new In(i,{docsPath:t,...e})}var Iv=ie(()=>{"use strict";Va();Dr();Pc()});function Kc({fn:a,id:t,shouldSplitBatch:e,wait:i=0,sort:n}){let r=async()=>{let u=l();o();let m=u.map(({args:v})=>v);m.length!==0&&a(m).then(v=>{n&&Array.isArray(v)&&v.sort(n);for(let w=0;w<u.length;w++){let{pendingPromise:x}=u[w];x.resolve?.([v[w],v])}}).catch(v=>{for(let w=0;w<u.length;w++){let{pendingPromise:x}=u[w];x.reject?.(v)}})},o=()=>My.delete(t),s=()=>l().map(({args:u})=>u),l=()=>My.get(t)||[],c=u=>My.set(t,[...l(),u]);return{flush:o,async schedule(u){let m={},v=new Promise((b,T)=>{m.resolve=b,m.reject=T});return e?.([...s(),u])&&r(),l().length>0?(c({args:u,pendingPromise:m}),v):(c({args:u,pendingPromise:m}),setTimeout(r,i),v)}}}var My,By=ie(()=>{"use strict";My=new Map});var Yc,$c,Xc,Ev=ie(()=>{"use strict";ri();Ge();Lo();Yc=class extends F{constructor({callbackSelector:t,cause:e,data:i,extraData:n,sender:r,urls:o}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map(s=>`    ${mn(s)}`)],`  Sender: ${r}`,`  Data: ${i}`,`  Callback selector: ${t}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}},$c=class extends F{constructor({result:t,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${mn(e)}`,`Response: ${qe(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}},Xc=class extends F{constructor({sender:t,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}});function Tv(a,t){if(!wt(a,{strict:!1}))throw new Bt({address:a});if(!wt(t,{strict:!1}))throw new Bt({address:t});return a.toLowerCase()===t.toLowerCase()}var Sv=ie(()=>{"use strict";gn();Oa()});var Av={};eg(Av,{ccipRequest:()=>kv,offchainLookup:()=>sw,offchainLookupAbiItem:()=>Cv,offchainLookupSignature:()=>ow});async function sw(a,{blockNumber:t,blockTag:e,data:i,to:n}){let{args:r}=wc({data:i,abi:[Cv]}),[o,s,l,c,u]=r,{ccipRead:m}=a,v=m&&typeof m?.request=="function"?m.request:kv;try{if(!Tv(n,o))throw new Xc({sender:o,to:n});let w=await v({data:l,sender:o,urls:s}),{data:x}=await Gi(a,{blockNumber:t,blockTag:e,data:Ft([c,Si([{type:"bytes"},{type:"bytes"}],[w,u])]),to:n});return x}catch(w){throw new Yc({callbackSelector:c,cause:w,data:i,extraData:u,sender:o,urls:s})}}async function kv({data:a,sender:t,urls:e}){let i=new Error("An unknown error occurred.");for(let n=0;n<e.length;n++){let r=e[n],o=r.includes("{data}")?"GET":"POST",s=o==="POST"?{data:a,sender:t}:void 0;try{let l=await fetch(r.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(s),method:o}),c;if(l.headers.get("Content-Type")?.startsWith("application/json")?c=(await l.json()).data:c=await l.text(),!l.ok){i=new di({body:s,details:c?.error?qe(c.error):l.statusText,headers:l.headers,status:l.status,url:r});continue}if(!at(c)){i=new $c({result:c,url:r});continue}return c}catch(l){i=new di({body:s,details:l.message,url:r})}}throw i}var ow,Cv,Dv=ie(()=>{"use strict";Vr();Ev();lr();xy();_n();Sv();Ha();wi();ri();ow="0x556f1830",Cv={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]}});async function Gi(a,t){let{account:e=a.account,batch:i=!!a.batch?.multicall,blockNumber:n,blockTag:r="latest",accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:v,maxPriorityFeePerGas:w,nonce:x,to:b,value:T,stateOverride:P,...z}=t,j=e?Ze(e):void 0;try{Vi(t);let R=(n?ye(n):void 0)||r,Y=mw(P),J=a.chain?.formatters?.transactionRequest?.format,Oe=(J||ja)({...Br(z,{format:J}),from:j?.address,accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:v,maxPriorityFeePerGas:w,nonce:x,to:b,value:T});if(i&&lw({request:Oe})&&!Y)try{return await cw(a,{...Oe,blockNumber:n,blockTag:r})}catch(Ce){if(!(Ce instanceof Xo)&&!(Ce instanceof An))throw Ce}let Ae=await a.request({method:"eth_call",params:Y?[Oe,R,Y]:[Oe,R]});return Ae==="0x"?{data:void 0}:{data:Ae}}catch(Z){let R=uw(Z),{offchainLookup:Y,offchainLookupSignature:J}=await Promise.resolve().then(()=>(Dv(),Av));if(a.ccipRead!==!1&&R?.slice(0,10)===J&&b)return{data:await Y(a,{data:R,to:b})};throw xv(Z,{...t,account:j,chain:a.chain})}}function lw({request:a}){let{data:t,to:e,...i}=a;return!(!t||t.startsWith(_v)||!e||Object.values(i).filter(n=>typeof n<"u").length>0)}async function cw(a,t){let{batchSize:e=1024,wait:i=0}=typeof a.batch?.multicall=="object"?a.batch.multicall:{},{blockNumber:n,blockTag:r="latest",data:o,multicallAddress:s,to:l}=t,c=s;if(!c){if(!a.chain)throw new Xo;c=fi({blockNumber:n,chain:a.chain,contract:"multicall3"})}let m=(n?ye(n):void 0)||r,{schedule:v}=Kc({id:`${a.uid}.${m}`,wait:i,shouldSplitBatch(b){return b.reduce((P,{data:z})=>P+(z.length-2),0)>e*2},fn:async b=>{let T=b.map(j=>({allowFailure:!0,callData:j.data,target:j.to})),P=Pt({abi:$o,args:[T],functionName:"aggregate3"}),z=await a.request({method:"eth_call",params:[{data:P,to:c},m]});return hi({abi:$o,args:[T],functionName:"aggregate3",data:z||"0x"})}}),[{returnData:w,success:x}]=await v({data:o,to:l});if(!x)throw new ca({data:w});return w==="0x"?{data:void 0}:{data:w}}function uw(a){if(!(a instanceof F))return;let t=a.walk();return typeof t?.data=="object"?t.data?.data:t.data}function Mv(a){if(!(!a||a.length===0))return a.reduce((t,{slot:e,value:i})=>{if(e.length!==66)throw new Bo({size:e.length,targetSize:66,type:"hex"});if(i.length!==66)throw new Bo({size:i.length,targetSize:66,type:"hex"});return t[e]=i,t},{})}function pw(a){let{balance:t,nonce:e,state:i,stateDiff:n,code:r}=a,o={};if(r!==void 0&&(o.code=r),t!==void 0&&(o.balance=ye(t,{size:32})),e!==void 0&&(o.nonce=ye(e,{size:8})),i!==void 0&&(o.state=Mv(i)),n!==void 0){if(o.state)throw new Sc;o.stateDiff=Mv(n)}return o}function mw(a){if(!a)return;let t={};for(let{address:e,...i}of a){if(!wt(e,{strict:!1}))throw new Bt({address:e});if(t[e])throw new Tc({address:e});t[e]=pw(i)}return t}var Vr=ie(()=>{"use strict";ni();kn();wv();gn();Ge();Wc();Va();Ql();Ty();Cn();sa();Oa();Dn();Re();Iv();Rc();Yo();By();Pr()});function kw(a,t,e,i){if(typeof a.setBigUint64=="function")return a.setBigUint64(t,e,i);let n=BigInt(32),r=BigInt(4294967295),o=Number(e>>n&r),s=Number(e&r),l=i?4:0,c=i?0:4;a.setUint32(t+l,o,i),a.setUint32(t+c,s,i)}var mu,gL=ie(()=>{"use strict";oc();Zn();mu=class extends Ba{constructor(t,e,i,n){super(),this.blockLen=t,this.outputLen=e,this.padOffset=i,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=cc(this.buffer)}update(t){oa(this);let{view:e,buffer:i,blockLen:n}=this;t=Pa(t);let r=t.length;for(let o=0;o<r;){let s=Math.min(n-this.pos,r-o);if(s===n){let l=cc(t);for(;n<=r-o;o+=n)this.process(l,o);continue}i.set(t.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===n&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){oa(this),rc(t,this),this.finished=!0;let{buffer:e,view:i,blockLen:n,isLE:r}=this,{pos:o}=this;e[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>n-o&&(this.process(i,0),o=0);for(let m=o;m<n;m++)e[m]=0;kw(i,n-8,BigInt(this.length*8),r),this.process(i,0);let s=cc(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let c=l/4,u=this.get();if(c>u.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<c;m++)s.setUint32(4*m,u[m],r)}digest(){let{buffer:t,outputLen:e}=this;this.digestInto(t);let i=t.slice(0,e);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());let{blockLen:e,buffer:i,length:n,finished:r,destroyed:o,pos:s}=this;return t.length=n,t.pos=s,t.finished=r,t.destroyed=o,n%e&&t.buffer.set(i),t}}});var Aw,Dw,Mw,Qa,Za,Uy,vL,LL=ie(()=>{"use strict";gL();Zn();Aw=(a,t,e)=>a&t^~a&e,Dw=(a,t,e)=>a&t^a&e^t&e,Mw=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Qa=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Za=new Uint32Array(64),Uy=class extends mu{constructor(){super(64,32,8,!1),this.A=Qa[0]|0,this.B=Qa[1]|0,this.C=Qa[2]|0,this.D=Qa[3]|0,this.E=Qa[4]|0,this.F=Qa[5]|0,this.G=Qa[6]|0,this.H=Qa[7]|0}get(){let{A:t,B:e,C:i,D:n,E:r,F:o,G:s,H:l}=this;return[t,e,i,n,r,o,s,l]}set(t,e,i,n,r,o,s,l){this.A=t|0,this.B=e|0,this.C=i|0,this.D=n|0,this.E=r|0,this.F=o|0,this.G=s|0,this.H=l|0}process(t,e){for(let m=0;m<16;m++,e+=4)Za[m]=t.getUint32(e,!1);for(let m=16;m<64;m++){let v=Za[m-15],w=Za[m-2],x=Ti(v,7)^Ti(v,18)^v>>>3,b=Ti(w,17)^Ti(w,19)^w>>>10;Za[m]=b+Za[m-7]+x+Za[m-16]|0}let{A:i,B:n,C:r,D:o,E:s,F:l,G:c,H:u}=this;for(let m=0;m<64;m++){let v=Ti(s,6)^Ti(s,11)^Ti(s,25),w=u+v+Aw(s,l,c)+Mw[m]+Za[m]|0,b=(Ti(i,2)^Ti(i,13)^Ti(i,22))+Dw(i,n,r)|0;u=c,c=l,l=s,s=o+w|0,o=r,r=n,n=i,i=w+b|0}i=i+this.A|0,n=n+this.B|0,r=r+this.C|0,o=o+this.D|0,s=s+this.E|0,l=l+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(i,n,r,o,s,l,c,u)}roundClean(){Za.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},vL=uc(()=>new Uy)});var qy={};eg(qy,{bitGet:()=>Uw,bitLen:()=>Hw,bitMask:()=>is,bitSet:()=>Vw,bytesToHex:()=>Mn,bytesToNumberBE:()=>da,bytesToNumberLE:()=>fu,concatBytes:()=>$r,createHmacDrbg:()=>jy,ensureBytes:()=>oi,equalBytes:()=>Gy,hexToBytes:()=>Bn,hexToNumber:()=>zy,numberToBytesBE:()=>en,numberToBytesLE:()=>yu,numberToHexUnpadded:()=>DL,numberToVarBytesBE:()=>Nw,utf8ToBytes:()=>Ow,validateObject:()=>tn});function Mn(a){if(!hu(a))throw new Error("Uint8Array expected");let t="";for(let e=0;e<a.length;e++)t+=Rw[a[e]];return t}function DL(a){let t=a.toString(16);return t.length&1?`0${t}`:t}function zy(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);return BigInt(a===""?"0":`0x${a}`)}function Bn(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);let t=a.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);let e=new Uint8Array(t/2);for(let i=0;i<e.length;i++){let n=i*2,r=a.slice(n,n+2),o=Number.parseInt(r,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");e[i]=o}return e}function da(a){return zy(Mn(a))}function fu(a){if(!hu(a))throw new Error("Uint8Array expected");return zy(Mn(Uint8Array.from(a).reverse()))}function en(a,t){return Bn(a.toString(16).padStart(t*2,"0"))}function yu(a,t){return en(a,t).reverse()}function Nw(a){return Bn(DL(a))}function oi(a,t,e){let i;if(typeof t=="string")try{i=Bn(t)}catch(r){throw new Error(`${a} must be valid hex string, got "${t}". Cause: ${r}`)}else if(hu(t))i=Uint8Array.from(t);else throw new Error(`${a} must be hex string or Uint8Array`);let n=i.length;if(typeof e=="number"&&n!==e)throw new Error(`${a} expected ${e} bytes, got ${n}`);return i}function $r(...a){let t=new Uint8Array(a.reduce((i,n)=>i+n.length,0)),e=0;return a.forEach(i=>{if(!hu(i))throw new Error("Uint8Array expected");t.set(i,e),e+=i.length}),t}function Gy(a,t){if(a.length!==t.length)return!1;for(let e=0;e<a.length;e++)if(a[e]!==t[e])return!1;return!0}function Ow(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function Hw(a){let t;for(t=0;a>AL;a>>=du,t+=1);return t}function Uw(a,t){return a>>BigInt(t)&du}function jy(a,t,e){if(typeof a!="number"||a<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof e!="function")throw new Error("hmacFn must be a function");let i=Fy(a),n=Fy(a),r=0,o=()=>{i.fill(1),n.fill(0),r=0},s=(...m)=>e(n,i,...m),l=(m=Fy())=>{n=s(kL([0]),m),i=s(),m.length!==0&&(n=s(kL([1]),m),i=s())},c=()=>{if(r++>=1e3)throw new Error("drbg: tried 1000 values");let m=0,v=[];for(;m<t;){i=s();let w=i.slice();v.push(w),m+=i.length}return $r(...v)};return(m,v)=>{o(),l(m);let w;for(;!(w=v(c()));)l();return o(),w}}function tn(a,t,e={}){let i=(n,r,o)=>{let s=Fw[r];if(typeof s!="function")throw new Error(`Invalid validator "${r}", expected function`);let l=a[n];if(!(o&&l===void 0)&&!s(l,a))throw new Error(`Invalid param ${String(n)}=${l} (${typeof l}), expected ${r}`)};for(let[n,r]of Object.entries(t))i(n,r,!1);for(let[n,r]of Object.entries(e))i(n,r,!0);return a}var AL,du,Pw,hu,Rw,Vw,is,Fy,kL,Fw,Xr=ie(()=>{"use strict";AL=BigInt(0),du=BigInt(1),Pw=BigInt(2),hu=a=>a instanceof Uint8Array,Rw=Array.from({length:256},(a,t)=>t.toString(16).padStart(2,"0"));Vw=(a,t,e)=>a|(e?du:AL)<<BigInt(t),is=a=>(Pw<<BigInt(a-1))-du,Fy=a=>new Uint8Array(a),kL=a=>Uint8Array.from(a);Fw={bigint:a=>typeof a=="bigint",function:a=>typeof a=="function",boolean:a=>typeof a=="boolean",string:a=>typeof a=="string",stringOrUint8Array:a=>typeof a=="string"||a instanceof Uint8Array,isSafeInteger:a=>Number.isSafeInteger(a),array:a=>Array.isArray(a),field:(a,t)=>t.Fp.isValid(a),hash:a=>typeof a=="function"&&Number.isSafeInteger(a.outputLen)}});function Nt(a,t){let e=a%t;return e>=vt?e:t+e}function qw(a,t,e){if(e<=vt||t<vt)throw new Error("Expected power/modulo > 0");if(e===nt)return vt;let i=nt;for(;t>vt;)t&nt&&(i=i*a%e),a=a*a%e,t>>=nt;return i}function si(a,t,e){let i=a;for(;t-- >vt;)i*=i,i%=e;return i}function vu(a,t){if(a===vt||t<=vt)throw new Error(`invert: expected positive integers, got n=${a} mod=${t}`);let e=Nt(a,t),i=t,n=vt,r=nt,o=nt,s=vt;for(;e!==vt;){let c=i/e,u=i%e,m=n-o*c,v=r-s*c;i=e,e=u,n=o,r=s,o=m,s=v}if(i!==nt)throw new Error("invert: does not exist");return Nt(n,t)}function Ww(a){let t=(a-nt)/Pn,e,i,n;for(e=a-nt,i=0;e%Pn===vt;e/=Pn,i++);for(n=Pn;n<a&&qw(n,t,a)!==a-nt;n++);if(i===1){let o=(a+nt)/Wy;return function(l,c){let u=l.pow(c,o);if(!l.eql(l.sqr(u),c))throw new Error("Cannot find square root");return u}}let r=(e+nt)/Pn;return function(s,l){if(s.pow(l,t)===s.neg(s.ONE))throw new Error("Cannot find square root");let c=i,u=s.pow(s.mul(s.ONE,n),e),m=s.pow(l,r),v=s.pow(l,e);for(;!s.eql(v,s.ONE);){if(s.eql(v,s.ZERO))return s.ZERO;let w=1;for(let b=s.sqr(v);w<c&&!s.eql(b,s.ONE);w++)b=s.sqr(b);let x=s.pow(u,nt<<BigInt(c-w-1));u=s.sqr(x),m=s.mul(m,x),v=s.mul(v,u),c=w}return m}}function Kw(a){if(a%Wy===zw){let t=(a+nt)/Wy;return function(i,n){let r=i.pow(n,t);if(!i.eql(i.sqr(r),n))throw new Error("Cannot find square root");return r}}if(a%ZL===QL){let t=(a-QL)/ZL;return function(i,n){let r=i.mul(n,Pn),o=i.pow(r,t),s=i.mul(n,o),l=i.mul(i.mul(s,Pn),o),c=i.mul(s,i.sub(l,i.ONE));if(!i.eql(i.sqr(c),n))throw new Error("Cannot find square root");return c}}return a%jw,Ww(a)}function Ky(a){let t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},e=Yw.reduce((i,n)=>(i[n]="function",i),t);return tn(a,e)}function $w(a,t,e){if(e<vt)throw new Error("Expected power > 0");if(e===vt)return a.ONE;if(e===nt)return t;let i=a.ONE,n=t;for(;e>vt;)e&nt&&(i=a.mul(i,n)),n=a.sqr(n),e>>=nt;return i}function Xw(a,t){let e=new Array(t.length),i=t.reduce((r,o,s)=>a.is0(o)?r:(e[s]=r,a.mul(r,o)),a.ONE),n=a.inv(i);return t.reduceRight((r,o,s)=>a.is0(o)?r:(e[s]=a.mul(r,e[s]),a.mul(r,o)),n),e}function Yy(a,t){let e=t!==void 0?t:a.toString(2).length,i=Math.ceil(e/8);return{nBitLength:e,nByteLength:i}}function JL(a,t,e=!1,i={}){if(a<=vt)throw new Error(`Expected Field ORDER > 0, got ${a}`);let{nBitLength:n,nByteLength:r}=Yy(a,t);if(r>2048)throw new Error("Field lengths over 2048 bytes are not supported");let o=Kw(a),s=Object.freeze({ORDER:a,BITS:n,BYTES:r,MASK:is(n),ZERO:vt,ONE:nt,create:l=>Nt(l,a),isValid:l=>{if(typeof l!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);return vt<=l&&l<a},is0:l=>l===vt,isOdd:l=>(l&nt)===nt,neg:l=>Nt(-l,a),eql:(l,c)=>l===c,sqr:l=>Nt(l*l,a),add:(l,c)=>Nt(l+c,a),sub:(l,c)=>Nt(l-c,a),mul:(l,c)=>Nt(l*c,a),pow:(l,c)=>$w(s,l,c),div:(l,c)=>Nt(l*vu(c,a),a),sqrN:l=>l*l,addN:(l,c)=>l+c,subN:(l,c)=>l-c,mulN:(l,c)=>l*c,inv:l=>vu(l,a),sqrt:i.sqrt||(l=>o(s,l)),invertBatch:l=>Xw(s,l),cmov:(l,c,u)=>u?c:l,toBytes:l=>e?yu(l,r):en(l,r),fromBytes:l=>{if(l.length!==r)throw new Error(`Fp.fromBytes: expected ${r}, got ${l.length}`);return e?fu(l):da(l)}});return Object.freeze(s)}function e_(a){if(typeof a!="bigint")throw new Error("field order must be bigint");let t=a.toString(2).length;return Math.ceil(t/8)}function $y(a){let t=e_(a);return t+Math.ceil(t/2)}function t_(a,t,e=!1){let i=a.length,n=e_(t),r=$y(t);if(i<16||i<r||i>1024)throw new Error(`expected ${r}-1024 bytes of input, got ${i}`);let o=e?da(a):fu(a),s=Nt(o,t-nt)+nt;return e?yu(s,n):en(s,n)}var vt,nt,Pn,zw,Wy,QL,ZL,Gw,jw,Yw,Lu=ie(()=>{"use strict";Xr();vt=BigInt(0),nt=BigInt(1),Pn=BigInt(2),zw=BigInt(3),Wy=BigInt(4),QL=BigInt(5),ZL=BigInt(8),Gw=BigInt(9),jw=BigInt(16);Yw=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"]});function i_(a,t){let e=(n,r)=>{let o=r.negate();return n?o:r},i=n=>{let r=Math.ceil(t/n)+1,o=2**(n-1);return{windows:r,windowSize:o}};return{constTimeNegate:e,unsafeLadder(n,r){let o=a.ZERO,s=n;for(;r>Zw;)r&Xy&&(o=o.add(s)),s=s.double(),r>>=Xy;return o},precomputeWindow(n,r){let{windows:o,windowSize:s}=i(r),l=[],c=n,u=c;for(let m=0;m<o;m++){u=c,l.push(u);for(let v=1;v<s;v++)u=u.add(c),l.push(u);c=u.double()}return l},wNAF(n,r,o){let{windows:s,windowSize:l}=i(n),c=a.ZERO,u=a.BASE,m=BigInt(2**n-1),v=2**n,w=BigInt(n);for(let x=0;x<s;x++){let b=x*l,T=Number(o&m);o>>=w,T>l&&(T-=v,o+=Xy);let P=b,z=b+Math.abs(T)-1,j=x%2!==0,Z=T<0;T===0?u=u.add(e(j,r[P])):c=c.add(e(Z,r[z]))}return{p:c,f:u}},wNAFCached(n,r,o,s){let l=n._WINDOW_SIZE||1,c=r.get(n);return c||(c=this.precomputeWindow(n,l),l!==1&&r.set(n,s(c))),this.wNAF(l,c,o)}}}function Qy(a){return Ky(a.Fp),tn(a,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Yy(a.n,a.nBitLength),...a,p:a.Fp.ORDER})}var Zw,Xy,a_=ie(()=>{"use strict";Lu();Xr();Zw=BigInt(0),Xy=BigInt(1)});function Jw(a){let t=Qy(a);tn(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:e,Fp:i,a:n}=t;if(e){if(!i.eql(n,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof e!="object"||typeof e.beta!="bigint"||typeof e.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}function ix(a){let t=Jw(a),{Fp:e}=t,i=t.toBytes||((x,b,T)=>{let P=b.toAffine();return $r(Uint8Array.from([4]),e.toBytes(P.x),e.toBytes(P.y))}),n=t.fromBytes||(x=>{let b=x.subarray(1),T=e.fromBytes(b.subarray(0,e.BYTES)),P=e.fromBytes(b.subarray(e.BYTES,2*e.BYTES));return{x:T,y:P}});function r(x){let{a:b,b:T}=t,P=e.sqr(x),z=e.mul(P,x);return e.add(e.add(z,e.mul(x,b)),T)}if(!e.eql(e.sqr(t.Gy),r(t.Gx)))throw new Error("bad generator point: equation left != right");function o(x){return typeof x=="bigint"&&ha<x&&x<t.n}function s(x){if(!o(x))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function l(x){let{allowedPrivateKeyLengths:b,nByteLength:T,wrapPrivateKey:P,n:z}=t;if(b&&typeof x!="bigint"){if(x instanceof Uint8Array&&(x=Mn(x)),typeof x!="string"||!b.includes(x.length))throw new Error("Invalid key");x=x.padStart(T*2,"0")}let j;try{j=typeof x=="bigint"?x:da(oi("private key",x,T))}catch{throw new Error(`private key must be ${T} bytes, hex or bigint, not ${typeof x}`)}return P&&(j=Nt(j,z)),s(j),j}let c=new Map;function u(x){if(!(x instanceof m))throw new Error("ProjectivePoint expected")}class m{constructor(b,T,P){if(this.px=b,this.py=T,this.pz=P,b==null||!e.isValid(b))throw new Error("x required");if(T==null||!e.isValid(T))throw new Error("y required");if(P==null||!e.isValid(P))throw new Error("z required")}static fromAffine(b){let{x:T,y:P}=b||{};if(!b||!e.isValid(T)||!e.isValid(P))throw new Error("invalid affine point");if(b instanceof m)throw new Error("projective point not allowed");let z=j=>e.eql(j,e.ZERO);return z(T)&&z(P)?m.ZERO:new m(T,P,e.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(b){let T=e.invertBatch(b.map(P=>P.pz));return b.map((P,z)=>P.toAffine(T[z])).map(m.fromAffine)}static fromHex(b){let T=m.fromAffine(n(oi("pointHex",b)));return T.assertValidity(),T}static fromPrivateKey(b){return m.BASE.multiply(l(b))}_setWindowSize(b){this._WINDOW_SIZE=b,c.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint&&!e.is0(this.py))return;throw new Error("bad point: ZERO")}let{x:b,y:T}=this.toAffine();if(!e.isValid(b)||!e.isValid(T))throw new Error("bad point: x or y not FE");let P=e.sqr(T),z=r(b);if(!e.eql(P,z))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y:b}=this.toAffine();if(e.isOdd)return!e.isOdd(b);throw new Error("Field doesn't support isOdd")}equals(b){u(b);let{px:T,py:P,pz:z}=this,{px:j,py:Z,pz:R}=b,Y=e.eql(e.mul(T,R),e.mul(j,z)),J=e.eql(e.mul(P,R),e.mul(Z,z));return Y&&J}negate(){return new m(this.px,e.neg(this.py),this.pz)}double(){let{a:b,b:T}=t,P=e.mul(T,n_),{px:z,py:j,pz:Z}=this,R=e.ZERO,Y=e.ZERO,J=e.ZERO,pe=e.mul(z,z),Oe=e.mul(j,j),Ae=e.mul(Z,Z),Ce=e.mul(z,j);return Ce=e.add(Ce,Ce),J=e.mul(z,Z),J=e.add(J,J),R=e.mul(b,J),Y=e.mul(P,Ae),Y=e.add(R,Y),R=e.sub(Oe,Y),Y=e.add(Oe,Y),Y=e.mul(R,Y),R=e.mul(Ce,R),J=e.mul(P,J),Ae=e.mul(b,Ae),Ce=e.sub(pe,Ae),Ce=e.mul(b,Ce),Ce=e.add(Ce,J),J=e.add(pe,pe),pe=e.add(J,pe),pe=e.add(pe,Ae),pe=e.mul(pe,Ce),Y=e.add(Y,pe),Ae=e.mul(j,Z),Ae=e.add(Ae,Ae),pe=e.mul(Ae,Ce),R=e.sub(R,pe),J=e.mul(Ae,Oe),J=e.add(J,J),J=e.add(J,J),new m(R,Y,J)}add(b){u(b);let{px:T,py:P,pz:z}=this,{px:j,py:Z,pz:R}=b,Y=e.ZERO,J=e.ZERO,pe=e.ZERO,Oe=t.a,Ae=e.mul(t.b,n_),Ce=e.mul(T,j),ut=e.mul(P,Z),Ot=e.mul(z,R),vi=e.add(T,P),oe=e.add(j,Z);vi=e.mul(vi,oe),oe=e.add(Ce,ut),vi=e.sub(vi,oe),oe=e.add(T,z);let be=e.add(j,R);return oe=e.mul(oe,be),be=e.add(Ce,Ot),oe=e.sub(oe,be),be=e.add(P,z),Y=e.add(Z,R),be=e.mul(be,Y),Y=e.add(ut,Ot),be=e.sub(be,Y),pe=e.mul(Oe,oe),Y=e.mul(Ae,Ot),pe=e.add(Y,pe),Y=e.sub(ut,pe),pe=e.add(ut,pe),J=e.mul(Y,pe),ut=e.add(Ce,Ce),ut=e.add(ut,Ce),Ot=e.mul(Oe,Ot),oe=e.mul(Ae,oe),ut=e.add(ut,Ot),Ot=e.sub(Ce,Ot),Ot=e.mul(Oe,Ot),oe=e.add(oe,Ot),Ce=e.mul(ut,oe),J=e.add(J,Ce),Ce=e.mul(be,oe),Y=e.mul(vi,Y),Y=e.sub(Y,Ce),Ce=e.mul(vi,ut),pe=e.mul(be,pe),pe=e.add(pe,Ce),new m(Y,J,pe)}subtract(b){return this.add(b.negate())}is0(){return this.equals(m.ZERO)}wNAF(b){return w.wNAFCached(this,c,b,T=>{let P=e.invertBatch(T.map(z=>z.pz));return T.map((z,j)=>z.toAffine(P[j])).map(m.fromAffine)})}multiplyUnsafe(b){let T=m.ZERO;if(b===ha)return T;if(s(b),b===yi)return this;let{endo:P}=t;if(!P)return w.unsafeLadder(this,b);let{k1neg:z,k1:j,k2neg:Z,k2:R}=P.splitScalar(b),Y=T,J=T,pe=this;for(;j>ha||R>ha;)j&yi&&(Y=Y.add(pe)),R&yi&&(J=J.add(pe)),pe=pe.double(),j>>=yi,R>>=yi;return z&&(Y=Y.negate()),Z&&(J=J.negate()),J=new m(e.mul(J.px,P.beta),J.py,J.pz),Y.add(J)}multiply(b){s(b);let T=b,P,z,{endo:j}=t;if(j){let{k1neg:Z,k1:R,k2neg:Y,k2:J}=j.splitScalar(T),{p:pe,f:Oe}=this.wNAF(R),{p:Ae,f:Ce}=this.wNAF(J);pe=w.constTimeNegate(Z,pe),Ae=w.constTimeNegate(Y,Ae),Ae=new m(e.mul(Ae.px,j.beta),Ae.py,Ae.pz),P=pe.add(Ae),z=Oe.add(Ce)}else{let{p:Z,f:R}=this.wNAF(T);P=Z,z=R}return m.normalizeZ([P,z])[0]}multiplyAndAddUnsafe(b,T,P){let z=m.BASE,j=(R,Y)=>Y===ha||Y===yi||!R.equals(z)?R.multiplyUnsafe(Y):R.multiply(Y),Z=j(this,T).add(j(b,P));return Z.is0()?void 0:Z}toAffine(b){let{px:T,py:P,pz:z}=this,j=this.is0();b==null&&(b=j?e.ONE:e.inv(z));let Z=e.mul(T,b),R=e.mul(P,b),Y=e.mul(z,b);if(j)return{x:e.ZERO,y:e.ZERO};if(!e.eql(Y,e.ONE))throw new Error("invZ was invalid");return{x:Z,y:R}}isTorsionFree(){let{h:b,isTorsionFree:T}=t;if(b===yi)return!0;if(T)return T(m,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:b,clearCofactor:T}=t;return b===yi?this:T?T(m,this):this.multiplyUnsafe(t.h)}toRawBytes(b=!0){return this.assertValidity(),i(m,this,b)}toHex(b=!0){return Mn(this.toRawBytes(b))}}m.BASE=new m(t.Gx,t.Gy,e.ONE),m.ZERO=new m(e.ZERO,e.ONE,e.ZERO);let v=t.nBitLength,w=i_(m,t.endo?Math.ceil(v/2):v);return{CURVE:t,ProjectivePoint:m,normPrivateKeyToScalar:l,weierstrassEquation:r,isWithinCurveOrder:o}}function ax(a){let t=Qy(a);return tn(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function r_(a){let t=ax(a),{Fp:e,n:i}=t,n=e.BYTES+1,r=2*e.BYTES+1;function o(oe){return ha<oe&&oe<e.ORDER}function s(oe){return Nt(oe,i)}function l(oe){return vu(oe,i)}let{ProjectivePoint:c,normPrivateKeyToScalar:u,weierstrassEquation:m,isWithinCurveOrder:v}=ix({...t,toBytes(oe,be,C){let Ye=be.toAffine(),Be=e.toBytes(Ye.x),pt=$r;return C?pt(Uint8Array.from([be.hasEvenY()?2:3]),Be):pt(Uint8Array.from([4]),Be,e.toBytes(Ye.y))},fromBytes(oe){let be=oe.length,C=oe[0],Ye=oe.subarray(1);if(be===n&&(C===2||C===3)){let Be=da(Ye);if(!o(Be))throw new Error("Point is not on curve");let pt=m(Be),Ht=e.sqrt(pt),Ut=(Ht&yi)===yi;return(C&1)===1!==Ut&&(Ht=e.neg(Ht)),{x:Be,y:Ht}}else if(be===r&&C===4){let Be=e.fromBytes(Ye.subarray(0,e.BYTES)),pt=e.fromBytes(Ye.subarray(e.BYTES,2*e.BYTES));return{x:Be,y:pt}}else throw new Error(`Point of length ${be} was invalid. Expected ${n} compressed bytes or ${r} uncompressed bytes`)}}),w=oe=>Mn(en(oe,t.nByteLength));function x(oe){let be=i>>yi;return oe>be}function b(oe){return x(oe)?s(-oe):oe}let T=(oe,be,C)=>da(oe.slice(be,C));class P{constructor(be,C,Ye){this.r=be,this.s=C,this.recovery=Ye,this.assertValidity()}static fromCompact(be){let C=t.nByteLength;return be=oi("compactSignature",be,C*2),new P(T(be,0,C),T(be,C,2*C))}static fromDER(be){let{r:C,s:Ye}=Rn.toSig(oi("DER",be));return new P(C,Ye)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(be){return new P(this.r,this.s,be)}recoverPublicKey(be){let{r:C,s:Ye,recovery:Be}=this,pt=J(oi("msgHash",be));if(Be==null||![0,1,2,3].includes(Be))throw new Error("recovery id invalid");let Ht=Be===2||Be===3?C+t.n:C;if(Ht>=e.ORDER)throw new Error("recovery id 2 or 3 invalid");let Ut=Be&1?"03":"02",Bi=c.fromHex(Ut+w(Ht)),ht=l(Ht),Sa=s(-pt*ht),un=s(Ye*ht),Wt=c.BASE.multiplyAndAddUnsafe(Bi,Sa,un);if(!Wt)throw new Error("point at infinify");return Wt.assertValidity(),Wt}hasHighS(){return x(this.s)}normalizeS(){return this.hasHighS()?new P(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return Bn(this.toDERHex())}toDERHex(){return Rn.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Bn(this.toCompactHex())}toCompactHex(){return w(this.r)+w(this.s)}}let z={isValidPrivateKey(oe){try{return u(oe),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{let oe=$y(t.n);return t_(t.randomBytes(oe),t.n)},precompute(oe=8,be=c.BASE){return be._setWindowSize(oe),be.multiply(BigInt(3)),be}};function j(oe,be=!0){return c.fromPrivateKey(oe).toRawBytes(be)}function Z(oe){let be=oe instanceof Uint8Array,C=typeof oe=="string",Ye=(be||C)&&oe.length;return be?Ye===n||Ye===r:C?Ye===2*n||Ye===2*r:oe instanceof c}function R(oe,be,C=!0){if(Z(oe))throw new Error("first arg must be private key");if(!Z(be))throw new Error("second arg must be public key");return c.fromHex(be).multiply(u(oe)).toRawBytes(C)}let Y=t.bits2int||function(oe){let be=da(oe),C=oe.length*8-t.nBitLength;return C>0?be>>BigInt(C):be},J=t.bits2int_modN||function(oe){return s(Y(oe))},pe=is(t.nBitLength);function Oe(oe){if(typeof oe!="bigint")throw new Error("bigint expected");if(!(ha<=oe&&oe<pe))throw new Error(`bigint expected < 2^${t.nBitLength}`);return en(oe,t.nByteLength)}function Ae(oe,be,C=Ce){if(["recovered","canonical"].some(ea=>ea in C))throw new Error("sign() legacy options not supported");let{hash:Ye,randomBytes:Be}=t,{lowS:pt,prehash:Ht,extraEntropy:Ut}=C;pt==null&&(pt=!0),oe=oi("msgHash",oe),Ht&&(oe=oi("prehashed msgHash",Ye(oe)));let Bi=J(oe),ht=u(be),Sa=[Oe(ht),Oe(Bi)];if(Ut!=null){let ea=Ut===!0?Be(e.BYTES):Ut;Sa.push(oi("extraEntropy",ea))}let un=$r(...Sa),Wt=Bi;function uo(ea){let Ca=Y(ea);if(!v(Ca))return;let po=l(Ca),ei=c.BASE.multiply(Ca).toAffine(),ka=s(ei.x);if(ka===ha)return;let jn=s(po*s(Wt+ka*ht));if(jn===ha)return;let bl=(ei.x===ka?0:2)|Number(ei.y&yi),qn=jn;return pt&&x(jn)&&(qn=b(jn),bl^=1),new P(ka,qn,bl)}return{seed:un,k2sig:uo}}let Ce={lowS:t.lowS,prehash:!1},ut={lowS:t.lowS,prehash:!1};function Ot(oe,be,C=Ce){let{seed:Ye,k2sig:Be}=Ae(oe,be,C),pt=t;return jy(pt.hash.outputLen,pt.nByteLength,pt.hmac)(Ye,Be)}c.BASE._setWindowSize(8);function vi(oe,be,C,Ye=ut){let Be=oe;if(be=oi("msgHash",be),C=oi("publicKey",C),"strict"in Ye)throw new Error("options.strict was renamed to lowS");let{lowS:pt,prehash:Ht}=Ye,Ut,Bi;try{if(typeof Be=="string"||Be instanceof Uint8Array)try{Ut=P.fromDER(Be)}catch(ei){if(!(ei instanceof Rn.Err))throw ei;Ut=P.fromCompact(Be)}else if(typeof Be=="object"&&typeof Be.r=="bigint"&&typeof Be.s=="bigint"){let{r:ei,s:ka}=Be;Ut=new P(ei,ka)}else throw new Error("PARSE");Bi=c.fromHex(C)}catch(ei){if(ei.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(pt&&Ut.hasHighS())return!1;Ht&&(be=t.hash(be));let{r:ht,s:Sa}=Ut,un=J(be),Wt=l(Sa),uo=s(un*Wt),ea=s(ht*Wt),Ca=c.BASE.multiplyAndAddUnsafe(Bi,uo,ea)?.toAffine();return Ca?s(Ca.x)===ht:!1}return{CURVE:t,getPublicKey:j,getSharedSecret:R,sign:Ot,verify:vi,ProjectivePoint:c,Signature:P,utils:z}}var ex,tx,Rn,ha,yi,h4,n_,f4,o_=ie(()=>{"use strict";Lu();Xr();Xr();a_();({bytesToNumberBE:ex,hexToBytes:tx}=qy),Rn={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(a){let{Err:t}=Rn;if(a.length<2||a[0]!==2)throw new t("Invalid signature integer tag");let e=a[1],i=a.subarray(2,e+2);if(!e||i.length!==e)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:ex(i),l:a.subarray(e+2)}},toSig(a){let{Err:t}=Rn,e=typeof a=="string"?tx(a):a;if(!(e instanceof Uint8Array))throw new Error("ui8a expected");let i=e.length;if(i<2||e[0]!=48)throw new t("Invalid signature tag");if(e[1]!==i-2)throw new t("Invalid signature: incorrect length");let{d:n,l:r}=Rn._parseInt(e.subarray(2)),{d:o,l:s}=Rn._parseInt(r);if(s.length)throw new t("Invalid signature: left bytes after parsing");return{r:n,s:o}},hexFromSig(a){let t=c=>Number.parseInt(c[0],16)&8?"00"+c:c,e=c=>{let u=c.toString(16);return u.length&1?`0${u}`:u},i=t(e(a.s)),n=t(e(a.r)),r=i.length/2,o=n.length/2,s=e(r),l=e(o);return`30${e(o+r+4)}02${l}${n}02${s}${i}`}},ha=BigInt(0),yi=BigInt(1),h4=BigInt(2),n_=BigInt(3),f4=BigInt(4)});var _u,Zy,s_=ie(()=>{"use strict";oc();Zn();_u=class extends Ba{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,fg(t);let i=Pa(e);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,r=new Uint8Array(n);r.set(i.length>n?t.create().update(i).digest():i);for(let o=0;o<r.length;o++)r[o]^=54;this.iHash.update(r),this.oHash=t.create();for(let o=0;o<r.length;o++)r[o]^=106;this.oHash.update(r),r.fill(0)}update(t){return oa(this),this.iHash.update(t),this}digestInto(t){oa(this),No(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));let{oHash:e,iHash:i,finished:n,destroyed:r,blockLen:o,outputLen:s}=this;return t=t,t.finished=n,t.destroyed=r,t.blockLen=o,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Zy=(a,t,e)=>new _u(a,t).update(e).digest();Zy.create=(a,t)=>new _u(a,t)});function nx(a){return{hash:a,hmac:(t,...e)=>Zy(a,t,Tg(...e)),randomBytes:Cg}}function l_(a,t){let e=i=>r_({...a,...nx(i)});return Object.freeze({...e(t),create:e})}var c_=ie(()=>{"use strict";s_();Zn();o_();});function ox(a){let t=m_,e=BigInt(3),i=BigInt(6),n=BigInt(11),r=BigInt(22),o=BigInt(23),s=BigInt(44),l=BigInt(88),c=a*a*a%t,u=c*c*a%t,m=si(u,e,t)*u%t,v=si(m,e,t)*u%t,w=si(v,Jy,t)*c%t,x=si(w,n,t)*w%t,b=si(x,r,t)*x%t,T=si(b,s,t)*b%t,P=si(T,l,t)*T%t,z=si(P,s,t)*b%t,j=si(z,e,t)*u%t,Z=si(j,o,t)*x%t,R=si(Z,i,t)*c%t,Y=si(R,Jy,t);if(!eb.eql(eb.sqr(Y),a))throw new Error("Cannot find square root");return Y}var m_,u_,rx,Jy,p_,eb,tb,S4,C4,d_=ie(()=>{"use strict";LL();Lu();c_();m_=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),u_=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),rx=BigInt(1),Jy=BigInt(2),p_=(a,t)=>(a+t/Jy)/t;eb=JL(m_,void 0,void 0,{sqrt:ox}),tb=l_({a:BigInt(0),b:BigInt(7),Fp:eb,n:u_,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:a=>{let t=u_,e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-rx*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),n=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),r=e,o=BigInt("0x100000000000000000000000000000000"),s=p_(r*a,t),l=p_(-i*a,t),c=Nt(a-s*e-l*n,t),u=Nt(-s*i-l*r,t),m=c>o,v=u>o;if(m&&(c=t-c),v&&(u=t-u),c>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+a);return{k1neg:m,k1:c,k2neg:v,k2:u}}}},vL),S4=BigInt(0),C4=tb.ProjectivePoint});var y_=u0((rb,ob)=>{"use strict";(function(a,t){typeof rb=="object"&&typeof ob<"u"?ob.exports=t():typeof define=="function"&&define.amd?define(t):(a=typeof globalThis<"u"?globalThis:a||self).jsSHA=t()})(rb,function(){"use strict";var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function t(S,f,I,E){var A,_,G,W=f||[0],X=(I=I||0)>>>3,re=E===-1?3:0;for(A=0;A<S.length;A+=1)_=(G=A+X)>>>2,W.length<=_&&W.push(0),W[_]|=S[A]<<8*(re+E*(G%4));return{value:W,binLen:8*S.length+I}}function e(S,f,I){switch(f){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(S){case"HEX":return function(E,A,_){return function(G,W,X,re){var ve,ae,ce,De;if(G.length%2!=0)throw new Error("String of HEX type must be in byte increments");var te=W||[0],Ve=(X=X||0)>>>3,He=re===-1?3:0;for(ve=0;ve<G.length;ve+=2){if(ae=parseInt(G.substr(ve,2),16),isNaN(ae))throw new Error("String of HEX type contains invalid characters");for(ce=(De=(ve>>>1)+Ve)>>>2;te.length<=ce;)te.push(0);te[ce]|=ae<<8*(He+re*(De%4))}return{value:te,binLen:4*G.length+X}}(E,A,_,I)};case"TEXT":return function(E,A,_){return function(G,W,X,re,ve){var ae,ce,De,te,Ve,He,Ke,Je,ta=0,ti=X||[0],Li=(re=re||0)>>>3;if(W==="UTF8")for(Ke=ve===-1?3:0,De=0;De<G.length;De+=1)for(ce=[],128>(ae=G.charCodeAt(De))?ce.push(ae):2048>ae?(ce.push(192|ae>>>6),ce.push(128|63&ae)):55296>ae||57344<=ae?ce.push(224|ae>>>12,128|ae>>>6&63,128|63&ae):(De+=1,ae=65536+((1023&ae)<<10|1023&G.charCodeAt(De)),ce.push(240|ae>>>18,128|ae>>>12&63,128|ae>>>6&63,128|63&ae)),te=0;te<ce.length;te+=1){for(Ve=(He=ta+Li)>>>2;ti.length<=Ve;)ti.push(0);ti[Ve]|=ce[te]<<8*(Ke+ve*(He%4)),ta+=1}else for(Ke=ve===-1?2:0,Je=W==="UTF16LE"&&ve!==1||W!=="UTF16LE"&&ve===1,De=0;De<G.length;De+=1){for(ae=G.charCodeAt(De),Je===!0&&(ae=(te=255&ae)<<8|ae>>>8),Ve=(He=ta+Li)>>>2;ti.length<=Ve;)ti.push(0);ti[Ve]|=ae<<8*(Ke+ve*(He%4)),ta+=2}return{value:ti,binLen:8*ta+re}}(E,f,A,_,I)};case"B64":return function(E,A,_){return function(G,W,X,re){var ve,ae,ce,De,te,Ve,He=0,Ke=W||[0],Je=(X=X||0)>>>3,ta=re===-1?3:0,ti=G.indexOf("=");if(G.search(/^[a-zA-Z0-9=+/]+$/)===-1)throw new Error("Invalid character in base-64 string");if(G=G.replace(/=/g,""),ti!==-1&&ti<G.length)throw new Error("Invalid '=' found in base-64 string");for(ve=0;ve<G.length;ve+=4){for(De=G.substr(ve,4),ce=0,ae=0;ae<De.length;ae+=1)ce|=a.indexOf(De.charAt(ae))<<18-6*ae;for(ae=0;ae<De.length-1;ae+=1){for(te=(Ve=He+Je)>>>2;Ke.length<=te;)Ke.push(0);Ke[te]|=(ce>>>16-8*ae&255)<<8*(ta+re*(Ve%4)),He+=1}}return{value:Ke,binLen:8*He+X}}(E,A,_,I)};case"BYTES":return function(E,A,_){return function(G,W,X,re){var ve,ae,ce,De,te=W||[0],Ve=(X=X||0)>>>3,He=re===-1?3:0;for(ae=0;ae<G.length;ae+=1)ve=G.charCodeAt(ae),ce=(De=ae+Ve)>>>2,te.length<=ce&&te.push(0),te[ce]|=ve<<8*(He+re*(De%4));return{value:te,binLen:8*G.length+X}}(E,A,_,I)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(E,A,_){return function(G,W,X,re){return t(new Uint8Array(G),W,X,re)}(E,A,_,I)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(E,A,_){return t(E,A,_,I)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function i(S,f,I,E){switch(S){case"HEX":return function(A){return function(_,G,W,X){var re,ve,ae="",ce=G/8,De=W===-1?3:0;for(re=0;re<ce;re+=1)ve=_[re>>>2]>>>8*(De+W*(re%4)),ae+="0123456789abcdef".charAt(ve>>>4&15)+"0123456789abcdef".charAt(15&ve);return X.outputUpper?ae.toUpperCase():ae}(A,f,I,E)};case"B64":return function(A){return function(_,G,W,X){var re,ve,ae,ce,De,te="",Ve=G/8,He=W===-1?3:0;for(re=0;re<Ve;re+=3)for(ce=re+1<Ve?_[re+1>>>2]:0,De=re+2<Ve?_[re+2>>>2]:0,ae=(_[re>>>2]>>>8*(He+W*(re%4))&255)<<16|(ce>>>8*(He+W*((re+1)%4))&255)<<8|De>>>8*(He+W*((re+2)%4))&255,ve=0;ve<4;ve+=1)te+=8*re+6*ve<=G?a.charAt(ae>>>6*(3-ve)&63):X.b64Pad;return te}(A,f,I,E)};case"BYTES":return function(A){return function(_,G,W){var X,re,ve="",ae=G/8,ce=W===-1?3:0;for(X=0;X<ae;X+=1)re=_[X>>>2]>>>8*(ce+W*(X%4))&255,ve+=String.fromCharCode(re);return ve}(A,f,I)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(A){return function(_,G,W){var X,re=G/8,ve=new ArrayBuffer(re),ae=new Uint8Array(ve),ce=W===-1?3:0;for(X=0;X<re;X+=1)ae[X]=_[X>>>2]>>>8*(ce+W*(X%4))&255;return ve}(A,f,I)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(A){return function(_,G,W){var X,re=G/8,ve=W===-1?3:0,ae=new Uint8Array(re);for(X=0;X<re;X+=1)ae[X]=_[X>>>2]>>>8*(ve+W*(X%4))&255;return ae}(A,f,I)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}var n=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],r=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s="Chosen SHA variant is not supported";function l(S,f){var I,E,A=S.binLen>>>3,_=f.binLen>>>3,G=A<<3,W=4-A<<3;if(A%4!=0){for(I=0;I<_;I+=4)E=A+I>>>2,S.value[E]|=f.value[I>>>2]<<G,S.value.push(0),S.value[E+1]|=f.value[I>>>2]>>>W;return(S.value.length<<2)-4>=_+A&&S.value.pop(),{value:S.value,binLen:S.binLen+f.binLen}}return{value:S.value.concat(f.value),binLen:S.binLen+f.binLen}}function c(S){var f={outputUpper:!1,b64Pad:"=",outputLen:-1},I=S||{},E="Output length must be a multiple of 8";if(f.outputUpper=I.outputUpper||!1,I.b64Pad&&(f.b64Pad=I.b64Pad),I.outputLen){if(I.outputLen%8!=0)throw new Error(E);f.outputLen=I.outputLen}else if(I.shakeLen){if(I.shakeLen%8!=0)throw new Error(E);f.outputLen=I.shakeLen}if(typeof f.outputUpper!="boolean")throw new Error("Invalid outputUpper formatting option");if(typeof f.b64Pad!="string")throw new Error("Invalid b64Pad formatting option");return f}function u(S,f,I,E){var A=S+" must include a value and format";if(!f){if(!E)throw new Error(A);return E}if(f.value===void 0||!f.format)throw new Error(A);return e(f.format,f.encoding||"UTF8",I)(f.value)}var m=function(){function S(f,I,E){var A=E||{};if(this.t=I,this.i=A.encoding||"UTF8",this.numRounds=A.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=f,this.u=[],this.s=0,this.h=!1,this.v=0,this.A=!1,this.l=[],this.H=[]}return S.prototype.update=function(f){var I,E=0,A=this.S>>>5,_=this.p(f,this.u,this.s),G=_.binLen,W=_.value,X=G>>>5;for(I=0;I<X;I+=A)E+this.S<=G&&(this.m=this.R(W.slice(I,I+A),this.m),E+=this.S);this.v+=E,this.u=W.slice(E>>>5),this.s=G%this.S,this.h=!0},S.prototype.getHash=function(f,I){var E,A,_=this.U,G=c(I);if(this.T){if(G.outputLen===-1)throw new Error("Output length must be specified in options");_=G.outputLen}var W=i(f,_,this.C,G);if(this.A&&this.F)return W(this.F(G));for(A=this.K(this.u.slice(),this.s,this.v,this.B(this.m),_),E=1;E<this.numRounds;E+=1)this.T&&_%32!=0&&(A[A.length-1]&=16777215>>>24-_%32),A=this.K(A,_,0,this.L(this.o),_);return W(A)},S.prototype.setHMACKey=function(f,I,E){if(!this.g)throw new Error("Variant does not support HMAC");if(this.h)throw new Error("Cannot set MAC key after calling update");var A=e(I,(E||{}).encoding||"UTF8",this.C);this.k(A(f))},S.prototype.k=function(f){var I,E=this.S>>>3,A=E/4-1;if(this.numRounds!==1)throw new Error("Cannot set numRounds with MAC");if(this.A)throw new Error("MAC key already set");for(E<f.binLen/8&&(f.value=this.K(f.value,f.binLen,0,this.L(this.o),this.U));f.value.length<=A;)f.value.push(0);for(I=0;I<=A;I+=1)this.l[I]=909522486^f.value[I],this.H[I]=1549556828^f.value[I];this.m=this.R(this.l,this.m),this.v=this.S,this.A=!0},S.prototype.getHMAC=function(f,I){var E=c(I);return i(f,this.U,this.C,E)(this.Y())},S.prototype.Y=function(){var f;if(!this.A)throw new Error("Cannot call getHMAC without first setting MAC key");var I=this.K(this.u.slice(),this.s,this.v,this.B(this.m),this.U);return f=this.R(this.H,this.L(this.o)),f=this.K(I,this.U,this.S,f,this.U)},S}(),v=function(S,f){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(I,E){I.__proto__=E}||function(I,E){for(var A in E)Object.prototype.hasOwnProperty.call(E,A)&&(I[A]=E[A])})(S,f)};function w(S,f){function I(){this.constructor=S}v(S,f),S.prototype=f===null?Object.create(f):(I.prototype=f.prototype,new I)}function x(S,f){return S<<f|S>>>32-f}function b(S,f){return S>>>f|S<<32-f}function T(S,f){return S>>>f}function P(S,f,I){return S^f^I}function z(S,f,I){return S&f^~S&I}function j(S,f,I){return S&f^S&I^f&I}function Z(S){return b(S,2)^b(S,13)^b(S,22)}function R(S,f){var I=(65535&S)+(65535&f);return(65535&(S>>>16)+(f>>>16)+(I>>>16))<<16|65535&I}function Y(S,f,I,E){var A=(65535&S)+(65535&f)+(65535&I)+(65535&E);return(65535&(S>>>16)+(f>>>16)+(I>>>16)+(E>>>16)+(A>>>16))<<16|65535&A}function J(S,f,I,E,A){var _=(65535&S)+(65535&f)+(65535&I)+(65535&E)+(65535&A);return(65535&(S>>>16)+(f>>>16)+(I>>>16)+(E>>>16)+(A>>>16)+(_>>>16))<<16|65535&_}function pe(S){return b(S,7)^b(S,18)^T(S,3)}function Oe(S){return b(S,6)^b(S,11)^b(S,25)}function Ae(S){return[1732584193,4023233417,2562383102,271733878,3285377520]}function Ce(S,f){var I,E,A,_,G,W,X,re=[];for(I=f[0],E=f[1],A=f[2],_=f[3],G=f[4],X=0;X<80;X+=1)re[X]=X<16?S[X]:x(re[X-3]^re[X-8]^re[X-14]^re[X-16],1),W=X<20?J(x(I,5),z(E,A,_),G,1518500249,re[X]):X<40?J(x(I,5),P(E,A,_),G,1859775393,re[X]):X<60?J(x(I,5),j(E,A,_),G,2400959708,re[X]):J(x(I,5),P(E,A,_),G,3395469782,re[X]),G=_,_=A,A=x(E,30),E=I,I=W;return f[0]=R(I,f[0]),f[1]=R(E,f[1]),f[2]=R(A,f[2]),f[3]=R(_,f[3]),f[4]=R(G,f[4]),f}function ut(S,f,I,E){for(var A,_=15+(f+65>>>9<<4),G=f+I;S.length<=_;)S.push(0);for(S[f>>>5]|=128<<24-f%32,S[_]=4294967295&G,S[_-1]=G/4294967296|0,A=0;A<S.length;A+=16)E=Ce(S.slice(A,A+16),E);return E}var Ot=function(S){function f(I,E,A){var _=this;if(I!=="SHA-1")throw new Error(s);var G=A||{};return(_=S.call(this,I,E,A)||this).g=!0,_.F=_.Y,_.C=-1,_.p=e(_.t,_.i,_.C),_.R=Ce,_.B=function(W){return W.slice()},_.L=Ae,_.K=ut,_.m=[1732584193,4023233417,2562383102,271733878,3285377520],_.S=512,_.U=160,_.T=!1,G.hmacKey&&_.k(u("hmacKey",G.hmacKey,_.C)),_}return w(f,S),f}(m);function vi(S){return S=="SHA-224"?r.slice():o.slice()}function oe(S,f){var I,E,A,_,G,W,X,re,ve,ae,ce,De,te=[];for(I=f[0],E=f[1],A=f[2],_=f[3],G=f[4],W=f[5],X=f[6],re=f[7],ce=0;ce<64;ce+=1)te[ce]=ce<16?S[ce]:Y(b(De=te[ce-2],17)^b(De,19)^T(De,10),te[ce-7],pe(te[ce-15]),te[ce-16]),ve=J(re,Oe(G),z(G,W,X),n[ce],te[ce]),ae=R(Z(I),j(I,E,A)),re=X,X=W,W=G,G=R(_,ve),_=A,A=E,E=I,I=R(ve,ae);return f[0]=R(I,f[0]),f[1]=R(E,f[1]),f[2]=R(A,f[2]),f[3]=R(_,f[3]),f[4]=R(G,f[4]),f[5]=R(W,f[5]),f[6]=R(X,f[6]),f[7]=R(re,f[7]),f}var be=function(S){function f(I,E,A){var _=this;if(I!=="SHA-224"&&I!=="SHA-256")throw new Error(s);var G=A||{};return(_=S.call(this,I,E,A)||this).F=_.Y,_.g=!0,_.C=-1,_.p=e(_.t,_.i,_.C),_.R=oe,_.B=function(W){return W.slice()},_.L=vi,_.K=function(W,X,re,ve){return function(ae,ce,De,te,Ve){for(var He,Ke=15+(ce+65>>>9<<4),Je=ce+De;ae.length<=Ke;)ae.push(0);for(ae[ce>>>5]|=128<<24-ce%32,ae[Ke]=4294967295&Je,ae[Ke-1]=Je/4294967296|0,He=0;He<ae.length;He+=16)te=oe(ae.slice(He,He+16),te);return Ve==="SHA-224"?[te[0],te[1],te[2],te[3],te[4],te[5],te[6]]:te}(W,X,re,ve,I)},_.m=vi(I),_.S=512,_.U=I==="SHA-224"?224:256,_.T=!1,G.hmacKey&&_.k(u("hmacKey",G.hmacKey,_.C)),_}return w(f,S),f}(m),C=function(S,f){this.N=S,this.I=f};function Ye(S,f){var I;return f>32?(I=64-f,new C(S.I<<f|S.N>>>I,S.N<<f|S.I>>>I)):f!==0?(I=32-f,new C(S.N<<f|S.I>>>I,S.I<<f|S.N>>>I)):S}function Be(S,f){var I;return f<32?(I=32-f,new C(S.N>>>f|S.I<<I,S.I>>>f|S.N<<I)):(I=64-f,new C(S.I>>>f|S.N<<I,S.N>>>f|S.I<<I))}function pt(S,f){return new C(S.N>>>f,S.I>>>f|S.N<<32-f)}function Ht(S,f,I){return new C(S.N&f.N^~S.N&I.N,S.I&f.I^~S.I&I.I)}function Ut(S,f,I){return new C(S.N&f.N^S.N&I.N^f.N&I.N,S.I&f.I^S.I&I.I^f.I&I.I)}function Bi(S){var f=Be(S,28),I=Be(S,34),E=Be(S,39);return new C(f.N^I.N^E.N,f.I^I.I^E.I)}function ht(S,f){var I,E;I=(65535&S.I)+(65535&f.I);var A=(65535&(E=(S.I>>>16)+(f.I>>>16)+(I>>>16)))<<16|65535&I;return I=(65535&S.N)+(65535&f.N)+(E>>>16),E=(S.N>>>16)+(f.N>>>16)+(I>>>16),new C((65535&E)<<16|65535&I,A)}function Sa(S,f,I,E){var A,_;A=(65535&S.I)+(65535&f.I)+(65535&I.I)+(65535&E.I);var G=(65535&(_=(S.I>>>16)+(f.I>>>16)+(I.I>>>16)+(E.I>>>16)+(A>>>16)))<<16|65535&A;return A=(65535&S.N)+(65535&f.N)+(65535&I.N)+(65535&E.N)+(_>>>16),_=(S.N>>>16)+(f.N>>>16)+(I.N>>>16)+(E.N>>>16)+(A>>>16),new C((65535&_)<<16|65535&A,G)}function un(S,f,I,E,A){var _,G;_=(65535&S.I)+(65535&f.I)+(65535&I.I)+(65535&E.I)+(65535&A.I);var W=(65535&(G=(S.I>>>16)+(f.I>>>16)+(I.I>>>16)+(E.I>>>16)+(A.I>>>16)+(_>>>16)))<<16|65535&_;return _=(65535&S.N)+(65535&f.N)+(65535&I.N)+(65535&E.N)+(65535&A.N)+(G>>>16),G=(S.N>>>16)+(f.N>>>16)+(I.N>>>16)+(E.N>>>16)+(A.N>>>16)+(_>>>16),new C((65535&G)<<16|65535&_,W)}function Wt(S,f){return new C(S.N^f.N,S.I^f.I)}function uo(S){var f=Be(S,1),I=Be(S,8),E=pt(S,7);return new C(f.N^I.N^E.N,f.I^I.I^E.I)}function ea(S){var f=Be(S,14),I=Be(S,18),E=Be(S,41);return new C(f.N^I.N^E.N,f.I^I.I^E.I)}var Ca=[new C(n[0],3609767458),new C(n[1],602891725),new C(n[2],3964484399),new C(n[3],2173295548),new C(n[4],4081628472),new C(n[5],3053834265),new C(n[6],2937671579),new C(n[7],3664609560),new C(n[8],2734883394),new C(n[9],1164996542),new C(n[10],1323610764),new C(n[11],3590304994),new C(n[12],4068182383),new C(n[13],991336113),new C(n[14],633803317),new C(n[15],3479774868),new C(n[16],2666613458),new C(n[17],944711139),new C(n[18],2341262773),new C(n[19],2007800933),new C(n[20],1495990901),new C(n[21],1856431235),new C(n[22],3175218132),new C(n[23],2198950837),new C(n[24],3999719339),new C(n[25],766784016),new C(n[26],2566594879),new C(n[27],3203337956),new C(n[28],1034457026),new C(n[29],2466948901),new C(n[30],3758326383),new C(n[31],168717936),new C(n[32],1188179964),new C(n[33],1546045734),new C(n[34],1522805485),new C(n[35],2643833823),new C(n[36],2343527390),new C(n[37],1014477480),new C(n[38],1206759142),new C(n[39],344077627),new C(n[40],1290863460),new C(n[41],3158454273),new C(n[42],3505952657),new C(n[43],106217008),new C(n[44],3606008344),new C(n[45],1432725776),new C(n[46],1467031594),new C(n[47],851169720),new C(n[48],3100823752),new C(n[49],1363258195),new C(n[50],3750685593),new C(n[51],3785050280),new C(n[52],3318307427),new C(n[53],3812723403),new C(n[54],2003034995),new C(n[55],3602036899),new C(n[56],1575990012),new C(n[57],1125592928),new C(n[58],2716904306),new C(n[59],442776044),new C(n[60],593698344),new C(n[61],3733110249),new C(n[62],2999351573),new C(n[63],3815920427),new C(3391569614,3928383900),new C(3515267271,566280711),new C(3940187606,3454069534),new C(4118630271,4000239992),new C(116418474,1914138554),new C(174292421,2731055270),new C(289380356,3203993006),new C(460393269,320620315),new C(685471733,587496836),new C(852142971,1086792851),new C(1017036298,365543100),new C(1126000580,2618297676),new C(1288033470,3409855158),new C(1501505948,4234509866),new C(1607167915,987167468),new C(1816402316,1246189591)];function po(S){return S==="SHA-384"?[new C(3418070365,r[0]),new C(1654270250,r[1]),new C(2438529370,r[2]),new C(355462360,r[3]),new C(1731405415,r[4]),new C(41048885895,r[5]),new C(3675008525,r[6]),new C(1203062813,r[7])]:[new C(o[0],4089235720),new C(o[1],2227873595),new C(o[2],4271175723),new C(o[3],1595750129),new C(o[4],2917565137),new C(o[5],725511199),new C(o[6],4215389547),new C(o[7],327033209)]}function ei(S,f){var I,E,A,_,G,W,X,re,ve,ae,ce,De,te,Ve,He,Ke,Je=[];for(I=f[0],E=f[1],A=f[2],_=f[3],G=f[4],W=f[5],X=f[6],re=f[7],ce=0;ce<80;ce+=1)ce<16?(De=2*ce,Je[ce]=new C(S[De],S[De+1])):Je[ce]=Sa((te=Je[ce-2],Ve=void 0,He=void 0,Ke=void 0,Ve=Be(te,19),He=Be(te,61),Ke=pt(te,6),new C(Ve.N^He.N^Ke.N,Ve.I^He.I^Ke.I)),Je[ce-7],uo(Je[ce-15]),Je[ce-16]),ve=un(re,ea(G),Ht(G,W,X),Ca[ce],Je[ce]),ae=ht(Bi(I),Ut(I,E,A)),re=X,X=W,W=G,G=ht(_,ve),_=A,A=E,E=I,I=ht(ve,ae);return f[0]=ht(I,f[0]),f[1]=ht(E,f[1]),f[2]=ht(A,f[2]),f[3]=ht(_,f[3]),f[4]=ht(G,f[4]),f[5]=ht(W,f[5]),f[6]=ht(X,f[6]),f[7]=ht(re,f[7]),f}var ka=function(S){function f(I,E,A){var _=this;if(I!=="SHA-384"&&I!=="SHA-512")throw new Error(s);var G=A||{};return(_=S.call(this,I,E,A)||this).F=_.Y,_.g=!0,_.C=-1,_.p=e(_.t,_.i,_.C),_.R=ei,_.B=function(W){return W.slice()},_.L=po,_.K=function(W,X,re,ve){return function(ae,ce,De,te,Ve){for(var He,Ke=31+(ce+129>>>10<<5),Je=ce+De;ae.length<=Ke;)ae.push(0);for(ae[ce>>>5]|=128<<24-ce%32,ae[Ke]=4294967295&Je,ae[Ke-1]=Je/4294967296|0,He=0;He<ae.length;He+=32)te=ei(ae.slice(He,He+32),te);return Ve==="SHA-384"?[(te=te)[0].N,te[0].I,te[1].N,te[1].I,te[2].N,te[2].I,te[3].N,te[3].I,te[4].N,te[4].I,te[5].N,te[5].I]:[te[0].N,te[0].I,te[1].N,te[1].I,te[2].N,te[2].I,te[3].N,te[3].I,te[4].N,te[4].I,te[5].N,te[5].I,te[6].N,te[6].I,te[7].N,te[7].I]}(W,X,re,ve,I)},_.m=po(I),_.S=1024,_.U=I==="SHA-384"?384:512,_.T=!1,G.hmacKey&&_.k(u("hmacKey",G.hmacKey,_.C)),_}return w(f,S),f}(m),jn=[new C(0,1),new C(0,32898),new C(2147483648,32906),new C(2147483648,2147516416),new C(0,32907),new C(0,2147483649),new C(2147483648,2147516545),new C(2147483648,32777),new C(0,138),new C(0,136),new C(0,2147516425),new C(0,2147483658),new C(0,2147516555),new C(2147483648,139),new C(2147483648,32905),new C(2147483648,32771),new C(2147483648,32770),new C(2147483648,128),new C(0,32778),new C(2147483648,2147483658),new C(2147483648,2147516545),new C(2147483648,32896),new C(0,2147483649),new C(2147483648,2147516424)],bl=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function qn(S){var f,I=[];for(f=0;f<5;f+=1)I[f]=[new C(0,0),new C(0,0),new C(0,0),new C(0,0),new C(0,0)];return I}function a0(S){var f,I=[];for(f=0;f<5;f+=1)I[f]=S[f].slice();return I}function gl(S,f){var I,E,A,_,G,W,X,re,ve,ae=[],ce=[];if(S!==null)for(E=0;E<S.length;E+=2)f[(E>>>1)%5][(E>>>1)/5|0]=Wt(f[(E>>>1)%5][(E>>>1)/5|0],new C(S[E+1],S[E]));for(I=0;I<24;I+=1){for(_=qn(),E=0;E<5;E+=1)ae[E]=(G=f[E][0],W=f[E][1],X=f[E][2],re=f[E][3],ve=f[E][4],new C(G.N^W.N^X.N^re.N^ve.N,G.I^W.I^X.I^re.I^ve.I));for(E=0;E<5;E+=1)ce[E]=Wt(ae[(E+4)%5],Ye(ae[(E+1)%5],1));for(E=0;E<5;E+=1)for(A=0;A<5;A+=1)f[E][A]=Wt(f[E][A],ce[E]);for(E=0;E<5;E+=1)for(A=0;A<5;A+=1)_[A][(2*E+3*A)%5]=Ye(f[E][A],bl[E][A]);for(E=0;E<5;E+=1)for(A=0;A<5;A+=1)f[E][A]=Wt(_[E][A],new C(~_[(E+1)%5][A].N&_[(E+2)%5][A].N,~_[(E+1)%5][A].I&_[(E+2)%5][A].I));f[0][0]=Wt(f[0][0],jn[I])}return f}function Qb(S){var f,I,E=0,A=[0,0],_=[4294967295&S,S/4294967296&2097151];for(f=6;f>=0;f--)(I=_[f>>2]>>>8*f&255)===0&&E===0||(A[E+1>>2]|=I<<8*(E+1),E+=1);return E=E!==0?E:1,A[0]|=E,{value:E+1>4?A:[A[0]],binLen:8+8*E}}function uy(S){return l(Qb(S.binLen),S)}function Zb(S,f){var I,E=Qb(f),A=f>>>2,_=(A-(E=l(E,S)).value.length%A)%A;for(I=0;I<_;I++)E.value.push(0);return E.value}var n0=function(S){function f(I,E,A){var _=this,G=6,W=0,X=A||{};if((_=S.call(this,I,E,A)||this).numRounds!==1){if(X.kmacKey||X.hmacKey)throw new Error("Cannot set numRounds with MAC");if(_.o==="CSHAKE128"||_.o==="CSHAKE256")throw new Error("Cannot set numRounds for CSHAKE variants")}switch(_.C=1,_.p=e(_.t,_.i,_.C),_.R=gl,_.B=a0,_.L=qn,_.m=qn(),_.T=!1,I){case"SHA3-224":_.S=W=1152,_.U=224,_.g=!0,_.F=_.Y;break;case"SHA3-256":_.S=W=1088,_.U=256,_.g=!0,_.F=_.Y;break;case"SHA3-384":_.S=W=832,_.U=384,_.g=!0,_.F=_.Y;break;case"SHA3-512":_.S=W=576,_.U=512,_.g=!0,_.F=_.Y;break;case"SHAKE128":G=31,_.S=W=1344,_.U=-1,_.T=!0,_.g=!1,_.F=null;break;case"SHAKE256":G=31,_.S=W=1088,_.U=-1,_.T=!0,_.g=!1,_.F=null;break;case"KMAC128":G=4,_.S=W=1344,_.M(A),_.U=-1,_.T=!0,_.g=!1,_.F=_.X;break;case"KMAC256":G=4,_.S=W=1088,_.M(A),_.U=-1,_.T=!0,_.g=!1,_.F=_.X;break;case"CSHAKE128":_.S=W=1344,G=_.O(A),_.U=-1,_.T=!0,_.g=!1,_.F=null;break;case"CSHAKE256":_.S=W=1088,G=_.O(A),_.U=-1,_.T=!0,_.g=!1,_.F=null;break;default:throw new Error(s)}return _.K=function(re,ve,ae,ce,De){return function(te,Ve,He,Ke,Je,ta,ti){var Li,py,vl=0,mo=[],Ll=Je>>>5,r0=Ve>>>5;for(Li=0;Li<r0&&Ve>=Je;Li+=Ll)Ke=gl(te.slice(Li,Li+Ll),Ke),Ve-=Je;for(te=te.slice(Li),Ve%=Je;te.length<Ll;)te.push(0);for(te[(Li=Ve>>>3)>>2]^=ta<<Li%4*8,te[Ll-1]^=2147483648,Ke=gl(te,Ke);32*mo.length<ti&&(py=Ke[vl%5][vl/5|0],mo.push(py.I),!(32*mo.length>=ti));)mo.push(py.N),64*(vl+=1)%Je==0&&(gl(null,Ke),vl=0);return mo}(re,ve,0,ce,W,G,De)},X.hmacKey&&_.k(u("hmacKey",X.hmacKey,_.C)),_}return w(f,S),f.prototype.O=function(I,E){var A=function(X){var re=X||{};return{funcName:u("funcName",re.funcName,1,{value:[],binLen:0}),customization:u("Customization",re.customization,1,{value:[],binLen:0})}}(I||{});E&&(A.funcName=E);var _=l(uy(A.funcName),uy(A.customization));if(A.customization.binLen!==0||A.funcName.binLen!==0){for(var G=Zb(_,this.S>>>3),W=0;W<G.length;W+=this.S>>>5)this.m=this.R(G.slice(W,W+(this.S>>>5)),this.m),this.v+=this.S;return 4}return 31},f.prototype.M=function(I){var E=function(G){var W=G||{};return{kmacKey:u("kmacKey",W.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:u("Customization",W.customization,1,{value:[],binLen:0})}}(I||{});this.O(I,E.funcName);for(var A=Zb(uy(E.kmacKey),this.S>>>3),_=0;_<A.length;_+=this.S>>>5)this.m=this.R(A.slice(_,_+(this.S>>>5)),this.m),this.v+=this.S;this.A=!0},f.prototype.X=function(I){var E=l({value:this.u.slice(),binLen:this.s},function(A){var _,G,W=0,X=[0,0],re=[4294967295&A,A/4294967296&2097151];for(_=6;_>=0;_--)(G=re[_>>2]>>>8*_&255)==0&&W===0||(X[W>>2]|=G<<8*W,W+=1);return X[(W=W!==0?W:1)>>2]|=W<<8*W,{value:W+1>4?X:[X[0]],binLen:8+8*W}}(I.outputLen));return this.K(E.value,E.binLen,this.v,this.B(this.m),I.outputLen)},f}(m);return function(){function S(f,I,E){if(f=="SHA-1")this.j=new Ot(f,I,E);else if(f=="SHA-224"||f=="SHA-256")this.j=new be(f,I,E);else if(f=="SHA-384"||f=="SHA-512")this.j=new ka(f,I,E);else{if(f!="SHA3-224"&&f!="SHA3-256"&&f!="SHA3-384"&&f!="SHA3-512"&&f!="SHAKE128"&&f!="SHAKE256"&&f!="CSHAKE128"&&f!="CSHAKE256"&&f!="KMAC128"&&f!="KMAC256")throw new Error(s);this.j=new n0(f,I,E)}}return S.prototype.update=function(f){this.j.update(f)},S.prototype.getHash=function(f,I){return this.j.getHash(f,I)},S.prototype.setHMACKey=function(f,I,E){this.j.setHMACKey(f,I,E)},S.prototype.getHMAC=function(f,I){return this.j.getHMAC(f,I)},S}()})});var wl=class extends Laya.Scene{};var{regClass:d0,property:$T}=Laya,ho=class extends wl{constructor(){super()}onEnable(){console.log("IndexRT onEnable"),this.uiBtn.on(Laya.Event.CLICK,this,()=>{console.log("uiBtn"),Laya.Scene.open("scenes/UiMain.ls")}),this.phyBtn.on(Laya.Event.CLICK,this,()=>{console.log("phyBtn"),Laya.Scene.open("scenes/PhysicsGameMain.ls")}),this.d3Btn.on(Laya.Event.CLICK,this,()=>{console.log("d3Btn"),Laya.Scene.open("scenes/D3Main.ls")})}onDestroy(){}};ho=p([d0("wtSVevJMRPCBIPp2HPhqpw")],ho);var xl=class extends Laya.Scene{};var{regClass:h0,property:f0}=Laya,fo=class extends xl{constructor(){super();this.text=""}get dataSource(){return super.dataSource}set dataSource(e){if(super.dataSource=e,!!e){if(e.avatar){let i=this.getChildByName("avatar").getChildByName("redHot");i.visible=e.avatar.redHot.visible}if(e.flag){let i=this.getChildByName("flag").getChildByName("flagText");i.text=e.flag.flagText.text}}}};p([f0({type:"string"})],fo.prototype,"text",2),fo=p([h0("c-3Sonu7RWOm5ETy2TrBcg")],fo);var Il=class extends Laya.Scene{};var Le=class{constructor(){this._keys=[];this.THIS_ID="id"}init(t){for(let e in t){this._keys.push(e);let i=t[e];t[e]instanceof String&&String(t[e]).indexOf("[[")>=0&&(i=JSON.parse(t[e])),this[e]=i}}checkItems(){}};var yo=class extends Le{};var ne=class{constructor(){this._values=[];this._keys=[];this.SERIALIZATION_NUM=new Date().getTime()}get values(){return this._values}get keys(){return this._keys}set(t,e){let i=this.indexOf(t);if(i>=0){this._values[i]=e;return}this._keys.push(t),this._values.push(e)}unshift(t,e){let i=this.indexOf(t);if(i>=0){this._values[i]=e;return}this._keys.unshift(t),this._values.unshift(e)}indexOf(t){let e=this._keys.indexOf(t);return e>=0?e:(t=t instanceof String?Number(t):t instanceof Number?t.toString():t,this._keys.indexOf(t))}get(t){let e=this.indexOf(t);return e<0?null:this._values[e]}remove(t){let e=this.indexOf(t);return e>=0?(this._keys.splice(e,1),this._values.splice(e,1),!0):!1}clear(){this._values.length=0,this._keys.length=0}};var de=class de{constructor(){}static get LoginType(){return de._LoginType}static set LoginType(t){de._LoginType=t,de._LoginType&&de._LoginType!=""&&Laya.LocalStorage.setItem(de.COOKIE_CF_LoginType,de._LoginType)}static get isWhiteList(){return!0}static get intance(){return de._instance||(de._instance=new de),de._instance}init(){}static get server(){return getServer()}static get vType(){return getVType()}static get requestTime(){return 0}static get loginTime(){return 0}static set m_iTimeFrame(t){if(t>1500){let e=function(){de._m_iTimeFrame=0};de._m_iTimeFrame=t,Laya.timer.clear(Laya.timer,e),Laya.timer.once(500,Laya.timer,e)}}static get m_iTimeFrame(){return de._m_iTimeFrame}};de.IsRelease=!1,de.m_bInstantGame=!1,de.useWebVersion=!1,de.m_strVersionEX="V003",de.m_bIsMobWeb=!1,de.m_strWebTag="",de.Js_Version="1",de.Game_Version="20231227_01",de.App_Version="1.0.0",de.SDK_Version="1.0.0",de.M_strCountry="1",de.M_bAppData=!1,de.M_strTarget="",de.UseGuide=!1,de.m_mobileSameWb=!1,de.ignoreLang=!1,de.ignoreSheetNo=!1,de.m_bIsIphoneX=!1,de.Debug=0,de.Res=0,de.isTest=!0,de.Server_URL="",de.IP_User="",de.Plantform_APPID="17",de.ServerId=22310001,de.Login_UID="-1",de._LoginType="gamecenter",de.isInto=!1,de.isFull=!1,de.justFull=!1,de.Login_UDID="81BC19A8-B49B-47CC-BEFE-193E723B521A",de.Device_Info="",de.FCM_Token="",de.APP_IsRelease=!0,de.User_Lan="en",de.UserAgent="",de.Login_UserName="",de.isWhite=!1,de.APP_RES="",de.COOKIE_CF_LAN="COOKIE_GG_LAN",de.COOKIE_CF_LoginType="COOKIE_CF_LoginType",de.IPHONEX_SCARE=1.22,de.IPHONEX_TOP=44,de.IPHONEX_BUTTOM=34,de.DESIGN_WIDTH=1334,de.DESIGN_HEIGHT=750,de._m_iTimeFrame=0,de.isStopPhysics=!1,de.isDown=!1;var Q=de;var ee=class ee{constructor(){this._touchEnabled=!0;if(ee._instance)throw new Error("LayerManager是单例,不可new.");ee._instance=this}get m_sprPanelLayer(){return this._m_sprPanelLayer}set m_sprPanelLayer(t){this._m_sprPanelLayer=t}get m_sprMainUILayer(){return this._m_sprMainUILayer}set m_sprMainUILayer(t){this._m_sprMainUILayer=t}get m_sprTipLayer(){return this._m_sprTipLayer}set m_sprTipLayer(t){this._m_sprTipLayer=t}static get instence(){return ee._instance||(ee._instance=new ee),ee._instance}init(){this.m_sprSceneLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprSceneLayer),this.m_sprMainUILayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprMainUILayer),this.m_sprPanelLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprPanelLayer),this.m_sprPopLayer=new Laya.Sprite,this.m_sprPopLayer.mouseThrough=!0,Laya.stage.addChild(this.m_sprPopLayer),this.m_sprTipLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTipLayer),this.m_sprGuideLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprGuideLayer),this.m_sprTopLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTopLayer)}get touchEnabled(){return this._touchEnabled}set touchEnabled(t){this._touchEnabled!=t&&(this._touchEnabled=t,this.m_sprSceneLayer.mouseEnabled=this._touchEnabled,this.m_sprMainUILayer.mouseEnabled=this._touchEnabled,this.m_sprPanelLayer.mouseEnabled=this._touchEnabled,this.m_sprPopLayer.mouseEnabled=this._touchEnabled,this.m_sprTipLayer.mouseEnabled=this._touchEnabled,this.m_sprGuideLayer.mouseEnabled=this._touchEnabled,this.m_sprTopLayer.mouseEnabled=this._touchEnabled)}addToLayerAndSet(t,e=ee.M_PANEL,i=ee.CENTER){this.addToLayer(t,e),this.setPosition(t,i)}getLayerIndex(t,e=ee.M_PANEL){let i;switch(e){case ee.M_SCENE:i=this.m_sprSceneLayer.getChildIndex(t);break;case ee.M_MAINUI:i=this.m_sprMainUILayer.getChildIndex(t);break;case ee.M_PANEL:i=this.m_sprPanelLayer.getChildIndex(t);break;case ee.M_POP:i=this.m_sprPopLayer.getChildIndex(t);break;case ee.M_TIP:i=this.m_sprTipLayer.getChildIndex(t);break;case ee.M_GUIDE:i=this.m_sprGuideLayer.getChildIndex(t);break;case ee.M_TOP:i=this.m_sprTopLayer.getChildIndex(t);break}return i}addToLayerAt(t,e=ee.M_PANEL,i=0){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.addChildAt(t,i);break;case ee.M_MAINUI:this.m_sprMainUILayer.addChildAt(t,i);break;case ee.M_PANEL:this.m_sprPanelLayer.addChildAt(t,i);break;case ee.M_POP:this.m_sprPopLayer.addChildAt(t,i);break;case ee.M_TIP:this.m_sprTipLayer.addChildAt(t,i);break;case ee.M_GUIDE:this.m_sprGuideLayer.addChildAt(t,i);break;case ee.M_TOP:this.m_sprTopLayer.addChildAt(t,i);break}}addToLayer(t,e=ee.M_PANEL){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.addChild(t);break;case ee.M_MAINUI:this.m_sprMainUILayer.addChild(t);break;case ee.M_PANEL:this.m_sprPanelLayer.addChild(t);break;case ee.M_POP:this.m_sprPopLayer.addChild(t);break;case ee.M_TIP:this.m_sprTipLayer.addChild(t);break;case ee.M_GUIDE:this.m_sprGuideLayer.addChild(t);break;case ee.M_TOP:this.m_sprTopLayer.addChild(t);break}}removeFromLayer(t,e){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.removeChild(t);break;case ee.M_MAINUI:this.m_sprMainUILayer.removeChild(t);break;case ee.M_PANEL:this.m_sprPanelLayer.removeChild(t);break;case ee.M_POP:this.m_sprPopLayer.removeChild(t);break;case ee.M_GUIDE:this.m_sprGuideLayer.removeChild(t);break;case ee.M_TOP:this.m_sprTopLayer.removeChild(t);break}}clearLayer(t){switch(t){case ee.M_SCENE:this.m_sprSceneLayer.removeChildren();break;case ee.M_MAINUI:this.m_sprSceneLayer.removeChildren();break;case ee.M_PANEL:this.m_sprSceneLayer.removeChildren();break;case ee.M_POP:this.m_sprSceneLayer.removeChildren();break;case ee.M_TOP:this.m_sprSceneLayer.removeChildren();break}}get stageWidth(){let t;return t=Laya.stage.width,t}get stageHeight(){let t;return t=Laya.stage.height,t}setPosition(t,e,i=0,n=0,r=!1,o=!1){let s=Laya.stage.width,l=Laya.stage.height;switch(this.m_iStageWidth=s,this.m_iStageHeight=l,e){case ee.UP:t.x=r?s/2:(s-t.width*t.scaleX)/2,t.y=0;break;case ee.DOWN:t.x=r?s/2:(s-t.width*t.scaleX)/2,t.y=l-t.height*t.scaleY;break;case ee.LEFT:t.x=0,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.RIGHT:t.x=s-t.width*t.scaleX,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.LEFTUP:t.x=0,t.y=0;break;case ee.RIGHTUP:t.x=s-t.width*t.scaleX,t.y=0;break;case ee.LEFTDOWN:t.x=0,t.y=l-t.height*t.scaleY;break;case ee.RIGHTDOWN:t.x=s-t.width*t.scaleX,t.y=l-t.height*t.scaleY;break;case ee.CENTERLEFT:t.x=s/2-t.width*t.scaleX,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.CENTERRIGHT:t.x=s/2,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.CENTER:t.x=r?s/2:(s-t.width*t.scaleX)/2,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;default:break}t.x+=i,t.y+=n}setLayer(t,e,i){if(!t||!e||t.parent!=e.parent)return;let n=t.parent.getChildIndex(t),r=e.parent.getChildIndex(e);i?n>r&&(t.parent.setChildIndex(t,r),t.parent.setChildIndex(e,n)):n<r&&(t.parent.setChildIndex(t,r),t.parent.setChildIndex(e,n))}};ee.M_SCENE=1,ee.M_MAINUI=2,ee.M_PANEL=3,ee.M_POP=4,ee.M_TIP=5,ee.M_GUIDE=7,ee.M_TOP=6,ee.UP=1,ee.DOWN=16,ee.LEFT=256,ee.RIGHT=4096,ee.CENTER=65536,ee.LEFTUP=ee.LEFT|ee.UP,ee.RIGHTUP=ee.RIGHT|ee.UP,ee.LEFTDOWN=ee.LEFT|ee.DOWN,ee.RIGHTDOWN=ee.RIGHT|ee.DOWN,ee.CENTERLEFT=ee.CENTER|ee.LEFT,ee.CENTERRIGHT=ee.CENTER|ee.RIGHT,ee.MOVE=-1;var B=ee;var ia=class extends Le{constructor(){super()}};var Wn=class{constructor(t,e){this._valuesObject={};this.sheetObject=t,this.BaseItemClass=e}get keys(){if(this._keys)return this._keys;this._keys=[];let t;for(let e in this.sheetObject)!e||e==""||this._keys.push(e);return this._keys}get values(){if(this._values)return this._values;this._values=[];let t;for(let e in this.sheetObject)this._valuesObject[e]?t=this._valuesObject[e]:(t=new this.BaseItemClass,t.init(this.sheetObject[e]),this._valuesObject[e]=t),this._values.push(t);return this._values}get(t){return this._valuesObject[t]?this._valuesObject[t]:this.sheetObject[t]}get1(t){if(this._valuesObject[t])return this._valuesObject[t];let e=this.sheetObject[t];if(e)return e;let i;this.BaseItemClass&&(i=new this.BaseItemClass,i.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig()  class : "+this.BaseItemClass),i.init(e)),this._valuesObject;let n=i||e;return this._valuesObject[t]=n,n}indexOf(t){let e=this._keys.indexOf(t);return e>=0?e:(t=t instanceof String?Number(t):t instanceof Number?t.toString():t,this._keys.indexOf(t))}clear(){this.sheetObject=null}};var Kn=class a{constructor(){}static get instance(){return a._instance||(a._instance=new a),a._instance}initSpotCfgData(){if(this.spotDic==null){let t=k.instance.getResByURL("config/spot.json");this.spotDic=new Wn(t.data,ia)}}getSpotById(t){return this.initSpotCfgData(),this.spotDic.get(t)}get getSpotDic(){return this.initSpotCfgData(),this.spotDic}};var xe=class a{constructor(){}registerCommCallBack(t=null){Laya.LayaEnv.isConch}static get instance(){return a._instance||(a._instance=new a),a._instance}sendCustumEvent(t,e=null,i=null){let n;if(i?n=i:n=Kn.instance.getSpotById(t),!n||!n.Event)return;let r,o=new Object;o.id=n.ID,o.eventKey=n.Event,o.type=n.type,this.sendWebEvent(o)}sendWebEvent(t){}dispose(){}reload(){Laya.Browser.window.location.reload()}testEvnt(){}};var he=class a{constructor(){this._isLoading=!1}static get instance(){return a._instance||(a._instance=new a),a._instance}get isLoading(){return this._isLoading}init(){if(!this.txtLoadingView){var t=Laya.loader.getRes("scenes/notice/TxtLoadingView.lh");this.txtLoadingView=t.create()}}showLoading(t=!1){if(console.log("showLoading..."+t),this.txtLoadingView)t?(this._isLoading=!0,this.showMaskLoading(),this.showLazyLoading(),this._isLoading=!1):(this._isLoading=!0,this.showMaskLoading(),Laya.timer.once(3e3,this,this.showLazyLoading)),this.txtLoadingView.m_txtLabel&&(this.txtLoadingView.m_txtLabel.visible=!1);else return}showLoadingByInfo(t=""){console.log("showLoadingByInfo..."+t),this._isLoading=!0,this.showMaskLoading(),this.showLazyLoading(),this.txtLoadingView.m_txtLabel.text=t,this.txtLoadingView.m_txtLabel.visible=!0}showMaskLoading(){this._isLoading&&(this.txtLoadingView.backLayer.name="backLayer",this.txtLoadingView.backLayer.mouseEnabled=!0,this.txtLoadingView.backLayer.mouseThrough=!1,this.txtLoadingView.backLayer.visible=!0)}showLazyLoading(){this._isLoading&&(console.log("showLazyLoading..."),this.txtLoadingView.visible=!0,Laya.stage.addChild(this.txtLoadingView),this.txtLoadingView.x=(Laya.stage.width-this.txtLoadingView.width)/2,this.txtLoadingView.y=(Laya.stage.height-this.txtLoadingView.height)/2),Laya.timer.clear(this,this.showLazyLoading)}hideLoading(){if(console.log("hideLoading..."),this._isLoading=!1,this.txtLoadingView)this.txtLoadingView.removeSelf();else return}dispose(){this.txtLoadingView&&(this.txtLoadingView.destroy(),this.txtLoadingView.removeSelf(),this.txtLoadingView=null),this.txtLoadingView.backLayer&&(this.txtLoadingView.backLayer.destroy(),this.txtLoadingView.backLayer.removeSelf(),this.txtLoadingView.backLayer=null)}};var Te=class Te{constructor(){this._m_bPlayMusic=!0;this._m_bPlayeSound=!0}static get instance(){return Te._instance||(Te._instance=new Te),Te._instance}get m_bPlayMusic(){return this._m_bPlayMusic}set m_bPlayMusic(t){this._m_bPlayMusic=t,t?this.m_strMusicURL!=null&&this.playMusicByURL(this.m_strMusicURL):this.musicChannel&&this.musicChannel.stop()}init(){Laya.SoundManager.autoStopMusic=!1;let t=Laya.LocalStorage.getItem(Te.COOKIE_CF_MUSIC);t!=null&&t!=""&&(Te.instance.m_bPlayMusic=parseInt(t)==1);let e=Laya.LocalStorage.getItem(Te.COOKIE_CF_SOUND);e!=null&&e!=""&&(Te.instance.m_bPlayeSound=parseInt(e)==1)}get m_bPlayeSound(){return this._m_bPlayeSound}set m_bPlayeSound(t){this._m_bPlayeSound=t}playMusicByURL(t){this.m_bPlayMusic&&(this.m_strMusicURL,this.m_strMusicURL==t&&this.musicChannel,this.m_strMusicURL=t,Laya.SoundManager.stopMusic(),this.musicChannel=Laya.SoundManager.playMusic(t,0,new Laya.Handler(this,this.onComplete)))}playMusicByName(t,e=".ogg"){let i=k.instance.getSoundURL(t,e);this.playMusicByURL(i)}playSound(t,e=1){this.m_bPlayeSound&&Laya.SoundManager.playSound(t,e,new Laya.Handler(this,this.onComplete))}playSoundByName(t,e=1){let i=k.instance.getSoundURLogg(t);this.playSound(i,e)}stopSoundByName(t){let e=k.instance.getSoundURLogg(t);Laya.SoundManager.stopSound(e)}switchMusic(t){let e=t?1:0;Te.instance.m_bPlayMusic=t,Laya.LocalStorage.setItem(Te.COOKIE_CF_MUSIC,e.toString())}switchSound(t){let e=t?1:0;Te.instance.m_bPlayeSound=t,Laya.LocalStorage.setItem(Te.COOKIE_CF_SOUND,e.toString())}onComplete(){}};Te.COOKIE_CF_MUSIC="COOKIE_CF_MUSIC",Te.COOKIE_CF_SOUND="COOKIE_CF_SOUND",Te.soundName_bg="bgm",Te.soundName1="ui01.ogg",Te.soundName2="ui02.ogg",Te.soundName3="ui03.ogg",Te.soundName4="hit.wav",Te.soundName30_1="ui30_1.ogg",Te.soundName28_1_star="ui28_1_star.ogg",Te.soundName28_2_star="ui28_2_stars.ogg",Te.soundName28_3_star="ui28_3_stars.ogg",Te.soundName28_bar="ui28_bar_rise.ogg",Te.soundName32="ui32.ogg",Te.soundName33="ui33.ogg",Te.soundName34="ui34.ogg",Te.soundName35="ui35.ogg",Te.soundName36="ui36.ogg",Te.soundName37="ui37.ogg",Te.soundName38="ui38.ogg",Te.soundName39="ui39.ogg",Te.soundName41="ui41.ogg",Te.soundName42="ui42.ogg",Te.soundName43="ui43.ogg",Te.soundName44="ui44.ogg",Te.soundName45="ui45.ogg",Te.soundNameUi40_1="ui40_1.ogg",Te.soundNameUi40_2="ui40_2.ogg",Te.soundNameUi40_3="ui40_3.ogg",Te.soundNameDressing="dressing_score_sfx.ogg",Te.soundNameAnswer="answer_bonus_points.ogg";var Pe=Te;var h=class{};h.FindView="FindView",h.FindEndView="FindEndView",h.FindAskDialog="FindAskDialog",h.FindRankUpDialog="FindRankUpDialog",h.QuickTipDialog="QuickTipDialog",h.QuickEndView="QuickEndView",h.QuickShareView="QuickShareView",h.QuickOperatorDialog="QuickOperatorDialog",h.MainView="MainView",h.RoleDialog="RoleDialog",h.RemGetDialog="RemGetDialog",h.QuickRechargeDialog="QuickRechargeDialog",h.CreateNameDialog="CreateNameDialog",h.DailyTaskDialog="DailyTaskDialog",h.ActivityTaskDialog="ActivityTaskDialog",h.ShareDialog="ShareDialog",h.InvitationCenterDialog="InvitationCenterDialog",h.DailyTaskDrawDialog="DailyTaskDrawDialog",h.GuideView="GuideView",h.GuideDialogView="GuideDialogView",h.ShareView="ShareView",h.MainTopView="MainTopView",h.GetMoreDialog="GetMoreDialog",h.ShopView="ShopView",h.ItemGetDialog="ItemGetDialog",h.RewardGetDialog="RewardGetDialog",h.GetTitleDialog="GetTitleDialog",h.NewFunUnLockDialog="NewFunUnLockDialog",h.DialogView="DialogView",h.MallView="MallView",h.MallCardView="MallCardView",h.MallBuyDialog="MallBuyDialog",h.FittingUiView="FittingUiView",h.TaskDialog="TaskDialog",h.CommentDialog="CommentDialog",h.PotraitChangDialog="PotraitChangDialog",h.ClothespressView="ClothespressView",h.ItemSellDialog="ItemSellDialog",h.ItemInfoDialog="ItemInfoDialog",h.OnlineAward="OnlineAward",h.MaillView="MailView",h.MailSendView="MailSendView",h.GameSettingDialog="GameSettingDialog",h.GamesettingSoundView="GamesettingSoundView",h.GameSettingLanguageDialog="GameSettingLanguageDialog",h.GameSettingVersionDialog="GameSettingVersionDialog",h.FriendMainView="FriendMainView",h.FriendSearchView="FriendSearchView",h.FriendGetRewardDialog="FriendGetRewardDialog",h.FriendRewardDialog="FriendRewardDialog",h.PreLoadingView="PreLoadingView",h.HelpDialog="HelpDialog",h.RechargeDialog="RechargeDialog",h.WalletChooseHeroDialog="WalletChooseHeroDialog",h.EmployInfoDialog="EmployInfoDialog",h.WalletChoosePropsDialog="WalletChoosePropsDialog",h.FirstRechargeDialog="FirstRechargeDialog",h.FirstWeekRechargeView="FirstWeekRechargeView",h.ClientErrView="ClientErrView",h.RoleUpgradeView="RoleUpgradeView",h.ActiveRechargeView="ActiveRechargeView",h.SmallSaleView="SmallSaleView",h.RechargeSelectDialog="RechargeSelectDialog",h.FBLikeView="FBLikeView",h.TurnSuitPreView="TurnSuitPreView",h.SlotMachineView="SlotMachineView",h.SlotMachineRewardPreDialog="SlotMachineRewardPreDialog",h.SlotMachineResultDialog="SlotMachineResultDialog",h.GashaponView="GashaponView",h.GashaponRewardView="GashaponRewardView",h.ActivityRankRewardView="ActivityRankRewardView",h.AddRechargeView="AddRechargeView",h.CupMatchStartDialog="CupMatchStartDialog",h.CupMatchEndDialog="CupMatchEndDialog",h.CreateLoginView="CreateLoginView",h.SelectHeadDialog="SelectHeadDialog",h.RoleInfoDialog="RoleInfoDialog",h.SelectHeroDialog="SelectHeroDialog",h.CreateSubWalletDialog="CreateSubWalletDialog",h.FriendMemberDialog="FriendMemberDialog",h.FriendMemberMoreDialog="FriendMemberMoreDialog",h.FriendAddDialog="FriendAddDialog",h.FriendApplyBackDialog="FriendApplyBackDialog",h.FriendApplyDialog="FriendApplyDialog",h.WalletDialog="WalletDialog",h.WalletTransferDialog="WalletTransferDialog",h.UnionApplyDialog="UnionApplyDialog",h.GuildEntranceView="GuildEntranceView",h.UnionApplyDialogView="UnionApplyDialogView",h.UnionApplyMemberDialog="UnionApplyMemberDialog",h.CreateNoticeDialog="CreateNoticeDialog",h.UnionNoticeView="UnionNoticeView",h.GuildInfoDialog="GuildInfoDialog",h.CreateUnionDialog="CreateUnionDialog",h.UnionInfoView="UnionInfoView",h.UnionEarningView="UnionEarningView",h.UnionRevenueDetailDialog="UnionRevenueDetailDialog",h.UnionSetRevenueDialog="UnionSetRevenueDialog",h.UnionBattleRecordDialog="UnionBattleRecordDialog",h.UnionRevenueRecordDialog="UnionRevenueRecordDialog",h.RankUnionView="RankUnionView",h.UnionWarView="UnionWarView",h.UnionWarTipDialog="UnionWarTipDialog",h.UnionWarSuccessDialog="UnionWarSuccessDialog",h.UnionWarFailDialog="UnionWarFailDialog",h.GamesettingView="GamesettingView",h.GameSettingGameAccountView="GameSettingGameAccountView",h.GuildMessageView="GuildMessageView",h.GuildMessageEditorView="GuildMessageEditorView",h.UnionMemberView="UnionMemberView",h.UnionListView="UnionListView",h.CreateSubUnionView="CreateSubUnionView",h.ChangeUnionIconDialog="ChangeUnionIconDialog",h.MySubUnionView="MySubUnionView",h.UnionMemberApplyView="UnionMemberApplyView",h.HeroTransferView="HeroTransferView",h.GuildChiefPrivilegeView="GuildChiefPrivilegeView",h.GuildDonationView="GuildDonationView",h.NoticeDialog="NoticeDialog",h.ChampDetailDialog="ChampDetailDialog",h.ChampRecordDialog="ChampRecordDialog",h.LoadDialog="LoadDialog",h.ChangeHeadDialog="ChangeHeadDialog",h.CreateRoomDialog="CreateRoomDialog",h.EnterRoomView="EnterRoomView",h.MatchEndRankView="MatchEndRankView",h.MatchReadyView="MatchReadyView",h.MatchEndView="MatchEndView",h.HeroGetDialog="HeroGetDialog",h.InputPwdDialog="InputPwdDialog",h.MailDialog="MailDialog",h.UnionAttrView="UnionAttrView",h.UnionAttrLvUpDialog="UnionAttrLvUpDialog",h.UnionAttributeDetailsDialog="UnionAttributeDetailsDialog",h.NoServerView="NoServerView",h.UnionMemberMoreDialog="UnionMemberMoreDialog",h.HeroUpgradeDialog="HeroUpgradeDialog",h.HeroDetailDialog="HeroDetailDialog",h.SkillTipDialog="SkillTipDialog",h.TransferRecordDialog="TransferRecordDialog",h.AFKView="AFKView",h.AFKBagDialog="AFKBagDialog",h.AFKDropDetailDialog="AFKDropDetailDialog",h.AFKMapView="AFKMapView",h.AFKSelectLevelDialog="AFKSelectLevelDialog",h.Knapsack="Knapsack",h.KnapsackTipDialog="KnapsackTipDialog",h.HeroFormationDialog="HeroFormationDialog",h.SignInDialog="SignInDialog",h.InviteRewardDialog="InviteRewardDialog",h.ChallengLoseDialog="ChallengLoseDialog",h.ChallengWinDialog="ChallengWinDialog",h.ChallengBossDialog="ChallengBossDialog",h.ThirbleDropDialog="ThirbleDropDialog",h.LevelDropDialog="LevelDropDialog",h.UseCardDialog="UseCardDialog",h.ArenaView="ArenaView",h.ArenaLoseDialog="ArenaLoseDialog",h.ArenaBattleDialog="ArenaBattleDialog",h.ArenaWinDialog="ArenaWinDialog",h.ArenaWarNotesView="ArenaWarNotesView",h.ArenaRuleDialog="ArenaRuleDialog",h.EquipSelectDialog="EquipSelectDialog",h.EquipDetailDialog="EquipDetailDialog",h.HireDetailDialog="HireDetailDialog",h.ProxyDetailDialog="ProxyDetailDialog",h.WithDrawRecordDialog="WithDrawRecordDialog",h.RentalRecordDialog="RentalRecordDialog",h.PrivateChatDialog="PrivateChatDialog";var y=class{};y.MOUSE_HOLDON="MOUSE_HOLDON",y.EVENT_OPEN_MODULE="EVENT_OPEN_MODULE",y.EVENT_MODULE_ADDED="EVENT_MODULE_ADDED",y.EVENT_CLOSE_MODULE="EVENT_CLOSE_MODULE",y.EVENT_CHECK_REMAIN="EVENT_CHECK_REMAIN",y.EVENT_LOADED_COMPLETE="EVENT_LOAD_COMPLETE",y.EVENT_LOADED_SCENE_BG_COM="EVENT_LOADED_SCENE_BG_COM",y.EVENT_LOAD_SKIN_COMPLETE="EVENT_LOAD_SKIN_COMPLETE",y.EVENT_LOAD_HEAD_SKIN_COMPLETE="EVENT_LOAD_HEAD_SKIN_COMPLETE",y.EVENT_LOADING_SUC="EVENT_LOADING_SUC",y.EVENT_BACK_TO_LOGIN="EVENT_BACK_TO_LOGIN",y.EVENT_LOGIN_GAME_END="EVENT_LOGIN_GAME_END",y.EVENT_ENTER_MAIN="EVENT_ENTER_MAIN",y.EVENT_CHANGE_HEAD="EVENT_CHANGE_HEAD",y.EVENT_MODIFY_HEAD="EVENT_MODIFY_HEAD",y.EVENT_ITEM_UPDATE="EVENT_ITEM_UPDATE",y.EVENT_ROLE_UPDATE="EVENT_ROLE_UPDATE",y.STAGE_ON_BLUR="STAGE_ON_BLUR",y.STAGE_ON_FOCUS="STAGE_ON_FOCUS",y.ACCOUNTVO_UPDATE="ACCOUNTVO_UPDATE",y.EVENT_WAIT_PLAYERINFO="EVENT_WAIT_PLAYERINFO",y.EVENT_END_HEROBUY="EVENT_END_HEROBUY",y.EVENT_END_HEROTRANSFER="EVENT_END_HEROTRANSFER",y.EVENT_REFRESH_HEROTRANSFER="EVENT_REFRESH_HEROTRANSFER",y.EVENT_CHECK_ICON_SELECT="EVENT_CHECK_ICON_SELECT",y.EVENT_CHECK_NODE_SELECT="EVENT_CHECK_NODE_SELECT",y.PACKAGE_UPDATE_ITEM="PACKAGE_UPDATE_ITEM",y.IMPROVE_SUCESS_EVENT="IMPROVE_SUCESS_EVENT",y.CHANG_POTRAIT="CHANG_POTRAIT",y.ROLE_INFO_CHANGE="ROLE_INFO_CHANGE",y.UPDATE_ASSETS="UPDATE_ASSETS",y.REFRESH_MAIN_TASK="REFRESH_MAIN_TASK",y.RECIVE_SUCESS_SERVICE="RECIVE_SUCESS_SERVICE",y.SCENE_ROLE_COMPELTE="SCENE_ROLE_COMPELTE",y.FITTING_CLOTH_BTN="FITTING_CLOTH_BTN",y.STORE_CLICKBG_EVENT="STORE_CLICKBG_EVENT",y.CLOSE_BG_VIEW="CLOSE_BG_VIEW",y.EVENT_UPDATE_ONLINE="EVENT_UPDATE_ONLINE",y.VIP_INFO_CHANGE="VIP_INFO_CHANGE",y.EVENT_FUNCTION_OPEN_UPDATE="EVENT_FUNCTION_OPEN_UPDATE",y.EVENT_ADD_ACTIVITY="EVENT_ADD_ACTIVITY",y.EVENT_REMOVE_ACTIVITY="EVENT_REMOVE_ACTIVITY",y.UPDATE_CHAO_PIAO="UPDATE_CHAO_PIAO",y.UPDATE_EXCHANGE_INFO="UPDATE_EXCHANGE_INFO",y.UPDATE_RED_STATE_EVENT="UPDATE_RED_STATE_EVENT",y.SYSTEM_OPEN_TIME_INITED="SYSTEM_OPEN_TIME_INITED",y.EVENT_OPEN_SHARE="EVENT_OPEN_SHARE",y.CHANGE_SCENE_BASE_ROLE_LAYER="CHANGE_SCENE_BASE_ROLE_LAYER",y.EVENT_CLICK_NUM="EVENT_CLICK_NUM",y.EVENT_HERO_DRAW_BACK="EVENT_HERO_DRAW_BACK",y.EVENT_ENTER_MATCH_ROOM="EVENT_ENTER_MATCH_ROOM",y.EVENT_UPDATE_MATCH_ROOM="EVENT_UPDATE_MATCH_ROOM",y.UPDATE_KILL_NUM="UPDATE_KILL_NUM",y.EVENT_RESTORE_DATA="EVENT_RESTORE_DATA",y.EVENT_FirstBlood="EVENT_FirstBlood",y.EVENT_MutiKill="EVENT_MutiKill",y.EVENT_GameScene_Gray="EVENT_GameScene_Gray",y.EVENT_Game_Delay="EVENT_Game_Delay",y.EVENT_UPDATE_GLOBAL_COOL="EVENT_UPDATE_GLOBAL_COOL",y.EVENT_SUB_GUILD_UPDATE="EVENT_SUB_GUILD_UPDATE",y.EVENT_UNION_APPLY_MEMBER_UPDATE="EVENT_UNION_APPLY_MEMBER_UPDATE",y.EVENT_WELFARE_CLAIM="EVENT_WELFARE_CLAIM",y.EVENT_RECHARGE_GET="EVENT_RECHARGE_GET",y.CHANGE_WALLET_HERO="CHANGE_WALLET_HERO",y.CHANGE_ASSET_CHAIN="CHANGE_ASSET_CHAIN",y.CHANGE_WALLET_PROP="CHANGE_WALLET_PROP",y.CREATE_SUB_WALLET_SUCCESS="CREATE_SUB_WALLET_SUCCESS",y.REFRESH_ALL_WITHDRAW_DATA="REFRESH_ALL_WITHDRAW_DATA",y.CHANGE_FRIEND_APPLY_LIST="CHANGE_FRIEND_APPLY_LIST",y.CHANGE_FRIEND_LIST="CHANGE_FRIEND_LIST",y.REFRSH_RED="REFRSH_RED",y.REFRSH_APPLY_FRIEND_LIST="REFRSH_APPLY_FRIEND_LIST";var g=class a extends Laya.EventDispatcher{static get intance(){return a._instance||(a._instance=new a),a._instance}};var Yn=class extends Laya.Script{constructor(){super();this.m_ioffsetX=0;this.m_ioffsetY=0}onAdded(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.CENTER,this.m_canTouch_all=!1,this.selfMaskAlpha=.8,this.m_arrMapEvent=[],this.canClickMask=!0,this.maskLayer=new Laya.Sprite,this.useShowAnimation=!0,this.useHideAnimation=!0,this.isAutoRealseRes=!0,this.m_strSound=Pe.soundName3}onClickMask(e){this.canClickMask&&this.maskClose()}maskClose(){this.close()}onStageResize(){}onEnable(){this._view=this.owner,this._view.addChild(this.maskLayer),this.createUI(),this.createUIEnd(),this.initializeLater()}createUI(){}createUIEnd(){}initializeLater(){this._addEvent(),this.initData(),this.useShowAnimation?(this._view.visible=!1,this.showAnimationEnd=!1,Laya.timer.frameOnce(5,this,this.popTimeOut,[this._view])):this.showAnimationEnd=!0}popTimeOut(e){Laya.timer.clear(this,this.popTimeOut),e.scale(.5,.5),e.visible=!0,Laya.Tween.to(e,{scaleX:1,scaleY:1,ease:Laya.Ease.backOut},300,null,Laya.Handler.create(this,this.onShowAnimationEnd),2),Pe.instance.playSoundByName(this.m_strSound),this._view.event(Laya.Event.OPEN)}onShowAnimationEnd(){this.showAnimationEnd=!0}_addEvent(){this.maskLayer.on(Laya.Event.CLICK,this,this.onClickMask),Laya.stage.on(Laya.Event.RESIZE,this,this.onStageResize),this.btn_com_back&&this.btn_com_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_com_help&&this.btn_com_help.on(Laya.Event.CLICK,this,this.onHelp),this.addEvent()}addEvent(){}initData(){}_removeEvent(){this.maskLayer.offAll(),Laya.stage.off(Laya.Event.RESIZE,this,this.onStageResize),this.removeEvent()}removeEvent(){}addMapEvent(e,i,n,r,o=null){e.on(i,n,r,o),this.m_arrMapEvent.push(e)}removeAllMapEvent(){if(this.m_arrMapEvent){for(let e=0;e<this.m_arrMapEvent.length;e++)this.m_arrMapEvent[e].offAll();this.m_arrMapEvent.splice(0,this.m_arrMapEvent.length)}}dispose(){if(this.newRoleSpr){for(;this.newRoleSpr.numChildren>0;)this.newRoleSpr.removeChildAt(0);this.newRoleSpr=null}this.isDispose=!0,H.intance.removeViewFromModuleManger(this),this.m_strName=null,this.m_strSound=null,this._removeEvent(),this.removeAllMapEvent(),Laya.Tween.clearAll(this._view),this.m_arrMapEvent=null,this.btn_com_back&&this.btn_com_back.offAll(),this.btn_com_help&&this.btn_com_help.offAll(),this.maskLayer&&(Laya.timer.clearAll(this.maskLayer),Laya.Tween.clearAll(this.maskLayer),this.maskLayer.offAll(),this.maskLayer.graphics.destroy(),this.maskLayer.removeSelf(),this.maskLayer.destroy(!0)),this.isAutoRealseRes&&k.instance.clearModuleUrl(this.m_strName),this._view&&(Laya.timer.clearAll(this._view),Laya.Tween.clearAll(this._view),this._view.offAll(),this._view.graphics.destroy(),this._view.removeSelf(),this._view.destroy(!0),this._view=null),Laya.timer.clearAll(this),Laya.Tween.clearAll(this),g.intance.event(y.EVENT_CLOSE_MODULE)}sendData(e,i=null){i==null&&(i=[])}close(e=null){this.useHideAnimation&&this._view?Laya.Tween.to(this._view,{scaleX:.5,scaleY:.5,ease:Laya.Ease.backIn},200,null,Laya.Handler.create(this,this.dispose,null),2):this.dispose()}static closeAll(){H.intance.closeAll()}backToPreScene(){let e=fe.intance.getPreSceneData();fe.intance.setCurrentScene(e[0],e[1],e[2],e[3],!1)}get btn_com_back(){return this._view?this._view.getChildByName("btn_com_back"):null}get btn_com_help(){return this._view?this._view.getChildByName("btn_com_help"):null}onHelp(){this.m_helpId&&H.intance.openModule(h.HelpDialog,this.m_helpId)}onBack(){this.close()}};var H=class a extends Laya.DialogManager{constructor(){super();this.views=new ne;this.m_arrLoadingArr=[];if(a._instance)throw new Error("LayerManager是单例,不可new.");a._instance=this,Laya.Dialog.manager=this}static get intance(){return a._instance||(a._instance=new a),a._instance}openModule(e,i=null){g.intance.event(y.EVENT_OPEN_MODULE,[e,i])}hasOpenView(e){return this.views.get(e)!=null}getOpenView(e){return this.views.get(e)}disposeView(e){if(this.getOpenView(e)){let i=this.getOpenView(e);if(i instanceof Array)for(let n=0;n<i.length;n++)i[n].close();else i.close()}}init(){g.intance.on(y.EVENT_OPEN_MODULE,this,this.onModulePanel),g.intance.on(y.EVENT_CLOSE_MODULE,this,this.disposeView)}initMainView(){}onModulePanel(e,i=null){console.log("ModuleManager.onModulePanel moudleName:"+e),this.m_arrLoadingArr.indexOf(e)==-1&&(this.getOpenView(e)||(he.instance.showLoading(!1),this.m_arrLoadingArr.push(e),k.instance.loadModuleUrl(e,Laya.Handler.create(this,this.onLoaded,[e,i]))))}onLoaded(e,i=null){let n=this.m_arrLoadingArr.indexOf(e);n!=-1&&this.m_arrLoadingArr.splice(n,1);let r;var o=k.instance.m_objModuleViews[e];Laya.loader.load(o).then(s=>{if(r=s.create(),i&&r.setOpenData(i),r.m_strName=e,r instanceof Laya.Box)B.instence.addToLayer(r,r.m_iLayerType),B.instence.setPosition(r,r.m_iPositionType,r.m_ioffsetX,r.m_ioffsetY),this.addViewToModuleManger(r);else if(r instanceof Laya.Dialog){let l=r;l.m_iLayerType==B.M_POP?(l.isModal=!0,l.isShowEffect=!0,this.open(l,!1,!0)):(l.isShowEffect=!1,this.open(l)),this.addViewToModuleManger(l)}r&&g.intance.event(y.EVENT_MODULE_ADDED,r),r.hideLoadingBySelf||he.instance.hideLoading()})}addViewToModuleManger(e){let i=e.m_strName;this.views.get(i)?this.views.get(i)instanceof Array?this.views.get(i).push(e):this.views.set(i,[this.views.get(i),e]):this.views.set(i,e),this.on(Laya.Event.CLOSE,this,this.removeViewFromModuleManger)}removeViewFromModuleManger(e){if(!e||!this.views)return;let i=e.m_strName;console.log("removeViewFromModuleManger viewName: "+i),e.off(Laya.Event.CLOSE,this,this.removeViewFromModuleManger);let n=this.views.get(i);if(n instanceof Array){let r=n.indexOf(e);r!=-1&&(n.splice(r,1),n.length==0&&this.views.remove(i))}else this.views.remove(i)}closeAll(){let e=[];for(let i of this.views.values)if(i instanceof Array)for(let n=0;n<i.length;n++){let r=i[n];r instanceof Yn&&e.push(r)}else i instanceof Yn&&e.push(i);for(let i=0;i<e.length;i++)e[i].dispose();e=[],super.closeAll()}doClose(e){super.doClose(e),this.event(Laya.Event.CLOSE,e)}};var bo=class a{constructor(){this._mapUrl="";this._mapWidth=0;this._mapHeight=0;this._gridWidth=0;this._gridHeight=0;this._xPics=0;this._yPics=0;this._fuzzyName=""}static get instance(){return a._instance||(a._instance=new a),a._instance}loadScene(t,e,i,n,r,o,s){this._fuzzyName!=""&&this._fuzzyName!=o&&this.dispose(),this._mapWidth=t,this._mapHeight=e,this._gridWidth=i,this._gridHeight=n,this._fuzzySprite=r,this._xPics=Math.floor(this._mapWidth/i),this._yPics=Math.floor(this._mapHeight/n),this._fuzzyName=o,this._fuzzyCallBack=s;let l=k.instance.setResURL("scene/subScene/test1/"+o+".json");Laya.loader.load([{url:l,type:Laya.Loader.ATLAS}],Laya.Handler.create(this,this.loadSceneComplete),Laya.Handler.create(this,this.loadProcess,null,!1),null,0,!0,null,!0)}loadProcess(){}loadSceneComplete(){let t=Laya.Loader.getAtlas(k.instance.setResURL("scene/subScene/test1/"+this._fuzzyName+".json"));if(this._fuzzySprite){this._fuzzySprite.graphics.clear();let e=0,i=new Laya.Sprite;i.name="mapSprite",this._fuzzySprite.addChildAt(i,0);for(let n=0;n<this._yPics;n++)for(let r=0;r<this._xPics;r++){let o=Laya.loader.getRes(t[e]),s=new Laya.Image;i.addChild(s),s.texture=o,s.size(o.width,o.height),s.pos(r*this._gridWidth,n*this._gridHeight),e++}}this._fuzzyCallBack!=null&&this._fuzzyCallBack.run()}dispose(){this._fuzzyCallBack=null,this._fuzzyName&&this._fuzzyName!=""&&Laya.loader.clearRes(k.instance.setResURL("atlas/"+this._fuzzyName+".json"))}};var $=class{};$.M_SCENE_MAIN="M_SCENE_MAIN",$.M_SCENE_SHOP="M_SCENE_SHOP",$.M_SCENE_AIRDROP="M_SCENE_AIRDROP",$.M_SCENE_HERO="M_SCENE_HERO",$.M_SCENE_PRE_LOAD="M_SCENE_PRE_LOAD",$.M_SCENE_MATCH_READY="M_SCENE_MATCH_READY",$.M_SCENE_MATCH="M_SCENE_MATCH",$.M_SCENE_AFKBATTLE="M_SCENE_AFKBATTLE",$.M_SCENE_GUILD="M_SCENE_GUILD",$.M_SCENE_RANK="M_SCENE_RANK",$.M_SCENE_SHOLARSHIP="M_SCENE_SHOLARSHIP",$.M_SCENE_GET_MAT="M_SCENE_GET_MAT",$.M_SCENE_OPEN_GAME="M_SCENE_OPEN_GAME",$.M_SCENE_ASSET="M_SCENE_ASSET",$.M_SCENE_DIG="M_SCENE_DIG",$.M_SCENE_MAIL="M_SCENE_MAIL",$.M_SCENE_KNAPSACK="M_SCENE_KNAPSACK",$.M_SCENE_UNION="M_SCENE_UNION",$.M_SCENE_MYUNION="M_SCENE_MYUNION",$.M_SCENE_ARENA="M_SCENE_ARENA",$.M_SCENE_FRIEND="M_SCENE_FRIEND";var El=class extends Le{constructor(){super()}};var Tl=class{constructor(t,e,i){this._idKeyName="";this._jsonName="";this._sheetItemCls=null;this._isParse=!1;this._idKeyName=e,this._jsonName=t,this._sheetItemCls=i,this._idToValueMap=new ne,this._items=[]}parseJson(){if(this._isParse)return;let t=k.instance.getResByURL("config/"+this._jsonName+".json");if(!t)throw new Error("无效的配置数据"+this._jsonName);for(let e of t){let i=new this._sheetItemCls;i.beFill(e),this._idToValueMap.set(e[this._idKeyName],i),this._items.push(i),this.addItemProcess(i)}this._isParse=!0}addItemProcess(t){}getItemById(t){return this.excuteIsParse()&&this._idToValueMap.get(t)?this._idToValueMap.get(t):null}getAllItems(){return this.excuteIsParse()?this._items:null}excuteIsParse(){return this._isParse,this._isParse}};var Sl=class extends Tl{constructor(){super("","","");this._itemsTypeMap=null;this._itemsTypeMap=new ne}getCombineKey(e,i,n){return e+n.toString()+i}getItemsByChildType(e,i){let n=this.getCombineKey(e,i,"childType_itemType");if(this._itemsTypeMap.get(n))return this._itemsTypeMap.get(n);this._itemsTypeMap.set(n,[]);let r=U.intance.m_dicItems.values;for(let o of r)o.child_type==e&&o.itm_type==i&&this._itemsTypeMap.get(n).push(o);return this._itemsTypeMap.get(n)}};var Cl=class extends Le{realIcon(){return"https://cdn.bunnyswap.cc/images/items/"+this.icon}get starArr(){if(this._starArr)return this._starArr;if(this._starArr=[],this.max_quality==0)return this._starArr;let e=this.quality/this.max_quality*5;for(let i=1;i<=5;i++)e>=i?this._starArr.push(0):i-e<=.5?this._starArr.push(2):this._starArr.push(1);return this._starArr}};var kl=class extends Le{};var Al=class extends Le{constructor(){super()}};var Dl=class extends Le{constructor(){super()}};var Ml=class extends Le{};var Bl=class extends Le{};var Pl=class extends Le{};var Rl=class extends Le{};var Nl=class extends Le{constructor(){super()}};var Ol=class extends Le{};var Hl=class extends Le{};var Ul=class extends Le{};var Vl=class extends Le{};var Fl=class extends Le{};var zl=class extends Le{};var Gl=class extends Le{};var jl=class extends Le{constructor(){super()}};var ql=class extends Le{};var Wl=class extends Le{constructor(){super(...arguments);this.dT=1e4}async testUrl(){console.log("testUrl Start: "+this.url),this.getUrl()}getUrl(){var e=this.url;let i=new Date().getTime(),n=this,r=new XMLHttpRequest;r.open("GET",e,!0),r.onload=function(){if(r.status>=200&&r.status<300){console.log("Response text:",r.responseText);try{let s=r.responseText;console.log("Parsed JSON:",s);var o=new Date().getTime()-i;n.dT=o,console.log("testUrl End: "+n.url,o)}catch{console.log("Response is not valid JSON")}}else console.error(`Error: ${r.status}`)},r.onerror=function(){console.error("Network error")},r.send()}};var Kl=class extends Le{};var ft=class ft{constructor(){if(ft._instance)throw new Error("SheetDataManager是单例,不可new.");ft._instance=this,this._modelList=new ne}static get intance(){return ft._instance||(ft._instance=new ft),ft._instance}init(){let t=Laya.Browser.now();L.instance.systemOpenModel.parseJson(),this.m_dicMail=this.initConfigObject("mailmessage",ql),this.m_dicItems=this.initConfigObject("item",Cl),this.m_dicShops=new ne,this.m_dicShopMulDic=this.initConfig("shop",["type","icon"],kl,!0,Laya.Handler.create(this,this.onSetShopItem,null,!1)),this.m_dicUnions=this.initConfig("union",["id"],Ol),this.m_dicHeros=this.initConfigObject("hero",Ml),this.m_dicSkills=this.initConfigObject("skill",Pl),this.m_dicBuffs=this.initConfigObject("buff",Rl),this.m_dicArenaDic=new ne,this.m_dicArenaMulDic=this.initConfig("arena",["type","lv","coinType"],Bl,!0,Laya.Handler.create(this,this.onSetArena,null,!1)),this.m_dicArenaTypes=this.initConfig("arenaType",["id"],Kl);var e=this.initConfig("node",["id"],Wl);this.m_dicNodes=this.initNodes(e),this.m_dicWelfareBags=this.initConfig("welfarebag",["id"],Ul),this.m_dicMaps=this.initConfigObject("map",Hl),console.log("-----------------------sheetdata-time1:"+(Laya.Browser.now()-t)),this.m_dicHead=this.initConfig("head",["id"],Dl),this.m_dicIconBadge=this.initConfig("iconBadge",["id"],jl),this.m_dicCountry=this.initConfig("country",["id"],Nl),this.m_dicCurrencyAddress=this.initConfig("currencyAddress",["sn"],Vl),this.m_dicCoinAddress=this.initConfig("coinAddress",["id"],zl),this.m_dicBuyHeroes=this.initConfig("buyHeroes",["id"],Gl),this.m_dicACoin=this.initConfigObject("aCoin",Fl),this.m_dicGenerate=this.initConfigObject("general",El),this.m_dicWorldMapChildTypeItem=new ne,console.log("-----------------------sheetdata-time2:"+(Laya.Browser.now()-t))}getArenaTypesInSub(){var t=[];for(let e of this.m_dicArenaTypes.values)e.inSub==1&&t.push(e);return t}onSetShopItem(t){this.m_dicShops.set(t.id,t)}onSetArena(t){this.m_dicArenaDic.set(t.id,t)}preInit(){this.m_dicScene=this.initConfig("scene",["name"],Al)}getItemModel(){return this.getDataModel(ft.DataType_Items)}getGeneralValueById(t){return this.m_dicGenerate&&this.m_dicGenerate.get(t)?this.m_dicGenerate.get(t).value:0}getSocialShareValueById(t){return this.m_dicSocialShare&&this.m_dicSocialShare.get(t)?this.m_dicSocialShare.get(t).parameter:0}getDataModel(t){if(!this._modelList.get(t))switch(t){case ft.DataType_Items:this._modelList.set(t,new Sl);break}return this._modelList.get(t)}getWelfareBagId(t){var e=this.m_dicWelfareBags;for(let n=0;n<e.values.length;n++){var i=e.values[n];if(t>=i.rankingMin&&t<=i.rankingMax)return i.id}return 0}initNodes(t){var e=new ne;for(let n=0;n<t.values.length;n++){var i=t.values[n];i.open==1&&(Q.vType==2?i.type==2&&(e.set(i.id,i),i.testUrl()):i.type==1&&(e.set(i.id,i),i.testUrl()))}return e}testNodes(){var t=this.m_dicNodes;for(let i=0;i<t.values.length;i++){var e=t.values[i];e.testUrl()}}getNodeByAddr(t){var e=this.m_dicNodes;for(let n=0;n<e.values.length;n++){var i=e.values[n];if(i&&i.socketUrl==t)return i}return null}getCurrencyAddress(t){let i=ft.intance.m_dicCurrencyAddress.values;for(let r=0;r<i.length;r++){var n=i[r];if(Q.vType==n.isSN&&t==n.id)return n.token}}getNetAddress(t){let i=ft.intance.m_dicCoinAddress.values;for(let r=0;r<i.length;r++){var n=i[r];if(Q.vType==n.type&&t==n.tokenid)return n.tokenAddress}}getBuyHeroAddress(t){let i=ft.intance.m_dicBuyHeroes.values;for(let r=0;r<i.length;r++){var n=i[r];if(Q.vType==n.type&&t==n.tokenid)return n.tokenAddress}}getACoin(t,e){let n=ft.intance.m_dicACoin.values;for(let o=0;o<n.length;o++){var r=n[o];if(t==r.token&&e==r.currency)return r}}static getArrFromDictionary(t,e,i){let n=[];for(let r=0;r<t.values.length;r++)t.values[r][e]+""==i+""&&n.push(t.values[r]);return n}getArrFromDicItemByKey(t,e){let i=[];for(let n=0;n<this.m_dicItems.values.length;n++)this.m_dicItems.values[n][t]+""==e+""&&i.push(this.m_dicItems.values[n]);return i}initConfigObject(t,e=null,i=null){let n="config/"+t+".json";console.log("initConfigObject： url: "+n);let r=k.instance.getResByURL(n).data;return new Wn(r,e)}initConfig(t,e,i=null,n=!1,r=null){let o="config/"+t+".json";console.log("initConfig url: "+o);let s=k.instance.getResByURL(o).data,l=new ne;if(!s)return console.log("ERROR : SheetDataManager -->initConfig()  url:"+o),l;let c;for(let u=0;u<s.length;u++){let m=this.compoundKey(s[u],e);i?(c=new i,c.init==null&&console.log("ERROR :BaseItem> SheetDataManager -->initConfig()  url:"+o),c.init(s[u]),l.set(m,c),r&&r.runWith(c)):(l.set(m,s[u]),r&&r.runWith(s[u]))}if(n){let u=k.instance.setResURL(o);Laya.Loader.clearRes(u)}return l}compoundKey(t,e){let i="",n=e.length;if(n>1)for(let r=0;r<n;r++)i+=t[e[r]],r!=n-1&&(i+="_");else i=t[e[0]];return i}getCompoundKey(t){let e="",i=t.length;if(i>1)for(let n=0;n<i;n++)e+=t[n],n!=i-1&&(e+="_");else e=t[0];return e}initConfig2(t,e,i,n=!0){let r="config/"+t+".json",o=k.instance.getResByURL(r).data,s=new ne;if(!o)return console.log("ERROR : SheetDataManager -->initConfig2()  url:"+r),s;let l;for(let c=0;c<o.length;c++){let u=o[c][e],m;s.get(u)==null?(m=[],s.set(u,m)):m=s.get(u),l=new i,l.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig2()  url:"+r),l.init(o[c]),m.push(l)}if(n&&t!="items"){let c=k.instance.setResURL(r);Laya.Loader.clearRes(c)}return s}getItemsBy(t,e){let i=this.getArrFromDicItemByKey("itm_type",t),n=[];for(let r of i)r.child_type.toString()==e.toString()&&n.push(r);return n}getSheetDataByMultiKey(t,e){let i=this.getCompoundKey(e);return t.get(i)}};ft.DataType_Items="SheetDataManager:items",ft.DataType_CatagoryChildType="SheetDataManager:CatagoryChildType",ft.DataType_BeautyPiece="SheetDataManager:beautypiece",ft.DataType_BeautyExp="SheetDataManager:beautyexp",ft.DataType_ClothStyleScore="SheetDataManager:clothStyleScore";var U=ft;var D=class{constructor(){}};D.NO_ALL=-1,D.YES=1,D.NO=2,D.SURE=4,D.CANCEL=8,D.CLOSE=16,D.RETURN_YES=1,D.RETURN_NO=2,D.RETURN_NONE=3,D.BASEALERTVIEW="BaseAlertDialog",D.BUYCONFIRMVIEW="BuyConfirmView",D.EnduranceOutTipView="EnduranceOutTipView",D.GUILDQUITVIEW="GuildQuitView",D.BuyItemConfirmView="BuyItemConfirmView",D.DOWNLOADALERT="DownLoadAlert";var se=class a{constructor(){}static instance(){return a._instance||(a._instance=new a),a._instance}AlertByType(t,e=null,i=0,n=null,r=null,o=!1,s=null){i==0&&(i=D.YES|D.NO),this.onLoaded(i,t,e,n,r,o,s)}onLoaded(t,e,i,n=null,r=null,o=!1,s=null){H.intance.openModule(e,{flag:t,okHandler:n,cancelHandler:r,data:i,destroyDoCancel:o,initHandler:s})}};var ke=class{};ke.TYPE_EXP=3003,ke.TYPE_GOLD=3005,ke.TYPE_TOX=3001,ke.TYPE_USDT=3004,ke.TYPE_BTC=3006,ke.TYPE_ETH=3007,ke.TYPE_BTOX=3011;var we=class we{static getColorText(t,e="#FFFF00"){return'<font color="'+e+'">'+t+"</font>"}static getChildByName(t,e,i="name"){if(t&&t.hasOwnProperty(i)&&t[i]==e)return t;let n=t;if(n){let r=n.numChildren,o;for(let s=0;s<r;++s)if(o=n.getChildAt(s),o instanceof Laya.Sprite&&(o=we.getChildByName(o,e,i)),o&&o.hasOwnProperty(i)&&o[i]==e)return o}return null}static getChildByAttri(t,e){if(t&&t.hasOwnProperty(e)&&t[e])return t[e];let i=t;if(i){let n=i.numChildren,r;for(let o=0;o<n;++o)if(r=i.getChildAt(o),r instanceof Laya.Sprite){if(r=we.getChildByAttri(r,e),r)return r}else if(r&&r.hasOwnProperty(e)&&r[e])return r[e]}return null}static logs(t,e=0,i=!0,n=16777215){if(t=we.GetLogTime+" "+t,i)switch(e){case 0:n=16777215;break;case 1:n=16777215;break;case 2:n=16711680;break;case 3:n=16777215;break;case 4:n=13434777;break;case 5:n=16742399;break}}static get GetLogTime(){let t=new Date;return t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+":"+t.getMilliseconds()}static get GRAY(){return we._GRAY||(we._GRAY=new Laya.ColorFilter([.3,.59,.11,0,0,.3,.59,.11,0,0,.3,.59,.11,0,0,0,0,0,1,0])),we._GRAY}static get GRAY1(){if(!we._GRAY1){let t=[.3086,.16094,.082,0,0,.2086,.26094,.082,0,0,.1086,.36094,.082,0,0,0,0,0,1,0];we._GRAY1=new Laya.ColorFilter(t)}return we._GRAY1}static get GLOW(){return we._GLOW||(we._GLOW=new Laya.GlowFilter("#ffffff",12,0,0)),we._GLOW}static get BLUR(){if(!we._BLUR){let t=new Laya.BlurFilter;t.strength=5,we._BLUR=[t]}return we._BLUR}static share(t=1001,e=2,i=null,n=null,r=0,o=0,s=null){}static get isParseWWhiteUser(){return we._isParseWWhiteUser}static get isWhiteName(){return Q.isWhiteList}static itemListHandler(t,e){let i=t.dataSource,n=i[0],r=i[1],o=2,s=t.skin;s&&(s.indexOf("xinSmall")!=-1?o=1:s.indexOf("xinBig")!=-1&&(o=3));let l;o==1?l="common/common_clip/clip_xinSmall"+r+".png":o==3?l="common/common_clip/clip_xinBig"+r+".png":l="common/common_clip/clip_xinMiddle"+r+".png",t.skin=l,t.dataSource=n}static setStarList(t,e){t.renderHandler=new Laya.Handler(we,we.itemListHandler),t.dataSource=e}static get BLACK(){return we._BLACK||(we._BLACK=new Laya.ColorFilter,we._BLACK.setColor("#000000")),we._BLACK}static get YELLOW(){return we._YELLOW||(we._YELLOW=new Laya.ColorFilter,we._YELLOW.setColor("#ffe64b")),we._YELLOW}static get YELLOW1(){return we._YELLOW1||(we._YELLOW1=new Laya.ColorFilter,we._YELLOW1.setColor("#fee14e")),we._YELLOW1}static get RED1(){return we._RED1||(we._RED1=new Laya.ColorFilter,we._RED1.setColor("#ff4537")),we._RED1}static get BLUE(){return we._BLUE||(we._BLUE=new Laya.ColorFilter,we._BLUE.setColor("#2f72a7")),we._BLUE}static setColor(t="#13e2cf"){let e=new Laya.ColorFilter;return e.setColor(t),e}static heroNotEnought(){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1286),D.YES,null)}static onGetHero(t=-1){fe.intance.setCurrentScene($.M_SCENE_SHOP,[1,t])}static titickNotEnought(t=-1){var e=2,i=U.intance.getSheetDataByMultiKey(U.intance.m_dicShopMulDic,[e,t]);if(i&&i.open==1)se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1060),D.CANCEL,Laya.Handler.create(this,this.onGetTitck,[t]));else{var n=U.intance.m_dicItems.get(t);n?N.instance.notice(d.instance.getLanguage(1282,d.instance.getLanguage(n.name))):me.instance.showErrorWord(18)}}static RemError(){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1124),D.YES,null)}static NoHeroError(t){se.instance().AlertByType(D.BASEALERTVIEW,t,D.YES,null)}static TransactionErrorTip(){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1224),D.YES,null)}static alertNoAll(t){se.instance().AlertByType(D.BASEALERTVIEW,t,D.NO_ALL)}static onGetTitck(t=-1){fe.intance.setCurrentScene($.M_SCENE_SHOP,[2,t])}static moneyNotEnought(t=ke.TYPE_TOX){var e=U.intance.m_dicItems.get(t),i=d.instance.getLanguage(e.name);N.instance.notice(d.instance.getLanguage(1170,i))}static onGetMoney(t){fe.intance.setCurrentScene($.M_SCENE_ASSET,[1,t])}static openSquidGame(){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(6056),D.CANCEL,Laya.Handler.create(this,this.onOpenSquidGame))}static onOpenSquidGame(){window.location.href="https://squidgamefi.io/?invitationCode=2oi"}static otherLogin(){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(6054),D.YES,Laya.Handler.create(this,xe.instance.reload))}static commTipWithYes(t){se.instance().AlertByType(D.BASEALERTVIEW,t,D.YES)}static shakeSprs(t,e=2,i=4,n=32){if(we.isShake)return;we.isShake=!0;let r=t.length,o=[];for(let u=0;u<r;u++){let m=t[u];o.push([m.x,m.y])}let s=[0,0],l=0,c=function(){s[l%2]=l++%4<2?0:i,l>e*4+1&&(Laya.timer.clear(Laya.stage,c),l=0,we.isShake=!1);for(let u=0;u<r;u++){let m=t[u];m.x=s[0]+o[u][0],m.y=s[1]+o[u][1]}};Laya.timer.loop(n,Laya.stage,c)}static shake(t,e=2,i=4,n=32){if(we.isShake)return;we.isShake=!0;let r=new Laya.Point(t.x,t.y),o=[0,0],s=0,l=function(){o[s%2]=s++%4<2?0:i,s>e*4+1&&(Laya.timer.clear(Laya.stage,l),s=0,we.isShake=!1),t.x=o[0]+r.x,t.y=o[1]+r.y};Laya.timer.loop(n,Laya.stage,l)}static checkIsFull(){}static fullScreen(t){var e,i=Laya.Browser.window.location.href;t?(i+="&isFull=1",e={type:"openChildPage",data:{url:i,fullScreen:"1",close:"0"}}):e={type:"closePage",data:""};var n=JSON.stringify(e);Laya.Browser.onIOS?(console.log("onIOS"),typeof webkit<"u"&&(console.log("onIOS1"),webkit.messageHandlers._tw_.postMessage(n),console.log("onIOS2"))):Laya.Browser.onAndroid&&(console.log("onAndriod0"),window&&typeof window._tw_<"u"&&(console.log("onAndriod1 str: "+n),window._tw_.callInto(n),console.log("onAndriod2")))}};we._isParseWWhiteUser=!1,we.isWWhiteUser=!1,we.isShake=!1,we.isFullScreen=!1;var ge=we;var Pi=class Pi{constructor(){this.mainSceneX=10086;this.isCloseAll=!0;this.enterMainSceneTimes=0;this.isTopOpening=!1;this.isBottomOpening=!1;g.intance.on(y.EVENT_MODULE_ADDED,this,this.onAdded)}static get intance(){return Pi._instance||(Pi._instance=new Pi),Pi._instance}init(){}setup(){}onAdded(t){}getPreSceneData(){if(this.m_arrFromScenes.length<1)return[$.M_SCENE_MAIN,!0,1,null];{let t=this.m_arrFromScenes.pop();return console.log("pop-----------route："+this.m_arrFromScenes.join(" | ")),t}return[$.M_SCENE_MAIN,!0,1,null]}removePreSceneData(){this.m_arrFromScenes=[]}setBackScene(){let t=this.getPreSceneData();this.setCurrentScene(t[0],t[1],!1)}setMainScene(t=1,e=null){this.setCurrentScene($.M_SCENE_MAIN,e)}async setCurrentScene(t,e=null,i=!1,n=!0){let r=!1;if(this.m_sceneCurrent&&this.m_sceneCurrent.name==t){console.log("currentScene："+this.m_sceneCurrent.name+"  openScene：："+t);return}this.isCloseAll?H.intance.closeAll():this.isCloseAll=!0,this.m_sceneCurrent&&(this.m_arrFromScenes||(this.m_arrFromScenes=[]),i&&this.m_sceneCurrent.m_arrOpenSceneData[3]&&this.m_arrFromScenes.push(this.m_sceneCurrent.m_arrOpenSceneData),console.log("open-----------scene："+this.m_arrFromScenes),this.fromScene=this.m_sceneCurrent.name,console.log("fromSceneName: "+this.fromScene),Pi.m_arrSceneToDialog.indexOf(t)==-1?(this.m_sceneCurrent==this.m_preScene&&(this.m_preScene=null),this.m_sceneCurrent.toScene=t,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),bo.instance.dispose()):this.m_preScene=this.m_sceneCurrent,!i&&Pi.m_arrSceneToDialog.indexOf(t)==-1&&this.m_preScene&&(this.m_sceneCurrent=this.m_preScene,this.m_sceneCurrent.toScene=t,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),bo.instance.dispose()));let o=U.intance.m_dicScene.get(t);switch(o&&o.music!=null&&o.music!="0"&&o.music!=""&&(console.log("SceneManager.setCurrentScene sceneItem.music: "+o.music),Pe.instance.playMusicByName(o.music)),t){case $.M_SCENE_MAIN:this.m_arrFromScenes=[],this.m_sceneCurrent=await Laya.Scene.open("scenes/mainView/MainScene.ls"),this.enterMainSceneTimes++;break;case $.M_SCENE_AIRDROP:this.m_sceneCurrent=await Laya.Scene.open("scenes/airdrop/AirdropScene.ls",!0,e);break;case $.M_SCENE_SHOP:this.m_sceneCurrent=await Laya.Scene.open("scenes/shop/ShopScene.ls",!0,e);break;case $.M_SCENE_RANK:this.m_sceneCurrent=await Laya.Scene.open("scenes/rank/RankScene.ls");break;case $.M_SCENE_SHOLARSHIP:this.m_sceneCurrent=await Laya.Scene.open("scenes/scholarship/ScholarshipScene.ls");break;case $.M_SCENE_FRIEND:this.m_sceneCurrent=await Laya.Scene.open("scenes/friend/FriendScene.ls");break;case $.M_SCENE_HERO:this.m_sceneCurrent=await Laya.Scene.open("scenes/hero/MyHeroScene.ls");break;case $.M_SCENE_KNAPSACK:this.m_sceneCurrent=await Laya.Scene.open("scenes/item/KnapsackScene.ls");break;case $.M_SCENE_MAIL:this.m_sceneCurrent=await Laya.Scene.open("scenes/mail/MailScene.ls");break;case $.M_SCENE_UNION:this.m_sceneCurrent=await Laya.Scene.open("scenes/union/UnionScene.ls");break;case $.M_SCENE_MYUNION:this.m_sceneCurrent=await Laya.Scene.open("scenes/union/MyUnionScene.ls",!0,e);break;case $.M_SCENE_MATCH_READY:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/MatchReady.ls");break;case $.M_SCENE_MATCH:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/Match.ls");break;case $.M_SCENE_ASSET:this.m_sceneCurrent=await Laya.Scene.open("scenes/asset/AssetScene.ls",!0,e);break;case $.M_SCENE_GET_MAT:this.m_sceneCurrent=await Laya.Scene.open("scenes/getMat/GetMatScene.ls",!1,e);break;case $.M_SCENE_OPEN_GAME:this.m_sceneCurrent=await Laya.Scene.open("scenes/getMat/OpenGameScene.ls",!1,e);break;default:break}ge.logs("======================  打开Scene: "+t+"  ======================"),this.m_sceneCurrent.name=t,this.m_sceneCurrent.fromScene=this.fromScene,this.m_sceneCurrent.m_arrOpenSceneData=[t,e,i,n];let s=B.M_SCENE}initPreload(){let t=U.intance.m_dicScene.get($.M_SCENE_PRE_LOAD);t&&t.music!=null&&t.music!="0"&&t.music!=""&&(console.log("SceneManager.initPreload sceneItem.music: "+t.music),Pe.instance.playMusicByName(t.music))}get currSceneName(){return this.m_sceneCurrent?this.m_sceneCurrent.name:""}};Pi.m_arrSceneToDialog=[];var fe=Pi;var Dt=class{constructor(){this._color=1;this.isLvUp=!1;this.newAddCnt=0}get simgurl(){return k.instance.getHeroHeadRes(this.heroItem.serialId,this.color)}get sk(){return k.instance.getHeroSkRes(this.heroItem.serialId,this.color)}get id(){return this._id}set id(t){this._id=t,this.heroItem=U.intance.m_dicHeros.get(t+"")}get name(){return d.instance.getLanguage(this.heroItem.name)}set name(t){this._name=t}get color(){return this._color}set color(t){t&&(this._color=t)}get m_iNum(){return this._m_iNum}set m_iNum(t){this._m_iNum=t}};var Fe=class a{constructor(t=0){this._m_iLevel=0;this._m_arrDisc=[];this.newAddCnt=0;this.isScholarship=!1;this.isLvUp=!1;this.needTip=!0;this.m_bSalon=!1;this.m_bIsSetId=!1;t!=0&&(this.m_iId=t)}get m_sIcon(){return this._m_sIcon}set m_sIcon(t){this._m_sIcon=t}get m_iLevel(){return this._m_iLevel>0?this._m_iLevel:1}set m_iLevel(t){this._m_iLevel=t||0}get m_iNum(){return this._m_iNum}set m_iNum(t){this._m_iNum=t}copyItem(){let t=new a;return t.m_iId=this.m_iId,t.m_iOriginalId=this.m_iOriginalId,t}get m_bTry(){return this.m_iId==this.m_iOriginalId?this._m_bSet=!1:this._m_bSet=!0,this._m_bSet}get m_strName(){return d.instance.getLanguage(this.itemItem.name)}set m_bTry(t){this._m_bSet=t}get m_iId(){return this._m_iId}set m_iId(t){this._m_iId=t,this.m_bIsSetId||(this.m_bIsSetId=!0,this.m_iOriginalId=t),this.setConfigData()}initDataByArr(t){this.m_iId=t.id,this.m_iNum=t.count}setConfigData(){if(this.m_iId!=0){if(this.itemItem=U.intance.m_dicItems.get(this.m_iId.toString()),!this.itemItem){console.log("[          <items> find out id:"+this.m_iId+"             ]");return}if(this.subType=parseInt(this.itemItem.subType+""),this.backType=parseInt(this.itemItem.backPack+""),this.type=parseInt(this.itemItem.type+""),this.m_sIcon=this.itemItem.icon,this.itemItem.buy_price){this.m_iPrice=this.itemItem.buy_price[0][1];let t=this.itemItem.buy_price[0][0],e=U.intance.m_dicItems.get(t);e&&(this.m_strBuyIcon=k.instance.getItemIcon(e.icon))}this.itemItem.sell_price&&(this.m_iSellPrice=parseFloat(this.itemItem.sell_price[0][1])),this.m_iQuality=this.itemItem.quality,this.setQualityData()}}setQualityData(){this.m_arrQualityData=this.itemItem.starArr}get getIconURL(){return k.instance.getItemIcon(this.itemItem.icon)}copy(){let t=new a(this.m_iId);return t.m_iLevel=this.m_iLevel,t}compareName(){return d.instance.getLanguage(this.itemItem.name)}compareQuality(){return parseFloat(this.m_iQuality+"")}compareSellPrice(){return parseFloat(this.itemItem.sell_price[1]+"")}compareNum(){return parseFloat(this.m_iNum+"")}compareLevel(){return parseFloat(this.m_iLevel+"")}compareFragment(){let t=this.itemItem.id;return 0}compareTypeId(){return parseInt(this.m_iId+"")}};var Kt=class a{constructor(){this._isPop=!1;g.intance.on(y.EVENT_CHECK_REMAIN,this,this.onCheckRemain)}static get instance(){return a._instance||(a._instance=new a),a._instance}get model(){return ze.instance}get isPop(){return this._isPop}startShow(){console.log("startShow");var t=this.model.hasRemain();!this._isPop&&t&&(this._isPop=!0,t instanceof Dt?g.intance.event(y.EVENT_OPEN_MODULE,h.HeroGetDialog):g.intance.event(y.EVENT_OPEN_MODULE,h.ItemGetDialog))}onCheckRemain(t){if(t==h.ItemGetDialog||t==h.HeroGetDialog){var e=this.model.hasRemain();e?e instanceof Dt?g.intance.event(y.EVENT_OPEN_MODULE,h.HeroGetDialog):g.intance.event(y.EVENT_OPEN_MODULE,h.ItemGetDialog):this._isPop=!1}}};var ze=class a{constructor(t){this._list=[];this.needPop=!0;this.autoPop=!0}static get instance(){return a._instance||(a._instance=new a(new my)),a._instance}get service(){return Kt.instance}addItem(t,e=!1){let i=new Fe;i.m_iId=t.m_iId,i.newAddCnt=t.newAddCnt,i.m_iLevel=t.m_iLevel,i.isLvUp=t.isLvUp,i.m_bNew=t.m_bNew,this._list.push(i),e&&this.service.startShow()}addHeroItem(t,e=!1){let i=new Dt;i.id=t.id,i.newAddCnt=t.newAddCnt,i.lv=t.lv,i.isLvUp=t.isLvUp,i.m_bNew=t.m_bNew,this._list.push(i),e&&this.service.startShow()}addItems(t,e=!1){this._list=this._list.concat(t),e&&this.service.startShow()}hasRemain(){return this._list.length>0?this._list[0]:null}get needListener(){return this._list.length>=2}addConsumeByServer(t){this._list.push(t)}addConsume(t,e){this._list.push([t,e])}getNextItem(){return this._list.length>0?this._list[0]:null}getOneItem(){return this._list.length>0?this._list.shift():null}},my=class{};var yt=class{constructor(){}};yt.TYPE_NORMAL=0,yt.TYPE_TRUST=1,yt.TYPE_WEB3=2,yt.type=0;async function y0({timeout:a}={timeout:3e3}){let t=tg();return t||b0({timeout:a})}async function b0({timeout:a}={timeout:3e3}){return new Promise(t=>{let e=()=>{t(tg())};window.addEventListener("trustwallet#initialized",e,{once:!0}),setTimeout(()=>{window.removeEventListener("trustwallet#initialized",e,{once:!0}),t(null)},a)})}function tg(){let a=e=>!!e.isTrust;return typeof window<"u"&&typeof window.ethereum<"u"?a(window.ethereum)?window.ethereum:window.ethereum?.providers?window.ethereum.providers.find(a)??null:window.trustwallet??null:null}async function dy(){if(console.log("initWeb3 -0"),console.log("initWeb3 -1"),typeof window<"u"&&typeof window.ethereum<"u"&&!!window.ethereum.isTrust){let t=await y0();console.log("initWeb3 -2"+t),yt.trustProvider=t,yt.type=yt.TYPE_TRUST,console.log("initWeb3 -6")}else typeof web3<"u"&&(console.log("initWeb3 2"),web3=new Web3(web3.currentProvider),yt.web3Provider=web3,yt.type=yt.TYPE_WEB3,console.log("initWeb3 3"))}var _i=class a{constructor(){this.walletDic=new ne}static get instance(){return a._instance||(a._instance=new a),a._instance}getEthValue(t){return a.instance.walletDic.get(t)?a.instance.walletDic.get(t).ethValue:0}getValue(t){return a.instance.walletDic.get(t)?a.instance.walletDic.get(t).value:0}};var Yt=class{};Yt.ASSETS_TOX=1e4,Yt.ASSETS_ARCANITE=10001,Yt.ASSETS_CRYSTAL=10002,Yt.ASSETS_MITHRIL=10003,Yt.ASSETS_REDSTONE=10004,Yt.ASSETS_TRUEIRON=10005;var ue=class{static initConfig(t){this.configDic=new ne;for(let e of t){let i=e.sstringvalue;e.sadditional==="JSON"&&(i=JSON.parse(i)),this.configDic.set(e.skey2,i),this[e.skey2]=i}}};ue.ADDRESS0="0x0000000000000000000000000000000000000000",ue.TOKEN_ERC20ABI=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"miner",type:"address"}],name:"addMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_delMinter",type:"address"}],name:"delMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"idx",type:"uint256"}],name:"getMinter",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMinterLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],ue.ACCOUNT_ADDRESS="0x5ff2123b0Aa4bD97eeF5F6388EFCB56cd29D6835",ue.ACCOUNT_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"nickName",type:"string"},{indexed:!1,internalType:"string",name:"avatar",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthHeight",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthPlace",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gender",type:"uint256"},{indexed:!1,internalType:"uint256",name:"influence",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_avatar",type:"string"}],name:"changeAvatar",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"}],name:"changeGender",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"changeInfluence",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"changeLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_nickname",type:"string"}],name:"changeNickName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_nickname",type:"string"},{internalType:"string",name:"_avatar",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_birthHeight",type:"uint256"},{internalType:"uint256",name:"_birthPlace",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"createAccount",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getAccountInfo",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"birthHeight",type:"uint256"},{internalType:"uint256",name:"birthPlace",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"uint256",name:"influence",type:"uint256"}],internalType:"struct AccountInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],ue.CREATE_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"AccountToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"accounts",type:"address[]"}],name:"BurnAccount",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"string",name:"nickname",type:"string"},{indexed:!1,internalType:"uint256",name:"country",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gender",type:"uint256"},{indexed:!1,internalType:"string",name:"icon",type:"string"}],name:"RegisterAccount",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"}],name:"burnAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"currentId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"iAccount",outputs:[{internalType:"contract IAccount",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"isExists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"nickname",type:"string"},{internalType:"uint256",name:"country",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"string",name:"icon",type:"string"}],name:"register",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"registerId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],ue.BUY_HERO_ABI=[{inputs:[{internalType:"address",name:"_Phantom",type:"address"},{internalType:"address",name:"_TOX",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"Phantom",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOX",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOXPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNFTParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],internalType:"struct PhantomMall.Params[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNameIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"union",type:"address"}],name:"list",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSeriesCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"tos",type:"address[]"}],name:"mintByOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintByTOX",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"nameCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"random",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_toxPrice",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],ue.HERO_LIST_ABI=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_fromTokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_toTokenId",type:"uint256"}],name:"BatchMetadataUpdate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"MetadataUpdate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"uri",type:"string"}],name:"TokenBaseURIUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"}],name:"UpdateLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"}],name:"UpdateName",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"}],name:"UpdateSeries",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"currentId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"endId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"exist",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"}],internalType:"struct PhantomHero.Params",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"list",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_endId",type:"uint256"}],name:"setEndId",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"uri",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],name:"updateLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"name",type:"string"}],name:"updateName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"}],name:"updateSeries",outputs:[],stateMutability:"nonpayable",type:"function"}],ue.TRANSFER_HERO_ABI=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"uids",type:"uint256[]"}],name:"BatchTransfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"uids",type:"uint256[]"}],name:"batchTransfer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"hero",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],ue.EDIT_ACCOUNT_ADDRESS="0xaa1B8FA74Ed295123a6336C2D3a88cB973160dfa",ue.EDIT_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"_accountContract",type:"address"},{internalType:"string",name:"_website",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"rate",type:"uint256"}],internalType:"struct UpdateProfile.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWebsite",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_rate",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_website",type:"string"}],name:"setWebsite",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"}],name:"updateProfile",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],ue.STAKING_POOL_ABI=[{inputs:[{internalType:"uint256",name:"_poolPlace",type:"uint256"},{internalType:"address",name:"_stakeToken",type:"address"},{internalType:"address",name:"_accountContract",type:"address"},{internalType:"address",name:"_rewardsContract",type:"address"},{internalType:"address",name:"_empowerContract",type:"address"},{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Withdrawn",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcPerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"capacityOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],name:"changeDailyRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimAllReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"claimReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"earned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"earnedAll",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"estimatePerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAccountContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokens",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getDailyRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getEmpowerContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastUpdateTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLimitTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPoolPlace",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsPerUnitStored",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getStakeTokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenIdleStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenMiningStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isAccountStakeToken",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_empowerContract",type:"address"}],name:"setEmpowerContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_limitTokensNumber",type:"uint256"}],name:"setLimitTokensNumber",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_idleStatus",type:"uint256"}],name:"setTokenIdleStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_miningStatus",type:"uint256"}],name:"setTokenMiningStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawAllAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"withdrawAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"}],ue.STAKING_HERO_POWERCALC_ABI=[{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenLevel",type:"uint256"},{internalType:"bool",name:"isMatchProfession",type:"bool"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getFormulaParams",outputs:[{components:[{internalType:"uint256",name:"constantValue",type:"uint256"},{internalType:"uint256",name:"linearCoefficient",type:"uint256"},{internalType:"uint256",name:"quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"percentage",type:"uint256"}],internalType:"struct EmpowerCalcFormula.FormulaParams",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],name:"setFormulaParams",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],ue.BLINDBOX_ADDRESS="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",ue.BLINDBOX_ABI=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],ue.BLINDBOX_ADDRESS_V2="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",ue.BLINDBOX_ABI_V2=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],ue.HERO_ADDRESS="0xCC0A4E3Bd1D49D7Ef9C431C0aD87D36B0B342018",ue.HERO_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"rarity",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"},{indexed:!1,internalType:"uint256",name:"race",type:"uint256"},{indexed:!1,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"level",type:"uint256"}],name:"UpdateLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"UpdateMineralLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"string",name:"name",type:"string"}],name:"UpdateName",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"race",type:"uint256"}],name:"UpdateRace",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"rarity",type:"uint256"}],name:"UpdateRatity",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"series",type:"uint256"}],name:"UpdateSeries",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"status",type:"uint256"}],name:"UpdateStatus",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getNFTParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"rarity",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"},{internalType:"uint256",name:"mineralLevel",type:"uint256"}],internalType:"struct Parmas",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_name",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"},{internalType:"uint256",name:"_race",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"updateLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"updateMineralLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_name",type:"string"}],name:"updateName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"}],name:"updateRace",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"}],name:"updateRatity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"}],name:"updateSeries",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"status",type:"uint256"}],name:"updateStatus",outputs:[],stateMutability:"nonpayable",type:"function"}],ue.CREATE_UNION_ADDRESS="0xcd62E6a07072Bed38F4126ba5C9361901c71846e",ue.CREATE_UNION_ABI="",ue.UNION_NUMBER_SYS_ADDRESS="0x45F0de10fA3982c4d18AbaE89a5F0663123f955c",ue.UNION_NUMBER_SYS_ABI="",ue.UPGRADE_UNION_ADDRESS="0x18320fD38F3806C0A9fb2B41202Ed0bD3f826894",ue.UPGRADE_UNION_ABI="",ue.UNION_DISTRIBUTE_ADDRESS="0x0f6b4bBa8b01B6ee2CC3232ea963ac702CaDCe04",ue.UNION_WAR_ADDRESS="0xF8489Bb617F9DCaBF33bEaeBdA4CCD029E9E247E",ue.UNION_DISTRIBUTE_ABI="",ue.UNION_WAR_ABI="",ue.HERO_TO_TOKEN_POOL_ADDRESS="",ue.HERO_TO_TOKEN_POOL_ABI="",ue.WITHDRAW_AND_RECHARGE_ADDRESS="",ue.WITHDRAW_AND_RECHARGE_ABI="",ue.SERIESHEROMALL_ADDRESS="",ue.SERIESHEROMALL_ABI="",ue.HEROFORMATION_ADDRESS="",ue.HEROFORMATION_ABI="",ue.HERO_MINT_ADDRESS="",ue.HERO_MINT_ABI="",ue.RECHANGE_ADDRESS_TOX="0x32926612d9399C1088045AEB821CCB5Ba904D697",ue.RECHANGE_ADDRESS="0x4952981D44cb95c52F0a62D4Fe8702081338D824",ue.RECHANGE_ABI=[{inputs:[{internalType:"address",name:"_signer",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidShortString",type:"error"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"StringTooLong",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[],name:"EIP712DomainChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"deadline",type:"uint256"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"depositETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"eip712Domain",outputs:[{internalType:"bytes1",name:"fields",type:"bytes1"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"version",type:"string"},{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"address",name:"verifyingContract",type:"address"},{internalType:"bytes32",name:"salt",type:"bytes32"},{internalType:"uint256[]",name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"isSigner",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_signer",type:"address"}],name:"setSigner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"signer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],ue.SAT_ADDRESS="0x424CaA5beA9bDfeF9F49796D7C7005632fAbE2E8",ue.SAT_ABI=[{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAuthStatus",outputs:[{internalType:"bool",name:"",type:"bool"}],type:"function"}];function le(a,t,e){return i=>a[t.name||e]?.(i)??t(a,i)}_t();Ge();var Xl=class extends F{constructor(t){super(`Filter type "${t}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}};Ei();Na();dc();_n();pn();tr();var Yg="/docs/contract/encodeEventTopics";function Ci(a){let{abi:t,eventName:e,args:i}=a,n=t[0];if(e){let l=Ri({abi:t,name:e});if(!l)throw new Qn(e,{docsPath:Yg});n=l}if(n.type!=="event")throw new Qn(void 0,{docsPath:Yg});let r=Vt(n),o=Jn(r),s=[];if(i&&"inputs"in n){let l=n.inputs?.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(i)?i:Object.values(i).length>0?l?.map(u=>i[u.name])??[]:[];c.length>0&&(s=l?.map((u,m)=>Array.isArray(c[m])?c[m].map((v,w)=>$g({param:u,value:c[m][w]})):c[m]?$g({param:u,value:c[m]}):null)??[])}return[o,...s]}function $g({param:a,value:t}){if(a.type==="string"||a.type==="bytes")return mt(ai(t));if(a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/))throw new Xl(a.type);return Si([a],[t])}Re();function Ua(a,{method:t}){let e={};return a.transport.type==="fallback"&&a.transport.onResponse?.(({method:i,response:n,status:r,transport:o})=>{r==="success"&&t===i&&(e[n]=o.request)}),i=>e[i]||a.request}async function bc(a,t){let{address:e,abi:i,args:n,eventName:r,fromBlock:o,strict:s,toBlock:l}=t,c=Ua(a,{method:"eth_newFilter"}),u=r?Ci({abi:i,args:n,eventName:r}):void 0,m=await a.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?ye(o):o,toBlock:typeof l=="bigint"?ye(l):l,topics:u}]});return{abi:i,args:n,eventName:r,id:m,request:c(m),strict:!!s,type:"event"}}ni();sa();_t();Ge();Va();Ko();var aw=3;function pa(a,{abi:t,address:e,args:i,docsPath:n,functionName:r,sender:o}){let{code:s,data:l,message:c,shortMessage:u}=a instanceof ca?a:a instanceof F?a.walk(v=>"data"in v)||a.walk():{},m=(()=>a instanceof xi?new qo({functionName:r}):[aw,ua.code].includes(s)&&(l||c||u)?new kt({abi:t,data:typeof l=="object"?l.data:l,functionName:r,message:u??c}):a)();return new jo(m,{abi:t,args:i,contractAddress:e,docsPath:n,functionName:r,sender:o})}ni();Re();Go();nr();Ge();la();var Bc=class extends F{constructor(t,{account:e,docsPath:i,chain:n,data:r,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:m,value:v}){let w=xn({from:e?.address,to:m,value:typeof v<"u"&&`${Oi(v)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:r,gas:o,gasPrice:typeof s<"u"&&`${gt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${gt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${gt(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}};Dr();Pc();function mv(a,{docsPath:t,...e}){let i=(()=>{let n=Mr(a,e);return n instanceof Ui?a:n})();return new Bc(i,{docsPath:t,...e})}Rc();Yo();Pr();ni();nr();Ge();var Nc=class extends F{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}},qa=class extends F{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}},Oc=class extends F{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${gt(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}};mi();Ge();var Rr=class extends F{constructor({blockHash:t,blockNumber:e}){let i="Block";t&&(i=`Block at hash "${t}"`),e&&(i=`Block at number "${e}"`),super(`${i} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}};Re();mi();var Sy={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function Hc(a){let t={...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,chainId:a.chainId?Mt(a.chainId):void 0,gas:a.gas?BigInt(a.gas):void 0,gasPrice:a.gasPrice?BigInt(a.gasPrice):void 0,maxFeePerBlobGas:a.maxFeePerBlobGas?BigInt(a.maxFeePerBlobGas):void 0,maxFeePerGas:a.maxFeePerGas?BigInt(a.maxFeePerGas):void 0,maxPriorityFeePerGas:a.maxPriorityFeePerGas?BigInt(a.maxPriorityFeePerGas):void 0,nonce:a.nonce?Mt(a.nonce):void 0,to:a.to?a.to:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,type:a.type?Sy[a.type]:void 0,typeHex:a.type?a.type:void 0,value:a.value?BigInt(a.value):void 0,v:a.v?BigInt(a.v):void 0};return t.yParity=(()=>{if(a.yParity)return Number(a.yParity);if(typeof t.v=="bigint"){if(t.v===0n||t.v===27n)return 0;if(t.v===1n||t.v===28n)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),t.type==="eip2930"&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t.type==="eip1559"&&delete t.maxFeePerBlobGas,t}function Uc(a){let t=a.transactions?.map(e=>typeof e=="string"?e:Hc(e));return{...a,baseFeePerGas:a.baseFeePerGas?BigInt(a.baseFeePerGas):null,blobGasUsed:a.blobGasUsed?BigInt(a.blobGasUsed):void 0,difficulty:a.difficulty?BigInt(a.difficulty):void 0,excessBlobGas:a.excessBlobGas?BigInt(a.excessBlobGas):void 0,gasLimit:a.gasLimit?BigInt(a.gasLimit):void 0,gasUsed:a.gasUsed?BigInt(a.gasUsed):void 0,hash:a.hash?a.hash:null,logsBloom:a.logsBloom?a.logsBloom:null,nonce:a.nonce?a.nonce:null,number:a.number?BigInt(a.number):null,size:a.size?BigInt(a.size):void 0,timestamp:a.timestamp?BigInt(a.timestamp):void 0,transactions:t,totalDifficulty:a.totalDifficulty?BigInt(a.totalDifficulty):null}}async function Xt(a,{blockHash:t,blockNumber:e,blockTag:i,includeTransactions:n}={}){let r=i??"latest",o=n??!1,s=e!==void 0?ye(e):void 0,l=null;if(t?l=await a.request({method:"eth_getBlockByHash",params:[t,o]}):l=await a.request({method:"eth_getBlockByNumber",params:[s||r,o]}),!l)throw new Rr({blockHash:t,blockNumber:e});return(a.chain?.formatters?.block?.format||Uc)(l)}async function Nr(a){let t=await a.request({method:"eth_gasPrice"});return BigInt(t)}async function dv(a,t){return Cy(a,t)}async function Cy(a,t){let{block:e,chain:i=a.chain,request:n}=t||{};if(typeof i?.fees?.defaultPriorityFee=="function"){let r=e||await le(a,Xt,"getBlock")({});return i.fees.defaultPriorityFee({block:r,client:a,request:n})}if(typeof i?.fees?.defaultPriorityFee<"u")return i?.fees?.defaultPriorityFee;try{let r=await a.request({method:"eth_maxPriorityFeePerGas"});return Ma(r)}catch{let[r,o]=await Promise.all([e?Promise.resolve(e):le(a,Xt,"getBlock")({}),le(a,Nr,"getGasPrice")({})]);if(typeof r.baseFeePerGas!="bigint")throw new qa;let s=o-r.baseFeePerGas;return s<0n?0n:s}}async function hv(a,t){return Vc(a,t)}async function Vc(a,t){let{block:e,chain:i=a.chain,request:n,type:r="eip1559"}=t||{},o=await(async()=>typeof i?.fees?.baseFeeMultiplier=="function"?i.fees.baseFeeMultiplier({block:e,client:a,request:n}):i?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new Nc;let l=10**(o.toString().split(".")[1]?.length??0),c=v=>v*BigInt(Math.ceil(o*l))/BigInt(l),u=e||await le(a,Xt,"getBlock")({});if(typeof i?.fees?.estimateFeesPerGas=="function")return i.fees.estimateFeesPerGas({block:e,client:a,multiply:c,request:n,type:r});if(r==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new qa;let v=typeof n?.maxPriorityFeePerGas=="bigint"?n.maxPriorityFeePerGas:await Cy(a,{block:u,chain:i,request:n}),w=c(u.baseFeePerGas);return{maxFeePerGas:n?.maxFeePerGas??w+v,maxPriorityFeePerGas:v}}return{gasPrice:n?.gasPrice??c(await le(a,Nr,"getGasPrice")({}))}}mi();Re();async function Fc(a,{address:t,blockTag:e="latest",blockNumber:i}){let n=await a.request({method:"eth_getTransactionCount",params:[t,i?ye(i):e]});return Mt(n)}Ge();var Fi=class extends F{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}};Pr();la();function fv(a){if(a.type)return a.type;if(typeof a.blobs<"u"||typeof a.blobVersionedHashes<"u"||typeof a.maxFeePerBlobGas<"u"||typeof a.sidecars<"u")return"eip4844";if(typeof a.maxFeePerGas<"u"||typeof a.maxPriorityFeePerGas<"u")return"eip1559";if(typeof a.gasPrice<"u")return typeof a.accessList<"u"?"eip2930":"legacy";throw new kc({transaction:a})}mi();async function zi(a){let t=await a.request({method:"eth_chainId"});return Mt(t)}async function Wa(a,t){let{account:e=a.account,chain:i,chainId:n,gas:r,nonce:o,parameters:s=["chainId","fees","gas","nonce","type"],type:l}=t,c=e?Ze(e):void 0,u={...t,...c?{from:c?.address}:{}};s.includes("chainId")&&(i?u.chainId=i.id:typeof n<"u"?u.chainId=n:u.chainId=await le(a,zi,"getChainId")({})),s.includes("nonce")&&typeof o>"u"&&c&&(u.nonce=await le(a,Fc,"getTransactionCount")({address:c.address,blockTag:"pending"}));let m=await(()=>{if(!(typeof u.type<"u"))return le(a,Xt,"getBlock")({blockTag:"latest"})})();if((s.includes("fees")||s.includes("type"))&&typeof l>"u")try{u.type=fv(u)}catch{u.type=typeof m?.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(s.includes("fees"))if(u.type==="eip1559"||u.type==="eip4844"){if(typeof u.maxFeePerGas>"u"||typeof u.maxPriorityFeePerGas>"u"){let{maxFeePerGas:v,maxPriorityFeePerGas:w}=await Vc(a,{block:m,chain:i,request:u});if(typeof t.maxPriorityFeePerGas>"u"&&t.maxFeePerGas&&t.maxFeePerGas<w)throw new Oc({maxPriorityFeePerGas:w});u.maxPriorityFeePerGas=w,u.maxFeePerGas=v}}else{if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")throw new qa;let{gasPrice:v}=await Vc(a,{block:m,chain:i,request:u,type:"legacy"});u.gasPrice=v}return s.includes("gas")&&typeof r>"u"&&(u.gas=await le(a,Or,"estimateGas")({...u,account:c?{address:c.address,type:"json-rpc"}:void 0})),Vi(u),delete u.parameters,u}async function Or(a,t){let e=t.account??a.account,i=e?Ze(e):void 0;try{let{accessList:n,blobs:r,blockNumber:o,blockTag:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:v,maxPriorityFeePerGas:w,nonce:x,to:b,value:T,...P}=i?.type==="local"?await Wa(a,t):t,j=(o?ye(o):void 0)||s;Vi(t);let Z=a.chain?.formatters?.transactionRequest?.format,Y=(Z||ja)({...Br(P,{format:Z}),from:i?.address,accessList:n,blobs:r,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:v,maxPriorityFeePerGas:w,nonce:x,to:b,value:T}),J=await a.request({method:"eth_estimateGas",params:j?[Y,j]:[Y]});return BigInt(J)}catch(n){throw mv(n,{...t,account:i,chain:a.chain})}}async function yv(a,t){let{abi:e,address:i,args:n,functionName:r,...o}=t,s=Pt({abi:e,args:n,functionName:r});try{return await le(a,Or,"estimateGas")({data:s,to:i,...o})}catch(l){let c=o.account?Ze(o.account):void 0;throw pa(l,{abi:e,address:i,args:n,docsPath:"/docs/contract/estimateContractGas",functionName:r,sender:c?.address})}}tr();_t();Aa();dc();_y();_c();pn();var bv="/docs/contract/decodeEventLog";function Sn(a){let{abi:t,data:e,strict:i,topics:n}=a,r=i??!0,[o,...s]=n;if(!o)throw new Eo({docsPath:bv});let l=t.find(b=>b.type==="event"&&o===Jn(Vt(b)));if(!(l&&"name"in l)||l.type!=="event")throw new fn(o,{docsPath:bv});let{name:c,inputs:u}=l,m=u?.some(b=>!("name"in b&&b.name)),v=m?[]:{},w=u.filter(b=>"indexed"in b&&b.indexed);for(let b=0;b<w.length;b++){let T=w[b],P=s[b];if(!P)throw new Ii({abiItem:l,param:T});v[T.name||b]=rw({param:T,value:P})}let x=u.filter(b=>!("indexed"in b&&b.indexed));if(x.length>0){if(e&&e!=="0x")try{let b=wn(x,e);if(b)if(m)v=[...v,...b];else for(let T=0;T<x.length;T++)v[x[T].name]=b[T]}catch(b){if(r)throw b instanceof dn||b instanceof ir?new pi({abiItem:l,data:e,params:x,size:$e(e)}):b}else if(r)throw new pi({abiItem:l,data:"0x",params:x,size:0})}return{eventName:c,args:Object.values(v).length>0?v:void 0}}function rw({param:a,value:t}){return a.type==="string"||a.type==="bytes"||a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/)?t:(wn([a],t)||[])[0]}function Hr({abi:a,eventName:t,logs:e,strict:i=!0}){return e.map(n=>{try{let r=Sn({...n,abi:a,strict:i});return t&&!t.includes(r.eventName)?null:{...r,...n}}catch(r){let o,s;if(r instanceof fn)return null;if(r instanceof pi||r instanceof Ii){if(i)return null;o=r.abiItem.name,s=r.abiItem.inputs?.some(l=>!("name"in l&&l.name))}return{...n,args:s?[]:{},eventName:o}}}).filter(Boolean)}Re();function zt(a,{args:t,eventName:e}={}){return{...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,logIndex:a.logIndex?Number(a.logIndex):null,transactionHash:a.transactionHash?a.transactionHash:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,...e?{args:t,eventName:e}:{}}}async function Ur(a,{address:t,blockHash:e,fromBlock:i,toBlock:n,event:r,events:o,args:s,strict:l}={}){let c=l??!1,u=o??(r?[r]:void 0),m=[];u&&(m=[u.flatMap(x=>Ci({abi:[x],eventName:x.name,args:s}))],r&&(m=m[0]));let v;e?v=await a.request({method:"eth_getLogs",params:[{address:t,topics:m,blockHash:e}]}):v=await a.request({method:"eth_getLogs",params:[{address:t,topics:m,fromBlock:typeof i=="bigint"?ye(i):i,toBlock:typeof n=="bigint"?ye(n):n}]});let w=v.map(x=>zt(x));return u?Hr({abi:u,logs:w,strict:c}):w}async function zc(a,t){let{abi:e,address:i,args:n,blockHash:r,eventName:o,fromBlock:s,toBlock:l,strict:c}=t,u=o?Ri({abi:e,name:o}):void 0,m=u?void 0:e.filter(v=>v.type==="event");return le(a,Ur,"getLogs")({address:i,args:n,blockHash:r,event:u,events:m,fromBlock:s,toBlock:l,strict:c})}Cn();sa();Vr();async function Gt(a,t){let{abi:e,address:i,args:n,functionName:r,...o}=t,s=Pt({abi:e,args:n,functionName:r});try{let{data:l}=await le(a,Gi,"call")({...o,data:s,to:i});return hi({abi:e,args:n,functionName:r,data:l||"0x"})}catch(l){throw pa(l,{abi:e,address:i,args:n,docsPath:"/docs/contract/readContract",functionName:r})}}ni();Cn();sa();Vr();async function Bv(a,t){let{abi:e,address:i,args:n,dataSuffix:r,functionName:o,...s}=t,l=s.account?Ze(s.account):a.account,c=Pt({abi:e,args:n,functionName:o});try{let{data:u}=await le(a,Gi,"call")({batch:!1,data:`${c}${r?r.replace("0x",""):""}`,to:i,...s,account:l}),m=hi({abi:e,args:n,functionName:o,data:u||"0x"}),v=e.filter(w=>"name"in w&&w.name===t.functionName);return{result:m,request:{abi:v,address:i,args:n,dataSuffix:r,functionName:o,...s,account:l}}}catch(u){throw pa(u,{abi:e,address:i,args:n,docsPath:"/docs/contract/simulateContract",functionName:o,sender:l?.address})}}_t();Ko();var Py=new Map,Pv=new Map,dw=0;function Qt(a,t,e){let i=++dw,n=()=>Py.get(a)||[],r=()=>{let u=n();Py.set(a,u.filter(m=>m.id!==i))},o=()=>{let u=Pv.get(a);n().length===1&&u&&u(),r()},s=n();if(Py.set(a,[...s,{id:i,fns:t}]),s&&s.length>0)return o;let l={};for(let u in t)l[u]=(...m)=>{let v=n();if(v.length!==0)for(let w of v)w.fns[u]?.(...m)};let c=e(l);return typeof c=="function"&&Pv.set(a,c),o}async function Qo(a){return new Promise(t=>setTimeout(t,a))}function ji(a,{emitOnBegin:t,initialWaitTime:e,interval:i}){let n=!0,r=()=>n=!1;return(async()=>{let s;t&&(s=await a({unpoll:r}));let l=await e?.(s)??i;await Qo(l);let c=async()=>{n&&(await a({unpoll:r}),await Qo(i),c())};c()})(),r}ri();var hw=new Map,fw=new Map;function Rv(a){let t=(n,r)=>({clear:()=>r.delete(n),get:()=>r.get(n),set:o=>r.set(n,o)}),e=t(a,hw),i=t(a,fw);return{clear:()=>{e.clear(),i.clear()},promise:e,response:i}}async function Nv(a,{cacheKey:t,cacheTime:e=1/0}){let i=Rv(t),n=i.response.get();if(n&&e>0&&new Date().getTime()-n.created.getTime()<e)return n.data;let r=i.promise.get();r||(r=a(),i.promise.set(r));try{let o=await r;return i.response.set({created:new Date,data:o}),o}finally{i.promise.clear()}}var yw=a=>`blockNumber.${a}`;async function qi(a,{cacheTime:t=a.cacheTime}={}){let e=await Nv(()=>a.request({method:"eth_blockNumber"}),{cacheKey:yw(a.uid),cacheTime:t});return BigInt(e)}async function Ka(a,{filter:t}){let e="strict"in t&&t.strict,i=await t.request({method:"eth_getFilterChanges",params:[t.id]});if(typeof i[0]=="string")return i;let n=i.map(r=>zt(r));return!("abi"in t)||!t.abi?n:Hr({abi:t.abi,logs:n,strict:e})}async function Ya(a,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}function Ov(a,t){let{abi:e,address:i,args:n,batch:r=!0,eventName:o,onError:s,onLogs:l,poll:c,pollingInterval:u=a.pollingInterval,strict:m}=t;return(typeof c<"u"?c:a.transport.type!=="webSocket")?(()=>{let b=m??!1,T=qe(["watchContractEvent",i,n,r,a.uid,o,u,b]);return Qt(T,{onLogs:l,onError:s},P=>{let z,j,Z=!1,R=ji(async()=>{if(!Z){try{j=await le(a,bc,"createContractEventFilter")({abi:e,address:i,args:n,eventName:o,strict:b})}catch{}Z=!0;return}try{let Y;if(j)Y=await le(a,Ka,"getFilterChanges")({filter:j});else{let J=await le(a,qi,"getBlockNumber")({});z&&z!==J?Y=await le(a,zc,"getContractEvents")({abi:e,address:i,args:n,eventName:o,fromBlock:z+1n,toBlock:J,strict:b}):Y=[],z=J}if(Y.length===0)return;if(r)P.onLogs(Y);else for(let J of Y)P.onLogs([J])}catch(Y){j&&Y instanceof Hi&&(Z=!1),P.onError?.(Y)}},{emitOnBegin:!0,interval:u});return async()=>{j&&await le(a,Ya,"uninstallFilter")({filter:j}),R()}})})():(()=>{let b=m??!1,T=qe(["watchContractEvent",i,n,r,a.uid,o,u,b]),P=!0,z=()=>P=!1;return Qt(T,{onLogs:l,onError:s},j=>((async()=>{try{let Z=o?Ci({abi:e,eventName:o,args:n}):[],{unsubscribe:R}=await a.transport.subscribe({params:["logs",{address:i,topics:Z}],onData(Y){if(!P)return;let J=Y.result;try{let{eventName:pe,args:Oe}=Sn({abi:e,data:J.data,topics:J.topics,strict:m}),Ae=zt(J,{args:Oe,eventName:pe});j.onLogs([Ae])}catch(pe){let Oe,Ae;if(pe instanceof pi||pe instanceof Ii){if(m)return;Oe=pe.abiItem.name,Ae=pe.abiItem.inputs?.some(ut=>!("name"in ut&&ut.name))}let Ce=zt(J,{args:Ae?[]:{},eventName:Oe});j.onLogs([Ce])}},onError(Y){j.onError?.(Y)}});z=R,P||z()}catch(Z){s?.(Z)}})(),()=>z()))})()}sa();ni();Wc();function Qc({chain:a,currentChainId:t}){if(!a)throw new qc;if(t!==a.id)throw new jc({chain:a,currentChainId:t})}Dr();la();Pc();function Hv(a,{docsPath:t,...e}){let i=(()=>{let n=Mr(a,e);return n instanceof Ui?a:n})();return new Ac(i,{docsPath:t,...e})}Rc();Yo();Pr();async function Fr(a,{serializedTransaction:t}){return a.request({method:"eth_sendRawTransaction",params:[t]},{retryCount:0})}async function zr(a,t){let{account:e=a.account,chain:i=a.chain,accessList:n,blobs:r,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:m,nonce:v,to:w,value:x,...b}=t;if(!e)throw new Fi({docsPath:"/docs/actions/wallet/sendTransaction"});let T=Ze(e);try{Vi(t);let P;if(i!==null&&(P=await le(a,zi,"getChainId")({}),Qc({currentChainId:P,chain:i})),T.type==="local"){let R=await le(a,Wa,"prepareTransactionRequest")({account:T,accessList:n,blobs:r,chain:i,chainId:P,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:m,nonce:v,to:w,value:x,...b}),Y=i?.serializers?.transaction,J=await T.signTransaction(R,{serializer:Y});return await le(a,Fr,"sendRawTransaction")({serializedTransaction:J})}let z=a.chain?.formatters?.transactionRequest?.format,Z=(z||ja)({...Br(b,{format:z}),accessList:n,blobs:r,data:o,from:T.address,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:m,nonce:v,to:w,value:x});return await a.request({method:"eth_sendTransaction",params:[Z]},{retryCount:0})}catch(P){throw Hv(P,{...t,account:T,chain:t.chain||void 0})}}async function Uv(a,t){let{abi:e,address:i,args:n,dataSuffix:r,functionName:o,...s}=t,l=Pt({abi:e,args:n,functionName:o});return le(a,zr,"sendTransaction")({data:`${l}${r?r.replace("0x",""):""}`,to:i,...s})}Re();async function Vv(a,{chain:t}){let{id:e,name:i,nativeCurrency:n,rpcUrls:r,blockExplorers:o}=t;await a.request({method:"wallet_addEthereumChain",params:[{chainId:ye(e),chainName:i,nativeCurrency:n,rpcUrls:r.default.http,blockExplorerUrls:o?Object.values(o).map(({url:s})=>s):void 0}]},{retryCount:0})}ni();var Zc=256,Jc;function Fv(a=11){if(!Jc||Zc+a>256*2){Jc="",Zc=0;for(let t=0;t<256;t++)Jc+=(256+Math.random()*256|0).toString(16).substring(1)}return Jc.substring(Zc,Zc+++a)}function eu(a){let{batch:t,cacheTime:e=a.pollingInterval??4e3,ccipRead:i,key:n="base",name:r="Base Client",pollingInterval:o=4e3,type:s="base"}=a,l=a.chain,c=a.account?Ze(a.account):void 0,{config:u,request:m,value:v}=a.transport({chain:l,pollingInterval:o}),w={...u,...v},x={account:c,batch:t,cacheTime:e,ccipRead:i,chain:l,key:n,name:r,pollingInterval:o,request:m,transport:w,type:s,uid:Fv()};function b(T){return P=>{let z=P(T);for(let Z in x)delete z[Z];let j={...T,...z};return Object.assign(j,{extend:b(j)})}}return Object.assign(x,{extend:b(x)})}Ge();lr();Ko();function Zo(a,{delay:t=100,retryCount:e=2,shouldRetry:i=()=>!0}={}){return new Promise((n,r)=>{let o=async({count:s=0}={})=>{let l=async({error:c})=>{let u=typeof t=="function"?t({count:s,error:c}):t;u&&await Qo(u),o({count:s+1})};try{let c=await a();n(c)}catch(c){if(s<e&&await i({count:s,error:c}))return l({error:c});r(c)}};o()})}function zv(a,t={}){return async(e,i={})=>{let{retryDelay:n=150,retryCount:r=3}={...t,...i};return Zo(async()=>{try{return await a(e)}catch(o){let s=o;switch(s.code){case cr.code:throw new cr(s);case ur.code:throw new ur(s);case pr.code:throw new pr(s);case mr.code:throw new mr(s);case ua.code:throw new ua(s);case Hi.code:throw new Hi(s);case dr.code:throw new dr(s);case hr.code:throw new hr(s);case fr.code:throw new fr(s);case yr.code:throw new yr(s);case En.code:throw new En(s);case br.code:throw new br(s);case Tn.code:throw new Tn(s);case gr.code:throw new gr(s);case vr.code:throw new vr(s);case Lr.code:throw new Lr(s);case _r.code:throw new _r(s);case wr.code:throw new wr(s);case 5e3:throw new Tn(s);default:throw o instanceof F?o:new Mc(s)}}},{delay:({count:o,error:s})=>{if(s&&s instanceof di){let l=s?.headers?.get("Retry-After");if(l?.match(/\d/))return parseInt(l)*1e3}return~~(1<<o)*n},retryCount:r,shouldRetry:({error:o})=>bw(o)})}}function bw(a){return"code"in a&&typeof a.code=="number"?a.code===-1||a.code===En.code||a.code===ua.code:a instanceof di&&a.status?a.status===403||a.status===408||a.status===413||a.status===429||a.status===500||a.status===502||a.status===503||a.status===504:!0}function tu({key:a,name:t,request:e,retryCount:i=3,retryDelay:n=150,timeout:r,type:o},s){return{config:{key:a,name:t,request:e,retryCount:i,retryDelay:n,timeout:r,type:o},request:zv(e,{retryCount:i,retryDelay:n}),value:s}}function Gr(a,t={}){let{key:e="custom",name:i="Custom Provider",retryDelay:n}=t;return({retryCount:r})=>tu({key:e,name:i,request:a.request.bind(a),retryCount:t.retryCount??r,retryDelay:n,type:"custom"})}lr();Ge();var iu=class extends F{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}};By();lr();function Gv(a,{errorInstance:t=new Error("timed out"),timeout:e,signal:i}){return new Promise((n,r)=>{(async()=>{let o;try{let s=new AbortController;e>0&&(o=setTimeout(()=>{i?s.abort():r(t)},e)),n(await a({signal:s?.signal||null}))}catch(s){s.name==="AbortError"&&r(t),r(s)}finally{clearTimeout(o)}})()})}ri();function gw(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var Ry=gw();function jv(a,t={}){return{async request(e){let{body:i,fetchOptions:n={},onResponse:r=t.onResponse,timeout:o=t.timeout??1e4}=e,{headers:s,method:l,signal:c}={...t.fetchOptions,...n};try{let u=await Gv(async({signal:v})=>await fetch(a,{...n,body:Array.isArray(i)?qe(i.map(x=>({jsonrpc:"2.0",id:x.id??Ry.take(),...x}))):qe({jsonrpc:"2.0",id:i.id??Ry.take(),...i}),headers:{...s,"Content-Type":"application/json"},method:l||"POST",signal:c||(o>0?v:null)}),{errorInstance:new Wo({body:i,url:a}),timeout:o,signal:!0});r&&await r(u);let m;if(u.headers.get("Content-Type")?.startsWith("application/json")?m=await u.json():m=await u.text(),!u.ok)throw new di({body:i,details:qe(m.error)||u.statusText,headers:u.headers,status:u.status,url:a});return m}catch(u){throw u instanceof di||u instanceof Wo?u:new di({body:i,details:u.message,url:a})}}}}function Jo(a,t={}){let{batch:e,fetchOptions:i,key:n="http",name:r="HTTP JSON-RPC",onFetchResponse:o,retryDelay:s}=t;return({chain:l,retryCount:c,timeout:u})=>{let{batchSize:m=1e3,wait:v=0}=typeof e=="object"?e:{},w=t.retryCount??c,x=u??t.timeout??1e4,b=a||l?.rpcUrls.default.http[0];if(!b)throw new iu;let T=jv(b,{fetchOptions:i,onResponse:o,timeout:x});return tu({key:n,name:r,async request({method:P,params:z}){let j={method:P,params:z},{schedule:Z}=Kc({id:`${a}`,wait:v,shouldSplitBatch(pe){return pe.length>m},fn:pe=>T.request({body:pe}),sort:(pe,Oe)=>pe.id-Oe.id}),R=async pe=>e?Z(pe):[await T.request({body:pe})],[{error:Y,result:J}]=await R(j);if(Y)throw new sr({body:j,error:Y,url:b});return J},retryCount:w,retryDelay:s,timeout:x,type:"http"},{fetchOptions:i,url:b})}}kn();Cn();sa();Dn();ac();Re();vc();Ge();Va();function jr(a,t){if(!(a instanceof F))return!1;let e=a.walk(i=>i instanceof kt);return e instanceof kt?!!(e.data?.errorName==="ResolverNotFound"||e.data?.errorName==="ResolverWildcardNotSupported"||e.data?.errorName==="ResolverNotContract"||e.data?.errorName==="ResolverError"||e.data?.errorName==="HttpError"||e.reason?.includes("Wildcard on non-extended resolvers is not supported")||t==="reverse"&&e.reason===gc[50]):!1}Ha();Ei();Re();Na();wi();function au(a){if(a.length!==66||a.indexOf("[")!==0||a.indexOf("]")!==65)return null;let t=`0x${a.slice(1,65)}`;return at(t)?t:null}function qr(a){let t=new Uint8Array(32).fill(0);if(!a)return bt(t);let e=a.split(".");for(let i=e.length-1;i>=0;i-=1){let n=au(e[i]),r=n?ai(n):mt($t(e[i]),"bytes");t=mt(Ft([t,r]),"bytes")}return bt(t)}Ei();function qv(a){return`[${a.slice(2)}]`}Ei();Re();Na();function Wv(a){let t=new Uint8Array(32).fill(0);return a?au(a)||mt($t(a)):bt(t)}function $a(a){let t=a.replace(/^\.|\.$/gm,"");if(t.length===0)return new Uint8Array(1);let e=new Uint8Array($t(t).byteLength+2),i=0,n=t.split(".");for(let r=0;r<n.length;r++){let o=$t(n[r]);o.byteLength>255&&(o=$t(qv(Wv(n[r])))),e[i]=o.length,e.set(o,i+1),i+=o.length+1}return e.byteLength!==i+1?e.slice(0,i+1):e}async function Kv(a,{blockNumber:t,blockTag:e,coinType:i,name:n,gatewayUrls:r,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=fi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}try{let c=Pt({abi:Dy,functionName:"addr",...i!=null?{args:[qr(n),BigInt(i)]}:{args:[qr(n)]}}),u={address:l,abi:Gc,functionName:"resolve",args:[Qe($a(n)),c],blockNumber:t,blockTag:e},m=le(a,Gt,"readContract"),v=r?await m({...u,args:[...u.args,r]}):await m(u);if(v[0]==="0x")return null;let w=hi({abi:Dy,args:i!=null?[qr(n),BigInt(i)]:void 0,functionName:"addr",data:v[0]});return w==="0x"||yn(w)==="0x00"?null:w}catch(c){if(o)throw c;if(jr(c,"resolve"))return null;throw c}}Ge();var nu=class extends F{constructor({data:t}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}},Xa=class extends F{constructor({reason:t}){super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}},Wr=class extends F{constructor({uri:t}){super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}},ru=class extends F{constructor({namespace:t}){super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}};var vw=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,Lw=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,_w=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,ww=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function xw(a){try{let t=await fetch(a,{method:"HEAD"});return t.status===200?t.headers.get("content-type")?.startsWith("image/"):!1}catch(t){return typeof t=="object"&&typeof t.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(e=>{let i=new Image;i.onload=()=>{e(!0)},i.onerror=()=>{e(!1)},i.src=a})}}function Yv(a,t){return a?a.endsWith("/")?a.slice(0,-1):a:t}function Ny({uri:a,gatewayUrls:t}){let e=_w.test(a);if(e)return{uri:a,isOnChain:!0,isEncoded:e};let i=Yv(t?.ipfs,"https://ipfs.io"),n=Yv(t?.arweave,"https://arweave.net"),r=a.match(vw),{protocol:o,subpath:s,target:l,subtarget:c=""}=r?.groups||{},u=o==="ipns:/"||s==="ipns/",m=o==="ipfs:/"||s==="ipfs/"||Lw.test(a);if(a.startsWith("http")&&!u&&!m){let w=a;return t?.arweave&&(w=a.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:w,isOnChain:!1,isEncoded:!1}}if((u||m)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(o==="ar:/"&&l)return{uri:`${n}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let v=a.replace(ww,"");if(v.startsWith("<svg")&&(v=`data:image/svg+xml;base64,${btoa(v)}`),v.startsWith("data:")||v.startsWith("{"))return{uri:v,isOnChain:!0,isEncoded:!1};throw new Wr({uri:a})}function Oy(a){if(typeof a!="object"||!("image"in a)&&!("image_url"in a)&&!("image_data"in a))throw new nu({data:a});return a.image||a.image_url||a.image_data}async function $v({gatewayUrls:a,uri:t}){try{let e=await fetch(t).then(n=>n.json());return await ou({gatewayUrls:a,uri:Oy(e)})}catch{throw new Wr({uri:t})}}async function ou({gatewayUrls:a,uri:t}){let{uri:e,isOnChain:i}=Ny({uri:t,gatewayUrls:a});if(i||await xw(e))return e;throw new Wr({uri:t})}function Xv(a){let t=a;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[e,i,n]=t.split("/"),[r,o]=e.split(":"),[s,l]=i.split(":");if(!r||r.toLowerCase()!=="eip155")throw new Xa({reason:"Only EIP-155 supported"});if(!o)throw new Xa({reason:"Chain ID not found"});if(!l)throw new Xa({reason:"Contract address not found"});if(!n)throw new Xa({reason:"Token ID not found"});if(!s)throw new Xa({reason:"ERC namespace not found"});return{chainID:parseInt(o),namespace:s.toLowerCase(),contractAddress:l,tokenID:n}}async function Qv(a,{nft:t}){if(t.namespace==="erc721")return Gt(a,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if(t.namespace==="erc1155")return Gt(a,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new ru({namespace:t.namespace})}async function Zv(a,{gatewayUrls:t,record:e}){return/eip155:/i.test(e)?Iw(a,{gatewayUrls:t,record:e}):ou({uri:e,gatewayUrls:t})}async function Iw(a,{gatewayUrls:t,record:e}){let i=Xv(e),n=await Qv(a,{nft:i}),{uri:r,isOnChain:o,isEncoded:s}=Ny({uri:n,gatewayUrls:t});if(o&&(r.includes("data:application/json;base64,")||r.startsWith("{"))){let c=s?atob(r.replace("data:application/json;base64,","")):r,u=JSON.parse(c);return ou({uri:Oy(u),gatewayUrls:t})}let l=i.tokenID;return i.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),$v({gatewayUrls:t,uri:r.replace(/(?:0x)?{id}/,l)})}kn();Cn();sa();Dn();Re();async function su(a,{blockNumber:t,blockTag:e,name:i,key:n,gatewayUrls:r,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=fi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}try{let c={address:l,abi:Gc,functionName:"resolve",args:[Qe($a(i)),Pt({abi:Ay,functionName:"text",args:[qr(i),n]})],blockNumber:t,blockTag:e},u=le(a,Gt,"readContract"),m=r?await u({...c,args:[...c.args,r]}):await u(c);if(m[0]==="0x")return null;let v=hi({abi:Ay,functionName:"text",data:m[0]});return v===""?null:v}catch(c){if(o)throw c;if(jr(c,"resolve"))return null;throw c}}async function Jv(a,{blockNumber:t,blockTag:e,assetGatewayUrls:i,name:n,gatewayUrls:r,strict:o,universalResolverAddress:s}){let l=await le(a,su,"getEnsText")({blockNumber:t,blockTag:e,key:"avatar",name:n,universalResolverAddress:s,gatewayUrls:r,strict:o});if(!l)return null;try{return await Zv(a,{record:l,gatewayUrls:i})}catch{return null}}kn();Dn();Re();async function eL(a,{address:t,blockNumber:e,blockTag:i,gatewayUrls:n,strict:r,universalResolverAddress:o}){let s=o;if(!s){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=fi({blockNumber:e,chain:a.chain,contract:"ensUniversalResolver"})}let l=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let c={address:s,abi:vv,functionName:"reverse",args:[Qe($a(l))],blockNumber:e,blockTag:i},u=le(a,Gt,"readContract"),[m,v]=n?await u({...c,args:[...c.args,n]}):await u(c);return t.toLowerCase()!==v.toLowerCase()?null:m}catch(c){if(r)throw c;if(jr(c,"reverse"))return null;throw c}}Dn();Re();async function tL(a,{blockNumber:t,blockTag:e,name:i,universalResolverAddress:n}){let r=n;if(!r){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");r=fi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}let[o]=await le(a,Gt,"readContract")({address:r,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Qe($a(i))],blockNumber:t,blockTag:e});return o}Vr();async function iL(a){let t=Ua(a,{method:"eth_newBlockFilter"}),e=await a.request({method:"eth_newBlockFilter"});return{id:e,request:t(e),type:"block"}}Re();async function lu(a,{address:t,args:e,event:i,events:n,fromBlock:r,strict:o,toBlock:s}={}){let l=n??(i?[i]:void 0),c=Ua(a,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(v=>Ci({abi:[v],eventName:v.name,args:e}))],i&&(u=u[0]));let m=await a.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof r=="bigint"?ye(r):r,toBlock:typeof s=="bigint"?ye(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:e,eventName:i?i.name:void 0,fromBlock:r,id:m,request:c(m),strict:!!o,toBlock:s,type:"event"}}async function cu(a){let t=Ua(a,{method:"eth_newPendingTransactionFilter"}),e=await a.request({method:"eth_newPendingTransactionFilter"});return{id:e,request:t(e),type:"transaction"}}Re();async function aL(a,{address:t,blockNumber:e,blockTag:i="latest"}){let n=e?ye(e):void 0,r=await a.request({method:"eth_getBalance",params:[t,n||i]});return BigInt(r)}async function nL(a){let t=await a.request({method:"eth_blobBaseFee"});return BigInt(t)}mi();Re();async function rL(a,{blockHash:t,blockNumber:e,blockTag:i="latest"}={}){let n=e!==void 0?ye(e):void 0,r;return t?r=await a.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):r=await a.request({method:"eth_getBlockTransactionCountByNumber",params:[n||i]}),Mt(r)}Re();async function oL(a,{address:t,blockNumber:e,blockTag:i="latest"}){let n=e!==void 0?ye(e):void 0,r=await a.request({method:"eth_getCode",params:[t,n||i]});if(r!=="0x")return r}Re();function sL(a){return{baseFeePerGas:a.baseFeePerGas.map(t=>BigInt(t)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(t=>t.map(e=>BigInt(e)))}}async function lL(a,{blockCount:t,blockNumber:e,blockTag:i="latest",rewardPercentiles:n}){let r=e?ye(e):void 0,o=await a.request({method:"eth_feeHistory",params:[ye(t),r||i,n]});return sL(o)}async function cL(a,{filter:t}){let e=t.strict??!1,n=(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(r=>zt(r));return t.abi?Hr({abi:t.abi,logs:n,strict:e}):n}Re();function Kr(a){return{formatters:void 0,fees:void 0,serializers:void 0,...a}}var uL=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,pL=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;_t();gn();Oa();Aa();Re();_n();Ha();Re();Na();function mL(a){let{domain:t={},message:e,primaryType:i}=a,n={EIP712Domain:pu({domain:t}),...a.types};uu({domain:t,message:e,primaryType:i,types:n});let r=["0x1901"];return t&&r.push(Ew({domain:t,types:n})),i!=="EIP712Domain"&&r.push(dL({data:e,primaryType:i,types:n})),mt(Ft(r))}function Ew({domain:a,types:t}){return dL({data:a,primaryType:"EIP712Domain",types:t})}function dL({data:a,primaryType:t,types:e}){let i=hL({data:a,primaryType:t,types:e});return mt(i)}function hL({data:a,primaryType:t,types:e}){let i=[{type:"bytes32"}],n=[Tw({primaryType:t,types:e})];for(let r of e[t]){let[o,s]=yL({types:e,name:r.name,type:r.type,value:a[r.name]});i.push(o),n.push(s)}return Si(i,n)}function Tw({primaryType:a,types:t}){let e=Qe(Sw({primaryType:a,types:t}));return mt(e)}function Sw({primaryType:a,types:t}){let e="",i=fL({primaryType:a,types:t});i.delete(a);let n=[a,...Array.from(i).sort()];for(let r of n)e+=`${r}(${t[r].map(({name:o,type:s})=>`${s} ${o}`).join(",")})`;return e}function fL({primaryType:a,types:t},e=new Set){let n=a.match(/^\w*/u)?.[0];if(e.has(n)||t[n]===void 0)return e;e.add(n);for(let r of t[n])fL({primaryType:r.type,types:t},e);return e}function yL({types:a,name:t,type:e,value:i}){if(a[e]!==void 0)return[{type:"bytes32"},mt(hL({data:i,primaryType:e,types:a}))];if(e==="bytes")return i=`0x${(i.length%2?"0":"")+i.slice(2)}`,[{type:"bytes32"},mt(i)];if(e==="string")return[{type:"bytes32"},mt(Qe(i))];if(e.lastIndexOf("]")===e.length-1){let n=e.slice(0,e.lastIndexOf("[")),r=i.map(o=>yL({name:t,type:n,types:a,value:o}));return[{type:"bytes32"},mt(Si(r.map(([o])=>o),r.map(([,o])=>o)))]}return[{type:e},i]}function uu(a){let{domain:t,message:e,primaryType:i,types:n}=a,r=(o,s)=>{for(let l of o){let{name:c,type:u}=l,m=s[c],v=u.match(pL);if(v&&(typeof m=="number"||typeof m=="bigint")){let[b,T,P]=v;ye(m,{signed:T==="int",size:parseInt(P)/8})}if(u==="address"&&typeof m=="string"&&!wt(m))throw new Bt({address:m});let w=u.match(uL);if(w){let[b,T]=w;if(T&&$e(m)!==parseInt(T))throw new So({expectedSize:parseInt(T),givenSize:$e(m)})}let x=n[u];x&&r(x,m)}};if(n.EIP712Domain&&t&&r(n.EIP712Domain,t),i!=="EIP712Domain"){let o=n[i];r(o,e)}}function pu({domain:a}){return[typeof a?.name=="string"&&{name:"name",type:"string"},a?.version&&{name:"version",type:"string"},typeof a?.chainId=="number"&&{name:"chainId",type:"uint256"},a?.verifyingContract&&{name:"verifyingContract",type:"address"},a?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}_t();Ha();_n();var Hy="/docs/contract/encodeDeployData";function es(a){let{abi:t,args:e,bytecode:i}=a;if(!e||e.length===0)return i;let n=t.find(o=>"type"in o&&o.type==="constructor");if(!n)throw new _o({docsPath:Hy});if(!("inputs"in n))throw new Xn({docsPath:Hy});if(!n.inputs||n.inputs.length===0)throw new Xn({docsPath:Hy});let r=Si(n.inputs,e);return Uo([i,r])}wi();mi();var Cw={"0x0":"reverted","0x1":"success"};function bL(a){let t={...a,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,contractAddress:a.contractAddress?a.contractAddress:null,cumulativeGasUsed:a.cumulativeGasUsed?BigInt(a.cumulativeGasUsed):null,effectiveGasPrice:a.effectiveGasPrice?BigInt(a.effectiveGasPrice):null,gasUsed:a.gasUsed?BigInt(a.gasUsed):null,logs:a.logs?a.logs.map(e=>zt(e)):null,to:a.to?a.to:null,transactionIndex:a.transactionIndex?Mt(a.transactionIndex):null,status:a.status?Cw[a.status]:null,type:a.type?Sy[a.type]||a.type:null};return a.blobGasPrice&&(t.blobGasPrice=BigInt(a.blobGasPrice)),a.blobGasUsed&&(t.blobGasUsed=BigInt(a.blobGasUsed)),t}Re();mi();var _L=`Ethereum Signed Message:
`;Ha();Ei();Na();function Vy(a,t){let e=(()=>typeof a=="string"?$t(a):a.raw instanceof Uint8Array?a.raw:ai(a.raw))(),i=$t(`${_L}${e.length}`);return mt(Ft([i,e]),t)}function wL(a,t){let[e,i="0"]=a.split("."),n=e.startsWith("-");if(n&&(e=e.slice(1)),i=i.replace(/(0+)$/,""),t===0)Math.round(+`.${i}`)===1&&(e=`${BigInt(e)+1n}`),i="";else if(i.length>t){let[r,o,s]=[i.slice(0,t-1),i.slice(t-1,t),i.slice(t)],l=Math.round(+`${o}.${s}`);l>9?i=`${BigInt(r)+BigInt(1)}0`.padStart(r.length+1,"0"):i=`${r}${l}`,i.length>t&&(i=i.slice(1),e=`${BigInt(e)+1n}`),i=i.slice(0,t)}else i=i.padEnd(t,"0");return BigInt(`${n?"-":""}${e}${i}`)}Ic();function Ja(a,t="wei"){return wL(a,xc[t])}function Bw(a){return a.map(t=>({...t,value:BigInt(t.value)}))}function xL(a){return{...a,balance:a.balance?BigInt(a.balance):void 0,nonce:a.nonce?Mt(a.nonce):void 0,storageProof:a.storageProof?Bw(a.storageProof):void 0}}async function IL(a,{address:t,blockNumber:e,blockTag:i,storageKeys:n}){let r=i??"latest",o=e!==void 0?ye(e):void 0,s=await a.request({method:"eth_getProof",params:[t,n,o||r]});return xL(s)}Re();async function EL(a,{address:t,blockNumber:e,blockTag:i="latest",slot:n}){let r=e!==void 0?ye(e):void 0;return await a.request({method:"eth_getStorageAt",params:[t,n,r||i]})}la();Re();async function Yr(a,{blockHash:t,blockNumber:e,blockTag:i,hash:n,index:r}){let o=i||"latest",s=e!==void 0?ye(e):void 0,l=null;if(n?l=await a.request({method:"eth_getTransactionByHash",params:[n]}):t?l=await a.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,ye(r)]}):(s||o)&&(l=await a.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||o,ye(r)]})),!l)throw new rr({blockHash:t,blockNumber:e,blockTag:o,hash:n,index:r});return(a.chain?.formatters?.transaction?.format||Hc)(l)}async function TL(a,{hash:t,transactionReceipt:e}){let[i,n]=await Promise.all([le(a,qi,"getBlockNumber")({}),t?le(a,Yr,"getBlockNumber")({hash:t}):void 0]),r=e?.blockNumber||n?.blockNumber;return r?i-r+1n:0n}la();async function ts(a,{hash:t}){let e=await a.request({method:"eth_getTransactionReceipt",params:[t]});if(!e)throw new or({hash:t});return(a.chain?.formatters?.transactionReceipt?.format||bL)(e)}kn();_t();Ge();Va();Cn();sa();Dn();async function SL(a,t){let{allowFailure:e=!0,batchSize:i,blockNumber:n,blockTag:r,multicallAddress:o,stateOverride:s}=t,l=t.contracts,c=i??(typeof a.batch?.multicall=="object"&&a.batch.multicall.batchSize||1024),u=o;if(!u){if(!a.chain)throw new Error("client chain not configured. multicallAddress is required.");u=fi({blockNumber:n,chain:a.chain,contract:"multicall3"})}let m=[[]],v=0,w=0;for(let T=0;T<l.length;T++){let{abi:P,address:z,args:j,functionName:Z}=l[T];try{let R=Pt({abi:P,args:j,functionName:Z});w+=(R.length-2)/2,c>0&&w>c&&m[v].length>0&&(v++,w=(R.length-2)/2,m[v]=[]),m[v]=[...m[v],{allowFailure:!0,callData:R,target:z}]}catch(R){let Y=pa(R,{abi:P,address:z,args:j,docsPath:"/docs/contract/multicall",functionName:Z});if(!e)throw Y;m[v]=[...m[v],{allowFailure:!0,callData:"0x",target:z}]}}let x=await Promise.allSettled(m.map(T=>le(a,Gt,"readContract")({abi:$o,address:u,args:[T],blockNumber:n,blockTag:r,functionName:"aggregate3",stateOverride:s}))),b=[];for(let T=0;T<x.length;T++){let P=x[T];if(P.status==="rejected"){if(!e)throw P.reason;for(let j=0;j<m[T].length;j++)b.push({status:"failure",error:P.reason,result:void 0});continue}let z=P.value;for(let j=0;j<z.length;j++){let{returnData:Z,success:R}=z[j],{callData:Y}=m[T][j],{abi:J,address:pe,functionName:Oe,args:Ae}=l[b.length];try{if(Y==="0x")throw new xi;if(!R)throw new ca({data:Z});let Ce=hi({abi:J,args:Ae,data:Z,functionName:Oe});b.push(e?{result:Ce,status:"success"}:Ce)}catch(Ce){let ut=pa(Ce,{abi:J,address:pe,args:Ae,docsPath:"/docs/contract/multicall",functionName:Oe});if(!e)throw ut;b.push({error:ut,result:void 0,status:"failure"})}}}if(b.length!==l.length)throw new F("multicall results mismatch");return b}kn();var CL="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";Va();Xr();Ei();wi();function ML(a,t){let e=at(a)?ai(a):a,i=at(t)?ai(t):t;return Gy(e,i)}Vr();async function bu(a,{address:t,hash:e,signature:i,...n}){let r=at(i)?i:Qe(i);try{let{data:o}=await le(a,Gi,"call")({data:es({abi:Lv,args:[t,e,r],bytecode:CL}),...n});return ML(o??"0x0","0x1")}catch(o){if(o instanceof In)return!1;throw o}}async function BL(a,{address:t,message:e,signature:i,...n}){let r=Vy(e);return bu(a,{address:t,hash:r,signature:i,...n})}async function PL(a,t){let{address:e,signature:i,message:n,primaryType:r,types:o,domain:s,...l}=t,c=mL({message:n,primaryType:r,types:o,domain:s});return bu(a,{address:e,hash:c,signature:i,...l})}la();ri();mi();ri();function gu(a,{emitOnBegin:t=!1,emitMissed:e=!1,onBlockNumber:i,onError:n,poll:r,pollingInterval:o=a.pollingInterval}){let s=typeof r<"u"?r:a.transport.type!=="webSocket",l;return s?(()=>{let m=qe(["watchBlockNumber",a.uid,t,e,o]);return Qt(m,{onBlockNumber:i,onError:n},v=>ji(async()=>{try{let w=await le(a,qi,"getBlockNumber")({cacheTime:0});if(l){if(w===l)return;if(w-l>1&&e)for(let x=l+1n;x<w;x++)v.onBlockNumber(x,l),l=x}(!l||w>l)&&(v.onBlockNumber(w,l),l=w)}catch(w){v.onError?.(w)}},{emitOnBegin:t,interval:o}))})():(()=>{let m=qe(["watchBlockNumber",a.uid,t,e]);return Qt(m,{onBlockNumber:i,onError:n},v=>{let w=!0,x=()=>w=!1;return(async()=>{try{let{unsubscribe:b}=await a.transport.subscribe({params:["newHeads"],onData(T){if(!w)return;let P=Ma(T.result?.number);v.onBlockNumber(P,l),l=P},onError(T){v.onError?.(T)}});x=b,w||x()}catch(b){n?.(b)}})(),()=>x()})})()}async function RL(a,{confirmations:t=1,hash:e,onReplaced:i,pollingInterval:n=a.pollingInterval,retryCount:r=6,retryDelay:o=({count:l})=>~~(1<<l)*200,timeout:s}){let l=qe(["waitForTransactionReceipt",a.uid,e]),c,u,m,v=!1;return new Promise((w,x)=>{s&&setTimeout(()=>x(new Dc({hash:e})),s);let b=Qt(l,{onReplaced:i,resolve:w,reject:x},T=>{let P=le(a,gu,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:n,async onBlockNumber(z){if(v)return;let j=z,Z=R=>{P(),R(),b()};try{if(m){if(t>1&&(!m.blockNumber||j-m.blockNumber+1n<t))return;Z(()=>T.resolve(m));return}if(c||(v=!0,await Zo(async()=>{c=await le(a,Yr,"getTransaction")({hash:e}),c.blockNumber&&(j=c.blockNumber)},{delay:o,retryCount:r}),v=!1),m=await le(a,ts,"getTransactionReceipt")({hash:e}),t>1&&(!m.blockNumber||j-m.blockNumber+1n<t))return;Z(()=>T.resolve(m))}catch(R){if(R instanceof rr||R instanceof or){if(!c){v=!1;return}try{u=c,v=!0;let Y=await Zo(()=>le(a,Xt,"getBlock")({blockNumber:j,includeTransactions:!0}),{delay:o,retryCount:r,shouldRetry:({error:Oe})=>Oe instanceof Rr});v=!1;let J=Y.transactions.find(({from:Oe,nonce:Ae})=>Oe===u.from&&Ae===u.nonce);if(!J||(m=await le(a,ts,"getTransactionReceipt")({hash:J.hash}),t>1&&(!m.blockNumber||j-m.blockNumber+1n<t)))return;let pe="replaced";J.to===u.to&&J.value===u.value?pe="repriced":J.from===J.to&&J.value===0n&&(pe="cancelled"),Z(()=>{T.onReplaced?.({reason:pe,replacedTransaction:u,transaction:J,transactionReceipt:m}),T.resolve(m)})}catch(Y){Z(()=>T.reject(Y))}}else Z(()=>T.reject(R))}}})})})}ri();function NL(a,{blockTag:t="latest",emitMissed:e=!1,emitOnBegin:i=!1,onBlock:n,onError:r,includeTransactions:o,poll:s,pollingInterval:l=a.pollingInterval}){let c=typeof s<"u"?s:a.transport.type!=="webSocket",u=o??!1,m;return c?(()=>{let x=qe(["watchBlocks",a.uid,t,e,i,u,l]);return Qt(x,{onBlock:n,onError:r},b=>ji(async()=>{try{let T=await le(a,Xt,"getBlock")({blockTag:t,includeTransactions:u});if(T.number&&m?.number){if(T.number===m.number)return;if(T.number-m.number>1&&e)for(let P=m?.number+1n;P<T.number;P++){let z=await le(a,Xt,"getBlock")({blockNumber:P,includeTransactions:u});b.onBlock(z,m),m=z}}(!m?.number||t==="pending"&&!T?.number||T.number&&T.number>m.number)&&(b.onBlock(T,m),m=T)}catch(T){b.onError?.(T)}},{emitOnBegin:i,interval:l}))})():(()=>{let x=!0,b=()=>x=!1;return(async()=>{try{let{unsubscribe:T}=await a.transport.subscribe({params:["newHeads"],onData(P){if(!x)return;let j=(a.chain?.formatters?.block?.format||Uc)(P.result);n(j,m),m=j},onError(P){r?.(P)}});b=T,x||b()}catch(T){r?.(T)}})(),()=>b()})()}ri();_t();Ko();function OL(a,{address:t,args:e,batch:i=!0,event:n,events:r,onError:o,onLogs:s,poll:l,pollingInterval:c=a.pollingInterval,strict:u}){let m=typeof l<"u"?l:a.transport.type!=="webSocket",v=u??!1;return m?(()=>{let b=qe(["watchEvent",t,e,i,a.uid,n,c]);return Qt(b,{onLogs:s,onError:o},T=>{let P,z,j=!1,Z=ji(async()=>{if(!j){try{z=await le(a,lu,"createEventFilter")({address:t,args:e,event:n,events:r,strict:v})}catch{}j=!0;return}try{let R;if(z)R=await le(a,Ka,"getFilterChanges")({filter:z});else{let Y=await le(a,qi,"getBlockNumber")({});P&&P!==Y?R=await le(a,Ur,"getLogs")({address:t,args:e,event:n,events:r,fromBlock:P+1n,toBlock:Y}):R=[],P=Y}if(R.length===0)return;if(i)T.onLogs(R);else for(let Y of R)T.onLogs([Y])}catch(R){z&&R instanceof Hi&&(j=!1),T.onError?.(R)}},{emitOnBegin:!0,interval:c});return async()=>{z&&await le(a,Ya,"uninstallFilter")({filter:z}),Z()}})})():(()=>{let b=!0,T=()=>b=!1;return(async()=>{try{let P=r??(n?[n]:void 0),z=[];P&&(z=[P.flatMap(Z=>Ci({abi:[Z],eventName:Z.name,args:e}))],n&&(z=z[0]));let{unsubscribe:j}=await a.transport.subscribe({params:["logs",{address:t,topics:z}],onData(Z){if(!b)return;let R=Z.result;try{let{eventName:Y,args:J}=Sn({abi:P??[],data:R.data,topics:R.topics,strict:v}),pe=zt(R,{args:J,eventName:Y});s([pe])}catch(Y){let J,pe;if(Y instanceof pi||Y instanceof Ii){if(u)return;J=Y.abiItem.name,pe=Y.abiItem.inputs?.some(Ae=>!("name"in Ae&&Ae.name))}let Oe=zt(R,{args:pe?[]:{},eventName:J});s([Oe])}},onError(Z){o?.(Z)}});T=j,b||T()}catch(P){o?.(P)}})(),()=>T()})()}ri();function HL(a,{batch:t=!0,onError:e,onTransactions:i,poll:n,pollingInterval:r=a.pollingInterval}){return(typeof n<"u"?n:a.transport.type!=="webSocket")?(()=>{let c=qe(["watchPendingTransactions",a.uid,t,r]);return Qt(c,{onTransactions:i,onError:e},u=>{let m,v=ji(async()=>{try{if(!m)try{m=await le(a,cu,"createPendingTransactionFilter")({});return}catch(x){throw v(),x}let w=await le(a,Ka,"getFilterChanges")({filter:m});if(w.length===0)return;if(t)u.onTransactions(w);else for(let x of w)u.onTransactions([x])}catch(w){u.onError?.(w)}},{emitOnBegin:!0,interval:r});return async()=>{m&&await le(a,Ya,"uninstallFilter")({filter:m}),v()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{let{unsubscribe:m}=await a.transport.subscribe({params:["newPendingTransactions"],onData(v){if(!c)return;let w=v.result;i([w])},onError(v){e?.(v)}});u=m,c||u()}catch(m){e?.(m)}})(),()=>u()})()}function UL(a){return{call:t=>Gi(a,t),createBlockFilter:()=>iL(a),createContractEventFilter:t=>bc(a,t),createEventFilter:t=>lu(a,t),createPendingTransactionFilter:()=>cu(a),estimateContractGas:t=>yv(a,t),estimateGas:t=>Or(a,t),getBalance:t=>aL(a,t),getBlobBaseFee:()=>nL(a),getBlock:t=>Xt(a,t),getBlockNumber:t=>qi(a,t),getBlockTransactionCount:t=>rL(a,t),getBytecode:t=>oL(a,t),getChainId:()=>zi(a),getContractEvents:t=>zc(a,t),getEnsAddress:t=>Kv(a,t),getEnsAvatar:t=>Jv(a,t),getEnsName:t=>eL(a,t),getEnsResolver:t=>tL(a,t),getEnsText:t=>su(a,t),getFeeHistory:t=>lL(a,t),estimateFeesPerGas:t=>hv(a,t),getFilterChanges:t=>Ka(a,t),getFilterLogs:t=>cL(a,t),getGasPrice:()=>Nr(a),getLogs:t=>Ur(a,t),getProof:t=>IL(a,t),estimateMaxPriorityFeePerGas:t=>dv(a,t),getStorageAt:t=>EL(a,t),getTransaction:t=>Yr(a,t),getTransactionConfirmations:t=>TL(a,t),getTransactionCount:t=>Fc(a,t),getTransactionReceipt:t=>ts(a,t),multicall:t=>SL(a,t),prepareTransactionRequest:t=>Wa(a,t),readContract:t=>Gt(a,t),sendRawTransaction:t=>Fr(a,t),simulateContract:t=>Bv(a,t),verifyMessage:t=>BL(a,t),verifyTypedData:t=>PL(a,t),uninstallFilter:t=>Ya(a,t),waitForTransactionReceipt:t=>RL(a,t),watchBlocks:t=>NL(a,t),watchBlockNumber:t=>gu(a,t),watchContractEvent:t=>Ov(a,t),watchEvent:t=>OL(a,t),watchPendingTransactions:t=>HL(a,t)}}function as(a){let{key:t="public",name:e="Public Client"}=a;return eu({...a,key:t,name:e,type:"publicClient"}).extend(UL)}function VL(a,t){let{abi:e,args:i,bytecode:n,...r}=t,o=es({abi:e,args:i,bytecode:n});return zr(a,{...r,data:o})}Ho();async function FL(a){return a.account?.type==="local"?[a.account.address]:(await a.request({method:"eth_accounts"})).map(e=>vn(e))}async function zL(a){return await a.request({method:"wallet_getPermissions"})}Ho();async function GL(a){return(await a.request({method:"eth_requestAccounts"},{retryCount:0})).map(e=>jg(e))}async function jL(a,t){return a.request({method:"wallet_requestPermissions",params:[t]},{retryCount:0})}ni();Re();async function qL(a,{account:t=a.account,message:e}){if(!t)throw new Fi({docsPath:"/docs/actions/wallet/signMessage"});let i=Ze(t);if(i.type==="local")return i.signMessage({message:e});let n=(()=>typeof e=="string"?bn(e):e.raw instanceof Uint8Array?Qe(e.raw):e.raw)();return a.request({method:"personal_sign",params:[n,i.address]},{retryCount:0})}ni();Re();Yo();Pr();async function WL(a,t){let{account:e=a.account,chain:i=a.chain,...n}=t;if(!e)throw new Fi({docsPath:"/docs/actions/wallet/signTransaction"});let r=Ze(e);Vi({account:r,...t});let o=await le(a,zi,"getChainId")({});i!==null&&Qc({currentChainId:o,chain:i});let l=(i?.formatters||a.chain?.formatters)?.transactionRequest?.format||ja;return r.type==="local"?r.signTransaction({...n,chainId:o},{serializer:a.chain?.serializers?.transaction}):await a.request({method:"eth_signTransaction",params:[{...l(n),chainId:ye(o),from:r.address}]},{retryCount:0})}ni();wi();ri();async function KL(a,t){let{account:e=a.account,domain:i,message:n,primaryType:r}=t;if(!e)throw new Fi({docsPath:"/docs/actions/wallet/signTypedData"});let o=Ze(e),s={EIP712Domain:pu({domain:i}),...t.types};if(uu({domain:i,message:n,primaryType:r,types:s}),o.type==="local")return o.signTypedData({domain:i,message:n,primaryType:r,types:s});let l=qe({domain:i??{},message:n,primaryType:r,types:s},(c,u)=>at(u)?u.toLowerCase():u);return a.request({method:"eth_signTypedData_v4",params:[o.address,l]},{retryCount:0})}Re();async function YL(a,{id:t}){await a.request({method:"wallet_switchEthereumChain",params:[{chainId:ye(t)}]},{retryCount:0})}async function $L(a,t){return await a.request({method:"wallet_watchAsset",params:t},{retryCount:0})}function XL(a){return{addChain:t=>Vv(a,t),deployContract:t=>VL(a,t),getAddresses:()=>FL(a),getChainId:()=>zi(a),getPermissions:()=>zL(a),prepareTransactionRequest:t=>Wa(a,t),requestAddresses:()=>GL(a),requestPermissions:t=>jL(a,t),sendRawTransaction:t=>Fr(a,t),sendTransaction:t=>zr(a,t),signMessage:t=>qL(a,t),signTransaction:t=>WL(a,t),signTypedData:t=>KL(a,t),switchChain:t=>YL(a,t),watchAsset:t=>$L(a,t),writeContract:t=>Uv(a,t)}}function Qr(a){let{key:t="wallet",name:e="Wallet Client",transport:i}=a;return eu({...a,key:t,name:e,transport:i,type:"walletClient"}).extend(XL)}_t();Ge();Va();Re();Go();var wu=class{constructor(){this.coins={};this.needTip=!0}};var li=(R=>(R[R.MAINNET=1]="MAINNET",R[R.TESTNET_RINKEBY=4]="TESTNET_RINKEBY",R[R.ARBITRUM=42161]="ARBITRUM",R[R.ARBITRUM_TESTNET=421611]="ARBITRUM_TESTNET",R[R.AVALANCHE=43114]="AVALANCHE",R[R.AVALANCHE_TESTNET=43113]="AVALANCHE_TESTNET",R[R.POLYGON=137]="POLYGON",R[R.POLYGON_TESTNET=80001]="POLYGON_TESTNET",R[R.FANTOM=250]="FANTOM",R[R.FANTOM_TESTNET=4002]="FANTOM_TESTNET",R[R.OPTIMISM=10]="OPTIMISM",R[R.OPTIMISM_TESTNET=69]="OPTIMISM_TESTNET",R[R.BOBA=288]="BOBA",R[R.BOBA_TESTNET=28]="BOBA_TESTNET",R[R.ESC=20]="ESC",R[R.HECO=128]="HECO",R[R.BSC=56]="BSC",R[R.BSC_TESTNET=97]="BSC_TESTNET",R[R.MATCH=9001]="MATCH",R[R.MATCH_TESTNET=9e3]="MATCH_TESTNET",R[R.CC=1331]="CC",R))(li||{});var it={id:9001,name:"MATCH",network:"MATCH",iconUrl:"",iconBackground:"#fff",nativeCurrency:{decimals:18,name:"MATCH",symbol:"MATCH"},rpcUrls:{default:{http:["https://rpc.matchscan.io"]},public:{http:["https://rpc.matchscan.io"]}},blockExplorers:{default:{name:"matchscan",url:"https://lisbon.matchscan.io"},etherscan:{name:"matchscan",url:"https://lisbon.matchscan.io"}},testnet:!1};var $4={9001:"0x3f76562685E9Cd18ba88C062bBC5999D78275734",56:"0x837656c3f5858692cCdce13BA66e09d2685073df",97:"0x6f4DceCEe81bfB85872BEaBC44C303b7c2f6c108"},X4={9001:"0x96397347Ea2beE29713Bc48749eB277D6A36A407",56:"0x837656c3f5858692cCdce13BA66e09d2685073df",97:"0x6f4DceCEe81bfB85872BEaBC44C303b7c2f6c108"},Q4={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9",56:"0x55d398326f99059ff775485246999027b3197955",97:"0x44004827f2F72566E12884A38f63f72F2a5143ea"},Z4={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9"},J4={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9"},e8={9001:"0x2418F7F0486deBc9270E16126F36526925EDAAE4"},ib={97:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab",9001:"0x84d225321122E69406B198e3A9B82Dc1BdF897e6"},h_={9001:"0x945103b2fEa1EAc6cea4d25e9BBaA5284d128b29"},t8={97:"0xfe261946218873F6eaec714BF757493256817534",9001:"0xfB51603B7863267a19736B070Bf9Cb2e5Fa256AF"},i8={9001:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab"},ns={97:"0x85438A19C4E1B399d54Fa7F49888430A3C19707b",9001:"0xee3b4CaFc7fa18c0Ef0B9208Bab702f37A619BE0"},ab={9001:"0xCd970FEA9838B28F67B7b7ab00Bf61Cdd33b26CE"},nb={97:"0xfe261946218873F6eaec714BF757493256817534",9001:"0xE3a61771Ce3CA772D446e687AFd52DC28eC9cCb8"},f_={9001:"0x45712193316F963A949539605b22AA4242BCc9E5"};var Wi=Kr({id:56,name:"BNB Smart Chain",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{default:{name:"BscScan",url:"https://bscscan.com",apiUrl:"https://api.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}});var xt=Kr({id:97,name:"Binance Smart Chain Testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]}},blockExplorers:{default:{name:"BscScan",url:"https://testnet.bscscan.com",apiUrl:"https://testnet.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0});var ki=Kr({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var Zr=class a{constructor(){this.create_contract=null;this.edit_account=null;this.account_contract=null;this.tokenId=0}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"}async getAccountVoFromServer(){let t=await M.requestPost("cybertron-sys-api/api/v1/account/find",{address:q.instance.walletAddress},!1,!1);if(t){let e=new wu;return Object.assign(e,t),console.log("info========"+JSON.stringify(e)),e}return t}async createAcccount(t,e,i,n){try{var r;let c;Q.vType==2?(r=it.id,c=h_[r]):Q.vType==1?(r=it.id,c=ib[r]):(r=xt.id,c=ib[r]);let u=await q.instance.walletClient.getChainId();if(r!==u){var o=await q.instance.switchChain(r);if(!o){he.instance.hideLoading(),console.log("切换失败，请手动切换");return}}if(!c)return he.instance.hideLoading(),N.instance.notice(d.instance.getLanguage(1173,u)),!1;var s=await q.instance.walletClient.writeContract({account:q.instance.walletAddress,address:c,abi:ue.CREATE_ACCOUNT_ABI,functionName:"register",args:[t,n,e,i]});console.log("============"+s);let m=await q.instance.publicClient.waitForTransactionReceipt({hash:s});return console.log(`Tx with hash: ${s}`,m),m&&m.status=="success"?(console.log(`Tx successful with hash: ${s}`),s):(he.instance.hideLoading(),ge.TransactionErrorTip(),!1)}catch(c){he.instance.hideLoading();var l=c.shortMessage;if(l&&l.indexOf("does not match")!=-1&&(l=d.instance.getLanguage(1118)),console.log(l),N.instance.notice(l),c instanceof F){let u=c.walk(m=>m instanceof kt);if(u instanceof kt){let m=u.data?.errorName??"";console.log("============errorName: "+m)}}return null}}async updateProfile(t,e,i){var n=L.instance.playerDto.sex,r=L.instance.playerDto;let o=await M.requestPost("wxgame/player/changeInfo",{name:t,sex:n,icon:e,country:i});return o?(r.icon=o.icon,r.country=o.country,r.name=o.name,r.sex=o.sex,r):null}async getTokenId(){return this.tokenId?this.tokenId:(this.tokenId=await this.account_contract.methods.tokenOfOwnerByIndex(q.instance.walletAddress,0).call(),this.tokenId=parseInt(this.tokenId+""),this.tokenId)}};var It=class{constructor(){}};It.UPDATE_LOCAL_WALLET_LIST_EVENT="WalletEvent:UPDATE_LOCAL_WALLET_LIST_EVENT",It.TRANSFER_LOCAL_WALLET_EVENT="WalletEvent:TRANSFER_LOCAL_WALLET_EVENT";var rs=class{};var Ki=class{};var an=class a{constructor(){this.assets_ary=[];this.assets_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){typeof window.ethereum>"u"||(g.intance.on(y.EVENT_RECHARGE_GET,this,this.rechargeEnd),this.assets_contract=new window.web3.eth.Contract(ue.WITHDRAW_AND_RECHARGE_ABI,ue.WITHDRAW_AND_RECHARGE_ADDRESS))}async depositWallet(t,e){if(he.instance.showLoading(!0),!await q.instance.allowanceAddressByTokenAddress(ue.WITHDRAW_AND_RECHARGE_ADDRESS,t)){he.instance.hideLoading(),N.instance.notice(d.instance.getLanguage(15));return}return e=window.web3.utils.toWei(e+""),await this.assets_contract.methods.recharge(t.toLowerCase(),e).send({from:q.instance.walletAddress},(n,r)=>{if(n)return he.instance.hideLoading(),!1}),!0}async withdrawToken(t){return he.instance.showLoading(!0),await this.assets_contract.methods.withdrawToken(t.tokenAddress,t.to,t.amount,t.timestamp,t.hash,t.r,t.s,t.v).send({from:q.instance.walletAddress},(e,i)=>{if(e)return he.instance.hideLoading(),!1}),!0}async updateAssetsBalance(){_i.instance.walletDic==null&&(_i.instance.walletDic=new ne);for(let t of this.assets_ary){let e=t[0],i=t[1],n=await q.instance.getERC20TokenBalance(i);n=parseInt(n);let r=_i.instance.walletDic.get(e);r||(r=new rs,r.itemId=e,r.value=0,_i.instance.walletDic.set(e,r)),r.ethValue=n}g.intance.event(It.UPDATE_LOCAL_WALLET_LIST_EVENT)}updateCwt(t){let e=_i.instance.walletDic.get(Yt.ASSETS_TOX);e||(e=new rs,e.itemId=Yt.ASSETS_TOX,_i.instance.walletDic.set(Yt.ASSETS_TOX,e)),e.ethValue=t}async rechargeToken(t,e=null,i){try{if(!await q.instance.newAllowanceAddress(i,e))return he.instance.hideLoading(),N.instance.notice(d.instance.getLanguage(15)),!1;let o=Ja(t+"");var n=await q.instance.walletClient.writeContract({account:q.instance.walletAddress,address:i,abi:ue.RECHANGE_ABI,functionName:"depositToken",args:[e,o],gas:69420n});let s=await q.instance.publicClient.waitForTransactionReceipt({hash:n});if(console.log(`Tx with hash: ${n}`,s),s&&s.status=="success"){console.log(`Tx successful with hash: ${n}`);let l=await q.instance.walletClient.getChainId(),c=[l,n];return this.getReward(l,n),Laya.timer.loop(2e3,this,this.getReward,c),n}else{he.instance.hideLoading(),ge.TransactionErrorTip();return}}catch(r){he.instance.hideLoading(),console.log(r),r instanceof Error?r.message.includes("does not match the target chain for the transaction")?g.intance.event(y.CHANGE_ASSET_CHAIN):console.log("Error message does not contain the specified character."):console.log("An error occurred, but it is not an instance of Error.")}}async getReward(t,e){let i=await M.requestPost("wxgame/sys/payCallPack",{chainId:t,hashId:e});if(i&&i.coin){let r=i.coin[0];if(!r)return;g.intance.event(It.UPDATE_LOCAL_WALLET_LIST_EVENT);var n=new Ki;n.id=r[0],n.count=r[1],he.instance.hideLoading(),H.intance.openModule(h.RewardGetDialog,[n]),this.rechargeEnd()}}rechargeEnd(){L.instance.rechargeEnd=!1,Laya.timer.clear(this,this.getReward)}parseGwei(t){return t*1e9}};var xu=m0(y_());var Yi=class{static getInviteUrl(){return window.location.origin+"?invite="+this.encode(q.instance.walletAddress)}static encode(t){for(var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=e.length,n=e.split(""),r="",o,s,l,c,u=0;u<t.length;u++)o=t.charCodeAt(u),s=o%i,o=(o-s)/i,l=o%i,o=(o-l)/i,c=o%i,r+=n[c]+n[l]+n[s];return window.btoa(r)}static decode(t){t=window.atob(t);var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=e.length,n,r,o,s,l=0,c;c=new Array(Math.floor(t.length/3)),n=c.length;for(var u=0;u<n;u++)r=e.indexOf(t.charAt(l)),l++,o=e.indexOf(t.charAt(l)),l++,s=e.indexOf(t.charAt(l)),l++,c[u]=r*i*i+o*i+s;return n=decodeCharCode(c.join(",")),n}static getQueryString(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return i!=null?i[2]:""}static getInviteWalletAddress(){let t=this.getQueryString("invite");return t&&(t=this.decode(t)),t}static toWei(t,e){let i=t*10**parseInt(e);return window.web3.utils.toBN("0x"+i.toString(16)).toString()}static fromWei(t,e,i=0){if(!t)return 0;let n=t.length-e+i;if(n<=0)return 0;let r=t.toString().slice(0,n);if(i){let o=r.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";r=s+r}else r=r.slice(0,r.length-i)+"."+r.slice(r.length-i)}return r}static deepClone(t){let e=new ne;for(let i in t)typeof t[i]=="function"?e[i]=t[i]:e[i]=JSON.parse(JSON.stringify(t[i]));return e}};var sx=`abdikace
abeceda
adresa
agrese
akce
aktovka
alej
alkohol
amputace
ananas
andulka
anekdota
anketa
antika
anulovat
archa
arogance
asfalt
asistent
aspirace
astma
astronom
atlas
atletika
atol
autobus
azyl
babka
bachor
bacil
baculka
badatel
bageta
bagr
bahno
bakterie
balada
baletka
balkon
balonek
balvan
balza
bambus
bankomat
barbar
baret
barman
baroko
barva
baterka
batoh
bavlna
bazalka
bazilika
bazuka
bedna
beran
beseda
bestie
beton
bezinka
bezmoc
beztak
bicykl
bidlo
biftek
bikiny
bilance
biograf
biolog
bitva
bizon
blahobyt
blatouch
blecha
bledule
blesk
blikat
blizna
blokovat
bloudit
blud
bobek
bobr
bodlina
bodnout
bohatost
bojkot
bojovat
bokorys
bolest
borec
borovice
bota
boubel
bouchat
bouda
boule
bourat
boxer
bradavka
brambora
branka
bratr
brepta
briketa
brko
brloh
bronz
broskev
brunetka
brusinka
brzda
brzy
bublina
bubnovat
buchta
buditel
budka
budova
bufet
bujarost
bukvice
buldok
bulva
bunda
bunkr
burza
butik
buvol
buzola
bydlet
bylina
bytovka
bzukot
capart
carevna
cedr
cedule
cejch
cejn
cela
celer
celkem
celnice
cenina
cennost
cenovka
centrum
cenzor
cestopis
cetka
chalupa
chapadlo
charita
chata
chechtat
chemie
chichot
chirurg
chlad
chleba
chlubit
chmel
chmura
chobot
chochol
chodba
cholera
chomout
chopit
choroba
chov
chrapot
chrlit
chrt
chrup
chtivost
chudina
chutnat
chvat
chvilka
chvost
chyba
chystat
chytit
cibule
cigareta
cihelna
cihla
cinkot
cirkus
cisterna
citace
citrus
cizinec
cizost
clona
cokoliv
couvat
ctitel
ctnost
cudnost
cuketa
cukr
cupot
cvaknout
cval
cvik
cvrkot
cyklista
daleko
dareba
datel
datum
dcera
debata
dechovka
decibel
deficit
deflace
dekl
dekret
demokrat
deprese
derby
deska
detektiv
dikobraz
diktovat
dioda
diplom
disk
displej
divadlo
divoch
dlaha
dlouho
dluhopis
dnes
dobro
dobytek
docent
dochutit
dodnes
dohled
dohoda
dohra
dojem
dojnice
doklad
dokola
doktor
dokument
dolar
doleva
dolina
doma
dominant
domluvit
domov
donutit
dopad
dopis
doplnit
doposud
doprovod
dopustit
dorazit
dorost
dort
dosah
doslov
dostatek
dosud
dosyta
dotaz
dotek
dotknout
doufat
doutnat
dovozce
dozadu
doznat
dozorce
drahota
drak
dramatik
dravec
draze
drdol
drobnost
drogerie
drozd
drsnost
drtit
drzost
duben
duchovno
dudek
duha
duhovka
dusit
dusno
dutost
dvojice
dvorec
dynamit
ekolog
ekonomie
elektron
elipsa
email
emise
emoce
empatie
epizoda
epocha
epopej
epos
esej
esence
eskorta
eskymo
etiketa
euforie
evoluce
exekuce
exkurze
expedice
exploze
export
extrakt
facka
fajfka
fakulta
fanatik
fantazie
farmacie
favorit
fazole
federace
fejeton
fenka
fialka
figurant
filozof
filtr
finance
finta
fixace
fjord
flanel
flirt
flotila
fond
fosfor
fotbal
fotka
foton
frakce
freska
fronta
fukar
funkce
fyzika
galeje
garant
genetika
geolog
gilotina
glazura
glejt
golem
golfista
gotika
graf
gramofon
granule
grep
gril
grog
groteska
guma
hadice
hadr
hala
halenka
hanba
hanopis
harfa
harpuna
havran
hebkost
hejkal
hejno
hejtman
hektar
helma
hematom
herec
herna
heslo
hezky
historik
hladovka
hlasivky
hlava
hledat
hlen
hlodavec
hloh
hloupost
hltat
hlubina
hluchota
hmat
hmota
hmyz
hnis
hnojivo
hnout
hoblina
hoboj
hoch
hodiny
hodlat
hodnota
hodovat
hojnost
hokej
holinka
holka
holub
homole
honitba
honorace
horal
horda
horizont
horko
horlivec
hormon
hornina
horoskop
horstvo
hospoda
hostina
hotovost
houba
houf
houpat
houska
hovor
hradba
hranice
hravost
hrazda
hrbolek
hrdina
hrdlo
hrdost
hrnek
hrobka
hromada
hrot
hrouda
hrozen
hrstka
hrubost
hryzat
hubenost
hubnout
hudba
hukot
humr
husita
hustota
hvozd
hybnost
hydrant
hygiena
hymna
hysterik
idylka
ihned
ikona
iluze
imunita
infekce
inflace
inkaso
inovace
inspekce
internet
invalida
investor
inzerce
ironie
jablko
jachta
jahoda
jakmile
jakost
jalovec
jantar
jarmark
jaro
jasan
jasno
jatka
javor
jazyk
jedinec
jedle
jednatel
jehlan
jekot
jelen
jelito
jemnost
jenom
jepice
jeseter
jevit
jezdec
jezero
jinak
jindy
jinoch
jiskra
jistota
jitrnice
jizva
jmenovat
jogurt
jurta
kabaret
kabel
kabinet
kachna
kadet
kadidlo
kahan
kajak
kajuta
kakao
kaktus
kalamita
kalhoty
kalibr
kalnost
kamera
kamkoliv
kamna
kanibal
kanoe
kantor
kapalina
kapela
kapitola
kapka
kaple
kapota
kapr
kapusta
kapybara
karamel
karotka
karton
kasa
katalog
katedra
kauce
kauza
kavalec
kazajka
kazeta
kazivost
kdekoliv
kdesi
kedluben
kemp
keramika
kino
klacek
kladivo
klam
klapot
klasika
klaun
klec
klenba
klepat
klesnout
klid
klima
klisna
klobouk
klokan
klopa
kloub
klubovna
klusat
kluzkost
kmen
kmitat
kmotr
kniha
knot
koalice
koberec
kobka
kobliha
kobyla
kocour
kohout
kojenec
kokos
koktejl
kolaps
koleda
kolize
kolo
komando
kometa
komik
komnata
komora
kompas
komunita
konat
koncept
kondice
konec
konfese
kongres
konina
konkurs
kontakt
konzerva
kopanec
kopie
kopnout
koprovka
korbel
korektor
kormidlo
koroptev
korpus
koruna
koryto
korzet
kosatec
kostka
kotel
kotleta
kotoul
koukat
koupelna
kousek
kouzlo
kovboj
koza
kozoroh
krabice
krach
krajina
kralovat
krasopis
kravata
kredit
krejcar
kresba
kreveta
kriket
kritik
krize
krkavec
krmelec
krmivo
krocan
krok
kronika
kropit
kroupa
krovka
krtek
kruhadlo
krupice
krutost
krvinka
krychle
krypta
krystal
kryt
kudlanka
kufr
kujnost
kukla
kulajda
kulich
kulka
kulomet
kultura
kuna
kupodivu
kurt
kurzor
kutil
kvalita
kvasinka
kvestor
kynolog
kyselina
kytara
kytice
kytka
kytovec
kyvadlo
labrador
lachtan
ladnost
laik
lakomec
lamela
lampa
lanovka
lasice
laso
lastura
latinka
lavina
lebka
leckdy
leden
lednice
ledovka
ledvina
legenda
legie
legrace
lehce
lehkost
lehnout
lektvar
lenochod
lentilka
lepenka
lepidlo
letadlo
letec
letmo
letokruh
levhart
levitace
levobok
libra
lichotka
lidojed
lidskost
lihovina
lijavec
lilek
limetka
linie
linka
linoleum
listopad
litina
litovat
lobista
lodivod
logika
logoped
lokalita
loket
lomcovat
lopata
lopuch
lord
losos
lotr
loudal
louh
louka
louskat
lovec
lstivost
lucerna
lucifer
lump
lusk
lustrace
lvice
lyra
lyrika
lysina
madam
madlo
magistr
mahagon
majetek
majitel
majorita
makak
makovice
makrela
malba
malina
malovat
malvice
maminka
mandle
manko
marnost
masakr
maskot
masopust
matice
matrika
maturita
mazanec
mazivo
mazlit
mazurka
mdloba
mechanik
meditace
medovina
melasa
meloun
mentolka
metla
metoda
metr
mezera
migrace
mihnout
mihule
mikina
mikrofon
milenec
milimetr
milost
mimika
mincovna
minibar
minomet
minulost
miska
mistr
mixovat
mladost
mlha
mlhovina
mlok
mlsat
mluvit
mnich
mnohem
mobil
mocnost
modelka
modlitba
mohyla
mokro
molekula
momentka
monarcha
monokl
monstrum
montovat
monzun
mosaz
moskyt
most
motivace
motorka
motyka
moucha
moudrost
mozaika
mozek
mozol
mramor
mravenec
mrkev
mrtvola
mrzet
mrzutost
mstitel
mudrc
muflon
mulat
mumie
munice
muset
mutace
muzeum
muzikant
myslivec
mzda
nabourat
nachytat
nadace
nadbytek
nadhoz
nadobro
nadpis
nahlas
nahnat
nahodile
nahradit
naivita
najednou
najisto
najmout
naklonit
nakonec
nakrmit
nalevo
namazat
namluvit
nanometr
naoko
naopak
naostro
napadat
napevno
naplnit
napnout
naposled
naprosto
narodit
naruby
narychlo
nasadit
nasekat
naslepo
nastat
natolik
navenek
navrch
navzdory
nazvat
nebe
nechat
necky
nedaleko
nedbat
neduh
negace
nehet
nehoda
nejen
nejprve
neklid
nelibost
nemilost
nemoc
neochota
neonka
nepokoj
nerost
nerv
nesmysl
nesoulad
netvor
neuron
nevina
nezvykle
nicota
nijak
nikam
nikdy
nikl
nikterak
nitro
nocleh
nohavice
nominace
nora
norek
nositel
nosnost
nouze
noviny
novota
nozdra
nuda
nudle
nuget
nutit
nutnost
nutrie
nymfa
obal
obarvit
obava
obdiv
obec
obehnat
obejmout
obezita
obhajoba
obilnice
objasnit
objekt
obklopit
oblast
oblek
obliba
obloha
obluda
obnos
obohatit
obojek
obout
obrazec
obrna
obruba
obrys
obsah
obsluha
obstarat
obuv
obvaz
obvinit
obvod
obvykle
obyvatel
obzor
ocas
ocel
ocenit
ochladit
ochota
ochrana
ocitnout
odboj
odbyt
odchod
odcizit
odebrat
odeslat
odevzdat
odezva
odhadce
odhodit
odjet
odjinud
odkaz
odkoupit
odliv
odluka
odmlka
odolnost
odpad
odpis
odplout
odpor
odpustit
odpykat
odrazka
odsoudit
odstup
odsun
odtok
odtud
odvaha
odveta
odvolat
odvracet
odznak
ofina
ofsajd
ohlas
ohnisko
ohrada
ohrozit
ohryzek
okap
okenice
oklika
okno
okouzlit
okovy
okrasa
okres
okrsek
okruh
okupant
okurka
okusit
olejnina
olizovat
omak
omeleta
omezit
omladina
omlouvat
omluva
omyl
onehdy
opakovat
opasek
operace
opice
opilost
opisovat
opora
opozice
opravdu
oproti
orbital
orchestr
orgie
orlice
orloj
ortel
osada
oschnout
osika
osivo
oslava
oslepit
oslnit
oslovit
osnova
osoba
osolit
ospalec
osten
ostraha
ostuda
ostych
osvojit
oteplit
otisk
otop
otrhat
otrlost
otrok
otruby
otvor
ovanout
ovar
oves
ovlivnit
ovoce
oxid
ozdoba
pachatel
pacient
padouch
pahorek
pakt
palanda
palec
palivo
paluba
pamflet
pamlsek
panenka
panika
panna
panovat
panstvo
pantofle
paprika
parketa
parodie
parta
paruka
paryba
paseka
pasivita
pastelka
patent
patrona
pavouk
pazneht
pazourek
pecka
pedagog
pejsek
peklo
peloton
penalta
pendrek
penze
periskop
pero
pestrost
petarda
petice
petrolej
pevnina
pexeso
pianista
piha
pijavice
pikle
piknik
pilina
pilnost
pilulka
pinzeta
pipeta
pisatel
pistole
pitevna
pivnice
pivovar
placenta
plakat
plamen
planeta
plastika
platit
plavidlo
plaz
plech
plemeno
plenta
ples
pletivo
plevel
plivat
plnit
plno
plocha
plodina
plomba
plout
pluk
plyn
pobavit
pobyt
pochod
pocit
poctivec
podat
podcenit
podepsat
podhled
podivit
podklad
podmanit
podnik
podoba
podpora
podraz
podstata
podvod
podzim
poezie
pohanka
pohnutka
pohovor
pohroma
pohyb
pointa
pojistka
pojmout
pokazit
pokles
pokoj
pokrok
pokuta
pokyn
poledne
polibek
polknout
poloha
polynom
pomalu
pominout
pomlka
pomoc
pomsta
pomyslet
ponechat
ponorka
ponurost
popadat
popel
popisek
poplach
poprosit
popsat
popud
poradce
porce
porod
porucha
poryv
posadit
posed
posila
poskok
poslanec
posoudit
pospolu
postava
posudek
posyp
potah
potkan
potlesk
potomek
potrava
potupa
potvora
poukaz
pouto
pouzdro
povaha
povidla
povlak
povoz
povrch
povstat
povyk
povzdech
pozdrav
pozemek
poznatek
pozor
pozvat
pracovat
prahory
praktika
prales
praotec
praporek
prase
pravda
princip
prkno
probudit
procento
prodej
profese
prohra
projekt
prolomit
promile
pronikat
propad
prorok
prosba
proton
proutek
provaz
prskavka
prsten
prudkost
prut
prvek
prvohory
psanec
psovod
pstruh
ptactvo
puberta
puch
pudl
pukavec
puklina
pukrle
pult
pumpa
punc
pupen
pusa
pusinka
pustina
putovat
putyka
pyramida
pysk
pytel
racek
rachot
radiace
radnice
radon
raft
ragby
raketa
rakovina
rameno
rampouch
rande
rarach
rarita
rasovna
rastr
ratolest
razance
razidlo
reagovat
reakce
recept
redaktor
referent
reflex
rejnok
reklama
rekord
rekrut
rektor
reputace
revize
revma
revolver
rezerva
riskovat
riziko
robotika
rodokmen
rohovka
rokle
rokoko
romaneto
ropovod
ropucha
rorejs
rosol
rostlina
rotmistr
rotoped
rotunda
roubenka
roucho
roup
roura
rovina
rovnice
rozbor
rozchod
rozdat
rozeznat
rozhodce
rozinka
rozjezd
rozkaz
rozloha
rozmar
rozpad
rozruch
rozsah
roztok
rozum
rozvod
rubrika
ruchadlo
rukavice
rukopis
ryba
rybolov
rychlost
rydlo
rypadlo
rytina
ryzost
sadista
sahat
sako
samec
samizdat
samota
sanitka
sardinka
sasanka
satelit
sazba
sazenice
sbor
schovat
sebranka
secese
sedadlo
sediment
sedlo
sehnat
sejmout
sekera
sekta
sekunda
sekvoje
semeno
seno
servis
sesadit
seshora
seskok
seslat
sestra
sesuv
sesypat
setba
setina
setkat
setnout
setrvat
sever
seznam
shoda
shrnout
sifon
silnice
sirka
sirotek
sirup
situace
skafandr
skalisko
skanzen
skaut
skeptik
skica
skladba
sklenice
sklo
skluz
skoba
skokan
skoro
skripta
skrz
skupina
skvost
skvrna
slabika
sladidlo
slanina
slast
slavnost
sledovat
slepec
sleva
slezina
slib
slina
sliznice
slon
sloupek
slovo
sluch
sluha
slunce
slupka
slza
smaragd
smetana
smilstvo
smlouva
smog
smrad
smrk
smrtka
smutek
smysl
snad
snaha
snob
sobota
socha
sodovka
sokol
sopka
sotva
souboj
soucit
soudce
souhlas
soulad
soumrak
souprava
soused
soutok
souviset
spalovna
spasitel
spis
splav
spodek
spojenec
spolu
sponzor
spornost
spousta
sprcha
spustit
sranda
sraz
srdce
srna
srnec
srovnat
srpen
srst
srub
stanice
starosta
statika
stavba
stehno
stezka
stodola
stolek
stopa
storno
stoupat
strach
stres
strhnout
strom
struna
studna
stupnice
stvol
styk
subjekt
subtropy
suchar
sudost
sukno
sundat
sunout
surikata
surovina
svah
svalstvo
svetr
svatba
svazek
svisle
svitek
svoboda
svodidlo
svorka
svrab
sykavka
sykot
synek
synovec
sypat
sypkost
syrovost
sysel
sytost
tabletka
tabule
tahoun
tajemno
tajfun
tajga
tajit
tajnost
taktika
tamhle
tampon
tancovat
tanec
tanker
tapeta
tavenina
tazatel
technika
tehdy
tekutina
telefon
temnota
tendence
tenista
tenor
teplota
tepna
teprve
terapie
termoska
textil
ticho
tiskopis
titulek
tkadlec
tkanina
tlapka
tleskat
tlukot
tlupa
tmel
toaleta
topinka
topol
torzo
touha
toulec
tradice
traktor
tramp
trasa
traverza
trefit
trest
trezor
trhavina
trhlina
trochu
trojice
troska
trouba
trpce
trpitel
trpkost
trubec
truchlit
truhlice
trus
trvat
tudy
tuhnout
tuhost
tundra
turista
turnaj
tuzemsko
tvaroh
tvorba
tvrdost
tvrz
tygr
tykev
ubohost
uboze
ubrat
ubrousek
ubrus
ubytovna
ucho
uctivost
udivit
uhradit
ujednat
ujistit
ujmout
ukazatel
uklidnit
uklonit
ukotvit
ukrojit
ulice
ulita
ulovit
umyvadlo
unavit
uniforma
uniknout
upadnout
uplatnit
uplynout
upoutat
upravit
uran
urazit
usednout
usilovat
usmrtit
usnadnit
usnout
usoudit
ustlat
ustrnout
utahovat
utkat
utlumit
utonout
utopenec
utrousit
uvalit
uvolnit
uvozovka
uzdravit
uzel
uzenina
uzlina
uznat
vagon
valcha
valoun
vana
vandal
vanilka
varan
varhany
varovat
vcelku
vchod
vdova
vedro
vegetace
vejce
velbloud
veletrh
velitel
velmoc
velryba
venkov
veranda
verze
veselka
veskrze
vesnice
vespodu
vesta
veterina
veverka
vibrace
vichr
videohra
vidina
vidle
vila
vinice
viset
vitalita
vize
vizitka
vjezd
vklad
vkus
vlajka
vlak
vlasec
vlevo
vlhkost
vliv
vlnovka
vloupat
vnucovat
vnuk
voda
vodivost
vodoznak
vodstvo
vojensky
vojna
vojsko
volant
volba
volit
volno
voskovka
vozidlo
vozovna
vpravo
vrabec
vracet
vrah
vrata
vrba
vrcholek
vrhat
vrstva
vrtule
vsadit
vstoupit
vstup
vtip
vybavit
vybrat
vychovat
vydat
vydra
vyfotit
vyhledat
vyhnout
vyhodit
vyhradit
vyhubit
vyjasnit
vyjet
vyjmout
vyklopit
vykonat
vylekat
vymazat
vymezit
vymizet
vymyslet
vynechat
vynikat
vynutit
vypadat
vyplatit
vypravit
vypustit
vyrazit
vyrovnat
vyrvat
vyslovit
vysoko
vystavit
vysunout
vysypat
vytasit
vytesat
vytratit
vyvinout
vyvolat
vyvrhel
vyzdobit
vyznat
vzadu
vzbudit
vzchopit
vzdor
vzduch
vzdychat
vzestup
vzhledem
vzkaz
vzlykat
vznik
vzorek
vzpoura
vztah
vztek
xylofon
zabrat
zabydlet
zachovat
zadarmo
zadusit
zafoukat
zahltit
zahodit
zahrada
zahynout
zajatec
zajet
zajistit
zaklepat
zakoupit
zalepit
zamezit
zamotat
zamyslet
zanechat
zanikat
zaplatit
zapojit
zapsat
zarazit
zastavit
zasunout
zatajit
zatemnit
zatknout
zaujmout
zavalit
zavelet
zavinit
zavolat
zavrtat
zazvonit
zbavit
zbrusu
zbudovat
zbytek
zdaleka
zdarma
zdatnost
zdivo
zdobit
zdroj
zdvih
zdymadlo
zelenina
zeman
zemina
zeptat
zezadu
zezdola
zhatit
zhltnout
zhluboka
zhotovit
zhruba
zima
zimnice
zjemnit
zklamat
zkoumat
zkratka
zkumavka
zlato
zlehka
zloba
zlom
zlost
zlozvyk
zmapovat
zmar
zmatek
zmije
zmizet
zmocnit
zmodrat
zmrzlina
zmutovat
znak
znalost
znamenat
znovu
zobrazit
zotavit
zoubek
zoufale
zplodit
zpomalit
zprava
zprostit
zprudka
zprvu
zrada
zranit
zrcadlo
zrnitost
zrno
zrovna
zrychlit
zrzavost
zticha
ztratit
zubovina
zubr
zvednout
zvenku
zvesela
zvon
zvrat
zvukovod
zvyk`.split(`
`);var lx=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);var cx=`abaisser
abandon
abdiquer
abeille
abolir
aborder
aboutir
aboyer
abrasif
abreuver
abriter
abroger
abrupt
absence
absolu
absurde
abusif
abyssal
académie
acajou
acarien
accabler
accepter
acclamer
accolade
accroche
accuser
acerbe
achat
acheter
aciduler
acier
acompte
acquérir
acronyme
acteur
actif
actuel
adepte
adéquat
adhésif
adjectif
adjuger
admettre
admirer
adopter
adorer
adoucir
adresse
adroit
adulte
adverbe
aérer
aéronef
affaire
affecter
affiche
affreux
affubler
agacer
agencer
agile
agiter
agrafer
agréable
agrume
aider
aiguille
ailier
aimable
aisance
ajouter
ajuster
alarmer
alchimie
alerte
algèbre
algue
aliéner
aliment
alléger
alliage
allouer
allumer
alourdir
alpaga
altesse
alvéole
amateur
ambigu
ambre
aménager
amertume
amidon
amiral
amorcer
amour
amovible
amphibie
ampleur
amusant
analyse
anaphore
anarchie
anatomie
ancien
anéantir
angle
angoisse
anguleux
animal
annexer
annonce
annuel
anodin
anomalie
anonyme
anormal
antenne
antidote
anxieux
apaiser
apéritif
aplanir
apologie
appareil
appeler
apporter
appuyer
aquarium
aqueduc
arbitre
arbuste
ardeur
ardoise
argent
arlequin
armature
armement
armoire
armure
arpenter
arracher
arriver
arroser
arsenic
artériel
article
aspect
asphalte
aspirer
assaut
asservir
assiette
associer
assurer
asticot
astre
astuce
atelier
atome
atrium
atroce
attaque
attentif
attirer
attraper
aubaine
auberge
audace
audible
augurer
aurore
automne
autruche
avaler
avancer
avarice
avenir
averse
aveugle
aviateur
avide
avion
aviser
avoine
avouer
avril
axial
axiome
badge
bafouer
bagage
baguette
baignade
balancer
balcon
baleine
balisage
bambin
bancaire
bandage
banlieue
bannière
banquier
barbier
baril
baron
barque
barrage
bassin
bastion
bataille
bateau
batterie
baudrier
bavarder
belette
bélier
belote
bénéfice
berceau
berger
berline
bermuda
besace
besogne
bétail
beurre
biberon
bicycle
bidule
bijou
bilan
bilingue
billard
binaire
biologie
biopsie
biotype
biscuit
bison
bistouri
bitume
bizarre
blafard
blague
blanchir
blessant
blinder
blond
bloquer
blouson
bobard
bobine
boire
boiser
bolide
bonbon
bondir
bonheur
bonifier
bonus
bordure
borne
botte
boucle
boueux
bougie
boulon
bouquin
bourse
boussole
boutique
boxeur
branche
brasier
brave
brebis
brèche
breuvage
bricoler
brigade
brillant
brioche
brique
brochure
broder
bronzer
brousse
broyeur
brume
brusque
brutal
bruyant
buffle
buisson
bulletin
bureau
burin
bustier
butiner
butoir
buvable
buvette
cabanon
cabine
cachette
cadeau
cadre
caféine
caillou
caisson
calculer
calepin
calibre
calmer
calomnie
calvaire
camarade
caméra
camion
campagne
canal
caneton
canon
cantine
canular
capable
caporal
caprice
capsule
capter
capuche
carabine
carbone
caresser
caribou
carnage
carotte
carreau
carton
cascade
casier
casque
cassure
causer
caution
cavalier
caverne
caviar
cédille
ceinture
céleste
cellule
cendrier
censurer
central
cercle
cérébral
cerise
cerner
cerveau
cesser
chagrin
chaise
chaleur
chambre
chance
chapitre
charbon
chasseur
chaton
chausson
chavirer
chemise
chenille
chéquier
chercher
cheval
chien
chiffre
chignon
chimère
chiot
chlorure
chocolat
choisir
chose
chouette
chrome
chute
cigare
cigogne
cimenter
cinéma
cintrer
circuler
cirer
cirque
citerne
citoyen
citron
civil
clairon
clameur
claquer
classe
clavier
client
cligner
climat
clivage
cloche
clonage
cloporte
cobalt
cobra
cocasse
cocotier
coder
codifier
coffre
cogner
cohésion
coiffer
coincer
colère
colibri
colline
colmater
colonel
combat
comédie
commande
compact
concert
conduire
confier
congeler
connoter
consonne
contact
convexe
copain
copie
corail
corbeau
cordage
corniche
corpus
correct
cortège
cosmique
costume
coton
coude
coupure
courage
couteau
couvrir
coyote
crabe
crainte
cravate
crayon
créature
créditer
crémeux
creuser
crevette
cribler
crier
cristal
critère
croire
croquer
crotale
crucial
cruel
crypter
cubique
cueillir
cuillère
cuisine
cuivre
culminer
cultiver
cumuler
cupide
curatif
curseur
cyanure
cycle
cylindre
cynique
daigner
damier
danger
danseur
dauphin
débattre
débiter
déborder
débrider
débutant
décaler
décembre
déchirer
décider
déclarer
décorer
décrire
décupler
dédale
déductif
déesse
défensif
défiler
défrayer
dégager
dégivrer
déglutir
dégrafer
déjeuner
délice
déloger
demander
demeurer
démolir
dénicher
dénouer
dentelle
dénuder
départ
dépenser
déphaser
déplacer
déposer
déranger
dérober
désastre
descente
désert
désigner
désobéir
dessiner
destrier
détacher
détester
détourer
détresse
devancer
devenir
deviner
devoir
diable
dialogue
diamant
dicter
différer
digérer
digital
digne
diluer
dimanche
diminuer
dioxyde
directif
diriger
discuter
disposer
dissiper
distance
divertir
diviser
docile
docteur
dogme
doigt
domaine
domicile
dompter
donateur
donjon
donner
dopamine
dortoir
dorure
dosage
doseur
dossier
dotation
douanier
double
douceur
douter
doyen
dragon
draper
dresser
dribbler
droiture
duperie
duplexe
durable
durcir
dynastie
éblouir
écarter
écharpe
échelle
éclairer
éclipse
éclore
écluse
école
économie
écorce
écouter
écraser
écrémer
écrivain
écrou
écume
écureuil
édifier
éduquer
effacer
effectif
effigie
effort
effrayer
effusion
égaliser
égarer
éjecter
élaborer
élargir
électron
élégant
éléphant
élève
éligible
élitisme
éloge
élucider
éluder
emballer
embellir
embryon
émeraude
émission
emmener
émotion
émouvoir
empereur
employer
emporter
emprise
émulsion
encadrer
enchère
enclave
encoche
endiguer
endosser
endroit
enduire
énergie
enfance
enfermer
enfouir
engager
engin
englober
énigme
enjamber
enjeu
enlever
ennemi
ennuyeux
enrichir
enrobage
enseigne
entasser
entendre
entier
entourer
entraver
énumérer
envahir
enviable
envoyer
enzyme
éolien
épaissir
épargne
épatant
épaule
épicerie
épidémie
épier
épilogue
épine
épisode
épitaphe
époque
épreuve
éprouver
épuisant
équerre
équipe
ériger
érosion
erreur
éruption
escalier
espadon
espèce
espiègle
espoir
esprit
esquiver
essayer
essence
essieu
essorer
estime
estomac
estrade
étagère
étaler
étanche
étatique
éteindre
étendoir
éternel
éthanol
éthique
ethnie
étirer
étoffer
étoile
étonnant
étourdir
étrange
étroit
étude
euphorie
évaluer
évasion
éventail
évidence
éviter
évolutif
évoquer
exact
exagérer
exaucer
exceller
excitant
exclusif
excuse
exécuter
exemple
exercer
exhaler
exhorter
exigence
exiler
exister
exotique
expédier
explorer
exposer
exprimer
exquis
extensif
extraire
exulter
fable
fabuleux
facette
facile
facture
faiblir
falaise
fameux
famille
farceur
farfelu
farine
farouche
fasciner
fatal
fatigue
faucon
fautif
faveur
favori
fébrile
féconder
fédérer
félin
femme
fémur
fendoir
féodal
fermer
féroce
ferveur
festival
feuille
feutre
février
fiasco
ficeler
fictif
fidèle
figure
filature
filetage
filière
filleul
filmer
filou
filtrer
financer
finir
fiole
firme
fissure
fixer
flairer
flamme
flasque
flatteur
fléau
flèche
fleur
flexion
flocon
flore
fluctuer
fluide
fluvial
folie
fonderie
fongible
fontaine
forcer
forgeron
formuler
fortune
fossile
foudre
fougère
fouiller
foulure
fourmi
fragile
fraise
franchir
frapper
frayeur
frégate
freiner
frelon
frémir
frénésie
frère
friable
friction
frisson
frivole
froid
fromage
frontal
frotter
fruit
fugitif
fuite
fureur
furieux
furtif
fusion
futur
gagner
galaxie
galerie
gambader
garantir
gardien
garnir
garrigue
gazelle
gazon
géant
gélatine
gélule
gendarme
général
génie
genou
gentil
géologie
géomètre
géranium
germe
gestuel
geyser
gibier
gicler
girafe
givre
glace
glaive
glisser
globe
gloire
glorieux
golfeur
gomme
gonfler
gorge
gorille
goudron
gouffre
goulot
goupille
gourmand
goutte
graduel
graffiti
graine
grand
grappin
gratuit
gravir
grenat
griffure
griller
grimper
grogner
gronder
grotte
groupe
gruger
grutier
gruyère
guépard
guerrier
guide
guimauve
guitare
gustatif
gymnaste
gyrostat
habitude
hachoir
halte
hameau
hangar
hanneton
haricot
harmonie
harpon
hasard
hélium
hématome
herbe
hérisson
hermine
héron
hésiter
heureux
hiberner
hibou
hilarant
histoire
hiver
homard
hommage
homogène
honneur
honorer
honteux
horde
horizon
horloge
hormone
horrible
houleux
housse
hublot
huileux
humain
humble
humide
humour
hurler
hydromel
hygiène
hymne
hypnose
idylle
ignorer
iguane
illicite
illusion
image
imbiber
imiter
immense
immobile
immuable
impact
impérial
implorer
imposer
imprimer
imputer
incarner
incendie
incident
incliner
incolore
indexer
indice
inductif
inédit
ineptie
inexact
infini
infliger
informer
infusion
ingérer
inhaler
inhiber
injecter
injure
innocent
inoculer
inonder
inscrire
insecte
insigne
insolite
inspirer
instinct
insulter
intact
intense
intime
intrigue
intuitif
inutile
invasion
inventer
inviter
invoquer
ironique
irradier
irréel
irriter
isoler
ivoire
ivresse
jaguar
jaillir
jambe
janvier
jardin
jauger
jaune
javelot
jetable
jeton
jeudi
jeunesse
joindre
joncher
jongler
joueur
jouissif
journal
jovial
joyau
joyeux
jubiler
jugement
junior
jupon
juriste
justice
juteux
juvénile
kayak
kimono
kiosque
label
labial
labourer
lacérer
lactose
lagune
laine
laisser
laitier
lambeau
lamelle
lampe
lanceur
langage
lanterne
lapin
largeur
larme
laurier
lavabo
lavoir
lecture
légal
léger
légume
lessive
lettre
levier
lexique
lézard
liasse
libérer
libre
licence
licorne
liège
lièvre
ligature
ligoter
ligue
limer
limite
limonade
limpide
linéaire
lingot
lionceau
liquide
lisière
lister
lithium
litige
littoral
livreur
logique
lointain
loisir
lombric
loterie
louer
lourd
loutre
louve
loyal
lubie
lucide
lucratif
lueur
lugubre
luisant
lumière
lunaire
lundi
luron
lutter
luxueux
machine
magasin
magenta
magique
maigre
maillon
maintien
mairie
maison
majorer
malaxer
maléfice
malheur
malice
mallette
mammouth
mandater
maniable
manquant
manteau
manuel
marathon
marbre
marchand
mardi
maritime
marqueur
marron
marteler
mascotte
massif
matériel
matière
matraque
maudire
maussade
mauve
maximal
méchant
méconnu
médaille
médecin
méditer
méduse
meilleur
mélange
mélodie
membre
mémoire
menacer
mener
menhir
mensonge
mentor
mercredi
mérite
merle
messager
mesure
métal
météore
méthode
métier
meuble
miauler
microbe
miette
mignon
migrer
milieu
million
mimique
mince
minéral
minimal
minorer
minute
miracle
miroiter
missile
mixte
mobile
moderne
moelleux
mondial
moniteur
monnaie
monotone
monstre
montagne
monument
moqueur
morceau
morsure
mortier
moteur
motif
mouche
moufle
moulin
mousson
mouton
mouvant
multiple
munition
muraille
murène
murmure
muscle
muséum
musicien
mutation
muter
mutuel
myriade
myrtille
mystère
mythique
nageur
nappe
narquois
narrer
natation
nation
nature
naufrage
nautique
navire
nébuleux
nectar
néfaste
négation
négliger
négocier
neige
nerveux
nettoyer
neurone
neutron
neveu
niche
nickel
nitrate
niveau
noble
nocif
nocturne
noirceur
noisette
nomade
nombreux
nommer
normatif
notable
notifier
notoire
nourrir
nouveau
novateur
novembre
novice
nuage
nuancer
nuire
nuisible
numéro
nuptial
nuque
nutritif
obéir
objectif
obliger
obscur
observer
obstacle
obtenir
obturer
occasion
occuper
océan
octobre
octroyer
octupler
oculaire
odeur
odorant
offenser
officier
offrir
ogive
oiseau
oisillon
olfactif
olivier
ombrage
omettre
onctueux
onduler
onéreux
onirique
opale
opaque
opérer
opinion
opportun
opprimer
opter
optique
orageux
orange
orbite
ordonner
oreille
organe
orgueil
orifice
ornement
orque
ortie
osciller
osmose
ossature
otarie
ouragan
ourson
outil
outrager
ouvrage
ovation
oxyde
oxygène
ozone
paisible
palace
palmarès
palourde
palper
panache
panda
pangolin
paniquer
panneau
panorama
pantalon
papaye
papier
papoter
papyrus
paradoxe
parcelle
paresse
parfumer
parler
parole
parrain
parsemer
partager
parure
parvenir
passion
pastèque
paternel
patience
patron
pavillon
pavoiser
payer
paysage
peigne
peintre
pelage
pélican
pelle
pelouse
peluche
pendule
pénétrer
pénible
pensif
pénurie
pépite
péplum
perdrix
perforer
période
permuter
perplexe
persil
perte
peser
pétale
petit
pétrir
peuple
pharaon
phobie
phoque
photon
phrase
physique
piano
pictural
pièce
pierre
pieuvre
pilote
pinceau
pipette
piquer
pirogue
piscine
piston
pivoter
pixel
pizza
placard
plafond
plaisir
planer
plaque
plastron
plateau
pleurer
plexus
pliage
plomb
plonger
pluie
plumage
pochette
poésie
poète
pointe
poirier
poisson
poivre
polaire
policier
pollen
polygone
pommade
pompier
ponctuel
pondérer
poney
portique
position
posséder
posture
potager
poteau
potion
pouce
poulain
poumon
pourpre
poussin
pouvoir
prairie
pratique
précieux
prédire
préfixe
prélude
prénom
présence
prétexte
prévoir
primitif
prince
prison
priver
problème
procéder
prodige
profond
progrès
proie
projeter
prologue
promener
propre
prospère
protéger
prouesse
proverbe
prudence
pruneau
psychose
public
puceron
puiser
pulpe
pulsar
punaise
punitif
pupitre
purifier
puzzle
pyramide
quasar
querelle
question
quiétude
quitter
quotient
racine
raconter
radieux
ragondin
raideur
raisin
ralentir
rallonge
ramasser
rapide
rasage
ratisser
ravager
ravin
rayonner
réactif
réagir
réaliser
réanimer
recevoir
réciter
réclamer
récolter
recruter
reculer
recycler
rédiger
redouter
refaire
réflexe
réformer
refrain
refuge
régalien
région
réglage
régulier
réitérer
rejeter
rejouer
relatif
relever
relief
remarque
remède
remise
remonter
remplir
remuer
renard
renfort
renifler
renoncer
rentrer
renvoi
replier
reporter
reprise
reptile
requin
réserve
résineux
résoudre
respect
rester
résultat
rétablir
retenir
réticule
retomber
retracer
réunion
réussir
revanche
revivre
révolte
révulsif
richesse
rideau
rieur
rigide
rigoler
rincer
riposter
risible
risque
rituel
rival
rivière
rocheux
romance
rompre
ronce
rondin
roseau
rosier
rotatif
rotor
rotule
rouge
rouille
rouleau
routine
royaume
ruban
rubis
ruche
ruelle
rugueux
ruiner
ruisseau
ruser
rustique
rythme
sabler
saboter
sabre
sacoche
safari
sagesse
saisir
salade
salive
salon
saluer
samedi
sanction
sanglier
sarcasme
sardine
saturer
saugrenu
saumon
sauter
sauvage
savant
savonner
scalpel
scandale
scélérat
scénario
sceptre
schéma
science
scinder
score
scrutin
sculpter
séance
sécable
sécher
secouer
sécréter
sédatif
séduire
seigneur
séjour
sélectif
semaine
sembler
semence
séminal
sénateur
sensible
sentence
séparer
séquence
serein
sergent
sérieux
serrure
sérum
service
sésame
sévir
sevrage
sextuple
sidéral
siècle
siéger
siffler
sigle
signal
silence
silicium
simple
sincère
sinistre
siphon
sirop
sismique
situer
skier
social
socle
sodium
soigneux
soldat
soleil
solitude
soluble
sombre
sommeil
somnoler
sonde
songeur
sonnette
sonore
sorcier
sortir
sosie
sottise
soucieux
soudure
souffle
soulever
soupape
source
soutirer
souvenir
spacieux
spatial
spécial
sphère
spiral
stable
station
sternum
stimulus
stipuler
strict
studieux
stupeur
styliste
sublime
substrat
subtil
subvenir
succès
sucre
suffixe
suggérer
suiveur
sulfate
superbe
supplier
surface
suricate
surmener
surprise
sursaut
survie
suspect
syllabe
symbole
symétrie
synapse
syntaxe
système
tabac
tablier
tactile
tailler
talent
talisman
talonner
tambour
tamiser
tangible
tapis
taquiner
tarder
tarif
tartine
tasse
tatami
tatouage
taupe
taureau
taxer
témoin
temporel
tenaille
tendre
teneur
tenir
tension
terminer
terne
terrible
tétine
texte
thème
théorie
thérapie
thorax
tibia
tiède
timide
tirelire
tiroir
tissu
titane
titre
tituber
toboggan
tolérant
tomate
tonique
tonneau
toponyme
torche
tordre
tornade
torpille
torrent
torse
tortue
totem
toucher
tournage
tousser
toxine
traction
trafic
tragique
trahir
train
trancher
travail
trèfle
tremper
trésor
treuil
triage
tribunal
tricoter
trilogie
triomphe
tripler
triturer
trivial
trombone
tronc
tropical
troupeau
tuile
tulipe
tumulte
tunnel
turbine
tuteur
tutoyer
tuyau
tympan
typhon
typique
tyran
ubuesque
ultime
ultrason
unanime
unifier
union
unique
unitaire
univers
uranium
urbain
urticant
usage
usine
usuel
usure
utile
utopie
vacarme
vaccin
vagabond
vague
vaillant
vaincre
vaisseau
valable
valise
vallon
valve
vampire
vanille
vapeur
varier
vaseux
vassal
vaste
vecteur
vedette
végétal
véhicule
veinard
véloce
vendredi
vénérer
venger
venimeux
ventouse
verdure
vérin
vernir
verrou
verser
vertu
veston
vétéran
vétuste
vexant
vexer
viaduc
viande
victoire
vidange
vidéo
vignette
vigueur
vilain
village
vinaigre
violon
vipère
virement
virtuose
virus
visage
viseur
vision
visqueux
visuel
vital
vitesse
viticole
vitrine
vivace
vivipare
vocation
voguer
voile
voisin
voiture
volaille
volcan
voltiger
volume
vorace
vortex
voter
vouloir
voyage
voyelle
wagon
xénon
yacht
zèbre
zénith
zeste
zoologie`.split(`
`);var ux=`abaco
abbaglio
abbinato
abete
abisso
abolire
abrasivo
abrogato
accadere
accenno
accusato
acetone
achille
acido
acqua
acre
acrilico
acrobata
acuto
adagio
addebito
addome
adeguato
aderire
adipe
adottare
adulare
affabile
affetto
affisso
affranto
aforisma
afoso
africano
agave
agente
agevole
aggancio
agire
agitare
agonismo
agricolo
agrumeto
aguzzo
alabarda
alato
albatro
alberato
albo
albume
alce
alcolico
alettone
alfa
algebra
aliante
alibi
alimento
allagato
allegro
allievo
allodola
allusivo
almeno
alogeno
alpaca
alpestre
altalena
alterno
alticcio
altrove
alunno
alveolo
alzare
amalgama
amanita
amarena
ambito
ambrato
ameba
america
ametista
amico
ammasso
ammenda
ammirare
ammonito
amore
ampio
ampliare
amuleto
anacardo
anagrafe
analista
anarchia
anatra
anca
ancella
ancora
andare
andrea
anello
angelo
angolare
angusto
anima
annegare
annidato
anno
annuncio
anonimo
anticipo
anzi
apatico
apertura
apode
apparire
appetito
appoggio
approdo
appunto
aprile
arabica
arachide
aragosta
araldica
arancio
aratura
arazzo
arbitro
archivio
ardito
arenile
argento
argine
arguto
aria
armonia
arnese
arredato
arringa
arrosto
arsenico
arso
artefice
arzillo
asciutto
ascolto
asepsi
asettico
asfalto
asino
asola
aspirato
aspro
assaggio
asse
assoluto
assurdo
asta
astenuto
astice
astratto
atavico
ateismo
atomico
atono
attesa
attivare
attorno
attrito
attuale
ausilio
austria
autista
autonomo
autunno
avanzato
avere
avvenire
avviso
avvolgere
azione
azoto
azzimo
azzurro
babele
baccano
bacino
baco
badessa
badilata
bagnato
baita
balcone
baldo
balena
ballata
balzano
bambino
bandire
baraonda
barbaro
barca
baritono
barlume
barocco
basilico
basso
batosta
battuto
baule
bava
bavosa
becco
beffa
belgio
belva
benda
benevole
benigno
benzina
bere
berlina
beta
bibita
bici
bidone
bifido
biga
bilancia
bimbo
binocolo
biologo
bipede
bipolare
birbante
birra
biscotto
bisesto
bisnonno
bisonte
bisturi
bizzarro
blando
blatta
bollito
bonifico
bordo
bosco
botanico
bottino
bozzolo
braccio
bradipo
brama
branca
bravura
bretella
brevetto
brezza
briglia
brillante
brindare
broccolo
brodo
bronzina
brullo
bruno
bubbone
buca
budino
buffone
buio
bulbo
buono
burlone
burrasca
bussola
busta
cadetto
caduco
calamaro
calcolo
calesse
calibro
calmo
caloria
cambusa
camerata
camicia
cammino
camola
campale
canapa
candela
cane
canino
canotto
cantina
capace
capello
capitolo
capogiro
cappero
capra
capsula
carapace
carcassa
cardo
carisma
carovana
carretto
cartolina
casaccio
cascata
caserma
caso
cassone
castello
casuale
catasta
catena
catrame
cauto
cavillo
cedibile
cedrata
cefalo
celebre
cellulare
cena
cenone
centesimo
ceramica
cercare
certo
cerume
cervello
cesoia
cespo
ceto
chela
chiaro
chicca
chiedere
chimera
china
chirurgo
chitarra
ciao
ciclismo
cifrare
cigno
cilindro
ciottolo
circa
cirrosi
citrico
cittadino
ciuffo
civetta
civile
classico
clinica
cloro
cocco
codardo
codice
coerente
cognome
collare
colmato
colore
colposo
coltivato
colza
coma
cometa
commando
comodo
computer
comune
conciso
condurre
conferma
congelare
coniuge
connesso
conoscere
consumo
continuo
convegno
coperto
copione
coppia
copricapo
corazza
cordata
coricato
cornice
corolla
corpo
corredo
corsia
cortese
cosmico
costante
cottura
covato
cratere
cravatta
creato
credere
cremoso
crescita
creta
criceto
crinale
crisi
critico
croce
cronaca
crostata
cruciale
crusca
cucire
cuculo
cugino
cullato
cupola
curatore
cursore
curvo
cuscino
custode
dado
daino
dalmata
damerino
daniela
dannoso
danzare
datato
davanti
davvero
debutto
decennio
deciso
declino
decollo
decreto
dedicato
definito
deforme
degno
delegare
delfino
delirio
delta
demenza
denotato
dentro
deposito
derapata
derivare
deroga
descritto
deserto
desiderio
desumere
detersivo
devoto
diametro
dicembre
diedro
difeso
diffuso
digerire
digitale
diluvio
dinamico
dinnanzi
dipinto
diploma
dipolo
diradare
dire
dirotto
dirupo
disagio
discreto
disfare
disgelo
disposto
distanza
disumano
dito
divano
divelto
dividere
divorato
doblone
docente
doganale
dogma
dolce
domato
domenica
dominare
dondolo
dono
dormire
dote
dottore
dovuto
dozzina
drago
druido
dubbio
dubitare
ducale
duna
duomo
duplice
duraturo
ebano
eccesso
ecco
eclissi
economia
edera
edicola
edile
editoria
educare
egemonia
egli
egoismo
egregio
elaborato
elargire
elegante
elencato
eletto
elevare
elfico
elica
elmo
elsa
eluso
emanato
emblema
emesso
emiro
emotivo
emozione
empirico
emulo
endemico
enduro
energia
enfasi
enoteca
entrare
enzima
epatite
epilogo
episodio
epocale
eppure
equatore
erario
erba
erboso
erede
eremita
erigere
ermetico
eroe
erosivo
errante
esagono
esame
esanime
esaudire
esca
esempio
esercito
esibito
esigente
esistere
esito
esofago
esortato
esoso
espanso
espresso
essenza
esso
esteso
estimare
estonia
estroso
esultare
etilico
etnico
etrusco
etto
euclideo
europa
evaso
evidenza
evitato
evoluto
evviva
fabbrica
faccenda
fachiro
falco
famiglia
fanale
fanfara
fango
fantasma
fare
farfalla
farinoso
farmaco
fascia
fastoso
fasullo
faticare
fato
favoloso
febbre
fecola
fede
fegato
felpa
feltro
femmina
fendere
fenomeno
fermento
ferro
fertile
fessura
festivo
fetta
feudo
fiaba
fiducia
fifa
figurato
filo
finanza
finestra
finire
fiore
fiscale
fisico
fiume
flacone
flamenco
flebo
flemma
florido
fluente
fluoro
fobico
focaccia
focoso
foderato
foglio
folata
folclore
folgore
fondente
fonetico
fonia
fontana
forbito
forchetta
foresta
formica
fornaio
foro
fortezza
forzare
fosfato
fosso
fracasso
frana
frassino
fratello
freccetta
frenata
fresco
frigo
frollino
fronde
frugale
frutta
fucilata
fucsia
fuggente
fulmine
fulvo
fumante
fumetto
fumoso
fune
funzione
fuoco
furbo
furgone
furore
fuso
futile
gabbiano
gaffe
galateo
gallina
galoppo
gambero
gamma
garanzia
garbo
garofano
garzone
gasdotto
gasolio
gastrico
gatto
gaudio
gazebo
gazzella
geco
gelatina
gelso
gemello
gemmato
gene
genitore
gennaio
genotipo
gergo
ghepardo
ghiaccio
ghisa
giallo
gilda
ginepro
giocare
gioiello
giorno
giove
girato
girone
gittata
giudizio
giurato
giusto
globulo
glutine
gnomo
gobba
golf
gomito
gommone
gonfio
gonna
governo
gracile
grado
grafico
grammo
grande
grattare
gravoso
grazia
greca
gregge
grifone
grigio
grinza
grotta
gruppo
guadagno
guaio
guanto
guardare
gufo
guidare
ibernato
icona
identico
idillio
idolo
idra
idrico
idrogeno
igiene
ignaro
ignorato
ilare
illeso
illogico
illudere
imballo
imbevuto
imbocco
imbuto
immane
immerso
immolato
impacco
impeto
impiego
importo
impronta
inalare
inarcare
inattivo
incanto
incendio
inchino
incisivo
incluso
incontro
incrocio
incubo
indagine
india
indole
inedito
infatti
infilare
inflitto
ingaggio
ingegno
inglese
ingordo
ingrosso
innesco
inodore
inoltrare
inondato
insano
insetto
insieme
insonnia
insulina
intasato
intero
intonaco
intuito
inumidire
invalido
invece
invito
iperbole
ipnotico
ipotesi
ippica
iride
irlanda
ironico
irrigato
irrorare
isolato
isotopo
isterico
istituto
istrice
italia
iterare
labbro
labirinto
lacca
lacerato
lacrima
lacuna
laddove
lago
lampo
lancetta
lanterna
lardoso
larga
laringe
lastra
latenza
latino
lattuga
lavagna
lavoro
legale
leggero
lembo
lentezza
lenza
leone
lepre
lesivo
lessato
lesto
letterale
leva
levigato
libero
lido
lievito
lilla
limatura
limitare
limpido
lineare
lingua
liquido
lira
lirica
lisca
lite
litigio
livrea
locanda
lode
logica
lombare
londra
longevo
loquace
lorenzo
loto
lotteria
luce
lucidato
lumaca
luminoso
lungo
lupo
luppolo
lusinga
lusso
lutto
macabro
macchina
macero
macinato
madama
magico
maglia
magnete
magro
maiolica
malafede
malgrado
malinteso
malsano
malto
malumore
mana
mancia
mandorla
mangiare
manifesto
mannaro
manovra
mansarda
mantide
manubrio
mappa
maratona
marcire
maretta
marmo
marsupio
maschera
massaia
mastino
materasso
matricola
mattone
maturo
mazurca
meandro
meccanico
mecenate
medesimo
meditare
mega
melassa
melis
melodia
meninge
meno
mensola
mercurio
merenda
merlo
meschino
mese
messere
mestolo
metallo
metodo
mettere
miagolare
mica
micelio
michele
microbo
midollo
miele
migliore
milano
milite
mimosa
minerale
mini
minore
mirino
mirtillo
miscela
missiva
misto
misurare
mitezza
mitigare
mitra
mittente
mnemonico
modello
modifica
modulo
mogano
mogio
mole
molosso
monastero
monco
mondina
monetario
monile
monotono
monsone
montato
monviso
mora
mordere
morsicato
mostro
motivato
motosega
motto
movenza
movimento
mozzo
mucca
mucosa
muffa
mughetto
mugnaio
mulatto
mulinello
multiplo
mummia
munto
muovere
murale
musa
muscolo
musica
mutevole
muto
nababbo
nafta
nanometro
narciso
narice
narrato
nascere
nastrare
naturale
nautica
naviglio
nebulosa
necrosi
negativo
negozio
nemmeno
neofita
neretto
nervo
nessuno
nettuno
neutrale
neve
nevrotico
nicchia
ninfa
nitido
nobile
nocivo
nodo
nome
nomina
nordico
normale
norvegese
nostrano
notare
notizia
notturno
novella
nucleo
nulla
numero
nuovo
nutrire
nuvola
nuziale
oasi
obbedire
obbligo
obelisco
oblio
obolo
obsoleto
occasione
occhio
occidente
occorrere
occultare
ocra
oculato
odierno
odorare
offerta
offrire
offuscato
oggetto
oggi
ognuno
olandese
olfatto
oliato
oliva
ologramma
oltre
omaggio
ombelico
ombra
omega
omissione
ondoso
onere
onice
onnivoro
onorevole
onta
operato
opinione
opposto
oracolo
orafo
ordine
orecchino
orefice
orfano
organico
origine
orizzonte
orma
ormeggio
ornativo
orologio
orrendo
orribile
ortensia
ortica
orzata
orzo
osare
oscurare
osmosi
ospedale
ospite
ossa
ossidare
ostacolo
oste
otite
otre
ottagono
ottimo
ottobre
ovale
ovest
ovino
oviparo
ovocito
ovunque
ovviare
ozio
pacchetto
pace
pacifico
padella
padrone
paese
paga
pagina
palazzina
palesare
pallido
palo
palude
pandoro
pannello
paolo
paonazzo
paprica
parabola
parcella
parere
pargolo
pari
parlato
parola
partire
parvenza
parziale
passivo
pasticca
patacca
patologia
pattume
pavone
peccato
pedalare
pedonale
peggio
peloso
penare
pendice
penisola
pennuto
penombra
pensare
pentola
pepe
pepita
perbene
percorso
perdonato
perforare
pergamena
periodo
permesso
perno
perplesso
persuaso
pertugio
pervaso
pesatore
pesista
peso
pestifero
petalo
pettine
petulante
pezzo
piacere
pianta
piattino
piccino
picozza
piega
pietra
piffero
pigiama
pigolio
pigro
pila
pilifero
pillola
pilota
pimpante
pineta
pinna
pinolo
pioggia
piombo
piramide
piretico
pirite
pirolisi
pitone
pizzico
placebo
planare
plasma
platano
plenario
pochezza
poderoso
podismo
poesia
poggiare
polenta
poligono
pollice
polmonite
polpetta
polso
poltrona
polvere
pomice
pomodoro
ponte
popoloso
porfido
poroso
porpora
porre
portata
posa
positivo
possesso
postulato
potassio
potere
pranzo
prassi
pratica
precluso
predica
prefisso
pregiato
prelievo
premere
prenotare
preparato
presenza
pretesto
prevalso
prima
principe
privato
problema
procura
produrre
profumo
progetto
prolunga
promessa
pronome
proposta
proroga
proteso
prova
prudente
prugna
prurito
psiche
pubblico
pudica
pugilato
pugno
pulce
pulito
pulsante
puntare
pupazzo
pupilla
puro
quadro
qualcosa
quasi
querela
quota
raccolto
raddoppio
radicale
radunato
raffica
ragazzo
ragione
ragno
ramarro
ramingo
ramo
randagio
rantolare
rapato
rapina
rappreso
rasatura
raschiato
rasente
rassegna
rastrello
rata
ravveduto
reale
recepire
recinto
recluta
recondito
recupero
reddito
redimere
regalato
registro
regola
regresso
relazione
remare
remoto
renna
replica
reprimere
reputare
resa
residente
responso
restauro
rete
retina
retorica
rettifica
revocato
riassunto
ribadire
ribelle
ribrezzo
ricarica
ricco
ricevere
riciclato
ricordo
ricreduto
ridicolo
ridurre
rifasare
riflesso
riforma
rifugio
rigare
rigettato
righello
rilassato
rilevato
rimanere
rimbalzo
rimedio
rimorchio
rinascita
rincaro
rinforzo
rinnovo
rinomato
rinsavito
rintocco
rinuncia
rinvenire
riparato
ripetuto
ripieno
riportare
ripresa
ripulire
risata
rischio
riserva
risibile
riso
rispetto
ristoro
risultato
risvolto
ritardo
ritegno
ritmico
ritrovo
riunione
riva
riverso
rivincita
rivolto
rizoma
roba
robotico
robusto
roccia
roco
rodaggio
rodere
roditore
rogito
rollio
romantico
rompere
ronzio
rosolare
rospo
rotante
rotondo
rotula
rovescio
rubizzo
rubrica
ruga
rullino
rumine
rumoroso
ruolo
rupe
russare
rustico
sabato
sabbiare
sabotato
sagoma
salasso
saldatura
salgemma
salivare
salmone
salone
saltare
saluto
salvo
sapere
sapido
saporito
saraceno
sarcasmo
sarto
sassoso
satellite
satira
satollo
saturno
savana
savio
saziato
sbadiglio
sbalzo
sbancato
sbarra
sbattere
sbavare
sbendare
sbirciare
sbloccato
sbocciato
sbrinare
sbruffone
sbuffare
scabroso
scadenza
scala
scambiare
scandalo
scapola
scarso
scatenare
scavato
scelto
scenico
scettro
scheda
schiena
sciarpa
scienza
scindere
scippo
sciroppo
scivolo
sclerare
scodella
scolpito
scomparto
sconforto
scoprire
scorta
scossone
scozzese
scriba
scrollare
scrutinio
scuderia
scultore
scuola
scuro
scusare
sdebitare
sdoganare
seccatura
secondo
sedano
seggiola
segnalato
segregato
seguito
selciato
selettivo
sella
selvaggio
semaforo
sembrare
seme
seminato
sempre
senso
sentire
sepolto
sequenza
serata
serbato
sereno
serio
serpente
serraglio
servire
sestina
setola
settimana
sfacelo
sfaldare
sfamato
sfarzoso
sfaticato
sfera
sfida
sfilato
sfinge
sfocato
sfoderare
sfogo
sfoltire
sforzato
sfratto
sfruttato
sfuggito
sfumare
sfuso
sgabello
sgarbato
sgonfiare
sgorbio
sgrassato
sguardo
sibilo
siccome
sierra
sigla
signore
silenzio
sillaba
simbolo
simpatico
simulato
sinfonia
singolo
sinistro
sino
sintesi
sinusoide
sipario
sisma
sistole
situato
slitta
slogatura
sloveno
smarrito
smemorato
smentito
smeraldo
smilzo
smontare
smottato
smussato
snellire
snervato
snodo
sobbalzo
sobrio
soccorso
sociale
sodale
soffitto
sogno
soldato
solenne
solido
sollazzo
solo
solubile
solvente
somatico
somma
sonda
sonetto
sonnifero
sopire
soppeso
sopra
sorgere
sorpasso
sorriso
sorso
sorteggio
sorvolato
sospiro
sosta
sottile
spada
spalla
spargere
spatola
spavento
spazzola
specie
spedire
spegnere
spelatura
speranza
spessore
spettrale
spezzato
spia
spigoloso
spillato
spinoso
spirale
splendido
sportivo
sposo
spranga
sprecare
spronato
spruzzo
spuntino
squillo
sradicare
srotolato
stabile
stacco
staffa
stagnare
stampato
stantio
starnuto
stasera
statuto
stelo
steppa
sterzo
stiletto
stima
stirpe
stivale
stizzoso
stonato
storico
strappo
stregato
stridulo
strozzare
strutto
stuccare
stufo
stupendo
subentro
succoso
sudore
suggerito
sugo
sultano
suonare
superbo
supporto
surgelato
surrogato
sussurro
sutura
svagare
svedese
sveglio
svelare
svenuto
svezia
sviluppo
svista
svizzera
svolta
svuotare
tabacco
tabulato
tacciare
taciturno
tale
talismano
tampone
tannino
tara
tardivo
targato
tariffa
tarpare
tartaruga
tasto
tattico
taverna
tavolata
tazza
teca
tecnico
telefono
temerario
tempo
temuto
tendone
tenero
tensione
tentacolo
teorema
terme
terrazzo
terzetto
tesi
tesserato
testato
tetro
tettoia
tifare
tigella
timbro
tinto
tipico
tipografo
tiraggio
tiro
titanio
titolo
titubante
tizio
tizzone
toccare
tollerare
tolto
tombola
tomo
tonfo
tonsilla
topazio
topologia
toppa
torba
tornare
torrone
tortora
toscano
tossire
tostatura
totano
trabocco
trachea
trafila
tragedia
tralcio
tramonto
transito
trapano
trarre
trasloco
trattato
trave
treccia
tremolio
trespolo
tributo
tricheco
trifoglio
trillo
trincea
trio
tristezza
triturato
trivella
tromba
trono
troppo
trottola
trovare
truccato
tubatura
tuffato
tulipano
tumulto
tunisia
turbare
turchino
tuta
tutela
ubicato
uccello
uccisore
udire
uditivo
uffa
ufficio
uguale
ulisse
ultimato
umano
umile
umorismo
uncinetto
ungere
ungherese
unicorno
unificato
unisono
unitario
unte
uovo
upupa
uragano
urgenza
urlo
usanza
usato
uscito
usignolo
usuraio
utensile
utilizzo
utopia
vacante
vaccinato
vagabondo
vagliato
valanga
valgo
valico
valletta
valoroso
valutare
valvola
vampata
vangare
vanitoso
vano
vantaggio
vanvera
vapore
varano
varcato
variante
vasca
vedetta
vedova
veduto
vegetale
veicolo
velcro
velina
velluto
veloce
venato
vendemmia
vento
verace
verbale
vergogna
verifica
vero
verruca
verticale
vescica
vessillo
vestale
veterano
vetrina
vetusto
viandante
vibrante
vicenda
vichingo
vicinanza
vidimare
vigilia
vigneto
vigore
vile
villano
vimini
vincitore
viola
vipera
virgola
virologo
virulento
viscoso
visione
vispo
vissuto
visura
vita
vitello
vittima
vivanda
vivido
viziare
voce
voga
volatile
volere
volpe
voragine
vulcano
zampogna
zanna
zappato
zattera
zavorra
zefiro
zelante
zelo
zenzero
zerbino
zibetto
zinco
zircone
zitto
zolla
zotico
zucchero
zufolo
zulu
zuppa`.split(`
`);var px=`あいこくしん
あいさつ
あいだ
あおぞら
あかちゃん
あきる
あけがた
あける
あこがれる
あさい
あさひ
あしあと
あじわう
あずかる
あずき
あそぶ
あたえる
あたためる
あたりまえ
あたる
あつい
あつかう
あっしゅく
あつまり
あつめる
あてな
あてはまる
あひる
あぶら
あぶる
あふれる
あまい
あまど
あまやかす
あまり
あみもの
あめりか
あやまる
あゆむ
あらいぐま
あらし
あらすじ
あらためる
あらゆる
あらわす
ありがとう
あわせる
あわてる
あんい
あんがい
あんこ
あんぜん
あんてい
あんない
あんまり
いいだす
いおん
いがい
いがく
いきおい
いきなり
いきもの
いきる
いくじ
いくぶん
いけばな
いけん
いこう
いこく
いこつ
いさましい
いさん
いしき
いじゅう
いじょう
いじわる
いずみ
いずれ
いせい
いせえび
いせかい
いせき
いぜん
いそうろう
いそがしい
いだい
いだく
いたずら
いたみ
いたりあ
いちおう
いちじ
いちど
いちば
いちぶ
いちりゅう
いつか
いっしゅん
いっせい
いっそう
いったん
いっち
いってい
いっぽう
いてざ
いてん
いどう
いとこ
いない
いなか
いねむり
いのち
いのる
いはつ
いばる
いはん
いびき
いひん
いふく
いへん
いほう
いみん
いもうと
いもたれ
いもり
いやがる
いやす
いよかん
いよく
いらい
いらすと
いりぐち
いりょう
いれい
いれもの
いれる
いろえんぴつ
いわい
いわう
いわかん
いわば
いわゆる
いんげんまめ
いんさつ
いんしょう
いんよう
うえき
うえる
うおざ
うがい
うかぶ
うかべる
うきわ
うくらいな
うくれれ
うけたまわる
うけつけ
うけとる
うけもつ
うける
うごかす
うごく
うこん
うさぎ
うしなう
うしろがみ
うすい
うすぎ
うすぐらい
うすめる
うせつ
うちあわせ
うちがわ
うちき
うちゅう
うっかり
うつくしい
うったえる
うつる
うどん
うなぎ
うなじ
うなずく
うなる
うねる
うのう
うぶげ
うぶごえ
うまれる
うめる
うもう
うやまう
うよく
うらがえす
うらぐち
うらない
うりあげ
うりきれ
うるさい
うれしい
うれゆき
うれる
うろこ
うわき
うわさ
うんこう
うんちん
うんてん
うんどう
えいえん
えいが
えいきょう
えいご
えいせい
えいぶん
えいよう
えいわ
えおり
えがお
えがく
えきたい
えくせる
えしゃく
えすて
えつらん
えのぐ
えほうまき
えほん
えまき
えもじ
えもの
えらい
えらぶ
えりあ
えんえん
えんかい
えんぎ
えんげき
えんしゅう
えんぜつ
えんそく
えんちょう
えんとつ
おいかける
おいこす
おいしい
おいつく
おうえん
おうさま
おうじ
おうせつ
おうたい
おうふく
おうべい
おうよう
おえる
おおい
おおう
おおどおり
おおや
おおよそ
おかえり
おかず
おがむ
おかわり
おぎなう
おきる
おくさま
おくじょう
おくりがな
おくる
おくれる
おこす
おこなう
おこる
おさえる
おさない
おさめる
おしいれ
おしえる
おじぎ
おじさん
おしゃれ
おそらく
おそわる
おたがい
おたく
おだやか
おちつく
おっと
おつり
おでかけ
おとしもの
おとなしい
おどり
おどろかす
おばさん
おまいり
おめでとう
おもいで
おもう
おもたい
おもちゃ
おやつ
おやゆび
およぼす
おらんだ
おろす
おんがく
おんけい
おんしゃ
おんせん
おんだん
おんちゅう
おんどけい
かあつ
かいが
がいき
がいけん
がいこう
かいさつ
かいしゃ
かいすいよく
かいぜん
かいぞうど
かいつう
かいてん
かいとう
かいふく
がいへき
かいほう
かいよう
がいらい
かいわ
かえる
かおり
かかえる
かがく
かがし
かがみ
かくご
かくとく
かざる
がぞう
かたい
かたち
がちょう
がっきゅう
がっこう
がっさん
がっしょう
かなざわし
かのう
がはく
かぶか
かほう
かほご
かまう
かまぼこ
かめれおん
かゆい
かようび
からい
かるい
かろう
かわく
かわら
がんか
かんけい
かんこう
かんしゃ
かんそう
かんたん
かんち
がんばる
きあい
きあつ
きいろ
ぎいん
きうい
きうん
きえる
きおう
きおく
きおち
きおん
きかい
きかく
きかんしゃ
ききて
きくばり
きくらげ
きけんせい
きこう
きこえる
きこく
きさい
きさく
きさま
きさらぎ
ぎじかがく
ぎしき
ぎじたいけん
ぎじにってい
ぎじゅつしゃ
きすう
きせい
きせき
きせつ
きそう
きぞく
きぞん
きたえる
きちょう
きつえん
ぎっちり
きつつき
きつね
きてい
きどう
きどく
きない
きなが
きなこ
きぬごし
きねん
きのう
きのした
きはく
きびしい
きひん
きふく
きぶん
きぼう
きほん
きまる
きみつ
きむずかしい
きめる
きもだめし
きもち
きもの
きゃく
きやく
ぎゅうにく
きよう
きょうりゅう
きらい
きらく
きりん
きれい
きれつ
きろく
ぎろん
きわめる
ぎんいろ
きんかくじ
きんじょ
きんようび
ぐあい
くいず
くうかん
くうき
くうぐん
くうこう
ぐうせい
くうそう
ぐうたら
くうふく
くうぼ
くかん
くきょう
くげん
ぐこう
くさい
くさき
くさばな
くさる
くしゃみ
くしょう
くすのき
くすりゆび
くせげ
くせん
ぐたいてき
くださる
くたびれる
くちこみ
くちさき
くつした
ぐっすり
くつろぐ
くとうてん
くどく
くなん
くねくね
くのう
くふう
くみあわせ
くみたてる
くめる
くやくしょ
くらす
くらべる
くるま
くれる
くろう
くわしい
ぐんかん
ぐんしょく
ぐんたい
ぐんて
けあな
けいかく
けいけん
けいこ
けいさつ
げいじゅつ
けいたい
げいのうじん
けいれき
けいろ
けおとす
けおりもの
げきか
げきげん
げきだん
げきちん
げきとつ
げきは
げきやく
げこう
げこくじょう
げざい
けさき
げざん
けしき
けしごむ
けしょう
げすと
けたば
けちゃっぷ
けちらす
けつあつ
けつい
けつえき
けっこん
けつじょ
けっせき
けってい
けつまつ
げつようび
げつれい
けつろん
げどく
けとばす
けとる
けなげ
けなす
けなみ
けぬき
げねつ
けねん
けはい
げひん
けぶかい
げぼく
けまり
けみかる
けむし
けむり
けもの
けらい
けろけろ
けわしい
けんい
けんえつ
けんお
けんか
げんき
けんげん
けんこう
けんさく
けんしゅう
けんすう
げんそう
けんちく
けんてい
けんとう
けんない
けんにん
げんぶつ
けんま
けんみん
けんめい
けんらん
けんり
こあくま
こいぬ
こいびと
ごうい
こうえん
こうおん
こうかん
ごうきゅう
ごうけい
こうこう
こうさい
こうじ
こうすい
ごうせい
こうそく
こうたい
こうちゃ
こうつう
こうてい
こうどう
こうない
こうはい
ごうほう
ごうまん
こうもく
こうりつ
こえる
こおり
ごかい
ごがつ
ごかん
こくご
こくさい
こくとう
こくない
こくはく
こぐま
こけい
こける
ここのか
こころ
こさめ
こしつ
こすう
こせい
こせき
こぜん
こそだて
こたい
こたえる
こたつ
こちょう
こっか
こつこつ
こつばん
こつぶ
こてい
こてん
ことがら
ことし
ことば
ことり
こなごな
こねこね
このまま
このみ
このよ
ごはん
こひつじ
こふう
こふん
こぼれる
ごまあぶら
こまかい
ごますり
こまつな
こまる
こむぎこ
こもじ
こもち
こもの
こもん
こやく
こやま
こゆう
こゆび
こよい
こよう
こりる
これくしょん
ころっけ
こわもて
こわれる
こんいん
こんかい
こんき
こんしゅう
こんすい
こんだて
こんとん
こんなん
こんびに
こんぽん
こんまけ
こんや
こんれい
こんわく
ざいえき
さいかい
さいきん
ざいげん
ざいこ
さいしょ
さいせい
ざいたく
ざいちゅう
さいてき
ざいりょう
さうな
さかいし
さがす
さかな
さかみち
さがる
さぎょう
さくし
さくひん
さくら
さこく
さこつ
さずかる
ざせき
さたん
さつえい
ざつおん
ざっか
ざつがく
さっきょく
ざっし
さつじん
ざっそう
さつたば
さつまいも
さてい
さといも
さとう
さとおや
さとし
さとる
さのう
さばく
さびしい
さべつ
さほう
さほど
さます
さみしい
さみだれ
さむけ
さめる
さやえんどう
さゆう
さよう
さよく
さらだ
ざるそば
さわやか
さわる
さんいん
さんか
さんきゃく
さんこう
さんさい
ざんしょ
さんすう
さんせい
さんそ
さんち
さんま
さんみ
さんらん
しあい
しあげ
しあさって
しあわせ
しいく
しいん
しうち
しえい
しおけ
しかい
しかく
じかん
しごと
しすう
じだい
したうけ
したぎ
したて
したみ
しちょう
しちりん
しっかり
しつじ
しつもん
してい
してき
してつ
じてん
じどう
しなぎれ
しなもの
しなん
しねま
しねん
しのぐ
しのぶ
しはい
しばかり
しはつ
しはらい
しはん
しひょう
しふく
じぶん
しへい
しほう
しほん
しまう
しまる
しみん
しむける
じむしょ
しめい
しめる
しもん
しゃいん
しゃうん
しゃおん
じゃがいも
しやくしょ
しゃくほう
しゃけん
しゃこ
しゃざい
しゃしん
しゃせん
しゃそう
しゃたい
しゃちょう
しゃっきん
じゃま
しゃりん
しゃれい
じゆう
じゅうしょ
しゅくはく
じゅしん
しゅっせき
しゅみ
しゅらば
じゅんばん
しょうかい
しょくたく
しょっけん
しょどう
しょもつ
しらせる
しらべる
しんか
しんこう
じんじゃ
しんせいじ
しんちく
しんりん
すあげ
すあし
すあな
ずあん
すいえい
すいか
すいとう
ずいぶん
すいようび
すうがく
すうじつ
すうせん
すおどり
すきま
すくう
すくない
すける
すごい
すこし
ずさん
すずしい
すすむ
すすめる
すっかり
ずっしり
ずっと
すてき
すてる
すねる
すのこ
すはだ
すばらしい
ずひょう
ずぶぬれ
すぶり
すふれ
すべて
すべる
ずほう
すぼん
すまい
すめし
すもう
すやき
すらすら
するめ
すれちがう
すろっと
すわる
すんぜん
すんぽう
せあぶら
せいかつ
せいげん
せいじ
せいよう
せおう
せかいかん
せきにん
せきむ
せきゆ
せきらんうん
せけん
せこう
せすじ
せたい
せたけ
せっかく
せっきゃく
ぜっく
せっけん
せっこつ
せっさたくま
せつぞく
せつだん
せつでん
せっぱん
せつび
せつぶん
せつめい
せつりつ
せなか
せのび
せはば
せびろ
せぼね
せまい
せまる
せめる
せもたれ
せりふ
ぜんあく
せんい
せんえい
せんか
せんきょ
せんく
せんげん
ぜんご
せんさい
せんしゅ
せんすい
せんせい
せんぞ
せんたく
せんちょう
せんてい
せんとう
せんぬき
せんねん
せんぱい
ぜんぶ
ぜんぽう
せんむ
せんめんじょ
せんもん
せんやく
せんゆう
せんよう
ぜんら
ぜんりゃく
せんれい
せんろ
そあく
そいとげる
そいね
そうがんきょう
そうき
そうご
そうしん
そうだん
そうなん
そうび
そうめん
そうり
そえもの
そえん
そがい
そげき
そこう
そこそこ
そざい
そしな
そせい
そせん
そそぐ
そだてる
そつう
そつえん
そっかん
そつぎょう
そっけつ
そっこう
そっせん
そっと
そとがわ
そとづら
そなえる
そなた
そふぼ
そぼく
そぼろ
そまつ
そまる
そむく
そむりえ
そめる
そもそも
そよかぜ
そらまめ
そろう
そんかい
そんけい
そんざい
そんしつ
そんぞく
そんちょう
ぞんび
ぞんぶん
そんみん
たあい
たいいん
たいうん
たいえき
たいおう
だいがく
たいき
たいぐう
たいけん
たいこ
たいざい
だいじょうぶ
だいすき
たいせつ
たいそう
だいたい
たいちょう
たいてい
だいどころ
たいない
たいねつ
たいのう
たいはん
だいひょう
たいふう
たいへん
たいほ
たいまつばな
たいみんぐ
たいむ
たいめん
たいやき
たいよう
たいら
たいりょく
たいる
たいわん
たうえ
たえる
たおす
たおる
たおれる
たかい
たかね
たきび
たくさん
たこく
たこやき
たさい
たしざん
だじゃれ
たすける
たずさわる
たそがれ
たたかう
たたく
ただしい
たたみ
たちばな
だっかい
だっきゃく
だっこ
だっしゅつ
だったい
たてる
たとえる
たなばた
たにん
たぬき
たのしみ
たはつ
たぶん
たべる
たぼう
たまご
たまる
だむる
ためいき
ためす
ためる
たもつ
たやすい
たよる
たらす
たりきほんがん
たりょう
たりる
たると
たれる
たれんと
たろっと
たわむれる
だんあつ
たんい
たんおん
たんか
たんき
たんけん
たんご
たんさん
たんじょうび
だんせい
たんそく
たんたい
だんち
たんてい
たんとう
だんな
たんにん
だんねつ
たんのう
たんぴん
だんぼう
たんまつ
たんめい
だんれつ
だんろ
だんわ
ちあい
ちあん
ちいき
ちいさい
ちえん
ちかい
ちから
ちきゅう
ちきん
ちけいず
ちけん
ちこく
ちさい
ちしき
ちしりょう
ちせい
ちそう
ちたい
ちたん
ちちおや
ちつじょ
ちてき
ちてん
ちぬき
ちぬり
ちのう
ちひょう
ちへいせん
ちほう
ちまた
ちみつ
ちみどろ
ちめいど
ちゃんこなべ
ちゅうい
ちゆりょく
ちょうし
ちょさくけん
ちらし
ちらみ
ちりがみ
ちりょう
ちるど
ちわわ
ちんたい
ちんもく
ついか
ついたち
つうか
つうじょう
つうはん
つうわ
つかう
つかれる
つくね
つくる
つけね
つける
つごう
つたえる
つづく
つつじ
つつむ
つとめる
つながる
つなみ
つねづね
つのる
つぶす
つまらない
つまる
つみき
つめたい
つもり
つもる
つよい
つるぼ
つるみく
つわもの
つわり
てあし
てあて
てあみ
ていおん
ていか
ていき
ていけい
ていこく
ていさつ
ていし
ていせい
ていたい
ていど
ていねい
ていひょう
ていへん
ていぼう
てうち
ておくれ
てきとう
てくび
でこぼこ
てさぎょう
てさげ
てすり
てそう
てちがい
てちょう
てつがく
てつづき
でっぱ
てつぼう
てつや
でぬかえ
てぬき
てぬぐい
てのひら
てはい
てぶくろ
てふだ
てほどき
てほん
てまえ
てまきずし
てみじか
てみやげ
てらす
てれび
てわけ
てわたし
でんあつ
てんいん
てんかい
てんき
てんぐ
てんけん
てんごく
てんさい
てんし
てんすう
でんち
てんてき
てんとう
てんない
てんぷら
てんぼうだい
てんめつ
てんらんかい
でんりょく
でんわ
どあい
といれ
どうかん
とうきゅう
どうぐ
とうし
とうむぎ
とおい
とおか
とおく
とおす
とおる
とかい
とかす
ときおり
ときどき
とくい
とくしゅう
とくてん
とくに
とくべつ
とけい
とける
とこや
とさか
としょかん
とそう
とたん
とちゅう
とっきゅう
とっくん
とつぜん
とつにゅう
とどける
ととのえる
とない
となえる
となり
とのさま
とばす
どぶがわ
とほう
とまる
とめる
ともだち
ともる
どようび
とらえる
とんかつ
どんぶり
ないかく
ないこう
ないしょ
ないす
ないせん
ないそう
なおす
ながい
なくす
なげる
なこうど
なさけ
なたでここ
なっとう
なつやすみ
ななおし
なにごと
なにもの
なにわ
なのか
なふだ
なまいき
なまえ
なまみ
なみだ
なめらか
なめる
なやむ
ならう
ならび
ならぶ
なれる
なわとび
なわばり
にあう
にいがた
にうけ
におい
にかい
にがて
にきび
にくしみ
にくまん
にげる
にさんかたんそ
にしき
にせもの
にちじょう
にちようび
にっか
にっき
にっけい
にっこう
にっさん
にっしょく
にっすう
にっせき
にってい
になう
にほん
にまめ
にもつ
にやり
にゅういん
にりんしゃ
にわとり
にんい
にんか
にんき
にんげん
にんしき
にんずう
にんそう
にんたい
にんち
にんてい
にんにく
にんぷ
にんまり
にんむ
にんめい
にんよう
ぬいくぎ
ぬかす
ぬぐいとる
ぬぐう
ぬくもり
ぬすむ
ぬまえび
ぬめり
ぬらす
ぬんちゃく
ねあげ
ねいき
ねいる
ねいろ
ねぐせ
ねくたい
ねくら
ねこぜ
ねこむ
ねさげ
ねすごす
ねそべる
ねだん
ねつい
ねっしん
ねつぞう
ねったいぎょ
ねぶそく
ねふだ
ねぼう
ねほりはほり
ねまき
ねまわし
ねみみ
ねむい
ねむたい
ねもと
ねらう
ねわざ
ねんいり
ねんおし
ねんかん
ねんきん
ねんぐ
ねんざ
ねんし
ねんちゃく
ねんど
ねんぴ
ねんぶつ
ねんまつ
ねんりょう
ねんれい
のいず
のおづま
のがす
のきなみ
のこぎり
のこす
のこる
のせる
のぞく
のぞむ
のたまう
のちほど
のっく
のばす
のはら
のべる
のぼる
のみもの
のやま
のらいぬ
のらねこ
のりもの
のりゆき
のれん
のんき
ばあい
はあく
ばあさん
ばいか
ばいく
はいけん
はいご
はいしん
はいすい
はいせん
はいそう
はいち
ばいばい
はいれつ
はえる
はおる
はかい
ばかり
はかる
はくしゅ
はけん
はこぶ
はさみ
はさん
はしご
ばしょ
はしる
はせる
ぱそこん
はそん
はたん
はちみつ
はつおん
はっかく
はづき
はっきり
はっくつ
はっけん
はっこう
はっさん
はっしん
はったつ
はっちゅう
はってん
はっぴょう
はっぽう
はなす
はなび
はにかむ
はぶらし
はみがき
はむかう
はめつ
はやい
はやし
はらう
はろうぃん
はわい
はんい
はんえい
はんおん
はんかく
はんきょう
ばんぐみ
はんこ
はんしゃ
はんすう
はんだん
ぱんち
ぱんつ
はんてい
はんとし
はんのう
はんぱ
はんぶん
はんぺん
はんぼうき
はんめい
はんらん
はんろん
ひいき
ひうん
ひえる
ひかく
ひかり
ひかる
ひかん
ひくい
ひけつ
ひこうき
ひこく
ひさい
ひさしぶり
ひさん
びじゅつかん
ひしょ
ひそか
ひそむ
ひたむき
ひだり
ひたる
ひつぎ
ひっこし
ひっし
ひつじゅひん
ひっす
ひつぜん
ぴったり
ぴっちり
ひつよう
ひてい
ひとごみ
ひなまつり
ひなん
ひねる
ひはん
ひびく
ひひょう
ひほう
ひまわり
ひまん
ひみつ
ひめい
ひめじし
ひやけ
ひやす
ひよう
びょうき
ひらがな
ひらく
ひりつ
ひりょう
ひるま
ひるやすみ
ひれい
ひろい
ひろう
ひろき
ひろゆき
ひんかく
ひんけつ
ひんこん
ひんしゅ
ひんそう
ぴんち
ひんぱん
びんぼう
ふあん
ふいうち
ふうけい
ふうせん
ぷうたろう
ふうとう
ふうふ
ふえる
ふおん
ふかい
ふきん
ふくざつ
ふくぶくろ
ふこう
ふさい
ふしぎ
ふじみ
ふすま
ふせい
ふせぐ
ふそく
ぶたにく
ふたん
ふちょう
ふつう
ふつか
ふっかつ
ふっき
ふっこく
ぶどう
ふとる
ふとん
ふのう
ふはい
ふひょう
ふへん
ふまん
ふみん
ふめつ
ふめん
ふよう
ふりこ
ふりる
ふるい
ふんいき
ぶんがく
ぶんぐ
ふんしつ
ぶんせき
ふんそう
ぶんぽう
へいあん
へいおん
へいがい
へいき
へいげん
へいこう
へいさ
へいしゃ
へいせつ
へいそ
へいたく
へいてん
へいねつ
へいわ
へきが
へこむ
べにいろ
べにしょうが
へらす
へんかん
べんきょう
べんごし
へんさい
へんたい
べんり
ほあん
ほいく
ぼうぎょ
ほうこく
ほうそう
ほうほう
ほうもん
ほうりつ
ほえる
ほおん
ほかん
ほきょう
ぼきん
ほくろ
ほけつ
ほけん
ほこう
ほこる
ほしい
ほしつ
ほしゅ
ほしょう
ほせい
ほそい
ほそく
ほたて
ほたる
ぽちぶくろ
ほっきょく
ほっさ
ほったん
ほとんど
ほめる
ほんい
ほんき
ほんけ
ほんしつ
ほんやく
まいにち
まかい
まかせる
まがる
まける
まこと
まさつ
まじめ
ますく
まぜる
まつり
まとめ
まなぶ
まぬけ
まねく
まほう
まもる
まゆげ
まよう
まろやか
まわす
まわり
まわる
まんが
まんきつ
まんぞく
まんなか
みいら
みうち
みえる
みがく
みかた
みかん
みけん
みこん
みじかい
みすい
みすえる
みせる
みっか
みつかる
みつける
みてい
みとめる
みなと
みなみかさい
みねらる
みのう
みのがす
みほん
みもと
みやげ
みらい
みりょく
みわく
みんか
みんぞく
むいか
むえき
むえん
むかい
むかう
むかえ
むかし
むぎちゃ
むける
むげん
むさぼる
むしあつい
むしば
むじゅん
むしろ
むすう
むすこ
むすぶ
むすめ
むせる
むせん
むちゅう
むなしい
むのう
むやみ
むよう
むらさき
むりょう
むろん
めいあん
めいうん
めいえん
めいかく
めいきょく
めいさい
めいし
めいそう
めいぶつ
めいれい
めいわく
めぐまれる
めざす
めした
めずらしい
めだつ
めまい
めやす
めんきょ
めんせき
めんどう
もうしあげる
もうどうけん
もえる
もくし
もくてき
もくようび
もちろん
もどる
もらう
もんく
もんだい
やおや
やける
やさい
やさしい
やすい
やすたろう
やすみ
やせる
やそう
やたい
やちん
やっと
やっぱり
やぶる
やめる
ややこしい
やよい
やわらかい
ゆうき
ゆうびんきょく
ゆうべ
ゆうめい
ゆけつ
ゆしゅつ
ゆせん
ゆそう
ゆたか
ゆちゃく
ゆでる
ゆにゅう
ゆびわ
ゆらい
ゆれる
ようい
ようか
ようきゅう
ようじ
ようす
ようちえん
よかぜ
よかん
よきん
よくせい
よくぼう
よけい
よごれる
よさん
よしゅう
よそう
よそく
よっか
よてい
よどがわく
よねつ
よやく
よゆう
よろこぶ
よろしい
らいう
らくがき
らくご
らくさつ
らくだ
らしんばん
らせん
らぞく
らたい
らっか
られつ
りえき
りかい
りきさく
りきせつ
りくぐん
りくつ
りけん
りこう
りせい
りそう
りそく
りてん
りねん
りゆう
りゅうがく
りよう
りょうり
りょかん
りょくちゃ
りょこう
りりく
りれき
りろん
りんご
るいけい
るいさい
るいじ
るいせき
るすばん
るりがわら
れいかん
れいぎ
れいせい
れいぞうこ
れいとう
れいぼう
れきし
れきだい
れんあい
れんけい
れんこん
れんさい
れんしゅう
れんぞく
れんらく
ろうか
ろうご
ろうじん
ろうそく
ろくが
ろこつ
ろじうら
ろしゅつ
ろせん
ろてん
ろめん
ろれつ
ろんぎ
ろんぱ
ろんぶん
ろんり
わかす
わかめ
わかやま
わかれる
わしつ
わじまし
わすれもの
わらう
われる`.split(`
`);var mx=`가격
가끔
가난
가능
가득
가르침
가뭄
가방
가상
가슴
가운데
가을
가이드
가입
가장
가정
가족
가죽
각오
각자
간격
간부
간섭
간장
간접
간판
갈등
갈비
갈색
갈증
감각
감기
감소
감수성
감자
감정
갑자기
강남
강당
강도
강력히
강변
강북
강사
강수량
강아지
강원도
강의
강제
강조
같이
개구리
개나리
개방
개별
개선
개성
개인
객관적
거실
거액
거울
거짓
거품
걱정
건강
건물
건설
건조
건축
걸음
검사
검토
게시판
게임
겨울
견해
결과
결국
결론
결석
결승
결심
결정
결혼
경계
경고
경기
경력
경복궁
경비
경상도
경영
경우
경쟁
경제
경주
경찰
경치
경향
경험
계곡
계단
계란
계산
계속
계약
계절
계층
계획
고객
고구려
고궁
고급
고등학생
고무신
고민
고양이
고장
고전
고집
고춧가루
고통
고향
곡식
골목
골짜기
골프
공간
공개
공격
공군
공급
공기
공동
공무원
공부
공사
공식
공업
공연
공원
공장
공짜
공책
공통
공포
공항
공휴일
과목
과일
과장
과정
과학
관객
관계
관광
관념
관람
관련
관리
관습
관심
관점
관찰
광경
광고
광장
광주
괴로움
굉장히
교과서
교문
교복
교실
교양
교육
교장
교직
교통
교환
교훈
구경
구름
구멍
구별
구분
구석
구성
구속
구역
구입
구청
구체적
국가
국기
국내
국립
국물
국민
국수
국어
국왕
국적
국제
국회
군대
군사
군인
궁극적
권리
권위
권투
귀국
귀신
규정
규칙
균형
그날
그냥
그늘
그러나
그룹
그릇
그림
그제서야
그토록
극복
극히
근거
근교
근래
근로
근무
근본
근원
근육
근처
글씨
글자
금강산
금고
금년
금메달
금액
금연
금요일
금지
긍정적
기간
기관
기념
기능
기독교
기둥
기록
기름
기법
기본
기분
기쁨
기숙사
기술
기억
기업
기온
기운
기원
기적
기준
기침
기혼
기획
긴급
긴장
길이
김밥
김치
김포공항
깍두기
깜빡
깨달음
깨소금
껍질
꼭대기
꽃잎
나들이
나란히
나머지
나물
나침반
나흘
낙엽
난방
날개
날씨
날짜
남녀
남대문
남매
남산
남자
남편
남학생
낭비
낱말
내년
내용
내일
냄비
냄새
냇물
냉동
냉면
냉방
냉장고
넥타이
넷째
노동
노란색
노력
노인
녹음
녹차
녹화
논리
논문
논쟁
놀이
농구
농담
농민
농부
농업
농장
농촌
높이
눈동자
눈물
눈썹
뉴욕
느낌
늑대
능동적
능력
다방
다양성
다음
다이어트
다행
단계
단골
단독
단맛
단순
단어
단위
단점
단체
단추
단편
단풍
달걀
달러
달력
달리
닭고기
담당
담배
담요
담임
답변
답장
당근
당분간
당연히
당장
대규모
대낮
대단히
대답
대도시
대략
대량
대륙
대문
대부분
대신
대응
대장
대전
대접
대중
대책
대출
대충
대통령
대학
대한민국
대합실
대형
덩어리
데이트
도대체
도덕
도둑
도망
도서관
도심
도움
도입
도자기
도저히
도전
도중
도착
독감
독립
독서
독일
독창적
동화책
뒷모습
뒷산
딸아이
마누라
마늘
마당
마라톤
마련
마무리
마사지
마약
마요네즈
마을
마음
마이크
마중
마지막
마찬가지
마찰
마흔
막걸리
막내
막상
만남
만두
만세
만약
만일
만점
만족
만화
많이
말기
말씀
말투
맘대로
망원경
매년
매달
매력
매번
매스컴
매일
매장
맥주
먹이
먼저
먼지
멀리
메일
며느리
며칠
면담
멸치
명단
명령
명예
명의
명절
명칭
명함
모금
모니터
모델
모든
모범
모습
모양
모임
모조리
모집
모퉁이
목걸이
목록
목사
목소리
목숨
목적
목표
몰래
몸매
몸무게
몸살
몸속
몸짓
몸통
몹시
무관심
무궁화
무더위
무덤
무릎
무슨
무엇
무역
무용
무조건
무지개
무척
문구
문득
문법
문서
문제
문학
문화
물가
물건
물결
물고기
물론
물리학
물음
물질
물체
미국
미디어
미사일
미술
미역
미용실
미움
미인
미팅
미혼
민간
민족
민주
믿음
밀가루
밀리미터
밑바닥
바가지
바구니
바나나
바늘
바닥
바닷가
바람
바이러스
바탕
박물관
박사
박수
반대
반드시
반말
반발
반성
반응
반장
반죽
반지
반찬
받침
발가락
발걸음
발견
발달
발레
발목
발바닥
발생
발음
발자국
발전
발톱
발표
밤하늘
밥그릇
밥맛
밥상
밥솥
방금
방면
방문
방바닥
방법
방송
방식
방안
방울
방지
방학
방해
방향
배경
배꼽
배달
배드민턴
백두산
백색
백성
백인
백제
백화점
버릇
버섯
버튼
번개
번역
번지
번호
벌금
벌레
벌써
범위
범인
범죄
법률
법원
법적
법칙
베이징
벨트
변경
변동
변명
변신
변호사
변화
별도
별명
별일
병실
병아리
병원
보관
보너스
보라색
보람
보름
보상
보안
보자기
보장
보전
보존
보통
보편적
보험
복도
복사
복숭아
복습
볶음
본격적
본래
본부
본사
본성
본인
본질
볼펜
봉사
봉지
봉투
부근
부끄러움
부담
부동산
부문
부분
부산
부상
부엌
부인
부작용
부장
부정
부족
부지런히
부친
부탁
부품
부회장
북부
북한
분노
분량
분리
분명
분석
분야
분위기
분필
분홍색
불고기
불과
불교
불꽃
불만
불법
불빛
불안
불이익
불행
브랜드
비극
비난
비닐
비둘기
비디오
비로소
비만
비명
비밀
비바람
비빔밥
비상
비용
비율
비중
비타민
비판
빌딩
빗물
빗방울
빗줄기
빛깔
빨간색
빨래
빨리
사건
사계절
사나이
사냥
사람
사랑
사립
사모님
사물
사방
사상
사생활
사설
사슴
사실
사업
사용
사월
사장
사전
사진
사촌
사춘기
사탕
사투리
사흘
산길
산부인과
산업
산책
살림
살인
살짝
삼계탕
삼국
삼십
삼월
삼촌
상관
상금
상대
상류
상반기
상상
상식
상업
상인
상자
상점
상처
상추
상태
상표
상품
상황
새벽
색깔
색연필
생각
생명
생물
생방송
생산
생선
생신
생일
생활
서랍
서른
서명
서민
서비스
서양
서울
서적
서점
서쪽
서클
석사
석유
선거
선물
선배
선생
선수
선원
선장
선전
선택
선풍기
설거지
설날
설렁탕
설명
설문
설사
설악산
설치
설탕
섭씨
성공
성당
성명
성별
성인
성장
성적
성질
성함
세금
세미나
세상
세월
세종대왕
세탁
센터
센티미터
셋째
소규모
소극적
소금
소나기
소년
소득
소망
소문
소설
소속
소아과
소용
소원
소음
소중히
소지품
소질
소풍
소형
속담
속도
속옷
손가락
손길
손녀
손님
손등
손목
손뼉
손실
손질
손톱
손해
솔직히
솜씨
송아지
송이
송편
쇠고기
쇼핑
수건
수년
수단
수돗물
수동적
수면
수명
수박
수상
수석
수술
수시로
수업
수염
수영
수입
수준
수집
수출
수컷
수필
수학
수험생
수화기
숙녀
숙소
숙제
순간
순서
순수
순식간
순위
숟가락
술병
술집
숫자
스님
스물
스스로
스승
스웨터
스위치
스케이트
스튜디오
스트레스
스포츠
슬쩍
슬픔
습관
습기
승객
승리
승부
승용차
승진
시각
시간
시골
시금치
시나리오
시댁
시리즈
시멘트
시민
시부모
시선
시설
시스템
시아버지
시어머니
시월
시인
시일
시작
시장
시절
시점
시중
시즌
시집
시청
시합
시험
식구
식기
식당
식량
식료품
식물
식빵
식사
식생활
식초
식탁
식품
신고
신규
신념
신문
신발
신비
신사
신세
신용
신제품
신청
신체
신화
실감
실내
실력
실례
실망
실수
실습
실시
실장
실정
실질적
실천
실체
실컷
실태
실패
실험
실현
심리
심부름
심사
심장
심정
심판
쌍둥이
씨름
씨앗
아가씨
아나운서
아드님
아들
아쉬움
아스팔트
아시아
아울러
아저씨
아줌마
아직
아침
아파트
아프리카
아픔
아홉
아흔
악기
악몽
악수
안개
안경
안과
안내
안녕
안동
안방
안부
안주
알루미늄
알코올
암시
암컷
압력
앞날
앞문
애인
애정
액수
앨범
야간
야단
야옹
약간
약국
약속
약수
약점
약품
약혼녀
양념
양력
양말
양배추
양주
양파
어둠
어려움
어른
어젯밤
어쨌든
어쩌다가
어쩐지
언니
언덕
언론
언어
얼굴
얼른
얼음
얼핏
엄마
업무
업종
업체
엉덩이
엉망
엉터리
엊그제
에너지
에어컨
엔진
여건
여고생
여관
여군
여권
여대생
여덟
여동생
여든
여론
여름
여섯
여성
여왕
여인
여전히
여직원
여학생
여행
역사
역시
역할
연결
연구
연극
연기
연락
연설
연세
연속
연습
연애
연예인
연인
연장
연주
연출
연필
연합
연휴
열기
열매
열쇠
열심히
열정
열차
열흘
염려
엽서
영국
영남
영상
영양
영역
영웅
영원히
영하
영향
영혼
영화
옆구리
옆방
옆집
예감
예금
예방
예산
예상
예선
예술
예습
예식장
예약
예전
예절
예정
예컨대
옛날
오늘
오락
오랫동안
오렌지
오로지
오른발
오븐
오십
오염
오월
오전
오직
오징어
오페라
오피스텔
오히려
옥상
옥수수
온갖
온라인
온몸
온종일
온통
올가을
올림픽
올해
옷차림
와이셔츠
와인
완성
완전
왕비
왕자
왜냐하면
왠지
외갓집
외국
외로움
외삼촌
외출
외침
외할머니
왼발
왼손
왼쪽
요금
요일
요즘
요청
용기
용서
용어
우산
우선
우승
우연히
우정
우체국
우편
운동
운명
운반
운전
운행
울산
울음
움직임
웃어른
웃음
워낙
원고
원래
원서
원숭이
원인
원장
원피스
월급
월드컵
월세
월요일
웨이터
위반
위법
위성
위원
위험
위협
윗사람
유난히
유럽
유명
유물
유산
유적
유치원
유학
유행
유형
육군
육상
육십
육체
은행
음력
음료
음반
음성
음식
음악
음주
의견
의논
의문
의복
의식
의심
의외로
의욕
의원
의학
이것
이곳
이념
이놈
이달
이대로
이동
이렇게
이력서
이론적
이름
이민
이발소
이별
이불
이빨
이상
이성
이슬
이야기
이용
이웃
이월
이윽고
이익
이전
이중
이튿날
이틀
이혼
인간
인격
인공
인구
인근
인기
인도
인류
인물
인생
인쇄
인연
인원
인재
인종
인천
인체
인터넷
인하
인형
일곱
일기
일단
일대
일등
일반
일본
일부
일상
일생
일손
일요일
일월
일정
일종
일주일
일찍
일체
일치
일행
일회용
임금
임무
입대
입력
입맛
입사
입술
입시
입원
입장
입학
자가용
자격
자극
자동
자랑
자부심
자식
자신
자연
자원
자율
자전거
자정
자존심
자판
작가
작년
작성
작업
작용
작은딸
작품
잔디
잔뜩
잔치
잘못
잠깐
잠수함
잠시
잠옷
잠자리
잡지
장관
장군
장기간
장래
장례
장르
장마
장면
장모
장미
장비
장사
장소
장식
장애인
장인
장점
장차
장학금
재능
재빨리
재산
재생
재작년
재정
재채기
재판
재학
재활용
저것
저고리
저곳
저녁
저런
저렇게
저번
저울
저절로
저축
적극
적당히
적성
적용
적응
전개
전공
전기
전달
전라도
전망
전문
전반
전부
전세
전시
전용
전자
전쟁
전주
전철
전체
전통
전혀
전후
절대
절망
절반
절약
절차
점검
점수
점심
점원
점점
점차
접근
접시
접촉
젓가락
정거장
정도
정류장
정리
정말
정면
정문
정반대
정보
정부
정비
정상
정성
정오
정원
정장
정지
정치
정확히
제공
제과점
제대로
제목
제발
제법
제삿날
제안
제일
제작
제주도
제출
제품
제한
조각
조건
조금
조깅
조명
조미료
조상
조선
조용히
조절
조정
조직
존댓말
존재
졸업
졸음
종교
종로
종류
종소리
종업원
종종
종합
좌석
죄인
주관적
주름
주말
주머니
주먹
주문
주민
주방
주변
주식
주인
주일
주장
주전자
주택
준비
줄거리
줄기
줄무늬
중간
중계방송
중국
중년
중단
중독
중반
중부
중세
중소기업
중순
중앙
중요
중학교
즉석
즉시
즐거움
증가
증거
증권
증상
증세
지각
지갑
지경
지극히
지금
지급
지능
지름길
지리산
지방
지붕
지식
지역
지우개
지원
지적
지점
지진
지출
직선
직업
직원
직장
진급
진동
진로
진료
진리
진짜
진찰
진출
진통
진행
질문
질병
질서
짐작
집단
집안
집중
짜증
찌꺼기
차남
차라리
차량
차림
차별
차선
차츰
착각
찬물
찬성
참가
참기름
참새
참석
참여
참외
참조
찻잔
창가
창고
창구
창문
창밖
창작
창조
채널
채점
책가방
책방
책상
책임
챔피언
처벌
처음
천국
천둥
천장
천재
천천히
철도
철저히
철학
첫날
첫째
청년
청바지
청소
청춘
체계
체력
체온
체육
체중
체험
초등학생
초반
초밥
초상화
초순
초여름
초원
초저녁
초점
초청
초콜릿
촛불
총각
총리
총장
촬영
최근
최상
최선
최신
최악
최종
추석
추억
추진
추천
추측
축구
축소
축제
축하
출근
출발
출산
출신
출연
출입
출장
출판
충격
충고
충돌
충분히
충청도
취업
취직
취향
치약
친구
친척
칠십
칠월
칠판
침대
침묵
침실
칫솔
칭찬
카메라
카운터
칼국수
캐릭터
캠퍼스
캠페인
커튼
컨디션
컬러
컴퓨터
코끼리
코미디
콘서트
콜라
콤플렉스
콩나물
쾌감
쿠데타
크림
큰길
큰딸
큰소리
큰아들
큰어머니
큰일
큰절
클래식
클럽
킬로
타입
타자기
탁구
탁자
탄생
태권도
태양
태풍
택시
탤런트
터널
터미널
테니스
테스트
테이블
텔레비전
토론
토마토
토요일
통계
통과
통로
통신
통역
통일
통장
통제
통증
통합
통화
퇴근
퇴원
퇴직금
튀김
트럭
특급
특별
특성
특수
특징
특히
튼튼히
티셔츠
파란색
파일
파출소
판결
판단
판매
판사
팔십
팔월
팝송
패션
팩스
팩시밀리
팬티
퍼센트
페인트
편견
편의
편지
편히
평가
평균
평생
평소
평양
평일
평화
포스터
포인트
포장
포함
표면
표정
표준
표현
품목
품질
풍경
풍속
풍습
프랑스
프린터
플라스틱
피곤
피망
피아노
필름
필수
필요
필자
필통
핑계
하느님
하늘
하드웨어
하룻밤
하반기
하숙집
하순
하여튼
하지만
하천
하품
하필
학과
학교
학급
학기
학년
학력
학번
학부모
학비
학생
학술
학습
학용품
학원
학위
학자
학점
한계
한글
한꺼번에
한낮
한눈
한동안
한때
한라산
한마디
한문
한번
한복
한식
한여름
한쪽
할머니
할아버지
할인
함께
함부로
합격
합리적
항공
항구
항상
항의
해결
해군
해답
해당
해물
해석
해설
해수욕장
해안
핵심
핸드백
햄버거
햇볕
햇살
행동
행복
행사
행운
행위
향기
향상
향수
허락
허용
헬기
현관
현금
현대
현상
현실
현장
현재
현지
혈액
협력
형부
형사
형수
형식
형제
형태
형편
혜택
호기심
호남
호랑이
호박
호텔
호흡
혹시
홀로
홈페이지
홍보
홍수
홍차
화면
화분
화살
화요일
화장
화학
확보
확인
확장
확정
환갑
환경
환영
환율
환자
활기
활동
활발히
활용
활짝
회견
회관
회복
회색
회원
회장
회전
횟수
횡단보도
효율적
후반
후춧가루
훈련
훨씬
휴식
휴일
흉내
흐름
흑백
흑인
흔적
흔히
흥미
흥분
희곡
희망
희생
흰색
힘껏`.split(`
`);var dx=`的
一
是
在
不
了
有
和
人
这
中
大
为
上
个
国
我
以
要
他
时
来
用
们
生
到
作
地
于
出
就
分
对
成
会
可
主
发
年
动
同
工
也
能
下
过
子
说
产
种
面
而
方
后
多
定
行
学
法
所
民
得
经
十
三
之
进
着
等
部
度
家
电
力
里
如
水
化
高
自
二
理
起
小
物
现
实
加
量
都
两
体
制
机
当
使
点
从
业
本
去
把
性
好
应
开
它
合
还
因
由
其
些
然
前
外
天
政
四
日
那
社
义
事
平
形
相
全
表
间
样
与
关
各
重
新
线
内
数
正
心
反
你
明
看
原
又
么
利
比
或
但
质
气
第
向
道
命
此
变
条
只
没
结
解
问
意
建
月
公
无
系
军
很
情
者
最
立
代
想
已
通
并
提
直
题
党
程
展
五
果
料
象
员
革
位
入
常
文
总
次
品
式
活
设
及
管
特
件
长
求
老
头
基
资
边
流
路
级
少
图
山
统
接
知
较
将
组
见
计
别
她
手
角
期
根
论
运
农
指
几
九
区
强
放
决
西
被
干
做
必
战
先
回
则
任
取
据
处
队
南
给
色
光
门
即
保
治
北
造
百
规
热
领
七
海
口
东
导
器
压
志
世
金
增
争
济
阶
油
思
术
极
交
受
联
什
认
六
共
权
收
证
改
清
美
再
采
转
更
单
风
切
打
白
教
速
花
带
安
场
身
车
例
真
务
具
万
每
目
至
达
走
积
示
议
声
报
斗
完
类
八
离
华
名
确
才
科
张
信
马
节
话
米
整
空
元
况
今
集
温
传
土
许
步
群
广
石
记
需
段
研
界
拉
林
律
叫
且
究
观
越
织
装
影
算
低
持
音
众
书
布
复
容
儿
须
际
商
非
验
连
断
深
难
近
矿
千
周
委
素
技
备
半
办
青
省
列
习
响
约
支
般
史
感
劳
便
团
往
酸
历
市
克
何
除
消
构
府
称
太
准
精
值
号
率
族
维
划
选
标
写
存
候
毛
亲
快
效
斯
院
查
江
型
眼
王
按
格
养
易
置
派
层
片
始
却
专
状
育
厂
京
识
适
属
圆
包
火
住
调
满
县
局
照
参
红
细
引
听
该
铁
价
严
首
底
液
官
德
随
病
苏
失
尔
死
讲
配
女
黄
推
显
谈
罪
神
艺
呢
席
含
企
望
密
批
营
项
防
举
球
英
氧
势
告
李
台
落
木
帮
轮
破
亚
师
围
注
远
字
材
排
供
河
态
封
另
施
减
树
溶
怎
止
案
言
士
均
武
固
叶
鱼
波
视
仅
费
紧
爱
左
章
早
朝
害
续
轻
服
试
食
充
兵
源
判
护
司
足
某
练
差
致
板
田
降
黑
犯
负
击
范
继
兴
似
余
坚
曲
输
修
故
城
夫
够
送
笔
船
占
右
财
吃
富
春
职
觉
汉
画
功
巴
跟
虽
杂
飞
检
吸
助
升
阳
互
初
创
抗
考
投
坏
策
古
径
换
未
跑
留
钢
曾
端
责
站
简
述
钱
副
尽
帝
射
草
冲
承
独
令
限
阿
宣
环
双
请
超
微
让
控
州
良
轴
找
否
纪
益
依
优
顶
础
载
倒
房
突
坐
粉
敌
略
客
袁
冷
胜
绝
析
块
剂
测
丝
协
诉
念
陈
仍
罗
盐
友
洋
错
苦
夜
刑
移
频
逐
靠
混
母
短
皮
终
聚
汽
村
云
哪
既
距
卫
停
烈
央
察
烧
迅
境
若
印
洲
刻
括
激
孔
搞
甚
室
待
核
校
散
侵
吧
甲
游
久
菜
味
旧
模
湖
货
损
预
阻
毫
普
稳
乙
妈
植
息
扩
银
语
挥
酒
守
拿
序
纸
医
缺
雨
吗
针
刘
啊
急
唱
误
训
愿
审
附
获
茶
鲜
粮
斤
孩
脱
硫
肥
善
龙
演
父
渐
血
欢
械
掌
歌
沙
刚
攻
谓
盾
讨
晚
粒
乱
燃
矛
乎
杀
药
宁
鲁
贵
钟
煤
读
班
伯
香
介
迫
句
丰
培
握
兰
担
弦
蛋
沉
假
穿
执
答
乐
谁
顺
烟
缩
征
脸
喜
松
脚
困
异
免
背
星
福
买
染
井
概
慢
怕
磁
倍
祖
皇
促
静
补
评
翻
肉
践
尼
衣
宽
扬
棉
希
伤
操
垂
秋
宜
氢
套
督
振
架
亮
末
宪
庆
编
牛
触
映
雷
销
诗
座
居
抓
裂
胞
呼
娘
景
威
绿
晶
厚
盟
衡
鸡
孙
延
危
胶
屋
乡
临
陆
顾
掉
呀
灯
岁
措
束
耐
剧
玉
赵
跳
哥
季
课
凯
胡
额
款
绍
卷
齐
伟
蒸
殖
永
宗
苗
川
炉
岩
弱
零
杨
奏
沿
露
杆
探
滑
镇
饭
浓
航
怀
赶
库
夺
伊
灵
税
途
灭
赛
归
召
鼓
播
盘
裁
险
康
唯
录
菌
纯
借
糖
盖
横
符
私
努
堂
域
枪
润
幅
哈
竟
熟
虫
泽
脑
壤
碳
欧
遍
侧
寨
敢
彻
虑
斜
薄
庭
纳
弹
饲
伸
折
麦
湿
暗
荷
瓦
塞
床
筑
恶
户
访
塔
奇
透
梁
刀
旋
迹
卡
氯
遇
份
毒
泥
退
洗
摆
灰
彩
卖
耗
夏
择
忙
铜
献
硬
予
繁
圈
雪
函
亦
抽
篇
阵
阴
丁
尺
追
堆
雄
迎
泛
爸
楼
避
谋
吨
野
猪
旗
累
偏
典
馆
索
秦
脂
潮
爷
豆
忽
托
惊
塑
遗
愈
朱
替
纤
粗
倾
尚
痛
楚
谢
奋
购
磨
君
池
旁
碎
骨
监
捕
弟
暴
割
贯
殊
释
词
亡
壁
顿
宝
午
尘
闻
揭
炮
残
冬
桥
妇
警
综
招
吴
付
浮
遭
徐
您
摇
谷
赞
箱
隔
订
男
吹
园
纷
唐
败
宋
玻
巨
耕
坦
荣
闭
湾
键
凡
驻
锅
救
恩
剥
凝
碱
齿
截
炼
麻
纺
禁
废
盛
版
缓
净
睛
昌
婚
涉
筒
嘴
插
岸
朗
庄
街
藏
姑
贸
腐
奴
啦
惯
乘
伙
恢
匀
纱
扎
辩
耳
彪
臣
亿
璃
抵
脉
秀
萨
俄
网
舞
店
喷
纵
寸
汗
挂
洪
贺
闪
柬
爆
烯
津
稻
墙
软
勇
像
滚
厘
蒙
芳
肯
坡
柱
荡
腿
仪
旅
尾
轧
冰
贡
登
黎
削
钻
勒
逃
障
氨
郭
峰
币
港
伏
轨
亩
毕
擦
莫
刺
浪
秘
援
株
健
售
股
岛
甘
泡
睡
童
铸
汤
阀
休
汇
舍
牧
绕
炸
哲
磷
绩
朋
淡
尖
启
陷
柴
呈
徒
颜
泪
稍
忘
泵
蓝
拖
洞
授
镜
辛
壮
锋
贫
虚
弯
摩
泰
幼
廷
尊
窗
纲
弄
隶
疑
氏
宫
姐
震
瑞
怪
尤
琴
循
描
膜
违
夹
腰
缘
珠
穷
森
枝
竹
沟
催
绳
忆
邦
剩
幸
浆
栏
拥
牙
贮
礼
滤
钠
纹
罢
拍
咱
喊
袖
埃
勤
罚
焦
潜
伍
墨
欲
缝
姓
刊
饱
仿
奖
铝
鬼
丽
跨
默
挖
链
扫
喝
袋
炭
污
幕
诸
弧
励
梅
奶
洁
灾
舟
鉴
苯
讼
抱
毁
懂
寒
智
埔
寄
届
跃
渡
挑
丹
艰
贝
碰
拔
爹
戴
码
梦
芽
熔
赤
渔
哭
敬
颗
奔
铅
仲
虎
稀
妹
乏
珍
申
桌
遵
允
隆
螺
仓
魏
锐
晓
氮
兼
隐
碍
赫
拨
忠
肃
缸
牵
抢
博
巧
壳
兄
杜
讯
诚
碧
祥
柯
页
巡
矩
悲
灌
龄
伦
票
寻
桂
铺
圣
恐
恰
郑
趣
抬
荒
腾
贴
柔
滴
猛
阔
辆
妻
填
撤
储
签
闹
扰
紫
砂
递
戏
吊
陶
伐
喂
疗
瓶
婆
抚
臂
摸
忍
虾
蜡
邻
胸
巩
挤
偶
弃
槽
劲
乳
邓
吉
仁
烂
砖
租
乌
舰
伴
瓜
浅
丙
暂
燥
橡
柳
迷
暖
牌
秧
胆
详
簧
踏
瓷
谱
呆
宾
糊
洛
辉
愤
竞
隙
怒
粘
乃
绪
肩
籍
敏
涂
熙
皆
侦
悬
掘
享
纠
醒
狂
锁
淀
恨
牲
霸
爬
赏
逆
玩
陵
祝
秒
浙
貌
役
彼
悉
鸭
趋
凤
晨
畜
辈
秩
卵
署
梯
炎
滩
棋
驱
筛
峡
冒
啥
寿
译
浸
泉
帽
迟
硅
疆
贷
漏
稿
冠
嫩
胁
芯
牢
叛
蚀
奥
鸣
岭
羊
凭
串
塘
绘
酵
融
盆
锡
庙
筹
冻
辅
摄
袭
筋
拒
僚
旱
钾
鸟
漆
沈
眉
疏
添
棒
穗
硝
韩
逼
扭
侨
凉
挺
碗
栽
炒
杯
患
馏
劝
豪
辽
勃
鸿
旦
吏
拜
狗
埋
辊
掩
饮
搬
骂
辞
勾
扣
估
蒋
绒
雾
丈
朵
姆
拟
宇
辑
陕
雕
偿
蓄
崇
剪
倡
厅
咬
驶
薯
刷
斥
番
赋
奉
佛
浇
漫
曼
扇
钙
桃
扶
仔
返
俗
亏
腔
鞋
棱
覆
框
悄
叔
撞
骗
勘
旺
沸
孤
吐
孟
渠
屈
疾
妙
惜
仰
狠
胀
谐
抛
霉
桑
岗
嘛
衰
盗
渗
脏
赖
涌
甜
曹
阅
肌
哩
厉
烃
纬
毅
昨
伪
症
煮
叹
钉
搭
茎
笼
酷
偷
弓
锥
恒
杰
坑
鼻
翼
纶
叙
狱
逮
罐
络
棚
抑
膨
蔬
寺
骤
穆
冶
枯
册
尸
凸
绅
坯
牺
焰
轰
欣
晋
瘦
御
锭
锦
丧
旬
锻
垄
搜
扑
邀
亭
酯
迈
舒
脆
酶
闲
忧
酚
顽
羽
涨
卸
仗
陪
辟
惩
杭
姚
肚
捉
飘
漂
昆
欺
吾
郎
烷
汁
呵
饰
萧
雅
邮
迁
燕
撒
姻
赴
宴
烦
债
帐
斑
铃
旨
醇
董
饼
雏
姿
拌
傅
腹
妥
揉
贤
拆
歪
葡
胺
丢
浩
徽
昂
垫
挡
览
贪
慰
缴
汪
慌
冯
诺
姜
谊
凶
劣
诬
耀
昏
躺
盈
骑
乔
溪
丛
卢
抹
闷
咨
刮
驾
缆
悟
摘
铒
掷
颇
幻
柄
惠
惨
佳
仇
腊
窝
涤
剑
瞧
堡
泼
葱
罩
霍
捞
胎
苍
滨
俩
捅
湘
砍
霞
邵
萄
疯
淮
遂
熊
粪
烘
宿
档
戈
驳
嫂
裕
徙
箭
捐
肠
撑
晒
辨
殿
莲
摊
搅
酱
屏
疫
哀
蔡
堵
沫
皱
畅
叠
阁
莱
敲
辖
钩
痕
坝
巷
饿
祸
丘
玄
溜
曰
逻
彭
尝
卿
妨
艇
吞
韦
怨
矮
歇`.split(`
`);var hx=`ábaco
abdomen
abeja
abierto
abogado
abono
aborto
abrazo
abrir
abuelo
abuso
acabar
academia
acceso
acción
aceite
acelga
acento
aceptar
ácido
aclarar
acné
acoger
acoso
activo
acto
actriz
actuar
acudir
acuerdo
acusar
adicto
admitir
adoptar
adorno
aduana
adulto
aéreo
afectar
afición
afinar
afirmar
ágil
agitar
agonía
agosto
agotar
agregar
agrio
agua
agudo
águila
aguja
ahogo
ahorro
aire
aislar
ajedrez
ajeno
ajuste
alacrán
alambre
alarma
alba
álbum
alcalde
aldea
alegre
alejar
alerta
aleta
alfiler
alga
algodón
aliado
aliento
alivio
alma
almeja
almíbar
altar
alteza
altivo
alto
altura
alumno
alzar
amable
amante
amapola
amargo
amasar
ámbar
ámbito
ameno
amigo
amistad
amor
amparo
amplio
ancho
anciano
ancla
andar
andén
anemia
ángulo
anillo
ánimo
anís
anotar
antena
antiguo
antojo
anual
anular
anuncio
añadir
añejo
año
apagar
aparato
apetito
apio
aplicar
apodo
aporte
apoyo
aprender
aprobar
apuesta
apuro
arado
araña
arar
árbitro
árbol
arbusto
archivo
arco
arder
ardilla
arduo
área
árido
aries
armonía
arnés
aroma
arpa
arpón
arreglo
arroz
arruga
arte
artista
asa
asado
asalto
ascenso
asegurar
aseo
asesor
asiento
asilo
asistir
asno
asombro
áspero
astilla
astro
astuto
asumir
asunto
atajo
ataque
atar
atento
ateo
ático
atleta
átomo
atraer
atroz
atún
audaz
audio
auge
aula
aumento
ausente
autor
aval
avance
avaro
ave
avellana
avena
avestruz
avión
aviso
ayer
ayuda
ayuno
azafrán
azar
azote
azúcar
azufre
azul
baba
babor
bache
bahía
baile
bajar
balanza
balcón
balde
bambú
banco
banda
baño
barba
barco
barniz
barro
báscula
bastón
basura
batalla
batería
batir
batuta
baúl
bazar
bebé
bebida
bello
besar
beso
bestia
bicho
bien
bingo
blanco
bloque
blusa
boa
bobina
bobo
boca
bocina
boda
bodega
boina
bola
bolero
bolsa
bomba
bondad
bonito
bono
bonsái
borde
borrar
bosque
bote
botín
bóveda
bozal
bravo
brazo
brecha
breve
brillo
brinco
brisa
broca
broma
bronce
brote
bruja
brusco
bruto
buceo
bucle
bueno
buey
bufanda
bufón
búho
buitre
bulto
burbuja
burla
burro
buscar
butaca
buzón
caballo
cabeza
cabina
cabra
cacao
cadáver
cadena
caer
café
caída
caimán
caja
cajón
cal
calamar
calcio
caldo
calidad
calle
calma
calor
calvo
cama
cambio
camello
camino
campo
cáncer
candil
canela
canguro
canica
canto
caña
cañón
caoba
caos
capaz
capitán
capote
captar
capucha
cara
carbón
cárcel
careta
carga
cariño
carne
carpeta
carro
carta
casa
casco
casero
caspa
castor
catorce
catre
caudal
causa
cazo
cebolla
ceder
cedro
celda
célebre
celoso
célula
cemento
ceniza
centro
cerca
cerdo
cereza
cero
cerrar
certeza
césped
cetro
chacal
chaleco
champú
chancla
chapa
charla
chico
chiste
chivo
choque
choza
chuleta
chupar
ciclón
ciego
cielo
cien
cierto
cifra
cigarro
cima
cinco
cine
cinta
ciprés
circo
ciruela
cisne
cita
ciudad
clamor
clan
claro
clase
clave
cliente
clima
clínica
cobre
cocción
cochino
cocina
coco
código
codo
cofre
coger
cohete
cojín
cojo
cola
colcha
colegio
colgar
colina
collar
colmo
columna
combate
comer
comida
cómodo
compra
conde
conejo
conga
conocer
consejo
contar
copa
copia
corazón
corbata
corcho
cordón
corona
correr
coser
cosmos
costa
cráneo
cráter
crear
crecer
creído
crema
cría
crimen
cripta
crisis
cromo
crónica
croqueta
crudo
cruz
cuadro
cuarto
cuatro
cubo
cubrir
cuchara
cuello
cuento
cuerda
cuesta
cueva
cuidar
culebra
culpa
culto
cumbre
cumplir
cuna
cuneta
cuota
cupón
cúpula
curar
curioso
curso
curva
cutis
dama
danza
dar
dardo
dátil
deber
débil
década
decir
dedo
defensa
definir
dejar
delfín
delgado
delito
demora
denso
dental
deporte
derecho
derrota
desayuno
deseo
desfile
desnudo
destino
desvío
detalle
detener
deuda
día
diablo
diadema
diamante
diana
diario
dibujo
dictar
diente
dieta
diez
difícil
digno
dilema
diluir
dinero
directo
dirigir
disco
diseño
disfraz
diva
divino
doble
doce
dolor
domingo
don
donar
dorado
dormir
dorso
dos
dosis
dragón
droga
ducha
duda
duelo
dueño
dulce
dúo
duque
durar
dureza
duro
ébano
ebrio
echar
eco
ecuador
edad
edición
edificio
editor
educar
efecto
eficaz
eje
ejemplo
elefante
elegir
elemento
elevar
elipse
élite
elixir
elogio
eludir
embudo
emitir
emoción
empate
empeño
empleo
empresa
enano
encargo
enchufe
encía
enemigo
enero
enfado
enfermo
engaño
enigma
enlace
enorme
enredo
ensayo
enseñar
entero
entrar
envase
envío
época
equipo
erizo
escala
escena
escolar
escribir
escudo
esencia
esfera
esfuerzo
espada
espejo
espía
esposa
espuma
esquí
estar
este
estilo
estufa
etapa
eterno
ética
etnia
evadir
evaluar
evento
evitar
exacto
examen
exceso
excusa
exento
exigir
exilio
existir
éxito
experto
explicar
exponer
extremo
fábrica
fábula
fachada
fácil
factor
faena
faja
falda
fallo
falso
faltar
fama
familia
famoso
faraón
farmacia
farol
farsa
fase
fatiga
fauna
favor
fax
febrero
fecha
feliz
feo
feria
feroz
fértil
fervor
festín
fiable
fianza
fiar
fibra
ficción
ficha
fideo
fiebre
fiel
fiera
fiesta
figura
fijar
fijo
fila
filete
filial
filtro
fin
finca
fingir
finito
firma
flaco
flauta
flecha
flor
flota
fluir
flujo
flúor
fobia
foca
fogata
fogón
folio
folleto
fondo
forma
forro
fortuna
forzar
fosa
foto
fracaso
frágil
franja
frase
fraude
freír
freno
fresa
frío
frito
fruta
fuego
fuente
fuerza
fuga
fumar
función
funda
furgón
furia
fusil
fútbol
futuro
gacela
gafas
gaita
gajo
gala
galería
gallo
gamba
ganar
gancho
ganga
ganso
garaje
garza
gasolina
gastar
gato
gavilán
gemelo
gemir
gen
género
genio
gente
geranio
gerente
germen
gesto
gigante
gimnasio
girar
giro
glaciar
globo
gloria
gol
golfo
goloso
golpe
goma
gordo
gorila
gorra
gota
goteo
gozar
grada
gráfico
grano
grasa
gratis
grave
grieta
grillo
gripe
gris
grito
grosor
grúa
grueso
grumo
grupo
guante
guapo
guardia
guerra
guía
guiño
guion
guiso
guitarra
gusano
gustar
haber
hábil
hablar
hacer
hacha
hada
hallar
hamaca
harina
haz
hazaña
hebilla
hebra
hecho
helado
helio
hembra
herir
hermano
héroe
hervir
hielo
hierro
hígado
higiene
hijo
himno
historia
hocico
hogar
hoguera
hoja
hombre
hongo
honor
honra
hora
hormiga
horno
hostil
hoyo
hueco
huelga
huerta
hueso
huevo
huida
huir
humano
húmedo
humilde
humo
hundir
huracán
hurto
icono
ideal
idioma
ídolo
iglesia
iglú
igual
ilegal
ilusión
imagen
imán
imitar
impar
imperio
imponer
impulso
incapaz
índice
inerte
infiel
informe
ingenio
inicio
inmenso
inmune
innato
insecto
instante
interés
íntimo
intuir
inútil
invierno
ira
iris
ironía
isla
islote
jabalí
jabón
jamón
jarabe
jardín
jarra
jaula
jazmín
jefe
jeringa
jinete
jornada
joroba
joven
joya
juerga
jueves
juez
jugador
jugo
juguete
juicio
junco
jungla
junio
juntar
júpiter
jurar
justo
juvenil
juzgar
kilo
koala
labio
lacio
lacra
lado
ladrón
lagarto
lágrima
laguna
laico
lamer
lámina
lámpara
lana
lancha
langosta
lanza
lápiz
largo
larva
lástima
lata
látex
latir
laurel
lavar
lazo
leal
lección
leche
lector
leer
legión
legumbre
lejano
lengua
lento
leña
león
leopardo
lesión
letal
letra
leve
leyenda
libertad
libro
licor
líder
lidiar
lienzo
liga
ligero
lima
límite
limón
limpio
lince
lindo
línea
lingote
lino
linterna
líquido
liso
lista
litera
litio
litro
llaga
llama
llanto
llave
llegar
llenar
llevar
llorar
llover
lluvia
lobo
loción
loco
locura
lógica
logro
lombriz
lomo
lonja
lote
lucha
lucir
lugar
lujo
luna
lunes
lupa
lustro
luto
luz
maceta
macho
madera
madre
maduro
maestro
mafia
magia
mago
maíz
maldad
maleta
malla
malo
mamá
mambo
mamut
manco
mando
manejar
manga
maniquí
manjar
mano
manso
manta
mañana
mapa
máquina
mar
marco
marea
marfil
margen
marido
mármol
marrón
martes
marzo
masa
máscara
masivo
matar
materia
matiz
matriz
máximo
mayor
mazorca
mecha
medalla
medio
médula
mejilla
mejor
melena
melón
memoria
menor
mensaje
mente
menú
mercado
merengue
mérito
mes
mesón
meta
meter
método
metro
mezcla
miedo
miel
miembro
miga
mil
milagro
militar
millón
mimo
mina
minero
mínimo
minuto
miope
mirar
misa
miseria
misil
mismo
mitad
mito
mochila
moción
moda
modelo
moho
mojar
molde
moler
molino
momento
momia
monarca
moneda
monja
monto
moño
morada
morder
moreno
morir
morro
morsa
mortal
mosca
mostrar
motivo
mover
móvil
mozo
mucho
mudar
mueble
muela
muerte
muestra
mugre
mujer
mula
muleta
multa
mundo
muñeca
mural
muro
músculo
museo
musgo
música
muslo
nácar
nación
nadar
naipe
naranja
nariz
narrar
nasal
natal
nativo
natural
náusea
naval
nave
navidad
necio
néctar
negar
negocio
negro
neón
nervio
neto
neutro
nevar
nevera
nicho
nido
niebla
nieto
niñez
niño
nítido
nivel
nobleza
noche
nómina
noria
norma
norte
nota
noticia
novato
novela
novio
nube
nuca
núcleo
nudillo
nudo
nuera
nueve
nuez
nulo
número
nutria
oasis
obeso
obispo
objeto
obra
obrero
observar
obtener
obvio
oca
ocaso
océano
ochenta
ocho
ocio
ocre
octavo
octubre
oculto
ocupar
ocurrir
odiar
odio
odisea
oeste
ofensa
oferta
oficio
ofrecer
ogro
oído
oír
ojo
ola
oleada
olfato
olivo
olla
olmo
olor
olvido
ombligo
onda
onza
opaco
opción
ópera
opinar
oponer
optar
óptica
opuesto
oración
orador
oral
órbita
orca
orden
oreja
órgano
orgía
orgullo
oriente
origen
orilla
oro
orquesta
oruga
osadía
oscuro
osezno
oso
ostra
otoño
otro
oveja
óvulo
óxido
oxígeno
oyente
ozono
pacto
padre
paella
página
pago
país
pájaro
palabra
palco
paleta
pálido
palma
paloma
palpar
pan
panal
pánico
pantera
pañuelo
papá
papel
papilla
paquete
parar
parcela
pared
parir
paro
párpado
parque
párrafo
parte
pasar
paseo
pasión
paso
pasta
pata
patio
patria
pausa
pauta
pavo
payaso
peatón
pecado
pecera
pecho
pedal
pedir
pegar
peine
pelar
peldaño
pelea
peligro
pellejo
pelo
peluca
pena
pensar
peñón
peón
peor
pepino
pequeño
pera
percha
perder
pereza
perfil
perico
perla
permiso
perro
persona
pesa
pesca
pésimo
pestaña
pétalo
petróleo
pez
pezuña
picar
pichón
pie
piedra
pierna
pieza
pijama
pilar
piloto
pimienta
pino
pintor
pinza
piña
piojo
pipa
pirata
pisar
piscina
piso
pista
pitón
pizca
placa
plan
plata
playa
plaza
pleito
pleno
plomo
pluma
plural
pobre
poco
poder
podio
poema
poesía
poeta
polen
policía
pollo
polvo
pomada
pomelo
pomo
pompa
poner
porción
portal
posada
poseer
posible
poste
potencia
potro
pozo
prado
precoz
pregunta
premio
prensa
preso
previo
primo
príncipe
prisión
privar
proa
probar
proceso
producto
proeza
profesor
programa
prole
promesa
pronto
propio
próximo
prueba
público
puchero
pudor
pueblo
puerta
puesto
pulga
pulir
pulmón
pulpo
pulso
puma
punto
puñal
puño
pupa
pupila
puré
quedar
queja
quemar
querer
queso
quieto
química
quince
quitar
rábano
rabia
rabo
ración
radical
raíz
rama
rampa
rancho
rango
rapaz
rápido
rapto
rasgo
raspa
rato
rayo
raza
razón
reacción
realidad
rebaño
rebote
recaer
receta
rechazo
recoger
recreo
recto
recurso
red
redondo
reducir
reflejo
reforma
refrán
refugio
regalo
regir
regla
regreso
rehén
reino
reír
reja
relato
relevo
relieve
relleno
reloj
remar
remedio
remo
rencor
rendir
renta
reparto
repetir
reposo
reptil
res
rescate
resina
respeto
resto
resumen
retiro
retorno
retrato
reunir
revés
revista
rey
rezar
rico
riego
rienda
riesgo
rifa
rígido
rigor
rincón
riñón
río
riqueza
risa
ritmo
rito
rizo
roble
roce
rociar
rodar
rodeo
rodilla
roer
rojizo
rojo
romero
romper
ron
ronco
ronda
ropa
ropero
rosa
rosca
rostro
rotar
rubí
rubor
rudo
rueda
rugir
ruido
ruina
ruleta
rulo
rumbo
rumor
ruptura
ruta
rutina
sábado
saber
sabio
sable
sacar
sagaz
sagrado
sala
saldo
salero
salir
salmón
salón
salsa
salto
salud
salvar
samba
sanción
sandía
sanear
sangre
sanidad
sano
santo
sapo
saque
sardina
sartén
sastre
satán
sauna
saxofón
sección
seco
secreto
secta
sed
seguir
seis
sello
selva
semana
semilla
senda
sensor
señal
señor
separar
sepia
sequía
ser
serie
sermón
servir
sesenta
sesión
seta
setenta
severo
sexo
sexto
sidra
siesta
siete
siglo
signo
sílaba
silbar
silencio
silla
símbolo
simio
sirena
sistema
sitio
situar
sobre
socio
sodio
sol
solapa
soldado
soledad
sólido
soltar
solución
sombra
sondeo
sonido
sonoro
sonrisa
sopa
soplar
soporte
sordo
sorpresa
sorteo
sostén
sótano
suave
subir
suceso
sudor
suegra
suelo
sueño
suerte
sufrir
sujeto
sultán
sumar
superar
suplir
suponer
supremo
sur
surco
sureño
surgir
susto
sutil
tabaco
tabique
tabla
tabú
taco
tacto
tajo
talar
talco
talento
talla
talón
tamaño
tambor
tango
tanque
tapa
tapete
tapia
tapón
taquilla
tarde
tarea
tarifa
tarjeta
tarot
tarro
tarta
tatuaje
tauro
taza
tazón
teatro
techo
tecla
técnica
tejado
tejer
tejido
tela
teléfono
tema
temor
templo
tenaz
tender
tener
tenis
tenso
teoría
terapia
terco
término
ternura
terror
tesis
tesoro
testigo
tetera
texto
tez
tibio
tiburón
tiempo
tienda
tierra
tieso
tigre
tijera
tilde
timbre
tímido
timo
tinta
tío
típico
tipo
tira
tirón
titán
títere
título
tiza
toalla
tobillo
tocar
tocino
todo
toga
toldo
tomar
tono
tonto
topar
tope
toque
tórax
torero
tormenta
torneo
toro
torpedo
torre
torso
tortuga
tos
tosco
toser
tóxico
trabajo
tractor
traer
tráfico
trago
traje
tramo
trance
trato
trauma
trazar
trébol
tregua
treinta
tren
trepar
tres
tribu
trigo
tripa
triste
triunfo
trofeo
trompa
tronco
tropa
trote
trozo
truco
trueno
trufa
tubería
tubo
tuerto
tumba
tumor
túnel
túnica
turbina
turismo
turno
tutor
ubicar
úlcera
umbral
unidad
unir
universo
uno
untar
uña
urbano
urbe
urgente
urna
usar
usuario
útil
utopía
uva
vaca
vacío
vacuna
vagar
vago
vaina
vajilla
vale
válido
valle
valor
válvula
vampiro
vara
variar
varón
vaso
vecino
vector
vehículo
veinte
vejez
vela
velero
veloz
vena
vencer
venda
veneno
vengar
venir
venta
venus
ver
verano
verbo
verde
vereda
verja
verso
verter
vía
viaje
vibrar
vicio
víctima
vida
vídeo
vidrio
viejo
viernes
vigor
vil
villa
vinagre
vino
viñedo
violín
viral
virgo
virtud
visor
víspera
vista
vitamina
viudo
vivaz
vivero
vivir
vivo
volcán
volumen
volver
voraz
votar
voto
voz
vuelo
vulgar
yacer
yate
yegua
yema
yerno
yeso
yodo
yoga
yogur
zafiro
zanja
zapato
zarza
zona
zorro
zumo
zurdo`.split(`
`);var fx=`的
一
是
在
不
了
有
和
人
這
中
大
為
上
個
國
我
以
要
他
時
來
用
們
生
到
作
地
於
出
就
分
對
成
會
可
主
發
年
動
同
工
也
能
下
過
子
說
產
種
面
而
方
後
多
定
行
學
法
所
民
得
經
十
三
之
進
著
等
部
度
家
電
力
裡
如
水
化
高
自
二
理
起
小
物
現
實
加
量
都
兩
體
制
機
當
使
點
從
業
本
去
把
性
好
應
開
它
合
還
因
由
其
些
然
前
外
天
政
四
日
那
社
義
事
平
形
相
全
表
間
樣
與
關
各
重
新
線
內
數
正
心
反
你
明
看
原
又
麼
利
比
或
但
質
氣
第
向
道
命
此
變
條
只
沒
結
解
問
意
建
月
公
無
系
軍
很
情
者
最
立
代
想
已
通
並
提
直
題
黨
程
展
五
果
料
象
員
革
位
入
常
文
總
次
品
式
活
設
及
管
特
件
長
求
老
頭
基
資
邊
流
路
級
少
圖
山
統
接
知
較
將
組
見
計
別
她
手
角
期
根
論
運
農
指
幾
九
區
強
放
決
西
被
幹
做
必
戰
先
回
則
任
取
據
處
隊
南
給
色
光
門
即
保
治
北
造
百
規
熱
領
七
海
口
東
導
器
壓
志
世
金
增
爭
濟
階
油
思
術
極
交
受
聯
什
認
六
共
權
收
證
改
清
美
再
採
轉
更
單
風
切
打
白
教
速
花
帶
安
場
身
車
例
真
務
具
萬
每
目
至
達
走
積
示
議
聲
報
鬥
完
類
八
離
華
名
確
才
科
張
信
馬
節
話
米
整
空
元
況
今
集
溫
傳
土
許
步
群
廣
石
記
需
段
研
界
拉
林
律
叫
且
究
觀
越
織
裝
影
算
低
持
音
眾
書
布
复
容
兒
須
際
商
非
驗
連
斷
深
難
近
礦
千
週
委
素
技
備
半
辦
青
省
列
習
響
約
支
般
史
感
勞
便
團
往
酸
歷
市
克
何
除
消
構
府
稱
太
準
精
值
號
率
族
維
劃
選
標
寫
存
候
毛
親
快
效
斯
院
查
江
型
眼
王
按
格
養
易
置
派
層
片
始
卻
專
狀
育
廠
京
識
適
屬
圓
包
火
住
調
滿
縣
局
照
參
紅
細
引
聽
該
鐵
價
嚴
首
底
液
官
德
隨
病
蘇
失
爾
死
講
配
女
黃
推
顯
談
罪
神
藝
呢
席
含
企
望
密
批
營
項
防
舉
球
英
氧
勢
告
李
台
落
木
幫
輪
破
亞
師
圍
注
遠
字
材
排
供
河
態
封
另
施
減
樹
溶
怎
止
案
言
士
均
武
固
葉
魚
波
視
僅
費
緊
愛
左
章
早
朝
害
續
輕
服
試
食
充
兵
源
判
護
司
足
某
練
差
致
板
田
降
黑
犯
負
擊
范
繼
興
似
餘
堅
曲
輸
修
故
城
夫
夠
送
筆
船
佔
右
財
吃
富
春
職
覺
漢
畫
功
巴
跟
雖
雜
飛
檢
吸
助
昇
陽
互
初
創
抗
考
投
壞
策
古
徑
換
未
跑
留
鋼
曾
端
責
站
簡
述
錢
副
盡
帝
射
草
衝
承
獨
令
限
阿
宣
環
雙
請
超
微
讓
控
州
良
軸
找
否
紀
益
依
優
頂
礎
載
倒
房
突
坐
粉
敵
略
客
袁
冷
勝
絕
析
塊
劑
測
絲
協
訴
念
陳
仍
羅
鹽
友
洋
錯
苦
夜
刑
移
頻
逐
靠
混
母
短
皮
終
聚
汽
村
雲
哪
既
距
衛
停
烈
央
察
燒
迅
境
若
印
洲
刻
括
激
孔
搞
甚
室
待
核
校
散
侵
吧
甲
遊
久
菜
味
舊
模
湖
貨
損
預
阻
毫
普
穩
乙
媽
植
息
擴
銀
語
揮
酒
守
拿
序
紙
醫
缺
雨
嗎
針
劉
啊
急
唱
誤
訓
願
審
附
獲
茶
鮮
糧
斤
孩
脫
硫
肥
善
龍
演
父
漸
血
歡
械
掌
歌
沙
剛
攻
謂
盾
討
晚
粒
亂
燃
矛
乎
殺
藥
寧
魯
貴
鐘
煤
讀
班
伯
香
介
迫
句
豐
培
握
蘭
擔
弦
蛋
沉
假
穿
執
答
樂
誰
順
煙
縮
徵
臉
喜
松
腳
困
異
免
背
星
福
買
染
井
概
慢
怕
磁
倍
祖
皇
促
靜
補
評
翻
肉
踐
尼
衣
寬
揚
棉
希
傷
操
垂
秋
宜
氫
套
督
振
架
亮
末
憲
慶
編
牛
觸
映
雷
銷
詩
座
居
抓
裂
胞
呼
娘
景
威
綠
晶
厚
盟
衡
雞
孫
延
危
膠
屋
鄉
臨
陸
顧
掉
呀
燈
歲
措
束
耐
劇
玉
趙
跳
哥
季
課
凱
胡
額
款
紹
卷
齊
偉
蒸
殖
永
宗
苗
川
爐
岩
弱
零
楊
奏
沿
露
桿
探
滑
鎮
飯
濃
航
懷
趕
庫
奪
伊
靈
稅
途
滅
賽
歸
召
鼓
播
盤
裁
險
康
唯
錄
菌
純
借
糖
蓋
橫
符
私
努
堂
域
槍
潤
幅
哈
竟
熟
蟲
澤
腦
壤
碳
歐
遍
側
寨
敢
徹
慮
斜
薄
庭
納
彈
飼
伸
折
麥
濕
暗
荷
瓦
塞
床
築
惡
戶
訪
塔
奇
透
梁
刀
旋
跡
卡
氯
遇
份
毒
泥
退
洗
擺
灰
彩
賣
耗
夏
擇
忙
銅
獻
硬
予
繁
圈
雪
函
亦
抽
篇
陣
陰
丁
尺
追
堆
雄
迎
泛
爸
樓
避
謀
噸
野
豬
旗
累
偏
典
館
索
秦
脂
潮
爺
豆
忽
托
驚
塑
遺
愈
朱
替
纖
粗
傾
尚
痛
楚
謝
奮
購
磨
君
池
旁
碎
骨
監
捕
弟
暴
割
貫
殊
釋
詞
亡
壁
頓
寶
午
塵
聞
揭
炮
殘
冬
橋
婦
警
綜
招
吳
付
浮
遭
徐
您
搖
谷
贊
箱
隔
訂
男
吹
園
紛
唐
敗
宋
玻
巨
耕
坦
榮
閉
灣
鍵
凡
駐
鍋
救
恩
剝
凝
鹼
齒
截
煉
麻
紡
禁
廢
盛
版
緩
淨
睛
昌
婚
涉
筒
嘴
插
岸
朗
莊
街
藏
姑
貿
腐
奴
啦
慣
乘
夥
恢
勻
紗
扎
辯
耳
彪
臣
億
璃
抵
脈
秀
薩
俄
網
舞
店
噴
縱
寸
汗
掛
洪
賀
閃
柬
爆
烯
津
稻
牆
軟
勇
像
滾
厘
蒙
芳
肯
坡
柱
盪
腿
儀
旅
尾
軋
冰
貢
登
黎
削
鑽
勒
逃
障
氨
郭
峰
幣
港
伏
軌
畝
畢
擦
莫
刺
浪
秘
援
株
健
售
股
島
甘
泡
睡
童
鑄
湯
閥
休
匯
舍
牧
繞
炸
哲
磷
績
朋
淡
尖
啟
陷
柴
呈
徒
顏
淚
稍
忘
泵
藍
拖
洞
授
鏡
辛
壯
鋒
貧
虛
彎
摩
泰
幼
廷
尊
窗
綱
弄
隸
疑
氏
宮
姐
震
瑞
怪
尤
琴
循
描
膜
違
夾
腰
緣
珠
窮
森
枝
竹
溝
催
繩
憶
邦
剩
幸
漿
欄
擁
牙
貯
禮
濾
鈉
紋
罷
拍
咱
喊
袖
埃
勤
罰
焦
潛
伍
墨
欲
縫
姓
刊
飽
仿
獎
鋁
鬼
麗
跨
默
挖
鏈
掃
喝
袋
炭
污
幕
諸
弧
勵
梅
奶
潔
災
舟
鑑
苯
訟
抱
毀
懂
寒
智
埔
寄
屆
躍
渡
挑
丹
艱
貝
碰
拔
爹
戴
碼
夢
芽
熔
赤
漁
哭
敬
顆
奔
鉛
仲
虎
稀
妹
乏
珍
申
桌
遵
允
隆
螺
倉
魏
銳
曉
氮
兼
隱
礙
赫
撥
忠
肅
缸
牽
搶
博
巧
殼
兄
杜
訊
誠
碧
祥
柯
頁
巡
矩
悲
灌
齡
倫
票
尋
桂
鋪
聖
恐
恰
鄭
趣
抬
荒
騰
貼
柔
滴
猛
闊
輛
妻
填
撤
儲
簽
鬧
擾
紫
砂
遞
戲
吊
陶
伐
餵
療
瓶
婆
撫
臂
摸
忍
蝦
蠟
鄰
胸
鞏
擠
偶
棄
槽
勁
乳
鄧
吉
仁
爛
磚
租
烏
艦
伴
瓜
淺
丙
暫
燥
橡
柳
迷
暖
牌
秧
膽
詳
簧
踏
瓷
譜
呆
賓
糊
洛
輝
憤
競
隙
怒
粘
乃
緒
肩
籍
敏
塗
熙
皆
偵
懸
掘
享
糾
醒
狂
鎖
淀
恨
牲
霸
爬
賞
逆
玩
陵
祝
秒
浙
貌
役
彼
悉
鴨
趨
鳳
晨
畜
輩
秩
卵
署
梯
炎
灘
棋
驅
篩
峽
冒
啥
壽
譯
浸
泉
帽
遲
矽
疆
貸
漏
稿
冠
嫩
脅
芯
牢
叛
蝕
奧
鳴
嶺
羊
憑
串
塘
繪
酵
融
盆
錫
廟
籌
凍
輔
攝
襲
筋
拒
僚
旱
鉀
鳥
漆
沈
眉
疏
添
棒
穗
硝
韓
逼
扭
僑
涼
挺
碗
栽
炒
杯
患
餾
勸
豪
遼
勃
鴻
旦
吏
拜
狗
埋
輥
掩
飲
搬
罵
辭
勾
扣
估
蔣
絨
霧
丈
朵
姆
擬
宇
輯
陝
雕
償
蓄
崇
剪
倡
廳
咬
駛
薯
刷
斥
番
賦
奉
佛
澆
漫
曼
扇
鈣
桃
扶
仔
返
俗
虧
腔
鞋
棱
覆
框
悄
叔
撞
騙
勘
旺
沸
孤
吐
孟
渠
屈
疾
妙
惜
仰
狠
脹
諧
拋
黴
桑
崗
嘛
衰
盜
滲
臟
賴
湧
甜
曹
閱
肌
哩
厲
烴
緯
毅
昨
偽
症
煮
嘆
釘
搭
莖
籠
酷
偷
弓
錐
恆
傑
坑
鼻
翼
綸
敘
獄
逮
罐
絡
棚
抑
膨
蔬
寺
驟
穆
冶
枯
冊
屍
凸
紳
坯
犧
焰
轟
欣
晉
瘦
禦
錠
錦
喪
旬
鍛
壟
搜
撲
邀
亭
酯
邁
舒
脆
酶
閒
憂
酚
頑
羽
漲
卸
仗
陪
闢
懲
杭
姚
肚
捉
飄
漂
昆
欺
吾
郎
烷
汁
呵
飾
蕭
雅
郵
遷
燕
撒
姻
赴
宴
煩
債
帳
斑
鈴
旨
醇
董
餅
雛
姿
拌
傅
腹
妥
揉
賢
拆
歪
葡
胺
丟
浩
徽
昂
墊
擋
覽
貪
慰
繳
汪
慌
馮
諾
姜
誼
兇
劣
誣
耀
昏
躺
盈
騎
喬
溪
叢
盧
抹
悶
諮
刮
駕
纜
悟
摘
鉺
擲
頗
幻
柄
惠
慘
佳
仇
臘
窩
滌
劍
瞧
堡
潑
蔥
罩
霍
撈
胎
蒼
濱
倆
捅
湘
砍
霞
邵
萄
瘋
淮
遂
熊
糞
烘
宿
檔
戈
駁
嫂
裕
徙
箭
捐
腸
撐
曬
辨
殿
蓮
攤
攪
醬
屏
疫
哀
蔡
堵
沫
皺
暢
疊
閣
萊
敲
轄
鉤
痕
壩
巷
餓
禍
丘
玄
溜
曰
邏
彭
嘗
卿
妨
艇
吞
韋
怨
矮
歇`.split(`
`);d_();Re();function os(){return Qe(tb.utils.randomPrivateKey())}var q=class a{constructor(){this.tokenContract=null;this.hero_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){if(typeof window.ethereum>"u"){console.log("2222"),N.instance.notice(d.instance.getLanguage(130));return}console.log("ethereum",window.ethereum),xe.instance.sendCustumEvent(10),this.walletClient=Qr({transport:Gr(window.ethereum)});let t=await a.instance.walletClient.getChainId();var e=this.getChain(t);e||(N.instance.notice(d.instance.getLanguage(1171)),e=it),this.publicClient=as({chain:e,transport:Jo()}),this.walletClient=Qr({chain:e,transport:Gr(window.ethereum)});let i=await a.instance.publicClient.getChainId();console.log("clientChainId",t,i),await dy(),console.log("5555"),console.log("6666"),xe.instance.sendCustumEvent(12),this.registerProxy(),console.log("7777"),xe.instance.sendCustumEvent(17)}async registerProxy(){console.log("888"),Zr.instance.init()}async getWalletAddress(){if(this.walletAddress)return this.walletAddress;let[t]=await this.walletClient.requestAddresses();return console.log("address:"+t),t;if(await dy(),yt.type==yt.TYPE_TRUST)try{console.log("initWeb3 -3");let e=await yt.trustProvider.request({method:"eth_requestAccounts"});return console.log("initWeb3 -4"),console.log(e),e[0]}catch(e){console.log("initWeb3 -5"+e),e.code===4001&&console.error("User denied connection.")}else if(yt.type==yt.TYPE_WEB3)return(await window.ethereum.request({method:"eth_requestAccounts"}))[0];return null}async dappLogin(){console.log("dappLogin this.walletAddress: "+this.walletAddress),xe.instance.sendCustumEvent(13),this.walletAddress=await this.getWalletAddress(),xe.instance.sendCustumEvent(14),console.log("login to server",1),await this.signAndLogin(),console.log("login success",1)}getChainId(){let t="";return typeof window.ethereum>"u"&&(t="0x38"),(window.ethereum.chainId+"").indexOf("0x")==-1?t="0x"+window.ethereum.chainId.toString(16):t=window.ethereum.chainId,t!=="0x38"&&t!=="0x61"&&N.instance.notice(d.instance.getLanguage(18)),t}async signAndLogin(t=!1){console.log("signAndLogin mustSign: "+t);var e=!0;let i=new Date().getTime(),n="",r="",o="",s="";if(Q.Debug!=0)e=!1;else if(!t&&localStorage.getItem("TOX-COOKIE"+this.walletAddress)&&Q.Debug==0){let v=localStorage.getItem("TOX-COOKIE"+a.instance.walletAddress),w=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);w=Yi.decode(w);let x=w.split("&");i=parseFloat(x[0]),n=x[1],r=x[2],o=x[3],s=x[4],v&&i&&n&&r&&o&&s&&(e=!1),console.log("needSign: "+e)}if(e){console.log("111");var l=os().substring(0,32);n=Qe(l,{size:32}),console.log("222"),i=new Date().getTime();let w=this.walletAddress+n+i,x=new xu.default("SHA-256","TEXT",{encoding:"UTF8"});x.update(w);let b=x.getHash("HEX");console.log("进入签名",1);let T=await this.walletClient.signMessage({account:this.walletAddress,message:b});console.log("签名结束",1);let P=T.substring(2);r="0x"+P.substring(0,64),o="0x"+P.substring(64,128),s="0x"+P.substring(128,130)}let c={debug:Q.Debug,address:this.walletAddress,time:i,randomHex:n,r,s:o,v:s};xe.instance.sendCustumEvent(15);let u=await M.requestPost("wxgame/player/login",c,!1,!1);if(u){console.log("服务器登录成功"),xe.instance.sendCustumEvent(16),localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,u.loginToken);var m=Yi.encode(i+"&"+n+"&"+r+"&"+o+"&"+s);localStorage.setItem("TOX-COOKIE-CODE"+a.instance.walletAddress,m)}else H.intance.openModule(h.NoServerView);g.intance.event(y.EVENT_LOGIN_GAME_END,u)}async main(){let t=as({chain:ki,transport:Jo()}),e=Qr({chain:ki,transport:Gr(window.ethereum)}),i=await t.getBalance({address:"0x55d398326f99059fF775485246999027B3197955"});console.log("balance:"+i);let[n]=await e.requestAddresses();console.log("address:"+n);let r=await e.signMessage({account:n,message:"Hello world!"});console.log("address: "+n),console.log("message: Hello world!"),console.log("signature: "+r);let o=await t.verifyMessage({address:n,message:"Hello world!",signature:r});console.log("valid: "+o);let l=await(await fetch("http://localhost:3000/api/login",{method:"POST",body:JSON.stringify({address:e.account.address,signature:r})})).json();console.log("data: "+l)}async refreshToken(){let t,e=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);e=Yi.decode(e);let i=e.split("&"),n=parseFloat(i[0]),r=i[1],o=i[2],s=i[3],l=i[4];if(n&&r&&o&&s&&l){let c={debug:Q.Debug,address:this.walletAddress,time:n,randomHex:r,r:o,s,v:l};t=await M.requestPost("wxgame/player/getJwt",c,!1,!1).catch(u=>{}),t&&localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,t.loginToken)}return t}async checkNickName(t){console.log("checkNickName");let e={name:t,address:this.walletAddress};return await M.requestPost("wxgame/player/nameCheck",e,!1,!1).catch(n=>{he.instance.hideLoading(),console.log("checkResult 失败")})}waitGetAccount(){Laya.timer.loop(2e3,this,this.getAcccount)}async getAcccount(){console.log("getAcccount");var t=!0;let e=new Date().getTime(),i="",n="",r="",o="";if(Q.Debug!=0)t=!1;else{let u=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);u=Yi.decode(u);let m=u.split("&");e=parseFloat(m[0]),i=m[1],n=m[2],r=m[3],o=m[4],e&&i&&n&&r&&o&&(t=!1),console.log("needSign: "+t)}if(t){var s=os().substring(0,32);i=Qe(s,{size:32}),e=new Date().getTime();let m=this.walletAddress+i+e,v=new xu.default("SHA-256","TEXT",{encoding:"UTF8"});v.update(m);let w=v.getHash("HEX");console.log("进入签名",1);let x=await this.walletClient.signMessage({account:this.walletAddress,message:w});console.log("签名结束",1);let b=x.substring(2);n="0x"+b.substring(0,64),r="0x"+b.substring(64,128),o="0x"+b.substring(128,130)}let l,c={address:this.walletAddress,time:e,randomHex:i,r:n,s:r,v:o};if(l=await M.requestPost("wxgame/player/getAccount",c,!1,!1).catch(u=>{}),l){Laya.timer.clear(this,this.getAcccount);let u=l.playerDto;localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,l.loginToken),g.intance.event(y.EVENT_WAIT_PLAYERINFO,u)}}async createAcccount(t,e,i,n){console.log("createAcccount");var r=!0;let o=new Date().getTime(),s="",l="",c="",u="";if(Q.Debug!=0)r=!1;else{let x=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);x=Yi.decode(x);let b=x.split("&");o=parseFloat(b[0]),s=b[1],l=b[2],c=b[3],u=b[4],o&&s&&l&&c&&u&&(r=!1),console.log("needSign: "+r)}if(r){var m=os().substring(0,32);s=Qe(m,{size:32}),o=new Date().getTime();let b=this.walletAddress+s+o,T=new xu.default("SHA-256","TEXT",{encoding:"UTF8"});T.update(b);let P=T.getHash("HEX");console.log("进入签名",1);let z=await this.walletClient.signMessage({account:this.walletAddress,message:P});console.log("签名结束",1);let j=z.substring(2);l="0x"+j.substring(0,64),c="0x"+j.substring(64,128),u="0x"+j.substring(128,130)}let v,w={name:t,sex:e,icon:i,country:n,debug:Q.Debug,address:this.walletAddress,time:o,randomHex:s,r:l,s:c,v:u};if(v=await M.requestPost("wxgame/player/create",w,!1,!1).catch(x=>{}),v){let x=v.playerDto;return localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,v.loginToken),x}return null}async getBalance(){return 0}async allowanceAddress(t){}async newAllowanceAddress(t,e){let i=a.instance.walletAddress,n=t;try{console.log("查看是否已经授权, owner:"+i+", spender:"+n+", publicClient.chain.id:"+this.publicClient.chain.id);let r=await a.instance.publicClient.readContract({address:e,abi:ue.TOKEN_ERC20ABI,functionName:"allowance",args:[i,n]});if(r=="0"){console.log("未授权，进行授权, owner:"+i+", allowance:"+r+", walletClient.chain.id:"+this.walletClient.chain.id);let o=await a.instance.walletClient.writeContract({address:e,abi:ue.TOKEN_ERC20ABI,functionName:"approve",args:[n,"100000000000000000000000000000000000000000000000"],account:i});console.log("============"+o);let s=await a.instance.publicClient.waitForTransactionReceipt({hash:o});return console.log(`Tx with hash: ${o}`,s),s&&s.status=="success"?(console.log(`Tx successful with hash: ${o}`),!0):!1}else return console.log("已授权, owner:"+i+", allowance:"+r),!0}catch(r){if(console.log("授权错误====》",r),r instanceof Error){let o=r.message;console.log("授权错误====》",o)}}}async allowanceAddressByTokenAddress(t,e){let i=new window.web3.eth.Contract(ue.TOKEN_ERC20ABI,e);return await i.methods.allowance(this.walletAddress,t).call()=="0"&&(console.log("ERC20 allowance!"),await i.methods.approve(t,"100000000000000000000000000000000000000000000000").send({from:this.walletAddress},(r,o)=>{if(r)return he.instance.hideLoading(),!1})),!0}async getERC20TokenBalance(t){return window.ethereum,await new window.web3.eth.Contract(ue.TOKEN_ERC20ABI,t).methods.balanceOf(this.walletAddress).call()}async getBalance2(t){console.log("getBalance2 publicClient.chain.id:"+this.publicClient.chain.id);let e=this.walletAddress;return await this.publicClient.readContract({address:t,abi:ue.TOKEN_ERC20ABI,functionName:"balanceOf",args:[e]})}async getHeroStatus(t){return await this.hero_contract.methods.getStatus(parseInt(t)).call()}async checkHeroIsBuzy(t){let e=await this.getHeroStatus(t);return parseInt(e)?(N.instance.notice(d.instance.getLanguage(19)),!0):!1}async switchChain(t){var e=this.getChainName(t);if(Q.isInto&&Laya.Browser.onIOS)return N.instance.notice(d.instance.getLanguage(1172,e)),!1;try{console.log("switchChain id:"+t),await this.walletClient.switchChain({id:t})}catch(i){if(console.log(i),i instanceof Error){let n=i.message;console.log("切换错误====》",n)}return N.instance.notice(d.instance.getLanguage(1172,e)),!1}return await this.resetPublicAndWallet(t),!0}async addChain(t){console.log(t);let e=null;switch(t){case 97:e=xt;break;case 9001:e=it;break;case 56:e=Wi}let i=await this.walletClient.addChain({chain:e});console.log(i)}getChainNameByID(t){for(let e in li)if(Number(li[e])==t)return e;return""}getChain(t){var e=null;switch(t){case xt.id:e=xt;break;case it.id:e=it;break;case ki.id:e=ki;break;case Wi.id:e=Wi;break}return e}getChainName(t){var e="";switch(t){case xt.id:e=xt.name;break;case it.id:e=it.name;break;case ki.id:e=ki.name;break;case Wi.id:e=Wi.name;break}return e}async resetPublicAndWallet(t){switch(console.log("resetPublicAndWallet chain:"+t),t){case xt.id:await a.instance.reInitPublicClient(xt),await a.instance.reInitWalletClient(xt);break;case it.id:await a.instance.reInitPublicClient(it),await a.instance.reInitWalletClient(it);break;case ki.id:await a.instance.reInitPublicClient(ki),await a.instance.reInitWalletClient(ki);break;case Wi.id:await a.instance.reInitPublicClient(Wi),await a.instance.reInitWalletClient(Wi);break}}reInitPublicClient(t){console.log("reInitPublicClient chain:"+t),this.publicClient=as({chain:t,transport:Jo()})}reInitWalletClient(t){console.log("reInitWalletClient chain:"+t),this.walletClient=Qr({chain:t,transport:Gr(window.ethereum)})}async getAuthStatus(){let t=a.instance.walletAddress;try{return await a.instance.publicClient.readContract({address:ue.SAT_ADDRESS,abi:ue.SAT_ABI,functionName:"getAuthStatus",args:[t]})}catch(e){if(console.log("授权错误====》",e),e instanceof Error){let i=e.message;console.log("授权错误====》",i)}}}};var fa=class fa{constructor(t,e){this._lineIndex=0;this._isShow=!1;this._alpha=.6;this.isInit=!1;this._isRelease=!0;this._count=0;this.maxCount=1e3;this.prevX=0;this.prevY=0;this._stage=t,this._isRelease=e,this._actionLineList=[],this._time=new Date().getTime();let i,n,r,o,s=function(u){i=u.stageX,n=u.stageY,r=i,o=n},l=function(u){r=u.stageX,o=u.stageY},c=function(u){let m=Laya.stage.width-(r-i)<160,v=Laya.stage.height-(o-n)<160;m&&v&&ci.debugger&&(Laya.Browser.window.console.log=ci.addConsoleLog,ci.debugger.showOrHide())};Laya.stage.on(Laya.Event.MOUSE_DOWN,this,s),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,l),Laya.stage.on(Laya.Event.MOUSE_UP,this,c)}initDebugView(){if(!this.isInit){this.totalW=Laya.stage.width,this.totalH=Laya.stage.height/2,this.bigContainer=new Laya.Sprite,this.bigContainer.zOrder=2e3,this.bigContainer.name="bigContainerDebug",this.bgContainer=new Laya.Sprite,this._bgSp=new Laya.Sprite,this._bgSp.alpha=this._alpha,this._bgSp.graphics.drawRect(0,0,this.totalW,this.totalH,"#000000"),this._bgSp.mouseEnabled=!1,this._debugInfoTf=new Laya.Text,this._debugInfoTf.color="#ffffff",this._debugInfoTf.width=this.totalW-10,this._debugInfoTf.height=this.totalH-10,this._debugInfoTf.overflow="scroll",this._debugInfoTf.wordWrap=!0;let t="[LOADINFO - DEBUGGER]";this.appendText("加载调试信息 "+t,0,!1),this._closeTf=new Laya.Label,this._closeTf.color="#ff0000",this._closeTf.valign="middle",this._closeTf.width=55,this._closeTf.height=55,this._closeTf.borderColor=fa.DEFAULT_COLOR,this._closeTf.text="关闭",this._autoScrollTf=new Laya.Label,this._autoScrollTf.color="#ff0000",this._autoScrollTf.valign="middle",this._autoScrollTf.width=55,this._autoScrollTf.height=55,this._autoScrollTf.borderColor=fa.DEFAULT_COLOR,this._autoScrollTf.text="自动卷屏",this._bgAlpha0=new Laya.Label,this._bgAlpha0.color="#ff0000",this._bgAlpha0.valign="middle",this._bgAlpha0.width=55,this._bgAlpha0.height=55,this._bgAlpha0.borderColor=fa.DEFAULT_COLOR,this._bgAlpha0.text="背景-",this._bgAlpha1=new Laya.Label,this._bgAlpha1.color="#ff0000",this._bgAlpha1.valign="middle",this._bgAlpha1.width=55,this._bgAlpha1.height=55,this._bgAlpha1.borderColor=fa.DEFAULT_COLOR,this._bgAlpha1.text="背景+",this._clearTf=new Laya.Label,this._clearTf.color="#ff0000",this._clearTf.valign="middle",this._clearTf.width=55,this._clearTf.height=55,this._clearTf.borderColor=fa.DEFAULT_COLOR,this._clearTf.text="清理",this._testTf=new Laya.Label,this._testTf.color="#ff0000",this._testTf.width=55,this._testTf.height=55,this._testTf.borderColor=fa.DEFAULT_COLOR,this._testTf.text="点穿",this.bgContainer.x=5,this.bgContainer.y=5,this._debugInfoTf.x=5,this._debugInfoTf.y=5,this.bgContainer.addChild(this._bgSp),this.bgContainer.addChild(this._debugInfoTf),this._closeTf.x=this.totalW-60,this._closeTf.y=5,this.bgContainer.addChild(this._closeTf),this._autoScrollTf.x=this.totalW-60,this._autoScrollTf.y=105,this.bgContainer.addChild(this._autoScrollTf),this._bgAlpha0.x=this.totalW-60,this._bgAlpha0.y=205,this.bgContainer.addChild(this._bgAlpha0),this._bgAlpha1.x=this.totalW-60,this._bgAlpha1.y=305,this.bgContainer.addChild(this._bgAlpha1),this._clearTf.x=this.totalW-60,this._clearTf.y=405,this.bgContainer.addChild(this._clearTf),this._testTf.x=this.totalW-60,this._testTf.y=505,this.bigContainer.addChild(this.bgContainer),this.bigContainer.addChild(this._testTf),this._autoScroll=!0,this._hide=!0,this._debugInfoTf.on(Laya.Event.MOUSE_DOWN,this,this.startScrollText),this._closeTf.on(Laya.Event.CLICK,this,this.onCloseTfClick),this._autoScrollTf.on(Laya.Event.CLICK,this,this.onAutoScrollTfClick),this._bgAlpha0.on(Laya.Event.CLICK,this,this.onBgAlpha0),this._bgAlpha1.on(Laya.Event.CLICK,this,this.onBgAlpha1),this._clearTf.on(Laya.Event.CLICK,this,this.onClearTfClick),this._testTf.on(Laya.Event.CLICK,this,this.onTestTfClick),this.isInit=!0}}show(){this.initDebugView(),this._stage.addChild(this.bigContainer),this._isShow=!0,this.updateView()}hide(){this.initDebugView(),this.bigContainer.parent&&this.bigContainer.parent.removeChild(this.bigContainer),this._isShow=!1,this.updateView()}showOrHide(){this._isShow=!this._isShow,this._isShow?this.show():this.hide()}appendText(t,e=0,i=!0){if(i){let n=new Date().getTime()-this._time;t+="  ["+(n/1e3).toFixed(3)+"]"}this._actionLineList.push([t+`
`,e]),this._lineIndex>=200&&(this._actionLineList.splice(0,20),this._lineIndex-=20),this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf&&(this._debugInfoTf.text="")),this._isShow&&(this._currentLine=this._actionLineList[this._lineIndex++],this._debugInfoTf&&(this._debugInfoTf.text+=this._currentLine[0]),this._autoScroll&&this._debugInfoTf&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY))}updateView(){if(this._isShow){this._count=0,this._debugInfoTf.text="";let t=this._actionLineList.length;for(this._lineIndex=0;this._lineIndex<t;++this._lineIndex)this._currentLine=this._actionLineList[this._lineIndex],this._debugInfoTf.text+=this._currentLine[0],this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf.text="");this._autoScroll&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY)}else this._debugInfoTf.text=""}onCloseTfClick(t){this.hide()}onAutoScrollTfClick(t){this._autoScroll=!this._autoScroll,this._autoScroll?this._autoScrollTf.text="自动卷屏":this._autoScrollTf.text="手动卷屏"}onBgAlpha0(t){this._alpha-=.1,this._alpha<=0&&(this._alpha=0),this._bgSp.alpha=this._alpha}onBgAlpha1(t){this._alpha+=.1,this._alpha>=1&&(this._alpha=1),this._bgSp.alpha=this._alpha}onClearTfClick(t){this._debugInfoTf.text="",this._actionLineList.length=0,this._lineIndex=0}onTestTfClick(t){this.bgContainer.mouseEnabled=!this.bgContainer.mouseEnabled}set testFun(t){this._testFun=t}get bgSp(){return this._bgSp}startScrollText(t){this.prevX=this._debugInfoTf.mouseX,this.prevY=this._debugInfoTf.mouseY,Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.finishScrollText)}finishScrollText(t){Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.finishScrollText)}scrollText(t){let e=this._debugInfoTf.mouseX,i=this._debugInfoTf.mouseY;this._debugInfoTf.scrollX+=this.prevX-e,this._debugInfoTf.scrollY+=this.prevY-i,this.prevX=e,this.prevY=i}};fa.DEFAULT_COLOR="#ffffff";var Iu=fa;var ci=class a{static Initialize(t,e){a.isRelease=e,this.debugger==null&&(this.debugger=new Iu(t,e))}static log(t,e=0,i=0){var n=ge.GetLogTime+" "+t;e&&a.addLog(n,e,i)}static addLog(t,e=0,i=0){this.debugger&&this.debugger.appendText(t,i),console.log(t)}static addConsoleLog(...t){a.debugger&&a.debugger.appendText(t,0)}};var ss=class ss{constructor(){this.module=0;this.errorCode=0;this.errorMessage=""}protocolId(){return ss.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writeString(e.errorMessage),t.writeInt(e.module))}static read(t){if(!t.readBoolean())return null;let e=new ss,i=t.readInt();e.errorCode=i;let n=t.readString();e.errorMessage=n;let r=t.readInt();return e.module=r,e}};ss.PROTOCOL_ID=101;var sb=ss,ls=sb;var cs=class cs{protocolId(){return cs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new cs:null}};cs.PROTOCOL_ID=103;var lb=cs,Eu=lb;var us=class us{constructor(){this.time=0}protocolId(){return us.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.time)}static read(t){if(!t.readBoolean())return null;let e=new us,i=t.readLong();return e.time=i,e}};us.PROTOCOL_ID=104;var cb=us,b_=cb;var ps=class ps{constructor(){this.pid=0;this.roomId=0;this.loginToken=""}protocolId(){return ps.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeString(e.loginToken),t.writeLong(e.pid),t.writeLong(e.roomId))}static read(t){if(!t.readBoolean())return null;let e=new ps,i=t.readString();e.loginToken=i;let n=t.readLong();e.pid=n;let r=t.readLong();return e.roomId=r,e}};ps.PROTOCOL_ID=1001;var ub=ps,Tu=ub;var ms=class ms{constructor(){this.errorCode=0;this.pid=0;this.matchDto=null;this.socketToken=""}protocolId(){return ms.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writePacket(e.matchDto,25010),t.writeLong(e.pid),t.writeString(e.socketToken))}static read(t){if(!t.readBoolean())return null;let e=new ms,i=t.readInt();e.errorCode=i;let n=t.readPacket(25010);e.matchDto=n;let r=t.readLong();e.pid=r;let o=t.readString();return e.socketToken=o,e}};ms.PROTOCOL_ID=1002;var pb=ms,Su=pb;var ds=class ds{protocolId(){return ds.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new ds:null}};ds.PROTOCOL_ID=1004;var mb=ds,Cu=mb;var hs=class hs{constructor(){this.sequence=0;this.param=""}protocolId(){return hs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeString(e.param))}static read(t){if(!t.readBoolean())return null;let e=new hs;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let n=t.readString();return e.param=n,e}};hs.PROTOCOL_ID=1005;var db=hs,g_=db;var fs=class fs{constructor(){this.sequence=0;this.code=0}protocolId(){return fs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeInt(e.code))}static read(t){if(!t.readBoolean())return null;let e=new fs;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let n=t.readInt();return e.code=n,e}};fs.PROTOCOL_ID=1006;var hb=fs,v_=hb;var ys=class ys{constructor(){this.token=""}protocolId(){return ys.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeString(e.token)}static read(t){if(!t.readBoolean())return null;let e=new ys,i=t.readString();return e.token=i,e}};ys.PROTOCOL_ID=1007;var fb=ys,ku=fb;var bs=class bs{constructor(){this.errorCode=0}protocolId(){return bs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new bs,i=t.readInt();return e.errorCode=i,e}};bs.PROTOCOL_ID=1008;var yb=bs,Au=yb;var gs=class gs{protocolId(){return gs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new gs:null}};gs.PROTOCOL_ID=1010;var bb=gs,L_=bb;var vs=class vs{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return vs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.type),t.writeInt(e.id),t.writeLong(e.count))}static read(t){if(!t.readBoolean())return null;let e=new vs;if(!t.isReadable())return e;let i=t.readInt();if(e.type=i,!t.isReadable())return e;let n=t.readInt();if(e.id=n,!t.isReadable())return e;let r=t.readLong();return e.count=r,e}};vs.PROTOCOL_ID=1012;var gb=vs,__=gb;var Ls=class Ls{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return Ls.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeInt(e.dire),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new Ls,i=t.readInt();e.area=i;let n=t.readInt();e.dire=n;let r=t.readInt();e.speed=r;let o=t.readLong();e.time=o;let s=t.readInt();e.x=s;let l=t.readInt();return e.y=l,e}};Ls.PROTOCOL_ID=1013;var vb=Ls,Du=vb;var _s=class _s{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.errorCode=0;this.time=0}protocolId(){return _s.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.dire),t.writeInt(e.errorCode),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new _s,i=t.readInt();e.dire=i;let n=t.readInt();e.errorCode=n;let r=t.readInt();e.speed=r;let o=t.readLong();e.time=o;let s=t.readInt();e.x=s;let l=t.readInt();return e.y=l,e}};_s.PROTOCOL_ID=1014;var Lb=_s,w_=Lb;var ws=class ws{constructor(){this.type=0;this.member=null}protocolId(){return ws.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writePacket(e.member,25011),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new ws,i=t.readPacket(25011);e.member=i;let n=t.readInt();return e.type=n,e}};ws.PROTOCOL_ID=1016;var _b=ws,Mu=_b;var xs=class xs{constructor(){this.pid=0;this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return xs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeInt(e.dire),t.writeLong(e.pid),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new xs,i=t.readInt();e.area=i;let n=t.readInt();e.dire=n;let r=t.readLong();e.pid=r;let o=t.readInt();e.speed=o;let s=t.readLong();e.time=s;let l=t.readInt();e.x=l;let c=t.readInt();return e.y=c,e}};xs.PROTOCOL_ID=1018;var wb=xs,Bu=wb;var Is=class Is{constructor(){this.roomId=0;this.rankList=[];this.reward=[];this.arenaType=0}protocolId(){return Is.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.arenaType),t.writePacketList(e.rankList,25012),t.writePacketList(e.reward,25008),t.writeLong(e.roomId))}static read(t){if(!t.readBoolean())return null;let e=new Is,i=t.readInt();e.arenaType=i;let n=t.readPacketList(25012);e.rankList=n;let r=t.readPacketList(25008);e.reward=r;let o=t.readLong();return e.roomId=o,e}};Is.PROTOCOL_ID=1020;var xb=Is,Pu=xb;var Es=class Es{constructor(){this.targetId=0;this.attackType=0;this.skillId=0}protocolId(){return Es.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.attackType),t.writeInt(e.skillId),t.writeLong(e.targetId))}static read(t){if(!t.readBoolean())return null;let e=new Es,i=t.readInt();e.attackType=i;let n=t.readInt();e.skillId=n;let r=t.readLong();return e.targetId=r,e}};Es.PROTOCOL_ID=1021;var Ib=Es,Ru=Ib;var Ts=class Ts{constructor(){this.errorCode=0}protocolId(){return Ts.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new Ts,i=t.readInt();return e.errorCode=i,e}};Ts.PROTOCOL_ID=1022;var Eb=Ts,x_=Eb;var Ss=class Ss{constructor(){this.attPid=0;this.defPid=0;this.attackValue=[];this.allAtkValue=0;this.bj=!1;this.sb=!1;this.skill=0;this.defHp=0;this.attScore=0;this.defScore=0}protocolId(){return Ss.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.allAtkValue),t.writeLong(e.attPid),t.writeLong(e.attScore),t.writeLongList(e.attackValue),t.writeBoolean(e.bj),t.writeLong(e.defHp),t.writeLong(e.defPid),t.writeLong(e.defScore),t.writeBoolean(e.sb),t.writeInt(e.skill))}static read(t){if(!t.readBoolean())return null;let e=new Ss,i=t.readLong();e.allAtkValue=i;let n=t.readLong();e.attPid=n;let r=t.readLong();e.attScore=r;let o=t.readLongList();e.attackValue=o;let s=t.readBoolean();e.bj=s;let l=t.readLong();e.defHp=l;let c=t.readLong();e.defPid=c;let u=t.readLong();e.defScore=u;let m=t.readBoolean();e.sb=m;let v=t.readInt();return e.skill=v,e}};Ss.PROTOCOL_ID=1024;var Tb=Ss,Nu=Tb;var Cs=class Cs{protocolId(){return Cs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new Cs:null}};Cs.PROTOCOL_ID=1025;var Sb=Cs,Ou=Sb;var ks=class ks{constructor(){this.errorCode=0;this.matchDto=null}protocolId(){return ks.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writePacket(e.matchDto,25010))}static read(t){if(!t.readBoolean())return null;let e=new ks,i=t.readInt();e.errorCode=i;let n=t.readPacket(25010);return e.matchDto=n,e}};ks.PROTOCOL_ID=1026;var Cb=ks,Hu=Cb;var As=class As{constructor(){this.pid=0}protocolId(){return As.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.pid)}static read(t){if(!t.readBoolean())return null;let e=new As,i=t.readLong();return e.pid=i,e}};As.PROTOCOL_ID=1028;var kb=As,Uu=kb;var Ds=class Ds{constructor(){this.pid=0;this.kill=0}protocolId(){return Ds.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.kill),t.writeLong(e.pid))}static read(t){if(!t.readBoolean())return null;let e=new Ds,i=t.readInt();e.kill=i;let n=t.readLong();return e.pid=n,e}};Ds.PROTOCOL_ID=1030;var Ab=Ds,Vu=Ab;var Ms=class Ms{constructor(){this.targetId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return Ms.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeStringStringMap(e.param),t.writeInt(e.skillId),t.writeLong(e.targetId),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Ms,i=t.readStringStringMap();e.param=i;let n=t.readInt();e.skillId=n;let r=t.readLong();e.targetId=r;let o=t.readInt();return e.type=o,e}};Ms.PROTOCOL_ID=1031;var Db=Ms,Fu=Db;var Bs=class Bs{constructor(){this.errorCode=0}protocolId(){return Bs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new Bs,i=t.readInt();return e.errorCode=i,e}};Bs.PROTOCOL_ID=1032;var Mb=Bs,I_=Mb;var Ps=class Ps{constructor(){this.attId=0;this.defId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return Ps.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.attId),t.writeLong(e.defId),t.writeStringStringMap(e.param),t.writeInt(e.skillId),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Ps,i=t.readLong();e.attId=i;let n=t.readLong();e.defId=n;let r=t.readStringStringMap();e.param=r;let o=t.readInt();e.skillId=o;let s=t.readInt();return e.type=s,e}};Ps.PROTOCOL_ID=1034;var Bb=Ps,zu=Bb;var Rs=class Rs{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.skillId=0;this.sourceId=0;this.time=0}protocolId(){return Rs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.skillId),t.writeLong(e.sourceId),t.writeLong(e.targetId),t.writeInt(e.targetX),t.writeInt(e.targetY),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new Rs,i=t.readInt();e.skillId=i;let n=t.readLong();e.sourceId=n;let r=t.readLong();e.targetId=r;let o=t.readInt();e.targetX=o;let s=t.readInt();e.targetY=s;let l=t.readLong();return e.time=l,e}};Rs.PROTOCOL_ID=1035;var Pb=Rs,Gu=Pb;var Ns=class Ns{constructor(){this.errorCode=0;this.time=0}protocolId(){return Ns.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new Ns,i=t.readInt();e.errorCode=i;let n=t.readLong();return e.time=n,e}};Ns.PROTOCOL_ID=1036;var Rb=Ns,E_=Rb;var Os=class Os{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.sourceId=0;this.skillId=0;this.time=0}protocolId(){return Os.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.skillId),t.writeLong(e.sourceId),t.writeLong(e.targetId),t.writeInt(e.targetX),t.writeInt(e.targetY),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new Os,i=t.readInt();e.skillId=i;let n=t.readLong();e.sourceId=n;let r=t.readLong();e.targetId=r;let o=t.readInt();e.targetX=o;let s=t.readInt();e.targetY=s;let l=t.readLong();return e.time=l,e}};Os.PROTOCOL_ID=1038;var Nb=Os,ju=Nb;var Hs=class Hs{constructor(){this.time=0}protocolId(){return Hs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.time)}static read(t){if(!t.readBoolean())return null;let e=new Hs,i=t.readLong();return e.time=i,e}};Hs.PROTOCOL_ID=1040;var Ob=Hs,qu=Ob;var Us=class Us{constructor(){this.moveList=[]}protocolId(){return Us.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writePacketList(e.moveList,1018)}static read(t){if(!t.readBoolean())return null;let e=new Us,i=t.readPacketList(1018);return e.moveList=i,e}};Us.PROTOCOL_ID=1042;var Hb=Us,Wu=Hb;var Vs=class Vs{constructor(){this.id=0;this.value=!1}protocolId(){return Vs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.id),t.writeBoolean(e.value))}static read(t){if(!t.readBoolean())return null;let e=new Vs,i=t.readInt();e.id=i;let n=t.readBoolean();return e.value=n,e}};Vs.PROTOCOL_ID=25007;var Ub=Vs,T_=Ub;var Fs=class Fs{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return Fs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeDouble(e.count),t.writeLong(e.id),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Fs,i=t.readDouble();e.count=i;let n=t.readLong();e.id=n;let r=t.readInt();return e.type=r,e}};Fs.PROTOCOL_ID=25008;var Vb=Fs,S_=Vb;var zs=class zs{constructor(){this.id=0;this.map=0;this.maxX=0;this.maxY=0;this.players=[]}protocolId(){return zs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.id),t.writeInt(e.map),t.writeInt(e.maxX),t.writeInt(e.maxY),t.writePacketList(e.players,25011))}static read(t){if(!t.readBoolean())return null;let e=new zs,i=t.readLong();e.id=i;let n=t.readInt();e.map=n;let r=t.readInt();e.maxX=r;let o=t.readInt();e.maxY=o;let s=t.readPacketList(25011);return e.players=s,e}};zs.PROTOCOL_ID=25009;var Fb=zs,C_=Fb;var Gs=class Gs{constructor(){this.arenaId=0;this.coinType=0;this.roomId=0;this.members=[];this.remainderCd=0;this.startTime=0;this.nowTime=0;this.arenaType=0}protocolId(){return Gs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.arenaId),t.writeInt(e.arenaType),t.writeInt(e.coinType),t.writePacketList(e.members,25011),t.writeLong(e.nowTime),t.writeLong(e.remainderCd),t.writeLong(e.roomId),t.writeLong(e.startTime))}static read(t){if(!t.readBoolean())return null;let e=new Gs,i=t.readInt();e.arenaId=i;let n=t.readInt();e.arenaType=n;let r=t.readInt();e.coinType=r;let o=t.readPacketList(25011);e.members=o;let s=t.readLong();e.nowTime=s;let l=t.readLong();e.remainderCd=l;let c=t.readLong();e.roomId=c;let u=t.readLong();return e.startTime=u,e}};Gs.PROTOCOL_ID=25010;var zb=Gs,k_=zb;var js=class js{constructor(){this.id=0;this.x=0;this.y=0;this.dire=0;this.speed=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.kill=0;this.hp=0;this.maxHp=0;this.atk=0;this.score=0;this.skillCd=new Map;this.commonCd=0;this.area=0;this.country=0;this.nodeId=0;this.lease=0}protocolId(){return js.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeLong(e.atk),t.writeLong(e.commonCd),t.writeInt(e.country),t.writeInt(e.dire),t.writeInt(e.heroColor),t.writeLong(e.heroId),t.writeLong(e.hp),t.writeString(e.icon),t.writeLong(e.id),t.writeInt(e.kill),t.writeInt(e.leader),t.writeInt(e.lease),t.writeLong(e.maxHp),t.writeString(e.name),t.writeInt(e.nodeId),t.writeLong(e.score),t.writeIntLongMap(e.skillCd),t.writeInt(e.speed),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new js,i=t.readInt();e.area=i;let n=t.readLong();e.atk=n;let r=t.readLong();e.commonCd=r;let o=t.readInt();e.country=o;let s=t.readInt();e.dire=s;let l=t.readInt();e.heroColor=l;let c=t.readLong();e.heroId=c;let u=t.readLong();e.hp=u;let m=t.readString();e.icon=m;let v=t.readLong();e.id=v;let w=t.readInt();e.kill=w;let x=t.readInt();e.leader=x;let b=t.readInt();e.lease=b;let T=t.readLong();e.maxHp=T;let P=t.readString();e.name=P;let z=t.readInt();e.nodeId=z;let j=t.readLong();e.score=j;let Z=t.readIntLongMap();e.skillCd=Z;let R=t.readInt();e.speed=R;let Y=t.readInt();e.x=Y;let J=t.readInt();return e.y=J,e}};js.PROTOCOL_ID=25011;var Gb=js,A_=Gb;var qs=class qs{constructor(){this.id=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.rankNum=0;this.kill=0;this.atk=0;this.score=0;this.die=!1;this.country=0;this.heroPk="";this.nodeId=0;this.lease=0}protocolId(){return qs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.atk),t.writeInt(e.country),t.writeBoolean(e.die),t.writeInt(e.heroColor),t.writeLong(e.heroId),t.writeString(e.heroPk),t.writeString(e.icon),t.writeLong(e.id),t.writeInt(e.kill),t.writeInt(e.leader),t.writeInt(e.lease),t.writeString(e.name),t.writeInt(e.nodeId),t.writeInt(e.rankNum),t.writeLong(e.score))}static read(t){if(!t.readBoolean())return null;let e=new qs,i=t.readLong();e.atk=i;let n=t.readInt();e.country=n;let r=t.readBoolean();e.die=r;let o=t.readInt();e.heroColor=o;let s=t.readLong();e.heroId=s;let l=t.readString();e.heroPk=l;let c=t.readString();e.icon=c;let u=t.readLong();e.id=u;let m=t.readInt();e.kill=m;let v=t.readInt();e.leader=v;let w=t.readInt();e.lease=w;let x=t.readString();e.name=x;let b=t.readInt();e.nodeId=b;let T=t.readInt();e.rankNum=T;let P=t.readLong();return e.score=P,e}};qs.PROTOCOL_ID=25012;var jb=qs,D_=jb;var Me=new Map;Me.set(101,ls);Me.set(103,Eu);Me.set(104,b_);Me.set(1001,Tu);Me.set(1002,Su);Me.set(1004,Cu);Me.set(1005,g_);Me.set(1006,v_);Me.set(1007,ku);Me.set(1008,Au);Me.set(1010,L_);Me.set(1012,__);Me.set(1013,Du);Me.set(1014,w_);Me.set(1016,Mu);Me.set(1018,Bu);Me.set(1020,Pu);Me.set(1021,Ru);Me.set(1022,x_);Me.set(1024,Nu);Me.set(1025,Ou);Me.set(1026,Hu);Me.set(1028,Uu);Me.set(1030,Vu);Me.set(1031,Fu);Me.set(1032,I_);Me.set(1034,zu);Me.set(1035,Gu);Me.set(1036,E_);Me.set(1038,ju);Me.set(1040,qu);Me.set(1042,Wu);Me.set(25007,T_);Me.set(25008,S_);Me.set(25009,C_);Me.set(25010,k_);Me.set(25011,A_);Me.set(25012,D_);var qb=class a{static getProtocol(t){let e=Me.get(t);if(e===null)throw"[protocolId:"+t+"]协议不存在";return e}static write(t,e){let i=e.protocolId();t.writeInt(i),a.getProtocol(i).write(t,e)}static read(t){let e=t.readInt();return a.getProtocol(e).read(t)}},jt=qb;var M_={},B_={},bi;try{bi=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}var V=class V{constructor(t,e,i=!1){this.low=t|0,this.high=e|0,this.unsigned=i}toInt(){return this.unsigned?this.low>>>0:this.low}toNumber(){return this.unsigned?(this.high>>>0)*Jr+(this.low>>>0):this.high*Jr+(this.low>>>0)}toString(t=10){if(t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.equals(V.MIN_VALUE)){let r=V.fromNumber(t),o=this.divide(r),s=o.multiply(r).subtract(this);return o.toString(t)+s.toInt().toString(t)}else return"-"+this.negate().toString(t);let e=V.fromNumber(Math.pow(t,6),this.unsigned),i="",n=this;for(;;){let r=n.divide(e),s=(n.subtract(r.multiply(e)).toInt()>>>0).toString(t);if(n=r,n.isZero())return s+i;for(;s.length<6;)s="0"+s;i=""+s+i}}getHighBits(){return this.high}getHighBitsUnsigned(){return this.high>>>0}getLowBits(){return this.low}getLowBitsUnsigned(){return this.low>>>0}getNumBitsAbs(){if(this.isNegative())return this.equals(V.MIN_VALUE)?64:this.negate().getNumBitsAbs();let t=this.high!=0?this.high:this.low,e;for(e=31;e>0&&!(t&1<<e);e--);return this.high!=0?e+33:e+1}isZero(){return this.high===0&&this.low===0}isNegative(){return!this.unsigned&&this.high<0}isPositive(){return this.unsigned||this.high>=0}isOdd(){return(this.low&1)===1}isEven(){return(this.low&1)===0}equals(t){return t instanceof V||(t=V.fromValue(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low}notEquals(t){return!this.equals(t)}lessThan(t){return this.compare(t)<0}lessThanOrEqual(t){return this.compare(t)<=0}greaterThan(t){return this.compare(t)>0}greaterThanOrEqual(t){return this.compare(t)>=0}compare(t){if(t instanceof V||(t=V.fromValue(t)),this.equals(t))return 0;let e=this.isNegative(),i=t.isNegative();return e&&!i?-1:!e&&i?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.subtract(t).isNegative()?-1:1}negate(){return!this.unsigned&&this.equals(V.MIN_VALUE)?V.MIN_VALUE:this.not().add(V.ONE)}add(t){t instanceof V||(t=V.fromValue(t));let e=this.high>>>16,i=this.high&65535,n=this.low>>>16,r=this.low&65535,o=t.high>>>16,s=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,m=0,v=0,w=0;return w+=r+c,v+=w>>>16,w&=65535,v+=n+l,m+=v>>>16,v&=65535,m+=i+s,u+=m>>>16,m&=65535,u+=e+o,u&=65535,V.fromBits(v<<16|w,u<<16|m,this.unsigned)}subtract(t){return t instanceof V||(t=V.fromValue(t)),this.add(t.negate())}multiply(t){if(this.isZero())return V.ZERO;if(t instanceof V||(t=V.fromValue(t)),bi){let x=bi.mul(this.low,this.high,t.low,t.high);return V.fromBits(x,bi.get_high(),this.unsigned)}if(t.isZero())return V.ZERO;if(this.equals(V.MIN_VALUE))return t.isOdd()?V.MIN_VALUE:V.ZERO;if(t.equals(V.MIN_VALUE))return this.isOdd()?V.MIN_VALUE:V.ZERO;if(this.isNegative())return t.isNegative()?this.negate().multiply(t.negate()):this.negate().multiply(t).negate();if(t.isNegative())return this.multiply(t.negate()).negate();if(this.lessThan(N_)&&t.lessThan(N_))return V.fromNumber(this.toNumber()*t.toNumber(),this.unsigned);let e=this.high>>>16,i=this.high&65535,n=this.low>>>16,r=this.low&65535,o=t.high>>>16,s=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,m=0,v=0,w=0;return w+=r*c,v+=w>>>16,w&=65535,v+=n*c,m+=v>>>16,v&=65535,v+=r*l,m+=v>>>16,v&=65535,m+=i*c,u+=m>>>16,m&=65535,m+=n*l,u+=m>>>16,m&=65535,m+=r*s,u+=m>>>16,m&=65535,u+=e*c+i*l+n*s+r*o,u&=65535,V.fromBits(v<<16|w,u<<16|m,this.unsigned)}divide(t){if(t instanceof V||(t=V.fromValue(t)),t.isZero())throw Error("division by zero");if(bi){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;let r=(this.unsigned?bi.div_u:bi.div_s)(this.low,this.high,t.low,t.high);return V.fromBits(r,bi.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?V.UZERO:V.ZERO;let e,i,n;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.greaterThan(this))return V.UZERO;if(t.greaterThan(this.shiftRightUnsigned(1)))return V.UONE;n=V.UZERO}else{if(this.equals(V.MIN_VALUE))return t.equals(V.ONE)||t.equals(V.NEG_ONE)?V.MIN_VALUE:t.equals(V.MIN_VALUE)?V.ONE:(e=this.shiftRight(1).divide(t).shiftLeft(1),e.equals(V.ZERO)?t.isNegative()?V.ONE:V.NEG_ONE:(i=this.subtract(t.multiply(e)),n=e.add(i.divide(t)),n));if(t.equals(V.MIN_VALUE))return this.unsigned?V.UZERO:V.ZERO;if(this.isNegative())return t.isNegative()?this.negate().divide(t.negate()):this.negate().divide(t).negate();if(t.isNegative())return this.divide(t.negate()).negate();n=V.ZERO}for(i=this;i.greaterThanOrEqual(t);){e=Math.max(1,Math.floor(i.toNumber()/t.toNumber()));let r=Math.ceil(Math.log(e)/Math.LN2),o=r<=48?1:Math.pow(2,r-48),s=V.fromNumber(e),l=s.multiply(t);for(;l.isNegative()||l.greaterThan(i);)e-=o,s=V.fromNumber(e,this.unsigned),l=s.multiply(t);s.isZero()&&(s=V.ONE),n=n.add(s),i=i.subtract(l)}return n}modulo(t){if(t instanceof V||(t=V.fromValue(t)),bi){let e=(this.unsigned?bi.rem_u:bi.rem_s)(this.low,this.high,t.low,t.high);return V.fromBits(e,bi.get_high(),this.unsigned)}return this.subtract(this.divide(t).multiply(t))}not(){return V.fromBits(~this.low,~this.high,this.unsigned)}and(t){return t instanceof V||(t=V.fromValue(t)),V.fromBits(this.low&t.low,this.high&t.high,this.unsigned)}or(t){return t instanceof V||(t=V.fromValue(t)),V.fromBits(this.low|t.low,this.high|t.high,this.unsigned)}xor(t){return t instanceof V||(t=V.fromValue(t)),V.fromBits(this.low^t.low,this.high^t.high,this.unsigned)}shiftLeft(t){if(t instanceof V&&(t=t.toInt()),(t&=63)===0)return this;if(t<32){let e=this.low<<t;return V.fromBits(e,this.high<<t|this.low>>>32-t,this.unsigned)}else return V.fromBits(0,this.low<<t-32,this.unsigned)}shiftRight(t){return t instanceof V&&(t=t.toInt()),(t&=63)===0?this:t<32?V.fromBits(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):V.fromBits(this.high>>t-32,this.high>=0?0:-1,this.unsigned)}shiftRightUnsigned(t){return t instanceof V&&(t=t.toInt()),(t&=63)===0?this:t<32?V.fromBits(this.low>>>t|this.high<<32-t,this.high>>>t,this.unsigned):t===32?V.fromBits(this.high,0,this.unsigned):V.fromBits(this.high>>>t-32,0,this.unsigned)}rotateLeft(t){let e;return t instanceof V&&(t=t.toInt()),(t&=63)===0?this:t===32?V.fromBits(this.high,this.low,this.unsigned):t<32?(e=32-t,V.fromBits(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned)):(t-=32,e=32-t,V.fromBits(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned))}rotateRight(t){let e;return t instanceof V&&(t=t.toInt()),(t&=63)===0?this:t===32?V.fromBits(this.high,this.low,this.unsigned):t<32?(e=32-t,V.fromBits(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned)):(t-=32,e=32-t,V.fromBits(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned))}toSigned(){return this.unsigned?V.fromBits(this.low,this.high,!1):this}toUnsigned(){return this.unsigned?this:V.fromBits(this.low,this.high,!0)}toBytes(t){return t?this.toBytesLE():this.toBytesBE()}toBytesLE(){let t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}toBytesBE(){let t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]}static fromBytes(t,e,i){return i?V.fromBytesLE(t,e):V.fromBytesBE(t,e)}static fromBytesLE(t,e){return new V(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)}static fromBytesBE(t,e){return new V(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)}static fromInt(t,e){let i;if(e){if(t>>>=0,i=0<=t&&t<256){let r=B_[t];if(r)return r}let n=V.fromBits(t,(t|0)<0?-1:0,!0);return i&&(B_[t]=n),n}else{if(t|=0,i=-128<=t&&t<128){let r=M_[t];if(r)return r}let n=V.fromBits(t,t<0?-1:0,!1);return i&&(M_[t]=n),n}}static fromNumber(t,e){if(isNaN(t))return e?V.UZERO:V.ZERO;if(e){if(t<0)return V.UZERO;if(t>=O_)return V.MAX_UNSIGNED_VALUE}else{if(t<=-R_)return V.MIN_VALUE;if(t+1>=R_)return V.MAX_VALUE}return t<0?V.fromNumber(-t,e).negate():V.fromBits(t%Jr|0,t/Jr|0,e)}static fromBits(t,e,i){return new V(t,e,i)}static fromString(t,e,i){if(t.length===0)throw Error("empty string");if(t==="NaN"||t==="Infinity"||t==="+Infinity"||t==="-Infinity")return V.ZERO;if(typeof e=="number"?(i=e,e=!1):e=!!e,i=i||10,i<2||36<i)throw RangeError("radix");let n;if((n=t.indexOf("-"))>0)throw Error("interior hyphen");if(n===0)return V.fromString(t.substring(1),e,i).negate();let r=V.fromNumber(Math.pow(i,8)),o=V.ZERO;for(let s=0;s<t.length;s+=8){let l=Math.min(8,t.length-s),c=parseInt(t.substring(s,s+l),i);if(l<8){let u=V.fromNumber(Math.pow(i,l));o=o.multiply(u).add(V.fromNumber(c))}else o=o.multiply(r),o=o.add(V.fromNumber(c))}return o.unsigned=e,o}static fromValue(t,e){return typeof t=="number"?V.fromNumber(t,e):typeof t=="string"?V.fromString(t,e):V.fromBits(t.low,t.high,typeof e=="boolean"?e:t.unsigned)}};V.ZERO=V.fromInt(0),V.UZERO=V.fromInt(0,!0),V.ONE=V.fromInt(1),V.UONE=V.fromInt(1,!0),V.NEG_ONE=V.fromInt(-1),V.MAX_VALUE=V.fromBits(-1,2147483647,!1),V.MAX_UNSIGNED_VALUE=V.fromBits(-1,-1,!0),V.MIN_VALUE=V.fromBits(0,-2147483648,!1);var eo=V,P_=65536,yx=1<<24,Jr=P_*P_,O_=Jr*Jr,R_=O_/2,N_=eo.fromInt(yx);var Ws=class a{constructor(t,e){this.lo=t>>>0,this.hi=e>>>0}zzEncode(){let t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this}zzDecode(){let t=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this}toLong(t){return new eo(this.lo|0,this.hi|0,!!t)}static from(t){return typeof t=="number"?a.fromNumber(t):((typeof t=="string"||t instanceof String)&&(t=eo.fromString(t)),t.low||t.high?new a(t.low>>>0,t.high>>>0):H_)}static fromNumber(t){if(t===0)return H_;let e=t<0;e&&(t=-t);let i=t>>>0,n=(t-i)/4294967296>>>0;return e&&(n=~n>>>0,i=~i>>>0,++i>4294967295&&(i=0,++n>4294967295&&(n=0))),new a(i,n)}},H_=new Ws(0,0);function bx(a,t){let e=0;for(;t.hi;)a.writeByte(t.lo&127|128),t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7,e=e+7;for(;t.lo>127;){if(e>=56){a.writeByte(t.lo);return}a.writeByte(t.lo&127|128),t.lo=t.lo>>>7,e=e+7}a.writeByte(t.lo)}function gx(a){let t=new Ws(0,0),e=0,i=a.length,n=0;if(i-n>4){for(;e<4;++e)if(t.lo=(t.lo|(a[n]&127)<<e*7)>>>0,a[n++]<128)return t;if(t.lo=(t.lo|(a[n]&127)<<28)>>>0,t.hi=(t.hi|(a[n]&127)>>4)>>>0,a[n++]<128)return t;e=0}else{for(;e<3;++e)if(t.lo=(t.lo|(a[n]&127)<<e*7)>>>0,a[n++]<128)return t;return t.lo=(t.lo|(a[n++]&127)<<e*7)>>>0,t}for(;e<4;++e){if(n===8)return t.hi=(t.hi|a[n]<<e*7+3)>>>0,t;if(t.hi=(t.hi|(a[n]&127)<<e*7+3)>>>0,a[n++]<128)return t}return t}function U_(a,t){let e=Ws.from(t).zzEncode();bx(a,e)}function V_(a){return gx(a).zzDecode().toLong(!1)}var F_="",vx=128,Lx=655537,_x=32767,wx=-32768,z_=2147483647,G_=-2147483648,xx=new TextEncoder,Ix=new TextDecoder;function Ex(a,t){if(a.byteLength>t)throw new Error("newLength is too small");let e=new ArrayBuffer(t);return new Uint8Array(e).set(new Uint8Array(a)),e}function Tx(a){return a<<1^a>>31}function Sx(a){return a>>>1^-(a&1)}var Wb=class{constructor(){this.writeOffset=0,this.readOffset=0,this.buffer=new ArrayBuffer(vx),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}setWriteOffset(t){if(t>this.buffer.byteLength)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.writeOffset=t}setReadOffset(t){if(t>this.writeOffset)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.readOffset=t}getCapacity(){return this.buffer.byteLength-this.writeOffset}ensureCapacity(t){for(;t-this.getCapacity()>0;){let e=this.buffer.byteLength*2;if(e>Lx)throw new Error("out of memory error");this.buffer=Ex(this.buffer,e),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}}isReadable(){return this.writeOffset>this.readOffset}writeBytes(t){let e=t.byteLength;this.ensureCapacity(e),new Uint8Array(this.buffer).set(new Uint8Array(t),this.writeOffset),this.writeOffset+=e}toBytes(){let t=new ArrayBuffer(this.writeOffset);return new Uint8Array(t).set(new Uint8Array(this.buffer.slice(0,this.writeOffset))),t}writeBoolean(t){if(!(t===!0||t===!1))throw new Error("value must be true of false");this.ensureCapacity(1),t===!0?this.bufferView.setInt8(this.writeOffset,1):this.bufferView.setInt8(this.writeOffset,0),this.writeOffset++}readBoolean(){let t=this.bufferView.getInt8(this.readOffset);return this.readOffset++,t===1}writeByte(t){this.ensureCapacity(1),this.bufferView.setInt8(this.writeOffset,t),this.writeOffset++}readByte(){let t=this.bufferView.getInt8(this.readOffset);return this.readOffset++,t}writeShort(t){if(!(wx<=t&&t<=_x))throw new Error("value must range between minShort:-32768 and maxShort:32767");this.ensureCapacity(2),this.bufferView.setInt16(this.writeOffset,t),this.writeOffset+=2}readShort(){let t=this.bufferView.getInt16(this.readOffset);return this.readOffset+=2,t}writeRawInt(t){if(!(G_<=t&&t<=z_))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");this.ensureCapacity(4),this.bufferView.setInt32(this.writeOffset,t),this.writeOffset+=4}readRawInt(){let t=this.bufferView.getInt32(this.readOffset);return this.readOffset+=4,t}writeInt(t){if(!(G_<=t&&t<=z_))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");if(this.ensureCapacity(5),t=Tx(t),!(t>>>7)){this.writeByte(t);return}if(!(t>>>14)){this.writeByte(t&127|128),this.writeByte(t>>>7);return}if(!(t>>>21)){this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14);return}if(!(t>>>28)){this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14|128),this.writeByte(t>>>21);return}this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14|128),this.writeByte(t>>>21|128),this.writeByte(t>>>28)}readInt(){let t=this.readByte(),e=t&127;return t&128&&(t=this.readByte(),e|=(t&127)<<7,t&128&&(t=this.readByte(),e|=(t&127)<<14,t&128&&(t=this.readByte(),e|=(t&127)<<21,t&128&&(t=this.readByte(),e|=(t&127)<<28)))),Sx(e)}writeLong(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(9),U_(this,t)}readLong(){let t=new ArrayBuffer(9),e=new DataView(t,0,t.byteLength),i=0,n=this.readByte();return e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n))))))))),V_(new Uint8Array(t.slice(0,i))).toNumber()}writeFloat(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(4),this.bufferView.setFloat32(this.writeOffset,t),this.writeOffset+=4}readFloat(){let t=this.bufferView.getFloat32(this.readOffset);return this.readOffset+=4,t}writeDouble(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(8),this.bufferView.setFloat64(this.writeOffset,t),this.writeOffset+=8}readDouble(){let t=this.bufferView.getFloat64(this.readOffset);return this.readOffset+=8,t}writeChar(t){if(t==null||t.length===0){this.writeString(F_);return}this.writeString(t.charAt(0))}readChar(){return this.readString()}writeString(t){if(t==null||t.trim().length===0){this.writeInt(0);return}let e=xx.encode(t);this.ensureCapacity(5+e.length),this.writeInt(e.length),e.forEach(i=>this.writeByte(i))}readString(){let t=this.readInt();if(t<=0)return F_;let e=new Uint8Array(this.buffer.slice(this.readOffset,this.readOffset+t)),i=Ix.decode(e);return this.readOffset+=t,i}writePacketFlag(t){let e=t==null;return this.writeBoolean(!e),e}writePacket(t,e){jt.getProtocol(e).write(this,t)}readPacket(t){return jt.getProtocol(t).read(this)}writeBooleanArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeBoolean(e)}))}readBooleanArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readBoolean());return t}writeByteArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeByte(e)}))}readByteArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readByte());return t}writeShortArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeShort(e)}))}readShortArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readShort());return t}writeIntArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeInt(e)}))}readIntArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readInt());return t}writeLongArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeLong(e)}))}readLongArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readLong());return t}writeFloatArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeFloat(e)}))}readFloatArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readFloat());return t}writeDoubleArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeDouble(e)}))}readDoubleArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readDouble());return t}writeStringArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeString(e)}))}readStringArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readString());return t}writeCharArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeChar(e)}))}readCharArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readChar());return t}writePacketArray(t,e){if(t===null)this.writeInt(0);else{let i=jt.getProtocol(e);this.writeInt(t.length),t.forEach(n=>{i.write(this,n)})}}readPacketArray(t){let e=[],i=this.readInt();if(i>0){let n=jt.getProtocol(t);for(let r=0;r<i;r++)e.push(n.read(this))}return e}writeBooleanList(t){this.writeBooleanArray(t)}readBooleanList(){return this.readBooleanArray()}writeByteList(t){this.writeByteArray(t)}readByteList(){return this.readByteArray()}writeShortList(t){this.writeShortArray(t)}readShortList(){return this.readShortArray()}writeIntList(t){this.writeIntArray(t)}readIntList(){return this.readIntArray()}writeLongList(t){this.writeLongArray(t)}readLongList(){return this.readLongArray()}writeFloatList(t){this.writeFloatArray(t)}readFloatList(){return this.readFloatArray()}writeDoubleList(t){this.writeDoubleArray(t)}readDoubleList(){return this.readDoubleArray()}writeStringList(t){this.writeStringArray(t)}readStringList(){return this.readStringArray()}writeCharList(t){this.writeCharArray(t)}readCharList(){return this.readCharArray()}writePacketList(t,e){this.writePacketArray(t,e)}readPacketList(t){return this.readPacketArray(t)}writeBooleanSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeBoolean(e)}))}readBooleanSet(){return new Set(this.readBooleanArray())}writeByteSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeByte(e)}))}readByteSet(){return new Set(this.readByteArray())}writeShortSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeShort(e)}))}readShortSet(){return new Set(this.readShortArray())}writeIntSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeInt(e)}))}readIntSet(){return new Set(this.readIntArray())}writeLongSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeLong(e)}))}readLongSet(){return new Set(this.readLongArray())}writeFloatSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeFloat(e)}))}readFloatSet(){return new Set(this.readFloatArray())}writeDoubleSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeDouble(e)}))}readDoubleSet(){return new Set(this.readDoubleArray())}writeStringSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeString(e)}))}readStringSet(){return new Set(this.readStringArray())}writeCharSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeChar(e)}))}readCharSet(){return new Set(this.readCharArray())}writePacketSet(t,e){if(t===null)this.writeInt(0);else{let i=jt.getProtocol(e);this.writeInt(t.size),t.forEach(n=>{i.write(this,n)})}}readPacketSet(t){return new Set(this.readPacketArray(t))}writeIntIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeInt(e)}))}readIntIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readInt(),r=this.readInt();t.set(n,r)}return t}writeIntLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeLong(e)}))}readIntLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readInt(),r=this.readLong();t.set(n,r)}return t}writeIntStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeString(e)}))}readIntStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readInt(),r=this.readString();t.set(n,r)}return t}writeIntPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=jt.getProtocol(e);this.writeInt(t.size),t.forEach((n,r)=>{this.writeInt(r),i.write(this,n)})}}readIntPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let n=jt.getProtocol(t);for(let r=0;r<i;r++){let o=this.readInt(),s=n.read(this);e.set(o,s)}}return e}writeLongIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeInt(e)}))}readLongIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readLong(),r=this.readInt();t.set(n,r)}return t}writeLongLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeLong(e)}))}readLongLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readLong(),r=this.readLong();t.set(n,r)}return t}writeLongStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeString(e)}))}readLongStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readLong(),r=this.readString();t.set(n,r)}return t}writeLongPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=jt.getProtocol(e);this.writeInt(t.size),t.forEach((n,r)=>{this.writeLong(r),i.write(this,n)})}}readLongPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let n=jt.getProtocol(t);for(let r=0;r<i;r++){let o=this.readLong(),s=n.read(this);e.set(o,s)}}return e}writeStringIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeInt(e)}))}readStringIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readString(),r=this.readInt();t.set(n,r)}return t}writeStringLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeLong(e)}))}readStringLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readString(),r=this.readLong();t.set(n,r)}return t}writeStringStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeString(e)}))}readStringStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readString(),r=this.readString();t.set(n,r)}return t}writeStringPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=jt.getProtocol(e);this.writeInt(t.size),t.forEach((n,r)=>{this.writeString(r),i.write(this,n)})}}readStringPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let n=jt.getProtocol(t);for(let r=0;r<i;r++){let o=this.readString(),s=n.read(this);e.set(o,s)}}return e}},Kb=Wb;var qt=class qt{constructor(){this.m_iConnectTimes=0;this.m_iMaxTimes=10;this.m_iHeartTime=6e4;this._isMatching=!1;this.isFirst=!0;this.m_socket=new Laya.Socket,this.m_socket.on(Laya.Event.OPEN,this,this.onSocketOpen),this.m_socket.on(Laya.Event.CLOSE,this,this.onSocketClose),this.m_socket.on(Laya.Event.MESSAGE,this,this.onMessageReveived),this.m_socket.on(Laya.Event.ERROR,this,this.onConnectError)}static get instance(){return qt._instance==null&&(qt._instance=new qt),qt._instance}get isMatching(){return this._isMatching}set isMatching(t){this._isMatching=t,t||(this.m_socket.close(),this.isConnect=!1)}initSocket(){this.isMatching=!0,this.isFirst=!0;var t=K.instance.roomDto.connectAddr;qt.m_strHttpHost=t,this.connect()}onSocketOpen(){this.isConnect=!0,this.m_iConnectTimes=0,ci.log("websocket----websocket connected",1),this.onLogin()}onLogin(){if(this.isFirst){let t=new Tu;t.roomId=K.instance.roomDto.roomId,t.loginToken=localStorage.getItem("TOX-COOKIE"+q.instance.walletAddress),t.pid=L.instance.playerDto.pid,this.sendData(t)}else{let t=new ku;t.token=this.socketToken,this.sendData(t)}}onSocketClose(t){console.log("websocket----closed"),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,console.log("websocket----closed m_iConnectTimes:"+this.m_iConnectTimes+", m_iMaxTimes: "+this.m_iMaxTimes),this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,this.onReconnect):he.instance.hideLoading()))}onReconnect(){qt.instance.reconnect(),qt.instance.m_iConnectTimes++}onConnectError(t){console.log("websocket----onConnectError e:"+ +t),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,this.onReconnect):he.instance.hideLoading()))}connect(){console.log("websocket----connect: "+qt.m_strHttpHost),this.isMatching&&(this.isConnect||(this.m_socket.connectByUrl(qt.m_strHttpHost),console.log("websocket----connect websocket")))}reconnect(){console.log("websocket----reconnect: "+qt.m_strHttpHost),this.isMatching&&(this.isConnect||(this.m_socket.connectByUrl(qt.m_strHttpHost),console.log("websocket----connect websocket")))}onSendMessage(){}sendData(t){if(this.isMatching)if(this.isConnect){let e=new Kb;e.setWriteOffset(4),jt.write(e,t),e.writeBoolean(!1);let i=e.writeOffset;e.setWriteOffset(0),e.writeRawInt(i-4),e.setWriteOffset(i),this.m_socket.send(e.buffer),console.log(ge.GetLogTime+" websocket ------>>>>>>>> send message PROTOCOL_ID:"+t.protocolId()+"，内容："+JSON.stringify(t))}else ci.log("socket send error： "+JSON.stringify(t))}async onMessageReveived(t){let e=t,i=new Kb;i.writeBytes(e),i.setReadOffset(4);let n=jt.read(i),r=n.protocolId();console.log(ge.GetLogTime+" websocket ------<<<<<<<< recv PROTOCOL_ID: "+r+"，内容："+JSON.stringify(n));let o=n.errorCode;if(o&&o>0){console.warn("errorCode "+o+", errorMessage： "+me.instance.get(o)),(o==24||o==25)&&(this.isMatching=!1,Et.instance.close(),fe.intance.currSceneName!=$.M_SCENE_MATCH&&(fe.intance.setCurrentScene($.M_SCENE_MAIN),ge.commTipWithYes(me.instance.get(o))));return}switch(g.intance.event("msg_"+r,[e]),r){case Su.PROTOCOL_ID:console.log("收到了登录返回"),this.isFirst=!1;let l=n;M.needHeart=!1,K.instance.matchDto=l.matchDto,this.socketToken=l.socketToken,fe.intance.setCurrentScene($.M_SCENE_MATCH);break;case Au.PROTOCOL_ID:console.log("断线重连 返回");break;case qu.PROTOCOL_ID:console.log("收到比赛开始数据");let c=n;H.intance.disposeView(h.MatchReadyView),K.instance.stopAll=!1;break;case Bu.PROTOCOL_ID:console.log("收到移动数据");let u=n;O.instance.onRevMovePush(u);break;case Wu.PROTOCOL_ID:console.log("收到移动数据列表");var s=n.moveList;s.forEach(R=>{O.instance.onRevMovePush(R)});break;case ju.PROTOCOL_ID:console.log("收到推人移动数据");let v=n;O.instance.onRevTargetMovePush(v);break;case Nu.PROTOCOL_ID:console.log("收到伤害数据");let w=n;O.instance.onRevAttackPush(w);break;case zu.PROTOCOL_ID:console.log("收到动画数据");let x=n;O.instance.onRevAnimationPush(x);break;case Mu.PROTOCOL_ID:console.log("收到玩家加入或离开数据");let b=n;O.instance.addPlayer(b);break;case Uu.PROTOCOL_ID:console.log("收到第一滴血数据");let T=n;g.intance.event(y.EVENT_FirstBlood,[T]);break;case Vu.PROTOCOL_ID:console.log("收到多杀数据");let P=n;g.intance.event(y.EVENT_MutiKill,[P]);break;case Pu.PROTOCOL_ID:console.log("收到比赛结束");let z=n;K.instance.matchDto&&K.instance.onGoMatchEndRank(z.rankList,z.reward);break;case Hu.PROTOCOL_ID:console.log("收到了恢复数据返回");let j=n;O.instance.onRevRestorePush(j.matchDto);break;case ls.PROTOCOL_ID:console.log("收到了错误信息返回");let Z=new ls;Object.assign(Z,n),console.log("errorMessage： "+Z.errorMessage),me.instance.showErrByString(Z.errorMessage);break;case Cu.PROTOCOL_ID:this.isOtherLogin=!0,Laya.timer.clearAll(this),ge.otherLogin(),console.log("websocket----------------------------otherLogin");break;default:break}}sendHeart(){this.m_socket.connected&&this.sendData(new Eu)}};qt.m_strHttpHost=getWSServer(),qt.CMD_99999=99999;var rt=qt;var Et=class a{constructor(){this.inMinWaiting=!1}openMinView(){this.enterRoomSpr||(this.enterRoomSpr=this.enterRoomPrefab.create()),this.enterRoomSpr.x=Laya.stage.width>>1,this.enterRoomSpr.y=0,this.enterRoomSpr.zOrder=1e3,Laya.stage.addChild(this.enterRoomSpr),this.inMinWaiting=!0}closeMinView(){this.enterRoomSpr&&this.enterRoomSpr.removeSelf(),this.inMinWaiting=!1}openMaxView(){this.closeMinView();var t=!0;H.intance.openModule(h.EnterRoomView,t)}static get instance(){return a._instance==null&&(a._instance=new a),a._instance}init(){this.closeMinView(),this.initRoomData(),Laya.timer.loop(1e3,this,this.onRefreshRoom)}updateBattleCD(){K.instance.coolDownTime=Math.round(K.instance.roomDto.joinCd/1e3),g.intance.event(y.EVENT_UPDATE_MATCH_ROOM),K.instance.coolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):this.onGoMatch()}onSetCoolTime(){K.instance.coolDownTime>=0?K.instance.coolDownTime--:this.onGoMatch()}async onGoMatch(){Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.clear(this,this.onRefreshRoom);let t=await M.requestPost("wxgame/room/info",{roomId:K.instance.roomDto.roomId});var e=t.roomDto;e.joinCd==0?t.roomDto.enterGame==1?(Laya.timer.clearAll(this),rt.instance.initSocket(),this.closeMinView()):(this.close(),g.intance.event(y.EVENT_ENTER_MATCH_ROOM,!0),ge.commTipWithYes(me.instance.get(25))):(K.instance.roomDto=e,this.updateBattleCD())}initRoomData(){var t=K.instance.roomDto.members.length,e=K.instance.currArenaItem.numberMax;if(t>=e){this.onGoMatch();return}this.updateBattleCD()}async onRefreshRoom(){let t=await M.requestPost("wxgame/room/info",{roomId:K.instance.roomDto.roomId});K.instance.roomDto=t.roomDto,this.initRoomData(),K.instance.setMatchRes()}close(){Laya.timer.clearAll(this),g.intance.event(y.EVENT_CLOSE_MODULE,h.EnterRoomView),this.closeMinView()}};var j_=Laya.HttpRequest,Zt=class Zt{static requestGet(t,e,i=!1,n=!0,r=!1){return new Promise((o,s)=>{var l=Laya.Pool.getItem("HttpRequest");l||(l=new j_),l.http.timeout=2e3,l.on(Laya.Event.COMPLETE,null,w),l.on(Laya.Event.ERROR,null,x),l.http.onreadystatechange=()=>{if(l.http.readyState===XMLHttpRequest.DONE){var T=l.http.status;T>=200&&T<400||(s(),b())}};let c=localStorage.getItem("TOX-COOKIE"+q.instance.walletAddress),u=["Content-Type","application/json"];c&&(u=[...u,"Authorization",c]);let m;t.startsWith("http")?(m=t+v(e),l.send(t,e,"post","json",u)):m=Zt.httpRoot+"/"+t+v(e),Zt.httpRoot!="https://api.cybertron.world"&&ci.log("REQUEST_GET "+m,1),l.send(m,null,"get","json",u);function v(T){if(typeof T=="string")return T;let P="";for(let z in T)P+="&"+z+"="+T[z];return P}function w(T){T.code==="0"?o(T.data):(me.instance.showErrorWord(parseInt(T.code)),s(T.code)),b()}function x(T,P){debugger;s(T),b()}function b(){l.off(Laya.Event.COMPLETE,null,w),l.off(Laya.Event.ERROR,null,x),Laya.Pool.recover("HttpRequest",l)}})}static startHeart(){Laya.timer.loop(1e3,this,this.onHeart)}static async onHeart(){let t=new Date().getTime();var e=await this.requestPost("wxgame/sys/ping",{},!0,!0),n=new Date().getTime()-t;g.intance.event(y.EVENT_Game_Delay,n);var r=e.time;L.instance.m_serverTime=r;var o=e.resChange;L.instance.playerDto.fightHeroPk=e.fightHeroPk;var s=e.itemChange;o&&o.length>0&&(L.instance.moneyInfoHander(o,!0,!1),g.intance.event(It.UPDATE_LOCAL_WALLET_LIST_EVENT),g.intance.event(y.REFRESH_ALL_WITHDRAW_DATA)),s&&s.length>0&&L.instance.itemsDataUpdataHandler(s,!0,!1),e.redPoint&&(L.instance.redDotData=e.redPoint)}static requestPost(t,e,i=!1,n=!0,r=!1){let o=localStorage.getItem("TOX-COOKIE"+q.instance.walletAddress);return i&&!o?[]:new Promise((s,l)=>{var c=Laya.Pool.getItem("HttpRequest");c||(c=new j_),c.http.timeout=1e4,c.once(Laya.Event.COMPLETE,null,v),c.once(Laya.Event.ERROR,null,w);let u=[];o&&n&&(u=[...u,"Authorization",o]);var m=Zt.seq+1;Zt.seq=m,Zt.httpRoot!="https://api.cybertron.world"&&t!="wxgame/sys/ping"&&console.log(ge.GetLogTime+" "+m+" >>> HTTP_POST "+Zt.httpRoot+"/"+t+" "+JSON.stringify(e),o),t.startsWith("http")?c.send(t,e,"post","json",u):c.send(Zt.httpRoot+"/"+t,e,"post","json",u);async function v(b){if(Zt.httpRoot!="https://api.cybertron.world"&&t!="wxgame/sys/ping"&&console.log(ge.GetLogTime+" "+m+" <<< hTTP_RCV data: "+JSON.stringify(b),1),b.errorCode==0||b.errorCode==="0")s(b);else{if(b.errorCode===10)ge.heroNotEnought();else if(b.errorCode===18)ge.titickNotEnought();else if(b.errorCode===26)ge.RemError();else if(b.errorCode!==29)if(b.errorCode===30)ge.NoHeroError(me.instance.get(b.errorCode));else if(b.errorCode===32)ge.NoHeroError(me.instance.get(b.errorCode));else if(b.errorCode===2||b.errorCode===21)ge.alertNoAll(me.instance.get(b.errorCode));else if(b.errorCode===5)if(Q.Debug==0){localStorage.setItem("TOX-COOKIE"+q.instance.walletAddress,"");var T=await q.instance.refreshToken();T&&Zt.requestPost(t,e,i,n)}else localStorage.setItem("TOX-COOKIE"+q.instance.walletAddress,""),me.instance.showErrorWord(parseInt(b.errorCode));else b.errorCode===17?Q.Debug==0?(localStorage.setItem("TOX-COOKIE"+q.instance.walletAddress,""),q.instance.signAndLogin(),me.instance.showErrorWord(parseInt(b.errorCode))):(localStorage.setItem("TOX-COOKIE"+q.instance.walletAddress,""),me.instance.showErrorWord(parseInt(b.errorCode))):b.errorCode===9?(Et.instance.close(),ge.commTipWithYes(me.instance.get(b.errorCode))):r||me.instance.showErrorWord(parseInt(b.errorCode));l(b.errorCode)}x()}function w(b,T){console.log("errorHandler data: "+b,1),r||me.instance.showErrorWord(500),l(b),x()}function x(){c.off(Laya.Event.COMPLETE,null,v),c.off(Laya.Event.ERROR,null,w),Laya.Pool.recover("HttpRequest",c)}})}};Zt.httpRoot=getServer(),Zt.needHeart=!0,Zt.seq=0;var M=Zt;var K=class a{constructor(){this._inited=!1;this.stopAll=!1;this.heroReadyDic=new ne;this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}get matchDto(){return this._matchDto}set matchDto(t){this._matchDto=t,t&&t.startTime-t.nowTime>0?this.stopAll=!0:this.stopAll=!1}setMatchRes(){this.heroReadyDic=new ne;var t=this.roomDto.members.length,e=[],i=this.currArenaItem.mapid;if(this.heroReadyDic.get("map_"+i)==null){var i=a.instance.currArenaItem.mapid,n=k.instance.getMapImg(i);e.push(n);var r=k.instance.getMapPrefab(i);e.push(r),this.heroReadyDic.set("map_"+i,!0)}for(var o=0;o<t;o++){var s=this.roomDto.members[o];if(this.heroReadyDic.get(s.heroId+"_"+s.heroColor)==null){var l=U.intance.m_dicHeros.get(s.heroId),c=k.instance.getHeroSkRes(l.serialId,s.heroColor);e.push({url:c,type:Laya.Loader.SPINE}),this.heroReadyDic.set(s.heroId+"_"+s.heroColor,!0)}}e.length>0&&Laya.loader.load(e,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{})}onPreAssetPress1(t){}async checkMatchRankData(){if(this.reward==null){let t=await M.requestPost("wxgame/room/balanceInfo",{roomId:a.instance.matchDto.roomId});rt.instance.isMatching=!1,a.instance.reward==null&&(a.instance.reward=t.reward,H.intance.openModule(h.MatchEndRankView,t.rankList))}}onGoMatchEndRank(t,e){rt.instance.isMatching=!1,this.reward==null&&(a.instance.reward=e,H.intance.openModule(h.MatchEndRankView,t))}clearData(){this.roomDto=null,this.matchDto=null,this.reward=null,this.heroReadyDic=null,this.currArenaItem=null,O.instance.clearData(),M.needHeart=!0,Pe.instance.playMusicByName(Pe.soundName_bg,".mp3"),ze.instance.needPop=!0,Kt.instance.startShow()}};var At=class a{constructor(){}static judgePosition(t,e){let i=Math.atan2(e,t)*180/Math.PI;return i<0&&(i+=360),Math.floor(i)}static distancePoint(t,e,i,n){return Math.sqrt((t-i)*(t-i)+(e-n)*(e-n))}get2D_Distance(t,e){return Math.sqrt(Math.pow(Math.abs(t),2)+Math.pow(Math.abs(e),2))}static rollCharacterByDir(t,e,i,n){let r=i;return a.rollCharacter(t,e,r,n)}static rollCharacter(t,e,i,n){let r=i*(Math.PI/180);var o=t+n*Math.cos(r),s=e+n*Math.sin(r),l=K.instance.currArenaItem.mapid,c=U.intance.m_dicMaps.get(l),u=c.offset;return o<u?o=u:o>c.width-u&&(o=c.width-u),s<u?s=u:s>c.height-u&&(s=c.height-u),console.log(`新的坐标：X=${o}, Y=${s}`),[o,s]}static createDirectPath(t,e,i,n=40,r=25){for(var o=[],s=i*Math.PI/180,l=1;l<n;++l){var c=t,u=e+r*l,m=-(u-e)*Math.sin(s)+t,v=(u-e)*Math.cos(s)+e;o.push(m,v)}return o}static pointsBack(t,e){if(e<=0||!t||t.length<4)return t;for(var i=0,n=-1,r=-1,o=0;o<t.length;o+=2){var s=t[o],l=t[o+1];n>0&&r>0&&(i+=this.distancePoint(n,r,s,l)),n=s,r=l}if(i<e)return null;for(var c=t.concat(),u=0,m=0;c&&c.length>=4&&u<e;){var v=c.pop(),w=c.pop(),x=c[c.length-1],b=c[c.length-2];if(u+=this.distancePoint(b,x,w,v),m=u-e,m>0){var T=Math.atan2(x-v,b-w),P=T*180/Math.PI+90;T=P*Math.PI/180;var z=x+m,j=-(z-x)*Math.sin(T)+b,Z=(z-x)*Math.cos(T)+x;c.push(j,Z)}}return c}static createLinePath(t,e,i,n,r=25,o=0){var s=[],l=Math.atan2(n-e,i-t);l=(l*180/Math.PI-90)*Math.PI/180;for(var c=this.distancePoint(t,e,i,n)-o,u=0,m=0;c>u;){var v=t,w=e+r*m,x=-(w-e)*Math.sin(l)+t,b=(w-e)*Math.cos(l)+e;u=this.distancePoint(t,e,x,b),c>u&&s.push(x,b),m++}return o==0&&s.push(i,n),s}static rolePosTransform(t,e,i){var n=new Laya.Matrix;return n.rotate(Math.PI/180*(t.modelAngle-90)),n.translate(e.x,e.y),n.transformPoint(i)}static pointtInPolygon(t,e){for(var i=0,n=0;n<e.length;n++){var r=e[n],o=e[(n+1)%e.length];if(r.y!=o.y&&!(t.y<Math.min(r.y,o.y))&&!(t.y>=Math.max(r.y,o.y))){var s=(t.y-r.y)*(o.x-r.x)/(o.y-r.y)+r.x;s>t.x&&i++}}return i%2==1}static pointInPie(t,e,i,n,r,o){var s=Math.atan2(o.y-e,o.x-t)*180/Math.PI,l=this.distancePoint(t,e,o.x,o.y);return s>=i&&s<=n&&l<=r}static getRandInRound(t,e){return Math.floor(Math.random()*(e-t+1))+t}static getUnitVector(t){let i=t*(Math.PI/180),n=1*Math.cos(i),r=1*Math.sin(i);return new Laya.Point(n,r)}static subtract(t,e){let i=new Laya.Point;return i.x=t.x-e.x,i.y=t.y-e.y,i}};var Jt=class Jt{constructor(){this.arenaType=1;this.validEnemyList=[];this.gameWindowX=0;this.gameWindowY=0;this.isControl=!1}get gameMap(){return this._gameMap}set gameMap(t){this._gameMap=t}clearData(){this.gameMap=null,this.box_players=null,this.myHeroSpr=null,this.matchHeroSmallDic=null,this.matchHeroSprDic=null,this.matchHeroSprs=null,this.matchHeroDic=null,this.myPlayer=null,this.allOrders=null}static get instance(){return Jt._instance==null&&(Jt._instance=new Jt),Jt._instance}init(){this.validEnemyList=[]}insertValidList(t){this.isFInd(t,this.validEnemyList)||this.validEnemyList.push(t)}isFInd(t,e){var i=!1;(!t||!e||e.length<=0)&&(i=!1);for(let n=0;n<e.length;n++)if(e[n]==t)return!0;return i}isFIndIndex(t,e){var i=-1;(!t||!e||e.length<=0)&&(i=-1);for(let n=0;n<e.length;n++)e[n]==t&&(i=n);return i}removeValidListByValue(t){if(!(!t||!this.validEnemyList||this.validEnemyList.length<=0)){var e=this.isFIndIndex(t,this.validEnemyList);e!=-1&&this.validEnemyList.splice(e,1)}}initMatch(t,e){Laya.loader.load("scenes/match/MatchHeroSpr.lh").then(i=>{this.roleAniPrefab=i,this.createPlayers(t),e&&e(t)})}updateMatch(t,e){this.updatePlayers(),e&&e(t)}createPlayers(t){this.matchHeroDic=new ne,this.matchHeroSprDic=new ne,this.matchHeroSmallDic=new ne,this.matchHeroSprs=[],this.allOrders||(this.allOrders=[]);let e=K.instance.matchDto.members.length;for(var i=0;i<e;i++){var n=K.instance.matchDto.members[i],r=new Laya.Image;r.anchorX=0,r.anchorY=0,r.skin="res/match1/img_point_1.png",t.img_smallMap.addChild(r),this.matchHeroSmallDic.set(n.id,r);let o=this.roleAniPrefab.create();o.dataSource=n,L.instance.playerDto.pid==n.id&&(this.myPlayer=n,r.skin="res/match1/img_point_2.png",this.setCurrentHero(o)),this.matchHeroDic.set(n.id,n),this.box_players.addChild(o),this.matchHeroSprs.push(o),this.allOrders.push(o),this.matchHeroSprDic.set(n.id,o)}}updatePlayers(){this.matchHeroSprs=[];let t=K.instance.matchDto.members.length;for(var e=0;e<t;e++){var i=K.instance.matchDto.members[e];let n=this.matchHeroSprDic.get(i.id);n.dataSource=i,L.instance.playerDto.pid==i.id&&(this.myPlayer=i,this.setCurrentHero(n)),this.matchHeroDic.set(i.id,i),this.matchHeroSprs.push(n)}}addPlayer(t){if(t.type==1){if(this.matchHeroSprs){if(L.instance.playerDto.pid==t.member.id){console.log("自己不处理 :"+t.member.id);return}let e=this.getRoleById(t.member.id);if(e)e.dataSource=t.member,e.alpha=1;else{let i=this.roleAniPrefab.create();i.dataSource=t.member,this.box_players.addChild(i),this.matchHeroSprs.push(i)}}}else this.removeRoleById(t.member.id)}onSendMove(t,e,i,n,r,o,s){if(L.instance.playerDto.pid==e){let l=new Du;l.time=t,l.speed=i,l.dire=n,l.x=r,l.y=o,l.area=s,rt.instance.sendData(l)}}onSendTargetMove(t,e,i,n,r,o=0){if(L.instance.playerDto.pid==e){let s=new Gu;s.time=t,s.targetId=i,s.targetX=n,s.targetY=r,s.skillId=o,s.sourceId=e,rt.instance.sendData(s)}}onSendAnimation(t,e,i=-1,n=-1,r=-1){let o=new Fu;o.skillId=t,o.type=e,o.targetId=i,o.param.set("newX",`${n}`),o.param.set("newY",`${r}`),rt.instance.sendData(o)}onRevAnimationPush(t){var e=Jt.instance.getRoleById(t.attId);t.attId!=L.instance.playerDto.pid&&e.attack(t.skillId,!1,t.param)}onSendAttack(t,e,i){let n=new Ru;n.targetId=t,n.attackType=e,n.skillId=i,rt.instance.sendData(n)}onRevMovePush(t){if(!(t==null||t.pid==L.instance.playerDto.pid)){var e=Jt.instance.getRoleById(t.pid);e?e.onPushMoveData(t.time,t.speed,t.dire,t.x,t.y,t.area):console.log(t.pid+" sprite is null")}}onRevTargetMovePush(t){if(t.sourceId!=L.instance.playerDto.pid){var e=Jt.instance.getRoleById(t.targetId);e?e.onPushTargetMoveData(t.time,t.targetX,t.targetY):console.log(t.targetId+" sprite is null")}}onRevAttackPush(t){var e=Jt.instance.getRoleById(t.attPid);if(t.attPid!=L.instance.playerDto.pid){var i=U.intance.m_dicSkills.get(t.skill);i.type!=5&&e.attack(t.skill,!1)}var n=Jt.instance.getRoleById(t.defPid);n.takeDamage(t,e);var r=this.matchHeroDic.get(t.attPid),o=this.matchHeroDic.get(t.defPid);if(r.score=t.attScore,o.score=t.defScore,t.defHp<=0){var r=this.matchHeroDic.get(t.attPid);r.kill++}g.intance.event(y.UPDATE_KILL_NUM)}sendRestoreData(){if(K.instance.reward==null){let t=new Ou;rt.instance.sendData(t)}}onRevRestorePush(t){K.instance.matchDto=t,g.intance.event(y.EVENT_RESTORE_DATA),t&&t.startTime-t.nowTime<=0&&H.intance.disposeView(h.MatchReadyView)}getRoleById(t){let e;return this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==t){e=i;return}}),e}removeRoleById(t){var e;this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==t){e=i,i.speed=0,i.alpha=.3;return}})}getValidList(){return this.validEnemyList}playMusic(){Pe.instance.playMusicByURL("mp3/battle.mp3"),ze.instance.needPop=!1}playSound(t){var e="";t==1?e="resources/music/pugong":t==2?e="resources/music/enemyHit":t==3&&(e="resources/music/dazhao"),Pe.instance.playSound(e+".wav",1)}setCurrentHero(t){t.isMe=!0;var e=this.myHeroSpr==null;this.myHeroSpr=t,Jt.instance.moveGameWindow(!0),this.myHeroSpr.initBirth(e)}getAttackTarget(t){console.log("getAttackTarget");var e=t.distance,i=t.targetsType;if(i==1){let r=new Laya.Point(this.myHeroSpr.x,this.myHeroSpr.y),o=At.getUnitVector(this.myHeroSpr.roleDirection);var n=[];return this.matchHeroSprs&&this.matchHeroSprs.forEach(s=>{if(!s._isDead&&!s.isMe){var l=this.getEnemyDistance(s);if(l<=e){let c=new Laya.Point(s.x,s.y),u=At.subtract(c,r);u.x*o.x+u.y*o.y>0&&n.push(s)}}}),n}else if(i==2){let r,o=1e4;if(this.matchHeroSprs&&this.matchHeroSprs.forEach(s=>{if(!s._isDead&&!s.isMe){var l=this.getEnemyDistance(s);l<=e&&l<o&&this.canAttack(this.myHeroSpr,s)&&(r=s,o=l)}}),r)return[r]}return[]}getEnemyDistance(t){return Math.sqrt(Math.pow(t.x-this.myHeroSpr.x,2)+Math.pow(t.y-this.myHeroSpr.y,2))}canAttack(t,e){let i=new Laya.Vector2;i.x=e.x-t.x,i.y=e.y-t.y;let n=At.getUnitVector(this.myHeroSpr.roleDirection),r=Math.atan2(i.y,i.x)-Math.atan2(n.y,n.x);r<0&&(r+=2*Math.PI),r=r*180/Math.PI,console.log("angle 2: "+r);let o=90;return r<o||r>360-o}canTui(t,e){let i=new Laya.Vector2;i.x=e.x-t.x,i.y=e.y-t.y;let n=At.getUnitVector(this.myHeroSpr.roleDirection),r=Math.atan2(i.y,i.x)-Math.atan2(n.y,n.x);r<0&&(r+=2*Math.PI),r=r*180/Math.PI,console.log("angle 2: "+r);let o=45;return r<o||r>360-o}setMyHeroDirection(t){this.myHeroSpr&&(t!=-4?(this.myHeroSpr.myRoleDirection=t,this.myHeroSpr.speed=this.myHeroSpr.moveSpeed,this.myHeroSpr.inControl=!0,this.isControl=!0):(this.myHeroSpr.speed=0,this.myHeroSpr.inControl=!1,this.isControl=!1))}moveGameWindow(t=!1){if(this.myHeroSpr){this.gameWindowX=this.myHeroSpr.x-Laya.stage.width/2,this.gameWindowY=this.myHeroSpr.y-Laya.stage.height/2;var e=-this.gameWindowX,i=-this.gameWindowY,n=Laya.stage.width-this.gameMap.width,r=Laya.stage.height-this.gameMap.height;e>0?e=0:e<n?e=n:e=e,i>0?i=0:i<r?i=r:i=i,t?this.gameMap.pos(e,i,!0):Laya.Tween.to(this.gameMap,{x:e,y:i},500)}}};Jt._instance=null;var O=Jt;var ot=class ot{constructor(){this.resArr=["gameIcon/map/1001/img_map.jpg","gameIcon/map/1002/img_map.jpg",{url:"gameIcon/map/map_1001.lh",type:Laya.Loader.HIERARCHY},{url:"gameIcon/map/map_1002.lh",type:Laya.Loader.HIERARCHY},"res/common/comm_bg/img_com_bg.jpg","res/common/comm/img_bg_large.png","res/common/comm/img_bg_medium.png","res/common/comm/img_bg_small.png",{url:"res/common.atlas",type:Laya.Loader.ATLAS},{url:"gameIcon/effect/match/beiji/spine.sk"},{url:"gameIcon/effect/match/dunpai/spine.sk"},{url:"gameIcon/effect/ruchang/effect1.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect2.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect3.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/hua/effect.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_3.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_4.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_5.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_6.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_4.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_5.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_6.skel",type:Laya.Loader.SPINE},{url:"scenes/mainView/MainScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/shop/ShopScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/hero/MyHeroScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/Match.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchHeroSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/DamageNumber.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/EnterRoomSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/notice/TxtLoadingView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/notice/TxtNoticeView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/CreateRoomDialog.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/EnterRoomView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndRankView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchReadyView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndView.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/closeBtn.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/defaultButton.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/DropBox.lh",type:Laya.Loader.HIERARCHY},{url:"resources/sound/destroy.wav",type:Laya.Loader.BUFFER},{url:"resources/sound/hit.wav",type:Laya.Loader.BUFFER}];this.m_arrPreResource=["config/spot.json","config/scene.json"];this.m_arrInitResource=["config/general.json","config/head.json","config/iconBadge.json","config/country.json","config/variable.json","config/equip.json","config/shop.json","config/union.json","config/hero.json","config/skill.json","config/buff.json","config/item.json","config/arena.json","config/arenaType.json","config/node.json","config/map.json","config/level.json","config/welfarebag.json","config/mailmessage.json","config/currencyAddress.json","config/aCoin.json","config/coinAddress.json","config/buyHeroes.json"];this.m_objModuleReource={FindScene:["res/atlas/find.atlas"],MainScene:[],ShopScene:[],RankScene:[],GetMatScene:[],OpenGameScene:[],ScholarshipScene:[],FriendScene:[],CommentDialog:["res/atlas/comment.atlas"],GuideView:["res/atlas/guide.atlas","res/atlas/ShopView.atlas","config/newplayer.json"],ShareView:["res/atlas/share.atlas"],SelectHeadDialog:[],UnionApplyDialog:["config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json"],GuildScene:["res/atlas/union.atlas","config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json","config/guild_apply.json","config/guild_contrubute.json"],UnionWarScene:["res/atlas/unionWar.atlas","config/resource_node.json"],HeroScene:["res/atlas/hero.atlas","config/hero_lv.json","config/hero_attup.json","res/atlas/equip.atlas"],AFKBattleScene:["res/atlas/battle.atlas"],ArenaScene:["res/atlas/Arena.atlas"],MailScene:[],KnapsackScene:["res/atlas/mainUI1.atlas"],UnionScene:["res/union1.atlas"]};this.m_objModuleViews={NoServerView:"scenes/createRole/NoServer.lh",CreateLoginView:"scenes/createRole/CreateLoginView.lh",ChangeHeadDialog:"scenes/createRole/ChangeHeadDialog.lh",HeroGetDialog:"scenes/shop/HeroGetDialog.lh",ItemGetDialog:"scenes/item/ItemGetDialog.lh",RewardGetDialog:"scenes/item/RewardGetDialog.lh",KnapsackTipDialog:"scenes/item/KnapsackTipDialog.lh",SelectHeadDialog:"scenes/createRole/SelectHeadDialog.lh",TxtNoticeView:"scenes/notice/TxtNoticeView.lh",NoticeDialog:"scenes/notice/NoticeDialog.lh",ChampDetailDialog:"scenes/asset/ChampDetailDialog.lh",ChampRecordDialog:"scenes/asset/ChampRecordDialog.lh",RoleInfoDialog:"scenes/createRole/RoleInfoDialog.lh",RemGetDialog:"scenes/createRole/RemGetDialog.lh",CreateRoomDialog:"scenes/mainView/CreateRoomDialog.lh",EnterRoomView:"scenes/mainView/EnterRoomView.lh",InputPwdDialog:"scenes/mainView/InputPwdDialog.lh",HeroDetailDialog:"scenes/hero/HeroDetailDialog.lh",MatchEndRankView:"scenes/match/MatchEndRankView.lh",UnionMemberView:"scenes/union/UnionMemberView.lh",UnionListView:"scenes/union/UnionListView.lh",CreateSubUnionView:"scenes/union/CreateSubUnionView.lh",ChangeUnionIconDialog:"scenes/union/ChangeUnionIconDialog.lh",MySubUnionView:"scenes/union/MySubUnionView.lh",UnionMemberApplyView:"scenes/union/UnionMemberApplyView.lh",HeroTransferView:"scenes/hero/HeroTransferView.lh",MatchReadyView:"scenes/match/MatchReadyView.lh",MatchEndView:"scenes/match/MatchEndView.lh",GameSettingLanguageDialog:"scenes/gameSetting/GameSettingLanguageDialog.lh",SkillTipDialog:"scenes/hero/SkillTipDialog.lh",TransferRecordDialog:"scenes/hero/TransferRecordDialog.lh",BaseAlertDialog:"scenes/baseAlert/BaseAlertDialog.lh",CreateSubWalletDialog:"scenes/scholarship/CreateSubWalletDialog.lh",WalletChooseHeroDialog:"scenes/scholarship/WalletChooseHeroDialog.lh",WalletChoosePropsDialog:"scenes/scholarship/WalletChoosePropsDialog.lh",EmployInfoDialog:"scenes/scholarship/EmployInfoDialog.lh",HireDetailDialog:"scenes/asset/HireDetailDialog.lh",ProxyDetailDialog:"scenes/asset/ProxyDetailDialog.lh",WithDrawRecordDialog:"scenes/asset/WithDrawRecordDialog.lh",RentalRecordDialog:"scenes/scholarship/RentalRecordDialog.lh",PrivateChatDialog:"scenes/friend/PrivateChatDialog.lh"};this.m_objConfigReource={};this.m_commonResource=new ne;this.loadingView=Laya.Browser.window.loadingView;this.ii=100;this.baseUrl="https://cdn-5ejmbrg9nhxc.vultrcdn.com/hero/";if(ot._instance)throw new Error("LayerManager是单例,不可new.");ot._instance=this}static get instance(){return ot._instance==null&&(ot._instance=new ot),ot._instance}init(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),this.initGameLanguage()}initGameLanguage(){ot.GameLanguage_URL="config/language.json",Laya.loader.load(ot.GameLanguage_URL,Laya.Handler.create(this,this.initGameResource))}initGameResource(t){if(t==null)return;let e=ot.instance.getResBySetURL(ot.GameLanguage_URL);d.instance.initLanTypes(e.data),Laya.loader.clearRes(ot.GameLanguage_URL),this.onConfigLoaded()}onError(t){}onConfigLoaded(){let t=new ia;t.ID=4,t.Event="加载语言包信息",xe.instance.sendCustumEvent(4,null,t),Q.ignoreLang||(L.instance.m_strLanguage=d.instance.getLanIdByType(Q.User_Lan)),this.m_UILang="config/lang_english"+L.instance.m_strLanguage+".json",this.m_NomalLang="config/english"+L.instance.m_strLanguage+".json",this.m_ErrorLang="config/error"+L.instance.m_strLanguage+".json",this.m_arrPreResource.push(this.m_UILang),this.m_arrPreResource.push(this.m_NomalLang),this.m_arrPreResource.push(this.m_ErrorLang),this.initResourceURL(this.m_arrPreResource,!0),this.initResourceURL(this.m_arrInitResource,!0),this.addFont1()}addFont1(){Laya.loader.load("res/font/CookieRun Regular.otf",Laya.Loader.TTF).then(()=>{this.loadDemoResource()})}loadDemoResource(){Laya.loader.load(this.resArr,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{he.instance.init(),O.instance.damageNumPrefab=Laya.loader.getRes("scenes/match/DamageNumber.lh"),Et.instance.enterRoomPrefab=Laya.loader.getRes("scenes/mainView/EnterRoomSpr.lh"),O.instance.roleAniPrefab=Laya.loader.getRes("scenes/match/MatchHeroSpr.lh"),O.instance.ruchangEffects=[Laya.loader.getRes("gameIcon/effect/ruchang/effect1.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect2.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect3.skel")],O.instance.huaEffect=Laya.loader.getRes("gameIcon/effect/hua/effect.skel"),O.instance.beijiTemplet=Laya.loader.getRes("gameIcon/effect/match/beiji/spine.sk"),O.instance.dunpaiTemplet=Laya.loader.getRes("gameIcon/effect/match/dunpai/spine.sk"),O.instance.diquanEffect3=Laya.loader.getRes("gameIcon/effect/diquan/img_3.skel"),O.instance.diquanEffect4=Laya.loader.getRes("gameIcon/effect/diquan/img_4.skel"),O.instance.diquanEffect5=Laya.loader.getRes("gameIcon/effect/diquan/img_5.skel"),O.instance.diquanEffect6=Laya.loader.getRes("gameIcon/effect/diquan/img_6.skel"),O.instance.baoqiEffect4=Laya.loader.getRes("gameIcon/effect/baoqi/img_4.skel"),O.instance.baoqiEffect5=Laya.loader.getRes("gameIcon/effect/baoqi/img_5.skel"),O.instance.baoqiEffect6=Laya.loader.getRes("gameIcon/effect/baoqi/img_6.skel");var t=O.instance.roleAniPrefab.create();console.log(" ================ roleAniPrefab: "+t),this.onLoadThreeDimen()})}onLoadThreeDimen(){Laya.loader.load(this.m_arrPreResource,Laya.Handler.create(this,this.onPreAssetLoaded),Laya.Handler.create(this,this.onPreAssetPress2,null,!1))}onPreAssetPress1(t){this.va=(t*100*.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetPress2(t){this.va=(t*100*.5+.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetLoaded(t){if(!t)return;let e=Laya.Browser.now();Kn.instance.initSpotCfgData(),this.initResourceURL(this.m_objModuleReource),this.initResourceURL(this.m_objConfigReource),xe.instance.sendCustumEvent(5),U.intance.preInit(),this.setGlobalLanguage(),xe.instance.sendCustumEvent(6),g.intance.event(y.EVENT_BACK_TO_LOGIN),fe.intance.initPreload(),this.loadingView&&this.loadingView.loading(100),console.log("-----------------------preload-time:"+(Laya.Browser.now()-e))}setGlobalLanguage(){let t=ot.instance.getResByURL(this.m_NomalLang);d.instance.initConfigLan(t.data);let e=ot.instance.getResByURL(this.m_UILang);d.instance.initUILan(e.data);let i=ot.instance.getResByURL(this.m_ErrorLang);me.instance.initErrData(i.data),this.clearResUrlByRoot(this.m_UILang,!0),this.clearResUrlByRoot(this.m_NomalLang,!0),this.clearResUrlByRoot(this.m_ErrorLang,!0)}initResourceURL(t,e=!1){if(t instanceof Array)this.setResURLArr(t,e);else if(t instanceof Object)for(let i in t)this.setResURLArr(t[i],e)}setResURLArr(t,e){let i,n;for(let r=0;r<t.length;r++)e?(this.m_commonResource.set(t[r],!0),n=this.setResURL(t[r]),i=this.getTypeFromUrl(n),t[r]={url:n,type:i,size:1,priority:1}):this.m_commonResource.get(t[r])?(t.splice(r,1),r--):(n=this.setResURL(t[r]),i=this.getTypeFromUrl(n),t[r]={url:n,type:i,size:1,priority:1})}getTypeFromUrl(t){let{ext:e,typeId:i,main:n,loaderType:r}=Laya.Loader.getURLInfo(t);ot._extReg.lastIndex=t.lastIndexOf(".");let o=ot._extReg.exec(t);return o&&o.length>1?o[1].toLowerCase():"text"}setResURL(t){return t}clearResUrlByRoot(t,e=!1){let i=t;Laya.loader.clearRes(i)}hasFormatEffectUrl(t){return t.indexOf("effect/")>=0}setItemResURL(t){return t&&t.hasOwnProperty("item_img")?this.setResURL("icon/"+t.item_img+".png"):""}setThreeDimenUrl(t){return t?this.setResURL("threeDimen/"+t):""}getThreeDimenUrl(t){let e=this.setResURL("threeDimen/"+t);return Laya.Loader.getRes(e)}getResByURL(t){let e=ot.instance.setResURL(t);return Laya.Loader.getRes(e)}getResBySetURL(t){return Laya.Loader.getRes(t)}loadModuleUrl(t,e=null,i=null,n=1,r=!0){console.log("loadModuleUrl m_strName: "+t),this.ii++;let o=ot.instance.m_objModuleReource[t];if(o==null||o.length<1){e.run();return}Laya.loader.load(o,Laya.Handler.create(this,this.loadItemComplete,[e,o]),Laya.Handler.create(this,this.onLoadProgress,[t],!1),i,n,r,this.ii.toString())}loadItemComplete(t,e){this.usedUrlDic||(this.usedUrlDic=new ne);for(let i in e){let n=e[i].url,r=this.usedUrlDic.get(n);r?this.usedUrlDic.set(n,++r):this.usedUrlDic.set(n,1)}t.run()}clearModuleUrl(t){console.log("clearModuleUrl m_strName: "+t);let e=ot.instance.m_objModuleReource[t];for(let i in e){let n=e[i].url;if(this.usedUrlDic){let r=this.usedUrlDic.get(n);r-=1,r<1?(this.usedUrlDic.remove(n),Laya.loader.clearRes(n)):this.usedUrlDic.set(n,r)}}}onLoadProgress(t,e){}loadResource(t,e=null,i=null,n=null,r=1,o=!0){Laya.loader.load(t,e,i,n,r,o)}getNodeIcon(t){return this.setResURL("gameIcon/node/img_"+t+".png")}getCountryIcon(t){return this.setResURL("gameIcon/country/img_"+t+".png")}getChestIcon(t){return this.setResURL("gameIcon/items/chest/img_"+t+".png")}getChestBigIcon(t){return this.setResURL("gameIcon/items/chestBig/img_"+t+".png")}getHeroEggIcon(t){return this.setResURL("gameIcon/hero/heroEgg/img_"+t+".png")}getHeroEggBigIcon(t){return this.setResURL("gameIcon/hero/heroEggBig/img_"+t+".png")}getHeroHeadIcon(t){return this.setResURL("gameIcon/hero/heroHead/img_"+t+".png")}getHeroQuality(t){return this.setResURL("gameIcon/hero/heroQuality/img_"+t+".png")}getHeroBackIcon(t){return this.setResURL("gameIcon/hero/heroDetail/img_hero_di_"+t+".png")}getHeroFrontIcon(t){return this.setResURL("gameIcon/hero/heroDetail/img_hero_"+t+".png")}getItemIcon(t){return this.setResURL("gameIcon/items/item/img_"+t+".png")}getItemBgIcon(t){return this.setResURL("gameIcon/items/itemBg/img_"+t+".png")}getItemBigIcon(t){return this.setResURL("gameIcon/items/itemBig/img_"+t+".png")}getItemQualityIcon(t){return this.setResURL("gameIcon/items/itemQuality/img_"+t+".png")}getMoneyIcon(t){return this.setResURL("gameIcon/items/money/img_"+t+".png")}getAttrIcon(t){return this.setResURL("gameIcon/attr/img_attr_"+t+".png")}getSkillIcon(t,e=!1){let i;return e?i=this.setResURL("gameIcon/skill/skills/img_big_"+t+".png"):i=this.setResURL("gameIcon/skill/skills/img_"+t+".png"),i}getMatchSkillIcon(t){return this.setResURL("gameIcon/skill/matchSkills/img_"+t+".png")}getPlayerIcon(t){return parseInt(t)>0?this.setResURL("gameIcon/head/headCircle/img_"+t+".png"):t}getUnionIcon(t){return parseInt(t)>0?this.setResURL("gameIcon/union/badge/img_trade_"+t+".png"):t}getUnionLvIcon(t){return this.setResURL("gameIcon/union/lvIcon/img_trade_"+(t>3?4:t)+".png")}getUnionLvDiIcon(t){return this.setResURL("gameIcon/union/lvIcon/img_trade_di_"+(t>3?4:t)+".png")}getSceneBgUrl(t){return"scene/"+t+".jpg"}clearSKinUrl(t){for(let e in t)t[e]instanceof String&&t[e].indexOf("skincolor")==-1&&Laya.loader.clearRes(t[e]);t=[]}getFunctionIcon(t){return this.setResURL("icon/functionIcon/"+t+".png")}getNewFunIcon(t){return this.setResURL("icon/newFunIcon/"+t+".png")}getSoundURL(t,e=".ogg"){let i;return i=this.setResURL("mp3/"+t+e),i}getSoundURLogg(t){let e;return e=this.setResURL("mp3/"+t),e}getSceneUrl(t){return"scene/sceneBg/"+t+".jpg"}getMianSysIcon(t){return this.setResURL("icon/mainSysIcon/btn_"+t+".png")}getEffectUrl(t){return this.setResURL("effect/"+t+".json")}getLoadingUrl(t){return this.setResURL("effect/"+t)}getGuangImg(t){return this.setResURL("swf/"+t+".png")}getGuildProofBg(t){return this.setResURL("scene/guild/proof/"+t+"/1.png")}getGuildProofHots(t){return this.setResURL("scene/guild/proof/"+t+"/"+t+"/"+t+".json")}getShareImgUrl(t,e=!1,i=!1){let n;return i?t:(t=t+".jpg",e?n="https://mutantbox.8686c.com/16/qa/common/share/"+t:n="https://cdn.test.com/16/qa/common/share/"+t,n)}getHeadUrl(t){return"common/common_icon/"+t+".png"}getMapImg(t){return"gameIcon/map/"+t+"/img_map.jpg"}getMapPrefab(t){return"gameIcon/map/map_"+t+".lh"}clearCache(){}getHeroHeadRes(t,e){return Q.Res==0?"gameIcon/hero/heroHead/img_"+t+".png":this.baseUrl+`${t}/${e}.png`}getHeroSkRes(t,e){return Q.Res==0?`gameIcon/hero/heroSk/${t}/img_hero.skel`:this.baseUrl+`${t}/${e}/img_hero.skel`}};ot._extReg=/\.(\w+)\??/g;var k=ot;var nn=class nn{constructor(){this._list=[];this._isNoticing=!1;this._isListener=!1}static get instance(){return nn._instance||(nn._instance=new nn),nn._instance}notice(t){this._isNoticing?this._isListener||(this._isListener=!0,this._list.push(t),Laya.timer.loop(nn.Tip_Interval,this,this.onInterVal)):(this._list.push(t),this.noticeOne())}noticeOne(){var t=k.instance.m_objModuleViews.TxtNoticeView;let e;Laya.loader.load(t).then(i=>{if(!i){console.log("noticeOne : "+t+"  res is null");return}e=Laya.Pool.getItemByCreateFun("txtNotice",i.create,i);let n=this._list.shift();e.notice(n),Laya.stage.addChild(e),e.x=B.instence.stageWidth*.5-e.width*.5,e.y=B.instence.stageHeight*.5-e.height*.5,Laya.Tween.to(e,{y:e.y-250,alpha:.5},1e3,null,Laya.Handler.create(this,this.onFinish,[e]),1e3)})}onFinish(t){t&&(t.visible=!1,t.removeSelf())}onInterVal(){this._list.length>=1?this.noticeOne():(this._isNoticing=!1,this._isListener=!1,Laya.timer.clear(this,this.onInterVal))}};nn.Tip_Interval=1e3;var N=nn;var me=class a{constructor(){this._curErrTxt=""}static get instance(){return a._instance||(a._instance=new a),a._instance}initErrData(t){this.errData=t}get(t){return this.errData[t]?this.errData[t].words:(console.warn("服务端错误码语言包未配表 错误码："+t),t)}showErrorWord(t,e=999999){this.errData[t]&&this.errData[t].hasOwnProperty("words")?(this._curErrTxt=this.errData[t].words,e!=999999&&(this._curErrTxt=d.instance.replacePlaceholder(this._curErrTxt,[e]))):this._curErrTxt=""+t,N.instance.notice(this._curErrTxt)}showErrByString(t,e="#ff0000"){this._curErrTxt=t;let i=new Laya.Label(this._curErrTxt);i.width=500,i.align="center",i.height=40,i.fontSize=26,i.color=e,i.mouseEnabled=!1,i.strokeColor="#000000",i.stroke=.5,Laya.stage.addChild(i),i.x=(Laya.stage.width-i.width)/2,i.y=(Laya.stage.height-i.height)/2,Laya.Tween.to(i,{y:i.y-100,alpha:0},500,null,Laya.Handler.create(this,this.completeHandler,[i]),1e3)}completeHandler(t){t&&t.parent&&t.parent.removeChild(t)}dispose(){this.errData=null}};var We=class{};We.FUNID_MALL="1004",We.FUN_ID_TAGGARDEN="2005",We.FunID_WORK="1006",We.FUN_ID_BARGAIN_SHOP="1007",We.TRAVEL_HARD="1012",We.TRAVEL_REWARD="3006",We.FUNID_TUJIAN="2105",We.FUN_ID_PARTY="7003",We.FUN_ID_FB="9010",We.FUN_ID_PET="9004",We.FUN_ID_TURNTABLE="9001",We.FUN_ID_GASHPOEN="9012",We.FUN_ID_SHOPEXCHANGE="2104",We.FUN_ID_TIME_STAGE="9014",We.FUN_ID_DRAWCARD_PVP="1008613",We.FUN_ID_PHONE="2004",We.FUN_ID_DS="9017",We.FUN_ID_BUY_PS="9030",We.FUN_ID_DESTINY="3020",We.FUN_ID_ACTIVITY_SHOP="9026",We.FUN_ID_WORKSHOP_RECYCLE="3002",We.FUN_ID_WORKSHOP_COLOR="3004",We.FUN_ID_WORKSHOP_UPGRADE="3003",We.FUN_ID_GUILD="1010",We.FUN_ID_VIP="9022",We.FUN_ID_MONTHCARD="9100";var Ku=class{constructor(){this.bafflesInfo=[[330,740,9],[294,113.95,1],[712.95-80,343.45,3],[1251.35,125.95,7]];this.redHotStateMap=new ne;this.openSystem=new ne;this.m_dicSystemInfoCfg=new ne,this._openTypeList=new ne,this.parseJson()}hasRedState(t){let e=this.redHotStateMap.get(t+"");return e&&e.redState>0?e.redState:0}initSystemOpen(t){this.openSystem=new ne;for(let e=0;e<t.length;e++)this.openSystem.set(t[e],!0),t[e]+""==We.FUN_ID_PHONE.toString()}parseJson(){let t=k.instance.getResByURL("config/system_open.json"),e;for(let i in t)if(e=t[i],e){this.m_dicSystemInfoCfg.set(e.functionID,e);let n=this._openTypeList.get(e.open_type);n||(n=[],this._openTypeList.set(e.open_type,n)),n.push(e)}}getSystemsByType(t){let e=[];for(let i=0;i<this.m_dicSystemInfoCfg.values.length;i++){let n=this.m_dicSystemInfoCfg.values[i];n.positionID==t&&e.push(n)}return e}getLockFun(t,e){let i=this._openTypeList.get(t);for(let n of i)if(n.parameter1+""==e+"")return n;return null}getBuildSystem(){}isOpen(t){return Q.buildClickState?!0:(t instanceof String&&(t=parseInt(t+"")),this.openSystem.get(t)!=null)}};var Yu=class{constructor(){this._vipLv=0}isReceive(t){for(let e of this.isRewards)if(e+""==t.toString())return!0;return!1}addIsReceive(t){this.isReceive(t)||this.isRewards.push(t)}get vipLv(){return this._vipLv}set vipLv(t){this._vipLv!=t&&(this._vipLv=t)}};var $u=class{constructor(){this.m_dicItemList=new ne,this.m_dicTypeList=new ne,this.m_dicSubTypeList=new ne,this.m_dicBackList=new ne}initData(t){this.m_dicItemList=new ne,this.m_dicTypeList=new ne,this.m_dicSubTypeList=new ne,this.m_dicBackList=new ne;let e;for(let i=0;i<t.length;i++)e=new Fe,e.initDataByArr(t[i]),e.m_iNum>0&&this.pushItem(e);console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}getCountById(t,e=!0){return U.intance.m_dicItems.get(t)==null?0:this.getItemCountById(t,e)}pushItem(t){this.m_dicItemList.set(t.m_iId,t),this.m_dicTypeList.get(t.type)==null&&this.m_dicTypeList.set(t.type,new ne),this.m_dicSubTypeList.get(t.subType)==null&&this.m_dicSubTypeList.set(t.subType,new ne),this.m_dicBackList.get(t.backType)==null&&this.m_dicBackList.set(t.backType,new ne),this.m_dicTypeList.get(t.type).set(t.m_iId,t),this.m_dicSubTypeList.get(t.subType).set(t.m_iId,t),this.m_dicBackList.get(t.backType).set(t.m_iId,t)}removeItem(t){this.m_dicItemList.remove(t.m_iId),this.m_dicTypeList.get(t.type).remove(t.m_iId),this.m_dicSubTypeList.get(t.subType).remove(t.m_iId),this.m_dicBackList.get(t.backType).remove(t.m_iId)}updateData(t,e=!1,i=!0){let n=[],r=!1,o;for(let s=0;s<t.length;s++){t[s]instanceof Array?(o=new Ki,o.id=t[s][0],o.count=t[s][1]):o=t[s];let l=this.m_dicItemList.get(o.id);l==null&&(l=new Fe(o.id),this.pushItem(l),l.m_bNew=!0),e?(l.newAddCnt=o.count-l.m_iNum,l.m_iNum=o.count):(l.newAddCnt=o.count,l.m_iNum=o.count+o.count),l.initDataByArr(o),n.push(l.m_iId),l.m_iNum<=0&&this.removeItem(l),l.newAddCnt>0&&ze.instance.needPop&&i&&(ze.instance.addItem(l),r=!0)}r&&ze.instance.needPop&&ze.instance.autoPop&&Kt.instance.startShow(),n.length>0&&g.intance.event(y.PACKAGE_UPDATE_ITEM,[n])}getItemById(t){return this.m_dicItemList.get(t)}getItemsBySubType(t){let e=this.m_dicSubTypeList.get(t);return e==null&&(e=[]),e}getListByType(t){let e=[];return this.m_dicTypeList.get(t)&&(e=this.m_dicTypeList.get(t).values.slice()),e.sort(this.sortOnQa),e}getBackByType(t){let e=[];return this.m_dicBackList.get(t)&&(e=this.m_dicBackList.get(t).values.slice()),e.sort(this.sortOnQa),e}getListBySubType(t){let e=[];return this.m_dicSubTypeList.get(t)&&(e=this.m_dicSubTypeList.get(t).values.slice()),e.sort(this.sortOnQa),e}sortOnQa(t,e){let i=t.itemItem.quality,n=e.itemItem.quality;return i<n?1:i>n?-1:0}getItemCountById(t,e=!0){let i=this.getItemById(t);return i?i.m_iNum:0}};var Xu=class a{constructor(t){this._addNewFList=[];this.delayShowNewFun=!1}static get instance(){return a._instace==null&&(a._instace=new a(new Yb)),a._instace}addNewOpenFun(t){this._addNewFList=this._addNewFList.concat(t),this.delayShowNewFun||this.showNewFun()}setDelayShowFun(t){this.delayShowNewFun!=t&&(this.delayShowNewFun=t,t||this.showNewFun())}showNewFun(){if(this._addNewFList.length>0){let t=this._addNewFList.pop(),e=L.instance.systemOpenModel.m_dicSystemInfoCfg.get(t.toString());e?e.if_open.toString()=="1"||e.if_pop.toString()!="1"?this.showNewFun():this.swithToNewFun(t):this.showNewFun()}}swithToNewFun(t,e=!1){let i=L.instance.systemOpenModel.m_dicSystemInfoCfg.get(t);if(i){if(i.if_open.toString()=="1"){N.instance.notice("system_open.json-->funId:"+i.functionID+"is close");return}(i.if_pop.toString()=="1"||e)&&g.intance.event(y.EVENT_OPEN_MODULE,[h.NewFunUnLockDialog,t])}}hasUnlockFunction(t,e=!0){let i=L.instance.systemOpenModel.m_dicSystemInfoCfg.get(t+""),n=L.instance.systemOpenModel.isOpen(parseInt(t));return!n&&e&&N.instance.notice(d.instance.getLanguage(i.lock_word)),n}},Yb=class{};var rn=class{constructor(){}ReadShort(t){let e=new Uint8Array(t.buffer),i=e[t.pos]<<8,n=e[t.pos+1],r=i|n;return t.pos+=2,r}ReadInt(t){let e=new Uint8Array(t.buffer),i=e[t.pos]<<24|e[t.pos+1]<<16|e[t.pos+2]<<8|e[t.pos+3];return t.pos+=4,i}ReadByte(t){return t.getByte()}ReadString(t){let e=this.ReadShort(t);return e==0?"":t.getUTFBytes(e)}ReadBytes(t,e){let i=t.buffer.slice(t.pos,e);return new Laya.Byte(i)}dispose(){}};var Qu=class{constructor(){this.writeByt=new Laya.Byte}writeByte(){}writeShort(t){this.writeByt.writeByte(t>>8),this.writeByt.writeByte(t)}writeInt(t){this.writeByt.writeByte(t>>24),this.writeByt.writeByte(t>>16),this.writeByt.writeByte(t>>8),this.writeByt.writeByte(t)}writeString(t){if(t.length==0){this.writeShort(0);return}let i=new Laya.Byte;i.writeUTFBytes(t),this.writeShort(i.length),this.writeByt.writeUTFBytes(t)}dispose(){}};var to=class a{constructor(){this.cookie="####1.0.0#0#";this.encryptKey="FFIYD#^3LB954JB90fzj*(d)sO7";this._curSendIndex=-1}static get instance(){return a._instance||(a._instance=new a),a._instance}setLoginCookie(){this.cookie="####1.0.0#"+Q.Login_UDID+"#"+Q.UserAgent}parseCookie(t,e,i,n="1.0.0"){let r=this.encryptKey+e+t,o=Cx(r);n=L.instance.M_S_VersionServer;let s=o+"#"+t+"#"+e+"#"+i+"#"+n+"#"+this._curSendIndex+"#1#"+Q.Login_UDID+"#"+Q.UserAgent;this.cookie=s}reflashCookie(){this.parseCookie(this.m_time,this.m_roleID,this.m_accout)}analyClient(t,e){let i=new Qu;i.writeString(this.cookie),i.writeShort(t);let n=this.analyData[t];return n&&n.length>0&&this.writeByt(n,e,i),i.writeByt}writeByt(t,e,i){for(let n in t){let r=e[n];if(t[n].indexOf("7/")!=-1){i.writeShort(r.length);let o=this.analyData[String(t[n]).split("7/")[1]];if(o)for(let s in r)this.writeByt(o,r[s],i)}else if(t[n]=="1")i.writeInt(r);else if(t[n]=="2")i.writeShort(r);else if(t[n]=="3")i.writeString(r);else if(t[n]=="4"||t[n]=="5"||t[n]=="6"){i.writeShort(r.length);for(let o in r)t[n]=="4"?i.writeInt(r[o]):t[n]=="5"?i.writeShort(r[o]):t[n]=="6"&&i.writeString(r[o])}}}analyServer(t){let e=new rn,i=e.ReadShort(t),n=[i],r=this.analyData[i];return r&&r.length>0&&(n=n.concat(this.readByt(r,t,e))),n}analyCookie(t=""){console.log("RECE_COOKIE: "+t,1);let e=t.split("#");this.m_time=e[0],this.m_roleID=e[1],this.m_accout=e[2];let i=e[3];this._curSendIndex=i,this._curSendIndex++,console.log("cookie:_time:"+this.m_time+"  _roleID："+this.m_roleID+"	  _accout："+this.m_accout),this.parseCookie(this.m_time,this.m_roleID,this.m_accout),L.instance.timeStamp=parseFloat(this.m_time)}readByt(t,e,i){let n=[];for(let r in t)if(t[r].indexOf("7/")!=-1){let o=i.ReadShort(e),s=this.analyData[String(t[r]).split("7/")[1]],l=[];if(s&&o>0)for(let c=0;c<o;c++)l.push(this.readByt(s,e,i));n.push(l)}else if(t[r]=="1")n.push(i.ReadInt(e));else if(t[r]=="2")n.push(i.ReadShort(e));else if(t[r]=="3")n.push(i.ReadString(e));else if(t[r]=="4"||t[r]=="5"||t[r]=="6"){let o=i.ReadShort(e),s=[];for(let l=0;l<o;l++)t[r]=="4"?s.push(i.ReadInt(e)):t[r]=="5"?s.push(i.ReadShort(e)):t[r]=="6"&&s.push(i.ReadString(e));n.push(s)}return n}dispose(){}};function Cx(a){throw new Error("Function not implemented.")}var _e=class _e{constructor(){this._isSending=!1;this._stopSending=!1;this._sendCmd=0;this._callDataArr=[],this._httpReq=new Laya.HttpRequest,this._httpReq.http.timeout=15e3,this._httpReq.http.ontimeout=this.timeoutFunction,this._httpReq.on(Laya.Event.COMPLETE,this,this.reqCompleteHandler),this._httpReq.on(Laya.Event.ERROR,this,this.reqErrorHandler),this._httpReq.on(Laya.Event.PROGRESS,this,this.reqProcessHandler),_e.RepeatHandler=Laya.Handler.create(this,this.repeatCallHandler,null,!1)}static get instance(){return _e._instance||(_e._instance=new _e),_e._instance}repeatCallHandler(){let t=this._callDataArr[0];t&&(t.needReSend?(this._callDataArr.shift(),this._sendByByte(t.command,t.callData,t.isShowLoading,!0)):this._callDataArr.shift())}timeoutFunction(){_e.ErrorIndex++,this._sendCmd==2,_e.timeoutTimes<_e.MaxSendTimes,_e.timeoutTimes++,_e._IS_SEND=!1,this._isSending=!1,_e.ErrorIndex>=_e.RepeatTimesTimeOut?(he.instance.hideLoading(),_e.ErrorTips=d.instance.getLanguage(5076),H.intance.openModule(h.ClientErrView)):_e.RepeatHandler.run()}reqCompleteHandler(t){let e=Laya.Browser.now()-this.m_nSendTime;if(e&&e>_e.RequestTime?(_e.reqTimes<_e.MaxSendTimes,_e.reqTimes++):(_e.reqTimes=0,_e.timeoutTimes=0,_e.errorTimes=0),console.log("cmd time："+(Laya.Browser.now()-this.m_nSendTime)),this._httpReq.data==null){me.instance.showErrByString("_buff:null");return}this._isSending=!1,_e.ErrorIndex=0;let i=new Laya.Byte(this._httpReq.data),n;if(i){let r=new rn,o=r.ReadString(i);to.instance.analyCookie(o);let s=r.ReadByte(i);for(let l=0;l<s;l++){r.ReadByte(i);let c=r.ReadShort(i),u=r.ReadBytes(i,i.pos+c);if(i.pos+=c,u.length<2)continue;u.pos=0;let m=r.ReadBytes(u,u.length);m.pos=0;let v=new Uint8Array(m.buffer),w=new Uint8Array(kx(v)),x=new Laya.Byte(w.buffer);x.pos=0;let b=to.instance.analyServer(x);Laya.LayaEnv.isConch?console.log("REVC_CMD: cmdID:"+b[0]+" data:"+b,1):console.log(ge.GetLogTime+" REVC_CMD: cmdID:",b[0],b),b[0]==153&&console.log("......"),b[0]==27&&(b[1]==2e4||b[1]==20042)&&(n=!0),g.intance.event("msg_"+b.shift(),[b])}s==0&&console.log("REVC_DATA: NO_DATA",1)}if(this._callDataArr.length>0){let r=this._callDataArr.shift();n&&r&&r.callBackHandler!=null&&r.callBackHandler.run()}_e._IS_SEND=!1,this._callDataArr.length>0?_e.RepeatHandler.run():he.instance.hideLoading()}reqErrorHandler(t){console.log("[error] HttpNetService reqError: ["+t+"]",1),_e.errorTimes<_e.MaxSendTimes&&this._sendCmd==2,_e.errorTimes++,he.instance.showLoadingByInfo(d.instance.getLanguage(5205)),_e.ErrorIndex++,_e._IS_SEND=!1,this._isSending=!1,_e.ErrorIndex>=_e.RepeatTimes?(he.instance.hideLoading(),_e.ErrorTips=d.instance.getLanguage(5075),H.intance.openModule(h.ClientErrView),this._callDataArr.length=0):Laya.timer.once(1e3,this,function(){_e.RepeatHandler.run()})}reqProcessHandler(t){}DataToService(t){Laya.LayaEnv.isConch?this._httpReq.send(Q.server,t.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded","Connection","close"]):this._httpReq.send(Q.server,t.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded"])}SendData(t,e,i=null,n=!0,r=!0){this._stopSending||(this.m_nSendTime=Laya.Browser.now(),_e.ErrorIndex=0,r&&this._callDataArr.push({command:t,callData:e,callBackHandler:i,isShowLoading:n,needReSend:r}),this._sendByByte(t,e,n,!1))}_sendByByte(t,e,i=!0,n=!1){this._sendCmd=t,this._sendCmd==2,rt.instance.sendData({cmd:t,code:"",data:e})}reSendData(){this._callDataArr.length>0&&_e.RepeatHandler.run()}sendOutHandler(){Laya.timer.clear(this,this.sendOutHandler),this._isSending&&(this._isSending=!1,_e.ErrorIndex>=_e.RepeatTimes?(he.instance.hideLoading(),_e.ErrorTips="Client Error!",H.intance.openModule(h.ClientErrView),this._callDataArr.length=0):_e.RepeatHandler.run())}EnCodeByte(t){t.pos=0;let i=new rn().ReadBytes(t,t.length);i.pos=0;let n=new Laya.Byte,r=0,o,s=0;for(let l=0;l<i.length;l++)r>=6?r=1:r+=1,o=i.getByte(),s=o,o>>=8-r,s<<=r,s|=o,s^=3,n.writeByte(s);return n}DecryptByte(t){t.pos=0;let i=new rn().ReadBytes(t,t.length);i.pos=0;let n=new Laya.Byte,r=0,o,s=new Uint8Array(i.buffer);for(let l=0;l<s.length;l++)r>=6?r=1:r+=1,o=s[l],o^=3,o<<=8-r,s[l]^=3,s[l]>>=r,s[l]|=o;return n=new Laya.Byte(s.buffer),n}init(){}HttpLoadProcess(t){}httpLoadComplete(t){to.instance.analyData=t}dispose(){}set stopSending(t){this._stopSending=t}};_e._IS_SEND=!1,_e.ErrorIndex=0,_e.RepeatTimes=8,_e.RepeatTimesTimeOut=3,_e.ErrorTips="",_e.LoginTime=5e3,_e.RequestTime=4e3,_e.MaxSendTimes=5,_e.reqTimes=0,_e.timeoutTimes=0,_e.errorTimes=0;var ya=_e;function kx(a){throw new Error("Function not implemented.")}var Tt=class extends Laya.Event{constructor(){super()}};Tt.INIT_SUIT_EVENT="HeroEvent:INIT_SUIT_EVENT",Tt.EVENT_FIND_ITEM_CLICK="HeroEvent:EVENT_FIND_ITEM_CLICK",Tt.EVENT_RELEASE_ITEM_CLICK="HeroEvent:EVENT_RELEASE_ITEM_CLICK",Tt.EVENT_FINISH="HeroEvent:EVENT_FINISH",Tt.EVENT_START="HeroEvent:EVENT_START",Tt.EVENT_AGAIN="HeroEvent:EVENT_AGAIN",Tt.EVENT_ENABLE_TIJIAO="HeroEvent:EVENT_ENABLE_TIJIAO",Tt.EVENT_HUMANSTAY="HeroEvent:EVENT_HUMANSTAY",Tt.EVENT_STOPGAME="HeroEvent:EVENT_STOPGAME",Tt.EVENT_RESTORE="HeroEvent:EVENT_RESTORE",Tt.EVENT_CANCEL_RESTORE="HeroEvent:EVENT_CANCEL_RESTORE",Tt.EVENT_COLLISIONENTER="HeroEvent:EVENT_COLLISIONENTER",Tt.EVENT_HERO_DRAW_UPDATE_PRODUCTION="HeroEvent:EVENT_HERO_DRAW_UPDATE_PRODUCTION",Tt.SELECT_UI="HeroEvent:SELECT_UI";var Zu=class extends Le{constructor(){super()}};var Ju=class extends Le{constructor(){super()}};var et=class a{constructor(){this._inited=!1;this._initUpgrade=!1;this.heroList=[];this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}initUpgrade(){if(!this._initUpgrade){let t=U.intance;t.m_dicHeroLv||(t.m_dicHeroLv=t.initConfig("hero_lv",["hero_lv","hero_star","race"],Ju)),t.m_dicHeroAttup||(t.m_dicHeroAttup=t.initConfig("hero_attup",["star_lv","race"],Zu)),this._initUpgrade=!0}}getHead(t){let e=Math.floor(Math.random()*3)+1;return"common/common_icon/img_"+t+"_"+e+".png"}getNextHero(t){let e=L.instance.m_heroData.heroVoDic.keys.indexOf(t.pk);return L.instance.m_heroData.heroVoDic.keys.length===1?null:e<=L.instance.m_heroData.heroVoDic.keys.length-2?L.instance.m_heroData.heroVoDic.values[e+1]:null}getLastHero(t){let e=L.instance.m_heroData.heroVoDic.keys.indexOf(t.pk);return e>0?L.instance.m_heroData.heroVoDic.values[e-1]:null}setStar(t,e){let i=parseInt(e);var n=Math.floor(i/6),r=i%6,o=n+r;let s=0;for(let u=0;u<n;u++)t["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_2.png",t["img_star"+(u+1)].visible=!0;for(let u=n;u<r;u++)t["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_1.png",t["img_star"+(u+1)].visible=!0;for(let u=o;u<5;u++)t["img_star"+(u+1)].visible=!1;let l=t.box_star.width,c=46;o==1?t["img_star1"].x=l/2-s:o==2?(t["img_star1"].x=l/2-c/2-s,t["img_star2"].x=l/2+c/2-s):o==3?(t["img_star1"].x=l/2-s,t["img_star2"].x=l/2-c-s,t["img_star3"].x=l/2+c-s):o==4?(t["img_star1"].x=l/2-c/2-s,t["img_star2"].x=l/2+c/2-s,t["img_star3"].x=l/2-c*(1/2+1)-s,t["img_star4"].x=l/2+c*(1/2+1)-s):(t["img_star1"].x=l/2-s,t["img_star2"].x=l/2-c-s,t["img_star3"].x=l/2+c-s,t["img_star4"].x=l/2-c*2-s,t["img_star5"].x=l/2+c*2-s)}getRoundName(t){let e=d.instance.getLanguage(10014,16,8);return t==4?e=d.instance.getLanguage(10014,2,1):t==3?e=d.instance.getLanguage(10014,4,2):t==2&&(e=d.instance.getLanguage(10014,8,4)),e}};var ep=class{};var tp=class{};var st=class a{constructor(){this.mail_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"||(this.mail_contract=new window.web3.eth.Contract(ue.BLINDBOX_ABI,ue.BLINDBOX_ADDRESS))}async initData(){this.mailList=new ne,he.instance.showLoading(!0);let t=await this.mail_contract.methods.getPricesLength().call();for(let e=0;e<t;e++){let i=await this.mail_contract.methods.getPriceByIndex(e).call(),n=new ep;n.type=1,n.idx=e,Object.assign(n,i),this.mailList.set(n.idx,n),n.showPrice=Ja(n.currentPrice+"")}he.instance.hideLoading()}async hasFree(){return await this.mail_contract.methods.getIsFreeOpen().call()?!await this.mail_contract.methods.hasFreeHero(q.instance.walletAddress).call():!1}async recruit(t){console.log("成功",66),console.log("失败",66),he.instance.showLoading(!0);let e=U.intance.m_dicShops.get(t),i=e.cost[0];try{var n;Q.vType==2?n=it.id:Q.vType==1?n=it.id:n=xt.id;let l=U.intance.getBuyHeroAddress(n),c=await q.instance.walletClient.getChainId();if(n!==c){var r=await q.instance.switchChain(n);if(!r){this.onEndHeroBuy(),console.log("切换失败，请手动切换");return}c=await q.instance.walletClient.getChainId()}let u=U.intance.getCurrencyAddress(3001,c);if(!u)return this.onEndHeroBuy(),N.instance.notice(d.instance.getLanguage(1177,c)),!1;if(!l)return this.onEndHeroBuy(),N.instance.notice(d.instance.getLanguage(1174,c)),!1;let m=e.cost[1],v=await q.instance.getBalance2(u),w=Ja(m+"");if(parseFloat(v)<parseFloat(w)){this.onEndHeroBuy(),ge.moneyNotEnought(i);return}if(console.log("判断授权 tokenAddress: "+u+", chainIDData:"+n),!await q.instance.newAllowanceAddress(l,u))return console.log("未授权"),this.onEndHeroBuy(),N.instance.notice(d.instance.getLanguage(15)),he.instance.hideLoading(),!1;console.log("授权成功 开始购买");var o=await q.instance.walletClient.writeContract({account:q.instance.walletAddress,address:l,abi:ue.BUY_HERO_ABI,functionName:"mintByTOX",args:[]});console.log("============"+o);let b=await q.instance.publicClient.waitForTransactionReceipt({hash:o});return console.log(`Tx with hash: ${o}`,b),b&&b.status=="success"?(console.log(`Tx successful with hash: ${o}`),o):(this.onEndHeroBuy(),ge.TransactionErrorTip(),!1)}catch(l){this.onEndHeroBuy();var s=l.shortMessage;if(s&&s.indexOf("does not match")!=-1&&(s=d.instance.getLanguage(1118)),console.log(s),l instanceof F){let c=l.walk(u=>u instanceof kt);if(c instanceof kt){let u=c.data?.errorName??"";console.log("============errorName: "+u)}}return null}}waitGetHero(){Laya.timer.loop(2e3,this,this.getHero)}async getHero(){var t=await M.requestPost("wxgame/hero/heroBuyChainCheck",{}).catch(e=>{});t&&t.heroList&&t.heroList.length>0&&(Laya.timer.clear(this,this.getHero),this.onNewAddHero(t.heroList))}onNewAddHero(t){ze.instance.autoPop=!1,L.instance.herosDataUpdataHandler(t),this.onEndHeroBuy()}onAddHero(t){ze.instance.autoPop=!1,L.instance.herosDataUpdataHandler(t.reward),t.resChange&&L.instance.moneyInfoHander(t.resChange),t.fightHeroPk&&(L.instance.playerDto.fightHeroPk=t.fightHeroPk),this.onEndHeroBuy()}onEndHeroBuy(){he.instance.hideLoading(),g.intance.event(y.EVENT_END_HEROBUY)}async recruit1(t){let e=U.intance.m_dicShops.get(t),i=e.cost[1],n=await q.instance.getBalance(),r=await M.requestPost("wxgame/hero/heroBuy",{shopId:e.id},!0,!0);r?this.onAddHero(r):this.onEndHeroBuy()}async recruitItem(t,e){let i=U.intance.m_dicShops.get(t),n=i.cost[1],r=await q.instance.getBalance(),o=await M.requestPost("wxgame/hero/itemBuy",{shopId:i.id,count:e},!0,!0);o&&(L.instance.itemsDataUpdataHandler(o.reward,!1,!0),o.resChange&&L.instance.moneyInfoHander(o.resChange),o.fightHeroPk&&(L.instance.playerDto.fightHeroPk=o.fightHeroPk),he.instance.hideLoading())}async recruitFree(){he.instance.showLoading(!0),this.isOpen=await this.mail_contract.methods.getIsOpen().call();let t=await this.hasFree();if(!this.isOpen){he.instance.hideLoading(),g.intance.event(y.EVENT_HERO_DRAW_BACK,[d.instance.getLanguage(12)]);return}if(!t){g.intance.event(y.EVENT_HERO_DRAW_BACK,[d.instance.getLanguage(17)]);return}await this.mail_contract.methods.recruitFree().send({from:q.instance.walletAddress},(e,i)=>{if(e){he.instance.hideLoading(),g.intance.event(y.EVENT_HERO_DRAW_BACK,[d.instance.getLanguage(16)]);return}})}async ownerHero(t=!1){let e=await M.requestPost("wxgame/hero/heroList",{},!0,!0);L.instance.m_heroData.initData(e.heroList,t),console.log("HERO LIST")}async ownerBag(){let t=await M.requestPost("wxgame/hero/bagList",{},!0,!0);L.instance.m_packageData.initData(t.data),console.log("BAG LIST")}async heroOutputRate(){if(et.instance.heroOutputRateDic)return;let t=await M.requestPost("cybertron-sys-api/api/v1/heroes/heroOutputRate",{},!0);et.instance.heroOutputRateDic=new ne;for(let e of t){let i=new tp;Object.assign(i,e),et.instance.heroOutputRateDic.set(i.mineralLevel,i)}console.log("HERO heroOutputRate"),g.intance.event(Tt.EVENT_HERO_DRAW_UPDATE_PRODUCTION)}makeHeroVo(t){let e=new Dt;return Object.assign(e,t),e}};var ip=class{constructor(){this.heroVoDic=new ne}initData(t,e=!1){(!this.heroVoDic||e)&&(this.heroVoDic=new ne);let i;for(let r=0;r<t.length;r++){i=new Dt;var n=t[r];i.id=n.id,i.lv=n.lv,i.pk=n.pk,i.color=n.color,i.state=n.state,i.type=n.type,this.pushItem(i)}console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}updateData(t){console.dir("更新英雄："+t),this.updataItemVoByArr(t)}herosDataRemoveHandler(t){console.dir("删除英雄："+t);for(let i=0;i<t.length;i++){var e=t[i];this.removeItemPk(e)}}pushItem(t){this.heroVoDic.set(t.pk,t)}removeItem(t){this.removeItemPk(t.pk)}removeItemPk(t){this.heroVoDic.remove(t+"")}updataItemVoByArr(t,e=!1){let i=[],n=!1,r;for(let o=0;o<t.length;o++){r=t[o];let s=this.heroVoDic.get(r.pk);s==null?(s=new Dt,s.id=r.id,s.pk=r.pk,s.lv=r.lv,s.color=r.color,s.state=r.state,s.fight=r.fight,s.type=r.type,r.fight&&(L.instance.playerDto.fightHeroPk=r.pk),s.m_bNew=!0,s.newAddCnt=1,s.newAddCnt>0&&this.pushItem(s)):s.newAddCnt=1,s.isLvUp=e,i.push(s.pk),s.m_iNum<=0&&this.removeItem(s),s.newAddCnt>0&&ze.instance.needPop&&(ze.instance.addHeroItem(s),n=!0)}n&&ze.instance.needPop&&ze.instance.autoPop&&Kt.instance.startShow(),i.length>0&&g.intance.event(y.PACKAGE_UPDATE_ITEM,[i])}getItemById(t){return this.heroVoDic.get(t)}getCount(){return this.heroVoDic.values.length}getCanTransferHero(t){let e=this.heroVoDic.get(t+"");return e&&e.state==0&&e.pk!=L.instance.playerDto.fightHeroPk?e:null}};var ap=class{constructor(){this.m_dicItemList=new ne,this.m_dicTypeList=new ne}initData(t){this.m_dicItemList=new ne,this.m_dicTypeList=new ne;let e;for(let i=0;i<t.length;i++)e=t[i],this.pushItem(e);console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}parseItem(t){if(t.mailId>0){var e=U.intance.m_dicMail.get(t.mailId);t.title=d.instance.getLanguage(e.title),t.content=d.instance.getLanguageMulti(e.text,t.params)}}pushItem(t){this.parseItem(t),this.m_dicItemList.set(t.id,t),this.m_dicTypeList.get(t.type)==null&&this.m_dicTypeList.set(t.type,new ne),this.m_dicTypeList.get(t.type).set(t.id,t)}removeItem(t){this.m_dicItemList.remove(t.id),this.m_dicTypeList.get(t.type).remove(t.id)}getItemById(t){return this.m_dicItemList.get(t)}getListByType(t){let e=[];return this.m_dicTypeList.get(t)&&(e=this.m_dicTypeList.get(t).values.slice()),e}};var L=class a{constructor(){this.timeZoneOff=0;this.hearIntervalSceond=10*60;this._timeStamp=0;this._m_strLanguage=1;this.isLanChanged=!1;this.lastTimestamp=0;this._m_serverTime=0;this.M_S_VersionServer="1.0.0";this.redDotData=[];this.friendNum=0;this.headId=10001;this.countryId=1010;this._guildIcon=2006;this.rechargeEnd=!1;this.needPopError=!0}async initData(){xe.instance.sendCustumEvent(20),await st.instance.ownerHero(),await st.instance.ownerBag(),xe.instance.sendCustumEvent(21)}get m_serverTime(){let t=Date.now();return this._m_serverTime+(t-this.lastTimestamp)}set m_serverTime(t){this._m_serverTime=t,this.lastTimestamp=Date.now()}get guildIcon(){return this._guildIcon}set guildIcon(t){console.log("guildIcon: "+t),this._guildIcon=t}get m_strLanguage(){return this._m_strLanguage}set m_strLanguage(t){this._m_strLanguage=t}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this.vipInfo=new Yu,this.m_packageData=new $u,this.m_mailData=new ap,this.m_heroData=new ip,this.systemOpenModel=new Ku,this.m_dicCustomerVo=new ne,g.intance.on("msg_27",this,this.commonErrHandler),g.intance.on("msg_11",this,this.vipInfoHandler),g.intance.on("msg_13",this,this.onVipUpgrade),g.intance.on("msg_90",this,this.initSystemOpen),g.intance.on("msg_161",this,this.reciveTurnoverVo),g.intance.on("msg_333",this,this.onInitSceneBg),g.intance.on("msg_350",this,this.onInitStoreDiscount),g.intance.on("msg_388",this,this.onInitTitle),g.intance.on("msg_1002",this,this.onLanChange)}initSend(){}onLanChange(t){let e=parseInt(t[0]),i=parseInt(t[1]);switch(e){case 1:i==1&&xe.instance.reload();break;case 2:break}}get timeStamp(){return this._timeStamp+(Laya.Browser.now()-this.recordStampTime)/1e3}set timeStamp(t){this.recordStampTime=Laya.Browser.now(),this._timeStamp=t}onReciveBuyTimes(t){a.instance.playerDto.updateRoleBuyTimes(t)}reciveTurnoverVo(t){}onInitSceneBg(t){}onInitTitle(t){}getAdRankById(t){return this.m_adRankDic&&this.m_adRankDic.get(t)?this.m_adRankDic.get(t):""}onGetPvpGrade(t){let e=t[0]}onInitStoreDiscount(t){}reciveBuyCustomerMsg(t){}onInitStyleAndTag(t){let e=t[0];for(let i=0;i<e.length;i++){let n=e[i],r=n[0],o=n[1],s=n[2]}}reciveFriendList(t){}reciveFirstRecharge(t){}hasReceiveFirst(){return this.firstRechargeState.toString()=="3"}recieveOnlineAward(t){}initFriendsGiftHandler(t){}initSystemOpen(t){this.systemOpenModel.initSystemOpen(t[0])}updateSystemOpen(t){let e=t[0];Xu.instance.addNewOpenFun(e);for(let i=0;i<e.length;i++)this.systemOpenModel.openSystem.set(e[i],!0)}serverTimeUpdateHandler(){let t=this.hearIntervalSceond*1e3;Laya.timer.loop(t,this,this.onHear)}onHear(){}initMainTaskHandler(t){}itemsDataUpdataHandler(t,e,i){this.m_packageData.updateData(t,e,i),g.intance.event(y.EVENT_ITEM_UPDATE)}herosDataUpdataHandler(t){this.m_heroData.updateData(t)}itemsDataInitHandler(t){this.m_packageData.initData(t)}vipInfoHandler(t){this.vipInfo.trecharge=t[1],this.vipInfo.isRewards=t[2],this.vipInfo.daygift=t[3]}onVipUpgrade(t){}getConsumeValue(t){t=parseInt(t.toString());var e=this.playerDto.coins[t];return e>0?e:0}hasEnoughMoney(t,e,i=!0){switch(t=parseInt(t.toString()),e=parseInt(e.toString()),t){default:return this.playerDto.coins[t]<e&&i&&g.intance.event("open_buy",4),this.playerDto.coins[t]>=e}}moneyInfoHander(t,e=!0,i=!0){let n=!1,r=!1,o=0;for(let s of t)r=!1,s[0]==ke.TYPE_EXP?(o=parseInt(s[1]+"")-this.playerDto.exp,this.playerDto.exp=parseInt(s[1]+""),r=o>0):(o=parseFloat(s[1]+"")-this.playerDto.coins[s[0]],this.playerDto.coins[s[0]]=parseFloat(s[1]+""),r=o>0),r&&ze.instance.needPop&&i&&(n=!0,ze.instance.addConsumeByServer([s[0],o]));e&&g.intance.event(y.ROLE_INFO_CHANGE),n&&ze.instance.autoPop&&Kt.instance.startShow()}commonErrHandler(t){if(he.instance.hideLoading(),parseInt(t[0])==2e4){this.needPopError&&(me.instance.showErrorWord(parseInt(t[0])),g.intance.event(y.RECIVE_SUCESS_SERVICE));return}else if(parseInt(t[0])==20008){g.intance.event("open_buy",1);return}else if(parseInt(t[0])==20007){g.intance.event("open_buy",2);return}else if(parseInt(t[0])==20015){g.intance.event("open_buy",3);return}else if(parseInt(t[0])==20016){g.intance.event("open_buy",4);return}else if(parseInt(t[0])==10021){ya.ErrorTips=me.instance.get(10021),H.intance.openModule(h.ClientErrView);return}else if(parseInt(t[0])==10023){ya.ErrorTips=me.instance.get(10023),H.intance.openModule(h.ClientErrView);return}else if(parseInt(t[0])==10019){ya.ErrorTips=me.instance.get(10019),H.intance.openModule(h.ClientErrView);return}else if(parseInt(t[0])!=20053){if(parseInt(t[0])==10002){ya.ErrorTips=d.instance.getLanguage(5085),H.intance.openModule(h.ClientErrView);return}}me.instance.showErrorWord(parseInt(t[0])),console.log("Server Error Code:"+t[0])}dispose(){}parseNumber(t){let e=[];for(let i=0;i<t.length;i++){let n=t[i];n=this.dividedNumber(n),e.push(n.toString())}return e}dividedNumber(t){return t/1e4}getRedDotById(t){return!!(this.redDotData&&this.redDotData.indexOf(t)>-1)}};var d=class a{constructor(){this._lanTypesById=new ne,this._lanTypesByType=new ne,this._configData=new ne}static get instance(){return a._instance||(a._instance=new a),a._instance}initLanTypes(t){this._lanTypesById=new ne,this._lanTypesByType=new ne;for(let e in t){let i=new yo;if(i.init(t[e]),parseInt(i.if_open)!=1)continue;let n=i.ID,r=i.type;this._lanTypesById.set(n,i),r&&r!=""&&this._lanTypesByType.set(r,i)}}getLanTypes(){return this._lanTypesById}getLanIdByType(t){if(this._lanTypesByType){let e=this._lanTypesByType.get(t);if(e)return parseInt(e.ID.toString())}return 1}getLanTypeById(t){if(this._lanTypesById){let e=this._lanTypesById.get(t);if(e)return e.type}return"en"}initConfigLan(t){this._configData=t}initUILan(t){Laya.Text.langPacks={};let e;for(e in t){let i=t[e].value;Laya.Text.langPacks[e]=i}}changeBrToN(t){let e=/<br>/g;for(;t.indexOf("<br>")!=-1;)t=t.replace(e,`
`);return t}replacePlaceholder(t,e){if(t=="")return"";let i=/{(\d+)}/g;return e.length>0&&(t=t.replace(i,function(){return e[arguments[1]]})),this.replaceLanByBR(t)}replaceLanByBR(t){return t+""}getLanguage(t,...e){return this.getLanguage2(t,e)}getLanguage2(t,e){if(this._configData&&this._configData[t]){let i=this._configData[t].value;if(i&&i!="")return this.replacePlaceholder(i,e)}return this.replacePlaceholder(t+"",e)}getLanguageMulti(t,e){if(console.log("getLanguageMulti",e),this._configData&&this._configData[t]){let i=this._configData[t].value;if(i&&i!="")return this.replacePlaceholderMulti(i,e)}return this.replacePlaceholder(t+"",e)}replacePlaceholderMulti(t,e){if(t=="")return"";let i=/{(\d+)}/g;return e.length>0&&(t=t.replace(i,function(){var n=e[arguments[1]];if(n instanceof Object){var n=JSON.parse(n);n=a.instance.getMultiLan(n)}return n})),this.replaceLanByBR(t)}getUILang(t,e=null,i=null,n=null,r=null){if(t=Laya.Text.langPacks&&Laya.Text.langPacks[t]?Laya.Text.langPacks[t]:t,arguments.length>1)for(let o=0,s=arguments.length;o<s;o++)t=t.replace("{"+o+"}",arguments[o+1]);return t}getMultiLan(t){var e=parseInt(L.instance.m_strLanguage.toString()),i;return t&&(i=t[e]),i}FGM_GetLanguage(){let t=function(i){console.log("initGame->-----------------------------FGM_GetLanguage:=="+i),i&&(i=i.substring(0,2),Q.User_Lan=i)},e=Laya.LocalStorage.getItem(Q.COOKIE_CF_LAN);!e||e==""?t(this.language):t(e)}get language(){return"en"}FGM_SetLanguage(t){t&&t!=""&&Laya.LocalStorage.setItem(Q.COOKIE_CF_LAN,t)}dispose(){}};var np=class a{constructor(){this.m_sprMap=new Laya.Sprite;this.m_Image=new Laya.Image}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){}showLoading(t=!1){if(this.loadingMc)this.m_sprMap.size(Laya.stage.width,Laya.stage.height),Q.m_bIsIphoneX&&(this.m_Image.scaleX=Q.IPHONEX_SCARE,this.m_Image.scaleY=Q.IPHONEX_SCARE),this.m_Image.x=(this.m_sprMap.width-this.m_Image.width*this.m_Image.scaleX)/2,this.m_Image.y=(this.m_sprMap.height-this.m_Image.height*this.m_Image.scaleY)/2,this.m_sprMap.x=(B.instence.m_iStageWidth-this.m_sprMap.width*this.m_sprMap.scaleX)/2,this.m_sprMap.y=(B.instence.m_iStageHeight-this.m_sprMap.height*this.m_sprMap.scaleY)/2,this.m_sprMap.visible=!0,Laya.timer.clear(this,this.showLazyBg),t?(this.m_Image.alpha=1,this.showLazyBg()):(this.m_Image.alpha=0,this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_sprMap.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,"#000000")),Laya.timer.once(300,this,this.showLazyBg));else return}showLazyBg(){this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_Image.alpha=1),this.loadingMc&&(this.loadingMc.x=Laya.stage.width/2,this.loadingMc.y=Laya.stage.height/2,this.loadingMc.play(),this.loadingMc.visible=!0)}hideLoading(){if(this.loadingMc)this.hideLoadingSHow();else return}hideLoadingSHow(){Laya.timer.clear(this,this.showLazyBg),this.loadingMc.stop(),this.loadingMc.visible=!1,this.m_sprMap.visible=!1}get isShow(){return this.loadingMc&&this.loadingMc.visible}dispose(){this.m_sprMap&&this.m_sprMap.graphics.clear(),Laya.timer.clear(this,this.showLazyBg),this.loadingMc&&(this.loadingMc.destroy(),this.loadingMc.removeSelf(),this.loadingMc=null)}};var Ue=class Ue{static get IsSetRelease(){return Ue._IsSetRelease}static get IsSetGuid(){return Ue._IsSetGuid}static initParms(){if(Laya.Browser.window.location){let e=Laya.Browser.window.location.href,i=this.getURLParameters(e);if(Ue.m_obj=i,console.log("1initgame-->urldata:",Ue.m_obj),Ue.m_obj.server&&Ue.m_obj.server!=""&&(M.httpRoot=Ue.m_obj.server),Ue.m_obj.socket&&Ue.m_obj.socket!=""){var t=Ue.m_obj.socket;rt.m_strHttpHost=t+"/websocket"}if(Ue.m_obj.address&&Ue.m_obj.address!=""&&(q.instance.walletAddress=Ue.m_obj.address),Ue.m_obj.from&&Ue.m_obj.from=="into"&&(Q.isInto=!0),Ue.m_obj.isFull&&Ue.m_obj.isFull=="1"&&(Q.isFull=!0),Ue.m_obj.justFull&&Ue.m_obj.justFull=="1"&&(Q.justFull=!0),Ue.m_obj.white&&Ue.m_obj.white=="1"&&(Q.isWhite=!0),Ue.m_obj.debug&&Ue.m_obj.debug!="0"&&(Q.Debug=parseInt(Ue.m_obj.debug)),Ue.m_obj.res&&Ue.m_obj.res!="0"&&(Q.Res=parseInt(Ue.m_obj.res)),Ue.m_obj.lang&&Ue.m_obj.lang!=""){let n=parseInt(Ue.m_obj.lang);n<1&&(n=1),Q.ignoreLang=!0,L.instance.m_strLanguage=n}}}static getURLParameters(t){let e={};return t.replace(/[?&]+([^=&]+)=([^&]*)/gi,(i,n,r)=>e[n]=decodeURIComponent(r)),e}static cheakStr(t){let e=new RegExp("[A-Za-z0-9_-\\s]","g"),i=t.match(e);return!!(i&&i.length==t.length)}static isNumber(t){return/^(?!0\d)\d*\.?\d*$/.test(t)}static roundToTwoDecimals(t){return t%1===0?t.toString():Number(t.toFixed(2)).toString()}static filterObjectsByState(t,e){return t.filter(i=>i.state===e)}static getArenaByTicketId(t){let e=U.intance.m_dicArenaDic.values;for(let i of e)if(Array.isArray(i.item)&&i.item.length>0&&i.item[0]===t)return i.name}static processItemsArray(t,e=!0){let i=[3006,3001,3007,3004,3005,3011],n={},r={};var o=[];t.forEach(c=>{i.indexOf(c.id)>-1?r[c.id]?r[c.id].count+=c.count:r[c.id]=c:(n[c.id]=c,o.push(c))}),e&&i.forEach(c=>{r[c]||(r[c]={type:1,id:c,count:0})});let s=Object.values(r),l=Object.values(n);return s=s.sort((c,u)=>i.indexOf(c.id)-i.indexOf(u.id)),[s,l,o]}static sumItemCount(t){let e=new Map;return t.forEach(n=>{n.reward.forEach(r=>{let{type:o,id:s,count:l}=r;e.has(s)?e.set(s,{type:o,id:s,count:e.get(s).count+l}):e.set(s,{type:o,id:s,count:l})})}),Array.from(e.values())}static addIndexToObjects(t){return t.forEach((e,i)=>{e.index=i}),t}static findFirstTypeAndNotGold(t){let e=[3006,3001,3007,3004,3011];for(let i=0;i<t.length;i++)if(e.indexOf(t[i].id)>-1)return t[i]}static getTitleByGoodsId(t,e){for(let i of t)if(i.goods===e)return i.title;return null}static getCurrencyIdByName(t){let e=ke.TYPE_TOX;switch(t){case"TOX":e=ke.TYPE_TOX;break;case"ETH":e=ke.TYPE_ETH;break;case"BTC":e=ke.TYPE_BTC;break;case"USDT":e=ke.TYPE_USDT;break;case"BTOX":e=ke.TYPE_BTOX;break}return e}static formatNumber(t){let e=t.toString(),i=e.indexOf(".");return i!==-1&&e.length-i>7?(e=e.slice(0,i+7),parseFloat(e)):t}static truncateToTwoDecimalPlaces(t){let e=t.toString(),i=e.indexOf(".");if(i===-1)return t;let n=e.substring(0,i+3);return parseFloat(n)}static getKeyByValue(t,e){return Object.keys(t).find(i=>t[i]===e)}};Ue._IsSetRelease=!1,Ue._IsSetGuid=!1;var Ie=Ue;var{regClass:Ax}=Laya,io=class extends Il{constructor(){super(...arguments);this.isLogout=!1;this.dotNum=0;this.m_nProgress=0}onAwake(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),Laya.loader.load(["res/common/comm_bg/img_loading1_bg.jpg","res/loading/progress_load1.png","res/loading/progress_load1$bar.png"]).then(()=>{this.createUI(),this.init()})}onError(e){console.log("加载失败: "+e)}createUI(){this.m_nSendTime=Laya.timer.currTimer,Pe.instance.init(),Pe.instance.playMusicByName(Pe.soundName_bg,".mp3"),g.intance.on(y.EVENT_BACK_TO_LOGIN,this,this.backToLogin),g.intance.on(y.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),g.intance.on(y.EVENT_ENTER_MAIN,this,this.loginCallBack),this.initLoad(),d.instance.FGM_GetLanguage(),Q.User_Lan=="zh"?this.img_loading_tip.skin="res/loading1/img_loading_tip_6.png":this.img_loading_tip.skin="res/loading1/img_loading_tip_1.png";var i=getGameVersion();this.txtLoad.text=i,console.log("VERSION: "+i);let n=new ia;n.ID=1,n.Event="加载版本信息 "+i,xe.instance.sendCustumEvent(1,null,n),ci.Initialize(Laya.stage,!0)}initLoad(){this.onAssetLoaded()}onAssetLoaded(){this.loadingProcess=0,this.m_nProgress=0,Laya.timer.loop(1800,this,this.onLoading,[this.m_nProgress])}set loadingProcess(e){e>1&&(e=1),this.mcProcess.value=e,this.txtProcess.text=Math.floor(e*100)+"%";var i=e*this.mcProcess.width-70;i<0&&(i=0),this.img_guang.x=i,console.log("loadingProcess: "+e)}init(){B.instence.init(),fe.intance.init(),np.instance.init(),H.intance.init(),L.instance.init();let e=new ia;e.ID=3,e.Event="加载资源信息",xe.instance.sendCustumEvent(3,null,e),k.instance.init(),Ie.initParms()}backToLogin(){Laya.timer.clear(this,this.onLoading),this.m_nProgress=0,Laya.loader.load(k.instance.m_arrInitResource,Laya.Handler.create(this,this.getLoginData),Laya.Handler.create(this,this.onLoading2,null,!1))}getLoginData(){xe.instance.sendCustumEvent(7),this.readyInitGame()}readyInitGame(){if(this.isLogout){g.intance.event(y.EVENT_LOADING_SUC);return}this.mcProcess&&(this.loadingProcess=.8+.2),Q.isWhite?this.loginGame():this.onGetNotice()}async onGetNotice(){M.requestPost("wxgame/sys/notice",{type:1},!1,!1).then(e=>{var i=e;if(i.status==0&&i.nowTime>=i.startTime&&i.nowTime<=i.endTime){var n=parseInt(L.instance.m_strLanguage.toString()),r=i.title[n],o=i.contents[n];H.intance.openModule(h.NoticeDialog,[1,r,o]);return}this.loginGame()}).catch(e=>{H.intance.openModule(h.NoServerView)})}async loginGame(){g.intance.event(y.EVENT_LOADED_COMPLETE),await q.instance.init(),await q.instance.dappLogin()}async loginGameEnd(e){he.instance.showLoading(!0),xe.instance.sendCustumEvent(8),U.intance.init(),ya.instance.init(),console.log("PreLoadingView.joinGame()");let i=Laya.timer.currTimer-this.m_nSendTime;if(xe.instance.sendCustumEvent(22),!e){H.intance.openModule(h.NoServerView);return}e.loginState==1?(console.log("have no regist"),xe.instance.sendCustumEvent(23),H.intance.openModule(h.CreateLoginView)):(xe.instance.sendCustumEvent(30),e.playerDto?(xe.instance.sendCustumEvent(31),console.log("registed "+e.playerDto.name),L.instance.playerDto=e.playerDto,this.loginCallBack()):(xe.instance.sendCustumEvent(32),console.log("getRegisted error"),N.instance.notice(d.instance.getLanguage(135))))}async loginCallBack(){console.log("loginCallBack++++++++++++++++++++++++++++++++"),he.instance.hideLoading();var e=L.instance.playerDto;if(e.roomId>0){let i=await M.requestPost("wxgame/room/info",{roomId:e.roomId});K.instance.roomDto=i.roomDto,i.roomDto?e.roomState==0?H.intance.openModule(h.EnterRoomView):e.roomState==1&&rt.instance.initSocket():N.instance.notice(d.instance.getLanguage(135))}else ge.logs("进入主界面",5),xe.instance.sendCustumEvent(33),fe.intance.setCurrentScene($.M_SCENE_MAIN);M.startHeart()}onLoading(e){this.m_nProgress+=.01,this.mcProcess&&e>this.mcProcess.value&&(this.loadingProcess=e*.4)}onLoading2(e){this.mcProcess&&(this.loadingProcess=0+e*1.1)}removeEvent(){g.intance.off(y.EVENT_BACK_TO_LOGIN,this,this.backToLogin),g.intance.off(y.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),g.intance.off(y.EVENT_ENTER_MAIN,this,this.loginCallBack)}};io.m_iState=1,io=p([Ax("xmaaYG8AQ1yC07pr_JvyPA")],io);var{regClass:Dx,property:Pq}=Laya,Ks=class extends Laya.Script{constructor(){super()}onEnable(){Laya.timer.frameLoop(1,this,this.onRunRoll),this.onScaleEnd1()}onRunRoll(){this.owner.rotation++}onScaleEnd1(){Laya.Tween.to(this.owner,{scaleX:1.1,scaleY:1.1,alpha:.8},500,null,Laya.Handler.create(this,this.onScaleEnd2))}onScaleEnd2(){Laya.Tween.to(this.owner,{scaleX:.8,scaleY:.8,alpha:.5},500,null,Laya.Handler.create(this,this.onScaleEnd1))}onDisable(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};Ks=p([Dx("w5pr4pHJTMOM3bYxCyc4Ag")],Ks);var ao=class ao extends Laya.ColorFilter{constructor(t=null){super(t)}static addClickFilter(t){let e=t.filters||[];e.push(ao.clickFilter),t.filters=e}static clearClickFilter(t){let e=t.filters;if(e!=null&&e.length>0){for(let i=e.length-1;i>-1;i--)e[i]instanceof ao&&e.splice(i,1);t.filters=e}}};ao.clickFilter=new ao([1,0,0,0,-34,0,1,0,0,-34,0,0,1,0,-34,0,0,0,1,0]);var on=ao;var{regClass:Mx,property:Bx}=Laya,no=class extends Laya.Script{constructor(){super();this.noSound=!1}onEnable(){let e=this.owner.scaleX;this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onUp)}onDown(){this.noSound||Pe.instance.playSoundByName(Pe.soundName4),on.addClickFilter(this.owner)}onUp(){on.clearClickFilter(this.owner)}onDisable(){on.clearClickFilter(this.owner),this.owner.off(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.onUp)}};p([Bx({type:"boolean"})],no.prototype,"noSound",2),no=p([Mx("cL1AmqOiTHmtQWKayPNcTA")],no);var $i=class $i{constructor(){this.ROOM_1=1;this.ROOM_2=2;this.ROOM_3=3;this.ROOM_1_1=1;this.ROOM_1_2=2;this.ROOM_1_3=3;this.ROOM_2_1=201;this.ROOM_2_2=202;this.ROOM_2_3=203;this.ROOM_3_1=301;this.ROOM_3_2=302;this.ROOM_3_3=303}static get instance(){return $i._instance==null&&($i._instance=new $i),$i._instance}};$i._instance=null,$i.ROOM_FRIEND_APPLY=4,$i.ROOM_MAIL=5;var dt=$i;var Se=class a{static toFixed(t,e){if(t.toString().indexOf(".")==-1)return t;{let i=t.toFixed(e);return parseFloat(i)}}static toFixedWithPercent(t,e,i="+"){let n;return t.toString().indexOf(".")==-1?n=i+t*100+"%":(e=e-2,e<0&&(e=0),n=i+(t*100).toFixed(e)+"%"),n}static getGoldStr(t){let e;return t>999999?e=parseInt(String(t/1e5))+"m":e=t,e}static numStringFormat(t){let e=t;return L.instance.m_strLanguage==2?t.length>4&&(e=String(t).replace(/(\d)(?=(\d{3})+$)/g,"$1 ")):e=String(t).replace(/(\d)(?=(\d{3})+$)/g,"$1,"),e}static numSimple(t){let e=t,i=parseInt(parseInt(e)/1e3+"");return i>0?i+"k":a.numStringFormat(e)}static numStringFormat2(t){let e;if(t>999999)e=a.getNumStr(t,1e6,"M");else if(t>999)e=a.getNumStr(t,1e3,"K");else return t+"";return e}static getNumStr(t,e,i){return parseInt(Math.floor(t/e)+"")+i}static getTimeStr(t){let e;return t<3600?e=d.instance.getLanguage(9024,Math.ceil(t/60)):t<3600*24?e=d.instance.getLanguage(9025,Math.ceil(t/3600)):e=d.instance.getLanguage(9025,Math.ceil(t/(3600*24))),e}static BigInt(t){return 0}static isInteger(t){return t%1===0}static formatNumber(t,e=2){return Number.isInteger(t)?t:parseFloat(t.toFixed(e))}static formatNumberStr(t,e=2){return Number.isInteger(t)?t:parseFloat(t.toFixed(e)).toString()}static filterNumFormat(t,e=2,i=!1){if(!t)return t;if(t<1e3&&t>0)return parseFloat(t.toFixed(e)).toString();if(t==="0.00")return t;var n=[{value:1,symbol:""},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"}];i&&(n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"}]);var r=/\.0+$|(\.[0-9]*[1-9])0+$/,o;for(o=n.length-1;o>0&&!(t>=n[o].value);o--);let s=(t/n[o].value).toString();return s.indexOf(".")>-1&&(e>0?s=s.substr(0,s.indexOf(".")+e+1):s=s.substr(0,s.indexOf(".")+e)),s.replace(r,"$1")+n[o].symbol}static fromWei(t,e,i=0){if(!t)return 0;let n=t.length-e+i;if(n<=0)return 0;let r=t.toString().slice(0,n);if(i){let o=r.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";r=s+r}else r=r.slice(0,r.length-i)+"."+r.slice(r.length-i)}return r}};var rp=class extends Laya.Scene{};var{regClass:Px}=Laya,Ys=class extends rp{constructor(){super(...arguments);this.currTab=0;this.arenaLv=1001;this.coinTypes=[];this.arenaType=1;this.nodeIds=[];this.coinDatas=[];this.nodeDatas=[]}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP}async onOpened(e){this.mouseThrough=this.mouseThrough=!0,this.updateTopInfo(),this.initNodeCombo(),this.initCoinCombo(),this.initArenaTypes(),this.onClickTab(1);var i=Laya.stage.width-Q.DESIGN_WIDTH>>1;this.leftX=this.leftMenu.x,this.leftMenu.x=this.leftX-i-this.leftMenu.width,Laya.Tween.to(this.leftMenu,{x:this.leftX-i},500),U.intance.testNodes()}updateTopInfo(){this.arenaType=O.instance.arenaType;var e=U.intance.m_dicArenaTypes.get(this.arenaType);this.tf_name.text=d.instance.getLanguage(e.name),this.updateLocalAssets()}updateLocalAssets(){this.tf_3005.text=Se.filterNumFormat(L.instance.getConsumeValue(ke.TYPE_GOLD),0)}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.list_room.vScrollBarSkin="",this.list_room.array=[],Laya.timer.loop(1e3,this,this.refreshRoomTime),this.btn_create.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_create]),g.intance.on(y.ROLE_INFO_CHANGE,this,this.updateTopInfo),g.intance.on(It.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),g.intance.on(y.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),g.intance.on(y.EVENT_CHECK_NODE_SELECT,this,this.onNodeSelected),g.intance.on(y.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom)}setTab(e){for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("btn_yellowBg").visible=!0,this["btn_"+i].getChildByName("Label").color="#143268"):(this["btn_"+i].getChildByName("btn_yellowBg").visible=!1,this["btn_"+i].getChildByName("Label").color="#ffffff")}onClickTab(e){if(this.currTab!=e){if(this.list_room.visible=!1,this.setTab(e),e==1){this.arenaLv=1;var i=this.getRoomByType()}else if(e==2){this.arenaLv=2;var i=this.getRoomByType()}else if(e==3){this.arenaLv=3;var i=this.getRoomByType()}}}async getRoomByType(){Laya.timer.clear(this,this.getRoomByType),this.arenaType=O.instance.arenaType;let e=await M.requestPost("wxgame/room/list",{lv:this.arenaLv,coinTypeList:this.coinTypes,arenaType:this.arenaType,nodeIds:this.nodeIds});this.list_room.array=e.roomList,this.list_room.array.length>0?this.noDataBox.visible=!1:this.noDataBox.visible=!0,this.list_room.visible=!0,Laya.timer.once(3e3,this,this.getRoomByType)}refreshRoomTime(){this.refreshRoomBtnRed();let e=this.list_room.array;if(!(e.length<1)){for(let i=0;i<e.length;i++)if(e[i]){let n=this.list_room.getCell(i);n&&n.refreshTime&&n.refreshTime()}}}initArenaTypes(){var e=U.intance.m_dicArenaTypes.get(O.instance.arenaType),i=e.arenaLvs,n=[1,2,3];n.forEach(r=>{var o=this["btn_"+r],s=o.getChildByName("img_lock"),l=o.getChildByName("img_red");i.indexOf(r)!=-1?(o.disabled=!1,s.visible=!1):(o.disabled=!0,s.visible=!0)})}initCoinCombo(){var e=U.intance.m_dicArenaTypes.get(O.instance.arenaType);this.coinTypes=[];var i=e.coinTypes;this.coinDatas=[],i.forEach(n=>{this.coinTypes.push(n);var r=U.intance.m_dicItems.get(n);this.coinDatas.push([n,!0,d.instance.getLanguage(r.name)])}),this.list_coin.array=this.coinDatas}onCoinSelected(){this.coinTypes=[],this.coinDatas.forEach(e=>{e[1]&&this.coinTypes.push(e[0])}),console.log("您选中了 coinType"+this.coinTypes),this.getRoomByType()}initNodeCombo(){this.nodeIds=[];var e=U.intance.m_dicNodes.values;this.nodeDatas=[],e.forEach(i=>{this.nodeIds.push(i.id),this.nodeDatas.push([i.id,!0,i])}),this.list_node.array=this.nodeDatas}onNodeSelected(){this.nodeIds=[],this.nodeDatas.forEach(e=>{e[1]&&this.nodeIds.push(e[0])}),console.log("您选中了 nodeType"+this.nodeIds),this.getRoomByType()}refreshRoomBtnRed(){var e=O.instance.arenaType;this.img_red_1.visible=L.instance.getRedDotById(dt.instance["ROOM_"+e+"_1"]),this.img_red_2.visible=L.instance.getRedDotById(dt.instance["ROOM_"+e+"_2"]),this.img_red_3.visible=L.instance.getRedDotById(dt.instance["ROOM_"+e+"_3"])}async onclickBtnHandler(e){switch(e){case this.btn_create:H.intance.openModule(h.CreateRoomDialog,[this.arenaLv]);break;default:N.instance.notice(d.instance.getLanguage(12));break}}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}onDisable(){g.intance.off(y.ROLE_INFO_CHANGE,this,this.updateTopInfo),g.intance.off(It.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),g.intance.off(y.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),g.intance.off(y.EVENT_CHECK_NODE_SELECT,this,this.onNodeSelected),g.intance.off(y.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}onEnterMatchRoom(e){e?Laya.timer.once(3e3,this,this.getRoomByType):Laya.timer.clear(this,this.getRoomByType)}};Ys.M_B_FIRST_Open=!0,Ys=p([Px("Kvjumjs4Q--HdgEZ8LzawA")],Ys);var op=class extends Laya.Box{};var{regClass:Rx}=Laya,sp=class extends op{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.check_coin.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,!e)return;this.addEvent();let i=e;this.check_coin.selected=i[1];var n=i[2];this.img_node.skin=k.instance.getNodeIcon(n.area)}onCheck(){this._dataSource[1]=this.check_coin.selected,g.intance.event(y.EVENT_CHECK_NODE_SELECT)}};sp=p([Rx("81z6wk15RUi5m_pFud3KHg")],sp);var ui=class{constructor(){}};ui.GREEN="#2ac84b",ui.YELLOW="#e8c833",ui.RED="#e04343";var lp=class extends Laya.Box{};var{regClass:Nx}=Laya,cp=class extends lp{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.nodeItem=e,this.onGameDelay(this.nodeItem.dT)}onGameDelay(e){var i=U.intance.getGeneralValueById(6),n=i[0],r=i[1];this.tf_delay.text=e+"ms",e>r?(this.img_delay.skin="res/common/comm/img_com_xinhao3.png",this.tf_delay.color=ui.RED):e>n?(this.img_delay.skin="res/common/comm/img_com_xinhao2.png",this.tf_delay.color=ui.YELLOW):(this.img_delay.skin="res/common/comm/img_com_xinhao1.png",this.tf_delay.color=ui.GREEN)}startTest(){Laya.timer.loop(3e3,this,this.onTestUrl)}onTestUrl(){this.nodeItem&&this.nodeItem.testUrl(),this.onGameDelay(this.nodeItem.dT)}onDisable(){Laya.timer.clearAll(this)}};cp=p([Nx("hhMSfaGLSJmVqJcF08xLgA")],cp);var up=class extends Laya.Box{};var{regClass:Ox}=Laya,pp=class extends up{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&(this.addEvent(),this.img_icon.skin=k.instance.getNodeIcon(i.area),this.tf_name.text=d.instance.getLanguage(i.name),this.nodeDelaySign.dataSource=i)}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};pp=p([Ox("3WEF588kThqDCYUgf5gM6w")],pp);var mp=class extends Laya.Scene{};var{regClass:Hx}=Laya,dp=class extends mp{constructor(){super(...arguments);this.tokenIndex=0;this.tokenIndex2=0;this.withdrawText=null;this.webData=["MATCH","BSC","BSC_TESTNET"];this.tokenData=[];this.currTab=0;this.type=1;this.coinType=-1}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP}onOpened(e){this.list_champ.array=[],e&&e.length>1&&(this.type=e[0],this.coinType=e[1],this.onClickTab(this.type)),this.withdrawText=this.withdrawCode.prompt}onEnable(){g.intance.on(y.EVENT_WELFARE_CLAIM,this,this.onClaimWelfare),this.btn_champDetail.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_champDetail]),this.btn_champRecord.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_champRecord]),this.btn_withdrawRecord.label=d.instance.getUILang("ExtractionRecords"),this.tf_serviceRate1.text=d.instance.getUILang("service rate"),this.initTokenWebData(),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_4.on(Laya.Event.CLICK,this,this.onClickTab,[4]),this.btn_5.on(Laya.Event.CLICK,this,this.onClickTab,[5]),this.rechargeCode.on(Laya.Event.INPUT,this,this.onRechargeCodeInput),this.rechargeCode.on(Laya.Event.BLUR,this,this.testRechargeCodeInput),this.withdrawCode.on(Laya.Event.INPUT,this,this.onRechargewithdrawCodeInput),this.withdrawCode.on(Laya.Event.BLUR,this,this.testInputData),g.intance.on(y.CHANGE_ASSET_CHAIN,this,this.changeAssetChain),this.btn_hireRecord.on(Laya.Event.CLICK,this,this.onHireRecord),this.btn_proxyRecord.on(Laya.Event.CLICK,this,this.onProxyRecord),this.btn_claimHire.on(Laya.Event.CLICK,this,this.onClaimHire),this.btn_claimProxy.on(Laya.Event.CLICK,this,this.onClaimProxy),this.list_web.renderHandler=Laya.Handler.create(this,this.onWebItemRender,null,!1),this.list_token.renderHandler=Laya.Handler.create(this,this.onTokenItemRender,null,!1),this.list_web2.renderHandler=Laya.Handler.create(this,this.onWebItemRender2,null,!1),this.list_token2.renderHandler=Laya.Handler.create(this,this.onTokenItemRender2,null,!1),this.box_web.on(Laya.Event.CLICK,this,this.onOpenWeb),this.box_web2.on(Laya.Event.CLICK,this,this.onOpenWeb2),this.box_token.on(Laya.Event.CLICK,this,this.onOpenToken),this.box_token2.on(Laya.Event.CLICK,this,this.onOpenToken2),this.btn_confirm.on(Laya.Event.CLICK,this,this.onbtnConfirm),this.btn_max.on(Laya.Event.CLICK,this,this.onbtnMax),this.list_web.selectHandler=new Laya.Handler(this,this.handleSelectWeb),this.list_token.selectHandler=new Laya.Handler(this,this.handleSelectToken),this.list_web2.selectHandler=new Laya.Handler(this,this.handleSelectWebWithdraw),this.list_token2.selectHandler=new Laya.Handler(this,this.handleSelectTokenWithdraw),this.tf_adress.text=q.instance.walletAddress,this.btn_withdraw.on(Laya.Event.CLICK,this,this.onBtnWithdraw),this.btn_withdrawRecord.on(Laya.Event.CLICK,this,this.onBtnWithdrawRecord),g.intance.on(y.REFRESH_ALL_WITHDRAW_DATA,this,this.refreshWithdrawData),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.box_all.visible=!1,this.initDataView()}setTab(e){for(let i=1;i<7;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b",this["box_"+i]&&(this["box_"+i].visible=!0)):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe",this["box_"+i]&&(this["box_"+i].visible=!1))}async initDataView(){this.destroyed||(this.type?this.onClickTab(this.type):this.onClickTab(5),this.list_hire.visible=!1,this.list_proxy.visible=!1,this.list_reward.visible=!1,this.listHireReward.visible=!1)}async showHireData(){var e=await M.requestPost("wxgame/lease/outline",{});if(e&&e.reward){let n=Ie.processItemsArray(e.reward);e.reward.length>0?this.btn_claimHire.disabled=!1:this.btn_claimHire.disabled=!0;let r=n[0];this.list_hire.array=r,this.list_hire.selectedIndex=-1,this.list_hire.visible=!0,e.leaderCount?this.tf_hireNum.text=d.instance.getLanguage(1179,e.leaderCount):this.tf_hireNum.text=d.instance.getLanguage(1179,0);let o=n[1];var i=[];o.forEach(s=>{var l=new Fe(s.id);l.newAddCnt=s.count,i.push(l)}),this.listHireReward.array=i,this.listHireReward.selectedIndex=-1,this.listHireReward.visible=!0}}async showProxyData(){var e=await M.requestPost("wxgame/lease/outline",{});if(e&&e.childReward){let r=Ie.processItemsArray(e.childReward),o=r[0],s=r[2];e.childReward.length>0?this.btn_claimProxy.disabled=!1:this.btn_claimProxy.disabled=!0;var i=[],n=s;n.forEach(l=>{var c=new Fe(l.id);c.newAddCnt=l.count,i.push(c)}),this.list_reward.array=i,this.list_reward.visible=!0,this.list_proxy.array=o,this.list_proxy.visible=!0,this.list_proxy.selectedIndex=-1,e.childCount?this.tf_proxyNum.text=d.instance.getLanguage(1180,e.childCount):this.tf_proxyNum.text=d.instance.getLanguage(1180,0)}}async onClickTab(e){if(this.currTab=e,this.setTab(e),this.box_all.visible=!0,e==1)this.box_1.visible=!0,this.initContainer();else if(e==2)this.initContainer();else if(e==3)this.showHireData();else if(e==4)this.showProxyData();else if(e==5){var i=await M.requestPost("wxgame/welfare/outline",{});i?(this.tf_champNum.text=d.instance.getLanguage(1133)+" "+i.welfareCount,this.list_champ.array=i.welfareDtoList,!i.welfareDtoList||i.welfareDtoList.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1):N.instance.notice(d.instance.getLanguage(135))}}async handleClickBtn(e){switch(e){case this.btn_champDetail:{let i=await M.requestPost("wxgame/welfare/list",{});i.welfareDtoList?H.intance.openModule(h.ChampDetailDialog,i.welfareDtoList):N.instance.notice(d.instance.getLanguage(135))}break;case this.btn_champRecord:{let i=await M.requestPost("wxgame/welfare/takeList",{});i.welfareDtoList?H.intance.openModule(h.ChampRecordDialog,i.welfareDtoList):N.instance.notice(d.instance.getLanguage(135))}break}}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}onClaimWelfare(e){var i=this.list_champ.array;if(i instanceof Array){for(let n of i)if(n.coinType==e.coinType){n.takeValue=0;continue}this.list_champ.refresh()}}removeEvent(){g.intance.off(y.EVENT_WELFARE_CLAIM,this,this.onClaimWelfare),this.btn_1.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_2.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_3.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_4.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_5.off(Laya.Event.CLICK,this,this.onClickTab),this.rechargeCode.off(Laya.Event.INPUT,this,this.onRechargeCodeInput),g.intance.off(y.CHANGE_ASSET_CHAIN,this,this.changeAssetChain),this.btn_hireRecord.off(Laya.Event.CLICK,this,this.onHireRecord),this.btn_proxyRecord.off(Laya.Event.CLICK,this,this.onProxyRecord),this.btn_claimHire.off(Laya.Event.CLICK,this,this.onClaimHire),this.btn_claimProxy.off(Laya.Event.CLICK,this,this.onClaimProxy),this.box_web.off(Laya.Event.CLICK,this,this.onOpenWeb),this.box_token.off(Laya.Event.CLICK,this,this.onOpenToken),this.box_token2.off(Laya.Event.CLICK,this,this.onOpenToken2),this.btn_confirm.off(Laya.Event.CLICK,this,this.onbtnConfirm),this.btn_max.off(Laya.Event.CLICK,this,this.onbtnMax)}onOpenWeb(){this.img_web_pad.visible==!1&&(this.img_web_pad.visible=!0,Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onOpenWeb2(){this.img_web_pad2.visible==!1&&(this.img_web_pad2.visible=!0,Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onOpenToken(){this.img_token_pad.visible==!1&&(this.img_token_pad.visible=!0,Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onOpenToken2(){this.img_token_pad2.visible==!1&&(this.img_token_pad2.visible=!0,Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onWebItemRender(e,i){e&&e.onChange&&e.onChange(this.list_web.selectedIndex==i)}onWebItemRender2(e,i){e&&e.onChange&&e.onChange(this.list_web2.selectedIndex==i)}onTokenItemRender(e,i){e&&e.onChange&&e.onChange(this.list_token.selectedIndex==i)}onTokenItemRender2(e,i){e&&e.onChange&&e.onChange(this.list_token2.selectedIndex==i)}async createWebList(){this.currTab==1?(this.list_web.array=this.webData,this.list_web.visible=!0):(this.list_web2.array=this.webData,this.list_web2.visible=!0),await this.initNetComboBox()}async createTokenList(){await this.initTokenData(),this.tokenIndex=0,this.tokenData[this.tokenIndex]&&(this.currTab==1?(this.list_token.array=this.tokenData,this.list_token.visible=!0,this.list_token.selectedIndex=0,this.tf_token.text=`${this.tokenData[0]}`):(this.list_token2.array=this.tokenData,this.list_token2.visible=!0,this.list_token2.selectedIndex=0,this.tf_token2.text=`${this.tokenData[0]}`))}onHideList(){this.img_web_pad.visible=!1,this.img_token_pad.visible=!1,this.img_web_pad2.visible=!1,this.img_token_pad2.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideList)}async initContainer(){await this.createWebList(),this.createTokenList(),this.currTab==1&&this.handleSelectWeb(1)}async getRestCoin(e){try{let i=await q.instance.getBalance2(e),n=Oi(i);this.tf_rest.text=`${Ie.truncateToTwoDecimalPlaces(Number(n))}`}catch(i){if(i instanceof Error){let n=i.message}this.tf_rest.text="0"}}async initNetComboBox(){let e=await q.instance.walletClient.getChainId();if(e){let i=q.instance.getChainNameByID(e),n=this.getListIndexByName(i);this.currTab==1?this.list_web.selectedIndex=n:this.list_web2.selectedIndex=n}this.currTab==2&&this.handleSelectTokenWithdraw(0)}getListIndexByName(e){return this.list_web.array.findIndex(i=>i==e)}async switchChain(e=!0){let i;this.currTab==1?i=li[this.tf_web.text]:i=li[this.tf_web2.text];try{let r=await q.instance.walletClient.getChainId();if(i!==r||e){var n=await q.instance.switchChain(i);if(!n){console.log("切换失败，请手动切换"),await this.addChain(),await this.initNetComboBox();return}}await this.createTokenList(),r=await q.instance.walletClient.getChainId(),console.log(this.tokenData),await this.initTokenData();let o=ke[`TYPE_${this.tokenData[0]}`]||ke.TYPE_TOX,s=U.intance.getCurrencyAddress(o);s&&this.getRestCoin(s),this.initNetComboBox()}catch(r){r instanceof Error&&r.message.includes("Unrecognized chain ID")&&await this.addChain(),this.initNetComboBox()}}async addChain(){let e=li[this.tf_web.text];this.currTab==1?e=li[this.tf_web.text]:e=li[this.tf_web2.text],await q.instance.addChain(e);let i=await q.instance.walletClient.getChainId();this.switchChain(i)}async handleSelectWeb(e){if(e!=-1){let i=this.list_web.selectedItem;this.tf_web.text=`${i}`,this.tokenIndex=0,this.switchChain(!0)}}async handleSelectWebWithdraw(e){if(e!=-1){let i=this.list_web2.selectedItem;this.tf_web2.text=`${i}`,this.tokenIndex=0,this.switchChain(!0)}}handleSelectToken(e){e!=-1&&(this.tf_token.text=`${this.tokenData[e]}`,this.tokenIndex=e,this.refreshToken())}async refreshWithdrawData(){this.handleSelectTokenWithdraw(this.list_token2.selectedIndex)}async handleSelectTokenWithdraw(e){if(e!=-1){console.log(this.tokenData),this.tf_token2.text=`${this.tokenData[e]}`;let n=0,r=Ie.getCurrencyIdByName(this.tf_token2.text),o=await q.instance.walletClient.getChainId();n=L.instance.getConsumeValue(r),this.tf_appAmount.text=`${Ie.truncateToTwoDecimalPlaces(n)}`;let s=U.intance.getACoin(o,r);s&&(this.tf_servicerate.text=`${s.Commission/100}%`);var i=await M.requestPost("wxgame/payOrder/query",{chainId:o});if(console.log("wxgame/payOrder/query",i),i&&i.selfData){let l=this.searchRestMoney(i.selfData,r);this.tf_canAmount.text=`${Ie.truncateToTwoDecimalPlaces(l)}`}}}onRechargeCodeInput(){let e=Number(this.rechargeCode.text),i=Ie.isNumber(this.rechargeCode.text);(e<0||!i)&&(this.rechargeCode.text="0")}testRechargeCodeInput(){let e=Number(this.rechargeCode.text);this.rechargeCode.text=`${Ie.formatNumber(e)}`}async onbtnConfirm(){this.testRechargeCodeInput();let e=Number(this.tf_rest.text),i=Number(this.rechargeCode.text),n=await q.instance.walletClient.getChainId();if(!i){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(33),D.YES);return}if(e<i){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(34),D.YES);return}he.instance.showLoadingByInfo();let r=U.intance.getNetAddress(n),o=ke[`TYPE_${this.tf_token.text}`]||ke.TYPE_TOX,s=U.intance.getCurrencyAddress(o);s&&this.getRestCoin(s),await an.instance.rechargeToken(i,s,r)&&(this.getRestCoin(s),L.instance.rechargeEnd=!0)}async refreshToken(){try{let e=ke[`TYPE_${this.tf_token.text}`]||ke.TYPE_TOX,i=U.intance.getCurrencyAddress(e);i&&this.getRestCoin(i);let n=await q.instance.getBalance2(i),r=Oi(n);this.tf_rest.text!==r&&(this.tf_rest.text=`${Ie.roundToTwoDecimals(Number(r))}`,Laya.timer.clear(this,this.refreshToken))}catch{this.tf_rest.text="0"}}refreshWithdrawToken(){}onbtnMax(){let e=Number(this.tf_rest.text);this.rechargeCode.text=`${e}`}initTokenWebData(){this.webData=[];var e=U.intance.getGeneralValueById(7);if(e){for(let i=0;i<e.length;i++)switch(e[i]){case 1:this.webData.push("MATCH");break;case 2:this.webData.push("BSC");break}Q.vType!==2&&this.webData.push("BSC_TESTNET")}this.initTokenData()}changeAssetChain(){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(36),D.YES,Laya.Handler.create(this,()=>{this.switchChain(!0)}))}async initTokenData(){let e=await q.instance.walletClient.getChainId();this.tokenData=[],e==56||e==97?this.tokenData=["BTOX"]:this.tokenData=["TOX"]}onHireRecord(){H.intance.openModule(h.HireDetailDialog)}onProxyRecord(){H.intance.openModule(h.ProxyDetailDialog)}async onClaimHire(){var e=await M.requestPost("wxgame/lease/take",{});if(e&&e.reward.length>0){let i=e.reward,n=[];i.forEach(r=>{var o=new Ki;o.id=r.id,o.count=r.count,n.push(o)}),H.intance.openModule(h.RewardGetDialog,n)}this.showHireData()}async onClaimProxy(){var e=await M.requestPost("wxgame/lease/childTake",{});if(e&&e.reward&&e.reward.length>0){let i=e.reward;H.intance.openModule(h.RewardGetDialog,i)}this.showProxyData()}onRechargewithdrawCodeInput(){let e=Number(this.withdrawCode.text),i=Ie.isNumber(this.withdrawCode.text);(e<0||!i)&&this.withdrawCode.text!==this.withdrawText&&(this.withdrawCode.text="0")}async testInputData(){let e=Number(this.withdrawCode.text),i=Ie.getCurrencyIdByName(this.tf_token2.text),n=await q.instance.walletClient.getChainId(),r=U.intance.getACoin(n,i);if(!r)return;let o=Number(this.tf_appAmount.text);e>o?N.instance.notice(me.instance.get(111)):e>r.maxAmount?N.instance.notice(d.instance.getLanguage(1211,r.maxAmount)):e<r.minAmount&&N.instance.notice(d.instance.getLanguage(1212,r.minAmount));let s=r.Commission,l=e*(1-s/1e4);i==3001&&n==56?this.tf_arrive.text=`${l.toFixed(2).replace(/0+$/,"")}`:this.tf_arrive.text=`${l.toFixed(8).replace(/0+$/,"")}`}async onBtnWithdraw(){let e=Number(this.tf_appAmount.text),i=await q.instance.walletClient.getChainId(),n=Number(this.withdrawCode.text),r=ke[`TYPE_${this.tf_token2.text}`]||ke.TYPE_TOX,o=U.intance.getACoin(i,r),s=o.Commission,l=n*s/1e4;if(!o)return;if(n>e){N.instance.notice(me.instance.get(111));return}if(n>o.maxAmount){N.instance.notice(d.instance.getLanguage(1211,o.maxAmount));return}else if(n<o.minAmount){N.instance.notice(d.instance.getLanguage(1212,o.minAmount));return}let c=await q.instance.getAuthStatus();if(Q.vType==2&&!c&&i==9001){N.instance.notice(me.instance.get(113));return}let u=Number(this.tf_arrive.text),m=n*(1-s/1e4);r==3001&&i==56?u=Number(parseFloat(m.toFixed(2))):u=m;let v=U.intance.getCurrencyAddress(r),w=await M.requestPost("wxgame/payOrder/create",{chainId:i,coinType:r,payMoney:n,fee:l,arriveMoney:u,token:v});w&&w.errorCode==0&&ge.NoHeroError("Pending Review")}onBtnWithdrawRecord(){H.intance.openModule(h.WithDrawRecordDialog)}searchRestMoney(e,i){for(let n=0;n<e.length;n++)if(e[n][0]===i)return e[n][1];return 0}};dp=p([Hx("lWg_-biNSI2538WxA3KVVw")],dp);var hp=class extends Laya.Dialog{};var{regClass:Ux}=Laya,fp=class extends hp{constructor(){super()}onEnable(){this.list_champ.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1)}setOpenData(t){t&&t instanceof Array&&(this.list_champ.array=t,!t||t.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1)}onItemRender(t,e){t.onSetIndex(e)}onDisable(){}};fp=p([Ux("mXj9kkXUQny2iuvlC1REmA")],fp);var lt=class lt{constructor(){}static formatMM(t){if(t<=0)return"00:000";let e,i;e=t/1e3,i=t%1e3;let n="";return e<=9&&(n+="0"),n+=Math.floor(e),n+=":",i<=9?n+="00":i<=99&&(n+="0"),n+=i,n}static format(t,e=":",i=!0){if(t<=0)return i?"00:00:00":"00:00";let n,r,o,s,l;s=t/3600,o=t%3600,l=o/60,n=o%60;let c="";return i&&(s<=9&&(c+="0"),c+=Math.floor(s)+e),l<=9&&(c+="0"),c+=Math.floor(l)+e,Math.ceil(n)<=9&&(c+="0"),c+=Math.ceil(n),c}static formatWithDay(t,e=":"){if(t<=0)return"00:00";let i,n,r,o,s;n=t/86400,r=t%86400,o=r/3600,r=r%3600,s=r/60,i=r%60;let l="";if(n>=1){let c=n>1?2005:2003;l=d.instance.getLanguage(c,Math.floor(n))+" ",o<=9&&(l+="0"),i%2!=0&&(e=ge.getColorText(e,"#412b20")),l+=Math.floor(o)+e,s<=9&&(l+="0"),l+=Math.floor(s)}else o<=9&&(l+="0"),l=Math.floor(o)+e,s<=9&&(l+="0"),l+=Math.floor(s)+e,Math.ceil(i)<=9&&(l+="0"),l+=Math.ceil(i);return l}static getTimeArray(t,e="HH-MM-SS"){if(t=Math.max(0,t),e.indexOf("-")==-1)return[];let i=[],n=e.split("-");for(let r of n)r=="DD"?i.push(Math.floor(t/lt.OneDaySceond)):r=="HH"?i.push(Math.floor(t%lt.OneDaySceond/lt.OneHourSceond)):r=="MM"?i.push(Math.floor(t%lt.OneHourSceond/lt.OneMiniuteSecond)):r=="SS"&&i.push(t%lt.OneMiniuteSecond);return i}static getServerDate(t){return new Date(t)}static formatTime(t){return(parseInt(t/60+"")+100).toString().substring(1)+":"+(parseInt(t%60+"")+100).toString().substring(1)}static formatTime000000(t){return t?(parseInt(t/3600+"")+100).toString().substring(1)+":"+(parseInt(t%3600/60+"")+100).toString().substring(1)+":"+(parseInt(t%60+"")+100).toString().substring(1):"00:00:00"}static formatTimeStamp(t,e="YY-MT-DD HH:MM:SS"){let i=lt.getServerDate(t),n="";if(e.indexOf("YY")>=0&&(n=i.getFullYear()+"",e=e.replace("YY",n)),e.indexOf("MT")>=0){let r=i.getMonth()+1;r>9?n=r+"":n="0"+r,e=e.replace("MT",n)}if(e.indexOf("DD")>=0){let r=i.getDate();r>9?n=r+"":n="0"+r,e=e.replace("DD",n)}if(e.indexOf("HH")>=0){let r=i.getHours();r>9?n=r+"":n="0"+r,e=e.replace("HH",n)}if(e.indexOf("MM")>=0){let r=i.getMinutes();r>9?n=r+"":n="0"+r,e=e.replace("MM",n)}if(e.indexOf("SS")>=0){let r=i.getSeconds();r>9?n=r+"":n="0"+r,e=e.replace("SS",n)}return e}static formatTimeStamps(t,e="YY-MT-DD HH:MM:SS"){let i=lt.getServerDate(t),n=e;return n=lt.parseTimeDetail(i,n,"YY",!1),n=lt.parseTimeDetail(i,n,"MT",!1),n=lt.parseTimeDetail(i,n,"DD",!1),n=lt.parseTimeDetail(i,n,"HH",!0),n=lt.parseTimeDetail(i,n,"MM",!0),n=lt.parseTimeDetail(i,n,"SS",!0),n}static parseTimeDetail(t,e,i,n){if(e.indexOf(i)>=0){let r,o;i=="YY"?o=t.getFullYear():i=="MT"?o=t.getMonth()+1:i=="DD"?o=t.getDate():i=="HH"?o=t.getHours():i=="MM"?o=t.getMinutes():i=="SS"&&(o=t.getSeconds()),o>9||!n?r=o.toString():r="0"+o,e=e.replace(i,r)}return e}static getServerTimeStr(){return lt.formatTimeStamp(Laya.timer.currTimer)}static getTimeArr(){return lt.getServerTimeStr().split("/")}static get getDay(){let e=lt.getServerTimeStr().split("/");return parseInt(e[2])}static parseSheetTime(t){let e="";if(t){let i=t.length;for(let n=0;n<i;n++){let r="";t[n]<10?r="0"+t[n]:r=t[n],n!==i-1&&(r=r+":"),e+=r}}return e}static dateStringToTimestamp(t,e){let[i,n,r]=t.split("-").map(Number),o=Number(e),s=new Date(i,n-1,r,o).getTime();return Number(s)}static getCurrentDayTimestamp(){let t=new Date,e=t.getHours();return t.setHours(e,0,0,0),t.getTime()}static getYearMonthDat(t){let e=new Date(t),i=e.getFullYear(),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):""+(e.getMonth()+1),r=e.getDate()<10?"0"+e.getDate():""+e.getDate();return`${i}-${n}-${r}`}static formatDayAndTime(t){let e=new Date(t),i=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return{date:`${i}-${n}-${r}`,time:`${o}:${s}`}}static formatTimeAgo(t){return t<60*1e3?d.instance.getLanguage(1188):t<60*60*1e3?d.instance.getLanguage(2004,Math.floor(t/6e4)):t<24*60*60*1e3?d.instance.getLanguage(2003,Math.floor(t/36e5)):d.instance.getLanguage(2002,Math.floor(t/(24*60*60*1e3)))}static colorTimeAgo(t){return t<60*1e3?"#43ef74":"#b4b4b4"}static formatTimeExpires(t){return t<60*1e3?d.instance.getLanguage(1214,t):t<60*60*1e3?d.instance.getLanguage(1215,Math.floor(t/6e4)):t<24*60*60*1e3?d.instance.getLanguage(1216,Math.floor(t/36e5)):d.instance.getLanguage(1217,Math.floor(t/(24*60*60*1e3)))}};lt.OneDaySceond=24*3600,lt.OneHourSceond=3600,lt.OneMiniuteSecond=60;var Ee=lt;var yp=class extends Laya.Box{};var{regClass:Vx}=Laya,bp=class extends yp{set dataSource(e){super.dataSource=e,this.welfareDto=e,this.welfareDto&&this.setCurrentOutPut()}onSetIndex(e){this.tf_id.text=e+1+""}setCurrentOutPut(){this.tf_createDate.text=Ee.formatTimeStamp(this.welfareDto.createDate,"YY-MT-DD");let e=this.welfareDto.coinType;this.img_coinType.skin=k.instance.getMoneyIcon(e),this.tf_type.text=d.instance.getUILang("Staking_Type_"+this.welfareDto.type),this.tf_coinValue.text=Se.formatNumberStr(this.welfareDto.coinValue,8),this.tf_remainValue.text=Se.formatNumberStr(this.welfareDto.remainValue,8),this.tf_remainDays.text=this.welfareDto.remainDays+""}};bp=p([Vx("b0cMZEy9S5q2q_vqsjWzDA")],bp);var gp=class extends Laya.Box{};var{regClass:Fx}=Laya,vp=class extends gp{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.btn_claim.on(Laya.Event.CLICK,this,this.onClaim),this.isAddEvent=!0)}async onClaim(){if(this.welfareOutlineDto.takeValue>0){let i=await M.requestPost("wxgame/welfare/take",{coinType:this.welfareOutlineDto.coinType});if(i){var e=new Ki;e.id=i.coinType,e.count=i.coinValue,H.intance.openModule(h.RewardGetDialog,[e]),g.intance.event(y.EVENT_WELFARE_CLAIM,i)}else N.instance.notice(d.instance.getLanguage(135))}}set dataSource(e){super.dataSource=e,this.welfareOutlineDto=e,this.welfareOutlineDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.welfareOutlineDto.coinType;this.img_coinType.skin=k.instance.getItemIcon(e),this.tf_allValue.text=Se.formatNumberStr(this.welfareOutlineDto.allValue,8),this.tf_todayRelease.text=Se.formatNumberStr(this.welfareOutlineDto.todayRelease,8),this.tf_takeValue.text=Se.formatNumberStr(this.welfareOutlineDto.takeValue,8),this.btn_claim.disabled=this.welfareOutlineDto.takeValue<=0}};vp=p([Fx("XTGeF2FhTp2j7VZIhqRAtg")],vp);var Lp=class extends Laya.Dialog{};var{regClass:zx}=Laya,_p=class extends Lp{constructor(){super()}onEnable(){this.list_champ.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1)}setOpenData(t){t&&t instanceof Array&&(this.list_champ.array=t,!t||t.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1)}onItemRender(t,e){t.onSetIndex(e)}onDisable(){}};_p=p([zx("RzcjHDjIS62Ejw744kaKKw")],_p);var wp=class extends Laya.Box{};var{regClass:Gx}=Laya,xp=class extends wp{set dataSource(e){super.dataSource=e,this.welfareTakeDto=e,this.welfareTakeDto&&this.setCurrentOutPut()}onSetIndex(e){this.tf_id.text=e+1+""}setCurrentOutPut(){this.tf_takeTime.text=Ee.formatTimeStamp(this.welfareTakeDto.takeTime,"YY-MT-DD");var e=this.welfareTakeDto.reward,i=[];e&&e.forEach(n=>{var r=new Fe(n.id);r.newAddCnt=n.count,i.push(r)}),this.list_reward.array=i}};xp=p([Gx("0TASbeEtRlmozr-j6sElTw")],xp);var Ip=class extends Laya.Dialog{};var{regClass:jx}=Laya,Ep=class extends Ip{constructor(){super()}onEnable(){this.setOpenData(),this.list_sum.visible=!1,this.list_sumProp.visible=!1,this.list_champ.visible=!1}async setOpenData(){var t=await M.requestPost("wxgame/lease/takeList",{});if(t){let i=t.list;i=Ie.addIndexToObjects(i),this.list_champ.array=i,this.list_champ.visible=!0;let n=Ie.sumItemCount(i),r=Ie.processItemsArray(n,!1),o=r[0],s=r[1];this.list_sum.array=o,this.list_sum.visible=!0,o.length>3?this.list_sum.y=506:this.list_sum.y=533;var e=[];s.forEach(l=>{var c=new Fe(l.id);c.newAddCnt=l.count,e.push(c)}),this.list_sumProp.array=e,this.list_sumProp.visible=!0}}onItemRender(t,e){}onDisable(){}};Ep=p([jx("ZG7XYFvMTD-oZPNAmJhfIQ")],Ep);var Tp=class extends Laya.Box{};var{regClass:qx}=Laya,Sp=class extends Tp{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,console.log(e),this.itemDto=e,this.itemDto&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.itemDto.id;this.img_coinType.skin=k.instance.getItemIcon(e),this.tf_takeValue.text=Se.formatNumberStr(this.itemDto.count,8)}};Sp=p([qx("S4XctoHfRm66A2jjw3rSsQ")],Sp);var Cp=class extends Laya.Box{};var{regClass:Wx}=Laya,kp=class extends Cp{constructor(){super();this.isAddEvent=!1}addEvent(){}set dataSource(e){super.dataSource=e,this.pledgeData=e,this.pledgeData&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.pledgeData.reward,i=Ie.processItemsArray(e,!1),n=i[0],r=i[1];this.list_champ.array=n,n.length>3?this.list_champ.y=14:this.list_champ.y=40,this.tf_id.text=`${this.pledgeData.index+1}`;var o=[];r.forEach(s=>{var l=new Fe(s.id);l.newAddCnt=s.count,o.push(l)}),this.listHireReward.array=o,this.tf_days.text=Ee.getYearMonthDat(this.pledgeData.takeTime)}};kp=p([Wx("_mG5oDuaQY6l5yGUFmpG4w")],kp);var Ap=class extends Laya.Box{};var{regClass:Kx}=Laya,Dp=class extends Ap{constructor(){super();this.isAddEvent=!1}addEvent(){}set dataSource(e){super.dataSource=e,this.pledgeData=e,e&&(this.addEvent(),this.setCurrentOutPut(e))}async setCurrentOutPut(e){this.img_coinType.skin=k.instance.getItemIcon(e.id),this.tf_coinValue.text=Se.formatNumberStr(e.count,8)}};Dp=p([Kx("5t1LQunTRFOali6ENPwdqQ")],Dp);var Mp=class extends Laya.Dialog{};var{regClass:Yx}=Laya,Bp=class extends Mp{constructor(){super()}onEnable(){this.setOpenData(),this.list_sum.visible=!1,this.list_sumProp.visible=!1,this.list_champ.visible=!1}async setOpenData(){var t=await M.requestPost("wxgame/lease/childTakeList",{});if(t){let i=t.list;i=Ie.addIndexToObjects(i),this.list_champ.array=i,this.list_champ.visible=!0;let n=Ie.sumItemCount(i),r=Ie.processItemsArray(n,!1),o=r[0],s=r[1];this.list_sum.array=o,this.list_sum.visible=!0,o.length>3?this.list_sum.y=506:this.list_sum.y=533;var e=[];s.forEach(l=>{var c=new Fe(l.id);c.newAddCnt=l.count,e.push(c)}),this.list_sumProp.array=e}}onItemRender(t,e){}onDisable(){}};Bp=p([Yx("hbicTwT0TxSxlRep4P48Tw")],Bp);var Pp=class extends Laya.Dialog{};var{regClass:$x}=Laya,Rp=class extends Pp{constructor(){super()}onEnable(){this.list_champ.visible=!1,this.setOpenData()}async setOpenData(){var t=await M.requestPost("wxgame/payOrder/list",{});if(t){let e=t.orderItems;this.list_champ.array=e,this.list_champ.visible=!0}!t.orderItems||t.orderItems.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1}onDisable(){}};Rp=p([$x("y0xiZs-qSDWRAXN_oE10yg")],Rp);var Np=class extends Laya.Box{};var{regClass:Xx}=Laya,Op=class extends Np{constructor(){super()}addEvent(){}set dataSource(t){if(super.dataSource=t,!t){this.visible=!1;return}console.log(t),this.setData(t),this.addEvent()}setData(t){let e=Ee.formatDayAndTime(t.createTime);switch(this.tf_day.text=e.date,this.tf_minute.text=e.time,this.img_coinType.skin=k.instance.getMoneyIcon(t.coinType),this.tf_amounte.text=`${t.payMoney}`,this.tf_serviceRate.text=`${t.fee.toFixed(8).replace(/0+$/,"")}`,this.tf_arrive.text=`${t.arriveMoney.toFixed(8).replace(/0+$/,"")}`,this.tf_network.text=`${Ie.getKeyByValue(li,t.matchId)}`,t.status){case 0:this.tf_status.text="Pending review",this.tf_status.color="#4be063";break;case 1:this.tf_status.text="Approved",this.tf_status.color="#4be063";break;case 2:this.tf_status.text="Not passed",this.tf_status.color="#cd4a4a";break;case 3:this.tf_status.text="Uploading",this.tf_status.color="#ffffff";break;case 4:this.tf_status.text="Upload Failed",this.tf_status.color="#cd4a4a";break;case 5:var i=d.instance.getUILang("successfully");this.tf_status.text=i,this.tf_status.color="#4be063";break;case 6:this.tf_status.text="Withdraw success",this.tf_status.color="#4be063";break}}};Op=p([Xx("tbS8gPlOTWuMdXb9g8wZAg")],Op);var Hp=class extends Laya.Dialog{};var{regClass:Qx}=Laya,Up=class extends Hp{constructor(){super();this.destroyDoCancel=!1;this.canClose=!0}onEnable(){this.on(Laya.Event.CLICK,this,this.onClickEvent)}onClickEvent(e){let i=e.target;i.name=="okBtn"?(this._okHandler&&this._okHandler.runWith(null),this.close()):i.name=="cancleBtn"&&(this.destroyDoCancel=!1,this._cancelHandler&&this._cancelHandler.runWith(null),this.close())}setOpenData(e){e&&(this._okHandler=e.okHandler,this._cancelHandler=e.cancelHandler,this.destroyDoCancel=e.destroyDoCancel,e.flag<0?(this.cancleBtn.visible=!1,this.okBtn.visible=!1,this.canClose=!1):e.flag&D.YES&&!(e.flag&D.NO)?(this.okBtn.x=this.width-this.okBtn.width>>1,this.cancleBtn.visible=!1,this.okBtn.label="Sure"):e.flag&D.NO&&!(e.flag&D.YES)?this.okBtn.visible=!1:e.flag&D.YES&&e.flag&D.NO,e.data&&this.alertDesc&&(e.data instanceof Array?(this.alertTitle.text=e.data[0],this.alertDesc.text=e.data[1]):this.alertDesc.text=e.data),e.initHandler&&e.initHandler.runWith(this))}onDisable(){this.destroyDoCancel&&this._cancelHandler&&this._cancelHandler.run(),this._okHandler=null,this._cancelHandler=null}close(e){this.canClose&&super.close(e)}};Up=p([Qx("8G0DBvD7T_2CVupdfQXrBw")],Up);var Vp=class extends Laya.Dialog{};var{regClass:Zx}=Laya,Fp=class extends Vp{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem;L.instance.headId=i.id,this.playerIcon.headSkin=L.instance.headId}}createHeadList(){let e=U.intance.m_dicHead;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,n=0;this.playerIcon.headSkin=L.instance.headId;for(let r of e.values){if(r.id==L.instance.headId){i=n;break}n++}this.list_head.selectedIndex=i}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=d.instance.getUILang("Upload picture"),n=d.instance.getUILang("Select Image"),r=d.instance.getUILang("Save changes");openUploadPic(this,e,i,n,r)}async openPicEnd(e,i){if(i.length>500){let n=await M.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);n&&(L.instance.headId=n.imgUrl,e.playerIcon.headSkin=n.imgUrl,console.log(n.imgUrl))}}onRegister(){let e=L.instance.headId;g.intance.event(y.EVENT_MODIFY_HEAD,[e]),this.close()}};Fp=p([Zx("BmtPy79ySCyg4IuEQC4zsQ")],Fp);var zp=class extends Laya.ComboBox{};var{regClass:Jx}=Laya,Gp=class extends zp{set defaultLabel(t){this._defaultLabel=t,this._selectedIndex<0&&(this._button.label=t),this._button.labelAlign="center"}onEnable(){this.list=this.comboList}set dataSource(t){super.dataSource=t;var e=t;e&&(this.labels=e.join(","),console.log("comboData.length: "+e.length),this.list.repeatY=e.length,this.list.width=this.width,this.list.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1))}onCountryItemRender(t,e){t.onChange(this.list.selectedIndex==e)}set isOpen(t){if(console.log("isOpen: "+t),this._isOpen!=t)if(this._isOpen=t,this._button.selected=this._isOpen,this._isOpen){this._list||this._createList(),this._listChanged&&!this._isCustomList&&this.changeList(),this._itemChanged&&this.changeItem();var e=this.localToGlobal(Laya.Point.TEMP.setTo(0,0)),i=e.y+this._button.height;i=i+this._listHeight<=Laya.stage.height||e.y-this._listHeight<0?i:e.y-this._listHeight,this.img_pad.addChild(this._list),this.img_pad.pos(e.x,i),this.img_pad.visible=!0,Laya.stage.addChild(this.img_pad),this.img_pad.zOrder=1001,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.removeList),Laya.stage.on(Laya.Event.MOUSE_WHEEL,this,this._onStageMouseWheel),this._list.selectedIndex=this._selectedIndex}else this._list&&this._list.removeSelf(),this.img_pad&&this.img_pad.removeSelf()}};Gp=p([Jx("AqEOSlrnRkmI9RUPCJUVqQ")],Gp);var jp=class extends Laya.List{};var{regClass:eI}=Laya,qp=class extends jp{};qp=p([eI("7DDHp602Rs6dL3bjAu4ArA")],qp);var Wp=class extends Laya.Box{};var{regClass:tI}=Laya,Kp=class extends Wp{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&i.label&&(this.addEvent(),this.tf_name.text=i.label)}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};Kp=p([tI("nREGzTKFSX6LuiRnM5nPXA")],Kp);var Yp=class extends Laya.Box{};var{regClass:iI}=Laya,$p=class extends Yp{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&(this.addEvent(),this.img_icon.skin=k.instance.getCountryIcon(i.id),this.tf_name.text=d.instance.getLanguage(i.name))}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};$p=p([iI("LJ8PUf7kRCGUr4eT8Mhy3g")],$p);var Xp=class extends Laya.Dialog{};var ro=class extends Laya.Event{constructor(){super()}};ro.INIT_CREATELOGIN_EVENT="CreateLoginEvent:INIT_CREATELOGIN_EVENT";var{regClass:aI}=Laya,Qp=class extends Xp{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_PANEL;this.m_iPositionType=B.CENTER}onEnable(){g.intance.on(ro.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),g.intance.on(y.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),g.intance.on(y.EVENT_WAIT_PLAYERINFO,this,this.onWaitPlayerInfoBack),this.btn_setting.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_setting]),this.btn_radio1.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio1]),this.btn_radio2.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio2]),this.btn_register.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_register]),this.box_change.on(Laya.Event.CLICK,this,this.onChangeHead),this.input_name.prompt=d.instance.getLanguage(31),this.selectRadio(1),this.initCountry(),this.initCreateLoginView(),xe.instance.sendCustumEvent(23)}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onCountryItemRender(e,i){e.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(e){if(console.log("handleSelectCountry: "+e),e!=-1){let i=this.list_country.selectedItem;L.instance.countryId=i.id,this.img_flag.skin=k.instance.getCountryIcon(i.id),this.tf_country.text=d.instance.getLanguage(i.name)}}createCountryList(){let e=U.intance.m_dicCountry;this.list_country.array=e.values,this.list_country.visible=!0;let i=-1,n=0;for(let r of e.values){if(r.id==L.instance.countryId){i=n;break}n++}this.list_country.selectedIndex=i}onChangeHeadBack(e,i){this.input_name.text=e,L.instance.headId=i,this.playerIcon.headSkin=i}onChangeModifyHead(e){L.instance.headId=e,this.playerIcon.headSkin=e}onChangeHead(){H.intance.openModule(h.ChangeHeadDialog)}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=d.instance.getUILang("Upload picture"),n=d.instance.getUILang("Select Image"),r=d.instance.getUILang("Save changes");openUploadPic(this,e,i,n,r)}async openPicEnd(e,i){if(i.length>500){let n=await M.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);n&&(L.instance.headId=n.imgUrl,e.playerIcon.headSkin=n.imgUrl,console.log(n.imgUrl))}}selectRadio(e){let i=e==1;this.btn_radio1.selected=i,this.btn_radio2.selected=!i}handleClickBtn(e){switch(e){case this.btn_radio1:this.selectRadio(1);break;case this.btn_radio2:this.selectRadio(2);break;case this.btn_register:this.onRegister();break;case this.btn_setting:H.intance.openModule(h.GameSettingLanguageDialog);break}}async onRegister(){let e=this.input_name.text,i=this.btn_radio1.selected?1:2;if(e=e.trim(),e==""){N.instance.notice(d.instance.getLanguage(31));return}if(L.instance.countryId==-1){N.instance.notice(d.instance.getLanguage(1048));return}let n=await q.instance.createAcccount(e,i,L.instance.headId.toString(),L.instance.countryId);this.onWaitPlayerInfoBack(n)}onWaitPlayerInfoBack(e){e&&(he.instance.hideLoading(),L.instance.playerDto=e,this.close(),g.intance.event(y.EVENT_ENTER_MAIN))}initCreateLoginView(){}onDisable(){this.removeEvent()}removeEvent(){g.intance.off(ro.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),g.intance.off(y.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),g.intance.off(y.EVENT_WAIT_PLAYERINFO,this,this.onWaitPlayerInfoBack)}};Qp=p([aI("1K2SyFxcQY-12SasSSRXyQ")],Qp);var Zp=class extends Laya.Dialog{};var{regClass:nI}=Laya,Jp=class extends Zp{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}onEnable(){Pe.instance.playSoundByName(Pe.soundName32)}onDisable(){}};Jp=p([nI("szfg-Zt_RRWZ_nHMppjUMA")],Jp);var em=class extends Laya.Box{};var{regClass:rI}=Laya,tm=class extends em{set dataSource(t){super.dataSource=t;var e=t;e&&(this.img_icon.skin="res/role/img_icon_"+e[0]+".png",this.tf_name.text=d.instance.getUILang(e[1]),this.tf_num.text=e[2])}};tm=p([rI("WJ5TDeRBSkC9yMqJ72B0Ow")],tm);var im=class extends Laya.Box{};var{regClass:oI}=Laya,am=class extends im{set dataSource(e){super.dataSource=e,this.headItem=e,this.headItem&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.headItem.id;this.playerIcon.headSkin=e}onChange(e){}};am=p([oI("AwN_JFPwQsKswm1N53Bmkg")],am);var Xi=class Xi{constructor(){}static trim(t,e=null){e||(e=[" ","\r",`
`,"	",String.fromCharCode(65279)]);var i,n,r;for(i=t,r=e.length,n=0;n<r;n++)i=Xi.getReplace(i,e[n],"");return i}static getReplace(t,e,i){if(!t)return"";var n;return n=t.replace(new RegExp(e,"g"),i),n}static isEmpty(t){return t.length<1?!0:Xi.emptyStrDic.hasOwnProperty(t)}static trimLeft(t){var e;e=0;var i;for(i=t.length;Xi.isEmpty(t.charAt(e))&&e<i;)e++;return e<i?t.substr(e):""}static trimRight(t){var e;for(e=t.length-1;Xi.isEmpty(t.charAt(e))&&e>=0;)e--;var i;return i=t.substring(0,e),e>=0?t.substring(0,e+1):""}static trimSide(t){var e;return e=Xi.trimLeft(t),e=Xi.trimRight(e),e}static shortStr(t,e){return t.length>e?t.substr(0,e)+"...":t}static shortHeroStr(t,e=10){return Xi.abbreviateString(t,e)}static abbreviateString(t,e=11){if(t.length<=e)return t;{let i=Math.floor((e-3)/2);return t.slice(0,i)+"..."+t.slice(-i)}}static caseInsensitiveSearchWithRegex(t,e){return new RegExp(e,"i").test(t)}static formatWalletAddress(t){let n="...";return t.length<=12+10?t:`${t.substring(0,12)}${n}${t.substring(t.length-10)}`}};Xi.emptyStrDic={" ":!0,"\r":!0,"\n":!0,"	":!0};var Ne=Xi;var nm=class extends Laya.Dialog{};var{regClass:sI}=Laya,rm=class extends nm{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}onEnable(){this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.btn_copy2.on(Laya.Event.CLICK,this,this.onCopy2),this.btn_changeHead.on(Laya.Event.CLICK,this,this.onChangeHead),this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.redemptionCode.on(Laya.Event.FOCUS,this,this.redemFocus),g.intance.on(y.ROLE_INFO_CHANGE,this,this.updateRoleInfo),this.updateRoleInfo()}redemFocus(){this.redemptionCode.text=""}updateRoleInfo(){let e=L.instance.playerDto;this.tf_name.text=e.name,this.img_sex.skin=e.sex==1?"res/role/img_icon_xb_1.png":"res/role/img_icon_xb_2.png",this.tf_uid.text=e.pid.toString(),this.tf_myCode.text=e.remCode,this.ally_num.text=`${e.remCount}`,this.tf_myCode.text==""?this.btn_copy2.disabled=!0:this.btn_copy2.disabled=!1,e.superRemCode?(this.btn_receive.disabled=!0,this.redemptionCode.text=`${e.superRemCode}`,this.yf_receive.text="Received"):this.yf_receive.text="Receive";var i=U.intance.m_dicCountry.get(e.country);this.img_country.skin=k.instance.getCountryIcon(e.country+""),this.tf_address.text=Ne.formatWalletAddress(q.instance.walletAddress);let n=e.icon;this.playerIcon.headSkin=n,this.onGetAttr(e.pid)}async onGetAttr(e){let i=this,n=await M.requestPost("wxgame/player/getPlayerInfo",{pid:e});n?(this.fighting_value.text=n.fightTimes,this.victory_num.text=n.winTimes,this.fail_num.text=`${n.fightTimes-n.winTimes}`,this.runAway_num.text=n.taopao):N.instance.notice(d.instance.getLanguage(135))}onChangeHead(){H.intance.openModule(h.SelectHeadDialog,!0)}async onReceive(){if(this.redemptionCode.text=="Enter the redemption code to claim equipment(unique)"||this.redemptionCode.text=="輸入兌換碼領取裝備（唯一）"||this.redemptionCode.text==""){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1123),D.YES,null);return}if(this.redemptionCode.text==this.tf_myCode.text&&this.redemptionCode.text!==""){se.instance().AlertByType(D.BASEALERTVIEW,"You cannot enter your own invitation code.",D.YES,null);return}let e=this.redemptionCode.text,i=await M.requestPost("wxgame/player/setRem",{code:e});i&&(H.intance.openModule(h.RemGetDialog),L.instance.playerDto.superRemCode=i.code,this.btn_receive.disabled=!0,this.yf_receive.text="Received",this.tf_myCode.text=i.recommendCode,L.instance.playerDto.remCode=i.recommendCode,this.tf_myCode.text==""?this.btn_copy2.disabled=!0:this.btn_copy2.disabled=!1)}onCopy(){let e=q.instance.walletAddress;doCopy(e),N.instance.notice(d.instance.getLanguage(132))}onCopy2(){let e=this.tf_myCode.text;doCopy(e),N.instance.notice(d.instance.getLanguage(132))}onDisable(){g.intance.off(y.ROLE_INFO_CHANGE,this,this.updateRoleInfo),this.redemptionCode.off(Laya.Event.FOCUS,this,this.redemFocus)}};rm=p([sI("T7g565QQR7-fZgZNjVg92A")],rm);var om=class extends Laya.Dialog{};var{regClass:lI}=Laya,sm=class extends om{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}setOpenData(e){}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.input_name.prompt=d.instance.getLanguage(31),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList(),this.initCountry()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem;L.instance.headId=i.id,this.playerIcon.headSkin=L.instance.headId}}createHeadList(){let e=U.intance.m_dicHead;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,n=0;L.instance.headId=L.instance.playerDto.icon,this.playerIcon.headSkin=L.instance.headId,this.input_name.text=L.instance.playerDto.name;for(let r of e.values){if(r.id==L.instance.headId){i=n;break}n++}this.list_head.selectedIndex=i}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onCountryItemRender(e,i){e.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(e){if(console.log("handleSelectCountry: "+e),e!=-1){let i=this.list_country.selectedItem;L.instance.countryId=i.id,this.img_flag.skin=k.instance.getCountryIcon(i.id),this.tf_country.text=d.instance.getLanguage(i.name)}}createCountryList(){let e=U.intance.m_dicCountry;this.list_country.array=e.values,this.list_country.visible=!0;let i=-1,n=0;L.instance.countryId=L.instance.playerDto.country;for(let r of e.values){if(r.id==L.instance.countryId){i=n;break}n++}this.list_country.selectedIndex=i}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=d.instance.getUILang("Upload picture"),n=d.instance.getUILang("Select Image"),r=d.instance.getUILang("Save changes");openUploadPic(this,e,i,n,r)}async openPicEnd(e,i){if(i.length>500){let n=await M.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);n&&(L.instance.headId=n.imgUrl,e.playerIcon.headSkin=n.imgUrl,e.list_head.selectedIndex=-1,console.log(n.imgUrl))}}onRegister(){let e=this.input_name.text;if(e=e.trim(),e==""){N.instance.notice(d.instance.getLanguage(31));return}L.instance.headId!=-1?this.onModify(e,L.instance.headId,L.instance.countryId):N.instance.notice(d.instance.getLanguage(134))}async onModify(e,i,n){if(e==""){N.instance.notice(d.instance.getLanguage(31));return}let r=await Zr.instance.updateProfile(e,i.toString(),n);this.destroyed||(r?(L.instance.playerDto=r,this.close(),g.intance.event(y.ROLE_INFO_CHANGE)):N.instance.notice(d.instance.getLanguage(135)))}};sm=p([lI("3CibwwHGSPG2Qkeq4rbMag")],sm);var lm=class extends Laya.Box{};var{regClass:cI}=Laya,cm=class extends lm{constructor(){super();this.friendData=null}addEvent(){this.btn_cancel.on(Laya.Event.CLICK,this,this.onClickCancel),this.btn_claim.on(Laya.Event.CLICK,this,this.onClickClaim)}set dataSource(e){super.dataSource=e,e&&(this.friendData=e,this.btn_claim.label=d.instance.getUILang("agree"),this.setData(e),this.addEvent())}setData(e){this.tf_name.text=e.name,this.img_flag.skin=k.instance.getCountryIcon(e.country),this.playerIcon.headSkin=e.icon}async onClickCancel(){let e=await M.requestPost("wxgame/friend/friendApplyHandle",{fid:this.friendData.id,agree:!1});console.log(e),e&&se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(310),D.YES,Laya.Handler.create(this,()=>{g.intance.event(y.CHANGE_FRIEND_APPLY_LIST,this.friendData.id)}))}async onClickClaim(){let e=U.intance.getGeneralValueById(11);if(L.instance.friendNum>=e){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(301),D.YES);return}let i=await M.requestPost("wxgame/friend/friendApplyHandle",{fid:this.friendData.id,agree:!0});console.log(i),i&&(se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(309),D.YES),g.intance.event(y.CHANGE_FRIEND_APPLY_LIST))}};cm=p([cI("5M3de4CbRMertZBZtmoOIQ")],cm);var um=class extends Laya.Box{};var{regClass:uI}=Laya,pm=class extends um{constructor(){super();this.friendData=null}addEvent(){this.btn_app.on(Laya.Event.CLICK,this,this.onClickApp)}async onClickApp(){let e=U.intance.getGeneralValueById(11);if(L.instance.friendNum>=e){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(301),D.YES);return}let i=await M.requestPost("wxgame/friend/addFriend",{openid:this.friendData.openid});console.log(i),i&&se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(307),D.YES,Laya.Handler.create(this,()=>{g.intance.event(y.REFRSH_APPLY_FRIEND_LIST,this.friendData.id)}))}set dataSource(e){if(super.dataSource=e,!e){this.visible=!1;return}this.btn_app.label=d.instance.getUILang("application"),console.log(e),this.friendData=e,this.setData(e),this.addEvent()}setData(e){this.tf_name.text=e.name,this.img_flag.skin=k.instance.getCountryIcon(e.country),this.playerIcon.headSkin=e.icon}};pm=p([uI("EI72MOH9RbqdGkjSCxI8Kg")],pm);var mm=class extends Laya.Box{};var{regClass:pI}=Laya,dm=class extends mm{constructor(){super();this.friendData=null}addEvent(){this.btn_remove.on(Laya.Event.CLICK,this,this.onClickRemove),this.btn_talk.on(Laya.Event.CLICK,this,this.onClickTalk)}set dataSource(e){super.dataSource=e,e&&(this.friendData=e,this.setData(e),this.addEvent())}setData(e){this.tf_name.text=e.name,this.img_flag.skin=k.instance.getCountryIcon(e.country),this.playerIcon.headSkin=e.icon,e.online?(this.tf_online.text="on line",this.tf_online.color="#43ef74"):(this.tf_online.text=Ee.formatTimeAgo(e.lastLoginTime),this.tf_online.color="#b4b4b4")}async onClickRemove(){await M.requestPost("wxgame/friend/delFriend",{fid:this.friendData.id})&&(se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(308),D.YES),g.intance.event(y.CHANGE_FRIEND_LIST,this.friendData.id))}async onClickTalk(){H.intance.openModule(h.PrivateChatDialog,this.friendData)}};dm=p([pI("hh1cVJJ6Sr2JZvqUJFzF6Q")],dm);var hm=class extends Laya.Scene{};var{regClass:mI,property:GQ}=Laya,fm=class extends hm{constructor(){super(...arguments);this.text="";this.refreshCd=0;this.friendData=null;this.recommendFriend=null;this.applyFriend=null;this.inputFriendAddress=!1}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP}onEnable(){this.list_friend.visible=!1,this.list_apply.visible=!1,this.list_add.visible=!1,this.btn_myFriend.on(Laya.Event.CLICK,this,this.onClickMy),this.btn_addFriend.on(Laya.Event.CLICK,this,this.onClickAdd),this.btn_application.on(Laya.Event.CLICK,this,this.onClickApp),this.btn_addByDress.on(Laya.Event.CLICK,this,this.onClickAddByDress),this.btn_lookup.on(Laya.Event.CLICK,this,this.onClickLookup),this.btn_refresh.on(Laya.Event.CLICK,this,this.onClickRefresh),this.tf_nickname.on(Laya.Event.FOCUS,this,this.nameFocus),g.intance.on(y.REFRSH_APPLY_FRIEND_LIST,this,this.deleApplyFriendList),g.intance.on(y.CHANGE_FRIEND_APPLY_LIST,this,this.onClickApp),g.intance.on(y.CHANGE_FRIEND_LIST,this,this.deleFriendList),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),this.close&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.onClickMy(),this.refreshRed()}setTabState(e,i,n,r){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?n:r}onClickMy(){this.box_1.visible=!0,this.box_2.visible=!1,this.box_3.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_myFriend,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_addFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_application,!1,"#143f6b","#7ff1fe"),this.setFriendData()}async setFriendData(){let e=await M.requestPost("wxgame/friend/friendList",{});if(e&&e.list){L.instance.friendNum=e.list.length,this.list_friend.array=e.list,this.list_friend.visible=!0,this.friendData=e.list;let i=this.countOnlineUsers(e.list);console.log(i);let n=U.intance.getGeneralValueById(11);this.tf_friendNum.text=`${L.instance.friendNum}/${n}`}else this.tf_friendNum.text="0/0";(!e||!e.list||e.list.length<1)&&(this.noDataBox.visible=!0),console.log(e)}async onClickAdd(){if(this.box_1.visible=!1,this.box_2.visible=!0,this.box_3.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_addFriend,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_myFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_application,!1,"#143f6b","#7ff1fe"),!this.recommendFriend||this.recommendFriend.length<=0){let e=await M.requestPost("wxgame/friend/recommend",{});e&&e.list&&(this.recommendFriend=e.list,this.list_apply.array=e.list,this.list_apply.visible=!0,this.list_apply.vScrollBarSkin="")}}async onClickAddByDress(){if(this.tf_uid.text==q.instance.walletAddress){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1162),D.YES),this.tf_uid.text="";return}let e=this.tf_uid.text;if(e.length<=0||!this.inputFriendAddress){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1298),D.YES);return}let i=U.intance.getGeneralValueById(11);if(L.instance.friendNum>=i){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(301),D.YES);return}if(this.friendData.findIndex(r=>r.openid==e.toLowerCase())>-1){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(302),D.YES);return}se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(303),D.SURE,Laya.Handler.create(this,async()=>{let r=await M.requestPost("wxgame/friend/addFriend",{openid:e});console.log(r),r&&N.instance.notice(me.instance.get(307))}))}nameFocus(){this.tf_nickname.text=""}uidFocus(){this.tf_uid.text="",this.inputFriendAddress=!0}async onClickApp(){this.box_1.visible=!1,this.box_2.visible=!1,this.box_3.visible=!0,this.noDataBox.visible=!1,this.setTabState(this.btn_addFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_myFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_application,!0,"#143f6b","#7ff1fe");let e=await M.requestPost("wxgame/friend/friendApplyList",{});e&&e.list&&(this.list_add.array=e.list,this.list_add.visible=!0,this.applyFriend=e.list,e.list.length<=0&&(this.Img_social.visible=!1)),(!e||!e.list||e.list.length<1)&&(this.noDataBox.visible=!0),console.log(e)}onDisable(){this.removeEvent()}removeEvent(){this.btn_myFriend.off(Laya.Event.CLICK,this,this.onClickMy),this.btn_addFriend.off(Laya.Event.CLICK,this,this.onClickAdd),this.btn_application.off(Laya.Event.CLICK,this,this.onClickApp),this.btn_addByDress.off(Laya.Event.CLICK,this,this.onClickAddByDress),this.btn_lookup.off(Laya.Event.CLICK,this,this.onClickLookup),this.btn_refresh.off(Laya.Event.CLICK,this,this.onClickRefresh),this.tf_nickname.off(Laya.Event.FOCUS,this,this.nameFocus),g.intance.off(y.REFRSH_APPLY_FRIEND_LIST,this,this.deleApplyFriendList),g.intance.off(y.CHANGE_FRIEND_APPLY_LIST,this,this.onClickApp),g.intance.off(y.CHANGE_FRIEND_LIST,this,this.deleFriendList),this.tf_uid.off(Laya.Event.FOCUS,this,this.uidFocus),this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene)}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}onFriendApplyChange(){this.onClickApp()}onFriendChange(){this.setFriendData()}countOnlineUsers(e){return e.filter(i=>i.online).length}async onClickLookup(){if(this.tf_nickname.text==""){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(304),D.YES);return}let e=this.tf_nickname.text,i=await M.requestPost("wxgame/friend/search",{nickName:e});i&&i.list&&(this.recommendFriend=i.list,this.list_apply.array=i.list)}deleApplyFriendList(e){let i=this.recommendFriend.findIndex(n=>n.id==e);i>-1&&this.recommendFriend.splice(i,1),this.list_apply.array=this.recommendFriend}deleFriendList(e){let i=this.friendData.findIndex(r=>r.id==e);i>-1&&this.friendData.splice(i,1),this.list_friend.array=this.friendData,L.instance.friendNum=this.friendData.length;let n=U.intance.getGeneralValueById(11);this.tf_friendNum.text=`${L.instance.friendNum}/${n}`,this.list_friend.array.length<=0&&(this.noDataBox.visible=!0)}deleAddFriendList(e){let i=this.applyFriend.findIndex(n=>n.id==e);i>-1&&this.applyFriend.splice(i,1),this.list_add.array=this.applyFriend}async onClickRefresh(){if(this.refreshCd>0){N.instance.notice(d.instance.getLanguage(1287,this.refreshCd));return}let e=await M.requestPost("wxgame/friend/recommend",{});e&&e.list&&(this.recommendFriend=e.list,this.list_apply.array=e.list),console.log(e),this.tf_nickname.text="PLEASE ENTER A NICKNAME TO FIND FRIENDS",this.tf_uid.text="Enter wallet address to add friends",this.inputFriendAddress=!1,N.instance.notice(me.instance.get(306)),this.refreshCd=5,Laya.timer.loop(1e3,this,this.RefreshCount)}RefreshCount(){this.refreshCd-=1,this.refreshCd<=0&&Laya.timer.clear(this,this.RefreshCount)}refreshRed(){this.Img_social.visible=L.instance.getRedDotById(dt.ROOM_FRIEND_APPLY)}};fm=p([mI("W8WIf5GlS3S-dEWvgrU0ow")],fm);var ym=class extends Laya.Dialog{};var{regClass:dI}=Laya,bm=class extends ym{constructor(e){super();this.friendData=null}onEnable(){this.btn_send.on(Laya.Event.CLICK,this,this.onClickSend),this.giftInput.on(Laya.Event.INPUT,this,this.onGoldInput)}setOpenData(e){e&&(console.log(e),this.friendData=e),this.playerIcon.headSkin=this.friendData.icon,this.tf_name.text=this.friendData.name,this.tf_gold.text=Se.filterNumFormat(L.instance.getConsumeValue(ke.TYPE_GOLD),0)}async onClickSend(){if(console.log(this.messageInput.text==""),this.messageInput.text.length<20){N.instance.notice(d.instance.getLanguage(1288,20));return}let e=Number(this.giftInput.text),i=Number(this.tf_gold.text);if(e>i){N.instance.notice(me.instance.get(313));return}await M.requestPost("wxgame/friend/sendMassage",{fid:this.friendData.id,content:this.messageInput.text,sendGold:e})&&se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(314),D.YES,Laya.Handler.create(this,()=>{this.close()}))}onGoldInput(){let e=Number(this.giftInput.text),i=Ie.isNumber(this.giftInput.text),n=this.giftInput.text.includes(".");(e<0||!i||n)&&(this.giftInput.text="0")}onDisable(){this.btn_send.off(Laya.Event.CLICK,this,this.onClickSend),this.giftInput.off(Laya.Event.INPUT,this,this.onGoldInput)}};bm=p([dI("MBJ6xxrTTGe8qOrAIMZfeQ")],bm);var gm=class extends Laya.Dialog{};var{regClass:hI}=Laya,ba=class extends Laya.Script{constructor(){super();this._isLeft=!1}onAwake(){}get isLeft(){return this._isLeft}set isLeft(e){this._isLeft=e,this.btn_bg=this.owner.getChildByName("btn_bg"),this.label_left=this.owner.getChildByName("label_left"),this.label_right=this.owner.getChildByName("label_right"),this.isLeft?(this.btn_bg.x=4,this.label_left.color="#213343",this.label_right.color="#52a5e0"):(this.btn_bg.x=this.owner.width-this.btn_bg.width-4,this.label_left.color="#52a5e0",this.label_right.color="#213343")}};ba=p([hI("-1MGS4JRSMOn_RKPUuuV9Q")],ba);var{regClass:fI}=Laya,vm=class extends gm{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}onEnable(){this.musicSwitchButton=this.box_music.getComponent(ba),this.soundSwitchButton=this.box_sound.getComponent(ba),this.languageSwitchButton=this.box_language.getComponent(ba),this.initContainer(),this.box_music.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_music]),this.box_sound.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_sound]),this.box_language.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_language]),this.btn_copy.clickHandler=new Laya.Handler(this,this.onClickHandler,[this.btn_copy]),this.btn_referral.on(Laya.Event.CLICK,this,this.onClickHandler,[this.btn_referral])}onClickHandler(e){switch(e){case this.box_music:this.musicSwitchButton.isLeft=!this.musicSwitchButton.isLeft,Pe.instance.switchMusic(this.musicSwitchButton.isLeft);break;case this.box_sound:this.soundSwitchButton.isLeft=!this.soundSwitchButton.isLeft,Pe.instance.switchSound(this.soundSwitchButton.isLeft);break;case this.btn_referral:H.intance.openModule(h.InviteRewardDialog);break;case this.box_language:{this.languageSwitchButton.isLeft=!this.languageSwitchButton.isLeft;let i=this.languageSwitchButton.isLeft?"zh":"en";d.instance.FGM_SetLanguage(i),xe.instance.reload()}break;case this.btn_copy:{let i=this.inviteUrl;ge.doCopy(i),N.instance.notice(d.instance.getLanguage(132))}break}}initContainer(){this.musicSwitchButton.isLeft=Pe.instance.m_bPlayMusic,this.soundSwitchButton.isLeft=Pe.instance.m_bPlayeSound,this.languageSwitchButton.isLeft=L.instance.m_strLanguage==6,this.inviteUrl=Yi.getInviteUrl(),this.label_url.text=Ne.shortStr(this.inviteUrl,50)}addEvent(){}removeEvent(){}webCopyString(e){let i=e,n=window.document.createElement("textarea");n.value=i,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let r=window.getSelection(),o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),window.document.body.appendChild(n),n.select(),n.selectionStart=0,n.selectionEnd=i.length;let s=!1;try{s=window.document.execCommand("copy")}catch(l){console.error(l)}return window.document.body.removeChild(n),o&&(r.removeAllRanges(),r.addRange(o)),s}};vm=p([fI("yJfJZzgZRluE_rgB44yTvg")],vm);var Lm=class extends Laya.Scene{};var{regClass:yI}=Laya,_m=class extends Lm{onAwake(){}onOpened(e){this.closeHandle=e[0]}onEnable(){this.btn_next.on(Laya.Event.CLICK,this,this.onBtnNext),this.btn_receive.on(Laya.Event.CLICK,this,this.onClickRec),this.tf_address.text=q.instance.walletAddress}onDisable(){this.closeHandle&&this.closeHandle.run(),this.removeEvent()}removeEvent(){}onBtnNext(){this.close()}async onClickRec(){let e=q.instance.walletAddress,i=await M.requestPost("wxgame/money/matQuery",{address:e});if(i&&i.use==1){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(122),D.YES,Laya.Handler.create(this,()=>{this.onBtnNext()}));return}try{(await M.requestPost("wxgame/money/matTake",{address:e})).errorcode==0?se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getUILang("You have applied to claim the MAT Tokens and they will be sent to your address [0X...]."),D.YES,Laya.Handler.create(this,()=>{this.onBtnNext()})):se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(122),D.YES,Laya.Handler.create(this,()=>{this.onBtnNext()}))}catch{se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(122),D.YES,Laya.Handler.create(this,()=>{this.onBtnNext()}))}}};_m=p([yI("wkgHnIZwR_-St6rzEoxYPQ")],_m);var wm=class extends Laya.Scene{};var{regClass:bI}=Laya,xm=class extends wm{constructor(){super(...arguments);this.restTime=5}onAwake(){}onOpened(e){console.log(e),this.closeHandle=e[0]}onEnable(){this.skipBox.on(Laya.Event.CLICK,this,this.onBtnSkip),L.instance.m_strLanguage==6,L.instance.m_strLanguage==6?this.img_bg.skin="res/getMat/img_open_chn.jpg":this.img_bg.skin="res/getMat/img_open_eng.jpg",console.log("langid:",L.instance.m_strLanguage),this.restTime=5,this.runTime(),this.tf_skip.text=d.instance.getUILang("Skip")}runTime(){Laya.timer.loop(1e3,this,this.countTime)}countTime(){this.restTime-=1,this.tf_restTime.text=`${this.restTime}`,this.restTime==0&&(Laya.timer.clear(this,this.countTime),this.close())}onDisable(){this.closeHandle&&this.closeHandle.run(),this.removeEvent()}removeEvent(){}async onBtnSkip(){Laya.timer.clear(this,this.countTime),this.close()}};xm=p([bI("t3HJXNipRty7KBcnDKApfA")],xm);var Im=class extends Laya.Box{};var{regClass:gI}=Laya,Em=class extends Im{set dataSource(t){super.dataSource=t;var e=t;e&&(this.img_icon.skin=k.instance.getAttrIcon(e[0]),this.tf_name.text=d.instance.getUILang(e[1]),this.tf_num.text=e[2])}};Em=p([gI("lWiDi5bCR-CNy4v3ZMd42w")],Em);var Tm=class extends Laya.Dialog{};var Ai=class{constructor(){}};Ai.UPDATE_HERO_EVENT="HeroEvent:UPDATE_HERO_EVENT",Ai.UPDATE_HERO_UPGRADE_EVENT="HeroEvent:UPDATE_HERO_UPGRADE_EVENT";var{regClass:vI}=Laya,Sm=class extends Tm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}setOpenData(e){e&&(this._vo=e)}onComplete(){}onEnable(){this.showViewByVo(this._vo),this.btn_last.on(Laya.Event.CLICK,this,this.onClickLast),this.btn_next.on(Laya.Event.CLICK,this,this.onClickNext),this.btn_upgrade.on(Laya.Event.CLICK,this,this.onClickUpgrade),this.btn_out.on(Laya.Event.CLICK,this,this.onClickOut)}onClickUpgrade(){H.intance.openModule(h.HeroUpgradeDialog,this._vo)}onClickNext(){let e=et.instance.getNextHero(this._vo);e&&(this._vo=e,this.showViewByVo(e))}onClickLast(){let e=et.instance.getLastHero(this._vo);e&&(this._vo=e,this.showViewByVo(e))}addEvent(){g.intance.on(Ai.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade),this.stage.on(Laya.Event.CLICK,this,this.hideTips);for(let e=1;e<7;e++){let i=this["equip"+e];i.on(Laya.Event.CLICK,this,this.onClickEquip),this._vo.state!==0&&(i.disabled=!0)}}hideTips(){}onClickEquip(e){}removeEvent(){g.intance.off(Ai.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade)}onHeroUpgrade(){this._vo=L.instance.m_heroData.heroVoDic.get(this._vo.pk),this._vo&&this.showViewByVo(this._vo)}updateEquip(){let e=this._vo.equipDtoList;for(let i=0;i<e.length;i++){let n=e[i];this["equip"+(i+1)].dataSource=n}}async showViewByVo(e){this.txt_name.text=e.name;let i=e.heroItem.level+"";et.instance.setStar(this,i),this.box_star.visible=!0,this.heroSk.dataSource=e;var n=[["maxHp","MaxHP",e.heroItem.maxHp],["atk","ATK",e.heroItem.atk],["def","DEF",e.heroItem.def],["mov","MOV",e.heroItem.mov],["crt","CRT",e.heroItem.crt/100+"%"],["crtRate","CrtRate",e.heroItem.crtRate/100+"%"],["immunity","Immunity",e.heroItem.immunity],["dex","Dex",(e.heroItem.dex/100).toFixed(2)+"%"],["miss","MISS",e.heroItem.miss]];this.list_attrs.array=n;var r=[];e.heroItem.skillIds.forEach(o=>{var s=U.intance.m_dicSkills.get(o);r.push(s)}),this.list_skills.array=r,this.updatePk()}async updatePk(){let e=null;this._vo.state!==0?(e=await M.requestPost("wxgame/lease/heroInfo",{heroPk:this._vo.pk}),this._vo.state==1?(this.btn_out.disabled=!0,this.btn_upgrade.disabled=!0,this.btn_out.label=d.instance.getLanguage(1037)):this._vo.state==2&&(this.btn_upgrade.disabled=!0,L.instance.playerDto.fightHeroPk==this._vo.pk?(this.box_sign.visible=!0,this.btn_out.disabled=!0,this.btn_out.label=d.instance.getLanguage(1038)):(this.box_sign.visible=!1,this.btn_out.disabled=!1,this.btn_out.label=d.instance.getLanguage(1037))),e&&e.info&&e.info.startTime&&e.info.startTime>Ee.getCurrentDayTimestamp()&&(this.btn_out.disabled=!0,this.btn_upgrade.disabled=!0)):L.instance.playerDto.fightHeroPk==this._vo.pk?(this.box_sign.visible=!0,this.btn_out.disabled=!0,this.btn_out.label=d.instance.getLanguage(1038)):(this.box_sign.visible=!1,this.btn_out.disabled=!1,this.btn_out.label=d.instance.getLanguage(1037))}async onClickOut(){if(Et.instance.inMinWaiting){N.instance.notice(d.instance.getLanguage(1187));return}let e=this,i=await M.requestPost("wxgame/hero/heroFight",{pk:this._vo.pk});i?(L.instance.playerDto.fightHeroPk=i.pk,e.updatePk(),g.intance.event(Ai.UPDATE_HERO_EVENT)):N.instance.notice(d.instance.getLanguage(135))}};Sm=p([vI("Qri7gUY9SiWsYhtvNCEOQQ")],Sm);var Cm=class extends Laya.Box{};var{regClass:LI}=Laya,km=class extends Cm{constructor(){super();this.isAddEvent=!1;this.needPop=!0}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=k.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.needPop&&this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){var e=[];L.instance.playerDto.fightHeroPk==this.heroVo.pk&&e.push(1),this.heroVo.state==2&&e.push(3),this.heroVo.state==1&&e.push(2),this.heroVo.type==1&&e.push(5),this.list_state.array=e,this.img_back.skin=k.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=k.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ne.shortHeroStr(this.heroVo.name);let n=this.heroVo.heroItem.level+"";et.instance.setStar(this,n),this.box_show.visible=!0,this.destroyed}toDetail(){this.heroVo.id&&H.intance.openModule(h.HeroDetailDialog,this.heroVo)}};km=p([LI("PfeS1F4rQCqM4vXJpBZVWQ")],km);var je=class je{constructor(){}};je.ANI_beiji="beiji",je.ANI_daiji="daiji",je.ANI_gongji="gongji",je.ANI_ti="ti",je.ANI_hua="hua",je.ANI_dang="gedang",je.ANI_dazhao="z_dazhao",je.ANI_ruchang="ruchang",je.ANI_siwang="siwang",je.ANI_xingzou="xingzou",je.ANI_chongzhuang="z_chongzhuang",je.ANI_chongzhuang2="z_chongzhuang2",je.ANI_daodi="z_daodi",je.ANI_shanbi="z_shanbi",je.ANIS=[je.ANI_daiji,je.ANI_xingzou,je.ANI_gongji,je.ANI_ti,je.ANI_hua,je.ANI_dang,je.ANI_beiji,je.ANI_siwang],je.TYPE_GONGJI=1,je.TYPE_TI=2,je.TYPE_HUA=3,je.TYPE_DANG=4,je.TYPE_FEI=5,je.TYPE_DAZHAO=6;var Xe=je;var Am=class extends Laya.Box{};var{regClass:_I}=Laya,Dm=class extends Am{constructor(){super();this.isAddEvent=!1;this.isReady=!1;this.skinIndex=0;this.spineAniIndex=0;this.skinArray=["goblin","goblingirl"]}addEvent(){this.isAddEvent||(this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.changeAni),this.sk.on(Laya.Event.READY,this,this.onSkReady))}onSkReady(){this.isReady=!0}set dataSource(e){super.dataSource=e,this.heroVo=e,this.addEvent(),this.createSpine()}createSpine(){Laya.loader.load(this.heroVo.sk,Laya.Loader.SPINE).then(e=>{this.destroyed||(this.sk.templet=e,this.sk.animationName=Xe.ANI_daiji,this.spineAniNum=Xe.ANIS.length)})}changeAni(){if(this.isReady){this.spineAniIndex++,this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=0);var e=Xe.ANIS[this.spineAniIndex];this.sk.play(e,!0,!0)}}changeSkin(){this.sk.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}onDisable(){this.sk.off(Laya.Event.READY,this,this.onSkReady)}};Dm=p([_I("kS5K53GHRWOdgfXoo6VH1A")],Dm);var Mm=class extends Laya.Box{};var{regClass:wI}=Laya,Bm=class extends Mm{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.heroVo=e,this.heroVo&&(this.img_checked.visible=this.heroVo.checked,this.heroListItem.needPop=!1,this.heroListItem.dataSource=this.heroVo,this.addEvent())}toDetail(){this.heroVo.checked=!this.heroVo.checked,g.intance.event(y.EVENT_REFRESH_HEROTRANSFER)}};Bm=p([wI("tzBcfqNYSL6KP4NjtslyHA")],Bm);var Pm=class{constructor(){this.pool_contract=null;this.rewardTokenAddress=""}stakeTokenAndReward(){return this.heroesId?[[this.heroesId,this.capacity/24]]:[]}async calcCapacity(t){for(let e of t){let i=et.instance.heroOutputRateDic.get(e.mineralLevel);e.staking_second_rewards=i.capacity*this.baseYield/24+""}return t}async earnedAll(){return this.yieldValue}async refreshVo(){let t=await M.requestPost("cybertron-sys-api/api/v1/mineral/getMineralPool",{mineralId:this.id});this.heroesId=0,this.yieldValue=0,Object.assign(this,t)}async stake(t){if(!await q.instance.checkHeroIsBuzy(t))return he.instance.showLoading(!0),await this.pool_contract.methods.stake(t,this.id).send({from:q.instance.walletAddress},(i,n)=>{if(i)return he.instance.hideLoading(),!1}),!0}async withdrawAllAndClaim(){return he.instance.showLoading(!0),await this.pool_contract.methods.withdraw(this.heroesId).send({from:q.instance.walletAddress},(t,e)=>{if(t)return he.instance.hideLoading(),!1}),await this.refreshVo(),!0}async claimAllReward(){he.instance.showLoading(!0),await M.requestPost("cybertron-sys-api/api/v1/mineral/collect",{mineralId:this.id}),await this.refreshVo(),he.instance.hideLoading()}async getAccountTokens(){await this.refreshVo()}};var $s=class a{constructor(){this.poolAry=[];this.pool_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this.poolDic=new ne}async initPoolList(){this.poolAry=[];let t=await M.requestPost("cybertron-sys-api/api/v1/mineral/getMineralPoolList",{});for(let e of t){let i=new Pm;Object.assign(i,e);let n=U.intance.m_dicItems.get(i.resourcesType);i.rewardTokenAddress=n.tokenId,i.pool_contract=this.pool_contract,this.poolDic.set(i.rewardTokenAddress,i),this.poolAry.push(i)}}async getHeroTokenIds(){let t=q.instance.walletAddress;try{console.log("getHeroTokenIds, account:"+t);var e;let n;Q.vType==2?(e=it.id,n=ab[e]):Q.vType==1?(e=it.id,n=ns[e]):(e=xt.id,n=ns[e]);let r=await q.instance.walletClient.getChainId();if(e!==r){var i=await q.instance.switchChain(e);if(!i)return this.onEndHeroList(),console.log("切换失败，请手动切换"),null}return n?await q.instance.publicClient.readContract({address:n,abi:ue.HERO_LIST_ABI,functionName:"list",args:[t]}):(this.onEndHeroList(),N.instance.notice(d.instance.getLanguage(1219,r)),null)}catch(n){if(console.log("获取英雄列表错误====》",n),n instanceof Error){let r=n.message;console.log("获取英雄列表 错误====》",r)}}}async transferHero(t,e){he.instance.showLoadingByInfo(d.instance.getLanguage(1119));try{var i;let s;Q.vType==2?(i=it.id,s=f_[i]):Q.vType==1?(i=it.id,s=nb[i]):(i=xt.id,s=nb[i]);let l=await q.instance.walletClient.getChainId();if(i!==l){var n=await q.instance.switchChain(i);if(!n){this.onEndHeroList(),console.log("切换失败，请手动切换");return}}if(!s)return this.onEndHeroList(),N.instance.notice(d.instance.getLanguage(1220,l)),!1;if(console.log("判断授权 transferHeroAddress: "+s+", acceptAddress:"+t+", chainIDData:"+i),!await this.setApprovalForAll(s))return console.log("未授权"),this.onEndHeroList(),N.instance.notice(d.instance.getLanguage(15)),!1;console.log("授权成功 开始购买");var r=await q.instance.walletClient.writeContract({account:q.instance.walletAddress,address:s,abi:ue.TRANSFER_HERO_ABI,functionName:"batchTransfer",args:[t,e]});console.log("============"+r);let u=await q.instance.publicClient.waitForTransactionReceipt({hash:r});return console.log(`Tx with hash: ${r}`,u),u&&u.status=="success"?(this.delHero(e),this.waitGetHero(i,r),console.log(`Tx successful with hash: ${r}`),r):(this.onEndHeroList(),ge.TransactionErrorTip(),!1)}catch(s){this.onEndHeroList();var o=s.shortMessage;if(o&&o.indexOf("does not match")!=-1&&(o=d.instance.getLanguage(1118)),console.log(o),N.instance.notice(o),s instanceof F){let l=s.walk(c=>c instanceof kt);if(l instanceof kt){let c=l.data?.errorName??"";console.log("============errorName: "+c)}}return null}}async setApprovalForAll(t){let e=q.instance.walletAddress;try{console.log("查看是否已经授权, owner:"+e+", spender:"+t),console.log("未授权，进行授权, owner:"+e);var i;let n;Q.vType==2?(i=it.id,n=ab[i]):Q.vType==1?(i=it.id,n=ns[i]):(i=xt.id,n=ns[i]);let r=await q.instance.walletClient.writeContract({address:n,abi:ue.HERO_LIST_ABI,functionName:"setApprovalForAll",args:[t,!0],account:e});console.log("============"+r);let o=await q.instance.publicClient.waitForTransactionReceipt({hash:r});return console.log(`setApprovalForAll with hash: ${r}`,o),o&&o.status=="success"?(console.log(`setApprovalForAll successful with hash: ${r}`),!0):!1}catch(n){if(console.log("授权错误====》",n),n instanceof Error){let r=n.message;console.log("授权错误====》",r)}}}onEndHeroList(t=null){he.instance.hideLoading(),t&&g.intance.event(y.EVENT_END_HEROTRANSFER,[t])}waitGetHero(t,e){this.chainId=t,this.hashId=e,Laya.timer.loop(2e3,this,this.getHero)}delHero(t=null){var e=M.requestPost("wxgame/mutiNft/delHero",{heroList:t}).catch(i=>{})}async getHero(){var t=await M.requestPost("wxgame/mutiNft/check",{chainId:this.chainId,hashId:this.hashId}).catch(e=>{});t&&t.heroList&&t.heroList.length>0&&(Laya.timer.clear(this,this.getHero),this.onNewAddHero(t.heroList))}onNewAddHero(t){L.instance.m_heroData.herosDataRemoveHandler(t),this.onEndHeroList(t)}};var Rm=class extends Laya.Dialog{};var{regClass:xI}=Laya,Nm=class extends Rm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_PANEL;this.m_iPositionType=B.CENTER;this.myHeroesNum=0;this.selectedNum=0}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_readClipboard.disabled=!navigator.clipboard,this.btn_readClipboard.on(Laya.Event.CLICK,this,this.readClipboard),this.btn_transferRecords.on(Laya.Event.CLICK,this,this.onShowTransferRecord),this.btn_approve.on(Laya.Event.CLICK,this,this.onTransferHero),this.btn_checkBox.on(Laya.Event.CLICK,this,this.onSelectAll),g.intance.on(y.EVENT_END_HEROTRANSFER,this,this.onEndHeroTransfer),g.intance.on(y.EVENT_REFRESH_HEROTRANSFER,this,this.onRefreshHeroTransfer),this.list_hero.array=[]}async readClipboard(){navigator.clipboard?navigator.clipboard.readText().then(e=>{console.log("剪切板中的文本内容:",e),this.input_acceptAddress.text=e}).catch(e=>{console.error("无法读取剪切板内容:",e)}):console.error("当前浏览器不支持 Clipboard API")}onOpened(e){this.getHeroTokenIds()}async getHeroTokenIds(){var e=await $s.instance.getHeroTokenIds();console.log("获得链上英雄ID heroTokenIds: ",e),this.heroVos=[],e&&e.length>0&&e.forEach(i=>{i=parseInt(i);var n=L.instance.m_heroData.getCanTransferHero(i);n&&this.heroVos.push(n)}),this.list_hero.array=this.heroVos,this.updateNum()}onEndHeroTransfer(e){this.heroVos=this.heroVos.filter(i=>!e.includes(i.pk)),this.list_hero.array=this.heroVos,this.updateNum()}onRefreshHeroTransfer(){this.list_hero.refresh(),this.updateNum()}updateNum(){!this.heroVos||this.heroVos.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1,this.selectedNum=0,this.heroVos.forEach(e=>{e&&e.checked&&this.selectedNum++}),this.myHeroesNum=this.heroVos.length,this.tf_myHeroesNum.text=d.instance.getLanguage(1222,this.heroVos.length),this.tf_selectedNum.text=d.instance.getLanguage(1223,this.selectedNum)}onSelectAll(){var e=this.btn_checkBox.selected;this.heroVos.forEach(i=>{i&&(i.checked=e)}),this.list_hero.refresh(),this.updateNum()}onBack(){this.close()}async onTransferHero(){var e=this.input_acceptAddress.text;if(e==""){N.instance.notice(d.instance.getUILang("PLEASE ENTER THE ACCEPT ADDRESS"));return}var i=[];this.heroVos.forEach(n=>{n.checked&&i.push(n.pk)}),i.length>0?await $s.instance.transferHero(e,i):N.instance.notice(d.instance.getLanguage(1218))}onShowTransferRecord(){H.intance.openModule(h.TransferRecordDialog)}onDisable(){this.removeEvent()}removeEvent(){g.intance.off(y.EVENT_END_HEROTRANSFER,this,this.onEndHeroTransfer),g.intance.off(y.EVENT_REFRESH_HEROTRANSFER,this,this.onRefreshHeroTransfer)}};Nm=p([xI("rERE5ZadTfqASnxDrsNtyw")],Nm);var Om=class extends Laya.Scene{};var{regClass:II}=Laya,Hm=class extends Om{onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP}onEnable(){this.list_hero.vScrollBarSkin="",this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_transfer.on(Laya.Event.CLICK,this,this.onTransfer),g.intance.on(Ai.UPDATE_HERO_EVENT,this,this.createHeadList),this.initMyHeroView(),this.initContainer()}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}onTransfer(){H.intance.openModule(h.HeroTransferView)}async initMyHeroView(){}onListEvent(e,i){switch(e.type){case Laya.Event.CLICK:this.list_hero.selectedIndex=i,this.handleSelectHero(i);break}}onRenderList(e,i){let n=e.dataSource}initContainer(){this.list_hero.visible=!1,this.list_hero.vScrollBarSkin="",this.list_hero.mouseHandler=new Laya.Handler(this,this.onListEvent),this.list_hero.renderHandler=new Laya.Handler(this,this.onRenderList),this.createHeadList()}handleSelectHero(e){let i=this.list_hero.selectedItem}async createHeadList(){if(await st.instance.ownerHero(!0),!this)return;let e=L.instance.m_heroData.heroVoDic.values;if(e&&e.length>9){this.list_hero.array=e,this.list_hero.visible=!0;let r=-1;this.list_hero.selectedIndex=r}else{let r=[];for(var i=0;i<10;i++){var n=e[i];n?r.push(n):r.push(null)}this.list_hero.array=r,this.list_hero.visible=!0}}handleClickBtn(e){switch(e){}}onDisable(){g.intance.off(Ai.UPDATE_HERO_EVENT,this,this.createHeadList)}};Hm=p([II("eEFn-xcRTXagUEZFDdSujw")],Hm);var Um=class extends Laya.Box{};var{regClass:EI}=Laya,Vm=class extends Um{set dataSource(t){super.dataSource=t;var e=t;e&&(this.tf_name.text=d.instance.getUILang(e[1]),this.tf_num.text=e[2])}};Vm=p([EI("BFrnzfZDRh2v3vDKqrNVwA")],Vm);var Fm=class extends Laya.Box{};var{regClass:TI}=Laya,zm=class extends Fm{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.txt_num.text="",this.img_icon.skin=k.instance.getSkillIcon(this.skillItem.icon,this.isBig))}};zm=p([TI("qJVd2M3_Td-5eIx8PsQpAw")],zm);var Gm=class extends Laya.Box{};var{regClass:SI}=Laya,jm=class extends Gm{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.dataSource=this.skillItem)}toDetail(){this.skillItem&&H.intance.openModule(h.SkillTipDialog,this.skillItem)}};jm=p([SI("VRh1GpjHSyqm75euC37ZKw")],jm);var qm=class extends Laya.Dialog{};var{regClass:CI}=Laya,Wm=class extends qm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}setOpenData(e){e&&(this.skillItem=e)}onEnable(){this.item.dataSource=this.skillItem,this.tf_name.text=d.instance.getLanguage(this.skillItem.name);var e=[["type","S_type",d.instance.getUILang("S_type_"+this.skillItem.type)],["distance","S_distance",this.skillItem.distance],["hurt","S_hurt",this.skillItem.hurt/100+"%"],["cd","S_cd",this.skillItem.cd/1e3+d.instance.getUILang("S_S")],["displacement","S_displacement",this.skillItem.displacement],["targetsType","S_targetsType",d.instance.getUILang("S_targetsType"+this.skillItem.targetsType)]];this.list_skillAttrs.array=e}removeEvent(){}};Wm=p([CI("PiBuXnP8ToeveVbB_bfhUQ")],Wm);var Km=class extends Laya.Box{};var{regClass:kI}=Laya,Ym=class extends Km{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,e&&(this.img_icon.skin=`gameIcon/hero/heroDetail/img_hero_state_${e}.png`)}};Ym=p([kI("kgETBhusT2WQRM1T39-4EA")],Ym);var $m=class extends Laya.Dialog{};var{regClass:AI}=Laya,Xm=class extends $m{constructor(){super()}onOpened(t){this.list_record.array=[],this.onGetList()}async onGetList(){var t=await M.requestPost("wxgame/mutiNft/record",{});t&&t.record?(this.list_record.array=t.record,!t.record||t.record.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1):N.instance.notice(d.instance.getLanguage(135))}};Xm=p([AI("nkhiH9TpSY6e2tWJ07b86g")],Xm);var Qm=class extends Laya.Box{};var{regClass:DI}=Laya,Zm=class extends Qm{constructor(){super(...arguments);this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.isAddEvent=!0)}onCopy(){let e=this.heroTransferDto.toAddress;doCopy(e),N.instance.notice(d.instance.getLanguage(132))}set dataSource(e){super.dataSource=e,this.heroTransferDto=e,this.heroTransferDto&&(this.addEvent(),this.setCurrentOutPut())}setCurrentOutPut(){if(this.tf_createDate.text=Ee.formatTimeStamp(this.heroTransferDto.createTime,"YY-MT-DD HH:MM"),this.tf_tokenId.text=this.heroTransferDto.nftId,this.tf_from.text=Ne.abbreviateString(this.heroTransferDto.fromAddress,18),this.tf_to.text=Ne.abbreviateString(this.heroTransferDto.toAddress,18),this.heroTransferDto.id>0){var e=new Dt;e.id=this.heroTransferDto.id,e.lv=this.heroTransferDto.lv,e.color=this.heroTransferDto.color,this.heroListItem.needPop=!1,this.heroListItem.dataSource=e}}};Zm=p([DI("STy30_L-RjafQhbdmoDLDw")],Zm);var St=class{constructor(){}};St.TYPE_Consumption=1,St.TYPE_Equipment=2,St.TYPE_Currency=3,St.TYPE_Hero=4,St.TYPE_Fragment=5;var Jm=class extends Laya.Box{};var{regClass:MI}=Laya,ed=class extends Jm{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&this.setCurrentOutPut()}async setCurrentOutPut(){if(!this.itemVo)return;let e=this.itemVo.itemItem;this.knapsackItem.dataSource=this.itemVo,e?this.disabled=!1:this.disabled=!0}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===St.TYPE_Equipment?H.intance.openModule(h.EquipDetailDialog,this.itemVo):H.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};ed=p([MI("HYoZb6e-RFKj8fjDKbl-7Q")],ed);var td=class extends Laya.Dialog{};var{regClass:BI}=Laya,id=class extends td{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}onEnable(){this.initContainer(),Pe.instance.playSoundByName(Pe.soundName32)}initContainer(){var e=ze.instance.getOneItem();if(e){var i;e instanceof Array?(i=new Fe(e[0]),i.newAddCnt=e[1]):i=e,this.showItem(i)}}showItem(e){this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=e,this.tf_name.text=d.instance.getLanguage(e.itemItem.name)}onDisable(){g.intance.event(y.EVENT_CHECK_REMAIN,h.ItemGetDialog)}};id=p([BI("tC2uDJDVQMaI41Lys60O5Q")],id);var ad=class extends Laya.Box{};var{regClass:PI}=Laya,nd=class extends ad{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=new Fe;if(!this.itemVo)return;let i=this.itemVo.itemItem;i?(this.showAdd?this.txt_num.text=""+Se.formatNumber(this.itemVo.newAddCnt,8):this.itemVo.m_iNum?this.txt_num.text=""+Se.formatNumber(this.itemVo.m_iNum,8):this.txt_num.text=""+Se.formatNumber(this.itemVo.newAddCnt,8),this.img_icon.skin=k.instance.getItemIcon(i.icon),this.img_box.skin="gameIcon/items/itemBg/img_"+i.quality+".png"):(this.txt_num.text="",this.img_icon.skin=null,this.img_box.skin="gameIcon/items/itemBg/img_0.png"),this.tf_isSch.visible=this.itemVo.isScholarship}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===St.TYPE_Equipment?H.intance.openModule(h.EquipDetailDialog,this.itemVo):H.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};nd=p([PI("LzxJYKybT_m3CJav3RyDmg")],nd);var rd=class extends Laya.Scene{};var{regClass:RI}=Laya,od=class extends rd{constructor(){super(...arguments);this.subBagInfo=null;this.currTab=0;this.type=1;this.items=[];this.hasItem=!1}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP,this.listPanel1.visible=!1}onOpened(e){this.type=e}onEnable(){this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.box_show.visible=!1,this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-Q.DESIGN_HEIGHT)/2}setTab(e){for(let i=1;i<3;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}async initLuckDrawView(){await st.instance.ownerBag(),!this.destroyed&&(this.type?this.onClickTab(this.type):this.onClickTab(1))}async onClickTab(e){if(this.currTab!=e){if(this.setTab(e),e==1){if(this.box_2.visible=!0,this.destroyed)return;var i=await this.getItemByType(1);this.listPanel1.array=i,this.listPanel1.visible=!0}else{if(this.box_2.visible=!0,this.destroyed)return;var i=await this.getItemByType(2);this.listPanel1.dataSource=i}this.listPanel1.selectedIndex=-1,this.hasItem&&(this.listPanel1.selectedIndex=0)}}async getItemByType(e){var i=e==1?St.TYPE_Consumption:St.TYPE_Equipment;this.items=[],this.hasItem=!1;var n=L.instance.m_packageData.getBackByType(i);if(e==1){if(!this.subBagInfo){let c=(await M.requestPost("wxgame/lease/bag",{})).list,u={};for(let m of c)m.ticketId in u?u[m.ticketId]+=m.ticketCount:u[m.ticketId]=m.ticketCount;this.subBagInfo=Object.keys(u).map(m=>({ticketId:m,ticketCount:u[m]}))}if(this.subBagInfo)for(let l=0;l<this.subBagInfo.length;l++){let c=this.subBagInfo[l];if(c.ticketCount){var r=new Fe(c.ticketId);r.newAddCnt=c.ticketCount,r.isScholarship=!0,console.log(r),n.push(r)}}console.log(this.subBagInfo)}for(var o=0;o<30;o++){var s=n[o];s?(o==0&&(this.hasItem=!0),this.items.push(s)):this.items.push(new Fe(0))}return this.items}onSelectItem(e,i){var n=this.items[e];if(console.log(n),n){let r=n.itemItem;this.img_icon.skin=k.instance.getItemIcon(r.icon),this.tf_name.text=d.instance.getLanguage(r.name),this.tf_des.text=d.instance.getLanguage(r.des),this.box_show.visible=!0}else this.img_icon.skin=null,this.tf_name.text="",this.tf_des.text="",this.box_show.visible=!1}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}stopAni(e){console.log("stopAni: "+e)}onDrawBack(e){}removeEvent(){}};od=p([RI("6IPqO9JvTmygjIZQXMwq2A")],od);var sd=class extends Laya.Dialog{};var{regClass:NI}=Laya,ld=class extends sd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}setOpenData(e){e&&(this.itemVo=e)}onEnable(){this.item.dataSource=this.itemVo;let e=this.itemVo.itemItem;this.tf_name.text=d.instance.getLanguage(e.name),this.txt_type.text=d.instance.getLanguage(6060)+d.instance.getLanguage(e.type),this.txt_desc.text=d.instance.getLanguage(e.des),this.btn_use.visible=e.use!="0",this.btn_use.clickHandler=new Laya.Handler(this,this.useItem)}async useItem(){this.close()}removeEvent(){}};ld=p([NI("or8jNdIhRpSbAG2JBhH-wA")],ld);var cd=class extends Laya.Dialog{};var{regClass:OI}=Laya,ud=class extends cd{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}onEnable(){Pe.instance.playSoundByName(Pe.soundName32)}setOpenData(e){e&&(this.reward=e);var i=[],n=this.reward;n.forEach(c=>{if(c.id&&c.id>0){var u=new Fe(c.id);u.newAddCnt=c.count,c.id==3011&&(u.itemItem.icon=c.id),i.push(u)}});var r=this.list_reward.spaceX,o=this.list_reward.itemTemplate.width,s=i.length,l=s*o+r*(s-1);this.list_reward.width=l,this.list_reward.right=this.width-l>>1,this.list_reward.array=i}};ud=p([OI("xwYUFnd4S3uJGIJSjjbRag")],ud);var pd=class extends Laya.Box{};var{regClass:HI}=Laya,md=class extends pd{constructor(){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}onEnable(){console.log("OpenScene onEnable："+this.m_strName)}getName(){console.log(this.m_strName)}onDisable(){}};md=p([HI("sQS5mrqRQLWcBk-SgfBGJw")],md);var dd=class extends Laya.Box{};var{regClass:UI}=Laya,hd=class extends dd{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}set dataSource(e){super.dataSource=e,this.mailDto=e,this.mailDto&&this.setCurrentOutPut()}async setCurrentOutPut(){this.mailDto&&(this.tf_title.text=this.mailDto.title,this.tf_time.text=Ee.formatTimeExpires(this.mailDto.expTime),this.img_reward.visible=this.mailDto.reward.length>0,this.img_red.visible=this.mailDto.state==0,this.img_box.skin=this.mailDto.state==0?"res/mail/img_mail_state_0.png":"res/mail/img_mail_state_1.png")}};hd=p([UI("UKoifNR5Qmm4eq8sXy0K3A")],hd);var fd=class extends Laya.Scene{};var{regClass:VI}=Laya,yd=class extends fd{constructor(){super(...arguments);this.subBagInfo=null;this.currTab=0;this.type=1;this.items=[];this.hasItem=!1}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP,this.listPanel1.visible=!1}onOpened(e){this.type=e}onEnable(){this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.btn_one_claim.on(Laya.Event.CLICK,this,this.onOneClaim),this.btn_one_deletior.on(Laya.Event.CLICK,this,this.onOneDeletior),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1,!1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2,!1]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3,!1]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.box_show.visible=!1,this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-Q.DESIGN_HEIGHT)/2}setTab(e){this.currTab=e;for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}async initLuckDrawView(){let e=await M.requestPost("wxgame/mail/list",{},!0,!0);L.instance.m_mailData.initData(e.data),!this.destroyed&&(this.type?this.onClickTab(this.type):this.onClickTab(1))}async refreshView(){let e=await M.requestPost("wxgame/mail/list",{},!0,!0);L.instance.m_mailData.initData(e.data),this.onClickTab(this.currTab,!0)}async onClickTab(e,i=!1){if(!i){if(this.currTab==e)return;this.setTab(e)}if(e>0){if(this.box_2.visible=!0,this.destroyed)return;var n=await this.getItemByType(e);this.listPanel1.array=n,this.listPanel1.visible=!0}this.listPanel1.selectedIndex=-1,this.box_show.visible=!1,this.hasItem?(this.noDataBox.visible=!1,this.listPanel1.selectedIndex=0):this.noDataBox.visible=!0}async getItemByType(e){var i=e;return this.items=[],this.hasItem=!1,this.items=L.instance.m_mailData.getListByType(i),this.hasItem=this.items.length>0,this.items}onSelectItem(e,i){if(console.log("onSelectItem selectIndex: "+e),this.currMailDto=this.items[e],console.log(this.currMailDto),this.currMailDto){this.tf_title.text=this.currMailDto.title,this.tf_des.text=this.currMailDto.content,this.tf_time.text=Ee.formatTimeExpires(this.currMailDto.expTime);var n=[],r=this.currMailDto.reward;r.forEach(o=>{var s=new Fe(o.id);s.newAddCnt=o.count,n.push(s)}),this.list_reward.array=n,this.btn_receive.disabled=this.currMailDto.state>0,this.box_show.visible=!0}else this.box_show.visible=!1}async onReceive(){if(this.currMailDto){var e=await M.requestPost("wxgame/mail/read",{id:this.currMailDto.id});e.errorCode==0?(e.reward&&e.reward.length>0?H.intance.openModule(h.RewardGetDialog,e.reward):N.instance.notice(d.instance.getLanguage(2e3)),this.refreshView()):N.instance.notice(d.instance.getLanguage(135))}}async onOneClaim(){if(this.currMailDto){var e=await M.requestPost("wxgame/mail/readOneKey",{});e.errorCode==0?(e.reward&&e.reward.length>0?H.intance.openModule(h.RewardGetDialog,e.reward):N.instance.notice(d.instance.getLanguage(2e3)),this.refreshView()):N.instance.notice(d.instance.getLanguage(135))}}async onOneDeletior(){if(this.currMailDto){var e=await M.requestPost("wxgame/mail/delOneKey",{});e.errorCode==0?(N.instance.notice(d.instance.getLanguage(2e3)),this.refreshView()):N.instance.notice(d.instance.getLanguage(135))}}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}removeEvent(){}};yd=p([VI("XwqkX1FmRISr-BmvQwE88Q")],yd);var bd=class extends Laya.Box{};var{regClass:FI}=Laya,gd=class extends bd{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.check_coin.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,!e)return;this.addEvent();let i=e;this.check_coin.selected=i[1],this.tf_coin.text=i[2]}onCheck(){this._dataSource[1]=this.check_coin.selected,g.intance.event(y.EVENT_CHECK_ICON_SELECT)}};gd=p([FI("UTGHsPbQS6C5FohXv8T25Q")],gd);var vd=class extends Laya.Dialog{};var{regClass:zI}=Laya,Ld=class extends vd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER;this.coinType=3001;this.nodeId=-1;this.coinIds=[]}setOpenData(e){e&&(this.arenaLv=e[0])}onEnable(){this.btn_create.on(Laya.Event.CLICK,this,this.onCreate),this.initContainer()}initContainer(){let e=L.instance.playerDto;if(!e)return;this.tf_roleName.text=e.name;let i=e.icon;this.playerIcon.headSkin=i,this.img_country.skin=k.instance.getCountryIcon(e.country+""),this.initNode(),this.initCoinCombo()}initCoinCombo(){var e=U.intance.m_dicArenaTypes.get(O.instance.arenaType);this.coinIds=e.coinTypes;var i=[];this.coinIds.forEach(n=>{var r=U.intance.m_dicItems.get(n);i.push(d.instance.getLanguage(r.name))}),this.coinCombo.selectHandler=new Laya.Handler(this,this.onSelected2),this.coinCombo.dataSource=i,this.coinCombo.selectedIndex=0}onSelected2(e){e!=-1&&(this.coinType=this.coinIds[e],console.log("您选中了 coinType"+this.coinType),this.setRoomInfo())}setRoomInfo(){var e=O.instance.arenaType;this.arenaItem=U.intance.getSheetDataByMultiKey(U.intance.m_dicArenaMulDic,[e,this.arenaLv,this.coinType]),this.tf_roomName.text=d.instance.getLanguage(this.arenaItem.name),this.tf_min.text=this.arenaItem.numberMin+"",this.tf_max.text=this.arenaItem.numberMax+""}initNode(){this.list_node.selectHandler=new Laya.Handler(this,this.handleSelectNode),this.createNodeList(),this.box_node.on(Laya.Event.CLICK,this,this.onOpenNode),this.list_node.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_node.mouseHandler=Laya.Handler.create(this,this.onNodeItemMouse,null,!1),this.list_node.renderHandler=Laya.Handler.create(this,this.onNodeItemRender,null,!1),this.list_node.scrollBar&&this.list_node.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onNodeItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_node.selectedIndex=i,this.onHideNode())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onNodeItemRender(e,i){e.onChange(this.list_node.selectedIndex==i)}onOpenNode(){this.img_node_pad.visible==!1&&(this.img_node_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideNode))}onHideNode(){this.img_node_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideNode)}handleSelectNode(e){if(console.log("handleSelectNode: "+e),e!=-1){let i=this.list_node.selectedItem;this.nodeId=i.id,this.img_node.skin=k.instance.getNodeIcon(i.area),this.tf_node.text=d.instance.getLanguage(i.name),this.nodeDelaySign.dataSource=i}}createNodeList(){let e=U.intance.m_dicNodes;this.list_node.array=e.values,this.list_node.visible=!0;let i=-1,n=0;e.values.length>0&&(i=0),this.list_node.selectedIndex=i}async onCreate(){if(this.arenaItem.item&&this.arenaItem.item.length>1){var e=this.arenaItem.item[0],i=this.arenaItem.item[1],n=L.instance.m_packageData.getCountById(e);let c=!1,u=L.instance.playerDto;if(u.fightHeroPk){await st.instance.ownerHero();let m=L.instance.m_heroData.heroVoDic.get(u.fightHeroPk);if(m){if(c=m.state==2,c){var r=await M.requestPost("wxgame/lease/heroInfo",{heroPk:u.fightHeroPk});if(r.info.remainTicketCount<=0&&r.info.ticketId!==0){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1175),D.YES,null);return}if(e!==r.info.ticketId&&r.info.ticketId!==0){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1178),D.YES,null);return}}if(m.state==1){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1176),D.YES,null);return}}else{ge.heroNotEnought();return}}else{ge.heroNotEnought();return}var o=O.instance.arenaType;if(c&&r.info.ticketId==0&&o==1){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1299),D.YES,null);return}if(n<i&&(!c||r.info.ticketId==0)){ge.titickNotEnought(e);return}}let s=this.input_pwd.text;var l=this.arenaItem.id;if(l){let c=await M.requestPost("wxgame/room/create",{nodeId:this.nodeId,password:s,arenaId:l});K.instance.roomDto=c.roomDto,c.roomDto?(this.close(),H.intance.openModule(h.EnterRoomView)):N.instance.notice(d.instance.getLanguage(135))}}};Ld=p([zI("_y9qJpZZRk2p26xdgYPRyA")],Ld);var _d=class extends Laya.Box{};var{regClass:GI}=Laya,wd=class extends _d{constructor(){super(...arguments);this.hasOpened=!1}onEnable(){this.on(Laya.Event.CLICK,this,this.openMaxView),g.intance.on(y.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom)}onUpdateMatchRoom(){this.tf_coolTime.text=Ee.format(K.instance.coolDownTime,":",!1),K.instance.coolDownTime==5&&!this.hasOpened&&(console.log("onUpdateMatchRoom "+K.instance.coolDownTime),this.openMaxView(),this.hasOpened=!0)}openMaxView(){Et.instance.openMaxView()}onDisable(){g.intance.on(y.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom)}};wd=p([GI("7hINWNN3S8SmWSveWJQJSw")],wd);var xd=class extends Laya.Dialog{};var{regClass:jI}=Laya,Id=class extends xd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_PANEL;this.m_iPositionType=B.CENTER;this.isMax=!1}onEnable(){this.btn_min.on(Laya.Event.CLICK,this,this.onMinClick),this.btn_exit.on(Laya.Event.CLICK,this,this.onExitClick),g.intance.event(y.EVENT_ENTER_MATCH_ROOM,!1),g.intance.on(y.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom),this.initContainer(),xe.instance.sendCustumEvent(40)}setOpenData(e){e&&(this.isMax=e)}initContainer(){this.list_wait_hero.visible=!0;var e=K.instance.roomDto,i=e.roomId,n=e.arenaId,r=e.coinType,o=U.intance.m_dicArenaDic.get(n);K.instance.currArenaItem=o,this.tf_roomName.text=d.instance.getLanguage(o.name),this.arenaNo.text=i+"",Et.instance.init();var s=K.instance.roomDto.nodeId;if(s){var l=U.intance.m_dicNodes.get(s);this.nodeDelaySign.dataSource=l,this.nodeDelaySign.startTest()}this.updateExitCD()}updateExitCD(){var e=Math.round(K.instance.roomDto.joinCd/1e3),i=e-K.instance.currArenaItem.notQuit;i>K.instance.currArenaItem.exitTime&&(i=K.instance.currArenaItem.exitTime),K.instance.limitCd=i,!this.isMax&&K.instance.limitCd>0?(this.onSetExitTime(),Laya.timer.loop(1e3,this,this.onSetExitTime)):(Laya.timer.clear(this,this.onSetExitTime),this.btn_exit.disabled=!0,this.tf_exit.text="Exit")}onSetExitTime(){K.instance.limitCd>=0?(this.tf_exit.text=d.instance.getUILang("Exit")+" ("+K.instance.limitCd+"s)",K.instance.limitCd--,this.btn_exit.disabled=!1):(Laya.timer.clear(this,this.onSetExitTime),this.btn_exit.disabled=!0,this.tf_exit.text="Exit")}onMinClick(){K.instance.coolDownTime>5&&(this.close(),Et.instance.openMinView())}async onExitClick(){await M.requestPost("wxgame/room/leave",{roomId:K.instance.roomDto.roomId})?Et.instance.close():N.instance.notice(d.instance.getLanguage(135))}onUpdateMatchRoom(){var e=K.instance.roomDto.members.length;this.tf_people.text=e+"";var i=K.instance.currArenaItem.numberMax;this.heros=[];for(var n=0;n<i;n++){var r=K.instance.roomDto.members[n];r?this.heros.push(r):this.heros.push(null)}this.list_wait_hero.array=this.heros,this.list_wait_hero.visible=!0,this.tf_coolTime.text=d.instance.getLanguage(1089)+" <font color='#ff5388'>"+Ee.format(K.instance.coolDownTime,":",!1)+"</font>",this.btn_min.disabled=K.instance.coolDownTime<=5}onDisable(){this.removeEvent(),console.log("EnterRoomView onDisable"),g.intance.off(y.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom),fe.intance.currSceneName!=$.M_SCENE_MAIN?fe.intance.setCurrentScene($.M_SCENE_MAIN):g.intance.event(y.EVENT_ENTER_MATCH_ROOM,!0)}removeEvent(){Laya.timer.clearAll(this)}};Id=p([jI("IwpLh2K2T5Gh7QXYnJakAw")],Id);var Ed=class extends Laya.Dialog{};var{regClass:qI}=Laya,Td=class extends Ed{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}setOpenData(e){e&&(this.roomDto=e[0])}onEnable(){this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.initContainer()}initContainer(){var e=U.intance.m_dicItems.get(this.roomDto.coinType),i=d.instance.getLanguage(e.name),n=U.intance.m_dicArenaDic.get(this.roomDto.arenaId);this.tf_roomName.text=d.instance.getLanguage(n.name),this.input_pwd.text=""}async onJoin(){let e=this.input_pwd.text;var i=U.intance.m_dicArenaDic.get(this.roomDto.arenaId);if(i.item&&i.item.length>1){var n=i.item[0],r=i.item[1],o=L.instance.m_packageData.getCountById(n);if(o<r){ge.titickNotEnought(n);return}}let s=await M.requestPost("wxgame/room/join",{roomId:this.roomDto.roomId,pass:e});K.instance.roomDto=s.roomDto,s.roomDto?(H.intance.openModule(h.EnterRoomView),this.close()):N.instance.notice(d.instance.getLanguage(135))}};Td=p([qI("bn6StZy0ROGBH9GCTateCA")],Td);var Sd=class extends Laya.Scene{};var Cd=class a{constructor(){this._inited=!1}static getInstance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0,L.instance.initData())}};var{regClass:WI}=Laya,sn=class extends Sd{constructor(){super(...arguments);this.currIconAni=1}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP,Cd.getInstance().init()}async onOpened(e){this.mouseThrough=this.mouseThrough=!0,this.headBox.mouseThrough=!0;let i=this.getChildByName("mcMain");i&&(i.mouseThrough=!0),this.btn_fullScreen.visible=Q.isInto,Q.isInto&&Q.isFull&&(ge.isFullScreen=!0,ge.isFullScreen?this.img_fullScreen.skin="res/main/img_full_2.png":this.img_fullScreen.skin="res/main/img_full_1.png"),this.updateTopInfo();var n=Laya.stage.width-Q.DESIGN_WIDTH>>1;this.leftX=this.leftMenu.x,this.rightX=this.rightMenu.x,this.leftMenu.x=this.leftX-n-this.leftMenu.width,this.rightMenu.x=this.rightX+n+this.rightMenu.width,Laya.Tween.to(this.leftMenu,{x:this.leftX-n},500),Laya.Tween.to(this.rightMenu,{x:this.rightX+n},500),this.initBtnAni(),xe.instance.sendCustumEvent(34),sn.M_B_FIRST_Open&&M.requestPost("wxgame/sys/notice",{type:2},!0,!0).then(r=>{console.log(r);var o=r;if(o.status==0&&o.nowTime>=o.startTime&&o.nowTime<=o.endTime){var s=parseInt(L.instance.m_strLanguage.toString()),l=o.title[s],c=o.contents[s];H.intance.openModule(h.NoticeDialog,[2,l,c])}}),sn.M_B_FIRST_Open=!1}initBtnAni(){for(var e=1;e<6;e++)this["spine_"+e].on(Laya.Event.READY,this,this.onSkReady,[this["spine_"+e]])}onSkReady(e){e.stop(),e.visible=!1,e==this.spine_5&&this.startBtnAni()}startBtnAni(){this.currIconAni>5&&(this.currIconAni=1),this["spine_"+this.currIconAni].play(0,!1),this["spine_"+this.currIconAni].visible=!0,this.currIconAni++,Laya.timer.once(2e3,this,this.startBtnAni)}changeMailFlag(){}updateTopInfo(){let e=L.instance.playerDto;if(!e)return;this.tf_roleName.text=e.name,this.levelTF.text=e.lv.toString(),e.needTip=!0,this.playerIcon.dataSource=e,this.updateExp(),this.changeMailFlag();let i=new Date(L.instance.m_serverTime);console.log("server time toLocaleString："+i.toLocaleString()),console.log("server time offset date："+L.instance.timeZoneOff/60/60),this.updateLocalAssets()}updateExp(){}requestAssets(){g.intance.event(y.UPDATE_ASSETS)}async updataBalence(){await q.instance.getBalance()}async updateAssets(){await an.instance.updateAssetsBalance()}updateLocalAssets(){this.tf_3005.text=Se.filterNumFormat(L.instance.getConsumeValue(ke.TYPE_GOLD),0)}onEnable(){this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),Laya.timer.loop(1e3,this,this.refreshRoomTime),this.btn_shop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_shop]),this.btn_guild.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_guild]),this.btn_heroes.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_heroes]),this.btn_backpack.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_backpack]),this.btn_asset.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_asset]),this.btn_scholarshop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_scholarshop]),this.btn_leaderboard.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_leaderboard]),this.btn_social.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_social]),this.btn_mail.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_mail]),this.btn_activities.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_activities]),this.btn_setting.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_setting]),this.btn_fullScreen.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_fullScreen]),g.intance.on(y.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),g.intance.on(y.ROLE_INFO_CHANGE,this,this.updateTopInfo),g.intance.on(y.UPDATE_ASSETS,this,this.updateAssets),g.intance.on(It.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),g.intance.on("CHANG_NAME",this,this.changeName),g.intance.on("open_buy",this,this.openBuyDialog),g.intance.on("msg_173",this,this.onFirstRecharge),g.intance.on("ACCOUNTVO_UPDATE",this,this.updateExp),g.intance.on(y.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),this.initBtnBox()}onClickTab(e){e==1?(O.instance.arenaType=1,fe.intance.setCurrentScene($.M_SCENE_AIRDROP)):e==2?(O.instance.arenaType=2,fe.intance.setCurrentScene($.M_SCENE_AIRDROP)):e==3&&(O.instance.arenaType=3,fe.intance.setCurrentScene($.M_SCENE_AIRDROP))}refreshRoomTime(){this.refreshRoomBtnRed()}refreshRoomBtnRed(){this.img_red_1.visible=L.instance.getRedDotById(dt.instance.ROOM_1_1)||L.instance.getRedDotById(dt.instance.ROOM_1_2)||L.instance.getRedDotById(dt.instance.ROOM_1_3),this.img_red_2.visible=L.instance.getRedDotById(dt.instance.ROOM_2_1)||L.instance.getRedDotById(dt.instance.ROOM_2_2)||L.instance.getRedDotById(dt.instance.ROOM_2_3),this.img_red_3.visible=L.instance.getRedDotById(dt.instance.ROOM_3_1)||L.instance.getRedDotById(dt.instance.ROOM_3_2)||L.instance.getRedDotById(dt.instance.ROOM_3_3),this.Img_social.visible=L.instance.getRedDotById(dt.ROOM_FRIEND_APPLY),this.red_mail.visible=L.instance.getRedDotById(dt.ROOM_MAIL)}onFirstRecharge(e){}initBtnBox(){this.sortIconView()}sortIconView(){}async onclickBtnHandler(e){switch(e){case this.btn_shop:fe.intance.setCurrentScene($.M_SCENE_SHOP);break;case this.btn_heroes:fe.intance.setCurrentScene($.M_SCENE_HERO);break;case this.btn_backpack:fe.intance.setCurrentScene($.M_SCENE_KNAPSACK);break;case this.btn_social:{fe.intance.setCurrentScene($.M_SCENE_FRIEND);break}case this.btn_mail:fe.intance.setCurrentScene($.M_SCENE_MAIL);break;case this.btn_guild:L.instance.playerDto.union>0?fe.intance.setCurrentScene($.M_SCENE_MYUNION,L.instance.playerDto.union):fe.intance.setCurrentScene($.M_SCENE_UNION);break;case this.btn_setting:H.intance.openModule(h.GameSettingLanguageDialog);break;case this.btn_fullScreen:ge.fullScreen(!ge.isFullScreen);break;case this.btn_friend:H.intance.openModule(h.FriendMemberDialog);break;case this.btn_asset:fe.intance.setCurrentScene($.M_SCENE_ASSET);break;case this.btn_scholarshop:fe.intance.setCurrentScene($.M_SCENE_SHOLARSHIP);break;case this.btn_wallet:H.intance.openModule(h.WalletDialog);break;case this.btn_leaderboard:fe.intance.setCurrentScene($.M_SCENE_RANK);break;default:N.instance.notice(d.instance.getLanguage(12));break}}openBuyDialog(e){switch(parseInt(e)){case 3:this.buyGoldBtn();break;case 4:this.clickRecharge();break}}clickRecharge(){if(Q.m_bInstantGame==!0){let e=d.instance.getLanguage(500004);se.instance().AlertByType(D.BASEALERTVIEW,e,D.YES);return}g.intance.event(y.EVENT_OPEN_MODULE,[h.RechargeDialog])}changeName(e){}buyGoldBtn(){g.intance.event(y.EVENT_OPEN_MODULE,[h.GetMoreDialog])}onDisable(){for(var e=1;e<6;e++)this["spine_"+e].off(Laya.Event.READY,this,this.onSkReady);g.intance.off(y.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),g.intance.off(y.ACCOUNTVO_UPDATE,this,this.updateExp),g.intance.off(y.ROLE_INFO_CHANGE,this,this.updateTopInfo),g.intance.off(y.UPDATE_ASSETS,this,this.updateAssets),g.intance.off(It.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),g.intance.off("CHANG_NAME",this,this.changeName),g.intance.off("open_buy",this,this.openBuyDialog),g.intance.off("msg_173",this,this.onFirstRecharge),g.intance.off(y.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}onEnterMatchRoom(e){e?Laya.timer.once(2e3,this,this.startBtnAni):Laya.timer.clear(this,this.startBtnAni)}};sn.M_B_FIRST_Open=!0,sn=p([WI("pxhiJrX5SkKKvyFr8uIlNA")],sn);var kd=class extends Laya.Box{};var{regClass:KI}=Laya,Ad=class extends kd{constructor(){super();this.isAddEvent=!1}onEnable(){g.intance.on(y.EVENT_Game_Delay,this,this.onGameDelay)}onGameDelay(e){var i=U.intance.getGeneralValueById(6),n=i[0],r=i[1];this.tf_delay.text=e+"ms",e>r?(this.img_delay.skin="res/common/comm/img_com_xinhao3.png",this.tf_delay.color=ui.RED):e>n?(this.img_delay.skin="res/common/comm/img_com_xinhao2.png",this.tf_delay.color=ui.YELLOW):(this.img_delay.skin="res/common/comm/img_com_xinhao1.png",this.tf_delay.color=ui.GREEN)}onDisable(){g.intance.off(y.EVENT_Game_Delay,this,this.onGameDelay)}};Ad=p([KI("AhgzWGWoRFetvSMsEOSkSg")],Ad);var Dd=class extends Laya.Box{};var{regClass:YI}=Laya,Md=class extends Dd{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.playerDto=e,this.playerDto&&(this.addEvent(),this.setCurrentOutPut())}set headSkin(e){this.img_head.skin=k.instance.getPlayerIcon(e)}async setCurrentOutPut(){if(!this.playerDto)return;let e=this.playerDto.icon;this.img_head.skin=k.instance.getPlayerIcon(e)}toDetail(){!this.playerDto||!this.playerDto.needTip||H.intance.openModule(h.RoleInfoDialog)}};Md=p([YI("OPT5t2CoSmuYp2zUJWwUWA")],Md);var Bd=class extends Laya.Box{};var{regClass:$I}=Laya,Pd=class extends Bd{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.isAddEvent=!0)}onEnable(){this.btn_join.visible=!1,this.img_underway.visible=!1}async onJoin(){if(this.roomDto.requirePass)H.intance.openModule(h.InputPwdDialog,[this.roomDto]);else{let l=!1;var e=U.intance.m_dicArenaDic.get(this.roomDto.arenaId),i=e.item[0];let c=L.instance.playerDto;if(c.fightHeroPk){let m=L.instance.m_heroData.heroVoDic.get(c.fightHeroPk);if(m){if(l=m.state==2,l){var n=await M.requestPost("wxgame/lease/heroInfo",{heroPk:c.fightHeroPk});if(n.info.remainTicketCount<=0&&n.info.ticketId!==0){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1175),D.YES,null);return}if(i!==n.info.ticketId&&n.info.ticketId!==0){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1178),D.YES,null);return}}if(m.state==1){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1176),D.YES,null);return}}else{ge.heroNotEnought();return}}else{ge.heroNotEnought();return}if(e.item&&e.item.length>1){var i=e.item[0],r=e.item[1],o=L.instance.m_packageData.getCountById(i),s=O.instance.arenaType;if(l&&n.info.ticketId==0&&s==1){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1299),D.YES,null);return}if(o<r&&(!l||n.info.ticketId==0)){ge.titickNotEnought(i);return}}let u=await M.requestPost("wxgame/room/join",{roomId:this.roomDto.roomId});K.instance.roomDto=u.roomDto,u.roomDto?H.intance.openModule(h.EnterRoomView):N.instance.notice(d.instance.getLanguage(135))}}set dataSource(e){super.dataSource=e,this.roomDto=e,this.roomDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.roomDto.leader.icon;this.playerIcon.headSkin=e,this.tf_name.text=this.roomDto.leader.name,this.tf_union.text=d.instance.getMultiLan(this.roomDto.leader.shortUnionName),this.tf_people.text='<font color="#25ff63">'+this.roomDto.memberCount+"</font>/"+this.roomDto.maxCount,this.img_coin.skin=k.instance.getMoneyIcon(this.roomDto.coinType);var i=U.intance.m_dicNodes.get(this.roomDto.nodeId);this.img_node.skin=k.instance.getNodeIcon(i.area),this.tf_node.text=d.instance.getLanguage(i.name),this.nodeDelaySign.dataSource=i}refreshTime(){this.roomDto.state==0?(this.btn_join.visible=!0,this.img_underway.visible=!1,this.tf_seconds.text=Ee.format(Math.round(this.roomDto.joinCd/1e3),":",!1),this.roomDto.joinCd-=1e3):(this.btn_join.visible=!1,this.img_underway.visible=!0,this.tf_seconds.text=Ee.format(Math.round(this.roomDto.fightEndTime/1e3),":",!1),this.roomDto.fightEndTime-=1e3)}};Pd=p([$I("YoCqj_dyTb2ZIAnhkSds6Q")],Pd);var Rd=class extends Laya.Box{};var{regClass:XI}=Laya,Ct=class extends Rd{init(t,e,i=28){var n,r;switch(t!=0?(r=At.getRandInRound(-30,30),e.bj?n=Ct.TYPE_Critical:n=Ct.TYPE_Normal):(r=At.getRandInRound(-30,30),n=Ct.TYPE_Miss),this.pos(r,-180),this.alpha=1,this.scale(1,1),this.tf_damage.visible=!1,this.box_crit.visible=!1,this.img_miss.visible=!1,n){case Ct.TYPE_Normal:this.tf_damage.text=t+"",this.showNormalDamageEffect();break;case Ct.TYPE_Critical:this.fontClip_damage.value=t+"",this.showCriticalDamageEffect();break;case Ct.TYPE_Miss:this.showMissEffect();break;default:break}}showNormalDamageEffect(){this.tf_damage.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,this.onComplete))}showCriticalDamageEffect(){this.box_crit.visible=!0,this.scale(.2,.2),Laya.Tween.to(this,{scaleX:1.3,scaleY:1.3,alpha:1,y:this.y-70},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1,alpha:0},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}))}showMissEffect(){this.img_miss.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}onComplete(){this.removeSelf(),Laya.Pool.recover("damageNumber",this)}};Ct.WHITE="#FFFFFF",Ct.ORANGE="#FFA500",Ct.RED="#FF0000",Ct.GREEN="#119c09",Ct.TYPE_Normal="Normal",Ct.TYPE_Miss="Miss",Ct.TYPE_Critical="Critical",Ct=p([XI("nHp6WKzZRIWvyhguidEfqg")],Ct);var Nd=class extends Laya.Box{};var{regClass:QI}=Laya,Od=class extends Nd{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.roomRankPlayerDto=e,this.roomRankPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.roomRankPlayerDto.id==L.instance.playerDto.pid?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.roomRankPlayerDto.rankNum<4?this.bg.skin="res/matchRank1/img_ranking_bg_"+this.roomRankPlayerDto.rankNum+".png":this.bg.skin="res/matchRank1/img_ranking_bg_4.png",this.roomRankPlayerDto.rankNum<4?(this.img_rankIcon1.skin="res/matchRank1/img_ranking_"+this.roomRankPlayerDto.rankNum+".png",this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.roomRankPlayerDto.id==L.instance.playerDto.pid?this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_me.png":this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1);let e=this.roomRankPlayerDto.icon;this.playerIcon.headSkin=e,this.playerIcon.gray=this.roomRankPlayerDto.die,this.tf_name.text=this.roomRankPlayerDto.name,this.tf_rank.text=this.roomRankPlayerDto.rankNum+"",this.tf_kill.text=this.roomRankPlayerDto.kill+"",this.tf_score.text=this.roomRankPlayerDto.score+""}};Od=p([QI("vpTYNMB4TfGFK2gaXiPAeg")],Od);var Hd=class extends Laya.Dialog{};var{regClass:ZI}=Laya,Ud=class extends Hd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_PANEL;this.m_iPositionType=B.CENTER;this.allItems=[]}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.goMatchEnd)}setOpenData(e){this.mcLanList.vScrollBarSkin="",e.forEach(n=>{if(n.id==L.instance.playerDto.pid){this.myRank=n;return}}),this.mcLanList.array=e;let i=-1;this.mcLanList.selectedIndex=i,this.showListEffect(),O.instance.myPlayer.hp>0?this.successAni.visible=!0:this.successAni.visible=!1,xe.instance.sendCustumEvent(43)}showListEffect(){this.allItems=[];for(var e=this.mcLanList.array.length,i=0;i<e;i++){var n=this.mcLanList.getCell(i);n?(n.skewX=.5,n.alpha=0,this.allItems.push(n),Laya.timer.once(100+i*500,this,this.startShowItem,[i],!1)):console.log("showListEffect _item is null")}}startShowItem(e){var i=this.allItems[e];if(i==null){console.log("no list item now");return}i.scaleX=0,i.alpha=0,this.mcLanList.tweenTo(e,500),Laya.Tween.to(i,{scaleX:1,alpha:1},100,Laya.Ease.circOut,null,0,!1)}goMatchEnd(){H.intance.openModule(h.MatchEndView,this.myRank),this.close()}onDisable(){this.removeEvent()}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};Ud=p([ZI("NlnToPI4TTuxIDhRKLPChg")],Ud);var Vd=class extends Laya.Dialog{};var{regClass:JI}=Laya,Fd=class extends Vd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_PANEL;this.m_iPositionType=B.CENTER}onEnable(){this.btn_next.on(Laya.Event.CLICK,this,this.setToAirdropScene),this.btn_buy.on(Laya.Event.CLICK,this,this.onBuy),this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.btn_help.on(Laya.Event.CLICK,this,this.onHelp),xe.instance.sendCustumEvent(43)}onHelp(){ge.commTipWithYes(d.instance.getLanguage("HELP"))}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}setToAirdropScene(){O.instance.arenaType=K.instance.matchDto.arenaType,fe.intance.setCurrentScene($.M_SCENE_AIRDROP)}onBuy(){fe.intance.setCurrentScene($.M_SCENE_SHOP,[3])}async onReceive(){if(this.welfareBagId>0){let e=await M.requestPost("wxgame/welfare/buy",{id:this.welfareBagId});e&&e.reward&&(H.intance.openModule(h.RewardGetDialog,e.reward),this.btn_receive.disabled=!0)}else N.instance.notice(d.instance.getLanguage(2e3))}setOpenData(e){var i=K.instance.matchDto;this.currRoomRankPlayerDto=e,e.rankNum<4?this.img_rankIcon.skin="res/matchEnd1/img_battleend_ranking_"+e.rankNum+".png":this.img_rankIcon.skin="res/matchEnd1/img_battleend_ranking_4.png",this.list_reward.vScrollBarSkin="",this.tf_rank.text=e.rankNum+"";var n=[],r=K.instance.reward;r.forEach(w=>{var x=new Fe(w.id);x.newAddCnt=w.count,n.push(x)});var o=this.list_reward.spaceX,s=this.list_reward.itemTemplate.width,l=n.length,c=l*s+o*(l-1);this.list_reward.width=c;var u=!1,m=!1;i.arenaType==1&&(i.coinType==ke.TYPE_TOX&&(this.welfareBagId=U.intance.getWelfareBagId(e.rankNum),this.welfareBagId>0&&e.lease==0&&(u=!0)),m=e.lease==0),u?(this.btn_receive.visible=!0,this.btn_receive.disabled=!0,this.btn_next.visible=!0,this.btn_buy.visible=!1,this.reward_cp.visible=!0,this.list_reward.x=this.btn_next.x+this.btn_next.width/2-c/2):(this.btn_receive.visible=!1,this.reward_cp.visible=!1,this.btn_next.visible=!0,m?this.btn_buy.visible=!0:(this.btn_buy.visible=!1,this.btn_next.x=this.box_outside.width-this.btn_next.width>>1),this.list_reward.x=this.box_outside.width-this.list_reward.width>>1),this.list_reward.array=n,this.list_reward.visible=!0;let v=-1;this.list_reward.selectedIndex=v}onDisable(){this.removeEvent(),K.instance.clearData()}removeEvent(){}};Fd=p([JI("y-nP_lRrQVef9uttVJ0rDw")],Fd);var zd=class extends Laya.Box{};var{regClass:eE}=Laya,Gd=class extends zd{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.roomPlayer=e,!this.roomPlayer){this.img_back.skin="res/matchReady/img_jjc_0.png",this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){if(this.img_back.skin="res/matchReady/img_jjc_1.png",this.tf_name.text=Ne.abbreviateString(this.roomPlayer.name),this.box_show.visible=!0,this.destroyed)return;let e=this.roomPlayer.icon;this.playerIcon.headSkin=e,this.img_sign.visible=this.roomPlayer.leader>0,this.tf_union.text=d.instance.getMultiLan(this.roomPlayer.shortUnionName)}toDetail(){this.heroVo.id}};Gd=p([eE("PiGdVEY9T-K8CCfWLChS0w")],Gd);var ct=class ct{constructor(){}static pointEquil(t,e){return t&&e&&t.x==e.x&&t.y==e.y}static isEmpty(t){for(let e in t)return!1;return!0}static showTxtEffect(t,e){let i=parseInt(t.text),n=Math.floor((e-i)/5),r=0;Laya.timer.loop(60,null,o);let o=function(){r++,i+=n,r>=5&&(i=e,Laya.timer.clear(null,o)),t.text=i+""}}static showTxtFlash(t){let e=t.color;t.color=ct.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,i),50);let i=function(){t.color=ct.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,n),50)},n=function(){t.color=ct.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,r),50)},r=function(){t.color=ct.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,o),50)},o=function(){t.color=ct.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,s),50)},s=function(){t.color=ct.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,l),50)},l=function(){t.color=e}}static getProKey(t){return ct.PRO_DIC[t]?ct.PRO_DIC[t]:t}static getIconName(t){return ct.proList[t]}static clonePoint(t){return new Laya.Point(t.x,t.y)}static copyObj(t){let e={};for(let i in t)e[i]=t[i];return e}static mergeObj(t,e){for(let i in e)t[i]?t[i]=parseFloat(t[i])+parseFloat(e[i]):t[i]=e[i];return t}static checkHit(t){return t.visible&&t.mouseX>0&&t.mouseY>0&&t.mouseX<=t.width&&t.mouseY<=t.height}static separateObj(t,e){if(e)for(let i in e)t[i]&&(t[i]=parseFloat(t[i])-parseFloat(e[i]));return t}static toFixed(t,e=1){if((t+"").indexOf(".")!=-1){let i=parseFloat(t).toFixed(e);return e==1&&i.charAt(i.length-1)=="0"&&(i=parseInt(i)+""),i}return t+""}static formatResWith(t){return t>=1e12?Math.floor(t/1e12)+ct.RES_W[3]:t>=1e9?Math.floor(t/1e9)+ct.RES_W[2]:t>=1e6?Math.floor(t/1e6)+ct.RES_W[1]:t>=1e4?Math.floor(t/1e3)+ct.RES_W[0]:t+""}static formatNumWithSign(t,e=","){t=Math.floor(t);let i=t+"",n=1,r=[];for(let o=i.length-1;o>=0;o--)r.push(i.charAt(o)),n>0&&n%3==0&&r.push(e),n++;return r.reverse(),r[0]==e&&r.shift(),r.join("")}static autoRecyle(t,e=!1){t.on(Laya.Event.COMPLETE,null,i,[t]),t.isPlaying||t.play(1,!1);let i=function(n){n.off(Laya.Event.COMPLETE,null,i),n.stop(),n.removeSelf(),e&&Laya.Pool.recover("Animation",n)}}static createEllipse(t,e,i,n,r,o=1,s="#ffffff"){let l=[],c=n>r?o/n:o/r;for(let u=0;u<2*Math.PI;u+=c)l.push(e+n*Math.cos(u)-n/2,i+r*Math.sin(u));return t&&t.drawPoly(l.shift(),l.shift(),l,s),l}};ct.blackFilter=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.78,0]),ct.blackFilter2=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.5,0]),ct.qualityColors=["#78cefd","#78cefd","#78cefd","#d5a8ff","#fdd378","#ffa8a8","#ffa8a8","#ffa8a8"],ct.COLORS=["#69ff4c","#FFFFFF"],ct.PRO_DIC={HP:"hp",ATK:"attack",DEF:"defense",SPEED:"speed",RES:"resilience",CDMG:"critDamage",CDMGR:"critDamReduct"},ct.proList={hp:"HP",attack:"ATK",defense:"DEF",speed:"SPEED",hit:"hit",dodge:"dodge",crit:"crit",critDamage:"CDMG",resilience:"RES",critDamReduct:"CDMGR"},ct.RES_W=["K","M","B","T"];var ga=ct;var jd=class extends Laya.Sprite{};var{regClass:tE}=Laya,qd=class extends jd{constructor(){super();this.isAddEvent=!1;this.isMe=!1;this.inGround=!1;this.moveSpeed=6;this._speed=6;this.biasSpeed=0;this.lastDirectStr="left";this.directStr="left";this._roleDirection=-1;this.inControl=!1;this.isStop=!1;this.isLockAni=!1;this.aniChange=!1;this.displacementType=0;this.timeStamp=0;this.currArea=0;this.flashCount=0;this.lastX=-1;this.lastY=-1;this.lastRoleDirection1=-1;this.lastSpeed1=-1;this.lastArea=-1}get speed(){return this._speed}set speed(e){this._speed=e,this.biasSpeed=Math.round(this.speed*Math.sin(45*Math.PI/180)),console.log("Role speed2: ",this.speed,this.biasSpeed,this.roomPlayerDto.id)}get roleDirection(){return this._roleDirection}set roleDirection(e){this._roleDirection=e,e!=-4&&(e>270||e<90?this.directStr="right":e>90&&e<270&&(this.directStr="left"),this.lastDirectStr!=this.directStr&&(this.heroBox.scaleX=this.directStr=="left"?1:-1,this.lastDirectStr=this.directStr))}set myRoleDirection(e){if(this.roleDirection!=e){this.roleDirection=e;let i=28+Math.sin(e*(Math.PI/180))*(28/4),n=24+Math.sin(e*(Math.PI/180))*(14/2),r=this.img_d.width/2+Math.cos(e*(Math.PI/180))*(this.img_d.width/2),o=this.img_d.height/2+ +Math.sin(e*(Math.PI/180))*(this.img_d.height/2);this.img_arrow.pos(r,o),this.img_gj.rotation=e+90,this.img_arrow.rotation=e,this.img_arrow.width=i,this.img_arrow.height=n}}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(this.roomPlayerDto=e,!!this.roomPlayerDto){if(this.pos(this.roomPlayerDto.x,this.roomPlayerDto.y),this.addEvent(),this.speed=this.roomPlayerDto.speed,this.currArea=this.roomPlayerDto.area,console.log("MatchHeroSpr speed: "+this.speed),this.heroVo=new Dt,this.heroVo.id=this.roomPlayerDto.heroId,this.heroVo.color=this.roomPlayerDto.heroColor,this.moveSpeed=this.heroVo.heroItem.mov/30,this.setCurrentOutPut(),this.updataBlood(),this.roomPlayerDto.hp<=0){this._isDead=!0,this.setDead();return}this.addDiquanAndBaoqi()}}setDead(){console.log("MatchHeroSpr setDead: "+this.isMe),this._isRealDead=!0,this.alpha=.5,this.img_deadImg.visible=!0;var e=this.img_deadImg.y;this.tf_name.visible=!1,this.box_blood.visible=!1,this.spineNodeBack.visible=!1,this.spineNodeFront.visible=!1,this.heroSk.visible=!1,this.img_deadImg.y=0,this.img_deadImg.scale(0,0),this.getComponent(Laya.RigidBody).mask=1;var i=this;Laya.Tween.to(this.img_deadImg,{y:e,scaleX:1,scaleY:1},400,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){i.isMe&&g.intance.event(y.EVENT_GameScene_Gray)}))}updataBlood(){this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}addDiquanAndBaoqi(){if(console.log("addDiquanAndBaoqi"),!this.destroyed){var e=this.heroVo.heroItem.level,i=this.heroVo.heroItem.level;if(!this.baoqiSpineSk){if(i<4)return;this.baoqiSpineSk=new Laya.SpineSkeleton,this.spineNodeBack.addChild(this.baoqiSpineSk),this.baoqiSpineSk.animationName="animation";var n=O.instance["baoqiEffect"+i];this.baoqiSpineSk.templet=n}}}setCurrentOutPut(){this.roomPlayerDto.hp>0&&(this.heroSk.dataSource=this.heroVo),this.tf_name.color=ga.qualityColors[this.heroVo.heroItem.quality-1],this.tf_name.text=Ne.abbreviateString(this.roomPlayerDto.name),this.img_country.skin=k.instance.getCountryIcon(this.roomPlayerDto.country+""),L.instance.playerDto.pid==this.roomPlayerDto.id?this.myRoleDirection=this.roomPlayerDto.dire:this.roleDirection=this.roomPlayerDto.dire}pos(e,i,n){if(super.pos(e,i,n),this.roomPlayerDto&&this.roomPlayerDto.id){var r=O.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);if(r){var o=K.instance.currArenaItem.mapid;o==1002&&(e-=160,i-=160);var s=e*216/3040,l=i*216/3040;r.pos(s,l,n)}}return this}set visible(e){if(super.visible=e,this.roomPlayerDto&&this.roomPlayerDto.id){var i=O.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);i&&(i.visible=e)}}set alpha(e){if(super.alpha=e,this.roomPlayerDto&&this.roomPlayerDto.id){var i=O.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);i&&(i.alpha=e)}}onAwake(){}backAni(){}idle(){console.log(`${this.roomPlayerDto.id} 播放 待机 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Xe.ANI_daiji,!0,!1)}walk(){console.log(`${this.roomPlayerDto.id} 播放 走动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Xe.ANI_xingzou,!0,!1)}run(){console.log(`${this.roomPlayerDto.id} 播放 跑动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Xe.ANI_shanbi,!0,!1)}playAttackAnimation(e,i,n,r){if(!this._isDead){var o=U.intance.m_dicSkills.get(e);if(console.log(`${this.roomPlayerDto.id} 攻击 , 播放 ${e} 动画`),o.type==1){if(i&&O.instance.onSendAnimation(e,Xe.TYPE_GONGJI),this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Xe.ANI_gongji+s,!1)}if(i){var l=O.instance.getAttackTarget(o);if(l&&l.length>0){var c=l[0];c.roomPlayerDto.hp>0&&Laya.timer.frameOnce(1,this,this.onRealAttack,[o,c.roomPlayerDto.id])}}Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,r(),this.aniChange=!0}),O.instance.playSound(1)}else if(o.type==2){if(i&&O.instance.onSendAnimation(e,Xe.TYPE_TI),this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Xe.ANI_ti+s,!1)}i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(30,this,()=>{this.isStop=!1,r(),this.aniChange=!0}),O.instance.playSound(2)}else if(o.type==6)i&&O.instance.onSendAnimation(e,Xe.TYPE_DAZHAO),this.isStop=!0,this.heroSk.isReady&&(console.log("EnumHero.ANI_dazhao: "+Xe.ANI_dazhao),this.heroSk.sk.play(Xe.ANI_dazhao,!1)),i&&Laya.timer.frameOnce(30,this,this.onRealAttack,[o]),Laya.timer.frameOnce(70,this,()=>{this.isStop=!1,r(),this.aniChange=!0}),O.instance.playSound(2);else if(o.type==5){var u=[];if(this.displacementType=o.displacementType,i){var m=o.displacement>0?o.displacement:50;u=At.rollCharacterByDir(this.x,this.y,this.roleDirection,m),O.instance.onSendAnimation(e,Xe.TYPE_FEI,-1,u[0],u[1])}else u[0]=n.get("newX"),u[1]=n.get("newY");if(this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Xe.ANI_ti+s,!1)}if(this.heroVo.heroItem.race!=4){var v=O.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=v,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(5,this,this.onRoll,[u]),Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,this.displacementType=0,r(),this.aniChange=!0}),O.instance.playSound(3)}else if(o.type==3){var u=[];if(i){var m=o.displacement>0?o.displacement:350;u=At.rollCharacterByDir(this.x,this.y,this.roleDirection,m),O.instance.onSendAnimation(e,Xe.TYPE_HUA,-1,u[0],u[1])}else u[0]=n.get("newX"),u[1]=n.get("newY");if(this.getComponent(Laya.BoxCollider).isSensor=!0,this.isStop=!0,this.heroSk.isReady&&this.heroSk.sk.play(Xe.ANI_hua,!1),this.heroVo.heroItem.race!=4){var v=O.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=v,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}Laya.timer.frameOnce(5,this,this.onRoll,[u]),Laya.timer.frameOnce(20,this,()=>{this.getComponent(Laya.BoxCollider).isSensor=!1,this.isStop=!1,r(),this.aniChange=!0}),O.instance.playSound(3)}else if(o.type==4){i&&(this.isLockAni=!0,O.instance.onSendAnimation(e,Xe.TYPE_DANG)),this.heroSk.isReady&&this.heroSk.sk.play(Xe.ANI_dang,!1),this.dunpaiSk||(this.dunpaiSk=O.instance.dunpaiTemplet.buildArmature(0),this.dunpaiSk.x=-45,this.skNode.addChild(this.dunpaiSk)),this.dunpaiSk.play(0,!0);var w=2e3,x=o.buff;if(x.length>2){var b=x[2],T=U.intance.m_dicBuffs.get(b);w=parseInt(T.time+"")}Laya.timer.once(w,this,()=>{this.isLockAni=!1,this.dunpaiSk&&(this.dunpaiSk.stop(),this.dunpaiSk.visible=!1),r(),this.aniChange=!0}),O.instance.playSound(2)}}}onRoll(e){this.inGround||Laya.Tween.to(this,{x:e[0],y:e[1]},330)}onHuaComplate(){this.huaSpineSk.stop(),this.huaSpineSk.visible=!1}onRealAttack(e,i=-1){if(console.log("onRealAttack",i),i>0)O.instance.onSendAttack(i,1,e.id);else if(e.type==6){var n=O.instance.getAttackTarget(e);n&&n.length>0&&n.forEach(o=>{o&&o.roomPlayerDto.hp>0&&O.instance.onSendAttack(o.roomPlayerDto.id,1,e.id)})}else{var n=O.instance.getAttackTarget(e);if(n&&n.length>0){var r=n[0];r.roomPlayerDto.hp>0&&O.instance.onSendAttack(r.roomPlayerDto.id,1,e.id)}}}playBeijiAnimation(e){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 被击 动画`),this.heroSk.isReady&&this.heroSk.sk.play(Xe.ANI_beiji,!1),Laya.timer.once(1e3,this,()=>{e()}))}playChuShengAnimation(e){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 出生 动画`),this.heroSk.isReady&&this.heroSk.sk.play(Xe.ANI_ruchang,!1),Laya.timer.once(1e3,this,()=>{e()}))}attack(e=0,i=!0,n=null){if(console.log(`${this.roomPlayerDto.id} 攻击 s`),this._isAttacking||this._isDead){console.log(`${this.roomPlayerDto.id} 没有靠近目标或正在攻击中或技能冷却中或已死亡，无法攻击`);return}this._isAttacking=!0,this.playAttackAnimation(e,i,n,()=>{this._isAttacking=!1})}takeDamage(e,i){var n=e.skill,r=e.attackValue,o=e.defHp;console.log(`${this.roomPlayerDto.id} 受到 ${r} 伤害s`),!this._isDead&&(this.roomPlayerDto.hp=o,console.log(`${this.roomPlayerDto.id} 受到 ${r} 伤害`),this.updateHealthBar(i),this.showDamageLabel(n,r,e),this._isAttacking&&(console.log(`${this.roomPlayerDto.id} 正在攻击中，受到攻击中断攻击 暂时没有中断攻击`),Laya.timer.clear(this,this.onRealAttack),this._isAttacking=!1),this._isTakingDamage=!0,this.isLockAni=!0,this.beijiSk||(this.beijiSk=O.instance.beijiTemplet.buildArmature(0),this.skNode.addChild(this.beijiSk)),this.beijiSk.play(0,!1),this.playBeijiAnimation(()=>{this.beijiSk&&(this.beijiSk.stop(),this.beijiSk.visible=!1),this._isTakingDamage=!1,this.isLockAni=!1,this.backAni()}))}die(e){if(console.log(`${this.roomPlayerDto.id} 死亡s`),!this._isDead){console.log(`${this.roomPlayerDto.id} 死亡`);var i=At.judgePosition(e.x-this.x,e.y-this.y);this.roleDirection=i,this._isDead=!0,this.heroSk.isReady&&this.heroSk.sk.play(Xe.ANI_siwang,!1),Laya.timer.once(2e3,this,this.setDead)}}applySkillEffect(e){console.log(`${this.roomPlayerDto.id} 受到技能效果: ${e}`)}updateHealthBar(e){this.roomPlayerDto.hp<=0&&(this.roomPlayerDto.hp=0,this.die(e)),this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}showDamageLabel(e,i,n){if(i.length>1)for(var r=U.intance.m_dicSkills.get(e),o=r.section,s=o,l=0;l<i.length;l++){var c=i[l];this.showDamageLabelDetailDelay(c,s[l][1],n)}else i.length==1?this.showDamageLabelDetailDelay(i[0],100,n):this.showDamageLabelDetailDelay(0,100,n);var u=this;if(n.allAtkValue!=0){var m=200;this.originalBlendMode=this.img_hp_bg.blendMode,this.flashCount=0,Laya.timer.loop(m,this,this.flashBlood)}}flashBlood(){var e=2;this.flashCount<e?this.img_hp_bg.blendMode===this.originalBlendMode?this.img_hp_bg.blendMode="lighter":(this.img_hp_bg.blendMode=this.originalBlendMode,this.flashCount++):(this.img_hp_bg.blendMode=this.originalBlendMode,Laya.timer.clear(this,this.flashBlood))}showDamageLabelDetailDelay(e,i,n){Laya.timer.once(i,this,this.showDamageLabelDetail,[e,n],!1)}showDamageLabelDetail(e,i){var n=Laya.Pool.getItemByCreateFun("damageNumber",O.instance.damageNumPrefab.create,O.instance.damageNumPrefab);n.init(e,i),this.addChild(n)}onSendMoveData(){if(!this._isDead){var e=this.speed,i=this.roleDirection,n=this.x,r=this.y;if(Math.abs(n-this.lastX)>2||Math.abs(r-this.lastY)>2||this.lastRoleDirection1!=i||this.lastSpeed1!=e||this.lastArea!=this.currArea){this.pos(n,r),this.lastX=n,this.lastY=r,this.lastRoleDirection1=i,this.lastSpeed1=e,this.lastArea=this.currArea;var o=L.instance.m_serverTime;this.timeStamp=o,O.instance.onSendMove(o,this.roomPlayerDto.id,e,i,n,r,this.currArea)}}}beiTui(e){var i=this.roomPlayerDto.id,n=this.x,r=this.y;if(Math.abs(n-this.lastX)>2||Math.abs(r-this.lastY)>2){this.lastX=n,this.lastY=r;var o=L.instance.m_serverTime;this.timeStamp=o,O.instance.onSendTargetMove(o,e,i,n,r)}}onPushMoveData(e,i,n,r,o,s){if(this.roleDirection=n,this.speed!=i&&(this.speed=i,i==0?this.idle():this.walk()),this.currArea!=s&&(this.currArea=s),e<=this.timeStamp){console.log("位置数据忽略："+e+" < "+this.timeStamp);return}(Math.abs(r-this.lastX)>1||Math.abs(o-this.lastY)>1)&&(this.pos(r,o),this.lastX=r,this.lastY=o)}onPushTargetMoveData(e,i,n){if(e<=this.timeStamp){console.log("推人数据忽略："+e+" < "+this.timeStamp);return}(Math.abs(i-this.lastX)>2||Math.abs(n-this.lastY)>2)&&(this.pos(i,n),this.lastX=i,this.lastY=n)}sendToServer(e){}initBirth(e){e?this.createBirthSpine():this.onPlayBirthEnd()}createBirthSpine(){this.heroSk.visible=!1,this.tf_name.visible=!1,this.box_blood.visible=!1,this.chushengBackSpineSk||(this.chushengBackSpineSk=new Laya.SpineSkeleton,this.spineNodeBack.addChild(this.chushengBackSpineSk)),this.chushengFrontSpineSk||(this.chushengFrontSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.chushengFrontSpineSk)),this.chushengBackSpineSk.on(Laya.Event.READY,this,this.onBirthReady);var e=O.instance.ruchangEffects[this.getRandomAnimationType()];this.destroyed||(this.chushengBackSpineSk.animationName="animation2",this.chushengBackSpineSk.templet=e,this.chushengFrontSpineSk.animationName="animation1",this.chushengFrontSpineSk.templet=e)}getRandomAnimationType(){return Math.floor(Math.random()*3)}onBirthReady(){Laya.timer.once(500,this,this.onPlayBirth1)}onPlayBirth1(){this.isLockAni=!0,this.heroSk.visible=!0,this.playChuShengAnimation(()=>{this.isLockAni=!1,this.aniChange=!0}),this.chushengBackSpineSk.visible=!0,this.chushengBackSpineSk.play("animation2",!1),this.chushengFrontSpineSk.visible=!0,this.chushengFrontSpineSk.play("animation1",!1),Laya.timer.once(1300,this,this.onPlayBirthEnd)}onPlayBirthEnd(){this.chushengBackSpineSk&&(this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),this.chushengBackSpineSk.destroy(),this.chushengBackSpineSk.removeSelf()),this.chushengFrontSpineSk&&(this.chushengFrontSpineSk.destroy(),this.chushengFrontSpineSk.removeSelf()),this.box_d.visible=!0,this.tf_name.visible=!0,this.box_blood.visible=!0}onDisable(){this.chushengBackSpineSk&&this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};qd=p([tE("JIaWsVNzTK2dJIUcev60tQ")],qd);var Kd=class extends Laya.Box{};var{regClass:iE}=Laya,Yd=class extends Kd{init(){var t=K.instance.currArenaItem.coinType;this.img_bing.skin="gameIcon/map/1001/img_bing_"+t+".png"}set dataSource(t){super.dataSource=t}};Yd=p([iE("W3qDvbUmSa2SFKJ5iEmjsg")],Yd);var $d=class extends Laya.Box{};var{regClass:aE}=Laya,Xd=class extends $d{init(){var t=K.instance.currArenaItem.coinType;this.img_bing.skin=k.instance.getItemIcon(t),O.instance.allOrders||(O.instance.allOrders=[]),O.instance.allOrders.push(this.img_mtl)}set dataSource(t){super.dataSource=t}};Xd=p([aE("UmH7VSkYTd6D8QA2Eu2OYw")],Xd);var Qd=class extends Laya.Box{};var{regClass:nE}=Laya,Zd=class extends Qd{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){this.roomPlayerDto=e,this.roomPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}setCurrentOutPut(){this.tf_rank.text=this.roomPlayerDto.rankNum+"";let e=this.roomPlayerDto.icon;this.playerIcon.headSkin=e,this.tf_name.text=Ne.abbreviateString(this.roomPlayerDto.name),this.tf_kill.text=this.roomPlayerDto.kill+"",this.roomPlayerDto.id==O.instance.myPlayer.id?(this.img_bg.skin="res/match1/img_ph2.png",this.tf_rank.color="#000000",this.tf_name.color="#ffe64b",this.img_kill.filters=[ge.YELLOW],this.tf_kill.color="#ffe64b",this.box_item.x=6):(this.img_bg.skin="res/match1/img_ph.png",this.tf_rank.color="#ffffff",this.tf_name.color="#ffffff",this.img_kill.filters=null,this.tf_kill.color="#ffffff",this.box_item.x=15)}};Zd=p([nE("XTVFXeI_R768e0Elv_ePAA")],Zd);var Jd=class extends Laya.Scene{};var{regClass:rE}=Laya,eh=class extends Jd{constructor(){super(...arguments);this.type=1}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP}onOpened(e){this.type=e}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}onEnable(){console.log("MatchReadyRT onEnable"),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_random.on(Laya.Event.CLICK,this,()=>{this.generateName()}),this.btn_enter.on(Laya.Event.CLICK,this,()=>{var e=this.input_username.text;if(console.log("phyBtn"),e==""){alert("用户名不能为空");return}rt.instance.openId=e,rt.instance.initSocket()})}generateRandomName(e){let i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n="";for(let r=0;r<e;r++){let o=Math.floor(Math.random()*i.length);n+=i.charAt(o)}return n}generateName(){this.input_username.text=this.generateRandomName(8)}onDestroy(){}};eh=p([rE("mOlMVGD3TRCKNoddhyUGLw")],eh);var th=class extends Laya.Dialog{};var{regClass:oE}=Laya,ih=class extends th{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_PANEL;this.m_iPositionType=B.CENTER}onEnable(){}onOpened(e){this.updateBattleCD()}updateBattleCD(){var e=K.instance.matchDto.startTime-K.instance.matchDto.nowTime;K.instance.startCoolDownTime=Math.round(e/1e3),K.instance.startCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):(Laya.timer.clear(this,this.onSetCoolTime),this.close())}onSetCoolTime(){K.instance.startCoolDownTime>=0?(this.fontClip_reduceTime.value=K.instance.startCoolDownTime+"",this.scaleEffect(),K.instance.startCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),this.onMatchStartEnd())}scaleEffect(){var e=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(e.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}onMatchStartEnd(){Laya.timer.once(5e3,this,this.close)}onDisable(){this.removeEvent(),K.instance.stopAll=!1}removeEvent(){Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};ih=p([oE("xpPoFvX_SqiYMO5AaOwGyA")],ih);var ah=class extends Laya.Box{};var{regClass:sE}=Laya,nh=class extends ah{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.itemVo&&(this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=this.itemVo)}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===St.TYPE_Equipment?H.intance.openModule(h.EquipDetailDialog,this.itemVo):H.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};nh=p([sE("WXpxCvqlQ2mKdcJCYlqOeg")],nh);var rh=class extends Laya.Scene{};var{regClass:lE}=Laya,oh=class extends rh{constructor(){super(...arguments);this.liveNum=0}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP,O.instance.init()}onOpened(e){var i=K.instance.matchDto.startTime-K.instance.matchDto.nowTime;i>0&&H.intance.openModule(h.MatchReadyView);var n=K.instance.matchDto.arenaId,r=U.intance.m_dicArenaDic.get(n);K.instance.currArenaItem=r;var o=K.instance.currArenaItem.mapid,s=Laya.loader.getRes("gameIcon/map/map_"+o+".lh");this.img_smallMap.skin="res/match1/img_map_"+o+".png";var l=Laya.Pool.getItemByCreateFun("MatchMap1001",s.create,s);l.init(),O.instance.gameMap=l,O.instance.box_players=l.box_players,this.matchBox.removeChildren(),this.matchBox.addChild(l);var c=L.instance.playerDto;this.tf_roleName.text=c.name;let u=c.icon;this.playerIcon.headSkin=u,O.instance.initMatch(this,this.onInitEnd),xe.instance.sendCustumEvent(42);var m=K.instance.roomDto.nodeId;if(m){var v=U.intance.m_dicNodes.get(m);this.nodeDelaySign.dataSource=v,this.nodeDelaySign.startTest()}}onInitEnd(e){e.updateSkill(),e.updateKill(),e.updateBattleCD(),Laya.timer.frameLoop(10,e,e.updateCharactersOrder)}onRestoreData(){O.instance.updateMatch(this,this.onInitEnd)}updateSkill(){var e=O.instance.myPlayer,i=U.intance.m_dicHeros.get(e.heroId);console.log("updateSkill"),console.log(i.skillIds);for(var n=i.skillIds.length,r=0;r<n;r++){var o=i.skillIds[r],s=U.intance.m_dicSkills.get(o),l=this["matchSkill"+(r+1)];l.keyNum=r+1,l.dataSource=s;var c=e.skillCd.get(o);c&&l.updateSkillCooldown(c),l.updateGlobalCooldown(e.commonCd),l.visible=!0}}updateKill(){O.instance.myPlayer&&(this.tf_kill.text=O.instance.myPlayer.kill+""),this.list_rank.array=this.getSortPlayer(O.instance.matchHeroDic.values),this.tf_remainer.text=this.liveNum+"",this.tf_total.text="/ "+O.instance.matchHeroDic.values.length}getSortPlayer(e){var i=e.slice(),n=i.sort((s,l)=>l.score-s.score),r=[];this.liveNum=0;var o=1;return n.forEach(s=>{s.rankNum=o,s.hp>0&&this.liveNum++,(o<4||s.id==L.instance.playerDto.pid)&&r.push(s),o++}),r}updateBattleCD(){K.instance.matchCoolDownTime=Math.round(K.instance.matchDto.remainderCd/1e3),K.instance.matchCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):Laya.timer.clear(this,this.onSetCoolTime)}onSetCoolTime(){K.instance.matchCoolDownTime>=0?(this.fontClip_reduceTime.value=Ee.format(K.instance.matchCoolDownTime,":",!1),K.instance.matchCoolDownTime>90?this.fontClip_reduceTime.skin="res/match1/fontClip_1.png":K.instance.matchCoolDownTime>10?this.fontClip_reduceTime.skin="res/match1/fontClip_2.png":(this.fontClip_reduceTime.skin="res/match1/fontClip_3.png",this.scaleEffect()),K.instance.stopAll||K.instance.matchCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.once(1e4,this,this.checkMatchRankData))}checkMatchRankData(){K.instance.checkMatchRankData()}scaleEffect(){var e=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(e.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}updateCharactersOrder(){O.instance.allOrders.sort((e,i)=>e.y-i.y);for(let e=0;e<O.instance.allOrders.length;e++)O.instance.allOrders[e].zOrder=e}onFirstBloodPush(e){var i=e.pid,n=O.instance.matchHeroDic.get(i);let r=n.icon;this.img_firstBlood_head.skin=k.instance.getPlayerIcon(r),this.img_firstBlood.visible=!0,this.img_firstBlood.alpha=0,this.img_firstBlood.y=-200,Laya.Tween.to(this.img_firstBlood,{y:92,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood1))}onFirstBlood1(){this.zi_firstBlood.scale(1,1),Laya.Tween.to(this.zi_firstBlood,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood2))}onFirstBlood2(){Laya.Tween.to(this.zi_firstBlood,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood3))}onFirstBlood3(){Laya.Tween.to(this.img_firstBlood,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood4),1500)}onFirstBlood4(){this.img_firstBlood.visible=!1}onMutiKillPush(e){this.fontClip_kill.value=e.kill+"";var i=!1;e.kill>=3?(i=!0,this.img_mutiKill.skin="res/match1/img_kill_3s.png"):this.img_mutiKill.skin="res/match1/img_kill_2s.png";var n=e.pid,r=O.instance.matchHeroDic.get(n);let o=r.icon;this.img_mutiKill_head.skin=k.instance.getPlayerIcon(o),this.img_mutiKill.visible=!0,this.img_mutiKill.alpha=0,this.img_mutiKill.y=-200,Laya.Tween.to(this.img_mutiKill,{y:175,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill1,[i]))}onMutiKill1(e){this.zi_mutiKill.scale(1,1),e?Laya.Tween.to(this.zi_mutiKill,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill2)):this.onMutiKill3(2e3)}onMutiKill2(){Laya.Tween.to(this.zi_mutiKill,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill3,[1500]))}onMutiKill3(e){Laya.Tween.to(this.img_mutiKill,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill4),e)}onMutiKill4(){this.img_mutiKill.visible=!1}onGameSceneGray(){this.matchBox.gray=!0}onEnable(){console.log("MatchScene onEnable"),g.intance.on(y.UPDATE_KILL_NUM,this,this.updateKill),g.intance.on(y.EVENT_RESTORE_DATA,this,this.onRestoreData),g.intance.on(y.EVENT_FirstBlood,this,this.onFirstBloodPush),g.intance.on(y.EVENT_MutiKill,this,this.onMutiKillPush),g.intance.on(y.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.on(Laya.Event.FOCUS,this,this.onWindowFocus)}onWindowFocus(){O.instance.sendRestoreData()}onDisable(){g.intance.off(y.UPDATE_KILL_NUM,this,this.updateKill),g.intance.off(y.EVENT_RESTORE_DATA,this,this.onRestoreData),g.intance.off(y.EVENT_FirstBlood,this,this.onFirstBloodPush),g.intance.off(y.EVENT_MutiKill,this,this.onMutiKillPush),g.intance.off(y.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.off(Laya.Event.FOCUS,this,this.onWindowFocus),Laya.timer.clearAll(this)}};oh=p([lE("sX0uLhOQSmm8b-_sHNqe5w")],oh);var{regClass:cE,property:Sse}=Laya,Xs=class extends Laya.Script{constructor(){super()}onAwake(){}onStart(){O.instance.playMusic()}onLateUpdate(){O.instance.moveGameWindow()}};Xs=p([cE("Ply19emtSrqrBk7nHXToAQ")],Xs);var sh=class extends Laya.Box{};var{regClass:uE}=Laya,lh=class extends sh{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.txt_num.text="",this.img_icon.skin=k.instance.getMatchSkillIcon(this.skillItem.icon))}};lh=p([uE("iwuFUCOEQRyOjxpy6IkQ2Q")],lh);var ch=class extends Laya.Button{};var{regClass:pE}=Laya,uh=class extends ch{constructor(){super();this.isAddEvent=!1;this.isCanClick=!0;this.skillCooldown=5e3;this.thisGlobalCooldown=1e4;this.globalCooldown=1e4;this.remainingSkillCooldown=0;this.remainingGlobalCooldown=0}onEnable(){this.addEvent()}addEvent(){this.isAddEvent||(g.intance.on(y.EVENT_CLICK_NUM,this,this.onNumberClick),g.intance.on(y.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.onSkillButtonClick),this.on(Laya.Event.MOUSE_UP,this,this.onSkillButtonUp))}onNumberClick(e){e==this.keyNum&&this.onSkillButtonClick(null)}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.isBig=this.skillItem.icon=="1001",this.skillIconItem.dataSource=this.skillItem,this.skillCooldown=this.skillItem.cd,this.thisGlobalCooldown=this.skillItem.commCd,Laya.timer.frameLoop(1,this,this.updateCooldown))}onMouseClick(e){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=0;O.instance.playSound(1),Laya.timer.once(1e3,this,()=>{this.isCanClick=!0})}}onSkillButtonUp(e){e&&e.stopPropagation(),on.clearClickFilter(this)}onSkillButtonClick(e){e&&e.stopPropagation(),this.remainingSkillCooldown<=0&&this.remainingGlobalCooldown<=0?(console.log("技能释放！"),Laya.Tween.to(this,{scaleX:.8,scaleY:.8},100,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},100,Laya.Ease.linearNone)})),O.instance.myHeroSpr.attack(this.skillItem.id),this.updateSkillCooldown(this.skillCooldown),g.intance.event(y.EVENT_UPDATE_GLOBAL_COOL,[this.thisGlobalCooldown])):console.log("技能或全局冷却还在进行中，无法释放。")}updateSkillCooldown(e){this.remainingSkillCooldown=e}updateGlobalCooldown(e){this.globalCooldown=e,this.remainingGlobalCooldown=e}updateCooldown(){if(this.remainingSkillCooldown>0){this.remainingSkillCooldown-=Laya.timer.delta;let e=this.remainingSkillCooldown/1e3;this.txt_time.text=e.toFixed(1),this.updateCooldownMask(this.skillCooldownMask,this.remainingSkillCooldown/this.skillCooldown,"#000000"),this.img_djs.visible=!0,this.txt_time.visible=!0}else this.img_djs.visible=!1,this.txt_time.visible=!1;this.remainingGlobalCooldown>0?(this.remainingGlobalCooldown-=Laya.timer.delta,this.updateCooldownMask(this.globalCooldownMask,this.remainingGlobalCooldown/this.globalCooldown,"#00000036"),this.globalCooldownMask.visible=!0):this.globalCooldownMask.visible=!1,this.skillIconItem.gray=this.remainingSkillCooldown>0||this.remainingGlobalCooldown>0}updateCooldownMask(e,i,n){let r=this.width/2,o=this.width/2,s=this.height/2;e.graphics.clear(),e.graphics.drawPie(o,s,r,-90+360*(1-i),270,n)}onDisable(){g.intance.off(y.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),g.intance.offAllCaller(this),Laya.timer.clearAll(this)}};uh=p([pE("x6t-z1VuR52yXWju0qxGBg")],uh);var ph=class extends Laya.Dialog{};var{regClass:mE}=Laya,mh=class extends ph{constructor(){super();this.canClose=!0}onEnable(){this.btn_refresh.on(Laya.Event.CLICK,this,this.onRefresh),this.alertDesc.on(Laya.Event.LINK,this,this.onLink)}onLink(e){console.log("点击了超链接："+e)}onRefresh(){xe.instance.reload()}setOpenData(e){if(e){var i=e[0];if(e.length>2?(this.alertTitle.text=e[1],this.alertDesc.text=e[2]):this.alertDesc.text=e[1],i==1){this.canClose=!1;var n=this.getChildByName("close");n.visible=!1,this.btn_refresh.visible=!0}else this.btn_refresh.visible=!1}}onDisable(){}close(e){this.canClose&&super.close(e)}};mh=p([mE("iB7UvqEcQ1GFKaVEIy6Bmw")],mh);var dh=class extends Laya.Box{};var{regClass:dE}=Laya,hh=class extends dh{};hh=p([dE("ON5bkSuKSE2gwPDUnRGmrw")],hh);var fh=class extends Laya.Box{};var{regClass:hE}=Laya,yh=class extends fh{onEnable(){}notice(t){let e=t;this.label_tf.text=e,this.label_tf.x=68,this.image_bg.width=68*2+this.label_tf.textField.textWidth,e.length/45>1&&(this.image_bg.height=this.label_tf.textField.textHeight+25),this.alpha=1,this.visible=!0}get view(){return this}get width(){return this.image_bg.width}onDisable(){console.log("txtNotice recover"),Laya.Pool.recover("txtNotice",this)}};yh=p([hE("Nm27xWbYSG6mj-EXqPOZ_A")],yh);var bh=class extends Laya.Box{};var{regClass:fE}=Laya,gh=class extends bh{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){if(!t)return;super.dataSource=t;let e=t.id===L.instance.playerDto.pid,i=t.rank;if(this.tf_name.text=t.name,this.tf_union.text=d.instance.getMultiLan(t.shortUnionName),this.tf_rank.text=i,this.tf_score.text=t.score,this.playerIcon.headSkin=t.head,this.img_flag.skin=k.instance.getCountryIcon(t.country),t.icon){let n=k.instance.getUnionIcon(t.icon);this.img_lvIcon.skin=n,this.img_lvIcon.visible=!0}else this.img_lvIcon.visible=!1;e?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.bg.skin=i<4?`res/rank/img_guild_${i}di.png`:"res/rank/img_guild_4di.png",i<4?(this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${i}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.img_rankIcon2.skin=e?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1)}};gh=p([fE("-msKQoZIRI6E80e53qttmw")],gh);var vh=class extends Laya.Scene{};var{regClass:yE}=Laya,Lh=class extends vh{constructor(){super(...arguments);this.myIndex=-1;this.myUnionIndex=-1;this.unionRankData=null;this.currTab=0}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP}onOpened(e){this.onClickPlayer()}onEnable(){this.rankLanList.visible=!1,this.myBox.visible=!1,this.myUnionBox.visible=!1,this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_4.on(Laya.Event.CLICK,this,this.onClickTab,[4]),this.btn_5.on(Laya.Event.CLICK,this,this.onClickTab,[5]),this.btn_player.on(Laya.Event.CLICK,this,this.onClickPlayer),this.btn_guild.on(Laya.Event.CLICK,this,this.onClickGuild),this.btn_schol.on(Laya.Event.CLICK,this,this.onClickSchol)}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_2.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_3.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_4.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_5.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_player.off(Laya.Event.CLICK,this,this.onClickPlayer),this.btn_guild.off(Laya.Event.CLICK,this,this.onClickGuild),this.btn_schol.off(Laya.Event.CLICK,this,this.onClickSchol),this.rankLanList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.unionRankLanList.scrollBar.off(Laya.Event.CHANGE,this,this.onUnionScrollBarChange)}onClickTab(e){if(this.currTab===e)return;let i={1:"combat scenes",2:"kill count",3:"number of heroes",4:"damage ranking",5:"wealth ranking"};e in i?(this.setTab(e),this.setListData(e),this.rankName.text=i[e]):console.warn(`Tab index ${e} does not have a corresponding name.`)}setTab(e){for(let i=1;i<6;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}async setListData(e){let i=await M.requestPost("wxgame/sys/rank",{type:e});i?(this.updateSelfData(i.self),this.updateRankList(i.rankList)):(console.error("Error fetching data:",i),N.instance.notice(d.instance.getLanguage(135)))}async setGuildListData(){this.unionRankData||(this.unionRankData=await M.requestPost("wxgame/sys/unionRank",{}));let e=[];if(this.unionRankData){let i=this.unionRankData.rankList,n=this.unionRankData.self;if(n&&this.updateSelfUnionData(n),this.unionRankLanList.scrollTo(0),this.unionRankLanList.visible=!0,this.myUnionBox.visible=!0,this.unionRankLanList.selectedIndex=1,this.unionRankLanList.array=i,this.myUnionBox.visible=!!n,n){let r=i.findIndex(o=>o.id===n.id);this.myUnionIndex=r}}else console.error(`Error fetching data: ${this.unionRankData}`),N.instance.notice(d.instance.getLanguage(135))}updateSelfData(e){if(e){if(this.tf_name.text=e.name,this.tf_union.text=d.instance.getMultiLan(e.shortUnionName),this.tf_score.text=`${e.score}`,this.playerIcon.headSkin=e.head,this.img_flag.skin=k.instance.getCountryIcon(e.country),e.unionId){let i=k.instance.getUnionIcon(e.unionId);this.img_lvIcon.skin=i,this.img_lvIcon.visible=!0}else this.img_lvIcon.visible=!1;if(e.rank<0)this.img_rankIcon1.visible=!1,this.tf_rank.text=d.instance.getLanguage(1117),this.img_rankIcon2.visible=!1;else if(e.rank<4)this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${e.rank}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1;else{let i=e.pid===L.instance.playerDto.pid?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png";this.img_rankIcon2.skin=i,this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1,this.tf_rank.text=`${e.rank}`}}}updateSelfUnionData(e){if(e)if(this.union_name.text=d.instance.getMultiLan(e.unionName),this.unionIcon.dataSource=e,this.union_score.text=e.score+"",e.rank<0)this.img_unionIcon1.visible=!1,this.union_rank.text=d.instance.getLanguage(1117),this.img_unionIcon2.visible=!1;else if(e.rank<4)this.img_unionIcon1.skin=`res/matchRank1/img_ranking_${e.rank}.png`,this.img_unionIcon1.visible=!0,this.img_unionIcon2.visible=!1;else{let i="res/matchRank1/img_ranking_ranking_me.png";this.img_unionIcon2.skin=i,this.img_unionIcon2.visible=!0,this.img_unionIcon1.visible=!1,this.union_rank.text=`${e.rank}`}}updateRankList(e){if(e){let i=e.findIndex(n=>n.pid===L.instance.playerDto.pid);this.rankLanList.selectedIndex=1,this.rankLanList.array=e,this.myIndex=i,this.rankLanList.scrollTo(0),this.rankLanList.visible=!0,this.myBox.visible=!0}}onScrollBarChange(){if(!this.rankLanList.array||!this.myIndex&&this.myIndex!==0)return;let e=this.rankLanList.startIndex,i=e+this.rankLanList.repeatX*this.rankLanList.repeatY-1,n=this.rankLanList.getCell(this.myIndex);if(n)if(this.myIndex>=e&&this.myIndex<=i){let s=n.localToGlobal(new Laya.Point(0,0)).y-this.myBox.height-57;s=Math.max(57,Math.min(493,s)),this.myBox.y=s}else this.myBox.y=this.myIndex>i?493:57}onUnionScrollBarChange(){if(!this.unionRankLanList.array||!this.myUnionIndex&&this.myUnionIndex!==0)return;let e=this.unionRankLanList.startIndex,i=e+this.unionRankLanList.repeatX*this.unionRankLanList.repeatY-1,n=this.unionRankLanList.getCell(this.myUnionIndex);if(n)if(this.myUnionIndex>=e&&this.myUnionIndex<=i){let s=n.localToGlobal(new Laya.Point(0,0)).y-this.myUnionBox.height-57;s=Math.max(57,Math.min(499,s)),this.myUnionBox.y=s}else this.myUnionBox.y=this.myUnionIndex>i?499:57}setTabState(e,i,n,r){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?n:r}onClickPlayer(){this.onClickTab(1),this.playerRankBox.visible=!0,this.unionBox.visible=!1,this.setTabState(this.btn_player,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!1,"#143f6b","#7ff1fe")}onClickGuild(){this.playerRankBox.visible=!1,this.unionBox.visible=!0,this.setTabState(this.btn_player,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!1,"#143f6b","#7ff1fe"),this.setGuildListData()}onClickSchol(){this.playerRankBox.visible=!1,this.unionBox.visible=!1,this.setTabState(this.btn_player,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!0,"#143f6b","#7ff1fe")}};Lh=p([yE("5_oIkEKDQUyqTP8xY9zMUw")],Lh);var _h=class extends Laya.Box{};var{regClass:bE}=Laya,wh=class extends _h{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){if(!t)return;let e=t.id===L.instance.playerDto.pid,i=t.rank;this.unionIcon.dataSource=t,this.tf_union.text=d.instance.getMultiLan(t.shortUnionName),this.tf_rank.text=i+"",this.tf_score.text=t.score+"",e?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.bg.skin=i<4?`res/rank/img_guild_${i}di.png`:"res/rank/img_guild_4di.png",i<4?(this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${i}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.img_rankIcon2.skin=e?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1)}};wh=p([bE("O6o6TJNORIGW9WXbhJf91w")],wh);var xh=class extends Laya.Box{};var{regClass:gE,property:Ple}=Laya,Ih=class extends xh{constructor(){super();this.isAddEvent=!1}set dataSource(e){if(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=k.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}}async setCurrentOutPut(){this.img_back.skin=k.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=k.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ne.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";et.instance.setStar(this,e),this.box_show.visible=!0,this.destroyed}onChange(e){e?this.selectBox.visible=!0:this.selectBox.visible=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}toDetail(){this.heroVo.id&&H.intance.openModule(h.HeroDetailDialog,this.heroVo)}};Ih=p([gE("DixYspEIQnqQazhlHuxLDw")],Ih);var Eh=class extends Laya.Dialog{};var{regClass:vE}=Laya,Th=class extends Eh{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER;this.beforeYearIndex=null;this.beforeMonthIndex=null;this.beforeDayIndex=null;this.beforeHourIndex=null;this.dateOpenState=0;this.itemVo=null;this.currentDate=new Date;this.startDate={year:0,month:0,day:0,hour:0};this.endDate={year:0,month:0,day:0,hour:0};this.heroVo=null}onEnable(){this.box_date.on(Laya.Event.CLICK,this,this.onOpenDate,[this.img_date_pad,this.box_date]),this.box_date2.on(Laya.Event.CLICK,this,this.onOpenDate,[this.img_date_pad,this.box_date2]),this.yearList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.yearList,"year"]),this.monthList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.monthList,"month"]),this.dayList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.dayList,"day"]),this.hourList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.hourList,"hour"]),this.yearList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.yearList,"year"]),this.monthList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.monthList,"month"]),this.dayList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.dayList,"day"]),this.hourList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.hourList,"hour"]),this.tf_uid.on(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),g.intance.on(y.CHANGE_WALLET_HERO,this,this.onHeroChange),g.intance.on(y.CHANGE_WALLET_PROP,this,this.onPropChange),this.hero_box.on(Laya.Event.CLICK,this,this.onHeroBoxClick),this.Img_prop.on(Laya.Event.CLICK,this,this.onPropClick),this.btn_createSubWallet.on(Laya.Event.CLICK,this,this.onCreateSubWallet),this.box_Arean.on(Laya.Event.CLICK,this,this.onOpenType),this.yearList.scrollBar.rollRatio=0,this.monthList.scrollBar.rollRatio=0,this.dayList.scrollBar.rollRatio=0,this.hourList.scrollBar.rollRatio=0;let e=new Date;this.startDate={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours()},this.endDate={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours()},this.refreshStartTime(1),this.refreshStartTime(2),this.showHeroData(),this.initDiciList(),this.initTypeList(),this.box_dividends.on(Laya.Event.CLICK,this,this.onOpeDividends)}onDisable(){this.removeEvent()}removeEvent(){this.box_date.off(Laya.Event.CLICK,this,this.onOpenDate),this.box_date2.off(Laya.Event.CLICK,this,this.onOpenDate),this.yearList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.monthList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.dayList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.yearList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.monthList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.dayList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.tf_uid.off(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.off(Laya.Event.FOCUS,this,this.uidFocus),g.intance.off(y.CHANGE_WALLET_HERO,this,this.onHeroChange),g.intance.off(y.CHANGE_WALLET_PROP,this,this.onPropChange),this.hero_box.off(Laya.Event.CLICK,this,this.onHeroBoxClick),this.Img_prop.off(Laya.Event.CLICK,this,this.onPropClick),this.btn_createSubWallet.off(Laya.Event.CLICK,this,this.onCreateSubWallet),this.box_dividends.off(Laya.Event.CLICK,this,this.onOpeDividends)}resetColors(){for(var e=0;e<this.yearList.cells.length;e++){var i=this.yearList.cells[e];i.tf_date.color="#357cc0"}for(var e=0;e<this.monthList.cells.length;e++){var i=this.monthList.cells[e];i.tf_date.color="#357cc0"}for(var e=0;e<this.dayList.cells.length;e++){var i=this.dayList.cells[e];i.tf_date.color="#357cc0"}}onOpenDate(e,i){this.resetColors(),this.onHideDivi(),e.visible==!1?(i==this.box_date?(e.y=376,this.dateOpenState=1):(e.y=89,this.dateOpenState=2),this.getDateInfo(),e.visible=!0,this.img_bg.on(Laya.Event.CLICK,this,this.hideAllPad)):(e.visible=!1,this.dateOpenState=0)}hideAllPad(){this.img_date_pad.visible=!1,this.img_bg.off(Laya.Event.CLICK,this,this.hideAllPad)}initTypeList(){let e=U.intance.getArenaTypesInSub();this.list_type.array=e,this.list_type.selectHandler=new Laya.Handler(this,this.handleSelectType),this.list_type.mouseHandler=Laya.Handler.create(this,this.onTypeItemMouse,null,!1),this.list_type.renderHandler=Laya.Handler.create(this,this.onTypeItemRender,null,!1),this.list_type.selectedIndex=0}isLeapYear(e){return e%4==0&&e%100!=0||e%400==0}getDaysInMonth(e,i){return i===2?this.isLeapYear(e)?29:28:[4,6,9,11].includes(i)?30:31}getDateInfo(){let e=this.dateOpenState==1?this.startDate:this.endDate;this.fillList(this.yearList,e.year,2e3,2050),this.fillList(this.monthList,e.month,1,12);let i=new Date().getFullYear(),n=new Date().getMonth()+1,r=this.getDaysInMonth(i,n);this.fillList(this.dayList,e.day,1,r),this.fillList(this.hourList,e.hour,0,23)}fillList(e,i,n,r){let o=[];for(let l=n;l<=r;l++)o.push(l.toString());for(let l=1;l<=3;l++)o.push("");o=["",...o],e.array=o;let s=o.indexOf(`${i}`);if(s>-1){e.scrollTo(s-1),e.selectedIndex=s-1;let l=e.getCell(s);l.tf_date.color="#ffffff",e==this.yearList?this.beforeYearIndex=s:e==this.monthList?this.beforeMonthIndex=s:e==this.dayList?this.beforeDayIndex=s:e==this.hourList&&(this.beforeHourIndex=s)}}onYearChange(e){!this.yearList.array||this.monthList.selectedIndex<0||this.updateDayList(parseInt(this.yearList.array[e]),parseInt(this.monthList.array[this.monthList.selectedIndex]))}onMonthChange(e){!this.yearList.array||this.monthList.selectedIndex<0||this.updateDayList(parseInt(this.yearList.array[this.yearList.selectedIndex]),parseInt(this.monthList.array[e]))}updateDayList(e,i){let n=[];for(let r=1;r<=this.getDaysInMonth(e,i);r++)n.push(r.toString());for(let r=1;r<=3;r++)n.push("");n=["",...n],this.dayList.array=n}calculateVisibleHeight(e,i){let n=e.getCell(i);return Math.min(n.y+n.height,e.scrollBar.value+e.height)-Math.max(n.y,e.scrollBar.value)}onListStop(e,i){let n=this.dateOpenState==1?this.startDate:this.endDate,r=Math.floor(e.startIndex),o=r+1,s=this.calculateVisibleHeight(e,r),l=this.calculateVisibleHeight(e,o),c=s+14>=l?r:o;(i==="month"||i==="day"||i==="hour")&&(c=Math.min(c,e.array.length-5)),e.scrollTo(c),e.selectedIndex=c;let u=e.getCell(c+1);u.tf_date.color="#ffffff";let m=u.tf_date.text;if(m&&u){switch(i){case"year":this.onYearChange(c+1),n.year=Number(m);break;case"month":this.onMonthChange(c+1),n.month=Number(m);break;case"day":n.day=Number(m);break;default:n.hour=Number(m);break}this.refreshStartTime(this.dateOpenState)}}onScrollBarChange(e,i){if(!this.img_date_pad.visible)return;let n=this.dateOpenState==1?this.startDate:this.endDate,r=Math.floor(e.startIndex),o=r+1,s=this.calculateVisibleHeight(e,r),l=this.calculateVisibleHeight(e,o),c=s+14>=l?r:o,u=e.getCell(c+1);u.tf_date.color="#ffffff";let m,v;switch(i){case"year":v=this.beforeYearIndex,this.beforeYearIndex=c+1;break;case"month":v=this.beforeMonthIndex,this.beforeMonthIndex=c+1;break;case"day":v=this.beforeDayIndex,this.beforeDayIndex=c+1;break;case"hour":v=this.beforeHourIndex,this.beforeHourIndex=c+1;break}v!==c+1&&(m=e.getCell(v),this.resetListStyle(m));let w=u.tf_date.text;if(u.tf_date.color="#ffffff",w&&u){switch(i){case"year":this.onYearChange(c+1),n.year=Number(w);break;case"month":this.onMonthChange(c+1),n.month=Number(w);break;case"day":n.day=Number(w);break;default:n.hour=Number(w);break}this.refreshStartTime(this.dateOpenState)}}async setPlayerName(){try{if(this.tf_uid.text=="")return;var e=await M.requestPost("wxgame/sys/queryName",{openid:this.tf_uid.text.toLowerCase()});e&&(console.log(e),this.tf_player_name.text=e.name)}catch{console.log("未找到该玩家，请核对地址")}}uidFocus(){this.tf_uid.text="",this.tf_player_name.text=""}resetListStyle(e){e&&(e.tf_date.color="#357cc0")}refreshStartTime(e){let i=e==1?this.startDate:this.endDate,n=e==1?this.tf_start:this.tf_start2,r=e==1?this.tf_hour:this.tf_hour2,o=i.month>=10?i.month:`0${i.month}`,s=i.day>=10?i.day:`0${i.day}`;n.text=`${i.year}-${o}-${s}`,r.text=`${i.hour}:00`}onHeroBoxClick(){H.intance.openModule(h.WalletChooseHeroDialog)}onPropClick(){this.list_type.selectedIndex!=1&&H.intance.openModule(h.WalletChoosePropsDialog)}async onCreateSubWallet(){if(Et.instance.inMinWaiting){N.instance.notice(d.instance.getLanguage(1187));return}if(this.tf_uid.text==q.instance.walletAddress){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1162),D.YES),this.tf_uid.text="",this.tf_player_name.text="";return}let e=this.tf_uid.text;if(e.length<=0||this.tf_player_name.text==""){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1161),D.YES);return}if(!this.heroVo){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1167),D.YES);return}let i,n=Number(this.tf_have.text);if(this.list_type.selectedIndex==0){if(i=this.itemVo&&this.itemVo.m_iId,i==1001&&this.heroVo.heroItem.level!==3){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1163),D.YES);return}if((n<1||!this.itemVo)&&this.list_type.selectedIndex==0){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1166),D.YES);return}}else n=0,i=0;let r=Ee.dateStringToTimestamp(this.tf_start.text,`${this.startDate.hour}`),o=Ee.dateStringToTimestamp(this.tf_start2.text,`${this.endDate.hour}`),s=Ee.getCurrentDayTimestamp();if(r<s){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1164),D.YES);return}if(o<=r){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1165),D.YES);return}let l=this.list_type.selectedIndex+1,c=Number(this.tf_div.text.replace("%","")),u=this.heroVo.pk;var m={startTime:r,endTime:o,ticketId:i,ticketCount:n,ratio:c,heroPk:u,openid:e.toLowerCase(),type:l};try{var v=await M.requestPost("wxgame/lease/create",m);v&&(N.instance.notice(d.instance.getLanguage(1168)),this.close(),this.heroVo.pk==L.instance.playerDto.fightHeroPk&&(L.instance.playerDto.fightHeroPk=""),Laya.timer.once(200,this,()=>{g.intance.event(y.CREATE_SUB_WALLET_SUCCESS)}))}catch(w){console.log("创建子钱包报错=====》",w)}}showHeroData(){if(this.heroVo){this.img_back.skin=k.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=k.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ne.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";et.instance.setStar(this,e),this.box_show.visible=!0,this.img_back.visible=!0,this.img_noHero.visible=!1}else this.box_show.visible=!1,this.img_back.visible=!1,this.img_noHero.visible=!0}initDiciList(){var e=U.intance.getGeneralValueById(9);this.list_divi.array=e,this.list_divi.selectHandler=new Laya.Handler(this,this.handleSelectDiv),this.list_divi.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_divi.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_divi.scrollBar&&this.list_divi.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown),this.list_divi.selectedIndex=0}handleSelectDiv(e){if(e!=-1){let i=this.list_divi.selectedItem;this.tf_div.text=`${i}%`}}handleSelectType(e){if(this.itemVo=null,e!=-1){let i=this.list_type.selectedItem;this.tf_type.text=`${d.instance.getLanguage(i.name)}`,e==0?(this.handleSelectDiv(0),this.img_lock.visible=!1,this.img_jia.visible=!0):(this.img_lock.visible=!0,this.tf_div.text="0%",this.img_jia.visible=!1,this.PropBox.visible=!1)}}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_divi.selectedIndex=i,this.onHideDivi())}onTypeItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_type.selectedIndex=i,this.onHideDivi())}onCountryItemRender(e,i){e.onChange(this.list_divi.selectedIndex==i)}onTypeItemRender(e,i){e.onChange(this.list_type.selectedIndex==i)}onOpeDividends(){this.list_type.selectedIndex!=1&&(this.img_divi_pad.visible=!0,this.img_bg.once(Laya.Event.MOUSE_DOWN,this,this.onHideDivi))}onHideDivi(){this.img_divi_pad.visible=!1,this.img_type_pad.visible=!1,this.img_bg.off(Laya.Event.MOUSE_DOWN,this,this.onHideDivi)}onScrollBarDown(e){e.stopPropagation()}onHeroChange(e){this.heroVo=e,this.showHeroData()}onOpenType(){this.img_type_pad.visible=!0,this.img_bg.once(Laya.Event.MOUSE_DOWN,this,this.onHideDivi)}onPropChange(e,i){this.itemVo=e;let n=U.intance.m_dicItems.get(e.itemItem.id.toString());this.PropBox.visible=!0,this.img_jia.visible=!1,n&&(this.img_prop_icon.skin=k.instance.getItemIcon(n.icon),this.img_prop_box.skin="gameIcon/items/itemBg/img_"+n.quality+".png",this.tf_all.text=""+Se.formatNumber(e._m_iNum,2),this.tf_have.text=""+Se.formatNumber(i,2))}};Th=p([vE("_bHe6-EiQc-KiQ-mElnEIQ")],Th);var Sh=class extends Laya.ComboBox{};var{regClass:LE}=Laya,Ch=class extends Sh{set defaultLabel(t){}onEnable(){this.getDateInfo()}set dataSource(t){super.dataSource=t;var e=t}set isOpen(t){console.log("isOpen: "+t),this._isOpen!=t&&(this._isOpen=t,this._isOpen?this.img_pad.visible=!0:this.img_pad.visible=!1)}};Ch=p([LE("A2yeugt8S3Ot7ec482gdhQ")],Ch);var kh=class extends Laya.Box{};var{regClass:_E}=Laya,Ah=class extends kh{set dataSource(e){super.dataSource=e,this.tf_date.text=e}onDisable(){}};Ah=p([_E("fCHaQKFSQ-ew26uygUCKnQ")],Ah);var Dh=class extends Laya.Box{};var{regClass:wE}=Laya,Mh=class extends Dh{set dataSource(e){super.dataSource=e,this.tf_rate.text=`${e}%`}onChange(e){e?(this.selectImg.visible=!0,this.tf_rate.color="#ffffff"):(this.tf_rate.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};Mh=p([wE("TToplFpGQGmUqT5SfNnVIg")],Mh);var Bh=class extends Laya.Dialog{};var{regClass:xE}=Laya,Ph=class extends Bh{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}onEnable(){this.employList.visible=!1,this.btn_back.on(Laya.Event.CLICK,this,this.closeEmployView)}async setOpenData(e){this.employList.vScrollBarSkin="";let i=e.heroData,n="";if(i){let r=Ee.formatTimeStamp(Number(i.startTime),"YY-MT-DD HH:MM:SS"),o=Ee.formatTimeStamp(Number(i.endTime),"YY-MT-DD HH:MM:SS");var e=await M.requestPost("wxgame/lease/heroInfo",{heroPk:i.heroPk});if(e&&e.info){let l=U.intance.m_dicShops.values,c=Ie.getTitleByGoodsId(l,e.info.ticketId);c&&(n=d.instance.getLanguage(c)),e.info.ticketId==0&&(n=d.instance.getLanguage(1260)),console.log(c),console.log(e);let u="",m=e.info.allTicketCount,v=e.info.remainTicketCount,w=m-v;w<=0?u="0%":u=`${Math.round(e.info.winTimes/w*100)}%`;let x={"Proxy player":i.playerName,Arena:n,"Remaining ticket":[i.remainCount,e.info.ticketId],"Combat scene":`${w}`,"Winner probability":`${u}`,Deserter:`${e.info.taopao}`,"Start date":r,"End date":o},T=Object.getOwnPropertyNames(x).map(Z=>[Z,x[Z]]);this.employList.array=T;let P=-1;this.employList.selectedIndex=P,this.employList.visible=!0;let z=L.instance.m_heroData.heroVoDic.get(i.heroPk);if(this.img_back.skin=k.instance.getHeroBackIcon(z.heroItem.quality),this.img_front.skin=k.instance.getHeroFrontIcon(z.heroItem.quality),this.img_hero.skin=z.simgurl,this.tf_name.text=Ne.shortHeroStr(z.name),i.reward&&i.reward.length>0){let Z=Ie.findFirstTypeAndNotGold(i.reward);Z?(this.tf_score.text=Z.count,this.img_money.skin=k.instance.getMoneyIcon(Z.id),this.img_money.visible=!0):(this.tf_score.text="0",this.img_money.visible=!1)}else this.tf_score.text="0",this.img_money.visible=!1;let j=z.heroItem.level+"";et.instance.setStar(this,j)}}}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.closeEmployView)}closeEmployView(){this.close()}};Ph=p([xE("4pjAWg8HScmRe8ukNRQsGg")],Ph);var Rh=class extends Laya.Box{};var{regClass:IE}=Laya,Nh=class extends Rh{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){super.dataSource=t,this.setEmploy(t)}setEmploy(t){if(!t)return;let e=t[0],i=t[1];this.item_name.text=e,e!=="Remaining ticket"&&e!=="Received"&&e!=="Bonus"&&(this.moneyImg.visible=!1),e==="Agent Date"||e==="End Date"?this.item_value.text=Ee.formatTimeStamp(Number(i),"YY-MT-DD HH:MM:SS"):e=="Remaining ticket"?(this.item_value.text=i[0],this.moneyImg.skin=`gameIcon/items/item/img_${i[1]}.png`):this.item_value.text=i}};Nh=p([IE("TAG-i7slRsKkXRu8SsaWHg")],Nh);var Oh=class extends Laya.Dialog{};var{regClass:EE}=Laya,Hh=class extends Oh{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}onEnable(){this.list_rental.visible=!1,this.showRentalData(),this.tf_rentedEarned.text=d.instance.getUILang("Rented-earned"),this.tf_proxyEarned.text=d.instance.getUILang("Proxy-earned"),this.tf_winRate.text=d.instance.getUILang("victory")}async showRentalData(){var e=await M.requestPost("wxgame/lease/listAll",{});this.list_rental.array=e.list,this.list_rental.visible=!0,!e.list||e.list.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1,console.log(e)}onDisable(){this.removeEvent()}removeEvent(){}};Hh=p([EE("peF5WS5zQgGqZq82ro5IyQ")],Hh);var Uh=class extends Laya.Box{};var{regClass:TE}=Laya,Vh=class extends Uh{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){super.dataSource=t,this.setEmploy(t)}setEmploy(t){if(!t)return;let e=Ee.formatDayAndTime(t.startTime),i=Ee.formatDayAndTime(t.endTime);this.tf_createDate.text=e.date,this.tf_endDate.text=i.date,this.tf_player.text=t.playerName;let n=U.intance.m_dicShops.values,r=Ie.getTitleByGoodsId(n,t.ticketId);r&&(this.tf_arena.text=d.instance.getLanguage(r)),t.ticketId==0&&(this.tf_arena.text=d.instance.getLanguage(1260)),this.tf_dividends.text=`${t.leaseRatio}%`,this.tf_fight.text=`${t.fightTimes}`,this.tf_vic.text=`${t.winRate}%`;let o=t.leaseReward,s=t.proxyReward;if(o&&o.length>0){let l=Ie.findFirstTypeAndNotGold(o);l&&(this.tf_earned.text=Se.filterNumFormat(l.count,2),this.img_coinType.skin=k.instance.getMoneyIcon(l.id),this.img_coinType.visible=!0)}else this.tf_earned.text="0",this.img_coinType.visible=!1;if(s&&s.length>0){let l=Ie.findFirstTypeAndNotGold(s);l&&(this.tf_proxy.text=Se.filterNumFormat(l.count,2),this.img_coinType2.skin=k.instance.getMoneyIcon(l.id),this.img_coinType2.visible=!0)}else this.tf_proxy.text="0",this.img_coinType2.visible=!1}};Vh=p([TE("bVHWCHZxQDSIcXWzNcq-MA")],Vh);var Fh=class extends Laya.Box{};var{regClass:SE,property:sue}=Laya,zh=class extends Fh{constructor(){super();this.isAddEvent=!1}set dataSource(e){if(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=k.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}}async setCurrentOutPut(){this.img_back.skin=k.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=k.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ne.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";et.instance.setStar(this,e),this.box_show.visible=!0,this.heroVo.state==1?(this.img_state.skin="gameIcon/hero/heroDetail/img_hero_state_2.png",this.img_state.visible=!0):this.heroVo.state==2?(this.img_state.skin="gameIcon/hero/heroDetail/img_hero_state_3.png",this.img_state.visible=!0):this.img_state.visible=!1}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}onDisable(){this.off(Laya.Event.CLICK,this,this.toDetail)}toDetail(){this.heroVo.id&&H.intance.openModule(h.HeroDetailDialog,this.heroVo)}};zh=p([SE("vJhsY0hvQjyUXjU0-8xV7g")],zh);var Gh=class extends Laya.Box{};var{regClass:CE}=Laya,jh=class extends Gh{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,e&&(this.img_coin.skin=k.instance.getMoneyIcon(e.id),this.money_value.text=e.count,this.addEvent())}};jh=p([CE("TjAZ1yG-QkG5fetB03VUuA")],jh);var qh=class extends Laya.Scene{};var{regClass:kE,property:Cue}=Laya,Wh=class extends qh{constructor(){super(...arguments);this.text=""}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP}onEnable(){this.list_hero.vScrollBarSkin="",this.RentalList.visible=!1,this.RevenueList.visible=!1,this.subWalletList.visible=!1,this.btn_sch.on(Laya.Event.CLICK,this,this.onClickSch),this.btn_jia.on(Laya.Event.CLICK,this,this.onClickJia),this.btn_yi.on(Laya.Event.CLICK,this,this.onClickYi),g.intance.on(y.CREATE_SUB_WALLET_SUCCESS,this,this.createSubWalletSuccess),this.btn_subwallet.on(Laya.Event.CLICK,this,this.onClickSubwallet),this.btn_createSubWallet.on(Laya.Event.CLICK,this,this.onClickCreateSubwallet),this.btn_rental.on(Laya.Event.CLICK,this,this.onClickRentalRecord),this.close&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.onClickSch(),this.initHeroData()}async setMoneyData(){let e=await M.requestPost("wxgame/lease/outline",{});if(e&&e.reward){let i=Ie.processItemsArray(e.reward)[0];this.RentalList.array=i,this.RentalList.visible=!0}if(e&&e.childReward){let i=Ie.processItemsArray(e.childReward)[0];this.RevenueList.array=i,this.RevenueList.visible=!0}}initContainer(e){this.list_hero.visible=!1,this.list_hero.vScrollBarSkin="",this.createHeadList(e)}async createHeadList(e){if(!this)return;let i=e;if(i){this.list_hero.selectedIndex=1,this.list_hero.array=i,this.list_hero.visible=!0;let n=-1;this.list_hero.selectedIndex=n}(!i||i.length<=0)&&(this.noDataBox.visible=!0)}async initHeroData(){await st.instance.ownerHero(!0)}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}setTabState(e,i,n,r){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?n:r}onClickSch(){this.box_1.visible=!0,this.list_hero.visible=!1,this.subWalletBox.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_sch,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe"),this.setMoneyData()}async onClickJia(){await st.instance.ownerHero(),this.box_1.visible=!1,this.list_hero.visible=!0,this.subWalletBox.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_jia,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe");let e=L.instance.m_heroData.heroVoDic.values,i=Ie.filterObjectsByState(e,1);this.initContainer(i)}async onClickYi(){await st.instance.ownerHero(),this.box_1.visible=!1,this.list_hero.visible=!0,this.subWalletBox.visible=!1,this.noDataBox.visible=!1;let e=L.instance.m_heroData.heroVoDic.values,i=Ie.filterObjectsByState(e,2);this.initContainer(i),this.setTabState(this.btn_yi,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe")}async onClickSubwallet(){this.box_1.visible=!1,this.list_hero.visible=!1,this.subWalletBox.visible=!0,this.noDataBox.visible=!1,this.setTabState(this.btn_subwallet,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe");var e=await M.requestPost("wxgame/lease/list",{});if(e){let i=e.list;for(let n=0;n<i.length;n++)i[n].rank=n+1;if(i){this.subWalletList.selectedIndex=1,i.push(void 0),i.push(void 0),i.push(void 0),this.subWalletList.array=i,this.subWalletList.visible=!0;let n=-1;this.subWalletList.selectedIndex=n}(!i||i.length<=0)&&(this.noDataBox.visible=!0)}}createSubWalletSuccess(){Laya.timer.once(800,this,this.onClickSubwallet)}onClickCreateSubwallet(){H.intance.openModule(h.CreateSubWalletDialog)}onClickRentalRecord(){H.intance.openModule(h.RentalRecordDialog)}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene),this.btn_sch.off(Laya.Event.CLICK,this,this.onClickSch),this.btn_jia.off(Laya.Event.CLICK,this,this.onClickJia),this.btn_yi.off(Laya.Event.CLICK,this,this.onClickYi),this.btn_subwallet.off(Laya.Event.CLICK,this,this.onClickSubwallet),this.btn_createSubWallet.off(Laya.Event.CLICK,this,this.onClickCreateSubwallet)}};Wh=p([kE("eB5n1zn1RD2i2F-bAki-sQ")],Wh);var Kh=class extends Laya.Box{};var{regClass:AE}=Laya,Yh=class extends Kh{constructor(){super();this.isAddEvent=!1;this.heroPk=null}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,!e){this.visible=!1;return}let{rank:i,heroPk:n,ticketId:r,playerName:o,remainCount:s,reward:l}=e;this.tf_rank.text=i,this.heroPk=n;let c=U.intance.m_dicShops.values,u=Ie.getTitleByGoodsId(c,r);if(u&&(this.tf_arena.text=d.instance.getLanguage(u)),r==0&&(this.tf_arena.text=d.instance.getLanguage(1260)),this.tf_name.text=o,this.tf_venue.text=s,this.btn_detail.off(Laya.Event.CLICK,this,this.onClickDetail),this.btn_detail.on(Laya.Event.CLICK,this,this.onClickDetail,[e]),this.addEvent(),l&&l.length>0){let m=Ie.findFirstTypeAndNotGold(l);m&&(this.tf_score.text=m.count,this.img_money.skin=k.instance.getMoneyIcon(m.id),this.img_money.visible=!0)}else this.tf_score.text="0",this.img_money.visible=!1}onClickDetail(e){this.heroPk,H.intance.openModule(h.EmployInfoDialog,{heroData:e})}onDisable(){this.btn_detail.off(Laya.Event.CLICK,this,this.onClickDetail)}};Yh=p([AE("5iGLLzQkR8mqhVsrdybXCQ")],Yh);var $h=class extends Laya.Box{};var{regClass:DE}=Laya,Xh=class extends $h{set dataSource(e){e&&(super.dataSource=e,this.tf_rate.text=`${d.instance.getLanguage(e.name)}`)}onChange(e){e?(this.selectImg.visible=!0,this.tf_rate.color="#ffffff"):(this.tf_rate.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};Xh=p([DE("_iWKrJX7QK6BqGFWXcrKUw")],Xh);var Qh=class extends Laya.Dialog{};var{regClass:ME}=Laya,Zh=class extends Qh{constructor(e){super();this.heroList=[]}onEnable(){this.list_hero.visible=!1,this.createHeadList(),this.btn_transfer.on(Laya.Event.CLICK,this,this.onBtnTramsfer)}onBtnTramsfer(){let e=this.list_hero.selectedIndex;if(e<0){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1167),D.YES);return}let i=this.heroList[e];g.intance.event(y.CHANGE_WALLET_HERO,i),console.log("onBtnTramsfer",e),this.close()}async createHeadList(){if(!this)return;await st.instance.ownerHero();let e=L.instance.m_heroData.heroVoDic.values;if(this.heroList=Ie.filterObjectsByState(e,0),this.heroList){this.list_hero.selectedIndex=1,this.list_hero.array=this.heroList,this.list_hero.visible=!0;let i=-1;this.list_hero.selectedIndex=i}}onDisable(){this.btn_transfer.off(Laya.Event.CLICK,this,this.onBtnTramsfer)}};Zh=p([ME("8aIFsnkXTaWPXwTKHxCGpQ")],Zh);var Jh=class extends Laya.Dialog{};var{regClass:BE}=Laya,ef=class extends Jh{constructor(e){super();this.propValue=1;this.propNum=1;this.propData=null;this.items=[]}onEnable(){this.txt_num.text="1",this.listPanel1.visible=!1,this.btn_subtract.on(Laya.Event.CLICK,this,this.changePropNum,[!1]),this.btn_add.on(Laya.Event.CLICK,this,this.changePropNum,[!0]),this.listPanel1.selectHandler=new Laya.Handler(this,this.handleSelectProp),this.btn_transfer.on(Laya.Event.CLICK,this,this.onBtnTramsfer),this.initPropList()}changePropNum(e){e?this.propValue=Math.min(this.propValue+1,this.propNum):this.propValue=Math.max(this.propValue-1,1),this.txt_num.text=`${this.propValue}`}async initPropList(){await st.instance.ownerBag();var e=this.getItemByType();console.log(e),this.propData=e,this.listPanel1.array=e,this.listPanel1.selectedIndex=0,this.listPanel1.visible=!0}handleSelectProp(e){if(e!==-1){this.propValue=1,this.txt_num.text="1";let i=this.listPanel1.selectedItem;i&&(this.propNum=Number(i._m_iNum),console.log(this.propNum))}}onBtnTramsfer(){let e=this.propData[this.listPanel1.selectedIndex],i=this.propValue;if(i<=0||!e){se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(1166),D.YES);return}g.intance.event(y.CHANGE_WALLET_PROP,[e,i]),this.close()}getItemByType(){this.items=[];for(var e=L.instance.m_packageData.getBackByType(St.TYPE_Consumption),i=0;i<e.length;i++){var n=e[i];n&&n.itemItem.id>=1001&&n.itemItem.id<=1017&&n.itemItem.id!==1010&&n.itemItem.id!==1011&&n.itemItem.id!==1012&&n.itemItem.id!==1013&&n.itemItem.id!==1014&&this.items.push(n)}return this.items}onDisable(){this.btn_subtract.off(Laya.Event.CLICK,this,this.changePropNum),this.btn_add.off(Laya.Event.CLICK,this,this.changePropNum),this.btn_transfer.off(Laya.Event.CLICK,this,this.onBtnTramsfer)}};ef=p([BE("WY66k0UbQfiwaG80emIzjA")],ef);var tf=class extends Laya.Box{};var{regClass:PE}=Laya,af=class extends tf{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.addEvent(),this.setCurrentOutPut(e)}async setCurrentOutPut(e){if(e){let i=U.intance.m_dicItems.get(e.ticketId.toString());this.txt_num.text=""+Se.formatNumber(e.ticketCount,8),this.img_icon.skin=k.instance.getItemIcon(i.icon),this.img_box.skin="gameIcon/items/itemBg/img_"+i.quality+".png"}else this.txt_num.text="",this.img_icon.skin=null,this.img_box.skin="gameIcon/items/itemBg/img_0.png"}};af=p([PE("QLIqcx2YSRWf6b4T0P4N6Q")],af);var nf=class extends Laya.Box{};var{regClass:RE}=Laya,rf=class extends nf{set dataSource(e){super.dataSource=e,e&&(this.tf_data.text=e)}onDisable(){}onChange(e){e?(this.selectImg.visible=!0,this.tf_data.color="#ffffff"):(this.tf_data.color="#357cc0",this.selectImg.visible=!1)}};rf=p([RE("3viWNkWoRRS9EWM3SzguDg")],rf);var of=class extends Laya.Box{};var{regClass:NE}=Laya,sf=class extends of{onEnable(){let t=(Laya.stage.width-Q.DESIGN_WIDTH)/2;this.img_coinsBg.right-=t,console.log("dWidth: "+t),this.updateLocalAssets(),g.intance.on(y.ROLE_INFO_CHANGE,this,this.updateLocalAssets),g.intance.on(It.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets)}onDisable(){g.intance.off(y.ROLE_INFO_CHANGE,this,this.updateLocalAssets),g.intance.off(It.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets)}updateLocalAssets(){this.tf_3001.text=Se.filterNumFormat(L.instance.getConsumeValue(ke.TYPE_TOX),2),this.tf_3006.text=Se.filterNumFormat(L.instance.getConsumeValue(ke.TYPE_BTC),8),this.tf_3007.text=Se.filterNumFormat(L.instance.getConsumeValue(ke.TYPE_ETH),4),this.tf_3011.text=Se.filterNumFormat(L.instance.getConsumeValue(ke.TYPE_BTOX),2),this.tf_3005.text=Se.filterNumFormat(L.instance.getConsumeValue(ke.TYPE_GOLD),0)}};sf=p([NE("7P9MlqipSaG6QoKpQowDbQ")],sf);var lf=class extends Laya.Box{};var{regClass:OE}=Laya,cf=class extends lf{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.heroVo=e,this.heroVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.heroSk.dataSource=this.heroVo,this.tf_name.text=Ne.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";et.instance.setStar(this,e)}};cf=p([OE("IcuwbMwvRKqMyiXxDzW-dA")],cf);var uf=class extends Laya.Dialog{};var{regClass:HE}=Laya,pf=class extends uf{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}onEnable(){this.initContainer(),Pe.instance.playSoundByName(Pe.soundName32)}initContainer(){var e=ze.instance.getOneItem();e&&this.showItem(e)}showItem(e){let i=this.heroListItem;i.dataSource=e}onDisable(){g.intance.event(y.EVENT_CHECK_REMAIN,h.HeroGetDialog)}};pf=p([HE("mrqJhWahTxuTjeSGIs559Q")],pf);var mf=class extends Laya.Box{};var{regClass:UE}=Laya,df=class extends mf{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.shopItem=e,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.tf_name.text=d.instance.getLanguage(this.shopItem.title),this.shopItem.cost.length>1?(this.img_const.skin=k.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=Se.formatNumber(this.shopItem.cost[1])+"",this.img_const.visible=!0,this.tf_const.visible=!0,this.disabled=!1):(this.disabled=!0,this.img_const.visible=!1,this.tf_const.visible=!1),this.shopItem.type==1?(this.tf_name.color=ga.qualityColors[parseInt(this.shopItem.icon)-1],this.img_bg.skin=k.instance.getHeroQuality(this.shopItem.icon),this.img_icon.skin=k.instance.getHeroEggIcon(this.shopItem.icon)):this.shopItem.type==4&&(this.tf_name.color=ga.qualityColors[parseInt(this.shopItem.icon)-1],this.img_bg.skin=k.instance.getHeroQuality(this.shopItem.icon),this.img_icon.skin=k.instance.getChestIcon(this.shopItem.icon))}};df=p([UE("awS07ko0RBaxCnxXWqiR4g")],df);var hf=class extends Laya.Box{};var{regClass:VE}=Laya,ff=class extends hf{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.shopItem=e,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){if(this.tf_name.text=d.instance.getLanguage(this.shopItem.title),this.img_const.skin=k.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=Se.formatNumber(this.shopItem.cost[1])+"",this.shopItem.type==2){var e=U.intance.m_dicItems.get(this.shopItem.icon);this.img_bg.skin=k.instance.getItemQualityIcon(e.quality+""),this.tf_name.color=ga.qualityColors[e.quality-1],this.img_icon.skin=k.instance.getItemIcon(this.shopItem.icon)}}};ff=p([VE("din69PYeRbSapMB2H6E06g")],ff);var yf=class extends Laya.Scene{};var{regClass:FE}=Laya,bf=class extends yf{constructor(){super(...arguments);this.currTab=0;this.type=1;this.selectItemId=-1;this.addL=1;this.price=0;this.isSkReady=!1}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP}onOpened(e){e&&e.length>0&&(this.type=e[0],e[1]!=null&&(this.selectItemId=e[1]),this.onClickTab(this.type))}onEnable(){g.intance.on(y.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),g.intance.on(y.EVENT_END_HEROBUY,this,this.onWaitHeroInfoBack),this.btn_recruit.on(Laya.Event.CLICK,this,this.onRecruit),this.btn_reduce.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_reduce]),this.btn_plus.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_plus]),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,[],!1),this.listPanel2.vScrollBarSkin="",this.listPanel2.selectHandler=Laya.Handler.create(this,this.onSelectItem,[],!1),this.img_sk.on(Laya.Event.PLAYED,this,this.stopAni,[2]),this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-Q.DESIGN_HEIGHT)/2}async onRecruit(){if(this.shopItem.open==0&&Q.Debug==0){N.instance.notice(d.instance.getLanguage(12));return}this.shopItem.type==1?Q.Debug==2?(this.setChou1Ani("animation"+this.shopItem.icon+"_1"),await st.instance.recruit1(this.shopItem.id)):N.instance.notice(d.instance.getLanguage(12)):await st.instance.recruitItem(this.shopItem.id,this.addL)}onWaitHeroInfoBack(){this.setChou2Ani("animation"+this.shopItem.icon+"_2"),he.instance.hideLoading()}setTab(e){for(let i=1;i<7;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+"_s.png"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+".png")}async initLuckDrawView(){this.destroyed||(this.type?this.onClickTab(this.type):this.onClickTab(1))}onClickTab(e){if(this.currTab!=e){if(this.setTab(e),this.box_2.visible=!0,e==1){var i=this.getItemByType(1);this.shopItems=i[0],this.listPanel1.array=this.shopItems,this.listPanel1.selectedIndex=-1,this.listPanel1.selectedIndex=i[1],this.listPanel1.visible=!0,this.listPanel2.visible=!1}else if(e==2){var i=this.getItemByType(2);this.shopItems=i[0],this.listPanel2.dataSource=this.shopItems,this.listPanel2.selectedIndex=-1,this.listPanel2.selectedIndex=i[1],this.listPanel2.visible=!0,this.listPanel1.visible=!1}else if(e==3){var i=this.getItemByType(4);this.shopItems=i[0],this.listPanel1.dataSource=this.shopItems,this.listPanel1.selectedIndex=-1,this.listPanel1.selectedIndex=i[1],this.listPanel1.visible=!0,this.listPanel2.visible=!1}}}getItemByType(e){var i=U.intance.m_dicShops.values,n=[],r=-1,o=0;return i.forEach(s=>{s.type==e&&(n.push(s),this.selectItemId!=-1&&s.icon==this.selectItemId&&(r=o,this.selectItemId=-1),o++)}),r==-1&&n.length>0&&(r=0),[n,r]}onSelectItem(e){if(this.shopItem=this.shopItems[e],console.log(this.shopItem),this.shopItem){if(this.tf_name.text=d.instance.getLanguage(this.shopItem.title),this.tf_des.text=d.instance.getLanguage(this.shopItem.des),this.shopItem.cost.length>1)this.img_const.skin=k.instance.getMoneyIcon(this.shopItem.cost[0]),this.addL=1,this.price=Se.formatNumber(this.shopItem.cost[1]);else if(this.shopItem.open==0){N.instance.notice(d.instance.getLanguage(12));return}this.setPriceByNum();var i=this.shopItem.type;this.btn_recruit.disabled=!1,i==1?(Q.Debug<2&&(this.btn_recruit.disabled=!0),this.img_icon.visible=!1,this.img_sk.visible=!0,this.setIdleAni("animation"+this.shopItem.icon+"_0"),this.box_count.visible=!1):i==2?(this.img_icon.skin=k.instance.getItemBigIcon(this.shopItem.icon),this.img_icon.y=60,this.img_icon.visible=!0,this.img_sk.visible=!1,this.box_count.visible=!0):i==4&&(this.img_icon.skin=k.instance.getChestBigIcon(this.shopItem.icon),this.img_icon.y=110,this.img_icon.visible=!0,this.img_sk.visible=!1,this.box_count.visible=!1),this.btn_recruit.visible=!0}else this.tf_name.text="",this.tf_des.text="",this.img_icon.visible=!1,this.img_sk.visible=!1,this.box_count.visible=!1,this.btn_recruit.visible=!1}handleClickBtn(e){switch(e){case this.btn_reduce:this.addL>1&&this.addL--,this.setPriceByNum();break;case this.btn_plus:this.addL<100&&this.addL++,this.setPriceByNum();break}}setPriceByNum(){this.tf_num.text=this.addL+"",this.tf_const.text=Se.filterNumFormat(this.addL*this.price,2,!0)}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}stopAni(e){console.log("stopAni: "+e),this.isSkReady||(this.isSkReady=!0,this.callLater(this.stopSk))}stopSk(){this.img_sk.paused(),this.img_sk.stop()}setIdleAni(e){this.isSkReady?(this.img_sk.play(e,!1),this.img_sk.stop()):this.img_sk.animationName=e}setChou1Ani(e){this.isSkReady?this.img_sk.play(e,!0):this.img_sk.animationName=e}setChou2Ani(e){this.isSkReady?this.img_sk.play(e,!1):this.img_sk.animationName=e,Laya.timer.once(800,this,this.openHeroGetView)}openHeroGetView(){ze.instance.autoPop=!0,Kt.instance.startShow(),this.setIdleAni("animation"+this.shopItem.icon+"_0")}onDrawBack(e){}startAni(){this.img_sk.paused(),this.img_sk.play(0,!1)}removeEvent(){g.intance.off(y.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),g.intance.off(y.EVENT_END_HEROBUY,this,this.onWaitHeroInfoBack)}};bf=p([FE("IPCUkD5kRse3Gz5tw0Aovw")],bf);var gf=class extends Laya.Dialog{};var{regClass:zE}=Laya,vf=class extends gf{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_POP;this.m_iPositionType=B.CENTER}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem.id;L.instance.guildIcon=i,this.unionIcon.headSkin=L.instance.guildIcon}}createHeadList(){let e=U.intance.m_dicIconBadge;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,n=0;this.unionIcon.headSkin=L.instance.guildIcon;for(let r of e.values){if(r.id==L.instance.guildIcon){i=n;break}n++}this.list_head.selectedIndex=i}onRegister(){let e=L.instance.guildIcon;g.intance.event(y.EVENT_MODIFY_HEAD,[e]),this.close()}};vf=p([zE("VhAfw9RDSVu06yGY3eOJbg")],vf);var Lf=class extends Laya.Dialog{};var{regClass:GE}=Laya,_f=class extends Lf{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_PANEL;this.m_iPositionType=B.CENTER}onEnable(){g.intance.on(y.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_change.on(Laya.Event.CLICK,this,this.onChangeHead),this.btn_apply.on(Laya.Event.CLICK,this,this.onApply)}setOpenData(e){if(console.log("setOpenData: ",e),e){var i=e[0];this.onSetUnionInfo(i),this.subUnionDto=e[1],this.onSetSubUnionInfo(this.subUnionDto)}}onBack(){this.close()}onSetUnionInfo(e){e&&(this.tf_guildName.text=d.instance.getMultiLan(e.unionName)),this.tf_heroNum.text=L.instance.m_heroData.getCount()+"",this.tf_address.text=Ne.formatWalletAddress(q.instance.walletAddress)}onSetSubUnionInfo(e){if(this.subUnionDto){this.input_name.text=d.instance.getMultiLan(e.unionName),this.textArea_des.text=d.instance.getMultiLan(e.desc),this.input_address.text=e.collectionToken,this.unionIcon.headSkin=e.icon;var i=e.status;this.onSetState(i)}else this.unionIcon.headSkin=L.instance.guildIcon,this.onSetState(0)}onSetState(e){e==1?(this.img_underReview.visible=!0,this.img_notPassed.visible=!1,this.btn_apply.visible=!1):e==2?(this.img_underReview.visible=!1,this.img_notPassed.visible=!0,this.btn_apply.visible=!0):(this.img_underReview.visible=!1,this.img_notPassed.visible=!1,this.btn_apply.visible=!0)}onChangeModifyHead(e){L.instance.guildIcon=e,this.unionIcon.headSkin=e}onChangeHead(){H.intance.openModule(h.ChangeUnionIconDialog)}async onApply(){let e=this.input_name.text,i=this.textArea_des.text,n=this.input_address.text;if(e=e.trim(),!L.instance.guildIcon){N.instance.notice(d.instance.getLanguage(1189));return}if(e==""){N.instance.notice(d.instance.getLanguage(31));return}if(i==""){N.instance.notice(d.instance.getLanguage(1190));return}if(n==""){N.instance.notice(d.instance.getLanguage(1191));return}let r={icon:L.instance.guildIcon,name:e,intro:i,recAddress:n};var o=await M.requestPost("wxgame/union/create",r);if(o&&o.unionBaseDto){var s=o.unionBaseDto.status;this.onSetState(s),N.instance.notice(d.instance.getLanguage(1192)),g.intance.event(y.EVENT_SUB_GUILD_UPDATE)}}onDisable(){this.removeEvent()}removeEvent(){g.intance.off(y.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead)}};_f=p([GE("K1XqPbcNQUGnysSD4yhBLQ")],_f);var wf=class extends Laya.Dialog{};var{regClass:jE}=Laya,xf=class extends wf{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_PANEL;this.m_iPositionType=B.CENTER}onEnable(){this.btn_memberList.on(Laya.Event.CLICK,this,this.onShowMemberList),this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_applicationList.on(Laya.Event.CLICK,this,this.onShowApplicationList)}setOpenData(e){if(console.log("setOpenData: ",e),e){var i=e[0];this.onSetUnionInfo(i),this.subUnionDto=e[1],this.onSetSubUnionInfo(this.subUnionDto)}}onShowApplicationList(){H.intance.openModule(h.UnionMemberApplyView,this.subUnionDto.id)}onBack(){this.close()}onShowMemberList(){this.subUnionDto&&H.intance.openModule(h.UnionMemberView,this.subUnionDto.id)}onSetUnionInfo(e){e&&(this.tf_guildName.text=d.instance.getMultiLan(e.unionName)),this.tf_heroNum.text=L.instance.m_heroData.getCount()+"",this.tf_address.text=Ne.formatWalletAddress(q.instance.walletAddress)}onSetSubUnionInfo(e){e?(this.unionIcon.dataSource=e,this.tf_name.text=d.instance.getMultiLan(e.unionName),this.tf_des.text=d.instance.getMultiLan(e.desc),this.tf_lv.text=d.instance.getUILang("LV.")+e.lv,this.tf_num.text="<font color='#25ff63'>"+e.memberNum+"</font>/"+e.maxMemberNum,this.img_lvIcon.skin=k.instance.getUnionLvIcon(e.lv),this.box_show.visible=!0,this.tf_receiveAddress.text=Ne.formatWalletAddress(e.collectionToken),this.btn_applicationList.visible=e.leader==L.instance.playerDto.pid):this.box_show.visible=!1}onDisable(){}};xf=p([jE("qhJFEWQoRbixaYt5MGd9TQ")],xf);var If=class extends Laya.Scene{};var{regClass:qE}=Laya,Ef=class extends If{constructor(){super(...arguments);this.currTab=0;this.currUnionId=1;this.createStatus=0}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP}onOpened(e){this.currUnionId=e,this.initLuckDrawView()}onEnable(){g.intance.on(y.EVENT_SUB_GUILD_UPDATE,this,this.initSubGuild),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_apply.on(Laya.Event.CLICK,this,this.onApply),this.btn_memberList.on(Laya.Event.CLICK,this,this.onShowMemberList),this.btn_guildList.on(Laya.Event.CLICK,this,this.onShowGuildList),this.btn_applicationList.on(Laya.Event.CLICK,this,this.onShowApplicationList)}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}onApply(){this.createStatus==2?this.subUnionDto.status==0?H.intance.openModule(h.MySubUnionView,[this.unionDto,this.subUnionDto]):H.intance.openModule(h.CreateSubUnionView,[this.unionDto,this.subUnionDto]):H.intance.openModule(h.CreateSubUnionView,[this.unionDto,this.subUnionDto])}onShowMemberList(){this.unionDto&&H.intance.openModule(h.UnionMemberView,this.unionDto.members)}onShowGuildList(){H.intance.openModule(h.UnionListView)}onShowApplicationList(){H.intance.openModule(h.UnionMemberApplyView,this.unionDto.id)}async initLuckDrawView(){var e=L.instance.playerDto.union,i=await M.requestPost("wxgame/union/info",{unionId:this.currUnionId});this.unionDto=i.unionDto,this.unionDto?this.onSetUnionInfo(this.unionDto):N.instance.notice(d.instance.getLanguage(135)),this.initSubGuild()}async initSubGuild(){var e=await M.requestPost("wxgame/union/createInfo",{});e?(this.btn_apply.visible=!0,this.createStatus=e.createStatus,e.unionBaseDto?(this.subUnionDto=e.unionBaseDto,this.btn_apply.disabled=!1,this.tf_createSub.text=d.instance.getUILang("My Guild")):this.createStatus==0?this.btn_apply.disabled=!0:this.createStatus==1?this.btn_apply.disabled=!1:this.createStatus==2&&(e.unionBaseDto.status==0?(this.btn_apply.disabled=!1,this.tf_createSub.text=d.instance.getUILang("My Guild")):(this.btn_apply.disabled=!1,this.tf_createSub.text=d.instance.getUILang("My Guild")))):N.instance.notice(d.instance.getLanguage(135))}onSetUnionInfo(e){e?(this.unionIcon.dataSource=e,this.tf_name.text=d.instance.getMultiLan(e.unionName),this.tf_des.text=d.instance.getMultiLan(e.desc),this.tf_lv.text=d.instance.getUILang("LV.")+e.lv,this.tf_num.text="<font color='#25ff63'>"+e.memberNum+"</font>/"+e.maxMemberNum,this.img_lvIcon.skin=k.instance.getUnionLvIcon(e.lv),this.box_show.visible=!0,e.parentId>0?this.btn_applicationList.visible=!1:e.leader!=L.instance.playerDto.pid?this.btn_applicationList.visible=!1:this.subUnionDto?this.btn_applicationList.visible=!0:this.btn_applicationList.visible=!0):this.box_show.visible=!1}onDisable(){g.intance.off(y.EVENT_SUB_GUILD_UPDATE,this,this.initSubGuild)}};Ef=p([qE("KR8HZN1dSv2Bz_62yIgOrg")],Ef);var Tf=class extends Laya.Box{};var{regClass:WE}=Laya,Sf=class extends Tf{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){this.unionItem=e,this.unionItem&&(this.addEvent(),this.setCurrentOutPut())}set headSkin(e){this.img_head.skin=k.instance.getUnionIcon(e)}async setCurrentOutPut(){if(!this.unionItem)return;let e=this.unionItem.icon;this.img_head.skin=k.instance.getUnionIcon(e)}toDetail(){}};Sf=p([WE("lK37x6YwQ9umJIqReZht4Q")],Sf);var Cf=class extends Laya.Box{};var{regClass:KE}=Laya,kf=class extends Cf{set dataSource(e){super.dataSource=e,this.iconBadgeItem=e,this.iconBadgeItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.unionIcon.headSkin=this.iconBadgeItem.id}};kf=p([KE("TRVoEDtUSRaEW71V6oCpew")],kf);var Af=class extends Laya.Box{};var{regClass:YE}=Laya,Df=class extends Af{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.btn_viewMembers.on(Laya.Event.CLICK,this,this.onViewMeber),this.isAddEvent=!0)}onViewMeber(){H.intance.openModule(h.UnionMemberView,this.unionDto.id)}set dataSource(e){super.dataSource=e,this.unionDto=e,this.unionDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.unionIcon.dataSource=this.unionDto,this.tf_name.text=d.instance.getMultiLan(this.unionDto.unionName),this.tf_lv.text=d.instance.getUILang("LV.")+this.unionDto.lv,this.tf_num.text="<font color='#25ff63'>"+this.unionDto.memberNum+"</font>/"+this.unionDto.maxMemberNum,this.img_lvBg.skin=k.instance.getUnionLvDiIcon(this.unionDto.lv),this.img_lvIcon.skin=k.instance.getUnionLvIcon(this.unionDto.lv)}onChange(e){e?this.bg.skin="res/union1/img_trade_bg_2.png":this.bg.skin="res/union1/img_trade_bg_1.png"}};Df=p([YE("eauuiADeT9SAqEYe1ms81w")],Df);var Mf=class extends Laya.Dialog{};var{regClass:$E}=Laya,Bf=class extends Mf{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_PANEL;this.m_iPositionType=B.CENTER}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack)}onOpened(e){this.initLuckDrawView()}setOpenData(e){}async initLuckDrawView(){var e=await M.requestPost("wxgame/union/list",{});if(e){this.list_guild.array=e.unionList;let i=-1;this.list_guild.selectedIndex=i}else N.instance.notice(d.instance.getLanguage(135))}onBack(){this.close()}onDisable(){this.removeEvent()}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};Bf=p([$E("vJwx3qloTmiGGRpFF6Qm1A")],Bf);var Pf=class extends Laya.Box{};var{regClass:XE}=Laya,Rf=class extends Pf{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_agree.on(Laya.Event.CLICK,this,this.onAgree),this.btn_refuse.on(Laya.Event.CLICK,this,this.onRefuse),this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.isAddEvent=!0)}onCopy(){let e=this.unionApplyMemberDto.address;doCopy(e),N.instance.notice(d.instance.getLanguage(132))}async onAgree(){if(this.unionApplyMemberDto.pid){var e=await M.requestPost("wxgame/union/doAudit",{uid:this.unionApplyMemberDto.uid,playerId:this.unionApplyMemberDto.pid,agree:!0});e&&N.instance.notice(d.instance.getLanguage(1193)),g.intance.event(y.EVENT_UNION_APPLY_MEMBER_UPDATE)}}async onRefuse(){if(this.unionApplyMemberDto.pid){var e=await M.requestPost("wxgame/union/doAudit",{uid:this.unionApplyMemberDto.uid,playerId:this.unionApplyMemberDto.pid,agree:!1});e&&N.instance.notice(d.instance.getLanguage(1194)),g.intance.event(y.EVENT_UNION_APPLY_MEMBER_UPDATE)}}set dataSource(e){super.dataSource=e,this.unionApplyMemberDto=e,this.unionApplyMemberDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.unionApplyMemberDto.head;this.playerIcon.headSkin=e,this.img_flag.skin=k.instance.getCountryIcon(this.unionApplyMemberDto.country),this.tf_name.text=this.unionApplyMemberDto.name,this.tf_fightTimes.text=this.unionApplyMemberDto.fightTimes+"",this.tf_state.text=Ee.formatTimeAgo(this.unionApplyMemberDto.lastLoginTime),this.tf_state.color=Ee.colorTimeAgo(this.unionApplyMemberDto.lastLoginTime),this.tf_address.text=Ne.abbreviateString(this.unionApplyMemberDto.address,10)}};Rf=p([XE("FPhs_TdtQbCxXS40Ic50Wg")],Rf);var Nf=class extends Laya.Dialog{};var{regClass:QE}=Laya,Of=class extends Nf{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_PANEL;this.m_iPositionType=B.CENTER}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_agreeAll.on(Laya.Event.CLICK,this,this.onAgreeAll),g.intance.on(y.EVENT_UNION_APPLY_MEMBER_UPDATE,this,this.onUpdateApplyMember),this.list_member.array=[]}setOpenData(e){console.log("setOpenData: ",e),Number.isInteger(e)&&(this.currUnionId=e,this.onUpdateApplyMember())}async onUpdateApplyMember(){var e=await M.requestPost("wxgame/union/auditList",{unionId:this.currUnionId});e&&e.auditList?this.list_member.array=e.auditList:N.instance.notice(d.instance.getLanguage(135))}onBack(){this.close()}async onAgreeAll(){if(this.list_member.array.length>0){var e=await M.requestPost("wxgame/union/doAudit",{uid:this.currUnionId,playerId:0,agree:!0});e&&N.instance.notice(d.instance.getLanguage(1195)),g.intance.event(y.EVENT_UNION_APPLY_MEMBER_UPDATE)}}onDisable(){this.removeEvent()}removeEvent(){g.intance.off(y.EVENT_UNION_APPLY_MEMBER_UPDATE,this,this.onUpdateApplyMember)}};Of=p([QE("LXw-3_bwSmqCzdUAekakYg")],Of);var Hf=class extends Laya.Box{};var{regClass:ZE}=Laya,Uf=class extends Hf{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_add.on(Laya.Event.CLICK,this,this.onAdd),this.isAddEvent=!0)}async onAdd(){if(this.unionMemberDto.isfriend){let e={icon:this.unionMemberDto.head,name:this.unionMemberDto.name,id:this.unionMemberDto.pid};H.intance.openModule(h.PrivateChatDialog,e);return}if(this.unionMemberDto.pid){let e=U.intance.getGeneralValueById(11);if(L.instance.friendNum>=e){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(301),D.YES);return}if(this.unionMemberDto.openid==q.instance.walletAddress){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(200),D.YES);return}if(this.unionMemberDto.isfriend){se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(202),D.YES);return}let i=await M.requestPost("wxgame/friend/addFriend",{openid:this.unionMemberDto.openid});console.log(i),i&&se.instance().AlertByType(D.BASEALERTVIEW,me.instance.get(307),D.YES,Laya.Handler.create(this,()=>{this.btn_add.disabled=!0}))}}set dataSource(e){super.dataSource=e,this.unionMemberDto=e,this.unionMemberDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.unionMemberDto.head;this.playerIcon.headSkin=e,this.img_flag.skin=k.instance.getCountryIcon(this.unionMemberDto.country),this.tf_name.text=this.unionMemberDto.name,this.tf_fightTimes.text=this.unionMemberDto.fightTimes+"",this.tf_state.text=Ee.formatTimeAgo(this.unionMemberDto.lastLoginTime),this.tf_state.color=Ee.colorTimeAgo(this.unionMemberDto.lastLoginTime),this.unionMemberDto.openid==q.instance.walletAddress&&(this.btn_add.visible=!1),this.btn_add.label=d.instance.getUILang("application"),this.unionMemberDto.isfriend&&(this.btn_add.label="send msg")}};Uf=p([ZE("l73FEB2CRGihzisJBs63MQ")],Uf);var Vf=class extends Laya.Dialog{};var{regClass:JE}=Laya,Ff=class extends Vf{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=B.M_PANEL;this.m_iPositionType=B.CENTER}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack)}async setOpenData(e){if(this.myFriendData=await M.requestPost("wxgame/friend/friendList",{}),this.myFriendData&&this.myFriendData.list&&(L.instance.friendNum=this.myFriendData.list.length),console.log("setOpenData: ",e),Number.isInteger(e)){var i=e;this.initLuckDrawView(i)}else{var n=e;let r=this.isMyFriendData(n,this.myFriendData.list);this.list_member.array=r;let o=-1;this.list_member.selectedIndex=o}}async initLuckDrawView(e){var i=await M.requestPost("wxgame/union/info",{unionId:e});this.unionDto=i.unionDto;let n=this.isMyFriendData(this.unionDto.members,this.myFriendData.list);console.log(n),this.unionDto?this.list_member.array=this.unionDto.members:N.instance.notice(d.instance.getLanguage(135))}isMyFriendData(e,i){for(let n of e){let r=!1;for(let o of i)if(n.openid===o.openid){r=!0;break}n.isfriend=r}return e}onBack(){this.close()}onDisable(){this.removeEvent()}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};Ff=p([JE("439XbfImQxS4I-Vced8JKA")],Ff);var zf=class extends Laya.Box{};var{regClass:eT}=Laya,Gf=class extends zf{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.unionDto=e,this.unionDto&&this.setCurrentOutPut()}async setCurrentOutPut(){this.unionIcon.dataSource=this.unionDto,this.tf_name.text=d.instance.getMultiLan(this.unionDto.unionName),this.tf_lv.text=d.instance.getUILang("LV.")+this.unionDto.lv,this.tf_num.text="<font color='#25ff63'>"+this.unionDto.memberNum+"</font>/"+this.unionDto.maxMemberNum,this.img_lvBg.skin=k.instance.getUnionLvDiIcon(this.unionDto.lv),this.img_lvIcon.skin=k.instance.getUnionLvIcon(this.unionDto.lv)}onChange(e){e?this.bg.skin="res/union1/img_trade_bg_2.png":this.bg.skin="res/union1/img_trade_bg_1.png"}};Gf=p([eT("cbbqawzdSI2g161G69xpUg")],Gf);var jf=class extends Laya.Scene{};var{regClass:tT}=Laya,qf=class extends jf{constructor(){super(...arguments);this.currTab=0;this.type=1;this.joinStatusDic=new ne;this.items=[]}onAwake(){this.m_iLayerType=B.M_POP,this.m_iPositionType=B.UP}onOpened(e){this.type=e}onEnable(){this.btn_search.on(Laya.Event.CLICK,this,this.onSearch),this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.list_union.vScrollBarSkin="",this.list_union.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.list_union.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1),this.box_show.visible=!1,this.box_list.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-Q.DESIGN_HEIGHT)/2}async initLuckDrawView(){var e=await M.requestPost("wxgame/union/list",{});e?this.unionData=e.unionList:N.instance.notice(d.instance.getLanguage(135)),this.getJoinStatus()}async getJoinStatus(){var e=await M.requestPost("wxgame/union/joinStatus",{});e?(this.joinStatusDic=new ne,this.joinStatusDic.set(e.unionId,e.joinStatus)):N.instance.notice(d.instance.getLanguage(135)),this.getItemByName(""),this.box_list.visible=!0}getItemByName(e){if(this.list_union.selectedIndex=-1,this.items=[],this.unionData)for(var i=this.unionData.length,n=0;n<i;n++){var r=this.unionData[n],o=d.instance.getMultiLan(r.unionName);Ne.caseInsensitiveSearchWithRegex(o,e)&&this.items.push(r)}this.list_union.array=this.items,this.items.length>0?this.list_union.selectedIndex=0:this.list_union.selectedIndex=-1}onSearch(){var e=this.input_search.text;this.getItemByName(e)}onJoin(){this.currUnionDto&&(L.instance.playerDto.union>0?fe.intance.setCurrentScene($.M_SCENE_MYUNION,this.currUnionDto.id):se.instance().AlertByType(D.BASEALERTVIEW,d.instance.getLanguage(141),D.CANCEL,Laya.Handler.create(this,this.onJoinSure)))}async onJoinSure(){if(this.currUnionDto){var e=await M.requestPost("wxgame/union/join",{unionId:this.currUnionDto.id});e.errorCode==0?e.unionId&&e.unionId>0?(L.instance.playerDto.union=e.unionId,fe.intance.setCurrentScene($.M_SCENE_MYUNION,L.instance.playerDto.union),N.instance.notice(d.instance.getLanguage(2e3))):N.instance.notice(d.instance.getLanguage(1196)):N.instance.notice(d.instance.getLanguage(135))}}onItemRender(e,i){e.onChange(this.list_union.selectedIndex==i)}onSelectItem(e,i){if(this.currUnionDto=this.items[e],console.log(this.currUnionDto),this.currUnionDto){this.unionIcon.dataSource=this.currUnionDto,this.tf_name.text=d.instance.getMultiLan(this.currUnionDto.unionName),this.tf_des.text=d.instance.getMultiLan(this.currUnionDto.desc),this.tf_lv.text=d.instance.getUILang("LV.")+this.currUnionDto.lv,this.tf_num.text="<font color='#25ff63'>"+this.currUnionDto.memberNum+"</font>/"+this.currUnionDto.maxMemberNum,this.img_lvBg.skin=k.instance.getUnionLvDiIcon(this.currUnionDto.lv),this.img_lvIcon.skin=k.instance.getUnionLvIcon(this.currUnionDto.lv);var n=this.joinStatusDic.get(this.currUnionDto.id);L.instance.playerDto.union>0?this.btn_join.label=d.instance.getUILang("Enter"):n?n==1?this.btn_join.label=d.instance.getLanguage(1210):n==2?this.btn_join.label=d.instance.getUILang("Enter"):this.btn_join.label=d.instance.getUILang("Join"):this.btn_join.label=d.instance.getUILang("Join"),this.box_show.visible=!0}else this.box_show.visible=!1}setToMainScene(){fe.intance.setCurrentScene($.M_SCENE_MAIN)}removeEvent(){}};qf=p([tT("VfpfbqXcSQalDIkuosz8Rw")],qf);var{regClass:iT,property:_fe}=Laya,Qs=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.getComponent(Laya.RigidBody).setVelocity({x:0,y:-10})}onTriggerEnter(t,e,i){this.owner.removeSelf()}onUpdate(){this.owner.y<-10&&this.owner.removeSelf()}onDisable(){Laya.Pool.recover("bullet",this.owner)}};Qs=p([iT("hIXP-u9_RfeIwPLhNGNjGw")],Qs);var{regClass:aT,property:Ife}=Laya,Zs=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onClick)}onClick(t){Laya.stage.width=1334,Laya.stage.height=750,Laya.stage.scaleMode=Laya.Stage.SCALE_FIXED_WIDTH,Laya.Scene.open("scenes/Index.ls")}onDisable(){this.owner.off(Laya.Event.MOUSE_DOWN,this)}};Zs=p([aT("DQCudilORvOvMM7hTH8i7w")],Zs);var{regClass:nT,property:rT}=Laya,va=class extends Laya.Script{constructor(){super();this.level=1}get itemId(){return this._itemId}set itemId(e){this._itemId=e,this.owner.skin="resources/UI/images/bag/"+e+".png"}onEnable(){this._rig=this.owner.getComponent(Laya.RigidBody),this.level=Math.round(Math.random()*5)+1}onUpdate(){}onCollisionEnter(e){console.log("collision: ",e)}onTriggerEnter(e,i,n){var r=this.owner;if(console.log("owener: ",r),e.label==="buttle"&&r.parent){let o=Laya.Pool.getItemByCreateFun("effect",this.createEffect,this);o.pos(r.x,r.y),r.parent.addChild(o),o.play(0,!0),r.removeSelf(),Laya.SoundManager.playSound("resources/sound/destroy.wav")}}createEffect(){let e=new Laya.Animation;e.loadAnimation("resources/ani/TestAni.ani"),e.on(Laya.Event.COMPLETE,null,i);function i(){e.removeSelf(),Laya.Pool.recover("effect",e)}return e}onDisable(){Laya.Pool.recover("dropBox",this.owner)}};p([rT({type:"number"})],va.prototype,"level",2),va=p([nT("3L23NCFLSAieUApqTrVoCQ")],va);var{regClass:oT,property:kfe}=Laya,Nn=class extends Laya.Script{constructor(){super();this.touchHeroIds=new ne;this.touchGlasses=new ne;this.updateIndex=0;this.turnSpeed=1;this.turningSpeed=.1;this.lastDirectionAngle=0}onAwake(){}onEnable(){}onCollisionEnter(e){console.log(this.constructor.name+" onCollisionEnter collision",e)}onCollisionStay(e){console.log(this.constructor.name+" onCollisionStay collision",e)}onCollisionExit(e){console.log(this.constructor.name+" onCollisionExit collision",e)}onTriggerEnter(e,i,n){if(e.label==="ground")console.warn("ground in");else if(e.label&&e.label.startsWith("grass"))this.owner.isMe&&(e.owner.alpha=.7,console.warn("grass in"),this.touchGlasses.set(e.label,!0),this.setMyCurrArea());else if(e.label==="item")this.owner.enterItemId=e.owner.getComponent(va).itemId;else if(e.label==="role"){var r=e.owner.roomPlayerDto.id;if(this.touchHeroIds.set(r,e.owner),this.owner.displacementType==2){var o=O.instance.canAttack(this.owner,e.owner);o&&Laya.Tween.clearAll(this.owner)}}}onTriggerStay(e,i,n){}onTriggerExit(e,i,n){if(e.label==="ground")this.owner.inGround=!1,console.warn("ground exit");else if(e.label&&e.label.startsWith("grass"))this.owner.isMe&&(console.warn("grass out"),e.owner.alpha=1,this.touchGlasses.remove(e.label),this.setMyCurrArea());else if(e.label==="item")this.owner.enterItemId==e.owner.getComponent(va).itemId&&(this.owner.enterItemId=0);else if(e.label==="role"){var r=e.owner.roomPlayerDto.id;this.touchHeroIds.remove(r)}}setMyCurrArea(){this.touchGlasses.keys.length>0?this.owner.currArea=1:this.owner.currArea=0,this.owner.onSendMoveData()}onUpdate(){if(this.owner.isMe)this.owner._isDead||(O.instance.myHeroSpr.currArea>0?this.owner.alpha=.6:this.owner.alpha=1);else{this.owner._isRealDead?O.instance.myHeroSpr._isDead?this.owner.visible=!1:this.owner.visible=!1:this.owner.currArea>0?O.instance.myHeroSpr.currArea==this.owner.currArea?(this.owner.visible=!0,this.owner.alpha=.6):this.owner.visible=!1:(this.owner.visible=!0,this.owner.alpha=1);return}if(!this.owner.isStop){if(this.owner.speed>0){let e=this.getJoystickDirectionAngle(),i=this.calculateAngleDifference(e,this.lastDirectionAngle);if(Math.abs(i)>10?this.startTurning():this.stopTurning(),this.lastDirectionAngle=e,this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.heroSk.isReady&&this.owner.walk(),this.lastSpeed=this.owner.speed),this.owner.roleDirection>=0){let n=1*this.owner.speed*this.turnSpeed,r=this.owner.roleDirection*(Math.PI/180),o=n*Math.cos(r),s=n*Math.sin(r);this.owner.pos(Math.round(this.owner.x+o),Math.round(this.owner.y+s))}this.owner.inControl&&!this.owner._isDead&&this.touchHeroIds.values.forEach(n=>{var r=O.instance.canTui(this.owner,n);r&&n.beiTui(this.owner.roomPlayerDto.id)})}else this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.idle(),this.lastSpeed=this.owner.speed);this.updateIndex==0&&this.owner.onSendMoveData(),this.updateIndex++,this.updateIndex>0&&(this.updateIndex=0)}}getJoystickDirectionAngle(){return this.owner.roleDirection}calculateAngleDifference(e,i){let n=Math.abs(e-i);return n>180?360-n:n}startTurning(){this.turnSpeed*=this.turningSpeed}stopTurning(){this.turnSpeed=1}onDisable(){}};Nn=p([oT("DknC7B57SZi-09Mz092daQ")],Nn);var{regClass:sT,property:q_}=Laya,La=class extends Laya.Script{constructor(){super();this.createBoxInterval=1e3;this._time=0;this._started=!1;this.updateStop=!1}onEnable(){let e=["resources/UI/images/test/b1.png"];Laya.loader.load(e).then(i=>{this._time=Date.now(),this._gameBox=this.owner.getChildByName("gameBox"),Laya.stage.on(Laya.Event.BLUR,this,()=>{this.updateStop=!0}),Laya.stage.on(Laya.Event.FOCUS,this,()=>{this.updateStop=!1}),Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onStageClick)})}onStart(){let e=this.owner.getChildByName("ground").getComponent(Laya.BoxCollider);e.width=Laya.stage.width}onUpdate(){if(this.updateStop)return;let e=Date.now();e-this._time>this.createBoxInterval&&this._started&&(this._time=e,this.createBox())}createBox(){let e=Laya.Pool.getItemByCreateFun("dropBox",this.dropBox.create,this.dropBox);e.pos(Math.random()*(Laya.stage.width-100),-100),this._gameBox.addChild(e)}onStageClick(e){e.stopPropagation();let i=Laya.Pool.getItemByCreateFun("bullet",this.bullet.create,this.bullet);i.pos(Laya.stage.mouseX,Laya.stage.mouseY),this._gameBox.addChild(i)}startGame(){this._started||(this._started=!0,this.enabled=!0)}stopGame(){this._started=!1,this.enabled=!1,this.createBoxInterval=1e3,this._gameBox.removeChildren()}};p([q_({type:Laya.Prefab})],La.prototype,"dropBox",2),p([q_({type:Laya.Prefab})],La.prototype,"bullet",2),La=p([sT("5iJgbfCiSn6Rc8upAfHtjA")],La);var Wf=class extends Laya.Scene{};var{regClass:lT,property:Hfe}=Laya,On=class extends Wf{constructor(){super();On.instance=this}onEnable(){this._control=this.getComponent(La),this.tipLbll.on(Laya.Event.CLICK,this,this.onTipClick)}onTipClick(e){this.tipLbll.visible=!1,this._score=0,this.scoreLbl.text="分数：",this._control.startGame()}addScore(e=1){this._score+=e,this.scoreLbl.text="分数："+this._score,this._control.createBoxInterval>600&&this._score%20==0&&(this._control.createBoxInterval-=20)}stopGame(){this.tipLbll.visible=!0,this.tipLbll.text="游戏结束了，点击屏幕重新开始",this._control.stopGame()}};On=p([lT("Y5UkAabiTgWFZQnBL1EpEw")],On);var Kf=class extends Laya.Scene{};var{regClass:cT,property:qfe}=Laya,Js=class extends Kf{constructor(){super()}onOpened(t){t&&(this.msgLab.x=t.point&&t.point.x?t.point.x:Laya.stage.mouseX-50,this.msgLab.y=t.point&&t.point.y?t.point.y:Laya.stage.mouseY-80,this.msgLab.text=t.text,Laya.Tween.to(this.msgLab,{y:this.msgLab.y-100,alpha:0},1e3,Laya.Ease.linearNone))}};Js=p([cT("9kGOzpbbSOWSAmN0l9VtfQ")],Js);var{regClass:uT,property:$b}=Laya,el=Laya.Browser,W_=Laya.Render,K_=Laya.SpriteUtils,Lt=class extends Laya.Script{constructor(){super();Lt.instance=this}onEnable(){this.videoBtn.on(Laya.Event.MOUSE_DOWN,this,()=>{this.createElementVideo()})}createElementVideo(){el.window.IframeElementRT=this,this.createScript(),this.createDiv(),this.createIframe("resources/files/video.html?url=layaAir.mp4"),this.setDOMElementInArea(),Laya.stage.on(Laya.Event.RESIZE,this,this.setDOMElementInArea)}setDOMElementInArea(){this.iframeElement!=null&&this.divElement!=null&&(K_.fitDOMElementInArea(this.divElement,this.closeBox,0,0,this.closeBox.width,this.closeBox.height),K_.fitDOMElementInArea(this.iframeElement,this.iframeBox,0,0,this.iframeBox.width,this.iframeBox.height))}createScript(){this.scriptElement=el.document.createElement("script"),el.document.body.appendChild(this.scriptElement),this.scriptElement.innerHTML="function closeVideo(){IframeElementRT.closeVideo() }"}createIframe(e){this.iframeElement=el.createElement("iframe"),el.document.body.appendChild(this.iframeElement),this.iframeElement.style.zIndex=W_.canvas.style.zIndex+998,this.iframeElement.src=e,this.iframeElement.style.margin="0",this.iframeElement.style.scrolling="no",this.iframeElement.style.frameborder="0",this.iframeElement.style.padding="0",this.iframeElement.style.left="0",this.iframeElement.style.top="0px",this.iframeElement.style.position="absolute"}createDiv(){this.divElement=Laya.Browser.createElement("div"),Laya.Browser.document.body.appendChild(this.divElement),this.divElement.innerHTML="<img src='resources/files/x.png' width='60px' height='60px' onclick='closeVideo()'/>",this.divElement.style.zIndex=W_.canvas.style.zIndex+999}closeVideo(){Laya.Browser.document.body.removeChild(this.scriptElement),Laya.Browser.document.body.removeChild(this.iframeElement),Laya.Browser.document.body.removeChild(this.divElement),this.scriptElement=this.iframeElement=this.divElement=null,Laya.stage.off(Laya.Event.RESIZE,this,this.setDOMElementInArea)}};p([$b({type:Laya.Button})],Lt.prototype,"videoBtn",2),p([$b({type:Laya.Box})],Lt.prototype,"closeBox",2),p([$b({type:Laya.Box})],Lt.prototype,"iframeBox",2),Lt=p([uT("ZtMxoJHQTWipjGWyGV51jQ")],Lt);var Yf=class extends Laya.Scene{};var{regClass:pT,property:Qfe}=Laya,tl=class extends Yf{constructor(){super()}onEnable(){Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),this.tabBindViewStack(),this.topTab.selectedIndex=0,this.item0Tab.selectedIndex=0}onClicked(){let t=this.item2Tab.getChildByName("item2"),e=this.item2Tab.getChildByName("item3"),i=this.item2Tab.getChildByName("item4");t.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1)}),e.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenScene.ls",!1)}),i.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/Dialog.ls",!1,{title:"弹窗的标题",text:"弹窗的具体文本……"})})}tabBindViewStack(){this.topTab.selectHandler=new Laya.Handler(this,t=>{this.tabPage.selectedIndex=t,t==1&&(this.item1Tab.selectedIndex=0),t==2&&(this.item2Tab.selectedIndex=0),t==3&&(this.item3Tab.selectedIndex=0),t==4&&(this.item4Tab.selectedIndex=0),Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),Lt.instance.iframeElement&&Lt.instance.closeVideo(),t==2&&this.item2Page.selectedIndex==1&&!Lt.instance.iframeElement&&Lt.instance.createElementVideo()}),this.item0Tab.selectHandler=new Laya.Handler(this,t=>{this.item0Page.selectedIndex=t}),this.item1Tab.selectHandler=new Laya.Handler(this,t=>{this.item1Page.selectedIndex=t,t!==4&&Laya.Physics2D.I?Laya.Physics2D.I.enableDebugDraw=!1:t==4&&Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!0)}),this.item2Tab.selectHandler=new Laya.Handler(this,t=>{switch(this.item2Page.selectedIndex=t,t){case 1:!Lt.instance.iframeElement&&Lt.instance.createElementVideo();break;case 2:Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1);break;case 3:Laya.loader.load("prefab/uiDemo/page/Win.lh").then(e=>{let i=e.create();this.tabPage.parent.addChild(i)});break;case 4:Laya.loader.load("prefab/uiDemo/page/Dialog.lh").then(e=>{e.create().show()});break}t!==1&&Lt.instance.iframeElement&&Lt.instance.closeVideo()}),this.item3Tab.selectHandler=new Laya.Handler(this,t=>{this.item3Page.selectedIndex=t}),this.item4Tab.selectHandler=new Laya.Handler(this,t=>{this.item4Page.selectedIndex=t})}onDisable(){}};tl=p([pT("gbAKGLFtQ5WL6-NpVocAEA")],tl);var{regClass:mT,property:$f}=Laya,_a=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onAwake(){console.log("创建动画模板"),this.createAniTemplate("moveB"),this.createAniTemplate("moveC"),this.createAniTemplate("moveE"),this.createAniTemplate("moveF"),this.createAniTemplate("moveH"),this.createAniTemplate("moveI"),this.createAniTemplate("moveK"),this.createAniTemplate("moveL"),this.aniSource.play(0,!0,"moveB")}onEnable(){this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.aniSource.play(0,!0,this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.aniSource.play(0,!0,this.selectAni.selectedLabel):this.aniSource.play(0,!1,this.selectAni.selectedLabel)})}createAniTemplate(e,i=8){let n=[];for(let r=0;r<i;r++)n.push("resources/UI/role/atlasAni/139x/"+e+r+".png");Laya.Animation.createFrames(n,e)}onError(e){console.log("加载失败: "+e)}};p([$f({type:Laya.Button})],_a.prototype,"playAni",2),p([$f({type:Laya.Button})],_a.prototype,"stopAni",2),p([$f({type:Laya.ComboBox})],_a.prototype,"selectAni",2),p([$f({type:Laya.Animation})],_a.prototype,"aniSource",2),_a=p([mT("tmkUlMggQi20FZpy6nC1aw")],_a);var{regClass:dT,property:Xf}=Laya,wa=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onEnable(){this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel),this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.playAnimation(this.selectAni.selectedLabel):this.playAnimation(this.selectAni.selectedLabel,!1)})}playAnimation(e,i=!0,n=7){let r=[];for(let o=0;o<n;o++)r.push("resources/UI/role/frameAni/"+e+o+".png");this.aniSource.loadImages(r).play(0,i)}};p([Xf({type:Laya.Button})],wa.prototype,"playAni",2),p([Xf({type:Laya.Button})],wa.prototype,"stopAni",2),p([Xf({type:Laya.ComboBox})],wa.prototype,"selectAni",2),p([Xf({type:Laya.Animation})],wa.prototype,"aniSource",2),wa=p([dT("8gw7FS4iT1q8EhdN3sWklQ")],wa);var{regClass:hT,property:oye}=Laya,Y_=Laya.Event,fT=Laya.SpineSkeleton,il=class extends Laya.Script{constructor(){super(...arguments);this.skinArray=["goblin","goblingirl"];this.skinIndex=0;this.spineAniIndex=6}onEnable(){this.createLayaSpine(),this.createSpine()}createLayaSpine(){this.skeletonNode=this.owner.getChildByName("skeletonNode"),Laya.loader.load("resources/UI/role/spineAni/goblins.sk").then(e=>{this.skeletonAni=e.buildArmature(1),this.skeletonNode.addChild(this.skeletonAni),this.skeletonAni.x=128,this.skeletonAni.y=390,this.spineAniNum=this.skeletonAni.getAnimNum(),this.skeletonAni.play(0,!0),this.changeSkin(),this.skeletonNode.on(Y_.CLICK,this,this.changeSkin)})}parseComplete(){}createSpine(){this.spineNode=this.owner.getChildByName("spineNode"),Laya.loader.load("resources/UI/role/spineAni/spineboy-pma.skel",Laya.Loader.SPINE).then(e=>{this.spineAni=new fT,this.spineAni.templet=e,this.spineNode.addChild(this.spineAni),this.spineAni.scale(.3,.3),this.spineAni.pos(220,390),this.spineAniNum=this.spineAni.getAnimNum(),this.spineAni.play(this.spineAniIndex,!0),this.spineNode.on(Y_.CLICK,this,this.changeAni)})}spineParseComplete(){}changeAni(){++this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=5),this.spineAni.play(this.spineAniIndex,!0,!0)}changeSkin(){this.skeletonAni.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}};il=p([hT("qTd2xmRXT4i0Re94qly0Lg")],il);var{regClass:yT,property:al}=Laya,$_=Laya.Event,bT=Laya.Point,Qi=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new bT;this.angle=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.createMap(),this.sceneWindow.on($_.MOUSE_UP,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2+26),this.roleAniNode.scale(.6,.6),this.roleAniNode.x=this.lastX=48,this.roleAniNode.y=this.lastY=48,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let e=this._animator.getDefaultState();console.log(e.name),this.createWallMap()}createWallMap(){Laya.loader.load("resources/tiledMap/desert_new.json").then(()=>{let i=Laya.loader.getRes("resources/tiledMap/desert_new.json").data.layers[0].data,n;n=new Array;for(var r=0;r<40;r++){n[r]=new Array;for(var o=0;o<60;o++)i[r*60+o]==30?n[r][o]=1:n[r][o]=0}this.graph=new window.Graph(n),this.opts=[],this.opts.closest=!0,this.opts.heuristic=window.astar.heuristics.diagonal})}mouseUp(e){if(this.isMoving)return;this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let i=this.gameMap.globalToLocal(this.stageMouse);var n=this.graph.grid[Math.ceil(this.roleAniNode.y/32)-1][Math.ceil(this.roleAniNode.x/32)-1],r=this.graph.grid[Math.ceil(i.y/32)-1][Math.ceil(i.x/32)-1];this._everyPath=window.astar.search(this.graph,n,r,{closest:this.opts.closest}),this._everyPath.length>0&&(this.isMoving=!0),Laya.timer.loop(100,this,this.loopfun)}loopfun(){if(this._everyPath.length>0){let e=this._everyPath[0].y*32+16,i=this._everyPath[0].x*32+16;e==this.lastX?i>this.lastY?this.angle=90:this.angle=270:e>this.lastX?this.angle=0:this.angle=180,this.switchAni("run"),this.lastX=e,this.lastY=i,Laya.Tween.to(this.roleAniNode,{x:e,y:i},100),this._everyPath.splice(0,1)}else this.switchAni("stand"),Laya.timer.clear(this,this.loopfun),this.isMoving=!1}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(e=null){this.onLoaded()}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);this._animator.play(i),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}getOrientation(e,i){let n=i.split(","),r=360/n.length;return n[Math.floor(e/r)]}onDisable(){Laya.stage.off($_.MOUSE_UP,this,this.mouseUp),this.tiledMap&&this.tiledMap.destroy()}};p([al({type:Laya.Sprite})],Qi.prototype,"gameMap",2),p([al({type:Laya.Prefab})],Qi.prototype,"roleAni",2),p([al({type:"string"})],Qi.prototype,"runAniName",2),p([al({type:"string"})],Qi.prototype,"standAniName",2),p([al({type:Laya.Panel})],Qi.prototype,"sceneWindow",2),Qi=p([yT("zBb5TGy7Swu5_GpFiGzUng")],Qi);var{regClass:gT,property:pye}=Laya,X_=Laya.Rectangle,Hn=class extends Laya.Script{constructor(){super(...arguments);this._rect1=X_.TEMP;this._rect2=X_.TEMP}rectDetection(e,i){return!(e.x>i.x+i.width||e.x+e.width<i.x||e.y>i.y+i.height||e.y+e.height<i.y)}collisionWith(e,i,n){let r=[];if(n==0){var o=Laya.Point.create(),s=e.width/2,l=e.height/2,c=Laya.Point.create(),u,m;o.x=e.x+s,o.y=e.y+l,u=this.rectToRadius(e.width,e.height)}else if(n==2){var v,w;w=this.arrayToPoint(e)}for(let x=0;x<i.length;x++)if(e!=i[x])switch(n){case 0:c.x=i[x].x+i[x].width/2,c.y=i[x].y+i[x].height/2,m=this.rectToRadius(i[x].width,i[x].height),this.circleDetection(o,c,u+m)&&r.push(i[x]);break;case 1:this.rectDetection(e,i[x])&&r.push(i[x]);break;case 2:e.name==="c1"?(v=this.arrayToPoint(i[x]),this.circleAndPolygonDetection(e,v,i[x])&&r.push(i[x])):i[x].name==="c1"?this.circleAndPolygonDetection(i[x],w,e)&&r.push(i[x]):(v=this.arrayToPoint(i[x]),this.polygonDetection(w,v,e,i[x])&&r.push(i[x]));break}return r}circleAndPolygonDetection(e,i,n){let r=this.getSides(i),o=[],s=Laya.Point.create(),l=Laya.Point.create(),c=e.hitArea._hit._cmds[0].radius,u=this.getNodeCoord(i,n);s.x=e.x+e.hitArea._hit._cmds[0].x,s.y=e.y+e.hitArea._hit._cmds[0].y,l=this.getNearestPoint(s,u),o.push(new Laya.Point(l.x-s.x,l.y-s.y));for(let m=0,v=r.length;m<v;m++)o.push(this.perpendicular(r[m]));for(let m=0,v=o.length;m<v;m++){let w=o[m],x=this.getCircleProjection(s,w,c),b=this.getPolygonProjection(u,w);if(!this.isOverlap(x,b))return!1}return!0}getNearestPoint(e,i){let n=i[0],r=this.getDistance(e,n),o,s;for(let l=1;l<i.length;l++)o=i[l],s=this.getDistance(e,o),s<r&&(r=s,n=o);return n}polygonDetection(e,i,n,r){let o=this.getSides(e).concat(this.getSides(i)),s=[],l=this.getNodeCoord(e,n),c=this.getNodeCoord(i,r);for(let u=0,m=o.length;u<m;u++)s.push(this.perpendicular(o[u]));for(let u=0,m=s.length;u<m;u++){let v=s[u],w=this.getPolygonProjection(l,v),x=this.getPolygonProjection(c,v);if(!this.isOverlap(w,x))return!1}return!0}isOverlap(e,i){let n,r;return n=e.min<i.min?e.min:i.min,r=e.max>i.max?e.max:i.max,e.max-e.min+(i.max-i.min)>=r-n}getNodeCoord(e,i){let n=[];for(let r=0;r<e.length;r++){let o=Laya.Point.create();o.x=e[r].x+i.x+i.hitArea._hit._cmds[0].x,o.y=e[r].y+i.y+i.hitArea._hit._cmds[0].y,n.push(o)}return n}getPolygonProjection(e,i){let n=null,r=null;for(let o=0;o<e.length;o++){let s=this.dotProduct(e[o],i)/this.getLength(i);(n===null||s<n)&&(n=s),(r===null||s>r)&&(r=s)}return{min:n,max:r}}getCircleProjection(e,i,n){let r=this.dotProduct(e,i)/this.getLength(i);return{min:r-n,max:r+n}}rectToRadius(e,i){let n;return e==i?n=e/2:n=Math.sqrt(e*e+i*i)/2,n}circleDetection(e,i,n){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))<=n}circlesCollision(e,i,n,r){let o=this.subtract(e,i),s=this.getCircleProjection(e,o,n),l=this.getCircleProjection(i,o,r);return!!this.isOverlap(s,l)}arrayToPoint(e){let i=[],n=[];if(n=e.hitArea._hit._cmds[0].points,n&&n.length>3)for(let r=0;r<n.length/2;r++)i[r]=Laya.Point.create(),i[r].x=n[r*2],i[r].y=n[r*2+1];return i}perpendicular(e){let i=Laya.Point.create();return i.x=e.y,i.y=-e.x,i}getNormal(e){let i=Math.sqrt(e.x*e.x+e.y*e.y);return new Laya.Point(e.y/i,(0-e.x)/i)}getSides(e){var i=e,n=i.length,r=new Array;if(n>=3){for(var o=1,s=i[0];o<n;o++){let l=i[o];r.push(this.subtract(l,s)),s=l}r.push(this.subtract(i[0],i[n-1]))}return r}getLength(e){return Math.sqrt(e.x*e.x+e.y*e.y)}dotProduct(e,i){return e.x*i.x+e.y*i.y}subtract(e,i){return Laya.Point.create().setTo(e.x-i.x,e.y-i.y)}getDistance(e,i){let n=e.x-i.x,r=e.y-i.y;return Math.sqrt(n*n+r*r)}};Hn=p([gT("naI7Ga3ZQzuwHxZXbiaZEw")],Hn);var Qf=class extends Laya.View{};var{regClass:vT,property:fye}=Laya,xa=class extends Qf{constructor(){super();this._detectionType=0;this.collisionNodes=null;xa.i=this}onEnable(){this.collisionNodes=[this.c1,this.p1,this.p2],this._script=this.getComponent(Hn),this.detectionType.selectHandler=new Laya.Handler(this,this.onSelected),this.detectionType.selectedIndex=0}onSelected(e){switch(console.log("onSelected:"+e),this._detectionType=e,e){case 0:this.setCircleLine([this.c11,this.p11,this.p22]);break;case 1:this.setRectLine([this.c11,this.p11,this.p22]);break;case 2:this.c11.graphics.clear(),this.p11.graphics.clear(),this.p22.graphics.clear();break}}collisionWith(e){let i;i=this._script.collisionWith(e,this.collisionNodes,this._detectionType),i.length>0?(i.push(e),this.setLineWidth(i)):this.retsetLineWidth()}setLineWidth(e){for(let i=0;i<e.length;i++)e[i]._graphics._cmds[0].lineWidth=3}retsetLineWidth(){for(let e=0;e<this.collisionNodes.length;e++)this.collisionNodes[e]._graphics._cmds[0].lineWidth=0}setCircleLine(e,i=1,n="#1e00fb"){for(let r=0;r<e.length;r++){e[r].graphics.clear();let o=e[r].width/2,s=e[r].height/2,l=this._script.rectToRadius(e[r].width,e[r].height);e[r].graphics.drawCircle(o,s,l,null,n,i)}}setRectLine(e,i=1,n="#1e00fb"){for(let r=0;r<e.length;r++)e[r].graphics.clear(),e[r].graphics.drawRect(e[r].x,e[r].y,e[r].width,e[r].height,null,n,i)}};xa=p([vT("RrGHZH_SROCrF5XxFa05sg")],xa);var{regClass:LT,property:oo}=Laya,Un=Laya.Event,Q_=Laya.Point,Di=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new Q_;this.axisPivot=new Q_;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1;this.mLastX=0;this.mLastY=0}onEnable(){this.createMap(),this.joystickAxis=this.joystickBG.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(Un.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(Un.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(Un.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(Un.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.sceneWindow.width/2,this.roleAniNode.y=this.sceneWindow.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let e=this._animator.getDefaultState();console.log(e.name)}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(e=null){this.onLoaded()}mouseDown(e){this.touchId=e.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let e=this.joystickBG.globalToLocal(this.stageMouse),i=e.x-this.joystickAxis.width/2,n=e.y-this.joystickAxis.height/2;this.radian=Math.atan2(n-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,e.x,e.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(e.x-this.joystickAxis.width/2,e.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(e){e.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(e){e.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(e,i){let n=i.split(","),r=360/n.length;return n[Math.floor(e/r)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let e=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;this.mLastX+=e,this.mLastY+=i,this.mLastX<0?this.mLastX=0:this.mLastX>1920-this.sceneWindow.width&&(this.mLastX=1920-this.sceneWindow.width),this.mLastY<0?this.mLastY=0:this.mLastY>1280-this.sceneWindow.height&&(this.mLastY=1280-this.sceneWindow.height),this.tiledMap.moveViewPort(this.mLastX,this.mLastY)}getDistance(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}onDisable(){Laya.stage.off(Un.MOUSE_DOWN,this,this.mouseDown),Laya.stage.off(Un.MOUSE_UP,this,this.mouseUp),Laya.stage.off(Un.MOUSE_MOVE,this,this.mouseMove),this.tiledMap&&this.tiledMap.destroy()}};p([oo(Laya.Sprite)],Di.prototype,"gameMap",2),p([oo(Laya.Prefab)],Di.prototype,"roleAni",2),p([oo({type:"string"})],Di.prototype,"runAniName",2),p([oo({type:"string"})],Di.prototype,"standAniName",2),p([oo({type:Laya.Panel})],Di.prototype,"sceneWindow",2),p([oo(Laya.Image)],Di.prototype,"joystickBG",2),Di=p([LT("k2DFVaFIQEyMRaElgOWsVw")],Di);var Zf=class extends Laya.Box{};var{regClass:_T}=Laya,nl=class extends Zf{constructor(){super();this.lastIndex=-1}onEnable(){let e="resources/json/bagList.json";Laya.loader.fetch(e,"json").then(i=>{i.bagList&&i.bagList.length>0&&(this.bagList.array=i.bagList,this.bagList.renderHandler=new Laya.Handler(this,this.onListRender),this.bagList.selectHandler=new Laya.Handler(this,this.onListSelect),this.bagList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.bagList.vScrollBarSkin="")})}onListRender(e,i){i>this.bagList.array.length||i<0}onListSelect(e){this.tips.visible=!0,this.bagList.array[e].listItemBG={skin:"resources/UI/images/bg/bg100-1.png"},this.lastIndex!==-1&&(this.bagList.array[this.lastIndex].listItemBG={skin:"resources/UI/images/bg/bg100-0.png"}),this.lastIndex=e,this.itemImg.skin=this.bagList.array[e].listItemImg.skin,this.itemNumber.text="数量 "+this.bagList.array[e].listItemNumber.text,this.itemReadme.text=this.bagList.array[e].readme}onListMouse(e,i){}onDisable(){}};nl=p([_T("fimeRTYXT46eMH6komwhJQ")],nl);var{regClass:wT,property:Xb}=Laya,ln=class extends Laya.Script{constructor(){super()}onEnable(){var e=this.getDataSourece();Laya.loader.load("prefab/ComboList.lh").then(i=>{let n=i.create();this.comboList=n,this.comboList.array=e,this.comboList.repeatY=e.length,this.combo2.list=this.comboList,this.combo2.list.width=this.combo2.width,this.combo2.list.hScrollBarSkin="",this.combo2.selectHandler=new Laya.Handler(this,this.onSelected2)}),this.combo1.selectHandler=new Laya.Handler(this,this.onSelected1)}onSelected1(e){this.selectedText.text="您选中了："+this.combo1.selectedLabel}onSelected2(e){this.selectedText.text="您选中了："+(e<0?"":this.comboList.array[e].label)}getDataSourece(){for(var e=[],i=0;i<10;i++)e[i]={optText:{text:"选项"+(i+1)}};return e}onDisable(){}};p([Xb({type:Laya.ComboBox})],ln.prototype,"combo1",2),p([Xb({type:Laya.ComboBox})],ln.prototype,"combo2",2),p([Xb({type:Laya.Label})],ln.prototype,"selectedText",2),ln=p([wT("M6bGyqDSRCGU3TkvNeqvRw")],ln);var Jf=class extends Laya.View{};var{regClass:xT}=Laya,rl=class extends Jf{onEnable(){this.hList.array=this.getListDataSource(),this.hList.scrollTo(1);let e=this.hList.cells[1].getChildByName("icon");e.scaleX=e.scaleY=2,this.hList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange),this.leftLimit=this.getLeftLimit(),this.rightLimit=this.getRightLimit()}onScrollBarChange(){var e=this.hList.scrollBar.value,i=this.hList.array;if(e>this.leftLimit){var n=i.shift();i[i.length]=n,this.hList.array=i,this.hList.scrollBar.value=e-this.hList.cells[0].width-this.hList.spaceX,this.iconTweenToLeft()}else e<this.rightLimit&&(n=i.pop(),i.unshift(n),this.hList.array=i,this.hList.scrollBar.value=e+this.hList.cells[0].width+this.hList.spaceX,this.iconTweenToRight())}iconTweenToLeft(e=200){let i=this.hList.cells[0].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},e);let n=this.hList.cells[1].getChildByName("icon");n.scaleX=n.scaleY=1,Laya.Tween.to(n,{scaleX:2,scaleY:2},e)}iconTweenToRight(e=200){let i=this.hList.cells[1].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},e);let n=this.hList.cells[2].getChildByName("icon");n.scaleX=n.scaleY=1,Laya.Tween.to(n,{scaleX:2,scaleY:2},e)}getRightLimit(){return this.hList.cells[0].width-this.hList.spaceX}getLeftLimit(){return this.hList.cells[0].width*2+this.hList.spaceX}getListDataSource(e=5){let i=[];for(let n=0;n<e;n++)i[n]={},i[n].icon={skin:`resources/UI/role/r${n}.png`};return i}};rl=p([xT("WFag7yYwR9q-iI31OJUedg")],rl);var{regClass:IT,property:ey}=Laya,Ia=class extends Laya.Script{constructor(){super();this.optStatus=[];this.timestampFormat=(e,i)=>{let n=i?new Date(i):new Date,r={"M+":n.getMonth()+1,"D+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"S+":n.getMilliseconds()};new RegExp("(Y+)").test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in r)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==1?r[o]:("00"+r[o]).substr((""+r[o]).length)));return e}}onEnable(){let e="resources/json/mailList.json";Laya.loader.fetch(e,"json").then(i=>{let n=i.mailList;n&&n.length>0&&(this.mailList.array=n,this.mailList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.mailList.repeatY=n.length,this.mailList.vScrollBarSkin=""),this.addMail.on(Laya.Event.CLICK,this,this.addMialItem),this.selectDel.on(Laya.Event.CLICK,this,this.listSelectDel),this.selectFlag.on(Laya.Event.CLICK,this,this.listSelectFlag)})}listSelectFlag(){if(this.optStatus.length>0){for(let e=0;e<this.optStatus.length;e++){let i=this.optStatus[e];this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功标记"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}listSelectDel(){if(this.optStatus.length>0){this.optStatus.sort(function(e,i){return i-e});for(let e=0;e<this.optStatus.length;e++)this.mailList.array.splice(this.optStatus[e],1);this.optStatus=[],this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功删除"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}addMialItem(){var e=this.mailList.startIndex+1;let i={mailTitle:{text:"这里是新增加的邮件"+e},mailDateTime:{text:this.timestampFormat("YYYY-MM-DD hh:mm")},opt:{visible:!1},flagStatus:{skin:"resources/UI/images/comp/img_mail.png"},flagBtn:{label:"标为已读",labelColors:"#000000,#000000,#000000"}};if(this.mailList.array.splice(e,0,i),this.optStatus.length>0)for(let n=0;n<this.optStatus.length;n++)this.optStatus[n]>=e&&(this.optStatus[n]+=1);this.mailList.refresh()}onListMouse(e,i){if(e.type==Laya.Event.CLICK){var n=this.optStatus.indexOf(i);switch(e.target.name){case"optBG":n===-1?(this.mailList.array[i].opt={visible:!0},this.optStatus.push(i)):(this.mailList.array[i].opt={visible:!1},this.optStatus.splice(n,1)),this.mailList.refresh();break;case"mailTitle":Laya.Scene.open("scenes/uiDemo/Dialog.scene",!1,{title:this.mailList.array[i].mailTitle.text,text:"邮件内容，此处省略1000字……………………"}),this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"},this.mailList.refresh();break;case"flagBtn":this.mailList.array[i].flag===1?(this.mailList.array[i].flag=0,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail.png"},this.mailList.array[i].flagBtn={label:"标为已读",labelColors:"#000000,#000000,#000000"}):(this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}),this.mailList.refresh();break;case"delBtn":if(this.mailList.array.splice(i,1),n>-1){this.optStatus.splice(n,1);for(let r=n;r<this.optStatus.length;r++)this.optStatus[r]-=1}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"删除成功"});break}}}};p([ey({type:Laya.List})],Ia.prototype,"mailList",2),p([ey({type:Laya.Button})],Ia.prototype,"addMail",2),p([ey({type:Laya.Button})],Ia.prototype,"selectDel",2),p([ey({type:Laya.Button})],Ia.prototype,"selectFlag",2),Ia=p([IT("HzpJPDUEQN69Xg1VasHb-w")],Ia);var{regClass:ET,property:so}=Laya,Mi=class extends Laya.Script{constructor(){super();this.scrollBarIsStop=!1;this.msgIdNow=1;this.itemIsOpen=!1;this.itemOpenId=-1;this.redHotStatus=[];this.mouseDown=!1}onEnable(){this.refreshList.array=this.createListData(9),this.refreshList.repeatY=this.refreshList.array.length,this.refreshList.vScrollBarSkin="",this.toLine.on(Laya.Event.CLICK,this,this.onToLineBtn),this.toTop.on(Laya.Event.CLICK,this,this.onToTopBtn),this.toBottom.on(Laya.Event.CLICK,this,this.onToBottomBtn),this.refreshList.on(Laya.Event.MOUSE_UP,this,this.stageOnMouseUp),this.refreshList.on(Laya.Event.MOUSE_OUT,this,this.stageOnMouseUp),this.refreshList.scrollBar.stopMoveLimit=this.scrollBarIsStopBind.bind(this),this.refreshLimit("dragTopLimit",80),this.refreshLimit("dragBottomLimit",80,20),this.refreshList.mouseHandler=new Laya.Handler(this,this.onListMouse)}stageOnMouseUp(){this.mouseDown=!1}refreshLimit(e,i,n=0,r=2e3){e==="dragTopLimit"?this.refreshList.scrollBar.topMoveLimit=i:e==="dragBottomLimit"&&(this.refreshList.scrollBar.bottomMoveLimit=i),this.refreshList.scrollBar.on(e,this,()=>{if(console.log("达到了滚动限制:"+e),this.refreshLoading.visible=!0,e==="dragTopLimit"){this.refreshLoading.bottom=NaN,this.refreshLoading.top=n;var o=this.createListData(5,"顶部新增的标题");o=o.concat(this.refreshList.array);var s=0+5,l=0;if(this.redHotStatus.length>0)for(let c=0;c<this.redHotStatus.length;c++)this.redHotStatus[c]+=5}else if(e==="dragBottomLimit"){this.refreshList.scrollBar.disableDrag=!0,this.refreshLoading.top=NaN,this.refreshLoading.bottom=n;var o=this.createListData(5,"底部新增的标题");o=this.refreshList.array.concat(o);var s=this.refreshList.array.length-1,l=s+5}this.scrollBarIsStop=!0,Laya.timer.once(r,this,()=>{this.refreshList.array=o,this.refreshList.scrollTo(l),this.refreshList.selectedIndex=s,this.scrollBarIsStop=!1,this.refreshList.scrollBar.backToNormal(),this.refreshLoading.visible=!1})})}onListMouse(e,i){e.type==Laya.Event.MOUSE_DOWN&&(this.mouseDown=!0,this.itemIsOpen?(this.itemIsOpen=!1,this.itemOpenId=-1,Laya.Tween.to(this.openedItem,{x:0},500,null,Laya.Handler.create(this,()=>{this.refreshList.scrollBar.disableDrag=!1}))):(this.moveLastPos=e.target.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),e.target.on(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove,[e.target,i]))),e.type==Laya.Event.MOUSE_UP&&(this.mouseDown=!1,this.itemOnMouseUp()),e.type==Laya.Event.CLICK&&(e.target.name=="flag"&&this.onClickFlag(i),e.target.name=="del"&&this.onClickDel(i))}itemOnMouseUp(){if(this.itemIsOpen){var e;this.openedItem.x<-80?e=-262:(this.itemIsOpen=!1,e=0),e!==this.openedItem.x&&Laya.Tween.to(this.openedItem,{x:e},500),this.refreshList.scrollBar.disableDrag=!1,this.itemOpenId!==-1&&(this.openedItem.off(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove),this.itemOpenId=-1)}}onClickFlag(e){var i=this.redHotStatus.indexOf(e);i==-1?(this.refreshList.array[e].avatar={},this.refreshList.array[e].avatar.redHot={visible:!0},this.refreshList.array[e].flag={flagText:{text:"标记已读"}},this.redHotStatus.push(e)):(this.refreshList.array[e].avatar={redHot:{visible:!1}},this.refreshList.array[e].flag={flagText:{text:"标记未读"}},this.redHotStatus.splice(i,1)),this.refreshList.refresh()}onClickDel(e){this.refreshList.array.splice(e,1),this.itemOpenId=-1;var i=this.redHotStatus.indexOf(e);if(i>-1&&this.redHotStatus.splice(e,1),this.redHotStatus.length>0)for(let n=0;n<this.redHotStatus.length;n++)this.redHotStatus[n]>e&&(this.redHotStatus[n]+=1);this.refreshList.refresh()}onItemBoxMouseMove(e,i){if(this.mouseDown){let n=e.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),r=this.moveLastPos.x-n.x,o=this.moveLastPos.y-n.y;Math.abs(r)>Math.abs(o)&&!this.itemIsOpen&&(this.openedItem=e,this.itemIsOpen=!0,this.refreshList.scrollBar.disableDrag=!0,this.itemOpenId=i),this.itemIsOpen&&(this.openedItem.x-=r,this.openedItem.x<-262?this.openedItem.x=-262:this.openedItem.x>0&&(this.openedItem.x=0))}else this.refreshList.scrollBar.disableDrag=!1}scrollBarIsStopBind(){return this.scrollBarIsStop}onToLineBtn(){let e=parseInt(this.lineNumber.text)-1;this.refreshList.scrollTo(e),e<this.refreshList.array.length&&(this.refreshList.selectedIndex=e)}onToTopBtn(){this.refreshList.scrollTo(0),this.refreshList.selectedIndex=0}onToBottomBtn(){let e=this.refreshList.array.length-1;this.refreshList.scrollTo(e),this.refreshList.selectedIndex=e}createListData(e=5,i="初始测试标题"){let n=new Date,r=n.getHours()<10?"0"+n.getHours():""+n.getHours(),o=n.getMinutes()<10?"0"+n.getMinutes():""+n.getMinutes();for(var s=[],l=0;l<e;l++){let c={text:r+" : "+o};s[l]={},s[l].msgTime=c,s[l].msgTitle={text:i+(this.msgIdNow+l)},s[l].avatar={redHot:{visible:!1}}}return this.msgIdNow+=l,s}onDisable(){}};p([so({type:Laya.List})],Mi.prototype,"refreshList",2),p([so({type:Laya.Button})],Mi.prototype,"toLine",2),p([so({type:Laya.Button})],Mi.prototype,"toTop",2),p([so({type:Laya.Button})],Mi.prototype,"toBottom",2),p([so({type:Laya.Box})],Mi.prototype,"refreshLoading",2),p([so({type:Laya.Label})],Mi.prototype,"lineNumber",2),Mi=p([ET("m0TR8w0gTbWSvHbZTzrORA")],Mi);var ty=class extends Laya.View{};var{regClass:TT,property:Hye}=Laya,ol=class extends ty{onEnable(){this.tree1.xml=this.getTreeData(!0),this.tree2.xml=this.getTreeData(!1)}getTreeData(t){let e="<data>";if(t)e+="<dir itemLabel='一级目录一' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><dir itemLabel='一级目录二' isOpen='true'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/></dir><dir itemLabel='一级目录三' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><file itemLabel='一级子项1 '/><file itemLabel='一级子项2 '/>";else for(let i=0;i<5;i++){e+="<item title='目录"+(i+1)+"' isOpen='true'>";for(let n=0;n<5;n++)e+="<subpage title='子项标题"+(n+1)+"' />";e+="</item>"}return e+="</data>",new Laya.XML(e)}};ol=p([TT("GJWtWFwsQoqNpjA1k42SpQ")],ol);var iy=class extends Laya.Scene{};var{regClass:ST,property:Gye}=Laya,sl=class extends iy{onEnable(){}onDisable(){}};sl=p([ST("JQ1fkq03ThewqQWRXQPgmw")],sl);var{regClass:CT,property:Wye}=Laya,Vn=class extends Laya.Script{constructor(){super()}baseUI(e){this.window=e,this.searchCloseButton(e)}searchCloseButton(e){for(let i=0;i<e.numChildren;i++){let n=e.getChildAt(i);n instanceof Laya.Button&&n.name=="closeBtn"?(n.on(Laya.Event.MOUSE_DOWN,this,()=>{this.window.close()}),console.log("baseUI 发现closeBtn，统一添加关闭事件")):this.searchCloseButton(n)}}onDisable(){}};Vn=p([CT("7Fkz4T7JQ5ujwNcIx9lGNA")],Vn);var{regClass:kT,property:$ye}=Laya,ll=class extends Vn{constructor(){super()}onEnable(){this.ui=this.owner,this.baseUI(this.ui)}onDisable(){}};ll=p([kT("utN7JQs_T3iw6KqWT-beFQ")],ll);var ay=class extends Laya.Box{};var{regClass:AT,property:ebe}=Laya,Z_=Laya.Event,J_=Laya.Mouse,cl=class extends ay{constructor(){super()}onEnable(){Laya.Browser.onPC?(this.panel.on(Z_.MOUSE_OVER,this,()=>{J_.cursor="move"}),this.panel.on(Z_.MOUSE_OUT,this,()=>{J_.cursor="auto"})):this.topLab.text="背景可拖拽，双指缩放改变大小"}};cl=p([AT("9s1SW9WKRrSodo6JY27VSw")],cl);var{regClass:DT,property:ny}=Laya,Ea=class extends Laya.Script{constructor(){super()}onEnable(){this.graphics=this.graphicsSprite.graphics,Laya.timer.loop(2e3,this,()=>{this.changeImgSkin(),this.changeSpriteTexture(),this.changeFillTexture(),this.changeTexture()})}changeImgSkin(){this.Img.skin=this.randomImg()}changeSpriteTexture(){this.spImg.loadImage(this.randomImg(!0,6,5))}changeFillTexture(){this.graphics.clear();let e=this.randomImg(!0,4);Laya.loader.load(e).then(i=>{this.graphics.fillTexture(i,0,0,1,1)})}changeTexture(){this.textureImg.graphics.clear();let e=Laya.loader.getRes(this.randomImg(!0,8));this.textureImg.graphics.drawTexture(e)}randomImg(e=!1,i=8,n=1){let r=Math.floor(Math.random()*(i-n+1))+n;return e?"resources/UI/role/m"+r+".png":"resources/UI/role/w"+r+".png"}onDisable(){}};p([ny({type:Laya.Image})],Ea.prototype,"Img",2),p([ny({type:Laya.Sprite})],Ea.prototype,"spImg",2),p([ny({type:Laya.Sprite})],Ea.prototype,"graphicsSprite",2),p([ny({type:Laya.Sprite})],Ea.prototype,"textureImg",2),Ea=p([DT("ulgCMWfCQKiihSJynpbJFg")],Ea);var ry=class extends Laya.View{};var{regClass:MT,property:sbe}=Laya,oy=Laya.Event,ul=class extends ry{onEnable(){this._hitArea.on(oy.MOUSE_DOWN,this,()=>{this._hitArea.off(oy.MOUSE_MOVE,this,this.bg3MaskMove),this._hitArea.startDrag(),this._hitArea.on(oy.MOUSE_MOVE,this,this.bg3MaskMove)}),this._mask.on(oy.MOUSE_MOVE,this,this.maskMove)}bg3MaskMove(t){t.stopPropagation(),this.bg3Mask.x=this._hitArea.x,this.bg3Mask.y=this._hitArea.y}maskMove(){let t=this.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),e=t.x-this._mask.width/this.bg2.scaleX/2,i=t.y-this._mask.height/this.bg2.scaleY/2;e>80&&i>80&&(this._mask.x=t.x-this._mask.width/this.bg2.scaleX/2,this._mask.y=t.y-this._mask.height/this.bg2.scaleY/2,this.bg2.x=(-t.x-this._mask.width/2)*(this.bg2.scaleX-1),this.bg2.y=(-t.y-this._mask.height/2)*(this.bg2.scaleY-1))}};ul=p([MT("zt0rBsEST9KVJgcimd7SFA")],ul);var{regClass:BT,property:Fn}=Laya,gi=class extends Laya.Script{constructor(){super()}onEnable(){this.changeMouseCursor(),this.throughTab.selectHandler=new Laya.Handler(this,this.onSwitchTab)}onSwitchTab(e){switch(e){case 0:this.leftBg.hitTestPrior=!0,this.rightBg.hitTestPrior=!0;break;case 1:this.leftBg.hitTestPrior=!1,this.rightBg.hitTestPrior=!1;break}}changeMouseCursor(){this.leftBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.leftBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.rightBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.rightBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.leftBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧的可点击区域",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.leftBg.name)}),this.rightBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧的可点击区域",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.rightBg.name)}),this.btn1.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮1"}),console.log("click btn1")}),this.btn2.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮2"}),console.log("click btn2")}),this.close1.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧关闭按钮",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.close1.name)}),this.close2.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧关闭按钮",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.close2.name)})}onDisable(){}};p([Fn({type:Laya.Tab})],gi.prototype,"throughTab",2),p([Fn({type:Laya.Sprite})],gi.prototype,"leftBg",2),p([Fn({type:Laya.Sprite})],gi.prototype,"rightBg",2),p([Fn({type:Laya.Button})],gi.prototype,"btn1",2),p([Fn({type:Laya.Button})],gi.prototype,"btn2",2),p([Fn({type:Laya.Sprite})],gi.prototype,"close1",2),p([Fn({type:Laya.Sprite})],gi.prototype,"close2",2),gi=p([BT("AmLUThtNSaW6zL9W205gyg")],gi);var{regClass:PT,property:sy}=Laya,Ta=class extends Laya.Script{onEnable(){this.bTop.getComponent(Laya.BoxCollider).width=this.bTop.width,this.bBottom.getComponent(Laya.BoxCollider).width=this.bBottom.width,this.bRight.getComponent(Laya.BoxCollider).height=this.bRight.height,this.bLeft.getComponent(Laya.BoxCollider).height=this.bLeft.height}};p([sy({type:Laya.Image})],Ta.prototype,"bTop",2),p([sy({type:Laya.Image})],Ta.prototype,"bBottom",2),p([sy({type:Laya.Image})],Ta.prototype,"bRight",2),p([sy({type:Laya.Image})],Ta.prototype,"bLeft",2),Ta=p([PT("jp5l8WZtQLuVyfU4ljEFyQ")],Ta);var ly=class extends Laya.View{};var{regClass:RT,property:bbe}=Laya,pl=class extends ly{onEnable(){this.testProgress()}testProgress(){this.loading2.value=.01,this.loadText.text="资源加载中……",Laya.timer.loop(100,this,this.changeProgress)}changeProgress(){this.loading2.value+=.05,this.loading2.value==1&&(this.loadText.text="资源加载完成",Laya.timer.clear(this,this.changeProgress),Laya.timer.once(3e3,this,()=>{this.testProgress()}))}};pl=p([RT("9w97n2rXRjiACN_vzizQPw")],pl);var{regClass:NT,property:Lbe}=Laya,cn=class extends Laya.Script{constructor(){super()}onStart(){this._anim=this.owner.getComponent(Laya.Animator)}isPlayanimaByName(e=0){let i=this._anim.getControllerLayer(e);if(i==null)return!1;let n=i.getCurrentPlayState();return n==null?!1:n.animatorState.clip.islooping?!0:n._finish}isSameByName(e,i=0){let n=this._anim.getControllerLayer(i);if(n==null)return!1;let r=n.getCurrentPlayState();if(r==null)return!1;if(r.animatorState.name==e)return!0}playAnim(e,i=!1){if(i){if(this.isSameByName(e))return;this._anim.play(e,0,0);return}this.isPlayanimaByName()||this._anim.play(e,0,0)}};cn=p([NT("q0uAMn-DTUm70T4fGtxGlw")],cn);var tt=Laya.InputManager,{regClass:OT,property:Cbe}=Laya,ml=class extends Laya.Script{constructor(){super(...arguments);this.currRockerBar=null;this.maxDistance=80;this.isMouseDown=!1;this.mouseDownPosition=new Laya.Point;this._currentMouse=new Laya.Point;this.initRockerBarPosition=new Laya.Point;this.key1Pressed=!1;this.key2Pressed=!1;this.key3Pressed=!1;this.key4Pressed=!1;this.key5Pressed=!1;this.key6Pressed=!1;this.directionOffset=0;this.isKeyRun=!1}onEnable(){Laya.InputManager.multiTouchEnabled=!0}onStart(){this.currRockerBar=this.owner.getChildByName("freebar"),this.img_freebar_arrow=this.owner.getChildByName("img_freebar_arrow"),this.freetrack=this.owner.getChildByName("freetrack"),this.img_arrow_left=this.freetrack.getChildByName("img_arrow_left"),this.img_arrow_right=this.freetrack.getChildByName("img_arrow_right"),this.img_arrow_up=this.freetrack.getChildByName("img_arrow_up"),this.img_arrow_down=this.freetrack.getChildByName("img_arrow_down"),this.img_freebar_arrow.visible=!1,Laya.Browser.onPC?this.freetrack.visible=!0:this.img_arrow_left.visible=this.img_arrow_right.visible=this.img_arrow_up.visible=this.img_arrow_down.visible=!1,this.initialise()}initialise(){this.initRockerBarPosition.setTo(this.currRockerBar.x,this.currRockerBar.y),this.currRockerBar.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onMouseUp)}onSkillKeyDown(e,i,n){switch(e.stopPropagation(),i){case 1:this.key1Pressed=n;break;case 2:this.key2Pressed=n;break;case 3:this.key3Pressed=n;break}}onMouseDown(e){K.instance.stopAll||(e.stopPropagation(),this.isMouseDown=!0,this.currRockerBar.selected=!0,Laya.Browser.onPC||(this.freetrack.visible=!0),this.mouseDownPosition.setTo(this.owner.mouseX,this.owner.mouseY),console.log("onMouseDown this.owner.mouse: ",this.owner.mouseX,this.owner.mouseY),this.isKeyRun=!1,this.touchId=e.touchId)}onMouseUp(e){this.isMouseDown&&this.endClick(e)}endClick(e){this.isMouseDown=!1,this.currRockerBar.x=this.initRockerBarPosition.x,this.currRockerBar.y=this.initRockerBarPosition.y,this.currRockerBar.selected=!1,this.setDir(-4)}onMouseMove(e){if(!this.isMouseDown||!this.currRockerBar)return;e.stopPropagation(),this._currentMouse.setTo(e.stageX,e.stageY);let i=this.owner.globalToLocal(this._currentMouse,!1),n=i.x-this.mouseDownPosition.x,r=i.y-this.mouseDownPosition.y;if(Math.sqrt(n**2+r**2)<this.maxDistance)this.currRockerBar.x=this.initRockerBarPosition.x+n,this.currRockerBar.y=this.initRockerBarPosition.y+r;else{let s=Math.atan2(n,r);this.currRockerBar.x=Math.sin(s)*this.maxDistance+this.initRockerBarPosition.x,this.currRockerBar.y=Math.cos(s)*this.maxDistance+this.initRockerBarPosition.y}if(Math.abs(n)>this.directionOffset||Math.abs(r)>this.directionOffset){let s=At.judgePosition(n,r);this.setDir(s)}}onUpdate(){K.instance.stopAll||this.getKeyboardPressed()}setDir(e){if(this.lastDirection!=e&&(O.instance.setMyHeroDirection(e),this.lastDirection=e),e==-4)this.img_freebar_arrow.visible=!1;else{this.img_freebar_arrow.visible=!0;let i=e+90;this.img_freebar_arrow.rotation=i}}getKeyboardPressed(){if(tt.hasKeyDown(Laya.Keyboard.W)&&tt.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(225)):tt.hasKeyDown(Laya.Keyboard.W)&&tt.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(315)):tt.hasKeyDown(Laya.Keyboard.S)&&tt.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(135)):tt.hasKeyDown(Laya.Keyboard.S)&&tt.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(45)):tt.hasKeyDown(Laya.Keyboard.W)?(this.isKeyRun=!0,this.setDir(270)):tt.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(0)):tt.hasKeyDown(Laya.Keyboard.S)?(this.isKeyRun=!0,this.setDir(90)):tt.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(180)):this.isKeyRun&&this.setDir(-4),tt.hasKeyDown(Laya.Keyboard.H)||tt.hasKeyDown(Laya.Keyboard.NUMPAD_1)){if(this.key1Pressed)return;this.key1Pressed=!0,g.intance.event(y.EVENT_CLICK_NUM,1),Laya.timer.once(500,this,this.notKey1Pressed)}if(tt.hasKeyDown(Laya.Keyboard.J)||tt.hasKeyDown(Laya.Keyboard.NUMPAD_2)){if(this.key2Pressed)return;this.key2Pressed=!0,g.intance.event(y.EVENT_CLICK_NUM,2),Laya.timer.once(500,this,this.notKey2Pressed)}if(tt.hasKeyDown(Laya.Keyboard.K)||tt.hasKeyDown(Laya.Keyboard.NUMPAD_3)){if(this.key3Pressed)return;this.key3Pressed=!0,g.intance.event(y.EVENT_CLICK_NUM,3),Laya.timer.once(500,this,this.notKey3Pressed)}if(tt.hasKeyDown(Laya.Keyboard.L)||tt.hasKeyDown(Laya.Keyboard.NUMPAD_4)){if(this.key4Pressed)return;this.key4Pressed=!0,g.intance.event(y.EVENT_CLICK_NUM,4),Laya.timer.once(500,this,this.notKey4Pressed)}if(tt.hasKeyDown(Laya.Keyboard.M)||tt.hasKeyDown(Laya.Keyboard.NUMPAD_5)){if(this.key5Pressed)return;this.key5Pressed=!0,g.intance.event(y.EVENT_CLICK_NUM,5),Laya.timer.once(500,this,this.notKey5Pressed)}if(tt.hasKeyDown(Laya.Keyboard.N)||tt.hasKeyDown(Laya.Keyboard.NUMPAD_6)){if(this.key6Pressed)return;this.key6Pressed=!0,g.intance.event(y.EVENT_CLICK_NUM,6),Laya.timer.once(500,this,this.notKey6Pressed)}}notKey1Pressed(){this.key1Pressed=!1}notKey2Pressed(){this.key2Pressed=!1}notKey3Pressed(){this.key3Pressed=!1}notKey4Pressed(){this.key4Pressed=!1}notKey5Pressed(){this.key5Pressed=!1}notKey6Pressed(){this.key6Pressed=!1}getKeyPressed(e){var i=e.toParentPoint(new Laya.Point(e.x,e.y));return i.x>e.x&&i.x<e.x+e.width&&i.y>e.y&&i.y<e.y+e.height}getDistance(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}onDisable(){Laya.InputManager.multiTouchEnabled=!1}};ml=p([OT("7cTqWb35RwygSkuWy4QkgQ")],ml);var lo=class{static playSkillEffect(t,e,i){var n=["Attack01","Attack02","Attack03","Attack04"],r=n[e];Laya.Sprite3D.load(t,Laya.Handler.create(null,function(o){i.addChild(o);var s=o.getChildByName(r);s.active=!0;var l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play(),setTimeout(()=>{o.removeSelf()},1e3)}))}static playEnemyHurtSkillEffect(t,e){Laya.Sprite3D.load(t,Laya.Handler.create(null,function(i){e.addChild(i);var n="Attack",r=i.getChildByName(n),o=r.getComponent(Laya.ShurikenParticleRenderer);if(o._particleSystem.play(),r.numChildren>0)for(let c=0;c<r.numChildren;c++){var s=r.getChildAt(c),l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}static playNormalEffect(t,e){Laya.Sprite3D.load(t,Laya.Handler.create(null,function(i){e.addChild(i);var n=i,r=n.getComponent(Laya.ShurikenParticleRenderer);if(r._particleSystem.play(),n.numChildren>0)for(let l=0;l<n.numChildren;l++){var o=n.getChildAt(l),s=o.getComponent(Laya.ShurikenParticleRenderer);s._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}};var{regClass:HT,property:e0}=Laya,zn=class extends Laya.Script{constructor(){super();this.followTarget=null;this.speed=.02;this.mLife=5;this.mIsEnd=!1;this.mIsAttack=!1;this.mIsAttackStart=!1;this.mCanPlayFirst=!0;this.mAttackDelayTime=0;this.mCurrentIndex=0;this.followTarget=O.instance.getCurrentHero()}onUpdate(){if(!this.mIsEnd){this.followTarget==null&&(this.followTarget=O.instance.getCurrentHero());var e=new Laya.Vector3(this.followTarget.transform.position.x,0,this.followTarget.transform.position.z),i=new Laya.Vector3(this.owner.transform.position.x,0,this.owner.transform.position.z),n=Laya.Vector3.distance(e,i);if(n<10)if(n<=1)this.mIsAttack?this.isAttackendByPlayer():(this.mCanPlayFirst?(this.mCanPlayFirst=!1,this.attackPlayer()):(this.mAttackDelayTime=this.mAttackDelayTime+Laya.timer.delta,this.mAttackDelayTime>1e3&&(this.mAttackDelayTime=0,this.attackPlayer())),this.mIsAttackStart=!1),O.instance.insertValidList(this.owner);else{this.mAttackDelayTime=0;var r=new Laya.Vector3;Laya.Vector3.subtract(e,i,r),Laya.Vector3.normalize(r,r),this.owner.transform.lookAt(e,Laya.Vector3.Up);var o=this.owner.transform.position;o.vadd(new Laya.Vector3(r.x*this.speed,0,r.z*this.speed),o),this.owner.transform.position=o,this.anim&&this.anim.playAnim("run",!0),this.mCanPlayFirst=!0,this.mIsAttackStart=!1,this.mIsAttack=!1}else this.anim&&this.anim.playAnim("ldle",!0),O.instance.removeValidListByValue(this.owner);this.mLife<=0&&(this.mIsEnd=!0,this.anim&&this.anim.playAnim("die",!0),setTimeout(()=>{O.instance.removeValidListByValue(this.owner),this.owner.removeSelf();var s=O.instance.getCurrentPlane(),l=this.mCurrentIndex;O.instance.createEnemy(s.getChildAt(l),l)},600))}}setCurrentIndex(e){this.mCurrentIndex=e}setLife(e){this.mLife=e}attackPlayer(){lo.playEnemyHurtSkillEffect("resources/prefab/eff_monster.lh",this.owner.getChildAt(0)),O.instance.playSound(2),this.anim&&this.anim.playAnim("attack",!0),setTimeout(()=>{this.mIsEnd||this.anim&&this.anim.playAnim("ldle",!0)},500)}isAttackendByPlayer(){this.mIsAttackStart||(this.anim&&this.anim.playAnim("shouji",!0),lo.playNormalEffect("resources/prefab/eff_shouji.lh",this.owner.getChildAt(0)),setTimeout(()=>{this.mIsEnd||(this.anim&&this.anim.playAnim("shouji",!0),this.mIsAttack=!1)},500),this.mIsAttackStart=!0)}getLife(){return this.mLife}setIsAttack(e){this.mIsAttack=e}};p([e0({type:cn})],zn.prototype,"anim",2),p([e0({type:"number"})],zn.prototype,"speed",2),zn=p([HT("eWO-rqURQ6ag7phXtJPZCA")],zn);var{regClass:UT,property:dl}=Laya,Zi=class extends Laya.Script{constructor(){super();this.animname="";this.force=!1;this.isBig=!1;this.isCanClick=!0}onStart(){g.intance.on(y.EVENT_CLICK_NUM3,this,this.onMouseClick)}onMouseClick(e){this.isCanClick&&(Laya.Tween.to(this.btn_pic,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this.btn_pic,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)})),O.instance.myHeroSpr.getComponent(Nn).catchItem(),O.instance.playSound(1),this.anim1&&(this.anim1.playAnim(this.animname,this.force),setTimeout(()=>{this.anim1.playAnim("idle",this.force),this.isCanClick=!0},500)))}onDestroy(){g.intance.offAllCaller(this)}};p([dl({type:cn})],Zi.prototype,"anim1",2),p([dl({type:"string"})],Zi.prototype,"animname",2),p([dl({type:"boolean"})],Zi.prototype,"force",2),p([dl({type:"boolean"})],Zi.prototype,"isBig",2),p([dl({type:Laya.Sprite})],Zi.prototype,"btn_pic",2),Zi=p([UT("xovkzdhOSuOc_JJKi_7s2g")],Zi);var{regClass:VT,property:t0}=Laya,Gn=class extends Laya.Script{constructor(){super();this.isBig=!1;this.isCanClick=!0}onStart(){g.intance.on(y.EVENT_CLICK_NUM,this,this.onNumberClick)}onNumberClick(e){e==1?this.isBig||this.onMouseClick(null):this.isBig&&this.onMouseClick(null)}onMouseClick(e){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=O.instance.getValidList();Laya.Tween.to(this,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)}));var n=0;this.isBig?(O.instance.myHeroSpr.attack(),O.instance.playSound(3)):(O.instance.myHeroSpr.attack(),O.instance.playSound(1)),setTimeout(()=>{this.isCanClick=!0},500)}}getDistance(e,i){return Math.sqrt(e*e+i*i)}getDistanceByPoint(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}onDestroy(){g.intance.offAllCaller(this)}};p([t0({type:"boolean"})],Gn.prototype,"isBig",2),p([t0({type:Laya.Sprite})],Gn.prototype,"btn_pic",2),Gn=p([VT("ye1w48wgTbqktuLPDOjmkw")],Gn);var{regClass:FT,property:$be}=Laya,hl=class extends Laya.Script{constructor(){super(...arguments);this.maxX=0;this.minX=-90;this.maxY=0;this.minY=-580;this.scaleSize=.1;this.lastDistance=0;this.startedSingleTouchDrag=!1}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),this.onMouseWheel()}onMouseWheel(){this.owner.on(Laya.Event.MOUSE_WHEEL,this,e=>{let i=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY));e.delta>0&&(this.owner.scaleX+=this.scaleSize,this.owner.scaleY+=this.scaleSize),e.delta<0&&(this.owner.scaleX-=this.scaleSize,this.owner.scaleY-=this.scaleSize,this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1));let n=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),r=(n.x-i.x)*this.owner.scaleX,o=(n.y-i.y)*this.owner.scaleY;r+=this.owner.x,o+=this.owner.y,this.updateLimit(),r>this.maxX?this.owner.x=this.maxX:r<this.minX?this.owner.x=this.minX:this.owner.x=r,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o})}onStart(){this.updateLimit()}updateLimit(){let e=this.owner.parent;this.minX=Math.min(e.width-this.owner.width*this.owner.scaleX,0),this.minY=Math.min(e.height-this.owner.height*this.owner.scaleY,0)}onMouseDown(e){if(e.stopPropagation(),e.touches&&e.touches.length>1){this.startedSingleTouchDrag&&(this.owner.stopDrag(),this.startedSingleTouchDrag=!1);let i=this.setPivot(e);!i.x||!i.y?console.log("(((((((((((((((((((((((",this.lastPivot,JSON.parse(JSON.stringify(e.touches))):(this.lastDistance=this.getDistance(e),this.lastPivot=i,this.owner.on(Laya.Event.MOUSE_MOVE,this,this.mouseMove))}else this.owner.startDrag(),this.startedSingleTouchDrag=!0}onMouseUp(e){this.owner.off(Laya.Event.MOUSE_MOVE,this,this.mouseMove)}getDistance(e){var i=0;if(e.touches&&e.touches.length>1){let n=e.touches[0].pos.x-e.touches[1].pos.x,r=e.touches[0].pos.y-e.touches[1].pos.y;i=Math.sqrt(n*n+r*r)}return i}mouseMove(e){let i=this.getDistance(e);this.owner.scaleX+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleY+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1),this.owner.scaleX>5&&(this.owner.scaleX=5),this.owner.scaleY>5&&(this.owner.scaleY=5);let n=this.setPivot(e);if(!n.x||!n.y)console.log("$$$$$$$$$$$",n,JSON.parse(JSON.stringify(e.touches)));else{this.updateLimit();let r=(n.x-this.lastPivot.x)*this.owner.scaleX,o=(n.y-this.lastPivot.y)*this.owner.scaleY;r+=this.owner.x,o+=this.owner.y,r>this.maxX?this.owner.x=this.maxX:r<this.minX?this.owner.x=this.minX:this.owner.x=r,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o,this.lastDistance=i}}setPivot(e){if(e.touches&&e.touches.length>=2){let i=this.owner.globalToLocal(new Laya.Point(e.touches[0].pos.x,e.touches[0].pos.y)),n=this.owner.globalToLocal(new Laya.Point(e.touches[1].pos.x,e.touches[1].pos.y));return new Laya.Point((i.x+n.x)/2,(i.y+n.y)/2)}return this.lastPivot}onUpdate(){this.owner.x>this.maxX&&(this.owner.x=this.maxX),this.owner.x<this.minX&&(this.owner.x=this.minX),this.owner.y>this.maxY&&(this.owner.y=this.maxY),this.owner.y<this.minY&&(this.owner.y=this.minY)}addTestPoint(e,i="#ff0000",n=2){let r=new Laya.Sprite;r.graphics.drawCircle(0,0,n,i),this.owner.addChild(r),r.pos(e.x,e.y)}};hl=p([FT("c71-MoP2RIyCrdBAfjnIgw")],hl);var{regClass:zT,property:GT}=Laya,co=class extends Laya.Script{constructor(){super(...arguments);this.tipsText="";this.isDown=!1}onEnable(){this.tipsText.replace(/(^\s*)|(\s*$)/g,"")}onMouseDown(){this.owner.startDrag(),this.isDown=!0}onMouseUp(){this.isDown=!1}onMouseMove(){this.isDown&&xa.i.collisionWith(this.owner)}onMouseOver(){Laya.Mouse.cursor="move",this.tipsText!==""&&Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:this.tipsText})}onMouseOut(){Laya.Mouse.cursor="auto"}};p([GT({type:"string"})],co.prototype,"tipsText",2),co=p([zT("oWa7FUgoQ6CqtyJh_D1Y2w")],co);var{regClass:jT,property:fl}=Laya,cy=Laya.Event,i0=Laya.Point,Ji=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new i0;this.axisPivot=new i0;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.joystickBG=this.owner,this.joystickAxis=this.owner.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(cy.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(cy.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(cy.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(cy.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.gameMap.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.gameMap.width/2,this.roleAniNode.y=this.gameMap.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D)}mouseDown(e){this.touchId=e.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let e=this.joystickBG.globalToLocal(this.stageMouse),i=e.x-this.joystickAxis.width/2,n=e.y-this.joystickAxis.height/2;this.radian=Math.atan2(n-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),console.log("radian: "+this.radian+", angle: "+this.angle),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,e.x,e.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(e.x-this.joystickAxis.width/2,e.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(e){e.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(e){e.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(e,i){let n=i.split(","),r=360/n.length;return n[Math.floor(e/r)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let e=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;(e<0&&this.gameMap.x<0||e>0&&this.gameMap.x>this.sceneWindow.width-this.gameMap.width)&&(this.gameMap.x-=e),(i<0&&this.gameMap.y<0||i>0&&this.gameMap.y>this.sceneWindow.height-this.gameMap.height)&&(this.gameMap.y-=i)}getDistance(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}};p([fl({type:Laya.Prefab})],Ji.prototype,"roleAni",2),p([fl({type:"string"})],Ji.prototype,"runAniName",2),p([fl({type:"string"})],Ji.prototype,"standAniName",2),p([fl({type:Laya.Sprite})],Ji.prototype,"gameMap",2),p([fl({type:Laya.Box})],Ji.prototype,"sceneWindow",2),Ji=p([jT("Pl5-_PonSLe-7mCnxeXfRw")],Ji);var{regClass:qT,property:age}=Laya,yl=class extends Laya.Script{constructor(){super();this.isOpen=!0}onEnable(){this.toolbarBG=this.owner.parent,this._owner=this.owner,this.menu=this.owner.parent.getChildByName("menu")}onMouseDown(e){e.stopPropagation(),this.isOpen?(Laya.Tween.to(this.toolbarBG,{width:106},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:52,rotation:540},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!1})),Laya.Tween.to(this.menu,{alpha:0},300,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!1}))):(Laya.Tween.to(this.toolbarBG,{width:460},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:402,rotation:-360},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!0})),Laya.Tween.to(this.menu,{alpha:1},200,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!0})))}onDisable(){}};yl=p([qT("hPkwKQvKQTaeBeEpHxNUEA")],yl);})();
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
