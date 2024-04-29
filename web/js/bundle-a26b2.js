"use strict";(()=>{var n0=Object.create;var xl=Object.defineProperty;var Yb=Object.getOwnPropertyDescriptor;var o0=Object.getOwnPropertyNames;var s0=Object.getPrototypeOf,l0=Object.prototype.hasOwnProperty;var ae=(a,t)=>()=>(a&&(t=a(a=0)),t);var c0=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),$b=(a,t)=>{for(var e in t)xl(a,e,{get:t[e],enumerable:!0})},u0=(a,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of o0(t))!l0.call(a,r)&&r!==e&&xl(a,r,{get:()=>t[r],enumerable:!(i=Yb(t,r))||i.enumerable});return a};var p0=(a,t,e)=>(e=a!=null?n0(s0(a)):{},u0(t||!a||!a.__esModule?xl(e,"default",{value:a,enumerable:!0}):e,a));var m=(a,t,e,i)=>{for(var r=i>1?void 0:i?Yb(t,e):t,n=a.length-1,o;n>=0;n--)(o=a[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&xl(t,e,r),r};function Qb(a,t){return a.exec(t)?.groups}var Zb=ae(()=>{"use strict"});function Ml(a){let t=a.type;if(Jb.test(a.type)&&"components"in a){t="(";let e=a.components.length;for(let r=0;r<e;r++){let n=a.components[r];t+=Ml(n),r<e-1&&(t+=", ")}let i=Qb(Jb,a.type);return t+=`)${i?.array??""}`,Ml({...a,type:t})}return"indexed"in a&&a.indexed&&(t=`${t} indexed`),a.name?`${t} ${a.name}`:t}var Jb,ey=ae(()=>{"use strict";Zb();Jb=/^tuple(?<array>(\[(\d*)\])*)$/});function Qr(a){let t="",e=a.length;for(let i=0;i<e;i++){let r=a[i];t+=Ml(r),i!==e-1&&(t+=", ")}return t}var ty=ae(()=>{"use strict";ey()});function lf(a){return a.type==="function"?`function ${a.name}(${Qr(a.inputs)})${a.stateMutability&&a.stateMutability!=="nonpayable"?` ${a.stateMutability}`:""}${a.outputs.length?` returns (${Qr(a.outputs)})`:""}`:a.type==="event"?`event ${a.name}(${Qr(a.inputs)})`:a.type==="error"?`error ${a.name}(${Qr(a.inputs)})`:a.type==="constructor"?`constructor(${Qr(a.inputs)})${a.stateMutability==="payable"?" payable":""}`:a.type==="fallback"?"fallback()":"receive() external payable"}var iy=ae(()=>{"use strict";ty()});var ay=ae(()=>{"use strict";iy()});function Ht(a,{includeName:t=!1}={}){if(a.type!=="function"&&a.type!=="event"&&a.type!=="error")throw new wo(a.type);return`${a.name}(${_o(a.inputs,{includeName:t})})`}function _o(a,{includeName:t=!1}={}){return a?a.map(e=>g0(e,{includeName:t})).join(t?", ":","):""}function g0(a,{includeName:t}){return a.type.startsWith("tuple")?`(${_o(a.components,{includeName:t})})${a.type.slice(5)}`:a.type+(t&&a.name?` ${a.name}`:"")}var pr=ae(()=>{"use strict";Lt()});function rt(a,{strict:t=!0}={}){return!a||typeof a!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(a):a.startsWith("0x")}var Ii=ae(()=>{"use strict"});function Qe(a){return rt(a,{strict:!1})?Math.ceil((a.length-2)/2):a.length}var Ma=ae(()=>{"use strict";Ii()});var ry,ny=ae(()=>{"use strict";ry="2.9.3"});var oy,mr,sy,xo=ae(()=>{"use strict";ny();oy=a=>a,mr=a=>a,sy=()=>`viem@${ry}`});function ly(a,t){return t?.(a)?a:a&&typeof a=="object"&&"cause"in a?ly(a.cause,t):t?null:a}var B,Ve=ae(()=>{"use strict";xo();B=class a extends Error{constructor(t,e={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:sy()});let i=e.cause instanceof a?e.cause.details:e.cause?.message?e.cause.message:e.details,r=e.cause instanceof a&&e.cause.docsPath||e.docsPath;this.message=[t||"An error occurred.","",...e.metaMessages?[...e.metaMessages,""]:[],...r?[`Docs: https://viem.sh${r}${e.docsSlug?`#${e.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join(`
`),e.cause&&(this.cause=e.cause),this.details=i,this.docsPath=r,this.metaMessages=e.metaMessages,this.shortMessage=t}walk(t){return ly(this,t)}}});var Io,Zr,dr,Ei,Eo,So,To,hr,Co,fr,Jr,ta,ko,Pl,Ao,mi,Si,Do,Mo,Po,wo,Lt=ae(()=>{"use strict";pr();Ma();Ve();Io=class extends B{constructor({docsPath:t}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}},Zr=class extends B{constructor({docsPath:t}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}},dr=class extends B{constructor({data:t,params:e,size:i}){super([`Data size of ${i} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${_o(e,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=e,this.size=i}},Ei=class extends B{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}},Eo=class extends B{constructor({expectedLength:t,givenLength:e,type:i}){super([`ABI encoding array length mismatch for type ${i}.`,`Expected length: ${t}`,`Given length: ${e}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}},So=class extends B{constructor({expectedSize:t,value:e}){super(`Size of bytes "${e}" (bytes${Qe(e)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}},To=class extends B{constructor({expectedLength:t,givenLength:e}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${e}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}},hr=class extends B{constructor(t,{docsPath:e}){super([`Encoded error signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}},Co=class extends B{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}},fr=class extends B{constructor(t,{docsPath:e}){super([`Encoded event signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}},Jr=class extends B{constructor(t,{docsPath:e}={}){super([`Event ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}},ta=class extends B{constructor(t,{docsPath:e}={}){super([`Function ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}},ko=class extends B{constructor(t,{docsPath:e}){super([`Function "${t}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}},Pl=class extends B{constructor(t,e){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${t.type}\` in \`${Ht(t.abiItem)}\`, and`,`\`${e.type}\` in \`${Ht(e.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}},Ao=class extends B{constructor({expectedSize:t,givenSize:e}){super(`Expected bytes${t}, got bytes${e}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}},mi=class extends B{constructor({abiItem:t,data:e,params:i,size:r}){super([`Data size of ${r} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${_o(i,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=e,this.params=i,this.size=r}},Si=class extends B{constructor({abiItem:t,param:e}){super([`Expected a topic for indexed event parameter${e.name?` "${e.name}"`:""} on event "${Ht(t,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}},Do=class extends B{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}},Mo=class extends B{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}},Po=class extends B{constructor(t){super([`Value "${t}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}},wo=class extends B{constructor(t){super([`"${t}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}});var Bo,Ro,No,Rl=ae(()=>{"use strict";Ve();Bo=class extends B{constructor({offset:t,position:e,size:i}){super(`Slice ${e==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${i}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}},Ro=class extends B{constructor({size:t,targetSize:e,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${t}) exceeds padding size (${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}},No=class extends B{constructor({size:t,targetSize:e,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} is expected to be ${e} ${i} long, but is ${t} ${i} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}});function Pa(a,{dir:t,size:e=32}={}){return typeof a=="string"?ia(a,{dir:t,size:e}):v0(a,{dir:t,size:e})}function ia(a,{dir:t,size:e=32}={}){if(e===null)return a;let i=a.replace("0x","");if(i.length>e*2)throw new Ro({size:Math.ceil(i.length/2),targetSize:e,type:"hex"});return`0x${i[t==="right"?"padEnd":"padStart"](e*2,"0")}`}function v0(a,{dir:t,size:e=32}={}){if(e===null)return a;if(a.length>e)throw new Ro({size:a.length,targetSize:e,type:"bytes"});let i=new Uint8Array(e);for(let r=0;r<e;r++){let n=t==="right";i[n?r:e-r-1]=a[n?r:a.length-r-1]}return i}var Nl=ae(()=>{"use strict";Rl()});var Ol,Hl,Ul,Vl=ae(()=>{"use strict";Ve();Ol=class extends B{constructor({max:t,min:e,signed:i,size:r,value:n}){super(`Number "${n}" is not in safe ${r?`${r*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${t?`(${e} to ${t})`:`(above ${e})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}},Hl=class extends B{constructor(t){super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}},Ul=class extends B{constructor({givenSize:t,maxSize:e}){super(`Size cannot exceed ${e} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}});function br(a,{dir:t="left"}={}){let e=typeof a=="string"?a.replace("0x",""):a,i=0;for(let r=0;r<e.length-1&&e[t==="left"?r:e.length-r-1].toString()==="0";r++)i++;return e=t==="left"?e.slice(i):e.slice(0,e.length-i),typeof a=="string"?(e.length===1&&t==="right"&&(e=`${e}0`),`0x${e.length%2===1?`0${e}`:e}`):e}var Gl=ae(()=>{"use strict"});function ri(a,{size:t}){if(Qe(a)>t)throw new Ul({givenSize:Qe(a),maxSize:t})}function Ba(a,t={}){let{signed:e}=t;t.size&&ri(a,{size:t.size});let i=BigInt(a);if(!e)return i;let r=(a.length-2)/2,n=(1n<<BigInt(r)*8n-1n)-1n;return i<=n?i:i-BigInt(`0x${"f".padStart(r*2,"f")}`)-1n}function Ct(a,t={}){return Number(Ba(a,t))}var di=ae(()=>{"use strict";Vl();Ma()});function Je(a,t={}){return typeof a=="number"||typeof a=="bigint"?he(a,t):typeof a=="string"?yr(a,t):typeof a=="boolean"?Oo(a,t):bt(a,t)}function Oo(a,t={}){let e=`0x${Number(a)}`;return typeof t.size=="number"?(ri(e,{size:t.size}),Pa(e,{size:t.size})):e}function bt(a,t={}){let e="";for(let r=0;r<a.length;r++)e+=L0[a[r]];let i=`0x${e}`;return typeof t.size=="number"?(ri(i,{size:t.size}),Pa(i,{dir:"right",size:t.size})):i}function he(a,t={}){let{signed:e,size:i}=t,r=BigInt(a),n;i?e?n=(1n<<BigInt(i)*8n-1n)-1n:n=2n**(BigInt(i)*8n)-1n:typeof a=="number"&&(n=BigInt(Number.MAX_SAFE_INTEGER));let o=typeof n=="bigint"&&e?-n-1n:0;if(n&&r>n||r<o){let l=typeof a=="bigint"?"n":"";throw new Ol({max:n?`${n}${l}`:void 0,min:`${o}${l}`,signed:e,size:i,value:`${a}${l}`})}let s=`0x${(e&&r<0?(1n<<BigInt(i*8))+BigInt(r):r).toString(16)}`;return i?Pa(s,{size:i}):s}function yr(a,t={}){let e=_0.encode(a);return bt(e,t)}var L0,_0,Pe=ae(()=>{"use strict";Vl();Nl();di();L0=Array.from({length:256},(a,t)=>t.toString(16).padStart(2,"0"));_0=new TextEncoder});function ni(a,t={}){return typeof a=="number"||typeof a=="bigint"?I0(a,t):typeof a=="boolean"?x0(a,t):rt(a)?zl(a,t):$t(a,t)}function x0(a,t={}){let e=new Uint8Array(1);return e[0]=Number(a),typeof t.size=="number"?(ri(e,{size:t.size}),Pa(e,{size:t.size})):e}function cy(a){if(a>=aa.zero&&a<=aa.nine)return a-aa.zero;if(a>=aa.A&&a<=aa.F)return a-(aa.A-10);if(a>=aa.a&&a<=aa.f)return a-(aa.a-10)}function zl(a,t={}){let e=a;t.size&&(ri(e,{size:t.size}),e=Pa(e,{dir:"right",size:t.size}));let i=e.slice(2);i.length%2&&(i=`0${i}`);let r=i.length/2,n=new Uint8Array(r);for(let o=0,s=0;o<r;o++){let l=cy(i.charCodeAt(s++)),c=cy(i.charCodeAt(s++));if(l===void 0||c===void 0)throw new B(`Invalid byte sequence ("${i[s-2]}${i[s-1]}" in "${i}").`);n[o]=l*16+c}return n}function I0(a,t){let e=he(a,t);return zl(e)}function $t(a,t={}){let e=w0.encode(a);return typeof t.size=="number"?(ri(e,{size:t.size}),Pa(e,{dir:"right",size:t.size})):e}var w0,aa,Ti=ae(()=>{"use strict";Ve();Ii();Nl();di();Pe();w0=new TextEncoder;aa={zero:48,nine:57,A:65,F:70,a:97,f:102}});function Ho(a){if(!Number.isSafeInteger(a)||a<0)throw new Error(`Wrong positive integer: ${a}`)}function Uo(a,...t){if(!(a instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(a.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${a.length}`)}function uy(a){if(typeof a!="function"||typeof a.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ho(a.outputLen),Ho(a.blockLen)}function ra(a,t=!0){if(a.destroyed)throw new Error("Hash instance has been destroyed");if(t&&a.finished)throw new Error("Hash#digest() has already been called")}function Fl(a,t){Uo(a);let e=t.outputLen;if(a.length<e)throw new Error(`digestInto() expects output buffer of length at least ${e}`)}var jl=ae(()=>{"use strict"});function E0(a,t=!1){return t?{h:Number(a&ql),l:Number(a>>py&ql)}:{h:Number(a>>py&ql)|0,l:Number(a&ql)|0}}function my(a,t=!1){let e=new Uint32Array(a.length),i=new Uint32Array(a.length);for(let r=0;r<a.length;r++){let{h:n,l:o}=E0(a[r],t);[e[r],i[r]]=[n,o]}return[e,i]}var ql,py,dy,hy,fy,by,yy=ae(()=>{"use strict";ql=BigInt(4294967295),py=BigInt(32);dy=(a,t,e)=>a<<e|t>>>32-e,hy=(a,t,e)=>t<<e|a>>>32-e,fy=(a,t,e)=>t<<e-32|a>>>64-e,by=(a,t,e)=>a<<e-32|t>>>64-e});var Wl,gy=ae(()=>{"use strict";Wl=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0});function T0(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function Na(a){if(typeof a=="string"&&(a=T0(a)),!vy(a))throw new Error(`expected Uint8Array, got ${typeof a}`);return a}function _y(...a){let t=new Uint8Array(a.reduce((i,r)=>i+r.length,0)),e=0;return a.forEach(i=>{if(!vy(i))throw new Error("Uint8Array expected");t.set(i,e),e+=i.length}),t}function Yl(a){let t=i=>a().update(Na(i)).digest(),e=a();return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=()=>a(),t}function wy(a){let t=(i,r)=>a(r).update(Na(i)).digest(),e=a({});return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=i=>a(i),t}function xy(a=32){if(Wl&&typeof Wl.getRandomValues=="function")return Wl.getRandomValues(new Uint8Array(a));throw new Error("crypto.getRandomValues must be defined")}var vy,Ly,Kl,Ci,S0,Ra,H1,en=ae(()=>{"use strict";gy();vy=a=>a instanceof Uint8Array,Ly=a=>new Uint32Array(a.buffer,a.byteOffset,Math.floor(a.byteLength/4)),Kl=a=>new DataView(a.buffer,a.byteOffset,a.byteLength),Ci=(a,t)=>a<<32-t|a>>>t,S0=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!S0)throw new Error("Non little-endian hardware is not supported");Ra=class{clone(){return this._cloneInto()}},H1={}.toString});function R0(a,t=24){let e=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let o=0;o<10;o++)e[o]=a[o]^a[o+10]^a[o+20]^a[o+30]^a[o+40];for(let o=0;o<10;o+=2){let s=(o+8)%10,l=(o+2)%10,c=e[l],u=e[l+1],p=Iy(c,u,1)^e[s],b=Ey(c,u,1)^e[s+1];for(let x=0;x<50;x+=10)a[o+x]^=p,a[o+x+1]^=b}let r=a[2],n=a[3];for(let o=0;o<24;o++){let s=Ty[o],l=Iy(r,n,s),c=Ey(r,n,s),u=Sy[o];r=a[u],n=a[u+1],a[u]=l,a[u+1]=c}for(let o=0;o<50;o+=10){for(let s=0;s<10;s++)e[s]=a[o+s];for(let s=0;s<10;s++)a[o+s]^=~e[(s+2)%10]&e[(s+4)%10]}a[0]^=P0[i],a[1]^=B0[i]}e.fill(0)}var Sy,Ty,Cy,C0,Vo,k0,A0,D0,M0,P0,B0,Iy,Ey,$l,Oa,F1,j1,q1,W1,K1,ky,Y1,$1,Ay,X1,Q1,Dy=ae(()=>{"use strict";jl();yy();en();[Sy,Ty,Cy]=[[],[],[]],C0=BigInt(0),Vo=BigInt(1),k0=BigInt(2),A0=BigInt(7),D0=BigInt(256),M0=BigInt(113);for(let a=0,t=Vo,e=1,i=0;a<24;a++){[e,i]=[i,(2*e+3*i)%5],Sy.push(2*(5*i+e)),Ty.push((a+1)*(a+2)/2%64);let r=C0;for(let n=0;n<7;n++)t=(t<<Vo^(t>>A0)*M0)%D0,t&k0&&(r^=Vo<<(Vo<<BigInt(n))-Vo);Cy.push(r)}[P0,B0]=my(Cy,!0),Iy=(a,t,e)=>e>32?fy(a,t,e):dy(a,t,e),Ey=(a,t,e)=>e>32?by(a,t,e):hy(a,t,e);$l=class a extends Ra{constructor(t,e,i,r=!1,n=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=i,this.enableXOF=r,this.rounds=n,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Ho(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Ly(this.state)}keccak(){R0(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){ra(this);let{blockLen:e,state:i}=this;t=Na(t);let r=t.length;for(let n=0;n<r;){let o=Math.min(e-this.pos,r-n);for(let s=0;s<o;s++)i[this.pos++]^=t[n++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:e,pos:i,blockLen:r}=this;t[i]^=e,e&128&&i===r-1&&this.keccak(),t[r-1]^=128,this.keccak()}writeInto(t){ra(this,!1),Uo(t),this.finish();let e=this.state,{blockLen:i}=this;for(let r=0,n=t.length;r<n;){this.posOut>=i&&this.keccak();let o=Math.min(i-this.posOut,n-r);t.set(e.subarray(this.posOut,this.posOut+o),r),this.posOut+=o,r+=o}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Ho(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(Fl(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:e,suffix:i,outputLen:r,rounds:n,enableXOF:o}=this;return t||(t=new a(e,i,r,o,n)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=n,t.suffix=i,t.outputLen=r,t.enableXOF=o,t.destroyed=this.destroyed,t}},Oa=(a,t,e)=>Yl(()=>new $l(t,a,e)),F1=Oa(6,144,224/8),j1=Oa(6,136,256/8),q1=Oa(6,104,384/8),W1=Oa(6,72,512/8),K1=Oa(1,144,224/8),ky=Oa(1,136,256/8),Y1=Oa(1,104,384/8),$1=Oa(1,72,512/8),Ay=(a,t,e)=>wy((i={})=>new $l(t,a,i.dkLen===void 0?e:i.dkLen,!0)),X1=Ay(31,168,128/8),Q1=Ay(31,136,256/8)});function dt(a,t){let e=t||"hex",i=ky(rt(a,{strict:!1})?ni(a):a);return e==="bytes"?i:Je(i)}var Ha=ae(()=>{"use strict";Dy();Ii();Ti();Pe()});function My(a){return N0(a)}var N0,Py=ae(()=>{"use strict";Ti();Ha();N0=a=>dt(ni(a))});function By(a){let t=!0,e="",i=0,r="",n=!1;for(let o=0;o<a.length;o++){let s=a[o];if(["(",")",","].includes(s)&&(t=!0),s==="("&&i++,s===")"&&i--,!!t){if(i===0){if(s===" "&&["event","function",""].includes(r))r="";else if(r+=s,s===")"){n=!0;break}continue}if(s===" "){a[o-1]!==","&&e!==","&&e!==",("&&(e="",t=!1);continue}r+=s,e+=s}}if(!n)throw new B("Unable to normalize signature.");return r}var Ry=ae(()=>{"use strict";Ve()});var Ny,Oy=ae(()=>{"use strict";ay();Ry();Ny=a=>{let t=(()=>typeof a=="string"?a:lf(a))();return By(t)}});function Xl(a){return My(Ny(a))}var cf=ae(()=>{"use strict";Py();Oy()});var tn,Ql=ae(()=>{"use strict";cf();tn=Xl});var kt,gr=ae(()=>{"use strict";Ve();kt=class extends B{constructor({address:t}){super(`Address "${t}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}});var Zl,Hy=ae(()=>{"use strict";Zl=class extends Map{constructor(t){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=t}set(t,e){return super.set(t,e),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}});function vr(a,t){let e=t?`${t}${a.toLowerCase()}`:a.substring(2).toLowerCase(),i=dt($t(e),"bytes"),r=(t?e.substring(`${t}0x`.length):e).split("");for(let n=0;n<40;n+=2)i[n>>1]>>4>=8&&r[n]&&(r[n]=r[n].toUpperCase()),(i[n>>1]&15)>=8&&r[n+1]&&(r[n+1]=r[n+1].toUpperCase());return`0x${r.join("")}`}function Uy(a,t){if(!_t(a))throw new kt({address:a});return vr(a,t)}var Go=ae(()=>{"use strict";gr();Ti();Ha();Ua()});function _t(a,{strict:t=!0}={}){if(uf.has(a))return uf.get(a);let e=(()=>O0.test(a)?a.toLowerCase()===a?!0:t?vr(a)===a:!0:!1)();return uf.set(a,e),e}var O0,uf,Ua=ae(()=>{"use strict";Hy();Go();O0=/^0x[a-fA-F0-9]{40}$/,uf=new Zl(8192)});function Ut(a){return typeof a[0]=="string"?zo(a):H0(a)}function H0(a){let t=0;for(let r of a)t+=r.length;let e=new Uint8Array(t),i=0;for(let r of a)e.set(r,i),i+=r.length;return e}function zo(a){return`0x${a.reduce((t,e)=>t+e.replace("0x",""),"")}`}var Va=ae(()=>{"use strict"});function Lr(a,t,e,{strict:i}={}){return rt(a,{strict:!1})?U0(a,t,e,{strict:i}):pf(a,t,e,{strict:i})}function Vy(a,t){if(typeof t=="number"&&t>0&&t>Qe(a)-1)throw new Bo({offset:t,position:"start",size:Qe(a)})}function Gy(a,t,e){if(typeof t=="number"&&typeof e=="number"&&Qe(a)!==e-t)throw new Bo({offset:e,position:"end",size:Qe(a)})}function pf(a,t,e,{strict:i}={}){Vy(a,t);let r=a.slice(t,e);return i&&Gy(r,t,e),r}function U0(a,t,e,{strict:i}={}){Vy(a,t);let r=`0x${a.replace("0x","").slice((t??0)*2,(e??a.length)*2)}`;return i&&Gy(r,t,e),r}var Fo=ae(()=>{"use strict";Rl();Ii();Ma()});function ki(a,t){if(a.length!==t.length)throw new To({expectedLength:a.length,givenLength:t.length});let e=V0({params:a,values:t}),i=df(e);return i.length===0?"0x":i}function V0({params:a,values:t}){let e=[];for(let i=0;i<a.length;i++)e.push(mf({param:a[i],value:t[i]}));return e}function mf({param:a,value:t}){let e=Jl(a.type);if(e){let[i,r]=e;return z0(t,{length:i,param:{...a,type:r}})}if(a.type==="tuple")return K0(t,{param:a});if(a.type==="address")return G0(t);if(a.type==="bool")return j0(t);if(a.type.startsWith("uint")||a.type.startsWith("int")){let i=a.type.startsWith("int");return q0(t,{signed:i})}if(a.type.startsWith("bytes"))return F0(t,{param:a});if(a.type==="string")return W0(t);throw new Do(a.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function df(a){let t=0;for(let n=0;n<a.length;n++){let{dynamic:o,encoded:s}=a[n];o?t+=32:t+=Qe(s)}let e=[],i=[],r=0;for(let n=0;n<a.length;n++){let{dynamic:o,encoded:s}=a[n];o?(e.push(he(t+r,{size:32})),i.push(s),r+=Qe(s)):e.push(s)}return Ut([...e,...i])}function G0(a){if(!_t(a))throw new kt({address:a});return{dynamic:!1,encoded:ia(a.toLowerCase())}}function z0(a,{length:t,param:e}){let i=t===null;if(!Array.isArray(a))throw new Po(a);if(!i&&a.length!==t)throw new Eo({expectedLength:t,givenLength:a.length,type:`${e.type}[${t}]`});let r=!1,n=[];for(let o=0;o<a.length;o++){let s=mf({param:e,value:a[o]});s.dynamic&&(r=!0),n.push(s)}if(i||r){let o=df(n);if(i){let s=he(n.length,{size:32});return{dynamic:!0,encoded:n.length>0?Ut([s,o]):s}}if(r)return{dynamic:!0,encoded:o}}return{dynamic:!1,encoded:Ut(n.map(({encoded:o})=>o))}}function F0(a,{param:t}){let[,e]=t.type.split("bytes"),i=Qe(a);if(!e){let r=a;return i%32!==0&&(r=ia(r,{dir:"right",size:Math.ceil((a.length-2)/2/32)*32})),{dynamic:!0,encoded:Ut([ia(he(i,{size:32})),r])}}if(i!==parseInt(e))throw new So({expectedSize:parseInt(e),value:a});return{dynamic:!1,encoded:ia(a,{dir:"right"})}}function j0(a){if(typeof a!="boolean")throw new B(`Invalid boolean value: "${a}" (type: ${typeof a}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:ia(Oo(a))}}function q0(a,{signed:t}){return{dynamic:!1,encoded:he(a,{size:32,signed:t})}}function W0(a){let t=yr(a),e=Math.ceil(Qe(t)/32),i=[];for(let r=0;r<e;r++)i.push(ia(Lr(t,r*32,(r+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Ut([ia(he(Qe(t),{size:32})),...i])}}function K0(a,{param:t}){let e=!1,i=[];for(let r=0;r<t.components.length;r++){let n=t.components[r],o=Array.isArray(a)?r:n.name,s=mf({param:n,value:a[o]});i.push(s),s.dynamic&&(e=!0)}return{dynamic:e,encoded:e?df(i):Ut(i.map(({encoded:r})=>r))}}function Jl(a){let t=a.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}var _r=ae(()=>{"use strict";Lt();gr();Ve();Ua();Va();Nl();Ma();Fo();Pe()});var an,ec=ae(()=>{"use strict";Fo();cf();an=a=>Lr(Xl(a),0,4)});function Oi(a){let{abi:t,args:e=[],name:i}=a,r=rt(i,{strict:!1}),n=t.filter(s=>r?s.type==="function"?an(s)===i:s.type==="event"?tn(s)===i:!1:"name"in s&&s.name===i);if(n.length===0)return;if(n.length===1)return n[0];let o;for(let s of n){if(!("inputs"in s))continue;if(!e||e.length===0){if(!s.inputs||s.inputs.length===0)return s;continue}if(!s.inputs||s.inputs.length===0||s.inputs.length!==e.length)continue;if(e.every((c,u)=>{let p="inputs"in s&&s.inputs[u];return p?hf(c,p):!1})){if(o&&"inputs"in o&&o.inputs){let c=zy(s.inputs,o.inputs,e);if(c)throw new Pl({abiItem:s,type:c[0]},{abiItem:o,type:c[1]})}o=s}}return o||n[0]}function hf(a,t){let e=typeof a,i=t.type;switch(i){case"address":return _t(a,{strict:!1});case"bool":return e==="boolean";case"function":return e==="string";case"string":return e==="string";default:return i==="tuple"&&"components"in t?Object.values(t.components).every((r,n)=>hf(Object.values(a)[n],r)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)?e==="number"||e==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)?e==="string"||a instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)?Array.isArray(a)&&a.every(r=>hf(r,{...t,type:i.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function zy(a,t,e){for(let i in a){let r=a[i],n=t[i];if(r.type==="tuple"&&n.type==="tuple"&&"components"in r&&"components"in n)return zy(r.components,n.components,e[i]);let o=[r.type,n.type];if((()=>o.includes("address")&&o.includes("bytes20")?!0:o.includes("address")&&o.includes("string")?_t(e[i],{strict:!1}):o.includes("address")&&o.includes("bytes")?_t(e[i],{strict:!1}):!1)())return o}}var rn=ae(()=>{"use strict";Lt();Ii();Ua();Ql();ec()});function et(a){return typeof a=="string"?{address:a,type:"json-rpc"}:a}var oi=ae(()=>{"use strict"});function Wy(a){let{abi:t,args:e,functionName:i}=a,r=t[0];if(i){let n=Oi({abi:t,args:e,name:i});if(!n)throw new ta(i,{docsPath:qy});r=n}if(r.type!=="function")throw new ta(void 0,{docsPath:qy});return{abi:[r],functionName:an(Ht(r))}}var qy,Ky=ae(()=>{"use strict";Lt();ec();pr();rn();qy="/docs/contract/encodeFunctionData"});function At(a){let{args:t}=a,{abi:e,functionName:i}=(()=>a.abi.length===1&&a.functionName?.startsWith("0x")?a:Wy(a))(),r=e[0],n=i,o="inputs"in r&&r.inputs?ki(r.inputs,t??[]):void 0;return zo([n,o??"0x"])}var na=ae(()=>{"use strict";Va();_r();Ky()});var ic,Yy,$y,ac=ae(()=>{"use strict";ic={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},Yy={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},$y={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}});var jo,nn,rc,ff=ae(()=>{"use strict";Ve();jo=class extends B{constructor({offset:t}){super(`Offset \`${t}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}},nn=class extends B{constructor({length:t,position:e}){super(`Position \`${e}\` is out of bounds (\`0 < position < ${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}},rc=class extends B{constructor({count:t,limit:e}){super(`Recursive read limit of \`${e}\` exceeded (recursive read count: \`${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}});function Xy(a,{recursiveReadLimit:t=8192}={}){let e=Object.create(Y0);return e.bytes=a,e.dataView=new DataView(a.buffer,a.byteOffset,a.byteLength),e.positionReadCount=new Map,e.recursiveReadLimit=t,e}var Y0,Qy=ae(()=>{"use strict";ff();Y0={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new rc({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(a){if(a<0||a>this.bytes.length-1)throw new nn({length:this.bytes.length,position:a})},decrementPosition(a){if(a<0)throw new jo({offset:a});let t=this.position-a;this.assertPosition(t),this.position=t},getReadCount(a){return this.positionReadCount.get(a||this.position)||0},incrementPosition(a){if(a<0)throw new jo({offset:a});let t=this.position+a;this.assertPosition(t),this.position=t},inspectByte(a){let t=a??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(a,t){let e=t??this.position;return this.assertPosition(e+a-1),this.bytes.subarray(e,e+a)},inspectUint8(a){let t=a??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(a){let t=a??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(a){let t=a??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(a){let t=a??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushBytes(a){this.assertPosition(this.position+a.length-1),this.bytes.set(a,this.position),this.position+=a.length},pushUint8(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushUint16(a){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,a),this.position+=2},pushUint24(a){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,a>>8),this.dataView.setUint8(this.position+2,a&255),this.position+=3},pushUint32(a){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,a),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let a=this.inspectByte();return this.position++,a},readBytes(a,t){this.assertReadLimit(),this._touch();let e=this.inspectBytes(a);return this.position+=t??a,e},readUint8(){this.assertReadLimit(),this._touch();let a=this.inspectUint8();return this.position+=1,a},readUint16(){this.assertReadLimit(),this._touch();let a=this.inspectUint16();return this.position+=2,a},readUint24(){this.assertReadLimit(),this._touch();let a=this.inspectUint24();return this.position+=3,a},readUint32(){this.assertReadLimit(),this._touch();let a=this.inspectUint32();return this.position+=4,a},get remaining(){return this.bytes.length-this.position},setPosition(a){let t=this.position;return this.assertPosition(a),this.position=a,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let a=this.getReadCount();this.positionReadCount.set(this.position,a+1),a>0&&this.recursiveReadCount++}}});function Zy(a,t={}){typeof t.size<"u"&&ri(a,{size:t.size});let e=bt(a,t);return Ba(e,t)}function Jy(a,t={}){let e=a;if(typeof t.size<"u"&&(ri(e,{size:t.size}),e=br(e)),e.length>1||e[0]>1)throw new Hl(e);return!!e[0]}function Hi(a,t={}){typeof t.size<"u"&&ri(a,{size:t.size});let e=bt(a,t);return Ct(e,t)}function eg(a,t={}){let e=a;return typeof t.size<"u"&&(ri(e,{size:t.size}),e=br(e,{dir:"right"})),new TextDecoder().decode(e)}var tg=ae(()=>{"use strict";Vl();Gl();di();Pe()});function wr(a,t){let e=typeof t=="string"?zl(t):t,i=Xy(e);if(Qe(e)===0&&a.length>0)throw new Ei;if(Qe(t)&&Qe(t)<32)throw new dr({data:typeof t=="string"?t:bt(t),params:a,size:Qe(t)});let r=0,n=[];for(let o=0;o<a.length;++o){let s=a[o];i.setPosition(r);let[l,c]=on(i,s,{staticPosition:0});r+=c,n.push(l)}return n}function on(a,t,{staticPosition:e}){let i=Jl(t.type);if(i){let[r,n]=i;return X0(a,{...t,type:n},{length:r,staticPosition:e})}if(t.type==="tuple")return e_(a,t,{staticPosition:e});if(t.type==="address")return $0(a);if(t.type==="bool")return Q0(a);if(t.type.startsWith("bytes"))return Z0(a,t,{staticPosition:e});if(t.type.startsWith("uint")||t.type.startsWith("int"))return J0(a,t);if(t.type==="string")return t_(a,{staticPosition:e});throw new Mo(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function $0(a){let t=a.readBytes(32);return[vr(bt(pf(t,-20))),32]}function X0(a,t,{length:e,staticPosition:i}){if(!e){let o=Hi(a.readBytes(bf)),s=i+o,l=s+ig;a.setPosition(s);let c=Hi(a.readBytes(ig)),u=qo(t),p=0,b=[];for(let x=0;x<c;++x){a.setPosition(l+(u?x*32:p));let[v,y]=on(a,t,{staticPosition:l});p+=y,b.push(v)}return a.setPosition(i+32),[b,32]}if(qo(t)){let o=Hi(a.readBytes(bf)),s=i+o,l=[];for(let c=0;c<e;++c){a.setPosition(s+c*32);let[u]=on(a,t,{staticPosition:s});l.push(u)}return a.setPosition(i+32),[l,32]}let r=0,n=[];for(let o=0;o<e;++o){let[s,l]=on(a,t,{staticPosition:i+r});r+=l,n.push(s)}return[n,r]}function Q0(a){return[Jy(a.readBytes(32),{size:32}),32]}function Z0(a,t,{staticPosition:e}){let[i,r]=t.type.split("bytes");if(!r){let o=Hi(a.readBytes(32));a.setPosition(e+o);let s=Hi(a.readBytes(32));if(s===0)return a.setPosition(e+32),["0x",32];let l=a.readBytes(s);return a.setPosition(e+32),[bt(l),32]}return[bt(a.readBytes(parseInt(r),32)),32]}function J0(a,t){let e=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256"),r=a.readBytes(32);return[i>48?Zy(r,{signed:e}):Hi(r,{signed:e}),32]}function e_(a,t,{staticPosition:e}){let i=t.components.length===0||t.components.some(({name:o})=>!o),r=i?[]:{},n=0;if(qo(t)){let o=Hi(a.readBytes(bf)),s=e+o;for(let l=0;l<t.components.length;++l){let c=t.components[l];a.setPosition(s+n);let[u,p]=on(a,c,{staticPosition:s});n+=p,r[i?l:c?.name]=u}return a.setPosition(e+32),[r,32]}for(let o=0;o<t.components.length;++o){let s=t.components[o],[l,c]=on(a,s,{staticPosition:e});r[i?o:s?.name]=l,n+=c}return[r,n]}function t_(a,{staticPosition:t}){let e=Hi(a.readBytes(32)),i=t+e;a.setPosition(i);let r=Hi(a.readBytes(32));if(r===0)return a.setPosition(t+32),["",32];let n=a.readBytes(r,32),o=eg(br(n));return a.setPosition(t+32),[o,32]}function qo(a){let{type:t}=a;if(t==="string"||t==="bytes"||t.endsWith("[]"))return!0;if(t==="tuple")return a.components?.some(qo);let e=Jl(a.type);return!!(e&&qo({...a,type:e[1]}))}var ig,bf,nc=ae(()=>{"use strict";Lt();Go();Qy();Ma();Fo();Gl();tg();Ti();Pe();_r();ig=32,bf=32});function oc(a){let{abi:t,data:e}=a,i=Lr(e,0,4);if(i==="0x")throw new Ei;let n=[...t||[],Yy,$y].find(o=>o.type==="error"&&i===an(Ht(o)));if(!n)throw new hr(i,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:n,args:"inputs"in n&&n.inputs&&n.inputs.length>0?wr(n.inputs,Lr(e,4)):void 0,errorName:n.name}}var yf=ae(()=>{"use strict";ac();Lt();Fo();ec();nc();pr()});var je,si=ae(()=>{"use strict";je=(a,t,e)=>JSON.stringify(a,(i,r)=>{let n=typeof r=="bigint"?r.toString():r;return typeof t=="function"?t(i,n):n},e)});function gf({abiItem:a,args:t,includeFunctionName:e=!0,includeName:i=!1}){if("name"in a&&"inputs"in a&&a.inputs)return`${e?a.name:""}(${a.inputs.map((r,n)=>`${i&&r.name?`${r.name}: `:""}${typeof t[n]=="object"?je(t[n]):t[n]}`).join(", ")})`}var ag=ae(()=>{"use strict";si()});var sc,rg,lc=ae(()=>{"use strict";sc={gwei:9,wei:18},rg={ether:-9,wei:9}});function cc(a,t){let e=a.toString(),i=e.startsWith("-");i&&(e=e.slice(1)),e=e.padStart(t,"0");let[r,n]=[e.slice(0,e.length-t),e.slice(e.length-t)];return n=n.replace(/(0+)$/,""),`${i?"-":""}${r||"0"}${n?`.${n}`:""}`}var vf=ae(()=>{"use strict"});function Ui(a,t="wei"){return cc(a,sc[t])}var Wo=ae(()=>{"use strict";lc();vf()});function yt(a,t="wei"){return cc(a,rg[t])}var sn=ae(()=>{"use strict";lc();vf()});function ng(a){return a.reduce((t,{slot:e,value:i})=>`${t}        ${e}: ${i}
`,"")}function og(a){return a.reduce((t,{address:e,...i})=>{let r=`${t}    ${e}:
`;return i.nonce&&(r+=`      nonce: ${i.nonce}
`),i.balance&&(r+=`      balance: ${i.balance}
`),i.code&&(r+=`      code: ${i.code}
`),i.state&&(r+=`      state:
`,r+=ng(i.state)),i.stateDiff&&(r+=`      stateDiff:
`,r+=ng(i.stateDiff)),r},`  State Override:
`).slice(0,-1)}var uc,pc,Lf=ae(()=>{"use strict";Ve();uc=class extends B{constructor({address:t}){super(`State for account "${t}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}},pc=class extends B{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}});function xr(a){let t=Object.entries(a).map(([i,r])=>r===void 0||r===!1?null:[i,r]).filter(Boolean),e=t.reduce((i,[r])=>Math.max(i,r.length),0);return t.map(([i,r])=>`  ${`${i}:`.padEnd(e+1)}  ${r}`).join(`
`)}var mc,dc,hc,ln,cn,fc,oa=ae(()=>{"use strict";Wo();sn();Ve();mc=class extends B{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}},dc=class extends B{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",xr(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}},hc=class extends B{constructor(t,{account:e,docsPath:i,chain:r,data:n,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:p,value:b}){let x=xr({chain:r&&`${r?.name} (id: ${r?.id})`,from:e?.address,to:p,value:typeof b<"u"&&`${Ui(b)} ${r?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:typeof s<"u"&&`${yt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${yt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${yt(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",x].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}},ln=class extends B{constructor({blockHash:t,blockNumber:e,blockTag:i,hash:r,index:n}){let o="Transaction";i&&n!==void 0&&(o=`Transaction at block time "${i}" at index "${n}"`),t&&n!==void 0&&(o=`Transaction at block hash "${t}" at index "${n}"`),e&&n!==void 0&&(o=`Transaction at block number "${e}" at index "${n}"`),r&&(o=`Transaction with hash "${r}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}},cn=class extends B{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}},fc=class extends B{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}});var Ir,Ko,Xt,Yo,sa,za=ae(()=>{"use strict";oi();ac();yf();pr();ag();rn();Wo();sn();Lt();Ve();Lf();oa();xo();Ir=class extends B{constructor(t,{account:e,docsPath:i,chain:r,data:n,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:p,value:b,stateOverride:x}){let v=e?et(e):void 0,y=xr({from:v?.address,to:p,value:typeof b<"u"&&`${Ui(b)} ${r?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:typeof s<"u"&&`${yt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${yt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${yt(c)} gwei`,nonce:u});x&&(y+=`
${og(x)}`),super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",y].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}},Ko=class extends B{constructor(t,{abi:e,args:i,contractAddress:r,docsPath:n,functionName:o,sender:s}){let l=Oi({abi:e,args:i,name:o}),c=l?gf({abiItem:l,args:i,includeFunctionName:!1,includeName:!1}):void 0,u=l?Ht(l,{includeName:!0}):void 0,p=xr({address:r&&oy(r),function:u,args:c&&c!=="()"&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${c}`,sender:s});super(t.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:t,docsPath:n,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=e,this.args=i,this.cause=t,this.contractAddress=r,this.functionName=o,this.sender=s}},Xt=class extends B{constructor({abi:t,data:e,functionName:i,message:r}){let n,o,s,l;if(e&&e!=="0x")try{o=oc({abi:t,data:e});let{abiItem:u,errorName:p,args:b}=o;if(p==="Error")l=b[0];else if(p==="Panic"){let[x]=b;l=ic[x]}else{let x=u?Ht(u,{includeName:!0}):void 0,v=u&&b?gf({abiItem:u,args:b,includeFunctionName:!1,includeName:!1}):void 0;s=[x?`Error: ${x}`:"",v&&v!=="()"?`       ${[...Array(p?.length??0).keys()].map(()=>" ").join("")}${v}`:""]}}catch(u){n=u}else r&&(l=r);let c;n instanceof hr&&(c=n.signature,s=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${i}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${i}" reverted.`,{cause:n,metaMessages:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=o,this.reason=l,this.signature=c}},Yo=class extends B{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}},sa=class extends B{constructor({data:t,message:e}){super(e||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}});var hi,un,$o,pn=ae(()=>{"use strict";si();Ve();xo();hi=class extends B{constructor({body:t,details:e,headers:i,status:r,url:n}){super("HTTP request failed.",{details:e,metaMessages:[r&&`Status: ${r}`,`URL: ${mr(n)}`,t&&`Request body: ${je(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=i,this.status=r,this.url=n}},un=class extends B{constructor({body:t,error:e,url:i}){super("RPC Request failed.",{cause:e,details:e.message,metaMessages:[`URL: ${mr(i)}`,`Request body: ${je(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=e.code}},$o=class extends B{constructor({body:t,url:e}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${mr(e)}`,`Request body: ${je(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}});var i_,Dt,Fa,mn,dn,hn,fn,la,Vi,bn,yn,gn,vn,Er,Ln,Sr,_n,wn,xn,In,En,bc,Xo=ae(()=>{"use strict";Ve();pn();i_=-1,Dt=class extends B{constructor(t,{code:e,docsPath:i,metaMessages:r,shortMessage:n}){super(n,{cause:t,docsPath:i,metaMessages:r||t?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof un?t.code:e??i_}},Fa=class extends Dt{constructor(t,e){super(t,e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e.data}},mn=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}};Object.defineProperty(mn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});dn=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}};Object.defineProperty(dn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});hn=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}};Object.defineProperty(hn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});fn=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}};Object.defineProperty(fn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});la=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}};Object.defineProperty(la,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});Vi=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}};Object.defineProperty(Vi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});bn=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}};Object.defineProperty(bn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});yn=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}};Object.defineProperty(yn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});gn=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}};Object.defineProperty(gn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});vn=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}};Object.defineProperty(vn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});Er=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}};Object.defineProperty(Er,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});Ln=class a extends Dt{constructor(t){super(t,{code:a.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}};Object.defineProperty(Ln,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});Sr=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}};Object.defineProperty(Sr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});_n=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}};Object.defineProperty(_n,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});wn=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}};Object.defineProperty(wn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});xn=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}};Object.defineProperty(xn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});In=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}};Object.defineProperty(In,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});En=class a extends Fa{constructor(t){super(t,{code:a.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}};Object.defineProperty(En,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});bc=class extends Dt{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}});var ua,ja,Sn,Tn,Cn,kn,An,Dn,Mn,Pn,qa,Gi,Bn=ae(()=>{"use strict";sn();Ve();ua=class extends B{constructor({cause:t,message:e}={}){let i=e?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}};Object.defineProperty(ua,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(ua,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});ja=class extends B{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${yt(e)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}};Object.defineProperty(ja,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});Sn=class extends B{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${yt(e)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}};Object.defineProperty(Sn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});Tn=class extends B{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}};Object.defineProperty(Tn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});Cn=class extends B{constructor({cause:t,nonce:e}={}){super([`Nonce provided for the transaction ${e?`(${e}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}};Object.defineProperty(Cn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});kn=class extends B{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}};Object.defineProperty(kn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});An=class extends B{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}};Object.defineProperty(An,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});Dn=class extends B{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}};Object.defineProperty(Dn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});Mn=class extends B{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}};Object.defineProperty(Mn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});Pn=class extends B{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}};Object.defineProperty(Pn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});qa=class extends B{constructor({cause:t,maxPriorityFeePerGas:e,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${e?` = ${yt(e)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${yt(i)} gwei`:""}).`].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}};Object.defineProperty(qa,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});Gi=class extends B{constructor({cause:t}){super(`An error occurred while executing: ${t?.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}});function Rn(a,t){let e=(a.details||"").toLowerCase(),i=a instanceof B?a.walk(r=>r.code===ua.code):a;return i instanceof B?new ua({cause:a,message:i.details}):ua.nodeMessage.test(e)?new ua({cause:a,message:a.details}):ja.nodeMessage.test(e)?new ja({cause:a,maxFeePerGas:t?.maxFeePerGas}):Sn.nodeMessage.test(e)?new Sn({cause:a,maxFeePerGas:t?.maxFeePerGas}):Tn.nodeMessage.test(e)?new Tn({cause:a,nonce:t?.nonce}):Cn.nodeMessage.test(e)?new Cn({cause:a,nonce:t?.nonce}):kn.nodeMessage.test(e)?new kn({cause:a,nonce:t?.nonce}):An.nodeMessage.test(e)?new An({cause:a}):Dn.nodeMessage.test(e)?new Dn({cause:a,gas:t?.gas}):Mn.nodeMessage.test(e)?new Mn({cause:a,gas:t?.gas}):Pn.nodeMessage.test(e)?new Pn({cause:a}):qa.nodeMessage.test(e)?new qa({cause:a,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new Gi({cause:a})}var gc=ae(()=>{"use strict";Ve();Bn()});function Nn(a,{format:t}){if(!t)return{};let e={};function i(n){let o=Object.keys(n);for(let s of o)s in a&&(e[s]=a[s]),n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&i(n[s])}let r=t(a||{});return i(r),e}var vc=ae(()=>{"use strict"});function Wa(a){let t={...a};return typeof a.blobs<"u"&&typeof a.blobs[0]!="string"&&(t.blobs=a.blobs.map(e=>bt(e))),typeof a.gas<"u"&&(t.gas=he(a.gas)),typeof a.gasPrice<"u"&&(t.gasPrice=he(a.gasPrice)),typeof a.maxFeePerBlobGas<"u"&&(t.maxFeePerBlobGas=he(a.maxFeePerBlobGas)),typeof a.maxFeePerGas<"u"&&(t.maxFeePerGas=he(a.maxFeePerGas)),typeof a.maxPriorityFeePerGas<"u"&&(t.maxPriorityFeePerGas=he(a.maxPriorityFeePerGas)),typeof a.nonce<"u"&&(t.nonce=he(a.nonce)),typeof a.type<"u"&&(t.type=r_[a.type]),typeof a.value<"u"&&(t.value=he(a.value)),t}var r_,Qo=ae(()=>{"use strict";Pe();r_={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"}});function zi(a){let{account:t,gasPrice:e,maxFeePerGas:i,maxPriorityFeePerGas:r,to:n}=a,o=t?et(t):void 0;if(o&&!_t(o.address))throw new kt({address:o.address});if(n&&!_t(n))throw new kt({address:n});if(typeof e<"u"&&(typeof i<"u"||typeof r<"u"))throw new mc;if(i&&i>2n**256n-1n)throw new ja({maxFeePerGas:i});if(r&&i&&r>i)throw new qa({maxFeePerGas:i,maxPriorityFeePerGas:r})}var On=ae(()=>{"use strict";oi();gr();Bn();oa();Ua()});function fi(a){let{abi:t,args:e,functionName:i,data:r}=a,n=t[0];if(i){let s=Oi({abi:t,args:e,name:i});if(!s)throw new ta(i,{docsPath:xf});n=s}if(n.type!=="function")throw new ta(void 0,{docsPath:xf});if(!n.outputs)throw new ko(n.name,{docsPath:xf});let o=wr(n.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}var xf,Cr=ae(()=>{"use strict";Lt();nc();rn();xf="/docs/contract/decodeFunctionResult"});var Zo,dg,Tc,hg,If,Ef,fg,kr=ae(()=>{"use strict";Zo=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],dg=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],Tc=[...dg,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],hg=[...dg,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],If=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],Ef=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],fg=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]});var bg,yg=ae(()=>{"use strict";bg="0x82ad56cb"});var Ar,Cc,kc,Jo,Ac=ae(()=>{"use strict";Ve();Ar=class extends B{constructor({blockNumber:t,chain:e,contract:i}){super(`Chain "${e.name}" does not support contract "${i.name}".`,{metaMessages:["This could be due to any of the following:",...t&&i.blockCreated&&i.blockCreated>t?[`- The contract "${i.name}" was not deployed until block ${i.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${i.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}},Cc=class extends B{constructor({chain:t,currentChainId:e}){super(`The current chain of the wallet (id: ${e}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${e}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}},kc=class extends B{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}},Jo=class extends B{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}});function bi({blockNumber:a,chain:t,contract:e}){let i=t?.contracts?.[e];if(!i)throw new Ar({chain:t,contract:{name:e}});if(a&&i.blockCreated&&i.blockCreated>a)throw new Ar({blockNumber:a,chain:t,contract:{name:e,blockCreated:i.blockCreated}});return i.address}var Dr=ae(()=>{"use strict";Ac()});function gg(a,{docsPath:t,...e}){let i=(()=>{let r=Rn(a,e);return r instanceof Gi?a:r})();return new Ir(i,{docsPath:t,...e})}var vg=ae(()=>{"use strict";za();Bn();gc()});function Dc({fn:a,id:t,shouldSplitBatch:e,wait:i=0,sort:r}){let n=async()=>{let u=l();o();let p=u.map(({args:b})=>b);p.length!==0&&a(p).then(b=>{r&&Array.isArray(b)&&b.sort(r);for(let x=0;x<u.length;x++){let{pendingPromise:v}=u[x];v.resolve?.([b[x],b])}}).catch(b=>{for(let x=0;x<u.length;x++){let{pendingPromise:v}=u[x];v.reject?.(b)}})},o=()=>Sf.delete(t),s=()=>l().map(({args:u})=>u),l=()=>Sf.get(t)||[],c=u=>Sf.set(t,[...l(),u]);return{flush:o,async schedule(u){let p={},b=new Promise((y,C)=>{p.resolve=y,p.reject=C});return e?.([...s(),u])&&n(),l().length>0?(c({args:u,pendingPromise:p}),b):(c({args:u,pendingPromise:p}),setTimeout(n,i),b)}}}var Sf,Tf=ae(()=>{"use strict";Sf=new Map});var Mc,Pc,Bc,Lg=ae(()=>{"use strict";si();Ve();xo();Mc=class extends B{constructor({callbackSelector:t,cause:e,data:i,extraData:r,sender:n,urls:o}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map(s=>`    ${mr(s)}`)],`  Sender: ${n}`,`  Data: ${i}`,`  Callback selector: ${t}`,`  Extra data: ${r}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}},Pc=class extends B{constructor({result:t,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${mr(e)}`,`Response: ${je(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}},Bc=class extends B{constructor({sender:t,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}});function _g(a,t){if(!_t(a,{strict:!1}))throw new kt({address:a});if(!_t(t,{strict:!1}))throw new kt({address:t});return a.toLowerCase()===t.toLowerCase()}var wg=ae(()=>{"use strict";gr();Ua()});var Eg={};$b(Eg,{ccipRequest:()=>Ig,offchainLookup:()=>s_,offchainLookupAbiItem:()=>xg,offchainLookupSignature:()=>o_});async function s_(a,{blockNumber:t,blockTag:e,data:i,to:r}){let{args:n}=oc({data:i,abi:[xg]}),[o,s,l,c,u]=n,{ccipRead:p}=a,b=p&&typeof p?.request=="function"?p.request:Ig;try{if(!_g(r,o))throw new Bc({sender:o,to:r});let x=await b({data:l,sender:o,urls:s}),{data:v}=await qi(a,{blockNumber:t,blockTag:e,data:Ut([c,ki([{type:"bytes"},{type:"bytes"}],[x,u])]),to:r});return v}catch(x){throw new Mc({callbackSelector:c,cause:x,data:i,extraData:u,sender:o,urls:s})}}async function Ig({data:a,sender:t,urls:e}){let i=new Error("An unknown error occurred.");for(let r=0;r<e.length;r++){let n=e[r],o=n.includes("{data}")?"GET":"POST",s=o==="POST"?{data:a,sender:t}:void 0;try{let l=await fetch(n.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(s),method:o}),c;if(l.headers.get("Content-Type")?.startsWith("application/json")?c=(await l.json()).data:c=await l.text(),!l.ok){i=new hi({body:s,details:c?.error?je(c.error):l.statusText,headers:l.headers,status:l.status,url:n});continue}if(!rt(c)){i=new Pc({result:c,url:n});continue}return c}catch(l){i=new hi({body:s,details:l.message,url:n})}}throw i}var o_,xg,Sg=ae(()=>{"use strict";Fn();Lg();pn();yf();_r();wg();Va();Ii();si();o_="0x556f1830",xg={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]}});async function qi(a,t){let{account:e=a.account,batch:i=!!a.batch?.multicall,blockNumber:r,blockTag:n="latest",accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:b,maxPriorityFeePerGas:x,nonce:v,to:y,value:C,stateOverride:A,...H}=t,z=e?et(e):void 0;try{zi(t);let D=(r?he(r):void 0)||n,W=m_(A),J=a.chain?.formatters?.transactionRequest?.format,Be=(J||Wa)({...Nn(H,{format:J}),from:z?.address,accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:b,maxPriorityFeePerGas:x,nonce:v,to:y,value:C});if(i&&l_({request:Be})&&!W)try{return await c_(a,{...Be,blockNumber:r,blockTag:n})}catch(Ie){if(!(Ie instanceof Jo)&&!(Ie instanceof Ar))throw Ie}let Ee=await a.request({method:"eth_call",params:W?[Be,D,W]:[Be,D]});return Ee==="0x"?{data:void 0}:{data:Ee}}catch(Z){let D=u_(Z),{offchainLookup:W,offchainLookupSignature:J}=await Promise.resolve().then(()=>(Sg(),Eg));if(a.ccipRead!==!1&&D?.slice(0,10)===J&&y)return{data:await W(a,{data:D,to:y})};throw gg(Z,{...t,account:z,chain:a.chain})}}function l_({request:a}){let{data:t,to:e,...i}=a;return!(!t||t.startsWith(bg)||!e||Object.values(i).filter(r=>typeof r<"u").length>0)}async function c_(a,t){let{batchSize:e=1024,wait:i=0}=typeof a.batch?.multicall=="object"?a.batch.multicall:{},{blockNumber:r,blockTag:n="latest",data:o,multicallAddress:s,to:l}=t,c=s;if(!c){if(!a.chain)throw new Jo;c=bi({blockNumber:r,chain:a.chain,contract:"multicall3"})}let p=(r?he(r):void 0)||n,{schedule:b}=Dc({id:`${a.uid}.${p}`,wait:i,shouldSplitBatch(y){return y.reduce((A,{data:H})=>A+(H.length-2),0)>e*2},fn:async y=>{let C=y.map(z=>({allowFailure:!0,callData:z.data,target:z.to})),A=At({abi:Zo,args:[C],functionName:"aggregate3"}),H=await a.request({method:"eth_call",params:[{data:A,to:c},p]});return fi({abi:Zo,args:[C],functionName:"aggregate3",data:H||"0x"})}}),[{returnData:x,success:v}]=await b({data:o,to:l});if(!v)throw new sa({data:x});return x==="0x"?{data:void 0}:{data:x}}function u_(a){if(!(a instanceof B))return;let t=a.walk();return typeof t?.data=="object"?t.data?.data:t.data}function Tg(a){if(!(!a||a.length===0))return a.reduce((t,{slot:e,value:i})=>{if(e.length!==66)throw new No({size:e.length,targetSize:66,type:"hex"});if(i.length!==66)throw new No({size:i.length,targetSize:66,type:"hex"});return t[e]=i,t},{})}function p_(a){let{balance:t,nonce:e,state:i,stateDiff:r,code:n}=a,o={};if(n!==void 0&&(o.code=n),t!==void 0&&(o.balance=he(t,{size:32})),e!==void 0&&(o.nonce=he(e,{size:8})),i!==void 0&&(o.state=Tg(i)),r!==void 0){if(o.state)throw new pc;o.stateDiff=Tg(r)}return o}function m_(a){if(!a)return;let t={};for(let{address:e,...i}of a){if(!_t(e,{strict:!1}))throw new kt({address:e});if(t[e])throw new uc({address:e});t[e]=p_(i)}return t}var Fn=ae(()=>{"use strict";oi();kr();yg();gr();Ve();Ac();za();Rl();Lf();Cr();na();Ua();Dr();Pe();vg();vc();Qo();Tf();On()});function k_(a,t,e,i){if(typeof a.setBigUint64=="function")return a.setBigUint64(t,e,i);let r=BigInt(32),n=BigInt(4294967295),o=Number(e>>r&n),s=Number(e&n),l=i?4:0,c=i?0:4;a.setUint32(t+l,o,i),a.setUint32(t+c,s,i)}var Xc,dv=ae(()=>{"use strict";jl();en();Xc=class extends Ra{constructor(t,e,i,r){super(),this.blockLen=t,this.outputLen=e,this.padOffset=i,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Kl(this.buffer)}update(t){ra(this);let{view:e,buffer:i,blockLen:r}=this;t=Na(t);let n=t.length;for(let o=0;o<n;){let s=Math.min(r-this.pos,n-o);if(s===r){let l=Kl(t);for(;r<=n-o;o+=r)this.process(l,o);continue}i.set(t.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){ra(this),Fl(t,this),this.finished=!0;let{buffer:e,view:i,blockLen:r,isLE:n}=this,{pos:o}=this;e[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>r-o&&(this.process(i,0),o=0);for(let p=o;p<r;p++)e[p]=0;k_(i,r-8,BigInt(this.length*8),n),this.process(i,0);let s=Kl(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let c=l/4,u=this.get();if(c>u.length)throw new Error("_sha2: outputLen bigger than state");for(let p=0;p<c;p++)s.setUint32(4*p,u[p],n)}digest(){let{buffer:t,outputLen:e}=this;this.digestInto(t);let i=t.slice(0,e);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());let{blockLen:e,buffer:i,length:r,finished:n,destroyed:o,pos:s}=this;return t.length=r,t.pos=s,t.finished=n,t.destroyed=o,r%e&&t.buffer.set(i),t}}});var A_,D_,M_,Ja,er,Pf,hv,fv=ae(()=>{"use strict";dv();en();A_=(a,t,e)=>a&t^~a&e,D_=(a,t,e)=>a&t^a&e^t&e,M_=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ja=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),er=new Uint32Array(64),Pf=class extends Xc{constructor(){super(64,32,8,!1),this.A=Ja[0]|0,this.B=Ja[1]|0,this.C=Ja[2]|0,this.D=Ja[3]|0,this.E=Ja[4]|0,this.F=Ja[5]|0,this.G=Ja[6]|0,this.H=Ja[7]|0}get(){let{A:t,B:e,C:i,D:r,E:n,F:o,G:s,H:l}=this;return[t,e,i,r,n,o,s,l]}set(t,e,i,r,n,o,s,l){this.A=t|0,this.B=e|0,this.C=i|0,this.D=r|0,this.E=n|0,this.F=o|0,this.G=s|0,this.H=l|0}process(t,e){for(let p=0;p<16;p++,e+=4)er[p]=t.getUint32(e,!1);for(let p=16;p<64;p++){let b=er[p-15],x=er[p-2],v=Ci(b,7)^Ci(b,18)^b>>>3,y=Ci(x,17)^Ci(x,19)^x>>>10;er[p]=y+er[p-7]+v+er[p-16]|0}let{A:i,B:r,C:n,D:o,E:s,F:l,G:c,H:u}=this;for(let p=0;p<64;p++){let b=Ci(s,6)^Ci(s,11)^Ci(s,25),x=u+b+A_(s,l,c)+M_[p]+er[p]|0,y=(Ci(i,2)^Ci(i,13)^Ci(i,22))+D_(i,r,n)|0;u=c,c=l,l=s,s=o+x|0,o=n,n=r,r=i,i=x+y|0}i=i+this.A|0,r=r+this.B|0,n=n+this.C|0,o=o+this.D|0,s=s+this.E|0,l=l+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(i,r,n,o,s,l,c,u)}roundClean(){er.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},hv=Yl(()=>new Pf)});var Uf={};$b(Uf,{bitGet:()=>U_,bitLen:()=>H_,bitMask:()=>ns,bitSet:()=>V_,bytesToHex:()=>Mr,bytesToNumberBE:()=>pa,bytesToNumberLE:()=>Jc,concatBytes:()=>Zn,createHmacDrbg:()=>Hf,ensureBytes:()=>li,equalBytes:()=>Of,hexToBytes:()=>Pr,hexToNumber:()=>Nf,numberToBytesBE:()=>ir,numberToBytesLE:()=>eu,numberToHexUnpadded:()=>Sv,numberToVarBytesBE:()=>N_,utf8ToBytes:()=>O_,validateObject:()=>ar});function Mr(a){if(!Zc(a))throw new Error("Uint8Array expected");let t="";for(let e=0;e<a.length;e++)t+=R_[a[e]];return t}function Sv(a){let t=a.toString(16);return t.length&1?`0${t}`:t}function Nf(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);return BigInt(a===""?"0":`0x${a}`)}function Pr(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);let t=a.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);let e=new Uint8Array(t/2);for(let i=0;i<e.length;i++){let r=i*2,n=a.slice(r,r+2),o=Number.parseInt(n,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");e[i]=o}return e}function pa(a){return Nf(Mr(a))}function Jc(a){if(!Zc(a))throw new Error("Uint8Array expected");return Nf(Mr(Uint8Array.from(a).reverse()))}function ir(a,t){return Pr(a.toString(16).padStart(t*2,"0"))}function eu(a,t){return ir(a,t).reverse()}function N_(a){return Pr(Sv(a))}function li(a,t,e){let i;if(typeof t=="string")try{i=Pr(t)}catch(n){throw new Error(`${a} must be valid hex string, got "${t}". Cause: ${n}`)}else if(Zc(t))i=Uint8Array.from(t);else throw new Error(`${a} must be hex string or Uint8Array`);let r=i.length;if(typeof e=="number"&&r!==e)throw new Error(`${a} expected ${e} bytes, got ${r}`);return i}function Zn(...a){let t=new Uint8Array(a.reduce((i,r)=>i+r.length,0)),e=0;return a.forEach(i=>{if(!Zc(i))throw new Error("Uint8Array expected");t.set(i,e),e+=i.length}),t}function Of(a,t){if(a.length!==t.length)return!1;for(let e=0;e<a.length;e++)if(a[e]!==t[e])return!1;return!0}function O_(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function H_(a){let t;for(t=0;a>Ev;a>>=Qc,t+=1);return t}function U_(a,t){return a>>BigInt(t)&Qc}function Hf(a,t,e){if(typeof a!="number"||a<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof e!="function")throw new Error("hmacFn must be a function");let i=Rf(a),r=Rf(a),n=0,o=()=>{i.fill(1),r.fill(0),n=0},s=(...p)=>e(r,i,...p),l=(p=Rf())=>{r=s(Iv([0]),p),i=s(),p.length!==0&&(r=s(Iv([1]),p),i=s())},c=()=>{if(n++>=1e3)throw new Error("drbg: tried 1000 values");let p=0,b=[];for(;p<t;){i=s();let x=i.slice();b.push(x),p+=i.length}return Zn(...b)};return(p,b)=>{o(),l(p);let x;for(;!(x=b(c()));)l();return o(),x}}function ar(a,t,e={}){let i=(r,n,o)=>{let s=G_[n];if(typeof s!="function")throw new Error(`Invalid validator "${n}", expected function`);let l=a[r];if(!(o&&l===void 0)&&!s(l,a))throw new Error(`Invalid param ${String(r)}=${l} (${typeof l}), expected ${n}`)};for(let[r,n]of Object.entries(t))i(r,n,!1);for(let[r,n]of Object.entries(e))i(r,n,!0);return a}var Ev,Qc,B_,Zc,R_,V_,ns,Rf,Iv,G_,Jn=ae(()=>{"use strict";Ev=BigInt(0),Qc=BigInt(1),B_=BigInt(2),Zc=a=>a instanceof Uint8Array,R_=Array.from({length:256},(a,t)=>t.toString(16).padStart(2,"0"));V_=(a,t,e)=>a|(e?Qc:Ev)<<BigInt(t),ns=a=>(B_<<BigInt(a-1))-Qc,Rf=a=>new Uint8Array(a),Iv=a=>Uint8Array.from(a);G_={bigint:a=>typeof a=="bigint",function:a=>typeof a=="function",boolean:a=>typeof a=="boolean",string:a=>typeof a=="string",stringOrUint8Array:a=>typeof a=="string"||a instanceof Uint8Array,isSafeInteger:a=>Number.isSafeInteger(a),array:a=>Array.isArray(a),field:(a,t)=>t.Fp.isValid(a),hash:a=>typeof a=="function"&&Number.isSafeInteger(a.outputLen)}});function Mt(a,t){let e=a%t;return e>=gt?e:t+e}function q_(a,t,e){if(e<=gt||t<gt)throw new Error("Expected power/modulo > 0");if(e===nt)return gt;let i=nt;for(;t>gt;)t&nt&&(i=i*a%e),a=a*a%e,t>>=nt;return i}function ci(a,t,e){let i=a;for(;t-- >gt;)i*=i,i%=e;return i}function au(a,t){if(a===gt||t<=gt)throw new Error(`invert: expected positive integers, got n=${a} mod=${t}`);let e=Mt(a,t),i=t,r=gt,n=nt,o=nt,s=gt;for(;e!==gt;){let c=i/e,u=i%e,p=r-o*c,b=n-s*c;i=e,e=u,r=o,n=s,o=p,s=b}if(i!==nt)throw new Error("invert: does not exist");return Mt(r,t)}function W_(a){let t=(a-nt)/Br,e,i,r;for(e=a-nt,i=0;e%Br===gt;e/=Br,i++);for(r=Br;r<a&&q_(r,t,a)!==a-nt;r++);if(i===1){let o=(a+nt)/Vf;return function(l,c){let u=l.pow(c,o);if(!l.eql(l.sqr(u),c))throw new Error("Cannot find square root");return u}}let n=(e+nt)/Br;return function(s,l){if(s.pow(l,t)===s.neg(s.ONE))throw new Error("Cannot find square root");let c=i,u=s.pow(s.mul(s.ONE,r),e),p=s.pow(l,n),b=s.pow(l,e);for(;!s.eql(b,s.ONE);){if(s.eql(b,s.ZERO))return s.ZERO;let x=1;for(let y=s.sqr(b);x<c&&!s.eql(y,s.ONE);x++)y=s.sqr(y);let v=s.pow(u,nt<<BigInt(c-x-1));u=s.sqr(v),p=s.mul(p,v),b=s.mul(b,u),c=x}return p}}function K_(a){if(a%Vf===z_){let t=(a+nt)/Vf;return function(i,r){let n=i.pow(r,t);if(!i.eql(i.sqr(n),r))throw new Error("Cannot find square root");return n}}if(a%Kv===Wv){let t=(a-Wv)/Kv;return function(i,r){let n=i.mul(r,Br),o=i.pow(n,t),s=i.mul(r,o),l=i.mul(i.mul(s,Br),o),c=i.mul(s,i.sub(l,i.ONE));if(!i.eql(i.sqr(c),r))throw new Error("Cannot find square root");return c}}return a%j_,W_(a)}function Gf(a){let t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},e=Y_.reduce((i,r)=>(i[r]="function",i),t);return ar(a,e)}function $_(a,t,e){if(e<gt)throw new Error("Expected power > 0");if(e===gt)return a.ONE;if(e===nt)return t;let i=a.ONE,r=t;for(;e>gt;)e&nt&&(i=a.mul(i,r)),r=a.sqr(r),e>>=nt;return i}function X_(a,t){let e=new Array(t.length),i=t.reduce((n,o,s)=>a.is0(o)?n:(e[s]=n,a.mul(n,o)),a.ONE),r=a.inv(i);return t.reduceRight((n,o,s)=>a.is0(o)?n:(e[s]=a.mul(n,e[s]),a.mul(n,o)),r),e}function zf(a,t){let e=t!==void 0?t:a.toString(2).length,i=Math.ceil(e/8);return{nBitLength:e,nByteLength:i}}function Yv(a,t,e=!1,i={}){if(a<=gt)throw new Error(`Expected Field ORDER > 0, got ${a}`);let{nBitLength:r,nByteLength:n}=zf(a,t);if(n>2048)throw new Error("Field lengths over 2048 bytes are not supported");let o=K_(a),s=Object.freeze({ORDER:a,BITS:r,BYTES:n,MASK:ns(r),ZERO:gt,ONE:nt,create:l=>Mt(l,a),isValid:l=>{if(typeof l!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);return gt<=l&&l<a},is0:l=>l===gt,isOdd:l=>(l&nt)===nt,neg:l=>Mt(-l,a),eql:(l,c)=>l===c,sqr:l=>Mt(l*l,a),add:(l,c)=>Mt(l+c,a),sub:(l,c)=>Mt(l-c,a),mul:(l,c)=>Mt(l*c,a),pow:(l,c)=>$_(s,l,c),div:(l,c)=>Mt(l*au(c,a),a),sqrN:l=>l*l,addN:(l,c)=>l+c,subN:(l,c)=>l-c,mulN:(l,c)=>l*c,inv:l=>au(l,a),sqrt:i.sqrt||(l=>o(s,l)),invertBatch:l=>X_(s,l),cmov:(l,c,u)=>u?c:l,toBytes:l=>e?eu(l,n):ir(l,n),fromBytes:l=>{if(l.length!==n)throw new Error(`Fp.fromBytes: expected ${n}, got ${l.length}`);return e?Jc(l):pa(l)}});return Object.freeze(s)}function $v(a){if(typeof a!="bigint")throw new Error("field order must be bigint");let t=a.toString(2).length;return Math.ceil(t/8)}function Ff(a){let t=$v(a);return t+Math.ceil(t/2)}function Xv(a,t,e=!1){let i=a.length,r=$v(t),n=Ff(t);if(i<16||i<n||i>1024)throw new Error(`expected ${n}-1024 bytes of input, got ${i}`);let o=e?pa(a):Jc(a),s=Mt(o,t-nt)+nt;return e?eu(s,r):ir(s,r)}var gt,nt,Br,z_,Vf,Wv,Kv,F_,j_,Y_,ru=ae(()=>{"use strict";Jn();gt=BigInt(0),nt=BigInt(1),Br=BigInt(2),z_=BigInt(3),Vf=BigInt(4),Wv=BigInt(5),Kv=BigInt(8),F_=BigInt(9),j_=BigInt(16);Y_=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"]});function Qv(a,t){let e=(r,n)=>{let o=n.negate();return r?o:n},i=r=>{let n=Math.ceil(t/r)+1,o=2**(r-1);return{windows:n,windowSize:o}};return{constTimeNegate:e,unsafeLadder(r,n){let o=a.ZERO,s=r;for(;n>Z_;)n&jf&&(o=o.add(s)),s=s.double(),n>>=jf;return o},precomputeWindow(r,n){let{windows:o,windowSize:s}=i(n),l=[],c=r,u=c;for(let p=0;p<o;p++){u=c,l.push(u);for(let b=1;b<s;b++)u=u.add(c),l.push(u);c=u.double()}return l},wNAF(r,n,o){let{windows:s,windowSize:l}=i(r),c=a.ZERO,u=a.BASE,p=BigInt(2**r-1),b=2**r,x=BigInt(r);for(let v=0;v<s;v++){let y=v*l,C=Number(o&p);o>>=x,C>l&&(C-=b,o+=jf);let A=y,H=y+Math.abs(C)-1,z=v%2!==0,Z=C<0;C===0?u=u.add(e(z,n[A])):c=c.add(e(Z,n[H]))}return{p:c,f:u}},wNAFCached(r,n,o,s){let l=r._WINDOW_SIZE||1,c=n.get(r);return c||(c=this.precomputeWindow(r,l),l!==1&&n.set(r,s(c))),this.wNAF(l,c,o)}}}function qf(a){return Gf(a.Fp),ar(a,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...zf(a.n,a.nBitLength),...a,p:a.Fp.ORDER})}var Z_,jf,Zv=ae(()=>{"use strict";ru();Jn();Z_=BigInt(0),jf=BigInt(1)});function J_(a){let t=qf(a);ar(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:e,Fp:i,a:r}=t;if(e){if(!i.eql(r,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof e!="object"||typeof e.beta!="bigint"||typeof e.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}function iw(a){let t=J_(a),{Fp:e}=t,i=t.toBytes||((v,y,C)=>{let A=y.toAffine();return Zn(Uint8Array.from([4]),e.toBytes(A.x),e.toBytes(A.y))}),r=t.fromBytes||(v=>{let y=v.subarray(1),C=e.fromBytes(y.subarray(0,e.BYTES)),A=e.fromBytes(y.subarray(e.BYTES,2*e.BYTES));return{x:C,y:A}});function n(v){let{a:y,b:C}=t,A=e.sqr(v),H=e.mul(A,v);return e.add(e.add(H,e.mul(v,y)),C)}if(!e.eql(e.sqr(t.Gy),n(t.Gx)))throw new Error("bad generator point: equation left != right");function o(v){return typeof v=="bigint"&&ma<v&&v<t.n}function s(v){if(!o(v))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function l(v){let{allowedPrivateKeyLengths:y,nByteLength:C,wrapPrivateKey:A,n:H}=t;if(y&&typeof v!="bigint"){if(v instanceof Uint8Array&&(v=Mr(v)),typeof v!="string"||!y.includes(v.length))throw new Error("Invalid key");v=v.padStart(C*2,"0")}let z;try{z=typeof v=="bigint"?v:pa(li("private key",v,C))}catch{throw new Error(`private key must be ${C} bytes, hex or bigint, not ${typeof v}`)}return A&&(z=Mt(z,H)),s(z),z}let c=new Map;function u(v){if(!(v instanceof p))throw new Error("ProjectivePoint expected")}class p{constructor(y,C,A){if(this.px=y,this.py=C,this.pz=A,y==null||!e.isValid(y))throw new Error("x required");if(C==null||!e.isValid(C))throw new Error("y required");if(A==null||!e.isValid(A))throw new Error("z required")}static fromAffine(y){let{x:C,y:A}=y||{};if(!y||!e.isValid(C)||!e.isValid(A))throw new Error("invalid affine point");if(y instanceof p)throw new Error("projective point not allowed");let H=z=>e.eql(z,e.ZERO);return H(C)&&H(A)?p.ZERO:new p(C,A,e.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(y){let C=e.invertBatch(y.map(A=>A.pz));return y.map((A,H)=>A.toAffine(C[H])).map(p.fromAffine)}static fromHex(y){let C=p.fromAffine(r(li("pointHex",y)));return C.assertValidity(),C}static fromPrivateKey(y){return p.BASE.multiply(l(y))}_setWindowSize(y){this._WINDOW_SIZE=y,c.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint&&!e.is0(this.py))return;throw new Error("bad point: ZERO")}let{x:y,y:C}=this.toAffine();if(!e.isValid(y)||!e.isValid(C))throw new Error("bad point: x or y not FE");let A=e.sqr(C),H=n(y);if(!e.eql(A,H))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y}=this.toAffine();if(e.isOdd)return!e.isOdd(y);throw new Error("Field doesn't support isOdd")}equals(y){u(y);let{px:C,py:A,pz:H}=this,{px:z,py:Z,pz:D}=y,W=e.eql(e.mul(C,D),e.mul(z,H)),J=e.eql(e.mul(A,D),e.mul(Z,H));return W&&J}negate(){return new p(this.px,e.neg(this.py),this.pz)}double(){let{a:y,b:C}=t,A=e.mul(C,Jv),{px:H,py:z,pz:Z}=this,D=e.ZERO,W=e.ZERO,J=e.ZERO,me=e.mul(H,H),Be=e.mul(z,z),Ee=e.mul(Z,Z),Ie=e.mul(H,z);return Ie=e.add(Ie,Ie),J=e.mul(H,Z),J=e.add(J,J),D=e.mul(y,J),W=e.mul(A,Ee),W=e.add(D,W),D=e.sub(Be,W),W=e.add(Be,W),W=e.mul(D,W),D=e.mul(Ie,D),J=e.mul(A,J),Ee=e.mul(y,Ee),Ie=e.sub(me,Ee),Ie=e.mul(y,Ie),Ie=e.add(Ie,J),J=e.add(me,me),me=e.add(J,me),me=e.add(me,Ee),me=e.mul(me,Ie),W=e.add(W,me),Ee=e.mul(z,Z),Ee=e.add(Ee,Ee),me=e.mul(Ee,Ie),D=e.sub(D,me),J=e.mul(Ee,Be),J=e.add(J,J),J=e.add(J,J),new p(D,W,J)}add(y){u(y);let{px:C,py:A,pz:H}=this,{px:z,py:Z,pz:D}=y,W=e.ZERO,J=e.ZERO,me=e.ZERO,Be=t.a,Ee=e.mul(t.b,Jv),Ie=e.mul(C,z),pt=e.mul(A,Z),Rt=e.mul(H,D),_i=e.add(C,A),ce=e.add(z,Z);_i=e.mul(_i,ce),ce=e.add(Ie,pt),_i=e.sub(_i,ce),ce=e.add(C,H);let fe=e.add(z,D);return ce=e.mul(ce,fe),fe=e.add(Ie,Rt),ce=e.sub(ce,fe),fe=e.add(A,H),W=e.add(Z,D),fe=e.mul(fe,W),W=e.add(pt,Rt),fe=e.sub(fe,W),me=e.mul(Be,ce),W=e.mul(Ee,Rt),me=e.add(W,me),W=e.sub(pt,me),me=e.add(pt,me),J=e.mul(W,me),pt=e.add(Ie,Ie),pt=e.add(pt,Ie),Rt=e.mul(Be,Rt),ce=e.mul(Ee,ce),pt=e.add(pt,Rt),Rt=e.sub(Ie,Rt),Rt=e.mul(Be,Rt),ce=e.add(ce,Rt),Ie=e.mul(pt,ce),J=e.add(J,Ie),Ie=e.mul(fe,ce),W=e.mul(_i,W),W=e.sub(W,Ie),Ie=e.mul(_i,pt),me=e.mul(fe,me),me=e.add(me,Ie),new p(W,J,me)}subtract(y){return this.add(y.negate())}is0(){return this.equals(p.ZERO)}wNAF(y){return x.wNAFCached(this,c,y,C=>{let A=e.invertBatch(C.map(H=>H.pz));return C.map((H,z)=>H.toAffine(A[z])).map(p.fromAffine)})}multiplyUnsafe(y){let C=p.ZERO;if(y===ma)return C;if(s(y),y===yi)return this;let{endo:A}=t;if(!A)return x.unsafeLadder(this,y);let{k1neg:H,k1:z,k2neg:Z,k2:D}=A.splitScalar(y),W=C,J=C,me=this;for(;z>ma||D>ma;)z&yi&&(W=W.add(me)),D&yi&&(J=J.add(me)),me=me.double(),z>>=yi,D>>=yi;return H&&(W=W.negate()),Z&&(J=J.negate()),J=new p(e.mul(J.px,A.beta),J.py,J.pz),W.add(J)}multiply(y){s(y);let C=y,A,H,{endo:z}=t;if(z){let{k1neg:Z,k1:D,k2neg:W,k2:J}=z.splitScalar(C),{p:me,f:Be}=this.wNAF(D),{p:Ee,f:Ie}=this.wNAF(J);me=x.constTimeNegate(Z,me),Ee=x.constTimeNegate(W,Ee),Ee=new p(e.mul(Ee.px,z.beta),Ee.py,Ee.pz),A=me.add(Ee),H=Be.add(Ie)}else{let{p:Z,f:D}=this.wNAF(C);A=Z,H=D}return p.normalizeZ([A,H])[0]}multiplyAndAddUnsafe(y,C,A){let H=p.BASE,z=(D,W)=>W===ma||W===yi||!D.equals(H)?D.multiplyUnsafe(W):D.multiply(W),Z=z(this,C).add(z(y,A));return Z.is0()?void 0:Z}toAffine(y){let{px:C,py:A,pz:H}=this,z=this.is0();y==null&&(y=z?e.ONE:e.inv(H));let Z=e.mul(C,y),D=e.mul(A,y),W=e.mul(H,y);if(z)return{x:e.ZERO,y:e.ZERO};if(!e.eql(W,e.ONE))throw new Error("invZ was invalid");return{x:Z,y:D}}isTorsionFree(){let{h:y,isTorsionFree:C}=t;if(y===yi)return!0;if(C)return C(p,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:y,clearCofactor:C}=t;return y===yi?this:C?C(p,this):this.multiplyUnsafe(t.h)}toRawBytes(y=!0){return this.assertValidity(),i(p,this,y)}toHex(y=!0){return Mr(this.toRawBytes(y))}}p.BASE=new p(t.Gx,t.Gy,e.ONE),p.ZERO=new p(e.ZERO,e.ONE,e.ZERO);let b=t.nBitLength,x=Qv(p,t.endo?Math.ceil(b/2):b);return{CURVE:t,ProjectivePoint:p,normPrivateKeyToScalar:l,weierstrassEquation:n,isWithinCurveOrder:o}}function aw(a){let t=qf(a);return ar(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function eL(a){let t=aw(a),{Fp:e,n:i}=t,r=e.BYTES+1,n=2*e.BYTES+1;function o(ce){return ma<ce&&ce<e.ORDER}function s(ce){return Mt(ce,i)}function l(ce){return au(ce,i)}let{ProjectivePoint:c,normPrivateKeyToScalar:u,weierstrassEquation:p,isWithinCurveOrder:b}=iw({...t,toBytes(ce,fe,T){let Ye=fe.toAffine(),Ae=e.toBytes(Ye.x),mt=Zn;return T?mt(Uint8Array.from([fe.hasEvenY()?2:3]),Ae):mt(Uint8Array.from([4]),Ae,e.toBytes(Ye.y))},fromBytes(ce){let fe=ce.length,T=ce[0],Ye=ce.subarray(1);if(fe===r&&(T===2||T===3)){let Ae=pa(Ye);if(!o(Ae))throw new Error("Point is not on curve");let mt=p(Ae),Nt=e.sqrt(mt),Ot=(Nt&yi)===yi;return(T&1)===1!==Ot&&(Nt=e.neg(Nt)),{x:Ae,y:Nt}}else if(fe===n&&T===4){let Ae=e.fromBytes(Ye.subarray(0,e.BYTES)),mt=e.fromBytes(Ye.subarray(e.BYTES,2*e.BYTES));return{x:Ae,y:mt}}else throw new Error(`Point of length ${fe} was invalid. Expected ${r} compressed bytes or ${n} uncompressed bytes`)}}),x=ce=>Mr(ir(ce,t.nByteLength));function v(ce){let fe=i>>yi;return ce>fe}function y(ce){return v(ce)?s(-ce):ce}let C=(ce,fe,T)=>pa(ce.slice(fe,T));class A{constructor(fe,T,Ye){this.r=fe,this.s=T,this.recovery=Ye,this.assertValidity()}static fromCompact(fe){let T=t.nByteLength;return fe=li("compactSignature",fe,T*2),new A(C(fe,0,T),C(fe,T,2*T))}static fromDER(fe){let{r:T,s:Ye}=Rr.toSig(li("DER",fe));return new A(T,Ye)}assertValidity(){if(!b(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!b(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(fe){return new A(this.r,this.s,fe)}recoverPublicKey(fe){let{r:T,s:Ye,recovery:Ae}=this,mt=J(li("msgHash",fe));if(Ae==null||![0,1,2,3].includes(Ae))throw new Error("recovery id invalid");let Nt=Ae===2||Ae===3?T+t.n:T;if(Nt>=e.ORDER)throw new Error("recovery id 2 or 3 invalid");let Ot=Ae&1?"03":"02",Ri=c.fromHex(Ot+x(Nt)),ht=l(Nt),Ta=s(-mt*ht),ur=s(Ye*ht),jt=c.BASE.multiplyAndAddUnsafe(Ri,Ta,ur);if(!jt)throw new Error("point at infinify");return jt.assertValidity(),jt}hasHighS(){return v(this.s)}normalizeS(){return this.hasHighS()?new A(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return Pr(this.toDERHex())}toDERHex(){return Rr.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Pr(this.toCompactHex())}toCompactHex(){return x(this.r)+x(this.s)}}let H={isValidPrivateKey(ce){try{return u(ce),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{let ce=Ff(t.n);return Xv(t.randomBytes(ce),t.n)},precompute(ce=8,fe=c.BASE){return fe._setWindowSize(ce),fe.multiply(BigInt(3)),fe}};function z(ce,fe=!0){return c.fromPrivateKey(ce).toRawBytes(fe)}function Z(ce){let fe=ce instanceof Uint8Array,T=typeof ce=="string",Ye=(fe||T)&&ce.length;return fe?Ye===r||Ye===n:T?Ye===2*r||Ye===2*n:ce instanceof c}function D(ce,fe,T=!0){if(Z(ce))throw new Error("first arg must be private key");if(!Z(fe))throw new Error("second arg must be public key");return c.fromHex(fe).multiply(u(ce)).toRawBytes(T)}let W=t.bits2int||function(ce){let fe=pa(ce),T=ce.length*8-t.nBitLength;return T>0?fe>>BigInt(T):fe},J=t.bits2int_modN||function(ce){return s(W(ce))},me=ns(t.nBitLength);function Be(ce){if(typeof ce!="bigint")throw new Error("bigint expected");if(!(ma<=ce&&ce<me))throw new Error(`bigint expected < 2^${t.nBitLength}`);return ir(ce,t.nByteLength)}function Ee(ce,fe,T=Ie){if(["recovered","canonical"].some(Zi=>Zi in T))throw new Error("sign() legacy options not supported");let{hash:Ye,randomBytes:Ae}=t,{lowS:mt,prehash:Nt,extraEntropy:Ot}=T;mt==null&&(mt=!0),ce=li("msgHash",ce),Nt&&(ce=li("prehashed msgHash",Ye(ce)));let Ri=J(ce),ht=u(fe),Ta=[Be(ht),Be(Ri)];if(Ot!=null){let Zi=Ot===!0?Ae(e.BYTES):Ot;Ta.push(li("extraEntropy",Zi))}let ur=Zn(...Ta),jt=Ri;function ho(Zi){let Ca=W(Zi);if(!b(Ca))return;let fo=l(Ca),ii=c.BASE.multiply(Ca).toAffine(),ka=s(ii.x);if(ka===ma)return;let Wr=s(fo*s(jt+ka*ht));if(Wr===ma)return;let vl=(ii.x===ka?0:2)|Number(ii.y&yi),Kr=Wr;return mt&&v(Wr)&&(Kr=y(Wr),vl^=1),new A(ka,Kr,vl)}return{seed:ur,k2sig:ho}}let Ie={lowS:t.lowS,prehash:!1},pt={lowS:t.lowS,prehash:!1};function Rt(ce,fe,T=Ie){let{seed:Ye,k2sig:Ae}=Ee(ce,fe,T),mt=t;return Hf(mt.hash.outputLen,mt.nByteLength,mt.hmac)(Ye,Ae)}c.BASE._setWindowSize(8);function _i(ce,fe,T,Ye=pt){let Ae=ce;if(fe=li("msgHash",fe),T=li("publicKey",T),"strict"in Ye)throw new Error("options.strict was renamed to lowS");let{lowS:mt,prehash:Nt}=Ye,Ot,Ri;try{if(typeof Ae=="string"||Ae instanceof Uint8Array)try{Ot=A.fromDER(Ae)}catch(ii){if(!(ii instanceof Rr.Err))throw ii;Ot=A.fromCompact(Ae)}else if(typeof Ae=="object"&&typeof Ae.r=="bigint"&&typeof Ae.s=="bigint"){let{r:ii,s:ka}=Ae;Ot=new A(ii,ka)}else throw new Error("PARSE");Ri=c.fromHex(T)}catch(ii){if(ii.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(mt&&Ot.hasHighS())return!1;Nt&&(fe=t.hash(fe));let{r:ht,s:Ta}=Ot,ur=J(fe),jt=l(Ta),ho=s(ur*jt),Zi=s(ht*jt),Ca=c.BASE.multiplyAndAddUnsafe(Ri,ho,Zi)?.toAffine();return Ca?s(Ca.x)===ht:!1}return{CURVE:t,getPublicKey:z,getSharedSecret:D,sign:Rt,verify:_i,ProjectivePoint:c,Signature:A,utils:H}}var ew,tw,Rr,ma,yi,F3,Jv,j3,tL=ae(()=>{"use strict";ru();Jn();Jn();Zv();({bytesToNumberBE:ew,hexToBytes:tw}=Uf),Rr={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(a){let{Err:t}=Rr;if(a.length<2||a[0]!==2)throw new t("Invalid signature integer tag");let e=a[1],i=a.subarray(2,e+2);if(!e||i.length!==e)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:ew(i),l:a.subarray(e+2)}},toSig(a){let{Err:t}=Rr,e=typeof a=="string"?tw(a):a;if(!(e instanceof Uint8Array))throw new Error("ui8a expected");let i=e.length;if(i<2||e[0]!=48)throw new t("Invalid signature tag");if(e[1]!==i-2)throw new t("Invalid signature: incorrect length");let{d:r,l:n}=Rr._parseInt(e.subarray(2)),{d:o,l:s}=Rr._parseInt(n);if(s.length)throw new t("Invalid signature: left bytes after parsing");return{r,s:o}},hexFromSig(a){let t=c=>Number.parseInt(c[0],16)&8?"00"+c:c,e=c=>{let u=c.toString(16);return u.length&1?`0${u}`:u},i=t(e(a.s)),r=t(e(a.r)),n=i.length/2,o=r.length/2,s=e(n),l=e(o);return`30${e(o+n+4)}02${l}${r}02${s}${i}`}},ma=BigInt(0),yi=BigInt(1),F3=BigInt(2),Jv=BigInt(3),j3=BigInt(4)});var nu,Wf,iL=ae(()=>{"use strict";jl();en();nu=class extends Ra{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,uy(t);let i=Na(e);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let r=this.blockLen,n=new Uint8Array(r);n.set(i.length>r?t.create().update(i).digest():i);for(let o=0;o<n.length;o++)n[o]^=54;this.iHash.update(n),this.oHash=t.create();for(let o=0;o<n.length;o++)n[o]^=106;this.oHash.update(n),n.fill(0)}update(t){return ra(this),this.iHash.update(t),this}digestInto(t){ra(this),Uo(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));let{oHash:e,iHash:i,finished:r,destroyed:n,blockLen:o,outputLen:s}=this;return t=t,t.finished=r,t.destroyed=n,t.blockLen=o,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Wf=(a,t,e)=>new nu(a,t).update(e).digest();Wf.create=(a,t)=>new nu(a,t)});function rw(a){return{hash:a,hmac:(t,...e)=>Wf(a,t,_y(...e)),randomBytes:xy}}function aL(a,t){let e=i=>eL({...a,...rw(i)});return Object.freeze({...e(t),create:e})}var rL=ae(()=>{"use strict";iL();en();tL();});function ow(a){let t=sL,e=BigInt(3),i=BigInt(6),r=BigInt(11),n=BigInt(22),o=BigInt(23),s=BigInt(44),l=BigInt(88),c=a*a*a%t,u=c*c*a%t,p=ci(u,e,t)*u%t,b=ci(p,e,t)*u%t,x=ci(b,Kf,t)*c%t,v=ci(x,r,t)*x%t,y=ci(v,n,t)*v%t,C=ci(y,s,t)*y%t,A=ci(C,l,t)*C%t,H=ci(A,s,t)*y%t,z=ci(H,e,t)*u%t,Z=ci(z,o,t)*v%t,D=ci(Z,i,t)*c%t,W=ci(D,Kf,t);if(!Yf.eql(Yf.sqr(W),a))throw new Error("Cannot find square root");return W}var sL,nL,nw,Kf,oL,Yf,$f,iH,aH,lL=ae(()=>{"use strict";fv();ru();rL();sL=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),nL=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),nw=BigInt(1),Kf=BigInt(2),oL=(a,t)=>(a+t/Kf)/t;Yf=Yv(sL,void 0,void 0,{sqrt:ow}),$f=aL({a:BigInt(0),b:BigInt(7),Fp:Yf,n:nL,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:a=>{let t=nL,e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-nw*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),r=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),n=e,o=BigInt("0x100000000000000000000000000000000"),s=oL(n*a,t),l=oL(-i*a,t),c=Mt(a-s*e-l*r,t),u=Mt(-s*i-l*n,t),p=c>o,b=u>o;if(p&&(c=t-c),b&&(u=t-u),c>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+a);return{k1neg:p,k1:c,k2neg:b,k2:u}}}},hv),iH=BigInt(0),aH=$f.ProjectivePoint});var dL=c0((tb,ib)=>{"use strict";(function(a,t){typeof tb=="object"&&typeof ib<"u"?ib.exports=t():typeof define=="function"&&define.amd?define(t):(a=typeof globalThis<"u"?globalThis:a||self).jsSHA=t()})(tb,function(){"use strict";var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function t(E,d,w,I){var k,g,U,j=d||[0],$=(w=w||0)>>>3,se=I===-1?3:0;for(k=0;k<E.length;k+=1)g=(U=k+$)>>>2,j.length<=g&&j.push(0),j[g]|=E[k]<<8*(se+I*(U%4));return{value:j,binLen:8*E.length+w}}function e(E,d,w){switch(d){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(E){case"HEX":return function(I,k,g){return function(U,j,$,se){var ye,ne,pe,Se;if(U.length%2!=0)throw new Error("String of HEX type must be in byte increments");var te=j||[0],He=($=$||0)>>>3,Re=se===-1?3:0;for(ye=0;ye<U.length;ye+=2){if(ne=parseInt(U.substr(ye,2),16),isNaN(ne))throw new Error("String of HEX type contains invalid characters");for(pe=(Se=(ye>>>1)+He)>>>2;te.length<=pe;)te.push(0);te[pe]|=ne<<8*(Re+se*(Se%4))}return{value:te,binLen:4*U.length+$}}(I,k,g,w)};case"TEXT":return function(I,k,g){return function(U,j,$,se,ye){var ne,pe,Se,te,He,Re,We,it,Ji=0,ai=$||[0],wi=(se=se||0)>>>3;if(j==="UTF8")for(We=ye===-1?3:0,Se=0;Se<U.length;Se+=1)for(pe=[],128>(ne=U.charCodeAt(Se))?pe.push(ne):2048>ne?(pe.push(192|ne>>>6),pe.push(128|63&ne)):55296>ne||57344<=ne?pe.push(224|ne>>>12,128|ne>>>6&63,128|63&ne):(Se+=1,ne=65536+((1023&ne)<<10|1023&U.charCodeAt(Se)),pe.push(240|ne>>>18,128|ne>>>12&63,128|ne>>>6&63,128|63&ne)),te=0;te<pe.length;te+=1){for(He=(Re=Ji+wi)>>>2;ai.length<=He;)ai.push(0);ai[He]|=pe[te]<<8*(We+ye*(Re%4)),Ji+=1}else for(We=ye===-1?2:0,it=j==="UTF16LE"&&ye!==1||j!=="UTF16LE"&&ye===1,Se=0;Se<U.length;Se+=1){for(ne=U.charCodeAt(Se),it===!0&&(ne=(te=255&ne)<<8|ne>>>8),He=(Re=Ji+wi)>>>2;ai.length<=He;)ai.push(0);ai[He]|=ne<<8*(We+ye*(Re%4)),Ji+=2}return{value:ai,binLen:8*Ji+se}}(I,d,k,g,w)};case"B64":return function(I,k,g){return function(U,j,$,se){var ye,ne,pe,Se,te,He,Re=0,We=j||[0],it=($=$||0)>>>3,Ji=se===-1?3:0,ai=U.indexOf("=");if(U.search(/^[a-zA-Z0-9=+/]+$/)===-1)throw new Error("Invalid character in base-64 string");if(U=U.replace(/=/g,""),ai!==-1&&ai<U.length)throw new Error("Invalid '=' found in base-64 string");for(ye=0;ye<U.length;ye+=4){for(Se=U.substr(ye,4),pe=0,ne=0;ne<Se.length;ne+=1)pe|=a.indexOf(Se.charAt(ne))<<18-6*ne;for(ne=0;ne<Se.length-1;ne+=1){for(te=(He=Re+it)>>>2;We.length<=te;)We.push(0);We[te]|=(pe>>>16-8*ne&255)<<8*(Ji+se*(He%4)),Re+=1}}return{value:We,binLen:8*Re+$}}(I,k,g,w)};case"BYTES":return function(I,k,g){return function(U,j,$,se){var ye,ne,pe,Se,te=j||[0],He=($=$||0)>>>3,Re=se===-1?3:0;for(ne=0;ne<U.length;ne+=1)ye=U.charCodeAt(ne),pe=(Se=ne+He)>>>2,te.length<=pe&&te.push(0),te[pe]|=ye<<8*(Re+se*(Se%4));return{value:te,binLen:8*U.length+$}}(I,k,g,w)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(I,k,g){return function(U,j,$,se){return t(new Uint8Array(U),j,$,se)}(I,k,g,w)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(I,k,g){return t(I,k,g,w)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function i(E,d,w,I){switch(E){case"HEX":return function(k){return function(g,U,j,$){var se,ye,ne="",pe=U/8,Se=j===-1?3:0;for(se=0;se<pe;se+=1)ye=g[se>>>2]>>>8*(Se+j*(se%4)),ne+="0123456789abcdef".charAt(ye>>>4&15)+"0123456789abcdef".charAt(15&ye);return $.outputUpper?ne.toUpperCase():ne}(k,d,w,I)};case"B64":return function(k){return function(g,U,j,$){var se,ye,ne,pe,Se,te="",He=U/8,Re=j===-1?3:0;for(se=0;se<He;se+=3)for(pe=se+1<He?g[se+1>>>2]:0,Se=se+2<He?g[se+2>>>2]:0,ne=(g[se>>>2]>>>8*(Re+j*(se%4))&255)<<16|(pe>>>8*(Re+j*((se+1)%4))&255)<<8|Se>>>8*(Re+j*((se+2)%4))&255,ye=0;ye<4;ye+=1)te+=8*se+6*ye<=U?a.charAt(ne>>>6*(3-ye)&63):$.b64Pad;return te}(k,d,w,I)};case"BYTES":return function(k){return function(g,U,j){var $,se,ye="",ne=U/8,pe=j===-1?3:0;for($=0;$<ne;$+=1)se=g[$>>>2]>>>8*(pe+j*($%4))&255,ye+=String.fromCharCode(se);return ye}(k,d,w)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(k){return function(g,U,j){var $,se=U/8,ye=new ArrayBuffer(se),ne=new Uint8Array(ye),pe=j===-1?3:0;for($=0;$<se;$+=1)ne[$]=g[$>>>2]>>>8*(pe+j*($%4))&255;return ye}(k,d,w)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(k){return function(g,U,j){var $,se=U/8,ye=j===-1?3:0,ne=new Uint8Array(se);for($=0;$<se;$+=1)ne[$]=g[$>>>2]>>>8*(ye+j*($%4))&255;return ne}(k,d,w)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}var r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],n=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s="Chosen SHA variant is not supported";function l(E,d){var w,I,k=E.binLen>>>3,g=d.binLen>>>3,U=k<<3,j=4-k<<3;if(k%4!=0){for(w=0;w<g;w+=4)I=k+w>>>2,E.value[I]|=d.value[w>>>2]<<U,E.value.push(0),E.value[I+1]|=d.value[w>>>2]>>>j;return(E.value.length<<2)-4>=g+k&&E.value.pop(),{value:E.value,binLen:E.binLen+d.binLen}}return{value:E.value.concat(d.value),binLen:E.binLen+d.binLen}}function c(E){var d={outputUpper:!1,b64Pad:"=",outputLen:-1},w=E||{},I="Output length must be a multiple of 8";if(d.outputUpper=w.outputUpper||!1,w.b64Pad&&(d.b64Pad=w.b64Pad),w.outputLen){if(w.outputLen%8!=0)throw new Error(I);d.outputLen=w.outputLen}else if(w.shakeLen){if(w.shakeLen%8!=0)throw new Error(I);d.outputLen=w.shakeLen}if(typeof d.outputUpper!="boolean")throw new Error("Invalid outputUpper formatting option");if(typeof d.b64Pad!="string")throw new Error("Invalid b64Pad formatting option");return d}function u(E,d,w,I){var k=E+" must include a value and format";if(!d){if(!I)throw new Error(k);return I}if(d.value===void 0||!d.format)throw new Error(k);return e(d.format,d.encoding||"UTF8",w)(d.value)}var p=function(){function E(d,w,I){var k=I||{};if(this.t=w,this.i=k.encoding||"UTF8",this.numRounds=k.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=d,this.u=[],this.s=0,this.h=!1,this.v=0,this.A=!1,this.l=[],this.H=[]}return E.prototype.update=function(d){var w,I=0,k=this.S>>>5,g=this.p(d,this.u,this.s),U=g.binLen,j=g.value,$=U>>>5;for(w=0;w<$;w+=k)I+this.S<=U&&(this.m=this.R(j.slice(w,w+k),this.m),I+=this.S);this.v+=I,this.u=j.slice(I>>>5),this.s=U%this.S,this.h=!0},E.prototype.getHash=function(d,w){var I,k,g=this.U,U=c(w);if(this.T){if(U.outputLen===-1)throw new Error("Output length must be specified in options");g=U.outputLen}var j=i(d,g,this.C,U);if(this.A&&this.F)return j(this.F(U));for(k=this.K(this.u.slice(),this.s,this.v,this.B(this.m),g),I=1;I<this.numRounds;I+=1)this.T&&g%32!=0&&(k[k.length-1]&=16777215>>>24-g%32),k=this.K(k,g,0,this.L(this.o),g);return j(k)},E.prototype.setHMACKey=function(d,w,I){if(!this.g)throw new Error("Variant does not support HMAC");if(this.h)throw new Error("Cannot set MAC key after calling update");var k=e(w,(I||{}).encoding||"UTF8",this.C);this.k(k(d))},E.prototype.k=function(d){var w,I=this.S>>>3,k=I/4-1;if(this.numRounds!==1)throw new Error("Cannot set numRounds with MAC");if(this.A)throw new Error("MAC key already set");for(I<d.binLen/8&&(d.value=this.K(d.value,d.binLen,0,this.L(this.o),this.U));d.value.length<=k;)d.value.push(0);for(w=0;w<=k;w+=1)this.l[w]=909522486^d.value[w],this.H[w]=1549556828^d.value[w];this.m=this.R(this.l,this.m),this.v=this.S,this.A=!0},E.prototype.getHMAC=function(d,w){var I=c(w);return i(d,this.U,this.C,I)(this.Y())},E.prototype.Y=function(){var d;if(!this.A)throw new Error("Cannot call getHMAC without first setting MAC key");var w=this.K(this.u.slice(),this.s,this.v,this.B(this.m),this.U);return d=this.R(this.H,this.L(this.o)),d=this.K(w,this.U,this.S,d,this.U)},E}(),b=function(E,d){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(w,I){w.__proto__=I}||function(w,I){for(var k in I)Object.prototype.hasOwnProperty.call(I,k)&&(w[k]=I[k])})(E,d)};function x(E,d){function w(){this.constructor=E}b(E,d),E.prototype=d===null?Object.create(d):(w.prototype=d.prototype,new w)}function v(E,d){return E<<d|E>>>32-d}function y(E,d){return E>>>d|E<<32-d}function C(E,d){return E>>>d}function A(E,d,w){return E^d^w}function H(E,d,w){return E&d^~E&w}function z(E,d,w){return E&d^E&w^d&w}function Z(E){return y(E,2)^y(E,13)^y(E,22)}function D(E,d){var w=(65535&E)+(65535&d);return(65535&(E>>>16)+(d>>>16)+(w>>>16))<<16|65535&w}function W(E,d,w,I){var k=(65535&E)+(65535&d)+(65535&w)+(65535&I);return(65535&(E>>>16)+(d>>>16)+(w>>>16)+(I>>>16)+(k>>>16))<<16|65535&k}function J(E,d,w,I,k){var g=(65535&E)+(65535&d)+(65535&w)+(65535&I)+(65535&k);return(65535&(E>>>16)+(d>>>16)+(w>>>16)+(I>>>16)+(k>>>16)+(g>>>16))<<16|65535&g}function me(E){return y(E,7)^y(E,18)^C(E,3)}function Be(E){return y(E,6)^y(E,11)^y(E,25)}function Ee(E){return[1732584193,4023233417,2562383102,271733878,3285377520]}function Ie(E,d){var w,I,k,g,U,j,$,se=[];for(w=d[0],I=d[1],k=d[2],g=d[3],U=d[4],$=0;$<80;$+=1)se[$]=$<16?E[$]:v(se[$-3]^se[$-8]^se[$-14]^se[$-16],1),j=$<20?J(v(w,5),H(I,k,g),U,1518500249,se[$]):$<40?J(v(w,5),A(I,k,g),U,1859775393,se[$]):$<60?J(v(w,5),z(I,k,g),U,2400959708,se[$]):J(v(w,5),A(I,k,g),U,3395469782,se[$]),U=g,g=k,k=v(I,30),I=w,w=j;return d[0]=D(w,d[0]),d[1]=D(I,d[1]),d[2]=D(k,d[2]),d[3]=D(g,d[3]),d[4]=D(U,d[4]),d}function pt(E,d,w,I){for(var k,g=15+(d+65>>>9<<4),U=d+w;E.length<=g;)E.push(0);for(E[d>>>5]|=128<<24-d%32,E[g]=4294967295&U,E[g-1]=U/4294967296|0,k=0;k<E.length;k+=16)I=Ie(E.slice(k,k+16),I);return I}var Rt=function(E){function d(w,I,k){var g=this;if(w!=="SHA-1")throw new Error(s);var U=k||{};return(g=E.call(this,w,I,k)||this).g=!0,g.F=g.Y,g.C=-1,g.p=e(g.t,g.i,g.C),g.R=Ie,g.B=function(j){return j.slice()},g.L=Ee,g.K=pt,g.m=[1732584193,4023233417,2562383102,271733878,3285377520],g.S=512,g.U=160,g.T=!1,U.hmacKey&&g.k(u("hmacKey",U.hmacKey,g.C)),g}return x(d,E),d}(p);function _i(E){return E=="SHA-224"?n.slice():o.slice()}function ce(E,d){var w,I,k,g,U,j,$,se,ye,ne,pe,Se,te=[];for(w=d[0],I=d[1],k=d[2],g=d[3],U=d[4],j=d[5],$=d[6],se=d[7],pe=0;pe<64;pe+=1)te[pe]=pe<16?E[pe]:W(y(Se=te[pe-2],17)^y(Se,19)^C(Se,10),te[pe-7],me(te[pe-15]),te[pe-16]),ye=J(se,Be(U),H(U,j,$),r[pe],te[pe]),ne=D(Z(w),z(w,I,k)),se=$,$=j,j=U,U=D(g,ye),g=k,k=I,I=w,w=D(ye,ne);return d[0]=D(w,d[0]),d[1]=D(I,d[1]),d[2]=D(k,d[2]),d[3]=D(g,d[3]),d[4]=D(U,d[4]),d[5]=D(j,d[5]),d[6]=D($,d[6]),d[7]=D(se,d[7]),d}var fe=function(E){function d(w,I,k){var g=this;if(w!=="SHA-224"&&w!=="SHA-256")throw new Error(s);var U=k||{};return(g=E.call(this,w,I,k)||this).F=g.Y,g.g=!0,g.C=-1,g.p=e(g.t,g.i,g.C),g.R=ce,g.B=function(j){return j.slice()},g.L=_i,g.K=function(j,$,se,ye){return function(ne,pe,Se,te,He){for(var Re,We=15+(pe+65>>>9<<4),it=pe+Se;ne.length<=We;)ne.push(0);for(ne[pe>>>5]|=128<<24-pe%32,ne[We]=4294967295&it,ne[We-1]=it/4294967296|0,Re=0;Re<ne.length;Re+=16)te=ce(ne.slice(Re,Re+16),te);return He==="SHA-224"?[te[0],te[1],te[2],te[3],te[4],te[5],te[6]]:te}(j,$,se,ye,w)},g.m=_i(w),g.S=512,g.U=w==="SHA-224"?224:256,g.T=!1,U.hmacKey&&g.k(u("hmacKey",U.hmacKey,g.C)),g}return x(d,E),d}(p),T=function(E,d){this.N=E,this.I=d};function Ye(E,d){var w;return d>32?(w=64-d,new T(E.I<<d|E.N>>>w,E.N<<d|E.I>>>w)):d!==0?(w=32-d,new T(E.N<<d|E.I>>>w,E.I<<d|E.N>>>w)):E}function Ae(E,d){var w;return d<32?(w=32-d,new T(E.N>>>d|E.I<<w,E.I>>>d|E.N<<w)):(w=64-d,new T(E.I>>>d|E.N<<w,E.N>>>d|E.I<<w))}function mt(E,d){return new T(E.N>>>d,E.I>>>d|E.N<<32-d)}function Nt(E,d,w){return new T(E.N&d.N^~E.N&w.N,E.I&d.I^~E.I&w.I)}function Ot(E,d,w){return new T(E.N&d.N^E.N&w.N^d.N&w.N,E.I&d.I^E.I&w.I^d.I&w.I)}function Ri(E){var d=Ae(E,28),w=Ae(E,34),I=Ae(E,39);return new T(d.N^w.N^I.N,d.I^w.I^I.I)}function ht(E,d){var w,I;w=(65535&E.I)+(65535&d.I);var k=(65535&(I=(E.I>>>16)+(d.I>>>16)+(w>>>16)))<<16|65535&w;return w=(65535&E.N)+(65535&d.N)+(I>>>16),I=(E.N>>>16)+(d.N>>>16)+(w>>>16),new T((65535&I)<<16|65535&w,k)}function Ta(E,d,w,I){var k,g;k=(65535&E.I)+(65535&d.I)+(65535&w.I)+(65535&I.I);var U=(65535&(g=(E.I>>>16)+(d.I>>>16)+(w.I>>>16)+(I.I>>>16)+(k>>>16)))<<16|65535&k;return k=(65535&E.N)+(65535&d.N)+(65535&w.N)+(65535&I.N)+(g>>>16),g=(E.N>>>16)+(d.N>>>16)+(w.N>>>16)+(I.N>>>16)+(k>>>16),new T((65535&g)<<16|65535&k,U)}function ur(E,d,w,I,k){var g,U;g=(65535&E.I)+(65535&d.I)+(65535&w.I)+(65535&I.I)+(65535&k.I);var j=(65535&(U=(E.I>>>16)+(d.I>>>16)+(w.I>>>16)+(I.I>>>16)+(k.I>>>16)+(g>>>16)))<<16|65535&g;return g=(65535&E.N)+(65535&d.N)+(65535&w.N)+(65535&I.N)+(65535&k.N)+(U>>>16),U=(E.N>>>16)+(d.N>>>16)+(w.N>>>16)+(I.N>>>16)+(k.N>>>16)+(g>>>16),new T((65535&U)<<16|65535&g,j)}function jt(E,d){return new T(E.N^d.N,E.I^d.I)}function ho(E){var d=Ae(E,1),w=Ae(E,8),I=mt(E,7);return new T(d.N^w.N^I.N,d.I^w.I^I.I)}function Zi(E){var d=Ae(E,14),w=Ae(E,18),I=Ae(E,41);return new T(d.N^w.N^I.N,d.I^w.I^I.I)}var Ca=[new T(r[0],3609767458),new T(r[1],602891725),new T(r[2],3964484399),new T(r[3],2173295548),new T(r[4],4081628472),new T(r[5],3053834265),new T(r[6],2937671579),new T(r[7],3664609560),new T(r[8],2734883394),new T(r[9],1164996542),new T(r[10],1323610764),new T(r[11],3590304994),new T(r[12],4068182383),new T(r[13],991336113),new T(r[14],633803317),new T(r[15],3479774868),new T(r[16],2666613458),new T(r[17],944711139),new T(r[18],2341262773),new T(r[19],2007800933),new T(r[20],1495990901),new T(r[21],1856431235),new T(r[22],3175218132),new T(r[23],2198950837),new T(r[24],3999719339),new T(r[25],766784016),new T(r[26],2566594879),new T(r[27],3203337956),new T(r[28],1034457026),new T(r[29],2466948901),new T(r[30],3758326383),new T(r[31],168717936),new T(r[32],1188179964),new T(r[33],1546045734),new T(r[34],1522805485),new T(r[35],2643833823),new T(r[36],2343527390),new T(r[37],1014477480),new T(r[38],1206759142),new T(r[39],344077627),new T(r[40],1290863460),new T(r[41],3158454273),new T(r[42],3505952657),new T(r[43],106217008),new T(r[44],3606008344),new T(r[45],1432725776),new T(r[46],1467031594),new T(r[47],851169720),new T(r[48],3100823752),new T(r[49],1363258195),new T(r[50],3750685593),new T(r[51],3785050280),new T(r[52],3318307427),new T(r[53],3812723403),new T(r[54],2003034995),new T(r[55],3602036899),new T(r[56],1575990012),new T(r[57],1125592928),new T(r[58],2716904306),new T(r[59],442776044),new T(r[60],593698344),new T(r[61],3733110249),new T(r[62],2999351573),new T(r[63],3815920427),new T(3391569614,3928383900),new T(3515267271,566280711),new T(3940187606,3454069534),new T(4118630271,4000239992),new T(116418474,1914138554),new T(174292421,2731055270),new T(289380356,3203993006),new T(460393269,320620315),new T(685471733,587496836),new T(852142971,1086792851),new T(1017036298,365543100),new T(1126000580,2618297676),new T(1288033470,3409855158),new T(1501505948,4234509866),new T(1607167915,987167468),new T(1816402316,1246189591)];function fo(E){return E==="SHA-384"?[new T(3418070365,n[0]),new T(1654270250,n[1]),new T(2438529370,n[2]),new T(355462360,n[3]),new T(1731405415,n[4]),new T(41048885895,n[5]),new T(3675008525,n[6]),new T(1203062813,n[7])]:[new T(o[0],4089235720),new T(o[1],2227873595),new T(o[2],4271175723),new T(o[3],1595750129),new T(o[4],2917565137),new T(o[5],725511199),new T(o[6],4215389547),new T(o[7],327033209)]}function ii(E,d){var w,I,k,g,U,j,$,se,ye,ne,pe,Se,te,He,Re,We,it=[];for(w=d[0],I=d[1],k=d[2],g=d[3],U=d[4],j=d[5],$=d[6],se=d[7],pe=0;pe<80;pe+=1)pe<16?(Se=2*pe,it[pe]=new T(E[Se],E[Se+1])):it[pe]=Ta((te=it[pe-2],He=void 0,Re=void 0,We=void 0,He=Ae(te,19),Re=Ae(te,61),We=mt(te,6),new T(He.N^Re.N^We.N,He.I^Re.I^We.I)),it[pe-7],ho(it[pe-15]),it[pe-16]),ye=ur(se,Zi(U),Nt(U,j,$),Ca[pe],it[pe]),ne=ht(Ri(w),Ot(w,I,k)),se=$,$=j,j=U,U=ht(g,ye),g=k,k=I,I=w,w=ht(ye,ne);return d[0]=ht(w,d[0]),d[1]=ht(I,d[1]),d[2]=ht(k,d[2]),d[3]=ht(g,d[3]),d[4]=ht(U,d[4]),d[5]=ht(j,d[5]),d[6]=ht($,d[6]),d[7]=ht(se,d[7]),d}var ka=function(E){function d(w,I,k){var g=this;if(w!=="SHA-384"&&w!=="SHA-512")throw new Error(s);var U=k||{};return(g=E.call(this,w,I,k)||this).F=g.Y,g.g=!0,g.C=-1,g.p=e(g.t,g.i,g.C),g.R=ii,g.B=function(j){return j.slice()},g.L=fo,g.K=function(j,$,se,ye){return function(ne,pe,Se,te,He){for(var Re,We=31+(pe+129>>>10<<5),it=pe+Se;ne.length<=We;)ne.push(0);for(ne[pe>>>5]|=128<<24-pe%32,ne[We]=4294967295&it,ne[We-1]=it/4294967296|0,Re=0;Re<ne.length;Re+=32)te=ii(ne.slice(Re,Re+32),te);return He==="SHA-384"?[(te=te)[0].N,te[0].I,te[1].N,te[1].I,te[2].N,te[2].I,te[3].N,te[3].I,te[4].N,te[4].I,te[5].N,te[5].I]:[te[0].N,te[0].I,te[1].N,te[1].I,te[2].N,te[2].I,te[3].N,te[3].I,te[4].N,te[4].I,te[5].N,te[5].I,te[6].N,te[6].I,te[7].N,te[7].I]}(j,$,se,ye,w)},g.m=fo(w),g.S=1024,g.U=w==="SHA-384"?384:512,g.T=!1,U.hmacKey&&g.k(u("hmacKey",U.hmacKey,g.C)),g}return x(d,E),d}(p),Wr=[new T(0,1),new T(0,32898),new T(2147483648,32906),new T(2147483648,2147516416),new T(0,32907),new T(0,2147483649),new T(2147483648,2147516545),new T(2147483648,32777),new T(0,138),new T(0,136),new T(0,2147516425),new T(0,2147483658),new T(0,2147516555),new T(2147483648,139),new T(2147483648,32905),new T(2147483648,32771),new T(2147483648,32770),new T(2147483648,128),new T(0,32778),new T(2147483648,2147483658),new T(2147483648,2147516545),new T(2147483648,32896),new T(0,2147483649),new T(2147483648,2147516424)],vl=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function Kr(E){var d,w=[];for(d=0;d<5;d+=1)w[d]=[new T(0,0),new T(0,0),new T(0,0),new T(0,0),new T(0,0)];return w}function i0(E){var d,w=[];for(d=0;d<5;d+=1)w[d]=E[d].slice();return w}function Ll(E,d){var w,I,k,g,U,j,$,se,ye,ne=[],pe=[];if(E!==null)for(I=0;I<E.length;I+=2)d[(I>>>1)%5][(I>>>1)/5|0]=jt(d[(I>>>1)%5][(I>>>1)/5|0],new T(E[I+1],E[I]));for(w=0;w<24;w+=1){for(g=Kr(),I=0;I<5;I+=1)ne[I]=(U=d[I][0],j=d[I][1],$=d[I][2],se=d[I][3],ye=d[I][4],new T(U.N^j.N^$.N^se.N^ye.N,U.I^j.I^$.I^se.I^ye.I));for(I=0;I<5;I+=1)pe[I]=jt(ne[(I+4)%5],Ye(ne[(I+1)%5],1));for(I=0;I<5;I+=1)for(k=0;k<5;k+=1)d[I][k]=jt(d[I][k],pe[I]);for(I=0;I<5;I+=1)for(k=0;k<5;k+=1)g[k][(2*I+3*k)%5]=Ye(d[I][k],vl[I][k]);for(I=0;I<5;I+=1)for(k=0;k<5;k+=1)d[I][k]=jt(g[I][k],new T(~g[(I+1)%5][k].N&g[(I+2)%5][k].N,~g[(I+1)%5][k].I&g[(I+2)%5][k].I));d[0][0]=jt(d[0][0],Wr[w])}return d}function Wb(E){var d,w,I=0,k=[0,0],g=[4294967295&E,E/4294967296&2097151];for(d=6;d>=0;d--)(w=g[d>>2]>>>8*d&255)===0&&I===0||(k[I+1>>2]|=w<<8*(I+1),I+=1);return I=I!==0?I:1,k[0]|=I,{value:I+1>4?k:[k[0]],binLen:8+8*I}}function af(E){return l(Wb(E.binLen),E)}function Kb(E,d){var w,I=Wb(d),k=d>>>2,g=(k-(I=l(I,E)).value.length%k)%k;for(w=0;w<g;w++)I.value.push(0);return I.value}var a0=function(E){function d(w,I,k){var g=this,U=6,j=0,$=k||{};if((g=E.call(this,w,I,k)||this).numRounds!==1){if($.kmacKey||$.hmacKey)throw new Error("Cannot set numRounds with MAC");if(g.o==="CSHAKE128"||g.o==="CSHAKE256")throw new Error("Cannot set numRounds for CSHAKE variants")}switch(g.C=1,g.p=e(g.t,g.i,g.C),g.R=Ll,g.B=i0,g.L=Kr,g.m=Kr(),g.T=!1,w){case"SHA3-224":g.S=j=1152,g.U=224,g.g=!0,g.F=g.Y;break;case"SHA3-256":g.S=j=1088,g.U=256,g.g=!0,g.F=g.Y;break;case"SHA3-384":g.S=j=832,g.U=384,g.g=!0,g.F=g.Y;break;case"SHA3-512":g.S=j=576,g.U=512,g.g=!0,g.F=g.Y;break;case"SHAKE128":U=31,g.S=j=1344,g.U=-1,g.T=!0,g.g=!1,g.F=null;break;case"SHAKE256":U=31,g.S=j=1088,g.U=-1,g.T=!0,g.g=!1,g.F=null;break;case"KMAC128":U=4,g.S=j=1344,g.M(k),g.U=-1,g.T=!0,g.g=!1,g.F=g.X;break;case"KMAC256":U=4,g.S=j=1088,g.M(k),g.U=-1,g.T=!0,g.g=!1,g.F=g.X;break;case"CSHAKE128":g.S=j=1344,U=g.O(k),g.U=-1,g.T=!0,g.g=!1,g.F=null;break;case"CSHAKE256":g.S=j=1088,U=g.O(k),g.U=-1,g.T=!0,g.g=!1,g.F=null;break;default:throw new Error(s)}return g.K=function(se,ye,ne,pe,Se){return function(te,He,Re,We,it,Ji,ai){var wi,rf,_l=0,bo=[],wl=it>>>5,r0=He>>>5;for(wi=0;wi<r0&&He>=it;wi+=wl)We=Ll(te.slice(wi,wi+wl),We),He-=it;for(te=te.slice(wi),He%=it;te.length<wl;)te.push(0);for(te[(wi=He>>>3)>>2]^=Ji<<wi%4*8,te[wl-1]^=2147483648,We=Ll(te,We);32*bo.length<ai&&(rf=We[_l%5][_l/5|0],bo.push(rf.I),!(32*bo.length>=ai));)bo.push(rf.N),64*(_l+=1)%it==0&&(Ll(null,We),_l=0);return bo}(se,ye,0,pe,j,U,Se)},$.hmacKey&&g.k(u("hmacKey",$.hmacKey,g.C)),g}return x(d,E),d.prototype.O=function(w,I){var k=function($){var se=$||{};return{funcName:u("funcName",se.funcName,1,{value:[],binLen:0}),customization:u("Customization",se.customization,1,{value:[],binLen:0})}}(w||{});I&&(k.funcName=I);var g=l(af(k.funcName),af(k.customization));if(k.customization.binLen!==0||k.funcName.binLen!==0){for(var U=Kb(g,this.S>>>3),j=0;j<U.length;j+=this.S>>>5)this.m=this.R(U.slice(j,j+(this.S>>>5)),this.m),this.v+=this.S;return 4}return 31},d.prototype.M=function(w){var I=function(U){var j=U||{};return{kmacKey:u("kmacKey",j.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:u("Customization",j.customization,1,{value:[],binLen:0})}}(w||{});this.O(w,I.funcName);for(var k=Kb(af(I.kmacKey),this.S>>>3),g=0;g<k.length;g+=this.S>>>5)this.m=this.R(k.slice(g,g+(this.S>>>5)),this.m),this.v+=this.S;this.A=!0},d.prototype.X=function(w){var I=l({value:this.u.slice(),binLen:this.s},function(k){var g,U,j=0,$=[0,0],se=[4294967295&k,k/4294967296&2097151];for(g=6;g>=0;g--)(U=se[g>>2]>>>8*g&255)==0&&j===0||($[j>>2]|=U<<8*j,j+=1);return $[(j=j!==0?j:1)>>2]|=j<<8*j,{value:j+1>4?$:[$[0]],binLen:8+8*j}}(w.outputLen));return this.K(I.value,I.binLen,this.v,this.B(this.m),w.outputLen)},d}(p);return function(){function E(d,w,I){if(d=="SHA-1")this.j=new Rt(d,w,I);else if(d=="SHA-224"||d=="SHA-256")this.j=new fe(d,w,I);else if(d=="SHA-384"||d=="SHA-512")this.j=new ka(d,w,I);else{if(d!="SHA3-224"&&d!="SHA3-256"&&d!="SHA3-384"&&d!="SHA3-512"&&d!="SHAKE128"&&d!="SHAKE256"&&d!="CSHAKE128"&&d!="CSHAKE256"&&d!="KMAC128"&&d!="KMAC256")throw new Error(s);this.j=new a0(d,w,I)}}return E.prototype.update=function(d){this.j.update(d)},E.prototype.getHash=function(d,w){return this.j.getHash(d,w)},E.prototype.setHMACKey=function(d,w,I){this.j.setHMACKey(d,w,I)},E.prototype.getHMAC=function(d,w){return this.j.getHMAC(d,w)},E}()})});var Il=class extends Laya.Scene{};var{regClass:m0,property:bE}=Laya,yo=class extends Il{constructor(){super()}onEnable(){console.log("IndexRT onEnable"),this.uiBtn.on(Laya.Event.CLICK,this,()=>{console.log("uiBtn"),Laya.Scene.open("scenes/UiMain.ls")}),this.phyBtn.on(Laya.Event.CLICK,this,()=>{console.log("phyBtn"),Laya.Scene.open("scenes/PhysicsGameMain.ls")}),this.d3Btn.on(Laya.Event.CLICK,this,()=>{console.log("d3Btn"),Laya.Scene.open("scenes/D3Main.ls")})}onDestroy(){}};yo=m([m0("wtSVevJMRPCBIPp2HPhqpw")],yo);var El=class extends Laya.Scene{};var{regClass:d0,property:h0}=Laya,go=class extends El{constructor(){super();this.text=""}get dataSource(){return super.dataSource}set dataSource(e){if(super.dataSource=e,!!e){if(e.avatar){let i=this.getChildByName("avatar").getChildByName("redHot");i.visible=e.avatar.redHot.visible}if(e.flag){let i=this.getChildByName("flag").getChildByName("flagText");i.text=e.flag.flagText.text}}}};m([h0({type:"string"})],go.prototype,"text",2),go=m([d0("c-3Sonu7RWOm5ETy2TrBcg")],go);var Sl=class extends Laya.Scene{};var Me=class{constructor(){this._keys=[];this.THIS_ID="id"}init(t){for(let e in t){this._keys.push(e);let i=t[e];t[e]instanceof String&&String(t[e]).indexOf("[[")>=0&&(i=JSON.parse(t[e])),this[e]=i}}checkItems(){}};var vo=class extends Me{};var le=class{constructor(){this._values=[];this._keys=[];this.SERIALIZATION_NUM=new Date().getTime()}get values(){return this._values}get keys(){return this._keys}set(t,e){let i=this.indexOf(t);if(i>=0){this._values[i]=e;return}this._keys.push(t),this._values.push(e)}unshift(t,e){let i=this.indexOf(t);if(i>=0){this._values[i]=e;return}this._keys.unshift(t),this._values.unshift(e)}indexOf(t){let e=this._keys.indexOf(t);return e>=0?e:(t=t instanceof String?Number(t):t instanceof Number?t.toString():t,this._keys.indexOf(t))}get(t){let e=this.indexOf(t);return e<0?null:this._values[e]}remove(t){let e=this.indexOf(t);return e>=0?(this._keys.splice(e,1),this._values.splice(e,1),!0):!1}clear(){this._values.length=0,this._keys.length=0}};var de=class de{constructor(){}static get LoginType(){return de._LoginType}static set LoginType(t){de._LoginType=t,de._LoginType&&de._LoginType!=""&&Laya.LocalStorage.setItem(de.COOKIE_CF_LoginType,de._LoginType)}static get isWhiteList(){return!0}static get intance(){return de._instance||(de._instance=new de),de._instance}init(){}static get server(){return getServer()}static get vType(){return getVType()}static get requestTime(){return 0}static get loginTime(){return 0}static set m_iTimeFrame(t){if(t>1500){let e=function(){de._m_iTimeFrame=0};de._m_iTimeFrame=t,Laya.timer.clear(Laya.timer,e),Laya.timer.once(500,Laya.timer,e)}}static get m_iTimeFrame(){return de._m_iTimeFrame}};de.IsRelease=!1,de.m_bInstantGame=!1,de.useWebVersion=!1,de.m_strVersionEX="V003",de.m_bIsMobWeb=!1,de.m_strWebTag="",de.Js_Version="1",de.Game_Version="20231227_01",de.App_Version="1.0.0",de.SDK_Version="1.0.0",de.M_strCountry="1",de.M_bAppData=!1,de.M_strTarget="",de.UseGuide=!1,de.m_mobileSameWb=!1,de.ignoreLang=!1,de.ignoreSheetNo=!1,de.m_bIsIphoneX=!1,de.Debug=0,de.Res=0,de.isTest=!0,de.Server_URL="",de.IP_User="",de.Plantform_APPID="17",de.ServerId=22310001,de.Login_UID="-1",de._LoginType="gamecenter",de.isInto=!1,de.isFull=!1,de.justFull=!1,de.Login_UDID="81BC19A8-B49B-47CC-BEFE-193E723B521A",de.Device_Info="",de.FCM_Token="",de.APP_IsRelease=!0,de.User_Lan="en",de.UserAgent="",de.Login_UserName="",de.isWhite=!1,de.APP_RES="",de.COOKIE_CF_LAN="COOKIE_GG_LAN",de.COOKIE_CF_LoginType="COOKIE_CF_LoginType",de.IPHONEX_SCARE=1.22,de.IPHONEX_TOP=44,de.IPHONEX_BUTTOM=34,de.DESIGN_WIDTH=1334,de.DESIGN_HEIGHT=750,de._m_iTimeFrame=0,de.isStopPhysics=!1,de.isDown=!1;var X=de;var f=class a{constructor(){this._lanTypesById=new le,this._lanTypesByType=new le,this._configData=new le}static get instance(){return a._instance||(a._instance=new a),a._instance}initLanTypes(t){this._lanTypesById=new le,this._lanTypesByType=new le;for(let e in t){let i=new vo;if(i.init(t[e]),parseInt(i.if_open)!=1)continue;let r=i.ID,n=i.type;this._lanTypesById.set(r,i),n&&n!=""&&this._lanTypesByType.set(n,i)}}getLanTypes(){return this._lanTypesById}getLanIdByType(t){if(this._lanTypesByType){let e=this._lanTypesByType.get(t);if(e)return parseInt(e.ID.toString())}return 1}getLanTypeById(t){if(this._lanTypesById){let e=this._lanTypesById.get(t);if(e)return e.type}return"en"}initConfigLan(t){this._configData=t}initUILan(t){Laya.Text.langPacks={};let e;for(e in t){let i=t[e].value;Laya.Text.langPacks[e]=i}}changeBrToN(t){let e=/<br>/g;for(;t.indexOf("<br>")!=-1;)t=t.replace(e,`
`);return t}replacePlaceholder(t,e){if(t=="")return"";let i=/{(\d+)}/g;return e.length>0&&(t=t.replace(i,function(){return e[arguments[1]]})),this.replaceLanByBR(t)}replaceLanByBR(t){return t+""}getLanguage(t,...e){return this.getLanguage2(t,e)}getLanguage2(t,e){if(this._configData&&this._configData[t]){let i=this._configData[t].value;if(i&&i!="")return this.replacePlaceholder(i,e)}return this.replacePlaceholder(t+"",e)}getUILang(t,e=null,i=null,r=null,n=null){if(t=Laya.Text.langPacks&&Laya.Text.langPacks[t]?Laya.Text.langPacks[t]:t,arguments.length>1)for(let o=0,s=arguments.length;o<s;o++)t=t.replace("{"+o+"}",arguments[o+1]);return t}FGM_GetLanguage(){let t=function(i){console.log("initGame->-----------------------------FGM_GetLanguage:=="+i),i&&(i=i.substring(0,2),X.User_Lan=i)},e=Laya.LocalStorage.getItem(X.COOKIE_CF_LAN);!e||e==""?t(this.language):t(e)}get language(){return"en"}FGM_SetLanguage(t){t&&t!=""&&Laya.LocalStorage.setItem(X.COOKIE_CF_LAN,t)}dispose(){}};var ea=class extends Me{constructor(){super()}};var Yr=class{constructor(t,e){this._valuesObject={};this.sheetObject=t,this.BaseItemClass=e}get keys(){if(this._keys)return this._keys;this._keys=[];let t;for(let e in this.sheetObject)!e||e==""||this._keys.push(e);return this._keys}get values(){if(this._values)return this._values;this._values=[];let t;for(let e in this.sheetObject)this._valuesObject[e]?t=this._valuesObject[e]:(t=new this.BaseItemClass,t.init(this.sheetObject[e]),this._valuesObject[e]=t),this._values.push(t);return this._values}get(t){if(this._valuesObject[t])return this._valuesObject[t];let e=this.sheetObject[t];if(e)return e;let i;this.BaseItemClass&&(i=new this.BaseItemClass,i.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig()  class : "+this.BaseItemClass),i.init(e)),this._valuesObject;let r=i||e;return this._valuesObject[t]=r,r}indexOf(t){let e=this._keys.indexOf(t);return e>=0?e:(t=t instanceof String?Number(t):t instanceof Number?t.toString():t,this._keys.indexOf(t))}clear(){this.sheetObject=null}};var $r=class a{constructor(){}static get instance(){return a._instance||(a._instance=new a),a._instance}initSpotCfgData(){if(this.spotDic==null){let t=M.instance.getResByURL("config/spot.json");this.spotDic=new Yr(t.data,ea)}}getSpotById(t){return this.initSpotCfgData(),this.spotDic.get(t)}get getSpotDic(){return this.initSpotCfgData(),this.spotDic}};var we=class a{constructor(){}registerCommCallBack(t=null){Laya.LayaEnv.isConch}static get instance(){return a._instance||(a._instance=new a),a._instance}sendCustumEvent(t,e=null,i=null){let r;if(i?r=i:r=$r.instance.getSpotById(t),!r||!r.Event)return;let n,o=new Object;o.id=r.ID,o.eventKey=r.Event,o.type=r.type,this.sendWebEvent(o)}sendWebEvent(t){}dispose(){}reload(){Laya.Browser.window.location.reload()}testEvnt(){}};var K=class a{constructor(){this._isLoading=!1}static get instance(){return a._instance||(a._instance=new a),a._instance}get isLoading(){return this._isLoading}init(){if(!this.txtLoadingView){var t=Laya.loader.getRes("scenes/notice/TxtLoadingView.lh");this.txtLoadingView=t.create()}}showLoading(t=!1){if(console.log("showLoading..."+t),this.txtLoadingView)t?(this._isLoading=!0,this.showMaskLoading(),this.showLazyLoading(),this._isLoading=!1):(this._isLoading=!0,this.showMaskLoading(),Laya.timer.once(3e3,this,this.showLazyLoading)),this.txtLoadingView.m_txtLabel&&(this.txtLoadingView.m_txtLabel.visible=!1);else return}showLoadingByInfo(t=""){console.log("showLoadingByInfo..."+t),this._isLoading=!0,this.showMaskLoading(),this.showLazyLoading(),this.txtLoadingView.m_txtLabel.text=t,this.txtLoadingView.m_txtLabel.visible=!0}showMaskLoading(){this._isLoading&&(this.txtLoadingView.backLayer.name="backLayer",this.txtLoadingView.backLayer.mouseEnabled=!0,this.txtLoadingView.backLayer.mouseThrough=!1,this.txtLoadingView.backLayer.visible=!0)}showLazyLoading(){this._isLoading&&(console.log("showLazyLoading..."),this.txtLoadingView.visible=!0,Laya.stage.addChild(this.txtLoadingView),this.txtLoadingView.x=(Laya.stage.width-this.txtLoadingView.width)/2,this.txtLoadingView.y=(Laya.stage.height-this.txtLoadingView.height)/2),Laya.timer.clear(this,this.showLazyLoading)}hideLoading(){if(console.log("hideLoading..."),this._isLoading=!1,this.txtLoadingView)this.txtLoadingView.removeSelf();else return}dispose(){this.txtLoadingView&&(this.txtLoadingView.destroy(),this.txtLoadingView.removeSelf(),this.txtLoadingView=null),this.txtLoadingView.backLayer&&(this.txtLoadingView.backLayer.destroy(),this.txtLoadingView.backLayer.removeSelf(),this.txtLoadingView.backLayer=null)}};var ee=class ee{constructor(){this._touchEnabled=!0;if(ee._instance)throw new Error("LayerManager是单例,不可new.");ee._instance=this}get m_sprPanelLayer(){return this._m_sprPanelLayer}set m_sprPanelLayer(t){this._m_sprPanelLayer=t}get m_sprMainUILayer(){return this._m_sprMainUILayer}set m_sprMainUILayer(t){this._m_sprMainUILayer=t}get m_sprTipLayer(){return this._m_sprTipLayer}set m_sprTipLayer(t){this._m_sprTipLayer=t}static get instence(){return ee._instance||(ee._instance=new ee),ee._instance}init(){this.m_sprSceneLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprSceneLayer),this.m_sprMainUILayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprMainUILayer),this.m_sprPanelLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprPanelLayer),this.m_sprPopLayer=new Laya.Sprite,this.m_sprPopLayer.mouseThrough=!0,Laya.stage.addChild(this.m_sprPopLayer),this.m_sprTipLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTipLayer),this.m_sprGuideLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprGuideLayer),this.m_sprTopLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTopLayer)}get touchEnabled(){return this._touchEnabled}set touchEnabled(t){this._touchEnabled!=t&&(this._touchEnabled=t,this.m_sprSceneLayer.mouseEnabled=this._touchEnabled,this.m_sprMainUILayer.mouseEnabled=this._touchEnabled,this.m_sprPanelLayer.mouseEnabled=this._touchEnabled,this.m_sprPopLayer.mouseEnabled=this._touchEnabled,this.m_sprTipLayer.mouseEnabled=this._touchEnabled,this.m_sprGuideLayer.mouseEnabled=this._touchEnabled,this.m_sprTopLayer.mouseEnabled=this._touchEnabled)}addToLayerAndSet(t,e=ee.M_PANEL,i=ee.CENTER){this.addToLayer(t,e),this.setPosition(t,i)}getLayerIndex(t,e=ee.M_PANEL){let i;switch(e){case ee.M_SCENE:i=this.m_sprSceneLayer.getChildIndex(t);break;case ee.M_MAINUI:i=this.m_sprMainUILayer.getChildIndex(t);break;case ee.M_PANEL:i=this.m_sprPanelLayer.getChildIndex(t);break;case ee.M_POP:i=this.m_sprPopLayer.getChildIndex(t);break;case ee.M_TIP:i=this.m_sprTipLayer.getChildIndex(t);break;case ee.M_GUIDE:i=this.m_sprGuideLayer.getChildIndex(t);break;case ee.M_TOP:i=this.m_sprTopLayer.getChildIndex(t);break}return i}addToLayerAt(t,e=ee.M_PANEL,i=0){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.addChildAt(t,i);break;case ee.M_MAINUI:this.m_sprMainUILayer.addChildAt(t,i);break;case ee.M_PANEL:this.m_sprPanelLayer.addChildAt(t,i);break;case ee.M_POP:this.m_sprPopLayer.addChildAt(t,i);break;case ee.M_TIP:this.m_sprTipLayer.addChildAt(t,i);break;case ee.M_GUIDE:this.m_sprGuideLayer.addChildAt(t,i);break;case ee.M_TOP:this.m_sprTopLayer.addChildAt(t,i);break}}addToLayer(t,e=ee.M_PANEL){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.addChild(t);break;case ee.M_MAINUI:this.m_sprMainUILayer.addChild(t);break;case ee.M_PANEL:this.m_sprPanelLayer.addChild(t);break;case ee.M_POP:this.m_sprPopLayer.addChild(t);break;case ee.M_TIP:this.m_sprTipLayer.addChild(t);break;case ee.M_GUIDE:this.m_sprGuideLayer.addChild(t);break;case ee.M_TOP:this.m_sprTopLayer.addChild(t);break}}removeFromLayer(t,e){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.removeChild(t);break;case ee.M_MAINUI:this.m_sprMainUILayer.removeChild(t);break;case ee.M_PANEL:this.m_sprPanelLayer.removeChild(t);break;case ee.M_POP:this.m_sprPopLayer.removeChild(t);break;case ee.M_GUIDE:this.m_sprGuideLayer.removeChild(t);break;case ee.M_TOP:this.m_sprTopLayer.removeChild(t);break}}clearLayer(t){switch(t){case ee.M_SCENE:this.m_sprSceneLayer.removeChildren();break;case ee.M_MAINUI:this.m_sprSceneLayer.removeChildren();break;case ee.M_PANEL:this.m_sprSceneLayer.removeChildren();break;case ee.M_POP:this.m_sprSceneLayer.removeChildren();break;case ee.M_TOP:this.m_sprSceneLayer.removeChildren();break}}get stageWidth(){let t;return t=Laya.stage.width,t}get stageHeight(){let t;return t=Laya.stage.height,t}setPosition(t,e,i=0,r=0,n=!1,o=!1){let s=Laya.stage.width,l=Laya.stage.height;switch(this.m_iStageWidth=s,this.m_iStageHeight=l,e){case ee.UP:t.x=n?s/2:(s-t.width*t.scaleX)/2,t.y=0;break;case ee.DOWN:t.x=n?s/2:(s-t.width*t.scaleX)/2,t.y=l-t.height*t.scaleY;break;case ee.LEFT:t.x=0,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.RIGHT:t.x=s-t.width*t.scaleX,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.LEFTUP:t.x=0,t.y=0;break;case ee.RIGHTUP:t.x=s-t.width*t.scaleX,t.y=0;break;case ee.LEFTDOWN:t.x=0,t.y=l-t.height*t.scaleY;break;case ee.RIGHTDOWN:t.x=s-t.width*t.scaleX,t.y=l-t.height*t.scaleY;break;case ee.CENTERLEFT:t.x=s/2-t.width*t.scaleX,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.CENTERRIGHT:t.x=s/2,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.CENTER:t.x=n?s/2:(s-t.width*t.scaleX)/2,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;default:break}t.x+=i,t.y+=r}setLayer(t,e,i){if(!t||!e||t.parent!=e.parent)return;let r=t.parent.getChildIndex(t),n=e.parent.getChildIndex(e);i?r>n&&(t.parent.setChildIndex(t,n),t.parent.setChildIndex(e,r)):r<n&&(t.parent.setChildIndex(t,n),t.parent.setChildIndex(e,r))}};ee.M_SCENE=1,ee.M_MAINUI=2,ee.M_PANEL=3,ee.M_POP=4,ee.M_TIP=5,ee.M_GUIDE=7,ee.M_TOP=6,ee.UP=1,ee.DOWN=16,ee.LEFT=256,ee.RIGHT=4096,ee.CENTER=65536,ee.LEFTUP=ee.LEFT|ee.UP,ee.RIGHTUP=ee.RIGHT|ee.UP,ee.LEFTDOWN=ee.LEFT|ee.DOWN,ee.RIGHTDOWN=ee.RIGHT|ee.DOWN,ee.CENTERLEFT=ee.CENTER|ee.LEFT,ee.CENTERRIGHT=ee.CENTER|ee.RIGHT,ee.MOVE=-1;var R=ee;var xe=class xe{constructor(){this._m_bPlayMusic=!0;this._m_bPlayeSound=!0}static get instance(){return xe._instance||(xe._instance=new xe),xe._instance}get m_bPlayMusic(){return this._m_bPlayMusic}set m_bPlayMusic(t){this._m_bPlayMusic=t,t?this.m_strMusicURL!=null&&this.playMusicByURL(this.m_strMusicURL):this.musicChannel&&this.musicChannel.stop()}init(){Laya.SoundManager.autoStopMusic=!1;let t=Laya.LocalStorage.getItem(xe.COOKIE_CF_MUSIC);t!=null&&t!=""&&(xe.instance.m_bPlayMusic=parseInt(t)==1);let e=Laya.LocalStorage.getItem(xe.COOKIE_CF_SOUND);e!=null&&e!=""&&(xe.instance.m_bPlayeSound=parseInt(e)==1)}get m_bPlayeSound(){return this._m_bPlayeSound}set m_bPlayeSound(t){this._m_bPlayeSound=t}playMusicByURL(t){this.m_bPlayMusic&&(this.m_strMusicURL,this.m_strMusicURL==t&&this.musicChannel,this.m_strMusicURL=t,Laya.SoundManager.stopMusic(),this.musicChannel=Laya.SoundManager.playMusic(t,0,new Laya.Handler(this,this.onComplete)))}playMusicByName(t,e=".ogg"){let i=M.instance.getSoundURL(t,e);this.playMusicByURL(i)}playSound(t,e=1){this.m_bPlayeSound&&Laya.SoundManager.playSound(t,e,new Laya.Handler(this,this.onComplete))}playSoundByName(t,e=1){let i=M.instance.getSoundURLogg(t);this.playSound(i,e)}stopSoundByName(t){let e=M.instance.getSoundURLogg(t);Laya.SoundManager.stopSound(e)}switchMusic(t){let e=t?1:0;xe.instance.m_bPlayMusic=t,Laya.LocalStorage.setItem(xe.COOKIE_CF_MUSIC,e.toString())}switchSound(t){let e=t?1:0;xe.instance.m_bPlayeSound=t,Laya.LocalStorage.setItem(xe.COOKIE_CF_SOUND,e.toString())}onComplete(){}};xe.COOKIE_CF_MUSIC="COOKIE_CF_MUSIC",xe.COOKIE_CF_SOUND="COOKIE_CF_SOUND",xe.soundName_bg="bgm",xe.soundName1="ui01.ogg",xe.soundName2="ui02.ogg",xe.soundName3="ui03.ogg",xe.soundName4="hit.wav",xe.soundName30_1="ui30_1.ogg",xe.soundName28_1_star="ui28_1_star.ogg",xe.soundName28_2_star="ui28_2_stars.ogg",xe.soundName28_3_star="ui28_3_stars.ogg",xe.soundName28_bar="ui28_bar_rise.ogg",xe.soundName32="ui32.ogg",xe.soundName33="ui33.ogg",xe.soundName34="ui34.ogg",xe.soundName35="ui35.ogg",xe.soundName36="ui36.ogg",xe.soundName37="ui37.ogg",xe.soundName38="ui38.ogg",xe.soundName39="ui39.ogg",xe.soundName41="ui41.ogg",xe.soundName42="ui42.ogg",xe.soundName43="ui43.ogg",xe.soundName44="ui44.ogg",xe.soundName45="ui45.ogg",xe.soundNameUi40_1="ui40_1.ogg",xe.soundNameUi40_2="ui40_2.ogg",xe.soundNameUi40_3="ui40_3.ogg",xe.soundNameDressing="dressing_score_sfx.ogg",xe.soundNameAnswer="answer_bonus_points.ogg";var De=xe;var h=class{};h.FindView="FindView",h.FindEndView="FindEndView",h.FindAskDialog="FindAskDialog",h.FindRankUpDialog="FindRankUpDialog",h.QuickTipDialog="QuickTipDialog",h.QuickEndView="QuickEndView",h.QuickShareView="QuickShareView",h.QuickOperatorDialog="QuickOperatorDialog",h.MainView="MainView",h.RoleDialog="RoleDialog",h.RemGetDialog="RemGetDialog",h.QuickRechargeDialog="QuickRechargeDialog",h.CreateNameDialog="CreateNameDialog",h.DailyTaskDialog="DailyTaskDialog",h.ActivityTaskDialog="ActivityTaskDialog",h.ShareDialog="ShareDialog",h.InvitationCenterDialog="InvitationCenterDialog",h.DailyTaskDrawDialog="DailyTaskDrawDialog",h.GuideView="GuideView",h.GuideDialogView="GuideDialogView",h.ShareView="ShareView",h.MainTopView="MainTopView",h.GetMoreDialog="GetMoreDialog",h.ShopView="ShopView",h.ItemGetDialog="ItemGetDialog",h.RewardGetDialog="RewardGetDialog",h.GetTitleDialog="GetTitleDialog",h.NewFunUnLockDialog="NewFunUnLockDialog",h.DialogView="DialogView",h.MallView="MallView",h.MallCardView="MallCardView",h.MallBuyDialog="MallBuyDialog",h.FittingUiView="FittingUiView",h.TaskDialog="TaskDialog",h.CommentDialog="CommentDialog",h.PotraitChangDialog="PotraitChangDialog",h.ClothespressView="ClothespressView",h.ItemSellDialog="ItemSellDialog",h.ItemInfoDialog="ItemInfoDialog",h.OnlineAward="OnlineAward",h.MaillView="MailView",h.MailSendView="MailSendView",h.GameSettingDialog="GameSettingDialog",h.GamesettingSoundView="GamesettingSoundView",h.GameSettingLanguageDialog="GameSettingLanguageDialog",h.GameSettingVersionDialog="GameSettingVersionDialog",h.FriendMainView="FriendMainView",h.FriendSearchView="FriendSearchView",h.FriendGetRewardDialog="FriendGetRewardDialog",h.FriendRewardDialog="FriendRewardDialog",h.PreLoadingView="PreLoadingView",h.HelpDialog="HelpDialog",h.RechargeDialog="RechargeDialog",h.WalletChooseHeroDialog="WalletChooseHeroDialog",h.EmployInfoDialog="EmployInfoDialog",h.WalletChoosePropsDialog="WalletChoosePropsDialog",h.FirstRechargeDialog="FirstRechargeDialog",h.FirstWeekRechargeView="FirstWeekRechargeView",h.ClientErrView="ClientErrView",h.RoleUpgradeView="RoleUpgradeView",h.ActiveRechargeView="ActiveRechargeView",h.SmallSaleView="SmallSaleView",h.RechargeSelectDialog="RechargeSelectDialog",h.FBLikeView="FBLikeView",h.TurnSuitPreView="TurnSuitPreView",h.SlotMachineView="SlotMachineView",h.SlotMachineRewardPreDialog="SlotMachineRewardPreDialog",h.SlotMachineResultDialog="SlotMachineResultDialog",h.GashaponView="GashaponView",h.GashaponRewardView="GashaponRewardView",h.ActivityRankRewardView="ActivityRankRewardView",h.AddRechargeView="AddRechargeView",h.CupMatchStartDialog="CupMatchStartDialog",h.CupMatchEndDialog="CupMatchEndDialog",h.CreateLoginView="CreateLoginView",h.SelectHeadDialog="SelectHeadDialog",h.RoleInfoDialog="RoleInfoDialog",h.SelectHeroDialog="SelectHeroDialog",h.CreateSubWalletDialog="CreateSubWalletDialog",h.FriendMemberDialog="FriendMemberDialog",h.FriendMemberMoreDialog="FriendMemberMoreDialog",h.FriendAddDialog="FriendAddDialog",h.FriendApplyBackDialog="FriendApplyBackDialog",h.FriendApplyDialog="FriendApplyDialog",h.WalletDialog="WalletDialog",h.WalletTransferDialog="WalletTransferDialog",h.UnionApplyDialog="UnionApplyDialog",h.GuildEntranceView="GuildEntranceView",h.UnionApplyDialogView="UnionApplyDialogView",h.UnionApplyMemberDialog="UnionApplyMemberDialog",h.CreateNoticeDialog="CreateNoticeDialog",h.UnionNoticeView="UnionNoticeView",h.GuildInfoDialog="GuildInfoDialog",h.CreateUnionDialog="CreateUnionDialog",h.UnionInfoView="UnionInfoView",h.UnionEarningView="UnionEarningView",h.UnionRevenueDetailDialog="UnionRevenueDetailDialog",h.UnionSetRevenueDialog="UnionSetRevenueDialog",h.UnionBattleRecordDialog="UnionBattleRecordDialog",h.UnionRevenueRecordDialog="UnionRevenueRecordDialog",h.RankUnionView="RankUnionView",h.UnionWarView="UnionWarView",h.UnionWarTipDialog="UnionWarTipDialog",h.UnionWarSuccessDialog="UnionWarSuccessDialog",h.UnionWarFailDialog="UnionWarFailDialog",h.GamesettingView="GamesettingView",h.GameSettingGameAccountView="GameSettingGameAccountView",h.GuildMessageView="GuildMessageView",h.GuildMessageEditorView="GuildMessageEditorView",h.UnionMemberView="UnionMemberView",h.SelectUnionHeadDialog="SelectUnionHeadDialog",h.GuildBuildInfoView="GuildBuildInfoView",h.GuildChiefPrivilegeView="GuildChiefPrivilegeView",h.GuildDonationView="GuildDonationView",h.NoticeDialog="NoticeDialog",h.ChampDetailDialog="ChampDetailDialog",h.ChampRecordDialog="ChampRecordDialog",h.LoadDialog="LoadDialog",h.ChangeHeadDialog="ChangeHeadDialog",h.CreateRoomDialog="CreateRoomDialog",h.EnterRoomView="EnterRoomView",h.MatchEndRankView="MatchEndRankView",h.MatchReadyView="MatchReadyView",h.MatchEndView="MatchEndView",h.HeroGetDialog="HeroGetDialog",h.InputPwdDialog="InputPwdDialog",h.MailDialog="MailDialog",h.UnionAttrView="UnionAttrView",h.UnionAttrLvUpDialog="UnionAttrLvUpDialog",h.UnionAttributeDetailsDialog="UnionAttributeDetailsDialog",h.NoServerView="NoServerView",h.UnionMemberMoreDialog="UnionMemberMoreDialog",h.HeroUpgradeDialog="HeroUpgradeDialog",h.HeroDetailDialog="HeroDetailDialog",h.SkillTipDialog="SkillTipDialog",h.AFKView="AFKView",h.AFKBagDialog="AFKBagDialog",h.AFKDropDetailDialog="AFKDropDetailDialog",h.AFKMapView="AFKMapView",h.AFKSelectLevelDialog="AFKSelectLevelDialog",h.Knapsack="Knapsack",h.KnapsackTipDialog="KnapsackTipDialog",h.HeroFormationDialog="HeroFormationDialog",h.SignInDialog="SignInDialog",h.InviteRewardDialog="InviteRewardDialog",h.ChallengLoseDialog="ChallengLoseDialog",h.ChallengWinDialog="ChallengWinDialog",h.ChallengBossDialog="ChallengBossDialog",h.ThirbleDropDialog="ThirbleDropDialog",h.LevelDropDialog="LevelDropDialog",h.UseCardDialog="UseCardDialog",h.ArenaView="ArenaView",h.ArenaLoseDialog="ArenaLoseDialog",h.ArenaBattleDialog="ArenaBattleDialog",h.ArenaWinDialog="ArenaWinDialog",h.ArenaWarNotesView="ArenaWarNotesView",h.ArenaRuleDialog="ArenaRuleDialog",h.EquipSelectDialog="EquipSelectDialog",h.EquipDetailDialog="EquipDetailDialog",h.HireDetailDialog="HireDetailDialog",h.ProxyDetailDialog="ProxyDetailDialog";var _=class{};_.MOUSE_HOLDON="MOUSE_HOLDON",_.EVENT_OPEN_MODULE="EVENT_OPEN_MODULE",_.EVENT_MODULE_ADDED="EVENT_MODULE_ADDED",_.EVENT_CLOSE_MODULE="EVENT_CLOSE_MODULE",_.EVENT_CHECK_REMAIN="EVENT_CHECK_REMAIN",_.EVENT_LOADED_COMPLETE="EVENT_LOAD_COMPLETE",_.EVENT_LOADED_SCENE_BG_COM="EVENT_LOADED_SCENE_BG_COM",_.EVENT_LOAD_SKIN_COMPLETE="EVENT_LOAD_SKIN_COMPLETE",_.EVENT_LOAD_HEAD_SKIN_COMPLETE="EVENT_LOAD_HEAD_SKIN_COMPLETE",_.EVENT_LOADING_SUC="EVENT_LOADING_SUC",_.EVENT_BACK_TO_LOGIN="EVENT_BACK_TO_LOGIN",_.EVENT_LOGIN_GAME_END="EVENT_LOGIN_GAME_END",_.EVENT_ENTER_MAIN="EVENT_ENTER_MAIN",_.EVENT_CHANGE_HEAD="EVENT_CHANGE_HEAD",_.EVENT_MODIFY_HEAD="EVENT_MODIFY_HEAD",_.EVENT_ITEM_UPDATE="EVENT_ITEM_UPDATE",_.EVENT_ROLE_UPDATE="EVENT_ROLE_UPDATE",_.STAGE_ON_BLUR="STAGE_ON_BLUR",_.STAGE_ON_FOCUS="STAGE_ON_FOCUS",_.ACCOUNTVO_UPDATE="ACCOUNTVO_UPDATE",_.EVENT_WAIT_PLAYERINFO="EVENT_WAIT_PLAYERINFO",_.EVENT_END_HEROBUY="EVENT_END_HEROBUY",_.EVENT_CHECK_ICON_SELECT="EVENT_CHECK_ICON_SELECT",_.PACKAGE_UPDATE_ITEM="PACKAGE_UPDATE_ITEM",_.IMPROVE_SUCESS_EVENT="IMPROVE_SUCESS_EVENT",_.CHANG_POTRAIT="CHANG_POTRAIT",_.ROLE_INFO_CHANGE="ROLE_INFO_CHANGE",_.UPDATE_ASSETS="UPDATE_ASSETS",_.REFRESH_MAIN_TASK="REFRESH_MAIN_TASK",_.RECIVE_SUCESS_SERVICE="RECIVE_SUCESS_SERVICE",_.SCENE_ROLE_COMPELTE="SCENE_ROLE_COMPELTE",_.FITTING_CLOTH_BTN="FITTING_CLOTH_BTN",_.STORE_CLICKBG_EVENT="STORE_CLICKBG_EVENT",_.CLOSE_BG_VIEW="CLOSE_BG_VIEW",_.EVENT_UPDATE_ONLINE="EVENT_UPDATE_ONLINE",_.VIP_INFO_CHANGE="VIP_INFO_CHANGE",_.EVENT_FUNCTION_OPEN_UPDATE="EVENT_FUNCTION_OPEN_UPDATE",_.EVENT_ADD_ACTIVITY="EVENT_ADD_ACTIVITY",_.EVENT_REMOVE_ACTIVITY="EVENT_REMOVE_ACTIVITY",_.UPDATE_CHAO_PIAO="UPDATE_CHAO_PIAO",_.UPDATE_EXCHANGE_INFO="UPDATE_EXCHANGE_INFO",_.UPDATE_RED_STATE_EVENT="UPDATE_RED_STATE_EVENT",_.SYSTEM_OPEN_TIME_INITED="SYSTEM_OPEN_TIME_INITED",_.EVENT_OPEN_SHARE="EVENT_OPEN_SHARE",_.CHANGE_SCENE_BASE_ROLE_LAYER="CHANGE_SCENE_BASE_ROLE_LAYER",_.EVENT_CLICK_NUM="EVENT_CLICK_NUM",_.EVENT_HERO_DRAW_BACK="EVENT_HERO_DRAW_BACK",_.EVENT_ENTER_MATCH_ROOM="EVENT_ENTER_MATCH_ROOM",_.UPDATE_KILL_NUM="UPDATE_KILL_NUM",_.EVENT_RESTORE_DATA="EVENT_RESTORE_DATA",_.EVENT_FirstBlood="EVENT_FirstBlood",_.EVENT_MutiKill="EVENT_MutiKill",_.EVENT_GameScene_Gray="EVENT_GameScene_Gray",_.EVENT_Game_Delay="EVENT_Game_Delay",_.EVENT_UPDATE_GLOBAL_COOL="EVENT_UPDATE_GLOBAL_COOL",_.EVENT_WELFARE_CLAIM="EVENT_WELFARE_CLAIM",_.EVENT_RECHARGE_GET="EVENT_RECHARGE_GET",_.CHANGE_WALLET_HERO="CHANGE_WALLET_HERO",_.CHANGE_ASSET_CHAIN="CHANGE_ASSET_CHAIN",_.CHANGE_WALLET_PROP="CHANGE_WALLET_PROP",_.CREATE_SUB_WALLET_SUCCESS="CREATE_SUB_WALLET_SUCCESS";var L=class a extends Laya.EventDispatcher{static get intance(){return a._instance||(a._instance=new a),a._instance}};var qt=class extends Laya.Script{constructor(){super();this.m_ioffsetX=0;this.m_ioffsetY=0}onAdded(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.CENTER,this.m_canTouch_all=!1,this.selfMaskAlpha=.8,this.m_arrMapEvent=[],this.canClickMask=!0,this.maskLayer=new Laya.Sprite,this.useShowAnimation=!0,this.useHideAnimation=!0,this.isAutoRealseRes=!0,this.m_strSound=De.soundName3}onClickMask(e){this.canClickMask&&this.maskClose()}maskClose(){this.close()}onStageResize(){}onEnable(){this._view=this.owner,this._view.addChild(this.maskLayer),this.createUI(),this.createUIEnd(),this.initializeLater()}createUI(){}createUIEnd(){}initializeLater(){this._addEvent(),this.initData(),this.useShowAnimation?(this._view.visible=!1,this.showAnimationEnd=!1,Laya.timer.frameOnce(5,this,this.popTimeOut,[this._view])):this.showAnimationEnd=!0}popTimeOut(e){Laya.timer.clear(this,this.popTimeOut),e.scale(.5,.5),e.visible=!0,Laya.Tween.to(e,{scaleX:1,scaleY:1,ease:Laya.Ease.backOut},300,null,Laya.Handler.create(this,this.onShowAnimationEnd),2),De.instance.playSoundByName(this.m_strSound),this._view.event(Laya.Event.OPEN)}onShowAnimationEnd(){this.showAnimationEnd=!0}_addEvent(){this.maskLayer.on(Laya.Event.CLICK,this,this.onClickMask),Laya.stage.on(Laya.Event.RESIZE,this,this.onStageResize),this.btn_com_back&&this.btn_com_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_com_help&&this.btn_com_help.on(Laya.Event.CLICK,this,this.onHelp),this.addEvent()}addEvent(){}initData(){}_removeEvent(){this.maskLayer.offAll(),Laya.stage.off(Laya.Event.RESIZE,this,this.onStageResize),this.removeEvent()}removeEvent(){}addMapEvent(e,i,r,n,o=null){e.on(i,r,n,o),this.m_arrMapEvent.push(e)}removeAllMapEvent(){if(this.m_arrMapEvent){for(let e=0;e<this.m_arrMapEvent.length;e++)this.m_arrMapEvent[e].offAll();this.m_arrMapEvent.splice(0,this.m_arrMapEvent.length)}}dispose(){if(this.newRoleSpr){for(;this.newRoleSpr.numChildren>0;)this.newRoleSpr.removeChildAt(0);this.newRoleSpr=null}this.isDispose=!0,V.intance.removeViewFromModuleManger(this),this.m_strName=null,this.m_strSound=null,this._removeEvent(),this.removeAllMapEvent(),Laya.Tween.clearAll(this._view),this.m_arrMapEvent=null,this.btn_com_back&&this.btn_com_back.offAll(),this.btn_com_help&&this.btn_com_help.offAll(),this.maskLayer&&(Laya.timer.clearAll(this.maskLayer),Laya.Tween.clearAll(this.maskLayer),this.maskLayer.offAll(),this.maskLayer.graphics.destroy(),this.maskLayer.removeSelf(),this.maskLayer.destroy(!0)),this.isAutoRealseRes&&M.instance.clearModuleUrl(this.m_strName),this._view&&(Laya.timer.clearAll(this._view),Laya.Tween.clearAll(this._view),this._view.offAll(),this._view.graphics.destroy(),this._view.removeSelf(),this._view.destroy(!0),this._view=null),Laya.timer.clearAll(this),Laya.Tween.clearAll(this),L.intance.event(_.EVENT_CLOSE_MODULE)}sendData(e,i=null){i==null&&(i=[])}close(e=null){this.useHideAnimation&&this._view?Laya.Tween.to(this._view,{scaleX:.5,scaleY:.5,ease:Laya.Ease.backIn},200,null,Laya.Handler.create(this,this.dispose,null),2):this.dispose()}static closeAll(){V.intance.closeAll()}backToPreScene(){let e=be.intance.getPreSceneData();be.intance.setCurrentScene(e[0],e[1],e[2],e[3],!1)}get btn_com_back(){return this._view?this._view.getChildByName("btn_com_back"):null}get btn_com_help(){return this._view?this._view.getChildByName("btn_com_help"):null}onHelp(){this.m_helpId&&V.intance.openModule(h.HelpDialog,this.m_helpId)}onBack(){this.close()}};var V=class a extends Laya.DialogManager{constructor(){super();this.views=new le;this.m_arrLoadingArr=[];if(a._instance)throw new Error("LayerManager是单例,不可new.");a._instance=this,Laya.Dialog.manager=this}static get intance(){return a._instance||(a._instance=new a),a._instance}openModule(e,i=null){L.intance.event(_.EVENT_OPEN_MODULE,[e,i])}hasOpenView(e){return this.views.get(e)!=null}getOpenView(e){return this.views.get(e)}disposeView(e){if(this.getOpenView(e)){let i=this.getOpenView(e);if(i instanceof Array)for(let r=0;r<i.length;r++)i[r].close();else i.close()}}init(){L.intance.on(_.EVENT_OPEN_MODULE,this,this.onModulePanel),L.intance.on(_.EVENT_CLOSE_MODULE,this,this.disposeView)}initMainView(){}onModulePanel(e,i=null){console.log("ModuleManager.onModulePanel moudleName:"+e),this.m_arrLoadingArr.indexOf(e)==-1&&(this.getOpenView(e)||(K.instance.showLoading(!1),this.m_arrLoadingArr.push(e),M.instance.loadModuleUrl(e,Laya.Handler.create(this,this.onLoaded,[e,i]))))}onLoaded(e,i=null){let r=this.m_arrLoadingArr.indexOf(e);r!=-1&&this.m_arrLoadingArr.splice(r,1);let n;var o=M.instance.m_objModuleViews[e];Laya.loader.load(o).then(s=>{if(n=s.create(),i&&n.setOpenData(i),n.m_strName=e,n instanceof Laya.Box)R.instence.addToLayer(n,n.m_iLayerType),R.instence.setPosition(n,n.m_iPositionType,n.m_ioffsetX,n.m_ioffsetY),this.addViewToModuleManger(n);else if(n instanceof Laya.Dialog){let l=n;l.m_iLayerType==R.M_POP?(l.isModal=!0,l.isShowEffect=!0,this.open(l,!1,!0)):(l.isShowEffect=!1,this.open(l)),this.addViewToModuleManger(l)}n&&L.intance.event(_.EVENT_MODULE_ADDED,n),n.hideLoadingBySelf||K.instance.hideLoading()})}addViewToModuleManger(e){let i=e.m_strName;this.views.get(i)?this.views.get(i)instanceof Array?this.views.get(i).push(e):this.views.set(i,[this.views.get(i),e]):this.views.set(i,e),this.on(Laya.Event.CLOSE,this,this.removeViewFromModuleManger)}removeViewFromModuleManger(e){if(!e||!this.views)return;let i=e.m_strName;console.log("removeViewFromModuleManger viewName: "+i),e.off(Laya.Event.CLOSE,this,this.removeViewFromModuleManger);let r=this.views.get(i);if(r instanceof Array){let n=r.indexOf(e);n!=-1&&(r.splice(n,1),r.length==0&&this.views.remove(i))}else this.views.remove(i)}closeAll(){let e=[];for(let i of this.views.values)if(i instanceof Array)for(let r=0;r<i.length;r++){let n=i[r];n instanceof qt&&e.push(n)}else i instanceof qt&&e.push(i);for(let i=0;i<e.length;i++)e[i].dispose();e=[],super.closeAll()}doClose(e){super.doClose(e),this.event(Laya.Event.CLOSE,e)}};var Lo=class a{constructor(){this._mapUrl="";this._mapWidth=0;this._mapHeight=0;this._gridWidth=0;this._gridHeight=0;this._xPics=0;this._yPics=0;this._fuzzyName=""}static get instance(){return a._instance||(a._instance=new a),a._instance}loadScene(t,e,i,r,n,o,s){this._fuzzyName!=""&&this._fuzzyName!=o&&this.dispose(),this._mapWidth=t,this._mapHeight=e,this._gridWidth=i,this._gridHeight=r,this._fuzzySprite=n,this._xPics=Math.floor(this._mapWidth/i),this._yPics=Math.floor(this._mapHeight/r),this._fuzzyName=o,this._fuzzyCallBack=s;let l=M.instance.setResURL("scene/subScene/test1/"+o+".json");Laya.loader.load([{url:l,type:Laya.Loader.ATLAS}],Laya.Handler.create(this,this.loadSceneComplete),Laya.Handler.create(this,this.loadProcess,null,!1),null,0,!0,null,!0)}loadProcess(){}loadSceneComplete(){let t=Laya.Loader.getAtlas(M.instance.setResURL("scene/subScene/test1/"+this._fuzzyName+".json"));if(this._fuzzySprite){this._fuzzySprite.graphics.clear();let e=0,i=new Laya.Sprite;i.name="mapSprite",this._fuzzySprite.addChildAt(i,0);for(let r=0;r<this._yPics;r++)for(let n=0;n<this._xPics;n++){let o=Laya.loader.getRes(t[e]),s=new Laya.Image;i.addChild(s),s.texture=o,s.size(o.width,o.height),s.pos(n*this._gridWidth,r*this._gridHeight),e++}}this._fuzzyCallBack!=null&&this._fuzzyCallBack.run()}dispose(){this._fuzzyCallBack=null,this._fuzzyName&&this._fuzzyName!=""&&Laya.loader.clearRes(M.instance.setResURL("atlas/"+this._fuzzyName+".json"))}};var re=class{};re.M_SCENE_MAIN="M_SCENE_MAIN",re.M_SCENE_SHOP="M_SCENE_SHOP",re.M_SCENE_HERO="M_SCENE_HERO",re.M_SCENE_PRE_LOAD="M_SCENE_PRE_LOAD",re.M_SCENE_MATCH_READY="M_SCENE_MATCH_READY",re.M_SCENE_MATCH="M_SCENE_MATCH",re.M_SCENE_AFKBATTLE="M_SCENE_AFKBATTLE",re.M_SCENE_GUILD="M_SCENE_GUILD",re.M_SCENE_RANK="M_SCENE_RANK",re.M_SCENE_SHOLARSHIP="M_SCENE_SHOLARSHIP",re.M_SCENE_ASSET="M_SCENE_ASSET",re.M_SCENE_DIG="M_SCENE_DIG",re.M_SCENE_MAIL="M_SCENE_MAIL",re.M_SCENE_KNAPSACK="M_SCENE_KNAPSACK",re.M_SCENE_UNION="M_SCENE_UNION",re.M_SCENE_MYUNION="M_SCENE_MYUNION",re.M_SCENE_ARENA="M_SCENE_ARENA";var Aa=class Aa{constructor(){this._list=[];this._isNoticing=!1;this._isListener=!1}static get instance(){return Aa._instance||(Aa._instance=new Aa),Aa._instance}notice(t){this._isNoticing?this._isListener||(this._isListener=!0,this._list.push(t),Laya.timer.loop(Aa.Tip_Interval,this,this.onInterVal)):(this._list.push(t),this.noticeOne())}noticeOne(){var t=M.instance.m_objModuleViews.TxtNoticeView;let e;Laya.loader.load(t).then(i=>{if(!i){console.log("noticeOne : "+t+"  res is null");return}e=Laya.Pool.getItemByCreateFun("txtNotice",i.create,i);let r=this._list.shift();e.notice(r),Laya.stage.addChild(e),e.x=R.instence.stageWidth*.5-e.width*.5,e.y=R.instence.stageHeight*.5-e.height*.5,Laya.Tween.to(e,{y:e.y-250,alpha:.5},1e3,null,Laya.Handler.create(this,this.onFinish,[e]),1e3)})}onFinish(t){t&&(t.visible=!1,t.removeSelf())}onInterVal(){this._list.length>=1?this.noticeOne():(this._isNoticing=!1,this._isListener=!1,Laya.timer.clear(this,this.onInterVal))}};Aa.Tip_Interval=1e3;var ie=Aa;var Ce=class a{constructor(){this._curErrTxt=""}static get instance(){return a._instance||(a._instance=new a),a._instance}initErrData(t){this.errData=t}get(t){return this.errData[t]?this.errData[t].words:(console.warn("服务端错误码语言包未配表 错误码："+t),t)}showErrorWord(t,e=999999){this.errData[t]&&this.errData[t].hasOwnProperty("words")?(this._curErrTxt=this.errData[t].words,e!=999999&&(this._curErrTxt=f.instance.replacePlaceholder(this._curErrTxt,[e]))):this._curErrTxt=""+t,ie.instance.notice(this._curErrTxt)}showErrByString(t,e="#ff0000"){this._curErrTxt=t;let i=new Laya.Label(this._curErrTxt);i.width=500,i.align="center",i.height=40,i.fontSize=26,i.color=e,i.mouseEnabled=!1,i.strokeColor="#000000",i.stroke=.5,Laya.stage.addChild(i),i.x=(Laya.stage.width-i.width)/2,i.y=(Laya.stage.height-i.height)/2,Laya.Tween.to(i,{y:i.y-100,alpha:0},500,null,Laya.Handler.create(this,this.completeHandler,[i]),1e3)}completeHandler(t){t&&t.parent&&t.parent.removeChild(t)}dispose(){this.errData=null}};var ze=class{};ze.FUNID_MALL="1004",ze.FUN_ID_TAGGARDEN="2005",ze.FunID_WORK="1006",ze.FUN_ID_BARGAIN_SHOP="1007",ze.TRAVEL_HARD="1012",ze.TRAVEL_REWARD="3006",ze.FUNID_TUJIAN="2105",ze.FUN_ID_PARTY="7003",ze.FUN_ID_FB="9010",ze.FUN_ID_PET="9004",ze.FUN_ID_TURNTABLE="9001",ze.FUN_ID_GASHPOEN="9012",ze.FUN_ID_SHOPEXCHANGE="2104",ze.FUN_ID_TIME_STAGE="9014",ze.FUN_ID_DRAWCARD_PVP="1008613",ze.FUN_ID_PHONE="2004",ze.FUN_ID_DS="9017",ze.FUN_ID_BUY_PS="9030",ze.FUN_ID_DESTINY="3020",ze.FUN_ID_ACTIVITY_SHOP="9026",ze.FUN_ID_WORKSHOP_RECYCLE="3002",ze.FUN_ID_WORKSHOP_COLOR="3004",ze.FUN_ID_WORKSHOP_UPGRADE="3003",ze.FUN_ID_GUILD="1010",ze.FUN_ID_VIP="9022",ze.FUN_ID_MONTHCARD="9100";var Tl=class{constructor(){this.bafflesInfo=[[330,740,9],[294,113.95,1],[712.95-80,343.45,3],[1251.35,125.95,7]];this.redHotStateMap=new le;this.openSystem=new le;this.m_dicSystemInfoCfg=new le,this._openTypeList=new le,this.parseJson()}hasRedState(t){let e=this.redHotStateMap.get(t+"");return e&&e.redState>0?e.redState:0}initSystemOpen(t){this.openSystem=new le;for(let e=0;e<t.length;e++)this.openSystem.set(t[e],!0),t[e]+""==ze.FUN_ID_PHONE.toString()}parseJson(){let t=M.instance.getResByURL("config/system_open.json"),e;for(let i in t)if(e=t[i],e){this.m_dicSystemInfoCfg.set(e.functionID,e);let r=this._openTypeList.get(e.open_type);r||(r=[],this._openTypeList.set(e.open_type,r)),r.push(e)}}getSystemsByType(t){let e=[];for(let i=0;i<this.m_dicSystemInfoCfg.values.length;i++){let r=this.m_dicSystemInfoCfg.values[i];r.positionID==t&&e.push(r)}return e}getLockFun(t,e){let i=this._openTypeList.get(t);for(let r of i)if(r.parameter1+""==e+"")return r;return null}getBuildSystem(){}isOpen(t){return X.buildClickState?!0:(t instanceof String&&(t=parseInt(t+"")),this.openSystem.get(t)!=null)}};var Cl=class{constructor(){this._vipLv=0}isReceive(t){for(let e of this.isRewards)if(e+""==t.toString())return!0;return!1}addIsReceive(t){this.isReceive(t)||this.isRewards.push(t)}get vipLv(){return this._vipLv}set vipLv(t){this._vipLv!=t&&(this._vipLv=t)}};var Wt=class{constructor(){this._color=1;this.isLvUp=!1;this.newAddCnt=0}get simgurl(){return M.instance.getHeroHeadRes(this.heroItem.serialId,this.color)}get sk(){return M.instance.getHeroSkRes(this.heroItem.serialId,this.color)}get id(){return this._id}set id(t){this._id=t,this.heroItem=F.intance.m_dicHeros.get(t+"")}get name(){return f.instance.getLanguage(this.heroItem.name)}set name(t){this._name=t}get color(){return this._color}set color(t){t&&(this._color=t)}get m_iNum(){return this._m_iNum}set m_iNum(t){this._m_iNum=t}};var Xe=class a{constructor(t=0){this._m_iLevel=0;this._m_arrDisc=[];this.newAddCnt=0;this.isLvUp=!1;this.needTip=!0;this.m_bSalon=!1;this.m_bIsSetId=!1;t!=0&&(this.m_iId=t)}get m_sIcon(){return this._m_sIcon}set m_sIcon(t){this._m_sIcon=t}get m_iLevel(){return this._m_iLevel>0?this._m_iLevel:1}set m_iLevel(t){this._m_iLevel=t||0}get m_iNum(){return this._m_iNum}set m_iNum(t){this._m_iNum=t}copyItem(){let t=new a;return t.m_iId=this.m_iId,t.m_iOriginalId=this.m_iOriginalId,t}get m_bTry(){return this.m_iId==this.m_iOriginalId?this._m_bSet=!1:this._m_bSet=!0,this._m_bSet}get m_strName(){return f.instance.getLanguage(this.itemItem.name)}set m_bTry(t){this._m_bSet=t}get m_iId(){return this._m_iId}set m_iId(t){this._m_iId=t,this.m_bIsSetId||(this.m_bIsSetId=!0,this.m_iOriginalId=t),this.setConfigData()}initDataByArr(t){this.m_iId=t.id,this.m_iNum=t.count}setConfigData(){if(this.m_iId!=0){if(this.itemItem=F.intance.m_dicItems.get(this.m_iId.toString()),!this.itemItem){console.log("[          <items> find out id:"+this.m_iId+"             ]");return}if(this.subType=parseInt(this.itemItem.subType+""),this.backType=parseInt(this.itemItem.backPack+""),this.type=parseInt(this.itemItem.type+""),this.m_sIcon=this.itemItem.icon,this.itemItem.buy_price){this.m_iPrice=this.itemItem.buy_price[0][1];let t=this.itemItem.buy_price[0][0],e=F.intance.m_dicItems.get(t);e&&(this.m_strBuyIcon=M.instance.getItemIcon(e.icon))}this.itemItem.sell_price&&(this.m_iSellPrice=parseFloat(this.itemItem.sell_price[0][1])),this.m_iQuality=this.itemItem.quality,this.setQualityData()}}setQualityData(){this.m_arrQualityData=this.itemItem.starArr}get getIconURL(){return M.instance.getItemIcon(this.itemItem.icon)}copy(){let t=new a(this.m_iId);return t.m_iLevel=this.m_iLevel,t}compareName(){return f.instance.getLanguage(this.itemItem.name)}compareQuality(){return parseFloat(this.m_iQuality+"")}compareSellPrice(){return parseFloat(this.itemItem.sell_price[1]+"")}compareNum(){return parseFloat(this.m_iNum+"")}compareLevel(){return parseFloat(this.m_iLevel+"")}compareFragment(){let t=this.itemItem.id;return 0}compareTypeId(){return parseInt(this.m_iId+"")}};var Kt=class a{constructor(){this._isPop=!1;L.intance.on(_.EVENT_CHECK_REMAIN,this,this.onCheckRemain)}static get instance(){return a._instance||(a._instance=new a),a._instance}get model(){return Ue.instance}get isPop(){return this._isPop}startShow(){console.log("startShow");var t=this.model.hasRemain();!this._isPop&&t&&(this._isPop=!0,t instanceof Wt?L.intance.event(_.EVENT_OPEN_MODULE,h.HeroGetDialog):L.intance.event(_.EVENT_OPEN_MODULE,h.ItemGetDialog))}onCheckRemain(t){if(t==h.ItemGetDialog||t==h.HeroGetDialog){var e=this.model.hasRemain();e?e instanceof Wt?L.intance.event(_.EVENT_OPEN_MODULE,h.HeroGetDialog):L.intance.event(_.EVENT_OPEN_MODULE,h.ItemGetDialog):this._isPop=!1}}};var Ue=class a{constructor(t){this._list=[];this.needPop=!0;this.autoPop=!0}static get instance(){return a._instance||(a._instance=new a(new nf)),a._instance}get service(){return Kt.instance}addItem(t,e=!1){let i=new Xe;i.m_iId=t.m_iId,i.newAddCnt=t.newAddCnt,i.m_iLevel=t.m_iLevel,i.isLvUp=t.isLvUp,i.m_bNew=t.m_bNew,this._list.push(i),e&&this.service.startShow()}addHeroItem(t,e=!1){let i=new Wt;i.id=t.id,i.newAddCnt=t.newAddCnt,i.lv=t.lv,i.isLvUp=t.isLvUp,i.m_bNew=t.m_bNew,this._list.push(i),e&&this.service.startShow()}addItems(t,e=!1){this._list=this._list.concat(t),e&&this.service.startShow()}hasRemain(){return this._list.length>0?this._list[0]:null}get needListener(){return this._list.length>=2}addConsumeByServer(t){this._list.push(t)}addConsume(t,e){this._list.push([t,e])}getNextItem(){return this._list.length>0?this._list[0]:null}getOneItem(){return this._list.length>0?this._list.shift():null}},nf=class{};var Ni=class{};var kl=class{constructor(){this.m_dicItemList=new le,this.m_dicTypeList=new le,this.m_dicSubTypeList=new le,this.m_dicBackList=new le}initData(t){this.m_dicItemList=new le,this.m_dicTypeList=new le,this.m_dicSubTypeList=new le,this.m_dicBackList=new le;let e;for(let i=0;i<t.length;i++)e=new Xe,e.initDataByArr(t[i]),e.m_iNum>0&&this.pushItem(e);console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}getCountById(t,e=!0){return F.intance.m_dicItems.get(t)==null?0:this.getItemCountById(t,e)}pushItem(t){this.m_dicItemList.set(t.m_iId,t),this.m_dicTypeList.get(t.type)==null&&this.m_dicTypeList.set(t.type,new le),this.m_dicSubTypeList.get(t.subType)==null&&this.m_dicSubTypeList.set(t.subType,new le),this.m_dicBackList.get(t.backType)==null&&this.m_dicBackList.set(t.backType,new le),this.m_dicTypeList.get(t.type).set(t.m_iId,t),this.m_dicSubTypeList.get(t.subType).set(t.m_iId,t),this.m_dicBackList.get(t.backType).set(t.m_iId,t)}removeItem(t){this.m_dicItemList.remove(t.m_iId),this.m_dicTypeList.get(t.type).remove(t.m_iId),this.m_dicSubTypeList.get(t.subType).remove(t.m_iId),this.m_dicBackList.get(t.backType).remove(t.m_iId)}updateData(t,e=!1,i=!0){let r=[],n=!1,o;for(let s=0;s<t.length;s++){t[s]instanceof Array?(o=new Ni,o.id=t[s][0],o.count=t[s][1]):o=t[s];let l=this.m_dicItemList.get(o.id);l==null&&(l=new Xe(o.id),this.pushItem(l),l.m_bNew=!0),e?(l.newAddCnt=o.count-l.m_iNum,l.m_iNum=o.count):(l.newAddCnt=o.count,l.m_iNum=o.count+o.count),l.initDataByArr(o),r.push(l.m_iId),l.m_iNum<=0&&this.removeItem(l),l.newAddCnt>0&&Ue.instance.needPop&&i&&(Ue.instance.addItem(l),n=!0)}n&&Ue.instance.needPop&&Ue.instance.autoPop&&Kt.instance.startShow(),r.length>0&&L.intance.event(_.PACKAGE_UPDATE_ITEM,[r])}getItemById(t){return this.m_dicItemList.get(t)}getItemsBySubType(t){let e=this.m_dicSubTypeList.get(t);return e==null&&(e=[]),e}getListByType(t){let e=[];return this.m_dicTypeList.get(t)&&(e=this.m_dicTypeList.get(t).values.slice()),e.sort(this.sortOnQa),e}getBackByType(t){let e=[];return this.m_dicBackList.get(t)&&(e=this.m_dicBackList.get(t).values.slice()),e.sort(this.sortOnQa),e}getListBySubType(t){let e=[];return this.m_dicSubTypeList.get(t)&&(e=this.m_dicSubTypeList.get(t).values.slice()),e.sort(this.sortOnQa),e}sortOnQa(t,e){let i=t.itemItem.quality,r=e.itemItem.quality;return i<r?1:i>r?-1:0}getItemCountById(t,e=!0){let i=this.getItemById(t);return i?i.m_iNum:0}};var Al=class a{constructor(t){this._addNewFList=[];this.delayShowNewFun=!1}static get instance(){return a._instace==null&&(a._instace=new a(new of)),a._instace}addNewOpenFun(t){this._addNewFList=this._addNewFList.concat(t),this.delayShowNewFun||this.showNewFun()}setDelayShowFun(t){this.delayShowNewFun!=t&&(this.delayShowNewFun=t,t||this.showNewFun())}showNewFun(){if(this._addNewFList.length>0){let t=this._addNewFList.pop(),e=S.instance.systemOpenModel.m_dicSystemInfoCfg.get(t.toString());e?e.if_open.toString()=="1"||e.if_pop.toString()!="1"?this.showNewFun():this.swithToNewFun(t):this.showNewFun()}}swithToNewFun(t,e=!1){let i=S.instance.systemOpenModel.m_dicSystemInfoCfg.get(t);if(i){if(i.if_open.toString()=="1"){ie.instance.notice("system_open.json-->funId:"+i.functionID+"is close");return}(i.if_pop.toString()=="1"||e)&&L.intance.event(_.EVENT_OPEN_MODULE,[h.NewFunUnLockDialog,t])}}hasUnlockFunction(t,e=!0){let i=S.instance.systemOpenModel.m_dicSystemInfoCfg.get(t+""),r=S.instance.systemOpenModel.isOpen(parseInt(t));return!r&&e&&ie.instance.notice(f.instance.getLanguage(i.lock_word)),r}},of=class{};var Fe=class{};Fe.TYPE_EXP=3003,Fe.TYPE_GOLD=3005,Fe.TYPE_TOX=3001,Fe.TYPE_USDT=3004,Fe.TYPE_BTC=3006,Fe.TYPE_ETH=3007;var N=class{constructor(){}};N.NO_ALL=-1,N.YES=1,N.NO=2,N.SURE=4,N.CANCEL=8,N.CLOSE=16,N.RETURN_YES=1,N.RETURN_NO=2,N.RETURN_NONE=3,N.BASEALERTVIEW="BaseAlertDialog",N.BUYCONFIRMVIEW="BuyConfirmView",N.EnduranceOutTipView="EnduranceOutTipView",N.GUILDQUITVIEW="GuildQuitView",N.BuyItemConfirmView="BuyItemConfirmView",N.DOWNLOADALERT="DownLoadAlert";var _e=class a{constructor(){}static instance(){return a._instance||(a._instance=new a),a._instance}AlertByType(t,e=null,i=0,r=null,n=null,o=!1,s=null){i==0&&(i=N.YES|N.NO),this.onLoaded(i,t,e,r,n,o,s)}onLoaded(t,e,i,r=null,n=null,o=!1,s=null){V.intance.openModule(e,{flag:t,okHandler:r,cancelHandler:n,data:i,destroyDoCancel:o,initHandler:s})}};var ve=class ve{static getColorText(t,e="#FFFF00"){return'<font color="'+e+'">'+t+"</font>"}static getChildByName(t,e,i="name"){if(t&&t.hasOwnProperty(i)&&t[i]==e)return t;let r=t;if(r){let n=r.numChildren,o;for(let s=0;s<n;++s)if(o=r.getChildAt(s),o instanceof Laya.Sprite&&(o=ve.getChildByName(o,e,i)),o&&o.hasOwnProperty(i)&&o[i]==e)return o}return null}static getChildByAttri(t,e){if(t&&t.hasOwnProperty(e)&&t[e])return t[e];let i=t;if(i){let r=i.numChildren,n;for(let o=0;o<r;++o)if(n=i.getChildAt(o),n instanceof Laya.Sprite){if(n=ve.getChildByAttri(n,e),n)return n}else if(n&&n.hasOwnProperty(e)&&n[e])return n[e]}return null}static logs(t,e=0,i=!0,r=16777215){if(t=ve.GetLogTime+" "+t,i)switch(e){case 0:r=16777215;break;case 1:r=16777215;break;case 2:r=16711680;break;case 3:r=16777215;break;case 4:r=13434777;break;case 5:r=16742399;break}}static get GetLogTime(){let t=new Date;return t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+":"+t.getMilliseconds()}static get GRAY(){return ve._GRAY||(ve._GRAY=new Laya.ColorFilter([.3,.59,.11,0,0,.3,.59,.11,0,0,.3,.59,.11,0,0,0,0,0,1,0])),ve._GRAY}static get GRAY1(){if(!ve._GRAY1){let t=[.3086,.16094,.082,0,0,.2086,.26094,.082,0,0,.1086,.36094,.082,0,0,0,0,0,1,0];ve._GRAY1=new Laya.ColorFilter(t)}return ve._GRAY1}static get GLOW(){return ve._GLOW||(ve._GLOW=new Laya.GlowFilter("#ffffff",12,0,0)),ve._GLOW}static get BLUR(){if(!ve._BLUR){let t=new Laya.BlurFilter;t.strength=5,ve._BLUR=[t]}return ve._BLUR}static share(t=1001,e=2,i=null,r=null,n=0,o=0,s=null){}static get isParseWWhiteUser(){return ve._isParseWWhiteUser}static get isWhiteName(){return X.isWhiteList}static itemListHandler(t,e){let i=t.dataSource,r=i[0],n=i[1],o=2,s=t.skin;s&&(s.indexOf("xinSmall")!=-1?o=1:s.indexOf("xinBig")!=-1&&(o=3));let l;o==1?l="common/common_clip/clip_xinSmall"+n+".png":o==3?l="common/common_clip/clip_xinBig"+n+".png":l="common/common_clip/clip_xinMiddle"+n+".png",t.skin=l,t.dataSource=r}static setStarList(t,e){t.renderHandler=new Laya.Handler(ve,ve.itemListHandler),t.dataSource=e}static get BLACK(){return ve._BLACK||(ve._BLACK=new Laya.ColorFilter,ve._BLACK.setColor("#000000")),ve._BLACK}static get YELLOW(){return ve._YELLOW||(ve._YELLOW=new Laya.ColorFilter,ve._YELLOW.setColor("#ffe64b")),ve._YELLOW}static get YELLOW1(){return ve._YELLOW1||(ve._YELLOW1=new Laya.ColorFilter,ve._YELLOW1.setColor("#fee14e")),ve._YELLOW1}static get RED1(){return ve._RED1||(ve._RED1=new Laya.ColorFilter,ve._RED1.setColor("#ff4537")),ve._RED1}static get BLUE(){return ve._BLUE||(ve._BLUE=new Laya.ColorFilter,ve._BLUE.setColor("#2f72a7")),ve._BLUE}static setColor(t="#13e2cf"){let e=new Laya.ColorFilter;return e.setColor(t),e}static heroNotEnought(){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1059),N.CANCEL,Laya.Handler.create(this,this.onGetHero))}static onGetHero(t=-1){be.intance.setCurrentScene(re.M_SCENE_SHOP,[1,t])}static titickNotEnought(t=-1){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1060),N.CANCEL,Laya.Handler.create(this,this.onGetTitck,[t]))}static RemError(){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1124),N.YES,null)}static NoHeroError(t){_e.instance().AlertByType(N.BASEALERTVIEW,t,N.YES,null)}static alertNoAll(t){_e.instance().AlertByType(N.BASEALERTVIEW,t,N.NO_ALL)}static onGetTitck(t=-1){be.intance.setCurrentScene(re.M_SCENE_SHOP,[2,t])}static moneyNotEnought(t=Fe.TYPE_TOX){var e=F.intance.m_dicItems.get(t),i=f.instance.getLanguage(e.name);ie.instance.notice(f.instance.getLanguage(1170,i))}static onGetMoney(t){be.intance.setCurrentScene(re.M_SCENE_ASSET,[1,t])}static openSquidGame(){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(6056),N.CANCEL,Laya.Handler.create(this,this.onOpenSquidGame))}static onOpenSquidGame(){window.location.href="https://squidgamefi.io/?invitationCode=2oi"}static otherLogin(){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(6054),N.YES,Laya.Handler.create(this,we.instance.reload))}static commTipWithYes(t){_e.instance().AlertByType(N.BASEALERTVIEW,t,N.YES)}static shakeSprs(t,e=2,i=4,r=32){if(ve.isShake)return;ve.isShake=!0;let n=t.length,o=[];for(let u=0;u<n;u++){let p=t[u];o.push([p.x,p.y])}let s=[0,0],l=0,c=function(){s[l%2]=l++%4<2?0:i,l>e*4+1&&(Laya.timer.clear(Laya.stage,c),l=0,ve.isShake=!1);for(let u=0;u<n;u++){let p=t[u];p.x=s[0]+o[u][0],p.y=s[1]+o[u][1]}};Laya.timer.loop(r,Laya.stage,c)}static shake(t,e=2,i=4,r=32){if(ve.isShake)return;ve.isShake=!0;let n=new Laya.Point(t.x,t.y),o=[0,0],s=0,l=function(){o[s%2]=s++%4<2?0:i,s>e*4+1&&(Laya.timer.clear(Laya.stage,l),s=0,ve.isShake=!1),t.x=o[0]+n.x,t.y=o[1]+n.y};Laya.timer.loop(r,Laya.stage,l)}static checkIsFull(){}static fullScreen(t){var e,i=Laya.Browser.window.location.href;t?(i+="&isFull=1",e={type:"openChildPage",data:{url:i,fullScreen:"1",close:"0"}}):e={type:"closePage",data:""};var r=JSON.stringify(e);Laya.Browser.onIOS?(console.log("onIOS"),typeof webkit<"u"&&(console.log("onIOS1"),webkit.messageHandlers._tw_.postMessage(r),console.log("onIOS2"))):Laya.Browser.onAndroid&&(console.log("onAndriod0"),window&&typeof window._tw_<"u"&&(console.log("onAndriod1 str: "+r),window._tw_.callInto(r),console.log("onAndriod2")))}};ve._isParseWWhiteUser=!1,ve.isWWhiteUser=!1,ve.isShake=!1,ve.isFullScreen=!1;var Le=ve;var Da=class{constructor(){}ReadShort(t){let e=new Uint8Array(t.buffer),i=e[t.pos]<<8,r=e[t.pos+1],n=i|r;return t.pos+=2,n}ReadInt(t){let e=new Uint8Array(t.buffer),i=e[t.pos]<<24|e[t.pos+1]<<16|e[t.pos+2]<<8|e[t.pos+3];return t.pos+=4,i}ReadByte(t){return t.getByte()}ReadString(t){let e=this.ReadShort(t);return e==0?"":t.getUTFBytes(e)}ReadBytes(t,e){let i=t.buffer.slice(t.pos,e);return new Laya.Byte(i)}dispose(){}};var Dl=class{constructor(){this.writeByt=new Laya.Byte}writeByte(){}writeShort(t){this.writeByt.writeByte(t>>8),this.writeByt.writeByte(t)}writeInt(t){this.writeByt.writeByte(t>>24),this.writeByt.writeByte(t>>16),this.writeByt.writeByte(t>>8),this.writeByt.writeByte(t)}writeString(t){if(t.length==0){this.writeShort(0);return}let i=new Laya.Byte;i.writeUTFBytes(t),this.writeShort(i.length),this.writeByt.writeUTFBytes(t)}dispose(){}};var Xr=class a{constructor(){this.cookie="####1.0.0#0#";this.encryptKey="FFIYD#^3LB954JB90fzj*(d)sO7";this._curSendIndex=-1}static get instance(){return a._instance||(a._instance=new a),a._instance}setLoginCookie(){this.cookie="####1.0.0#"+X.Login_UDID+"#"+X.UserAgent}parseCookie(t,e,i,r="1.0.0"){let n=this.encryptKey+e+t,o=f0(n);r=S.instance.M_S_VersionServer;let s=o+"#"+t+"#"+e+"#"+i+"#"+r+"#"+this._curSendIndex+"#1#"+X.Login_UDID+"#"+X.UserAgent;this.cookie=s}reflashCookie(){this.parseCookie(this.m_time,this.m_roleID,this.m_accout)}analyClient(t,e){let i=new Dl;i.writeString(this.cookie),i.writeShort(t);let r=this.analyData[t];return r&&r.length>0&&this.writeByt(r,e,i),i.writeByt}writeByt(t,e,i){for(let r in t){let n=e[r];if(t[r].indexOf("7/")!=-1){i.writeShort(n.length);let o=this.analyData[String(t[r]).split("7/")[1]];if(o)for(let s in n)this.writeByt(o,n[s],i)}else if(t[r]=="1")i.writeInt(n);else if(t[r]=="2")i.writeShort(n);else if(t[r]=="3")i.writeString(n);else if(t[r]=="4"||t[r]=="5"||t[r]=="6"){i.writeShort(n.length);for(let o in n)t[r]=="4"?i.writeInt(n[o]):t[r]=="5"?i.writeShort(n[o]):t[r]=="6"&&i.writeString(n[o])}}}analyServer(t){let e=new Da,i=e.ReadShort(t),r=[i],n=this.analyData[i];return n&&n.length>0&&(r=r.concat(this.readByt(n,t,e))),r}analyCookie(t=""){console.log("RECE_COOKIE: "+t,1);let e=t.split("#");this.m_time=e[0],this.m_roleID=e[1],this.m_accout=e[2];let i=e[3];this._curSendIndex=i,this._curSendIndex++,console.log("cookie:_time:"+this.m_time+"  _roleID："+this.m_roleID+"	  _accout："+this.m_accout),this.parseCookie(this.m_time,this.m_roleID,this.m_accout),S.instance.timeStamp=parseFloat(this.m_time)}readByt(t,e,i){let r=[];for(let n in t)if(t[n].indexOf("7/")!=-1){let o=i.ReadShort(e),s=this.analyData[String(t[n]).split("7/")[1]],l=[];if(s&&o>0)for(let c=0;c<o;c++)l.push(this.readByt(s,e,i));r.push(l)}else if(t[n]=="1")r.push(i.ReadInt(e));else if(t[n]=="2")r.push(i.ReadShort(e));else if(t[n]=="3")r.push(i.ReadString(e));else if(t[n]=="4"||t[n]=="5"||t[n]=="6"){let o=i.ReadShort(e),s=[];for(let l=0;l<o;l++)t[n]=="4"?s.push(i.ReadInt(e)):t[n]=="5"?s.push(i.ReadShort(e)):t[n]=="6"&&s.push(i.ReadString(e));r.push(s)}return r}dispose(){}};function f0(a){throw new Error("Function not implemented.")}var ft=class{constructor(){}};ft.TYPE_NORMAL=0,ft.TYPE_TRUST=1,ft.TYPE_WEB3=2,ft.type=0;async function b0({timeout:a}={timeout:3e3}){let t=Xb();return t||y0({timeout:a})}async function y0({timeout:a}={timeout:3e3}){return new Promise(t=>{let e=()=>{t(Xb())};window.addEventListener("trustwallet#initialized",e,{once:!0}),setTimeout(()=>{window.removeEventListener("trustwallet#initialized",e,{once:!0}),t(null)},a)})}function Xb(){let a=e=>!!e.isTrust;return typeof window<"u"&&typeof window.ethereum<"u"?a(window.ethereum)?window.ethereum:window.ethereum?.providers?window.ethereum.providers.find(a)??null:window.trustwallet??null:null}async function sf(){if(console.log("initWeb3 -0"),console.log("initWeb3 -1"),typeof window<"u"&&typeof window.ethereum<"u"&&!!window.ethereum.isTrust){let t=await b0();console.log("initWeb3 -2"+t),ft.trustProvider=t,ft.type=ft.TYPE_TRUST,console.log("initWeb3 -6")}else typeof web3<"u"&&(console.log("initWeb3 2"),web3=new Web3(web3.currentProvider),ft.web3Provider=web3,ft.type=ft.TYPE_WEB3,console.log("initWeb3 3"))}var xi=class a{constructor(){this.walletDic=new le}static get instance(){return a._instance||(a._instance=new a),a._instance}getEthValue(t){return a.instance.walletDic.get(t)?a.instance.walletDic.get(t).ethValue:0}getValue(t){return a.instance.walletDic.get(t)?a.instance.walletDic.get(t).value:0}};var Yt=class{};Yt.ASSETS_TOX=1e4,Yt.ASSETS_ARCANITE=10001,Yt.ASSETS_CRYSTAL=10002,Yt.ASSETS_MITHRIL=10003,Yt.ASSETS_REDSTONE=10004,Yt.ASSETS_TRUEIRON=10005;var oe=class{static initConfig(t){this.configDic=new le;for(let e of t){let i=e.sstringvalue;e.sadditional==="JSON"&&(i=JSON.parse(i)),this.configDic.set(e.skey2,i),this[e.skey2]=i}F.intance.resetTokenData()}};oe.ADDRESS0="0x0000000000000000000000000000000000000000",oe.TOKEN_ERC20ABI=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"miner",type:"address"}],name:"addMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_delMinter",type:"address"}],name:"delMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"idx",type:"uint256"}],name:"getMinter",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMinterLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.ACCOUNT_ADDRESS="0x5ff2123b0Aa4bD97eeF5F6388EFCB56cd29D6835",oe.ACCOUNT_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"nickName",type:"string"},{indexed:!1,internalType:"string",name:"avatar",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthHeight",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthPlace",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gender",type:"uint256"},{indexed:!1,internalType:"uint256",name:"influence",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_avatar",type:"string"}],name:"changeAvatar",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"}],name:"changeGender",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"changeInfluence",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"changeLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_nickname",type:"string"}],name:"changeNickName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_nickname",type:"string"},{internalType:"string",name:"_avatar",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_birthHeight",type:"uint256"},{internalType:"uint256",name:"_birthPlace",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"createAccount",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getAccountInfo",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"birthHeight",type:"uint256"},{internalType:"uint256",name:"birthPlace",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"uint256",name:"influence",type:"uint256"}],internalType:"struct AccountInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.CREATE_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"AccountToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"accounts",type:"address[]"}],name:"BurnAccount",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"string",name:"nickname",type:"string"},{indexed:!1,internalType:"uint256",name:"country",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gender",type:"uint256"},{indexed:!1,internalType:"string",name:"icon",type:"string"}],name:"RegisterAccount",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"}],name:"burnAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"currentId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"iAccount",outputs:[{internalType:"contract IAccount",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"isExists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"nickname",type:"string"},{internalType:"uint256",name:"country",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"string",name:"icon",type:"string"}],name:"register",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"registerId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],oe.BUY_HERO_ABI=[{inputs:[{internalType:"address",name:"_Phantom",type:"address"},{internalType:"address",name:"_TOX",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"Phantom",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOX",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOXPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNFTParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],internalType:"struct PhantomMall.Params[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNameIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"union",type:"address"}],name:"list",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSeriesCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"tos",type:"address[]"}],name:"mintByOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintByTOX",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"nameCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"random",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_toxPrice",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.EDIT_ACCOUNT_ADDRESS="0xaa1B8FA74Ed295123a6336C2D3a88cB973160dfa",oe.EDIT_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"_accountContract",type:"address"},{internalType:"string",name:"_website",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"rate",type:"uint256"}],internalType:"struct UpdateProfile.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWebsite",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_rate",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_website",type:"string"}],name:"setWebsite",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"}],name:"updateProfile",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.STAKING_POOL_ABI=[{inputs:[{internalType:"uint256",name:"_poolPlace",type:"uint256"},{internalType:"address",name:"_stakeToken",type:"address"},{internalType:"address",name:"_accountContract",type:"address"},{internalType:"address",name:"_rewardsContract",type:"address"},{internalType:"address",name:"_empowerContract",type:"address"},{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Withdrawn",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcPerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"capacityOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],name:"changeDailyRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimAllReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"claimReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"earned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"earnedAll",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"estimatePerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAccountContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokens",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getDailyRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getEmpowerContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastUpdateTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLimitTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPoolPlace",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsPerUnitStored",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getStakeTokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenIdleStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenMiningStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isAccountStakeToken",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_empowerContract",type:"address"}],name:"setEmpowerContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_limitTokensNumber",type:"uint256"}],name:"setLimitTokensNumber",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_idleStatus",type:"uint256"}],name:"setTokenIdleStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_miningStatus",type:"uint256"}],name:"setTokenMiningStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawAllAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"withdrawAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.STAKING_HERO_POWERCALC_ABI=[{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenLevel",type:"uint256"},{internalType:"bool",name:"isMatchProfession",type:"bool"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getFormulaParams",outputs:[{components:[{internalType:"uint256",name:"constantValue",type:"uint256"},{internalType:"uint256",name:"linearCoefficient",type:"uint256"},{internalType:"uint256",name:"quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"percentage",type:"uint256"}],internalType:"struct EmpowerCalcFormula.FormulaParams",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],name:"setFormulaParams",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.BLINDBOX_ADDRESS="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",oe.BLINDBOX_ABI=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.BLINDBOX_ADDRESS_V2="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",oe.BLINDBOX_ABI_V2=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.HERO_ADDRESS="0xCC0A4E3Bd1D49D7Ef9C431C0aD87D36B0B342018",oe.HERO_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"rarity",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"},{indexed:!1,internalType:"uint256",name:"race",type:"uint256"},{indexed:!1,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"level",type:"uint256"}],name:"UpdateLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"UpdateMineralLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"string",name:"name",type:"string"}],name:"UpdateName",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"race",type:"uint256"}],name:"UpdateRace",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"rarity",type:"uint256"}],name:"UpdateRatity",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"series",type:"uint256"}],name:"UpdateSeries",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"status",type:"uint256"}],name:"UpdateStatus",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getNFTParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"rarity",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"},{internalType:"uint256",name:"mineralLevel",type:"uint256"}],internalType:"struct Parmas",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_name",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"},{internalType:"uint256",name:"_race",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"updateLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"updateMineralLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_name",type:"string"}],name:"updateName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"}],name:"updateRace",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"}],name:"updateRatity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"}],name:"updateSeries",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"status",type:"uint256"}],name:"updateStatus",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.CREATE_UNION_ADDRESS="0xcd62E6a07072Bed38F4126ba5C9361901c71846e",oe.CREATE_UNION_ABI="",oe.UNION_NUMBER_SYS_ADDRESS="0x45F0de10fA3982c4d18AbaE89a5F0663123f955c",oe.UNION_NUMBER_SYS_ABI="",oe.UPGRADE_UNION_ADDRESS="0x18320fD38F3806C0A9fb2B41202Ed0bD3f826894",oe.UPGRADE_UNION_ABI="",oe.UNION_DISTRIBUTE_ADDRESS="0x0f6b4bBa8b01B6ee2CC3232ea963ac702CaDCe04",oe.UNION_WAR_ADDRESS="0xF8489Bb617F9DCaBF33bEaeBdA4CCD029E9E247E",oe.UNION_DISTRIBUTE_ABI="",oe.UNION_WAR_ABI="",oe.HERO_TO_TOKEN_POOL_ADDRESS="",oe.HERO_TO_TOKEN_POOL_ABI="",oe.WITHDRAW_AND_RECHARGE_ADDRESS="",oe.WITHDRAW_AND_RECHARGE_ABI="",oe.SERIESHEROMALL_ADDRESS="",oe.SERIESHEROMALL_ABI="",oe.HEROFORMATION_ADDRESS="",oe.HEROFORMATION_ABI="",oe.HERO_MINT_ADDRESS="",oe.HERO_MINT_ABI="",oe.RECHANGE_ADDRESS_TOX="0x32926612d9399C1088045AEB821CCB5Ba904D697",oe.RECHANGE_ADDRESS="0x4952981D44cb95c52F0a62D4Fe8702081338D824",oe.RECHANGE_ABI=[{inputs:[{internalType:"address",name:"_signer",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidShortString",type:"error"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"StringTooLong",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[],name:"EIP712DomainChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"deadline",type:"uint256"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"depositETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"eip712Domain",outputs:[{internalType:"bytes1",name:"fields",type:"bytes1"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"version",type:"string"},{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"address",name:"verifyingContract",type:"address"},{internalType:"bytes32",name:"salt",type:"bytes32"},{internalType:"uint256[]",name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"isSigner",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_signer",type:"address"}],name:"setSigner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"signer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}];function ue(a,t,e){return i=>a[t.name||e]?.(i)??t(a,i)}Lt();Ve();var Bl=class extends B{constructor(t){super(`Filter type "${t}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}};Ti();Ha();Ql();_r();pr();rn();var Fy="/docs/contract/encodeEventTopics";function Ai(a){let{abi:t,eventName:e,args:i}=a,r=t[0];if(e){let l=Oi({abi:t,name:e});if(!l)throw new Jr(e,{docsPath:Fy});r=l}if(r.type!=="event")throw new Jr(void 0,{docsPath:Fy});let n=Ht(r),o=tn(n),s=[];if(i&&"inputs"in r){let l=r.inputs?.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(i)?i:Object.values(i).length>0?l?.map(u=>i[u.name])??[]:[];c.length>0&&(s=l?.map((u,p)=>Array.isArray(c[p])?c[p].map((b,x)=>jy({param:u,value:c[p][x]})):c[p]?jy({param:u,value:c[p]}):null)??[])}return[o,...s]}function jy({param:a,value:t}){if(a.type==="string"||a.type==="bytes")return dt(ni(t));if(a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/))throw new Bl(a.type);return ki([a],[t])}Pe();function Ga(a,{method:t}){let e={};return a.transport.type==="fallback"&&a.transport.onResponse?.(({method:i,response:r,status:n,transport:o})=>{n==="success"&&t===i&&(e[r]=o.request)}),i=>e[i]||a.request}async function tc(a,t){let{address:e,abi:i,args:r,eventName:n,fromBlock:o,strict:s,toBlock:l}=t,c=Ga(a,{method:"eth_newFilter"}),u=n?Ai({abi:i,args:r,eventName:n}):void 0,p=await a.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?he(o):o,toBlock:typeof l=="bigint"?he(l):l,topics:u}]});return{abi:i,args:r,eventName:n,id:p,request:c(p),strict:!!s,type:"event"}}oi();na();Lt();Ve();za();Xo();var a_=3;function ca(a,{abi:t,address:e,args:i,docsPath:r,functionName:n,sender:o}){let{code:s,data:l,message:c,shortMessage:u}=a instanceof sa?a:a instanceof B?a.walk(b=>"data"in b)||a.walk():{},p=(()=>a instanceof Ei?new Yo({functionName:n}):[a_,la.code].includes(s)&&(l||c||u)?new Xt({abi:t,data:typeof l=="object"?l.data:l,functionName:n,message:u??c}):a)();return new Ko(p,{abi:t,args:i,contractAddress:e,docsPath:r,functionName:n,sender:o})}oi();Pe();Wo();sn();Ve();oa();var yc=class extends B{constructor(t,{account:e,docsPath:i,chain:r,data:n,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:p,value:b}){let x=xr({from:e?.address,to:p,value:typeof b<"u"&&`${Ui(b)} ${r?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:typeof s<"u"&&`${yt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${yt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${yt(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",x].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}};Bn();gc();function sg(a,{docsPath:t,...e}){let i=(()=>{let r=Rn(a,e);return r instanceof Gi?a:r})();return new yc(i,{docsPath:t,...e})}vc();Qo();On();oi();sn();Ve();var Lc=class extends B{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}},Ka=class extends B{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}},_c=class extends B{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${yt(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}};di();Ve();var Hn=class extends B{constructor({blockHash:t,blockNumber:e}){let i="Block";t&&(i=`Block at hash "${t}"`),e&&(i=`Block at number "${e}"`),super(`${i} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}};Pe();di();var _f={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function wc(a){let t={...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,chainId:a.chainId?Ct(a.chainId):void 0,gas:a.gas?BigInt(a.gas):void 0,gasPrice:a.gasPrice?BigInt(a.gasPrice):void 0,maxFeePerBlobGas:a.maxFeePerBlobGas?BigInt(a.maxFeePerBlobGas):void 0,maxFeePerGas:a.maxFeePerGas?BigInt(a.maxFeePerGas):void 0,maxPriorityFeePerGas:a.maxPriorityFeePerGas?BigInt(a.maxPriorityFeePerGas):void 0,nonce:a.nonce?Ct(a.nonce):void 0,to:a.to?a.to:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,type:a.type?_f[a.type]:void 0,typeHex:a.type?a.type:void 0,value:a.value?BigInt(a.value):void 0,v:a.v?BigInt(a.v):void 0};return t.yParity=(()=>{if(a.yParity)return Number(a.yParity);if(typeof t.v=="bigint"){if(t.v===0n||t.v===27n)return 0;if(t.v===1n||t.v===28n)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),t.type==="eip2930"&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t.type==="eip1559"&&delete t.maxFeePerBlobGas,t}function xc(a){let t=a.transactions?.map(e=>typeof e=="string"?e:wc(e));return{...a,baseFeePerGas:a.baseFeePerGas?BigInt(a.baseFeePerGas):null,blobGasUsed:a.blobGasUsed?BigInt(a.blobGasUsed):void 0,difficulty:a.difficulty?BigInt(a.difficulty):void 0,excessBlobGas:a.excessBlobGas?BigInt(a.excessBlobGas):void 0,gasLimit:a.gasLimit?BigInt(a.gasLimit):void 0,gasUsed:a.gasUsed?BigInt(a.gasUsed):void 0,hash:a.hash?a.hash:null,logsBloom:a.logsBloom?a.logsBloom:null,nonce:a.nonce?a.nonce:null,number:a.number?BigInt(a.number):null,size:a.size?BigInt(a.size):void 0,timestamp:a.timestamp?BigInt(a.timestamp):void 0,transactions:t,totalDifficulty:a.totalDifficulty?BigInt(a.totalDifficulty):null}}async function Qt(a,{blockHash:t,blockNumber:e,blockTag:i,includeTransactions:r}={}){let n=i??"latest",o=r??!1,s=e!==void 0?he(e):void 0,l=null;if(t?l=await a.request({method:"eth_getBlockByHash",params:[t,o]}):l=await a.request({method:"eth_getBlockByNumber",params:[s||n,o]}),!l)throw new Hn({blockHash:t,blockNumber:e});return(a.chain?.formatters?.block?.format||xc)(l)}async function Un(a){let t=await a.request({method:"eth_gasPrice"});return BigInt(t)}async function lg(a,t){return wf(a,t)}async function wf(a,t){let{block:e,chain:i=a.chain,request:r}=t||{};if(typeof i?.fees?.defaultPriorityFee=="function"){let n=e||await ue(a,Qt,"getBlock")({});return i.fees.defaultPriorityFee({block:n,client:a,request:r})}if(typeof i?.fees?.defaultPriorityFee<"u")return i?.fees?.defaultPriorityFee;try{let n=await a.request({method:"eth_maxPriorityFeePerGas"});return Ba(n)}catch{let[n,o]=await Promise.all([e?Promise.resolve(e):ue(a,Qt,"getBlock")({}),ue(a,Un,"getGasPrice")({})]);if(typeof n.baseFeePerGas!="bigint")throw new Ka;let s=o-n.baseFeePerGas;return s<0n?0n:s}}async function cg(a,t){return Ic(a,t)}async function Ic(a,t){let{block:e,chain:i=a.chain,request:r,type:n="eip1559"}=t||{},o=await(async()=>typeof i?.fees?.baseFeeMultiplier=="function"?i.fees.baseFeeMultiplier({block:e,client:a,request:r}):i?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new Lc;let l=10**(o.toString().split(".")[1]?.length??0),c=b=>b*BigInt(Math.ceil(o*l))/BigInt(l),u=e||await ue(a,Qt,"getBlock")({});if(typeof i?.fees?.estimateFeesPerGas=="function")return i.fees.estimateFeesPerGas({block:e,client:a,multiply:c,request:r,type:n});if(n==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new Ka;let b=typeof r?.maxPriorityFeePerGas=="bigint"?r.maxPriorityFeePerGas:await wf(a,{block:u,chain:i,request:r}),x=c(u.baseFeePerGas);return{maxFeePerGas:r?.maxFeePerGas??x+b,maxPriorityFeePerGas:b}}return{gasPrice:r?.gasPrice??c(await ue(a,Un,"getGasPrice")({}))}}di();Pe();async function Ec(a,{address:t,blockTag:e="latest",blockNumber:i}){let r=await a.request({method:"eth_getTransactionCount",params:[t,i?he(i):e]});return Ct(r)}Ve();var Fi=class extends B{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}};On();oa();function ug(a){if(a.type)return a.type;if(typeof a.blobs<"u"||typeof a.blobVersionedHashes<"u"||typeof a.maxFeePerBlobGas<"u"||typeof a.sidecars<"u")return"eip4844";if(typeof a.maxFeePerGas<"u"||typeof a.maxPriorityFeePerGas<"u")return"eip1559";if(typeof a.gasPrice<"u")return typeof a.accessList<"u"?"eip2930":"legacy";throw new dc({transaction:a})}di();async function ji(a){let t=await a.request({method:"eth_chainId"});return Ct(t)}async function Ya(a,t){let{account:e=a.account,chain:i,chainId:r,gas:n,nonce:o,parameters:s=["chainId","fees","gas","nonce","type"],type:l}=t,c=e?et(e):void 0,u={...t,...c?{from:c?.address}:{}};s.includes("chainId")&&(i?u.chainId=i.id:typeof r<"u"?u.chainId=r:u.chainId=await ue(a,ji,"getChainId")({})),s.includes("nonce")&&typeof o>"u"&&c&&(u.nonce=await ue(a,Ec,"getTransactionCount")({address:c.address,blockTag:"pending"}));let p=await(()=>{if(!(typeof u.type<"u"))return ue(a,Qt,"getBlock")({blockTag:"latest"})})();if((s.includes("fees")||s.includes("type"))&&typeof l>"u")try{u.type=ug(u)}catch{u.type=typeof p?.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(s.includes("fees"))if(u.type==="eip1559"||u.type==="eip4844"){if(typeof u.maxFeePerGas>"u"||typeof u.maxPriorityFeePerGas>"u"){let{maxFeePerGas:b,maxPriorityFeePerGas:x}=await Ic(a,{block:p,chain:i,request:u});if(typeof t.maxPriorityFeePerGas>"u"&&t.maxFeePerGas&&t.maxFeePerGas<x)throw new _c({maxPriorityFeePerGas:x});u.maxPriorityFeePerGas=x,u.maxFeePerGas=b}}else{if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")throw new Ka;let{gasPrice:b}=await Ic(a,{block:p,chain:i,request:u,type:"legacy"});u.gasPrice=b}return s.includes("gas")&&typeof n>"u"&&(u.gas=await ue(a,Vn,"estimateGas")({...u,account:c?{address:c.address,type:"json-rpc"}:void 0})),zi(u),delete u.parameters,u}async function Vn(a,t){let e=t.account??a.account,i=e?et(e):void 0;try{let{accessList:r,blobs:n,blockNumber:o,blockTag:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:b,maxPriorityFeePerGas:x,nonce:v,to:y,value:C,...A}=i?.type==="local"?await Ya(a,t):t,z=(o?he(o):void 0)||s;zi(t);let Z=a.chain?.formatters?.transactionRequest?.format,W=(Z||Wa)({...Nn(A,{format:Z}),from:i?.address,accessList:r,blobs:n,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:b,maxPriorityFeePerGas:x,nonce:v,to:y,value:C}),J=await a.request({method:"eth_estimateGas",params:z?[W,z]:[W]});return BigInt(J)}catch(r){throw sg(r,{...t,account:i,chain:a.chain})}}async function pg(a,t){let{abi:e,address:i,args:r,functionName:n,...o}=t,s=At({abi:e,args:r,functionName:n});try{return await ue(a,Vn,"estimateGas")({data:s,to:i,...o})}catch(l){let c=o.account?et(o.account):void 0;throw ca(l,{abi:e,address:i,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:n,sender:c?.address})}}rn();Lt();Ma();Ql();ff();nc();pr();var mg="/docs/contract/decodeEventLog";function Tr(a){let{abi:t,data:e,strict:i,topics:r}=a,n=i??!0,[o,...s]=r;if(!o)throw new Co({docsPath:mg});let l=t.find(y=>y.type==="event"&&o===tn(Ht(y)));if(!(l&&"name"in l)||l.type!=="event")throw new fr(o,{docsPath:mg});let{name:c,inputs:u}=l,p=u?.some(y=>!("name"in y&&y.name)),b=p?[]:{},x=u.filter(y=>"indexed"in y&&y.indexed);for(let y=0;y<x.length;y++){let C=x[y],A=s[y];if(!A)throw new Si({abiItem:l,param:C});b[C.name||y]=n_({param:C,value:A})}let v=u.filter(y=>!("indexed"in y&&y.indexed));if(v.length>0){if(e&&e!=="0x")try{let y=wr(v,e);if(y)if(p)b=[...b,...y];else for(let C=0;C<v.length;C++)b[v[C].name]=y[C]}catch(y){if(n)throw y instanceof dr||y instanceof nn?new mi({abiItem:l,data:e,params:v,size:Qe(e)}):y}else if(n)throw new mi({abiItem:l,data:"0x",params:v,size:0})}return{eventName:c,args:Object.values(b).length>0?b:void 0}}function n_({param:a,value:t}){return a.type==="string"||a.type==="bytes"||a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/)?t:(wr([a],t)||[])[0]}function Gn({abi:a,eventName:t,logs:e,strict:i=!0}){return e.map(r=>{try{let n=Tr({...r,abi:a,strict:i});return t&&!t.includes(n.eventName)?null:{...n,...r}}catch(n){let o,s;if(n instanceof fr)return null;if(n instanceof mi||n instanceof Si){if(i)return null;o=n.abiItem.name,s=n.abiItem.inputs?.some(l=>!("name"in l&&l.name))}return{...r,args:s?[]:{},eventName:o}}}).filter(Boolean)}Pe();function Vt(a,{args:t,eventName:e}={}){return{...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,logIndex:a.logIndex?Number(a.logIndex):null,transactionHash:a.transactionHash?a.transactionHash:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,...e?{args:t,eventName:e}:{}}}async function zn(a,{address:t,blockHash:e,fromBlock:i,toBlock:r,event:n,events:o,args:s,strict:l}={}){let c=l??!1,u=o??(n?[n]:void 0),p=[];u&&(p=[u.flatMap(v=>Ai({abi:[v],eventName:v.name,args:s}))],n&&(p=p[0]));let b;e?b=await a.request({method:"eth_getLogs",params:[{address:t,topics:p,blockHash:e}]}):b=await a.request({method:"eth_getLogs",params:[{address:t,topics:p,fromBlock:typeof i=="bigint"?he(i):i,toBlock:typeof r=="bigint"?he(r):r}]});let x=b.map(v=>Vt(v));return u?Gn({abi:u,logs:x,strict:c}):x}async function Sc(a,t){let{abi:e,address:i,args:r,blockHash:n,eventName:o,fromBlock:s,toBlock:l,strict:c}=t,u=o?Oi({abi:e,name:o}):void 0,p=u?void 0:e.filter(b=>b.type==="event");return ue(a,zn,"getLogs")({address:i,args:r,blockHash:n,event:u,events:p,fromBlock:s,toBlock:l,strict:c})}Cr();na();Fn();async function Gt(a,t){let{abi:e,address:i,args:r,functionName:n,...o}=t,s=At({abi:e,args:r,functionName:n});try{let{data:l}=await ue(a,qi,"call")({...o,data:s,to:i});return fi({abi:e,args:r,functionName:n,data:l||"0x"})}catch(l){throw ca(l,{abi:e,address:i,args:r,docsPath:"/docs/contract/readContract",functionName:n})}}oi();Cr();na();Fn();async function Cg(a,t){let{abi:e,address:i,args:r,dataSuffix:n,functionName:o,...s}=t,l=s.account?et(s.account):a.account,c=At({abi:e,args:r,functionName:o});try{let{data:u}=await ue(a,qi,"call")({batch:!1,data:`${c}${n?n.replace("0x",""):""}`,to:i,...s,account:l}),p=fi({abi:e,args:r,functionName:o,data:u||"0x"}),b=e.filter(x=>"name"in x&&x.name===t.functionName);return{result:p,request:{abi:b,address:i,args:r,dataSuffix:n,functionName:o,...s,account:l}}}catch(u){throw ca(u,{abi:e,address:i,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:l?.address})}}Lt();Xo();var Cf=new Map,kg=new Map,d_=0;function Zt(a,t,e){let i=++d_,r=()=>Cf.get(a)||[],n=()=>{let u=r();Cf.set(a,u.filter(p=>p.id!==i))},o=()=>{let u=kg.get(a);r().length===1&&u&&u(),n()},s=r();if(Cf.set(a,[...s,{id:i,fns:t}]),s&&s.length>0)return o;let l={};for(let u in t)l[u]=(...p)=>{let b=r();if(b.length!==0)for(let x of b)x.fns[u]?.(...p)};let c=e(l);return typeof c=="function"&&kg.set(a,c),o}async function es(a){return new Promise(t=>setTimeout(t,a))}function Wi(a,{emitOnBegin:t,initialWaitTime:e,interval:i}){let r=!0,n=()=>r=!1;return(async()=>{let s;t&&(s=await a({unpoll:n}));let l=await e?.(s)??i;await es(l);let c=async()=>{r&&(await a({unpoll:n}),await es(i),c())};c()})(),n}si();var h_=new Map,f_=new Map;function Ag(a){let t=(r,n)=>({clear:()=>n.delete(r),get:()=>n.get(r),set:o=>n.set(r,o)}),e=t(a,h_),i=t(a,f_);return{clear:()=>{e.clear(),i.clear()},promise:e,response:i}}async function Dg(a,{cacheKey:t,cacheTime:e=1/0}){let i=Ag(t),r=i.response.get();if(r&&e>0&&new Date().getTime()-r.created.getTime()<e)return r.data;let n=i.promise.get();n||(n=a(),i.promise.set(n));try{let o=await n;return i.response.set({created:new Date,data:o}),o}finally{i.promise.clear()}}var b_=a=>`blockNumber.${a}`;async function Ki(a,{cacheTime:t=a.cacheTime}={}){let e=await Dg(()=>a.request({method:"eth_blockNumber"}),{cacheKey:b_(a.uid),cacheTime:t});return BigInt(e)}async function $a(a,{filter:t}){let e="strict"in t&&t.strict,i=await t.request({method:"eth_getFilterChanges",params:[t.id]});if(typeof i[0]=="string")return i;let r=i.map(n=>Vt(n));return!("abi"in t)||!t.abi?r:Gn({abi:t.abi,logs:r,strict:e})}async function Xa(a,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}function Mg(a,t){let{abi:e,address:i,args:r,batch:n=!0,eventName:o,onError:s,onLogs:l,poll:c,pollingInterval:u=a.pollingInterval,strict:p}=t;return(typeof c<"u"?c:a.transport.type!=="webSocket")?(()=>{let y=p??!1,C=je(["watchContractEvent",i,r,n,a.uid,o,u,y]);return Zt(C,{onLogs:l,onError:s},A=>{let H,z,Z=!1,D=Wi(async()=>{if(!Z){try{z=await ue(a,tc,"createContractEventFilter")({abi:e,address:i,args:r,eventName:o,strict:y})}catch{}Z=!0;return}try{let W;if(z)W=await ue(a,$a,"getFilterChanges")({filter:z});else{let J=await ue(a,Ki,"getBlockNumber")({});H&&H!==J?W=await ue(a,Sc,"getContractEvents")({abi:e,address:i,args:r,eventName:o,fromBlock:H+1n,toBlock:J,strict:y}):W=[],H=J}if(W.length===0)return;if(n)A.onLogs(W);else for(let J of W)A.onLogs([J])}catch(W){z&&W instanceof Vi&&(Z=!1),A.onError?.(W)}},{emitOnBegin:!0,interval:u});return async()=>{z&&await ue(a,Xa,"uninstallFilter")({filter:z}),D()}})})():(()=>{let y=p??!1,C=je(["watchContractEvent",i,r,n,a.uid,o,u,y]),A=!0,H=()=>A=!1;return Zt(C,{onLogs:l,onError:s},z=>((async()=>{try{let Z=o?Ai({abi:e,eventName:o,args:r}):[],{unsubscribe:D}=await a.transport.subscribe({params:["logs",{address:i,topics:Z}],onData(W){if(!A)return;let J=W.result;try{let{eventName:me,args:Be}=Tr({abi:e,data:J.data,topics:J.topics,strict:p}),Ee=Vt(J,{args:Be,eventName:me});z.onLogs([Ee])}catch(me){let Be,Ee;if(me instanceof mi||me instanceof Si){if(p)return;Be=me.abiItem.name,Ee=me.abiItem.inputs?.some(pt=>!("name"in pt&&pt.name))}let Ie=Vt(J,{args:Ee?[]:{},eventName:Be});z.onLogs([Ie])}},onError(W){z.onError?.(W)}});H=D,A||H()}catch(Z){s?.(Z)}})(),()=>H()))})()}na();oi();Ac();function Rc({chain:a,currentChainId:t}){if(!a)throw new kc;if(t!==a.id)throw new Cc({chain:a,currentChainId:t})}Bn();oa();gc();function Pg(a,{docsPath:t,...e}){let i=(()=>{let r=Rn(a,e);return r instanceof Gi?a:r})();return new hc(i,{docsPath:t,...e})}vc();Qo();On();async function jn(a,{serializedTransaction:t}){return a.request({method:"eth_sendRawTransaction",params:[t]},{retryCount:0})}async function qn(a,t){let{account:e=a.account,chain:i=a.chain,accessList:r,blobs:n,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:p,nonce:b,to:x,value:v,...y}=t;if(!e)throw new Fi({docsPath:"/docs/actions/wallet/sendTransaction"});let C=et(e);try{zi(t);let A;if(i!==null&&(A=await ue(a,ji,"getChainId")({}),Rc({currentChainId:A,chain:i})),C.type==="local"){let D=await ue(a,Ya,"prepareTransactionRequest")({account:C,accessList:r,blobs:n,chain:i,chainId:A,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:p,nonce:b,to:x,value:v,...y}),W=i?.serializers?.transaction,J=await C.signTransaction(D,{serializer:W});return await ue(a,jn,"sendRawTransaction")({serializedTransaction:J})}let H=a.chain?.formatters?.transactionRequest?.format,Z=(H||Wa)({...Nn(y,{format:H}),accessList:r,blobs:n,data:o,from:C.address,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:p,nonce:b,to:x,value:v});return await a.request({method:"eth_sendTransaction",params:[Z]},{retryCount:0})}catch(A){throw Pg(A,{...t,account:C,chain:t.chain||void 0})}}async function Bg(a,t){let{abi:e,address:i,args:r,dataSuffix:n,functionName:o,...s}=t,l=At({abi:e,args:r,functionName:o});return ue(a,qn,"sendTransaction")({data:`${l}${n?n.replace("0x",""):""}`,to:i,...s})}Pe();async function Rg(a,{chain:t}){let{id:e,name:i,nativeCurrency:r,rpcUrls:n,blockExplorers:o}=t;await a.request({method:"wallet_addEthereumChain",params:[{chainId:he(e),chainName:i,nativeCurrency:r,rpcUrls:n.default.http,blockExplorerUrls:o?Object.values(o).map(({url:s})=>s):void 0}]},{retryCount:0})}oi();var Nc=256,Oc;function Ng(a=11){if(!Oc||Nc+a>256*2){Oc="",Nc=0;for(let t=0;t<256;t++)Oc+=(256+Math.random()*256|0).toString(16).substring(1)}return Oc.substring(Nc,Nc+++a)}function Hc(a){let{batch:t,cacheTime:e=a.pollingInterval??4e3,ccipRead:i,key:r="base",name:n="Base Client",pollingInterval:o=4e3,type:s="base"}=a,l=a.chain,c=a.account?et(a.account):void 0,{config:u,request:p,value:b}=a.transport({chain:l,pollingInterval:o}),x={...u,...b},v={account:c,batch:t,cacheTime:e,ccipRead:i,chain:l,key:r,name:n,pollingInterval:o,request:p,transport:x,type:s,uid:Ng()};function y(C){return A=>{let H=A(C);for(let Z in v)delete H[Z];let z={...C,...H};return Object.assign(z,{extend:y(z)})}}return Object.assign(v,{extend:y(v)})}Ve();pn();Xo();function ts(a,{delay:t=100,retryCount:e=2,shouldRetry:i=()=>!0}={}){return new Promise((r,n)=>{let o=async({count:s=0}={})=>{let l=async({error:c})=>{let u=typeof t=="function"?t({count:s,error:c}):t;u&&await es(u),o({count:s+1})};try{let c=await a();r(c)}catch(c){if(s<e&&await i({count:s,error:c}))return l({error:c});n(c)}};o()})}function Og(a,t={}){return async(e,i={})=>{let{retryDelay:r=150,retryCount:n=3}={...t,...i};return ts(async()=>{try{return await a(e)}catch(o){let s=o;switch(s.code){case mn.code:throw new mn(s);case dn.code:throw new dn(s);case hn.code:throw new hn(s);case fn.code:throw new fn(s);case la.code:throw new la(s);case Vi.code:throw new Vi(s);case bn.code:throw new bn(s);case yn.code:throw new yn(s);case gn.code:throw new gn(s);case vn.code:throw new vn(s);case Er.code:throw new Er(s);case Ln.code:throw new Ln(s);case Sr.code:throw new Sr(s);case _n.code:throw new _n(s);case wn.code:throw new wn(s);case xn.code:throw new xn(s);case In.code:throw new In(s);case En.code:throw new En(s);case 5e3:throw new Sr(s);default:throw o instanceof B?o:new bc(s)}}},{delay:({count:o,error:s})=>{if(s&&s instanceof hi){let l=s?.headers?.get("Retry-After");if(l?.match(/\d/))return parseInt(l)*1e3}return~~(1<<o)*r},retryCount:n,shouldRetry:({error:o})=>y_(o)})}}function y_(a){return"code"in a&&typeof a.code=="number"?a.code===-1||a.code===Er.code||a.code===la.code:a instanceof hi&&a.status?a.status===403||a.status===408||a.status===413||a.status===429||a.status===500||a.status===502||a.status===503||a.status===504:!0}function Uc({key:a,name:t,request:e,retryCount:i=3,retryDelay:r=150,timeout:n,type:o},s){return{config:{key:a,name:t,request:e,retryCount:i,retryDelay:r,timeout:n,type:o},request:Og(e,{retryCount:i,retryDelay:r}),value:s}}function Wn(a,t={}){let{key:e="custom",name:i="Custom Provider",retryDelay:r}=t;return({retryCount:n})=>Uc({key:e,name:i,request:a.request.bind(a),retryCount:t.retryCount??n,retryDelay:r,type:"custom"})}pn();Ve();var Vc=class extends B{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}};Tf();pn();function Hg(a,{errorInstance:t=new Error("timed out"),timeout:e,signal:i}){return new Promise((r,n)=>{(async()=>{let o;try{let s=new AbortController;e>0&&(o=setTimeout(()=>{i?s.abort():n(t)},e)),r(await a({signal:s?.signal||null}))}catch(s){s.name==="AbortError"&&n(t),n(s)}finally{clearTimeout(o)}})()})}si();function g_(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var kf=g_();function Ug(a,t={}){return{async request(e){let{body:i,fetchOptions:r={},onResponse:n=t.onResponse,timeout:o=t.timeout??1e4}=e,{headers:s,method:l,signal:c}={...t.fetchOptions,...r};try{let u=await Hg(async({signal:b})=>await fetch(a,{...r,body:Array.isArray(i)?je(i.map(v=>({jsonrpc:"2.0",id:v.id??kf.take(),...v}))):je({jsonrpc:"2.0",id:i.id??kf.take(),...i}),headers:{...s,"Content-Type":"application/json"},method:l||"POST",signal:c||(o>0?b:null)}),{errorInstance:new $o({body:i,url:a}),timeout:o,signal:!0});n&&await n(u);let p;if(u.headers.get("Content-Type")?.startsWith("application/json")?p=await u.json():p=await u.text(),!u.ok)throw new hi({body:i,details:je(p.error)||u.statusText,headers:u.headers,status:u.status,url:a});return p}catch(u){throw u instanceof hi||u instanceof $o?u:new hi({body:i,details:u.message,url:a})}}}}function is(a,t={}){let{batch:e,fetchOptions:i,key:r="http",name:n="HTTP JSON-RPC",onFetchResponse:o,retryDelay:s}=t;return({chain:l,retryCount:c,timeout:u})=>{let{batchSize:p=1e3,wait:b=0}=typeof e=="object"?e:{},x=t.retryCount??c,v=u??t.timeout??1e4,y=a||l?.rpcUrls.default.http[0];if(!y)throw new Vc;let C=Ug(y,{fetchOptions:i,onResponse:o,timeout:v});return Uc({key:r,name:n,async request({method:A,params:H}){let z={method:A,params:H},{schedule:Z}=Dc({id:`${a}`,wait:b,shouldSplitBatch(me){return me.length>p},fn:me=>C.request({body:me}),sort:(me,Be)=>me.id-Be.id}),D=async me=>e?Z(me):[await C.request({body:me})],[{error:W,result:J}]=await D(z);if(W)throw new un({body:z,error:W,url:y});return J},retryCount:x,retryDelay:s,timeout:v,type:"http"},{fetchOptions:i,url:y})}}kr();Cr();na();Dr();Gl();Pe();ac();Ve();za();function Kn(a,t){if(!(a instanceof B))return!1;let e=a.walk(i=>i instanceof Xt);return e instanceof Xt?!!(e.data?.errorName==="ResolverNotFound"||e.data?.errorName==="ResolverWildcardNotSupported"||e.data?.errorName==="ResolverNotContract"||e.data?.errorName==="ResolverError"||e.data?.errorName==="HttpError"||e.reason?.includes("Wildcard on non-extended resolvers is not supported")||t==="reverse"&&e.reason===ic[50]):!1}Va();Ti();Pe();Ha();Ii();function Gc(a){if(a.length!==66||a.indexOf("[")!==0||a.indexOf("]")!==65)return null;let t=`0x${a.slice(1,65)}`;return rt(t)?t:null}function Yn(a){let t=new Uint8Array(32).fill(0);if(!a)return bt(t);let e=a.split(".");for(let i=e.length-1;i>=0;i-=1){let r=Gc(e[i]),n=r?ni(r):dt($t(e[i]),"bytes");t=dt(Ut([t,n]),"bytes")}return bt(t)}Ti();function Vg(a){return`[${a.slice(2)}]`}Ti();Pe();Ha();function Gg(a){let t=new Uint8Array(32).fill(0);return a?Gc(a)||dt($t(a)):bt(t)}function Qa(a){let t=a.replace(/^\.|\.$/gm,"");if(t.length===0)return new Uint8Array(1);let e=new Uint8Array($t(t).byteLength+2),i=0,r=t.split(".");for(let n=0;n<r.length;n++){let o=$t(r[n]);o.byteLength>255&&(o=$t(Vg(Gg(r[n])))),e[i]=o.length,e.set(o,i+1),i+=o.length+1}return e.byteLength!==i+1?e.slice(0,i+1):e}async function zg(a,{blockNumber:t,blockTag:e,coinType:i,name:r,gatewayUrls:n,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=bi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}try{let c=At({abi:Ef,functionName:"addr",...i!=null?{args:[Yn(r),BigInt(i)]}:{args:[Yn(r)]}}),u={address:l,abi:Tc,functionName:"resolve",args:[Je(Qa(r)),c],blockNumber:t,blockTag:e},p=ue(a,Gt,"readContract"),b=n?await p({...u,args:[...u.args,n]}):await p(u);if(b[0]==="0x")return null;let x=fi({abi:Ef,args:i!=null?[Yn(r),BigInt(i)]:void 0,functionName:"addr",data:b[0]});return x==="0x"||br(x)==="0x00"?null:x}catch(c){if(o)throw c;if(Kn(c,"resolve"))return null;throw c}}Ve();var zc=class extends B{constructor({data:t}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}},Za=class extends B{constructor({reason:t}){super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}},$n=class extends B{constructor({uri:t}){super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}},Fc=class extends B{constructor({namespace:t}){super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}};var v_=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,L_=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,__=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,w_=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function x_(a){try{let t=await fetch(a,{method:"HEAD"});return t.status===200?t.headers.get("content-type")?.startsWith("image/"):!1}catch(t){return typeof t=="object"&&typeof t.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(e=>{let i=new Image;i.onload=()=>{e(!0)},i.onerror=()=>{e(!1)},i.src=a})}}function Fg(a,t){return a?a.endsWith("/")?a.slice(0,-1):a:t}function Af({uri:a,gatewayUrls:t}){let e=__.test(a);if(e)return{uri:a,isOnChain:!0,isEncoded:e};let i=Fg(t?.ipfs,"https://ipfs.io"),r=Fg(t?.arweave,"https://arweave.net"),n=a.match(v_),{protocol:o,subpath:s,target:l,subtarget:c=""}=n?.groups||{},u=o==="ipns:/"||s==="ipns/",p=o==="ipfs:/"||s==="ipfs/"||L_.test(a);if(a.startsWith("http")&&!u&&!p){let x=a;return t?.arweave&&(x=a.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:x,isOnChain:!1,isEncoded:!1}}if((u||p)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(o==="ar:/"&&l)return{uri:`${r}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let b=a.replace(w_,"");if(b.startsWith("<svg")&&(b=`data:image/svg+xml;base64,${btoa(b)}`),b.startsWith("data:")||b.startsWith("{"))return{uri:b,isOnChain:!0,isEncoded:!1};throw new $n({uri:a})}function Df(a){if(typeof a!="object"||!("image"in a)&&!("image_url"in a)&&!("image_data"in a))throw new zc({data:a});return a.image||a.image_url||a.image_data}async function jg({gatewayUrls:a,uri:t}){try{let e=await fetch(t).then(r=>r.json());return await jc({gatewayUrls:a,uri:Df(e)})}catch{throw new $n({uri:t})}}async function jc({gatewayUrls:a,uri:t}){let{uri:e,isOnChain:i}=Af({uri:t,gatewayUrls:a});if(i||await x_(e))return e;throw new $n({uri:t})}function qg(a){let t=a;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[e,i,r]=t.split("/"),[n,o]=e.split(":"),[s,l]=i.split(":");if(!n||n.toLowerCase()!=="eip155")throw new Za({reason:"Only EIP-155 supported"});if(!o)throw new Za({reason:"Chain ID not found"});if(!l)throw new Za({reason:"Contract address not found"});if(!r)throw new Za({reason:"Token ID not found"});if(!s)throw new Za({reason:"ERC namespace not found"});return{chainID:parseInt(o),namespace:s.toLowerCase(),contractAddress:l,tokenID:r}}async function Wg(a,{nft:t}){if(t.namespace==="erc721")return Gt(a,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if(t.namespace==="erc1155")return Gt(a,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new Fc({namespace:t.namespace})}async function Kg(a,{gatewayUrls:t,record:e}){return/eip155:/i.test(e)?I_(a,{gatewayUrls:t,record:e}):jc({uri:e,gatewayUrls:t})}async function I_(a,{gatewayUrls:t,record:e}){let i=qg(e),r=await Wg(a,{nft:i}),{uri:n,isOnChain:o,isEncoded:s}=Af({uri:r,gatewayUrls:t});if(o&&(n.includes("data:application/json;base64,")||n.startsWith("{"))){let c=s?atob(n.replace("data:application/json;base64,","")):n,u=JSON.parse(c);return jc({uri:Df(u),gatewayUrls:t})}let l=i.tokenID;return i.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),jg({gatewayUrls:t,uri:n.replace(/(?:0x)?{id}/,l)})}kr();Cr();na();Dr();Pe();async function qc(a,{blockNumber:t,blockTag:e,name:i,key:r,gatewayUrls:n,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=bi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}try{let c={address:l,abi:Tc,functionName:"resolve",args:[Je(Qa(i)),At({abi:If,functionName:"text",args:[Yn(i),r]})],blockNumber:t,blockTag:e},u=ue(a,Gt,"readContract"),p=n?await u({...c,args:[...c.args,n]}):await u(c);if(p[0]==="0x")return null;let b=fi({abi:If,functionName:"text",data:p[0]});return b===""?null:b}catch(c){if(o)throw c;if(Kn(c,"resolve"))return null;throw c}}async function Yg(a,{blockNumber:t,blockTag:e,assetGatewayUrls:i,name:r,gatewayUrls:n,strict:o,universalResolverAddress:s}){let l=await ue(a,qc,"getEnsText")({blockNumber:t,blockTag:e,key:"avatar",name:r,universalResolverAddress:s,gatewayUrls:n,strict:o});if(!l)return null;try{return await Kg(a,{record:l,gatewayUrls:i})}catch{return null}}kr();Dr();Pe();async function $g(a,{address:t,blockNumber:e,blockTag:i,gatewayUrls:r,strict:n,universalResolverAddress:o}){let s=o;if(!s){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=bi({blockNumber:e,chain:a.chain,contract:"ensUniversalResolver"})}let l=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let c={address:s,abi:hg,functionName:"reverse",args:[Je(Qa(l))],blockNumber:e,blockTag:i},u=ue(a,Gt,"readContract"),[p,b]=r?await u({...c,args:[...c.args,r]}):await u(c);return t.toLowerCase()!==b.toLowerCase()?null:p}catch(c){if(n)throw c;if(Kn(c,"reverse"))return null;throw c}}Dr();Pe();async function Xg(a,{blockNumber:t,blockTag:e,name:i,universalResolverAddress:r}){let n=r;if(!n){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");n=bi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}let[o]=await ue(a,Gt,"readContract")({address:n,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Je(Qa(i))],blockNumber:t,blockTag:e});return o}Fn();async function Qg(a){let t=Ga(a,{method:"eth_newBlockFilter"}),e=await a.request({method:"eth_newBlockFilter"});return{id:e,request:t(e),type:"block"}}Pe();async function Wc(a,{address:t,args:e,event:i,events:r,fromBlock:n,strict:o,toBlock:s}={}){let l=r??(i?[i]:void 0),c=Ga(a,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(b=>Ai({abi:[b],eventName:b.name,args:e}))],i&&(u=u[0]));let p=await a.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof n=="bigint"?he(n):n,toBlock:typeof s=="bigint"?he(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:e,eventName:i?i.name:void 0,fromBlock:n,id:p,request:c(p),strict:!!o,toBlock:s,type:"event"}}async function Kc(a){let t=Ga(a,{method:"eth_newPendingTransactionFilter"}),e=await a.request({method:"eth_newPendingTransactionFilter"});return{id:e,request:t(e),type:"transaction"}}Pe();async function Zg(a,{address:t,blockNumber:e,blockTag:i="latest"}){let r=e?he(e):void 0,n=await a.request({method:"eth_getBalance",params:[t,r||i]});return BigInt(n)}async function Jg(a){let t=await a.request({method:"eth_blobBaseFee"});return BigInt(t)}di();Pe();async function ev(a,{blockHash:t,blockNumber:e,blockTag:i="latest"}={}){let r=e!==void 0?he(e):void 0,n;return t?n=await a.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):n=await a.request({method:"eth_getBlockTransactionCountByNumber",params:[r||i]}),Ct(n)}Pe();async function tv(a,{address:t,blockNumber:e,blockTag:i="latest"}){let r=e!==void 0?he(e):void 0,n=await a.request({method:"eth_getCode",params:[t,r||i]});if(n!=="0x")return n}Pe();function iv(a){return{baseFeePerGas:a.baseFeePerGas.map(t=>BigInt(t)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(t=>t.map(e=>BigInt(e)))}}async function av(a,{blockCount:t,blockNumber:e,blockTag:i="latest",rewardPercentiles:r}){let n=e?he(e):void 0,o=await a.request({method:"eth_feeHistory",params:[he(t),n||i,r]});return iv(o)}async function rv(a,{filter:t}){let e=t.strict??!1,r=(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(n=>Vt(n));return t.abi?Gn({abi:t.abi,logs:r,strict:e}):r}Pe();function Xn(a){return{formatters:void 0,fees:void 0,serializers:void 0,...a}}var nv=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,ov=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;Lt();gr();Ua();Ma();Pe();_r();Va();Pe();Ha();function sv(a){let{domain:t={},message:e,primaryType:i}=a,r={EIP712Domain:$c({domain:t}),...a.types};Yc({domain:t,message:e,primaryType:i,types:r});let n=["0x1901"];return t&&n.push(E_({domain:t,types:r})),i!=="EIP712Domain"&&n.push(lv({data:e,primaryType:i,types:r})),dt(Ut(n))}function E_({domain:a,types:t}){return lv({data:a,primaryType:"EIP712Domain",types:t})}function lv({data:a,primaryType:t,types:e}){let i=cv({data:a,primaryType:t,types:e});return dt(i)}function cv({data:a,primaryType:t,types:e}){let i=[{type:"bytes32"}],r=[S_({primaryType:t,types:e})];for(let n of e[t]){let[o,s]=pv({types:e,name:n.name,type:n.type,value:a[n.name]});i.push(o),r.push(s)}return ki(i,r)}function S_({primaryType:a,types:t}){let e=Je(T_({primaryType:a,types:t}));return dt(e)}function T_({primaryType:a,types:t}){let e="",i=uv({primaryType:a,types:t});i.delete(a);let r=[a,...Array.from(i).sort()];for(let n of r)e+=`${n}(${t[n].map(({name:o,type:s})=>`${s} ${o}`).join(",")})`;return e}function uv({primaryType:a,types:t},e=new Set){let r=a.match(/^\w*/u)?.[0];if(e.has(r)||t[r]===void 0)return e;e.add(r);for(let n of t[r])uv({primaryType:n.type,types:t},e);return e}function pv({types:a,name:t,type:e,value:i}){if(a[e]!==void 0)return[{type:"bytes32"},dt(cv({data:i,primaryType:e,types:a}))];if(e==="bytes")return i=`0x${(i.length%2?"0":"")+i.slice(2)}`,[{type:"bytes32"},dt(i)];if(e==="string")return[{type:"bytes32"},dt(Je(i))];if(e.lastIndexOf("]")===e.length-1){let r=e.slice(0,e.lastIndexOf("[")),n=i.map(o=>pv({name:t,type:r,types:a,value:o}));return[{type:"bytes32"},dt(ki(n.map(([o])=>o),n.map(([,o])=>o)))]}return[{type:e},i]}function Yc(a){let{domain:t,message:e,primaryType:i,types:r}=a,n=(o,s)=>{for(let l of o){let{name:c,type:u}=l,p=s[c],b=u.match(ov);if(b&&(typeof p=="number"||typeof p=="bigint")){let[y,C,A]=b;he(p,{signed:C==="int",size:parseInt(A)/8})}if(u==="address"&&typeof p=="string"&&!_t(p))throw new kt({address:p});let x=u.match(nv);if(x){let[y,C]=x;if(C&&Qe(p)!==parseInt(C))throw new Ao({expectedSize:parseInt(C),givenSize:Qe(p)})}let v=r[u];v&&n(v,p)}};if(r.EIP712Domain&&t&&n(r.EIP712Domain,t),i!=="EIP712Domain"){let o=r[i];n(o,e)}}function $c({domain:a}){return[typeof a?.name=="string"&&{name:"name",type:"string"},a?.version&&{name:"version",type:"string"},typeof a?.chainId=="number"&&{name:"chainId",type:"uint256"},a?.verifyingContract&&{name:"verifyingContract",type:"address"},a?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}Lt();Va();_r();var Mf="/docs/contract/encodeDeployData";function as(a){let{abi:t,args:e,bytecode:i}=a;if(!e||e.length===0)return i;let r=t.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new Io({docsPath:Mf});if(!("inputs"in r))throw new Zr({docsPath:Mf});if(!r.inputs||r.inputs.length===0)throw new Zr({docsPath:Mf});let n=ki(r.inputs,e);return zo([i,n])}Ii();di();var C_={"0x0":"reverted","0x1":"success"};function mv(a){let t={...a,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,contractAddress:a.contractAddress?a.contractAddress:null,cumulativeGasUsed:a.cumulativeGasUsed?BigInt(a.cumulativeGasUsed):null,effectiveGasPrice:a.effectiveGasPrice?BigInt(a.effectiveGasPrice):null,gasUsed:a.gasUsed?BigInt(a.gasUsed):null,logs:a.logs?a.logs.map(e=>Vt(e)):null,to:a.to?a.to:null,transactionIndex:a.transactionIndex?Ct(a.transactionIndex):null,status:a.status?C_[a.status]:null,type:a.type?_f[a.type]||a.type:null};return a.blobGasPrice&&(t.blobGasPrice=BigInt(a.blobGasPrice)),a.blobGasUsed&&(t.blobGasUsed=BigInt(a.blobGasUsed)),t}Pe();di();var bv=`Ethereum Signed Message:
`;Va();Ti();Ha();function Bf(a,t){let e=(()=>typeof a=="string"?$t(a):a.raw instanceof Uint8Array?a.raw:ni(a.raw))(),i=$t(`${bv}${e.length}`);return dt(Ut([i,e]),t)}function yv(a,t){let[e,i="0"]=a.split("."),r=e.startsWith("-");if(r&&(e=e.slice(1)),i=i.replace(/(0+)$/,""),t===0)Math.round(+`.${i}`)===1&&(e=`${BigInt(e)+1n}`),i="";else if(i.length>t){let[n,o,s]=[i.slice(0,t-1),i.slice(t-1,t),i.slice(t)],l=Math.round(+`${o}.${s}`);l>9?i=`${BigInt(n)+BigInt(1)}0`.padStart(n.length+1,"0"):i=`${n}${l}`,i.length>t&&(i=i.slice(1),e=`${BigInt(e)+1n}`),i=i.slice(0,t)}else i=i.padEnd(t,"0");return BigInt(`${r?"-":""}${e}${i}`)}lc();function tr(a,t="wei"){return yv(a,sc[t])}function P_(a){return a.map(t=>({...t,value:BigInt(t.value)}))}function gv(a){return{...a,balance:a.balance?BigInt(a.balance):void 0,nonce:a.nonce?Ct(a.nonce):void 0,storageProof:a.storageProof?P_(a.storageProof):void 0}}async function vv(a,{address:t,blockNumber:e,blockTag:i,storageKeys:r}){let n=i??"latest",o=e!==void 0?he(e):void 0,s=await a.request({method:"eth_getProof",params:[t,r,o||n]});return gv(s)}Pe();async function Lv(a,{address:t,blockNumber:e,blockTag:i="latest",slot:r}){let n=e!==void 0?he(e):void 0;return await a.request({method:"eth_getStorageAt",params:[t,r,n||i]})}oa();Pe();async function Qn(a,{blockHash:t,blockNumber:e,blockTag:i,hash:r,index:n}){let o=i||"latest",s=e!==void 0?he(e):void 0,l=null;if(r?l=await a.request({method:"eth_getTransactionByHash",params:[r]}):t?l=await a.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,he(n)]}):(s||o)&&(l=await a.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||o,he(n)]})),!l)throw new ln({blockHash:t,blockNumber:e,blockTag:o,hash:r,index:n});return(a.chain?.formatters?.transaction?.format||wc)(l)}async function _v(a,{hash:t,transactionReceipt:e}){let[i,r]=await Promise.all([ue(a,Ki,"getBlockNumber")({}),t?ue(a,Qn,"getBlockNumber")({hash:t}):void 0]),n=e?.blockNumber||r?.blockNumber;return n?i-n+1n:0n}oa();async function rs(a,{hash:t}){let e=await a.request({method:"eth_getTransactionReceipt",params:[t]});if(!e)throw new cn({hash:t});return(a.chain?.formatters?.transactionReceipt?.format||mv)(e)}kr();Lt();Ve();za();Cr();na();Dr();async function wv(a,t){let{allowFailure:e=!0,batchSize:i,blockNumber:r,blockTag:n,multicallAddress:o,stateOverride:s}=t,l=t.contracts,c=i??(typeof a.batch?.multicall=="object"&&a.batch.multicall.batchSize||1024),u=o;if(!u){if(!a.chain)throw new Error("client chain not configured. multicallAddress is required.");u=bi({blockNumber:r,chain:a.chain,contract:"multicall3"})}let p=[[]],b=0,x=0;for(let C=0;C<l.length;C++){let{abi:A,address:H,args:z,functionName:Z}=l[C];try{let D=At({abi:A,args:z,functionName:Z});x+=(D.length-2)/2,c>0&&x>c&&p[b].length>0&&(b++,x=(D.length-2)/2,p[b]=[]),p[b]=[...p[b],{allowFailure:!0,callData:D,target:H}]}catch(D){let W=ca(D,{abi:A,address:H,args:z,docsPath:"/docs/contract/multicall",functionName:Z});if(!e)throw W;p[b]=[...p[b],{allowFailure:!0,callData:"0x",target:H}]}}let v=await Promise.allSettled(p.map(C=>ue(a,Gt,"readContract")({abi:Zo,address:u,args:[C],blockNumber:r,blockTag:n,functionName:"aggregate3",stateOverride:s}))),y=[];for(let C=0;C<v.length;C++){let A=v[C];if(A.status==="rejected"){if(!e)throw A.reason;for(let z=0;z<p[C].length;z++)y.push({status:"failure",error:A.reason,result:void 0});continue}let H=A.value;for(let z=0;z<H.length;z++){let{returnData:Z,success:D}=H[z],{callData:W}=p[C][z],{abi:J,address:me,functionName:Be,args:Ee}=l[y.length];try{if(W==="0x")throw new Ei;if(!D)throw new sa({data:Z});let Ie=fi({abi:J,args:Ee,data:Z,functionName:Be});y.push(e?{result:Ie,status:"success"}:Ie)}catch(Ie){let pt=ca(Ie,{abi:J,address:me,args:Ee,docsPath:"/docs/contract/multicall",functionName:Be});if(!e)throw pt;y.push({error:pt,result:void 0,status:"failure"})}}}if(y.length!==l.length)throw new B("multicall results mismatch");return y}kr();var xv="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";za();Jn();Ti();Ii();function Tv(a,t){let e=rt(a)?ni(a):a,i=rt(t)?ni(t):t;return Of(e,i)}Fn();async function tu(a,{address:t,hash:e,signature:i,...r}){let n=rt(i)?i:Je(i);try{let{data:o}=await ue(a,qi,"call")({data:as({abi:fg,args:[t,e,n],bytecode:xv}),...r});return Tv(o??"0x0","0x1")}catch(o){if(o instanceof Ir)return!1;throw o}}async function Cv(a,{address:t,message:e,signature:i,...r}){let n=Bf(e);return tu(a,{address:t,hash:n,signature:i,...r})}async function kv(a,t){let{address:e,signature:i,message:r,primaryType:n,types:o,domain:s,...l}=t,c=sv({message:r,primaryType:n,types:o,domain:s});return tu(a,{address:e,hash:c,signature:i,...l})}oa();si();di();si();function iu(a,{emitOnBegin:t=!1,emitMissed:e=!1,onBlockNumber:i,onError:r,poll:n,pollingInterval:o=a.pollingInterval}){let s=typeof n<"u"?n:a.transport.type!=="webSocket",l;return s?(()=>{let p=je(["watchBlockNumber",a.uid,t,e,o]);return Zt(p,{onBlockNumber:i,onError:r},b=>Wi(async()=>{try{let x=await ue(a,Ki,"getBlockNumber")({cacheTime:0});if(l){if(x===l)return;if(x-l>1&&e)for(let v=l+1n;v<x;v++)b.onBlockNumber(v,l),l=v}(!l||x>l)&&(b.onBlockNumber(x,l),l=x)}catch(x){b.onError?.(x)}},{emitOnBegin:t,interval:o}))})():(()=>{let p=je(["watchBlockNumber",a.uid,t,e]);return Zt(p,{onBlockNumber:i,onError:r},b=>{let x=!0,v=()=>x=!1;return(async()=>{try{let{unsubscribe:y}=await a.transport.subscribe({params:["newHeads"],onData(C){if(!x)return;let A=Ba(C.result?.number);b.onBlockNumber(A,l),l=A},onError(C){b.onError?.(C)}});v=y,x||v()}catch(y){r?.(y)}})(),()=>v()})})()}async function Av(a,{confirmations:t=1,hash:e,onReplaced:i,pollingInterval:r=a.pollingInterval,retryCount:n=6,retryDelay:o=({count:l})=>~~(1<<l)*200,timeout:s}){let l=je(["waitForTransactionReceipt",a.uid,e]),c,u,p,b=!1;return new Promise((x,v)=>{s&&setTimeout(()=>v(new fc({hash:e})),s);let y=Zt(l,{onReplaced:i,resolve:x,reject:v},C=>{let A=ue(a,iu,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:r,async onBlockNumber(H){if(b)return;let z=H,Z=D=>{A(),D(),y()};try{if(p){if(t>1&&(!p.blockNumber||z-p.blockNumber+1n<t))return;Z(()=>C.resolve(p));return}if(c||(b=!0,await ts(async()=>{c=await ue(a,Qn,"getTransaction")({hash:e}),c.blockNumber&&(z=c.blockNumber)},{delay:o,retryCount:n}),b=!1),p=await ue(a,rs,"getTransactionReceipt")({hash:e}),t>1&&(!p.blockNumber||z-p.blockNumber+1n<t))return;Z(()=>C.resolve(p))}catch(D){if(D instanceof ln||D instanceof cn){if(!c){b=!1;return}try{u=c,b=!0;let W=await ts(()=>ue(a,Qt,"getBlock")({blockNumber:z,includeTransactions:!0}),{delay:o,retryCount:n,shouldRetry:({error:Be})=>Be instanceof Hn});b=!1;let J=W.transactions.find(({from:Be,nonce:Ee})=>Be===u.from&&Ee===u.nonce);if(!J||(p=await ue(a,rs,"getTransactionReceipt")({hash:J.hash}),t>1&&(!p.blockNumber||z-p.blockNumber+1n<t)))return;let me="replaced";J.to===u.to&&J.value===u.value?me="repriced":J.from===J.to&&J.value===0n&&(me="cancelled"),Z(()=>{C.onReplaced?.({reason:me,replacedTransaction:u,transaction:J,transactionReceipt:p}),C.resolve(p)})}catch(W){Z(()=>C.reject(W))}}else Z(()=>C.reject(D))}}})})})}si();function Dv(a,{blockTag:t="latest",emitMissed:e=!1,emitOnBegin:i=!1,onBlock:r,onError:n,includeTransactions:o,poll:s,pollingInterval:l=a.pollingInterval}){let c=typeof s<"u"?s:a.transport.type!=="webSocket",u=o??!1,p;return c?(()=>{let v=je(["watchBlocks",a.uid,t,e,i,u,l]);return Zt(v,{onBlock:r,onError:n},y=>Wi(async()=>{try{let C=await ue(a,Qt,"getBlock")({blockTag:t,includeTransactions:u});if(C.number&&p?.number){if(C.number===p.number)return;if(C.number-p.number>1&&e)for(let A=p?.number+1n;A<C.number;A++){let H=await ue(a,Qt,"getBlock")({blockNumber:A,includeTransactions:u});y.onBlock(H,p),p=H}}(!p?.number||t==="pending"&&!C?.number||C.number&&C.number>p.number)&&(y.onBlock(C,p),p=C)}catch(C){y.onError?.(C)}},{emitOnBegin:i,interval:l}))})():(()=>{let v=!0,y=()=>v=!1;return(async()=>{try{let{unsubscribe:C}=await a.transport.subscribe({params:["newHeads"],onData(A){if(!v)return;let z=(a.chain?.formatters?.block?.format||xc)(A.result);r(z,p),p=z},onError(A){n?.(A)}});y=C,v||y()}catch(C){n?.(C)}})(),()=>y()})()}si();Lt();Xo();function Mv(a,{address:t,args:e,batch:i=!0,event:r,events:n,onError:o,onLogs:s,poll:l,pollingInterval:c=a.pollingInterval,strict:u}){let p=typeof l<"u"?l:a.transport.type!=="webSocket",b=u??!1;return p?(()=>{let y=je(["watchEvent",t,e,i,a.uid,r,c]);return Zt(y,{onLogs:s,onError:o},C=>{let A,H,z=!1,Z=Wi(async()=>{if(!z){try{H=await ue(a,Wc,"createEventFilter")({address:t,args:e,event:r,events:n,strict:b})}catch{}z=!0;return}try{let D;if(H)D=await ue(a,$a,"getFilterChanges")({filter:H});else{let W=await ue(a,Ki,"getBlockNumber")({});A&&A!==W?D=await ue(a,zn,"getLogs")({address:t,args:e,event:r,events:n,fromBlock:A+1n,toBlock:W}):D=[],A=W}if(D.length===0)return;if(i)C.onLogs(D);else for(let W of D)C.onLogs([W])}catch(D){H&&D instanceof Vi&&(z=!1),C.onError?.(D)}},{emitOnBegin:!0,interval:c});return async()=>{H&&await ue(a,Xa,"uninstallFilter")({filter:H}),Z()}})})():(()=>{let y=!0,C=()=>y=!1;return(async()=>{try{let A=n??(r?[r]:void 0),H=[];A&&(H=[A.flatMap(Z=>Ai({abi:[Z],eventName:Z.name,args:e}))],r&&(H=H[0]));let{unsubscribe:z}=await a.transport.subscribe({params:["logs",{address:t,topics:H}],onData(Z){if(!y)return;let D=Z.result;try{let{eventName:W,args:J}=Tr({abi:A??[],data:D.data,topics:D.topics,strict:b}),me=Vt(D,{args:J,eventName:W});s([me])}catch(W){let J,me;if(W instanceof mi||W instanceof Si){if(u)return;J=W.abiItem.name,me=W.abiItem.inputs?.some(Ee=>!("name"in Ee&&Ee.name))}let Be=Vt(D,{args:me?[]:{},eventName:J});s([Be])}},onError(Z){o?.(Z)}});C=z,y||C()}catch(A){o?.(A)}})(),()=>C()})()}si();function Pv(a,{batch:t=!0,onError:e,onTransactions:i,poll:r,pollingInterval:n=a.pollingInterval}){return(typeof r<"u"?r:a.transport.type!=="webSocket")?(()=>{let c=je(["watchPendingTransactions",a.uid,t,n]);return Zt(c,{onTransactions:i,onError:e},u=>{let p,b=Wi(async()=>{try{if(!p)try{p=await ue(a,Kc,"createPendingTransactionFilter")({});return}catch(v){throw b(),v}let x=await ue(a,$a,"getFilterChanges")({filter:p});if(x.length===0)return;if(t)u.onTransactions(x);else for(let v of x)u.onTransactions([v])}catch(x){u.onError?.(x)}},{emitOnBegin:!0,interval:n});return async()=>{p&&await ue(a,Xa,"uninstallFilter")({filter:p}),b()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{let{unsubscribe:p}=await a.transport.subscribe({params:["newPendingTransactions"],onData(b){if(!c)return;let x=b.result;i([x])},onError(b){e?.(b)}});u=p,c||u()}catch(p){e?.(p)}})(),()=>u()})()}function Bv(a){return{call:t=>qi(a,t),createBlockFilter:()=>Qg(a),createContractEventFilter:t=>tc(a,t),createEventFilter:t=>Wc(a,t),createPendingTransactionFilter:()=>Kc(a),estimateContractGas:t=>pg(a,t),estimateGas:t=>Vn(a,t),getBalance:t=>Zg(a,t),getBlobBaseFee:()=>Jg(a),getBlock:t=>Qt(a,t),getBlockNumber:t=>Ki(a,t),getBlockTransactionCount:t=>ev(a,t),getBytecode:t=>tv(a,t),getChainId:()=>ji(a),getContractEvents:t=>Sc(a,t),getEnsAddress:t=>zg(a,t),getEnsAvatar:t=>Yg(a,t),getEnsName:t=>$g(a,t),getEnsResolver:t=>Xg(a,t),getEnsText:t=>qc(a,t),getFeeHistory:t=>av(a,t),estimateFeesPerGas:t=>cg(a,t),getFilterChanges:t=>$a(a,t),getFilterLogs:t=>rv(a,t),getGasPrice:()=>Un(a),getLogs:t=>zn(a,t),getProof:t=>vv(a,t),estimateMaxPriorityFeePerGas:t=>lg(a,t),getStorageAt:t=>Lv(a,t),getTransaction:t=>Qn(a,t),getTransactionConfirmations:t=>_v(a,t),getTransactionCount:t=>Ec(a,t),getTransactionReceipt:t=>rs(a,t),multicall:t=>wv(a,t),prepareTransactionRequest:t=>Ya(a,t),readContract:t=>Gt(a,t),sendRawTransaction:t=>jn(a,t),simulateContract:t=>Cg(a,t),verifyMessage:t=>Cv(a,t),verifyTypedData:t=>kv(a,t),uninstallFilter:t=>Xa(a,t),waitForTransactionReceipt:t=>Av(a,t),watchBlocks:t=>Dv(a,t),watchBlockNumber:t=>iu(a,t),watchContractEvent:t=>Mg(a,t),watchEvent:t=>Mv(a,t),watchPendingTransactions:t=>Pv(a,t)}}function os(a){let{key:t="public",name:e="Public Client"}=a;return Hc({...a,key:t,name:e,type:"publicClient"}).extend(Bv)}function Rv(a,t){let{abi:e,args:i,bytecode:r,...n}=t,o=as({abi:e,args:i,bytecode:r});return qn(a,{...n,data:o})}Go();async function Nv(a){return a.account?.type==="local"?[a.account.address]:(await a.request({method:"eth_accounts"})).map(e=>vr(e))}async function Ov(a){return await a.request({method:"wallet_getPermissions"})}Go();async function Hv(a){return(await a.request({method:"eth_requestAccounts"},{retryCount:0})).map(e=>Uy(e))}async function Uv(a,t){return a.request({method:"wallet_requestPermissions",params:[t]},{retryCount:0})}oi();Pe();async function Vv(a,{account:t=a.account,message:e}){if(!t)throw new Fi({docsPath:"/docs/actions/wallet/signMessage"});let i=et(t);if(i.type==="local")return i.signMessage({message:e});let r=(()=>typeof e=="string"?yr(e):e.raw instanceof Uint8Array?Je(e.raw):e.raw)();return a.request({method:"personal_sign",params:[r,i.address]},{retryCount:0})}oi();Pe();Qo();On();async function Gv(a,t){let{account:e=a.account,chain:i=a.chain,...r}=t;if(!e)throw new Fi({docsPath:"/docs/actions/wallet/signTransaction"});let n=et(e);zi({account:n,...t});let o=await ue(a,ji,"getChainId")({});i!==null&&Rc({currentChainId:o,chain:i});let l=(i?.formatters||a.chain?.formatters)?.transactionRequest?.format||Wa;return n.type==="local"?n.signTransaction({...r,chainId:o},{serializer:a.chain?.serializers?.transaction}):await a.request({method:"eth_signTransaction",params:[{...l(r),chainId:he(o),from:n.address}]},{retryCount:0})}oi();Ii();si();async function zv(a,t){let{account:e=a.account,domain:i,message:r,primaryType:n}=t;if(!e)throw new Fi({docsPath:"/docs/actions/wallet/signTypedData"});let o=et(e),s={EIP712Domain:$c({domain:i}),...t.types};if(Yc({domain:i,message:r,primaryType:n,types:s}),o.type==="local")return o.signTypedData({domain:i,message:r,primaryType:n,types:s});let l=je({domain:i??{},message:r,primaryType:n,types:s},(c,u)=>rt(u)?u.toLowerCase():u);return a.request({method:"eth_signTypedData_v4",params:[o.address,l]},{retryCount:0})}Pe();async function Fv(a,{id:t}){await a.request({method:"wallet_switchEthereumChain",params:[{chainId:he(t)}]},{retryCount:0})}async function jv(a,t){return await a.request({method:"wallet_watchAsset",params:t},{retryCount:0})}function qv(a){return{addChain:t=>Rg(a,t),deployContract:t=>Rv(a,t),getAddresses:()=>Nv(a),getChainId:()=>ji(a),getPermissions:()=>Ov(a),prepareTransactionRequest:t=>Ya(a,t),requestAddresses:()=>Hv(a),requestPermissions:t=>Uv(a,t),sendRawTransaction:t=>jn(a,t),sendTransaction:t=>qn(a,t),signMessage:t=>Vv(a,t),signTransaction:t=>Gv(a,t),signTypedData:t=>zv(a,t),switchChain:t=>Fv(a,t),watchAsset:t=>jv(a,t),writeContract:t=>Bg(a,t)}}function eo(a){let{key:t="wallet",name:e="Wallet Client",transport:i}=a;return Hc({...a,key:t,name:e,transport:i,type:"walletClient"}).extend(qv)}Lt();Ve();za();Pe();Wo();var ou=class{constructor(){this.coins={};this.needTip=!0}};var Nr=(D=>(D[D.MAINNET=1]="MAINNET",D[D.TESTNET_RINKEBY=4]="TESTNET_RINKEBY",D[D.ARBITRUM=42161]="ARBITRUM",D[D.ARBITRUM_TESTNET=421611]="ARBITRUM_TESTNET",D[D.AVALANCHE=43114]="AVALANCHE",D[D.AVALANCHE_TESTNET=43113]="AVALANCHE_TESTNET",D[D.POLYGON=137]="POLYGON",D[D.POLYGON_TESTNET=80001]="POLYGON_TESTNET",D[D.FANTOM=250]="FANTOM",D[D.FANTOM_TESTNET=4002]="FANTOM_TESTNET",D[D.OPTIMISM=10]="OPTIMISM",D[D.OPTIMISM_TESTNET=69]="OPTIMISM_TESTNET",D[D.BOBA=288]="BOBA",D[D.BOBA_TESTNET=28]="BOBA_TESTNET",D[D.ESC=20]="ESC",D[D.HECO=128]="HECO",D[D.BSC=56]="BSC",D[D.BSC_TESTNET=97]="BSC_TESTNET",D[D.MATCH=9001]="MATCH",D[D.MATCH_TESTNET=9e3]="MATCH_TESTNET",D[D.CC=1331]="CC",D))(Nr||{});var zt={id:9001,name:"MATCH",network:"MATCH",iconUrl:"",iconBackground:"#fff",nativeCurrency:{decimals:18,name:"MATCH",symbol:"MATCH"},rpcUrls:{default:{http:["https://rpc.matchscan.io"]},public:{http:["https://rpc.matchscan.io"]}},blockExplorers:{default:{name:"matchscan",url:"https://lisbon.matchscan.io"},etherscan:{name:"matchscan",url:"https://lisbon.matchscan.io"}},testnet:!1};var cL={9001:"0x3f76562685E9Cd18ba88C062bBC5999D78275734",56:"0x837656c3f5858692cCdce13BA66e09d2685073df",97:"0x6f4DceCEe81bfB85872BEaBC44C303b7c2f6c108"},uL={9001:"0x96397347Ea2beE29713Bc48749eB277D6A36A407",56:"0x837656c3f5858692cCdce13BA66e09d2685073df",97:"0x6f4DceCEe81bfB85872BEaBC44C303b7c2f6c108"},Xf={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9",56:"0x55d398326f99059ff775485246999027b3197955",97:"0x44004827f2F72566E12884A38f63f72F2a5143ea"},Qf={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9"},Zf={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9"},IH={9001:"0x2418F7F0486deBc9270E16126F36526925EDAAE4"},Jf={97:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab",9001:"0x84d225321122E69406B198e3A9B82Dc1BdF897e6"},pL={9001:"0x945103b2fEa1EAc6cea4d25e9BBaA5284d128b29"},eb={97:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab"},mL={9001:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab"};var da=Xn({id:56,name:"BNB Smart Chain",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{default:{name:"BscScan",url:"https://bscscan.com",apiUrl:"https://api.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}});var Et=Xn({id:97,name:"Binance Smart Chain Testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]}},blockExplorers:{default:{name:"BscScan",url:"https://testnet.bscscan.com",apiUrl:"https://testnet.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0});var Di=Xn({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var rr=class a{constructor(){this.create_contract=null;this.edit_account=null;this.account_contract=null;this.tokenId=0}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"}async getAccountVoFromServer(){let t=await q.requestPost("cybertron-sys-api/api/v1/account/find",{address:Y.instance.walletAddress},!1,!1);if(t){let e=new ou;return Object.assign(e,t),console.log("info========"+JSON.stringify(e)),e}return t}async createAcccount(t,e,i,r){try{var n;let c;X.vType==2?(n=zt.id,c=pL[n]):X.vType==1?(n=zt.id,c=Jf[n]):(n=Et.id,c=Jf[n]);let u=await Y.instance.walletClient.getChainId();if(n!==u){var o=await Y.instance.switchChain(n);if(!o){K.instance.hideLoading(),console.log("切换失败，请手动切换");return}}if(!c)return K.instance.hideLoading(),ie.instance.notice(f.instance.getLanguage(1173,u)),!1;var s=await Y.instance.walletClient.writeContract({account:Y.instance.walletAddress,address:c,abi:oe.CREATE_ACCOUNT_ABI,functionName:"register",args:[t,r,e,i]});return console.log("============"+s),await Y.instance.publicClient.waitForTransactionReceipt({hash:s}),console.log(`Tx successful with hash: ${s}`),console.log("============"),s}catch(c){K.instance.hideLoading();var l=c.shortMessage;if(l&&l.indexOf("does not match")!=-1&&(l=f.instance.getLanguage(1118)),console.log(l),ie.instance.notice(l),c instanceof B){let u=c.walk(p=>p instanceof Xt);if(u instanceof Xt){let p=u.data?.errorName??"";console.log("============errorName: "+p)}}return null}}async updateProfile(t,e,i){var r=S.instance.playerDto.sex,n=S.instance.playerDto;let o=await q.requestPost("wxgame/player/changeInfo",{name:t,sex:r,icon:e,country:i});return o?(n.icon=o.icon,n.country=o.country,n.name=o.name,n.sex=o.sex,n):null}async getTokenId(){return this.tokenId?this.tokenId:(this.tokenId=await this.account_contract.methods.tokenOfOwnerByIndex(Y.instance.walletAddress,0).call(),this.tokenId=parseInt(this.tokenId+""),this.tokenId)}};var Pt=class{constructor(){}};Pt.UPDATE_LOCAL_WALLET_LIST_EVENT="WalletEvent:UPDATE_LOCAL_WALLET_LIST_EVENT",Pt.TRANSFER_LOCAL_WALLET_EVENT="WalletEvent:TRANSFER_LOCAL_WALLET_EVENT";var ss=class{};var nr=class a{constructor(){this.assets_ary=[];this.assets_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){typeof window.ethereum>"u"||(this.assets_contract=new window.web3.eth.Contract(oe.WITHDRAW_AND_RECHARGE_ABI,oe.WITHDRAW_AND_RECHARGE_ADDRESS))}async depositWallet(t,e){if(K.instance.showLoading(!0),!await Y.instance.allowanceAddressByTokenAddress(oe.WITHDRAW_AND_RECHARGE_ADDRESS,t)){K.instance.hideLoading(),ie.instance.notice(f.instance.getLanguage(15));return}return e=window.web3.utils.toWei(e+""),await this.assets_contract.methods.recharge(t.toLowerCase(),e).send({from:Y.instance.walletAddress},(r,n)=>{if(r)return K.instance.hideLoading(),!1}),!0}async withdrawToken(t){return K.instance.showLoading(!0),await this.assets_contract.methods.withdrawToken(t.tokenAddress,t.to,t.amount,t.timestamp,t.hash,t.r,t.s,t.v).send({from:Y.instance.walletAddress},(e,i)=>{if(e)return K.instance.hideLoading(),!1}),!0}async updateAssetsBalance(){xi.instance.walletDic==null&&(xi.instance.walletDic=new le);for(let t of this.assets_ary){let e=t[0],i=t[1],r=await Y.instance.getERC20TokenBalance(i);r=parseInt(r);let n=xi.instance.walletDic.get(e);n||(n=new ss,n.itemId=e,n.value=0,xi.instance.walletDic.set(e,n)),n.ethValue=r}L.intance.event(Pt.UPDATE_LOCAL_WALLET_LIST_EVENT)}updateCwt(t){let e=xi.instance.walletDic.get(Yt.ASSETS_TOX);e||(e=new ss,e.itemId=Yt.ASSETS_TOX,xi.instance.walletDic.set(Yt.ASSETS_TOX,e)),e.ethValue=t}async rechargeToken(t,e=null,i){try{if(!await Y.instance.newAllowanceAddress(i,e))return K.instance.hideLoading(),ie.instance.notice(f.instance.getLanguage(15)),!1;let o=tr(t+"");var r=await Y.instance.walletClient.writeContract({account:Y.instance.walletAddress,address:i,abi:oe.RECHANGE_ABI,functionName:"depositToken",args:[e,o]});let s=await Y.instance.publicClient.waitForTransactionReceipt({hash:r});if(s==null)console.log("等待事务确认中...");else return console.log("事务已被确认:",s),!0}catch(n){K.instance.hideLoading(),console.log(n),n instanceof Error?n.message.includes("does not match the target chain for the transaction")?L.intance.event(_.CHANGE_ASSET_CHAIN):console.log("Error message does not contain the specified character."):console.log("An error occurred, but it is not an instance of Error.")}}};var su=p0(dL());var Jt=class{static getInviteUrl(){return window.location.origin+"?invite="+this.encode(Y.instance.walletAddress)}static encode(t){for(var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=e.length,r=e.split(""),n="",o,s,l,c,u=0;u<t.length;u++)o=t.charCodeAt(u),s=o%i,o=(o-s)/i,l=o%i,o=(o-l)/i,c=o%i,n+=r[c]+r[l]+r[s];return window.btoa(n)}static decode(t){t=window.atob(t);var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=e.length,r,n,o,s,l=0,c;c=new Array(Math.floor(t.length/3)),r=c.length;for(var u=0;u<r;u++)n=e.indexOf(t.charAt(l)),l++,o=e.indexOf(t.charAt(l)),l++,s=e.indexOf(t.charAt(l)),l++,c[u]=n*i*i+o*i+s;return r=decodeCharCode(c.join(",")),r}static getQueryString(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return i!=null?i[2]:""}static getInviteWalletAddress(){let t=this.getQueryString("invite");return t&&(t=this.decode(t)),t}static toWei(t,e){let i=t*10**parseInt(e);return window.web3.utils.toBN("0x"+i.toString(16)).toString()}static fromWei(t,e,i=0){if(!t)return 0;let r=t.length-e+i;if(r<=0)return 0;let n=t.toString().slice(0,r);if(i){let o=n.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";n=s+n}else n=n.slice(0,n.length-i)+"."+n.slice(n.length-i)}return n}static deepClone(t){let e=new le;for(let i in t)typeof t[i]=="function"?e[i]=t[i]:e[i]=JSON.parse(JSON.stringify(t[i]));return e}};var sw=`abdikace
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
`);var lw=`abandon
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
`);var cw=`abaisser
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
`);var uw=`abaco
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
`);var pw=`あいこくしん
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
`);var mw=`가격
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
`);var dw=`的
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
`);var hw=`ábaco
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
`);var fw=`的
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
`);lL();Pe();function ls(){return Je($f.utils.randomPrivateKey())}var Y=class a{constructor(){this.tokenContract=null;this.hero_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){if(typeof window.ethereum>"u"){console.log("2222"),ie.instance.notice(f.instance.getLanguage("130"));return}console.log("ethereum",window.ethereum),we.instance.sendCustumEvent(10),this.walletClient=eo({transport:Wn(window.ethereum)});let t=await a.instance.walletClient.getChainId();var e=this.getChain(t);e||(ie.instance.notice(f.instance.getLanguage(1171)),e=zt),this.publicClient=os({chain:e,transport:is()}),this.walletClient=eo({chain:e,transport:Wn(window.ethereum)});let i=await a.instance.publicClient.getChainId();console.log("clientChainId",t,i),await sf(),console.log("5555"),console.log("6666"),we.instance.sendCustumEvent(12),this.registerProxy(),console.log("7777"),we.instance.sendCustumEvent(17)}async registerProxy(){console.log("888"),rr.instance.init()}async getWalletAddress(){if(this.walletAddress)return this.walletAddress;let[t]=await this.walletClient.requestAddresses();return console.log("address:"+t),t;if(await sf(),ft.type==ft.TYPE_TRUST)try{console.log("initWeb3 -3");let e=await ft.trustProvider.request({method:"eth_requestAccounts"});return console.log("initWeb3 -4"),console.log(e),e[0]}catch(e){console.log("initWeb3 -5"+e),e.code===4001&&console.error("User denied connection.")}else if(ft.type==ft.TYPE_WEB3)return(await window.ethereum.request({method:"eth_requestAccounts"}))[0];return null}async dappLogin(){console.log("dappLogin this.walletAddress: "+this.walletAddress),we.instance.sendCustumEvent(13),this.walletAddress=await this.getWalletAddress(),we.instance.sendCustumEvent(14),console.log("login to server",1),await this.signAndLogin(),console.log("login success",1)}getChainId(){let t="";return typeof window.ethereum>"u"&&(t="0x38"),(window.ethereum.chainId+"").indexOf("0x")==-1?t="0x"+window.ethereum.chainId.toString(16):t=window.ethereum.chainId,t!=="0x38"&&t!=="0x61"&&ie.instance.notice(f.instance.getLanguage(18)),t}async signAndLogin(t=!1){console.log("signAndLogin mustSign: "+t);var e=!0;let i=new Date().getTime(),r="",n="",o="",s="";if(X.Debug!=0)e=!1;else if(!t&&localStorage.getItem("TOX-COOKIE"+this.walletAddress)&&X.Debug==0){let b=localStorage.getItem("TOX-COOKIE"+a.instance.walletAddress),x=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);x=Jt.decode(x);let v=x.split("&");i=parseFloat(v[0]),r=v[1],n=v[2],o=v[3],s=v[4],b&&i&&r&&n&&o&&s&&(e=!1),console.log("needSign: "+e)}if(e){console.log("111");var l=ls().substring(0,32);r=Je(l,{size:32}),console.log("222"),i=new Date().getTime();let x=this.walletAddress+r+i,v=new su.default("SHA-256","TEXT",{encoding:"UTF8"});v.update(x);let y=v.getHash("HEX");console.log("进入签名",1);let C=await this.walletClient.signMessage({account:this.walletAddress,message:y});console.log("签名结束",1);let A=C.substring(2);n="0x"+A.substring(0,64),o="0x"+A.substring(64,128),s="0x"+A.substring(128,130)}let c={debug:X.Debug,address:this.walletAddress,time:i,randomHex:r,r:n,s:o,v:s};we.instance.sendCustumEvent(15);let u=await q.requestPost("wxgame/player/login",c,!1,!1);if(u){console.log("服务器登录成功"),we.instance.sendCustumEvent(16),localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,u.loginToken);var p=Jt.encode(i+"&"+r+"&"+n+"&"+o+"&"+s);localStorage.setItem("TOX-COOKIE-CODE"+a.instance.walletAddress,p)}else V.intance.openModule(h.NoServerView);L.intance.event(_.EVENT_LOGIN_GAME_END,u)}async main(){let t=os({chain:Di,transport:is()}),e=eo({chain:Di,transport:Wn(window.ethereum)}),i=await t.getBalance({address:"0x55d398326f99059fF775485246999027B3197955"});console.log("balance:"+i);let[r]=await e.requestAddresses();console.log("address:"+r);let n=await e.signMessage({account:r,message:"Hello world!"});console.log("address: "+r),console.log("message: Hello world!"),console.log("signature: "+n);let o=await t.verifyMessage({address:r,message:"Hello world!",signature:n});console.log("valid: "+o);let l=await(await fetch("http://localhost:3000/api/login",{method:"POST",body:JSON.stringify({address:e.account.address,signature:n})})).json();console.log("data: "+l)}async refreshToken(){let t,e=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);e=Jt.decode(e);let i=e.split("&"),r=parseFloat(i[0]),n=i[1],o=i[2],s=i[3],l=i[4];if(r&&n&&o&&s&&l){let c={debug:X.Debug,address:this.walletAddress,time:r,randomHex:n,r:o,s,v:l};t=await q.requestPost("wxgame/player/getJwt",c,!1,!1).catch(u=>{}),t&&localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,t.loginToken)}return t}async checkNickName(t){console.log("checkNickName");let e={name:t,address:this.walletAddress};return await q.requestPost("wxgame/player/nameCheck",e,!1,!1).catch(r=>{K.instance.hideLoading(),console.log("checkResult 失败")})}waitGetAccount(){Laya.timer.loop(2e3,this,this.getAcccount)}async getAcccount(){console.log("getAcccount");var t=!0;let e=new Date().getTime(),i="",r="",n="",o="";if(X.Debug!=0)t=!1;else{let u=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);u=Jt.decode(u);let p=u.split("&");e=parseFloat(p[0]),i=p[1],r=p[2],n=p[3],o=p[4],e&&i&&r&&n&&o&&(t=!1),console.log("needSign: "+t)}if(t){var s=ls().substring(0,32);i=Je(s,{size:32}),e=new Date().getTime();let p=this.walletAddress+i+e,b=new su.default("SHA-256","TEXT",{encoding:"UTF8"});b.update(p);let x=b.getHash("HEX");console.log("进入签名",1);let v=await this.walletClient.signMessage({account:this.walletAddress,message:x});console.log("签名结束",1);let y=v.substring(2);r="0x"+y.substring(0,64),n="0x"+y.substring(64,128),o="0x"+y.substring(128,130)}let l,c={address:this.walletAddress,time:e,randomHex:i,r,s:n,v:o};if(l=await q.requestPost("wxgame/player/getAccount",c,!1,!1).catch(u=>{}),l){Laya.timer.clear(this,this.getAcccount);let u=l.playerDto;localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,l.loginToken),L.intance.event(_.EVENT_WAIT_PLAYERINFO,u)}}async createAcccount(t,e,i,r){console.log("createAcccount");var n=!0;let o=new Date().getTime(),s="",l="",c="",u="";if(X.Debug!=0)n=!1;else{let v=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);v=Jt.decode(v);let y=v.split("&");o=parseFloat(y[0]),s=y[1],l=y[2],c=y[3],u=y[4],o&&s&&l&&c&&u&&(n=!1),console.log("needSign: "+n)}if(n){var p=ls().substring(0,32);s=Je(p,{size:32}),o=new Date().getTime();let y=this.walletAddress+s+o,C=new su.default("SHA-256","TEXT",{encoding:"UTF8"});C.update(y);let A=C.getHash("HEX");console.log("进入签名",1);let H=await this.walletClient.signMessage({account:this.walletAddress,message:A});console.log("签名结束",1);let z=H.substring(2);l="0x"+z.substring(0,64),c="0x"+z.substring(64,128),u="0x"+z.substring(128,130)}let b,x={name:t,sex:e,icon:i,country:r,debug:X.Debug,address:this.walletAddress,time:o,randomHex:s,r:l,s:c,v:u};if(b=await q.requestPost("wxgame/player/create",x,!1,!1).catch(v=>{}),b){let v=b.playerDto;return localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,b.loginToken),v}return null}async getBalance(){return 0}async allowanceAddress(t){}async newAllowanceAddress(t,e){let i=a.instance.walletAddress,r=t;try{console.log("查看是否已经授权, owner:"+i+", spender:"+r+", publicClient.chain.id:"+this.publicClient.chain.id);let n=await a.instance.publicClient.readContract({address:e,abi:oe.TOKEN_ERC20ABI,functionName:"allowance",args:[i,r]});if(n=="0"){console.log("未授权，进行授权, owner:"+i+", allowance:"+n+", walletClient.chain.id:"+this.walletClient.chain.id);let o=await a.instance.walletClient.writeContract({address:e,abi:oe.TOKEN_ERC20ABI,functionName:"approve",args:[r,"100000000000000000000000000000000000000000000000"],account:i});return console.log("============"+o),await a.instance.publicClient.waitForTransactionReceipt({hash:o}),console.log(`Tx successful with hash: ${o}`),!0}else return console.log("已授权, owner:"+i+", allowance:"+n),!0}catch(n){if(console.log("授权错误====》",n),n instanceof Error){let o=n.message;console.log("授权错误====》",o)}}}async allowanceAddressByTokenAddress(t,e){let i=new window.web3.eth.Contract(oe.TOKEN_ERC20ABI,e);return await i.methods.allowance(this.walletAddress,t).call()=="0"&&(console.log("ERC20 allowance!"),await i.methods.approve(t,"100000000000000000000000000000000000000000000000").send({from:this.walletAddress},(n,o)=>{if(n)return K.instance.hideLoading(),!1})),!0}async getERC20TokenBalance(t){return window.ethereum,await new window.web3.eth.Contract(oe.TOKEN_ERC20ABI,t).methods.balanceOf(this.walletAddress).call()}async getBalance2(t){console.log("getBalance2 publicClient.chain.id:"+this.publicClient.chain.id);let e=this.walletAddress;return await this.publicClient.readContract({address:t,abi:oe.TOKEN_ERC20ABI,functionName:"balanceOf",args:[e]})}async getHeroStatus(t){return await this.hero_contract.methods.getStatus(parseInt(t)).call()}async checkHeroIsBuzy(t){let e=await this.getHeroStatus(t);return parseInt(e)?(ie.instance.notice(f.instance.getLanguage(19)),!0):!1}async switchChain(t){var e=this.getChainName(t);if(X.isInto&&Laya.Browser.onIOS)return ie.instance.notice(f.instance.getLanguage(1172,e)),!1;try{console.log("switchChain id:"+t),await this.walletClient.switchChain({id:t})}catch(i){if(console.log(i),i instanceof Error){let r=i.message;console.log("切换错误====》",r)}return ie.instance.notice(f.instance.getLanguage(1172,e)),!1}return await this.resetPublicAndWallet(t),!0}async addChain(t){console.log(t);let e=null;switch(t){case 97:e=Et;break;case 9001:e=zt;break}let i=await this.walletClient.addChain({chain:e});console.log(i)}getChainNameByID(t){for(let e in Nr)if(Number(Nr[e])==t)return e;return""}getChain(t){var e=null;switch(t){case Et.id:e=Et;break;case zt.id:e=zt;break;case Di.id:e=Di;break;case da.id:e=da;break}return e}getChainName(t){var e="";switch(t){case Et.id:e=Et.name;break;case zt.id:e=zt.name;break;case Di.id:e=Di.name;break;case da.id:e=da.name;break}return e}getCoinAddress(t){var e={};switch(t){case Fe.TYPE_TOX:e=X.vType==0?uL:cL;break;case Fe.TYPE_USDT:e=X.vType==0?Xf:Xf;break;case Fe.TYPE_BTC:e=X.vType==0?Qf:Qf;break;case Fe.TYPE_ETH:e=X.vType==0?Zf:Zf;break}return e}async resetPublicAndWallet(t){switch(console.log("resetPublicAndWallet chain:"+t),t){case Et.id:await a.instance.reInitPublicClient(Et),await a.instance.reInitWalletClient(Et);break;case zt.id:await a.instance.reInitPublicClient(zt),await a.instance.reInitWalletClient(zt);break;case Di.id:await a.instance.reInitPublicClient(Di),await a.instance.reInitWalletClient(Di);break;case da.id:await a.instance.reInitPublicClient(da),await a.instance.reInitWalletClient(da);break}}reInitPublicClient(t){console.log("reInitPublicClient chain:"+t),this.publicClient=os({chain:t,transport:is()})}reInitWalletClient(t){console.log("reInitWalletClient chain:"+t),this.walletClient=eo({chain:t,transport:Wn(window.ethereum)})}};var ha=class ha{constructor(t,e){this._lineIndex=0;this._isShow=!1;this._alpha=.6;this.isInit=!1;this._isRelease=!0;this._count=0;this.maxCount=1e3;this.prevX=0;this.prevY=0;this._stage=t,this._isRelease=e,this._actionLineList=[],this._time=new Date().getTime();let i,r,n,o,s=function(u){i=u.stageX,r=u.stageY,n=i,o=r},l=function(u){n=u.stageX,o=u.stageY},c=function(u){let p=Laya.stage.width-(n-i)<160,b=Laya.stage.height-(o-r)<160;p&&b&&ui.debugger&&(Laya.Browser.window.console.log=ui.addConsoleLog,ui.debugger.showOrHide())};Laya.stage.on(Laya.Event.MOUSE_DOWN,this,s),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,l),Laya.stage.on(Laya.Event.MOUSE_UP,this,c)}initDebugView(){if(!this.isInit){this.totalW=Laya.stage.width,this.totalH=Laya.stage.height/2,this.bigContainer=new Laya.Sprite,this.bigContainer.zOrder=2e3,this.bigContainer.name="bigContainerDebug",this.bgContainer=new Laya.Sprite,this._bgSp=new Laya.Sprite,this._bgSp.alpha=this._alpha,this._bgSp.graphics.drawRect(0,0,this.totalW,this.totalH,"#000000"),this._bgSp.mouseEnabled=!1,this._debugInfoTf=new Laya.Text,this._debugInfoTf.color="#ffffff",this._debugInfoTf.width=this.totalW-10,this._debugInfoTf.height=this.totalH-10,this._debugInfoTf.overflow="scroll",this._debugInfoTf.wordWrap=!0;let t="[LOADINFO - DEBUGGER]";this.appendText("加载调试信息 "+t,0,!1),this._closeTf=new Laya.Label,this._closeTf.color="#ff0000",this._closeTf.valign="middle",this._closeTf.width=55,this._closeTf.height=55,this._closeTf.borderColor=ha.DEFAULT_COLOR,this._closeTf.text="关闭",this._autoScrollTf=new Laya.Label,this._autoScrollTf.color="#ff0000",this._autoScrollTf.valign="middle",this._autoScrollTf.width=55,this._autoScrollTf.height=55,this._autoScrollTf.borderColor=ha.DEFAULT_COLOR,this._autoScrollTf.text="自动卷屏",this._bgAlpha0=new Laya.Label,this._bgAlpha0.color="#ff0000",this._bgAlpha0.valign="middle",this._bgAlpha0.width=55,this._bgAlpha0.height=55,this._bgAlpha0.borderColor=ha.DEFAULT_COLOR,this._bgAlpha0.text="背景-",this._bgAlpha1=new Laya.Label,this._bgAlpha1.color="#ff0000",this._bgAlpha1.valign="middle",this._bgAlpha1.width=55,this._bgAlpha1.height=55,this._bgAlpha1.borderColor=ha.DEFAULT_COLOR,this._bgAlpha1.text="背景+",this._clearTf=new Laya.Label,this._clearTf.color="#ff0000",this._clearTf.valign="middle",this._clearTf.width=55,this._clearTf.height=55,this._clearTf.borderColor=ha.DEFAULT_COLOR,this._clearTf.text="清理",this._testTf=new Laya.Label,this._testTf.color="#ff0000",this._testTf.width=55,this._testTf.height=55,this._testTf.borderColor=ha.DEFAULT_COLOR,this._testTf.text="点穿",this.bgContainer.x=5,this.bgContainer.y=5,this._debugInfoTf.x=5,this._debugInfoTf.y=5,this.bgContainer.addChild(this._bgSp),this.bgContainer.addChild(this._debugInfoTf),this._closeTf.x=this.totalW-60,this._closeTf.y=5,this.bgContainer.addChild(this._closeTf),this._autoScrollTf.x=this.totalW-60,this._autoScrollTf.y=105,this.bgContainer.addChild(this._autoScrollTf),this._bgAlpha0.x=this.totalW-60,this._bgAlpha0.y=205,this.bgContainer.addChild(this._bgAlpha0),this._bgAlpha1.x=this.totalW-60,this._bgAlpha1.y=305,this.bgContainer.addChild(this._bgAlpha1),this._clearTf.x=this.totalW-60,this._clearTf.y=405,this.bgContainer.addChild(this._clearTf),this._testTf.x=this.totalW-60,this._testTf.y=505,this.bigContainer.addChild(this.bgContainer),this.bigContainer.addChild(this._testTf),this._autoScroll=!0,this._hide=!0,this._debugInfoTf.on(Laya.Event.MOUSE_DOWN,this,this.startScrollText),this._closeTf.on(Laya.Event.CLICK,this,this.onCloseTfClick),this._autoScrollTf.on(Laya.Event.CLICK,this,this.onAutoScrollTfClick),this._bgAlpha0.on(Laya.Event.CLICK,this,this.onBgAlpha0),this._bgAlpha1.on(Laya.Event.CLICK,this,this.onBgAlpha1),this._clearTf.on(Laya.Event.CLICK,this,this.onClearTfClick),this._testTf.on(Laya.Event.CLICK,this,this.onTestTfClick),this.isInit=!0}}show(){this.initDebugView(),this._stage.addChild(this.bigContainer),this._isShow=!0,this.updateView()}hide(){this.initDebugView(),this.bigContainer.parent&&this.bigContainer.parent.removeChild(this.bigContainer),this._isShow=!1,this.updateView()}showOrHide(){this._isShow=!this._isShow,this._isShow?this.show():this.hide()}appendText(t,e=0,i=!0){if(i){let r=new Date().getTime()-this._time;t+="  ["+(r/1e3).toFixed(3)+"]"}this._actionLineList.push([t+`
`,e]),this._lineIndex>=200&&(this._actionLineList.splice(0,20),this._lineIndex-=20),this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf&&(this._debugInfoTf.text="")),this._isShow&&(this._currentLine=this._actionLineList[this._lineIndex++],this._debugInfoTf&&(this._debugInfoTf.text+=this._currentLine[0]),this._autoScroll&&this._debugInfoTf&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY))}updateView(){if(this._isShow){this._count=0,this._debugInfoTf.text="";let t=this._actionLineList.length;for(this._lineIndex=0;this._lineIndex<t;++this._lineIndex)this._currentLine=this._actionLineList[this._lineIndex],this._debugInfoTf.text+=this._currentLine[0],this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf.text="");this._autoScroll&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY)}else this._debugInfoTf.text=""}onCloseTfClick(t){this.hide()}onAutoScrollTfClick(t){this._autoScroll=!this._autoScroll,this._autoScroll?this._autoScrollTf.text="自动卷屏":this._autoScrollTf.text="手动卷屏"}onBgAlpha0(t){this._alpha-=.1,this._alpha<=0&&(this._alpha=0),this._bgSp.alpha=this._alpha}onBgAlpha1(t){this._alpha+=.1,this._alpha>=1&&(this._alpha=1),this._bgSp.alpha=this._alpha}onClearTfClick(t){this._debugInfoTf.text="",this._actionLineList.length=0,this._lineIndex=0}onTestTfClick(t){this.bgContainer.mouseEnabled=!this.bgContainer.mouseEnabled}set testFun(t){this._testFun=t}get bgSp(){return this._bgSp}startScrollText(t){this.prevX=this._debugInfoTf.mouseX,this.prevY=this._debugInfoTf.mouseY,Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.finishScrollText)}finishScrollText(t){Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.finishScrollText)}scrollText(t){let e=this._debugInfoTf.mouseX,i=this._debugInfoTf.mouseY;this._debugInfoTf.scrollX+=this.prevX-e,this._debugInfoTf.scrollY+=this.prevY-i,this.prevX=e,this.prevY=i}};ha.DEFAULT_COLOR="#ffffff";var lu=ha;var ui=class a{static Initialize(t,e){a.isRelease=e,this.debugger==null&&(this.debugger=new lu(t,e))}static log(t,e=0,i=0){var r=Le.GetLogTime+" "+t;e&&a.addLog(r,e,i)}static addLog(t,e=0,i=0){this.debugger&&this.debugger.appendText(t,i),console.log(t)}static addConsoleLog(...t){a.debugger&&a.debugger.appendText(t,0)}};var hL=Laya.HttpRequest,ei=class ei{static requestGet(t,e,i=!1,r=!0){return new Promise((n,o)=>{var s=Laya.Pool.getItem("HttpRequest");s||(s=new hL),s.http.timeout=2e3,s.on(Laya.Event.COMPLETE,null,b),s.on(Laya.Event.ERROR,null,x),s.http.onreadystatechange=()=>{if(s.http.readyState===XMLHttpRequest.DONE){var y=s.http.status;y>=200&&y<400||(o(),v())}};let l=localStorage.getItem("TOX-COOKIE"+Y.instance.walletAddress),c=["Content-Type","application/json"];l&&(c=[...c,"Authorization",l]);let u=ei.httpRoot+"/"+t+p(e);ei.httpRoot!="https://api.cybertron.world"&&ui.log("REQUEST_GET "+u,1),s.send(u,null,"get","json",c);function p(y){if(typeof y=="string")return y;let C="";for(let A in y)C+="&"+A+"="+y[A];return C}function b(y){y.code==="0"?n(y.data):(Ce.instance.showErrorWord(parseInt(y.code)),o(y.code)),v()}function x(y,C){debugger;o(y),v()}function v(){s.off(Laya.Event.COMPLETE,null,b),s.off(Laya.Event.ERROR,null,x),Laya.Pool.recover("HttpRequest",s)}})}static startHeart(){Laya.timer.loop(1e3,this,this.onHeart)}static async onHeart(){let t=new Date().getTime();var e=await this.requestPost("wxgame/sys/ping",{},!0,!0),r=new Date().getTime()-t;L.intance.event(_.EVENT_Game_Delay,r);var n=e.time;S.instance.m_serverTime=n;var o=e.resChange,s=e.itemChange;o&&o.length>0&&(S.instance.moneyInfoHander(o,!0,!1),L.intance.event(Pt.UPDATE_LOCAL_WALLET_LIST_EVENT)),s&&s.length>0&&S.instance.itemsDataUpdataHandler(s,!0,!1)}static requestPost(t,e,i=!1,r=!0){let n=localStorage.getItem("TOX-COOKIE"+Y.instance.walletAddress);return i&&!n?[]:new Promise((o,s)=>{var l=Laya.Pool.getItem("HttpRequest");l||(l=new hL),l.http.timeout=1e4,l.once(Laya.Event.COMPLETE,null,p),l.once(Laya.Event.ERROR,null,b);let c=[];n&&r&&(c=[...c,"Authorization",n]);var u=ei.seq+1;ei.seq=u,ei.httpRoot!="https://api.cybertron.world"&&t!="wxgame/sys/ping"&&console.log(Le.GetLogTime+" "+u+" >>> HTTP_POST "+ei.httpRoot+"/"+t+" "+JSON.stringify(e),n),l.send(ei.httpRoot+"/"+t,e,"post","json",c);async function p(v){if(ei.httpRoot!="https://api.cybertron.world"&&(X.Debug>0||t!="wxgame/sys/ping")&&console.log(Le.GetLogTime+" "+u+" <<< hTTP_RCV data: "+JSON.stringify(v),1),v.errorCode==0||v.errorCode==="0")o(v);else{if(v.errorCode===10)Le.heroNotEnought();else if(v.errorCode===18)Le.titickNotEnought();else if(v.errorCode===26)Le.RemError();else if(v.errorCode!==29)if(v.errorCode===30)Le.NoHeroError(Ce.instance.get(v.errorCode));else if(v.errorCode===32)Le.NoHeroError(Ce.instance.get(v.errorCode));else if(v.errorCode===2||v.errorCode===21)Le.alertNoAll(Ce.instance.get(v.errorCode));else if(v.errorCode===5)if(X.Debug==0){localStorage.setItem("TOX-COOKIE"+Y.instance.walletAddress,"");var y=await Y.instance.refreshToken();y&&ei.requestPost(t,e,i,r)}else localStorage.setItem("TOX-COOKIE"+Y.instance.walletAddress,""),Ce.instance.showErrorWord(parseInt(v.errorCode));else v.errorCode===17?X.Debug==0?(localStorage.setItem("TOX-COOKIE"+Y.instance.walletAddress,""),Y.instance.signAndLogin(),Ce.instance.showErrorWord(parseInt(v.errorCode))):(localStorage.setItem("TOX-COOKIE"+Y.instance.walletAddress,""),Ce.instance.showErrorWord(parseInt(v.errorCode))):v.errorCode===9?(L.intance.event(_.EVENT_CLOSE_MODULE,h.EnterRoomView),Le.commTipWithYes(Ce.instance.get(v.errorCode))):Ce.instance.showErrorWord(parseInt(v.errorCode));s(v.errorCode)}x()}function b(v,y){console.log("errorHandler data: "+v,1),Ce.instance.showErrorWord(500),s(v),x()}function x(){l.off(Laya.Event.COMPLETE,null,p),l.off(Laya.Event.ERROR,null,b),Laya.Pool.recover("HttpRequest",l)}})}};ei.httpRoot=getServer(),ei.needHeart=!0,ei.seq=0;var q=ei;var Q=class a{constructor(){this._inited=!1;this.stopAll=!1;this.heroReadyDic=new le;this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}get matchDto(){return this._matchDto}set matchDto(t){this._matchDto=t,t&&t.startTime-t.nowTime>0?this.stopAll=!0:this.stopAll=!1}setMatchRes(){this.heroReadyDic=new le;var t=this.roomDto.members.length,e=[],i=this.currArenaItem.mapid;if(this.heroReadyDic.get("map_"+i)==null){var i=a.instance.currArenaItem.mapid,r=M.instance.getMapImg(i);e.push(r);var n=M.instance.getMapPrefab(i);e.push(n),this.heroReadyDic.set("map_"+i,!0)}for(var o=0;o<t;o++){var s=this.roomDto.members[o];if(this.heroReadyDic.get(s.heroId+"_"+s.heroColor)==null){var l=F.intance.m_dicHeros.get(s.heroId),c=M.instance.getHeroSkRes(l.serialId,s.heroColor);e.push({url:c,type:Laya.Loader.SPINE}),this.heroReadyDic.set(s.heroId+"_"+s.heroColor,!0)}}e.length>0&&Laya.loader.load(e,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{})}onPreAssetPress1(t){}async checkMatchRankData(){if(this.reward==null){let t=await q.requestPost("wxgame/room/balanceInfo",{roomId:a.instance.matchDto.roomId});$e.instance.isMatching=!1,a.instance.reward==null&&(a.instance.reward=t.reward,V.intance.openModule(h.MatchEndRankView,t.rankList))}}onGoMatchEndRank(t,e){$e.instance.isMatching=!1,this.reward==null&&(a.instance.reward=e,V.intance.openModule(h.MatchEndRankView,t))}clearData(){this.roomDto=null,this.matchDto=null,this.reward=null,this.heroReadyDic=null,this.currArenaItem=null,O.instance.clearData(),q.needHeart=!0,De.instance.playMusicByName(De.soundName_bg,".mp3"),Ue.instance.needPop=!0,Kt.instance.startShow()}};var cs=class cs{constructor(){this.targetId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return cs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeStringStringMap(e.param),t.writeInt(e.skillId),t.writeLong(e.targetId),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new cs,i=t.readStringStringMap();e.param=i;let r=t.readInt();e.skillId=r;let n=t.readLong();e.targetId=n;let o=t.readInt();return e.type=o,e}};cs.PROTOCOL_ID=1031;var ab=cs,cu=ab;var us=class us{constructor(){this.targetId=0;this.attackType=0;this.skillId=0}protocolId(){return us.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.attackType),t.writeInt(e.skillId),t.writeLong(e.targetId))}static read(t){if(!t.readBoolean())return null;let e=new us,i=t.readInt();e.attackType=i;let r=t.readInt();e.skillId=r;let n=t.readLong();return e.targetId=n,e}};us.PROTOCOL_ID=1021;var rb=us,uu=rb;var ps=class ps{protocolId(){return ps.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new ps:null}};ps.PROTOCOL_ID=1025;var nb=ps,pu=nb;var ms=class ms{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return ms.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeInt(e.dire),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new ms,i=t.readInt();e.area=i;let r=t.readInt();e.dire=r;let n=t.readInt();e.speed=n;let o=t.readLong();e.time=o;let s=t.readInt();e.x=s;let l=t.readInt();return e.y=l,e}};ms.PROTOCOL_ID=1013;var ob=ms,mu=ob;var ds=class ds{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.skillId=0;this.sourceId=0;this.time=0}protocolId(){return ds.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.skillId),t.writeLong(e.sourceId),t.writeLong(e.targetId),t.writeInt(e.targetX),t.writeInt(e.targetY),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new ds,i=t.readInt();e.skillId=i;let r=t.readLong();e.sourceId=r;let n=t.readLong();e.targetId=n;let o=t.readInt();e.targetX=o;let s=t.readInt();e.targetY=s;let l=t.readLong();return e.time=l,e}};ds.PROTOCOL_ID=1035;var sb=ds,du=sb;var St=class a{constructor(){}static judgePosition(t,e){let i=Math.atan2(e,t)*180/Math.PI;return i<0&&(i+=360),Math.floor(i)}static distancePoint(t,e,i,r){return Math.sqrt((t-i)*(t-i)+(e-r)*(e-r))}get2D_Distance(t,e){return Math.sqrt(Math.pow(Math.abs(t),2)+Math.pow(Math.abs(e),2))}static rollCharacterByDir(t,e,i,r){let n=i;return a.rollCharacter(t,e,n,r)}static rollCharacter(t,e,i,r){let n=i*(Math.PI/180);var o=t+r*Math.cos(n),s=e+r*Math.sin(n),l=Q.instance.currArenaItem.mapid,c=F.intance.m_dicMaps.get(l),u=c.offset;return o<u?o=u:o>c.width-u&&(o=c.width-u),s<u?s=u:s>c.height-u&&(s=c.height-u),console.log(`新的坐标：X=${o}, Y=${s}`),[o,s]}static createDirectPath(t,e,i,r=40,n=25){for(var o=[],s=i*Math.PI/180,l=1;l<r;++l){var c=t,u=e+n*l,p=-(u-e)*Math.sin(s)+t,b=(u-e)*Math.cos(s)+e;o.push(p,b)}return o}static pointsBack(t,e){if(e<=0||!t||t.length<4)return t;for(var i=0,r=-1,n=-1,o=0;o<t.length;o+=2){var s=t[o],l=t[o+1];r>0&&n>0&&(i+=this.distancePoint(r,n,s,l)),r=s,n=l}if(i<e)return null;for(var c=t.concat(),u=0,p=0;c&&c.length>=4&&u<e;){var b=c.pop(),x=c.pop(),v=c[c.length-1],y=c[c.length-2];if(u+=this.distancePoint(y,v,x,b),p=u-e,p>0){var C=Math.atan2(v-b,y-x),A=C*180/Math.PI+90;C=A*Math.PI/180;var H=v+p,z=-(H-v)*Math.sin(C)+y,Z=(H-v)*Math.cos(C)+v;c.push(z,Z)}}return c}static createLinePath(t,e,i,r,n=25,o=0){var s=[],l=Math.atan2(r-e,i-t);l=(l*180/Math.PI-90)*Math.PI/180;for(var c=this.distancePoint(t,e,i,r)-o,u=0,p=0;c>u;){var b=t,x=e+n*p,v=-(x-e)*Math.sin(l)+t,y=(x-e)*Math.cos(l)+e;u=this.distancePoint(t,e,v,y),c>u&&s.push(v,y),p++}return o==0&&s.push(i,r),s}static rolePosTransform(t,e,i){var r=new Laya.Matrix;return r.rotate(Math.PI/180*(t.modelAngle-90)),r.translate(e.x,e.y),r.transformPoint(i)}static pointtInPolygon(t,e){for(var i=0,r=0;r<e.length;r++){var n=e[r],o=e[(r+1)%e.length];if(n.y!=o.y&&!(t.y<Math.min(n.y,o.y))&&!(t.y>=Math.max(n.y,o.y))){var s=(t.y-n.y)*(o.x-n.x)/(o.y-n.y)+n.x;s>t.x&&i++}}return i%2==1}static pointInPie(t,e,i,r,n,o){var s=Math.atan2(o.y-e,o.x-t)*180/Math.PI,l=this.distancePoint(t,e,o.x,o.y);return s>=i&&s<=r&&l<=n}static getRandInRound(t,e){return Math.floor(Math.random()*(e-t+1))+t}static getUnitVector(t){let i=t*(Math.PI/180),r=1*Math.cos(i),n=1*Math.sin(i);return new Laya.Point(r,n)}static subtract(t,e){let i=new Laya.Point;return i.x=t.x-e.x,i.y=t.y-e.y,i}};var ti=class ti{constructor(){this.validEnemyList=[];this.gameWindowX=0;this.gameWindowY=0;this.isControl=!1}get gameMap(){return this._gameMap}set gameMap(t){this._gameMap=t}clearData(){this.gameMap=null,this.box_players=null,this.myHeroSpr=null,this.matchHeroSmallDic=null,this.matchHeroSprDic=null,this.matchHeroSprs=null,this.matchHeroDic=null,this.myPlayer=null,this.allOrders=null}static get instance(){return ti._instance==null&&(ti._instance=new ti),ti._instance}init(){this.validEnemyList=[]}insertValidList(t){this.isFInd(t,this.validEnemyList)||this.validEnemyList.push(t)}isFInd(t,e){var i=!1;(!t||!e||e.length<=0)&&(i=!1);for(let r=0;r<e.length;r++)if(e[r]==t)return!0;return i}isFIndIndex(t,e){var i=-1;(!t||!e||e.length<=0)&&(i=-1);for(let r=0;r<e.length;r++)e[r]==t&&(i=r);return i}removeValidListByValue(t){if(!(!t||!this.validEnemyList||this.validEnemyList.length<=0)){var e=this.isFIndIndex(t,this.validEnemyList);e!=-1&&this.validEnemyList.splice(e,1)}}initMatch(t,e){Laya.loader.load("scenes/match/MatchHeroSpr.lh").then(i=>{this.roleAniPrefab=i,this.createPlayers(t),e&&e(t)})}updateMatch(t,e){this.updatePlayers(),e&&e(t)}createPlayers(t){this.matchHeroDic=new le,this.matchHeroSprDic=new le,this.matchHeroSmallDic=new le,this.matchHeroSprs=[],this.allOrders||(this.allOrders=[]);let e=Q.instance.matchDto.members.length;for(var i=0;i<e;i++){var r=Q.instance.matchDto.members[i],n=new Laya.Image;n.anchorX=0,n.anchorY=0,n.skin="res/match1/img_point_1.png",t.img_smallMap.addChild(n),this.matchHeroSmallDic.set(r.id,n);let o=this.roleAniPrefab.create();o.dataSource=r,S.instance.playerDto.pid==r.id&&(this.myPlayer=r,n.skin="res/match1/img_point_2.png",this.setCurrentHero(o)),this.matchHeroDic.set(r.id,r),this.box_players.addChild(o),this.matchHeroSprs.push(o),this.allOrders.push(o),this.matchHeroSprDic.set(r.id,o)}}updatePlayers(){this.matchHeroSprs=[];let t=Q.instance.matchDto.members.length;for(var e=0;e<t;e++){var i=Q.instance.matchDto.members[e];let r=this.matchHeroSprDic.get(i.id);r.dataSource=i,S.instance.playerDto.pid==i.id&&(this.myPlayer=i,this.setCurrentHero(r)),this.matchHeroDic.set(i.id,i),this.matchHeroSprs.push(r)}}addPlayer(t){if(t.type==1){if(this.matchHeroSprs){if(S.instance.playerDto.pid==t.member.id){console.log("自己不处理 :"+t.member.id);return}let e=this.getRoleById(t.member.id);if(e)e.dataSource=t.member,e.alpha=1;else{let i=this.roleAniPrefab.create();i.dataSource=t.member,this.box_players.addChild(i),this.matchHeroSprs.push(i)}}}else this.removeRoleById(t.member.id)}onSendMove(t,e,i,r,n,o,s){if(S.instance.playerDto.pid==e){let l=new mu;l.time=t,l.speed=i,l.dire=r,l.x=n,l.y=o,l.area=s,$e.instance.sendData(l)}}onSendTargetMove(t,e,i,r,n,o=0){if(S.instance.playerDto.pid==e){let s=new du;s.time=t,s.targetId=i,s.targetX=r,s.targetY=n,s.skillId=o,s.sourceId=e,$e.instance.sendData(s)}}onSendAnimation(t,e,i=-1,r=-1,n=-1){let o=new cu;o.skillId=t,o.type=e,o.targetId=i,o.param.set("newX",`${r}`),o.param.set("newY",`${n}`),$e.instance.sendData(o)}onRevAnimationPush(t){var e=ti.instance.getRoleById(t.attId);t.attId!=S.instance.playerDto.pid&&e.attack(t.skillId,!1,t.param)}onSendAttack(t,e,i){let r=new uu;r.targetId=t,r.attackType=e,r.skillId=i,$e.instance.sendData(r)}onRevMovePush(t){if(!(t==null||t.pid==S.instance.playerDto.pid)){var e=ti.instance.getRoleById(t.pid);e?e.onPushMoveData(t.time,t.speed,t.dire,t.x,t.y,t.area):console.log(t.pid+" sprite is null")}}onRevTargetMovePush(t){if(t.sourceId!=S.instance.playerDto.pid){var e=ti.instance.getRoleById(t.targetId);e?e.onPushTargetMoveData(t.time,t.targetX,t.targetY):console.log(t.targetId+" sprite is null")}}onRevAttackPush(t){var e=ti.instance.getRoleById(t.attPid);if(t.attPid!=S.instance.playerDto.pid){var i=F.intance.m_dicSkills.get(t.skill);i.type!=5&&e.attack(t.skill,!1)}var r=ti.instance.getRoleById(t.defPid);r.takeDamage(t,e);var n=this.matchHeroDic.get(t.attPid),o=this.matchHeroDic.get(t.defPid);if(n.score=t.attScore,o.score=t.defScore,t.defHp<=0){var n=this.matchHeroDic.get(t.attPid);n.kill++}L.intance.event(_.UPDATE_KILL_NUM)}sendRestoreData(){if(Q.instance.reward==null){let t=new pu;$e.instance.sendData(t)}}onRevRestorePush(t){Q.instance.matchDto=t,L.intance.event(_.EVENT_RESTORE_DATA),t&&t.startTime-t.nowTime<=0&&V.intance.disposeView(h.MatchReadyView)}getRoleById(t){let e;return this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==t){e=i;return}}),e}removeRoleById(t){var e;this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==t){e=i,i.speed=0,i.alpha=.3;return}})}getValidList(){return this.validEnemyList}playMusic(){De.instance.playMusicByURL("mp3/battle.mp3"),Ue.instance.needPop=!1}playSound(t){var e="";t==1?e="resources/music/pugong":t==2?e="resources/music/enemyHit":t==3&&(e="resources/music/dazhao"),De.instance.playSound(e+".wav",1)}setCurrentHero(t){t.isMe=!0;var e=this.myHeroSpr==null;this.myHeroSpr=t,ti.instance.moveGameWindow(!0),this.myHeroSpr.initBirth(e)}getAttackTarget(t){console.log("getAttackTarget");var e=t.distance,i=t.targetsType;if(i==1){let n=new Laya.Point(this.myHeroSpr.x,this.myHeroSpr.y),o=St.getUnitVector(this.myHeroSpr.roleDirection);var r=[];return this.matchHeroSprs&&this.matchHeroSprs.forEach(s=>{if(!s._isDead&&!s.isMe){var l=this.getEnemyDistance(s);if(l<=e){let c=new Laya.Point(s.x,s.y),u=St.subtract(c,n);u.x*o.x+u.y*o.y>0&&r.push(s)}}}),r}else if(i==2){let n,o=1e4;if(this.matchHeroSprs&&this.matchHeroSprs.forEach(s=>{if(!s._isDead&&!s.isMe){var l=this.getEnemyDistance(s);l<=e&&l<o&&this.canAttack(this.myHeroSpr,s)&&(n=s,o=l)}}),n)return[n]}return[]}getEnemyDistance(t){return Math.sqrt(Math.pow(t.x-this.myHeroSpr.x,2)+Math.pow(t.y-this.myHeroSpr.y,2))}canAttack(t,e){let i=new Laya.Vector2;i.x=e.x-t.x,i.y=e.y-t.y;let r=St.getUnitVector(this.myHeroSpr.roleDirection),n=Math.atan2(i.y,i.x)-Math.atan2(r.y,r.x);n<0&&(n+=2*Math.PI),n=n*180/Math.PI,console.log("angle 2: "+n);let o=90;return n<o||n>360-o}canTui(t,e){let i=new Laya.Vector2;i.x=e.x-t.x,i.y=e.y-t.y;let r=St.getUnitVector(this.myHeroSpr.roleDirection),n=Math.atan2(i.y,i.x)-Math.atan2(r.y,r.x);n<0&&(n+=2*Math.PI),n=n*180/Math.PI,console.log("angle 2: "+n);let o=45;return n<o||n>360-o}setMyHeroDirection(t){this.myHeroSpr&&(t!=-4?(this.myHeroSpr.myRoleDirection=t,this.myHeroSpr.speed=this.myHeroSpr.moveSpeed,this.myHeroSpr.inControl=!0,this.isControl=!0):(this.myHeroSpr.speed=0,this.myHeroSpr.inControl=!1,this.isControl=!1))}moveGameWindow(t=!1){if(this.myHeroSpr){this.gameWindowX=this.myHeroSpr.x-Laya.stage.width/2,this.gameWindowY=this.myHeroSpr.y-Laya.stage.height/2;var e=-this.gameWindowX,i=-this.gameWindowY,r=Laya.stage.width-this.gameMap.width,n=Laya.stage.height-this.gameMap.height;e>0?e=0:e<r?e=r:e=e,i>0?i=0:i<n?i=n:i=i,t?this.gameMap.pos(e,i,!0):Laya.Tween.to(this.gameMap,{x:e,y:i},500)}}};ti._instance=null;var O=ti;var hs=class hs{constructor(){this.module=0;this.errorCode=0;this.errorMessage=""}protocolId(){return hs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writeString(e.errorMessage),t.writeInt(e.module))}static read(t){if(!t.readBoolean())return null;let e=new hs,i=t.readInt();e.errorCode=i;let r=t.readString();e.errorMessage=r;let n=t.readInt();return e.module=n,e}};hs.PROTOCOL_ID=101;var lb=hs,fs=lb;var bs=class bs{protocolId(){return bs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new bs:null}};bs.PROTOCOL_ID=103;var cb=bs,hu=cb;var ys=class ys{constructor(){this.time=0}protocolId(){return ys.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.time)}static read(t){if(!t.readBoolean())return null;let e=new ys,i=t.readLong();return e.time=i,e}};ys.PROTOCOL_ID=104;var ub=ys,fL=ub;var gs=class gs{constructor(){this.pid=0;this.roomId=0;this.loginToken=""}protocolId(){return gs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeString(e.loginToken),t.writeLong(e.pid),t.writeLong(e.roomId))}static read(t){if(!t.readBoolean())return null;let e=new gs,i=t.readString();e.loginToken=i;let r=t.readLong();e.pid=r;let n=t.readLong();return e.roomId=n,e}};gs.PROTOCOL_ID=1001;var pb=gs,fu=pb;var vs=class vs{constructor(){this.errorCode=0;this.pid=0;this.matchDto=null}protocolId(){return vs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writePacket(e.matchDto,25010),t.writeLong(e.pid))}static read(t){if(!t.readBoolean())return null;let e=new vs,i=t.readInt();e.errorCode=i;let r=t.readPacket(25010);e.matchDto=r;let n=t.readLong();return e.pid=n,e}};vs.PROTOCOL_ID=1002;var mb=vs,bu=mb;var Ls=class Ls{protocolId(){return Ls.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new Ls:null}};Ls.PROTOCOL_ID=1004;var db=Ls,yu=db;var _s=class _s{constructor(){this.sequence=0;this.param=""}protocolId(){return _s.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeString(e.param))}static read(t){if(!t.readBoolean())return null;let e=new _s;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let r=t.readString();return e.param=r,e}};_s.PROTOCOL_ID=1005;var hb=_s,bL=hb;var ws=class ws{constructor(){this.sequence=0;this.code=0}protocolId(){return ws.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeInt(e.code))}static read(t){if(!t.readBoolean())return null;let e=new ws;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let r=t.readInt();return e.code=r,e}};ws.PROTOCOL_ID=1006;var fb=ws,yL=fb;var xs=class xs{constructor(){this.sequence=0;this.token=""}protocolId(){return xs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeString(e.token))}static read(t){if(!t.readBoolean())return null;let e=new xs;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let r=t.readString();return e.token=r,e}};xs.PROTOCOL_ID=1007;var bb=xs,gL=bb;var Is=class Is{constructor(){this.sequence=0;this.errorCode=0}protocolId(){return Is.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeInt(e.errorCode))}static read(t){if(!t.readBoolean())return null;let e=new Is;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let r=t.readInt();return e.errorCode=r,e}};Is.PROTOCOL_ID=1008;var yb=Is,vL=yb;var Es=class Es{protocolId(){return Es.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new Es:null}};Es.PROTOCOL_ID=1010;var gb=Es,LL=gb;var Ss=class Ss{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return Ss.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.type),t.writeInt(e.id),t.writeLong(e.count))}static read(t){if(!t.readBoolean())return null;let e=new Ss;if(!t.isReadable())return e;let i=t.readInt();if(e.type=i,!t.isReadable())return e;let r=t.readInt();if(e.id=r,!t.isReadable())return e;let n=t.readLong();return e.count=n,e}};Ss.PROTOCOL_ID=1012;var vb=Ss,_L=vb;var Ts=class Ts{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.errorCode=0;this.time=0}protocolId(){return Ts.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.dire),t.writeInt(e.errorCode),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new Ts,i=t.readInt();e.dire=i;let r=t.readInt();e.errorCode=r;let n=t.readInt();e.speed=n;let o=t.readLong();e.time=o;let s=t.readInt();e.x=s;let l=t.readInt();return e.y=l,e}};Ts.PROTOCOL_ID=1014;var Lb=Ts,wL=Lb;var Cs=class Cs{constructor(){this.type=0;this.member=null}protocolId(){return Cs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writePacket(e.member,25011),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Cs,i=t.readPacket(25011);e.member=i;let r=t.readInt();return e.type=r,e}};Cs.PROTOCOL_ID=1016;var _b=Cs,gu=_b;var ks=class ks{constructor(){this.pid=0;this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return ks.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeInt(e.dire),t.writeLong(e.pid),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new ks,i=t.readInt();e.area=i;let r=t.readInt();e.dire=r;let n=t.readLong();e.pid=n;let o=t.readInt();e.speed=o;let s=t.readLong();e.time=s;let l=t.readInt();e.x=l;let c=t.readInt();return e.y=c,e}};ks.PROTOCOL_ID=1018;var wb=ks,vu=wb;var As=class As{constructor(){this.roomId=0;this.rankList=[];this.reward=[]}protocolId(){return As.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writePacketList(e.rankList,25012),t.writePacketList(e.reward,25008),t.writeLong(e.roomId))}static read(t){if(!t.readBoolean())return null;let e=new As,i=t.readPacketList(25012);e.rankList=i;let r=t.readPacketList(25008);e.reward=r;let n=t.readLong();return e.roomId=n,e}};As.PROTOCOL_ID=1020;var xb=As,Lu=xb;var Ds=class Ds{constructor(){this.errorCode=0}protocolId(){return Ds.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new Ds,i=t.readInt();return e.errorCode=i,e}};Ds.PROTOCOL_ID=1022;var Ib=Ds,xL=Ib;var Ms=class Ms{constructor(){this.attPid=0;this.defPid=0;this.attackValue=[];this.allAtkValue=0;this.bj=!1;this.sb=!1;this.skill=0;this.defHp=0;this.attScore=0;this.defScore=0}protocolId(){return Ms.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.allAtkValue),t.writeLong(e.attPid),t.writeLong(e.attScore),t.writeLongList(e.attackValue),t.writeBoolean(e.bj),t.writeLong(e.defHp),t.writeLong(e.defPid),t.writeLong(e.defScore),t.writeBoolean(e.sb),t.writeInt(e.skill))}static read(t){if(!t.readBoolean())return null;let e=new Ms,i=t.readLong();e.allAtkValue=i;let r=t.readLong();e.attPid=r;let n=t.readLong();e.attScore=n;let o=t.readLongList();e.attackValue=o;let s=t.readBoolean();e.bj=s;let l=t.readLong();e.defHp=l;let c=t.readLong();e.defPid=c;let u=t.readLong();e.defScore=u;let p=t.readBoolean();e.sb=p;let b=t.readInt();return e.skill=b,e}};Ms.PROTOCOL_ID=1024;var Eb=Ms,_u=Eb;var Ps=class Ps{constructor(){this.errorCode=0;this.matchDto=null}protocolId(){return Ps.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writePacket(e.matchDto,25010))}static read(t){if(!t.readBoolean())return null;let e=new Ps,i=t.readInt();e.errorCode=i;let r=t.readPacket(25010);return e.matchDto=r,e}};Ps.PROTOCOL_ID=1026;var Sb=Ps,wu=Sb;var Bs=class Bs{constructor(){this.pid=0}protocolId(){return Bs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.pid)}static read(t){if(!t.readBoolean())return null;let e=new Bs,i=t.readLong();return e.pid=i,e}};Bs.PROTOCOL_ID=1028;var Tb=Bs,xu=Tb;var Rs=class Rs{constructor(){this.pid=0;this.kill=0}protocolId(){return Rs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.kill),t.writeLong(e.pid))}static read(t){if(!t.readBoolean())return null;let e=new Rs,i=t.readInt();e.kill=i;let r=t.readLong();return e.pid=r,e}};Rs.PROTOCOL_ID=1030;var Cb=Rs,Iu=Cb;var Ns=class Ns{constructor(){this.errorCode=0}protocolId(){return Ns.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new Ns,i=t.readInt();return e.errorCode=i,e}};Ns.PROTOCOL_ID=1032;var kb=Ns,IL=kb;var Os=class Os{constructor(){this.attId=0;this.defId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return Os.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.attId),t.writeLong(e.defId),t.writeStringStringMap(e.param),t.writeInt(e.skillId),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Os,i=t.readLong();e.attId=i;let r=t.readLong();e.defId=r;let n=t.readStringStringMap();e.param=n;let o=t.readInt();e.skillId=o;let s=t.readInt();return e.type=s,e}};Os.PROTOCOL_ID=1034;var Ab=Os,Eu=Ab;var Hs=class Hs{constructor(){this.errorCode=0;this.time=0}protocolId(){return Hs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new Hs,i=t.readInt();e.errorCode=i;let r=t.readLong();return e.time=r,e}};Hs.PROTOCOL_ID=1036;var Db=Hs,EL=Db;var Us=class Us{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.sourceId=0;this.skillId=0;this.time=0}protocolId(){return Us.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.skillId),t.writeLong(e.sourceId),t.writeLong(e.targetId),t.writeInt(e.targetX),t.writeInt(e.targetY),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new Us,i=t.readInt();e.skillId=i;let r=t.readLong();e.sourceId=r;let n=t.readLong();e.targetId=n;let o=t.readInt();e.targetX=o;let s=t.readInt();e.targetY=s;let l=t.readLong();return e.time=l,e}};Us.PROTOCOL_ID=1038;var Mb=Us,Su=Mb;var Vs=class Vs{constructor(){this.time=0}protocolId(){return Vs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.time)}static read(t){if(!t.readBoolean())return null;let e=new Vs,i=t.readLong();return e.time=i,e}};Vs.PROTOCOL_ID=1040;var Pb=Vs,Tu=Pb;var Gs=class Gs{constructor(){this.moveList=[]}protocolId(){return Gs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writePacketList(e.moveList,1018)}static read(t){if(!t.readBoolean())return null;let e=new Gs,i=t.readPacketList(1018);return e.moveList=i,e}};Gs.PROTOCOL_ID=1042;var Bb=Gs,Cu=Bb;var zs=class zs{constructor(){this.id=0;this.value=!1}protocolId(){return zs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.id),t.writeBoolean(e.value))}static read(t){if(!t.readBoolean())return null;let e=new zs,i=t.readInt();e.id=i;let r=t.readBoolean();return e.value=r,e}};zs.PROTOCOL_ID=25007;var Rb=zs,SL=Rb;var Fs=class Fs{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return Fs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeDouble(e.count),t.writeLong(e.id),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Fs,i=t.readDouble();e.count=i;let r=t.readLong();e.id=r;let n=t.readInt();return e.type=n,e}};Fs.PROTOCOL_ID=25008;var Nb=Fs,TL=Nb;var js=class js{constructor(){this.id=0;this.map=0;this.maxX=0;this.maxY=0;this.players=[]}protocolId(){return js.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.id),t.writeInt(e.map),t.writeInt(e.maxX),t.writeInt(e.maxY),t.writePacketList(e.players,25011))}static read(t){if(!t.readBoolean())return null;let e=new js,i=t.readLong();e.id=i;let r=t.readInt();e.map=r;let n=t.readInt();e.maxX=n;let o=t.readInt();e.maxY=o;let s=t.readPacketList(25011);return e.players=s,e}};js.PROTOCOL_ID=25009;var Ob=js,CL=Ob;var qs=class qs{constructor(){this.arenaId=0;this.coinType=0;this.roomId=0;this.members=[];this.remainderCd=0;this.startTime=0;this.nowTime=0}protocolId(){return qs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.arenaId),t.writeInt(e.coinType),t.writePacketList(e.members,25011),t.writeLong(e.nowTime),t.writeLong(e.remainderCd),t.writeLong(e.roomId),t.writeLong(e.startTime))}static read(t){if(!t.readBoolean())return null;let e=new qs,i=t.readInt();e.arenaId=i;let r=t.readInt();e.coinType=r;let n=t.readPacketList(25011);e.members=n;let o=t.readLong();e.nowTime=o;let s=t.readLong();e.remainderCd=s;let l=t.readLong();e.roomId=l;let c=t.readLong();return e.startTime=c,e}};qs.PROTOCOL_ID=25010;var Hb=qs,kL=Hb;var Ws=class Ws{constructor(){this.id=0;this.x=0;this.y=0;this.dire=0;this.speed=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.kill=0;this.hp=0;this.maxHp=0;this.atk=0;this.score=0;this.skillCd=new Map;this.commonCd=0;this.area=0;this.country=0;this.nodeId=0;this.lease=0}protocolId(){return Ws.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeLong(e.atk),t.writeLong(e.commonCd),t.writeInt(e.country),t.writeInt(e.dire),t.writeInt(e.heroColor),t.writeLong(e.heroId),t.writeLong(e.hp),t.writeString(e.icon),t.writeLong(e.id),t.writeInt(e.kill),t.writeInt(e.leader),t.writeInt(e.lease),t.writeLong(e.maxHp),t.writeString(e.name),t.writeInt(e.nodeId),t.writeLong(e.score),t.writeIntLongMap(e.skillCd),t.writeInt(e.speed),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new Ws,i=t.readInt();e.area=i;let r=t.readLong();e.atk=r;let n=t.readLong();e.commonCd=n;let o=t.readInt();e.country=o;let s=t.readInt();e.dire=s;let l=t.readInt();e.heroColor=l;let c=t.readLong();e.heroId=c;let u=t.readLong();e.hp=u;let p=t.readString();e.icon=p;let b=t.readLong();e.id=b;let x=t.readInt();e.kill=x;let v=t.readInt();e.leader=v;let y=t.readInt();e.lease=y;let C=t.readLong();e.maxHp=C;let A=t.readString();e.name=A;let H=t.readInt();e.nodeId=H;let z=t.readLong();e.score=z;let Z=t.readIntLongMap();e.skillCd=Z;let D=t.readInt();e.speed=D;let W=t.readInt();e.x=W;let J=t.readInt();return e.y=J,e}};Ws.PROTOCOL_ID=25011;var Ub=Ws,AL=Ub;var Ks=class Ks{constructor(){this.id=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.rankNum=0;this.kill=0;this.atk=0;this.score=0;this.die=!1;this.country=0;this.heroPk="";this.nodeId=0;this.lease=0}protocolId(){return Ks.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.atk),t.writeInt(e.country),t.writeBoolean(e.die),t.writeInt(e.heroColor),t.writeLong(e.heroId),t.writeString(e.heroPk),t.writeString(e.icon),t.writeLong(e.id),t.writeInt(e.kill),t.writeInt(e.leader),t.writeInt(e.lease),t.writeString(e.name),t.writeInt(e.nodeId),t.writeInt(e.rankNum),t.writeLong(e.score))}static read(t){if(!t.readBoolean())return null;let e=new Ks,i=t.readLong();e.atk=i;let r=t.readInt();e.country=r;let n=t.readBoolean();e.die=n;let o=t.readInt();e.heroColor=o;let s=t.readLong();e.heroId=s;let l=t.readString();e.heroPk=l;let c=t.readString();e.icon=c;let u=t.readLong();e.id=u;let p=t.readInt();e.kill=p;let b=t.readInt();e.leader=b;let x=t.readInt();e.lease=x;let v=t.readString();e.name=v;let y=t.readInt();e.nodeId=y;let C=t.readInt();e.rankNum=C;let A=t.readLong();return e.score=A,e}};Ks.PROTOCOL_ID=25012;var Vb=Ks,DL=Vb;var ke=new Map;ke.set(101,fs);ke.set(103,hu);ke.set(104,fL);ke.set(1001,fu);ke.set(1002,bu);ke.set(1004,yu);ke.set(1005,bL);ke.set(1006,yL);ke.set(1007,gL);ke.set(1008,vL);ke.set(1010,LL);ke.set(1012,_L);ke.set(1013,mu);ke.set(1014,wL);ke.set(1016,gu);ke.set(1018,vu);ke.set(1020,Lu);ke.set(1021,uu);ke.set(1022,xL);ke.set(1024,_u);ke.set(1025,pu);ke.set(1026,wu);ke.set(1028,xu);ke.set(1030,Iu);ke.set(1031,cu);ke.set(1032,IL);ke.set(1034,Eu);ke.set(1035,du);ke.set(1036,EL);ke.set(1038,Su);ke.set(1040,Tu);ke.set(1042,Cu);ke.set(25007,SL);ke.set(25008,TL);ke.set(25009,CL);ke.set(25010,kL);ke.set(25011,AL);ke.set(25012,DL);var Gb=class a{static getProtocol(t){let e=ke.get(t);if(e===null)throw"[protocolId:"+t+"]协议不存在";return e}static write(t,e){let i=e.protocolId();t.writeInt(i),a.getProtocol(i).write(t,e)}static read(t){let e=t.readInt();return a.getProtocol(e).read(t)}},Ft=Gb;var ML={},PL={},gi;try{gi=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}var P=class P{constructor(t,e,i=!1){this.low=t|0,this.high=e|0,this.unsigned=i}toInt(){return this.unsigned?this.low>>>0:this.low}toNumber(){return this.unsigned?(this.high>>>0)*to+(this.low>>>0):this.high*to+(this.low>>>0)}toString(t=10){if(t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.equals(P.MIN_VALUE)){let n=P.fromNumber(t),o=this.divide(n),s=o.multiply(n).subtract(this);return o.toString(t)+s.toInt().toString(t)}else return"-"+this.negate().toString(t);let e=P.fromNumber(Math.pow(t,6),this.unsigned),i="",r=this;for(;;){let n=r.divide(e),s=(r.subtract(n.multiply(e)).toInt()>>>0).toString(t);if(r=n,r.isZero())return s+i;for(;s.length<6;)s="0"+s;i=""+s+i}}getHighBits(){return this.high}getHighBitsUnsigned(){return this.high>>>0}getLowBits(){return this.low}getLowBitsUnsigned(){return this.low>>>0}getNumBitsAbs(){if(this.isNegative())return this.equals(P.MIN_VALUE)?64:this.negate().getNumBitsAbs();let t=this.high!=0?this.high:this.low,e;for(e=31;e>0&&!(t&1<<e);e--);return this.high!=0?e+33:e+1}isZero(){return this.high===0&&this.low===0}isNegative(){return!this.unsigned&&this.high<0}isPositive(){return this.unsigned||this.high>=0}isOdd(){return(this.low&1)===1}isEven(){return(this.low&1)===0}equals(t){return t instanceof P||(t=P.fromValue(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low}notEquals(t){return!this.equals(t)}lessThan(t){return this.compare(t)<0}lessThanOrEqual(t){return this.compare(t)<=0}greaterThan(t){return this.compare(t)>0}greaterThanOrEqual(t){return this.compare(t)>=0}compare(t){if(t instanceof P||(t=P.fromValue(t)),this.equals(t))return 0;let e=this.isNegative(),i=t.isNegative();return e&&!i?-1:!e&&i?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.subtract(t).isNegative()?-1:1}negate(){return!this.unsigned&&this.equals(P.MIN_VALUE)?P.MIN_VALUE:this.not().add(P.ONE)}add(t){t instanceof P||(t=P.fromValue(t));let e=this.high>>>16,i=this.high&65535,r=this.low>>>16,n=this.low&65535,o=t.high>>>16,s=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,p=0,b=0,x=0;return x+=n+c,b+=x>>>16,x&=65535,b+=r+l,p+=b>>>16,b&=65535,p+=i+s,u+=p>>>16,p&=65535,u+=e+o,u&=65535,P.fromBits(b<<16|x,u<<16|p,this.unsigned)}subtract(t){return t instanceof P||(t=P.fromValue(t)),this.add(t.negate())}multiply(t){if(this.isZero())return P.ZERO;if(t instanceof P||(t=P.fromValue(t)),gi){let v=gi.mul(this.low,this.high,t.low,t.high);return P.fromBits(v,gi.get_high(),this.unsigned)}if(t.isZero())return P.ZERO;if(this.equals(P.MIN_VALUE))return t.isOdd()?P.MIN_VALUE:P.ZERO;if(t.equals(P.MIN_VALUE))return this.isOdd()?P.MIN_VALUE:P.ZERO;if(this.isNegative())return t.isNegative()?this.negate().multiply(t.negate()):this.negate().multiply(t).negate();if(t.isNegative())return this.multiply(t.negate()).negate();if(this.lessThan(NL)&&t.lessThan(NL))return P.fromNumber(this.toNumber()*t.toNumber(),this.unsigned);let e=this.high>>>16,i=this.high&65535,r=this.low>>>16,n=this.low&65535,o=t.high>>>16,s=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,p=0,b=0,x=0;return x+=n*c,b+=x>>>16,x&=65535,b+=r*c,p+=b>>>16,b&=65535,b+=n*l,p+=b>>>16,b&=65535,p+=i*c,u+=p>>>16,p&=65535,p+=r*l,u+=p>>>16,p&=65535,p+=n*s,u+=p>>>16,p&=65535,u+=e*c+i*l+r*s+n*o,u&=65535,P.fromBits(b<<16|x,u<<16|p,this.unsigned)}divide(t){if(t instanceof P||(t=P.fromValue(t)),t.isZero())throw Error("division by zero");if(gi){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;let n=(this.unsigned?gi.div_u:gi.div_s)(this.low,this.high,t.low,t.high);return P.fromBits(n,gi.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?P.UZERO:P.ZERO;let e,i,r;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.greaterThan(this))return P.UZERO;if(t.greaterThan(this.shiftRightUnsigned(1)))return P.UONE;r=P.UZERO}else{if(this.equals(P.MIN_VALUE))return t.equals(P.ONE)||t.equals(P.NEG_ONE)?P.MIN_VALUE:t.equals(P.MIN_VALUE)?P.ONE:(e=this.shiftRight(1).divide(t).shiftLeft(1),e.equals(P.ZERO)?t.isNegative()?P.ONE:P.NEG_ONE:(i=this.subtract(t.multiply(e)),r=e.add(i.divide(t)),r));if(t.equals(P.MIN_VALUE))return this.unsigned?P.UZERO:P.ZERO;if(this.isNegative())return t.isNegative()?this.negate().divide(t.negate()):this.negate().divide(t).negate();if(t.isNegative())return this.divide(t.negate()).negate();r=P.ZERO}for(i=this;i.greaterThanOrEqual(t);){e=Math.max(1,Math.floor(i.toNumber()/t.toNumber()));let n=Math.ceil(Math.log(e)/Math.LN2),o=n<=48?1:Math.pow(2,n-48),s=P.fromNumber(e),l=s.multiply(t);for(;l.isNegative()||l.greaterThan(i);)e-=o,s=P.fromNumber(e,this.unsigned),l=s.multiply(t);s.isZero()&&(s=P.ONE),r=r.add(s),i=i.subtract(l)}return r}modulo(t){if(t instanceof P||(t=P.fromValue(t)),gi){let e=(this.unsigned?gi.rem_u:gi.rem_s)(this.low,this.high,t.low,t.high);return P.fromBits(e,gi.get_high(),this.unsigned)}return this.subtract(this.divide(t).multiply(t))}not(){return P.fromBits(~this.low,~this.high,this.unsigned)}and(t){return t instanceof P||(t=P.fromValue(t)),P.fromBits(this.low&t.low,this.high&t.high,this.unsigned)}or(t){return t instanceof P||(t=P.fromValue(t)),P.fromBits(this.low|t.low,this.high|t.high,this.unsigned)}xor(t){return t instanceof P||(t=P.fromValue(t)),P.fromBits(this.low^t.low,this.high^t.high,this.unsigned)}shiftLeft(t){if(t instanceof P&&(t=t.toInt()),(t&=63)===0)return this;if(t<32){let e=this.low<<t;return P.fromBits(e,this.high<<t|this.low>>>32-t,this.unsigned)}else return P.fromBits(0,this.low<<t-32,this.unsigned)}shiftRight(t){return t instanceof P&&(t=t.toInt()),(t&=63)===0?this:t<32?P.fromBits(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):P.fromBits(this.high>>t-32,this.high>=0?0:-1,this.unsigned)}shiftRightUnsigned(t){return t instanceof P&&(t=t.toInt()),(t&=63)===0?this:t<32?P.fromBits(this.low>>>t|this.high<<32-t,this.high>>>t,this.unsigned):t===32?P.fromBits(this.high,0,this.unsigned):P.fromBits(this.high>>>t-32,0,this.unsigned)}rotateLeft(t){let e;return t instanceof P&&(t=t.toInt()),(t&=63)===0?this:t===32?P.fromBits(this.high,this.low,this.unsigned):t<32?(e=32-t,P.fromBits(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned)):(t-=32,e=32-t,P.fromBits(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned))}rotateRight(t){let e;return t instanceof P&&(t=t.toInt()),(t&=63)===0?this:t===32?P.fromBits(this.high,this.low,this.unsigned):t<32?(e=32-t,P.fromBits(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned)):(t-=32,e=32-t,P.fromBits(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned))}toSigned(){return this.unsigned?P.fromBits(this.low,this.high,!1):this}toUnsigned(){return this.unsigned?this:P.fromBits(this.low,this.high,!0)}toBytes(t){return t?this.toBytesLE():this.toBytesBE()}toBytesLE(){let t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}toBytesBE(){let t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]}static fromBytes(t,e,i){return i?P.fromBytesLE(t,e):P.fromBytesBE(t,e)}static fromBytesLE(t,e){return new P(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)}static fromBytesBE(t,e){return new P(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)}static fromInt(t,e){let i;if(e){if(t>>>=0,i=0<=t&&t<256){let n=PL[t];if(n)return n}let r=P.fromBits(t,(t|0)<0?-1:0,!0);return i&&(PL[t]=r),r}else{if(t|=0,i=-128<=t&&t<128){let n=ML[t];if(n)return n}let r=P.fromBits(t,t<0?-1:0,!1);return i&&(ML[t]=r),r}}static fromNumber(t,e){if(isNaN(t))return e?P.UZERO:P.ZERO;if(e){if(t<0)return P.UZERO;if(t>=OL)return P.MAX_UNSIGNED_VALUE}else{if(t<=-RL)return P.MIN_VALUE;if(t+1>=RL)return P.MAX_VALUE}return t<0?P.fromNumber(-t,e).negate():P.fromBits(t%to|0,t/to|0,e)}static fromBits(t,e,i){return new P(t,e,i)}static fromString(t,e,i){if(t.length===0)throw Error("empty string");if(t==="NaN"||t==="Infinity"||t==="+Infinity"||t==="-Infinity")return P.ZERO;if(typeof e=="number"?(i=e,e=!1):e=!!e,i=i||10,i<2||36<i)throw RangeError("radix");let r;if((r=t.indexOf("-"))>0)throw Error("interior hyphen");if(r===0)return P.fromString(t.substring(1),e,i).negate();let n=P.fromNumber(Math.pow(i,8)),o=P.ZERO;for(let s=0;s<t.length;s+=8){let l=Math.min(8,t.length-s),c=parseInt(t.substring(s,s+l),i);if(l<8){let u=P.fromNumber(Math.pow(i,l));o=o.multiply(u).add(P.fromNumber(c))}else o=o.multiply(n),o=o.add(P.fromNumber(c))}return o.unsigned=e,o}static fromValue(t,e){return typeof t=="number"?P.fromNumber(t,e):typeof t=="string"?P.fromString(t,e):P.fromBits(t.low,t.high,typeof e=="boolean"?e:t.unsigned)}};P.ZERO=P.fromInt(0),P.UZERO=P.fromInt(0,!0),P.ONE=P.fromInt(1),P.UONE=P.fromInt(1,!0),P.NEG_ONE=P.fromInt(-1),P.MAX_VALUE=P.fromBits(-1,2147483647,!1),P.MAX_UNSIGNED_VALUE=P.fromBits(-1,-1,!0),P.MIN_VALUE=P.fromBits(0,-2147483648,!1);var io=P,BL=65536,bw=1<<24,to=BL*BL,OL=to*to,RL=OL/2,NL=io.fromInt(bw);var Ys=class a{constructor(t,e){this.lo=t>>>0,this.hi=e>>>0}zzEncode(){let t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this}zzDecode(){let t=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this}toLong(t){return new io(this.lo|0,this.hi|0,!!t)}static from(t){return typeof t=="number"?a.fromNumber(t):((typeof t=="string"||t instanceof String)&&(t=io.fromString(t)),t.low||t.high?new a(t.low>>>0,t.high>>>0):HL)}static fromNumber(t){if(t===0)return HL;let e=t<0;e&&(t=-t);let i=t>>>0,r=(t-i)/4294967296>>>0;return e&&(r=~r>>>0,i=~i>>>0,++i>4294967295&&(i=0,++r>4294967295&&(r=0))),new a(i,r)}},HL=new Ys(0,0);function yw(a,t){let e=0;for(;t.hi;)a.writeByte(t.lo&127|128),t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7,e=e+7;for(;t.lo>127;){if(e>=56){a.writeByte(t.lo);return}a.writeByte(t.lo&127|128),t.lo=t.lo>>>7,e=e+7}a.writeByte(t.lo)}function gw(a){let t=new Ys(0,0),e=0,i=a.length,r=0;if(i-r>4){for(;e<4;++e)if(t.lo=(t.lo|(a[r]&127)<<e*7)>>>0,a[r++]<128)return t;if(t.lo=(t.lo|(a[r]&127)<<28)>>>0,t.hi=(t.hi|(a[r]&127)>>4)>>>0,a[r++]<128)return t;e=0}else{for(;e<3;++e)if(t.lo=(t.lo|(a[r]&127)<<e*7)>>>0,a[r++]<128)return t;return t.lo=(t.lo|(a[r++]&127)<<e*7)>>>0,t}for(;e<4;++e){if(r===8)return t.hi=(t.hi|a[r]<<e*7+3)>>>0,t;if(t.hi=(t.hi|(a[r]&127)<<e*7+3)>>>0,a[r++]<128)return t}return t}function UL(a,t){let e=Ys.from(t).zzEncode();yw(a,e)}function VL(a){return gw(a).zzDecode().toLong(!1)}var GL="",vw=128,Lw=655537,_w=32767,ww=-32768,zL=2147483647,FL=-2147483648,xw=new TextEncoder,Iw=new TextDecoder;function Ew(a,t){if(a.byteLength>t)throw new Error("newLength is too small");let e=new ArrayBuffer(t);return new Uint8Array(e).set(new Uint8Array(a)),e}function Sw(a){return a<<1^a>>31}function Tw(a){return a>>>1^-(a&1)}var zb=class{constructor(){this.writeOffset=0,this.readOffset=0,this.buffer=new ArrayBuffer(vw),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}setWriteOffset(t){if(t>this.buffer.byteLength)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.writeOffset=t}setReadOffset(t){if(t>this.writeOffset)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.readOffset=t}getCapacity(){return this.buffer.byteLength-this.writeOffset}ensureCapacity(t){for(;t-this.getCapacity()>0;){let e=this.buffer.byteLength*2;if(e>Lw)throw new Error("out of memory error");this.buffer=Ew(this.buffer,e),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}}isReadable(){return this.writeOffset>this.readOffset}writeBytes(t){let e=t.byteLength;this.ensureCapacity(e),new Uint8Array(this.buffer).set(new Uint8Array(t),this.writeOffset),this.writeOffset+=e}toBytes(){let t=new ArrayBuffer(this.writeOffset);return new Uint8Array(t).set(new Uint8Array(this.buffer.slice(0,this.writeOffset))),t}writeBoolean(t){if(!(t===!0||t===!1))throw new Error("value must be true of false");this.ensureCapacity(1),t===!0?this.bufferView.setInt8(this.writeOffset,1):this.bufferView.setInt8(this.writeOffset,0),this.writeOffset++}readBoolean(){let t=this.bufferView.getInt8(this.readOffset);return this.readOffset++,t===1}writeByte(t){this.ensureCapacity(1),this.bufferView.setInt8(this.writeOffset,t),this.writeOffset++}readByte(){let t=this.bufferView.getInt8(this.readOffset);return this.readOffset++,t}writeShort(t){if(!(ww<=t&&t<=_w))throw new Error("value must range between minShort:-32768 and maxShort:32767");this.ensureCapacity(2),this.bufferView.setInt16(this.writeOffset,t),this.writeOffset+=2}readShort(){let t=this.bufferView.getInt16(this.readOffset);return this.readOffset+=2,t}writeRawInt(t){if(!(FL<=t&&t<=zL))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");this.ensureCapacity(4),this.bufferView.setInt32(this.writeOffset,t),this.writeOffset+=4}readRawInt(){let t=this.bufferView.getInt32(this.readOffset);return this.readOffset+=4,t}writeInt(t){if(!(FL<=t&&t<=zL))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");if(this.ensureCapacity(5),t=Sw(t),!(t>>>7)){this.writeByte(t);return}if(!(t>>>14)){this.writeByte(t&127|128),this.writeByte(t>>>7);return}if(!(t>>>21)){this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14);return}if(!(t>>>28)){this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14|128),this.writeByte(t>>>21);return}this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14|128),this.writeByte(t>>>21|128),this.writeByte(t>>>28)}readInt(){let t=this.readByte(),e=t&127;return t&128&&(t=this.readByte(),e|=(t&127)<<7,t&128&&(t=this.readByte(),e|=(t&127)<<14,t&128&&(t=this.readByte(),e|=(t&127)<<21,t&128&&(t=this.readByte(),e|=(t&127)<<28)))),Tw(e)}writeLong(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(9),UL(this,t)}readLong(){let t=new ArrayBuffer(9),e=new DataView(t,0,t.byteLength),i=0,r=this.readByte();return e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r))))))))),VL(new Uint8Array(t.slice(0,i))).toNumber()}writeFloat(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(4),this.bufferView.setFloat32(this.writeOffset,t),this.writeOffset+=4}readFloat(){let t=this.bufferView.getFloat32(this.readOffset);return this.readOffset+=4,t}writeDouble(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(8),this.bufferView.setFloat64(this.writeOffset,t),this.writeOffset+=8}readDouble(){let t=this.bufferView.getFloat64(this.readOffset);return this.readOffset+=8,t}writeChar(t){if(t==null||t.length===0){this.writeString(GL);return}this.writeString(t.charAt(0))}readChar(){return this.readString()}writeString(t){if(t==null||t.trim().length===0){this.writeInt(0);return}let e=xw.encode(t);this.ensureCapacity(5+e.length),this.writeInt(e.length),e.forEach(i=>this.writeByte(i))}readString(){let t=this.readInt();if(t<=0)return GL;let e=new Uint8Array(this.buffer.slice(this.readOffset,this.readOffset+t)),i=Iw.decode(e);return this.readOffset+=t,i}writePacketFlag(t){let e=t==null;return this.writeBoolean(!e),e}writePacket(t,e){Ft.getProtocol(e).write(this,t)}readPacket(t){return Ft.getProtocol(t).read(this)}writeBooleanArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeBoolean(e)}))}readBooleanArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readBoolean());return t}writeByteArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeByte(e)}))}readByteArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readByte());return t}writeShortArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeShort(e)}))}readShortArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readShort());return t}writeIntArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeInt(e)}))}readIntArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readInt());return t}writeLongArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeLong(e)}))}readLongArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readLong());return t}writeFloatArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeFloat(e)}))}readFloatArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readFloat());return t}writeDoubleArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeDouble(e)}))}readDoubleArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readDouble());return t}writeStringArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeString(e)}))}readStringArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readString());return t}writeCharArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeChar(e)}))}readCharArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readChar());return t}writePacketArray(t,e){if(t===null)this.writeInt(0);else{let i=Ft.getProtocol(e);this.writeInt(t.length),t.forEach(r=>{i.write(this,r)})}}readPacketArray(t){let e=[],i=this.readInt();if(i>0){let r=Ft.getProtocol(t);for(let n=0;n<i;n++)e.push(r.read(this))}return e}writeBooleanList(t){this.writeBooleanArray(t)}readBooleanList(){return this.readBooleanArray()}writeByteList(t){this.writeByteArray(t)}readByteList(){return this.readByteArray()}writeShortList(t){this.writeShortArray(t)}readShortList(){return this.readShortArray()}writeIntList(t){this.writeIntArray(t)}readIntList(){return this.readIntArray()}writeLongList(t){this.writeLongArray(t)}readLongList(){return this.readLongArray()}writeFloatList(t){this.writeFloatArray(t)}readFloatList(){return this.readFloatArray()}writeDoubleList(t){this.writeDoubleArray(t)}readDoubleList(){return this.readDoubleArray()}writeStringList(t){this.writeStringArray(t)}readStringList(){return this.readStringArray()}writeCharList(t){this.writeCharArray(t)}readCharList(){return this.readCharArray()}writePacketList(t,e){this.writePacketArray(t,e)}readPacketList(t){return this.readPacketArray(t)}writeBooleanSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeBoolean(e)}))}readBooleanSet(){return new Set(this.readBooleanArray())}writeByteSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeByte(e)}))}readByteSet(){return new Set(this.readByteArray())}writeShortSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeShort(e)}))}readShortSet(){return new Set(this.readShortArray())}writeIntSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeInt(e)}))}readIntSet(){return new Set(this.readIntArray())}writeLongSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeLong(e)}))}readLongSet(){return new Set(this.readLongArray())}writeFloatSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeFloat(e)}))}readFloatSet(){return new Set(this.readFloatArray())}writeDoubleSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeDouble(e)}))}readDoubleSet(){return new Set(this.readDoubleArray())}writeStringSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeString(e)}))}readStringSet(){return new Set(this.readStringArray())}writeCharSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeChar(e)}))}readCharSet(){return new Set(this.readCharArray())}writePacketSet(t,e){if(t===null)this.writeInt(0);else{let i=Ft.getProtocol(e);this.writeInt(t.size),t.forEach(r=>{i.write(this,r)})}}readPacketSet(t){return new Set(this.readPacketArray(t))}writeIntIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeInt(e)}))}readIntIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readInt(),n=this.readInt();t.set(r,n)}return t}writeIntLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeLong(e)}))}readIntLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readInt(),n=this.readLong();t.set(r,n)}return t}writeIntStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeString(e)}))}readIntStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readInt(),n=this.readString();t.set(r,n)}return t}writeIntPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=Ft.getProtocol(e);this.writeInt(t.size),t.forEach((r,n)=>{this.writeInt(n),i.write(this,r)})}}readIntPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let r=Ft.getProtocol(t);for(let n=0;n<i;n++){let o=this.readInt(),s=r.read(this);e.set(o,s)}}return e}writeLongIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeInt(e)}))}readLongIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readLong(),n=this.readInt();t.set(r,n)}return t}writeLongLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeLong(e)}))}readLongLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readLong(),n=this.readLong();t.set(r,n)}return t}writeLongStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeString(e)}))}readLongStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readLong(),n=this.readString();t.set(r,n)}return t}writeLongPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=Ft.getProtocol(e);this.writeInt(t.size),t.forEach((r,n)=>{this.writeLong(n),i.write(this,r)})}}readLongPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let r=Ft.getProtocol(t);for(let n=0;n<i;n++){let o=this.readLong(),s=r.read(this);e.set(o,s)}}return e}writeStringIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeInt(e)}))}readStringIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readString(),n=this.readInt();t.set(r,n)}return t}writeStringLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeLong(e)}))}readStringLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readString(),n=this.readLong();t.set(r,n)}return t}writeStringStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeString(e)}))}readStringStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readString(),n=this.readString();t.set(r,n)}return t}writeStringPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=Ft.getProtocol(e);this.writeInt(t.size),t.forEach((r,n)=>{this.writeString(n),i.write(this,r)})}}readStringPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let r=Ft.getProtocol(t);for(let n=0;n<i;n++){let o=this.readString(),s=r.read(this);e.set(o,s)}}return e}},Fb=zb;var Tt=class Tt{constructor(){this.m_iConnectTimes=0;this.m_iMaxTimes=10;this.m_iHeartTime=6e4;this._isMatching=!1;this.m_socket=new Laya.Socket,this.m_socket.on(Laya.Event.OPEN,this,this.onSocketOpen),this.m_socket.on(Laya.Event.CLOSE,this,this.onSocketClose),this.m_socket.on(Laya.Event.MESSAGE,this,this.onMessageReveived),this.m_socket.on(Laya.Event.ERROR,this,this.onConnectError)}static get instance(){return Tt._instance==null&&(Tt._instance=new Tt),Tt._instance}get isMatching(){return this._isMatching}set isMatching(t){this._isMatching=t,t||(this.m_socket.close(),this.isConnect=!1)}initSocket(){this.isMatching=!0;var t=Q.instance.roomDto.connectAddr;Tt.m_strHttpHost=t,this.reconnect()}onSocketOpen(){this.isConnect=!0,this.m_iConnectTimes=0,ui.log("websocket----websocket connected",1),this.onLogin()}onLogin(){let t=new fu;t.roomId=Q.instance.roomDto.roomId,t.loginToken=localStorage.getItem("TOX-COOKIE"+Y.instance.walletAddress),t.pid=S.instance.playerDto.pid,this.sendData(t)}onSocketClose(t){console.log("websocket----closed"),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,console.log("websocket----closed m_iConnectTimes:"+this.m_iConnectTimes+", m_iMaxTimes: "+this.m_iMaxTimes),this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,function(){Tt.instance.reconnect(),Tt.instance.m_iConnectTimes++}):K.instance.hideLoading()))}onConnectError(t){console.log("websocket----onConnectError e:"+ +t),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,function(){Tt.instance.reconnect(),Tt.instance.m_iConnectTimes++}):K.instance.hideLoading()))}reconnect(){console.log("websocket----reconnect: "+Tt.m_strHttpHost),this.isMatching&&(this.isConnect||(this.m_socket.connectByUrl(Tt.m_strHttpHost),console.log("websocket----connect websocket")))}onSendMessage(){}sendData(t){if(this.isMatching)if(this.isConnect){let e=new Fb;e.setWriteOffset(4),Ft.write(e,t),e.writeBoolean(!1);let i=e.writeOffset;e.setWriteOffset(0),e.writeRawInt(i-4),e.setWriteOffset(i),this.m_socket.send(e.buffer),console.log(Le.GetLogTime+" websocket ------>>>>>>>> send message PROTOCOL_ID:"+t.protocolId()+"，内容："+JSON.stringify(t))}else ui.log("socket send error： "+JSON.stringify(t))}async onMessageReveived(t){let e=t,i=new Fb;i.writeBytes(e),i.setReadOffset(4);let r=Ft.read(i),n=r.protocolId();console.log(Le.GetLogTime+" websocket ------<<<<<<<< recv PROTOCOL_ID: "+n+"，内容："+JSON.stringify(r));let o=r.errorCode;if(o&&o>0){console.warn("errorCode "+o+", errorMessage： "+Ce.instance.get(o)),(o==24||o==25)&&(this.isMatching=!1,L.intance.event(_.EVENT_CLOSE_MODULE,h.EnterRoomView),be.intance.currSceneName!=re.M_SCENE_MATCH&&(be.intance.setCurrentScene(re.M_SCENE_MAIN),Le.commTipWithYes(Ce.instance.get(o))));return}switch(L.intance.event("msg_"+n,[e]),n){case bu.PROTOCOL_ID:console.log("收到了登录返回");let l=r;q.needHeart=!1,Q.instance.matchDto=l.matchDto,be.intance.setCurrentScene(re.M_SCENE_MATCH);break;case Tu.PROTOCOL_ID:console.log("收到比赛开始数据");let c=r;V.intance.disposeView(h.MatchReadyView),Q.instance.stopAll=!1;break;case vu.PROTOCOL_ID:console.log("收到移动数据");let u=r;O.instance.onRevMovePush(u);break;case Cu.PROTOCOL_ID:console.log("收到移动数据列表");var s=r.moveList;s.forEach(W=>{O.instance.onRevMovePush(W)});break;case Su.PROTOCOL_ID:console.log("收到推人移动数据");let b=r;O.instance.onRevTargetMovePush(b);break;case _u.PROTOCOL_ID:console.log("收到伤害数据");let x=r;O.instance.onRevAttackPush(x);break;case Eu.PROTOCOL_ID:console.log("收到动画数据");let v=r;O.instance.onRevAnimationPush(v);break;case gu.PROTOCOL_ID:console.log("收到玩家加入或离开数据");let y=r;O.instance.addPlayer(y);break;case xu.PROTOCOL_ID:console.log("收到第一滴血数据");let C=r;L.intance.event(_.EVENT_FirstBlood,[C]);break;case Iu.PROTOCOL_ID:console.log("收到多杀数据");let A=r;L.intance.event(_.EVENT_MutiKill,[A]);break;case Lu.PROTOCOL_ID:console.log("收到比赛结束");let H=r;Q.instance.matchDto&&Q.instance.onGoMatchEndRank(H.rankList,H.reward);break;case wu.PROTOCOL_ID:console.log("收到了恢复数据返回");let z=r;O.instance.onRevRestorePush(z.matchDto);break;case fs.PROTOCOL_ID:console.log("收到了错误信息返回");let Z=new fs;Object.assign(Z,r),console.log("errorMessage： "+Z.errorMessage),Ce.instance.showErrByString(Z.errorMessage);break;case yu.PROTOCOL_ID:this.isOtherLogin=!0,Laya.timer.clearAll(this),Le.otherLogin(),console.log("websocket----------------------------otherLogin");break;case Tt.CMD_20001:let D=S.instance.playerDto;Object.assign(D,e),L.intance.event(_.ACCOUNTVO_UPDATE),console.log("accout----------------------------update");break;case Tt.CMD_10099:K.instance.hideLoading(),L.intance.event("SET_HERO_POSTION_SUCCESS"),console.log("formation----------------------------update");break;default:break}}sendHeart(){this.m_socket.connected&&this.sendData(new hu)}};Tt.m_strHttpHost=getWSServer(),Tt.CMD_99999=99999;var $e=Tt;var ge=class ge{constructor(){this._isSending=!1;this._stopSending=!1;this._sendCmd=0;this._callDataArr=[],this._httpReq=new Laya.HttpRequest,this._httpReq.http.timeout=15e3,this._httpReq.http.ontimeout=this.timeoutFunction,this._httpReq.on(Laya.Event.COMPLETE,this,this.reqCompleteHandler),this._httpReq.on(Laya.Event.ERROR,this,this.reqErrorHandler),this._httpReq.on(Laya.Event.PROGRESS,this,this.reqProcessHandler),ge.RepeatHandler=Laya.Handler.create(this,this.repeatCallHandler,null,!1)}static get instance(){return ge._instance||(ge._instance=new ge),ge._instance}repeatCallHandler(){let t=this._callDataArr[0];t&&(t.needReSend?(this._callDataArr.shift(),this._sendByByte(t.command,t.callData,t.isShowLoading,!0)):this._callDataArr.shift())}timeoutFunction(){ge.ErrorIndex++,this._sendCmd==2,ge.timeoutTimes<ge.MaxSendTimes,ge.timeoutTimes++,ge._IS_SEND=!1,this._isSending=!1,ge.ErrorIndex>=ge.RepeatTimesTimeOut?(K.instance.hideLoading(),ge.ErrorTips=f.instance.getLanguage("5076"),V.intance.openModule(h.ClientErrView)):ge.RepeatHandler.run()}reqCompleteHandler(t){let e=Laya.Browser.now()-this.m_nSendTime;if(e&&e>ge.RequestTime?(ge.reqTimes<ge.MaxSendTimes,ge.reqTimes++):(ge.reqTimes=0,ge.timeoutTimes=0,ge.errorTimes=0),console.log("cmd time："+(Laya.Browser.now()-this.m_nSendTime)),this._httpReq.data==null){Ce.instance.showErrByString("_buff:null");return}this._isSending=!1,ge.ErrorIndex=0;let i=new Laya.Byte(this._httpReq.data),r;if(i){let n=new Da,o=n.ReadString(i);Xr.instance.analyCookie(o);let s=n.ReadByte(i);for(let l=0;l<s;l++){n.ReadByte(i);let c=n.ReadShort(i),u=n.ReadBytes(i,i.pos+c);if(i.pos+=c,u.length<2)continue;u.pos=0;let p=n.ReadBytes(u,u.length);p.pos=0;let b=new Uint8Array(p.buffer),x=new Uint8Array(Cw(b)),v=new Laya.Byte(x.buffer);v.pos=0;let y=Xr.instance.analyServer(v);Laya.LayaEnv.isConch?console.log("REVC_CMD: cmdID:"+y[0]+" data:"+y,1):console.log(Le.GetLogTime+" REVC_CMD: cmdID:",y[0],y),y[0]==153&&console.log("......"),y[0]==27&&(y[1]==2e4||y[1]==20042)&&(r=!0),L.intance.event("msg_"+y.shift(),[y])}s==0&&console.log("REVC_DATA: NO_DATA",1)}if(this._callDataArr.length>0){let n=this._callDataArr.shift();r&&n&&n.callBackHandler!=null&&n.callBackHandler.run()}ge._IS_SEND=!1,this._callDataArr.length>0?ge.RepeatHandler.run():K.instance.hideLoading()}reqErrorHandler(t){console.log("[error] HttpNetService reqError: ["+t+"]",1),ge.errorTimes<ge.MaxSendTimes&&this._sendCmd==2,ge.errorTimes++,K.instance.showLoadingByInfo(f.instance.getLanguage(5205)),ge.ErrorIndex++,ge._IS_SEND=!1,this._isSending=!1,ge.ErrorIndex>=ge.RepeatTimes?(K.instance.hideLoading(),ge.ErrorTips=f.instance.getLanguage("5075"),V.intance.openModule(h.ClientErrView),this._callDataArr.length=0):Laya.timer.once(1e3,this,function(){ge.RepeatHandler.run()})}reqProcessHandler(t){}DataToService(t){Laya.LayaEnv.isConch?this._httpReq.send(X.server,t.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded","Connection","close"]):this._httpReq.send(X.server,t.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded"])}SendData(t,e,i=null,r=!0,n=!0){this._stopSending||(this.m_nSendTime=Laya.Browser.now(),ge.ErrorIndex=0,n&&this._callDataArr.push({command:t,callData:e,callBackHandler:i,isShowLoading:r,needReSend:n}),this._sendByByte(t,e,r,!1))}_sendByByte(t,e,i=!0,r=!1){this._sendCmd=t,this._sendCmd==2,$e.instance.sendData({cmd:t,code:"",data:e})}reSendData(){this._callDataArr.length>0&&ge.RepeatHandler.run()}sendOutHandler(){Laya.timer.clear(this,this.sendOutHandler),this._isSending&&(this._isSending=!1,ge.ErrorIndex>=ge.RepeatTimes?(K.instance.hideLoading(),ge.ErrorTips="Client Error!",V.intance.openModule(h.ClientErrView),this._callDataArr.length=0):ge.RepeatHandler.run())}EnCodeByte(t){t.pos=0;let i=new Da().ReadBytes(t,t.length);i.pos=0;let r=new Laya.Byte,n=0,o,s=0;for(let l=0;l<i.length;l++)n>=6?n=1:n+=1,o=i.getByte(),s=o,o>>=8-n,s<<=n,s|=o,s^=3,r.writeByte(s);return r}DecryptByte(t){t.pos=0;let i=new Da().ReadBytes(t,t.length);i.pos=0;let r=new Laya.Byte,n=0,o,s=new Uint8Array(i.buffer);for(let l=0;l<s.length;l++)n>=6?n=1:n+=1,o=s[l],o^=3,o<<=8-n,s[l]^=3,s[l]>>=n,s[l]|=o;return r=new Laya.Byte(s.buffer),r}init(){}HttpLoadProcess(t){}httpLoadComplete(t){Xr.instance.analyData=t}dispose(){}set stopSending(t){this._stopSending=t}};ge._IS_SEND=!1,ge.ErrorIndex=0,ge.RepeatTimes=8,ge.RepeatTimesTimeOut=3,ge.ErrorTips="",ge.LoginTime=5e3,ge.RequestTime=4e3,ge.MaxSendTimes=5,ge.reqTimes=0,ge.timeoutTimes=0,ge.errorTimes=0;var vi=ge;function Cw(a){throw new Error("Function not implemented.")}var wt=class extends Laya.Event{constructor(){super()}};wt.INIT_SUIT_EVENT="HeroEvent:INIT_SUIT_EVENT",wt.EVENT_FIND_ITEM_CLICK="HeroEvent:EVENT_FIND_ITEM_CLICK",wt.EVENT_RELEASE_ITEM_CLICK="HeroEvent:EVENT_RELEASE_ITEM_CLICK",wt.EVENT_FINISH="HeroEvent:EVENT_FINISH",wt.EVENT_START="HeroEvent:EVENT_START",wt.EVENT_AGAIN="HeroEvent:EVENT_AGAIN",wt.EVENT_ENABLE_TIJIAO="HeroEvent:EVENT_ENABLE_TIJIAO",wt.EVENT_HUMANSTAY="HeroEvent:EVENT_HUMANSTAY",wt.EVENT_STOPGAME="HeroEvent:EVENT_STOPGAME",wt.EVENT_RESTORE="HeroEvent:EVENT_RESTORE",wt.EVENT_CANCEL_RESTORE="HeroEvent:EVENT_CANCEL_RESTORE",wt.EVENT_COLLISIONENTER="HeroEvent:EVENT_COLLISIONENTER",wt.EVENT_HERO_DRAW_UPDATE_PRODUCTION="HeroEvent:EVENT_HERO_DRAW_UPDATE_PRODUCTION",wt.SELECT_UI="HeroEvent:SELECT_UI";var ku=class extends Me{constructor(){super()}};var Au=class extends Me{constructor(){super()}};var ot=class a{constructor(){this._inited=!1;this._initUpgrade=!1;this.heroList=[];this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}initUpgrade(){if(!this._initUpgrade){let t=F.intance;t.m_dicHeroLv||(t.m_dicHeroLv=t.initConfig("hero_lv",["hero_lv","hero_star","race"],Au)),t.m_dicHeroAttup||(t.m_dicHeroAttup=t.initConfig("hero_attup",["star_lv","race"],ku)),this._initUpgrade=!0}}getHead(t){let e=Math.floor(Math.random()*3)+1;return"common/common_icon/img_"+t+"_"+e+".png"}getNextHero(t){let e=S.instance.m_heroData.heroVoDic.keys.indexOf(t.pk);return S.instance.m_heroData.heroVoDic.keys.length===1?null:e<=S.instance.m_heroData.heroVoDic.keys.length-2?S.instance.m_heroData.heroVoDic.values[e+1]:null}getLastHero(t){let e=S.instance.m_heroData.heroVoDic.keys.indexOf(t.pk);return e>0?S.instance.m_heroData.heroVoDic.values[e-1]:null}setStar(t,e){console.log("setStar: _star "+e);let i=parseInt(e);var r=Math.floor(i/6),n=i%6,o=r+n;let s=0;for(let u=0;u<r;u++)t["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_2.png",t["img_star"+(u+1)].visible=!0;for(let u=r;u<n;u++)t["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_1.png",t["img_star"+(u+1)].visible=!0;for(let u=o;u<5;u++)t["img_star"+(u+1)].visible=!1;let l=t.box_star.width,c=46;o==1?t["img_star1"].x=l/2-s:o==2?(t["img_star1"].x=l/2-c/2-s,t["img_star2"].x=l/2+c/2-s):o==3?(t["img_star1"].x=l/2-s,t["img_star2"].x=l/2-c-s,t["img_star3"].x=l/2+c-s):o==4?(t["img_star1"].x=l/2-c/2-s,t["img_star2"].x=l/2+c/2-s,t["img_star3"].x=l/2-c*(1/2+1)-s,t["img_star4"].x=l/2+c*(1/2+1)-s):(t["img_star1"].x=l/2-s,t["img_star2"].x=l/2-c-s,t["img_star3"].x=l/2+c-s,t["img_star4"].x=l/2-c*2-s,t["img_star5"].x=l/2+c*2-s)}getRoundName(t){let e=f.instance.getLanguage(10014,16,8);return t==4?e=f.instance.getLanguage(10014,2,1):t==3?e=f.instance.getLanguage(10014,4,2):t==2&&(e=f.instance.getLanguage(10014,8,4)),e}};var ao=class{};var Du=class{};var Ke=class a{constructor(){this.mail_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"||(this.mail_contract=new window.web3.eth.Contract(oe.BLINDBOX_ABI,oe.BLINDBOX_ADDRESS))}async initData(){this.mailList=new le,K.instance.showLoading(!0);let t=await this.mail_contract.methods.getPricesLength().call();for(let e=0;e<t;e++){let i=await this.mail_contract.methods.getPriceByIndex(e).call(),r=new ao;r.type=1,r.idx=e,Object.assign(r,i),this.mailList.set(r.idx,r),r.showPrice=tr(r.currentPrice+"")}K.instance.hideLoading()}async hasFree(){return await this.mail_contract.methods.getIsFreeOpen().call()?!await this.mail_contract.methods.hasFreeHero(Y.instance.walletAddress).call():!1}async recruit(t){K.instance.showLoading(!0);let e=F.intance.m_dicShops.get(t),i=e.cost[0];var r=Y.instance.getCoinAddress(i);try{var n;let c;X.vType==2?(n=zt.id,c=mL[n]):X.vType==1?(n=Et.id,c=eb[n]):(n=Et.id,c=eb[n]);let u=await Y.instance.walletClient.getChainId();if(n!==u){var o=await Y.instance.switchChain(n);if(!o){this.onEndHeroBuy(),console.log("切换失败，请手动切换");return}}let p=r[n];if(!p)return this.onEndHeroBuy(),ie.instance.notice(f.instance.getLanguage(1177,u)),!1;if(!c)return this.onEndHeroBuy(),ie.instance.notice(f.instance.getLanguage(1174,u)),!1;let b=e.cost[1],x=await Y.instance.getBalance2(p),v=tr(b+"");if(parseFloat(x)<parseFloat(v)){this.onEndHeroBuy(),Le.moneyNotEnought(i);return}if(console.log("判断授权 tokenAddress: "+p+", chainIDData:"+n),!await Y.instance.newAllowanceAddress(c,p))return console.log("未授权"),this.onEndHeroBuy(),ie.instance.notice(f.instance.getLanguage(15)),!1;console.log("授权成功 开始购买");var s=await Y.instance.walletClient.writeContract({account:Y.instance.walletAddress,address:c,abi:oe.BUY_HERO_ABI,functionName:"mintByTOX",args:[]});return console.log("============"+s),await Y.instance.publicClient.waitForTransactionReceipt({hash:s}),console.log(`Tx successful with hash: ${s}`),console.log("============"),s}catch(c){this.onEndHeroBuy();var l=c.shortMessage;if(l&&l.indexOf("does not match")!=-1&&(l=f.instance.getLanguage(1118)),console.log(l),ie.instance.notice(l),c instanceof B){let u=c.walk(p=>p instanceof Xt);if(u instanceof Xt){let p=u.data?.errorName??"";console.log("============errorName: "+p)}}return null}}waitGetHero(){Laya.timer.loop(2e3,this,this.getHero)}async getHero(){var t=await q.requestPost("wxgame/hero/heroBuyChainCheck",{}).catch(e=>{});t&&t.heroList&&(Laya.timer.clear(this,this.getHero),this.onNewAddHero(t.heroList))}onNewAddHero(t){Ue.instance.autoPop=!1,S.instance.herosDataUpdataHandler(t),this.onEndHeroBuy()}onAddHero(t){Ue.instance.autoPop=!1,S.instance.herosDataUpdataHandler(t.reward),t.resChange&&S.instance.moneyInfoHander(t.resChange),t.fightHeroPk&&(S.instance.playerDto.fightHeroPk=t.fightHeroPk),this.onEndHeroBuy()}onEndHeroBuy(){K.instance.hideLoading(),L.intance.event(_.EVENT_END_HEROBUY)}async recruit1(t){let e=F.intance.m_dicShops.get(t),i=e.cost[1],r=await Y.instance.getBalance(),n=await q.requestPost("wxgame/hero/heroBuy",{shopId:e.id},!0,!0);n?this.onAddHero(n):this.onEndHeroBuy()}async recruitItem(t,e){let i=F.intance.m_dicShops.get(t),r=i.cost[1],n=await Y.instance.getBalance(),o=await q.requestPost("wxgame/hero/itemBuy",{shopId:i.id,count:e},!0,!0);o&&(S.instance.itemsDataUpdataHandler(o.reward,!1,!0),o.resChange&&S.instance.moneyInfoHander(o.resChange),o.fightHeroPk&&(S.instance.playerDto.fightHeroPk=o.fightHeroPk),K.instance.hideLoading())}async recruitFree(){K.instance.showLoading(!0),this.isOpen=await this.mail_contract.methods.getIsOpen().call();let t=await this.hasFree();if(!this.isOpen){K.instance.hideLoading(),L.intance.event(_.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(12)]);return}if(!t){L.intance.event(_.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(17)]);return}await this.mail_contract.methods.recruitFree().send({from:Y.instance.walletAddress},(e,i)=>{if(e){K.instance.hideLoading(),L.intance.event(_.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(16)]);return}})}async ownerHero(){let t=await q.requestPost("wxgame/hero/heroList",{},!0,!0);S.instance.m_heroData.initData(t.heroList),console.log("HERO LIST")}async ownerBag(){let t=await q.requestPost("wxgame/hero/bagList",{},!0,!0);S.instance.m_packageData.initData(t.data),console.log("BAG LIST")}async heroOutputRate(){if(ot.instance.heroOutputRateDic)return;let t=await q.requestPost("cybertron-sys-api/api/v1/heroes/heroOutputRate",{},!0);ot.instance.heroOutputRateDic=new le;for(let e of t){let i=new Du;Object.assign(i,e),ot.instance.heroOutputRateDic.set(i.mineralLevel,i)}console.log("HERO heroOutputRate"),L.intance.event(wt.EVENT_HERO_DRAW_UPDATE_PRODUCTION)}makeHeroVo(t){let e=new Wt;return Object.assign(e,t),e}};var Mu=class{constructor(){this.heroVoDic=new le}initData(t){this.heroVoDic||(this.heroVoDic=new le);let e;for(let r=0;r<t.length;r++){e=new Wt;var i=t[r];e.id=i.id,e.lv=i.lv,e.pk=i.pk,e.color=i.color,e.state=i.state,this.pushItem(e)}console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}updateData(t){console.dir("更新英雄："+t),this.updataItemVoByArr(t)}pushItem(t){this.heroVoDic.set(t.pk,t)}removeItem(t){this.heroVoDic.remove(t.pk)}updataItemVoByArr(t,e=!1){let i=[],r=!1,n;for(let o=0;o<t.length;o++){n=t[o];let s=this.heroVoDic.get(n.pk);s==null?(s=new Wt,s.id=n.id,s.pk=n.pk,s.lv=n.lv,s.color=n.color,s.state=n.state,n.fight&&(S.instance.playerDto.fightHeroPk=n.pk),s.m_bNew=!0,s.newAddCnt=1,s.newAddCnt>0&&this.pushItem(s)):s.newAddCnt=1,s.isLvUp=e,i.push(s.pk),s.m_iNum<=0&&this.removeItem(s),s.newAddCnt>0&&Ue.instance.needPop&&(Ue.instance.addHeroItem(s),r=!0)}r&&Ue.instance.needPop&&Ue.instance.autoPop&&Kt.instance.startShow(),i.length>0&&L.intance.event(_.PACKAGE_UPDATE_ITEM,[i])}getItemById(t){return this.heroVoDic.get(t)}};var S=class a{constructor(){this.timeZoneOff=0;this.hearIntervalSceond=10*60;this._timeStamp=0;this._m_strLanguage=1;this.isLanChanged=!1;this.lastTimestamp=0;this._m_serverTime=0;this.M_S_VersionServer="1.0.0";this.headId=10001;this.countryId=1010;this.rechargeEnd=!1;this.needPopError=!0}async initData(){we.instance.sendCustumEvent(20),await Ke.instance.ownerHero(),await Ke.instance.ownerBag(),we.instance.sendCustumEvent(21)}addMail(t){this.mailVoDic||(this.mailVoDic=new le),this.mailVoDic.set(t.id,t)}get m_serverTime(){let t=Date.now();return this._m_serverTime+(t-this.lastTimestamp)}set m_serverTime(t){this._m_serverTime=t,this.lastTimestamp=Date.now()}get m_strLanguage(){return this._m_strLanguage}set m_strLanguage(t){this._m_strLanguage=t}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this.vipInfo=new Cl,this.m_packageData=new kl,this.m_heroData=new Mu,this.systemOpenModel=new Tl,this.m_dicCustomerVo=new le,L.intance.on("msg_27",this,this.commonErrHandler),L.intance.on("msg_11",this,this.vipInfoHandler),L.intance.on("msg_13",this,this.onVipUpgrade),L.intance.on("msg_90",this,this.initSystemOpen),L.intance.on("msg_161",this,this.reciveTurnoverVo),L.intance.on("msg_333",this,this.onInitSceneBg),L.intance.on("msg_350",this,this.onInitStoreDiscount),L.intance.on("msg_388",this,this.onInitTitle),L.intance.on("msg_1002",this,this.onLanChange)}initSend(){}onLanChange(t){let e=parseInt(t[0]),i=parseInt(t[1]);switch(e){case 1:i==1&&we.instance.reload();break;case 2:break}}get timeStamp(){return this._timeStamp+(Laya.Browser.now()-this.recordStampTime)/1e3}set timeStamp(t){this.recordStampTime=Laya.Browser.now(),this._timeStamp=t}onReciveBuyTimes(t){a.instance.playerDto.updateRoleBuyTimes(t)}reciveTurnoverVo(t){}onInitSceneBg(t){}onInitTitle(t){}getAdRankById(t){return this.m_adRankDic&&this.m_adRankDic.get(t)?this.m_adRankDic.get(t):""}onGetPvpGrade(t){let e=t[0]}onInitStoreDiscount(t){}reciveBuyCustomerMsg(t){}onInitStyleAndTag(t){let e=t[0];for(let i=0;i<e.length;i++){let r=e[i],n=r[0],o=r[1],s=r[2]}}reciveFriendList(t){}reciveFirstRecharge(t){}hasReceiveFirst(){return this.firstRechargeState.toString()=="3"}recieveOnlineAward(t){}initFriendsGiftHandler(t){}initSystemOpen(t){this.systemOpenModel.initSystemOpen(t[0])}updateSystemOpen(t){let e=t[0];Al.instance.addNewOpenFun(e);for(let i=0;i<e.length;i++)this.systemOpenModel.openSystem.set(e[i],!0)}serverTimeUpdateHandler(){let t=this.hearIntervalSceond*1e3;Laya.timer.loop(t,this,this.onHear)}onHear(){}initMainTaskHandler(t){}itemsDataUpdataHandler(t,e,i){this.m_packageData.updateData(t,e,i),L.intance.event(_.EVENT_ITEM_UPDATE)}herosDataUpdataHandler(t){this.m_heroData.updateData(t)}itemsDataInitHandler(t){this.m_packageData.initData(t)}vipInfoHandler(t){this.vipInfo.trecharge=t[1],this.vipInfo.isRewards=t[2],this.vipInfo.daygift=t[3]}onVipUpgrade(t){}getConsumeValue(t){t=parseInt(t.toString());var e=this.playerDto.coins[t];return e>0?e:0}hasEnoughMoney(t,e,i=!0){switch(t=parseInt(t.toString()),e=parseInt(e.toString()),t){default:return this.playerDto.coins[t]<e&&i&&L.intance.event("open_buy",4),this.playerDto.coins[t]>=e}}moneyInfoHander(t,e=!0,i=!0){let r=!1,n=!1,o=0;for(let s of t)n=!1,s[0]==Fe.TYPE_EXP?(o=parseInt(s[1]+"")-this.playerDto.exp,this.playerDto.exp=parseInt(s[1]+""),n=o>0):(o=parseFloat(s[1]+"")-this.playerDto.coins[s[0]],this.playerDto.coins[s[0]]=parseFloat(s[1]+""),n=o>0),n&&Ue.instance.needPop&&i&&(r=!0,Ue.instance.addConsumeByServer([s[0],o]));e&&L.intance.event(_.ROLE_INFO_CHANGE),r&&Ue.instance.autoPop&&Kt.instance.startShow()}commonErrHandler(t){if(K.instance.hideLoading(),parseInt(t[0])==2e4){this.needPopError&&(Ce.instance.showErrorWord(parseInt(t[0])),L.intance.event(_.RECIVE_SUCESS_SERVICE));return}else if(parseInt(t[0])==20008){L.intance.event("open_buy",1);return}else if(parseInt(t[0])==20007){L.intance.event("open_buy",2);return}else if(parseInt(t[0])==20015){L.intance.event("open_buy",3);return}else if(parseInt(t[0])==20016){L.intance.event("open_buy",4);return}else if(parseInt(t[0])==10021){vi.ErrorTips=Ce.instance.get(10021),V.intance.openModule(h.ClientErrView);return}else if(parseInt(t[0])==10023){vi.ErrorTips=Ce.instance.get(10023),V.intance.openModule(h.ClientErrView);return}else if(parseInt(t[0])==10019){vi.ErrorTips=Ce.instance.get(10019),V.intance.openModule(h.ClientErrView);return}else if(parseInt(t[0])!=20053){if(parseInt(t[0])==10002){vi.ErrorTips=f.instance.getLanguage(5085),V.intance.openModule(h.ClientErrView);return}}Ce.instance.showErrorWord(parseInt(t[0])),console.log("Server Error Code:"+t[0])}dispose(){}parseNumber(t){let e=[];for(let i=0;i<t.length;i++){let r=t[i];r=this.dividedNumber(r),e.push(r.toString())}return e}dividedNumber(t){return t/1e4}};var Pu=class extends Me{constructor(){super()}};var Bu=class{constructor(t,e,i){this._idKeyName="";this._jsonName="";this._sheetItemCls=null;this._isParse=!1;this._idKeyName=e,this._jsonName=t,this._sheetItemCls=i,this._idToValueMap=new le,this._items=[]}parseJson(){if(this._isParse)return;let t=M.instance.getResByURL("config/"+this._jsonName+".json");if(!t)throw new Error("无效的配置数据"+this._jsonName);for(let e of t){let i=new this._sheetItemCls;i.beFill(e),this._idToValueMap.set(e[this._idKeyName],i),this._items.push(i),this.addItemProcess(i)}this._isParse=!0}addItemProcess(t){}getItemById(t){return this.excuteIsParse()&&this._idToValueMap.get(t)?this._idToValueMap.get(t):null}getAllItems(){return this.excuteIsParse()?this._items:null}excuteIsParse(){return this._isParse,this._isParse}};var Ru=class extends Bu{constructor(){super("","","");this._itemsTypeMap=null;this._itemsTypeMap=new le}getCombineKey(e,i,r){return e+r.toString()+i}getItemsByChildType(e,i){let r=this.getCombineKey(e,i,"childType_itemType");if(this._itemsTypeMap.get(r))return this._itemsTypeMap.get(r);this._itemsTypeMap.set(r,[]);let n=F.intance.m_dicItems.values;for(let o of n)o.child_type==e&&o.itm_type==i&&this._itemsTypeMap.get(r).push(o);return this._itemsTypeMap.get(r)}};var Nu=class extends Me{realIcon(){return"https://cdn.bunnyswap.cc/images/items/"+this.icon}get starArr(){if(this._starArr)return this._starArr;if(this._starArr=[],this.max_quality==0)return this._starArr;let e=this.quality/this.max_quality*5;for(let i=1;i<=5;i++)e>=i?this._starArr.push(0):i-e<=.5?this._starArr.push(2):this._starArr.push(1);return this._starArr}};var Ou=class extends Me{};var Hu=class extends Me{constructor(){super()}};var Uu=class extends Me{constructor(){super()}};var Vu=class extends Me{};var Gu=class extends Me{};var zu=class extends Me{};var Fu=class extends Me{};var ju=class extends Me{constructor(){super()}};var qu=class extends Me{get icon(){return this.id}set icon(e){this._icon=e}};var Wu=class extends Me{};var Ku=class extends Me{};var Bt=class Bt{constructor(){if(Bt._instance)throw new Error("SheetDataManager是单例,不可new.");Bt._instance=this,this._modelList=new le}static get intance(){return Bt._instance||(Bt._instance=new Bt),Bt._instance}resetTokenData(){}init(){let t=Laya.Browser.now();S.instance.systemOpenModel.parseJson(),this.m_dicItems=this.initConfigObject("item",Nu),this.m_dicShops=this.initConfig("shop",["id"],Ou),this.m_dicUnions=this.initConfig("union",["id"],qu),this.m_dicHeros=this.initConfigObject("hero",Vu),this.m_dicSkills=this.initConfigObject("skill",zu),this.m_dicBuffs=this.initConfigObject("buff",Fu),this.m_dicArenaDic=new le,this.m_dicArenaMulDic=this.initConfig("arena",["lv","coinType"],Gu,!0,Laya.Handler.create(this,this.onSetArena,null,!1)),this.m_dicWelfareBags=this.initConfig("welfarebag",["id"],Ku),this.m_dicMaps=this.initConfigObject("map",Wu),console.log("-----------------------sheetdata-time1:"+(Laya.Browser.now()-t)),this.m_dicHead=this.initConfig("head",["id"],Uu),this.m_dicCountry=this.initConfig("country",["id"],ju),this.m_dicGenerate=this.initConfigObject("general",Pu),this.m_dicWorldMapChildTypeItem=new le,console.log("-----------------------sheetdata-time2:"+(Laya.Browser.now()-t))}onSetArena(t){this.m_dicArenaDic.set(t.id,t)}preInit(){this.m_dicScene=this.initConfig("scene",["name"],Hu)}getItemModel(){return this.getDataModel(Bt.DataType_Items)}getGeneralValueById(t){return this.m_dicGenerate&&this.m_dicGenerate.get(t)?this.m_dicGenerate.get(t).value:0}getSocialShareValueById(t){return this.m_dicSocialShare&&this.m_dicSocialShare.get(t)?this.m_dicSocialShare.get(t).parameter:0}getDataModel(t){if(!this._modelList.get(t))switch(t){case Bt.DataType_Items:this._modelList.set(t,new Ru);break}return this._modelList.get(t)}getWelfareBagId(t){var e=this.m_dicWelfareBags;for(let r=0;r<e.values.length;r++){var i=e.values[r];if(t>=i.rankingMin&&t<=i.rankingMax)return i.id}return 0}static getArrFromDictionary(t,e,i){let r=[];for(let n=0;n<t.values.length;n++)t.values[n][e]+""==i+""&&r.push(t.values[n]);return r}getArrFromDicItemByKey(t,e){let i=[];for(let r=0;r<this.m_dicItems.values.length;r++)this.m_dicItems.values[r][t]+""==e+""&&i.push(this.m_dicItems.values[r]);return i}initConfigObject(t,e=null,i=null){let r="config/"+t+".json";console.log("initConfigObject： url: "+r);let n=M.instance.getResByURL(r).data;return new Yr(n,e)}initConfig(t,e,i=null,r=!1,n=null){let o="config/"+t+".json";console.log("initConfig url: "+o);let s=M.instance.getResByURL(o).data,l=new le;if(!s)return console.log("ERROR : SheetDataManager -->initConfig()  url:"+o),l;let c;for(let u=0;u<s.length;u++){let p=this.compoundKey(s[u],e);i?(c=new i,c.init==null&&console.log("ERROR :BaseItem> SheetDataManager -->initConfig()  url:"+o),c.init(s[u]),l.set(p,c),n&&n.runWith(c)):(l.set(p,s[u]),n&&n.runWith(s[u]))}if(r){let u=M.instance.setResURL(o);Laya.Loader.clearRes(u)}return l}compoundKey(t,e){let i="",r=e.length;if(r>1)for(let n=0;n<r;n++)i+=t[e[n]],n!=r-1&&(i+="_");else i=t[e[0]];return i}getCompoundKey(t){let e="",i=t.length;if(i>1)for(let r=0;r<i;r++)e+=t[r],r!=i-1&&(e+="_");else e=t[0];return e}initConfig2(t,e,i,r=!0){let n="config/"+t+".json",o=M.instance.getResByURL(n).data,s=new le;if(!o)return console.log("ERROR : SheetDataManager -->initConfig2()  url:"+n),s;let l;for(let c=0;c<o.length;c++){let u=o[c][e],p;s.get(u)==null?(p=[],s.set(u,p)):p=s.get(u),l=new i,l.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig2()  url:"+n),l.init(o[c]),p.push(l)}if(r&&t!="items"){let c=M.instance.setResURL(n);Laya.Loader.clearRes(c)}return s}getItemsBy(t,e){let i=this.getArrFromDicItemByKey("itm_type",t),r=[];for(let n of i)n.child_type.toString()==e.toString()&&r.push(n);return r}getSheetDataByMultiKey(t,e){let i=this.getCompoundKey(e);return t.get(i)}};Bt.DataType_Items="SheetDataManager:items",Bt.DataType_CatagoryChildType="SheetDataManager:CatagoryChildType",Bt.DataType_BeautyPiece="SheetDataManager:beautypiece",Bt.DataType_BeautyExp="SheetDataManager:beautyexp",Bt.DataType_ClothStyleScore="SheetDataManager:clothStyleScore";var F=Bt;var Yi=class Yi{constructor(){this.mainSceneX=10086;this.isCloseAll=!0;this.enterMainSceneTimes=0;this.isTopOpening=!1;this.isBottomOpening=!1;L.intance.on(_.EVENT_MODULE_ADDED,this,this.onAdded)}static get intance(){return Yi._instance||(Yi._instance=new Yi),Yi._instance}init(){}setup(){}onAdded(t){}getPreSceneData(){if(this.m_arrFromScenes.length<1)return[re.M_SCENE_MAIN,!0,1,null];{let t=this.m_arrFromScenes.pop();return console.log("pop-----------route："+this.m_arrFromScenes.join(" | ")),t}return[re.M_SCENE_MAIN,!0,1,null]}removePreSceneData(){this.m_arrFromScenes=[]}setBackScene(){let t=this.getPreSceneData();this.setCurrentScene(t[0],t[1],!1)}setMainScene(t=1,e=null){this.setCurrentScene(re.M_SCENE_MAIN,e)}async setCurrentScene(t,e=null,i=!1,r=!0){let n=!1;if(this.m_sceneCurrent&&this.m_sceneCurrent.name==t){console.log("currentScene："+this.m_sceneCurrent.name+"  openScene：："+t);return}this.isCloseAll?V.intance.closeAll():this.isCloseAll=!0,this.m_sceneCurrent&&(this.m_arrFromScenes||(this.m_arrFromScenes=[]),i&&this.m_sceneCurrent.m_arrOpenSceneData[3]&&this.m_arrFromScenes.push(this.m_sceneCurrent.m_arrOpenSceneData),console.log("open-----------scene："+this.m_arrFromScenes),this.fromScene=this.m_sceneCurrent.name,console.log("fromSceneName: "+this.fromScene),Yi.m_arrSceneToDialog.indexOf(t)==-1?(this.m_sceneCurrent==this.m_preScene&&(this.m_preScene=null),this.m_sceneCurrent.toScene=t,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),Lo.instance.dispose()):this.m_preScene=this.m_sceneCurrent,!i&&Yi.m_arrSceneToDialog.indexOf(t)==-1&&this.m_preScene&&(this.m_sceneCurrent=this.m_preScene,this.m_sceneCurrent.toScene=t,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),Lo.instance.dispose()));let o=F.intance.m_dicScene.get(t);switch(o&&o.music!=null&&o.music!="0"&&o.music!=""&&(console.log("SceneManager.setCurrentScene sceneItem.music: "+o.music),De.instance.playMusicByName(o.music)),t){case re.M_SCENE_MAIN:this.m_arrFromScenes=[],this.m_sceneCurrent=await Laya.Scene.open("scenes/mainView/MainScene.ls"),this.enterMainSceneTimes++;break;case re.M_SCENE_SHOP:this.m_sceneCurrent=await Laya.Scene.open("scenes/shop/ShopScene.ls",!0,e);break;case re.M_SCENE_RANK:this.m_sceneCurrent=await Laya.Scene.open("scenes/rank/RankScene.ls");break;case re.M_SCENE_SHOLARSHIP:this.m_sceneCurrent=await Laya.Scene.open("scenes/scholarship/ScholarshipScene.ls");break;case re.M_SCENE_HERO:this.m_sceneCurrent=await Laya.Scene.open("scenes/hero/MyHeroScene.ls");break;case re.M_SCENE_KNAPSACK:this.m_sceneCurrent=await Laya.Scene.open("scenes/item/KnapsackScene.ls");break;case re.M_SCENE_UNION:this.m_sceneCurrent=await Laya.Scene.open("scenes/union/UnionScene.ls");break;case re.M_SCENE_MYUNION:this.m_sceneCurrent=await Laya.Scene.open("scenes/union/MyUnionScene.ls",!0,e);break;case re.M_SCENE_MATCH_READY:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/MatchReady.ls");break;case re.M_SCENE_MATCH:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/Match.ls");break;case re.M_SCENE_ASSET:this.m_sceneCurrent=await Laya.Scene.open("scenes/asset/AssetScene.ls",!0,e);break;default:break}Le.logs("======================  打开Scene: "+t+"  ======================"),this.m_sceneCurrent.name=t,this.m_sceneCurrent.fromScene=this.fromScene,this.m_sceneCurrent.m_arrOpenSceneData=[t,e,i,r];let s=R.M_SCENE}initPreload(){let t=F.intance.m_dicScene.get(re.M_SCENE_PRE_LOAD);t&&t.music!=null&&t.music!="0"&&t.music!=""&&(console.log("SceneManager.initPreload sceneItem.music: "+t.music),De.instance.playMusicByName(t.music))}get currSceneName(){return this.m_sceneCurrent?this.m_sceneCurrent.name:""}};Yi.m_arrSceneToDialog=[];var be=Yi;var st=class st{constructor(){this.resArr=["gameIcon/map/1001/img_map.jpg","gameIcon/map/1002/img_map.jpg",{url:"gameIcon/map/map_1001.lh",type:Laya.Loader.HIERARCHY},{url:"gameIcon/map/map_1002.lh",type:Laya.Loader.HIERARCHY},"res/common/comm_bg/img_com_bg.jpg","res/common/comm/img_bg_large.png","res/common/comm/img_bg_medium.png","res/common/comm/img_bg_small.png",{url:"res/common.atlas",type:Laya.Loader.ATLAS},{url:"gameIcon/effect/match/beiji/spine.sk"},{url:"gameIcon/effect/match/dunpai/spine.sk"},{url:"gameIcon/effect/ruchang/effect1.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect2.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect3.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/hua/effect.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_3.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_4.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_5.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_6.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_4.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_5.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_6.skel",type:Laya.Loader.SPINE},{url:"scenes/mainView/MainScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/shop/ShopScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/hero/MyHeroScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/Match.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchHeroSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/DamageNumber.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/notice/TxtLoadingView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/notice/TxtNoticeView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/CreateRoomDialog.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/EnterRoomView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndRankView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchReadyView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndView.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/closeBtn.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/defaultButton.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/DropBox.lh",type:Laya.Loader.HIERARCHY},{url:"resources/sound/destroy.wav",type:Laya.Loader.BUFFER},{url:"resources/sound/hit.wav",type:Laya.Loader.BUFFER}];this.m_arrPreResource=["config/spot.json","config/scene.json"];this.m_arrInitResource=["config/general.json","config/head.json","config/country.json","config/variable.json","config/equip.json","config/shop.json","config/union.json","config/hero.json","config/skill.json","config/buff.json","config/item.json","config/arena.json","config/map.json","config/level.json","config/welfarebag.json","config/mailmessage.json"];this.m_objModuleReource={FindScene:["res/atlas/find.atlas"],MainScene:[],ShopScene:[],RankScene:[],ScholarshipScene:[],CommentDialog:["res/atlas/comment.atlas"],GuideView:["res/atlas/guide.atlas","res/atlas/ShopView.atlas","config/newplayer.json"],ShareView:["res/atlas/share.atlas"],SelectHeadDialog:[],UnionApplyDialog:["config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json"],GuildScene:["res/atlas/union.atlas","config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json","config/guild_apply.json","config/guild_contrubute.json"],UnionWarScene:["res/atlas/unionWar.atlas","config/resource_node.json"],HeroScene:["res/atlas/hero.atlas","config/hero_lv.json","config/hero_attup.json","res/atlas/equip.atlas"],AFKBattleScene:["res/atlas/battle.atlas"],ArenaScene:["res/atlas/Arena.atlas"],KnapsackScene:["res/atlas/mainUI1.atlas"],UnionScene:["res/union1.atlas"]};this.m_objModuleViews={NoServerView:"scenes/createRole/NoServer.lh",CreateLoginView:"scenes/createRole/CreateLoginView.lh",ChangeHeadDialog:"scenes/createRole/ChangeHeadDialog.lh",HeroGetDialog:"scenes/shop/HeroGetDialog.lh",ItemGetDialog:"scenes/item/ItemGetDialog.lh",RewardGetDialog:"scenes/item/RewardGetDialog.lh",KnapsackTipDialog:"scenes/item/KnapsackTipDialog.lh",SelectHeadDialog:"scenes/createRole/SelectHeadDialog.lh",TxtNoticeView:"scenes/notice/TxtNoticeView.lh",NoticeDialog:"scenes/notice/NoticeDialog.lh",ChampDetailDialog:"scenes/asset/ChampDetailDialog.lh",ChampRecordDialog:"scenes/asset/ChampRecordDialog.lh",RoleInfoDialog:"scenes/createRole/RoleInfoDialog.lh",RemGetDialog:"scenes/createRole/RemGetDialog.lh",CreateRoomDialog:"scenes/mainView/CreateRoomDialog.lh",EnterRoomView:"scenes/mainView/EnterRoomView.lh",InputPwdDialog:"scenes/mainView/InputPwdDialog.lh",HeroDetailDialog:"scenes/hero/HeroDetailDialog.lh",MatchEndRankView:"scenes/match/MatchEndRankView.lh",MatchReadyView:"scenes/match/MatchReadyView.lh",MatchEndView:"scenes/match/MatchEndView.lh",GameSettingLanguageDialog:"scenes/gameSetting/GameSettingLanguageDialog.lh",SkillTipDialog:"scenes/hero/SkillTipDialog.lh",BaseAlertDialog:"scenes/baseAlert/BaseAlertDialog.lh",CreateSubWalletDialog:"scenes/scholarship/CreateSubWalletDialog.lh",WalletChooseHeroDialog:"scenes/scholarship/WalletChooseHeroDialog.lh",WalletChoosePropsDialog:"scenes/scholarship/WalletChoosePropsDialog.lh",EmployInfoDialog:"scenes/scholarship/EmployInfoDialog.lh",HireDetailDialog:"scenes/asset/HireDetailDialog.lh",ProxyDetailDialog:"scenes/asset/ProxyDetailDialog.lh"};this.m_objConfigReource={};this.m_commonResource=new le;this.loadingView=Laya.Browser.window.loadingView;this.ii=100;this.baseUrl="https://cdn-5ejmbrg9nhxc.vultrcdn.com/hero/";if(st._instance)throw new Error("LayerManager是单例,不可new.");st._instance=this}static get instance(){return st._instance==null&&(st._instance=new st),st._instance}init(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),this.initGameLanguage()}initGameLanguage(){st.GameLanguage_URL="config/language.json",Laya.loader.load(st.GameLanguage_URL,Laya.Handler.create(this,this.initGameResource))}initGameResource(t){if(t==null)return;let e=st.instance.getResBySetURL(st.GameLanguage_URL);f.instance.initLanTypes(e.data),Laya.loader.clearRes(st.GameLanguage_URL),this.onConfigLoaded()}onError(t){}onConfigLoaded(){let t=new ea;t.ID=4,t.Event="加载语言包信息",we.instance.sendCustumEvent(4,null,t),X.ignoreLang||(S.instance.m_strLanguage=f.instance.getLanIdByType(X.User_Lan)),this.m_UILang="config/lang_english"+S.instance.m_strLanguage+".json",this.m_NomalLang="config/english"+S.instance.m_strLanguage+".json",this.m_ErrorLang="config/error"+S.instance.m_strLanguage+".json",this.m_arrPreResource.push(this.m_UILang),this.m_arrPreResource.push(this.m_NomalLang),this.m_arrPreResource.push(this.m_ErrorLang),this.initResourceURL(this.m_arrPreResource,!0),this.initResourceURL(this.m_arrInitResource,!0),this.addFont1()}addFont1(){Laya.loader.load("res/font/CookieRun Regular.otf",Laya.Loader.TTF).then(()=>{this.loadDemoResource()})}loadDemoResource(){Laya.loader.load(this.resArr,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{K.instance.init(),O.instance.damageNumPrefab=Laya.loader.getRes("scenes/match/DamageNumber.lh"),O.instance.roleAniPrefab=Laya.loader.getRes("scenes/match/MatchHeroSpr.lh"),O.instance.ruchangEffects=[Laya.loader.getRes("gameIcon/effect/ruchang/effect1.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect2.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect3.skel")],O.instance.huaEffect=Laya.loader.getRes("gameIcon/effect/hua/effect.skel"),O.instance.beijiTemplet=Laya.loader.getRes("gameIcon/effect/match/beiji/spine.sk"),O.instance.dunpaiTemplet=Laya.loader.getRes("gameIcon/effect/match/dunpai/spine.sk"),O.instance.diquanEffect3=Laya.loader.getRes("gameIcon/effect/diquan/img_3.skel"),O.instance.diquanEffect4=Laya.loader.getRes("gameIcon/effect/diquan/img_4.skel"),O.instance.diquanEffect5=Laya.loader.getRes("gameIcon/effect/diquan/img_5.skel"),O.instance.diquanEffect6=Laya.loader.getRes("gameIcon/effect/diquan/img_6.skel"),O.instance.baoqiEffect4=Laya.loader.getRes("gameIcon/effect/baoqi/img_4.skel"),O.instance.baoqiEffect5=Laya.loader.getRes("gameIcon/effect/baoqi/img_5.skel"),O.instance.baoqiEffect6=Laya.loader.getRes("gameIcon/effect/baoqi/img_6.skel");var t=O.instance.roleAniPrefab.create();console.log(" ================ roleAniPrefab: "+t),this.onLoadThreeDimen()})}onLoadThreeDimen(){Laya.loader.load(this.m_arrPreResource,Laya.Handler.create(this,this.onPreAssetLoaded),Laya.Handler.create(this,this.onPreAssetPress2,null,!1))}onPreAssetPress1(t){this.va=(t*100*.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetPress2(t){this.va=(t*100*.5+.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetLoaded(t){if(!t)return;let e=Laya.Browser.now();$r.instance.initSpotCfgData(),this.initResourceURL(this.m_objModuleReource),this.initResourceURL(this.m_objConfigReource),we.instance.sendCustumEvent(5),F.intance.preInit(),this.setGlobalLanguage(),we.instance.sendCustumEvent(6),L.intance.event(_.EVENT_BACK_TO_LOGIN),be.intance.initPreload(),this.loadingView&&this.loadingView.loading(100),console.log("-----------------------preload-time:"+(Laya.Browser.now()-e))}setGlobalLanguage(){let t=st.instance.getResByURL(this.m_NomalLang);f.instance.initConfigLan(t.data);let e=st.instance.getResByURL(this.m_UILang);f.instance.initUILan(e.data);let i=st.instance.getResByURL(this.m_ErrorLang);Ce.instance.initErrData(i.data),this.clearResUrlByRoot(this.m_UILang,!0),this.clearResUrlByRoot(this.m_NomalLang,!0),this.clearResUrlByRoot(this.m_ErrorLang,!0)}initResourceURL(t,e=!1){if(t instanceof Array)this.setResURLArr(t,e);else if(t instanceof Object)for(let i in t)this.setResURLArr(t[i],e)}setResURLArr(t,e){let i,r;for(let n=0;n<t.length;n++)e?(this.m_commonResource.set(t[n],!0),r=this.setResURL(t[n]),i=this.getTypeFromUrl(r),t[n]={url:r,type:i,size:1,priority:1}):this.m_commonResource.get(t[n])?(t.splice(n,1),n--):(r=this.setResURL(t[n]),i=this.getTypeFromUrl(r),t[n]={url:r,type:i,size:1,priority:1})}getTypeFromUrl(t){let{ext:e,typeId:i,main:r,loaderType:n}=Laya.Loader.getURLInfo(t);st._extReg.lastIndex=t.lastIndexOf(".");let o=st._extReg.exec(t);return o&&o.length>1?o[1].toLowerCase():"text"}setResURL(t){return t}clearResUrlByRoot(t,e=!1){let i=t;Laya.loader.clearRes(i)}hasFormatEffectUrl(t){return t.indexOf("effect/")>=0}setItemResURL(t){return t&&t.hasOwnProperty("item_img")?this.setResURL("icon/"+t.item_img+".png"):""}setThreeDimenUrl(t){return t?this.setResURL("threeDimen/"+t):""}getThreeDimenUrl(t){let e=this.setResURL("threeDimen/"+t);return Laya.Loader.getRes(e)}getResByURL(t){let e=st.instance.setResURL(t);return Laya.Loader.getRes(e)}getResBySetURL(t){return Laya.Loader.getRes(t)}loadModuleUrl(t,e=null,i=null,r=1,n=!0){console.log("loadModuleUrl m_strName: "+t),this.ii++;let o=st.instance.m_objModuleReource[t];if(o==null||o.length<1){e.run();return}Laya.loader.load(o,Laya.Handler.create(this,this.loadItemComplete,[e,o]),Laya.Handler.create(this,this.onLoadProgress,[t],!1),i,r,n,this.ii.toString())}loadItemComplete(t,e){this.usedUrlDic||(this.usedUrlDic=new le);for(let i in e){let r=e[i].url,n=this.usedUrlDic.get(r);n?this.usedUrlDic.set(r,++n):this.usedUrlDic.set(r,1)}t.run()}clearModuleUrl(t){console.log("clearModuleUrl m_strName: "+t);let e=st.instance.m_objModuleReource[t];for(let i in e){let r=e[i].url;if(this.usedUrlDic){let n=this.usedUrlDic.get(r);n-=1,n<1?(this.usedUrlDic.remove(r),Laya.loader.clearRes(r)):this.usedUrlDic.set(r,n)}}}onLoadProgress(t,e){}loadResource(t,e=null,i=null,r=null,n=1,o=!0){Laya.loader.load(t,e,i,r,n,o)}getCountryIcon(t){return this.setResURL("gameIcon/country/img_"+t+".png")}getChestIcon(t){return this.setResURL("gameIcon/items/chest/img_"+t+".png")}getChestBigIcon(t){return this.setResURL("gameIcon/items/chestBig/img_"+t+".png")}getHeroEggIcon(t){return this.setResURL("gameIcon/hero/heroEgg/img_"+t+".png")}getHeroEggBigIcon(t){return this.setResURL("gameIcon/hero/heroEggBig/img_"+t+".png")}getHeroHeadIcon(t){return this.setResURL("gameIcon/hero/heroHead/img_"+t+".png")}getHeroQuality(t){return this.setResURL("gameIcon/hero/heroQuality/img_"+t+".png")}getHeroBackIcon(t){return this.setResURL("gameIcon/hero/heroDetail/img_hero_di_"+t+".png")}getHeroFrontIcon(t){return this.setResURL("gameIcon/hero/heroDetail/img_hero_"+t+".png")}getItemIcon(t){return this.setResURL("gameIcon/items/item/img_"+t+".png")}getItemBgIcon(t){return this.setResURL("gameIcon/items/itemBg/img_"+t+".png")}getItemBigIcon(t){return this.setResURL("gameIcon/items/itemBig/img_"+t+".png")}getItemQualityIcon(t){return this.setResURL("gameIcon/items/itemQuality/img_"+t+".png")}getMoneyIcon(t){return this.setResURL("gameIcon/items/money/img_"+t+".png")}getAttrIcon(t){return this.setResURL("gameIcon/attr/img_attr_"+t+".png")}getSkillIcon(t,e=!1){let i;return e?i=this.setResURL("gameIcon/skill/skills/img_big_"+t+".png"):i=this.setResURL("gameIcon/skill/skills/img_"+t+".png"),i}getMatchSkillIcon(t){return this.setResURL("gameIcon/skill/matchSkills/img_"+t+".png")}getPlayerIcon(t){return parseInt(t)>0?this.setResURL("gameIcon/head/headCircle/img_"+t+".png"):t}getUnionIcon(t){return parseInt(t)>0?this.setResURL("gameIcon/union/img_trade_"+t+".png"):t}getSceneBgUrl(t){return"scene/"+t+".jpg"}clearSKinUrl(t){for(let e in t)t[e]instanceof String&&t[e].indexOf("skincolor")==-1&&Laya.loader.clearRes(t[e]);t=[]}getFunctionIcon(t){return this.setResURL("icon/functionIcon/"+t+".png")}getNewFunIcon(t){return this.setResURL("icon/newFunIcon/"+t+".png")}getSoundURL(t,e=".ogg"){let i;return i=this.setResURL("mp3/"+t+e),i}getSoundURLogg(t){let e;return e=this.setResURL("mp3/"+t),e}getSceneUrl(t){return"scene/sceneBg/"+t+".jpg"}getMianSysIcon(t){return this.setResURL("icon/mainSysIcon/btn_"+t+".png")}getEffectUrl(t){return this.setResURL("effect/"+t+".json")}getLoadingUrl(t){return this.setResURL("effect/"+t)}getGuangImg(t){return this.setResURL("swf/"+t+".png")}getGuildProofBg(t){return this.setResURL("scene/guild/proof/"+t+"/1.png")}getGuildProofHots(t){return this.setResURL("scene/guild/proof/"+t+"/"+t+"/"+t+".json")}getShareImgUrl(t,e=!1,i=!1){let r;return i?t:(t=t+".jpg",e?r="https://mutantbox.8686c.com/16/qa/common/share/"+t:r="https://cdn.test.com/16/qa/common/share/"+t,r)}getHeadUrl(t){return"common/common_icon/"+t+".png"}getMapImg(t){return"gameIcon/map/"+t+"/img_map.jpg"}getMapPrefab(t){return"gameIcon/map/map_"+t+".lh"}clearCache(){}getHeroHeadRes(t,e){return X.Res==0?"gameIcon/hero/heroHead/img_"+t+".png":this.baseUrl+`${t}/${e}.png`}getHeroSkRes(t,e){return X.Res==0?`gameIcon/hero/heroSk/${t}/img_hero.skel`:this.baseUrl+`${t}/${e}/img_hero.skel`}};st._extReg=/\.(\w+)\??/g;var M=st;var Yu=class extends Laya.Dialog{constructor(){super();this.canClickMask=!0;this.preinitialize()}_onClick(e){let i=e.target;if(i)switch(i.name){case Laya.Dialog.CLOSE:break;case Laya.Dialog.CANCEL:break;case Laya.Dialog.SURE:break;case Laya.Dialog.NO:break;case Laya.Dialog.OK:break;case Laya.Dialog.YES:this.destroy();break}}preinitialize(){this.init()}init(){}createChildren(){super.createChildren(),this.createUI(),this.initialize()}createUI(){}initialize(){this.addEvent(),this.initData()}addEvent(){}initData(){}removeEvent(){}disposeDialog(){Laya.Dialog.manager.close(this)}destroy(e=!0){this.removeEvent(),this._view&&(this._view.destroy(),this._view=null),super.destroy()}sendData(e,i=null){i==null&&(i=[])}};var $u=class extends Yu{constructor(){super();this.destroyDoCancel=!1}addEvent(){this.okBtn=this._alertView.getChildByName("okBtn"),this.cancleBtn=this._alertView.getChildByName("cancleBtn"),this.alertTitle=this._alertView.getChildByName("alertTitle"),this.descTf=this._alertView.getChildByName("alertDesc"),this._alertView.on(Laya.Event.CLICK,this,this.onClickEvent)}createUI(){this.createAlert()}createAlert(){this._alertView||(this._alertView=new Laya.View),this.addChild(this._alertView)}onClickEvent(e){let i=e.target;i.name=="okBtn"?(this._okHandler&&this._okHandler.runWith(null),this.close()):i.name=="cancleBtn"&&(this.destroyDoCancel=!1,this._cancelHandler&&this._cancelHandler.runWith(null),this.close())}alert(e,i,r,n=null,o=!1,s=null){let l=66;this._okHandler=i,this._cancelHandler=r,this.destroyDoCancel=o,e&N.YES&&!(e&N.NO)?(this.okBtn.x=this._alertView.width-this.okBtn.width>>1,this.cancleBtn.visible=!1,this.okBtn.label="Sure"):e&N.NO&&!(e&N.YES)?this.okBtn.visible=!1:e&N.YES&&e&N.NO,n&&this.descTf&&(n instanceof Array?(this.alertTitle.text=n[0],this.descTf.text=n[1]):this.descTf.text=n),s&&s.runWith(this)}removeSelf(){return this.destroyDoCancel&&this._cancelHandler&&this._cancelHandler.run(),super.removeSelf()}removeEvent(){super.removeEvent(),this._okHandler=null,this._cancelHandler=null}};var ro=class extends Laya.Script{onAdded(){this.m_iLayerType=R.M_PANEL,this.m_iPositionType=R.CENTER,this.m_canTouch_all=!1,this.m_ioffsetX=0,this.m_ioffsetY=0,this.m_arrMapEvent=[],this.m_iAdaptation_Top=0,this.m_iAdaptation_Buttom=0,this.m_bAutoResizeWidth=!1,this.m_bAutoResizeHeith=!1,this.m_bAutoResize=!1,this.hideLoadingBySelf=!1}get loadPaths(){return this._loadPaths}onStageResize(){}setIphoneX(){if(X.m_bIsIphoneX&&this._view){let e=this._view.numChildren,i=[];if(e)for(let r=0,n=e;r<n;r++){let o=this._view.getChildAt(r);o.name==="ui_top"?isNaN(o.top)?o.y+=this.m_iAdaptation_Top:o.top+=this.m_iAdaptation_Top:o.name=="ui_bottom"&&(o.bottom+=this.m_iAdaptation_Buttom)}}}onAwake(){X.m_bIsIphoneX&&(this.m_iAdaptation_Top=X.IPHONEX_TOP,this.m_iAdaptation_Buttom=X.IPHONEX_BUTTOM),this.loadPaths&&this.loadPaths.length?(this.hideLoadingBySelf=!0,Laya.loader.load(this.loadPaths,Laya.Handler.create(this,this.loadPathsComplete))):(this.createUI(),this.createUILater())}createUILater(){this.createUIEnd()}loadPathsComplete(){this.createUI(),this.loadPathsCompleteLater()}loadPathsCompleteLater(){this.createUIEnd(),this.onStageResize(),K.instance.hideLoading()}createUI(){}createUIEnd(){this.setIphoneX(),this._addEvent(),this.initData(),this.onLoaded()}_addEvent(){this.btn_com_help&&this.btn_com_help.on(Laya.Event.CLICK,this,this.onHelp),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.addEvent()}addEvent(){}initData(){}onLoaded(){}removeEvent(){}backToPreScene(){let e=be.intance.getPreSceneData();be.intance.setCurrentScene(e[0],e[1],e[2],e[3],!1)}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN,!0,!0,1)}addMapEvent(e,i,r,n,o=null){e.on(i,r,n,o),this.m_arrMapEvent.push(e)}removeAllMapEvent(){if(this.m_arrMapEvent){for(let e=0;e<this.m_arrMapEvent.length;e++)this.m_arrMapEvent[e].offAll();this.m_arrMapEvent.splice(0,this.m_arrMapEvent.length),this.m_arrMapEvent=null}}dispose(){console.log("<<< BaseView.dispose() className: "+this.constructor.name+" ==== name: "+this._view.name+" ==== m_strName: "+this.m_strName),Laya.stage.off(Laya.Event.RESIZE,this,this.onStageResize),this.btn_com_help&&this.btn_com_help.off(Laya.Event.CLICK,this,this.onHelp),this.removeEvent(),this.removeAllMapEvent(),V.intance.removeViewFromModuleManger(this),this.m_arrMapEvent=null,this.m_strName&&this.m_strName!=""||(this.m_strName=this.constructor.name),M.instance.clearModuleUrl(this.m_strName),this.m_strName=null,this._view&&(Laya.timer.clearAll(this._view),Laya.Tween.clearAll(this._view),this._view.offAll(),this._view.removeSelf(),this._view.destroy(!0),this._view=null),Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}sendData(e,i=null,r=null,n=!0){i==null&&(i=[])}get btn_com_help(){return this._view?this._view.getChildByName("btn_com_help"):null}get btn_back(){return this._view?this._view.getChildByName("btn_back"):null}onHelp(){this.m_helpId&&V.intance.openModule(h.HelpDialog,this.m_helpId)}resetView(){this.onStageResize()}};var $s=class a{constructor(){this.mail_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"||(this.mail_contract=new window.web3.eth.Contract(oe.SERIESHEROMALL_ABI,oe.SERIESHEROMALL_ADDRESS))}async initData(){this.mailList=new le,K.instance.showLoading(!0);let t=await this.mail_contract.methods.getPricesLength().call();for(let e=0;e<t;e++){let i=await this.mail_contract.methods.getPriceByIndex(e).call(),r=new ao;if(r.type=2,r.idx=e,Object.assign(r,i),this.mailList.set(r.idx,r),r.showPrice=parseEther(r.currentPrice+""),r.currentToken!=oe.ADDRESS0){let n=new window.web3.eth.Contract(oe.TOKEN_ERC20ABI,r.currentToken);r.tokenContract=n,r.currentTokenName=await n.methods.symbol().call()}else r.currentTokenName="BNB"}K.instance.hideLoading()}async recruit(t){if(K.instance.showLoading(!0),!await this.mail_contract.methods.accountIsInWhiteList(t,Y.instance.walletAddress).call()){K.instance.hideLoading(),L.intance.event(_.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(6055)]);return}if(this.isOpen=await this.mail_contract.methods.getIsOpen().call(),!this.isOpen){K.instance.hideLoading(),L.intance.event(_.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(12)]);return}let i=this.mailList.get(t);if(i.totalSupply===i.sellAmount){K.instance.hideLoading(),L.intance.event(_.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(13)]);return}let r=i.currentPrice,n=i.currentToken,o="0",s="18";n!=oe.ADDRESS0?(o=await i.tokenContract.methods.balanceOf(Y.instance.walletAddress).call(),s=await i.tokenContract.methods.decimals().call()):o=window.web3.eth.getBalance(Y.instance.walletAddress);let l=Jt.fromWei(r,s,2);if(parseFloat(o)<parseFloat(l)){K.instance.hideLoading(),L.intance.event(_.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(14)]);return}if(n!=oe.ADDRESS0){if(!await Y.instance.allowanceAddressByTokenAddress(oe.SERIESHEROMALL_ADDRESS,n)){K.instance.hideLoading(),L.intance.event(_.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(15)]);return}await this.mail_contract.methods.recruit(t).send({from:Y.instance.walletAddress},(u,p)=>{if(u){K.instance.hideLoading(),L.intance.event(_.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(16)]);return}})}else await this.mail_contract.methods.recruit(t).send({from:Y.instance.walletAddress,value:r},(c,u)=>{if(c){K.instance.hideLoading(),L.intance.event(_.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(16)]);return}})}};var qe=class{};qe.FUN_MYHOME=1,qe.FUN_STORE=2,qe.FUN_TRAVEL=3,qe.FUN_PVP=1011,qe.FUN_PVPMULTI=7001,qe.FUN_GUILDPHOTO=1004,qe.FUN_PET=1003,qe.FUN_1V1=1014,qe.FUN_THUMB=9005,qe.FUN_THUMB_RANKING_REWARD=3008,qe.FUN_BOYFRIEND=4005,qe.FUN_TIMESTAGE=1006,qe.FUN_FARM_MODEL=1008611,qe.FUN_GROUP_PHOTO=1008612,qe.FUN_TV=1001,qe.FUN_PRAY=1005,qe.FUN_WORKSHOP=1006,qe.FUN_SHOP_CLOTH=4001,qe.FUN_SHOP_PRAY=2108,qe.FUN_SHOP_1V1=2119,qe.FUN_SHOP_PVP=2107,qe.FUN_SHOP_THUMB=2113,qe.FUN_SHOP_GUILD=2111,qe.FUN_FIRST_RECHARGE=2201,qe.FUN_ACTIVITY_CENTER=2002,qe.FUN_LIMITRECRUIT=2003;var Or=class extends Laya.Script{constructor(){super()}};Or.INIT_LUCKDEAW_EVENT="DigEvent:INIT_DIG_EVENT";var Xu=class extends ro{constructor(e){super();this.currTab=0;this.type=1;this.hasFree=!1;this.type=e}get view(){return this._view}createUI(){this._view=new Laya.View,this.m_iPositionType=R.UP,this.onStageResize(),L.intance.on(Or.INIT_LUCKDEAW_EVENT,this,this.luckdrawevevt),L.intance.on(_.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),this.hideLoadingBySelf=!0,this.view.btn_myhero.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.view.btn_myhero]),this.view.box_skill.on(Laya.Event.CLICK,this,this.onShowSkill),this.view.btn_recruit1.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.view.btn_recruit1]),this.view.btn_heroshop.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.view.btn_heroshop]),this.view.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.view.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.view.listPanel1.vScrollBarSkin="",this.view.listPanel2.vScrollBarSkin="",this.view.animation_hreo.visible=!0,this.view.box_1.visible=!1,this.view.box_2.visible=!1,this.view.animation_hreo._complete=Laya.Handler.create(this,this.stopAni,[6]),this.view.tf_congratulation.text=f.instance.getLanguage(131),this.view.tf_congratulation.visible=!1,this.view.img_bg.visible=!1,this.initLuckDrawView(),Ke.instance.heroOutputRate();let e=(Laya.stage.height-X.DESIGN_HEIGHT)/2}setTab(e){for(let i=1;i<3;i++)e==i?this.view["btn_"+i].skin="common/common_btn/btn_tab1.png":this.view["btn_"+i].skin="common/common_btn/btn_tab2.png"}async initLuckDrawView(){await Ke.instance.initData(),await $s.instance.initData(),this.hasFree=await Ke.instance.hasFree(),!this.destroyed&&(this.type==qe.FUN_LIMITRECRUIT?this.onClickTab(2):this.onClickTab(1))}onClickTab(e){if(this.currTab!=e)if(this.setTab(e),e==1)if(this.hasFree)this.view.img_bg.visible=!0,this.view.box_1.visible=!0,this.view.box_2.visible=!1,this.view.label_cost.text=f.instance.getLanguage(30);else{this.view.box_1.visible=!1,this.view.box_2.visible=!0;let i=Ke.instance.mailList;if(this.destroyed)return;i&&i.values.length>0?(this.getItemByStarAndMintLevel(1,1)?this.view.box1_draw_1.dataSource=this.getItemByStarAndMintLevel(1,1):this.view.box1_draw_1.visible=!1,this.getItemByStarAndMintLevel(1,2)?this.view.box1_draw_2.dataSource=this.getItemByStarAndMintLevel(1,2):this.view.box1_draw_2.visible=!1,this.getItemByStarAndMintLevel(2,3)?this.view.box1_draw_3.dataSource=this.getItemByStarAndMintLevel(2,3):this.view.box1_draw_3.visible=!1,this.getItemByStarAndMintLevel(3,4)?this.view.box1_draw_4.dataSource=this.getItemByStarAndMintLevel(3,4):this.view.box1_draw_4.visible=!1,this.view.listPanel1.visible=!0,this.view.listPanel2.visible=!1,this.view.tf_noData.visible=!1):(this.view.tf_noData.visible=!0,this.view.listPanel1.visible=!1,this.view.listPanel2.visible=!1)}else{this.view.box_1.visible=!1,this.view.box_2.visible=!0;let i=$s.instance.mailList;if(this.destroyed)return;i&&i.values.length>0?(i.get(0)?this.view.box2_draw_1.dataSource=i.get(0):this.view.box2_draw_1.visible=!1,i.get(1)?this.view.box2_draw_2.dataSource=i.get(1):this.view.box2_draw_2.visible=!1,i.get(2)?this.view.box2_draw_3.dataSource=i.get(2):this.view.box2_draw_3.visible=!1,this.view.listPanel1.visible=!1,this.view.listPanel2.visible=!0,this.view.tf_noData.visible=!1):(this.view.tf_noData.visible=!0,this.view.listPanel1.visible=!1,this.view.listPanel2.visible=!1)}}getItemByStarAndMintLevel(e,i){let r=Ke.instance.mailList;for(let n of r.values){let o=n;if(o.rarity===e+""&&o.mineralLevel===i+"")return o}return!1}onStageResize(){super.onStageResize();let e=Laya.stage.height-X.DESIGN_HEIGHT;this.view.la_img_bg.height+=e,this.view.listPanel2.height+=e}onShowSkill(){V.intance.openModule(h.SkillTipDialog)}createUIEnd(){this.view.box_sucess2.visible=!1,this.view.btn_recruit1.visible=!0}stopAni(e){console.log("stopAni: "+e),this.view.animation_hreo.paused(),this.view.animation_hreo.stop()}handleClickBtn(e){switch(e){case this.view.btn_myhero:V.intance.openModule(h.MyHeroView),console.log("My hero");break;case this.view.btn_heroshop:console.log("Hero shop");break;case this.view.btn_recruit1:console.log("Hero Recruit"),this.drawCard();break}}async drawCard(){let e=await Ke.instance.recruitFree()}onDrawBack(e){if(e instanceof Array)for(let i of e){let r=i,n=this.view.box_card;n.dataSource=r,this.startAni()}else Ce.instance.showErrorWord(e)}startAni(){this.view.box_sucess2.visible=!0,this.view.animation_hreo.paused(),this.view.animation_hreo.play(0,!1),this.view.tf_congratulation.visible=!0,Laya.timer.once(1500,this,this.showCard)}showCard(){this.hasFree?this.view.box_1.visible=!1:this.view.box_2.visible=!1,this.view.box_sucess2.visible=!0,this.view.box_skill.visible=!1,this.view.btn_recruit1.visible=!1,Laya.Tween.to(this.view.box_card,{scaleX:1.5,scaleY:1.5},100,null,Laya.Handler.create(this,this.onScaleEnd))}onScaleEnd(){Laya.Tween.to(this.view.box_card,{scaleX:1.4,scaleY:1.4},100,null,Laya.Handler.create(this,this.onScaleEnd1))}onScaleEnd1(){}luckdrawevevt(){}removeEvent(){L.intance.off(Or.INIT_LUCKDEAW_EVENT,this,this.luckdrawevevt),L.intance.off(_.EVENT_HERO_DRAW_BACK,this,this.onDrawBack)}};var Qu=class extends qt{constructor(){super()}get view(){return this._view}dispose(){super.dispose()}createUI(){this._view=new Laya.View,this.addChild(this._view)}};var Zu=class extends qt{constructor(e){super();this.vo=e}get view(){return this._view}dispose(){super.dispose()}createUI(){this._view=new Laya.View,this.addChild(this._view)}initData(){this.view.img_icon.skin=`gameIcon/attricon/img_daoju_${this.vo.type-1e3}.png`,this.view.label_hp.text=`${f.instance.getLanguage(this.vo.name)} : ${this.getShowValue(this.vo.value)}`,this.view.label_level.text=f.instance.getLanguage("304")+` : ${this.vo.level}`,this.view.lable_desc.text=`${f.instance.getLanguage(this.vo.desc)}`}getShowValue(e){return this.vo.type===1003||this.vo.type===1005?(parseFloat(e+"")*100).toFixed(1)+"%":parseInt(e)}};var Te=class a{static toFixed(t,e){if(t.toString().indexOf(".")==-1)return t;{let i=t.toFixed(e);return parseFloat(i)}}static toFixedWithPercent(t,e,i="+"){let r;return t.toString().indexOf(".")==-1?r=i+t*100+"%":(e=e-2,e<0&&(e=0),r=i+(t*100).toFixed(e)+"%"),r}static getGoldStr(t){let e;return t>999999?e=parseInt(String(t/1e5))+"m":e=t,e}static numStringFormat(t){let e=t;return S.instance.m_strLanguage==2?t.length>4&&(e=String(t).replace(/(\d)(?=(\d{3})+$)/g,"$1 ")):e=String(t).replace(/(\d)(?=(\d{3})+$)/g,"$1,"),e}static numSimple(t){let e=t,i=parseInt(parseInt(e)/1e3+"");return i>0?i+"k":a.numStringFormat(e)}static numStringFormat2(t){let e;if(t>999999)e=a.getNumStr(t,1e6,"M");else if(t>999)e=a.getNumStr(t,1e3,"K");else return t+"";return e}static getNumStr(t,e,i){return parseInt(Math.floor(t/e)+"")+i}static getTimeStr(t){let e;return t<3600?e=f.instance.getLanguage(9024,Math.ceil(t/60)):t<3600*24?e=f.instance.getLanguage(9025,Math.ceil(t/3600)):e=f.instance.getLanguage(9025,Math.ceil(t/(3600*24))),e}static BigInt(t){return 0}static isInteger(t){return t%1===0}static formatNumber(t,e=2){return Number.isInteger(t)?t:parseFloat(t.toFixed(e))}static formatNumberStr(t,e=2){return Number.isInteger(t)?t:parseFloat(t.toFixed(e)).toString()}static filterNumFormat(t,e=2,i=!1){if(!t)return t;if(t<1e3&&t>0)return parseFloat(t.toFixed(e)).toString();if(t==="0.00")return t;var r=[{value:1,symbol:""},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"}];i&&(r=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"}]);var n=/\.0+$|(\.[0-9]*[1-9])0+$/,o;for(o=r.length-1;o>0&&!(t>=r[o].value);o--);let s=(t/r[o].value).toString();return s.indexOf(".")>-1&&(e>0?s=s.substr(0,s.indexOf(".")+e+1):s=s.substr(0,s.indexOf(".")+e)),s.replace(n,"$1")+r[o].symbol}static fromWei(t,e,i=0){if(!t)return 0;let r=t.length-e+i;if(r<=0)return 0;let n=t.toString().slice(0,r);if(i){let o=n.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";n=s+n}else n=n.slice(0,n.length-i)+"."+n.slice(n.length-i)}return n}};var G=class{static RECV_MSG(t){return"msg_"+t}};G.MSG_CLOSE_SESSION_S2C=99998,G.MSG_UNION_GET_MY_UNION_C2S=12001,G.MSG_UNION_GET_MY_UNION_S2C=12002,G.MSG_UNION_GET_RECOMMEND_UNION_C2S=12003,G.MSG_UNION_GET_RECOMMEND_UNION_S2C=12004,G.MSG_UNION_CREATE_UNION_C2S=12005,G.MSG_UNION_CREATE_UNION_S2C=12006,G.MSG_UNION_UPDATE_UNION_C2S=12007,G.MSG_UNION_UPDATE_UNION_S2C=12008,G.MSG_UNION_JOIN_UNION_C2S=12009,G.MSG_UNION_JOIN_UNION_S2C=12010,G.MSG_UNION_LEVEL_UNION_C2S=12011,G.MSG_UNION_LEVEL_UNION_S2C=12012,G.MSG_UNION_GET_UNION_MEMBER_C2S=12013,G.MSG_UNION_GET_UNION_MEMBER_S2C=12014,G.MSG_UNION_GET_MY_UNION_VO_C2S=12015,G.MSG_UNION_GET_MY_UNION_VO_S2C=12016,G.MSG_UNION_GET_UNION_MEMBER_APPLY_C2S=12020,G.MSG_UNION_GET_UNION_MEMBER_APPLY_S2C=12021,G.MSG_UNION_GET_UNION_MEMBER_APPLY_JOIN_C2S=12022,G.MSG_UNION_GET_UNION_MEMBER_APPLY_JOIN_S2C=12023,G.MSG_UNION_GET_UNION_MEMBER_APPLY_AGREE_C2S=12024,G.MSG_UNION_GET_UNION_MEMBER_APPLY_AGREE_S2C=12025,G.MSG_UNION_GET_UNION_MEMBER_APPLY_REFUSE_C2S=12026,G.MSG_UNION_GET_UNION_MEMBER_APPLY_REFUSE_S2C=12027,G.MSG_UNION_GET_UNION_MEMBER_ADMIN_SET_C2S=12028,G.MSG_UNION_GET_UNION_MEMBER_ADMIN_SET_S2C=12029,G.MSG_UNION_GET_UNION_MEMBER_ADMIN_UNSET_C2S=12030,G.MSG_UNION_GET_UNION_MEMBER_ADMIN_UNSET_S2C=12031,G.MSG_UNION_GET_UNION_MEMBER_REMOVE_C2S=12032,G.MSG_UNION_GET_UNION_MEMBER_REMOVE_S2C=12032,G.MSG_UNION_GET_UNION_MEMBER_LEADER_TRANSFER_C2S=12033,G.MSG_UNION_GET_UNION_MEMBER_LEADER_TRANSFER_S2C=12034,G.MSG_UNION_GET_UNION_MEMBER_APPLY_HISTORY_C2S=12040,G.MSG_UNION_GET_UNION_MEMBER_APPLY_HISTORY_S2C=12041,G.MSG_UNION_GET_UNION_MANAGER_INVITATION_C2S=12042,G.MSG_UNION_GET_UNION_MANAGER_INVITATION_S2C=12043,G.MSG_COMM_GET_RED_HOT_C2S=14001,G.MSG_COMM_GET_RED_HOT_S2C=14002,G.MSG_FRIEND_GET_RECOMMEND_FRIEND_S2C=18001,G.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_S2C=18001,G.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_JOIN_S2C=18001,G.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_AGREE_S2C=18001,G.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_REFUSE_S2C=18001,G.MSG_FRIEND_GET_FRIEND_MEMBER_REMOVE_S2C=18001,G.MSG_FRIEND_GET_RECOMMEND_FRIEND_C2S=18001,G.MSG_FRIEND_GET_FRIEND_MEMBER_C2S=18001,G.MSG_WALLET_UPDATE_WALLET_ITEM_S2C=19001,G.MSG_WALLET_TRANSFER_WALLET_S2C=19002,G.MSG_UNION_PERSONAL_BOUNS_S2C=15003,G.MSG_UNION_SET_BOUNS_RATE_S2C=15004,G.MSG_UNION_BATTLE_CD_C2S=15e3,G.MSG_UNION_BATTLE_CD_S2C=15001,G.MSG_UNION_BATTLE_DIGGINGS_STATUS_S2C=15002,G.MSG_UNION_BATTLE_BOUNS_S2C=15008,G.MSG_COMM_SCROLL_MSG_S2C=16001,G.MSG_ROLE_UPDATE_KNEAD_FACE_S2C=2700,G.MSG_BUY_SUIT_NPC_C2S=87,G.MSG_BUY_SUIT_NPC_S2C=88,G.MSG_INIT_WISHING_TREE_C2S=112,G.MSG_WISHING_TREE_C2S=113,G.MSG_WISHING_TREE_FREE_C2S=114,G.MSG_INIT_WISHING_TREE_EXCHANGE_C2S=115,G.MSG_WISHING_TREE_EXCHANGE_REWARD_C2S=116,G.MSG_WISHING_TREE_FREE_S2C=117,G.MSG_INIT_WISHING_TREE_S2C=118,G.MSG_WISHING_TREE_S2C=119,G.MSG_INIT_WISHING_TREE_EXCHANGE_S2C=120,G.MSG_INIT_SUIT_COLLECT_S2C=130,G.MSG_SUIT_COLLECT_REWARD_C2S=131,G.MSG_ACTIVE_CHECKIN_INIT_C2S=2310,G.MSG_ACTIVE_CHECKIN_INIT_S2C=2311,G.MSG_ACTIVE_CHECKIN_GET_REWARD_C2S=2312,G.MSG_ACTIVE_CHECKIN_GET_REWARD_S2C=2313,G.MSG_ACTIVE_DRAWING_SHOP_INIT_C2S=2320,G.MSG_ACTIVE_DRAWING_SHOP_INIT_S2C=2321,G.MSG_ACTIVE_DRAWING_SHOP_BUY_C2S=2322,G.MSG_ACTIVE_DRAWING_SHOP_BUY_S2C=2323,G.MSG_INIT_ACTIVE_TASK_C2S=800,G.MSG_INIT_ACTIVE_TASK_S2C=801,G.MSG_FINISH_ACTIVE_TASK_C2S=802,G.MSG_INIT_EVERYDAY_QUEST_C2S=83,G.MSG_INIT_EVERYDAY_QUEST_S2C=84,G.MSG_FINISH_EVERYDAY_QUEST_C2S=85,G.MSG_REWARD_ACTIVE_SCORE_GIFT_C2S=176,G.MSG_ACTIVE_SCORE_PRAY_C2S=177,G.MSG_UPDATE_VITALITY_REWARD_S2C=2401,G.MSG_GET_PVP_GRADE_S2C=157,G.MSG_SYS_BASE_INFO_S2C=158,G.MSG_GET_PVP_RANK_RESULT_S2C=278,G.MSG_INVITATIONCENTER_INIT_INVITATION_CODE_C2S=2003,G.MSG_INVITATIONCENTER_INIT_INVITATION_CODE_S2C=2008,G.MSG_INVITATIONCENTER_RECEIVE_MY_CODE_REWARD_C2S=2006,G.MSG_INVITATIONCENTER_RECEIVE_MY_RECOMMEND_REWARD_S2C=2007,G.MSG_INVITATIONCENTER_FILL_IN_THE_INVITATION_CODE_C2S=2004,G.MSG_INVITATIONCENTER_FILL_IN_THE_INVITATION_CODE_S2C=2005,G.MSG_SHARE_INIT_S2C=3e3,G.MSG_SHARE_GET_C2S=3001,G.MSG_SHARE_GET_S2C=3002,G.MSG_UPDATE_SHARE_POPUP_DATA_S2C=3003,G.MSG_CLIENT_ORDER_UPDATE_C2S=3004,G.MSG_REC_SHARE_SHOP_ITEMS_C2S=3005,G.MSG_SHARE_SHOP_ITEMS_RETURN_S2C=3006,G.MSG_DIG_INIT_C2S=4001,G.MSG_LUCKDRAW_INIT_S2C=5002;var Xs=class{};var Ju=class{};var ep=class a{constructor(){this.create_union_contract=null;this.member_sys_contract=null;this.union_war_contract=null;this.price=""}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){this.memberList=new le,!(typeof window.ethereum>"u")&&(this.create_union_contract=new window.web3.eth.Contract(oe.CREATE_UNION_ABI,oe.CREATE_UNION_ADDRESS),this.member_sys_contract=new window.web3.eth.Contract(oe.UNION_NUMBER_SYS_ABI,oe.UNION_NUMBER_SYS_ADDRESS),this.union_war_contract=new window.web3.eth.Contract(oe.UNION_WAR_ABI,oe.UNION_WAR_ADDRESS))}async poolEarned(t,e){let i=await this.union_war_contract.methods.earned(e).call();return parseEther(i)}async claim_pool_reward(t,e,i){K.instance.showLoading(!0),await this.union_war_contract.methods.claimReward(t,e,i).send({from:Y.instance.walletAddress},(r,n)=>{if(r)return K.instance.hideLoading(),!1})}async claim_member_reward(){K.instance.showLoading(!0);let{sendBeanDto:t}=await q.requestPost("cybertron-sys-api/api/v1/alliance/bonus/receiveBonus",{}),e=new WalletValidateItemVo;return Object.assign(e,t),await this.union_war_contract.methods.memberClaim(e.tokenAddress,e.to,e.amount,e.timestamp,e.hash,e.r,e.s,e.v).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1}),!0}async quitOccupy(t,e,i){K.instance.showLoading(!0),await this.union_war_contract.methods.quitOccupy(t,e,i).send({from:Y.instance.walletAddress},(r,n)=>{if(r)return K.instance.hideLoading(),!1})}async setManagerBonusPercent(t,e,i){K.instance.showLoading(!0),vi.instance.SendData(15901,{accountIds:e,bonusPercents:i})}async queryNextGetTime(t,e){return""}async donate(t,e){K.instance.showLoading(!0),vi.instance.SendData(13e3,{itemId:t,amount:e})}async getCreateCost(){let t=await this.create_union_contract.methods.getCreateUnionPrice().call();return this.price=parseEther(t[1]),this.price}async createUnion(t,e,i=""){K.instance.showLoading(!0),this.price||await this.getCreateCost();let r=await Y.instance.getBalance();return parseInt(r)<parseInt(this.price)?(K.instance.hideLoading(),Le.moneyNotEnought(),!1):await Y.instance.allowanceAddress(oe.CREATE_UNION_ADDRESS)?(await this.create_union_contract.methods.createUnion(t,e,i).send({from:Y.instance.walletAddress},(o,s)=>{if(o)return K.instance.hideLoading(),!1}),!0):(K.instance.hideLoading(),ie.instance.notice(f.instance.getLanguage(15)),!1)}async getMemberList(t="1"){let e=await q.requestPost("cybertron-sys-api/api/v1/allianceMember/memberList",{unionId:t});this.memberList=new le;for(let i of e){let r=new Ju;Object.assign(r,i),this.memberList.set(r.accountId,r)}return this.memberList}async getMemberApplyList(t="1"){let e=await q.requestPost("cybertron-sys-api/api/v1/allianceApply/applyList");GuildModel.instance.applyMembers=new le;for(let i of e){let r=new Xs;Object.assign(r,i),GuildModel.instance.applyMembers.set(r.accountId,r)}return GuildModel.instance.applyMembers}async getMemberApplyHistoryList(t="1"){let e=await q.requestPost("cybertron-sys-api/api/v1/allianceApply/historyRecordList"),i=new le;for(let r of e){let n=new Xs;Object.assign(n,r),i.set(n.accountId,n)}return i}async editUnion(t,e,i,r=""){K.instance.showLoading(!0),await this.create_union_contract.methods.updateUnionProfile(t,e,i,r).send({from:Y.instance.walletAddress},(n,o)=>{if(n)return K.instance.hideLoading(),!1})}async transferUnion(t,e){K.instance.showLoading(!0),await this.create_union_contract.methods.transferUnion(t,e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}async applyJoinUnion(t,e){await q.requestPost("cybertron-sys-api/api/v1/allianceMember/applyJoinUnion",{unionId:e}),ie.instance.notice(f.instance.getLanguage(2005))}async confirmApplyJoin(t,e){K.instance.showLoading(!0),await this.member_sys_contract.methods.confirmApplyJoin(t,e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}async refuseApplyJoin(t,e){let i=await q.requestPost("cybertron-sys-api/api/v1/allianceMember/refuseApplyJoin",{accountId:t,unionId:e});L.intance.event(G.RECV_MSG(G.MSG_UNION_GET_UNION_MEMBER_APPLY_REFUSE_S2C),[[i]])}async kickOutUnion(t,e){K.instance.showLoading(!0),await this.member_sys_contract.methods.kickOutUnion(t,e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}async quitUnion(t,e){K.instance.showLoading(!0),await this.member_sys_contract.methods.quitUnion(t,e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}async addManager(t,e){K.instance.showLoading(!0);let i=await this.member_sys_contract.methods.getMaxManagerCount().call(),r=parseInt(i),n=await this.member_sys_contract.methods.getUnionManagerCount(e).call();if(parseInt(n)>=r)return K.instance.hideLoading(),ie.instance.notice(f.instance.getLanguage("3013")),!1;await this.member_sys_contract.methods.addManager(t,e).send({from:Y.instance.walletAddress},(s,l)=>{if(s)return K.instance.hideLoading(),!1})}async removeManager(t,e){K.instance.showLoading(!0),await this.member_sys_contract.methods.removeManager(t,e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}};var tp=class{};var ip=class extends qt{constructor(e){super();this.donateValue=1e3;this.persentAry=[25,50,75,100];this.vo=e,this.detailVo=new tp,this.view.btn_reduce.on(Laya.Event.CLICK,this,this.clickHandler,[this.view.btn_reduce]),this.view.btn_plus.on(Laya.Event.CLICK,this,this.clickHandler,[this.view.btn_plus]),this.view.btn_donate.on(Laya.Event.CLICK,this,this.clickHandler,[this.view.btn_donate]),L.intance.on($e.CMD_13001+"",this,this.onDonateSuccess);for(let i=0;i<4;i++){let r=this.view["p"+i],n=r.getChildByName("img_select");n.visible=!1,r.on(Laya.Event.CLICK,this,this.onClickP,[i])}}removeEvent(){super.removeEvent(),L.intance.off($e.CMD_13001+"",this,this.onDonateSuccess)}get view(){return this._view}dispose(){super.dispose()}createUI(){this._view=new Laya.View,this.addChild(this._view)}onClickP(e){if(console.log("selcet==="+e),!this.detailVo.resourcesType)return;let i=this.maxValue/100*this.persentAry[e];if(!(i<1e3)){this.donateValue=i-i%1e3,this.view.lable_num.text=this.donateValue.toString(),this.updateContribute();for(let r=0;r<4;r++){let o=this.view["p"+r].getChildByName("img_select");o.visible=!1,r<=e&&(o.visible=!0)}}}async initData(){this.view.img_icon.skin=`gameIcon/attricon/img_daoju_${this.vo.type-1e3}.png`,this.updateView()}updateContribute(){this.view.label_cb_right.text=f.instance.getLanguage("306")+` : ${parseInt(this.detailVo.contributeValue)+this.donateValue/1e3}`}async onDonateSuccess(){ie.instance.notice(f.instance.getLanguage("307")),K.instance.hideLoading()}async updateView(){if(!this.view)return;let e=await q.requestPost("cybertron-sys-api/api/v1/alliance/attribute/find",{attributeType:this.vo.type});Object.assign(this.detailVo,e);let i=F.intance.m_dicItems.get(this.detailVo.resourcesType);this.view.img_cost.skin="https://cdn.bunnyswap.cc/images/items/"+i.icon,this.detailVo.tokenAddress=i.tokenId;let r=WalletModel.instance.getValue(this.detailVo.resourcesType);this.view.lable_title.text=`${f.instance.getLanguage(this.vo.name)} : ${this.getShowValue(this.detailVo.value)}`,this.maxValue=parseFloat(r),this.view.lable_progress.text=f.instance.getLanguage("305")+` 
 ${Te.filterNumFormat(this.detailVo.num)}/${Te.filterNumFormat(this.detailVo.totalNum)}`,this.view.label_attr_left.text=`${f.instance.getLanguage(this.detailVo.name)} : ${this.getShowValue(this.detailVo.value)}`,this.view.label_attr_right.text=`${f.instance.getLanguage(this.detailVo.name)} : ${this.getShowValue(this.detailVo.toValue)}`,this.view.label_lv_left.text=f.instance.getLanguage("304")+` : ${this.detailVo.level}`,this.view.label_lv_right.text=f.instance.getLanguage("304")+` : ${this.detailVo.toLevel}`,this.view.label_cb_left.text=f.instance.getLanguage("306")+` : ${this.detailVo.contributeValue}`,this.updateContribute()}getShowValue(e){return this.detailVo.type===1003||this.detailVo.type===1005?(parseFloat(e+"")*100).toFixed(1)+"%":parseInt(e)}async clickHandler(e){if(this.detailVo.resourcesType)switch(e){case this.view.btn_reduce:this.donateValue>1e3&&(this.donateValue-=1e3),this.view.lable_num.text=this.donateValue.toString(),this.updateContribute();break;case this.view.btn_plus:this.donateValue+1e3<=this.maxValue&&(this.donateValue+=1e3),this.view.lable_num.text=this.donateValue.toString(),this.updateContribute();break;case this.view.btn_donate:if(this.donateValue>this.maxValue){ie.instance.notice(f.instance.getLanguage(14));return}ep.instance.donate(this.detailVo.resourcesType+"",this.donateValue+"");break;default:break}}};var ap=class extends ro{constructor(){super()}get view(){return this._view}createUI(){this._view=new Laya.View,this.m_iPositionType=R.UP,this.addChild(this._view),this.onStageResize(),this.view.tab.dataSource=3,this.view.attr_list.vScrollBarSkin="",this.view.attr_list.array=[],L.intance.on($e.CMD_13001+"",this,this.getAttrList),this.getAttrList()}async getAttrList(){let t=await q.requestPost("cybertron-sys-api/api/v1/alliance/attribute/findAll",{});this.destroyed||t.length&&(this.view.attr_list.array=t.slice(0,5))}removeEvent(){super.removeEvent(),L.intance.off($e.CMD_13001+"",this,this.getAttrList)}onStageResize(){super.onStageResize();let t=Laya.stage.height-X.DESIGN_HEIGHT;this.view.la_img_bg.height+=t,this.view.attr_list.height+=t,this.view.height+=t}};var rp=class{};var pi=class a{constructor(){this._inited=!1;this.contract=null;this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0,this.posDic=new le,this.contract=new window.web3.eth.Contract(oe.HEROFORMATION_ABI,oe.HEROFORMATION_ADDRESS))}async getHeroPos(){return(await q.requestPost("cybertron-sys-api/api/v1/heroes/positionList",{})).forEach(e=>{let i=new rp;Object.assign(i,e),this.posDic.set(i.position,i)}),this.posDic}async setHeroPos(){if(K.instance.showLoading(!0),this.checkOnlyChangePos())return await q.requestPost("cybertron-sys-api/api/v1/heroes/setPosition",this.copyPosDic.values),this.posDic=this.copyPosDic,K.instance.hideLoading(),L.intance.event("SET_HERO_POSTION_SUCCESS"),this.posDic;{let e=[];this.copyPosDic.values.forEach(i=>{parseInt(i.heroId)&&e.push([parseInt(i.heroId),parseInt(i.position)])}),await this.contract.methods.formation(e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}}checkOnlyChangePos(){let t=[],e=[];for(let i of this.posDic.values)parseInt(i.heroId)&&t.push(parseInt(i.heroId));for(let i of this.copyPosDic.values)parseInt(i.heroId)&&e.push(parseInt(i.heroId));return t.sort(),e.sort(),t.toString()===e.toString()}};var np=class extends qt{constructor(){super()}get view(){return this._view}dispose(){super.dispose()}createUI(){this.addChild(this._view),L.intance.on("CANCEL_HERO_POS",this,this.cancelHero),L.intance.on("SET_HERO_POSTION_SUCCESS",this,this.setHeroPosSuccess),this.view.btn_set.clickHandler=new Laya.Handler(this,this.onSetHeroPos)}async onSetHeroPos(){await pi.instance.setHeroPos()}setHeroPosSuccess(){Ce.instance.showErrorWord(2e4),V.intance.disposeView(h.HeroFormationDialog)}removeEvent(){L.intance.off("CANCEL_HERO_POS",this,this.cancelHero),L.intance.off("SET_HERO_POSTION_SUCCESS",this,this.setHeroPosSuccess)}async createUIEnd(){this.view.list.vScrollBarSkin="",this.view.list.dataSource=[],this.view.list.mouseHandler=new Laya.Handler(this,this.onListEvent),this.view.list.renderHandler=new Laya.Handler(this,this.onRenderList),await pi.instance.getHeroPos(),pi.instance.copyPosDic=Jt.deepClone(pi.instance.posDic);let t=S.instance.m_heroData.heroVoDic.values;if(t&&t.length>0){let e=t.filter(i=>i.status!=2);this.view.list.array=e}this.updateList()}cancelHero(t){let e=pi.instance.copyPosDic.get(t);e.heroId="0",this.updateList()}updateList(){for(let t of pi.instance.copyPosDic.keys){let e=pi.instance.copyPosDic.get(t);this.view["pos"+t].dataSource=e}this.view.list.refresh()}onListEvent(t,e){switch(t.type){case Laya.Event.CLICK:this.handleSelectHero(e);break}}handleSelectHero(t){let e=this.view.list.array[t];for(let i of pi.instance.copyPosDic.values)if(i.heroId==e.id){this.cancelHero(i.position);return}for(let i of pi.instance.copyPosDic.keys){let r=pi.instance.copyPosDic.get(i);if(!parseInt(r.heroId)){r.heroId=e.id+"",this.view["pos"+i].dataSource=r;break}}this.view.list.refresh()}onRenderList(t,e){}onComplete(){}initData(){}};var op=class a{constructor(){if(a._instance)throw new Error("LayerManager是单例,不可new.");a._instance=this}static get intance(){return a._instance||(a._instance=new a),a._instance}init(){Laya.ClassUtils.regClass(N.BASEALERTVIEW,$u),Laya.ClassUtils.regClass(h.SkillTipDialog,Qu),Laya.ClassUtils.regClass(h.LuckdrawView,Xu),Laya.ClassUtils.regClass(h.UnionAttrView,ap),Laya.ClassUtils.regClass(h.UnionAttrLvUpDialog,ip),Laya.ClassUtils.regClass(h.UnionAttributeDetailsDialog,Zu),Laya.ClassUtils.regClass(h.HeroFormationDialog,np)}};var sp=class a{constructor(){this.m_sprMap=new Laya.Sprite;this.m_Image=new Laya.Image}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){}showLoading(t=!1){if(this.loadingMc)this.m_sprMap.size(Laya.stage.width,Laya.stage.height),X.m_bIsIphoneX&&(this.m_Image.scaleX=X.IPHONEX_SCARE,this.m_Image.scaleY=X.IPHONEX_SCARE),this.m_Image.x=(this.m_sprMap.width-this.m_Image.width*this.m_Image.scaleX)/2,this.m_Image.y=(this.m_sprMap.height-this.m_Image.height*this.m_Image.scaleY)/2,this.m_sprMap.x=(R.instence.m_iStageWidth-this.m_sprMap.width*this.m_sprMap.scaleX)/2,this.m_sprMap.y=(R.instence.m_iStageHeight-this.m_sprMap.height*this.m_sprMap.scaleY)/2,this.m_sprMap.visible=!0,Laya.timer.clear(this,this.showLazyBg),t?(this.m_Image.alpha=1,this.showLazyBg()):(this.m_Image.alpha=0,this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_sprMap.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,"#000000")),Laya.timer.once(300,this,this.showLazyBg));else return}showLazyBg(){this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_Image.alpha=1),this.loadingMc&&(this.loadingMc.x=Laya.stage.width/2,this.loadingMc.y=Laya.stage.height/2,this.loadingMc.play(),this.loadingMc.visible=!0)}hideLoading(){if(this.loadingMc)this.hideLoadingSHow();else return}hideLoadingSHow(){Laya.timer.clear(this,this.showLazyBg),this.loadingMc.stop(),this.loadingMc.visible=!1,this.m_sprMap.visible=!1}get isShow(){return this.loadingMc&&this.loadingMc.visible}dispose(){this.m_sprMap&&this.m_sprMap.graphics.clear(),Laya.timer.clear(this,this.showLazyBg),this.loadingMc&&(this.loadingMc.destroy(),this.loadingMc.removeSelf(),this.loadingMc=null)}};var Ne=class Ne{static get IsSetRelease(){return Ne._IsSetRelease}static get IsSetGuid(){return Ne._IsSetGuid}static initParms(){if(Laya.Browser.window.location){let e=Laya.Browser.window.location.href,i=this.getURLParameters(e);if(Ne.m_obj=i,console.log("1initgame-->urldata:",Ne.m_obj),Ne.m_obj.server&&Ne.m_obj.server!=""&&(q.httpRoot=Ne.m_obj.server),Ne.m_obj.socket&&Ne.m_obj.socket!=""){var t=Ne.m_obj.socket;$e.m_strHttpHost=t+"/websocket"}if(Ne.m_obj.address&&Ne.m_obj.address!=""&&(Y.instance.walletAddress=Ne.m_obj.address),Ne.m_obj.from&&Ne.m_obj.from=="into"&&(X.isInto=!0),Ne.m_obj.isFull&&Ne.m_obj.isFull=="1"&&(X.isFull=!0),Ne.m_obj.justFull&&Ne.m_obj.justFull=="1"&&(X.justFull=!0),Ne.m_obj.white&&Ne.m_obj.white=="1"&&(X.isWhite=!0),Ne.m_obj.debug&&Ne.m_obj.debug!="0"&&(X.Debug=parseInt(Ne.m_obj.debug)),Ne.m_obj.res&&Ne.m_obj.res!="0"&&(X.Res=parseInt(Ne.m_obj.res)),Ne.m_obj.lang&&Ne.m_obj.lang!=""){let r=parseInt(Ne.m_obj.lang);r<1&&(r=1),X.ignoreLang=!0,S.instance.m_strLanguage=r}}}static getURLParameters(t){let e={};return t.replace(/[?&]+([^=&]+)=([^&]*)/gi,(i,r,n)=>e[r]=decodeURIComponent(n)),e}static cheakStr(t){let e=new RegExp("[A-Za-z0-9_-\\s]","g"),i=t.match(e);return!!(i&&i.length==t.length)}static isNumber(t){return/^(?!0\d)\d*\.?\d*$/.test(t)}static roundToTwoDecimals(t){return t%1===0?t.toString():Number(t.toFixed(2)).toString()}static filterObjectsByState(t,e){return t.filter(i=>i.state===e)}static getArenaByTicketId(t){let e=F.intance.m_dicArenaDic.values;for(let i of e)if(Array.isArray(i.item)&&i.item.length>0&&i.item[0]===t)return i.name}static processItemsArray(t,e=!0){let i=[3006,3001,3007,3004,3005],r={},n={};t.forEach(l=>{i.indexOf(l.id)>-1?n[l.id]?n[l.id].count+=l.count:n[l.id]=l:r[l.id]=l}),e&&i.forEach(l=>{n[l]||(n[l]={type:1,id:l,count:0})});let o=Object.values(n),s=Object.values(r);return o=o.sort((l,c)=>i.indexOf(l.id)-i.indexOf(c.id)),[o,s]}static sumItemCount(t){let e=new Map;return t.forEach(r=>{r.reward.forEach(n=>{let{type:o,id:s,count:l}=n;e.has(s)?e.set(s,{type:o,id:s,count:e.get(s).count+l}):e.set(s,{type:o,id:s,count:l})})}),Array.from(e.values())}static addIndexToObjects(t){return t.forEach((e,i)=>{e.index=i}),t}static findFirstTypeAndNotGold(t){let e=[3006,3001,3007,3004];for(let i=0;i<t.length;i++)if(e.indexOf(t[i].id)>-1)return t[i]}static getTitleByGoodsId(t,e){for(let i of t)if(i.goods===e)return i.title;return null}};Ne._IsSetRelease=!1,Ne._IsSetGuid=!1;var Oe=Ne;var{regClass:kw}=Laya,no=class extends Sl{constructor(){super(...arguments);this.isLogout=!1;this.dotNum=0;this.m_nProgress=0}onAwake(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),Laya.loader.load(["res/common/comm_bg/img_loading_bg.jpg","res/loading/progress_load1.png","res/loading/progress_load1$bar.png"]).then(()=>{this.createUI(),this.init()})}onError(e){console.log("加载失败: "+e)}createUI(){this.m_nSendTime=Laya.timer.currTimer,De.instance.init(),De.instance.playMusicByName(De.soundName_bg,".mp3"),L.intance.on(_.EVENT_BACK_TO_LOGIN,this,this.backToLogin),L.intance.on(_.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),L.intance.on(_.EVENT_ENTER_MAIN,this,this.loginCallBack),this.initLoad();let e=X.User_Lan;var i=getGameVersion();this.txtLoad.text=i,console.log("VERSION: "+i);let r=new ea;r.ID=1,r.Event="加载版本信息 "+i,we.instance.sendCustumEvent(1,null,r),ui.Initialize(Laya.stage,!0)}handleClickBtn(e){switch(e){}}initLoad(){this.onAssetLoaded()}onAssetLoaded(){this.loadingProcess=0,this.m_nProgress=0,Laya.timer.loop(1800,this,this.onLoading,[this.m_nProgress])}set loadingProcess(e){e>1&&(e=1),this.mcProcess.value=e,this.txtProcess.text=Math.floor(e*100)+"%";var i=e*this.mcProcess.width-70;i<0&&(i=0),this.img_guang.x=i,console.log("loadingProcess: "+e)}init(){f.instance.FGM_GetLanguage(),op.intance.init(),R.instence.init(),be.intance.init(),sp.instance.init(),V.intance.init(),S.instance.init();let e=new ea;e.ID=3,e.Event="加载资源信息",we.instance.sendCustumEvent(3,null,e),M.instance.init(),Oe.initParms()}backToLogin(){Laya.timer.clear(this,this.onLoading),this.m_nProgress=0,Laya.loader.load(M.instance.m_arrInitResource,Laya.Handler.create(this,this.getLoginData),Laya.Handler.create(this,this.onLoading2,null,!1))}getLoginData(){we.instance.sendCustumEvent(7),this.readyInitGame()}readyInitGame(){if(this.isLogout){L.intance.event(_.EVENT_LOADING_SUC);return}this.mcProcess&&(this.loadingProcess=.8+.2),X.isWhite?this.loginGame():this.onGetNotice()}async onGetNotice(){q.requestPost("wxgame/sys/notice",{type:1},!1,!1).then(e=>{var i=e;if(i.status==0&&i.nowTime>=i.startTime&&i.nowTime<=i.endTime){var r=parseInt(S.instance.m_strLanguage.toString()),n=i.title[r],o=i.contents[r];V.intance.openModule(h.NoticeDialog,[1,n,o]);return}this.loginGame()}).catch(e=>{V.intance.openModule(h.NoServerView)})}async loginGame(){L.intance.event(_.EVENT_LOADED_COMPLETE),await Y.instance.init(),await Y.instance.dappLogin()}async loginGameEnd(e){K.instance.showLoading(!0),we.instance.sendCustumEvent(8),F.intance.init(),vi.instance.init(),console.log("PreLoadingView.joinGame()");let i=Laya.timer.currTimer-this.m_nSendTime;if(we.instance.sendCustumEvent(22),!e){V.intance.openModule(h.NoServerView);return}e.loginState==1?(console.log("have no regist"),we.instance.sendCustumEvent(23),V.intance.openModule(h.CreateLoginView)):(we.instance.sendCustumEvent(30),e.playerDto?(we.instance.sendCustumEvent(31),console.log("registed "+e.playerDto.name),S.instance.playerDto=e.playerDto,this.loginCallBack()):(we.instance.sendCustumEvent(32),console.log("getRegisted error"),ie.instance.notice(f.instance.getLanguage(135))))}async loginCallBack(){console.log("loginCallBack++++++++++++++++++++++++++++++++"),K.instance.hideLoading();var e=S.instance.playerDto;if(e.roomId>0){let i=await q.requestPost("wxgame/room/info",{roomId:e.roomId});Q.instance.roomDto=i.roomDto,i.roomDto?e.roomState==0?V.intance.openModule(h.EnterRoomView):e.roomState==1&&$e.instance.initSocket():ie.instance.notice(f.instance.getLanguage(135))}else Le.logs("进入主界面",5),we.instance.sendCustumEvent(33),be.intance.setCurrentScene(re.M_SCENE_MAIN);q.startHeart()}onLoading(e){this.m_nProgress+=.01,this.mcProcess&&e>this.mcProcess.value&&(this.loadingProcess=e*.4)}onLoading2(e){this.mcProcess&&(this.loadingProcess=0+e*1.1)}removeEvent(){L.intance.off(_.EVENT_BACK_TO_LOGIN,this,this.backToLogin),L.intance.off(_.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),L.intance.off(_.EVENT_ENTER_MAIN,this,this.loginCallBack)}};no.m_iState=1,no=m([kw("xmaaYG8AQ1yC07pr_JvyPA")],no);var{regClass:Aw,property:nq}=Laya,Qs=class extends Laya.Script{constructor(){super()}onEnable(){Laya.timer.frameLoop(1,this,this.onRunRoll),this.onScaleEnd1()}onRunRoll(){this.owner.rotation++}onScaleEnd1(){Laya.Tween.to(this.owner,{scaleX:1.1,scaleY:1.1,alpha:.8},500,null,Laya.Handler.create(this,this.onScaleEnd2))}onScaleEnd2(){Laya.Tween.to(this.owner,{scaleX:.8,scaleY:.8,alpha:.5},500,null,Laya.Handler.create(this,this.onScaleEnd1))}onDisable(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};Qs=m([Aw("w5pr4pHJTMOM3bYxCyc4Ag")],Qs);var oo=class oo extends Laya.ColorFilter{constructor(t=null){super(t)}static addClickFilter(t){let e=t.filters||[];e.push(oo.clickFilter),t.filters=e}static clearClickFilter(t){let e=t.filters;if(e!=null&&e.length>0){for(let i=e.length-1;i>-1;i--)e[i]instanceof oo&&e.splice(i,1);t.filters=e}}};oo.clickFilter=new oo([1,0,0,0,-34,0,1,0,0,-34,0,0,1,0,-34,0,0,0,1,0]);var or=oo;var{regClass:Dw,property:Mw}=Laya,so=class extends Laya.Script{constructor(){super();this.noSound=!1}onEnable(){let e=this.owner.scaleX;this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onUp)}onDown(){this.noSound||De.instance.playSoundByName(De.soundName4),or.addClickFilter(this.owner)}onUp(){or.clearClickFilter(this.owner)}onDisable(){or.clearClickFilter(this.owner),this.owner.off(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.onUp)}};m([Mw({type:"boolean"})],so.prototype,"noSound",2),so=m([Dw("cL1AmqOiTHmtQWKayPNcTA")],so);var lp=class extends Laya.Scene{};var{regClass:Pw}=Laya,cp=class extends lp{constructor(){super(...arguments);this.tokenIndex=0;this.webData=["BSC_TESTNET","MATCH","BSC"];this.tokenData=[];this.currTab=0;this.type=3;this.coinType=-1}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){this.list_champ.array=[],e&&e.length>1&&(this.type=e[0],this.coinType=e[1],this.onClickTab(this.type))}onEnable(){L.intance.on(_.EVENT_WELFARE_CLAIM,this,this.onClaimWelfare),this.btn_champDetail.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_champDetail]),this.btn_champRecord.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_champRecord]),L.intance.on(_.EVENT_RECHARGE_GET,this,this.rechargeEnd),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_4.on(Laya.Event.CLICK,this,this.onClickTab,[4]),this.btn_5.on(Laya.Event.CLICK,this,this.onClickTab,[5]),this.rechargeCode.on(Laya.Event.INPUT,this,this.onRechargeCodeInput),L.intance.on(_.CHANGE_ASSET_CHAIN,this,this.changeAssetChain),this.btn_hireRecord.on(Laya.Event.CLICK,this,this.onHireRecord),this.btn_proxyRecord.on(Laya.Event.CLICK,this,this.onProxyRecord),this.btn_claimHire.on(Laya.Event.CLICK,this,this.onClaimHire),this.btn_claimProxy.on(Laya.Event.CLICK,this,this.onClaimProxy),this.list_web.renderHandler=Laya.Handler.create(this,this.onWebItemRender,null,!1),this.list_token.renderHandler=Laya.Handler.create(this,this.onTokenItemRender,null,!1),this.box_web.on(Laya.Event.CLICK,this,this.onOpenWeb),this.box_token.on(Laya.Event.CLICK,this,this.onOpenToken),this.btn_confirm.on(Laya.Event.CLICK,this,this.onbtnConfirm),this.btn_max.on(Laya.Event.CLICK,this,this.onbtnMax),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.box_all.visible=!1,this.initDataView()}setTab(e){for(let i=1;i<7;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b",this["box_"+i]&&(this["box_"+i].visible=!0)):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe",this["box_"+i]&&(this["box_"+i].visible=!1))}async initDataView(){this.destroyed||(this.type?this.onClickTab(this.type):this.onClickTab(5),this.list_hire.visible=!1,this.list_proxy.visible=!1,this.listHireReward.visible=!1)}async showHireData(){var e=await q.requestPost("wxgame/lease/outline",{});if(e&&e.reward){let r=Oe.processItemsArray(e.reward);e.reward.length>0?this.btn_claimHire.disabled=!1:this.btn_claimHire.disabled=!0;let n=r[0];this.list_hire.array=n,this.list_hire.selectedIndex=-1,this.list_hire.visible=!0,e.leaderCount?this.tf_hireNum.text=f.instance.getLanguage(1179,e.leaderCount):this.tf_hireNum.text=f.instance.getLanguage(1179,0);let o=r[1];var i=[];o.forEach(s=>{var l=new Xe(s.id);l.newAddCnt=s.count,i.push(l)}),this.listHireReward.array=i,this.listHireReward.selectedIndex=-1,this.listHireReward.visible=!0}}async showProxyData(){var e=await q.requestPost("wxgame/lease/outline",{});if(e&&e.childReward){let i=Oe.processItemsArray(e.childReward)[0];e.childReward.length>0?this.btn_claimProxy.disabled=!1:this.btn_claimProxy.disabled=!0,this.list_proxy.array=i,this.list_proxy.visible=!0,this.list_proxy.selectedIndex=-1,e.childCount?this.tf_proxyNum.text=f.instance.getLanguage(1180,e.childCount):this.tf_proxyNum.text=f.instance.getLanguage(1180,0)}}async onClickTab(e){if(this.currTab!=e){if(this.setTab(e),this.box_all.visible=!0,e==1)this.box_1.visible=!0,this.initNetComboBox(),this.initContainer();else if(e!=2){if(e==3)this.showHireData();else if(e==4)this.showProxyData();else if(e==5){var i=await q.requestPost("wxgame/welfare/outline",{});i?(this.tf_champNum.text=f.instance.getLanguage(1133)+" "+i.welfareCount,this.list_champ.array=i.welfareDtoList):ie.instance.notice(f.instance.getLanguage(135))}}}}async handleClickBtn(e){switch(e){case this.btn_champDetail:{let i=await q.requestPost("wxgame/welfare/list",{});i.welfareDtoList?V.intance.openModule(h.ChampDetailDialog,i.welfareDtoList):ie.instance.notice(f.instance.getLanguage(135))}break;case this.btn_champRecord:{let i=await q.requestPost("wxgame/welfare/takeList",{});i.welfareDtoList?V.intance.openModule(h.ChampRecordDialog,i.welfareDtoList):ie.instance.notice(f.instance.getLanguage(135))}break}}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}onClaimWelfare(e){var i=this.list_champ.array;if(i instanceof Array){for(let r of i)if(r.coinType==e.coinType){r.takeValue=0;continue}this.list_champ.refresh()}}removeEvent(){L.intance.off(_.EVENT_WELFARE_CLAIM,this,this.onClaimWelfare),this.btn_1.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_2.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_3.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_4.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_5.off(Laya.Event.CLICK,this,this.onClickTab),this.rechargeCode.off(Laya.Event.INPUT,this,this.onRechargeCodeInput),L.intance.off(_.CHANGE_ASSET_CHAIN,this,this.changeAssetChain),this.btn_hireRecord.off(Laya.Event.CLICK,this,this.onHireRecord),this.btn_proxyRecord.off(Laya.Event.CLICK,this,this.onProxyRecord),this.btn_claimHire.off(Laya.Event.CLICK,this,this.onClaimHire),this.btn_claimProxy.off(Laya.Event.CLICK,this,this.onClaimProxy),this.box_web.off(Laya.Event.CLICK,this,this.onOpenWeb),this.box_token.off(Laya.Event.CLICK,this,this.onOpenToken),this.btn_confirm.off(Laya.Event.CLICK,this,this.onbtnConfirm),this.btn_max.off(Laya.Event.CLICK,this,this.onbtnMax)}onOpenWeb(){this.img_web_pad.visible==!1&&(this.img_web_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onOpenToken(){this.img_token_pad.visible==!1&&(this.img_token_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onWebItemRender(e,i){e&&e.onChange&&e.onChange(this.list_web.selectedIndex==i)}onTokenItemRender(e,i){e&&e.onChange&&e.onChange(this.list_token.selectedIndex==i)}createWebList(){this.list_web.array=this.webData,this.list_web.visible=!0,this.initNetComboBox()}createTokenList(){this.tokenIndex=0,this.tokenData[this.tokenIndex]&&(this.list_token.array=this.tokenData,this.list_token.visible=!0,this.list_token.selectedIndex=0)}onHideList(){this.img_web_pad.visible=!1,this.img_token_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideList)}async initContainer(){this.list_web.selectHandler=new Laya.Handler(this,this.handleSelectWeb),this.list_token.selectHandler=new Laya.Handler(this,this.handleSelectToken),this.tf_adress.text=Y.instance.walletAddress,this.createWebList(),this.createTokenList()}async getRestCoin(e){try{let i=await Y.instance.getBalance2(e),r=Ui(i);this.tf_rest.text=`${Oe.roundToTwoDecimals(Number(r))}`}catch(i){if(i instanceof Error){let r=i.message}this.tf_rest.text="0"}}async initNetComboBox(){console.log(Y.instance.walletClient);let e=await Y.instance.walletClient.getChainId();if(e){let i=Y.instance.getChainNameByID(e),r=this.getListIndexByName(i);console.log(i,r),this.list_web.selectedIndex=r}}getListIndexByName(e){return this.list_web.array.findIndex(i=>i==e)}async switchChain(e=!0){let i=Nr[this.tf_web.text];try{let o=await Y.instance.walletClient.getChainId();if(i!==o||e){var r=await Y.instance.switchChain(i);if(!r){console.log("切换失败，请手动切换");return}}var n=Y.instance.getCoinAddress(Fe.TYPE_TOX);let s=n[i];this.getRestCoin(s),this.initNetComboBox()}catch(o){if(o instanceof Error&&o.message.includes("Unrecognized chain ID")){await Y.instance.addChain(i);var n=Y.instance.getCoinAddress(Fe.TYPE_TOX);let c=n[i];this.getRestCoin(c)}this.initNetComboBox()}}async handleSelectWeb(e){if(e!=-1){let i=this.list_web.selectedItem;console.log(i),this.tf_web.text=`${i}`,this.tokenIndex=0,this.createTokenList(),this.handleSelectToken(this.tokenIndex),this.switchChain()}}handleSelectToken(e){if(e!=-1){let i=this.list_token.selectedItem;console.log(i),this.tf_token.text=`${i}`,this.tokenIndex=e}}onRechargeCodeInput(){let e=Number(this.rechargeCode.text),i=Oe.isNumber(this.rechargeCode.text);(e<0||!i)&&(this.rechargeCode.text="0")}async onbtnConfirm(){let e=Number(this.tf_rest.text),i=Number(this.rechargeCode.text),r=await Y.instance.walletClient.getChainId();if(console.log("currentChainId",r),!i){let c=Ce.instance.get(35);_e.instance().AlertByType(N.BASEALERTVIEW,Ce.instance.get(33),N.YES);return}if(e<i){_e.instance().AlertByType(N.BASEALERTVIEW,Ce.instance.get(34),N.YES);return}K.instance.showLoadingByInfo();let n=r==Et.id?oe.RECHANGE_ADDRESS:oe.RECHANGE_ADDRESS_TOX;var o=Y.instance.getCoinAddress(Fe.TYPE_TOX);let s=o[r];await nr.instance.rechargeToken(i,s,n)&&(K.instance.hideLoading(),this.getRestCoin(s),S.instance.rechargeEnd=!0,_e.instance().AlertByType(N.BASEALERTVIEW,Ce.instance.get(35),N.YES),this.getReward(),Laya.timer.loop(2e3,this,this.getReward))}async getReward(){let e=await q.requestPost("wxgame/sys/payCallPack",{});if(console.log("rewardData",e),e&&e.coin){let r=e.coin[0];L.intance.event(Pt.UPDATE_LOCAL_WALLET_LIST_EVENT);var i=new Ni;i.id=r[0],i.count=r[1],V.intance.openModule(h.RewardGetDialog,[i]),this.rechargeEnd()}}rechargeEnd(){S.instance.rechargeEnd=!1,Laya.timer.clear(this,this.getReward)}async refreshToken(){try{let i=await Y.instance.walletClient.getChainId();var e=Y.instance.getCoinAddress(Fe.TYPE_TOX);let r=e[i],n=await Y.instance.getBalance2(r),o=Ui(n);this.tf_rest.text!==o&&(this.tf_rest.text=`${Oe.roundToTwoDecimals(Number(o))}`,Laya.timer.clear(this,this.refreshToken))}catch{this.tf_rest.text="0"}}onbtnMax(){let e=Number(this.tf_rest.text);this.rechargeCode.text=`${e}`}initTokenWebData(){this.webData=[];var e=F.intance.getGeneralValueById(7);if(e)for(let i=0;i<e.length;i++)switch(e[i]){case 1:this.webData.push("MATCH");break;case 2:this.webData.push("BSC_TESTNET");break}this.initTokenData(),this.switchChain(!1)}changeAssetChain(){_e.instance().AlertByType(N.BASEALERTVIEW,Ce.instance.get(36),N.YES,Laya.Handler.create(this,()=>{this.switchChain(!0)}))}initTokenData(){this.tokenData=[];var e=F.intance.getGeneralValueById(8);if(e=[1],e)for(let i=0;i<e.length;i++)switch(e[i]){case 1:this.tokenData.push("TOX");break;case 2:this.tokenData.push("USDT");break}}onHireRecord(){V.intance.openModule(h.HireDetailDialog)}onProxyRecord(){V.intance.openModule(h.ProxyDetailDialog)}async onClaimHire(){var e=await q.requestPost("wxgame/lease/take",{});if(e&&e.reward.length>0){let i=e.reward,r=[];i.forEach(n=>{var o=new Ni;o.id=n.id,o.count=n.count,r.push(o)}),V.intance.openModule(h.RewardGetDialog,r)}this.showHireData()}async onClaimProxy(){var e=await q.requestPost("wxgame/lease/childTake",{});if(e&&e.reward&&e.reward.length>0){let i=e.reward;i=Oe.processItemsArray(i,!1)[0];let r=[];i.forEach(n=>{var o=new Ni;o.id=n.id,o.count=n.count,r.push(o)}),V.intance.openModule(h.RewardGetDialog,r)}this.showProxyData()}};cp=m([Pw("lWg_-biNSI2538WxA3KVVw")],cp);var up=class extends Laya.Dialog{};var{regClass:Bw}=Laya,pp=class extends up{constructor(){super()}onEnable(){this.list_champ.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1)}setOpenData(t){t&&t instanceof Array&&(this.list_champ.array=t)}onItemRender(t,e){t.onSetIndex(e)}onDisable(){}};pp=m([Bw("mXj9kkXUQny2iuvlC1REmA")],pp);var lt=class lt{constructor(){}static formatMM(t){if(t<=0)return"00:000";let e,i;e=t/1e3,i=t%1e3;let r="";return e<=9&&(r+="0"),r+=Math.floor(e),r+=":",i<=9?r+="00":i<=99&&(r+="0"),r+=i,r}static format(t,e=":",i=!0){if(t<=0)return i?"00:00:00":"00:00";let r,n,o,s,l;s=t/3600,o=t%3600,l=o/60,r=o%60;let c="";return i&&(s<=9&&(c+="0"),c+=Math.floor(s)+e),l<=9&&(c+="0"),c+=Math.floor(l)+e,Math.ceil(r)<=9&&(c+="0"),c+=Math.ceil(r),c}static formatWithDay(t,e=":"){if(t<=0)return"00:00";let i,r,n,o,s;r=t/86400,n=t%86400,o=n/3600,n=n%3600,s=n/60,i=n%60;let l="";if(r>=1){let c=r>1?2005:2003;l=f.instance.getLanguage(c,Math.floor(r))+" ",o<=9&&(l+="0"),i%2!=0&&(e=Le.getColorText(e,"#412b20")),l+=Math.floor(o)+e,s<=9&&(l+="0"),l+=Math.floor(s)}else o<=9&&(l+="0"),l=Math.floor(o)+e,s<=9&&(l+="0"),l+=Math.floor(s)+e,Math.ceil(i)<=9&&(l+="0"),l+=Math.ceil(i);return l}static getTimeArray(t,e="HH-MM-SS"){if(t=Math.max(0,t),e.indexOf("-")==-1)return[];let i=[],r=e.split("-");for(let n of r)n=="DD"?i.push(Math.floor(t/lt.OneDaySceond)):n=="HH"?i.push(Math.floor(t%lt.OneDaySceond/lt.OneHourSceond)):n=="MM"?i.push(Math.floor(t%lt.OneHourSceond/lt.OneMiniuteSecond)):n=="SS"&&i.push(t%lt.OneMiniuteSecond);return i}static getServerDate(t){return new Date(t)}static formatTime(t){return(parseInt(t/60+"")+100).toString().substring(1)+":"+(parseInt(t%60+"")+100).toString().substring(1)}static formatTime000000(t){return t?(parseInt(t/3600+"")+100).toString().substring(1)+":"+(parseInt(t%3600/60+"")+100).toString().substring(1)+":"+(parseInt(t%60+"")+100).toString().substring(1):"00:00:00"}static formatTimeStamp(t,e="YY-MT-DD HH:MM:SS"){let i=lt.getServerDate(t),r="";if(e.indexOf("YY")>=0&&(r=i.getFullYear()+"",e=e.replace("YY",r)),e.indexOf("MT")>=0){let n=i.getMonth()+1;n>9?r=n+"":r="0"+n,e=e.replace("MT",r)}if(e.indexOf("DD")>=0){let n=i.getDate();n>9?r=n+"":r="0"+n,e=e.replace("DD",r)}if(e.indexOf("HH")>=0){let n=i.getHours();n>9?r=n+"":r="0"+n,e=e.replace("HH",r)}if(e.indexOf("MM")>=0){let n=i.getMinutes();n>9?r=n+"":r="0"+n,e=e.replace("MM",r)}if(e.indexOf("SS")>=0){let n=i.getSeconds();n>9?r=n+"":r="0"+n,e=e.replace("SS",r)}return e}static formatTimeStamps(t,e="YY-MT-DD HH:MM:SS"){let i=lt.getServerDate(t),r=e;return r=lt.parseTimeDetail(i,r,"YY",!1),r=lt.parseTimeDetail(i,r,"MT",!1),r=lt.parseTimeDetail(i,r,"DD",!1),r=lt.parseTimeDetail(i,r,"HH",!0),r=lt.parseTimeDetail(i,r,"MM",!0),r=lt.parseTimeDetail(i,r,"SS",!0),r}static parseTimeDetail(t,e,i,r){if(e.indexOf(i)>=0){let n,o;i=="YY"?o=t.getFullYear():i=="MT"?o=t.getMonth()+1:i=="DD"?o=t.getDate():i=="HH"?o=t.getHours():i=="MM"?o=t.getMinutes():i=="SS"&&(o=t.getSeconds()),o>9||!r?n=o.toString():n="0"+o,e=e.replace(i,n)}return e}static getServerTimeStr(){return lt.formatTimeStamp(Laya.timer.currTimer)}static getTimeArr(){return lt.getServerTimeStr().split("/")}static get getDay(){let e=lt.getServerTimeStr().split("/");return parseInt(e[2])}static parseSheetTime(t){let e="";if(t){let i=t.length;for(let r=0;r<i;r++){let n="";t[r]<10?n="0"+t[r]:n=t[r],r!==i-1&&(n=n+":"),e+=n}}return e}static dateStringToTimestamp(t){let[e,i,r]=t.split("-").map(Number),n=new Date(e,i-1,r).getTime();return Number(n)}static getCurrentDayTimestamp(){let t=new Date;return t.setHours(0,0,0,0),t.getTime()}static getYearMonthDat(t){let e=new Date(t),i=e.getFullYear(),r=e.getMonth()+1<10?"0"+(e.getMonth()+1):""+(e.getMonth()+1),n=e.getDate()<10?"0"+e.getDate():""+e.getDate();return`${i}-${r}-${n}`}};lt.OneDaySceond=24*3600,lt.OneHourSceond=3600,lt.OneMiniuteSecond=60;var tt=lt;var mp=class extends Laya.Box{};var{regClass:Rw}=Laya,dp=class extends mp{set dataSource(e){super.dataSource=e,this.welfareDto=e,this.welfareDto&&this.setCurrentOutPut()}onSetIndex(e){this.tf_id.text=e+1+""}setCurrentOutPut(){this.tf_createDate.text=tt.formatTimeStamp(this.welfareDto.createDate,"YY-MT-DD");let e=this.welfareDto.coinType;this.img_coinType.skin=M.instance.getMoneyIcon(e),this.tf_type.text=f.instance.getUILang("Staking_Type_"+this.welfareDto.type),this.tf_coinValue.text=Te.formatNumberStr(this.welfareDto.coinValue,8),this.tf_remainValue.text=Te.formatNumberStr(this.welfareDto.remainValue,8),this.tf_remainDays.text=this.welfareDto.remainDays+""}};dp=m([Rw("b0cMZEy9S5q2q_vqsjWzDA")],dp);var hp=class extends Laya.Box{};var{regClass:Nw}=Laya,fp=class extends hp{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.btn_claim.on(Laya.Event.CLICK,this,this.onClaim),this.isAddEvent=!0)}async onClaim(){if(this.welfareOutlineDto.takeValue>0){let i=await q.requestPost("wxgame/welfare/take",{coinType:this.welfareOutlineDto.coinType});if(i){var e=new Ni;e.id=i.coinType,e.count=i.coinValue,V.intance.openModule(h.RewardGetDialog,[e]),L.intance.event(_.EVENT_WELFARE_CLAIM,i)}else ie.instance.notice(f.instance.getLanguage(135))}}set dataSource(e){super.dataSource=e,this.welfareOutlineDto=e,this.welfareOutlineDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.welfareOutlineDto.coinType;this.img_coinType.skin=M.instance.getItemIcon(e),this.tf_allValue.text=Te.formatNumberStr(this.welfareOutlineDto.allValue,8),this.tf_todayRelease.text=Te.formatNumberStr(this.welfareOutlineDto.todayRelease,8),this.tf_takeValue.text=Te.formatNumberStr(this.welfareOutlineDto.takeValue,8),this.btn_claim.disabled=this.welfareOutlineDto.takeValue<=0}};fp=m([Nw("XTGeF2FhTp2j7VZIhqRAtg")],fp);var bp=class extends Laya.Dialog{};var{regClass:Ow}=Laya,yp=class extends bp{constructor(){super()}onEnable(){this.list_champ.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1)}setOpenData(t){t&&t instanceof Array&&(this.list_champ.array=t)}onItemRender(t,e){t.onSetIndex(e)}onDisable(){}};yp=m([Ow("RzcjHDjIS62Ejw744kaKKw")],yp);var gp=class extends Laya.Box{};var{regClass:Hw}=Laya,vp=class extends gp{set dataSource(e){super.dataSource=e,this.welfareTakeDto=e,this.welfareTakeDto&&this.setCurrentOutPut()}onSetIndex(e){this.tf_id.text=e+1+""}setCurrentOutPut(){this.tf_takeTime.text=tt.formatTimeStamp(this.welfareTakeDto.takeTime,"YY-MT-DD");var e=this.welfareTakeDto.reward,i=[];e&&e.forEach(r=>{var n=new Xe(r.id);n.newAddCnt=r.count,i.push(n)}),this.list_reward.array=i}};vp=m([Hw("0TASbeEtRlmozr-j6sElTw")],vp);var Lp=class extends Laya.Dialog{};var{regClass:Uw}=Laya,_p=class extends Lp{constructor(){super()}onEnable(){this.setOpenData(),this.list_sum.visible=!1,this.list_sumProp.visible=!1,this.list_champ.visible=!1}async setOpenData(){var t=await q.requestPost("wxgame/lease/takeList",{});if(t){console.log(t);let i=t.list;i=Oe.addIndexToObjects(i),this.list_champ.array=i,this.list_champ.visible=!0;let r=Oe.sumItemCount(i);console.log(r);let n=Oe.processItemsArray(r,!1),o=n[0],s=n[1];this.list_sum.array=o,this.list_sum.visible=!0;var e=[];s.forEach(l=>{var c=new Xe(l.id);c.newAddCnt=l.count,e.push(c)}),this.list_sumProp.array=e,this.list_sumProp.visible=!0}}onItemRender(t,e){}onDisable(){}};_p=m([Uw("ZG7XYFvMTD-oZPNAmJhfIQ")],_p);var wp=class extends Laya.Box{};var{regClass:Vw}=Laya,xp=class extends wp{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,console.log(e),this.itemDto=e,this.itemDto&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.itemDto.id;this.img_coinType.skin=M.instance.getItemIcon(e),this.tf_takeValue.text=Te.formatNumberStr(this.itemDto.count,8)}};xp=m([Vw("S4XctoHfRm66A2jjw3rSsQ")],xp);var Ip=class extends Laya.Box{};var{regClass:Gw}=Laya,Ep=class extends Ip{constructor(){super();this.isAddEvent=!1}addEvent(){}set dataSource(e){super.dataSource=e,this.pledgeData=e,this.pledgeData&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.pledgeData.reward,i=Oe.processItemsArray(e,!1),r=i[0],n=i[1];this.list_champ.array=r,this.tf_id.text=`${this.pledgeData.index+1}`;var o=[];n.forEach(s=>{var l=new Xe(s.id);l.newAddCnt=s.count,o.push(l)}),this.listHireReward.array=o,this.tf_days.text=tt.getYearMonthDat(this.pledgeData.takeTime)}};Ep=m([Gw("_mG5oDuaQY6l5yGUFmpG4w")],Ep);var Sp=class extends Laya.Box{};var{regClass:zw}=Laya,Tp=class extends Sp{constructor(){super();this.isAddEvent=!1}addEvent(){}set dataSource(e){super.dataSource=e,this.pledgeData=e,e&&(this.addEvent(),this.setCurrentOutPut(e))}async setCurrentOutPut(e){this.img_coinType.skin=M.instance.getItemIcon(e.id),this.tf_coinValue.text=Te.formatNumberStr(e.count,8)}};Tp=m([zw("5t1LQunTRFOali6ENPwdqQ")],Tp);var Cp=class extends Laya.Dialog{};var{regClass:Fw}=Laya,kp=class extends Cp{constructor(){super()}onEnable(){this.setOpenData(),this.list_sum.visible=!1,this.list_sumProp.visible=!1,this.list_champ.visible=!1}async setOpenData(){var t=await q.requestPost("wxgame/lease/childTakeList",{});if(t){console.log(t);let i=t.list;i=Oe.addIndexToObjects(i),this.list_champ.array=i,this.list_champ.visible=!0;let r=Oe.sumItemCount(i);console.log(r);let n=Oe.processItemsArray(r,!1),o=n[0],s=n[1];this.list_sum.array=o,this.list_sum.visible=!0;var e=[];s.forEach(l=>{var c=new Xe(l.id);c.newAddCnt=l.count,e.push(c)}),this.list_sumProp.array=e}}onItemRender(t,e){}onDisable(){}};kp=m([Fw("hbicTwT0TxSxlRep4P48Tw")],kp);var Ap=class extends Laya.Dialog{};var{regClass:jw}=Laya,Dp=class extends Ap{constructor(){super();this.destroyDoCancel=!1;this.canClose=!0}onEnable(){this.on(Laya.Event.CLICK,this,this.onClickEvent)}onClickEvent(e){let i=e.target;i.name=="okBtn"?(this._okHandler&&this._okHandler.runWith(null),this.close()):i.name=="cancleBtn"&&(this.destroyDoCancel=!1,this._cancelHandler&&this._cancelHandler.runWith(null),this.close())}setOpenData(e){e&&(this._okHandler=e.okHandler,this._cancelHandler=e.cancelHandler,this.destroyDoCancel=e.destroyDoCancel,e.flag<0?(this.cancleBtn.visible=!1,this.okBtn.visible=!1,this.canClose=!1):e.flag&N.YES&&!(e.flag&N.NO)?(this.okBtn.x=this.width-this.okBtn.width>>1,this.cancleBtn.visible=!1,this.okBtn.label="Sure"):e.flag&N.NO&&!(e.flag&N.YES)?this.okBtn.visible=!1:e.flag&N.YES&&e.flag&N.NO,e.data&&this.alertDesc&&(e.data instanceof Array?(this.alertTitle.text=e.data[0],this.alertDesc.text=e.data[1]):this.alertDesc.text=e.data),e.initHandler&&e.initHandler.runWith(this))}onDisable(){this.destroyDoCancel&&this._cancelHandler&&this._cancelHandler.run(),this._okHandler=null,this._cancelHandler=null}close(e){this.canClose&&super.close(e)}};Dp=m([jw("8G0DBvD7T_2CVupdfQXrBw")],Dp);var Mp=class extends Laya.Dialog{};var{regClass:qw}=Laya,Pp=class extends Mp{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem;S.instance.headId=i.id,this.playerIcon.headSkin=S.instance.headId}}createHeadList(){let e=F.intance.m_dicHead;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,r=0;this.playerIcon.headSkin=S.instance.headId;for(let n of e.values){if(n.id==S.instance.headId){i=r;break}r++}this.list_head.selectedIndex=i}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=f.instance.getUILang("Upload picture"),r=f.instance.getUILang("Select Image"),n=f.instance.getUILang("Save changes");openUploadPic(this,e,i,r,n)}async openPicEnd(e,i){if(i.length>500){let r=await q.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);r&&(S.instance.headId=r.imgUrl,e.playerIcon.headSkin=r.imgUrl,console.log(r.imgUrl))}}onRegister(){let e=S.instance.headId;L.intance.event(_.EVENT_MODIFY_HEAD,[e]),this.close()}};Pp=m([qw("BmtPy79ySCyg4IuEQC4zsQ")],Pp);var Bp=class extends Laya.ComboBox{};var{regClass:Ww}=Laya,Rp=class extends Bp{set defaultLabel(t){this._defaultLabel=t,this._selectedIndex<0&&(this._button.label=t),this._button.labelAlign="center"}onEnable(){this.list=this.comboList}set dataSource(t){super.dataSource=t;var e=t;e&&(this.labels=e.join(","),console.log("comboData.length: "+e.length),this.list.repeatY=e.length,this.list.width=this.width,this.list.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1))}onCountryItemRender(t,e){t.onChange(this.list.selectedIndex==e)}set isOpen(t){if(console.log("isOpen: "+t),this._isOpen!=t)if(this._isOpen=t,this._button.selected=this._isOpen,this._isOpen){this._list||this._createList(),this._listChanged&&!this._isCustomList&&this.changeList(),this._itemChanged&&this.changeItem();var e=this.localToGlobal(Laya.Point.TEMP.setTo(0,0)),i=e.y+this._button.height;i=i+this._listHeight<=Laya.stage.height||e.y-this._listHeight<0?i:e.y-this._listHeight,this.img_pad.addChild(this._list),this.img_pad.pos(e.x,i),this.img_pad.visible=!0,Laya.stage.addChild(this.img_pad),this.img_pad.zOrder=1001,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.removeList),Laya.stage.on(Laya.Event.MOUSE_WHEEL,this,this._onStageMouseWheel),this._list.selectedIndex=this._selectedIndex}else this._list&&this._list.removeSelf(),this.img_pad&&this.img_pad.removeSelf()}};Rp=m([Ww("AqEOSlrnRkmI9RUPCJUVqQ")],Rp);var Np=class extends Laya.List{};var{regClass:Kw}=Laya,Op=class extends Np{};Op=m([Kw("7DDHp602Rs6dL3bjAu4ArA")],Op);var Hp=class extends Laya.Box{};var{regClass:Yw}=Laya,Up=class extends Hp{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&i.label&&(this.addEvent(),this.tf_name.text=i.label)}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};Up=m([Yw("nREGzTKFSX6LuiRnM5nPXA")],Up);var Vp=class extends Laya.Box{};var{regClass:$w}=Laya,Gp=class extends Vp{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&(this.addEvent(),this.img_icon.skin=M.instance.getCountryIcon(i.id),this.tf_name.text=f.instance.getLanguage(i.name))}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};Gp=m([$w("LJ8PUf7kRCGUr4eT8Mhy3g")],Gp);var zp=class extends Laya.Dialog{};var lo=class extends Laya.Event{constructor(){super()}};lo.INIT_CREATELOGIN_EVENT="CreateLoginEvent:INIT_CREATELOGIN_EVENT";var{regClass:Xw}=Laya,Fp=class extends zp{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_PANEL;this.m_iPositionType=R.CENTER}onEnable(){L.intance.on(lo.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),L.intance.on(_.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),L.intance.on(_.EVENT_WAIT_PLAYERINFO,this,this.onWaitPlayerInfoBack),this.btn_setting.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_setting]),this.btn_radio1.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio1]),this.btn_radio2.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio2]),this.btn_register.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_register]),this.box_change.on(Laya.Event.CLICK,this,this.onChangeHead),this.input_name.prompt=f.instance.getLanguage("31"),this.selectRadio(1),this.initCountry(),this.initCreateLoginView(),we.instance.sendCustumEvent(23)}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onCountryItemRender(e,i){e.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(e){if(console.log("handleSelectCountry: "+e),e!=-1){let i=this.list_country.selectedItem;S.instance.countryId=i.id,this.img_flag.skin=M.instance.getCountryIcon(i.id),this.tf_country.text=f.instance.getLanguage(i.name)}}createCountryList(){let e=F.intance.m_dicCountry;this.list_country.array=e.values,this.list_country.visible=!0;let i=-1,r=0;for(let n of e.values){if(n.id==S.instance.countryId){i=r;break}r++}this.list_country.selectedIndex=i}onChangeHeadBack(e,i){this.input_name.text=e,S.instance.headId=i,this.playerIcon.headSkin=i}onChangeModifyHead(e){S.instance.headId=e,this.playerIcon.headSkin=e}onChangeHead(){V.intance.openModule(h.ChangeHeadDialog)}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=f.instance.getUILang("Upload picture"),r=f.instance.getUILang("Select Image"),n=f.instance.getUILang("Save changes");openUploadPic(this,e,i,r,n)}async openPicEnd(e,i){if(i.length>500){let r=await q.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);r&&(S.instance.headId=r.imgUrl,e.playerIcon.headSkin=r.imgUrl,console.log(r.imgUrl))}}selectRadio(e){let i=e==1;this.btn_radio1.selected=i,this.btn_radio2.selected=!i}handleClickBtn(e){switch(e){case this.btn_radio1:this.selectRadio(1);break;case this.btn_radio2:this.selectRadio(2);break;case this.btn_register:this.onRegister();break;case this.btn_setting:V.intance.openModule(h.GameSettingLanguageDialog);break}}async onRegister(){let e=this.input_name.text,i=this.btn_radio1.selected?1:2;if(e=e.trim(),e==""){ie.instance.notice(f.instance.getLanguage(31));return}if(S.instance.countryId==-1){ie.instance.notice(f.instance.getLanguage(1048));return}if(X.Debug>0){let r=await Y.instance.createAcccount(e,i,S.instance.headId.toString(),S.instance.countryId);this.onWaitPlayerInfoBack(r)}else{K.instance.showLoadingByInfo(f.instance.getLanguage(1119));let r=await Y.instance.checkNickName(e);console.log(r),r&&await rr.instance.createAcccount(e,i,S.instance.headId.toString(),S.instance.countryId)&&Y.instance.waitGetAccount()}}onWaitPlayerInfoBack(e){e&&(K.instance.hideLoading(),S.instance.playerDto=e,this.close(),L.intance.event(_.EVENT_ENTER_MAIN))}initCreateLoginView(){}onDisable(){this.removeEvent()}removeEvent(){L.intance.off(lo.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),L.intance.off(_.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),L.intance.off(_.EVENT_WAIT_PLAYERINFO,this,this.onWaitPlayerInfoBack)}};Fp=m([Xw("1K2SyFxcQY-12SasSSRXyQ")],Fp);var jp=class extends Laya.Dialog{};var{regClass:Qw}=Laya,qp=class extends jp{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){De.instance.playSoundByName(De.soundName32)}onDisable(){}};qp=m([Qw("szfg-Zt_RRWZ_nHMppjUMA")],qp);var Wp=class extends Laya.Box{};var{regClass:Zw}=Laya,Kp=class extends Wp{set dataSource(t){super.dataSource=t;var e=t;e&&(this.img_icon.skin="res/role/img_icon_"+e[0]+".png",this.tf_name.text=f.instance.getUILang(e[1]),this.tf_num.text=e[2])}};Kp=m([Zw("WJ5TDeRBSkC9yMqJ72B0Ow")],Kp);var Yp=class extends Laya.Box{};var{regClass:Jw}=Laya,$p=class extends Yp{set dataSource(e){super.dataSource=e,this.headItem=e,this.headItem&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.headItem.id;this.playerIcon.headSkin=e}onChange(e){}};$p=m([Jw("AwN_JFPwQsKswm1N53Bmkg")],$p);var Xp=class extends Laya.Dialog{};var{regClass:ex}=Laya,Qp=class extends Xp{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.btn_copy2.on(Laya.Event.CLICK,this,this.onCopy2),this.btn_changeHead.on(Laya.Event.CLICK,this,this.onChangeHead),this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.redemptionCode.on(Laya.Event.FOCUS,this,this.redemFocus),L.intance.on(_.ROLE_INFO_CHANGE,this,this.updateRoleInfo),this.updateRoleInfo()}redemFocus(){this.redemptionCode.text=""}updateRoleInfo(){let e=S.instance.playerDto;this.tf_name.text=e.name,this.img_sex.skin=e.sex==1?"res/role/img_icon_xb_1.png":"res/role/img_icon_xb_2.png",this.tf_uid.text=e.pid.toString(),this.tf_myCode.text=e.remCode,this.ally_num.text=`${e.remCount}`,this.tf_myCode.text==""?this.btn_copy2.disabled=!0:this.btn_copy2.disabled=!1,e.superRemCode?(this.btn_receive.disabled=!0,this.redemptionCode.text=`${e.superRemCode}`,this.yf_receive.text="Received"):this.yf_receive.text="Receive";var i=F.intance.m_dicCountry.get(e.country);this.img_country.skin=M.instance.getCountryIcon(e.country+""),this.tf_address.text=this.formatWalletAddress(Y.instance.walletAddress);let r=e.icon;this.playerIcon.headSkin=r,this.onGetAttr(e.pid)}formatWalletAddress(e){let n="...";return e.length<=12+10?e:`${e.substring(0,12)}${n}${e.substring(e.length-10)}`}async onGetAttr(e){let i=this,r=await q.requestPost("wxgame/player/getPlayerInfo",{pid:e});r?(this.fighting_value.text=r.fightTimes,this.victory_num.text=r.winTimes,this.fail_num.text=`${r.fightTimes-r.winTimes}`,this.runAway_num.text=r.taopao):ie.instance.notice(f.instance.getLanguage(135))}onChangeHead(){V.intance.openModule(h.SelectHeadDialog,!0)}async onReceive(){if(this.redemptionCode.text=="Enter the redemption code to claim equipment(unique)"||this.redemptionCode.text=="輸入兌換碼領取裝備（唯一）"||this.redemptionCode.text==""){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1123),N.YES,null);return}if(this.redemptionCode.text==this.tf_myCode.text&&this.redemptionCode.text!==""){_e.instance().AlertByType(N.BASEALERTVIEW,"You cannot enter your own invitation code.",N.YES,null);return}let e=this.redemptionCode.text,i=await q.requestPost("wxgame/player/setRem",{code:e});i&&(V.intance.openModule(h.RemGetDialog),S.instance.playerDto.superRemCode=i.code,this.btn_receive.disabled=!0,this.yf_receive.text="Received",this.tf_myCode.text=i.recommendCode,S.instance.playerDto.remCode=i.recommendCode,this.tf_myCode.text==""?this.btn_copy2.disabled=!0:this.btn_copy2.disabled=!1)}onCopy(){let e=Y.instance.walletAddress;doCopy(e),ie.instance.notice(f.instance.getLanguage(132))}onCopy2(){let e=this.tf_myCode.text;doCopy(e),ie.instance.notice(f.instance.getLanguage(132))}onDisable(){L.intance.off(_.ROLE_INFO_CHANGE,this,this.updateRoleInfo),this.redemptionCode.off(Laya.Event.FOCUS,this,this.redemFocus)}};Qp=m([ex("T7g565QQR7-fZgZNjVg92A")],Qp);var Zp=class extends Laya.Dialog{};var{regClass:tx}=Laya,Jp=class extends Zp{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}setOpenData(e){}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.input_name.prompt=f.instance.getLanguage("31"),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList(),this.initCountry()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem;S.instance.headId=i.id,this.playerIcon.headSkin=S.instance.headId}}createHeadList(){let e=F.intance.m_dicHead;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,r=0;S.instance.headId=S.instance.playerDto.icon,this.playerIcon.headSkin=S.instance.headId,this.input_name.text=S.instance.playerDto.name;for(let n of e.values){if(n.id==S.instance.headId){i=r;break}r++}this.list_head.selectedIndex=i}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onCountryItemRender(e,i){e.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(e){if(console.log("handleSelectCountry: "+e),e!=-1){let i=this.list_country.selectedItem;S.instance.countryId=i.id,this.img_flag.skin=M.instance.getCountryIcon(i.id),this.tf_country.text=f.instance.getLanguage(i.name)}}createCountryList(){let e=F.intance.m_dicCountry;this.list_country.array=e.values,this.list_country.visible=!0;let i=-1,r=0;S.instance.countryId=S.instance.playerDto.country;for(let n of e.values){if(n.id==S.instance.countryId){i=r;break}r++}this.list_country.selectedIndex=i}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=f.instance.getUILang("Upload picture"),r=f.instance.getUILang("Select Image"),n=f.instance.getUILang("Save changes");openUploadPic(this,e,i,r,n)}async openPicEnd(e,i){if(i.length>500){let r=await q.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);r&&(S.instance.headId=r.imgUrl,e.playerIcon.headSkin=r.imgUrl,e.list_head.selectedIndex=-1,console.log(r.imgUrl))}}onRegister(){let e=this.input_name.text;if(e=e.trim(),e==""){ie.instance.notice(f.instance.getLanguage(31));return}S.instance.headId!=-1?this.onModify(e,S.instance.headId,S.instance.countryId):ie.instance.notice(f.instance.getLanguage(134))}async onModify(e,i,r){if(e==""){ie.instance.notice(f.instance.getLanguage(31));return}let n=await rr.instance.updateProfile(e,i.toString(),r);this.destroyed||(n?(S.instance.playerDto=n,this.close(),L.intance.event(_.ROLE_INFO_CHANGE)):ie.instance.notice(f.instance.getLanguage(135)))}};Jp=m([tx("3CibwwHGSPG2Qkeq4rbMag")],Jp);var fa=class fa{constructor(){}static trim(t,e=null){e||(e=[" ","\r",`
`,"	",String.fromCharCode(65279)]);var i,r,n;for(i=t,n=e.length,r=0;r<n;r++)i=fa.getReplace(i,e[r],"");return i}static getReplace(t,e,i){if(!t)return"";var r;return r=t.replace(new RegExp(e,"g"),i),r}static isEmpty(t){return t.length<1?!0:fa.emptyStrDic.hasOwnProperty(t)}static trimLeft(t){var e;e=0;var i;for(i=t.length;fa.isEmpty(t.charAt(e))&&e<i;)e++;return e<i?t.substr(e):""}static trimRight(t){var e;for(e=t.length-1;fa.isEmpty(t.charAt(e))&&e>=0;)e--;var i;return i=t.substring(0,e),e>=0?t.substring(0,e+1):""}static trimSide(t){var e;return e=fa.trimLeft(t),e=fa.trimRight(e),e}static shortStr(t,e){return t.length>e?t.substr(0,e)+"...":t}static shortHeroStr(t,e=10){if(t.length>e){let i=t.split("#"),r=i[0],n=i[1];return r.substr(0,3)+"...#"+n}else return t}static caseInsensitiveSearchWithRegex(t,e){return new RegExp(e,"i").test(t)}};fa.emptyStrDic={" ":!0,"\r":!0,"\n":!0,"	":!0};var ct=fa;var em=class extends Laya.Dialog{};var{regClass:ix}=Laya,ba=class extends Laya.Script{constructor(){super();this._isLeft=!1}onAwake(){}get isLeft(){return this._isLeft}set isLeft(e){this._isLeft=e,this.btn_bg=this.owner.getChildByName("btn_bg"),this.label_left=this.owner.getChildByName("label_left"),this.label_right=this.owner.getChildByName("label_right"),this.isLeft?(this.btn_bg.x=4,this.label_left.color="#213343",this.label_right.color="#52a5e0"):(this.btn_bg.x=this.owner.width-this.btn_bg.width-4,this.label_left.color="#52a5e0",this.label_right.color="#213343")}};ba=m([ix("-1MGS4JRSMOn_RKPUuuV9Q")],ba);var{regClass:ax}=Laya,tm=class extends em{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.musicSwitchButton=this.box_music.getComponent(ba),this.soundSwitchButton=this.box_sound.getComponent(ba),this.languageSwitchButton=this.box_language.getComponent(ba),this.initContainer(),this.box_music.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_music]),this.box_sound.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_sound]),this.box_language.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_language]),this.btn_copy.clickHandler=new Laya.Handler(this,this.onClickHandler,[this.btn_copy]),this.btn_referral.on(Laya.Event.CLICK,this,this.onClickHandler,[this.btn_referral])}onClickHandler(e){switch(e){case this.box_music:this.musicSwitchButton.isLeft=!this.musicSwitchButton.isLeft,De.instance.switchMusic(this.musicSwitchButton.isLeft);break;case this.box_sound:this.soundSwitchButton.isLeft=!this.soundSwitchButton.isLeft,De.instance.switchSound(this.soundSwitchButton.isLeft);break;case this.btn_referral:V.intance.openModule(h.InviteRewardDialog);break;case this.box_language:{this.languageSwitchButton.isLeft=!this.languageSwitchButton.isLeft;let i=this.languageSwitchButton.isLeft?"zh":"en";f.instance.FGM_SetLanguage(i),we.instance.reload()}break;case this.btn_copy:{let i=this.inviteUrl;Le.doCopy(i),ie.instance.notice(f.instance.getLanguage(132))}break}}initContainer(){this.musicSwitchButton.isLeft=De.instance.m_bPlayMusic,this.soundSwitchButton.isLeft=De.instance.m_bPlayeSound,this.languageSwitchButton.isLeft=S.instance.m_strLanguage==6,this.inviteUrl=Jt.getInviteUrl(),this.label_url.text=ct.shortStr(this.inviteUrl,50)}addEvent(){}removeEvent(){}webCopyString(e){let i=e,r=window.document.createElement("textarea");r.value=i,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";let n=window.getSelection(),o=!1;n.rangeCount>0&&(o=n.getRangeAt(0)),window.document.body.appendChild(r),r.select(),r.selectionStart=0,r.selectionEnd=i.length;let s=!1;try{s=window.document.execCommand("copy")}catch(l){console.error(l)}return window.document.body.removeChild(r),o&&(n.removeAllRanges(),n.addRange(o)),s}};tm=m([ax("yJfJZzgZRluE_rgB44yTvg")],tm);var im=class extends Laya.Box{};var{regClass:rx}=Laya,am=class extends im{set dataSource(t){super.dataSource=t;var e=t;e&&(this.img_icon.skin=M.instance.getAttrIcon(e[0]),this.tf_name.text=f.instance.getUILang(e[1]),this.tf_num.text=e[2])}};am=m([rx("lWiDi5bCR-CNy4v3ZMd42w")],am);var rm=class extends Laya.Dialog{};var Mi=class{constructor(){}};Mi.UPDATE_HERO_EVENT="HeroEvent:UPDATE_HERO_EVENT",Mi.UPDATE_HERO_UPGRADE_EVENT="HeroEvent:UPDATE_HERO_UPGRADE_EVENT";var{regClass:nx}=Laya,nm=class extends rm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}setOpenData(e){e&&(this._vo=e)}onComplete(){}onEnable(){this.showViewByVo(this._vo),this.btn_last.on(Laya.Event.CLICK,this,this.onClickLast),this.btn_next.on(Laya.Event.CLICK,this,this.onClickNext),this.btn_upgrade.on(Laya.Event.CLICK,this,this.onClickUpgrade),this.btn_out.on(Laya.Event.CLICK,this,this.onClickOut)}onClickUpgrade(){V.intance.openModule(h.HeroUpgradeDialog,this._vo)}onClickNext(){let e=ot.instance.getNextHero(this._vo);e&&(this._vo=e,this.showViewByVo(e))}onClickLast(){let e=ot.instance.getLastHero(this._vo);e&&(this._vo=e,this.showViewByVo(e))}addEvent(){L.intance.on(Mi.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade),this.stage.on(Laya.Event.CLICK,this,this.hideTips);for(let e=1;e<7;e++){let i=this["equip"+e];i.on(Laya.Event.CLICK,this,this.onClickEquip),this._vo.state!==0&&(i.disabled=!0)}}hideTips(){}onClickEquip(e){}removeEvent(){L.intance.off(Mi.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade)}onHeroUpgrade(){this._vo=S.instance.m_heroData.heroVoDic.get(this._vo.pk),this._vo&&this.showViewByVo(this._vo)}updateEquip(){let e=this._vo.equipDtoList;for(let i=0;i<e.length;i++){let r=e[i];this["equip"+(i+1)].dataSource=r}}async showViewByVo(e){this.txt_name.text=e.name;let i=e.heroItem.level+"";ot.instance.setStar(this,i),this.box_star.visible=!0,this.heroSk.dataSource=e;var r=[["maxHp","MaxHP",e.heroItem.maxHp],["atk","ATK",e.heroItem.atk],["def","DEF",e.heroItem.def],["mov","MOV",e.heroItem.mov],["crt","CRT",e.heroItem.crt/100+"%"],["crtRate","CrtRate",e.heroItem.crtRate/100+"%"],["immunity","Immunity",e.heroItem.immunity],["dex","Dex",(e.heroItem.dex/100).toFixed(2)+"%"],["miss","MISS",e.heroItem.miss]];this.list_attrs.array=r;var n=[];e.heroItem.skillIds.forEach(o=>{var s=F.intance.m_dicSkills.get(o);n.push(s)}),this.list_skills.array=n,this.updatePk()}async updatePk(){let e=null;this._vo.state!==0?(e=await q.requestPost("wxgame/lease/heroInfo",{heroPk:this._vo.pk}),this._vo.state==1?(this.btn_out.disabled=!0,this.btn_upgrade.disabled=!0):this._vo.state==2&&(this.btn_upgrade.disabled=!0,S.instance.playerDto.fightHeroPk==this._vo.pk?(this.box_sign.visible=!0,this.btn_out.disabled=!0,this.btn_out.label=f.instance.getLanguage(1038)):(this.box_sign.visible=!1,this.btn_out.disabled=!1,this.btn_out.label=f.instance.getLanguage(1037))),e&&e.info&&e.info.startTime&&e.info.startTime>tt.getCurrentDayTimestamp()&&(this.btn_out.disabled=!0,this.btn_upgrade.disabled=!0)):S.instance.playerDto.fightHeroPk==this._vo.pk?(this.box_sign.visible=!0,this.btn_out.disabled=!0,this.btn_out.label=f.instance.getLanguage(1038)):(this.box_sign.visible=!1,this.btn_out.disabled=!1,this.btn_out.label=f.instance.getLanguage(1037))}async onClickOut(){let e=this,i=await q.requestPost("wxgame/hero/heroFight",{pk:this._vo.pk});i?(S.instance.playerDto.fightHeroPk=i.pk,e.updatePk(),L.intance.event(Mi.UPDATE_HERO_EVENT)):ie.instance.notice(f.instance.getLanguage(135))}};nm=m([nx("Qri7gUY9SiWsYhtvNCEOQQ")],nm);var om=class extends Laya.Box{};var{regClass:ox}=Laya,sm=class extends om{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=M.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){var e=[];S.instance.playerDto.fightHeroPk==this.heroVo.pk&&e.push(1),this.heroVo.state==2&&e.push(3),this.heroVo.state==1&&e.push(2),this.list_state.array=e,this.img_back.skin=M.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=M.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=ct.shortHeroStr(this.heroVo.name);let r=this.heroVo.heroItem.level+"";ot.instance.setStar(this,r),this.box_show.visible=!0,this.destroyed}toDetail(){this.heroVo.id&&V.intance.openModule(h.HeroDetailDialog,this.heroVo)}};sm=m([ox("PfeS1F4rQCqM4vXJpBZVWQ")],sm);var Ge=class Ge{constructor(){}};Ge.ANI_beiji="beiji",Ge.ANI_daiji="daiji",Ge.ANI_gongji="gongji",Ge.ANI_ti="ti",Ge.ANI_hua="hua",Ge.ANI_dang="gedang",Ge.ANI_dazhao="z_dazhao",Ge.ANI_ruchang="ruchang",Ge.ANI_siwang="siwang",Ge.ANI_xingzou="xingzou",Ge.ANI_chongzhuang="z_chongzhuang",Ge.ANI_chongzhuang2="z_chongzhuang2",Ge.ANI_daodi="z_daodi",Ge.ANI_shanbi="z_shanbi",Ge.ANIS=[Ge.ANI_daiji,Ge.ANI_xingzou,Ge.ANI_gongji,Ge.ANI_ti,Ge.ANI_hua,Ge.ANI_dang,Ge.ANI_beiji,Ge.ANI_siwang],Ge.TYPE_GONGJI=1,Ge.TYPE_TI=2,Ge.TYPE_HUA=3,Ge.TYPE_DANG=4,Ge.TYPE_FEI=5,Ge.TYPE_DAZHAO=6;var Ze=Ge;var lm=class extends Laya.Box{};var{regClass:sx}=Laya,cm=class extends lm{constructor(){super();this.isAddEvent=!1;this.isReady=!1;this.skinIndex=0;this.spineAniIndex=0;this.skinArray=["goblin","goblingirl"]}addEvent(){this.isAddEvent||(this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.changeAni),this.sk.on(Laya.Event.READY,this,this.onSkReady))}onSkReady(){this.isReady=!0}set dataSource(e){super.dataSource=e,this.heroVo=e,this.addEvent(),this.createSpine()}createSpine(){Laya.loader.load(this.heroVo.sk,Laya.Loader.SPINE).then(e=>{this.destroyed||(this.sk.templet=e,this.sk.animationName=Ze.ANI_daiji,this.spineAniNum=Ze.ANIS.length)})}changeAni(){if(this.isReady){this.spineAniIndex++,this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=0);var e=Ze.ANIS[this.spineAniIndex];this.sk.play(e,!0,!0)}}changeSkin(){this.sk.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}onDisable(){this.sk.off(Laya.Event.READY,this,this.onSkReady)}};cm=m([sx("kS5K53GHRWOdgfXoo6VH1A")],cm);var um=class extends Laya.Scene{};var{regClass:lx}=Laya,pm=class extends um{onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onEnable(){this.list_hero.vScrollBarSkin="",this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),L.intance.on(Mi.UPDATE_HERO_EVENT,this,this.createHeadList),this.initMyHeroView(),this.initContainer()}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}async initMyHeroView(){}onListEvent(e,i){switch(e.type){case Laya.Event.CLICK:this.list_hero.selectedIndex=i,this.handleSelectHero(i);break}}onRenderList(e,i){let r=e.dataSource}initContainer(){this.list_hero.visible=!1,this.list_hero.vScrollBarSkin="",this.list_hero.mouseHandler=new Laya.Handler(this,this.onListEvent),this.list_hero.renderHandler=new Laya.Handler(this,this.onRenderList),this.createHeadList()}handleSelectHero(e){let i=this.list_hero.selectedItem}async createHeadList(){if(await Ke.instance.ownerHero(),!this)return;let e=S.instance.m_heroData.heroVoDic.values;if(e&&e.length>9){this.list_hero.array=e,this.list_hero.visible=!0,this.tf_noData.visible=!1;let n=-1;this.list_hero.selectedIndex=n}else{let n=[];for(var i=0;i<10;i++){var r=e[i];r?n.push(r):n.push(null)}this.list_hero.array=n,this.list_hero.visible=!0,this.tf_noData.visible=!1}}handleClickBtn(e){switch(e){}}onDisable(){L.intance.off(Mi.UPDATE_HERO_EVENT,this,this.createHeadList)}};pm=m([lx("eEFn-xcRTXagUEZFDdSujw")],pm);var mm=class extends Laya.Box{};var{regClass:cx}=Laya,dm=class extends mm{set dataSource(t){super.dataSource=t;var e=t;e&&(this.tf_name.text=f.instance.getUILang(e[1]),this.tf_num.text=e[2])}};dm=m([cx("BFrnzfZDRh2v3vDKqrNVwA")],dm);var hm=class extends Laya.Box{};var{regClass:ux}=Laya,fm=class extends hm{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.txt_num.text="",this.img_icon.skin=M.instance.getSkillIcon(this.skillItem.icon,this.isBig))}};fm=m([ux("qJVd2M3_Td-5eIx8PsQpAw")],fm);var bm=class extends Laya.Box{};var{regClass:px}=Laya,ym=class extends bm{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.dataSource=this.skillItem)}toDetail(){this.skillItem&&V.intance.openModule(h.SkillTipDialog,this.skillItem)}};ym=m([px("VRh1GpjHSyqm75euC37ZKw")],ym);var gm=class extends Laya.Dialog{};var{regClass:mx}=Laya,vm=class extends gm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}setOpenData(e){e&&(this.skillItem=e)}onEnable(){this.item.dataSource=this.skillItem,this.tf_name.text=f.instance.getLanguage(this.skillItem.name);var e=[["type","S_type",f.instance.getUILang("S_type_"+this.skillItem.type)],["distance","S_distance",this.skillItem.distance],["hurt","S_hurt",this.skillItem.hurt/100+"%"],["cd","S_cd",this.skillItem.cd/1e3+f.instance.getUILang("S_S")],["displacement","S_displacement",this.skillItem.displacement],["targetsType","S_targetsType",f.instance.getUILang("S_targetsType"+this.skillItem.targetsType)]];this.list_skillAttrs.array=e}removeEvent(){}};vm=m([mx("PiBuXnP8ToeveVbB_bfhUQ")],vm);var Lm=class extends Laya.Box{};var{regClass:dx}=Laya,_m=class extends Lm{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,console.log(e),e&&(this.img_icon.skin=`gameIcon/hero/heroDetail/img_hero_state_${e}.png`)}};_m=m([dx("kgETBhusT2WQRM1T39-4EA")],_m);var xt=class{constructor(){}};xt.TYPE_Consumption=1,xt.TYPE_Equipment=2,xt.TYPE_Currency=3,xt.TYPE_Hero=4,xt.TYPE_Fragment=5;var wm=class extends Laya.Box{};var{regClass:hx}=Laya,xm=class extends wm{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&this.setCurrentOutPut()}async setCurrentOutPut(){if(!this.itemVo)return;let e=this.itemVo.itemItem;this.knapsackItem.dataSource=this.itemVo,e?this.disabled=!1:this.disabled=!0}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===xt.TYPE_Equipment?V.intance.openModule(h.EquipDetailDialog,this.itemVo):V.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};xm=m([hx("HYoZb6e-RFKj8fjDKbl-7Q")],xm);var Im=class extends Laya.Dialog{};var{regClass:fx}=Laya,Em=class extends Im{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.initContainer(),De.instance.playSoundByName(De.soundName32)}initContainer(){var e=Ue.instance.getOneItem();if(e){var i;e instanceof Array?(i=new Xe(e[0]),i.newAddCnt=e[1]):i=e,this.showItem(i)}}showItem(e){this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=e,this.tf_name.text=f.instance.getLanguage(e.itemItem.name)}onDisable(){L.intance.event(_.EVENT_CHECK_REMAIN,h.ItemGetDialog)}};Em=m([fx("tC2uDJDVQMaI41Lys60O5Q")],Em);var Sm=class extends Laya.Box{};var{regClass:bx}=Laya,Tm=class extends Sm{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=new Xe;if(!this.itemVo)return;let i=this.itemVo.itemItem;i?(this.showAdd?this.txt_num.text=""+Te.formatNumber(this.itemVo.newAddCnt,8):this.itemVo.m_iNum?this.txt_num.text=""+Te.formatNumber(this.itemVo.m_iNum,8):this.txt_num.text=""+Te.formatNumber(this.itemVo.newAddCnt,8),this.img_icon.skin=M.instance.getItemIcon(i.icon),this.img_box.skin="gameIcon/items/itemBg/img_"+i.quality+".png"):(this.txt_num.text="",this.img_icon.skin=null,this.img_box.skin="gameIcon/items/itemBg/img_0.png")}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===xt.TYPE_Equipment?V.intance.openModule(h.EquipDetailDialog,this.itemVo):V.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};Tm=m([bx("LzxJYKybT_m3CJav3RyDmg")],Tm);var Cm=class extends Laya.Scene{};var{regClass:yx}=Laya,km=class extends Cm{constructor(){super(...arguments);this.currTab=0;this.type=1;this.items=[];this.hasItem=!1}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){this.type=e}onEnable(){this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.box_show.visible=!1,this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-X.DESIGN_HEIGHT)/2}setTab(e){for(let i=1;i<3;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}async initLuckDrawView(){await Ke.instance.ownerBag(),!this.destroyed&&(this.type?this.onClickTab(this.type):this.onClickTab(1))}onClickTab(e){if(this.currTab!=e){if(this.setTab(e),e==1){if(this.box_2.visible=!0,this.destroyed)return;var i=this.getItemByType(1);this.listPanel1.array=i}else{if(this.box_2.visible=!0,this.destroyed)return;var i=this.getItemByType(2);this.listPanel1.dataSource=i}this.listPanel1.selectedIndex=-1,this.hasItem&&(this.listPanel1.selectedIndex=0)}}getItemByType(e){var i=e==1?xt.TYPE_Consumption:xt.TYPE_Equipment;this.items=[],this.hasItem=!1;for(var r=S.instance.m_packageData.getBackByType(i),n=0;n<30;n++){var o=r[n];o?(n==0&&(this.hasItem=!0),this.items.push(o)):this.items.push(new Xe(0))}return this.items}onSelectItem(e,i){var r=this.items[e];if(console.log(r),r){let n=r.itemItem;this.img_icon.skin=M.instance.getItemIcon(n.icon),this.tf_name.text=f.instance.getLanguage(n.name),this.tf_des.text=f.instance.getLanguage(n.des),this.box_show.visible=!0}else this.img_icon.skin=null,this.tf_name.text="",this.tf_des.text="",this.box_show.visible=!1}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}onShowSkill(){V.intance.openModule(h.SkillTipDialog)}stopAni(e){console.log("stopAni: "+e)}onDrawBack(e){}removeEvent(){}};km=m([yx("6IPqO9JvTmygjIZQXMwq2A")],km);var Am=class extends Laya.Dialog{};var{regClass:gx}=Laya,Dm=class extends Am{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}setOpenData(e){e&&(this.itemVo=e)}onEnable(){this.item.dataSource=this.itemVo;let e=this.itemVo.itemItem;this.tf_name.text=f.instance.getLanguage(e.name),this.txt_type.text=f.instance.getLanguage("6060")+f.instance.getLanguage(e.type),this.txt_desc.text=f.instance.getLanguage(e.des),this.btn_use.visible=e.use!="0",this.btn_use.clickHandler=new Laya.Handler(this,this.useItem)}async useItem(){this.close()}removeEvent(){}};Dm=m([gx("or8jNdIhRpSbAG2JBhH-wA")],Dm);var Mm=class extends Laya.Dialog{};var{regClass:vx}=Laya,Pm=class extends Mm{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){De.instance.playSoundByName(De.soundName32)}setOpenData(e){e&&(this.reward=e);var i=[],r=this.reward;r.forEach(c=>{var u=new Xe(c.id);u.newAddCnt=c.count,i.push(u)});var n=this.list_reward.spaceX,o=this.list_reward.itemTemplate.width,s=i.length,l=s*o+n*(s-1);this.list_reward.width=l,this.list_reward.right=this.width-l>>1,this.list_reward.array=i}};Pm=m([vx("xwYUFnd4S3uJGIJSjjbRag")],Pm);var Bm=class extends Laya.Box{};var{regClass:Lx}=Laya,Rm=class extends Bm{constructor(){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){console.log("OpenScene onEnable："+this.m_strName)}getName(){console.log(this.m_strName)}onDisable(){}};Rm=m([Lx("sQS5mrqRQLWcBk-SgfBGJw")],Rm);var Nm=class extends Laya.Box{};var{regClass:_x}=Laya,Om=class extends Nm{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.check_coin.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.addEvent();let i=e;this.check_coin.selected=i[1],this.tf_coin.text=i[2]}onCheck(){this._dataSource[1]=this.check_coin.selected,L.intance.event(_.EVENT_CHECK_ICON_SELECT)}};Om=m([_x("UTGHsPbQS6C5FohXv8T25Q")],Om);var Hm=class extends Laya.Dialog{};var{regClass:wx}=Laya,Um=class extends Hm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER;this.coinType=3001;this.coinIds=[]}setOpenData(e){e&&(this.arenaLv=e[0])}onEnable(){this.btn_create.on(Laya.Event.CLICK,this,this.onCreate),this.initContainer()}initContainer(){let e=S.instance.playerDto;if(!e)return;this.tf_roleName.text=e.name;let i=e.icon;this.playerIcon.headSkin=i,this.img_country.skin=M.instance.getCountryIcon(e.country+""),this.initCombo()}initCombo(){this.coinIds=F.intance.getGeneralValueById(5);var e=[];this.coinIds.forEach(i=>{var r=F.intance.m_dicItems.get(i);e.push(f.instance.getLanguage(r.name))}),this.coinCombo.selectHandler=new Laya.Handler(this,this.onSelected2),this.coinCombo.dataSource=e,this.coinCombo.selectedIndex=0}onSelected2(e){e!=-1&&(this.coinType=this.coinIds[e],console.log("您选中了 coinType"+this.coinType),this.setRoomInfo())}setRoomInfo(){this.arenaItem=F.intance.getSheetDataByMultiKey(F.intance.m_dicArenaMulDic,[this.arenaLv,this.coinType]),this.tf_roomName.text=f.instance.getLanguage(this.arenaItem.name),this.tf_min.text=this.arenaItem.numberMin+"",this.tf_max.text=this.arenaItem.numberMax+""}async onCreate(){if(this.arenaItem.item&&this.arenaItem.item.length>1){var e=this.arenaItem.item[0],i=this.arenaItem.item[1],r=S.instance.m_packageData.getCountById(e);let l=!1,c=S.instance.playerDto;if(c.fightHeroPk){await Ke.instance.ownerHero();let u=S.instance.m_heroData.heroVoDic.get(c.fightHeroPk);if(u){if(l=u.state==2,l){var n=await q.requestPost("wxgame/lease/heroInfo",{heroPk:c.fightHeroPk});if(n.info.remainTicketCount<=0){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1175),N.YES,null);return}if(e!==n.info.ticketId){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1178),N.YES,null);return}}if(u.state==1){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1176),N.YES,null);return}}else{_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1059),N.YES,null);return}}else{_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1059),N.YES,null);return}if(r<i&&!l){Le.titickNotEnought(e);return}}let o=this.input_pwd.text;var s=this.arenaItem.id;if(s){let l=await q.requestPost("wxgame/room/create",{password:o,arenaId:s});Q.instance.roomDto=l.roomDto,l.roomDto?(this.close(),V.intance.openModule(h.EnterRoomView)):ie.instance.notice(f.instance.getLanguage(135))}}};Um=m([wx("_y9qJpZZRk2p26xdgYPRyA")],Um);var Vm=class extends Laya.Dialog{};var{regClass:xx}=Laya,Gm=class extends Vm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_PANEL;this.m_iPositionType=R.CENTER}onEnable(){this.btn_exit.on(Laya.Event.CLICK,this,this.onExitClick),L.intance.event(_.EVENT_ENTER_MATCH_ROOM,!1),this.initContainer(),we.instance.sendCustumEvent(40)}initContainer(){this.list_wait_hero.visible=!0;var e=Q.instance.roomDto,i=e.roomId,r=e.arenaId,n=e.coinType,o=F.intance.m_dicArenaDic.get(r);Q.instance.currArenaItem=o,this.tf_roomName.text=f.instance.getLanguage(o.name),this.arenaNo.text=i+"",this.initRoomData(),this.updateExitCD(),Laya.timer.loop(1e3,this,this.onRefreshRoom)}updateExitCD(){var e=Math.round(Q.instance.roomDto.joinCd/1e3),i=e-Q.instance.currArenaItem.notQuit;i>Q.instance.currArenaItem.exitTime&&(i=Q.instance.currArenaItem.exitTime),Q.instance.limitCd=i,Q.instance.limitCd>0?(this.onSetExitTime(),Laya.timer.loop(1e3,this,this.onSetExitTime)):(Laya.timer.clear(this,this.onSetExitTime),this.btn_exit.disabled=!0,this.btn_exit.label="Exit")}onSetExitTime(){Q.instance.limitCd>=0?(this.btn_exit.label=f.instance.getUILang("Exit")+" "+Q.instance.limitCd+"S",Q.instance.limitCd--,this.btn_exit.disabled=!1):(Laya.timer.clear(this,this.onSetExitTime),this.btn_exit.disabled=!0,this.btn_exit.label="Exit")}updateBattleCD(){Q.instance.coolDownTime=Math.round(Q.instance.roomDto.joinCd/1e3),Q.instance.coolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):this.onGoMatch()}onSetCoolTime(){Q.instance.coolDownTime>=0?(this.tf_coolTime.text=f.instance.getLanguage(1089)+" <font color='#ff5388'>"+tt.format(Q.instance.coolDownTime)+"</font>",Q.instance.coolDownTime--):this.onGoMatch()}async onGoMatch(){Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.clear(this,this.onRefreshRoom);let e=await q.requestPost("wxgame/room/info",{roomId:Q.instance.roomDto.roomId});var i=e.roomDto;i.joinCd==0?e.roomDto.enterGame==1?(Laya.timer.clearAll(this),$e.instance.initSocket()):(this.close(),L.intance.event(_.EVENT_ENTER_MATCH_ROOM,!0),Le.commTipWithYes(Ce.instance.get(25))):(Q.instance.roomDto=i,this.updateBattleCD())}async onExitClick(){await q.requestPost("wxgame/room/leave",{roomId:Q.instance.roomDto.roomId})?this.close():ie.instance.notice(f.instance.getLanguage(135))}handleSelectHead(e){}initRoomData(){var e=Q.instance.roomDto.members.length;this.tf_people.text=e+"";var i=Q.instance.currArenaItem.numberMax;this.heros=[];for(var r=0;r<i;r++){var n=Q.instance.roomDto.members[r];n?this.heros.push(n):this.heros.push(null)}if(this.list_wait_hero.array=this.heros,this.list_wait_hero.visible=!0,e>=i){this.onGoMatch();return}this.updateBattleCD()}async onRefreshRoom(){let e=await q.requestPost("wxgame/room/info",{roomId:Q.instance.roomDto.roomId});Q.instance.roomDto=e.roomDto,this.initRoomData(),Q.instance.setMatchRes()}handleClickBtn(e){switch(e){}}onDisable(){this.removeEvent(),console.log("EnterRoomView onDisable"),be.intance.currSceneName!=re.M_SCENE_MAIN?be.intance.setCurrentScene(re.M_SCENE_MAIN):L.intance.event(_.EVENT_ENTER_MATCH_ROOM,!0)}removeEvent(){Laya.timer.clearAll(this)}};Gm=m([xx("IwpLh2K2T5Gh7QXYnJakAw")],Gm);var zm=class extends Laya.Dialog{};var{regClass:Ix}=Laya,Fm=class extends zm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}setOpenData(e){e&&(this.roomDto=e[0])}onEnable(){this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.initContainer()}initContainer(){var e=F.intance.m_dicItems.get(this.roomDto.coinType),i=f.instance.getLanguage(e.name),r=F.intance.m_dicArenaDic.get(this.roomDto.arenaId);this.tf_roomName.text=f.instance.getLanguage(r.name),this.input_pwd.text=""}async onJoin(){let e=this.input_pwd.text;var i=F.intance.m_dicArenaDic.get(this.roomDto.arenaId);if(i.item&&i.item.length>1){var r=i.item[0],n=i.item[1],o=S.instance.m_packageData.getCountById(r);if(o<n){Le.titickNotEnought(r);return}}let s=await q.requestPost("wxgame/room/join",{roomId:this.roomDto.roomId,pass:e});Q.instance.roomDto=s.roomDto,s.roomDto?(V.intance.openModule(h.EnterRoomView),this.close()):ie.instance.notice(f.instance.getLanguage(135))}};Fm=m([Ix("bn6StZy0ROGBH9GCTateCA")],Fm);var jm=class extends Laya.Scene{};var qm=class a{constructor(){this._inited=!1}static getInstance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0,S.instance.initData())}};var{regClass:Ex}=Laya,sr=class extends jm{constructor(){super(...arguments);this.currTab=0;this.arenaLv=1001;this.coinTypes=[];this.currIconAni=1;this.coinDatas=[]}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP,qm.getInstance().init()}async onOpened(e){this.mouseThrough=this.mouseThrough=!0,this.headBox.mouseThrough=!0;let i=this.getChildByName("mcMain");i&&(i.mouseThrough=!0),Laya.Browser.onIOS&&X.justFull==!1?this.btn_fullScreen.visible=!1:(this.btn_fullScreen.visible=X.isInto,X.isInto&&X.isFull&&(Le.isFullScreen=!0,Le.isFullScreen?this.img_fullScreen.skin="res/main/img_full_2.png":this.img_fullScreen.skin="res/main/img_full_1.png")),this.updateTopInfo(),this.initCombo(),this.onClickTab(1);var r=Laya.stage.width-X.DESIGN_WIDTH>>1;this.leftX=this.leftMenu.x,this.rightX=this.rightMenu.x,this.leftMenu.x=this.leftX-r-this.leftMenu.width,this.rightMenu.x=this.rightX+r+this.rightMenu.width,Laya.Tween.to(this.leftMenu,{x:this.leftX-r},500),Laya.Tween.to(this.rightMenu,{x:this.rightX+r},500),this.initBtnAni(),we.instance.sendCustumEvent(34),sr.M_B_FIRST_Open&&q.requestPost("wxgame/sys/notice",{type:2},!0,!0).then(n=>{console.log(n);var o=n;if(o.status==0&&o.nowTime>=o.startTime&&o.nowTime<=o.endTime){var s=parseInt(S.instance.m_strLanguage.toString()),l=o.title[s],c=o.contents[s];V.intance.openModule(h.NoticeDialog,[2,l,c])}}),sr.M_B_FIRST_Open=!1}initBtnAni(){for(var e=1;e<6;e++)this["spine_"+e].on(Laya.Event.READY,this,this.onSkReady,[this["spine_"+e]])}onSkReady(e){e.stop(),e.visible=!1,e==this.spine_5&&this.startBtnAni()}startBtnAni(){this.currIconAni>5&&(this.currIconAni=1),this["spine_"+this.currIconAni].play(0,!1),this["spine_"+this.currIconAni].visible=!0,this.currIconAni++,Laya.timer.once(2e3,this,this.startBtnAni)}changeMailFlag(){}updateTopInfo(){let e=S.instance.playerDto;if(!e)return;this.tf_roleName.text=e.name,this.levelTF.text=e.lv.toString(),e.needTip=!0,this.playerIcon.dataSource=e,this.updateExp(),this.changeMailFlag();let i=new Date(S.instance.m_serverTime);console.log("server time toLocaleString："+i.toLocaleString()),console.log("server time offset date："+S.instance.timeZoneOff/60/60),this.updateLocalAssets()}updateExp(){}requestAssets(){L.intance.event(_.UPDATE_ASSETS)}async updataBalence(){await Y.instance.getBalance()}async updateAssets(){await nr.instance.updateAssetsBalance()}updateLocalAssets(){this.tf_3005.text=Te.filterNumFormat(S.instance.getConsumeValue(Fe.TYPE_GOLD),0)}loopTime(){}onEnable(){this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.list_room.vScrollBarSkin="",this.list_room.array=[],this.btn_create.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_create]),this.btn_shop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_shop]),this.btn_guild.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_guild]),this.btn_heroes.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_heroes]),this.btn_backpack.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_backpack]),this.btn_asset.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_asset]),this.btn_scholarshop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_scholarshop]),this.btn_leaderboard.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_leaderboard]),this.btn_social.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_social]),this.btn_activities.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_activities]),this.btn_collection.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_collection]),this.btn_setting.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_setting]),this.btn_fullScreen.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_fullScreen]),L.intance.on(_.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),L.intance.on(_.ROLE_INFO_CHANGE,this,this.updateTopInfo),L.intance.on(_.UPDATE_ASSETS,this,this.updateAssets),L.intance.on(Pt.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),L.intance.on("CHANG_NAME",this,this.changeName),L.intance.on("open_buy",this,this.openBuyDialog),L.intance.on("msg_173",this,this.onFirstRecharge),L.intance.on("ACCOUNTVO_UPDATE",this,this.updateExp),L.intance.on(_.EVENT_REMOVE_ACTIVITY,this,this.onBindStateChange),L.intance.on(_.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),L.intance.on(_.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),this.initBtnBox()}setTab(e){for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("btn_yellowBg").visible=!0,this["btn_"+i].getChildByName("Label").color="#143268"):(this["btn_"+i].getChildByName("btn_yellowBg").visible=!1,this["btn_"+i].getChildByName("Label").color="#ffffff")}onClickTab(e){if(this.currTab!=e){if(this.setTab(e),e==1){this.arenaLv=1;var i=this.getRoomByType()}else if(e==2){this.arenaLv=2;var i=this.getRoomByType()}else if(e==3){this.arenaLv=3;var i=this.getRoomByType()}}}async getRoomByType(){this.arenaLv,this.coinTypes;let e=await q.requestPost("wxgame/room/list",{lv:this.arenaLv,coinTypeList:this.coinTypes});this.list_room.array=e.roomList,Laya.timer.once(3e3,this,this.getRoomByType)}initCombo(){this.coinTypes=[];var e=F.intance.getGeneralValueById(5);this.coinDatas=[],e.forEach(i=>{this.coinTypes.push(i);var r=F.intance.m_dicItems.get(i);this.coinDatas.push([i,!0,f.instance.getLanguage(r.name)])}),this.list_coin.array=this.coinDatas}onCoinSelected(){this.coinTypes=[],this.coinDatas.forEach(e=>{e[1]&&this.coinTypes.push(e[0])}),console.log("您选中了 coinType"+this.coinTypes),this.getRoomByType()}onBindStateChange(){}onFirstRecharge(e){}initBtnBox(){this.sortIconView()}sortIconView(){}async onclickBtnHandler(e){switch(e){case this.btn_shop:be.intance.setCurrentScene(re.M_SCENE_SHOP);break;case this.btn_heroes:be.intance.setCurrentScene(re.M_SCENE_HERO);break;case this.btn_backpack:be.intance.setCurrentScene(re.M_SCENE_KNAPSACK);break;case this.btn_guild:S.instance.playerDto.union>0?be.intance.setCurrentScene(re.M_SCENE_MYUNION,S.instance.playerDto.union):be.intance.setCurrentScene(re.M_SCENE_UNION);break;case this.btn_setting:V.intance.openModule(h.GameSettingLanguageDialog);break;case this.btn_create:V.intance.openModule(h.CreateRoomDialog,[this.arenaLv]);break;case this.btn_fullScreen:Le.fullScreen(!Le.isFullScreen);break;case this.btn_friend:V.intance.openModule(h.FriendMemberDialog);break;case this.btn_asset:be.intance.setCurrentScene(re.M_SCENE_ASSET);break;case this.btn_scholarshop:be.intance.setCurrentScene(re.M_SCENE_SHOLARSHIP);break;case this.btn_wallet:V.intance.openModule(h.WalletDialog);break;case this.btn_leaderboard:be.intance.setCurrentScene(re.M_SCENE_RANK);break;default:ie.instance.notice(f.instance.getLanguage(12));break}}openBuyDialog(e){switch(parseInt(e)){case 3:this.buyGoldBtn();break;case 4:this.clickRecharge();break}}buyTiCallBack(e){K.instance.showLoading(),this.sendData(89,[7])}clickRecharge(){if(X.m_bInstantGame==!0){let e=f.instance.getLanguage(500004);_e.instance().AlertByType(N.BASEALERTVIEW,e,N.YES);return}L.intance.event(_.EVENT_OPEN_MODULE,[h.RechargeDialog])}changeName(e){}buyGoldBtn(){L.intance.event(_.EVENT_OPEN_MODULE,[h.GetMoreDialog])}onDisable(){for(var e=1;e<6;e++)this["spine_"+e].off(Laya.Event.READY,this,this.onSkReady);L.intance.off(_.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),L.intance.off(_.ACCOUNTVO_UPDATE,this,this.updateExp),L.intance.off(_.ROLE_INFO_CHANGE,this,this.updateTopInfo),L.intance.off(_.UPDATE_ASSETS,this,this.updateAssets),L.intance.off(Pt.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),L.intance.off("CHANG_NAME",this,this.changeName),L.intance.off("open_buy",this,this.openBuyDialog),L.intance.off("msg_173",this,this.onFirstRecharge),L.intance.off(_.EVENT_REMOVE_ACTIVITY,this,this.onBindStateChange),L.intance.off(_.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),L.intance.off(_.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}onEnterMatchRoom(e){e?(Laya.timer.once(2e3,this,this.startBtnAni),Laya.timer.once(3e3,this,this.getRoomByType)):(Laya.timer.clear(this,this.startBtnAni),Laya.timer.clear(this,this.getRoomByType))}};sr.M_B_FIRST_Open=!0,sr=m([Ex("pxhiJrX5SkKKvyFr8uIlNA")],sr);var ya=class{constructor(){}};ya.GREEN="#2ac84b",ya.YELLOW="#e8c833",ya.RED="#e04343";var Wm=class extends Laya.Box{};var{regClass:Sx}=Laya,Km=class extends Wm{constructor(){super();this.isAddEvent=!1}onEnable(){L.intance.on(_.EVENT_Game_Delay,this,this.onGameDelay)}onGameDelay(e){var i=F.intance.getGeneralValueById(6),r=i[0],n=i[1];this.tf_delay.text=e+"ms",e>n?(this.img_delay.skin="res/common/comm/img_com_xinhao3.png",this.tf_delay.color=ya.RED):e>r?(this.img_delay.skin="res/common/comm/img_com_xinhao2.png",this.tf_delay.color=ya.YELLOW):(this.img_delay.skin="res/common/comm/img_com_xinhao1.png",this.tf_delay.color=ya.GREEN)}onDisable(){L.intance.off(_.EVENT_Game_Delay,this,this.onGameDelay)}};Km=m([Sx("AhgzWGWoRFetvSMsEOSkSg")],Km);var Ym=class extends Laya.Box{};var{regClass:Tx}=Laya,$m=class extends Ym{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.playerDto=e,this.playerDto&&(this.addEvent(),this.setCurrentOutPut())}set headSkin(e){this.img_head.skin=M.instance.getPlayerIcon(e)}async setCurrentOutPut(){if(!this.playerDto)return;let e=this.playerDto.icon;this.img_head.skin=M.instance.getPlayerIcon(e)}toDetail(){!this.playerDto||!this.playerDto.needTip||V.intance.openModule(h.RoleInfoDialog)}};$m=m([Tx("OPT5t2CoSmuYp2zUJWwUWA")],$m);var Xm=class extends Laya.Box{};var{regClass:Cx}=Laya,Qm=class extends Xm{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.isAddEvent=!0)}async onJoin(){if(this.roomDto.requirePass)V.intance.openModule(h.InputPwdDialog,[this.roomDto]);else{let s=!1;var e=F.intance.m_dicArenaDic.get(this.roomDto.arenaId),i=e.item[0];let l=S.instance.playerDto;if(l.fightHeroPk){let u=S.instance.m_heroData.heroVoDic.get(l.fightHeroPk);if(u){if(s=u.state==2,s){var r=await q.requestPost("wxgame/lease/heroInfo",{heroPk:l.fightHeroPk});if(r.info.remainTicketCount<=0){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1175),N.YES,null);return}if(i!==r.info.ticketId){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1178),N.YES,null);return}}if(u.state==1){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1176),N.YES,null);return}}else{_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1059),N.YES,null);return}}else{_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1059),N.YES,null);return}if(e.item&&e.item.length>1){var i=e.item[0],n=e.item[1],o=S.instance.m_packageData.getCountById(i);if(o<n&&!s){Le.titickNotEnought(i);return}}let c=await q.requestPost("wxgame/room/join",{roomId:this.roomDto.roomId});Q.instance.roomDto=c.roomDto,c.roomDto?V.intance.openModule(h.EnterRoomView):ie.instance.notice(f.instance.getLanguage(135))}}set dataSource(e){super.dataSource=e,this.roomDto=e,this.roomDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.roomDto.leader.icon;this.playerIcon.headSkin=e,this.tf_name.text=this.roomDto.leader.name;var i=F.intance.m_dicUnions.get(this.roomDto.leader.unionId);i?this.tf_union.text=f.instance.getLanguage(i.simpleName):this.tf_union.text="",this.tf_people.text='<font color="#25ff63">'+this.roomDto.memberCount+"</font>/"+this.roomDto.maxCount,this.tf_seconds.text=tt.format(Math.round(this.roomDto.joinCd/1e3),":",!1),this.img_coin.skin=M.instance.getMoneyIcon(this.roomDto.coinType)}};Qm=m([Cx("YoCqj_dyTb2ZIAnhkSds6Q")],Qm);var Zm=class extends Laya.Box{};var{regClass:kx}=Laya,It=class extends Zm{init(t,e,i=28){var r,n;switch(t!=0?(n=St.getRandInRound(-30,30),e.bj?r=It.TYPE_Critical:r=It.TYPE_Normal):(n=St.getRandInRound(-30,30),r=It.TYPE_Miss),this.pos(n,-180),this.alpha=1,this.scale(1,1),this.tf_damage.visible=!1,this.box_crit.visible=!1,this.img_miss.visible=!1,r){case It.TYPE_Normal:this.tf_damage.text=t+"",this.showNormalDamageEffect();break;case It.TYPE_Critical:this.fontClip_damage.value=t+"",this.showCriticalDamageEffect();break;case It.TYPE_Miss:this.showMissEffect();break;default:break}}showNormalDamageEffect(){this.tf_damage.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,this.onComplete))}showCriticalDamageEffect(){this.box_crit.visible=!0,this.scale(.2,.2),Laya.Tween.to(this,{scaleX:1.3,scaleY:1.3,alpha:1,y:this.y-70},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1,alpha:0},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}))}showMissEffect(){this.img_miss.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}onComplete(){this.removeSelf(),Laya.Pool.recover("damageNumber",this)}};It.WHITE="#FFFFFF",It.ORANGE="#FFA500",It.RED="#FF0000",It.GREEN="#119c09",It.TYPE_Normal="Normal",It.TYPE_Miss="Miss",It.TYPE_Critical="Critical",It=m([kx("nHp6WKzZRIWvyhguidEfqg")],It);var Jm=class extends Laya.Box{};var{regClass:Ax}=Laya,ed=class extends Jm{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.roomRankPlayerDto=e,this.roomRankPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.roomRankPlayerDto.id==S.instance.playerDto.pid?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.roomRankPlayerDto.rankNum<4?this.bg.skin="res/matchRank1/img_ranking_bg_"+this.roomRankPlayerDto.rankNum+".png":this.bg.skin="res/matchRank1/img_ranking_bg_4.png",this.roomRankPlayerDto.rankNum<4?(this.img_rankIcon1.skin="res/matchRank1/img_ranking_"+this.roomRankPlayerDto.rankNum+".png",this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.roomRankPlayerDto.id==S.instance.playerDto.pid?this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_me.png":this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1);let e=this.roomRankPlayerDto.icon;this.playerIcon.headSkin=e,this.playerIcon.gray=this.roomRankPlayerDto.die,this.tf_name.text=this.roomRankPlayerDto.name,this.tf_rank.text=this.roomRankPlayerDto.rankNum+"",this.tf_kill.text=this.roomRankPlayerDto.kill+"",this.tf_score.text=this.roomRankPlayerDto.score+""}};ed=m([Ax("vpTYNMB4TfGFK2gaXiPAeg")],ed);var td=class extends Laya.Dialog{};var{regClass:Dx}=Laya,id=class extends td{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_PANEL;this.m_iPositionType=R.CENTER;this.allItems=[]}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.goMatchEnd)}setOpenData(e){this.mcLanList.vScrollBarSkin="",e.forEach(r=>{if(r.id==S.instance.playerDto.pid){this.myRank=r;return}}),this.mcLanList.array=e;let i=-1;this.mcLanList.selectedIndex=i,this.showListEffect(),O.instance.myPlayer.hp>0?this.successAni.visible=!0:this.successAni.visible=!1,we.instance.sendCustumEvent(43)}showListEffect(){this.allItems=[];for(var e=this.mcLanList.array.length,i=0;i<e;i++){var r=this.mcLanList.getCell(i);r?(r.skewX=.5,r.alpha=0,this.allItems.push(r),Laya.timer.once(100+i*500,this,this.startShowItem,[i],!1)):console.log("showListEffect _item is null")}}startShowItem(e){var i=this.allItems[e];if(i==null){console.log("no list item now");return}i.scaleX=0,i.alpha=0,this.mcLanList.tweenTo(e,500),Laya.Tween.to(i,{scaleX:1,alpha:1},100,Laya.Ease.circOut,null,0,!1)}goMatchEnd(){V.intance.openModule(h.MatchEndView,this.myRank),this.close()}onDisable(){this.removeEvent()}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};id=m([Dx("NlnToPI4TTuxIDhRKLPChg")],id);var ad=class extends Laya.Dialog{};var{regClass:Mx}=Laya,rd=class extends ad{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_PANEL;this.m_iPositionType=R.CENTER}onEnable(){this.btn_next.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_buy.on(Laya.Event.CLICK,this,this.onBuy),this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.btn_help.on(Laya.Event.CLICK,this,this.onHelp),we.instance.sendCustumEvent(43)}onHelp(){Le.commTipWithYes(f.instance.getLanguage("HELP"))}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}onBuy(){be.intance.setCurrentScene(re.M_SCENE_SHOP,[3])}async onReceive(){if(this.welfareBagId>0){let e=await q.requestPost("wxgame/welfare/buy",{id:this.welfareBagId});e&&e.reward&&(V.intance.openModule(h.RewardGetDialog,e.reward),this.btn_receive.disabled=!0)}else ie.instance.notice(f.instance.getLanguage(2e3))}setOpenData(e){this.currRoomRankPlayerDto=e,e.rankNum<4?this.img_rankIcon.skin="res/matchEnd1/img_battleend_ranking_"+e.rankNum+".png":this.img_rankIcon.skin="res/matchEnd1/img_battleend_ranking_4.png",this.list_reward.vScrollBarSkin="",this.tf_rank.text=e.rankNum+"";var i=[],r=Q.instance.reward;r.forEach(p=>{var b=new Xe(p.id);b.newAddCnt=p.count,i.push(b)});var n=this.list_reward.spaceX,o=this.list_reward.itemTemplate.width,s=i.length,l=s*o+n*(s-1);this.list_reward.width=l,this.welfareBagId=F.intance.getWelfareBagId(e.rankNum);var c=e.lease==1;this.welfareBagId>0&&!c?(this.btn_receive.visible=!0,this.btn_next.visible=!0,this.btn_buy.visible=!1,this.reward_cp.visible=!0,this.list_reward.right=759):(this.btn_receive.visible=!1,this.btn_next.visible=!0,c?(this.btn_buy.visible=!1,this.btn_next.x=this.box_outside.width-this.btn_next.width>>1):this.btn_buy.visible=!0,this.reward_cp.visible=!1,this.list_reward.right=this.box_outside.width-l>>1),this.list_reward.array=i,this.list_reward.visible=!0;let u=-1;this.list_reward.selectedIndex=u}onDisable(){this.removeEvent(),Q.instance.clearData()}removeEvent(){}};rd=m([Mx("y-nP_lRrQVef9uttVJ0rDw")],rd);var nd=class extends Laya.Box{};var{regClass:Px}=Laya,od=class extends nd{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.roomPlayer=e,!this.roomPlayer){this.img_back.skin="res/matchReady/img_jjc_0.png",this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){if(this.img_back.skin="res/matchReady/img_jjc_1.png",this.tf_name.text=ct.shortHeroStr(this.roomPlayer.name),this.box_show.visible=!0,this.destroyed)return;let e=this.roomPlayer.icon;this.playerIcon.headSkin=e,this.img_sign.visible=this.roomPlayer.leader>0;var i=F.intance.m_dicUnions.get(this.roomPlayer.unionId);i?this.tf_union.text=f.instance.getLanguage(i.simpleName):this.tf_union.text=""}toDetail(){this.heroVo.id}};od=m([Px("PiGdVEY9T-K8CCfWLChS0w")],od);var ut=class ut{constructor(){}static pointEquil(t,e){return t&&e&&t.x==e.x&&t.y==e.y}static isEmpty(t){for(let e in t)return!1;return!0}static showTxtEffect(t,e){let i=parseInt(t.text),r=Math.floor((e-i)/5),n=0;Laya.timer.loop(60,null,o);let o=function(){n++,i+=r,n>=5&&(i=e,Laya.timer.clear(null,o)),t.text=i+""}}static showTxtFlash(t){let e=t.color;t.color=ut.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,i),50);let i=function(){t.color=ut.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,r),50)},r=function(){t.color=ut.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,n),50)},n=function(){t.color=ut.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,o),50)},o=function(){t.color=ut.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,s),50)},s=function(){t.color=ut.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,l),50)},l=function(){t.color=e}}static getProKey(t){return ut.PRO_DIC[t]?ut.PRO_DIC[t]:t}static getIconName(t){return ut.proList[t]}static clonePoint(t){return new Laya.Point(t.x,t.y)}static copyObj(t){let e={};for(let i in t)e[i]=t[i];return e}static mergeObj(t,e){for(let i in e)t[i]?t[i]=parseFloat(t[i])+parseFloat(e[i]):t[i]=e[i];return t}static checkHit(t){return t.visible&&t.mouseX>0&&t.mouseY>0&&t.mouseX<=t.width&&t.mouseY<=t.height}static separateObj(t,e){if(e)for(let i in e)t[i]&&(t[i]=parseFloat(t[i])-parseFloat(e[i]));return t}static toFixed(t,e=1){if((t+"").indexOf(".")!=-1){let i=parseFloat(t).toFixed(e);return e==1&&i.charAt(i.length-1)=="0"&&(i=parseInt(i)+""),i}return t+""}static formatResWith(t){return t>=1e12?Math.floor(t/1e12)+ut.RES_W[3]:t>=1e9?Math.floor(t/1e9)+ut.RES_W[2]:t>=1e6?Math.floor(t/1e6)+ut.RES_W[1]:t>=1e4?Math.floor(t/1e3)+ut.RES_W[0]:t+""}static formatNumWithSign(t,e=","){t=Math.floor(t);let i=t+"",r=1,n=[];for(let o=i.length-1;o>=0;o--)n.push(i.charAt(o)),r>0&&r%3==0&&n.push(e),r++;return n.reverse(),n[0]==e&&n.shift(),n.join("")}static autoRecyle(t,e=!1){t.on(Laya.Event.COMPLETE,null,i,[t]),t.isPlaying||t.play(1,!1);let i=function(r){r.off(Laya.Event.COMPLETE,null,i),r.stop(),r.removeSelf(),e&&Laya.Pool.recover("Animation",r)}}static createEllipse(t,e,i,r,n,o=1,s="#ffffff"){let l=[],c=r>n?o/r:o/n;for(let u=0;u<2*Math.PI;u+=c)l.push(e+r*Math.cos(u)-r/2,i+n*Math.sin(u));return t&&t.drawPoly(l.shift(),l.shift(),l,s),l}};ut.blackFilter=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.78,0]),ut.blackFilter2=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.5,0]),ut.qualityColors=["#78cefd","#78cefd","#78cefd","#d5a8ff","#fdd378","#ffa8a8","#ffa8a8","#ffa8a8"],ut.COLORS=["#69ff4c","#FFFFFF"],ut.PRO_DIC={HP:"hp",ATK:"attack",DEF:"defense",SPEED:"speed",RES:"resilience",CDMG:"critDamage",CDMGR:"critDamReduct"},ut.proList={hp:"HP",attack:"ATK",defense:"DEF",speed:"SPEED",hit:"hit",dodge:"dodge",crit:"crit",critDamage:"CDMG",resilience:"RES",critDamReduct:"CDMGR"},ut.RES_W=["K","M","B","T"];var ga=ut;var sd=class extends Laya.Sprite{};var{regClass:Bx}=Laya,ld=class extends sd{constructor(){super();this.isAddEvent=!1;this.isMe=!1;this.inGround=!1;this.moveSpeed=6;this._speed=6;this.biasSpeed=0;this.lastDirectStr="left";this.directStr="left";this._roleDirection=-1;this.inControl=!1;this.isStop=!1;this.isLockAni=!1;this.aniChange=!1;this.displacementType=0;this.timeStamp=0;this.currArea=0;this.flashCount=0;this.lastX=-1;this.lastY=-1;this.lastRoleDirection1=-1;this.lastSpeed1=-1;this.lastArea=-1}get speed(){return this._speed}set speed(e){this._speed=e,this.biasSpeed=Math.round(this.speed*Math.sin(45*Math.PI/180)),console.log("Role speed2: ",this.speed,this.biasSpeed,this.roomPlayerDto.id)}get roleDirection(){return this._roleDirection}set roleDirection(e){this._roleDirection=e,e!=-4&&(e>270||e<90?this.directStr="right":e>90&&e<270&&(this.directStr="left"),this.lastDirectStr!=this.directStr&&(this.heroBox.scaleX=this.directStr=="left"?1:-1,this.lastDirectStr=this.directStr))}set myRoleDirection(e){if(this.roleDirection!=e){this.roleDirection=e;let i=28+Math.sin(e*(Math.PI/180))*(28/4),r=24+Math.sin(e*(Math.PI/180))*(14/2),n=this.img_d.width/2+Math.cos(e*(Math.PI/180))*(this.img_d.width/2),o=this.img_d.height/2+ +Math.sin(e*(Math.PI/180))*(this.img_d.height/2);this.img_arrow.pos(n,o),this.img_gj.rotation=e+90,this.img_arrow.rotation=e,this.img_arrow.width=i,this.img_arrow.height=r}}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(this.roomPlayerDto=e,!!this.roomPlayerDto){if(this.pos(this.roomPlayerDto.x,this.roomPlayerDto.y),this.addEvent(),this.speed=this.roomPlayerDto.speed,this.currArea=this.roomPlayerDto.area,console.log("MatchHeroSpr speed: "+this.speed),this.roomPlayerDto.hp<=0){this._isDead=!0,this.setDead();return}this.heroVo=new Wt,this.heroVo.id=this.roomPlayerDto.heroId,this.heroVo.color=this.roomPlayerDto.heroColor,this.moveSpeed=this.heroVo.heroItem.mov/30,this.setCurrentOutPut(),this.updataBlood(),this.addDiquanAndBaoqi()}}setDead(){console.log("MatchHeroSpr setDead: "+this.isMe),this._isRealDead=!0,this.alpha=.5,this.img_deadImg.visible=!0;var e=this.img_deadImg.y;this.tf_name.visible=!1,this.box_blood.visible=!1,this.heroSk.visible=!1,this.img_deadImg.y=0,this.img_deadImg.scale(0,0),this.getComponent(Laya.RigidBody).mask=1;var i=this;Laya.Tween.to(this.img_deadImg,{y:e,scaleX:1,scaleY:1},400,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){i.isMe&&L.intance.event(_.EVENT_GameScene_Gray)}))}updataBlood(){this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}addDiquanAndBaoqi(){if(console.log("addDiquanAndBaoqi"),!this.destroyed){var e=this.heroVo.heroItem.level,i=this.heroVo.heroItem.level;if(!this.baoqiSpineSk){if(i<4)return;this.baoqiSpineSk=new Laya.SpineSkeleton,this.spineNodeBack.addChild(this.baoqiSpineSk),this.baoqiSpineSk.animationName="animation";var r=O.instance["baoqiEffect"+i];this.baoqiSpineSk.templet=r}}}setCurrentOutPut(){this.heroSk.dataSource=this.heroVo,this.tf_name.color=ga.qualityColors[this.heroVo.heroItem.quality-1],this.tf_name.text=ct.shortHeroStr(this.roomPlayerDto.name),this.img_country.skin=M.instance.getCountryIcon(this.roomPlayerDto.country+""),S.instance.playerDto.pid==this.roomPlayerDto.id?this.myRoleDirection=this.roomPlayerDto.dire:this.roleDirection=this.roomPlayerDto.dire}pos(e,i,r){if(super.pos(e,i,r),this.roomPlayerDto&&this.roomPlayerDto.id){var n=O.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);if(n){var o=Q.instance.currArenaItem.mapid;o==1002&&(e-=160,i-=160);var s=e*216/3040,l=i*216/3040;n.pos(s,l,r)}}return this}set visible(e){if(super.visible=e,this.roomPlayerDto&&this.roomPlayerDto.id){var i=O.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);i&&(i.visible=e)}}set alpha(e){if(super.alpha=e,this.roomPlayerDto&&this.roomPlayerDto.id){var i=O.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);i&&(i.alpha=e)}}onAwake(){}backAni(){}idle(){console.log(`${this.roomPlayerDto.id} 播放 待机 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_daiji,!0,!1)}walk(){console.log(`${this.roomPlayerDto.id} 播放 走动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_xingzou,!0,!1)}run(){console.log(`${this.roomPlayerDto.id} 播放 跑动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_shanbi,!0,!1)}playAttackAnimation(e,i,r,n){if(!this._isDead){var o=F.intance.m_dicSkills.get(e);if(console.log(`${this.roomPlayerDto.id} 攻击 , 播放 ${e} 动画`),o.type==1){if(i&&O.instance.onSendAnimation(e,Ze.TYPE_GONGJI),this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Ze.ANI_gongji+s,!1)}if(i){var l=O.instance.getAttackTarget(o);if(l&&l.length>0){var c=l[0];c.roomPlayerDto.hp>0&&Laya.timer.frameOnce(1,this,this.onRealAttack,[o,c.roomPlayerDto.id])}}Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,n(),this.aniChange=!0}),O.instance.playSound(1)}else if(o.type==2){if(i&&O.instance.onSendAnimation(e,Ze.TYPE_TI),this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Ze.ANI_ti+s,!1)}i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(30,this,()=>{this.isStop=!1,n(),this.aniChange=!0}),O.instance.playSound(2)}else if(o.type==6)i&&O.instance.onSendAnimation(e,Ze.TYPE_DAZHAO),this.isStop=!0,this.heroSk.isReady&&(console.log("EnumHero.ANI_dazhao: "+Ze.ANI_dazhao),this.heroSk.sk.play(Ze.ANI_dazhao,!1)),i&&Laya.timer.frameOnce(30,this,this.onRealAttack,[o]),Laya.timer.frameOnce(70,this,()=>{this.isStop=!1,n(),this.aniChange=!0}),O.instance.playSound(2);else if(o.type==5){var u=[];if(this.displacementType=o.displacementType,i){var p=o.displacement>0?o.displacement:50;u=St.rollCharacterByDir(this.x,this.y,this.roleDirection,p),O.instance.onSendAnimation(e,Ze.TYPE_FEI,-1,u[0],u[1])}else u[0]=r.get("newX"),u[1]=r.get("newY");if(this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Ze.ANI_ti+s,!1)}if(this.heroVo.heroItem.race!=4){var b=O.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=b,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(5,this,this.onRoll,[u]),Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,this.displacementType=0,n(),this.aniChange=!0}),O.instance.playSound(3)}else if(o.type==3){var u=[];if(i){var p=o.displacement>0?o.displacement:350;u=St.rollCharacterByDir(this.x,this.y,this.roleDirection,p),O.instance.onSendAnimation(e,Ze.TYPE_HUA,-1,u[0],u[1])}else u[0]=r.get("newX"),u[1]=r.get("newY");if(this.getComponent(Laya.BoxCollider).isSensor=!0,this.isStop=!0,this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_hua,!1),this.heroVo.heroItem.race!=4){var b=O.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=b,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}Laya.timer.frameOnce(5,this,this.onRoll,[u]),Laya.timer.frameOnce(20,this,()=>{this.getComponent(Laya.BoxCollider).isSensor=!1,this.isStop=!1,n(),this.aniChange=!0}),O.instance.playSound(3)}else if(o.type==4){i&&(this.isLockAni=!0,O.instance.onSendAnimation(e,Ze.TYPE_DANG)),this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_dang,!1),this.dunpaiSk||(this.dunpaiSk=O.instance.dunpaiTemplet.buildArmature(0),this.dunpaiSk.x=-45,this.skNode.addChild(this.dunpaiSk)),this.dunpaiSk.play(0,!0);var x=2e3,v=o.buff;if(v.length>2){var y=v[2],C=F.intance.m_dicBuffs.get(y);x=parseInt(C.time+"")}Laya.timer.once(x,this,()=>{this.isLockAni=!1,this.dunpaiSk&&(this.dunpaiSk.stop(),this.dunpaiSk.visible=!1),n(),this.aniChange=!0}),O.instance.playSound(2)}}}onRoll(e){this.inGround||Laya.Tween.to(this,{x:e[0],y:e[1]},330)}onHuaComplate(){this.huaSpineSk.stop(),this.huaSpineSk.visible=!1}onRealAttack(e,i=-1){if(console.log("onRealAttack",i),i>0)O.instance.onSendAttack(i,1,e.id);else if(e.type==6){var r=O.instance.getAttackTarget(e);r&&r.length>0&&r.forEach(o=>{o&&o.roomPlayerDto.hp>0&&O.instance.onSendAttack(o.roomPlayerDto.id,1,e.id)})}else{var r=O.instance.getAttackTarget(e);if(r&&r.length>0){var n=r[0];n.roomPlayerDto.hp>0&&O.instance.onSendAttack(n.roomPlayerDto.id,1,e.id)}}}playBeijiAnimation(e){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 被击 动画`),this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_beiji,!1),Laya.timer.once(1e3,this,()=>{e()}))}playChuShengAnimation(e){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 出生 动画`),this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_ruchang,!1),Laya.timer.once(1e3,this,()=>{e()}))}attack(e=0,i=!0,r=null){if(console.log(`${this.roomPlayerDto.id} 攻击 s`),this._isAttacking||this._isDead){console.log(`${this.roomPlayerDto.id} 没有靠近目标或正在攻击中或技能冷却中或已死亡，无法攻击`);return}this._isAttacking=!0,this.playAttackAnimation(e,i,r,()=>{this._isAttacking=!1})}takeDamage(e,i){var r=e.skill,n=e.attackValue,o=e.defHp;console.log(`${this.roomPlayerDto.id} 受到 ${n} 伤害s`),!this._isDead&&(this.roomPlayerDto.hp=o,console.log(`${this.roomPlayerDto.id} 受到 ${n} 伤害`),this.updateHealthBar(i),this.showDamageLabel(r,n,e),this._isAttacking&&(console.log(`${this.roomPlayerDto.id} 正在攻击中，受到攻击中断攻击 暂时没有中断攻击`),Laya.timer.clear(this,this.onRealAttack),this._isAttacking=!1),this._isTakingDamage=!0,this.isLockAni=!0,this.beijiSk||(this.beijiSk=O.instance.beijiTemplet.buildArmature(0),this.skNode.addChild(this.beijiSk)),this.beijiSk.play(0,!1),this.playBeijiAnimation(()=>{this.beijiSk&&(this.beijiSk.stop(),this.beijiSk.visible=!1),this._isTakingDamage=!1,this.isLockAni=!1,this.backAni()}))}die(e){if(console.log(`${this.roomPlayerDto.id} 死亡s`),!this._isDead){console.log(`${this.roomPlayerDto.id} 死亡`);var i=St.judgePosition(e.x-this.x,e.y-this.y);this.roleDirection=i,this._isDead=!0,this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_siwang,!1),Laya.timer.once(2e3,this,this.setDead)}}applySkillEffect(e){console.log(`${this.roomPlayerDto.id} 受到技能效果: ${e}`)}updateHealthBar(e){this.roomPlayerDto.hp<=0&&(this.roomPlayerDto.hp=0,this.die(e)),this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}showDamageLabel(e,i,r){if(i.length>1)for(var n=F.intance.m_dicSkills.get(e),o=n.section,s=o,l=0;l<i.length;l++){var c=i[l];this.showDamageLabelDetailDelay(c,s[l][1],r)}else i.length==1?this.showDamageLabelDetailDelay(i[0],100,r):this.showDamageLabelDetailDelay(0,100,r);var u=this;if(r.allAtkValue!=0){var p=200;this.originalBlendMode=this.img_hp_bg.blendMode,this.flashCount=0,Laya.timer.loop(p,this,this.flashBlood)}}flashBlood(){var e=2;this.flashCount<e?this.img_hp_bg.blendMode===this.originalBlendMode?this.img_hp_bg.blendMode="lighter":(this.img_hp_bg.blendMode=this.originalBlendMode,this.flashCount++):(this.img_hp_bg.blendMode=this.originalBlendMode,Laya.timer.clear(this,this.flashBlood))}showDamageLabelDetailDelay(e,i,r){Laya.timer.once(i,this,this.showDamageLabelDetail,[e,r],!1)}showDamageLabelDetail(e,i){var r=Laya.Pool.getItemByCreateFun("damageNumber",O.instance.damageNumPrefab.create,O.instance.damageNumPrefab);r.init(e,i),this.addChild(r)}onSendMoveData(){if(!this._isDead){var e=this.speed,i=this.roleDirection,r=this.x,n=this.y;if(Math.abs(r-this.lastX)>2||Math.abs(n-this.lastY)>2||this.lastRoleDirection1!=i||this.lastSpeed1!=e||this.lastArea!=this.currArea){this.pos(r,n),this.lastX=r,this.lastY=n,this.lastRoleDirection1=i,this.lastSpeed1=e,this.lastArea=this.currArea;var o=S.instance.m_serverTime;this.timeStamp=o,O.instance.onSendMove(o,this.roomPlayerDto.id,e,i,r,n,this.currArea)}}}beiTui(e){var i=this.roomPlayerDto.id,r=this.x,n=this.y;if(Math.abs(r-this.lastX)>2||Math.abs(n-this.lastY)>2){this.lastX=r,this.lastY=n;var o=S.instance.m_serverTime;this.timeStamp=o,O.instance.onSendTargetMove(o,e,i,r,n)}}onPushMoveData(e,i,r,n,o,s){if(this.roleDirection=r,this.speed!=i&&(this.speed=i,i==0?this.idle():this.walk()),this.currArea!=s&&(this.currArea=s),e<=this.timeStamp){console.log("位置数据忽略："+e+" < "+this.timeStamp);return}(Math.abs(n-this.lastX)>1||Math.abs(o-this.lastY)>1)&&(this.pos(n,o),this.lastX=n,this.lastY=o)}onPushTargetMoveData(e,i,r){if(e<=this.timeStamp){console.log("推人数据忽略："+e+" < "+this.timeStamp);return}(Math.abs(i-this.lastX)>2||Math.abs(r-this.lastY)>2)&&(this.pos(i,r),this.lastX=i,this.lastY=r)}sendToServer(e){}initBirth(e){e?this.createBirthSpine():this.onPlayBirthEnd()}createBirthSpine(){this.heroSk.visible=!1,this.tf_name.visible=!1,this.box_blood.visible=!1,this.chushengBackSpineSk||(this.chushengBackSpineSk=new Laya.SpineSkeleton,this.spineNodeBack.addChild(this.chushengBackSpineSk)),this.chushengFrontSpineSk||(this.chushengFrontSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.chushengFrontSpineSk)),this.chushengBackSpineSk.on(Laya.Event.READY,this,this.onBirthReady);var e=O.instance.ruchangEffects[this.getRandomAnimationType()];this.destroyed||(this.chushengBackSpineSk.animationName="animation2",this.chushengBackSpineSk.templet=e,this.chushengFrontSpineSk.animationName="animation1",this.chushengFrontSpineSk.templet=e)}getRandomAnimationType(){return Math.floor(Math.random()*3)}onBirthReady(){Laya.timer.once(500,this,this.onPlayBirth1)}onPlayBirth1(){this.isLockAni=!0,this.heroSk.visible=!0,this.playChuShengAnimation(()=>{this.isLockAni=!1,this.aniChange=!0}),this.chushengBackSpineSk.visible=!0,this.chushengBackSpineSk.play("animation2",!1),this.chushengFrontSpineSk.visible=!0,this.chushengFrontSpineSk.play("animation1",!1),Laya.timer.once(1300,this,this.onPlayBirthEnd)}onPlayBirthEnd(){this.chushengBackSpineSk&&(this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),this.chushengBackSpineSk.destroy(),this.chushengBackSpineSk.removeSelf()),this.chushengFrontSpineSk&&(this.chushengFrontSpineSk.destroy(),this.chushengFrontSpineSk.removeSelf()),this.box_d.visible=!0,this.tf_name.visible=!0,this.box_blood.visible=!0}onDisable(){this.chushengBackSpineSk&&this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};ld=m([Bx("JIaWsVNzTK2dJIUcev60tQ")],ld);var ud=class extends Laya.Box{};var{regClass:Rx}=Laya,pd=class extends ud{init(){var t=Q.instance.currArenaItem.coinType;this.img_bing.skin="gameIcon/map/1001/img_bing_"+t+".png"}set dataSource(t){super.dataSource=t}};pd=m([Rx("W3qDvbUmSa2SFKJ5iEmjsg")],pd);var md=class extends Laya.Box{};var{regClass:Nx}=Laya,dd=class extends md{init(){var t=Q.instance.currArenaItem.coinType;this.img_bing.skin=M.instance.getItemIcon(t),O.instance.allOrders||(O.instance.allOrders=[]),O.instance.allOrders.push(this.img_mtl)}set dataSource(t){super.dataSource=t}};dd=m([Nx("UmH7VSkYTd6D8QA2Eu2OYw")],dd);var hd=class extends Laya.Box{};var{regClass:Ox}=Laya,fd=class extends hd{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){this.roomPlayerDto=e,this.roomPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}setCurrentOutPut(){this.tf_rank.text=this.roomPlayerDto.rankNum+"";let e=this.roomPlayerDto.icon;this.playerIcon.headSkin=e,this.tf_name.text=f.instance.getLanguage(this.roomPlayerDto.name),this.tf_kill.text=this.roomPlayerDto.kill+"",this.roomPlayerDto.id==O.instance.myPlayer.id?(this.img_bg.skin="res/match1/img_ph2.png",this.tf_rank.color="#000000",this.tf_name.color="#ffe64b",this.img_kill.filters=[Le.YELLOW],this.tf_kill.color="#ffe64b",this.box_item.x=6):(this.img_bg.skin="res/match1/img_ph.png",this.tf_rank.color="#ffffff",this.tf_name.color="#ffffff",this.img_kill.filters=null,this.tf_kill.color="#ffffff",this.box_item.x=15)}};fd=m([Ox("XTVFXeI_R768e0Elv_ePAA")],fd);var bd=class extends Laya.Scene{};var{regClass:Hx}=Laya,yd=class extends bd{constructor(){super(...arguments);this.type=1}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){this.type=e}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}onEnable(){console.log("MatchReadyRT onEnable"),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_random.on(Laya.Event.CLICK,this,()=>{this.generateName()}),this.btn_enter.on(Laya.Event.CLICK,this,()=>{var e=this.input_username.text;if(console.log("phyBtn"),e==""){alert("用户名不能为空");return}$e.instance.openId=e,$e.instance.initSocket()})}generateRandomName(e){let i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",r="";for(let n=0;n<e;n++){let o=Math.floor(Math.random()*i.length);r+=i.charAt(o)}return r}generateName(){this.input_username.text=this.generateRandomName(8)}onDestroy(){}};yd=m([Hx("mOlMVGD3TRCKNoddhyUGLw")],yd);var gd=class extends Laya.Dialog{};var{regClass:Ux}=Laya,vd=class extends gd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_PANEL;this.m_iPositionType=R.CENTER}onEnable(){}onOpened(e){this.updateBattleCD()}updateBattleCD(){var e=Q.instance.matchDto.startTime-Q.instance.matchDto.nowTime;Q.instance.startCoolDownTime=Math.round(e/1e3),Q.instance.startCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):(Laya.timer.clear(this,this.onSetCoolTime),this.close())}onSetCoolTime(){Q.instance.startCoolDownTime>=0?(this.fontClip_reduceTime.value=Q.instance.startCoolDownTime+"",this.scaleEffect(),Q.instance.startCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),this.onMatchStartEnd())}scaleEffect(){var e=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(e.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}onMatchStartEnd(){Laya.timer.once(5e3,this,this.close)}onDisable(){this.removeEvent(),Q.instance.stopAll=!1}removeEvent(){Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};vd=m([Ux("xpPoFvX_SqiYMO5AaOwGyA")],vd);var Ld=class extends Laya.Box{};var{regClass:Vx}=Laya,_d=class extends Ld{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.itemVo&&(this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=this.itemVo)}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===xt.TYPE_Equipment?V.intance.openModule(h.EquipDetailDialog,this.itemVo):V.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};_d=m([Vx("WXpxCvqlQ2mKdcJCYlqOeg")],_d);var wd=class extends Laya.Scene{};var{regClass:Gx}=Laya,xd=class extends wd{constructor(){super(...arguments);this.liveNum=0}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP,O.instance.init()}onOpened(e){var i=Q.instance.matchDto.startTime-Q.instance.matchDto.nowTime;i>0&&V.intance.openModule(h.MatchReadyView);var r=Q.instance.matchDto.arenaId,n=F.intance.m_dicArenaDic.get(r);Q.instance.currArenaItem=n;var o=Q.instance.currArenaItem.mapid,s=Laya.loader.getRes("gameIcon/map/map_"+o+".lh");this.img_smallMap.skin="res/match1/img_map_"+o+".png";var l=Laya.Pool.getItemByCreateFun("MatchMap1001",s.create,s);l.init(),O.instance.gameMap=l,O.instance.box_players=l.box_players,this.matchBox.removeChildren(),this.matchBox.addChild(l);var c=S.instance.playerDto;this.tf_roleName.text=c.name;let u=c.icon;this.playerIcon.headSkin=u,O.instance.initMatch(this,this.onInitEnd),we.instance.sendCustumEvent(42)}onInitEnd(e){e.updateSkill(),e.updateKill(),e.updateBattleCD(),Laya.timer.frameLoop(10,e,e.updateCharactersOrder)}onRestoreData(){O.instance.updateMatch(this,this.onInitEnd)}updateSkill(){var e=O.instance.myPlayer,i=F.intance.m_dicHeros.get(e.heroId);console.log("updateSkill"),console.log(i.skillIds);for(var r=i.skillIds.length,n=0;n<r;n++){var o=i.skillIds[n],s=F.intance.m_dicSkills.get(o),l=this["matchSkill"+(n+1)];l.keyNum=n+1,l.dataSource=s;var c=e.skillCd.get(o);c&&l.updateSkillCooldown(c),l.updateGlobalCooldown(e.commonCd),l.visible=!0}}updateKill(){O.instance.myPlayer&&(this.tf_kill.text=O.instance.myPlayer.kill+""),this.list_rank.array=this.getSortPlayer(O.instance.matchHeroDic.values),this.tf_remainer.text=this.liveNum+"",this.tf_total.text="/ "+O.instance.matchHeroDic.values.length}getSortPlayer(e){var i=e.slice(),r=i.sort((o,s)=>s.score-o.score);this.liveNum=0;var n=1;return r.forEach(o=>{o.rankNum=n,n++,o.hp>0&&this.liveNum++}),r}updateBattleCD(){Q.instance.matchCoolDownTime=Math.round(Q.instance.matchDto.remainderCd/1e3),Q.instance.matchCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):Laya.timer.clear(this,this.onSetCoolTime)}onSetCoolTime(){Q.instance.matchCoolDownTime>=0?(this.fontClip_reduceTime.value=tt.format(Q.instance.matchCoolDownTime,":",!1),Q.instance.matchCoolDownTime>90?this.fontClip_reduceTime.skin="res/match1/fontClip_1.png":Q.instance.matchCoolDownTime>10?this.fontClip_reduceTime.skin="res/match1/fontClip_2.png":(this.fontClip_reduceTime.skin="res/match1/fontClip_3.png",this.scaleEffect()),Q.instance.stopAll||Q.instance.matchCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.once(1e4,this,this.checkMatchRankData))}checkMatchRankData(){Q.instance.checkMatchRankData()}scaleEffect(){var e=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(e.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}updateCharactersOrder(){O.instance.allOrders.sort((e,i)=>e.y-i.y);for(let e=0;e<O.instance.allOrders.length;e++)O.instance.allOrders[e].zOrder=e}onFirstBloodPush(e){var i=e.pid,r=O.instance.matchHeroDic.get(i);let n=r.icon;this.img_firstBlood_head.skin=M.instance.getPlayerIcon(n),this.img_firstBlood.visible=!0,this.img_firstBlood.alpha=0,this.img_firstBlood.y=-200,Laya.Tween.to(this.img_firstBlood,{y:92,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood1))}onFirstBlood1(){this.zi_firstBlood.scale(1,1),Laya.Tween.to(this.zi_firstBlood,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood2))}onFirstBlood2(){Laya.Tween.to(this.zi_firstBlood,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood3))}onFirstBlood3(){Laya.Tween.to(this.img_firstBlood,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood4),1500)}onFirstBlood4(){this.img_firstBlood.visible=!1}onMutiKillPush(e){this.fontClip_kill.value=e.kill+"";var i=!1;e.kill>=3?(i=!0,this.img_mutiKill.skin="res/match1/img_kill_3s.png"):this.img_mutiKill.skin="res/match1/img_kill_2s.png";var r=e.pid,n=O.instance.matchHeroDic.get(r);let o=n.icon;this.img_mutiKill_head.skin=M.instance.getPlayerIcon(o),this.img_mutiKill.visible=!0,this.img_mutiKill.alpha=0,this.img_mutiKill.y=-200,Laya.Tween.to(this.img_mutiKill,{y:175,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill1,[i]))}onMutiKill1(e){this.zi_mutiKill.scale(1,1),e?Laya.Tween.to(this.zi_mutiKill,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill2)):this.onMutiKill3(2e3)}onMutiKill2(){Laya.Tween.to(this.zi_mutiKill,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill3,[1500]))}onMutiKill3(e){Laya.Tween.to(this.img_mutiKill,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill4),e)}onMutiKill4(){this.img_mutiKill.visible=!1}onGameSceneGray(){this.matchBox.gray=!0}onEnable(){console.log("MatchScene onEnable"),L.intance.on(_.UPDATE_KILL_NUM,this,this.updateKill),L.intance.on(_.EVENT_RESTORE_DATA,this,this.onRestoreData),L.intance.on(_.EVENT_FirstBlood,this,this.onFirstBloodPush),L.intance.on(_.EVENT_MutiKill,this,this.onMutiKillPush),L.intance.on(_.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.on(Laya.Event.FOCUS,this,this.onWindowFocus)}onWindowFocus(){O.instance.sendRestoreData()}onDisable(){L.intance.off(_.UPDATE_KILL_NUM,this,this.updateKill),L.intance.off(_.EVENT_RESTORE_DATA,this,this.onRestoreData),L.intance.off(_.EVENT_FirstBlood,this,this.onFirstBloodPush),L.intance.off(_.EVENT_MutiKill,this,this.onMutiKillPush),L.intance.off(_.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.off(Laya.Event.FOCUS,this,this.onWindowFocus),Laya.timer.clearAll(this)}};xd=m([Gx("sX0uLhOQSmm8b-_sHNqe5w")],xd);var{regClass:zx,property:xie}=Laya,Zs=class extends Laya.Script{constructor(){super()}onAwake(){}onStart(){O.instance.playMusic()}onLateUpdate(){O.instance.moveGameWindow()}};Zs=m([zx("Ply19emtSrqrBk7nHXToAQ")],Zs);var Id=class extends Laya.Box{};var{regClass:Fx}=Laya,Ed=class extends Id{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.txt_num.text="",this.img_icon.skin=M.instance.getMatchSkillIcon(this.skillItem.icon))}};Ed=m([Fx("iwuFUCOEQRyOjxpy6IkQ2Q")],Ed);var Sd=class extends Laya.Button{};var{regClass:jx}=Laya,Td=class extends Sd{constructor(){super();this.isAddEvent=!1;this.isCanClick=!0;this.skillCooldown=5e3;this.thisGlobalCooldown=1e4;this.globalCooldown=1e4;this.remainingSkillCooldown=0;this.remainingGlobalCooldown=0}onEnable(){this.addEvent()}addEvent(){this.isAddEvent||(L.intance.on(_.EVENT_CLICK_NUM,this,this.onNumberClick),L.intance.on(_.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.onSkillButtonClick),this.on(Laya.Event.MOUSE_UP,this,this.onSkillButtonUp))}onNumberClick(e){e==this.keyNum&&this.onSkillButtonClick(null)}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.isBig=this.skillItem.icon=="1001",this.skillIconItem.dataSource=this.skillItem,this.skillCooldown=this.skillItem.cd,this.thisGlobalCooldown=this.skillItem.commCd,Laya.timer.frameLoop(1,this,this.updateCooldown))}onMouseClick(e){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=0;O.instance.playSound(1),Laya.timer.once(1e3,this,()=>{this.isCanClick=!0})}}onSkillButtonUp(e){e&&e.stopPropagation(),or.clearClickFilter(this)}onSkillButtonClick(e){e&&e.stopPropagation(),this.remainingSkillCooldown<=0&&this.remainingGlobalCooldown<=0?(console.log("技能释放！"),Laya.Tween.to(this,{scaleX:.8,scaleY:.8},100,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},100,Laya.Ease.linearNone)})),O.instance.myHeroSpr.attack(this.skillItem.id),this.updateSkillCooldown(this.skillCooldown),L.intance.event(_.EVENT_UPDATE_GLOBAL_COOL,[this.thisGlobalCooldown])):console.log("技能或全局冷却还在进行中，无法释放。")}updateSkillCooldown(e){this.remainingSkillCooldown=e}updateGlobalCooldown(e){this.globalCooldown=e,this.remainingGlobalCooldown=e}updateCooldown(){if(this.remainingSkillCooldown>0){this.remainingSkillCooldown-=Laya.timer.delta;let e=this.remainingSkillCooldown/1e3;this.txt_time.text=e.toFixed(1),this.updateCooldownMask(this.skillCooldownMask,this.remainingSkillCooldown/this.skillCooldown,"#000000"),this.img_djs.visible=!0,this.txt_time.visible=!0}else this.img_djs.visible=!1,this.txt_time.visible=!1;this.remainingGlobalCooldown>0?(this.remainingGlobalCooldown-=Laya.timer.delta,this.updateCooldownMask(this.globalCooldownMask,this.remainingGlobalCooldown/this.globalCooldown,"#00000036"),this.globalCooldownMask.visible=!0):this.globalCooldownMask.visible=!1,this.skillIconItem.gray=this.remainingSkillCooldown>0||this.remainingGlobalCooldown>0}updateCooldownMask(e,i,r){let n=this.width/2,o=this.width/2,s=this.height/2;e.graphics.clear(),e.graphics.drawPie(o,s,n,-90+360*(1-i),270,r)}onDisable(){L.intance.off(_.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),L.intance.offAllCaller(this),Laya.timer.clearAll(this)}};Td=m([jx("x6t-z1VuR52yXWju0qxGBg")],Td);var Cd=class extends Laya.Dialog{};var{regClass:qx}=Laya,kd=class extends Cd{constructor(){super();this.canClose=!0}onEnable(){this.btn_refresh.on(Laya.Event.CLICK,this,this.onRefresh),this.alertDesc.on(Laya.Event.LINK,this,this.onLink)}onLink(e){console.log("点击了超链接："+e)}onRefresh(){we.instance.reload()}setOpenData(e){if(e){var i=e[0];if(e.length>2?(this.alertTitle.text=e[1],this.alertDesc.text=e[2]):this.alertDesc.text=e[1],i==1){this.canClose=!1;var r=this.getChildByName("close");r.visible=!1,this.btn_refresh.visible=!0}else this.btn_refresh.visible=!1}}onDisable(){}close(e){this.canClose&&super.close(e)}};kd=m([qx("iB7UvqEcQ1GFKaVEIy6Bmw")],kd);var Ad=class extends Laya.Box{};var{regClass:Wx}=Laya,Dd=class extends Ad{};Dd=m([Wx("ON5bkSuKSE2gwPDUnRGmrw")],Dd);var Md=class extends Laya.Box{};var{regClass:Kx}=Laya,Pd=class extends Md{onEnable(){}notice(t){let e=t;this.label_tf.text=e,this.label_tf.x=68,this.image_bg.width=68*2+this.label_tf.textField.textWidth,e.length/45>1&&(this.image_bg.height=this.label_tf.textField.textHeight+25),this.alpha=1,this.visible=!0}get view(){return this}get width(){return this.image_bg.width}onDisable(){console.log("txtNotice recover"),Laya.Pool.recover("txtNotice",this)}};Pd=m([Kx("Nm27xWbYSG6mj-EXqPOZ_A")],Pd);var Bd=class extends Laya.Box{};var{regClass:Yx}=Laya,Rd=class extends Bd{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){if(!t)return;super.dataSource=t;let e=t.id===S.instance.playerDto.pid,i=t.rank;this.tf_name.text=t.name;let r=F.intance.m_dicUnions.get(t.unionId);r?this.tf_union.text=f.instance.getLanguage(r.name):this.tf_union.text="null",this.tf_rank.text=i,this.tf_score.text=t.score,this.playerIcon.headSkin=t.head,this.img_flag.skin=M.instance.getCountryIcon(t.country),e?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.bg.skin=i<4?`res/rank/img_guild_${i}di.png`:"res/rank/img_guild_4di.png",i<4?(this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${i}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.img_rankIcon2.skin=e?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1)}};Rd=m([Yx("-msKQoZIRI6E80e53qttmw")],Rd);var Nd=class extends Laya.Scene{};var{regClass:$x}=Laya,Od=class extends Nd{constructor(){super(...arguments);this.myIndex=-1;this.myUnionIndex=-1;this.unionRankData=null;this.currTab=0}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){this.onClickPlayer()}onEnable(){this.rankLanList.visible=!1,this.myBox.visible=!1,this.myUnionBox.visible=!1,this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_4.on(Laya.Event.CLICK,this,this.onClickTab,[4]),this.btn_5.on(Laya.Event.CLICK,this,this.onClickTab,[5]),this.btn_player.on(Laya.Event.CLICK,this,this.onClickPlayer),this.btn_guild.on(Laya.Event.CLICK,this,this.onClickGuild),this.btn_schol.on(Laya.Event.CLICK,this,this.onClickSchol)}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_2.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_3.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_4.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_5.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_player.off(Laya.Event.CLICK,this,this.onClickPlayer),this.btn_guild.off(Laya.Event.CLICK,this,this.onClickGuild),this.btn_schol.off(Laya.Event.CLICK,this,this.onClickSchol),this.rankLanList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.unionRankLanList.scrollBar.off(Laya.Event.CHANGE,this,this.onUnionScrollBarChange)}onClickTab(e){if(this.currTab===e)return;let i={1:"combat scenes",2:"kill count",3:"number of heroes",4:"damage ranking",5:"wealth ranking"};e in i?(this.setTab(e),this.setListData(e),this.rankName.text=i[e]):console.warn(`Tab index ${e} does not have a corresponding name.`)}setTab(e){for(let i=1;i<6;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}async setListData(e){let i=await q.requestPost("wxgame/sys/rank",{type:e});i?(this.updateSelfData(i.self),this.updateRankList(i.rankList)):(console.error("Error fetching data:",i),ie.instance.notice(f.instance.getLanguage(135)))}async setGuildListData(){this.unionRankData||(this.unionRankData=await q.requestPost("wxgame/sys/unionRank",{}));let e=[];if(this.unionRankData){let i=this.unionRankData.rankList,r=this.unionRankData.self;if(r&&this.updateSelfUnionData(r),this.unionRankLanList.scrollTo(0),this.unionRankLanList.visible=!0,this.myUnionBox.visible=!0,this.unionRankLanList.selectedIndex=1,i.forEach(n=>{let o=F.intance.m_dicUnions.get(n.id);o&&(o.rank=n.rank,o.score=n.score,r&&r.id&&(o.myUnion=n.id===r.id),e.push(o))}),this.unionRankLanList.array=e,this.myUnionBox.visible=!!r,r){let n=e.findIndex(o=>o.id===r.id);this.myUnionIndex=n}}else console.error(`Error fetching data: ${this.unionRankData}`),ie.instance.notice(f.instance.getLanguage(135))}updateSelfData(e){if(!e)return;this.tf_name.text=e.name;let i=F.intance.m_dicUnions.get(e.unionId);if(i?this.tf_union.text=f.instance.getLanguage(i.name):this.tf_union.text="null",this.tf_score.text=`${e.score}`,this.playerIcon.headSkin=e.head,this.img_flag.skin=M.instance.getCountryIcon(e.country),e.rank<0)this.img_rankIcon1.visible=!1,this.tf_rank.text=f.instance.getLanguage(1117),this.img_rankIcon2.visible=!1;else if(e.rank<4)this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${e.rank}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1;else{let r=e.pid===S.instance.playerDto.pid?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png";this.img_rankIcon2.skin=r,this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1,this.tf_rank.text=`${e.rank}`}}updateSelfUnionData(e){if(!e)return;let i=F.intance.m_dicUnions.get(e.id);if(i&&(this.union_name.text=f.instance.getLanguage(i.name),this.unionIcon.dataSource=i),this.union_score.text=e.score,e.rank<0)this.img_unionIcon1.visible=!1,this.union_rank.text=f.instance.getLanguage(1117),this.img_unionIcon2.visible=!1;else if(e.rank<4)this.img_unionIcon1.skin=`res/matchRank1/img_ranking_${e.rank}.png`,this.img_unionIcon1.visible=!0,this.img_unionIcon2.visible=!1;else{let r="res/matchRank1/img_ranking_ranking_me.png";this.img_unionIcon2.skin=r,this.img_unionIcon2.visible=!0,this.img_unionIcon1.visible=!1,this.union_rank.text=`${e.rank}`}}updateRankList(e){if(e){let i=e.findIndex(r=>r.pid===S.instance.playerDto.pid);this.rankLanList.selectedIndex=1,this.rankLanList.array=e,this.myIndex=i,this.rankLanList.scrollTo(0),this.rankLanList.visible=!0,this.myBox.visible=!0}}onScrollBarChange(){if(!this.rankLanList.array||!this.myIndex&&this.myIndex!==0)return;let e=this.rankLanList.startIndex,i=e+this.rankLanList.repeatX*this.rankLanList.repeatY-1,r=this.rankLanList.getCell(this.myIndex);if(r)if(this.myIndex>=e&&this.myIndex<=i){let s=r.localToGlobal(new Laya.Point(0,0)).y-this.myBox.height-57;s=Math.max(57,Math.min(493,s)),this.myBox.y=s}else this.myBox.y=this.myIndex>i?493:57}onUnionScrollBarChange(){if(!this.unionRankLanList.array||!this.myUnionIndex&&this.myUnionIndex!==0)return;let e=this.unionRankLanList.startIndex,i=e+this.unionRankLanList.repeatX*this.unionRankLanList.repeatY-1,r=this.unionRankLanList.getCell(this.myUnionIndex);if(r)if(this.myUnionIndex>=e&&this.myUnionIndex<=i){let s=r.localToGlobal(new Laya.Point(0,0)).y-this.myUnionBox.height-57;s=Math.max(57,Math.min(499,s)),this.myUnionBox.y=s}else this.myUnionBox.y=this.myUnionIndex>i?499:57}setTabState(e,i,r,n){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?r:n}onClickPlayer(){this.onClickTab(1),this.playerRankBox.visible=!0,this.unionBox.visible=!1,this.setTabState(this.btn_player,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!1,"#143f6b","#7ff1fe")}onClickGuild(){this.playerRankBox.visible=!1,this.unionBox.visible=!0,this.setTabState(this.btn_player,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!1,"#143f6b","#7ff1fe"),this.setGuildListData()}onClickSchol(){this.playerRankBox.visible=!1,this.unionBox.visible=!1,this.setTabState(this.btn_player,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!0,"#143f6b","#7ff1fe")}};Od=m([$x("5_oIkEKDQUyqTP8xY9zMUw")],Od);var Hd=class extends Laya.Box{};var{regClass:Xx}=Laya,Ud=class extends Hd{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){if(!t)return;let e=t.id===S.instance.playerDto.pid,i=t.rank;this.unionIcon.dataSource=t,this.tf_union.text=f.instance.getLanguage(t.name),this.tf_rank.text=i,this.tf_score.text=t.score,e?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.bg.skin=i<4?`res/rank/img_guild_${i}di.png`:"res/rank/img_guild_4di.png",i<4?(this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${i}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.img_rankIcon2.skin=e?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1)}};Ud=m([Xx("O6o6TJNORIGW9WXbhJf91w")],Ud);var Vd=class extends Laya.Box{};var{regClass:Qx,property:Mae}=Laya,Gd=class extends Vd{constructor(){super();this.isAddEvent=!1}set dataSource(e){if(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=M.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}}async setCurrentOutPut(){this.img_back.skin=M.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=M.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=ct.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";ot.instance.setStar(this,e),this.box_show.visible=!0,this.destroyed}onChange(e){e?this.selectBox.visible=!0:this.selectBox.visible=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}toDetail(){this.heroVo.id&&V.intance.openModule(h.HeroDetailDialog,this.heroVo)}};Gd=m([Qx("DixYspEIQnqQazhlHuxLDw")],Gd);var zd=class extends Laya.Dialog{};var{regClass:Zx}=Laya,Fd=class extends zd{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER;this.beforeYearIndex=null;this.beforeMonthIndex=null;this.beforeDayIndex=null;this.dateOpenState=0;this.itemVo=null;this.currentDate=new Date;this.startDate={year:0,month:0,day:0};this.endDate={year:0,month:0,day:0};this.heroVo=null}onEnable(){this.box_date.on(Laya.Event.CLICK,this,this.onOpenDate,[this.img_date_pad,this.box_date]),this.box_date2.on(Laya.Event.CLICK,this,this.onOpenDate,[this.img_date_pad,this.box_date2]),this.yearList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.yearList,"year"]),this.monthList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.monthList,"month"]),this.dayList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.dayList,"day"]),this.yearList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.yearList,"year"]),this.monthList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.monthList,"month"]),this.dayList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.dayList,"day"]),this.tf_uid.on(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),L.intance.on(_.CHANGE_WALLET_HERO,this,this.onHeroChange),L.intance.on(_.CHANGE_WALLET_PROP,this,this.onPropChange),this.hero_box.on(Laya.Event.CLICK,this,this.onHeroBoxClick),this.Img_prop.on(Laya.Event.CLICK,this,this.onPropClick),this.btn_createSubWallet.on(Laya.Event.CLICK,this,this.onCreateSubWallet),this.yearList.scrollBar.rollRatio=0,this.monthList.scrollBar.rollRatio=0,this.dayList.scrollBar.rollRatio=0;let e=new Date;this.startDate={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()},this.endDate={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()},this.refreshStartTime(1),this.refreshStartTime(2),this.showHeroData(),this.initDiciList(),this.box_dividends.on(Laya.Event.CLICK,this,this.onOpeDividends)}onDisable(){this.removeEvent()}removeEvent(){this.box_date.off(Laya.Event.CLICK,this,this.onOpenDate),this.box_date2.off(Laya.Event.CLICK,this,this.onOpenDate),this.yearList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.monthList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.dayList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.yearList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.monthList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.dayList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.tf_uid.off(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.off(Laya.Event.FOCUS,this,this.uidFocus),L.intance.off(_.CHANGE_WALLET_HERO,this,this.onHeroChange),L.intance.off(_.CHANGE_WALLET_PROP,this,this.onPropChange),this.hero_box.off(Laya.Event.CLICK,this,this.onHeroBoxClick),this.Img_prop.off(Laya.Event.CLICK,this,this.onPropClick),this.btn_createSubWallet.off(Laya.Event.CLICK,this,this.onCreateSubWallet),this.box_dividends.off(Laya.Event.CLICK,this,this.onOpeDividends)}resetColors(){for(var e=0;e<this.yearList.cells.length;e++){var i=this.yearList.cells[e];i.tf_date.color="#357cc0"}for(var e=0;e<this.monthList.cells.length;e++){var i=this.monthList.cells[e];i.tf_date.color="#357cc0"}for(var e=0;e<this.dayList.cells.length;e++){var i=this.dayList.cells[e];i.tf_date.color="#357cc0"}}onOpenDate(e,i){this.resetColors(),this.onHideDivi(),e.visible==!1?(i==this.box_date?(e.y=356,this.dateOpenState=1):(e.y=436,this.dateOpenState=2),this.getDateInfo(),e.visible=!0,this.img_bg.on(Laya.Event.CLICK,this,this.hideAllPad)):(e.visible=!1,this.dateOpenState=0)}hideAllPad(){this.img_date_pad.visible=!1,this.img_bg.off(Laya.Event.CLICK,this,this.hideAllPad)}isLeapYear(e){return e%4==0&&e%100!=0||e%400==0}getDaysInMonth(e,i){return i===2?this.isLeapYear(e)?29:28:[4,6,9,11].includes(i)?30:31}getDateInfo(){let e=this.dateOpenState==1?this.startDate:this.endDate;this.fillList(this.yearList,e.year,2e3,2050),this.fillList(this.monthList,e.month,1,12);let i=new Date().getFullYear(),r=new Date().getMonth()+1,n=this.getDaysInMonth(i,r);this.fillList(this.dayList,e.day,1,n)}fillList(e,i,r,n){let o=[];for(let l=r;l<=n;l++)o.push(l.toString());for(let l=1;l<=3;l++)o.push("");o=["",...o],e.array=o;let s=o.indexOf(`${i}`);if(s>-1){e.scrollTo(s-1),e.selectedIndex=s-1;let l=e.getCell(s);l.tf_date.color="#ffffff",e==this.yearList?this.beforeYearIndex=s:e==this.monthList?this.beforeMonthIndex=s:e==this.dayList&&(this.beforeDayIndex=s)}}onYearChange(e){!this.yearList.array||this.monthList.selectedIndex<0||this.updateDayList(parseInt(this.yearList.array[e]),parseInt(this.monthList.array[this.monthList.selectedIndex]))}onMonthChange(e){!this.yearList.array||this.monthList.selectedIndex<0||this.updateDayList(parseInt(this.yearList.array[this.yearList.selectedIndex]),parseInt(this.monthList.array[e]))}updateDayList(e,i){let r=[];for(let n=1;n<=this.getDaysInMonth(e,i);n++)r.push(n.toString());for(let n=1;n<=3;n++)r.push("");r=["",...r],this.dayList.array=r}calculateVisibleHeight(e,i){let r=e.getCell(i);return Math.min(r.y+r.height,e.scrollBar.value+e.height)-Math.max(r.y,e.scrollBar.value)}onListStop(e,i){let r=this.dateOpenState==1?this.startDate:this.endDate,n=Math.floor(e.startIndex),o=n+1,s=this.calculateVisibleHeight(e,n),l=this.calculateVisibleHeight(e,o),c=s+14>=l?n:o;(i==="month"||i==="day")&&(c=Math.min(c,e.array.length-5)),e.scrollTo(c),e.selectedIndex=c;let u=e.getCell(c+1);u.tf_date.color="#ffffff";let p=u.tf_date.text;if(p&&u){switch(i){case"year":this.onYearChange(c+1),r.year=Number(p);break;case"month":this.onMonthChange(c+1),r.month=Number(p);break;default:r.day=Number(p);break}this.refreshStartTime(this.dateOpenState)}}onScrollBarChange(e,i){if(!this.img_date_pad.visible)return;let r=this.dateOpenState==1?this.startDate:this.endDate,n=Math.floor(e.startIndex),o=n+1,s=this.calculateVisibleHeight(e,n),l=this.calculateVisibleHeight(e,o),c=s+14>=l?n:o,u=e.getCell(c+1);u.tf_date.color="#ffffff";let p,b;switch(i){case"year":b=this.beforeYearIndex,this.beforeYearIndex=c+1;break;case"month":b=this.beforeMonthIndex,this.beforeMonthIndex=c+1;break;case"day":b=this.beforeDayIndex,this.beforeDayIndex=c+1;break}b!==c+1&&(p=e.getCell(b),this.resetListStyle(p));let x=u.tf_date.text;if(u.tf_date.color="#ffffff",x&&u){switch(i){case"year":this.onYearChange(c+1),r.year=Number(x);break;case"month":this.onMonthChange(c+1),r.month=Number(x);break;default:r.day=Number(x);break}this.refreshStartTime(this.dateOpenState)}}async setPlayerName(){try{if(this.tf_uid.text=="")return;var e=await q.requestPost("wxgame/sys/queryName",{openid:this.tf_uid.text.toLowerCase()});e&&(console.log(e),this.tf_player_name.text=e.name)}catch{console.log("未找到该玩家，请核对地址")}}uidFocus(){this.tf_uid.text="",this.tf_player_name.text=""}resetListStyle(e){e&&(e.tf_date.color="#357cc0")}refreshStartTime(e){let i=e==1?this.startDate:this.endDate,r=e==1?this.tf_start:this.tf_start2,n=i.month>=10?i.month:`0${i.month}`,o=i.day>=10?i.day:`0${i.day}`;r.text=`${i.year}-${n}-${o}`}onHeroBoxClick(){V.intance.openModule(h.WalletChooseHeroDialog),console.log("英雄点击")}onPropClick(){V.intance.openModule(h.WalletChoosePropsDialog),console.log("道具点击")}async onCreateSubWallet(){let e=Number(this.tf_have.text);if(this.tf_uid.text==Y.instance.walletAddress){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1162),N.YES),this.tf_uid.text="",this.tf_player_name.text="";return}if(e<1){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1166),N.YES);return}let i=this.tf_uid.text;if(i.length<=0||this.tf_player_name.text==""){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1161),N.YES);return}if(!this.heroVo){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1167),N.YES);return}let r=this.itemVo.m_iId;if(r==1001&&this.heroVo.heroItem.level!==3){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1163),N.YES);return}let n=tt.dateStringToTimestamp(this.tf_start.text),o=tt.dateStringToTimestamp(this.tf_start2.text),s=tt.getCurrentDayTimestamp();if(n<s){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1164),N.YES);return}if(o<=n){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1165),N.YES);return}let l=Number(this.tf_div.text.replace("%","")),c=this.heroVo.pk;var u={startTime:n,endTime:o,ticketId:r,ticketCount:e,ratio:l,heroPk:c,openid:i.toLowerCase()};try{var p=await q.requestPost("wxgame/lease/create",u);p&&(ie.instance.notice(f.instance.getLanguage(1168)),this.close(),this.heroVo.pk==S.instance.playerDto.fightHeroPk&&(S.instance.playerDto.fightHeroPk=""),Laya.timer.once(200,this,()=>{L.intance.event(_.CREATE_SUB_WALLET_SUCCESS)}))}catch(b){console.log("创建子钱包报错=====》",b)}}showHeroData(){if(this.heroVo){this.img_back.skin=M.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=M.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=ct.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";ot.instance.setStar(this,e),this.box_show.visible=!0,this.img_back.visible=!0,this.img_noHero.visible=!1}else this.box_show.visible=!1,this.img_back.visible=!1,this.img_noHero.visible=!0}initDiciList(){var e=F.intance.getGeneralValueById(9);this.list_divi.array=e,this.list_divi.selectHandler=new Laya.Handler(this,this.handleSelectDiv),this.list_divi.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_divi.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_divi.scrollBar&&this.list_divi.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown),this.list_divi.selectedIndex=0,console.log("diviDatas===========>",e)}handleSelectDiv(e){if(console.log("handleSelectDiv: "+e),e!=-1){let i=this.list_divi.selectedItem;this.tf_div.text=`${i}%`}}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_divi.selectedIndex=i,this.onHideDivi())}onCountryItemRender(e,i){e.onChange(this.list_divi.selectedIndex==i)}onOpeDividends(){this.img_divi_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideDivi)}onHideDivi(){this.img_divi_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideDivi)}onScrollBarDown(e){e.stopPropagation()}onHeroChange(e){this.heroVo=e,this.showHeroData()}onPropChange(e,i){console.log("propData=========>",e,i),this.itemVo=e;let r=F.intance.m_dicItems.get(e.itemItem.id.toString());this.PropBox.visible=!0,r&&(this.img_prop_icon.skin=M.instance.getItemIcon(r.icon),this.img_prop_box.skin="gameIcon/items/itemBg/img_"+r.quality+".png",this.tf_all.text=""+Te.formatNumber(e._m_iNum,2),this.tf_have.text=""+Te.formatNumber(i,2))}};Fd=m([Zx("_bHe6-EiQc-KiQ-mElnEIQ")],Fd);var jd=class extends Laya.ComboBox{};var{regClass:Jx}=Laya,qd=class extends jd{set defaultLabel(t){}onEnable(){this.getDateInfo()}set dataSource(t){super.dataSource=t;var e=t}set isOpen(t){console.log("isOpen: "+t),this._isOpen!=t&&(this._isOpen=t,this._isOpen?this.img_pad.visible=!0:this.img_pad.visible=!1)}};qd=m([Jx("A2yeugt8S3Ot7ec482gdhQ")],qd);var Wd=class extends Laya.Box{};var{regClass:eI}=Laya,Kd=class extends Wd{set dataSource(e){super.dataSource=e,this.tf_date.text=e}onDisable(){}};Kd=m([eI("fCHaQKFSQ-ew26uygUCKnQ")],Kd);var Yd=class extends Laya.Box{};var{regClass:tI}=Laya,$d=class extends Yd{set dataSource(e){super.dataSource=e,this.tf_rate.text=`${e}%`}onChange(e){e?(this.selectImg.visible=!0,this.tf_rate.color="#ffffff"):(this.tf_rate.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};$d=m([tI("TToplFpGQGmUqT5SfNnVIg")],$d);var Xd=class extends Laya.Dialog{};var{regClass:iI}=Laya,Qd=class extends Xd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.employList.visible=!1,this.btn_back.on(Laya.Event.CLICK,this,this.closeEmployView)}async setOpenData(e){this.employList.vScrollBarSkin="";let i=e.heroData,r="";if(i){let n=tt.getYearMonthDat(i.startTime),o=tt.getYearMonthDat(i.endTime);var e=await q.requestPost("wxgame/lease/heroInfo",{heroPk:i.heroPk});if(e&&e.info){let l=F.intance.m_dicShops.values,c=Oe.getTitleByGoodsId(l,e.info.ticketId);c&&(r=f.instance.getLanguage(c)),console.log(c),console.log(e);let u="",p=e.info.allTicketCount,b=e.info.remainTicketCount,x=p-b;x<=0?u="0%":u=`${Math.round(e.info.winTimes/x*100)}%`;let v={"Proxy player":i.playerName,Arena:r,"Remaining ticket":[i.remainCount,e.info.ticketId],"Combat scene":`${x}`,"Winner probability":`${u}`,Deserter:`${e.info.taopao}`,"Start date":n,"End date":o},C=Object.getOwnPropertyNames(v).map(Z=>[Z,v[Z]]);this.employList.array=C;let A=-1;this.employList.selectedIndex=A,this.employList.visible=!0;let H=S.instance.m_heroData.heroVoDic.get(i.heroPk);if(this.img_back.skin=M.instance.getHeroBackIcon(H.heroItem.quality),this.img_front.skin=M.instance.getHeroFrontIcon(H.heroItem.quality),this.img_hero.skin=H.simgurl,this.tf_name.text=ct.shortHeroStr(H.name),i.reward&&i.reward.length>0){let Z=Oe.findFirstTypeAndNotGold(i.reward);Z?(this.tf_score.text=Z.count,this.img_money.skin=M.instance.getMoneyIcon(Z.id),this.img_money.visible=!0):(this.tf_score.text="0",this.img_money.visible=!1)}else this.tf_score.text="0",this.img_money.visible=!1;let z=H.heroItem.level+"";ot.instance.setStar(this,z)}}}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.closeEmployView)}closeEmployView(){this.close()}};Qd=m([iI("4pjAWg8HScmRe8ukNRQsGg")],Qd);var Zd=class extends Laya.Box{};var{regClass:aI}=Laya,Jd=class extends Zd{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){super.dataSource=t,this.setEmploy(t)}setEmploy(t){if(!t)return;let e=t[0],i=t[1];this.item_name.text=e,e!=="Remaining ticket"&&e!=="Received"&&e!=="Bonus"&&(this.moneyImg.visible=!1),e==="Agent Date"||e==="End Date"?this.item_value.text=tt.formatTimeStamp(Number(i),"YY-MT-DD"):e=="Remaining ticket"?(this.item_value.text=i[0],this.moneyImg.skin=`gameIcon/items/item/img_${i[1]}.png`):this.item_value.text=i}};Jd=m([aI("TAG-i7slRsKkXRu8SsaWHg")],Jd);var eh=class extends Laya.Box{};var{regClass:rI,property:Gre}=Laya,th=class extends eh{constructor(){super();this.isAddEvent=!1}set dataSource(e){if(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=M.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}}async setCurrentOutPut(){this.img_back.skin=M.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=M.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=ct.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";ot.instance.setStar(this,e),this.box_show.visible=!0,this.heroVo.state==1?(this.img_state.skin="gameIcon/hero/heroDetail/img_hero_state_2.png",this.img_state.visible=!0):this.heroVo.state==2?(this.img_state.skin="gameIcon/hero/heroDetail/img_hero_state_3.png",this.img_state.visible=!0):this.img_state.visible=!1}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}onDisable(){this.off(Laya.Event.CLICK,this,this.toDetail)}toDetail(){this.heroVo.id&&V.intance.openModule(h.HeroDetailDialog,this.heroVo)}};th=m([rI("vJhsY0hvQjyUXjU0-8xV7g")],th);var ih=class extends Laya.Box{};var{regClass:nI}=Laya,ah=class extends ih{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,e&&(this.img_coin.skin=M.instance.getMoneyIcon(e.id),this.money_value.text=e.count,this.addEvent())}};ah=m([nI("TjAZ1yG-QkG5fetB03VUuA")],ah);var rh=class extends Laya.Scene{};var{regClass:oI,property:lne}=Laya,nh=class extends rh{constructor(){super(...arguments);this.text=""}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onEnable(){this.list_hero.vScrollBarSkin="",this.RentalList.visible=!1,this.RevenueList.visible=!1,this.subWalletList.visible=!1,this.btn_sch.on(Laya.Event.CLICK,this,this.onClickSch),this.btn_jia.on(Laya.Event.CLICK,this,this.onClickJia),this.btn_yi.on(Laya.Event.CLICK,this,this.onClickYi),L.intance.on(_.CREATE_SUB_WALLET_SUCCESS,this,this.createSubWalletSuccess),this.btn_subwallet.on(Laya.Event.CLICK,this,this.onClickSubwallet),this.btn_createSubWallet.on(Laya.Event.CLICK,this,this.onClickCreateSubwallet),this.close&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.onClickSch(),this.initHeroData()}async setMoneyData(){let e=await q.requestPost("wxgame/lease/outline",{});if(e&&e.reward){let i=Oe.processItemsArray(e.reward)[0];this.RentalList.array=i,this.RentalList.visible=!0}if(e&&e.childReward){let i=Oe.processItemsArray(e.childReward)[0];this.RevenueList.array=i,this.RevenueList.visible=!0}}initContainer(e){this.list_hero.visible=!1,this.list_hero.vScrollBarSkin="",this.createHeadList(e)}async createHeadList(e){if(!this)return;let i=e;if(i){this.list_hero.selectedIndex=1,this.list_hero.array=i,this.list_hero.visible=!0;let r=-1;this.list_hero.selectedIndex=r}(!i||i.length<=0)&&(this.noDataBox.visible=!0)}async initHeroData(){await Ke.instance.ownerHero()}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}setTabState(e,i,r,n){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?r:n}onClickSch(){this.box_1.visible=!0,this.list_hero.visible=!1,this.subWalletBox.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_sch,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe"),this.setMoneyData()}async onClickJia(){await Ke.instance.ownerHero(),this.box_1.visible=!1,this.list_hero.visible=!0,this.subWalletBox.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_jia,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe");let e=S.instance.m_heroData.heroVoDic.values,i=Oe.filterObjectsByState(e,1);this.initContainer(i)}onClickYi(){this.box_1.visible=!1,this.list_hero.visible=!0,this.subWalletBox.visible=!1,this.noDataBox.visible=!1;let e=S.instance.m_heroData.heroVoDic.values,i=Oe.filterObjectsByState(e,2);this.initContainer(i),this.setTabState(this.btn_yi,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe")}async onClickSubwallet(){this.box_1.visible=!1,this.list_hero.visible=!1,this.subWalletBox.visible=!0,this.noDataBox.visible=!1,this.setTabState(this.btn_subwallet,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe");var e=await q.requestPost("wxgame/lease/list",{});if(e){let i=e.list;for(let r=0;r<i.length;r++)i[r].rank=r+1;if(i){this.subWalletList.selectedIndex=1,this.subWalletList.array=i,this.subWalletList.visible=!0;let r=-1;this.subWalletList.selectedIndex=r}(!i||i.length<=0)&&(this.noDataBox.visible=!0)}}createSubWalletSuccess(){Laya.timer.once(800,this,this.onClickSubwallet)}onClickCreateSubwallet(){V.intance.openModule(h.CreateSubWalletDialog)}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene),this.btn_sch.off(Laya.Event.CLICK,this,this.onClickSch),this.btn_jia.off(Laya.Event.CLICK,this,this.onClickJia),this.btn_yi.off(Laya.Event.CLICK,this,this.onClickYi),this.btn_subwallet.off(Laya.Event.CLICK,this,this.onClickSubwallet),this.btn_createSubWallet.off(Laya.Event.CLICK,this,this.onClickCreateSubwallet)}};nh=m([oI("eB5n1zn1RD2i2F-bAki-sQ")],nh);var oh=class extends Laya.Box{};var{regClass:sI}=Laya,sh=class extends oh{constructor(){super();this.isAddEvent=!1;this.heroPk=null}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,!e)return;let{rank:i,heroPk:r,ticketId:n,playerName:o,remainCount:s,reward:l}=e;this.tf_rank.text=i,this.heroPk=r;let c=F.intance.m_dicShops.values,u=Oe.getTitleByGoodsId(c,n);if(u&&(this.tf_arena.text=f.instance.getLanguage(u)),this.tf_name.text=o,this.tf_venue.text=s,this.btn_detail.off(Laya.Event.CLICK,this,this.onClickDetail),this.btn_detail.on(Laya.Event.CLICK,this,this.onClickDetail,[e]),this.addEvent(),l&&l.length>0){let p=Oe.findFirstTypeAndNotGold(l);p&&(this.tf_score.text=p.count,this.img_money.skin=M.instance.getMoneyIcon(p.id),this.img_money.visible=!0)}else this.tf_score.text="0",this.img_money.visible=!1}onClickDetail(e){this.heroPk,V.intance.openModule(h.EmployInfoDialog,{heroData:e})}onDisable(){this.btn_detail.off(Laya.Event.CLICK,this,this.onClickDetail)}};sh=m([sI("5iGLLzQkR8mqhVsrdybXCQ")],sh);var lh=class extends Laya.Dialog{};var{regClass:lI}=Laya,ch=class extends lh{constructor(e){super();this.heroList=[]}onEnable(){this.list_hero.visible=!1,this.createHeadList(),this.btn_transfer.on(Laya.Event.CLICK,this,this.onBtnTramsfer)}onBtnTramsfer(){let e=this.list_hero.selectedIndex;if(e<0){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1167),N.YES);return}let i=this.heroList[e];L.intance.event(_.CHANGE_WALLET_HERO,i),console.log("onBtnTramsfer",e),this.close()}async createHeadList(){if(!this)return;await Ke.instance.ownerHero();let e=S.instance.m_heroData.heroVoDic.values;if(this.heroList=Oe.filterObjectsByState(e,0),this.heroList){this.list_hero.selectedIndex=1,this.list_hero.array=this.heroList,this.list_hero.visible=!0;let i=-1;this.list_hero.selectedIndex=i}}onDisable(){this.btn_transfer.off(Laya.Event.CLICK,this,this.onBtnTramsfer)}};ch=m([lI("8aIFsnkXTaWPXwTKHxCGpQ")],ch);var uh=class extends Laya.Dialog{};var{regClass:cI}=Laya,ph=class extends uh{constructor(e){super();this.propValue=1;this.propNum=1;this.propData=null;this.items=[]}onEnable(){this.txt_num.text="1",this.listPanel1.visible=!1,this.btn_subtract.on(Laya.Event.CLICK,this,this.changePropNum,[!1]),this.btn_add.on(Laya.Event.CLICK,this,this.changePropNum,[!0]),this.listPanel1.selectHandler=new Laya.Handler(this,this.handleSelectProp),this.btn_transfer.on(Laya.Event.CLICK,this,this.onBtnTramsfer),this.initPropList()}changePropNum(e){e?this.propValue=Math.min(this.propValue+1,this.propNum):this.propValue=Math.max(this.propValue-1,1),this.txt_num.text=`${this.propValue}`}async initPropList(){await Ke.instance.ownerBag();var e=this.getItemByType();console.log(e),this.propData=e,this.listPanel1.array=e,this.listPanel1.selectedIndex=0,this.listPanel1.visible=!0}handleSelectProp(e){if(e!==-1){this.propValue=1,this.txt_num.text="1";let i=this.listPanel1.selectedItem;i&&(this.propNum=Number(i._m_iNum),console.log(this.propNum))}}onBtnTramsfer(){let e=this.propData[this.listPanel1.selectedIndex],i=this.propValue;if(i<=0||!e){_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(1166),N.YES);return}L.intance.event(_.CHANGE_WALLET_PROP,[e,i]),this.close()}getItemByType(){this.items=[];for(var e=S.instance.m_packageData.getBackByType(xt.TYPE_Consumption),i=0;i<e.length;i++){var r=e[i];r&&r.itemItem.id>=1001&&r.itemItem.id<=1009&&this.items.push(r)}return this.items}onDisable(){this.btn_subtract.off(Laya.Event.CLICK,this,this.changePropNum),this.btn_add.off(Laya.Event.CLICK,this,this.changePropNum),this.btn_transfer.off(Laya.Event.CLICK,this,this.onBtnTramsfer)}};ph=m([cI("WY66k0UbQfiwaG80emIzjA")],ph);var mh=class extends Laya.Box{};var{regClass:uI}=Laya,dh=class extends mh{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.addEvent(),this.setCurrentOutPut(e)}async setCurrentOutPut(e){if(e){let i=F.intance.m_dicItems.get(e.ticketId.toString());this.txt_num.text=""+Te.formatNumber(e.ticketCount,8),this.img_icon.skin=M.instance.getItemIcon(i.icon),this.img_box.skin="gameIcon/items/itemBg/img_"+i.quality+".png"}else this.txt_num.text="",this.img_icon.skin=null,this.img_box.skin="gameIcon/items/itemBg/img_0.png"}};dh=m([uI("QLIqcx2YSRWf6b4T0P4N6Q")],dh);var hh=class extends Laya.Box{};var{regClass:pI}=Laya,fh=class extends hh{set dataSource(e){super.dataSource=e,this.tf_data.text=e}onDisable(){}onChange(e){e?(this.selectImg.visible=!0,this.tf_data.color="#ffffff"):(this.tf_data.color="#357cc0",this.selectImg.visible=!1)}};fh=m([pI("3viWNkWoRRS9EWM3SzguDg")],fh);var bh=class extends Laya.Box{};var{regClass:mI}=Laya,yh=class extends bh{onEnable(){let t=(Laya.stage.width-X.DESIGN_WIDTH)/2;this.img_coinsBg.right-=t,console.log("dWidth: "+t),this.updateLocalAssets(),L.intance.on(_.ROLE_INFO_CHANGE,this,this.updateLocalAssets),L.intance.on(Pt.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets)}onDisable(){L.intance.off(_.ROLE_INFO_CHANGE,this,this.updateLocalAssets),L.intance.off(Pt.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets)}updateLocalAssets(){this.tf_3001.text=Te.filterNumFormat(S.instance.getConsumeValue(Fe.TYPE_TOX),2),this.tf_3006.text=Te.filterNumFormat(S.instance.getConsumeValue(Fe.TYPE_BTC),8),this.tf_3007.text=Te.filterNumFormat(S.instance.getConsumeValue(Fe.TYPE_ETH),4),this.tf_3004.text=Te.filterNumFormat(S.instance.getConsumeValue(Fe.TYPE_USDT),2),this.tf_3005.text=Te.filterNumFormat(S.instance.getConsumeValue(Fe.TYPE_GOLD),0)}};yh=m([mI("7P9MlqipSaG6QoKpQowDbQ")],yh);var gh=class extends Laya.Box{};var{regClass:dI}=Laya,vh=class extends gh{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.heroVo=e,this.heroVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.heroSk.dataSource=this.heroVo,this.tf_name.text=ct.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";ot.instance.setStar(this,e)}};vh=m([dI("IcuwbMwvRKqMyiXxDzW-dA")],vh);var Lh=class extends Laya.Dialog{};var{regClass:hI}=Laya,_h=class extends Lh{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.initContainer(),De.instance.playSoundByName(De.soundName32)}initContainer(){var e=Ue.instance.getOneItem();e&&this.showItem(e)}showItem(e){let i=this.heroListItem;i.dataSource=e}onDisable(){L.intance.event(_.EVENT_CHECK_REMAIN,h.HeroGetDialog)}};_h=m([hI("mrqJhWahTxuTjeSGIs559Q")],_h);var wh=class extends Laya.Box{};var{regClass:fI}=Laya,xh=class extends wh{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.shopItem=e,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.tf_name.text=f.instance.getLanguage(this.shopItem.title),this.shopItem.cost.length>1?(this.img_const.skin=M.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=Te.formatNumber(this.shopItem.cost[1])+"",this.img_const.visible=!0,this.tf_const.visible=!0,this.disabled=!1):(this.disabled=!0,this.img_const.visible=!1,this.tf_const.visible=!1),this.shopItem.type==1?(this.tf_name.color=ga.qualityColors[parseInt(this.shopItem.icon)-1],this.img_bg.skin=M.instance.getHeroQuality(this.shopItem.icon),this.img_icon.skin=M.instance.getHeroEggIcon(this.shopItem.icon)):this.shopItem.type==4&&(this.tf_name.color=ga.qualityColors[parseInt(this.shopItem.icon)-1],this.img_bg.skin=M.instance.getHeroQuality(this.shopItem.icon),this.img_icon.skin=M.instance.getChestIcon(this.shopItem.icon))}};xh=m([fI("awS07ko0RBaxCnxXWqiR4g")],xh);var Ih=class extends Laya.Box{};var{regClass:bI}=Laya,Eh=class extends Ih{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.shopItem=e,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){if(this.tf_name.text=f.instance.getLanguage(this.shopItem.title),this.img_const.skin=M.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=Te.formatNumber(this.shopItem.cost[1])+"",this.shopItem.type==2){var e=F.intance.m_dicItems.get(this.shopItem.icon);this.img_bg.skin=M.instance.getItemQualityIcon(e.quality+""),this.tf_name.color=ga.qualityColors[e.quality-1],this.img_icon.skin=M.instance.getItemIcon(this.shopItem.icon)}}};Eh=m([bI("din69PYeRbSapMB2H6E06g")],Eh);var Sh=class extends Laya.Scene{};var{regClass:yI}=Laya,Th=class extends Sh{constructor(){super(...arguments);this.currTab=0;this.type=1;this.selectItemId=-1;this.addL=1;this.price=0;this.isSkReady=!1}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){e&&e.length>1&&(this.type=e[0],this.selectItemId=e[1],this.onClickTab(this.type))}onEnable(){L.intance.on(_.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),L.intance.on(_.EVENT_END_HEROBUY,this,this.onWaitHeroInfoBack),this.btn_recruit.on(Laya.Event.CLICK,this,this.onRecruit),this.btn_reduce.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_reduce]),this.btn_plus.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_plus]),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,[],!1),this.listPanel2.vScrollBarSkin="",this.listPanel2.selectHandler=Laya.Handler.create(this,this.onSelectItem,[],!1),this.img_sk.on(Laya.Event.PLAYED,this,this.stopAni,[2]),this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-X.DESIGN_HEIGHT)/2}async onRecruit(){if(this.shopItem.open==0&&X.Debug==0){ie.instance.notice(f.instance.getLanguage(12));return}this.shopItem.type==1?(this.setChou1Ani("animation"+this.shopItem.icon+"_1"),X.vType>1?await Ke.instance.recruit1(this.shopItem.id):await Ke.instance.recruit(this.shopItem.id)):await Ke.instance.recruitItem(this.shopItem.id,this.addL)}onWaitHeroInfoBack(){this.setChou2Ani("animation"+this.shopItem.icon+"_2"),K.instance.hideLoading()}setTab(e){for(let i=1;i<7;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+"_s.png"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+".png")}async initLuckDrawView(){this.destroyed||(this.type?this.onClickTab(this.type):this.onClickTab(1))}onClickTab(e){if(this.currTab!=e){if(this.setTab(e),this.box_2.visible=!0,e==1){var i=this.getItemByType(1);this.shopItems=i[0],this.listPanel1.array=this.shopItems,this.listPanel1.selectedIndex=-1,this.listPanel1.selectedIndex=i[1],this.listPanel1.visible=!0,this.listPanel2.visible=!1}else if(e==2){var i=this.getItemByType(2);this.shopItems=i[0],this.listPanel2.dataSource=this.shopItems,this.listPanel2.selectedIndex=-1,this.listPanel2.selectedIndex=i[1],this.listPanel2.visible=!0,this.listPanel1.visible=!1}else if(e==3){var i=this.getItemByType(4);this.shopItems=i[0],this.listPanel1.dataSource=this.shopItems,this.listPanel1.selectedIndex=-1,this.listPanel1.selectedIndex=i[1],this.listPanel1.visible=!0,this.listPanel2.visible=!1}}}getItemByType(e){var i=F.intance.m_dicShops.values,r=[],n=-1,o=0;return i.forEach(s=>{s.type==e&&(r.push(s),this.selectItemId!=-1&&s.icon==this.selectItemId&&(n=o,this.selectItemId=-1),o++)}),n==-1&&r.length>0&&(n=0),[r,n]}onSelectItem(e){if(this.shopItem=this.shopItems[e],console.log(this.shopItem),this.shopItem){if(this.tf_name.text=f.instance.getLanguage(this.shopItem.title),this.tf_des.text=f.instance.getLanguage(this.shopItem.des),this.shopItem.cost.length>1)this.img_const.skin=M.instance.getMoneyIcon(this.shopItem.cost[0]),this.addL=1,this.price=Te.formatNumber(this.shopItem.cost[1]);else if(this.shopItem.open==0){ie.instance.notice(f.instance.getLanguage(12));return}this.setPriceByNum();var i=this.shopItem.type;i==1?(this.img_icon.visible=!1,this.img_sk.visible=!0,this.setIdleAni("animation"+this.shopItem.icon+"_0"),this.box_count.visible=!1):i==2?(this.img_icon.skin=M.instance.getItemBigIcon(this.shopItem.icon),this.img_icon.y=60,this.img_icon.visible=!0,this.img_sk.visible=!1,this.box_count.visible=!0):i==4&&(this.img_icon.skin=M.instance.getChestBigIcon(this.shopItem.icon),this.img_icon.y=110,this.img_icon.visible=!0,this.img_sk.visible=!1,this.box_count.visible=!1),this.btn_recruit.visible=!0}else this.tf_name.text="",this.tf_des.text="",this.img_icon.visible=!1,this.img_sk.visible=!1,this.box_count.visible=!1,this.btn_recruit.visible=!1}handleClickBtn(e){switch(e){case this.btn_reduce:this.addL>1&&this.addL--,this.setPriceByNum();break;case this.btn_plus:this.addL<100&&this.addL++,this.setPriceByNum();break}}setPriceByNum(){this.tf_num.text=this.addL+"",this.tf_const.text=Te.filterNumFormat(this.addL*this.price,2,!0)}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}stopAni(e){console.log("stopAni: "+e),this.isSkReady||(this.isSkReady=!0,this.callLater(this.stopSk))}stopSk(){this.img_sk.paused(),this.img_sk.stop()}setIdleAni(e){this.isSkReady?(this.img_sk.play(e,!1),this.img_sk.stop()):this.img_sk.animationName=e}setChou1Ani(e){this.isSkReady?this.img_sk.play(e,!0):this.img_sk.animationName=e}setChou2Ani(e){this.isSkReady?this.img_sk.play(e,!1):this.img_sk.animationName=e,Laya.timer.once(800,this,this.openHeroGetView)}openHeroGetView(){Ue.instance.autoPop=!0,Kt.instance.startShow(),this.setIdleAni("animation"+this.shopItem.icon+"_0")}onDrawBack(e){}startAni(){this.img_sk.paused(),this.img_sk.play(0,!1)}removeEvent(){L.intance.off(_.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),L.intance.off(_.EVENT_END_HEROBUY,this,this.onWaitHeroInfoBack)}};Th=m([yI("IPCUkD5kRse3Gz5tw0Aovw")],Th);var Ch=class extends Laya.Scene{};var{regClass:gI}=Laya,kh=class extends Ch{constructor(){super(...arguments);this.currTab=0;this.currUnionId=1}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){this.currUnionId=e,this.initLuckDrawView()}onEnable(){this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_apply.on(Laya.Event.CLICK,this,this.onApply),this.btn_guild_list.on(Laya.Event.CLICK,this,this.onShowGuildList)}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}onApply(){}onShowGuildList(){be.intance.setCurrentScene(re.M_SCENE_UNION)}async initLuckDrawView(){var e=S.instance.playerDto.union,i=await q.requestPost("wxgame/union/info",{unionId:this.currUnionId}),r=i.unionDto;if(r){var n=F.intance.m_dicUnions.get(this.currUnionId);n.unionLv=r.lv,r.memberNum?n.number=r.memberNum:n.number=r.members.length,this.onSetUnionInfo(n),this.list_room.array=r.members}else ie.instance.notice(f.instance.getLanguage(135))}onSetUnionInfo(e){e?(this.unionIcon.dataSource=e,this.tf_name.text=f.instance.getLanguage(e.name),this.tf_des.text=f.instance.getLanguage(e.declaration),this.tf_name.text=f.instance.getLanguage(e.name),this.tf_lv.text=f.instance.getUILang("LV.")+e.unionLv,this.tf_num.text="<font color='#25ff63'>"+e.number+"</font>/"+e.maxNumber,this.img_lvIcon.skin="res/union1/img_trade_"+(e.unionLv>3?4:e.unionLv)+".png",this.box_show.visible=!0):this.box_show.visible=!1}removeEvent(){}};kh=m([gI("KR8HZN1dSv2Bz_62yIgOrg")],kh);var Ah=class extends Laya.Box{};var{regClass:vI}=Laya,Dh=class extends Ah{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.unionItem=e,this.unionItem&&(this.addEvent(),this.setCurrentOutPut())}set headSkin(e){this.img_head.skin=M.instance.getUnionIcon(e)}async setCurrentOutPut(){if(!this.unionItem)return;let e=this.unionItem.icon;this.img_head.skin=M.instance.getUnionIcon(e)}toDetail(){}};Dh=m([vI("lK37x6YwQ9umJIqReZht4Q")],Dh);var Mh=class extends Laya.Box{};var{regClass:LI}=Laya,Ph=class extends Mh{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_add.on(Laya.Event.CLICK,this,this.onAdd),this.isAddEvent=!0)}async onAdd(){this.unionMemberDto.pid}set dataSource(e){super.dataSource=e,this.unionMemberDto=e,this.unionMemberDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.unionMemberDto.head;this.playerIcon.headSkin=e,this.tf_name.text=this.unionMemberDto.name,this.tf_fightTimes.text=this.unionMemberDto.fightTimes+""}};Ph=m([LI("l73FEB2CRGihzisJBs63MQ")],Ph);var Bh=class extends Laya.Box{};var{regClass:_I}=Laya,Rh=class extends Bh{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.unionItem=e,this.unionItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.unionIcon.dataSource=this.unionItem,this.tf_name.text=f.instance.getLanguage(this.unionItem.name),this.tf_lv.text=f.instance.getUILang("LV.")+this.unionItem.unionLv,this.tf_num.text="<font color='#25ff63'>"+this.unionItem.number+"</font>/"+this.unionItem.maxNumber,this.img_lvBg.skin="res/union1/img_trade_di_"+(this.unionItem.unionLv>3?4:this.unionItem.unionLv)+".png",this.img_lvIcon.skin="res/union1/img_trade_"+(this.unionItem.unionLv>3?4:this.unionItem.unionLv)+".png"}onChange(e){e?this.bg.skin="res/union1/img_trade_bg_2.png":this.bg.skin="res/union1/img_trade_bg_1.png"}};Rh=m([_I("cbbqawzdSI2g161G69xpUg")],Rh);var Nh=class extends Laya.Scene{};var{regClass:wI}=Laya,Oh=class extends Nh{constructor(){super(...arguments);this.currTab=0;this.type=1;this.items=[]}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){this.type=e}onEnable(){this.btn_search.on(Laya.Event.CLICK,this,this.onSearch),this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.list_union.vScrollBarSkin="",this.list_union.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.list_union.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1),this.box_show.visible=!1,this.box_list.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-X.DESIGN_HEIGHT)/2}async initLuckDrawView(){var e=await q.requestPost("wxgame/union/list",{});e?this.unionData=e.unionList:ie.instance.notice(f.instance.getLanguage(135)),this.getItemByName(""),this.box_list.visible=!0}getItemByName(e){if(this.list_union.selectedIndex=-1,this.items=[],this.unionData)for(var i=this.unionData.length,r=0;r<i;r++){var n=this.unionData[r],o=F.intance.m_dicUnions.get(n.id),s=f.instance.getLanguage(o.name);ct.caseInsensitiveSearchWithRegex(s,e)&&(o.unionLv=n.lv,o.number=n.memberNum,this.items.push(o))}this.list_union.array=this.items,this.items.length>0?this.list_union.selectedIndex=0:this.list_union.selectedIndex=-1}onSearch(){var e=this.input_search.text;this.getItemByName(e)}onJoin(){this.currUnionItem&&(S.instance.playerDto.union>0?be.intance.setCurrentScene(re.M_SCENE_MYUNION,this.currUnionItem.id):_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(141),N.CANCEL,Laya.Handler.create(this,this.onJoinSure)))}async onJoinSure(){if(this.currUnionItem){var e=await q.requestPost("wxgame/union/join",{unionId:this.currUnionItem.id}),i=e.unionDto;i?(S.instance.playerDto.union=i.id,be.intance.setCurrentScene(re.M_SCENE_MYUNION,i.id),ie.instance.notice(f.instance.getLanguage(2e3))):ie.instance.notice(f.instance.getLanguage(135))}}onItemRender(e,i){e.onChange(this.list_union.selectedIndex==i)}onSelectItem(e,i){this.currUnionItem=this.items[e],console.log(this.currUnionItem),this.currUnionItem?(this.unionIcon.dataSource=this.currUnionItem,this.tf_name.text=f.instance.getLanguage(this.currUnionItem.name),this.tf_des.text=f.instance.getLanguage(this.currUnionItem.declaration),this.tf_name.text=f.instance.getLanguage(this.currUnionItem.name),this.tf_lv.text=f.instance.getUILang("LV.")+this.currUnionItem.unionLv,this.tf_num.text="<font color='#25ff63'>"+this.currUnionItem.number+"</font>/"+this.currUnionItem.maxNumber,this.img_lvBg.skin="res/union1/img_trade_di_"+(this.currUnionItem.unionLv>3?4:this.currUnionItem.unionLv)+".png",this.img_lvIcon.skin="res/union1/img_trade_"+(this.currUnionItem.unionLv>3?4:this.currUnionItem.unionLv)+".png",S.instance.playerDto.union>0?this.btn_join.label=f.instance.getUILang("Enter"):_e.instance().AlertByType(N.BASEALERTVIEW,f.instance.getLanguage(141),N.CANCEL,Laya.Handler.create(this,this.onJoinSure)),this.box_show.visible=!0):this.box_show.visible=!1}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}removeEvent(){}};Oh=m([wI("VfpfbqXcSQalDIkuosz8Rw")],Oh);var{regClass:xI,property:Jse}=Laya,Js=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.getComponent(Laya.RigidBody).setVelocity({x:0,y:-10})}onTriggerEnter(t,e,i){this.owner.removeSelf()}onUpdate(){this.owner.y<-10&&this.owner.removeSelf()}onDisable(){Laya.Pool.recover("bullet",this.owner)}};Js=m([xI("hIXP-u9_RfeIwPLhNGNjGw")],Js);var{regClass:II,property:ile}=Laya,el=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onClick)}onClick(t){Laya.stage.width=1334,Laya.stage.height=750,Laya.stage.scaleMode=Laya.Stage.SCALE_FIXED_WIDTH,Laya.Scene.open("scenes/Index.ls")}onDisable(){this.owner.off(Laya.Event.MOUSE_DOWN,this)}};el=m([II("DQCudilORvOvMM7hTH8i7w")],el);var{regClass:EI,property:SI}=Laya,va=class extends Laya.Script{constructor(){super();this.level=1}get itemId(){return this._itemId}set itemId(e){this._itemId=e,this.owner.skin="resources/UI/images/bag/"+e+".png"}onEnable(){this._rig=this.owner.getComponent(Laya.RigidBody),this.level=Math.round(Math.random()*5)+1}onUpdate(){}onCollisionEnter(e){console.log("collision: ",e)}onTriggerEnter(e,i,r){var n=this.owner;if(console.log("owener: ",n),e.label==="buttle"&&n.parent){let o=Laya.Pool.getItemByCreateFun("effect",this.createEffect,this);o.pos(n.x,n.y),n.parent.addChild(o),o.play(0,!0),n.removeSelf(),Laya.SoundManager.playSound("resources/sound/destroy.wav")}}createEffect(){let e=new Laya.Animation;e.loadAnimation("resources/ani/TestAni.ani"),e.on(Laya.Event.COMPLETE,null,i);function i(){e.removeSelf(),Laya.Pool.recover("effect",e)}return e}onDisable(){Laya.Pool.recover("dropBox",this.owner)}};m([SI({type:"number"})],va.prototype,"level",2),va=m([EI("3L23NCFLSAieUApqTrVoCQ")],va);var{regClass:TI,property:sle}=Laya,Hr=class extends Laya.Script{constructor(){super();this.touchHeroIds=new le;this.touchGlasses=new le;this.updateIndex=0;this.turnSpeed=1;this.turningSpeed=.1;this.lastDirectionAngle=0}onAwake(){}onEnable(){}onCollisionEnter(e){console.log(this.constructor.name+" onCollisionEnter collision",e)}onCollisionStay(e){console.log(this.constructor.name+" onCollisionStay collision",e)}onCollisionExit(e){console.log(this.constructor.name+" onCollisionExit collision",e)}onTriggerEnter(e,i,r){if(e.label==="ground")console.warn("ground in");else if(e.label&&e.label.startsWith("grass"))this.owner.isMe&&(e.owner.alpha=.7,console.warn("grass in"),this.touchGlasses.set(e.label,!0),this.setMyCurrArea());else if(e.label==="item")this.owner.enterItemId=e.owner.getComponent(va).itemId;else if(e.label==="role"){var n=e.owner.roomPlayerDto.id;if(this.touchHeroIds.set(n,e.owner),this.owner.displacementType==2){var o=O.instance.canAttack(this.owner,e.owner);o&&Laya.Tween.clearAll(this.owner)}}}onTriggerStay(e,i,r){}onTriggerExit(e,i,r){if(e.label==="ground")this.owner.inGround=!1,console.warn("ground exit");else if(e.label&&e.label.startsWith("grass"))this.owner.isMe&&(console.warn("grass out"),e.owner.alpha=1,this.touchGlasses.remove(e.label),this.setMyCurrArea());else if(e.label==="item")this.owner.enterItemId==e.owner.getComponent(va).itemId&&(this.owner.enterItemId=0);else if(e.label==="role"){var n=e.owner.roomPlayerDto.id;this.touchHeroIds.remove(n)}}setMyCurrArea(){this.touchGlasses.keys.length>0?this.owner.currArea=1:this.owner.currArea=0,this.owner.onSendMoveData()}onUpdate(){if(this.owner.isMe)this.owner._isDead||(O.instance.myHeroSpr.currArea>0?this.owner.alpha=.6:this.owner.alpha=1);else{this.owner._isRealDead?O.instance.myHeroSpr._isDead?(this.owner.visible=!0,this.owner.alpha=.5):this.owner.visible=!1:this.owner.currArea>0?O.instance.myHeroSpr.currArea==this.owner.currArea?(this.owner.visible=!0,this.owner.alpha=.6):this.owner.visible=!1:(this.owner.visible=!0,this.owner.alpha=1);return}if(!this.owner.isStop){if(this.owner.speed>0){let e=this.getJoystickDirectionAngle(),i=this.calculateAngleDifference(e,this.lastDirectionAngle);if(Math.abs(i)>10?this.startTurning():this.stopTurning(),this.lastDirectionAngle=e,this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.heroSk.isReady&&this.owner.walk(),this.lastSpeed=this.owner.speed),this.owner.roleDirection>=0){let r=1*this.owner.speed*this.turnSpeed,n=this.owner.roleDirection*(Math.PI/180),o=r*Math.cos(n),s=r*Math.sin(n);this.owner.pos(Math.round(this.owner.x+o),Math.round(this.owner.y+s))}this.owner.inControl&&!this.owner._isDead&&this.touchHeroIds.values.forEach(r=>{var n=O.instance.canTui(this.owner,r);n&&r.beiTui(this.owner.roomPlayerDto.id)})}else this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.idle(),this.lastSpeed=this.owner.speed);this.updateIndex==0&&this.owner.onSendMoveData(),this.updateIndex++,this.updateIndex>0&&(this.updateIndex=0)}}getJoystickDirectionAngle(){return this.owner.roleDirection}calculateAngleDifference(e,i){let r=Math.abs(e-i);return r>180?360-r:r}startTurning(){this.turnSpeed*=this.turningSpeed}stopTurning(){this.turnSpeed=1}onDisable(){}};Hr=m([TI("DknC7B57SZi-09Mz092daQ")],Hr);var{regClass:CI,property:jL}=Laya,La=class extends Laya.Script{constructor(){super();this.createBoxInterval=1e3;this._time=0;this._started=!1;this.updateStop=!1}onEnable(){let e=["resources/UI/images/test/b1.png"];Laya.loader.load(e).then(i=>{this._time=Date.now(),this._gameBox=this.owner.getChildByName("gameBox"),Laya.stage.on(Laya.Event.BLUR,this,()=>{this.updateStop=!0}),Laya.stage.on(Laya.Event.FOCUS,this,()=>{this.updateStop=!1}),Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onStageClick)})}onStart(){let e=this.owner.getChildByName("ground").getComponent(Laya.BoxCollider);e.width=Laya.stage.width}onUpdate(){if(this.updateStop)return;let e=Date.now();e-this._time>this.createBoxInterval&&this._started&&(this._time=e,this.createBox())}createBox(){let e=Laya.Pool.getItemByCreateFun("dropBox",this.dropBox.create,this.dropBox);e.pos(Math.random()*(Laya.stage.width-100),-100),this._gameBox.addChild(e)}onStageClick(e){e.stopPropagation();let i=Laya.Pool.getItemByCreateFun("bullet",this.bullet.create,this.bullet);i.pos(Laya.stage.mouseX,Laya.stage.mouseY),this._gameBox.addChild(i)}startGame(){this._started||(this._started=!0,this.enabled=!0)}stopGame(){this._started=!1,this.enabled=!1,this.createBoxInterval=1e3,this._gameBox.removeChildren()}};m([jL({type:Laya.Prefab})],La.prototype,"dropBox",2),m([jL({type:Laya.Prefab})],La.prototype,"bullet",2),La=m([CI("5iJgbfCiSn6Rc8upAfHtjA")],La);var Hh=class extends Laya.Scene{};var{regClass:kI,property:ble}=Laya,Ur=class extends Hh{constructor(){super();Ur.instance=this}onEnable(){this._control=this.getComponent(La),this.tipLbll.on(Laya.Event.CLICK,this,this.onTipClick)}onTipClick(e){this.tipLbll.visible=!1,this._score=0,this.scoreLbl.text="分数：",this._control.startGame()}addScore(e=1){this._score+=e,this.scoreLbl.text="分数："+this._score,this._control.createBoxInterval>600&&this._score%20==0&&(this._control.createBoxInterval-=20)}stopGame(){this.tipLbll.visible=!0,this.tipLbll.text="游戏结束了，点击屏幕重新开始",this._control.stopGame()}};Ur=m([kI("Y5UkAabiTgWFZQnBL1EpEw")],Ur);var Uh=class extends Laya.Scene{};var{regClass:AI,property:xle}=Laya,tl=class extends Uh{constructor(){super()}onOpened(t){t&&(this.msgLab.x=t.point&&t.point.x?t.point.x:Laya.stage.mouseX-50,this.msgLab.y=t.point&&t.point.y?t.point.y:Laya.stage.mouseY-80,this.msgLab.text=t.text,Laya.Tween.to(this.msgLab,{y:this.msgLab.y-100,alpha:0},1e3,Laya.Ease.linearNone))}};tl=m([AI("9kGOzpbbSOWSAmN0l9VtfQ")],tl);var{regClass:DI,property:jb}=Laya,il=Laya.Browser,qL=Laya.Render,WL=Laya.SpriteUtils,vt=class extends Laya.Script{constructor(){super();vt.instance=this}onEnable(){this.videoBtn.on(Laya.Event.MOUSE_DOWN,this,()=>{this.createElementVideo()})}createElementVideo(){il.window.IframeElementRT=this,this.createScript(),this.createDiv(),this.createIframe("resources/files/video.html?url=layaAir.mp4"),this.setDOMElementInArea(),Laya.stage.on(Laya.Event.RESIZE,this,this.setDOMElementInArea)}setDOMElementInArea(){this.iframeElement!=null&&this.divElement!=null&&(WL.fitDOMElementInArea(this.divElement,this.closeBox,0,0,this.closeBox.width,this.closeBox.height),WL.fitDOMElementInArea(this.iframeElement,this.iframeBox,0,0,this.iframeBox.width,this.iframeBox.height))}createScript(){this.scriptElement=il.document.createElement("script"),il.document.body.appendChild(this.scriptElement),this.scriptElement.innerHTML="function closeVideo(){IframeElementRT.closeVideo() }"}createIframe(e){this.iframeElement=il.createElement("iframe"),il.document.body.appendChild(this.iframeElement),this.iframeElement.style.zIndex=qL.canvas.style.zIndex+998,this.iframeElement.src=e,this.iframeElement.style.margin="0",this.iframeElement.style.scrolling="no",this.iframeElement.style.frameborder="0",this.iframeElement.style.padding="0",this.iframeElement.style.left="0",this.iframeElement.style.top="0px",this.iframeElement.style.position="absolute"}createDiv(){this.divElement=Laya.Browser.createElement("div"),Laya.Browser.document.body.appendChild(this.divElement),this.divElement.innerHTML="<img src='resources/files/x.png' width='60px' height='60px' onclick='closeVideo()'/>",this.divElement.style.zIndex=qL.canvas.style.zIndex+999}closeVideo(){Laya.Browser.document.body.removeChild(this.scriptElement),Laya.Browser.document.body.removeChild(this.iframeElement),Laya.Browser.document.body.removeChild(this.divElement),this.scriptElement=this.iframeElement=this.divElement=null,Laya.stage.off(Laya.Event.RESIZE,this,this.setDOMElementInArea)}};m([jb({type:Laya.Button})],vt.prototype,"videoBtn",2),m([jb({type:Laya.Box})],vt.prototype,"closeBox",2),m([jb({type:Laya.Box})],vt.prototype,"iframeBox",2),vt=m([DI("ZtMxoJHQTWipjGWyGV51jQ")],vt);var Vh=class extends Laya.Scene{};var{regClass:MI,property:kle}=Laya,al=class extends Vh{constructor(){super()}onEnable(){Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),this.tabBindViewStack(),this.topTab.selectedIndex=0,this.item0Tab.selectedIndex=0}onClicked(){let t=this.item2Tab.getChildByName("item2"),e=this.item2Tab.getChildByName("item3"),i=this.item2Tab.getChildByName("item4");t.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1)}),e.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenScene.ls",!1)}),i.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/Dialog.ls",!1,{title:"弹窗的标题",text:"弹窗的具体文本……"})})}tabBindViewStack(){this.topTab.selectHandler=new Laya.Handler(this,t=>{this.tabPage.selectedIndex=t,t==1&&(this.item1Tab.selectedIndex=0),t==2&&(this.item2Tab.selectedIndex=0),t==3&&(this.item3Tab.selectedIndex=0),t==4&&(this.item4Tab.selectedIndex=0),Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),vt.instance.iframeElement&&vt.instance.closeVideo(),t==2&&this.item2Page.selectedIndex==1&&!vt.instance.iframeElement&&vt.instance.createElementVideo()}),this.item0Tab.selectHandler=new Laya.Handler(this,t=>{this.item0Page.selectedIndex=t}),this.item1Tab.selectHandler=new Laya.Handler(this,t=>{this.item1Page.selectedIndex=t,t!==4&&Laya.Physics2D.I?Laya.Physics2D.I.enableDebugDraw=!1:t==4&&Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!0)}),this.item2Tab.selectHandler=new Laya.Handler(this,t=>{switch(this.item2Page.selectedIndex=t,t){case 1:!vt.instance.iframeElement&&vt.instance.createElementVideo();break;case 2:Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1);break;case 3:Laya.loader.load("prefab/uiDemo/page/Win.lh").then(e=>{let i=e.create();this.tabPage.parent.addChild(i)});break;case 4:Laya.loader.load("prefab/uiDemo/page/Dialog.lh").then(e=>{e.create().show()});break}t!==1&&vt.instance.iframeElement&&vt.instance.closeVideo()}),this.item3Tab.selectHandler=new Laya.Handler(this,t=>{this.item3Page.selectedIndex=t}),this.item4Tab.selectHandler=new Laya.Handler(this,t=>{this.item4Page.selectedIndex=t})}onDisable(){}};al=m([MI("gbAKGLFtQ5WL6-NpVocAEA")],al);var{regClass:PI,property:Gh}=Laya,_a=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onAwake(){console.log("创建动画模板"),this.createAniTemplate("moveB"),this.createAniTemplate("moveC"),this.createAniTemplate("moveE"),this.createAniTemplate("moveF"),this.createAniTemplate("moveH"),this.createAniTemplate("moveI"),this.createAniTemplate("moveK"),this.createAniTemplate("moveL"),this.aniSource.play(0,!0,"moveB")}onEnable(){this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.aniSource.play(0,!0,this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.aniSource.play(0,!0,this.selectAni.selectedLabel):this.aniSource.play(0,!1,this.selectAni.selectedLabel)})}createAniTemplate(e,i=8){let r=[];for(let n=0;n<i;n++)r.push("resources/UI/role/atlasAni/139x/"+e+n+".png");Laya.Animation.createFrames(r,e)}onError(e){console.log("加载失败: "+e)}};m([Gh({type:Laya.Button})],_a.prototype,"playAni",2),m([Gh({type:Laya.Button})],_a.prototype,"stopAni",2),m([Gh({type:Laya.ComboBox})],_a.prototype,"selectAni",2),m([Gh({type:Laya.Animation})],_a.prototype,"aniSource",2),_a=m([PI("tmkUlMggQi20FZpy6nC1aw")],_a);var{regClass:BI,property:zh}=Laya,wa=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onEnable(){this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel),this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.playAnimation(this.selectAni.selectedLabel):this.playAnimation(this.selectAni.selectedLabel,!1)})}playAnimation(e,i=!0,r=7){let n=[];for(let o=0;o<r;o++)n.push("resources/UI/role/frameAni/"+e+o+".png");this.aniSource.loadImages(n).play(0,i)}};m([zh({type:Laya.Button})],wa.prototype,"playAni",2),m([zh({type:Laya.Button})],wa.prototype,"stopAni",2),m([zh({type:Laya.ComboBox})],wa.prototype,"selectAni",2),m([zh({type:Laya.Animation})],wa.prototype,"aniSource",2),wa=m([BI("8gw7FS4iT1q8EhdN3sWklQ")],wa);var{regClass:RI,property:Hle}=Laya,KL=Laya.Event,NI=Laya.SpineSkeleton,rl=class extends Laya.Script{constructor(){super(...arguments);this.skinArray=["goblin","goblingirl"];this.skinIndex=0;this.spineAniIndex=6}onEnable(){this.createLayaSpine(),this.createSpine()}createLayaSpine(){this.skeletonNode=this.owner.getChildByName("skeletonNode"),Laya.loader.load("resources/UI/role/spineAni/goblins.sk").then(e=>{this.skeletonAni=e.buildArmature(1),this.skeletonNode.addChild(this.skeletonAni),this.skeletonAni.x=128,this.skeletonAni.y=390,this.spineAniNum=this.skeletonAni.getAnimNum(),this.skeletonAni.play(0,!0),this.changeSkin(),this.skeletonNode.on(KL.CLICK,this,this.changeSkin)})}parseComplete(){}createSpine(){this.spineNode=this.owner.getChildByName("spineNode"),Laya.loader.load("resources/UI/role/spineAni/spineboy-pma.skel",Laya.Loader.SPINE).then(e=>{this.spineAni=new NI,this.spineAni.templet=e,this.spineNode.addChild(this.spineAni),this.spineAni.scale(.3,.3),this.spineAni.pos(220,390),this.spineAniNum=this.spineAni.getAnimNum(),this.spineAni.play(this.spineAniIndex,!0),this.spineNode.on(KL.CLICK,this,this.changeAni)})}spineParseComplete(){}changeAni(){++this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=5),this.spineAni.play(this.spineAniIndex,!0,!0)}changeSkin(){this.skeletonAni.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}};rl=m([RI("qTd2xmRXT4i0Re94qly0Lg")],rl);var{regClass:OI,property:nl}=Laya,YL=Laya.Event,HI=Laya.Point,$i=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new HI;this.angle=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.createMap(),this.sceneWindow.on(YL.MOUSE_UP,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2+26),this.roleAniNode.scale(.6,.6),this.roleAniNode.x=this.lastX=48,this.roleAniNode.y=this.lastY=48,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let e=this._animator.getDefaultState();console.log(e.name),this.createWallMap()}createWallMap(){Laya.loader.load("resources/tiledMap/desert_new.json").then(()=>{let i=Laya.loader.getRes("resources/tiledMap/desert_new.json").data.layers[0].data,r;r=new Array;for(var n=0;n<40;n++){r[n]=new Array;for(var o=0;o<60;o++)i[n*60+o]==30?r[n][o]=1:r[n][o]=0}this.graph=new window.Graph(r),this.opts=[],this.opts.closest=!0,this.opts.heuristic=window.astar.heuristics.diagonal})}mouseUp(e){if(this.isMoving)return;this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let i=this.gameMap.globalToLocal(this.stageMouse);var r=this.graph.grid[Math.ceil(this.roleAniNode.y/32)-1][Math.ceil(this.roleAniNode.x/32)-1],n=this.graph.grid[Math.ceil(i.y/32)-1][Math.ceil(i.x/32)-1];this._everyPath=window.astar.search(this.graph,r,n,{closest:this.opts.closest}),this._everyPath.length>0&&(this.isMoving=!0),Laya.timer.loop(100,this,this.loopfun)}loopfun(){if(this._everyPath.length>0){let e=this._everyPath[0].y*32+16,i=this._everyPath[0].x*32+16;e==this.lastX?i>this.lastY?this.angle=90:this.angle=270:e>this.lastX?this.angle=0:this.angle=180,this.switchAni("run"),this.lastX=e,this.lastY=i,Laya.Tween.to(this.roleAniNode,{x:e,y:i},100),this._everyPath.splice(0,1)}else this.switchAni("stand"),Laya.timer.clear(this,this.loopfun),this.isMoving=!1}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(e=null){this.onLoaded()}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);this._animator.play(i),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}getOrientation(e,i){let r=i.split(","),n=360/r.length;return r[Math.floor(e/n)]}onDisable(){Laya.stage.off(YL.MOUSE_UP,this,this.mouseUp),this.tiledMap&&this.tiledMap.destroy()}};m([nl({type:Laya.Sprite})],$i.prototype,"gameMap",2),m([nl({type:Laya.Prefab})],$i.prototype,"roleAni",2),m([nl({type:"string"})],$i.prototype,"runAniName",2),m([nl({type:"string"})],$i.prototype,"standAniName",2),m([nl({type:Laya.Panel})],$i.prototype,"sceneWindow",2),$i=m([OI("zBb5TGy7Swu5_GpFiGzUng")],$i);var{regClass:UI,property:Fle}=Laya,$L=Laya.Rectangle,Vr=class extends Laya.Script{constructor(){super(...arguments);this._rect1=$L.TEMP;this._rect2=$L.TEMP}rectDetection(e,i){return!(e.x>i.x+i.width||e.x+e.width<i.x||e.y>i.y+i.height||e.y+e.height<i.y)}collisionWith(e,i,r){let n=[];if(r==0){var o=Laya.Point.create(),s=e.width/2,l=e.height/2,c=Laya.Point.create(),u,p;o.x=e.x+s,o.y=e.y+l,u=this.rectToRadius(e.width,e.height)}else if(r==2){var b,x;x=this.arrayToPoint(e)}for(let v=0;v<i.length;v++)if(e!=i[v])switch(r){case 0:c.x=i[v].x+i[v].width/2,c.y=i[v].y+i[v].height/2,p=this.rectToRadius(i[v].width,i[v].height),this.circleDetection(o,c,u+p)&&n.push(i[v]);break;case 1:this.rectDetection(e,i[v])&&n.push(i[v]);break;case 2:e.name==="c1"?(b=this.arrayToPoint(i[v]),this.circleAndPolygonDetection(e,b,i[v])&&n.push(i[v])):i[v].name==="c1"?this.circleAndPolygonDetection(i[v],x,e)&&n.push(i[v]):(b=this.arrayToPoint(i[v]),this.polygonDetection(x,b,e,i[v])&&n.push(i[v]));break}return n}circleAndPolygonDetection(e,i,r){let n=this.getSides(i),o=[],s=Laya.Point.create(),l=Laya.Point.create(),c=e.hitArea._hit._cmds[0].radius,u=this.getNodeCoord(i,r);s.x=e.x+e.hitArea._hit._cmds[0].x,s.y=e.y+e.hitArea._hit._cmds[0].y,l=this.getNearestPoint(s,u),o.push(new Laya.Point(l.x-s.x,l.y-s.y));for(let p=0,b=n.length;p<b;p++)o.push(this.perpendicular(n[p]));for(let p=0,b=o.length;p<b;p++){let x=o[p],v=this.getCircleProjection(s,x,c),y=this.getPolygonProjection(u,x);if(!this.isOverlap(v,y))return!1}return!0}getNearestPoint(e,i){let r=i[0],n=this.getDistance(e,r),o,s;for(let l=1;l<i.length;l++)o=i[l],s=this.getDistance(e,o),s<n&&(n=s,r=o);return r}polygonDetection(e,i,r,n){let o=this.getSides(e).concat(this.getSides(i)),s=[],l=this.getNodeCoord(e,r),c=this.getNodeCoord(i,n);for(let u=0,p=o.length;u<p;u++)s.push(this.perpendicular(o[u]));for(let u=0,p=s.length;u<p;u++){let b=s[u],x=this.getPolygonProjection(l,b),v=this.getPolygonProjection(c,b);if(!this.isOverlap(x,v))return!1}return!0}isOverlap(e,i){let r,n;return r=e.min<i.min?e.min:i.min,n=e.max>i.max?e.max:i.max,e.max-e.min+(i.max-i.min)>=n-r}getNodeCoord(e,i){let r=[];for(let n=0;n<e.length;n++){let o=Laya.Point.create();o.x=e[n].x+i.x+i.hitArea._hit._cmds[0].x,o.y=e[n].y+i.y+i.hitArea._hit._cmds[0].y,r.push(o)}return r}getPolygonProjection(e,i){let r=null,n=null;for(let o=0;o<e.length;o++){let s=this.dotProduct(e[o],i)/this.getLength(i);(r===null||s<r)&&(r=s),(n===null||s>n)&&(n=s)}return{min:r,max:n}}getCircleProjection(e,i,r){let n=this.dotProduct(e,i)/this.getLength(i);return{min:n-r,max:n+r}}rectToRadius(e,i){let r;return e==i?r=e/2:r=Math.sqrt(e*e+i*i)/2,r}circleDetection(e,i,r){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))<=r}circlesCollision(e,i,r,n){let o=this.subtract(e,i),s=this.getCircleProjection(e,o,r),l=this.getCircleProjection(i,o,n);return!!this.isOverlap(s,l)}arrayToPoint(e){let i=[],r=[];if(r=e.hitArea._hit._cmds[0].points,r&&r.length>3)for(let n=0;n<r.length/2;n++)i[n]=Laya.Point.create(),i[n].x=r[n*2],i[n].y=r[n*2+1];return i}perpendicular(e){let i=Laya.Point.create();return i.x=e.y,i.y=-e.x,i}getNormal(e){let i=Math.sqrt(e.x*e.x+e.y*e.y);return new Laya.Point(e.y/i,(0-e.x)/i)}getSides(e){var i=e,r=i.length,n=new Array;if(r>=3){for(var o=1,s=i[0];o<r;o++){let l=i[o];n.push(this.subtract(l,s)),s=l}n.push(this.subtract(i[0],i[r-1]))}return n}getLength(e){return Math.sqrt(e.x*e.x+e.y*e.y)}dotProduct(e,i){return e.x*i.x+e.y*i.y}subtract(e,i){return Laya.Point.create().setTo(e.x-i.x,e.y-i.y)}getDistance(e,i){let r=e.x-i.x,n=e.y-i.y;return Math.sqrt(r*r+n*n)}};Vr=m([UI("naI7Ga3ZQzuwHxZXbiaZEw")],Vr);var Fh=class extends Laya.View{};var{regClass:VI,property:Kle}=Laya,xa=class extends Fh{constructor(){super();this._detectionType=0;this.collisionNodes=null;xa.i=this}onEnable(){this.collisionNodes=[this.c1,this.p1,this.p2],this._script=this.getComponent(Vr),this.detectionType.selectHandler=new Laya.Handler(this,this.onSelected),this.detectionType.selectedIndex=0}onSelected(e){switch(console.log("onSelected:"+e),this._detectionType=e,e){case 0:this.setCircleLine([this.c11,this.p11,this.p22]);break;case 1:this.setRectLine([this.c11,this.p11,this.p22]);break;case 2:this.c11.graphics.clear(),this.p11.graphics.clear(),this.p22.graphics.clear();break}}collisionWith(e){let i;i=this._script.collisionWith(e,this.collisionNodes,this._detectionType),i.length>0?(i.push(e),this.setLineWidth(i)):this.retsetLineWidth()}setLineWidth(e){for(let i=0;i<e.length;i++)e[i]._graphics._cmds[0].lineWidth=3}retsetLineWidth(){for(let e=0;e<this.collisionNodes.length;e++)this.collisionNodes[e]._graphics._cmds[0].lineWidth=0}setCircleLine(e,i=1,r="#1e00fb"){for(let n=0;n<e.length;n++){e[n].graphics.clear();let o=e[n].width/2,s=e[n].height/2,l=this._script.rectToRadius(e[n].width,e[n].height);e[n].graphics.drawCircle(o,s,l,null,r,i)}}setRectLine(e,i=1,r="#1e00fb"){for(let n=0;n<e.length;n++)e[n].graphics.clear(),e[n].graphics.drawRect(e[n].x,e[n].y,e[n].width,e[n].height,null,r,i)}};xa=m([VI("RrGHZH_SROCrF5XxFa05sg")],xa);var{regClass:GI,property:co}=Laya,Gr=Laya.Event,XL=Laya.Point,Pi=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new XL;this.axisPivot=new XL;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1;this.mLastX=0;this.mLastY=0}onEnable(){this.createMap(),this.joystickAxis=this.joystickBG.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(Gr.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(Gr.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(Gr.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(Gr.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.sceneWindow.width/2,this.roleAniNode.y=this.sceneWindow.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let e=this._animator.getDefaultState();console.log(e.name)}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(e=null){this.onLoaded()}mouseDown(e){this.touchId=e.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let e=this.joystickBG.globalToLocal(this.stageMouse),i=e.x-this.joystickAxis.width/2,r=e.y-this.joystickAxis.height/2;this.radian=Math.atan2(r-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,e.x,e.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(e.x-this.joystickAxis.width/2,e.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(e){e.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(e){e.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(e,i){let r=i.split(","),n=360/r.length;return r[Math.floor(e/n)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let e=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;this.mLastX+=e,this.mLastY+=i,this.mLastX<0?this.mLastX=0:this.mLastX>1920-this.sceneWindow.width&&(this.mLastX=1920-this.sceneWindow.width),this.mLastY<0?this.mLastY=0:this.mLastY>1280-this.sceneWindow.height&&(this.mLastY=1280-this.sceneWindow.height),this.tiledMap.moveViewPort(this.mLastX,this.mLastY)}getDistance(e,i,r,n){let o=e-r,s=i-n;return Math.sqrt(o*o+s*s)}onDisable(){Laya.stage.off(Gr.MOUSE_DOWN,this,this.mouseDown),Laya.stage.off(Gr.MOUSE_UP,this,this.mouseUp),Laya.stage.off(Gr.MOUSE_MOVE,this,this.mouseMove),this.tiledMap&&this.tiledMap.destroy()}};m([co(Laya.Sprite)],Pi.prototype,"gameMap",2),m([co(Laya.Prefab)],Pi.prototype,"roleAni",2),m([co({type:"string"})],Pi.prototype,"runAniName",2),m([co({type:"string"})],Pi.prototype,"standAniName",2),m([co({type:Laya.Panel})],Pi.prototype,"sceneWindow",2),m([co(Laya.Image)],Pi.prototype,"joystickBG",2),Pi=m([GI("k2DFVaFIQEyMRaElgOWsVw")],Pi);var jh=class extends Laya.Box{};var{regClass:zI}=Laya,ol=class extends jh{constructor(){super();this.lastIndex=-1}onEnable(){let e="resources/json/bagList.json";Laya.loader.fetch(e,"json").then(i=>{i.bagList&&i.bagList.length>0&&(this.bagList.array=i.bagList,this.bagList.renderHandler=new Laya.Handler(this,this.onListRender),this.bagList.selectHandler=new Laya.Handler(this,this.onListSelect),this.bagList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.bagList.vScrollBarSkin="")})}onListRender(e,i){i>this.bagList.array.length||i<0}onListSelect(e){this.tips.visible=!0,this.bagList.array[e].listItemBG={skin:"resources/UI/images/bg/bg100-1.png"},this.lastIndex!==-1&&(this.bagList.array[this.lastIndex].listItemBG={skin:"resources/UI/images/bg/bg100-0.png"}),this.lastIndex=e,this.itemImg.skin=this.bagList.array[e].listItemImg.skin,this.itemNumber.text="数量 "+this.bagList.array[e].listItemNumber.text,this.itemReadme.text=this.bagList.array[e].readme}onListMouse(e,i){}onDisable(){}};ol=m([zI("fimeRTYXT46eMH6komwhJQ")],ol);var{regClass:FI,property:qb}=Laya,lr=class extends Laya.Script{constructor(){super()}onEnable(){var e=this.getDataSourece();Laya.loader.load("prefab/ComboList.lh").then(i=>{let r=i.create();this.comboList=r,this.comboList.array=e,this.comboList.repeatY=e.length,this.combo2.list=this.comboList,this.combo2.list.width=this.combo2.width,this.combo2.list.hScrollBarSkin="",this.combo2.selectHandler=new Laya.Handler(this,this.onSelected2)}),this.combo1.selectHandler=new Laya.Handler(this,this.onSelected1)}onSelected1(e){this.selectedText.text="您选中了："+this.combo1.selectedLabel}onSelected2(e){this.selectedText.text="您选中了："+(e<0?"":this.comboList.array[e].label)}getDataSourece(){for(var e=[],i=0;i<10;i++)e[i]={optText:{text:"选项"+(i+1)}};return e}onDisable(){}};m([qb({type:Laya.ComboBox})],lr.prototype,"combo1",2),m([qb({type:Laya.ComboBox})],lr.prototype,"combo2",2),m([qb({type:Laya.Label})],lr.prototype,"selectedText",2),lr=m([FI("M6bGyqDSRCGU3TkvNeqvRw")],lr);var qh=class extends Laya.View{};var{regClass:jI}=Laya,sl=class extends qh{onEnable(){this.hList.array=this.getListDataSource(),this.hList.scrollTo(1);let e=this.hList.cells[1].getChildByName("icon");e.scaleX=e.scaleY=2,this.hList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange),this.leftLimit=this.getLeftLimit(),this.rightLimit=this.getRightLimit()}onScrollBarChange(){var e=this.hList.scrollBar.value,i=this.hList.array;if(e>this.leftLimit){var r=i.shift();i[i.length]=r,this.hList.array=i,this.hList.scrollBar.value=e-this.hList.cells[0].width-this.hList.spaceX,this.iconTweenToLeft()}else e<this.rightLimit&&(r=i.pop(),i.unshift(r),this.hList.array=i,this.hList.scrollBar.value=e+this.hList.cells[0].width+this.hList.spaceX,this.iconTweenToRight())}iconTweenToLeft(e=200){let i=this.hList.cells[0].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},e);let r=this.hList.cells[1].getChildByName("icon");r.scaleX=r.scaleY=1,Laya.Tween.to(r,{scaleX:2,scaleY:2},e)}iconTweenToRight(e=200){let i=this.hList.cells[1].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},e);let r=this.hList.cells[2].getChildByName("icon");r.scaleX=r.scaleY=1,Laya.Tween.to(r,{scaleX:2,scaleY:2},e)}getRightLimit(){return this.hList.cells[0].width-this.hList.spaceX}getLeftLimit(){return this.hList.cells[0].width*2+this.hList.spaceX}getListDataSource(e=5){let i=[];for(let r=0;r<e;r++)i[r]={},i[r].icon={skin:`resources/UI/role/r${r}.png`};return i}};sl=m([jI("WFag7yYwR9q-iI31OJUedg")],sl);var{regClass:qI,property:Wh}=Laya,Ia=class extends Laya.Script{constructor(){super();this.optStatus=[];this.timestampFormat=(e,i)=>{let r=i?new Date(i):new Date,n={"M+":r.getMonth()+1,"D+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"S+":r.getMilliseconds()};new RegExp("(Y+)").test(e)&&(e=e.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in n)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==1?n[o]:("00"+n[o]).substr((""+n[o]).length)));return e}}onEnable(){let e="resources/json/mailList.json";Laya.loader.fetch(e,"json").then(i=>{let r=i.mailList;r&&r.length>0&&(this.mailList.array=r,this.mailList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.mailList.repeatY=r.length,this.mailList.vScrollBarSkin=""),this.addMail.on(Laya.Event.CLICK,this,this.addMialItem),this.selectDel.on(Laya.Event.CLICK,this,this.listSelectDel),this.selectFlag.on(Laya.Event.CLICK,this,this.listSelectFlag)})}listSelectFlag(){if(this.optStatus.length>0){for(let e=0;e<this.optStatus.length;e++){let i=this.optStatus[e];this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功标记"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}listSelectDel(){if(this.optStatus.length>0){this.optStatus.sort(function(e,i){return i-e});for(let e=0;e<this.optStatus.length;e++)this.mailList.array.splice(this.optStatus[e],1);this.optStatus=[],this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功删除"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}addMialItem(){var e=this.mailList.startIndex+1;let i={mailTitle:{text:"这里是新增加的邮件"+e},mailDateTime:{text:this.timestampFormat("YYYY-MM-DD hh:mm")},opt:{visible:!1},flagStatus:{skin:"resources/UI/images/comp/img_mail.png"},flagBtn:{label:"标为已读",labelColors:"#000000,#000000,#000000"}};if(this.mailList.array.splice(e,0,i),this.optStatus.length>0)for(let r=0;r<this.optStatus.length;r++)this.optStatus[r]>=e&&(this.optStatus[r]+=1);this.mailList.refresh()}onListMouse(e,i){if(e.type==Laya.Event.CLICK){var r=this.optStatus.indexOf(i);switch(e.target.name){case"optBG":r===-1?(this.mailList.array[i].opt={visible:!0},this.optStatus.push(i)):(this.mailList.array[i].opt={visible:!1},this.optStatus.splice(r,1)),this.mailList.refresh();break;case"mailTitle":Laya.Scene.open("scenes/uiDemo/Dialog.scene",!1,{title:this.mailList.array[i].mailTitle.text,text:"邮件内容，此处省略1000字……………………"}),this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"},this.mailList.refresh();break;case"flagBtn":this.mailList.array[i].flag===1?(this.mailList.array[i].flag=0,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail.png"},this.mailList.array[i].flagBtn={label:"标为已读",labelColors:"#000000,#000000,#000000"}):(this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}),this.mailList.refresh();break;case"delBtn":if(this.mailList.array.splice(i,1),r>-1){this.optStatus.splice(r,1);for(let n=r;n<this.optStatus.length;n++)this.optStatus[n]-=1}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"删除成功"});break}}}};m([Wh({type:Laya.List})],Ia.prototype,"mailList",2),m([Wh({type:Laya.Button})],Ia.prototype,"addMail",2),m([Wh({type:Laya.Button})],Ia.prototype,"selectDel",2),m([Wh({type:Laya.Button})],Ia.prototype,"selectFlag",2),Ia=m([qI("HzpJPDUEQN69Xg1VasHb-w")],Ia);var{regClass:WI,property:uo}=Laya,Bi=class extends Laya.Script{constructor(){super();this.scrollBarIsStop=!1;this.msgIdNow=1;this.itemIsOpen=!1;this.itemOpenId=-1;this.redHotStatus=[];this.mouseDown=!1}onEnable(){this.refreshList.array=this.createListData(9),this.refreshList.repeatY=this.refreshList.array.length,this.refreshList.vScrollBarSkin="",this.toLine.on(Laya.Event.CLICK,this,this.onToLineBtn),this.toTop.on(Laya.Event.CLICK,this,this.onToTopBtn),this.toBottom.on(Laya.Event.CLICK,this,this.onToBottomBtn),this.refreshList.on(Laya.Event.MOUSE_UP,this,this.stageOnMouseUp),this.refreshList.on(Laya.Event.MOUSE_OUT,this,this.stageOnMouseUp),this.refreshList.scrollBar.stopMoveLimit=this.scrollBarIsStopBind.bind(this),this.refreshLimit("dragTopLimit",80),this.refreshLimit("dragBottomLimit",80,20),this.refreshList.mouseHandler=new Laya.Handler(this,this.onListMouse)}stageOnMouseUp(){this.mouseDown=!1}refreshLimit(e,i,r=0,n=2e3){e==="dragTopLimit"?this.refreshList.scrollBar.topMoveLimit=i:e==="dragBottomLimit"&&(this.refreshList.scrollBar.bottomMoveLimit=i),this.refreshList.scrollBar.on(e,this,()=>{if(console.log("达到了滚动限制:"+e),this.refreshLoading.visible=!0,e==="dragTopLimit"){this.refreshLoading.bottom=NaN,this.refreshLoading.top=r;var o=this.createListData(5,"顶部新增的标题");o=o.concat(this.refreshList.array);var s=0+5,l=0;if(this.redHotStatus.length>0)for(let c=0;c<this.redHotStatus.length;c++)this.redHotStatus[c]+=5}else if(e==="dragBottomLimit"){this.refreshList.scrollBar.disableDrag=!0,this.refreshLoading.top=NaN,this.refreshLoading.bottom=r;var o=this.createListData(5,"底部新增的标题");o=this.refreshList.array.concat(o);var s=this.refreshList.array.length-1,l=s+5}this.scrollBarIsStop=!0,Laya.timer.once(n,this,()=>{this.refreshList.array=o,this.refreshList.scrollTo(l),this.refreshList.selectedIndex=s,this.scrollBarIsStop=!1,this.refreshList.scrollBar.backToNormal(),this.refreshLoading.visible=!1})})}onListMouse(e,i){e.type==Laya.Event.MOUSE_DOWN&&(this.mouseDown=!0,this.itemIsOpen?(this.itemIsOpen=!1,this.itemOpenId=-1,Laya.Tween.to(this.openedItem,{x:0},500,null,Laya.Handler.create(this,()=>{this.refreshList.scrollBar.disableDrag=!1}))):(this.moveLastPos=e.target.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),e.target.on(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove,[e.target,i]))),e.type==Laya.Event.MOUSE_UP&&(this.mouseDown=!1,this.itemOnMouseUp()),e.type==Laya.Event.CLICK&&(e.target.name=="flag"&&this.onClickFlag(i),e.target.name=="del"&&this.onClickDel(i))}itemOnMouseUp(){if(this.itemIsOpen){var e;this.openedItem.x<-80?e=-262:(this.itemIsOpen=!1,e=0),e!==this.openedItem.x&&Laya.Tween.to(this.openedItem,{x:e},500),this.refreshList.scrollBar.disableDrag=!1,this.itemOpenId!==-1&&(this.openedItem.off(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove),this.itemOpenId=-1)}}onClickFlag(e){var i=this.redHotStatus.indexOf(e);i==-1?(this.refreshList.array[e].avatar={},this.refreshList.array[e].avatar.redHot={visible:!0},this.refreshList.array[e].flag={flagText:{text:"标记已读"}},this.redHotStatus.push(e)):(this.refreshList.array[e].avatar={redHot:{visible:!1}},this.refreshList.array[e].flag={flagText:{text:"标记未读"}},this.redHotStatus.splice(i,1)),this.refreshList.refresh()}onClickDel(e){this.refreshList.array.splice(e,1),this.itemOpenId=-1;var i=this.redHotStatus.indexOf(e);if(i>-1&&this.redHotStatus.splice(e,1),this.redHotStatus.length>0)for(let r=0;r<this.redHotStatus.length;r++)this.redHotStatus[r]>e&&(this.redHotStatus[r]+=1);this.refreshList.refresh()}onItemBoxMouseMove(e,i){if(this.mouseDown){let r=e.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),n=this.moveLastPos.x-r.x,o=this.moveLastPos.y-r.y;Math.abs(n)>Math.abs(o)&&!this.itemIsOpen&&(this.openedItem=e,this.itemIsOpen=!0,this.refreshList.scrollBar.disableDrag=!0,this.itemOpenId=i),this.itemIsOpen&&(this.openedItem.x-=n,this.openedItem.x<-262?this.openedItem.x=-262:this.openedItem.x>0&&(this.openedItem.x=0))}else this.refreshList.scrollBar.disableDrag=!1}scrollBarIsStopBind(){return this.scrollBarIsStop}onToLineBtn(){let e=parseInt(this.lineNumber.text)-1;this.refreshList.scrollTo(e),e<this.refreshList.array.length&&(this.refreshList.selectedIndex=e)}onToTopBtn(){this.refreshList.scrollTo(0),this.refreshList.selectedIndex=0}onToBottomBtn(){let e=this.refreshList.array.length-1;this.refreshList.scrollTo(e),this.refreshList.selectedIndex=e}createListData(e=5,i="初始测试标题"){let r=new Date,n=r.getHours()<10?"0"+r.getHours():""+r.getHours(),o=r.getMinutes()<10?"0"+r.getMinutes():""+r.getMinutes();for(var s=[],l=0;l<e;l++){let c={text:n+" : "+o};s[l]={},s[l].msgTime=c,s[l].msgTitle={text:i+(this.msgIdNow+l)},s[l].avatar={redHot:{visible:!1}}}return this.msgIdNow+=l,s}onDisable(){}};m([uo({type:Laya.List})],Bi.prototype,"refreshList",2),m([uo({type:Laya.Button})],Bi.prototype,"toLine",2),m([uo({type:Laya.Button})],Bi.prototype,"toTop",2),m([uo({type:Laya.Button})],Bi.prototype,"toBottom",2),m([uo({type:Laya.Box})],Bi.prototype,"refreshLoading",2),m([uo({type:Laya.Label})],Bi.prototype,"lineNumber",2),Bi=m([WI("m0TR8w0gTbWSvHbZTzrORA")],Bi);var Kh=class extends Laya.View{};var{regClass:KI,property:bce}=Laya,ll=class extends Kh{onEnable(){this.tree1.xml=this.getTreeData(!0),this.tree2.xml=this.getTreeData(!1)}getTreeData(t){let e="<data>";if(t)e+="<dir itemLabel='一级目录一' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><dir itemLabel='一级目录二' isOpen='true'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/></dir><dir itemLabel='一级目录三' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><file itemLabel='一级子项1 '/><file itemLabel='一级子项2 '/>";else for(let i=0;i<5;i++){e+="<item title='目录"+(i+1)+"' isOpen='true'>";for(let r=0;r<5;r++)e+="<subpage title='子项标题"+(r+1)+"' />";e+="</item>"}return e+="</data>",new Laya.XML(e)}};ll=m([KI("GJWtWFwsQoqNpjA1k42SpQ")],ll);var Yh=class extends Laya.Scene{};var{regClass:YI,property:_ce}=Laya,cl=class extends Yh{onEnable(){}onDisable(){}};cl=m([YI("JQ1fkq03ThewqQWRXQPgmw")],cl);var{regClass:$I,property:Ice}=Laya,zr=class extends Laya.Script{constructor(){super()}baseUI(e){this.window=e,this.searchCloseButton(e)}searchCloseButton(e){for(let i=0;i<e.numChildren;i++){let r=e.getChildAt(i);r instanceof Laya.Button&&r.name=="closeBtn"?(r.on(Laya.Event.MOUSE_DOWN,this,()=>{this.window.close()}),console.log("baseUI 发现closeBtn，统一添加关闭事件")):this.searchCloseButton(r)}}onDisable(){}};zr=m([$I("7Fkz4T7JQ5ujwNcIx9lGNA")],zr);var{regClass:XI,property:Tce}=Laya,ul=class extends zr{constructor(){super()}onEnable(){this.ui=this.owner,this.baseUI(this.ui)}onDisable(){}};ul=m([XI("utN7JQs_T3iw6KqWT-beFQ")],ul);var $h=class extends Laya.Box{};var{regClass:QI,property:Mce}=Laya,QL=Laya.Event,ZL=Laya.Mouse,pl=class extends $h{constructor(){super()}onEnable(){Laya.Browser.onPC?(this.panel.on(QL.MOUSE_OVER,this,()=>{ZL.cursor="move"}),this.panel.on(QL.MOUSE_OUT,this,()=>{ZL.cursor="auto"})):this.topLab.text="背景可拖拽，双指缩放改变大小"}};pl=m([QI("9s1SW9WKRrSodo6JY27VSw")],pl);var{regClass:ZI,property:Xh}=Laya,Ea=class extends Laya.Script{constructor(){super()}onEnable(){this.graphics=this.graphicsSprite.graphics,Laya.timer.loop(2e3,this,()=>{this.changeImgSkin(),this.changeSpriteTexture(),this.changeFillTexture(),this.changeTexture()})}changeImgSkin(){this.Img.skin=this.randomImg()}changeSpriteTexture(){this.spImg.loadImage(this.randomImg(!0,6,5))}changeFillTexture(){this.graphics.clear();let e=this.randomImg(!0,4);Laya.loader.load(e).then(i=>{this.graphics.fillTexture(i,0,0,1,1)})}changeTexture(){this.textureImg.graphics.clear();let e=Laya.loader.getRes(this.randomImg(!0,8));this.textureImg.graphics.drawTexture(e)}randomImg(e=!1,i=8,r=1){let n=Math.floor(Math.random()*(i-r+1))+r;return e?"resources/UI/role/m"+n+".png":"resources/UI/role/w"+n+".png"}onDisable(){}};m([Xh({type:Laya.Image})],Ea.prototype,"Img",2),m([Xh({type:Laya.Sprite})],Ea.prototype,"spImg",2),m([Xh({type:Laya.Sprite})],Ea.prototype,"graphicsSprite",2),m([Xh({type:Laya.Sprite})],Ea.prototype,"textureImg",2),Ea=m([ZI("ulgCMWfCQKiihSJynpbJFg")],Ea);var Qh=class extends Laya.View{};var{regClass:JI,property:Uce}=Laya,Zh=Laya.Event,ml=class extends Qh{onEnable(){this._hitArea.on(Zh.MOUSE_DOWN,this,()=>{this._hitArea.off(Zh.MOUSE_MOVE,this,this.bg3MaskMove),this._hitArea.startDrag(),this._hitArea.on(Zh.MOUSE_MOVE,this,this.bg3MaskMove)}),this._mask.on(Zh.MOUSE_MOVE,this,this.maskMove)}bg3MaskMove(t){t.stopPropagation(),this.bg3Mask.x=this._hitArea.x,this.bg3Mask.y=this._hitArea.y}maskMove(){let t=this.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),e=t.x-this._mask.width/this.bg2.scaleX/2,i=t.y-this._mask.height/this.bg2.scaleY/2;e>80&&i>80&&(this._mask.x=t.x-this._mask.width/this.bg2.scaleX/2,this._mask.y=t.y-this._mask.height/this.bg2.scaleY/2,this.bg2.x=(-t.x-this._mask.width/2)*(this.bg2.scaleX-1),this.bg2.y=(-t.y-this._mask.height/2)*(this.bg2.scaleY-1))}};ml=m([JI("zt0rBsEST9KVJgcimd7SFA")],ml);var{regClass:eE,property:Fr}=Laya,Li=class extends Laya.Script{constructor(){super()}onEnable(){this.changeMouseCursor(),this.throughTab.selectHandler=new Laya.Handler(this,this.onSwitchTab)}onSwitchTab(e){switch(e){case 0:this.leftBg.hitTestPrior=!0,this.rightBg.hitTestPrior=!0;break;case 1:this.leftBg.hitTestPrior=!1,this.rightBg.hitTestPrior=!1;break}}changeMouseCursor(){this.leftBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.leftBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.rightBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.rightBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.leftBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧的可点击区域",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.leftBg.name)}),this.rightBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧的可点击区域",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.rightBg.name)}),this.btn1.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮1"}),console.log("click btn1")}),this.btn2.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮2"}),console.log("click btn2")}),this.close1.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧关闭按钮",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.close1.name)}),this.close2.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧关闭按钮",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.close2.name)})}onDisable(){}};m([Fr({type:Laya.Tab})],Li.prototype,"throughTab",2),m([Fr({type:Laya.Sprite})],Li.prototype,"leftBg",2),m([Fr({type:Laya.Sprite})],Li.prototype,"rightBg",2),m([Fr({type:Laya.Button})],Li.prototype,"btn1",2),m([Fr({type:Laya.Button})],Li.prototype,"btn2",2),m([Fr({type:Laya.Sprite})],Li.prototype,"close1",2),m([Fr({type:Laya.Sprite})],Li.prototype,"close2",2),Li=m([eE("AmLUThtNSaW6zL9W205gyg")],Li);var{regClass:tE,property:Jh}=Laya,Sa=class extends Laya.Script{onEnable(){this.bTop.getComponent(Laya.BoxCollider).width=this.bTop.width,this.bBottom.getComponent(Laya.BoxCollider).width=this.bBottom.width,this.bRight.getComponent(Laya.BoxCollider).height=this.bRight.height,this.bLeft.getComponent(Laya.BoxCollider).height=this.bLeft.height}};m([Jh({type:Laya.Image})],Sa.prototype,"bTop",2),m([Jh({type:Laya.Image})],Sa.prototype,"bBottom",2),m([Jh({type:Laya.Image})],Sa.prototype,"bRight",2),m([Jh({type:Laya.Image})],Sa.prototype,"bLeft",2),Sa=m([tE("jp5l8WZtQLuVyfU4ljEFyQ")],Sa);var ef=class extends Laya.View{};var{regClass:iE,property:$ce}=Laya,dl=class extends ef{onEnable(){this.testProgress()}testProgress(){this.loading2.value=.01,this.loadText.text="资源加载中……",Laya.timer.loop(100,this,this.changeProgress)}changeProgress(){this.loading2.value+=.05,this.loading2.value==1&&(this.loadText.text="资源加载完成",Laya.timer.clear(this,this.changeProgress),Laya.timer.once(3e3,this,()=>{this.testProgress()}))}};dl=m([iE("9w97n2rXRjiACN_vzizQPw")],dl);var{regClass:aE,property:Zce}=Laya,cr=class extends Laya.Script{constructor(){super()}onStart(){this._anim=this.owner.getComponent(Laya.Animator)}isPlayanimaByName(e=0){let i=this._anim.getControllerLayer(e);if(i==null)return!1;let r=i.getCurrentPlayState();return r==null?!1:r.animatorState.clip.islooping?!0:r._finish}isSameByName(e,i=0){let r=this._anim.getControllerLayer(i);if(r==null)return!1;let n=r.getCurrentPlayState();if(n==null)return!1;if(n.animatorState.name==e)return!0}playAnim(e,i=!1){if(i){if(this.isSameByName(e))return;this._anim.play(e,0,0);return}this.isPlayanimaByName()||this._anim.play(e,0,0)}};cr=m([aE("q0uAMn-DTUm70T4fGtxGlw")],cr);var at=Laya.InputManager,{regClass:rE,property:oue}=Laya,hl=class extends Laya.Script{constructor(){super(...arguments);this.currRockerBar=null;this.maxDistance=80;this.isMouseDown=!1;this.mouseDownPosition=new Laya.Point;this._currentMouse=new Laya.Point;this.initRockerBarPosition=new Laya.Point;this.key1Pressed=!1;this.key2Pressed=!1;this.key3Pressed=!1;this.key4Pressed=!1;this.key5Pressed=!1;this.key6Pressed=!1;this.directionOffset=0;this.isKeyRun=!1}onEnable(){Laya.InputManager.multiTouchEnabled=!0}onStart(){this.currRockerBar=this.owner.getChildByName("freebar"),this.img_freebar_arrow=this.owner.getChildByName("img_freebar_arrow"),this.freetrack=this.owner.getChildByName("freetrack"),this.img_arrow_left=this.freetrack.getChildByName("img_arrow_left"),this.img_arrow_right=this.freetrack.getChildByName("img_arrow_right"),this.img_arrow_up=this.freetrack.getChildByName("img_arrow_up"),this.img_arrow_down=this.freetrack.getChildByName("img_arrow_down"),this.img_freebar_arrow.visible=!1,Laya.Browser.onPC?this.freetrack.visible=!0:this.img_arrow_left.visible=this.img_arrow_right.visible=this.img_arrow_up.visible=this.img_arrow_down.visible=!1,this.initialise()}initialise(){this.initRockerBarPosition.setTo(this.currRockerBar.x,this.currRockerBar.y),this.currRockerBar.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onMouseUp)}onSkillKeyDown(e,i,r){switch(e.stopPropagation(),i){case 1:this.key1Pressed=r;break;case 2:this.key2Pressed=r;break;case 3:this.key3Pressed=r;break}}onMouseDown(e){Q.instance.stopAll||(e.stopPropagation(),this.isMouseDown=!0,this.currRockerBar.selected=!0,Laya.Browser.onPC||(this.freetrack.visible=!0),this.mouseDownPosition.setTo(this.owner.mouseX,this.owner.mouseY),console.log("onMouseDown this.owner.mouse: ",this.owner.mouseX,this.owner.mouseY),this.isKeyRun=!1,this.touchId=e.touchId)}onMouseUp(e){this.isMouseDown&&this.endClick(e)}endClick(e){this.isMouseDown=!1,this.currRockerBar.x=this.initRockerBarPosition.x,this.currRockerBar.y=this.initRockerBarPosition.y,this.currRockerBar.selected=!1,this.setDir(-4)}onMouseMove(e){if(!this.isMouseDown||!this.currRockerBar)return;e.stopPropagation(),this._currentMouse.setTo(e.stageX,e.stageY);let i=this.owner.globalToLocal(this._currentMouse,!1),r=i.x-this.mouseDownPosition.x,n=i.y-this.mouseDownPosition.y;if(Math.sqrt(r**2+n**2)<this.maxDistance)this.currRockerBar.x=this.initRockerBarPosition.x+r,this.currRockerBar.y=this.initRockerBarPosition.y+n;else{let s=Math.atan2(r,n);this.currRockerBar.x=Math.sin(s)*this.maxDistance+this.initRockerBarPosition.x,this.currRockerBar.y=Math.cos(s)*this.maxDistance+this.initRockerBarPosition.y}if(Math.abs(r)>this.directionOffset||Math.abs(n)>this.directionOffset){let s=St.judgePosition(r,n);this.setDir(s)}}onUpdate(){Q.instance.stopAll||this.getKeyboardPressed()}setDir(e){if(this.lastDirection!=e&&(O.instance.setMyHeroDirection(e),this.lastDirection=e),e==-4)this.img_freebar_arrow.visible=!1;else{this.img_freebar_arrow.visible=!0;let i=e+90;this.img_freebar_arrow.rotation=i}}getKeyboardPressed(){if(at.hasKeyDown(Laya.Keyboard.W)&&at.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(225)):at.hasKeyDown(Laya.Keyboard.W)&&at.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(315)):at.hasKeyDown(Laya.Keyboard.S)&&at.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(135)):at.hasKeyDown(Laya.Keyboard.S)&&at.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(45)):at.hasKeyDown(Laya.Keyboard.W)?(this.isKeyRun=!0,this.setDir(270)):at.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(0)):at.hasKeyDown(Laya.Keyboard.S)?(this.isKeyRun=!0,this.setDir(90)):at.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(180)):this.isKeyRun&&this.setDir(-4),at.hasKeyDown(Laya.Keyboard.H)||at.hasKeyDown(Laya.Keyboard.NUMPAD_1)){if(this.key1Pressed)return;this.key1Pressed=!0,L.intance.event(_.EVENT_CLICK_NUM,1),Laya.timer.once(500,this,this.notKey1Pressed)}if(at.hasKeyDown(Laya.Keyboard.J)||at.hasKeyDown(Laya.Keyboard.NUMPAD_2)){if(this.key2Pressed)return;this.key2Pressed=!0,L.intance.event(_.EVENT_CLICK_NUM,2),Laya.timer.once(500,this,this.notKey2Pressed)}if(at.hasKeyDown(Laya.Keyboard.K)||at.hasKeyDown(Laya.Keyboard.NUMPAD_3)){if(this.key3Pressed)return;this.key3Pressed=!0,L.intance.event(_.EVENT_CLICK_NUM,3),Laya.timer.once(500,this,this.notKey3Pressed)}if(at.hasKeyDown(Laya.Keyboard.L)||at.hasKeyDown(Laya.Keyboard.NUMPAD_4)){if(this.key4Pressed)return;this.key4Pressed=!0,L.intance.event(_.EVENT_CLICK_NUM,4),Laya.timer.once(500,this,this.notKey4Pressed)}if(at.hasKeyDown(Laya.Keyboard.M)||at.hasKeyDown(Laya.Keyboard.NUMPAD_5)){if(this.key5Pressed)return;this.key5Pressed=!0,L.intance.event(_.EVENT_CLICK_NUM,5),Laya.timer.once(500,this,this.notKey5Pressed)}if(at.hasKeyDown(Laya.Keyboard.N)||at.hasKeyDown(Laya.Keyboard.NUMPAD_6)){if(this.key6Pressed)return;this.key6Pressed=!0,L.intance.event(_.EVENT_CLICK_NUM,6),Laya.timer.once(500,this,this.notKey6Pressed)}}notKey1Pressed(){this.key1Pressed=!1}notKey2Pressed(){this.key2Pressed=!1}notKey3Pressed(){this.key3Pressed=!1}notKey4Pressed(){this.key4Pressed=!1}notKey5Pressed(){this.key5Pressed=!1}notKey6Pressed(){this.key6Pressed=!1}getKeyPressed(e){var i=e.toParentPoint(new Laya.Point(e.x,e.y));return i.x>e.x&&i.x<e.x+e.width&&i.y>e.y&&i.y<e.y+e.height}getDistance(e,i,r,n){let o=e-r,s=i-n;return Math.sqrt(o*o+s*s)}onDisable(){Laya.InputManager.multiTouchEnabled=!1}};hl=m([rE("7cTqWb35RwygSkuWy4QkgQ")],hl);var po=class{static playSkillEffect(t,e,i){var r=["Attack01","Attack02","Attack03","Attack04"],n=r[e];Laya.Sprite3D.load(t,Laya.Handler.create(null,function(o){i.addChild(o);var s=o.getChildByName(n);s.active=!0;var l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play(),setTimeout(()=>{o.removeSelf()},1e3)}))}static playEnemyHurtSkillEffect(t,e){Laya.Sprite3D.load(t,Laya.Handler.create(null,function(i){e.addChild(i);var r="Attack",n=i.getChildByName(r),o=n.getComponent(Laya.ShurikenParticleRenderer);if(o._particleSystem.play(),n.numChildren>0)for(let c=0;c<n.numChildren;c++){var s=n.getChildAt(c),l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}static playNormalEffect(t,e){Laya.Sprite3D.load(t,Laya.Handler.create(null,function(i){e.addChild(i);var r=i,n=r.getComponent(Laya.ShurikenParticleRenderer);if(n._particleSystem.play(),r.numChildren>0)for(let l=0;l<r.numChildren;l++){var o=r.getChildAt(l),s=o.getComponent(Laya.ShurikenParticleRenderer);s._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}};var{regClass:nE,property:JL}=Laya,jr=class extends Laya.Script{constructor(){super();this.followTarget=null;this.speed=.02;this.mLife=5;this.mIsEnd=!1;this.mIsAttack=!1;this.mIsAttackStart=!1;this.mCanPlayFirst=!0;this.mAttackDelayTime=0;this.mCurrentIndex=0;this.followTarget=O.instance.getCurrentHero()}onUpdate(){if(!this.mIsEnd){this.followTarget==null&&(this.followTarget=O.instance.getCurrentHero());var e=new Laya.Vector3(this.followTarget.transform.position.x,0,this.followTarget.transform.position.z),i=new Laya.Vector3(this.owner.transform.position.x,0,this.owner.transform.position.z),r=Laya.Vector3.distance(e,i);if(r<10)if(r<=1)this.mIsAttack?this.isAttackendByPlayer():(this.mCanPlayFirst?(this.mCanPlayFirst=!1,this.attackPlayer()):(this.mAttackDelayTime=this.mAttackDelayTime+Laya.timer.delta,this.mAttackDelayTime>1e3&&(this.mAttackDelayTime=0,this.attackPlayer())),this.mIsAttackStart=!1),O.instance.insertValidList(this.owner);else{this.mAttackDelayTime=0;var n=new Laya.Vector3;Laya.Vector3.subtract(e,i,n),Laya.Vector3.normalize(n,n),this.owner.transform.lookAt(e,Laya.Vector3.Up);var o=this.owner.transform.position;o.vadd(new Laya.Vector3(n.x*this.speed,0,n.z*this.speed),o),this.owner.transform.position=o,this.anim&&this.anim.playAnim("run",!0),this.mCanPlayFirst=!0,this.mIsAttackStart=!1,this.mIsAttack=!1}else this.anim&&this.anim.playAnim("ldle",!0),O.instance.removeValidListByValue(this.owner);this.mLife<=0&&(this.mIsEnd=!0,this.anim&&this.anim.playAnim("die",!0),setTimeout(()=>{O.instance.removeValidListByValue(this.owner),this.owner.removeSelf();var s=O.instance.getCurrentPlane(),l=this.mCurrentIndex;O.instance.createEnemy(s.getChildAt(l),l)},600))}}setCurrentIndex(e){this.mCurrentIndex=e}setLife(e){this.mLife=e}attackPlayer(){po.playEnemyHurtSkillEffect("resources/prefab/eff_monster.lh",this.owner.getChildAt(0)),O.instance.playSound(2),this.anim&&this.anim.playAnim("attack",!0),setTimeout(()=>{this.mIsEnd||this.anim&&this.anim.playAnim("ldle",!0)},500)}isAttackendByPlayer(){this.mIsAttackStart||(this.anim&&this.anim.playAnim("shouji",!0),po.playNormalEffect("resources/prefab/eff_shouji.lh",this.owner.getChildAt(0)),setTimeout(()=>{this.mIsEnd||(this.anim&&this.anim.playAnim("shouji",!0),this.mIsAttack=!1)},500),this.mIsAttackStart=!0)}getLife(){return this.mLife}setIsAttack(e){this.mIsAttack=e}};m([JL({type:cr})],jr.prototype,"anim",2),m([JL({type:"number"})],jr.prototype,"speed",2),jr=m([nE("eWO-rqURQ6ag7phXtJPZCA")],jr);var{regClass:oE,property:fl}=Laya,Xi=class extends Laya.Script{constructor(){super();this.animname="";this.force=!1;this.isBig=!1;this.isCanClick=!0}onStart(){L.intance.on(_.EVENT_CLICK_NUM3,this,this.onMouseClick)}onMouseClick(e){this.isCanClick&&(Laya.Tween.to(this.btn_pic,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this.btn_pic,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)})),O.instance.myHeroSpr.getComponent(Hr).catchItem(),O.instance.playSound(1),this.anim1&&(this.anim1.playAnim(this.animname,this.force),setTimeout(()=>{this.anim1.playAnim("idle",this.force),this.isCanClick=!0},500)))}onDestroy(){L.intance.offAllCaller(this)}};m([fl({type:cr})],Xi.prototype,"anim1",2),m([fl({type:"string"})],Xi.prototype,"animname",2),m([fl({type:"boolean"})],Xi.prototype,"force",2),m([fl({type:"boolean"})],Xi.prototype,"isBig",2),m([fl({type:Laya.Sprite})],Xi.prototype,"btn_pic",2),Xi=m([oE("xovkzdhOSuOc_JJKi_7s2g")],Xi);var{regClass:sE,property:e0}=Laya,qr=class extends Laya.Script{constructor(){super();this.isBig=!1;this.isCanClick=!0}onStart(){L.intance.on(_.EVENT_CLICK_NUM,this,this.onNumberClick)}onNumberClick(e){e==1?this.isBig||this.onMouseClick(null):this.isBig&&this.onMouseClick(null)}onMouseClick(e){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=O.instance.getValidList();Laya.Tween.to(this,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)}));var r=0;this.isBig?(O.instance.myHeroSpr.attack(),O.instance.playSound(3)):(O.instance.myHeroSpr.attack(),O.instance.playSound(1)),setTimeout(()=>{this.isCanClick=!0},500)}}getDistance(e,i){return Math.sqrt(e*e+i*i)}getDistanceByPoint(e,i,r,n){let o=e-r,s=i-n;return Math.sqrt(o*o+s*s)}onDestroy(){L.intance.offAllCaller(this)}};m([e0({type:"boolean"})],qr.prototype,"isBig",2),m([e0({type:Laya.Sprite})],qr.prototype,"btn_pic",2),qr=m([sE("ye1w48wgTbqktuLPDOjmkw")],qr);var{regClass:lE,property:Tue}=Laya,bl=class extends Laya.Script{constructor(){super(...arguments);this.maxX=0;this.minX=-90;this.maxY=0;this.minY=-580;this.scaleSize=.1;this.lastDistance=0;this.startedSingleTouchDrag=!1}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),this.onMouseWheel()}onMouseWheel(){this.owner.on(Laya.Event.MOUSE_WHEEL,this,e=>{let i=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY));e.delta>0&&(this.owner.scaleX+=this.scaleSize,this.owner.scaleY+=this.scaleSize),e.delta<0&&(this.owner.scaleX-=this.scaleSize,this.owner.scaleY-=this.scaleSize,this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1));let r=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),n=(r.x-i.x)*this.owner.scaleX,o=(r.y-i.y)*this.owner.scaleY;n+=this.owner.x,o+=this.owner.y,this.updateLimit(),n>this.maxX?this.owner.x=this.maxX:n<this.minX?this.owner.x=this.minX:this.owner.x=n,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o})}onStart(){this.updateLimit()}updateLimit(){let e=this.owner.parent;this.minX=Math.min(e.width-this.owner.width*this.owner.scaleX,0),this.minY=Math.min(e.height-this.owner.height*this.owner.scaleY,0)}onMouseDown(e){if(e.stopPropagation(),e.touches&&e.touches.length>1){this.startedSingleTouchDrag&&(this.owner.stopDrag(),this.startedSingleTouchDrag=!1);let i=this.setPivot(e);!i.x||!i.y?console.log("(((((((((((((((((((((((",this.lastPivot,JSON.parse(JSON.stringify(e.touches))):(this.lastDistance=this.getDistance(e),this.lastPivot=i,this.owner.on(Laya.Event.MOUSE_MOVE,this,this.mouseMove))}else this.owner.startDrag(),this.startedSingleTouchDrag=!0}onMouseUp(e){this.owner.off(Laya.Event.MOUSE_MOVE,this,this.mouseMove)}getDistance(e){var i=0;if(e.touches&&e.touches.length>1){let r=e.touches[0].pos.x-e.touches[1].pos.x,n=e.touches[0].pos.y-e.touches[1].pos.y;i=Math.sqrt(r*r+n*n)}return i}mouseMove(e){let i=this.getDistance(e);this.owner.scaleX+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleY+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1),this.owner.scaleX>5&&(this.owner.scaleX=5),this.owner.scaleY>5&&(this.owner.scaleY=5);let r=this.setPivot(e);if(!r.x||!r.y)console.log("$$$$$$$$$$$",r,JSON.parse(JSON.stringify(e.touches)));else{this.updateLimit();let n=(r.x-this.lastPivot.x)*this.owner.scaleX,o=(r.y-this.lastPivot.y)*this.owner.scaleY;n+=this.owner.x,o+=this.owner.y,n>this.maxX?this.owner.x=this.maxX:n<this.minX?this.owner.x=this.minX:this.owner.x=n,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o,this.lastDistance=i}}setPivot(e){if(e.touches&&e.touches.length>=2){let i=this.owner.globalToLocal(new Laya.Point(e.touches[0].pos.x,e.touches[0].pos.y)),r=this.owner.globalToLocal(new Laya.Point(e.touches[1].pos.x,e.touches[1].pos.y));return new Laya.Point((i.x+r.x)/2,(i.y+r.y)/2)}return this.lastPivot}onUpdate(){this.owner.x>this.maxX&&(this.owner.x=this.maxX),this.owner.x<this.minX&&(this.owner.x=this.minX),this.owner.y>this.maxY&&(this.owner.y=this.maxY),this.owner.y<this.minY&&(this.owner.y=this.minY)}addTestPoint(e,i="#ff0000",r=2){let n=new Laya.Sprite;n.graphics.drawCircle(0,0,r,i),this.owner.addChild(n),n.pos(e.x,e.y)}};bl=m([lE("c71-MoP2RIyCrdBAfjnIgw")],bl);var{regClass:cE,property:uE}=Laya,mo=class extends Laya.Script{constructor(){super(...arguments);this.tipsText="";this.isDown=!1}onEnable(){this.tipsText.replace(/(^\s*)|(\s*$)/g,"")}onMouseDown(){this.owner.startDrag(),this.isDown=!0}onMouseUp(){this.isDown=!1}onMouseMove(){this.isDown&&xa.i.collisionWith(this.owner)}onMouseOver(){Laya.Mouse.cursor="move",this.tipsText!==""&&Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:this.tipsText})}onMouseOut(){Laya.Mouse.cursor="auto"}};m([uE({type:"string"})],mo.prototype,"tipsText",2),mo=m([cE("oWa7FUgoQ6CqtyJh_D1Y2w")],mo);var{regClass:pE,property:yl}=Laya,tf=Laya.Event,t0=Laya.Point,Qi=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new t0;this.axisPivot=new t0;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.joystickBG=this.owner,this.joystickAxis=this.owner.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(tf.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(tf.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(tf.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(tf.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.gameMap.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.gameMap.width/2,this.roleAniNode.y=this.gameMap.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D)}mouseDown(e){this.touchId=e.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let e=this.joystickBG.globalToLocal(this.stageMouse),i=e.x-this.joystickAxis.width/2,r=e.y-this.joystickAxis.height/2;this.radian=Math.atan2(r-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),console.log("radian: "+this.radian+", angle: "+this.angle),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,e.x,e.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(e.x-this.joystickAxis.width/2,e.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(e){e.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(e){e.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(e,i){let r=i.split(","),n=360/r.length;return r[Math.floor(e/n)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let e=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;(e<0&&this.gameMap.x<0||e>0&&this.gameMap.x>this.sceneWindow.width-this.gameMap.width)&&(this.gameMap.x-=e),(i<0&&this.gameMap.y<0||i>0&&this.gameMap.y>this.sceneWindow.height-this.gameMap.height)&&(this.gameMap.y-=i)}getDistance(e,i,r,n){let o=e-r,s=i-n;return Math.sqrt(o*o+s*s)}};m([yl({type:Laya.Prefab})],Qi.prototype,"roleAni",2),m([yl({type:"string"})],Qi.prototype,"runAniName",2),m([yl({type:"string"})],Qi.prototype,"standAniName",2),m([yl({type:Laya.Sprite})],Qi.prototype,"gameMap",2),m([yl({type:Laya.Box})],Qi.prototype,"sceneWindow",2),Qi=m([pE("Pl5-_PonSLe-7mCnxeXfRw")],Qi);var{regClass:mE,property:Rue}=Laya,gl=class extends Laya.Script{constructor(){super();this.isOpen=!0}onEnable(){this.toolbarBG=this.owner.parent,this._owner=this.owner,this.menu=this.owner.parent.getChildByName("menu")}onMouseDown(e){e.stopPropagation(),this.isOpen?(Laya.Tween.to(this.toolbarBG,{width:106},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:52,rotation:540},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!1})),Laya.Tween.to(this.menu,{alpha:0},300,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!1}))):(Laya.Tween.to(this.toolbarBG,{width:460},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:402,rotation:-360},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!0})),Laya.Tween.to(this.menu,{alpha:1},200,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!0})))}onDisable(){}};gl=m([mE("hPkwKQvKQTaeBeEpHxNUEA")],gl);})();
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
