"use strict";(()=>{var lx=Object.create;var Tl=Object.defineProperty;var tv=Object.getOwnPropertyDescriptor;var cx=Object.getOwnPropertyNames;var ux=Object.getPrototypeOf,px=Object.prototype.hasOwnProperty;var ae=(a,t)=>()=>(a&&(t=a(a=0)),t);var mx=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),iv=(a,t)=>{for(var e in t)Tl(a,e,{get:t[e],enumerable:!0})},dx=(a,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of cx(t))!px.call(a,n)&&n!==e&&Tl(a,n,{get:()=>t[n],enumerable:!(i=tv(t,n))||i.enumerable});return a};var hx=(a,t,e)=>(e=a!=null?lx(ux(a)):{},dx(t||!a||!a.__esModule?Tl(e,"default",{value:a,enumerable:!0}):e,a));var p=(a,t,e,i)=>{for(var n=i>1?void 0:i?tv(t,e):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Tl(t,e,n),n};function nv(a,t){return a.exec(t)?.groups}var rv=ae(()=>{"use strict"});function ic(a){let t=a.type;if(ov.test(a.type)&&"components"in a){t="(";let e=a.components.length;for(let n=0;n<e;n++){let r=a.components[n];t+=ic(r),n<e-1&&(t+=", ")}let i=nv(ov,a.type);return t+=`)${i?.array??""}`,ic({...a,type:t})}return"indexed"in a&&a.indexed&&(t=`${t} indexed`),a.name?`${t} ${a.name}`:t}var ov,sv=ae(()=>{"use strict";rv();ov=/^tuple(?<array>(\[(\d*)\])*)$/});function Xn(a){let t="",e=a.length;for(let i=0;i<e;i++){let n=a[i];t+=ic(n),i!==e-1&&(t+=", ")}return t}var lv=ae(()=>{"use strict";sv()});function yb(a){return a.type==="function"?`function ${a.name}(${Xn(a.inputs)})${a.stateMutability&&a.stateMutability!=="nonpayable"?` ${a.stateMutability}`:""}${a.outputs.length?` returns (${Xn(a.outputs)})`:""}`:a.type==="event"?`event ${a.name}(${Xn(a.inputs)})`:a.type==="error"?`error ${a.name}(${Xn(a.inputs)})`:a.type==="constructor"?`constructor(${Xn(a.inputs)})${a.stateMutability==="payable"?" payable":""}`:a.type==="fallback"?"fallback()":"receive() external payable"}var cv=ae(()=>{"use strict";lv()});var uv=ae(()=>{"use strict";cv()});function zt(a,{includeName:t=!1}={}){if(a.type!=="function"&&a.type!=="event"&&a.type!=="error")throw new xo(a.type);return`${a.name}(${_o(a.inputs,{includeName:t})})`}function _o(a,{includeName:t=!1}={}){return a?a.map(e=>Lx(e,{includeName:t})).join(t?", ":","):""}function Lx(a,{includeName:t}){return a.type.startsWith("tuple")?`(${_o(a.components,{includeName:t})})${a.type.slice(5)}`:a.type+(t&&a.name?` ${a.name}`:"")}var mn=ae(()=>{"use strict";It()});function lt(a,{strict:t=!0}={}){return!a||typeof a!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(a):a.startsWith("0x")}var wi=ae(()=>{"use strict"});function Je(a){return lt(a,{strict:!1})?Math.ceil((a.length-2)/2):a.length}var Aa=ae(()=>{"use strict";wi()});var pv,mv=ae(()=>{"use strict";pv="2.9.3"});var dv,dn,hv,wo=ae(()=>{"use strict";mv();dv=a=>a,dn=a=>a,hv=()=>`viem@${pv}`});function fv(a,t){return t?.(a)?a:a&&typeof a=="object"&&"cause"in a?fv(a.cause,t):t?null:a}var F,qe=ae(()=>{"use strict";wo();F=class a extends Error{constructor(t,e={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:hv()});let i=e.cause instanceof a?e.cause.details:e.cause?.message?e.cause.message:e.details,n=e.cause instanceof a&&e.cause.docsPath||e.docsPath;this.message=[t||"An error occurred.","",...e.metaMessages?[...e.metaMessages,""]:[],...n?[`Docs: https://viem.sh${n}${e.docsSlug?`#${e.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join(`
`),e.cause&&(this.cause=e.cause),this.details=i,this.docsPath=n,this.metaMessages=e.metaMessages,this.shortMessage=t}walk(t){return fv(this,t)}}});var Io,Qn,hn,Ii,Eo,To,So,fn,Co,yn,Zn,aa,ko,ac,Ao,pi,Ei,Do,Mo,Bo,xo,It=ae(()=>{"use strict";mn();Aa();qe();Io=class extends F{constructor({docsPath:t}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}},Qn=class extends F{constructor({docsPath:t}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}},hn=class extends F{constructor({data:t,params:e,size:i}){super([`Data size of ${i} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${_o(e,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=e,this.size=i}},Ii=class extends F{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}},Eo=class extends F{constructor({expectedLength:t,givenLength:e,type:i}){super([`ABI encoding array length mismatch for type ${i}.`,`Expected length: ${t}`,`Given length: ${e}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}},To=class extends F{constructor({expectedSize:t,value:e}){super(`Size of bytes "${e}" (bytes${Je(e)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}},So=class extends F{constructor({expectedLength:t,givenLength:e}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${e}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}},fn=class extends F{constructor(t,{docsPath:e}){super([`Encoded error signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}},Co=class extends F{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}},yn=class extends F{constructor(t,{docsPath:e}){super([`Encoded event signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}},Zn=class extends F{constructor(t,{docsPath:e}={}){super([`Event ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}},aa=class extends F{constructor(t,{docsPath:e}={}){super([`Function ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}},ko=class extends F{constructor(t,{docsPath:e}){super([`Function "${t}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}},ac=class extends F{constructor(t,e){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${t.type}\` in \`${zt(t.abiItem)}\`, and`,`\`${e.type}\` in \`${zt(e.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}},Ao=class extends F{constructor({expectedSize:t,givenSize:e}){super(`Expected bytes${t}, got bytes${e}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}},pi=class extends F{constructor({abiItem:t,data:e,params:i,size:n}){super([`Data size of ${n} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${_o(i,{includeName:!0})})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=e,this.params=i,this.size=n}},Ei=class extends F{constructor({abiItem:t,param:e}){super([`Expected a topic for indexed event parameter${e.name?` "${e.name}"`:""} on event "${zt(t,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}},Do=class extends F{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}},Mo=class extends F{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}},Bo=class extends F{constructor(t){super([`Value "${t}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}},xo=class extends F{constructor(t){super([`"${t}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}});var Po,Ro,No,rc=ae(()=>{"use strict";qe();Po=class extends F{constructor({offset:t,position:e,size:i}){super(`Slice ${e==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${i}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}},Ro=class extends F{constructor({size:t,targetSize:e,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${t}) exceeds padding size (${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}},No=class extends F{constructor({size:t,targetSize:e,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} is expected to be ${e} ${i} long, but is ${t} ${i} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}});function Da(a,{dir:t,size:e=32}={}){return typeof a=="string"?na(a,{dir:t,size:e}):_x(a,{dir:t,size:e})}function na(a,{dir:t,size:e=32}={}){if(e===null)return a;let i=a.replace("0x","");if(i.length>e*2)throw new Ro({size:Math.ceil(i.length/2),targetSize:e,type:"hex"});return`0x${i[t==="right"?"padEnd":"padStart"](e*2,"0")}`}function _x(a,{dir:t,size:e=32}={}){if(e===null)return a;if(a.length>e)throw new Ro({size:a.length,targetSize:e,type:"bytes"});let i=new Uint8Array(e);for(let n=0;n<e;n++){let r=t==="right";i[r?n:e-n-1]=a[r?n:a.length-n-1]}return i}var oc=ae(()=>{"use strict";rc()});var sc,lc,cc,uc=ae(()=>{"use strict";qe();sc=class extends F{constructor({max:t,min:e,signed:i,size:n,value:r}){super(`Number "${r}" is not in safe ${n?`${n*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${t?`(${e} to ${t})`:`(above ${e})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}},lc=class extends F{constructor(t){super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}},cc=class extends F{constructor({givenSize:t,maxSize:e}){super(`Size cannot exceed ${e} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}});function bn(a,{dir:t="left"}={}){let e=typeof a=="string"?a.replace("0x",""):a,i=0;for(let n=0;n<e.length-1&&e[t==="left"?n:e.length-n-1].toString()==="0";n++)i++;return e=t==="left"?e.slice(i):e.slice(0,e.length-i),typeof a=="string"?(e.length===1&&t==="right"&&(e=`${e}0`),`0x${e.length%2===1?`0${e}`:e}`):e}var pc=ae(()=>{"use strict"});function ai(a,{size:t}){if(Je(a)>t)throw new cc({givenSize:Je(a),maxSize:t})}function Ma(a,t={}){let{signed:e}=t;t.size&&ai(a,{size:t.size});let i=BigInt(a);if(!e)return i;let n=(a.length-2)/2,r=(1n<<BigInt(n)*8n-1n)-1n;return i<=r?i:i-BigInt(`0x${"f".padStart(n*2,"f")}`)-1n}function Bt(a,t={}){return Number(Ma(a,t))}var mi=ae(()=>{"use strict";uc();Aa()});function tt(a,t={}){return typeof a=="number"||typeof a=="bigint"?ye(a,t):typeof a=="string"?gn(a,t):typeof a=="boolean"?Oo(a,t):Lt(a,t)}function Oo(a,t={}){let e=`0x${Number(a)}`;return typeof t.size=="number"?(ai(e,{size:t.size}),Da(e,{size:t.size})):e}function Lt(a,t={}){let e="";for(let n=0;n<a.length;n++)e+=xx[a[n]];let i=`0x${e}`;return typeof t.size=="number"?(ai(i,{size:t.size}),Da(i,{dir:"right",size:t.size})):i}function ye(a,t={}){let{signed:e,size:i}=t,n=BigInt(a),r;i?e?r=(1n<<BigInt(i)*8n-1n)-1n:r=2n**(BigInt(i)*8n)-1n:typeof a=="number"&&(r=BigInt(Number.MAX_SAFE_INTEGER));let o=typeof r=="bigint"&&e?-r-1n:0;if(r&&n>r||n<o){let l=typeof a=="bigint"?"n":"";throw new sc({max:r?`${r}${l}`:void 0,min:`${o}${l}`,signed:e,size:i,value:`${a}${l}`})}let s=`0x${(e&&n<0?(1n<<BigInt(i*8))+BigInt(n):n).toString(16)}`;return i?Da(s,{size:i}):s}function gn(a,t={}){let e=wx.encode(a);return Lt(e,t)}var xx,wx,Oe=ae(()=>{"use strict";uc();oc();mi();xx=Array.from({length:256},(a,t)=>t.toString(16).padStart(2,"0"));wx=new TextEncoder});function ni(a,t={}){return typeof a=="number"||typeof a=="bigint"?Tx(a,t):typeof a=="boolean"?Ex(a,t):lt(a)?mc(a,t):Qt(a,t)}function Ex(a,t={}){let e=new Uint8Array(1);return e[0]=Number(a),typeof t.size=="number"?(ai(e,{size:t.size}),Da(e,{size:t.size})):e}function yv(a){if(a>=ra.zero&&a<=ra.nine)return a-ra.zero;if(a>=ra.A&&a<=ra.F)return a-(ra.A-10);if(a>=ra.a&&a<=ra.f)return a-(ra.a-10)}function mc(a,t={}){let e=a;t.size&&(ai(e,{size:t.size}),e=Da(e,{dir:"right",size:t.size}));let i=e.slice(2);i.length%2&&(i=`0${i}`);let n=i.length/2,r=new Uint8Array(n);for(let o=0,s=0;o<n;o++){let l=yv(i.charCodeAt(s++)),c=yv(i.charCodeAt(s++));if(l===void 0||c===void 0)throw new F(`Invalid byte sequence ("${i[s-2]}${i[s-1]}" in "${i}").`);r[o]=l*16+c}return r}function Tx(a,t){let e=ye(a,t);return mc(e)}function Qt(a,t={}){let e=Ix.encode(a);return typeof t.size=="number"?(ai(e,{size:t.size}),Da(e,{dir:"right",size:t.size})):e}var Ix,ra,Ti=ae(()=>{"use strict";qe();wi();oc();mi();Oe();Ix=new TextEncoder;ra={zero:48,nine:57,A:65,F:70,a:97,f:102}});function Ho(a){if(!Number.isSafeInteger(a)||a<0)throw new Error(`Wrong positive integer: ${a}`)}function Uo(a,...t){if(!(a instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(a.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${a.length}`)}function bv(a){if(typeof a!="function"||typeof a.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ho(a.outputLen),Ho(a.blockLen)}function oa(a,t=!0){if(a.destroyed)throw new Error("Hash instance has been destroyed");if(t&&a.finished)throw new Error("Hash#digest() has already been called")}function dc(a,t){Uo(a);let e=t.outputLen;if(a.length<e)throw new Error(`digestInto() expects output buffer of length at least ${e}`)}var hc=ae(()=>{"use strict"});function Sx(a,t=!1){return t?{h:Number(a&fc),l:Number(a>>gv&fc)}:{h:Number(a>>gv&fc)|0,l:Number(a&fc)|0}}function vv(a,t=!1){let e=new Uint32Array(a.length),i=new Uint32Array(a.length);for(let n=0;n<a.length;n++){let{h:r,l:o}=Sx(a[n],t);[e[n],i[n]]=[r,o]}return[e,i]}var fc,gv,Lv,_v,xv,wv,Iv=ae(()=>{"use strict";fc=BigInt(4294967295),gv=BigInt(32);Lv=(a,t,e)=>a<<e|t>>>32-e,_v=(a,t,e)=>t<<e|a>>>32-e,xv=(a,t,e)=>t<<e-32|a>>>64-e,wv=(a,t,e)=>a<<e-32|t>>>64-e});var yc,Ev=ae(()=>{"use strict";yc=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0});function kx(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function Pa(a){if(typeof a=="string"&&(a=kx(a)),!Tv(a))throw new Error(`expected Uint8Array, got ${typeof a}`);return a}function Cv(...a){let t=new Uint8Array(a.reduce((i,n)=>i+n.length,0)),e=0;return a.forEach(i=>{if(!Tv(i))throw new Error("Uint8Array expected");t.set(i,e),e+=i.length}),t}function gc(a){let t=i=>a().update(Pa(i)).digest(),e=a();return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=()=>a(),t}function kv(a){let t=(i,n)=>a(n).update(Pa(i)).digest(),e=a({});return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=i=>a(i),t}function Av(a=32){if(yc&&typeof yc.getRandomValues=="function")return yc.getRandomValues(new Uint8Array(a));throw new Error("crypto.getRandomValues must be defined")}var Tv,Sv,bc,Si,Cx,Ba,qD,Jn=ae(()=>{"use strict";Ev();Tv=a=>a instanceof Uint8Array,Sv=a=>new Uint32Array(a.buffer,a.byteOffset,Math.floor(a.byteLength/4)),bc=a=>new DataView(a.buffer,a.byteOffset,a.byteLength),Si=(a,t)=>a<<32-t|a>>>t,Cx=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Cx)throw new Error("Non little-endian hardware is not supported");Ba=class{clone(){return this._cloneInto()}},qD={}.toString});function Ox(a,t=24){let e=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let o=0;o<10;o++)e[o]=a[o]^a[o+10]^a[o+20]^a[o+30]^a[o+40];for(let o=0;o<10;o+=2){let s=(o+8)%10,l=(o+2)%10,c=e[l],u=e[l+1],m=Dv(c,u,1)^e[s],g=Mv(c,u,1)^e[s+1];for(let x=0;x<50;x+=10)a[o+x]^=m,a[o+x+1]^=g}let n=a[2],r=a[3];for(let o=0;o<24;o++){let s=Pv[o],l=Dv(n,r,s),c=Mv(n,r,s),u=Bv[o];n=a[u],r=a[u+1],a[u]=l,a[u+1]=c}for(let o=0;o<50;o+=10){for(let s=0;s<10;s++)e[s]=a[o+s];for(let s=0;s<10;s++)a[o+s]^=~e[(s+2)%10]&e[(s+4)%10]}a[0]^=Rx[i],a[1]^=Nx[i]}e.fill(0)}var Bv,Pv,Rv,Ax,Vo,Dx,Mx,Bx,Px,Rx,Nx,Dv,Mv,vc,Ra,XD,QD,ZD,JD,e2,Nv,t2,i2,Ov,a2,n2,Hv=ae(()=>{"use strict";hc();Iv();Jn();[Bv,Pv,Rv]=[[],[],[]],Ax=BigInt(0),Vo=BigInt(1),Dx=BigInt(2),Mx=BigInt(7),Bx=BigInt(256),Px=BigInt(113);for(let a=0,t=Vo,e=1,i=0;a<24;a++){[e,i]=[i,(2*e+3*i)%5],Bv.push(2*(5*i+e)),Pv.push((a+1)*(a+2)/2%64);let n=Ax;for(let r=0;r<7;r++)t=(t<<Vo^(t>>Mx)*Px)%Bx,t&Dx&&(n^=Vo<<(Vo<<BigInt(r))-Vo);Rv.push(n)}[Rx,Nx]=vv(Rv,!0),Dv=(a,t,e)=>e>32?xv(a,t,e):Lv(a,t,e),Mv=(a,t,e)=>e>32?wv(a,t,e):_v(a,t,e);vc=class a extends Ba{constructor(t,e,i,n=!1,r=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=i,this.enableXOF=n,this.rounds=r,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Ho(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Sv(this.state)}keccak(){Ox(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){oa(this);let{blockLen:e,state:i}=this;t=Pa(t);let n=t.length;for(let r=0;r<n;){let o=Math.min(e-this.pos,n-r);for(let s=0;s<o;s++)i[this.pos++]^=t[r++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:e,pos:i,blockLen:n}=this;t[i]^=e,e&128&&i===n-1&&this.keccak(),t[n-1]^=128,this.keccak()}writeInto(t){oa(this,!1),Uo(t),this.finish();let e=this.state,{blockLen:i}=this;for(let n=0,r=t.length;n<r;){this.posOut>=i&&this.keccak();let o=Math.min(i-this.posOut,r-n);t.set(e.subarray(this.posOut,this.posOut+o),n),this.posOut+=o,n+=o}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Ho(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(dc(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:e,suffix:i,outputLen:n,rounds:r,enableXOF:o}=this;return t||(t=new a(e,i,n,o,r)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=r,t.suffix=i,t.outputLen=n,t.enableXOF=o,t.destroyed=this.destroyed,t}},Ra=(a,t,e)=>gc(()=>new vc(t,a,e)),XD=Ra(6,144,224/8),QD=Ra(6,136,256/8),ZD=Ra(6,104,384/8),JD=Ra(6,72,512/8),e2=Ra(1,144,224/8),Nv=Ra(1,136,256/8),t2=Ra(1,104,384/8),i2=Ra(1,72,512/8),Ov=(a,t,e)=>kv((i={})=>new vc(t,a,i.dkLen===void 0?e:i.dkLen,!0)),a2=Ov(31,168,128/8),n2=Ov(31,136,256/8)});function ft(a,t){let e=t||"hex",i=Nv(lt(a,{strict:!1})?ni(a):a);return e==="bytes"?i:tt(i)}var Na=ae(()=>{"use strict";Hv();wi();Ti();Oe()});function Uv(a){return Hx(a)}var Hx,Vv=ae(()=>{"use strict";Ti();Na();Hx=a=>ft(ni(a))});function Fv(a){let t=!0,e="",i=0,n="",r=!1;for(let o=0;o<a.length;o++){let s=a[o];if(["(",")",","].includes(s)&&(t=!0),s==="("&&i++,s===")"&&i--,!!t){if(i===0){if(s===" "&&["event","function",""].includes(n))n="";else if(n+=s,s===")"){r=!0;break}continue}if(s===" "){a[o-1]!==","&&e!==","&&e!==",("&&(e="",t=!1);continue}n+=s,e+=s}}if(!r)throw new F("Unable to normalize signature.");return n}var zv=ae(()=>{"use strict";qe()});var Gv,jv=ae(()=>{"use strict";uv();zv();Gv=a=>{let t=(()=>typeof a=="string"?a:yb(a))();return Fv(t)}});function Lc(a){return Uv(Gv(a))}var bb=ae(()=>{"use strict";Vv();jv()});var er,_c=ae(()=>{"use strict";bb();er=Lc});var Pt,vn=ae(()=>{"use strict";qe();Pt=class extends F{constructor({address:t}){super(`Address "${t}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}});var xc,qv=ae(()=>{"use strict";xc=class extends Map{constructor(t){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=t}set(t,e){return super.set(t,e),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}});function Ln(a,t){let e=t?`${t}${a.toLowerCase()}`:a.substring(2).toLowerCase(),i=ft(Qt(e),"bytes"),n=(t?e.substring(`${t}0x`.length):e).split("");for(let r=0;r<40;r+=2)i[r>>1]>>4>=8&&n[r]&&(n[r]=n[r].toUpperCase()),(i[r>>1]&15)>=8&&n[r+1]&&(n[r+1]=n[r+1].toUpperCase());return`0x${n.join("")}`}function Wv(a,t){if(!Et(a))throw new Pt({address:a});return Ln(a,t)}var Fo=ae(()=>{"use strict";vn();Ti();Na();Oa()});function Et(a,{strict:t=!0}={}){if(gb.has(a))return gb.get(a);let e=(()=>Ux.test(a)?a.toLowerCase()===a?!0:t?Ln(a)===a:!0:!1)();return gb.set(a,e),e}var Ux,gb,Oa=ae(()=>{"use strict";qv();Fo();Ux=/^0x[a-fA-F0-9]{40}$/,gb=new xc(8192)});function Gt(a){return typeof a[0]=="string"?zo(a):Vx(a)}function Vx(a){let t=0;for(let n of a)t+=n.length;let e=new Uint8Array(t),i=0;for(let n of a)e.set(n,i),i+=n.length;return e}function zo(a){return`0x${a.reduce((t,e)=>t+e.replace("0x",""),"")}`}var Ha=ae(()=>{"use strict"});function _n(a,t,e,{strict:i}={}){return lt(a,{strict:!1})?Fx(a,t,e,{strict:i}):vb(a,t,e,{strict:i})}function Kv(a,t){if(typeof t=="number"&&t>0&&t>Je(a)-1)throw new Po({offset:t,position:"start",size:Je(a)})}function Yv(a,t,e){if(typeof t=="number"&&typeof e=="number"&&Je(a)!==e-t)throw new Po({offset:e,position:"end",size:Je(a)})}function vb(a,t,e,{strict:i}={}){Kv(a,t);let n=a.slice(t,e);return i&&Yv(n,t,e),n}function Fx(a,t,e,{strict:i}={}){Kv(a,t);let n=`0x${a.replace("0x","").slice((t??0)*2,(e??a.length)*2)}`;return i&&Yv(n,t,e),n}var Go=ae(()=>{"use strict";rc();wi();Aa()});function Ci(a,t){if(a.length!==t.length)throw new So({expectedLength:a.length,givenLength:t.length});let e=zx({params:a,values:t}),i=_b(e);return i.length===0?"0x":i}function zx({params:a,values:t}){let e=[];for(let i=0;i<a.length;i++)e.push(Lb({param:a[i],value:t[i]}));return e}function Lb({param:a,value:t}){let e=wc(a.type);if(e){let[i,n]=e;return jx(t,{length:i,param:{...a,type:n}})}if(a.type==="tuple")return $x(t,{param:a});if(a.type==="address")return Gx(t);if(a.type==="bool")return Wx(t);if(a.type.startsWith("uint")||a.type.startsWith("int")){let i=a.type.startsWith("int");return Kx(t,{signed:i})}if(a.type.startsWith("bytes"))return qx(t,{param:a});if(a.type==="string")return Yx(t);throw new Do(a.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function _b(a){let t=0;for(let r=0;r<a.length;r++){let{dynamic:o,encoded:s}=a[r];o?t+=32:t+=Je(s)}let e=[],i=[],n=0;for(let r=0;r<a.length;r++){let{dynamic:o,encoded:s}=a[r];o?(e.push(ye(t+n,{size:32})),i.push(s),n+=Je(s)):e.push(s)}return Gt([...e,...i])}function Gx(a){if(!Et(a))throw new Pt({address:a});return{dynamic:!1,encoded:na(a.toLowerCase())}}function jx(a,{length:t,param:e}){let i=t===null;if(!Array.isArray(a))throw new Bo(a);if(!i&&a.length!==t)throw new Eo({expectedLength:t,givenLength:a.length,type:`${e.type}[${t}]`});let n=!1,r=[];for(let o=0;o<a.length;o++){let s=Lb({param:e,value:a[o]});s.dynamic&&(n=!0),r.push(s)}if(i||n){let o=_b(r);if(i){let s=ye(r.length,{size:32});return{dynamic:!0,encoded:r.length>0?Gt([s,o]):s}}if(n)return{dynamic:!0,encoded:o}}return{dynamic:!1,encoded:Gt(r.map(({encoded:o})=>o))}}function qx(a,{param:t}){let[,e]=t.type.split("bytes"),i=Je(a);if(!e){let n=a;return i%32!==0&&(n=na(n,{dir:"right",size:Math.ceil((a.length-2)/2/32)*32})),{dynamic:!0,encoded:Gt([na(ye(i,{size:32})),n])}}if(i!==parseInt(e))throw new To({expectedSize:parseInt(e),value:a});return{dynamic:!1,encoded:na(a,{dir:"right"})}}function Wx(a){if(typeof a!="boolean")throw new F(`Invalid boolean value: "${a}" (type: ${typeof a}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:na(Oo(a))}}function Kx(a,{signed:t}){return{dynamic:!1,encoded:ye(a,{size:32,signed:t})}}function Yx(a){let t=gn(a),e=Math.ceil(Je(t)/32),i=[];for(let n=0;n<e;n++)i.push(na(_n(t,n*32,(n+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Gt([na(ye(Je(t),{size:32})),...i])}}function $x(a,{param:t}){let e=!1,i=[];for(let n=0;n<t.components.length;n++){let r=t.components[n],o=Array.isArray(a)?n:r.name,s=Lb({param:r,value:a[o]});i.push(s),s.dynamic&&(e=!0)}return{dynamic:e,encoded:e?_b(i):Gt(i.map(({encoded:n})=>n))}}function wc(a){let t=a.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}var xn=ae(()=>{"use strict";It();vn();qe();Oa();Ha();oc();Aa();Go();Oe()});var tr,Ic=ae(()=>{"use strict";Go();bb();tr=a=>_n(Lc(a),0,4)});function Hi(a){let{abi:t,args:e=[],name:i}=a,n=lt(i,{strict:!1}),r=t.filter(s=>n?s.type==="function"?tr(s)===i:s.type==="event"?er(s)===i:!1:"name"in s&&s.name===i);if(r.length===0)return;if(r.length===1)return r[0];let o;for(let s of r){if(!("inputs"in s))continue;if(!e||e.length===0){if(!s.inputs||s.inputs.length===0)return s;continue}if(!s.inputs||s.inputs.length===0||s.inputs.length!==e.length)continue;if(e.every((c,u)=>{let m="inputs"in s&&s.inputs[u];return m?xb(c,m):!1})){if(o&&"inputs"in o&&o.inputs){let c=$v(s.inputs,o.inputs,e);if(c)throw new ac({abiItem:s,type:c[0]},{abiItem:o,type:c[1]})}o=s}}return o||r[0]}function xb(a,t){let e=typeof a,i=t.type;switch(i){case"address":return Et(a,{strict:!1});case"bool":return e==="boolean";case"function":return e==="string";case"string":return e==="string";default:return i==="tuple"&&"components"in t?Object.values(t.components).every((n,r)=>xb(Object.values(a)[r],n)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)?e==="number"||e==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)?e==="string"||a instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)?Array.isArray(a)&&a.every(n=>xb(n,{...t,type:i.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function $v(a,t,e){for(let i in a){let n=a[i],r=t[i];if(n.type==="tuple"&&r.type==="tuple"&&"components"in n&&"components"in r)return $v(n.components,r.components,e[i]);let o=[n.type,r.type];if((()=>o.includes("address")&&o.includes("bytes20")?!0:o.includes("address")&&o.includes("string")?Et(e[i],{strict:!1}):o.includes("address")&&o.includes("bytes")?Et(e[i],{strict:!1}):!1)())return o}}var ir=ae(()=>{"use strict";It();wi();Oa();_c();Ic()});function it(a){return typeof a=="string"?{address:a,type:"json-rpc"}:a}var ri=ae(()=>{"use strict"});function Jv(a){let{abi:t,args:e,functionName:i}=a,n=t[0];if(i){let r=Hi({abi:t,args:e,name:i});if(!r)throw new aa(i,{docsPath:Zv});n=r}if(n.type!=="function")throw new aa(void 0,{docsPath:Zv});return{abi:[n],functionName:tr(zt(n))}}var Zv,eL=ae(()=>{"use strict";It();Ic();mn();ir();Zv="/docs/contract/encodeFunctionData"});function Rt(a){let{args:t}=a,{abi:e,functionName:i}=(()=>a.abi.length===1&&a.functionName?.startsWith("0x")?a:Jv(a))(),n=e[0],r=i,o="inputs"in n&&n.inputs?Ci(n.inputs,t??[]):void 0;return zo([r,o??"0x"])}var sa=ae(()=>{"use strict";Ha();xn();eL()});var Tc,tL,iL,Sc=ae(()=>{"use strict";Tc={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},tL={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},iL={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}});var jo,ar,Cc,wb=ae(()=>{"use strict";qe();jo=class extends F{constructor({offset:t}){super(`Offset \`${t}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}},ar=class extends F{constructor({length:t,position:e}){super(`Position \`${e}\` is out of bounds (\`0 < position < ${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}},Cc=class extends F{constructor({count:t,limit:e}){super(`Recursive read limit of \`${e}\` exceeded (recursive read count: \`${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}});function aL(a,{recursiveReadLimit:t=8192}={}){let e=Object.create(Xx);return e.bytes=a,e.dataView=new DataView(a.buffer,a.byteOffset,a.byteLength),e.positionReadCount=new Map,e.recursiveReadLimit=t,e}var Xx,nL=ae(()=>{"use strict";wb();Xx={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Cc({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(a){if(a<0||a>this.bytes.length-1)throw new ar({length:this.bytes.length,position:a})},decrementPosition(a){if(a<0)throw new jo({offset:a});let t=this.position-a;this.assertPosition(t),this.position=t},getReadCount(a){return this.positionReadCount.get(a||this.position)||0},incrementPosition(a){if(a<0)throw new jo({offset:a});let t=this.position+a;this.assertPosition(t),this.position=t},inspectByte(a){let t=a??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(a,t){let e=t??this.position;return this.assertPosition(e+a-1),this.bytes.subarray(e,e+a)},inspectUint8(a){let t=a??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(a){let t=a??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(a){let t=a??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(a){let t=a??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushBytes(a){this.assertPosition(this.position+a.length-1),this.bytes.set(a,this.position),this.position+=a.length},pushUint8(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushUint16(a){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,a),this.position+=2},pushUint24(a){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,a>>8),this.dataView.setUint8(this.position+2,a&255),this.position+=3},pushUint32(a){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,a),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let a=this.inspectByte();return this.position++,a},readBytes(a,t){this.assertReadLimit(),this._touch();let e=this.inspectBytes(a);return this.position+=t??a,e},readUint8(){this.assertReadLimit(),this._touch();let a=this.inspectUint8();return this.position+=1,a},readUint16(){this.assertReadLimit(),this._touch();let a=this.inspectUint16();return this.position+=2,a},readUint24(){this.assertReadLimit(),this._touch();let a=this.inspectUint24();return this.position+=3,a},readUint32(){this.assertReadLimit(),this._touch();let a=this.inspectUint32();return this.position+=4,a},get remaining(){return this.bytes.length-this.position},setPosition(a){let t=this.position;return this.assertPosition(a),this.position=a,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let a=this.getReadCount();this.positionReadCount.set(this.position,a+1),a>0&&this.recursiveReadCount++}}});function rL(a,t={}){typeof t.size<"u"&&ai(a,{size:t.size});let e=Lt(a,t);return Ma(e,t)}function oL(a,t={}){let e=a;if(typeof t.size<"u"&&(ai(e,{size:t.size}),e=bn(e)),e.length>1||e[0]>1)throw new lc(e);return!!e[0]}function Ui(a,t={}){typeof t.size<"u"&&ai(a,{size:t.size});let e=Lt(a,t);return Bt(e,t)}function sL(a,t={}){let e=a;return typeof t.size<"u"&&(ai(e,{size:t.size}),e=bn(e,{dir:"right"})),new TextDecoder().decode(e)}var lL=ae(()=>{"use strict";uc();pc();mi();Oe()});function wn(a,t){let e=typeof t=="string"?mc(t):t,i=aL(e);if(Je(e)===0&&a.length>0)throw new Ii;if(Je(t)&&Je(t)<32)throw new hn({data:typeof t=="string"?t:Lt(t),params:a,size:Je(t)});let n=0,r=[];for(let o=0;o<a.length;++o){let s=a[o];i.setPosition(n);let[l,c]=nr(i,s,{staticPosition:0});n+=c,r.push(l)}return r}function nr(a,t,{staticPosition:e}){let i=wc(t.type);if(i){let[n,r]=i;return Zx(a,{...t,type:r},{length:n,staticPosition:e})}if(t.type==="tuple")return iw(a,t,{staticPosition:e});if(t.type==="address")return Qx(a);if(t.type==="bool")return Jx(a);if(t.type.startsWith("bytes"))return ew(a,t,{staticPosition:e});if(t.type.startsWith("uint")||t.type.startsWith("int"))return tw(a,t);if(t.type==="string")return aw(a,{staticPosition:e});throw new Mo(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function Qx(a){let t=a.readBytes(32);return[Ln(Lt(vb(t,-20))),32]}function Zx(a,t,{length:e,staticPosition:i}){if(!e){let o=Ui(a.readBytes(Ib)),s=i+o,l=s+cL;a.setPosition(s);let c=Ui(a.readBytes(cL)),u=qo(t),m=0,g=[];for(let x=0;x<c;++x){a.setPosition(l+(u?x*32:m));let[w,v]=nr(a,t,{staticPosition:l});m+=v,g.push(w)}return a.setPosition(i+32),[g,32]}if(qo(t)){let o=Ui(a.readBytes(Ib)),s=i+o,l=[];for(let c=0;c<e;++c){a.setPosition(s+c*32);let[u]=nr(a,t,{staticPosition:s});l.push(u)}return a.setPosition(i+32),[l,32]}let n=0,r=[];for(let o=0;o<e;++o){let[s,l]=nr(a,t,{staticPosition:i+n});n+=l,r.push(s)}return[r,n]}function Jx(a){return[oL(a.readBytes(32),{size:32}),32]}function ew(a,t,{staticPosition:e}){let[i,n]=t.type.split("bytes");if(!n){let o=Ui(a.readBytes(32));a.setPosition(e+o);let s=Ui(a.readBytes(32));if(s===0)return a.setPosition(e+32),["0x",32];let l=a.readBytes(s);return a.setPosition(e+32),[Lt(l),32]}return[Lt(a.readBytes(parseInt(n),32)),32]}function tw(a,t){let e=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256"),n=a.readBytes(32);return[i>48?rL(n,{signed:e}):Ui(n,{signed:e}),32]}function iw(a,t,{staticPosition:e}){let i=t.components.length===0||t.components.some(({name:o})=>!o),n=i?[]:{},r=0;if(qo(t)){let o=Ui(a.readBytes(Ib)),s=e+o;for(let l=0;l<t.components.length;++l){let c=t.components[l];a.setPosition(s+r);let[u,m]=nr(a,c,{staticPosition:s});r+=m,n[i?l:c?.name]=u}return a.setPosition(e+32),[n,32]}for(let o=0;o<t.components.length;++o){let s=t.components[o],[l,c]=nr(a,s,{staticPosition:e});n[i?o:s?.name]=l,r+=c}return[n,r]}function aw(a,{staticPosition:t}){let e=Ui(a.readBytes(32)),i=t+e;a.setPosition(i);let n=Ui(a.readBytes(32));if(n===0)return a.setPosition(t+32),["",32];let r=a.readBytes(n,32),o=sL(bn(r));return a.setPosition(t+32),[o,32]}function qo(a){let{type:t}=a;if(t==="string"||t==="bytes"||t.endsWith("[]"))return!0;if(t==="tuple")return a.components?.some(qo);let e=wc(a.type);return!!(e&&qo({...a,type:e[1]}))}var cL,Ib,kc=ae(()=>{"use strict";It();Fo();nL();Aa();Go();pc();lL();Ti();Oe();xn();cL=32,Ib=32});function Ac(a){let{abi:t,data:e}=a,i=_n(e,0,4);if(i==="0x")throw new Ii;let r=[...t||[],tL,iL].find(o=>o.type==="error"&&i===tr(zt(o)));if(!r)throw new fn(i,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:r,args:"inputs"in r&&r.inputs&&r.inputs.length>0?wn(r.inputs,_n(e,4)):void 0,errorName:r.name}}var Eb=ae(()=>{"use strict";Sc();It();Go();Ic();kc();mn()});var Ke,oi=ae(()=>{"use strict";Ke=(a,t,e)=>JSON.stringify(a,(i,n)=>{let r=typeof n=="bigint"?n.toString():n;return typeof t=="function"?t(i,r):r},e)});function Tb({abiItem:a,args:t,includeFunctionName:e=!0,includeName:i=!1}){if("name"in a&&"inputs"in a&&a.inputs)return`${e?a.name:""}(${a.inputs.map((n,r)=>`${i&&n.name?`${n.name}: `:""}${typeof t[r]=="object"?Ke(t[r]):t[r]}`).join(", ")})`}var uL=ae(()=>{"use strict";oi()});var Dc,pL,Mc=ae(()=>{"use strict";Dc={gwei:9,wei:18},pL={ether:-9,wei:9}});function Va(a,t){let e=a.toString(),i=e.startsWith("-");i&&(e=e.slice(1)),e=e.padStart(t,"0");let[n,r]=[e.slice(0,e.length-t),e.slice(e.length-t)];return r=r.replace(/(0+)$/,""),`${i?"-":""}${n||"0"}${r?`.${r}`:""}`}var Bc=ae(()=>{"use strict"});function rr(a,t="wei"){return Va(a,Dc[t])}var Pc=ae(()=>{"use strict";Mc();Bc()});function _t(a,t="wei"){return Va(a,pL[t])}var or=ae(()=>{"use strict";Mc();Bc()});function mL(a){return a.reduce((t,{slot:e,value:i})=>`${t}        ${e}: ${i}
`,"")}function dL(a){return a.reduce((t,{address:e,...i})=>{let n=`${t}    ${e}:
`;return i.nonce&&(n+=`      nonce: ${i.nonce}
`),i.balance&&(n+=`      balance: ${i.balance}
`),i.code&&(n+=`      code: ${i.code}
`),i.state&&(n+=`      state:
`,n+=mL(i.state)),i.stateDiff&&(n+=`      stateDiff:
`,n+=mL(i.stateDiff)),n},`  State Override:
`).slice(0,-1)}var Rc,Nc,Sb=ae(()=>{"use strict";qe();Rc=class extends F{constructor({address:t}){super(`State for account "${t}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}},Nc=class extends F{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}});function In(a){let t=Object.entries(a).map(([i,n])=>n===void 0||n===!1?null:[i,n]).filter(Boolean),e=t.reduce((i,[n])=>Math.max(i,n.length),0);return t.map(([i,n])=>`  ${`${i}:`.padEnd(e+1)}  ${n}`).join(`
`)}var Oc,Hc,Uc,sr,lr,Vc,la=ae(()=>{"use strict";Pc();or();qe();Oc=class extends F{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}},Hc=class extends F{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",In(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}},Uc=class extends F{constructor(t,{account:e,docsPath:i,chain:n,data:r,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:m,value:g}){let x=In({chain:n&&`${n?.name} (id: ${n?.id})`,from:e?.address,to:m,value:typeof g<"u"&&`${rr(g)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:r,gas:o,gasPrice:typeof s<"u"&&`${_t(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${_t(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${_t(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",x].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}},sr=class extends F{constructor({blockHash:t,blockNumber:e,blockTag:i,hash:n,index:r}){let o="Transaction";i&&r!==void 0&&(o=`Transaction at block time "${i}" at index "${r}"`),t&&r!==void 0&&(o=`Transaction at block hash "${t}" at index "${r}"`),e&&r!==void 0&&(o=`Transaction at block number "${e}" at index "${r}"`),n&&(o=`Transaction with hash "${n}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}},lr=class extends F{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}},Vc=class extends F{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}});var En,Wo,At,Ko,ca,Fa=ae(()=>{"use strict";ri();Sc();Eb();mn();uL();ir();Pc();or();It();qe();Sb();la();wo();En=class extends F{constructor(t,{account:e,docsPath:i,chain:n,data:r,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:m,value:g,stateOverride:x}){let w=e?it(e):void 0,v=In({from:w?.address,to:m,value:typeof g<"u"&&`${rr(g)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:r,gas:o,gasPrice:typeof s<"u"&&`${_t(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${_t(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${_t(c)} gwei`,nonce:u});x&&(v+=`
${dL(x)}`),super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}},Wo=class extends F{constructor(t,{abi:e,args:i,contractAddress:n,docsPath:r,functionName:o,sender:s}){let l=Hi({abi:e,args:i,name:o}),c=l?Tb({abiItem:l,args:i,includeFunctionName:!1,includeName:!1}):void 0,u=l?zt(l,{includeName:!0}):void 0,m=In({address:n&&dv(n),function:u,args:c&&c!=="()"&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${c}`,sender:s});super(t.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",m].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=e,this.args=i,this.cause=t,this.contractAddress=n,this.functionName=o,this.sender=s}},At=class extends F{constructor({abi:t,data:e,functionName:i,message:n}){let r,o,s,l;if(e&&e!=="0x")try{o=Ac({abi:t,data:e});let{abiItem:u,errorName:m,args:g}=o;if(m==="Error")l=g[0];else if(m==="Panic"){let[x]=g;l=Tc[x]}else{let x=u?zt(u,{includeName:!0}):void 0,w=u&&g?Tb({abiItem:u,args:g,includeFunctionName:!1,includeName:!1}):void 0;s=[x?`Error: ${x}`:"",w&&w!=="()"?`       ${[...Array(m?.length??0).keys()].map(()=>" ").join("")}${w}`:""]}}catch(u){r=u}else n&&(l=n);let c;r instanceof fn&&(c=r.signature,s=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${i}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${i}" reverted.`,{cause:r,metaMessages:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=o,this.reason=l,this.signature=c}},Ko=class extends F{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}},ca=class extends F{constructor({data:t,message:e}){super(e||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}});var di,cr,Yo,ur=ae(()=>{"use strict";oi();qe();wo();di=class extends F{constructor({body:t,details:e,headers:i,status:n,url:r}){super("HTTP request failed.",{details:e,metaMessages:[n&&`Status: ${n}`,`URL: ${dn(r)}`,t&&`Request body: ${Ke(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=i,this.status=n,this.url=r}},cr=class extends F{constructor({body:t,error:e,url:i}){super("RPC Request failed.",{cause:e,details:e.message,metaMessages:[`URL: ${dn(i)}`,`Request body: ${Ke(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=e.code}},Yo=class extends F{constructor({body:t,url:e}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${dn(e)}`,`Request body: ${Ke(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}});var nw,Nt,za,pr,mr,dr,hr,ua,Vi,fr,yr,br,gr,Tn,vr,Sn,Lr,_r,xr,wr,Ir,Fc,$o=ae(()=>{"use strict";qe();ur();nw=-1,Nt=class extends F{constructor(t,{code:e,docsPath:i,metaMessages:n,shortMessage:r}){super(r,{cause:t,docsPath:i,metaMessages:n||t?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof cr?t.code:e??nw}},za=class extends Nt{constructor(t,e){super(t,e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e.data}},pr=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}};Object.defineProperty(pr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});mr=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}};Object.defineProperty(mr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});dr=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}};Object.defineProperty(dr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});hr=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}};Object.defineProperty(hr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});ua=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}};Object.defineProperty(ua,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});Vi=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}};Object.defineProperty(Vi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});fr=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}};Object.defineProperty(fr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});yr=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}};Object.defineProperty(yr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});br=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}};Object.defineProperty(br,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});gr=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}};Object.defineProperty(gr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});Tn=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}};Object.defineProperty(Tn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});vr=class a extends Nt{constructor(t){super(t,{code:a.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}};Object.defineProperty(vr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});Sn=class a extends za{constructor(t){super(t,{code:a.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}};Object.defineProperty(Sn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});Lr=class a extends za{constructor(t){super(t,{code:a.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}};Object.defineProperty(Lr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});_r=class a extends za{constructor(t){super(t,{code:a.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}};Object.defineProperty(_r,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});xr=class a extends za{constructor(t){super(t,{code:a.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}};Object.defineProperty(xr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});wr=class a extends za{constructor(t){super(t,{code:a.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}};Object.defineProperty(wr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});Ir=class a extends za{constructor(t){super(t,{code:a.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}};Object.defineProperty(Ir,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});Fc=class extends Nt{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}});var ma,Ga,Er,Tr,Sr,Cr,kr,Ar,Dr,Mr,ja,Fi,Br=ae(()=>{"use strict";or();qe();ma=class extends F{constructor({cause:t,message:e}={}){let i=e?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}};Object.defineProperty(ma,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(ma,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});Ga=class extends F{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${_t(e)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}};Object.defineProperty(Ga,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});Er=class extends F{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${_t(e)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}};Object.defineProperty(Er,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});Tr=class extends F{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}};Object.defineProperty(Tr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});Sr=class extends F{constructor({cause:t,nonce:e}={}){super([`Nonce provided for the transaction ${e?`(${e}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}};Object.defineProperty(Sr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});Cr=class extends F{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}};Object.defineProperty(Cr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});kr=class extends F{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}};Object.defineProperty(kr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});Ar=class extends F{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}};Object.defineProperty(Ar,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});Dr=class extends F{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}};Object.defineProperty(Dr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});Mr=class extends F{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}};Object.defineProperty(Mr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});ja=class extends F{constructor({cause:t,maxPriorityFeePerGas:e,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${e?` = ${_t(e)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${_t(i)} gwei`:""}).`].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}};Object.defineProperty(ja,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});Fi=class extends F{constructor({cause:t}){super(`An error occurred while executing: ${t?.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}});function Pr(a,t){let e=(a.details||"").toLowerCase(),i=a instanceof F?a.walk(n=>n.code===ma.code):a;return i instanceof F?new ma({cause:a,message:i.details}):ma.nodeMessage.test(e)?new ma({cause:a,message:a.details}):Ga.nodeMessage.test(e)?new Ga({cause:a,maxFeePerGas:t?.maxFeePerGas}):Er.nodeMessage.test(e)?new Er({cause:a,maxFeePerGas:t?.maxFeePerGas}):Tr.nodeMessage.test(e)?new Tr({cause:a,nonce:t?.nonce}):Sr.nodeMessage.test(e)?new Sr({cause:a,nonce:t?.nonce}):Cr.nodeMessage.test(e)?new Cr({cause:a,nonce:t?.nonce}):kr.nodeMessage.test(e)?new kr({cause:a}):Ar.nodeMessage.test(e)?new Ar({cause:a,gas:t?.gas}):Dr.nodeMessage.test(e)?new Dr({cause:a,gas:t?.gas}):Mr.nodeMessage.test(e)?new Mr({cause:a}):ja.nodeMessage.test(e)?new ja({cause:a,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new Fi({cause:a})}var Gc=ae(()=>{"use strict";qe();Br()});function Rr(a,{format:t}){if(!t)return{};let e={};function i(r){let o=Object.keys(r);for(let s of o)s in a&&(e[s]=a[s]),r[s]&&typeof r[s]=="object"&&!Array.isArray(r[s])&&i(r[s])}let n=t(a||{});return i(n),e}var jc=ae(()=>{"use strict"});function qa(a){let t={...a};return typeof a.blobs<"u"&&typeof a.blobs[0]!="string"&&(t.blobs=a.blobs.map(e=>Lt(e))),typeof a.gas<"u"&&(t.gas=ye(a.gas)),typeof a.gasPrice<"u"&&(t.gasPrice=ye(a.gasPrice)),typeof a.maxFeePerBlobGas<"u"&&(t.maxFeePerBlobGas=ye(a.maxFeePerBlobGas)),typeof a.maxFeePerGas<"u"&&(t.maxFeePerGas=ye(a.maxFeePerGas)),typeof a.maxPriorityFeePerGas<"u"&&(t.maxPriorityFeePerGas=ye(a.maxPriorityFeePerGas)),typeof a.nonce<"u"&&(t.nonce=ye(a.nonce)),typeof a.type<"u"&&(t.type=ow[a.type]),typeof a.value<"u"&&(t.value=ye(a.value)),t}var ow,Xo=ae(()=>{"use strict";Oe();ow={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"}});function zi(a){let{account:t,gasPrice:e,maxFeePerGas:i,maxPriorityFeePerGas:n,to:r}=a,o=t?it(t):void 0;if(o&&!Et(o.address))throw new Pt({address:o.address});if(r&&!Et(r))throw new Pt({address:r});if(typeof e<"u"&&(typeof i<"u"||typeof n<"u"))throw new Oc;if(i&&i>2n**256n-1n)throw new Ga({maxFeePerGas:i});if(n&&i&&n>i)throw new ja({maxFeePerGas:i,maxPriorityFeePerGas:n})}var Nr=ae(()=>{"use strict";ri();vn();Br();la();Oa()});function hi(a){let{abi:t,args:e,functionName:i,data:n}=a,r=t[0];if(i){let s=Hi({abi:t,args:e,name:i});if(!s)throw new aa(i,{docsPath:Ab});r=s}if(r.type!=="function")throw new aa(void 0,{docsPath:Ab});if(!r.outputs)throw new ko(r.name,{docsPath:Ab});let o=wn(r.outputs,n);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}var Ab,kn=ae(()=>{"use strict";It();kc();ir();Ab="/docs/contract/decodeFunctionResult"});var Qo,LL,Zc,_L,Db,Mb,xL,An=ae(()=>{"use strict";Qo=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],LL=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],Zc=[...LL,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],_L=[...LL,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],Db=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],Mb=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],xL=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]});var wL,IL=ae(()=>{"use strict";wL="0x82ad56cb"});var Dn,Jc,eu,Zo,tu=ae(()=>{"use strict";qe();Dn=class extends F{constructor({blockNumber:t,chain:e,contract:i}){super(`Chain "${e.name}" does not support contract "${i.name}".`,{metaMessages:["This could be due to any of the following:",...t&&i.blockCreated&&i.blockCreated>t?[`- The contract "${i.name}" was not deployed until block ${i.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${i.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}},Jc=class extends F{constructor({chain:t,currentChainId:e}){super(`The current chain of the wallet (id: ${e}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${e}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}},eu=class extends F{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}},Zo=class extends F{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}});function fi({blockNumber:a,chain:t,contract:e}){let i=t?.contracts?.[e];if(!i)throw new Dn({chain:t,contract:{name:e}});if(a&&i.blockCreated&&i.blockCreated>a)throw new Dn({blockNumber:a,chain:t,contract:{name:e,blockCreated:i.blockCreated}});return i.address}var Mn=ae(()=>{"use strict";tu()});function EL(a,{docsPath:t,...e}){let i=(()=>{let n=Pr(a,e);return n instanceof Fi?a:n})();return new En(i,{docsPath:t,...e})}var TL=ae(()=>{"use strict";Fa();Br();Gc()});function iu({fn:a,id:t,shouldSplitBatch:e,wait:i=0,sort:n}){let r=async()=>{let u=l();o();let m=u.map(({args:g})=>g);m.length!==0&&a(m).then(g=>{n&&Array.isArray(g)&&g.sort(n);for(let x=0;x<u.length;x++){let{pendingPromise:w}=u[x];w.resolve?.([g[x],g])}}).catch(g=>{for(let x=0;x<u.length;x++){let{pendingPromise:w}=u[x];w.reject?.(g)}})},o=()=>Bb.delete(t),s=()=>l().map(({args:u})=>u),l=()=>Bb.get(t)||[],c=u=>Bb.set(t,[...l(),u]);return{flush:o,async schedule(u){let m={},g=new Promise((v,E)=>{m.resolve=v,m.reject=E});return e?.([...s(),u])&&r(),l().length>0?(c({args:u,pendingPromise:m}),g):(c({args:u,pendingPromise:m}),setTimeout(r,i),g)}}}var Bb,Pb=ae(()=>{"use strict";Bb=new Map});var au,nu,ru,SL=ae(()=>{"use strict";oi();qe();wo();au=class extends F{constructor({callbackSelector:t,cause:e,data:i,extraData:n,sender:r,urls:o}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map(s=>`    ${dn(s)}`)],`  Sender: ${r}`,`  Data: ${i}`,`  Callback selector: ${t}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}},nu=class extends F{constructor({result:t,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${dn(e)}`,`Response: ${Ke(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}},ru=class extends F{constructor({sender:t,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}});function CL(a,t){if(!Et(a,{strict:!1}))throw new Pt({address:a});if(!Et(t,{strict:!1}))throw new Pt({address:t});return a.toLowerCase()===t.toLowerCase()}var kL=ae(()=>{"use strict";vn();Oa()});var ML={};iv(ML,{ccipRequest:()=>DL,offchainLookup:()=>cw,offchainLookupAbiItem:()=>AL,offchainLookupSignature:()=>lw});async function cw(a,{blockNumber:t,blockTag:e,data:i,to:n}){let{args:r}=Ac({data:i,abi:[AL]}),[o,s,l,c,u]=r,{ccipRead:m}=a,g=m&&typeof m?.request=="function"?m.request:DL;try{if(!CL(n,o))throw new ru({sender:o,to:n});let x=await g({data:l,sender:o,urls:s}),{data:w}=await qi(a,{blockNumber:t,blockTag:e,data:Gt([c,Ci([{type:"bytes"},{type:"bytes"}],[x,u])]),to:n});return w}catch(x){throw new au({callbackSelector:c,cause:x,data:i,extraData:u,sender:o,urls:s})}}async function DL({data:a,sender:t,urls:e}){let i=new Error("An unknown error occurred.");for(let n=0;n<e.length;n++){let r=e[n],o=r.includes("{data}")?"GET":"POST",s=o==="POST"?{data:a,sender:t}:void 0;try{let l=await fetch(r.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(s),method:o}),c;if(l.headers.get("Content-Type")?.startsWith("application/json")?c=(await l.json()).data:c=await l.text(),!l.ok){i=new di({body:s,details:c?.error?Ke(c.error):l.statusText,headers:l.headers,status:l.status,url:r});continue}if(!lt(c)){i=new nu({result:c,url:r});continue}return c}catch(l){i=new di({body:s,details:l.message,url:r})}}throw i}var lw,AL,BL=ae(()=>{"use strict";zr();SL();ur();Eb();xn();kL();Ha();wi();oi();lw="0x556f1830",AL={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]}});async function qi(a,t){let{account:e=a.account,batch:i=!!a.batch?.multicall,blockNumber:n,blockTag:r="latest",accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:g,maxPriorityFeePerGas:x,nonce:w,to:v,value:E,stateOverride:P,...G}=t,q=e?it(e):void 0;try{zi(t);let Y=(n?ye(n):void 0)||r,O=hw(P),J=a.chain?.formatters?.transactionRequest?.format,He=(J||qa)({...Rr(G,{format:J}),from:q?.address,accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:g,maxPriorityFeePerGas:x,nonce:w,to:v,value:E});if(i&&uw({request:He})&&!O)try{return await pw(a,{...He,blockNumber:n,blockTag:r})}catch(Ae){if(!(Ae instanceof Zo)&&!(Ae instanceof Dn))throw Ae}let De=await a.request({method:"eth_call",params:O?[He,Y,O]:[He,Y]});return De==="0x"?{data:void 0}:{data:De}}catch(Q){let Y=mw(Q),{offchainLookup:O,offchainLookupSignature:J}=await Promise.resolve().then(()=>(BL(),ML));if(a.ccipRead!==!1&&Y?.slice(0,10)===J&&v)return{data:await O(a,{data:Y,to:v})};throw EL(Q,{...t,account:q,chain:a.chain})}}function uw({request:a}){let{data:t,to:e,...i}=a;return!(!t||t.startsWith(wL)||!e||Object.values(i).filter(n=>typeof n<"u").length>0)}async function pw(a,t){let{batchSize:e=1024,wait:i=0}=typeof a.batch?.multicall=="object"?a.batch.multicall:{},{blockNumber:n,blockTag:r="latest",data:o,multicallAddress:s,to:l}=t,c=s;if(!c){if(!a.chain)throw new Zo;c=fi({blockNumber:n,chain:a.chain,contract:"multicall3"})}let m=(n?ye(n):void 0)||r,{schedule:g}=iu({id:`${a.uid}.${m}`,wait:i,shouldSplitBatch(v){return v.reduce((P,{data:G})=>P+(G.length-2),0)>e*2},fn:async v=>{let E=v.map(q=>({allowFailure:!0,callData:q.data,target:q.to})),P=Rt({abi:Qo,args:[E],functionName:"aggregate3"}),G=await a.request({method:"eth_call",params:[{data:P,to:c},m]});return hi({abi:Qo,args:[E],functionName:"aggregate3",data:G||"0x"})}}),[{returnData:x,success:w}]=await g({data:o,to:l});if(!w)throw new ca({data:x});return x==="0x"?{data:void 0}:{data:x}}function mw(a){if(!(a instanceof F))return;let t=a.walk();return typeof t?.data=="object"?t.data?.data:t.data}function PL(a){if(!(!a||a.length===0))return a.reduce((t,{slot:e,value:i})=>{if(e.length!==66)throw new No({size:e.length,targetSize:66,type:"hex"});if(i.length!==66)throw new No({size:i.length,targetSize:66,type:"hex"});return t[e]=i,t},{})}function dw(a){let{balance:t,nonce:e,state:i,stateDiff:n,code:r}=a,o={};if(r!==void 0&&(o.code=r),t!==void 0&&(o.balance=ye(t,{size:32})),e!==void 0&&(o.nonce=ye(e,{size:8})),i!==void 0&&(o.state=PL(i)),n!==void 0){if(o.state)throw new Nc;o.stateDiff=PL(n)}return o}function hw(a){if(!a)return;let t={};for(let{address:e,...i}of a){if(!Et(e,{strict:!1}))throw new Pt({address:e});if(t[e])throw new Rc({address:e});t[e]=dw(i)}return t}var zr=ae(()=>{"use strict";ri();An();IL();vn();qe();tu();Fa();rc();Sb();kn();sa();Oa();Mn();Oe();TL();jc();Xo();Pb();Nr()});function Dw(a,t,e,i){if(typeof a.setBigUint64=="function")return a.setBigUint64(t,e,i);let n=BigInt(32),r=BigInt(4294967295),o=Number(e>>n&r),s=Number(e&r),l=i?4:0,c=i?0:4;a.setUint32(t+l,o,i),a.setUint32(t+c,s,i)}var _u,L_=ae(()=>{"use strict";hc();Jn();_u=class extends Ba{constructor(t,e,i,n){super(),this.blockLen=t,this.outputLen=e,this.padOffset=i,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=bc(this.buffer)}update(t){oa(this);let{view:e,buffer:i,blockLen:n}=this;t=Pa(t);let r=t.length;for(let o=0;o<r;){let s=Math.min(n-this.pos,r-o);if(s===n){let l=bc(t);for(;n<=r-o;o+=n)this.process(l,o);continue}i.set(t.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===n&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){oa(this),dc(t,this),this.finished=!0;let{buffer:e,view:i,blockLen:n,isLE:r}=this,{pos:o}=this;e[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>n-o&&(this.process(i,0),o=0);for(let m=o;m<n;m++)e[m]=0;Dw(i,n-8,BigInt(this.length*8),r),this.process(i,0);let s=bc(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let c=l/4,u=this.get();if(c>u.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<c;m++)s.setUint32(4*m,u[m],r)}digest(){let{buffer:t,outputLen:e}=this;this.digestInto(t);let i=t.slice(0,e);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());let{blockLen:e,buffer:i,length:n,finished:r,destroyed:o,pos:s}=this;return t.length=n,t.pos=s,t.finished=r,t.destroyed=o,n%e&&t.buffer.set(i),t}}});var Mw,Bw,Pw,Ja,en,Vb,__,x_=ae(()=>{"use strict";L_();Jn();Mw=(a,t,e)=>a&t^~a&e,Bw=(a,t,e)=>a&t^a&e^t&e,Pw=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ja=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),en=new Uint32Array(64),Vb=class extends _u{constructor(){super(64,32,8,!1),this.A=Ja[0]|0,this.B=Ja[1]|0,this.C=Ja[2]|0,this.D=Ja[3]|0,this.E=Ja[4]|0,this.F=Ja[5]|0,this.G=Ja[6]|0,this.H=Ja[7]|0}get(){let{A:t,B:e,C:i,D:n,E:r,F:o,G:s,H:l}=this;return[t,e,i,n,r,o,s,l]}set(t,e,i,n,r,o,s,l){this.A=t|0,this.B=e|0,this.C=i|0,this.D=n|0,this.E=r|0,this.F=o|0,this.G=s|0,this.H=l|0}process(t,e){for(let m=0;m<16;m++,e+=4)en[m]=t.getUint32(e,!1);for(let m=16;m<64;m++){let g=en[m-15],x=en[m-2],w=Si(g,7)^Si(g,18)^g>>>3,v=Si(x,17)^Si(x,19)^x>>>10;en[m]=v+en[m-7]+w+en[m-16]|0}let{A:i,B:n,C:r,D:o,E:s,F:l,G:c,H:u}=this;for(let m=0;m<64;m++){let g=Si(s,6)^Si(s,11)^Si(s,25),x=u+g+Mw(s,l,c)+Pw[m]+en[m]|0,v=(Si(i,2)^Si(i,13)^Si(i,22))+Bw(i,n,r)|0;u=c,c=l,l=s,s=o+x|0,o=r,r=n,n=i,i=x+v|0}i=i+this.A|0,n=n+this.B|0,r=r+this.C|0,o=o+this.D|0,s=s+this.E|0,l=l+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(i,n,r,o,s,l,c,u)}roundClean(){en.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},__=gc(()=>new Vb)});var Wb={};iv(Wb,{bitGet:()=>Fw,bitLen:()=>Vw,bitMask:()=>rs,bitSet:()=>zw,bytesToHex:()=>Bn,bytesToNumberBE:()=>da,bytesToNumberLE:()=>Iu,concatBytes:()=>Qr,createHmacDrbg:()=>qb,ensureBytes:()=>si,equalBytes:()=>jb,hexToBytes:()=>Pn,hexToNumber:()=>Gb,numberToBytesBE:()=>tn,numberToBytesLE:()=>Eu,numberToHexUnpadded:()=>M_,numberToVarBytesBE:()=>Hw,utf8ToBytes:()=>Uw,validateObject:()=>an});function Bn(a){if(!wu(a))throw new Error("Uint8Array expected");let t="";for(let e=0;e<a.length;e++)t+=Ow[a[e]];return t}function M_(a){let t=a.toString(16);return t.length&1?`0${t}`:t}function Gb(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);return BigInt(a===""?"0":`0x${a}`)}function Pn(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);let t=a.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);let e=new Uint8Array(t/2);for(let i=0;i<e.length;i++){let n=i*2,r=a.slice(n,n+2),o=Number.parseInt(r,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");e[i]=o}return e}function da(a){return Gb(Bn(a))}function Iu(a){if(!wu(a))throw new Error("Uint8Array expected");return Gb(Bn(Uint8Array.from(a).reverse()))}function tn(a,t){return Pn(a.toString(16).padStart(t*2,"0"))}function Eu(a,t){return tn(a,t).reverse()}function Hw(a){return Pn(M_(a))}function si(a,t,e){let i;if(typeof t=="string")try{i=Pn(t)}catch(r){throw new Error(`${a} must be valid hex string, got "${t}". Cause: ${r}`)}else if(wu(t))i=Uint8Array.from(t);else throw new Error(`${a} must be hex string or Uint8Array`);let n=i.length;if(typeof e=="number"&&n!==e)throw new Error(`${a} expected ${e} bytes, got ${n}`);return i}function Qr(...a){let t=new Uint8Array(a.reduce((i,n)=>i+n.length,0)),e=0;return a.forEach(i=>{if(!wu(i))throw new Error("Uint8Array expected");t.set(i,e),e+=i.length}),t}function jb(a,t){if(a.length!==t.length)return!1;for(let e=0;e<a.length;e++)if(a[e]!==t[e])return!1;return!0}function Uw(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function Vw(a){let t;for(t=0;a>D_;a>>=xu,t+=1);return t}function Fw(a,t){return a>>BigInt(t)&xu}function qb(a,t,e){if(typeof a!="number"||a<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof e!="function")throw new Error("hmacFn must be a function");let i=zb(a),n=zb(a),r=0,o=()=>{i.fill(1),n.fill(0),r=0},s=(...m)=>e(n,i,...m),l=(m=zb())=>{n=s(A_([0]),m),i=s(),m.length!==0&&(n=s(A_([1]),m),i=s())},c=()=>{if(r++>=1e3)throw new Error("drbg: tried 1000 values");let m=0,g=[];for(;m<t;){i=s();let x=i.slice();g.push(x),m+=i.length}return Qr(...g)};return(m,g)=>{o(),l(m);let x;for(;!(x=g(c()));)l();return o(),x}}function an(a,t,e={}){let i=(n,r,o)=>{let s=Gw[r];if(typeof s!="function")throw new Error(`Invalid validator "${r}", expected function`);let l=a[n];if(!(o&&l===void 0)&&!s(l,a))throw new Error(`Invalid param ${String(n)}=${l} (${typeof l}), expected ${r}`)};for(let[n,r]of Object.entries(t))i(n,r,!1);for(let[n,r]of Object.entries(e))i(n,r,!0);return a}var D_,xu,Nw,wu,Ow,zw,rs,zb,A_,Gw,Zr=ae(()=>{"use strict";D_=BigInt(0),xu=BigInt(1),Nw=BigInt(2),wu=a=>a instanceof Uint8Array,Ow=Array.from({length:256},(a,t)=>t.toString(16).padStart(2,"0"));zw=(a,t,e)=>a|(e?xu:D_)<<BigInt(t),rs=a=>(Nw<<BigInt(a-1))-xu,zb=a=>new Uint8Array(a),A_=a=>Uint8Array.from(a);Gw={bigint:a=>typeof a=="bigint",function:a=>typeof a=="function",boolean:a=>typeof a=="boolean",string:a=>typeof a=="string",stringOrUint8Array:a=>typeof a=="string"||a instanceof Uint8Array,isSafeInteger:a=>Number.isSafeInteger(a),array:a=>Array.isArray(a),field:(a,t)=>t.Fp.isValid(a),hash:a=>typeof a=="function"&&Number.isSafeInteger(a.outputLen)}});function Ot(a,t){let e=a%t;return e>=xt?e:t+e}function Kw(a,t,e){if(e<=xt||t<xt)throw new Error("Expected power/modulo > 0");if(e===ct)return xt;let i=ct;for(;t>xt;)t&ct&&(i=i*a%e),a=a*a%e,t>>=ct;return i}function li(a,t,e){let i=a;for(;t-- >xt;)i*=i,i%=e;return i}function Cu(a,t){if(a===xt||t<=xt)throw new Error(`invert: expected positive integers, got n=${a} mod=${t}`);let e=Ot(a,t),i=t,n=xt,r=ct,o=ct,s=xt;for(;e!==xt;){let c=i/e,u=i%e,m=n-o*c,g=r-s*c;i=e,e=u,n=o,r=s,o=m,s=g}if(i!==ct)throw new Error("invert: does not exist");return Ot(n,t)}function Yw(a){let t=(a-ct)/Rn,e,i,n;for(e=a-ct,i=0;e%Rn===xt;e/=Rn,i++);for(n=Rn;n<a&&Kw(n,t,a)!==a-ct;n++);if(i===1){let o=(a+ct)/Kb;return function(l,c){let u=l.pow(c,o);if(!l.eql(l.sqr(u),c))throw new Error("Cannot find square root");return u}}let r=(e+ct)/Rn;return function(s,l){if(s.pow(l,t)===s.neg(s.ONE))throw new Error("Cannot find square root");let c=i,u=s.pow(s.mul(s.ONE,n),e),m=s.pow(l,r),g=s.pow(l,e);for(;!s.eql(g,s.ONE);){if(s.eql(g,s.ZERO))return s.ZERO;let x=1;for(let v=s.sqr(g);x<c&&!s.eql(v,s.ONE);x++)v=s.sqr(v);let w=s.pow(u,ct<<BigInt(c-x-1));u=s.sqr(w),m=s.mul(m,w),g=s.mul(g,u),c=x}return m}}function $w(a){if(a%Kb===jw){let t=(a+ct)/Kb;return function(i,n){let r=i.pow(n,t);if(!i.eql(i.sqr(r),n))throw new Error("Cannot find square root");return r}}if(a%J_===Z_){let t=(a-Z_)/J_;return function(i,n){let r=i.mul(n,Rn),o=i.pow(r,t),s=i.mul(n,o),l=i.mul(i.mul(s,Rn),o),c=i.mul(s,i.sub(l,i.ONE));if(!i.eql(i.sqr(c),n))throw new Error("Cannot find square root");return c}}return a%Ww,Yw(a)}function Yb(a){let t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},e=Xw.reduce((i,n)=>(i[n]="function",i),t);return an(a,e)}function Qw(a,t,e){if(e<xt)throw new Error("Expected power > 0");if(e===xt)return a.ONE;if(e===ct)return t;let i=a.ONE,n=t;for(;e>xt;)e&ct&&(i=a.mul(i,n)),n=a.sqr(n),e>>=ct;return i}function Zw(a,t){let e=new Array(t.length),i=t.reduce((r,o,s)=>a.is0(o)?r:(e[s]=r,a.mul(r,o)),a.ONE),n=a.inv(i);return t.reduceRight((r,o,s)=>a.is0(o)?r:(e[s]=a.mul(r,e[s]),a.mul(r,o)),n),e}function $b(a,t){let e=t!==void 0?t:a.toString(2).length,i=Math.ceil(e/8);return{nBitLength:e,nByteLength:i}}function e0(a,t,e=!1,i={}){if(a<=xt)throw new Error(`Expected Field ORDER > 0, got ${a}`);let{nBitLength:n,nByteLength:r}=$b(a,t);if(r>2048)throw new Error("Field lengths over 2048 bytes are not supported");let o=$w(a),s=Object.freeze({ORDER:a,BITS:n,BYTES:r,MASK:rs(n),ZERO:xt,ONE:ct,create:l=>Ot(l,a),isValid:l=>{if(typeof l!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);return xt<=l&&l<a},is0:l=>l===xt,isOdd:l=>(l&ct)===ct,neg:l=>Ot(-l,a),eql:(l,c)=>l===c,sqr:l=>Ot(l*l,a),add:(l,c)=>Ot(l+c,a),sub:(l,c)=>Ot(l-c,a),mul:(l,c)=>Ot(l*c,a),pow:(l,c)=>Qw(s,l,c),div:(l,c)=>Ot(l*Cu(c,a),a),sqrN:l=>l*l,addN:(l,c)=>l+c,subN:(l,c)=>l-c,mulN:(l,c)=>l*c,inv:l=>Cu(l,a),sqrt:i.sqrt||(l=>o(s,l)),invertBatch:l=>Zw(s,l),cmov:(l,c,u)=>u?c:l,toBytes:l=>e?Eu(l,r):tn(l,r),fromBytes:l=>{if(l.length!==r)throw new Error(`Fp.fromBytes: expected ${r}, got ${l.length}`);return e?Iu(l):da(l)}});return Object.freeze(s)}function t0(a){if(typeof a!="bigint")throw new Error("field order must be bigint");let t=a.toString(2).length;return Math.ceil(t/8)}function Xb(a){let t=t0(a);return t+Math.ceil(t/2)}function i0(a,t,e=!1){let i=a.length,n=t0(t),r=Xb(t);if(i<16||i<r||i>1024)throw new Error(`expected ${r}-1024 bytes of input, got ${i}`);let o=e?da(a):Iu(a),s=Ot(o,t-ct)+ct;return e?Eu(s,n):tn(s,n)}var xt,ct,Rn,jw,Kb,Z_,J_,qw,Ww,Xw,ku=ae(()=>{"use strict";Zr();xt=BigInt(0),ct=BigInt(1),Rn=BigInt(2),jw=BigInt(3),Kb=BigInt(4),Z_=BigInt(5),J_=BigInt(8),qw=BigInt(9),Ww=BigInt(16);Xw=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"]});function a0(a,t){let e=(n,r)=>{let o=r.negate();return n?o:r},i=n=>{let r=Math.ceil(t/n)+1,o=2**(n-1);return{windows:r,windowSize:o}};return{constTimeNegate:e,unsafeLadder(n,r){let o=a.ZERO,s=n;for(;r>eI;)r&Qb&&(o=o.add(s)),s=s.double(),r>>=Qb;return o},precomputeWindow(n,r){let{windows:o,windowSize:s}=i(r),l=[],c=n,u=c;for(let m=0;m<o;m++){u=c,l.push(u);for(let g=1;g<s;g++)u=u.add(c),l.push(u);c=u.double()}return l},wNAF(n,r,o){let{windows:s,windowSize:l}=i(n),c=a.ZERO,u=a.BASE,m=BigInt(2**n-1),g=2**n,x=BigInt(n);for(let w=0;w<s;w++){let v=w*l,E=Number(o&m);o>>=x,E>l&&(E-=g,o+=Qb);let P=v,G=v+Math.abs(E)-1,q=w%2!==0,Q=E<0;E===0?u=u.add(e(q,r[P])):c=c.add(e(Q,r[G]))}return{p:c,f:u}},wNAFCached(n,r,o,s){let l=n._WINDOW_SIZE||1,c=r.get(n);return c||(c=this.precomputeWindow(n,l),l!==1&&r.set(n,s(c))),this.wNAF(l,c,o)}}}function Zb(a){return Yb(a.Fp),an(a,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...$b(a.n,a.nBitLength),...a,p:a.Fp.ORDER})}var eI,Qb,n0=ae(()=>{"use strict";ku();Zr();eI=BigInt(0),Qb=BigInt(1)});function tI(a){let t=Zb(a);an(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:e,Fp:i,a:n}=t;if(e){if(!i.eql(n,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof e!="object"||typeof e.beta!="bigint"||typeof e.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}function nI(a){let t=tI(a),{Fp:e}=t,i=t.toBytes||((w,v,E)=>{let P=v.toAffine();return Qr(Uint8Array.from([4]),e.toBytes(P.x),e.toBytes(P.y))}),n=t.fromBytes||(w=>{let v=w.subarray(1),E=e.fromBytes(v.subarray(0,e.BYTES)),P=e.fromBytes(v.subarray(e.BYTES,2*e.BYTES));return{x:E,y:P}});function r(w){let{a:v,b:E}=t,P=e.sqr(w),G=e.mul(P,w);return e.add(e.add(G,e.mul(w,v)),E)}if(!e.eql(e.sqr(t.Gy),r(t.Gx)))throw new Error("bad generator point: equation left != right");function o(w){return typeof w=="bigint"&&ha<w&&w<t.n}function s(w){if(!o(w))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function l(w){let{allowedPrivateKeyLengths:v,nByteLength:E,wrapPrivateKey:P,n:G}=t;if(v&&typeof w!="bigint"){if(w instanceof Uint8Array&&(w=Bn(w)),typeof w!="string"||!v.includes(w.length))throw new Error("Invalid key");w=w.padStart(E*2,"0")}let q;try{q=typeof w=="bigint"?w:da(si("private key",w,E))}catch{throw new Error(`private key must be ${E} bytes, hex or bigint, not ${typeof w}`)}return P&&(q=Ot(q,G)),s(q),q}let c=new Map;function u(w){if(!(w instanceof m))throw new Error("ProjectivePoint expected")}class m{constructor(v,E,P){if(this.px=v,this.py=E,this.pz=P,v==null||!e.isValid(v))throw new Error("x required");if(E==null||!e.isValid(E))throw new Error("y required");if(P==null||!e.isValid(P))throw new Error("z required")}static fromAffine(v){let{x:E,y:P}=v||{};if(!v||!e.isValid(E)||!e.isValid(P))throw new Error("invalid affine point");if(v instanceof m)throw new Error("projective point not allowed");let G=q=>e.eql(q,e.ZERO);return G(E)&&G(P)?m.ZERO:new m(E,P,e.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(v){let E=e.invertBatch(v.map(P=>P.pz));return v.map((P,G)=>P.toAffine(E[G])).map(m.fromAffine)}static fromHex(v){let E=m.fromAffine(n(si("pointHex",v)));return E.assertValidity(),E}static fromPrivateKey(v){return m.BASE.multiply(l(v))}_setWindowSize(v){this._WINDOW_SIZE=v,c.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint&&!e.is0(this.py))return;throw new Error("bad point: ZERO")}let{x:v,y:E}=this.toAffine();if(!e.isValid(v)||!e.isValid(E))throw new Error("bad point: x or y not FE");let P=e.sqr(E),G=r(v);if(!e.eql(P,G))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y:v}=this.toAffine();if(e.isOdd)return!e.isOdd(v);throw new Error("Field doesn't support isOdd")}equals(v){u(v);let{px:E,py:P,pz:G}=this,{px:q,py:Q,pz:Y}=v,O=e.eql(e.mul(E,Y),e.mul(q,G)),J=e.eql(e.mul(P,Y),e.mul(Q,G));return O&&J}negate(){return new m(this.px,e.neg(this.py),this.pz)}double(){let{a:v,b:E}=t,P=e.mul(E,r0),{px:G,py:q,pz:Q}=this,Y=e.ZERO,O=e.ZERO,J=e.ZERO,de=e.mul(G,G),He=e.mul(q,q),De=e.mul(Q,Q),Ae=e.mul(G,q);return Ae=e.add(Ae,Ae),J=e.mul(G,Q),J=e.add(J,J),Y=e.mul(v,J),O=e.mul(P,De),O=e.add(Y,O),Y=e.sub(He,O),O=e.add(He,O),O=e.mul(Y,O),Y=e.mul(Ae,Y),J=e.mul(P,J),De=e.mul(v,De),Ae=e.sub(de,De),Ae=e.mul(v,Ae),Ae=e.add(Ae,J),J=e.add(de,de),de=e.add(J,de),de=e.add(de,De),de=e.mul(de,Ae),O=e.add(O,de),De=e.mul(q,Q),De=e.add(De,De),de=e.mul(De,Ae),Y=e.sub(Y,de),J=e.mul(De,He),J=e.add(J,J),J=e.add(J,J),new m(Y,O,J)}add(v){u(v);let{px:E,py:P,pz:G}=this,{px:q,py:Q,pz:Y}=v,O=e.ZERO,J=e.ZERO,de=e.ZERO,He=t.a,De=e.mul(t.b,r0),Ae=e.mul(E,q),dt=e.mul(P,Q),Ut=e.mul(G,Y),Li=e.add(E,P),oe=e.add(q,Q);Li=e.mul(Li,oe),oe=e.add(Ae,dt),Li=e.sub(Li,oe),oe=e.add(E,G);let ge=e.add(q,Y);return oe=e.mul(oe,ge),ge=e.add(Ae,Ut),oe=e.sub(oe,ge),ge=e.add(P,G),O=e.add(Q,Y),ge=e.mul(ge,O),O=e.add(dt,Ut),ge=e.sub(ge,O),de=e.mul(He,oe),O=e.mul(De,Ut),de=e.add(O,de),O=e.sub(dt,de),de=e.add(dt,de),J=e.mul(O,de),dt=e.add(Ae,Ae),dt=e.add(dt,Ae),Ut=e.mul(He,Ut),oe=e.mul(De,oe),dt=e.add(dt,Ut),Ut=e.sub(Ae,Ut),Ut=e.mul(He,Ut),oe=e.add(oe,Ut),Ae=e.mul(dt,oe),J=e.add(J,Ae),Ae=e.mul(ge,oe),O=e.mul(Li,O),O=e.sub(O,Ae),Ae=e.mul(Li,dt),de=e.mul(ge,de),de=e.add(de,Ae),new m(O,J,de)}subtract(v){return this.add(v.negate())}is0(){return this.equals(m.ZERO)}wNAF(v){return x.wNAFCached(this,c,v,E=>{let P=e.invertBatch(E.map(G=>G.pz));return E.map((G,q)=>G.toAffine(P[q])).map(m.fromAffine)})}multiplyUnsafe(v){let E=m.ZERO;if(v===ha)return E;if(s(v),v===yi)return this;let{endo:P}=t;if(!P)return x.unsafeLadder(this,v);let{k1neg:G,k1:q,k2neg:Q,k2:Y}=P.splitScalar(v),O=E,J=E,de=this;for(;q>ha||Y>ha;)q&yi&&(O=O.add(de)),Y&yi&&(J=J.add(de)),de=de.double(),q>>=yi,Y>>=yi;return G&&(O=O.negate()),Q&&(J=J.negate()),J=new m(e.mul(J.px,P.beta),J.py,J.pz),O.add(J)}multiply(v){s(v);let E=v,P,G,{endo:q}=t;if(q){let{k1neg:Q,k1:Y,k2neg:O,k2:J}=q.splitScalar(E),{p:de,f:He}=this.wNAF(Y),{p:De,f:Ae}=this.wNAF(J);de=x.constTimeNegate(Q,de),De=x.constTimeNegate(O,De),De=new m(e.mul(De.px,q.beta),De.py,De.pz),P=de.add(De),G=He.add(Ae)}else{let{p:Q,f:Y}=this.wNAF(E);P=Q,G=Y}return m.normalizeZ([P,G])[0]}multiplyAndAddUnsafe(v,E,P){let G=m.BASE,q=(Y,O)=>O===ha||O===yi||!Y.equals(G)?Y.multiplyUnsafe(O):Y.multiply(O),Q=q(this,E).add(q(v,P));return Q.is0()?void 0:Q}toAffine(v){let{px:E,py:P,pz:G}=this,q=this.is0();v==null&&(v=q?e.ONE:e.inv(G));let Q=e.mul(E,v),Y=e.mul(P,v),O=e.mul(G,v);if(q)return{x:e.ZERO,y:e.ZERO};if(!e.eql(O,e.ONE))throw new Error("invZ was invalid");return{x:Q,y:Y}}isTorsionFree(){let{h:v,isTorsionFree:E}=t;if(v===yi)return!0;if(E)return E(m,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:v,clearCofactor:E}=t;return v===yi?this:E?E(m,this):this.multiplyUnsafe(t.h)}toRawBytes(v=!0){return this.assertValidity(),i(m,this,v)}toHex(v=!0){return Bn(this.toRawBytes(v))}}m.BASE=new m(t.Gx,t.Gy,e.ONE),m.ZERO=new m(e.ZERO,e.ONE,e.ZERO);let g=t.nBitLength,x=a0(m,t.endo?Math.ceil(g/2):g);return{CURVE:t,ProjectivePoint:m,normPrivateKeyToScalar:l,weierstrassEquation:r,isWithinCurveOrder:o}}function rI(a){let t=Zb(a);return an(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function o0(a){let t=rI(a),{Fp:e,n:i}=t,n=e.BYTES+1,r=2*e.BYTES+1;function o(oe){return ha<oe&&oe<e.ORDER}function s(oe){return Ot(oe,i)}function l(oe){return Cu(oe,i)}let{ProjectivePoint:c,normPrivateKeyToScalar:u,weierstrassEquation:m,isWithinCurveOrder:g}=nI({...t,toBytes(oe,ge,k){let Qe=ge.toAffine(),Re=e.toBytes(Qe.x),ht=Qr;return k?ht(Uint8Array.from([ge.hasEvenY()?2:3]),Re):ht(Uint8Array.from([4]),Re,e.toBytes(Qe.y))},fromBytes(oe){let ge=oe.length,k=oe[0],Qe=oe.subarray(1);if(ge===n&&(k===2||k===3)){let Re=da(Qe);if(!o(Re))throw new Error("Point is not on curve");let ht=m(Re),Vt=e.sqrt(ht),Ft=(Vt&yi)===yi;return(k&1)===1!==Ft&&(Vt=e.neg(Vt)),{x:Re,y:Vt}}else if(ge===r&&k===4){let Re=e.fromBytes(Qe.subarray(0,e.BYTES)),ht=e.fromBytes(Qe.subarray(e.BYTES,2*e.BYTES));return{x:Re,y:ht}}else throw new Error(`Point of length ${ge} was invalid. Expected ${n} compressed bytes or ${r} uncompressed bytes`)}}),x=oe=>Bn(tn(oe,t.nByteLength));function w(oe){let ge=i>>yi;return oe>ge}function v(oe){return w(oe)?s(-oe):oe}let E=(oe,ge,k)=>da(oe.slice(ge,k));class P{constructor(ge,k,Qe){this.r=ge,this.s=k,this.recovery=Qe,this.assertValidity()}static fromCompact(ge){let k=t.nByteLength;return ge=si("compactSignature",ge,k*2),new P(E(ge,0,k),E(ge,k,2*k))}static fromDER(ge){let{r:k,s:Qe}=Nn.toSig(si("DER",ge));return new P(k,Qe)}assertValidity(){if(!g(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!g(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(ge){return new P(this.r,this.s,ge)}recoverPublicKey(ge){let{r:k,s:Qe,recovery:Re}=this,ht=J(si("msgHash",ge));if(Re==null||![0,1,2,3].includes(Re))throw new Error("recovery id invalid");let Vt=Re===2||Re===3?k+t.n:k;if(Vt>=e.ORDER)throw new Error("recovery id 2 or 3 invalid");let Ft=Re&1?"03":"02",Ni=c.fromHex(Ft+x(Vt)),bt=l(Vt),Sa=s(-ht*bt),pn=s(Qe*bt),Yt=c.BASE.multiplyAndAddUnsafe(Ni,Sa,pn);if(!Yt)throw new Error("point at infinify");return Yt.assertValidity(),Yt}hasHighS(){return w(this.s)}normalizeS(){return this.hasHighS()?new P(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return Pn(this.toDERHex())}toDERHex(){return Nn.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Pn(this.toCompactHex())}toCompactHex(){return x(this.r)+x(this.s)}}let G={isValidPrivateKey(oe){try{return u(oe),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{let oe=Xb(t.n);return i0(t.randomBytes(oe),t.n)},precompute(oe=8,ge=c.BASE){return ge._setWindowSize(oe),ge.multiply(BigInt(3)),ge}};function q(oe,ge=!0){return c.fromPrivateKey(oe).toRawBytes(ge)}function Q(oe){let ge=oe instanceof Uint8Array,k=typeof oe=="string",Qe=(ge||k)&&oe.length;return ge?Qe===n||Qe===r:k?Qe===2*n||Qe===2*r:oe instanceof c}function Y(oe,ge,k=!0){if(Q(oe))throw new Error("first arg must be private key");if(!Q(ge))throw new Error("second arg must be public key");return c.fromHex(ge).multiply(u(oe)).toRawBytes(k)}let O=t.bits2int||function(oe){let ge=da(oe),k=oe.length*8-t.nBitLength;return k>0?ge>>BigInt(k):ge},J=t.bits2int_modN||function(oe){return s(O(oe))},de=rs(t.nBitLength);function He(oe){if(typeof oe!="bigint")throw new Error("bigint expected");if(!(ha<=oe&&oe<de))throw new Error(`bigint expected < 2^${t.nBitLength}`);return tn(oe,t.nByteLength)}function De(oe,ge,k=Ae){if(["recovered","canonical"].some(ea=>ea in k))throw new Error("sign() legacy options not supported");let{hash:Qe,randomBytes:Re}=t,{lowS:ht,prehash:Vt,extraEntropy:Ft}=k;ht==null&&(ht=!0),oe=si("msgHash",oe),Vt&&(oe=si("prehashed msgHash",Qe(oe)));let Ni=J(oe),bt=u(ge),Sa=[He(bt),He(Ni)];if(Ft!=null){let ea=Ft===!0?Re(e.BYTES):Ft;Sa.push(si("extraEntropy",ea))}let pn=Qr(...Sa),Yt=Ni;function mo(ea){let Ca=O(ea);if(!g(Ca))return;let ho=l(Ca),ti=c.BASE.multiply(Ca).toAffine(),ka=s(ti.x);if(ka===ha)return;let qn=s(ho*s(Yt+ka*bt));if(qn===ha)return;let xl=(ti.x===ka?0:2)|Number(ti.y&yi),Wn=qn;return ht&&w(qn)&&(Wn=v(qn),xl^=1),new P(ka,Wn,xl)}return{seed:pn,k2sig:mo}}let Ae={lowS:t.lowS,prehash:!1},dt={lowS:t.lowS,prehash:!1};function Ut(oe,ge,k=Ae){let{seed:Qe,k2sig:Re}=De(oe,ge,k),ht=t;return qb(ht.hash.outputLen,ht.nByteLength,ht.hmac)(Qe,Re)}c.BASE._setWindowSize(8);function Li(oe,ge,k,Qe=dt){let Re=oe;if(ge=si("msgHash",ge),k=si("publicKey",k),"strict"in Qe)throw new Error("options.strict was renamed to lowS");let{lowS:ht,prehash:Vt}=Qe,Ft,Ni;try{if(typeof Re=="string"||Re instanceof Uint8Array)try{Ft=P.fromDER(Re)}catch(ti){if(!(ti instanceof Nn.Err))throw ti;Ft=P.fromCompact(Re)}else if(typeof Re=="object"&&typeof Re.r=="bigint"&&typeof Re.s=="bigint"){let{r:ti,s:ka}=Re;Ft=new P(ti,ka)}else throw new Error("PARSE");Ni=c.fromHex(k)}catch(ti){if(ti.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(ht&&Ft.hasHighS())return!1;Vt&&(ge=t.hash(ge));let{r:bt,s:Sa}=Ft,pn=J(ge),Yt=l(Sa),mo=s(pn*Yt),ea=s(bt*Yt),Ca=c.BASE.multiplyAndAddUnsafe(Ni,mo,ea)?.toAffine();return Ca?s(Ca.x)===bt:!1}return{CURVE:t,getPublicKey:q,getSharedSecret:Y,sign:Ut,verify:Li,ProjectivePoint:c,Signature:P,utils:G}}var iI,aI,Nn,ha,yi,XV,r0,QV,s0=ae(()=>{"use strict";ku();Zr();Zr();n0();({bytesToNumberBE:iI,hexToBytes:aI}=Wb),Nn={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(a){let{Err:t}=Nn;if(a.length<2||a[0]!==2)throw new t("Invalid signature integer tag");let e=a[1],i=a.subarray(2,e+2);if(!e||i.length!==e)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:iI(i),l:a.subarray(e+2)}},toSig(a){let{Err:t}=Nn,e=typeof a=="string"?aI(a):a;if(!(e instanceof Uint8Array))throw new Error("ui8a expected");let i=e.length;if(i<2||e[0]!=48)throw new t("Invalid signature tag");if(e[1]!==i-2)throw new t("Invalid signature: incorrect length");let{d:n,l:r}=Nn._parseInt(e.subarray(2)),{d:o,l:s}=Nn._parseInt(r);if(s.length)throw new t("Invalid signature: left bytes after parsing");return{r:n,s:o}},hexFromSig(a){let t=c=>Number.parseInt(c[0],16)&8?"00"+c:c,e=c=>{let u=c.toString(16);return u.length&1?`0${u}`:u},i=t(e(a.s)),n=t(e(a.r)),r=i.length/2,o=n.length/2,s=e(r),l=e(o);return`30${e(o+r+4)}02${l}${n}02${s}${i}`}},ha=BigInt(0),yi=BigInt(1),XV=BigInt(2),r0=BigInt(3),QV=BigInt(4)});var Au,Jb,l0=ae(()=>{"use strict";hc();Jn();Au=class extends Ba{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,bv(t);let i=Pa(e);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,r=new Uint8Array(n);r.set(i.length>n?t.create().update(i).digest():i);for(let o=0;o<r.length;o++)r[o]^=54;this.iHash.update(r),this.oHash=t.create();for(let o=0;o<r.length;o++)r[o]^=106;this.oHash.update(r),r.fill(0)}update(t){return oa(this),this.iHash.update(t),this}digestInto(t){oa(this),Uo(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));let{oHash:e,iHash:i,finished:n,destroyed:r,blockLen:o,outputLen:s}=this;return t=t,t.finished=n,t.destroyed=r,t.blockLen=o,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Jb=(a,t,e)=>new Au(a,t).update(e).digest();Jb.create=(a,t)=>new Au(a,t)});function oI(a){return{hash:a,hmac:(t,...e)=>Jb(a,t,Cv(...e)),randomBytes:Av}}function c0(a,t){let e=i=>o0({...a,...oI(i)});return Object.freeze({...e(t),create:e})}var u0=ae(()=>{"use strict";l0();Jn();s0();});function lI(a){let t=d0,e=BigInt(3),i=BigInt(6),n=BigInt(11),r=BigInt(22),o=BigInt(23),s=BigInt(44),l=BigInt(88),c=a*a*a%t,u=c*c*a%t,m=li(u,e,t)*u%t,g=li(m,e,t)*u%t,x=li(g,eg,t)*c%t,w=li(x,n,t)*x%t,v=li(w,r,t)*w%t,E=li(v,s,t)*v%t,P=li(E,l,t)*E%t,G=li(P,s,t)*v%t,q=li(G,e,t)*u%t,Q=li(q,o,t)*w%t,Y=li(Q,i,t)*c%t,O=li(Y,eg,t);if(!tg.eql(tg.sqr(O),a))throw new Error("Cannot find square root");return O}var d0,p0,sI,eg,m0,tg,ig,c8,u8,h0=ae(()=>{"use strict";x_();ku();u0();d0=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),p0=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),sI=BigInt(1),eg=BigInt(2),m0=(a,t)=>(a+t/eg)/t;tg=e0(d0,void 0,void 0,{sqrt:lI}),ig=c0({a:BigInt(0),b:BigInt(7),Fp:tg,n:p0,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:a=>{let t=p0,e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-sI*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),n=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),r=e,o=BigInt("0x100000000000000000000000000000000"),s=m0(r*a,t),l=m0(-i*a,t),c=Ot(a-s*e-l*n,t),u=Ot(-s*i-l*r,t),m=c>o,g=u>o;if(m&&(c=t-c),g&&(u=t-u),c>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+a);return{k1neg:m,k1:c,k2neg:g,k2:u}}}},__),c8=BigInt(0),u8=ig.ProjectivePoint});var q0=mx((Yg,$g)=>{"use strict";(function(a,t){typeof Yg=="object"&&typeof $g<"u"?$g.exports=t():typeof define=="function"&&define.amd?define(t):(a=typeof globalThis<"u"?globalThis:a||self).jsSHA=t()})(Yg,function(){"use strict";var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function t(S,b,I,T){var D,_,W,K=b||[0],Z=(I=I||0)>>>3,re=T===-1?3:0;for(D=0;D<S.length;D+=1)_=(W=D+Z)>>>2,K.length<=_&&K.push(0),K[_]|=S[D]<<8*(re+T*(W%4));return{value:K,binLen:8*S.length+I}}function e(S,b,I){switch(b){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(S){case"HEX":return function(T,D,_){return function(W,K,Z,re){var _e,ne,ue,Be;if(W.length%2!=0)throw new Error("String of HEX type must be in byte increments");var ie=K||[0],Ge=(Z=Z||0)>>>3,Ue=re===-1?3:0;for(_e=0;_e<W.length;_e+=2){if(ne=parseInt(W.substr(_e,2),16),isNaN(ne))throw new Error("String of HEX type contains invalid characters");for(ue=(Be=(_e>>>1)+Ge)>>>2;ie.length<=ue;)ie.push(0);ie[ue]|=ne<<8*(Ue+re*(Be%4))}return{value:ie,binLen:4*W.length+Z}}(T,D,_,I)};case"TEXT":return function(T,D,_){return function(W,K,Z,re,_e){var ne,ue,Be,ie,Ge,Ue,$e,at,ta=0,ii=Z||[0],_i=(re=re||0)>>>3;if(K==="UTF8")for($e=_e===-1?3:0,Be=0;Be<W.length;Be+=1)for(ue=[],128>(ne=W.charCodeAt(Be))?ue.push(ne):2048>ne?(ue.push(192|ne>>>6),ue.push(128|63&ne)):55296>ne||57344<=ne?ue.push(224|ne>>>12,128|ne>>>6&63,128|63&ne):(Be+=1,ne=65536+((1023&ne)<<10|1023&W.charCodeAt(Be)),ue.push(240|ne>>>18,128|ne>>>12&63,128|ne>>>6&63,128|63&ne)),ie=0;ie<ue.length;ie+=1){for(Ge=(Ue=ta+_i)>>>2;ii.length<=Ge;)ii.push(0);ii[Ge]|=ue[ie]<<8*($e+_e*(Ue%4)),ta+=1}else for($e=_e===-1?2:0,at=K==="UTF16LE"&&_e!==1||K!=="UTF16LE"&&_e===1,Be=0;Be<W.length;Be+=1){for(ne=W.charCodeAt(Be),at===!0&&(ne=(ie=255&ne)<<8|ne>>>8),Ge=(Ue=ta+_i)>>>2;ii.length<=Ge;)ii.push(0);ii[Ge]|=ne<<8*($e+_e*(Ue%4)),ta+=2}return{value:ii,binLen:8*ta+re}}(T,b,D,_,I)};case"B64":return function(T,D,_){return function(W,K,Z,re){var _e,ne,ue,Be,ie,Ge,Ue=0,$e=K||[0],at=(Z=Z||0)>>>3,ta=re===-1?3:0,ii=W.indexOf("=");if(W.search(/^[a-zA-Z0-9=+/]+$/)===-1)throw new Error("Invalid character in base-64 string");if(W=W.replace(/=/g,""),ii!==-1&&ii<W.length)throw new Error("Invalid '=' found in base-64 string");for(_e=0;_e<W.length;_e+=4){for(Be=W.substr(_e,4),ue=0,ne=0;ne<Be.length;ne+=1)ue|=a.indexOf(Be.charAt(ne))<<18-6*ne;for(ne=0;ne<Be.length-1;ne+=1){for(ie=(Ge=Ue+at)>>>2;$e.length<=ie;)$e.push(0);$e[ie]|=(ue>>>16-8*ne&255)<<8*(ta+re*(Ge%4)),Ue+=1}}return{value:$e,binLen:8*Ue+Z}}(T,D,_,I)};case"BYTES":return function(T,D,_){return function(W,K,Z,re){var _e,ne,ue,Be,ie=K||[0],Ge=(Z=Z||0)>>>3,Ue=re===-1?3:0;for(ne=0;ne<W.length;ne+=1)_e=W.charCodeAt(ne),ue=(Be=ne+Ge)>>>2,ie.length<=ue&&ie.push(0),ie[ue]|=_e<<8*(Ue+re*(Be%4));return{value:ie,binLen:8*W.length+Z}}(T,D,_,I)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(T,D,_){return function(W,K,Z,re){return t(new Uint8Array(W),K,Z,re)}(T,D,_,I)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(T,D,_){return t(T,D,_,I)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function i(S,b,I,T){switch(S){case"HEX":return function(D){return function(_,W,K,Z){var re,_e,ne="",ue=W/8,Be=K===-1?3:0;for(re=0;re<ue;re+=1)_e=_[re>>>2]>>>8*(Be+K*(re%4)),ne+="0123456789abcdef".charAt(_e>>>4&15)+"0123456789abcdef".charAt(15&_e);return Z.outputUpper?ne.toUpperCase():ne}(D,b,I,T)};case"B64":return function(D){return function(_,W,K,Z){var re,_e,ne,ue,Be,ie="",Ge=W/8,Ue=K===-1?3:0;for(re=0;re<Ge;re+=3)for(ue=re+1<Ge?_[re+1>>>2]:0,Be=re+2<Ge?_[re+2>>>2]:0,ne=(_[re>>>2]>>>8*(Ue+K*(re%4))&255)<<16|(ue>>>8*(Ue+K*((re+1)%4))&255)<<8|Be>>>8*(Ue+K*((re+2)%4))&255,_e=0;_e<4;_e+=1)ie+=8*re+6*_e<=W?a.charAt(ne>>>6*(3-_e)&63):Z.b64Pad;return ie}(D,b,I,T)};case"BYTES":return function(D){return function(_,W,K){var Z,re,_e="",ne=W/8,ue=K===-1?3:0;for(Z=0;Z<ne;Z+=1)re=_[Z>>>2]>>>8*(ue+K*(Z%4))&255,_e+=String.fromCharCode(re);return _e}(D,b,I)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(D){return function(_,W,K){var Z,re=W/8,_e=new ArrayBuffer(re),ne=new Uint8Array(_e),ue=K===-1?3:0;for(Z=0;Z<re;Z+=1)ne[Z]=_[Z>>>2]>>>8*(ue+K*(Z%4))&255;return _e}(D,b,I)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(D){return function(_,W,K){var Z,re=W/8,_e=K===-1?3:0,ne=new Uint8Array(re);for(Z=0;Z<re;Z+=1)ne[Z]=_[Z>>>2]>>>8*(_e+K*(Z%4))&255;return ne}(D,b,I)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}var n=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],r=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s="Chosen SHA variant is not supported";function l(S,b){var I,T,D=S.binLen>>>3,_=b.binLen>>>3,W=D<<3,K=4-D<<3;if(D%4!=0){for(I=0;I<_;I+=4)T=D+I>>>2,S.value[T]|=b.value[I>>>2]<<W,S.value.push(0),S.value[T+1]|=b.value[I>>>2]>>>K;return(S.value.length<<2)-4>=_+D&&S.value.pop(),{value:S.value,binLen:S.binLen+b.binLen}}return{value:S.value.concat(b.value),binLen:S.binLen+b.binLen}}function c(S){var b={outputUpper:!1,b64Pad:"=",outputLen:-1},I=S||{},T="Output length must be a multiple of 8";if(b.outputUpper=I.outputUpper||!1,I.b64Pad&&(b.b64Pad=I.b64Pad),I.outputLen){if(I.outputLen%8!=0)throw new Error(T);b.outputLen=I.outputLen}else if(I.shakeLen){if(I.shakeLen%8!=0)throw new Error(T);b.outputLen=I.shakeLen}if(typeof b.outputUpper!="boolean")throw new Error("Invalid outputUpper formatting option");if(typeof b.b64Pad!="string")throw new Error("Invalid b64Pad formatting option");return b}function u(S,b,I,T){var D=S+" must include a value and format";if(!b){if(!T)throw new Error(D);return T}if(b.value===void 0||!b.format)throw new Error(D);return e(b.format,b.encoding||"UTF8",I)(b.value)}var m=function(){function S(b,I,T){var D=T||{};if(this.t=I,this.i=D.encoding||"UTF8",this.numRounds=D.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=b,this.u=[],this.s=0,this.h=!1,this.v=0,this.A=!1,this.l=[],this.H=[]}return S.prototype.update=function(b){var I,T=0,D=this.S>>>5,_=this.p(b,this.u,this.s),W=_.binLen,K=_.value,Z=W>>>5;for(I=0;I<Z;I+=D)T+this.S<=W&&(this.m=this.R(K.slice(I,I+D),this.m),T+=this.S);this.v+=T,this.u=K.slice(T>>>5),this.s=W%this.S,this.h=!0},S.prototype.getHash=function(b,I){var T,D,_=this.U,W=c(I);if(this.T){if(W.outputLen===-1)throw new Error("Output length must be specified in options");_=W.outputLen}var K=i(b,_,this.C,W);if(this.A&&this.F)return K(this.F(W));for(D=this.K(this.u.slice(),this.s,this.v,this.B(this.m),_),T=1;T<this.numRounds;T+=1)this.T&&_%32!=0&&(D[D.length-1]&=16777215>>>24-_%32),D=this.K(D,_,0,this.L(this.o),_);return K(D)},S.prototype.setHMACKey=function(b,I,T){if(!this.g)throw new Error("Variant does not support HMAC");if(this.h)throw new Error("Cannot set MAC key after calling update");var D=e(I,(T||{}).encoding||"UTF8",this.C);this.k(D(b))},S.prototype.k=function(b){var I,T=this.S>>>3,D=T/4-1;if(this.numRounds!==1)throw new Error("Cannot set numRounds with MAC");if(this.A)throw new Error("MAC key already set");for(T<b.binLen/8&&(b.value=this.K(b.value,b.binLen,0,this.L(this.o),this.U));b.value.length<=D;)b.value.push(0);for(I=0;I<=D;I+=1)this.l[I]=909522486^b.value[I],this.H[I]=1549556828^b.value[I];this.m=this.R(this.l,this.m),this.v=this.S,this.A=!0},S.prototype.getHMAC=function(b,I){var T=c(I);return i(b,this.U,this.C,T)(this.Y())},S.prototype.Y=function(){var b;if(!this.A)throw new Error("Cannot call getHMAC without first setting MAC key");var I=this.K(this.u.slice(),this.s,this.v,this.B(this.m),this.U);return b=this.R(this.H,this.L(this.o)),b=this.K(I,this.U,this.S,b,this.U)},S}(),g=function(S,b){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(I,T){I.__proto__=T}||function(I,T){for(var D in T)Object.prototype.hasOwnProperty.call(T,D)&&(I[D]=T[D])})(S,b)};function x(S,b){function I(){this.constructor=S}g(S,b),S.prototype=b===null?Object.create(b):(I.prototype=b.prototype,new I)}function w(S,b){return S<<b|S>>>32-b}function v(S,b){return S>>>b|S<<32-b}function E(S,b){return S>>>b}function P(S,b,I){return S^b^I}function G(S,b,I){return S&b^~S&I}function q(S,b,I){return S&b^S&I^b&I}function Q(S){return v(S,2)^v(S,13)^v(S,22)}function Y(S,b){var I=(65535&S)+(65535&b);return(65535&(S>>>16)+(b>>>16)+(I>>>16))<<16|65535&I}function O(S,b,I,T){var D=(65535&S)+(65535&b)+(65535&I)+(65535&T);return(65535&(S>>>16)+(b>>>16)+(I>>>16)+(T>>>16)+(D>>>16))<<16|65535&D}function J(S,b,I,T,D){var _=(65535&S)+(65535&b)+(65535&I)+(65535&T)+(65535&D);return(65535&(S>>>16)+(b>>>16)+(I>>>16)+(T>>>16)+(D>>>16)+(_>>>16))<<16|65535&_}function de(S){return v(S,7)^v(S,18)^E(S,3)}function He(S){return v(S,6)^v(S,11)^v(S,25)}function De(S){return[1732584193,4023233417,2562383102,271733878,3285377520]}function Ae(S,b){var I,T,D,_,W,K,Z,re=[];for(I=b[0],T=b[1],D=b[2],_=b[3],W=b[4],Z=0;Z<80;Z+=1)re[Z]=Z<16?S[Z]:w(re[Z-3]^re[Z-8]^re[Z-14]^re[Z-16],1),K=Z<20?J(w(I,5),G(T,D,_),W,1518500249,re[Z]):Z<40?J(w(I,5),P(T,D,_),W,1859775393,re[Z]):Z<60?J(w(I,5),q(T,D,_),W,2400959708,re[Z]):J(w(I,5),P(T,D,_),W,3395469782,re[Z]),W=_,_=D,D=w(T,30),T=I,I=K;return b[0]=Y(I,b[0]),b[1]=Y(T,b[1]),b[2]=Y(D,b[2]),b[3]=Y(_,b[3]),b[4]=Y(W,b[4]),b}function dt(S,b,I,T){for(var D,_=15+(b+65>>>9<<4),W=b+I;S.length<=_;)S.push(0);for(S[b>>>5]|=128<<24-b%32,S[_]=4294967295&W,S[_-1]=W/4294967296|0,D=0;D<S.length;D+=16)T=Ae(S.slice(D,D+16),T);return T}var Ut=function(S){function b(I,T,D){var _=this;if(I!=="SHA-1")throw new Error(s);var W=D||{};return(_=S.call(this,I,T,D)||this).g=!0,_.F=_.Y,_.C=-1,_.p=e(_.t,_.i,_.C),_.R=Ae,_.B=function(K){return K.slice()},_.L=De,_.K=dt,_.m=[1732584193,4023233417,2562383102,271733878,3285377520],_.S=512,_.U=160,_.T=!1,W.hmacKey&&_.k(u("hmacKey",W.hmacKey,_.C)),_}return x(b,S),b}(m);function Li(S){return S=="SHA-224"?r.slice():o.slice()}function oe(S,b){var I,T,D,_,W,K,Z,re,_e,ne,ue,Be,ie=[];for(I=b[0],T=b[1],D=b[2],_=b[3],W=b[4],K=b[5],Z=b[6],re=b[7],ue=0;ue<64;ue+=1)ie[ue]=ue<16?S[ue]:O(v(Be=ie[ue-2],17)^v(Be,19)^E(Be,10),ie[ue-7],de(ie[ue-15]),ie[ue-16]),_e=J(re,He(W),G(W,K,Z),n[ue],ie[ue]),ne=Y(Q(I),q(I,T,D)),re=Z,Z=K,K=W,W=Y(_,_e),_=D,D=T,T=I,I=Y(_e,ne);return b[0]=Y(I,b[0]),b[1]=Y(T,b[1]),b[2]=Y(D,b[2]),b[3]=Y(_,b[3]),b[4]=Y(W,b[4]),b[5]=Y(K,b[5]),b[6]=Y(Z,b[6]),b[7]=Y(re,b[7]),b}var ge=function(S){function b(I,T,D){var _=this;if(I!=="SHA-224"&&I!=="SHA-256")throw new Error(s);var W=D||{};return(_=S.call(this,I,T,D)||this).F=_.Y,_.g=!0,_.C=-1,_.p=e(_.t,_.i,_.C),_.R=oe,_.B=function(K){return K.slice()},_.L=Li,_.K=function(K,Z,re,_e){return function(ne,ue,Be,ie,Ge){for(var Ue,$e=15+(ue+65>>>9<<4),at=ue+Be;ne.length<=$e;)ne.push(0);for(ne[ue>>>5]|=128<<24-ue%32,ne[$e]=4294967295&at,ne[$e-1]=at/4294967296|0,Ue=0;Ue<ne.length;Ue+=16)ie=oe(ne.slice(Ue,Ue+16),ie);return Ge==="SHA-224"?[ie[0],ie[1],ie[2],ie[3],ie[4],ie[5],ie[6]]:ie}(K,Z,re,_e,I)},_.m=Li(I),_.S=512,_.U=I==="SHA-224"?224:256,_.T=!1,W.hmacKey&&_.k(u("hmacKey",W.hmacKey,_.C)),_}return x(b,S),b}(m),k=function(S,b){this.N=S,this.I=b};function Qe(S,b){var I;return b>32?(I=64-b,new k(S.I<<b|S.N>>>I,S.N<<b|S.I>>>I)):b!==0?(I=32-b,new k(S.N<<b|S.I>>>I,S.I<<b|S.N>>>I)):S}function Re(S,b){var I;return b<32?(I=32-b,new k(S.N>>>b|S.I<<I,S.I>>>b|S.N<<I)):(I=64-b,new k(S.I>>>b|S.N<<I,S.N>>>b|S.I<<I))}function ht(S,b){return new k(S.N>>>b,S.I>>>b|S.N<<32-b)}function Vt(S,b,I){return new k(S.N&b.N^~S.N&I.N,S.I&b.I^~S.I&I.I)}function Ft(S,b,I){return new k(S.N&b.N^S.N&I.N^b.N&I.N,S.I&b.I^S.I&I.I^b.I&I.I)}function Ni(S){var b=Re(S,28),I=Re(S,34),T=Re(S,39);return new k(b.N^I.N^T.N,b.I^I.I^T.I)}function bt(S,b){var I,T;I=(65535&S.I)+(65535&b.I);var D=(65535&(T=(S.I>>>16)+(b.I>>>16)+(I>>>16)))<<16|65535&I;return I=(65535&S.N)+(65535&b.N)+(T>>>16),T=(S.N>>>16)+(b.N>>>16)+(I>>>16),new k((65535&T)<<16|65535&I,D)}function Sa(S,b,I,T){var D,_;D=(65535&S.I)+(65535&b.I)+(65535&I.I)+(65535&T.I);var W=(65535&(_=(S.I>>>16)+(b.I>>>16)+(I.I>>>16)+(T.I>>>16)+(D>>>16)))<<16|65535&D;return D=(65535&S.N)+(65535&b.N)+(65535&I.N)+(65535&T.N)+(_>>>16),_=(S.N>>>16)+(b.N>>>16)+(I.N>>>16)+(T.N>>>16)+(D>>>16),new k((65535&_)<<16|65535&D,W)}function pn(S,b,I,T,D){var _,W;_=(65535&S.I)+(65535&b.I)+(65535&I.I)+(65535&T.I)+(65535&D.I);var K=(65535&(W=(S.I>>>16)+(b.I>>>16)+(I.I>>>16)+(T.I>>>16)+(D.I>>>16)+(_>>>16)))<<16|65535&_;return _=(65535&S.N)+(65535&b.N)+(65535&I.N)+(65535&T.N)+(65535&D.N)+(W>>>16),W=(S.N>>>16)+(b.N>>>16)+(I.N>>>16)+(T.N>>>16)+(D.N>>>16)+(_>>>16),new k((65535&W)<<16|65535&_,K)}function Yt(S,b){return new k(S.N^b.N,S.I^b.I)}function mo(S){var b=Re(S,1),I=Re(S,8),T=ht(S,7);return new k(b.N^I.N^T.N,b.I^I.I^T.I)}function ea(S){var b=Re(S,14),I=Re(S,18),T=Re(S,41);return new k(b.N^I.N^T.N,b.I^I.I^T.I)}var Ca=[new k(n[0],3609767458),new k(n[1],602891725),new k(n[2],3964484399),new k(n[3],2173295548),new k(n[4],4081628472),new k(n[5],3053834265),new k(n[6],2937671579),new k(n[7],3664609560),new k(n[8],2734883394),new k(n[9],1164996542),new k(n[10],1323610764),new k(n[11],3590304994),new k(n[12],4068182383),new k(n[13],991336113),new k(n[14],633803317),new k(n[15],3479774868),new k(n[16],2666613458),new k(n[17],944711139),new k(n[18],2341262773),new k(n[19],2007800933),new k(n[20],1495990901),new k(n[21],1856431235),new k(n[22],3175218132),new k(n[23],2198950837),new k(n[24],3999719339),new k(n[25],766784016),new k(n[26],2566594879),new k(n[27],3203337956),new k(n[28],1034457026),new k(n[29],2466948901),new k(n[30],3758326383),new k(n[31],168717936),new k(n[32],1188179964),new k(n[33],1546045734),new k(n[34],1522805485),new k(n[35],2643833823),new k(n[36],2343527390),new k(n[37],1014477480),new k(n[38],1206759142),new k(n[39],344077627),new k(n[40],1290863460),new k(n[41],3158454273),new k(n[42],3505952657),new k(n[43],106217008),new k(n[44],3606008344),new k(n[45],1432725776),new k(n[46],1467031594),new k(n[47],851169720),new k(n[48],3100823752),new k(n[49],1363258195),new k(n[50],3750685593),new k(n[51],3785050280),new k(n[52],3318307427),new k(n[53],3812723403),new k(n[54],2003034995),new k(n[55],3602036899),new k(n[56],1575990012),new k(n[57],1125592928),new k(n[58],2716904306),new k(n[59],442776044),new k(n[60],593698344),new k(n[61],3733110249),new k(n[62],2999351573),new k(n[63],3815920427),new k(3391569614,3928383900),new k(3515267271,566280711),new k(3940187606,3454069534),new k(4118630271,4000239992),new k(116418474,1914138554),new k(174292421,2731055270),new k(289380356,3203993006),new k(460393269,320620315),new k(685471733,587496836),new k(852142971,1086792851),new k(1017036298,365543100),new k(1126000580,2618297676),new k(1288033470,3409855158),new k(1501505948,4234509866),new k(1607167915,987167468),new k(1816402316,1246189591)];function ho(S){return S==="SHA-384"?[new k(3418070365,r[0]),new k(1654270250,r[1]),new k(2438529370,r[2]),new k(355462360,r[3]),new k(1731405415,r[4]),new k(41048885895,r[5]),new k(3675008525,r[6]),new k(1203062813,r[7])]:[new k(o[0],4089235720),new k(o[1],2227873595),new k(o[2],4271175723),new k(o[3],1595750129),new k(o[4],2917565137),new k(o[5],725511199),new k(o[6],4215389547),new k(o[7],327033209)]}function ti(S,b){var I,T,D,_,W,K,Z,re,_e,ne,ue,Be,ie,Ge,Ue,$e,at=[];for(I=b[0],T=b[1],D=b[2],_=b[3],W=b[4],K=b[5],Z=b[6],re=b[7],ue=0;ue<80;ue+=1)ue<16?(Be=2*ue,at[ue]=new k(S[Be],S[Be+1])):at[ue]=Sa((ie=at[ue-2],Ge=void 0,Ue=void 0,$e=void 0,Ge=Re(ie,19),Ue=Re(ie,61),$e=ht(ie,6),new k(Ge.N^Ue.N^$e.N,Ge.I^Ue.I^$e.I)),at[ue-7],mo(at[ue-15]),at[ue-16]),_e=pn(re,ea(W),Vt(W,K,Z),Ca[ue],at[ue]),ne=bt(Ni(I),Ft(I,T,D)),re=Z,Z=K,K=W,W=bt(_,_e),_=D,D=T,T=I,I=bt(_e,ne);return b[0]=bt(I,b[0]),b[1]=bt(T,b[1]),b[2]=bt(D,b[2]),b[3]=bt(_,b[3]),b[4]=bt(W,b[4]),b[5]=bt(K,b[5]),b[6]=bt(Z,b[6]),b[7]=bt(re,b[7]),b}var ka=function(S){function b(I,T,D){var _=this;if(I!=="SHA-384"&&I!=="SHA-512")throw new Error(s);var W=D||{};return(_=S.call(this,I,T,D)||this).F=_.Y,_.g=!0,_.C=-1,_.p=e(_.t,_.i,_.C),_.R=ti,_.B=function(K){return K.slice()},_.L=ho,_.K=function(K,Z,re,_e){return function(ne,ue,Be,ie,Ge){for(var Ue,$e=31+(ue+129>>>10<<5),at=ue+Be;ne.length<=$e;)ne.push(0);for(ne[ue>>>5]|=128<<24-ue%32,ne[$e]=4294967295&at,ne[$e-1]=at/4294967296|0,Ue=0;Ue<ne.length;Ue+=32)ie=ti(ne.slice(Ue,Ue+32),ie);return Ge==="SHA-384"?[(ie=ie)[0].N,ie[0].I,ie[1].N,ie[1].I,ie[2].N,ie[2].I,ie[3].N,ie[3].I,ie[4].N,ie[4].I,ie[5].N,ie[5].I]:[ie[0].N,ie[0].I,ie[1].N,ie[1].I,ie[2].N,ie[2].I,ie[3].N,ie[3].I,ie[4].N,ie[4].I,ie[5].N,ie[5].I,ie[6].N,ie[6].I,ie[7].N,ie[7].I]}(K,Z,re,_e,I)},_.m=ho(I),_.S=1024,_.U=I==="SHA-384"?384:512,_.T=!1,W.hmacKey&&_.k(u("hmacKey",W.hmacKey,_.C)),_}return x(b,S),b}(m),qn=[new k(0,1),new k(0,32898),new k(2147483648,32906),new k(2147483648,2147516416),new k(0,32907),new k(0,2147483649),new k(2147483648,2147516545),new k(2147483648,32777),new k(0,138),new k(0,136),new k(0,2147516425),new k(0,2147483658),new k(0,2147516555),new k(2147483648,139),new k(2147483648,32905),new k(2147483648,32771),new k(2147483648,32770),new k(2147483648,128),new k(0,32778),new k(2147483648,2147483658),new k(2147483648,2147516545),new k(2147483648,32896),new k(0,2147483649),new k(2147483648,2147516424)],xl=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function Wn(S){var b,I=[];for(b=0;b<5;b+=1)I[b]=[new k(0,0),new k(0,0),new k(0,0),new k(0,0),new k(0,0)];return I}function rx(S){var b,I=[];for(b=0;b<5;b+=1)I[b]=S[b].slice();return I}function wl(S,b){var I,T,D,_,W,K,Z,re,_e,ne=[],ue=[];if(S!==null)for(T=0;T<S.length;T+=2)b[(T>>>1)%5][(T>>>1)/5|0]=Yt(b[(T>>>1)%5][(T>>>1)/5|0],new k(S[T+1],S[T]));for(I=0;I<24;I+=1){for(_=Wn(),T=0;T<5;T+=1)ne[T]=(W=b[T][0],K=b[T][1],Z=b[T][2],re=b[T][3],_e=b[T][4],new k(W.N^K.N^Z.N^re.N^_e.N,W.I^K.I^Z.I^re.I^_e.I));for(T=0;T<5;T+=1)ue[T]=Yt(ne[(T+4)%5],Qe(ne[(T+1)%5],1));for(T=0;T<5;T+=1)for(D=0;D<5;D+=1)b[T][D]=Yt(b[T][D],ue[T]);for(T=0;T<5;T+=1)for(D=0;D<5;D+=1)_[D][(2*T+3*D)%5]=Qe(b[T][D],xl[T][D]);for(T=0;T<5;T+=1)for(D=0;D<5;D+=1)b[T][D]=Yt(_[T][D],new k(~_[(T+1)%5][D].N&_[(T+2)%5][D].N,~_[(T+1)%5][D].I&_[(T+2)%5][D].I));b[0][0]=Yt(b[0][0],qn[I])}return b}function Jg(S){var b,I,T=0,D=[0,0],_=[4294967295&S,S/4294967296&2097151];for(b=6;b>=0;b--)(I=_[b>>2]>>>8*b&255)===0&&T===0||(D[T+1>>2]|=I<<8*(T+1),T+=1);return T=T!==0?T:1,D[0]|=T,{value:T+1>4?D:[D[0]],binLen:8+8*T}}function mb(S){return l(Jg(S.binLen),S)}function ev(S,b){var I,T=Jg(b),D=b>>>2,_=(D-(T=l(T,S)).value.length%D)%D;for(I=0;I<_;I++)T.value.push(0);return T.value}var ox=function(S){function b(I,T,D){var _=this,W=6,K=0,Z=D||{};if((_=S.call(this,I,T,D)||this).numRounds!==1){if(Z.kmacKey||Z.hmacKey)throw new Error("Cannot set numRounds with MAC");if(_.o==="CSHAKE128"||_.o==="CSHAKE256")throw new Error("Cannot set numRounds for CSHAKE variants")}switch(_.C=1,_.p=e(_.t,_.i,_.C),_.R=wl,_.B=rx,_.L=Wn,_.m=Wn(),_.T=!1,I){case"SHA3-224":_.S=K=1152,_.U=224,_.g=!0,_.F=_.Y;break;case"SHA3-256":_.S=K=1088,_.U=256,_.g=!0,_.F=_.Y;break;case"SHA3-384":_.S=K=832,_.U=384,_.g=!0,_.F=_.Y;break;case"SHA3-512":_.S=K=576,_.U=512,_.g=!0,_.F=_.Y;break;case"SHAKE128":W=31,_.S=K=1344,_.U=-1,_.T=!0,_.g=!1,_.F=null;break;case"SHAKE256":W=31,_.S=K=1088,_.U=-1,_.T=!0,_.g=!1,_.F=null;break;case"KMAC128":W=4,_.S=K=1344,_.M(D),_.U=-1,_.T=!0,_.g=!1,_.F=_.X;break;case"KMAC256":W=4,_.S=K=1088,_.M(D),_.U=-1,_.T=!0,_.g=!1,_.F=_.X;break;case"CSHAKE128":_.S=K=1344,W=_.O(D),_.U=-1,_.T=!0,_.g=!1,_.F=null;break;case"CSHAKE256":_.S=K=1088,W=_.O(D),_.U=-1,_.T=!0,_.g=!1,_.F=null;break;default:throw new Error(s)}return _.K=function(re,_e,ne,ue,Be){return function(ie,Ge,Ue,$e,at,ta,ii){var _i,db,Il=0,fo=[],El=at>>>5,sx=Ge>>>5;for(_i=0;_i<sx&&Ge>=at;_i+=El)$e=wl(ie.slice(_i,_i+El),$e),Ge-=at;for(ie=ie.slice(_i),Ge%=at;ie.length<El;)ie.push(0);for(ie[(_i=Ge>>>3)>>2]^=ta<<_i%4*8,ie[El-1]^=2147483648,$e=wl(ie,$e);32*fo.length<ii&&(db=$e[Il%5][Il/5|0],fo.push(db.I),!(32*fo.length>=ii));)fo.push(db.N),64*(Il+=1)%at==0&&(wl(null,$e),Il=0);return fo}(re,_e,0,ue,K,W,Be)},Z.hmacKey&&_.k(u("hmacKey",Z.hmacKey,_.C)),_}return x(b,S),b.prototype.O=function(I,T){var D=function(Z){var re=Z||{};return{funcName:u("funcName",re.funcName,1,{value:[],binLen:0}),customization:u("Customization",re.customization,1,{value:[],binLen:0})}}(I||{});T&&(D.funcName=T);var _=l(mb(D.funcName),mb(D.customization));if(D.customization.binLen!==0||D.funcName.binLen!==0){for(var W=ev(_,this.S>>>3),K=0;K<W.length;K+=this.S>>>5)this.m=this.R(W.slice(K,K+(this.S>>>5)),this.m),this.v+=this.S;return 4}return 31},b.prototype.M=function(I){var T=function(W){var K=W||{};return{kmacKey:u("kmacKey",K.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:u("Customization",K.customization,1,{value:[],binLen:0})}}(I||{});this.O(I,T.funcName);for(var D=ev(mb(T.kmacKey),this.S>>>3),_=0;_<D.length;_+=this.S>>>5)this.m=this.R(D.slice(_,_+(this.S>>>5)),this.m),this.v+=this.S;this.A=!0},b.prototype.X=function(I){var T=l({value:this.u.slice(),binLen:this.s},function(D){var _,W,K=0,Z=[0,0],re=[4294967295&D,D/4294967296&2097151];for(_=6;_>=0;_--)(W=re[_>>2]>>>8*_&255)==0&&K===0||(Z[K>>2]|=W<<8*K,K+=1);return Z[(K=K!==0?K:1)>>2]|=K<<8*K,{value:K+1>4?Z:[Z[0]],binLen:8+8*K}}(I.outputLen));return this.K(T.value,T.binLen,this.v,this.B(this.m),I.outputLen)},b}(m);return function(){function S(b,I,T){if(b=="SHA-1")this.j=new Ut(b,I,T);else if(b=="SHA-224"||b=="SHA-256")this.j=new ge(b,I,T);else if(b=="SHA-384"||b=="SHA-512")this.j=new ka(b,I,T);else{if(b!="SHA3-224"&&b!="SHA3-256"&&b!="SHA3-384"&&b!="SHA3-512"&&b!="SHAKE128"&&b!="SHAKE256"&&b!="CSHAKE128"&&b!="CSHAKE256"&&b!="KMAC128"&&b!="KMAC256")throw new Error(s);this.j=new ox(b,I,T)}}return S.prototype.update=function(b){this.j.update(b)},S.prototype.getHash=function(b,I){return this.j.getHash(b,I)},S.prototype.setHMACKey=function(b,I,T){this.j.setHMACKey(b,I,T)},S.prototype.getHMAC=function(b,I){return this.j.getHMAC(b,I)},S}()})});var Sl=class extends Laya.Scene{};var{regClass:fx,property:gC}=Laya,yo=class extends Sl{constructor(){super()}onEnable(){console.log("IndexRT onEnable"),this.uiBtn.on(Laya.Event.CLICK,this,()=>{console.log("uiBtn"),Laya.Scene.open("scenes/UiMain.ls")}),this.phyBtn.on(Laya.Event.CLICK,this,()=>{console.log("phyBtn"),Laya.Scene.open("scenes/PhysicsGameMain.ls")}),this.d3Btn.on(Laya.Event.CLICK,this,()=>{console.log("d3Btn"),Laya.Scene.open("scenes/D3Main.ls")})}onDestroy(){}};yo=p([fx("wtSVevJMRPCBIPp2HPhqpw")],yo);var Cl=class extends Laya.Scene{};var{regClass:yx,property:bx}=Laya,bo=class extends Cl{constructor(){super();this.text=""}get dataSource(){return super.dataSource}set dataSource(e){if(super.dataSource=e,!!e){if(e.avatar){let i=this.getChildByName("avatar").getChildByName("redHot");i.visible=e.avatar.redHot.visible}if(e.flag){let i=this.getChildByName("flag").getChildByName("flagText");i.text=e.flag.flagText.text}}}};p([bx({type:"string"})],bo.prototype,"text",2),bo=p([yx("c-3Sonu7RWOm5ETy2TrBcg")],bo);var kl=class extends Laya.Scene{};var Le=class{constructor(){this._keys=[];this.THIS_ID="id"}init(t){for(let e in t){this._keys.push(e);let i=t[e];t[e]instanceof String&&String(t[e]).indexOf("[[")>=0&&(i=JSON.parse(t[e])),this[e]=i}}checkItems(){}};var go=class extends Le{};var te=class{constructor(){this._values=[];this._keys=[];this.SERIALIZATION_NUM=new Date().getTime()}get values(){return this._values}get keys(){return this._keys}set(t,e){let i=this.indexOf(t);if(i>=0){this._values[i]=e;return}this._keys.push(t),this._values.push(e)}unshift(t,e){let i=this.indexOf(t);if(i>=0){this._values[i]=e;return}this._keys.unshift(t),this._values.unshift(e)}indexOf(t){let e=this._keys.indexOf(t);return e>=0?e:(t=t instanceof String?Number(t):t instanceof Number?t.toString():t,this._keys.indexOf(t))}get(t){let e=this.indexOf(t);return e<0?null:this._values[e]}remove(t){let e=this.indexOf(t);return e>=0?(this._keys.splice(e,1),this._values.splice(e,1),!0):!1}clear(){this._values.length=0,this._keys.length=0}};var he=class he{constructor(){}static get LoginType(){return he._LoginType}static set LoginType(t){he._LoginType=t,he._LoginType&&he._LoginType!=""&&Laya.LocalStorage.setItem(he.COOKIE_CF_LoginType,he._LoginType)}static get isWhiteList(){return!0}static get intance(){return he._instance||(he._instance=new he),he._instance}init(){}static get server(){return getServer()}static get vType(){return getVType()}static get requestTime(){return 0}static get loginTime(){return 0}static set m_iTimeFrame(t){if(t>1500){let e=function(){he._m_iTimeFrame=0};he._m_iTimeFrame=t,Laya.timer.clear(Laya.timer,e),Laya.timer.once(500,Laya.timer,e)}}static get m_iTimeFrame(){return he._m_iTimeFrame}};he.IsRelease=!1,he.m_bInstantGame=!1,he.useWebVersion=!1,he.m_strVersionEX="V003",he.m_bIsMobWeb=!1,he.m_strWebTag="",he.Js_Version="1",he.Game_Version="20231227_01",he.App_Version="1.0.0",he.SDK_Version="1.0.0",he.M_strCountry="1",he.M_bAppData=!1,he.M_strTarget="",he.UseGuide=!1,he.m_mobileSameWb=!1,he.ignoreLang=!1,he.ignoreSheetNo=!1,he.m_bIsIphoneX=!1,he.Debug=0,he.Res=0,he.isTest=!0,he.Server_URL="",he.IP_User="",he.Plantform_APPID="17",he.ServerId=22310001,he.Login_UID="-1",he._LoginType="gamecenter",he.isInto=!1,he.isFull=!1,he.justFull=!1,he.Login_UDID="81BC19A8-B49B-47CC-BEFE-193E723B521A",he.Device_Info="",he.FCM_Token="",he.APP_IsRelease=!0,he.User_Lan="en",he.UserAgent="",he.Login_UserName="",he.isWhite=!1,he.APP_RES="",he.COOKIE_CF_LAN="COOKIE_GG_LAN",he.COOKIE_CF_LoginType="COOKIE_CF_LoginType",he.IPHONEX_SCARE=1.22,he.IPHONEX_TOP=44,he.IPHONEX_BUTTOM=34,he.DESIGN_WIDTH=1334,he.DESIGN_HEIGHT=750,he._m_iTimeFrame=0,he.isStopPhysics=!1,he.isDown=!1;var $=he;var ee=class ee{constructor(){this._touchEnabled=!0;if(ee._instance)throw new Error("LayerManager是单例,不可new.");ee._instance=this}get m_sprPanelLayer(){return this._m_sprPanelLayer}set m_sprPanelLayer(t){this._m_sprPanelLayer=t}get m_sprMainUILayer(){return this._m_sprMainUILayer}set m_sprMainUILayer(t){this._m_sprMainUILayer=t}get m_sprTipLayer(){return this._m_sprTipLayer}set m_sprTipLayer(t){this._m_sprTipLayer=t}static get instence(){return ee._instance||(ee._instance=new ee),ee._instance}init(){this.m_sprSceneLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprSceneLayer),this.m_sprMainUILayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprMainUILayer),this.m_sprPanelLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprPanelLayer),this.m_sprPopLayer=new Laya.Sprite,this.m_sprPopLayer.mouseThrough=!0,Laya.stage.addChild(this.m_sprPopLayer),this.m_sprTipLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTipLayer),this.m_sprGuideLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprGuideLayer),this.m_sprTopLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTopLayer)}get touchEnabled(){return this._touchEnabled}set touchEnabled(t){this._touchEnabled!=t&&(this._touchEnabled=t,this.m_sprSceneLayer.mouseEnabled=this._touchEnabled,this.m_sprMainUILayer.mouseEnabled=this._touchEnabled,this.m_sprPanelLayer.mouseEnabled=this._touchEnabled,this.m_sprPopLayer.mouseEnabled=this._touchEnabled,this.m_sprTipLayer.mouseEnabled=this._touchEnabled,this.m_sprGuideLayer.mouseEnabled=this._touchEnabled,this.m_sprTopLayer.mouseEnabled=this._touchEnabled)}addToLayerAndSet(t,e=ee.M_PANEL,i=ee.CENTER){this.addToLayer(t,e),this.setPosition(t,i)}getLayerIndex(t,e=ee.M_PANEL){let i;switch(e){case ee.M_SCENE:i=this.m_sprSceneLayer.getChildIndex(t);break;case ee.M_MAINUI:i=this.m_sprMainUILayer.getChildIndex(t);break;case ee.M_PANEL:i=this.m_sprPanelLayer.getChildIndex(t);break;case ee.M_POP:i=this.m_sprPopLayer.getChildIndex(t);break;case ee.M_TIP:i=this.m_sprTipLayer.getChildIndex(t);break;case ee.M_GUIDE:i=this.m_sprGuideLayer.getChildIndex(t);break;case ee.M_TOP:i=this.m_sprTopLayer.getChildIndex(t);break}return i}addToLayerAt(t,e=ee.M_PANEL,i=0){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.addChildAt(t,i);break;case ee.M_MAINUI:this.m_sprMainUILayer.addChildAt(t,i);break;case ee.M_PANEL:this.m_sprPanelLayer.addChildAt(t,i);break;case ee.M_POP:this.m_sprPopLayer.addChildAt(t,i);break;case ee.M_TIP:this.m_sprTipLayer.addChildAt(t,i);break;case ee.M_GUIDE:this.m_sprGuideLayer.addChildAt(t,i);break;case ee.M_TOP:this.m_sprTopLayer.addChildAt(t,i);break}}addToLayer(t,e=ee.M_PANEL){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.addChild(t);break;case ee.M_MAINUI:this.m_sprMainUILayer.addChild(t);break;case ee.M_PANEL:this.m_sprPanelLayer.addChild(t);break;case ee.M_POP:this.m_sprPopLayer.addChild(t);break;case ee.M_TIP:this.m_sprTipLayer.addChild(t);break;case ee.M_GUIDE:this.m_sprGuideLayer.addChild(t);break;case ee.M_TOP:this.m_sprTopLayer.addChild(t);break}}removeFromLayer(t,e){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.removeChild(t);break;case ee.M_MAINUI:this.m_sprMainUILayer.removeChild(t);break;case ee.M_PANEL:this.m_sprPanelLayer.removeChild(t);break;case ee.M_POP:this.m_sprPopLayer.removeChild(t);break;case ee.M_GUIDE:this.m_sprGuideLayer.removeChild(t);break;case ee.M_TOP:this.m_sprTopLayer.removeChild(t);break}}clearLayer(t){switch(t){case ee.M_SCENE:this.m_sprSceneLayer.removeChildren();break;case ee.M_MAINUI:this.m_sprSceneLayer.removeChildren();break;case ee.M_PANEL:this.m_sprSceneLayer.removeChildren();break;case ee.M_POP:this.m_sprSceneLayer.removeChildren();break;case ee.M_TOP:this.m_sprSceneLayer.removeChildren();break}}get stageWidth(){let t;return t=Laya.stage.width,t}get stageHeight(){let t;return t=Laya.stage.height,t}setPosition(t,e,i=0,n=0,r=!1,o=!1){let s=Laya.stage.width,l=Laya.stage.height;switch(this.m_iStageWidth=s,this.m_iStageHeight=l,e){case ee.UP:t.x=r?s/2:(s-t.width*t.scaleX)/2,t.y=0;break;case ee.DOWN:t.x=r?s/2:(s-t.width*t.scaleX)/2,t.y=l-t.height*t.scaleY;break;case ee.LEFT:t.x=0,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.RIGHT:t.x=s-t.width*t.scaleX,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.LEFTUP:t.x=0,t.y=0;break;case ee.RIGHTUP:t.x=s-t.width*t.scaleX,t.y=0;break;case ee.LEFTDOWN:t.x=0,t.y=l-t.height*t.scaleY;break;case ee.RIGHTDOWN:t.x=s-t.width*t.scaleX,t.y=l-t.height*t.scaleY;break;case ee.CENTERLEFT:t.x=s/2-t.width*t.scaleX,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.CENTERRIGHT:t.x=s/2,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.CENTER:t.x=r?s/2:(s-t.width*t.scaleX)/2,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;default:break}t.x+=i,t.y+=n}setLayer(t,e,i){if(!t||!e||t.parent!=e.parent)return;let n=t.parent.getChildIndex(t),r=e.parent.getChildIndex(e);i?n>r&&(t.parent.setChildIndex(t,r),t.parent.setChildIndex(e,n)):n<r&&(t.parent.setChildIndex(t,r),t.parent.setChildIndex(e,n))}};ee.M_SCENE=1,ee.M_MAINUI=2,ee.M_PANEL=3,ee.M_POP=4,ee.M_TIP=5,ee.M_GUIDE=7,ee.M_TOP=6,ee.UP=1,ee.DOWN=16,ee.LEFT=256,ee.RIGHT=4096,ee.CENTER=65536,ee.LEFTUP=ee.LEFT|ee.UP,ee.RIGHTUP=ee.RIGHT|ee.UP,ee.LEFTDOWN=ee.LEFT|ee.DOWN,ee.RIGHTDOWN=ee.RIGHT|ee.DOWN,ee.CENTERLEFT=ee.CENTER|ee.LEFT,ee.CENTERRIGHT=ee.CENTER|ee.RIGHT,ee.MOVE=-1;var M=ee;var ia=class extends Le{constructor(){super()}};var Kn=class{constructor(t,e){this._valuesObject={};this.sheetObject=t,this.BaseItemClass=e}get keys(){if(this._keys)return this._keys;this._keys=[];let t;for(let e in this.sheetObject)!e||e==""||this._keys.push(e);return this._keys}get values(){if(this._values)return this._values;this._values=[];let t;for(let e in this.sheetObject)this._valuesObject[e]?t=this._valuesObject[e]:(t=new this.BaseItemClass,t.init(this.sheetObject[e]),this._valuesObject[e]=t),this._values.push(t);return this._values}get(t){return this._valuesObject[t]?this._valuesObject[t]:this.sheetObject[t]}get1(t){if(this._valuesObject[t])return this._valuesObject[t];let e=this.sheetObject[t];if(e)return e;let i;this.BaseItemClass&&(i=new this.BaseItemClass,i.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig()  class : "+this.BaseItemClass),i.init(e)),this._valuesObject;let n=i||e;return this._valuesObject[t]=n,n}indexOf(t){let e=this._keys.indexOf(t);return e>=0?e:(t=t instanceof String?Number(t):t instanceof Number?t.toString():t,this._keys.indexOf(t))}clear(){this.sheetObject=null}};var Yn=class a{constructor(){}static get instance(){return a._instance||(a._instance=new a),a._instance}initSpotCfgData(){if(this.spotDic==null){let t=C.instance.getResByURL("config/spot.json");this.spotDic=new Kn(t.data,ia)}}getSpotById(t){return this.initSpotCfgData(),this.spotDic.get(t)}get getSpotDic(){return this.initSpotCfgData(),this.spotDic}};var Te=class a{constructor(){}registerCommCallBack(t=null){Laya.LayaEnv.isConch}static get instance(){return a._instance||(a._instance=new a),a._instance}sendCustumEvent(t,e=null,i=null){let n;if(i?n=i:n=Yn.instance.getSpotById(t),!n||!n.Event)return;let r,o=new Object;o.id=n.ID,o.eventKey=n.Event,o.type=n.type,this.sendWebEvent(o)}sendWebEvent(t){}dispose(){}reload(){Laya.Browser.window.location.reload()}testEvnt(){}};var me=class a{constructor(){this._isLoading=!1}static get instance(){return a._instance||(a._instance=new a),a._instance}get isLoading(){return this._isLoading}init(){if(!this.txtLoadingView){var t=Laya.loader.getRes("scenes/notice/TxtLoadingView.lh");this.txtLoadingView=t.create()}}showLoading(t=!1){if(console.log("showLoading..."+t),this.txtLoadingView)t?(this._isLoading=!0,this.showMaskLoading(),this.showLazyLoading(),this._isLoading=!1):(this._isLoading=!0,this.showMaskLoading(),Laya.timer.once(3e3,this,this.showLazyLoading)),this.txtLoadingView.m_txtLabel&&(this.txtLoadingView.m_txtLabel.visible=!1);else return}showLoadingByInfo(t=""){console.log("showLoadingByInfo..."+t),this._isLoading=!0,this.showMaskLoading(),this.showLazyLoading(),this.txtLoadingView.m_txtLabel.text=t,this.txtLoadingView.m_txtLabel.visible=!0}showMaskLoading(){this._isLoading&&(this.txtLoadingView.backLayer.name="backLayer",this.txtLoadingView.backLayer.mouseEnabled=!0,this.txtLoadingView.backLayer.mouseThrough=!1,this.txtLoadingView.backLayer.visible=!0)}showLazyLoading(){this._isLoading&&(console.log("showLazyLoading..."),this.txtLoadingView.visible=!0,Laya.stage.addChild(this.txtLoadingView),this.txtLoadingView.x=(Laya.stage.width-this.txtLoadingView.width)/2,this.txtLoadingView.y=(Laya.stage.height-this.txtLoadingView.height)/2),Laya.timer.clear(this,this.showLazyLoading)}hideLoading(){if(console.log("hideLoading..."),this._isLoading=!1,this.txtLoadingView)this.txtLoadingView.removeSelf();else return}dispose(){this.txtLoadingView&&(this.txtLoadingView.destroy(),this.txtLoadingView.removeSelf(),this.txtLoadingView=null),this.txtLoadingView.backLayer&&(this.txtLoadingView.backLayer.destroy(),this.txtLoadingView.backLayer.removeSelf(),this.txtLoadingView.backLayer=null)}};var ke=class ke{constructor(){this._m_bPlayMusic=!0;this._m_bPlayeSound=!0}static get instance(){return ke._instance||(ke._instance=new ke),ke._instance}get m_bPlayMusic(){return this._m_bPlayMusic}set m_bPlayMusic(t){this._m_bPlayMusic=t,t?this.m_strMusicURL!=null&&this.playMusicByURL(this.m_strMusicURL):this.musicChannel&&this.musicChannel.stop()}init(){Laya.SoundManager.autoStopMusic=!1;let t=Laya.LocalStorage.getItem(ke.COOKIE_CF_MUSIC);t!=null&&t!=""&&(ke.instance.m_bPlayMusic=parseInt(t)==1);let e=Laya.LocalStorage.getItem(ke.COOKIE_CF_SOUND);e!=null&&e!=""&&(ke.instance.m_bPlayeSound=parseInt(e)==1)}get m_bPlayeSound(){return this._m_bPlayeSound}set m_bPlayeSound(t){this._m_bPlayeSound=t}playMusicByURL(t){this.m_bPlayMusic&&(this.m_strMusicURL,this.m_strMusicURL==t&&this.musicChannel,this.m_strMusicURL=t,Laya.SoundManager.stopMusic(),this.musicChannel=Laya.SoundManager.playMusic(t,0,new Laya.Handler(this,this.onComplete)))}playMusicByName(t,e=".ogg"){let i=C.instance.getSoundURL(t,e);this.playMusicByURL(i)}playSound(t,e=1){this.m_bPlayeSound&&Laya.SoundManager.playSound(t,e,new Laya.Handler(this,this.onComplete))}playSoundByName(t,e=1){let i=C.instance.getSoundURLogg(t);this.playSound(i,e)}stopSoundByName(t){let e=C.instance.getSoundURLogg(t);Laya.SoundManager.stopSound(e)}switchMusic(t){let e=t?1:0;ke.instance.m_bPlayMusic=t,Laya.LocalStorage.setItem(ke.COOKIE_CF_MUSIC,e.toString())}switchSound(t){let e=t?1:0;ke.instance.m_bPlayeSound=t,Laya.LocalStorage.setItem(ke.COOKIE_CF_SOUND,e.toString())}onComplete(){}};ke.COOKIE_CF_MUSIC="COOKIE_CF_MUSIC",ke.COOKIE_CF_SOUND="COOKIE_CF_SOUND",ke.soundName_bg="bgm",ke.soundName2="ui02.ogg",ke.soundName3="ui03.ogg",ke.soundName4="hit.wav",ke.soundName30_1="ui30_1.ogg",ke.soundName28_1_star="ui28_1_star.ogg",ke.soundName28_2_star="ui28_2_stars.ogg",ke.soundName28_3_star="ui28_3_stars.ogg",ke.soundName28_bar="ui28_bar_rise.ogg",ke.soundName32="ui32.ogg",ke.soundName33="ui33.ogg",ke.soundName34="ui34.ogg",ke.soundName35="ui35.ogg",ke.soundName36="ui36.ogg",ke.soundName37="ui37.ogg",ke.soundName38="ui38.ogg",ke.soundName39="ui39.ogg",ke.soundName41="ui41.ogg",ke.soundName42="ui42.ogg",ke.soundName43="ui43.ogg",ke.soundName44="ui44.ogg",ke.soundName45="ui45.ogg",ke.soundNameUi40_1="ui40_1.ogg",ke.soundNameUi40_2="ui40_2.ogg",ke.soundNameUi40_3="ui40_3.ogg",ke.soundNameDressing="dressing_score_sfx.ogg",ke.soundNameAnswer="answer_bonus_points.ogg";var Ne=ke;var f=class{};f.FindView="FindView",f.FindEndView="FindEndView",f.FindAskDialog="FindAskDialog",f.FindRankUpDialog="FindRankUpDialog",f.QuickTipDialog="QuickTipDialog",f.QuickEndView="QuickEndView",f.QuickShareView="QuickShareView",f.QuickOperatorDialog="QuickOperatorDialog",f.MainView="MainView",f.RoleDialog="RoleDialog",f.RemGetDialog="RemGetDialog",f.QuickRechargeDialog="QuickRechargeDialog",f.CreateNameDialog="CreateNameDialog",f.DailyTaskDialog="DailyTaskDialog",f.ActivityTaskDialog="ActivityTaskDialog",f.ShareDialog="ShareDialog",f.InvitationCenterDialog="InvitationCenterDialog",f.DailyTaskDrawDialog="DailyTaskDrawDialog",f.GuideView="GuideView",f.GuideDialogView="GuideDialogView",f.ShareView="ShareView",f.MainTopView="MainTopView",f.GetMoreDialog="GetMoreDialog",f.ShopView="ShopView",f.ItemGetDialog="ItemGetDialog",f.RewardGetDialog="RewardGetDialog",f.GetTitleDialog="GetTitleDialog",f.NewFunUnLockDialog="NewFunUnLockDialog",f.DialogView="DialogView",f.MallView="MallView",f.MallCardView="MallCardView",f.MallBuyDialog="MallBuyDialog",f.FittingUiView="FittingUiView",f.TaskDialog="TaskDialog",f.CommentDialog="CommentDialog",f.PotraitChangDialog="PotraitChangDialog",f.ClothespressView="ClothespressView",f.ItemSellDialog="ItemSellDialog",f.ItemInfoDialog="ItemInfoDialog",f.OnlineAward="OnlineAward",f.MaillView="MailView",f.MailSendView="MailSendView",f.GameSettingDialog="GameSettingDialog",f.GamesettingSoundView="GamesettingSoundView",f.GameSettingLanguageDialog="GameSettingLanguageDialog",f.GameSettingVersionDialog="GameSettingVersionDialog",f.FriendMainView="FriendMainView",f.FriendSearchView="FriendSearchView",f.FriendGetRewardDialog="FriendGetRewardDialog",f.FriendRewardDialog="FriendRewardDialog",f.PreLoadingView="PreLoadingView",f.RechargeDialog="RechargeDialog",f.WalletChooseHeroDialog="WalletChooseHeroDialog",f.EmployInfoDialog="EmployInfoDialog",f.WalletChoosePropsDialog="WalletChoosePropsDialog",f.FirstRechargeDialog="FirstRechargeDialog",f.FirstWeekRechargeView="FirstWeekRechargeView",f.ClientErrView="ClientErrView",f.RoleUpgradeView="RoleUpgradeView",f.ActiveRechargeView="ActiveRechargeView",f.SmallSaleView="SmallSaleView",f.RechargeSelectDialog="RechargeSelectDialog",f.FBLikeView="FBLikeView",f.TurnSuitPreView="TurnSuitPreView",f.SlotMachineView="SlotMachineView",f.SlotMachineRewardPreDialog="SlotMachineRewardPreDialog",f.SlotMachineResultDialog="SlotMachineResultDialog",f.GashaponView="GashaponView",f.GashaponRewardView="GashaponRewardView",f.ActivityRankRewardView="ActivityRankRewardView",f.AddRechargeView="AddRechargeView",f.CupMatchStartDialog="CupMatchStartDialog",f.CupMatchEndDialog="CupMatchEndDialog",f.CreateLoginView="CreateLoginView",f.SelectHeadDialog="SelectHeadDialog",f.RoleInfoDialog="RoleInfoDialog",f.SelectHeroDialog="SelectHeroDialog",f.CreateSubWalletDialog="CreateSubWalletDialog",f.FriendMemberDialog="FriendMemberDialog",f.FriendMemberMoreDialog="FriendMemberMoreDialog",f.FriendAddDialog="FriendAddDialog",f.FriendApplyBackDialog="FriendApplyBackDialog",f.FriendApplyDialog="FriendApplyDialog",f.WalletDialog="WalletDialog",f.WalletTransferDialog="WalletTransferDialog",f.UnionApplyDialog="UnionApplyDialog",f.GuildEntranceView="GuildEntranceView",f.UnionApplyDialogView="UnionApplyDialogView",f.UnionApplyMemberDialog="UnionApplyMemberDialog",f.CreateNoticeDialog="CreateNoticeDialog",f.UnionNoticeView="UnionNoticeView",f.GuildInfoDialog="GuildInfoDialog",f.CreateUnionDialog="CreateUnionDialog",f.UnionInfoView="UnionInfoView",f.UnionEarningView="UnionEarningView",f.UnionRevenueDetailDialog="UnionRevenueDetailDialog",f.UnionSetRevenueDialog="UnionSetRevenueDialog",f.UnionBattleRecordDialog="UnionBattleRecordDialog",f.UnionRevenueRecordDialog="UnionRevenueRecordDialog",f.RankUnionView="RankUnionView",f.UnionWarView="UnionWarView",f.UnionWarTipDialog="UnionWarTipDialog",f.UnionWarSuccessDialog="UnionWarSuccessDialog",f.UnionWarFailDialog="UnionWarFailDialog",f.GamesettingView="GamesettingView",f.GameSettingGameAccountView="GameSettingGameAccountView",f.GuildMessageView="GuildMessageView",f.GuildMessageEditorView="GuildMessageEditorView",f.UnionMemberView="UnionMemberView",f.UnionListView="UnionListView",f.CreateSubUnionView="CreateSubUnionView",f.ChangeUnionIconDialog="ChangeUnionIconDialog",f.MySubUnionView="MySubUnionView",f.UnionMemberApplyView="UnionMemberApplyView",f.UnionReferralView="UnionReferralView",f.UnionTransferView="UnionTransferView",f.TicketTransferView="TicketTransferView",f.HeroTransferView="HeroTransferView",f.GuildChiefPrivilegeView="GuildChiefPrivilegeView",f.GuildDonationView="GuildDonationView",f.NoticeDialog="NoticeDialog",f.HelpDialog="HelpDialog",f.ChampDetailDialog="ChampDetailDialog",f.ChampRecordDialog="ChampRecordDialog",f.LoadDialog="LoadDialog",f.ChangeHeadDialog="ChangeHeadDialog",f.CreateRoomDialog="CreateRoomDialog",f.EnterRoomView="EnterRoomView",f.MatchEndRankView="MatchEndRankView",f.MatchReadyView="MatchReadyView",f.MatchEndView="MatchEndView",f.HeroGetDialog="HeroGetDialog",f.InputPwdDialog="InputPwdDialog",f.MailDialog="MailDialog",f.UnionAttrView="UnionAttrView",f.UnionAttrLvUpDialog="UnionAttrLvUpDialog",f.UnionAttributeDetailsDialog="UnionAttributeDetailsDialog",f.NoServerView="NoServerView",f.UnionMemberMoreDialog="UnionMemberMoreDialog",f.HeroUpgradeDialog="HeroUpgradeDialog",f.HeroDetailDialog="HeroDetailDialog",f.SkillTipDialog="SkillTipDialog",f.TransferRecordDialog="TransferRecordDialog",f.AFKView="AFKView",f.AFKBagDialog="AFKBagDialog",f.AFKDropDetailDialog="AFKDropDetailDialog",f.AFKMapView="AFKMapView",f.AFKSelectLevelDialog="AFKSelectLevelDialog",f.Knapsack="Knapsack",f.KnapsackTipDialog="KnapsackTipDialog",f.HeroFormationDialog="HeroFormationDialog",f.SignInDialog="SignInDialog",f.InviteRewardDialog="InviteRewardDialog",f.ChallengLoseDialog="ChallengLoseDialog",f.ChallengWinDialog="ChallengWinDialog",f.ChallengBossDialog="ChallengBossDialog",f.ThirbleDropDialog="ThirbleDropDialog",f.LevelDropDialog="LevelDropDialog",f.UseCardDialog="UseCardDialog",f.ArenaView="ArenaView",f.ArenaLoseDialog="ArenaLoseDialog",f.ArenaBattleDialog="ArenaBattleDialog",f.ArenaWinDialog="ArenaWinDialog",f.ArenaWarNotesView="ArenaWarNotesView",f.ArenaRuleDialog="ArenaRuleDialog",f.EquipSelectDialog="EquipSelectDialog",f.EquipDetailDialog="EquipDetailDialog",f.HireDetailDialog="HireDetailDialog",f.ProxyDetailDialog="ProxyDetailDialog",f.WithDrawRecordDialog="WithDrawRecordDialog",f.RentalRecordDialog="RentalRecordDialog",f.PrivateChatDialog="PrivateChatDialog",f.AirdropRecordDialog="AirdropRecordDialog";var h=class{};h.MOUSE_HOLDON="MOUSE_HOLDON",h.EVENT_OPEN_MODULE="EVENT_OPEN_MODULE",h.EVENT_MODULE_ADDED="EVENT_MODULE_ADDED",h.EVENT_CLOSE_MODULE="EVENT_CLOSE_MODULE",h.EVENT_CHECK_REMAIN="EVENT_CHECK_REMAIN",h.EVENT_LOADED_COMPLETE="EVENT_LOAD_COMPLETE",h.EVENT_LOADED_SCENE_BG_COM="EVENT_LOADED_SCENE_BG_COM",h.EVENT_LOAD_SKIN_COMPLETE="EVENT_LOAD_SKIN_COMPLETE",h.EVENT_LOAD_HEAD_SKIN_COMPLETE="EVENT_LOAD_HEAD_SKIN_COMPLETE",h.EVENT_LOADING_SUC="EVENT_LOADING_SUC",h.EVENT_BACK_TO_LOGIN="EVENT_BACK_TO_LOGIN",h.EVENT_LOGIN_GAME_END="EVENT_LOGIN_GAME_END",h.EVENT_ENTER_MAIN="EVENT_ENTER_MAIN",h.EVENT_CHANGE_HEAD="EVENT_CHANGE_HEAD",h.EVENT_MODIFY_HEAD="EVENT_MODIFY_HEAD",h.EVENT_ITEM_UPDATE="EVENT_ITEM_UPDATE",h.EVENT_ROLE_UPDATE="EVENT_ROLE_UPDATE",h.STAGE_ON_BLUR="STAGE_ON_BLUR",h.STAGE_ON_FOCUS="STAGE_ON_FOCUS",h.ACCOUNTVO_UPDATE="ACCOUNTVO_UPDATE",h.EVENT_WAIT_PLAYERINFO="EVENT_WAIT_PLAYERINFO",h.EVENT_END_HEROBUY="EVENT_END_HEROBUY",h.EVENT_END_HEROTRANSFER="EVENT_END_HEROTRANSFER",h.EVENT_REFRESH_HEROTRANSFER="EVENT_REFRESH_HEROTRANSFER",h.EVENT_REFRESH_UNIONMEMBER_TRANSFER="EVENT_REFRESH_UNIONMEMBER_TRANSFER",h.EVENT_REFRESH_KNAPSACK="EVENT_REFRESH_KNAPSACK",h.EVENT_ADD_UNIONMEMBER_ADDRESS="EVENT_ADD_UNIONMEMBER_ADDRESS",h.EVENT_ADD_TICKET_ADDRESS="EVENT_ADD_TICKET_ADDRESS",h.EVENT_EMOJI_ICON_SELECT="EVENT_EMOJI_ICON_SELECT",h.EVENT_COLOR_ICON_SELECT="EVENT_COLOR_ICON_SELECT",h.EVENT_CHECK_ICON_SELECT="EVENT_CHECK_ICON_SELECT",h.EVENT_CHECK_NODE_SELECT="EVENT_CHECK_NODE_SELECT",h.PACKAGE_UPDATE_ITEM="PACKAGE_UPDATE_ITEM",h.IMPROVE_SUCESS_EVENT="IMPROVE_SUCESS_EVENT",h.CHANG_POTRAIT="CHANG_POTRAIT",h.ROLE_INFO_CHANGE="ROLE_INFO_CHANGE",h.UPDATE_ASSETS="UPDATE_ASSETS",h.REFRESH_MAIN_TASK="REFRESH_MAIN_TASK",h.RECIVE_SUCESS_SERVICE="RECIVE_SUCESS_SERVICE",h.SCENE_ROLE_COMPELTE="SCENE_ROLE_COMPELTE",h.FITTING_CLOTH_BTN="FITTING_CLOTH_BTN",h.STORE_CLICKBG_EVENT="STORE_CLICKBG_EVENT",h.CLOSE_BG_VIEW="CLOSE_BG_VIEW",h.EVENT_UPDATE_ONLINE="EVENT_UPDATE_ONLINE",h.VIP_INFO_CHANGE="VIP_INFO_CHANGE",h.EVENT_FUNCTION_OPEN_UPDATE="EVENT_FUNCTION_OPEN_UPDATE",h.EVENT_ADD_ACTIVITY="EVENT_ADD_ACTIVITY",h.EVENT_REMOVE_ACTIVITY="EVENT_REMOVE_ACTIVITY",h.UPDATE_CHAO_PIAO="UPDATE_CHAO_PIAO",h.UPDATE_EXCHANGE_INFO="UPDATE_EXCHANGE_INFO",h.UPDATE_RED_STATE_EVENT="UPDATE_RED_STATE_EVENT",h.SYSTEM_OPEN_TIME_INITED="SYSTEM_OPEN_TIME_INITED",h.EVENT_OPEN_SHARE="EVENT_OPEN_SHARE",h.CHANGE_SCENE_BASE_ROLE_LAYER="CHANGE_SCENE_BASE_ROLE_LAYER",h.EVENT_CLICK_NUM="EVENT_CLICK_NUM",h.EVENT_HERO_DRAW_BACK="EVENT_HERO_DRAW_BACK",h.EVENT_ENTER_MATCH_ROOM="EVENT_ENTER_MATCH_ROOM",h.EVENT_UPDATE_MATCH_ROOM="EVENT_UPDATE_MATCH_ROOM",h.UPDATE_KILL_NUM="UPDATE_KILL_NUM",h.EVENT_RESTORE_DATA="EVENT_RESTORE_DATA",h.EVENT_FirstBlood="EVENT_FirstBlood",h.EVENT_MutiKill="EVENT_MutiKill",h.EVENT_GameScene_Gray="EVENT_GameScene_Gray",h.EVENT_Game_Delay="EVENT_Game_Delay",h.EVENT_UPDATE_GLOBAL_COOL="EVENT_UPDATE_GLOBAL_COOL",h.EVENT_SUB_GUILD_UPDATE="EVENT_SUB_GUILD_UPDATE",h.EVENT_UNION_APPLY_MEMBER_UPDATE="EVENT_UNION_APPLY_MEMBER_UPDATE",h.EVENT_WELFARE_CLAIM="EVENT_WELFARE_CLAIM",h.EVENT_RECHARGE_GET="EVENT_RECHARGE_GET",h.CHANGE_WALLET_HERO="CHANGE_WALLET_HERO",h.CHANGE_ASSET_CHAIN="CHANGE_ASSET_CHAIN",h.CHANGE_WALLET_PROP="CHANGE_WALLET_PROP",h.CREATE_SUB_WALLET_SUCCESS="CREATE_SUB_WALLET_SUCCESS",h.REFRESH_ALL_WITHDRAW_DATA="REFRESH_ALL_WITHDRAW_DATA",h.CHANGE_FRIEND_APPLY_LIST="CHANGE_FRIEND_APPLY_LIST",h.CHANGE_FRIEND_LIST="CHANGE_FRIEND_LIST",h.REFRSH_RED="REFRSH_RED",h.REFRSH_APPLY_FRIEND_LIST="REFRSH_APPLY_FRIEND_LIST",h.ADD_AIR_WALLET_ITEM="ADD_AIR_WALLET_ITEM",h.ADD_AIR_SUB_WALLET_NAME="ADD_AIR_SUB_WALLET_NAME",h.AIR_SUB_WALLET_OPENHERO="AIR_SUB_WALLET_OPENHERO",h.CHANGE_WALLET_HERO_AIR="CHANGE_WALLET_HERO_AIR",h.UPDATE_UNION_MEMBER_LIST="UPDATE_UNION_MEMBER_LIST";var y=class a extends Laya.EventDispatcher{static get intance(){return a._instance||(a._instance=new a),a._instance}};var $n=class extends Laya.Script{constructor(){super();this.m_ioffsetX=0;this.m_ioffsetY=0}onAdded(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.CENTER,this.m_canTouch_all=!1,this.selfMaskAlpha=.8,this.m_arrMapEvent=[],this.canClickMask=!0,this.maskLayer=new Laya.Sprite,this.useShowAnimation=!0,this.useHideAnimation=!0,this.isAutoRealseRes=!0,this.m_strSound=Ne.soundName3}onClickMask(e){this.canClickMask&&this.maskClose()}maskClose(){this.close()}onStageResize(){}onEnable(){this._view=this.owner,this._view.addChild(this.maskLayer),this.createUI(),this.createUIEnd(),this.initializeLater()}createUI(){}createUIEnd(){}initializeLater(){this._addEvent(),this.initData(),this.useShowAnimation?(this._view.visible=!1,this.showAnimationEnd=!1,Laya.timer.frameOnce(5,this,this.popTimeOut,[this._view])):this.showAnimationEnd=!0}popTimeOut(e){Laya.timer.clear(this,this.popTimeOut),e.scale(.5,.5),e.visible=!0,Laya.Tween.to(e,{scaleX:1,scaleY:1,ease:Laya.Ease.backOut},300,null,Laya.Handler.create(this,this.onShowAnimationEnd),2),Ne.instance.playSoundByName(this.m_strSound),this._view.event(Laya.Event.OPEN)}onShowAnimationEnd(){this.showAnimationEnd=!0}_addEvent(){this.maskLayer.on(Laya.Event.CLICK,this,this.onClickMask),Laya.stage.on(Laya.Event.RESIZE,this,this.onStageResize),this.btn_com_back&&this.btn_com_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_com_help&&this.btn_com_help.on(Laya.Event.CLICK,this,this.onHelp),this.addEvent()}addEvent(){}initData(){}_removeEvent(){this.maskLayer.offAll(),Laya.stage.off(Laya.Event.RESIZE,this,this.onStageResize),this.removeEvent()}removeEvent(){}addMapEvent(e,i,n,r,o=null){e.on(i,n,r,o),this.m_arrMapEvent.push(e)}removeAllMapEvent(){if(this.m_arrMapEvent){for(let e=0;e<this.m_arrMapEvent.length;e++)this.m_arrMapEvent[e].offAll();this.m_arrMapEvent.splice(0,this.m_arrMapEvent.length)}}dispose(){if(this.newRoleSpr){for(;this.newRoleSpr.numChildren>0;)this.newRoleSpr.removeChildAt(0);this.newRoleSpr=null}this.isDispose=!0,H.intance.removeViewFromModuleManger(this),this.m_strName=null,this.m_strSound=null,this._removeEvent(),this.removeAllMapEvent(),Laya.Tween.clearAll(this._view),this.m_arrMapEvent=null,this.btn_com_back&&this.btn_com_back.offAll(),this.btn_com_help&&this.btn_com_help.offAll(),this.maskLayer&&(Laya.timer.clearAll(this.maskLayer),Laya.Tween.clearAll(this.maskLayer),this.maskLayer.offAll(),this.maskLayer.graphics.destroy(),this.maskLayer.removeSelf(),this.maskLayer.destroy(!0)),this.isAutoRealseRes&&C.instance.clearModuleUrl(this.m_strName),this._view&&(Laya.timer.clearAll(this._view),Laya.Tween.clearAll(this._view),this._view.offAll(),this._view.graphics.destroy(),this._view.removeSelf(),this._view.destroy(!0),this._view=null),Laya.timer.clearAll(this),Laya.Tween.clearAll(this),y.intance.event(h.EVENT_CLOSE_MODULE)}sendData(e,i=null){i==null&&(i=[])}close(e=null){this.useHideAnimation&&this._view?Laya.Tween.to(this._view,{scaleX:.5,scaleY:.5,ease:Laya.Ease.backIn},200,null,Laya.Handler.create(this,this.dispose,null),2):this.dispose()}static closeAll(){H.intance.closeAll()}backToPreScene(){let e=fe.intance.getPreSceneData();fe.intance.setCurrentScene(e[0],e[1],e[2],e[3],!1)}get btn_com_back(){return this._view?this._view.getChildByName("btn_com_back"):null}get btn_com_help(){return this._view?this._view.getChildByName("btn_com_help"):null}onHelp(){this.m_helpId&&H.intance.openModule(f.HelpDialog,this.m_helpId)}onBack(){this.close()}};var H=class a extends Laya.DialogManager{constructor(){super();this.views=new te;this.m_arrLoadingArr=[];if(a._instance)throw new Error("LayerManager是单例,不可new.");a._instance=this,Laya.Dialog.manager=this}static get intance(){return a._instance||(a._instance=new a),a._instance}openModule(e,i=null){y.intance.event(h.EVENT_OPEN_MODULE,[e,i])}hasOpenView(e){return this.views.get(e)!=null}getOpenView(e){return this.views.get(e)}disposeView(e){if(this.getOpenView(e)){let i=this.getOpenView(e);if(i instanceof Array)for(let n=0;n<i.length;n++)i[n].close();else i.close()}}init(){y.intance.on(h.EVENT_OPEN_MODULE,this,this.onModulePanel),y.intance.on(h.EVENT_CLOSE_MODULE,this,this.disposeView)}initMainView(){}onModulePanel(e,i=null){console.log("ModuleManager.onModulePanel moudleName:"+e),this.m_arrLoadingArr.indexOf(e)==-1&&(this.getOpenView(e)||(me.instance.showLoading(!1),this.m_arrLoadingArr.push(e),C.instance.loadModuleUrl(e,Laya.Handler.create(this,this.onLoaded,[e,i]))))}onLoaded(e,i=null){let n=this.m_arrLoadingArr.indexOf(e);n!=-1&&this.m_arrLoadingArr.splice(n,1);let r;var o=C.instance.m_objModuleViews[e];console.log("onLoaded: ",e,o),Laya.loader.load(o).then(s=>{if(r=s.create(),i&&r.setOpenData(i),r.m_strName=e,r instanceof Laya.Box)M.instence.addToLayer(r,r.m_iLayerType),M.instence.setPosition(r,r.m_iPositionType,r.m_ioffsetX,r.m_ioffsetY),this.addViewToModuleManger(r);else if(r instanceof Laya.Dialog){let l=r;l.m_iLayerType==M.M_POP?(l.isModal=!0,l.isShowEffect=!0,this.open(l,!1,!0)):(l.isShowEffect=!1,this.open(l)),this.addViewToModuleManger(l)}r&&y.intance.event(h.EVENT_MODULE_ADDED,r),r.hideLoadingBySelf||me.instance.hideLoading()}).catch(s=>{console.error("onLoaded 加载失败",s)})}addViewToModuleManger(e){let i=e.m_strName;this.views.get(i)?this.views.get(i)instanceof Array?this.views.get(i).push(e):this.views.set(i,[this.views.get(i),e]):this.views.set(i,e),this.on(Laya.Event.CLOSE,this,this.removeViewFromModuleManger)}removeViewFromModuleManger(e){if(!e||!this.views)return;let i=e.m_strName;console.log("removeViewFromModuleManger viewName: "+i),e.off(Laya.Event.CLOSE,this,this.removeViewFromModuleManger);let n=this.views.get(i);if(n instanceof Array){let r=n.indexOf(e);r!=-1&&(n.splice(r,1),n.length==0&&this.views.remove(i))}else this.views.remove(i)}closeAll(){let e=[];for(let i of this.views.values)if(i instanceof Array)for(let n=0;n<i.length;n++){let r=i[n];r instanceof $n&&e.push(r)}else i instanceof $n&&e.push(i);for(let i=0;i<e.length;i++)e[i].dispose();e=[],super.closeAll()}doClose(e){super.doClose(e),this.event(Laya.Event.CLOSE,e)}};var vo=class a{constructor(){this._mapUrl="";this._mapWidth=0;this._mapHeight=0;this._gridWidth=0;this._gridHeight=0;this._xPics=0;this._yPics=0;this._fuzzyName=""}static get instance(){return a._instance||(a._instance=new a),a._instance}loadScene(t,e,i,n,r,o,s){this._fuzzyName!=""&&this._fuzzyName!=o&&this.dispose(),this._mapWidth=t,this._mapHeight=e,this._gridWidth=i,this._gridHeight=n,this._fuzzySprite=r,this._xPics=Math.floor(this._mapWidth/i),this._yPics=Math.floor(this._mapHeight/n),this._fuzzyName=o,this._fuzzyCallBack=s;let l=C.instance.setResURL("scene/subScene/test1/"+o+".json");Laya.loader.load([{url:l,type:Laya.Loader.ATLAS}],Laya.Handler.create(this,this.loadSceneComplete),Laya.Handler.create(this,this.loadProcess,null,!1),null,0,!0,null,!0)}loadProcess(){}loadSceneComplete(){let t=Laya.Loader.getAtlas(C.instance.setResURL("scene/subScene/test1/"+this._fuzzyName+".json"));if(this._fuzzySprite){this._fuzzySprite.graphics.clear();let e=0,i=new Laya.Sprite;i.name="mapSprite",this._fuzzySprite.addChildAt(i,0);for(let n=0;n<this._yPics;n++)for(let r=0;r<this._xPics;r++){let o=Laya.loader.getRes(t[e]),s=new Laya.Image;i.addChild(s),s.texture=o,s.size(o.width,o.height),s.pos(r*this._gridWidth,n*this._gridHeight),e++}}this._fuzzyCallBack!=null&&this._fuzzyCallBack.run()}dispose(){this._fuzzyCallBack=null,this._fuzzyName&&this._fuzzyName!=""&&Laya.loader.clearRes(C.instance.setResURL("atlas/"+this._fuzzyName+".json"))}};var X=class{};X.M_SCENE_MAIN="M_SCENE_MAIN",X.M_SCENE_SHOP="M_SCENE_SHOP",X.M_SCENE_AIRDROP="M_SCENE_AIRDROP",X.M_SCENE_HERO="M_SCENE_HERO",X.M_SCENE_PRE_LOAD="M_SCENE_PRE_LOAD",X.M_SCENE_MATCH_READY="M_SCENE_MATCH_READY",X.M_SCENE_MATCH="M_SCENE_MATCH",X.M_SCENE_AFKBATTLE="M_SCENE_AFKBATTLE",X.M_SCENE_GUILD="M_SCENE_GUILD",X.M_SCENE_RANK="M_SCENE_RANK",X.M_SCENE_SHOLARSHIP="M_SCENE_SHOLARSHIP",X.M_SCENE_GET_MAT="M_SCENE_GET_MAT",X.M_SCENE_OPEN_GAME="M_SCENE_OPEN_GAME",X.M_SCENE_ASSET="M_SCENE_ASSET",X.M_SCENE_DIG="M_SCENE_DIG",X.M_SCENE_MAIL="M_SCENE_MAIL",X.M_SCENE_KNAPSACK="M_SCENE_KNAPSACK",X.M_SCENE_UNION="M_SCENE_UNION",X.M_SCENE_MYUNION="M_SCENE_MYUNION",X.M_SCENE_ARENA="M_SCENE_ARENA",X.M_SCENE_FRIEND="M_SCENE_FRIEND";var Al=class extends Le{constructor(){super()}};var Dl=class{constructor(t,e,i){this._idKeyName="";this._jsonName="";this._sheetItemCls=null;this._isParse=!1;this._idKeyName=e,this._jsonName=t,this._sheetItemCls=i,this._idToValueMap=new te,this._items=[]}parseJson(){if(this._isParse)return;let t=C.instance.getResByURL("config/"+this._jsonName+".json");if(!t)throw new Error("无效的配置数据"+this._jsonName);for(let e of t){let i=new this._sheetItemCls;i.beFill(e),this._idToValueMap.set(e[this._idKeyName],i),this._items.push(i),this.addItemProcess(i)}this._isParse=!0}addItemProcess(t){}getItemById(t){return this.excuteIsParse()&&this._idToValueMap.get(t)?this._idToValueMap.get(t):null}getAllItems(){return this.excuteIsParse()?this._items:null}excuteIsParse(){return this._isParse,this._isParse}};var Ml=class extends Dl{constructor(){super("","","");this._itemsTypeMap=null;this._itemsTypeMap=new te}getCombineKey(e,i,n){return e+n.toString()+i}getItemsByChildType(e,i){let n=this.getCombineKey(e,i,"childType_itemType");if(this._itemsTypeMap.get(n))return this._itemsTypeMap.get(n);this._itemsTypeMap.set(n,[]);let r=R.intance.m_dicItems.values;for(let o of r)o.child_type==e&&o.itm_type==i&&this._itemsTypeMap.get(n).push(o);return this._itemsTypeMap.get(n)}};var Bl=class extends Le{realIcon(){return"https://cdn.bunnyswap.cc/images/items/"+this.icon}get starArr(){if(this._starArr)return this._starArr;if(this._starArr=[],this.max_quality==0)return this._starArr;let e=this.quality/this.max_quality*5;for(let i=1;i<=5;i++)e>=i?this._starArr.push(0):i-e<=.5?this._starArr.push(2):this._starArr.push(1);return this._starArr}};var Pl=class extends Le{};var Rl=class extends Le{constructor(){super()}};var Nl=class extends Le{constructor(){super()}};var Ol=class extends Le{};var Hl=class extends Le{};var Ul=class extends Le{};var Vl=class extends Le{};var Fl=class extends Le{constructor(){super()}};var zl=class extends Le{};var Gl=class extends Le{};var jl=class extends Le{};var ql=class extends Le{};var Wl=class extends Le{};var Kl=class extends Le{};var Lo=class extends Le{};var Yl=class extends Le{constructor(){super()}};var $l=class extends Le{};var Xl=class extends Le{constructor(){super(...arguments);this.dT=1e4}async testUrl(){this.getUrl()}getUrl(){var e=this.url;let i=new Date().getTime(),n=this,r=new XMLHttpRequest;r.open("GET",e,!0),r.onload=function(){if(r.status>=200&&r.status<300)try{let s=r.responseText;var o=new Date().getTime()-i;n.dT=o}catch{console.log("Response is not valid JSON")}else console.error(`Error: ${r.status}`)},r.onerror=function(){console.error("Network error")},r.send()}};var Ql=class extends Le{};var Zl=class extends Le{};var Jl=class extends Le{};var ec=class extends Le{constructor(){super()}};var tc=class extends Le{constructor(){super()}};var nt=class nt{constructor(){if(nt._instance)throw new Error("SheetDataManager是单例,不可new.");nt._instance=this,this._modelList=new te}static get intance(){return nt._instance||(nt._instance=new nt),nt._instance}init(){let t=Laya.Browser.now();L.instance.systemOpenModel.parseJson(),this.m_dicMail=this.initConfigObject("mailmessage",$l),this.m_dicItems=this.initConfigObject("item",Bl),this.m_dicShops=new te,this.m_dicShopMulDic=this.initConfig("shop",["type","icon"],Pl,!0,Laya.Handler.create(this,this.onSetShopItem,null,!1)),this.m_dicUnions=this.initConfig("union",["id"],zl),this.m_dicHeros=this.initConfigObject("hero",Ol),this.m_dicSkills=this.initConfigObject("skill",Ul),this.m_dicBuffs=this.initConfigObject("buff",Vl),this.m_dicArenaDic=new te,this.m_dicArenaMulDic=this.initConfig("arena",["type","lv","coinType"],Hl,!0,Laya.Handler.create(this,this.onSetArena,null,!1)),this.m_dicArenaTypes=this.initConfig("arenaType",["id"],Ql);var e=this.initConfig("node",["id"],Xl);this.m_dicNodes=this.initNodes(e),this.m_dicWelfareBags=this.initConfig("welfarebag",["id"],jl),this.m_dicMaps=this.initConfigObject("map",Gl),console.log("-----------------------sheetdata-time1:"+(Laya.Browser.now()-t)),this.m_dicHead=this.initConfig("head",["id"],Nl),this.m_dicIconBadge=this.initConfig("iconBadge",["id"],Yl),this.m_dicCountry=this.initConfig("country",["id"],Fl),this.m_dicExpression=this.initConfig("expression",["id"],ec),this.m_dicFontColor=this.initConfig("fontColor",["id"],tc),this.m_dicCurrencyAddress=this.initConfig("currencyAddress",["sn"],ql),this.m_dicCoinAddress=this.initConfig("coinAddress",["id"],Kl),this.m_dicBuyHeroes=this.initConfig("buyHeroes",["id"],Lo),this.m_dicACoin=this.initConfigObject("aCoin",Wl),this.m_dicBuyHeroes=this.initConfig("buyHeroes",["id"],Lo),this.m_dicPuzzleExchange=this.initConfig("puzzleExchange",["id"],Zl),this.m_dicDropCashAddresse=this.initConfig("DropCashAddress",["sn"],Jl),this.m_dicGenerate=this.initConfigObject("general",Al),this.m_dicWorldMapChildTypeItem=new te,console.log("-----------------------sheetdata-time2:"+(Laya.Browser.now()-t))}getArenaTypesInSub(){var t=[];for(let e of this.m_dicArenaTypes.values)e.inSub==1&&t.push(e);return t}getArenaTypesInSubByType(t){var e=[];for(let i of this.m_dicArenaTypes.values)if(i.arenaType==t)return i;return[]}onSetShopItem(t){this.m_dicShops.set(t.id,t)}onSetArena(t){this.m_dicArenaDic.set(t.id,t)}preInit(){this.m_dicScene=this.initConfig("scene",["name"],Rl)}getItemModel(){return this.getDataModel(nt.DataType_Items)}getGeneralValueById(t){return this.m_dicGenerate&&this.m_dicGenerate.get(t)?this.m_dicGenerate.get(t).value:0}getSocialShareValueById(t){return this.m_dicSocialShare&&this.m_dicSocialShare.get(t)?this.m_dicSocialShare.get(t).parameter:0}getDataModel(t){if(!this._modelList.get(t))switch(t){case nt.DataType_Items:this._modelList.set(t,new Ml);break}return this._modelList.get(t)}getWelfareBagId(t){var e=this.m_dicWelfareBags;for(let n=0;n<e.values.length;n++){var i=e.values[n];if(t>=i.rankingMin&&t<=i.rankingMax)return i.id}return 0}initNodes(t){var e=new te;for(let n=0;n<t.values.length;n++){var i=t.values[n];i.open==1&&($.vType==2?i.type==2&&(e.set(i.id,i),i.testUrl()):i.type==1&&(e.set(i.id,i),i.testUrl()))}return e}testNodes(){var t=this.m_dicNodes;for(let i=0;i<t.values.length;i++){var e=t.values[i];e.testUrl()}}getNodeByAddr(t){var e=this.m_dicNodes;for(let n=0;n<e.values.length;n++){var i=e.values[n];if(i&&i.socketUrl==t)return i}return null}getCurrencyAddress(t){let i=nt.intance.m_dicCurrencyAddress.values;for(let r=0;r<i.length;r++){var n=i[r];if($.vType==n.isSN&&t==n.id)return n.token}}getCurrency(t){let i=nt.intance.m_dicCurrencyAddress.values;for(let r=0;r<i.length;r++){var n=i[r];if($.vType==n.isSN&&t==n.id)return n}}getDropCashAddress(t,e){let n=nt.intance.m_dicDropCashAddresse.values;for(let o=0;o<n.length;o++){var r=n[o];if($.vType==r.isSN&&t==r.chainId&&e==r.name)return r}}getPuzzleExchange(t){let i=nt.intance.m_dicPuzzleExchange.values;for(let r=0;r<i.length;r++){var n=i[r];if(t==n.id)return n}}getPuzzleExchangeByName(t){let i=nt.intance.m_dicPuzzleExchange.values;for(let r=0;r<i.length;r++){var n=i[r];if(t==n.name)return n}}getNetAddress(t){let i=nt.intance.m_dicCoinAddress.values;for(let r=0;r<i.length;r++){var n=i[r];if($.vType==n.type&&t==n.tokenid)return n.tokenAddress}}getBuyHeroAddress(t){let i=nt.intance.m_dicBuyHeroes.values;for(let r=0;r<i.length;r++){var n=i[r];if($.vType==n.type&&t==n.tokenid)return n.tokenAddress}}getACoin(t,e){let n=nt.intance.m_dicACoin.values;for(let o=0;o<n.length;o++){var r=n[o];if(t==r.token&&e==r.currency)return r}}static getArrFromDictionary(t,e,i){let n=[];for(let r=0;r<t.values.length;r++)t.values[r][e]+""==i+""&&n.push(t.values[r]);return n}getArrFromDicItemByKey(t,e){let i=[];for(let n=0;n<this.m_dicItems.values.length;n++)this.m_dicItems.values[n][t]+""==e+""&&i.push(this.m_dicItems.values[n]);return i}initConfigObject(t,e=null,i=null){let n="config/"+t+".json";console.log("initConfigObject： url: "+n);let r=C.instance.getResByURL(n).data;return new Kn(r,e)}initConfig(t,e,i=null,n=!1,r=null){let o="config/"+t+".json";console.log("initConfig url: "+o);let s=C.instance.getResByURL(o).data,l=new te;if(!s)return console.log("ERROR : SheetDataManager -->initConfig()  url:"+o),l;let c;for(let u=0;u<s.length;u++){let m=this.compoundKey(s[u],e);i?(c=new i,c.init==null&&console.log("ERROR :BaseItem> SheetDataManager -->initConfig()  url:"+o),c.init(s[u]),l.set(m,c),r&&r.runWith(c)):(l.set(m,s[u]),r&&r.runWith(s[u]))}if(n){let u=C.instance.setResURL(o);Laya.Loader.clearRes(u)}return l}compoundKey(t,e){let i="",n=e.length;if(n>1)for(let r=0;r<n;r++)i+=t[e[r]],r!=n-1&&(i+="_");else i=t[e[0]];return i}getCompoundKey(t){let e="",i=t.length;if(i>1)for(let n=0;n<i;n++)e+=t[n],n!=i-1&&(e+="_");else e=t[0];return e}initConfig2(t,e,i,n=!0){let r="config/"+t+".json",o=C.instance.getResByURL(r).data,s=new te;if(!o)return console.log("ERROR : SheetDataManager -->initConfig2()  url:"+r),s;let l;for(let c=0;c<o.length;c++){let u=o[c][e],m;s.get(u)==null?(m=[],s.set(u,m)):m=s.get(u),l=new i,l.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig2()  url:"+r),l.init(o[c]),m.push(l)}if(n&&t!="items"){let c=C.instance.setResURL(r);Laya.Loader.clearRes(c)}return s}getItemsBy(t,e){let i=this.getArrFromDicItemByKey("itm_type",t),n=[];for(let r of i)r.child_type.toString()==e.toString()&&n.push(r);return n}getSheetDataByMultiKey(t,e){let i=this.getCompoundKey(e);return t.get(i)}};nt.DataType_Items="SheetDataManager:items",nt.DataType_CatagoryChildType="SheetDataManager:CatagoryChildType",nt.DataType_BeautyPiece="SheetDataManager:beautypiece",nt.DataType_BeautyExp="SheetDataManager:beautyexp",nt.DataType_ClothStyleScore="SheetDataManager:clothStyleScore";var R=nt;var N=class{constructor(){}};N.NO_ALL=-1,N.YES=1,N.NO=2,N.SURE=4,N.CANCEL=8,N.CLOSE=16,N.RETURN_YES=1,N.RETURN_NO=2,N.RETURN_NONE=3,N.BASEALERTVIEW="BaseAlertDialog",N.MatchConfimDialog="MatchConfimDialog",N.BUYCONFIRMVIEW="BuyConfirmView",N.GUILDQUITVIEW="GuildQuitView",N.BuyItemConfirmView="BuyItemConfirmView",N.DOWNLOADALERT="DownLoadAlert";var se=class a{constructor(){}static instance(){return a._instance||(a._instance=new a),a._instance}AlertByType(t,e=null,i=0,n=null,r=null,o=!1,s=null){i==0&&(i=N.YES|N.NO),this.onLoaded(i,t,e,n,r,o,s)}onLoaded(t,e,i,n=null,r=null,o=!1,s=null){H.intance.openModule(e,{flag:t,okHandler:n,cancelHandler:r,data:i,destroyDoCancel:o,initHandler:s})}};var xe=class{};xe.TYPE_EXP=3003,xe.TYPE_GOLD=3005,xe.TYPE_TOX=3001,xe.TYPE_USDT=3004,xe.TYPE_BTC=3006,xe.TYPE_ETH=3007,xe.TYPE_BTOX=3011,xe.TYPE_GALA=3010,xe.TYPE_BNB=3013,xe.TYPE_GGG=3021,xe.TYPE_KLAY=3015,xe.TYPE_BNRY=3016;var Se=class Se{static getColorText(t,e="#FFFF00"){return'<font color="'+e+'">'+t+"</font>"}static getChildByName(t,e,i="name"){if(t&&t.hasOwnProperty(i)&&t[i]==e)return t;let n=t;if(n){let r=n.numChildren,o;for(let s=0;s<r;++s)if(o=n.getChildAt(s),o instanceof Laya.Sprite&&(o=Se.getChildByName(o,e,i)),o&&o.hasOwnProperty(i)&&o[i]==e)return o}return null}static getChildByAttri(t,e){if(t&&t.hasOwnProperty(e)&&t[e])return t[e];let i=t;if(i){let n=i.numChildren,r;for(let o=0;o<n;++o)if(r=i.getChildAt(o),r instanceof Laya.Sprite){if(r=Se.getChildByAttri(r,e),r)return r}else if(r&&r.hasOwnProperty(e)&&r[e])return r[e]}return null}static logs(t,e=0,i=!0,n=16777215){if(t=Se.GetLogTime+" "+t,i)switch(e){case 0:n=16777215;break;case 1:n=16777215;break;case 2:n=16711680;break;case 3:n=16777215;break;case 4:n=13434777;break;case 5:n=16742399;break}}static get GetLogTime(){let t=new Date;return t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+":"+t.getMilliseconds()}static get GRAY(){return Se._GRAY||(Se._GRAY=new Laya.ColorFilter([.3,.59,.11,0,0,.3,.59,.11,0,0,.3,.59,.11,0,0,0,0,0,1,0])),Se._GRAY}static get GRAY1(){if(!Se._GRAY1){let t=[.3086,.16094,.082,0,0,.2086,.26094,.082,0,0,.1086,.36094,.082,0,0,0,0,0,1,0];Se._GRAY1=new Laya.ColorFilter(t)}return Se._GRAY1}static get GLOW(){return Se._GLOW||(Se._GLOW=new Laya.GlowFilter("#ffffff",12,0,0)),Se._GLOW}static get BLUR(){if(!Se._BLUR){let t=new Laya.BlurFilter;t.strength=5,Se._BLUR=[t]}return Se._BLUR}static share(t=1001,e=2,i=null,n=null,r=0,o=0,s=null){}static get isParseWWhiteUser(){return Se._isParseWWhiteUser}static get isWhiteName(){return $.isWhiteList}static itemListHandler(t,e){let i=t.dataSource,n=i[0],r=i[1],o=2,s=t.skin;s&&(s.indexOf("xinSmall")!=-1?o=1:s.indexOf("xinBig")!=-1&&(o=3));let l;o==1?l="common/common_clip/clip_xinSmall"+r+".png":o==3?l="common/common_clip/clip_xinBig"+r+".png":l="common/common_clip/clip_xinMiddle"+r+".png",t.skin=l,t.dataSource=n}static setStarList(t,e){t.renderHandler=new Laya.Handler(Se,Se.itemListHandler),t.dataSource=e}static get BLACK(){return Se._BLACK||(Se._BLACK=new Laya.ColorFilter,Se._BLACK.setColor("#000000")),Se._BLACK}static get YELLOW(){return Se._YELLOW||(Se._YELLOW=new Laya.ColorFilter,Se._YELLOW.setColor("#ffe64b")),Se._YELLOW}static get YELLOW1(){return Se._YELLOW1||(Se._YELLOW1=new Laya.ColorFilter,Se._YELLOW1.setColor("#fee14e")),Se._YELLOW1}static get RED1(){return Se._RED1||(Se._RED1=new Laya.ColorFilter,Se._RED1.setColor("#ff4537")),Se._RED1}static get BLUE(){return Se._BLUE||(Se._BLUE=new Laya.ColorFilter,Se._BLUE.setColor("#2f72a7")),Se._BLUE}static setColor(t="#13e2cf"){let e=new Laya.ColorFilter;return e.setColor(t),e}static heroNotEnought(t=1286){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(t),N.YES,null)}static popTip(t){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(t),N.YES,null)}static onGetHero(t=-1){fe.intance.setCurrentScene(X.M_SCENE_SHOP,[1,t])}static isFightHero(t){return L.instance.playerDto.fightHeroPk==t||t==L.instance.playerDto.newFightHeroPk}static titickNotEnought(t=-1){var e=2,i=R.intance.getSheetDataByMultiKey(R.intance.m_dicShopMulDic,[e,t]);if(i&&i.open==1)se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1060),N.CANCEL,Laya.Handler.create(this,this.onGetTitck,[t]));else{var n=R.intance.m_dicItems.get(t);n?B.instance.notice(d.instance.getLanguage(1282,d.instance.getLanguage(n.name))):pe.instance.showErrorWord(18)}}static RemError(){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1124),N.YES,null)}static NoHeroError(t){se.instance().AlertByType(N.BASEALERTVIEW,t,N.YES,null)}static TransactionErrorTip(){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1224),N.YES,null)}static alertNoAll(t){se.instance().AlertByType(N.BASEALERTVIEW,t,N.NO_ALL)}static onGetTitck(t=-1){fe.intance.setCurrentScene(X.M_SCENE_SHOP,[2,t])}static moneyNotEnought(t=xe.TYPE_TOX){var e=R.intance.m_dicItems.get(t),i=d.instance.getLanguage(e.name);B.instance.notice(d.instance.getLanguage(1170,i))}static onGetMoney(t){fe.intance.setCurrentScene(X.M_SCENE_ASSET,[1,t])}static openSquidGame(){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(6056),N.CANCEL,Laya.Handler.create(this,this.onOpenSquidGame))}static onOpenSquidGame(){window.location.href="https://squidgamefi.io/?invitationCode=2oi"}static otherLogin(){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(6054),N.YES,Laya.Handler.create(this,Te.instance.reload))}static netError(){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1307),N.YES,Laya.Handler.create(this,Te.instance.reload))}static commTipWithYes(t){se.instance().AlertByType(N.BASEALERTVIEW,t,N.YES)}static shakeSprs(t,e=2,i=4,n=32){if(Se.isShake)return;Se.isShake=!0;let r=t.length,o=[];for(let u=0;u<r;u++){let m=t[u];o.push([m.x,m.y])}let s=[0,0],l=0,c=function(){s[l%2]=l++%4<2?0:i,l>e*4+1&&(Laya.timer.clear(Laya.stage,c),l=0,Se.isShake=!1);for(let u=0;u<r;u++){let m=t[u];m.x=s[0]+o[u][0],m.y=s[1]+o[u][1]}};Laya.timer.loop(n,Laya.stage,c)}static shake(t,e=2,i=4,n=32){if(Se.isShake)return;Se.isShake=!0;let r=new Laya.Point(t.x,t.y),o=[0,0],s=0,l=function(){o[s%2]=s++%4<2?0:i,s>e*4+1&&(Laya.timer.clear(Laya.stage,l),s=0,Se.isShake=!1),t.x=o[0]+r.x,t.y=o[1]+r.y};Laya.timer.loop(n,Laya.stage,l)}static checkIsFull(){}static fullScreen(t){var e,i=Laya.Browser.window.location.href;t?(i+="&isFull=1",e={type:"openChildPage",data:{url:i,fullScreen:"1",close:"0"}}):e={type:"closePage",data:""};var n=JSON.stringify(e);Laya.Browser.onIOS?(console.log("onIOS"),typeof webkit<"u"&&(console.log("onIOS1"),webkit.messageHandlers._tw_.postMessage(n),console.log("onIOS2"))):Laya.Browser.onAndroid&&(console.log("onAndriod0"),window&&typeof window._tw_<"u"&&(console.log("onAndriod1 str: "+n),window._tw_.callInto(n),console.log("onAndriod2")))}};Se._isParseWWhiteUser=!1,Se.isWWhiteUser=!1,Se.isShake=!1,Se.isFullScreen=!1;var be=Se;var Oi=class Oi{constructor(){this.mainSceneX=10086;this.isCloseAll=!0;this.enterMainSceneTimes=0;this.isTopOpening=!1;this.isBottomOpening=!1;y.intance.on(h.EVENT_MODULE_ADDED,this,this.onAdded)}static get intance(){return Oi._instance||(Oi._instance=new Oi),Oi._instance}init(){}setup(){}onAdded(t){}getPreSceneData(){if(this.m_arrFromScenes.length<1)return[X.M_SCENE_MAIN,!0,1,null];{let t=this.m_arrFromScenes.pop();return console.log("pop-----------route："+this.m_arrFromScenes.join(" | ")),t}return[X.M_SCENE_MAIN,!0,1,null]}removePreSceneData(){this.m_arrFromScenes=[]}setBackScene(){let t=this.getPreSceneData();this.setCurrentScene(t[0],t[1],!1)}setMainScene(t=1,e=null){this.setCurrentScene(X.M_SCENE_MAIN,e)}async setCurrentScene(t,e=null,i=!1,n=!0){console.log("setCurrentScene: ",t,e);let r=!1;if(this.m_sceneCurrent&&this.m_sceneCurrent.name==t){console.log("currentScene："+this.m_sceneCurrent.name+"  openScene：："+t);return}this.isCloseAll?H.intance.closeAll():this.isCloseAll=!0,this.m_sceneCurrent&&(this.m_arrFromScenes||(this.m_arrFromScenes=[]),i&&this.m_sceneCurrent.m_arrOpenSceneData[3]&&this.m_arrFromScenes.push(this.m_sceneCurrent.m_arrOpenSceneData),console.log("open-----------scene："+this.m_arrFromScenes),this.fromScene=this.m_sceneCurrent.name,console.log("fromSceneName: "+this.fromScene),Oi.m_arrSceneToDialog.indexOf(t)==-1?(this.m_sceneCurrent==this.m_preScene&&(this.m_preScene=null),this.m_sceneCurrent.toScene=t,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),vo.instance.dispose()):this.m_preScene=this.m_sceneCurrent,!i&&Oi.m_arrSceneToDialog.indexOf(t)==-1&&this.m_preScene&&(this.m_sceneCurrent=this.m_preScene,this.m_sceneCurrent.toScene=t,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),vo.instance.dispose()));let o=R.intance.m_dicScene.get(t);switch(o&&o.music!=null&&o.music!="0"&&o.music!=""&&(console.log("SceneManager.setCurrentScene sceneItem.music: "+o.music),Ne.instance.playMusicByName(o.music)),t){case X.M_SCENE_MAIN:this.m_arrFromScenes=[],this.m_sceneCurrent=await Laya.Scene.open("scenes/mainView/MainScene.ls"),this.enterMainSceneTimes++;break;case X.M_SCENE_AIRDROP:this.m_sceneCurrent=await Laya.Scene.open("scenes/airdrop/AirdropScene.ls",!0,e);break;case X.M_SCENE_SHOP:this.m_sceneCurrent=await Laya.Scene.open("scenes/shop/ShopScene.ls",!0,e);break;case X.M_SCENE_RANK:this.m_sceneCurrent=await Laya.Scene.open("scenes/rank/RankScene.ls");break;case X.M_SCENE_SHOLARSHIP:this.m_sceneCurrent=await Laya.Scene.open("scenes/scholarship/ScholarshipScene.ls");break;case X.M_SCENE_FRIEND:this.m_sceneCurrent=await Laya.Scene.open("scenes/friend/FriendScene.ls");break;case X.M_SCENE_HERO:this.m_sceneCurrent=await Laya.Scene.open("scenes/hero/MyHeroScene.ls");break;case X.M_SCENE_KNAPSACK:this.m_sceneCurrent=await Laya.Scene.open("scenes/item/KnapsackScene.ls");break;case X.M_SCENE_MAIL:this.m_sceneCurrent=await Laya.Scene.open("scenes/mail/MailScene.ls");break;case X.M_SCENE_UNION:this.m_sceneCurrent=await Laya.Scene.open("scenes/union/UnionScene.ls");break;case X.M_SCENE_MYUNION:this.m_sceneCurrent=await Laya.Scene.open("scenes/union/MyUnionScene.ls",!0,e);break;case X.M_SCENE_MATCH_READY:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/MatchReady.ls");break;case X.M_SCENE_MATCH:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/Match.ls");break;case X.M_SCENE_ASSET:this.m_sceneCurrent=await Laya.Scene.open("scenes/asset/AssetScene.ls",!0,e);break;case X.M_SCENE_GET_MAT:this.m_sceneCurrent=await Laya.Scene.open("scenes/getMat/GetMatScene.ls",!1,e);break;case X.M_SCENE_OPEN_GAME:this.m_sceneCurrent=await Laya.Scene.open("scenes/getMat/OpenGameScene.ls",!1,e);break;default:break}be.logs("======================  打开Scene: "+t+"  ======================"),this.m_sceneCurrent.name=t,this.m_sceneCurrent.fromScene=this.fromScene,this.m_sceneCurrent.m_arrOpenSceneData=[t,e,i,n];let s=M.M_SCENE}initPreload(){let t=R.intance.m_dicScene.get(X.M_SCENE_PRE_LOAD);t&&t.music!=null&&t.music!="0"&&t.music!=""&&(console.log("SceneManager.initPreload sceneItem.music: "+t.music),Ne.instance.playMusicByName(t.music))}get currSceneName(){return this.m_sceneCurrent?this.m_sceneCurrent.name:""}};Oi.m_arrSceneToDialog=[];var fe=Oi;var Mt=class{constructor(){this._color=1;this.isLvUp=!1;this.newAddCnt=0}get simgurl(){return C.instance.getHeroHeadRes(this.heroItem.serialId,this.color)}get sk(){return C.instance.getHeroSkRes(this.heroItem.serialId,this.color)}get id(){return this._id}set id(t){this._id=t,this.heroItem=R.intance.m_dicHeros.get(t+"")}get name(){return d.instance.getLanguage(this.heroItem.name)}set name(t){this._name=t}get color(){return this._color}set color(t){t&&(this._color=t)}get m_iNum(){return this._m_iNum}set m_iNum(t){this._m_iNum=t}};var Ve=class a{constructor(t=0){this._m_iLevel=0;this._m_arrDisc=[];this.newAddCnt=0;this.isScholarship=!1;this.isLvUp=!1;this.needTip=!0;this.m_bSalon=!1;this.m_bIsSetId=!1;t!=0&&(this.m_iId=t)}get m_sIcon(){return this._m_sIcon}set m_sIcon(t){this._m_sIcon=t}get m_iLevel(){return this._m_iLevel>0?this._m_iLevel:1}set m_iLevel(t){this._m_iLevel=t||0}get m_iNum(){return this._m_iNum}set m_iNum(t){this._m_iNum=t}copyItem(){let t=new a;return t.m_iId=this.m_iId,t.m_iOriginalId=this.m_iOriginalId,t}get m_bTry(){return this.m_iId==this.m_iOriginalId?this._m_bSet=!1:this._m_bSet=!0,this._m_bSet}get m_strName(){return d.instance.getLanguage(this.itemItem.name)}set m_bTry(t){this._m_bSet=t}get m_iId(){return this._m_iId}set m_iId(t){this._m_iId=t,this.m_bIsSetId||(this.m_bIsSetId=!0,this.m_iOriginalId=t),this.setConfigData()}setConfigData(){if(this.m_iId!=0){if(this.itemItem=R.intance.m_dicItems.get(this.m_iId.toString()),!this.itemItem){console.log("[          <items> find out id:"+this.m_iId+"             ]");return}if(this.subType=parseInt(this.itemItem.subType+""),this.backType=parseInt(this.itemItem.backPack+""),this.type=parseInt(this.itemItem.type+""),this.m_sIcon=this.itemItem.icon,this.itemItem.buy_price){this.m_iPrice=this.itemItem.buy_price[0][1];let t=this.itemItem.buy_price[0][0],e=R.intance.m_dicItems.get(t);e&&(this.m_strBuyIcon=C.instance.getItemIcon(e.icon))}this.itemItem.sell_price&&(this.m_iSellPrice=parseFloat(this.itemItem.sell_price[0][1])),this.m_iQuality=this.itemItem.quality,this.setQualityData()}}setQualityData(){this.m_arrQualityData=this.itemItem.starArr}get getIconURL(){return C.instance.getItemIcon(this.itemItem.icon)}copy(){let t=new a(this.m_iId);return t.m_iLevel=this.m_iLevel,t}compareName(){return d.instance.getLanguage(this.itemItem.name)}compareQuality(){return parseFloat(this.m_iQuality+"")}compareSellPrice(){return parseFloat(this.itemItem.sell_price[1]+"")}compareNum(){return parseFloat(this.m_iNum+"")}compareLevel(){return parseFloat(this.m_iLevel+"")}compareFragment(){let t=this.itemItem.id;return 0}compareTypeId(){return parseInt(this.m_iId+"")}};var $t=class a{constructor(){this._isPop=!1;y.intance.on(h.EVENT_CHECK_REMAIN,this,this.onCheckRemain)}static get instance(){return a._instance||(a._instance=new a),a._instance}get model(){return je.instance}get isPop(){return this._isPop}startShow(){console.log("startShow");var t=this.model.hasRemain();!this._isPop&&t&&(this._isPop=!0,t instanceof Mt?y.intance.event(h.EVENT_OPEN_MODULE,f.HeroGetDialog):y.intance.event(h.EVENT_OPEN_MODULE,f.ItemGetDialog))}onCheckRemain(t){if(t==f.ItemGetDialog||t==f.HeroGetDialog){var e=this.model.hasRemain();e?e instanceof Mt?y.intance.event(h.EVENT_OPEN_MODULE,f.HeroGetDialog):y.intance.event(h.EVENT_OPEN_MODULE,f.ItemGetDialog):this._isPop=!1}}};var je=class a{constructor(t){this._list=[];this.needPop=!0;this.autoPop=!0}static get instance(){return a._instance||(a._instance=new a(new hb)),a._instance}get service(){return $t.instance}addItem(t,e=!1){let i=new Ve;i.m_iId=t.m_iId,i.newAddCnt=t.newAddCnt,i.m_iLevel=t.m_iLevel,i.isLvUp=t.isLvUp,i.m_bNew=t.m_bNew,this._list.push(i),e&&this.service.startShow()}addHeroItem(t,e=!1){let i=new Mt;i.id=t.id,i.newAddCnt=t.newAddCnt,i.lv=t.lv,i.isLvUp=t.isLvUp,i.m_bNew=t.m_bNew,this._list.push(i),e&&this.service.startShow()}addItems(t,e=!1){this._list=this._list.concat(t),e&&this.service.startShow()}hasRemain(){return this._list.length>0?this._list[0]:null}get needListener(){return this._list.length>=2}addConsumeByServer(t){this._list.push(t)}addConsume(t,e){this._list.push([t,e])}getNextItem(){return this._list.length>0?this._list[0]:null}getOneItem(){return this._list.length>0?this._list.shift():null}},hb=class{};var vt=class{constructor(){}};vt.TYPE_NORMAL=0,vt.TYPE_TRUST=1,vt.TYPE_WEB3=2,vt.type=0;async function gx({timeout:a}={timeout:3e3}){let t=av();return t||vx({timeout:a})}async function vx({timeout:a}={timeout:3e3}){return new Promise(t=>{let e=()=>{t(av())};window.addEventListener("trustwallet#initialized",e,{once:!0}),setTimeout(()=>{window.removeEventListener("trustwallet#initialized",e,{once:!0}),t(null)},a)})}function av(){let a=e=>!!e.isTrust;return typeof window<"u"&&typeof window.ethereum<"u"?a(window.ethereum)?window.ethereum:window.ethereum?.providers?window.ethereum.providers.find(a)??null:window.trustwallet??null:null}async function fb(){if(console.log("initWeb3 -0"),console.log("initWeb3 -1"),typeof window<"u"&&typeof window.ethereum<"u"&&!!window.ethereum.isTrust){let t=await gx();console.log("initWeb3 -2"+t),vt.trustProvider=t,vt.type=vt.TYPE_TRUST,console.log("initWeb3 -6")}else typeof web3<"u"&&(console.log("initWeb3 2"),web3=new Web3(web3.currentProvider),vt.web3Provider=web3,vt.type=vt.TYPE_WEB3,console.log("initWeb3 3"))}var xi=class a{constructor(){this.walletDic=new te}static get instance(){return a._instance||(a._instance=new a),a._instance}getEthValue(t){return a.instance.walletDic.get(t)?a.instance.walletDic.get(t).ethValue:0}getValue(t){return a.instance.walletDic.get(t)?a.instance.walletDic.get(t).value:0}};var Xt=class{};Xt.ASSETS_TOX=1e4,Xt.ASSETS_ARCANITE=10001,Xt.ASSETS_CRYSTAL=10002,Xt.ASSETS_MITHRIL=10003,Xt.ASSETS_REDSTONE=10004,Xt.ASSETS_TRUEIRON=10005;var le=class{static initConfig(t){this.configDic=new te;for(let e of t){let i=e.sstringvalue;e.sadditional==="JSON"&&(i=JSON.parse(i)),this.configDic.set(e.skey2,i),this[e.skey2]=i}}};le.ADDRESS0="0x0000000000000000000000000000000000000000",le.TOKEN_ERC20ABI=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"miner",type:"address"}],name:"addMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_delMinter",type:"address"}],name:"delMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"idx",type:"uint256"}],name:"getMinter",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMinterLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],le.PUZZLE_ABI=[{inputs:[{internalType:"address",name:"_signAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidShortString",type:"error"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"StringTooLong",type:"error"},{anonymous:!1,inputs:[],name:"EIP712DomainChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"orderId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"deadline",type:"uint256"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"TOX",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"USDT",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"WBNB",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"eip712Domain",outputs:[{internalType:"bytes1",name:"fields",type:"bytes1"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"version",type:"string"},{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"address",name:"verifyingContract",type:"address"},{internalType:"bytes32",name:"salt",type:"bytes32"},{internalType:"uint256[]",name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],name:"getAmountsOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address",name:"token",type:"address"}],name:"getTokenAmountsOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"hasUsed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"",type:"bytes"}],name:"hashList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"isSigner",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"router",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_signAddress",type:"address"}],name:"setSigner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"signAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],le.PUZZLE_ABI_ETH=[{inputs:[{internalType:"address",name:"_signAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidShortString",type:"error"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"StringTooLong",type:"error"},{anonymous:!1,inputs:[],name:"EIP712DomainChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"orderId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"deadline",type:"uint256"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"GALA",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"USDT",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"eip712Domain",outputs:[{internalType:"bytes1",name:"fields",type:"bytes1"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"version",type:"string"},{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"address",name:"verifyingContract",type:"address"},{internalType:"bytes32",name:"salt",type:"bytes32"},{internalType:"uint256[]",name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],name:"getAmountsOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"hasUsed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"",type:"bytes"}],name:"hashList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"isSigner",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"router",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_signAddress",type:"address"}],name:"setSigner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"signAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],le.ACCOUNT_ADDRESS="0x5ff2123b0Aa4bD97eeF5F6388EFCB56cd29D6835",le.ACCOUNT_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"nickName",type:"string"},{indexed:!1,internalType:"string",name:"avatar",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthHeight",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthPlace",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gender",type:"uint256"},{indexed:!1,internalType:"uint256",name:"influence",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_avatar",type:"string"}],name:"changeAvatar",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"}],name:"changeGender",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"changeInfluence",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"changeLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_nickname",type:"string"}],name:"changeNickName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_nickname",type:"string"},{internalType:"string",name:"_avatar",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_birthHeight",type:"uint256"},{internalType:"uint256",name:"_birthPlace",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"createAccount",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getAccountInfo",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"birthHeight",type:"uint256"},{internalType:"uint256",name:"birthPlace",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"uint256",name:"influence",type:"uint256"}],internalType:"struct AccountInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],le.CREATE_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"AccountToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"accounts",type:"address[]"}],name:"BurnAccount",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"string",name:"nickname",type:"string"},{indexed:!1,internalType:"uint256",name:"country",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gender",type:"uint256"},{indexed:!1,internalType:"string",name:"icon",type:"string"}],name:"RegisterAccount",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"}],name:"burnAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"currentId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"iAccount",outputs:[{internalType:"contract IAccount",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"isExists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"nickname",type:"string"},{internalType:"uint256",name:"country",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"string",name:"icon",type:"string"}],name:"register",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"registerId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],le.BUY_HERO_ABI=[{inputs:[{internalType:"address",name:"_Phantom",type:"address"},{internalType:"address",name:"_TOX",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"Phantom",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOX",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOXPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNFTParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],internalType:"struct PhantomMall.Params[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNameIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"union",type:"address"}],name:"list",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSeriesCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"tos",type:"address[]"}],name:"mintByOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintByTOX",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"nameCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"random",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_toxPrice",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],le.HERO_LIST_ABI=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_fromTokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_toTokenId",type:"uint256"}],name:"BatchMetadataUpdate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"MetadataUpdate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"uri",type:"string"}],name:"TokenBaseURIUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"}],name:"UpdateLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"}],name:"UpdateName",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"}],name:"UpdateSeries",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"currentId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"endId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"exist",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"}],internalType:"struct PhantomHero.Params",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"list",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_endId",type:"uint256"}],name:"setEndId",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"uri",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],name:"updateLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"name",type:"string"}],name:"updateName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"}],name:"updateSeries",outputs:[],stateMutability:"nonpayable",type:"function"}],le.TRANSFER_HERO_ABI=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"uids",type:"uint256[]"}],name:"BatchTransfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"uids",type:"uint256[]"}],name:"batchTransfer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"hero",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],le.EDIT_ACCOUNT_ADDRESS="0xaa1B8FA74Ed295123a6336C2D3a88cB973160dfa",le.EDIT_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"_accountContract",type:"address"},{internalType:"string",name:"_website",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"rate",type:"uint256"}],internalType:"struct UpdateProfile.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWebsite",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_rate",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_website",type:"string"}],name:"setWebsite",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"}],name:"updateProfile",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],le.STAKING_POOL_ABI=[{inputs:[{internalType:"uint256",name:"_poolPlace",type:"uint256"},{internalType:"address",name:"_stakeToken",type:"address"},{internalType:"address",name:"_accountContract",type:"address"},{internalType:"address",name:"_rewardsContract",type:"address"},{internalType:"address",name:"_empowerContract",type:"address"},{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Withdrawn",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcPerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"capacityOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],name:"changeDailyRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimAllReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"claimReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"earned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"earnedAll",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"estimatePerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAccountContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokens",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getDailyRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getEmpowerContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastUpdateTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLimitTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPoolPlace",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsPerUnitStored",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getStakeTokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenIdleStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenMiningStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isAccountStakeToken",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_empowerContract",type:"address"}],name:"setEmpowerContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_limitTokensNumber",type:"uint256"}],name:"setLimitTokensNumber",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_idleStatus",type:"uint256"}],name:"setTokenIdleStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_miningStatus",type:"uint256"}],name:"setTokenMiningStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawAllAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"withdrawAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"}],le.STAKING_HERO_POWERCALC_ABI=[{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenLevel",type:"uint256"},{internalType:"bool",name:"isMatchProfession",type:"bool"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getFormulaParams",outputs:[{components:[{internalType:"uint256",name:"constantValue",type:"uint256"},{internalType:"uint256",name:"linearCoefficient",type:"uint256"},{internalType:"uint256",name:"quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"percentage",type:"uint256"}],internalType:"struct EmpowerCalcFormula.FormulaParams",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],name:"setFormulaParams",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],le.BLINDBOX_ADDRESS="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",le.BLINDBOX_ABI=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],le.BLINDBOX_ADDRESS_V2="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",le.BLINDBOX_ABI_V2=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],le.HERO_ADDRESS="0xCC0A4E3Bd1D49D7Ef9C431C0aD87D36B0B342018",le.HERO_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"rarity",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"},{indexed:!1,internalType:"uint256",name:"race",type:"uint256"},{indexed:!1,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"level",type:"uint256"}],name:"UpdateLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"UpdateMineralLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"string",name:"name",type:"string"}],name:"UpdateName",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"race",type:"uint256"}],name:"UpdateRace",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"rarity",type:"uint256"}],name:"UpdateRatity",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"series",type:"uint256"}],name:"UpdateSeries",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"status",type:"uint256"}],name:"UpdateStatus",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getNFTParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"rarity",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"},{internalType:"uint256",name:"mineralLevel",type:"uint256"}],internalType:"struct Parmas",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_name",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"},{internalType:"uint256",name:"_race",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"updateLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"updateMineralLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_name",type:"string"}],name:"updateName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"}],name:"updateRace",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"}],name:"updateRatity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"}],name:"updateSeries",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"status",type:"uint256"}],name:"updateStatus",outputs:[],stateMutability:"nonpayable",type:"function"}],le.CREATE_UNION_ADDRESS="0xcd62E6a07072Bed38F4126ba5C9361901c71846e",le.CREATE_UNION_ABI="",le.UNION_NUMBER_SYS_ADDRESS="0x45F0de10fA3982c4d18AbaE89a5F0663123f955c",le.UNION_NUMBER_SYS_ABI="",le.UPGRADE_UNION_ADDRESS="0x18320fD38F3806C0A9fb2B41202Ed0bD3f826894",le.UPGRADE_UNION_ABI="",le.UNION_DISTRIBUTE_ADDRESS="0x0f6b4bBa8b01B6ee2CC3232ea963ac702CaDCe04",le.UNION_WAR_ADDRESS="0xF8489Bb617F9DCaBF33bEaeBdA4CCD029E9E247E",le.UNION_DISTRIBUTE_ABI="",le.UNION_WAR_ABI="",le.HERO_TO_TOKEN_POOL_ADDRESS="",le.HERO_TO_TOKEN_POOL_ABI="",le.WITHDRAW_AND_RECHARGE_ADDRESS="",le.WITHDRAW_AND_RECHARGE_ABI="",le.SERIESHEROMALL_ADDRESS="",le.SERIESHEROMALL_ABI="",le.HEROFORMATION_ADDRESS="",le.HEROFORMATION_ABI="",le.HERO_MINT_ADDRESS="",le.HERO_MINT_ABI="",le.RECHANGE_ADDRESS_TOX="0x32926612d9399C1088045AEB821CCB5Ba904D697",le.RECHANGE_ADDRESS="0x4952981D44cb95c52F0a62D4Fe8702081338D824",le.RECHANGE_ABI=[{inputs:[{internalType:"address",name:"_signer",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidShortString",type:"error"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"StringTooLong",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[],name:"EIP712DomainChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"deadline",type:"uint256"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"depositETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"eip712Domain",outputs:[{internalType:"bytes1",name:"fields",type:"bytes1"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"version",type:"string"},{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"address",name:"verifyingContract",type:"address"},{internalType:"bytes32",name:"salt",type:"bytes32"},{internalType:"uint256[]",name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"isSigner",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_signer",type:"address"}],name:"setSigner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"signer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],le.RECHANGE_ABI_ETH=[{inputs:[{internalType:"address",name:"_receiveAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"orderId",type:"uint256"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"depositETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"hasUsed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"receiveAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiveAddress",type:"address"}],name:"setAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],le.SAT_ADDRESS="0x424CaA5beA9bDfeF9F49796D7C7005632fAbE2E8",le.SAT_ABI=[{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAuthStatus",outputs:[{internalType:"bool",name:"",type:"bool"}],type:"function"}];function ce(a,t,e){return i=>a[t.name||e]?.(i)??t(a,i)}It();qe();var nc=class extends F{constructor(t){super(`Filter type "${t}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}};Ti();Na();_c();xn();mn();ir();var Xv="/docs/contract/encodeEventTopics";function ki(a){let{abi:t,eventName:e,args:i}=a,n=t[0];if(e){let l=Hi({abi:t,name:e});if(!l)throw new Zn(e,{docsPath:Xv});n=l}if(n.type!=="event")throw new Zn(void 0,{docsPath:Xv});let r=zt(n),o=er(r),s=[];if(i&&"inputs"in n){let l=n.inputs?.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(i)?i:Object.values(i).length>0?l?.map(u=>i[u.name])??[]:[];c.length>0&&(s=l?.map((u,m)=>Array.isArray(c[m])?c[m].map((g,x)=>Qv({param:u,value:c[m][x]})):c[m]?Qv({param:u,value:c[m]}):null)??[])}return[o,...s]}function Qv({param:a,value:t}){if(a.type==="string"||a.type==="bytes")return ft(ni(t));if(a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/))throw new nc(a.type);return Ci([a],[t])}Oe();function Ua(a,{method:t}){let e={};return a.transport.type==="fallback"&&a.transport.onResponse?.(({method:i,response:n,status:r,transport:o})=>{r==="success"&&t===i&&(e[n]=o.request)}),i=>e[i]||a.request}async function Ec(a,t){let{address:e,abi:i,args:n,eventName:r,fromBlock:o,strict:s,toBlock:l}=t,c=Ua(a,{method:"eth_newFilter"}),u=r?ki({abi:i,args:n,eventName:r}):void 0,m=await a.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?ye(o):o,toBlock:typeof l=="bigint"?ye(l):l,topics:u}]});return{abi:i,args:n,eventName:r,id:m,request:c(m),strict:!!s,type:"event"}}ri();sa();It();qe();Fa();$o();var rw=3;function pa(a,{abi:t,address:e,args:i,docsPath:n,functionName:r,sender:o}){let{code:s,data:l,message:c,shortMessage:u}=a instanceof ca?a:a instanceof F?a.walk(g=>"data"in g)||a.walk():{},m=(()=>a instanceof Ii?new Ko({functionName:r}):[rw,ua.code].includes(s)&&(l||c||u)?new At({abi:t,data:typeof l=="object"?l.data:l,functionName:r,message:u??c}):a)();return new Wo(m,{abi:t,args:i,contractAddress:e,docsPath:n,functionName:r,sender:o})}ri();Oe();Pc();or();qe();la();var zc=class extends F{constructor(t,{account:e,docsPath:i,chain:n,data:r,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:m,value:g}){let x=In({from:e?.address,to:m,value:typeof g<"u"&&`${rr(g)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:r,gas:o,gasPrice:typeof s<"u"&&`${_t(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${_t(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${_t(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",x].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}};Br();Gc();function hL(a,{docsPath:t,...e}){let i=(()=>{let n=Pr(a,e);return n instanceof Fi?a:n})();return new zc(i,{docsPath:t,...e})}jc();Xo();Nr();ri();or();qe();var qc=class extends F{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}},Wa=class extends F{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}},Wc=class extends F{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${_t(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}};mi();qe();var Or=class extends F{constructor({blockHash:t,blockNumber:e}){let i="Block";t&&(i=`Block at hash "${t}"`),e&&(i=`Block at number "${e}"`),super(`${i} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}};Oe();mi();var Cb={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function Kc(a){let t={...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,chainId:a.chainId?Bt(a.chainId):void 0,gas:a.gas?BigInt(a.gas):void 0,gasPrice:a.gasPrice?BigInt(a.gasPrice):void 0,maxFeePerBlobGas:a.maxFeePerBlobGas?BigInt(a.maxFeePerBlobGas):void 0,maxFeePerGas:a.maxFeePerGas?BigInt(a.maxFeePerGas):void 0,maxPriorityFeePerGas:a.maxPriorityFeePerGas?BigInt(a.maxPriorityFeePerGas):void 0,nonce:a.nonce?Bt(a.nonce):void 0,to:a.to?a.to:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,type:a.type?Cb[a.type]:void 0,typeHex:a.type?a.type:void 0,value:a.value?BigInt(a.value):void 0,v:a.v?BigInt(a.v):void 0};return t.yParity=(()=>{if(a.yParity)return Number(a.yParity);if(typeof t.v=="bigint"){if(t.v===0n||t.v===27n)return 0;if(t.v===1n||t.v===28n)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),t.type==="eip2930"&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t.type==="eip1559"&&delete t.maxFeePerBlobGas,t}function Yc(a){let t=a.transactions?.map(e=>typeof e=="string"?e:Kc(e));return{...a,baseFeePerGas:a.baseFeePerGas?BigInt(a.baseFeePerGas):null,blobGasUsed:a.blobGasUsed?BigInt(a.blobGasUsed):void 0,difficulty:a.difficulty?BigInt(a.difficulty):void 0,excessBlobGas:a.excessBlobGas?BigInt(a.excessBlobGas):void 0,gasLimit:a.gasLimit?BigInt(a.gasLimit):void 0,gasUsed:a.gasUsed?BigInt(a.gasUsed):void 0,hash:a.hash?a.hash:null,logsBloom:a.logsBloom?a.logsBloom:null,nonce:a.nonce?a.nonce:null,number:a.number?BigInt(a.number):null,size:a.size?BigInt(a.size):void 0,timestamp:a.timestamp?BigInt(a.timestamp):void 0,transactions:t,totalDifficulty:a.totalDifficulty?BigInt(a.totalDifficulty):null}}async function Zt(a,{blockHash:t,blockNumber:e,blockTag:i,includeTransactions:n}={}){let r=i??"latest",o=n??!1,s=e!==void 0?ye(e):void 0,l=null;if(t?l=await a.request({method:"eth_getBlockByHash",params:[t,o]}):l=await a.request({method:"eth_getBlockByNumber",params:[s||r,o]}),!l)throw new Or({blockHash:t,blockNumber:e});return(a.chain?.formatters?.block?.format||Yc)(l)}async function Hr(a){let t=await a.request({method:"eth_gasPrice"});return BigInt(t)}async function fL(a,t){return kb(a,t)}async function kb(a,t){let{block:e,chain:i=a.chain,request:n}=t||{};if(typeof i?.fees?.defaultPriorityFee=="function"){let r=e||await ce(a,Zt,"getBlock")({});return i.fees.defaultPriorityFee({block:r,client:a,request:n})}if(typeof i?.fees?.defaultPriorityFee<"u")return i?.fees?.defaultPriorityFee;try{let r=await a.request({method:"eth_maxPriorityFeePerGas"});return Ma(r)}catch{let[r,o]=await Promise.all([e?Promise.resolve(e):ce(a,Zt,"getBlock")({}),ce(a,Hr,"getGasPrice")({})]);if(typeof r.baseFeePerGas!="bigint")throw new Wa;let s=o-r.baseFeePerGas;return s<0n?0n:s}}async function yL(a,t){return $c(a,t)}async function $c(a,t){let{block:e,chain:i=a.chain,request:n,type:r="eip1559"}=t||{},o=await(async()=>typeof i?.fees?.baseFeeMultiplier=="function"?i.fees.baseFeeMultiplier({block:e,client:a,request:n}):i?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new qc;let l=10**(o.toString().split(".")[1]?.length??0),c=g=>g*BigInt(Math.ceil(o*l))/BigInt(l),u=e||await ce(a,Zt,"getBlock")({});if(typeof i?.fees?.estimateFeesPerGas=="function")return i.fees.estimateFeesPerGas({block:e,client:a,multiply:c,request:n,type:r});if(r==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new Wa;let g=typeof n?.maxPriorityFeePerGas=="bigint"?n.maxPriorityFeePerGas:await kb(a,{block:u,chain:i,request:n}),x=c(u.baseFeePerGas);return{maxFeePerGas:n?.maxFeePerGas??x+g,maxPriorityFeePerGas:g}}return{gasPrice:n?.gasPrice??c(await ce(a,Hr,"getGasPrice")({}))}}mi();Oe();async function Xc(a,{address:t,blockTag:e="latest",blockNumber:i}){let n=await a.request({method:"eth_getTransactionCount",params:[t,i?ye(i):e]});return Bt(n)}qe();var Gi=class extends F{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}};Nr();la();function bL(a){if(a.type)return a.type;if(typeof a.blobs<"u"||typeof a.blobVersionedHashes<"u"||typeof a.maxFeePerBlobGas<"u"||typeof a.sidecars<"u")return"eip4844";if(typeof a.maxFeePerGas<"u"||typeof a.maxPriorityFeePerGas<"u")return"eip1559";if(typeof a.gasPrice<"u")return typeof a.accessList<"u"?"eip2930":"legacy";throw new Hc({transaction:a})}mi();async function ji(a){let t=await a.request({method:"eth_chainId"});return Bt(t)}async function Ka(a,t){let{account:e=a.account,chain:i,chainId:n,gas:r,nonce:o,parameters:s=["chainId","fees","gas","nonce","type"],type:l}=t,c=e?it(e):void 0,u={...t,...c?{from:c?.address}:{}};s.includes("chainId")&&(i?u.chainId=i.id:typeof n<"u"?u.chainId=n:u.chainId=await ce(a,ji,"getChainId")({})),s.includes("nonce")&&typeof o>"u"&&c&&(u.nonce=await ce(a,Xc,"getTransactionCount")({address:c.address,blockTag:"pending"}));let m=await(()=>{if(!(typeof u.type<"u"))return ce(a,Zt,"getBlock")({blockTag:"latest"})})();if((s.includes("fees")||s.includes("type"))&&typeof l>"u")try{u.type=bL(u)}catch{u.type=typeof m?.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(s.includes("fees"))if(u.type==="eip1559"||u.type==="eip4844"){if(typeof u.maxFeePerGas>"u"||typeof u.maxPriorityFeePerGas>"u"){let{maxFeePerGas:g,maxPriorityFeePerGas:x}=await $c(a,{block:m,chain:i,request:u});if(typeof t.maxPriorityFeePerGas>"u"&&t.maxFeePerGas&&t.maxFeePerGas<x)throw new Wc({maxPriorityFeePerGas:x});u.maxPriorityFeePerGas=x,u.maxFeePerGas=g}}else{if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")throw new Wa;let{gasPrice:g}=await $c(a,{block:m,chain:i,request:u,type:"legacy"});u.gasPrice=g}return s.includes("gas")&&typeof r>"u"&&(u.gas=await ce(a,Ur,"estimateGas")({...u,account:c?{address:c.address,type:"json-rpc"}:void 0})),zi(u),delete u.parameters,u}async function Ur(a,t){let e=t.account??a.account,i=e?it(e):void 0;try{let{accessList:n,blobs:r,blockNumber:o,blockTag:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:g,maxPriorityFeePerGas:x,nonce:w,to:v,value:E,...P}=i?.type==="local"?await Ka(a,t):t,q=(o?ye(o):void 0)||s;zi(t);let Q=a.chain?.formatters?.transactionRequest?.format,O=(Q||qa)({...Rr(P,{format:Q}),from:i?.address,accessList:n,blobs:r,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:g,maxPriorityFeePerGas:x,nonce:w,to:v,value:E}),J=await a.request({method:"eth_estimateGas",params:q?[O,q]:[O]});return BigInt(J)}catch(n){throw hL(n,{...t,account:i,chain:a.chain})}}async function gL(a,t){let{abi:e,address:i,args:n,functionName:r,...o}=t,s=Rt({abi:e,args:n,functionName:r});try{return await ce(a,Ur,"estimateGas")({data:s,to:i,...o})}catch(l){let c=o.account?it(o.account):void 0;throw pa(l,{abi:e,address:i,args:n,docsPath:"/docs/contract/estimateContractGas",functionName:r,sender:c?.address})}}ir();It();Aa();_c();wb();kc();mn();var vL="/docs/contract/decodeEventLog";function Cn(a){let{abi:t,data:e,strict:i,topics:n}=a,r=i??!0,[o,...s]=n;if(!o)throw new Co({docsPath:vL});let l=t.find(v=>v.type==="event"&&o===er(zt(v)));if(!(l&&"name"in l)||l.type!=="event")throw new yn(o,{docsPath:vL});let{name:c,inputs:u}=l,m=u?.some(v=>!("name"in v&&v.name)),g=m?[]:{},x=u.filter(v=>"indexed"in v&&v.indexed);for(let v=0;v<x.length;v++){let E=x[v],P=s[v];if(!P)throw new Ei({abiItem:l,param:E});g[E.name||v]=sw({param:E,value:P})}let w=u.filter(v=>!("indexed"in v&&v.indexed));if(w.length>0){if(e&&e!=="0x")try{let v=wn(w,e);if(v)if(m)g=[...g,...v];else for(let E=0;E<w.length;E++)g[w[E].name]=v[E]}catch(v){if(r)throw v instanceof hn||v instanceof ar?new pi({abiItem:l,data:e,params:w,size:Je(e)}):v}else if(r)throw new pi({abiItem:l,data:"0x",params:w,size:0})}return{eventName:c,args:Object.values(g).length>0?g:void 0}}function sw({param:a,value:t}){return a.type==="string"||a.type==="bytes"||a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/)?t:(wn([a],t)||[])[0]}function Vr({abi:a,eventName:t,logs:e,strict:i=!0}){return e.map(n=>{try{let r=Cn({...n,abi:a,strict:i});return t&&!t.includes(r.eventName)?null:{...r,...n}}catch(r){let o,s;if(r instanceof yn)return null;if(r instanceof pi||r instanceof Ei){if(i)return null;o=r.abiItem.name,s=r.abiItem.inputs?.some(l=>!("name"in l&&l.name))}return{...n,args:s?[]:{},eventName:o}}}).filter(Boolean)}Oe();function jt(a,{args:t,eventName:e}={}){return{...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,logIndex:a.logIndex?Number(a.logIndex):null,transactionHash:a.transactionHash?a.transactionHash:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,...e?{args:t,eventName:e}:{}}}async function Fr(a,{address:t,blockHash:e,fromBlock:i,toBlock:n,event:r,events:o,args:s,strict:l}={}){let c=l??!1,u=o??(r?[r]:void 0),m=[];u&&(m=[u.flatMap(w=>ki({abi:[w],eventName:w.name,args:s}))],r&&(m=m[0]));let g;e?g=await a.request({method:"eth_getLogs",params:[{address:t,topics:m,blockHash:e}]}):g=await a.request({method:"eth_getLogs",params:[{address:t,topics:m,fromBlock:typeof i=="bigint"?ye(i):i,toBlock:typeof n=="bigint"?ye(n):n}]});let x=g.map(w=>jt(w));return u?Vr({abi:u,logs:x,strict:c}):x}async function Qc(a,t){let{abi:e,address:i,args:n,blockHash:r,eventName:o,fromBlock:s,toBlock:l,strict:c}=t,u=o?Hi({abi:e,name:o}):void 0,m=u?void 0:e.filter(g=>g.type==="event");return ce(a,Fr,"getLogs")({address:i,args:n,blockHash:r,event:u,events:m,fromBlock:s,toBlock:l,strict:c})}kn();sa();zr();async function qt(a,t){let{abi:e,address:i,args:n,functionName:r,...o}=t,s=Rt({abi:e,args:n,functionName:r});try{let{data:l}=await ce(a,qi,"call")({...o,data:s,to:i});return hi({abi:e,args:n,functionName:r,data:l||"0x"})}catch(l){throw pa(l,{abi:e,address:i,args:n,docsPath:"/docs/contract/readContract",functionName:r})}}ri();kn();sa();zr();async function RL(a,t){let{abi:e,address:i,args:n,dataSuffix:r,functionName:o,...s}=t,l=s.account?it(s.account):a.account,c=Rt({abi:e,args:n,functionName:o});try{let{data:u}=await ce(a,qi,"call")({batch:!1,data:`${c}${r?r.replace("0x",""):""}`,to:i,...s,account:l}),m=hi({abi:e,args:n,functionName:o,data:u||"0x"}),g=e.filter(x=>"name"in x&&x.name===t.functionName);return{result:m,request:{abi:g,address:i,args:n,dataSuffix:r,functionName:o,...s,account:l}}}catch(u){throw pa(u,{abi:e,address:i,args:n,docsPath:"/docs/contract/simulateContract",functionName:o,sender:l?.address})}}It();$o();var Rb=new Map,NL=new Map,fw=0;function Jt(a,t,e){let i=++fw,n=()=>Rb.get(a)||[],r=()=>{let u=n();Rb.set(a,u.filter(m=>m.id!==i))},o=()=>{let u=NL.get(a);n().length===1&&u&&u(),r()},s=n();if(Rb.set(a,[...s,{id:i,fns:t}]),s&&s.length>0)return o;let l={};for(let u in t)l[u]=(...m)=>{let g=n();if(g.length!==0)for(let x of g)x.fns[u]?.(...m)};let c=e(l);return typeof c=="function"&&NL.set(a,c),o}async function Jo(a){return new Promise(t=>setTimeout(t,a))}function Wi(a,{emitOnBegin:t,initialWaitTime:e,interval:i}){let n=!0,r=()=>n=!1;return(async()=>{let s;t&&(s=await a({unpoll:r}));let l=await e?.(s)??i;await Jo(l);let c=async()=>{n&&(await a({unpoll:r}),await Jo(i),c())};c()})(),r}oi();var yw=new Map,bw=new Map;function OL(a){let t=(n,r)=>({clear:()=>r.delete(n),get:()=>r.get(n),set:o=>r.set(n,o)}),e=t(a,yw),i=t(a,bw);return{clear:()=>{e.clear(),i.clear()},promise:e,response:i}}async function HL(a,{cacheKey:t,cacheTime:e=1/0}){let i=OL(t),n=i.response.get();if(n&&e>0&&new Date().getTime()-n.created.getTime()<e)return n.data;let r=i.promise.get();r||(r=a(),i.promise.set(r));try{let o=await r;return i.response.set({created:new Date,data:o}),o}finally{i.promise.clear()}}var gw=a=>`blockNumber.${a}`;async function Ki(a,{cacheTime:t=a.cacheTime}={}){let e=await HL(()=>a.request({method:"eth_blockNumber"}),{cacheKey:gw(a.uid),cacheTime:t});return BigInt(e)}async function Ya(a,{filter:t}){let e="strict"in t&&t.strict,i=await t.request({method:"eth_getFilterChanges",params:[t.id]});if(typeof i[0]=="string")return i;let n=i.map(r=>jt(r));return!("abi"in t)||!t.abi?n:Vr({abi:t.abi,logs:n,strict:e})}async function $a(a,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}function UL(a,t){let{abi:e,address:i,args:n,batch:r=!0,eventName:o,onError:s,onLogs:l,poll:c,pollingInterval:u=a.pollingInterval,strict:m}=t;return(typeof c<"u"?c:a.transport.type!=="webSocket")?(()=>{let v=m??!1,E=Ke(["watchContractEvent",i,n,r,a.uid,o,u,v]);return Jt(E,{onLogs:l,onError:s},P=>{let G,q,Q=!1,Y=Wi(async()=>{if(!Q){try{q=await ce(a,Ec,"createContractEventFilter")({abi:e,address:i,args:n,eventName:o,strict:v})}catch{}Q=!0;return}try{let O;if(q)O=await ce(a,Ya,"getFilterChanges")({filter:q});else{let J=await ce(a,Ki,"getBlockNumber")({});G&&G!==J?O=await ce(a,Qc,"getContractEvents")({abi:e,address:i,args:n,eventName:o,fromBlock:G+1n,toBlock:J,strict:v}):O=[],G=J}if(O.length===0)return;if(r)P.onLogs(O);else for(let J of O)P.onLogs([J])}catch(O){q&&O instanceof Vi&&(Q=!1),P.onError?.(O)}},{emitOnBegin:!0,interval:u});return async()=>{q&&await ce(a,$a,"uninstallFilter")({filter:q}),Y()}})})():(()=>{let v=m??!1,E=Ke(["watchContractEvent",i,n,r,a.uid,o,u,v]),P=!0,G=()=>P=!1;return Jt(E,{onLogs:l,onError:s},q=>((async()=>{try{let Q=o?ki({abi:e,eventName:o,args:n}):[],{unsubscribe:Y}=await a.transport.subscribe({params:["logs",{address:i,topics:Q}],onData(O){if(!P)return;let J=O.result;try{let{eventName:de,args:He}=Cn({abi:e,data:J.data,topics:J.topics,strict:m}),De=jt(J,{args:He,eventName:de});q.onLogs([De])}catch(de){let He,De;if(de instanceof pi||de instanceof Ei){if(m)return;He=de.abiItem.name,De=de.abiItem.inputs?.some(dt=>!("name"in dt&&dt.name))}let Ae=jt(J,{args:De?[]:{},eventName:He});q.onLogs([Ae])}},onError(O){q.onError?.(O)}});G=Y,P||G()}catch(Q){s?.(Q)}})(),()=>G()))})()}sa();ri();tu();function ou({chain:a,currentChainId:t}){if(!a)throw new eu;if(t!==a.id)throw new Jc({chain:a,currentChainId:t})}Br();la();Gc();function VL(a,{docsPath:t,...e}){let i=(()=>{let n=Pr(a,e);return n instanceof Fi?a:n})();return new Uc(i,{docsPath:t,...e})}jc();Xo();Nr();async function Gr(a,{serializedTransaction:t}){return a.request({method:"eth_sendRawTransaction",params:[t]},{retryCount:0})}async function jr(a,t){let{account:e=a.account,chain:i=a.chain,accessList:n,blobs:r,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:m,nonce:g,to:x,value:w,...v}=t;if(!e)throw new Gi({docsPath:"/docs/actions/wallet/sendTransaction"});let E=it(e);try{zi(t);let P;if(i!==null&&(P=await ce(a,ji,"getChainId")({}),ou({currentChainId:P,chain:i})),E.type==="local"){let Y=await ce(a,Ka,"prepareTransactionRequest")({account:E,accessList:n,blobs:r,chain:i,chainId:P,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:m,nonce:g,to:x,value:w,...v}),O=i?.serializers?.transaction,J=await E.signTransaction(Y,{serializer:O});return await ce(a,Gr,"sendRawTransaction")({serializedTransaction:J})}let G=a.chain?.formatters?.transactionRequest?.format,Q=(G||qa)({...Rr(v,{format:G}),accessList:n,blobs:r,data:o,from:E.address,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:m,nonce:g,to:x,value:w});return await a.request({method:"eth_sendTransaction",params:[Q]},{retryCount:0})}catch(P){throw VL(P,{...t,account:E,chain:t.chain||void 0})}}async function FL(a,t){let{abi:e,address:i,args:n,dataSuffix:r,functionName:o,...s}=t,l=Rt({abi:e,args:n,functionName:o});return ce(a,jr,"sendTransaction")({data:`${l}${r?r.replace("0x",""):""}`,to:i,...s})}Oe();async function zL(a,{chain:t}){let{id:e,name:i,nativeCurrency:n,rpcUrls:r,blockExplorers:o}=t;await a.request({method:"wallet_addEthereumChain",params:[{chainId:ye(e),chainName:i,nativeCurrency:n,rpcUrls:r.default.http,blockExplorerUrls:o?Object.values(o).map(({url:s})=>s):void 0}]},{retryCount:0})}ri();var su=256,lu;function GL(a=11){if(!lu||su+a>256*2){lu="",su=0;for(let t=0;t<256;t++)lu+=(256+Math.random()*256|0).toString(16).substring(1)}return lu.substring(su,su+++a)}function cu(a){let{batch:t,cacheTime:e=a.pollingInterval??4e3,ccipRead:i,key:n="base",name:r="Base Client",pollingInterval:o=4e3,type:s="base"}=a,l=a.chain,c=a.account?it(a.account):void 0,{config:u,request:m,value:g}=a.transport({chain:l,pollingInterval:o}),x={...u,...g},w={account:c,batch:t,cacheTime:e,ccipRead:i,chain:l,key:n,name:r,pollingInterval:o,request:m,transport:x,type:s,uid:GL()};function v(E){return P=>{let G=P(E);for(let Q in w)delete G[Q];let q={...E,...G};return Object.assign(q,{extend:v(q)})}}return Object.assign(w,{extend:v(w)})}qe();ur();$o();function es(a,{delay:t=100,retryCount:e=2,shouldRetry:i=()=>!0}={}){return new Promise((n,r)=>{let o=async({count:s=0}={})=>{let l=async({error:c})=>{let u=typeof t=="function"?t({count:s,error:c}):t;u&&await Jo(u),o({count:s+1})};try{let c=await a();n(c)}catch(c){if(s<e&&await i({count:s,error:c}))return l({error:c});r(c)}};o()})}function jL(a,t={}){return async(e,i={})=>{let{retryDelay:n=150,retryCount:r=3}={...t,...i};return es(async()=>{try{return await a(e)}catch(o){let s=o;switch(s.code){case pr.code:throw new pr(s);case mr.code:throw new mr(s);case dr.code:throw new dr(s);case hr.code:throw new hr(s);case ua.code:throw new ua(s);case Vi.code:throw new Vi(s);case fr.code:throw new fr(s);case yr.code:throw new yr(s);case br.code:throw new br(s);case gr.code:throw new gr(s);case Tn.code:throw new Tn(s);case vr.code:throw new vr(s);case Sn.code:throw new Sn(s);case Lr.code:throw new Lr(s);case _r.code:throw new _r(s);case xr.code:throw new xr(s);case wr.code:throw new wr(s);case Ir.code:throw new Ir(s);case 5e3:throw new Sn(s);default:throw o instanceof F?o:new Fc(s)}}},{delay:({count:o,error:s})=>{if(s&&s instanceof di){let l=s?.headers?.get("Retry-After");if(l?.match(/\d/))return parseInt(l)*1e3}return~~(1<<o)*n},retryCount:r,shouldRetry:({error:o})=>vw(o)})}}function vw(a){return"code"in a&&typeof a.code=="number"?a.code===-1||a.code===Tn.code||a.code===ua.code:a instanceof di&&a.status?a.status===403||a.status===408||a.status===413||a.status===429||a.status===500||a.status===502||a.status===503||a.status===504:!0}function uu({key:a,name:t,request:e,retryCount:i=3,retryDelay:n=150,timeout:r,type:o},s){return{config:{key:a,name:t,request:e,retryCount:i,retryDelay:n,timeout:r,type:o},request:jL(e,{retryCount:i,retryDelay:n}),value:s}}function qr(a,t={}){let{key:e="custom",name:i="Custom Provider",retryDelay:n}=t;return({retryCount:r})=>uu({key:e,name:i,request:a.request.bind(a),retryCount:t.retryCount??r,retryDelay:n,type:"custom"})}ur();qe();var pu=class extends F{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}};Pb();ur();function qL(a,{errorInstance:t=new Error("timed out"),timeout:e,signal:i}){return new Promise((n,r)=>{(async()=>{let o;try{let s=new AbortController;e>0&&(o=setTimeout(()=>{i?s.abort():r(t)},e)),n(await a({signal:s?.signal||null}))}catch(s){s.name==="AbortError"&&r(t),r(s)}finally{clearTimeout(o)}})()})}oi();function Lw(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var Nb=Lw();function WL(a,t={}){return{async request(e){let{body:i,fetchOptions:n={},onResponse:r=t.onResponse,timeout:o=t.timeout??1e4}=e,{headers:s,method:l,signal:c}={...t.fetchOptions,...n};try{let u=await qL(async({signal:g})=>await fetch(a,{...n,body:Array.isArray(i)?Ke(i.map(w=>({jsonrpc:"2.0",id:w.id??Nb.take(),...w}))):Ke({jsonrpc:"2.0",id:i.id??Nb.take(),...i}),headers:{...s,"Content-Type":"application/json"},method:l||"POST",signal:c||(o>0?g:null)}),{errorInstance:new Yo({body:i,url:a}),timeout:o,signal:!0});r&&await r(u);let m;if(u.headers.get("Content-Type")?.startsWith("application/json")?m=await u.json():m=await u.text(),!u.ok)throw new di({body:i,details:Ke(m.error)||u.statusText,headers:u.headers,status:u.status,url:a});return m}catch(u){throw u instanceof di||u instanceof Yo?u:new di({body:i,details:u.message,url:a})}}}}function ts(a,t={}){let{batch:e,fetchOptions:i,key:n="http",name:r="HTTP JSON-RPC",onFetchResponse:o,retryDelay:s}=t;return({chain:l,retryCount:c,timeout:u})=>{let{batchSize:m=1e3,wait:g=0}=typeof e=="object"?e:{},x=t.retryCount??c,w=u??t.timeout??1e4,v=a||l?.rpcUrls.default.http[0];if(!v)throw new pu;let E=WL(v,{fetchOptions:i,onResponse:o,timeout:w});return uu({key:n,name:r,async request({method:P,params:G}){let q={method:P,params:G},{schedule:Q}=iu({id:`${a}`,wait:g,shouldSplitBatch(de){return de.length>m},fn:de=>E.request({body:de}),sort:(de,He)=>de.id-He.id}),Y=async de=>e?Q(de):[await E.request({body:de})],[{error:O,result:J}]=await Y(q);if(O)throw new cr({body:q,error:O,url:v});return J},retryCount:x,retryDelay:s,timeout:w,type:"http"},{fetchOptions:i,url:v})}}An();kn();sa();Mn();pc();Oe();Sc();qe();Fa();function Wr(a,t){if(!(a instanceof F))return!1;let e=a.walk(i=>i instanceof At);return e instanceof At?!!(e.data?.errorName==="ResolverNotFound"||e.data?.errorName==="ResolverWildcardNotSupported"||e.data?.errorName==="ResolverNotContract"||e.data?.errorName==="ResolverError"||e.data?.errorName==="HttpError"||e.reason?.includes("Wildcard on non-extended resolvers is not supported")||t==="reverse"&&e.reason===Tc[50]):!1}Ha();Ti();Oe();Na();wi();function mu(a){if(a.length!==66||a.indexOf("[")!==0||a.indexOf("]")!==65)return null;let t=`0x${a.slice(1,65)}`;return lt(t)?t:null}function Kr(a){let t=new Uint8Array(32).fill(0);if(!a)return Lt(t);let e=a.split(".");for(let i=e.length-1;i>=0;i-=1){let n=mu(e[i]),r=n?ni(n):ft(Qt(e[i]),"bytes");t=ft(Gt([t,r]),"bytes")}return Lt(t)}Ti();function KL(a){return`[${a.slice(2)}]`}Ti();Oe();Na();function YL(a){let t=new Uint8Array(32).fill(0);return a?mu(a)||ft(Qt(a)):Lt(t)}function Xa(a){let t=a.replace(/^\.|\.$/gm,"");if(t.length===0)return new Uint8Array(1);let e=new Uint8Array(Qt(t).byteLength+2),i=0,n=t.split(".");for(let r=0;r<n.length;r++){let o=Qt(n[r]);o.byteLength>255&&(o=Qt(KL(YL(n[r])))),e[i]=o.length,e.set(o,i+1),i+=o.length+1}return e.byteLength!==i+1?e.slice(0,i+1):e}async function $L(a,{blockNumber:t,blockTag:e,coinType:i,name:n,gatewayUrls:r,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=fi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}try{let c=Rt({abi:Mb,functionName:"addr",...i!=null?{args:[Kr(n),BigInt(i)]}:{args:[Kr(n)]}}),u={address:l,abi:Zc,functionName:"resolve",args:[tt(Xa(n)),c],blockNumber:t,blockTag:e},m=ce(a,qt,"readContract"),g=r?await m({...u,args:[...u.args,r]}):await m(u);if(g[0]==="0x")return null;let x=hi({abi:Mb,args:i!=null?[Kr(n),BigInt(i)]:void 0,functionName:"addr",data:g[0]});return x==="0x"||bn(x)==="0x00"?null:x}catch(c){if(o)throw c;if(Wr(c,"resolve"))return null;throw c}}qe();var du=class extends F{constructor({data:t}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}},Qa=class extends F{constructor({reason:t}){super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}},Yr=class extends F{constructor({uri:t}){super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}},hu=class extends F{constructor({namespace:t}){super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}};var _w=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,xw=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,ww=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Iw=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function Ew(a){try{let t=await fetch(a,{method:"HEAD"});return t.status===200?t.headers.get("content-type")?.startsWith("image/"):!1}catch(t){return typeof t=="object"&&typeof t.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(e=>{let i=new Image;i.onload=()=>{e(!0)},i.onerror=()=>{e(!1)},i.src=a})}}function XL(a,t){return a?a.endsWith("/")?a.slice(0,-1):a:t}function Ob({uri:a,gatewayUrls:t}){let e=ww.test(a);if(e)return{uri:a,isOnChain:!0,isEncoded:e};let i=XL(t?.ipfs,"https://ipfs.io"),n=XL(t?.arweave,"https://arweave.net"),r=a.match(_w),{protocol:o,subpath:s,target:l,subtarget:c=""}=r?.groups||{},u=o==="ipns:/"||s==="ipns/",m=o==="ipfs:/"||s==="ipfs/"||xw.test(a);if(a.startsWith("http")&&!u&&!m){let x=a;return t?.arweave&&(x=a.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:x,isOnChain:!1,isEncoded:!1}}if((u||m)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(o==="ar:/"&&l)return{uri:`${n}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let g=a.replace(Iw,"");if(g.startsWith("<svg")&&(g=`data:image/svg+xml;base64,${btoa(g)}`),g.startsWith("data:")||g.startsWith("{"))return{uri:g,isOnChain:!0,isEncoded:!1};throw new Yr({uri:a})}function Hb(a){if(typeof a!="object"||!("image"in a)&&!("image_url"in a)&&!("image_data"in a))throw new du({data:a});return a.image||a.image_url||a.image_data}async function QL({gatewayUrls:a,uri:t}){try{let e=await fetch(t).then(n=>n.json());return await fu({gatewayUrls:a,uri:Hb(e)})}catch{throw new Yr({uri:t})}}async function fu({gatewayUrls:a,uri:t}){let{uri:e,isOnChain:i}=Ob({uri:t,gatewayUrls:a});if(i||await Ew(e))return e;throw new Yr({uri:t})}function ZL(a){let t=a;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[e,i,n]=t.split("/"),[r,o]=e.split(":"),[s,l]=i.split(":");if(!r||r.toLowerCase()!=="eip155")throw new Qa({reason:"Only EIP-155 supported"});if(!o)throw new Qa({reason:"Chain ID not found"});if(!l)throw new Qa({reason:"Contract address not found"});if(!n)throw new Qa({reason:"Token ID not found"});if(!s)throw new Qa({reason:"ERC namespace not found"});return{chainID:parseInt(o),namespace:s.toLowerCase(),contractAddress:l,tokenID:n}}async function JL(a,{nft:t}){if(t.namespace==="erc721")return qt(a,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if(t.namespace==="erc1155")return qt(a,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new hu({namespace:t.namespace})}async function e_(a,{gatewayUrls:t,record:e}){return/eip155:/i.test(e)?Tw(a,{gatewayUrls:t,record:e}):fu({uri:e,gatewayUrls:t})}async function Tw(a,{gatewayUrls:t,record:e}){let i=ZL(e),n=await JL(a,{nft:i}),{uri:r,isOnChain:o,isEncoded:s}=Ob({uri:n,gatewayUrls:t});if(o&&(r.includes("data:application/json;base64,")||r.startsWith("{"))){let c=s?atob(r.replace("data:application/json;base64,","")):r,u=JSON.parse(c);return fu({uri:Hb(u),gatewayUrls:t})}let l=i.tokenID;return i.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),QL({gatewayUrls:t,uri:r.replace(/(?:0x)?{id}/,l)})}An();kn();sa();Mn();Oe();async function yu(a,{blockNumber:t,blockTag:e,name:i,key:n,gatewayUrls:r,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=fi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}try{let c={address:l,abi:Zc,functionName:"resolve",args:[tt(Xa(i)),Rt({abi:Db,functionName:"text",args:[Kr(i),n]})],blockNumber:t,blockTag:e},u=ce(a,qt,"readContract"),m=r?await u({...c,args:[...c.args,r]}):await u(c);if(m[0]==="0x")return null;let g=hi({abi:Db,functionName:"text",data:m[0]});return g===""?null:g}catch(c){if(o)throw c;if(Wr(c,"resolve"))return null;throw c}}async function t_(a,{blockNumber:t,blockTag:e,assetGatewayUrls:i,name:n,gatewayUrls:r,strict:o,universalResolverAddress:s}){let l=await ce(a,yu,"getEnsText")({blockNumber:t,blockTag:e,key:"avatar",name:n,universalResolverAddress:s,gatewayUrls:r,strict:o});if(!l)return null;try{return await e_(a,{record:l,gatewayUrls:i})}catch{return null}}An();Mn();Oe();async function i_(a,{address:t,blockNumber:e,blockTag:i,gatewayUrls:n,strict:r,universalResolverAddress:o}){let s=o;if(!s){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=fi({blockNumber:e,chain:a.chain,contract:"ensUniversalResolver"})}let l=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let c={address:s,abi:_L,functionName:"reverse",args:[tt(Xa(l))],blockNumber:e,blockTag:i},u=ce(a,qt,"readContract"),[m,g]=n?await u({...c,args:[...c.args,n]}):await u(c);return t.toLowerCase()!==g.toLowerCase()?null:m}catch(c){if(r)throw c;if(Wr(c,"reverse"))return null;throw c}}Mn();Oe();async function a_(a,{blockNumber:t,blockTag:e,name:i,universalResolverAddress:n}){let r=n;if(!r){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");r=fi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}let[o]=await ce(a,qt,"readContract")({address:r,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[tt(Xa(i))],blockNumber:t,blockTag:e});return o}zr();async function n_(a){let t=Ua(a,{method:"eth_newBlockFilter"}),e=await a.request({method:"eth_newBlockFilter"});return{id:e,request:t(e),type:"block"}}Oe();async function bu(a,{address:t,args:e,event:i,events:n,fromBlock:r,strict:o,toBlock:s}={}){let l=n??(i?[i]:void 0),c=Ua(a,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(g=>ki({abi:[g],eventName:g.name,args:e}))],i&&(u=u[0]));let m=await a.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof r=="bigint"?ye(r):r,toBlock:typeof s=="bigint"?ye(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:e,eventName:i?i.name:void 0,fromBlock:r,id:m,request:c(m),strict:!!o,toBlock:s,type:"event"}}async function gu(a){let t=Ua(a,{method:"eth_newPendingTransactionFilter"}),e=await a.request({method:"eth_newPendingTransactionFilter"});return{id:e,request:t(e),type:"transaction"}}Oe();async function r_(a,{address:t,blockNumber:e,blockTag:i="latest"}){let n=e?ye(e):void 0,r=await a.request({method:"eth_getBalance",params:[t,n||i]});return BigInt(r)}async function o_(a){let t=await a.request({method:"eth_blobBaseFee"});return BigInt(t)}mi();Oe();async function s_(a,{blockHash:t,blockNumber:e,blockTag:i="latest"}={}){let n=e!==void 0?ye(e):void 0,r;return t?r=await a.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):r=await a.request({method:"eth_getBlockTransactionCountByNumber",params:[n||i]}),Bt(r)}Oe();async function l_(a,{address:t,blockNumber:e,blockTag:i="latest"}){let n=e!==void 0?ye(e):void 0,r=await a.request({method:"eth_getCode",params:[t,n||i]});if(r!=="0x")return r}Oe();function c_(a){return{baseFeePerGas:a.baseFeePerGas.map(t=>BigInt(t)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(t=>t.map(e=>BigInt(e)))}}async function u_(a,{blockCount:t,blockNumber:e,blockTag:i="latest",rewardPercentiles:n}){let r=e?ye(e):void 0,o=await a.request({method:"eth_feeHistory",params:[ye(t),r||i,n]});return c_(o)}async function p_(a,{filter:t}){let e=t.strict??!1,n=(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(r=>jt(r));return t.abi?Vr({abi:t.abi,logs:n,strict:e}):n}Oe();function Za(a){return{formatters:void 0,fees:void 0,serializers:void 0,...a}}var m_=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,d_=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;It();vn();Oa();Aa();Oe();xn();Ha();Oe();Na();function h_(a){let{domain:t={},message:e,primaryType:i}=a,n={EIP712Domain:Lu({domain:t}),...a.types};vu({domain:t,message:e,primaryType:i,types:n});let r=["0x1901"];return t&&r.push(Sw({domain:t,types:n})),i!=="EIP712Domain"&&r.push(f_({data:e,primaryType:i,types:n})),ft(Gt(r))}function Sw({domain:a,types:t}){return f_({data:a,primaryType:"EIP712Domain",types:t})}function f_({data:a,primaryType:t,types:e}){let i=y_({data:a,primaryType:t,types:e});return ft(i)}function y_({data:a,primaryType:t,types:e}){let i=[{type:"bytes32"}],n=[Cw({primaryType:t,types:e})];for(let r of e[t]){let[o,s]=g_({types:e,name:r.name,type:r.type,value:a[r.name]});i.push(o),n.push(s)}return Ci(i,n)}function Cw({primaryType:a,types:t}){let e=tt(kw({primaryType:a,types:t}));return ft(e)}function kw({primaryType:a,types:t}){let e="",i=b_({primaryType:a,types:t});i.delete(a);let n=[a,...Array.from(i).sort()];for(let r of n)e+=`${r}(${t[r].map(({name:o,type:s})=>`${s} ${o}`).join(",")})`;return e}function b_({primaryType:a,types:t},e=new Set){let n=a.match(/^\w*/u)?.[0];if(e.has(n)||t[n]===void 0)return e;e.add(n);for(let r of t[n])b_({primaryType:r.type,types:t},e);return e}function g_({types:a,name:t,type:e,value:i}){if(a[e]!==void 0)return[{type:"bytes32"},ft(y_({data:i,primaryType:e,types:a}))];if(e==="bytes")return i=`0x${(i.length%2?"0":"")+i.slice(2)}`,[{type:"bytes32"},ft(i)];if(e==="string")return[{type:"bytes32"},ft(tt(i))];if(e.lastIndexOf("]")===e.length-1){let n=e.slice(0,e.lastIndexOf("[")),r=i.map(o=>g_({name:t,type:n,types:a,value:o}));return[{type:"bytes32"},ft(Ci(r.map(([o])=>o),r.map(([,o])=>o)))]}return[{type:e},i]}function vu(a){let{domain:t,message:e,primaryType:i,types:n}=a,r=(o,s)=>{for(let l of o){let{name:c,type:u}=l,m=s[c],g=u.match(d_);if(g&&(typeof m=="number"||typeof m=="bigint")){let[v,E,P]=g;ye(m,{signed:E==="int",size:parseInt(P)/8})}if(u==="address"&&typeof m=="string"&&!Et(m))throw new Pt({address:m});let x=u.match(m_);if(x){let[v,E]=x;if(E&&Je(m)!==parseInt(E))throw new Ao({expectedSize:parseInt(E),givenSize:Je(m)})}let w=n[u];w&&r(w,m)}};if(n.EIP712Domain&&t&&r(n.EIP712Domain,t),i!=="EIP712Domain"){let o=n[i];r(o,e)}}function Lu({domain:a}){return[typeof a?.name=="string"&&{name:"name",type:"string"},a?.version&&{name:"version",type:"string"},typeof a?.chainId=="number"&&{name:"chainId",type:"uint256"},a?.verifyingContract&&{name:"verifyingContract",type:"address"},a?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}It();Ha();xn();var Ub="/docs/contract/encodeDeployData";function is(a){let{abi:t,args:e,bytecode:i}=a;if(!e||e.length===0)return i;let n=t.find(o=>"type"in o&&o.type==="constructor");if(!n)throw new Io({docsPath:Ub});if(!("inputs"in n))throw new Qn({docsPath:Ub});if(!n.inputs||n.inputs.length===0)throw new Qn({docsPath:Ub});let r=Ci(n.inputs,e);return zo([i,r])}wi();mi();var Aw={"0x0":"reverted","0x1":"success"};function v_(a){let t={...a,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,contractAddress:a.contractAddress?a.contractAddress:null,cumulativeGasUsed:a.cumulativeGasUsed?BigInt(a.cumulativeGasUsed):null,effectiveGasPrice:a.effectiveGasPrice?BigInt(a.effectiveGasPrice):null,gasUsed:a.gasUsed?BigInt(a.gasUsed):null,logs:a.logs?a.logs.map(e=>jt(e)):null,to:a.to?a.to:null,transactionIndex:a.transactionIndex?Bt(a.transactionIndex):null,status:a.status?Aw[a.status]:null,type:a.type?Cb[a.type]||a.type:null};return a.blobGasPrice&&(t.blobGasPrice=BigInt(a.blobGasPrice)),a.blobGasUsed&&(t.blobGasUsed=BigInt(a.blobGasUsed)),t}Oe();mi();var w_=`Ethereum Signed Message:
`;Ha();Ti();Na();function Fb(a,t){let e=(()=>typeof a=="string"?Qt(a):a.raw instanceof Uint8Array?a.raw:ni(a.raw))(),i=Qt(`${w_}${e.length}`);return ft(Gt([i,e]),t)}function as(a,t){let[e,i="0"]=a.split("."),n=e.startsWith("-");if(n&&(e=e.slice(1)),i=i.replace(/(0+)$/,""),t===0)Math.round(+`.${i}`)===1&&(e=`${BigInt(e)+1n}`),i="";else if(i.length>t){let[r,o,s]=[i.slice(0,t-1),i.slice(t-1,t),i.slice(t)],l=Math.round(+`${o}.${s}`);l>9?i=`${BigInt(r)+BigInt(1)}0`.padStart(r.length+1,"0"):i=`${r}${l}`,i.length>t&&(i=i.slice(1),e=`${BigInt(e)+1n}`),i=i.slice(0,t)}else i=i.padEnd(t,"0");return BigInt(`${n?"-":""}${e}${i}`)}Mc();function $r(a,t="wei"){return as(a,Dc[t])}function Rw(a){return a.map(t=>({...t,value:BigInt(t.value)}))}function I_(a){return{...a,balance:a.balance?BigInt(a.balance):void 0,nonce:a.nonce?Bt(a.nonce):void 0,storageProof:a.storageProof?Rw(a.storageProof):void 0}}async function E_(a,{address:t,blockNumber:e,blockTag:i,storageKeys:n}){let r=i??"latest",o=e!==void 0?ye(e):void 0,s=await a.request({method:"eth_getProof",params:[t,n,o||r]});return I_(s)}Oe();async function T_(a,{address:t,blockNumber:e,blockTag:i="latest",slot:n}){let r=e!==void 0?ye(e):void 0;return await a.request({method:"eth_getStorageAt",params:[t,n,r||i]})}la();Oe();async function Xr(a,{blockHash:t,blockNumber:e,blockTag:i,hash:n,index:r}){let o=i||"latest",s=e!==void 0?ye(e):void 0,l=null;if(n?l=await a.request({method:"eth_getTransactionByHash",params:[n]}):t?l=await a.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,ye(r)]}):(s||o)&&(l=await a.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||o,ye(r)]})),!l)throw new sr({blockHash:t,blockNumber:e,blockTag:o,hash:n,index:r});return(a.chain?.formatters?.transaction?.format||Kc)(l)}async function S_(a,{hash:t,transactionReceipt:e}){let[i,n]=await Promise.all([ce(a,Ki,"getBlockNumber")({}),t?ce(a,Xr,"getBlockNumber")({hash:t}):void 0]),r=e?.blockNumber||n?.blockNumber;return r?i-r+1n:0n}la();async function ns(a,{hash:t}){let e=await a.request({method:"eth_getTransactionReceipt",params:[t]});if(!e)throw new lr({hash:t});return(a.chain?.formatters?.transactionReceipt?.format||v_)(e)}An();It();qe();Fa();kn();sa();Mn();async function C_(a,t){let{allowFailure:e=!0,batchSize:i,blockNumber:n,blockTag:r,multicallAddress:o,stateOverride:s}=t,l=t.contracts,c=i??(typeof a.batch?.multicall=="object"&&a.batch.multicall.batchSize||1024),u=o;if(!u){if(!a.chain)throw new Error("client chain not configured. multicallAddress is required.");u=fi({blockNumber:n,chain:a.chain,contract:"multicall3"})}let m=[[]],g=0,x=0;for(let E=0;E<l.length;E++){let{abi:P,address:G,args:q,functionName:Q}=l[E];try{let Y=Rt({abi:P,args:q,functionName:Q});x+=(Y.length-2)/2,c>0&&x>c&&m[g].length>0&&(g++,x=(Y.length-2)/2,m[g]=[]),m[g]=[...m[g],{allowFailure:!0,callData:Y,target:G}]}catch(Y){let O=pa(Y,{abi:P,address:G,args:q,docsPath:"/docs/contract/multicall",functionName:Q});if(!e)throw O;m[g]=[...m[g],{allowFailure:!0,callData:"0x",target:G}]}}let w=await Promise.allSettled(m.map(E=>ce(a,qt,"readContract")({abi:Qo,address:u,args:[E],blockNumber:n,blockTag:r,functionName:"aggregate3",stateOverride:s}))),v=[];for(let E=0;E<w.length;E++){let P=w[E];if(P.status==="rejected"){if(!e)throw P.reason;for(let q=0;q<m[E].length;q++)v.push({status:"failure",error:P.reason,result:void 0});continue}let G=P.value;for(let q=0;q<G.length;q++){let{returnData:Q,success:Y}=G[q],{callData:O}=m[E][q],{abi:J,address:de,functionName:He,args:De}=l[v.length];try{if(O==="0x")throw new Ii;if(!Y)throw new ca({data:Q});let Ae=hi({abi:J,args:De,data:Q,functionName:He});v.push(e?{result:Ae,status:"success"}:Ae)}catch(Ae){let dt=pa(Ae,{abi:J,address:de,args:De,docsPath:"/docs/contract/multicall",functionName:He});if(!e)throw dt;v.push({error:dt,result:void 0,status:"failure"})}}}if(v.length!==l.length)throw new F("multicall results mismatch");return v}An();var k_="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";Fa();Zr();Ti();wi();function B_(a,t){let e=lt(a)?ni(a):a,i=lt(t)?ni(t):t;return jb(e,i)}zr();async function Tu(a,{address:t,hash:e,signature:i,...n}){let r=lt(i)?i:tt(i);try{let{data:o}=await ce(a,qi,"call")({data:is({abi:xL,args:[t,e,r],bytecode:k_}),...n});return B_(o??"0x0","0x1")}catch(o){if(o instanceof En)return!1;throw o}}async function P_(a,{address:t,message:e,signature:i,...n}){let r=Fb(e);return Tu(a,{address:t,hash:r,signature:i,...n})}async function R_(a,t){let{address:e,signature:i,message:n,primaryType:r,types:o,domain:s,...l}=t,c=h_({message:n,primaryType:r,types:o,domain:s});return Tu(a,{address:e,hash:c,signature:i,...l})}la();oi();mi();oi();function Su(a,{emitOnBegin:t=!1,emitMissed:e=!1,onBlockNumber:i,onError:n,poll:r,pollingInterval:o=a.pollingInterval}){let s=typeof r<"u"?r:a.transport.type!=="webSocket",l;return s?(()=>{let m=Ke(["watchBlockNumber",a.uid,t,e,o]);return Jt(m,{onBlockNumber:i,onError:n},g=>Wi(async()=>{try{let x=await ce(a,Ki,"getBlockNumber")({cacheTime:0});if(l){if(x===l)return;if(x-l>1&&e)for(let w=l+1n;w<x;w++)g.onBlockNumber(w,l),l=w}(!l||x>l)&&(g.onBlockNumber(x,l),l=x)}catch(x){g.onError?.(x)}},{emitOnBegin:t,interval:o}))})():(()=>{let m=Ke(["watchBlockNumber",a.uid,t,e]);return Jt(m,{onBlockNumber:i,onError:n},g=>{let x=!0,w=()=>x=!1;return(async()=>{try{let{unsubscribe:v}=await a.transport.subscribe({params:["newHeads"],onData(E){if(!x)return;let P=Ma(E.result?.number);g.onBlockNumber(P,l),l=P},onError(E){g.onError?.(E)}});w=v,x||w()}catch(v){n?.(v)}})(),()=>w()})})()}async function N_(a,{confirmations:t=1,hash:e,onReplaced:i,pollingInterval:n=a.pollingInterval,retryCount:r=6,retryDelay:o=({count:l})=>~~(1<<l)*200,timeout:s}){let l=Ke(["waitForTransactionReceipt",a.uid,e]),c,u,m,g=!1;return new Promise((x,w)=>{s&&setTimeout(()=>w(new Vc({hash:e})),s);let v=Jt(l,{onReplaced:i,resolve:x,reject:w},E=>{let P=ce(a,Su,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:n,async onBlockNumber(G){if(g)return;let q=G,Q=Y=>{P(),Y(),v()};try{if(m){if(t>1&&(!m.blockNumber||q-m.blockNumber+1n<t))return;Q(()=>E.resolve(m));return}if(c||(g=!0,await es(async()=>{c=await ce(a,Xr,"getTransaction")({hash:e}),c.blockNumber&&(q=c.blockNumber)},{delay:o,retryCount:r}),g=!1),m=await ce(a,ns,"getTransactionReceipt")({hash:e}),t>1&&(!m.blockNumber||q-m.blockNumber+1n<t))return;Q(()=>E.resolve(m))}catch(Y){if(Y instanceof sr||Y instanceof lr){if(!c){g=!1;return}try{u=c,g=!0;let O=await es(()=>ce(a,Zt,"getBlock")({blockNumber:q,includeTransactions:!0}),{delay:o,retryCount:r,shouldRetry:({error:He})=>He instanceof Or});g=!1;let J=O.transactions.find(({from:He,nonce:De})=>He===u.from&&De===u.nonce);if(!J||(m=await ce(a,ns,"getTransactionReceipt")({hash:J.hash}),t>1&&(!m.blockNumber||q-m.blockNumber+1n<t)))return;let de="replaced";J.to===u.to&&J.value===u.value?de="repriced":J.from===J.to&&J.value===0n&&(de="cancelled"),Q(()=>{E.onReplaced?.({reason:de,replacedTransaction:u,transaction:J,transactionReceipt:m}),E.resolve(m)})}catch(O){Q(()=>E.reject(O))}}else Q(()=>E.reject(Y))}}})})})}oi();function O_(a,{blockTag:t="latest",emitMissed:e=!1,emitOnBegin:i=!1,onBlock:n,onError:r,includeTransactions:o,poll:s,pollingInterval:l=a.pollingInterval}){let c=typeof s<"u"?s:a.transport.type!=="webSocket",u=o??!1,m;return c?(()=>{let w=Ke(["watchBlocks",a.uid,t,e,i,u,l]);return Jt(w,{onBlock:n,onError:r},v=>Wi(async()=>{try{let E=await ce(a,Zt,"getBlock")({blockTag:t,includeTransactions:u});if(E.number&&m?.number){if(E.number===m.number)return;if(E.number-m.number>1&&e)for(let P=m?.number+1n;P<E.number;P++){let G=await ce(a,Zt,"getBlock")({blockNumber:P,includeTransactions:u});v.onBlock(G,m),m=G}}(!m?.number||t==="pending"&&!E?.number||E.number&&E.number>m.number)&&(v.onBlock(E,m),m=E)}catch(E){v.onError?.(E)}},{emitOnBegin:i,interval:l}))})():(()=>{let w=!0,v=()=>w=!1;return(async()=>{try{let{unsubscribe:E}=await a.transport.subscribe({params:["newHeads"],onData(P){if(!w)return;let q=(a.chain?.formatters?.block?.format||Yc)(P.result);n(q,m),m=q},onError(P){r?.(P)}});v=E,w||v()}catch(E){r?.(E)}})(),()=>v()})()}oi();It();$o();function H_(a,{address:t,args:e,batch:i=!0,event:n,events:r,onError:o,onLogs:s,poll:l,pollingInterval:c=a.pollingInterval,strict:u}){let m=typeof l<"u"?l:a.transport.type!=="webSocket",g=u??!1;return m?(()=>{let v=Ke(["watchEvent",t,e,i,a.uid,n,c]);return Jt(v,{onLogs:s,onError:o},E=>{let P,G,q=!1,Q=Wi(async()=>{if(!q){try{G=await ce(a,bu,"createEventFilter")({address:t,args:e,event:n,events:r,strict:g})}catch{}q=!0;return}try{let Y;if(G)Y=await ce(a,Ya,"getFilterChanges")({filter:G});else{let O=await ce(a,Ki,"getBlockNumber")({});P&&P!==O?Y=await ce(a,Fr,"getLogs")({address:t,args:e,event:n,events:r,fromBlock:P+1n,toBlock:O}):Y=[],P=O}if(Y.length===0)return;if(i)E.onLogs(Y);else for(let O of Y)E.onLogs([O])}catch(Y){G&&Y instanceof Vi&&(q=!1),E.onError?.(Y)}},{emitOnBegin:!0,interval:c});return async()=>{G&&await ce(a,$a,"uninstallFilter")({filter:G}),Q()}})})():(()=>{let v=!0,E=()=>v=!1;return(async()=>{try{let P=r??(n?[n]:void 0),G=[];P&&(G=[P.flatMap(Q=>ki({abi:[Q],eventName:Q.name,args:e}))],n&&(G=G[0]));let{unsubscribe:q}=await a.transport.subscribe({params:["logs",{address:t,topics:G}],onData(Q){if(!v)return;let Y=Q.result;try{let{eventName:O,args:J}=Cn({abi:P??[],data:Y.data,topics:Y.topics,strict:g}),de=jt(Y,{args:J,eventName:O});s([de])}catch(O){let J,de;if(O instanceof pi||O instanceof Ei){if(u)return;J=O.abiItem.name,de=O.abiItem.inputs?.some(De=>!("name"in De&&De.name))}let He=jt(Y,{args:de?[]:{},eventName:J});s([He])}},onError(Q){o?.(Q)}});E=q,v||E()}catch(P){o?.(P)}})(),()=>E()})()}oi();function U_(a,{batch:t=!0,onError:e,onTransactions:i,poll:n,pollingInterval:r=a.pollingInterval}){return(typeof n<"u"?n:a.transport.type!=="webSocket")?(()=>{let c=Ke(["watchPendingTransactions",a.uid,t,r]);return Jt(c,{onTransactions:i,onError:e},u=>{let m,g=Wi(async()=>{try{if(!m)try{m=await ce(a,gu,"createPendingTransactionFilter")({});return}catch(w){throw g(),w}let x=await ce(a,Ya,"getFilterChanges")({filter:m});if(x.length===0)return;if(t)u.onTransactions(x);else for(let w of x)u.onTransactions([w])}catch(x){u.onError?.(x)}},{emitOnBegin:!0,interval:r});return async()=>{m&&await ce(a,$a,"uninstallFilter")({filter:m}),g()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{let{unsubscribe:m}=await a.transport.subscribe({params:["newPendingTransactions"],onData(g){if(!c)return;let x=g.result;i([x])},onError(g){e?.(g)}});u=m,c||u()}catch(m){e?.(m)}})(),()=>u()})()}function V_(a){return{call:t=>qi(a,t),createBlockFilter:()=>n_(a),createContractEventFilter:t=>Ec(a,t),createEventFilter:t=>bu(a,t),createPendingTransactionFilter:()=>gu(a),estimateContractGas:t=>gL(a,t),estimateGas:t=>Ur(a,t),getBalance:t=>r_(a,t),getBlobBaseFee:()=>o_(a),getBlock:t=>Zt(a,t),getBlockNumber:t=>Ki(a,t),getBlockTransactionCount:t=>s_(a,t),getBytecode:t=>l_(a,t),getChainId:()=>ji(a),getContractEvents:t=>Qc(a,t),getEnsAddress:t=>$L(a,t),getEnsAvatar:t=>t_(a,t),getEnsName:t=>i_(a,t),getEnsResolver:t=>a_(a,t),getEnsText:t=>yu(a,t),getFeeHistory:t=>u_(a,t),estimateFeesPerGas:t=>yL(a,t),getFilterChanges:t=>Ya(a,t),getFilterLogs:t=>p_(a,t),getGasPrice:()=>Hr(a),getLogs:t=>Fr(a,t),getProof:t=>E_(a,t),estimateMaxPriorityFeePerGas:t=>fL(a,t),getStorageAt:t=>T_(a,t),getTransaction:t=>Xr(a,t),getTransactionConfirmations:t=>S_(a,t),getTransactionCount:t=>Xc(a,t),getTransactionReceipt:t=>ns(a,t),multicall:t=>C_(a,t),prepareTransactionRequest:t=>Ka(a,t),readContract:t=>qt(a,t),sendRawTransaction:t=>Gr(a,t),simulateContract:t=>RL(a,t),verifyMessage:t=>P_(a,t),verifyTypedData:t=>R_(a,t),uninstallFilter:t=>$a(a,t),waitForTransactionReceipt:t=>N_(a,t),watchBlocks:t=>O_(a,t),watchBlockNumber:t=>Su(a,t),watchContractEvent:t=>UL(a,t),watchEvent:t=>H_(a,t),watchPendingTransactions:t=>U_(a,t)}}function os(a){let{key:t="public",name:e="Public Client"}=a;return cu({...a,key:t,name:e,type:"publicClient"}).extend(V_)}function F_(a,t){let{abi:e,args:i,bytecode:n,...r}=t,o=is({abi:e,args:i,bytecode:n});return jr(a,{...r,data:o})}Fo();async function z_(a){return a.account?.type==="local"?[a.account.address]:(await a.request({method:"eth_accounts"})).map(e=>Ln(e))}async function G_(a){return await a.request({method:"wallet_getPermissions"})}Fo();async function j_(a){return(await a.request({method:"eth_requestAccounts"},{retryCount:0})).map(e=>Wv(e))}async function q_(a,t){return a.request({method:"wallet_requestPermissions",params:[t]},{retryCount:0})}ri();Oe();async function W_(a,{account:t=a.account,message:e}){if(!t)throw new Gi({docsPath:"/docs/actions/wallet/signMessage"});let i=it(t);if(i.type==="local")return i.signMessage({message:e});let n=(()=>typeof e=="string"?gn(e):e.raw instanceof Uint8Array?tt(e.raw):e.raw)();return a.request({method:"personal_sign",params:[n,i.address]},{retryCount:0})}ri();Oe();Xo();Nr();async function K_(a,t){let{account:e=a.account,chain:i=a.chain,...n}=t;if(!e)throw new Gi({docsPath:"/docs/actions/wallet/signTransaction"});let r=it(e);zi({account:r,...t});let o=await ce(a,ji,"getChainId")({});i!==null&&ou({currentChainId:o,chain:i});let l=(i?.formatters||a.chain?.formatters)?.transactionRequest?.format||qa;return r.type==="local"?r.signTransaction({...n,chainId:o},{serializer:a.chain?.serializers?.transaction}):await a.request({method:"eth_signTransaction",params:[{...l(n),chainId:ye(o),from:r.address}]},{retryCount:0})}ri();wi();oi();async function Y_(a,t){let{account:e=a.account,domain:i,message:n,primaryType:r}=t;if(!e)throw new Gi({docsPath:"/docs/actions/wallet/signTypedData"});let o=it(e),s={EIP712Domain:Lu({domain:i}),...t.types};if(vu({domain:i,message:n,primaryType:r,types:s}),o.type==="local")return o.signTypedData({domain:i,message:n,primaryType:r,types:s});let l=Ke({domain:i??{},message:n,primaryType:r,types:s},(c,u)=>lt(u)?u.toLowerCase():u);return a.request({method:"eth_signTypedData_v4",params:[o.address,l]},{retryCount:0})}Oe();async function $_(a,{id:t}){await a.request({method:"wallet_switchEthereumChain",params:[{chainId:ye(t)}]},{retryCount:0})}async function X_(a,t){return await a.request({method:"wallet_watchAsset",params:t},{retryCount:0})}function Q_(a){return{addChain:t=>zL(a,t),deployContract:t=>F_(a,t),getAddresses:()=>z_(a),getChainId:()=>ji(a),getPermissions:()=>G_(a),prepareTransactionRequest:t=>Ka(a,t),requestAddresses:()=>j_(a),requestPermissions:t=>q_(a,t),sendRawTransaction:t=>Gr(a,t),sendTransaction:t=>jr(a,t),signMessage:t=>W_(a,t),signTransaction:t=>K_(a,t),signTypedData:t=>Y_(a,t),switchChain:t=>$_(a,t),watchAsset:t=>X_(a,t),writeContract:t=>FL(a,t)}}function Jr(a){let{key:t="wallet",name:e="Wallet Client",transport:i}=a;return cu({...a,key:t,name:e,transport:i,type:"walletClient"}).extend(Q_)}It();qe();Fa();Oe();Bc();var Du=class{constructor(){this.coins={};this.needTip=!0}};var bi=(O=>(O[O.MAINNET=1]="MAINNET",O[O.TESTNET_RINKEBY=4]="TESTNET_RINKEBY",O[O.ARBITRUM=42161]="ARBITRUM",O[O.ARBITRUM_TESTNET=421611]="ARBITRUM_TESTNET",O[O.AVALANCHE=43114]="AVALANCHE",O[O.AVALANCHE_TESTNET=43113]="AVALANCHE_TESTNET",O[O.POLYGON=137]="POLYGON",O[O.POLYGON_TESTNET=80001]="POLYGON_TESTNET",O[O.FANTOM=250]="FANTOM",O[O.FANTOM_TESTNET=4002]="FANTOM_TESTNET",O[O.OPTIMISM=10]="OPTIMISM",O[O.OPTIMISM_TESTNET=69]="OPTIMISM_TESTNET",O[O.BOBA=288]="BOBA",O[O.BOBA_TESTNET=28]="BOBA_TESTNET",O[O.ESC=20]="ESC",O[O.HECO=128]="HECO",O[O.BSC=56]="BSC",O[O.BSC_TESTNET=97]="BSC_TESTNET",O[O.MATCH=9001]="MATCH",O[O.MATCH_TESTNET=9e3]="MATCH_TESTNET",O[O.CC=1331]="CC",O[O.SEPOLIA=11155111]="SEPOLIA",O))(bi||{});var ot={id:9001,name:"MATCH",network:"MATCH",iconUrl:"",iconBackground:"#fff",nativeCurrency:{decimals:18,name:"MATCH",symbol:"MATCH"},rpcUrls:{default:{http:["https://rpc.matchscan.io"]},public:{http:["https://rpc.matchscan.io"]}},blockExplorers:{default:{name:"matchscan",url:"https://lisbon.matchscan.io"},etherscan:{name:"matchscan",url:"https://lisbon.matchscan.io"}},testnet:!1};var M8={9001:"0x3f76562685E9Cd18ba88C062bBC5999D78275734",56:"0x837656c3f5858692cCdce13BA66e09d2685073df",97:"0x6f4DceCEe81bfB85872BEaBC44C303b7c2f6c108"},B8={9001:"0x96397347Ea2beE29713Bc48749eB277D6A36A407",56:"0x837656c3f5858692cCdce13BA66e09d2685073df",97:"0x6f4DceCEe81bfB85872BEaBC44C303b7c2f6c108"},P8={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9",56:"0x55d398326f99059ff775485246999027b3197955",97:"0x44004827f2F72566E12884A38f63f72F2a5143ea"},R8={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9"},N8={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9"},O8={9001:"0x2418F7F0486deBc9270E16126F36526925EDAAE4"},ag={97:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab",9001:"0x84d225321122E69406B198e3A9B82Dc1BdF897e6"},f0={9001:"0x945103b2fEa1EAc6cea4d25e9BBaA5284d128b29"},H8={97:"0xfe261946218873F6eaec714BF757493256817534",9001:"0xfB51603B7863267a19736B070Bf9Cb2e5Fa256AF"},U8={9001:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab"},ss={97:"0x85438A19C4E1B399d54Fa7F49888430A3C19707b",9001:"0xee3b4CaFc7fa18c0Ef0B9208Bab702f37A619BE0"},ng={9001:"0xCd970FEA9838B28F67B7b7ab00Bf61Cdd33b26CE"},rg={97:"0xfe261946218873F6eaec714BF757493256817534",9001:"0xE3a61771Ce3CA772D446e687AFd52DC28eC9cCb8"},y0={9001:"0x45712193316F963A949539605b22AA4242BCc9E5"};var Yi=Za({id:56,name:"BNB Smart Chain",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{default:{name:"BscScan",url:"https://bscscan.com",apiUrl:"https://api.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}});var Tt=Za({id:97,name:"Binance Smart Chain Testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]}},blockExplorers:{default:{name:"BscScan",url:"https://testnet.bscscan.com",apiUrl:"https://testnet.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0});var Ai=Za({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var ls=Za({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",blockCreated:5317080}},testnet:!0});var eo=class a{constructor(){this.create_contract=null;this.edit_account=null;this.account_contract=null;this.tokenId=0}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"}async getAccountVoFromServer(){let t=await A.requestPost("cybertron-sys-api/api/v1/account/find",{address:j.instance.walletAddress},!1,!1);if(t){let e=new Du;return Object.assign(e,t),console.log("info========"+JSON.stringify(e)),e}return t}async createAcccount(t,e,i,n){try{var r;let c;$.vType==2?(r=ot.id,c=f0[r]):$.vType==1?(r=ot.id,c=ag[r]):(r=Tt.id,c=ag[r]);let u=await j.instance.walletClient.getChainId();if(r!==u){var o=await j.instance.switchChain(r);if(!o){me.instance.hideLoading(),console.log("切换失败，请手动切换");return}}if(!c)return me.instance.hideLoading(),B.instance.notice(d.instance.getLanguage(1173,u)),!1;var s=await j.instance.walletClient.writeContract({account:j.instance.walletAddress,address:c,abi:le.CREATE_ACCOUNT_ABI,functionName:"register",args:[t,n,e,i]});console.log("============"+s);let m=await j.instance.publicClient.waitForTransactionReceipt({hash:s});return console.log(`Tx with hash: ${s}`,m),m&&m.status=="success"?(console.log(`Tx successful with hash: ${s}`),s):(me.instance.hideLoading(),be.TransactionErrorTip(),!1)}catch(c){me.instance.hideLoading();var l=c.shortMessage;if(l&&l.indexOf("does not match")!=-1&&(l=d.instance.getLanguage(1118)),console.log(l),B.instance.notice(l),c instanceof F){let u=c.walk(m=>m instanceof At);if(u instanceof At){let m=u.data?.errorName??"";console.log("============errorName: "+m)}}return null}}async updateProfile(t,e,i){var n=L.instance.playerDto.sex,r=L.instance.playerDto;let o=await A.requestPost("wxgame/player/changeInfo",{name:t,sex:n,icon:e,country:i});return o?(r.icon=o.icon,r.country=o.country,r.name=o.name,r.sex=o.sex,r):null}async getTokenId(){return this.tokenId?this.tokenId:(this.tokenId=await this.account_contract.methods.tokenOfOwnerByIndex(j.instance.walletAddress,0).call(),this.tokenId=parseInt(this.tokenId+""),this.tokenId)}};var St=class{constructor(){}};St.UPDATE_LOCAL_WALLET_LIST_EVENT="WalletEvent:UPDATE_LOCAL_WALLET_LIST_EVENT",St.TRANSFER_LOCAL_WALLET_EVENT="WalletEvent:TRANSFER_LOCAL_WALLET_EVENT";var cs=class{};var Di=class{};var Me=class{};Me.ACTION_CREATE=1,Me.ACTION_JOIN=2,Me.ACTION_SIGNUP=3,Me.ACTION_WATCH=4,Me.STATE_WAIT=0,Me.STATE_SIGNUP=2,Me.STATE_GROUPED=3,Me.STATE_START=1;var Xe=class a{constructor(){this.inMinWaiting=!1}openMinView(){this.enterRoomSpr||(this.enterRoomSpr=this.enterRoomPrefab.create()),this.enterRoomSpr.x=Laya.stage.width>>1,this.enterRoomSpr.y=0,this.enterRoomSpr.zOrder=1e3,Laya.stage.addChild(this.enterRoomSpr),this.inMinWaiting=!0}closeMinView(){this.enterRoomSpr&&this.enterRoomSpr.removeSelf(),this.inMinWaiting=!1}openMaxView(){this.closeMinView();var t=!0;H.intance.openModule(f.EnterRoomView,t)}openEnterView(){if(this.inMinWaiting==!0){this.closeMinView();var t=!0;H.intance.openModule(f.EnterRoomView,t)}else H.intance.openModule(f.EnterRoomView)}static get instance(){return a._instance==null&&(a._instance=new a),a._instance}init(){this.closeMinView(),this.initRoomData(),Laya.timer.loop(1500,this,this.onRefreshRoom)}onRefreshRoomImditely(){Laya.timer.clear(this,this.onRefreshRoom),this.onRefreshRoom(),Laya.timer.loop(1500,this,this.onRefreshRoom)}updateBattleCD(){z.instance.coolDownTime=Math.round(z.instance.roomDto.joinCd/1e3),y.intance.event(h.EVENT_UPDATE_MATCH_ROOM),z.instance.coolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):this.onGoMatch()}onSetCoolTime(){z.instance.coolDownTime>=0?z.instance.coolDownTime--:this.onGoMatch()}async onGoMatch(){Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.clear(this,this.onRefreshRoom);let t=await A.requestPost("wxgame/room/info",{roomId:z.instance.roomDto.roomId});var e=t.roomDto;e.joinCd==0?t.roomDto.enterGame==1?(Laya.timer.clearAll(this),yt.instance.initSocket(),this.closeMinView()):(this.close(),y.intance.event(h.EVENT_ENTER_MATCH_ROOM,!0),be.commTipWithYes(pe.instance.get(25))):(z.instance.roomDto=e,this.updateBattleCD())}initRoomData(){var t=z.instance.roomDto.members.length,e=z.instance.currArenaItem.numberMax;if(z.instance.roomDto.state==Me.STATE_START&&t>=e){this.onGoMatch();return}this.updateBattleCD()}async onRefreshRoom(){let t=await A.requestPost("wxgame/room/info",{roomId:z.instance.roomDto.roomId});z.instance.roomDto=t.roomDto,this.initRoomData(),z.instance.setMatchRes()}close(){Laya.timer.clearAll(this),y.intance.event(h.EVENT_CLOSE_MODULE,f.EnterRoomView),this.closeMinView()}async onCreateAndJoinWithPwd(t,e,i){if(t!=Me.ACTION_SIGNUP){var n=R.intance.m_dicNodes.get(e.nodeId);if(n&&n.dT>800&&$.Debug<2){B.instance.notice(d.instance.getLanguage(1306));return}}let r=!1;var o=R.intance.m_dicArenaDic.get(e.arenaId),s=o.item[0];let l=L.instance.playerDto;if(o.type==3){if(!l.newFightHeroPk){be.heroNotEnought(1353);return}}else if(l.fightHeroPk){let Y=L.instance.m_heroData.heroVoDic.get(l.fightHeroPk);if(Y){if(r=Y.state==2,t!=Me.ACTION_SIGNUP&&Y.state==1){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1176),N.YES,null);return}}else if(t!=Me.ACTION_SIGNUP){be.heroNotEnought();return}}else if(t!=Me.ACTION_SIGNUP){be.heroNotEnought();return}if(o.item&&o.item.length>1){var s=o.item[0],c=o.item[1];t==Me.ACTION_SIGNUP&&(c=c*2);var u=L.instance.m_packageData.getCountById(s);let O=R.intance.getArenaTypesInSubByType(o.type).heroType;var m=U.instance.arenaType;if(r){var g=await A.requestPost("wxgame/lease/heroInfo",{heroPk:l.fightHeroPk});if(g.info.leaseType==1){if(g.info.remainTicketCount<=0&&m==1){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1175),N.YES,null);return}if(O.indexOf(g.info.leaseType)<0){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(127),N.YES,null);return}if(s!==g.info.ticketId){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1178),N.YES,null);return}}else if(g.info.leaseType==2&&O.indexOf(g.info.leaseType)<0){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1299),N.YES,null);return}}if(console.log("currNum: "+u,"needNum: "+c,"itemId: "+s),t!=Me.ACTION_SIGNUP&&u<c&&(!r||g.info.leaseType==2)){be.titickNotEnought(s);return}}let x;if(t==Me.ACTION_CREATE)x=await A.requestPost("wxgame/room/create",{nodeId:e.nodeId,password:i,arenaId:e.arenaId,roomName:e.roomName,customName:e.customName});else if(t==Me.ACTION_JOIN)x=await A.requestPost("wxgame/room/join",{roomId:e.roomId,pass:i});else if(t==Me.ACTION_SIGNUP&&(x=await A.requestPost("wxgame/room/joinGroup",{roomId:e.roomId}),x)){B.instance.notice(d.instance.getLanguage(1373)),this.onRefreshRoomImditely();return}if(z.instance.roomDto=x.roomDto,x.roomDto){if(a.instance.openEnterView(),t==Me.ACTION_CREATE){var w=o.type,v="";w==1?v="Professional Arena":w==2?v="Airdrop Arena":w==3&&(v="Training Arena");var E=o.lv,P="";E==1?P="Novice":E==2?P="Elite":E==3&&(P="Master");var G=o.coinType,q=R.intance.m_dicItems.get(G),Q=d.instance.getEnglishLanguage(q.name);gtag("event","new_arena",{event_category:v,arena_type:v,coin_type:Q,arena_lv:P})}}else B.instance.notice(d.instance.getLanguage(135))}};var fa=class fa{constructor(t,e){this._lineIndex=0;this._isShow=!1;this._alpha=.6;this.isInit=!1;this._isRelease=!0;this._count=0;this.maxCount=1e3;this.prevX=0;this.prevY=0;this._stage=t,this._isRelease=e,this._actionLineList=[],this._time=new Date().getTime();let i,n,r,o,s=function(u){i=u.stageX,n=u.stageY,r=i,o=n},l=function(u){r=u.stageX,o=u.stageY},c=function(u){let m=Laya.stage.width-(r-i)<160,g=Laya.stage.height-(o-n)<160;m&&g&&ci.debugger&&(Laya.Browser.window.console.log=ci.addConsoleLog,ci.debugger.showOrHide())};Laya.stage.on(Laya.Event.MOUSE_DOWN,this,s),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,l),Laya.stage.on(Laya.Event.MOUSE_UP,this,c)}initDebugView(){if(!this.isInit){this.totalW=Laya.stage.width,this.totalH=Laya.stage.height/2,this.bigContainer=new Laya.Sprite,this.bigContainer.zOrder=2e3,this.bigContainer.name="bigContainerDebug",this.bgContainer=new Laya.Sprite,this._bgSp=new Laya.Sprite,this._bgSp.alpha=this._alpha,this._bgSp.graphics.drawRect(0,0,this.totalW,this.totalH,"#000000"),this._bgSp.mouseEnabled=!1,this._debugInfoTf=new Laya.Text,this._debugInfoTf.color="#ffffff",this._debugInfoTf.width=this.totalW-10,this._debugInfoTf.height=this.totalH-10,this._debugInfoTf.overflow="scroll",this._debugInfoTf.wordWrap=!0;let t="[LOADINFO - DEBUGGER]";this.appendText("加载调试信息 "+t,0,!1),this._closeTf=new Laya.Label,this._closeTf.color="#ff0000",this._closeTf.valign="middle",this._closeTf.width=55,this._closeTf.height=55,this._closeTf.borderColor=fa.DEFAULT_COLOR,this._closeTf.text="关闭",this._autoScrollTf=new Laya.Label,this._autoScrollTf.color="#ff0000",this._autoScrollTf.valign="middle",this._autoScrollTf.width=55,this._autoScrollTf.height=55,this._autoScrollTf.borderColor=fa.DEFAULT_COLOR,this._autoScrollTf.text="自动卷屏",this._bgAlpha0=new Laya.Label,this._bgAlpha0.color="#ff0000",this._bgAlpha0.valign="middle",this._bgAlpha0.width=55,this._bgAlpha0.height=55,this._bgAlpha0.borderColor=fa.DEFAULT_COLOR,this._bgAlpha0.text="背景-",this._bgAlpha1=new Laya.Label,this._bgAlpha1.color="#ff0000",this._bgAlpha1.valign="middle",this._bgAlpha1.width=55,this._bgAlpha1.height=55,this._bgAlpha1.borderColor=fa.DEFAULT_COLOR,this._bgAlpha1.text="背景+",this._clearTf=new Laya.Label,this._clearTf.color="#ff0000",this._clearTf.valign="middle",this._clearTf.width=55,this._clearTf.height=55,this._clearTf.borderColor=fa.DEFAULT_COLOR,this._clearTf.text="清理",this._testTf=new Laya.Label,this._testTf.color="#ff0000",this._testTf.width=55,this._testTf.height=55,this._testTf.borderColor=fa.DEFAULT_COLOR,this._testTf.text="点穿",this.bgContainer.x=5,this.bgContainer.y=5,this._debugInfoTf.x=5,this._debugInfoTf.y=5,this.bgContainer.addChild(this._bgSp),this.bgContainer.addChild(this._debugInfoTf),this._closeTf.x=this.totalW-60,this._closeTf.y=5,this.bgContainer.addChild(this._closeTf),this._autoScrollTf.x=this.totalW-60,this._autoScrollTf.y=105,this.bgContainer.addChild(this._autoScrollTf),this._bgAlpha0.x=this.totalW-60,this._bgAlpha0.y=205,this.bgContainer.addChild(this._bgAlpha0),this._bgAlpha1.x=this.totalW-60,this._bgAlpha1.y=305,this.bgContainer.addChild(this._bgAlpha1),this._clearTf.x=this.totalW-60,this._clearTf.y=405,this.bgContainer.addChild(this._clearTf),this._testTf.x=this.totalW-60,this._testTf.y=505,this.bigContainer.addChild(this.bgContainer),this.bigContainer.addChild(this._testTf),this._autoScroll=!0,this._hide=!0,this._debugInfoTf.on(Laya.Event.MOUSE_DOWN,this,this.startScrollText),this._closeTf.on(Laya.Event.CLICK,this,this.onCloseTfClick),this._autoScrollTf.on(Laya.Event.CLICK,this,this.onAutoScrollTfClick),this._bgAlpha0.on(Laya.Event.CLICK,this,this.onBgAlpha0),this._bgAlpha1.on(Laya.Event.CLICK,this,this.onBgAlpha1),this._clearTf.on(Laya.Event.CLICK,this,this.onClearTfClick),this._testTf.on(Laya.Event.CLICK,this,this.onTestTfClick),this.isInit=!0}}show(){this.initDebugView(),this._stage.addChild(this.bigContainer),this._isShow=!0,this.updateView()}hide(){this.initDebugView(),this.bigContainer.parent&&this.bigContainer.parent.removeChild(this.bigContainer),this._isShow=!1,this.updateView()}showOrHide(){this._isShow=!this._isShow,this._isShow?this.show():this.hide()}appendText(t,e=0,i=!0){if(i){let n=new Date().getTime()-this._time;t+="  ["+(n/1e3).toFixed(3)+"]"}this._actionLineList.push([t+`
`,e]),this._lineIndex>=200&&(this._actionLineList.splice(0,20),this._lineIndex-=20),this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf&&(this._debugInfoTf.text="")),this._isShow&&(this._currentLine=this._actionLineList[this._lineIndex++],this._debugInfoTf&&(this._debugInfoTf.text+=this._currentLine[0]),this._autoScroll&&this._debugInfoTf&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY))}updateView(){if(this._isShow){this._count=0,this._debugInfoTf.text="";let t=this._actionLineList.length;for(this._lineIndex=0;this._lineIndex<t;++this._lineIndex)this._currentLine=this._actionLineList[this._lineIndex],this._debugInfoTf.text+=this._currentLine[0],this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf.text="");this._autoScroll&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY)}else this._debugInfoTf.text=""}onCloseTfClick(t){this.hide()}onAutoScrollTfClick(t){this._autoScroll=!this._autoScroll,this._autoScroll?this._autoScrollTf.text="自动卷屏":this._autoScrollTf.text="手动卷屏"}onBgAlpha0(t){this._alpha-=.1,this._alpha<=0&&(this._alpha=0),this._bgSp.alpha=this._alpha}onBgAlpha1(t){this._alpha+=.1,this._alpha>=1&&(this._alpha=1),this._bgSp.alpha=this._alpha}onClearTfClick(t){this._debugInfoTf.text="",this._actionLineList.length=0,this._lineIndex=0}onTestTfClick(t){this.bgContainer.mouseEnabled=!this.bgContainer.mouseEnabled}set testFun(t){this._testFun=t}get bgSp(){return this._bgSp}startScrollText(t){this.prevX=this._debugInfoTf.mouseX,this.prevY=this._debugInfoTf.mouseY,Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.finishScrollText)}finishScrollText(t){Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.finishScrollText)}scrollText(t){let e=this._debugInfoTf.mouseX,i=this._debugInfoTf.mouseY;this._debugInfoTf.scrollX+=this.prevX-e,this._debugInfoTf.scrollY+=this.prevY-i,this.prevX=e,this.prevY=i}};fa.DEFAULT_COLOR="#ffffff";var Mu=fa;var ci=class a{static Initialize(t,e){a.isRelease=e,this.debugger==null&&(this.debugger=new Mu(t,e))}static log(t,e=0,i=0){var n=be.GetLogTime+" "+t;e&&a.addLog(n,e,i)}static addLog(t,e=0,i=0){this.debugger&&this.debugger.appendText(t,i),console.log(t)}static addConsoleLog(...t){a.debugger&&a.debugger.appendText(t,0)}};var us=class us{constructor(){this.module=0;this.errorCode=0;this.errorMessage=""}protocolId(){return us.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writeString(e.errorMessage),t.writeInt(e.module))}static read(t){if(!t.readBoolean())return null;let e=new us,i=t.readInt();e.errorCode=i;let n=t.readString();e.errorMessage=n;let r=t.readInt();return e.module=r,e}};us.PROTOCOL_ID=101;var og=us,ps=og;var ms=class ms{protocolId(){return ms.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new ms:null}};ms.PROTOCOL_ID=103;var sg=ms,Bu=sg;var ds=class ds{constructor(){this.time=0}protocolId(){return ds.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.time)}static read(t){if(!t.readBoolean())return null;let e=new ds,i=t.readLong();return e.time=i,e}};ds.PROTOCOL_ID=104;var lg=ds,b0=lg;var hs=class hs{constructor(){this.pid=0;this.roomId=0;this.loginToken=""}protocolId(){return hs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeString(e.loginToken),t.writeLong(e.pid),t.writeLong(e.roomId))}static read(t){if(!t.readBoolean())return null;let e=new hs,i=t.readString();e.loginToken=i;let n=t.readLong();e.pid=n;let r=t.readLong();return e.roomId=r,e}};hs.PROTOCOL_ID=1001;var cg=hs,Pu=cg;var fs=class fs{constructor(){this.errorCode=0;this.pid=0;this.matchDto=null;this.socketToken=""}protocolId(){return fs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writePacket(e.matchDto,25010),t.writeLong(e.pid),t.writeString(e.socketToken))}static read(t){if(!t.readBoolean())return null;let e=new fs,i=t.readInt();e.errorCode=i;let n=t.readPacket(25010);e.matchDto=n;let r=t.readLong();e.pid=r;let o=t.readString();return e.socketToken=o,e}};fs.PROTOCOL_ID=1002;var ug=fs,Ru=ug;var ys=class ys{protocolId(){return ys.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new ys:null}};ys.PROTOCOL_ID=1004;var pg=ys,Nu=pg;var bs=class bs{constructor(){this.sequence=0;this.param=""}protocolId(){return bs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeString(e.param))}static read(t){if(!t.readBoolean())return null;let e=new bs;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let n=t.readString();return e.param=n,e}};bs.PROTOCOL_ID=1005;var mg=bs,g0=mg;var gs=class gs{constructor(){this.sequence=0;this.code=0}protocolId(){return gs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeInt(e.code))}static read(t){if(!t.readBoolean())return null;let e=new gs;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let n=t.readInt();return e.code=n,e}};gs.PROTOCOL_ID=1006;var dg=gs,v0=dg;var vs=class vs{constructor(){this.token=""}protocolId(){return vs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeString(e.token)}static read(t){if(!t.readBoolean())return null;let e=new vs,i=t.readString();return e.token=i,e}};vs.PROTOCOL_ID=1007;var hg=vs,Ou=hg;var Ls=class Ls{constructor(){this.errorCode=0}protocolId(){return Ls.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new Ls,i=t.readInt();return e.errorCode=i,e}};Ls.PROTOCOL_ID=1008;var fg=Ls,Hu=fg;var _s=class _s{protocolId(){return _s.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new _s:null}};_s.PROTOCOL_ID=1010;var yg=_s,L0=yg;var xs=class xs{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return xs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.type),t.writeInt(e.id),t.writeLong(e.count))}static read(t){if(!t.readBoolean())return null;let e=new xs;if(!t.isReadable())return e;let i=t.readInt();if(e.type=i,!t.isReadable())return e;let n=t.readInt();if(e.id=n,!t.isReadable())return e;let r=t.readLong();return e.count=r,e}};xs.PROTOCOL_ID=1012;var bg=xs,_0=bg;var ws=class ws{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return ws.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeInt(e.dire),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new ws,i=t.readInt();e.area=i;let n=t.readInt();e.dire=n;let r=t.readInt();e.speed=r;let o=t.readLong();e.time=o;let s=t.readInt();e.x=s;let l=t.readInt();return e.y=l,e}};ws.PROTOCOL_ID=1013;var gg=ws,Uu=gg;var Is=class Is{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.errorCode=0;this.time=0}protocolId(){return Is.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.dire),t.writeInt(e.errorCode),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new Is,i=t.readInt();e.dire=i;let n=t.readInt();e.errorCode=n;let r=t.readInt();e.speed=r;let o=t.readLong();e.time=o;let s=t.readInt();e.x=s;let l=t.readInt();return e.y=l,e}};Is.PROTOCOL_ID=1014;var vg=Is,x0=vg;var Es=class Es{constructor(){this.type=0;this.member=null}protocolId(){return Es.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writePacket(e.member,25011),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Es,i=t.readPacket(25011);e.member=i;let n=t.readInt();return e.type=n,e}};Es.PROTOCOL_ID=1016;var Lg=Es,Vu=Lg;var Ts=class Ts{constructor(){this.pid=0;this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return Ts.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeInt(e.dire),t.writeLong(e.pid),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new Ts,i=t.readInt();e.area=i;let n=t.readInt();e.dire=n;let r=t.readLong();e.pid=r;let o=t.readInt();e.speed=o;let s=t.readLong();e.time=s;let l=t.readInt();e.x=l;let c=t.readInt();return e.y=c,e}};Ts.PROTOCOL_ID=1018;var _g=Ts,Fu=_g;var Ss=class Ss{constructor(){this.roomId=0;this.rankList=[];this.reward=[];this.arenaType=0;this.groupData=[]}protocolId(){return Ss.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.arenaType),e.groupData===null?t.writeInt(0):(t.writeInt(e.groupData.length),e.groupData.forEach(i=>{t.writePacketList(i,25013)})),t.writePacketList(e.rankList,25012),t.writePacketList(e.reward,25008),t.writeLong(e.roomId))}static read(t){if(!t.readBoolean())return null;let e=new Ss,i=t.readInt();e.arenaType=i;let n=new Array,r=t.readInt();if(r>0)for(let c=0;c<r;c++){let u=t.readPacketList(25013);n.push(u)}e.groupData=n;let o=t.readPacketList(25012);e.rankList=o;let s=t.readPacketList(25008);e.reward=s;let l=t.readLong();return e.roomId=l,e}};Ss.PROTOCOL_ID=1020;var xg=Ss,zu=xg;var Cs=class Cs{constructor(){this.targetId=0;this.attackType=0;this.skillId=0}protocolId(){return Cs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.attackType),t.writeInt(e.skillId),t.writeLong(e.targetId))}static read(t){if(!t.readBoolean())return null;let e=new Cs,i=t.readInt();e.attackType=i;let n=t.readInt();e.skillId=n;let r=t.readLong();return e.targetId=r,e}};Cs.PROTOCOL_ID=1021;var wg=Cs,Gu=wg;var ks=class ks{constructor(){this.errorCode=0}protocolId(){return ks.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new ks,i=t.readInt();return e.errorCode=i,e}};ks.PROTOCOL_ID=1022;var Ig=ks,w0=Ig;var As=class As{constructor(){this.attPid=0;this.defPid=0;this.attackValue=[];this.allAtkValue=0;this.bj=!1;this.sb=!1;this.skill=0;this.defHp=0;this.attScore=0;this.defScore=0}protocolId(){return As.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.allAtkValue),t.writeLong(e.attPid),t.writeLong(e.attScore),t.writeLongList(e.attackValue),t.writeBoolean(e.bj),t.writeLong(e.defHp),t.writeLong(e.defPid),t.writeLong(e.defScore),t.writeBoolean(e.sb),t.writeInt(e.skill))}static read(t){if(!t.readBoolean())return null;let e=new As,i=t.readLong();e.allAtkValue=i;let n=t.readLong();e.attPid=n;let r=t.readLong();e.attScore=r;let o=t.readLongList();e.attackValue=o;let s=t.readBoolean();e.bj=s;let l=t.readLong();e.defHp=l;let c=t.readLong();e.defPid=c;let u=t.readLong();e.defScore=u;let m=t.readBoolean();e.sb=m;let g=t.readInt();return e.skill=g,e}};As.PROTOCOL_ID=1024;var Eg=As,ju=Eg;var Ds=class Ds{protocolId(){return Ds.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new Ds:null}};Ds.PROTOCOL_ID=1025;var Tg=Ds,qu=Tg;var Ms=class Ms{constructor(){this.errorCode=0;this.matchDto=null}protocolId(){return Ms.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writePacket(e.matchDto,25010))}static read(t){if(!t.readBoolean())return null;let e=new Ms,i=t.readInt();e.errorCode=i;let n=t.readPacket(25010);return e.matchDto=n,e}};Ms.PROTOCOL_ID=1026;var Sg=Ms,Wu=Sg;var Bs=class Bs{constructor(){this.pid=0}protocolId(){return Bs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.pid)}static read(t){if(!t.readBoolean())return null;let e=new Bs,i=t.readLong();return e.pid=i,e}};Bs.PROTOCOL_ID=1028;var Cg=Bs,Ku=Cg;var Ps=class Ps{constructor(){this.pid=0;this.kill=0}protocolId(){return Ps.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.kill),t.writeLong(e.pid))}static read(t){if(!t.readBoolean())return null;let e=new Ps,i=t.readInt();e.kill=i;let n=t.readLong();return e.pid=n,e}};Ps.PROTOCOL_ID=1030;var kg=Ps,Yu=kg;var Rs=class Rs{constructor(){this.targetId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return Rs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeStringStringMap(e.param),t.writeInt(e.skillId),t.writeLong(e.targetId),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Rs,i=t.readStringStringMap();e.param=i;let n=t.readInt();e.skillId=n;let r=t.readLong();e.targetId=r;let o=t.readInt();return e.type=o,e}};Rs.PROTOCOL_ID=1031;var Ag=Rs,$u=Ag;var Ns=class Ns{constructor(){this.errorCode=0}protocolId(){return Ns.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new Ns,i=t.readInt();return e.errorCode=i,e}};Ns.PROTOCOL_ID=1032;var Dg=Ns,I0=Dg;var Os=class Os{constructor(){this.attId=0;this.defId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return Os.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.attId),t.writeLong(e.defId),t.writeStringStringMap(e.param),t.writeInt(e.skillId),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Os,i=t.readLong();e.attId=i;let n=t.readLong();e.defId=n;let r=t.readStringStringMap();e.param=r;let o=t.readInt();e.skillId=o;let s=t.readInt();return e.type=s,e}};Os.PROTOCOL_ID=1034;var Mg=Os,Xu=Mg;var Hs=class Hs{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.skillId=0;this.sourceId=0;this.time=0}protocolId(){return Hs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.skillId),t.writeLong(e.sourceId),t.writeLong(e.targetId),t.writeInt(e.targetX),t.writeInt(e.targetY),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new Hs,i=t.readInt();e.skillId=i;let n=t.readLong();e.sourceId=n;let r=t.readLong();e.targetId=r;let o=t.readInt();e.targetX=o;let s=t.readInt();e.targetY=s;let l=t.readLong();return e.time=l,e}};Hs.PROTOCOL_ID=1035;var Bg=Hs,Qu=Bg;var Us=class Us{constructor(){this.errorCode=0;this.time=0}protocolId(){return Us.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new Us,i=t.readInt();e.errorCode=i;let n=t.readLong();return e.time=n,e}};Us.PROTOCOL_ID=1036;var Pg=Us,E0=Pg;var Vs=class Vs{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.sourceId=0;this.skillId=0;this.time=0}protocolId(){return Vs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.skillId),t.writeLong(e.sourceId),t.writeLong(e.targetId),t.writeInt(e.targetX),t.writeInt(e.targetY),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new Vs,i=t.readInt();e.skillId=i;let n=t.readLong();e.sourceId=n;let r=t.readLong();e.targetId=r;let o=t.readInt();e.targetX=o;let s=t.readInt();e.targetY=s;let l=t.readLong();return e.time=l,e}};Vs.PROTOCOL_ID=1038;var Rg=Vs,Zu=Rg;var Fs=class Fs{constructor(){this.time=0}protocolId(){return Fs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.time)}static read(t){if(!t.readBoolean())return null;let e=new Fs,i=t.readLong();return e.time=i,e}};Fs.PROTOCOL_ID=1040;var Ng=Fs,Ju=Ng;var zs=class zs{constructor(){this.moveList=[]}protocolId(){return zs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writePacketList(e.moveList,1018)}static read(t){if(!t.readBoolean())return null;let e=new zs,i=t.readPacketList(1018);return e.moveList=i,e}};zs.PROTOCOL_ID=1042;var Og=zs,ep=Og;var Gs=class Gs{constructor(){this.id=0;this.value=!1}protocolId(){return Gs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.id),t.writeBoolean(e.value))}static read(t){if(!t.readBoolean())return null;let e=new Gs,i=t.readInt();e.id=i;let n=t.readBoolean();return e.value=n,e}};Gs.PROTOCOL_ID=25007;var Hg=Gs,T0=Hg;var js=class js{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return js.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeDouble(e.count),t.writeLong(e.id),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new js,i=t.readDouble();e.count=i;let n=t.readLong();e.id=n;let r=t.readInt();return e.type=r,e}};js.PROTOCOL_ID=25008;var Ug=js,S0=Ug;var qs=class qs{constructor(){this.id=0;this.map=0;this.maxX=0;this.maxY=0;this.players=[]}protocolId(){return qs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.id),t.writeInt(e.map),t.writeInt(e.maxX),t.writeInt(e.maxY),t.writePacketList(e.players,25011))}static read(t){if(!t.readBoolean())return null;let e=new qs,i=t.readLong();e.id=i;let n=t.readInt();e.map=n;let r=t.readInt();e.maxX=r;let o=t.readInt();e.maxY=o;let s=t.readPacketList(25011);return e.players=s,e}};qs.PROTOCOL_ID=25009;var Vg=qs,C0=Vg;var Ws=class Ws{constructor(){this.arenaId=0;this.coinType=0;this.roomId=0;this.members=[];this.remainderCd=0;this.startTime=0;this.nowTime=0;this.arenaType=0}protocolId(){return Ws.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.arenaId),t.writeInt(e.arenaType),t.writeInt(e.coinType),t.writePacketList(e.members,25011),t.writeLong(e.nowTime),t.writeLong(e.remainderCd),t.writeLong(e.roomId),t.writeLong(e.startTime))}static read(t){if(!t.readBoolean())return null;let e=new Ws,i=t.readInt();e.arenaId=i;let n=t.readInt();e.arenaType=n;let r=t.readInt();e.coinType=r;let o=t.readPacketList(25011);e.members=o;let s=t.readLong();e.nowTime=s;let l=t.readLong();e.remainderCd=l;let c=t.readLong();e.roomId=c;let u=t.readLong();return e.startTime=u,e}};Ws.PROTOCOL_ID=25010;var Fg=Ws,k0=Fg;var Ks=class Ks{constructor(){this.id=0;this.x=0;this.y=0;this.dire=0;this.speed=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.kill=0;this.hp=0;this.maxHp=0;this.atk=0;this.score=0;this.skillCd=new Map;this.commonCd=0;this.area=0;this.country=0;this.nodeId=0;this.lease=0}protocolId(){return Ks.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeLong(e.atk),t.writeLong(e.commonCd),t.writeInt(e.country),t.writeInt(e.dire),t.writeInt(e.heroColor),t.writeLong(e.heroId),t.writeLong(e.hp),t.writeString(e.icon),t.writeLong(e.id),t.writeInt(e.kill),t.writeInt(e.leader),t.writeInt(e.lease),t.writeLong(e.maxHp),t.writeString(e.name),t.writeInt(e.nodeId),t.writeLong(e.score),t.writeIntLongMap(e.skillCd),t.writeInt(e.speed),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new Ks,i=t.readInt();e.area=i;let n=t.readLong();e.atk=n;let r=t.readLong();e.commonCd=r;let o=t.readInt();e.country=o;let s=t.readInt();e.dire=s;let l=t.readInt();e.heroColor=l;let c=t.readLong();e.heroId=c;let u=t.readLong();e.hp=u;let m=t.readString();e.icon=m;let g=t.readLong();e.id=g;let x=t.readInt();e.kill=x;let w=t.readInt();e.leader=w;let v=t.readInt();e.lease=v;let E=t.readLong();e.maxHp=E;let P=t.readString();e.name=P;let G=t.readInt();e.nodeId=G;let q=t.readLong();e.score=q;let Q=t.readIntLongMap();e.skillCd=Q;let Y=t.readInt();e.speed=Y;let O=t.readInt();e.x=O;let J=t.readInt();return e.y=J,e}};Ks.PROTOCOL_ID=25011;var zg=Ks,A0=zg;var Ys=class Ys{constructor(){this.id=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.rankNum=0;this.kill=0;this.atk=0;this.score=0;this.die=!1;this.country=0;this.heroPk="";this.nodeId=0;this.lease=0}protocolId(){return Ys.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.atk),t.writeInt(e.country),t.writeBoolean(e.die),t.writeInt(e.heroColor),t.writeLong(e.heroId),t.writeString(e.heroPk),t.writeString(e.icon),t.writeLong(e.id),t.writeInt(e.kill),t.writeInt(e.leader),t.writeInt(e.lease),t.writeString(e.name),t.writeInt(e.nodeId),t.writeInt(e.rankNum),t.writeLong(e.score))}static read(t){if(!t.readBoolean())return null;let e=new Ys,i=t.readLong();e.atk=i;let n=t.readInt();e.country=n;let r=t.readBoolean();e.die=r;let o=t.readInt();e.heroColor=o;let s=t.readLong();e.heroId=s;let l=t.readString();e.heroPk=l;let c=t.readString();e.icon=c;let u=t.readLong();e.id=u;let m=t.readInt();e.kill=m;let g=t.readInt();e.leader=g;let x=t.readInt();e.lease=x;let w=t.readString();e.name=w;let v=t.readInt();e.nodeId=v;let E=t.readInt();e.rankNum=E;let P=t.readLong();return e.score=P,e}};Ys.PROTOCOL_ID=25012;var Gg=Ys,D0=Gg;var $s=class $s{constructor(){this.pid=0;this.rank=0;this.reward=[]}protocolId(){return $s.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.pid),t.writeInt(e.rank),t.writePacketList(e.reward,25008))}static read(t){if(!t.readBoolean())return null;let e=new $s,i=t.readLong();e.pid=i;let n=t.readInt();e.rank=n;let r=t.readPacketList(25008);return e.reward=r,e}};$s.PROTOCOL_ID=25013;var jg=$s,M0=jg;var Pe=new Map;Pe.set(101,ps);Pe.set(103,Bu);Pe.set(104,b0);Pe.set(1001,Pu);Pe.set(1002,Ru);Pe.set(1004,Nu);Pe.set(1005,g0);Pe.set(1006,v0);Pe.set(1007,Ou);Pe.set(1008,Hu);Pe.set(1010,L0);Pe.set(1012,_0);Pe.set(1013,Uu);Pe.set(1014,x0);Pe.set(1016,Vu);Pe.set(1018,Fu);Pe.set(1020,zu);Pe.set(1021,Gu);Pe.set(1022,w0);Pe.set(1024,ju);Pe.set(1025,qu);Pe.set(1026,Wu);Pe.set(1028,Ku);Pe.set(1030,Yu);Pe.set(1031,$u);Pe.set(1032,I0);Pe.set(1034,Xu);Pe.set(1035,Qu);Pe.set(1036,E0);Pe.set(1038,Zu);Pe.set(1040,Ju);Pe.set(1042,ep);Pe.set(25007,T0);Pe.set(25008,S0);Pe.set(25009,C0);Pe.set(25010,k0);Pe.set(25011,A0);Pe.set(25012,D0);Pe.set(25013,M0);var qg=class a{static getProtocol(t){let e=Pe.get(t);if(e===null)throw"[protocolId:"+t+"]协议不存在";return e}static write(t,e){let i=e.protocolId();t.writeInt(i),a.getProtocol(i).write(t,e)}static read(t){let e=t.readInt();return a.getProtocol(e).read(t)}},Wt=qg;var B0={},P0={},gi;try{gi=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}var V=class V{constructor(t,e,i=!1){this.low=t|0,this.high=e|0,this.unsigned=i}toInt(){return this.unsigned?this.low>>>0:this.low}toNumber(){return this.unsigned?(this.high>>>0)*to+(this.low>>>0):this.high*to+(this.low>>>0)}toString(t=10){if(t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.equals(V.MIN_VALUE)){let r=V.fromNumber(t),o=this.divide(r),s=o.multiply(r).subtract(this);return o.toString(t)+s.toInt().toString(t)}else return"-"+this.negate().toString(t);let e=V.fromNumber(Math.pow(t,6),this.unsigned),i="",n=this;for(;;){let r=n.divide(e),s=(n.subtract(r.multiply(e)).toInt()>>>0).toString(t);if(n=r,n.isZero())return s+i;for(;s.length<6;)s="0"+s;i=""+s+i}}getHighBits(){return this.high}getHighBitsUnsigned(){return this.high>>>0}getLowBits(){return this.low}getLowBitsUnsigned(){return this.low>>>0}getNumBitsAbs(){if(this.isNegative())return this.equals(V.MIN_VALUE)?64:this.negate().getNumBitsAbs();let t=this.high!=0?this.high:this.low,e;for(e=31;e>0&&!(t&1<<e);e--);return this.high!=0?e+33:e+1}isZero(){return this.high===0&&this.low===0}isNegative(){return!this.unsigned&&this.high<0}isPositive(){return this.unsigned||this.high>=0}isOdd(){return(this.low&1)===1}isEven(){return(this.low&1)===0}equals(t){return t instanceof V||(t=V.fromValue(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low}notEquals(t){return!this.equals(t)}lessThan(t){return this.compare(t)<0}lessThanOrEqual(t){return this.compare(t)<=0}greaterThan(t){return this.compare(t)>0}greaterThanOrEqual(t){return this.compare(t)>=0}compare(t){if(t instanceof V||(t=V.fromValue(t)),this.equals(t))return 0;let e=this.isNegative(),i=t.isNegative();return e&&!i?-1:!e&&i?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.subtract(t).isNegative()?-1:1}negate(){return!this.unsigned&&this.equals(V.MIN_VALUE)?V.MIN_VALUE:this.not().add(V.ONE)}add(t){t instanceof V||(t=V.fromValue(t));let e=this.high>>>16,i=this.high&65535,n=this.low>>>16,r=this.low&65535,o=t.high>>>16,s=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,m=0,g=0,x=0;return x+=r+c,g+=x>>>16,x&=65535,g+=n+l,m+=g>>>16,g&=65535,m+=i+s,u+=m>>>16,m&=65535,u+=e+o,u&=65535,V.fromBits(g<<16|x,u<<16|m,this.unsigned)}subtract(t){return t instanceof V||(t=V.fromValue(t)),this.add(t.negate())}multiply(t){if(this.isZero())return V.ZERO;if(t instanceof V||(t=V.fromValue(t)),gi){let w=gi.mul(this.low,this.high,t.low,t.high);return V.fromBits(w,gi.get_high(),this.unsigned)}if(t.isZero())return V.ZERO;if(this.equals(V.MIN_VALUE))return t.isOdd()?V.MIN_VALUE:V.ZERO;if(t.equals(V.MIN_VALUE))return this.isOdd()?V.MIN_VALUE:V.ZERO;if(this.isNegative())return t.isNegative()?this.negate().multiply(t.negate()):this.negate().multiply(t).negate();if(t.isNegative())return this.multiply(t.negate()).negate();if(this.lessThan(O0)&&t.lessThan(O0))return V.fromNumber(this.toNumber()*t.toNumber(),this.unsigned);let e=this.high>>>16,i=this.high&65535,n=this.low>>>16,r=this.low&65535,o=t.high>>>16,s=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,m=0,g=0,x=0;return x+=r*c,g+=x>>>16,x&=65535,g+=n*c,m+=g>>>16,g&=65535,g+=r*l,m+=g>>>16,g&=65535,m+=i*c,u+=m>>>16,m&=65535,m+=n*l,u+=m>>>16,m&=65535,m+=r*s,u+=m>>>16,m&=65535,u+=e*c+i*l+n*s+r*o,u&=65535,V.fromBits(g<<16|x,u<<16|m,this.unsigned)}divide(t){if(t instanceof V||(t=V.fromValue(t)),t.isZero())throw Error("division by zero");if(gi){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;let r=(this.unsigned?gi.div_u:gi.div_s)(this.low,this.high,t.low,t.high);return V.fromBits(r,gi.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?V.UZERO:V.ZERO;let e,i,n;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.greaterThan(this))return V.UZERO;if(t.greaterThan(this.shiftRightUnsigned(1)))return V.UONE;n=V.UZERO}else{if(this.equals(V.MIN_VALUE))return t.equals(V.ONE)||t.equals(V.NEG_ONE)?V.MIN_VALUE:t.equals(V.MIN_VALUE)?V.ONE:(e=this.shiftRight(1).divide(t).shiftLeft(1),e.equals(V.ZERO)?t.isNegative()?V.ONE:V.NEG_ONE:(i=this.subtract(t.multiply(e)),n=e.add(i.divide(t)),n));if(t.equals(V.MIN_VALUE))return this.unsigned?V.UZERO:V.ZERO;if(this.isNegative())return t.isNegative()?this.negate().divide(t.negate()):this.negate().divide(t).negate();if(t.isNegative())return this.divide(t.negate()).negate();n=V.ZERO}for(i=this;i.greaterThanOrEqual(t);){e=Math.max(1,Math.floor(i.toNumber()/t.toNumber()));let r=Math.ceil(Math.log(e)/Math.LN2),o=r<=48?1:Math.pow(2,r-48),s=V.fromNumber(e),l=s.multiply(t);for(;l.isNegative()||l.greaterThan(i);)e-=o,s=V.fromNumber(e,this.unsigned),l=s.multiply(t);s.isZero()&&(s=V.ONE),n=n.add(s),i=i.subtract(l)}return n}modulo(t){if(t instanceof V||(t=V.fromValue(t)),gi){let e=(this.unsigned?gi.rem_u:gi.rem_s)(this.low,this.high,t.low,t.high);return V.fromBits(e,gi.get_high(),this.unsigned)}return this.subtract(this.divide(t).multiply(t))}not(){return V.fromBits(~this.low,~this.high,this.unsigned)}and(t){return t instanceof V||(t=V.fromValue(t)),V.fromBits(this.low&t.low,this.high&t.high,this.unsigned)}or(t){return t instanceof V||(t=V.fromValue(t)),V.fromBits(this.low|t.low,this.high|t.high,this.unsigned)}xor(t){return t instanceof V||(t=V.fromValue(t)),V.fromBits(this.low^t.low,this.high^t.high,this.unsigned)}shiftLeft(t){if(t instanceof V&&(t=t.toInt()),(t&=63)===0)return this;if(t<32){let e=this.low<<t;return V.fromBits(e,this.high<<t|this.low>>>32-t,this.unsigned)}else return V.fromBits(0,this.low<<t-32,this.unsigned)}shiftRight(t){return t instanceof V&&(t=t.toInt()),(t&=63)===0?this:t<32?V.fromBits(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):V.fromBits(this.high>>t-32,this.high>=0?0:-1,this.unsigned)}shiftRightUnsigned(t){return t instanceof V&&(t=t.toInt()),(t&=63)===0?this:t<32?V.fromBits(this.low>>>t|this.high<<32-t,this.high>>>t,this.unsigned):t===32?V.fromBits(this.high,0,this.unsigned):V.fromBits(this.high>>>t-32,0,this.unsigned)}rotateLeft(t){let e;return t instanceof V&&(t=t.toInt()),(t&=63)===0?this:t===32?V.fromBits(this.high,this.low,this.unsigned):t<32?(e=32-t,V.fromBits(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned)):(t-=32,e=32-t,V.fromBits(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned))}rotateRight(t){let e;return t instanceof V&&(t=t.toInt()),(t&=63)===0?this:t===32?V.fromBits(this.high,this.low,this.unsigned):t<32?(e=32-t,V.fromBits(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned)):(t-=32,e=32-t,V.fromBits(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned))}toSigned(){return this.unsigned?V.fromBits(this.low,this.high,!1):this}toUnsigned(){return this.unsigned?this:V.fromBits(this.low,this.high,!0)}toBytes(t){return t?this.toBytesLE():this.toBytesBE()}toBytesLE(){let t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}toBytesBE(){let t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]}static fromBytes(t,e,i){return i?V.fromBytesLE(t,e):V.fromBytesBE(t,e)}static fromBytesLE(t,e){return new V(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)}static fromBytesBE(t,e){return new V(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)}static fromInt(t,e){let i;if(e){if(t>>>=0,i=0<=t&&t<256){let r=P0[t];if(r)return r}let n=V.fromBits(t,(t|0)<0?-1:0,!0);return i&&(P0[t]=n),n}else{if(t|=0,i=-128<=t&&t<128){let r=B0[t];if(r)return r}let n=V.fromBits(t,t<0?-1:0,!1);return i&&(B0[t]=n),n}}static fromNumber(t,e){if(isNaN(t))return e?V.UZERO:V.ZERO;if(e){if(t<0)return V.UZERO;if(t>=H0)return V.MAX_UNSIGNED_VALUE}else{if(t<=-N0)return V.MIN_VALUE;if(t+1>=N0)return V.MAX_VALUE}return t<0?V.fromNumber(-t,e).negate():V.fromBits(t%to|0,t/to|0,e)}static fromBits(t,e,i){return new V(t,e,i)}static fromString(t,e,i){if(t.length===0)throw Error("empty string");if(t==="NaN"||t==="Infinity"||t==="+Infinity"||t==="-Infinity")return V.ZERO;if(typeof e=="number"?(i=e,e=!1):e=!!e,i=i||10,i<2||36<i)throw RangeError("radix");let n;if((n=t.indexOf("-"))>0)throw Error("interior hyphen");if(n===0)return V.fromString(t.substring(1),e,i).negate();let r=V.fromNumber(Math.pow(i,8)),o=V.ZERO;for(let s=0;s<t.length;s+=8){let l=Math.min(8,t.length-s),c=parseInt(t.substring(s,s+l),i);if(l<8){let u=V.fromNumber(Math.pow(i,l));o=o.multiply(u).add(V.fromNumber(c))}else o=o.multiply(r),o=o.add(V.fromNumber(c))}return o.unsigned=e,o}static fromValue(t,e){return typeof t=="number"?V.fromNumber(t,e):typeof t=="string"?V.fromString(t,e):V.fromBits(t.low,t.high,typeof e=="boolean"?e:t.unsigned)}};V.ZERO=V.fromInt(0),V.UZERO=V.fromInt(0,!0),V.ONE=V.fromInt(1),V.UONE=V.fromInt(1,!0),V.NEG_ONE=V.fromInt(-1),V.MAX_VALUE=V.fromBits(-1,2147483647,!1),V.MAX_UNSIGNED_VALUE=V.fromBits(-1,-1,!0),V.MIN_VALUE=V.fromBits(0,-2147483648,!1);var io=V,R0=65536,cI=1<<24,to=R0*R0,H0=to*to,N0=H0/2,O0=io.fromInt(cI);var Xs=class a{constructor(t,e){this.lo=t>>>0,this.hi=e>>>0}zzEncode(){let t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this}zzDecode(){let t=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this}toLong(t){return new io(this.lo|0,this.hi|0,!!t)}static from(t){return typeof t=="number"?a.fromNumber(t):((typeof t=="string"||t instanceof String)&&(t=io.fromString(t)),t.low||t.high?new a(t.low>>>0,t.high>>>0):U0)}static fromNumber(t){if(t===0)return U0;let e=t<0;e&&(t=-t);let i=t>>>0,n=(t-i)/4294967296>>>0;return e&&(n=~n>>>0,i=~i>>>0,++i>4294967295&&(i=0,++n>4294967295&&(n=0))),new a(i,n)}},U0=new Xs(0,0);function uI(a,t){let e=0;for(;t.hi;)a.writeByte(t.lo&127|128),t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7,e=e+7;for(;t.lo>127;){if(e>=56){a.writeByte(t.lo);return}a.writeByte(t.lo&127|128),t.lo=t.lo>>>7,e=e+7}a.writeByte(t.lo)}function pI(a){let t=new Xs(0,0),e=0,i=a.length,n=0;if(i-n>4){for(;e<4;++e)if(t.lo=(t.lo|(a[n]&127)<<e*7)>>>0,a[n++]<128)return t;if(t.lo=(t.lo|(a[n]&127)<<28)>>>0,t.hi=(t.hi|(a[n]&127)>>4)>>>0,a[n++]<128)return t;e=0}else{for(;e<3;++e)if(t.lo=(t.lo|(a[n]&127)<<e*7)>>>0,a[n++]<128)return t;return t.lo=(t.lo|(a[n++]&127)<<e*7)>>>0,t}for(;e<4;++e){if(n===8)return t.hi=(t.hi|a[n]<<e*7+3)>>>0,t;if(t.hi=(t.hi|(a[n]&127)<<e*7+3)>>>0,a[n++]<128)return t}return t}function V0(a,t){let e=Xs.from(t).zzEncode();uI(a,e)}function F0(a){return pI(a).zzDecode().toLong(!1)}var z0="",mI=128,dI=655537,hI=32767,fI=-32768,G0=2147483647,j0=-2147483648,yI=new TextEncoder,bI=new TextDecoder;function gI(a,t){if(a.byteLength>t)throw new Error("newLength is too small");let e=new ArrayBuffer(t);return new Uint8Array(e).set(new Uint8Array(a)),e}function vI(a){return a<<1^a>>31}function LI(a){return a>>>1^-(a&1)}var Wg=class{constructor(){this.writeOffset=0,this.readOffset=0,this.buffer=new ArrayBuffer(mI),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}setWriteOffset(t){if(t>this.buffer.byteLength)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.writeOffset=t}setReadOffset(t){if(t>this.writeOffset)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.readOffset=t}getCapacity(){return this.buffer.byteLength-this.writeOffset}ensureCapacity(t){for(;t-this.getCapacity()>0;){let e=this.buffer.byteLength*2;if(e>dI)throw new Error("out of memory error");this.buffer=gI(this.buffer,e),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}}isReadable(){return this.writeOffset>this.readOffset}writeBytes(t){let e=t.byteLength;this.ensureCapacity(e),new Uint8Array(this.buffer).set(new Uint8Array(t),this.writeOffset),this.writeOffset+=e}toBytes(){let t=new ArrayBuffer(this.writeOffset);return new Uint8Array(t).set(new Uint8Array(this.buffer.slice(0,this.writeOffset))),t}writeBoolean(t){if(!(t===!0||t===!1))throw new Error("value must be true of false");this.ensureCapacity(1),t===!0?this.bufferView.setInt8(this.writeOffset,1):this.bufferView.setInt8(this.writeOffset,0),this.writeOffset++}readBoolean(){let t=this.bufferView.getInt8(this.readOffset);return this.readOffset++,t===1}writeByte(t){this.ensureCapacity(1),this.bufferView.setInt8(this.writeOffset,t),this.writeOffset++}readByte(){let t=this.bufferView.getInt8(this.readOffset);return this.readOffset++,t}writeShort(t){if(!(fI<=t&&t<=hI))throw new Error("value must range between minShort:-32768 and maxShort:32767");this.ensureCapacity(2),this.bufferView.setInt16(this.writeOffset,t),this.writeOffset+=2}readShort(){let t=this.bufferView.getInt16(this.readOffset);return this.readOffset+=2,t}writeRawInt(t){if(!(j0<=t&&t<=G0))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");this.ensureCapacity(4),this.bufferView.setInt32(this.writeOffset,t),this.writeOffset+=4}readRawInt(){let t=this.bufferView.getInt32(this.readOffset);return this.readOffset+=4,t}writeInt(t){if(!(j0<=t&&t<=G0))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");if(this.ensureCapacity(5),t=vI(t),!(t>>>7)){this.writeByte(t);return}if(!(t>>>14)){this.writeByte(t&127|128),this.writeByte(t>>>7);return}if(!(t>>>21)){this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14);return}if(!(t>>>28)){this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14|128),this.writeByte(t>>>21);return}this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14|128),this.writeByte(t>>>21|128),this.writeByte(t>>>28)}readInt(){let t=this.readByte(),e=t&127;return t&128&&(t=this.readByte(),e|=(t&127)<<7,t&128&&(t=this.readByte(),e|=(t&127)<<14,t&128&&(t=this.readByte(),e|=(t&127)<<21,t&128&&(t=this.readByte(),e|=(t&127)<<28)))),LI(e)}writeLong(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(9),V0(this,t)}readLong(){let t=new ArrayBuffer(9),e=new DataView(t,0,t.byteLength),i=0,n=this.readByte();return e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n))))))))),F0(new Uint8Array(t.slice(0,i))).toNumber()}writeFloat(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(4),this.bufferView.setFloat32(this.writeOffset,t),this.writeOffset+=4}readFloat(){let t=this.bufferView.getFloat32(this.readOffset);return this.readOffset+=4,t}writeDouble(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(8),this.bufferView.setFloat64(this.writeOffset,t),this.writeOffset+=8}readDouble(){let t=this.bufferView.getFloat64(this.readOffset);return this.readOffset+=8,t}writeChar(t){if(t==null||t.length===0){this.writeString(z0);return}this.writeString(t.charAt(0))}readChar(){return this.readString()}writeString(t){if(t==null||t.trim().length===0){this.writeInt(0);return}let e=yI.encode(t);this.ensureCapacity(5+e.length),this.writeInt(e.length),e.forEach(i=>this.writeByte(i))}readString(){let t=this.readInt();if(t<=0)return z0;let e=new Uint8Array(this.buffer.slice(this.readOffset,this.readOffset+t)),i=bI.decode(e);return this.readOffset+=t,i}writePacketFlag(t){let e=t==null;return this.writeBoolean(!e),e}writePacket(t,e){Wt.getProtocol(e).write(this,t)}readPacket(t){return Wt.getProtocol(t).read(this)}writeBooleanArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeBoolean(e)}))}readBooleanArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readBoolean());return t}writeByteArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeByte(e)}))}readByteArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readByte());return t}writeShortArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeShort(e)}))}readShortArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readShort());return t}writeIntArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeInt(e)}))}readIntArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readInt());return t}writeLongArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeLong(e)}))}readLongArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readLong());return t}writeFloatArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeFloat(e)}))}readFloatArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readFloat());return t}writeDoubleArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeDouble(e)}))}readDoubleArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readDouble());return t}writeStringArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeString(e)}))}readStringArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readString());return t}writeCharArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeChar(e)}))}readCharArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readChar());return t}writePacketArray(t,e){if(t===null)this.writeInt(0);else{let i=Wt.getProtocol(e);this.writeInt(t.length),t.forEach(n=>{i.write(this,n)})}}readPacketArray(t){let e=[],i=this.readInt();if(i>0){let n=Wt.getProtocol(t);for(let r=0;r<i;r++)e.push(n.read(this))}return e}writeBooleanList(t){this.writeBooleanArray(t)}readBooleanList(){return this.readBooleanArray()}writeByteList(t){this.writeByteArray(t)}readByteList(){return this.readByteArray()}writeShortList(t){this.writeShortArray(t)}readShortList(){return this.readShortArray()}writeIntList(t){this.writeIntArray(t)}readIntList(){return this.readIntArray()}writeLongList(t){this.writeLongArray(t)}readLongList(){return this.readLongArray()}writeFloatList(t){this.writeFloatArray(t)}readFloatList(){return this.readFloatArray()}writeDoubleList(t){this.writeDoubleArray(t)}readDoubleList(){return this.readDoubleArray()}writeStringList(t){this.writeStringArray(t)}readStringList(){return this.readStringArray()}writeCharList(t){this.writeCharArray(t)}readCharList(){return this.readCharArray()}writePacketList(t,e){this.writePacketArray(t,e)}readPacketList(t){return this.readPacketArray(t)}writeBooleanSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeBoolean(e)}))}readBooleanSet(){return new Set(this.readBooleanArray())}writeByteSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeByte(e)}))}readByteSet(){return new Set(this.readByteArray())}writeShortSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeShort(e)}))}readShortSet(){return new Set(this.readShortArray())}writeIntSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeInt(e)}))}readIntSet(){return new Set(this.readIntArray())}writeLongSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeLong(e)}))}readLongSet(){return new Set(this.readLongArray())}writeFloatSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeFloat(e)}))}readFloatSet(){return new Set(this.readFloatArray())}writeDoubleSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeDouble(e)}))}readDoubleSet(){return new Set(this.readDoubleArray())}writeStringSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeString(e)}))}readStringSet(){return new Set(this.readStringArray())}writeCharSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeChar(e)}))}readCharSet(){return new Set(this.readCharArray())}writePacketSet(t,e){if(t===null)this.writeInt(0);else{let i=Wt.getProtocol(e);this.writeInt(t.size),t.forEach(n=>{i.write(this,n)})}}readPacketSet(t){return new Set(this.readPacketArray(t))}writeIntIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeInt(e)}))}readIntIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readInt(),r=this.readInt();t.set(n,r)}return t}writeIntLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeLong(e)}))}readIntLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readInt(),r=this.readLong();t.set(n,r)}return t}writeIntStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeString(e)}))}readIntStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readInt(),r=this.readString();t.set(n,r)}return t}writeIntPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=Wt.getProtocol(e);this.writeInt(t.size),t.forEach((n,r)=>{this.writeInt(r),i.write(this,n)})}}readIntPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let n=Wt.getProtocol(t);for(let r=0;r<i;r++){let o=this.readInt(),s=n.read(this);e.set(o,s)}}return e}writeLongIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeInt(e)}))}readLongIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readLong(),r=this.readInt();t.set(n,r)}return t}writeLongLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeLong(e)}))}readLongLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readLong(),r=this.readLong();t.set(n,r)}return t}writeLongStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeString(e)}))}readLongStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readLong(),r=this.readString();t.set(n,r)}return t}writeLongPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=Wt.getProtocol(e);this.writeInt(t.size),t.forEach((n,r)=>{this.writeLong(r),i.write(this,n)})}}readLongPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let n=Wt.getProtocol(t);for(let r=0;r<i;r++){let o=this.readLong(),s=n.read(this);e.set(o,s)}}return e}writeStringIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeInt(e)}))}readStringIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readString(),r=this.readInt();t.set(n,r)}return t}writeStringLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeLong(e)}))}readStringLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readString(),r=this.readLong();t.set(n,r)}return t}writeStringStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeString(e)}))}readStringStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readString(),r=this.readString();t.set(n,r)}return t}writeStringPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=Wt.getProtocol(e);this.writeInt(t.size),t.forEach((n,r)=>{this.writeString(r),i.write(this,n)})}}readStringPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let n=Wt.getProtocol(t);for(let r=0;r<i;r++){let o=this.readString(),s=n.read(this);e.set(o,s)}}return e}},Kg=Wg;var Ht=class Ht{constructor(){this.m_iConnectTimes=0;this.m_iMaxTimes=10;this.m_iHeartTime=6e4;this._isMatching=!1;this.isFirst=!0;this.m_socket=new Laya.Socket,this.m_socket.on(Laya.Event.OPEN,this,this.onSocketOpen),this.m_socket.on(Laya.Event.CLOSE,this,this.onSocketClose),this.m_socket.on(Laya.Event.MESSAGE,this,this.onMessageReveived),this.m_socket.on(Laya.Event.ERROR,this,this.onConnectError)}static get instance(){return Ht._instance==null&&(Ht._instance=new Ht),Ht._instance}get isMatching(){return this._isMatching}set isMatching(t){this._isMatching=t,t||(this.m_socket.close(),this.isConnect=!1)}initSocket(){this.isMatching=!0,this.isFirst=!0;var t=z.instance.roomDto.connectAddr;Ht.m_strHttpHost=t,this.connect()}onSocketOpen(){this.isConnect=!0,this.m_iConnectTimes=0,ci.log("websocket----websocket connected",1),this.onLogin()}onLogin(){if(this.isFirst){let t=new Pu;t.roomId=z.instance.roomDto.roomId,t.loginToken=localStorage.getItem("TOX-COOKIE"+j.instance.walletAddress),t.pid=L.instance.playerDto.pid,this.sendData(t)}else{let t=new Ou;t.token=this.socketToken,this.sendData(t)}}onSocketClose(t){console.log("websocket----closed"),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,console.log("websocket----closed m_iConnectTimes:"+this.m_iConnectTimes+", m_iMaxTimes: "+this.m_iMaxTimes),this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,this.onReconnect):me.instance.hideLoading()))}onReconnect(){Ht.instance.reconnect(),Ht.instance.m_iConnectTimes++}onConnectError(t){console.log("websocket----onConnectError e:"+ +t),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,this.onReconnect):me.instance.hideLoading()))}connect(){console.log("websocket----connect: "+Ht.m_strHttpHost),this.isMatching&&(this.isConnect||(Laya.timer.once(1e4,this,this.showTip),this.m_socket.connectByUrl(Ht.m_strHttpHost),console.log("websocket----connect websocket")))}clearShowTip(){Laya.timer.clear(this,this.showTip)}showTip(){be.netError()}reconnect(){console.log("websocket----reconnect: "+Ht.m_strHttpHost),this.isMatching&&(this.isConnect||(this.m_socket.connectByUrl(Ht.m_strHttpHost),console.log("websocket----connect websocket")))}onSendMessage(){}sendData(t){if(this.isMatching)if(this.isConnect){let e=new Kg;e.setWriteOffset(4),Wt.write(e,t),e.writeBoolean(!1);let i=e.writeOffset;e.setWriteOffset(0),e.writeRawInt(i-4),e.setWriteOffset(i),this.m_socket.send(e.buffer),console.log(be.GetLogTime+" websocket ------>>>>>>>> send message PROTOCOL_ID:"+t.protocolId()+"，内容："+JSON.stringify(t))}else ci.log("socket send error： "+JSON.stringify(t))}async onMessageReveived(t){let e=t,i=new Kg;i.writeBytes(e),i.setReadOffset(4);let n=Wt.read(i),r=n.protocolId();console.log(be.GetLogTime+" websocket ------<<<<<<<< recv PROTOCOL_ID: "+r+"，内容："+JSON.stringify(n));let o=n.errorCode;if(o&&o>0){console.warn("errorCode "+o+", errorMessage： "+pe.instance.get(o)),(o==24||o==25)&&(this.isMatching=!1,Xe.instance.close(),Ht.instance.clearShowTip(),fe.intance.currSceneName!=X.M_SCENE_MATCH&&(fe.intance.setCurrentScene(X.M_SCENE_MAIN),be.commTipWithYes(pe.instance.get(o))));return}switch(y.intance.event("msg_"+r,[e]),r){case Ru.PROTOCOL_ID:console.log("收到了登录返回"),this.isFirst=!1;let l=n;A.needHeart=!1,z.instance.matchDto=l.matchDto,this.socketToken=l.socketToken,fe.intance.setCurrentScene(X.M_SCENE_MATCH),this.clearShowTip();break;case Hu.PROTOCOL_ID:console.log("断线重连 返回");break;case Ju.PROTOCOL_ID:console.log("收到比赛开始数据");let c=n;H.intance.disposeView(f.MatchReadyView),z.instance.stopAll=!1;break;case Fu.PROTOCOL_ID:console.log("收到移动数据");let u=n;U.instance.onRevMovePush(u);break;case ep.PROTOCOL_ID:var s=n.moveList;s.forEach(Y=>{U.instance.onRevMovePush(Y)});break;case Zu.PROTOCOL_ID:let g=n;U.instance.onRevTargetMovePush(g);break;case ju.PROTOCOL_ID:console.log("收到伤害数据");let x=n;U.instance.onRevAttackPush(x);break;case Xu.PROTOCOL_ID:console.log("收到动画数据");let w=n;U.instance.onRevAnimationPush(w);break;case Vu.PROTOCOL_ID:console.log("收到玩家加入或离开数据");let v=n;U.instance.addPlayer(v);break;case Ku.PROTOCOL_ID:console.log("收到第一滴血数据");let E=n;y.intance.event(h.EVENT_FirstBlood,[E]);break;case Yu.PROTOCOL_ID:console.log("收到多杀数据");let P=n;y.intance.event(h.EVENT_MutiKill,[P]);break;case zu.PROTOCOL_ID:console.log("收到比赛结束");let G=n;z.instance.matchDto&&z.instance.onGoMatchEndRank(G);break;case Wu.PROTOCOL_ID:console.log("收到了恢复数据返回");let q=n;U.instance.onRevRestorePush(q.matchDto);break;case ps.PROTOCOL_ID:console.log("收到了错误信息返回");let Q=new ps;Object.assign(Q,n),console.log("errorMessage： "+Q.errorMessage),pe.instance.showErrByString(Q.errorMessage);break;case Nu.PROTOCOL_ID:this.isOtherLogin=!0,Laya.timer.clearAll(this),console.log("websocket----------------------------otherLogin");break;default:break}}sendHeart(){this.m_socket.connected&&this.sendData(new Bu)}};Ht.m_strHttpHost=getWSServer(),Ht.CMD_99999=99999;var yt=Ht;var Fe=class Fe{static get IsSetRelease(){return Fe._IsSetRelease}static get IsSetGuid(){return Fe._IsSetGuid}static initParms(){if(Laya.Browser.window.location){let e=Laya.Browser.window.location.href,i=this.getURLParameters(e);if(Fe.m_obj=i,console.log("1initgame-->urldata:",Fe.m_obj),Fe.m_obj.server&&Fe.m_obj.server!=""&&(A.httpRoot=Fe.m_obj.server),Fe.m_obj.socket&&Fe.m_obj.socket!=""){var t=Fe.m_obj.socket;yt.m_strHttpHost=t+"/websocket"}if(Fe.m_obj.address&&Fe.m_obj.address!=""&&(j.instance.walletAddress=Fe.m_obj.address),Fe.m_obj.from&&Fe.m_obj.from=="into"&&($.isInto=!0),Fe.m_obj.isFull&&Fe.m_obj.isFull=="1"&&($.isFull=!0),Fe.m_obj.justFull&&Fe.m_obj.justFull=="1"&&($.justFull=!0),Fe.m_obj.white&&Fe.m_obj.white=="1"&&($.isWhite=!0),Fe.m_obj.debug&&Fe.m_obj.debug!="0"&&($.Debug=parseInt(Fe.m_obj.debug)),Fe.m_obj.res&&Fe.m_obj.res!="0"&&($.Res=parseInt(Fe.m_obj.res)),Fe.m_obj.lang&&Fe.m_obj.lang!=""){let n=parseInt(Fe.m_obj.lang);n<1&&(n=1),$.ignoreLang=!0,L.instance.m_strLanguage=n}}}static getURLParameters(t){let e={};return t.replace(/[?&]+([^=&]+)=([^&]*)/gi,(i,n,r)=>e[n]=decodeURIComponent(r)),e}static cheakStr(t){let e=new RegExp("[A-Za-z0-9_-\\s]","g"),i=t.match(e);return!!(i&&i.length==t.length)}static isNumber(t){return/^(?!0\d)\d*\.?\d*$/.test(t)}static roundToTwoDecimals(t){return t%1===0?t.toString():Number(t.toFixed(2)).toString()}static filterObjectsByState(t,e,i=void 0){return i?t.filter(n=>n.state===e&&i.indexOf(n.pk)<0&&n.newFightFlag!==1):t.filter(n=>n.state===e&&n.newFightFlag!==1)}static filterObjectsByNewFightFlag(t){return t.filter(e=>e.newFightFlag!==1)}static getArenaByTicketId(t){let e=R.intance.m_dicArenaDic.values;for(let i of e)if(Array.isArray(i.item)&&i.item.length>0&&i.item[0]===t)return i.name}static processItemsArray(t,e=!0){let i=R.intance.getGeneralValueById(20),n={},r={};var o=[];t.forEach(c=>{i.indexOf(c.id)>-1?r[c.id]?r[c.id].count+=c.count:r[c.id]=c:(n[c.id]=c,o.push(c))}),e&&i.forEach(c=>{r[c]||(r[c]={type:1,id:c,count:0})});let s=Object.values(r),l=Object.values(n);return s=s.sort((c,u)=>i.indexOf(c.id)-i.indexOf(u.id)),[s,l,o]}static sumItemCount(t){let e=new Map;return t.forEach(n=>{n.reward.forEach(r=>{let{type:o,id:s,count:l}=r;e.has(s)?e.set(s,{type:o,id:s,count:e.get(s).count+l}):e.set(s,{type:o,id:s,count:l})})}),Array.from(e.values())}static addIndexToObjects(t){return t.forEach((e,i)=>{e.index=i}),t}static findFirstTypeAndNotGold(t){for(let e=0;e<t.length;e++)if(t[e].id>=3001&&t[e].id<=3021&&t[e].id!==3005)return t[e]}static getTitleByGoodsId(t,e){for(let i of t)if(i.goods===e)return i.title;return null}static getCurrencyIdByName(t){let e=xe.TYPE_TOX;switch(t){case"TOX":e=xe.TYPE_TOX;break;case"ETH":e=xe.TYPE_ETH;break;case"BTC":e=xe.TYPE_BTC;break;case"USDT":e=xe.TYPE_USDT;break;case"BTOX":e=xe.TYPE_BTOX;break;case"GALA":e=xe.TYPE_GALA;break}return e}static formatNumber(t){let e=t.toString(),i=e.indexOf(".");return i!==-1&&e.length-i>7?(e=e.slice(0,i+7),parseFloat(e)):t}static truncateToTwoDecimalPlaces(t){let e=t.toString(),i=e.indexOf(".");if(i===-1)return t;let n=e.substring(0,i+3);return parseFloat(n)}static getKeyByValue(t,e){return Object.keys(t).find(i=>t[i]===e)}static powerOf10(t,e){return t*Math.pow(10,e)}static isLeapYear(t){return t%4==0&&t%100!=0||t%400==0}static getDaysInMonth(t,e){return e===2?this.isLeapYear(t)?29:28:[4,6,9,11].includes(e)?30:31}static shortenString(t,e,i){return t.length<=e+i?t:t.substr(0,e)+"..."+t.substr(-i)}};Fe._IsSetRelease=!1,Fe._IsSetGuid=!1;var ve=Fe;var nn=class a{constructor(){this.assets_ary=[];this.assets_contract=null;this.startRecharge=!1}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){typeof window.ethereum>"u"||(y.intance.on(h.EVENT_RECHARGE_GET,this,this.rechargeEnd),this.assets_contract=new window.web3.eth.Contract(le.WITHDRAW_AND_RECHARGE_ABI,le.WITHDRAW_AND_RECHARGE_ADDRESS))}async depositWallet(t,e){if(me.instance.showLoading(!0),!await j.instance.allowanceAddressByTokenAddress(le.WITHDRAW_AND_RECHARGE_ADDRESS,t)){me.instance.hideLoading(),B.instance.notice(d.instance.getLanguage(15));return}return e=window.web3.utils.toWei(e+""),await this.assets_contract.methods.recharge(t.toLowerCase(),e).send({from:j.instance.walletAddress},(n,r)=>{if(n)return me.instance.hideLoading(),!1}),!0}async withdrawToken(t){return me.instance.showLoading(!0),await this.assets_contract.methods.withdrawToken(t.tokenAddress,t.to,t.amount,t.timestamp,t.hash,t.r,t.s,t.v).send({from:j.instance.walletAddress},(e,i)=>{if(e)return me.instance.hideLoading(),!1}),!0}async updateAssetsBalance(){xi.instance.walletDic==null&&(xi.instance.walletDic=new te);for(let t of this.assets_ary){let e=t[0],i=t[1],n=await j.instance.getERC20TokenBalance(i);n=parseInt(n);let r=xi.instance.walletDic.get(e);r||(r=new cs,r.itemId=e,r.value=0,xi.instance.walletDic.set(e,r)),r.ethValue=n}y.intance.event(St.UPDATE_LOCAL_WALLET_LIST_EVENT)}updateCwt(t){let e=xi.instance.walletDic.get(Xt.ASSETS_TOX);e||(e=new cs,e.itemId=Xt.ASSETS_TOX,xi.instance.walletDic.set(Xt.ASSETS_TOX,e)),e.ethValue=t}async rechargeToken(t,e=null,i){try{if(!await j.instance.newAllowanceAddress(i,e.token))return me.instance.hideLoading(),B.instance.notice(d.instance.getLanguage(15)),!1;let o=as(t+"",e.tokenDecimals),s=le.RECHANGE_ABI,l="depositToken";(e.chainId==11155111||e.chainId==1)&&(s=le.RECHANGE_ABI_ETH);var n=await j.instance.walletClient.writeContract({account:j.instance.walletAddress,address:i,abi:s,functionName:l,args:[e.token,o]});this.startRecharge=!0,Laya.timer.once(6e4,this,this.clearRecharge);let c,u=!1;if(c=await j.instance.publicClient.waitForTransactionReceipt({hash:n,pollingInterval:1e3}),c&&c.status=="success"||u){if(!this.startRecharge)return;Laya.timer.clear(this,this.clearRecharge),console.log(`Tx successful with hash: ${n}`);let m=await j.instance.walletClient.getChainId(),g=[m,n];return this.getReward(m,n),Laya.timer.loop(2e3,this,this.getReward,g),Laya.timer.once(6e4,this,this.clearRecharge),n}else{me.instance.hideLoading(),be.TransactionErrorTip();return}}catch(r){me.instance.hideLoading(),console.log(r),r instanceof Error?r.message.includes("does not match the target chain for the transaction")?y.intance.event(h.CHANGE_ASSET_CHAIN):console.log("Error message does not contain the specified character."):console.log("An error occurred, but it is not an instance of Error.")}}async getReward(t,e){let i=await A.requestPost("wxgame/sys/payCallPack",{chainId:t,hashId:e});if(i&&i.coin){Laya.timer.clear(this,this.clearRecharge);let r=i.coin[0];if(!r)return;y.intance.event(St.UPDATE_LOCAL_WALLET_LIST_EVENT);var n=new Di;n.id=r[0],n.count=r[1],me.instance.hideLoading(),H.intance.openModule(f.RewardGetDialog,[n]),this.rechargeEnd()}}rechargeEnd(){L.instance.rechargeEnd=!1,Laya.timer.clear(this,this.getReward)}clearRecharge(){this.startRecharge=!1,me.instance.hideLoading(),B.instance.notice(d.instance.getLanguage(1350)),this.rechargeEnd()}parseGwei(t){return t*1e9}async getAmountsOut(t,e,i,n=void 0){try{let r=18,o=18;n&&(r=n.usdtDecimals,o=n.tokenDecimals);let s=ve.powerOf10(i,r),l;if(t=="BNB"||t=="GALA"?l=await j.instance.publicClient.readContract({address:e,abi:le.PUZZLE_ABI,functionName:"getAmountsOut",args:[s]}):l=await j.instance.publicClient.readContract({address:e,abi:le.PUZZLE_ABI,functionName:"getTokenAmountsOut",args:[s,n.token]}),l){let c=Number(l)/Math.pow(10,o);return console.log(c),c}}catch(r){if(r instanceof Error){let o=r.message;return 0}}return 0}async withdrawAirToken(t,e=null,i,n,r,o,s,l){try{let u;l==1||l==11155111?u=le.PUZZLE_ABI_ETH:u=le.PUZZLE_ABI;var c=await j.instance.walletClient.writeContract({account:j.instance.walletAddress,address:t,abi:u,functionName:"withdrawToken",args:[e,i,n,r,o,s]});return c}catch(u){me.instance.hideLoading(),console.log(u)}}};var tp=hx(q0());var $i=class{static getInviteUrl(){return window.location.origin+"?invite="+this.encode(j.instance.walletAddress)}static encode(t){for(var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=e.length,n=e.split(""),r="",o,s,l,c,u=0;u<t.length;u++)o=t.charCodeAt(u),s=o%i,o=(o-s)/i,l=o%i,o=(o-l)/i,c=o%i,r+=n[c]+n[l]+n[s];return window.btoa(r)}static decode(t){t=window.atob(t);var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=e.length,n,r,o,s,l=0,c;c=new Array(Math.floor(t.length/3)),n=c.length;for(var u=0;u<n;u++)r=e.indexOf(t.charAt(l)),l++,o=e.indexOf(t.charAt(l)),l++,s=e.indexOf(t.charAt(l)),l++,c[u]=r*i*i+o*i+s;return n=decodeCharCode(c.join(",")),n}static getQueryString(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return i!=null?i[2]:""}static getInviteWalletAddress(){let t=this.getQueryString("invite");return t&&(t=this.decode(t)),t}static toWei(t,e){let i=t*10**parseInt(e);return window.web3.utils.toBN("0x"+i.toString(16)).toString()}static fromWei(t,e,i=0){if(!t)return 0;let n=t.length-e+i;if(n<=0)return 0;let r=t.toString().slice(0,n);if(i){let o=r.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";r=s+r}else r=r.slice(0,r.length-i)+"."+r.slice(r.length-i)}return r}static deepClone(t){let e=new te;for(let i in t)typeof t[i]=="function"?e[i]=t[i]:e[i]=JSON.parse(JSON.stringify(t[i]));return e}};var _I=`abdikace
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
`);var xI=`abandon
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
`);var wI=`abaisser
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
`);var II=`abaco
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
`);var EI=`あいこくしん
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
`);var TI=`가격
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
`);var SI=`的
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
`);var CI=`ábaco
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
`);var kI=`的
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
`);h0();Oe();function Qs(){return tt(ig.utils.randomPrivateKey())}var j=class a{constructor(){this.tokenContract=null;this.hero_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){if(typeof window.ethereum>"u"){console.log("2222"),B.instance.notice(d.instance.getLanguage(130));return}console.log("ethereum",window.ethereum),Te.instance.sendCustumEvent(10),this.walletClient=Jr({transport:qr(window.ethereum)});let t=await a.instance.walletClient.getChainId();var e=this.getChain(t);e||(B.instance.notice(d.instance.getLanguage(1171)),e=ot),this.publicClient=os({chain:e,transport:ts()}),this.walletClient=Jr({chain:e,transport:qr(window.ethereum)});let i=await a.instance.publicClient.getChainId();console.log("clientChainId",t,i),await fb(),console.log("5555"),console.log("6666"),Te.instance.sendCustumEvent(12),this.registerProxy(),console.log("7777"),Te.instance.sendCustumEvent(17)}async registerProxy(){console.log("888"),eo.instance.init()}async getWalletAddress(){if(this.walletAddress)return this.walletAddress;let[t]=await this.walletClient.requestAddresses();return console.log("address:"+t),t;if(await fb(),vt.type==vt.TYPE_TRUST)try{console.log("initWeb3 -3");let e=await vt.trustProvider.request({method:"eth_requestAccounts"});return console.log("initWeb3 -4"),console.log(e),e[0]}catch(e){console.log("initWeb3 -5"+e),e.code===4001&&console.error("User denied connection.")}else if(vt.type==vt.TYPE_WEB3)return(await window.ethereum.request({method:"eth_requestAccounts"}))[0];return null}async dappLogin(){console.log("dappLogin this.walletAddress: "+this.walletAddress),Te.instance.sendCustumEvent(13),this.walletAddress=await this.getWalletAddress(),Te.instance.sendCustumEvent(14),console.log("login to server",1),await this.signAndLogin(),console.log("login success",1)}getChainId(){let t="";return typeof window.ethereum>"u"&&(t="0x38"),(window.ethereum.chainId+"").indexOf("0x")==-1?t="0x"+window.ethereum.chainId.toString(16):t=window.ethereum.chainId,t!=="0x38"&&t!=="0x61"&&B.instance.notice(d.instance.getLanguage(18)),t}async signAndLogin(t=!1){console.log("signAndLogin mustSign: "+t);var e=!0;let i=new Date().getTime(),n="",r="",o="",s="";if($.Debug!=0)e=!1;else if(!t&&localStorage.getItem("TOX-COOKIE"+this.walletAddress)&&$.Debug==0){let g=localStorage.getItem("TOX-COOKIE"+a.instance.walletAddress),x=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);x=$i.decode(x);let w=x.split("&");i=parseFloat(w[0]),n=w[1],r=w[2],o=w[3],s=w[4],g&&i&&n&&r&&o&&s&&(e=!1),console.log("needSign: "+e)}if(e){console.log("111");var l=Qs().substring(0,32);n=tt(l,{size:32}),console.log("222"),i=new Date().getTime();let x=this.walletAddress+n+i,w=new tp.default("SHA-256","TEXT",{encoding:"UTF8"});w.update(x);let v=w.getHash("HEX");console.log("进入签名",1);let E=await this.walletClient.signMessage({account:this.walletAddress,message:v});console.log("签名结束",1);let P=E.substring(2);r="0x"+P.substring(0,64),o="0x"+P.substring(64,128),s="0x"+P.substring(128,130)}let c={debug:$.Debug,address:this.walletAddress,time:i,randomHex:n,r,s:o,v:s};Te.instance.sendCustumEvent(15);let u=await A.requestPost("wxgame/player/login",c,!1,!1);if(u){console.log("服务器登录成功"),Te.instance.sendCustumEvent(16),localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,u.loginToken);var m=$i.encode(i+"&"+n+"&"+r+"&"+o+"&"+s);localStorage.setItem("TOX-COOKIE-CODE"+a.instance.walletAddress,m)}else H.intance.openModule(f.NoServerView);y.intance.event(h.EVENT_LOGIN_GAME_END,u)}async main(){let t=os({chain:Ai,transport:ts()}),e=Jr({chain:Ai,transport:qr(window.ethereum)}),i=await t.getBalance({address:"0x55d398326f99059fF775485246999027B3197955"});console.log("balance:"+i);let[n]=await e.requestAddresses();console.log("address:"+n);let r=await e.signMessage({account:n,message:"Hello world!"});console.log("address: "+n),console.log("message: Hello world!"),console.log("signature: "+r);let o=await t.verifyMessage({address:n,message:"Hello world!",signature:r});console.log("valid: "+o);let l=await(await fetch("http://localhost:3000/api/login",{method:"POST",body:JSON.stringify({address:e.account.address,signature:r})})).json();console.log("data: "+l)}async refreshToken(){let t,e=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);e=$i.decode(e);let i=e.split("&"),n=parseFloat(i[0]),r=i[1],o=i[2],s=i[3],l=i[4];if(n&&r&&o&&s&&l){let c={debug:$.Debug,address:this.walletAddress,time:n,randomHex:r,r:o,s,v:l};t=await A.requestPost("wxgame/player/getJwt",c,!1,!1).catch(u=>{}),t&&localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,t.loginToken)}return t}async checkNickName(t){console.log("checkNickName");let e={name:t,address:this.walletAddress};return await A.requestPost("wxgame/player/nameCheck",e,!1,!1).catch(n=>{me.instance.hideLoading(),console.log("checkResult 失败")})}waitGetAccount(){Laya.timer.loop(2e3,this,this.getAcccount)}async getAcccount(){console.log("getAcccount");var t=!0;let e=new Date().getTime(),i="",n="",r="",o="";if($.Debug!=0)t=!1;else{let u=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);u=$i.decode(u);let m=u.split("&");e=parseFloat(m[0]),i=m[1],n=m[2],r=m[3],o=m[4],e&&i&&n&&r&&o&&(t=!1),console.log("needSign: "+t)}if(t){var s=Qs().substring(0,32);i=tt(s,{size:32}),e=new Date().getTime();let m=this.walletAddress+i+e,g=new tp.default("SHA-256","TEXT",{encoding:"UTF8"});g.update(m);let x=g.getHash("HEX");console.log("进入签名",1);let w=await this.walletClient.signMessage({account:this.walletAddress,message:x});console.log("签名结束",1);let v=w.substring(2);n="0x"+v.substring(0,64),r="0x"+v.substring(64,128),o="0x"+v.substring(128,130)}let l,c={address:this.walletAddress,time:e,randomHex:i,r:n,s:r,v:o};if(l=await A.requestPost("wxgame/player/getAccount",c,!1,!1).catch(u=>{}),l){Laya.timer.clear(this,this.getAcccount);let u=l.playerDto;localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,l.loginToken),y.intance.event(h.EVENT_WAIT_PLAYERINFO,u)}}async createAcccount(t,e,i,n){console.log("createAcccount");var r=!0;let o=new Date().getTime(),s="",l="",c="",u="";if($.Debug!=0)r=!1;else{let w=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);w=$i.decode(w);let v=w.split("&");o=parseFloat(v[0]),s=v[1],l=v[2],c=v[3],u=v[4],o&&s&&l&&c&&u&&(r=!1),console.log("needSign: "+r)}if(r){var m=Qs().substring(0,32);s=tt(m,{size:32}),o=new Date().getTime();let v=this.walletAddress+s+o,E=new tp.default("SHA-256","TEXT",{encoding:"UTF8"});E.update(v);let P=E.getHash("HEX");console.log("进入签名",1);let G=await this.walletClient.signMessage({account:this.walletAddress,message:P});console.log("签名结束",1);let q=G.substring(2);l="0x"+q.substring(0,64),c="0x"+q.substring(64,128),u="0x"+q.substring(128,130)}let g,x={name:t,sex:e,icon:i,country:n,debug:$.Debug,address:this.walletAddress,time:o,randomHex:s,r:l,s:c,v:u};if(g=await A.requestPost("wxgame/player/create",x,!1,!1).catch(w=>{}),g){let w=g.playerDto;return localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,g.loginToken),w}return null}async getBalance(){return 0}async allowanceAddress(t){}async newAllowanceAddress(t,e){let i=a.instance.walletAddress,n=t;try{console.log("查看是否已经授权, owner:"+i+", spender:"+n+", publicClient.chain.id:"+this.publicClient.chain.id);let r=await a.instance.publicClient.readContract({address:e,abi:le.TOKEN_ERC20ABI,functionName:"allowance",args:[i,n]});if(r=="0"){console.log("未授权，进行授权, owner:"+i+", allowance:"+r+", walletClient.chain.id:"+this.walletClient.chain.id);let o=await a.instance.walletClient.writeContract({address:e,abi:le.TOKEN_ERC20ABI,functionName:"approve",args:[n,"100000000000000000000000000000000000000000000000"],account:i});console.log("授权hash============"+o);let s=await a.instance.publicClient.waitForTransactionReceipt({hash:o});return console.log(`Tx with hash: ${o}`,s),s&&s.status=="success"?(console.log(`Tx successful with hash: ${o}`),!0):!1}else return console.log("已授权, owner:"+i+", allowance:"+r),!0}catch(r){if(console.log("授权错误====》",r),r instanceof Error){let o=r.message;console.log("授权错误====》",o)}}}async allowanceAddressByTokenAddress(t,e){let i=new window.web3.eth.Contract(le.TOKEN_ERC20ABI,e);return await i.methods.allowance(this.walletAddress,t).call()=="0"&&(console.log("ERC20 allowance!"),await i.methods.approve(t,"100000000000000000000000000000000000000000000000").send({from:this.walletAddress},(r,o)=>{if(r)return me.instance.hideLoading(),!1})),!0}async getERC20TokenBalance(t){return window.ethereum,await new window.web3.eth.Contract(le.TOKEN_ERC20ABI,t).methods.balanceOf(this.walletAddress).call()}async getBalance2(t,e=void 0){console.log("getBalance2 publicClient.chain.id:"+this.publicClient.chain.id);let i=this.walletAddress;return e&&(i=e),await this.publicClient.readContract({address:t,abi:le.TOKEN_ERC20ABI,functionName:"balanceOf",args:[i]})}async getContractBalance(t,e,i){if(i=="WBNB"){let n=await a.instance.publicClient.getBalance({address:e});if(n)return n}else{let n=this.getBalance2(t,e);if(n)return n}}async getHeroStatus(t){return await this.hero_contract.methods.getStatus(parseInt(t)).call()}async checkHeroIsBuzy(t){let e=await this.getHeroStatus(t);return parseInt(e)?(B.instance.notice(d.instance.getLanguage(19)),!0):!1}async switchChain(t){var e=this.getChainName(t);let i=await a.instance.walletClient.getChainId();if($.isInto&&Laya.Browser.onIOS&&i!==t)return B.instance.notice(d.instance.getLanguage(1172,e)),!1;try{console.log("switchChain id:"+t),await this.walletClient.switchChain({id:t})}catch(n){if(console.log(n),n instanceof Error){let r=n.message;console.log("切换错误====》",r)}return B.instance.notice(d.instance.getLanguage(1172,e)),!1}return await this.resetPublicAndWallet(t),!0}async addChain(t){console.log(t);let e=null;switch(t){case 97:e=Tt;break;case 9001:e=ot;break;case 56:e=Yi}let i=await this.walletClient.addChain({chain:e});console.log(i)}getChainNameByID(t){for(let e in bi)if(Number(bi[e])==t)return e;return""}getChain(t){var e=null;switch(t){case Tt.id:e=Tt;break;case ot.id:e=ot;break;case Ai.id:e=Ai;break;case Yi.id:e=Yi;break}return e}getChainName(t){var e="";switch(t){case Tt.id:e=Tt.name;break;case ot.id:e=ot.name;break;case Ai.id:e=Ai.name;break;case Yi.id:e=Yi.name;break}return e}async resetPublicAndWallet(t){switch(console.log("resetPublicAndWallet chain:"+t),t){case Tt.id:await a.instance.reInitPublicClient(Tt),await a.instance.reInitWalletClient(Tt);break;case ot.id:await a.instance.reInitPublicClient(ot),await a.instance.reInitWalletClient(ot);break;case Ai.id:await a.instance.reInitPublicClient(Ai),await a.instance.reInitWalletClient(Ai);break;case Yi.id:await a.instance.reInitPublicClient(Yi),await a.instance.reInitWalletClient(Yi);break;case ls.id:await a.instance.reInitPublicClient(ls),await a.instance.reInitWalletClient(ls);break}}reInitPublicClient(t){console.log("reInitPublicClient chain:"+t),this.publicClient=os({chain:t,transport:ts()})}reInitWalletClient(t){console.log("reInitWalletClient chain:"+t),this.walletClient=Jr({chain:t,transport:qr(window.ethereum)})}async getAuthStatus(){let t=a.instance.walletAddress;try{return await a.instance.publicClient.readContract({address:le.SAT_ADDRESS,abi:le.SAT_ABI,functionName:"getAuthStatus",args:[t]})}catch(e){if(console.log("授权错误====》",e),e instanceof Error){let i=e.message;console.log("授权错误====》",i)}}}};var W0=Laya.HttpRequest,Kt=class Kt{static requestGet(t,e,i=!1,n=!0,r=!1){return new Promise((o,s)=>{var l=Laya.Pool.getItem("HttpRequest");l||(l=new W0),l.http.timeout=2e3,l.on(Laya.Event.COMPLETE,null,x),l.on(Laya.Event.ERROR,null,w),l.http.onreadystatechange=()=>{if(l.http.readyState===XMLHttpRequest.DONE){var E=l.http.status;E>=200&&E<400||(s(),v())}};let c=localStorage.getItem("TOX-COOKIE"+j.instance.walletAddress),u=["Content-Type","application/json"];c&&(u=[...u,"Authorization",c]);let m;t.startsWith("http")?(m=t+g(e),l.send(t,e,"post","json",u)):m=Kt.httpRoot+"/"+t+g(e),Kt.httpRoot!="https://api.phantomarena.co"&&ci.log("REQUEST_GET "+m,1),l.send(m,null,"get","json",u);function g(E){if(typeof E=="string")return E;let P="";for(let G in E)P+="&"+G+"="+E[G];return P}function x(E){E.code==="0"?o(E.data):(pe.instance.showErrorWord(parseInt(E.code)),s(E.code)),v()}function w(E,P){debugger;s(E),v()}function v(){l.off(Laya.Event.COMPLETE,null,x),l.off(Laya.Event.ERROR,null,w),Laya.Pool.recover("HttpRequest",l)}})}static startHeart(){Laya.stage.on(Laya.Event.BLUR,this,()=>{this.stopHeartInStage=!0,console.log("失去焦点, 停止心跳")}),Laya.stage.on(Laya.Event.FOCUS,this,()=>{this.stopHeartInStage=!1,console.log("获取焦点, 开始心跳")}),Laya.timer.loop(3e3,this,this.onHeart)}static async onHeart(){if(!Kt.needHeart||this.stopHeartInStage||this.stopHeartInRoom)return;let t=new Date().getTime();var e=await this.requestPost("wxgame/sys/ping",{},!0,!0),n=new Date().getTime()-t;y.intance.event(h.EVENT_Game_Delay,n);var r=e.time;L.instance.m_serverTime=r;var o=e.resChange;L.instance.playerDto.fightHeroPk=e.fightHeroPk;var s=e.itemChange,l=!1;o&&o.length>0&&(l=!0,L.instance.moneyInfoHander(o,!0,!1),y.intance.event(St.UPDATE_LOCAL_WALLET_LIST_EVENT),y.intance.event(h.REFRESH_ALL_WITHDRAW_DATA)),s&&s.length>0&&(l=!0,L.instance.itemsDataUpdataHandler(s,!0,!1)),e.redPoint&&(L.instance.redDotData=e.redPoint),l&&console.log("onHeart: data =============> ",e)}static requestPost(t,e,i=!1,n=!0,r=!1){let o=localStorage.getItem("TOX-COOKIE"+j.instance.walletAddress);return i&&!o?[]:new Promise((s,l)=>{var c=Laya.Pool.getItem("HttpRequest");c||(c=new W0),c.http.timeout=1e4,c.once(Laya.Event.COMPLETE,null,g),c.once(Laya.Event.ERROR,null,x);let u=[];o&&n&&(u=[...u,"Authorization",o]);var m=Kt.seq+1;Kt.seq=m,$.Debug>0&&t!="wxgame/sys/ping"&&console.log(be.GetLogTime+" "+m+" >>> HTTP_POST "+Kt.httpRoot+"/"+t+" "+JSON.stringify(e),o),t.startsWith("http")?c.send(t,e,"post","json",u):c.send(Kt.httpRoot+"/"+t,e,"post","json",u);async function g(v){if($.Debug>0&&t!="wxgame/sys/ping"&&console.log(be.GetLogTime+" "+m+" <<< hTTP_RCV data: "+JSON.stringify(v),1),v.errorCode==0||v.errorCode==="0")s(v);else{if(v.errorCode===10)be.heroNotEnought();else if(v.errorCode===18)be.titickNotEnought();else if(v.errorCode===26)be.RemError();else if(v.errorCode!==29)if(v.errorCode===30)be.NoHeroError(pe.instance.get(v.errorCode));else if(v.errorCode===32)be.NoHeroError(pe.instance.get(v.errorCode));else if(v.errorCode===2||v.errorCode===21)be.alertNoAll(pe.instance.get(v.errorCode));else if(v.errorCode===5)if($.Debug==0){localStorage.setItem("TOX-COOKIE"+j.instance.walletAddress,"");var E=await j.instance.refreshToken();E&&Kt.requestPost(t,e,i,n)}else localStorage.setItem("TOX-COOKIE"+j.instance.walletAddress,""),pe.instance.showErrorWord(parseInt(v.errorCode));else v.errorCode===17?$.Debug==0?(localStorage.setItem("TOX-COOKIE"+j.instance.walletAddress,""),j.instance.signAndLogin(),pe.instance.showErrorWord(parseInt(v.errorCode))):(localStorage.setItem("TOX-COOKIE"+j.instance.walletAddress,""),pe.instance.showErrorWord(parseInt(v.errorCode))):v.errorCode===9?(Xe.instance.close(),be.commTipWithYes(pe.instance.get(v.errorCode))):v.errorCode===51?be.commTipWithYes(pe.instance.get(v.errorCode)):r||pe.instance.showErrorWord(parseInt(v.errorCode),v.errorParams);l(v.errorCode)}w()}function x(v,E){console.log("errorHandler data: "+v,1),r||pe.instance.showErrorWord(500),l(v),w()}function w(){c.off(Laya.Event.COMPLETE,null,g),c.off(Laya.Event.ERROR,null,x),Laya.Pool.recover("HttpRequest",c)}})}};Kt.httpRoot=getServer(),Kt.needHeart=!0,Kt.stopHeartInRoom=!1,Kt.stopHeartInStage=!1,Kt.seq=0;var A=Kt;var z=class a{constructor(){this._inited=!1;this.stopAll=!1;this.heroReadyDic=new te;this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}get matchDto(){return this._matchDto}set matchDto(t){this._matchDto=t,t&&t.startTime-t.nowTime>0?this.stopAll=!0:this.stopAll=!1}setMatchRes(){this.heroReadyDic=new te;var t=this.roomDto.members.length,e=[],i=this.currArenaItem.mapid;if(this.heroReadyDic.get("map_"+i)==null){var i=a.instance.currArenaItem.mapid,n=C.instance.getMapImg(i);e.push(n);var r=C.instance.getMapPrefab(i);e.push(r),this.heroReadyDic.set("map_"+i,!0)}for(var o=0;o<t;o++){var s=this.roomDto.members[o];if(this.heroReadyDic.get(s.heroId+"_"+s.heroColor)==null){var l=R.intance.m_dicHeros.get(s.heroId),c=C.instance.getHeroSkRes(l.serialId,s.heroColor);e.push({url:c,type:Laya.Loader.SPINE}),this.heroReadyDic.set(s.heroId+"_"+s.heroColor,!0)}}e.length>0&&Laya.loader.load(e,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{})}onPreAssetPress1(t){}async checkMatchRankData(){if(this.reward==null){let t=await A.requestPost("wxgame/room/balanceInfo",{roomId:a.instance.matchDto.roomId});this.onGoMatchEndRank(t)}}onGoMatchEndRank(t){var e=t.rankList,i=t.reward,n=t.groupData;yt.instance.isMatching=!1,this.reward==null&&(a.instance.reward=i,H.intance.openModule(f.MatchEndRankView,[e,n]))}clearData(){this.roomDto=null,this.matchDto=null,this.reward=null,this.playerJoinDic=null,this.playerEndDic=null,this.heroReadyDic=null,this.currArenaItem=null,U.instance.clearData(),A.needHeart=!0,Ne.instance.playMusicByName(Ne.soundName_bg,".mp3"),je.instance.needPop=!0,$t.instance.startShow()}};var Dt=class a{constructor(){}static judgePosition(t,e){let i=Math.atan2(e,t)*180/Math.PI;return i<0&&(i+=360),Math.floor(i)}static distancePoint(t,e,i,n){return Math.sqrt((t-i)*(t-i)+(e-n)*(e-n))}get2D_Distance(t,e){return Math.sqrt(Math.pow(Math.abs(t),2)+Math.pow(Math.abs(e),2))}static rollCharacterByDir(t,e,i,n){let r=i;return a.rollCharacter(t,e,r,n)}static rollCharacter(t,e,i,n){let r=i*(Math.PI/180);var o=t+n*Math.cos(r),s=e+n*Math.sin(r),l=z.instance.currArenaItem.mapid,c=R.intance.m_dicMaps.get(l),u=c.offset;return o<u?o=u:o>c.width-u&&(o=c.width-u),s<u?s=u:s>c.height-u&&(s=c.height-u),console.log(`新的坐标：X=${o}, Y=${s}`),[o,s]}static createDirectPath(t,e,i,n=40,r=25){for(var o=[],s=i*Math.PI/180,l=1;l<n;++l){var c=t,u=e+r*l,m=-(u-e)*Math.sin(s)+t,g=(u-e)*Math.cos(s)+e;o.push(m,g)}return o}static pointsBack(t,e){if(e<=0||!t||t.length<4)return t;for(var i=0,n=-1,r=-1,o=0;o<t.length;o+=2){var s=t[o],l=t[o+1];n>0&&r>0&&(i+=this.distancePoint(n,r,s,l)),n=s,r=l}if(i<e)return null;for(var c=t.concat(),u=0,m=0;c&&c.length>=4&&u<e;){var g=c.pop(),x=c.pop(),w=c[c.length-1],v=c[c.length-2];if(u+=this.distancePoint(v,w,x,g),m=u-e,m>0){var E=Math.atan2(w-g,v-x),P=E*180/Math.PI+90;E=P*Math.PI/180;var G=w+m,q=-(G-w)*Math.sin(E)+v,Q=(G-w)*Math.cos(E)+w;c.push(q,Q)}}return c}static createLinePath(t,e,i,n,r=25,o=0){var s=[],l=Math.atan2(n-e,i-t);l=(l*180/Math.PI-90)*Math.PI/180;for(var c=this.distancePoint(t,e,i,n)-o,u=0,m=0;c>u;){var g=t,x=e+r*m,w=-(x-e)*Math.sin(l)+t,v=(x-e)*Math.cos(l)+e;u=this.distancePoint(t,e,w,v),c>u&&s.push(w,v),m++}return o==0&&s.push(i,n),s}static rolePosTransform(t,e,i){var n=new Laya.Matrix;return n.rotate(Math.PI/180*(t.modelAngle-90)),n.translate(e.x,e.y),n.transformPoint(i)}static pointtInPolygon(t,e){for(var i=0,n=0;n<e.length;n++){var r=e[n],o=e[(n+1)%e.length];if(r.y!=o.y&&!(t.y<Math.min(r.y,o.y))&&!(t.y>=Math.max(r.y,o.y))){var s=(t.y-r.y)*(o.x-r.x)/(o.y-r.y)+r.x;s>t.x&&i++}}return i%2==1}static pointInPie(t,e,i,n,r,o){var s=Math.atan2(o.y-e,o.x-t)*180/Math.PI,l=this.distancePoint(t,e,o.x,o.y);return s>=i&&s<=n&&l<=r}static getRandInRound(t,e){return Math.floor(Math.random()*(e-t+1))+t}static getUnitVector(t){let i=t*(Math.PI/180),n=1*Math.cos(i),r=1*Math.sin(i);return new Laya.Point(n,r)}static subtract(t,e){let i=new Laya.Point;return i.x=t.x-e.x,i.y=t.y-e.y,i}};var ei=class ei{constructor(){this.arenaType=1;this.validEnemyList=[];this.gameWindowX=0;this.gameWindowY=0;this.isControl=!1}get gameMap(){return this._gameMap}set gameMap(t){this._gameMap=t}clearData(){this.gameMap=null,this.box_players=null,this.myHeroSpr=null,this.matchHeroSmallDic=null,this.matchHeroSprDic=null,this.matchHeroSprs=null,this.matchHeroDic=null,this.myPlayer=null,this.allOrders=null}static get instance(){return ei._instance==null&&(ei._instance=new ei),ei._instance}init(){this.validEnemyList=[]}insertValidList(t){this.isFInd(t,this.validEnemyList)||this.validEnemyList.push(t)}isFInd(t,e){var i=!1;(!t||!e||e.length<=0)&&(i=!1);for(let n=0;n<e.length;n++)if(e[n]==t)return!0;return i}isFIndIndex(t,e){var i=-1;(!t||!e||e.length<=0)&&(i=-1);for(let n=0;n<e.length;n++)e[n]==t&&(i=n);return i}removeValidListByValue(t){if(!(!t||!this.validEnemyList||this.validEnemyList.length<=0)){var e=this.isFIndIndex(t,this.validEnemyList);e!=-1&&this.validEnemyList.splice(e,1)}}initMatch(t,e){Laya.loader.load("scenes/match/MatchHeroSpr.lh").then(i=>{this.roleAniPrefab=i,this.createPlayers(t),e&&e(t)})}updateMatch(t,e){this.updatePlayers(),e&&e(t)}createPlayers(t){this.matchHeroDic=new te,this.matchHeroSprDic=new te,this.matchHeroSmallDic=new te,this.matchHeroSprs=[],this.allOrders||(this.allOrders=[]);let e=z.instance.matchDto.members.length;for(var i=0;i<e;i++){var n=z.instance.matchDto.members[i],r=new Laya.Image;r.anchorX=0,r.anchorY=0,r.skin="res/match1/img_point_1.png",t.img_smallMap.addChild(r),this.matchHeroSmallDic.set(n.id,r);let o=this.roleAniPrefab.create();o.dataSource=n,L.instance.playerDto.pid==n.id&&(this.myPlayer=n,r.skin="res/match1/img_point_2.png",this.setCurrentHero(o)),this.matchHeroDic.set(n.id,n),this.box_players.addChild(o),this.matchHeroSprs.push(o),this.allOrders.push(o),this.matchHeroSprDic.set(n.id,o)}}updatePlayers(){this.matchHeroSprs=[];let t=z.instance.matchDto.members.length;for(var e=0;e<t;e++){var i=z.instance.matchDto.members[e];let n=this.matchHeroSprDic.get(i.id);n.dataSource=i,L.instance.playerDto.pid==i.id&&(this.myPlayer=i,this.setCurrentHero(n)),this.matchHeroDic.set(i.id,i),this.matchHeroSprs.push(n)}}addPlayer(t){if(t.type==1){if(this.matchHeroSprs){if(L.instance.playerDto.pid==t.member.id){console.log("自己不处理 :"+t.member.id);return}let e=this.getRoleById(t.member.id);if(e)e.dataSource=t.member,e.alpha=1;else{let i=this.roleAniPrefab.create();i.dataSource=t.member,this.box_players.addChild(i),this.matchHeroSprs.push(i)}}}else this.removeRoleById(t.member.id)}onSendMove(t,e,i,n,r,o,s){if(L.instance.playerDto.pid==e){let l=new Uu;l.time=t,l.speed=i,l.dire=n,l.x=r,l.y=o,l.area=s,yt.instance.sendData(l)}}onSendTargetMove(t,e,i,n,r,o=0){if(L.instance.playerDto.pid==e){let s=new Qu;s.time=t,s.targetId=i,s.targetX=n,s.targetY=r,s.skillId=o,s.sourceId=e,yt.instance.sendData(s)}}onSendAnimation(t,e,i=-1,n=-1,r=-1){let o=new $u;o.skillId=t,o.type=e,o.targetId=i,o.param.set("newX",`${n}`),o.param.set("newY",`${r}`),yt.instance.sendData(o)}onRevAnimationPush(t){var e=ei.instance.getRoleById(t.attId);t.attId!=L.instance.playerDto.pid&&e.attack(t.skillId,!1,t.param)}onSendAttack(t,e,i){let n=new Gu;n.targetId=t,n.attackType=e,n.skillId=i,yt.instance.sendData(n)}onRevMovePush(t){if(!(t==null||t.pid==L.instance.playerDto.pid)){var e=ei.instance.getRoleById(t.pid);e?e.onPushMoveData(t.time,t.speed,t.dire,t.x,t.y,t.area):console.log(t.pid+" sprite is null")}}onRevTargetMovePush(t){if(t.sourceId!=L.instance.playerDto.pid){var e=ei.instance.getRoleById(t.targetId);e?e.onPushTargetMoveData(t.time,t.targetX,t.targetY):console.log(t.targetId+" sprite is null")}}onRevAttackPush(t){var e=ei.instance.getRoleById(t.attPid);if(t.attPid!=L.instance.playerDto.pid){var i=R.intance.m_dicSkills.get(t.skill);i.type!=5&&e.attack(t.skill,!1)}var n=ei.instance.getRoleById(t.defPid);n.takeDamage(t,e);var r=this.matchHeroDic.get(t.attPid),o=this.matchHeroDic.get(t.defPid);if(r.score=t.attScore,o.score=t.defScore,t.defHp<=0){var r=this.matchHeroDic.get(t.attPid);r.kill++}y.intance.event(h.UPDATE_KILL_NUM)}sendRestoreData(){if(z.instance.reward==null){let t=new qu;yt.instance.sendData(t)}}onRevRestorePush(t){z.instance.matchDto=t,y.intance.event(h.EVENT_RESTORE_DATA),t&&t.startTime-t.nowTime<=0&&H.intance.disposeView(f.MatchReadyView)}getRoleById(t){let e;return this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==t){e=i;return}}),e}removeRoleById(t){var e;this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==t){e=i,i.speed=0,i.alpha=.3;return}})}getValidList(){return this.validEnemyList}playMusic(){Ne.instance.playMusicByURL("mp3/battle.mp3"),je.instance.needPop=!1}playSound(t){var e="";t==1?e="resources/music/pugong":t==2?e="resources/music/enemyHit":t==3&&(e="resources/music/dazhao"),Ne.instance.playSound(e+".wav",1)}setCurrentHero(t){t.isMe=!0;var e=this.myHeroSpr==null;this.myHeroSpr=t,ei.instance.moveGameWindow(!0),this.myHeroSpr.initBirth(e)}getAttackTarget(t){console.log("getAttackTarget");var e=t.distance,i=t.targetsType;if(i==1){let r=new Laya.Point(this.myHeroSpr.x,this.myHeroSpr.y),o=Dt.getUnitVector(this.myHeroSpr.roleDirection);var n=[];return this.matchHeroSprs&&this.matchHeroSprs.forEach(s=>{if(!s._isDead&&!s.isMe){var l=this.getEnemyDistance(s);if(l<=e){let c=new Laya.Point(s.x,s.y),u=Dt.subtract(c,r);u.x*o.x+u.y*o.y>0&&n.push(s)}}}),n}else if(i==2){let r,o=1e4;if(this.matchHeroSprs&&this.matchHeroSprs.forEach(s=>{if(!s._isDead&&!s.isMe){var l=this.getEnemyDistance(s);l<=e&&l<o&&this.canAttack(this.myHeroSpr,s)&&(r=s,o=l)}}),r)return[r]}return[]}getEnemyDistance(t){return Math.sqrt(Math.pow(t.x-this.myHeroSpr.x,2)+Math.pow(t.y-this.myHeroSpr.y,2))}canAttack(t,e){let i=new Laya.Vector2;i.x=e.x-t.x,i.y=e.y-t.y;let n=Dt.getUnitVector(this.myHeroSpr.roleDirection),r=Math.atan2(i.y,i.x)-Math.atan2(n.y,n.x);r<0&&(r+=2*Math.PI),r=r*180/Math.PI,console.log("angle 2: "+r);let o=90;return r<o||r>360-o}canTui(t,e){let i=new Laya.Vector2;i.x=e.x-t.x,i.y=e.y-t.y;let n=Dt.getUnitVector(this.myHeroSpr.roleDirection),r=Math.atan2(i.y,i.x)-Math.atan2(n.y,n.x);r<0&&(r+=2*Math.PI),r=r*180/Math.PI,console.log("angle 2: "+r);let o=45;return r<o||r>360-o}setMyHeroDirection(t){this.myHeroSpr&&(t!=-4?(this.myHeroSpr.myRoleDirection=t,this.myHeroSpr.speed=this.myHeroSpr.moveSpeed,this.myHeroSpr.inControl=!0,this.isControl=!0):(this.myHeroSpr.speed=0,this.myHeroSpr.inControl=!1,this.isControl=!1))}moveGameWindow(t=!1){if(this.myHeroSpr){this.gameWindowX=this.myHeroSpr.x-Laya.stage.width/2,this.gameWindowY=this.myHeroSpr.y-Laya.stage.height/2;var e=-this.gameWindowX,i=-this.gameWindowY,n=Laya.stage.width-this.gameMap.width,r=Laya.stage.height-this.gameMap.height;e>0?e=0:e<n?e=n:e=e,i>0?i=0:i<r?i=r:i=i,t?this.gameMap.pos(e,i,!0):Laya.Tween.to(this.gameMap,{x:e,y:i},500)}}};ei._instance=null;var U=ei;var st=class st{constructor(){this.resArr=["gameIcon/map/1001/img_map.jpg","gameIcon/map/1002/img_map.jpg",{url:"gameIcon/map/map_1001.lh",type:Laya.Loader.HIERARCHY},{url:"gameIcon/map/map_1002.lh",type:Laya.Loader.HIERARCHY},"res/common/comm_bg/img_com_bg.jpg","res/common/comm/img_bg_large.png","res/common/comm/img_bg_medium.png","res/common/comm/img_bg_small.png",{url:"res/common.atlas",type:Laya.Loader.ATLAS},{url:"gameIcon/effect/match/beiji/spine.sk"},{url:"gameIcon/effect/match/dunpai/spine.sk"},{url:"gameIcon/effect/ruchang/effect1.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect2.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect3.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/hua/effect.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_3.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_4.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_5.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_6.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_4.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_5.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_6.skel",type:Laya.Loader.SPINE},{url:"scenes/mainView/MainScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/shop/ShopScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/hero/MyHeroScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/Match.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchHeroSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/DamageNumber.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/EnterRoomSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/notice/TxtLoadingView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/notice/TxtNoticeView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/BarrageSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/CreateRoomDialog.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/EnterRoomView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndRankView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchReadyView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndView.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/closeBtn.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/defaultButton.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/DropBox.lh",type:Laya.Loader.HIERARCHY},{url:"resources/sound/destroy.wav",type:Laya.Loader.BUFFER},{url:"resources/sound/hit.wav",type:Laya.Loader.BUFFER}];this.m_arrPreResource=["config/spot.json","config/scene.json"];this.m_arrInitResource=["config/general.json","config/head.json","config/iconBadge.json","config/country.json","config/expression.json","config/fontColor.json","config/variable.json","config/equip.json","config/shop.json","config/union.json","config/hero.json","config/skill.json","config/buff.json","config/item.json","config/arena.json","config/arenaType.json","config/node.json","config/map.json","config/level.json","config/welfarebag.json","config/mailmessage.json","config/currencyAddress.json","config/aCoin.json","config/coinAddress.json","config/buyHeroes.json","config/puzzleExchange.json","config/DropCashAddress.json"];this.m_objModuleReource={FindScene:["res/atlas/find.atlas"],MainScene:[],ShopScene:[],RankScene:[],GetMatScene:[],OpenGameScene:[],ScholarshipScene:[],FriendScene:[],CommentDialog:["res/atlas/comment.atlas"],GuideView:["res/atlas/guide.atlas","res/atlas/ShopView.atlas","config/newplayer.json"],ShareView:["res/atlas/share.atlas"],SelectHeadDialog:[],UnionApplyDialog:["config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json"],GuildScene:["res/atlas/union.atlas","config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json","config/guild_apply.json","config/guild_contrubute.json"],UnionWarScene:["res/atlas/unionWar.atlas","config/resource_node.json"],HeroScene:["res/atlas/hero.atlas","config/hero_lv.json","config/hero_attup.json","res/atlas/equip.atlas"],AFKBattleScene:["res/atlas/battle.atlas"],ArenaScene:["res/atlas/Arena.atlas"],MailScene:[],KnapsackScene:["res/atlas/mainUI1.atlas"],UnionScene:["res/union1.atlas"]};this.m_objModuleViews={NoServerView:"scenes/createRole/NoServer.lh",CreateLoginView:"scenes/createRole/CreateLoginView.lh",ChangeHeadDialog:"scenes/createRole/ChangeHeadDialog.lh",HeroGetDialog:"scenes/shop/HeroGetDialog.lh",ItemGetDialog:"scenes/item/ItemGetDialog.lh",RewardGetDialog:"scenes/item/RewardGetDialog.lh",KnapsackTipDialog:"scenes/item/KnapsackTipDialog.lh",SelectHeadDialog:"scenes/createRole/SelectHeadDialog.lh",TxtNoticeView:"scenes/notice/TxtNoticeView.lh",NoticeDialog:"scenes/notice/NoticeDialog.lh",HelpDialog:"scenes/notice/HelpDialog.lh",ChampDetailDialog:"scenes/asset/ChampDetailDialog.lh",ChampRecordDialog:"scenes/asset/ChampRecordDialog.lh",RoleInfoDialog:"scenes/createRole/RoleInfoDialog.lh",RemGetDialog:"scenes/createRole/RemGetDialog.lh",CreateRoomDialog:"scenes/mainView/CreateRoomDialog.lh",EnterRoomView:"scenes/mainView/EnterRoomView.lh",InputPwdDialog:"scenes/mainView/InputPwdDialog.lh",HeroDetailDialog:"scenes/hero/HeroDetailDialog.lh",MatchEndRankView:"scenes/match/MatchEndRankView.lh",UnionMemberView:"scenes/union/UnionMemberView.lh",UnionListView:"scenes/union/UnionListView.lh",CreateSubUnionView:"scenes/union/CreateSubUnionView.lh",ChangeUnionIconDialog:"scenes/union/ChangeUnionIconDialog.lh",MySubUnionView:"scenes/union/MySubUnionView.lh",UnionMemberApplyView:"scenes/union/UnionMemberApplyView.lh",UnionReferralView:"scenes/union/UnionReferralView.lh",UnionTransferView:"scenes/union/UnionTransferView.lh",TicketTransferView:"scenes/union/TicketTransferView.lh",HeroTransferView:"scenes/hero/HeroTransferView.lh",MatchReadyView:"scenes/match/MatchReadyView.lh",MatchEndView:"scenes/match/MatchEndView.lh",GameSettingLanguageDialog:"scenes/gameSetting/GameSettingLanguageDialog.lh",SkillTipDialog:"scenes/hero/SkillTipDialog.lh",TransferRecordDialog:"scenes/hero/TransferRecordDialog.lh",BaseAlertDialog:"scenes/baseAlert/BaseAlertDialog.lh",MatchConfimDialog:"scenes/baseAlert/MatchConfimDialog.lh",CreateSubWalletDialog:"scenes/scholarship/CreateSubWalletDialog.lh",WalletChooseHeroDialog:"scenes/scholarship/WalletChooseHeroDialog.lh",WalletChoosePropsDialog:"scenes/scholarship/WalletChoosePropsDialog.lh",EmployInfoDialog:"scenes/scholarship/EmployInfoDialog.lh",HireDetailDialog:"scenes/asset/HireDetailDialog.lh",ProxyDetailDialog:"scenes/asset/ProxyDetailDialog.lh",WithDrawRecordDialog:"scenes/asset/WithDrawRecordDialog.lh",RentalRecordDialog:"scenes/scholarship/RentalRecordDialog.lh",PrivateChatDialog:"scenes/friend/PrivateChatDialog.lh",AirdropRecordDialog:"scenes/asset/AirdropRecordDialog.lh"};this.m_objConfigReource={};this.m_commonResource=new te;this.loadingView=Laya.Browser.window.loadingView;this.ii=100;this.baseUrl="https://cdn-5ejmbrg9nhxc.vultrcdn.com/hero/";if(st._instance)throw new Error("LayerManager是单例,不可new.");st._instance=this}static get instance(){return st._instance==null&&(st._instance=new st),st._instance}init(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),this.initGameLanguage()}initGameLanguage(){st.GameLanguage_URL="config/language.json",Laya.loader.load(st.GameLanguage_URL,Laya.Handler.create(this,this.initGameResource))}initGameResource(t){if(t==null)return;let e=st.instance.getResBySetURL(st.GameLanguage_URL);d.instance.initLanTypes(e.data),Laya.loader.clearRes(st.GameLanguage_URL),this.onConfigLoaded()}onError(t){}onConfigLoaded(){let t=new ia;t.ID=4,t.Event="加载语言包信息",Te.instance.sendCustumEvent(4,null,t),$.ignoreLang||(L.instance.m_strLanguage=d.instance.getLanIdByType($.User_Lan)),this.m_UILang="config/lang_english"+L.instance.m_strLanguage+".json",this.m_NomalLang="config/english"+L.instance.m_strLanguage+".json",this.m_NomalLang1="config/english1.json",this.m_ErrorLang="config/error"+L.instance.m_strLanguage+".json",this.m_arrPreResource.push(this.m_UILang),this.m_arrPreResource.push(this.m_NomalLang),this.m_arrPreResource.push(this.m_NomalLang1),this.m_arrPreResource.push(this.m_ErrorLang),this.initResourceURL(this.m_arrPreResource,!0),this.initResourceURL(this.m_arrInitResource,!0),this.addFont1()}addFont1(){Laya.loader.load("res/font/CookieRun Regular.otf",Laya.Loader.TTF).then(()=>{this.loadDemoResource()})}loadDemoResource(){Laya.loader.load(this.resArr,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{me.instance.init(),U.instance.damageNumPrefab=Laya.loader.getRes("scenes/match/DamageNumber.lh"),Xe.instance.enterRoomPrefab=Laya.loader.getRes("scenes/mainView/EnterRoomSpr.lh"),Xe.instance.barrageSprPrefab=Laya.loader.getRes("scenes/mainView/BarrageSpr.lh"),U.instance.roleAniPrefab=Laya.loader.getRes("scenes/match/MatchHeroSpr.lh"),U.instance.ruchangEffects=[Laya.loader.getRes("gameIcon/effect/ruchang/effect1.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect2.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect3.skel")],U.instance.huaEffect=Laya.loader.getRes("gameIcon/effect/hua/effect.skel"),U.instance.beijiTemplet=Laya.loader.getRes("gameIcon/effect/match/beiji/spine.sk"),U.instance.dunpaiTemplet=Laya.loader.getRes("gameIcon/effect/match/dunpai/spine.sk"),U.instance.diquanEffect3=Laya.loader.getRes("gameIcon/effect/diquan/img_3.skel"),U.instance.diquanEffect4=Laya.loader.getRes("gameIcon/effect/diquan/img_4.skel"),U.instance.diquanEffect5=Laya.loader.getRes("gameIcon/effect/diquan/img_5.skel"),U.instance.diquanEffect6=Laya.loader.getRes("gameIcon/effect/diquan/img_6.skel"),U.instance.baoqiEffect4=Laya.loader.getRes("gameIcon/effect/baoqi/img_4.skel"),U.instance.baoqiEffect5=Laya.loader.getRes("gameIcon/effect/baoqi/img_5.skel"),U.instance.baoqiEffect6=Laya.loader.getRes("gameIcon/effect/baoqi/img_6.skel");var t=U.instance.roleAniPrefab.create();console.log(" ================ roleAniPrefab: "+t),this.onLoadThreeDimen()})}onLoadThreeDimen(){Laya.loader.load(this.m_arrPreResource,Laya.Handler.create(this,this.onPreAssetLoaded),Laya.Handler.create(this,this.onPreAssetPress2,null,!1))}onPreAssetPress1(t){this.va=(t*100*.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetPress2(t){this.va=(t*100*.5+.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetLoaded(t){if(!t)return;let e=Laya.Browser.now();Yn.instance.initSpotCfgData(),this.initResourceURL(this.m_objModuleReource),this.initResourceURL(this.m_objConfigReource),Te.instance.sendCustumEvent(5),R.intance.preInit(),this.setGlobalLanguage(),Te.instance.sendCustumEvent(6),y.intance.event(h.EVENT_BACK_TO_LOGIN),fe.intance.initPreload(),this.loadingView&&this.loadingView.loading(100),console.log("-----------------------preload-time:"+(Laya.Browser.now()-e))}setGlobalLanguage(){let t=st.instance.getResByURL(this.m_NomalLang);d.instance.initConfigLan(t.data);let e=st.instance.getResByURL(this.m_NomalLang1);d.instance.initConfigLan1(e.data);let i=st.instance.getResByURL(this.m_UILang);d.instance.initUILan(i.data);let n=st.instance.getResByURL(this.m_ErrorLang);pe.instance.initErrData(n.data),this.clearResUrlByRoot(this.m_UILang,!0),this.clearResUrlByRoot(this.m_NomalLang,!0),this.clearResUrlByRoot(this.m_NomalLang1,!0),this.clearResUrlByRoot(this.m_ErrorLang,!0)}initResourceURL(t,e=!1){if(t instanceof Array)this.setResURLArr(t,e);else if(t instanceof Object)for(let i in t)this.setResURLArr(t[i],e)}setResURLArr(t,e){let i,n;for(let r=0;r<t.length;r++)e?(this.m_commonResource.set(t[r],!0),n=this.setResURL(t[r]),i=this.getTypeFromUrl(n),t[r]={url:n,type:i,size:1,priority:1}):this.m_commonResource.get(t[r])?(t.splice(r,1),r--):(n=this.setResURL(t[r]),i=this.getTypeFromUrl(n),t[r]={url:n,type:i,size:1,priority:1})}getTypeFromUrl(t){let{ext:e,typeId:i,main:n,loaderType:r}=Laya.Loader.getURLInfo(t);st._extReg.lastIndex=t.lastIndexOf(".");let o=st._extReg.exec(t);return o&&o.length>1?o[1].toLowerCase():"text"}setResURL(t){return t}clearResUrlByRoot(t,e=!1){let i=t;Laya.loader.clearRes(i)}hasFormatEffectUrl(t){return t.indexOf("effect/")>=0}setItemResURL(t){return t&&t.hasOwnProperty("item_img")?this.setResURL("icon/"+t.item_img+".png"):""}setThreeDimenUrl(t){return t?this.setResURL("threeDimen/"+t):""}getThreeDimenUrl(t){let e=this.setResURL("threeDimen/"+t);return Laya.Loader.getRes(e)}getResByURL(t){let e=st.instance.setResURL(t);return Laya.Loader.getRes(e)}getResBySetURL(t){return Laya.Loader.getRes(t)}loadModuleUrl(t,e=null,i=null,n=1,r=!0){console.log("loadModuleUrl m_strName: "+t),this.ii++;let o=st.instance.m_objModuleReource[t];if(o==null||o.length<1){e.run();return}Laya.loader.load(o,Laya.Handler.create(this,this.loadItemComplete,[e,o]),Laya.Handler.create(this,this.onLoadProgress,[t],!1),i,n,r,this.ii.toString())}loadItemComplete(t,e){this.usedUrlDic||(this.usedUrlDic=new te);for(let i in e){let n=e[i].url,r=this.usedUrlDic.get(n);r?this.usedUrlDic.set(n,++r):this.usedUrlDic.set(n,1)}t.run()}clearModuleUrl(t){console.log("clearModuleUrl m_strName: "+t);let e=st.instance.m_objModuleReource[t];for(let i in e){let n=e[i].url;if(this.usedUrlDic){let r=this.usedUrlDic.get(n);r-=1,r<1?(this.usedUrlDic.remove(n),Laya.loader.clearRes(n)):this.usedUrlDic.set(n,r)}}}onLoadProgress(t,e){}loadResource(t,e=null,i=null,n=null,r=1,o=!0){Laya.loader.load(t,e,i,n,r,o)}getNodeIcon(t){return this.setResURL("gameIcon/node/img_"+t+".png")}getCountryIcon(t){return this.setResURL("gameIcon/country/img_"+t+".png")}getChestIcon(t){return this.setResURL("gameIcon/items/chest/img_"+t+".png")}getChestBigIcon(t){return this.setResURL("gameIcon/items/chestBig/img_"+t+".png")}getHeroEggIcon(t){return this.setResURL("gameIcon/hero/heroEgg/img_"+t+".png")}getHeroEggBigIcon(t){return this.setResURL("gameIcon/hero/heroEggBig/img_"+t+".png")}getHeroHeadIcon(t){return this.setResURL("gameIcon/hero/heroHead/img_"+t+".png")}getHeroQuality(t){return this.setResURL("gameIcon/hero/heroQuality/img_"+t+".png")}getHeroBackIcon(t){return this.setResURL("gameIcon/hero/heroDetail/img_hero_di_"+t+".png")}getHeroFrontIcon(t){return this.setResURL("gameIcon/hero/heroDetail/img_hero_"+t+".png")}getItemIcon(t){return this.setResURL("gameIcon/items/item/img_"+t+".png")}getItemBgIcon(t){return this.setResURL("gameIcon/items/itemBg/img_"+t+".png")}getItemBigIcon(t){return this.setResURL("gameIcon/items/itemBig/img_"+t+".png")}getItemQualityIcon(t){return this.setResURL("gameIcon/items/itemQuality/img_"+t+".png")}getMoneyIcon(t){return this.setResURL("gameIcon/items/money/img_"+t+".png")}getAttrIcon(t){return this.setResURL("gameIcon/attr/img_attr_"+t+".png")}getSkillIcon(t,e=!1){let i;return e?i=this.setResURL("gameIcon/skill/skills/img_big_"+t+".png"):i=this.setResURL("gameIcon/skill/skills/img_"+t+".png"),i}getMatchSkillIcon(t){return this.setResURL("gameIcon/skill/matchSkills/img_"+t+".png")}getPlayerIcon(t){return parseInt(t)>0?this.setResURL("gameIcon/head/headCircle/img_"+t+".png"):t}getUnionIcon(t){return parseInt(t)>0?this.setResURL("gameIcon/union/badge/img_trade_"+t+".png"):t}getUnionLvIcon(t){return this.setResURL("gameIcon/union/lvIcon/img_trade_"+(t>3?4:t)+".png")}getUnionLvDiIcon(t){return this.setResURL("gameIcon/union/lvIcon/img_trade_di_"+(t>3?4:t)+".png")}getEmoji(t,e){return this.setResURL("gameIcon/emoji/tab"+t+"/img_"+e+".png")}getFontColor(t){return this.setResURL("gameIcon/emoji/img_color_"+t+".png")}getSceneBgUrl(t){return"scene/"+t+".jpg"}clearSKinUrl(t){for(let e in t)t[e]instanceof String&&t[e].indexOf("skincolor")==-1&&Laya.loader.clearRes(t[e]);t=[]}getFunctionIcon(t){return this.setResURL("icon/functionIcon/"+t+".png")}getNewFunIcon(t){return this.setResURL("icon/newFunIcon/"+t+".png")}getSoundURL(t,e=".ogg"){let i;return i=this.setResURL("mp3/"+t+e),i}getSoundURLogg(t){let e;return e=this.setResURL("mp3/"+t),e}getSceneUrl(t){return"scene/sceneBg/"+t+".jpg"}getMianSysIcon(t){return this.setResURL("icon/mainSysIcon/btn_"+t+".png")}getEffectUrl(t){return this.setResURL("effect/"+t+".json")}getLoadingUrl(t){return this.setResURL("effect/"+t)}getGuangImg(t){return this.setResURL("swf/"+t+".png")}getGuildProofBg(t){return this.setResURL("scene/guild/proof/"+t+"/1.png")}getGuildProofHots(t){return this.setResURL("scene/guild/proof/"+t+"/"+t+"/"+t+".json")}getShareImgUrl(t,e=!1,i=!1){let n;return i?t:(t=t+".jpg",e?n="https://mutantbox.8686c.com/16/qa/common/share/"+t:n="https://cdn.test.com/16/qa/common/share/"+t,n)}getHeadUrl(t){return"common/common_icon/"+t+".png"}getMapImg(t){return"gameIcon/map/"+t+"/img_map.jpg"}getMapPrefab(t){return"gameIcon/map/map_"+t+".lh"}clearCache(){}getHeroHeadRes(t,e){return $.Res==0?"gameIcon/hero/heroHead/img_"+t+".png":this.baseUrl+`${t}/${e}.png`}getHeroSkRes(t,e){return $.Res==0?`gameIcon/hero/heroSk/${t}/img_hero.skel`:this.baseUrl+`${t}/${e}/img_hero.skel`}};st._extReg=/\.(\w+)\??/g;var C=st;var rn=class rn{constructor(){this._list=[];this._isNoticing=!1;this._isListener=!1}static get instance(){return rn._instance||(rn._instance=new rn),rn._instance}notice(t){this._isNoticing?this._isListener||(this._isListener=!0,this._list.push(t),Laya.timer.loop(rn.Tip_Interval,this,this.onInterVal)):(this._list.push(t),this.noticeOne())}noticeOne(){var t=C.instance.m_objModuleViews.TxtNoticeView;let e;Laya.loader.load(t).then(i=>{if(!i){console.log("noticeOne : "+t+"  res is null");return}e=Laya.Pool.getItemByCreateFun("txtNotice",i.create,i);let n=this._list.shift();e.notice(n),Laya.stage.addChild(e),e.x=M.instence.stageWidth*.5-e.width*.5,e.y=M.instence.stageHeight*.5-e.height*.5,Laya.Tween.to(e,{y:e.y-250,alpha:.5},1e3,null,Laya.Handler.create(this,this.onFinish,[e]),1e3)})}onFinish(t){t&&(t.visible=!1,t.removeSelf())}onInterVal(){this._list.length>=1?this.noticeOne():(this._isNoticing=!1,this._isListener=!1,Laya.timer.clear(this,this.onInterVal))}};rn.Tip_Interval=1e3;var B=rn;var pe=class a{constructor(){this._curErrTxt=""}static get instance(){return a._instance||(a._instance=new a),a._instance}initErrData(t){this.errData=t}get(t){return this.errData[t]?this.errData[t].words:(console.warn("服务端错误码语言包未配表 错误码："+t),t)}showErrorWord(t,...e){var i=this.getLanguage2(t,e);B.instance.notice(i)}getLanguage2(t,e){if(this.errData&&this.errData[t]){let i=this.errData[t].words;if(i&&i!="")return this._curErrTxt=d.instance.replacePlaceholder(i,e),this._curErrTxt}return this._curErrTxt=d.instance.replacePlaceholder(t+"",e),this._curErrTxt}showErrByString(t,e="#ff0000"){this._curErrTxt=t;let i=new Laya.Label(this._curErrTxt);i.width=500,i.align="center",i.height=40,i.fontSize=26,i.color=e,i.mouseEnabled=!1,i.strokeColor="#000000",i.stroke=.5,Laya.stage.addChild(i),i.x=(Laya.stage.width-i.width)/2,i.y=(Laya.stage.height-i.height)/2,Laya.Tween.to(i,{y:i.y-100,alpha:0},500,null,Laya.Handler.create(this,this.completeHandler,[i]),1e3)}completeHandler(t){t&&t.parent&&t.parent.removeChild(t)}dispose(){this.errData=null}};var Ye=class{};Ye.FUNID_MALL="1004",Ye.FUN_ID_TAGGARDEN="2005",Ye.FunID_WORK="1006",Ye.FUN_ID_BARGAIN_SHOP="1007",Ye.TRAVEL_HARD="1012",Ye.TRAVEL_REWARD="3006",Ye.FUNID_TUJIAN="2105",Ye.FUN_ID_PARTY="7003",Ye.FUN_ID_FB="9010",Ye.FUN_ID_PET="9004",Ye.FUN_ID_TURNTABLE="9001",Ye.FUN_ID_GASHPOEN="9012",Ye.FUN_ID_SHOPEXCHANGE="2104",Ye.FUN_ID_TIME_STAGE="9014",Ye.FUN_ID_DRAWCARD_PVP="1008613",Ye.FUN_ID_PHONE="2004",Ye.FUN_ID_DS="9017",Ye.FUN_ID_BUY_PS="9030",Ye.FUN_ID_DESTINY="3020",Ye.FUN_ID_ACTIVITY_SHOP="9026",Ye.FUN_ID_WORKSHOP_RECYCLE="3002",Ye.FUN_ID_WORKSHOP_COLOR="3004",Ye.FUN_ID_WORKSHOP_UPGRADE="3003",Ye.FUN_ID_GUILD="1010",Ye.FUN_ID_VIP="9022",Ye.FUN_ID_MONTHCARD="9100";var ip=class{constructor(){this.bafflesInfo=[[330,740,9],[294,113.95,1],[712.95-80,343.45,3],[1251.35,125.95,7]];this.redHotStateMap=new te;this.openSystem=new te;this.m_dicSystemInfoCfg=new te,this._openTypeList=new te,this.parseJson()}hasRedState(t){let e=this.redHotStateMap.get(t+"");return e&&e.redState>0?e.redState:0}initSystemOpen(t){this.openSystem=new te;for(let e=0;e<t.length;e++)this.openSystem.set(t[e],!0),t[e]+""==Ye.FUN_ID_PHONE.toString()}parseJson(){let t=C.instance.getResByURL("config/system_open.json"),e;for(let i in t)if(e=t[i],e){this.m_dicSystemInfoCfg.set(e.functionID,e);let n=this._openTypeList.get(e.open_type);n||(n=[],this._openTypeList.set(e.open_type,n)),n.push(e)}}getSystemsByType(t){let e=[];for(let i=0;i<this.m_dicSystemInfoCfg.values.length;i++){let n=this.m_dicSystemInfoCfg.values[i];n.positionID==t&&e.push(n)}return e}getLockFun(t,e){let i=this._openTypeList.get(t);for(let n of i)if(n.parameter1+""==e+"")return n;return null}getBuildSystem(){}isOpen(t){return $.buildClickState?!0:(t instanceof String&&(t=parseInt(t+"")),this.openSystem.get(t)!=null)}};var ap=class{constructor(){this._vipLv=0}isReceive(t){for(let e of this.isRewards)if(e+""==t.toString())return!0;return!1}addIsReceive(t){this.isReceive(t)||this.isRewards.push(t)}get vipLv(){return this._vipLv}set vipLv(t){this._vipLv!=t&&(this._vipLv=t)}};var np=class{constructor(){this.m_dicItemList=new te,this.m_dicTypeList=new te,this.m_dicSubTypeList=new te,this.m_dicBackList=new te}initData(t){this.m_dicItemList=new te,this.m_dicTypeList=new te,this.m_dicSubTypeList=new te,this.m_dicBackList=new te;let e;for(let n=0;n<t.length;n++){e=new Ve;var i=t[n];e.m_iId=i.id,e.m_iNum=i.count,e.m_iNum>0&&this.pushItem(e)}console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}getCountById(t,e=!0){return R.intance.m_dicItems.get(t)==null?0:this.getItemCountById(t,e)}pushItem(t){this.m_dicItemList.set(t.m_iId,t),this.m_dicTypeList.get(t.type)==null&&this.m_dicTypeList.set(t.type,new te),this.m_dicSubTypeList.get(t.subType)==null&&this.m_dicSubTypeList.set(t.subType,new te),this.m_dicBackList.get(t.backType)==null&&this.m_dicBackList.set(t.backType,new te),this.m_dicTypeList.get(t.type).set(t.m_iId,t),this.m_dicSubTypeList.get(t.subType).set(t.m_iId,t),this.m_dicBackList.get(t.backType).set(t.m_iId,t)}removeItem(t){this.m_dicItemList.remove(t.m_iId),this.m_dicTypeList.get(t.type).remove(t.m_iId),this.m_dicSubTypeList.get(t.subType).remove(t.m_iId),this.m_dicBackList.get(t.backType).remove(t.m_iId)}updateData(t,e=!1,i=!0){console.log("updateData: ",t,e,i);let n=[],r=!1,o;for(let s=0;s<t.length;s++){t[s]instanceof Array?(o=new Di,o.id=t[s][0],o.count=t[s][1]):o=t[s];let l=this.m_dicItemList.get(o.id);l==null&&(l=new Ve(o.id),this.pushItem(l),l.m_bNew=!0),e?l.m_iNum=o.count:(l.newAddCnt=o.count,l.m_iNum=l.m_iNum+o.count),n.push(l.m_iId),l.m_iNum<=0&&this.removeItem(l),l.newAddCnt>0&&je.instance.needPop&&i&&(je.instance.addItem(l),r=!0)}r&&je.instance.needPop&&je.instance.autoPop&&$t.instance.startShow(),n.length>0&&y.intance.event(h.PACKAGE_UPDATE_ITEM,[n])}getItemById(t){return this.m_dicItemList.get(t)}getItemsBySubType(t){let e=this.m_dicSubTypeList.get(t);return e==null&&(e=[]),e}getListByType(t){let e=[];return this.m_dicTypeList.get(t)&&(e=this.m_dicTypeList.get(t).values.slice()),e.sort(this.sortOnQa),e}getBackByType(t){let e=[];return this.m_dicBackList.get(t)&&(e=this.m_dicBackList.get(t).values.slice()),e.sort(this.sortOnQa),e}getListBySubType(t){let e=[];return this.m_dicSubTypeList.get(t)&&(e=this.m_dicSubTypeList.get(t).values.slice()),e.sort(this.sortOnQa),e}sortOnQa(t,e){let i=t.itemItem.sort,n=e.itemItem.sort;return i<n?-1:i>n?1:0}getItemCountById(t,e=!0){let i=this.getItemById(t);return i?i.m_iNum:0}};var rp=class a{constructor(t){this._addNewFList=[];this.delayShowNewFun=!1}static get instance(){return a._instace==null&&(a._instace=new a(new Xg)),a._instace}addNewOpenFun(t){this._addNewFList=this._addNewFList.concat(t),this.delayShowNewFun||this.showNewFun()}setDelayShowFun(t){this.delayShowNewFun!=t&&(this.delayShowNewFun=t,t||this.showNewFun())}showNewFun(){if(this._addNewFList.length>0){let t=this._addNewFList.pop(),e=L.instance.systemOpenModel.m_dicSystemInfoCfg.get(t.toString());e?e.if_open.toString()=="1"||e.if_pop.toString()!="1"?this.showNewFun():this.swithToNewFun(t):this.showNewFun()}}swithToNewFun(t,e=!1){let i=L.instance.systemOpenModel.m_dicSystemInfoCfg.get(t);if(i){if(i.if_open.toString()=="1"){B.instance.notice("system_open.json-->funId:"+i.functionID+"is close");return}(i.if_pop.toString()=="1"||e)&&y.intance.event(h.EVENT_OPEN_MODULE,[f.NewFunUnLockDialog,t])}}hasUnlockFunction(t,e=!0){let i=L.instance.systemOpenModel.m_dicSystemInfoCfg.get(t+""),n=L.instance.systemOpenModel.isOpen(parseInt(t));return!n&&e&&B.instance.notice(d.instance.getLanguage(i.lock_word)),n}},Xg=class{};var on=class{constructor(){}ReadShort(t){let e=new Uint8Array(t.buffer),i=e[t.pos]<<8,n=e[t.pos+1],r=i|n;return t.pos+=2,r}ReadInt(t){let e=new Uint8Array(t.buffer),i=e[t.pos]<<24|e[t.pos+1]<<16|e[t.pos+2]<<8|e[t.pos+3];return t.pos+=4,i}ReadByte(t){return t.getByte()}ReadString(t){let e=this.ReadShort(t);return e==0?"":t.getUTFBytes(e)}ReadBytes(t,e){let i=t.buffer.slice(t.pos,e);return new Laya.Byte(i)}dispose(){}};var op=class{constructor(){this.writeByt=new Laya.Byte}writeByte(){}writeShort(t){this.writeByt.writeByte(t>>8),this.writeByt.writeByte(t)}writeInt(t){this.writeByt.writeByte(t>>24),this.writeByt.writeByte(t>>16),this.writeByt.writeByte(t>>8),this.writeByt.writeByte(t)}writeString(t){if(t.length==0){this.writeShort(0);return}let i=new Laya.Byte;i.writeUTFBytes(t),this.writeShort(i.length),this.writeByt.writeUTFBytes(t)}dispose(){}};var ao=class a{constructor(){this.cookie="####1.0.0#0#";this.encryptKey="FFIYD#^3LB954JB90fzj*(d)sO7";this._curSendIndex=-1}static get instance(){return a._instance||(a._instance=new a),a._instance}setLoginCookie(){this.cookie="####1.0.0#"+$.Login_UDID+"#"+$.UserAgent}parseCookie(t,e,i,n="1.0.0"){let r=this.encryptKey+e+t,o=AI(r);n=L.instance.M_S_VersionServer;let s=o+"#"+t+"#"+e+"#"+i+"#"+n+"#"+this._curSendIndex+"#1#"+$.Login_UDID+"#"+$.UserAgent;this.cookie=s}reflashCookie(){this.parseCookie(this.m_time,this.m_roleID,this.m_accout)}analyClient(t,e){let i=new op;i.writeString(this.cookie),i.writeShort(t);let n=this.analyData[t];return n&&n.length>0&&this.writeByt(n,e,i),i.writeByt}writeByt(t,e,i){for(let n in t){let r=e[n];if(t[n].indexOf("7/")!=-1){i.writeShort(r.length);let o=this.analyData[String(t[n]).split("7/")[1]];if(o)for(let s in r)this.writeByt(o,r[s],i)}else if(t[n]=="1")i.writeInt(r);else if(t[n]=="2")i.writeShort(r);else if(t[n]=="3")i.writeString(r);else if(t[n]=="4"||t[n]=="5"||t[n]=="6"){i.writeShort(r.length);for(let o in r)t[n]=="4"?i.writeInt(r[o]):t[n]=="5"?i.writeShort(r[o]):t[n]=="6"&&i.writeString(r[o])}}}analyServer(t){let e=new on,i=e.ReadShort(t),n=[i],r=this.analyData[i];return r&&r.length>0&&(n=n.concat(this.readByt(r,t,e))),n}analyCookie(t=""){console.log("RECE_COOKIE: "+t,1);let e=t.split("#");this.m_time=e[0],this.m_roleID=e[1],this.m_accout=e[2];let i=e[3];this._curSendIndex=i,this._curSendIndex++,console.log("cookie:_time:"+this.m_time+"  _roleID："+this.m_roleID+"	  _accout："+this.m_accout),this.parseCookie(this.m_time,this.m_roleID,this.m_accout),L.instance.timeStamp=parseFloat(this.m_time)}readByt(t,e,i){let n=[];for(let r in t)if(t[r].indexOf("7/")!=-1){let o=i.ReadShort(e),s=this.analyData[String(t[r]).split("7/")[1]],l=[];if(s&&o>0)for(let c=0;c<o;c++)l.push(this.readByt(s,e,i));n.push(l)}else if(t[r]=="1")n.push(i.ReadInt(e));else if(t[r]=="2")n.push(i.ReadShort(e));else if(t[r]=="3")n.push(i.ReadString(e));else if(t[r]=="4"||t[r]=="5"||t[r]=="6"){let o=i.ReadShort(e),s=[];for(let l=0;l<o;l++)t[r]=="4"?s.push(i.ReadInt(e)):t[r]=="5"?s.push(i.ReadShort(e)):t[r]=="6"&&s.push(i.ReadString(e));n.push(s)}return n}dispose(){}};function AI(a){throw new Error("Function not implemented.")}var Ie=class Ie{constructor(){this._isSending=!1;this._stopSending=!1;this._sendCmd=0;this._callDataArr=[],this._httpReq=new Laya.HttpRequest,this._httpReq.http.timeout=15e3,this._httpReq.http.ontimeout=this.timeoutFunction,this._httpReq.on(Laya.Event.COMPLETE,this,this.reqCompleteHandler),this._httpReq.on(Laya.Event.ERROR,this,this.reqErrorHandler),this._httpReq.on(Laya.Event.PROGRESS,this,this.reqProcessHandler),Ie.RepeatHandler=Laya.Handler.create(this,this.repeatCallHandler,null,!1)}static get instance(){return Ie._instance||(Ie._instance=new Ie),Ie._instance}repeatCallHandler(){let t=this._callDataArr[0];t&&(t.needReSend?(this._callDataArr.shift(),this._sendByByte(t.command,t.callData,t.isShowLoading,!0)):this._callDataArr.shift())}timeoutFunction(){Ie.ErrorIndex++,this._sendCmd==2,Ie.timeoutTimes<Ie.MaxSendTimes,Ie.timeoutTimes++,Ie._IS_SEND=!1,this._isSending=!1,Ie.ErrorIndex>=Ie.RepeatTimesTimeOut?(me.instance.hideLoading(),Ie.ErrorTips=d.instance.getLanguage(5076),H.intance.openModule(f.ClientErrView)):Ie.RepeatHandler.run()}reqCompleteHandler(t){let e=Laya.Browser.now()-this.m_nSendTime;if(e&&e>Ie.RequestTime?(Ie.reqTimes<Ie.MaxSendTimes,Ie.reqTimes++):(Ie.reqTimes=0,Ie.timeoutTimes=0,Ie.errorTimes=0),console.log("cmd time："+(Laya.Browser.now()-this.m_nSendTime)),this._httpReq.data==null){pe.instance.showErrByString("_buff:null");return}this._isSending=!1,Ie.ErrorIndex=0;let i=new Laya.Byte(this._httpReq.data),n;if(i){let r=new on,o=r.ReadString(i);ao.instance.analyCookie(o);let s=r.ReadByte(i);for(let l=0;l<s;l++){r.ReadByte(i);let c=r.ReadShort(i),u=r.ReadBytes(i,i.pos+c);if(i.pos+=c,u.length<2)continue;u.pos=0;let m=r.ReadBytes(u,u.length);m.pos=0;let g=new Uint8Array(m.buffer),x=new Uint8Array(DI(g)),w=new Laya.Byte(x.buffer);w.pos=0;let v=ao.instance.analyServer(w);Laya.LayaEnv.isConch?console.log("REVC_CMD: cmdID:"+v[0]+" data:"+v,1):console.log(be.GetLogTime+" REVC_CMD: cmdID:",v[0],v),v[0]==153&&console.log("......"),v[0]==27&&(v[1]==2e4||v[1]==20042)&&(n=!0),y.intance.event("msg_"+v.shift(),[v])}s==0&&console.log("REVC_DATA: NO_DATA",1)}if(this._callDataArr.length>0){let r=this._callDataArr.shift();n&&r&&r.callBackHandler!=null&&r.callBackHandler.run()}Ie._IS_SEND=!1,this._callDataArr.length>0?Ie.RepeatHandler.run():me.instance.hideLoading()}reqErrorHandler(t){console.log("[error] HttpNetService reqError: ["+t+"]",1),Ie.errorTimes<Ie.MaxSendTimes&&this._sendCmd==2,Ie.errorTimes++,me.instance.showLoadingByInfo(d.instance.getLanguage(5205)),Ie.ErrorIndex++,Ie._IS_SEND=!1,this._isSending=!1,Ie.ErrorIndex>=Ie.RepeatTimes?(me.instance.hideLoading(),Ie.ErrorTips=d.instance.getLanguage(5075),H.intance.openModule(f.ClientErrView),this._callDataArr.length=0):Laya.timer.once(1e3,this,function(){Ie.RepeatHandler.run()})}reqProcessHandler(t){}DataToService(t){Laya.LayaEnv.isConch?this._httpReq.send($.server,t.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded","Connection","close"]):this._httpReq.send($.server,t.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded"])}SendData(t,e,i=null,n=!0,r=!0){this._stopSending||(this.m_nSendTime=Laya.Browser.now(),Ie.ErrorIndex=0,r&&this._callDataArr.push({command:t,callData:e,callBackHandler:i,isShowLoading:n,needReSend:r}),this._sendByByte(t,e,n,!1))}_sendByByte(t,e,i=!0,n=!1){this._sendCmd=t,this._sendCmd==2,yt.instance.sendData({cmd:t,code:"",data:e})}reSendData(){this._callDataArr.length>0&&Ie.RepeatHandler.run()}sendOutHandler(){Laya.timer.clear(this,this.sendOutHandler),this._isSending&&(this._isSending=!1,Ie.ErrorIndex>=Ie.RepeatTimes?(me.instance.hideLoading(),Ie.ErrorTips="Client Error!",H.intance.openModule(f.ClientErrView),this._callDataArr.length=0):Ie.RepeatHandler.run())}EnCodeByte(t){t.pos=0;let i=new on().ReadBytes(t,t.length);i.pos=0;let n=new Laya.Byte,r=0,o,s=0;for(let l=0;l<i.length;l++)r>=6?r=1:r+=1,o=i.getByte(),s=o,o>>=8-r,s<<=r,s|=o,s^=3,n.writeByte(s);return n}DecryptByte(t){t.pos=0;let i=new on().ReadBytes(t,t.length);i.pos=0;let n=new Laya.Byte,r=0,o,s=new Uint8Array(i.buffer);for(let l=0;l<s.length;l++)r>=6?r=1:r+=1,o=s[l],o^=3,o<<=8-r,s[l]^=3,s[l]>>=r,s[l]|=o;return n=new Laya.Byte(s.buffer),n}init(){}HttpLoadProcess(t){}httpLoadComplete(t){ao.instance.analyData=t}dispose(){}set stopSending(t){this._stopSending=t}};Ie._IS_SEND=!1,Ie.ErrorIndex=0,Ie.RepeatTimes=8,Ie.RepeatTimesTimeOut=3,Ie.ErrorTips="",Ie.LoginTime=5e3,Ie.RequestTime=4e3,Ie.MaxSendTimes=5,Ie.reqTimes=0,Ie.timeoutTimes=0,Ie.errorTimes=0;var ya=Ie;function DI(a){throw new Error("Function not implemented.")}var Ct=class extends Laya.Event{constructor(){super()}};Ct.INIT_SUIT_EVENT="HeroEvent:INIT_SUIT_EVENT",Ct.EVENT_FIND_ITEM_CLICK="HeroEvent:EVENT_FIND_ITEM_CLICK",Ct.EVENT_RELEASE_ITEM_CLICK="HeroEvent:EVENT_RELEASE_ITEM_CLICK",Ct.EVENT_FINISH="HeroEvent:EVENT_FINISH",Ct.EVENT_START="HeroEvent:EVENT_START",Ct.EVENT_AGAIN="HeroEvent:EVENT_AGAIN",Ct.EVENT_ENABLE_TIJIAO="HeroEvent:EVENT_ENABLE_TIJIAO",Ct.EVENT_HUMANSTAY="HeroEvent:EVENT_HUMANSTAY",Ct.EVENT_STOPGAME="HeroEvent:EVENT_STOPGAME",Ct.EVENT_RESTORE="HeroEvent:EVENT_RESTORE",Ct.EVENT_CANCEL_RESTORE="HeroEvent:EVENT_CANCEL_RESTORE",Ct.EVENT_COLLISIONENTER="HeroEvent:EVENT_COLLISIONENTER",Ct.EVENT_HERO_DRAW_UPDATE_PRODUCTION="HeroEvent:EVENT_HERO_DRAW_UPDATE_PRODUCTION",Ct.SELECT_UI="HeroEvent:SELECT_UI";var sp=class extends Le{constructor(){super()}};var lp=class extends Le{constructor(){super()}};var et=class a{constructor(){this._inited=!1;this._initUpgrade=!1;this.heroList=[];this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}initUpgrade(){if(!this._initUpgrade){let t=R.intance;t.m_dicHeroLv||(t.m_dicHeroLv=t.initConfig("hero_lv",["hero_lv","hero_star","race"],lp)),t.m_dicHeroAttup||(t.m_dicHeroAttup=t.initConfig("hero_attup",["star_lv","race"],sp)),this._initUpgrade=!0}}getHead(t){let e=Math.floor(Math.random()*3)+1;return"common/common_icon/img_"+t+"_"+e+".png"}getNextHero(t){let e=L.instance.m_heroData.heroVoDic.keys.indexOf(t.pk);return L.instance.m_heroData.heroVoDic.keys.length===1?null:e<=L.instance.m_heroData.heroVoDic.keys.length-2?L.instance.m_heroData.heroVoDic.values[e+1]:null}getLastHero(t){let e=L.instance.m_heroData.heroVoDic.keys.indexOf(t.pk);return e>0?L.instance.m_heroData.heroVoDic.values[e-1]:null}setStar(t,e){let i=parseInt(e);var n=Math.floor(i/6),r=i%6,o=n+r;let s=0;for(let u=0;u<n;u++)t["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_2.png",t["img_star"+(u+1)].visible=!0;for(let u=n;u<r;u++)t["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_1.png",t["img_star"+(u+1)].visible=!0;for(let u=o;u<5;u++)t["img_star"+(u+1)].visible=!1;let l=t.box_star.width,c=46;o==1?t["img_star1"].x=l/2-s:o==2?(t["img_star1"].x=l/2-c/2-s,t["img_star2"].x=l/2+c/2-s):o==3?(t["img_star1"].x=l/2-s,t["img_star2"].x=l/2-c-s,t["img_star3"].x=l/2+c-s):o==4?(t["img_star1"].x=l/2-c/2-s,t["img_star2"].x=l/2+c/2-s,t["img_star3"].x=l/2-c*(1/2+1)-s,t["img_star4"].x=l/2+c*(1/2+1)-s):(t["img_star1"].x=l/2-s,t["img_star2"].x=l/2-c-s,t["img_star3"].x=l/2+c-s,t["img_star4"].x=l/2-c*2-s,t["img_star5"].x=l/2+c*2-s)}getRoundName(t){let e=d.instance.getLanguage(10014,16,8);return t==4?e=d.instance.getLanguage(10014,2,1):t==3?e=d.instance.getLanguage(10014,4,2):t==2&&(e=d.instance.getLanguage(10014,8,4)),e}};var cp=class{};var up=class{};var gt=class a{constructor(){this.mail_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"||(this.mail_contract=new window.web3.eth.Contract(le.BLINDBOX_ABI,le.BLINDBOX_ADDRESS))}async initData(){this.mailList=new te,me.instance.showLoading(!0);let t=await this.mail_contract.methods.getPricesLength().call();for(let e=0;e<t;e++){let i=await this.mail_contract.methods.getPriceByIndex(e).call(),n=new cp;n.type=1,n.idx=e,Object.assign(n,i),this.mailList.set(n.idx,n),n.showPrice=$r(n.currentPrice+"")}me.instance.hideLoading()}async hasFree(){return await this.mail_contract.methods.getIsFreeOpen().call()?!await this.mail_contract.methods.hasFreeHero(j.instance.walletAddress).call():!1}async recruit(t){console.log("成功",66),console.log("失败",66),me.instance.showLoading(!0);let e=R.intance.m_dicShops.get(t),i=e.cost[0];try{var n;$.vType==2?n=ot.id:$.vType==1?n=ot.id:n=Tt.id;let l=R.intance.getBuyHeroAddress(n),c=await j.instance.walletClient.getChainId();if(n!==c){var r=await j.instance.switchChain(n);if(!r){this.onEndHeroBuy(),console.log("切换失败，请手动切换");return}c=await j.instance.walletClient.getChainId()}let u=R.intance.getCurrencyAddress(3001,c);if(!u)return this.onEndHeroBuy(),B.instance.notice(d.instance.getLanguage(1177,c)),!1;if(!l)return this.onEndHeroBuy(),B.instance.notice(d.instance.getLanguage(1174,c)),!1;let m=e.cost[1],g=await j.instance.getBalance2(u),x=$r(m+"");if(parseFloat(g)<parseFloat(x)){this.onEndHeroBuy(),be.moneyNotEnought(i);return}if(console.log("判断授权 tokenAddress: "+u+", chainIDData:"+n),!await j.instance.newAllowanceAddress(l,u))return console.log("未授权"),this.onEndHeroBuy(),B.instance.notice(d.instance.getLanguage(15)),me.instance.hideLoading(),!1;console.log("授权成功 开始购买");var o=await j.instance.walletClient.writeContract({account:j.instance.walletAddress,address:l,abi:le.BUY_HERO_ABI,functionName:"mintByTOX",args:[]});console.log("============"+o);let v=await j.instance.publicClient.waitForTransactionReceipt({hash:o});return console.log(`Tx with hash: ${o}`,v),v&&v.status=="success"?(console.log(`Tx successful with hash: ${o}`),o):(this.onEndHeroBuy(),be.TransactionErrorTip(),!1)}catch(l){this.onEndHeroBuy();var s=l.shortMessage;if(s&&s.indexOf("does not match")!=-1&&(s=d.instance.getLanguage(1118)),console.log(s),l instanceof F){let c=l.walk(u=>u instanceof At);if(c instanceof At){let u=c.data?.errorName??"";console.log("============errorName: "+u)}}return null}}waitGetHero(){Laya.timer.loop(2e3,this,this.getHero)}async getHero(){var t=await A.requestPost("wxgame/hero/heroBuyChainCheck",{}).catch(e=>{});t&&t.heroList&&t.heroList.length>0&&(Laya.timer.clear(this,this.getHero),this.onNewAddHero(t.heroList))}onNewAddHero(t){je.instance.autoPop=!1,L.instance.herosDataUpdataHandler(t),this.onEndHeroBuy()}onAddHero(t){je.instance.autoPop=!1,L.instance.herosDataUpdataHandler(t.reward),t.resChange&&L.instance.moneyInfoHander(t.resChange),t.fightHeroPk&&(L.instance.playerDto.fightHeroPk=t.fightHeroPk),this.onEndHeroBuy()}onEndHeroBuy(){me.instance.hideLoading(),y.intance.event(h.EVENT_END_HEROBUY)}async recruit1(t){let e=R.intance.m_dicShops.get(t),i=e.cost[1],n=await j.instance.getBalance(),r=await A.requestPost("wxgame/hero/heroBuy",{shopId:e.id},!0,!0);r?this.onAddHero(r):this.onEndHeroBuy()}async recruitItem(t,e){let i=R.intance.m_dicShops.get(t),n=i.cost[1],r=await j.instance.getBalance(),o=await A.requestPost("wxgame/hero/itemBuy",{shopId:i.id,count:e},!0,!0);o&&(o.reward&&H.intance.openModule(f.RewardGetDialog,o.reward),o.resChange&&L.instance.moneyInfoHander(o.resChange),o.fightHeroPk&&(L.instance.playerDto.fightHeroPk=o.fightHeroPk),me.instance.hideLoading())}async recruitFree(){me.instance.showLoading(!0),this.isOpen=await this.mail_contract.methods.getIsOpen().call();let t=await this.hasFree();if(!this.isOpen){me.instance.hideLoading(),y.intance.event(h.EVENT_HERO_DRAW_BACK,[d.instance.getLanguage(12)]);return}if(!t){y.intance.event(h.EVENT_HERO_DRAW_BACK,[d.instance.getLanguage(17)]);return}await this.mail_contract.methods.recruitFree().send({from:j.instance.walletAddress},(e,i)=>{if(e){me.instance.hideLoading(),y.intance.event(h.EVENT_HERO_DRAW_BACK,[d.instance.getLanguage(16)]);return}})}async ownerHero(t=!1){let e=await A.requestPost("wxgame/hero/heroList",{},!0,!0);L.instance.m_heroData.initData(e.heroList,t),console.log("HERO LIST")}async ownerBag(){let t=await A.requestPost("wxgame/hero/bagList",{},!0,!0);L.instance.m_packageData.initData(t.data),console.log("BAG LIST")}async heroOutputRate(){if(et.instance.heroOutputRateDic)return;let t=await A.requestPost("cybertron-sys-api/api/v1/heroes/heroOutputRate",{},!0);et.instance.heroOutputRateDic=new te;for(let e of t){let i=new up;Object.assign(i,e),et.instance.heroOutputRateDic.set(i.mineralLevel,i)}console.log("HERO heroOutputRate"),y.intance.event(Ct.EVENT_HERO_DRAW_UPDATE_PRODUCTION)}makeHeroVo(t){let e=new Mt;return Object.assign(e,t),e}};var ze=class ze{constructor(){}};ze.TYPE_Professional=1,ze.TYPE_Training=2,ze.ANI_beiji="beiji",ze.ANI_daiji="daiji",ze.ANI_gongji="gongji",ze.ANI_ti="ti",ze.ANI_hua="hua",ze.ANI_dang="gedang",ze.ANI_dazhao="z_dazhao",ze.ANI_ruchang="ruchang",ze.ANI_siwang="siwang",ze.ANI_xingzou="xingzou",ze.ANI_chongzhuang="z_chongzhuang",ze.ANI_chongzhuang2="z_chongzhuang2",ze.ANI_daodi="z_daodi",ze.ANI_shanbi="z_shanbi",ze.ANIS=[ze.ANI_daiji,ze.ANI_xingzou,ze.ANI_gongji,ze.ANI_ti,ze.ANI_hua,ze.ANI_dang,ze.ANI_beiji,ze.ANI_siwang],ze.TYPE_GONGJI=1,ze.TYPE_TI=2,ze.TYPE_HUA=3,ze.TYPE_DANG=4,ze.TYPE_FEI=5,ze.TYPE_DAZHAO=6;var We=ze;var pp=class{constructor(){this.heroVoDic=new te}initData(t,e=!1){(!this.heroVoDic||e)&&(this.heroVoDic=new te);let i;for(let r=0;r<t.length;r++){i=new Mt;var n=t[r];i.id=n.id,i.lv=n.lv,i.pk=n.pk,i.color=n.color,i.state=n.state,i.newFightFlag=n.newFightFlag,this.pushItem(i)}console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}updateData(t){console.dir("更新英雄："+t),this.updataItemVoByArr(t)}herosDataRemoveHandler(t){console.dir("删除英雄："+t);for(let i=0;i<t.length;i++){var e=t[i];this.removeItemPk(e)}}pushItem(t){this.heroVoDic.set(t.pk,t)}removeItem(t){this.removeItemPk(t.pk)}removeItemPk(t){this.heroVoDic.remove(t+"")}updataItemVoByArr(t,e=!1){let i=[],n=!1,r;for(let o=0;o<t.length;o++){r=t[o];let s=this.heroVoDic.get(r.pk);s==null?(s=new Mt,s.id=r.id,s.pk=r.pk,s.lv=r.lv,s.color=r.color,s.state=r.state,s.newFightFlag=r.newFightFlag,s.m_bNew=!0,s.newAddCnt=1,s.newAddCnt>0&&this.pushItem(s)):s.newAddCnt=1,s.isLvUp=e,i.push(s.pk),s.m_iNum<=0&&this.removeItem(s),s.newAddCnt>0&&je.instance.needPop&&(je.instance.addHeroItem(s),n=!0)}n&&je.instance.needPop&&je.instance.autoPop&&$t.instance.startShow(),i.length>0&&y.intance.event(h.PACKAGE_UPDATE_ITEM,[i])}getItemById(t){return this.heroVoDic.get(t)}getCount(){return this.heroVoDic.values.length}getCanTransferHero(t){let e=this.heroVoDic.get(t+"");return e&&e.state==0&&e.pk!=L.instance.playerDto.fightHeroPk?e:null}getListByType(t){let e=[],i=t==We.TYPE_Training?1:0;for(let n=0;n<this.heroVoDic.values.length;n++){let r=this.heroVoDic.values[n];r.newFightFlag==i&&e.push(r)}return e}};var mp=class{constructor(){this.m_redData={system:!1,friend:!1,announce:!1};this.m_dicItemList=new te,this.m_dicTypeList=new te}initData(t){this.m_dicItemList=new te,this.m_dicTypeList=new te,this.m_redData={system:!1,friend:!1,announce:!1};let e;for(let i=0;i<t.length;i++)switch(e=t[i],this.pushItem(e),e.type){case 1:e.state==0&&(this.m_redData.system=!0);break;case 2:e.state==0&&(this.m_redData.friend=!0);break;case 3:e.state==0&&(this.m_redData.announce=!0);break}console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}parseItem(t){if(t.mailId>0){var e=R.intance.m_dicMail.get(t.mailId);t.title=d.instance.getLanguage(e.title),t.content=d.instance.getLanguageMulti(e.text,t.params)}}pushItem(t){this.parseItem(t),this.m_dicItemList.set(t.id,t),this.m_dicTypeList.get(t.type)==null&&this.m_dicTypeList.set(t.type,new te),this.m_dicTypeList.get(t.type).set(t.id,t)}removeItem(t){this.m_dicItemList.remove(t.id),this.m_dicTypeList.get(t.type).remove(t.id)}getItemById(t){return this.m_dicItemList.get(t)}getListByType(t){let e=[];return this.m_dicTypeList.get(t)&&(e=this.m_dicTypeList.get(t).values.slice()),e}getRedData(){return this.m_redData}};var L=class a{constructor(){this.timeZoneOff=0;this.hearIntervalSceond=10*60;this._timeStamp=0;this._m_strLanguage=1;this.isLanChanged=!1;this.lastTimestamp=0;this._m_serverTime=0;this.M_S_VersionServer="1.0.0";this.redDotData=[];this.friendNum=0;this.headId=10001;this.countryId=1010;this.colorId=1;this._guildIcon=2006;this.rechargeEnd=!1;this.needPopError=!0}async initData(){Te.instance.sendCustumEvent(20),await gt.instance.ownerHero(),await gt.instance.ownerBag(),Te.instance.sendCustumEvent(21)}get m_serverTime(){let t=Date.now();return this._m_serverTime+(t-this.lastTimestamp)}set m_serverTime(t){this._m_serverTime=t,this.lastTimestamp=Date.now()}get guildIcon(){return this._guildIcon}set guildIcon(t){console.log("guildIcon: "+t),this._guildIcon=t}get m_strLanguage(){return this._m_strLanguage}set m_strLanguage(t){this._m_strLanguage=t}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this.vipInfo=new ap,this.m_packageData=new np,this.m_mailData=new mp,this.m_heroData=new pp,this.systemOpenModel=new ip,this.m_dicCustomerVo=new te,y.intance.on("msg_27",this,this.commonErrHandler),y.intance.on("msg_11",this,this.vipInfoHandler),y.intance.on("msg_13",this,this.onVipUpgrade),y.intance.on("msg_90",this,this.initSystemOpen),y.intance.on("msg_161",this,this.reciveTurnoverVo),y.intance.on("msg_333",this,this.onInitSceneBg),y.intance.on("msg_350",this,this.onInitStoreDiscount),y.intance.on("msg_388",this,this.onInitTitle),y.intance.on("msg_1002",this,this.onLanChange)}initSend(){}onLanChange(t){let e=parseInt(t[0]),i=parseInt(t[1]);switch(e){case 1:i==1&&Te.instance.reload();break;case 2:break}}get timeStamp(){return this._timeStamp+(Laya.Browser.now()-this.recordStampTime)/1e3}set timeStamp(t){this.recordStampTime=Laya.Browser.now(),this._timeStamp=t}onReciveBuyTimes(t){a.instance.playerDto.updateRoleBuyTimes(t)}reciveTurnoverVo(t){}onInitSceneBg(t){}onInitTitle(t){}getAdRankById(t){return this.m_adRankDic&&this.m_adRankDic.get(t)?this.m_adRankDic.get(t):""}onGetPvpGrade(t){let e=t[0]}onInitStoreDiscount(t){}reciveBuyCustomerMsg(t){}onInitStyleAndTag(t){let e=t[0];for(let i=0;i<e.length;i++){let n=e[i],r=n[0],o=n[1],s=n[2]}}reciveFriendList(t){}reciveFirstRecharge(t){}hasReceiveFirst(){return this.firstRechargeState.toString()=="3"}recieveOnlineAward(t){}initFriendsGiftHandler(t){}initSystemOpen(t){this.systemOpenModel.initSystemOpen(t[0])}updateSystemOpen(t){let e=t[0];rp.instance.addNewOpenFun(e);for(let i=0;i<e.length;i++)this.systemOpenModel.openSystem.set(e[i],!0)}serverTimeUpdateHandler(){let t=this.hearIntervalSceond*1e3;Laya.timer.loop(t,this,this.onHear)}onHear(){}itemsDataUpdataHandler(t,e,i){this.m_packageData.updateData(t,e,i),y.intance.event(h.EVENT_ITEM_UPDATE)}herosDataUpdataHandler(t){this.m_heroData.updateData(t)}vipInfoHandler(t){this.vipInfo.trecharge=t[1],this.vipInfo.isRewards=t[2],this.vipInfo.daygift=t[3]}onVipUpgrade(t){}getConsumeValue(t){t=parseInt(t.toString());var e=this.playerDto.coins[t];return e>0?e:0}hasEnoughMoney(t,e,i=!0){switch(t=parseInt(t.toString()),e=parseInt(e.toString()),t){default:return this.playerDto.coins[t]<e&&i&&y.intance.event("open_buy",4),this.playerDto.coins[t]>=e}}moneyInfoHander(t,e=!0,i=!0){let n=!1,r=!1,o=0;for(let s of t)r=!1,s[0]==xe.TYPE_EXP?(o=parseInt(s[1]+"")-this.playerDto.exp,this.playerDto.exp=parseInt(s[1]+""),r=o>0):(o=parseFloat(s[1]+"")-this.playerDto.coins[s[0]],this.playerDto.coins[s[0]]=parseFloat(s[1]+""),r=o>0),r&&je.instance.needPop&&i&&(n=!0,je.instance.addConsumeByServer([s[0],o]));e&&y.intance.event(h.ROLE_INFO_CHANGE),n&&je.instance.autoPop&&$t.instance.startShow()}commonErrHandler(t){if(me.instance.hideLoading(),parseInt(t[0])==2e4){this.needPopError&&(pe.instance.showErrorWord(parseInt(t[0])),y.intance.event(h.RECIVE_SUCESS_SERVICE));return}else if(parseInt(t[0])==20008){y.intance.event("open_buy",1);return}else if(parseInt(t[0])==20007){y.intance.event("open_buy",2);return}else if(parseInt(t[0])==20015){y.intance.event("open_buy",3);return}else if(parseInt(t[0])==20016){y.intance.event("open_buy",4);return}else if(parseInt(t[0])==10021){ya.ErrorTips=pe.instance.get(10021),H.intance.openModule(f.ClientErrView);return}else if(parseInt(t[0])==10023){ya.ErrorTips=pe.instance.get(10023),H.intance.openModule(f.ClientErrView);return}else if(parseInt(t[0])==10019){ya.ErrorTips=pe.instance.get(10019),H.intance.openModule(f.ClientErrView);return}else if(parseInt(t[0])!=20053){if(parseInt(t[0])==10002){ya.ErrorTips=d.instance.getLanguage(5085),H.intance.openModule(f.ClientErrView);return}}pe.instance.showErrorWord(parseInt(t[0])),console.log("Server Error Code:"+t[0])}dispose(){}parseNumber(t){let e=[];for(let i=0;i<t.length;i++){let n=t[i];n=this.dividedNumber(n),e.push(n.toString())}return e}dividedNumber(t){return t/1e4}getRedDotById(t){return!!(this.redDotData&&this.redDotData.indexOf(t)>-1)}};var d=class a{constructor(){this._lanTypesById=new te,this._lanTypesByType=new te,this._configData=new te,this._configData1=new te}static get instance(){return a._instance||(a._instance=new a),a._instance}initLanTypes(t){this._lanTypesById=new te,this._lanTypesByType=new te;for(let e in t){let i=new go;if(i.init(t[e]),parseInt(i.if_open)!=1)continue;let n=i.ID,r=i.type;this._lanTypesById.set(n,i),r&&r!=""&&this._lanTypesByType.set(r,i)}}getLanTypes(){return this._lanTypesById}getLanIdByType(t){if(this._lanTypesByType){let e=this._lanTypesByType.get(t);if(e)return parseInt(e.ID.toString())}return 1}getLanTypeById(t){if(this._lanTypesById){let e=this._lanTypesById.get(t);if(e)return e.type}return"en"}initConfigLan(t){this._configData=t}initConfigLan1(t){this._configData1=t}initUILan(t){Laya.Text.langPacks={};let e;for(e in t){let i=t[e].value;Laya.Text.langPacks[e]=i}}changeBrToN(t){let e=/<br>/g;for(;t.indexOf("<br>")!=-1;)t=t.replace(e,`
`);return t}replacePlaceholder(t,e){if(t=="")return"";let i=/{(\d+)}/g;return e.length>0&&(t=t.replace(i,function(){return e[arguments[1]]})),this.replaceLanByBR(t)}replaceLanByBR(t){return t+""}getEnglishLanguage(t,...e){return this.getEnglishLanguageReplace(t,e)}getEnglishLanguageReplace(t,e){if(this._configData1&&this._configData1[t]){let i=this._configData1[t].value;if(i&&i!="")return this.replacePlaceholder(i,e)}return this.replacePlaceholder(t+"",e)}getLanguage(t,...e){return this.getLanguageReplace(t,e)}getLanguageReplace(t,e){if(this._configData&&this._configData[t]){let i=this._configData[t].value;if(i&&i!="")return this.replacePlaceholder(i,e)}return this.replacePlaceholder(t+"",e)}getLanguageMulti(t,e){if(console.log("getLanguageMulti",e),this._configData&&this._configData[t]){let i=this._configData[t].value;if(i&&i!="")return this.replacePlaceholderMulti(i,e)}return this.replacePlaceholder(t+"",e)}replacePlaceholderMulti(t,e){if(t=="")return"";let i=/{(\d+)}/g;return e.length>0&&(t=t.replace(i,function(){var n=e[arguments[1]];if(typeof n=="object")n=JSON.parse(n),n=a.instance.parseObj(n);else if(typeof n=="string")try{n=JSON.parse(n),typeof n=="object"&&(n=a.instance.parseObj(n))}catch{}return n})),this.replaceLanByBR(t)}parseObj(t){if(t.hasOwnProperty("tableType")){if(t.tableType==1){var e=R.intance.m_dicItems.get(t.id);e&&(t=a.instance.getLanguage(e.name))}}else t=a.instance.getMultiLan(t);return t}getUILang(t,e=null,i=null,n=null,r=null){if(t=Laya.Text.langPacks&&Laya.Text.langPacks[t]?Laya.Text.langPacks[t]:t,arguments.length>1)for(let o=0,s=arguments.length;o<s;o++)t=t.replace("{"+o+"}",arguments[o+1]);return t}getMultiLan(t){var e=parseInt(L.instance.m_strLanguage.toString()),i;return t&&(i=t[e]),i}FGM_GetLanguage(){let t=function(i){console.log("initGame->-----------------------------FGM_GetLanguage:=="+i),i&&(i=i.substring(0,2),$.User_Lan=i)},e=Laya.LocalStorage.getItem($.COOKIE_CF_LAN);!e||e==""?t(this.language):t(e)}get language(){return"en"}FGM_SetLanguage(t){t&&t!=""&&Laya.LocalStorage.setItem($.COOKIE_CF_LAN,t)}dispose(){}};var dp=class a{constructor(){this.m_sprMap=new Laya.Sprite;this.m_Image=new Laya.Image}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){}showLoading(t=!1){if(this.loadingMc)this.m_sprMap.size(Laya.stage.width,Laya.stage.height),$.m_bIsIphoneX&&(this.m_Image.scaleX=$.IPHONEX_SCARE,this.m_Image.scaleY=$.IPHONEX_SCARE),this.m_Image.x=(this.m_sprMap.width-this.m_Image.width*this.m_Image.scaleX)/2,this.m_Image.y=(this.m_sprMap.height-this.m_Image.height*this.m_Image.scaleY)/2,this.m_sprMap.x=(M.instence.m_iStageWidth-this.m_sprMap.width*this.m_sprMap.scaleX)/2,this.m_sprMap.y=(M.instence.m_iStageHeight-this.m_sprMap.height*this.m_sprMap.scaleY)/2,this.m_sprMap.visible=!0,Laya.timer.clear(this,this.showLazyBg),t?(this.m_Image.alpha=1,this.showLazyBg()):(this.m_Image.alpha=0,this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_sprMap.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,"#000000")),Laya.timer.once(300,this,this.showLazyBg));else return}showLazyBg(){this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_Image.alpha=1),this.loadingMc&&(this.loadingMc.x=Laya.stage.width/2,this.loadingMc.y=Laya.stage.height/2,this.loadingMc.play(),this.loadingMc.visible=!0)}hideLoading(){if(this.loadingMc)this.hideLoadingSHow();else return}hideLoadingSHow(){Laya.timer.clear(this,this.showLazyBg),this.loadingMc.stop(),this.loadingMc.visible=!1,this.m_sprMap.visible=!1}get isShow(){return this.loadingMc&&this.loadingMc.visible}dispose(){this.m_sprMap&&this.m_sprMap.graphics.clear(),Laya.timer.clear(this,this.showLazyBg),this.loadingMc&&(this.loadingMc.destroy(),this.loadingMc.removeSelf(),this.loadingMc=null)}};var{regClass:MI}=Laya,no=class extends kl{constructor(){super(...arguments);this.isLogout=!1;this.dotNum=0;this.m_nProgress=0}onAwake(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),Laya.loader.load(["res/common/comm_bg/img_loading1_bg.jpg","res/loading/progress_load1.png","res/loading/progress_load1$bar.png"]).then(()=>{this.createUI(),this.init()})}onError(e){console.log("加载失败: "+e)}createUI(){this.m_nSendTime=Laya.timer.currTimer,Ne.instance.init(),Ne.instance.playMusicByName(Ne.soundName_bg,".mp3"),y.intance.on(h.EVENT_BACK_TO_LOGIN,this,this.backToLogin),y.intance.on(h.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),y.intance.on(h.EVENT_ENTER_MAIN,this,this.loginCallBack),this.initLoad(),d.instance.FGM_GetLanguage(),$.User_Lan=="zh"?this.img_loading_tip.skin="res/loading1/img_loading_tip_6.png":this.img_loading_tip.skin="res/loading1/img_loading_tip_1.png";var i=getGameVersion();this.txtLoad.text=i,console.log("VERSION: "+i);let n=new ia;n.ID=1,n.Event="加载版本信息 "+i,Te.instance.sendCustumEvent(1,null,n),ci.Initialize(Laya.stage,!0)}initLoad(){this.onAssetLoaded()}onAssetLoaded(){this.loadingProcess=0,this.m_nProgress=0,Laya.timer.loop(1800,this,this.onLoading,[this.m_nProgress])}set loadingProcess(e){e>1&&(e=1),this.mcProcess.value=e,this.txtProcess.text=Math.floor(e*100)+"%";var i=e*this.mcProcess.width-70;i<0&&(i=0),this.img_guang.x=i,console.log("loadingProcess: "+e)}init(){M.instence.init(),fe.intance.init(),dp.instance.init(),H.intance.init(),L.instance.init();let e=new ia;e.ID=3,e.Event="加载资源信息",Te.instance.sendCustumEvent(3,null,e),C.instance.init(),ve.initParms()}backToLogin(){Laya.timer.clear(this,this.onLoading),this.m_nProgress=0,Laya.loader.load(C.instance.m_arrInitResource,Laya.Handler.create(this,this.getLoginData),Laya.Handler.create(this,this.onLoading2,null,!1))}getLoginData(){Te.instance.sendCustumEvent(7),this.readyInitGame()}readyInitGame(){if(this.isLogout){y.intance.event(h.EVENT_LOADING_SUC);return}this.mcProcess&&(this.loadingProcess=.8+.2),$.isWhite?this.loginGame():this.onGetNotice()}async onGetNotice(){Laya.loader.maxLoader=50,A.requestPost("wxgame/sys/notice",{type:1},!1,!1).then(e=>{var i=e;if(i.list&&i.list.length>0){H.intance.openModule(f.NoticeDialog,[1,i]);return}this.loginGame()}).catch(e=>{H.intance.openModule(f.NoServerView)})}async loginGame(){y.intance.event(h.EVENT_LOADED_COMPLETE),await j.instance.init(),await j.instance.dappLogin()}async loginGameEnd(e){me.instance.showLoading(!0),Te.instance.sendCustumEvent(8),R.intance.init(),ya.instance.init(),console.log("PreLoadingView.joinGame()");let i=Laya.timer.currTimer-this.m_nSendTime;if(Te.instance.sendCustumEvent(22),!e){H.intance.openModule(f.NoServerView);return}e.loginState==1?(console.log("have no regist"),Te.instance.sendCustumEvent(23),H.intance.openModule(f.CreateLoginView)):(Te.instance.sendCustumEvent(30),e.playerDto?(Te.instance.sendCustumEvent(31),console.log("registed "+e.playerDto.name),L.instance.playerDto=e.playerDto,this.loginCallBack()):(Te.instance.sendCustumEvent(32),console.log("getRegisted error"),B.instance.notice(d.instance.getLanguage(135))))}async loginCallBack(){console.log("loginCallBack++++++++++++++++++++++++++++++++"),$.vType==2&&$.Debug==0&&(Laya.Browser.window.console.log=function(){}),L.instance.initData(),me.instance.hideLoading();var e=L.instance.playerDto;if(e.roomId>0){let i=await A.requestPost("wxgame/room/info",{roomId:e.roomId});z.instance.roomDto=i.roomDto,i.roomDto?e.roomState==0?H.intance.openModule(f.EnterRoomView):e.roomState==1&&yt.instance.initSocket():B.instance.notice(d.instance.getLanguage(135))}else be.logs("进入主界面",5),Te.instance.sendCustumEvent(33),fe.intance.setCurrentScene(X.M_SCENE_MAIN);A.startHeart()}onLoading(e){this.m_nProgress+=.01,this.mcProcess&&e>this.mcProcess.value&&(this.loadingProcess=e*.4)}onLoading2(e){this.mcProcess&&(this.loadingProcess=0+e*1.1)}removeEvent(){y.intance.off(h.EVENT_BACK_TO_LOGIN,this,this.backToLogin),y.intance.off(h.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),y.intance.off(h.EVENT_ENTER_MAIN,this,this.loginCallBack)}};no.m_iState=1,no=p([MI("xmaaYG8AQ1yC07pr_JvyPA")],no);var{regClass:BI,property:VK}=Laya,Zs=class extends Laya.Script{constructor(){super()}onEnable(){Laya.timer.frameLoop(1,this,this.onRunRoll),this.onScaleEnd1()}onRunRoll(){this.owner.rotation++}onScaleEnd1(){Laya.Tween.to(this.owner,{scaleX:1.1,scaleY:1.1,alpha:.8},500,null,Laya.Handler.create(this,this.onScaleEnd2))}onScaleEnd2(){Laya.Tween.to(this.owner,{scaleX:.8,scaleY:.8,alpha:.5},500,null,Laya.Handler.create(this,this.onScaleEnd1))}onDisable(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};Zs=p([BI("w5pr4pHJTMOM3bYxCyc4Ag")],Zs);var ro=class ro extends Laya.ColorFilter{constructor(t=null){super(t)}static addClickFilter(t){let e=t.filters||[];e.push(ro.clickFilter),t.filters=e}static clearClickFilter(t){let e=t.filters;if(e!=null&&e.length>0){for(let i=e.length-1;i>-1;i--)e[i]instanceof ro&&e.splice(i,1);t.filters=e}}};ro.clickFilter=new ro([1,0,0,0,-34,0,1,0,0,-34,0,0,1,0,-34,0,0,0,1,0]);var sn=ro;var{regClass:PI,property:RI}=Laya,oo=class extends Laya.Script{constructor(){super();this.noSound=!1}onEnable(){let e=this.owner.scaleX;this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onUp)}onDown(){this.noSound||Ne.instance.playSoundByName(Ne.soundName4),sn.addClickFilter(this.owner)}onUp(){sn.clearClickFilter(this.owner)}onDisable(){sn.clearClickFilter(this.owner),this.owner.off(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.onUp)}};p([RI({type:"boolean"})],oo.prototype,"noSound",2),oo=p([PI("cL1AmqOiTHmtQWKayPNcTA")],oo);var Mi=class Mi{constructor(){this.ROOM_1=1;this.ROOM_2=2;this.ROOM_3=3;this.ROOM_1_1=1;this.ROOM_1_2=2;this.ROOM_1_3=3;this.ROOM_2_1=201;this.ROOM_2_2=202;this.ROOM_2_3=203;this.ROOM_3_1=301;this.ROOM_3_2=302;this.ROOM_3_3=303}static get instance(){return Mi._instance==null&&(Mi._instance=new Mi),Mi._instance}};Mi._instance=null,Mi.ROOM_FRIEND_APPLY=4,Mi.ROOM_MAIL=5,Mi.RED_GUILD_APPLY=6;var Ze=Mi;var Ee=class a{static toFixed(t,e){if(t.toString().indexOf(".")==-1)return t;{let i=t.toFixed(e);return parseFloat(i)}}static toFixedWithPercent(t,e,i="+"){let n;return t.toString().indexOf(".")==-1?n=i+t*100+"%":(e=e-2,e<0&&(e=0),n=i+(t*100).toFixed(e)+"%"),n}static getGoldStr(t){let e;return t>999999?e=parseInt(String(t/1e5))+"m":e=t,e}static numStringFormat(t){let e=t;return L.instance.m_strLanguage==2?t.length>4&&(e=String(t).replace(/(\d)(?=(\d{3})+$)/g,"$1 ")):e=String(t).replace(/(\d)(?=(\d{3})+$)/g,"$1,"),e}static numSimple(t){let e=t,i=parseInt(parseInt(e)/1e3+"");return i>0?i+"k":a.numStringFormat(e)}static numStringFormat2(t){let e;if(t>999999)e=a.getNumStr(t,1e6,"M");else if(t>999)e=a.getNumStr(t,1e3,"K");else return t+"";return e}static getNumStr(t,e,i){return parseInt(Math.floor(t/e)+"")+i}static getTimeStr(t){let e;return t<3600?e=d.instance.getLanguage(9024,Math.ceil(t/60)):t<3600*24?e=d.instance.getLanguage(9025,Math.ceil(t/3600)):e=d.instance.getLanguage(9025,Math.ceil(t/(3600*24))),e}static BigInt(t){return 0}static isInteger(t){return t%1===0}static formatNumber(t,e=8){return Number.isInteger(t)?t:parseFloat(t.toFixed(e))}static formatNumberStr(t,e=2){return Number.isInteger(t)?t:parseFloat(t.toFixed(e)).toString()}static filterNumFormat(t,e=2,i=!1){if(!t)return t;if(t<1e3&&t>0)return parseFloat(t.toFixed(e)).toString();if(t==="0.00")return t;var n=[{value:1,symbol:""},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"}];i&&(n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"}]);var r=/\.0+$|(\.[0-9]*[1-9])0+$/,o;for(o=n.length-1;o>0&&!(t>=n[o].value);o--);let s=(t/n[o].value).toString();return s.indexOf(".")>-1&&(e>0?s=s.substr(0,s.indexOf(".")+e+1):s=s.substr(0,s.indexOf(".")+e)),s.replace(r,"$1")+n[o].symbol}static fromWei(t,e,i=0){if(!t)return 0;let n=t.length-e+i;if(n<=0)return 0;let r=t.toString().slice(0,n);if(i){let o=r.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";r=s+r}else r=r.slice(0,r.length-i)+"."+r.slice(r.length-i)}return r}};var hp=class extends Laya.Scene{};var{regClass:NI}=Laya,Js=class extends hp{constructor(){super(...arguments);this.currTab=0;this.arenaLv=1001;this.coinTypes=[];this.arenaType=1;this.nodeIds=[];this.coinDatas=[];this.nodeDatas=[]}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP}async onOpened(e){this.mouseThrough=this.mouseThrough=!0,this.updateTopInfo(),this.initNodeCombo(),this.initCoinCombo(),this.initArenaTypes(),this.onClickTab(1);var i=Laya.stage.width-$.DESIGN_WIDTH>>1;this.leftX=this.leftMenu.x,this.leftMenu.x=this.leftX-i-this.leftMenu.width,Laya.Tween.to(this.leftMenu,{x:this.leftX-i},500),R.intance.testNodes()}updateTopInfo(){this.arenaType=U.instance.arenaType;var e=R.intance.m_dicArenaTypes.get(this.arenaType);this.tf_name.text=d.instance.getLanguage(e.name),this.updateLocalAssets()}updateLocalAssets(){this.tf_3005.text=Ee.filterNumFormat(L.instance.getConsumeValue(xe.TYPE_GOLD),0)}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.list_room.vScrollBarSkin="",this.list_room.array=[],Laya.timer.loop(1e3,this,this.refreshRoomTime),this.btn_create.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_create]),y.intance.on(h.ROLE_INFO_CHANGE,this,this.updateTopInfo),y.intance.on(St.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),y.intance.on(h.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),y.intance.on(h.EVENT_CHECK_NODE_SELECT,this,this.onNodeSelected),y.intance.on(h.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom)}setTab(e){for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("btn_yellowBg").visible=!0,this["btn_"+i].getChildByName("Label").color="#143268"):(this["btn_"+i].getChildByName("btn_yellowBg").visible=!1,this["btn_"+i].getChildByName("Label").color="#ffffff")}onClickTab(e){if(this.currTab!=e){if(this.list_room.visible=!1,this.setTab(e),e==1){this.arenaLv=1;var i=this.getRoomByType()}else if(e==2){this.arenaLv=2;var i=this.getRoomByType()}else if(e==3){this.arenaLv=3;var i=this.getRoomByType()}}}async getRoomByType(){Laya.timer.clear(this,this.getRoomByType),this.arenaType=U.instance.arenaType;let e=await A.requestPost("wxgame/room/list",{lv:this.arenaLv,coinTypeList:this.coinTypes,arenaType:this.arenaType,nodeIds:this.nodeIds});this.list_room.array=e.roomList,this.list_room.array.length>0?this.noDataBox.visible=!1:this.noDataBox.visible=!0,this.list_room.visible=!0,Laya.timer.once(3e3,this,this.getRoomByType)}refreshRoomTime(){this.refreshRoomBtnRed();let e=this.list_room.array;if(!(e.length<1)){for(let i=0;i<e.length;i++)if(e[i]){let n=e[i];n.state==0?n.joinCd-=1e3:n.fightEndTime-=1e3}this.list_room.refresh()}}initArenaTypes(){var e=R.intance.m_dicArenaTypes.get(U.instance.arenaType),i=e.arenaLvs,n=[1,2,3];n.forEach(r=>{var o=this["btn_"+r],s=o.getChildByName("img_lock"),l=o.getChildByName("img_red");i.indexOf(r)!=-1?(o.disabled=!1,s.visible=!1):(o.disabled=!0,s.visible=!0)})}initCoinCombo(){U.instance.arenaType==3&&(this.list_coin.visible=!1);var e=R.intance.m_dicArenaTypes.get(U.instance.arenaType);this.coinTypes=[];var i=e.coinTypes;this.coinDatas=[],i.forEach(n=>{this.coinTypes.push(n);var r=R.intance.m_dicItems.get(n);this.coinDatas.push([n,!0,d.instance.getLanguage(r.name)])}),this.list_coin.array=this.coinDatas}onCoinSelected(){this.coinTypes=[],this.coinDatas.forEach(e=>{e[1]&&this.coinTypes.push(e[0])}),console.log("您选中了 coinType"+this.coinTypes),this.getRoomByType()}initNodeCombo(){this.nodeIds=[];var e=R.intance.m_dicNodes.values;this.nodeDatas=[],e.forEach(i=>{this.nodeIds.push(i.id),this.nodeDatas.push([i.id,!0,i])}),this.list_node.array=this.nodeDatas}onNodeSelected(){this.nodeIds=[],this.nodeDatas.forEach(e=>{e[1]&&this.nodeIds.push(e[0])}),console.log("您选中了 nodeType"+this.nodeIds),this.getRoomByType()}refreshRoomBtnRed(){var e=U.instance.arenaType;this.img_red_1.visible=L.instance.getRedDotById(Ze.instance["ROOM_"+e+"_1"]),this.img_red_2.visible=L.instance.getRedDotById(Ze.instance["ROOM_"+e+"_2"]),this.img_red_3.visible=L.instance.getRedDotById(Ze.instance["ROOM_"+e+"_3"])}async onclickBtnHandler(e){switch(e){case this.btn_create:H.intance.openModule(f.CreateRoomDialog,[this.arenaLv]);break;default:B.instance.notice(d.instance.getLanguage(12));break}}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}onDisable(){y.intance.off(h.ROLE_INFO_CHANGE,this,this.updateTopInfo),y.intance.off(St.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),y.intance.off(h.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),y.intance.off(h.EVENT_CHECK_NODE_SELECT,this,this.onNodeSelected),y.intance.off(h.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}onEnterMatchRoom(e){e?Laya.timer.once(3e3,this,this.getRoomByType):Laya.timer.clear(this,this.getRoomByType)}};Js.M_B_FIRST_Open=!0,Js=p([NI("Kvjumjs4Q--HdgEZ8LzawA")],Js);var fp=class extends Laya.Box{};var{regClass:OI}=Laya,yp=class extends fp{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.check_coin.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,!e)return;this.addEvent();let i=e;this.check_coin.selected=i[1];var n=i[2];this.img_node.skin=C.instance.getNodeIcon(n.area)}onCheck(){this._dataSource[1]=this.check_coin.selected,y.intance.event(h.EVENT_CHECK_NODE_SELECT)}};yp=p([OI("81z6wk15RUi5m_pFud3KHg")],yp);var ui=class{constructor(){}};ui.GREEN="#2ac84b",ui.YELLOW="#e8c833",ui.RED="#e04343";var bp=class extends Laya.Box{};var{regClass:HI}=Laya,gp=class extends bp{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.nodeItem=e,this.img_node.skin=C.instance.getNodeIcon(this.nodeItem.area),this.tf_node.text=d.instance.getLanguage(this.nodeItem.name),this.onGameDelay(this.nodeItem.dT)}onGameDelay(e){var i=R.intance.getGeneralValueById(6),n=i[0],r=i[1];this.tf_delay.text=e+"ms",e>r?(this.img_delay.skin="res/common/comm/img_com_xinhao3.png",this.tf_delay.color=ui.RED):e>n?(this.img_delay.skin="res/common/comm/img_com_xinhao2.png",this.tf_delay.color=ui.YELLOW):(this.img_delay.skin="res/common/comm/img_com_xinhao1.png",this.tf_delay.color=ui.GREEN)}startTest(){Laya.timer.loop(5e3,this,this.onTestUrl)}onTestUrl(){A.stopHeartInStage||(this.nodeItem&&this.nodeItem.testUrl(),this.onGameDelay(this.nodeItem.dT))}onDisable(){Laya.timer.clearAll(this)}};gp=p([HI("hhMSfaGLSJmVqJcF08xLgA")],gp);var vp=class extends Laya.Box{};var{regClass:UI}=Laya,Lp=class extends vp{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&(this.addEvent(),this.img_icon.skin=C.instance.getNodeIcon(i.area),this.tf_name.text=d.instance.getLanguage(i.name),this.nodeDelaySign.dataSource=i)}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};Lp=p([UI("3WEF588kThqDCYUgf5gM6w")],Lp);var _p=class extends Laya.Dialog{};var{regClass:VI}=Laya,xp=class extends _p{constructor(){super()}onEnable(){this.list_airdrop.visible=!1,this.tf_consume.text=d.instance.getUILang("Consume items"),this.tf_value.text=d.instance.getUILang("value/U"),this.setOpenData()}async setOpenData(){var t=await A.requestPost("wxgame/money/drawTokenPayOutRecord",{});t&&(t.records.push(void 0),this.list_airdrop.array=t.records,this.list_airdrop.visible=!0,!t.records||t.records.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1)}onDisable(){}};xp=p([VI("u4LW1QxJTQOj64w92cnRVg")],xp);var ut=class ut{constructor(){}static formatMM(t){if(t<=0)return"00:000";let e,i;e=t/1e3,i=t%1e3;let n="";return e<=9&&(n+="0"),n+=Math.floor(e),n+=":",i<=9?n+="00":i<=99&&(n+="0"),n+=i,n}static format(t,e=":",i=!0){if(t<=0)return i?"00:00:00":"00:00";let n,r,o,s,l;s=t/3600,o=t%3600,l=o/60,n=o%60;let c="";return i&&(s<=9&&(c+="0"),c+=Math.floor(s)+e),l<=9&&(c+="0"),c+=Math.floor(l)+e,Math.ceil(n)<=9&&(c+="0"),c+=Math.ceil(n),c}static formatWithDay(t,e=":"){if(t<=0)return"00:00";let i,n,r,o,s;n=t/86400,r=t%86400,o=r/3600,r=r%3600,s=r/60,i=r%60;let l="";if(n>=1){let c=n>1?2005:2003;l=d.instance.getLanguage(c,Math.floor(n))+" ",o<=9&&(l+="0"),i%2!=0&&(e=be.getColorText(e,"#412b20")),l+=Math.floor(o)+e,s<=9&&(l+="0"),l+=Math.floor(s)}else o<=9&&(l+="0"),l=Math.floor(o)+e,s<=9&&(l+="0"),l+=Math.floor(s)+e,Math.ceil(i)<=9&&(l+="0"),l+=Math.ceil(i);return l}static getTimeArray(t,e="HH-MM-SS"){if(t=Math.max(0,t),e.indexOf("-")==-1)return[];let i=[],n=e.split("-");for(let r of n)r=="DD"?i.push(Math.floor(t/ut.OneDaySceond)):r=="HH"?i.push(Math.floor(t%ut.OneDaySceond/ut.OneHourSceond)):r=="MM"?i.push(Math.floor(t%ut.OneHourSceond/ut.OneMiniuteSecond)):r=="SS"&&i.push(t%ut.OneMiniuteSecond);return i}static getServerDate(t){return new Date(t)}static formatTime(t){return(parseInt(t/60+"")+100).toString().substring(1)+":"+(parseInt(t%60+"")+100).toString().substring(1)}static formatTime000000(t){return t?(parseInt(t/3600+"")+100).toString().substring(1)+":"+(parseInt(t%3600/60+"")+100).toString().substring(1)+":"+(parseInt(t%60+"")+100).toString().substring(1):"00:00:00"}static formatTimeStamp(t,e="YY-MT-DD HH:MM:SS"){let i=ut.getServerDate(t),n="";if(e.indexOf("YY")>=0&&(n=i.getFullYear()+"",e=e.replace("YY",n)),e.indexOf("MT")>=0){let r=i.getMonth()+1;r>9?n=r+"":n="0"+r,e=e.replace("MT",n)}if(e.indexOf("DD")>=0){let r=i.getDate();r>9?n=r+"":n="0"+r,e=e.replace("DD",n)}if(e.indexOf("HH")>=0){let r=i.getHours();r>9?n=r+"":n="0"+r,e=e.replace("HH",n)}if(e.indexOf("MM")>=0){let r=i.getMinutes();r>9?n=r+"":n="0"+r,e=e.replace("MM",n)}if(e.indexOf("SS")>=0){let r=i.getSeconds();r>9?n=r+"":n="0"+r,e=e.replace("SS",n)}return e}static formatTimeStamps(t,e="YY-MT-DD HH:MM:SS"){let i=ut.getServerDate(t),n=e;return n=ut.parseTimeDetail(i,n,"YY",!1),n=ut.parseTimeDetail(i,n,"MT",!1),n=ut.parseTimeDetail(i,n,"DD",!1),n=ut.parseTimeDetail(i,n,"HH",!0),n=ut.parseTimeDetail(i,n,"MM",!0),n=ut.parseTimeDetail(i,n,"SS",!0),n}static parseTimeDetail(t,e,i,n){if(e.indexOf(i)>=0){let r,o;i=="YY"?o=t.getFullYear():i=="MT"?o=t.getMonth()+1:i=="DD"?o=t.getDate():i=="HH"?o=t.getHours():i=="MM"?o=t.getMinutes():i=="SS"&&(o=t.getSeconds()),o>9||!n?r=o.toString():r="0"+o,e=e.replace(i,r)}return e}static getServerTimeStr(){return ut.formatTimeStamp(Laya.timer.currTimer)}static getTimeArr(){return ut.getServerTimeStr().split("/")}static get getDay(){let e=ut.getServerTimeStr().split("/");return parseInt(e[2])}static parseSheetTime(t){let e="";if(t){let i=t.length;for(let n=0;n<i;n++){let r="";t[n]<10?r="0"+t[n]:r=t[n],n!==i-1&&(r=r+":"),e+=r}}return e}static dateStringToTimestamp(t,e){let[i,n,r]=t.split("-").map(Number),o=Number(e),s=new Date(i,n-1,r,o).getTime();return Number(s)}static getCurrentDayTimestamp(){let t=new Date,e=t.getHours();return t.setHours(e,0,0,0),t.getTime()}static getYearMonthDat(t){let e=new Date(t),i=e.getFullYear(),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):""+(e.getMonth()+1),r=e.getDate()<10?"0"+e.getDate():""+e.getDate();return`${i}-${n}-${r}`}static formatDayAndTime(t,e="-"){let i=new Date(t),n=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),o=String(i.getDate()).padStart(2,"0"),s=String(i.getHours()).padStart(2,"0"),l=String(i.getMinutes()).padStart(2,"0");return{date:`${n}${e}${r}${e}${o}`,time:`${s}:${l}`}}static formatTimeAgo(t){return t<60*1e3?d.instance.getLanguage(1188):t<60*60*1e3?d.instance.getLanguage(2004,Math.floor(t/6e4)):t<24*60*60*1e3?d.instance.getLanguage(2003,Math.floor(t/36e5)):d.instance.getLanguage(2002,Math.floor(t/(24*60*60*1e3)))}static colorTimeAgo(t){return t<60*1e3?"#43ef74":"#b4b4b4"}static formatTimeExpires(t){return t<60*1e3?d.instance.getLanguage(1214,t):t<60*60*1e3?d.instance.getLanguage(1215,Math.floor(t/6e4)):t<24*60*60*1e3?d.instance.getLanguage(1216,Math.floor(t/36e5)):d.instance.getLanguage(1217,Math.floor(t/(24*60*60*1e3)))}};ut.OneDaySceond=24*3600,ut.OneHourSceond=3600,ut.OneMiniuteSecond=60;var we=ut;var wp=class extends Laya.Box{};var{regClass:FI}=Laya,Ip=class extends wp{constructor(){super()}addEvent(){}set dataSource(t){if(super.dataSource=t,!t){this.visible=!1;return}this.setData(t),this.addEvent()}setData(t){let e=R.intance.getPuzzleExchangeByName("WBNB").value,i=we.formatDayAndTime(t.time);this.tf_day.text=i.date,this.tf_consume.text=`${t.count}`,this.tf_value.text=`${t.count*e}`,t.puzzleId==1?this.tf_limit.text=`${Ee.filterNumFormat(t.coinValue,2)}`:this.tf_limit.text=`${Ee.filterNumFormat(t.coinValue,6)}`;let n=R.intance.getPuzzleExchange(t.puzzleId).name;this.tf_type.text=`${n}`}};Ip=p([FI("gHc-YmsARYaK65kwDLBAAw")],Ip);var Ep=class extends Laya.Scene{};var pt=class{constructor(){}};pt.TYPE_Consumption=1,pt.TYPE_Equipment=2,pt.TYPE_Currency=3,pt.TYPE_Hero=4,pt.TYPE_Fragment=5,pt.BACKTYPE_Consumption=1,pt.BACKTYPE_Equipment=3,pt.BACKTYPE_PA_CUP=4;var{regClass:zI}=Laya,Tp=class extends Ep{constructor(){super(...arguments);this.withdrawText=null;this.allProp=[];this.puzzleNum=0;this.addPuzzleNum=0;this.wbnbRate=0;this.webData=["MATCH","BSC","BSC_TESTNET","Ethereum"];this.webDataAir=["BSC"];this.tokenData=[];this.tokenDataAir=[];this.currTab=0;this.type=1;this.coinType=-1;this.tokenIndex=0;this.tokenIndex2=0;this.items=[]}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP}onOpened(e){this.list_champ.array=[],e&&e.length>1&&(this.type=e[0],this.coinType=e[1],this.onClickTab(this.type)),this.withdrawText=this.withdrawCode.prompt}onEnable(){y.intance.on(h.EVENT_WELFARE_CLAIM,this,this.onClaimWelfare),this.btn_champDetail.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_champDetail]),this.btn_champRecord.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_champRecord]),this.btn_withdrawRecord.label=d.instance.getUILang("ExtractionRecords"),this.btn_airRecord.label=d.instance.getUILang("ExtractionRecords"),this.btn_7.getChildByName("tf_txt").text=d.instance.getUILang("AIRDROP WITHDRAWAL"),this.tf_serviceRate1.text=d.instance.getUILang("service rate"),this.initTokenWebData(),this.initTokenWebDataAir(),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_4.on(Laya.Event.CLICK,this,this.onClickTab,[4]),this.btn_5.on(Laya.Event.CLICK,this,this.onClickTab,[5]),this.btn_7.on(Laya.Event.CLICK,this,this.onClickTab,[7]),this.rechargeCode.on(Laya.Event.INPUT,this,this.onRechargeCodeInput),this.rechargeCode.on(Laya.Event.BLUR,this,this.testRechargeCodeInput),this.withdrawCode.on(Laya.Event.INPUT,this,this.onRechargewithdrawCodeInput),this.withdrawCode.on(Laya.Event.BLUR,this,this.testInputData),y.intance.on(h.CHANGE_ASSET_CHAIN,this,this.changeAssetChain),this.btn_hireRecord.on(Laya.Event.CLICK,this,this.onHireRecord),this.btn_proxyRecord.on(Laya.Event.CLICK,this,this.onProxyRecord),this.btn_claimHire.on(Laya.Event.CLICK,this,this.onClaimHire),this.btn_claimProxy.on(Laya.Event.CLICK,this,this.onClaimProxy),this.list_web.renderHandler=Laya.Handler.create(this,this.onWebItemRender,null,!1),this.list_token.renderHandler=Laya.Handler.create(this,this.onTokenItemRender,null,!1),this.list_web2.renderHandler=Laya.Handler.create(this,this.onWebItemRender2,null,!1),this.list_token2.renderHandler=Laya.Handler.create(this,this.onTokenItemRender2,null,!1),this.list_token3.renderHandler=Laya.Handler.create(this,this.onTokenItemRender3,null,!1),this.box_web.on(Laya.Event.CLICK,this,this.onOpenWeb,[this.img_web_pad]),this.box_web2.on(Laya.Event.CLICK,this,this.onOpenWeb,[this.img_web_pad2]),this.box_token.on(Laya.Event.CLICK,this,this.onOpenToken,[this.img_token_pad]),this.box_token2.on(Laya.Event.CLICK,this,this.onOpenToken,[this.img_token_pad2]),this.box_token3.on(Laya.Event.CLICK,this,this.onOpenToken,[this.img_token_pad3]),this.btn_confirm.on(Laya.Event.CLICK,this,this.onbtnConfirm),this.btn_max.on(Laya.Event.CLICK,this,this.onbtnMax),this.list_web.selectHandler=new Laya.Handler(this,this.handleSelectWeb),this.list_token.selectHandler=new Laya.Handler(this,this.handleSelectToken),this.list_web2.selectHandler=new Laya.Handler(this,this.handleSelectWebWithdraw),this.list_token2.selectHandler=new Laya.Handler(this,this.handleSelectTokenWithdraw),this.list_token3.selectHandler=new Laya.Handler(this,this.handleSelectTokenAir),this.tf_adress.text=j.instance.walletAddress,this.tf_adressAir.text=j.instance.walletAddress,this.btn_withdraw.on(Laya.Event.CLICK,this,this.onBtnWithdraw),this.btn_withdrawRecord.on(Laya.Event.CLICK,this,this.onBtnWithdrawRecord),this.btn_jianE.on(Laya.Event.CLICK,this,this.onBtnJianE),this.btn_addE.on(Laya.Event.CLICK,this,this.onBtnAddE),this.btn_addMax.on(Laya.Event.CLICK,this,this.onBtnAddMax),this.btn_airRecord.on(Laya.Event.CLICK,this,this.onBtnAirRecord),y.intance.on(h.REFRESH_ALL_WITHDRAW_DATA,this,this.refreshWithdrawData),this.btn_Combine.on(Laya.Event.CLICK,this,this.onBtnCombine),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.box_all.visible=!1,this.initDataView()}setTab(e){for(let i=1;i<8;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b",this["box_"+i]&&(this["box_"+i].visible=!0)):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#4e87b7",this["box_"+i]&&(this["box_"+i].visible=!1))}async initDataView(){this.destroyed||(this.type?this.onClickTab(this.type):this.onClickTab(5),this.list_hire.visible=!1,this.list_proxy.visible=!1,this.list_reward.visible=!1,this.listHireReward.visible=!1)}async showHireData(){var e=await A.requestPost("wxgame/lease/outline",{});if(e&&e.reward){let n=ve.processItemsArray(e.reward);e.reward.length>0?this.btn_claimHire.disabled=!1:this.btn_claimHire.disabled=!0;let r=n[0];this.list_hire.array=r,this.list_hire.selectedIndex=-1,this.list_hire.visible=!0,e.leaderCount?this.tf_hireNum.text=d.instance.getLanguage(1179,e.leaderCount):this.tf_hireNum.text=d.instance.getLanguage(1179,0);let o=n[1];var i=[];o.forEach(s=>{var l=new Ve(s.id);l.newAddCnt=s.count,i.push(l)}),this.listHireReward.array=i,this.listHireReward.selectedIndex=-1,this.listHireReward.visible=!0}}async showProxyData(){var e=await A.requestPost("wxgame/lease/outline",{});if(e&&e.childReward){let r=ve.processItemsArray(e.childReward),o=r[0],s=r[2];e.childReward.length>0?this.btn_claimProxy.disabled=!1:this.btn_claimProxy.disabled=!0;var i=[],n=s;n.forEach(l=>{var c=new Ve(l.id);c.newAddCnt=l.count,i.push(c)}),this.list_reward.array=i,this.list_reward.visible=!0,this.list_proxy.array=o,this.list_proxy.visible=!0,this.list_proxy.selectedIndex=-1,e.childCount?this.tf_proxyNum.text=d.instance.getLanguage(1180,e.childCount):this.tf_proxyNum.text=d.instance.getLanguage(1180,0)}}async onClickTab(e){if(this.currTab=e,this.setTab(e),this.box_all.visible=!0,e==1)this.box_1.visible=!0,this.initContainer();else if(e==2)this.initContainer();else if(e==3)this.showHireData();else if(e==4)this.showProxyData();else if(e==5){var i=await A.requestPost("wxgame/welfare/outline",{});i?(this.tf_champNum.text=d.instance.getLanguage(1133)+" "+i.welfareCount,this.list_champ.array=i.welfareDtoList,!i.welfareDtoList||i.welfareDtoList.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1):B.instance.notice(d.instance.getLanguage(135))}else e==7&&this.initContainerAir()}async handleClickBtn(e){switch(e){case this.btn_champDetail:{let i=await A.requestPost("wxgame/welfare/list",{});i.welfareDtoList?H.intance.openModule(f.ChampDetailDialog,i.welfareDtoList):B.instance.notice(d.instance.getLanguage(135))}break;case this.btn_champRecord:{let i=await A.requestPost("wxgame/welfare/takeList",{});i.welfareDtoList?H.intance.openModule(f.ChampRecordDialog,i.welfareDtoList):B.instance.notice(d.instance.getLanguage(135))}break}}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}onClaimWelfare(e){var i=this.list_champ.array;if(i instanceof Array){for(let n of i)if(n.coinType==e.coinType){n.takeValue=0;continue}this.list_champ.refresh()}}removeEvent(){y.intance.off(h.EVENT_WELFARE_CLAIM,this,this.onClaimWelfare),this.btn_1.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_2.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_3.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_4.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_5.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_7.off(Laya.Event.CLICK,this,this.onClickTab),this.rechargeCode.off(Laya.Event.INPUT,this,this.onRechargeCodeInput),y.intance.off(h.CHANGE_ASSET_CHAIN,this,this.changeAssetChain),this.btn_hireRecord.off(Laya.Event.CLICK,this,this.onHireRecord),this.btn_proxyRecord.off(Laya.Event.CLICK,this,this.onProxyRecord),this.btn_claimHire.off(Laya.Event.CLICK,this,this.onClaimHire),this.btn_claimProxy.off(Laya.Event.CLICK,this,this.onClaimProxy),this.box_web.off(Laya.Event.CLICK,this,this.onOpenWeb),this.box_token.off(Laya.Event.CLICK,this,this.onOpenToken),this.box_token2.off(Laya.Event.CLICK,this,this.onOpenToken),this.box_token2.off(Laya.Event.CLICK,this,this.onOpenToken),this.btn_confirm.off(Laya.Event.CLICK,this,this.onbtnConfirm),this.btn_max.off(Laya.Event.CLICK,this,this.onbtnMax)}onOpenWeb(e){e.visible==!1&&(e.visible=!0,Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onOpenToken(e){e.visible==!1&&(e.visible=!0,Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onWebItemRender(e,i){e&&e.onChange&&e.onChange(this.list_web.selectedIndex==i)}onWebItemRender2(e,i){e&&e.onChange&&e.onChange(this.list_web2.selectedIndex==i)}onTokenItemRender(e,i){e&&e.onChange&&e.onChange(this.list_token.selectedIndex==i)}onTokenItemRender2(e,i){e&&e.onChange&&e.onChange(this.list_token2.selectedIndex==i)}onTokenItemRender3(e,i){e&&e.onChange&&e.onChange(this.list_token3.selectedIndex==i)}async createWebList(){this.currTab==1?(this.list_web.array=this.webData,this.list_web.visible=!0):(this.list_web2.array=this.webData,this.list_web2.visible=!0),await this.initNetComboBox()}async createWebListAir(){await this.initNetComboBox()}async createTokenList(){if(await this.initTokenData(),this.tokenIndex=0,!(this.tokenData.length<=0))switch(this.currTab){case 1:this.list_token.array=this.tokenData,this.list_token.visible=!0,this.tf_token.text=`${this.tokenData[0]}`;break;case 2:this.list_token2.array=this.tokenData,this.list_token2.visible=!0,this.list_token2.selectedIndex=0,this.tf_token2.text=`${this.tokenData[0]}`,this.tf_token2.text=="GALA"?this.btn_withdraw.disabled=!0:this.btn_withdraw.disabled=!1;break;case 7:this.list_token3.array=this.tokenDataAir,this.list_token3.visible=!0,this.list_token3.selectedIndex=0,this.tf_token3.text=`${this.tokenDataAir[0]}`;break;default:break}}onHideList(){this.img_web_pad.visible=!1,this.img_token_pad.visible=!1,this.img_web_pad2.visible=!1,this.img_token_pad2.visible=!1,this.img_token_pad3.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideList)}async initContainer(){await this.createWebList(),this.createTokenList(),this.currTab==1&&this.handleSelectWeb(1)}async initContainerAir(){await this.createWebListAir(),this.createTokenList(),this.currTab==1?this.handleSelectWeb(1):this.currTab==7&&this.handleSelectWebAir(1)}async getRestCoin(e){try{let i=await j.instance.getBalance2(e.token),n=e.tokenDecimals,r=Va(i,n);this.tf_rest.text=`${ve.truncateToTwoDecimalPlaces(Number(r))}`}catch(i){if(i instanceof Error){let n=i.message;console.log("剩余货币错误",n)}this.tf_rest.text="0"}}async initNetComboBox(){let e=await j.instance.walletClient.getChainId();if(!e)return;let i=j.instance.getChainNameByID(e);i==="MAINNET"&&(i="Ethereum");let n=this.getListIndexByName(i);switch(this.currTab){case 1:this.list_web.selectedIndex=n;break;case 2:this.list_web2.selectedIndex=n,this.handleSelectTokenWithdraw(0);break;case 7:this.handleSelectTokenAir(0);break;default:break}}getListIndexByName(e){return this.list_web.array.findIndex(i=>i==e)}async switchChain(e=!0){try{let i,n;switch(this.currTab){case 1:i=this.tf_web.text;break;case 2:i=this.tf_web2.text;break;case 7:break;default:break}i==="Ethereum"&&(i="MAINNET"),n=bi[i];let r=await j.instance.walletClient.getChainId();if((n!==r||e)&&!await j.instance.switchChain(n)){console.log("切换失败，请手动切换"),await this.addChain(),await this.initNetComboBox();return}this.currTab===7&&await this.initTokenDataAir(),await this.createTokenList(),r=await j.instance.walletClient.getChainId(),console.log(this.tokenData),await this.initTokenData();let o=xe[`TYPE_${this.tokenData[0]}`]||xe.TYPE_TOX,s=R.intance.getCurrency(o);s&&this.getRestCoin(s),this.initNetComboBox()}catch(i){i instanceof Error&&i.message.includes("Unrecognized chain ID")&&await this.addChain(),this.initNetComboBox()}}async addChain(){let e;this.currTab===1?e=bi[this.tf_web.text]:e=bi[this.tf_web2.text],await j.instance.addChain(e);let i=await j.instance.walletClient.getChainId();i&&this.switchChain(i)}async handleSelectWeb(e){if(e!=-1){let i=this.list_web.selectedItem;this.tf_web.text=`${i}`,this.tokenIndex=0,this.switchChain(!0)}}async handleSelectWebWithdraw(e){if(e!=-1){let i=this.list_web2.selectedItem;this.tf_web2.text=`${i}`,this.tokenIndex=0,this.switchChain(!0)}}async handleSelectWebAir(e){}handleSelectToken(e){e!=-1&&(this.tf_token.text=`${this.tokenData[e]}`,this.tokenIndex=e,this.refreshToken())}async refreshWithdrawData(){this.handleSelectTokenWithdraw(this.list_token2.selectedIndex)}async handleSelectTokenWithdraw(e){if(e!=-1){console.log(this.tokenData),this.tf_token2.text=`${this.tokenData[e]}`,this.tf_token2.text=="GALA"?this.btn_withdraw.disabled=!0:this.btn_withdraw.disabled=!1;let n=0,r=ve.getCurrencyIdByName(this.tf_token2.text),o=await j.instance.walletClient.getChainId();n=L.instance.getConsumeValue(r),this.tf_appAmount.text=`${ve.truncateToTwoDecimalPlaces(n)}`;let s=R.intance.getACoin(o,r);s&&(this.tf_servicerate.text=`${s.Commission/100}%`);var i=await A.requestPost("wxgame/payOrder/query",{chainId:o});if(i&&i.selfData){let l=this.searchRestMoney(i.selfData,r);this.tf_canAmount.text=`${ve.truncateToTwoDecimalPlaces(l)}`}}}async handleSelectTokenAir(e){if(e!=-1){this.wbnbRate=0,this.tf_token3.text=`${this.tokenDataAir[e]}`;let i=0,n=ve.getCurrencyIdByName(this.tf_token3.text);i=L.instance.getConsumeValue(n),this.tf_appAmount.text=`${ve.truncateToTwoDecimalPlaces(i)}`,this.allProp=await this.getItemByType();let r=R.intance.getPuzzleExchangeByName(this.tf_token3.text),o=r.items,s=r.redeemTickets,l=new Ve;l.m_iId=s[0],l.m_iNum=s[1],this.img_extRe.skin=C.instance.getItemIcon(l.itemItem.icon);let c=this.getAirdropArrData(this.allProp,o);this.puzzleNum==0?this.btn_Combine.disabled=!0:this.btn_Combine.disabled=!1,this.listPuzzle.array=c,this.addPuzzleNum=0,this.tf_token3.text=="WICP"||this.tf_token3.text=="WKLAY"||this.tf_token3.text=="WBNRY",this.puzzleNum==0?(this.tf_extraRec.text="0",this.tf_ExtractNum.text="0",this.addPuzzleNum=0):(this.addPuzzleNum=1,this.showExtraNum(1))}}async showExtraNum(e){this.tf_extraRec.text=`${e}`,this.tf_ExtractNum.text=`${this.addPuzzleNum}`}getAirdropArrData(e,i){let n=[];this.puzzleNum=0;for(let o=0;o<i.length;o++){let s=e.find(l=>l.itemItem.id==i[o][0]);if(s){n.push(s);let l=Ee.formatNumber(s.m_iNum,8);n.length==1?this.puzzleNum=l:this.puzzleNum=Math.min(this.puzzleNum,l)}else{var r=new Ve(i[o][0]);r.newAddCnt=0,n.push(r),this.puzzleNum=0}}return this.refreshRestExtraValue(),n}refreshRestExtraValue(){let e=R.intance.getPuzzleExchangeByName(this.tf_token3.text).value,i=R.intance.getPuzzleExchangeByName("WBNB").value,n=`${this.puzzleNum*i}U / `;switch(this.tf_token3.text){case"WTOX":n+=`${Ee.filterNumFormat(this.puzzleNum*e,2)}WTOX`;break;case"WBNB":n+=`${Ee.filterNumFormat(this.puzzleNum*e*this.wbnbRate,6)}WBNB`;break;case"WGALA":n+=`${Ee.filterNumFormat(this.puzzleNum*e*this.wbnbRate,6)}WGALA`;break;case"WGGG":n+=`${Ee.filterNumFormat(this.puzzleNum*e*this.wbnbRate,6)}WGGG`;break;case"WICP":n+="?WICP";break;case"WKLAY":n+="?WKLAY";break;case"WBNRY":n+="?WBNRY";break;default:break}this.tf_extraVal.text=n}onRechargeCodeInput(){let e=Number(this.rechargeCode.text),i=ve.isNumber(this.rechargeCode.text);(e<0||!i)&&(this.rechargeCode.text="0")}testRechargeCodeInput(){let e=Number(this.rechargeCode.text);this.rechargeCode.text=`${ve.formatNumber(e)}`}async onbtnConfirm(){this.testRechargeCodeInput();let e=Number(this.tf_rest.text),i=Number(this.rechargeCode.text),n=await j.instance.walletClient.getChainId();if(!i){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(33),N.YES);return}if(e<i){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(34),N.YES);return}me.instance.showLoadingByInfo();let r=R.intance.getNetAddress(n),o=xe[`TYPE_${this.tf_token.text}`]||xe.TYPE_TOX,s=R.intance.getCurrency(o);await nn.instance.rechargeToken(i,s,r)&&(this.getRestCoin(s),L.instance.rechargeEnd=!0)}async refreshToken(){try{let e=xe[`TYPE_${this.tf_token.text}`]||xe.TYPE_TOX,i=R.intance.getCurrency(e);i&&this.getRestCoin(i);let n=await j.instance.getBalance2(i.token),r=R.intance.getCurrency(e).tokenDecimals,o=Va(n,r);this.tf_rest.text!==o&&(this.tf_rest.text=`${ve.roundToTwoDecimals(Number(o))}`,Laya.timer.clear(this,this.refreshToken))}catch{this.tf_rest.text="0"}}onbtnMax(){let e=Number(this.tf_rest.text);this.rechargeCode.text=`${e}`}initTokenWebData(){this.webData=[];var e=R.intance.getGeneralValueById(7);if(e){for(let i=0;i<e.length;i++)switch(e[i]){case 1:this.webData.push("MATCH");break;case 2:this.webData.push("BSC");break}$.vType!==2?(this.webData.push("BSC_TESTNET"),this.webData.push("SEPOLIA")):this.webData.push("Ethereum")}this.initTokenData()}initTokenWebDataAir(){this.webDataAir=[],$.vType!==2?(this.webDataAir.push("BSC_TESTNET"),this.webDataAir.push("SEPOLIA"),this.webDataAir.push("ICP"),this.webDataAir.push("Klaytn"),this.webDataAir.push("Optimism")):(this.webDataAir.push("BSC"),this.webDataAir.push("Ethereum"),this.webDataAir.push("ICP"),this.webDataAir.push("Klaytn"),this.webDataAir.push("Optimism")),this.initTokenDataAir()}changeAssetChain(){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(36),N.YES,Laya.Handler.create(this,()=>{this.switchChain(!0)}))}async initTokenData(){let e=await j.instance.walletClient.getChainId();this.tokenData=[],e==56||e==97?this.tokenData=["BTOX"]:e==1||e==11155111?this.tokenData=["GALA"]:this.tokenData=["TOX"]}async initTokenDataAir(){this.tokenDataAir=["WTOX","WBNB","WGGG","WGALA","WICP","WKLAY","WBNRY"]}onHireRecord(){H.intance.openModule(f.HireDetailDialog)}onProxyRecord(){H.intance.openModule(f.ProxyDetailDialog)}async onClaimHire(){var e=await A.requestPost("wxgame/lease/take",{});if(e&&e.reward.length>0){let i=e.reward,n=[];i.forEach(r=>{var o=new Di;o.id=r.id,o.count=r.count,n.push(o)}),H.intance.openModule(f.RewardGetDialog,n)}this.showHireData()}async onClaimProxy(){var e=await A.requestPost("wxgame/lease/childTake",{});if(e&&e.reward&&e.reward.length>0){let i=e.reward;H.intance.openModule(f.RewardGetDialog,i)}this.showProxyData()}onRechargewithdrawCodeInput(){let e=Number(this.withdrawCode.text),i=ve.isNumber(this.withdrawCode.text);(e<0||!i)&&this.withdrawCode.text!==this.withdrawText&&(this.withdrawCode.text="0")}async testInputData(){let e=Number(this.withdrawCode.text),i=ve.getCurrencyIdByName(this.tf_token2.text),n=await j.instance.walletClient.getChainId(),r=R.intance.getACoin(n,i);if(!r)return;let o=Number(this.tf_appAmount.text);e>o?B.instance.notice(pe.instance.get(111)):e>r.maxAmount?B.instance.notice(d.instance.getLanguage(1211,r.maxAmount)):e<r.minAmount&&B.instance.notice(d.instance.getLanguage(1212,r.minAmount));let s=r.Commission,l=e*(1-s/1e4);i==xe.TYPE_TOX&&n==56?this.tf_arrive.text=`${l.toFixed(2).replace(/0+$/,"")}`:this.tf_arrive.text=`${l.toFixed(8).replace(/0+$/,"")}`}async onBtnWithdraw(){let e=Number(this.tf_appAmount.text),i=await j.instance.walletClient.getChainId(),n=Number(this.withdrawCode.text),r=xe[`TYPE_${this.tf_token2.text}`]||xe.TYPE_TOX,o=R.intance.getACoin(i,r);if(!o)return;let s=o.Commission,l=n*s/1e4;if(n>e){B.instance.notice(pe.instance.get(111));return}if(n>o.maxAmount){B.instance.notice(d.instance.getLanguage(1211,o.maxAmount));return}else if(n<o.minAmount){B.instance.notice(d.instance.getLanguage(1212,o.minAmount));return}let c=await j.instance.getAuthStatus();if($.vType==2&&!c&&i==9001){B.instance.notice(pe.instance.get(113));return}let u=Number(this.tf_arrive.text),m=n*(1-s/1e4);r==xe.TYPE_TOX&&i==56?u=Number(parseFloat(m.toFixed(2))):u=m;let g=R.intance.getCurrency(r),x=await A.requestPost("wxgame/payOrder/create",{chainId:i,coinType:r,payMoney:n,fee:l,arriveMoney:u,token:g.token});x&&x.errorCode==0&&be.NoHeroError("Pending Review")}onBtnWithdrawRecord(){H.intance.openModule(f.WithDrawRecordDialog)}searchRestMoney(e,i){for(let n=0;n<e.length;n++)if(e[n][0]===i)return e[n][1];return 0}async onBtnCombine(){let i=R.intance.getPuzzleExchangeByName(this.tf_token3.text).id;var n=await A.requestPost("wxgame/equip/puzzleExchangeTicket",{puzzleId:i,count:this.addPuzzleNum});if(n){let o=await A.requestPost("wxgame/hero/bagList",{},!0,!0);L.instance.m_packageData.initData(o.data),this.handleSelectTokenAir(this.list_token3.selectedIndex);let s=n.reward;if(s){var r=new Di;r.id=s[0].id,r.count=s[0].count,H.intance.openModule(f.RewardGetDialog,[r])}}}async onBtnAddExtr(){}async getItemByType(){var e=pt.TYPE_Consumption;this.items=[];for(var i=L.instance.m_packageData.getBackByType(e),n=0;n<i.length;n++){var r=i[n];r?this.items.push(r):this.items.push(new Ve(0))}return this.items}onBtnJianE(){this.addPuzzleNum=Math.max(0,this.addPuzzleNum-1),this.addPuzzleNum<=0?(this.tf_extraRec.text="0",this.tf_ExtractNum.text="0",this.btn_Combine.disabled=!0):this.showExtraNum(this.addPuzzleNum)}onBtnAddE(){this.addPuzzleNum=Math.min(this.puzzleNum,this.addPuzzleNum+1),this.showExtraNum(this.addPuzzleNum),this.addPuzzleNum>0&&(this.btn_Combine.disabled=!1)}onBtnAddMax(){this.puzzleNum<=0||(this.addPuzzleNum=this.puzzleNum,this.showExtraNum(this.addPuzzleNum),this.btn_addExtr.disabled=!1)}onBtnAirRecord(){H.intance.openModule(f.AirdropRecordDialog)}};Tp=p([zI("lWg_-biNSI2538WxA3KVVw")],Tp);var Sp=class extends Laya.Dialog{};var{regClass:GI}=Laya,Cp=class extends Sp{constructor(){super()}onEnable(){this.list_champ.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1)}setOpenData(t){t&&t instanceof Array&&(this.list_champ.array=t,!t||t.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1)}onItemRender(t,e){t.onSetIndex(e)}onDisable(){}};Cp=p([GI("mXj9kkXUQny2iuvlC1REmA")],Cp);var kp=class extends Laya.Box{};var{regClass:jI}=Laya,Ap=class extends kp{set dataSource(e){super.dataSource=e,this.welfareDto=e,this.welfareDto&&this.setCurrentOutPut()}onSetIndex(e){this.tf_id.text=e+1+""}setCurrentOutPut(){this.tf_createDate.text=we.formatTimeStamp(this.welfareDto.createDate,"YY-MT-DD");let e=this.welfareDto.coinType;this.img_coinType.skin=C.instance.getMoneyIcon(e),this.tf_type.text=d.instance.getUILang("Staking_Type_"+this.welfareDto.type),this.tf_coinValue.text=Ee.formatNumberStr(this.welfareDto.coinValue,8),this.tf_remainValue.text=Ee.formatNumberStr(this.welfareDto.remainValue,8),this.tf_remainDays.text=this.welfareDto.remainDays+""}};Ap=p([jI("b0cMZEy9S5q2q_vqsjWzDA")],Ap);var Dp=class extends Laya.Box{};var{regClass:qI}=Laya,Mp=class extends Dp{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.btn_claim.on(Laya.Event.CLICK,this,this.onClaim),this.isAddEvent=!0)}async onClaim(){if(this.welfareOutlineDto.takeValue>0){let i=await A.requestPost("wxgame/welfare/take",{coinType:this.welfareOutlineDto.coinType});if(i){var e=new Di;e.id=i.coinType,e.count=i.coinValue,H.intance.openModule(f.RewardGetDialog,[e]),y.intance.event(h.EVENT_WELFARE_CLAIM,i)}else B.instance.notice(d.instance.getLanguage(135))}}set dataSource(e){super.dataSource=e,this.welfareOutlineDto=e,this.welfareOutlineDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.welfareOutlineDto.coinType;this.img_coinType.skin=C.instance.getItemIcon(e),this.tf_allValue.text=Ee.formatNumberStr(this.welfareOutlineDto.allValue,8),this.tf_todayRelease.text=Ee.formatNumberStr(this.welfareOutlineDto.todayRelease,8),this.tf_takeValue.text=Ee.formatNumberStr(this.welfareOutlineDto.takeValue,8),this.btn_claim.disabled=this.welfareOutlineDto.takeValue<=0}};Mp=p([qI("XTGeF2FhTp2j7VZIhqRAtg")],Mp);var Bp=class extends Laya.Dialog{};var{regClass:WI}=Laya,Pp=class extends Bp{constructor(){super()}onEnable(){this.list_champ.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1)}setOpenData(t){t&&t instanceof Array&&(this.list_champ.array=t,!t||t.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1)}onItemRender(t,e){t.onSetIndex(e)}onDisable(){}};Pp=p([WI("RzcjHDjIS62Ejw744kaKKw")],Pp);var Rp=class extends Laya.Box{};var{regClass:KI}=Laya,Np=class extends Rp{set dataSource(e){super.dataSource=e,this.welfareTakeDto=e,this.welfareTakeDto&&this.setCurrentOutPut()}onSetIndex(e){this.tf_id.text=e+1+""}setCurrentOutPut(){this.tf_takeTime.text=we.formatTimeStamp(this.welfareTakeDto.takeTime,"YY-MT-DD");var e=this.welfareTakeDto.reward,i=[];e&&e.forEach(n=>{var r=new Ve(n.id);r.newAddCnt=n.count,i.push(r)}),this.list_reward.array=i}};Np=p([KI("0TASbeEtRlmozr-j6sElTw")],Np);var Op=class extends Laya.Dialog{};var{regClass:YI}=Laya,Hp=class extends Op{constructor(){super()}onEnable(){this.setOpenData(),this.list_sum.visible=!1,this.list_sumProp.visible=!1,this.list_champ.visible=!1}async setOpenData(){var t=await A.requestPost("wxgame/lease/takeList",{});if(t){let i=t.list;i=ve.addIndexToObjects(i),this.list_champ.array=i,this.list_champ.visible=!0;let n=ve.sumItemCount(i),r=ve.processItemsArray(n,!1),o=r[0],s=r[1];this.list_sum.array=o,this.list_sum.visible=!0,o.length>3?this.list_sum.y=506:this.list_sum.y=533;var e=[];s.forEach(l=>{var c=new Ve(l.id);c.newAddCnt=l.count,e.push(c)}),this.list_sumProp.array=e,this.list_sumProp.visible=!0}}onDisable(){}};Hp=p([YI("ZG7XYFvMTD-oZPNAmJhfIQ")],Hp);var Up=class extends Laya.Box{};var{regClass:$I}=Laya,Vp=class extends Up{constructor(){super()}set dataSource(e){super.dataSource=e,console.log(e),this.itemDto=e,this.itemDto&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.itemDto.id;this.img_coinType.skin=C.instance.getItemIcon(e),this.tf_takeValue.text=Ee.formatNumberStr(this.itemDto.count,8)}};Vp=p([$I("S4XctoHfRm66A2jjw3rSsQ")],Vp);var Fp=class extends Laya.Box{};var{regClass:XI}=Laya,zp=class extends Fp{constructor(){super();this.isAddEvent=!1}addEvent(){}set dataSource(e){super.dataSource=e,this.pledgeData=e,this.pledgeData&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.pledgeData.reward,i=ve.processItemsArray(e,!1),n=i[0],r=i[1];this.list_champ.array=n,n.length>3?this.list_champ.y=14:this.list_champ.y=40,this.tf_id.text=`${this.pledgeData.index+1}`;var o=[];r.forEach(s=>{var l=new Ve(s.id);l.newAddCnt=s.count,o.push(l)}),this.listHireReward.array=o,this.tf_days.text=we.getYearMonthDat(this.pledgeData.takeTime)}};zp=p([XI("_mG5oDuaQY6l5yGUFmpG4w")],zp);var Gp=class extends Laya.Box{};var{regClass:QI}=Laya,jp=class extends Gp{constructor(){super();this.isAddEvent=!1}addEvent(){}set dataSource(e){super.dataSource=e,this.pledgeData=e,e&&(this.addEvent(),this.setCurrentOutPut(e))}async setCurrentOutPut(e){this.img_coinType.skin=C.instance.getItemIcon(e.id),this.tf_coinValue.text=Ee.formatNumberStr(e.count,8)}};jp=p([QI("5t1LQunTRFOali6ENPwdqQ")],jp);var qp=class extends Laya.Dialog{};var{regClass:ZI}=Laya,Wp=class extends qp{constructor(){super()}onEnable(){this.setOpenData(),this.list_sum.visible=!1,this.list_sumProp.visible=!1,this.list_champ.visible=!1}async setOpenData(){var t=await A.requestPost("wxgame/lease/childTakeList",{});if(t){let i=t.list;i=ve.addIndexToObjects(i),this.list_champ.array=i,this.list_champ.visible=!0;let n=ve.sumItemCount(i),r=ve.processItemsArray(n,!1),o=r[0],s=r[1];this.list_sum.array=o,this.list_sum.visible=!0,o.length>3?this.list_sum.y=506:this.list_sum.y=533;var e=[];s.forEach(l=>{var c=new Ve(l.id);c.newAddCnt=l.count,e.push(c)}),this.list_sumProp.array=e}}onDisable(){}};Wp=p([ZI("hbicTwT0TxSxlRep4P48Tw")],Wp);var Kp=class extends Laya.Dialog{};var{regClass:JI}=Laya,Yp=class extends Kp{constructor(){super()}onEnable(){this.list_champ.visible=!1,this.setOpenData()}async setOpenData(){var t=await A.requestPost("wxgame/payOrder/list",{});if(t){let e=t.orderItems;this.list_champ.array=e,this.list_champ.visible=!0}!t.orderItems||t.orderItems.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1}onDisable(){}};Yp=p([JI("y0xiZs-qSDWRAXN_oE10yg")],Yp);var $p=class extends Laya.Box{};var{regClass:eE}=Laya,Xp=class extends $p{constructor(){super()}addEvent(){}set dataSource(t){if(super.dataSource=t,!t){this.visible=!1;return}console.log(t),this.setData(t),this.addEvent()}setData(t){let e=we.formatDayAndTime(t.createTime);switch(this.tf_day.text=e.date,this.tf_minute.text=e.time,this.img_coinType.skin=C.instance.getMoneyIcon(t.coinType),this.tf_amounte.text=`${t.payMoney}`,this.tf_serviceRate.text=`${t.fee.toFixed(8).replace(/\.?0+$/,"")}`,this.tf_arrive.text=`${t.arriveMoney.toFixed(8).replace(/\.?0+$/,"")}`,this.tf_network.text=`${ve.getKeyByValue(bi,t.matchId)}`,t.status){case 0:this.tf_status.text="Pending review",this.tf_status.color="#4be063";break;case 1:this.tf_status.text="Approved",this.tf_status.color="#4be063";break;case 2:this.tf_status.text="Not passed",this.tf_status.color="#cd4a4a";break;case 3:this.tf_status.text="Uploading",this.tf_status.color="#ffffff";break;case 4:this.tf_status.text="Upload Failed",this.tf_status.color="#cd4a4a";break;case 5:var i=d.instance.getUILang("successfully");this.tf_status.text=i,this.tf_status.color="#4be063";break;case 6:this.tf_status.text="Withdraw success",this.tf_status.color="#4be063";break}}};Xp=p([eE("tbS8gPlOTWuMdXb9g8wZAg")],Xp);var Qp=class extends Laya.Dialog{};var{regClass:tE}=Laya,Zp=class extends Qp{constructor(){super();this.destroyDoCancel=!1;this.canClose=!0}onEnable(){this.on(Laya.Event.CLICK,this,this.onClickEvent)}onClickEvent(e){let i=e.target;i.name=="okBtn"?(this._okHandler&&this._okHandler.runWith(null),this.close()):i.name=="cancleBtn"&&(this.destroyDoCancel=!1,this._cancelHandler&&this._cancelHandler.runWith(null),this.close())}setOpenData(e){e&&(this._okHandler=e.okHandler,this._cancelHandler=e.cancelHandler,this.destroyDoCancel=e.destroyDoCancel,e.flag<0?(this.cancleBtn.visible=!1,this.okBtn.visible=!1,this.canClose=!1):e.flag&N.YES&&!(e.flag&N.NO)?(this.okBtn.x=this.width-this.okBtn.width>>1,this.cancleBtn.visible=!1,this.okBtn.label="Sure"):e.flag&N.NO&&!(e.flag&N.YES)?this.okBtn.visible=!1:e.flag&N.YES&&e.flag&N.NO,e.data&&this.alertDesc&&(e.data instanceof Array?(this.alertTitle.text=e.data[0],this.alertDesc.text=e.data[1]):this.alertDesc.text=e.data),e.initHandler&&e.initHandler.runWith(this))}onDisable(){this.destroyDoCancel&&this._cancelHandler&&this._cancelHandler.run(),this._okHandler=null,this._cancelHandler=null}close(e){this.canClose&&super.close(e)}};Zp=p([tE("8G0DBvD7T_2CVupdfQXrBw")],Zp);var Jp=class extends Laya.Dialog{};var{regClass:iE}=Laya,em=class extends Jp{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem;L.instance.headId=i.id,this.playerIcon.headSkin=L.instance.headId}}createHeadList(){let e=R.intance.m_dicHead;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,n=0;this.playerIcon.headSkin=L.instance.headId;for(let r of e.values){if(r.id==L.instance.headId){i=n;break}n++}this.list_head.selectedIndex=i}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=d.instance.getUILang("Upload picture"),n=d.instance.getUILang("Select Image"),r=d.instance.getUILang("Save changes");openUploadPic(this,e,i,n,r)}async openPicEnd(e,i){if(i.length>500){let n=await A.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);n&&(L.instance.headId=n.imgUrl,e.playerIcon.headSkin=n.imgUrl,console.log(n.imgUrl))}}onRegister(){let e=L.instance.headId;y.intance.event(h.EVENT_MODIFY_HEAD,[e]),this.close()}};em=p([iE("BmtPy79ySCyg4IuEQC4zsQ")],em);var tm=class extends Laya.ComboBox{};var{regClass:aE}=Laya,im=class extends tm{set defaultLabel(t){this._defaultLabel=t,this._selectedIndex<0&&(this._button.label=t),this._button.labelAlign="center"}onEnable(){this.list=this.comboList}set dataSource(t){super.dataSource=t;var e=t;e&&(this.labels=e.join(","),console.log("comboData.length: "+e.length),this.list.repeatY=e.length,this.list.width=this.width,this.list.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1))}onCountryItemRender(t,e){t.onChange(this.list.selectedIndex==e)}set isOpen(t){if(console.log("isOpen: "+t),this._isOpen!=t)if(this._isOpen=t,this._button.selected=this._isOpen,this._isOpen){this._list||this._createList(),this._listChanged&&!this._isCustomList&&this.changeList(),this._itemChanged&&this.changeItem();var e=this.localToGlobal(Laya.Point.TEMP.setTo(0,0)),i=e.y+this._button.height;i=i+this._listHeight<=Laya.stage.height||e.y-this._listHeight<0?i:e.y-this._listHeight,this.img_pad.addChild(this._list),this.img_pad.pos(e.x,i),this.img_pad.visible=!0,Laya.stage.addChild(this.img_pad),this.img_pad.zOrder=1001,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.removeList),Laya.stage.on(Laya.Event.MOUSE_WHEEL,this,this._onStageMouseWheel),this._list.selectedIndex=this._selectedIndex}else this._list&&this._list.removeSelf(),this.img_pad&&this.img_pad.removeSelf()}};im=p([aE("AqEOSlrnRkmI9RUPCJUVqQ")],im);var am=class extends Laya.List{};var{regClass:nE}=Laya,nm=class extends am{};nm=p([nE("7DDHp602Rs6dL3bjAu4ArA")],nm);var rm=class extends Laya.Box{};var{regClass:rE}=Laya,om=class extends rm{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&i.label&&(this.addEvent(),this.tf_name.text=i.label)}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};om=p([rE("nREGzTKFSX6LuiRnM5nPXA")],om);var sm=class extends Laya.Box{};var{regClass:oE}=Laya,lm=class extends sm{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&(this.addEvent(),this.img_icon.skin=C.instance.getCountryIcon(i.id),this.tf_name.text=d.instance.getLanguage(i.name))}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};lm=p([oE("LJ8PUf7kRCGUr4eT8Mhy3g")],lm);var cm=class extends Laya.Dialog{};var so=class extends Laya.Event{constructor(){super()}};so.INIT_CREATELOGIN_EVENT="CreateLoginEvent:INIT_CREATELOGIN_EVENT";var{regClass:sE}=Laya,um=class extends cm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER}onEnable(){y.intance.on(so.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),y.intance.on(h.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),y.intance.on(h.EVENT_WAIT_PLAYERINFO,this,this.onWaitPlayerInfoBack),this.btn_setting.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_setting]),this.btn_radio1.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio1]),this.btn_radio2.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio2]),this.btn_register.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_register]),this.box_change.on(Laya.Event.CLICK,this,this.onChangeHead),this.input_name.prompt=d.instance.getLanguage(31),this.selectRadio(1),this.initCountry(),this.initCreateLoginView(),Te.instance.sendCustumEvent(23)}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onCountryItemRender(e,i){e.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(e){if(console.log("handleSelectCountry: "+e),e!=-1){let i=this.list_country.selectedItem;L.instance.countryId=i.id,this.img_flag.skin=C.instance.getCountryIcon(i.id),this.tf_country.text=d.instance.getLanguage(i.name)}}createCountryList(){let e=R.intance.m_dicCountry;this.list_country.array=e.values,this.list_country.visible=!0;let i=-1,n=0;for(let r of e.values){if(r.id==L.instance.countryId){i=n;break}n++}this.list_country.selectedIndex=i}onChangeHeadBack(e,i){this.input_name.text=e,L.instance.headId=i,this.playerIcon.headSkin=i}onChangeModifyHead(e){L.instance.headId=e,this.playerIcon.headSkin=e}onChangeHead(){H.intance.openModule(f.ChangeHeadDialog)}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=d.instance.getUILang("Upload picture"),n=d.instance.getUILang("Select Image"),r=d.instance.getUILang("Save changes");openUploadPic(this,e,i,n,r)}async openPicEnd(e,i){if(i.length>500){let n=await A.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);n&&(L.instance.headId=n.imgUrl,e.playerIcon.headSkin=n.imgUrl,console.log(n.imgUrl))}}selectRadio(e){let i=e==1;this.btn_radio1.selected=i,this.btn_radio2.selected=!i}handleClickBtn(e){switch(e){case this.btn_radio1:this.selectRadio(1);break;case this.btn_radio2:this.selectRadio(2);break;case this.btn_register:this.onRegister();break;case this.btn_setting:H.intance.openModule(f.GameSettingLanguageDialog);break}}async onRegister(){let e=this.input_name.text,i=this.btn_radio1.selected?1:2;if(e=e.trim(),e==""){B.instance.notice(d.instance.getLanguage(31));return}if(L.instance.countryId==-1){B.instance.notice(d.instance.getLanguage(1048));return}let n=await j.instance.createAcccount(e,i,L.instance.headId.toString(),L.instance.countryId);this.onWaitPlayerInfoBack(n)}onWaitPlayerInfoBack(e){e&&(me.instance.hideLoading(),L.instance.playerDto=e,this.close(),y.intance.event(h.EVENT_ENTER_MAIN))}initCreateLoginView(){}onDisable(){this.removeEvent()}removeEvent(){y.intance.off(so.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),y.intance.off(h.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),y.intance.off(h.EVENT_WAIT_PLAYERINFO,this,this.onWaitPlayerInfoBack)}};um=p([sE("1K2SyFxcQY-12SasSSRXyQ")],um);var pm=class extends Laya.Dialog{};var{regClass:lE}=Laya,mm=class extends pm{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}onEnable(){Ne.instance.playSoundByName(Ne.soundName32)}onDisable(){}};mm=p([lE("szfg-Zt_RRWZ_nHMppjUMA")],mm);var dm=class extends Laya.Box{};var{regClass:cE}=Laya,hm=class extends dm{set dataSource(t){super.dataSource=t;var e=t;e&&(this.img_icon.skin="res/role/img_icon_"+e[0]+".png",this.tf_name.text=d.instance.getUILang(e[1]),this.tf_num.text=e[2])}};hm=p([cE("WJ5TDeRBSkC9yMqJ72B0Ow")],hm);var fm=class extends Laya.Box{};var{regClass:uE}=Laya,ym=class extends fm{set dataSource(e){super.dataSource=e,this.headItem=e,this.headItem&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.headItem.id;this.playerIcon.headSkin=e}onChange(e){}};ym=p([uE("AwN_JFPwQsKswm1N53Bmkg")],ym);var Xi=class Xi{constructor(){}static trim(t,e=null){e||(e=[" ","\r",`
`,"	",String.fromCharCode(65279)]);var i,n,r;for(i=t,r=e.length,n=0;n<r;n++)i=Xi.getReplace(i,e[n],"");return i}static getReplace(t,e,i){if(!t)return"";var n;return n=t.replace(new RegExp(e,"g"),i),n}static isEmpty(t){return t.length<1?!0:Xi.emptyStrDic.hasOwnProperty(t)}static trimLeft(t){var e;e=0;var i;for(i=t.length;Xi.isEmpty(t.charAt(e))&&e<i;)e++;return e<i?t.substr(e):""}static trimRight(t){var e;for(e=t.length-1;Xi.isEmpty(t.charAt(e))&&e>=0;)e--;var i;return i=t.substring(0,e),e>=0?t.substring(0,e+1):""}static trimSide(t){var e;return e=Xi.trimLeft(t),e=Xi.trimRight(e),e}static shortStr(t,e){return t.length>e?t.substr(0,e)+"...":t}static shortHeroStr(t,e=10){return Xi.abbreviateString(t,e)}static abbreviateString(t,e=11){if(t.length<=e)return t;{let i=Math.floor((e-3)/2);return t.slice(0,i)+"..."+t.slice(-i)}}static caseInsensitiveSearchWithRegex(t,e){return new RegExp(e,"i").test(t)}static formatWalletAddress(t){let n="...";return t.length<=12+10?t:`${t.substring(0,12)}${n}${t.substring(t.length-10)}`}};Xi.emptyStrDic={" ":!0,"\r":!0,"\n":!0,"	":!0};var Ce=Xi;var bm=class extends Laya.Dialog{};var{regClass:pE}=Laya,gm=class extends bm{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}onEnable(){this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.btn_copy2.on(Laya.Event.CLICK,this,this.onCopy2),this.btn_changeHead.on(Laya.Event.CLICK,this,this.onChangeHead),this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.redemptionCode.on(Laya.Event.FOCUS,this,this.redemFocus),y.intance.on(h.ROLE_INFO_CHANGE,this,this.updateRoleInfo),this.updateRoleInfo()}redemFocus(){this.redemptionCode.text=""}updateRoleInfo(){let e=L.instance.playerDto;this.tf_name.text=e.name,this.img_sex.skin=e.sex==1?"res/role/img_icon_xb_1.png":"res/role/img_icon_xb_2.png",this.tf_uid.text=e.pid.toString(),this.tf_myCode.text=e.remCode,this.ally_num.text=`${e.remCount}`,this.tf_myCode.text==""?this.btn_copy2.disabled=!0:this.btn_copy2.disabled=!1,e.superRemCode?(this.btn_receive.disabled=!0,this.redemptionCode.text=`${e.superRemCode}`,this.yf_receive.text="Received"):this.yf_receive.text="Receive";var i=R.intance.m_dicCountry.get(e.country);this.img_country.skin=C.instance.getCountryIcon(e.country+""),this.tf_address.text=Ce.formatWalletAddress(j.instance.walletAddress);let n=e.icon;this.playerIcon.headSkin=n,this.onGetAttr(e.pid)}async onGetAttr(e){let i=this,n=await A.requestPost("wxgame/player/getPlayerInfo",{pid:e});n?(this.fighting_value.text=n.fightTimes,this.victory_num.text=n.winTimes,this.fail_num.text=`${n.fightTimes-n.winTimes}`,this.runAway_num.text=n.taopao):B.instance.notice(d.instance.getLanguage(135))}onChangeHead(){H.intance.openModule(f.SelectHeadDialog,!0)}async onReceive(){if(this.redemptionCode.text=="Enter the redemption code to claim equipment(unique)"||this.redemptionCode.text=="輸入兌換碼領取裝備（唯一）"||this.redemptionCode.text==""){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1123),N.YES,null);return}if(this.redemptionCode.text==this.tf_myCode.text&&this.redemptionCode.text!==""){se.instance().AlertByType(N.BASEALERTVIEW,"You cannot enter your own invitation code.",N.YES,null);return}let e=this.redemptionCode.text,i=await A.requestPost("wxgame/player/setRem",{code:e});i&&(H.intance.openModule(f.RemGetDialog),L.instance.playerDto.superRemCode=i.code,this.btn_receive.disabled=!0,this.yf_receive.text="Received",this.tf_myCode.text=i.recommendCode,L.instance.playerDto.remCode=i.recommendCode,this.tf_myCode.text==""?this.btn_copy2.disabled=!0:this.btn_copy2.disabled=!1)}onCopy(){let e=j.instance.walletAddress;doCopy(e),B.instance.notice(d.instance.getLanguage(132))}onCopy2(){let e=this.tf_myCode.text;doCopy(e),B.instance.notice(d.instance.getLanguage(132))}onDisable(){y.intance.off(h.ROLE_INFO_CHANGE,this,this.updateRoleInfo),this.redemptionCode.off(Laya.Event.FOCUS,this,this.redemFocus)}};gm=p([pE("T7g565QQR7-fZgZNjVg92A")],gm);var vm=class extends Laya.Dialog{};var{regClass:mE}=Laya,Lm=class extends vm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}setOpenData(e){}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.input_name.prompt=d.instance.getLanguage(31),this.initContainer();let e=R.intance.getGeneralValueById(13);this.tf_nameGold.text=e[1],this.img_nameGold.skin=C.instance.getMoneyIcon(e[0]),console.log(e)}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList(),this.initCountry()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem;L.instance.headId=i.id,this.playerIcon.headSkin=L.instance.headId}}createHeadList(){let e=R.intance.m_dicHead;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,n=0;L.instance.headId=L.instance.playerDto.icon,this.playerIcon.headSkin=L.instance.headId,this.input_name.text=L.instance.playerDto.name;for(let r of e.values){if(r.id==L.instance.headId){i=n;break}n++}this.list_head.selectedIndex=i}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onCountryItemRender(e,i){e.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(e){if(console.log("handleSelectCountry: "+e),e!=-1){let i=this.list_country.selectedItem;L.instance.countryId=i.id,this.img_flag.skin=C.instance.getCountryIcon(i.id),this.tf_country.text=d.instance.getLanguage(i.name)}}createCountryList(){let e=R.intance.m_dicCountry;this.list_country.array=e.values,this.list_country.visible=!0;let i=-1,n=0;L.instance.countryId=L.instance.playerDto.country;for(let r of e.values){if(r.id==L.instance.countryId){i=n;break}n++}this.list_country.selectedIndex=i}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=d.instance.getUILang("Upload picture"),n=d.instance.getUILang("Select Image"),r=d.instance.getUILang("Save changes");openUploadPic(this,e,i,n,r)}async openPicEnd(e,i){if(i.length>500){let n=await A.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);n&&(L.instance.headId=n.imgUrl,e.playerIcon.headSkin=n.imgUrl,e.list_head.selectedIndex=-1,console.log(n.imgUrl))}}onRegister(){let e=this.input_name.text;if(e=e.trim(),e==""){B.instance.notice(d.instance.getLanguage(31));return}if(L.instance.playerDto.name!==e&&L.instance.getConsumeValue(xe.TYPE_GOLD)<Number(this.tf_nameGold.text)){B.instance.notice(pe.instance.get(51));return}L.instance.headId!=-1?this.onModify(e,L.instance.headId,L.instance.countryId):B.instance.notice(d.instance.getLanguage(134))}async onModify(e,i,n){if(e==""){B.instance.notice(d.instance.getLanguage(31));return}let r=await eo.instance.updateProfile(e,i.toString(),n);this.destroyed||(r?(L.instance.playerDto=r,this.close(),y.intance.event(h.ROLE_INFO_CHANGE)):B.instance.notice(d.instance.getLanguage(135)))}};Lm=p([mE("3CibwwHGSPG2Qkeq4rbMag")],Lm);var _m=class extends Laya.Scene{};var{regClass:dE,property:yJ}=Laya,xm=class extends _m{constructor(){super(...arguments);this.text=""}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP}onEnable(){}};xm=p([dE("lukqyw9IQG6emThMQcQxNg")],xm);var wm=class extends Laya.Box{};var{regClass:hE}=Laya,Im=class extends wm{constructor(){super();this.friendData=null}addEvent(){this.btn_cancel.on(Laya.Event.CLICK,this,this.onClickCancel),this.btn_claim.on(Laya.Event.CLICK,this,this.onClickClaim)}set dataSource(e){super.dataSource=e,e&&(this.friendData=e,this.btn_claim.label=d.instance.getUILang("agree"),this.setData(e),this.addEvent())}setData(e){this.tf_name.text=e.name,this.img_flag.skin=C.instance.getCountryIcon(e.country),this.playerIcon.headSkin=e.icon}async onClickCancel(){let e=await A.requestPost("wxgame/friend/friendApplyHandle",{fid:this.friendData.id,agree:!1});console.log(e),e&&se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(310),N.YES,Laya.Handler.create(this,()=>{y.intance.event(h.CHANGE_FRIEND_APPLY_LIST,this.friendData.id)}))}async onClickClaim(){let e=R.intance.getGeneralValueById(11);if(L.instance.friendNum>=e){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(301),N.YES);return}let i=await A.requestPost("wxgame/friend/friendApplyHandle",{fid:this.friendData.id,agree:!0});console.log(i),i&&(se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(309),N.YES),y.intance.event(h.CHANGE_FRIEND_APPLY_LIST))}};Im=p([hE("5M3de4CbRMertZBZtmoOIQ")],Im);var Em=class extends Laya.Box{};var{regClass:fE}=Laya,Tm=class extends Em{constructor(){super();this.friendData=null}addEvent(){this.btn_app.on(Laya.Event.CLICK,this,this.onClickApp)}async onClickApp(){let e=R.intance.getGeneralValueById(11);if(L.instance.friendNum>=e){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(301),N.YES);return}let i=await A.requestPost("wxgame/friend/addFriend",{openid:this.friendData.openid});console.log(i),i&&se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(307),N.YES,Laya.Handler.create(this,()=>{y.intance.event(h.REFRSH_APPLY_FRIEND_LIST,this.friendData.id)}))}set dataSource(e){if(super.dataSource=e,!e){this.visible=!1;return}this.btn_app.label=d.instance.getUILang("application"),console.log(e),this.friendData=e,this.setData(e),this.addEvent()}setData(e){this.tf_name.text=e.name,this.img_flag.skin=C.instance.getCountryIcon(e.country),this.playerIcon.headSkin=e.icon}};Tm=p([fE("EI72MOH9RbqdGkjSCxI8Kg")],Tm);var Sm=class extends Laya.Box{};var{regClass:yE}=Laya,Cm=class extends Sm{constructor(){super();this.friendData=null}addEvent(){this.btn_remove.on(Laya.Event.CLICK,this,this.onClickRemove),this.btn_talk.on(Laya.Event.CLICK,this,this.onClickTalk)}set dataSource(e){super.dataSource=e,e&&(this.friendData=e,this.setData(e),this.addEvent())}setData(e){this.tf_name.text=e.name,this.img_flag.skin=C.instance.getCountryIcon(e.country),this.playerIcon.headSkin=e.icon,e.online?(this.tf_online.text="on line",this.tf_online.color="#43ef74"):(this.tf_online.text=we.formatTimeAgo(e.lastLoginTime),this.tf_online.color="#b4b4b4")}async onClickRemove(){await A.requestPost("wxgame/friend/delFriend",{fid:this.friendData.id})&&(se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(308),N.YES),y.intance.event(h.CHANGE_FRIEND_LIST,this.friendData.id))}async onClickTalk(){H.intance.openModule(f.PrivateChatDialog,this.friendData)}};Cm=p([yE("hh1cVJJ6Sr2JZvqUJFzF6Q")],Cm);var km=class extends Laya.Scene{};var{regClass:bE,property:Iee}=Laya,Am=class extends km{constructor(){super(...arguments);this.text="";this.refreshCd=0;this.friendData=null;this.recommendFriend=null;this.applyFriend=null;this.inputFriendAddress=!1}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP}onEnable(){this.list_friend.visible=!1,this.list_apply.visible=!1,this.list_add.visible=!1,this.btn_myFriend.on(Laya.Event.CLICK,this,this.onClickMy),this.btn_addFriend.on(Laya.Event.CLICK,this,this.onClickAdd),this.btn_application.on(Laya.Event.CLICK,this,this.onClickApp),this.btn_addByDress.on(Laya.Event.CLICK,this,this.onClickAddByDress),this.btn_lookup.on(Laya.Event.CLICK,this,this.onClickLookup),this.btn_refresh.on(Laya.Event.CLICK,this,this.onClickRefresh),this.tf_nickname.on(Laya.Event.FOCUS,this,this.nameFocus),y.intance.on(h.REFRSH_APPLY_FRIEND_LIST,this,this.deleApplyFriendList),y.intance.on(h.CHANGE_FRIEND_APPLY_LIST,this,this.onClickApp),y.intance.on(h.CHANGE_FRIEND_LIST,this,this.deleFriendList),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),this.close&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.onClickMy(),this.refreshRed()}setTabState(e,i,n,r){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?n:r}onClickMy(){this.box_1.visible=!0,this.box_2.visible=!1,this.box_3.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_myFriend,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_addFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_application,!1,"#143f6b","#7ff1fe"),this.setFriendData()}async setFriendData(){let e=await A.requestPost("wxgame/friend/friendList",{});if(e&&e.list){L.instance.friendNum=e.list.length,this.list_friend.array=e.list,this.list_friend.visible=!0,this.friendData=e.list;let i=this.countOnlineUsers(e.list);console.log(i);let n=R.intance.getGeneralValueById(11);this.tf_friendNum.text=`${L.instance.friendNum}/${n}`}else this.tf_friendNum.text="0/0";(!e||!e.list||e.list.length<1)&&(this.noDataBox.visible=!0),console.log(e)}async onClickAdd(){if(this.box_1.visible=!1,this.box_2.visible=!0,this.box_3.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_addFriend,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_myFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_application,!1,"#143f6b","#7ff1fe"),!this.recommendFriend||this.recommendFriend.length<=0){let e=await A.requestPost("wxgame/friend/recommend",{});e&&e.list&&(this.recommendFriend=e.list,this.list_apply.array=e.list,this.list_apply.visible=!0,this.list_apply.vScrollBarSkin="")}}async onClickAddByDress(){if(this.tf_uid.text==j.instance.walletAddress){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1162),N.YES),this.tf_uid.text="";return}let e=this.tf_uid.text;if(e.length<=0||!this.inputFriendAddress){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1298),N.YES);return}let i=R.intance.getGeneralValueById(11);if(L.instance.friendNum>=i){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(301),N.YES);return}if(this.friendData.findIndex(r=>r.openid==e.toLowerCase())>-1){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(302),N.YES);return}se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(303),N.SURE,Laya.Handler.create(this,async()=>{let r=await A.requestPost("wxgame/friend/addFriend",{openid:e});console.log(r),r&&B.instance.notice(pe.instance.get(307))}))}nameFocus(){this.tf_nickname.text=""}uidFocus(){this.tf_uid.text="",this.inputFriendAddress=!0}async onClickApp(){this.box_1.visible=!1,this.box_2.visible=!1,this.box_3.visible=!0,this.noDataBox.visible=!1,this.setTabState(this.btn_addFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_myFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_application,!0,"#143f6b","#7ff1fe");let e=await A.requestPost("wxgame/friend/friendApplyList",{});e&&e.list&&(this.list_add.array=e.list,this.list_add.visible=!0,this.applyFriend=e.list,e.list.length<=0&&(this.Img_social.visible=!1)),(!e||!e.list||e.list.length<1)&&(this.noDataBox.visible=!0)}onDisable(){this.removeEvent()}removeEvent(){this.btn_myFriend.off(Laya.Event.CLICK,this,this.onClickMy),this.btn_addFriend.off(Laya.Event.CLICK,this,this.onClickAdd),this.btn_application.off(Laya.Event.CLICK,this,this.onClickApp),this.btn_addByDress.off(Laya.Event.CLICK,this,this.onClickAddByDress),this.btn_lookup.off(Laya.Event.CLICK,this,this.onClickLookup),this.btn_refresh.off(Laya.Event.CLICK,this,this.onClickRefresh),this.tf_nickname.off(Laya.Event.FOCUS,this,this.nameFocus),y.intance.off(h.REFRSH_APPLY_FRIEND_LIST,this,this.deleApplyFriendList),y.intance.off(h.CHANGE_FRIEND_APPLY_LIST,this,this.onClickApp),y.intance.off(h.CHANGE_FRIEND_LIST,this,this.deleFriendList),this.tf_uid.off(Laya.Event.FOCUS,this,this.uidFocus),this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene)}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}countOnlineUsers(e){return e.filter(i=>i.online).length}async onClickLookup(){if(this.tf_nickname.text==""){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(304),N.YES);return}let e=this.tf_nickname.text,i=await A.requestPost("wxgame/friend/search",{nickName:e});i&&i.list&&(this.recommendFriend=i.list,this.list_apply.array=i.list)}deleApplyFriendList(e){let i=this.recommendFriend.findIndex(n=>n.id==e);i>-1&&this.recommendFriend.splice(i,1),this.list_apply.array=this.recommendFriend}deleFriendList(e){let i=this.friendData.findIndex(r=>r.id==e);i>-1&&this.friendData.splice(i,1),this.list_friend.array=this.friendData,L.instance.friendNum=this.friendData.length;let n=R.intance.getGeneralValueById(11);this.tf_friendNum.text=`${L.instance.friendNum}/${n}`,this.list_friend.array.length<=0&&(this.noDataBox.visible=!0)}async onClickRefresh(){if(this.refreshCd>0){B.instance.notice(d.instance.getLanguage(1287,this.refreshCd));return}let e=await A.requestPost("wxgame/friend/recommend",{});e&&e.list&&(this.recommendFriend=e.list,this.list_apply.array=e.list),console.log(e),this.tf_nickname.text="PLEASE ENTER A NICKNAME TO FIND FRIENDS",this.tf_uid.text="Enter wallet address to add friends",this.inputFriendAddress=!1,B.instance.notice(pe.instance.get(306)),this.refreshCd=5,Laya.timer.loop(1e3,this,this.RefreshCount)}RefreshCount(){this.refreshCd-=1,this.refreshCd<=0&&Laya.timer.clear(this,this.RefreshCount)}refreshRed(){this.Img_social.visible=L.instance.getRedDotById(Ze.ROOM_FRIEND_APPLY)}};Am=p([bE("W8WIf5GlS3S-dEWvgrU0ow")],Am);var Dm=class extends Laya.Dialog{};var{regClass:gE}=Laya,Mm=class extends Dm{constructor(e){super();this.friendData=null}onEnable(){this.btn_send.on(Laya.Event.CLICK,this,this.onClickSend),this.giftInput.on(Laya.Event.INPUT,this,this.onGoldInput)}setOpenData(e){e&&(this.friendData=e),this.playerIcon.headSkin=this.friendData.icon,this.tf_name.text=this.friendData.name,this.tf_gold.text=Ee.filterNumFormat(L.instance.getConsumeValue(xe.TYPE_GOLD),0)}async onClickSend(){if(console.log(this.messageInput.text==""),this.messageInput.text.length<10){B.instance.notice(d.instance.getLanguage(1288,10));return}let e=Number(this.giftInput.text),i=Number(this.tf_gold.text);if(e>i){B.instance.notice(pe.instance.get(313));return}await A.requestPost("wxgame/friend/sendMassage",{fid:this.friendData.id,content:this.messageInput.text,sendGold:e})&&se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(314),N.YES,Laya.Handler.create(this,()=>{this.close()}))}onGoldInput(){let e=Number(this.giftInput.text),i=ve.isNumber(this.giftInput.text),n=this.giftInput.text.includes(".");(e<0||!i||n)&&(this.giftInput.text="0")}onDisable(){this.btn_send.off(Laya.Event.CLICK,this,this.onClickSend),this.giftInput.off(Laya.Event.INPUT,this,this.onGoldInput)}};Mm=p([gE("MBJ6xxrTTGe8qOrAIMZfeQ")],Mm);var Bm=class extends Laya.Dialog{};var{regClass:vE}=Laya,ba=class extends Laya.Script{constructor(){super();this._isLeft=!1}onAwake(){}get isLeft(){return this._isLeft}set isLeft(e){this._isLeft=e,this.btn_bg=this.owner.getChildByName("btn_bg"),this.label_left=this.owner.getChildByName("label_left"),this.label_right=this.owner.getChildByName("label_right"),this.isLeft?(this.btn_bg.x=4,this.label_left.color="#213343",this.label_right.color="#52a5e0"):(this.btn_bg.x=this.owner.width-this.btn_bg.width-4,this.label_left.color="#52a5e0",this.label_right.color="#213343")}};ba=p([vE("-1MGS4JRSMOn_RKPUuuV9Q")],ba);var{regClass:LE}=Laya,Pm=class extends Bm{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}onEnable(){this.musicSwitchButton=this.box_music.getComponent(ba),this.soundSwitchButton=this.box_sound.getComponent(ba),this.languageSwitchButton=this.box_language.getComponent(ba),this.initContainer(),this.box_music.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_music]),this.box_sound.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_sound]),this.box_language.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_language]),this.btn_copy.clickHandler=new Laya.Handler(this,this.onClickHandler,[this.btn_copy]),this.btn_referral.on(Laya.Event.CLICK,this,this.onClickHandler,[this.btn_referral])}onClickHandler(e){switch(e){case this.box_music:this.musicSwitchButton.isLeft=!this.musicSwitchButton.isLeft,Ne.instance.switchMusic(this.musicSwitchButton.isLeft);break;case this.box_sound:this.soundSwitchButton.isLeft=!this.soundSwitchButton.isLeft,Ne.instance.switchSound(this.soundSwitchButton.isLeft);break;case this.btn_referral:H.intance.openModule(f.InviteRewardDialog);break;case this.box_language:{this.languageSwitchButton.isLeft=!this.languageSwitchButton.isLeft;let i=this.languageSwitchButton.isLeft?"zh":"en";d.instance.FGM_SetLanguage(i),Te.instance.reload()}break;case this.btn_copy:{let i=this.inviteUrl;be.doCopy(i),B.instance.notice(d.instance.getLanguage(132))}break}}initContainer(){this.musicSwitchButton.isLeft=Ne.instance.m_bPlayMusic,this.soundSwitchButton.isLeft=Ne.instance.m_bPlayeSound,this.languageSwitchButton.isLeft=L.instance.m_strLanguage==6,this.inviteUrl=$i.getInviteUrl(),this.label_url.text=Ce.shortStr(this.inviteUrl,50)}addEvent(){}removeEvent(){}webCopyString(e){let i=e,n=window.document.createElement("textarea");n.value=i,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let r=window.getSelection(),o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),window.document.body.appendChild(n),n.select(),n.selectionStart=0,n.selectionEnd=i.length;let s=!1;try{s=window.document.execCommand("copy")}catch(l){console.error(l)}return window.document.body.removeChild(n),o&&(r.removeAllRanges(),r.addRange(o)),s}};Pm=p([LE("yJfJZzgZRluE_rgB44yTvg")],Pm);var Rm=class extends Laya.Scene{};var{regClass:_E}=Laya,Nm=class extends Rm{onAwake(){}onOpened(e){this.closeHandle=e[0]}onEnable(){this.btn_next.on(Laya.Event.CLICK,this,this.onBtnNext),this.btn_receive.on(Laya.Event.CLICK,this,this.onClickRec),this.tf_address.text=j.instance.walletAddress}onDisable(){this.closeHandle&&this.closeHandle.run(),this.removeEvent()}removeEvent(){}onBtnNext(){this.close()}async onClickRec(){let e=j.instance.walletAddress,i=await A.requestPost("wxgame/money/matQuery",{address:e});if(i&&i.use==1){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(122),N.YES,Laya.Handler.create(this,()=>{this.onBtnNext()}));return}try{(await A.requestPost("wxgame/money/matTake",{address:e})).errorcode==0?se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getUILang("You have applied to claim the MAT Tokens and they will be sent to your address [0X...]."),N.YES,Laya.Handler.create(this,()=>{this.onBtnNext()})):se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(122),N.YES,Laya.Handler.create(this,()=>{this.onBtnNext()}))}catch{se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(122),N.YES,Laya.Handler.create(this,()=>{this.onBtnNext()}))}}};Nm=p([_E("wkgHnIZwR_-St6rzEoxYPQ")],Nm);var Om=class extends Laya.Scene{};var{regClass:xE}=Laya,Hm=class extends Om{constructor(){super(...arguments);this.restTime=5}onAwake(){}onOpened(e){console.log(e),this.closeHandle=e[0]}onEnable(){this.skipBox.on(Laya.Event.CLICK,this,this.onBtnSkip),L.instance.m_strLanguage==6,L.instance.m_strLanguage==6?this.img_bg.skin="res/getMat/img_open_chn.jpg":this.img_bg.skin="res/getMat/img_open_eng.jpg",console.log("langid:",L.instance.m_strLanguage),this.restTime=5,this.runTime(),this.tf_skip.text=d.instance.getUILang("Skip")}runTime(){Laya.timer.loop(1e3,this,this.countTime)}countTime(){this.restTime-=1,this.tf_restTime.text=`${this.restTime}`,this.restTime==0&&(Laya.timer.clear(this,this.countTime),this.close())}onDisable(){this.closeHandle&&this.closeHandle.run(),this.removeEvent()}removeEvent(){}async onBtnSkip(){Laya.timer.clear(this,this.countTime),this.close()}};Hm=p([xE("t3HJXNipRty7KBcnDKApfA")],Hm);var Um=class extends Laya.Box{};var{regClass:wE}=Laya,Vm=class extends Um{set dataSource(t){super.dataSource=t;var e=t;e&&(this.img_icon.skin=C.instance.getAttrIcon(e[0]),this.tf_name.text=d.instance.getUILang(e[1]),this.tf_num.text=e[2])}};Vm=p([wE("lWiDi5bCR-CNy4v3ZMd42w")],Vm);var Fm=class extends Laya.Dialog{};var Bi=class{constructor(){}};Bi.UPDATE_HERO_EVENT="HeroEvent:UPDATE_HERO_EVENT",Bi.UPDATE_HERO_UPGRADE_EVENT="HeroEvent:UPDATE_HERO_UPGRADE_EVENT";var{regClass:IE}=Laya,zm=class extends Fm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}setOpenData(e){e&&(this._vo=e)}onComplete(){}onEnable(){this.showViewByVo(this._vo),this.btn_last.on(Laya.Event.CLICK,this,this.onClickLast),this.btn_next.on(Laya.Event.CLICK,this,this.onClickNext),this.btn_upgrade.on(Laya.Event.CLICK,this,this.onClickUpgrade),this.btn_out.on(Laya.Event.CLICK,this,this.onClickOut)}onClickUpgrade(){H.intance.openModule(f.HeroUpgradeDialog,this._vo)}onClickNext(){let e=et.instance.getNextHero(this._vo);e&&(this._vo=e,this.showViewByVo(e))}onClickLast(){let e=et.instance.getLastHero(this._vo);e&&(this._vo=e,this.showViewByVo(e))}addEvent(){y.intance.on(Bi.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade),this.stage.on(Laya.Event.CLICK,this,this.hideTips);for(let e=1;e<7;e++){let i=this["equip"+e];i.on(Laya.Event.CLICK,this,this.onClickEquip),this._vo.state!==0&&(i.disabled=!0)}}hideTips(){}onClickEquip(e){}removeEvent(){y.intance.off(Bi.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade)}onHeroUpgrade(){this._vo=L.instance.m_heroData.heroVoDic.get(this._vo.pk),this._vo&&this.showViewByVo(this._vo)}updateEquip(){let e=this._vo.equipDtoList;for(let i=0;i<e.length;i++){let n=e[i];this["equip"+(i+1)].dataSource=n}}async showViewByVo(e){this.txt_name.text=e.name;let i=e.heroItem.level+"";et.instance.setStar(this,i),this.box_star.visible=!0,this.heroSk.dataSource=e;var n=[["maxHp","MaxHP",e.heroItem.maxHp],["atk","ATK",e.heroItem.atk],["def","DEF",e.heroItem.def],["mov","MOV",e.heroItem.mov],["crt","CRT",e.heroItem.crt/100+"%"],["crtRate","CrtRate",e.heroItem.crtRate/100+"%"],["immunity","Immunity",e.heroItem.immunity],["dex","Dex",(e.heroItem.dex/100).toFixed(2)+"%"],["miss","MISS",e.heroItem.miss]];this.list_attrs.array=n;var r=[];e.heroItem.skillIds.forEach(o=>{var s=R.intance.m_dicSkills.get(o);r.push(s)}),this.list_skills.array=r,this.updatePk()}async updatePk(){let e=null;this._vo.state!==0?(e=await A.requestPost("wxgame/lease/heroInfo",{heroPk:this._vo.pk}),this._vo.state==1?(this.btn_out.disabled=!0,this.btn_upgrade.disabled=!0,this.btn_out.label=d.instance.getLanguage(1037)):this._vo.state==2&&(this.btn_upgrade.disabled=!0,be.isFightHero(this._vo.pk)?(this.box_sign.visible=!0,this.btn_out.disabled=!0,this.btn_out.label=d.instance.getLanguage(1038)):(this.box_sign.visible=!1,this.btn_out.disabled=!1,this.btn_out.label=d.instance.getLanguage(1037))),e&&e.info&&e.info.startTime&&e.info.startTime>we.getCurrentDayTimestamp()&&(this.btn_out.disabled=!0,this.btn_upgrade.disabled=!0)):be.isFightHero(this._vo.pk)?(this.box_sign.visible=!0,this.btn_out.disabled=!0,this.btn_out.label=d.instance.getLanguage(1038)):(this.box_sign.visible=!1,this.btn_out.disabled=!1,this.btn_out.label=d.instance.getLanguage(1037))}async onClickOut(){if(Xe.instance.inMinWaiting){B.instance.notice(d.instance.getLanguage(1187));return}let e=this,i=this._vo.newFightFlag==1?1:0,n=await A.requestPost("wxgame/hero/heroFight",{pk:this._vo.pk,type:i});n?(n.type==1?L.instance.playerDto.newFightHeroPk=n.pk:L.instance.playerDto.fightHeroPk=n.pk,e.updatePk(),y.intance.event(Bi.UPDATE_HERO_EVENT,i)):B.instance.notice(d.instance.getLanguage(135))}};zm=p([IE("Qri7gUY9SiWsYhtvNCEOQQ")],zm);var Gm=class extends Laya.Box{};var{regClass:EE}=Laya,jm=class extends Gm{constructor(){super();this.isAddEvent=!1;this.needPop=!0}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=C.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.needPop&&this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){var e=[];be.isFightHero(this.heroVo.pk)&&e.push(1),this.heroVo.state==2&&e.push(3),this.heroVo.state==1&&e.push(2),this.heroVo.newFightFlag==1?(e.push(5),this.img_newFightFlag.visible=!0):this.img_newFightFlag.visible=!1,this.list_state.array=e,this.img_back.skin=C.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ce.shortHeroStr(this.heroVo.name);let i=this.heroVo.heroItem.level+"";et.instance.setStar(this,i),this.box_show.visible=!0,this.destroyed}toDetail(){this.heroVo.id&&H.intance.openModule(f.HeroDetailDialog,this.heroVo)}};jm=p([EE("PfeS1F4rQCqM4vXJpBZVWQ")],jm);var qm=class extends Laya.Box{};var{regClass:TE}=Laya,Wm=class extends qm{constructor(){super();this.isAddEvent=!1;this.isReady=!1;this.skinIndex=0;this.spineAniIndex=0;this.skinArray=["goblin","goblingirl"]}addEvent(){this.isAddEvent||(this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.changeAni),this.sk.on(Laya.Event.READY,this,this.onSkReady))}onSkReady(){this.isReady=!0}set dataSource(e){super.dataSource=e,this.heroVo=e,this.addEvent(),this.createSpine()}createSpine(){Laya.loader.load(this.heroVo.sk,Laya.Loader.SPINE).then(e=>{this.destroyed||(this.sk.templet=e,this.sk.animationName=We.ANI_daiji,this.spineAniNum=We.ANIS.length)})}changeAni(){if(this.isReady){this.spineAniIndex++,this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=0);var e=We.ANIS[this.spineAniIndex];this.sk.play(e,!0,!0)}}changeSkin(){this.sk.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}onDisable(){this.sk.off(Laya.Event.READY,this,this.onSkReady)}};Wm=p([TE("kS5K53GHRWOdgfXoo6VH1A")],Wm);var Km=class extends Laya.Box{};var{regClass:SE}=Laya,Ym=class extends Km{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.heroVo=e,this.heroVo&&(this.img_checked.visible=this.heroVo.checked,this.heroListItem.needPop=!1,this.heroListItem.dataSource=this.heroVo,this.addEvent())}toDetail(){this.heroVo.checked=!this.heroVo.checked,y.intance.event(h.EVENT_REFRESH_HEROTRANSFER)}};Ym=p([SE("tzBcfqNYSL6KP4NjtslyHA")],Ym);var $m=class{constructor(){this.pool_contract=null;this.rewardTokenAddress=""}stakeTokenAndReward(){return this.heroesId?[[this.heroesId,this.capacity/24]]:[]}async calcCapacity(t){for(let e of t){let i=et.instance.heroOutputRateDic.get(e.mineralLevel);e.staking_second_rewards=i.capacity*this.baseYield/24+""}return t}async earnedAll(){return this.yieldValue}async refreshVo(){let t=await A.requestPost("cybertron-sys-api/api/v1/mineral/getMineralPool",{mineralId:this.id});this.heroesId=0,this.yieldValue=0,Object.assign(this,t)}async stake(t){if(!await j.instance.checkHeroIsBuzy(t))return me.instance.showLoading(!0),await this.pool_contract.methods.stake(t,this.id).send({from:j.instance.walletAddress},(i,n)=>{if(i)return me.instance.hideLoading(),!1}),!0}async withdrawAllAndClaim(){return me.instance.showLoading(!0),await this.pool_contract.methods.withdraw(this.heroesId).send({from:j.instance.walletAddress},(t,e)=>{if(t)return me.instance.hideLoading(),!1}),await this.refreshVo(),!0}async claimAllReward(){me.instance.showLoading(!0),await A.requestPost("cybertron-sys-api/api/v1/mineral/collect",{mineralId:this.id}),await this.refreshVo(),me.instance.hideLoading()}async getAccountTokens(){await this.refreshVo()}};var el=class a{constructor(){this.poolAry=[];this.pool_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this.poolDic=new te}async initPoolList(){this.poolAry=[];let t=await A.requestPost("cybertron-sys-api/api/v1/mineral/getMineralPoolList",{});for(let e of t){let i=new $m;Object.assign(i,e);let n=R.intance.m_dicItems.get(i.resourcesType);i.rewardTokenAddress=n.tokenId,i.pool_contract=this.pool_contract,this.poolDic.set(i.rewardTokenAddress,i),this.poolAry.push(i)}}async getHeroTokenIds(){let t=j.instance.walletAddress;try{console.log("getHeroTokenIds, account:"+t);var e;let n;$.vType==2?(e=ot.id,n=ng[e]):$.vType==1?(e=ot.id,n=ss[e]):(e=Tt.id,n=ss[e]);let r=await j.instance.walletClient.getChainId();if(e!==r){var i=await j.instance.switchChain(e);if(!i)return this.onEndHeroList(),console.log("切换失败，请手动切换"),null}return n?await j.instance.publicClient.readContract({address:n,abi:le.HERO_LIST_ABI,functionName:"list",args:[t]}):(this.onEndHeroList(),B.instance.notice(d.instance.getLanguage(1219,r)),null)}catch(n){if(console.log("获取英雄列表错误====》",n),n instanceof Error){let r=n.message;console.log("获取英雄列表 错误====》",r)}}}async transferHero(t,e){me.instance.showLoadingByInfo(d.instance.getLanguage(1119));try{var i;let s;$.vType==2?(i=ot.id,s=y0[i]):$.vType==1?(i=ot.id,s=rg[i]):(i=Tt.id,s=rg[i]);let l=await j.instance.walletClient.getChainId();if(i!==l){var n=await j.instance.switchChain(i);if(!n){this.onEndHeroList(),console.log("切换失败，请手动切换");return}}if(!s)return this.onEndHeroList(),B.instance.notice(d.instance.getLanguage(1220,l)),!1;if(console.log("判断授权 transferHeroAddress: "+s+", acceptAddress:"+t+", chainIDData:"+i),!await this.setApprovalForAll(s))return console.log("未授权"),this.onEndHeroList(),B.instance.notice(d.instance.getLanguage(15)),!1;console.log("授权成功 开始购买");var r=await j.instance.walletClient.writeContract({account:j.instance.walletAddress,address:s,abi:le.TRANSFER_HERO_ABI,functionName:"batchTransfer",args:[t,e]});console.log("============"+r);let u=await j.instance.publicClient.waitForTransactionReceipt({hash:r});return console.log(`Tx with hash: ${r}`,u),u&&u.status=="success"?(this.delHero(e),this.waitGetHero(i,r),console.log(`Tx successful with hash: ${r}`),r):(this.onEndHeroList(),be.TransactionErrorTip(),!1)}catch(s){this.onEndHeroList();var o=s.shortMessage;if(o&&o.indexOf("does not match")!=-1&&(o=d.instance.getLanguage(1118)),console.log(o),B.instance.notice(o),s instanceof F){let l=s.walk(c=>c instanceof At);if(l instanceof At){let c=l.data?.errorName??"";console.log("============errorName: "+c)}}return null}}async setApprovalForAll(t){let e=j.instance.walletAddress;try{console.log("查看是否已经授权, owner:"+e+", spender:"+t),console.log("未授权，进行授权, owner:"+e);var i;let n;$.vType==2?(i=ot.id,n=ng[i]):$.vType==1?(i=ot.id,n=ss[i]):(i=Tt.id,n=ss[i]);let r=await j.instance.walletClient.writeContract({address:n,abi:le.HERO_LIST_ABI,functionName:"setApprovalForAll",args:[t,!0],account:e});console.log("============"+r);let o=await j.instance.publicClient.waitForTransactionReceipt({hash:r});return console.log(`setApprovalForAll with hash: ${r}`,o),o&&o.status=="success"?(console.log(`setApprovalForAll successful with hash: ${r}`),!0):!1}catch(n){if(console.log("授权错误====》",n),n instanceof Error){let r=n.message;console.log("授权错误====》",r)}}}onEndHeroList(t=null){me.instance.hideLoading(),t&&y.intance.event(h.EVENT_END_HEROTRANSFER,[t])}waitGetHero(t,e){this.chainId=t,this.hashId=e,Laya.timer.loop(2e3,this,this.getHero)}delHero(t=null){var e=A.requestPost("wxgame/mutiNft/delHero",{heroList:t}).catch(i=>{})}async getHero(){var t=await A.requestPost("wxgame/mutiNft/check",{chainId:this.chainId,hashId:this.hashId}).catch(e=>{});t&&t.heroList&&t.heroList.length>0&&(Laya.timer.clear(this,this.getHero),this.onNewAddHero(t.heroList))}onNewAddHero(t){L.instance.m_heroData.herosDataRemoveHandler(t),this.onEndHeroList(t)}};var Xm=class extends Laya.Dialog{};var{regClass:CE}=Laya,Qm=class extends Xm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER;this.myHeroesNum=0;this.selectedNum=0}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_readClipboard.disabled=!navigator.clipboard,this.btn_readClipboard.on(Laya.Event.CLICK,this,this.readClipboard),this.btn_transferRecords.on(Laya.Event.CLICK,this,this.onShowTransferRecord),this.btn_approve.on(Laya.Event.CLICK,this,this.onTransferHero),this.btn_checkBox.on(Laya.Event.CLICK,this,this.onSelectAll),y.intance.on(h.EVENT_END_HEROTRANSFER,this,this.onEndHeroTransfer),y.intance.on(h.EVENT_REFRESH_HEROTRANSFER,this,this.onRefreshHeroTransfer),this.list_hero.array=[]}async readClipboard(){navigator.clipboard?navigator.clipboard.readText().then(e=>{console.log("剪切板中的文本内容:",e),this.input_acceptAddress.text=e}).catch(e=>{console.error("无法读取剪切板内容:",e)}):console.error("当前浏览器不支持 Clipboard API")}onOpened(e){this.getHeroTokenIds()}async getHeroTokenIds(){var e=await el.instance.getHeroTokenIds();console.log("获得链上英雄ID heroTokenIds: ",e),this.heroVos=[],e&&e.length>0&&e.forEach(i=>{i=parseInt(i);var n=L.instance.m_heroData.getCanTransferHero(i);n&&this.heroVos.push(n)}),this.list_hero.array=this.heroVos,this.updateNum()}onEndHeroTransfer(e){this.heroVos=this.heroVos.filter(i=>!e.includes(i.pk)),this.list_hero.array=this.heroVos,this.updateNum()}onRefreshHeroTransfer(){this.list_hero.refresh(),this.updateNum()}updateNum(){!this.heroVos||this.heroVos.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1,this.selectedNum=0,this.heroVos.forEach(e=>{e&&e.checked&&this.selectedNum++}),this.myHeroesNum=this.heroVos.length,this.tf_myHeroesNum.text=d.instance.getLanguage(1222,this.heroVos.length),this.tf_selectedNum.text=d.instance.getLanguage(1223,this.selectedNum)}onSelectAll(){var e=this.btn_checkBox.selected;this.heroVos.forEach(i=>{i&&(i.checked=e)}),this.list_hero.refresh(),this.updateNum()}onBack(){this.close()}async onTransferHero(){var e=this.input_acceptAddress.text;if(e==""){B.instance.notice(d.instance.getUILang("PLEASE ENTER THE ACCEPT ADDRESS"));return}var i=[];this.heroVos.forEach(n=>{n.checked&&i.push(n.pk)}),i.length>0?await el.instance.transferHero(e,i):B.instance.notice(d.instance.getLanguage(1218))}onShowTransferRecord(){H.intance.openModule(f.TransferRecordDialog)}onDisable(){this.removeEvent()}removeEvent(){y.intance.off(h.EVENT_END_HEROTRANSFER,this,this.onEndHeroTransfer),y.intance.off(h.EVENT_REFRESH_HEROTRANSFER,this,this.onRefreshHeroTransfer)}};Qm=p([CE("rERE5ZadTfqASnxDrsNtyw")],Qm);var Zm=class extends Laya.Scene{};var{regClass:kE}=Laya,Jm=class extends Zm{constructor(){super(...arguments);this.currTab=0;this.type=1;this.items=[];this.hasItem=!1}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP}onOpened(e){this.type=e}onEnable(){this.list_hero.vScrollBarSkin="",this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_transfer.on(Laya.Event.CLICK,this,this.onTransfer),y.intance.on(Bi.UPDATE_HERO_EVENT,this,this.updateHero),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.initContainer()}initContainer(){this.list_hero.visible=!1,this.list_hero.vScrollBarSkin="",this.createHeadList();let e=L.instance.m_heroData.heroVoDic.values,i=ve.filterObjectsByState(e,1),n=ve.filterObjectsByState(e,2),r=ve.filterObjectsByNewFightFlag(e);this.tf_hireHero.text=`${i.length}`,this.tf_proxyTotal.text=`${n.length}`,this.tf_heroTotal.text=`${r.length}`,console.log(i,n)}updateHero(e){this.type=e+1,this.createHeadList()}async createHeadList(){await gt.instance.ownerHero(!0),!this.destroyed&&(this.type?this.onClickTab(this.type):this.onClickTab(1))}async onClickTab(e){if(this.currTab!=e){if(this.setTab(e),e==1){if(this.destroyed)return;var i=await this.getItemByType(1);this.list_hero.array=i,this.list_hero.visible=!0,this.btn_transfer.visible=!0}else{if(this.list_hero.visible=!0,this.destroyed)return;var i=await this.getItemByType(2);this.list_hero.dataSource=i,this.btn_transfer.visible=!1}this.list_hero.selectedIndex=-1,this.hasItem&&(this.list_hero.selectedIndex=0)}}async getItemByType(e){var i=e==1?We.TYPE_Professional:We.TYPE_Training;this.items=[],this.hasItem=!1;let n=L.instance.m_heroData.getListByType(i);for(var r=n.length>10?n.length:10,o=0;o<r;o++){var s=n[o];s?(o==0&&(this.hasItem=!0),this.items.push(s)):this.items.push(null)}return this.items}setTab(e){for(let i=1;i<3;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}onTransfer(){H.intance.openModule(f.HeroTransferView)}onDisable(){y.intance.off(Bi.UPDATE_HERO_EVENT,this,this.updateHero)}};Jm=p([kE("eEFn-xcRTXagUEZFDdSujw")],Jm);var ed=class extends Laya.Box{};var{regClass:AE}=Laya,td=class extends ed{set dataSource(t){super.dataSource=t;var e=t;e&&(this.tf_name.text=d.instance.getUILang(e[1]),this.tf_num.text=e[2])}};td=p([AE("BFrnzfZDRh2v3vDKqrNVwA")],td);var id=class extends Laya.Box{};var{regClass:DE}=Laya,ad=class extends id{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.txt_num.text="",this.img_icon.skin=C.instance.getSkillIcon(this.skillItem.icon,this.isBig))}};ad=p([DE("qJVd2M3_Td-5eIx8PsQpAw")],ad);var nd=class extends Laya.Box{};var{regClass:ME}=Laya,rd=class extends nd{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.dataSource=this.skillItem)}toDetail(){this.skillItem&&H.intance.openModule(f.SkillTipDialog,this.skillItem)}};rd=p([ME("VRh1GpjHSyqm75euC37ZKw")],rd);var od=class extends Laya.Dialog{};var{regClass:BE}=Laya,sd=class extends od{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}setOpenData(e){e&&(this.skillItem=e)}onEnable(){this.item.dataSource=this.skillItem,this.tf_name.text=d.instance.getLanguage(this.skillItem.name);var e=[["type","S_type",d.instance.getUILang("S_type_"+this.skillItem.type)],["distance","S_distance",this.skillItem.distance],["hurt","S_hurt",this.skillItem.hurt/100+"%"],["cd","S_cd",this.skillItem.cd/1e3+d.instance.getUILang("S_S")],["displacement","S_displacement",this.skillItem.displacement],["targetsType","S_targetsType",d.instance.getUILang("S_targetsType"+this.skillItem.targetsType)]];this.list_skillAttrs.array=e}removeEvent(){}};sd=p([BE("PiBuXnP8ToeveVbB_bfhUQ")],sd);var ld=class extends Laya.Box{};var{regClass:PE}=Laya,cd=class extends ld{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,e&&(this.img_icon.skin=`gameIcon/hero/heroDetail/img_hero_state_${e}.png`)}};cd=p([PE("kgETBhusT2WQRM1T39-4EA")],cd);var ud=class extends Laya.Dialog{};var{regClass:RE}=Laya,pd=class extends ud{constructor(){super()}onOpened(t){this.list_record.array=[],this.onGetList()}async onGetList(){var t=await A.requestPost("wxgame/mutiNft/record",{});t&&t.record?(this.list_record.array=t.record,!t.record||t.record.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1):B.instance.notice(d.instance.getLanguage(135))}};pd=p([RE("nkhiH9TpSY6e2tWJ07b86g")],pd);var md=class extends Laya.Box{};var{regClass:NE}=Laya,dd=class extends md{constructor(){super(...arguments);this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.isAddEvent=!0)}onCopy(){let e=this.heroTransferDto.toAddress;doCopy(e),B.instance.notice(d.instance.getLanguage(132))}set dataSource(e){super.dataSource=e,this.heroTransferDto=e,this.heroTransferDto&&(this.addEvent(),this.setCurrentOutPut())}setCurrentOutPut(){if(this.tf_createDate.text=we.formatTimeStamp(this.heroTransferDto.createTime,"YY-MT-DD HH:MM"),this.tf_tokenId.text=this.heroTransferDto.nftId,this.tf_from.text=Ce.abbreviateString(this.heroTransferDto.fromAddress,18),this.tf_to.text=Ce.abbreviateString(this.heroTransferDto.toAddress,18),this.heroTransferDto.id>0){var e=new Mt;e.id=this.heroTransferDto.id,e.lv=this.heroTransferDto.lv,e.color=this.heroTransferDto.color,this.heroListItem.needPop=!1,this.heroListItem.dataSource=e}}};dd=p([NE("STy30_L-RjafQhbdmoDLDw")],dd);var hd=class extends Laya.Box{};var{regClass:OE}=Laya,fd=class extends hd{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&this.setCurrentOutPut()}async setCurrentOutPut(){if(!this.itemVo)return;let e=this.itemVo.itemItem;this.knapsackItem.dataSource=this.itemVo,e?this.disabled=!1:this.disabled=!0}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===pt.TYPE_Equipment?H.intance.openModule(f.EquipDetailDialog,this.itemVo):H.intance.openModule(f.KnapsackTipDialog,this.itemVo))}};fd=p([OE("HYoZb6e-RFKj8fjDKbl-7Q")],fd);var yd=class extends Laya.Box{};var{regClass:HE}=Laya,bd=class extends yd{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.coinItems=e,this.coinItems&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){if(this.coinItems){var e=this.coinItems[0];this.txt_num.text=Ee.filterNumFormat(L.instance.getConsumeValue(this.coinItems[0]),this.coinItems[1]),this.img_icon.skin=C.instance.getMoneyIcon(this.coinItems[0]),this.img_add.visible=e!=xe.TYPE_GOLD}}toDetail(){var e=this.coinItems[0];!this.coinItems||e==xe.TYPE_GOLD||(console.log(e),be.onGetMoney(e))}};bd=p([HE("NIAfVcg_S72kTvDQGuZ7vA")],bd);var gd=class extends Laya.Dialog{};var{regClass:UE}=Laya,vd=class extends gd{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}onEnable(){this.initContainer(),Ne.instance.playSoundByName(Ne.soundName32)}initContainer(){var e=je.instance.getOneItem();if(e){var i;e instanceof Array?(i=new Ve(e[0]),i.newAddCnt=e[1]):i=e,this.showItem(i)}}showItem(e){this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=e,this.tf_name.text=d.instance.getLanguage(e.itemItem.name)}onDisable(){y.intance.event(h.EVENT_CHECK_REMAIN,f.ItemGetDialog)}};vd=p([UE("tC2uDJDVQMaI41Lys60O5Q")],vd);var Ld=class extends Laya.Box{};var{regClass:VE}=Laya,_d=class extends Ld{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=new Ve;if(!this.itemVo)return;let i=this.itemVo.itemItem;i?(this.showAdd?this.txt_num.text=""+Ee.formatNumber(this.itemVo.newAddCnt,8):this.itemVo.m_iNum?this.txt_num.text=""+Ee.formatNumber(this.itemVo.m_iNum,8):this.txt_num.text=""+Ee.formatNumber(this.itemVo.newAddCnt,8),this.img_icon.skin=C.instance.getItemIcon(i.icon),this.img_box.skin="gameIcon/items/itemBg/img_"+i.quality+".png"):(this.txt_num.text="",this.img_icon.skin=null,this.img_box.skin="gameIcon/items/itemBg/img_0.png"),this.tf_isSch.visible=this.itemVo.isScholarship}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===pt.TYPE_Equipment?H.intance.openModule(f.EquipDetailDialog,this.itemVo):H.intance.openModule(f.KnapsackTipDialog,this.itemVo))}};_d=p([VE("LzxJYKybT_m3CJav3RyDmg")],_d);var xd=class extends Laya.Scene{};var{regClass:FE}=Laya,wd=class extends xd{constructor(){super(...arguments);this.subBagInfo=null;this.currTab=0;this.type=1;this.isWhite=!1;this.items=[];this.hasItem=!1}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP,this.listPanel1.visible=!1}onOpened(e){this.type=e}onEnable(){y.intance.on(h.EVENT_REFRESH_KNAPSACK,this,this.onRefreshKnapsack),this.btn_transfer.on(Laya.Event.CLICK,this,this.onShowTransfer),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.box_show.visible=!1,this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-$.DESIGN_HEIGHT)/2}setTab(e){for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}async initLuckDrawView(){await gt.instance.ownerBag();let e=await A.requestPost("wxgame/player/getWhiteListInfo",{type:1});e&&(this.isWhite=e.in),!this.destroyed&&(this.type?this.onClickTab(this.type):this.onClickTab(1))}async onClickTab(e){if(this.currTab!=e&&(this.setTab(e),this.box_2.visible=!0,!this.destroyed)){var i=await this.getItemByType(e);this.listPanel1.array=i,this.listPanel1.visible=!0,this.listPanel1.selectedIndex=-1,this.hasItem&&(this.listPanel1.selectedIndex=0)}}async getItemByType(e){var i;switch(e){case 1:i=pt.BACKTYPE_Consumption;break;case 2:i=pt.BACKTYPE_Equipment;break;case 3:i=pt.BACKTYPE_PA_CUP;break}this.items=[],this.hasItem=!1;var n=L.instance.m_packageData.getBackByType(i);if(e==1){if(!this.subBagInfo){let u=(await A.requestPost("wxgame/lease/bag",{})).list,m={};for(let g of u)g.ticketId in m?m[g.ticketId]+=g.ticketCount:m[g.ticketId]=g.ticketCount;this.subBagInfo=Object.keys(m).map(g=>({ticketId:g,ticketCount:m[g]}))}if(this.subBagInfo)for(let c=0;c<this.subBagInfo.length;c++){let u=this.subBagInfo[c];if(u.ticketCount){var r=new Ve(u.ticketId);r.newAddCnt=u.ticketCount,r.isScholarship=!0,console.log(r),n.push(r)}}console.log(this.subBagInfo)}for(var o=n.length>30?n.length:30,s=0;s<o;s++){var l=n[s];l?(s==0&&(this.hasItem=!0),this.items.push(l)):this.items.push(new Ve(0))}return this.items}onSelectItem(e,i){if(this.itemVo=this.items[e],console.log(this.itemVo),this.itemVo){let n=this.itemVo.itemItem;this.img_icon.skin=C.instance.getItemIcon(n.icon),this.tf_name.text=d.instance.getLanguage(n.name),this.tf_des.text=d.instance.getLanguage(n.des),this.box_show.visible=!0,n.transfer==1&&L.instance.playerDto.unionLeader==1&&this.itemVo.subType==8?this.btn_transfer.visible=!0:this.isWhite&&n.subType==7?this.btn_transfer.visible=!0:this.btn_transfer.visible=!1}else this.img_icon.skin=null,this.tf_name.text="",this.tf_des.text="",this.box_show.visible=!1}onShowTransfer(){this.itemVo.itemItem.transfer==1&&L.instance.playerDto.unionLeader==1&&this.itemVo.subType==8?H.intance.openModule(f.UnionTransferView,this.itemVo):this.isWhite&&this.itemVo.subType==7&&H.intance.openModule(f.TicketTransferView,this.itemVo)}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}stopAni(e){console.log("stopAni: "+e)}onRefreshKnapsack(e){this.initLuckDrawView()}removeEvent(){y.intance.off(h.EVENT_REFRESH_KNAPSACK,this,this.onRefreshKnapsack)}};wd=p([FE("6IPqO9JvTmygjIZQXMwq2A")],wd);var Id=class extends Laya.Dialog{};var{regClass:zE}=Laya,Ed=class extends Id{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}setOpenData(e){e&&(this.itemVo=e)}onEnable(){this.item.dataSource=this.itemVo;let e=this.itemVo.itemItem;this.tf_name.text=d.instance.getLanguage(e.name),this.txt_type.text=d.instance.getLanguage(6060)+d.instance.getLanguage(e.type),this.txt_desc.text=d.instance.getLanguage(e.des),this.btn_use.visible=e.use!="0",this.btn_use.clickHandler=new Laya.Handler(this,this.useItem)}async useItem(){this.close()}removeEvent(){}};Ed=p([zE("or8jNdIhRpSbAG2JBhH-wA")],Ed);var Td=class extends Laya.Dialog{};var{regClass:GE}=Laya,Sd=class extends Td{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}onEnable(){Ne.instance.playSoundByName(Ne.soundName32)}setOpenData(e){e&&(this.reward=e);var i=[],n=this.reward;n.forEach(c=>{if(c.id&&c.id>0){var u=new Ve(c.id);u.newAddCnt=c.count,c.id==3011&&(u.itemItem.icon=c.id),i.push(u)}});var r=this.list_reward.spaceX,o=this.list_reward.itemTemplate.width,s=i.length;this.list_reward.repeatX=s;var l=s*o+r*(s-1);this.list_reward.width=l,this.list_reward.x=this.width-l>>1,this.list_reward.array=i}};Sd=p([GE("xwYUFnd4S3uJGIJSjjbRag")],Sd);var Cd=class extends Laya.Box{};var{regClass:jE}=Laya,kd=class extends Cd{constructor(){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}onEnable(){console.log("OpenScene onEnable："+this.m_strName)}getName(){console.log(this.m_strName)}onDisable(){}};kd=p([jE("sQS5mrqRQLWcBk-SgfBGJw")],kd);var Ad=class extends Laya.Box{};var{regClass:qE}=Laya,Dd=class extends Ad{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}set dataSource(e){super.dataSource=e,this.mailDto=e,this.mailDto&&this.setCurrentOutPut()}async setCurrentOutPut(){this.mailDto&&(this.mailDto.type==2?(this.tf_title.visible=!1,this.fromBox.visible=!0,this.mailDto.fromPlayerName?this.tf_from.text=`From ${this.mailDto.fromPlayerName}`:this.tf_from.text=""):(this.tf_title.visible=!0,this.fromBox.visible=!1,this.tf_title.text=this.mailDto.title),this.tf_time.text=we.formatDayAndTime(this.mailDto.createTime,".").date,this.img_reward.visible=this.mailDto.reward.length>0,this.img_red.visible=this.mailDto.state==0,this.img_box.skin=this.mailDto.state==0?"res/mail/img_mail_state_0.png":"res/mail/img_mail_state_1.png")}};Dd=p([qE("UKoifNR5Qmm4eq8sXy0K3A")],Dd);var Md=class extends Laya.Scene{};var{regClass:WE}=Laya,Bd=class extends Md{constructor(){super(...arguments);this.subBagInfo=null;this.noOpenLock=!1;this.currTab=0;this.type=1;this.items=[];this.hasItem=!1}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP,this.listPanel1.visible=!1}onOpened(e){this.type=e}onEnable(){this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.btn_one_claim.on(Laya.Event.CLICK,this,this.onOneClaim),this.btn_one_deletior.on(Laya.Event.CLICK,this,this.noRead),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1,!1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2,!1]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3,!1]),this.btn_copy.on(Laya.Event.CLICK,this,this.onClickCopy),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.box_show.visible=!1,this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-$.DESIGN_HEIGHT)/2}setTab(e){this.currTab=e;for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}async initLuckDrawView(){let e=await A.requestPost("wxgame/mail/list",{},!0,!0);await L.instance.m_mailData.initData(e.data),this.resetRedData(),!this.destroyed&&(this.type?this.onClickTab(this.type):this.onClickTab(1))}async refreshView(e=!0){let i=await A.requestPost("wxgame/mail/list",{},!0,!0);await L.instance.m_mailData.initData(i.data),this.resetRedData(),e&&this.onClickTab(this.currTab,!0)}refreshMailRed(){let e=L.instance.m_mailData.m_dicTypeList.get(1)}async onClickTab(e,i=!1){if(!i){if(this.currTab==e)return;this.setTab(e)}if(e>0){if(this.box_2.visible=!0,this.destroyed)return;var n=await this.getItemByType(e);this.listPanel1.array=n,this.listPanel1.visible=!0}this.listPanel1.selectedIndex=-1,this.box_show.visible=!1,this.hasItem?(this.noDataBox.visible=!1,this.listPanel1.selectedIndex=0,this.btn_one_deletior.visible=!0):(this.noDataBox.visible=!0,this.btn_one_deletior.visible=!1)}async getItemByType(e){var i=e;return this.items=[],this.hasItem=!1,this.items=L.instance.m_mailData.getListByType(i),this.hasItem=this.items.length>0,this.items}async onSelectItem(e,i){if(console.log("onSelectItem selectIndex: "+e),this.currMailDto=this.items[e],console.log(this.currMailDto),this.currMailDto){this.tf_title.text=this.currMailDto.title,this.tf_des.text=this.currMailDto.content,this.tf_time.text=we.formatDayAndTime(this.currMailDto.createTime,".").date;var n=[],r=this.currMailDto.reward;if(r.forEach(s=>{var l=new Ve(s.id);l.newAddCnt=s.count,n.push(l)}),this.list_reward.array=n,this.list_reward.gray=this.currMailDto.receive==1,this.box_show.visible=!0,this.btn_receive.labelSize=28,this.currMailDto.state==0&&!this.noOpenLock){var o=await A.requestPost("wxgame/mail/read",{id:this.currMailDto.id});if(o.errorCode==0){let s=this.listPanel1.selectedIndex;await this.refreshView(),this.listPanel1.selectedIndex=s}}this.noOpenLock=!1,this.currMailDto.type==2?(this.btn_receive.disabled=!1,this.tf_title.visible=!1,this.fromBox.visible=!0,this.tf_des.y=145,this.tf_re.text=`Re ${L.instance.playerDto.name}`,this.tf_re.visible=!0,this.address=this.currMailDto.fromPlayerAddress,this.address?this.tf_from.text=`From ${ve.shortenString(this.address,8,6)}`:this.tf_from.text="",n.length>0?this.currMailDto.receive==0?(this.btn_receive.label="Receive and reply",this.btn_receive.labelSize=24):this.btn_receive.label="Reply":this.btn_receive.label="Reply"):(this.tf_des.y=112,this.tf_re.visible=!1,this.tf_title.visible=!0,this.fromBox.visible=!1,this.btn_receive.disabled=this.currMailDto.state>0,this.btn_receive.label="Mark as read")}else this.box_show.visible=!1}async onReceive(){if(this.currMailDto&&this.currMailDto.type==2){let i={icon:this.currMailDto.fromPlayerIcon,name:this.currMailDto.fromPlayerName,id:this.currMailDto.fromPlayerId};if(this.currMailDto.reward.length>0&&this.currMailDto.receive==0){var e=await A.requestPost("wxgame/mail/receive",{id:this.currMailDto.id});e.errorCode==0?(e.reward&&e.reward.length>0?(H.intance.openModule(f.PrivateChatDialog,i),H.intance.openModule(f.RewardGetDialog,e.reward)):(B.instance.notice(d.instance.getLanguage(2e3)),H.intance.openModule(f.PrivateChatDialog,i)),this.refreshView()):B.instance.notice(d.instance.getLanguage(135))}else H.intance.openModule(f.PrivateChatDialog,i)}}async onOneClaim(){if(this.currMailDto){var e=await A.requestPost("wxgame/mail/readOneKey",{});e.errorCode==0?(e.reward&&e.reward.length>0?H.intance.openModule(f.RewardGetDialog,e.reward):B.instance.notice(d.instance.getLanguage(2e3)),this.refreshView()):B.instance.notice(d.instance.getLanguage(135))}}async onOneDeletior(){if(this.currMailDto){var e=await A.requestPost("wxgame/mail/delOneKey",{});e.errorCode==0?(B.instance.notice(d.instance.getLanguage(2e3)),this.refreshView()):B.instance.notice(d.instance.getLanguage(135))}}async noRead(){let e=this.listPanel1.array[this.listPanel1.selectedIndex];if(this.noOpenLock=!1,console.log(e),e){let n=this.listPanel1.selectedIndex;var i=await A.requestPost("wxgame/mail/noRead",{id:e.id});this.listPanel1.selectedIndex=n,i.errorCode==0&&(this.listPanel1.selectedIndex==0&&(this.noOpenLock=!0),this.refreshView())}}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}onClickCopy(){this.address&&(doCopy(this.address),B.instance.notice(d.instance.getLanguage(132)))}removeEvent(){}resetRedData(){this.img_sysRed.visible=!1,this.img_friendRed.visible=!1,this.img_annRed.visible=!1;let e=L.instance.m_mailData.getRedData();e.system&&(this.img_sysRed.visible=!0),e.friend&&(this.img_friendRed.visible=!0),e.announce&&(this.img_annRed.visible=!0)}};Bd=p([WE("XwqkX1FmRISr-BmvQwE88Q")],Bd);var Pd=class extends Laya.Box{};var{regClass:KE}=Laya,Rd=class extends Pd{onEnable(){}notice(e){this.speed=2+Math.random()*1;let i=e;this.label_tf.text=e,console.log("notice: ",e),this.image_bg.width=this.label_tf.textField.textWidth+100,this.alpha=1,this.visible=!0}get view(){return this}get width(){return this.image_bg.width}update(){this.x-=this.speed}isOffScreen(){return this.x+this.width<0}onDisable(){console.log("barrageSpr recover"),Laya.Pool.recover("barrageSpr",this)}};Rd=p([KE("pMWsUZPhS4iK2yN8OCI4Yw")],Rd);var Nd=class extends Laya.Box{};var{regClass:YE}=Laya,Od=class extends Nd{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.check_coin.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,!e)return;this.addEvent();let i=e;this.check_coin.selected=i[1],this.tf_coin.text=i[2]}onCheck(){this._dataSource[1]=this.check_coin.selected,y.intance.event(h.EVENT_CHECK_ICON_SELECT)}};Od=p([YE("UTGHsPbQS6C5FohXv8T25Q")],Od);var Hd=class{constructor(){this.connectAddr="ws://120.53.94.125:10001";this.groupApplyList=[];this.groupData=[]}};var Ud=class extends Laya.Dialog{};var{regClass:$E}=Laya,Vd=class extends Ud{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER;this.coinType=3001;this.nodeId=-1;this.coinIds=[];this.no=0}setOpenData(e){e&&(this.arenaLv=e[0])}onEnable(){this.btn_create.on(Laya.Event.CLICK,this,this.onCreate),this.input_customName.on(Laya.Event.INPUT,this,this.onInputChange),this.initContainer()}initContainer(){let e=L.instance.playerDto;if(!e)return;this.tf_roleName.text=e.name;let i=e.icon;this.playerIcon.headSkin=i,this.img_country.skin=C.instance.getCountryIcon(e.country+"");var n=R.intance.m_dicArenaTypes.get(U.instance.arenaType),r=n.passwordSwitch==1;r?this.img_box_pwd.visible=!0:this.img_box_pwd.visible=!1,this.initNode(),this.initCoinCombo(n),this.initCustomName()}initCustomName(){let e=R.intance.getGeneralValueById(14);this.tf_nameGold.text=e[1],this.img_nameGold.skin=C.instance.getMoneyIcon(e[0]),console.log(e)}initCoinCombo(e){U.instance.arenaType==3&&(this.coinCombo.visible=!1,this.box_node.y+=50),this.coinIds=e.coinTypes;var i=[];this.coinIds.forEach(n=>{var r=R.intance.m_dicItems.get(n);i.push(d.instance.getLanguage(r.name))}),this.coinCombo.selectHandler=new Laya.Handler(this,this.onSelected2),this.coinCombo.dataSource=i,this.coinCombo.selectedIndex=0}onSelected2(e){e!=-1&&(this.coinType=this.coinIds[e],console.log("您选中了 coinType"+this.coinType),this.setRoomInfo())}setRoomInfo(){var e=U.instance.arenaType;this.arenaItem=R.intance.getSheetDataByMultiKey(R.intance.m_dicArenaMulDic,[e,this.arenaLv,this.coinType]),this.tf_arenaName.text=d.instance.getLanguage(this.arenaItem.name),this.tf_min.text=this.arenaItem.numberMin+"",this.tf_max.text=this.arenaItem.numberMax+"",this.onGetRoomNo()}async onGetRoomNo(){this.btn_create.disabled=!0;let e=this,i=await A.requestPost("wxgame/room/getRoomNameSequence",{arenald:this.arenaItem.id});i?(this.no=i.no,this.onSetRoomName()):B.instance.notice(d.instance.getLanguage(135))}onSetRoomName(){var e=R.intance.m_dicItems.get(this.coinType),i=d.instance.getLanguage(e.name),n="";U.instance.arenaType==1?n="PRO."+i:U.instance.arenaType==2?n="AD."+i:U.instance.arenaType==3&&(n="TRG"),n=n+"."+this.no,this.tf_roomName.text=n,this.btn_create.disabled=!1}onInputChange(){Laya.timer.frameOnce(1,this,this.checkAndTruncate)}checkAndTruncate(){let e=this.input_customName.text,i=0,n="";for(let r=0;r<e.length;r++){let o=e.charAt(r),s=this.isDoubleByte(o)?2:1;if(i+s<=15)n+=o,i+=s;else break}e!==n&&(this.input_customName.text=n,this.input_customName.focus=!0,this.input_customName.editable=!0)}isDoubleByte(e){return e.charCodeAt(0)>255}initNode(){this.list_node.selectHandler=new Laya.Handler(this,this.handleSelectNode),this.createNodeList(),this.box_node.on(Laya.Event.CLICK,this,this.onOpenNode),this.list_node.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_node.mouseHandler=Laya.Handler.create(this,this.onNodeItemMouse,null,!1),this.list_node.renderHandler=Laya.Handler.create(this,this.onNodeItemRender,null,!1),this.list_node.scrollBar&&this.list_node.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onNodeItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_node.selectedIndex=i,this.onHideNode())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onNodeItemRender(e,i){e.onChange(this.list_node.selectedIndex==i)}onOpenNode(){this.img_node_pad.visible==!1&&(this.img_node_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideNode))}onHideNode(){this.img_node_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideNode)}handleSelectNode(e){if(console.log("handleSelectNode: "+e),e!=-1){let i=this.list_node.selectedItem;this.nodeId=i.id,this.img_node.skin=C.instance.getNodeIcon(i.area),this.tf_node.text=d.instance.getLanguage(i.name),this.nodeDelaySign.dataSource=i}}createNodeList(){let e=R.intance.m_dicNodes;this.list_node.array=e.values,this.list_node.visible=!0;let i=-1,n=0;e.values.length>0&&(i=0),this.list_node.selectedIndex=i}async onCreate(){let e=this.input_customName.text;if(e!=""&&L.instance.getConsumeValue(xe.TYPE_GOLD)<Number(this.tf_nameGold.text)){B.instance.notice(d.instance.getLanguage(1362));return}let i=this.tf_roomName.text;if(!i||i==""){B.instance.notice(d.instance.getLanguage(1361));return}let n=this.input_pwd.text;var r=this.arenaItem.id,o=new Hd;o.arenaId=r,o.nodeId=this.nodeId,o.roomName=i,o.customName=e,Xe.instance.onCreateAndJoinWithPwd(Me.ACTION_CREATE,o,n)}};Vd=p([$E("_y9qJpZZRk2p26xdgYPRyA")],Vd);var Fd=class extends Laya.Box{};var{regClass:XE}=Laya,zd=class extends Fd{constructor(){super(...arguments);this.hasOpened=!1}onEnable(){this.on(Laya.Event.CLICK,this,this.openMaxView),y.intance.on(h.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom)}onUpdateMatchRoom(){this.tf_coolTime.text=we.format(z.instance.coolDownTime,":",!1),z.instance.coolDownTime==5&&!this.hasOpened&&(console.log("onUpdateMatchRoom "+z.instance.coolDownTime),this.openMaxView(),this.hasOpened=!0)}openMaxView(){Xe.instance.openMaxView()}onDisable(){y.intance.on(h.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom)}};zd=p([XE("7hINWNN3S8SmWSveWJQJSw")],zd);var Gd=class{constructor(t){this.barrages=[];this.screenWidth=t.width,this.screenHeight=t.height,this.barrageContainer=t}addBarrage(t,e,i){let n=Laya.Pool.getItemByCreateFun("barrageSpr",Xe.instance.barrageSprPrefab.create,Xe.instance.barrageSprPrefab);n.notice(t),n.x=this.screenWidth,n.y=i,this.barrages.push(n),this.barrageContainer.addChild(n)}update(){for(let t=this.barrages.length-1;t>=0;t--){let e=this.barrages[t];e.update(),e.isOffScreen()&&(this.barrages.splice(t,1),this.barrageContainer.removeChild(e))}}findAvailableYPosition(t){let i=new Array(Math.floor(this.screenHeight/(t+10))).fill(!0);for(let n of this.barrages){let r=Math.floor(n.y/(t+10));i[r]=!1}for(let n=0;n<i.length;n++)if(i[n])return n*(t+10);return-1}};var jd=class extends Laya.Dialog{};var{regClass:QE}=Laya,qd=class extends jd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER;this.isMax=!1;this.lastState=-1;this.currTab=0}onEnable(){y.intance.on(h.EVENT_CHANGE_HEAD,this,this.onColorSelect),this.btn_switch.on(Laya.Event.CLICK,this,this.onSwitchClick),this.btn_emoji.on(Laya.Event.CLICK,this,this.onEmojiClick),this.btn_color.on(Laya.Event.CLICK,this,this.onColorClick),this.btn_send.on(Laya.Event.CLICK,this,this.onSendClick),this.tf_launch.on(Laya.Event.CLICK,this,this.onShowBarrageBtn),this.img_bg.on(Laya.Event.CLICK,this,this.onHideMenu),this.list_wait_hero.on(Laya.Event.CLICK,this,this.onHideMenu),this.input_chat.on(Laya.Event.ENTER,this,this.onSendClick),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_help.on(Laya.Event.CLICK,this,this.onHelp),this.btn_showSignUp.on(Laya.Event.CLICK,this,this.onShowSignUp),this.btn_min.on(Laya.Event.CLICK,this,this.onMinClick),this.btn_exit.on(Laya.Event.CLICK,this,this.onExitClick),y.intance.event(h.EVENT_ENTER_MATCH_ROOM,!1),y.intance.on(h.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom),A.stopHeartInRoom=!0,this.initContainer(),Te.instance.sendCustumEvent(40)}setOpenData(e){e&&(this.isMax=e)}initContainer(){this.list_wait_hero.visible=!0,this.onSetStateTest();var e=z.instance.roomDto,i=e.roomId,n=e.arenaId,r=e.coinType,o=e.state,s=R.intance.m_dicArenaDic.get(n);z.instance.currArenaItem=s,this.tf_arenaName.text=d.instance.getLanguage(s.name),this.arenaNo.text=i+"",Xe.instance.init(),this.tf_roomName.text=z.instance.roomDto.roomName;var l=z.instance.roomDto.nodeId;if(l){var c=R.intance.m_dicNodes.get(l);this.nodeDelaySign.dataSource=c,this.nodeDelaySign.startTest()}this.updateExitCD(),(o==Me.STATE_WAIT||o==Me.STATE_SIGNUP)&&this.initChat(),this.initCumulative()}updateExitCD(){var e=Math.round(z.instance.roomDto.joinCd/1e3),i=e-z.instance.currArenaItem.notQuit;i>z.instance.currArenaItem.exitTime&&(i=z.instance.currArenaItem.exitTime),z.instance.limitCd=i,z.instance.limitCd>0?(this.onSetExitTime(),Laya.timer.loop(1e3,this,this.onSetExitTime)):(Laya.timer.clear(this,this.onSetExitTime),this.btn_exit.disabled=!0,this.tf_exit.text="Exit")}onSetExitTime(){z.instance.limitCd>=0?(this.tf_exit.text=d.instance.getUILang("Exit")+" ("+z.instance.limitCd+"s)",z.instance.limitCd--,this.btn_exit.disabled=!1):(Laya.timer.clear(this,this.onSetExitTime),this.btn_exit.disabled=!0,this.tf_exit.text="Exit")}onMinClick(){var e=z.instance.roomDto.state;e==Me.STATE_WAIT?z.instance.coolDownTime>5&&(this.close(),Xe.instance.openMinView()):console.log("不是房间等待状态，不能最小化")}async onExitClick(){var e=z.instance.roomDto.state;e==Me.STATE_WAIT?await A.requestPost("wxgame/room/leave",{roomId:z.instance.roomDto.roomId})?Xe.instance.close():B.instance.notice(d.instance.getLanguage(135)):console.log("不是房间等待状态，不能退出")}onUpdateMatchRoom(){this.onSetStateTest();var e=z.instance.roomDto.state;this.lastState!=e&&(this.lastState=e,e==Me.STATE_WAIT?(this.list_wait_hero.visible=!0,this.box_barrage.visible=!0,this.box_barrage_btn.visible=!0,this.box_state_signUp.visible=!1,this.box_state_group.visible=!1):e==Me.STATE_SIGNUP?(this.list_wait_hero.visible=!0,this.box_barrage.visible=!0,this.box_barrage_btn.visible=!0,this.box_state_signUp.visible=!0,this.box_state_group.visible=!1,this.onShowSignUp(null)):e==Me.STATE_GROUPED&&(d.instance.getLanguage(1089),this.list_wait_hero.visible=!1,this.box_barrage.visible=!1,this.box_barrage_btn.visible=!1,this.box_state_signUp.visible=!1,this.box_state_group.visible=!0,this.clearChat()));var i=z.instance.roomDto.members.length;this.tf_people.text=i+"";var n=z.instance.currArenaItem.numberMax;z.instance.playerJoinDic==null&&(z.instance.playerJoinDic=new te),this.heros=[];for(var r=0;r<n;r++){var o=z.instance.roomDto.members[r];o?(this.heros.push(o),z.instance.playerJoinDic.set(o.id,o)):this.heros.push(null)}var s="";if(e==Me.STATE_GROUPED?s=d.instance.getLanguage(1376):s=d.instance.getLanguage(1089),this.tf_coolTime.text=s+" <font color='#ff5388'>"+we.format(z.instance.coolDownTime,":",!1)+"</font>",this.btn_min.disabled=z.instance.coolDownTime<=5,e==Me.STATE_WAIT)this.list_wait_hero.array=this.heros,this.list_wait_hero.visible=!0;else if(e==Me.STATE_SIGNUP)this.list_wait_hero.array=this.heros,this.list_wait_hero.visible=!0,this.tf_cumulative.text=d.instance.getLanguage(1374,z.instance.roomDto.groupApplyList.length),this.list_groupApply.array=z.instance.roomDto.groupApplyList;else if(e==Me.STATE_GROUPED&&this.groupInfos==null){var l=z.instance.roomDto.groupData;if(this.groupInfos=[],l){var c=1;l.forEach(u=>{this.groupInfos.push([c,u]),c++})}this.list_group.array=this.groupInfos}}initChat(){this.lastSendTime=0,this.box_barrage.width=Laya.stage.width,this.box_barrage.x=this.width-this.box_barrage.width>>1,this.box_barrage.visible=!0,this.barrageManager=new Gd(this.box_barrage),Laya.timer.frameLoop(1,this,this.update),Laya.timer.loop(1500,this,this.onRecvMsg),this.onEmojiHide(),this.onColorHide(),this.list_wait_hero.selectHandler=new Laya.Handler(this,this.onUserSelected),this.list_color.selectHandler=new Laya.Handler(this,this.handleSelectColor),this.list_emoji.selectHandler=Laya.Handler.create(this,this.onSelectEmojiItem,[],!1),this.createColorList(),this.onClickTab(1)}clearChat(){Laya.timer.clear(this,this.update),Laya.timer.clear(this,this.onRecvMsg)}update(){this.barrageManager.update()}handleSelectColor(e){if(e!=-1){let i=this.list_color.selectedItem;i&&(L.instance.colorId=i.id),this.onColorHide()}}createColorList(){let e=R.intance.m_dicFontColor;this.list_color.array=e.values,this.list_color.visible=!0;let i=-1,n=0;for(let r of e.values){if(r.id==L.instance.colorId){i=n;break}n++}this.list_color.selectedIndex=i}onUserSelected(e,i){if(console.log("onUserSelected: ",e,i),this.img_box_btn_2.visible){var n=this.list_wait_hero.selectedItem;if(n){var r=n.name,o=`@${r}`,s=this.input_chat.text;s.indexOf(o)==-1&&(this.input_chat.text=`${o}  ${s}`),this.list_wait_hero.selectedIndex=-1}}}onColorSelect(e){console.log("fontColorItem: ",e)}onSwitchClick(){console.log("onSwitchClick"),this.box_barrage.visible=!this.box_barrage.visible,this.box_barrage.visible?(this.btn_switch.skin="res/chat/img_chat_switch_1.png",this.btn_send.disabled=!1):(this.btn_switch.skin="res/chat/img_chat_switch_2.png",this.btn_send.disabled=!0)}onEmojiClick(){console.log("onEmojiClick"),this.img_box_emoji.visible==!1?this.onEmojiShow():this.onEmojiHide(),this.onColorHide()}onColorClick(){console.log("onColorClick"),this.img_box_color.visible==!1?this.onColorShow():this.onColorHide(),this.onEmojiHide()}onEmojiShow(){console.log("onEmojiShow"),this.img_box_emoji.visible=!0,this.btn_emoji.skin="res/chat/btn_emoji_1.png"}onEmojiHide(){console.log("onEmojiHide"),this.img_box_emoji.visible=!1,this.btn_emoji.skin="res/chat/btn_emoji_2.png"}onColorShow(){console.log("onColorShow"),this.img_box_color.visible=!0,this.btn_color.skin="res/chat/btn_color_1.png"}onColorHide(){console.log("onColorHide"),this.img_box_color.visible=!1,this.btn_color.skin="res/chat/btn_color_2.png"}onShowBarrageBtn(){this.img_box_btn_2.visible=!0,this.img_box_btn_1.visible=!1}onHideMenu(){this.onEmojiHide(),this.onColorHide()}onSendClick(){console.log("onSendClick");var e=this.input_chat.text;if(!e||e=="")return;let i=Date.now();if(i-this.lastSendTime<1e3){B.instance.notice(d.instance.getLanguage(1359,1));return}this.lastSendTime=i;var n=R.intance.m_dicFontColor.get(L.instance.colorId);let r=n.colorValue;var o=z.instance.roomDto,s=o.roomId;A.requestPost("wxgame/room/danmuPublish",{roomId:s,msg:e,color:r}),this.input_chat.text=""}async onRecvMsg(){console.log("onRecvMsg");var i=(await A.requestPost("wxgame/room/danmuLoop",{roomId:z.instance.roomDto.roomId})).msgList;i&&i.forEach(n=>{this.onSetMsg(n)})}onSetMsg(e){var i=e.msg;if(!i||i=="")return;var n=e.color;let r=44,o=this.barrageManager.findAvailableYPosition(r);if(o!==-1){var s=this.parseEmojis(i);i=s[0];var l=s[1],c=e.name;i=`${c}: ${i}`,i=`<font  color='${n}'>${i}</font>`,this.barrageManager.addBarrage(i,l,o)}else console.log("No available position for new barrage")}parseEmojis(e){let i=e,n=/\[:(\d+)\]/g,r,o=0;for(;(r=n.exec(e))!==null;){let c=parseInt(r[1]);console.log("parseEmojis: ",r[0],r[1]);let u;var s=R.intance.m_dicExpression.get(c);if(s){var l=C.instance.getEmoji(s.type,s.icon);u=`<img src='${l}' width='55' height='55'/>`,o++}else u=r[0];i=i.replace(r[0],u)}return[i,o]}onClickTab(e){if(this.currTab!=e){this.setTab(e);var i=this.getItemByType(e);this.list_emoji.array=i}}setTab(e){for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("img_tab_icon").skin="res/chat/img_tab_"+i+"_1.png"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("img_tab_icon").skin="res/chat/img_tab_"+i+"_2.png")}getItemByType(e){var i=R.intance.m_dicExpression.values,n=[],r=-1,o=0;return i.forEach(s=>{s.type==e&&n.push(s)}),n}onSelectEmojiItem(e){var i=this.list_emoji.selectedItem;if(console.log("onSelectItem expressionItem: ",i),i){let n=`[:${i.id}]`;this.input_chat.text+=n,this.onEmojiHide(),this.list_emoji.selectedIndex=-1}}isOnlyEmojis(e){return/^(\[:\d+\])*$/.test(e)}initCumulative(){}onHelp(){var e=d.instance.getLanguage(1377),i=d.instance.getLanguage(1378);H.intance.openModule(f.HelpDialog,[2,e,i])}onShowSignUp(e){console.log("onShowSignUp");var i=z.instance.roomDto.groupApplyList,n=!1;if(i&&i.forEach(x=>{x==L.instance.playerDto.pid&&(n=!0)}),n)e!=null&&B.instance.notice(d.instance.getLanguage(1375));else{var r="",o=z.instance.currArenaItem;if(o.item&&o.item.length>1){var s=o.item[0],l=o.item[1];let x=R.intance.getGeneralValueById(15);var c=2,u=R.intance.m_dicItems.get(s);if(u.itemValue.length>1){var m=C.instance.getMoneyIcon(u.itemValue[0]),g=Ee.formatNumber(u.itemValue[1]*l)+"";r=d.instance.getLanguage(1363,x,g,m)}else{var m=C.instance.getMoneyIcon(3005);r=d.instance.getLanguage(1363,x,0,m)}}se.instance().AlertByType(N.MatchConfimDialog,r,N.CANCEL,Laya.Handler.create(this,this.onSignUp))}}onSignUp(){var e=z.instance.roomDto;Xe.instance.onCreateAndJoinWithPwd(Me.ACTION_SIGNUP,e,"")}onSetStateTest(){}onDisable(){this.removeEvent(),console.log("EnterRoomView onDisable"),y.intance.off(h.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom),fe.intance.currSceneName!=X.M_SCENE_MAIN?fe.intance.setCurrentScene(X.M_SCENE_MAIN):y.intance.event(h.EVENT_ENTER_MATCH_ROOM,!0),A.stopHeartInRoom=!1}removeEvent(){Laya.timer.clearAll(this),y.intance.off(h.EVENT_CHANGE_HEAD,this,this.onColorSelect),Laya.Pool.clearBySign("barrageSpr")}};qd=p([QE("IwpLh2K2T5Gh7QXYnJakAw")],qd);var Wd=class extends Laya.Box{};var{regClass:ZE}=Laya,Kd=class extends Wd{constructor(){super(...arguments);this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.expressionItem=e,this.expressionItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.expressionItem.id;this.img_emoji.skin=C.instance.getEmoji(this.expressionItem.type,this.expressionItem.icon)}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}onCheck(){y.intance.event(h.EVENT_EMOJI_ICON_SELECT,this.expressionItem)}};Kd=p([ZE("UrCKcS-wTbm0LjT3KCsUYA")],Kd);var Yd=class extends Laya.Box{};var{regClass:JE}=Laya,$d=class extends Yd{set dataSource(e){super.dataSource=e,this.fontColorItem=e,this.fontColorItem&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.fontColorItem.id;this.img_color.skin=C.instance.getFontColor(e)}onChange(e){}};$d=p([JE("Vf8n1XGhQRK0Y2ndcK1U3g")],$d);var Xd=class extends Laya.Dialog{};var{regClass:eT}=Laya,Qd=class extends Xd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}setOpenData(e){e&&(this.roomDto=e[0])}onEnable(){this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.initContainer()}initContainer(){var e=R.intance.m_dicItems.get(this.roomDto.coinType),i=d.instance.getLanguage(e.name),n=R.intance.m_dicArenaDic.get(this.roomDto.arenaId);this.tf_roomName.text=d.instance.getLanguage(n.name),this.input_pwd.text=""}async onJoin(){let e=this.input_pwd.text;Xe.instance.onCreateAndJoinWithPwd(Me.ACTION_JOIN,this.roomDto,e)}};Qd=p([eT("bn6StZy0ROGBH9GCTateCA")],Qd);var Zd=class extends Laya.Scene{};var Jd=class a{constructor(){this._inited=!1}static getInstance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}};var{regClass:tT}=Laya,ln=class extends Zd{constructor(){super(...arguments);this.currIconAni=1}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP,Jd.getInstance().init()}async onOpened(e){this.mouseThrough=this.mouseThrough=!0,this.headBox.mouseThrough=!0;let i=this.getChildByName("mcMain");i&&(i.mouseThrough=!0),this.btn_fullScreen.visible=$.isInto,$.isInto&&$.isFull&&(be.isFullScreen=!0,be.isFullScreen?this.img_fullScreen.skin="res/main/img_full_2.png":this.img_fullScreen.skin="res/main/img_full_1.png"),this.updateTopInfo();var n=Laya.stage.width-$.DESIGN_WIDTH>>1;this.leftX=this.leftMenu.x,this.rightX=this.rightMenu.x,this.leftMenu.x=this.leftX-n-this.leftMenu.width,this.rightMenu.x=this.rightX+n+this.rightMenu.width,Laya.Tween.to(this.leftMenu,{x:this.leftX-n},500),Laya.Tween.to(this.rightMenu,{x:this.rightX+n},500),this.initBtnAni(),Te.instance.sendCustumEvent(34),ln.M_B_FIRST_Open&&A.requestPost("wxgame/sys/notice",{type:2},!0,!0).then(r=>{console.log(r);var o=r,o=r;if(o.list&&o.list.length>0){H.intance.openModule(f.NoticeDialog,[2,o]);return}}),ln.M_B_FIRST_Open=!1}initBtnAni(){for(var e=1;e<6;e++)this["spine_"+e].on(Laya.Event.READY,this,this.onSkReady,[this["spine_"+e]])}onSkReady(e){e.stop(),e.visible=!1,e==this.spine_5&&this.startBtnAni()}startBtnAni(){this.currIconAni>5&&(this.currIconAni=1),this["spine_"+this.currIconAni].play(0,!1),this["spine_"+this.currIconAni].visible=!0,this.currIconAni++,Laya.timer.once(2e3,this,this.startBtnAni)}changeMailFlag(){}updateTopInfo(){let e=L.instance.playerDto;if(!e)return;this.tf_roleName.text=e.name,this.levelTF.text=e.lv.toString(),e.needTip=!0,this.playerIcon.dataSource=e,this.updateExp(),this.changeMailFlag();let i=new Date(L.instance.m_serverTime);console.log("server time toLocaleString："+i.toLocaleString()),console.log("server time offset date："+L.instance.timeZoneOff/60/60),this.updateLocalAssets()}updateExp(){}requestAssets(){y.intance.event(h.UPDATE_ASSETS)}async updataBalence(){await j.instance.getBalance()}async updateAssets(){await nn.instance.updateAssetsBalance()}updateLocalAssets(){this.tf_3005.text=Ee.filterNumFormat(L.instance.getConsumeValue(xe.TYPE_GOLD),0)}onEnable(){this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),Laya.timer.loop(1e3,this,this.refreshRoomTime),this.btn_shop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_shop]),this.btn_guild.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_guild]),this.btn_heroes.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_heroes]),this.btn_backpack.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_backpack]),this.btn_asset.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_asset]),this.btn_scholarshop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_scholarshop]),this.btn_leaderboard.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_leaderboard]),this.btn_social.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_social]),this.btn_mail.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_mail]),this.btn_activities.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_activities]),this.btn_setting.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_setting]),this.btn_fullScreen.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_fullScreen]),y.intance.on(h.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),y.intance.on(h.ROLE_INFO_CHANGE,this,this.updateTopInfo),y.intance.on(h.UPDATE_ASSETS,this,this.updateAssets),y.intance.on(St.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),y.intance.on("CHANG_NAME",this,this.changeName),y.intance.on("open_buy",this,this.openBuyDialog),y.intance.on("msg_173",this,this.onFirstRecharge),y.intance.on("ACCOUNTVO_UPDATE",this,this.updateExp),y.intance.on(h.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),this.initBtnBox()}onClickTab(e){e==1?(U.instance.arenaType=1,fe.intance.setCurrentScene(X.M_SCENE_AIRDROP)):e==2?(U.instance.arenaType=2,fe.intance.setCurrentScene(X.M_SCENE_AIRDROP)):e==3&&(U.instance.arenaType=3,fe.intance.setCurrentScene(X.M_SCENE_AIRDROP))}refreshRoomTime(){this.refreshRoomBtnRed()}refreshRoomBtnRed(){this.img_red_1.visible=L.instance.getRedDotById(Ze.instance.ROOM_1_1)||L.instance.getRedDotById(Ze.instance.ROOM_1_2)||L.instance.getRedDotById(Ze.instance.ROOM_1_3),this.img_red_2.visible=L.instance.getRedDotById(Ze.instance.ROOM_2_1)||L.instance.getRedDotById(Ze.instance.ROOM_2_2)||L.instance.getRedDotById(Ze.instance.ROOM_2_3),this.img_red_3.visible=L.instance.getRedDotById(Ze.instance.ROOM_3_1)||L.instance.getRedDotById(Ze.instance.ROOM_3_2)||L.instance.getRedDotById(Ze.instance.ROOM_3_3),this.Img_social.visible=L.instance.getRedDotById(Ze.ROOM_FRIEND_APPLY),this.red_mail.visible=L.instance.getRedDotById(Ze.ROOM_MAIL),this.red_guild.visible=L.instance.getRedDotById(Ze.RED_GUILD_APPLY)}onFirstRecharge(e){}initBtnBox(){this.sortIconView()}sortIconView(){}async onclickBtnHandler(e){switch(e){case this.btn_shop:fe.intance.setCurrentScene(X.M_SCENE_SHOP);break;case this.btn_heroes:fe.intance.setCurrentScene(X.M_SCENE_HERO);break;case this.btn_backpack:fe.intance.setCurrentScene(X.M_SCENE_KNAPSACK);break;case this.btn_social:{fe.intance.setCurrentScene(X.M_SCENE_FRIEND);break}case this.btn_mail:fe.intance.setCurrentScene(X.M_SCENE_MAIL);break;case this.btn_guild:L.instance.playerDto.union>0?fe.intance.setCurrentScene(X.M_SCENE_MYUNION,L.instance.playerDto.union):fe.intance.setCurrentScene(X.M_SCENE_UNION);break;case this.btn_setting:H.intance.openModule(f.GameSettingLanguageDialog);break;case this.btn_fullScreen:be.fullScreen(!be.isFullScreen);break;case this.btn_friend:H.intance.openModule(f.FriendMemberDialog);break;case this.btn_asset:fe.intance.setCurrentScene(X.M_SCENE_ASSET);break;case this.btn_scholarshop:fe.intance.setCurrentScene(X.M_SCENE_SHOLARSHIP);break;case this.btn_wallet:H.intance.openModule(f.WalletDialog);break;case this.btn_leaderboard:fe.intance.setCurrentScene(X.M_SCENE_RANK);break;default:B.instance.notice(d.instance.getLanguage(12));break}}openBuyDialog(e){switch(parseInt(e)){case 3:this.buyGoldBtn();break;case 4:this.clickRecharge();break}}clickRecharge(){if($.m_bInstantGame==!0){let e=d.instance.getLanguage(500004);se.instance().AlertByType(N.BASEALERTVIEW,e,N.YES);return}y.intance.event(h.EVENT_OPEN_MODULE,[f.RechargeDialog])}changeName(e){}buyGoldBtn(){y.intance.event(h.EVENT_OPEN_MODULE,[f.GetMoreDialog])}onDisable(){for(var e=1;e<6;e++)this["spine_"+e].off(Laya.Event.READY,this,this.onSkReady);y.intance.off(h.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),y.intance.off(h.ACCOUNTVO_UPDATE,this,this.updateExp),y.intance.off(h.ROLE_INFO_CHANGE,this,this.updateTopInfo),y.intance.off(h.UPDATE_ASSETS,this,this.updateAssets),y.intance.off(St.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),y.intance.off("CHANG_NAME",this,this.changeName),y.intance.off("open_buy",this,this.openBuyDialog),y.intance.off("msg_173",this,this.onFirstRecharge),y.intance.off(h.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}onEnterMatchRoom(e){e?Laya.timer.once(2e3,this,this.startBtnAni):Laya.timer.clear(this,this.startBtnAni)}};ln.M_B_FIRST_Open=!0,ln=p([tT("pxhiJrX5SkKKvyFr8uIlNA")],ln);var eh=class extends Laya.Box{};var{regClass:iT}=Laya,th=class extends eh{constructor(){super();this.isAddEvent=!1}onEnable(){y.intance.on(h.EVENT_Game_Delay,this,this.onGameDelay)}onGameDelay(e){var i=R.intance.getGeneralValueById(6),n=i[0],r=i[1];this.tf_delay.text=e+"ms",e>r?(this.img_delay.skin="res/common/comm/img_com_xinhao3.png",this.tf_delay.color=ui.RED):e>n?(this.img_delay.skin="res/common/comm/img_com_xinhao2.png",this.tf_delay.color=ui.YELLOW):(this.img_delay.skin="res/common/comm/img_com_xinhao1.png",this.tf_delay.color=ui.GREEN)}onDisable(){y.intance.off(h.EVENT_Game_Delay,this,this.onGameDelay)}};th=p([iT("AhgzWGWoRFetvSMsEOSkSg")],th);var ih=class extends Laya.Box{};var{regClass:aT}=Laya,ah=class extends ih{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.playerDto=e,this.playerDto&&(this.addEvent(),this.setCurrentOutPut())}set headSkin(e){parseInt(e)>0?this.img_head.skin=C.instance.getPlayerIcon(e):this.setImage(e)}async setCurrentOutPut(){if(!this.playerDto)return;let e=this.playerDto.icon;parseInt(e)>0?this.img_head.skin=C.instance.getPlayerIcon(e):this.setImage(e)}setImage(e){this.clearImage();var i=this;Laya.loader.load(e,Laya.Handler.create(this,()=>{if(i.destroyed)return;let n=Laya.loader.getRes(e);this.img_head.texture=n}),null,Laya.Loader.IMAGE,-1,!0,"1111",!1,!0)}clearImage(){this.img_head&&(this.img_head.texture=null)}destroy(e=!0){this.clearImage(),super.destroy(e)}toDetail(){!this.playerDto||!this.playerDto.needTip||H.intance.openModule(f.RoleInfoDialog)}};ah=p([aT("OPT5t2CoSmuYp2zUJWwUWA")],ah);var nh=class extends Laya.Box{};var{regClass:nT}=Laya,rh=class extends nh{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.isAddEvent=!0)}onEnable(){}async onJoin(){if(this.roomDto.requirePass){var e=R.intance.m_dicNodes.get(this.roomDto.nodeId);if(e&&e.dT>800&&$.Debug<2){B.instance.notice(d.instance.getLanguage(1306));return}H.intance.openModule(f.InputPwdDialog,[this.roomDto])}else Xe.instance.onCreateAndJoinWithPwd(Me.ACTION_JOIN,this.roomDto,"")}set dataSource(e){super.dataSource=e,this.roomDto=e,this.roomDto&&(this.roomDto.state==0?(this.btn_join.visible=!0,this.img_underway.visible=!1):(this.btn_join.visible=!1,this.img_underway.visible=!0),this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.roomDto.leader.icon;this.playerIcon.headSkin=e,this.tf_name.text=this.roomDto.roomName,this.tf_customName.text=this.roomDto.customName,this.roomDto.customName?this.tf_name.y=19:this.tf_name.y=35,this.tf_union.text=d.instance.getMultiLan(this.roomDto.leader.shortUnionName),this.tf_people.text='<font color="#25ff63">'+this.roomDto.memberCount+"</font>/"+this.roomDto.maxCount,this.img_coin.visible=this.roomDto.coinType!=xe.TYPE_GOLD,this.img_coin.skin=C.instance.getMoneyIcon(this.roomDto.coinType);var i=R.intance.m_dicNodes.get(this.roomDto.nodeId);this.nodeDelaySign.dataSource=i,this.roomDto.state==0?(this.btn_join.visible=!0,this.img_underway.visible=!1,this.tf_seconds.text=we.format(Math.round(this.roomDto.joinCd/1e3),":",!1)):(this.btn_join.visible=!1,this.img_underway.visible=!0,this.tf_seconds.text=we.format(Math.round(this.roomDto.fightEndTime/1e3),":",!1))}refreshTime(){this.roomDto.state==0?(this.btn_join.visible=!0,this.img_underway.visible=!1,this.tf_seconds.text=we.format(Math.round(this.roomDto.joinCd/1e3),":",!1),this.roomDto.joinCd-=1e3):(this.btn_join.visible=!1,this.img_underway.visible=!0,this.tf_seconds.text=we.format(Math.round(this.roomDto.fightEndTime/1e3),":",!1),this.roomDto.fightEndTime-=1e3)}};rh=p([nT("YoCqj_dyTb2ZIAnhkSds6Q")],rh);var oh=class extends Laya.Box{};var{regClass:rT}=Laya,kt=class extends oh{init(t,e,i=28){var n,r;switch(t!=0?(r=Dt.getRandInRound(-30,30),e.bj?n=kt.TYPE_Critical:n=kt.TYPE_Normal):(r=Dt.getRandInRound(-30,30),n=kt.TYPE_Miss),this.pos(r,-180),this.alpha=1,this.scale(1,1),this.tf_damage.visible=!1,this.box_crit.visible=!1,this.img_miss.visible=!1,n){case kt.TYPE_Normal:this.tf_damage.text=t+"",this.showNormalDamageEffect();break;case kt.TYPE_Critical:this.fontClip_damage.value=t+"",this.showCriticalDamageEffect();break;case kt.TYPE_Miss:this.showMissEffect();break;default:break}}showNormalDamageEffect(){this.tf_damage.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,this.onComplete))}showCriticalDamageEffect(){this.box_crit.visible=!0,this.scale(.2,.2),Laya.Tween.to(this,{scaleX:1.3,scaleY:1.3,alpha:1,y:this.y-70},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1,alpha:0},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}))}showMissEffect(){this.img_miss.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}onComplete(){this.removeSelf(),Laya.Pool.recover("damageNumber",this)}};kt.WHITE="#FFFFFF",kt.ORANGE="#FFA500",kt.RED="#FF0000",kt.GREEN="#119c09",kt.TYPE_Normal="Normal",kt.TYPE_Miss="Miss",kt.TYPE_Critical="Critical",kt=p([rT("nHp6WKzZRIWvyhguidEfqg")],kt);var sh=class extends Laya.Box{};var{regClass:oT}=Laya,lh=class extends sh{set dataSource(t){if(super.dataSource=t,!!t){var e=t[0];this.tf_groupNum.text=d.instance.getLanguage(1364,e);for(var i=t[1],n=0;n<4;n++){var r=i[n],o=this["listItem_"+(n+1)],s=this["img_line_"+(n+1)];r?(o&&(o.visible=!0,o.dataSource=r),s&&(s.visible=!0)):(o&&(o.visible=!1),s&&(s.visible=!1))}}}};lh=p([oT("nt2hpNSsSwWkkun3CZxOCg")],lh);var ch=class extends Laya.Box{};var{regClass:sT}=Laya,uh=class extends ch{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.roomGroupDataDto=e,this.roomGroupDataDto&&(this.roomRankPlayerDto=z.instance.playerEndDic.get(this.roomGroupDataDto.pid),this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.tf_name.text=Ce.abbreviateString(this.roomRankPlayerDto.name);let e=this.roomRankPlayerDto.icon;this.playerIcon.headSkin=e,this.tf_rank.text=d.instance.getLanguage(1365,this.roomRankPlayerDto.rankNum);var i=this.roomGroupDataDto.reward;if(i&&i.length>0){var n=i[0];this.img_reward_icon.skin=C.instance.getItemIcon(n.id),this.tf_reward_num.text=n.count+"",this.box_reward.visible=!0}else this.box_reward.visible=!1;var r=this.roomGroupDataDto.pid==L.instance.playerDto.pid,o=r?"#ffce58":"#96d2fc";this.tf_name.color=this.tf_rank.color=this.tf_reward_num.color=o,this.isFirst=this.roomGroupDataDto.rank==1}set isFirst(e){this.img_no1.visible=e}toDetail(){}};uh=p([sT("aVUehRpFSl-pkUZJISXahg")],uh);var ph=class extends Laya.Box{};var{regClass:lT}=Laya,mh=class extends ph{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.roomRankPlayerDto=e,this.roomRankPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.roomRankPlayerDto.id==L.instance.playerDto.pid?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.roomRankPlayerDto.rankNum<4?this.bg.skin="res/matchRank1/img_ranking_bg_"+this.roomRankPlayerDto.rankNum+".png":this.bg.skin="res/matchRank1/img_ranking_bg_4.png",this.roomRankPlayerDto.rankNum<4?(this.img_rankIcon1.skin="res/matchRank1/img_ranking_"+this.roomRankPlayerDto.rankNum+".png",this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.roomRankPlayerDto.id==L.instance.playerDto.pid?this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_me.png":this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1);let e=this.roomRankPlayerDto.icon;this.playerIcon.headSkin=e,this.playerIcon.gray=this.roomRankPlayerDto.die,this.img_die.visible=this.roomRankPlayerDto.die,this.tf_name.text=this.roomRankPlayerDto.name,this.tf_rank.text=this.roomRankPlayerDto.rankNum+"",this.tf_kill.text=this.roomRankPlayerDto.kill+"",this.tf_score.text=this.roomRankPlayerDto.score+""}};mh=p([lT("vpTYNMB4TfGFK2gaXiPAeg")],mh);var dh=class extends Laya.Dialog{};var{regClass:cT}=Laya,hh=class extends dh{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER;this.allItems=[]}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.goMatchEnd)}setOpenData(e){var i=e[0];this.groupData=e[1],this.mcLanList.vScrollBarSkin="",z.instance.playerEndDic=new te,i.forEach(r=>{if(z.instance.playerEndDic.set(r.id,r),r.id==L.instance.playerDto.pid){this.myRank=r;return}}),this.mcLanList.array=i;let n=-1;this.mcLanList.selectedIndex=n,this.showListEffect(),U.instance.myPlayer.hp>0?this.successAni.visible=!0:this.successAni.visible=!1,Te.instance.sendCustumEvent(43)}showListEffect(){this.allItems=[];for(var e=this.mcLanList.array.length,i=0;i<e;i++){var n=this.mcLanList.getCell(i);n?(n.skewX=.5,n.alpha=0,this.allItems.push(n),Laya.timer.once(100+i*500,this,this.startShowItem,[i],!1)):console.log("showListEffect _item is null")}}startShowItem(e){var i=this.allItems[e];if(i==null){console.log("no list item now");return}i.scaleX=0,i.alpha=0,this.mcLanList.tweenTo(e,500),Laya.Tween.to(i,{scaleX:1,alpha:1},100,Laya.Ease.circOut,null,0,!1)}goMatchEnd(){H.intance.openModule(f.MatchEndView,[this.myRank,this.groupData]),this.close()}onDisable(){this.removeEvent(),this.myRank=this.groupData=null}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};hh=p([cT("NlnToPI4TTuxIDhRKLPChg")],hh);var fh=class extends Laya.Dialog{};var{regClass:uT}=Laya,yh=class extends fh{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER}onEnable(){this.btn_next.on(Laya.Event.CLICK,this,this.onNext),this.btn_goBattle.on(Laya.Event.CLICK,this,this.setToAirdropScene),this.btn_buy.on(Laya.Event.CLICK,this,this.onBuy),this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.btn_help.on(Laya.Event.CLICK,this,this.onHelp),Te.instance.sendCustumEvent(43)}onHelp(){be.commTipWithYes(d.instance.getLanguage("HELP"))}onNext(){this.groupInfos.length>0?(this.box_cumulative.visible=!0,this.box_outside.visible=!1):this.setToAirdropScene()}setToAirdropScene(){U.instance.arenaType=z.instance.matchDto.arenaType,fe.intance.setCurrentScene(X.M_SCENE_AIRDROP)}onBuy(){fe.intance.setCurrentScene(X.M_SCENE_SHOP,[3])}async onReceive(){if(this.welfareBagId>0){let e=await A.requestPost("wxgame/welfare/buy",{id:this.welfareBagId});e&&e.reward&&(H.intance.openModule(f.RewardGetDialog,e.reward),this.btn_receive.disabled=!0)}else B.instance.notice(d.instance.getLanguage(2e3))}setOpenData(e){var i=z.instance.matchDto;this.myRankPlayerDto=e[0];var n=e[1];if(this.groupInfos=[],n){var r=1;n.forEach(E=>{this.groupInfos.push([r,E]),r++})}this.myRankPlayerDto.rankNum<4?this.img_rankIcon.skin="res/matchEnd1/img_battleend_ranking_"+this.myRankPlayerDto.rankNum+".png":this.img_rankIcon.skin="res/matchEnd1/img_battleend_ranking_4.png",this.list_reward.vScrollBarSkin="",this.tf_rank.text=this.myRankPlayerDto.rankNum+"";var o=[],s=new te,l=z.instance.reward;l.forEach(E=>{var P=s.get(E.id);P?P.newAddCnt=P.newAddCnt+E.count:(P=new Ve(E.id),P.newAddCnt=E.count,o.push(P),s.set(E.id,P))});var c=this.list_reward.spaceX,u=this.list_reward.itemTemplate.width,m=o.length,g=m*u+c*(m-1);this.list_reward.repeatX=m,this.list_reward.width=g;var x=!1,w=!1;i.arenaType==1&&(i.coinType==xe.TYPE_TOX&&(this.welfareBagId=R.intance.getWelfareBagId(this.myRankPlayerDto.rankNum),this.welfareBagId>0&&this.myRankPlayerDto.lease==0&&(x=!0)),w=this.myRankPlayerDto.lease==0),x?(this.btn_receive.visible=!0,this.btn_receive.disabled=!0,this.btn_next.visible=!0,this.btn_buy.visible=!1,this.reward_cp.visible=!0,this.list_reward.x=this.btn_next.x+this.btn_next.width/2-g/2):(this.btn_receive.visible=!1,this.reward_cp.visible=!1,this.btn_next.visible=!0,w?this.btn_buy.visible=!0:(this.btn_buy.visible=!1,this.btn_next.x=this.box_outside.width-this.btn_next.width>>1),this.list_reward.x=this.box_outside.width-this.list_reward.width>>1),this.list_reward.array=o,this.list_reward.visible=!0,!this.list_reward.array||this.list_reward.array.length<=0?this.noDataBox1.visible=!0:this.noDataBox1.visible=!1;let v=-1;this.list_reward.selectedIndex=v,this.onShowCumulative()}onShowCumulative(){this.groupInfos.length>0?this.btn_next.label=d.instance.getUILang("Next"):this.btn_next.label=d.instance.getUILang("Go Battle"),this.list_group.array=this.groupInfos}onDisable(){this.removeEvent(),z.instance.clearData()}removeEvent(){}};yh=p([uT("y-nP_lRrQVef9uttVJ0rDw")],yh);var bh=class extends Laya.Box{};var{regClass:pT}=Laya,gh=class extends bh{set dataSource(t){if(super.dataSource=t,!!t){var e=t[0];this.tf_groupNum.text=d.instance.getLanguage(1364,e);var i=t[1];this.list_group_players.array=i}}};gh=p([pT("hRg5i0IfRMaPkSUsg-i-Lg")],gh);var vh=class extends Laya.Box{};var{regClass:mT}=Laya,Lh=class extends vh{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.roomPlayer=e,!this.roomPlayer){this.img_back.skin="res/matchReady/img_jjc_0.png",this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){if(this.img_back.skin="res/matchReady/img_jjc_1.png",this.tf_name.text=Ce.abbreviateString(this.roomPlayer.name),this.box_show.visible=!0,this.destroyed)return;let e=this.roomPlayer.icon;this.playerIcon.headSkin=e,this.img_sign.visible=this.roomPlayer.leader>0,this.tf_union.text=d.instance.getMultiLan(this.roomPlayer.shortUnionName)}toDetail(){this.heroVo.id}};Lh=p([mT("PiGdVEY9T-K8CCfWLChS0w")],Lh);var mt=class mt{constructor(){}static pointEquil(t,e){return t&&e&&t.x==e.x&&t.y==e.y}static isEmpty(t){for(let e in t)return!1;return!0}static showTxtEffect(t,e){let i=parseInt(t.text),n=Math.floor((e-i)/5),r=0;Laya.timer.loop(60,null,o);let o=function(){r++,i+=n,r>=5&&(i=e,Laya.timer.clear(null,o)),t.text=i+""}}static showTxtFlash(t){let e=t.color;t.color=mt.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,i),50);let i=function(){t.color=mt.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,n),50)},n=function(){t.color=mt.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,r),50)},r=function(){t.color=mt.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,o),50)},o=function(){t.color=mt.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,s),50)},s=function(){t.color=mt.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,l),50)},l=function(){t.color=e}}static getProKey(t){return mt.PRO_DIC[t]?mt.PRO_DIC[t]:t}static getIconName(t){return mt.proList[t]}static clonePoint(t){return new Laya.Point(t.x,t.y)}static copyObj(t){let e={};for(let i in t)e[i]=t[i];return e}static mergeObj(t,e){for(let i in e)t[i]?t[i]=parseFloat(t[i])+parseFloat(e[i]):t[i]=e[i];return t}static checkHit(t){return t.visible&&t.mouseX>0&&t.mouseY>0&&t.mouseX<=t.width&&t.mouseY<=t.height}static separateObj(t,e){if(e)for(let i in e)t[i]&&(t[i]=parseFloat(t[i])-parseFloat(e[i]));return t}static toFixed(t,e=1){if((t+"").indexOf(".")!=-1){let i=parseFloat(t).toFixed(e);return e==1&&i.charAt(i.length-1)=="0"&&(i=parseInt(i)+""),i}return t+""}static formatResWith(t){return t>=1e12?Math.floor(t/1e12)+mt.RES_W[3]:t>=1e9?Math.floor(t/1e9)+mt.RES_W[2]:t>=1e6?Math.floor(t/1e6)+mt.RES_W[1]:t>=1e4?Math.floor(t/1e3)+mt.RES_W[0]:t+""}static formatNumWithSign(t,e=","){t=Math.floor(t);let i=t+"",n=1,r=[];for(let o=i.length-1;o>=0;o--)r.push(i.charAt(o)),n>0&&n%3==0&&r.push(e),n++;return r.reverse(),r[0]==e&&r.shift(),r.join("")}static autoRecyle(t,e=!1){t.on(Laya.Event.COMPLETE,null,i,[t]),t.isPlaying||t.play(1,!1);let i=function(n){n.off(Laya.Event.COMPLETE,null,i),n.stop(),n.removeSelf(),e&&Laya.Pool.recover("Animation",n)}}static createEllipse(t,e,i,n,r,o=1,s="#ffffff"){let l=[],c=n>r?o/n:o/r;for(let u=0;u<2*Math.PI;u+=c)l.push(e+n*Math.cos(u)-n/2,i+r*Math.sin(u));return t&&t.drawPoly(l.shift(),l.shift(),l,s),l}};mt.blackFilter=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.78,0]),mt.blackFilter2=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.5,0]),mt.qualityColors=["#78cefd","#78cefd","#78cefd","#d5a8ff","#fdd378","#ffa8a8","#ffa8a8","#ffa8a8"],mt.COLORS=["#69ff4c","#FFFFFF"],mt.PRO_DIC={HP:"hp",ATK:"attack",DEF:"defense",SPEED:"speed",RES:"resilience",CDMG:"critDamage",CDMGR:"critDamReduct"},mt.proList={hp:"HP",attack:"ATK",defense:"DEF",speed:"SPEED",hit:"hit",dodge:"dodge",crit:"crit",critDamage:"CDMG",resilience:"RES",critDamReduct:"CDMGR"},mt.RES_W=["K","M","B","T"];var ga=mt;var _h=class extends Laya.Sprite{};var{regClass:dT}=Laya,xh=class extends _h{constructor(){super();this.isAddEvent=!1;this.isMe=!1;this.inGround=!1;this.moveSpeed=6;this._speed=6;this.biasSpeed=0;this.lastDirectStr="left";this.directStr="left";this._roleDirection=-1;this.inControl=!1;this.isStop=!1;this.isLockAni=!1;this.aniChange=!1;this.displacementType=0;this.timeStamp=0;this.currArea=0;this.flashCount=0;this.lastX=-1;this.lastY=-1;this.lastRoleDirection1=-1;this.lastSpeed1=-1;this.lastArea=-1}get speed(){return this._speed}set speed(e){this._speed=e,this.biasSpeed=Math.round(this.speed*Math.sin(45*Math.PI/180)),console.log("Role speed2: ",this.speed,this.biasSpeed,this.roomPlayerDto.id)}get roleDirection(){return this._roleDirection}set roleDirection(e){this._roleDirection=e,e!=-4&&(e>270||e<90?this.directStr="right":e>90&&e<270&&(this.directStr="left"),this.lastDirectStr!=this.directStr&&(this.heroBox.scaleX=this.directStr=="left"?1:-1,this.lastDirectStr=this.directStr))}set myRoleDirection(e){if(this.roleDirection!=e){this.roleDirection=e;let i=28+Math.sin(e*(Math.PI/180))*(28/4),n=24+Math.sin(e*(Math.PI/180))*(14/2),r=this.img_d.width/2+Math.cos(e*(Math.PI/180))*(this.img_d.width/2),o=this.img_d.height/2+ +Math.sin(e*(Math.PI/180))*(this.img_d.height/2);this.img_arrow.pos(r,o),this.img_gj.rotation=e+90,this.img_arrow.rotation=e,this.img_arrow.width=i,this.img_arrow.height=n}}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(this.roomPlayerDto=e,!!this.roomPlayerDto){if(this.pos(this.roomPlayerDto.x,this.roomPlayerDto.y),this.addEvent(),this.speed=this.roomPlayerDto.speed,this.currArea=this.roomPlayerDto.area,console.log("MatchHeroSpr speed: "+this.speed),this.heroVo=new Mt,this.heroVo.id=this.roomPlayerDto.heroId,this.heroVo.color=this.roomPlayerDto.heroColor,this.moveSpeed=this.heroVo.heroItem.mov/30,this.setCurrentOutPut(),this.updataBlood(),this.roomPlayerDto.hp<=0){this._isDead=!0,this.setDead();return}this.addDiquanAndBaoqi()}}setDead(){console.log("MatchHeroSpr setDead: "+this.isMe),this._isRealDead=!0,this.alpha=.5,this.img_deadImg.visible=!0;var e=this.img_deadImg.y;this.tf_name.visible=!1,this.box_blood.visible=!1,this.spineNodeBack.visible=!1,this.spineNodeFront.visible=!1,this.heroSk.visible=!1,this.img_deadImg.y=0,this.img_deadImg.scale(0,0),this.getComponent(Laya.RigidBody).mask=1;var i=this;Laya.Tween.to(this.img_deadImg,{y:e,scaleX:1,scaleY:1},400,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){i.isMe&&y.intance.event(h.EVENT_GameScene_Gray)}))}updataBlood(){this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}addDiquanAndBaoqi(){if(console.log("addDiquanAndBaoqi"),!this.destroyed){var e=this.heroVo.heroItem.level,i=this.heroVo.heroItem.level;if(!this.baoqiSpineSk){if(i<4)return;this.baoqiSpineSk=new Laya.SpineSkeleton,this.spineNodeBack.addChild(this.baoqiSpineSk),this.baoqiSpineSk.animationName="animation";var n=U.instance["baoqiEffect"+i];this.baoqiSpineSk.templet=n}}}setCurrentOutPut(){this.roomPlayerDto.hp>0&&(this.heroSk.dataSource=this.heroVo),this.tf_name.color=ga.qualityColors[this.heroVo.heroItem.quality-1],this.tf_name.text=Ce.abbreviateString(this.roomPlayerDto.name),this.img_country.skin=C.instance.getCountryIcon(this.roomPlayerDto.country+""),L.instance.playerDto.pid==this.roomPlayerDto.id?this.myRoleDirection=this.roomPlayerDto.dire:this.roleDirection=this.roomPlayerDto.dire}pos(e,i,n){if(super.pos(e,i,n),this.roomPlayerDto&&this.roomPlayerDto.id&&U.instance.matchHeroSmallDic){var r=U.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);if(r){var o=z.instance.currArenaItem.mapid;o==1002&&(e-=160,i-=160);var s=e*216/3040,l=i*216/3040;r.pos(s,l,n)}}return this}set visible(e){if(super.visible=e,this.roomPlayerDto&&this.roomPlayerDto.id&&U.instance.matchHeroSmallDic){var i=U.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);i&&(i.visible=e)}}set alpha(e){if(super.alpha=e,this.roomPlayerDto&&this.roomPlayerDto.id&&U.instance.matchHeroSmallDic){var i=U.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);i&&(i.alpha=e)}}onAwake(){}backAni(){}idle(){console.log(`${this.roomPlayerDto.id} 播放 待机 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(We.ANI_daiji,!0,!1)}walk(){console.log(`${this.roomPlayerDto.id} 播放 走动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(We.ANI_xingzou,!0,!1)}run(){console.log(`${this.roomPlayerDto.id} 播放 跑动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(We.ANI_shanbi,!0,!1)}playAttackAnimation(e,i,n,r){if(!this._isDead){var o=R.intance.m_dicSkills.get(e);if(console.log(`${this.roomPlayerDto.id} 攻击 , 播放 ${e} 动画`),o.type==1){if(i&&U.instance.onSendAnimation(e,We.TYPE_GONGJI),this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(We.ANI_gongji+s,!1)}if(i){var l=U.instance.getAttackTarget(o);if(l&&l.length>0){var c=l[0];c.roomPlayerDto.hp>0&&Laya.timer.frameOnce(1,this,this.onRealAttack,[o,c.roomPlayerDto.id])}}Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,r(),this.aniChange=!0}),U.instance.playSound(1)}else if(o.type==2){if(i&&U.instance.onSendAnimation(e,We.TYPE_TI),this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(We.ANI_ti+s,!1)}i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(30,this,()=>{this.isStop=!1,r(),this.aniChange=!0}),U.instance.playSound(2)}else if(o.type==6)i&&U.instance.onSendAnimation(e,We.TYPE_DAZHAO),this.isStop=!0,this.heroSk.isReady&&(console.log("EnumHero.ANI_dazhao: "+We.ANI_dazhao),this.heroSk.sk.play(We.ANI_dazhao,!1)),i&&Laya.timer.frameOnce(30,this,this.onRealAttack,[o]),Laya.timer.frameOnce(70,this,()=>{this.isStop=!1,r(),this.aniChange=!0}),U.instance.playSound(2);else if(o.type==5){var u=[];if(this.displacementType=o.displacementType,i){var m=o.displacement>0?o.displacement:50;u=Dt.rollCharacterByDir(this.x,this.y,this.roleDirection,m),U.instance.onSendAnimation(e,We.TYPE_FEI,-1,u[0],u[1])}else u[0]=n.get("newX"),u[1]=n.get("newY");if(this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(We.ANI_ti+s,!1)}if(this.heroVo.heroItem.race!=4){var g=U.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=g,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(5,this,this.onRoll,[u]),Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,this.displacementType=0,r(),this.aniChange=!0}),U.instance.playSound(3)}else if(o.type==3){var u=[];if(i){var m=o.displacement>0?o.displacement:350;u=Dt.rollCharacterByDir(this.x,this.y,this.roleDirection,m),U.instance.onSendAnimation(e,We.TYPE_HUA,-1,u[0],u[1])}else u[0]=n.get("newX"),u[1]=n.get("newY");if(this.getComponent(Laya.BoxCollider).isSensor=!0,this.isStop=!0,this.heroSk.isReady&&this.heroSk.sk.play(We.ANI_hua,!1),this.heroVo.heroItem.race!=4){var g=U.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=g,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}Laya.timer.frameOnce(5,this,this.onRoll,[u]),Laya.timer.frameOnce(20,this,()=>{this.getComponent(Laya.BoxCollider).isSensor=!1,this.isStop=!1,r(),this.aniChange=!0}),U.instance.playSound(3)}else if(o.type==4){i&&(this.isLockAni=!0,U.instance.onSendAnimation(e,We.TYPE_DANG)),this.heroSk.isReady&&this.heroSk.sk.play(We.ANI_dang,!1),this.dunpaiSk||(this.dunpaiSk=U.instance.dunpaiTemplet.buildArmature(0),this.dunpaiSk.x=-45,this.skNode.addChild(this.dunpaiSk)),this.dunpaiSk.play(0,!0);var x=2e3,w=o.buff;if(w.length>2){var v=w[2],E=R.intance.m_dicBuffs.get(v);x=parseInt(E.time+"")}Laya.timer.once(x,this,()=>{this.isLockAni=!1,this.dunpaiSk&&(this.dunpaiSk.stop(),this.dunpaiSk.visible=!1),r(),this.aniChange=!0}),U.instance.playSound(2)}}}onRoll(e){this.inGround||Laya.Tween.to(this,{x:e[0],y:e[1]},330)}onHuaComplate(){this.huaSpineSk.stop(),this.huaSpineSk.visible=!1}onRealAttack(e,i=-1){if(console.log("onRealAttack",i),i>0)U.instance.onSendAttack(i,1,e.id);else if(e.type==6){var n=U.instance.getAttackTarget(e);n&&n.length>0&&n.forEach(o=>{o&&o.roomPlayerDto.hp>0&&U.instance.onSendAttack(o.roomPlayerDto.id,1,e.id)})}else{var n=U.instance.getAttackTarget(e);if(n&&n.length>0){var r=n[0];r.roomPlayerDto.hp>0&&U.instance.onSendAttack(r.roomPlayerDto.id,1,e.id)}}}playBeijiAnimation(e){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 被击 动画`),this.heroSk.isReady&&this.heroSk.sk.play(We.ANI_beiji,!1),Laya.timer.once(1e3,this,()=>{e()}))}playChuShengAnimation(e){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 出生 动画`),this.heroSk.isReady&&this.heroSk.sk.play(We.ANI_ruchang,!1),Laya.timer.once(1e3,this,()=>{e()}))}attack(e=0,i=!0,n=null){if(console.log(`${this.roomPlayerDto.id} 攻击 s`),this._isAttacking||this._isDead){console.log(`${this.roomPlayerDto.id} 没有靠近目标或正在攻击中或技能冷却中或已死亡，无法攻击`);return}this._isAttacking=!0,this.playAttackAnimation(e,i,n,()=>{this._isAttacking=!1})}takeDamage(e,i){var n=e.skill,r=e.attackValue,o=e.defHp;console.log(`${this.roomPlayerDto.id} 受到 ${r} 伤害s`),!this._isDead&&(this.roomPlayerDto.hp=o,console.log(`${this.roomPlayerDto.id} 受到 ${r} 伤害`),this.updateHealthBar(i),this.showDamageLabel(n,r,e),this._isAttacking&&(console.log(`${this.roomPlayerDto.id} 正在攻击中，受到攻击中断攻击 暂时没有中断攻击`),Laya.timer.clear(this,this.onRealAttack),this._isAttacking=!1),this._isTakingDamage=!0,this.isLockAni=!0,this.beijiSk||(this.beijiSk=U.instance.beijiTemplet.buildArmature(0),this.skNode.addChild(this.beijiSk)),this.beijiSk.play(0,!1),this.playBeijiAnimation(()=>{this.beijiSk&&(this.beijiSk.stop(),this.beijiSk.visible=!1),this._isTakingDamage=!1,this.isLockAni=!1,this.backAni()}))}die(e){if(console.log(`${this.roomPlayerDto.id} 死亡s`),!this._isDead){console.log(`${this.roomPlayerDto.id} 死亡`);var i=Dt.judgePosition(e.x-this.x,e.y-this.y);this.roleDirection=i,this._isDead=!0,this.heroSk.isReady&&this.heroSk.sk.play(We.ANI_siwang,!1),Laya.timer.once(2e3,this,this.setDead)}}applySkillEffect(e){console.log(`${this.roomPlayerDto.id} 受到技能效果: ${e}`)}updateHealthBar(e){this.roomPlayerDto.hp<=0&&(this.roomPlayerDto.hp=0,this.die(e)),this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}showDamageLabel(e,i,n){if(i.length>1)for(var r=R.intance.m_dicSkills.get(e),o=r.section,s=o,l=0;l<i.length;l++){var c=i[l];this.showDamageLabelDetailDelay(c,s[l][1],n)}else i.length==1?this.showDamageLabelDetailDelay(i[0],100,n):this.showDamageLabelDetailDelay(0,100,n);var u=this;if(n.allAtkValue!=0){var m=200;this.originalBlendMode=this.img_hp_bg.blendMode,this.flashCount=0,Laya.timer.loop(m,this,this.flashBlood)}}flashBlood(){var e=2;this.flashCount<e?this.img_hp_bg.blendMode===this.originalBlendMode?this.img_hp_bg.blendMode="lighter":(this.img_hp_bg.blendMode=this.originalBlendMode,this.flashCount++):(this.img_hp_bg.blendMode=this.originalBlendMode,Laya.timer.clear(this,this.flashBlood))}showDamageLabelDetailDelay(e,i,n){Laya.timer.once(i,this,this.showDamageLabelDetail,[e,n],!1)}showDamageLabelDetail(e,i){var n=Laya.Pool.getItemByCreateFun("damageNumber",U.instance.damageNumPrefab.create,U.instance.damageNumPrefab);n.init(e,i),this.addChild(n)}onSendMoveData(){if(!this._isDead){var e=this.speed,i=this.roleDirection,n=this.x,r=this.y;if(Math.abs(n-this.lastX)>2||Math.abs(r-this.lastY)>2||this.lastRoleDirection1!=i||this.lastSpeed1!=e||this.lastArea!=this.currArea){this.pos(n,r),this.lastX=n,this.lastY=r,this.lastRoleDirection1=i,this.lastSpeed1=e,this.lastArea=this.currArea;var o=L.instance.m_serverTime;this.timeStamp=o,U.instance.onSendMove(o,this.roomPlayerDto.id,e,i,n,r,this.currArea)}}}beiTui(e){var i=this.roomPlayerDto.id,n=this.x,r=this.y;if(Math.abs(n-this.lastX)>2||Math.abs(r-this.lastY)>2){this.lastX=n,this.lastY=r;var o=L.instance.m_serverTime;this.timeStamp=o,U.instance.onSendTargetMove(o,e,i,n,r)}}onPushMoveData(e,i,n,r,o,s){if(this.roleDirection=n,this.speed!=i&&(this.speed=i,i==0?this.idle():this.walk()),this.currArea!=s&&(this.currArea=s),e<=this.timeStamp){console.log("位置数据忽略："+e+" < "+this.timeStamp);return}(Math.abs(r-this.lastX)>1||Math.abs(o-this.lastY)>1)&&(this.pos(r,o),this.lastX=r,this.lastY=o)}onPushTargetMoveData(e,i,n){if(e<=this.timeStamp){console.log("推人数据忽略："+e+" < "+this.timeStamp);return}(Math.abs(i-this.lastX)>2||Math.abs(n-this.lastY)>2)&&(this.pos(i,n),this.lastX=i,this.lastY=n)}sendToServer(e){}initBirth(e){e?this.createBirthSpine():this.onPlayBirthEnd()}createBirthSpine(){this.heroSk.visible=!1,this.tf_name.visible=!1,this.box_blood.visible=!1,this.chushengBackSpineSk||(this.chushengBackSpineSk=new Laya.SpineSkeleton,this.spineNodeBack.addChild(this.chushengBackSpineSk)),this.chushengFrontSpineSk||(this.chushengFrontSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.chushengFrontSpineSk)),this.chushengBackSpineSk.on(Laya.Event.READY,this,this.onBirthReady);var e=U.instance.ruchangEffects[this.getRandomAnimationType()];this.destroyed||(this.chushengBackSpineSk.animationName="animation2",this.chushengBackSpineSk.templet=e,this.chushengFrontSpineSk.animationName="animation1",this.chushengFrontSpineSk.templet=e)}getRandomAnimationType(){return Math.floor(Math.random()*3)}onBirthReady(){Laya.timer.once(500,this,this.onPlayBirth1)}onPlayBirth1(){this.isLockAni=!0,this.heroSk.visible=!0,this.playChuShengAnimation(()=>{this.isLockAni=!1,this.aniChange=!0});try{this.chushengBackSpineSk.visible=!0,this.chushengBackSpineSk.play("animation2",!1),this.chushengFrontSpineSk.visible=!0,this.chushengFrontSpineSk.play("animation1",!1)}catch{}Laya.timer.once(1300,this,this.onPlayBirthEnd)}onPlayBirthEnd(){this.chushengBackSpineSk&&(this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),this.chushengBackSpineSk.destroy(),this.chushengBackSpineSk.removeSelf()),this.chushengFrontSpineSk&&(this.chushengFrontSpineSk.destroy(),this.chushengFrontSpineSk.removeSelf()),this.box_d.visible=!0,this.tf_name.visible=!0,this.box_blood.visible=!0}onDisable(){this.chushengBackSpineSk&&this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};xh=p([dT("JIaWsVNzTK2dJIUcev60tQ")],xh);var Ih=class extends Laya.Box{};var{regClass:hT}=Laya,Eh=class extends Ih{init(){var t=z.instance.currArenaItem.coinType;this.img_bing.skin="gameIcon/map/1001/img_bing_"+t+".png"}set dataSource(t){super.dataSource=t}};Eh=p([hT("W3qDvbUmSa2SFKJ5iEmjsg")],Eh);var Th=class extends Laya.Box{};var{regClass:fT}=Laya,Sh=class extends Th{init(){var t=z.instance.currArenaItem.coinType;this.img_bing.skin=C.instance.getItemIcon(t),U.instance.allOrders||(U.instance.allOrders=[]),U.instance.allOrders.push(this.img_mtl)}set dataSource(t){super.dataSource=t}};Sh=p([fT("UmH7VSkYTd6D8QA2Eu2OYw")],Sh);var Ch=class extends Laya.Box{};var{regClass:yT}=Laya,kh=class extends Ch{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e;var i=e;this.roomPlayer=z.instance.playerJoinDic.get(i),this.roomPlayer&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.tf_name.text=Ce.abbreviateString(this.roomPlayer.name);let e=this.roomPlayer.icon;this.playerIcon.headSkin=e;var i=this.roomPlayer.id==L.instance.playerDto.pid,n=i?"#ffce58":"#96d2fc";this.tf_name.color=n}toDetail(){}};kh=p([yT("YQ6pCsb4S0ibRtZ73-V9-Q")],kh);var Ah=class extends Laya.Box{};var{regClass:bT}=Laya,Dh=class extends Ah{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e;var i=e;i&&(this.roomRankPlayerDto=z.instance.playerJoinDic.get(i),this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.tf_name.text=Ce.abbreviateString(this.roomRankPlayerDto.name);let e=this.roomRankPlayerDto.icon;this.playerIcon.headSkin=e;var i=this.roomRankPlayerDto.id==L.instance.playerDto.pid,n=i?"#ffce58":"#96d2fc";this.tf_name.color=n}toDetail(){}};Dh=p([bT("U8opa1YySD-Mm6RRAvEq9g")],Dh);var Mh=class extends Laya.Box{};var{regClass:gT}=Laya,Bh=class extends Mh{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){this.roomPlayerDto=e,this.roomPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}setCurrentOutPut(){this.tf_rank.text=this.roomPlayerDto.rankNum+"";let e=this.roomPlayerDto.icon;this.playerIcon.headSkin=e,this.tf_name.text=Ce.abbreviateString(this.roomPlayerDto.name),this.tf_kill.text=this.roomPlayerDto.kill+"",this.roomPlayerDto.id==U.instance.myPlayer.id?(this.img_bg.skin="res/match1/img_ph2.png",this.tf_rank.color="#000000",this.tf_name.color="#ffe64b",this.img_kill.filters=[be.YELLOW],this.tf_kill.color="#ffe64b",this.box_item.x=6):(this.img_bg.skin="res/match1/img_ph.png",this.tf_rank.color="#ffffff",this.tf_name.color="#ffffff",this.img_kill.filters=null,this.tf_kill.color="#ffffff",this.box_item.x=15)}};Bh=p([gT("XTVFXeI_R768e0Elv_ePAA")],Bh);var Ph=class extends Laya.Scene{};var{regClass:vT}=Laya,Rh=class extends Ph{constructor(){super(...arguments);this.type=1}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP}onOpened(e){this.type=e}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}onEnable(){console.log("MatchReadyRT onEnable"),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_random.on(Laya.Event.CLICK,this,()=>{this.generateName()}),this.btn_enter.on(Laya.Event.CLICK,this,()=>{var e=this.input_username.text;if(console.log("phyBtn"),e==""){alert("用户名不能为空");return}yt.instance.openId=e,yt.instance.initSocket()})}generateRandomName(e){let i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n="";for(let r=0;r<e;r++){let o=Math.floor(Math.random()*i.length);n+=i.charAt(o)}return n}generateName(){this.input_username.text=this.generateRandomName(8)}onDestroy(){}};Rh=p([vT("mOlMVGD3TRCKNoddhyUGLw")],Rh);var Nh=class extends Laya.Dialog{};var{regClass:LT}=Laya,Oh=class extends Nh{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER}onEnable(){}onOpened(e){this.updateBattleCD()}updateBattleCD(){var e=z.instance.matchDto.startTime-z.instance.matchDto.nowTime;z.instance.startCoolDownTime=Math.round(e/1e3),z.instance.startCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):(Laya.timer.clear(this,this.onSetCoolTime),this.close())}onSetCoolTime(){z.instance.startCoolDownTime>=0?(this.fontClip_reduceTime.value=z.instance.startCoolDownTime+"",this.scaleEffect(),z.instance.startCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),this.onMatchStartEnd())}scaleEffect(){var e=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(e.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}onMatchStartEnd(){Laya.timer.once(5e3,this,this.close)}onDisable(){this.removeEvent(),z.instance.stopAll=!1}removeEvent(){Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};Oh=p([LT("xpPoFvX_SqiYMO5AaOwGyA")],Oh);var Hh=class extends Laya.Box{};var{regClass:_T}=Laya,Uh=class extends Hh{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.itemVo&&(this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=this.itemVo)}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===pt.TYPE_Equipment?H.intance.openModule(f.EquipDetailDialog,this.itemVo):H.intance.openModule(f.KnapsackTipDialog,this.itemVo))}};Uh=p([_T("WXpxCvqlQ2mKdcJCYlqOeg")],Uh);var Vh=class extends Laya.Scene{};var{regClass:xT}=Laya,Fh=class extends Vh{constructor(){super(...arguments);this.liveNum=0}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP,U.instance.init()}onOpened(e){var i=z.instance.matchDto.startTime-z.instance.matchDto.nowTime;i>0&&H.intance.openModule(f.MatchReadyView);var n=z.instance.matchDto.arenaId,r=R.intance.m_dicArenaDic.get(n);z.instance.currArenaItem=r;var o=z.instance.currArenaItem.mapid,s=Laya.loader.getRes("gameIcon/map/map_"+o+".lh");this.img_smallMap.skin="res/match1/img_map_"+o+".png";var l=Laya.Pool.getItemByCreateFun("MatchMap1001",s.create,s);l.init(),U.instance.gameMap=l,U.instance.box_players=l.box_players,this.matchBox.removeChildren(),this.matchBox.addChild(l);var c=L.instance.playerDto;this.tf_roleName.text=c.name;let u=c.icon;this.playerIcon.headSkin=u,U.instance.initMatch(this,this.onInitEnd),Te.instance.sendCustumEvent(42);var m=z.instance.roomDto.roomId;this.arenaNo.text=m+"";var g=z.instance.roomDto.nodeId;if(g){var x=R.intance.m_dicNodes.get(g);this.nodeDelaySign.dataSource=x,this.nodeDelaySign.startTest()}}onInitEnd(e){e.updateSkill(),e.updateKill(),e.updateBattleCD(),Laya.timer.frameLoop(10,e,e.updateCharactersOrder)}onRestoreData(){U.instance.updateMatch(this,this.onInitEnd)}updateSkill(){var e=U.instance.myPlayer,i=R.intance.m_dicHeros.get(e.heroId);console.log("updateSkill"),console.log(i.skillIds);for(var n=i.skillIds.length,r=0;r<n;r++){var o=i.skillIds[r],s=R.intance.m_dicSkills.get(o),l=this["matchSkill"+(r+1)];l.keyNum=r+1,l.dataSource=s;var c=e.skillCd.get(o);c&&l.updateSkillCooldown(c),l.updateGlobalCooldown(e.commonCd),l.visible=!0}}updateKill(){U.instance.myPlayer&&(this.tf_kill.text=U.instance.myPlayer.kill+""),this.list_rank.array=this.getSortPlayer(U.instance.matchHeroDic.values),this.tf_remainer.text=this.liveNum+"",this.tf_total.text="/ "+U.instance.matchHeroDic.values.length}getSortPlayer(e){var i=e.slice(),n=i.sort((s,l)=>l.score-s.score),r=[];this.liveNum=0;var o=1;return n.forEach(s=>{s.rankNum=o,s.hp>0&&this.liveNum++,(o<4||s.id==L.instance.playerDto.pid)&&r.push(s),o++}),r}updateBattleCD(){z.instance.matchCoolDownTime=Math.round(z.instance.matchDto.remainderCd/1e3),z.instance.matchCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):Laya.timer.clear(this,this.onSetCoolTime)}onSetCoolTime(){z.instance.matchCoolDownTime>=0?(this.fontClip_reduceTime.value=we.format(z.instance.matchCoolDownTime,":",!1),z.instance.matchCoolDownTime>90?this.fontClip_reduceTime.skin="res/match1/fontClip_1.png":z.instance.matchCoolDownTime>10?this.fontClip_reduceTime.skin="res/match1/fontClip_2.png":(this.fontClip_reduceTime.skin="res/match1/fontClip_3.png",this.scaleEffect()),z.instance.stopAll||z.instance.matchCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.once(1e4,this,this.checkMatchRankData))}checkMatchRankData(){z.instance.checkMatchRankData()}scaleEffect(){var e=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(e.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}updateCharactersOrder(){U.instance.allOrders.sort((e,i)=>e.y-i.y);for(let e=0;e<U.instance.allOrders.length;e++)U.instance.allOrders[e].zOrder=e}onFirstBloodPush(e){var i=e.pid,n=U.instance.matchHeroDic.get(i);let r=n.icon;this.playerIcon_first.headSkin=r,this.img_firstBlood.visible=!0,this.img_firstBlood.alpha=0,this.img_firstBlood.y=-200,Laya.Tween.to(this.img_firstBlood,{y:92,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood1))}onFirstBlood1(){this.zi_firstBlood.scale(1,1),Laya.Tween.to(this.zi_firstBlood,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood2))}onFirstBlood2(){Laya.Tween.to(this.zi_firstBlood,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood3))}onFirstBlood3(){Laya.Tween.to(this.img_firstBlood,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood4),1500)}onFirstBlood4(){this.img_firstBlood.visible=!1}onMutiKillPush(e){this.fontClip_kill.value=e.kill+"";var i=!1;e.kill>=3?(i=!0,this.img_mutiKill.skin="res/match1/img_kill_3s.png"):this.img_mutiKill.skin="res/match1/img_kill_2s.png";var n=e.pid,r=U.instance.matchHeroDic.get(n);let o=r.icon;this.playerIcon_second.headSkin=o,this.img_mutiKill.visible=!0,this.img_mutiKill.alpha=0,this.img_mutiKill.y=-200,Laya.Tween.to(this.img_mutiKill,{y:175,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill1,[i]))}onMutiKill1(e){this.zi_mutiKill.scale(1,1),e?Laya.Tween.to(this.zi_mutiKill,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill2)):this.onMutiKill3(2e3)}onMutiKill2(){Laya.Tween.to(this.zi_mutiKill,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill3,[1500]))}onMutiKill3(e){Laya.Tween.to(this.img_mutiKill,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill4),e)}onMutiKill4(){this.img_mutiKill.visible=!1}onGameSceneGray(){this.matchBox.gray=!0}onEnable(){console.log("MatchScene onEnable"),y.intance.on(h.UPDATE_KILL_NUM,this,this.updateKill),y.intance.on(h.EVENT_RESTORE_DATA,this,this.onRestoreData),y.intance.on(h.EVENT_FirstBlood,this,this.onFirstBloodPush),y.intance.on(h.EVENT_MutiKill,this,this.onMutiKillPush),y.intance.on(h.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.on(Laya.Event.FOCUS,this,this.onWindowFocus)}onWindowFocus(){U.instance.sendRestoreData()}onDisable(){y.intance.off(h.UPDATE_KILL_NUM,this,this.updateKill),y.intance.off(h.EVENT_RESTORE_DATA,this,this.onRestoreData),y.intance.off(h.EVENT_FirstBlood,this,this.onFirstBloodPush),y.intance.off(h.EVENT_MutiKill,this,this.onMutiKillPush),y.intance.off(h.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.off(Laya.Event.FOCUS,this,this.onWindowFocus),Laya.timer.clearAll(this)}};Fh=p([xT("sX0uLhOQSmm8b-_sHNqe5w")],Fh);var{regClass:wT,property:_pe}=Laya,tl=class extends Laya.Script{constructor(){super()}onAwake(){}onStart(){U.instance.playMusic()}onLateUpdate(){U.instance.moveGameWindow()}};tl=p([wT("Ply19emtSrqrBk7nHXToAQ")],tl);var zh=class extends Laya.Box{};var{regClass:IT}=Laya,Gh=class extends zh{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.txt_num.text="",this.img_icon.skin=C.instance.getMatchSkillIcon(this.skillItem.icon))}};Gh=p([IT("iwuFUCOEQRyOjxpy6IkQ2Q")],Gh);var jh=class extends Laya.Button{};var{regClass:ET}=Laya,qh=class extends jh{constructor(){super();this.isAddEvent=!1;this.isCanClick=!0;this.skillCooldown=5e3;this.thisGlobalCooldown=1e4;this.globalCooldown=1e4;this.remainingSkillCooldown=0;this.remainingGlobalCooldown=0}onEnable(){this.addEvent()}addEvent(){this.isAddEvent||(y.intance.on(h.EVENT_CLICK_NUM,this,this.onNumberClick),y.intance.on(h.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.onSkillButtonClick),this.on(Laya.Event.MOUSE_UP,this,this.onSkillButtonUp))}onNumberClick(e){e==this.keyNum&&this.onSkillButtonClick(null)}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.isBig=this.skillItem.icon=="1001",this.skillIconItem.dataSource=this.skillItem,this.skillCooldown=this.skillItem.cd,this.thisGlobalCooldown=this.skillItem.commCd,Laya.timer.frameLoop(1,this,this.updateCooldown))}onMouseClick(e){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=0;U.instance.playSound(1),Laya.timer.once(1e3,this,()=>{this.isCanClick=!0})}}onSkillButtonUp(e){e&&e.stopPropagation(),sn.clearClickFilter(this)}onSkillButtonClick(e){e&&e.stopPropagation(),this.remainingSkillCooldown<=0&&this.remainingGlobalCooldown<=0?(console.log("技能释放！"),Laya.Tween.to(this,{scaleX:.8,scaleY:.8},100,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},100,Laya.Ease.linearNone)})),U.instance.myHeroSpr.attack(this.skillItem.id),this.updateSkillCooldown(this.skillCooldown),y.intance.event(h.EVENT_UPDATE_GLOBAL_COOL,[this.thisGlobalCooldown])):console.log("技能或全局冷却还在进行中，无法释放。")}updateSkillCooldown(e){this.remainingSkillCooldown=e}updateGlobalCooldown(e){this.globalCooldown=e,this.remainingGlobalCooldown=e}updateCooldown(){if(this.remainingSkillCooldown>0){this.remainingSkillCooldown-=Laya.timer.delta;let e=this.remainingSkillCooldown/1e3;this.txt_time.text=e.toFixed(1),this.updateCooldownMask(this.skillCooldownMask,this.remainingSkillCooldown/this.skillCooldown,"#000000"),this.img_djs.visible=!0,this.txt_time.visible=!0}else this.img_djs.visible=!1,this.txt_time.visible=!1;this.remainingGlobalCooldown>0?(this.remainingGlobalCooldown-=Laya.timer.delta,this.updateCooldownMask(this.globalCooldownMask,this.remainingGlobalCooldown/this.globalCooldown,"#00000036"),this.globalCooldownMask.visible=!0):this.globalCooldownMask.visible=!1,this.skillIconItem.gray=this.remainingSkillCooldown>0||this.remainingGlobalCooldown>0}updateCooldownMask(e,i,n){let r=this.width/2,o=this.width/2,s=this.height/2;e.graphics.clear(),e.graphics.drawPie(o,s,r,-90+360*(1-i),270,n)}onDisable(){y.intance.off(h.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),y.intance.offAllCaller(this),Laya.timer.clearAll(this)}};qh=p([ET("x6t-z1VuR52yXWju0qxGBg")],qh);var Wh=class extends Laya.Dialog{};var{regClass:TT}=Laya,Kh=class extends Wh{constructor(){super();this.canClose=!0}onEnable(){this.btn_refresh.on(Laya.Event.CLICK,this,this.onRefresh),this.alertDesc.on(Laya.Event.LINK,this,this.onLink)}onLink(e){console.log("点击了超链接："+e)}onRefresh(){Te.instance.reload()}setOpenData(e){if(e){var i=e[0];if(e.length>2?(this.alertTitle.text=e[1],this.alertDesc.text=e[2]):this.alertDesc.text=e[1],i==1){this.canClose=!1;var n=this.getChildByName("close");n.visible=!1,this.btn_refresh.visible=!0}else this.btn_refresh.visible=!1}}onDisable(){}close(e){this.canClose&&super.close(e)}};Kh=p([TT("xATCTfSDSkaGtuYn669ofQ")],Kh);var Yh=class extends Laya.Dialog{};var{regClass:ST}=Laya,$h=class extends Yh{constructor(){super();this.canClose=!0}onEnable(){this.btn_refresh.on(Laya.Event.CLICK,this,this.onRefresh),this.alertDesc.on(Laya.Event.LINK,this,this.onLink),this.btn_left.on(Laya.Event.CLICK,this,this.onChangePage,[!1]),this.btn_right.on(Laya.Event.CLICK,this,this.onChangePage,[!0])}onLink(e){console.log("点击了超链接："+e)}onRefresh(){Te.instance.reload()}setOpenData(e){if(e){var i=e[0],n=e[1];if(this.list=n.list,this.pageNo=1,this.pageTotal=this.list.length,this.pageTotal<2&&(this.box_page.visible=!1),this.updatePageList(),i==1){this.canClose=!1;var r=this.getChildByName("close");r.visible=!1,this.btn_refresh.visible=!0}else this.btn_refresh.visible=!1}}async onChangePage(e){if(e)this.pageNo++;else{if(this.pageNo<=1)return;this.pageNo--}this.updatePageList()}updatePageList(){this.txt_page.text=this.pageNo+"/"+this.pageTotal,this.btn_left.disabled=this.pageNo<=1,this.btn_right.disabled=this.pageNo>=this.pageTotal,this.setNoticeDetail()}setNoticeDetail(){if(this.pageNo){var e=this.list[this.pageNo-1];e&&(this.alertTitle.text=d.instance.getMultiLan(e.title),this.alertDesc.text=d.instance.getMultiLan(e.contents))}}onDisable(){}close(e){this.canClose&&super.close(e)}};$h=p([ST("iB7UvqEcQ1GFKaVEIy6Bmw")],$h);var Xh=class extends Laya.Box{};var{regClass:CT}=Laya,Qh=class extends Xh{};Qh=p([CT("ON5bkSuKSE2gwPDUnRGmrw")],Qh);var Zh=class extends Laya.Box{};var{regClass:kT}=Laya,Jh=class extends Zh{onEnable(){}notice(t){let e=t;this.label_tf.text=e,this.label_tf.x=68,this.image_bg.width=68*2+this.label_tf.textField.textWidth,e.length/45>1&&(this.image_bg.height=this.label_tf.textField.textHeight+25),this.alpha=1,this.visible=!0}get view(){return this}get width(){return this.image_bg.width}onDisable(){console.log("txtNotice recover"),Laya.Pool.recover("txtNotice",this)}};Jh=p([kT("Nm27xWbYSG6mj-EXqPOZ_A")],Jh);var ef=class extends Laya.Box{};var{regClass:AT}=Laya,tf=class extends ef{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){if(!t)return;super.dataSource=t;let e=t.id===L.instance.playerDto.pid,i=t.rank;if(this.tf_name.text=t.name,this.tf_union.text=d.instance.getMultiLan(t.shortUnionName),this.tf_rank.text=i,this.tf_score.text=t.score,this.playerIcon.headSkin=t.head,this.img_flag.skin=C.instance.getCountryIcon(t.country),t.icon){let n=C.instance.getUnionIcon(t.icon);this.img_lvIcon.skin=n,this.img_lvIcon.visible=!0}else this.img_lvIcon.visible=!1;e?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.bg.skin=i<4?`res/rank/img_guild_${i}di.png`:"res/rank/img_guild_4di.png",i<4?(this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${i}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.img_rankIcon2.skin=e?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1)}};tf=p([AT("-msKQoZIRI6E80e53qttmw")],tf);var af=class extends Laya.Scene{};var{regClass:DT}=Laya,nf=class extends af{constructor(){super(...arguments);this.myIndex=-1;this.myUnionIndex=-1;this.unionRankData=null;this.currTab=0}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP}onOpened(e){this.onClickPlayer()}onEnable(){this.rankLanList.visible=!1,this.myBox.visible=!1,this.myUnionBox.visible=!1,this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_4.on(Laya.Event.CLICK,this,this.onClickTab,[4]),this.btn_5.on(Laya.Event.CLICK,this,this.onClickTab,[5]),this.btn_player.on(Laya.Event.CLICK,this,this.onClickPlayer),this.btn_guild.on(Laya.Event.CLICK,this,this.onClickGuild),this.btn_schol.on(Laya.Event.CLICK,this,this.onClickSchol)}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_2.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_3.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_4.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_5.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_player.off(Laya.Event.CLICK,this,this.onClickPlayer),this.btn_guild.off(Laya.Event.CLICK,this,this.onClickGuild),this.btn_schol.off(Laya.Event.CLICK,this,this.onClickSchol),this.rankLanList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.unionRankLanList.scrollBar.off(Laya.Event.CHANGE,this,this.onUnionScrollBarChange)}onClickTab(e){if(this.currTab===e)return;let i={1:"combat scenes",2:"KILL COUNT",3:"number of heroes",4:"damage ranking",5:"wealth ranking"};e in i?(this.setTab(e),this.setListData(e),this.rankName.text=i[e]):console.warn(`Tab index ${e} does not have a corresponding name.`)}setTab(e){for(let i=1;i<6;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}async setListData(e){let i=await A.requestPost("wxgame/sys/rank",{type:e});i?(this.updateSelfData(i.self),this.updateRankList(i.rankList)):(console.error("Error fetching data:",i),B.instance.notice(d.instance.getLanguage(135)))}async setGuildListData(){this.unionRankData||(this.unionRankData=await A.requestPost("wxgame/sys/unionRank",{}));let e=[];if(this.unionRankData){let i=this.unionRankData.rankList,n=this.unionRankData.self;if(n&&this.updateSelfUnionData(n),this.unionRankLanList.scrollTo(0),this.unionRankLanList.visible=!0,this.myUnionBox.visible=!0,this.unionRankLanList.selectedIndex=1,this.unionRankLanList.array=i,this.myUnionBox.visible=!!n,n){let r=i.findIndex(o=>o.id===n.id);this.myUnionIndex=r}}else console.error(`Error fetching data: ${this.unionRankData}`),B.instance.notice(d.instance.getLanguage(135))}updateSelfData(e){if(e){if(this.tf_name.text=e.name,this.tf_union.text=d.instance.getMultiLan(e.shortUnionName),this.tf_score.text=`${e.score}`,this.playerIcon.headSkin=e.head,this.img_flag.skin=C.instance.getCountryIcon(e.country),e.unionId){let i=C.instance.getUnionIcon(e.unionId);this.img_lvIcon.skin=i,this.img_lvIcon.visible=!0}else this.img_lvIcon.visible=!1;if(e.rank<0)this.img_rankIcon1.visible=!1,this.tf_rank.text=d.instance.getLanguage(1117),this.img_rankIcon2.visible=!1;else if(e.rank<4)this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${e.rank}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1;else{let i=e.pid===L.instance.playerDto.pid?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png";this.img_rankIcon2.skin=i,this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1,this.tf_rank.text=`${e.rank}`}}}updateSelfUnionData(e){if(e)if(this.union_name.text=d.instance.getMultiLan(e.unionName),this.unionIcon.dataSource=e,this.union_score.text=e.score+"",e.rank<0)this.img_unionIcon1.visible=!1,this.union_rank.text=d.instance.getLanguage(1117),this.img_unionIcon2.visible=!1;else if(e.rank<4)this.img_unionIcon1.skin=`res/matchRank1/img_ranking_${e.rank}.png`,this.img_unionIcon1.visible=!0,this.img_unionIcon2.visible=!1;else{let i="res/matchRank1/img_ranking_ranking_me.png";this.img_unionIcon2.skin=i,this.img_unionIcon2.visible=!0,this.img_unionIcon1.visible=!1,this.union_rank.text=`${e.rank}`}}updateRankList(e){if(e){let i=e.findIndex(n=>n.pid===L.instance.playerDto.pid);this.rankLanList.selectedIndex=1,this.rankLanList.array=e,this.myIndex=i,this.rankLanList.scrollTo(0),this.rankLanList.visible=!0,this.myBox.visible=!0}}onScrollBarChange(){if(!this.rankLanList.array||!this.myIndex&&this.myIndex!==0)return;let e=this.rankLanList.startIndex,i=e+this.rankLanList.repeatX*this.rankLanList.repeatY-1,n=this.rankLanList.getCell(this.myIndex);if(n)if(this.myIndex>=e&&this.myIndex<=i){let s=n.localToGlobal(new Laya.Point(0,0)).y-this.myBox.height-57;s=Math.max(57,Math.min(493,s)),this.myBox.y=s}else this.myBox.y=this.myIndex>i?493:57}onUnionScrollBarChange(){if(!this.unionRankLanList.array||!this.myUnionIndex&&this.myUnionIndex!==0)return;let e=this.unionRankLanList.startIndex,i=e+this.unionRankLanList.repeatX*this.unionRankLanList.repeatY-1,n=this.unionRankLanList.getCell(this.myUnionIndex);if(n)if(this.myUnionIndex>=e&&this.myUnionIndex<=i){let s=n.localToGlobal(new Laya.Point(0,0)).y-this.myUnionBox.height-57;s=Math.max(57,Math.min(499,s)),this.myUnionBox.y=s}else this.myUnionBox.y=this.myUnionIndex>i?499:57}setTabState(e,i,n,r){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?n:r}onClickPlayer(){this.onClickTab(1),this.playerRankBox.visible=!0,this.unionBox.visible=!1,this.setTabState(this.btn_player,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!1,"#143f6b","#7ff1fe")}onClickGuild(){this.playerRankBox.visible=!1,this.unionBox.visible=!0,this.setTabState(this.btn_player,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!1,"#143f6b","#7ff1fe"),this.setGuildListData()}onClickSchol(){this.playerRankBox.visible=!1,this.unionBox.visible=!1,this.setTabState(this.btn_player,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!0,"#143f6b","#7ff1fe")}};nf=p([DT("5_oIkEKDQUyqTP8xY9zMUw")],nf);var rf=class extends Laya.Box{};var{regClass:MT}=Laya,of=class extends rf{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){if(!t)return;let e=t.id===L.instance.playerDto.pid,i=t.rank;this.unionIcon.dataSource=t,this.tf_union.text=d.instance.getMultiLan(t.shortUnionName),this.tf_rank.text=i+"",this.tf_score.text=t.score+"",e?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.bg.skin=i<4?`res/rank/img_guild_${i}di.png`:"res/rank/img_guild_4di.png",i<4?(this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${i}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.img_rankIcon2.skin=e?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1)}};of=p([MT("O6o6TJNORIGW9WXbhJf91w")],of);var sf=class extends Laya.Box{};var{regClass:BT,property:Pme}=Laya,lf=class extends sf{constructor(){super();this.isAddEvent=!1}set dataSource(e){if(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=C.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}}async setCurrentOutPut(){this.img_back.skin=C.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ce.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";et.instance.setStar(this,e),this.box_show.visible=!0,this.destroyed}onChange(e){e?this.selectBox.visible=!0:this.selectBox.visible=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}toDetail(){this.heroVo.id&&H.intance.openModule(f.HeroDetailDialog,this.heroVo)}};lf=p([BT("DixYspEIQnqQazhlHuxLDw")],lf);var cf=class extends Laya.Dialog{};var{regClass:PT}=Laya,uf=class extends cf{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER;this.beforeYearIndex=null;this.beforeMonthIndex=null;this.beforeDayIndex=null;this.beforeHourIndex=null;this.dateOpenState=0;this.dateOpenStateAir=0;this.itemVo=null;this.walletType=0;this.heroPkList=[];this.airWalletDataArray=[];this.currentDate=new Date;this.startDate={year:0,month:0,day:0,hour:0};this.endDate={year:0,month:0,day:0,hour:0};this.heroVo=null}onEnable(){this.box_date.on(Laya.Event.CLICK,this,this.onOpenDate,[this.img_date_pad,this.box_date]),this.box_date2.on(Laya.Event.CLICK,this,this.onOpenDate,[this.img_date_pad,this.box_date2]),this.box_date3.on(Laya.Event.CLICK,this,this.onOpenDateAir,[this.img_date_pad2,this.box_date3]),this.box_date4.on(Laya.Event.CLICK,this,this.onOpenDateAir,[this.img_date_pad2,this.box_date4]),this.box_date2.on(Laya.Event.CLICK,this,this.onOpenDate,[this.img_date_pad,this.box_date2]),this.yearList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.yearList,"year"]),this.monthList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.monthList,"month"]),this.dayList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.dayList,"day"]),this.hourList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.hourList,"hour"]),this.yearList2.on(Laya.Event.MOUSE_UP,this,this.onListStopAir,[this.yearList2,"year"]),this.monthList2.on(Laya.Event.MOUSE_UP,this,this.onListStopAir,[this.monthList2,"month"]),this.dayList2.on(Laya.Event.MOUSE_UP,this,this.onListStopAir,[this.dayList2,"day"]),this.hourList2.on(Laya.Event.MOUSE_UP,this,this.onListStopAir,[this.hourList2,"hour"]),this.yearList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.yearList,"year",this.img_date_pad]),this.monthList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.monthList,"month",this.img_date_pad]),this.dayList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.dayList,"day",this.img_date_pad]),this.hourList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.hourList,"hour",this.img_date_pad]),this.yearList2.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.yearList2,"year",this.img_date_pad2]),this.monthList2.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.monthList2,"month",this.img_date_pad2]),this.dayList2.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.dayList2,"day",this.img_date_pad2]),this.hourList2.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.hourList2,"hour",this.img_date_pad2]),this.tf_uid.on(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),y.intance.on(h.CHANGE_WALLET_HERO,this,this.onHeroChange),y.intance.on(h.CHANGE_WALLET_HERO_AIR,this,this.onAirHeroChange),y.intance.on(h.CHANGE_WALLET_PROP,this,this.onPropChange),y.intance.on(h.ADD_AIR_WALLET_ITEM,this,this.addAirWalletItem),y.intance.on(h.ADD_AIR_SUB_WALLET_NAME,this,this.addAirWalletNameItem),y.intance.on(h.AIR_SUB_WALLET_OPENHERO,this,this.airdropOpenHeroView),this.hero_box.on(Laya.Event.CLICK,this,this.onHeroBoxClick),this.Img_prop.on(Laya.Event.CLICK,this,this.onPropClick),this.btn_createSubWallet.on(Laya.Event.CLICK,this,this.onCreateSubWallet),this.btn_createSubWalletAir.on(Laya.Event.CLICK,this,this.onCreateSubWalletAir),this.box_Arean.on(Laya.Event.CLICK,this,this.onOpenType),this.tab1.on(Laya.Event.CLICK,this,this.onTabClick,[1]),this.tab2.on(Laya.Event.CLICK,this,this.onTabClick,[2]),this.yearList.scrollBar.rollRatio=0,this.monthList.scrollBar.rollRatio=0,this.dayList.scrollBar.rollRatio=0,this.hourList.scrollBar.rollRatio=0,this.yearList2.scrollBar.rollRatio=0,this.monthList2.scrollBar.rollRatio=0,this.dayList2.scrollBar.rollRatio=0,this.hourList2.scrollBar.rollRatio=0,this.initTime(),this.showHeroData(),this.initDiciList(),this.initTypeList(),this.box_dividends.on(Laya.Event.CLICK,this,this.onOpeDividends),this.tab1.getChildByName("tf_tit").text=`${d.instance.getLanguage(1261)}`,this.tab2.getChildByName("tf_tit").text=`${d.instance.getLanguage(1260)}`}onDisable(){this.removeEvent()}removeEvent(){this.box_date.off(Laya.Event.CLICK,this,this.onOpenDate),this.box_date2.off(Laya.Event.CLICK,this,this.onOpenDate),this.yearList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.monthList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.dayList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.yearList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.monthList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.dayList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.tf_uid.off(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.off(Laya.Event.FOCUS,this,this.uidFocus),this.hero_box.off(Laya.Event.CLICK,this,this.onHeroBoxClick),this.Img_prop.off(Laya.Event.CLICK,this,this.onPropClick),this.btn_createSubWallet.off(Laya.Event.CLICK,this,this.onCreateSubWallet),this.box_dividends.off(Laya.Event.CLICK,this,this.onOpeDividends),y.intance.off(h.CHANGE_WALLET_HERO,this,this.onHeroChange),y.intance.off(h.CHANGE_WALLET_HERO_AIR,this,this.onAirHeroChange),y.intance.off(h.CHANGE_WALLET_PROP,this,this.onPropChange),y.intance.off(h.ADD_AIR_WALLET_ITEM,this,this.addAirWalletItem),y.intance.off(h.ADD_AIR_SUB_WALLET_NAME,this,this.addAirWalletNameItem),y.intance.off(h.AIR_SUB_WALLET_OPENHERO,this,this.airdropOpenHeroView)}resetColors(e,i,n){let r=[e,i,n];for(let l of r)for(var o=0;o<l.cells.length;o++){var s=l.cells[o];s.tf_date.color="#357cc0"}}onOpenDate(e,i){this.resetColors(this.yearList,this.monthList,this.dayList),this.onHideDivi(),e.visible==!1?(i==this.box_date?(e.y=306,this.dateOpenState=1):(e.y=20,this.dateOpenState=2),this.getDateInfo(),e.visible=!0,this.img_bg.on(Laya.Event.CLICK,this,this.hideAllPad)):(e.visible=!1,this.dateOpenState=0)}onOpenDateAir(e,i){this.resetColors(this.yearList2,this.monthList2,this.dayList2),this.onHideDivi(),e.visible==!1?(i==this.box_date3?(e.x=125,this.dateOpenState=1):(e.x=664,this.dateOpenState=2),this.getDateInfoAir(),e.visible=!0,this.img_bg.on(Laya.Event.CLICK,this,this.hideAllPad)):(e.visible=!1,this.dateOpenStateAir=0)}hideAllPad(){this.img_date_pad.visible=!1,this.img_date_pad2.visible=!1,this.img_bg.off(Laya.Event.CLICK,this,this.hideAllPad)}initTypeList(){let e=R.intance.getArenaTypesInSub(),i={name:"Professional & Airdrop"};e.push(i),this.list_type.array=e,this.list_type.selectHandler=new Laya.Handler(this,this.handleSelectType),this.list_type.mouseHandler=Laya.Handler.create(this,this.onTypeItemMouse,null,!1),this.list_type.renderHandler=Laya.Handler.create(this,this.onTypeItemRender,null,!1),this.list_type.selectedIndex=0}getDateInfo(){this.renderDateInfo(this.dateOpenState,this.startDate,this.endDate,this.yearList,this.monthList,this.dayList,this.hourList)}getDateInfoAir(){this.renderDateInfo(this.dateOpenState,this.startDate,this.endDate,this.yearList2,this.monthList2,this.dayList2,this.hourList2)}renderDateInfo(e,i,n,r,o,s,l){let c=e==1?i:n;this.fillList(r,c.year,2e3,2050),this.fillList(o,c.month,1,12);let u=new Date().getFullYear(),m=new Date().getMonth()+1,g=ve.getDaysInMonth(u,m);this.fillList(s,c.day,1,g),this.fillList(l,c.hour,0,23)}fillList(e,i,n,r){let o=[],s=this.walletType?this.yearList2:this.yearList,l=this.walletType?this.monthList2:this.monthList,c=this.walletType?this.dayList2:this.dayList,u=this.walletType?this.hourList2:this.hourList;for(let g=n;g<=r;g++)o.push(g.toString());for(let g=1;g<=3;g++)o.push("");o=["",...o],e.array=o;let m=o.indexOf(`${i}`);if(m>-1){e.scrollTo(m-1),e.selectedIndex=m-1;let g=e.getCell(m);g.tf_date.color="#ffffff",e==s?this.beforeYearIndex=m:e==l?this.beforeMonthIndex=m:e==c?this.beforeDayIndex=m:e==u&&(this.beforeHourIndex=m)}}onYearChange(e){!this.yearList.array||this.monthList.selectedIndex<0||this.updateDayList(parseInt(this.yearList.array[e]),parseInt(this.monthList.array[this.monthList.selectedIndex]))}onMonthChange(e){!this.yearList.array||this.monthList.selectedIndex<0||this.updateDayList(parseInt(this.yearList.array[this.yearList.selectedIndex]),parseInt(this.monthList.array[e]))}onYearChangeAir(e){!this.yearList2.array||this.monthList2.selectedIndex<0||this.updateDayListAir(parseInt(this.yearList2.array[e]),parseInt(this.monthList2.array[this.monthList.selectedIndex]))}onMonthChangeAir(e){!this.yearList2.array||this.monthList2.selectedIndex<0||this.updateDayListAir(parseInt(this.yearList2.array[this.yearList2.selectedIndex]),parseInt(this.monthList2.array[e]))}updateDayList(e,i){let n=[];for(let r=1;r<=ve.getDaysInMonth(e,i);r++)n.push(r.toString());for(let r=1;r<=3;r++)n.push("");n=["",...n],this.dayList.array=n}updateDayListAir(e,i){let n=[];for(let r=1;r<=ve.getDaysInMonth(e,i);r++)n.push(r.toString());for(let r=1;r<=3;r++)n.push("");n=["",...n],this.dayList2.array=n}calculateVisibleHeight(e,i){let n=e.getCell(i);return Math.min(n.y+n.height,e.scrollBar.value+e.height)-Math.max(n.y,e.scrollBar.value)}onListStop(e,i){let n=this.dateOpenState==1?this.startDate:this.endDate,r=Math.floor(e.startIndex),o=r+1,s=this.calculateVisibleHeight(e,r),l=this.calculateVisibleHeight(e,o),c=s+14>=l?r:o;(i==="month"||i==="day"||i==="hour")&&(c=Math.min(c,e.array.length-5)),e.scrollTo(c),e.selectedIndex=c;let u=e.getCell(c+1);u.tf_date.color="#ffffff";let m=u.tf_date.text;if(m&&u){switch(i){case"year":this.onYearChange(c+1),n.year=Number(m);break;case"month":this.onMonthChange(c+1),n.month=Number(m);break;case"day":n.day=Number(m);break;default:n.hour=Number(m);break}this.refreshStartTime(this.dateOpenState)}}onListStopAir(e,i){let n=this.dateOpenState==1?this.startDate:this.endDate,r=Math.floor(e.startIndex),o=r+1,s=this.calculateVisibleHeight(e,r),l=this.calculateVisibleHeight(e,o),c=s+14>=l?r:o;(i==="month"||i==="day"||i==="hour")&&(c=Math.min(c,e.array.length-5)),e.scrollTo(c),e.selectedIndex=c;let u=e.getCell(c+1);u.tf_date.color="#ffffff";let m=u.tf_date.text;if(m&&u){switch(i){case"year":this.onYearChangeAir(c+1),n.year=Number(m);break;case"month":this.onMonthChangeAir(c+1),n.month=Number(m);break;case"day":n.day=Number(m);break;default:n.hour=Number(m);break}this.refreshStartTime(this.dateOpenState)}}onScrollBarChange(e,i,n){if(!n.visible)return;let r=this.dateOpenState==1?this.startDate:this.endDate;console.log("startDate",this.startDate);let o=Math.floor(e.startIndex),s=o+1,l=this.calculateVisibleHeight(e,o),c=this.calculateVisibleHeight(e,s),u=l+14>=c?o:s,m=e.getCell(u+1);m.tf_date.color="#ffffff";let g,x;switch(i){case"year":x=this.beforeYearIndex,this.beforeYearIndex=u+1;break;case"month":x=this.beforeMonthIndex,this.beforeMonthIndex=u+1;break;case"day":x=this.beforeDayIndex,this.beforeDayIndex=u+1;break;case"hour":x=this.beforeHourIndex,this.beforeHourIndex=u+1;break}x!==u+1&&(g=e.getCell(x),this.resetListStyle(g));let w=m.tf_date.text;if(m.tf_date.color="#ffffff",w&&m){switch(i){case"year":this.onYearChange(u+1),r.year=Number(w);break;case"month":this.onMonthChange(u+1),r.month=Number(w);break;case"day":r.day=Number(w);break;default:r.hour=Number(w);break}this.refreshStartTime(this.dateOpenState)}}async setPlayerName(){try{if(this.tf_uid.text=="")return;var e=await A.requestPost("wxgame/sys/queryName",{openid:this.tf_uid.text.toLowerCase()});e&&(this.tf_player_name.text=e.name)}catch{}}uidFocus(){this.tf_uid.text="",this.tf_player_name.text=""}resetListStyle(e){e&&(e.tf_date.color="#357cc0")}refreshStartTime(e){let i,n,r;this.walletType==1?(i=e==1?this.startDate:this.endDate,n=e==1?this.tf_startAir:this.tf_startAir2,r=e==1?this.tf_hourAir:this.tf_hourAir2):(i=e==1?this.startDate:this.endDate,n=e==1?this.tf_start:this.tf_start2,r=e==1?this.tf_hour:this.tf_hour2);let o=i.month>=10?i.month:`0${i.month}`,s=i.day>=10?i.day:`0${i.day}`;n.text=`${i.year}-${o}-${s}`,r.text=`${i.hour}:00`}onHeroBoxClick(){H.intance.openModule(f.WalletChooseHeroDialog,[-1])}onPropClick(){this.list_type.selectedIndex!=1&&H.intance.openModule(f.WalletChoosePropsDialog)}async onCreateSubWallet(){if(console.log("this.proCheckBox.selected",this.proCheckBox.selected),console.log("this.airCheckBox.selected",this.airCheckBox.selected),Xe.instance.inMinWaiting){B.instance.notice(d.instance.getLanguage(1187));return}if(this.tf_uid.text==j.instance.walletAddress){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1162),N.YES),this.tf_uid.text="",this.tf_player_name.text="";return}let e=this.tf_uid.text;if(e.length<=0||this.tf_player_name.text==""){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1161),N.YES);return}if(!this.heroVo){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1167),N.YES);return}let i,n=Number(this.tf_have.text);if(this.list_type.selectedIndex!==1){if(i=this.itemVo&&this.itemVo.m_iId,i==1001&&this.heroVo.heroItem.level!==3){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1163),N.YES);return}if((n<1||!this.itemVo)&&this.list_type.selectedIndex==0){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1166),N.YES);return}}else n=0,i=0;let r=we.dateStringToTimestamp(this.tf_start.text,`${this.startDate.hour}`),o=we.dateStringToTimestamp(this.tf_start2.text,`${this.endDate.hour}`),s=we.getCurrentDayTimestamp();if(r<s){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1164),N.YES);return}if(o<=r){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1165),N.YES);return}let l=this.list_type.selectedIndex+1,c=Number(this.tf_div.text.replace("%","")),u=this.heroVo.pk;var m={startTime:r,endTime:o,ticketId:i,ticketCount:n,ratio:c,heroPk:u,openid:e.toLowerCase(),type:l};try{var g=await A.requestPost("wxgame/lease/create",m);g&&(B.instance.notice(d.instance.getLanguage(1168)),this.heroVo.pk==L.instance.playerDto.fightHeroPk&&(L.instance.playerDto.fightHeroPk=""),Laya.timer.once(200,this,()=>{y.intance.event(h.CREATE_SUB_WALLET_SUCCESS)}),this.close())}catch{}}async onCreateSubWalletAir(){let e=we.dateStringToTimestamp(this.tf_startAir.text,`${this.startDate.hour}`),i=we.dateStringToTimestamp(this.tf_startAir2.text,`${this.endDate.hour}`),n=we.getCurrentDayTimestamp(),r=this.getEfficientList(this.airWalletDataArray);if(r.length<=0){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1352),N.YES);return}if(e<n){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1164),N.YES);return}if(i<=e){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1165),N.YES);return}console.log(e,i,n);var o=await A.requestPost("wxgame/lease/mutiCreate",{startTime:e,endTime:i,ratio:0,type:2,data:r});o&&(B.instance.notice(d.instance.getLanguage(1168)),this.close(),Laya.timer.once(200,this,()=>{y.intance.event(h.CREATE_SUB_WALLET_SUCCESS)}))}getEfficientList(e){let i=[];for(let n=0;n<e.length;n++){let r=e[n];r.name.length>0&&r.hero&&i.push({address:r.walletAddress,heroPk:r.hero.pk.toLowerCase()})}return i}showHeroData(){if(this.heroVo){this.img_back.skin=C.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ce.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";et.instance.setStar(this,e),this.box_show.visible=!0,this.img_back.visible=!0,this.img_noHero.visible=!1}else this.box_show.visible=!1,this.img_back.visible=!1,this.img_noHero.visible=!0}initDiciList(){var e=R.intance.getGeneralValueById(9);this.list_divi.array=e,this.list_divi.selectHandler=new Laya.Handler(this,this.handleSelectDiv),this.list_divi.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_divi.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_divi.scrollBar&&this.list_divi.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown),this.list_divi.selectedIndex=0}initDiciList2(e){if(e==1){var i=R.intance.getGeneralValueById(9);this.list_divi.array=i,this.list_divi.selectedIndex=0}else{var i=R.intance.getGeneralValueById(18);this.list_divi.array=i,this.list_divi.selectedIndex=0}this.handleSelectDiv(0)}handleSelectDiv(e){if(e!=-1){let i=this.list_divi.selectedItem;this.tf_div.text=`${i}%`}}handleSelectType(e){if(this.itemVo=null,e!=-1){let i=this.list_type.selectedItem;this.tf_type.text=`${d.instance.getLanguage(i.name)}`,e==0?(this.clearProp(),this.initDiciList2(1),this.img_lock.visible=!1,this.img_jia.visible=!0):e==2?(this.initDiciList2(2),this.clearProp()):(this.initDiciList2(1),this.img_lock.visible=!0,this.tf_div.text="0%",this.img_jia.visible=!1,this.PropBox.visible=!1)}}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_divi.selectedIndex=i,this.onHideDivi())}onTypeItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_type.selectedIndex=i,this.onHideDivi())}onCountryItemRender(e,i){e.onChange(this.list_divi.selectedIndex==i)}onTypeItemRender(e,i){e.onChange(this.list_type.selectedIndex==i)}onOpeDividends(){this.list_type.selectedIndex!=1&&(this.img_divi_pad.visible=!0,this.img_bg.once(Laya.Event.MOUSE_DOWN,this,this.onHideDivi))}onHideDivi(){this.img_divi_pad.visible=!1,this.img_type_pad.visible=!1,this.img_bg.off(Laya.Event.MOUSE_DOWN,this,this.onHideDivi)}onScrollBarDown(e){e.stopPropagation()}onHeroChange(e){this.heroVo=e,this.showHeroData()}onOpenType(){this.img_type_pad.visible=!0,this.img_bg.once(Laya.Event.MOUSE_DOWN,this,this.onHideDivi)}onPropChange(e,i){this.itemVo||this.initDiciList2(1),this.itemVo=e;let n=R.intance.m_dicItems.get(e.itemItem.id.toString());this.PropBox.visible=!0,this.img_jia.visible=!1,n&&(this.img_prop_icon.skin=C.instance.getItemIcon(n.icon),this.img_prop_box.skin="gameIcon/items/itemBg/img_"+n.quality+".png",this.tf_all.text=""+Ee.formatNumber(e._m_iNum,2),this.tf_have.text=""+Ee.formatNumber(i,2))}clearProp(){this.PropBox.visible=!1,this.img_jia.visible=!0}onTabClick(e){e==1?(this.tab1.getChildByName("tf_tit").color="#143268",this.tab1.skin="res/scholarship/img_transfer_tab2.png",this.tab2.getChildByName("tf_tit").color="#429fdf",this.tab2.skin="res/scholarship/img_transfer_tab1.png",this.airBox.visible=!1,this.proBox.visible=!0,this.walletType=0,this.heroVo=null,this.heroPkList=[],this.showHeroData(),this.initTime()):(this.tab1.getChildByName("tf_tit").color="#429fdf",this.tab1.skin="res/scholarship/img_transfer_tab1.png",this.tab2.getChildByName("tf_tit").color="#143268",this.tab2.skin="res/scholarship/img_transfer_tab2.png",this.proBox.visible=!1,this.airBox.visible=!0,this.walletType=1,this.airWalletDataArray=[],this.initAirSubWallet(),this.initTime())}initTime(){let e=new Date;this.startDate={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours()},this.endDate={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours()},this.refreshStartTime(1),this.refreshStartTime(2)}initAirSubWallet(){this.airWalletDataArray=[],this.airWalletDataArray.push({hero:0,walletAddress:"",name:"",establish:!0,index:0}),this.airWalletDataArray.push({hero:0,walletAddress:"",name:"",establish:!1,index:1}),this.subAirdropWalletList.array=this.airWalletDataArray}addAirWalletItem(){let e={hero:0,walletAddress:"",name:"",establish:!1,index:this.airWalletDataArray.length};this.subAirdropWalletList.visible=!1,this.airWalletDataArray[this.airWalletDataArray.length-1].establish=!0,this.airWalletDataArray.push(e),this.subAirdropWalletList.array=[],this.subAirdropWalletList.array=this.airWalletDataArray,this.subAirdropWalletList.repeatY=this.airWalletDataArray.length-10,this.subAirdropWalletList.scrollTo(this.airWalletDataArray.length-1),this.subAirdropWalletList.visible=!0}addAirWalletNameItem(e){if(e){let i=e.index;this.airWalletDataArray[i].name=e.name,this.airWalletDataArray[i].walletAddress=e.walletAddress}}airdropOpenHeroView(e){H.intance.openModule(f.WalletChooseHeroDialog,[e,this.heroPkList])}onAirHeroChange(e,i){this.airWalletDataArray[i].hero=e,this.heroPkList.push(e.pk)}};uf=p([PT("_bHe6-EiQc-KiQ-mElnEIQ")],uf);var pf=class extends Laya.ComboBox{};var{regClass:RT}=Laya,mf=class extends pf{set defaultLabel(t){}onEnable(){this.getDateInfo()}set dataSource(t){super.dataSource=t;var e=t}set isOpen(t){console.log("isOpen: "+t),this._isOpen!=t&&(this._isOpen=t,this._isOpen?this.img_pad.visible=!0:this.img_pad.visible=!1)}};mf=p([RT("A2yeugt8S3Ot7ec482gdhQ")],mf);var df=class extends Laya.Box{};var{regClass:NT}=Laya,hf=class extends df{set dataSource(e){super.dataSource=e,this.tf_date.text=e}onDisable(){}};hf=p([NT("fCHaQKFSQ-ew26uygUCKnQ")],hf);var ff=class extends Laya.Box{};var{regClass:OT}=Laya,yf=class extends ff{set dataSource(e){super.dataSource=e,this.tf_rate.text=`${e}%`}onChange(e){e?(this.selectImg.visible=!0,this.tf_rate.color="#ffffff"):(this.tf_rate.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};yf=p([OT("TToplFpGQGmUqT5SfNnVIg")],yf);var bf=class extends Laya.Dialog{};var{regClass:HT}=Laya,gf=class extends bf{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}onEnable(){this.employList.visible=!1,this.btn_back.on(Laya.Event.CLICK,this,this.closeEmployView)}async setOpenData(e){this.employList.vScrollBarSkin="";let i=e.heroData,n="";if(i){let r=we.formatTimeStamp(Number(i.startTime),"YY-MT-DD HH:MM:SS"),o=we.formatTimeStamp(Number(i.endTime),"YY-MT-DD HH:MM:SS");var e=await A.requestPost("wxgame/lease/heroInfo",{heroPk:i.heroPk});if(e&&e.info){let l=R.intance.m_dicShops.values,c=i.leaseType;if(c==0){let Q=ve.getTitleByGoodsId(l,e.info.ticketId);Q&&(n=d.instance.getLanguage(Q)),e.info.ticketId==0&&(n=d.instance.getLanguage(1260))}else switch(c){case 1:n=d.instance.getLanguage(1261);break;case 2:n=d.instance.getLanguage(1260);break;case 3:n=`${d.instance.getLanguage(1260)}+${d.instance.getLanguage(1261)}`;break}let u="",m=e.info.allTicketCount,g=e.info.remainTicketCount,x=m-g;x<=0?u="0%":u=`${Math.round(e.info.winTimes/x*100)}%`;let w={"Proxy player":i.playerName,Arena:n,"Remaining ticket":[i.remainCount,e.info.ticketId],"Combat scene":`${x}`,"Winner probability":`${u}`,Deserter:`${e.info.taopao}`,"Start date":r,"End date":o},E=Object.getOwnPropertyNames(w).map(Q=>[Q,w[Q]]);this.employList.array=E;let P=-1;this.employList.selectedIndex=P,this.employList.visible=!0;let G=L.instance.m_heroData.heroVoDic.get(i.heroPk);if(this.img_back.skin=C.instance.getHeroBackIcon(G.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(G.heroItem.quality),this.img_hero.skin=G.simgurl,this.tf_name.text=Ce.shortHeroStr(G.name),i.reward&&i.reward.length>0){let Q=ve.findFirstTypeAndNotGold(i.reward);Q?(this.tf_score.text=Q.count,this.img_money.skin=C.instance.getMoneyIcon(Q.id),this.img_money.visible=!0):(this.tf_score.text="0",this.img_money.visible=!1)}else this.tf_score.text="0",this.img_money.visible=!1;let q=G.heroItem.level+"";et.instance.setStar(this,q)}}}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.closeEmployView)}closeEmployView(){this.close()}};gf=p([HT("4pjAWg8HScmRe8ukNRQsGg")],gf);var vf=class extends Laya.Box{};var{regClass:UT}=Laya,Lf=class extends vf{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){super.dataSource=t,this.setEmploy(t)}setEmploy(t){if(!t)return;let e=t[0],i=t[1];this.item_name.text=e,e!=="Remaining ticket"&&e!=="Received"&&e!=="Bonus"&&(this.moneyImg.visible=!1),e==="Agent Date"||e==="End Date"?this.item_value.text=we.formatTimeStamp(Number(i),"YY-MT-DD HH:MM:SS"):e=="Remaining ticket"?(this.item_value.text=i[0],this.moneyImg.skin=`gameIcon/items/item/img_${i[1]}.png`):this.item_value.text=i}};Lf=p([UT("TAG-i7slRsKkXRu8SsaWHg")],Lf);var _f=class extends Laya.Dialog{};var{regClass:VT}=Laya,xf=class extends _f{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}onEnable(){this.list_rental.visible=!1,this.showRentalData(),this.tf_rentedEarned.text=d.instance.getUILang("Rented-earned"),this.tf_proxyEarned.text=d.instance.getUILang("Proxy-earned"),this.tf_winRate.text=d.instance.getUILang("victory")}async showRentalData(){var e=await A.requestPost("wxgame/lease/listAll",{});this.list_rental.array=e.list,this.list_rental.visible=!0,!e.list||e.list.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1,console.log(e)}onDisable(){this.removeEvent()}removeEvent(){}};xf=p([VT("peF5WS5zQgGqZq82ro5IyQ")],xf);var wf=class extends Laya.Box{};var{regClass:FT}=Laya,If=class extends wf{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){super.dataSource=t,this.setEmploy(t)}setEmploy(t){if(!t)return;let e=we.formatDayAndTime(t.startTime),i=we.formatDayAndTime(t.endTime);this.tf_createDate.text=e.date,this.tf_endDate.text=i.date,this.tf_player.text=t.playerName;let n=R.intance.m_dicShops.values,r=t.leaseType;if(r==0){let l=ve.getTitleByGoodsId(n,t.ticketId);l&&(this.tf_arena.text=d.instance.getLanguage(l)),t.ticketId==0&&(this.tf_arena.text=d.instance.getLanguage(1260))}else switch(r){case 1:this.tf_arena.text=d.instance.getLanguage(1261);break;case 2:this.tf_arena.text=d.instance.getLanguage(1260);break;case 3:this.tf_arena.text=`${d.instance.getLanguage(1260)}+${d.instance.getLanguage(1261)}`;break}this.tf_dividends.text=`${t.leaseRatio}%`,this.tf_fight.text=`${t.fightTimes}`,this.tf_vic.text=`${t.winRate}%`;let o=t.leaseReward,s=t.proxyReward;if(o&&o.length>0){let l=ve.findFirstTypeAndNotGold(o);l&&(this.tf_earned.text=Ee.filterNumFormat(l.count,2),this.img_coinType.skin=C.instance.getMoneyIcon(l.id),this.img_coinType.visible=!0)}else this.tf_earned.text="0",this.img_coinType.visible=!1;if(s&&s.length>0){let l=ve.findFirstTypeAndNotGold(s);l&&(this.tf_proxy.text=Ee.filterNumFormat(l.count,2),this.img_coinType2.skin=C.instance.getMoneyIcon(l.id),this.img_coinType2.visible=!0)}else this.tf_proxy.text="0",this.img_coinType2.visible=!1}};If=p([FT("bVHWCHZxQDSIcXWzNcq-MA")],If);var Ef=class extends Laya.Box{};var{regClass:zT,property:lhe}=Laya,Tf=class extends Ef{constructor(){super();this.isAddEvent=!1}set dataSource(e){if(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=C.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}}async setCurrentOutPut(){this.img_back.skin=C.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ce.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";et.instance.setStar(this,e),this.box_show.visible=!0,this.heroVo.state==1?(this.img_state.skin="gameIcon/hero/heroDetail/img_hero_state_2.png",this.img_state.visible=!0):this.heroVo.state==2?(this.img_state.skin="gameIcon/hero/heroDetail/img_hero_state_3.png",this.img_state.visible=!0):this.img_state.visible=!1}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}onDisable(){this.off(Laya.Event.CLICK,this,this.toDetail)}toDetail(){this.heroVo.id&&H.intance.openModule(f.HeroDetailDialog,this.heroVo)}};Tf=p([zT("vJhsY0hvQjyUXjU0-8xV7g")],Tf);var Sf=class extends Laya.Box{};var{regClass:GT}=Laya,Cf=class extends Sf{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,e&&(this.img_coin.skin=C.instance.getMoneyIcon(e.id),this.money_value.text=e.count,this.addEvent())}};Cf=p([GT("TjAZ1yG-QkG5fetB03VUuA")],Cf);var kf=class extends Laya.Scene{};var{regClass:jT,property:khe}=Laya,Af=class extends kf{constructor(){super(...arguments);this.text=""}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP}onEnable(){this.list_hero.vScrollBarSkin="",this.RentalList.visible=!1,this.RevenueList.visible=!1,this.subWalletList.visible=!1,this.btn_sch.on(Laya.Event.CLICK,this,this.onClickSch),this.btn_jia.on(Laya.Event.CLICK,this,this.onClickJia),this.btn_yi.on(Laya.Event.CLICK,this,this.onClickYi),y.intance.on(h.CREATE_SUB_WALLET_SUCCESS,this,this.createSubWalletSuccess),this.btn_subwallet.on(Laya.Event.CLICK,this,this.onClickSubwallet),this.btn_createSubWallet.on(Laya.Event.CLICK,this,this.onClickCreateSubwallet),this.btn_rental.on(Laya.Event.CLICK,this,this.onClickRentalRecord),this.close&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.onClickSch(),this.initHeroData()}async setMoneyData(){let e=await A.requestPost("wxgame/lease/outline",{});if(e&&e.reward){let i=ve.processItemsArray(e.reward)[0];this.RentalList.array=i,this.RentalList.visible=!0}if(e&&e.childReward){let i=ve.processItemsArray(e.childReward)[0];this.RevenueList.array=i,this.RevenueList.visible=!0}}initContainer(e){this.list_hero.visible=!1,this.list_hero.vScrollBarSkin="",this.createHeadList(e)}async createHeadList(e){if(!this)return;let i=e;if(i){this.list_hero.selectedIndex=1,this.list_hero.array=i,this.list_hero.visible=!0,this.tf_heroTotal.text=`${this.list_hero.array.length}`;let n=-1;this.list_hero.selectedIndex=n}(!i||i.length<=0)&&(this.noDataBox.visible=!0)}async initHeroData(){await gt.instance.ownerHero(!0)}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}setTabState(e,i,n,r){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?n:r}onClickSch(){this.box_1.visible=!0,this.list_hero.visible=!1,this.subWalletBox.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_sch,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe"),this.setMoneyData()}async onClickJia(){await gt.instance.ownerHero(),this.box_1.visible=!1,this.list_hero.visible=!0,this.subWalletBox.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_jia,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe");let e=L.instance.m_heroData.heroVoDic.values,i=ve.filterObjectsByState(e,1);this.initContainer(i)}async onClickYi(){await gt.instance.ownerHero(),this.box_1.visible=!1,this.list_hero.visible=!0,this.subWalletBox.visible=!1,this.noDataBox.visible=!1;let e=L.instance.m_heroData.heroVoDic.values,i=ve.filterObjectsByState(e,2);this.initContainer(i),this.setTabState(this.btn_yi,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe")}async onClickSubwallet(){this.box_1.visible=!1,this.list_hero.visible=!1,this.subWalletBox.visible=!0,this.noDataBox.visible=!1,this.setTabState(this.btn_subwallet,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe");var e=await A.requestPost("wxgame/lease/list",{});if(e){let i=e.list;i.sort((r,o)=>o.createTime-r.createTime);let n=e.list.length;for(let r=0;r<i.length;r++)i[r].rank=r+1;if(i){this.subWalletList.selectedIndex=1,i.push(void 0),i.push(void 0),i.push(void 0),this.subWalletList.array=i,this.tf_subTotal.text=`${n}`,this.subWalletList.visible=!0;let r=-1;this.subWalletList.selectedIndex=r}(!i||i.length<=0)&&(this.noDataBox.visible=!0)}}createSubWalletSuccess(){Laya.timer.once(800,this,this.onClickSubwallet)}onClickCreateSubwallet(){H.intance.openModule(f.CreateSubWalletDialog)}onClickRentalRecord(){H.intance.openModule(f.RentalRecordDialog)}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene),this.btn_sch.off(Laya.Event.CLICK,this,this.onClickSch),this.btn_jia.off(Laya.Event.CLICK,this,this.onClickJia),this.btn_yi.off(Laya.Event.CLICK,this,this.onClickYi),this.btn_subwallet.off(Laya.Event.CLICK,this,this.onClickSubwallet),this.btn_createSubWallet.off(Laya.Event.CLICK,this,this.onClickCreateSubwallet)}};Af=p([jT("eB5n1zn1RD2i2F-bAki-sQ")],Af);var Df=class extends Laya.Box{};var{regClass:qT}=Laya,Mf=class extends Df{constructor(){super();this.isAddEvent=!1;this.allData=null}set dataSource(e){if(super.dataSource=e,!e){this.visible=!1;return}this.allData=e,y.intance.on(h.CHANGE_WALLET_HERO_AIR,this,this.onAirHeroChange),this.btn_add.on(Laya.Event.CLICK,this,this.onClickAdd,[e]),this.img_noHero.on(Laya.Event.CLICK,this,this.onClickNohero),this.tf_address.on(Laya.Event.BLUR,this,this.setPlayerName),this.setData()}setData(){this.dataBox.visible=this.allData.establish,this.btn_add.visible=!this.allData.establish,this.allData.hero?this.showHeroData(this.allData.hero):(this.box_show.visible=!1,this.img_back.visible=!1,this.img_noHero.visible=!0),this.allData.walletAddress.length>0?this.tf_address.text=this.allData.walletAddress:this.tf_address.text="",this.allData.name.length>0?this.tf_playerName.text=this.allData.name:this.tf_playerName.text=""}onClickAdd(){y.intance.event(h.ADD_AIR_WALLET_ITEM,[this.allData.index])}onClickNohero(){y.intance.event(h.AIR_SUB_WALLET_OPENHERO,[this.allData.index])}onAirHeroChange(e,i){!e||i!==this.allData.index||this.showHeroData(e)}showHeroData(e){this.allData.hero=e,this.box_show.visible=!0,this.img_back.visible=!0,this.img_noHero.visible=!1,this.img_back.skin=C.instance.getHeroBackIcon(e.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(e.heroItem.quality),this.img_hero.skin=e.simgurl,this.tf_name.text=Ce.shortHeroStr(e.name);let i=e.heroItem.level+"";et.instance.setStar(this,i)}async setPlayerName(){try{if(this.tf_address.text=="")return;if(this.tf_address.text==j.instance.walletAddress){B.instance.notice(d.instance.getLanguage(1162));return}var e=await A.requestPost("wxgame/sys/queryName",{openid:this.tf_address.text.toLowerCase()});e&&(console.log(e),this.tf_playerName.text=e.name,y.intance.event(h.ADD_AIR_SUB_WALLET_NAME,[{name:e.name,walletAddress:this.tf_address.text,index:this.allData.index}]))}catch{console.log("未找到该玩家，请核对地址")}}onDisable(){}};Mf=p([qT("8bSpqI3UR8KoEpwSxDv_7g")],Mf);var Bf=class extends Laya.Box{};var{regClass:WT}=Laya,Pf=class extends Bf{constructor(){super();this.isAddEvent=!1;this.heroPk=null}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,!e){this.visible=!1;return}let{rank:i,heroPk:n,ticketId:r,playerName:o,remainCount:s,reward:l,leaseType:c}=e;this.tf_rank.text=i,this.heroPk=n;let u=R.intance.m_dicShops.values;if(c==0){let m=ve.getTitleByGoodsId(u,r);m&&(this.tf_arena.text=d.instance.getLanguage(m)),r==0&&(this.tf_arena.text=d.instance.getLanguage(1260))}else switch(c){case 1:this.tf_arena.text=d.instance.getLanguage(1261);break;case 2:this.tf_arena.text=d.instance.getLanguage(1260);break;case 3:this.tf_arena.text=`${d.instance.getLanguage(1260)}+${d.instance.getLanguage(1261)}`;break}if(this.tf_name.text=o,this.tf_venue.text=s,this.btn_detail.off(Laya.Event.CLICK,this,this.onClickDetail),this.btn_detail.on(Laya.Event.CLICK,this,this.onClickDetail,[e]),this.addEvent(),l&&l.length>0){let m=ve.findFirstTypeAndNotGold(l);m&&(this.tf_score.text=m.count,this.img_money.skin=C.instance.getMoneyIcon(m.id),this.img_money.visible=!0)}else this.tf_score.text="0",this.img_money.visible=!1}onClickDetail(e){H.intance.openModule(f.EmployInfoDialog,{heroData:e})}onDisable(){this.btn_detail&&this.btn_detail.off(Laya.Event.CLICK,this,this.onClickDetail)}};Pf=p([WT("5iGLLzQkR8mqhVsrdybXCQ")],Pf);var Rf=class extends Laya.Box{};var{regClass:KT}=Laya,Nf=class extends Rf{set dataSource(e){e&&(super.dataSource=e,e.name=="Professional & Airdrop"?this.tf_rate.text="Professional & Airdrop":this.tf_rate.text=`${d.instance.getLanguage(e.name)}`)}onChange(e){e?(this.selectImg.visible=!0,this.tf_rate.color="#ffffff"):(this.tf_rate.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};Nf=p([KT("_iWKrJX7QK6BqGFWXcrKUw")],Nf);var Of=class extends Laya.Dialog{};var{regClass:YT}=Laya,Hf=class extends Of{constructor(e){super();this.itemIndex=-1;this.heroList=[];this.useHeroList=[]}onEnable(){console.log(L.instance.playerDto.fightHeroPk),this.list_hero.visible=!1,this.createHeadList(),this.btn_transfer.on(Laya.Event.CLICK,this,this.onBtnTramsfer)}async setOpenData(e){this.itemIndex=e[0],this.useHeroList=e[1]}onBtnTramsfer(){let e=this.list_hero.selectedIndex;if(e<0){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1167),N.YES);return}let i=this.heroList[e];this.itemIndex!==-1?y.intance.event(h.CHANGE_WALLET_HERO_AIR,[i,this.itemIndex]):y.intance.event(h.CHANGE_WALLET_HERO,i),console.log("onBtnTramsfer",e),this.close()}async createHeadList(){if(!this)return;await gt.instance.ownerHero();let e=L.instance.m_heroData.heroVoDic.values;if(this.itemIndex!==-1?this.heroList=ve.filterObjectsByState(e,0,this.useHeroList):this.heroList=ve.filterObjectsByState(e,0),this.heroList){this.list_hero.selectedIndex=1,this.list_hero.array=this.heroList,this.list_hero.visible=!0;let i=-1;this.list_hero.selectedIndex=i}}onDisable(){this.btn_transfer.off(Laya.Event.CLICK,this,this.onBtnTramsfer)}};Hf=p([YT("8aIFsnkXTaWPXwTKHxCGpQ")],Hf);var Uf=class extends Laya.Dialog{};var{regClass:$T}=Laya,Vf=class extends Uf{constructor(e){super();this.propValue=1;this.propNum=1;this.propData=null;this.items=[]}onEnable(){this.txt_num.text="1",this.listPanel1.visible=!1,this.btn_subtract.on(Laya.Event.CLICK,this,this.changePropNum,[!1]),this.btn_add.on(Laya.Event.CLICK,this,this.changePropNum,[!0]),this.listPanel1.selectHandler=new Laya.Handler(this,this.handleSelectProp),this.btn_transfer.on(Laya.Event.CLICK,this,this.onBtnTramsfer),this.initPropList()}changePropNum(e){e?this.propValue=Math.min(this.propValue+1,this.propNum):this.propValue=Math.max(this.propValue-1,1),this.txt_num.text=`${this.propValue}`}async initPropList(){await gt.instance.ownerBag();var e=this.getItemByType();console.log(e),this.propData=e,this.listPanel1.array=e,this.listPanel1.selectedIndex=0,this.listPanel1.visible=!0}handleSelectProp(e){if(e!==-1){this.propValue=1,this.txt_num.text="1";let i=this.listPanel1.selectedItem;i&&(this.propNum=Number(i._m_iNum),console.log(this.propNum))}}onBtnTramsfer(){let e=this.propData[this.listPanel1.selectedIndex],i=this.propValue;if(i<=0||!e){se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1166),N.YES);return}y.intance.event(h.CHANGE_WALLET_PROP,[e,i]),this.close()}getItemByType(){this.items=[];for(var e=L.instance.m_packageData.getListBySubType(7),i=0;i<e.length;i++){var n=e[i];this.items.push(n)}return this.items}onDisable(){this.btn_subtract.off(Laya.Event.CLICK,this,this.changePropNum),this.btn_add.off(Laya.Event.CLICK,this,this.changePropNum),this.btn_transfer.off(Laya.Event.CLICK,this,this.onBtnTramsfer)}};Vf=p([$T("WY66k0UbQfiwaG80emIzjA")],Vf);var Ff=class extends Laya.Box{};var{regClass:XT}=Laya,zf=class extends Ff{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.addEvent(),this.setCurrentOutPut(e)}async setCurrentOutPut(e){if(e){let i=R.intance.m_dicItems.get(e.ticketId.toString());this.txt_num.text=""+Ee.formatNumber(e.ticketCount,8),this.img_icon.skin=C.instance.getItemIcon(i.icon),this.img_box.skin="gameIcon/items/itemBg/img_"+i.quality+".png"}else this.txt_num.text="",this.img_icon.skin=null,this.img_box.skin="gameIcon/items/itemBg/img_0.png"}};zf=p([XT("QLIqcx2YSRWf6b4T0P4N6Q")],zf);var Gf=class extends Laya.Box{};var{regClass:QT}=Laya,jf=class extends Gf{set dataSource(e){super.dataSource=e,e&&(this.tf_data.text=e)}onDisable(){}onChange(e){e?(this.selectImg.visible=!0,this.tf_data.color="#ffffff"):(this.tf_data.color="#357cc0",this.selectImg.visible=!1)}};jf=p([QT("3viWNkWoRRS9EWM3SzguDg")],jf);var qf=class extends Laya.Box{};var{regClass:ZT}=Laya,Wf=class extends qf{constructor(){super(...arguments);this.coins=[[3001,2],[3011,2],[3013,4],[3010,2],[3007,4],[3006,6],[3015,2],[3016,2],[3005,0]]}onEnable(){let e=(Laya.stage.width-$.DESIGN_WIDTH)/2;this.img_coinsBg.right-=e,console.log("dWidth: "+e),this.updateLocalAssets(),y.intance.on(h.ROLE_INFO_CHANGE,this,this.updateLocalAssets),y.intance.on(St.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),this.coins=R.intance.getGeneralValueById(19),this.list_coin.array=this.coins}onDisable(){y.intance.off(h.ROLE_INFO_CHANGE,this,this.updateLocalAssets),y.intance.off(St.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets)}updateLocalAssets(){this.list_coin.refresh()}};Wf=p([ZT("7P9MlqipSaG6QoKpQowDbQ")],Wf);var Kf=class extends Laya.Box{};var{regClass:JT}=Laya,Yf=class extends Kf{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.heroVo=e,this.heroVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.heroSk.dataSource=this.heroVo,this.tf_name.text=Ce.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";et.instance.setStar(this,e)}};Yf=p([JT("IcuwbMwvRKqMyiXxDzW-dA")],Yf);var $f=class extends Laya.Dialog{};var{regClass:eS}=Laya,Xf=class extends $f{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}onEnable(){this.initContainer(),Ne.instance.playSoundByName(Ne.soundName32)}initContainer(){var e=je.instance.getOneItem();e&&this.showItem(e)}showItem(e){let i=this.heroListItem;i.dataSource=e}onDisable(){y.intance.event(h.EVENT_CHECK_REMAIN,f.HeroGetDialog)}};Xf=p([eS("mrqJhWahTxuTjeSGIs559Q")],Xf);var Qf=class extends Laya.Box{};var{regClass:tS}=Laya,Zf=class extends Qf{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.shopItem=e,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.tf_name.text=d.instance.getLanguage(this.shopItem.title),this.shopItem.cost.length>1?(this.img_const.skin=C.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=Ee.formatNumber(this.shopItem.cost[1])+"",this.img_const.visible=!0,this.tf_const.visible=!0,this.gray=this.shopItem.open==0,this.disabled=!1):(this.disabled=!0,this.img_const.visible=!1,this.tf_const.visible=!1),this.shopItem.type==1?(this.tf_name.color=ga.qualityColors[parseInt(this.shopItem.icon)-1],this.img_bg.skin=C.instance.getHeroQuality(this.shopItem.icon),this.img_icon.skin=C.instance.getHeroEggIcon(this.shopItem.icon)):this.shopItem.type==4&&(this.tf_name.color=ga.qualityColors[parseInt(this.shopItem.icon)-1],this.img_bg.skin=C.instance.getHeroQuality(this.shopItem.icon),this.img_icon.skin=C.instance.getChestIcon(this.shopItem.icon))}};Zf=p([tS("awS07ko0RBaxCnxXWqiR4g")],Zf);var Jf=class extends Laya.Box{};var{regClass:iS}=Laya,ey=class extends Jf{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.shopItem=e,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){if(this.tf_name.text=d.instance.getLanguage(this.shopItem.title),this.img_const.skin=C.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=Ee.formatNumber(this.shopItem.cost[1])+"",this.shopItem.type==2){var e=R.intance.m_dicItems.get(this.shopItem.icon);this.img_bg.skin=C.instance.getItemQualityIcon(e.quality+""),this.tf_name.color=ga.qualityColors[e.quality-1],this.img_icon.skin=C.instance.getItemIcon(this.shopItem.icon)}}};ey=p([iS("din69PYeRbSapMB2H6E06g")],ey);var ty=class extends Laya.Scene{};var{regClass:aS}=Laya,iy=class extends ty{constructor(){super(...arguments);this.currTab=0;this.type=1;this.selectItemId=-1;this.addL=1;this.price=0;this.isSkReady=!1}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP}onOpened(e){e&&e.length>0&&(this.type=e[0],e[1]!=null&&(this.selectItemId=e[1]),this.onClickTab(this.type))}onEnable(){y.intance.on(h.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),y.intance.on(h.EVENT_END_HEROBUY,this,this.onWaitHeroInfoBack),this.btn_recruit.on(Laya.Event.CLICK,this,this.onRecruit),this.btn_reduce.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_reduce]),this.btn_plus.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_plus]),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,[],!1),this.listPanel2.vScrollBarSkin="",this.listPanel2.selectHandler=Laya.Handler.create(this,this.onSelectItem,[],!1),this.img_sk.on(Laya.Event.PLAYED,this,this.stopAni,[2]),this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-$.DESIGN_HEIGHT)/2}async onRecruit(){if(this.shopItem.open==0&&$.Debug==0){B.instance.notice(d.instance.getLanguage(12));return}this.shopItem.type==1?$.Debug==2?(this.setChou1Ani("animation"+this.shopItem.icon+"_1"),await gt.instance.recruit1(this.shopItem.id)):B.instance.notice(d.instance.getLanguage(12)):await gt.instance.recruitItem(this.shopItem.id,this.addL)}onWaitHeroInfoBack(){this.setChou2Ani("animation"+this.shopItem.icon+"_2"),me.instance.hideLoading()}setTab(e){for(let i=1;i<7;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+"_s.png"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+".png")}async initLuckDrawView(){this.destroyed||(this.type?this.onClickTab(this.type):this.onClickTab(1))}onClickTab(e){if(this.currTab!=e){if(this.setTab(e),this.box_2.visible=!0,e==1){var i=this.getItemByType(1);this.shopItems=i[0],this.listPanel1.array=this.shopItems,this.listPanel1.selectedIndex=-1,this.listPanel1.selectedIndex=i[1],this.listPanel1.visible=!0,this.listPanel2.visible=!1}else if(e==2){var i=this.getItemByType(2);this.shopItems=i[0],this.listPanel2.dataSource=this.shopItems,this.listPanel2.selectedIndex=-1,this.listPanel2.selectedIndex=i[1],this.listPanel2.visible=!0,this.listPanel1.visible=!1}else if(e==3){var i=this.getItemByType(4);this.shopItems=i[0],this.listPanel1.dataSource=this.shopItems,this.listPanel1.selectedIndex=-1,this.listPanel1.selectedIndex=i[1],this.listPanel1.visible=!0,this.listPanel2.visible=!1}}}getItemByType(e){var i=R.intance.m_dicShops.values,n=[],r=-1,o=0;return i.forEach(s=>{s.type==e&&(n.push(s),this.selectItemId!=-1&&s.icon==this.selectItemId&&(r=o,this.selectItemId=-1),o++)}),r==-1&&n.length>0&&(r=0),[n,r]}onSelectItem(e){if(this.shopItem=this.shopItems[e],console.log(this.shopItem),this.shopItem){if(this.tf_name.text=d.instance.getLanguage(this.shopItem.title),this.tf_des.text=d.instance.getLanguage(this.shopItem.des),this.shopItem.cost.length>1)this.img_const.skin=C.instance.getMoneyIcon(this.shopItem.cost[0]),this.addL=1,this.price=Ee.formatNumber(this.shopItem.cost[1]);else if(this.shopItem.open==0){B.instance.notice(d.instance.getLanguage(12));return}this.setPriceByNum();var i=this.shopItem.type;this.btn_recruit.disabled=!1,i==1?($.Debug<2&&(this.btn_recruit.disabled=!0),this.img_icon.visible=!1,this.img_sk.visible=!0,this.setIdleAni("animation"+this.shopItem.icon+"_0"),this.box_count.visible=!1):i==2?(this.img_icon.skin=C.instance.getItemBigIcon(this.shopItem.icon),this.img_icon.y=60,this.img_icon.visible=!0,this.img_sk.visible=!1,this.box_count.visible=!0):i==4&&(this.img_icon.skin=C.instance.getChestBigIcon(this.shopItem.icon),this.img_icon.y=110,this.img_icon.visible=!0,this.img_sk.visible=!1,this.box_count.visible=!1),this.btn_recruit.visible=!0}else this.tf_name.text="",this.tf_des.text="",this.img_icon.visible=!1,this.img_sk.visible=!1,this.box_count.visible=!1,this.btn_recruit.visible=!1}handleClickBtn(e){switch(e){case this.btn_reduce:this.addL>1&&this.addL--,this.setPriceByNum();break;case this.btn_plus:this.addL<100&&this.addL++,this.setPriceByNum();break}}setPriceByNum(){this.tf_num.text=this.addL+"",this.tf_const.text=Ee.filterNumFormat(this.addL*this.price,8,!0)}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}stopAni(e){console.log("stopAni: "+e),this.isSkReady||(this.isSkReady=!0,this.callLater(this.stopSk))}stopSk(){this.img_sk.paused(),this.img_sk.stop()}setIdleAni(e){this.isSkReady?(this.img_sk.play(e,!1),this.img_sk.stop()):this.img_sk.animationName=e}setChou1Ani(e){this.isSkReady?this.img_sk.play(e,!0):this.img_sk.animationName=e}setChou2Ani(e){this.isSkReady?this.img_sk.play(e,!1):this.img_sk.animationName=e,Laya.timer.once(800,this,this.openHeroGetView)}openHeroGetView(){je.instance.autoPop=!0,$t.instance.startShow(),this.setIdleAni("animation"+this.shopItem.icon+"_0")}onDrawBack(e){}startAni(){this.img_sk.paused(),this.img_sk.play(0,!1)}removeEvent(){y.intance.off(h.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),y.intance.off(h.EVENT_END_HEROBUY,this,this.onWaitHeroInfoBack)}};iy=p([aS("IPCUkD5kRse3Gz5tw0Aovw")],iy);var ay=class extends Laya.Dialog{};var{regClass:nS}=Laya,ny=class extends ay{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_POP;this.m_iPositionType=M.CENTER}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem.id;L.instance.guildIcon=i,this.unionIcon.headSkin=L.instance.guildIcon}}createHeadList(){let e=R.intance.m_dicIconBadge;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,n=0;this.unionIcon.headSkin=L.instance.guildIcon;for(let r of e.values){if(r.id==L.instance.guildIcon){i=n;break}n++}this.list_head.selectedIndex=i}onRegister(){let e=L.instance.guildIcon;y.intance.event(h.EVENT_MODIFY_HEAD,[e]),this.close()}};ny=p([nS("VhAfw9RDSVu06yGY3eOJbg")],ny);var ry=class extends Laya.Dialog{};var{regClass:rS}=Laya,oy=class extends ry{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER}onEnable(){y.intance.on(h.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_change.on(Laya.Event.CLICK,this,this.onChangeHead),this.btn_apply.on(Laya.Event.CLICK,this,this.onApply)}setOpenData(e){if(console.log("setOpenData: ",e),e){var i=e[0];this.onSetUnionInfo(i),this.subUnionDto=e[1],this.onSetSubUnionInfo(this.subUnionDto)}}onBack(){this.close()}onSetUnionInfo(e){e&&(this.tf_guildName.text=d.instance.getMultiLan(e.unionName)),this.tf_heroNum.text=L.instance.m_heroData.getCount()+"",this.tf_address.text=Ce.formatWalletAddress(j.instance.walletAddress)}onSetSubUnionInfo(e){if(this.subUnionDto){this.input_name.text=d.instance.getMultiLan(e.unionName),this.textArea_des.text=d.instance.getMultiLan(e.desc),this.input_address.text=e.collectionToken,this.unionIcon.headSkin=e.icon;var i=e.status;this.onSetState(i)}else this.unionIcon.headSkin=L.instance.guildIcon,this.onSetState(0)}onSetState(e){e==1?(this.img_underReview.visible=!0,this.img_notPassed.visible=!1,this.btn_apply.visible=!1):e==2?(this.img_underReview.visible=!1,this.img_notPassed.visible=!0,this.btn_apply.visible=!0):(this.img_underReview.visible=!1,this.img_notPassed.visible=!1,this.btn_apply.visible=!0)}onChangeModifyHead(e){L.instance.guildIcon=e,this.unionIcon.headSkin=e}onChangeHead(){H.intance.openModule(f.ChangeUnionIconDialog)}async onApply(){let e=this.input_name.text,i=this.textArea_des.text,n=this.input_address.text;if(e=e.trim(),!L.instance.guildIcon){B.instance.notice(d.instance.getLanguage(1189));return}if(e==""){B.instance.notice(d.instance.getLanguage(31));return}if(i==""){B.instance.notice(d.instance.getLanguage(1190));return}if(n==""){B.instance.notice(d.instance.getLanguage(1191));return}let r={icon:L.instance.guildIcon,name:e,intro:i,recAddress:n};var o=await A.requestPost("wxgame/union/create",r);if(o&&o.unionBaseDto){var s=o.unionBaseDto.status;this.onSetState(s),B.instance.notice(d.instance.getLanguage(1192)),y.intance.event(h.EVENT_SUB_GUILD_UPDATE)}}onDisable(){this.removeEvent()}removeEvent(){y.intance.off(h.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead)}};oy=p([rS("K1XqPbcNQUGnysSD4yhBLQ")],oy);var sy=class extends Laya.Dialog{};var{regClass:oS}=Laya,ly=class extends sy{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER}onEnable(){this.btn_memberList.on(Laya.Event.CLICK,this,this.onShowMemberList),this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_applicationList.on(Laya.Event.CLICK,this,this.onShowApplicationList),this.btn_referral.on(Laya.Event.CLICK,this,this.onShowReferralList),this.refreshApplyBtnRed(),Laya.timer.loop(1e3,this,this.refreshApplyBtnRed)}setOpenData(e){if(console.log("setOpenData: ",e),e){var i=e[0];this.onSetUnionInfo(i),this.subUnionDto=e[1],this.onSetSubUnionInfo(this.subUnionDto)}}onShowApplicationList(){H.intance.openModule(f.UnionMemberApplyView,this.subUnionDto.id)}onShowReferralList(){H.intance.openModule(f.UnionReferralView,this.subUnionDto.id)}onBack(){this.close()}onShowMemberList(){this.subUnionDto&&H.intance.openModule(f.UnionMemberView,[this.subUnionDto,!0])}onSetUnionInfo(e){e&&(this.tf_guildName.text=d.instance.getMultiLan(e.unionName)),this.tf_heroNum.text=L.instance.m_heroData.getCount()+"",this.tf_address.text=Ce.formatWalletAddress(j.instance.walletAddress)}refreshApplyBtnRed(){this.img_red_1.visible=L.instance.getRedDotById(Ze.RED_GUILD_APPLY)}onSetSubUnionInfo(e){e?(this.unionIcon.dataSource=e,this.tf_name.text=d.instance.getMultiLan(e.unionName),this.tf_des.text=d.instance.getMultiLan(e.desc),this.tf_lv.text=d.instance.getUILang("LV.")+e.lv,this.tf_num.text="<font color='#25ff63'>"+e.memberNum+"</font>/"+e.maxMemberNum,this.img_lvIcon.skin=C.instance.getUnionLvIcon(e.lv),this.box_show.visible=!0,this.tf_receiveAddress.text=Ce.formatWalletAddress(e.collectionToken),this.btn_applicationList.visible=e.leader==L.instance.playerDto.pid,this.btn_referral.visible=e.leader==L.instance.playerDto.pid):this.box_show.visible=!1}onDisable(){Laya.timer.clearAll(this)}};ly=p([oS("qhJFEWQoRbixaYt5MGd9TQ")],ly);var cy=class extends Laya.Scene{};var{regClass:sS}=Laya,uy=class extends cy{constructor(){super(...arguments);this.currTab=0;this.currUnionId=1;this.createStatus=0}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP}onOpened(e){this.box_show.visible=!1,this.currUnionId=e,this.initLuckDrawView()}onEnable(){y.intance.on(h.EVENT_SUB_GUILD_UPDATE,this,this.initSubGuild),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_apply.on(Laya.Event.CLICK,this,this.onApply),this.btn_memberList.on(Laya.Event.CLICK,this,this.onShowMemberList),this.btn_guildList.on(Laya.Event.CLICK,this,this.onShowGuildList),this.btn_applicationList.on(Laya.Event.CLICK,this,this.onShowApplicationList),this.btn_referral.on(Laya.Event.CLICK,this,this.onShowReferralList),Laya.timer.loop(1e3,this,this.refreshApplyBtnRed)}refreshApplyBtnRed(){!this.btn_apply.disabled&&this.tf_createSub.text==d.instance.getUILang("My Guild")?this.img_red_1.visible=L.instance.getRedDotById(Ze.RED_GUILD_APPLY):this.img_red_1.visible=!1,this.btn_applicationList.disabled?this.img_red_2.visible=!1:this.img_red_2.visible=L.instance.getRedDotById(Ze.RED_GUILD_APPLY)}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}onApply(){this.createStatus==2?this.subUnionDto.status==0?H.intance.openModule(f.MySubUnionView,[this.unionDto,this.subUnionDto]):H.intance.openModule(f.CreateSubUnionView,[this.unionDto,this.subUnionDto]):H.intance.openModule(f.CreateSubUnionView,[this.unionDto,this.subUnionDto])}onShowMemberList(){this.unionDto&&H.intance.openModule(f.UnionMemberView,[this.unionDto,!1])}onShowGuildList(){H.intance.openModule(f.UnionListView)}onShowApplicationList(){H.intance.openModule(f.UnionMemberApplyView,this.unionDto.id)}onShowReferralList(){H.intance.openModule(f.UnionReferralView,this.unionDto.id)}async initLuckDrawView(){var e=L.instance.playerDto.union,i=await A.requestPost("wxgame/union/info",{unionId:this.currUnionId});this.unionDto=i.unionDto,this.unionDto?this.onSetUnionInfo(this.unionDto):B.instance.notice(d.instance.getLanguage(135)),this.initSubGuild()}async initSubGuild(){var e=await A.requestPost("wxgame/union/createInfo",{});e?(this.createStatus=e.createStatus,e.unionBaseDto?(this.subUnionDto=e.unionBaseDto,this.btn_apply.disabled=!1,this.tf_createSub.text=d.instance.getUILang("My Guild")):this.createStatus==0?this.btn_apply.disabled=!0:this.createStatus==1?this.btn_apply.disabled=!1:this.createStatus==2&&(e.unionBaseDto.status==0?(this.btn_apply.disabled=!1,this.tf_createSub.text=d.instance.getUILang("My Guild")):(this.btn_apply.disabled=!1,this.tf_createSub.text=d.instance.getUILang("My Guild")))):B.instance.notice(d.instance.getLanguage(135))}onSetUnionInfo(e){e?(this.unionIcon.dataSource=e,this.tf_name.text=d.instance.getMultiLan(e.unionName),this.tf_des.text=d.instance.getMultiLan(e.desc),this.tf_lv.text=d.instance.getUILang("LV.")+e.lv,this.tf_num.text="<font color='#25ff63'>"+e.memberNum+"</font>/"+e.maxMemberNum,this.img_lvIcon.skin=C.instance.getUnionLvIcon(e.lv),this.box_show.visible=!0,e.parentId>0?(this.btn_applicationList.disabled=!0,this.btn_referral.disabled=!0):e.leader!=L.instance.playerDto.pid?(this.btn_applicationList.disabled=!0,this.btn_referral.disabled=!0):this.subUnionDto?(this.btn_applicationList.disabled=!1,this.btn_referral.disabled=!1):(this.btn_applicationList.disabled=!1,this.btn_referral.disabled=!1)):this.box_show.visible=!1}onDisable(){y.intance.off(h.EVENT_SUB_GUILD_UPDATE,this,this.initSubGuild),Laya.timer.clearAll(this)}};uy=p([sS("KR8HZN1dSv2Bz_62yIgOrg")],uy);var py=class extends Laya.Box{};var{regClass:lS}=Laya,my=class extends py{constructor(){super();this.isAddEvent=!1;this.addL=1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.tf_uid.on(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),this.btn_add.on(Laya.Event.CLICK,this,this.onAdd),this.btn_reduce.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_reduce]),this.btn_plus.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_plus]),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.ticketMemberAddressVo=e,console.log("data: ",e),this.ticketMemberAddressVo?(this.btn_add.visible=!1,this.box_address.visible=!0,this.tf_uid.text=this.ticketMemberAddressVo.openid,this.tf_player_name.text=this.ticketMemberAddressVo.playerName,console.log("data1: ",e),this.knapsackItem.dataSource=this.ticketMemberAddressVo.itemVo,this.tf_num.text=this.ticketMemberAddressVo.num+""):(this.btn_add.visible=!0,this.box_address.visible=!1,console.log("data2: ",e)),this.addEvent()}onAdd(){y.intance.event(h.EVENT_ADD_TICKET_ADDRESS)}async setPlayerName(){try{if(this.tf_uid.text=="")return;this.ticketMemberAddressVo.openid=this.tf_uid.text.toLowerCase();var e=await A.requestPost("wxgame/sys/queryName",{openid:this.tf_uid.text.toLowerCase()});e&&(console.log(e),this.tf_player_name.text=e.name,this.ticketMemberAddressVo.checked=!0,this.ticketMemberAddressVo.playerName=e.name)}catch{console.log("未找到该玩家，请核对地址")}}uidFocus(){this.ticketMemberAddressVo.openid="",this.ticketMemberAddressVo.playerName="",this.ticketMemberAddressVo.checked=!1,this.tf_uid.text="",this.tf_player_name.text=""}handleClickBtn(e){switch(e){case this.btn_reduce:this.addL>1&&this.addL--,this.setItemNum();break;case this.btn_plus:this.addL<100&&this.addL++,this.setItemNum();break}}setItemNum(){this.tf_num.text=this.addL+"",this.ticketMemberAddressVo.num=this.addL}};my=p([lS("KK3UEIk8ToiricaiUr9L3A")],my);var dy=class extends Laya.Dialog{};var hy=class{};var{regClass:cS}=Laya,fy=class extends dy{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_transfer.on(Laya.Event.CLICK,this,this.onTransferItem),y.intance.on(h.EVENT_ADD_TICKET_ADDRESS,this,this.onAddticketAddress)}setOpenData(e){console.log("setOpenData: ",e),this.itemVo=e,this.list_address.array=[null]}onBack(){this.close()}async onTransferItem(){var e=[];if(this.list_address.array.forEach(n=>{n&&n.checked&&n.playerName&&n.openid&&n.num>0&&e.push({address:n.openid,num:n.num})}),e.length>0){var i=await A.requestPost("wxgame/equip/ticketTransfer",{list:e,id:this.itemVo.m_iId});i?(B.instance.notice(d.instance.getLanguage(2e3)),y.intance.event(h.EVENT_REFRESH_KNAPSACK)):B.instance.notice(d.instance.getLanguage(135))}else B.instance.notice(d.instance.getLanguage(1348))}onAddticketAddress(){console.log("onAddticketAddress: ",this.list_address.array);let e=new hy;e.num=1,e.itemVo=this.itemVo,this.list_address.array||(this.list_address.array=[null]),this.list_address.setItem(this.list_address.array.length-1,e),this.list_address.addItem(null),this.list_address.refresh(),this.list_address.tweenTo(this.list_address.array.length-1)}onDisable(){this.removeEvent()}removeEvent(){}};fy=p([cS("oLjG6sBpQqemEHt7q1F9GA")],fy);var yy=class extends Laya.Box{};var{regClass:uS}=Laya,by=class extends yy{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){this.unionItem=e,this.unionItem&&(this.addEvent(),this.setCurrentOutPut())}set headSkin(e){this.img_head.skin=C.instance.getUnionIcon(e)}async setCurrentOutPut(){if(!this.unionItem)return;let e=this.unionItem.icon;this.img_head.skin=C.instance.getUnionIcon(e)}toDetail(){}};by=p([uS("lK37x6YwQ9umJIqReZht4Q")],by);var gy=class extends Laya.Box{};var{regClass:pS}=Laya,vy=class extends gy{set dataSource(e){super.dataSource=e,this.iconBadgeItem=e,this.iconBadgeItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.unionIcon.headSkin=this.iconBadgeItem.id}};vy=p([pS("TRVoEDtUSRaEW71V6oCpew")],vy);var Ly=class extends Laya.Box{};var{regClass:mS}=Laya,_y=class extends Ly{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.btn_viewMembers.on(Laya.Event.CLICK,this,this.onViewMeber),this.isAddEvent=!0)}onViewMeber(){H.intance.openModule(f.UnionMemberView,[this.unionDto,!1])}set dataSource(e){super.dataSource=e,this.unionDto=e,this.unionDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.unionIcon.dataSource=this.unionDto,this.tf_name.text=d.instance.getMultiLan(this.unionDto.unionName),this.tf_lv.text=d.instance.getUILang("LV.")+this.unionDto.lv,this.tf_num.text="<font color='#25ff63'>"+this.unionDto.memberNum+"</font>/"+this.unionDto.maxMemberNum,this.img_lvBg.skin=C.instance.getUnionLvDiIcon(this.unionDto.lv),this.img_lvIcon.skin=C.instance.getUnionLvIcon(this.unionDto.lv)}onChange(e){e?this.bg.skin="res/union1/img_trade_bg_2.png":this.bg.skin="res/union1/img_trade_bg_1.png"}};_y=p([mS("eauuiADeT9SAqEYe1ms81w")],_y);var xy=class extends Laya.Dialog{};var{regClass:dS}=Laya,wy=class extends xy{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack)}onOpened(e){this.initLuckDrawView()}setOpenData(e){}async initLuckDrawView(){var e=await A.requestPost("wxgame/union/list",{});if(e){this.list_guild.array=e.unionList;let i=-1;this.list_guild.selectedIndex=i}else B.instance.notice(d.instance.getLanguage(135))}onBack(){this.close()}onDisable(){this.removeEvent()}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};wy=p([dS("vJwx3qloTmiGGRpFF6Qm1A")],wy);var Iy=class extends Laya.Box{};var{regClass:hS}=Laya,Ey=class extends Iy{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_agree.on(Laya.Event.CLICK,this,this.onAgree),this.btn_refuse.on(Laya.Event.CLICK,this,this.onRefuse),this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.isAddEvent=!0)}onCopy(){let e=this.unionApplyMemberDto.address;doCopy(e),B.instance.notice(d.instance.getLanguage(132))}async onAgree(){if(this.unionApplyMemberDto.pid){var e=await A.requestPost("wxgame/union/doAudit",{uid:this.unionApplyMemberDto.uid,playerId:this.unionApplyMemberDto.pid,agree:!0});e&&B.instance.notice(d.instance.getLanguage(1193)),y.intance.event(h.EVENT_UNION_APPLY_MEMBER_UPDATE)}}async onRefuse(){if(this.unionApplyMemberDto.pid){var e=await A.requestPost("wxgame/union/doAudit",{uid:this.unionApplyMemberDto.uid,playerId:this.unionApplyMemberDto.pid,agree:!1});e&&B.instance.notice(d.instance.getLanguage(1194)),y.intance.event(h.EVENT_UNION_APPLY_MEMBER_UPDATE)}}set dataSource(e){super.dataSource=e,this.unionApplyMemberDto=e,this.unionApplyMemberDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.unionApplyMemberDto.head;this.playerIcon.headSkin=e,this.img_flag.skin=C.instance.getCountryIcon(this.unionApplyMemberDto.country),this.tf_name.text=this.unionApplyMemberDto.name,this.tf_fightTimes.text=this.unionApplyMemberDto.fightTimes+"",this.tf_state.text=we.formatTimeAgo(this.unionApplyMemberDto.lastLoginTime),this.tf_state.color=we.colorTimeAgo(this.unionApplyMemberDto.lastLoginTime),this.tf_address.text=Ce.abbreviateString(this.unionApplyMemberDto.address,10)}};Ey=p([hS("FPhs_TdtQbCxXS40Ic50Wg")],Ey);var Ty=class extends Laya.Dialog{};var{regClass:fS}=Laya,Sy=class extends Ty{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_agreeAll.on(Laya.Event.CLICK,this,this.onAgreeAll),y.intance.on(h.EVENT_UNION_APPLY_MEMBER_UPDATE,this,this.onUpdateApplyMember),this.list_member.array=[]}setOpenData(e){console.log("setOpenData: ",e),Number.isInteger(e)&&(this.currUnionId=e,this.onUpdateApplyMember())}async onUpdateApplyMember(){var e=await A.requestPost("wxgame/union/auditList",{unionId:this.currUnionId});e&&e.auditList?this.list_member.array=e.auditList:B.instance.notice(d.instance.getLanguage(135))}onBack(){this.close()}async onAgreeAll(){if(this.list_member.array.length>0){var e=await A.requestPost("wxgame/union/doAudit",{uid:this.currUnionId,playerId:0,agree:!0});e&&B.instance.notice(d.instance.getLanguage(1195)),y.intance.event(h.EVENT_UNION_APPLY_MEMBER_UPDATE)}}onDisable(){this.removeEvent()}removeEvent(){y.intance.off(h.EVENT_UNION_APPLY_MEMBER_UPDATE,this,this.onUpdateApplyMember)}};Sy=p([fS("LXw-3_bwSmqCzdUAekakYg")],Sy);var Cy=class extends Laya.Box{};var{regClass:yS}=Laya,ky=class extends Cy{constructor(){super();this.isAddEvent=!1;this.tgUrl=""}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_add.on(Laya.Event.CLICK,this,this.onAdd),this.btn_move.on(Laya.Event.CLICK,this,this.onMoveClick),this.btn_tg.on(Laya.Event.CLICK,this,this.onBtnTgClick),this.isAddEvent=!0)}async onAdd(){if(this.unionMemberDto.isfriend){let e={icon:this.unionMemberDto.head,name:this.unionMemberDto.name,id:this.unionMemberDto.pid};H.intance.openModule(f.PrivateChatDialog,e);return}if(this.unionMemberDto.pid){let e=R.intance.getGeneralValueById(11);if(L.instance.friendNum>=e){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(301),N.YES);return}if(this.unionMemberDto.openid==j.instance.walletAddress){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(200),N.YES);return}if(this.unionMemberDto.isfriend){se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(202),N.YES);return}let i=await A.requestPost("wxgame/friend/addFriend",{openid:this.unionMemberDto.openid});console.log(i),i&&se.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(307),N.YES,Laya.Handler.create(this,()=>{this.btn_add.disabled=!0}))}}set dataSource(e){super.dataSource=e,this.unionMemberDto=e,this.unionMemberDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.unionMemberDto.head;this.playerIcon.headSkin=e,this.img_flag.skin=C.instance.getCountryIcon(this.unionMemberDto.country),this.tf_name.text=this.unionMemberDto.name;let i=this.unionMemberDto.isMy;L.instance.playerDto.unionLeader&&i&&this.unionMemberDto.pid!==L.instance.playerDto.pid?this.btn_move.visible=!0:this.btn_move.visible=!1,this.unionMemberDto.isLeader&&!i?(this.tgUrl=this.unionMemberDto.tgUrl,this.img_hui.visible=!0,this.btn_tg.visible=!0,!this.tgUrl||this.tgUrl.length<=0?this.btn_tg.visible=!1:this.btn_tg.visible=!0):(this.img_hui.visible=!1,this.btn_tg.visible=!1),this.tf_unionName.text=d.instance.getMultiLan(this.unionMemberDto.unionName),this.tf_fightTimes.text=this.unionMemberDto.fightTimes+"",this.tf_state.text=we.formatTimeAgo(this.unionMemberDto.lastLoginTime),this.tf_state.color=we.colorTimeAgo(this.unionMemberDto.lastLoginTime),this.unionMemberDto.openid==j.instance.walletAddress&&(this.btn_add.visible=!1),this.btn_add.label="Add as a friend",this.unionMemberDto.isfriend&&(this.btn_add.label="send msg")}async onMoveClick(){let e=this.unionMemberDto.unionId;await A.requestPost("wxgame/union/doKickOutMember",{unionId:e,playerId:this.unionMemberDto.pid})&&y.intance.event(h.UPDATE_UNION_MEMBER_LIST,this.unionMemberDto.pid)}onBtnTgClick(){this.tgUrl?window.open(this.tgUrl,"_blank"):B.instance.notice(d.instance.getLanguage(1524))}};ky=p([yS("l73FEB2CRGihzisJBs63MQ")],ky);var Ay=class extends Laya.Dialog{};var{regClass:bS}=Laya,Dy=class extends Ay{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER;this.pageIndex=1;this.pages=0;this.currUnionId=0;this.isMy=!1;this.scrolLock=!0;this.pageSize=20}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),y.intance.on(h.UPDATE_UNION_MEMBER_LIST,this,this.updateUnionMemberList),this.list_member.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange)}async setOpenData(e){this.myFriendData=await A.requestPost("wxgame/friend/friendList",{}),this.myFriendData&&this.myFriendData.list&&(L.instance.friendNum=this.myFriendData.list.length),this.unionData=e[0],this.isMy=e[1],console.log("setOpenData: ",this.unionData);var i=this.unionData.id;this.initLuckDrawView(i)}async initLuckDrawView(e){this.currUnionId=e;var i;this.isMy?i=await A.requestPost("wxgame/union/myUnionMemberPageList",{pageSize:this.pageSize,pageIndex:this.pageIndex}):i=await A.requestPost("wxgame/union/memberPageList",{unionId:e,pageSize:this.pageSize,pageIndex:this.pageIndex});var n=i.list;this.pages=i.pages;var r=i.memberNum,o=i.maxMemberNum;this.tf_num.text="<font color='#25ff63'>"+r+"</font>/"+o;let s=this.isMyFriendData(n,this.myFriendData.list,e);console.log(s),this.list_member.array=s}isMyFriendData(e,i,n){for(let r of e){let o=!1;for(let s of i)if(r.openid===s.openid){o=!0;break}r.isfriend=o,r.unionId=n,r.isMy=this.isMy,r.isLeader=r.pid==this.unionData.leader,r.tgUrl=this.unionData.tgUrl}return e}onBack(){this.close()}updateUnionMemberList(e){console.log(e),console.log(this.list_member.array),this.list_member.array=this.deleteItemByPid(this.list_member.array,e),console.log(this.list_member.array)}deleteItemByPid(e,i){return e.filter(n=>n.pid!==i)}onDisable(){this.removeEvent()}onScrollBarChange(){this.list_member.scrollBar.value>=this.list_member.scrollBar.max&&this.loadMoreData()}refreshLock(){this.scrolLock=!0,console.log("重置锁")}async loadMoreData(){if(this.scrolLock&&(this.scrolLock=!1,console.log("到底了"),Laya.timer.once(1e4,this,this.refreshLock),this.pageIndex<this.pages)){this.pageIndex+=1;var e;if(this.isMy?e=await A.requestPost("wxgame/union/myUnionMemberPageList",{pageSize:this.pageSize,pageIndex:this.pageIndex}):e=await A.requestPost("wxgame/union/memberPageList",{unionId:this.currUnionId,pageSize:this.pageSize,pageIndex:this.pageIndex}),e){var i=e.list;this.pages=e.pages,this.scrolLock=!0;var n=e.memberNum,r=e.maxMemberNum;this.tf_num.text="<font color='#25ff63'>"+n+"</font>/"+r;let o=this.isMyFriendData(i,this.myFriendData.list,this.currUnionId);this.list_member.array.push(...o),this.list_member.array=this.list_member.array,Laya.timer.clear(this,this.refreshLock)}}}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};Dy=p([bS("439XbfImQxS4I-Vced8JKA")],Dy);var My=class extends Laya.Box{};var{regClass:gS}=Laya,By=class extends My{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.unionDto=e,this.unionDto&&this.setCurrentOutPut()}async setCurrentOutPut(){this.unionIcon.dataSource=this.unionDto,this.tf_name.text=d.instance.getMultiLan(this.unionDto.unionName),this.tf_lv.text=d.instance.getUILang("LV.")+this.unionDto.lv,this.tf_num.text="<font color='#25ff63'>"+this.unionDto.memberNum+"</font>/"+this.unionDto.maxMemberNum,this.img_lvBg.skin=C.instance.getUnionLvDiIcon(this.unionDto.lv),this.img_lvIcon.skin=C.instance.getUnionLvIcon(this.unionDto.lv)}onChange(e){e?this.bg.skin="res/union1/img_trade_bg_2.png":this.bg.skin="res/union1/img_trade_bg_1.png"}};By=p([gS("cbbqawzdSI2g161G69xpUg")],By);var Py=class extends Laya.Box{};var{regClass:vS}=Laya,Ry=class extends Py{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.isAddEvent=!0)}onCopy(){let e=this.unionDto.collectionToken;doCopy(e),B.instance.notice(d.instance.getLanguage(132))}set dataSource(e){super.dataSource=e,this.unionDto=e,this.unionDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.unionIcon.dataSource=this.unionDto,this.tf_name.text=d.instance.getMultiLan(this.unionDto.unionName),this.tf_lv.text=d.instance.getUILang("LV.")+this.unionDto.lv,this.tf_num.text="<font color='#25ff63'>"+this.unionDto.memberNum+"</font>/"+this.unionDto.maxMemberNum,this.img_lvBg.skin=C.instance.getUnionLvDiIcon(this.unionDto.lv),this.img_lvIcon.skin=C.instance.getUnionLvIcon(this.unionDto.lv),this.tf_address.text=Ce.abbreviateString(this.unionDto.collectionToken,24)}};Ry=p([vS("NTRu0sy9SDCKgxglHtnEdw")],Ry);var Ny=class extends Laya.Dialog{};var{regClass:LS}=Laya,Oy=class extends Ny{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.list_junior.array=[]}setOpenData(e){console.log("setOpenData: ",e),Number.isInteger(e)&&(this.currUnionId=e,this.onUpdateApplyMember())}async onUpdateApplyMember(){var e=await A.requestPost("wxgame/union/unionRelation",{unionId:this.currUnionId});e?(this.tf_referralNum.text=d.instance.getLanguage(1308,e.childUnionNum),this.tf_memberNum.text=d.instance.getLanguage(1309,e.childUnionMemberNum),this.list_senior.array=e.parent?[e.parent]:[],!this.list_senior.array||this.list_senior.array.length<=0?this.noDataBox1.visible=!0:this.noDataBox1.visible=!1,e.childList&&(this.list_junior.array=e.childList),!e.childList||e.childList.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1):B.instance.notice(d.instance.getLanguage(135))}onBack(){this.close()}onDisable(){this.removeEvent()}removeEvent(){}};Oy=p([LS("Ls1FVCY8RxeSChhaMnjcKA")],Oy);var Hy=class extends Laya.Scene{};var{regClass:_S}=Laya,Uy=class extends Hy{constructor(){super(...arguments);this.currTab=0;this.type=1;this.joinStatusDic=new te;this.items=[]}onAwake(){this.m_iLayerType=M.M_POP,this.m_iPositionType=M.UP}onOpened(e){this.type=e}onEnable(){this.btn_search.on(Laya.Event.CLICK,this,this.onSearch),this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.list_union.vScrollBarSkin="",this.list_union.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.list_union.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1),this.box_show.visible=!1,this.box_list.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-$.DESIGN_HEIGHT)/2}async initLuckDrawView(){var e=await A.requestPost("wxgame/union/list",{});e?this.unionData=e.unionList:B.instance.notice(d.instance.getLanguage(135)),this.getJoinStatus()}async getJoinStatus(){var e=await A.requestPost("wxgame/union/joinStatus",{});e?(this.joinStatusDic=new te,this.joinStatusDic.set(e.unionId,e.joinStatus)):B.instance.notice(d.instance.getLanguage(135)),this.getItemByName(""),this.box_list.visible=!0}getItemByName(e){if(this.list_union.selectedIndex=-1,this.items=[],this.unionData){var i=this.unionData.length;this.tf_totalNum.text=d.instance.getLanguage(1355,i);for(var n=0;n<i;n++){var r=this.unionData[n],o=d.instance.getMultiLan(r.unionName);Ce.caseInsensitiveSearchWithRegex(o,e)&&this.items.push(r)}}this.list_union.array=this.items,this.items.length>0?this.list_union.selectedIndex=0:this.list_union.selectedIndex=-1}onSearch(){var e=this.input_search.text;this.getItemByName(e)}onJoin(){this.currUnionDto&&(L.instance.playerDto.union>0?fe.intance.setCurrentScene(X.M_SCENE_MYUNION,this.currUnionDto.id):se.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(141),N.CANCEL,Laya.Handler.create(this,this.onJoinSure)))}async onJoinSure(){if(this.currUnionDto){var e=await A.requestPost("wxgame/union/join",{unionId:this.currUnionDto.id});e.errorCode==0?e.unionId&&e.unionId>0?(L.instance.playerDto.union=e.unionId,fe.intance.setCurrentScene(X.M_SCENE_MYUNION,L.instance.playerDto.union),B.instance.notice(d.instance.getLanguage(2e3))):B.instance.notice(d.instance.getLanguage(1196)):B.instance.notice(d.instance.getLanguage(135))}}onItemRender(e,i){e.onChange(this.list_union.selectedIndex==i)}onSelectItem(e,i){if(this.currUnionDto=this.items[e],console.log(this.currUnionDto),this.currUnionDto){this.unionIcon.dataSource=this.currUnionDto,this.tf_name.text=d.instance.getMultiLan(this.currUnionDto.unionName),this.tf_des.text=d.instance.getMultiLan(this.currUnionDto.desc),this.tf_lv.text=d.instance.getUILang("LV.")+this.currUnionDto.lv,this.tf_num.text="<font color='#25ff63'>"+this.currUnionDto.memberNum+"</font>/"+this.currUnionDto.maxMemberNum,this.img_lvBg.skin=C.instance.getUnionLvDiIcon(this.currUnionDto.lv),this.img_lvIcon.skin=C.instance.getUnionLvIcon(this.currUnionDto.lv);var n=this.joinStatusDic.get(this.currUnionDto.id);L.instance.playerDto.union>0?this.btn_join.label=d.instance.getUILang("Enter"):n?n==1?this.btn_join.label=d.instance.getLanguage(1210):n==2?this.btn_join.label=d.instance.getUILang("Enter"):this.btn_join.label=d.instance.getUILang("Join"):this.btn_join.label=d.instance.getUILang("Join"),this.box_show.visible=!0}else this.box_show.visible=!1}setToMainScene(){fe.intance.setCurrentScene(X.M_SCENE_MAIN)}removeEvent(){}};Uy=p([_S("VfpfbqXcSQalDIkuosz8Rw")],Uy);var Vy=class extends Laya.Box{};var{regClass:xS}=Laya,Fy=class extends Vy{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.tf_uid.on(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),this.btn_add.on(Laya.Event.CLICK,this,this.onAdd),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.unionMemberAddressVo=e,console.log("data: ",e),this.unionMemberAddressVo?(this.btn_add.visible=!1,this.box_address.visible=!0,this.tf_uid.text=this.unionMemberAddressVo.openid,this.tf_player_name.text=this.unionMemberAddressVo.playerName,console.log("data1: ",e)):(this.btn_add.visible=!0,this.box_address.visible=!1,console.log("data2: ",e)),this.addEvent()}onAdd(){y.intance.event(h.EVENT_ADD_UNIONMEMBER_ADDRESS)}async setPlayerName(){try{if(this.tf_uid.text=="")return;this.unionMemberAddressVo.openid=this.tf_uid.text.toLowerCase();var e=await A.requestPost("wxgame/sys/queryName",{openid:this.tf_uid.text.toLowerCase()});e&&(console.log(e),this.tf_player_name.text=e.name,this.unionMemberAddressVo.checked=!0,this.unionMemberAddressVo.playerName=e.name)}catch{console.log("未找到该玩家，请核对地址")}}uidFocus(){this.unionMemberAddressVo.openid="",this.unionMemberAddressVo.playerName="",this.unionMemberAddressVo.checked=!1,this.tf_uid.text="",this.tf_player_name.text=""}};Fy=p([xS("JU_R7IZ9Q9uq6BU_eahAuQ")],Fy);var zy=class extends Laya.Box{};var{regClass:wS}=Laya,Gy=class extends zy{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.unionMemberVo=e,!this.unionMemberVo)return;this.check_coin.selected=this.unionMemberVo.checked,this.unionMemberDto=this.unionMemberVo.unionMemberDto;let i=this.unionMemberDto.head;this.playerIcon.headSkin=i,this.tf_name.text=this.unionMemberDto.name,this.addEvent()}onCheck(){this.unionMemberVo.checked=!this.unionMemberVo.checked,console.log("onCheck: ",this.unionMemberVo.checked),y.intance.event(h.EVENT_REFRESH_UNIONMEMBER_TRANSFER)}};Gy=p([wS("gGFdZxctQPm-SO2zLew1hg")],Gy);var jy=class{};var qy=class extends Laya.Dialog{};var Wy=class{};var{regClass:IS}=Laya,Ky=class extends qy{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=M.M_PANEL;this.m_iPositionType=M.CENTER;this.myHeroesNum=0;this.selectedNum=0;this.addL=1}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_transfer.on(Laya.Event.CLICK,this,this.onTransferItem),this.btn_checkBox.on(Laya.Event.CLICK,this,this.onSelectAll),this.btn_reduce.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_reduce]),this.btn_plus.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_plus]),y.intance.on(h.EVENT_REFRESH_UNIONMEMBER_TRANSFER,this,this.onRefreshUnionMemberTransfer),y.intance.on(h.EVENT_ADD_UNIONMEMBER_ADDRESS,this,this.onAddUnionMemberAddress),this.list_members.array=[]}setOpenData(e){console.log("setOpenData: ",e),this.itemVo=e,this.showItem(),this.getUnionMembers(),this.list_address.array=[null]}showItem(){this.knapsackItem.dataSource=this.itemVo}async getUnionMembers(){var e=await A.requestPost("wxgame/union/members",{}),i=e.list;console.log("获得公会成员 unionMemberDtos: ",i),this.unionMemberVos=[],i&&i.length>0&&i.forEach(n=>{if(n&&n.pid!=L.instance.playerDto.pid){var r=new jy;r.unionMemberDto=n,this.unionMemberVos.push(r)}}),this.list_members.array=this.unionMemberVos,this.updateNum()}onAddUnionMemberAddress(){console.log("onAddUnionMemberAddress: ",this.list_address.array),this.list_address.setItem(this.list_address.array.length-1,new Wy),this.list_address.addItem(null),this.list_address.refresh(),this.list_address.tweenTo(this.list_address.array.length-1)}onRefreshUnionMemberTransfer(){this.list_members.refresh(),this.updateNum()}updateNum(){!this.unionMemberVos||this.unionMemberVos.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1,this.selectedNum=0,this.unionMemberVos.forEach(e=>{e&&e.checked&&this.selectedNum++}),this.myHeroesNum=this.unionMemberVos.length,this.tf_selectedNum.text=d.instance.getLanguage(1223,this.selectedNum)}onSelectAll(){var e=this.btn_checkBox.selected;this.unionMemberVos.forEach(i=>{i&&(i.checked=e)}),this.list_members.refresh(),this.updateNum()}handleClickBtn(e){switch(e){case this.btn_reduce:this.addL>1&&this.addL--,this.setItemNum();break;case this.btn_plus:this.addL<100&&this.addL++,this.setItemNum();break}}setItemNum(){this.tf_num.text=this.addL+""}onBack(){this.close()}async onTransferItem(){var e=[];if(this.unionMemberVos.forEach(n=>{n.checked&&e.push(n.unionMemberDto.openid)}),this.list_address.array.forEach(n=>{n&&n.checked&&e.push(n.openid)}),e.length>0){var i=await A.requestPost("wxgame/equip/airdropTicketTransfer",{addressList:e,id:this.itemVo.m_iId,transferNum:this.addL});i?(B.instance.notice(d.instance.getLanguage(2e3)),y.intance.event(h.EVENT_REFRESH_KNAPSACK)):B.instance.notice(d.instance.getLanguage(135))}else B.instance.notice(d.instance.getLanguage(1348))}onDisable(){this.removeEvent()}removeEvent(){y.intance.off(h.EVENT_REFRESH_UNIONMEMBER_TRANSFER,this,this.onRefreshUnionMemberTransfer),y.intance.off(h.EVENT_ADD_UNIONMEMBER_ADDRESS,this,this.onAddUnionMemberAddress)}};Ky=p([IS("xnUTxKqCQUuIl8QBpuYoxg")],Ky);var{regClass:ES,property:WLe}=Laya,il=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.getComponent(Laya.RigidBody).setVelocity({x:0,y:-10})}onTriggerEnter(t,e,i){this.owner.removeSelf()}onUpdate(){this.owner.y<-10&&this.owner.removeSelf()}onDisable(){Laya.Pool.recover("bullet",this.owner)}};il=p([ES("hIXP-u9_RfeIwPLhNGNjGw")],il);var{regClass:TS,property:$Le}=Laya,al=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onClick)}onClick(t){Laya.stage.width=1334,Laya.stage.height=750,Laya.stage.scaleMode=Laya.Stage.SCALE_FIXED_WIDTH,Laya.Scene.open("scenes/Index.ls")}onDisable(){this.owner.off(Laya.Event.MOUSE_DOWN,this)}};al=p([TS("DQCudilORvOvMM7hTH8i7w")],al);var{regClass:SS,property:CS}=Laya,va=class extends Laya.Script{constructor(){super();this.level=1}get itemId(){return this._itemId}set itemId(e){this._itemId=e,this.owner.skin="resources/UI/images/bag/"+e+".png"}onEnable(){this._rig=this.owner.getComponent(Laya.RigidBody),this.level=Math.round(Math.random()*5)+1}onUpdate(){}onCollisionEnter(e){console.log("collision: ",e)}onTriggerEnter(e,i,n){var r=this.owner;if(console.log("owener: ",r),e.label==="buttle"&&r.parent){let o=Laya.Pool.getItemByCreateFun("effect",this.createEffect,this);o.pos(r.x,r.y),r.parent.addChild(o),o.play(0,!0),r.removeSelf(),Laya.SoundManager.playSound("resources/sound/destroy.wav")}}createEffect(){let e=new Laya.Animation;e.loadAnimation("resources/ani/TestAni.ani"),e.on(Laya.Event.COMPLETE,null,i);function i(){e.removeSelf(),Laya.Pool.recover("effect",e)}return e}onDisable(){Laya.Pool.recover("dropBox",this.owner)}};p([CS({type:"number"})],va.prototype,"level",2),va=p([SS("3L23NCFLSAieUApqTrVoCQ")],va);var{regClass:kS,property:e_e}=Laya,On=class extends Laya.Script{constructor(){super();this.touchHeroIds=new te;this.touchGlasses=new te;this.updateIndex=0;this.turnSpeed=1;this.turningSpeed=.1;this.lastDirectionAngle=0}onAwake(){}onEnable(){}onCollisionEnter(e){console.log(this.constructor.name+" onCollisionEnter collision",e)}onCollisionStay(e){console.log(this.constructor.name+" onCollisionStay collision",e)}onCollisionExit(e){console.log(this.constructor.name+" onCollisionExit collision",e)}onTriggerEnter(e,i,n){if(e.label==="ground")console.warn("ground in");else if(e.label&&e.label.startsWith("grass"))this.owner.isMe&&(e.owner.alpha=.7,console.warn("grass in"),this.touchGlasses.set(e.label,!0),this.setMyCurrArea());else if(e.label==="item")this.owner.enterItemId=e.owner.getComponent(va).itemId;else if(e.label==="role"){var r=e.owner.roomPlayerDto.id;if(this.touchHeroIds.set(r,e.owner),this.owner.displacementType==2){var o=U.instance.canAttack(this.owner,e.owner);o&&Laya.Tween.clearAll(this.owner)}}}onTriggerStay(e,i,n){}onTriggerExit(e,i,n){if(e.label==="ground")this.owner.inGround=!1,console.warn("ground exit");else if(e.label&&e.label.startsWith("grass"))this.owner.isMe&&(console.warn("grass out"),e.owner.alpha=1,this.touchGlasses.remove(e.label),this.setMyCurrArea());else if(e.label==="item")this.owner.enterItemId==e.owner.getComponent(va).itemId&&(this.owner.enterItemId=0);else if(e.label==="role"){var r=e.owner.roomPlayerDto.id;this.touchHeroIds.remove(r)}}setMyCurrArea(){this.touchGlasses.keys.length>0?this.owner.currArea=1:this.owner.currArea=0,this.owner.onSendMoveData()}onUpdate(){if(this.owner.isMe)this.owner._isDead||(U.instance.myHeroSpr.currArea>0?this.owner.alpha=.6:this.owner.alpha=1);else{this.owner._isRealDead?U.instance.myHeroSpr._isDead?this.owner.visible=!1:this.owner.visible=!1:this.owner.currArea>0?U.instance.myHeroSpr.currArea==this.owner.currArea?(this.owner.visible=!0,this.owner.alpha=.6):this.owner.visible=!1:(this.owner.visible=!0,this.owner.alpha=1);return}if(!this.owner.isStop){if(this.owner.speed>0){let e=this.getJoystickDirectionAngle(),i=this.calculateAngleDifference(e,this.lastDirectionAngle);if(Math.abs(i)>10?this.startTurning():this.stopTurning(),this.lastDirectionAngle=e,this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.heroSk.isReady&&this.owner.walk(),this.lastSpeed=this.owner.speed),this.owner.roleDirection>=0){let n=1*this.owner.speed*this.turnSpeed,r=this.owner.roleDirection*(Math.PI/180),o=n*Math.cos(r),s=n*Math.sin(r);this.owner.pos(Math.round(this.owner.x+o),Math.round(this.owner.y+s))}this.owner.inControl&&!this.owner._isDead&&this.touchHeroIds.values.forEach(n=>{var r=U.instance.canTui(this.owner,n);r&&n.beiTui(this.owner.roomPlayerDto.id)})}else this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.idle(),this.lastSpeed=this.owner.speed);this.updateIndex==0&&this.owner.onSendMoveData(),this.updateIndex++,this.updateIndex>0&&(this.updateIndex=0)}}getJoystickDirectionAngle(){return this.owner.roleDirection}calculateAngleDifference(e,i){let n=Math.abs(e-i);return n>180?360-n:n}startTurning(){this.turnSpeed*=this.turningSpeed}stopTurning(){this.turnSpeed=1}onDisable(){}};On=p([kS("DknC7B57SZi-09Mz092daQ")],On);var{regClass:AS,property:K0}=Laya,La=class extends Laya.Script{constructor(){super();this.createBoxInterval=1e3;this._time=0;this._started=!1;this.updateStop=!1}onEnable(){let e=["resources/UI/images/test/b1.png"];Laya.loader.load(e).then(i=>{this._time=Date.now(),this._gameBox=this.owner.getChildByName("gameBox"),Laya.stage.on(Laya.Event.BLUR,this,()=>{this.updateStop=!0}),Laya.stage.on(Laya.Event.FOCUS,this,()=>{this.updateStop=!1}),Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onStageClick)})}onStart(){let e=this.owner.getChildByName("ground").getComponent(Laya.BoxCollider);e.width=Laya.stage.width}onUpdate(){if(this.updateStop)return;let e=Date.now();e-this._time>this.createBoxInterval&&this._started&&(this._time=e,this.createBox())}createBox(){let e=Laya.Pool.getItemByCreateFun("dropBox",this.dropBox.create,this.dropBox);e.pos(Math.random()*(Laya.stage.width-100),-100),this._gameBox.addChild(e)}onStageClick(e){e.stopPropagation();let i=Laya.Pool.getItemByCreateFun("bullet",this.bullet.create,this.bullet);i.pos(Laya.stage.mouseX,Laya.stage.mouseY),this._gameBox.addChild(i)}startGame(){this._started||(this._started=!0,this.enabled=!0)}stopGame(){this._started=!1,this.enabled=!1,this.createBoxInterval=1e3,this._gameBox.removeChildren()}};p([K0({type:Laya.Prefab})],La.prototype,"dropBox",2),p([K0({type:Laya.Prefab})],La.prototype,"bullet",2),La=p([AS("5iJgbfCiSn6Rc8upAfHtjA")],La);var Yy=class extends Laya.Scene{};var{regClass:DS,property:c_e}=Laya,Hn=class extends Yy{constructor(){super();Hn.instance=this}onEnable(){this._control=this.getComponent(La),this.tipLbll.on(Laya.Event.CLICK,this,this.onTipClick)}onTipClick(e){this.tipLbll.visible=!1,this._score=0,this.scoreLbl.text="分数：",this._control.startGame()}addScore(e=1){this._score+=e,this.scoreLbl.text="分数："+this._score,this._control.createBoxInterval>600&&this._score%20==0&&(this._control.createBoxInterval-=20)}stopGame(){this.tipLbll.visible=!0,this.tipLbll.text="游戏结束了，点击屏幕重新开始",this._control.stopGame()}};Hn=p([DS("Y5UkAabiTgWFZQnBL1EpEw")],Hn);var $y=class extends Laya.Scene{};var{regClass:MS,property:y_e}=Laya,nl=class extends $y{constructor(){super()}onOpened(t){t&&(this.msgLab.x=t.point&&t.point.x?t.point.x:Laya.stage.mouseX-50,this.msgLab.y=t.point&&t.point.y?t.point.y:Laya.stage.mouseY-80,this.msgLab.text=t.text,Laya.Tween.to(this.msgLab,{y:this.msgLab.y-100,alpha:0},1e3,Laya.Ease.linearNone))}};nl=p([MS("9kGOzpbbSOWSAmN0l9VtfQ")],nl);var{regClass:BS,property:Qg}=Laya,rl=Laya.Browser,Y0=Laya.Render,$0=Laya.SpriteUtils,wt=class extends Laya.Script{constructor(){super();wt.instance=this}onEnable(){this.videoBtn.on(Laya.Event.MOUSE_DOWN,this,()=>{this.createElementVideo()})}createElementVideo(){rl.window.IframeElementRT=this,this.createScript(),this.createDiv(),this.createIframe("resources/files/video.html?url=layaAir.mp4"),this.setDOMElementInArea(),Laya.stage.on(Laya.Event.RESIZE,this,this.setDOMElementInArea)}setDOMElementInArea(){this.iframeElement!=null&&this.divElement!=null&&($0.fitDOMElementInArea(this.divElement,this.closeBox,0,0,this.closeBox.width,this.closeBox.height),$0.fitDOMElementInArea(this.iframeElement,this.iframeBox,0,0,this.iframeBox.width,this.iframeBox.height))}createScript(){this.scriptElement=rl.document.createElement("script"),rl.document.body.appendChild(this.scriptElement),this.scriptElement.innerHTML="function closeVideo(){IframeElementRT.closeVideo() }"}createIframe(e){this.iframeElement=rl.createElement("iframe"),rl.document.body.appendChild(this.iframeElement),this.iframeElement.style.zIndex=Y0.canvas.style.zIndex+998,this.iframeElement.src=e,this.iframeElement.style.margin="0",this.iframeElement.style.scrolling="no",this.iframeElement.style.frameborder="0",this.iframeElement.style.padding="0",this.iframeElement.style.left="0",this.iframeElement.style.top="0px",this.iframeElement.style.position="absolute"}createDiv(){this.divElement=Laya.Browser.createElement("div"),Laya.Browser.document.body.appendChild(this.divElement),this.divElement.innerHTML="<img src='resources/files/x.png' width='60px' height='60px' onclick='closeVideo()'/>",this.divElement.style.zIndex=Y0.canvas.style.zIndex+999}closeVideo(){Laya.Browser.document.body.removeChild(this.scriptElement),Laya.Browser.document.body.removeChild(this.iframeElement),Laya.Browser.document.body.removeChild(this.divElement),this.scriptElement=this.iframeElement=this.divElement=null,Laya.stage.off(Laya.Event.RESIZE,this,this.setDOMElementInArea)}};p([Qg({type:Laya.Button})],wt.prototype,"videoBtn",2),p([Qg({type:Laya.Box})],wt.prototype,"closeBox",2),p([Qg({type:Laya.Box})],wt.prototype,"iframeBox",2),wt=p([BS("ZtMxoJHQTWipjGWyGV51jQ")],wt);var Xy=class extends Laya.Scene{};var{regClass:PS,property:x_e}=Laya,ol=class extends Xy{constructor(){super()}onEnable(){Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),this.tabBindViewStack(),this.topTab.selectedIndex=0,this.item0Tab.selectedIndex=0}onClicked(){let t=this.item2Tab.getChildByName("item2"),e=this.item2Tab.getChildByName("item3"),i=this.item2Tab.getChildByName("item4");t.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1)}),e.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenScene.ls",!1)}),i.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/Dialog.ls",!1,{title:"弹窗的标题",text:"弹窗的具体文本……"})})}tabBindViewStack(){this.topTab.selectHandler=new Laya.Handler(this,t=>{this.tabPage.selectedIndex=t,t==1&&(this.item1Tab.selectedIndex=0),t==2&&(this.item2Tab.selectedIndex=0),t==3&&(this.item3Tab.selectedIndex=0),t==4&&(this.item4Tab.selectedIndex=0),Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),wt.instance.iframeElement&&wt.instance.closeVideo(),t==2&&this.item2Page.selectedIndex==1&&!wt.instance.iframeElement&&wt.instance.createElementVideo()}),this.item0Tab.selectHandler=new Laya.Handler(this,t=>{this.item0Page.selectedIndex=t}),this.item1Tab.selectHandler=new Laya.Handler(this,t=>{this.item1Page.selectedIndex=t,t!==4&&Laya.Physics2D.I?Laya.Physics2D.I.enableDebugDraw=!1:t==4&&Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!0)}),this.item2Tab.selectHandler=new Laya.Handler(this,t=>{switch(this.item2Page.selectedIndex=t,t){case 1:!wt.instance.iframeElement&&wt.instance.createElementVideo();break;case 2:Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1);break;case 3:Laya.loader.load("prefab/uiDemo/page/Win.lh").then(e=>{let i=e.create();this.tabPage.parent.addChild(i)});break;case 4:Laya.loader.load("prefab/uiDemo/page/Dialog.lh").then(e=>{e.create().show()});break}t!==1&&wt.instance.iframeElement&&wt.instance.closeVideo()}),this.item3Tab.selectHandler=new Laya.Handler(this,t=>{this.item3Page.selectedIndex=t}),this.item4Tab.selectHandler=new Laya.Handler(this,t=>{this.item4Page.selectedIndex=t})}onDisable(){}};ol=p([PS("gbAKGLFtQ5WL6-NpVocAEA")],ol);var{regClass:RS,property:Qy}=Laya,_a=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onAwake(){console.log("创建动画模板"),this.createAniTemplate("moveB"),this.createAniTemplate("moveC"),this.createAniTemplate("moveE"),this.createAniTemplate("moveF"),this.createAniTemplate("moveH"),this.createAniTemplate("moveI"),this.createAniTemplate("moveK"),this.createAniTemplate("moveL"),this.aniSource.play(0,!0,"moveB")}onEnable(){this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.aniSource.play(0,!0,this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.aniSource.play(0,!0,this.selectAni.selectedLabel):this.aniSource.play(0,!1,this.selectAni.selectedLabel)})}createAniTemplate(e,i=8){let n=[];for(let r=0;r<i;r++)n.push("resources/UI/role/atlasAni/139x/"+e+r+".png");Laya.Animation.createFrames(n,e)}onError(e){console.log("加载失败: "+e)}};p([Qy({type:Laya.Button})],_a.prototype,"playAni",2),p([Qy({type:Laya.Button})],_a.prototype,"stopAni",2),p([Qy({type:Laya.ComboBox})],_a.prototype,"selectAni",2),p([Qy({type:Laya.Animation})],_a.prototype,"aniSource",2),_a=p([RS("tmkUlMggQi20FZpy6nC1aw")],_a);var{regClass:NS,property:Zy}=Laya,xa=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onEnable(){this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel),this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.playAnimation(this.selectAni.selectedLabel):this.playAnimation(this.selectAni.selectedLabel,!1)})}playAnimation(e,i=!0,n=7){let r=[];for(let o=0;o<n;o++)r.push("resources/UI/role/frameAni/"+e+o+".png");this.aniSource.loadImages(r).play(0,i)}};p([Zy({type:Laya.Button})],xa.prototype,"playAni",2),p([Zy({type:Laya.Button})],xa.prototype,"stopAni",2),p([Zy({type:Laya.ComboBox})],xa.prototype,"selectAni",2),p([Zy({type:Laya.Animation})],xa.prototype,"aniSource",2),xa=p([NS("8gw7FS4iT1q8EhdN3sWklQ")],xa);var{regClass:OS,property:D_e}=Laya,X0=Laya.Event,HS=Laya.SpineSkeleton,sl=class extends Laya.Script{constructor(){super(...arguments);this.skinArray=["goblin","goblingirl"];this.skinIndex=0;this.spineAniIndex=6}onEnable(){this.createLayaSpine(),this.createSpine()}createLayaSpine(){this.skeletonNode=this.owner.getChildByName("skeletonNode"),Laya.loader.load("resources/UI/role/spineAni/goblins.sk").then(e=>{this.skeletonAni=e.buildArmature(1),this.skeletonNode.addChild(this.skeletonAni),this.skeletonAni.x=128,this.skeletonAni.y=390,this.spineAniNum=this.skeletonAni.getAnimNum(),this.skeletonAni.play(0,!0),this.changeSkin(),this.skeletonNode.on(X0.CLICK,this,this.changeSkin)})}parseComplete(){}createSpine(){this.spineNode=this.owner.getChildByName("spineNode"),Laya.loader.load("resources/UI/role/spineAni/spineboy-pma.skel",Laya.Loader.SPINE).then(e=>{this.spineAni=new HS,this.spineAni.templet=e,this.spineNode.addChild(this.spineAni),this.spineAni.scale(.3,.3),this.spineAni.pos(220,390),this.spineAniNum=this.spineAni.getAnimNum(),this.spineAni.play(this.spineAniIndex,!0),this.spineNode.on(X0.CLICK,this,this.changeAni)})}spineParseComplete(){}changeAni(){++this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=5),this.spineAni.play(this.spineAniIndex,!0,!0)}changeSkin(){this.skeletonAni.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}};sl=p([OS("qTd2xmRXT4i0Re94qly0Lg")],sl);var{regClass:US,property:ll}=Laya,Q0=Laya.Event,VS=Laya.Point,Qi=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new VS;this.angle=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.createMap(),this.sceneWindow.on(Q0.MOUSE_UP,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2+26),this.roleAniNode.scale(.6,.6),this.roleAniNode.x=this.lastX=48,this.roleAniNode.y=this.lastY=48,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let e=this._animator.getDefaultState();console.log(e.name),this.createWallMap()}createWallMap(){Laya.loader.load("resources/tiledMap/desert_new.json").then(()=>{let i=Laya.loader.getRes("resources/tiledMap/desert_new.json").data.layers[0].data,n;n=new Array;for(var r=0;r<40;r++){n[r]=new Array;for(var o=0;o<60;o++)i[r*60+o]==30?n[r][o]=1:n[r][o]=0}this.graph=new window.Graph(n),this.opts=[],this.opts.closest=!0,this.opts.heuristic=window.astar.heuristics.diagonal})}mouseUp(e){if(this.isMoving)return;this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let i=this.gameMap.globalToLocal(this.stageMouse);var n=this.graph.grid[Math.ceil(this.roleAniNode.y/32)-1][Math.ceil(this.roleAniNode.x/32)-1],r=this.graph.grid[Math.ceil(i.y/32)-1][Math.ceil(i.x/32)-1];this._everyPath=window.astar.search(this.graph,n,r,{closest:this.opts.closest}),this._everyPath.length>0&&(this.isMoving=!0),Laya.timer.loop(100,this,this.loopfun)}loopfun(){if(this._everyPath.length>0){let e=this._everyPath[0].y*32+16,i=this._everyPath[0].x*32+16;e==this.lastX?i>this.lastY?this.angle=90:this.angle=270:e>this.lastX?this.angle=0:this.angle=180,this.switchAni("run"),this.lastX=e,this.lastY=i,Laya.Tween.to(this.roleAniNode,{x:e,y:i},100),this._everyPath.splice(0,1)}else this.switchAni("stand"),Laya.timer.clear(this,this.loopfun),this.isMoving=!1}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(e=null){this.onLoaded()}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);this._animator.play(i),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}getOrientation(e,i){let n=i.split(","),r=360/n.length;return n[Math.floor(e/r)]}onDisable(){Laya.stage.off(Q0.MOUSE_UP,this,this.mouseUp),this.tiledMap&&this.tiledMap.destroy()}};p([ll({type:Laya.Sprite})],Qi.prototype,"gameMap",2),p([ll({type:Laya.Prefab})],Qi.prototype,"roleAni",2),p([ll({type:"string"})],Qi.prototype,"runAniName",2),p([ll({type:"string"})],Qi.prototype,"standAniName",2),p([ll({type:Laya.Panel})],Qi.prototype,"sceneWindow",2),Qi=p([US("zBb5TGy7Swu5_GpFiGzUng")],Qi);var{regClass:FS,property:N_e}=Laya,Z0=Laya.Rectangle,Un=class extends Laya.Script{constructor(){super(...arguments);this._rect1=Z0.TEMP;this._rect2=Z0.TEMP}rectDetection(e,i){return!(e.x>i.x+i.width||e.x+e.width<i.x||e.y>i.y+i.height||e.y+e.height<i.y)}collisionWith(e,i,n){let r=[];if(n==0){var o=Laya.Point.create(),s=e.width/2,l=e.height/2,c=Laya.Point.create(),u,m;o.x=e.x+s,o.y=e.y+l,u=this.rectToRadius(e.width,e.height)}else if(n==2){var g,x;x=this.arrayToPoint(e)}for(let w=0;w<i.length;w++)if(e!=i[w])switch(n){case 0:c.x=i[w].x+i[w].width/2,c.y=i[w].y+i[w].height/2,m=this.rectToRadius(i[w].width,i[w].height),this.circleDetection(o,c,u+m)&&r.push(i[w]);break;case 1:this.rectDetection(e,i[w])&&r.push(i[w]);break;case 2:e.name==="c1"?(g=this.arrayToPoint(i[w]),this.circleAndPolygonDetection(e,g,i[w])&&r.push(i[w])):i[w].name==="c1"?this.circleAndPolygonDetection(i[w],x,e)&&r.push(i[w]):(g=this.arrayToPoint(i[w]),this.polygonDetection(x,g,e,i[w])&&r.push(i[w]));break}return r}circleAndPolygonDetection(e,i,n){let r=this.getSides(i),o=[],s=Laya.Point.create(),l=Laya.Point.create(),c=e.hitArea._hit._cmds[0].radius,u=this.getNodeCoord(i,n);s.x=e.x+e.hitArea._hit._cmds[0].x,s.y=e.y+e.hitArea._hit._cmds[0].y,l=this.getNearestPoint(s,u),o.push(new Laya.Point(l.x-s.x,l.y-s.y));for(let m=0,g=r.length;m<g;m++)o.push(this.perpendicular(r[m]));for(let m=0,g=o.length;m<g;m++){let x=o[m],w=this.getCircleProjection(s,x,c),v=this.getPolygonProjection(u,x);if(!this.isOverlap(w,v))return!1}return!0}getNearestPoint(e,i){let n=i[0],r=this.getDistance(e,n),o,s;for(let l=1;l<i.length;l++)o=i[l],s=this.getDistance(e,o),s<r&&(r=s,n=o);return n}polygonDetection(e,i,n,r){let o=this.getSides(e).concat(this.getSides(i)),s=[],l=this.getNodeCoord(e,n),c=this.getNodeCoord(i,r);for(let u=0,m=o.length;u<m;u++)s.push(this.perpendicular(o[u]));for(let u=0,m=s.length;u<m;u++){let g=s[u],x=this.getPolygonProjection(l,g),w=this.getPolygonProjection(c,g);if(!this.isOverlap(x,w))return!1}return!0}isOverlap(e,i){let n,r;return n=e.min<i.min?e.min:i.min,r=e.max>i.max?e.max:i.max,e.max-e.min+(i.max-i.min)>=r-n}getNodeCoord(e,i){let n=[];for(let r=0;r<e.length;r++){let o=Laya.Point.create();o.x=e[r].x+i.x+i.hitArea._hit._cmds[0].x,o.y=e[r].y+i.y+i.hitArea._hit._cmds[0].y,n.push(o)}return n}getPolygonProjection(e,i){let n=null,r=null;for(let o=0;o<e.length;o++){let s=this.dotProduct(e[o],i)/this.getLength(i);(n===null||s<n)&&(n=s),(r===null||s>r)&&(r=s)}return{min:n,max:r}}getCircleProjection(e,i,n){let r=this.dotProduct(e,i)/this.getLength(i);return{min:r-n,max:r+n}}rectToRadius(e,i){let n;return e==i?n=e/2:n=Math.sqrt(e*e+i*i)/2,n}circleDetection(e,i,n){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))<=n}circlesCollision(e,i,n,r){let o=this.subtract(e,i),s=this.getCircleProjection(e,o,n),l=this.getCircleProjection(i,o,r);return!!this.isOverlap(s,l)}arrayToPoint(e){let i=[],n=[];if(n=e.hitArea._hit._cmds[0].points,n&&n.length>3)for(let r=0;r<n.length/2;r++)i[r]=Laya.Point.create(),i[r].x=n[r*2],i[r].y=n[r*2+1];return i}perpendicular(e){let i=Laya.Point.create();return i.x=e.y,i.y=-e.x,i}getNormal(e){let i=Math.sqrt(e.x*e.x+e.y*e.y);return new Laya.Point(e.y/i,(0-e.x)/i)}getSides(e){var i=e,n=i.length,r=new Array;if(n>=3){for(var o=1,s=i[0];o<n;o++){let l=i[o];r.push(this.subtract(l,s)),s=l}r.push(this.subtract(i[0],i[n-1]))}return r}getLength(e){return Math.sqrt(e.x*e.x+e.y*e.y)}dotProduct(e,i){return e.x*i.x+e.y*i.y}subtract(e,i){return Laya.Point.create().setTo(e.x-i.x,e.y-i.y)}getDistance(e,i){let n=e.x-i.x,r=e.y-i.y;return Math.sqrt(n*n+r*r)}};Un=p([FS("naI7Ga3ZQzuwHxZXbiaZEw")],Un);var Jy=class extends Laya.View{};var{regClass:zS,property:V_e}=Laya,wa=class extends Jy{constructor(){super();this._detectionType=0;this.collisionNodes=null;wa.i=this}onEnable(){this.collisionNodes=[this.c1,this.p1,this.p2],this._script=this.getComponent(Un),this.detectionType.selectHandler=new Laya.Handler(this,this.onSelected),this.detectionType.selectedIndex=0}onSelected(e){switch(console.log("onSelected:"+e),this._detectionType=e,e){case 0:this.setCircleLine([this.c11,this.p11,this.p22]);break;case 1:this.setRectLine([this.c11,this.p11,this.p22]);break;case 2:this.c11.graphics.clear(),this.p11.graphics.clear(),this.p22.graphics.clear();break}}collisionWith(e){let i;i=this._script.collisionWith(e,this.collisionNodes,this._detectionType),i.length>0?(i.push(e),this.setLineWidth(i)):this.retsetLineWidth()}setLineWidth(e){for(let i=0;i<e.length;i++)e[i]._graphics._cmds[0].lineWidth=3}retsetLineWidth(){for(let e=0;e<this.collisionNodes.length;e++)this.collisionNodes[e]._graphics._cmds[0].lineWidth=0}setCircleLine(e,i=1,n="#1e00fb"){for(let r=0;r<e.length;r++){e[r].graphics.clear();let o=e[r].width/2,s=e[r].height/2,l=this._script.rectToRadius(e[r].width,e[r].height);e[r].graphics.drawCircle(o,s,l,null,n,i)}}setRectLine(e,i=1,n="#1e00fb"){for(let r=0;r<e.length;r++)e[r].graphics.clear(),e[r].graphics.drawRect(e[r].x,e[r].y,e[r].width,e[r].height,null,n,i)}};wa=p([zS("RrGHZH_SROCrF5XxFa05sg")],wa);var{regClass:GS,property:lo}=Laya,Vn=Laya.Event,J0=Laya.Point,Pi=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new J0;this.axisPivot=new J0;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1;this.mLastX=0;this.mLastY=0}onEnable(){this.createMap(),this.joystickAxis=this.joystickBG.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(Vn.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(Vn.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(Vn.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(Vn.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.sceneWindow.width/2,this.roleAniNode.y=this.sceneWindow.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let e=this._animator.getDefaultState();console.log(e.name)}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(e=null){this.onLoaded()}mouseDown(e){this.touchId=e.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let e=this.joystickBG.globalToLocal(this.stageMouse),i=e.x-this.joystickAxis.width/2,n=e.y-this.joystickAxis.height/2;this.radian=Math.atan2(n-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,e.x,e.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(e.x-this.joystickAxis.width/2,e.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(e){e.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(e){e.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(e,i){let n=i.split(","),r=360/n.length;return n[Math.floor(e/r)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let e=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;this.mLastX+=e,this.mLastY+=i,this.mLastX<0?this.mLastX=0:this.mLastX>1920-this.sceneWindow.width&&(this.mLastX=1920-this.sceneWindow.width),this.mLastY<0?this.mLastY=0:this.mLastY>1280-this.sceneWindow.height&&(this.mLastY=1280-this.sceneWindow.height),this.tiledMap.moveViewPort(this.mLastX,this.mLastY)}getDistance(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}onDisable(){Laya.stage.off(Vn.MOUSE_DOWN,this,this.mouseDown),Laya.stage.off(Vn.MOUSE_UP,this,this.mouseUp),Laya.stage.off(Vn.MOUSE_MOVE,this,this.mouseMove),this.tiledMap&&this.tiledMap.destroy()}};p([lo(Laya.Sprite)],Pi.prototype,"gameMap",2),p([lo(Laya.Prefab)],Pi.prototype,"roleAni",2),p([lo({type:"string"})],Pi.prototype,"runAniName",2),p([lo({type:"string"})],Pi.prototype,"standAniName",2),p([lo({type:Laya.Panel})],Pi.prototype,"sceneWindow",2),p([lo(Laya.Image)],Pi.prototype,"joystickBG",2),Pi=p([GS("k2DFVaFIQEyMRaElgOWsVw")],Pi);var eb=class extends Laya.Box{};var{regClass:jS}=Laya,cl=class extends eb{constructor(){super();this.lastIndex=-1}onEnable(){let e="resources/json/bagList.json";Laya.loader.fetch(e,"json").then(i=>{i.bagList&&i.bagList.length>0&&(this.bagList.array=i.bagList,this.bagList.renderHandler=new Laya.Handler(this,this.onListRender),this.bagList.selectHandler=new Laya.Handler(this,this.onListSelect),this.bagList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.bagList.vScrollBarSkin="")})}onListRender(e,i){i>this.bagList.array.length||i<0}onListSelect(e){this.tips.visible=!0,this.bagList.array[e].listItemBG={skin:"resources/UI/images/bg/bg100-1.png"},this.lastIndex!==-1&&(this.bagList.array[this.lastIndex].listItemBG={skin:"resources/UI/images/bg/bg100-0.png"}),this.lastIndex=e,this.itemImg.skin=this.bagList.array[e].listItemImg.skin,this.itemNumber.text="数量 "+this.bagList.array[e].listItemNumber.text,this.itemReadme.text=this.bagList.array[e].readme}onListMouse(e,i){}onDisable(){}};cl=p([jS("fimeRTYXT46eMH6komwhJQ")],cl);var{regClass:qS,property:Zg}=Laya,cn=class extends Laya.Script{constructor(){super()}onEnable(){var e=this.getDataSourece();Laya.loader.load("prefab/ComboList.lh").then(i=>{let n=i.create();this.comboList=n,this.comboList.array=e,this.comboList.repeatY=e.length,this.combo2.list=this.comboList,this.combo2.list.width=this.combo2.width,this.combo2.list.hScrollBarSkin="",this.combo2.selectHandler=new Laya.Handler(this,this.onSelected2)}),this.combo1.selectHandler=new Laya.Handler(this,this.onSelected1)}onSelected1(e){this.selectedText.text="您选中了："+this.combo1.selectedLabel}onSelected2(e){this.selectedText.text="您选中了："+(e<0?"":this.comboList.array[e].label)}getDataSourece(){for(var e=[],i=0;i<10;i++)e[i]={optText:{text:"选项"+(i+1)}};return e}onDisable(){}};p([Zg({type:Laya.ComboBox})],cn.prototype,"combo1",2),p([Zg({type:Laya.ComboBox})],cn.prototype,"combo2",2),p([Zg({type:Laya.Label})],cn.prototype,"selectedText",2),cn=p([qS("M6bGyqDSRCGU3TkvNeqvRw")],cn);var tb=class extends Laya.View{};var{regClass:WS}=Laya,ul=class extends tb{onEnable(){this.hList.array=this.getListDataSource(),this.hList.scrollTo(1);let e=this.hList.cells[1].getChildByName("icon");e.scaleX=e.scaleY=2,this.hList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange),this.leftLimit=this.getLeftLimit(),this.rightLimit=this.getRightLimit()}onScrollBarChange(){var e=this.hList.scrollBar.value,i=this.hList.array;if(e>this.leftLimit){var n=i.shift();i[i.length]=n,this.hList.array=i,this.hList.scrollBar.value=e-this.hList.cells[0].width-this.hList.spaceX,this.iconTweenToLeft()}else e<this.rightLimit&&(n=i.pop(),i.unshift(n),this.hList.array=i,this.hList.scrollBar.value=e+this.hList.cells[0].width+this.hList.spaceX,this.iconTweenToRight())}iconTweenToLeft(e=200){let i=this.hList.cells[0].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},e);let n=this.hList.cells[1].getChildByName("icon");n.scaleX=n.scaleY=1,Laya.Tween.to(n,{scaleX:2,scaleY:2},e)}iconTweenToRight(e=200){let i=this.hList.cells[1].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},e);let n=this.hList.cells[2].getChildByName("icon");n.scaleX=n.scaleY=1,Laya.Tween.to(n,{scaleX:2,scaleY:2},e)}getRightLimit(){return this.hList.cells[0].width-this.hList.spaceX}getLeftLimit(){return this.hList.cells[0].width*2+this.hList.spaceX}getListDataSource(e=5){let i=[];for(let n=0;n<e;n++)i[n]={},i[n].icon={skin:`resources/UI/role/r${n}.png`};return i}};ul=p([WS("WFag7yYwR9q-iI31OJUedg")],ul);var{regClass:KS,property:ib}=Laya,Ia=class extends Laya.Script{constructor(){super();this.optStatus=[];this.timestampFormat=(e,i)=>{let n=i?new Date(i):new Date,r={"M+":n.getMonth()+1,"D+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"S+":n.getMilliseconds()};new RegExp("(Y+)").test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in r)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==1?r[o]:("00"+r[o]).substr((""+r[o]).length)));return e}}onEnable(){let e="resources/json/mailList.json";Laya.loader.fetch(e,"json").then(i=>{let n=i.mailList;n&&n.length>0&&(this.mailList.array=n,this.mailList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.mailList.repeatY=n.length,this.mailList.vScrollBarSkin=""),this.addMail.on(Laya.Event.CLICK,this,this.addMialItem),this.selectDel.on(Laya.Event.CLICK,this,this.listSelectDel),this.selectFlag.on(Laya.Event.CLICK,this,this.listSelectFlag)})}listSelectFlag(){if(this.optStatus.length>0){for(let e=0;e<this.optStatus.length;e++){let i=this.optStatus[e];this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功标记"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}listSelectDel(){if(this.optStatus.length>0){this.optStatus.sort(function(e,i){return i-e});for(let e=0;e<this.optStatus.length;e++)this.mailList.array.splice(this.optStatus[e],1);this.optStatus=[],this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功删除"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}addMialItem(){var e=this.mailList.startIndex+1;let i={mailTitle:{text:"这里是新增加的邮件"+e},mailDateTime:{text:this.timestampFormat("YYYY-MM-DD hh:mm")},opt:{visible:!1},flagStatus:{skin:"resources/UI/images/comp/img_mail.png"},flagBtn:{label:"标为已读",labelColors:"#000000,#000000,#000000"}};if(this.mailList.array.splice(e,0,i),this.optStatus.length>0)for(let n=0;n<this.optStatus.length;n++)this.optStatus[n]>=e&&(this.optStatus[n]+=1);this.mailList.refresh()}onListMouse(e,i){if(e.type==Laya.Event.CLICK){var n=this.optStatus.indexOf(i);switch(e.target.name){case"optBG":n===-1?(this.mailList.array[i].opt={visible:!0},this.optStatus.push(i)):(this.mailList.array[i].opt={visible:!1},this.optStatus.splice(n,1)),this.mailList.refresh();break;case"mailTitle":Laya.Scene.open("scenes/uiDemo/Dialog.scene",!1,{title:this.mailList.array[i].mailTitle.text,text:"邮件内容，此处省略1000字……………………"}),this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"},this.mailList.refresh();break;case"flagBtn":this.mailList.array[i].flag===1?(this.mailList.array[i].flag=0,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail.png"},this.mailList.array[i].flagBtn={label:"标为已读",labelColors:"#000000,#000000,#000000"}):(this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}),this.mailList.refresh();break;case"delBtn":if(this.mailList.array.splice(i,1),n>-1){this.optStatus.splice(n,1);for(let r=n;r<this.optStatus.length;r++)this.optStatus[r]-=1}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"删除成功"});break}}}};p([ib({type:Laya.List})],Ia.prototype,"mailList",2),p([ib({type:Laya.Button})],Ia.prototype,"addMail",2),p([ib({type:Laya.Button})],Ia.prototype,"selectDel",2),p([ib({type:Laya.Button})],Ia.prototype,"selectFlag",2),Ia=p([KS("HzpJPDUEQN69Xg1VasHb-w")],Ia);var{regClass:YS,property:co}=Laya,Ri=class extends Laya.Script{constructor(){super();this.scrollBarIsStop=!1;this.msgIdNow=1;this.itemIsOpen=!1;this.itemOpenId=-1;this.redHotStatus=[];this.mouseDown=!1}onEnable(){this.refreshList.array=this.createListData(9),this.refreshList.repeatY=this.refreshList.array.length,this.refreshList.vScrollBarSkin="",this.toLine.on(Laya.Event.CLICK,this,this.onToLineBtn),this.toTop.on(Laya.Event.CLICK,this,this.onToTopBtn),this.toBottom.on(Laya.Event.CLICK,this,this.onToBottomBtn),this.refreshList.on(Laya.Event.MOUSE_UP,this,this.stageOnMouseUp),this.refreshList.on(Laya.Event.MOUSE_OUT,this,this.stageOnMouseUp),this.refreshList.scrollBar.stopMoveLimit=this.scrollBarIsStopBind.bind(this),this.refreshLimit("dragTopLimit",80),this.refreshLimit("dragBottomLimit",80,20),this.refreshList.mouseHandler=new Laya.Handler(this,this.onListMouse)}stageOnMouseUp(){this.mouseDown=!1}refreshLimit(e,i,n=0,r=2e3){e==="dragTopLimit"?this.refreshList.scrollBar.topMoveLimit=i:e==="dragBottomLimit"&&(this.refreshList.scrollBar.bottomMoveLimit=i),this.refreshList.scrollBar.on(e,this,()=>{if(console.log("达到了滚动限制:"+e),this.refreshLoading.visible=!0,e==="dragTopLimit"){this.refreshLoading.bottom=NaN,this.refreshLoading.top=n;var o=this.createListData(5,"顶部新增的标题");o=o.concat(this.refreshList.array);var s=0+5,l=0;if(this.redHotStatus.length>0)for(let c=0;c<this.redHotStatus.length;c++)this.redHotStatus[c]+=5}else if(e==="dragBottomLimit"){this.refreshList.scrollBar.disableDrag=!0,this.refreshLoading.top=NaN,this.refreshLoading.bottom=n;var o=this.createListData(5,"底部新增的标题");o=this.refreshList.array.concat(o);var s=this.refreshList.array.length-1,l=s+5}this.scrollBarIsStop=!0,Laya.timer.once(r,this,()=>{this.refreshList.array=o,this.refreshList.scrollTo(l),this.refreshList.selectedIndex=s,this.scrollBarIsStop=!1,this.refreshList.scrollBar.backToNormal(),this.refreshLoading.visible=!1})})}onListMouse(e,i){e.type==Laya.Event.MOUSE_DOWN&&(this.mouseDown=!0,this.itemIsOpen?(this.itemIsOpen=!1,this.itemOpenId=-1,Laya.Tween.to(this.openedItem,{x:0},500,null,Laya.Handler.create(this,()=>{this.refreshList.scrollBar.disableDrag=!1}))):(this.moveLastPos=e.target.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),e.target.on(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove,[e.target,i]))),e.type==Laya.Event.MOUSE_UP&&(this.mouseDown=!1,this.itemOnMouseUp()),e.type==Laya.Event.CLICK&&(e.target.name=="flag"&&this.onClickFlag(i),e.target.name=="del"&&this.onClickDel(i))}itemOnMouseUp(){if(this.itemIsOpen){var e;this.openedItem.x<-80?e=-262:(this.itemIsOpen=!1,e=0),e!==this.openedItem.x&&Laya.Tween.to(this.openedItem,{x:e},500),this.refreshList.scrollBar.disableDrag=!1,this.itemOpenId!==-1&&(this.openedItem.off(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove),this.itemOpenId=-1)}}onClickFlag(e){var i=this.redHotStatus.indexOf(e);i==-1?(this.refreshList.array[e].avatar={},this.refreshList.array[e].avatar.redHot={visible:!0},this.refreshList.array[e].flag={flagText:{text:"标记已读"}},this.redHotStatus.push(e)):(this.refreshList.array[e].avatar={redHot:{visible:!1}},this.refreshList.array[e].flag={flagText:{text:"标记未读"}},this.redHotStatus.splice(i,1)),this.refreshList.refresh()}onClickDel(e){this.refreshList.array.splice(e,1),this.itemOpenId=-1;var i=this.redHotStatus.indexOf(e);if(i>-1&&this.redHotStatus.splice(e,1),this.redHotStatus.length>0)for(let n=0;n<this.redHotStatus.length;n++)this.redHotStatus[n]>e&&(this.redHotStatus[n]+=1);this.refreshList.refresh()}onItemBoxMouseMove(e,i){if(this.mouseDown){let n=e.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),r=this.moveLastPos.x-n.x,o=this.moveLastPos.y-n.y;Math.abs(r)>Math.abs(o)&&!this.itemIsOpen&&(this.openedItem=e,this.itemIsOpen=!0,this.refreshList.scrollBar.disableDrag=!0,this.itemOpenId=i),this.itemIsOpen&&(this.openedItem.x-=r,this.openedItem.x<-262?this.openedItem.x=-262:this.openedItem.x>0&&(this.openedItem.x=0))}else this.refreshList.scrollBar.disableDrag=!1}scrollBarIsStopBind(){return this.scrollBarIsStop}onToLineBtn(){let e=parseInt(this.lineNumber.text)-1;this.refreshList.scrollTo(e),e<this.refreshList.array.length&&(this.refreshList.selectedIndex=e)}onToTopBtn(){this.refreshList.scrollTo(0),this.refreshList.selectedIndex=0}onToBottomBtn(){let e=this.refreshList.array.length-1;this.refreshList.scrollTo(e),this.refreshList.selectedIndex=e}createListData(e=5,i="初始测试标题"){let n=new Date,r=n.getHours()<10?"0"+n.getHours():""+n.getHours(),o=n.getMinutes()<10?"0"+n.getMinutes():""+n.getMinutes();for(var s=[],l=0;l<e;l++){let c={text:r+" : "+o};s[l]={},s[l].msgTime=c,s[l].msgTitle={text:i+(this.msgIdNow+l)},s[l].avatar={redHot:{visible:!1}}}return this.msgIdNow+=l,s}onDisable(){}};p([co({type:Laya.List})],Ri.prototype,"refreshList",2),p([co({type:Laya.Button})],Ri.prototype,"toLine",2),p([co({type:Laya.Button})],Ri.prototype,"toTop",2),p([co({type:Laya.Button})],Ri.prototype,"toBottom",2),p([co({type:Laya.Box})],Ri.prototype,"refreshLoading",2),p([co({type:Laya.Label})],Ri.prototype,"lineNumber",2),Ri=p([YS("m0TR8w0gTbWSvHbZTzrORA")],Ri);var ab=class extends Laya.View{};var{regClass:$S,property:c0e}=Laya,pl=class extends ab{onEnable(){this.tree1.xml=this.getTreeData(!0),this.tree2.xml=this.getTreeData(!1)}getTreeData(t){let e="<data>";if(t)e+="<dir itemLabel='一级目录一' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><dir itemLabel='一级目录二' isOpen='true'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/></dir><dir itemLabel='一级目录三' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><file itemLabel='一级子项1 '/><file itemLabel='一级子项2 '/>";else for(let i=0;i<5;i++){e+="<item title='目录"+(i+1)+"' isOpen='true'>";for(let n=0;n<5;n++)e+="<subpage title='子项标题"+(n+1)+"' />";e+="</item>"}return e+="</data>",new Laya.XML(e)}};pl=p([$S("GJWtWFwsQoqNpjA1k42SpQ")],pl);var nb=class extends Laya.Scene{};var{regClass:XS,property:h0e}=Laya,ml=class extends nb{onEnable(){}onDisable(){}};ml=p([XS("JQ1fkq03ThewqQWRXQPgmw")],ml);var{regClass:QS,property:b0e}=Laya,Fn=class extends Laya.Script{constructor(){super()}baseUI(e){this.window=e,this.searchCloseButton(e)}searchCloseButton(e){for(let i=0;i<e.numChildren;i++){let n=e.getChildAt(i);n instanceof Laya.Button&&n.name=="closeBtn"?(n.on(Laya.Event.MOUSE_DOWN,this,()=>{this.window.close()}),console.log("baseUI 发现closeBtn，统一添加关闭事件")):this.searchCloseButton(n)}}onDisable(){}};Fn=p([QS("7Fkz4T7JQ5ujwNcIx9lGNA")],Fn);var{regClass:ZS,property:L0e}=Laya,dl=class extends Fn{constructor(){super()}onEnable(){this.ui=this.owner,this.baseUI(this.ui)}onDisable(){}};dl=p([ZS("utN7JQs_T3iw6KqWT-beFQ")],dl);var rb=class extends Laya.Box{};var{regClass:JS,property:E0e}=Laya,ex=Laya.Event,tx=Laya.Mouse,hl=class extends rb{constructor(){super()}onEnable(){Laya.Browser.onPC?(this.panel.on(ex.MOUSE_OVER,this,()=>{tx.cursor="move"}),this.panel.on(ex.MOUSE_OUT,this,()=>{tx.cursor="auto"})):this.topLab.text="背景可拖拽，双指缩放改变大小"}};hl=p([JS("9s1SW9WKRrSodo6JY27VSw")],hl);var{regClass:eC,property:ob}=Laya,Ea=class extends Laya.Script{constructor(){super()}onEnable(){this.graphics=this.graphicsSprite.graphics,Laya.timer.loop(2e3,this,()=>{this.changeImgSkin(),this.changeSpriteTexture(),this.changeFillTexture(),this.changeTexture()})}changeImgSkin(){this.Img.skin=this.randomImg()}changeSpriteTexture(){this.spImg.loadImage(this.randomImg(!0,6,5))}changeFillTexture(){this.graphics.clear();let e=this.randomImg(!0,4);Laya.loader.load(e).then(i=>{this.graphics.fillTexture(i,0,0,1,1)})}changeTexture(){this.textureImg.graphics.clear();let e=Laya.loader.getRes(this.randomImg(!0,8));this.textureImg.graphics.drawTexture(e)}randomImg(e=!1,i=8,n=1){let r=Math.floor(Math.random()*(i-n+1))+n;return e?"resources/UI/role/m"+r+".png":"resources/UI/role/w"+r+".png"}onDisable(){}};p([ob({type:Laya.Image})],Ea.prototype,"Img",2),p([ob({type:Laya.Sprite})],Ea.prototype,"spImg",2),p([ob({type:Laya.Sprite})],Ea.prototype,"graphicsSprite",2),p([ob({type:Laya.Sprite})],Ea.prototype,"textureImg",2),Ea=p([eC("ulgCMWfCQKiihSJynpbJFg")],Ea);var sb=class extends Laya.View{};var{regClass:tC,property:M0e}=Laya,lb=Laya.Event,fl=class extends sb{onEnable(){this._hitArea.on(lb.MOUSE_DOWN,this,()=>{this._hitArea.off(lb.MOUSE_MOVE,this,this.bg3MaskMove),this._hitArea.startDrag(),this._hitArea.on(lb.MOUSE_MOVE,this,this.bg3MaskMove)}),this._mask.on(lb.MOUSE_MOVE,this,this.maskMove)}bg3MaskMove(t){t.stopPropagation(),this.bg3Mask.x=this._hitArea.x,this.bg3Mask.y=this._hitArea.y}maskMove(){let t=this.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),e=t.x-this._mask.width/this.bg2.scaleX/2,i=t.y-this._mask.height/this.bg2.scaleY/2;e>80&&i>80&&(this._mask.x=t.x-this._mask.width/this.bg2.scaleX/2,this._mask.y=t.y-this._mask.height/this.bg2.scaleY/2,this.bg2.x=(-t.x-this._mask.width/2)*(this.bg2.scaleX-1),this.bg2.y=(-t.y-this._mask.height/2)*(this.bg2.scaleY-1))}};fl=p([tC("zt0rBsEST9KVJgcimd7SFA")],fl);var{regClass:iC,property:zn}=Laya,vi=class extends Laya.Script{constructor(){super()}onEnable(){this.changeMouseCursor(),this.throughTab.selectHandler=new Laya.Handler(this,this.onSwitchTab)}onSwitchTab(e){switch(e){case 0:this.leftBg.hitTestPrior=!0,this.rightBg.hitTestPrior=!0;break;case 1:this.leftBg.hitTestPrior=!1,this.rightBg.hitTestPrior=!1;break}}changeMouseCursor(){this.leftBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.leftBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.rightBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.rightBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.leftBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧的可点击区域",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.leftBg.name)}),this.rightBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧的可点击区域",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.rightBg.name)}),this.btn1.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮1"}),console.log("click btn1")}),this.btn2.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮2"}),console.log("click btn2")}),this.close1.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧关闭按钮",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.close1.name)}),this.close2.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧关闭按钮",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.close2.name)})}onDisable(){}};p([zn({type:Laya.Tab})],vi.prototype,"throughTab",2),p([zn({type:Laya.Sprite})],vi.prototype,"leftBg",2),p([zn({type:Laya.Sprite})],vi.prototype,"rightBg",2),p([zn({type:Laya.Button})],vi.prototype,"btn1",2),p([zn({type:Laya.Button})],vi.prototype,"btn2",2),p([zn({type:Laya.Sprite})],vi.prototype,"close1",2),p([zn({type:Laya.Sprite})],vi.prototype,"close2",2),vi=p([iC("AmLUThtNSaW6zL9W205gyg")],vi);var{regClass:aC,property:cb}=Laya,Ta=class extends Laya.Script{onEnable(){this.bTop.getComponent(Laya.BoxCollider).width=this.bTop.width,this.bBottom.getComponent(Laya.BoxCollider).width=this.bBottom.width,this.bRight.getComponent(Laya.BoxCollider).height=this.bRight.height,this.bLeft.getComponent(Laya.BoxCollider).height=this.bLeft.height}};p([cb({type:Laya.Image})],Ta.prototype,"bTop",2),p([cb({type:Laya.Image})],Ta.prototype,"bBottom",2),p([cb({type:Laya.Image})],Ta.prototype,"bRight",2),p([cb({type:Laya.Image})],Ta.prototype,"bLeft",2),Ta=p([aC("jp5l8WZtQLuVyfU4ljEFyQ")],Ta);var ub=class extends Laya.View{};var{regClass:nC,property:z0e}=Laya,yl=class extends ub{onEnable(){this.testProgress()}testProgress(){this.loading2.value=.01,this.loadText.text="资源加载中……",Laya.timer.loop(100,this,this.changeProgress)}changeProgress(){this.loading2.value+=.05,this.loading2.value==1&&(this.loadText.text="资源加载完成",Laya.timer.clear(this,this.changeProgress),Laya.timer.once(3e3,this,()=>{this.testProgress()}))}};yl=p([nC("9w97n2rXRjiACN_vzizQPw")],yl);var{regClass:rC,property:q0e}=Laya,un=class extends Laya.Script{constructor(){super()}onStart(){this._anim=this.owner.getComponent(Laya.Animator)}isPlayanimaByName(e=0){let i=this._anim.getControllerLayer(e);if(i==null)return!1;let n=i.getCurrentPlayState();return n==null?!1:n.animatorState.clip.islooping?!0:n._finish}isSameByName(e,i=0){let n=this._anim.getControllerLayer(i);if(n==null)return!1;let r=n.getCurrentPlayState();if(r==null)return!1;if(r.animatorState.name==e)return!0}playAnim(e,i=!1){if(i){if(this.isSameByName(e))return;this._anim.play(e,0,0);return}this.isPlayanimaByName()||this._anim.play(e,0,0)}};un=p([rC("q0uAMn-DTUm70T4fGtxGlw")],un);var rt=Laya.InputManager,{regClass:oC,property:J0e}=Laya,bl=class extends Laya.Script{constructor(){super(...arguments);this.currRockerBar=null;this.maxDistance=80;this.isMouseDown=!1;this.mouseDownPosition=new Laya.Point;this._currentMouse=new Laya.Point;this.initRockerBarPosition=new Laya.Point;this.key1Pressed=!1;this.key2Pressed=!1;this.key3Pressed=!1;this.key4Pressed=!1;this.key5Pressed=!1;this.key6Pressed=!1;this.directionOffset=0;this.isKeyRun=!1}onEnable(){Laya.InputManager.multiTouchEnabled=!0}onStart(){this.currRockerBar=this.owner.getChildByName("freebar"),this.img_freebar_arrow=this.owner.getChildByName("img_freebar_arrow"),this.freetrack=this.owner.getChildByName("freetrack"),this.img_arrow_left=this.freetrack.getChildByName("img_arrow_left"),this.img_arrow_right=this.freetrack.getChildByName("img_arrow_right"),this.img_arrow_up=this.freetrack.getChildByName("img_arrow_up"),this.img_arrow_down=this.freetrack.getChildByName("img_arrow_down"),this.img_freebar_arrow.visible=!1,Laya.Browser.onPC?this.freetrack.visible=!0:this.img_arrow_left.visible=this.img_arrow_right.visible=this.img_arrow_up.visible=this.img_arrow_down.visible=!1,this.initialise()}initialise(){this.initRockerBarPosition.setTo(this.currRockerBar.x,this.currRockerBar.y),this.currRockerBar.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onMouseUp)}onSkillKeyDown(e,i,n){switch(e.stopPropagation(),i){case 1:this.key1Pressed=n;break;case 2:this.key2Pressed=n;break;case 3:this.key3Pressed=n;break}}onMouseDown(e){z.instance.stopAll||(e.stopPropagation(),this.isMouseDown=!0,this.currRockerBar.selected=!0,Laya.Browser.onPC||(this.freetrack.visible=!0),this.mouseDownPosition.setTo(this.owner.mouseX,this.owner.mouseY),console.log("onMouseDown this.owner.mouse: ",this.owner.mouseX,this.owner.mouseY),this.isKeyRun=!1,this.touchId=e.touchId)}onMouseUp(e){this.isMouseDown&&this.endClick(e)}endClick(e){this.isMouseDown=!1,this.currRockerBar.x=this.initRockerBarPosition.x,this.currRockerBar.y=this.initRockerBarPosition.y,this.currRockerBar.selected=!1,this.setDir(-4)}onMouseMove(e){if(!this.isMouseDown||!this.currRockerBar)return;e.stopPropagation(),this._currentMouse.setTo(e.stageX,e.stageY);let i=this.owner.globalToLocal(this._currentMouse,!1),n=i.x-this.mouseDownPosition.x,r=i.y-this.mouseDownPosition.y;if(Math.sqrt(n**2+r**2)<this.maxDistance)this.currRockerBar.x=this.initRockerBarPosition.x+n,this.currRockerBar.y=this.initRockerBarPosition.y+r;else{let s=Math.atan2(n,r);this.currRockerBar.x=Math.sin(s)*this.maxDistance+this.initRockerBarPosition.x,this.currRockerBar.y=Math.cos(s)*this.maxDistance+this.initRockerBarPosition.y}if(Math.abs(n)>this.directionOffset||Math.abs(r)>this.directionOffset){let s=Dt.judgePosition(n,r);this.setDir(s)}}onUpdate(){z.instance.stopAll||this.getKeyboardPressed()}setDir(e){if(this.lastDirection!=e&&(U.instance.setMyHeroDirection(e),this.lastDirection=e),e==-4)this.img_freebar_arrow.visible=!1;else{this.img_freebar_arrow.visible=!0;let i=e+90;this.img_freebar_arrow.rotation=i}}getKeyboardPressed(){if(rt.hasKeyDown(Laya.Keyboard.W)&&rt.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(225)):rt.hasKeyDown(Laya.Keyboard.W)&&rt.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(315)):rt.hasKeyDown(Laya.Keyboard.S)&&rt.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(135)):rt.hasKeyDown(Laya.Keyboard.S)&&rt.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(45)):rt.hasKeyDown(Laya.Keyboard.W)?(this.isKeyRun=!0,this.setDir(270)):rt.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(0)):rt.hasKeyDown(Laya.Keyboard.S)?(this.isKeyRun=!0,this.setDir(90)):rt.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(180)):this.isKeyRun&&this.setDir(-4),rt.hasKeyDown(Laya.Keyboard.H)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_1)){if(this.key1Pressed)return;this.key1Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,1),Laya.timer.once(500,this,this.notKey1Pressed)}if(rt.hasKeyDown(Laya.Keyboard.J)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_2)){if(this.key2Pressed)return;this.key2Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,2),Laya.timer.once(500,this,this.notKey2Pressed)}if(rt.hasKeyDown(Laya.Keyboard.K)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_3)){if(this.key3Pressed)return;this.key3Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,3),Laya.timer.once(500,this,this.notKey3Pressed)}if(rt.hasKeyDown(Laya.Keyboard.L)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_4)){if(this.key4Pressed)return;this.key4Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,4),Laya.timer.once(500,this,this.notKey4Pressed)}if(rt.hasKeyDown(Laya.Keyboard.M)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_5)){if(this.key5Pressed)return;this.key5Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,5),Laya.timer.once(500,this,this.notKey5Pressed)}if(rt.hasKeyDown(Laya.Keyboard.N)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_6)){if(this.key6Pressed)return;this.key6Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,6),Laya.timer.once(500,this,this.notKey6Pressed)}}notKey1Pressed(){this.key1Pressed=!1}notKey2Pressed(){this.key2Pressed=!1}notKey3Pressed(){this.key3Pressed=!1}notKey4Pressed(){this.key4Pressed=!1}notKey5Pressed(){this.key5Pressed=!1}notKey6Pressed(){this.key6Pressed=!1}getKeyPressed(e){var i=e.toParentPoint(new Laya.Point(e.x,e.y));return i.x>e.x&&i.x<e.x+e.width&&i.y>e.y&&i.y<e.y+e.height}getDistance(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}onDisable(){Laya.InputManager.multiTouchEnabled=!1}};bl=p([oC("7cTqWb35RwygSkuWy4QkgQ")],bl);var uo=class{static playSkillEffect(t,e,i){var n=["Attack01","Attack02","Attack03","Attack04"],r=n[e];Laya.Sprite3D.load(t,Laya.Handler.create(null,function(o){i.addChild(o);var s=o.getChildByName(r);s.active=!0;var l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play(),setTimeout(()=>{o.removeSelf()},1e3)}))}static playEnemyHurtSkillEffect(t,e){Laya.Sprite3D.load(t,Laya.Handler.create(null,function(i){e.addChild(i);var n="Attack",r=i.getChildByName(n),o=r.getComponent(Laya.ShurikenParticleRenderer);if(o._particleSystem.play(),r.numChildren>0)for(let c=0;c<r.numChildren;c++){var s=r.getChildAt(c),l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}static playNormalEffect(t,e){Laya.Sprite3D.load(t,Laya.Handler.create(null,function(i){e.addChild(i);var n=i,r=n.getComponent(Laya.ShurikenParticleRenderer);if(r._particleSystem.play(),n.numChildren>0)for(let l=0;l<n.numChildren;l++){var o=n.getChildAt(l),s=o.getComponent(Laya.ShurikenParticleRenderer);s._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}};var{regClass:sC,property:ix}=Laya,Gn=class extends Laya.Script{constructor(){super();this.followTarget=null;this.speed=.02;this.mLife=5;this.mIsEnd=!1;this.mIsAttack=!1;this.mIsAttackStart=!1;this.mCanPlayFirst=!0;this.mAttackDelayTime=0;this.mCurrentIndex=0;this.followTarget=U.instance.getCurrentHero()}onUpdate(){if(!this.mIsEnd){this.followTarget==null&&(this.followTarget=U.instance.getCurrentHero());var e=new Laya.Vector3(this.followTarget.transform.position.x,0,this.followTarget.transform.position.z),i=new Laya.Vector3(this.owner.transform.position.x,0,this.owner.transform.position.z),n=Laya.Vector3.distance(e,i);if(n<10)if(n<=1)this.mIsAttack?this.isAttackendByPlayer():(this.mCanPlayFirst?(this.mCanPlayFirst=!1,this.attackPlayer()):(this.mAttackDelayTime=this.mAttackDelayTime+Laya.timer.delta,this.mAttackDelayTime>1e3&&(this.mAttackDelayTime=0,this.attackPlayer())),this.mIsAttackStart=!1),U.instance.insertValidList(this.owner);else{this.mAttackDelayTime=0;var r=new Laya.Vector3;Laya.Vector3.subtract(e,i,r),Laya.Vector3.normalize(r,r),this.owner.transform.lookAt(e,Laya.Vector3.Up);var o=this.owner.transform.position;o.vadd(new Laya.Vector3(r.x*this.speed,0,r.z*this.speed),o),this.owner.transform.position=o,this.anim&&this.anim.playAnim("run",!0),this.mCanPlayFirst=!0,this.mIsAttackStart=!1,this.mIsAttack=!1}else this.anim&&this.anim.playAnim("ldle",!0),U.instance.removeValidListByValue(this.owner);this.mLife<=0&&(this.mIsEnd=!0,this.anim&&this.anim.playAnim("die",!0),setTimeout(()=>{U.instance.removeValidListByValue(this.owner),this.owner.removeSelf();var s=U.instance.getCurrentPlane(),l=this.mCurrentIndex;U.instance.createEnemy(s.getChildAt(l),l)},600))}}setCurrentIndex(e){this.mCurrentIndex=e}setLife(e){this.mLife=e}attackPlayer(){uo.playEnemyHurtSkillEffect("resources/prefab/eff_monster.lh",this.owner.getChildAt(0)),U.instance.playSound(2),this.anim&&this.anim.playAnim("attack",!0),setTimeout(()=>{this.mIsEnd||this.anim&&this.anim.playAnim("ldle",!0)},500)}isAttackendByPlayer(){this.mIsAttackStart||(this.anim&&this.anim.playAnim("shouji",!0),uo.playNormalEffect("resources/prefab/eff_shouji.lh",this.owner.getChildAt(0)),setTimeout(()=>{this.mIsEnd||(this.anim&&this.anim.playAnim("shouji",!0),this.mIsAttack=!1)},500),this.mIsAttackStart=!0)}getLife(){return this.mLife}setIsAttack(e){this.mIsAttack=e}};p([ix({type:un})],Gn.prototype,"anim",2),p([ix({type:"number"})],Gn.prototype,"speed",2),Gn=p([sC("eWO-rqURQ6ag7phXtJPZCA")],Gn);var{regClass:lC,property:gl}=Laya,Zi=class extends Laya.Script{constructor(){super();this.animname="";this.force=!1;this.isBig=!1;this.isCanClick=!0}onStart(){y.intance.on(h.EVENT_CLICK_NUM3,this,this.onMouseClick)}onMouseClick(e){this.isCanClick&&(Laya.Tween.to(this.btn_pic,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this.btn_pic,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)})),U.instance.myHeroSpr.getComponent(On).catchItem(),U.instance.playSound(1),this.anim1&&(this.anim1.playAnim(this.animname,this.force),setTimeout(()=>{this.anim1.playAnim("idle",this.force),this.isCanClick=!0},500)))}onDestroy(){y.intance.offAllCaller(this)}};p([gl({type:un})],Zi.prototype,"anim1",2),p([gl({type:"string"})],Zi.prototype,"animname",2),p([gl({type:"boolean"})],Zi.prototype,"force",2),p([gl({type:"boolean"})],Zi.prototype,"isBig",2),p([gl({type:Laya.Sprite})],Zi.prototype,"btn_pic",2),Zi=p([lC("xovkzdhOSuOc_JJKi_7s2g")],Zi);var{regClass:cC,property:ax}=Laya,jn=class extends Laya.Script{constructor(){super();this.isBig=!1;this.isCanClick=!0}onStart(){y.intance.on(h.EVENT_CLICK_NUM,this,this.onNumberClick)}onNumberClick(e){e==1?this.isBig||this.onMouseClick(null):this.isBig&&this.onMouseClick(null)}onMouseClick(e){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=U.instance.getValidList();Laya.Tween.to(this,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)}));var n=0;this.isBig?(U.instance.myHeroSpr.attack(),U.instance.playSound(3)):(U.instance.myHeroSpr.attack(),U.instance.playSound(1)),setTimeout(()=>{this.isCanClick=!0},500)}}getDistance(e,i){return Math.sqrt(e*e+i*i)}getDistanceByPoint(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}onDestroy(){y.intance.offAllCaller(this)}};p([ax({type:"boolean"})],jn.prototype,"isBig",2),p([ax({type:Laya.Sprite})],jn.prototype,"btn_pic",2),jn=p([cC("ye1w48wgTbqktuLPDOjmkw")],jn);var{regClass:uC,property:Lxe}=Laya,vl=class extends Laya.Script{constructor(){super(...arguments);this.maxX=0;this.minX=-90;this.maxY=0;this.minY=-580;this.scaleSize=.1;this.lastDistance=0;this.startedSingleTouchDrag=!1}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),this.onMouseWheel()}onMouseWheel(){this.owner.on(Laya.Event.MOUSE_WHEEL,this,e=>{let i=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY));e.delta>0&&(this.owner.scaleX+=this.scaleSize,this.owner.scaleY+=this.scaleSize),e.delta<0&&(this.owner.scaleX-=this.scaleSize,this.owner.scaleY-=this.scaleSize,this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1));let n=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),r=(n.x-i.x)*this.owner.scaleX,o=(n.y-i.y)*this.owner.scaleY;r+=this.owner.x,o+=this.owner.y,this.updateLimit(),r>this.maxX?this.owner.x=this.maxX:r<this.minX?this.owner.x=this.minX:this.owner.x=r,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o})}onStart(){this.updateLimit()}updateLimit(){let e=this.owner.parent;this.minX=Math.min(e.width-this.owner.width*this.owner.scaleX,0),this.minY=Math.min(e.height-this.owner.height*this.owner.scaleY,0)}onMouseDown(e){if(e.stopPropagation(),e.touches&&e.touches.length>1){this.startedSingleTouchDrag&&(this.owner.stopDrag(),this.startedSingleTouchDrag=!1);let i=this.setPivot(e);!i.x||!i.y?console.log("(((((((((((((((((((((((",this.lastPivot,JSON.parse(JSON.stringify(e.touches))):(this.lastDistance=this.getDistance(e),this.lastPivot=i,this.owner.on(Laya.Event.MOUSE_MOVE,this,this.mouseMove))}else this.owner.startDrag(),this.startedSingleTouchDrag=!0}onMouseUp(e){this.owner.off(Laya.Event.MOUSE_MOVE,this,this.mouseMove)}getDistance(e){var i=0;if(e.touches&&e.touches.length>1){let n=e.touches[0].pos.x-e.touches[1].pos.x,r=e.touches[0].pos.y-e.touches[1].pos.y;i=Math.sqrt(n*n+r*r)}return i}mouseMove(e){let i=this.getDistance(e);this.owner.scaleX+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleY+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1),this.owner.scaleX>5&&(this.owner.scaleX=5),this.owner.scaleY>5&&(this.owner.scaleY=5);let n=this.setPivot(e);if(!n.x||!n.y)console.log("$$$$$$$$$$$",n,JSON.parse(JSON.stringify(e.touches)));else{this.updateLimit();let r=(n.x-this.lastPivot.x)*this.owner.scaleX,o=(n.y-this.lastPivot.y)*this.owner.scaleY;r+=this.owner.x,o+=this.owner.y,r>this.maxX?this.owner.x=this.maxX:r<this.minX?this.owner.x=this.minX:this.owner.x=r,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o,this.lastDistance=i}}setPivot(e){if(e.touches&&e.touches.length>=2){let i=this.owner.globalToLocal(new Laya.Point(e.touches[0].pos.x,e.touches[0].pos.y)),n=this.owner.globalToLocal(new Laya.Point(e.touches[1].pos.x,e.touches[1].pos.y));return new Laya.Point((i.x+n.x)/2,(i.y+n.y)/2)}return this.lastPivot}onUpdate(){this.owner.x>this.maxX&&(this.owner.x=this.maxX),this.owner.x<this.minX&&(this.owner.x=this.minX),this.owner.y>this.maxY&&(this.owner.y=this.maxY),this.owner.y<this.minY&&(this.owner.y=this.minY)}addTestPoint(e,i="#ff0000",n=2){let r=new Laya.Sprite;r.graphics.drawCircle(0,0,n,i),this.owner.addChild(r),r.pos(e.x,e.y)}};vl=p([uC("c71-MoP2RIyCrdBAfjnIgw")],vl);var{regClass:pC,property:mC}=Laya,po=class extends Laya.Script{constructor(){super(...arguments);this.tipsText="";this.isDown=!1}onEnable(){this.tipsText.replace(/(^\s*)|(\s*$)/g,"")}onMouseDown(){this.owner.startDrag(),this.isDown=!0}onMouseUp(){this.isDown=!1}onMouseMove(){this.isDown&&wa.i.collisionWith(this.owner)}onMouseOver(){Laya.Mouse.cursor="move",this.tipsText!==""&&Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:this.tipsText})}onMouseOut(){Laya.Mouse.cursor="auto"}};p([mC({type:"string"})],po.prototype,"tipsText",2),po=p([pC("oWa7FUgoQ6CqtyJh_D1Y2w")],po);var{regClass:dC,property:Ll}=Laya,pb=Laya.Event,nx=Laya.Point,Ji=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new nx;this.axisPivot=new nx;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.joystickBG=this.owner,this.joystickAxis=this.owner.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(pb.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(pb.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(pb.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(pb.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.gameMap.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.gameMap.width/2,this.roleAniNode.y=this.gameMap.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D)}mouseDown(e){this.touchId=e.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let e=this.joystickBG.globalToLocal(this.stageMouse),i=e.x-this.joystickAxis.width/2,n=e.y-this.joystickAxis.height/2;this.radian=Math.atan2(n-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),console.log("radian: "+this.radian+", angle: "+this.angle),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,e.x,e.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(e.x-this.joystickAxis.width/2,e.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(e){e.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(e){e.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(e,i){let n=i.split(","),r=360/n.length;return n[Math.floor(e/r)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let e=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;(e<0&&this.gameMap.x<0||e>0&&this.gameMap.x>this.sceneWindow.width-this.gameMap.width)&&(this.gameMap.x-=e),(i<0&&this.gameMap.y<0||i>0&&this.gameMap.y>this.sceneWindow.height-this.gameMap.height)&&(this.gameMap.y-=i)}getDistance(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}};p([Ll({type:Laya.Prefab})],Ji.prototype,"roleAni",2),p([Ll({type:"string"})],Ji.prototype,"runAniName",2),p([Ll({type:"string"})],Ji.prototype,"standAniName",2),p([Ll({type:Laya.Sprite})],Ji.prototype,"gameMap",2),p([Ll({type:Laya.Box})],Ji.prototype,"sceneWindow",2),Ji=p([dC("Pl5-_PonSLe-7mCnxeXfRw")],Ji);var{regClass:hC,property:Cxe}=Laya,_l=class extends Laya.Script{constructor(){super();this.isOpen=!0}onEnable(){this.toolbarBG=this.owner.parent,this._owner=this.owner,this.menu=this.owner.parent.getChildByName("menu")}onMouseDown(e){e.stopPropagation(),this.isOpen?(Laya.Tween.to(this.toolbarBG,{width:106},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:52,rotation:540},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!1})),Laya.Tween.to(this.menu,{alpha:0},300,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!1}))):(Laya.Tween.to(this.toolbarBG,{width:460},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:402,rotation:-360},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!0})),Laya.Tween.to(this.menu,{alpha:1},200,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!0})))}onDisable(){}};_l=p([hC("hPkwKQvKQTaeBeEpHxNUEA")],_l);})();
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
