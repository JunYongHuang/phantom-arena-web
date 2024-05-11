"use strict";(()=>{var d_=Object.create;var El=Object.defineProperty;var iy=Object.getOwnPropertyDescriptor;var h_=Object.getOwnPropertyNames;var f_=Object.getPrototypeOf,b_=Object.prototype.hasOwnProperty;var ae=(a,t)=>()=>(a&&(t=a(a=0)),t);var y_=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),ay=(a,t)=>{for(var e in t)El(a,e,{get:t[e],enumerable:!0})},g_=(a,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of h_(t))!b_.call(a,r)&&r!==e&&El(a,r,{get:()=>t[r],enumerable:!(i=iy(t,r))||i.enumerable});return a};var v_=(a,t,e)=>(e=a!=null?d_(f_(a)):{},g_(t||!a||!a.__esModule?El(e,"default",{value:a,enumerable:!0}):e,a));var m=(a,t,e,i)=>{for(var r=i>1?void 0:i?iy(t,e):t,n=a.length-1,o;n>=0;n--)(o=a[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&El(t,e,r),r};function ny(a,t){return a.exec(t)?.groups}var oy=ae(()=>{"use strict"});function Bl(a){let t=a.type;if(sy.test(a.type)&&"components"in a){t="(";let e=a.components.length;for(let r=0;r<e;r++){let n=a.components[r];t+=Bl(n),r<e-1&&(t+=", ")}let i=ny(sy,a.type);return t+=`)${i?.array??""}`,Bl({...a,type:t})}return"indexed"in a&&a.indexed&&(t=`${t} indexed`),a.name?`${t} ${a.name}`:t}var sy,ly=ae(()=>{"use strict";oy();sy=/^tuple(?<array>(\[(\d*)\])*)$/});function Jr(a){let t="",e=a.length;for(let i=0;i<e;i++){let r=a[i];t+=Bl(r),i!==e-1&&(t+=", ")}return t}var cy=ae(()=>{"use strict";ly()});function bf(a){return a.type==="function"?`function ${a.name}(${Jr(a.inputs)})${a.stateMutability&&a.stateMutability!=="nonpayable"?` ${a.stateMutability}`:""}${a.outputs.length?` returns (${Jr(a.outputs)})`:""}`:a.type==="event"?`event ${a.name}(${Jr(a.inputs)})`:a.type==="error"?`error ${a.name}(${Jr(a.inputs)})`:a.type==="constructor"?`constructor(${Jr(a.inputs)})${a.stateMutability==="payable"?" payable":""}`:a.type==="fallback"?"fallback()":"receive() external payable"}var uy=ae(()=>{"use strict";cy()});var py=ae(()=>{"use strict";uy()});function Ut(a,{includeName:t=!1}={}){if(a.type!=="function"&&a.type!=="event"&&a.type!=="error")throw new Io(a.type);return`${a.name}(${xo(a.inputs,{includeName:t})})`}function xo(a,{includeName:t=!1}={}){return a?a.map(e=>S_(e,{includeName:t})).join(t?", ":","):""}function S_(a,{includeName:t}){return a.type.startsWith("tuple")?`(${xo(a.components,{includeName:t})})${a.type.slice(5)}`:a.type+(t&&a.name?` ${a.name}`:"")}var dr=ae(()=>{"use strict";Lt()});function nt(a,{strict:t=!0}={}){return!a||typeof a!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(a):a.startsWith("0x")}var Ei=ae(()=>{"use strict"});function Ze(a){return nt(a,{strict:!1})?Math.ceil((a.length-2)/2):a.length}var Ba=ae(()=>{"use strict";Ei()});var my,dy=ae(()=>{"use strict";my="2.9.3"});var hy,hr,fy,Eo=ae(()=>{"use strict";dy();hy=a=>a,hr=a=>a,fy=()=>`viem@${my}`});function by(a,t){return t?.(a)?a:a&&typeof a=="object"&&"cause"in a?by(a.cause,t):t?null:a}var B,Ge=ae(()=>{"use strict";Eo();B=class a extends Error{constructor(t,e={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:fy()});let i=e.cause instanceof a?e.cause.details:e.cause?.message?e.cause.message:e.details,r=e.cause instanceof a&&e.cause.docsPath||e.docsPath;this.message=[t||"An error occurred.","",...e.metaMessages?[...e.metaMessages,""]:[],...r?[`Docs: https://viem.sh${r}${e.docsSlug?`#${e.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join(`
`),e.cause&&(this.cause=e.cause),this.details=i,this.docsPath=r,this.metaMessages=e.metaMessages,this.shortMessage=t}walk(t){return by(this,t)}}});var So,en,fr,Si,To,Co,ko,br,Ao,yr,tn,ia,Do,Rl,Mo,di,Ti,Po,Bo,Ro,Io,Lt=ae(()=>{"use strict";dr();Ba();Ge();So=class extends B{constructor({docsPath:t}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}},en=class extends B{constructor({docsPath:t}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}},fr=class extends B{constructor({data:t,params:e,size:i}){super([`Data size of ${i} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${xo(e,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=e,this.size=i}},Si=class extends B{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}},To=class extends B{constructor({expectedLength:t,givenLength:e,type:i}){super([`ABI encoding array length mismatch for type ${i}.`,`Expected length: ${t}`,`Given length: ${e}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}},Co=class extends B{constructor({expectedSize:t,value:e}){super(`Size of bytes "${e}" (bytes${Ze(e)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}},ko=class extends B{constructor({expectedLength:t,givenLength:e}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${e}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}},br=class extends B{constructor(t,{docsPath:e}){super([`Encoded error signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}},Ao=class extends B{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}},yr=class extends B{constructor(t,{docsPath:e}){super([`Encoded event signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}},tn=class extends B{constructor(t,{docsPath:e}={}){super([`Event ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}},ia=class extends B{constructor(t,{docsPath:e}={}){super([`Function ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}},Do=class extends B{constructor(t,{docsPath:e}){super([`Function "${t}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}},Rl=class extends B{constructor(t,e){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${t.type}\` in \`${Ut(t.abiItem)}\`, and`,`\`${e.type}\` in \`${Ut(e.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}},Mo=class extends B{constructor({expectedSize:t,givenSize:e}){super(`Expected bytes${t}, got bytes${e}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}},di=class extends B{constructor({abiItem:t,data:e,params:i,size:r}){super([`Data size of ${r} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${xo(i,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=e,this.params=i,this.size=r}},Ti=class extends B{constructor({abiItem:t,param:e}){super([`Expected a topic for indexed event parameter${e.name?` "${e.name}"`:""} on event "${Ut(t,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}},Po=class extends B{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}},Bo=class extends B{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}},Ro=class extends B{constructor(t){super([`Value "${t}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}},Io=class extends B{constructor(t){super([`"${t}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}});var No,Oo,Ho,Ol=ae(()=>{"use strict";Ge();No=class extends B{constructor({offset:t,position:e,size:i}){super(`Slice ${e==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${i}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}},Oo=class extends B{constructor({size:t,targetSize:e,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${t}) exceeds padding size (${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}},Ho=class extends B{constructor({size:t,targetSize:e,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} is expected to be ${e} ${i} long, but is ${t} ${i} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}});function Ra(a,{dir:t,size:e=32}={}){return typeof a=="string"?aa(a,{dir:t,size:e}):T_(a,{dir:t,size:e})}function aa(a,{dir:t,size:e=32}={}){if(e===null)return a;let i=a.replace("0x","");if(i.length>e*2)throw new Oo({size:Math.ceil(i.length/2),targetSize:e,type:"hex"});return`0x${i[t==="right"?"padEnd":"padStart"](e*2,"0")}`}function T_(a,{dir:t,size:e=32}={}){if(e===null)return a;if(a.length>e)throw new Oo({size:a.length,targetSize:e,type:"bytes"});let i=new Uint8Array(e);for(let r=0;r<e;r++){let n=t==="right";i[n?r:e-r-1]=a[n?r:a.length-r-1]}return i}var Hl=ae(()=>{"use strict";Ol()});var Ul,Vl,Gl,zl=ae(()=>{"use strict";Ge();Ul=class extends B{constructor({max:t,min:e,signed:i,size:r,value:n}){super(`Number "${n}" is not in safe ${r?`${r*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${t?`(${e} to ${t})`:`(above ${e})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}},Vl=class extends B{constructor(t){super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}},Gl=class extends B{constructor({givenSize:t,maxSize:e}){super(`Size cannot exceed ${e} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}});function gr(a,{dir:t="left"}={}){let e=typeof a=="string"?a.replace("0x",""):a,i=0;for(let r=0;r<e.length-1&&e[t==="left"?r:e.length-r-1].toString()==="0";r++)i++;return e=t==="left"?e.slice(i):e.slice(0,e.length-i),typeof a=="string"?(e.length===1&&t==="right"&&(e=`${e}0`),`0x${e.length%2===1?`0${e}`:e}`):e}var Fl=ae(()=>{"use strict"});function ni(a,{size:t}){if(Ze(a)>t)throw new Gl({givenSize:Ze(a),maxSize:t})}function Na(a,t={}){let{signed:e}=t;t.size&&ni(a,{size:t.size});let i=BigInt(a);if(!e)return i;let r=(a.length-2)/2,n=(1n<<BigInt(r)*8n-1n)-1n;return i<=n?i:i-BigInt(`0x${"f".padStart(r*2,"f")}`)-1n}function kt(a,t={}){return Number(Na(a,t))}var hi=ae(()=>{"use strict";zl();Ba()});function et(a,t={}){return typeof a=="number"||typeof a=="bigint"?he(a,t):typeof a=="string"?vr(a,t):typeof a=="boolean"?Uo(a,t):bt(a,t)}function Uo(a,t={}){let e=`0x${Number(a)}`;return typeof t.size=="number"?(ni(e,{size:t.size}),Ra(e,{size:t.size})):e}function bt(a,t={}){let e="";for(let r=0;r<a.length;r++)e+=C_[a[r]];let i=`0x${e}`;return typeof t.size=="number"?(ni(i,{size:t.size}),Ra(i,{dir:"right",size:t.size})):i}function he(a,t={}){let{signed:e,size:i}=t,r=BigInt(a),n;i?e?n=(1n<<BigInt(i)*8n-1n)-1n:n=2n**(BigInt(i)*8n)-1n:typeof a=="number"&&(n=BigInt(Number.MAX_SAFE_INTEGER));let o=typeof n=="bigint"&&e?-n-1n:0;if(n&&r>n||r<o){let l=typeof a=="bigint"?"n":"";throw new Ul({max:n?`${n}${l}`:void 0,min:`${o}${l}`,signed:e,size:i,value:`${a}${l}`})}let s=`0x${(e&&r<0?(1n<<BigInt(i*8))+BigInt(r):r).toString(16)}`;return i?Ra(s,{size:i}):s}function vr(a,t={}){let e=k_.encode(a);return bt(e,t)}var C_,k_,Pe=ae(()=>{"use strict";zl();Hl();hi();C_=Array.from({length:256},(a,t)=>t.toString(16).padStart(2,"0"));k_=new TextEncoder});function oi(a,t={}){return typeof a=="number"||typeof a=="bigint"?M_(a,t):typeof a=="boolean"?D_(a,t):nt(a)?jl(a,t):Xt(a,t)}function D_(a,t={}){let e=new Uint8Array(1);return e[0]=Number(a),typeof t.size=="number"?(ni(e,{size:t.size}),Ra(e,{size:t.size})):e}function yy(a){if(a>=ra.zero&&a<=ra.nine)return a-ra.zero;if(a>=ra.A&&a<=ra.F)return a-(ra.A-10);if(a>=ra.a&&a<=ra.f)return a-(ra.a-10)}function jl(a,t={}){let e=a;t.size&&(ni(e,{size:t.size}),e=Ra(e,{dir:"right",size:t.size}));let i=e.slice(2);i.length%2&&(i=`0${i}`);let r=i.length/2,n=new Uint8Array(r);for(let o=0,s=0;o<r;o++){let l=yy(i.charCodeAt(s++)),c=yy(i.charCodeAt(s++));if(l===void 0||c===void 0)throw new B(`Invalid byte sequence ("${i[s-2]}${i[s-1]}" in "${i}").`);n[o]=l*16+c}return n}function M_(a,t){let e=he(a,t);return jl(e)}function Xt(a,t={}){let e=A_.encode(a);return typeof t.size=="number"?(ni(e,{size:t.size}),Ra(e,{dir:"right",size:t.size})):e}var A_,ra,Ci=ae(()=>{"use strict";Ge();Ei();Hl();hi();Pe();A_=new TextEncoder;ra={zero:48,nine:57,A:65,F:70,a:97,f:102}});function Vo(a){if(!Number.isSafeInteger(a)||a<0)throw new Error(`Wrong positive integer: ${a}`)}function Go(a,...t){if(!(a instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(a.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${a.length}`)}function gy(a){if(typeof a!="function"||typeof a.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Vo(a.outputLen),Vo(a.blockLen)}function na(a,t=!0){if(a.destroyed)throw new Error("Hash instance has been destroyed");if(t&&a.finished)throw new Error("Hash#digest() has already been called")}function ql(a,t){Go(a);let e=t.outputLen;if(a.length<e)throw new Error(`digestInto() expects output buffer of length at least ${e}`)}var Wl=ae(()=>{"use strict"});function P_(a,t=!1){return t?{h:Number(a&Kl),l:Number(a>>vy&Kl)}:{h:Number(a>>vy&Kl)|0,l:Number(a&Kl)|0}}function Ly(a,t=!1){let e=new Uint32Array(a.length),i=new Uint32Array(a.length);for(let r=0;r<a.length;r++){let{h:n,l:o}=P_(a[r],t);[e[r],i[r]]=[n,o]}return[e,i]}var Kl,vy,_y,wy,xy,Iy,Ey=ae(()=>{"use strict";Kl=BigInt(4294967295),vy=BigInt(32);_y=(a,t,e)=>a<<e|t>>>32-e,wy=(a,t,e)=>t<<e|a>>>32-e,xy=(a,t,e)=>t<<e-32|a>>>64-e,Iy=(a,t,e)=>a<<e-32|t>>>64-e});var Yl,Sy=ae(()=>{"use strict";Yl=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0});function R_(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function Ha(a){if(typeof a=="string"&&(a=R_(a)),!Ty(a))throw new Error(`expected Uint8Array, got ${typeof a}`);return a}function ky(...a){let t=new Uint8Array(a.reduce((i,r)=>i+r.length,0)),e=0;return a.forEach(i=>{if(!Ty(i))throw new Error("Uint8Array expected");t.set(i,e),e+=i.length}),t}function Xl(a){let t=i=>a().update(Ha(i)).digest(),e=a();return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=()=>a(),t}function Ay(a){let t=(i,r)=>a(r).update(Ha(i)).digest(),e=a({});return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=i=>a(i),t}function Dy(a=32){if(Yl&&typeof Yl.getRandomValues=="function")return Yl.getRandomValues(new Uint8Array(a));throw new Error("crypto.getRandomValues must be defined")}var Ty,Cy,$l,ki,B_,Oa,$1,an=ae(()=>{"use strict";Sy();Ty=a=>a instanceof Uint8Array,Cy=a=>new Uint32Array(a.buffer,a.byteOffset,Math.floor(a.byteLength/4)),$l=a=>new DataView(a.buffer,a.byteOffset,a.byteLength),ki=(a,t)=>a<<32-t|a>>>t,B_=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!B_)throw new Error("Non little-endian hardware is not supported");Oa=class{clone(){return this._cloneInto()}},$1={}.toString});function F_(a,t=24){let e=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let o=0;o<10;o++)e[o]=a[o]^a[o+10]^a[o+20]^a[o+30]^a[o+40];for(let o=0;o<10;o+=2){let s=(o+8)%10,l=(o+2)%10,c=e[l],u=e[l+1],p=My(c,u,1)^e[s],b=Py(c,u,1)^e[s+1];for(let x=0;x<50;x+=10)a[o+x]^=p,a[o+x+1]^=b}let r=a[2],n=a[3];for(let o=0;o<24;o++){let s=Ry[o],l=My(r,n,s),c=Py(r,n,s),u=By[o];r=a[u],n=a[u+1],a[u]=l,a[u+1]=c}for(let o=0;o<50;o+=10){for(let s=0;s<10;s++)e[s]=a[o+s];for(let s=0;s<10;s++)a[o+s]^=~e[(s+2)%10]&e[(s+4)%10]}a[0]^=G_[i],a[1]^=z_[i]}e.fill(0)}var By,Ry,Ny,N_,zo,O_,H_,U_,V_,G_,z_,My,Py,Ql,Ua,eC,tC,iC,aC,rC,Oy,nC,oC,Hy,sC,lC,Uy=ae(()=>{"use strict";Wl();Ey();an();[By,Ry,Ny]=[[],[],[]],N_=BigInt(0),zo=BigInt(1),O_=BigInt(2),H_=BigInt(7),U_=BigInt(256),V_=BigInt(113);for(let a=0,t=zo,e=1,i=0;a<24;a++){[e,i]=[i,(2*e+3*i)%5],By.push(2*(5*i+e)),Ry.push((a+1)*(a+2)/2%64);let r=N_;for(let n=0;n<7;n++)t=(t<<zo^(t>>H_)*V_)%U_,t&O_&&(r^=zo<<(zo<<BigInt(n))-zo);Ny.push(r)}[G_,z_]=Ly(Ny,!0),My=(a,t,e)=>e>32?xy(a,t,e):_y(a,t,e),Py=(a,t,e)=>e>32?Iy(a,t,e):wy(a,t,e);Ql=class a extends Oa{constructor(t,e,i,r=!1,n=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=i,this.enableXOF=r,this.rounds=n,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Vo(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Cy(this.state)}keccak(){F_(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){na(this);let{blockLen:e,state:i}=this;t=Ha(t);let r=t.length;for(let n=0;n<r;){let o=Math.min(e-this.pos,r-n);for(let s=0;s<o;s++)i[this.pos++]^=t[n++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:e,pos:i,blockLen:r}=this;t[i]^=e,e&128&&i===r-1&&this.keccak(),t[r-1]^=128,this.keccak()}writeInto(t){na(this,!1),Go(t),this.finish();let e=this.state,{blockLen:i}=this;for(let r=0,n=t.length;r<n;){this.posOut>=i&&this.keccak();let o=Math.min(i-this.posOut,n-r);t.set(e.subarray(this.posOut,this.posOut+o),r),this.posOut+=o,r+=o}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Vo(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(ql(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:e,suffix:i,outputLen:r,rounds:n,enableXOF:o}=this;return t||(t=new a(e,i,r,o,n)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=n,t.suffix=i,t.outputLen=r,t.enableXOF=o,t.destroyed=this.destroyed,t}},Ua=(a,t,e)=>Xl(()=>new Ql(t,a,e)),eC=Ua(6,144,224/8),tC=Ua(6,136,256/8),iC=Ua(6,104,384/8),aC=Ua(6,72,512/8),rC=Ua(1,144,224/8),Oy=Ua(1,136,256/8),nC=Ua(1,104,384/8),oC=Ua(1,72,512/8),Hy=(a,t,e)=>Ay((i={})=>new Ql(t,a,i.dkLen===void 0?e:i.dkLen,!0)),sC=Hy(31,168,128/8),lC=Hy(31,136,256/8)});function dt(a,t){let e=t||"hex",i=Oy(nt(a,{strict:!1})?oi(a):a);return e==="bytes"?i:et(i)}var Va=ae(()=>{"use strict";Uy();Ei();Ci();Pe()});function Vy(a){return j_(a)}var j_,Gy=ae(()=>{"use strict";Ci();Va();j_=a=>dt(oi(a))});function zy(a){let t=!0,e="",i=0,r="",n=!1;for(let o=0;o<a.length;o++){let s=a[o];if(["(",")",","].includes(s)&&(t=!0),s==="("&&i++,s===")"&&i--,!!t){if(i===0){if(s===" "&&["event","function",""].includes(r))r="";else if(r+=s,s===")"){n=!0;break}continue}if(s===" "){a[o-1]!==","&&e!==","&&e!==",("&&(e="",t=!1);continue}r+=s,e+=s}}if(!n)throw new B("Unable to normalize signature.");return r}var Fy=ae(()=>{"use strict";Ge()});var jy,qy=ae(()=>{"use strict";py();Fy();jy=a=>{let t=(()=>typeof a=="string"?a:bf(a))();return zy(t)}});function Zl(a){return Vy(jy(a))}var yf=ae(()=>{"use strict";Gy();qy()});var rn,Jl=ae(()=>{"use strict";yf();rn=Zl});var At,Lr=ae(()=>{"use strict";Ge();At=class extends B{constructor({address:t}){super(`Address "${t}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}});var ec,Wy=ae(()=>{"use strict";ec=class extends Map{constructor(t){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=t}set(t,e){return super.set(t,e),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}});function _r(a,t){let e=t?`${t}${a.toLowerCase()}`:a.substring(2).toLowerCase(),i=dt(Xt(e),"bytes"),r=(t?e.substring(`${t}0x`.length):e).split("");for(let n=0;n<40;n+=2)i[n>>1]>>4>=8&&r[n]&&(r[n]=r[n].toUpperCase()),(i[n>>1]&15)>=8&&r[n+1]&&(r[n+1]=r[n+1].toUpperCase());return`0x${r.join("")}`}function Ky(a,t){if(!_t(a))throw new At({address:a});return _r(a,t)}var Fo=ae(()=>{"use strict";Lr();Ci();Va();Ga()});function _t(a,{strict:t=!0}={}){if(gf.has(a))return gf.get(a);let e=(()=>q_.test(a)?a.toLowerCase()===a?!0:t?_r(a)===a:!0:!1)();return gf.set(a,e),e}var q_,gf,Ga=ae(()=>{"use strict";Wy();Fo();q_=/^0x[a-fA-F0-9]{40}$/,gf=new ec(8192)});function Vt(a){return typeof a[0]=="string"?jo(a):W_(a)}function W_(a){let t=0;for(let r of a)t+=r.length;let e=new Uint8Array(t),i=0;for(let r of a)e.set(r,i),i+=r.length;return e}function jo(a){return`0x${a.reduce((t,e)=>t+e.replace("0x",""),"")}`}var za=ae(()=>{"use strict"});function wr(a,t,e,{strict:i}={}){return nt(a,{strict:!1})?K_(a,t,e,{strict:i}):vf(a,t,e,{strict:i})}function Yy(a,t){if(typeof t=="number"&&t>0&&t>Ze(a)-1)throw new No({offset:t,position:"start",size:Ze(a)})}function $y(a,t,e){if(typeof t=="number"&&typeof e=="number"&&Ze(a)!==e-t)throw new No({offset:e,position:"end",size:Ze(a)})}function vf(a,t,e,{strict:i}={}){Yy(a,t);let r=a.slice(t,e);return i&&$y(r,t,e),r}function K_(a,t,e,{strict:i}={}){Yy(a,t);let r=`0x${a.replace("0x","").slice((t??0)*2,(e??a.length)*2)}`;return i&&$y(r,t,e),r}var qo=ae(()=>{"use strict";Ol();Ei();Ba()});function Ai(a,t){if(a.length!==t.length)throw new ko({expectedLength:a.length,givenLength:t.length});let e=Y_({params:a,values:t}),i=_f(e);return i.length===0?"0x":i}function Y_({params:a,values:t}){let e=[];for(let i=0;i<a.length;i++)e.push(Lf({param:a[i],value:t[i]}));return e}function Lf({param:a,value:t}){let e=tc(a.type);if(e){let[i,r]=e;return X_(t,{length:i,param:{...a,type:r}})}if(a.type==="tuple")return t0(t,{param:a});if(a.type==="address")return $_(t);if(a.type==="bool")return Z_(t);if(a.type.startsWith("uint")||a.type.startsWith("int")){let i=a.type.startsWith("int");return J_(t,{signed:i})}if(a.type.startsWith("bytes"))return Q_(t,{param:a});if(a.type==="string")return e0(t);throw new Po(a.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function _f(a){let t=0;for(let n=0;n<a.length;n++){let{dynamic:o,encoded:s}=a[n];o?t+=32:t+=Ze(s)}let e=[],i=[],r=0;for(let n=0;n<a.length;n++){let{dynamic:o,encoded:s}=a[n];o?(e.push(he(t+r,{size:32})),i.push(s),r+=Ze(s)):e.push(s)}return Vt([...e,...i])}function $_(a){if(!_t(a))throw new At({address:a});return{dynamic:!1,encoded:aa(a.toLowerCase())}}function X_(a,{length:t,param:e}){let i=t===null;if(!Array.isArray(a))throw new Ro(a);if(!i&&a.length!==t)throw new To({expectedLength:t,givenLength:a.length,type:`${e.type}[${t}]`});let r=!1,n=[];for(let o=0;o<a.length;o++){let s=Lf({param:e,value:a[o]});s.dynamic&&(r=!0),n.push(s)}if(i||r){let o=_f(n);if(i){let s=he(n.length,{size:32});return{dynamic:!0,encoded:n.length>0?Vt([s,o]):s}}if(r)return{dynamic:!0,encoded:o}}return{dynamic:!1,encoded:Vt(n.map(({encoded:o})=>o))}}function Q_(a,{param:t}){let[,e]=t.type.split("bytes"),i=Ze(a);if(!e){let r=a;return i%32!==0&&(r=aa(r,{dir:"right",size:Math.ceil((a.length-2)/2/32)*32})),{dynamic:!0,encoded:Vt([aa(he(i,{size:32})),r])}}if(i!==parseInt(e))throw new Co({expectedSize:parseInt(e),value:a});return{dynamic:!1,encoded:aa(a,{dir:"right"})}}function Z_(a){if(typeof a!="boolean")throw new B(`Invalid boolean value: "${a}" (type: ${typeof a}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:aa(Uo(a))}}function J_(a,{signed:t}){return{dynamic:!1,encoded:he(a,{size:32,signed:t})}}function e0(a){let t=vr(a),e=Math.ceil(Ze(t)/32),i=[];for(let r=0;r<e;r++)i.push(aa(wr(t,r*32,(r+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Vt([aa(he(Ze(t),{size:32})),...i])}}function t0(a,{param:t}){let e=!1,i=[];for(let r=0;r<t.components.length;r++){let n=t.components[r],o=Array.isArray(a)?r:n.name,s=Lf({param:n,value:a[o]});i.push(s),s.dynamic&&(e=!0)}return{dynamic:e,encoded:e?_f(i):Vt(i.map(({encoded:r})=>r))}}function tc(a){let t=a.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}var xr=ae(()=>{"use strict";Lt();Lr();Ge();Ga();za();Hl();Ba();qo();Pe()});var nn,ic=ae(()=>{"use strict";qo();yf();nn=a=>wr(Zl(a),0,4)});function Hi(a){let{abi:t,args:e=[],name:i}=a,r=nt(i,{strict:!1}),n=t.filter(s=>r?s.type==="function"?nn(s)===i:s.type==="event"?rn(s)===i:!1:"name"in s&&s.name===i);if(n.length===0)return;if(n.length===1)return n[0];let o;for(let s of n){if(!("inputs"in s))continue;if(!e||e.length===0){if(!s.inputs||s.inputs.length===0)return s;continue}if(!s.inputs||s.inputs.length===0||s.inputs.length!==e.length)continue;if(e.every((c,u)=>{let p="inputs"in s&&s.inputs[u];return p?wf(c,p):!1})){if(o&&"inputs"in o&&o.inputs){let c=Xy(s.inputs,o.inputs,e);if(c)throw new Rl({abiItem:s,type:c[0]},{abiItem:o,type:c[1]})}o=s}}return o||n[0]}function wf(a,t){let e=typeof a,i=t.type;switch(i){case"address":return _t(a,{strict:!1});case"bool":return e==="boolean";case"function":return e==="string";case"string":return e==="string";default:return i==="tuple"&&"components"in t?Object.values(t.components).every((r,n)=>wf(Object.values(a)[n],r)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)?e==="number"||e==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)?e==="string"||a instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)?Array.isArray(a)&&a.every(r=>wf(r,{...t,type:i.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function Xy(a,t,e){for(let i in a){let r=a[i],n=t[i];if(r.type==="tuple"&&n.type==="tuple"&&"components"in r&&"components"in n)return Xy(r.components,n.components,e[i]);let o=[r.type,n.type];if((()=>o.includes("address")&&o.includes("bytes20")?!0:o.includes("address")&&o.includes("string")?_t(e[i],{strict:!1}):o.includes("address")&&o.includes("bytes")?_t(e[i],{strict:!1}):!1)())return o}}var on=ae(()=>{"use strict";Lt();Ei();Ga();Jl();ic()});function tt(a){return typeof a=="string"?{address:a,type:"json-rpc"}:a}var si=ae(()=>{"use strict"});function eg(a){let{abi:t,args:e,functionName:i}=a,r=t[0];if(i){let n=Hi({abi:t,args:e,name:i});if(!n)throw new ia(i,{docsPath:Jy});r=n}if(r.type!=="function")throw new ia(void 0,{docsPath:Jy});return{abi:[r],functionName:nn(Ut(r))}}var Jy,tg=ae(()=>{"use strict";Lt();ic();dr();on();Jy="/docs/contract/encodeFunctionData"});function Dt(a){let{args:t}=a,{abi:e,functionName:i}=(()=>a.abi.length===1&&a.functionName?.startsWith("0x")?a:eg(a))(),r=e[0],n=i,o="inputs"in r&&r.inputs?Ai(r.inputs,t??[]):void 0;return jo([n,o??"0x"])}var oa=ae(()=>{"use strict";za();xr();tg()});var rc,ig,ag,nc=ae(()=>{"use strict";rc={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},ig={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},ag={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}});var Wo,sn,oc,xf=ae(()=>{"use strict";Ge();Wo=class extends B{constructor({offset:t}){super(`Offset \`${t}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}},sn=class extends B{constructor({length:t,position:e}){super(`Position \`${e}\` is out of bounds (\`0 < position < ${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}},oc=class extends B{constructor({count:t,limit:e}){super(`Recursive read limit of \`${e}\` exceeded (recursive read count: \`${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}});function rg(a,{recursiveReadLimit:t=8192}={}){let e=Object.create(i0);return e.bytes=a,e.dataView=new DataView(a.buffer,a.byteOffset,a.byteLength),e.positionReadCount=new Map,e.recursiveReadLimit=t,e}var i0,ng=ae(()=>{"use strict";xf();i0={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new oc({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(a){if(a<0||a>this.bytes.length-1)throw new sn({length:this.bytes.length,position:a})},decrementPosition(a){if(a<0)throw new Wo({offset:a});let t=this.position-a;this.assertPosition(t),this.position=t},getReadCount(a){return this.positionReadCount.get(a||this.position)||0},incrementPosition(a){if(a<0)throw new Wo({offset:a});let t=this.position+a;this.assertPosition(t),this.position=t},inspectByte(a){let t=a??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(a,t){let e=t??this.position;return this.assertPosition(e+a-1),this.bytes.subarray(e,e+a)},inspectUint8(a){let t=a??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(a){let t=a??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(a){let t=a??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(a){let t=a??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushBytes(a){this.assertPosition(this.position+a.length-1),this.bytes.set(a,this.position),this.position+=a.length},pushUint8(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushUint16(a){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,a),this.position+=2},pushUint24(a){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,a>>8),this.dataView.setUint8(this.position+2,a&255),this.position+=3},pushUint32(a){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,a),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let a=this.inspectByte();return this.position++,a},readBytes(a,t){this.assertReadLimit(),this._touch();let e=this.inspectBytes(a);return this.position+=t??a,e},readUint8(){this.assertReadLimit(),this._touch();let a=this.inspectUint8();return this.position+=1,a},readUint16(){this.assertReadLimit(),this._touch();let a=this.inspectUint16();return this.position+=2,a},readUint24(){this.assertReadLimit(),this._touch();let a=this.inspectUint24();return this.position+=3,a},readUint32(){this.assertReadLimit(),this._touch();let a=this.inspectUint32();return this.position+=4,a},get remaining(){return this.bytes.length-this.position},setPosition(a){let t=this.position;return this.assertPosition(a),this.position=a,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let a=this.getReadCount();this.positionReadCount.set(this.position,a+1),a>0&&this.recursiveReadCount++}}});function og(a,t={}){typeof t.size<"u"&&ni(a,{size:t.size});let e=bt(a,t);return Na(e,t)}function sg(a,t={}){let e=a;if(typeof t.size<"u"&&(ni(e,{size:t.size}),e=gr(e)),e.length>1||e[0]>1)throw new Vl(e);return!!e[0]}function Ui(a,t={}){typeof t.size<"u"&&ni(a,{size:t.size});let e=bt(a,t);return kt(e,t)}function lg(a,t={}){let e=a;return typeof t.size<"u"&&(ni(e,{size:t.size}),e=gr(e,{dir:"right"})),new TextDecoder().decode(e)}var cg=ae(()=>{"use strict";zl();Fl();hi();Pe()});function Ir(a,t){let e=typeof t=="string"?jl(t):t,i=rg(e);if(Ze(e)===0&&a.length>0)throw new Si;if(Ze(t)&&Ze(t)<32)throw new fr({data:typeof t=="string"?t:bt(t),params:a,size:Ze(t)});let r=0,n=[];for(let o=0;o<a.length;++o){let s=a[o];i.setPosition(r);let[l,c]=ln(i,s,{staticPosition:0});r+=c,n.push(l)}return n}function ln(a,t,{staticPosition:e}){let i=tc(t.type);if(i){let[r,n]=i;return r0(a,{...t,type:n},{length:r,staticPosition:e})}if(t.type==="tuple")return l0(a,t,{staticPosition:e});if(t.type==="address")return a0(a);if(t.type==="bool")return n0(a);if(t.type.startsWith("bytes"))return o0(a,t,{staticPosition:e});if(t.type.startsWith("uint")||t.type.startsWith("int"))return s0(a,t);if(t.type==="string")return c0(a,{staticPosition:e});throw new Bo(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function a0(a){let t=a.readBytes(32);return[_r(bt(vf(t,-20))),32]}function r0(a,t,{length:e,staticPosition:i}){if(!e){let o=Ui(a.readBytes(If)),s=i+o,l=s+ug;a.setPosition(s);let c=Ui(a.readBytes(ug)),u=Ko(t),p=0,b=[];for(let x=0;x<c;++x){a.setPosition(l+(u?x*32:p));let[_,y]=ln(a,t,{staticPosition:l});p+=y,b.push(_)}return a.setPosition(i+32),[b,32]}if(Ko(t)){let o=Ui(a.readBytes(If)),s=i+o,l=[];for(let c=0;c<e;++c){a.setPosition(s+c*32);let[u]=ln(a,t,{staticPosition:s});l.push(u)}return a.setPosition(i+32),[l,32]}let r=0,n=[];for(let o=0;o<e;++o){let[s,l]=ln(a,t,{staticPosition:i+r});r+=l,n.push(s)}return[n,r]}function n0(a){return[sg(a.readBytes(32),{size:32}),32]}function o0(a,t,{staticPosition:e}){let[i,r]=t.type.split("bytes");if(!r){let o=Ui(a.readBytes(32));a.setPosition(e+o);let s=Ui(a.readBytes(32));if(s===0)return a.setPosition(e+32),["0x",32];let l=a.readBytes(s);return a.setPosition(e+32),[bt(l),32]}return[bt(a.readBytes(parseInt(r),32)),32]}function s0(a,t){let e=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256"),r=a.readBytes(32);return[i>48?og(r,{signed:e}):Ui(r,{signed:e}),32]}function l0(a,t,{staticPosition:e}){let i=t.components.length===0||t.components.some(({name:o})=>!o),r=i?[]:{},n=0;if(Ko(t)){let o=Ui(a.readBytes(If)),s=e+o;for(let l=0;l<t.components.length;++l){let c=t.components[l];a.setPosition(s+n);let[u,p]=ln(a,c,{staticPosition:s});n+=p,r[i?l:c?.name]=u}return a.setPosition(e+32),[r,32]}for(let o=0;o<t.components.length;++o){let s=t.components[o],[l,c]=ln(a,s,{staticPosition:e});r[i?o:s?.name]=l,n+=c}return[r,n]}function c0(a,{staticPosition:t}){let e=Ui(a.readBytes(32)),i=t+e;a.setPosition(i);let r=Ui(a.readBytes(32));if(r===0)return a.setPosition(t+32),["",32];let n=a.readBytes(r,32),o=lg(gr(n));return a.setPosition(t+32),[o,32]}function Ko(a){let{type:t}=a;if(t==="string"||t==="bytes"||t.endsWith("[]"))return!0;if(t==="tuple")return a.components?.some(Ko);let e=tc(a.type);return!!(e&&Ko({...a,type:e[1]}))}var ug,If,sc=ae(()=>{"use strict";Lt();Fo();ng();Ba();qo();Fl();cg();Ci();Pe();xr();ug=32,If=32});function lc(a){let{abi:t,data:e}=a,i=wr(e,0,4);if(i==="0x")throw new Si;let n=[...t||[],ig,ag].find(o=>o.type==="error"&&i===nn(Ut(o)));if(!n)throw new br(i,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:n,args:"inputs"in n&&n.inputs&&n.inputs.length>0?Ir(n.inputs,wr(e,4)):void 0,errorName:n.name}}var Ef=ae(()=>{"use strict";nc();Lt();qo();ic();sc();dr()});var je,li=ae(()=>{"use strict";je=(a,t,e)=>JSON.stringify(a,(i,r)=>{let n=typeof r=="bigint"?r.toString():r;return typeof t=="function"?t(i,n):n},e)});function Sf({abiItem:a,args:t,includeFunctionName:e=!0,includeName:i=!1}){if("name"in a&&"inputs"in a&&a.inputs)return`${e?a.name:""}(${a.inputs.map((r,n)=>`${i&&r.name?`${r.name}: `:""}${typeof t[n]=="object"?je(t[n]):t[n]}`).join(", ")})`}var pg=ae(()=>{"use strict";li()});var cc,mg,uc=ae(()=>{"use strict";cc={gwei:9,wei:18},mg={ether:-9,wei:9}});function pc(a,t){let e=a.toString(),i=e.startsWith("-");i&&(e=e.slice(1)),e=e.padStart(t,"0");let[r,n]=[e.slice(0,e.length-t),e.slice(e.length-t)];return n=n.replace(/(0+)$/,""),`${i?"-":""}${r||"0"}${n?`.${n}`:""}`}var Tf=ae(()=>{"use strict"});function Vi(a,t="wei"){return pc(a,cc[t])}var Yo=ae(()=>{"use strict";uc();Tf()});function yt(a,t="wei"){return pc(a,mg[t])}var cn=ae(()=>{"use strict";uc();Tf()});function dg(a){return a.reduce((t,{slot:e,value:i})=>`${t}        ${e}: ${i}
`,"")}function hg(a){return a.reduce((t,{address:e,...i})=>{let r=`${t}    ${e}:
`;return i.nonce&&(r+=`      nonce: ${i.nonce}
`),i.balance&&(r+=`      balance: ${i.balance}
`),i.code&&(r+=`      code: ${i.code}
`),i.state&&(r+=`      state:
`,r+=dg(i.state)),i.stateDiff&&(r+=`      stateDiff:
`,r+=dg(i.stateDiff)),r},`  State Override:
`).slice(0,-1)}var mc,dc,Cf=ae(()=>{"use strict";Ge();mc=class extends B{constructor({address:t}){super(`State for account "${t}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}},dc=class extends B{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}});function Er(a){let t=Object.entries(a).map(([i,r])=>r===void 0||r===!1?null:[i,r]).filter(Boolean),e=t.reduce((i,[r])=>Math.max(i,r.length),0);return t.map(([i,r])=>`  ${`${i}:`.padEnd(e+1)}  ${r}`).join(`
`)}var hc,fc,bc,un,pn,yc,sa=ae(()=>{"use strict";Yo();cn();Ge();hc=class extends B{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}},fc=class extends B{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Er(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}},bc=class extends B{constructor(t,{account:e,docsPath:i,chain:r,data:n,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:p,value:b}){let x=Er({chain:r&&`${r?.name} (id: ${r?.id})`,from:e?.address,to:p,value:typeof b<"u"&&`${Vi(b)} ${r?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:typeof s<"u"&&`${yt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${yt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${yt(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",x].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}},un=class extends B{constructor({blockHash:t,blockNumber:e,blockTag:i,hash:r,index:n}){let o="Transaction";i&&n!==void 0&&(o=`Transaction at block time "${i}" at index "${n}"`),t&&n!==void 0&&(o=`Transaction at block hash "${t}" at index "${n}"`),e&&n!==void 0&&(o=`Transaction at block number "${e}" at index "${n}"`),r&&(o=`Transaction with hash "${r}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}},pn=class extends B{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}},yc=class extends B{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}});var Sr,$o,Qt,Xo,la,ja=ae(()=>{"use strict";si();nc();Ef();dr();pg();on();Yo();cn();Lt();Ge();Cf();sa();Eo();Sr=class extends B{constructor(t,{account:e,docsPath:i,chain:r,data:n,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:p,value:b,stateOverride:x}){let _=e?tt(e):void 0,y=Er({from:_?.address,to:p,value:typeof b<"u"&&`${Vi(b)} ${r?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:typeof s<"u"&&`${yt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${yt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${yt(c)} gwei`,nonce:u});x&&(y+=`
${hg(x)}`),super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",y].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}},$o=class extends B{constructor(t,{abi:e,args:i,contractAddress:r,docsPath:n,functionName:o,sender:s}){let l=Hi({abi:e,args:i,name:o}),c=l?Sf({abiItem:l,args:i,includeFunctionName:!1,includeName:!1}):void 0,u=l?Ut(l,{includeName:!0}):void 0,p=Er({address:r&&hy(r),function:u,args:c&&c!=="()"&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${c}`,sender:s});super(t.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:t,docsPath:n,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=e,this.args=i,this.cause=t,this.contractAddress=r,this.functionName=o,this.sender=s}},Qt=class extends B{constructor({abi:t,data:e,functionName:i,message:r}){let n,o,s,l;if(e&&e!=="0x")try{o=lc({abi:t,data:e});let{abiItem:u,errorName:p,args:b}=o;if(p==="Error")l=b[0];else if(p==="Panic"){let[x]=b;l=rc[x]}else{let x=u?Ut(u,{includeName:!0}):void 0,_=u&&b?Sf({abiItem:u,args:b,includeFunctionName:!1,includeName:!1}):void 0;s=[x?`Error: ${x}`:"",_&&_!=="()"?`       ${[...Array(p?.length??0).keys()].map(()=>" ").join("")}${_}`:""]}}catch(u){n=u}else r&&(l=r);let c;n instanceof br&&(c=n.signature,s=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${i}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${i}" reverted.`,{cause:n,metaMessages:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=o,this.reason=l,this.signature=c}},Xo=class extends B{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}},la=class extends B{constructor({data:t,message:e}){super(e||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}});var fi,mn,Qo,dn=ae(()=>{"use strict";li();Ge();Eo();fi=class extends B{constructor({body:t,details:e,headers:i,status:r,url:n}){super("HTTP request failed.",{details:e,metaMessages:[r&&`Status: ${r}`,`URL: ${hr(n)}`,t&&`Request body: ${je(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=i,this.status=r,this.url=n}},mn=class extends B{constructor({body:t,error:e,url:i}){super("RPC Request failed.",{cause:e,details:e.message,metaMessages:[`URL: ${hr(i)}`,`Request body: ${je(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=e.code}},Qo=class extends B{constructor({body:t,url:e}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${hr(e)}`,`Request body: ${je(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}});var u0,Mt,qa,hn,fn,bn,yn,ca,Gi,gn,vn,Ln,_n,Tr,wn,Cr,xn,In,En,Sn,Tn,gc,Zo=ae(()=>{"use strict";Ge();dn();u0=-1,Mt=class extends B{constructor(t,{code:e,docsPath:i,metaMessages:r,shortMessage:n}){super(n,{cause:t,docsPath:i,metaMessages:r||t?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof mn?t.code:e??u0}},qa=class extends Mt{constructor(t,e){super(t,e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e.data}},hn=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}};Object.defineProperty(hn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});fn=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}};Object.defineProperty(fn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});bn=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}};Object.defineProperty(bn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});yn=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}};Object.defineProperty(yn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});ca=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}};Object.defineProperty(ca,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});Gi=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}};Object.defineProperty(Gi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});gn=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}};Object.defineProperty(gn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});vn=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}};Object.defineProperty(vn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});Ln=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}};Object.defineProperty(Ln,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});_n=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}};Object.defineProperty(_n,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});Tr=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}};Object.defineProperty(Tr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});wn=class a extends Mt{constructor(t){super(t,{code:a.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}};Object.defineProperty(wn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});Cr=class a extends qa{constructor(t){super(t,{code:a.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}};Object.defineProperty(Cr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});xn=class a extends qa{constructor(t){super(t,{code:a.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}};Object.defineProperty(xn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});In=class a extends qa{constructor(t){super(t,{code:a.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}};Object.defineProperty(In,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});En=class a extends qa{constructor(t){super(t,{code:a.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}};Object.defineProperty(En,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});Sn=class a extends qa{constructor(t){super(t,{code:a.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}};Object.defineProperty(Sn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});Tn=class a extends qa{constructor(t){super(t,{code:a.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}};Object.defineProperty(Tn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});gc=class extends Mt{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}});var pa,Wa,Cn,kn,An,Dn,Mn,Pn,Bn,Rn,Ka,zi,Nn=ae(()=>{"use strict";cn();Ge();pa=class extends B{constructor({cause:t,message:e}={}){let i=e?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}};Object.defineProperty(pa,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(pa,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});Wa=class extends B{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${yt(e)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}};Object.defineProperty(Wa,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});Cn=class extends B{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${yt(e)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}};Object.defineProperty(Cn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});kn=class extends B{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}};Object.defineProperty(kn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});An=class extends B{constructor({cause:t,nonce:e}={}){super([`Nonce provided for the transaction ${e?`(${e}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}};Object.defineProperty(An,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});Dn=class extends B{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}};Object.defineProperty(Dn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});Mn=class extends B{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}};Object.defineProperty(Mn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});Pn=class extends B{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}};Object.defineProperty(Pn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});Bn=class extends B{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}};Object.defineProperty(Bn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});Rn=class extends B{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}};Object.defineProperty(Rn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});Ka=class extends B{constructor({cause:t,maxPriorityFeePerGas:e,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${e?` = ${yt(e)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${yt(i)} gwei`:""}).`].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}};Object.defineProperty(Ka,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});zi=class extends B{constructor({cause:t}){super(`An error occurred while executing: ${t?.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}});function On(a,t){let e=(a.details||"").toLowerCase(),i=a instanceof B?a.walk(r=>r.code===pa.code):a;return i instanceof B?new pa({cause:a,message:i.details}):pa.nodeMessage.test(e)?new pa({cause:a,message:a.details}):Wa.nodeMessage.test(e)?new Wa({cause:a,maxFeePerGas:t?.maxFeePerGas}):Cn.nodeMessage.test(e)?new Cn({cause:a,maxFeePerGas:t?.maxFeePerGas}):kn.nodeMessage.test(e)?new kn({cause:a,nonce:t?.nonce}):An.nodeMessage.test(e)?new An({cause:a,nonce:t?.nonce}):Dn.nodeMessage.test(e)?new Dn({cause:a,nonce:t?.nonce}):Mn.nodeMessage.test(e)?new Mn({cause:a}):Pn.nodeMessage.test(e)?new Pn({cause:a,gas:t?.gas}):Bn.nodeMessage.test(e)?new Bn({cause:a,gas:t?.gas}):Rn.nodeMessage.test(e)?new Rn({cause:a}):Ka.nodeMessage.test(e)?new Ka({cause:a,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new zi({cause:a})}var Lc=ae(()=>{"use strict";Ge();Nn()});function Hn(a,{format:t}){if(!t)return{};let e={};function i(n){let o=Object.keys(n);for(let s of o)s in a&&(e[s]=a[s]),n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&i(n[s])}let r=t(a||{});return i(r),e}var _c=ae(()=>{"use strict"});function Ya(a){let t={...a};return typeof a.blobs<"u"&&typeof a.blobs[0]!="string"&&(t.blobs=a.blobs.map(e=>bt(e))),typeof a.gas<"u"&&(t.gas=he(a.gas)),typeof a.gasPrice<"u"&&(t.gasPrice=he(a.gasPrice)),typeof a.maxFeePerBlobGas<"u"&&(t.maxFeePerBlobGas=he(a.maxFeePerBlobGas)),typeof a.maxFeePerGas<"u"&&(t.maxFeePerGas=he(a.maxFeePerGas)),typeof a.maxPriorityFeePerGas<"u"&&(t.maxPriorityFeePerGas=he(a.maxPriorityFeePerGas)),typeof a.nonce<"u"&&(t.nonce=he(a.nonce)),typeof a.type<"u"&&(t.type=m0[a.type]),typeof a.value<"u"&&(t.value=he(a.value)),t}var m0,Jo=ae(()=>{"use strict";Pe();m0={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"}});function Fi(a){let{account:t,gasPrice:e,maxFeePerGas:i,maxPriorityFeePerGas:r,to:n}=a,o=t?tt(t):void 0;if(o&&!_t(o.address))throw new At({address:o.address});if(n&&!_t(n))throw new At({address:n});if(typeof e<"u"&&(typeof i<"u"||typeof r<"u"))throw new hc;if(i&&i>2n**256n-1n)throw new Wa({maxFeePerGas:i});if(r&&i&&r>i)throw new Ka({maxFeePerGas:i,maxPriorityFeePerGas:r})}var Un=ae(()=>{"use strict";si();Lr();Nn();sa();Ga()});function bi(a){let{abi:t,args:e,functionName:i,data:r}=a,n=t[0];if(i){let s=Hi({abi:t,args:e,name:i});if(!s)throw new ia(i,{docsPath:Df});n=s}if(n.type!=="function")throw new ia(void 0,{docsPath:Df});if(!n.outputs)throw new Do(n.name,{docsPath:Df});let o=Ir(n.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}var Df,Ar=ae(()=>{"use strict";Lt();sc();on();Df="/docs/contract/decodeFunctionResult"});var es,_g,kc,wg,Mf,Pf,xg,Dr=ae(()=>{"use strict";es=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],_g=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],kc=[..._g,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],wg=[..._g,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],Mf=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],Pf=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],xg=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]});var Ig,Eg=ae(()=>{"use strict";Ig="0x82ad56cb"});var Mr,Ac,Dc,ts,Mc=ae(()=>{"use strict";Ge();Mr=class extends B{constructor({blockNumber:t,chain:e,contract:i}){super(`Chain "${e.name}" does not support contract "${i.name}".`,{metaMessages:["This could be due to any of the following:",...t&&i.blockCreated&&i.blockCreated>t?[`- The contract "${i.name}" was not deployed until block ${i.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${i.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}},Ac=class extends B{constructor({chain:t,currentChainId:e}){super(`The current chain of the wallet (id: ${e}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${e}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}},Dc=class extends B{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}},ts=class extends B{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}});function yi({blockNumber:a,chain:t,contract:e}){let i=t?.contracts?.[e];if(!i)throw new Mr({chain:t,contract:{name:e}});if(a&&i.blockCreated&&i.blockCreated>a)throw new Mr({blockNumber:a,chain:t,contract:{name:e,blockCreated:i.blockCreated}});return i.address}var Pr=ae(()=>{"use strict";Mc()});function Sg(a,{docsPath:t,...e}){let i=(()=>{let r=On(a,e);return r instanceof zi?a:r})();return new Sr(i,{docsPath:t,...e})}var Tg=ae(()=>{"use strict";ja();Nn();Lc()});function Pc({fn:a,id:t,shouldSplitBatch:e,wait:i=0,sort:r}){let n=async()=>{let u=l();o();let p=u.map(({args:b})=>b);p.length!==0&&a(p).then(b=>{r&&Array.isArray(b)&&b.sort(r);for(let x=0;x<u.length;x++){let{pendingPromise:_}=u[x];_.resolve?.([b[x],b])}}).catch(b=>{for(let x=0;x<u.length;x++){let{pendingPromise:_}=u[x];_.reject?.(b)}})},o=()=>Bf.delete(t),s=()=>l().map(({args:u})=>u),l=()=>Bf.get(t)||[],c=u=>Bf.set(t,[...l(),u]);return{flush:o,async schedule(u){let p={},b=new Promise((y,C)=>{p.resolve=y,p.reject=C});return e?.([...s(),u])&&n(),l().length>0?(c({args:u,pendingPromise:p}),b):(c({args:u,pendingPromise:p}),setTimeout(n,i),b)}}}var Bf,Rf=ae(()=>{"use strict";Bf=new Map});var Bc,Rc,Nc,Cg=ae(()=>{"use strict";li();Ge();Eo();Bc=class extends B{constructor({callbackSelector:t,cause:e,data:i,extraData:r,sender:n,urls:o}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map(s=>`    ${hr(s)}`)],`  Sender: ${n}`,`  Data: ${i}`,`  Callback selector: ${t}`,`  Extra data: ${r}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}},Rc=class extends B{constructor({result:t,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${hr(e)}`,`Response: ${je(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}},Nc=class extends B{constructor({sender:t,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}});function kg(a,t){if(!_t(a,{strict:!1}))throw new At({address:a});if(!_t(t,{strict:!1}))throw new At({address:t});return a.toLowerCase()===t.toLowerCase()}var Ag=ae(()=>{"use strict";Lr();Ga()});var Pg={};ay(Pg,{ccipRequest:()=>Mg,offchainLookup:()=>f0,offchainLookupAbiItem:()=>Dg,offchainLookupSignature:()=>h0});async function f0(a,{blockNumber:t,blockTag:e,data:i,to:r}){let{args:n}=lc({data:i,abi:[Dg]}),[o,s,l,c,u]=n,{ccipRead:p}=a,b=p&&typeof p?.request=="function"?p.request:Mg;try{if(!kg(r,o))throw new Nc({sender:o,to:r});let x=await b({data:l,sender:o,urls:s}),{data:_}=await Wi(a,{blockNumber:t,blockTag:e,data:Vt([c,Ai([{type:"bytes"},{type:"bytes"}],[x,u])]),to:r});return _}catch(x){throw new Bc({callbackSelector:c,cause:x,data:i,extraData:u,sender:o,urls:s})}}async function Mg({data:a,sender:t,urls:e}){let i=new Error("An unknown error occurred.");for(let r=0;r<e.length;r++){let n=e[r],o=n.includes("{data}")?"GET":"POST",s=o==="POST"?{data:a,sender:t}:void 0;try{let l=await fetch(n.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(s),method:o}),c;if(l.headers.get("Content-Type")?.startsWith("application/json")?c=(await l.json()).data:c=await l.text(),!l.ok){i=new fi({body:s,details:c?.error?je(c.error):l.statusText,headers:l.headers,status:l.status,url:n});continue}if(!nt(c)){i=new Rc({result:c,url:n});continue}return c}catch(l){i=new fi({body:s,details:l.message,url:n})}}throw i}var h0,Dg,Bg=ae(()=>{"use strict";qn();Cg();dn();Ef();xr();Ag();za();Ei();li();h0="0x556f1830",Dg={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]}});async function Wi(a,t){let{account:e=a.account,batch:i=!!a.batch?.multicall,blockNumber:r,blockTag:n="latest",accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:b,maxPriorityFeePerGas:x,nonce:_,to:y,value:C,stateOverride:A,...H}=t,G=e?tt(e):void 0;try{Fi(t);let D=(r?he(r):void 0)||n,W=L0(A),J=a.chain?.formatters?.transactionRequest?.format,Be=(J||Ya)({...Hn(H,{format:J}),from:G?.address,accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:b,maxPriorityFeePerGas:x,nonce:_,to:y,value:C});if(i&&b0({request:Be})&&!W)try{return await y0(a,{...Be,blockNumber:r,blockTag:n})}catch(xe){if(!(xe instanceof ts)&&!(xe instanceof Mr))throw xe}let Ee=await a.request({method:"eth_call",params:W?[Be,D,W]:[Be,D]});return Ee==="0x"?{data:void 0}:{data:Ee}}catch(Z){let D=g0(Z),{offchainLookup:W,offchainLookupSignature:J}=await Promise.resolve().then(()=>(Bg(),Pg));if(a.ccipRead!==!1&&D?.slice(0,10)===J&&y)return{data:await W(a,{data:D,to:y})};throw Sg(Z,{...t,account:G,chain:a.chain})}}function b0({request:a}){let{data:t,to:e,...i}=a;return!(!t||t.startsWith(Ig)||!e||Object.values(i).filter(r=>typeof r<"u").length>0)}async function y0(a,t){let{batchSize:e=1024,wait:i=0}=typeof a.batch?.multicall=="object"?a.batch.multicall:{},{blockNumber:r,blockTag:n="latest",data:o,multicallAddress:s,to:l}=t,c=s;if(!c){if(!a.chain)throw new ts;c=yi({blockNumber:r,chain:a.chain,contract:"multicall3"})}let p=(r?he(r):void 0)||n,{schedule:b}=Pc({id:`${a.uid}.${p}`,wait:i,shouldSplitBatch(y){return y.reduce((A,{data:H})=>A+(H.length-2),0)>e*2},fn:async y=>{let C=y.map(G=>({allowFailure:!0,callData:G.data,target:G.to})),A=Dt({abi:es,args:[C],functionName:"aggregate3"}),H=await a.request({method:"eth_call",params:[{data:A,to:c},p]});return bi({abi:es,args:[C],functionName:"aggregate3",data:H||"0x"})}}),[{returnData:x,success:_}]=await b({data:o,to:l});if(!_)throw new la({data:x});return x==="0x"?{data:void 0}:{data:x}}function g0(a){if(!(a instanceof B))return;let t=a.walk();return typeof t?.data=="object"?t.data?.data:t.data}function Rg(a){if(!(!a||a.length===0))return a.reduce((t,{slot:e,value:i})=>{if(e.length!==66)throw new Ho({size:e.length,targetSize:66,type:"hex"});if(i.length!==66)throw new Ho({size:i.length,targetSize:66,type:"hex"});return t[e]=i,t},{})}function v0(a){let{balance:t,nonce:e,state:i,stateDiff:r,code:n}=a,o={};if(n!==void 0&&(o.code=n),t!==void 0&&(o.balance=he(t,{size:32})),e!==void 0&&(o.nonce=he(e,{size:8})),i!==void 0&&(o.state=Rg(i)),r!==void 0){if(o.state)throw new dc;o.stateDiff=Rg(r)}return o}function L0(a){if(!a)return;let t={};for(let{address:e,...i}of a){if(!_t(e,{strict:!1}))throw new At({address:e});if(t[e])throw new mc({address:e});t[e]=v0(i)}return t}var qn=ae(()=>{"use strict";si();Dr();Eg();Lr();Ge();Mc();ja();Ol();Cf();Ar();oa();Ga();Pr();Pe();Tg();_c();Jo();Rf();Un()});function O0(a,t,e,i){if(typeof a.setBigUint64=="function")return a.setBigUint64(t,e,i);let r=BigInt(32),n=BigInt(4294967295),o=Number(e>>r&n),s=Number(e&n),l=i?4:0,c=i?0:4;a.setUint32(t+l,o,i),a.setUint32(t+c,s,i)}var Zc,_v=ae(()=>{"use strict";Wl();an();Zc=class extends Oa{constructor(t,e,i,r){super(),this.blockLen=t,this.outputLen=e,this.padOffset=i,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=$l(this.buffer)}update(t){na(this);let{view:e,buffer:i,blockLen:r}=this;t=Ha(t);let n=t.length;for(let o=0;o<n;){let s=Math.min(r-this.pos,n-o);if(s===r){let l=$l(t);for(;r<=n-o;o+=r)this.process(l,o);continue}i.set(t.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){na(this),ql(t,this),this.finished=!0;let{buffer:e,view:i,blockLen:r,isLE:n}=this,{pos:o}=this;e[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>r-o&&(this.process(i,0),o=0);for(let p=o;p<r;p++)e[p]=0;O0(i,r-8,BigInt(this.length*8),n),this.process(i,0);let s=$l(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let c=l/4,u=this.get();if(c>u.length)throw new Error("_sha2: outputLen bigger than state");for(let p=0;p<c;p++)s.setUint32(4*p,u[p],n)}digest(){let{buffer:t,outputLen:e}=this;this.digestInto(t);let i=t.slice(0,e);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());let{blockLen:e,buffer:i,length:r,finished:n,destroyed:o,pos:s}=this;return t.length=r,t.pos=s,t.finished=n,t.destroyed=o,r%e&&t.buffer.set(i),t}}});var H0,U0,V0,tr,ir,Gf,wv,xv=ae(()=>{"use strict";_v();an();H0=(a,t,e)=>a&t^~a&e,U0=(a,t,e)=>a&t^a&e^t&e,V0=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),tr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ir=new Uint32Array(64),Gf=class extends Zc{constructor(){super(64,32,8,!1),this.A=tr[0]|0,this.B=tr[1]|0,this.C=tr[2]|0,this.D=tr[3]|0,this.E=tr[4]|0,this.F=tr[5]|0,this.G=tr[6]|0,this.H=tr[7]|0}get(){let{A:t,B:e,C:i,D:r,E:n,F:o,G:s,H:l}=this;return[t,e,i,r,n,o,s,l]}set(t,e,i,r,n,o,s,l){this.A=t|0,this.B=e|0,this.C=i|0,this.D=r|0,this.E=n|0,this.F=o|0,this.G=s|0,this.H=l|0}process(t,e){for(let p=0;p<16;p++,e+=4)ir[p]=t.getUint32(e,!1);for(let p=16;p<64;p++){let b=ir[p-15],x=ir[p-2],_=ki(b,7)^ki(b,18)^b>>>3,y=ki(x,17)^ki(x,19)^x>>>10;ir[p]=y+ir[p-7]+_+ir[p-16]|0}let{A:i,B:r,C:n,D:o,E:s,F:l,G:c,H:u}=this;for(let p=0;p<64;p++){let b=ki(s,6)^ki(s,11)^ki(s,25),x=u+b+H0(s,l,c)+V0[p]+ir[p]|0,y=(ki(i,2)^ki(i,13)^ki(i,22))+U0(i,r,n)|0;u=c,c=l,l=s,s=o+x|0,o=n,n=r,r=i,i=x+y|0}i=i+this.A|0,r=r+this.B|0,n=n+this.C|0,o=o+this.D|0,s=s+this.E|0,l=l+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(i,r,n,o,s,l,c,u)}roundClean(){ir.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},wv=Xl(()=>new Gf)});var Kf={};ay(Kf,{bitGet:()=>K0,bitLen:()=>W0,bitMask:()=>ss,bitSet:()=>Y0,bytesToHex:()=>Br,bytesToNumberBE:()=>ma,bytesToNumberLE:()=>tu,concatBytes:()=>eo,createHmacDrbg:()=>Wf,ensureBytes:()=>ci,equalBytes:()=>qf,hexToBytes:()=>Rr,hexToNumber:()=>jf,numberToBytesBE:()=>rr,numberToBytesLE:()=>iu,numberToHexUnpadded:()=>Bv,numberToVarBytesBE:()=>j0,utf8ToBytes:()=>q0,validateObject:()=>nr});function Br(a){if(!eu(a))throw new Error("Uint8Array expected");let t="";for(let e=0;e<a.length;e++)t+=F0[a[e]];return t}function Bv(a){let t=a.toString(16);return t.length&1?`0${t}`:t}function jf(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);return BigInt(a===""?"0":`0x${a}`)}function Rr(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);let t=a.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);let e=new Uint8Array(t/2);for(let i=0;i<e.length;i++){let r=i*2,n=a.slice(r,r+2),o=Number.parseInt(n,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");e[i]=o}return e}function ma(a){return jf(Br(a))}function tu(a){if(!eu(a))throw new Error("Uint8Array expected");return jf(Br(Uint8Array.from(a).reverse()))}function rr(a,t){return Rr(a.toString(16).padStart(t*2,"0"))}function iu(a,t){return rr(a,t).reverse()}function j0(a){return Rr(Bv(a))}function ci(a,t,e){let i;if(typeof t=="string")try{i=Rr(t)}catch(n){throw new Error(`${a} must be valid hex string, got "${t}". Cause: ${n}`)}else if(eu(t))i=Uint8Array.from(t);else throw new Error(`${a} must be hex string or Uint8Array`);let r=i.length;if(typeof e=="number"&&r!==e)throw new Error(`${a} expected ${e} bytes, got ${r}`);return i}function eo(...a){let t=new Uint8Array(a.reduce((i,r)=>i+r.length,0)),e=0;return a.forEach(i=>{if(!eu(i))throw new Error("Uint8Array expected");t.set(i,e),e+=i.length}),t}function qf(a,t){if(a.length!==t.length)return!1;for(let e=0;e<a.length;e++)if(a[e]!==t[e])return!1;return!0}function q0(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function W0(a){let t;for(t=0;a>Pv;a>>=Jc,t+=1);return t}function K0(a,t){return a>>BigInt(t)&Jc}function Wf(a,t,e){if(typeof a!="number"||a<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof e!="function")throw new Error("hmacFn must be a function");let i=Ff(a),r=Ff(a),n=0,o=()=>{i.fill(1),r.fill(0),n=0},s=(...p)=>e(r,i,...p),l=(p=Ff())=>{r=s(Mv([0]),p),i=s(),p.length!==0&&(r=s(Mv([1]),p),i=s())},c=()=>{if(n++>=1e3)throw new Error("drbg: tried 1000 values");let p=0,b=[];for(;p<t;){i=s();let x=i.slice();b.push(x),p+=i.length}return eo(...b)};return(p,b)=>{o(),l(p);let x;for(;!(x=b(c()));)l();return o(),x}}function nr(a,t,e={}){let i=(r,n,o)=>{let s=$0[n];if(typeof s!="function")throw new Error(`Invalid validator "${n}", expected function`);let l=a[r];if(!(o&&l===void 0)&&!s(l,a))throw new Error(`Invalid param ${String(r)}=${l} (${typeof l}), expected ${n}`)};for(let[r,n]of Object.entries(t))i(r,n,!1);for(let[r,n]of Object.entries(e))i(r,n,!0);return a}var Pv,Jc,z0,eu,F0,Y0,ss,Ff,Mv,$0,to=ae(()=>{"use strict";Pv=BigInt(0),Jc=BigInt(1),z0=BigInt(2),eu=a=>a instanceof Uint8Array,F0=Array.from({length:256},(a,t)=>t.toString(16).padStart(2,"0"));Y0=(a,t,e)=>a|(e?Jc:Pv)<<BigInt(t),ss=a=>(z0<<BigInt(a-1))-Jc,Ff=a=>new Uint8Array(a),Mv=a=>Uint8Array.from(a);$0={bigint:a=>typeof a=="bigint",function:a=>typeof a=="function",boolean:a=>typeof a=="boolean",string:a=>typeof a=="string",stringOrUint8Array:a=>typeof a=="string"||a instanceof Uint8Array,isSafeInteger:a=>Number.isSafeInteger(a),array:a=>Array.isArray(a),field:(a,t)=>t.Fp.isValid(a),hash:a=>typeof a=="function"&&Number.isSafeInteger(a.outputLen)}});function Pt(a,t){let e=a%t;return e>=gt?e:t+e}function J0(a,t,e){if(e<=gt||t<gt)throw new Error("Expected power/modulo > 0");if(e===ot)return gt;let i=ot;for(;t>gt;)t&ot&&(i=i*a%e),a=a*a%e,t>>=ot;return i}function ui(a,t,e){let i=a;for(;t-- >gt;)i*=i,i%=e;return i}function nu(a,t){if(a===gt||t<=gt)throw new Error(`invert: expected positive integers, got n=${a} mod=${t}`);let e=Pt(a,t),i=t,r=gt,n=ot,o=ot,s=gt;for(;e!==gt;){let c=i/e,u=i%e,p=r-o*c,b=n-s*c;i=e,e=u,r=o,n=s,o=p,s=b}if(i!==ot)throw new Error("invert: does not exist");return Pt(r,t)}function ew(a){let t=(a-ot)/Nr,e,i,r;for(e=a-ot,i=0;e%Nr===gt;e/=Nr,i++);for(r=Nr;r<a&&J0(r,t,a)!==a-ot;r++);if(i===1){let o=(a+ot)/Yf;return function(l,c){let u=l.pow(c,o);if(!l.eql(l.sqr(u),c))throw new Error("Cannot find square root");return u}}let n=(e+ot)/Nr;return function(s,l){if(s.pow(l,t)===s.neg(s.ONE))throw new Error("Cannot find square root");let c=i,u=s.pow(s.mul(s.ONE,r),e),p=s.pow(l,n),b=s.pow(l,e);for(;!s.eql(b,s.ONE);){if(s.eql(b,s.ZERO))return s.ZERO;let x=1;for(let y=s.sqr(b);x<c&&!s.eql(y,s.ONE);x++)y=s.sqr(y);let _=s.pow(u,ot<<BigInt(c-x-1));u=s.sqr(_),p=s.mul(p,_),b=s.mul(b,u),c=x}return p}}function tw(a){if(a%Yf===X0){let t=(a+ot)/Yf;return function(i,r){let n=i.pow(r,t);if(!i.eql(i.sqr(n),r))throw new Error("Cannot find square root");return n}}if(a%tL===eL){let t=(a-eL)/tL;return function(i,r){let n=i.mul(r,Nr),o=i.pow(n,t),s=i.mul(r,o),l=i.mul(i.mul(s,Nr),o),c=i.mul(s,i.sub(l,i.ONE));if(!i.eql(i.sqr(c),r))throw new Error("Cannot find square root");return c}}return a%Z0,ew(a)}function $f(a){let t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},e=iw.reduce((i,r)=>(i[r]="function",i),t);return nr(a,e)}function aw(a,t,e){if(e<gt)throw new Error("Expected power > 0");if(e===gt)return a.ONE;if(e===ot)return t;let i=a.ONE,r=t;for(;e>gt;)e&ot&&(i=a.mul(i,r)),r=a.sqr(r),e>>=ot;return i}function rw(a,t){let e=new Array(t.length),i=t.reduce((n,o,s)=>a.is0(o)?n:(e[s]=n,a.mul(n,o)),a.ONE),r=a.inv(i);return t.reduceRight((n,o,s)=>a.is0(o)?n:(e[s]=a.mul(n,e[s]),a.mul(n,o)),r),e}function Xf(a,t){let e=t!==void 0?t:a.toString(2).length,i=Math.ceil(e/8);return{nBitLength:e,nByteLength:i}}function iL(a,t,e=!1,i={}){if(a<=gt)throw new Error(`Expected Field ORDER > 0, got ${a}`);let{nBitLength:r,nByteLength:n}=Xf(a,t);if(n>2048)throw new Error("Field lengths over 2048 bytes are not supported");let o=tw(a),s=Object.freeze({ORDER:a,BITS:r,BYTES:n,MASK:ss(r),ZERO:gt,ONE:ot,create:l=>Pt(l,a),isValid:l=>{if(typeof l!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);return gt<=l&&l<a},is0:l=>l===gt,isOdd:l=>(l&ot)===ot,neg:l=>Pt(-l,a),eql:(l,c)=>l===c,sqr:l=>Pt(l*l,a),add:(l,c)=>Pt(l+c,a),sub:(l,c)=>Pt(l-c,a),mul:(l,c)=>Pt(l*c,a),pow:(l,c)=>aw(s,l,c),div:(l,c)=>Pt(l*nu(c,a),a),sqrN:l=>l*l,addN:(l,c)=>l+c,subN:(l,c)=>l-c,mulN:(l,c)=>l*c,inv:l=>nu(l,a),sqrt:i.sqrt||(l=>o(s,l)),invertBatch:l=>rw(s,l),cmov:(l,c,u)=>u?c:l,toBytes:l=>e?iu(l,n):rr(l,n),fromBytes:l=>{if(l.length!==n)throw new Error(`Fp.fromBytes: expected ${n}, got ${l.length}`);return e?tu(l):ma(l)}});return Object.freeze(s)}function aL(a){if(typeof a!="bigint")throw new Error("field order must be bigint");let t=a.toString(2).length;return Math.ceil(t/8)}function Qf(a){let t=aL(a);return t+Math.ceil(t/2)}function rL(a,t,e=!1){let i=a.length,r=aL(t),n=Qf(t);if(i<16||i<n||i>1024)throw new Error(`expected ${n}-1024 bytes of input, got ${i}`);let o=e?ma(a):tu(a),s=Pt(o,t-ot)+ot;return e?iu(s,r):rr(s,r)}var gt,ot,Nr,X0,Yf,eL,tL,Q0,Z0,iw,ou=ae(()=>{"use strict";to();gt=BigInt(0),ot=BigInt(1),Nr=BigInt(2),X0=BigInt(3),Yf=BigInt(4),eL=BigInt(5),tL=BigInt(8),Q0=BigInt(9),Z0=BigInt(16);iw=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"]});function nL(a,t){let e=(r,n)=>{let o=n.negate();return r?o:n},i=r=>{let n=Math.ceil(t/r)+1,o=2**(r-1);return{windows:n,windowSize:o}};return{constTimeNegate:e,unsafeLadder(r,n){let o=a.ZERO,s=r;for(;n>ow;)n&Zf&&(o=o.add(s)),s=s.double(),n>>=Zf;return o},precomputeWindow(r,n){let{windows:o,windowSize:s}=i(n),l=[],c=r,u=c;for(let p=0;p<o;p++){u=c,l.push(u);for(let b=1;b<s;b++)u=u.add(c),l.push(u);c=u.double()}return l},wNAF(r,n,o){let{windows:s,windowSize:l}=i(r),c=a.ZERO,u=a.BASE,p=BigInt(2**r-1),b=2**r,x=BigInt(r);for(let _=0;_<s;_++){let y=_*l,C=Number(o&p);o>>=x,C>l&&(C-=b,o+=Zf);let A=y,H=y+Math.abs(C)-1,G=_%2!==0,Z=C<0;C===0?u=u.add(e(G,n[A])):c=c.add(e(Z,n[H]))}return{p:c,f:u}},wNAFCached(r,n,o,s){let l=r._WINDOW_SIZE||1,c=n.get(r);return c||(c=this.precomputeWindow(r,l),l!==1&&n.set(r,s(c))),this.wNAF(l,c,o)}}}function Jf(a){return $f(a.Fp),nr(a,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Xf(a.n,a.nBitLength),...a,p:a.Fp.ORDER})}var ow,Zf,oL=ae(()=>{"use strict";ou();to();ow=BigInt(0),Zf=BigInt(1)});function sw(a){let t=Jf(a);nr(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:e,Fp:i,a:r}=t;if(e){if(!i.eql(r,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof e!="object"||typeof e.beta!="bigint"||typeof e.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}function uw(a){let t=sw(a),{Fp:e}=t,i=t.toBytes||((_,y,C)=>{let A=y.toAffine();return eo(Uint8Array.from([4]),e.toBytes(A.x),e.toBytes(A.y))}),r=t.fromBytes||(_=>{let y=_.subarray(1),C=e.fromBytes(y.subarray(0,e.BYTES)),A=e.fromBytes(y.subarray(e.BYTES,2*e.BYTES));return{x:C,y:A}});function n(_){let{a:y,b:C}=t,A=e.sqr(_),H=e.mul(A,_);return e.add(e.add(H,e.mul(_,y)),C)}if(!e.eql(e.sqr(t.Gy),n(t.Gx)))throw new Error("bad generator point: equation left != right");function o(_){return typeof _=="bigint"&&da<_&&_<t.n}function s(_){if(!o(_))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function l(_){let{allowedPrivateKeyLengths:y,nByteLength:C,wrapPrivateKey:A,n:H}=t;if(y&&typeof _!="bigint"){if(_ instanceof Uint8Array&&(_=Br(_)),typeof _!="string"||!y.includes(_.length))throw new Error("Invalid key");_=_.padStart(C*2,"0")}let G;try{G=typeof _=="bigint"?_:ma(ci("private key",_,C))}catch{throw new Error(`private key must be ${C} bytes, hex or bigint, not ${typeof _}`)}return A&&(G=Pt(G,H)),s(G),G}let c=new Map;function u(_){if(!(_ instanceof p))throw new Error("ProjectivePoint expected")}class p{constructor(y,C,A){if(this.px=y,this.py=C,this.pz=A,y==null||!e.isValid(y))throw new Error("x required");if(C==null||!e.isValid(C))throw new Error("y required");if(A==null||!e.isValid(A))throw new Error("z required")}static fromAffine(y){let{x:C,y:A}=y||{};if(!y||!e.isValid(C)||!e.isValid(A))throw new Error("invalid affine point");if(y instanceof p)throw new Error("projective point not allowed");let H=G=>e.eql(G,e.ZERO);return H(C)&&H(A)?p.ZERO:new p(C,A,e.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(y){let C=e.invertBatch(y.map(A=>A.pz));return y.map((A,H)=>A.toAffine(C[H])).map(p.fromAffine)}static fromHex(y){let C=p.fromAffine(r(ci("pointHex",y)));return C.assertValidity(),C}static fromPrivateKey(y){return p.BASE.multiply(l(y))}_setWindowSize(y){this._WINDOW_SIZE=y,c.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint&&!e.is0(this.py))return;throw new Error("bad point: ZERO")}let{x:y,y:C}=this.toAffine();if(!e.isValid(y)||!e.isValid(C))throw new Error("bad point: x or y not FE");let A=e.sqr(C),H=n(y);if(!e.eql(A,H))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y}=this.toAffine();if(e.isOdd)return!e.isOdd(y);throw new Error("Field doesn't support isOdd")}equals(y){u(y);let{px:C,py:A,pz:H}=this,{px:G,py:Z,pz:D}=y,W=e.eql(e.mul(C,D),e.mul(G,H)),J=e.eql(e.mul(A,D),e.mul(Z,H));return W&&J}negate(){return new p(this.px,e.neg(this.py),this.pz)}double(){let{a:y,b:C}=t,A=e.mul(C,sL),{px:H,py:G,pz:Z}=this,D=e.ZERO,W=e.ZERO,J=e.ZERO,me=e.mul(H,H),Be=e.mul(G,G),Ee=e.mul(Z,Z),xe=e.mul(H,G);return xe=e.add(xe,xe),J=e.mul(H,Z),J=e.add(J,J),D=e.mul(y,J),W=e.mul(A,Ee),W=e.add(D,W),D=e.sub(Be,W),W=e.add(Be,W),W=e.mul(D,W),D=e.mul(xe,D),J=e.mul(A,J),Ee=e.mul(y,Ee),xe=e.sub(me,Ee),xe=e.mul(y,xe),xe=e.add(xe,J),J=e.add(me,me),me=e.add(J,me),me=e.add(me,Ee),me=e.mul(me,xe),W=e.add(W,me),Ee=e.mul(G,Z),Ee=e.add(Ee,Ee),me=e.mul(Ee,xe),D=e.sub(D,me),J=e.mul(Ee,Be),J=e.add(J,J),J=e.add(J,J),new p(D,W,J)}add(y){u(y);let{px:C,py:A,pz:H}=this,{px:G,py:Z,pz:D}=y,W=e.ZERO,J=e.ZERO,me=e.ZERO,Be=t.a,Ee=e.mul(t.b,sL),xe=e.mul(C,G),pt=e.mul(A,Z),Nt=e.mul(H,D),wi=e.add(C,A),ce=e.add(G,Z);wi=e.mul(wi,ce),ce=e.add(xe,pt),wi=e.sub(wi,ce),ce=e.add(C,H);let fe=e.add(G,D);return ce=e.mul(ce,fe),fe=e.add(xe,Nt),ce=e.sub(ce,fe),fe=e.add(A,H),W=e.add(Z,D),fe=e.mul(fe,W),W=e.add(pt,Nt),fe=e.sub(fe,W),me=e.mul(Be,ce),W=e.mul(Ee,Nt),me=e.add(W,me),W=e.sub(pt,me),me=e.add(pt,me),J=e.mul(W,me),pt=e.add(xe,xe),pt=e.add(pt,xe),Nt=e.mul(Be,Nt),ce=e.mul(Ee,ce),pt=e.add(pt,Nt),Nt=e.sub(xe,Nt),Nt=e.mul(Be,Nt),ce=e.add(ce,Nt),xe=e.mul(pt,ce),J=e.add(J,xe),xe=e.mul(fe,ce),W=e.mul(wi,W),W=e.sub(W,xe),xe=e.mul(wi,pt),me=e.mul(fe,me),me=e.add(me,xe),new p(W,J,me)}subtract(y){return this.add(y.negate())}is0(){return this.equals(p.ZERO)}wNAF(y){return x.wNAFCached(this,c,y,C=>{let A=e.invertBatch(C.map(H=>H.pz));return C.map((H,G)=>H.toAffine(A[G])).map(p.fromAffine)})}multiplyUnsafe(y){let C=p.ZERO;if(y===da)return C;if(s(y),y===gi)return this;let{endo:A}=t;if(!A)return x.unsafeLadder(this,y);let{k1neg:H,k1:G,k2neg:Z,k2:D}=A.splitScalar(y),W=C,J=C,me=this;for(;G>da||D>da;)G&gi&&(W=W.add(me)),D&gi&&(J=J.add(me)),me=me.double(),G>>=gi,D>>=gi;return H&&(W=W.negate()),Z&&(J=J.negate()),J=new p(e.mul(J.px,A.beta),J.py,J.pz),W.add(J)}multiply(y){s(y);let C=y,A,H,{endo:G}=t;if(G){let{k1neg:Z,k1:D,k2neg:W,k2:J}=G.splitScalar(C),{p:me,f:Be}=this.wNAF(D),{p:Ee,f:xe}=this.wNAF(J);me=x.constTimeNegate(Z,me),Ee=x.constTimeNegate(W,Ee),Ee=new p(e.mul(Ee.px,G.beta),Ee.py,Ee.pz),A=me.add(Ee),H=Be.add(xe)}else{let{p:Z,f:D}=this.wNAF(C);A=Z,H=D}return p.normalizeZ([A,H])[0]}multiplyAndAddUnsafe(y,C,A){let H=p.BASE,G=(D,W)=>W===da||W===gi||!D.equals(H)?D.multiplyUnsafe(W):D.multiply(W),Z=G(this,C).add(G(y,A));return Z.is0()?void 0:Z}toAffine(y){let{px:C,py:A,pz:H}=this,G=this.is0();y==null&&(y=G?e.ONE:e.inv(H));let Z=e.mul(C,y),D=e.mul(A,y),W=e.mul(H,y);if(G)return{x:e.ZERO,y:e.ZERO};if(!e.eql(W,e.ONE))throw new Error("invZ was invalid");return{x:Z,y:D}}isTorsionFree(){let{h:y,isTorsionFree:C}=t;if(y===gi)return!0;if(C)return C(p,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:y,clearCofactor:C}=t;return y===gi?this:C?C(p,this):this.multiplyUnsafe(t.h)}toRawBytes(y=!0){return this.assertValidity(),i(p,this,y)}toHex(y=!0){return Br(this.toRawBytes(y))}}p.BASE=new p(t.Gx,t.Gy,e.ONE),p.ZERO=new p(e.ZERO,e.ONE,e.ZERO);let b=t.nBitLength,x=nL(p,t.endo?Math.ceil(b/2):b);return{CURVE:t,ProjectivePoint:p,normPrivateKeyToScalar:l,weierstrassEquation:n,isWithinCurveOrder:o}}function pw(a){let t=Jf(a);return nr(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function lL(a){let t=pw(a),{Fp:e,n:i}=t,r=e.BYTES+1,n=2*e.BYTES+1;function o(ce){return da<ce&&ce<e.ORDER}function s(ce){return Pt(ce,i)}function l(ce){return nu(ce,i)}let{ProjectivePoint:c,normPrivateKeyToScalar:u,weierstrassEquation:p,isWithinCurveOrder:b}=uw({...t,toBytes(ce,fe,T){let Ye=fe.toAffine(),ke=e.toBytes(Ye.x),mt=eo;return T?mt(Uint8Array.from([fe.hasEvenY()?2:3]),ke):mt(Uint8Array.from([4]),ke,e.toBytes(Ye.y))},fromBytes(ce){let fe=ce.length,T=ce[0],Ye=ce.subarray(1);if(fe===r&&(T===2||T===3)){let ke=ma(Ye);if(!o(ke))throw new Error("Point is not on curve");let mt=p(ke),Ot=e.sqrt(mt),Ht=(Ot&gi)===gi;return(T&1)===1!==Ht&&(Ot=e.neg(Ot)),{x:ke,y:Ot}}else if(fe===n&&T===4){let ke=e.fromBytes(Ye.subarray(0,e.BYTES)),mt=e.fromBytes(Ye.subarray(e.BYTES,2*e.BYTES));return{x:ke,y:mt}}else throw new Error(`Point of length ${fe} was invalid. Expected ${r} compressed bytes or ${n} uncompressed bytes`)}}),x=ce=>Br(rr(ce,t.nByteLength));function _(ce){let fe=i>>gi;return ce>fe}function y(ce){return _(ce)?s(-ce):ce}let C=(ce,fe,T)=>ma(ce.slice(fe,T));class A{constructor(fe,T,Ye){this.r=fe,this.s=T,this.recovery=Ye,this.assertValidity()}static fromCompact(fe){let T=t.nByteLength;return fe=ci("compactSignature",fe,T*2),new A(C(fe,0,T),C(fe,T,2*T))}static fromDER(fe){let{r:T,s:Ye}=Or.toSig(ci("DER",fe));return new A(T,Ye)}assertValidity(){if(!b(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!b(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(fe){return new A(this.r,this.s,fe)}recoverPublicKey(fe){let{r:T,s:Ye,recovery:ke}=this,mt=J(ci("msgHash",fe));if(ke==null||![0,1,2,3].includes(ke))throw new Error("recovery id invalid");let Ot=ke===2||ke===3?T+t.n:T;if(Ot>=e.ORDER)throw new Error("recovery id 2 or 3 invalid");let Ht=ke&1?"03":"02",Ni=c.fromHex(Ht+x(Ot)),ht=l(Ot),ka=s(-mt*ht),mr=s(Ye*ht),qt=c.BASE.multiplyAndAddUnsafe(Ni,ka,mr);if(!qt)throw new Error("point at infinify");return qt.assertValidity(),qt}hasHighS(){return _(this.s)}normalizeS(){return this.hasHighS()?new A(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return Rr(this.toDERHex())}toDERHex(){return Or.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Rr(this.toCompactHex())}toCompactHex(){return x(this.r)+x(this.s)}}let H={isValidPrivateKey(ce){try{return u(ce),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{let ce=Qf(t.n);return rL(t.randomBytes(ce),t.n)},precompute(ce=8,fe=c.BASE){return fe._setWindowSize(ce),fe.multiply(BigInt(3)),fe}};function G(ce,fe=!0){return c.fromPrivateKey(ce).toRawBytes(fe)}function Z(ce){let fe=ce instanceof Uint8Array,T=typeof ce=="string",Ye=(fe||T)&&ce.length;return fe?Ye===r||Ye===n:T?Ye===2*r||Ye===2*n:ce instanceof c}function D(ce,fe,T=!0){if(Z(ce))throw new Error("first arg must be private key");if(!Z(fe))throw new Error("second arg must be public key");return c.fromHex(fe).multiply(u(ce)).toRawBytes(T)}let W=t.bits2int||function(ce){let fe=ma(ce),T=ce.length*8-t.nBitLength;return T>0?fe>>BigInt(T):fe},J=t.bits2int_modN||function(ce){return s(W(ce))},me=ss(t.nBitLength);function Be(ce){if(typeof ce!="bigint")throw new Error("bigint expected");if(!(da<=ce&&ce<me))throw new Error(`bigint expected < 2^${t.nBitLength}`);return rr(ce,t.nByteLength)}function Ee(ce,fe,T=xe){if(["recovered","canonical"].some(Ji=>Ji in T))throw new Error("sign() legacy options not supported");let{hash:Ye,randomBytes:ke}=t,{lowS:mt,prehash:Ot,extraEntropy:Ht}=T;mt==null&&(mt=!0),ce=ci("msgHash",ce),Ot&&(ce=ci("prehashed msgHash",Ye(ce)));let Ni=J(ce),ht=u(fe),ka=[Be(ht),Be(Ni)];if(Ht!=null){let Ji=Ht===!0?ke(e.BYTES):Ht;ka.push(ci("extraEntropy",Ji))}let mr=eo(...ka),qt=Ni;function bo(Ji){let Aa=W(Ji);if(!b(Aa))return;let yo=l(Aa),ai=c.BASE.multiply(Aa).toAffine(),Da=s(ai.x);if(Da===da)return;let Yr=s(yo*s(qt+Da*ht));if(Yr===da)return;let _l=(ai.x===Da?0:2)|Number(ai.y&gi),$r=Yr;return mt&&_(Yr)&&($r=y(Yr),_l^=1),new A(Da,$r,_l)}return{seed:mr,k2sig:bo}}let xe={lowS:t.lowS,prehash:!1},pt={lowS:t.lowS,prehash:!1};function Nt(ce,fe,T=xe){let{seed:Ye,k2sig:ke}=Ee(ce,fe,T),mt=t;return Wf(mt.hash.outputLen,mt.nByteLength,mt.hmac)(Ye,ke)}c.BASE._setWindowSize(8);function wi(ce,fe,T,Ye=pt){let ke=ce;if(fe=ci("msgHash",fe),T=ci("publicKey",T),"strict"in Ye)throw new Error("options.strict was renamed to lowS");let{lowS:mt,prehash:Ot}=Ye,Ht,Ni;try{if(typeof ke=="string"||ke instanceof Uint8Array)try{Ht=A.fromDER(ke)}catch(ai){if(!(ai instanceof Or.Err))throw ai;Ht=A.fromCompact(ke)}else if(typeof ke=="object"&&typeof ke.r=="bigint"&&typeof ke.s=="bigint"){let{r:ai,s:Da}=ke;Ht=new A(ai,Da)}else throw new Error("PARSE");Ni=c.fromHex(T)}catch(ai){if(ai.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(mt&&Ht.hasHighS())return!1;Ot&&(fe=t.hash(fe));let{r:ht,s:ka}=Ht,mr=J(fe),qt=l(ka),bo=s(mr*qt),Ji=s(ht*qt),Aa=c.BASE.multiplyAndAddUnsafe(Ni,bo,Ji)?.toAffine();return Aa?s(Aa.x)===ht:!1}return{CURVE:t,getPublicKey:G,getSharedSecret:D,sign:Nt,verify:wi,ProjectivePoint:c,Signature:A,utils:H}}var lw,cw,Or,da,gi,eH,sL,tH,cL=ae(()=>{"use strict";ou();to();to();oL();({bytesToNumberBE:lw,hexToBytes:cw}=Kf),Or={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(a){let{Err:t}=Or;if(a.length<2||a[0]!==2)throw new t("Invalid signature integer tag");let e=a[1],i=a.subarray(2,e+2);if(!e||i.length!==e)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:lw(i),l:a.subarray(e+2)}},toSig(a){let{Err:t}=Or,e=typeof a=="string"?cw(a):a;if(!(e instanceof Uint8Array))throw new Error("ui8a expected");let i=e.length;if(i<2||e[0]!=48)throw new t("Invalid signature tag");if(e[1]!==i-2)throw new t("Invalid signature: incorrect length");let{d:r,l:n}=Or._parseInt(e.subarray(2)),{d:o,l:s}=Or._parseInt(n);if(s.length)throw new t("Invalid signature: left bytes after parsing");return{r,s:o}},hexFromSig(a){let t=c=>Number.parseInt(c[0],16)&8?"00"+c:c,e=c=>{let u=c.toString(16);return u.length&1?`0${u}`:u},i=t(e(a.s)),r=t(e(a.r)),n=i.length/2,o=r.length/2,s=e(n),l=e(o);return`30${e(o+n+4)}02${l}${r}02${s}${i}`}},da=BigInt(0),gi=BigInt(1),eH=BigInt(2),sL=BigInt(3),tH=BigInt(4)});var su,eb,uL=ae(()=>{"use strict";Wl();an();su=class extends Oa{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,gy(t);let i=Ha(e);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let r=this.blockLen,n=new Uint8Array(r);n.set(i.length>r?t.create().update(i).digest():i);for(let o=0;o<n.length;o++)n[o]^=54;this.iHash.update(n),this.oHash=t.create();for(let o=0;o<n.length;o++)n[o]^=106;this.oHash.update(n),n.fill(0)}update(t){return na(this),this.iHash.update(t),this}digestInto(t){na(this),Go(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));let{oHash:e,iHash:i,finished:r,destroyed:n,blockLen:o,outputLen:s}=this;return t=t,t.finished=r,t.destroyed=n,t.blockLen=o,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},eb=(a,t,e)=>new su(a,t).update(e).digest();eb.create=(a,t)=>new su(a,t)});function mw(a){return{hash:a,hmac:(t,...e)=>eb(a,t,ky(...e)),randomBytes:Dy}}function pL(a,t){let e=i=>lL({...a,...mw(i)});return Object.freeze({...e(t),create:e})}var mL=ae(()=>{"use strict";uL();an();cL();});function hw(a){let t=fL,e=BigInt(3),i=BigInt(6),r=BigInt(11),n=BigInt(22),o=BigInt(23),s=BigInt(44),l=BigInt(88),c=a*a*a%t,u=c*c*a%t,p=ui(u,e,t)*u%t,b=ui(p,e,t)*u%t,x=ui(b,tb,t)*c%t,_=ui(x,r,t)*x%t,y=ui(_,n,t)*_%t,C=ui(y,s,t)*y%t,A=ui(C,l,t)*C%t,H=ui(A,s,t)*y%t,G=ui(H,e,t)*u%t,Z=ui(G,o,t)*_%t,D=ui(Z,i,t)*c%t,W=ui(D,tb,t);if(!ib.eql(ib.sqr(W),a))throw new Error("Cannot find square root");return W}var fL,dL,dw,tb,hL,ib,ab,dH,hH,bL=ae(()=>{"use strict";xv();ou();mL();fL=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),dL=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),dw=BigInt(1),tb=BigInt(2),hL=(a,t)=>(a+t/tb)/t;ib=iL(fL,void 0,void 0,{sqrt:hw}),ab=pL({a:BigInt(0),b:BigInt(7),Fp:ib,n:dL,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:a=>{let t=dL,e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-dw*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),r=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),n=e,o=BigInt("0x100000000000000000000000000000000"),s=hL(n*a,t),l=hL(-i*a,t),c=Pt(a-s*e-l*r,t),u=Pt(-s*i-l*n,t),p=c>o,b=u>o;if(p&&(c=t-c),b&&(u=t-u),c>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+a);return{k1neg:p,k1:c,k2neg:b,k2:u}}}},wv),dH=BigInt(0),hH=ab.ProjectivePoint});var _L=y_((cb,ub)=>{"use strict";(function(a,t){typeof cb=="object"&&typeof ub<"u"?ub.exports=t():typeof define=="function"&&define.amd?define(t):(a=typeof globalThis<"u"?globalThis:a||self).jsSHA=t()})(cb,function(){"use strict";var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function t(S,d,w,E){var k,g,U,q=d||[0],X=(w=w||0)>>>3,se=E===-1?3:0;for(k=0;k<S.length;k+=1)g=(U=k+X)>>>2,q.length<=g&&q.push(0),q[g]|=S[k]<<8*(se+E*(U%4));return{value:q,binLen:8*S.length+w}}function e(S,d,w){switch(d){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(S){case"HEX":return function(E,k,g){return function(U,q,X,se){var ye,ne,pe,Se;if(U.length%2!=0)throw new Error("String of HEX type must be in byte increments");var ie=q||[0],Ue=(X=X||0)>>>3,Ne=se===-1?3:0;for(ye=0;ye<U.length;ye+=2){if(ne=parseInt(U.substr(ye,2),16),isNaN(ne))throw new Error("String of HEX type contains invalid characters");for(pe=(Se=(ye>>>1)+Ue)>>>2;ie.length<=pe;)ie.push(0);ie[pe]|=ne<<8*(Ne+se*(Se%4))}return{value:ie,binLen:4*U.length+X}}(E,k,g,w)};case"TEXT":return function(E,k,g){return function(U,q,X,se,ye){var ne,pe,Se,ie,Ue,Ne,Ke,it,ea=0,ri=X||[0],xi=(se=se||0)>>>3;if(q==="UTF8")for(Ke=ye===-1?3:0,Se=0;Se<U.length;Se+=1)for(pe=[],128>(ne=U.charCodeAt(Se))?pe.push(ne):2048>ne?(pe.push(192|ne>>>6),pe.push(128|63&ne)):55296>ne||57344<=ne?pe.push(224|ne>>>12,128|ne>>>6&63,128|63&ne):(Se+=1,ne=65536+((1023&ne)<<10|1023&U.charCodeAt(Se)),pe.push(240|ne>>>18,128|ne>>>12&63,128|ne>>>6&63,128|63&ne)),ie=0;ie<pe.length;ie+=1){for(Ue=(Ne=ea+xi)>>>2;ri.length<=Ue;)ri.push(0);ri[Ue]|=pe[ie]<<8*(Ke+ye*(Ne%4)),ea+=1}else for(Ke=ye===-1?2:0,it=q==="UTF16LE"&&ye!==1||q!=="UTF16LE"&&ye===1,Se=0;Se<U.length;Se+=1){for(ne=U.charCodeAt(Se),it===!0&&(ne=(ie=255&ne)<<8|ne>>>8),Ue=(Ne=ea+xi)>>>2;ri.length<=Ue;)ri.push(0);ri[Ue]|=ne<<8*(Ke+ye*(Ne%4)),ea+=2}return{value:ri,binLen:8*ea+se}}(E,d,k,g,w)};case"B64":return function(E,k,g){return function(U,q,X,se){var ye,ne,pe,Se,ie,Ue,Ne=0,Ke=q||[0],it=(X=X||0)>>>3,ea=se===-1?3:0,ri=U.indexOf("=");if(U.search(/^[a-zA-Z0-9=+/]+$/)===-1)throw new Error("Invalid character in base-64 string");if(U=U.replace(/=/g,""),ri!==-1&&ri<U.length)throw new Error("Invalid '=' found in base-64 string");for(ye=0;ye<U.length;ye+=4){for(Se=U.substr(ye,4),pe=0,ne=0;ne<Se.length;ne+=1)pe|=a.indexOf(Se.charAt(ne))<<18-6*ne;for(ne=0;ne<Se.length-1;ne+=1){for(ie=(Ue=Ne+it)>>>2;Ke.length<=ie;)Ke.push(0);Ke[ie]|=(pe>>>16-8*ne&255)<<8*(ea+se*(Ue%4)),Ne+=1}}return{value:Ke,binLen:8*Ne+X}}(E,k,g,w)};case"BYTES":return function(E,k,g){return function(U,q,X,se){var ye,ne,pe,Se,ie=q||[0],Ue=(X=X||0)>>>3,Ne=se===-1?3:0;for(ne=0;ne<U.length;ne+=1)ye=U.charCodeAt(ne),pe=(Se=ne+Ue)>>>2,ie.length<=pe&&ie.push(0),ie[pe]|=ye<<8*(Ne+se*(Se%4));return{value:ie,binLen:8*U.length+X}}(E,k,g,w)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(E,k,g){return function(U,q,X,se){return t(new Uint8Array(U),q,X,se)}(E,k,g,w)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(E,k,g){return t(E,k,g,w)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function i(S,d,w,E){switch(S){case"HEX":return function(k){return function(g,U,q,X){var se,ye,ne="",pe=U/8,Se=q===-1?3:0;for(se=0;se<pe;se+=1)ye=g[se>>>2]>>>8*(Se+q*(se%4)),ne+="0123456789abcdef".charAt(ye>>>4&15)+"0123456789abcdef".charAt(15&ye);return X.outputUpper?ne.toUpperCase():ne}(k,d,w,E)};case"B64":return function(k){return function(g,U,q,X){var se,ye,ne,pe,Se,ie="",Ue=U/8,Ne=q===-1?3:0;for(se=0;se<Ue;se+=3)for(pe=se+1<Ue?g[se+1>>>2]:0,Se=se+2<Ue?g[se+2>>>2]:0,ne=(g[se>>>2]>>>8*(Ne+q*(se%4))&255)<<16|(pe>>>8*(Ne+q*((se+1)%4))&255)<<8|Se>>>8*(Ne+q*((se+2)%4))&255,ye=0;ye<4;ye+=1)ie+=8*se+6*ye<=U?a.charAt(ne>>>6*(3-ye)&63):X.b64Pad;return ie}(k,d,w,E)};case"BYTES":return function(k){return function(g,U,q){var X,se,ye="",ne=U/8,pe=q===-1?3:0;for(X=0;X<ne;X+=1)se=g[X>>>2]>>>8*(pe+q*(X%4))&255,ye+=String.fromCharCode(se);return ye}(k,d,w)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(k){return function(g,U,q){var X,se=U/8,ye=new ArrayBuffer(se),ne=new Uint8Array(ye),pe=q===-1?3:0;for(X=0;X<se;X+=1)ne[X]=g[X>>>2]>>>8*(pe+q*(X%4))&255;return ye}(k,d,w)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(k){return function(g,U,q){var X,se=U/8,ye=q===-1?3:0,ne=new Uint8Array(se);for(X=0;X<se;X+=1)ne[X]=g[X>>>2]>>>8*(ye+q*(X%4))&255;return ne}(k,d,w)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}var r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],n=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s="Chosen SHA variant is not supported";function l(S,d){var w,E,k=S.binLen>>>3,g=d.binLen>>>3,U=k<<3,q=4-k<<3;if(k%4!=0){for(w=0;w<g;w+=4)E=k+w>>>2,S.value[E]|=d.value[w>>>2]<<U,S.value.push(0),S.value[E+1]|=d.value[w>>>2]>>>q;return(S.value.length<<2)-4>=g+k&&S.value.pop(),{value:S.value,binLen:S.binLen+d.binLen}}return{value:S.value.concat(d.value),binLen:S.binLen+d.binLen}}function c(S){var d={outputUpper:!1,b64Pad:"=",outputLen:-1},w=S||{},E="Output length must be a multiple of 8";if(d.outputUpper=w.outputUpper||!1,w.b64Pad&&(d.b64Pad=w.b64Pad),w.outputLen){if(w.outputLen%8!=0)throw new Error(E);d.outputLen=w.outputLen}else if(w.shakeLen){if(w.shakeLen%8!=0)throw new Error(E);d.outputLen=w.shakeLen}if(typeof d.outputUpper!="boolean")throw new Error("Invalid outputUpper formatting option");if(typeof d.b64Pad!="string")throw new Error("Invalid b64Pad formatting option");return d}function u(S,d,w,E){var k=S+" must include a value and format";if(!d){if(!E)throw new Error(k);return E}if(d.value===void 0||!d.format)throw new Error(k);return e(d.format,d.encoding||"UTF8",w)(d.value)}var p=function(){function S(d,w,E){var k=E||{};if(this.t=w,this.i=k.encoding||"UTF8",this.numRounds=k.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=d,this.u=[],this.s=0,this.h=!1,this.v=0,this.A=!1,this.l=[],this.H=[]}return S.prototype.update=function(d){var w,E=0,k=this.S>>>5,g=this.p(d,this.u,this.s),U=g.binLen,q=g.value,X=U>>>5;for(w=0;w<X;w+=k)E+this.S<=U&&(this.m=this.R(q.slice(w,w+k),this.m),E+=this.S);this.v+=E,this.u=q.slice(E>>>5),this.s=U%this.S,this.h=!0},S.prototype.getHash=function(d,w){var E,k,g=this.U,U=c(w);if(this.T){if(U.outputLen===-1)throw new Error("Output length must be specified in options");g=U.outputLen}var q=i(d,g,this.C,U);if(this.A&&this.F)return q(this.F(U));for(k=this.K(this.u.slice(),this.s,this.v,this.B(this.m),g),E=1;E<this.numRounds;E+=1)this.T&&g%32!=0&&(k[k.length-1]&=16777215>>>24-g%32),k=this.K(k,g,0,this.L(this.o),g);return q(k)},S.prototype.setHMACKey=function(d,w,E){if(!this.g)throw new Error("Variant does not support HMAC");if(this.h)throw new Error("Cannot set MAC key after calling update");var k=e(w,(E||{}).encoding||"UTF8",this.C);this.k(k(d))},S.prototype.k=function(d){var w,E=this.S>>>3,k=E/4-1;if(this.numRounds!==1)throw new Error("Cannot set numRounds with MAC");if(this.A)throw new Error("MAC key already set");for(E<d.binLen/8&&(d.value=this.K(d.value,d.binLen,0,this.L(this.o),this.U));d.value.length<=k;)d.value.push(0);for(w=0;w<=k;w+=1)this.l[w]=909522486^d.value[w],this.H[w]=1549556828^d.value[w];this.m=this.R(this.l,this.m),this.v=this.S,this.A=!0},S.prototype.getHMAC=function(d,w){var E=c(w);return i(d,this.U,this.C,E)(this.Y())},S.prototype.Y=function(){var d;if(!this.A)throw new Error("Cannot call getHMAC without first setting MAC key");var w=this.K(this.u.slice(),this.s,this.v,this.B(this.m),this.U);return d=this.R(this.H,this.L(this.o)),d=this.K(w,this.U,this.S,d,this.U)},S}(),b=function(S,d){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(w,E){w.__proto__=E}||function(w,E){for(var k in E)Object.prototype.hasOwnProperty.call(E,k)&&(w[k]=E[k])})(S,d)};function x(S,d){function w(){this.constructor=S}b(S,d),S.prototype=d===null?Object.create(d):(w.prototype=d.prototype,new w)}function _(S,d){return S<<d|S>>>32-d}function y(S,d){return S>>>d|S<<32-d}function C(S,d){return S>>>d}function A(S,d,w){return S^d^w}function H(S,d,w){return S&d^~S&w}function G(S,d,w){return S&d^S&w^d&w}function Z(S){return y(S,2)^y(S,13)^y(S,22)}function D(S,d){var w=(65535&S)+(65535&d);return(65535&(S>>>16)+(d>>>16)+(w>>>16))<<16|65535&w}function W(S,d,w,E){var k=(65535&S)+(65535&d)+(65535&w)+(65535&E);return(65535&(S>>>16)+(d>>>16)+(w>>>16)+(E>>>16)+(k>>>16))<<16|65535&k}function J(S,d,w,E,k){var g=(65535&S)+(65535&d)+(65535&w)+(65535&E)+(65535&k);return(65535&(S>>>16)+(d>>>16)+(w>>>16)+(E>>>16)+(k>>>16)+(g>>>16))<<16|65535&g}function me(S){return y(S,7)^y(S,18)^C(S,3)}function Be(S){return y(S,6)^y(S,11)^y(S,25)}function Ee(S){return[1732584193,4023233417,2562383102,271733878,3285377520]}function xe(S,d){var w,E,k,g,U,q,X,se=[];for(w=d[0],E=d[1],k=d[2],g=d[3],U=d[4],X=0;X<80;X+=1)se[X]=X<16?S[X]:_(se[X-3]^se[X-8]^se[X-14]^se[X-16],1),q=X<20?J(_(w,5),H(E,k,g),U,1518500249,se[X]):X<40?J(_(w,5),A(E,k,g),U,1859775393,se[X]):X<60?J(_(w,5),G(E,k,g),U,2400959708,se[X]):J(_(w,5),A(E,k,g),U,3395469782,se[X]),U=g,g=k,k=_(E,30),E=w,w=q;return d[0]=D(w,d[0]),d[1]=D(E,d[1]),d[2]=D(k,d[2]),d[3]=D(g,d[3]),d[4]=D(U,d[4]),d}function pt(S,d,w,E){for(var k,g=15+(d+65>>>9<<4),U=d+w;S.length<=g;)S.push(0);for(S[d>>>5]|=128<<24-d%32,S[g]=4294967295&U,S[g-1]=U/4294967296|0,k=0;k<S.length;k+=16)E=xe(S.slice(k,k+16),E);return E}var Nt=function(S){function d(w,E,k){var g=this;if(w!=="SHA-1")throw new Error(s);var U=k||{};return(g=S.call(this,w,E,k)||this).g=!0,g.F=g.Y,g.C=-1,g.p=e(g.t,g.i,g.C),g.R=xe,g.B=function(q){return q.slice()},g.L=Ee,g.K=pt,g.m=[1732584193,4023233417,2562383102,271733878,3285377520],g.S=512,g.U=160,g.T=!1,U.hmacKey&&g.k(u("hmacKey",U.hmacKey,g.C)),g}return x(d,S),d}(p);function wi(S){return S=="SHA-224"?n.slice():o.slice()}function ce(S,d){var w,E,k,g,U,q,X,se,ye,ne,pe,Se,ie=[];for(w=d[0],E=d[1],k=d[2],g=d[3],U=d[4],q=d[5],X=d[6],se=d[7],pe=0;pe<64;pe+=1)ie[pe]=pe<16?S[pe]:W(y(Se=ie[pe-2],17)^y(Se,19)^C(Se,10),ie[pe-7],me(ie[pe-15]),ie[pe-16]),ye=J(se,Be(U),H(U,q,X),r[pe],ie[pe]),ne=D(Z(w),G(w,E,k)),se=X,X=q,q=U,U=D(g,ye),g=k,k=E,E=w,w=D(ye,ne);return d[0]=D(w,d[0]),d[1]=D(E,d[1]),d[2]=D(k,d[2]),d[3]=D(g,d[3]),d[4]=D(U,d[4]),d[5]=D(q,d[5]),d[6]=D(X,d[6]),d[7]=D(se,d[7]),d}var fe=function(S){function d(w,E,k){var g=this;if(w!=="SHA-224"&&w!=="SHA-256")throw new Error(s);var U=k||{};return(g=S.call(this,w,E,k)||this).F=g.Y,g.g=!0,g.C=-1,g.p=e(g.t,g.i,g.C),g.R=ce,g.B=function(q){return q.slice()},g.L=wi,g.K=function(q,X,se,ye){return function(ne,pe,Se,ie,Ue){for(var Ne,Ke=15+(pe+65>>>9<<4),it=pe+Se;ne.length<=Ke;)ne.push(0);for(ne[pe>>>5]|=128<<24-pe%32,ne[Ke]=4294967295&it,ne[Ke-1]=it/4294967296|0,Ne=0;Ne<ne.length;Ne+=16)ie=ce(ne.slice(Ne,Ne+16),ie);return Ue==="SHA-224"?[ie[0],ie[1],ie[2],ie[3],ie[4],ie[5],ie[6]]:ie}(q,X,se,ye,w)},g.m=wi(w),g.S=512,g.U=w==="SHA-224"?224:256,g.T=!1,U.hmacKey&&g.k(u("hmacKey",U.hmacKey,g.C)),g}return x(d,S),d}(p),T=function(S,d){this.N=S,this.I=d};function Ye(S,d){var w;return d>32?(w=64-d,new T(S.I<<d|S.N>>>w,S.N<<d|S.I>>>w)):d!==0?(w=32-d,new T(S.N<<d|S.I>>>w,S.I<<d|S.N>>>w)):S}function ke(S,d){var w;return d<32?(w=32-d,new T(S.N>>>d|S.I<<w,S.I>>>d|S.N<<w)):(w=64-d,new T(S.I>>>d|S.N<<w,S.N>>>d|S.I<<w))}function mt(S,d){return new T(S.N>>>d,S.I>>>d|S.N<<32-d)}function Ot(S,d,w){return new T(S.N&d.N^~S.N&w.N,S.I&d.I^~S.I&w.I)}function Ht(S,d,w){return new T(S.N&d.N^S.N&w.N^d.N&w.N,S.I&d.I^S.I&w.I^d.I&w.I)}function Ni(S){var d=ke(S,28),w=ke(S,34),E=ke(S,39);return new T(d.N^w.N^E.N,d.I^w.I^E.I)}function ht(S,d){var w,E;w=(65535&S.I)+(65535&d.I);var k=(65535&(E=(S.I>>>16)+(d.I>>>16)+(w>>>16)))<<16|65535&w;return w=(65535&S.N)+(65535&d.N)+(E>>>16),E=(S.N>>>16)+(d.N>>>16)+(w>>>16),new T((65535&E)<<16|65535&w,k)}function ka(S,d,w,E){var k,g;k=(65535&S.I)+(65535&d.I)+(65535&w.I)+(65535&E.I);var U=(65535&(g=(S.I>>>16)+(d.I>>>16)+(w.I>>>16)+(E.I>>>16)+(k>>>16)))<<16|65535&k;return k=(65535&S.N)+(65535&d.N)+(65535&w.N)+(65535&E.N)+(g>>>16),g=(S.N>>>16)+(d.N>>>16)+(w.N>>>16)+(E.N>>>16)+(k>>>16),new T((65535&g)<<16|65535&k,U)}function mr(S,d,w,E,k){var g,U;g=(65535&S.I)+(65535&d.I)+(65535&w.I)+(65535&E.I)+(65535&k.I);var q=(65535&(U=(S.I>>>16)+(d.I>>>16)+(w.I>>>16)+(E.I>>>16)+(k.I>>>16)+(g>>>16)))<<16|65535&g;return g=(65535&S.N)+(65535&d.N)+(65535&w.N)+(65535&E.N)+(65535&k.N)+(U>>>16),U=(S.N>>>16)+(d.N>>>16)+(w.N>>>16)+(E.N>>>16)+(k.N>>>16)+(g>>>16),new T((65535&U)<<16|65535&g,q)}function qt(S,d){return new T(S.N^d.N,S.I^d.I)}function bo(S){var d=ke(S,1),w=ke(S,8),E=mt(S,7);return new T(d.N^w.N^E.N,d.I^w.I^E.I)}function Ji(S){var d=ke(S,14),w=ke(S,18),E=ke(S,41);return new T(d.N^w.N^E.N,d.I^w.I^E.I)}var Aa=[new T(r[0],3609767458),new T(r[1],602891725),new T(r[2],3964484399),new T(r[3],2173295548),new T(r[4],4081628472),new T(r[5],3053834265),new T(r[6],2937671579),new T(r[7],3664609560),new T(r[8],2734883394),new T(r[9],1164996542),new T(r[10],1323610764),new T(r[11],3590304994),new T(r[12],4068182383),new T(r[13],991336113),new T(r[14],633803317),new T(r[15],3479774868),new T(r[16],2666613458),new T(r[17],944711139),new T(r[18],2341262773),new T(r[19],2007800933),new T(r[20],1495990901),new T(r[21],1856431235),new T(r[22],3175218132),new T(r[23],2198950837),new T(r[24],3999719339),new T(r[25],766784016),new T(r[26],2566594879),new T(r[27],3203337956),new T(r[28],1034457026),new T(r[29],2466948901),new T(r[30],3758326383),new T(r[31],168717936),new T(r[32],1188179964),new T(r[33],1546045734),new T(r[34],1522805485),new T(r[35],2643833823),new T(r[36],2343527390),new T(r[37],1014477480),new T(r[38],1206759142),new T(r[39],344077627),new T(r[40],1290863460),new T(r[41],3158454273),new T(r[42],3505952657),new T(r[43],106217008),new T(r[44],3606008344),new T(r[45],1432725776),new T(r[46],1467031594),new T(r[47],851169720),new T(r[48],3100823752),new T(r[49],1363258195),new T(r[50],3750685593),new T(r[51],3785050280),new T(r[52],3318307427),new T(r[53],3812723403),new T(r[54],2003034995),new T(r[55],3602036899),new T(r[56],1575990012),new T(r[57],1125592928),new T(r[58],2716904306),new T(r[59],442776044),new T(r[60],593698344),new T(r[61],3733110249),new T(r[62],2999351573),new T(r[63],3815920427),new T(3391569614,3928383900),new T(3515267271,566280711),new T(3940187606,3454069534),new T(4118630271,4000239992),new T(116418474,1914138554),new T(174292421,2731055270),new T(289380356,3203993006),new T(460393269,320620315),new T(685471733,587496836),new T(852142971,1086792851),new T(1017036298,365543100),new T(1126000580,2618297676),new T(1288033470,3409855158),new T(1501505948,4234509866),new T(1607167915,987167468),new T(1816402316,1246189591)];function yo(S){return S==="SHA-384"?[new T(3418070365,n[0]),new T(1654270250,n[1]),new T(2438529370,n[2]),new T(355462360,n[3]),new T(1731405415,n[4]),new T(41048885895,n[5]),new T(3675008525,n[6]),new T(1203062813,n[7])]:[new T(o[0],4089235720),new T(o[1],2227873595),new T(o[2],4271175723),new T(o[3],1595750129),new T(o[4],2917565137),new T(o[5],725511199),new T(o[6],4215389547),new T(o[7],327033209)]}function ai(S,d){var w,E,k,g,U,q,X,se,ye,ne,pe,Se,ie,Ue,Ne,Ke,it=[];for(w=d[0],E=d[1],k=d[2],g=d[3],U=d[4],q=d[5],X=d[6],se=d[7],pe=0;pe<80;pe+=1)pe<16?(Se=2*pe,it[pe]=new T(S[Se],S[Se+1])):it[pe]=ka((ie=it[pe-2],Ue=void 0,Ne=void 0,Ke=void 0,Ue=ke(ie,19),Ne=ke(ie,61),Ke=mt(ie,6),new T(Ue.N^Ne.N^Ke.N,Ue.I^Ne.I^Ke.I)),it[pe-7],bo(it[pe-15]),it[pe-16]),ye=mr(se,Ji(U),Ot(U,q,X),Aa[pe],it[pe]),ne=ht(Ni(w),Ht(w,E,k)),se=X,X=q,q=U,U=ht(g,ye),g=k,k=E,E=w,w=ht(ye,ne);return d[0]=ht(w,d[0]),d[1]=ht(E,d[1]),d[2]=ht(k,d[2]),d[3]=ht(g,d[3]),d[4]=ht(U,d[4]),d[5]=ht(q,d[5]),d[6]=ht(X,d[6]),d[7]=ht(se,d[7]),d}var Da=function(S){function d(w,E,k){var g=this;if(w!=="SHA-384"&&w!=="SHA-512")throw new Error(s);var U=k||{};return(g=S.call(this,w,E,k)||this).F=g.Y,g.g=!0,g.C=-1,g.p=e(g.t,g.i,g.C),g.R=ai,g.B=function(q){return q.slice()},g.L=yo,g.K=function(q,X,se,ye){return function(ne,pe,Se,ie,Ue){for(var Ne,Ke=31+(pe+129>>>10<<5),it=pe+Se;ne.length<=Ke;)ne.push(0);for(ne[pe>>>5]|=128<<24-pe%32,ne[Ke]=4294967295&it,ne[Ke-1]=it/4294967296|0,Ne=0;Ne<ne.length;Ne+=32)ie=ai(ne.slice(Ne,Ne+32),ie);return Ue==="SHA-384"?[(ie=ie)[0].N,ie[0].I,ie[1].N,ie[1].I,ie[2].N,ie[2].I,ie[3].N,ie[3].I,ie[4].N,ie[4].I,ie[5].N,ie[5].I]:[ie[0].N,ie[0].I,ie[1].N,ie[1].I,ie[2].N,ie[2].I,ie[3].N,ie[3].I,ie[4].N,ie[4].I,ie[5].N,ie[5].I,ie[6].N,ie[6].I,ie[7].N,ie[7].I]}(q,X,se,ye,w)},g.m=yo(w),g.S=1024,g.U=w==="SHA-384"?384:512,g.T=!1,U.hmacKey&&g.k(u("hmacKey",U.hmacKey,g.C)),g}return x(d,S),d}(p),Yr=[new T(0,1),new T(0,32898),new T(2147483648,32906),new T(2147483648,2147516416),new T(0,32907),new T(0,2147483649),new T(2147483648,2147516545),new T(2147483648,32777),new T(0,138),new T(0,136),new T(0,2147516425),new T(0,2147483658),new T(0,2147516555),new T(2147483648,139),new T(2147483648,32905),new T(2147483648,32771),new T(2147483648,32770),new T(2147483648,128),new T(0,32778),new T(2147483648,2147483658),new T(2147483648,2147516545),new T(2147483648,32896),new T(0,2147483649),new T(2147483648,2147516424)],_l=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function $r(S){var d,w=[];for(d=0;d<5;d+=1)w[d]=[new T(0,0),new T(0,0),new T(0,0),new T(0,0),new T(0,0)];return w}function u_(S){var d,w=[];for(d=0;d<5;d+=1)w[d]=S[d].slice();return w}function wl(S,d){var w,E,k,g,U,q,X,se,ye,ne=[],pe=[];if(S!==null)for(E=0;E<S.length;E+=2)d[(E>>>1)%5][(E>>>1)/5|0]=qt(d[(E>>>1)%5][(E>>>1)/5|0],new T(S[E+1],S[E]));for(w=0;w<24;w+=1){for(g=$r(),E=0;E<5;E+=1)ne[E]=(U=d[E][0],q=d[E][1],X=d[E][2],se=d[E][3],ye=d[E][4],new T(U.N^q.N^X.N^se.N^ye.N,U.I^q.I^X.I^se.I^ye.I));for(E=0;E<5;E+=1)pe[E]=qt(ne[(E+4)%5],Ye(ne[(E+1)%5],1));for(E=0;E<5;E+=1)for(k=0;k<5;k+=1)d[E][k]=qt(d[E][k],pe[E]);for(E=0;E<5;E+=1)for(k=0;k<5;k+=1)g[k][(2*E+3*k)%5]=Ye(d[E][k],_l[E][k]);for(E=0;E<5;E+=1)for(k=0;k<5;k+=1)d[E][k]=qt(g[E][k],new T(~g[(E+1)%5][k].N&g[(E+2)%5][k].N,~g[(E+1)%5][k].I&g[(E+2)%5][k].I));d[0][0]=qt(d[0][0],Yr[w])}return d}function ey(S){var d,w,E=0,k=[0,0],g=[4294967295&S,S/4294967296&2097151];for(d=6;d>=0;d--)(w=g[d>>2]>>>8*d&255)===0&&E===0||(k[E+1>>2]|=w<<8*(E+1),E+=1);return E=E!==0?E:1,k[0]|=E,{value:E+1>4?k:[k[0]],binLen:8+8*E}}function pf(S){return l(ey(S.binLen),S)}function ty(S,d){var w,E=ey(d),k=d>>>2,g=(k-(E=l(E,S)).value.length%k)%k;for(w=0;w<g;w++)E.value.push(0);return E.value}var p_=function(S){function d(w,E,k){var g=this,U=6,q=0,X=k||{};if((g=S.call(this,w,E,k)||this).numRounds!==1){if(X.kmacKey||X.hmacKey)throw new Error("Cannot set numRounds with MAC");if(g.o==="CSHAKE128"||g.o==="CSHAKE256")throw new Error("Cannot set numRounds for CSHAKE variants")}switch(g.C=1,g.p=e(g.t,g.i,g.C),g.R=wl,g.B=u_,g.L=$r,g.m=$r(),g.T=!1,w){case"SHA3-224":g.S=q=1152,g.U=224,g.g=!0,g.F=g.Y;break;case"SHA3-256":g.S=q=1088,g.U=256,g.g=!0,g.F=g.Y;break;case"SHA3-384":g.S=q=832,g.U=384,g.g=!0,g.F=g.Y;break;case"SHA3-512":g.S=q=576,g.U=512,g.g=!0,g.F=g.Y;break;case"SHAKE128":U=31,g.S=q=1344,g.U=-1,g.T=!0,g.g=!1,g.F=null;break;case"SHAKE256":U=31,g.S=q=1088,g.U=-1,g.T=!0,g.g=!1,g.F=null;break;case"KMAC128":U=4,g.S=q=1344,g.M(k),g.U=-1,g.T=!0,g.g=!1,g.F=g.X;break;case"KMAC256":U=4,g.S=q=1088,g.M(k),g.U=-1,g.T=!0,g.g=!1,g.F=g.X;break;case"CSHAKE128":g.S=q=1344,U=g.O(k),g.U=-1,g.T=!0,g.g=!1,g.F=null;break;case"CSHAKE256":g.S=q=1088,U=g.O(k),g.U=-1,g.T=!0,g.g=!1,g.F=null;break;default:throw new Error(s)}return g.K=function(se,ye,ne,pe,Se){return function(ie,Ue,Ne,Ke,it,ea,ri){var xi,mf,xl=0,go=[],Il=it>>>5,m_=Ue>>>5;for(xi=0;xi<m_&&Ue>=it;xi+=Il)Ke=wl(ie.slice(xi,xi+Il),Ke),Ue-=it;for(ie=ie.slice(xi),Ue%=it;ie.length<Il;)ie.push(0);for(ie[(xi=Ue>>>3)>>2]^=ea<<xi%4*8,ie[Il-1]^=2147483648,Ke=wl(ie,Ke);32*go.length<ri&&(mf=Ke[xl%5][xl/5|0],go.push(mf.I),!(32*go.length>=ri));)go.push(mf.N),64*(xl+=1)%it==0&&(wl(null,Ke),xl=0);return go}(se,ye,0,pe,q,U,Se)},X.hmacKey&&g.k(u("hmacKey",X.hmacKey,g.C)),g}return x(d,S),d.prototype.O=function(w,E){var k=function(X){var se=X||{};return{funcName:u("funcName",se.funcName,1,{value:[],binLen:0}),customization:u("Customization",se.customization,1,{value:[],binLen:0})}}(w||{});E&&(k.funcName=E);var g=l(pf(k.funcName),pf(k.customization));if(k.customization.binLen!==0||k.funcName.binLen!==0){for(var U=ty(g,this.S>>>3),q=0;q<U.length;q+=this.S>>>5)this.m=this.R(U.slice(q,q+(this.S>>>5)),this.m),this.v+=this.S;return 4}return 31},d.prototype.M=function(w){var E=function(U){var q=U||{};return{kmacKey:u("kmacKey",q.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:u("Customization",q.customization,1,{value:[],binLen:0})}}(w||{});this.O(w,E.funcName);for(var k=ty(pf(E.kmacKey),this.S>>>3),g=0;g<k.length;g+=this.S>>>5)this.m=this.R(k.slice(g,g+(this.S>>>5)),this.m),this.v+=this.S;this.A=!0},d.prototype.X=function(w){var E=l({value:this.u.slice(),binLen:this.s},function(k){var g,U,q=0,X=[0,0],se=[4294967295&k,k/4294967296&2097151];for(g=6;g>=0;g--)(U=se[g>>2]>>>8*g&255)==0&&q===0||(X[q>>2]|=U<<8*q,q+=1);return X[(q=q!==0?q:1)>>2]|=q<<8*q,{value:q+1>4?X:[X[0]],binLen:8+8*q}}(w.outputLen));return this.K(E.value,E.binLen,this.v,this.B(this.m),w.outputLen)},d}(p);return function(){function S(d,w,E){if(d=="SHA-1")this.j=new Nt(d,w,E);else if(d=="SHA-224"||d=="SHA-256")this.j=new fe(d,w,E);else if(d=="SHA-384"||d=="SHA-512")this.j=new Da(d,w,E);else{if(d!="SHA3-224"&&d!="SHA3-256"&&d!="SHA3-384"&&d!="SHA3-512"&&d!="SHAKE128"&&d!="SHAKE256"&&d!="CSHAKE128"&&d!="CSHAKE256"&&d!="KMAC128"&&d!="KMAC256")throw new Error(s);this.j=new p_(d,w,E)}}return S.prototype.update=function(d){this.j.update(d)},S.prototype.getHash=function(d,w){return this.j.getHash(d,w)},S.prototype.setHMACKey=function(d,w,E){this.j.setHMACKey(d,w,E)},S.prototype.getHMAC=function(d,w){return this.j.getHMAC(d,w)},S}()})});var Sl=class extends Laya.Scene{};var{regClass:L_,property:TE}=Laya,vo=class extends Sl{constructor(){super()}onEnable(){console.log("IndexRT onEnable"),this.uiBtn.on(Laya.Event.CLICK,this,()=>{console.log("uiBtn"),Laya.Scene.open("scenes/UiMain.ls")}),this.phyBtn.on(Laya.Event.CLICK,this,()=>{console.log("phyBtn"),Laya.Scene.open("scenes/PhysicsGameMain.ls")}),this.d3Btn.on(Laya.Event.CLICK,this,()=>{console.log("d3Btn"),Laya.Scene.open("scenes/D3Main.ls")})}onDestroy(){}};vo=m([L_("wtSVevJMRPCBIPp2HPhqpw")],vo);var Tl=class extends Laya.Scene{};var{regClass:__,property:w_}=Laya,Lo=class extends Tl{constructor(){super();this.text=""}get dataSource(){return super.dataSource}set dataSource(e){if(super.dataSource=e,!!e){if(e.avatar){let i=this.getChildByName("avatar").getChildByName("redHot");i.visible=e.avatar.redHot.visible}if(e.flag){let i=this.getChildByName("flag").getChildByName("flagText");i.text=e.flag.flagText.text}}}};m([w_({type:"string"})],Lo.prototype,"text",2),Lo=m([__("c-3Sonu7RWOm5ETy2TrBcg")],Lo);var Cl=class extends Laya.Scene{};var Me=class{constructor(){this._keys=[];this.THIS_ID="id"}init(t){for(let e in t){this._keys.push(e);let i=t[e];t[e]instanceof String&&String(t[e]).indexOf("[[")>=0&&(i=JSON.parse(t[e])),this[e]=i}}checkItems(){}};var _o=class extends Me{};var le=class{constructor(){this._values=[];this._keys=[];this.SERIALIZATION_NUM=new Date().getTime()}get values(){return this._values}get keys(){return this._keys}set(t,e){let i=this.indexOf(t);if(i>=0){this._values[i]=e;return}this._keys.push(t),this._values.push(e)}unshift(t,e){let i=this.indexOf(t);if(i>=0){this._values[i]=e;return}this._keys.unshift(t),this._values.unshift(e)}indexOf(t){let e=this._keys.indexOf(t);return e>=0?e:(t=t instanceof String?Number(t):t instanceof Number?t.toString():t,this._keys.indexOf(t))}get(t){let e=this.indexOf(t);return e<0?null:this._values[e]}remove(t){let e=this.indexOf(t);return e>=0?(this._keys.splice(e,1),this._values.splice(e,1),!0):!1}clear(){this._values.length=0,this._keys.length=0}};var de=class de{constructor(){}static get LoginType(){return de._LoginType}static set LoginType(t){de._LoginType=t,de._LoginType&&de._LoginType!=""&&Laya.LocalStorage.setItem(de.COOKIE_CF_LoginType,de._LoginType)}static get isWhiteList(){return!0}static get intance(){return de._instance||(de._instance=new de),de._instance}init(){}static get server(){return getServer()}static get vType(){return getVType()}static get requestTime(){return 0}static get loginTime(){return 0}static set m_iTimeFrame(t){if(t>1500){let e=function(){de._m_iTimeFrame=0};de._m_iTimeFrame=t,Laya.timer.clear(Laya.timer,e),Laya.timer.once(500,Laya.timer,e)}}static get m_iTimeFrame(){return de._m_iTimeFrame}};de.IsRelease=!1,de.m_bInstantGame=!1,de.useWebVersion=!1,de.m_strVersionEX="V003",de.m_bIsMobWeb=!1,de.m_strWebTag="",de.Js_Version="1",de.Game_Version="20231227_01",de.App_Version="1.0.0",de.SDK_Version="1.0.0",de.M_strCountry="1",de.M_bAppData=!1,de.M_strTarget="",de.UseGuide=!1,de.m_mobileSameWb=!1,de.ignoreLang=!1,de.ignoreSheetNo=!1,de.m_bIsIphoneX=!1,de.Debug=0,de.Res=0,de.isTest=!0,de.Server_URL="",de.IP_User="",de.Plantform_APPID="17",de.ServerId=22310001,de.Login_UID="-1",de._LoginType="gamecenter",de.isInto=!1,de.isFull=!1,de.justFull=!1,de.Login_UDID="81BC19A8-B49B-47CC-BEFE-193E723B521A",de.Device_Info="",de.FCM_Token="",de.APP_IsRelease=!0,de.User_Lan="en",de.UserAgent="",de.Login_UserName="",de.isWhite=!1,de.APP_RES="",de.COOKIE_CF_LAN="COOKIE_GG_LAN",de.COOKIE_CF_LoginType="COOKIE_CF_LoginType",de.IPHONEX_SCARE=1.22,de.IPHONEX_TOP=44,de.IPHONEX_BUTTOM=34,de.DESIGN_WIDTH=1334,de.DESIGN_HEIGHT=750,de._m_iTimeFrame=0,de.isStopPhysics=!1,de.isDown=!1;var Q=de;var f=class a{constructor(){this._lanTypesById=new le,this._lanTypesByType=new le,this._configData=new le}static get instance(){return a._instance||(a._instance=new a),a._instance}initLanTypes(t){this._lanTypesById=new le,this._lanTypesByType=new le;for(let e in t){let i=new _o;if(i.init(t[e]),parseInt(i.if_open)!=1)continue;let r=i.ID,n=i.type;this._lanTypesById.set(r,i),n&&n!=""&&this._lanTypesByType.set(n,i)}}getLanTypes(){return this._lanTypesById}getLanIdByType(t){if(this._lanTypesByType){let e=this._lanTypesByType.get(t);if(e)return parseInt(e.ID.toString())}return 1}getLanTypeById(t){if(this._lanTypesById){let e=this._lanTypesById.get(t);if(e)return e.type}return"en"}initConfigLan(t){this._configData=t}initUILan(t){Laya.Text.langPacks={};let e;for(e in t){let i=t[e].value;Laya.Text.langPacks[e]=i}}changeBrToN(t){let e=/<br>/g;for(;t.indexOf("<br>")!=-1;)t=t.replace(e,`
`);return t}replacePlaceholder(t,e){if(t=="")return"";let i=/{(\d+)}/g;return e.length>0&&(t=t.replace(i,function(){return e[arguments[1]]})),this.replaceLanByBR(t)}replaceLanByBR(t){return t+""}getLanguage(t,...e){return this.getLanguage2(t,e)}getLanguage2(t,e){if(this._configData&&this._configData[t]){let i=this._configData[t].value;if(i&&i!="")return this.replacePlaceholder(i,e)}return this.replacePlaceholder(t+"",e)}getUILang(t,e=null,i=null,r=null,n=null){if(t=Laya.Text.langPacks&&Laya.Text.langPacks[t]?Laya.Text.langPacks[t]:t,arguments.length>1)for(let o=0,s=arguments.length;o<s;o++)t=t.replace("{"+o+"}",arguments[o+1]);return t}FGM_GetLanguage(){let t=function(i){console.log("initGame->-----------------------------FGM_GetLanguage:=="+i),i&&(i=i.substring(0,2),Q.User_Lan=i)},e=Laya.LocalStorage.getItem(Q.COOKIE_CF_LAN);!e||e==""?t(this.language):t(e)}get language(){return"en"}FGM_SetLanguage(t){t&&t!=""&&Laya.LocalStorage.setItem(Q.COOKIE_CF_LAN,t)}dispose(){}};var ta=class extends Me{constructor(){super()}};var Xr=class{constructor(t,e){this._valuesObject={};this.sheetObject=t,this.BaseItemClass=e}get keys(){if(this._keys)return this._keys;this._keys=[];let t;for(let e in this.sheetObject)!e||e==""||this._keys.push(e);return this._keys}get values(){if(this._values)return this._values;this._values=[];let t;for(let e in this.sheetObject)this._valuesObject[e]?t=this._valuesObject[e]:(t=new this.BaseItemClass,t.init(this.sheetObject[e]),this._valuesObject[e]=t),this._values.push(t);return this._values}get(t){if(this._valuesObject[t])return this._valuesObject[t];let e=this.sheetObject[t];if(e)return e;let i;this.BaseItemClass&&(i=new this.BaseItemClass,i.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig()  class : "+this.BaseItemClass),i.init(e)),this._valuesObject;let r=i||e;return this._valuesObject[t]=r,r}indexOf(t){let e=this._keys.indexOf(t);return e>=0?e:(t=t instanceof String?Number(t):t instanceof Number?t.toString():t,this._keys.indexOf(t))}clear(){this.sheetObject=null}};var Qr=class a{constructor(){}static get instance(){return a._instance||(a._instance=new a),a._instance}initSpotCfgData(){if(this.spotDic==null){let t=M.instance.getResByURL("config/spot.json");this.spotDic=new Xr(t.data,ta)}}getSpotById(t){return this.initSpotCfgData(),this.spotDic.get(t)}get getSpotDic(){return this.initSpotCfgData(),this.spotDic}};var _e=class a{constructor(){}registerCommCallBack(t=null){Laya.LayaEnv.isConch}static get instance(){return a._instance||(a._instance=new a),a._instance}sendCustumEvent(t,e=null,i=null){let r;if(i?r=i:r=Qr.instance.getSpotById(t),!r||!r.Event)return;let n,o=new Object;o.id=r.ID,o.eventKey=r.Event,o.type=r.type,this.sendWebEvent(o)}sendWebEvent(t){}dispose(){}reload(){Laya.Browser.window.location.reload()}testEvnt(){}};var K=class a{constructor(){this._isLoading=!1}static get instance(){return a._instance||(a._instance=new a),a._instance}get isLoading(){return this._isLoading}init(){if(!this.txtLoadingView){var t=Laya.loader.getRes("scenes/notice/TxtLoadingView.lh");this.txtLoadingView=t.create()}}showLoading(t=!1){if(console.log("showLoading..."+t),this.txtLoadingView)t?(this._isLoading=!0,this.showMaskLoading(),this.showLazyLoading(),this._isLoading=!1):(this._isLoading=!0,this.showMaskLoading(),Laya.timer.once(3e3,this,this.showLazyLoading)),this.txtLoadingView.m_txtLabel&&(this.txtLoadingView.m_txtLabel.visible=!1);else return}showLoadingByInfo(t=""){console.log("showLoadingByInfo..."+t),this._isLoading=!0,this.showMaskLoading(),this.showLazyLoading(),this.txtLoadingView.m_txtLabel.text=t,this.txtLoadingView.m_txtLabel.visible=!0}showMaskLoading(){this._isLoading&&(this.txtLoadingView.backLayer.name="backLayer",this.txtLoadingView.backLayer.mouseEnabled=!0,this.txtLoadingView.backLayer.mouseThrough=!1,this.txtLoadingView.backLayer.visible=!0)}showLazyLoading(){this._isLoading&&(console.log("showLazyLoading..."),this.txtLoadingView.visible=!0,Laya.stage.addChild(this.txtLoadingView),this.txtLoadingView.x=(Laya.stage.width-this.txtLoadingView.width)/2,this.txtLoadingView.y=(Laya.stage.height-this.txtLoadingView.height)/2),Laya.timer.clear(this,this.showLazyLoading)}hideLoading(){if(console.log("hideLoading..."),this._isLoading=!1,this.txtLoadingView)this.txtLoadingView.removeSelf();else return}dispose(){this.txtLoadingView&&(this.txtLoadingView.destroy(),this.txtLoadingView.removeSelf(),this.txtLoadingView=null),this.txtLoadingView.backLayer&&(this.txtLoadingView.backLayer.destroy(),this.txtLoadingView.backLayer.removeSelf(),this.txtLoadingView.backLayer=null)}};var ee=class ee{constructor(){this._touchEnabled=!0;if(ee._instance)throw new Error("LayerManager是单例,不可new.");ee._instance=this}get m_sprPanelLayer(){return this._m_sprPanelLayer}set m_sprPanelLayer(t){this._m_sprPanelLayer=t}get m_sprMainUILayer(){return this._m_sprMainUILayer}set m_sprMainUILayer(t){this._m_sprMainUILayer=t}get m_sprTipLayer(){return this._m_sprTipLayer}set m_sprTipLayer(t){this._m_sprTipLayer=t}static get instence(){return ee._instance||(ee._instance=new ee),ee._instance}init(){this.m_sprSceneLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprSceneLayer),this.m_sprMainUILayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprMainUILayer),this.m_sprPanelLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprPanelLayer),this.m_sprPopLayer=new Laya.Sprite,this.m_sprPopLayer.mouseThrough=!0,Laya.stage.addChild(this.m_sprPopLayer),this.m_sprTipLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTipLayer),this.m_sprGuideLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprGuideLayer),this.m_sprTopLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTopLayer)}get touchEnabled(){return this._touchEnabled}set touchEnabled(t){this._touchEnabled!=t&&(this._touchEnabled=t,this.m_sprSceneLayer.mouseEnabled=this._touchEnabled,this.m_sprMainUILayer.mouseEnabled=this._touchEnabled,this.m_sprPanelLayer.mouseEnabled=this._touchEnabled,this.m_sprPopLayer.mouseEnabled=this._touchEnabled,this.m_sprTipLayer.mouseEnabled=this._touchEnabled,this.m_sprGuideLayer.mouseEnabled=this._touchEnabled,this.m_sprTopLayer.mouseEnabled=this._touchEnabled)}addToLayerAndSet(t,e=ee.M_PANEL,i=ee.CENTER){this.addToLayer(t,e),this.setPosition(t,i)}getLayerIndex(t,e=ee.M_PANEL){let i;switch(e){case ee.M_SCENE:i=this.m_sprSceneLayer.getChildIndex(t);break;case ee.M_MAINUI:i=this.m_sprMainUILayer.getChildIndex(t);break;case ee.M_PANEL:i=this.m_sprPanelLayer.getChildIndex(t);break;case ee.M_POP:i=this.m_sprPopLayer.getChildIndex(t);break;case ee.M_TIP:i=this.m_sprTipLayer.getChildIndex(t);break;case ee.M_GUIDE:i=this.m_sprGuideLayer.getChildIndex(t);break;case ee.M_TOP:i=this.m_sprTopLayer.getChildIndex(t);break}return i}addToLayerAt(t,e=ee.M_PANEL,i=0){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.addChildAt(t,i);break;case ee.M_MAINUI:this.m_sprMainUILayer.addChildAt(t,i);break;case ee.M_PANEL:this.m_sprPanelLayer.addChildAt(t,i);break;case ee.M_POP:this.m_sprPopLayer.addChildAt(t,i);break;case ee.M_TIP:this.m_sprTipLayer.addChildAt(t,i);break;case ee.M_GUIDE:this.m_sprGuideLayer.addChildAt(t,i);break;case ee.M_TOP:this.m_sprTopLayer.addChildAt(t,i);break}}addToLayer(t,e=ee.M_PANEL){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.addChild(t);break;case ee.M_MAINUI:this.m_sprMainUILayer.addChild(t);break;case ee.M_PANEL:this.m_sprPanelLayer.addChild(t);break;case ee.M_POP:this.m_sprPopLayer.addChild(t);break;case ee.M_TIP:this.m_sprTipLayer.addChild(t);break;case ee.M_GUIDE:this.m_sprGuideLayer.addChild(t);break;case ee.M_TOP:this.m_sprTopLayer.addChild(t);break}}removeFromLayer(t,e){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.removeChild(t);break;case ee.M_MAINUI:this.m_sprMainUILayer.removeChild(t);break;case ee.M_PANEL:this.m_sprPanelLayer.removeChild(t);break;case ee.M_POP:this.m_sprPopLayer.removeChild(t);break;case ee.M_GUIDE:this.m_sprGuideLayer.removeChild(t);break;case ee.M_TOP:this.m_sprTopLayer.removeChild(t);break}}clearLayer(t){switch(t){case ee.M_SCENE:this.m_sprSceneLayer.removeChildren();break;case ee.M_MAINUI:this.m_sprSceneLayer.removeChildren();break;case ee.M_PANEL:this.m_sprSceneLayer.removeChildren();break;case ee.M_POP:this.m_sprSceneLayer.removeChildren();break;case ee.M_TOP:this.m_sprSceneLayer.removeChildren();break}}get stageWidth(){let t;return t=Laya.stage.width,t}get stageHeight(){let t;return t=Laya.stage.height,t}setPosition(t,e,i=0,r=0,n=!1,o=!1){let s=Laya.stage.width,l=Laya.stage.height;switch(this.m_iStageWidth=s,this.m_iStageHeight=l,e){case ee.UP:t.x=n?s/2:(s-t.width*t.scaleX)/2,t.y=0;break;case ee.DOWN:t.x=n?s/2:(s-t.width*t.scaleX)/2,t.y=l-t.height*t.scaleY;break;case ee.LEFT:t.x=0,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.RIGHT:t.x=s-t.width*t.scaleX,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.LEFTUP:t.x=0,t.y=0;break;case ee.RIGHTUP:t.x=s-t.width*t.scaleX,t.y=0;break;case ee.LEFTDOWN:t.x=0,t.y=l-t.height*t.scaleY;break;case ee.RIGHTDOWN:t.x=s-t.width*t.scaleX,t.y=l-t.height*t.scaleY;break;case ee.CENTERLEFT:t.x=s/2-t.width*t.scaleX,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.CENTERRIGHT:t.x=s/2,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.CENTER:t.x=n?s/2:(s-t.width*t.scaleX)/2,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;default:break}t.x+=i,t.y+=r}setLayer(t,e,i){if(!t||!e||t.parent!=e.parent)return;let r=t.parent.getChildIndex(t),n=e.parent.getChildIndex(e);i?r>n&&(t.parent.setChildIndex(t,n),t.parent.setChildIndex(e,r)):r<n&&(t.parent.setChildIndex(t,n),t.parent.setChildIndex(e,r))}};ee.M_SCENE=1,ee.M_MAINUI=2,ee.M_PANEL=3,ee.M_POP=4,ee.M_TIP=5,ee.M_GUIDE=7,ee.M_TOP=6,ee.UP=1,ee.DOWN=16,ee.LEFT=256,ee.RIGHT=4096,ee.CENTER=65536,ee.LEFTUP=ee.LEFT|ee.UP,ee.RIGHTUP=ee.RIGHT|ee.UP,ee.LEFTDOWN=ee.LEFT|ee.DOWN,ee.RIGHTDOWN=ee.RIGHT|ee.DOWN,ee.CENTERLEFT=ee.CENTER|ee.LEFT,ee.CENTERRIGHT=ee.CENTER|ee.RIGHT,ee.MOVE=-1;var R=ee;var we=class we{constructor(){this._m_bPlayMusic=!0;this._m_bPlayeSound=!0}static get instance(){return we._instance||(we._instance=new we),we._instance}get m_bPlayMusic(){return this._m_bPlayMusic}set m_bPlayMusic(t){this._m_bPlayMusic=t,t?this.m_strMusicURL!=null&&this.playMusicByURL(this.m_strMusicURL):this.musicChannel&&this.musicChannel.stop()}init(){Laya.SoundManager.autoStopMusic=!1;let t=Laya.LocalStorage.getItem(we.COOKIE_CF_MUSIC);t!=null&&t!=""&&(we.instance.m_bPlayMusic=parseInt(t)==1);let e=Laya.LocalStorage.getItem(we.COOKIE_CF_SOUND);e!=null&&e!=""&&(we.instance.m_bPlayeSound=parseInt(e)==1)}get m_bPlayeSound(){return this._m_bPlayeSound}set m_bPlayeSound(t){this._m_bPlayeSound=t}playMusicByURL(t){this.m_bPlayMusic&&(this.m_strMusicURL,this.m_strMusicURL==t&&this.musicChannel,this.m_strMusicURL=t,Laya.SoundManager.stopMusic(),this.musicChannel=Laya.SoundManager.playMusic(t,0,new Laya.Handler(this,this.onComplete)))}playMusicByName(t,e=".ogg"){let i=M.instance.getSoundURL(t,e);this.playMusicByURL(i)}playSound(t,e=1){this.m_bPlayeSound&&Laya.SoundManager.playSound(t,e,new Laya.Handler(this,this.onComplete))}playSoundByName(t,e=1){let i=M.instance.getSoundURLogg(t);this.playSound(i,e)}stopSoundByName(t){let e=M.instance.getSoundURLogg(t);Laya.SoundManager.stopSound(e)}switchMusic(t){let e=t?1:0;we.instance.m_bPlayMusic=t,Laya.LocalStorage.setItem(we.COOKIE_CF_MUSIC,e.toString())}switchSound(t){let e=t?1:0;we.instance.m_bPlayeSound=t,Laya.LocalStorage.setItem(we.COOKIE_CF_SOUND,e.toString())}onComplete(){}};we.COOKIE_CF_MUSIC="COOKIE_CF_MUSIC",we.COOKIE_CF_SOUND="COOKIE_CF_SOUND",we.soundName_bg="bgm",we.soundName1="ui01.ogg",we.soundName2="ui02.ogg",we.soundName3="ui03.ogg",we.soundName4="hit.wav",we.soundName30_1="ui30_1.ogg",we.soundName28_1_star="ui28_1_star.ogg",we.soundName28_2_star="ui28_2_stars.ogg",we.soundName28_3_star="ui28_3_stars.ogg",we.soundName28_bar="ui28_bar_rise.ogg",we.soundName32="ui32.ogg",we.soundName33="ui33.ogg",we.soundName34="ui34.ogg",we.soundName35="ui35.ogg",we.soundName36="ui36.ogg",we.soundName37="ui37.ogg",we.soundName38="ui38.ogg",we.soundName39="ui39.ogg",we.soundName41="ui41.ogg",we.soundName42="ui42.ogg",we.soundName43="ui43.ogg",we.soundName44="ui44.ogg",we.soundName45="ui45.ogg",we.soundNameUi40_1="ui40_1.ogg",we.soundNameUi40_2="ui40_2.ogg",we.soundNameUi40_3="ui40_3.ogg",we.soundNameDressing="dressing_score_sfx.ogg",we.soundNameAnswer="answer_bonus_points.ogg";var Ae=we;var h=class{};h.FindView="FindView",h.FindEndView="FindEndView",h.FindAskDialog="FindAskDialog",h.FindRankUpDialog="FindRankUpDialog",h.QuickTipDialog="QuickTipDialog",h.QuickEndView="QuickEndView",h.QuickShareView="QuickShareView",h.QuickOperatorDialog="QuickOperatorDialog",h.MainView="MainView",h.RoleDialog="RoleDialog",h.RemGetDialog="RemGetDialog",h.QuickRechargeDialog="QuickRechargeDialog",h.CreateNameDialog="CreateNameDialog",h.DailyTaskDialog="DailyTaskDialog",h.ActivityTaskDialog="ActivityTaskDialog",h.ShareDialog="ShareDialog",h.InvitationCenterDialog="InvitationCenterDialog",h.DailyTaskDrawDialog="DailyTaskDrawDialog",h.GuideView="GuideView",h.GuideDialogView="GuideDialogView",h.ShareView="ShareView",h.MainTopView="MainTopView",h.GetMoreDialog="GetMoreDialog",h.ShopView="ShopView",h.ItemGetDialog="ItemGetDialog",h.RewardGetDialog="RewardGetDialog",h.GetTitleDialog="GetTitleDialog",h.NewFunUnLockDialog="NewFunUnLockDialog",h.DialogView="DialogView",h.MallView="MallView",h.MallCardView="MallCardView",h.MallBuyDialog="MallBuyDialog",h.FittingUiView="FittingUiView",h.TaskDialog="TaskDialog",h.CommentDialog="CommentDialog",h.PotraitChangDialog="PotraitChangDialog",h.ClothespressView="ClothespressView",h.ItemSellDialog="ItemSellDialog",h.ItemInfoDialog="ItemInfoDialog",h.OnlineAward="OnlineAward",h.MaillView="MailView",h.MailSendView="MailSendView",h.GameSettingDialog="GameSettingDialog",h.GamesettingSoundView="GamesettingSoundView",h.GameSettingLanguageDialog="GameSettingLanguageDialog",h.GameSettingVersionDialog="GameSettingVersionDialog",h.FriendMainView="FriendMainView",h.FriendSearchView="FriendSearchView",h.FriendGetRewardDialog="FriendGetRewardDialog",h.FriendRewardDialog="FriendRewardDialog",h.PreLoadingView="PreLoadingView",h.HelpDialog="HelpDialog",h.RechargeDialog="RechargeDialog",h.WalletChooseHeroDialog="WalletChooseHeroDialog",h.EmployInfoDialog="EmployInfoDialog",h.WalletChoosePropsDialog="WalletChoosePropsDialog",h.FirstRechargeDialog="FirstRechargeDialog",h.FirstWeekRechargeView="FirstWeekRechargeView",h.ClientErrView="ClientErrView",h.RoleUpgradeView="RoleUpgradeView",h.ActiveRechargeView="ActiveRechargeView",h.SmallSaleView="SmallSaleView",h.RechargeSelectDialog="RechargeSelectDialog",h.FBLikeView="FBLikeView",h.TurnSuitPreView="TurnSuitPreView",h.SlotMachineView="SlotMachineView",h.SlotMachineRewardPreDialog="SlotMachineRewardPreDialog",h.SlotMachineResultDialog="SlotMachineResultDialog",h.GashaponView="GashaponView",h.GashaponRewardView="GashaponRewardView",h.ActivityRankRewardView="ActivityRankRewardView",h.AddRechargeView="AddRechargeView",h.CupMatchStartDialog="CupMatchStartDialog",h.CupMatchEndDialog="CupMatchEndDialog",h.CreateLoginView="CreateLoginView",h.SelectHeadDialog="SelectHeadDialog",h.RoleInfoDialog="RoleInfoDialog",h.SelectHeroDialog="SelectHeroDialog",h.CreateSubWalletDialog="CreateSubWalletDialog",h.FriendMemberDialog="FriendMemberDialog",h.FriendMemberMoreDialog="FriendMemberMoreDialog",h.FriendAddDialog="FriendAddDialog",h.FriendApplyBackDialog="FriendApplyBackDialog",h.FriendApplyDialog="FriendApplyDialog",h.WalletDialog="WalletDialog",h.WalletTransferDialog="WalletTransferDialog",h.UnionApplyDialog="UnionApplyDialog",h.GuildEntranceView="GuildEntranceView",h.UnionApplyDialogView="UnionApplyDialogView",h.UnionApplyMemberDialog="UnionApplyMemberDialog",h.CreateNoticeDialog="CreateNoticeDialog",h.UnionNoticeView="UnionNoticeView",h.GuildInfoDialog="GuildInfoDialog",h.CreateUnionDialog="CreateUnionDialog",h.UnionInfoView="UnionInfoView",h.UnionEarningView="UnionEarningView",h.UnionRevenueDetailDialog="UnionRevenueDetailDialog",h.UnionSetRevenueDialog="UnionSetRevenueDialog",h.UnionBattleRecordDialog="UnionBattleRecordDialog",h.UnionRevenueRecordDialog="UnionRevenueRecordDialog",h.RankUnionView="RankUnionView",h.UnionWarView="UnionWarView",h.UnionWarTipDialog="UnionWarTipDialog",h.UnionWarSuccessDialog="UnionWarSuccessDialog",h.UnionWarFailDialog="UnionWarFailDialog",h.GamesettingView="GamesettingView",h.GameSettingGameAccountView="GameSettingGameAccountView",h.GuildMessageView="GuildMessageView",h.GuildMessageEditorView="GuildMessageEditorView",h.UnionMemberView="UnionMemberView",h.SelectUnionHeadDialog="SelectUnionHeadDialog",h.GuildBuildInfoView="GuildBuildInfoView",h.GuildChiefPrivilegeView="GuildChiefPrivilegeView",h.GuildDonationView="GuildDonationView",h.NoticeDialog="NoticeDialog",h.ChampDetailDialog="ChampDetailDialog",h.ChampRecordDialog="ChampRecordDialog",h.LoadDialog="LoadDialog",h.ChangeHeadDialog="ChangeHeadDialog",h.CreateRoomDialog="CreateRoomDialog",h.EnterRoomView="EnterRoomView",h.MatchEndRankView="MatchEndRankView",h.MatchReadyView="MatchReadyView",h.MatchEndView="MatchEndView",h.HeroGetDialog="HeroGetDialog",h.InputPwdDialog="InputPwdDialog",h.MailDialog="MailDialog",h.UnionAttrView="UnionAttrView",h.UnionAttrLvUpDialog="UnionAttrLvUpDialog",h.UnionAttributeDetailsDialog="UnionAttributeDetailsDialog",h.NoServerView="NoServerView",h.UnionMemberMoreDialog="UnionMemberMoreDialog",h.HeroUpgradeDialog="HeroUpgradeDialog",h.HeroDetailDialog="HeroDetailDialog",h.SkillTipDialog="SkillTipDialog",h.AFKView="AFKView",h.AFKBagDialog="AFKBagDialog",h.AFKDropDetailDialog="AFKDropDetailDialog",h.AFKMapView="AFKMapView",h.AFKSelectLevelDialog="AFKSelectLevelDialog",h.Knapsack="Knapsack",h.KnapsackTipDialog="KnapsackTipDialog",h.HeroFormationDialog="HeroFormationDialog",h.SignInDialog="SignInDialog",h.InviteRewardDialog="InviteRewardDialog",h.ChallengLoseDialog="ChallengLoseDialog",h.ChallengWinDialog="ChallengWinDialog",h.ChallengBossDialog="ChallengBossDialog",h.ThirbleDropDialog="ThirbleDropDialog",h.LevelDropDialog="LevelDropDialog",h.UseCardDialog="UseCardDialog",h.ArenaView="ArenaView",h.ArenaLoseDialog="ArenaLoseDialog",h.ArenaBattleDialog="ArenaBattleDialog",h.ArenaWinDialog="ArenaWinDialog",h.ArenaWarNotesView="ArenaWarNotesView",h.ArenaRuleDialog="ArenaRuleDialog",h.EquipSelectDialog="EquipSelectDialog",h.EquipDetailDialog="EquipDetailDialog",h.HireDetailDialog="HireDetailDialog",h.ProxyDetailDialog="ProxyDetailDialog",h.WithDrawRecordDialog="WithDrawRecordDialog";var v=class{};v.MOUSE_HOLDON="MOUSE_HOLDON",v.EVENT_OPEN_MODULE="EVENT_OPEN_MODULE",v.EVENT_MODULE_ADDED="EVENT_MODULE_ADDED",v.EVENT_CLOSE_MODULE="EVENT_CLOSE_MODULE",v.EVENT_CHECK_REMAIN="EVENT_CHECK_REMAIN",v.EVENT_LOADED_COMPLETE="EVENT_LOAD_COMPLETE",v.EVENT_LOADED_SCENE_BG_COM="EVENT_LOADED_SCENE_BG_COM",v.EVENT_LOAD_SKIN_COMPLETE="EVENT_LOAD_SKIN_COMPLETE",v.EVENT_LOAD_HEAD_SKIN_COMPLETE="EVENT_LOAD_HEAD_SKIN_COMPLETE",v.EVENT_LOADING_SUC="EVENT_LOADING_SUC",v.EVENT_BACK_TO_LOGIN="EVENT_BACK_TO_LOGIN",v.EVENT_LOGIN_GAME_END="EVENT_LOGIN_GAME_END",v.EVENT_ENTER_MAIN="EVENT_ENTER_MAIN",v.EVENT_CHANGE_HEAD="EVENT_CHANGE_HEAD",v.EVENT_MODIFY_HEAD="EVENT_MODIFY_HEAD",v.EVENT_ITEM_UPDATE="EVENT_ITEM_UPDATE",v.EVENT_ROLE_UPDATE="EVENT_ROLE_UPDATE",v.STAGE_ON_BLUR="STAGE_ON_BLUR",v.STAGE_ON_FOCUS="STAGE_ON_FOCUS",v.ACCOUNTVO_UPDATE="ACCOUNTVO_UPDATE",v.EVENT_WAIT_PLAYERINFO="EVENT_WAIT_PLAYERINFO",v.EVENT_END_HEROBUY="EVENT_END_HEROBUY",v.EVENT_CHECK_ICON_SELECT="EVENT_CHECK_ICON_SELECT",v.PACKAGE_UPDATE_ITEM="PACKAGE_UPDATE_ITEM",v.IMPROVE_SUCESS_EVENT="IMPROVE_SUCESS_EVENT",v.CHANG_POTRAIT="CHANG_POTRAIT",v.ROLE_INFO_CHANGE="ROLE_INFO_CHANGE",v.UPDATE_ASSETS="UPDATE_ASSETS",v.REFRESH_MAIN_TASK="REFRESH_MAIN_TASK",v.RECIVE_SUCESS_SERVICE="RECIVE_SUCESS_SERVICE",v.SCENE_ROLE_COMPELTE="SCENE_ROLE_COMPELTE",v.FITTING_CLOTH_BTN="FITTING_CLOTH_BTN",v.STORE_CLICKBG_EVENT="STORE_CLICKBG_EVENT",v.CLOSE_BG_VIEW="CLOSE_BG_VIEW",v.EVENT_UPDATE_ONLINE="EVENT_UPDATE_ONLINE",v.VIP_INFO_CHANGE="VIP_INFO_CHANGE",v.EVENT_FUNCTION_OPEN_UPDATE="EVENT_FUNCTION_OPEN_UPDATE",v.EVENT_ADD_ACTIVITY="EVENT_ADD_ACTIVITY",v.EVENT_REMOVE_ACTIVITY="EVENT_REMOVE_ACTIVITY",v.UPDATE_CHAO_PIAO="UPDATE_CHAO_PIAO",v.UPDATE_EXCHANGE_INFO="UPDATE_EXCHANGE_INFO",v.UPDATE_RED_STATE_EVENT="UPDATE_RED_STATE_EVENT",v.SYSTEM_OPEN_TIME_INITED="SYSTEM_OPEN_TIME_INITED",v.EVENT_OPEN_SHARE="EVENT_OPEN_SHARE",v.CHANGE_SCENE_BASE_ROLE_LAYER="CHANGE_SCENE_BASE_ROLE_LAYER",v.EVENT_CLICK_NUM="EVENT_CLICK_NUM",v.EVENT_HERO_DRAW_BACK="EVENT_HERO_DRAW_BACK",v.EVENT_ENTER_MATCH_ROOM="EVENT_ENTER_MATCH_ROOM",v.EVENT_UPDATE_MATCH_ROOM="EVENT_UPDATE_MATCH_ROOM",v.UPDATE_KILL_NUM="UPDATE_KILL_NUM",v.EVENT_RESTORE_DATA="EVENT_RESTORE_DATA",v.EVENT_FirstBlood="EVENT_FirstBlood",v.EVENT_MutiKill="EVENT_MutiKill",v.EVENT_GameScene_Gray="EVENT_GameScene_Gray",v.EVENT_Game_Delay="EVENT_Game_Delay",v.EVENT_UPDATE_GLOBAL_COOL="EVENT_UPDATE_GLOBAL_COOL",v.EVENT_WELFARE_CLAIM="EVENT_WELFARE_CLAIM",v.EVENT_RECHARGE_GET="EVENT_RECHARGE_GET",v.CHANGE_WALLET_HERO="CHANGE_WALLET_HERO",v.CHANGE_ASSET_CHAIN="CHANGE_ASSET_CHAIN",v.CHANGE_WALLET_PROP="CHANGE_WALLET_PROP",v.CREATE_SUB_WALLET_SUCCESS="CREATE_SUB_WALLET_SUCCESS";var L=class a extends Laya.EventDispatcher{static get intance(){return a._instance||(a._instance=new a),a._instance}};var Wt=class extends Laya.Script{constructor(){super();this.m_ioffsetX=0;this.m_ioffsetY=0}onAdded(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.CENTER,this.m_canTouch_all=!1,this.selfMaskAlpha=.8,this.m_arrMapEvent=[],this.canClickMask=!0,this.maskLayer=new Laya.Sprite,this.useShowAnimation=!0,this.useHideAnimation=!0,this.isAutoRealseRes=!0,this.m_strSound=Ae.soundName3}onClickMask(e){this.canClickMask&&this.maskClose()}maskClose(){this.close()}onStageResize(){}onEnable(){this._view=this.owner,this._view.addChild(this.maskLayer),this.createUI(),this.createUIEnd(),this.initializeLater()}createUI(){}createUIEnd(){}initializeLater(){this._addEvent(),this.initData(),this.useShowAnimation?(this._view.visible=!1,this.showAnimationEnd=!1,Laya.timer.frameOnce(5,this,this.popTimeOut,[this._view])):this.showAnimationEnd=!0}popTimeOut(e){Laya.timer.clear(this,this.popTimeOut),e.scale(.5,.5),e.visible=!0,Laya.Tween.to(e,{scaleX:1,scaleY:1,ease:Laya.Ease.backOut},300,null,Laya.Handler.create(this,this.onShowAnimationEnd),2),Ae.instance.playSoundByName(this.m_strSound),this._view.event(Laya.Event.OPEN)}onShowAnimationEnd(){this.showAnimationEnd=!0}_addEvent(){this.maskLayer.on(Laya.Event.CLICK,this,this.onClickMask),Laya.stage.on(Laya.Event.RESIZE,this,this.onStageResize),this.btn_com_back&&this.btn_com_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_com_help&&this.btn_com_help.on(Laya.Event.CLICK,this,this.onHelp),this.addEvent()}addEvent(){}initData(){}_removeEvent(){this.maskLayer.offAll(),Laya.stage.off(Laya.Event.RESIZE,this,this.onStageResize),this.removeEvent()}removeEvent(){}addMapEvent(e,i,r,n,o=null){e.on(i,r,n,o),this.m_arrMapEvent.push(e)}removeAllMapEvent(){if(this.m_arrMapEvent){for(let e=0;e<this.m_arrMapEvent.length;e++)this.m_arrMapEvent[e].offAll();this.m_arrMapEvent.splice(0,this.m_arrMapEvent.length)}}dispose(){if(this.newRoleSpr){for(;this.newRoleSpr.numChildren>0;)this.newRoleSpr.removeChildAt(0);this.newRoleSpr=null}this.isDispose=!0,O.intance.removeViewFromModuleManger(this),this.m_strName=null,this.m_strSound=null,this._removeEvent(),this.removeAllMapEvent(),Laya.Tween.clearAll(this._view),this.m_arrMapEvent=null,this.btn_com_back&&this.btn_com_back.offAll(),this.btn_com_help&&this.btn_com_help.offAll(),this.maskLayer&&(Laya.timer.clearAll(this.maskLayer),Laya.Tween.clearAll(this.maskLayer),this.maskLayer.offAll(),this.maskLayer.graphics.destroy(),this.maskLayer.removeSelf(),this.maskLayer.destroy(!0)),this.isAutoRealseRes&&M.instance.clearModuleUrl(this.m_strName),this._view&&(Laya.timer.clearAll(this._view),Laya.Tween.clearAll(this._view),this._view.offAll(),this._view.graphics.destroy(),this._view.removeSelf(),this._view.destroy(!0),this._view=null),Laya.timer.clearAll(this),Laya.Tween.clearAll(this),L.intance.event(v.EVENT_CLOSE_MODULE)}sendData(e,i=null){i==null&&(i=[])}close(e=null){this.useHideAnimation&&this._view?Laya.Tween.to(this._view,{scaleX:.5,scaleY:.5,ease:Laya.Ease.backIn},200,null,Laya.Handler.create(this,this.dispose,null),2):this.dispose()}static closeAll(){O.intance.closeAll()}backToPreScene(){let e=be.intance.getPreSceneData();be.intance.setCurrentScene(e[0],e[1],e[2],e[3],!1)}get btn_com_back(){return this._view?this._view.getChildByName("btn_com_back"):null}get btn_com_help(){return this._view?this._view.getChildByName("btn_com_help"):null}onHelp(){this.m_helpId&&O.intance.openModule(h.HelpDialog,this.m_helpId)}onBack(){this.close()}};var O=class a extends Laya.DialogManager{constructor(){super();this.views=new le;this.m_arrLoadingArr=[];if(a._instance)throw new Error("LayerManager是单例,不可new.");a._instance=this,Laya.Dialog.manager=this}static get intance(){return a._instance||(a._instance=new a),a._instance}openModule(e,i=null){L.intance.event(v.EVENT_OPEN_MODULE,[e,i])}hasOpenView(e){return this.views.get(e)!=null}getOpenView(e){return this.views.get(e)}disposeView(e){if(this.getOpenView(e)){let i=this.getOpenView(e);if(i instanceof Array)for(let r=0;r<i.length;r++)i[r].close();else i.close()}}init(){L.intance.on(v.EVENT_OPEN_MODULE,this,this.onModulePanel),L.intance.on(v.EVENT_CLOSE_MODULE,this,this.disposeView)}initMainView(){}onModulePanel(e,i=null){console.log("ModuleManager.onModulePanel moudleName:"+e),this.m_arrLoadingArr.indexOf(e)==-1&&(this.getOpenView(e)||(K.instance.showLoading(!1),this.m_arrLoadingArr.push(e),M.instance.loadModuleUrl(e,Laya.Handler.create(this,this.onLoaded,[e,i]))))}onLoaded(e,i=null){let r=this.m_arrLoadingArr.indexOf(e);r!=-1&&this.m_arrLoadingArr.splice(r,1);let n;var o=M.instance.m_objModuleViews[e];Laya.loader.load(o).then(s=>{if(n=s.create(),i&&n.setOpenData(i),n.m_strName=e,n instanceof Laya.Box)R.instence.addToLayer(n,n.m_iLayerType),R.instence.setPosition(n,n.m_iPositionType,n.m_ioffsetX,n.m_ioffsetY),this.addViewToModuleManger(n);else if(n instanceof Laya.Dialog){let l=n;l.m_iLayerType==R.M_POP?(l.isModal=!0,l.isShowEffect=!0,this.open(l,!1,!0)):(l.isShowEffect=!1,this.open(l)),this.addViewToModuleManger(l)}n&&L.intance.event(v.EVENT_MODULE_ADDED,n),n.hideLoadingBySelf||K.instance.hideLoading()})}addViewToModuleManger(e){let i=e.m_strName;this.views.get(i)?this.views.get(i)instanceof Array?this.views.get(i).push(e):this.views.set(i,[this.views.get(i),e]):this.views.set(i,e),this.on(Laya.Event.CLOSE,this,this.removeViewFromModuleManger)}removeViewFromModuleManger(e){if(!e||!this.views)return;let i=e.m_strName;console.log("removeViewFromModuleManger viewName: "+i),e.off(Laya.Event.CLOSE,this,this.removeViewFromModuleManger);let r=this.views.get(i);if(r instanceof Array){let n=r.indexOf(e);n!=-1&&(r.splice(n,1),r.length==0&&this.views.remove(i))}else this.views.remove(i)}closeAll(){let e=[];for(let i of this.views.values)if(i instanceof Array)for(let r=0;r<i.length;r++){let n=i[r];n instanceof Wt&&e.push(n)}else i instanceof Wt&&e.push(i);for(let i=0;i<e.length;i++)e[i].dispose();e=[],super.closeAll()}doClose(e){super.doClose(e),this.event(Laya.Event.CLOSE,e)}};var wo=class a{constructor(){this._mapUrl="";this._mapWidth=0;this._mapHeight=0;this._gridWidth=0;this._gridHeight=0;this._xPics=0;this._yPics=0;this._fuzzyName=""}static get instance(){return a._instance||(a._instance=new a),a._instance}loadScene(t,e,i,r,n,o,s){this._fuzzyName!=""&&this._fuzzyName!=o&&this.dispose(),this._mapWidth=t,this._mapHeight=e,this._gridWidth=i,this._gridHeight=r,this._fuzzySprite=n,this._xPics=Math.floor(this._mapWidth/i),this._yPics=Math.floor(this._mapHeight/r),this._fuzzyName=o,this._fuzzyCallBack=s;let l=M.instance.setResURL("scene/subScene/test1/"+o+".json");Laya.loader.load([{url:l,type:Laya.Loader.ATLAS}],Laya.Handler.create(this,this.loadSceneComplete),Laya.Handler.create(this,this.loadProcess,null,!1),null,0,!0,null,!0)}loadProcess(){}loadSceneComplete(){let t=Laya.Loader.getAtlas(M.instance.setResURL("scene/subScene/test1/"+this._fuzzyName+".json"));if(this._fuzzySprite){this._fuzzySprite.graphics.clear();let e=0,i=new Laya.Sprite;i.name="mapSprite",this._fuzzySprite.addChildAt(i,0);for(let r=0;r<this._yPics;r++)for(let n=0;n<this._xPics;n++){let o=Laya.loader.getRes(t[e]),s=new Laya.Image;i.addChild(s),s.texture=o,s.size(o.width,o.height),s.pos(n*this._gridWidth,r*this._gridHeight),e++}}this._fuzzyCallBack!=null&&this._fuzzyCallBack.run()}dispose(){this._fuzzyCallBack=null,this._fuzzyName&&this._fuzzyName!=""&&Laya.loader.clearRes(M.instance.setResURL("atlas/"+this._fuzzyName+".json"))}};var re=class{};re.M_SCENE_MAIN="M_SCENE_MAIN",re.M_SCENE_SHOP="M_SCENE_SHOP",re.M_SCENE_HERO="M_SCENE_HERO",re.M_SCENE_PRE_LOAD="M_SCENE_PRE_LOAD",re.M_SCENE_MATCH_READY="M_SCENE_MATCH_READY",re.M_SCENE_MATCH="M_SCENE_MATCH",re.M_SCENE_AFKBATTLE="M_SCENE_AFKBATTLE",re.M_SCENE_GUILD="M_SCENE_GUILD",re.M_SCENE_RANK="M_SCENE_RANK",re.M_SCENE_SHOLARSHIP="M_SCENE_SHOLARSHIP",re.M_SCENE_ASSET="M_SCENE_ASSET",re.M_SCENE_DIG="M_SCENE_DIG",re.M_SCENE_MAIL="M_SCENE_MAIL",re.M_SCENE_KNAPSACK="M_SCENE_KNAPSACK",re.M_SCENE_UNION="M_SCENE_UNION",re.M_SCENE_MYUNION="M_SCENE_MYUNION",re.M_SCENE_ARENA="M_SCENE_ARENA";var Ma=class Ma{constructor(){this._list=[];this._isNoticing=!1;this._isListener=!1}static get instance(){return Ma._instance||(Ma._instance=new Ma),Ma._instance}notice(t){this._isNoticing?this._isListener||(this._isListener=!0,this._list.push(t),Laya.timer.loop(Ma.Tip_Interval,this,this.onInterVal)):(this._list.push(t),this.noticeOne())}noticeOne(){var t=M.instance.m_objModuleViews.TxtNoticeView;let e;Laya.loader.load(t).then(i=>{if(!i){console.log("noticeOne : "+t+"  res is null");return}e=Laya.Pool.getItemByCreateFun("txtNotice",i.create,i);let r=this._list.shift();e.notice(r),Laya.stage.addChild(e),e.x=R.instence.stageWidth*.5-e.width*.5,e.y=R.instence.stageHeight*.5-e.height*.5,Laya.Tween.to(e,{y:e.y-250,alpha:.5},1e3,null,Laya.Handler.create(this,this.onFinish,[e]),1e3)})}onFinish(t){t&&(t.visible=!1,t.removeSelf())}onInterVal(){this._list.length>=1?this.noticeOne():(this._isNoticing=!1,this._isListener=!1,Laya.timer.clear(this,this.onInterVal))}};Ma.Tip_Interval=1e3;var te=Ma;var De=class a{constructor(){this._curErrTxt=""}static get instance(){return a._instance||(a._instance=new a),a._instance}initErrData(t){this.errData=t}get(t){return this.errData[t]?this.errData[t].words:(console.warn("服务端错误码语言包未配表 错误码："+t),t)}showErrorWord(t,e=999999){this.errData[t]&&this.errData[t].hasOwnProperty("words")?(this._curErrTxt=this.errData[t].words,e!=999999&&(this._curErrTxt=f.instance.replacePlaceholder(this._curErrTxt,[e]))):this._curErrTxt=""+t,te.instance.notice(this._curErrTxt)}showErrByString(t,e="#ff0000"){this._curErrTxt=t;let i=new Laya.Label(this._curErrTxt);i.width=500,i.align="center",i.height=40,i.fontSize=26,i.color=e,i.mouseEnabled=!1,i.strokeColor="#000000",i.stroke=.5,Laya.stage.addChild(i),i.x=(Laya.stage.width-i.width)/2,i.y=(Laya.stage.height-i.height)/2,Laya.Tween.to(i,{y:i.y-100,alpha:0},500,null,Laya.Handler.create(this,this.completeHandler,[i]),1e3)}completeHandler(t){t&&t.parent&&t.parent.removeChild(t)}dispose(){this.errData=null}};var Fe=class{};Fe.FUNID_MALL="1004",Fe.FUN_ID_TAGGARDEN="2005",Fe.FunID_WORK="1006",Fe.FUN_ID_BARGAIN_SHOP="1007",Fe.TRAVEL_HARD="1012",Fe.TRAVEL_REWARD="3006",Fe.FUNID_TUJIAN="2105",Fe.FUN_ID_PARTY="7003",Fe.FUN_ID_FB="9010",Fe.FUN_ID_PET="9004",Fe.FUN_ID_TURNTABLE="9001",Fe.FUN_ID_GASHPOEN="9012",Fe.FUN_ID_SHOPEXCHANGE="2104",Fe.FUN_ID_TIME_STAGE="9014",Fe.FUN_ID_DRAWCARD_PVP="1008613",Fe.FUN_ID_PHONE="2004",Fe.FUN_ID_DS="9017",Fe.FUN_ID_BUY_PS="9030",Fe.FUN_ID_DESTINY="3020",Fe.FUN_ID_ACTIVITY_SHOP="9026",Fe.FUN_ID_WORKSHOP_RECYCLE="3002",Fe.FUN_ID_WORKSHOP_COLOR="3004",Fe.FUN_ID_WORKSHOP_UPGRADE="3003",Fe.FUN_ID_GUILD="1010",Fe.FUN_ID_VIP="9022",Fe.FUN_ID_MONTHCARD="9100";var kl=class{constructor(){this.bafflesInfo=[[330,740,9],[294,113.95,1],[712.95-80,343.45,3],[1251.35,125.95,7]];this.redHotStateMap=new le;this.openSystem=new le;this.m_dicSystemInfoCfg=new le,this._openTypeList=new le,this.parseJson()}hasRedState(t){let e=this.redHotStateMap.get(t+"");return e&&e.redState>0?e.redState:0}initSystemOpen(t){this.openSystem=new le;for(let e=0;e<t.length;e++)this.openSystem.set(t[e],!0),t[e]+""==Fe.FUN_ID_PHONE.toString()}parseJson(){let t=M.instance.getResByURL("config/system_open.json"),e;for(let i in t)if(e=t[i],e){this.m_dicSystemInfoCfg.set(e.functionID,e);let r=this._openTypeList.get(e.open_type);r||(r=[],this._openTypeList.set(e.open_type,r)),r.push(e)}}getSystemsByType(t){let e=[];for(let i=0;i<this.m_dicSystemInfoCfg.values.length;i++){let r=this.m_dicSystemInfoCfg.values[i];r.positionID==t&&e.push(r)}return e}getLockFun(t,e){let i=this._openTypeList.get(t);for(let r of i)if(r.parameter1+""==e+"")return r;return null}getBuildSystem(){}isOpen(t){return Q.buildClickState?!0:(t instanceof String&&(t=parseInt(t+"")),this.openSystem.get(t)!=null)}};var Al=class{constructor(){this._vipLv=0}isReceive(t){for(let e of this.isRewards)if(e+""==t.toString())return!0;return!1}addIsReceive(t){this.isReceive(t)||this.isRewards.push(t)}get vipLv(){return this._vipLv}set vipLv(t){this._vipLv!=t&&(this._vipLv=t)}};var Kt=class{constructor(){this._color=1;this.isLvUp=!1;this.newAddCnt=0}get simgurl(){return M.instance.getHeroHeadRes(this.heroItem.serialId,this.color)}get sk(){return M.instance.getHeroSkRes(this.heroItem.serialId,this.color)}get id(){return this._id}set id(t){this._id=t,this.heroItem=j.intance.m_dicHeros.get(t+"")}get name(){return f.instance.getLanguage(this.heroItem.name)}set name(t){this._name=t}get color(){return this._color}set color(t){t&&(this._color=t)}get m_iNum(){return this._m_iNum}set m_iNum(t){this._m_iNum=t}};var $e=class a{constructor(t=0){this._m_iLevel=0;this._m_arrDisc=[];this.newAddCnt=0;this.isScholarship=!1;this.isLvUp=!1;this.needTip=!0;this.m_bSalon=!1;this.m_bIsSetId=!1;t!=0&&(this.m_iId=t)}get m_sIcon(){return this._m_sIcon}set m_sIcon(t){this._m_sIcon=t}get m_iLevel(){return this._m_iLevel>0?this._m_iLevel:1}set m_iLevel(t){this._m_iLevel=t||0}get m_iNum(){return this._m_iNum}set m_iNum(t){this._m_iNum=t}copyItem(){let t=new a;return t.m_iId=this.m_iId,t.m_iOriginalId=this.m_iOriginalId,t}get m_bTry(){return this.m_iId==this.m_iOriginalId?this._m_bSet=!1:this._m_bSet=!0,this._m_bSet}get m_strName(){return f.instance.getLanguage(this.itemItem.name)}set m_bTry(t){this._m_bSet=t}get m_iId(){return this._m_iId}set m_iId(t){this._m_iId=t,this.m_bIsSetId||(this.m_bIsSetId=!0,this.m_iOriginalId=t),this.setConfigData()}initDataByArr(t){this.m_iId=t.id,this.m_iNum=t.count}setConfigData(){if(this.m_iId!=0){if(this.itemItem=j.intance.m_dicItems.get(this.m_iId.toString()),!this.itemItem){console.log("[          <items> find out id:"+this.m_iId+"             ]");return}if(this.subType=parseInt(this.itemItem.subType+""),this.backType=parseInt(this.itemItem.backPack+""),this.type=parseInt(this.itemItem.type+""),this.m_sIcon=this.itemItem.icon,this.itemItem.buy_price){this.m_iPrice=this.itemItem.buy_price[0][1];let t=this.itemItem.buy_price[0][0],e=j.intance.m_dicItems.get(t);e&&(this.m_strBuyIcon=M.instance.getItemIcon(e.icon))}this.itemItem.sell_price&&(this.m_iSellPrice=parseFloat(this.itemItem.sell_price[0][1])),this.m_iQuality=this.itemItem.quality,this.setQualityData()}}setQualityData(){this.m_arrQualityData=this.itemItem.starArr}get getIconURL(){return M.instance.getItemIcon(this.itemItem.icon)}copy(){let t=new a(this.m_iId);return t.m_iLevel=this.m_iLevel,t}compareName(){return f.instance.getLanguage(this.itemItem.name)}compareQuality(){return parseFloat(this.m_iQuality+"")}compareSellPrice(){return parseFloat(this.itemItem.sell_price[1]+"")}compareNum(){return parseFloat(this.m_iNum+"")}compareLevel(){return parseFloat(this.m_iLevel+"")}compareFragment(){let t=this.itemItem.id;return 0}compareTypeId(){return parseInt(this.m_iId+"")}};var Yt=class a{constructor(){this._isPop=!1;L.intance.on(v.EVENT_CHECK_REMAIN,this,this.onCheckRemain)}static get instance(){return a._instance||(a._instance=new a),a._instance}get model(){return Ve.instance}get isPop(){return this._isPop}startShow(){console.log("startShow");var t=this.model.hasRemain();!this._isPop&&t&&(this._isPop=!0,t instanceof Kt?L.intance.event(v.EVENT_OPEN_MODULE,h.HeroGetDialog):L.intance.event(v.EVENT_OPEN_MODULE,h.ItemGetDialog))}onCheckRemain(t){if(t==h.ItemGetDialog||t==h.HeroGetDialog){var e=this.model.hasRemain();e?e instanceof Kt?L.intance.event(v.EVENT_OPEN_MODULE,h.HeroGetDialog):L.intance.event(v.EVENT_OPEN_MODULE,h.ItemGetDialog):this._isPop=!1}}};var Ve=class a{constructor(t){this._list=[];this.needPop=!0;this.autoPop=!0}static get instance(){return a._instance||(a._instance=new a(new df)),a._instance}get service(){return Yt.instance}addItem(t,e=!1){let i=new $e;i.m_iId=t.m_iId,i.newAddCnt=t.newAddCnt,i.m_iLevel=t.m_iLevel,i.isLvUp=t.isLvUp,i.m_bNew=t.m_bNew,this._list.push(i),e&&this.service.startShow()}addHeroItem(t,e=!1){let i=new Kt;i.id=t.id,i.newAddCnt=t.newAddCnt,i.lv=t.lv,i.isLvUp=t.isLvUp,i.m_bNew=t.m_bNew,this._list.push(i),e&&this.service.startShow()}addItems(t,e=!1){this._list=this._list.concat(t),e&&this.service.startShow()}hasRemain(){return this._list.length>0?this._list[0]:null}get needListener(){return this._list.length>=2}addConsumeByServer(t){this._list.push(t)}addConsume(t,e){this._list.push([t,e])}getNextItem(){return this._list.length>0?this._list[0]:null}getOneItem(){return this._list.length>0?this._list.shift():null}},df=class{};var Oi=class{};var Dl=class{constructor(){this.m_dicItemList=new le,this.m_dicTypeList=new le,this.m_dicSubTypeList=new le,this.m_dicBackList=new le}initData(t){this.m_dicItemList=new le,this.m_dicTypeList=new le,this.m_dicSubTypeList=new le,this.m_dicBackList=new le;let e;for(let i=0;i<t.length;i++)e=new $e,e.initDataByArr(t[i]),e.m_iNum>0&&this.pushItem(e);console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}getCountById(t,e=!0){return j.intance.m_dicItems.get(t)==null?0:this.getItemCountById(t,e)}pushItem(t){this.m_dicItemList.set(t.m_iId,t),this.m_dicTypeList.get(t.type)==null&&this.m_dicTypeList.set(t.type,new le),this.m_dicSubTypeList.get(t.subType)==null&&this.m_dicSubTypeList.set(t.subType,new le),this.m_dicBackList.get(t.backType)==null&&this.m_dicBackList.set(t.backType,new le),this.m_dicTypeList.get(t.type).set(t.m_iId,t),this.m_dicSubTypeList.get(t.subType).set(t.m_iId,t),this.m_dicBackList.get(t.backType).set(t.m_iId,t)}removeItem(t){this.m_dicItemList.remove(t.m_iId),this.m_dicTypeList.get(t.type).remove(t.m_iId),this.m_dicSubTypeList.get(t.subType).remove(t.m_iId),this.m_dicBackList.get(t.backType).remove(t.m_iId)}updateData(t,e=!1,i=!0){let r=[],n=!1,o;for(let s=0;s<t.length;s++){t[s]instanceof Array?(o=new Oi,o.id=t[s][0],o.count=t[s][1]):o=t[s];let l=this.m_dicItemList.get(o.id);l==null&&(l=new $e(o.id),this.pushItem(l),l.m_bNew=!0),e?(l.newAddCnt=o.count-l.m_iNum,l.m_iNum=o.count):(l.newAddCnt=o.count,l.m_iNum=o.count+o.count),l.initDataByArr(o),r.push(l.m_iId),l.m_iNum<=0&&this.removeItem(l),l.newAddCnt>0&&Ve.instance.needPop&&i&&(Ve.instance.addItem(l),n=!0)}n&&Ve.instance.needPop&&Ve.instance.autoPop&&Yt.instance.startShow(),r.length>0&&L.intance.event(v.PACKAGE_UPDATE_ITEM,[r])}getItemById(t){return this.m_dicItemList.get(t)}getItemsBySubType(t){let e=this.m_dicSubTypeList.get(t);return e==null&&(e=[]),e}getListByType(t){let e=[];return this.m_dicTypeList.get(t)&&(e=this.m_dicTypeList.get(t).values.slice()),e.sort(this.sortOnQa),e}getBackByType(t){let e=[];return this.m_dicBackList.get(t)&&(e=this.m_dicBackList.get(t).values.slice()),e.sort(this.sortOnQa),e}getListBySubType(t){let e=[];return this.m_dicSubTypeList.get(t)&&(e=this.m_dicSubTypeList.get(t).values.slice()),e.sort(this.sortOnQa),e}sortOnQa(t,e){let i=t.itemItem.quality,r=e.itemItem.quality;return i<r?1:i>r?-1:0}getItemCountById(t,e=!0){let i=this.getItemById(t);return i?i.m_iNum:0}};var Ml=class a{constructor(t){this._addNewFList=[];this.delayShowNewFun=!1}static get instance(){return a._instace==null&&(a._instace=new a(new hf)),a._instace}addNewOpenFun(t){this._addNewFList=this._addNewFList.concat(t),this.delayShowNewFun||this.showNewFun()}setDelayShowFun(t){this.delayShowNewFun!=t&&(this.delayShowNewFun=t,t||this.showNewFun())}showNewFun(){if(this._addNewFList.length>0){let t=this._addNewFList.pop(),e=I.instance.systemOpenModel.m_dicSystemInfoCfg.get(t.toString());e?e.if_open.toString()=="1"||e.if_pop.toString()!="1"?this.showNewFun():this.swithToNewFun(t):this.showNewFun()}}swithToNewFun(t,e=!1){let i=I.instance.systemOpenModel.m_dicSystemInfoCfg.get(t);if(i){if(i.if_open.toString()=="1"){te.instance.notice("system_open.json-->funId:"+i.functionID+"is close");return}(i.if_pop.toString()=="1"||e)&&L.intance.event(v.EVENT_OPEN_MODULE,[h.NewFunUnLockDialog,t])}}hasUnlockFunction(t,e=!0){let i=I.instance.systemOpenModel.m_dicSystemInfoCfg.get(t+""),r=I.instance.systemOpenModel.isOpen(parseInt(t));return!r&&e&&te.instance.notice(f.instance.getLanguage(i.lock_word)),r}},hf=class{};var Oe=class{};Oe.TYPE_EXP=3003,Oe.TYPE_GOLD=3005,Oe.TYPE_TOX=3001,Oe.TYPE_USDT=3004,Oe.TYPE_BTC=3006,Oe.TYPE_ETH=3007;var z=class{constructor(){}};z.NO_ALL=-1,z.YES=1,z.NO=2,z.SURE=4,z.CANCEL=8,z.CLOSE=16,z.RETURN_YES=1,z.RETURN_NO=2,z.RETURN_NONE=3,z.BASEALERTVIEW="BaseAlertDialog",z.BUYCONFIRMVIEW="BuyConfirmView",z.EnduranceOutTipView="EnduranceOutTipView",z.GUILDQUITVIEW="GuildQuitView",z.BuyItemConfirmView="BuyItemConfirmView",z.DOWNLOADALERT="DownLoadAlert";var Ie=class a{constructor(){}static instance(){return a._instance||(a._instance=new a),a._instance}AlertByType(t,e=null,i=0,r=null,n=null,o=!1,s=null){i==0&&(i=z.YES|z.NO),this.onLoaded(i,t,e,r,n,o,s)}onLoaded(t,e,i,r=null,n=null,o=!1,s=null){O.intance.openModule(e,{flag:t,okHandler:r,cancelHandler:n,data:i,destroyDoCancel:o,initHandler:s})}};var Le=class Le{static getColorText(t,e="#FFFF00"){return'<font color="'+e+'">'+t+"</font>"}static getChildByName(t,e,i="name"){if(t&&t.hasOwnProperty(i)&&t[i]==e)return t;let r=t;if(r){let n=r.numChildren,o;for(let s=0;s<n;++s)if(o=r.getChildAt(s),o instanceof Laya.Sprite&&(o=Le.getChildByName(o,e,i)),o&&o.hasOwnProperty(i)&&o[i]==e)return o}return null}static getChildByAttri(t,e){if(t&&t.hasOwnProperty(e)&&t[e])return t[e];let i=t;if(i){let r=i.numChildren,n;for(let o=0;o<r;++o)if(n=i.getChildAt(o),n instanceof Laya.Sprite){if(n=Le.getChildByAttri(n,e),n)return n}else if(n&&n.hasOwnProperty(e)&&n[e])return n[e]}return null}static logs(t,e=0,i=!0,r=16777215){if(t=Le.GetLogTime+" "+t,i)switch(e){case 0:r=16777215;break;case 1:r=16777215;break;case 2:r=16711680;break;case 3:r=16777215;break;case 4:r=13434777;break;case 5:r=16742399;break}}static get GetLogTime(){let t=new Date;return t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+":"+t.getMilliseconds()}static get GRAY(){return Le._GRAY||(Le._GRAY=new Laya.ColorFilter([.3,.59,.11,0,0,.3,.59,.11,0,0,.3,.59,.11,0,0,0,0,0,1,0])),Le._GRAY}static get GRAY1(){if(!Le._GRAY1){let t=[.3086,.16094,.082,0,0,.2086,.26094,.082,0,0,.1086,.36094,.082,0,0,0,0,0,1,0];Le._GRAY1=new Laya.ColorFilter(t)}return Le._GRAY1}static get GLOW(){return Le._GLOW||(Le._GLOW=new Laya.GlowFilter("#ffffff",12,0,0)),Le._GLOW}static get BLUR(){if(!Le._BLUR){let t=new Laya.BlurFilter;t.strength=5,Le._BLUR=[t]}return Le._BLUR}static share(t=1001,e=2,i=null,r=null,n=0,o=0,s=null){}static get isParseWWhiteUser(){return Le._isParseWWhiteUser}static get isWhiteName(){return Q.isWhiteList}static itemListHandler(t,e){let i=t.dataSource,r=i[0],n=i[1],o=2,s=t.skin;s&&(s.indexOf("xinSmall")!=-1?o=1:s.indexOf("xinBig")!=-1&&(o=3));let l;o==1?l="common/common_clip/clip_xinSmall"+n+".png":o==3?l="common/common_clip/clip_xinBig"+n+".png":l="common/common_clip/clip_xinMiddle"+n+".png",t.skin=l,t.dataSource=r}static setStarList(t,e){t.renderHandler=new Laya.Handler(Le,Le.itemListHandler),t.dataSource=e}static get BLACK(){return Le._BLACK||(Le._BLACK=new Laya.ColorFilter,Le._BLACK.setColor("#000000")),Le._BLACK}static get YELLOW(){return Le._YELLOW||(Le._YELLOW=new Laya.ColorFilter,Le._YELLOW.setColor("#ffe64b")),Le._YELLOW}static get YELLOW1(){return Le._YELLOW1||(Le._YELLOW1=new Laya.ColorFilter,Le._YELLOW1.setColor("#fee14e")),Le._YELLOW1}static get RED1(){return Le._RED1||(Le._RED1=new Laya.ColorFilter,Le._RED1.setColor("#ff4537")),Le._RED1}static get BLUE(){return Le._BLUE||(Le._BLUE=new Laya.ColorFilter,Le._BLUE.setColor("#2f72a7")),Le._BLUE}static setColor(t="#13e2cf"){let e=new Laya.ColorFilter;return e.setColor(t),e}static heroNotEnought(){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1059),z.CANCEL,Laya.Handler.create(this,this.onGetHero))}static onGetHero(t=-1){be.intance.setCurrentScene(re.M_SCENE_SHOP,[1,t])}static titickNotEnought(t=-1){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1060),z.CANCEL,Laya.Handler.create(this,this.onGetTitck,[t]))}static RemError(){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1124),z.YES,null)}static NoHeroError(t){Ie.instance().AlertByType(z.BASEALERTVIEW,t,z.YES,null)}static alertNoAll(t){Ie.instance().AlertByType(z.BASEALERTVIEW,t,z.NO_ALL)}static onGetTitck(t=-1){be.intance.setCurrentScene(re.M_SCENE_SHOP,[2,t])}static moneyNotEnought(t=Oe.TYPE_TOX){var e=j.intance.m_dicItems.get(t),i=f.instance.getLanguage(e.name);te.instance.notice(f.instance.getLanguage(1170,i))}static onGetMoney(t){be.intance.setCurrentScene(re.M_SCENE_ASSET,[1,t])}static openSquidGame(){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(6056),z.CANCEL,Laya.Handler.create(this,this.onOpenSquidGame))}static onOpenSquidGame(){window.location.href="https://squidgamefi.io/?invitationCode=2oi"}static otherLogin(){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(6054),z.YES,Laya.Handler.create(this,_e.instance.reload))}static commTipWithYes(t){Ie.instance().AlertByType(z.BASEALERTVIEW,t,z.YES)}static shakeSprs(t,e=2,i=4,r=32){if(Le.isShake)return;Le.isShake=!0;let n=t.length,o=[];for(let u=0;u<n;u++){let p=t[u];o.push([p.x,p.y])}let s=[0,0],l=0,c=function(){s[l%2]=l++%4<2?0:i,l>e*4+1&&(Laya.timer.clear(Laya.stage,c),l=0,Le.isShake=!1);for(let u=0;u<n;u++){let p=t[u];p.x=s[0]+o[u][0],p.y=s[1]+o[u][1]}};Laya.timer.loop(r,Laya.stage,c)}static shake(t,e=2,i=4,r=32){if(Le.isShake)return;Le.isShake=!0;let n=new Laya.Point(t.x,t.y),o=[0,0],s=0,l=function(){o[s%2]=s++%4<2?0:i,s>e*4+1&&(Laya.timer.clear(Laya.stage,l),s=0,Le.isShake=!1),t.x=o[0]+n.x,t.y=o[1]+n.y};Laya.timer.loop(r,Laya.stage,l)}static checkIsFull(){}static fullScreen(t){var e,i=Laya.Browser.window.location.href;t?(i+="&isFull=1",e={type:"openChildPage",data:{url:i,fullScreen:"1",close:"0"}}):e={type:"closePage",data:""};var r=JSON.stringify(e);Laya.Browser.onIOS?(console.log("onIOS"),typeof webkit<"u"&&(console.log("onIOS1"),webkit.messageHandlers._tw_.postMessage(r),console.log("onIOS2"))):Laya.Browser.onAndroid&&(console.log("onAndriod0"),window&&typeof window._tw_<"u"&&(console.log("onAndriod1 str: "+r),window._tw_.callInto(r),console.log("onAndriod2")))}};Le._isParseWWhiteUser=!1,Le.isWWhiteUser=!1,Le.isShake=!1,Le.isFullScreen=!1;var ge=Le;var Pa=class{constructor(){}ReadShort(t){let e=new Uint8Array(t.buffer),i=e[t.pos]<<8,r=e[t.pos+1],n=i|r;return t.pos+=2,n}ReadInt(t){let e=new Uint8Array(t.buffer),i=e[t.pos]<<24|e[t.pos+1]<<16|e[t.pos+2]<<8|e[t.pos+3];return t.pos+=4,i}ReadByte(t){return t.getByte()}ReadString(t){let e=this.ReadShort(t);return e==0?"":t.getUTFBytes(e)}ReadBytes(t,e){let i=t.buffer.slice(t.pos,e);return new Laya.Byte(i)}dispose(){}};var Pl=class{constructor(){this.writeByt=new Laya.Byte}writeByte(){}writeShort(t){this.writeByt.writeByte(t>>8),this.writeByt.writeByte(t)}writeInt(t){this.writeByt.writeByte(t>>24),this.writeByt.writeByte(t>>16),this.writeByt.writeByte(t>>8),this.writeByt.writeByte(t)}writeString(t){if(t.length==0){this.writeShort(0);return}let i=new Laya.Byte;i.writeUTFBytes(t),this.writeShort(i.length),this.writeByt.writeUTFBytes(t)}dispose(){}};var Zr=class a{constructor(){this.cookie="####1.0.0#0#";this.encryptKey="FFIYD#^3LB954JB90fzj*(d)sO7";this._curSendIndex=-1}static get instance(){return a._instance||(a._instance=new a),a._instance}setLoginCookie(){this.cookie="####1.0.0#"+Q.Login_UDID+"#"+Q.UserAgent}parseCookie(t,e,i,r="1.0.0"){let n=this.encryptKey+e+t,o=x_(n);r=I.instance.M_S_VersionServer;let s=o+"#"+t+"#"+e+"#"+i+"#"+r+"#"+this._curSendIndex+"#1#"+Q.Login_UDID+"#"+Q.UserAgent;this.cookie=s}reflashCookie(){this.parseCookie(this.m_time,this.m_roleID,this.m_accout)}analyClient(t,e){let i=new Pl;i.writeString(this.cookie),i.writeShort(t);let r=this.analyData[t];return r&&r.length>0&&this.writeByt(r,e,i),i.writeByt}writeByt(t,e,i){for(let r in t){let n=e[r];if(t[r].indexOf("7/")!=-1){i.writeShort(n.length);let o=this.analyData[String(t[r]).split("7/")[1]];if(o)for(let s in n)this.writeByt(o,n[s],i)}else if(t[r]=="1")i.writeInt(n);else if(t[r]=="2")i.writeShort(n);else if(t[r]=="3")i.writeString(n);else if(t[r]=="4"||t[r]=="5"||t[r]=="6"){i.writeShort(n.length);for(let o in n)t[r]=="4"?i.writeInt(n[o]):t[r]=="5"?i.writeShort(n[o]):t[r]=="6"&&i.writeString(n[o])}}}analyServer(t){let e=new Pa,i=e.ReadShort(t),r=[i],n=this.analyData[i];return n&&n.length>0&&(r=r.concat(this.readByt(n,t,e))),r}analyCookie(t=""){console.log("RECE_COOKIE: "+t,1);let e=t.split("#");this.m_time=e[0],this.m_roleID=e[1],this.m_accout=e[2];let i=e[3];this._curSendIndex=i,this._curSendIndex++,console.log("cookie:_time:"+this.m_time+"  _roleID："+this.m_roleID+"	  _accout："+this.m_accout),this.parseCookie(this.m_time,this.m_roleID,this.m_accout),I.instance.timeStamp=parseFloat(this.m_time)}readByt(t,e,i){let r=[];for(let n in t)if(t[n].indexOf("7/")!=-1){let o=i.ReadShort(e),s=this.analyData[String(t[n]).split("7/")[1]],l=[];if(s&&o>0)for(let c=0;c<o;c++)l.push(this.readByt(s,e,i));r.push(l)}else if(t[n]=="1")r.push(i.ReadInt(e));else if(t[n]=="2")r.push(i.ReadShort(e));else if(t[n]=="3")r.push(i.ReadString(e));else if(t[n]=="4"||t[n]=="5"||t[n]=="6"){let o=i.ReadShort(e),s=[];for(let l=0;l<o;l++)t[n]=="4"?s.push(i.ReadInt(e)):t[n]=="5"?s.push(i.ReadShort(e)):t[n]=="6"&&s.push(i.ReadString(e));r.push(s)}return r}dispose(){}};function x_(a){throw new Error("Function not implemented.")}var ft=class{constructor(){}};ft.TYPE_NORMAL=0,ft.TYPE_TRUST=1,ft.TYPE_WEB3=2,ft.type=0;async function I_({timeout:a}={timeout:3e3}){let t=ry();return t||E_({timeout:a})}async function E_({timeout:a}={timeout:3e3}){return new Promise(t=>{let e=()=>{t(ry())};window.addEventListener("trustwallet#initialized",e,{once:!0}),setTimeout(()=>{window.removeEventListener("trustwallet#initialized",e,{once:!0}),t(null)},a)})}function ry(){let a=e=>!!e.isTrust;return typeof window<"u"&&typeof window.ethereum<"u"?a(window.ethereum)?window.ethereum:window.ethereum?.providers?window.ethereum.providers.find(a)??null:window.trustwallet??null:null}async function ff(){if(console.log("initWeb3 -0"),console.log("initWeb3 -1"),typeof window<"u"&&typeof window.ethereum<"u"&&!!window.ethereum.isTrust){let t=await I_();console.log("initWeb3 -2"+t),ft.trustProvider=t,ft.type=ft.TYPE_TRUST,console.log("initWeb3 -6")}else typeof web3<"u"&&(console.log("initWeb3 2"),web3=new Web3(web3.currentProvider),ft.web3Provider=web3,ft.type=ft.TYPE_WEB3,console.log("initWeb3 3"))}var Ii=class a{constructor(){this.walletDic=new le}static get instance(){return a._instance||(a._instance=new a),a._instance}getEthValue(t){return a.instance.walletDic.get(t)?a.instance.walletDic.get(t).ethValue:0}getValue(t){return a.instance.walletDic.get(t)?a.instance.walletDic.get(t).value:0}};var $t=class{};$t.ASSETS_TOX=1e4,$t.ASSETS_ARCANITE=10001,$t.ASSETS_CRYSTAL=10002,$t.ASSETS_MITHRIL=10003,$t.ASSETS_REDSTONE=10004,$t.ASSETS_TRUEIRON=10005;var oe=class{static initConfig(t){this.configDic=new le;for(let e of t){let i=e.sstringvalue;e.sadditional==="JSON"&&(i=JSON.parse(i)),this.configDic.set(e.skey2,i),this[e.skey2]=i}j.intance.resetTokenData()}};oe.ADDRESS0="0x0000000000000000000000000000000000000000",oe.TOKEN_ERC20ABI=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"miner",type:"address"}],name:"addMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_delMinter",type:"address"}],name:"delMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"idx",type:"uint256"}],name:"getMinter",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMinterLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.ACCOUNT_ADDRESS="0x5ff2123b0Aa4bD97eeF5F6388EFCB56cd29D6835",oe.ACCOUNT_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"nickName",type:"string"},{indexed:!1,internalType:"string",name:"avatar",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthHeight",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthPlace",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gender",type:"uint256"},{indexed:!1,internalType:"uint256",name:"influence",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_avatar",type:"string"}],name:"changeAvatar",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"}],name:"changeGender",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"changeInfluence",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"changeLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_nickname",type:"string"}],name:"changeNickName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_nickname",type:"string"},{internalType:"string",name:"_avatar",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_birthHeight",type:"uint256"},{internalType:"uint256",name:"_birthPlace",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"createAccount",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getAccountInfo",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"birthHeight",type:"uint256"},{internalType:"uint256",name:"birthPlace",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"uint256",name:"influence",type:"uint256"}],internalType:"struct AccountInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.CREATE_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"AccountToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"accounts",type:"address[]"}],name:"BurnAccount",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"string",name:"nickname",type:"string"},{indexed:!1,internalType:"uint256",name:"country",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gender",type:"uint256"},{indexed:!1,internalType:"string",name:"icon",type:"string"}],name:"RegisterAccount",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"}],name:"burnAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"currentId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"iAccount",outputs:[{internalType:"contract IAccount",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"isExists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"nickname",type:"string"},{internalType:"uint256",name:"country",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"string",name:"icon",type:"string"}],name:"register",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"registerId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],oe.BUY_HERO_ABI=[{inputs:[{internalType:"address",name:"_Phantom",type:"address"},{internalType:"address",name:"_TOX",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"Phantom",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOX",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOXPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNFTParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],internalType:"struct PhantomMall.Params[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNameIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"union",type:"address"}],name:"list",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSeriesCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"tos",type:"address[]"}],name:"mintByOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintByTOX",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"nameCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"random",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_toxPrice",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.EDIT_ACCOUNT_ADDRESS="0xaa1B8FA74Ed295123a6336C2D3a88cB973160dfa",oe.EDIT_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"_accountContract",type:"address"},{internalType:"string",name:"_website",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"rate",type:"uint256"}],internalType:"struct UpdateProfile.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWebsite",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_rate",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_website",type:"string"}],name:"setWebsite",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"}],name:"updateProfile",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.STAKING_POOL_ABI=[{inputs:[{internalType:"uint256",name:"_poolPlace",type:"uint256"},{internalType:"address",name:"_stakeToken",type:"address"},{internalType:"address",name:"_accountContract",type:"address"},{internalType:"address",name:"_rewardsContract",type:"address"},{internalType:"address",name:"_empowerContract",type:"address"},{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Withdrawn",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcPerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"capacityOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],name:"changeDailyRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimAllReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"claimReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"earned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"earnedAll",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"estimatePerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAccountContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokens",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getDailyRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getEmpowerContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastUpdateTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLimitTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPoolPlace",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsPerUnitStored",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getStakeTokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenIdleStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenMiningStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isAccountStakeToken",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_empowerContract",type:"address"}],name:"setEmpowerContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_limitTokensNumber",type:"uint256"}],name:"setLimitTokensNumber",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_idleStatus",type:"uint256"}],name:"setTokenIdleStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_miningStatus",type:"uint256"}],name:"setTokenMiningStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawAllAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"withdrawAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.STAKING_HERO_POWERCALC_ABI=[{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenLevel",type:"uint256"},{internalType:"bool",name:"isMatchProfession",type:"bool"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getFormulaParams",outputs:[{components:[{internalType:"uint256",name:"constantValue",type:"uint256"},{internalType:"uint256",name:"linearCoefficient",type:"uint256"},{internalType:"uint256",name:"quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"percentage",type:"uint256"}],internalType:"struct EmpowerCalcFormula.FormulaParams",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],name:"setFormulaParams",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.BLINDBOX_ADDRESS="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",oe.BLINDBOX_ABI=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.BLINDBOX_ADDRESS_V2="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",oe.BLINDBOX_ABI_V2=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.HERO_ADDRESS="0xCC0A4E3Bd1D49D7Ef9C431C0aD87D36B0B342018",oe.HERO_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"rarity",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"},{indexed:!1,internalType:"uint256",name:"race",type:"uint256"},{indexed:!1,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"level",type:"uint256"}],name:"UpdateLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"UpdateMineralLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"string",name:"name",type:"string"}],name:"UpdateName",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"race",type:"uint256"}],name:"UpdateRace",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"rarity",type:"uint256"}],name:"UpdateRatity",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"series",type:"uint256"}],name:"UpdateSeries",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"status",type:"uint256"}],name:"UpdateStatus",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getNFTParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"rarity",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"},{internalType:"uint256",name:"mineralLevel",type:"uint256"}],internalType:"struct Parmas",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_name",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"},{internalType:"uint256",name:"_race",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"updateLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"updateMineralLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_name",type:"string"}],name:"updateName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"}],name:"updateRace",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"}],name:"updateRatity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"}],name:"updateSeries",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"status",type:"uint256"}],name:"updateStatus",outputs:[],stateMutability:"nonpayable",type:"function"}],oe.CREATE_UNION_ADDRESS="0xcd62E6a07072Bed38F4126ba5C9361901c71846e",oe.CREATE_UNION_ABI="",oe.UNION_NUMBER_SYS_ADDRESS="0x45F0de10fA3982c4d18AbaE89a5F0663123f955c",oe.UNION_NUMBER_SYS_ABI="",oe.UPGRADE_UNION_ADDRESS="0x18320fD38F3806C0A9fb2B41202Ed0bD3f826894",oe.UPGRADE_UNION_ABI="",oe.UNION_DISTRIBUTE_ADDRESS="0x0f6b4bBa8b01B6ee2CC3232ea963ac702CaDCe04",oe.UNION_WAR_ADDRESS="0xF8489Bb617F9DCaBF33bEaeBdA4CCD029E9E247E",oe.UNION_DISTRIBUTE_ABI="",oe.UNION_WAR_ABI="",oe.HERO_TO_TOKEN_POOL_ADDRESS="",oe.HERO_TO_TOKEN_POOL_ABI="",oe.WITHDRAW_AND_RECHARGE_ADDRESS="",oe.WITHDRAW_AND_RECHARGE_ABI="",oe.SERIESHEROMALL_ADDRESS="",oe.SERIESHEROMALL_ABI="",oe.HEROFORMATION_ADDRESS="",oe.HEROFORMATION_ABI="",oe.HERO_MINT_ADDRESS="",oe.HERO_MINT_ABI="",oe.RECHANGE_ADDRESS_TOX="0x32926612d9399C1088045AEB821CCB5Ba904D697",oe.RECHANGE_ADDRESS="0x4952981D44cb95c52F0a62D4Fe8702081338D824",oe.RECHANGE_ABI=[{inputs:[{internalType:"address",name:"_signer",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidShortString",type:"error"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"StringTooLong",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[],name:"EIP712DomainChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"deadline",type:"uint256"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"depositETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"eip712Domain",outputs:[{internalType:"bytes1",name:"fields",type:"bytes1"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"version",type:"string"},{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"address",name:"verifyingContract",type:"address"},{internalType:"bytes32",name:"salt",type:"bytes32"},{internalType:"uint256[]",name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"isSigner",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_signer",type:"address"}],name:"setSigner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"signer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}];function ue(a,t,e){return i=>a[t.name||e]?.(i)??t(a,i)}Lt();Ge();var Nl=class extends B{constructor(t){super(`Filter type "${t}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}};Ci();Va();Jl();xr();dr();on();var Qy="/docs/contract/encodeEventTopics";function Di(a){let{abi:t,eventName:e,args:i}=a,r=t[0];if(e){let l=Hi({abi:t,name:e});if(!l)throw new tn(e,{docsPath:Qy});r=l}if(r.type!=="event")throw new tn(void 0,{docsPath:Qy});let n=Ut(r),o=rn(n),s=[];if(i&&"inputs"in r){let l=r.inputs?.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(i)?i:Object.values(i).length>0?l?.map(u=>i[u.name])??[]:[];c.length>0&&(s=l?.map((u,p)=>Array.isArray(c[p])?c[p].map((b,x)=>Zy({param:u,value:c[p][x]})):c[p]?Zy({param:u,value:c[p]}):null)??[])}return[o,...s]}function Zy({param:a,value:t}){if(a.type==="string"||a.type==="bytes")return dt(oi(t));if(a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/))throw new Nl(a.type);return Ai([a],[t])}Pe();function Fa(a,{method:t}){let e={};return a.transport.type==="fallback"&&a.transport.onResponse?.(({method:i,response:r,status:n,transport:o})=>{n==="success"&&t===i&&(e[r]=o.request)}),i=>e[i]||a.request}async function ac(a,t){let{address:e,abi:i,args:r,eventName:n,fromBlock:o,strict:s,toBlock:l}=t,c=Fa(a,{method:"eth_newFilter"}),u=n?Di({abi:i,args:r,eventName:n}):void 0,p=await a.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?he(o):o,toBlock:typeof l=="bigint"?he(l):l,topics:u}]});return{abi:i,args:r,eventName:n,id:p,request:c(p),strict:!!s,type:"event"}}si();oa();Lt();Ge();ja();Zo();var p0=3;function ua(a,{abi:t,address:e,args:i,docsPath:r,functionName:n,sender:o}){let{code:s,data:l,message:c,shortMessage:u}=a instanceof la?a:a instanceof B?a.walk(b=>"data"in b)||a.walk():{},p=(()=>a instanceof Si?new Xo({functionName:n}):[p0,ca.code].includes(s)&&(l||c||u)?new Qt({abi:t,data:typeof l=="object"?l.data:l,functionName:n,message:u??c}):a)();return new $o(p,{abi:t,args:i,contractAddress:e,docsPath:r,functionName:n,sender:o})}si();Pe();Yo();cn();Ge();sa();var vc=class extends B{constructor(t,{account:e,docsPath:i,chain:r,data:n,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:p,value:b}){let x=Er({from:e?.address,to:p,value:typeof b<"u"&&`${Vi(b)} ${r?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:typeof s<"u"&&`${yt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${yt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${yt(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",x].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}};Nn();Lc();function fg(a,{docsPath:t,...e}){let i=(()=>{let r=On(a,e);return r instanceof zi?a:r})();return new vc(i,{docsPath:t,...e})}_c();Jo();Un();si();cn();Ge();var wc=class extends B{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}},$a=class extends B{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}},xc=class extends B{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${yt(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}};hi();Ge();var Vn=class extends B{constructor({blockHash:t,blockNumber:e}){let i="Block";t&&(i=`Block at hash "${t}"`),e&&(i=`Block at number "${e}"`),super(`${i} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}};Pe();hi();var kf={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function Ic(a){let t={...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,chainId:a.chainId?kt(a.chainId):void 0,gas:a.gas?BigInt(a.gas):void 0,gasPrice:a.gasPrice?BigInt(a.gasPrice):void 0,maxFeePerBlobGas:a.maxFeePerBlobGas?BigInt(a.maxFeePerBlobGas):void 0,maxFeePerGas:a.maxFeePerGas?BigInt(a.maxFeePerGas):void 0,maxPriorityFeePerGas:a.maxPriorityFeePerGas?BigInt(a.maxPriorityFeePerGas):void 0,nonce:a.nonce?kt(a.nonce):void 0,to:a.to?a.to:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,type:a.type?kf[a.type]:void 0,typeHex:a.type?a.type:void 0,value:a.value?BigInt(a.value):void 0,v:a.v?BigInt(a.v):void 0};return t.yParity=(()=>{if(a.yParity)return Number(a.yParity);if(typeof t.v=="bigint"){if(t.v===0n||t.v===27n)return 0;if(t.v===1n||t.v===28n)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),t.type==="eip2930"&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t.type==="eip1559"&&delete t.maxFeePerBlobGas,t}function Ec(a){let t=a.transactions?.map(e=>typeof e=="string"?e:Ic(e));return{...a,baseFeePerGas:a.baseFeePerGas?BigInt(a.baseFeePerGas):null,blobGasUsed:a.blobGasUsed?BigInt(a.blobGasUsed):void 0,difficulty:a.difficulty?BigInt(a.difficulty):void 0,excessBlobGas:a.excessBlobGas?BigInt(a.excessBlobGas):void 0,gasLimit:a.gasLimit?BigInt(a.gasLimit):void 0,gasUsed:a.gasUsed?BigInt(a.gasUsed):void 0,hash:a.hash?a.hash:null,logsBloom:a.logsBloom?a.logsBloom:null,nonce:a.nonce?a.nonce:null,number:a.number?BigInt(a.number):null,size:a.size?BigInt(a.size):void 0,timestamp:a.timestamp?BigInt(a.timestamp):void 0,transactions:t,totalDifficulty:a.totalDifficulty?BigInt(a.totalDifficulty):null}}async function Zt(a,{blockHash:t,blockNumber:e,blockTag:i,includeTransactions:r}={}){let n=i??"latest",o=r??!1,s=e!==void 0?he(e):void 0,l=null;if(t?l=await a.request({method:"eth_getBlockByHash",params:[t,o]}):l=await a.request({method:"eth_getBlockByNumber",params:[s||n,o]}),!l)throw new Vn({blockHash:t,blockNumber:e});return(a.chain?.formatters?.block?.format||Ec)(l)}async function Gn(a){let t=await a.request({method:"eth_gasPrice"});return BigInt(t)}async function bg(a,t){return Af(a,t)}async function Af(a,t){let{block:e,chain:i=a.chain,request:r}=t||{};if(typeof i?.fees?.defaultPriorityFee=="function"){let n=e||await ue(a,Zt,"getBlock")({});return i.fees.defaultPriorityFee({block:n,client:a,request:r})}if(typeof i?.fees?.defaultPriorityFee<"u")return i?.fees?.defaultPriorityFee;try{let n=await a.request({method:"eth_maxPriorityFeePerGas"});return Na(n)}catch{let[n,o]=await Promise.all([e?Promise.resolve(e):ue(a,Zt,"getBlock")({}),ue(a,Gn,"getGasPrice")({})]);if(typeof n.baseFeePerGas!="bigint")throw new $a;let s=o-n.baseFeePerGas;return s<0n?0n:s}}async function yg(a,t){return Sc(a,t)}async function Sc(a,t){let{block:e,chain:i=a.chain,request:r,type:n="eip1559"}=t||{},o=await(async()=>typeof i?.fees?.baseFeeMultiplier=="function"?i.fees.baseFeeMultiplier({block:e,client:a,request:r}):i?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new wc;let l=10**(o.toString().split(".")[1]?.length??0),c=b=>b*BigInt(Math.ceil(o*l))/BigInt(l),u=e||await ue(a,Zt,"getBlock")({});if(typeof i?.fees?.estimateFeesPerGas=="function")return i.fees.estimateFeesPerGas({block:e,client:a,multiply:c,request:r,type:n});if(n==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new $a;let b=typeof r?.maxPriorityFeePerGas=="bigint"?r.maxPriorityFeePerGas:await Af(a,{block:u,chain:i,request:r}),x=c(u.baseFeePerGas);return{maxFeePerGas:r?.maxFeePerGas??x+b,maxPriorityFeePerGas:b}}return{gasPrice:r?.gasPrice??c(await ue(a,Gn,"getGasPrice")({}))}}hi();Pe();async function Tc(a,{address:t,blockTag:e="latest",blockNumber:i}){let r=await a.request({method:"eth_getTransactionCount",params:[t,i?he(i):e]});return kt(r)}Ge();var ji=class extends B{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}};Un();sa();function gg(a){if(a.type)return a.type;if(typeof a.blobs<"u"||typeof a.blobVersionedHashes<"u"||typeof a.maxFeePerBlobGas<"u"||typeof a.sidecars<"u")return"eip4844";if(typeof a.maxFeePerGas<"u"||typeof a.maxPriorityFeePerGas<"u")return"eip1559";if(typeof a.gasPrice<"u")return typeof a.accessList<"u"?"eip2930":"legacy";throw new fc({transaction:a})}hi();async function qi(a){let t=await a.request({method:"eth_chainId"});return kt(t)}async function Xa(a,t){let{account:e=a.account,chain:i,chainId:r,gas:n,nonce:o,parameters:s=["chainId","fees","gas","nonce","type"],type:l}=t,c=e?tt(e):void 0,u={...t,...c?{from:c?.address}:{}};s.includes("chainId")&&(i?u.chainId=i.id:typeof r<"u"?u.chainId=r:u.chainId=await ue(a,qi,"getChainId")({})),s.includes("nonce")&&typeof o>"u"&&c&&(u.nonce=await ue(a,Tc,"getTransactionCount")({address:c.address,blockTag:"pending"}));let p=await(()=>{if(!(typeof u.type<"u"))return ue(a,Zt,"getBlock")({blockTag:"latest"})})();if((s.includes("fees")||s.includes("type"))&&typeof l>"u")try{u.type=gg(u)}catch{u.type=typeof p?.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(s.includes("fees"))if(u.type==="eip1559"||u.type==="eip4844"){if(typeof u.maxFeePerGas>"u"||typeof u.maxPriorityFeePerGas>"u"){let{maxFeePerGas:b,maxPriorityFeePerGas:x}=await Sc(a,{block:p,chain:i,request:u});if(typeof t.maxPriorityFeePerGas>"u"&&t.maxFeePerGas&&t.maxFeePerGas<x)throw new xc({maxPriorityFeePerGas:x});u.maxPriorityFeePerGas=x,u.maxFeePerGas=b}}else{if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")throw new $a;let{gasPrice:b}=await Sc(a,{block:p,chain:i,request:u,type:"legacy"});u.gasPrice=b}return s.includes("gas")&&typeof n>"u"&&(u.gas=await ue(a,zn,"estimateGas")({...u,account:c?{address:c.address,type:"json-rpc"}:void 0})),Fi(u),delete u.parameters,u}async function zn(a,t){let e=t.account??a.account,i=e?tt(e):void 0;try{let{accessList:r,blobs:n,blockNumber:o,blockTag:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:b,maxPriorityFeePerGas:x,nonce:_,to:y,value:C,...A}=i?.type==="local"?await Xa(a,t):t,G=(o?he(o):void 0)||s;Fi(t);let Z=a.chain?.formatters?.transactionRequest?.format,W=(Z||Ya)({...Hn(A,{format:Z}),from:i?.address,accessList:r,blobs:n,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:b,maxPriorityFeePerGas:x,nonce:_,to:y,value:C}),J=await a.request({method:"eth_estimateGas",params:G?[W,G]:[W]});return BigInt(J)}catch(r){throw fg(r,{...t,account:i,chain:a.chain})}}async function vg(a,t){let{abi:e,address:i,args:r,functionName:n,...o}=t,s=Dt({abi:e,args:r,functionName:n});try{return await ue(a,zn,"estimateGas")({data:s,to:i,...o})}catch(l){let c=o.account?tt(o.account):void 0;throw ua(l,{abi:e,address:i,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:n,sender:c?.address})}}on();Lt();Ba();Jl();xf();sc();dr();var Lg="/docs/contract/decodeEventLog";function kr(a){let{abi:t,data:e,strict:i,topics:r}=a,n=i??!0,[o,...s]=r;if(!o)throw new Ao({docsPath:Lg});let l=t.find(y=>y.type==="event"&&o===rn(Ut(y)));if(!(l&&"name"in l)||l.type!=="event")throw new yr(o,{docsPath:Lg});let{name:c,inputs:u}=l,p=u?.some(y=>!("name"in y&&y.name)),b=p?[]:{},x=u.filter(y=>"indexed"in y&&y.indexed);for(let y=0;y<x.length;y++){let C=x[y],A=s[y];if(!A)throw new Ti({abiItem:l,param:C});b[C.name||y]=d0({param:C,value:A})}let _=u.filter(y=>!("indexed"in y&&y.indexed));if(_.length>0){if(e&&e!=="0x")try{let y=Ir(_,e);if(y)if(p)b=[...b,...y];else for(let C=0;C<_.length;C++)b[_[C].name]=y[C]}catch(y){if(n)throw y instanceof fr||y instanceof sn?new di({abiItem:l,data:e,params:_,size:Ze(e)}):y}else if(n)throw new di({abiItem:l,data:"0x",params:_,size:0})}return{eventName:c,args:Object.values(b).length>0?b:void 0}}function d0({param:a,value:t}){return a.type==="string"||a.type==="bytes"||a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/)?t:(Ir([a],t)||[])[0]}function Fn({abi:a,eventName:t,logs:e,strict:i=!0}){return e.map(r=>{try{let n=kr({...r,abi:a,strict:i});return t&&!t.includes(n.eventName)?null:{...n,...r}}catch(n){let o,s;if(n instanceof yr)return null;if(n instanceof di||n instanceof Ti){if(i)return null;o=n.abiItem.name,s=n.abiItem.inputs?.some(l=>!("name"in l&&l.name))}return{...r,args:s?[]:{},eventName:o}}}).filter(Boolean)}Pe();function Gt(a,{args:t,eventName:e}={}){return{...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,logIndex:a.logIndex?Number(a.logIndex):null,transactionHash:a.transactionHash?a.transactionHash:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,...e?{args:t,eventName:e}:{}}}async function jn(a,{address:t,blockHash:e,fromBlock:i,toBlock:r,event:n,events:o,args:s,strict:l}={}){let c=l??!1,u=o??(n?[n]:void 0),p=[];u&&(p=[u.flatMap(_=>Di({abi:[_],eventName:_.name,args:s}))],n&&(p=p[0]));let b;e?b=await a.request({method:"eth_getLogs",params:[{address:t,topics:p,blockHash:e}]}):b=await a.request({method:"eth_getLogs",params:[{address:t,topics:p,fromBlock:typeof i=="bigint"?he(i):i,toBlock:typeof r=="bigint"?he(r):r}]});let x=b.map(_=>Gt(_));return u?Fn({abi:u,logs:x,strict:c}):x}async function Cc(a,t){let{abi:e,address:i,args:r,blockHash:n,eventName:o,fromBlock:s,toBlock:l,strict:c}=t,u=o?Hi({abi:e,name:o}):void 0,p=u?void 0:e.filter(b=>b.type==="event");return ue(a,jn,"getLogs")({address:i,args:r,blockHash:n,event:u,events:p,fromBlock:s,toBlock:l,strict:c})}Ar();oa();qn();async function zt(a,t){let{abi:e,address:i,args:r,functionName:n,...o}=t,s=Dt({abi:e,args:r,functionName:n});try{let{data:l}=await ue(a,Wi,"call")({...o,data:s,to:i});return bi({abi:e,args:r,functionName:n,data:l||"0x"})}catch(l){throw ua(l,{abi:e,address:i,args:r,docsPath:"/docs/contract/readContract",functionName:n})}}si();Ar();oa();qn();async function Ng(a,t){let{abi:e,address:i,args:r,dataSuffix:n,functionName:o,...s}=t,l=s.account?tt(s.account):a.account,c=Dt({abi:e,args:r,functionName:o});try{let{data:u}=await ue(a,Wi,"call")({batch:!1,data:`${c}${n?n.replace("0x",""):""}`,to:i,...s,account:l}),p=bi({abi:e,args:r,functionName:o,data:u||"0x"}),b=e.filter(x=>"name"in x&&x.name===t.functionName);return{result:p,request:{abi:b,address:i,args:r,dataSuffix:n,functionName:o,...s,account:l}}}catch(u){throw ua(u,{abi:e,address:i,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:l?.address})}}Lt();Zo();var Nf=new Map,Og=new Map,_0=0;function Jt(a,t,e){let i=++_0,r=()=>Nf.get(a)||[],n=()=>{let u=r();Nf.set(a,u.filter(p=>p.id!==i))},o=()=>{let u=Og.get(a);r().length===1&&u&&u(),n()},s=r();if(Nf.set(a,[...s,{id:i,fns:t}]),s&&s.length>0)return o;let l={};for(let u in t)l[u]=(...p)=>{let b=r();if(b.length!==0)for(let x of b)x.fns[u]?.(...p)};let c=e(l);return typeof c=="function"&&Og.set(a,c),o}async function is(a){return new Promise(t=>setTimeout(t,a))}function Ki(a,{emitOnBegin:t,initialWaitTime:e,interval:i}){let r=!0,n=()=>r=!1;return(async()=>{let s;t&&(s=await a({unpoll:n}));let l=await e?.(s)??i;await is(l);let c=async()=>{r&&(await a({unpoll:n}),await is(i),c())};c()})(),n}li();var w0=new Map,x0=new Map;function Hg(a){let t=(r,n)=>({clear:()=>n.delete(r),get:()=>n.get(r),set:o=>n.set(r,o)}),e=t(a,w0),i=t(a,x0);return{clear:()=>{e.clear(),i.clear()},promise:e,response:i}}async function Ug(a,{cacheKey:t,cacheTime:e=1/0}){let i=Hg(t),r=i.response.get();if(r&&e>0&&new Date().getTime()-r.created.getTime()<e)return r.data;let n=i.promise.get();n||(n=a(),i.promise.set(n));try{let o=await n;return i.response.set({created:new Date,data:o}),o}finally{i.promise.clear()}}var I0=a=>`blockNumber.${a}`;async function Yi(a,{cacheTime:t=a.cacheTime}={}){let e=await Ug(()=>a.request({method:"eth_blockNumber"}),{cacheKey:I0(a.uid),cacheTime:t});return BigInt(e)}async function Qa(a,{filter:t}){let e="strict"in t&&t.strict,i=await t.request({method:"eth_getFilterChanges",params:[t.id]});if(typeof i[0]=="string")return i;let r=i.map(n=>Gt(n));return!("abi"in t)||!t.abi?r:Fn({abi:t.abi,logs:r,strict:e})}async function Za(a,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}function Vg(a,t){let{abi:e,address:i,args:r,batch:n=!0,eventName:o,onError:s,onLogs:l,poll:c,pollingInterval:u=a.pollingInterval,strict:p}=t;return(typeof c<"u"?c:a.transport.type!=="webSocket")?(()=>{let y=p??!1,C=je(["watchContractEvent",i,r,n,a.uid,o,u,y]);return Jt(C,{onLogs:l,onError:s},A=>{let H,G,Z=!1,D=Ki(async()=>{if(!Z){try{G=await ue(a,ac,"createContractEventFilter")({abi:e,address:i,args:r,eventName:o,strict:y})}catch{}Z=!0;return}try{let W;if(G)W=await ue(a,Qa,"getFilterChanges")({filter:G});else{let J=await ue(a,Yi,"getBlockNumber")({});H&&H!==J?W=await ue(a,Cc,"getContractEvents")({abi:e,address:i,args:r,eventName:o,fromBlock:H+1n,toBlock:J,strict:y}):W=[],H=J}if(W.length===0)return;if(n)A.onLogs(W);else for(let J of W)A.onLogs([J])}catch(W){G&&W instanceof Gi&&(Z=!1),A.onError?.(W)}},{emitOnBegin:!0,interval:u});return async()=>{G&&await ue(a,Za,"uninstallFilter")({filter:G}),D()}})})():(()=>{let y=p??!1,C=je(["watchContractEvent",i,r,n,a.uid,o,u,y]),A=!0,H=()=>A=!1;return Jt(C,{onLogs:l,onError:s},G=>((async()=>{try{let Z=o?Di({abi:e,eventName:o,args:r}):[],{unsubscribe:D}=await a.transport.subscribe({params:["logs",{address:i,topics:Z}],onData(W){if(!A)return;let J=W.result;try{let{eventName:me,args:Be}=kr({abi:e,data:J.data,topics:J.topics,strict:p}),Ee=Gt(J,{args:Be,eventName:me});G.onLogs([Ee])}catch(me){let Be,Ee;if(me instanceof di||me instanceof Ti){if(p)return;Be=me.abiItem.name,Ee=me.abiItem.inputs?.some(pt=>!("name"in pt&&pt.name))}let xe=Gt(J,{args:Ee?[]:{},eventName:Be});G.onLogs([xe])}},onError(W){G.onError?.(W)}});H=D,A||H()}catch(Z){s?.(Z)}})(),()=>H()))})()}oa();si();Mc();function Oc({chain:a,currentChainId:t}){if(!a)throw new Dc;if(t!==a.id)throw new Ac({chain:a,currentChainId:t})}Nn();sa();Lc();function Gg(a,{docsPath:t,...e}){let i=(()=>{let r=On(a,e);return r instanceof zi?a:r})();return new bc(i,{docsPath:t,...e})}_c();Jo();Un();async function Wn(a,{serializedTransaction:t}){return a.request({method:"eth_sendRawTransaction",params:[t]},{retryCount:0})}async function Kn(a,t){let{account:e=a.account,chain:i=a.chain,accessList:r,blobs:n,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:p,nonce:b,to:x,value:_,...y}=t;if(!e)throw new ji({docsPath:"/docs/actions/wallet/sendTransaction"});let C=tt(e);try{Fi(t);let A;if(i!==null&&(A=await ue(a,qi,"getChainId")({}),Oc({currentChainId:A,chain:i})),C.type==="local"){let D=await ue(a,Xa,"prepareTransactionRequest")({account:C,accessList:r,blobs:n,chain:i,chainId:A,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:p,nonce:b,to:x,value:_,...y}),W=i?.serializers?.transaction,J=await C.signTransaction(D,{serializer:W});return await ue(a,Wn,"sendRawTransaction")({serializedTransaction:J})}let H=a.chain?.formatters?.transactionRequest?.format,Z=(H||Ya)({...Hn(y,{format:H}),accessList:r,blobs:n,data:o,from:C.address,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:p,nonce:b,to:x,value:_});return await a.request({method:"eth_sendTransaction",params:[Z]},{retryCount:0})}catch(A){throw Gg(A,{...t,account:C,chain:t.chain||void 0})}}async function zg(a,t){let{abi:e,address:i,args:r,dataSuffix:n,functionName:o,...s}=t,l=Dt({abi:e,args:r,functionName:o});return ue(a,Kn,"sendTransaction")({data:`${l}${n?n.replace("0x",""):""}`,to:i,...s})}Pe();async function Fg(a,{chain:t}){let{id:e,name:i,nativeCurrency:r,rpcUrls:n,blockExplorers:o}=t;await a.request({method:"wallet_addEthereumChain",params:[{chainId:he(e),chainName:i,nativeCurrency:r,rpcUrls:n.default.http,blockExplorerUrls:o?Object.values(o).map(({url:s})=>s):void 0}]},{retryCount:0})}si();var Hc=256,Uc;function jg(a=11){if(!Uc||Hc+a>256*2){Uc="",Hc=0;for(let t=0;t<256;t++)Uc+=(256+Math.random()*256|0).toString(16).substring(1)}return Uc.substring(Hc,Hc+++a)}function Vc(a){let{batch:t,cacheTime:e=a.pollingInterval??4e3,ccipRead:i,key:r="base",name:n="Base Client",pollingInterval:o=4e3,type:s="base"}=a,l=a.chain,c=a.account?tt(a.account):void 0,{config:u,request:p,value:b}=a.transport({chain:l,pollingInterval:o}),x={...u,...b},_={account:c,batch:t,cacheTime:e,ccipRead:i,chain:l,key:r,name:n,pollingInterval:o,request:p,transport:x,type:s,uid:jg()};function y(C){return A=>{let H=A(C);for(let Z in _)delete H[Z];let G={...C,...H};return Object.assign(G,{extend:y(G)})}}return Object.assign(_,{extend:y(_)})}Ge();dn();Zo();function as(a,{delay:t=100,retryCount:e=2,shouldRetry:i=()=>!0}={}){return new Promise((r,n)=>{let o=async({count:s=0}={})=>{let l=async({error:c})=>{let u=typeof t=="function"?t({count:s,error:c}):t;u&&await is(u),o({count:s+1})};try{let c=await a();r(c)}catch(c){if(s<e&&await i({count:s,error:c}))return l({error:c});n(c)}};o()})}function qg(a,t={}){return async(e,i={})=>{let{retryDelay:r=150,retryCount:n=3}={...t,...i};return as(async()=>{try{return await a(e)}catch(o){let s=o;switch(s.code){case hn.code:throw new hn(s);case fn.code:throw new fn(s);case bn.code:throw new bn(s);case yn.code:throw new yn(s);case ca.code:throw new ca(s);case Gi.code:throw new Gi(s);case gn.code:throw new gn(s);case vn.code:throw new vn(s);case Ln.code:throw new Ln(s);case _n.code:throw new _n(s);case Tr.code:throw new Tr(s);case wn.code:throw new wn(s);case Cr.code:throw new Cr(s);case xn.code:throw new xn(s);case In.code:throw new In(s);case En.code:throw new En(s);case Sn.code:throw new Sn(s);case Tn.code:throw new Tn(s);case 5e3:throw new Cr(s);default:throw o instanceof B?o:new gc(s)}}},{delay:({count:o,error:s})=>{if(s&&s instanceof fi){let l=s?.headers?.get("Retry-After");if(l?.match(/\d/))return parseInt(l)*1e3}return~~(1<<o)*r},retryCount:n,shouldRetry:({error:o})=>E0(o)})}}function E0(a){return"code"in a&&typeof a.code=="number"?a.code===-1||a.code===Tr.code||a.code===ca.code:a instanceof fi&&a.status?a.status===403||a.status===408||a.status===413||a.status===429||a.status===500||a.status===502||a.status===503||a.status===504:!0}function Gc({key:a,name:t,request:e,retryCount:i=3,retryDelay:r=150,timeout:n,type:o},s){return{config:{key:a,name:t,request:e,retryCount:i,retryDelay:r,timeout:n,type:o},request:qg(e,{retryCount:i,retryDelay:r}),value:s}}function Yn(a,t={}){let{key:e="custom",name:i="Custom Provider",retryDelay:r}=t;return({retryCount:n})=>Gc({key:e,name:i,request:a.request.bind(a),retryCount:t.retryCount??n,retryDelay:r,type:"custom"})}dn();Ge();var zc=class extends B{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}};Rf();dn();function Wg(a,{errorInstance:t=new Error("timed out"),timeout:e,signal:i}){return new Promise((r,n)=>{(async()=>{let o;try{let s=new AbortController;e>0&&(o=setTimeout(()=>{i?s.abort():n(t)},e)),r(await a({signal:s?.signal||null}))}catch(s){s.name==="AbortError"&&n(t),n(s)}finally{clearTimeout(o)}})()})}li();function S0(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var Of=S0();function Kg(a,t={}){return{async request(e){let{body:i,fetchOptions:r={},onResponse:n=t.onResponse,timeout:o=t.timeout??1e4}=e,{headers:s,method:l,signal:c}={...t.fetchOptions,...r};try{let u=await Wg(async({signal:b})=>await fetch(a,{...r,body:Array.isArray(i)?je(i.map(_=>({jsonrpc:"2.0",id:_.id??Of.take(),..._}))):je({jsonrpc:"2.0",id:i.id??Of.take(),...i}),headers:{...s,"Content-Type":"application/json"},method:l||"POST",signal:c||(o>0?b:null)}),{errorInstance:new Qo({body:i,url:a}),timeout:o,signal:!0});n&&await n(u);let p;if(u.headers.get("Content-Type")?.startsWith("application/json")?p=await u.json():p=await u.text(),!u.ok)throw new fi({body:i,details:je(p.error)||u.statusText,headers:u.headers,status:u.status,url:a});return p}catch(u){throw u instanceof fi||u instanceof Qo?u:new fi({body:i,details:u.message,url:a})}}}}function rs(a,t={}){let{batch:e,fetchOptions:i,key:r="http",name:n="HTTP JSON-RPC",onFetchResponse:o,retryDelay:s}=t;return({chain:l,retryCount:c,timeout:u})=>{let{batchSize:p=1e3,wait:b=0}=typeof e=="object"?e:{},x=t.retryCount??c,_=u??t.timeout??1e4,y=a||l?.rpcUrls.default.http[0];if(!y)throw new zc;let C=Kg(y,{fetchOptions:i,onResponse:o,timeout:_});return Gc({key:r,name:n,async request({method:A,params:H}){let G={method:A,params:H},{schedule:Z}=Pc({id:`${a}`,wait:b,shouldSplitBatch(me){return me.length>p},fn:me=>C.request({body:me}),sort:(me,Be)=>me.id-Be.id}),D=async me=>e?Z(me):[await C.request({body:me})],[{error:W,result:J}]=await D(G);if(W)throw new mn({body:G,error:W,url:y});return J},retryCount:x,retryDelay:s,timeout:_,type:"http"},{fetchOptions:i,url:y})}}Dr();Ar();oa();Pr();Fl();Pe();nc();Ge();ja();function $n(a,t){if(!(a instanceof B))return!1;let e=a.walk(i=>i instanceof Qt);return e instanceof Qt?!!(e.data?.errorName==="ResolverNotFound"||e.data?.errorName==="ResolverWildcardNotSupported"||e.data?.errorName==="ResolverNotContract"||e.data?.errorName==="ResolverError"||e.data?.errorName==="HttpError"||e.reason?.includes("Wildcard on non-extended resolvers is not supported")||t==="reverse"&&e.reason===rc[50]):!1}za();Ci();Pe();Va();Ei();function Fc(a){if(a.length!==66||a.indexOf("[")!==0||a.indexOf("]")!==65)return null;let t=`0x${a.slice(1,65)}`;return nt(t)?t:null}function Xn(a){let t=new Uint8Array(32).fill(0);if(!a)return bt(t);let e=a.split(".");for(let i=e.length-1;i>=0;i-=1){let r=Fc(e[i]),n=r?oi(r):dt(Xt(e[i]),"bytes");t=dt(Vt([t,n]),"bytes")}return bt(t)}Ci();function Yg(a){return`[${a.slice(2)}]`}Ci();Pe();Va();function $g(a){let t=new Uint8Array(32).fill(0);return a?Fc(a)||dt(Xt(a)):bt(t)}function Ja(a){let t=a.replace(/^\.|\.$/gm,"");if(t.length===0)return new Uint8Array(1);let e=new Uint8Array(Xt(t).byteLength+2),i=0,r=t.split(".");for(let n=0;n<r.length;n++){let o=Xt(r[n]);o.byteLength>255&&(o=Xt(Yg($g(r[n])))),e[i]=o.length,e.set(o,i+1),i+=o.length+1}return e.byteLength!==i+1?e.slice(0,i+1):e}async function Xg(a,{blockNumber:t,blockTag:e,coinType:i,name:r,gatewayUrls:n,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=yi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}try{let c=Dt({abi:Pf,functionName:"addr",...i!=null?{args:[Xn(r),BigInt(i)]}:{args:[Xn(r)]}}),u={address:l,abi:kc,functionName:"resolve",args:[et(Ja(r)),c],blockNumber:t,blockTag:e},p=ue(a,zt,"readContract"),b=n?await p({...u,args:[...u.args,n]}):await p(u);if(b[0]==="0x")return null;let x=bi({abi:Pf,args:i!=null?[Xn(r),BigInt(i)]:void 0,functionName:"addr",data:b[0]});return x==="0x"||gr(x)==="0x00"?null:x}catch(c){if(o)throw c;if($n(c,"resolve"))return null;throw c}}Ge();var jc=class extends B{constructor({data:t}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}},er=class extends B{constructor({reason:t}){super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}},Qn=class extends B{constructor({uri:t}){super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}},qc=class extends B{constructor({namespace:t}){super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}};var T0=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,C0=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,k0=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,A0=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function D0(a){try{let t=await fetch(a,{method:"HEAD"});return t.status===200?t.headers.get("content-type")?.startsWith("image/"):!1}catch(t){return typeof t=="object"&&typeof t.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(e=>{let i=new Image;i.onload=()=>{e(!0)},i.onerror=()=>{e(!1)},i.src=a})}}function Qg(a,t){return a?a.endsWith("/")?a.slice(0,-1):a:t}function Hf({uri:a,gatewayUrls:t}){let e=k0.test(a);if(e)return{uri:a,isOnChain:!0,isEncoded:e};let i=Qg(t?.ipfs,"https://ipfs.io"),r=Qg(t?.arweave,"https://arweave.net"),n=a.match(T0),{protocol:o,subpath:s,target:l,subtarget:c=""}=n?.groups||{},u=o==="ipns:/"||s==="ipns/",p=o==="ipfs:/"||s==="ipfs/"||C0.test(a);if(a.startsWith("http")&&!u&&!p){let x=a;return t?.arweave&&(x=a.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:x,isOnChain:!1,isEncoded:!1}}if((u||p)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(o==="ar:/"&&l)return{uri:`${r}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let b=a.replace(A0,"");if(b.startsWith("<svg")&&(b=`data:image/svg+xml;base64,${btoa(b)}`),b.startsWith("data:")||b.startsWith("{"))return{uri:b,isOnChain:!0,isEncoded:!1};throw new Qn({uri:a})}function Uf(a){if(typeof a!="object"||!("image"in a)&&!("image_url"in a)&&!("image_data"in a))throw new jc({data:a});return a.image||a.image_url||a.image_data}async function Zg({gatewayUrls:a,uri:t}){try{let e=await fetch(t).then(r=>r.json());return await Wc({gatewayUrls:a,uri:Uf(e)})}catch{throw new Qn({uri:t})}}async function Wc({gatewayUrls:a,uri:t}){let{uri:e,isOnChain:i}=Hf({uri:t,gatewayUrls:a});if(i||await D0(e))return e;throw new Qn({uri:t})}function Jg(a){let t=a;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[e,i,r]=t.split("/"),[n,o]=e.split(":"),[s,l]=i.split(":");if(!n||n.toLowerCase()!=="eip155")throw new er({reason:"Only EIP-155 supported"});if(!o)throw new er({reason:"Chain ID not found"});if(!l)throw new er({reason:"Contract address not found"});if(!r)throw new er({reason:"Token ID not found"});if(!s)throw new er({reason:"ERC namespace not found"});return{chainID:parseInt(o),namespace:s.toLowerCase(),contractAddress:l,tokenID:r}}async function ev(a,{nft:t}){if(t.namespace==="erc721")return zt(a,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if(t.namespace==="erc1155")return zt(a,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new qc({namespace:t.namespace})}async function tv(a,{gatewayUrls:t,record:e}){return/eip155:/i.test(e)?M0(a,{gatewayUrls:t,record:e}):Wc({uri:e,gatewayUrls:t})}async function M0(a,{gatewayUrls:t,record:e}){let i=Jg(e),r=await ev(a,{nft:i}),{uri:n,isOnChain:o,isEncoded:s}=Hf({uri:r,gatewayUrls:t});if(o&&(n.includes("data:application/json;base64,")||n.startsWith("{"))){let c=s?atob(n.replace("data:application/json;base64,","")):n,u=JSON.parse(c);return Wc({uri:Uf(u),gatewayUrls:t})}let l=i.tokenID;return i.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),Zg({gatewayUrls:t,uri:n.replace(/(?:0x)?{id}/,l)})}Dr();Ar();oa();Pr();Pe();async function Kc(a,{blockNumber:t,blockTag:e,name:i,key:r,gatewayUrls:n,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=yi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}try{let c={address:l,abi:kc,functionName:"resolve",args:[et(Ja(i)),Dt({abi:Mf,functionName:"text",args:[Xn(i),r]})],blockNumber:t,blockTag:e},u=ue(a,zt,"readContract"),p=n?await u({...c,args:[...c.args,n]}):await u(c);if(p[0]==="0x")return null;let b=bi({abi:Mf,functionName:"text",data:p[0]});return b===""?null:b}catch(c){if(o)throw c;if($n(c,"resolve"))return null;throw c}}async function iv(a,{blockNumber:t,blockTag:e,assetGatewayUrls:i,name:r,gatewayUrls:n,strict:o,universalResolverAddress:s}){let l=await ue(a,Kc,"getEnsText")({blockNumber:t,blockTag:e,key:"avatar",name:r,universalResolverAddress:s,gatewayUrls:n,strict:o});if(!l)return null;try{return await tv(a,{record:l,gatewayUrls:i})}catch{return null}}Dr();Pr();Pe();async function av(a,{address:t,blockNumber:e,blockTag:i,gatewayUrls:r,strict:n,universalResolverAddress:o}){let s=o;if(!s){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=yi({blockNumber:e,chain:a.chain,contract:"ensUniversalResolver"})}let l=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let c={address:s,abi:wg,functionName:"reverse",args:[et(Ja(l))],blockNumber:e,blockTag:i},u=ue(a,zt,"readContract"),[p,b]=r?await u({...c,args:[...c.args,r]}):await u(c);return t.toLowerCase()!==b.toLowerCase()?null:p}catch(c){if(n)throw c;if($n(c,"reverse"))return null;throw c}}Pr();Pe();async function rv(a,{blockNumber:t,blockTag:e,name:i,universalResolverAddress:r}){let n=r;if(!n){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");n=yi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}let[o]=await ue(a,zt,"readContract")({address:n,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[et(Ja(i))],blockNumber:t,blockTag:e});return o}qn();async function nv(a){let t=Fa(a,{method:"eth_newBlockFilter"}),e=await a.request({method:"eth_newBlockFilter"});return{id:e,request:t(e),type:"block"}}Pe();async function Yc(a,{address:t,args:e,event:i,events:r,fromBlock:n,strict:o,toBlock:s}={}){let l=r??(i?[i]:void 0),c=Fa(a,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(b=>Di({abi:[b],eventName:b.name,args:e}))],i&&(u=u[0]));let p=await a.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof n=="bigint"?he(n):n,toBlock:typeof s=="bigint"?he(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:e,eventName:i?i.name:void 0,fromBlock:n,id:p,request:c(p),strict:!!o,toBlock:s,type:"event"}}async function $c(a){let t=Fa(a,{method:"eth_newPendingTransactionFilter"}),e=await a.request({method:"eth_newPendingTransactionFilter"});return{id:e,request:t(e),type:"transaction"}}Pe();async function ov(a,{address:t,blockNumber:e,blockTag:i="latest"}){let r=e?he(e):void 0,n=await a.request({method:"eth_getBalance",params:[t,r||i]});return BigInt(n)}async function sv(a){let t=await a.request({method:"eth_blobBaseFee"});return BigInt(t)}hi();Pe();async function lv(a,{blockHash:t,blockNumber:e,blockTag:i="latest"}={}){let r=e!==void 0?he(e):void 0,n;return t?n=await a.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):n=await a.request({method:"eth_getBlockTransactionCountByNumber",params:[r||i]}),kt(n)}Pe();async function cv(a,{address:t,blockNumber:e,blockTag:i="latest"}){let r=e!==void 0?he(e):void 0,n=await a.request({method:"eth_getCode",params:[t,r||i]});if(n!=="0x")return n}Pe();function uv(a){return{baseFeePerGas:a.baseFeePerGas.map(t=>BigInt(t)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(t=>t.map(e=>BigInt(e)))}}async function pv(a,{blockCount:t,blockNumber:e,blockTag:i="latest",rewardPercentiles:r}){let n=e?he(e):void 0,o=await a.request({method:"eth_feeHistory",params:[he(t),n||i,r]});return uv(o)}async function mv(a,{filter:t}){let e=t.strict??!1,r=(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(n=>Gt(n));return t.abi?Fn({abi:t.abi,logs:r,strict:e}):r}Pe();function Zn(a){return{formatters:void 0,fees:void 0,serializers:void 0,...a}}var dv=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,hv=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;Lt();Lr();Ga();Ba();Pe();xr();za();Pe();Va();function fv(a){let{domain:t={},message:e,primaryType:i}=a,r={EIP712Domain:Qc({domain:t}),...a.types};Xc({domain:t,message:e,primaryType:i,types:r});let n=["0x1901"];return t&&n.push(P0({domain:t,types:r})),i!=="EIP712Domain"&&n.push(bv({data:e,primaryType:i,types:r})),dt(Vt(n))}function P0({domain:a,types:t}){return bv({data:a,primaryType:"EIP712Domain",types:t})}function bv({data:a,primaryType:t,types:e}){let i=yv({data:a,primaryType:t,types:e});return dt(i)}function yv({data:a,primaryType:t,types:e}){let i=[{type:"bytes32"}],r=[B0({primaryType:t,types:e})];for(let n of e[t]){let[o,s]=vv({types:e,name:n.name,type:n.type,value:a[n.name]});i.push(o),r.push(s)}return Ai(i,r)}function B0({primaryType:a,types:t}){let e=et(R0({primaryType:a,types:t}));return dt(e)}function R0({primaryType:a,types:t}){let e="",i=gv({primaryType:a,types:t});i.delete(a);let r=[a,...Array.from(i).sort()];for(let n of r)e+=`${n}(${t[n].map(({name:o,type:s})=>`${s} ${o}`).join(",")})`;return e}function gv({primaryType:a,types:t},e=new Set){let r=a.match(/^\w*/u)?.[0];if(e.has(r)||t[r]===void 0)return e;e.add(r);for(let n of t[r])gv({primaryType:n.type,types:t},e);return e}function vv({types:a,name:t,type:e,value:i}){if(a[e]!==void 0)return[{type:"bytes32"},dt(yv({data:i,primaryType:e,types:a}))];if(e==="bytes")return i=`0x${(i.length%2?"0":"")+i.slice(2)}`,[{type:"bytes32"},dt(i)];if(e==="string")return[{type:"bytes32"},dt(et(i))];if(e.lastIndexOf("]")===e.length-1){let r=e.slice(0,e.lastIndexOf("[")),n=i.map(o=>vv({name:t,type:r,types:a,value:o}));return[{type:"bytes32"},dt(Ai(n.map(([o])=>o),n.map(([,o])=>o)))]}return[{type:e},i]}function Xc(a){let{domain:t,message:e,primaryType:i,types:r}=a,n=(o,s)=>{for(let l of o){let{name:c,type:u}=l,p=s[c],b=u.match(hv);if(b&&(typeof p=="number"||typeof p=="bigint")){let[y,C,A]=b;he(p,{signed:C==="int",size:parseInt(A)/8})}if(u==="address"&&typeof p=="string"&&!_t(p))throw new At({address:p});let x=u.match(dv);if(x){let[y,C]=x;if(C&&Ze(p)!==parseInt(C))throw new Mo({expectedSize:parseInt(C),givenSize:Ze(p)})}let _=r[u];_&&n(_,p)}};if(r.EIP712Domain&&t&&n(r.EIP712Domain,t),i!=="EIP712Domain"){let o=r[i];n(o,e)}}function Qc({domain:a}){return[typeof a?.name=="string"&&{name:"name",type:"string"},a?.version&&{name:"version",type:"string"},typeof a?.chainId=="number"&&{name:"chainId",type:"uint256"},a?.verifyingContract&&{name:"verifyingContract",type:"address"},a?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}Lt();za();xr();var Vf="/docs/contract/encodeDeployData";function ns(a){let{abi:t,args:e,bytecode:i}=a;if(!e||e.length===0)return i;let r=t.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new So({docsPath:Vf});if(!("inputs"in r))throw new en({docsPath:Vf});if(!r.inputs||r.inputs.length===0)throw new en({docsPath:Vf});let n=Ai(r.inputs,e);return jo([i,n])}Ei();hi();var N0={"0x0":"reverted","0x1":"success"};function Lv(a){let t={...a,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,contractAddress:a.contractAddress?a.contractAddress:null,cumulativeGasUsed:a.cumulativeGasUsed?BigInt(a.cumulativeGasUsed):null,effectiveGasPrice:a.effectiveGasPrice?BigInt(a.effectiveGasPrice):null,gasUsed:a.gasUsed?BigInt(a.gasUsed):null,logs:a.logs?a.logs.map(e=>Gt(e)):null,to:a.to?a.to:null,transactionIndex:a.transactionIndex?kt(a.transactionIndex):null,status:a.status?N0[a.status]:null,type:a.type?kf[a.type]||a.type:null};return a.blobGasPrice&&(t.blobGasPrice=BigInt(a.blobGasPrice)),a.blobGasUsed&&(t.blobGasUsed=BigInt(a.blobGasUsed)),t}Pe();hi();var Iv=`Ethereum Signed Message:
`;za();Ci();Va();function zf(a,t){let e=(()=>typeof a=="string"?Xt(a):a.raw instanceof Uint8Array?a.raw:oi(a.raw))(),i=Xt(`${Iv}${e.length}`);return dt(Vt([i,e]),t)}function Ev(a,t){let[e,i="0"]=a.split("."),r=e.startsWith("-");if(r&&(e=e.slice(1)),i=i.replace(/(0+)$/,""),t===0)Math.round(+`.${i}`)===1&&(e=`${BigInt(e)+1n}`),i="";else if(i.length>t){let[n,o,s]=[i.slice(0,t-1),i.slice(t-1,t),i.slice(t)],l=Math.round(+`${o}.${s}`);l>9?i=`${BigInt(n)+BigInt(1)}0`.padStart(n.length+1,"0"):i=`${n}${l}`,i.length>t&&(i=i.slice(1),e=`${BigInt(e)+1n}`),i=i.slice(0,t)}else i=i.padEnd(t,"0");return BigInt(`${r?"-":""}${e}${i}`)}uc();function ar(a,t="wei"){return Ev(a,cc[t])}function G0(a){return a.map(t=>({...t,value:BigInt(t.value)}))}function Sv(a){return{...a,balance:a.balance?BigInt(a.balance):void 0,nonce:a.nonce?kt(a.nonce):void 0,storageProof:a.storageProof?G0(a.storageProof):void 0}}async function Tv(a,{address:t,blockNumber:e,blockTag:i,storageKeys:r}){let n=i??"latest",o=e!==void 0?he(e):void 0,s=await a.request({method:"eth_getProof",params:[t,r,o||n]});return Sv(s)}Pe();async function Cv(a,{address:t,blockNumber:e,blockTag:i="latest",slot:r}){let n=e!==void 0?he(e):void 0;return await a.request({method:"eth_getStorageAt",params:[t,r,n||i]})}sa();Pe();async function Jn(a,{blockHash:t,blockNumber:e,blockTag:i,hash:r,index:n}){let o=i||"latest",s=e!==void 0?he(e):void 0,l=null;if(r?l=await a.request({method:"eth_getTransactionByHash",params:[r]}):t?l=await a.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,he(n)]}):(s||o)&&(l=await a.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||o,he(n)]})),!l)throw new un({blockHash:t,blockNumber:e,blockTag:o,hash:r,index:n});return(a.chain?.formatters?.transaction?.format||Ic)(l)}async function kv(a,{hash:t,transactionReceipt:e}){let[i,r]=await Promise.all([ue(a,Yi,"getBlockNumber")({}),t?ue(a,Jn,"getBlockNumber")({hash:t}):void 0]),n=e?.blockNumber||r?.blockNumber;return n?i-n+1n:0n}sa();async function os(a,{hash:t}){let e=await a.request({method:"eth_getTransactionReceipt",params:[t]});if(!e)throw new pn({hash:t});return(a.chain?.formatters?.transactionReceipt?.format||Lv)(e)}Dr();Lt();Ge();ja();Ar();oa();Pr();async function Av(a,t){let{allowFailure:e=!0,batchSize:i,blockNumber:r,blockTag:n,multicallAddress:o,stateOverride:s}=t,l=t.contracts,c=i??(typeof a.batch?.multicall=="object"&&a.batch.multicall.batchSize||1024),u=o;if(!u){if(!a.chain)throw new Error("client chain not configured. multicallAddress is required.");u=yi({blockNumber:r,chain:a.chain,contract:"multicall3"})}let p=[[]],b=0,x=0;for(let C=0;C<l.length;C++){let{abi:A,address:H,args:G,functionName:Z}=l[C];try{let D=Dt({abi:A,args:G,functionName:Z});x+=(D.length-2)/2,c>0&&x>c&&p[b].length>0&&(b++,x=(D.length-2)/2,p[b]=[]),p[b]=[...p[b],{allowFailure:!0,callData:D,target:H}]}catch(D){let W=ua(D,{abi:A,address:H,args:G,docsPath:"/docs/contract/multicall",functionName:Z});if(!e)throw W;p[b]=[...p[b],{allowFailure:!0,callData:"0x",target:H}]}}let _=await Promise.allSettled(p.map(C=>ue(a,zt,"readContract")({abi:es,address:u,args:[C],blockNumber:r,blockTag:n,functionName:"aggregate3",stateOverride:s}))),y=[];for(let C=0;C<_.length;C++){let A=_[C];if(A.status==="rejected"){if(!e)throw A.reason;for(let G=0;G<p[C].length;G++)y.push({status:"failure",error:A.reason,result:void 0});continue}let H=A.value;for(let G=0;G<H.length;G++){let{returnData:Z,success:D}=H[G],{callData:W}=p[C][G],{abi:J,address:me,functionName:Be,args:Ee}=l[y.length];try{if(W==="0x")throw new Si;if(!D)throw new la({data:Z});let xe=bi({abi:J,args:Ee,data:Z,functionName:Be});y.push(e?{result:xe,status:"success"}:xe)}catch(xe){let pt=ua(xe,{abi:J,address:me,args:Ee,docsPath:"/docs/contract/multicall",functionName:Be});if(!e)throw pt;y.push({error:pt,result:void 0,status:"failure"})}}}if(y.length!==l.length)throw new B("multicall results mismatch");return y}Dr();var Dv="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";ja();to();Ci();Ei();function Rv(a,t){let e=nt(a)?oi(a):a,i=nt(t)?oi(t):t;return qf(e,i)}qn();async function au(a,{address:t,hash:e,signature:i,...r}){let n=nt(i)?i:et(i);try{let{data:o}=await ue(a,Wi,"call")({data:ns({abi:xg,args:[t,e,n],bytecode:Dv}),...r});return Rv(o??"0x0","0x1")}catch(o){if(o instanceof Sr)return!1;throw o}}async function Nv(a,{address:t,message:e,signature:i,...r}){let n=zf(e);return au(a,{address:t,hash:n,signature:i,...r})}async function Ov(a,t){let{address:e,signature:i,message:r,primaryType:n,types:o,domain:s,...l}=t,c=fv({message:r,primaryType:n,types:o,domain:s});return au(a,{address:e,hash:c,signature:i,...l})}sa();li();hi();li();function ru(a,{emitOnBegin:t=!1,emitMissed:e=!1,onBlockNumber:i,onError:r,poll:n,pollingInterval:o=a.pollingInterval}){let s=typeof n<"u"?n:a.transport.type!=="webSocket",l;return s?(()=>{let p=je(["watchBlockNumber",a.uid,t,e,o]);return Jt(p,{onBlockNumber:i,onError:r},b=>Ki(async()=>{try{let x=await ue(a,Yi,"getBlockNumber")({cacheTime:0});if(l){if(x===l)return;if(x-l>1&&e)for(let _=l+1n;_<x;_++)b.onBlockNumber(_,l),l=_}(!l||x>l)&&(b.onBlockNumber(x,l),l=x)}catch(x){b.onError?.(x)}},{emitOnBegin:t,interval:o}))})():(()=>{let p=je(["watchBlockNumber",a.uid,t,e]);return Jt(p,{onBlockNumber:i,onError:r},b=>{let x=!0,_=()=>x=!1;return(async()=>{try{let{unsubscribe:y}=await a.transport.subscribe({params:["newHeads"],onData(C){if(!x)return;let A=Na(C.result?.number);b.onBlockNumber(A,l),l=A},onError(C){b.onError?.(C)}});_=y,x||_()}catch(y){r?.(y)}})(),()=>_()})})()}async function Hv(a,{confirmations:t=1,hash:e,onReplaced:i,pollingInterval:r=a.pollingInterval,retryCount:n=6,retryDelay:o=({count:l})=>~~(1<<l)*200,timeout:s}){let l=je(["waitForTransactionReceipt",a.uid,e]),c,u,p,b=!1;return new Promise((x,_)=>{s&&setTimeout(()=>_(new yc({hash:e})),s);let y=Jt(l,{onReplaced:i,resolve:x,reject:_},C=>{let A=ue(a,ru,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:r,async onBlockNumber(H){if(b)return;let G=H,Z=D=>{A(),D(),y()};try{if(p){if(t>1&&(!p.blockNumber||G-p.blockNumber+1n<t))return;Z(()=>C.resolve(p));return}if(c||(b=!0,await as(async()=>{c=await ue(a,Jn,"getTransaction")({hash:e}),c.blockNumber&&(G=c.blockNumber)},{delay:o,retryCount:n}),b=!1),p=await ue(a,os,"getTransactionReceipt")({hash:e}),t>1&&(!p.blockNumber||G-p.blockNumber+1n<t))return;Z(()=>C.resolve(p))}catch(D){if(D instanceof un||D instanceof pn){if(!c){b=!1;return}try{u=c,b=!0;let W=await as(()=>ue(a,Zt,"getBlock")({blockNumber:G,includeTransactions:!0}),{delay:o,retryCount:n,shouldRetry:({error:Be})=>Be instanceof Vn});b=!1;let J=W.transactions.find(({from:Be,nonce:Ee})=>Be===u.from&&Ee===u.nonce);if(!J||(p=await ue(a,os,"getTransactionReceipt")({hash:J.hash}),t>1&&(!p.blockNumber||G-p.blockNumber+1n<t)))return;let me="replaced";J.to===u.to&&J.value===u.value?me="repriced":J.from===J.to&&J.value===0n&&(me="cancelled"),Z(()=>{C.onReplaced?.({reason:me,replacedTransaction:u,transaction:J,transactionReceipt:p}),C.resolve(p)})}catch(W){Z(()=>C.reject(W))}}else Z(()=>C.reject(D))}}})})})}li();function Uv(a,{blockTag:t="latest",emitMissed:e=!1,emitOnBegin:i=!1,onBlock:r,onError:n,includeTransactions:o,poll:s,pollingInterval:l=a.pollingInterval}){let c=typeof s<"u"?s:a.transport.type!=="webSocket",u=o??!1,p;return c?(()=>{let _=je(["watchBlocks",a.uid,t,e,i,u,l]);return Jt(_,{onBlock:r,onError:n},y=>Ki(async()=>{try{let C=await ue(a,Zt,"getBlock")({blockTag:t,includeTransactions:u});if(C.number&&p?.number){if(C.number===p.number)return;if(C.number-p.number>1&&e)for(let A=p?.number+1n;A<C.number;A++){let H=await ue(a,Zt,"getBlock")({blockNumber:A,includeTransactions:u});y.onBlock(H,p),p=H}}(!p?.number||t==="pending"&&!C?.number||C.number&&C.number>p.number)&&(y.onBlock(C,p),p=C)}catch(C){y.onError?.(C)}},{emitOnBegin:i,interval:l}))})():(()=>{let _=!0,y=()=>_=!1;return(async()=>{try{let{unsubscribe:C}=await a.transport.subscribe({params:["newHeads"],onData(A){if(!_)return;let G=(a.chain?.formatters?.block?.format||Ec)(A.result);r(G,p),p=G},onError(A){n?.(A)}});y=C,_||y()}catch(C){n?.(C)}})(),()=>y()})()}li();Lt();Zo();function Vv(a,{address:t,args:e,batch:i=!0,event:r,events:n,onError:o,onLogs:s,poll:l,pollingInterval:c=a.pollingInterval,strict:u}){let p=typeof l<"u"?l:a.transport.type!=="webSocket",b=u??!1;return p?(()=>{let y=je(["watchEvent",t,e,i,a.uid,r,c]);return Jt(y,{onLogs:s,onError:o},C=>{let A,H,G=!1,Z=Ki(async()=>{if(!G){try{H=await ue(a,Yc,"createEventFilter")({address:t,args:e,event:r,events:n,strict:b})}catch{}G=!0;return}try{let D;if(H)D=await ue(a,Qa,"getFilterChanges")({filter:H});else{let W=await ue(a,Yi,"getBlockNumber")({});A&&A!==W?D=await ue(a,jn,"getLogs")({address:t,args:e,event:r,events:n,fromBlock:A+1n,toBlock:W}):D=[],A=W}if(D.length===0)return;if(i)C.onLogs(D);else for(let W of D)C.onLogs([W])}catch(D){H&&D instanceof Gi&&(G=!1),C.onError?.(D)}},{emitOnBegin:!0,interval:c});return async()=>{H&&await ue(a,Za,"uninstallFilter")({filter:H}),Z()}})})():(()=>{let y=!0,C=()=>y=!1;return(async()=>{try{let A=n??(r?[r]:void 0),H=[];A&&(H=[A.flatMap(Z=>Di({abi:[Z],eventName:Z.name,args:e}))],r&&(H=H[0]));let{unsubscribe:G}=await a.transport.subscribe({params:["logs",{address:t,topics:H}],onData(Z){if(!y)return;let D=Z.result;try{let{eventName:W,args:J}=kr({abi:A??[],data:D.data,topics:D.topics,strict:b}),me=Gt(D,{args:J,eventName:W});s([me])}catch(W){let J,me;if(W instanceof di||W instanceof Ti){if(u)return;J=W.abiItem.name,me=W.abiItem.inputs?.some(Ee=>!("name"in Ee&&Ee.name))}let Be=Gt(D,{args:me?[]:{},eventName:J});s([Be])}},onError(Z){o?.(Z)}});C=G,y||C()}catch(A){o?.(A)}})(),()=>C()})()}li();function Gv(a,{batch:t=!0,onError:e,onTransactions:i,poll:r,pollingInterval:n=a.pollingInterval}){return(typeof r<"u"?r:a.transport.type!=="webSocket")?(()=>{let c=je(["watchPendingTransactions",a.uid,t,n]);return Jt(c,{onTransactions:i,onError:e},u=>{let p,b=Ki(async()=>{try{if(!p)try{p=await ue(a,$c,"createPendingTransactionFilter")({});return}catch(_){throw b(),_}let x=await ue(a,Qa,"getFilterChanges")({filter:p});if(x.length===0)return;if(t)u.onTransactions(x);else for(let _ of x)u.onTransactions([_])}catch(x){u.onError?.(x)}},{emitOnBegin:!0,interval:n});return async()=>{p&&await ue(a,Za,"uninstallFilter")({filter:p}),b()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{let{unsubscribe:p}=await a.transport.subscribe({params:["newPendingTransactions"],onData(b){if(!c)return;let x=b.result;i([x])},onError(b){e?.(b)}});u=p,c||u()}catch(p){e?.(p)}})(),()=>u()})()}function zv(a){return{call:t=>Wi(a,t),createBlockFilter:()=>nv(a),createContractEventFilter:t=>ac(a,t),createEventFilter:t=>Yc(a,t),createPendingTransactionFilter:()=>$c(a),estimateContractGas:t=>vg(a,t),estimateGas:t=>zn(a,t),getBalance:t=>ov(a,t),getBlobBaseFee:()=>sv(a),getBlock:t=>Zt(a,t),getBlockNumber:t=>Yi(a,t),getBlockTransactionCount:t=>lv(a,t),getBytecode:t=>cv(a,t),getChainId:()=>qi(a),getContractEvents:t=>Cc(a,t),getEnsAddress:t=>Xg(a,t),getEnsAvatar:t=>iv(a,t),getEnsName:t=>av(a,t),getEnsResolver:t=>rv(a,t),getEnsText:t=>Kc(a,t),getFeeHistory:t=>pv(a,t),estimateFeesPerGas:t=>yg(a,t),getFilterChanges:t=>Qa(a,t),getFilterLogs:t=>mv(a,t),getGasPrice:()=>Gn(a),getLogs:t=>jn(a,t),getProof:t=>Tv(a,t),estimateMaxPriorityFeePerGas:t=>bg(a,t),getStorageAt:t=>Cv(a,t),getTransaction:t=>Jn(a,t),getTransactionConfirmations:t=>kv(a,t),getTransactionCount:t=>Tc(a,t),getTransactionReceipt:t=>os(a,t),multicall:t=>Av(a,t),prepareTransactionRequest:t=>Xa(a,t),readContract:t=>zt(a,t),sendRawTransaction:t=>Wn(a,t),simulateContract:t=>Ng(a,t),verifyMessage:t=>Nv(a,t),verifyTypedData:t=>Ov(a,t),uninstallFilter:t=>Za(a,t),waitForTransactionReceipt:t=>Hv(a,t),watchBlocks:t=>Uv(a,t),watchBlockNumber:t=>ru(a,t),watchContractEvent:t=>Vg(a,t),watchEvent:t=>Vv(a,t),watchPendingTransactions:t=>Gv(a,t)}}function ls(a){let{key:t="public",name:e="Public Client"}=a;return Vc({...a,key:t,name:e,type:"publicClient"}).extend(zv)}function Fv(a,t){let{abi:e,args:i,bytecode:r,...n}=t,o=ns({abi:e,args:i,bytecode:r});return Kn(a,{...n,data:o})}Fo();async function jv(a){return a.account?.type==="local"?[a.account.address]:(await a.request({method:"eth_accounts"})).map(e=>_r(e))}async function qv(a){return await a.request({method:"wallet_getPermissions"})}Fo();async function Wv(a){return(await a.request({method:"eth_requestAccounts"},{retryCount:0})).map(e=>Ky(e))}async function Kv(a,t){return a.request({method:"wallet_requestPermissions",params:[t]},{retryCount:0})}si();Pe();async function Yv(a,{account:t=a.account,message:e}){if(!t)throw new ji({docsPath:"/docs/actions/wallet/signMessage"});let i=tt(t);if(i.type==="local")return i.signMessage({message:e});let r=(()=>typeof e=="string"?vr(e):e.raw instanceof Uint8Array?et(e.raw):e.raw)();return a.request({method:"personal_sign",params:[r,i.address]},{retryCount:0})}si();Pe();Jo();Un();async function $v(a,t){let{account:e=a.account,chain:i=a.chain,...r}=t;if(!e)throw new ji({docsPath:"/docs/actions/wallet/signTransaction"});let n=tt(e);Fi({account:n,...t});let o=await ue(a,qi,"getChainId")({});i!==null&&Oc({currentChainId:o,chain:i});let l=(i?.formatters||a.chain?.formatters)?.transactionRequest?.format||Ya;return n.type==="local"?n.signTransaction({...r,chainId:o},{serializer:a.chain?.serializers?.transaction}):await a.request({method:"eth_signTransaction",params:[{...l(r),chainId:he(o),from:n.address}]},{retryCount:0})}si();Ei();li();async function Xv(a,t){let{account:e=a.account,domain:i,message:r,primaryType:n}=t;if(!e)throw new ji({docsPath:"/docs/actions/wallet/signTypedData"});let o=tt(e),s={EIP712Domain:Qc({domain:i}),...t.types};if(Xc({domain:i,message:r,primaryType:n,types:s}),o.type==="local")return o.signTypedData({domain:i,message:r,primaryType:n,types:s});let l=je({domain:i??{},message:r,primaryType:n,types:s},(c,u)=>nt(u)?u.toLowerCase():u);return a.request({method:"eth_signTypedData_v4",params:[o.address,l]},{retryCount:0})}Pe();async function Qv(a,{id:t}){await a.request({method:"wallet_switchEthereumChain",params:[{chainId:he(t)}]},{retryCount:0})}async function Zv(a,t){return await a.request({method:"wallet_watchAsset",params:t},{retryCount:0})}function Jv(a){return{addChain:t=>Fg(a,t),deployContract:t=>Fv(a,t),getAddresses:()=>jv(a),getChainId:()=>qi(a),getPermissions:()=>qv(a),prepareTransactionRequest:t=>Xa(a,t),requestAddresses:()=>Wv(a),requestPermissions:t=>Kv(a,t),sendRawTransaction:t=>Wn(a,t),sendTransaction:t=>Kn(a,t),signMessage:t=>Yv(a,t),signTransaction:t=>$v(a,t),signTypedData:t=>Xv(a,t),switchChain:t=>Qv(a,t),watchAsset:t=>Zv(a,t),writeContract:t=>zg(a,t)}}function io(a){let{key:t="wallet",name:e="Wallet Client",transport:i}=a;return Vc({...a,key:t,name:e,transport:i,type:"walletClient"}).extend(Jv)}Lt();Ge();ja();Pe();Yo();var lu=class{constructor(){this.coins={};this.needTip=!0}};var Hr=(D=>(D[D.MAINNET=1]="MAINNET",D[D.TESTNET_RINKEBY=4]="TESTNET_RINKEBY",D[D.ARBITRUM=42161]="ARBITRUM",D[D.ARBITRUM_TESTNET=421611]="ARBITRUM_TESTNET",D[D.AVALANCHE=43114]="AVALANCHE",D[D.AVALANCHE_TESTNET=43113]="AVALANCHE_TESTNET",D[D.POLYGON=137]="POLYGON",D[D.POLYGON_TESTNET=80001]="POLYGON_TESTNET",D[D.FANTOM=250]="FANTOM",D[D.FANTOM_TESTNET=4002]="FANTOM_TESTNET",D[D.OPTIMISM=10]="OPTIMISM",D[D.OPTIMISM_TESTNET=69]="OPTIMISM_TESTNET",D[D.BOBA=288]="BOBA",D[D.BOBA_TESTNET=28]="BOBA_TESTNET",D[D.ESC=20]="ESC",D[D.HECO=128]="HECO",D[D.BSC=56]="BSC",D[D.BSC_TESTNET=97]="BSC_TESTNET",D[D.MATCH=9001]="MATCH",D[D.MATCH_TESTNET=9e3]="MATCH_TESTNET",D[D.CC=1331]="CC",D))(Hr||{});var Ft={id:9001,name:"MATCH",network:"MATCH",iconUrl:"",iconBackground:"#fff",nativeCurrency:{decimals:18,name:"MATCH",symbol:"MATCH"},rpcUrls:{default:{http:["https://rpc.matchscan.io"]},public:{http:["https://rpc.matchscan.io"]}},blockExplorers:{default:{name:"matchscan",url:"https://lisbon.matchscan.io"},etherscan:{name:"matchscan",url:"https://lisbon.matchscan.io"}},testnet:!1};var yL={9001:"0x3f76562685E9Cd18ba88C062bBC5999D78275734",56:"0x837656c3f5858692cCdce13BA66e09d2685073df",97:"0x6f4DceCEe81bfB85872BEaBC44C303b7c2f6c108"},gL={9001:"0x96397347Ea2beE29713Bc48749eB277D6A36A407",56:"0x837656c3f5858692cCdce13BA66e09d2685073df",97:"0x6f4DceCEe81bfB85872BEaBC44C303b7c2f6c108"},rb={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9",56:"0x55d398326f99059ff775485246999027b3197955",97:"0x44004827f2F72566E12884A38f63f72F2a5143ea"},nb={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9"},ob={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9"},RH={9001:"0x2418F7F0486deBc9270E16126F36526925EDAAE4"},sb={97:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab",9001:"0x84d225321122E69406B198e3A9B82Dc1BdF897e6"},vL={9001:"0x945103b2fEa1EAc6cea4d25e9BBaA5284d128b29"},lb={97:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab"},LL={9001:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab"};var ha=Zn({id:56,name:"BNB Smart Chain",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{default:{name:"BscScan",url:"https://bscscan.com",apiUrl:"https://api.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}});var St=Zn({id:97,name:"Binance Smart Chain Testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]}},blockExplorers:{default:{name:"BscScan",url:"https://testnet.bscscan.com",apiUrl:"https://testnet.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0});var Mi=Zn({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var or=class a{constructor(){this.create_contract=null;this.edit_account=null;this.account_contract=null;this.tokenId=0}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"}async getAccountVoFromServer(){let t=await F.requestPost("cybertron-sys-api/api/v1/account/find",{address:Y.instance.walletAddress},!1,!1);if(t){let e=new lu;return Object.assign(e,t),console.log("info========"+JSON.stringify(e)),e}return t}async createAcccount(t,e,i,r){try{var n;let c;Q.vType==2?(n=Ft.id,c=vL[n]):Q.vType==1?(n=Ft.id,c=sb[n]):(n=St.id,c=sb[n]);let u=await Y.instance.walletClient.getChainId();if(n!==u){var o=await Y.instance.switchChain(n);if(!o){K.instance.hideLoading(),console.log("切换失败，请手动切换");return}}if(!c)return K.instance.hideLoading(),te.instance.notice(f.instance.getLanguage(1173,u)),!1;var s=await Y.instance.walletClient.writeContract({account:Y.instance.walletAddress,address:c,abi:oe.CREATE_ACCOUNT_ABI,functionName:"register",args:[t,r,e,i]});return console.log("============"+s),await Y.instance.publicClient.waitForTransactionReceipt({hash:s}),console.log(`Tx successful with hash: ${s}`),console.log("============"),s}catch(c){K.instance.hideLoading();var l=c.shortMessage;if(l&&l.indexOf("does not match")!=-1&&(l=f.instance.getLanguage(1118)),console.log(l),te.instance.notice(l),c instanceof B){let u=c.walk(p=>p instanceof Qt);if(u instanceof Qt){let p=u.data?.errorName??"";console.log("============errorName: "+p)}}return null}}async updateProfile(t,e,i){var r=I.instance.playerDto.sex,n=I.instance.playerDto;let o=await F.requestPost("wxgame/player/changeInfo",{name:t,sex:r,icon:e,country:i});return o?(n.icon=o.icon,n.country=o.country,n.name=o.name,n.sex=o.sex,n):null}async getTokenId(){return this.tokenId?this.tokenId:(this.tokenId=await this.account_contract.methods.tokenOfOwnerByIndex(Y.instance.walletAddress,0).call(),this.tokenId=parseInt(this.tokenId+""),this.tokenId)}};var Bt=class{constructor(){}};Bt.UPDATE_LOCAL_WALLET_LIST_EVENT="WalletEvent:UPDATE_LOCAL_WALLET_LIST_EVENT",Bt.TRANSFER_LOCAL_WALLET_EVENT="WalletEvent:TRANSFER_LOCAL_WALLET_EVENT";var cs=class{};var sr=class a{constructor(){this.assets_ary=[];this.assets_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){typeof window.ethereum>"u"||(this.assets_contract=new window.web3.eth.Contract(oe.WITHDRAW_AND_RECHARGE_ABI,oe.WITHDRAW_AND_RECHARGE_ADDRESS))}async depositWallet(t,e){if(K.instance.showLoading(!0),!await Y.instance.allowanceAddressByTokenAddress(oe.WITHDRAW_AND_RECHARGE_ADDRESS,t)){K.instance.hideLoading(),te.instance.notice(f.instance.getLanguage(15));return}return e=window.web3.utils.toWei(e+""),await this.assets_contract.methods.recharge(t.toLowerCase(),e).send({from:Y.instance.walletAddress},(r,n)=>{if(r)return K.instance.hideLoading(),!1}),!0}async withdrawToken(t){return K.instance.showLoading(!0),await this.assets_contract.methods.withdrawToken(t.tokenAddress,t.to,t.amount,t.timestamp,t.hash,t.r,t.s,t.v).send({from:Y.instance.walletAddress},(e,i)=>{if(e)return K.instance.hideLoading(),!1}),!0}async updateAssetsBalance(){Ii.instance.walletDic==null&&(Ii.instance.walletDic=new le);for(let t of this.assets_ary){let e=t[0],i=t[1],r=await Y.instance.getERC20TokenBalance(i);r=parseInt(r);let n=Ii.instance.walletDic.get(e);n||(n=new cs,n.itemId=e,n.value=0,Ii.instance.walletDic.set(e,n)),n.ethValue=r}L.intance.event(Bt.UPDATE_LOCAL_WALLET_LIST_EVENT)}updateCwt(t){let e=Ii.instance.walletDic.get($t.ASSETS_TOX);e||(e=new cs,e.itemId=$t.ASSETS_TOX,Ii.instance.walletDic.set($t.ASSETS_TOX,e)),e.ethValue=t}async rechargeToken(t,e=null,i){try{if(!await Y.instance.newAllowanceAddress(i,e))return K.instance.hideLoading(),te.instance.notice(f.instance.getLanguage(15)),!1;let o=ar(t+"");var r=await Y.instance.walletClient.writeContract({account:Y.instance.walletAddress,address:i,abi:oe.RECHANGE_ABI,functionName:"depositToken",args:[e,o]});let s=await Y.instance.publicClient.waitForTransactionReceipt({hash:r});if(s==null)console.log("等待事务确认中...");else return console.log("事务已被确认:",s),!0}catch(n){K.instance.hideLoading(),console.log(n),n instanceof Error?n.message.includes("does not match the target chain for the transaction")?L.intance.event(v.CHANGE_ASSET_CHAIN):console.log("Error message does not contain the specified character."):console.log("An error occurred, but it is not an instance of Error.")}}};var cu=v_(_L());var ei=class{static getInviteUrl(){return window.location.origin+"?invite="+this.encode(Y.instance.walletAddress)}static encode(t){for(var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=e.length,r=e.split(""),n="",o,s,l,c,u=0;u<t.length;u++)o=t.charCodeAt(u),s=o%i,o=(o-s)/i,l=o%i,o=(o-l)/i,c=o%i,n+=r[c]+r[l]+r[s];return window.btoa(n)}static decode(t){t=window.atob(t);var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=e.length,r,n,o,s,l=0,c;c=new Array(Math.floor(t.length/3)),r=c.length;for(var u=0;u<r;u++)n=e.indexOf(t.charAt(l)),l++,o=e.indexOf(t.charAt(l)),l++,s=e.indexOf(t.charAt(l)),l++,c[u]=n*i*i+o*i+s;return r=decodeCharCode(c.join(",")),r}static getQueryString(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return i!=null?i[2]:""}static getInviteWalletAddress(){let t=this.getQueryString("invite");return t&&(t=this.decode(t)),t}static toWei(t,e){let i=t*10**parseInt(e);return window.web3.utils.toBN("0x"+i.toString(16)).toString()}static fromWei(t,e,i=0){if(!t)return 0;let r=t.length-e+i;if(r<=0)return 0;let n=t.toString().slice(0,r);if(i){let o=n.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";n=s+n}else n=n.slice(0,n.length-i)+"."+n.slice(n.length-i)}return n}static deepClone(t){let e=new le;for(let i in t)typeof t[i]=="function"?e[i]=t[i]:e[i]=JSON.parse(JSON.stringify(t[i]));return e}};var fw=`abdikace
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
`);var bw=`abandon
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
`);var yw=`abaisser
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
`);var gw=`abaco
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
`);var vw=`あいこくしん
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
`);var Lw=`가격
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
`);var _w=`的
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
`);var ww=`ábaco
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
`);var xw=`的
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
`);bL();Pe();function us(){return et(ab.utils.randomPrivateKey())}var Y=class a{constructor(){this.tokenContract=null;this.hero_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){if(typeof window.ethereum>"u"){console.log("2222"),te.instance.notice(f.instance.getLanguage("130"));return}console.log("ethereum",window.ethereum),_e.instance.sendCustumEvent(10),this.walletClient=io({transport:Yn(window.ethereum)});let t=await a.instance.walletClient.getChainId();var e=this.getChain(t);e||(te.instance.notice(f.instance.getLanguage(1171)),e=Ft),this.publicClient=ls({chain:e,transport:rs()}),this.walletClient=io({chain:e,transport:Yn(window.ethereum)});let i=await a.instance.publicClient.getChainId();console.log("clientChainId",t,i),await ff(),console.log("5555"),console.log("6666"),_e.instance.sendCustumEvent(12),this.registerProxy(),console.log("7777"),_e.instance.sendCustumEvent(17)}async registerProxy(){console.log("888"),or.instance.init()}async getWalletAddress(){if(this.walletAddress)return this.walletAddress;let[t]=await this.walletClient.requestAddresses();return console.log("address:"+t),t;if(await ff(),ft.type==ft.TYPE_TRUST)try{console.log("initWeb3 -3");let e=await ft.trustProvider.request({method:"eth_requestAccounts"});return console.log("initWeb3 -4"),console.log(e),e[0]}catch(e){console.log("initWeb3 -5"+e),e.code===4001&&console.error("User denied connection.")}else if(ft.type==ft.TYPE_WEB3)return(await window.ethereum.request({method:"eth_requestAccounts"}))[0];return null}async dappLogin(){console.log("dappLogin this.walletAddress: "+this.walletAddress),_e.instance.sendCustumEvent(13),this.walletAddress=await this.getWalletAddress(),_e.instance.sendCustumEvent(14),console.log("login to server",1),await this.signAndLogin(),console.log("login success",1)}getChainId(){let t="";return typeof window.ethereum>"u"&&(t="0x38"),(window.ethereum.chainId+"").indexOf("0x")==-1?t="0x"+window.ethereum.chainId.toString(16):t=window.ethereum.chainId,t!=="0x38"&&t!=="0x61"&&te.instance.notice(f.instance.getLanguage(18)),t}async signAndLogin(t=!1){console.log("signAndLogin mustSign: "+t);var e=!0;let i=new Date().getTime(),r="",n="",o="",s="";if(Q.Debug!=0)e=!1;else if(!t&&localStorage.getItem("TOX-COOKIE"+this.walletAddress)&&Q.Debug==0){let b=localStorage.getItem("TOX-COOKIE"+a.instance.walletAddress),x=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);x=ei.decode(x);let _=x.split("&");i=parseFloat(_[0]),r=_[1],n=_[2],o=_[3],s=_[4],b&&i&&r&&n&&o&&s&&(e=!1),console.log("needSign: "+e)}if(e){console.log("111");var l=us().substring(0,32);r=et(l,{size:32}),console.log("222"),i=new Date().getTime();let x=this.walletAddress+r+i,_=new cu.default("SHA-256","TEXT",{encoding:"UTF8"});_.update(x);let y=_.getHash("HEX");console.log("进入签名",1);let C=await this.walletClient.signMessage({account:this.walletAddress,message:y});console.log("签名结束",1);let A=C.substring(2);n="0x"+A.substring(0,64),o="0x"+A.substring(64,128),s="0x"+A.substring(128,130)}let c={debug:Q.Debug,address:this.walletAddress,time:i,randomHex:r,r:n,s:o,v:s};_e.instance.sendCustumEvent(15);let u=await F.requestPost("wxgame/player/login",c,!1,!1);if(u){console.log("服务器登录成功"),_e.instance.sendCustumEvent(16),localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,u.loginToken);var p=ei.encode(i+"&"+r+"&"+n+"&"+o+"&"+s);localStorage.setItem("TOX-COOKIE-CODE"+a.instance.walletAddress,p)}else O.intance.openModule(h.NoServerView);L.intance.event(v.EVENT_LOGIN_GAME_END,u)}async main(){let t=ls({chain:Mi,transport:rs()}),e=io({chain:Mi,transport:Yn(window.ethereum)}),i=await t.getBalance({address:"0x55d398326f99059fF775485246999027B3197955"});console.log("balance:"+i);let[r]=await e.requestAddresses();console.log("address:"+r);let n=await e.signMessage({account:r,message:"Hello world!"});console.log("address: "+r),console.log("message: Hello world!"),console.log("signature: "+n);let o=await t.verifyMessage({address:r,message:"Hello world!",signature:n});console.log("valid: "+o);let l=await(await fetch("http://localhost:3000/api/login",{method:"POST",body:JSON.stringify({address:e.account.address,signature:n})})).json();console.log("data: "+l)}async refreshToken(){let t,e=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);e=ei.decode(e);let i=e.split("&"),r=parseFloat(i[0]),n=i[1],o=i[2],s=i[3],l=i[4];if(r&&n&&o&&s&&l){let c={debug:Q.Debug,address:this.walletAddress,time:r,randomHex:n,r:o,s,v:l};t=await F.requestPost("wxgame/player/getJwt",c,!1,!1).catch(u=>{}),t&&localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,t.loginToken)}return t}async checkNickName(t){console.log("checkNickName");let e={name:t,address:this.walletAddress};return await F.requestPost("wxgame/player/nameCheck",e,!1,!1).catch(r=>{K.instance.hideLoading(),console.log("checkResult 失败")})}waitGetAccount(){Laya.timer.loop(2e3,this,this.getAcccount)}async getAcccount(){console.log("getAcccount");var t=!0;let e=new Date().getTime(),i="",r="",n="",o="";if(Q.Debug!=0)t=!1;else{let u=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);u=ei.decode(u);let p=u.split("&");e=parseFloat(p[0]),i=p[1],r=p[2],n=p[3],o=p[4],e&&i&&r&&n&&o&&(t=!1),console.log("needSign: "+t)}if(t){var s=us().substring(0,32);i=et(s,{size:32}),e=new Date().getTime();let p=this.walletAddress+i+e,b=new cu.default("SHA-256","TEXT",{encoding:"UTF8"});b.update(p);let x=b.getHash("HEX");console.log("进入签名",1);let _=await this.walletClient.signMessage({account:this.walletAddress,message:x});console.log("签名结束",1);let y=_.substring(2);r="0x"+y.substring(0,64),n="0x"+y.substring(64,128),o="0x"+y.substring(128,130)}let l,c={address:this.walletAddress,time:e,randomHex:i,r,s:n,v:o};if(l=await F.requestPost("wxgame/player/getAccount",c,!1,!1).catch(u=>{}),l){Laya.timer.clear(this,this.getAcccount);let u=l.playerDto;localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,l.loginToken),L.intance.event(v.EVENT_WAIT_PLAYERINFO,u)}}async createAcccount(t,e,i,r){console.log("createAcccount");var n=!0;let o=new Date().getTime(),s="",l="",c="",u="";if(Q.Debug!=0)n=!1;else{let _=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);_=ei.decode(_);let y=_.split("&");o=parseFloat(y[0]),s=y[1],l=y[2],c=y[3],u=y[4],o&&s&&l&&c&&u&&(n=!1),console.log("needSign: "+n)}if(n){var p=us().substring(0,32);s=et(p,{size:32}),o=new Date().getTime();let y=this.walletAddress+s+o,C=new cu.default("SHA-256","TEXT",{encoding:"UTF8"});C.update(y);let A=C.getHash("HEX");console.log("进入签名",1);let H=await this.walletClient.signMessage({account:this.walletAddress,message:A});console.log("签名结束",1);let G=H.substring(2);l="0x"+G.substring(0,64),c="0x"+G.substring(64,128),u="0x"+G.substring(128,130)}let b,x={name:t,sex:e,icon:i,country:r,debug:Q.Debug,address:this.walletAddress,time:o,randomHex:s,r:l,s:c,v:u};if(b=await F.requestPost("wxgame/player/create",x,!1,!1).catch(_=>{}),b){let _=b.playerDto;return localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,b.loginToken),_}return null}async getBalance(){return 0}async allowanceAddress(t){}async newAllowanceAddress(t,e){let i=a.instance.walletAddress,r=t;try{console.log("查看是否已经授权, owner:"+i+", spender:"+r+", publicClient.chain.id:"+this.publicClient.chain.id);let n=await a.instance.publicClient.readContract({address:e,abi:oe.TOKEN_ERC20ABI,functionName:"allowance",args:[i,r]});if(n=="0"){console.log("未授权，进行授权, owner:"+i+", allowance:"+n+", walletClient.chain.id:"+this.walletClient.chain.id);let o=await a.instance.walletClient.writeContract({address:e,abi:oe.TOKEN_ERC20ABI,functionName:"approve",args:[r,"100000000000000000000000000000000000000000000000"],account:i});return console.log("============"+o),await a.instance.publicClient.waitForTransactionReceipt({hash:o}),console.log(`Tx successful with hash: ${o}`),!0}else return console.log("已授权, owner:"+i+", allowance:"+n),!0}catch(n){if(console.log("授权错误====》",n),n instanceof Error){let o=n.message;console.log("授权错误====》",o)}}}async allowanceAddressByTokenAddress(t,e){let i=new window.web3.eth.Contract(oe.TOKEN_ERC20ABI,e);return await i.methods.allowance(this.walletAddress,t).call()=="0"&&(console.log("ERC20 allowance!"),await i.methods.approve(t,"100000000000000000000000000000000000000000000000").send({from:this.walletAddress},(n,o)=>{if(n)return K.instance.hideLoading(),!1})),!0}async getERC20TokenBalance(t){return window.ethereum,await new window.web3.eth.Contract(oe.TOKEN_ERC20ABI,t).methods.balanceOf(this.walletAddress).call()}async getBalance2(t){console.log("getBalance2 publicClient.chain.id:"+this.publicClient.chain.id);let e=this.walletAddress;return await this.publicClient.readContract({address:t,abi:oe.TOKEN_ERC20ABI,functionName:"balanceOf",args:[e]})}async getHeroStatus(t){return await this.hero_contract.methods.getStatus(parseInt(t)).call()}async checkHeroIsBuzy(t){let e=await this.getHeroStatus(t);return parseInt(e)?(te.instance.notice(f.instance.getLanguage(19)),!0):!1}async switchChain(t){var e=this.getChainName(t);if(Q.isInto&&Laya.Browser.onIOS)return te.instance.notice(f.instance.getLanguage(1172,e)),!1;try{console.log("switchChain id:"+t),await this.walletClient.switchChain({id:t})}catch(i){if(console.log(i),i instanceof Error){let r=i.message;console.log("切换错误====》",r)}return te.instance.notice(f.instance.getLanguage(1172,e)),!1}return await this.resetPublicAndWallet(t),!0}async addChain(t){console.log(t);let e=null;switch(t){case 97:e=St;break;case 9001:e=Ft;break}let i=await this.walletClient.addChain({chain:e});console.log(i)}getChainNameByID(t){for(let e in Hr)if(Number(Hr[e])==t)return e;return""}getChain(t){var e=null;switch(t){case St.id:e=St;break;case Ft.id:e=Ft;break;case Mi.id:e=Mi;break;case ha.id:e=ha;break}return e}getChainName(t){var e="";switch(t){case St.id:e=St.name;break;case Ft.id:e=Ft.name;break;case Mi.id:e=Mi.name;break;case ha.id:e=ha.name;break}return e}getCoinAddress(t){var e={};switch(t){case Oe.TYPE_TOX:e=Q.vType==0?gL:yL;break;case Oe.TYPE_USDT:e=Q.vType==0?rb:rb;break;case Oe.TYPE_BTC:e=Q.vType==0?nb:nb;break;case Oe.TYPE_ETH:e=Q.vType==0?ob:ob;break}return e}async resetPublicAndWallet(t){switch(console.log("resetPublicAndWallet chain:"+t),t){case St.id:await a.instance.reInitPublicClient(St),await a.instance.reInitWalletClient(St);break;case Ft.id:await a.instance.reInitPublicClient(Ft),await a.instance.reInitWalletClient(Ft);break;case Mi.id:await a.instance.reInitPublicClient(Mi),await a.instance.reInitWalletClient(Mi);break;case ha.id:await a.instance.reInitPublicClient(ha),await a.instance.reInitWalletClient(ha);break}}reInitPublicClient(t){console.log("reInitPublicClient chain:"+t),this.publicClient=ls({chain:t,transport:rs()})}reInitWalletClient(t){console.log("reInitWalletClient chain:"+t),this.walletClient=io({chain:t,transport:Yn(window.ethereum)})}};var fa=class fa{constructor(t,e){this._lineIndex=0;this._isShow=!1;this._alpha=.6;this.isInit=!1;this._isRelease=!0;this._count=0;this.maxCount=1e3;this.prevX=0;this.prevY=0;this._stage=t,this._isRelease=e,this._actionLineList=[],this._time=new Date().getTime();let i,r,n,o,s=function(u){i=u.stageX,r=u.stageY,n=i,o=r},l=function(u){n=u.stageX,o=u.stageY},c=function(u){let p=Laya.stage.width-(n-i)<160,b=Laya.stage.height-(o-r)<160;p&&b&&pi.debugger&&(Laya.Browser.window.console.log=pi.addConsoleLog,pi.debugger.showOrHide())};Laya.stage.on(Laya.Event.MOUSE_DOWN,this,s),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,l),Laya.stage.on(Laya.Event.MOUSE_UP,this,c)}initDebugView(){if(!this.isInit){this.totalW=Laya.stage.width,this.totalH=Laya.stage.height/2,this.bigContainer=new Laya.Sprite,this.bigContainer.zOrder=2e3,this.bigContainer.name="bigContainerDebug",this.bgContainer=new Laya.Sprite,this._bgSp=new Laya.Sprite,this._bgSp.alpha=this._alpha,this._bgSp.graphics.drawRect(0,0,this.totalW,this.totalH,"#000000"),this._bgSp.mouseEnabled=!1,this._debugInfoTf=new Laya.Text,this._debugInfoTf.color="#ffffff",this._debugInfoTf.width=this.totalW-10,this._debugInfoTf.height=this.totalH-10,this._debugInfoTf.overflow="scroll",this._debugInfoTf.wordWrap=!0;let t="[LOADINFO - DEBUGGER]";this.appendText("加载调试信息 "+t,0,!1),this._closeTf=new Laya.Label,this._closeTf.color="#ff0000",this._closeTf.valign="middle",this._closeTf.width=55,this._closeTf.height=55,this._closeTf.borderColor=fa.DEFAULT_COLOR,this._closeTf.text="关闭",this._autoScrollTf=new Laya.Label,this._autoScrollTf.color="#ff0000",this._autoScrollTf.valign="middle",this._autoScrollTf.width=55,this._autoScrollTf.height=55,this._autoScrollTf.borderColor=fa.DEFAULT_COLOR,this._autoScrollTf.text="自动卷屏",this._bgAlpha0=new Laya.Label,this._bgAlpha0.color="#ff0000",this._bgAlpha0.valign="middle",this._bgAlpha0.width=55,this._bgAlpha0.height=55,this._bgAlpha0.borderColor=fa.DEFAULT_COLOR,this._bgAlpha0.text="背景-",this._bgAlpha1=new Laya.Label,this._bgAlpha1.color="#ff0000",this._bgAlpha1.valign="middle",this._bgAlpha1.width=55,this._bgAlpha1.height=55,this._bgAlpha1.borderColor=fa.DEFAULT_COLOR,this._bgAlpha1.text="背景+",this._clearTf=new Laya.Label,this._clearTf.color="#ff0000",this._clearTf.valign="middle",this._clearTf.width=55,this._clearTf.height=55,this._clearTf.borderColor=fa.DEFAULT_COLOR,this._clearTf.text="清理",this._testTf=new Laya.Label,this._testTf.color="#ff0000",this._testTf.width=55,this._testTf.height=55,this._testTf.borderColor=fa.DEFAULT_COLOR,this._testTf.text="点穿",this.bgContainer.x=5,this.bgContainer.y=5,this._debugInfoTf.x=5,this._debugInfoTf.y=5,this.bgContainer.addChild(this._bgSp),this.bgContainer.addChild(this._debugInfoTf),this._closeTf.x=this.totalW-60,this._closeTf.y=5,this.bgContainer.addChild(this._closeTf),this._autoScrollTf.x=this.totalW-60,this._autoScrollTf.y=105,this.bgContainer.addChild(this._autoScrollTf),this._bgAlpha0.x=this.totalW-60,this._bgAlpha0.y=205,this.bgContainer.addChild(this._bgAlpha0),this._bgAlpha1.x=this.totalW-60,this._bgAlpha1.y=305,this.bgContainer.addChild(this._bgAlpha1),this._clearTf.x=this.totalW-60,this._clearTf.y=405,this.bgContainer.addChild(this._clearTf),this._testTf.x=this.totalW-60,this._testTf.y=505,this.bigContainer.addChild(this.bgContainer),this.bigContainer.addChild(this._testTf),this._autoScroll=!0,this._hide=!0,this._debugInfoTf.on(Laya.Event.MOUSE_DOWN,this,this.startScrollText),this._closeTf.on(Laya.Event.CLICK,this,this.onCloseTfClick),this._autoScrollTf.on(Laya.Event.CLICK,this,this.onAutoScrollTfClick),this._bgAlpha0.on(Laya.Event.CLICK,this,this.onBgAlpha0),this._bgAlpha1.on(Laya.Event.CLICK,this,this.onBgAlpha1),this._clearTf.on(Laya.Event.CLICK,this,this.onClearTfClick),this._testTf.on(Laya.Event.CLICK,this,this.onTestTfClick),this.isInit=!0}}show(){this.initDebugView(),this._stage.addChild(this.bigContainer),this._isShow=!0,this.updateView()}hide(){this.initDebugView(),this.bigContainer.parent&&this.bigContainer.parent.removeChild(this.bigContainer),this._isShow=!1,this.updateView()}showOrHide(){this._isShow=!this._isShow,this._isShow?this.show():this.hide()}appendText(t,e=0,i=!0){if(i){let r=new Date().getTime()-this._time;t+="  ["+(r/1e3).toFixed(3)+"]"}this._actionLineList.push([t+`
`,e]),this._lineIndex>=200&&(this._actionLineList.splice(0,20),this._lineIndex-=20),this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf&&(this._debugInfoTf.text="")),this._isShow&&(this._currentLine=this._actionLineList[this._lineIndex++],this._debugInfoTf&&(this._debugInfoTf.text+=this._currentLine[0]),this._autoScroll&&this._debugInfoTf&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY))}updateView(){if(this._isShow){this._count=0,this._debugInfoTf.text="";let t=this._actionLineList.length;for(this._lineIndex=0;this._lineIndex<t;++this._lineIndex)this._currentLine=this._actionLineList[this._lineIndex],this._debugInfoTf.text+=this._currentLine[0],this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf.text="");this._autoScroll&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY)}else this._debugInfoTf.text=""}onCloseTfClick(t){this.hide()}onAutoScrollTfClick(t){this._autoScroll=!this._autoScroll,this._autoScroll?this._autoScrollTf.text="自动卷屏":this._autoScrollTf.text="手动卷屏"}onBgAlpha0(t){this._alpha-=.1,this._alpha<=0&&(this._alpha=0),this._bgSp.alpha=this._alpha}onBgAlpha1(t){this._alpha+=.1,this._alpha>=1&&(this._alpha=1),this._bgSp.alpha=this._alpha}onClearTfClick(t){this._debugInfoTf.text="",this._actionLineList.length=0,this._lineIndex=0}onTestTfClick(t){this.bgContainer.mouseEnabled=!this.bgContainer.mouseEnabled}set testFun(t){this._testFun=t}get bgSp(){return this._bgSp}startScrollText(t){this.prevX=this._debugInfoTf.mouseX,this.prevY=this._debugInfoTf.mouseY,Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.finishScrollText)}finishScrollText(t){Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.finishScrollText)}scrollText(t){let e=this._debugInfoTf.mouseX,i=this._debugInfoTf.mouseY;this._debugInfoTf.scrollX+=this.prevX-e,this._debugInfoTf.scrollY+=this.prevY-i,this.prevX=e,this.prevY=i}};fa.DEFAULT_COLOR="#ffffff";var uu=fa;var pi=class a{static Initialize(t,e){a.isRelease=e,this.debugger==null&&(this.debugger=new uu(t,e))}static log(t,e=0,i=0){var r=ge.GetLogTime+" "+t;e&&a.addLog(r,e,i)}static addLog(t,e=0,i=0){this.debugger&&this.debugger.appendText(t,i),console.log(t)}static addConsoleLog(...t){a.debugger&&a.debugger.appendText(t,0)}};var wt=class a{constructor(){this.inMinWaiting=!1}openMinView(){this.enterRoomSpr||(this.enterRoomSpr=this.enterRoomPrefab.create()),this.enterRoomSpr.x=Laya.stage.width>>1,this.enterRoomSpr.y=0,this.enterRoomSpr.zOrder=1e3,Laya.stage.addChild(this.enterRoomSpr),this.inMinWaiting=!0}closeMinView(){this.enterRoomSpr&&this.enterRoomSpr.removeSelf(),this.inMinWaiting=!1}openMaxView(){this.closeMinView(),O.intance.openModule(h.EnterRoomView)}static get instance(){return a._instance==null&&(a._instance=new a),a._instance}init(){this.closeMinView(),this.initRoomData(),Laya.timer.loop(1e3,this,this.onRefreshRoom)}updateBattleCD(){$.instance.coolDownTime=Math.round($.instance.roomDto.joinCd/1e3),L.intance.event(v.EVENT_UPDATE_MATCH_ROOM),$.instance.coolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):this.onGoMatch()}onSetCoolTime(){$.instance.coolDownTime>=0?$.instance.coolDownTime--:this.onGoMatch()}async onGoMatch(){Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.clear(this,this.onRefreshRoom);let t=await F.requestPost("wxgame/room/info",{roomId:$.instance.roomDto.roomId});var e=t.roomDto;e.joinCd==0?t.roomDto.enterGame==1?(Laya.timer.clearAll(this),Xe.instance.initSocket(),this.closeMinView()):(this.close(),L.intance.event(v.EVENT_ENTER_MATCH_ROOM,!0),ge.commTipWithYes(De.instance.get(25))):($.instance.roomDto=e,this.updateBattleCD())}initRoomData(){var t=$.instance.roomDto.members.length,e=$.instance.currArenaItem.numberMax;if(t>=e){this.onGoMatch();return}this.updateBattleCD()}async onRefreshRoom(){let t=await F.requestPost("wxgame/room/info",{roomId:$.instance.roomDto.roomId});$.instance.roomDto=t.roomDto,this.initRoomData(),$.instance.setMatchRes()}close(){Laya.timer.clearAll(this),L.intance.event(v.EVENT_CLOSE_MODULE,h.EnterRoomView),this.closeMinView()}};var wL=Laya.HttpRequest,ti=class ti{static requestGet(t,e,i=!1,r=!0){return new Promise((n,o)=>{var s=Laya.Pool.getItem("HttpRequest");s||(s=new wL),s.http.timeout=2e3,s.on(Laya.Event.COMPLETE,null,b),s.on(Laya.Event.ERROR,null,x),s.http.onreadystatechange=()=>{if(s.http.readyState===XMLHttpRequest.DONE){var y=s.http.status;y>=200&&y<400||(o(),_())}};let l=localStorage.getItem("TOX-COOKIE"+Y.instance.walletAddress),c=["Content-Type","application/json"];l&&(c=[...c,"Authorization",l]);let u=ti.httpRoot+"/"+t+p(e);ti.httpRoot!="https://api.cybertron.world"&&pi.log("REQUEST_GET "+u,1),s.send(u,null,"get","json",c);function p(y){if(typeof y=="string")return y;let C="";for(let A in y)C+="&"+A+"="+y[A];return C}function b(y){y.code==="0"?n(y.data):(De.instance.showErrorWord(parseInt(y.code)),o(y.code)),_()}function x(y,C){debugger;o(y),_()}function _(){s.off(Laya.Event.COMPLETE,null,b),s.off(Laya.Event.ERROR,null,x),Laya.Pool.recover("HttpRequest",s)}})}static startHeart(){Laya.timer.loop(1e3,this,this.onHeart)}static async onHeart(){let t=new Date().getTime();var e=await this.requestPost("wxgame/sys/ping",{},!0,!0),r=new Date().getTime()-t;L.intance.event(v.EVENT_Game_Delay,r);var n=e.time;I.instance.m_serverTime=n;var o=e.resChange;I.instance.playerDto.fightHeroPk=e.fightHeroPk;var s=e.itemChange;o&&o.length>0&&(I.instance.moneyInfoHander(o,!0,!1),L.intance.event(Bt.UPDATE_LOCAL_WALLET_LIST_EVENT)),s&&s.length>0&&I.instance.itemsDataUpdataHandler(s,!0,!1),e.redPoint&&(I.instance.redDotData=e.redPoint)}static requestPost(t,e,i=!1,r=!0){let n=localStorage.getItem("TOX-COOKIE"+Y.instance.walletAddress);return i&&!n?[]:new Promise((o,s)=>{var l=Laya.Pool.getItem("HttpRequest");l||(l=new wL),l.http.timeout=1e4,l.once(Laya.Event.COMPLETE,null,p),l.once(Laya.Event.ERROR,null,b);let c=[];n&&r&&(c=[...c,"Authorization",n]);var u=ti.seq+1;ti.seq=u,ti.httpRoot!="https://api.cybertron.world"&&t!="wxgame/sys/ping"&&console.log(ge.GetLogTime+" "+u+" >>> HTTP_POST "+ti.httpRoot+"/"+t+" "+JSON.stringify(e),n),l.send(ti.httpRoot+"/"+t,e,"post","json",c);async function p(_){if(ti.httpRoot!="https://api.cybertron.world"&&(Q.Debug>0||t!="wxgame/sys/ping")&&console.log(ge.GetLogTime+" "+u+" <<< hTTP_RCV data: "+JSON.stringify(_),1),_.errorCode==0||_.errorCode==="0")o(_);else{if(_.errorCode===10)ge.heroNotEnought();else if(_.errorCode===18)ge.titickNotEnought();else if(_.errorCode===26)ge.RemError();else if(_.errorCode!==29)if(_.errorCode===30)ge.NoHeroError(De.instance.get(_.errorCode));else if(_.errorCode===32)ge.NoHeroError(De.instance.get(_.errorCode));else if(_.errorCode===2||_.errorCode===21)ge.alertNoAll(De.instance.get(_.errorCode));else if(_.errorCode===5)if(Q.Debug==0){localStorage.setItem("TOX-COOKIE"+Y.instance.walletAddress,"");var y=await Y.instance.refreshToken();y&&ti.requestPost(t,e,i,r)}else localStorage.setItem("TOX-COOKIE"+Y.instance.walletAddress,""),De.instance.showErrorWord(parseInt(_.errorCode));else _.errorCode===17?Q.Debug==0?(localStorage.setItem("TOX-COOKIE"+Y.instance.walletAddress,""),Y.instance.signAndLogin(),De.instance.showErrorWord(parseInt(_.errorCode))):(localStorage.setItem("TOX-COOKIE"+Y.instance.walletAddress,""),De.instance.showErrorWord(parseInt(_.errorCode))):_.errorCode===9?(wt.instance.close(),ge.commTipWithYes(De.instance.get(_.errorCode))):De.instance.showErrorWord(parseInt(_.errorCode));s(_.errorCode)}x()}function b(_,y){console.log("errorHandler data: "+_,1),De.instance.showErrorWord(500),s(_),x()}function x(){l.off(Laya.Event.COMPLETE,null,p),l.off(Laya.Event.ERROR,null,b),Laya.Pool.recover("HttpRequest",l)}})}};ti.httpRoot=getServer(),ti.needHeart=!0,ti.seq=0;var F=ti;var $=class a{constructor(){this._inited=!1;this.stopAll=!1;this.heroReadyDic=new le;this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}get matchDto(){return this._matchDto}set matchDto(t){this._matchDto=t,t&&t.startTime-t.nowTime>0?this.stopAll=!0:this.stopAll=!1}setMatchRes(){this.heroReadyDic=new le;var t=this.roomDto.members.length,e=[],i=this.currArenaItem.mapid;if(this.heroReadyDic.get("map_"+i)==null){var i=a.instance.currArenaItem.mapid,r=M.instance.getMapImg(i);e.push(r);var n=M.instance.getMapPrefab(i);e.push(n),this.heroReadyDic.set("map_"+i,!0)}for(var o=0;o<t;o++){var s=this.roomDto.members[o];if(this.heroReadyDic.get(s.heroId+"_"+s.heroColor)==null){var l=j.intance.m_dicHeros.get(s.heroId),c=M.instance.getHeroSkRes(l.serialId,s.heroColor);e.push({url:c,type:Laya.Loader.SPINE}),this.heroReadyDic.set(s.heroId+"_"+s.heroColor,!0)}}e.length>0&&Laya.loader.load(e,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{})}onPreAssetPress1(t){}async checkMatchRankData(){if(this.reward==null){let t=await F.requestPost("wxgame/room/balanceInfo",{roomId:a.instance.matchDto.roomId});Xe.instance.isMatching=!1,a.instance.reward==null&&(a.instance.reward=t.reward,O.intance.openModule(h.MatchEndRankView,t.rankList))}}onGoMatchEndRank(t,e){Xe.instance.isMatching=!1,this.reward==null&&(a.instance.reward=e,O.intance.openModule(h.MatchEndRankView,t))}clearData(){this.roomDto=null,this.matchDto=null,this.reward=null,this.heroReadyDic=null,this.currArenaItem=null,N.instance.clearData(),F.needHeart=!0,Ae.instance.playMusicByName(Ae.soundName_bg,".mp3"),Ve.instance.needPop=!0,Yt.instance.startShow()}};var ps=class ps{constructor(){this.targetId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return ps.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeStringStringMap(e.param),t.writeInt(e.skillId),t.writeLong(e.targetId),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new ps,i=t.readStringStringMap();e.param=i;let r=t.readInt();e.skillId=r;let n=t.readLong();e.targetId=n;let o=t.readInt();return e.type=o,e}};ps.PROTOCOL_ID=1031;var pb=ps,pu=pb;var ms=class ms{constructor(){this.targetId=0;this.attackType=0;this.skillId=0}protocolId(){return ms.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.attackType),t.writeInt(e.skillId),t.writeLong(e.targetId))}static read(t){if(!t.readBoolean())return null;let e=new ms,i=t.readInt();e.attackType=i;let r=t.readInt();e.skillId=r;let n=t.readLong();return e.targetId=n,e}};ms.PROTOCOL_ID=1021;var mb=ms,mu=mb;var ds=class ds{protocolId(){return ds.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new ds:null}};ds.PROTOCOL_ID=1025;var db=ds,du=db;var hs=class hs{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return hs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeInt(e.dire),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new hs,i=t.readInt();e.area=i;let r=t.readInt();e.dire=r;let n=t.readInt();e.speed=n;let o=t.readLong();e.time=o;let s=t.readInt();e.x=s;let l=t.readInt();return e.y=l,e}};hs.PROTOCOL_ID=1013;var hb=hs,hu=hb;var fs=class fs{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.skillId=0;this.sourceId=0;this.time=0}protocolId(){return fs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.skillId),t.writeLong(e.sourceId),t.writeLong(e.targetId),t.writeInt(e.targetX),t.writeInt(e.targetY),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new fs,i=t.readInt();e.skillId=i;let r=t.readLong();e.sourceId=r;let n=t.readLong();e.targetId=n;let o=t.readInt();e.targetX=o;let s=t.readInt();e.targetY=s;let l=t.readLong();return e.time=l,e}};fs.PROTOCOL_ID=1035;var fb=fs,fu=fb;var Tt=class a{constructor(){}static judgePosition(t,e){let i=Math.atan2(e,t)*180/Math.PI;return i<0&&(i+=360),Math.floor(i)}static distancePoint(t,e,i,r){return Math.sqrt((t-i)*(t-i)+(e-r)*(e-r))}get2D_Distance(t,e){return Math.sqrt(Math.pow(Math.abs(t),2)+Math.pow(Math.abs(e),2))}static rollCharacterByDir(t,e,i,r){let n=i;return a.rollCharacter(t,e,n,r)}static rollCharacter(t,e,i,r){let n=i*(Math.PI/180);var o=t+r*Math.cos(n),s=e+r*Math.sin(n),l=$.instance.currArenaItem.mapid,c=j.intance.m_dicMaps.get(l),u=c.offset;return o<u?o=u:o>c.width-u&&(o=c.width-u),s<u?s=u:s>c.height-u&&(s=c.height-u),console.log(`新的坐标：X=${o}, Y=${s}`),[o,s]}static createDirectPath(t,e,i,r=40,n=25){for(var o=[],s=i*Math.PI/180,l=1;l<r;++l){var c=t,u=e+n*l,p=-(u-e)*Math.sin(s)+t,b=(u-e)*Math.cos(s)+e;o.push(p,b)}return o}static pointsBack(t,e){if(e<=0||!t||t.length<4)return t;for(var i=0,r=-1,n=-1,o=0;o<t.length;o+=2){var s=t[o],l=t[o+1];r>0&&n>0&&(i+=this.distancePoint(r,n,s,l)),r=s,n=l}if(i<e)return null;for(var c=t.concat(),u=0,p=0;c&&c.length>=4&&u<e;){var b=c.pop(),x=c.pop(),_=c[c.length-1],y=c[c.length-2];if(u+=this.distancePoint(y,_,x,b),p=u-e,p>0){var C=Math.atan2(_-b,y-x),A=C*180/Math.PI+90;C=A*Math.PI/180;var H=_+p,G=-(H-_)*Math.sin(C)+y,Z=(H-_)*Math.cos(C)+_;c.push(G,Z)}}return c}static createLinePath(t,e,i,r,n=25,o=0){var s=[],l=Math.atan2(r-e,i-t);l=(l*180/Math.PI-90)*Math.PI/180;for(var c=this.distancePoint(t,e,i,r)-o,u=0,p=0;c>u;){var b=t,x=e+n*p,_=-(x-e)*Math.sin(l)+t,y=(x-e)*Math.cos(l)+e;u=this.distancePoint(t,e,_,y),c>u&&s.push(_,y),p++}return o==0&&s.push(i,r),s}static rolePosTransform(t,e,i){var r=new Laya.Matrix;return r.rotate(Math.PI/180*(t.modelAngle-90)),r.translate(e.x,e.y),r.transformPoint(i)}static pointtInPolygon(t,e){for(var i=0,r=0;r<e.length;r++){var n=e[r],o=e[(r+1)%e.length];if(n.y!=o.y&&!(t.y<Math.min(n.y,o.y))&&!(t.y>=Math.max(n.y,o.y))){var s=(t.y-n.y)*(o.x-n.x)/(o.y-n.y)+n.x;s>t.x&&i++}}return i%2==1}static pointInPie(t,e,i,r,n,o){var s=Math.atan2(o.y-e,o.x-t)*180/Math.PI,l=this.distancePoint(t,e,o.x,o.y);return s>=i&&s<=r&&l<=n}static getRandInRound(t,e){return Math.floor(Math.random()*(e-t+1))+t}static getUnitVector(t){let i=t*(Math.PI/180),r=1*Math.cos(i),n=1*Math.sin(i);return new Laya.Point(r,n)}static subtract(t,e){let i=new Laya.Point;return i.x=t.x-e.x,i.y=t.y-e.y,i}};var ii=class ii{constructor(){this.validEnemyList=[];this.gameWindowX=0;this.gameWindowY=0;this.isControl=!1}get gameMap(){return this._gameMap}set gameMap(t){this._gameMap=t}clearData(){this.gameMap=null,this.box_players=null,this.myHeroSpr=null,this.matchHeroSmallDic=null,this.matchHeroSprDic=null,this.matchHeroSprs=null,this.matchHeroDic=null,this.myPlayer=null,this.allOrders=null}static get instance(){return ii._instance==null&&(ii._instance=new ii),ii._instance}init(){this.validEnemyList=[]}insertValidList(t){this.isFInd(t,this.validEnemyList)||this.validEnemyList.push(t)}isFInd(t,e){var i=!1;(!t||!e||e.length<=0)&&(i=!1);for(let r=0;r<e.length;r++)if(e[r]==t)return!0;return i}isFIndIndex(t,e){var i=-1;(!t||!e||e.length<=0)&&(i=-1);for(let r=0;r<e.length;r++)e[r]==t&&(i=r);return i}removeValidListByValue(t){if(!(!t||!this.validEnemyList||this.validEnemyList.length<=0)){var e=this.isFIndIndex(t,this.validEnemyList);e!=-1&&this.validEnemyList.splice(e,1)}}initMatch(t,e){Laya.loader.load("scenes/match/MatchHeroSpr.lh").then(i=>{this.roleAniPrefab=i,this.createPlayers(t),e&&e(t)})}updateMatch(t,e){this.updatePlayers(),e&&e(t)}createPlayers(t){this.matchHeroDic=new le,this.matchHeroSprDic=new le,this.matchHeroSmallDic=new le,this.matchHeroSprs=[],this.allOrders||(this.allOrders=[]);let e=$.instance.matchDto.members.length;for(var i=0;i<e;i++){var r=$.instance.matchDto.members[i],n=new Laya.Image;n.anchorX=0,n.anchorY=0,n.skin="res/match1/img_point_1.png",t.img_smallMap.addChild(n),this.matchHeroSmallDic.set(r.id,n);let o=this.roleAniPrefab.create();o.dataSource=r,I.instance.playerDto.pid==r.id&&(this.myPlayer=r,n.skin="res/match1/img_point_2.png",this.setCurrentHero(o)),this.matchHeroDic.set(r.id,r),this.box_players.addChild(o),this.matchHeroSprs.push(o),this.allOrders.push(o),this.matchHeroSprDic.set(r.id,o)}}updatePlayers(){this.matchHeroSprs=[];let t=$.instance.matchDto.members.length;for(var e=0;e<t;e++){var i=$.instance.matchDto.members[e];let r=this.matchHeroSprDic.get(i.id);r.dataSource=i,I.instance.playerDto.pid==i.id&&(this.myPlayer=i,this.setCurrentHero(r)),this.matchHeroDic.set(i.id,i),this.matchHeroSprs.push(r)}}addPlayer(t){if(t.type==1){if(this.matchHeroSprs){if(I.instance.playerDto.pid==t.member.id){console.log("自己不处理 :"+t.member.id);return}let e=this.getRoleById(t.member.id);if(e)e.dataSource=t.member,e.alpha=1;else{let i=this.roleAniPrefab.create();i.dataSource=t.member,this.box_players.addChild(i),this.matchHeroSprs.push(i)}}}else this.removeRoleById(t.member.id)}onSendMove(t,e,i,r,n,o,s){if(I.instance.playerDto.pid==e){let l=new hu;l.time=t,l.speed=i,l.dire=r,l.x=n,l.y=o,l.area=s,Xe.instance.sendData(l)}}onSendTargetMove(t,e,i,r,n,o=0){if(I.instance.playerDto.pid==e){let s=new fu;s.time=t,s.targetId=i,s.targetX=r,s.targetY=n,s.skillId=o,s.sourceId=e,Xe.instance.sendData(s)}}onSendAnimation(t,e,i=-1,r=-1,n=-1){let o=new pu;o.skillId=t,o.type=e,o.targetId=i,o.param.set("newX",`${r}`),o.param.set("newY",`${n}`),Xe.instance.sendData(o)}onRevAnimationPush(t){var e=ii.instance.getRoleById(t.attId);t.attId!=I.instance.playerDto.pid&&e.attack(t.skillId,!1,t.param)}onSendAttack(t,e,i){let r=new mu;r.targetId=t,r.attackType=e,r.skillId=i,Xe.instance.sendData(r)}onRevMovePush(t){if(!(t==null||t.pid==I.instance.playerDto.pid)){var e=ii.instance.getRoleById(t.pid);e?e.onPushMoveData(t.time,t.speed,t.dire,t.x,t.y,t.area):console.log(t.pid+" sprite is null")}}onRevTargetMovePush(t){if(t.sourceId!=I.instance.playerDto.pid){var e=ii.instance.getRoleById(t.targetId);e?e.onPushTargetMoveData(t.time,t.targetX,t.targetY):console.log(t.targetId+" sprite is null")}}onRevAttackPush(t){var e=ii.instance.getRoleById(t.attPid);if(t.attPid!=I.instance.playerDto.pid){var i=j.intance.m_dicSkills.get(t.skill);i.type!=5&&e.attack(t.skill,!1)}var r=ii.instance.getRoleById(t.defPid);r.takeDamage(t,e);var n=this.matchHeroDic.get(t.attPid),o=this.matchHeroDic.get(t.defPid);if(n.score=t.attScore,o.score=t.defScore,t.defHp<=0){var n=this.matchHeroDic.get(t.attPid);n.kill++}L.intance.event(v.UPDATE_KILL_NUM)}sendRestoreData(){if($.instance.reward==null){let t=new du;Xe.instance.sendData(t)}}onRevRestorePush(t){$.instance.matchDto=t,L.intance.event(v.EVENT_RESTORE_DATA),t&&t.startTime-t.nowTime<=0&&O.intance.disposeView(h.MatchReadyView)}getRoleById(t){let e;return this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==t){e=i;return}}),e}removeRoleById(t){var e;this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==t){e=i,i.speed=0,i.alpha=.3;return}})}getValidList(){return this.validEnemyList}playMusic(){Ae.instance.playMusicByURL("mp3/battle.mp3"),Ve.instance.needPop=!1}playSound(t){var e="";t==1?e="resources/music/pugong":t==2?e="resources/music/enemyHit":t==3&&(e="resources/music/dazhao"),Ae.instance.playSound(e+".wav",1)}setCurrentHero(t){t.isMe=!0;var e=this.myHeroSpr==null;this.myHeroSpr=t,ii.instance.moveGameWindow(!0),this.myHeroSpr.initBirth(e)}getAttackTarget(t){console.log("getAttackTarget");var e=t.distance,i=t.targetsType;if(i==1){let n=new Laya.Point(this.myHeroSpr.x,this.myHeroSpr.y),o=Tt.getUnitVector(this.myHeroSpr.roleDirection);var r=[];return this.matchHeroSprs&&this.matchHeroSprs.forEach(s=>{if(!s._isDead&&!s.isMe){var l=this.getEnemyDistance(s);if(l<=e){let c=new Laya.Point(s.x,s.y),u=Tt.subtract(c,n);u.x*o.x+u.y*o.y>0&&r.push(s)}}}),r}else if(i==2){let n,o=1e4;if(this.matchHeroSprs&&this.matchHeroSprs.forEach(s=>{if(!s._isDead&&!s.isMe){var l=this.getEnemyDistance(s);l<=e&&l<o&&this.canAttack(this.myHeroSpr,s)&&(n=s,o=l)}}),n)return[n]}return[]}getEnemyDistance(t){return Math.sqrt(Math.pow(t.x-this.myHeroSpr.x,2)+Math.pow(t.y-this.myHeroSpr.y,2))}canAttack(t,e){let i=new Laya.Vector2;i.x=e.x-t.x,i.y=e.y-t.y;let r=Tt.getUnitVector(this.myHeroSpr.roleDirection),n=Math.atan2(i.y,i.x)-Math.atan2(r.y,r.x);n<0&&(n+=2*Math.PI),n=n*180/Math.PI,console.log("angle 2: "+n);let o=90;return n<o||n>360-o}canTui(t,e){let i=new Laya.Vector2;i.x=e.x-t.x,i.y=e.y-t.y;let r=Tt.getUnitVector(this.myHeroSpr.roleDirection),n=Math.atan2(i.y,i.x)-Math.atan2(r.y,r.x);n<0&&(n+=2*Math.PI),n=n*180/Math.PI,console.log("angle 2: "+n);let o=45;return n<o||n>360-o}setMyHeroDirection(t){this.myHeroSpr&&(t!=-4?(this.myHeroSpr.myRoleDirection=t,this.myHeroSpr.speed=this.myHeroSpr.moveSpeed,this.myHeroSpr.inControl=!0,this.isControl=!0):(this.myHeroSpr.speed=0,this.myHeroSpr.inControl=!1,this.isControl=!1))}moveGameWindow(t=!1){if(this.myHeroSpr){this.gameWindowX=this.myHeroSpr.x-Laya.stage.width/2,this.gameWindowY=this.myHeroSpr.y-Laya.stage.height/2;var e=-this.gameWindowX,i=-this.gameWindowY,r=Laya.stage.width-this.gameMap.width,n=Laya.stage.height-this.gameMap.height;e>0?e=0:e<r?e=r:e=e,i>0?i=0:i<n?i=n:i=i,t?this.gameMap.pos(e,i,!0):Laya.Tween.to(this.gameMap,{x:e,y:i},500)}}};ii._instance=null;var N=ii;var bs=class bs{constructor(){this.module=0;this.errorCode=0;this.errorMessage=""}protocolId(){return bs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writeString(e.errorMessage),t.writeInt(e.module))}static read(t){if(!t.readBoolean())return null;let e=new bs,i=t.readInt();e.errorCode=i;let r=t.readString();e.errorMessage=r;let n=t.readInt();return e.module=n,e}};bs.PROTOCOL_ID=101;var bb=bs,ys=bb;var gs=class gs{protocolId(){return gs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new gs:null}};gs.PROTOCOL_ID=103;var yb=gs,bu=yb;var vs=class vs{constructor(){this.time=0}protocolId(){return vs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.time)}static read(t){if(!t.readBoolean())return null;let e=new vs,i=t.readLong();return e.time=i,e}};vs.PROTOCOL_ID=104;var gb=vs,xL=gb;var Ls=class Ls{constructor(){this.pid=0;this.roomId=0;this.loginToken=""}protocolId(){return Ls.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeString(e.loginToken),t.writeLong(e.pid),t.writeLong(e.roomId))}static read(t){if(!t.readBoolean())return null;let e=new Ls,i=t.readString();e.loginToken=i;let r=t.readLong();e.pid=r;let n=t.readLong();return e.roomId=n,e}};Ls.PROTOCOL_ID=1001;var vb=Ls,yu=vb;var _s=class _s{constructor(){this.errorCode=0;this.pid=0;this.matchDto=null}protocolId(){return _s.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writePacket(e.matchDto,25010),t.writeLong(e.pid))}static read(t){if(!t.readBoolean())return null;let e=new _s,i=t.readInt();e.errorCode=i;let r=t.readPacket(25010);e.matchDto=r;let n=t.readLong();return e.pid=n,e}};_s.PROTOCOL_ID=1002;var Lb=_s,gu=Lb;var ws=class ws{protocolId(){return ws.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new ws:null}};ws.PROTOCOL_ID=1004;var _b=ws,vu=_b;var xs=class xs{constructor(){this.sequence=0;this.param=""}protocolId(){return xs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeString(e.param))}static read(t){if(!t.readBoolean())return null;let e=new xs;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let r=t.readString();return e.param=r,e}};xs.PROTOCOL_ID=1005;var wb=xs,IL=wb;var Is=class Is{constructor(){this.sequence=0;this.code=0}protocolId(){return Is.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeInt(e.code))}static read(t){if(!t.readBoolean())return null;let e=new Is;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let r=t.readInt();return e.code=r,e}};Is.PROTOCOL_ID=1006;var xb=Is,EL=xb;var Es=class Es{constructor(){this.sequence=0;this.token=""}protocolId(){return Es.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeString(e.token))}static read(t){if(!t.readBoolean())return null;let e=new Es;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let r=t.readString();return e.token=r,e}};Es.PROTOCOL_ID=1007;var Ib=Es,SL=Ib;var Ss=class Ss{constructor(){this.sequence=0;this.errorCode=0}protocolId(){return Ss.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeInt(e.errorCode))}static read(t){if(!t.readBoolean())return null;let e=new Ss;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let r=t.readInt();return e.errorCode=r,e}};Ss.PROTOCOL_ID=1008;var Eb=Ss,TL=Eb;var Ts=class Ts{protocolId(){return Ts.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new Ts:null}};Ts.PROTOCOL_ID=1010;var Sb=Ts,CL=Sb;var Cs=class Cs{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return Cs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.type),t.writeInt(e.id),t.writeLong(e.count))}static read(t){if(!t.readBoolean())return null;let e=new Cs;if(!t.isReadable())return e;let i=t.readInt();if(e.type=i,!t.isReadable())return e;let r=t.readInt();if(e.id=r,!t.isReadable())return e;let n=t.readLong();return e.count=n,e}};Cs.PROTOCOL_ID=1012;var Tb=Cs,kL=Tb;var ks=class ks{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.errorCode=0;this.time=0}protocolId(){return ks.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.dire),t.writeInt(e.errorCode),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new ks,i=t.readInt();e.dire=i;let r=t.readInt();e.errorCode=r;let n=t.readInt();e.speed=n;let o=t.readLong();e.time=o;let s=t.readInt();e.x=s;let l=t.readInt();return e.y=l,e}};ks.PROTOCOL_ID=1014;var Cb=ks,AL=Cb;var As=class As{constructor(){this.type=0;this.member=null}protocolId(){return As.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writePacket(e.member,25011),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new As,i=t.readPacket(25011);e.member=i;let r=t.readInt();return e.type=r,e}};As.PROTOCOL_ID=1016;var kb=As,Lu=kb;var Ds=class Ds{constructor(){this.pid=0;this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return Ds.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeInt(e.dire),t.writeLong(e.pid),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new Ds,i=t.readInt();e.area=i;let r=t.readInt();e.dire=r;let n=t.readLong();e.pid=n;let o=t.readInt();e.speed=o;let s=t.readLong();e.time=s;let l=t.readInt();e.x=l;let c=t.readInt();return e.y=c,e}};Ds.PROTOCOL_ID=1018;var Ab=Ds,_u=Ab;var Ms=class Ms{constructor(){this.roomId=0;this.rankList=[];this.reward=[]}protocolId(){return Ms.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writePacketList(e.rankList,25012),t.writePacketList(e.reward,25008),t.writeLong(e.roomId))}static read(t){if(!t.readBoolean())return null;let e=new Ms,i=t.readPacketList(25012);e.rankList=i;let r=t.readPacketList(25008);e.reward=r;let n=t.readLong();return e.roomId=n,e}};Ms.PROTOCOL_ID=1020;var Db=Ms,wu=Db;var Ps=class Ps{constructor(){this.errorCode=0}protocolId(){return Ps.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new Ps,i=t.readInt();return e.errorCode=i,e}};Ps.PROTOCOL_ID=1022;var Mb=Ps,DL=Mb;var Bs=class Bs{constructor(){this.attPid=0;this.defPid=0;this.attackValue=[];this.allAtkValue=0;this.bj=!1;this.sb=!1;this.skill=0;this.defHp=0;this.attScore=0;this.defScore=0}protocolId(){return Bs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.allAtkValue),t.writeLong(e.attPid),t.writeLong(e.attScore),t.writeLongList(e.attackValue),t.writeBoolean(e.bj),t.writeLong(e.defHp),t.writeLong(e.defPid),t.writeLong(e.defScore),t.writeBoolean(e.sb),t.writeInt(e.skill))}static read(t){if(!t.readBoolean())return null;let e=new Bs,i=t.readLong();e.allAtkValue=i;let r=t.readLong();e.attPid=r;let n=t.readLong();e.attScore=n;let o=t.readLongList();e.attackValue=o;let s=t.readBoolean();e.bj=s;let l=t.readLong();e.defHp=l;let c=t.readLong();e.defPid=c;let u=t.readLong();e.defScore=u;let p=t.readBoolean();e.sb=p;let b=t.readInt();return e.skill=b,e}};Bs.PROTOCOL_ID=1024;var Pb=Bs,xu=Pb;var Rs=class Rs{constructor(){this.errorCode=0;this.matchDto=null}protocolId(){return Rs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writePacket(e.matchDto,25010))}static read(t){if(!t.readBoolean())return null;let e=new Rs,i=t.readInt();e.errorCode=i;let r=t.readPacket(25010);return e.matchDto=r,e}};Rs.PROTOCOL_ID=1026;var Bb=Rs,Iu=Bb;var Ns=class Ns{constructor(){this.pid=0}protocolId(){return Ns.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.pid)}static read(t){if(!t.readBoolean())return null;let e=new Ns,i=t.readLong();return e.pid=i,e}};Ns.PROTOCOL_ID=1028;var Rb=Ns,Eu=Rb;var Os=class Os{constructor(){this.pid=0;this.kill=0}protocolId(){return Os.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.kill),t.writeLong(e.pid))}static read(t){if(!t.readBoolean())return null;let e=new Os,i=t.readInt();e.kill=i;let r=t.readLong();return e.pid=r,e}};Os.PROTOCOL_ID=1030;var Nb=Os,Su=Nb;var Hs=class Hs{constructor(){this.errorCode=0}protocolId(){return Hs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new Hs,i=t.readInt();return e.errorCode=i,e}};Hs.PROTOCOL_ID=1032;var Ob=Hs,ML=Ob;var Us=class Us{constructor(){this.attId=0;this.defId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return Us.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.attId),t.writeLong(e.defId),t.writeStringStringMap(e.param),t.writeInt(e.skillId),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Us,i=t.readLong();e.attId=i;let r=t.readLong();e.defId=r;let n=t.readStringStringMap();e.param=n;let o=t.readInt();e.skillId=o;let s=t.readInt();return e.type=s,e}};Us.PROTOCOL_ID=1034;var Hb=Us,Tu=Hb;var Vs=class Vs{constructor(){this.errorCode=0;this.time=0}protocolId(){return Vs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new Vs,i=t.readInt();e.errorCode=i;let r=t.readLong();return e.time=r,e}};Vs.PROTOCOL_ID=1036;var Ub=Vs,PL=Ub;var Gs=class Gs{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.sourceId=0;this.skillId=0;this.time=0}protocolId(){return Gs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.skillId),t.writeLong(e.sourceId),t.writeLong(e.targetId),t.writeInt(e.targetX),t.writeInt(e.targetY),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new Gs,i=t.readInt();e.skillId=i;let r=t.readLong();e.sourceId=r;let n=t.readLong();e.targetId=n;let o=t.readInt();e.targetX=o;let s=t.readInt();e.targetY=s;let l=t.readLong();return e.time=l,e}};Gs.PROTOCOL_ID=1038;var Vb=Gs,Cu=Vb;var zs=class zs{constructor(){this.time=0}protocolId(){return zs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.time)}static read(t){if(!t.readBoolean())return null;let e=new zs,i=t.readLong();return e.time=i,e}};zs.PROTOCOL_ID=1040;var Gb=zs,ku=Gb;var Fs=class Fs{constructor(){this.moveList=[]}protocolId(){return Fs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writePacketList(e.moveList,1018)}static read(t){if(!t.readBoolean())return null;let e=new Fs,i=t.readPacketList(1018);return e.moveList=i,e}};Fs.PROTOCOL_ID=1042;var zb=Fs,Au=zb;var js=class js{constructor(){this.id=0;this.value=!1}protocolId(){return js.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.id),t.writeBoolean(e.value))}static read(t){if(!t.readBoolean())return null;let e=new js,i=t.readInt();e.id=i;let r=t.readBoolean();return e.value=r,e}};js.PROTOCOL_ID=25007;var Fb=js,BL=Fb;var qs=class qs{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return qs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeDouble(e.count),t.writeLong(e.id),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new qs,i=t.readDouble();e.count=i;let r=t.readLong();e.id=r;let n=t.readInt();return e.type=n,e}};qs.PROTOCOL_ID=25008;var jb=qs,RL=jb;var Ws=class Ws{constructor(){this.id=0;this.map=0;this.maxX=0;this.maxY=0;this.players=[]}protocolId(){return Ws.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.id),t.writeInt(e.map),t.writeInt(e.maxX),t.writeInt(e.maxY),t.writePacketList(e.players,25011))}static read(t){if(!t.readBoolean())return null;let e=new Ws,i=t.readLong();e.id=i;let r=t.readInt();e.map=r;let n=t.readInt();e.maxX=n;let o=t.readInt();e.maxY=o;let s=t.readPacketList(25011);return e.players=s,e}};Ws.PROTOCOL_ID=25009;var qb=Ws,NL=qb;var Ks=class Ks{constructor(){this.arenaId=0;this.coinType=0;this.roomId=0;this.members=[];this.remainderCd=0;this.startTime=0;this.nowTime=0}protocolId(){return Ks.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.arenaId),t.writeInt(e.coinType),t.writePacketList(e.members,25011),t.writeLong(e.nowTime),t.writeLong(e.remainderCd),t.writeLong(e.roomId),t.writeLong(e.startTime))}static read(t){if(!t.readBoolean())return null;let e=new Ks,i=t.readInt();e.arenaId=i;let r=t.readInt();e.coinType=r;let n=t.readPacketList(25011);e.members=n;let o=t.readLong();e.nowTime=o;let s=t.readLong();e.remainderCd=s;let l=t.readLong();e.roomId=l;let c=t.readLong();return e.startTime=c,e}};Ks.PROTOCOL_ID=25010;var Wb=Ks,OL=Wb;var Ys=class Ys{constructor(){this.id=0;this.x=0;this.y=0;this.dire=0;this.speed=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.kill=0;this.hp=0;this.maxHp=0;this.atk=0;this.score=0;this.skillCd=new Map;this.commonCd=0;this.area=0;this.country=0;this.nodeId=0;this.lease=0}protocolId(){return Ys.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeLong(e.atk),t.writeLong(e.commonCd),t.writeInt(e.country),t.writeInt(e.dire),t.writeInt(e.heroColor),t.writeLong(e.heroId),t.writeLong(e.hp),t.writeString(e.icon),t.writeLong(e.id),t.writeInt(e.kill),t.writeInt(e.leader),t.writeInt(e.lease),t.writeLong(e.maxHp),t.writeString(e.name),t.writeInt(e.nodeId),t.writeLong(e.score),t.writeIntLongMap(e.skillCd),t.writeInt(e.speed),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new Ys,i=t.readInt();e.area=i;let r=t.readLong();e.atk=r;let n=t.readLong();e.commonCd=n;let o=t.readInt();e.country=o;let s=t.readInt();e.dire=s;let l=t.readInt();e.heroColor=l;let c=t.readLong();e.heroId=c;let u=t.readLong();e.hp=u;let p=t.readString();e.icon=p;let b=t.readLong();e.id=b;let x=t.readInt();e.kill=x;let _=t.readInt();e.leader=_;let y=t.readInt();e.lease=y;let C=t.readLong();e.maxHp=C;let A=t.readString();e.name=A;let H=t.readInt();e.nodeId=H;let G=t.readLong();e.score=G;let Z=t.readIntLongMap();e.skillCd=Z;let D=t.readInt();e.speed=D;let W=t.readInt();e.x=W;let J=t.readInt();return e.y=J,e}};Ys.PROTOCOL_ID=25011;var Kb=Ys,HL=Kb;var $s=class $s{constructor(){this.id=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.rankNum=0;this.kill=0;this.atk=0;this.score=0;this.die=!1;this.country=0;this.heroPk="";this.nodeId=0;this.lease=0}protocolId(){return $s.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.atk),t.writeInt(e.country),t.writeBoolean(e.die),t.writeInt(e.heroColor),t.writeLong(e.heroId),t.writeString(e.heroPk),t.writeString(e.icon),t.writeLong(e.id),t.writeInt(e.kill),t.writeInt(e.leader),t.writeInt(e.lease),t.writeString(e.name),t.writeInt(e.nodeId),t.writeInt(e.rankNum),t.writeLong(e.score))}static read(t){if(!t.readBoolean())return null;let e=new $s,i=t.readLong();e.atk=i;let r=t.readInt();e.country=r;let n=t.readBoolean();e.die=n;let o=t.readInt();e.heroColor=o;let s=t.readLong();e.heroId=s;let l=t.readString();e.heroPk=l;let c=t.readString();e.icon=c;let u=t.readLong();e.id=u;let p=t.readInt();e.kill=p;let b=t.readInt();e.leader=b;let x=t.readInt();e.lease=x;let _=t.readString();e.name=_;let y=t.readInt();e.nodeId=y;let C=t.readInt();e.rankNum=C;let A=t.readLong();return e.score=A,e}};$s.PROTOCOL_ID=25012;var Yb=$s,UL=Yb;var Ce=new Map;Ce.set(101,ys);Ce.set(103,bu);Ce.set(104,xL);Ce.set(1001,yu);Ce.set(1002,gu);Ce.set(1004,vu);Ce.set(1005,IL);Ce.set(1006,EL);Ce.set(1007,SL);Ce.set(1008,TL);Ce.set(1010,CL);Ce.set(1012,kL);Ce.set(1013,hu);Ce.set(1014,AL);Ce.set(1016,Lu);Ce.set(1018,_u);Ce.set(1020,wu);Ce.set(1021,mu);Ce.set(1022,DL);Ce.set(1024,xu);Ce.set(1025,du);Ce.set(1026,Iu);Ce.set(1028,Eu);Ce.set(1030,Su);Ce.set(1031,pu);Ce.set(1032,ML);Ce.set(1034,Tu);Ce.set(1035,fu);Ce.set(1036,PL);Ce.set(1038,Cu);Ce.set(1040,ku);Ce.set(1042,Au);Ce.set(25007,BL);Ce.set(25008,RL);Ce.set(25009,NL);Ce.set(25010,OL);Ce.set(25011,HL);Ce.set(25012,UL);var $b=class a{static getProtocol(t){let e=Ce.get(t);if(e===null)throw"[protocolId:"+t+"]协议不存在";return e}static write(t,e){let i=e.protocolId();t.writeInt(i),a.getProtocol(i).write(t,e)}static read(t){let e=t.readInt();return a.getProtocol(e).read(t)}},jt=$b;var VL={},GL={},vi;try{vi=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}var P=class P{constructor(t,e,i=!1){this.low=t|0,this.high=e|0,this.unsigned=i}toInt(){return this.unsigned?this.low>>>0:this.low}toNumber(){return this.unsigned?(this.high>>>0)*ao+(this.low>>>0):this.high*ao+(this.low>>>0)}toString(t=10){if(t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.equals(P.MIN_VALUE)){let n=P.fromNumber(t),o=this.divide(n),s=o.multiply(n).subtract(this);return o.toString(t)+s.toInt().toString(t)}else return"-"+this.negate().toString(t);let e=P.fromNumber(Math.pow(t,6),this.unsigned),i="",r=this;for(;;){let n=r.divide(e),s=(r.subtract(n.multiply(e)).toInt()>>>0).toString(t);if(r=n,r.isZero())return s+i;for(;s.length<6;)s="0"+s;i=""+s+i}}getHighBits(){return this.high}getHighBitsUnsigned(){return this.high>>>0}getLowBits(){return this.low}getLowBitsUnsigned(){return this.low>>>0}getNumBitsAbs(){if(this.isNegative())return this.equals(P.MIN_VALUE)?64:this.negate().getNumBitsAbs();let t=this.high!=0?this.high:this.low,e;for(e=31;e>0&&!(t&1<<e);e--);return this.high!=0?e+33:e+1}isZero(){return this.high===0&&this.low===0}isNegative(){return!this.unsigned&&this.high<0}isPositive(){return this.unsigned||this.high>=0}isOdd(){return(this.low&1)===1}isEven(){return(this.low&1)===0}equals(t){return t instanceof P||(t=P.fromValue(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low}notEquals(t){return!this.equals(t)}lessThan(t){return this.compare(t)<0}lessThanOrEqual(t){return this.compare(t)<=0}greaterThan(t){return this.compare(t)>0}greaterThanOrEqual(t){return this.compare(t)>=0}compare(t){if(t instanceof P||(t=P.fromValue(t)),this.equals(t))return 0;let e=this.isNegative(),i=t.isNegative();return e&&!i?-1:!e&&i?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.subtract(t).isNegative()?-1:1}negate(){return!this.unsigned&&this.equals(P.MIN_VALUE)?P.MIN_VALUE:this.not().add(P.ONE)}add(t){t instanceof P||(t=P.fromValue(t));let e=this.high>>>16,i=this.high&65535,r=this.low>>>16,n=this.low&65535,o=t.high>>>16,s=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,p=0,b=0,x=0;return x+=n+c,b+=x>>>16,x&=65535,b+=r+l,p+=b>>>16,b&=65535,p+=i+s,u+=p>>>16,p&=65535,u+=e+o,u&=65535,P.fromBits(b<<16|x,u<<16|p,this.unsigned)}subtract(t){return t instanceof P||(t=P.fromValue(t)),this.add(t.negate())}multiply(t){if(this.isZero())return P.ZERO;if(t instanceof P||(t=P.fromValue(t)),vi){let _=vi.mul(this.low,this.high,t.low,t.high);return P.fromBits(_,vi.get_high(),this.unsigned)}if(t.isZero())return P.ZERO;if(this.equals(P.MIN_VALUE))return t.isOdd()?P.MIN_VALUE:P.ZERO;if(t.equals(P.MIN_VALUE))return this.isOdd()?P.MIN_VALUE:P.ZERO;if(this.isNegative())return t.isNegative()?this.negate().multiply(t.negate()):this.negate().multiply(t).negate();if(t.isNegative())return this.multiply(t.negate()).negate();if(this.lessThan(jL)&&t.lessThan(jL))return P.fromNumber(this.toNumber()*t.toNumber(),this.unsigned);let e=this.high>>>16,i=this.high&65535,r=this.low>>>16,n=this.low&65535,o=t.high>>>16,s=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,p=0,b=0,x=0;return x+=n*c,b+=x>>>16,x&=65535,b+=r*c,p+=b>>>16,b&=65535,b+=n*l,p+=b>>>16,b&=65535,p+=i*c,u+=p>>>16,p&=65535,p+=r*l,u+=p>>>16,p&=65535,p+=n*s,u+=p>>>16,p&=65535,u+=e*c+i*l+r*s+n*o,u&=65535,P.fromBits(b<<16|x,u<<16|p,this.unsigned)}divide(t){if(t instanceof P||(t=P.fromValue(t)),t.isZero())throw Error("division by zero");if(vi){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;let n=(this.unsigned?vi.div_u:vi.div_s)(this.low,this.high,t.low,t.high);return P.fromBits(n,vi.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?P.UZERO:P.ZERO;let e,i,r;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.greaterThan(this))return P.UZERO;if(t.greaterThan(this.shiftRightUnsigned(1)))return P.UONE;r=P.UZERO}else{if(this.equals(P.MIN_VALUE))return t.equals(P.ONE)||t.equals(P.NEG_ONE)?P.MIN_VALUE:t.equals(P.MIN_VALUE)?P.ONE:(e=this.shiftRight(1).divide(t).shiftLeft(1),e.equals(P.ZERO)?t.isNegative()?P.ONE:P.NEG_ONE:(i=this.subtract(t.multiply(e)),r=e.add(i.divide(t)),r));if(t.equals(P.MIN_VALUE))return this.unsigned?P.UZERO:P.ZERO;if(this.isNegative())return t.isNegative()?this.negate().divide(t.negate()):this.negate().divide(t).negate();if(t.isNegative())return this.divide(t.negate()).negate();r=P.ZERO}for(i=this;i.greaterThanOrEqual(t);){e=Math.max(1,Math.floor(i.toNumber()/t.toNumber()));let n=Math.ceil(Math.log(e)/Math.LN2),o=n<=48?1:Math.pow(2,n-48),s=P.fromNumber(e),l=s.multiply(t);for(;l.isNegative()||l.greaterThan(i);)e-=o,s=P.fromNumber(e,this.unsigned),l=s.multiply(t);s.isZero()&&(s=P.ONE),r=r.add(s),i=i.subtract(l)}return r}modulo(t){if(t instanceof P||(t=P.fromValue(t)),vi){let e=(this.unsigned?vi.rem_u:vi.rem_s)(this.low,this.high,t.low,t.high);return P.fromBits(e,vi.get_high(),this.unsigned)}return this.subtract(this.divide(t).multiply(t))}not(){return P.fromBits(~this.low,~this.high,this.unsigned)}and(t){return t instanceof P||(t=P.fromValue(t)),P.fromBits(this.low&t.low,this.high&t.high,this.unsigned)}or(t){return t instanceof P||(t=P.fromValue(t)),P.fromBits(this.low|t.low,this.high|t.high,this.unsigned)}xor(t){return t instanceof P||(t=P.fromValue(t)),P.fromBits(this.low^t.low,this.high^t.high,this.unsigned)}shiftLeft(t){if(t instanceof P&&(t=t.toInt()),(t&=63)===0)return this;if(t<32){let e=this.low<<t;return P.fromBits(e,this.high<<t|this.low>>>32-t,this.unsigned)}else return P.fromBits(0,this.low<<t-32,this.unsigned)}shiftRight(t){return t instanceof P&&(t=t.toInt()),(t&=63)===0?this:t<32?P.fromBits(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):P.fromBits(this.high>>t-32,this.high>=0?0:-1,this.unsigned)}shiftRightUnsigned(t){return t instanceof P&&(t=t.toInt()),(t&=63)===0?this:t<32?P.fromBits(this.low>>>t|this.high<<32-t,this.high>>>t,this.unsigned):t===32?P.fromBits(this.high,0,this.unsigned):P.fromBits(this.high>>>t-32,0,this.unsigned)}rotateLeft(t){let e;return t instanceof P&&(t=t.toInt()),(t&=63)===0?this:t===32?P.fromBits(this.high,this.low,this.unsigned):t<32?(e=32-t,P.fromBits(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned)):(t-=32,e=32-t,P.fromBits(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned))}rotateRight(t){let e;return t instanceof P&&(t=t.toInt()),(t&=63)===0?this:t===32?P.fromBits(this.high,this.low,this.unsigned):t<32?(e=32-t,P.fromBits(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned)):(t-=32,e=32-t,P.fromBits(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned))}toSigned(){return this.unsigned?P.fromBits(this.low,this.high,!1):this}toUnsigned(){return this.unsigned?this:P.fromBits(this.low,this.high,!0)}toBytes(t){return t?this.toBytesLE():this.toBytesBE()}toBytesLE(){let t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}toBytesBE(){let t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]}static fromBytes(t,e,i){return i?P.fromBytesLE(t,e):P.fromBytesBE(t,e)}static fromBytesLE(t,e){return new P(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)}static fromBytesBE(t,e){return new P(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)}static fromInt(t,e){let i;if(e){if(t>>>=0,i=0<=t&&t<256){let n=GL[t];if(n)return n}let r=P.fromBits(t,(t|0)<0?-1:0,!0);return i&&(GL[t]=r),r}else{if(t|=0,i=-128<=t&&t<128){let n=VL[t];if(n)return n}let r=P.fromBits(t,t<0?-1:0,!1);return i&&(VL[t]=r),r}}static fromNumber(t,e){if(isNaN(t))return e?P.UZERO:P.ZERO;if(e){if(t<0)return P.UZERO;if(t>=qL)return P.MAX_UNSIGNED_VALUE}else{if(t<=-FL)return P.MIN_VALUE;if(t+1>=FL)return P.MAX_VALUE}return t<0?P.fromNumber(-t,e).negate():P.fromBits(t%ao|0,t/ao|0,e)}static fromBits(t,e,i){return new P(t,e,i)}static fromString(t,e,i){if(t.length===0)throw Error("empty string");if(t==="NaN"||t==="Infinity"||t==="+Infinity"||t==="-Infinity")return P.ZERO;if(typeof e=="number"?(i=e,e=!1):e=!!e,i=i||10,i<2||36<i)throw RangeError("radix");let r;if((r=t.indexOf("-"))>0)throw Error("interior hyphen");if(r===0)return P.fromString(t.substring(1),e,i).negate();let n=P.fromNumber(Math.pow(i,8)),o=P.ZERO;for(let s=0;s<t.length;s+=8){let l=Math.min(8,t.length-s),c=parseInt(t.substring(s,s+l),i);if(l<8){let u=P.fromNumber(Math.pow(i,l));o=o.multiply(u).add(P.fromNumber(c))}else o=o.multiply(n),o=o.add(P.fromNumber(c))}return o.unsigned=e,o}static fromValue(t,e){return typeof t=="number"?P.fromNumber(t,e):typeof t=="string"?P.fromString(t,e):P.fromBits(t.low,t.high,typeof e=="boolean"?e:t.unsigned)}};P.ZERO=P.fromInt(0),P.UZERO=P.fromInt(0,!0),P.ONE=P.fromInt(1),P.UONE=P.fromInt(1,!0),P.NEG_ONE=P.fromInt(-1),P.MAX_VALUE=P.fromBits(-1,2147483647,!1),P.MAX_UNSIGNED_VALUE=P.fromBits(-1,-1,!0),P.MIN_VALUE=P.fromBits(0,-2147483648,!1);var ro=P,zL=65536,Iw=1<<24,ao=zL*zL,qL=ao*ao,FL=qL/2,jL=ro.fromInt(Iw);var Xs=class a{constructor(t,e){this.lo=t>>>0,this.hi=e>>>0}zzEncode(){let t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this}zzDecode(){let t=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this}toLong(t){return new ro(this.lo|0,this.hi|0,!!t)}static from(t){return typeof t=="number"?a.fromNumber(t):((typeof t=="string"||t instanceof String)&&(t=ro.fromString(t)),t.low||t.high?new a(t.low>>>0,t.high>>>0):WL)}static fromNumber(t){if(t===0)return WL;let e=t<0;e&&(t=-t);let i=t>>>0,r=(t-i)/4294967296>>>0;return e&&(r=~r>>>0,i=~i>>>0,++i>4294967295&&(i=0,++r>4294967295&&(r=0))),new a(i,r)}},WL=new Xs(0,0);function Ew(a,t){let e=0;for(;t.hi;)a.writeByte(t.lo&127|128),t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7,e=e+7;for(;t.lo>127;){if(e>=56){a.writeByte(t.lo);return}a.writeByte(t.lo&127|128),t.lo=t.lo>>>7,e=e+7}a.writeByte(t.lo)}function Sw(a){let t=new Xs(0,0),e=0,i=a.length,r=0;if(i-r>4){for(;e<4;++e)if(t.lo=(t.lo|(a[r]&127)<<e*7)>>>0,a[r++]<128)return t;if(t.lo=(t.lo|(a[r]&127)<<28)>>>0,t.hi=(t.hi|(a[r]&127)>>4)>>>0,a[r++]<128)return t;e=0}else{for(;e<3;++e)if(t.lo=(t.lo|(a[r]&127)<<e*7)>>>0,a[r++]<128)return t;return t.lo=(t.lo|(a[r++]&127)<<e*7)>>>0,t}for(;e<4;++e){if(r===8)return t.hi=(t.hi|a[r]<<e*7+3)>>>0,t;if(t.hi=(t.hi|(a[r]&127)<<e*7+3)>>>0,a[r++]<128)return t}return t}function KL(a,t){let e=Xs.from(t).zzEncode();Ew(a,e)}function YL(a){return Sw(a).zzDecode().toLong(!1)}var $L="",Tw=128,Cw=655537,kw=32767,Aw=-32768,XL=2147483647,QL=-2147483648,Dw=new TextEncoder,Mw=new TextDecoder;function Pw(a,t){if(a.byteLength>t)throw new Error("newLength is too small");let e=new ArrayBuffer(t);return new Uint8Array(e).set(new Uint8Array(a)),e}function Bw(a){return a<<1^a>>31}function Rw(a){return a>>>1^-(a&1)}var Xb=class{constructor(){this.writeOffset=0,this.readOffset=0,this.buffer=new ArrayBuffer(Tw),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}setWriteOffset(t){if(t>this.buffer.byteLength)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.writeOffset=t}setReadOffset(t){if(t>this.writeOffset)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.readOffset=t}getCapacity(){return this.buffer.byteLength-this.writeOffset}ensureCapacity(t){for(;t-this.getCapacity()>0;){let e=this.buffer.byteLength*2;if(e>Cw)throw new Error("out of memory error");this.buffer=Pw(this.buffer,e),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}}isReadable(){return this.writeOffset>this.readOffset}writeBytes(t){let e=t.byteLength;this.ensureCapacity(e),new Uint8Array(this.buffer).set(new Uint8Array(t),this.writeOffset),this.writeOffset+=e}toBytes(){let t=new ArrayBuffer(this.writeOffset);return new Uint8Array(t).set(new Uint8Array(this.buffer.slice(0,this.writeOffset))),t}writeBoolean(t){if(!(t===!0||t===!1))throw new Error("value must be true of false");this.ensureCapacity(1),t===!0?this.bufferView.setInt8(this.writeOffset,1):this.bufferView.setInt8(this.writeOffset,0),this.writeOffset++}readBoolean(){let t=this.bufferView.getInt8(this.readOffset);return this.readOffset++,t===1}writeByte(t){this.ensureCapacity(1),this.bufferView.setInt8(this.writeOffset,t),this.writeOffset++}readByte(){let t=this.bufferView.getInt8(this.readOffset);return this.readOffset++,t}writeShort(t){if(!(Aw<=t&&t<=kw))throw new Error("value must range between minShort:-32768 and maxShort:32767");this.ensureCapacity(2),this.bufferView.setInt16(this.writeOffset,t),this.writeOffset+=2}readShort(){let t=this.bufferView.getInt16(this.readOffset);return this.readOffset+=2,t}writeRawInt(t){if(!(QL<=t&&t<=XL))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");this.ensureCapacity(4),this.bufferView.setInt32(this.writeOffset,t),this.writeOffset+=4}readRawInt(){let t=this.bufferView.getInt32(this.readOffset);return this.readOffset+=4,t}writeInt(t){if(!(QL<=t&&t<=XL))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");if(this.ensureCapacity(5),t=Bw(t),!(t>>>7)){this.writeByte(t);return}if(!(t>>>14)){this.writeByte(t&127|128),this.writeByte(t>>>7);return}if(!(t>>>21)){this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14);return}if(!(t>>>28)){this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14|128),this.writeByte(t>>>21);return}this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14|128),this.writeByte(t>>>21|128),this.writeByte(t>>>28)}readInt(){let t=this.readByte(),e=t&127;return t&128&&(t=this.readByte(),e|=(t&127)<<7,t&128&&(t=this.readByte(),e|=(t&127)<<14,t&128&&(t=this.readByte(),e|=(t&127)<<21,t&128&&(t=this.readByte(),e|=(t&127)<<28)))),Rw(e)}writeLong(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(9),KL(this,t)}readLong(){let t=new ArrayBuffer(9),e=new DataView(t,0,t.byteLength),i=0,r=this.readByte();return e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r),r&128&&(r=this.readByte(),e.setUint8(i++,r))))))))),YL(new Uint8Array(t.slice(0,i))).toNumber()}writeFloat(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(4),this.bufferView.setFloat32(this.writeOffset,t),this.writeOffset+=4}readFloat(){let t=this.bufferView.getFloat32(this.readOffset);return this.readOffset+=4,t}writeDouble(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(8),this.bufferView.setFloat64(this.writeOffset,t),this.writeOffset+=8}readDouble(){let t=this.bufferView.getFloat64(this.readOffset);return this.readOffset+=8,t}writeChar(t){if(t==null||t.length===0){this.writeString($L);return}this.writeString(t.charAt(0))}readChar(){return this.readString()}writeString(t){if(t==null||t.trim().length===0){this.writeInt(0);return}let e=Dw.encode(t);this.ensureCapacity(5+e.length),this.writeInt(e.length),e.forEach(i=>this.writeByte(i))}readString(){let t=this.readInt();if(t<=0)return $L;let e=new Uint8Array(this.buffer.slice(this.readOffset,this.readOffset+t)),i=Mw.decode(e);return this.readOffset+=t,i}writePacketFlag(t){let e=t==null;return this.writeBoolean(!e),e}writePacket(t,e){jt.getProtocol(e).write(this,t)}readPacket(t){return jt.getProtocol(t).read(this)}writeBooleanArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeBoolean(e)}))}readBooleanArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readBoolean());return t}writeByteArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeByte(e)}))}readByteArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readByte());return t}writeShortArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeShort(e)}))}readShortArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readShort());return t}writeIntArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeInt(e)}))}readIntArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readInt());return t}writeLongArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeLong(e)}))}readLongArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readLong());return t}writeFloatArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeFloat(e)}))}readFloatArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readFloat());return t}writeDoubleArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeDouble(e)}))}readDoubleArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readDouble());return t}writeStringArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeString(e)}))}readStringArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readString());return t}writeCharArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeChar(e)}))}readCharArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readChar());return t}writePacketArray(t,e){if(t===null)this.writeInt(0);else{let i=jt.getProtocol(e);this.writeInt(t.length),t.forEach(r=>{i.write(this,r)})}}readPacketArray(t){let e=[],i=this.readInt();if(i>0){let r=jt.getProtocol(t);for(let n=0;n<i;n++)e.push(r.read(this))}return e}writeBooleanList(t){this.writeBooleanArray(t)}readBooleanList(){return this.readBooleanArray()}writeByteList(t){this.writeByteArray(t)}readByteList(){return this.readByteArray()}writeShortList(t){this.writeShortArray(t)}readShortList(){return this.readShortArray()}writeIntList(t){this.writeIntArray(t)}readIntList(){return this.readIntArray()}writeLongList(t){this.writeLongArray(t)}readLongList(){return this.readLongArray()}writeFloatList(t){this.writeFloatArray(t)}readFloatList(){return this.readFloatArray()}writeDoubleList(t){this.writeDoubleArray(t)}readDoubleList(){return this.readDoubleArray()}writeStringList(t){this.writeStringArray(t)}readStringList(){return this.readStringArray()}writeCharList(t){this.writeCharArray(t)}readCharList(){return this.readCharArray()}writePacketList(t,e){this.writePacketArray(t,e)}readPacketList(t){return this.readPacketArray(t)}writeBooleanSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeBoolean(e)}))}readBooleanSet(){return new Set(this.readBooleanArray())}writeByteSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeByte(e)}))}readByteSet(){return new Set(this.readByteArray())}writeShortSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeShort(e)}))}readShortSet(){return new Set(this.readShortArray())}writeIntSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeInt(e)}))}readIntSet(){return new Set(this.readIntArray())}writeLongSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeLong(e)}))}readLongSet(){return new Set(this.readLongArray())}writeFloatSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeFloat(e)}))}readFloatSet(){return new Set(this.readFloatArray())}writeDoubleSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeDouble(e)}))}readDoubleSet(){return new Set(this.readDoubleArray())}writeStringSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeString(e)}))}readStringSet(){return new Set(this.readStringArray())}writeCharSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeChar(e)}))}readCharSet(){return new Set(this.readCharArray())}writePacketSet(t,e){if(t===null)this.writeInt(0);else{let i=jt.getProtocol(e);this.writeInt(t.size),t.forEach(r=>{i.write(this,r)})}}readPacketSet(t){return new Set(this.readPacketArray(t))}writeIntIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeInt(e)}))}readIntIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readInt(),n=this.readInt();t.set(r,n)}return t}writeIntLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeLong(e)}))}readIntLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readInt(),n=this.readLong();t.set(r,n)}return t}writeIntStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeString(e)}))}readIntStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readInt(),n=this.readString();t.set(r,n)}return t}writeIntPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=jt.getProtocol(e);this.writeInt(t.size),t.forEach((r,n)=>{this.writeInt(n),i.write(this,r)})}}readIntPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let r=jt.getProtocol(t);for(let n=0;n<i;n++){let o=this.readInt(),s=r.read(this);e.set(o,s)}}return e}writeLongIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeInt(e)}))}readLongIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readLong(),n=this.readInt();t.set(r,n)}return t}writeLongLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeLong(e)}))}readLongLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readLong(),n=this.readLong();t.set(r,n)}return t}writeLongStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeString(e)}))}readLongStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readLong(),n=this.readString();t.set(r,n)}return t}writeLongPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=jt.getProtocol(e);this.writeInt(t.size),t.forEach((r,n)=>{this.writeLong(n),i.write(this,r)})}}readLongPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let r=jt.getProtocol(t);for(let n=0;n<i;n++){let o=this.readLong(),s=r.read(this);e.set(o,s)}}return e}writeStringIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeInt(e)}))}readStringIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readString(),n=this.readInt();t.set(r,n)}return t}writeStringLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeLong(e)}))}readStringLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readString(),n=this.readLong();t.set(r,n)}return t}writeStringStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeString(e)}))}readStringStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let r=this.readString(),n=this.readString();t.set(r,n)}return t}writeStringPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=jt.getProtocol(e);this.writeInt(t.size),t.forEach((r,n)=>{this.writeString(n),i.write(this,r)})}}readStringPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let r=jt.getProtocol(t);for(let n=0;n<i;n++){let o=this.readString(),s=r.read(this);e.set(o,s)}}return e}},Qb=Xb;var Ct=class Ct{constructor(){this.m_iConnectTimes=0;this.m_iMaxTimes=10;this.m_iHeartTime=6e4;this._isMatching=!1;this.m_socket=new Laya.Socket,this.m_socket.on(Laya.Event.OPEN,this,this.onSocketOpen),this.m_socket.on(Laya.Event.CLOSE,this,this.onSocketClose),this.m_socket.on(Laya.Event.MESSAGE,this,this.onMessageReveived),this.m_socket.on(Laya.Event.ERROR,this,this.onConnectError)}static get instance(){return Ct._instance==null&&(Ct._instance=new Ct),Ct._instance}get isMatching(){return this._isMatching}set isMatching(t){this._isMatching=t,t||(this.m_socket.close(),this.isConnect=!1)}initSocket(){this.isMatching=!0;var t=$.instance.roomDto.connectAddr;Ct.m_strHttpHost=t,this.reconnect()}onSocketOpen(){this.isConnect=!0,this.m_iConnectTimes=0,pi.log("websocket----websocket connected",1),this.onLogin()}onLogin(){let t=new yu;t.roomId=$.instance.roomDto.roomId,t.loginToken=localStorage.getItem("TOX-COOKIE"+Y.instance.walletAddress),t.pid=I.instance.playerDto.pid,this.sendData(t)}onSocketClose(t){console.log("websocket----closed"),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,console.log("websocket----closed m_iConnectTimes:"+this.m_iConnectTimes+", m_iMaxTimes: "+this.m_iMaxTimes),this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,function(){Ct.instance.reconnect(),Ct.instance.m_iConnectTimes++}):K.instance.hideLoading()))}onConnectError(t){console.log("websocket----onConnectError e:"+ +t),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,function(){Ct.instance.reconnect(),Ct.instance.m_iConnectTimes++}):K.instance.hideLoading()))}reconnect(){console.log("websocket----reconnect: "+Ct.m_strHttpHost),this.isMatching&&(this.isConnect||(this.m_socket.connectByUrl(Ct.m_strHttpHost),console.log("websocket----connect websocket")))}onSendMessage(){}sendData(t){if(this.isMatching)if(this.isConnect){let e=new Qb;e.setWriteOffset(4),jt.write(e,t),e.writeBoolean(!1);let i=e.writeOffset;e.setWriteOffset(0),e.writeRawInt(i-4),e.setWriteOffset(i),this.m_socket.send(e.buffer),console.log(ge.GetLogTime+" websocket ------>>>>>>>> send message PROTOCOL_ID:"+t.protocolId()+"，内容："+JSON.stringify(t))}else pi.log("socket send error： "+JSON.stringify(t))}async onMessageReveived(t){let e=t,i=new Qb;i.writeBytes(e),i.setReadOffset(4);let r=jt.read(i),n=r.protocolId();console.log(ge.GetLogTime+" websocket ------<<<<<<<< recv PROTOCOL_ID: "+n+"，内容："+JSON.stringify(r));let o=r.errorCode;if(o&&o>0){console.warn("errorCode "+o+", errorMessage： "+De.instance.get(o)),(o==24||o==25)&&(this.isMatching=!1,wt.instance.close(),be.intance.currSceneName!=re.M_SCENE_MATCH&&(be.intance.setCurrentScene(re.M_SCENE_MAIN),ge.commTipWithYes(De.instance.get(o))));return}switch(L.intance.event("msg_"+n,[e]),n){case gu.PROTOCOL_ID:console.log("收到了登录返回");let l=r;F.needHeart=!1,$.instance.matchDto=l.matchDto,be.intance.setCurrentScene(re.M_SCENE_MATCH);break;case ku.PROTOCOL_ID:console.log("收到比赛开始数据");let c=r;O.intance.disposeView(h.MatchReadyView),$.instance.stopAll=!1;break;case _u.PROTOCOL_ID:console.log("收到移动数据");let u=r;N.instance.onRevMovePush(u);break;case Au.PROTOCOL_ID:console.log("收到移动数据列表");var s=r.moveList;s.forEach(W=>{N.instance.onRevMovePush(W)});break;case Cu.PROTOCOL_ID:console.log("收到推人移动数据");let b=r;N.instance.onRevTargetMovePush(b);break;case xu.PROTOCOL_ID:console.log("收到伤害数据");let x=r;N.instance.onRevAttackPush(x);break;case Tu.PROTOCOL_ID:console.log("收到动画数据");let _=r;N.instance.onRevAnimationPush(_);break;case Lu.PROTOCOL_ID:console.log("收到玩家加入或离开数据");let y=r;N.instance.addPlayer(y);break;case Eu.PROTOCOL_ID:console.log("收到第一滴血数据");let C=r;L.intance.event(v.EVENT_FirstBlood,[C]);break;case Su.PROTOCOL_ID:console.log("收到多杀数据");let A=r;L.intance.event(v.EVENT_MutiKill,[A]);break;case wu.PROTOCOL_ID:console.log("收到比赛结束");let H=r;$.instance.matchDto&&$.instance.onGoMatchEndRank(H.rankList,H.reward);break;case Iu.PROTOCOL_ID:console.log("收到了恢复数据返回");let G=r;N.instance.onRevRestorePush(G.matchDto);break;case ys.PROTOCOL_ID:console.log("收到了错误信息返回");let Z=new ys;Object.assign(Z,r),console.log("errorMessage： "+Z.errorMessage),De.instance.showErrByString(Z.errorMessage);break;case vu.PROTOCOL_ID:this.isOtherLogin=!0,Laya.timer.clearAll(this),ge.otherLogin(),console.log("websocket----------------------------otherLogin");break;case Ct.CMD_20001:let D=I.instance.playerDto;Object.assign(D,e),L.intance.event(v.ACCOUNTVO_UPDATE),console.log("accout----------------------------update");break;case Ct.CMD_10099:K.instance.hideLoading(),L.intance.event("SET_HERO_POSTION_SUCCESS"),console.log("formation----------------------------update");break;default:break}}sendHeart(){this.m_socket.connected&&this.sendData(new bu)}};Ct.m_strHttpHost=getWSServer(),Ct.CMD_99999=99999;var Xe=Ct;var ve=class ve{constructor(){this._isSending=!1;this._stopSending=!1;this._sendCmd=0;this._callDataArr=[],this._httpReq=new Laya.HttpRequest,this._httpReq.http.timeout=15e3,this._httpReq.http.ontimeout=this.timeoutFunction,this._httpReq.on(Laya.Event.COMPLETE,this,this.reqCompleteHandler),this._httpReq.on(Laya.Event.ERROR,this,this.reqErrorHandler),this._httpReq.on(Laya.Event.PROGRESS,this,this.reqProcessHandler),ve.RepeatHandler=Laya.Handler.create(this,this.repeatCallHandler,null,!1)}static get instance(){return ve._instance||(ve._instance=new ve),ve._instance}repeatCallHandler(){let t=this._callDataArr[0];t&&(t.needReSend?(this._callDataArr.shift(),this._sendByByte(t.command,t.callData,t.isShowLoading,!0)):this._callDataArr.shift())}timeoutFunction(){ve.ErrorIndex++,this._sendCmd==2,ve.timeoutTimes<ve.MaxSendTimes,ve.timeoutTimes++,ve._IS_SEND=!1,this._isSending=!1,ve.ErrorIndex>=ve.RepeatTimesTimeOut?(K.instance.hideLoading(),ve.ErrorTips=f.instance.getLanguage("5076"),O.intance.openModule(h.ClientErrView)):ve.RepeatHandler.run()}reqCompleteHandler(t){let e=Laya.Browser.now()-this.m_nSendTime;if(e&&e>ve.RequestTime?(ve.reqTimes<ve.MaxSendTimes,ve.reqTimes++):(ve.reqTimes=0,ve.timeoutTimes=0,ve.errorTimes=0),console.log("cmd time："+(Laya.Browser.now()-this.m_nSendTime)),this._httpReq.data==null){De.instance.showErrByString("_buff:null");return}this._isSending=!1,ve.ErrorIndex=0;let i=new Laya.Byte(this._httpReq.data),r;if(i){let n=new Pa,o=n.ReadString(i);Zr.instance.analyCookie(o);let s=n.ReadByte(i);for(let l=0;l<s;l++){n.ReadByte(i);let c=n.ReadShort(i),u=n.ReadBytes(i,i.pos+c);if(i.pos+=c,u.length<2)continue;u.pos=0;let p=n.ReadBytes(u,u.length);p.pos=0;let b=new Uint8Array(p.buffer),x=new Uint8Array(Nw(b)),_=new Laya.Byte(x.buffer);_.pos=0;let y=Zr.instance.analyServer(_);Laya.LayaEnv.isConch?console.log("REVC_CMD: cmdID:"+y[0]+" data:"+y,1):console.log(ge.GetLogTime+" REVC_CMD: cmdID:",y[0],y),y[0]==153&&console.log("......"),y[0]==27&&(y[1]==2e4||y[1]==20042)&&(r=!0),L.intance.event("msg_"+y.shift(),[y])}s==0&&console.log("REVC_DATA: NO_DATA",1)}if(this._callDataArr.length>0){let n=this._callDataArr.shift();r&&n&&n.callBackHandler!=null&&n.callBackHandler.run()}ve._IS_SEND=!1,this._callDataArr.length>0?ve.RepeatHandler.run():K.instance.hideLoading()}reqErrorHandler(t){console.log("[error] HttpNetService reqError: ["+t+"]",1),ve.errorTimes<ve.MaxSendTimes&&this._sendCmd==2,ve.errorTimes++,K.instance.showLoadingByInfo(f.instance.getLanguage(5205)),ve.ErrorIndex++,ve._IS_SEND=!1,this._isSending=!1,ve.ErrorIndex>=ve.RepeatTimes?(K.instance.hideLoading(),ve.ErrorTips=f.instance.getLanguage("5075"),O.intance.openModule(h.ClientErrView),this._callDataArr.length=0):Laya.timer.once(1e3,this,function(){ve.RepeatHandler.run()})}reqProcessHandler(t){}DataToService(t){Laya.LayaEnv.isConch?this._httpReq.send(Q.server,t.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded","Connection","close"]):this._httpReq.send(Q.server,t.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded"])}SendData(t,e,i=null,r=!0,n=!0){this._stopSending||(this.m_nSendTime=Laya.Browser.now(),ve.ErrorIndex=0,n&&this._callDataArr.push({command:t,callData:e,callBackHandler:i,isShowLoading:r,needReSend:n}),this._sendByByte(t,e,r,!1))}_sendByByte(t,e,i=!0,r=!1){this._sendCmd=t,this._sendCmd==2,Xe.instance.sendData({cmd:t,code:"",data:e})}reSendData(){this._callDataArr.length>0&&ve.RepeatHandler.run()}sendOutHandler(){Laya.timer.clear(this,this.sendOutHandler),this._isSending&&(this._isSending=!1,ve.ErrorIndex>=ve.RepeatTimes?(K.instance.hideLoading(),ve.ErrorTips="Client Error!",O.intance.openModule(h.ClientErrView),this._callDataArr.length=0):ve.RepeatHandler.run())}EnCodeByte(t){t.pos=0;let i=new Pa().ReadBytes(t,t.length);i.pos=0;let r=new Laya.Byte,n=0,o,s=0;for(let l=0;l<i.length;l++)n>=6?n=1:n+=1,o=i.getByte(),s=o,o>>=8-n,s<<=n,s|=o,s^=3,r.writeByte(s);return r}DecryptByte(t){t.pos=0;let i=new Pa().ReadBytes(t,t.length);i.pos=0;let r=new Laya.Byte,n=0,o,s=new Uint8Array(i.buffer);for(let l=0;l<s.length;l++)n>=6?n=1:n+=1,o=s[l],o^=3,o<<=8-n,s[l]^=3,s[l]>>=n,s[l]|=o;return r=new Laya.Byte(s.buffer),r}init(){}HttpLoadProcess(t){}httpLoadComplete(t){Zr.instance.analyData=t}dispose(){}set stopSending(t){this._stopSending=t}};ve._IS_SEND=!1,ve.ErrorIndex=0,ve.RepeatTimes=8,ve.RepeatTimesTimeOut=3,ve.ErrorTips="",ve.LoginTime=5e3,ve.RequestTime=4e3,ve.MaxSendTimes=5,ve.reqTimes=0,ve.timeoutTimes=0,ve.errorTimes=0;var Li=ve;function Nw(a){throw new Error("Function not implemented.")}var xt=class extends Laya.Event{constructor(){super()}};xt.INIT_SUIT_EVENT="HeroEvent:INIT_SUIT_EVENT",xt.EVENT_FIND_ITEM_CLICK="HeroEvent:EVENT_FIND_ITEM_CLICK",xt.EVENT_RELEASE_ITEM_CLICK="HeroEvent:EVENT_RELEASE_ITEM_CLICK",xt.EVENT_FINISH="HeroEvent:EVENT_FINISH",xt.EVENT_START="HeroEvent:EVENT_START",xt.EVENT_AGAIN="HeroEvent:EVENT_AGAIN",xt.EVENT_ENABLE_TIJIAO="HeroEvent:EVENT_ENABLE_TIJIAO",xt.EVENT_HUMANSTAY="HeroEvent:EVENT_HUMANSTAY",xt.EVENT_STOPGAME="HeroEvent:EVENT_STOPGAME",xt.EVENT_RESTORE="HeroEvent:EVENT_RESTORE",xt.EVENT_CANCEL_RESTORE="HeroEvent:EVENT_CANCEL_RESTORE",xt.EVENT_COLLISIONENTER="HeroEvent:EVENT_COLLISIONENTER",xt.EVENT_HERO_DRAW_UPDATE_PRODUCTION="HeroEvent:EVENT_HERO_DRAW_UPDATE_PRODUCTION",xt.SELECT_UI="HeroEvent:SELECT_UI";var Du=class extends Me{constructor(){super()}};var Mu=class extends Me{constructor(){super()}};var st=class a{constructor(){this._inited=!1;this._initUpgrade=!1;this.heroList=[];this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}initUpgrade(){if(!this._initUpgrade){let t=j.intance;t.m_dicHeroLv||(t.m_dicHeroLv=t.initConfig("hero_lv",["hero_lv","hero_star","race"],Mu)),t.m_dicHeroAttup||(t.m_dicHeroAttup=t.initConfig("hero_attup",["star_lv","race"],Du)),this._initUpgrade=!0}}getHead(t){let e=Math.floor(Math.random()*3)+1;return"common/common_icon/img_"+t+"_"+e+".png"}getNextHero(t){let e=I.instance.m_heroData.heroVoDic.keys.indexOf(t.pk);return I.instance.m_heroData.heroVoDic.keys.length===1?null:e<=I.instance.m_heroData.heroVoDic.keys.length-2?I.instance.m_heroData.heroVoDic.values[e+1]:null}getLastHero(t){let e=I.instance.m_heroData.heroVoDic.keys.indexOf(t.pk);return e>0?I.instance.m_heroData.heroVoDic.values[e-1]:null}setStar(t,e){console.log("setStar: _star "+e);let i=parseInt(e);var r=Math.floor(i/6),n=i%6,o=r+n;let s=0;for(let u=0;u<r;u++)t["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_2.png",t["img_star"+(u+1)].visible=!0;for(let u=r;u<n;u++)t["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_1.png",t["img_star"+(u+1)].visible=!0;for(let u=o;u<5;u++)t["img_star"+(u+1)].visible=!1;let l=t.box_star.width,c=46;o==1?t["img_star1"].x=l/2-s:o==2?(t["img_star1"].x=l/2-c/2-s,t["img_star2"].x=l/2+c/2-s):o==3?(t["img_star1"].x=l/2-s,t["img_star2"].x=l/2-c-s,t["img_star3"].x=l/2+c-s):o==4?(t["img_star1"].x=l/2-c/2-s,t["img_star2"].x=l/2+c/2-s,t["img_star3"].x=l/2-c*(1/2+1)-s,t["img_star4"].x=l/2+c*(1/2+1)-s):(t["img_star1"].x=l/2-s,t["img_star2"].x=l/2-c-s,t["img_star3"].x=l/2+c-s,t["img_star4"].x=l/2-c*2-s,t["img_star5"].x=l/2+c*2-s)}getRoundName(t){let e=f.instance.getLanguage(10014,16,8);return t==4?e=f.instance.getLanguage(10014,2,1):t==3?e=f.instance.getLanguage(10014,4,2):t==2&&(e=f.instance.getLanguage(10014,8,4)),e}};var no=class{};var Pu=class{};var qe=class a{constructor(){this.mail_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"||(this.mail_contract=new window.web3.eth.Contract(oe.BLINDBOX_ABI,oe.BLINDBOX_ADDRESS))}async initData(){this.mailList=new le,K.instance.showLoading(!0);let t=await this.mail_contract.methods.getPricesLength().call();for(let e=0;e<t;e++){let i=await this.mail_contract.methods.getPriceByIndex(e).call(),r=new no;r.type=1,r.idx=e,Object.assign(r,i),this.mailList.set(r.idx,r),r.showPrice=ar(r.currentPrice+"")}K.instance.hideLoading()}async hasFree(){return await this.mail_contract.methods.getIsFreeOpen().call()?!await this.mail_contract.methods.hasFreeHero(Y.instance.walletAddress).call():!1}async recruit(t){K.instance.showLoading(!0);let e=j.intance.m_dicShops.get(t),i=e.cost[0];var r=Y.instance.getCoinAddress(i);try{var n;let c;Q.vType==2?(n=Ft.id,c=LL[n]):Q.vType==1?(n=St.id,c=lb[n]):(n=St.id,c=lb[n]);let u=await Y.instance.walletClient.getChainId();if(n!==u){var o=await Y.instance.switchChain(n);if(!o){this.onEndHeroBuy(),console.log("切换失败，请手动切换");return}}let p=r[n];if(!p)return this.onEndHeroBuy(),te.instance.notice(f.instance.getLanguage(1177,u)),!1;if(!c)return this.onEndHeroBuy(),te.instance.notice(f.instance.getLanguage(1174,u)),!1;let b=e.cost[1],x=await Y.instance.getBalance2(p),_=ar(b+"");if(parseFloat(x)<parseFloat(_)){this.onEndHeroBuy(),ge.moneyNotEnought(i);return}if(console.log("判断授权 tokenAddress: "+p+", chainIDData:"+n),!await Y.instance.newAllowanceAddress(c,p))return console.log("未授权"),this.onEndHeroBuy(),te.instance.notice(f.instance.getLanguage(15)),!1;console.log("授权成功 开始购买");var s=await Y.instance.walletClient.writeContract({account:Y.instance.walletAddress,address:c,abi:oe.BUY_HERO_ABI,functionName:"mintByTOX",args:[]});return console.log("============"+s),await Y.instance.publicClient.waitForTransactionReceipt({hash:s}),console.log(`Tx successful with hash: ${s}`),console.log("============"),s}catch(c){this.onEndHeroBuy();var l=c.shortMessage;if(l&&l.indexOf("does not match")!=-1&&(l=f.instance.getLanguage(1118)),console.log(l),te.instance.notice(l),c instanceof B){let u=c.walk(p=>p instanceof Qt);if(u instanceof Qt){let p=u.data?.errorName??"";console.log("============errorName: "+p)}}return null}}waitGetHero(){Laya.timer.loop(2e3,this,this.getHero)}async getHero(){var t=await F.requestPost("wxgame/hero/heroBuyChainCheck",{}).catch(e=>{});t&&t.heroList&&(Laya.timer.clear(this,this.getHero),this.onNewAddHero(t.heroList))}onNewAddHero(t){Ve.instance.autoPop=!1,I.instance.herosDataUpdataHandler(t),this.onEndHeroBuy()}onAddHero(t){Ve.instance.autoPop=!1,I.instance.herosDataUpdataHandler(t.reward),t.resChange&&I.instance.moneyInfoHander(t.resChange),t.fightHeroPk&&(I.instance.playerDto.fightHeroPk=t.fightHeroPk),this.onEndHeroBuy()}onEndHeroBuy(){K.instance.hideLoading(),L.intance.event(v.EVENT_END_HEROBUY)}async recruit1(t){let e=j.intance.m_dicShops.get(t),i=e.cost[1],r=await Y.instance.getBalance(),n=await F.requestPost("wxgame/hero/heroBuy",{shopId:e.id},!0,!0);n?this.onAddHero(n):this.onEndHeroBuy()}async recruitItem(t,e){let i=j.intance.m_dicShops.get(t),r=i.cost[1],n=await Y.instance.getBalance(),o=await F.requestPost("wxgame/hero/itemBuy",{shopId:i.id,count:e},!0,!0);o&&(I.instance.itemsDataUpdataHandler(o.reward,!1,!0),o.resChange&&I.instance.moneyInfoHander(o.resChange),o.fightHeroPk&&(I.instance.playerDto.fightHeroPk=o.fightHeroPk),K.instance.hideLoading())}async recruitFree(){K.instance.showLoading(!0),this.isOpen=await this.mail_contract.methods.getIsOpen().call();let t=await this.hasFree();if(!this.isOpen){K.instance.hideLoading(),L.intance.event(v.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(12)]);return}if(!t){L.intance.event(v.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(17)]);return}await this.mail_contract.methods.recruitFree().send({from:Y.instance.walletAddress},(e,i)=>{if(e){K.instance.hideLoading(),L.intance.event(v.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(16)]);return}})}async ownerHero(t=!1){let e=await F.requestPost("wxgame/hero/heroList",{},!0,!0);I.instance.m_heroData.initData(e.heroList,t),console.log("HERO LIST")}async ownerBag(){let t=await F.requestPost("wxgame/hero/bagList",{},!0,!0);I.instance.m_packageData.initData(t.data),console.log("BAG LIST")}async heroOutputRate(){if(st.instance.heroOutputRateDic)return;let t=await F.requestPost("cybertron-sys-api/api/v1/heroes/heroOutputRate",{},!0);st.instance.heroOutputRateDic=new le;for(let e of t){let i=new Pu;Object.assign(i,e),st.instance.heroOutputRateDic.set(i.mineralLevel,i)}console.log("HERO heroOutputRate"),L.intance.event(xt.EVENT_HERO_DRAW_UPDATE_PRODUCTION)}makeHeroVo(t){let e=new Kt;return Object.assign(e,t),e}};var Bu=class{constructor(){this.heroVoDic=new le}initData(t,e=!1){(!this.heroVoDic||e)&&(this.heroVoDic=new le);let i;for(let n=0;n<t.length;n++){i=new Kt;var r=t[n];i.id=r.id,i.lv=r.lv,i.pk=r.pk,i.color=r.color,i.state=r.state,this.pushItem(i)}console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}updateData(t){console.dir("更新英雄："+t),this.updataItemVoByArr(t)}pushItem(t){this.heroVoDic.set(t.pk,t)}removeItem(t){this.heroVoDic.remove(t.pk)}updataItemVoByArr(t,e=!1){let i=[],r=!1,n;for(let o=0;o<t.length;o++){n=t[o];let s=this.heroVoDic.get(n.pk);s==null?(s=new Kt,s.id=n.id,s.pk=n.pk,s.lv=n.lv,s.color=n.color,s.state=n.state,n.fight&&(I.instance.playerDto.fightHeroPk=n.pk),s.m_bNew=!0,s.newAddCnt=1,s.newAddCnt>0&&this.pushItem(s)):s.newAddCnt=1,s.isLvUp=e,i.push(s.pk),s.m_iNum<=0&&this.removeItem(s),s.newAddCnt>0&&Ve.instance.needPop&&(Ve.instance.addHeroItem(s),r=!0)}r&&Ve.instance.needPop&&Ve.instance.autoPop&&Yt.instance.startShow(),i.length>0&&L.intance.event(v.PACKAGE_UPDATE_ITEM,[i])}getItemById(t){return this.heroVoDic.get(t)}};var I=class a{constructor(){this.timeZoneOff=0;this.hearIntervalSceond=10*60;this._timeStamp=0;this._m_strLanguage=1;this.isLanChanged=!1;this.lastTimestamp=0;this._m_serverTime=0;this.M_S_VersionServer="1.0.0";this.redDotData=[];this.headId=10001;this.countryId=1010;this.rechargeEnd=!1;this.needPopError=!0}async initData(){_e.instance.sendCustumEvent(20),await qe.instance.ownerHero(),await qe.instance.ownerBag(),_e.instance.sendCustumEvent(21)}addMail(t){this.mailVoDic||(this.mailVoDic=new le),this.mailVoDic.set(t.id,t)}get m_serverTime(){let t=Date.now();return this._m_serverTime+(t-this.lastTimestamp)}set m_serverTime(t){this._m_serverTime=t,this.lastTimestamp=Date.now()}get m_strLanguage(){return this._m_strLanguage}set m_strLanguage(t){this._m_strLanguage=t}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this.vipInfo=new Al,this.m_packageData=new Dl,this.m_heroData=new Bu,this.systemOpenModel=new kl,this.m_dicCustomerVo=new le,L.intance.on("msg_27",this,this.commonErrHandler),L.intance.on("msg_11",this,this.vipInfoHandler),L.intance.on("msg_13",this,this.onVipUpgrade),L.intance.on("msg_90",this,this.initSystemOpen),L.intance.on("msg_161",this,this.reciveTurnoverVo),L.intance.on("msg_333",this,this.onInitSceneBg),L.intance.on("msg_350",this,this.onInitStoreDiscount),L.intance.on("msg_388",this,this.onInitTitle),L.intance.on("msg_1002",this,this.onLanChange)}initSend(){}onLanChange(t){let e=parseInt(t[0]),i=parseInt(t[1]);switch(e){case 1:i==1&&_e.instance.reload();break;case 2:break}}get timeStamp(){return this._timeStamp+(Laya.Browser.now()-this.recordStampTime)/1e3}set timeStamp(t){this.recordStampTime=Laya.Browser.now(),this._timeStamp=t}onReciveBuyTimes(t){a.instance.playerDto.updateRoleBuyTimes(t)}reciveTurnoverVo(t){}onInitSceneBg(t){}onInitTitle(t){}getAdRankById(t){return this.m_adRankDic&&this.m_adRankDic.get(t)?this.m_adRankDic.get(t):""}onGetPvpGrade(t){let e=t[0]}onInitStoreDiscount(t){}reciveBuyCustomerMsg(t){}onInitStyleAndTag(t){let e=t[0];for(let i=0;i<e.length;i++){let r=e[i],n=r[0],o=r[1],s=r[2]}}reciveFriendList(t){}reciveFirstRecharge(t){}hasReceiveFirst(){return this.firstRechargeState.toString()=="3"}recieveOnlineAward(t){}initFriendsGiftHandler(t){}initSystemOpen(t){this.systemOpenModel.initSystemOpen(t[0])}updateSystemOpen(t){let e=t[0];Ml.instance.addNewOpenFun(e);for(let i=0;i<e.length;i++)this.systemOpenModel.openSystem.set(e[i],!0)}serverTimeUpdateHandler(){let t=this.hearIntervalSceond*1e3;Laya.timer.loop(t,this,this.onHear)}onHear(){}initMainTaskHandler(t){}itemsDataUpdataHandler(t,e,i){this.m_packageData.updateData(t,e,i),L.intance.event(v.EVENT_ITEM_UPDATE)}herosDataUpdataHandler(t){this.m_heroData.updateData(t)}itemsDataInitHandler(t){this.m_packageData.initData(t)}vipInfoHandler(t){this.vipInfo.trecharge=t[1],this.vipInfo.isRewards=t[2],this.vipInfo.daygift=t[3]}onVipUpgrade(t){}getConsumeValue(t){t=parseInt(t.toString());var e=this.playerDto.coins[t];return e>0?e:0}hasEnoughMoney(t,e,i=!0){switch(t=parseInt(t.toString()),e=parseInt(e.toString()),t){default:return this.playerDto.coins[t]<e&&i&&L.intance.event("open_buy",4),this.playerDto.coins[t]>=e}}moneyInfoHander(t,e=!0,i=!0){let r=!1,n=!1,o=0;for(let s of t)n=!1,s[0]==Oe.TYPE_EXP?(o=parseInt(s[1]+"")-this.playerDto.exp,this.playerDto.exp=parseInt(s[1]+""),n=o>0):(o=parseFloat(s[1]+"")-this.playerDto.coins[s[0]],this.playerDto.coins[s[0]]=parseFloat(s[1]+""),n=o>0),n&&Ve.instance.needPop&&i&&(r=!0,Ve.instance.addConsumeByServer([s[0],o]));e&&L.intance.event(v.ROLE_INFO_CHANGE),r&&Ve.instance.autoPop&&Yt.instance.startShow()}commonErrHandler(t){if(K.instance.hideLoading(),parseInt(t[0])==2e4){this.needPopError&&(De.instance.showErrorWord(parseInt(t[0])),L.intance.event(v.RECIVE_SUCESS_SERVICE));return}else if(parseInt(t[0])==20008){L.intance.event("open_buy",1);return}else if(parseInt(t[0])==20007){L.intance.event("open_buy",2);return}else if(parseInt(t[0])==20015){L.intance.event("open_buy",3);return}else if(parseInt(t[0])==20016){L.intance.event("open_buy",4);return}else if(parseInt(t[0])==10021){Li.ErrorTips=De.instance.get(10021),O.intance.openModule(h.ClientErrView);return}else if(parseInt(t[0])==10023){Li.ErrorTips=De.instance.get(10023),O.intance.openModule(h.ClientErrView);return}else if(parseInt(t[0])==10019){Li.ErrorTips=De.instance.get(10019),O.intance.openModule(h.ClientErrView);return}else if(parseInt(t[0])!=20053){if(parseInt(t[0])==10002){Li.ErrorTips=f.instance.getLanguage(5085),O.intance.openModule(h.ClientErrView);return}}De.instance.showErrorWord(parseInt(t[0])),console.log("Server Error Code:"+t[0])}dispose(){}parseNumber(t){let e=[];for(let i=0;i<t.length;i++){let r=t[i];r=this.dividedNumber(r),e.push(r.toString())}return e}dividedNumber(t){return t/1e4}getRedDotById(t){return!!(this.redDotData&&this.redDotData.indexOf(t)>-1)}};var Ru=class extends Me{constructor(){super()}};var Nu=class{constructor(t,e,i){this._idKeyName="";this._jsonName="";this._sheetItemCls=null;this._isParse=!1;this._idKeyName=e,this._jsonName=t,this._sheetItemCls=i,this._idToValueMap=new le,this._items=[]}parseJson(){if(this._isParse)return;let t=M.instance.getResByURL("config/"+this._jsonName+".json");if(!t)throw new Error("无效的配置数据"+this._jsonName);for(let e of t){let i=new this._sheetItemCls;i.beFill(e),this._idToValueMap.set(e[this._idKeyName],i),this._items.push(i),this.addItemProcess(i)}this._isParse=!0}addItemProcess(t){}getItemById(t){return this.excuteIsParse()&&this._idToValueMap.get(t)?this._idToValueMap.get(t):null}getAllItems(){return this.excuteIsParse()?this._items:null}excuteIsParse(){return this._isParse,this._isParse}};var Ou=class extends Nu{constructor(){super("","","");this._itemsTypeMap=null;this._itemsTypeMap=new le}getCombineKey(e,i,r){return e+r.toString()+i}getItemsByChildType(e,i){let r=this.getCombineKey(e,i,"childType_itemType");if(this._itemsTypeMap.get(r))return this._itemsTypeMap.get(r);this._itemsTypeMap.set(r,[]);let n=j.intance.m_dicItems.values;for(let o of n)o.child_type==e&&o.itm_type==i&&this._itemsTypeMap.get(r).push(o);return this._itemsTypeMap.get(r)}};var Hu=class extends Me{realIcon(){return"https://cdn.bunnyswap.cc/images/items/"+this.icon}get starArr(){if(this._starArr)return this._starArr;if(this._starArr=[],this.max_quality==0)return this._starArr;let e=this.quality/this.max_quality*5;for(let i=1;i<=5;i++)e>=i?this._starArr.push(0):i-e<=.5?this._starArr.push(2):this._starArr.push(1);return this._starArr}};var Uu=class extends Me{};var Vu=class extends Me{constructor(){super()}};var Gu=class extends Me{constructor(){super()}};var zu=class extends Me{};var Fu=class extends Me{};var ju=class extends Me{};var qu=class extends Me{};var Wu=class extends Me{constructor(){super()}};var Ku=class extends Me{get icon(){return this.id}set icon(e){this._icon=e}};var Yu=class extends Me{};var $u=class extends Me{};var Rt=class Rt{constructor(){if(Rt._instance)throw new Error("SheetDataManager是单例,不可new.");Rt._instance=this,this._modelList=new le}static get intance(){return Rt._instance||(Rt._instance=new Rt),Rt._instance}resetTokenData(){}init(){let t=Laya.Browser.now();I.instance.systemOpenModel.parseJson(),this.m_dicItems=this.initConfigObject("item",Hu),this.m_dicShops=this.initConfig("shop",["id"],Uu),this.m_dicUnions=this.initConfig("union",["id"],Ku),this.m_dicHeros=this.initConfigObject("hero",zu),this.m_dicSkills=this.initConfigObject("skill",ju),this.m_dicBuffs=this.initConfigObject("buff",qu),this.m_dicArenaDic=new le,this.m_dicArenaMulDic=this.initConfig("arena",["lv","coinType"],Fu,!0,Laya.Handler.create(this,this.onSetArena,null,!1)),this.m_dicWelfareBags=this.initConfig("welfarebag",["id"],$u),this.m_dicMaps=this.initConfigObject("map",Yu),console.log("-----------------------sheetdata-time1:"+(Laya.Browser.now()-t)),this.m_dicHead=this.initConfig("head",["id"],Gu),this.m_dicCountry=this.initConfig("country",["id"],Wu),this.m_dicGenerate=this.initConfigObject("general",Ru),this.m_dicWorldMapChildTypeItem=new le,console.log("-----------------------sheetdata-time2:"+(Laya.Browser.now()-t))}onSetArena(t){this.m_dicArenaDic.set(t.id,t)}preInit(){this.m_dicScene=this.initConfig("scene",["name"],Vu)}getItemModel(){return this.getDataModel(Rt.DataType_Items)}getGeneralValueById(t){return this.m_dicGenerate&&this.m_dicGenerate.get(t)?this.m_dicGenerate.get(t).value:0}getSocialShareValueById(t){return this.m_dicSocialShare&&this.m_dicSocialShare.get(t)?this.m_dicSocialShare.get(t).parameter:0}getDataModel(t){if(!this._modelList.get(t))switch(t){case Rt.DataType_Items:this._modelList.set(t,new Ou);break}return this._modelList.get(t)}getWelfareBagId(t){var e=this.m_dicWelfareBags;for(let r=0;r<e.values.length;r++){var i=e.values[r];if(t>=i.rankingMin&&t<=i.rankingMax)return i.id}return 0}static getArrFromDictionary(t,e,i){let r=[];for(let n=0;n<t.values.length;n++)t.values[n][e]+""==i+""&&r.push(t.values[n]);return r}getArrFromDicItemByKey(t,e){let i=[];for(let r=0;r<this.m_dicItems.values.length;r++)this.m_dicItems.values[r][t]+""==e+""&&i.push(this.m_dicItems.values[r]);return i}initConfigObject(t,e=null,i=null){let r="config/"+t+".json";console.log("initConfigObject： url: "+r);let n=M.instance.getResByURL(r).data;return new Xr(n,e)}initConfig(t,e,i=null,r=!1,n=null){let o="config/"+t+".json";console.log("initConfig url: "+o);let s=M.instance.getResByURL(o).data,l=new le;if(!s)return console.log("ERROR : SheetDataManager -->initConfig()  url:"+o),l;let c;for(let u=0;u<s.length;u++){let p=this.compoundKey(s[u],e);i?(c=new i,c.init==null&&console.log("ERROR :BaseItem> SheetDataManager -->initConfig()  url:"+o),c.init(s[u]),l.set(p,c),n&&n.runWith(c)):(l.set(p,s[u]),n&&n.runWith(s[u]))}if(r){let u=M.instance.setResURL(o);Laya.Loader.clearRes(u)}return l}compoundKey(t,e){let i="",r=e.length;if(r>1)for(let n=0;n<r;n++)i+=t[e[n]],n!=r-1&&(i+="_");else i=t[e[0]];return i}getCompoundKey(t){let e="",i=t.length;if(i>1)for(let r=0;r<i;r++)e+=t[r],r!=i-1&&(e+="_");else e=t[0];return e}initConfig2(t,e,i,r=!0){let n="config/"+t+".json",o=M.instance.getResByURL(n).data,s=new le;if(!o)return console.log("ERROR : SheetDataManager -->initConfig2()  url:"+n),s;let l;for(let c=0;c<o.length;c++){let u=o[c][e],p;s.get(u)==null?(p=[],s.set(u,p)):p=s.get(u),l=new i,l.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig2()  url:"+n),l.init(o[c]),p.push(l)}if(r&&t!="items"){let c=M.instance.setResURL(n);Laya.Loader.clearRes(c)}return s}getItemsBy(t,e){let i=this.getArrFromDicItemByKey("itm_type",t),r=[];for(let n of i)n.child_type.toString()==e.toString()&&r.push(n);return r}getSheetDataByMultiKey(t,e){let i=this.getCompoundKey(e);return t.get(i)}};Rt.DataType_Items="SheetDataManager:items",Rt.DataType_CatagoryChildType="SheetDataManager:CatagoryChildType",Rt.DataType_BeautyPiece="SheetDataManager:beautypiece",Rt.DataType_BeautyExp="SheetDataManager:beautyexp",Rt.DataType_ClothStyleScore="SheetDataManager:clothStyleScore";var j=Rt;var $i=class $i{constructor(){this.mainSceneX=10086;this.isCloseAll=!0;this.enterMainSceneTimes=0;this.isTopOpening=!1;this.isBottomOpening=!1;L.intance.on(v.EVENT_MODULE_ADDED,this,this.onAdded)}static get intance(){return $i._instance||($i._instance=new $i),$i._instance}init(){}setup(){}onAdded(t){}getPreSceneData(){if(this.m_arrFromScenes.length<1)return[re.M_SCENE_MAIN,!0,1,null];{let t=this.m_arrFromScenes.pop();return console.log("pop-----------route："+this.m_arrFromScenes.join(" | ")),t}return[re.M_SCENE_MAIN,!0,1,null]}removePreSceneData(){this.m_arrFromScenes=[]}setBackScene(){let t=this.getPreSceneData();this.setCurrentScene(t[0],t[1],!1)}setMainScene(t=1,e=null){this.setCurrentScene(re.M_SCENE_MAIN,e)}async setCurrentScene(t,e=null,i=!1,r=!0){let n=!1;if(this.m_sceneCurrent&&this.m_sceneCurrent.name==t){console.log("currentScene："+this.m_sceneCurrent.name+"  openScene：："+t);return}this.isCloseAll?O.intance.closeAll():this.isCloseAll=!0,this.m_sceneCurrent&&(this.m_arrFromScenes||(this.m_arrFromScenes=[]),i&&this.m_sceneCurrent.m_arrOpenSceneData[3]&&this.m_arrFromScenes.push(this.m_sceneCurrent.m_arrOpenSceneData),console.log("open-----------scene："+this.m_arrFromScenes),this.fromScene=this.m_sceneCurrent.name,console.log("fromSceneName: "+this.fromScene),$i.m_arrSceneToDialog.indexOf(t)==-1?(this.m_sceneCurrent==this.m_preScene&&(this.m_preScene=null),this.m_sceneCurrent.toScene=t,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),wo.instance.dispose()):this.m_preScene=this.m_sceneCurrent,!i&&$i.m_arrSceneToDialog.indexOf(t)==-1&&this.m_preScene&&(this.m_sceneCurrent=this.m_preScene,this.m_sceneCurrent.toScene=t,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),wo.instance.dispose()));let o=j.intance.m_dicScene.get(t);switch(o&&o.music!=null&&o.music!="0"&&o.music!=""&&(console.log("SceneManager.setCurrentScene sceneItem.music: "+o.music),Ae.instance.playMusicByName(o.music)),t){case re.M_SCENE_MAIN:this.m_arrFromScenes=[],this.m_sceneCurrent=await Laya.Scene.open("scenes/mainView/MainScene.ls"),this.enterMainSceneTimes++;break;case re.M_SCENE_SHOP:this.m_sceneCurrent=await Laya.Scene.open("scenes/shop/ShopScene.ls",!0,e);break;case re.M_SCENE_RANK:this.m_sceneCurrent=await Laya.Scene.open("scenes/rank/RankScene.ls");break;case re.M_SCENE_SHOLARSHIP:this.m_sceneCurrent=await Laya.Scene.open("scenes/scholarship/ScholarshipScene.ls");break;case re.M_SCENE_HERO:this.m_sceneCurrent=await Laya.Scene.open("scenes/hero/MyHeroScene.ls");break;case re.M_SCENE_KNAPSACK:this.m_sceneCurrent=await Laya.Scene.open("scenes/item/KnapsackScene.ls");break;case re.M_SCENE_UNION:this.m_sceneCurrent=await Laya.Scene.open("scenes/union/UnionScene.ls");break;case re.M_SCENE_MYUNION:this.m_sceneCurrent=await Laya.Scene.open("scenes/union/MyUnionScene.ls",!0,e);break;case re.M_SCENE_MATCH_READY:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/MatchReady.ls");break;case re.M_SCENE_MATCH:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/Match.ls");break;case re.M_SCENE_ASSET:this.m_sceneCurrent=await Laya.Scene.open("scenes/asset/AssetScene.ls",!0,e);break;default:break}ge.logs("======================  打开Scene: "+t+"  ======================"),this.m_sceneCurrent.name=t,this.m_sceneCurrent.fromScene=this.fromScene,this.m_sceneCurrent.m_arrOpenSceneData=[t,e,i,r];let s=R.M_SCENE}initPreload(){let t=j.intance.m_dicScene.get(re.M_SCENE_PRE_LOAD);t&&t.music!=null&&t.music!="0"&&t.music!=""&&(console.log("SceneManager.initPreload sceneItem.music: "+t.music),Ae.instance.playMusicByName(t.music))}get currSceneName(){return this.m_sceneCurrent?this.m_sceneCurrent.name:""}};$i.m_arrSceneToDialog=[];var be=$i;var lt=class lt{constructor(){this.resArr=["gameIcon/map/1001/img_map.jpg","gameIcon/map/1002/img_map.jpg",{url:"gameIcon/map/map_1001.lh",type:Laya.Loader.HIERARCHY},{url:"gameIcon/map/map_1002.lh",type:Laya.Loader.HIERARCHY},"res/common/comm_bg/img_com_bg.jpg","res/common/comm/img_bg_large.png","res/common/comm/img_bg_medium.png","res/common/comm/img_bg_small.png",{url:"res/common.atlas",type:Laya.Loader.ATLAS},{url:"gameIcon/effect/match/beiji/spine.sk"},{url:"gameIcon/effect/match/dunpai/spine.sk"},{url:"gameIcon/effect/ruchang/effect1.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect2.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect3.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/hua/effect.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_3.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_4.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_5.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_6.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_4.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_5.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_6.skel",type:Laya.Loader.SPINE},{url:"scenes/mainView/MainScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/shop/ShopScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/hero/MyHeroScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/Match.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchHeroSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/DamageNumber.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/EnterRoomSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/notice/TxtLoadingView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/notice/TxtNoticeView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/CreateRoomDialog.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/EnterRoomView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndRankView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchReadyView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndView.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/closeBtn.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/defaultButton.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/DropBox.lh",type:Laya.Loader.HIERARCHY},{url:"resources/sound/destroy.wav",type:Laya.Loader.BUFFER},{url:"resources/sound/hit.wav",type:Laya.Loader.BUFFER}];this.m_arrPreResource=["config/spot.json","config/scene.json"];this.m_arrInitResource=["config/general.json","config/head.json","config/country.json","config/variable.json","config/equip.json","config/shop.json","config/union.json","config/hero.json","config/skill.json","config/buff.json","config/item.json","config/arena.json","config/map.json","config/level.json","config/welfarebag.json","config/mailmessage.json"];this.m_objModuleReource={FindScene:["res/atlas/find.atlas"],MainScene:[],ShopScene:[],RankScene:[],ScholarshipScene:[],CommentDialog:["res/atlas/comment.atlas"],GuideView:["res/atlas/guide.atlas","res/atlas/ShopView.atlas","config/newplayer.json"],ShareView:["res/atlas/share.atlas"],SelectHeadDialog:[],UnionApplyDialog:["config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json"],GuildScene:["res/atlas/union.atlas","config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json","config/guild_apply.json","config/guild_contrubute.json"],UnionWarScene:["res/atlas/unionWar.atlas","config/resource_node.json"],HeroScene:["res/atlas/hero.atlas","config/hero_lv.json","config/hero_attup.json","res/atlas/equip.atlas"],AFKBattleScene:["res/atlas/battle.atlas"],ArenaScene:["res/atlas/Arena.atlas"],KnapsackScene:["res/atlas/mainUI1.atlas"],UnionScene:["res/union1.atlas"]};this.m_objModuleViews={NoServerView:"scenes/createRole/NoServer.lh",CreateLoginView:"scenes/createRole/CreateLoginView.lh",ChangeHeadDialog:"scenes/createRole/ChangeHeadDialog.lh",HeroGetDialog:"scenes/shop/HeroGetDialog.lh",ItemGetDialog:"scenes/item/ItemGetDialog.lh",RewardGetDialog:"scenes/item/RewardGetDialog.lh",KnapsackTipDialog:"scenes/item/KnapsackTipDialog.lh",SelectHeadDialog:"scenes/createRole/SelectHeadDialog.lh",TxtNoticeView:"scenes/notice/TxtNoticeView.lh",NoticeDialog:"scenes/notice/NoticeDialog.lh",ChampDetailDialog:"scenes/asset/ChampDetailDialog.lh",ChampRecordDialog:"scenes/asset/ChampRecordDialog.lh",RoleInfoDialog:"scenes/createRole/RoleInfoDialog.lh",RemGetDialog:"scenes/createRole/RemGetDialog.lh",CreateRoomDialog:"scenes/mainView/CreateRoomDialog.lh",EnterRoomView:"scenes/mainView/EnterRoomView.lh",InputPwdDialog:"scenes/mainView/InputPwdDialog.lh",HeroDetailDialog:"scenes/hero/HeroDetailDialog.lh",MatchEndRankView:"scenes/match/MatchEndRankView.lh",MatchReadyView:"scenes/match/MatchReadyView.lh",MatchEndView:"scenes/match/MatchEndView.lh",GameSettingLanguageDialog:"scenes/gameSetting/GameSettingLanguageDialog.lh",SkillTipDialog:"scenes/hero/SkillTipDialog.lh",BaseAlertDialog:"scenes/baseAlert/BaseAlertDialog.lh",CreateSubWalletDialog:"scenes/scholarship/CreateSubWalletDialog.lh",WalletChooseHeroDialog:"scenes/scholarship/WalletChooseHeroDialog.lh",WalletChoosePropsDialog:"scenes/scholarship/WalletChoosePropsDialog.lh",EmployInfoDialog:"scenes/scholarship/EmployInfoDialog.lh",HireDetailDialog:"scenes/asset/HireDetailDialog.lh",ProxyDetailDialog:"scenes/asset/ProxyDetailDialog.lh",WithDrawRecordDialog:"scenes/asset/WithDrawRecordDialog.lh"};this.m_objConfigReource={};this.m_commonResource=new le;this.loadingView=Laya.Browser.window.loadingView;this.ii=100;this.baseUrl="https://cdn-5ejmbrg9nhxc.vultrcdn.com/hero/";if(lt._instance)throw new Error("LayerManager是单例,不可new.");lt._instance=this}static get instance(){return lt._instance==null&&(lt._instance=new lt),lt._instance}init(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),this.initGameLanguage()}initGameLanguage(){lt.GameLanguage_URL="config/language.json",Laya.loader.load(lt.GameLanguage_URL,Laya.Handler.create(this,this.initGameResource))}initGameResource(t){if(t==null)return;let e=lt.instance.getResBySetURL(lt.GameLanguage_URL);f.instance.initLanTypes(e.data),Laya.loader.clearRes(lt.GameLanguage_URL),this.onConfigLoaded()}onError(t){}onConfigLoaded(){let t=new ta;t.ID=4,t.Event="加载语言包信息",_e.instance.sendCustumEvent(4,null,t),Q.ignoreLang||(I.instance.m_strLanguage=f.instance.getLanIdByType(Q.User_Lan)),this.m_UILang="config/lang_english"+I.instance.m_strLanguage+".json",this.m_NomalLang="config/english"+I.instance.m_strLanguage+".json",this.m_ErrorLang="config/error"+I.instance.m_strLanguage+".json",this.m_arrPreResource.push(this.m_UILang),this.m_arrPreResource.push(this.m_NomalLang),this.m_arrPreResource.push(this.m_ErrorLang),this.initResourceURL(this.m_arrPreResource,!0),this.initResourceURL(this.m_arrInitResource,!0),this.addFont1()}addFont1(){Laya.loader.load("res/font/CookieRun Regular.otf",Laya.Loader.TTF).then(()=>{this.loadDemoResource()})}loadDemoResource(){Laya.loader.load(this.resArr,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{K.instance.init(),N.instance.damageNumPrefab=Laya.loader.getRes("scenes/match/DamageNumber.lh"),wt.instance.enterRoomPrefab=Laya.loader.getRes("scenes/mainView/EnterRoomSpr.lh"),N.instance.roleAniPrefab=Laya.loader.getRes("scenes/match/MatchHeroSpr.lh"),N.instance.ruchangEffects=[Laya.loader.getRes("gameIcon/effect/ruchang/effect1.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect2.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect3.skel")],N.instance.huaEffect=Laya.loader.getRes("gameIcon/effect/hua/effect.skel"),N.instance.beijiTemplet=Laya.loader.getRes("gameIcon/effect/match/beiji/spine.sk"),N.instance.dunpaiTemplet=Laya.loader.getRes("gameIcon/effect/match/dunpai/spine.sk"),N.instance.diquanEffect3=Laya.loader.getRes("gameIcon/effect/diquan/img_3.skel"),N.instance.diquanEffect4=Laya.loader.getRes("gameIcon/effect/diquan/img_4.skel"),N.instance.diquanEffect5=Laya.loader.getRes("gameIcon/effect/diquan/img_5.skel"),N.instance.diquanEffect6=Laya.loader.getRes("gameIcon/effect/diquan/img_6.skel"),N.instance.baoqiEffect4=Laya.loader.getRes("gameIcon/effect/baoqi/img_4.skel"),N.instance.baoqiEffect5=Laya.loader.getRes("gameIcon/effect/baoqi/img_5.skel"),N.instance.baoqiEffect6=Laya.loader.getRes("gameIcon/effect/baoqi/img_6.skel");var t=N.instance.roleAniPrefab.create();console.log(" ================ roleAniPrefab: "+t),this.onLoadThreeDimen()})}onLoadThreeDimen(){Laya.loader.load(this.m_arrPreResource,Laya.Handler.create(this,this.onPreAssetLoaded),Laya.Handler.create(this,this.onPreAssetPress2,null,!1))}onPreAssetPress1(t){this.va=(t*100*.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetPress2(t){this.va=(t*100*.5+.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetLoaded(t){if(!t)return;let e=Laya.Browser.now();Qr.instance.initSpotCfgData(),this.initResourceURL(this.m_objModuleReource),this.initResourceURL(this.m_objConfigReource),_e.instance.sendCustumEvent(5),j.intance.preInit(),this.setGlobalLanguage(),_e.instance.sendCustumEvent(6),L.intance.event(v.EVENT_BACK_TO_LOGIN),be.intance.initPreload(),this.loadingView&&this.loadingView.loading(100),console.log("-----------------------preload-time:"+(Laya.Browser.now()-e))}setGlobalLanguage(){let t=lt.instance.getResByURL(this.m_NomalLang);f.instance.initConfigLan(t.data);let e=lt.instance.getResByURL(this.m_UILang);f.instance.initUILan(e.data);let i=lt.instance.getResByURL(this.m_ErrorLang);De.instance.initErrData(i.data),this.clearResUrlByRoot(this.m_UILang,!0),this.clearResUrlByRoot(this.m_NomalLang,!0),this.clearResUrlByRoot(this.m_ErrorLang,!0)}initResourceURL(t,e=!1){if(t instanceof Array)this.setResURLArr(t,e);else if(t instanceof Object)for(let i in t)this.setResURLArr(t[i],e)}setResURLArr(t,e){let i,r;for(let n=0;n<t.length;n++)e?(this.m_commonResource.set(t[n],!0),r=this.setResURL(t[n]),i=this.getTypeFromUrl(r),t[n]={url:r,type:i,size:1,priority:1}):this.m_commonResource.get(t[n])?(t.splice(n,1),n--):(r=this.setResURL(t[n]),i=this.getTypeFromUrl(r),t[n]={url:r,type:i,size:1,priority:1})}getTypeFromUrl(t){let{ext:e,typeId:i,main:r,loaderType:n}=Laya.Loader.getURLInfo(t);lt._extReg.lastIndex=t.lastIndexOf(".");let o=lt._extReg.exec(t);return o&&o.length>1?o[1].toLowerCase():"text"}setResURL(t){return t}clearResUrlByRoot(t,e=!1){let i=t;Laya.loader.clearRes(i)}hasFormatEffectUrl(t){return t.indexOf("effect/")>=0}setItemResURL(t){return t&&t.hasOwnProperty("item_img")?this.setResURL("icon/"+t.item_img+".png"):""}setThreeDimenUrl(t){return t?this.setResURL("threeDimen/"+t):""}getThreeDimenUrl(t){let e=this.setResURL("threeDimen/"+t);return Laya.Loader.getRes(e)}getResByURL(t){let e=lt.instance.setResURL(t);return Laya.Loader.getRes(e)}getResBySetURL(t){return Laya.Loader.getRes(t)}loadModuleUrl(t,e=null,i=null,r=1,n=!0){console.log("loadModuleUrl m_strName: "+t),this.ii++;let o=lt.instance.m_objModuleReource[t];if(o==null||o.length<1){e.run();return}Laya.loader.load(o,Laya.Handler.create(this,this.loadItemComplete,[e,o]),Laya.Handler.create(this,this.onLoadProgress,[t],!1),i,r,n,this.ii.toString())}loadItemComplete(t,e){this.usedUrlDic||(this.usedUrlDic=new le);for(let i in e){let r=e[i].url,n=this.usedUrlDic.get(r);n?this.usedUrlDic.set(r,++n):this.usedUrlDic.set(r,1)}t.run()}clearModuleUrl(t){console.log("clearModuleUrl m_strName: "+t);let e=lt.instance.m_objModuleReource[t];for(let i in e){let r=e[i].url;if(this.usedUrlDic){let n=this.usedUrlDic.get(r);n-=1,n<1?(this.usedUrlDic.remove(r),Laya.loader.clearRes(r)):this.usedUrlDic.set(r,n)}}}onLoadProgress(t,e){}loadResource(t,e=null,i=null,r=null,n=1,o=!0){Laya.loader.load(t,e,i,r,n,o)}getCountryIcon(t){return this.setResURL("gameIcon/country/img_"+t+".png")}getChestIcon(t){return this.setResURL("gameIcon/items/chest/img_"+t+".png")}getChestBigIcon(t){return this.setResURL("gameIcon/items/chestBig/img_"+t+".png")}getHeroEggIcon(t){return this.setResURL("gameIcon/hero/heroEgg/img_"+t+".png")}getHeroEggBigIcon(t){return this.setResURL("gameIcon/hero/heroEggBig/img_"+t+".png")}getHeroHeadIcon(t){return this.setResURL("gameIcon/hero/heroHead/img_"+t+".png")}getHeroQuality(t){return this.setResURL("gameIcon/hero/heroQuality/img_"+t+".png")}getHeroBackIcon(t){return this.setResURL("gameIcon/hero/heroDetail/img_hero_di_"+t+".png")}getHeroFrontIcon(t){return this.setResURL("gameIcon/hero/heroDetail/img_hero_"+t+".png")}getItemIcon(t){return this.setResURL("gameIcon/items/item/img_"+t+".png")}getItemBgIcon(t){return this.setResURL("gameIcon/items/itemBg/img_"+t+".png")}getItemBigIcon(t){return this.setResURL("gameIcon/items/itemBig/img_"+t+".png")}getItemQualityIcon(t){return this.setResURL("gameIcon/items/itemQuality/img_"+t+".png")}getMoneyIcon(t){return this.setResURL("gameIcon/items/money/img_"+t+".png")}getAttrIcon(t){return this.setResURL("gameIcon/attr/img_attr_"+t+".png")}getSkillIcon(t,e=!1){let i;return e?i=this.setResURL("gameIcon/skill/skills/img_big_"+t+".png"):i=this.setResURL("gameIcon/skill/skills/img_"+t+".png"),i}getMatchSkillIcon(t){return this.setResURL("gameIcon/skill/matchSkills/img_"+t+".png")}getPlayerIcon(t){return parseInt(t)>0?this.setResURL("gameIcon/head/headCircle/img_"+t+".png"):t}getUnionIcon(t){return parseInt(t)>0?this.setResURL("gameIcon/union/img_trade_"+t+".png"):t}getSceneBgUrl(t){return"scene/"+t+".jpg"}clearSKinUrl(t){for(let e in t)t[e]instanceof String&&t[e].indexOf("skincolor")==-1&&Laya.loader.clearRes(t[e]);t=[]}getFunctionIcon(t){return this.setResURL("icon/functionIcon/"+t+".png")}getNewFunIcon(t){return this.setResURL("icon/newFunIcon/"+t+".png")}getSoundURL(t,e=".ogg"){let i;return i=this.setResURL("mp3/"+t+e),i}getSoundURLogg(t){let e;return e=this.setResURL("mp3/"+t),e}getSceneUrl(t){return"scene/sceneBg/"+t+".jpg"}getMianSysIcon(t){return this.setResURL("icon/mainSysIcon/btn_"+t+".png")}getEffectUrl(t){return this.setResURL("effect/"+t+".json")}getLoadingUrl(t){return this.setResURL("effect/"+t)}getGuangImg(t){return this.setResURL("swf/"+t+".png")}getGuildProofBg(t){return this.setResURL("scene/guild/proof/"+t+"/1.png")}getGuildProofHots(t){return this.setResURL("scene/guild/proof/"+t+"/"+t+"/"+t+".json")}getShareImgUrl(t,e=!1,i=!1){let r;return i?t:(t=t+".jpg",e?r="https://mutantbox.8686c.com/16/qa/common/share/"+t:r="https://cdn.test.com/16/qa/common/share/"+t,r)}getHeadUrl(t){return"common/common_icon/"+t+".png"}getMapImg(t){return"gameIcon/map/"+t+"/img_map.jpg"}getMapPrefab(t){return"gameIcon/map/map_"+t+".lh"}clearCache(){}getHeroHeadRes(t,e){return Q.Res==0?"gameIcon/hero/heroHead/img_"+t+".png":this.baseUrl+`${t}/${e}.png`}getHeroSkRes(t,e){return Q.Res==0?`gameIcon/hero/heroSk/${t}/img_hero.skel`:this.baseUrl+`${t}/${e}/img_hero.skel`}};lt._extReg=/\.(\w+)\??/g;var M=lt;var Xu=class extends Laya.Dialog{constructor(){super();this.canClickMask=!0;this.preinitialize()}_onClick(e){let i=e.target;if(i)switch(i.name){case Laya.Dialog.CLOSE:break;case Laya.Dialog.CANCEL:break;case Laya.Dialog.SURE:break;case Laya.Dialog.NO:break;case Laya.Dialog.OK:break;case Laya.Dialog.YES:this.destroy();break}}preinitialize(){this.init()}init(){}createChildren(){super.createChildren(),this.createUI(),this.initialize()}createUI(){}initialize(){this.addEvent(),this.initData()}addEvent(){}initData(){}removeEvent(){}disposeDialog(){Laya.Dialog.manager.close(this)}destroy(e=!0){this.removeEvent(),this._view&&(this._view.destroy(),this._view=null),super.destroy()}sendData(e,i=null){i==null&&(i=[])}};var Qu=class extends Xu{constructor(){super();this.destroyDoCancel=!1}addEvent(){this.okBtn=this._alertView.getChildByName("okBtn"),this.cancleBtn=this._alertView.getChildByName("cancleBtn"),this.alertTitle=this._alertView.getChildByName("alertTitle"),this.descTf=this._alertView.getChildByName("alertDesc"),this._alertView.on(Laya.Event.CLICK,this,this.onClickEvent)}createUI(){this.createAlert()}createAlert(){this._alertView||(this._alertView=new Laya.View),this.addChild(this._alertView)}onClickEvent(e){let i=e.target;i.name=="okBtn"?(this._okHandler&&this._okHandler.runWith(null),this.close()):i.name=="cancleBtn"&&(this.destroyDoCancel=!1,this._cancelHandler&&this._cancelHandler.runWith(null),this.close())}alert(e,i,r,n=null,o=!1,s=null){let l=66;this._okHandler=i,this._cancelHandler=r,this.destroyDoCancel=o,e&z.YES&&!(e&z.NO)?(this.okBtn.x=this._alertView.width-this.okBtn.width>>1,this.cancleBtn.visible=!1,this.okBtn.label="Sure"):e&z.NO&&!(e&z.YES)?this.okBtn.visible=!1:e&z.YES&&e&z.NO,n&&this.descTf&&(n instanceof Array?(this.alertTitle.text=n[0],this.descTf.text=n[1]):this.descTf.text=n),s&&s.runWith(this)}removeSelf(){return this.destroyDoCancel&&this._cancelHandler&&this._cancelHandler.run(),super.removeSelf()}removeEvent(){super.removeEvent(),this._okHandler=null,this._cancelHandler=null}};var oo=class extends Laya.Script{onAdded(){this.m_iLayerType=R.M_PANEL,this.m_iPositionType=R.CENTER,this.m_canTouch_all=!1,this.m_ioffsetX=0,this.m_ioffsetY=0,this.m_arrMapEvent=[],this.m_iAdaptation_Top=0,this.m_iAdaptation_Buttom=0,this.m_bAutoResizeWidth=!1,this.m_bAutoResizeHeith=!1,this.m_bAutoResize=!1,this.hideLoadingBySelf=!1}get loadPaths(){return this._loadPaths}onStageResize(){}setIphoneX(){if(Q.m_bIsIphoneX&&this._view){let e=this._view.numChildren,i=[];if(e)for(let r=0,n=e;r<n;r++){let o=this._view.getChildAt(r);o.name==="ui_top"?isNaN(o.top)?o.y+=this.m_iAdaptation_Top:o.top+=this.m_iAdaptation_Top:o.name=="ui_bottom"&&(o.bottom+=this.m_iAdaptation_Buttom)}}}onAwake(){Q.m_bIsIphoneX&&(this.m_iAdaptation_Top=Q.IPHONEX_TOP,this.m_iAdaptation_Buttom=Q.IPHONEX_BUTTOM),this.loadPaths&&this.loadPaths.length?(this.hideLoadingBySelf=!0,Laya.loader.load(this.loadPaths,Laya.Handler.create(this,this.loadPathsComplete))):(this.createUI(),this.createUILater())}createUILater(){this.createUIEnd()}loadPathsComplete(){this.createUI(),this.loadPathsCompleteLater()}loadPathsCompleteLater(){this.createUIEnd(),this.onStageResize(),K.instance.hideLoading()}createUI(){}createUIEnd(){this.setIphoneX(),this._addEvent(),this.initData(),this.onLoaded()}_addEvent(){this.btn_com_help&&this.btn_com_help.on(Laya.Event.CLICK,this,this.onHelp),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.addEvent()}addEvent(){}initData(){}onLoaded(){}removeEvent(){}backToPreScene(){let e=be.intance.getPreSceneData();be.intance.setCurrentScene(e[0],e[1],e[2],e[3],!1)}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN,!0,!0,1)}addMapEvent(e,i,r,n,o=null){e.on(i,r,n,o),this.m_arrMapEvent.push(e)}removeAllMapEvent(){if(this.m_arrMapEvent){for(let e=0;e<this.m_arrMapEvent.length;e++)this.m_arrMapEvent[e].offAll();this.m_arrMapEvent.splice(0,this.m_arrMapEvent.length),this.m_arrMapEvent=null}}dispose(){console.log("<<< BaseView.dispose() className: "+this.constructor.name+" ==== name: "+this._view.name+" ==== m_strName: "+this.m_strName),Laya.stage.off(Laya.Event.RESIZE,this,this.onStageResize),this.btn_com_help&&this.btn_com_help.off(Laya.Event.CLICK,this,this.onHelp),this.removeEvent(),this.removeAllMapEvent(),O.intance.removeViewFromModuleManger(this),this.m_arrMapEvent=null,this.m_strName&&this.m_strName!=""||(this.m_strName=this.constructor.name),M.instance.clearModuleUrl(this.m_strName),this.m_strName=null,this._view&&(Laya.timer.clearAll(this._view),Laya.Tween.clearAll(this._view),this._view.offAll(),this._view.removeSelf(),this._view.destroy(!0),this._view=null),Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}sendData(e,i=null,r=null,n=!0){i==null&&(i=[])}get btn_com_help(){return this._view?this._view.getChildByName("btn_com_help"):null}get btn_back(){return this._view?this._view.getChildByName("btn_back"):null}onHelp(){this.m_helpId&&O.intance.openModule(h.HelpDialog,this.m_helpId)}resetView(){this.onStageResize()}};var Qs=class a{constructor(){this.mail_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"||(this.mail_contract=new window.web3.eth.Contract(oe.SERIESHEROMALL_ABI,oe.SERIESHEROMALL_ADDRESS))}async initData(){this.mailList=new le,K.instance.showLoading(!0);let t=await this.mail_contract.methods.getPricesLength().call();for(let e=0;e<t;e++){let i=await this.mail_contract.methods.getPriceByIndex(e).call(),r=new no;if(r.type=2,r.idx=e,Object.assign(r,i),this.mailList.set(r.idx,r),r.showPrice=parseEther(r.currentPrice+""),r.currentToken!=oe.ADDRESS0){let n=new window.web3.eth.Contract(oe.TOKEN_ERC20ABI,r.currentToken);r.tokenContract=n,r.currentTokenName=await n.methods.symbol().call()}else r.currentTokenName="BNB"}K.instance.hideLoading()}async recruit(t){if(K.instance.showLoading(!0),!await this.mail_contract.methods.accountIsInWhiteList(t,Y.instance.walletAddress).call()){K.instance.hideLoading(),L.intance.event(v.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(6055)]);return}if(this.isOpen=await this.mail_contract.methods.getIsOpen().call(),!this.isOpen){K.instance.hideLoading(),L.intance.event(v.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(12)]);return}let i=this.mailList.get(t);if(i.totalSupply===i.sellAmount){K.instance.hideLoading(),L.intance.event(v.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(13)]);return}let r=i.currentPrice,n=i.currentToken,o="0",s="18";n!=oe.ADDRESS0?(o=await i.tokenContract.methods.balanceOf(Y.instance.walletAddress).call(),s=await i.tokenContract.methods.decimals().call()):o=window.web3.eth.getBalance(Y.instance.walletAddress);let l=ei.fromWei(r,s,2);if(parseFloat(o)<parseFloat(l)){K.instance.hideLoading(),L.intance.event(v.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(14)]);return}if(n!=oe.ADDRESS0){if(!await Y.instance.allowanceAddressByTokenAddress(oe.SERIESHEROMALL_ADDRESS,n)){K.instance.hideLoading(),L.intance.event(v.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(15)]);return}await this.mail_contract.methods.recruit(t).send({from:Y.instance.walletAddress},(u,p)=>{if(u){K.instance.hideLoading(),L.intance.event(v.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(16)]);return}})}else await this.mail_contract.methods.recruit(t).send({from:Y.instance.walletAddress,value:r},(c,u)=>{if(c){K.instance.hideLoading(),L.intance.event(v.EVENT_HERO_DRAW_BACK,[f.instance.getLanguage(16)]);return}})}};var We=class{};We.FUN_MYHOME=1,We.FUN_STORE=2,We.FUN_TRAVEL=3,We.FUN_PVP=1011,We.FUN_PVPMULTI=7001,We.FUN_GUILDPHOTO=1004,We.FUN_PET=1003,We.FUN_1V1=1014,We.FUN_THUMB=9005,We.FUN_THUMB_RANKING_REWARD=3008,We.FUN_BOYFRIEND=4005,We.FUN_TIMESTAGE=1006,We.FUN_FARM_MODEL=1008611,We.FUN_GROUP_PHOTO=1008612,We.FUN_TV=1001,We.FUN_PRAY=1005,We.FUN_WORKSHOP=1006,We.FUN_SHOP_CLOTH=4001,We.FUN_SHOP_PRAY=2108,We.FUN_SHOP_1V1=2119,We.FUN_SHOP_PVP=2107,We.FUN_SHOP_THUMB=2113,We.FUN_SHOP_GUILD=2111,We.FUN_FIRST_RECHARGE=2201,We.FUN_ACTIVITY_CENTER=2002,We.FUN_LIMITRECRUIT=2003;var Ur=class extends Laya.Script{constructor(){super()}};Ur.INIT_LUCKDEAW_EVENT="DigEvent:INIT_DIG_EVENT";var Zu=class extends oo{constructor(e){super();this.currTab=0;this.type=1;this.hasFree=!1;this.type=e}get view(){return this._view}createUI(){this._view=new Laya.View,this.m_iPositionType=R.UP,this.onStageResize(),L.intance.on(Ur.INIT_LUCKDEAW_EVENT,this,this.luckdrawevevt),L.intance.on(v.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),this.hideLoadingBySelf=!0,this.view.btn_myhero.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.view.btn_myhero]),this.view.box_skill.on(Laya.Event.CLICK,this,this.onShowSkill),this.view.btn_recruit1.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.view.btn_recruit1]),this.view.btn_heroshop.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.view.btn_heroshop]),this.view.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.view.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.view.listPanel1.vScrollBarSkin="",this.view.listPanel2.vScrollBarSkin="",this.view.animation_hreo.visible=!0,this.view.box_1.visible=!1,this.view.box_2.visible=!1,this.view.animation_hreo._complete=Laya.Handler.create(this,this.stopAni,[6]),this.view.tf_congratulation.text=f.instance.getLanguage(131),this.view.tf_congratulation.visible=!1,this.view.img_bg.visible=!1,this.initLuckDrawView(),qe.instance.heroOutputRate();let e=(Laya.stage.height-Q.DESIGN_HEIGHT)/2}setTab(e){for(let i=1;i<3;i++)e==i?this.view["btn_"+i].skin="common/common_btn/btn_tab1.png":this.view["btn_"+i].skin="common/common_btn/btn_tab2.png"}async initLuckDrawView(){await qe.instance.initData(),await Qs.instance.initData(),this.hasFree=await qe.instance.hasFree(),!this.destroyed&&(this.type==We.FUN_LIMITRECRUIT?this.onClickTab(2):this.onClickTab(1))}onClickTab(e){if(this.currTab!=e)if(this.setTab(e),e==1)if(this.hasFree)this.view.img_bg.visible=!0,this.view.box_1.visible=!0,this.view.box_2.visible=!1,this.view.label_cost.text=f.instance.getLanguage(30);else{this.view.box_1.visible=!1,this.view.box_2.visible=!0;let i=qe.instance.mailList;if(this.destroyed)return;i&&i.values.length>0?(this.getItemByStarAndMintLevel(1,1)?this.view.box1_draw_1.dataSource=this.getItemByStarAndMintLevel(1,1):this.view.box1_draw_1.visible=!1,this.getItemByStarAndMintLevel(1,2)?this.view.box1_draw_2.dataSource=this.getItemByStarAndMintLevel(1,2):this.view.box1_draw_2.visible=!1,this.getItemByStarAndMintLevel(2,3)?this.view.box1_draw_3.dataSource=this.getItemByStarAndMintLevel(2,3):this.view.box1_draw_3.visible=!1,this.getItemByStarAndMintLevel(3,4)?this.view.box1_draw_4.dataSource=this.getItemByStarAndMintLevel(3,4):this.view.box1_draw_4.visible=!1,this.view.listPanel1.visible=!0,this.view.listPanel2.visible=!1,this.view.tf_noData.visible=!1):(this.view.tf_noData.visible=!0,this.view.listPanel1.visible=!1,this.view.listPanel2.visible=!1)}else{this.view.box_1.visible=!1,this.view.box_2.visible=!0;let i=Qs.instance.mailList;if(this.destroyed)return;i&&i.values.length>0?(i.get(0)?this.view.box2_draw_1.dataSource=i.get(0):this.view.box2_draw_1.visible=!1,i.get(1)?this.view.box2_draw_2.dataSource=i.get(1):this.view.box2_draw_2.visible=!1,i.get(2)?this.view.box2_draw_3.dataSource=i.get(2):this.view.box2_draw_3.visible=!1,this.view.listPanel1.visible=!1,this.view.listPanel2.visible=!0,this.view.tf_noData.visible=!1):(this.view.tf_noData.visible=!0,this.view.listPanel1.visible=!1,this.view.listPanel2.visible=!1)}}getItemByStarAndMintLevel(e,i){let r=qe.instance.mailList;for(let n of r.values){let o=n;if(o.rarity===e+""&&o.mineralLevel===i+"")return o}return!1}onStageResize(){super.onStageResize();let e=Laya.stage.height-Q.DESIGN_HEIGHT;this.view.la_img_bg.height+=e,this.view.listPanel2.height+=e}onShowSkill(){O.intance.openModule(h.SkillTipDialog)}createUIEnd(){this.view.box_sucess2.visible=!1,this.view.btn_recruit1.visible=!0}stopAni(e){console.log("stopAni: "+e),this.view.animation_hreo.paused(),this.view.animation_hreo.stop()}handleClickBtn(e){switch(e){case this.view.btn_myhero:O.intance.openModule(h.MyHeroView),console.log("My hero");break;case this.view.btn_heroshop:console.log("Hero shop");break;case this.view.btn_recruit1:console.log("Hero Recruit"),this.drawCard();break}}async drawCard(){let e=await qe.instance.recruitFree()}onDrawBack(e){if(e instanceof Array)for(let i of e){let r=i,n=this.view.box_card;n.dataSource=r,this.startAni()}else De.instance.showErrorWord(e)}startAni(){this.view.box_sucess2.visible=!0,this.view.animation_hreo.paused(),this.view.animation_hreo.play(0,!1),this.view.tf_congratulation.visible=!0,Laya.timer.once(1500,this,this.showCard)}showCard(){this.hasFree?this.view.box_1.visible=!1:this.view.box_2.visible=!1,this.view.box_sucess2.visible=!0,this.view.box_skill.visible=!1,this.view.btn_recruit1.visible=!1,Laya.Tween.to(this.view.box_card,{scaleX:1.5,scaleY:1.5},100,null,Laya.Handler.create(this,this.onScaleEnd))}onScaleEnd(){Laya.Tween.to(this.view.box_card,{scaleX:1.4,scaleY:1.4},100,null,Laya.Handler.create(this,this.onScaleEnd1))}onScaleEnd1(){}luckdrawevevt(){}removeEvent(){L.intance.off(Ur.INIT_LUCKDEAW_EVENT,this,this.luckdrawevevt),L.intance.off(v.EVENT_HERO_DRAW_BACK,this,this.onDrawBack)}};var Ju=class extends Wt{constructor(){super()}get view(){return this._view}dispose(){super.dispose()}createUI(){this._view=new Laya.View,this.addChild(this._view)}};var ep=class extends Wt{constructor(e){super();this.vo=e}get view(){return this._view}dispose(){super.dispose()}createUI(){this._view=new Laya.View,this.addChild(this._view)}initData(){this.view.img_icon.skin=`gameIcon/attricon/img_daoju_${this.vo.type-1e3}.png`,this.view.label_hp.text=`${f.instance.getLanguage(this.vo.name)} : ${this.getShowValue(this.vo.value)}`,this.view.label_level.text=f.instance.getLanguage("304")+` : ${this.vo.level}`,this.view.lable_desc.text=`${f.instance.getLanguage(this.vo.desc)}`}getShowValue(e){return this.vo.type===1003||this.vo.type===1005?(parseFloat(e+"")*100).toFixed(1)+"%":parseInt(e)}};var Te=class a{static toFixed(t,e){if(t.toString().indexOf(".")==-1)return t;{let i=t.toFixed(e);return parseFloat(i)}}static toFixedWithPercent(t,e,i="+"){let r;return t.toString().indexOf(".")==-1?r=i+t*100+"%":(e=e-2,e<0&&(e=0),r=i+(t*100).toFixed(e)+"%"),r}static getGoldStr(t){let e;return t>999999?e=parseInt(String(t/1e5))+"m":e=t,e}static numStringFormat(t){let e=t;return I.instance.m_strLanguage==2?t.length>4&&(e=String(t).replace(/(\d)(?=(\d{3})+$)/g,"$1 ")):e=String(t).replace(/(\d)(?=(\d{3})+$)/g,"$1,"),e}static numSimple(t){let e=t,i=parseInt(parseInt(e)/1e3+"");return i>0?i+"k":a.numStringFormat(e)}static numStringFormat2(t){let e;if(t>999999)e=a.getNumStr(t,1e6,"M");else if(t>999)e=a.getNumStr(t,1e3,"K");else return t+"";return e}static getNumStr(t,e,i){return parseInt(Math.floor(t/e)+"")+i}static getTimeStr(t){let e;return t<3600?e=f.instance.getLanguage(9024,Math.ceil(t/60)):t<3600*24?e=f.instance.getLanguage(9025,Math.ceil(t/3600)):e=f.instance.getLanguage(9025,Math.ceil(t/(3600*24))),e}static BigInt(t){return 0}static isInteger(t){return t%1===0}static formatNumber(t,e=2){return Number.isInteger(t)?t:parseFloat(t.toFixed(e))}static formatNumberStr(t,e=2){return Number.isInteger(t)?t:parseFloat(t.toFixed(e)).toString()}static filterNumFormat(t,e=2,i=!1){if(!t)return t;if(t<1e3&&t>0)return parseFloat(t.toFixed(e)).toString();if(t==="0.00")return t;var r=[{value:1,symbol:""},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"}];i&&(r=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"}]);var n=/\.0+$|(\.[0-9]*[1-9])0+$/,o;for(o=r.length-1;o>0&&!(t>=r[o].value);o--);let s=(t/r[o].value).toString();return s.indexOf(".")>-1&&(e>0?s=s.substr(0,s.indexOf(".")+e+1):s=s.substr(0,s.indexOf(".")+e)),s.replace(n,"$1")+r[o].symbol}static fromWei(t,e,i=0){if(!t)return 0;let r=t.length-e+i;if(r<=0)return 0;let n=t.toString().slice(0,r);if(i){let o=n.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";n=s+n}else n=n.slice(0,n.length-i)+"."+n.slice(n.length-i)}return n}};var V=class{static RECV_MSG(t){return"msg_"+t}};V.MSG_CLOSE_SESSION_S2C=99998,V.MSG_UNION_GET_MY_UNION_C2S=12001,V.MSG_UNION_GET_MY_UNION_S2C=12002,V.MSG_UNION_GET_RECOMMEND_UNION_C2S=12003,V.MSG_UNION_GET_RECOMMEND_UNION_S2C=12004,V.MSG_UNION_CREATE_UNION_C2S=12005,V.MSG_UNION_CREATE_UNION_S2C=12006,V.MSG_UNION_UPDATE_UNION_C2S=12007,V.MSG_UNION_UPDATE_UNION_S2C=12008,V.MSG_UNION_JOIN_UNION_C2S=12009,V.MSG_UNION_JOIN_UNION_S2C=12010,V.MSG_UNION_LEVEL_UNION_C2S=12011,V.MSG_UNION_LEVEL_UNION_S2C=12012,V.MSG_UNION_GET_UNION_MEMBER_C2S=12013,V.MSG_UNION_GET_UNION_MEMBER_S2C=12014,V.MSG_UNION_GET_MY_UNION_VO_C2S=12015,V.MSG_UNION_GET_MY_UNION_VO_S2C=12016,V.MSG_UNION_GET_UNION_MEMBER_APPLY_C2S=12020,V.MSG_UNION_GET_UNION_MEMBER_APPLY_S2C=12021,V.MSG_UNION_GET_UNION_MEMBER_APPLY_JOIN_C2S=12022,V.MSG_UNION_GET_UNION_MEMBER_APPLY_JOIN_S2C=12023,V.MSG_UNION_GET_UNION_MEMBER_APPLY_AGREE_C2S=12024,V.MSG_UNION_GET_UNION_MEMBER_APPLY_AGREE_S2C=12025,V.MSG_UNION_GET_UNION_MEMBER_APPLY_REFUSE_C2S=12026,V.MSG_UNION_GET_UNION_MEMBER_APPLY_REFUSE_S2C=12027,V.MSG_UNION_GET_UNION_MEMBER_ADMIN_SET_C2S=12028,V.MSG_UNION_GET_UNION_MEMBER_ADMIN_SET_S2C=12029,V.MSG_UNION_GET_UNION_MEMBER_ADMIN_UNSET_C2S=12030,V.MSG_UNION_GET_UNION_MEMBER_ADMIN_UNSET_S2C=12031,V.MSG_UNION_GET_UNION_MEMBER_REMOVE_C2S=12032,V.MSG_UNION_GET_UNION_MEMBER_REMOVE_S2C=12032,V.MSG_UNION_GET_UNION_MEMBER_LEADER_TRANSFER_C2S=12033,V.MSG_UNION_GET_UNION_MEMBER_LEADER_TRANSFER_S2C=12034,V.MSG_UNION_GET_UNION_MEMBER_APPLY_HISTORY_C2S=12040,V.MSG_UNION_GET_UNION_MEMBER_APPLY_HISTORY_S2C=12041,V.MSG_UNION_GET_UNION_MANAGER_INVITATION_C2S=12042,V.MSG_UNION_GET_UNION_MANAGER_INVITATION_S2C=12043,V.MSG_COMM_GET_RED_HOT_C2S=14001,V.MSG_COMM_GET_RED_HOT_S2C=14002,V.MSG_FRIEND_GET_RECOMMEND_FRIEND_S2C=18001,V.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_S2C=18001,V.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_JOIN_S2C=18001,V.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_AGREE_S2C=18001,V.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_REFUSE_S2C=18001,V.MSG_FRIEND_GET_FRIEND_MEMBER_REMOVE_S2C=18001,V.MSG_FRIEND_GET_RECOMMEND_FRIEND_C2S=18001,V.MSG_FRIEND_GET_FRIEND_MEMBER_C2S=18001,V.MSG_WALLET_UPDATE_WALLET_ITEM_S2C=19001,V.MSG_WALLET_TRANSFER_WALLET_S2C=19002,V.MSG_UNION_PERSONAL_BOUNS_S2C=15003,V.MSG_UNION_SET_BOUNS_RATE_S2C=15004,V.MSG_UNION_BATTLE_CD_C2S=15e3,V.MSG_UNION_BATTLE_CD_S2C=15001,V.MSG_UNION_BATTLE_DIGGINGS_STATUS_S2C=15002,V.MSG_UNION_BATTLE_BOUNS_S2C=15008,V.MSG_COMM_SCROLL_MSG_S2C=16001,V.MSG_ROLE_UPDATE_KNEAD_FACE_S2C=2700,V.MSG_BUY_SUIT_NPC_C2S=87,V.MSG_BUY_SUIT_NPC_S2C=88,V.MSG_INIT_WISHING_TREE_C2S=112,V.MSG_WISHING_TREE_C2S=113,V.MSG_WISHING_TREE_FREE_C2S=114,V.MSG_INIT_WISHING_TREE_EXCHANGE_C2S=115,V.MSG_WISHING_TREE_EXCHANGE_REWARD_C2S=116,V.MSG_WISHING_TREE_FREE_S2C=117,V.MSG_INIT_WISHING_TREE_S2C=118,V.MSG_WISHING_TREE_S2C=119,V.MSG_INIT_WISHING_TREE_EXCHANGE_S2C=120,V.MSG_INIT_SUIT_COLLECT_S2C=130,V.MSG_SUIT_COLLECT_REWARD_C2S=131,V.MSG_ACTIVE_CHECKIN_INIT_C2S=2310,V.MSG_ACTIVE_CHECKIN_INIT_S2C=2311,V.MSG_ACTIVE_CHECKIN_GET_REWARD_C2S=2312,V.MSG_ACTIVE_CHECKIN_GET_REWARD_S2C=2313,V.MSG_ACTIVE_DRAWING_SHOP_INIT_C2S=2320,V.MSG_ACTIVE_DRAWING_SHOP_INIT_S2C=2321,V.MSG_ACTIVE_DRAWING_SHOP_BUY_C2S=2322,V.MSG_ACTIVE_DRAWING_SHOP_BUY_S2C=2323,V.MSG_INIT_ACTIVE_TASK_C2S=800,V.MSG_INIT_ACTIVE_TASK_S2C=801,V.MSG_FINISH_ACTIVE_TASK_C2S=802,V.MSG_INIT_EVERYDAY_QUEST_C2S=83,V.MSG_INIT_EVERYDAY_QUEST_S2C=84,V.MSG_FINISH_EVERYDAY_QUEST_C2S=85,V.MSG_REWARD_ACTIVE_SCORE_GIFT_C2S=176,V.MSG_ACTIVE_SCORE_PRAY_C2S=177,V.MSG_UPDATE_VITALITY_REWARD_S2C=2401,V.MSG_GET_PVP_GRADE_S2C=157,V.MSG_SYS_BASE_INFO_S2C=158,V.MSG_GET_PVP_RANK_RESULT_S2C=278,V.MSG_INVITATIONCENTER_INIT_INVITATION_CODE_C2S=2003,V.MSG_INVITATIONCENTER_INIT_INVITATION_CODE_S2C=2008,V.MSG_INVITATIONCENTER_RECEIVE_MY_CODE_REWARD_C2S=2006,V.MSG_INVITATIONCENTER_RECEIVE_MY_RECOMMEND_REWARD_S2C=2007,V.MSG_INVITATIONCENTER_FILL_IN_THE_INVITATION_CODE_C2S=2004,V.MSG_INVITATIONCENTER_FILL_IN_THE_INVITATION_CODE_S2C=2005,V.MSG_SHARE_INIT_S2C=3e3,V.MSG_SHARE_GET_C2S=3001,V.MSG_SHARE_GET_S2C=3002,V.MSG_UPDATE_SHARE_POPUP_DATA_S2C=3003,V.MSG_CLIENT_ORDER_UPDATE_C2S=3004,V.MSG_REC_SHARE_SHOP_ITEMS_C2S=3005,V.MSG_SHARE_SHOP_ITEMS_RETURN_S2C=3006,V.MSG_DIG_INIT_C2S=4001,V.MSG_LUCKDRAW_INIT_S2C=5002;var Zs=class{};var tp=class{};var ip=class a{constructor(){this.create_union_contract=null;this.member_sys_contract=null;this.union_war_contract=null;this.price=""}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){this.memberList=new le,!(typeof window.ethereum>"u")&&(this.create_union_contract=new window.web3.eth.Contract(oe.CREATE_UNION_ABI,oe.CREATE_UNION_ADDRESS),this.member_sys_contract=new window.web3.eth.Contract(oe.UNION_NUMBER_SYS_ABI,oe.UNION_NUMBER_SYS_ADDRESS),this.union_war_contract=new window.web3.eth.Contract(oe.UNION_WAR_ABI,oe.UNION_WAR_ADDRESS))}async poolEarned(t,e){let i=await this.union_war_contract.methods.earned(e).call();return parseEther(i)}async claim_pool_reward(t,e,i){K.instance.showLoading(!0),await this.union_war_contract.methods.claimReward(t,e,i).send({from:Y.instance.walletAddress},(r,n)=>{if(r)return K.instance.hideLoading(),!1})}async claim_member_reward(){K.instance.showLoading(!0);let{sendBeanDto:t}=await F.requestPost("cybertron-sys-api/api/v1/alliance/bonus/receiveBonus",{}),e=new WalletValidateItemVo;return Object.assign(e,t),await this.union_war_contract.methods.memberClaim(e.tokenAddress,e.to,e.amount,e.timestamp,e.hash,e.r,e.s,e.v).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1}),!0}async quitOccupy(t,e,i){K.instance.showLoading(!0),await this.union_war_contract.methods.quitOccupy(t,e,i).send({from:Y.instance.walletAddress},(r,n)=>{if(r)return K.instance.hideLoading(),!1})}async setManagerBonusPercent(t,e,i){K.instance.showLoading(!0),Li.instance.SendData(15901,{accountIds:e,bonusPercents:i})}async queryNextGetTime(t,e){return""}async donate(t,e){K.instance.showLoading(!0),Li.instance.SendData(13e3,{itemId:t,amount:e})}async getCreateCost(){let t=await this.create_union_contract.methods.getCreateUnionPrice().call();return this.price=parseEther(t[1]),this.price}async createUnion(t,e,i=""){K.instance.showLoading(!0),this.price||await this.getCreateCost();let r=await Y.instance.getBalance();return parseInt(r)<parseInt(this.price)?(K.instance.hideLoading(),ge.moneyNotEnought(),!1):await Y.instance.allowanceAddress(oe.CREATE_UNION_ADDRESS)?(await this.create_union_contract.methods.createUnion(t,e,i).send({from:Y.instance.walletAddress},(o,s)=>{if(o)return K.instance.hideLoading(),!1}),!0):(K.instance.hideLoading(),te.instance.notice(f.instance.getLanguage(15)),!1)}async getMemberList(t="1"){let e=await F.requestPost("cybertron-sys-api/api/v1/allianceMember/memberList",{unionId:t});this.memberList=new le;for(let i of e){let r=new tp;Object.assign(r,i),this.memberList.set(r.accountId,r)}return this.memberList}async getMemberApplyList(t="1"){let e=await F.requestPost("cybertron-sys-api/api/v1/allianceApply/applyList");GuildModel.instance.applyMembers=new le;for(let i of e){let r=new Zs;Object.assign(r,i),GuildModel.instance.applyMembers.set(r.accountId,r)}return GuildModel.instance.applyMembers}async getMemberApplyHistoryList(t="1"){let e=await F.requestPost("cybertron-sys-api/api/v1/allianceApply/historyRecordList"),i=new le;for(let r of e){let n=new Zs;Object.assign(n,r),i.set(n.accountId,n)}return i}async editUnion(t,e,i,r=""){K.instance.showLoading(!0),await this.create_union_contract.methods.updateUnionProfile(t,e,i,r).send({from:Y.instance.walletAddress},(n,o)=>{if(n)return K.instance.hideLoading(),!1})}async transferUnion(t,e){K.instance.showLoading(!0),await this.create_union_contract.methods.transferUnion(t,e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}async applyJoinUnion(t,e){await F.requestPost("cybertron-sys-api/api/v1/allianceMember/applyJoinUnion",{unionId:e}),te.instance.notice(f.instance.getLanguage(2005))}async confirmApplyJoin(t,e){K.instance.showLoading(!0),await this.member_sys_contract.methods.confirmApplyJoin(t,e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}async refuseApplyJoin(t,e){let i=await F.requestPost("cybertron-sys-api/api/v1/allianceMember/refuseApplyJoin",{accountId:t,unionId:e});L.intance.event(V.RECV_MSG(V.MSG_UNION_GET_UNION_MEMBER_APPLY_REFUSE_S2C),[[i]])}async kickOutUnion(t,e){K.instance.showLoading(!0),await this.member_sys_contract.methods.kickOutUnion(t,e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}async quitUnion(t,e){K.instance.showLoading(!0),await this.member_sys_contract.methods.quitUnion(t,e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}async addManager(t,e){K.instance.showLoading(!0);let i=await this.member_sys_contract.methods.getMaxManagerCount().call(),r=parseInt(i),n=await this.member_sys_contract.methods.getUnionManagerCount(e).call();if(parseInt(n)>=r)return K.instance.hideLoading(),te.instance.notice(f.instance.getLanguage("3013")),!1;await this.member_sys_contract.methods.addManager(t,e).send({from:Y.instance.walletAddress},(s,l)=>{if(s)return K.instance.hideLoading(),!1})}async removeManager(t,e){K.instance.showLoading(!0),await this.member_sys_contract.methods.removeManager(t,e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}};var ap=class{};var rp=class extends Wt{constructor(e){super();this.donateValue=1e3;this.persentAry=[25,50,75,100];this.vo=e,this.detailVo=new ap,this.view.btn_reduce.on(Laya.Event.CLICK,this,this.clickHandler,[this.view.btn_reduce]),this.view.btn_plus.on(Laya.Event.CLICK,this,this.clickHandler,[this.view.btn_plus]),this.view.btn_donate.on(Laya.Event.CLICK,this,this.clickHandler,[this.view.btn_donate]),L.intance.on(Xe.CMD_13001+"",this,this.onDonateSuccess);for(let i=0;i<4;i++){let r=this.view["p"+i],n=r.getChildByName("img_select");n.visible=!1,r.on(Laya.Event.CLICK,this,this.onClickP,[i])}}removeEvent(){super.removeEvent(),L.intance.off(Xe.CMD_13001+"",this,this.onDonateSuccess)}get view(){return this._view}dispose(){super.dispose()}createUI(){this._view=new Laya.View,this.addChild(this._view)}onClickP(e){if(console.log("selcet==="+e),!this.detailVo.resourcesType)return;let i=this.maxValue/100*this.persentAry[e];if(!(i<1e3)){this.donateValue=i-i%1e3,this.view.lable_num.text=this.donateValue.toString(),this.updateContribute();for(let r=0;r<4;r++){let o=this.view["p"+r].getChildByName("img_select");o.visible=!1,r<=e&&(o.visible=!0)}}}async initData(){this.view.img_icon.skin=`gameIcon/attricon/img_daoju_${this.vo.type-1e3}.png`,this.updateView()}updateContribute(){this.view.label_cb_right.text=f.instance.getLanguage("306")+` : ${parseInt(this.detailVo.contributeValue)+this.donateValue/1e3}`}async onDonateSuccess(){te.instance.notice(f.instance.getLanguage("307")),K.instance.hideLoading()}async updateView(){if(!this.view)return;let e=await F.requestPost("cybertron-sys-api/api/v1/alliance/attribute/find",{attributeType:this.vo.type});Object.assign(this.detailVo,e);let i=j.intance.m_dicItems.get(this.detailVo.resourcesType);this.view.img_cost.skin="https://cdn.bunnyswap.cc/images/items/"+i.icon,this.detailVo.tokenAddress=i.tokenId;let r=WalletModel.instance.getValue(this.detailVo.resourcesType);this.view.lable_title.text=`${f.instance.getLanguage(this.vo.name)} : ${this.getShowValue(this.detailVo.value)}`,this.maxValue=parseFloat(r),this.view.lable_progress.text=f.instance.getLanguage("305")+` 
 ${Te.filterNumFormat(this.detailVo.num)}/${Te.filterNumFormat(this.detailVo.totalNum)}`,this.view.label_attr_left.text=`${f.instance.getLanguage(this.detailVo.name)} : ${this.getShowValue(this.detailVo.value)}`,this.view.label_attr_right.text=`${f.instance.getLanguage(this.detailVo.name)} : ${this.getShowValue(this.detailVo.toValue)}`,this.view.label_lv_left.text=f.instance.getLanguage("304")+` : ${this.detailVo.level}`,this.view.label_lv_right.text=f.instance.getLanguage("304")+` : ${this.detailVo.toLevel}`,this.view.label_cb_left.text=f.instance.getLanguage("306")+` : ${this.detailVo.contributeValue}`,this.updateContribute()}getShowValue(e){return this.detailVo.type===1003||this.detailVo.type===1005?(parseFloat(e+"")*100).toFixed(1)+"%":parseInt(e)}async clickHandler(e){if(this.detailVo.resourcesType)switch(e){case this.view.btn_reduce:this.donateValue>1e3&&(this.donateValue-=1e3),this.view.lable_num.text=this.donateValue.toString(),this.updateContribute();break;case this.view.btn_plus:this.donateValue+1e3<=this.maxValue&&(this.donateValue+=1e3),this.view.lable_num.text=this.donateValue.toString(),this.updateContribute();break;case this.view.btn_donate:if(this.donateValue>this.maxValue){te.instance.notice(f.instance.getLanguage(14));return}ip.instance.donate(this.detailVo.resourcesType+"",this.donateValue+"");break;default:break}}};var np=class extends oo{constructor(){super()}get view(){return this._view}createUI(){this._view=new Laya.View,this.m_iPositionType=R.UP,this.addChild(this._view),this.onStageResize(),this.view.tab.dataSource=3,this.view.attr_list.vScrollBarSkin="",this.view.attr_list.array=[],L.intance.on(Xe.CMD_13001+"",this,this.getAttrList),this.getAttrList()}async getAttrList(){let t=await F.requestPost("cybertron-sys-api/api/v1/alliance/attribute/findAll",{});this.destroyed||t.length&&(this.view.attr_list.array=t.slice(0,5))}removeEvent(){super.removeEvent(),L.intance.off(Xe.CMD_13001+"",this,this.getAttrList)}onStageResize(){super.onStageResize();let t=Laya.stage.height-Q.DESIGN_HEIGHT;this.view.la_img_bg.height+=t,this.view.attr_list.height+=t,this.view.height+=t}};var op=class{};var mi=class a{constructor(){this._inited=!1;this.contract=null;this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0,this.posDic=new le,this.contract=new window.web3.eth.Contract(oe.HEROFORMATION_ABI,oe.HEROFORMATION_ADDRESS))}async getHeroPos(){return(await F.requestPost("cybertron-sys-api/api/v1/heroes/positionList",{})).forEach(e=>{let i=new op;Object.assign(i,e),this.posDic.set(i.position,i)}),this.posDic}async setHeroPos(){if(K.instance.showLoading(!0),this.checkOnlyChangePos())return await F.requestPost("cybertron-sys-api/api/v1/heroes/setPosition",this.copyPosDic.values),this.posDic=this.copyPosDic,K.instance.hideLoading(),L.intance.event("SET_HERO_POSTION_SUCCESS"),this.posDic;{let e=[];this.copyPosDic.values.forEach(i=>{parseInt(i.heroId)&&e.push([parseInt(i.heroId),parseInt(i.position)])}),await this.contract.methods.formation(e).send({from:Y.instance.walletAddress},(i,r)=>{if(i)return K.instance.hideLoading(),!1})}}checkOnlyChangePos(){let t=[],e=[];for(let i of this.posDic.values)parseInt(i.heroId)&&t.push(parseInt(i.heroId));for(let i of this.copyPosDic.values)parseInt(i.heroId)&&e.push(parseInt(i.heroId));return t.sort(),e.sort(),t.toString()===e.toString()}};var sp=class extends Wt{constructor(){super()}get view(){return this._view}dispose(){super.dispose()}createUI(){this.addChild(this._view),L.intance.on("CANCEL_HERO_POS",this,this.cancelHero),L.intance.on("SET_HERO_POSTION_SUCCESS",this,this.setHeroPosSuccess),this.view.btn_set.clickHandler=new Laya.Handler(this,this.onSetHeroPos)}async onSetHeroPos(){await mi.instance.setHeroPos()}setHeroPosSuccess(){De.instance.showErrorWord(2e4),O.intance.disposeView(h.HeroFormationDialog)}removeEvent(){L.intance.off("CANCEL_HERO_POS",this,this.cancelHero),L.intance.off("SET_HERO_POSTION_SUCCESS",this,this.setHeroPosSuccess)}async createUIEnd(){this.view.list.vScrollBarSkin="",this.view.list.dataSource=[],this.view.list.mouseHandler=new Laya.Handler(this,this.onListEvent),this.view.list.renderHandler=new Laya.Handler(this,this.onRenderList),await mi.instance.getHeroPos(),mi.instance.copyPosDic=ei.deepClone(mi.instance.posDic);let t=I.instance.m_heroData.heroVoDic.values;if(t&&t.length>0){let e=t.filter(i=>i.status!=2);this.view.list.array=e}this.updateList()}cancelHero(t){let e=mi.instance.copyPosDic.get(t);e.heroId="0",this.updateList()}updateList(){for(let t of mi.instance.copyPosDic.keys){let e=mi.instance.copyPosDic.get(t);this.view["pos"+t].dataSource=e}this.view.list.refresh()}onListEvent(t,e){switch(t.type){case Laya.Event.CLICK:this.handleSelectHero(e);break}}handleSelectHero(t){let e=this.view.list.array[t];for(let i of mi.instance.copyPosDic.values)if(i.heroId==e.id){this.cancelHero(i.position);return}for(let i of mi.instance.copyPosDic.keys){let r=mi.instance.copyPosDic.get(i);if(!parseInt(r.heroId)){r.heroId=e.id+"",this.view["pos"+i].dataSource=r;break}}this.view.list.refresh()}onRenderList(t,e){}onComplete(){}initData(){}};var lp=class a{constructor(){if(a._instance)throw new Error("LayerManager是单例,不可new.");a._instance=this}static get intance(){return a._instance||(a._instance=new a),a._instance}init(){Laya.ClassUtils.regClass(z.BASEALERTVIEW,Qu),Laya.ClassUtils.regClass(h.SkillTipDialog,Ju),Laya.ClassUtils.regClass(h.LuckdrawView,Zu),Laya.ClassUtils.regClass(h.UnionAttrView,np),Laya.ClassUtils.regClass(h.UnionAttrLvUpDialog,rp),Laya.ClassUtils.regClass(h.UnionAttributeDetailsDialog,ep),Laya.ClassUtils.regClass(h.HeroFormationDialog,sp)}};var cp=class a{constructor(){this.m_sprMap=new Laya.Sprite;this.m_Image=new Laya.Image}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){}showLoading(t=!1){if(this.loadingMc)this.m_sprMap.size(Laya.stage.width,Laya.stage.height),Q.m_bIsIphoneX&&(this.m_Image.scaleX=Q.IPHONEX_SCARE,this.m_Image.scaleY=Q.IPHONEX_SCARE),this.m_Image.x=(this.m_sprMap.width-this.m_Image.width*this.m_Image.scaleX)/2,this.m_Image.y=(this.m_sprMap.height-this.m_Image.height*this.m_Image.scaleY)/2,this.m_sprMap.x=(R.instence.m_iStageWidth-this.m_sprMap.width*this.m_sprMap.scaleX)/2,this.m_sprMap.y=(R.instence.m_iStageHeight-this.m_sprMap.height*this.m_sprMap.scaleY)/2,this.m_sprMap.visible=!0,Laya.timer.clear(this,this.showLazyBg),t?(this.m_Image.alpha=1,this.showLazyBg()):(this.m_Image.alpha=0,this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_sprMap.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,"#000000")),Laya.timer.once(300,this,this.showLazyBg));else return}showLazyBg(){this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_Image.alpha=1),this.loadingMc&&(this.loadingMc.x=Laya.stage.width/2,this.loadingMc.y=Laya.stage.height/2,this.loadingMc.play(),this.loadingMc.visible=!0)}hideLoading(){if(this.loadingMc)this.hideLoadingSHow();else return}hideLoadingSHow(){Laya.timer.clear(this,this.showLazyBg),this.loadingMc.stop(),this.loadingMc.visible=!1,this.m_sprMap.visible=!1}get isShow(){return this.loadingMc&&this.loadingMc.visible}dispose(){this.m_sprMap&&this.m_sprMap.graphics.clear(),Laya.timer.clear(this,this.showLazyBg),this.loadingMc&&(this.loadingMc.destroy(),this.loadingMc.removeSelf(),this.loadingMc=null)}};var He=class He{static get IsSetRelease(){return He._IsSetRelease}static get IsSetGuid(){return He._IsSetGuid}static initParms(){if(Laya.Browser.window.location){let e=Laya.Browser.window.location.href,i=this.getURLParameters(e);if(He.m_obj=i,console.log("1initgame-->urldata:",He.m_obj),He.m_obj.server&&He.m_obj.server!=""&&(F.httpRoot=He.m_obj.server),He.m_obj.socket&&He.m_obj.socket!=""){var t=He.m_obj.socket;Xe.m_strHttpHost=t+"/websocket"}if(He.m_obj.address&&He.m_obj.address!=""&&(Y.instance.walletAddress=He.m_obj.address),He.m_obj.from&&He.m_obj.from=="into"&&(Q.isInto=!0),He.m_obj.isFull&&He.m_obj.isFull=="1"&&(Q.isFull=!0),He.m_obj.justFull&&He.m_obj.justFull=="1"&&(Q.justFull=!0),He.m_obj.white&&He.m_obj.white=="1"&&(Q.isWhite=!0),He.m_obj.debug&&He.m_obj.debug!="0"&&(Q.Debug=parseInt(He.m_obj.debug)),He.m_obj.res&&He.m_obj.res!="0"&&(Q.Res=parseInt(He.m_obj.res)),He.m_obj.lang&&He.m_obj.lang!=""){let r=parseInt(He.m_obj.lang);r<1&&(r=1),Q.ignoreLang=!0,I.instance.m_strLanguage=r}}}static getURLParameters(t){let e={};return t.replace(/[?&]+([^=&]+)=([^&]*)/gi,(i,r,n)=>e[r]=decodeURIComponent(n)),e}static cheakStr(t){let e=new RegExp("[A-Za-z0-9_-\\s]","g"),i=t.match(e);return!!(i&&i.length==t.length)}static isNumber(t){return/^(?!0\d)\d*\.?\d*$/.test(t)}static roundToTwoDecimals(t){return t%1===0?t.toString():Number(t.toFixed(2)).toString()}static filterObjectsByState(t,e){return t.filter(i=>i.state===e)}static getArenaByTicketId(t){let e=j.intance.m_dicArenaDic.values;for(let i of e)if(Array.isArray(i.item)&&i.item.length>0&&i.item[0]===t)return i.name}static processItemsArray(t,e=!0){let i=[3006,3001,3007,3004,3005],r={},n={};t.forEach(l=>{i.indexOf(l.id)>-1?n[l.id]?n[l.id].count+=l.count:n[l.id]=l:r[l.id]=l}),e&&i.forEach(l=>{n[l]||(n[l]={type:1,id:l,count:0})});let o=Object.values(n),s=Object.values(r);return o=o.sort((l,c)=>i.indexOf(l.id)-i.indexOf(c.id)),[o,s]}static sumItemCount(t){let e=new Map;return t.forEach(r=>{r.reward.forEach(n=>{let{type:o,id:s,count:l}=n;e.has(s)?e.set(s,{type:o,id:s,count:e.get(s).count+l}):e.set(s,{type:o,id:s,count:l})})}),Array.from(e.values())}static addIndexToObjects(t){return t.forEach((e,i)=>{e.index=i}),t}static findFirstTypeAndNotGold(t){let e=[3006,3001,3007,3004];for(let i=0;i<t.length;i++)if(e.indexOf(t[i].id)>-1)return t[i]}static getTitleByGoodsId(t,e){for(let i of t)if(i.goods===e)return i.title;return null}};He._IsSetRelease=!1,He._IsSetGuid=!1;var Re=He;var{regClass:Ow}=Laya,so=class extends Cl{constructor(){super(...arguments);this.isLogout=!1;this.dotNum=0;this.m_nProgress=0}onAwake(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),Laya.loader.load(["res/common/comm_bg/img_loading_bg.jpg","res/loading/progress_load1.png","res/loading/progress_load1$bar.png"]).then(()=>{this.createUI(),this.init()})}onError(e){console.log("加载失败: "+e)}createUI(){this.m_nSendTime=Laya.timer.currTimer,Ae.instance.init(),Ae.instance.playMusicByName(Ae.soundName_bg,".mp3"),L.intance.on(v.EVENT_BACK_TO_LOGIN,this,this.backToLogin),L.intance.on(v.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),L.intance.on(v.EVENT_ENTER_MAIN,this,this.loginCallBack),this.initLoad();let e=Q.User_Lan;var i=getGameVersion();this.txtLoad.text=i,console.log("VERSION: "+i);let r=new ta;r.ID=1,r.Event="加载版本信息 "+i,_e.instance.sendCustumEvent(1,null,r),pi.Initialize(Laya.stage,!0)}handleClickBtn(e){switch(e){}}initLoad(){this.onAssetLoaded()}onAssetLoaded(){this.loadingProcess=0,this.m_nProgress=0,Laya.timer.loop(1800,this,this.onLoading,[this.m_nProgress])}set loadingProcess(e){e>1&&(e=1),this.mcProcess.value=e,this.txtProcess.text=Math.floor(e*100)+"%";var i=e*this.mcProcess.width-70;i<0&&(i=0),this.img_guang.x=i,console.log("loadingProcess: "+e)}init(){f.instance.FGM_GetLanguage(),lp.intance.init(),R.instence.init(),be.intance.init(),cp.instance.init(),O.intance.init(),I.instance.init();let e=new ta;e.ID=3,e.Event="加载资源信息",_e.instance.sendCustumEvent(3,null,e),M.instance.init(),Re.initParms()}backToLogin(){Laya.timer.clear(this,this.onLoading),this.m_nProgress=0,Laya.loader.load(M.instance.m_arrInitResource,Laya.Handler.create(this,this.getLoginData),Laya.Handler.create(this,this.onLoading2,null,!1))}getLoginData(){_e.instance.sendCustumEvent(7),this.readyInitGame()}readyInitGame(){if(this.isLogout){L.intance.event(v.EVENT_LOADING_SUC);return}this.mcProcess&&(this.loadingProcess=.8+.2),Q.isWhite?this.loginGame():this.onGetNotice()}async onGetNotice(){F.requestPost("wxgame/sys/notice",{type:1},!1,!1).then(e=>{var i=e;if(i.status==0&&i.nowTime>=i.startTime&&i.nowTime<=i.endTime){var r=parseInt(I.instance.m_strLanguage.toString()),n=i.title[r],o=i.contents[r];O.intance.openModule(h.NoticeDialog,[1,n,o]);return}this.loginGame()}).catch(e=>{O.intance.openModule(h.NoServerView)})}async loginGame(){L.intance.event(v.EVENT_LOADED_COMPLETE),await Y.instance.init(),await Y.instance.dappLogin()}async loginGameEnd(e){K.instance.showLoading(!0),_e.instance.sendCustumEvent(8),j.intance.init(),Li.instance.init(),console.log("PreLoadingView.joinGame()");let i=Laya.timer.currTimer-this.m_nSendTime;if(_e.instance.sendCustumEvent(22),!e){O.intance.openModule(h.NoServerView);return}e.loginState==1?(console.log("have no regist"),_e.instance.sendCustumEvent(23),O.intance.openModule(h.CreateLoginView)):(_e.instance.sendCustumEvent(30),e.playerDto?(_e.instance.sendCustumEvent(31),console.log("registed "+e.playerDto.name),I.instance.playerDto=e.playerDto,this.loginCallBack()):(_e.instance.sendCustumEvent(32),console.log("getRegisted error"),te.instance.notice(f.instance.getLanguage(135))))}async loginCallBack(){console.log("loginCallBack++++++++++++++++++++++++++++++++"),K.instance.hideLoading();var e=I.instance.playerDto;if(e.roomId>0){let i=await F.requestPost("wxgame/room/info",{roomId:e.roomId});$.instance.roomDto=i.roomDto,i.roomDto?e.roomState==0?O.intance.openModule(h.EnterRoomView):e.roomState==1&&Xe.instance.initSocket():te.instance.notice(f.instance.getLanguage(135))}else ge.logs("进入主界面",5),_e.instance.sendCustumEvent(33),be.intance.setCurrentScene(re.M_SCENE_MAIN);F.startHeart()}onLoading(e){this.m_nProgress+=.01,this.mcProcess&&e>this.mcProcess.value&&(this.loadingProcess=e*.4)}onLoading2(e){this.mcProcess&&(this.loadingProcess=0+e*1.1)}removeEvent(){L.intance.off(v.EVENT_BACK_TO_LOGIN,this,this.backToLogin),L.intance.off(v.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),L.intance.off(v.EVENT_ENTER_MAIN,this,this.loginCallBack)}};so.m_iState=1,so=m([Ow("xmaaYG8AQ1yC07pr_JvyPA")],so);var{regClass:Hw,property:Cq}=Laya,Js=class extends Laya.Script{constructor(){super()}onEnable(){Laya.timer.frameLoop(1,this,this.onRunRoll),this.onScaleEnd1()}onRunRoll(){this.owner.rotation++}onScaleEnd1(){Laya.Tween.to(this.owner,{scaleX:1.1,scaleY:1.1,alpha:.8},500,null,Laya.Handler.create(this,this.onScaleEnd2))}onScaleEnd2(){Laya.Tween.to(this.owner,{scaleX:.8,scaleY:.8,alpha:.5},500,null,Laya.Handler.create(this,this.onScaleEnd1))}onDisable(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};Js=m([Hw("w5pr4pHJTMOM3bYxCyc4Ag")],Js);var lo=class lo extends Laya.ColorFilter{constructor(t=null){super(t)}static addClickFilter(t){let e=t.filters||[];e.push(lo.clickFilter),t.filters=e}static clearClickFilter(t){let e=t.filters;if(e!=null&&e.length>0){for(let i=e.length-1;i>-1;i--)e[i]instanceof lo&&e.splice(i,1);t.filters=e}}};lo.clickFilter=new lo([1,0,0,0,-34,0,1,0,0,-34,0,0,1,0,-34,0,0,0,1,0]);var lr=lo;var{regClass:Uw,property:Vw}=Laya,co=class extends Laya.Script{constructor(){super();this.noSound=!1}onEnable(){let e=this.owner.scaleX;this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onUp)}onDown(){this.noSound||Ae.instance.playSoundByName(Ae.soundName4),lr.addClickFilter(this.owner)}onUp(){lr.clearClickFilter(this.owner)}onDisable(){lr.clearClickFilter(this.owner),this.owner.off(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.onUp)}};m([Vw({type:"boolean"})],co.prototype,"noSound",2),co=m([Uw("cL1AmqOiTHmtQWKayPNcTA")],co);var up=class extends Laya.Scene{};var{regClass:Gw}=Laya,pp=class extends up{constructor(){super(...arguments);this.tokenIndex=0;this.tokenIndex2=0;this.withdrawText=null;this.webData=["BSC_TESTNET","MATCH","BSC"];this.tokenData=[];this.currTab=0;this.type=3;this.coinType=-1}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){this.list_champ.array=[],e&&e.length>1&&(this.type=e[0],this.coinType=e[1],this.onClickTab(this.type)),this.withdrawText=this.withdrawCode.prompt}onEnable(){L.intance.on(v.EVENT_WELFARE_CLAIM,this,this.onClaimWelfare),this.btn_champDetail.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_champDetail]),this.btn_champRecord.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_champRecord]),L.intance.on(v.EVENT_RECHARGE_GET,this,this.rechargeEnd),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_4.on(Laya.Event.CLICK,this,this.onClickTab,[4]),this.btn_5.on(Laya.Event.CLICK,this,this.onClickTab,[5]),this.rechargeCode.on(Laya.Event.INPUT,this,this.onRechargeCodeInput),this.withdrawCode.on(Laya.Event.INPUT,this,this.onRechargewithdrawCodeInput),L.intance.on(v.CHANGE_ASSET_CHAIN,this,this.changeAssetChain),this.btn_hireRecord.on(Laya.Event.CLICK,this,this.onHireRecord),this.btn_proxyRecord.on(Laya.Event.CLICK,this,this.onProxyRecord),this.btn_claimHire.on(Laya.Event.CLICK,this,this.onClaimHire),this.btn_claimProxy.on(Laya.Event.CLICK,this,this.onClaimProxy),this.list_web.renderHandler=Laya.Handler.create(this,this.onWebItemRender,null,!1),this.list_token.renderHandler=Laya.Handler.create(this,this.onTokenItemRender,null,!1),this.list_web2.renderHandler=Laya.Handler.create(this,this.onWebItemRender,null,!1),this.list_token2.renderHandler=Laya.Handler.create(this,this.onTokenItemRender,null,!1),this.box_web.on(Laya.Event.CLICK,this,this.onOpenWeb),this.box_web2.on(Laya.Event.CLICK,this,this.onOpenWeb2),this.box_token.on(Laya.Event.CLICK,this,this.onOpenToken),this.box_token2.on(Laya.Event.CLICK,this,this.onOpenToken2),this.btn_confirm.on(Laya.Event.CLICK,this,this.onbtnConfirm),this.btn_max.on(Laya.Event.CLICK,this,this.onbtnMax),this.btn_withdraw.on(Laya.Event.CLICK,this,this.onBtnWithdraw),this.btn_withdrawRecord.on(Laya.Event.CLICK,this,this.onBtnWithdrawRecord),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.box_all.visible=!1,this.initDataView()}setTab(e){for(let i=1;i<7;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b",this["box_"+i]&&(this["box_"+i].visible=!0)):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe",this["box_"+i]&&(this["box_"+i].visible=!1))}async initDataView(){this.destroyed||(this.type?this.onClickTab(this.type):this.onClickTab(5),this.list_hire.visible=!1,this.list_proxy.visible=!1,this.listHireReward.visible=!1)}async showHireData(){var e=await F.requestPost("wxgame/lease/outline",{});if(e&&e.reward){let r=Re.processItemsArray(e.reward);e.reward.length>0?this.btn_claimHire.disabled=!1:this.btn_claimHire.disabled=!0;let n=r[0];this.list_hire.array=n,this.list_hire.selectedIndex=-1,this.list_hire.visible=!0,e.leaderCount?this.tf_hireNum.text=f.instance.getLanguage(1179,e.leaderCount):this.tf_hireNum.text=f.instance.getLanguage(1179,0);let o=r[1];var i=[];o.forEach(s=>{var l=new $e(s.id);l.newAddCnt=s.count,i.push(l)}),this.listHireReward.array=i,this.listHireReward.selectedIndex=-1,this.listHireReward.visible=!0}}async showProxyData(){var e=await F.requestPost("wxgame/lease/outline",{});if(e&&e.childReward){let i=Re.processItemsArray(e.childReward)[0];e.childReward.length>0?this.btn_claimProxy.disabled=!1:this.btn_claimProxy.disabled=!0,this.list_proxy.array=i,this.list_proxy.visible=!0,this.list_proxy.selectedIndex=-1,e.childCount?this.tf_proxyNum.text=f.instance.getLanguage(1180,e.childCount):this.tf_proxyNum.text=f.instance.getLanguage(1180,0)}}async onClickTab(e){if(this.currTab!=e){if(this.setTab(e),this.box_all.visible=!0,e==1)this.box_1.visible=!0,this.initNetComboBox(),this.initContainer();else if(e!=2){if(e==3)this.showHireData();else if(e==4)this.showProxyData();else if(e==5){var i=await F.requestPost("wxgame/welfare/outline",{});i?(this.tf_champNum.text=f.instance.getLanguage(1133)+" "+i.welfareCount,this.list_champ.array=i.welfareDtoList):te.instance.notice(f.instance.getLanguage(135))}}}}async handleClickBtn(e){switch(e){case this.btn_champDetail:{let i=await F.requestPost("wxgame/welfare/list",{});i.welfareDtoList?O.intance.openModule(h.ChampDetailDialog,i.welfareDtoList):te.instance.notice(f.instance.getLanguage(135))}break;case this.btn_champRecord:{let i=await F.requestPost("wxgame/welfare/takeList",{});i.welfareDtoList?O.intance.openModule(h.ChampRecordDialog,i.welfareDtoList):te.instance.notice(f.instance.getLanguage(135))}break}}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}onClaimWelfare(e){var i=this.list_champ.array;if(i instanceof Array){for(let r of i)if(r.coinType==e.coinType){r.takeValue=0;continue}this.list_champ.refresh()}}removeEvent(){L.intance.off(v.EVENT_WELFARE_CLAIM,this,this.onClaimWelfare),this.btn_1.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_2.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_3.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_4.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_5.off(Laya.Event.CLICK,this,this.onClickTab),this.rechargeCode.off(Laya.Event.INPUT,this,this.onRechargeCodeInput),L.intance.off(v.CHANGE_ASSET_CHAIN,this,this.changeAssetChain),this.btn_hireRecord.off(Laya.Event.CLICK,this,this.onHireRecord),this.btn_proxyRecord.off(Laya.Event.CLICK,this,this.onProxyRecord),this.btn_claimHire.off(Laya.Event.CLICK,this,this.onClaimHire),this.btn_claimProxy.off(Laya.Event.CLICK,this,this.onClaimProxy),this.box_web.off(Laya.Event.CLICK,this,this.onOpenWeb),this.box_token.off(Laya.Event.CLICK,this,this.onOpenToken),this.box_token2.off(Laya.Event.CLICK,this,this.onOpenToken2),this.btn_confirm.off(Laya.Event.CLICK,this,this.onbtnConfirm),this.btn_max.off(Laya.Event.CLICK,this,this.onbtnMax)}onOpenWeb(){this.img_web_pad.visible==!1&&(this.img_web_pad.visible=!0,Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onOpenWeb2(){this.img_web_pad2.visible==!1&&(this.img_web_pad2.visible=!0,Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onOpenToken(){this.img_token_pad.visible==!1&&(this.img_token_pad.visible=!0,Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onOpenToken2(){this.img_token_pad2.visible==!1&&(this.img_token_pad2.visible=!0,Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onWebItemRender(e,i){e&&e.onChange&&e.onChange(this.list_web.selectedIndex==i)}onTokenItemRender(e,i){e&&e.onChange&&e.onChange(this.list_token2.selectedIndex==i)}createWebList(){this.list_web.array=this.webData,this.list_web.visible=!0,this.list_web2.array=this.webData,this.list_web2.visible=!0,this.initNetComboBox()}createTokenList(){this.tokenIndex=0,this.tokenData[this.tokenIndex]&&(this.list_token.array=this.tokenData,this.list_token.visible=!0,this.list_token.selectedIndex=0,this.list_token2.array=this.tokenData,this.list_token2.visible=!0,this.list_token2.selectedIndex=0)}onHideList(){this.img_web_pad.visible=!1,this.img_token_pad.visible=!1,this.img_web_pad2.visible=!1,this.img_token_pad2.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideList)}async initContainer(){this.list_web.selectHandler=new Laya.Handler(this,this.handleSelectWeb),this.list_token.selectHandler=new Laya.Handler(this,this.handleSelectToken),this.list_web2.selectHandler=new Laya.Handler(this,this.handleSelectWebWithdraw),this.list_token2.selectHandler=new Laya.Handler(this,this.handleSelectTokenWithdraw),this.tf_adress.text=Y.instance.walletAddress,this.createWebList(),this.createTokenList()}async getRestCoin(e){try{let i=await Y.instance.getBalance2(e),r=Vi(i);this.tf_rest.text=`${Re.roundToTwoDecimals(Number(r))}`}catch(i){if(i instanceof Error){let r=i.message}this.tf_rest.text="0"}}async initNetComboBox(){let e=await Y.instance.walletClient.getChainId();if(e){let i=Y.instance.getChainNameByID(e),r=this.getListIndexByName(i);this.list_web.selectedIndex=r,this.list_web2.selectedIndex=r}}getListIndexByName(e){return this.list_web.array.findIndex(i=>i==e)}async switchChain(e=!0){let i=Hr[this.tf_web.text];try{let o=await Y.instance.walletClient.getChainId();if(i!==o||e){var r=await Y.instance.switchChain(i);if(!r){console.log("切换失败，请手动切换"),this.initNetComboBox();return}}var n=Y.instance.getCoinAddress(Oe.TYPE_TOX);let s=n[i];this.getRestCoin(s),this.initNetComboBox()}catch(o){if(o instanceof Error&&o.message.includes("Unrecognized chain ID")){await Y.instance.addChain(i);var n=Y.instance.getCoinAddress(Oe.TYPE_TOX);let c=n[i];this.getRestCoin(c)}this.initNetComboBox()}}async handleSelectWeb(e){if(e!=-1){let i=this.list_web.selectedItem;this.tf_web.text=`${i}`,this.tf_web2.text=`${i}`,this.tokenIndex=0,this.createTokenList(),this.list_web2.selectedIndex=this.list_web.selectedIndex,this.handleSelectToken(this.tokenIndex),this.switchChain(!0)}}async handleSelectWebWithdraw(e){if(e!=-1){let i=this.list_web2.selectedItem;this.tf_web2.text=`${i}`,this.tf_web.text=`${i}`,this.list_web.selectedIndex=this.list_web2.selectedIndex,this.tokenIndex=0,this.createTokenList(),this.handleSelectToken(this.tokenIndex),this.switchChain(!0)}}handleSelectToken(e){if(e!=-1){let i=this.list_token.selectedItem,r=this.list_token2.selectedItem;this.tf_token.text=`${i}`,this.tf_token2.text=`${r}`,this.tokenIndex=e}}handleSelectTokenWithdraw(e){if(e!=-1){let i=this.list_token2.selectedItem;this.tf_token2.text=`${i}`;let r=0;switch(this.tf_token2.text){case"TOX":r=I.instance.getConsumeValue(Oe.TYPE_TOX);break;case"ETH":r=I.instance.getConsumeValue(Oe.TYPE_ETH);break;case"BTC":r=I.instance.getConsumeValue(Oe.TYPE_BTC);break;case"TOX":r=I.instance.getConsumeValue(Oe.TYPE_USDT);break}this.tf_appAmount.text=`${r}`}}onRechargeCodeInput(){let e=Number(this.rechargeCode.text),i=Re.isNumber(this.rechargeCode.text);(e<0||!i)&&(this.rechargeCode.text="0")}async onbtnConfirm(){let e=Number(this.tf_rest.text),i=Number(this.rechargeCode.text),r=await Y.instance.walletClient.getChainId();if(!i){Ie.instance().AlertByType(z.BASEALERTVIEW,De.instance.get(33),z.YES);return}if(e<i){Ie.instance().AlertByType(z.BASEALERTVIEW,De.instance.get(34),z.YES);return}K.instance.showLoadingByInfo();let n=r==St.id?oe.RECHANGE_ADDRESS:oe.RECHANGE_ADDRESS_TOX;var o=Y.instance.getCoinAddress(Oe.TYPE_TOX);let s=o[r];await sr.instance.rechargeToken(i,s,n)&&(K.instance.hideLoading(),this.getRestCoin(s),I.instance.rechargeEnd=!0,Ie.instance().AlertByType(z.BASEALERTVIEW,De.instance.get(35),z.YES),this.getReward(),Laya.timer.loop(2e3,this,this.getReward))}async getReward(){let e=await F.requestPost("wxgame/sys/payCallPack",{});if(e&&e.coin){let r=e.coin[0];L.intance.event(Bt.UPDATE_LOCAL_WALLET_LIST_EVENT);var i=new Oi;i.id=r[0],i.count=r[1],O.intance.openModule(h.RewardGetDialog,[i]),this.rechargeEnd()}}rechargeEnd(){I.instance.rechargeEnd=!1,Laya.timer.clear(this,this.getReward)}async refreshToken(){try{let i=await Y.instance.walletClient.getChainId();var e=Y.instance.getCoinAddress(Oe.TYPE_TOX);let r=e[i],n=await Y.instance.getBalance2(r),o=Vi(n);this.tf_rest.text!==o&&(this.tf_rest.text=`${Re.roundToTwoDecimals(Number(o))}`,Laya.timer.clear(this,this.refreshToken))}catch{this.tf_rest.text="0"}}onbtnMax(){let e=Number(this.tf_rest.text);this.rechargeCode.text=`${e}`}initTokenWebData(){this.webData=[];var e=j.intance.getGeneralValueById(7);if(e)for(let i=0;i<e.length;i++)switch(e[i]){case 1:this.webData.push("MATCH");break;case 2:this.webData.push("BSC_TESTNET");break}this.initTokenData(),this.switchChain(!1)}changeAssetChain(){Ie.instance().AlertByType(z.BASEALERTVIEW,De.instance.get(36),z.YES,Laya.Handler.create(this,()=>{this.switchChain(!0)}))}initTokenData(){this.tokenData=[];var e=j.intance.getGeneralValueById(8);if(e=[1],e)for(let i=0;i<e.length;i++)switch(e[i]){case 1:this.tokenData.push("TOX");break;case 2:this.tokenData.push("USDT");break}}onHireRecord(){O.intance.openModule(h.HireDetailDialog)}onProxyRecord(){O.intance.openModule(h.ProxyDetailDialog)}async onClaimHire(){var e=await F.requestPost("wxgame/lease/take",{});if(e&&e.reward.length>0){let i=e.reward,r=[];i.forEach(n=>{var o=new Oi;o.id=n.id,o.count=n.count,r.push(o)}),O.intance.openModule(h.RewardGetDialog,r)}this.showHireData()}async onClaimProxy(){var e=await F.requestPost("wxgame/lease/childTake",{});if(e&&e.reward&&e.reward.length>0){let i=e.reward;i=Re.processItemsArray(i,!1)[0];let r=[];i.forEach(n=>{var o=new Oi;o.id=n.id,o.count=n.count,r.push(o)}),O.intance.openModule(h.RewardGetDialog,r)}this.showProxyData()}onRechargewithdrawCodeInput(){let e=Number(this.withdrawCode.text),i=Re.isNumber(this.withdrawCode.text);(e<0||!i)&&this.withdrawCode.text!==this.withdrawText&&(this.withdrawCode.text="0")}onBtnWithdraw(){let e=this.withdrawCode.text,i=this.tf_appAmount.text,r=this.tf_canAmount.text,n=this.tf_servicerate.text,o=this.tf_arrive.text}onBtnWithdrawRecord(){O.intance.openModule(h.WithDrawRecordDialog)}};pp=m([Gw("lWg_-biNSI2538WxA3KVVw")],pp);var mp=class extends Laya.Dialog{};var{regClass:zw}=Laya,dp=class extends mp{constructor(){super()}onEnable(){this.list_champ.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1)}setOpenData(t){t&&t instanceof Array&&(this.list_champ.array=t)}onItemRender(t,e){t.onSetIndex(e)}onDisable(){}};dp=m([zw("mXj9kkXUQny2iuvlC1REmA")],dp);var ct=class ct{constructor(){}static formatMM(t){if(t<=0)return"00:000";let e,i;e=t/1e3,i=t%1e3;let r="";return e<=9&&(r+="0"),r+=Math.floor(e),r+=":",i<=9?r+="00":i<=99&&(r+="0"),r+=i,r}static format(t,e=":",i=!0){if(t<=0)return i?"00:00:00":"00:00";let r,n,o,s,l;s=t/3600,o=t%3600,l=o/60,r=o%60;let c="";return i&&(s<=9&&(c+="0"),c+=Math.floor(s)+e),l<=9&&(c+="0"),c+=Math.floor(l)+e,Math.ceil(r)<=9&&(c+="0"),c+=Math.ceil(r),c}static formatWithDay(t,e=":"){if(t<=0)return"00:00";let i,r,n,o,s;r=t/86400,n=t%86400,o=n/3600,n=n%3600,s=n/60,i=n%60;let l="";if(r>=1){let c=r>1?2005:2003;l=f.instance.getLanguage(c,Math.floor(r))+" ",o<=9&&(l+="0"),i%2!=0&&(e=ge.getColorText(e,"#412b20")),l+=Math.floor(o)+e,s<=9&&(l+="0"),l+=Math.floor(s)}else o<=9&&(l+="0"),l=Math.floor(o)+e,s<=9&&(l+="0"),l+=Math.floor(s)+e,Math.ceil(i)<=9&&(l+="0"),l+=Math.ceil(i);return l}static getTimeArray(t,e="HH-MM-SS"){if(t=Math.max(0,t),e.indexOf("-")==-1)return[];let i=[],r=e.split("-");for(let n of r)n=="DD"?i.push(Math.floor(t/ct.OneDaySceond)):n=="HH"?i.push(Math.floor(t%ct.OneDaySceond/ct.OneHourSceond)):n=="MM"?i.push(Math.floor(t%ct.OneHourSceond/ct.OneMiniuteSecond)):n=="SS"&&i.push(t%ct.OneMiniuteSecond);return i}static getServerDate(t){return new Date(t)}static formatTime(t){return(parseInt(t/60+"")+100).toString().substring(1)+":"+(parseInt(t%60+"")+100).toString().substring(1)}static formatTime000000(t){return t?(parseInt(t/3600+"")+100).toString().substring(1)+":"+(parseInt(t%3600/60+"")+100).toString().substring(1)+":"+(parseInt(t%60+"")+100).toString().substring(1):"00:00:00"}static formatTimeStamp(t,e="YY-MT-DD HH:MM:SS"){let i=ct.getServerDate(t),r="";if(e.indexOf("YY")>=0&&(r=i.getFullYear()+"",e=e.replace("YY",r)),e.indexOf("MT")>=0){let n=i.getMonth()+1;n>9?r=n+"":r="0"+n,e=e.replace("MT",r)}if(e.indexOf("DD")>=0){let n=i.getDate();n>9?r=n+"":r="0"+n,e=e.replace("DD",r)}if(e.indexOf("HH")>=0){let n=i.getHours();n>9?r=n+"":r="0"+n,e=e.replace("HH",r)}if(e.indexOf("MM")>=0){let n=i.getMinutes();n>9?r=n+"":r="0"+n,e=e.replace("MM",r)}if(e.indexOf("SS")>=0){let n=i.getSeconds();n>9?r=n+"":r="0"+n,e=e.replace("SS",r)}return e}static formatTimeStamps(t,e="YY-MT-DD HH:MM:SS"){let i=ct.getServerDate(t),r=e;return r=ct.parseTimeDetail(i,r,"YY",!1),r=ct.parseTimeDetail(i,r,"MT",!1),r=ct.parseTimeDetail(i,r,"DD",!1),r=ct.parseTimeDetail(i,r,"HH",!0),r=ct.parseTimeDetail(i,r,"MM",!0),r=ct.parseTimeDetail(i,r,"SS",!0),r}static parseTimeDetail(t,e,i,r){if(e.indexOf(i)>=0){let n,o;i=="YY"?o=t.getFullYear():i=="MT"?o=t.getMonth()+1:i=="DD"?o=t.getDate():i=="HH"?o=t.getHours():i=="MM"?o=t.getMinutes():i=="SS"&&(o=t.getSeconds()),o>9||!r?n=o.toString():n="0"+o,e=e.replace(i,n)}return e}static getServerTimeStr(){return ct.formatTimeStamp(Laya.timer.currTimer)}static getTimeArr(){return ct.getServerTimeStr().split("/")}static get getDay(){let e=ct.getServerTimeStr().split("/");return parseInt(e[2])}static parseSheetTime(t){let e="";if(t){let i=t.length;for(let r=0;r<i;r++){let n="";t[r]<10?n="0"+t[r]:n=t[r],r!==i-1&&(n=n+":"),e+=n}}return e}static dateStringToTimestamp(t){let[e,i,r]=t.split("-").map(Number),n=new Date(e,i-1,r).getTime();return Number(n)}static getCurrentDayTimestamp(){let t=new Date;return t.setHours(0,0,0,0),t.getTime()}static getYearMonthDat(t){let e=new Date(t),i=e.getFullYear(),r=e.getMonth()+1<10?"0"+(e.getMonth()+1):""+(e.getMonth()+1),n=e.getDate()<10?"0"+e.getDate():""+e.getDate();return`${i}-${r}-${n}`}};ct.OneDaySceond=24*3600,ct.OneHourSceond=3600,ct.OneMiniuteSecond=60;var Qe=ct;var hp=class extends Laya.Box{};var{regClass:Fw}=Laya,fp=class extends hp{set dataSource(e){super.dataSource=e,this.welfareDto=e,this.welfareDto&&this.setCurrentOutPut()}onSetIndex(e){this.tf_id.text=e+1+""}setCurrentOutPut(){this.tf_createDate.text=Qe.formatTimeStamp(this.welfareDto.createDate,"YY-MT-DD");let e=this.welfareDto.coinType;this.img_coinType.skin=M.instance.getMoneyIcon(e),this.tf_type.text=f.instance.getUILang("Staking_Type_"+this.welfareDto.type),this.tf_coinValue.text=Te.formatNumberStr(this.welfareDto.coinValue,8),this.tf_remainValue.text=Te.formatNumberStr(this.welfareDto.remainValue,8),this.tf_remainDays.text=this.welfareDto.remainDays+""}};fp=m([Fw("b0cMZEy9S5q2q_vqsjWzDA")],fp);var bp=class extends Laya.Box{};var{regClass:jw}=Laya,yp=class extends bp{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.btn_claim.on(Laya.Event.CLICK,this,this.onClaim),this.isAddEvent=!0)}async onClaim(){if(this.welfareOutlineDto.takeValue>0){let i=await F.requestPost("wxgame/welfare/take",{coinType:this.welfareOutlineDto.coinType});if(i){var e=new Oi;e.id=i.coinType,e.count=i.coinValue,O.intance.openModule(h.RewardGetDialog,[e]),L.intance.event(v.EVENT_WELFARE_CLAIM,i)}else te.instance.notice(f.instance.getLanguage(135))}}set dataSource(e){super.dataSource=e,this.welfareOutlineDto=e,this.welfareOutlineDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.welfareOutlineDto.coinType;this.img_coinType.skin=M.instance.getItemIcon(e),this.tf_allValue.text=Te.formatNumberStr(this.welfareOutlineDto.allValue,8),this.tf_todayRelease.text=Te.formatNumberStr(this.welfareOutlineDto.todayRelease,8),this.tf_takeValue.text=Te.formatNumberStr(this.welfareOutlineDto.takeValue,8),this.btn_claim.disabled=this.welfareOutlineDto.takeValue<=0}};yp=m([jw("XTGeF2FhTp2j7VZIhqRAtg")],yp);var gp=class extends Laya.Dialog{};var{regClass:qw}=Laya,vp=class extends gp{constructor(){super()}onEnable(){this.list_champ.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1)}setOpenData(t){t&&t instanceof Array&&(this.list_champ.array=t)}onItemRender(t,e){t.onSetIndex(e)}onDisable(){}};vp=m([qw("RzcjHDjIS62Ejw744kaKKw")],vp);var Lp=class extends Laya.Box{};var{regClass:Ww}=Laya,_p=class extends Lp{set dataSource(e){super.dataSource=e,this.welfareTakeDto=e,this.welfareTakeDto&&this.setCurrentOutPut()}onSetIndex(e){this.tf_id.text=e+1+""}setCurrentOutPut(){this.tf_takeTime.text=Qe.formatTimeStamp(this.welfareTakeDto.takeTime,"YY-MT-DD");var e=this.welfareTakeDto.reward,i=[];e&&e.forEach(r=>{var n=new $e(r.id);n.newAddCnt=r.count,i.push(n)}),this.list_reward.array=i}};_p=m([Ww("0TASbeEtRlmozr-j6sElTw")],_p);var wp=class extends Laya.Dialog{};var{regClass:Kw}=Laya,xp=class extends wp{constructor(){super()}onEnable(){this.setOpenData(),this.list_sum.visible=!1,this.list_sumProp.visible=!1,this.list_champ.visible=!1}async setOpenData(){var t=await F.requestPost("wxgame/lease/takeList",{});if(t){let i=t.list;i=Re.addIndexToObjects(i),this.list_champ.array=i,this.list_champ.visible=!0;let r=Re.sumItemCount(i),n=Re.processItemsArray(r,!1),o=n[0],s=n[1];this.list_sum.array=o,this.list_sum.visible=!0,o.length>3?this.list_sum.y=506:this.list_sum.y=533;var e=[];s.forEach(l=>{var c=new $e(l.id);c.newAddCnt=l.count,e.push(c)}),this.list_sumProp.array=e,this.list_sumProp.visible=!0}}onItemRender(t,e){}onDisable(){}};xp=m([Kw("ZG7XYFvMTD-oZPNAmJhfIQ")],xp);var Ip=class extends Laya.Box{};var{regClass:Yw}=Laya,Ep=class extends Ip{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,console.log(e),this.itemDto=e,this.itemDto&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.itemDto.id;this.img_coinType.skin=M.instance.getItemIcon(e),this.tf_takeValue.text=Te.formatNumberStr(this.itemDto.count,8)}};Ep=m([Yw("S4XctoHfRm66A2jjw3rSsQ")],Ep);var Sp=class extends Laya.Box{};var{regClass:$w}=Laya,Tp=class extends Sp{constructor(){super();this.isAddEvent=!1}addEvent(){}set dataSource(e){super.dataSource=e,this.pledgeData=e,this.pledgeData&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.pledgeData.reward,i=Re.processItemsArray(e,!1),r=i[0],n=i[1];this.list_champ.array=r,r.length>3?this.list_champ.y=14:this.list_champ.y=40,this.tf_id.text=`${this.pledgeData.index+1}`;var o=[];n.forEach(s=>{var l=new $e(s.id);l.newAddCnt=s.count,o.push(l)}),this.listHireReward.array=o,this.tf_days.text=Qe.getYearMonthDat(this.pledgeData.takeTime)}};Tp=m([$w("_mG5oDuaQY6l5yGUFmpG4w")],Tp);var Cp=class extends Laya.Box{};var{regClass:Xw}=Laya,kp=class extends Cp{constructor(){super();this.isAddEvent=!1}addEvent(){}set dataSource(e){super.dataSource=e,this.pledgeData=e,e&&(this.addEvent(),this.setCurrentOutPut(e))}async setCurrentOutPut(e){this.img_coinType.skin=M.instance.getItemIcon(e.id),this.tf_coinValue.text=Te.formatNumberStr(e.count,8)}};kp=m([Xw("5t1LQunTRFOali6ENPwdqQ")],kp);var Ap=class extends Laya.Dialog{};var{regClass:Qw}=Laya,Dp=class extends Ap{constructor(){super()}onEnable(){this.setOpenData(),this.list_sum.visible=!1,this.list_sumProp.visible=!1,this.list_champ.visible=!1}async setOpenData(){var t=await F.requestPost("wxgame/lease/childTakeList",{});if(t){let i=t.list;i=Re.addIndexToObjects(i),this.list_champ.array=i,this.list_champ.visible=!0;let r=Re.sumItemCount(i),n=Re.processItemsArray(r,!1),o=n[0],s=n[1];this.list_sum.array=o,this.list_sum.visible=!0,o.length>3?this.list_sum.y=506:this.list_sum.y=533;var e=[];s.forEach(l=>{var c=new $e(l.id);c.newAddCnt=l.count,e.push(c)}),this.list_sumProp.array=e}}onItemRender(t,e){}onDisable(){}};Dp=m([Qw("hbicTwT0TxSxlRep4P48Tw")],Dp);var Mp=class extends Laya.Dialog{};var{regClass:Zw}=Laya,Pp=class extends Mp{constructor(){super()}onEnable(){this.setOpenData()}async setOpenData(){}onDisable(){}};Pp=m([Zw("y0xiZs-qSDWRAXN_oE10yg")],Pp);var Bp=class extends Laya.Box{};var{regClass:Jw}=Laya,Rp=class extends Bp{constructor(){super()}addEvent(){}set dataSource(t){super.dataSource=t,t&&this.addEvent()}};Rp=m([Jw("tbS8gPlOTWuMdXb9g8wZAg")],Rp);var Np=class extends Laya.Dialog{};var{regClass:ex}=Laya,Op=class extends Np{constructor(){super();this.destroyDoCancel=!1;this.canClose=!0}onEnable(){this.on(Laya.Event.CLICK,this,this.onClickEvent)}onClickEvent(e){let i=e.target;i.name=="okBtn"?(this._okHandler&&this._okHandler.runWith(null),this.close()):i.name=="cancleBtn"&&(this.destroyDoCancel=!1,this._cancelHandler&&this._cancelHandler.runWith(null),this.close())}setOpenData(e){e&&(this._okHandler=e.okHandler,this._cancelHandler=e.cancelHandler,this.destroyDoCancel=e.destroyDoCancel,e.flag<0?(this.cancleBtn.visible=!1,this.okBtn.visible=!1,this.canClose=!1):e.flag&z.YES&&!(e.flag&z.NO)?(this.okBtn.x=this.width-this.okBtn.width>>1,this.cancleBtn.visible=!1,this.okBtn.label="Sure"):e.flag&z.NO&&!(e.flag&z.YES)?this.okBtn.visible=!1:e.flag&z.YES&&e.flag&z.NO,e.data&&this.alertDesc&&(e.data instanceof Array?(this.alertTitle.text=e.data[0],this.alertDesc.text=e.data[1]):this.alertDesc.text=e.data),e.initHandler&&e.initHandler.runWith(this))}onDisable(){this.destroyDoCancel&&this._cancelHandler&&this._cancelHandler.run(),this._okHandler=null,this._cancelHandler=null}close(e){this.canClose&&super.close(e)}};Op=m([ex("8G0DBvD7T_2CVupdfQXrBw")],Op);var Hp=class extends Laya.Dialog{};var{regClass:tx}=Laya,Up=class extends Hp{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem;I.instance.headId=i.id,this.playerIcon.headSkin=I.instance.headId}}createHeadList(){let e=j.intance.m_dicHead;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,r=0;this.playerIcon.headSkin=I.instance.headId;for(let n of e.values){if(n.id==I.instance.headId){i=r;break}r++}this.list_head.selectedIndex=i}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=f.instance.getUILang("Upload picture"),r=f.instance.getUILang("Select Image"),n=f.instance.getUILang("Save changes");openUploadPic(this,e,i,r,n)}async openPicEnd(e,i){if(i.length>500){let r=await F.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);r&&(I.instance.headId=r.imgUrl,e.playerIcon.headSkin=r.imgUrl,console.log(r.imgUrl))}}onRegister(){let e=I.instance.headId;L.intance.event(v.EVENT_MODIFY_HEAD,[e]),this.close()}};Up=m([tx("BmtPy79ySCyg4IuEQC4zsQ")],Up);var Vp=class extends Laya.ComboBox{};var{regClass:ix}=Laya,Gp=class extends Vp{set defaultLabel(t){this._defaultLabel=t,this._selectedIndex<0&&(this._button.label=t),this._button.labelAlign="center"}onEnable(){this.list=this.comboList}set dataSource(t){super.dataSource=t;var e=t;e&&(this.labels=e.join(","),console.log("comboData.length: "+e.length),this.list.repeatY=e.length,this.list.width=this.width,this.list.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1))}onCountryItemRender(t,e){t.onChange(this.list.selectedIndex==e)}set isOpen(t){if(console.log("isOpen: "+t),this._isOpen!=t)if(this._isOpen=t,this._button.selected=this._isOpen,this._isOpen){this._list||this._createList(),this._listChanged&&!this._isCustomList&&this.changeList(),this._itemChanged&&this.changeItem();var e=this.localToGlobal(Laya.Point.TEMP.setTo(0,0)),i=e.y+this._button.height;i=i+this._listHeight<=Laya.stage.height||e.y-this._listHeight<0?i:e.y-this._listHeight,this.img_pad.addChild(this._list),this.img_pad.pos(e.x,i),this.img_pad.visible=!0,Laya.stage.addChild(this.img_pad),this.img_pad.zOrder=1001,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.removeList),Laya.stage.on(Laya.Event.MOUSE_WHEEL,this,this._onStageMouseWheel),this._list.selectedIndex=this._selectedIndex}else this._list&&this._list.removeSelf(),this.img_pad&&this.img_pad.removeSelf()}};Gp=m([ix("AqEOSlrnRkmI9RUPCJUVqQ")],Gp);var zp=class extends Laya.List{};var{regClass:ax}=Laya,Fp=class extends zp{};Fp=m([ax("7DDHp602Rs6dL3bjAu4ArA")],Fp);var jp=class extends Laya.Box{};var{regClass:rx}=Laya,qp=class extends jp{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&i.label&&(this.addEvent(),this.tf_name.text=i.label)}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};qp=m([rx("nREGzTKFSX6LuiRnM5nPXA")],qp);var Wp=class extends Laya.Box{};var{regClass:nx}=Laya,Kp=class extends Wp{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&(this.addEvent(),this.img_icon.skin=M.instance.getCountryIcon(i.id),this.tf_name.text=f.instance.getLanguage(i.name))}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};Kp=m([nx("LJ8PUf7kRCGUr4eT8Mhy3g")],Kp);var Yp=class extends Laya.Dialog{};var uo=class extends Laya.Event{constructor(){super()}};uo.INIT_CREATELOGIN_EVENT="CreateLoginEvent:INIT_CREATELOGIN_EVENT";var{regClass:ox}=Laya,$p=class extends Yp{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_PANEL;this.m_iPositionType=R.CENTER}onEnable(){L.intance.on(uo.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),L.intance.on(v.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),L.intance.on(v.EVENT_WAIT_PLAYERINFO,this,this.onWaitPlayerInfoBack),this.btn_setting.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_setting]),this.btn_radio1.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio1]),this.btn_radio2.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio2]),this.btn_register.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_register]),this.box_change.on(Laya.Event.CLICK,this,this.onChangeHead),this.input_name.prompt=f.instance.getLanguage("31"),this.selectRadio(1),this.initCountry(),this.initCreateLoginView(),_e.instance.sendCustumEvent(23)}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onCountryItemRender(e,i){e.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(e){if(console.log("handleSelectCountry: "+e),e!=-1){let i=this.list_country.selectedItem;I.instance.countryId=i.id,this.img_flag.skin=M.instance.getCountryIcon(i.id),this.tf_country.text=f.instance.getLanguage(i.name)}}createCountryList(){let e=j.intance.m_dicCountry;this.list_country.array=e.values,this.list_country.visible=!0;let i=-1,r=0;for(let n of e.values){if(n.id==I.instance.countryId){i=r;break}r++}this.list_country.selectedIndex=i}onChangeHeadBack(e,i){this.input_name.text=e,I.instance.headId=i,this.playerIcon.headSkin=i}onChangeModifyHead(e){I.instance.headId=e,this.playerIcon.headSkin=e}onChangeHead(){O.intance.openModule(h.ChangeHeadDialog)}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=f.instance.getUILang("Upload picture"),r=f.instance.getUILang("Select Image"),n=f.instance.getUILang("Save changes");openUploadPic(this,e,i,r,n)}async openPicEnd(e,i){if(i.length>500){let r=await F.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);r&&(I.instance.headId=r.imgUrl,e.playerIcon.headSkin=r.imgUrl,console.log(r.imgUrl))}}selectRadio(e){let i=e==1;this.btn_radio1.selected=i,this.btn_radio2.selected=!i}handleClickBtn(e){switch(e){case this.btn_radio1:this.selectRadio(1);break;case this.btn_radio2:this.selectRadio(2);break;case this.btn_register:this.onRegister();break;case this.btn_setting:O.intance.openModule(h.GameSettingLanguageDialog);break}}async onRegister(){let e=this.input_name.text,i=this.btn_radio1.selected?1:2;if(e=e.trim(),e==""){te.instance.notice(f.instance.getLanguage(31));return}if(I.instance.countryId==-1){te.instance.notice(f.instance.getLanguage(1048));return}if(Q.Debug>0){let r=await Y.instance.createAcccount(e,i,I.instance.headId.toString(),I.instance.countryId);this.onWaitPlayerInfoBack(r)}else{K.instance.showLoadingByInfo(f.instance.getLanguage(1119));let r=await Y.instance.checkNickName(e);console.log(r),r&&await or.instance.createAcccount(e,i,I.instance.headId.toString(),I.instance.countryId)&&Y.instance.waitGetAccount()}}onWaitPlayerInfoBack(e){e&&(K.instance.hideLoading(),I.instance.playerDto=e,this.close(),L.intance.event(v.EVENT_ENTER_MAIN))}initCreateLoginView(){}onDisable(){this.removeEvent()}removeEvent(){L.intance.off(uo.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),L.intance.off(v.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),L.intance.off(v.EVENT_WAIT_PLAYERINFO,this,this.onWaitPlayerInfoBack)}};$p=m([ox("1K2SyFxcQY-12SasSSRXyQ")],$p);var Xp=class extends Laya.Dialog{};var{regClass:sx}=Laya,Qp=class extends Xp{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){Ae.instance.playSoundByName(Ae.soundName32)}onDisable(){}};Qp=m([sx("szfg-Zt_RRWZ_nHMppjUMA")],Qp);var Zp=class extends Laya.Box{};var{regClass:lx}=Laya,Jp=class extends Zp{set dataSource(t){super.dataSource=t;var e=t;e&&(this.img_icon.skin="res/role/img_icon_"+e[0]+".png",this.tf_name.text=f.instance.getUILang(e[1]),this.tf_num.text=e[2])}};Jp=m([lx("WJ5TDeRBSkC9yMqJ72B0Ow")],Jp);var em=class extends Laya.Box{};var{regClass:cx}=Laya,tm=class extends em{set dataSource(e){super.dataSource=e,this.headItem=e,this.headItem&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.headItem.id;this.playerIcon.headSkin=e}onChange(e){}};tm=m([cx("AwN_JFPwQsKswm1N53Bmkg")],tm);var im=class extends Laya.Dialog{};var{regClass:ux}=Laya,am=class extends im{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.btn_copy2.on(Laya.Event.CLICK,this,this.onCopy2),this.btn_changeHead.on(Laya.Event.CLICK,this,this.onChangeHead),this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.redemptionCode.on(Laya.Event.FOCUS,this,this.redemFocus),L.intance.on(v.ROLE_INFO_CHANGE,this,this.updateRoleInfo),this.updateRoleInfo()}redemFocus(){this.redemptionCode.text=""}updateRoleInfo(){let e=I.instance.playerDto;this.tf_name.text=e.name,this.img_sex.skin=e.sex==1?"res/role/img_icon_xb_1.png":"res/role/img_icon_xb_2.png",this.tf_uid.text=e.pid.toString(),this.tf_myCode.text=e.remCode,this.ally_num.text=`${e.remCount}`,this.tf_myCode.text==""?this.btn_copy2.disabled=!0:this.btn_copy2.disabled=!1,e.superRemCode?(this.btn_receive.disabled=!0,this.redemptionCode.text=`${e.superRemCode}`,this.yf_receive.text="Received"):this.yf_receive.text="Receive";var i=j.intance.m_dicCountry.get(e.country);this.img_country.skin=M.instance.getCountryIcon(e.country+""),this.tf_address.text=this.formatWalletAddress(Y.instance.walletAddress);let r=e.icon;this.playerIcon.headSkin=r,this.onGetAttr(e.pid)}formatWalletAddress(e){let n="...";return e.length<=12+10?e:`${e.substring(0,12)}${n}${e.substring(e.length-10)}`}async onGetAttr(e){let i=this,r=await F.requestPost("wxgame/player/getPlayerInfo",{pid:e});r?(this.fighting_value.text=r.fightTimes,this.victory_num.text=r.winTimes,this.fail_num.text=`${r.fightTimes-r.winTimes}`,this.runAway_num.text=r.taopao):te.instance.notice(f.instance.getLanguage(135))}onChangeHead(){O.intance.openModule(h.SelectHeadDialog,!0)}async onReceive(){if(this.redemptionCode.text=="Enter the redemption code to claim equipment(unique)"||this.redemptionCode.text=="輸入兌換碼領取裝備（唯一）"||this.redemptionCode.text==""){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1123),z.YES,null);return}if(this.redemptionCode.text==this.tf_myCode.text&&this.redemptionCode.text!==""){Ie.instance().AlertByType(z.BASEALERTVIEW,"You cannot enter your own invitation code.",z.YES,null);return}let e=this.redemptionCode.text,i=await F.requestPost("wxgame/player/setRem",{code:e});i&&(O.intance.openModule(h.RemGetDialog),I.instance.playerDto.superRemCode=i.code,this.btn_receive.disabled=!0,this.yf_receive.text="Received",this.tf_myCode.text=i.recommendCode,I.instance.playerDto.remCode=i.recommendCode,this.tf_myCode.text==""?this.btn_copy2.disabled=!0:this.btn_copy2.disabled=!1)}onCopy(){let e=Y.instance.walletAddress;doCopy(e),te.instance.notice(f.instance.getLanguage(132))}onCopy2(){let e=this.tf_myCode.text;doCopy(e),te.instance.notice(f.instance.getLanguage(132))}onDisable(){L.intance.off(v.ROLE_INFO_CHANGE,this,this.updateRoleInfo),this.redemptionCode.off(Laya.Event.FOCUS,this,this.redemFocus)}};am=m([ux("T7g565QQR7-fZgZNjVg92A")],am);var rm=class extends Laya.Dialog{};var{regClass:px}=Laya,nm=class extends rm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}setOpenData(e){}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.input_name.prompt=f.instance.getLanguage("31"),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList(),this.initCountry()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem;I.instance.headId=i.id,this.playerIcon.headSkin=I.instance.headId}}createHeadList(){let e=j.intance.m_dicHead;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,r=0;I.instance.headId=I.instance.playerDto.icon,this.playerIcon.headSkin=I.instance.headId,this.input_name.text=I.instance.playerDto.name;for(let n of e.values){if(n.id==I.instance.headId){i=r;break}r++}this.list_head.selectedIndex=i}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onCountryItemRender(e,i){e.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(e){if(console.log("handleSelectCountry: "+e),e!=-1){let i=this.list_country.selectedItem;I.instance.countryId=i.id,this.img_flag.skin=M.instance.getCountryIcon(i.id),this.tf_country.text=f.instance.getLanguage(i.name)}}createCountryList(){let e=j.intance.m_dicCountry;this.list_country.array=e.values,this.list_country.visible=!0;let i=-1,r=0;I.instance.countryId=I.instance.playerDto.country;for(let n of e.values){if(n.id==I.instance.countryId){i=r;break}r++}this.list_country.selectedIndex=i}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=f.instance.getUILang("Upload picture"),r=f.instance.getUILang("Select Image"),n=f.instance.getUILang("Save changes");openUploadPic(this,e,i,r,n)}async openPicEnd(e,i){if(i.length>500){let r=await F.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);r&&(I.instance.headId=r.imgUrl,e.playerIcon.headSkin=r.imgUrl,e.list_head.selectedIndex=-1,console.log(r.imgUrl))}}onRegister(){let e=this.input_name.text;if(e=e.trim(),e==""){te.instance.notice(f.instance.getLanguage(31));return}I.instance.headId!=-1?this.onModify(e,I.instance.headId,I.instance.countryId):te.instance.notice(f.instance.getLanguage(134))}async onModify(e,i,r){if(e==""){te.instance.notice(f.instance.getLanguage(31));return}let n=await or.instance.updateProfile(e,i.toString(),r);this.destroyed||(n?(I.instance.playerDto=n,this.close(),L.intance.event(v.ROLE_INFO_CHANGE)):te.instance.notice(f.instance.getLanguage(135)))}};nm=m([px("3CibwwHGSPG2Qkeq4rbMag")],nm);var ba=class ba{constructor(){}static trim(t,e=null){e||(e=[" ","\r",`
`,"	",String.fromCharCode(65279)]);var i,r,n;for(i=t,n=e.length,r=0;r<n;r++)i=ba.getReplace(i,e[r],"");return i}static getReplace(t,e,i){if(!t)return"";var r;return r=t.replace(new RegExp(e,"g"),i),r}static isEmpty(t){return t.length<1?!0:ba.emptyStrDic.hasOwnProperty(t)}static trimLeft(t){var e;e=0;var i;for(i=t.length;ba.isEmpty(t.charAt(e))&&e<i;)e++;return e<i?t.substr(e):""}static trimRight(t){var e;for(e=t.length-1;ba.isEmpty(t.charAt(e))&&e>=0;)e--;var i;return i=t.substring(0,e),e>=0?t.substring(0,e+1):""}static trimSide(t){var e;return e=ba.trimLeft(t),e=ba.trimRight(e),e}static shortStr(t,e){return t.length>e?t.substr(0,e)+"...":t}static shortHeroStr(t,e=10){if(t.length>e){let i=t.split("#"),r=i[0],n=i[1];return r.substr(0,3)+"...#"+n}else return t}static abbreviateString(t,e=11){if(t.length<=e)return t;{let i=Math.floor((e-3)/2);return t.slice(0,i)+"..."+t.slice(-i)}}static caseInsensitiveSearchWithRegex(t,e){return new RegExp(e,"i").test(t)}};ba.emptyStrDic={" ":!0,"\r":!0,"\n":!0,"	":!0};var at=ba;var om=class extends Laya.Dialog{};var{regClass:mx}=Laya,ya=class extends Laya.Script{constructor(){super();this._isLeft=!1}onAwake(){}get isLeft(){return this._isLeft}set isLeft(e){this._isLeft=e,this.btn_bg=this.owner.getChildByName("btn_bg"),this.label_left=this.owner.getChildByName("label_left"),this.label_right=this.owner.getChildByName("label_right"),this.isLeft?(this.btn_bg.x=4,this.label_left.color="#213343",this.label_right.color="#52a5e0"):(this.btn_bg.x=this.owner.width-this.btn_bg.width-4,this.label_left.color="#52a5e0",this.label_right.color="#213343")}};ya=m([mx("-1MGS4JRSMOn_RKPUuuV9Q")],ya);var{regClass:dx}=Laya,sm=class extends om{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.musicSwitchButton=this.box_music.getComponent(ya),this.soundSwitchButton=this.box_sound.getComponent(ya),this.languageSwitchButton=this.box_language.getComponent(ya),this.initContainer(),this.box_music.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_music]),this.box_sound.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_sound]),this.box_language.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_language]),this.btn_copy.clickHandler=new Laya.Handler(this,this.onClickHandler,[this.btn_copy]),this.btn_referral.on(Laya.Event.CLICK,this,this.onClickHandler,[this.btn_referral])}onClickHandler(e){switch(e){case this.box_music:this.musicSwitchButton.isLeft=!this.musicSwitchButton.isLeft,Ae.instance.switchMusic(this.musicSwitchButton.isLeft);break;case this.box_sound:this.soundSwitchButton.isLeft=!this.soundSwitchButton.isLeft,Ae.instance.switchSound(this.soundSwitchButton.isLeft);break;case this.btn_referral:O.intance.openModule(h.InviteRewardDialog);break;case this.box_language:{this.languageSwitchButton.isLeft=!this.languageSwitchButton.isLeft;let i=this.languageSwitchButton.isLeft?"zh":"en";f.instance.FGM_SetLanguage(i),_e.instance.reload()}break;case this.btn_copy:{let i=this.inviteUrl;ge.doCopy(i),te.instance.notice(f.instance.getLanguage(132))}break}}initContainer(){this.musicSwitchButton.isLeft=Ae.instance.m_bPlayMusic,this.soundSwitchButton.isLeft=Ae.instance.m_bPlayeSound,this.languageSwitchButton.isLeft=I.instance.m_strLanguage==6,this.inviteUrl=ei.getInviteUrl(),this.label_url.text=at.shortStr(this.inviteUrl,50)}addEvent(){}removeEvent(){}webCopyString(e){let i=e,r=window.document.createElement("textarea");r.value=i,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";let n=window.getSelection(),o=!1;n.rangeCount>0&&(o=n.getRangeAt(0)),window.document.body.appendChild(r),r.select(),r.selectionStart=0,r.selectionEnd=i.length;let s=!1;try{s=window.document.execCommand("copy")}catch(l){console.error(l)}return window.document.body.removeChild(r),o&&(n.removeAllRanges(),n.addRange(o)),s}};sm=m([dx("yJfJZzgZRluE_rgB44yTvg")],sm);var lm=class extends Laya.Box{};var{regClass:hx}=Laya,cm=class extends lm{set dataSource(t){super.dataSource=t;var e=t;e&&(this.img_icon.skin=M.instance.getAttrIcon(e[0]),this.tf_name.text=f.instance.getUILang(e[1]),this.tf_num.text=e[2])}};cm=m([hx("lWiDi5bCR-CNy4v3ZMd42w")],cm);var um=class extends Laya.Dialog{};var Pi=class{constructor(){}};Pi.UPDATE_HERO_EVENT="HeroEvent:UPDATE_HERO_EVENT",Pi.UPDATE_HERO_UPGRADE_EVENT="HeroEvent:UPDATE_HERO_UPGRADE_EVENT";var{regClass:fx}=Laya,pm=class extends um{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}setOpenData(e){e&&(this._vo=e)}onComplete(){}onEnable(){this.showViewByVo(this._vo),this.btn_last.on(Laya.Event.CLICK,this,this.onClickLast),this.btn_next.on(Laya.Event.CLICK,this,this.onClickNext),this.btn_upgrade.on(Laya.Event.CLICK,this,this.onClickUpgrade),this.btn_out.on(Laya.Event.CLICK,this,this.onClickOut)}onClickUpgrade(){O.intance.openModule(h.HeroUpgradeDialog,this._vo)}onClickNext(){let e=st.instance.getNextHero(this._vo);e&&(this._vo=e,this.showViewByVo(e))}onClickLast(){let e=st.instance.getLastHero(this._vo);e&&(this._vo=e,this.showViewByVo(e))}addEvent(){L.intance.on(Pi.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade),this.stage.on(Laya.Event.CLICK,this,this.hideTips);for(let e=1;e<7;e++){let i=this["equip"+e];i.on(Laya.Event.CLICK,this,this.onClickEquip),this._vo.state!==0&&(i.disabled=!0)}}hideTips(){}onClickEquip(e){}removeEvent(){L.intance.off(Pi.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade)}onHeroUpgrade(){this._vo=I.instance.m_heroData.heroVoDic.get(this._vo.pk),this._vo&&this.showViewByVo(this._vo)}updateEquip(){let e=this._vo.equipDtoList;for(let i=0;i<e.length;i++){let r=e[i];this["equip"+(i+1)].dataSource=r}}async showViewByVo(e){this.txt_name.text=e.name;let i=e.heroItem.level+"";st.instance.setStar(this,i),this.box_star.visible=!0,this.heroSk.dataSource=e;var r=[["maxHp","MaxHP",e.heroItem.maxHp],["atk","ATK",e.heroItem.atk],["def","DEF",e.heroItem.def],["mov","MOV",e.heroItem.mov],["crt","CRT",e.heroItem.crt/100+"%"],["crtRate","CrtRate",e.heroItem.crtRate/100+"%"],["immunity","Immunity",e.heroItem.immunity],["dex","Dex",(e.heroItem.dex/100).toFixed(2)+"%"],["miss","MISS",e.heroItem.miss]];this.list_attrs.array=r;var n=[];e.heroItem.skillIds.forEach(o=>{var s=j.intance.m_dicSkills.get(o);n.push(s)}),this.list_skills.array=n,this.updatePk()}async updatePk(){let e=null;this._vo.state!==0?(e=await F.requestPost("wxgame/lease/heroInfo",{heroPk:this._vo.pk}),this._vo.state==1?(this.btn_out.disabled=!0,this.btn_upgrade.disabled=!0):this._vo.state==2&&(this.btn_upgrade.disabled=!0,I.instance.playerDto.fightHeroPk==this._vo.pk?(this.box_sign.visible=!0,this.btn_out.disabled=!0,this.btn_out.label=f.instance.getLanguage(1038)):(this.box_sign.visible=!1,this.btn_out.disabled=!1,this.btn_out.label=f.instance.getLanguage(1037))),e&&e.info&&e.info.startTime&&e.info.startTime>Qe.getCurrentDayTimestamp()&&(this.btn_out.disabled=!0,this.btn_upgrade.disabled=!0)):I.instance.playerDto.fightHeroPk==this._vo.pk?(this.box_sign.visible=!0,this.btn_out.disabled=!0,this.btn_out.label=f.instance.getLanguage(1038)):(this.box_sign.visible=!1,this.btn_out.disabled=!1,this.btn_out.label=f.instance.getLanguage(1037))}async onClickOut(){if(wt.instance.inMinWaiting){te.instance.notice(f.instance.getLanguage(1187));return}let e=this,i=await F.requestPost("wxgame/hero/heroFight",{pk:this._vo.pk});i?(I.instance.playerDto.fightHeroPk=i.pk,e.updatePk(),L.intance.event(Pi.UPDATE_HERO_EVENT)):te.instance.notice(f.instance.getLanguage(135))}};pm=m([fx("Qri7gUY9SiWsYhtvNCEOQQ")],pm);var mm=class extends Laya.Box{};var{regClass:bx}=Laya,dm=class extends mm{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=M.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){var e=[];I.instance.playerDto.fightHeroPk==this.heroVo.pk&&e.push(1),this.heroVo.state==2&&e.push(3),this.heroVo.state==1&&e.push(2),this.list_state.array=e,this.img_back.skin=M.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=M.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=at.shortHeroStr(this.heroVo.name);let r=this.heroVo.heroItem.level+"";st.instance.setStar(this,r),this.box_show.visible=!0,this.destroyed}toDetail(){this.heroVo.id&&O.intance.openModule(h.HeroDetailDialog,this.heroVo)}};dm=m([bx("PfeS1F4rQCqM4vXJpBZVWQ")],dm);var ze=class ze{constructor(){}};ze.ANI_beiji="beiji",ze.ANI_daiji="daiji",ze.ANI_gongji="gongji",ze.ANI_ti="ti",ze.ANI_hua="hua",ze.ANI_dang="gedang",ze.ANI_dazhao="z_dazhao",ze.ANI_ruchang="ruchang",ze.ANI_siwang="siwang",ze.ANI_xingzou="xingzou",ze.ANI_chongzhuang="z_chongzhuang",ze.ANI_chongzhuang2="z_chongzhuang2",ze.ANI_daodi="z_daodi",ze.ANI_shanbi="z_shanbi",ze.ANIS=[ze.ANI_daiji,ze.ANI_xingzou,ze.ANI_gongji,ze.ANI_ti,ze.ANI_hua,ze.ANI_dang,ze.ANI_beiji,ze.ANI_siwang],ze.TYPE_GONGJI=1,ze.TYPE_TI=2,ze.TYPE_HUA=3,ze.TYPE_DANG=4,ze.TYPE_FEI=5,ze.TYPE_DAZHAO=6;var Je=ze;var hm=class extends Laya.Box{};var{regClass:yx}=Laya,fm=class extends hm{constructor(){super();this.isAddEvent=!1;this.isReady=!1;this.skinIndex=0;this.spineAniIndex=0;this.skinArray=["goblin","goblingirl"]}addEvent(){this.isAddEvent||(this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.changeAni),this.sk.on(Laya.Event.READY,this,this.onSkReady))}onSkReady(){this.isReady=!0}set dataSource(e){super.dataSource=e,this.heroVo=e,this.addEvent(),this.createSpine()}createSpine(){Laya.loader.load(this.heroVo.sk,Laya.Loader.SPINE).then(e=>{this.destroyed||(this.sk.templet=e,this.sk.animationName=Je.ANI_daiji,this.spineAniNum=Je.ANIS.length)})}changeAni(){if(this.isReady){this.spineAniIndex++,this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=0);var e=Je.ANIS[this.spineAniIndex];this.sk.play(e,!0,!0)}}changeSkin(){this.sk.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}onDisable(){this.sk.off(Laya.Event.READY,this,this.onSkReady)}};fm=m([yx("kS5K53GHRWOdgfXoo6VH1A")],fm);var bm=class extends Laya.Scene{};var{regClass:gx}=Laya,ym=class extends bm{onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onEnable(){this.list_hero.vScrollBarSkin="",this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),L.intance.on(Pi.UPDATE_HERO_EVENT,this,this.createHeadList),this.initMyHeroView(),this.initContainer()}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}async initMyHeroView(){}onListEvent(e,i){switch(e.type){case Laya.Event.CLICK:this.list_hero.selectedIndex=i,this.handleSelectHero(i);break}}onRenderList(e,i){let r=e.dataSource}initContainer(){this.list_hero.visible=!1,this.list_hero.vScrollBarSkin="",this.list_hero.mouseHandler=new Laya.Handler(this,this.onListEvent),this.list_hero.renderHandler=new Laya.Handler(this,this.onRenderList),this.createHeadList()}handleSelectHero(e){let i=this.list_hero.selectedItem}async createHeadList(){if(await qe.instance.ownerHero(!0),!this)return;let e=I.instance.m_heroData.heroVoDic.values;if(e&&e.length>9){this.list_hero.array=e,this.list_hero.visible=!0,this.tf_noData.visible=!1;let n=-1;this.list_hero.selectedIndex=n}else{let n=[];for(var i=0;i<10;i++){var r=e[i];r?n.push(r):n.push(null)}this.list_hero.array=n,this.list_hero.visible=!0,this.tf_noData.visible=!1}}handleClickBtn(e){switch(e){}}onDisable(){L.intance.off(Pi.UPDATE_HERO_EVENT,this,this.createHeadList)}};ym=m([gx("eEFn-xcRTXagUEZFDdSujw")],ym);var gm=class extends Laya.Box{};var{regClass:vx}=Laya,vm=class extends gm{set dataSource(t){super.dataSource=t;var e=t;e&&(this.tf_name.text=f.instance.getUILang(e[1]),this.tf_num.text=e[2])}};vm=m([vx("BFrnzfZDRh2v3vDKqrNVwA")],vm);var Lm=class extends Laya.Box{};var{regClass:Lx}=Laya,_m=class extends Lm{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.txt_num.text="",this.img_icon.skin=M.instance.getSkillIcon(this.skillItem.icon,this.isBig))}};_m=m([Lx("qJVd2M3_Td-5eIx8PsQpAw")],_m);var wm=class extends Laya.Box{};var{regClass:_x}=Laya,xm=class extends wm{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.dataSource=this.skillItem)}toDetail(){this.skillItem&&O.intance.openModule(h.SkillTipDialog,this.skillItem)}};xm=m([_x("VRh1GpjHSyqm75euC37ZKw")],xm);var Im=class extends Laya.Dialog{};var{regClass:wx}=Laya,Em=class extends Im{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}setOpenData(e){e&&(this.skillItem=e)}onEnable(){this.item.dataSource=this.skillItem,this.tf_name.text=f.instance.getLanguage(this.skillItem.name);var e=[["type","S_type",f.instance.getUILang("S_type_"+this.skillItem.type)],["distance","S_distance",this.skillItem.distance],["hurt","S_hurt",this.skillItem.hurt/100+"%"],["cd","S_cd",this.skillItem.cd/1e3+f.instance.getUILang("S_S")],["displacement","S_displacement",this.skillItem.displacement],["targetsType","S_targetsType",f.instance.getUILang("S_targetsType"+this.skillItem.targetsType)]];this.list_skillAttrs.array=e}removeEvent(){}};Em=m([wx("PiBuXnP8ToeveVbB_bfhUQ")],Em);var Sm=class extends Laya.Box{};var{regClass:xx}=Laya,Tm=class extends Sm{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,console.log(e),e&&(this.img_icon.skin=`gameIcon/hero/heroDetail/img_hero_state_${e}.png`)}};Tm=m([xx("kgETBhusT2WQRM1T39-4EA")],Tm);var It=class{constructor(){}};It.TYPE_Consumption=1,It.TYPE_Equipment=2,It.TYPE_Currency=3,It.TYPE_Hero=4,It.TYPE_Fragment=5;var Cm=class extends Laya.Box{};var{regClass:Ix}=Laya,km=class extends Cm{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&this.setCurrentOutPut()}async setCurrentOutPut(){if(!this.itemVo)return;let e=this.itemVo.itemItem;this.knapsackItem.dataSource=this.itemVo,e?this.disabled=!1:this.disabled=!0}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===It.TYPE_Equipment?O.intance.openModule(h.EquipDetailDialog,this.itemVo):O.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};km=m([Ix("HYoZb6e-RFKj8fjDKbl-7Q")],km);var Am=class extends Laya.Dialog{};var{regClass:Ex}=Laya,Dm=class extends Am{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.initContainer(),Ae.instance.playSoundByName(Ae.soundName32)}initContainer(){var e=Ve.instance.getOneItem();if(e){var i;e instanceof Array?(i=new $e(e[0]),i.newAddCnt=e[1]):i=e,this.showItem(i)}}showItem(e){this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=e,this.tf_name.text=f.instance.getLanguage(e.itemItem.name)}onDisable(){L.intance.event(v.EVENT_CHECK_REMAIN,h.ItemGetDialog)}};Dm=m([Ex("tC2uDJDVQMaI41Lys60O5Q")],Dm);var Mm=class extends Laya.Box{};var{regClass:Sx}=Laya,Pm=class extends Mm{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=new $e;if(!this.itemVo)return;let i=this.itemVo.itemItem;i?(this.showAdd?this.txt_num.text=""+Te.formatNumber(this.itemVo.newAddCnt,8):this.itemVo.m_iNum?this.txt_num.text=""+Te.formatNumber(this.itemVo.m_iNum,8):this.txt_num.text=""+Te.formatNumber(this.itemVo.newAddCnt,8),this.img_icon.skin=M.instance.getItemIcon(i.icon),this.img_box.skin="gameIcon/items/itemBg/img_"+i.quality+".png"):(this.txt_num.text="",this.img_icon.skin=null,this.img_box.skin="gameIcon/items/itemBg/img_0.png"),this.tf_isSch.visible=this.itemVo.isScholarship}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===It.TYPE_Equipment?O.intance.openModule(h.EquipDetailDialog,this.itemVo):O.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};Pm=m([Sx("LzxJYKybT_m3CJav3RyDmg")],Pm);var Bm=class extends Laya.Scene{};var{regClass:Tx}=Laya,Rm=class extends Bm{constructor(){super(...arguments);this.subBagInfo=null;this.currTab=0;this.type=1;this.items=[];this.hasItem=!1}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP,this.listPanel1.visible=!1}onOpened(e){this.type=e}onEnable(){this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.box_show.visible=!1,this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-Q.DESIGN_HEIGHT)/2}setTab(e){for(let i=1;i<3;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}async initLuckDrawView(){await qe.instance.ownerBag(),!this.destroyed&&(this.type?this.onClickTab(this.type):this.onClickTab(1))}async onClickTab(e){if(this.currTab!=e){if(this.setTab(e),e==1){if(this.box_2.visible=!0,this.destroyed)return;var i=await this.getItemByType(1);this.listPanel1.array=i,this.listPanel1.visible=!0}else{if(this.box_2.visible=!0,this.destroyed)return;var i=await this.getItemByType(2);this.listPanel1.dataSource=i}this.listPanel1.selectedIndex=-1,this.hasItem&&(this.listPanel1.selectedIndex=0)}}async getItemByType(e){var i=e==1?It.TYPE_Consumption:It.TYPE_Equipment;this.items=[],this.hasItem=!1;var r=I.instance.m_packageData.getBackByType(i);if(e==1){if(!this.subBagInfo){let c=(await F.requestPost("wxgame/lease/bag",{})).list,u={};for(let p of c)p.ticketId in u?u[p.ticketId]+=p.ticketCount:u[p.ticketId]=p.ticketCount;this.subBagInfo=Object.keys(u).map(p=>({ticketId:p,ticketCount:u[p]}))}if(this.subBagInfo)for(let l=0;l<this.subBagInfo.length;l++){let c=this.subBagInfo[l];if(c.ticketCount){var n=new $e(c.ticketId);n.newAddCnt=c.ticketCount,n.isScholarship=!0,console.log(n),r.push(n)}}console.log(this.subBagInfo)}for(var o=0;o<30;o++){var s=r[o];s?(o==0&&(this.hasItem=!0),this.items.push(s)):this.items.push(new $e(0))}return this.items}onSelectItem(e,i){var r=this.items[e];if(console.log(r),r){let n=r.itemItem;this.img_icon.skin=M.instance.getItemIcon(n.icon),this.tf_name.text=f.instance.getLanguage(n.name),this.tf_des.text=f.instance.getLanguage(n.des),this.box_show.visible=!0}else this.img_icon.skin=null,this.tf_name.text="",this.tf_des.text="",this.box_show.visible=!1}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}onShowSkill(){O.intance.openModule(h.SkillTipDialog)}stopAni(e){console.log("stopAni: "+e)}onDrawBack(e){}removeEvent(){}};Rm=m([Tx("6IPqO9JvTmygjIZQXMwq2A")],Rm);var Nm=class extends Laya.Dialog{};var{regClass:Cx}=Laya,Om=class extends Nm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}setOpenData(e){e&&(this.itemVo=e)}onEnable(){this.item.dataSource=this.itemVo;let e=this.itemVo.itemItem;this.tf_name.text=f.instance.getLanguage(e.name),this.txt_type.text=f.instance.getLanguage("6060")+f.instance.getLanguage(e.type),this.txt_desc.text=f.instance.getLanguage(e.des),this.btn_use.visible=e.use!="0",this.btn_use.clickHandler=new Laya.Handler(this,this.useItem)}async useItem(){this.close()}removeEvent(){}};Om=m([Cx("or8jNdIhRpSbAG2JBhH-wA")],Om);var Hm=class extends Laya.Dialog{};var{regClass:kx}=Laya,Um=class extends Hm{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){Ae.instance.playSoundByName(Ae.soundName32)}setOpenData(e){e&&(this.reward=e);var i=[],r=this.reward;r.forEach(c=>{var u=new $e(c.id);u.newAddCnt=c.count,i.push(u)});var n=this.list_reward.spaceX,o=this.list_reward.itemTemplate.width,s=i.length,l=s*o+n*(s-1);this.list_reward.width=l,this.list_reward.right=this.width-l>>1,this.list_reward.array=i}};Um=m([kx("xwYUFnd4S3uJGIJSjjbRag")],Um);var Vm=class extends Laya.Box{};var{regClass:Ax}=Laya,Gm=class extends Vm{constructor(){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){console.log("OpenScene onEnable："+this.m_strName)}getName(){console.log(this.m_strName)}onDisable(){}};Gm=m([Ax("sQS5mrqRQLWcBk-SgfBGJw")],Gm);var zm=class extends Laya.Box{};var{regClass:Dx}=Laya,Fm=class extends zm{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.check_coin.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.addEvent();let i=e;this.check_coin.selected=i[1],this.tf_coin.text=i[2]}onCheck(){this._dataSource[1]=this.check_coin.selected,L.intance.event(v.EVENT_CHECK_ICON_SELECT)}};Fm=m([Dx("UTGHsPbQS6C5FohXv8T25Q")],Fm);var jm=class extends Laya.Dialog{};var{regClass:Mx}=Laya,qm=class extends jm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER;this.coinType=3001;this.coinIds=[]}setOpenData(e){e&&(this.arenaLv=e[0])}onEnable(){this.btn_create.on(Laya.Event.CLICK,this,this.onCreate),this.initContainer()}initContainer(){let e=I.instance.playerDto;if(!e)return;this.tf_roleName.text=e.name;let i=e.icon;this.playerIcon.headSkin=i,this.img_country.skin=M.instance.getCountryIcon(e.country+""),this.initCombo()}initCombo(){this.coinIds=j.intance.getGeneralValueById(5);var e=[];this.coinIds.forEach(i=>{var r=j.intance.m_dicItems.get(i);e.push(f.instance.getLanguage(r.name))}),this.coinCombo.selectHandler=new Laya.Handler(this,this.onSelected2),this.coinCombo.dataSource=e,this.coinCombo.selectedIndex=0}onSelected2(e){e!=-1&&(this.coinType=this.coinIds[e],console.log("您选中了 coinType"+this.coinType),this.setRoomInfo())}setRoomInfo(){this.arenaItem=j.intance.getSheetDataByMultiKey(j.intance.m_dicArenaMulDic,[this.arenaLv,this.coinType]),this.tf_roomName.text=f.instance.getLanguage(this.arenaItem.name),this.tf_min.text=this.arenaItem.numberMin+"",this.tf_max.text=this.arenaItem.numberMax+""}async onCreate(){if(this.arenaItem.item&&this.arenaItem.item.length>1){var e=this.arenaItem.item[0],i=this.arenaItem.item[1],r=I.instance.m_packageData.getCountById(e);let l=!1,c=I.instance.playerDto;if(c.fightHeroPk){await qe.instance.ownerHero();let u=I.instance.m_heroData.heroVoDic.get(c.fightHeroPk);if(u){if(l=u.state==2,l){var n=await F.requestPost("wxgame/lease/heroInfo",{heroPk:c.fightHeroPk});if(n.info.remainTicketCount<=0){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1175),z.YES,null);return}if(e!==n.info.ticketId){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1178),z.YES,null);return}}if(u.state==1){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1176),z.YES,null);return}}else{ge.heroNotEnought();return}}else{ge.heroNotEnought();return}if(r<i&&!l){ge.titickNotEnought(e);return}}let o=this.input_pwd.text;var s=this.arenaItem.id;if(s){let l=await F.requestPost("wxgame/room/create",{password:o,arenaId:s});$.instance.roomDto=l.roomDto,l.roomDto?(this.close(),O.intance.openModule(h.EnterRoomView)):te.instance.notice(f.instance.getLanguage(135))}}};qm=m([Mx("_y9qJpZZRk2p26xdgYPRyA")],qm);var Wm=class extends Laya.Box{};var{regClass:Px}=Laya,Km=class extends Wm{onEnable(){this.on(Laya.Event.CLICK,this,this.openMaxView),L.intance.on(v.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom)}onUpdateMatchRoom(){this.tf_coolTime.text=Qe.format($.instance.coolDownTime,":",!1),$.instance.coolDownTime==5&&this.openMaxView()}openMaxView(){wt.instance.openMaxView()}onDisable(){L.intance.on(v.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom)}};Km=m([Px("7hINWNN3S8SmWSveWJQJSw")],Km);var Ym=class extends Laya.Dialog{};var{regClass:Bx}=Laya,$m=class extends Ym{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_PANEL;this.m_iPositionType=R.CENTER}onEnable(){this.btn_min.on(Laya.Event.CLICK,this,this.onMinClick),this.btn_exit.on(Laya.Event.CLICK,this,this.onExitClick),L.intance.event(v.EVENT_ENTER_MATCH_ROOM,!1),L.intance.on(v.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom),this.initContainer(),_e.instance.sendCustumEvent(40)}initContainer(){this.list_wait_hero.visible=!0;var e=$.instance.roomDto,i=e.roomId,r=e.arenaId,n=e.coinType,o=j.intance.m_dicArenaDic.get(r);$.instance.currArenaItem=o,this.tf_roomName.text=f.instance.getLanguage(o.name),this.arenaNo.text=i+"",wt.instance.init(),this.updateExitCD()}updateExitCD(){var e=Math.round($.instance.roomDto.joinCd/1e3),i=e-$.instance.currArenaItem.notQuit;i>$.instance.currArenaItem.exitTime&&(i=$.instance.currArenaItem.exitTime),$.instance.limitCd=i,$.instance.limitCd>0?(this.onSetExitTime(),Laya.timer.loop(1e3,this,this.onSetExitTime)):(Laya.timer.clear(this,this.onSetExitTime),this.btn_exit.disabled=!0,this.tf_exit.text="Exit")}onSetExitTime(){$.instance.limitCd>=0?(this.tf_exit.text=f.instance.getUILang("Exit")+" ("+$.instance.limitCd+"s)",$.instance.limitCd--,this.btn_exit.disabled=!1):(Laya.timer.clear(this,this.onSetExitTime),this.btn_exit.disabled=!0,this.tf_exit.text="Exit")}onMinClick(){$.instance.coolDownTime>5&&(this.close(),wt.instance.openMinView())}async onExitClick(){await F.requestPost("wxgame/room/leave",{roomId:$.instance.roomDto.roomId})?wt.instance.close():te.instance.notice(f.instance.getLanguage(135))}onUpdateMatchRoom(){var e=$.instance.roomDto.members.length;this.tf_people.text=e+"";var i=$.instance.currArenaItem.numberMax;this.heros=[];for(var r=0;r<i;r++){var n=$.instance.roomDto.members[r];n?this.heros.push(n):this.heros.push(null)}this.list_wait_hero.array=this.heros,this.list_wait_hero.visible=!0,this.tf_coolTime.text=f.instance.getLanguage(1089)+" <font color='#ff5388'>"+Qe.format($.instance.coolDownTime,":",!1)+"</font>",this.btn_min.disabled=$.instance.coolDownTime<=5}onDisable(){this.removeEvent(),console.log("EnterRoomView onDisable"),L.intance.off(v.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom),be.intance.currSceneName!=re.M_SCENE_MAIN?be.intance.setCurrentScene(re.M_SCENE_MAIN):L.intance.event(v.EVENT_ENTER_MATCH_ROOM,!0)}removeEvent(){Laya.timer.clearAll(this)}};$m=m([Bx("IwpLh2K2T5Gh7QXYnJakAw")],$m);var Xm=class extends Laya.Dialog{};var{regClass:Rx}=Laya,Qm=class extends Xm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}setOpenData(e){e&&(this.roomDto=e[0])}onEnable(){this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.initContainer()}initContainer(){var e=j.intance.m_dicItems.get(this.roomDto.coinType),i=f.instance.getLanguage(e.name),r=j.intance.m_dicArenaDic.get(this.roomDto.arenaId);this.tf_roomName.text=f.instance.getLanguage(r.name),this.input_pwd.text=""}async onJoin(){let e=this.input_pwd.text;var i=j.intance.m_dicArenaDic.get(this.roomDto.arenaId);if(i.item&&i.item.length>1){var r=i.item[0],n=i.item[1],o=I.instance.m_packageData.getCountById(r);if(o<n){ge.titickNotEnought(r);return}}let s=await F.requestPost("wxgame/room/join",{roomId:this.roomDto.roomId,pass:e});$.instance.roomDto=s.roomDto,s.roomDto?(O.intance.openModule(h.EnterRoomView),this.close()):te.instance.notice(f.instance.getLanguage(135))}};Qm=m([Rx("bn6StZy0ROGBH9GCTateCA")],Qm);var Zm=class extends Laya.Scene{};var Jm=class a{constructor(){this._inited=!1}static getInstance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0,I.instance.initData())}};var ga=class{constructor(){}};ga.ROOM_BASE=1,ga.ROOM_MID=2,ga.ROOM_ADV=3;var{regClass:Nx}=Laya,cr=class extends Zm{constructor(){super(...arguments);this.currTab=0;this.arenaLv=1001;this.coinTypes=[];this.currIconAni=1;this.coinDatas=[]}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP,Jm.getInstance().init()}async onOpened(e){this.mouseThrough=this.mouseThrough=!0,this.headBox.mouseThrough=!0;let i=this.getChildByName("mcMain");i&&(i.mouseThrough=!0),Laya.Browser.onIOS&&Q.justFull==!1?this.btn_fullScreen.visible=!1:(this.btn_fullScreen.visible=Q.isInto,Q.isInto&&Q.isFull&&(ge.isFullScreen=!0,ge.isFullScreen?this.img_fullScreen.skin="res/main/img_full_2.png":this.img_fullScreen.skin="res/main/img_full_1.png")),this.updateTopInfo(),this.initCombo(),this.onClickTab(1);var r=Laya.stage.width-Q.DESIGN_WIDTH>>1;this.leftX=this.leftMenu.x,this.rightX=this.rightMenu.x,this.leftMenu.x=this.leftX-r-this.leftMenu.width,this.rightMenu.x=this.rightX+r+this.rightMenu.width,Laya.Tween.to(this.leftMenu,{x:this.leftX-r},500),Laya.Tween.to(this.rightMenu,{x:this.rightX+r},500),this.initBtnAni(),_e.instance.sendCustumEvent(34),cr.M_B_FIRST_Open&&F.requestPost("wxgame/sys/notice",{type:2},!0,!0).then(n=>{console.log(n);var o=n;if(o.status==0&&o.nowTime>=o.startTime&&o.nowTime<=o.endTime){var s=parseInt(I.instance.m_strLanguage.toString()),l=o.title[s],c=o.contents[s];O.intance.openModule(h.NoticeDialog,[2,l,c])}}),cr.M_B_FIRST_Open=!1}initBtnAni(){for(var e=1;e<6;e++)this["spine_"+e].on(Laya.Event.READY,this,this.onSkReady,[this["spine_"+e]])}onSkReady(e){e.stop(),e.visible=!1,e==this.spine_5&&this.startBtnAni()}startBtnAni(){this.currIconAni>5&&(this.currIconAni=1),this["spine_"+this.currIconAni].play(0,!1),this["spine_"+this.currIconAni].visible=!0,this.currIconAni++,Laya.timer.once(2e3,this,this.startBtnAni)}changeMailFlag(){}updateTopInfo(){let e=I.instance.playerDto;if(!e)return;this.tf_roleName.text=e.name,this.levelTF.text=e.lv.toString(),e.needTip=!0,this.playerIcon.dataSource=e,this.updateExp(),this.changeMailFlag();let i=new Date(I.instance.m_serverTime);console.log("server time toLocaleString："+i.toLocaleString()),console.log("server time offset date："+I.instance.timeZoneOff/60/60),this.updateLocalAssets()}updateExp(){}requestAssets(){L.intance.event(v.UPDATE_ASSETS)}async updataBalence(){await Y.instance.getBalance()}async updateAssets(){await sr.instance.updateAssetsBalance()}updateLocalAssets(){this.tf_3005.text=Te.filterNumFormat(I.instance.getConsumeValue(Oe.TYPE_GOLD),0)}loopTime(){}onEnable(){this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.list_room.vScrollBarSkin="",this.list_room.array=[],Laya.timer.loop(1e3,this,this.refreshRoomTime),this.btn_create.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_create]),this.btn_shop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_shop]),this.btn_guild.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_guild]),this.btn_heroes.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_heroes]),this.btn_backpack.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_backpack]),this.btn_asset.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_asset]),this.btn_scholarshop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_scholarshop]),this.btn_leaderboard.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_leaderboard]),this.btn_social.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_social]),this.btn_activities.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_activities]),this.btn_collection.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_collection]),this.btn_setting.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_setting]),this.btn_fullScreen.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_fullScreen]),L.intance.on(v.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),L.intance.on(v.ROLE_INFO_CHANGE,this,this.updateTopInfo),L.intance.on(v.UPDATE_ASSETS,this,this.updateAssets),L.intance.on(Bt.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),L.intance.on("CHANG_NAME",this,this.changeName),L.intance.on("open_buy",this,this.openBuyDialog),L.intance.on("msg_173",this,this.onFirstRecharge),L.intance.on("ACCOUNTVO_UPDATE",this,this.updateExp),L.intance.on(v.EVENT_REMOVE_ACTIVITY,this,this.onBindStateChange),L.intance.on(v.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),L.intance.on(v.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),this.initBtnBox()}setTab(e){for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("btn_yellowBg").visible=!0,this["btn_"+i].getChildByName("Label").color="#143268"):(this["btn_"+i].getChildByName("btn_yellowBg").visible=!1,this["btn_"+i].getChildByName("Label").color="#ffffff")}onClickTab(e){if(this.currTab!=e){if(this.list_room.visible=!1,this.setTab(e),e==1){this.arenaLv=1;var i=this.getRoomByType()}else if(e==2){this.arenaLv=2;var i=this.getRoomByType()}else if(e==3){this.arenaLv=3;var i=this.getRoomByType()}}}async getRoomByType(){this.arenaLv,this.coinTypes;let e=await F.requestPost("wxgame/room/list",{lv:this.arenaLv,coinTypeList:this.coinTypes});this.list_room.array=e.roomList,this.list_room.array.length>0?this.noDataBox.visible=!1:this.noDataBox.visible=!0,this.list_room.visible=!0,Laya.timer.once(3e3,this,this.getRoomByType)}refreshRoomTime(){this.refreshRoomBtnRed();let e=this.list_room.array;if(!(e.length<1)){for(let i=0;i<e.length;i++)if(e[i]){let r=this.list_room.getCell(i);r&&r.refreshTime&&r.refreshTime()}}}initCombo(){this.coinTypes=[];var e=j.intance.getGeneralValueById(5);this.coinDatas=[],e.forEach(i=>{this.coinTypes.push(i);var r=j.intance.m_dicItems.get(i);this.coinDatas.push([i,!0,f.instance.getLanguage(r.name)])}),this.list_coin.array=this.coinDatas}onCoinSelected(){this.coinTypes=[],this.coinDatas.forEach(e=>{e[1]&&this.coinTypes.push(e[0])}),console.log("您选中了 coinType"+this.coinTypes),this.getRoomByType()}onBindStateChange(){}refreshRoomBtnRed(){this.Img_redBase.visible=I.instance.getRedDotById(ga.ROOM_BASE),this.Img_redMid.visible=I.instance.getRedDotById(ga.ROOM_MID),this.Img_redAdv.visible=I.instance.getRedDotById(ga.ROOM_ADV)}onFirstRecharge(e){}initBtnBox(){this.sortIconView()}sortIconView(){}async onclickBtnHandler(e){switch(e){case this.btn_shop:be.intance.setCurrentScene(re.M_SCENE_SHOP);break;case this.btn_heroes:be.intance.setCurrentScene(re.M_SCENE_HERO);break;case this.btn_backpack:be.intance.setCurrentScene(re.M_SCENE_KNAPSACK);break;case this.btn_guild:I.instance.playerDto.union>0?be.intance.setCurrentScene(re.M_SCENE_MYUNION,I.instance.playerDto.union):be.intance.setCurrentScene(re.M_SCENE_UNION);break;case this.btn_setting:O.intance.openModule(h.GameSettingLanguageDialog);break;case this.btn_create:O.intance.openModule(h.CreateRoomDialog,[this.arenaLv]);break;case this.btn_fullScreen:ge.fullScreen(!ge.isFullScreen);break;case this.btn_friend:O.intance.openModule(h.FriendMemberDialog);break;case this.btn_asset:be.intance.setCurrentScene(re.M_SCENE_ASSET);break;case this.btn_scholarshop:be.intance.setCurrentScene(re.M_SCENE_SHOLARSHIP);break;case this.btn_wallet:O.intance.openModule(h.WalletDialog);break;case this.btn_leaderboard:be.intance.setCurrentScene(re.M_SCENE_RANK);break;default:te.instance.notice(f.instance.getLanguage(12));break}}openBuyDialog(e){switch(parseInt(e)){case 3:this.buyGoldBtn();break;case 4:this.clickRecharge();break}}buyTiCallBack(e){K.instance.showLoading(),this.sendData(89,[7])}clickRecharge(){if(Q.m_bInstantGame==!0){let e=f.instance.getLanguage(500004);Ie.instance().AlertByType(z.BASEALERTVIEW,e,z.YES);return}L.intance.event(v.EVENT_OPEN_MODULE,[h.RechargeDialog])}changeName(e){}buyGoldBtn(){L.intance.event(v.EVENT_OPEN_MODULE,[h.GetMoreDialog])}onDisable(){for(var e=1;e<6;e++)this["spine_"+e].off(Laya.Event.READY,this,this.onSkReady);L.intance.off(v.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),L.intance.off(v.ACCOUNTVO_UPDATE,this,this.updateExp),L.intance.off(v.ROLE_INFO_CHANGE,this,this.updateTopInfo),L.intance.off(v.UPDATE_ASSETS,this,this.updateAssets),L.intance.off(Bt.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),L.intance.off("CHANG_NAME",this,this.changeName),L.intance.off("open_buy",this,this.openBuyDialog),L.intance.off("msg_173",this,this.onFirstRecharge),L.intance.off(v.EVENT_REMOVE_ACTIVITY,this,this.onBindStateChange),L.intance.off(v.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),L.intance.off(v.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}onEnterMatchRoom(e){e?(Laya.timer.once(2e3,this,this.startBtnAni),Laya.timer.once(3e3,this,this.getRoomByType)):(Laya.timer.clear(this,this.startBtnAni),Laya.timer.clear(this,this.getRoomByType))}};cr.M_B_FIRST_Open=!0,cr=m([Nx("pxhiJrX5SkKKvyFr8uIlNA")],cr);var va=class{constructor(){}};va.GREEN="#2ac84b",va.YELLOW="#e8c833",va.RED="#e04343";var ed=class extends Laya.Box{};var{regClass:Ox}=Laya,td=class extends ed{constructor(){super();this.isAddEvent=!1}onEnable(){L.intance.on(v.EVENT_Game_Delay,this,this.onGameDelay)}onGameDelay(e){var i=j.intance.getGeneralValueById(6),r=i[0],n=i[1];this.tf_delay.text=e+"ms",e>n?(this.img_delay.skin="res/common/comm/img_com_xinhao3.png",this.tf_delay.color=va.RED):e>r?(this.img_delay.skin="res/common/comm/img_com_xinhao2.png",this.tf_delay.color=va.YELLOW):(this.img_delay.skin="res/common/comm/img_com_xinhao1.png",this.tf_delay.color=va.GREEN)}onDisable(){L.intance.off(v.EVENT_Game_Delay,this,this.onGameDelay)}};td=m([Ox("AhgzWGWoRFetvSMsEOSkSg")],td);var id=class extends Laya.Box{};var{regClass:Hx}=Laya,ad=class extends id{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.playerDto=e,this.playerDto&&(this.addEvent(),this.setCurrentOutPut())}set headSkin(e){this.img_head.skin=M.instance.getPlayerIcon(e)}async setCurrentOutPut(){if(!this.playerDto)return;let e=this.playerDto.icon;this.img_head.skin=M.instance.getPlayerIcon(e)}toDetail(){!this.playerDto||!this.playerDto.needTip||O.intance.openModule(h.RoleInfoDialog)}};ad=m([Hx("OPT5t2CoSmuYp2zUJWwUWA")],ad);var rd=class extends Laya.Box{};var{regClass:Ux}=Laya,nd=class extends rd{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.isAddEvent=!0)}onEnable(){this.btn_join.visible=!1,this.img_underway.visible=!1}async onJoin(){if(this.roomDto.requirePass)O.intance.openModule(h.InputPwdDialog,[this.roomDto]);else{let s=!1;var e=j.intance.m_dicArenaDic.get(this.roomDto.arenaId),i=e.item[0];let l=I.instance.playerDto;if(l.fightHeroPk){let u=I.instance.m_heroData.heroVoDic.get(l.fightHeroPk);if(u){if(s=u.state==2,s){var r=await F.requestPost("wxgame/lease/heroInfo",{heroPk:l.fightHeroPk});if(r.info.remainTicketCount<=0){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1175),z.YES,null);return}if(i!==r.info.ticketId){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1178),z.YES,null);return}}if(u.state==1){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1176),z.YES,null);return}}else{ge.heroNotEnought();return}}else{ge.heroNotEnought();return}if(e.item&&e.item.length>1){var i=e.item[0],n=e.item[1],o=I.instance.m_packageData.getCountById(i);if(o<n&&!s){ge.titickNotEnought(i);return}}let c=await F.requestPost("wxgame/room/join",{roomId:this.roomDto.roomId});$.instance.roomDto=c.roomDto,c.roomDto?O.intance.openModule(h.EnterRoomView):te.instance.notice(f.instance.getLanguage(135))}}set dataSource(e){super.dataSource=e,this.roomDto=e,this.roomDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.roomDto.leader.icon;this.playerIcon.headSkin=e,this.tf_name.text=this.roomDto.leader.name;var i=j.intance.m_dicUnions.get(this.roomDto.leader.unionId);i?this.tf_union.text=f.instance.getLanguage(i.simpleName):this.tf_union.text="",this.tf_people.text='<font color="#25ff63">'+this.roomDto.memberCount+"</font>/"+this.roomDto.maxCount,this.img_coin.skin=M.instance.getMoneyIcon(this.roomDto.coinType)}refreshTime(){this.roomDto.state==0?(this.btn_join.visible=!0,this.img_underway.visible=!1,this.tf_seconds.text=Qe.format(Math.round(this.roomDto.joinCd/1e3),":",!1),this.roomDto.joinCd-=1e3):(this.btn_join.visible=!1,this.img_underway.visible=!0,this.tf_seconds.text=Qe.format(Math.round(this.roomDto.fightEndTime/1e3),":",!1),this.roomDto.fightEndTime-=1e3)}};nd=m([Ux("YoCqj_dyTb2ZIAnhkSds6Q")],nd);var od=class extends Laya.Box{};var{regClass:Vx}=Laya,Et=class extends od{init(t,e,i=28){var r,n;switch(t!=0?(n=Tt.getRandInRound(-30,30),e.bj?r=Et.TYPE_Critical:r=Et.TYPE_Normal):(n=Tt.getRandInRound(-30,30),r=Et.TYPE_Miss),this.pos(n,-180),this.alpha=1,this.scale(1,1),this.tf_damage.visible=!1,this.box_crit.visible=!1,this.img_miss.visible=!1,r){case Et.TYPE_Normal:this.tf_damage.text=t+"",this.showNormalDamageEffect();break;case Et.TYPE_Critical:this.fontClip_damage.value=t+"",this.showCriticalDamageEffect();break;case Et.TYPE_Miss:this.showMissEffect();break;default:break}}showNormalDamageEffect(){this.tf_damage.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,this.onComplete))}showCriticalDamageEffect(){this.box_crit.visible=!0,this.scale(.2,.2),Laya.Tween.to(this,{scaleX:1.3,scaleY:1.3,alpha:1,y:this.y-70},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1,alpha:0},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}))}showMissEffect(){this.img_miss.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}onComplete(){this.removeSelf(),Laya.Pool.recover("damageNumber",this)}};Et.WHITE="#FFFFFF",Et.ORANGE="#FFA500",Et.RED="#FF0000",Et.GREEN="#119c09",Et.TYPE_Normal="Normal",Et.TYPE_Miss="Miss",Et.TYPE_Critical="Critical",Et=m([Vx("nHp6WKzZRIWvyhguidEfqg")],Et);var sd=class extends Laya.Box{};var{regClass:Gx}=Laya,ld=class extends sd{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.roomRankPlayerDto=e,this.roomRankPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.roomRankPlayerDto.id==I.instance.playerDto.pid?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.roomRankPlayerDto.rankNum<4?this.bg.skin="res/matchRank1/img_ranking_bg_"+this.roomRankPlayerDto.rankNum+".png":this.bg.skin="res/matchRank1/img_ranking_bg_4.png",this.roomRankPlayerDto.rankNum<4?(this.img_rankIcon1.skin="res/matchRank1/img_ranking_"+this.roomRankPlayerDto.rankNum+".png",this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.roomRankPlayerDto.id==I.instance.playerDto.pid?this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_me.png":this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1);let e=this.roomRankPlayerDto.icon;this.playerIcon.headSkin=e,this.playerIcon.gray=this.roomRankPlayerDto.die,this.tf_name.text=this.roomRankPlayerDto.name,this.tf_rank.text=this.roomRankPlayerDto.rankNum+"",this.tf_kill.text=this.roomRankPlayerDto.kill+"",this.tf_score.text=this.roomRankPlayerDto.score+""}};ld=m([Gx("vpTYNMB4TfGFK2gaXiPAeg")],ld);var cd=class extends Laya.Dialog{};var{regClass:zx}=Laya,ud=class extends cd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_PANEL;this.m_iPositionType=R.CENTER;this.allItems=[]}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.goMatchEnd)}setOpenData(e){this.mcLanList.vScrollBarSkin="",e.forEach(r=>{if(r.id==I.instance.playerDto.pid){this.myRank=r;return}}),this.mcLanList.array=e;let i=-1;this.mcLanList.selectedIndex=i,this.showListEffect(),N.instance.myPlayer.hp>0?this.successAni.visible=!0:this.successAni.visible=!1,_e.instance.sendCustumEvent(43)}showListEffect(){this.allItems=[];for(var e=this.mcLanList.array.length,i=0;i<e;i++){var r=this.mcLanList.getCell(i);r?(r.skewX=.5,r.alpha=0,this.allItems.push(r),Laya.timer.once(100+i*500,this,this.startShowItem,[i],!1)):console.log("showListEffect _item is null")}}startShowItem(e){var i=this.allItems[e];if(i==null){console.log("no list item now");return}i.scaleX=0,i.alpha=0,this.mcLanList.tweenTo(e,500),Laya.Tween.to(i,{scaleX:1,alpha:1},100,Laya.Ease.circOut,null,0,!1)}goMatchEnd(){O.intance.openModule(h.MatchEndView,this.myRank),this.close()}onDisable(){this.removeEvent()}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};ud=m([zx("NlnToPI4TTuxIDhRKLPChg")],ud);var pd=class extends Laya.Dialog{};var{regClass:Fx}=Laya,md=class extends pd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_PANEL;this.m_iPositionType=R.CENTER}onEnable(){this.btn_next.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_buy.on(Laya.Event.CLICK,this,this.onBuy),this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.btn_help.on(Laya.Event.CLICK,this,this.onHelp),_e.instance.sendCustumEvent(43)}onHelp(){ge.commTipWithYes(f.instance.getLanguage("HELP"))}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}onBuy(){be.intance.setCurrentScene(re.M_SCENE_SHOP,[3])}async onReceive(){if(this.welfareBagId>0){let e=await F.requestPost("wxgame/welfare/buy",{id:this.welfareBagId});e&&e.reward&&(O.intance.openModule(h.RewardGetDialog,e.reward),this.btn_receive.disabled=!0)}else te.instance.notice(f.instance.getLanguage(2e3))}setOpenData(e){this.currRoomRankPlayerDto=e,e.rankNum<4?this.img_rankIcon.skin="res/matchEnd1/img_battleend_ranking_"+e.rankNum+".png":this.img_rankIcon.skin="res/matchEnd1/img_battleend_ranking_4.png",this.list_reward.vScrollBarSkin="",this.tf_rank.text=e.rankNum+"";var i=[],r=$.instance.reward;r.forEach(p=>{var b=new $e(p.id);b.newAddCnt=p.count,i.push(b)});var n=this.list_reward.spaceX,o=this.list_reward.itemTemplate.width,s=i.length,l=s*o+n*(s-1);this.list_reward.width=l,this.welfareBagId=j.intance.getWelfareBagId(e.rankNum);var c=e.lease==1;this.welfareBagId>0&&!c?(this.btn_receive.visible=!0,this.btn_next.visible=!0,this.btn_buy.visible=!1,this.reward_cp.visible=!0,this.list_reward.right=759):(this.btn_receive.visible=!1,this.btn_next.visible=!0,c?(this.btn_buy.visible=!1,this.btn_next.x=this.box_outside.width-this.btn_next.width>>1):this.btn_buy.visible=!0,this.reward_cp.visible=!1,this.list_reward.right=this.box_outside.width-l>>1),this.list_reward.array=i,this.list_reward.visible=!0;let u=-1;this.list_reward.selectedIndex=u}onDisable(){this.removeEvent(),$.instance.clearData()}removeEvent(){}};md=m([Fx("y-nP_lRrQVef9uttVJ0rDw")],md);var dd=class extends Laya.Box{};var{regClass:jx}=Laya,hd=class extends dd{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.roomPlayer=e,!this.roomPlayer){this.img_back.skin="res/matchReady/img_jjc_0.png",this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){if(this.img_back.skin="res/matchReady/img_jjc_1.png",this.tf_name.text=at.abbreviateString(this.roomPlayer.name),this.box_show.visible=!0,this.destroyed)return;let e=this.roomPlayer.icon;this.playerIcon.headSkin=e,this.img_sign.visible=this.roomPlayer.leader>0;var i=j.intance.m_dicUnions.get(this.roomPlayer.unionId);i?this.tf_union.text=f.instance.getLanguage(i.simpleName):this.tf_union.text=""}toDetail(){this.heroVo.id}};hd=m([jx("PiGdVEY9T-K8CCfWLChS0w")],hd);var ut=class ut{constructor(){}static pointEquil(t,e){return t&&e&&t.x==e.x&&t.y==e.y}static isEmpty(t){for(let e in t)return!1;return!0}static showTxtEffect(t,e){let i=parseInt(t.text),r=Math.floor((e-i)/5),n=0;Laya.timer.loop(60,null,o);let o=function(){n++,i+=r,n>=5&&(i=e,Laya.timer.clear(null,o)),t.text=i+""}}static showTxtFlash(t){let e=t.color;t.color=ut.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,i),50);let i=function(){t.color=ut.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,r),50)},r=function(){t.color=ut.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,n),50)},n=function(){t.color=ut.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,o),50)},o=function(){t.color=ut.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,s),50)},s=function(){t.color=ut.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,l),50)},l=function(){t.color=e}}static getProKey(t){return ut.PRO_DIC[t]?ut.PRO_DIC[t]:t}static getIconName(t){return ut.proList[t]}static clonePoint(t){return new Laya.Point(t.x,t.y)}static copyObj(t){let e={};for(let i in t)e[i]=t[i];return e}static mergeObj(t,e){for(let i in e)t[i]?t[i]=parseFloat(t[i])+parseFloat(e[i]):t[i]=e[i];return t}static checkHit(t){return t.visible&&t.mouseX>0&&t.mouseY>0&&t.mouseX<=t.width&&t.mouseY<=t.height}static separateObj(t,e){if(e)for(let i in e)t[i]&&(t[i]=parseFloat(t[i])-parseFloat(e[i]));return t}static toFixed(t,e=1){if((t+"").indexOf(".")!=-1){let i=parseFloat(t).toFixed(e);return e==1&&i.charAt(i.length-1)=="0"&&(i=parseInt(i)+""),i}return t+""}static formatResWith(t){return t>=1e12?Math.floor(t/1e12)+ut.RES_W[3]:t>=1e9?Math.floor(t/1e9)+ut.RES_W[2]:t>=1e6?Math.floor(t/1e6)+ut.RES_W[1]:t>=1e4?Math.floor(t/1e3)+ut.RES_W[0]:t+""}static formatNumWithSign(t,e=","){t=Math.floor(t);let i=t+"",r=1,n=[];for(let o=i.length-1;o>=0;o--)n.push(i.charAt(o)),r>0&&r%3==0&&n.push(e),r++;return n.reverse(),n[0]==e&&n.shift(),n.join("")}static autoRecyle(t,e=!1){t.on(Laya.Event.COMPLETE,null,i,[t]),t.isPlaying||t.play(1,!1);let i=function(r){r.off(Laya.Event.COMPLETE,null,i),r.stop(),r.removeSelf(),e&&Laya.Pool.recover("Animation",r)}}static createEllipse(t,e,i,r,n,o=1,s="#ffffff"){let l=[],c=r>n?o/r:o/n;for(let u=0;u<2*Math.PI;u+=c)l.push(e+r*Math.cos(u)-r/2,i+n*Math.sin(u));return t&&t.drawPoly(l.shift(),l.shift(),l,s),l}};ut.blackFilter=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.78,0]),ut.blackFilter2=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.5,0]),ut.qualityColors=["#78cefd","#78cefd","#78cefd","#d5a8ff","#fdd378","#ffa8a8","#ffa8a8","#ffa8a8"],ut.COLORS=["#69ff4c","#FFFFFF"],ut.PRO_DIC={HP:"hp",ATK:"attack",DEF:"defense",SPEED:"speed",RES:"resilience",CDMG:"critDamage",CDMGR:"critDamReduct"},ut.proList={hp:"HP",attack:"ATK",defense:"DEF",speed:"SPEED",hit:"hit",dodge:"dodge",crit:"crit",critDamage:"CDMG",resilience:"RES",critDamReduct:"CDMGR"},ut.RES_W=["K","M","B","T"];var La=ut;var fd=class extends Laya.Sprite{};var{regClass:qx}=Laya,bd=class extends fd{constructor(){super();this.isAddEvent=!1;this.isMe=!1;this.inGround=!1;this.moveSpeed=6;this._speed=6;this.biasSpeed=0;this.lastDirectStr="left";this.directStr="left";this._roleDirection=-1;this.inControl=!1;this.isStop=!1;this.isLockAni=!1;this.aniChange=!1;this.displacementType=0;this.timeStamp=0;this.currArea=0;this.flashCount=0;this.lastX=-1;this.lastY=-1;this.lastRoleDirection1=-1;this.lastSpeed1=-1;this.lastArea=-1}get speed(){return this._speed}set speed(e){this._speed=e,this.biasSpeed=Math.round(this.speed*Math.sin(45*Math.PI/180)),console.log("Role speed2: ",this.speed,this.biasSpeed,this.roomPlayerDto.id)}get roleDirection(){return this._roleDirection}set roleDirection(e){this._roleDirection=e,e!=-4&&(e>270||e<90?this.directStr="right":e>90&&e<270&&(this.directStr="left"),this.lastDirectStr!=this.directStr&&(this.heroBox.scaleX=this.directStr=="left"?1:-1,this.lastDirectStr=this.directStr))}set myRoleDirection(e){if(this.roleDirection!=e){this.roleDirection=e;let i=28+Math.sin(e*(Math.PI/180))*(28/4),r=24+Math.sin(e*(Math.PI/180))*(14/2),n=this.img_d.width/2+Math.cos(e*(Math.PI/180))*(this.img_d.width/2),o=this.img_d.height/2+ +Math.sin(e*(Math.PI/180))*(this.img_d.height/2);this.img_arrow.pos(n,o),this.img_gj.rotation=e+90,this.img_arrow.rotation=e,this.img_arrow.width=i,this.img_arrow.height=r}}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(this.roomPlayerDto=e,!!this.roomPlayerDto){if(this.pos(this.roomPlayerDto.x,this.roomPlayerDto.y),this.addEvent(),this.speed=this.roomPlayerDto.speed,this.currArea=this.roomPlayerDto.area,console.log("MatchHeroSpr speed: "+this.speed),this.roomPlayerDto.hp<=0){this._isDead=!0,this.setDead();return}this.heroVo=new Kt,this.heroVo.id=this.roomPlayerDto.heroId,this.heroVo.color=this.roomPlayerDto.heroColor,this.moveSpeed=this.heroVo.heroItem.mov/30,this.setCurrentOutPut(),this.updataBlood(),this.addDiquanAndBaoqi()}}setDead(){console.log("MatchHeroSpr setDead: "+this.isMe),this._isRealDead=!0,this.alpha=.5,this.img_deadImg.visible=!0;var e=this.img_deadImg.y;this.tf_name.visible=!1,this.box_blood.visible=!1,this.spineNodeBack.visible=!1,this.spineNodeFront.visible=!1,this.heroSk.visible=!1,this.img_deadImg.y=0,this.img_deadImg.scale(0,0),this.getComponent(Laya.RigidBody).mask=1;var i=this;Laya.Tween.to(this.img_deadImg,{y:e,scaleX:1,scaleY:1},400,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){i.isMe&&L.intance.event(v.EVENT_GameScene_Gray)}))}updataBlood(){this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}addDiquanAndBaoqi(){if(console.log("addDiquanAndBaoqi"),!this.destroyed){var e=this.heroVo.heroItem.level,i=this.heroVo.heroItem.level;if(!this.baoqiSpineSk){if(i<4)return;this.baoqiSpineSk=new Laya.SpineSkeleton,this.spineNodeBack.addChild(this.baoqiSpineSk),this.baoqiSpineSk.animationName="animation";var r=N.instance["baoqiEffect"+i];this.baoqiSpineSk.templet=r}}}setCurrentOutPut(){this.heroSk.dataSource=this.heroVo,this.tf_name.color=La.qualityColors[this.heroVo.heroItem.quality-1],this.tf_name.text=at.abbreviateString(this.roomPlayerDto.name),this.img_country.skin=M.instance.getCountryIcon(this.roomPlayerDto.country+""),I.instance.playerDto.pid==this.roomPlayerDto.id?this.myRoleDirection=this.roomPlayerDto.dire:this.roleDirection=this.roomPlayerDto.dire}pos(e,i,r){if(super.pos(e,i,r),this.roomPlayerDto&&this.roomPlayerDto.id){var n=N.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);if(n){var o=$.instance.currArenaItem.mapid;o==1002&&(e-=160,i-=160);var s=e*216/3040,l=i*216/3040;n.pos(s,l,r)}}return this}set visible(e){if(super.visible=e,this.roomPlayerDto&&this.roomPlayerDto.id){var i=N.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);i&&(i.visible=e)}}set alpha(e){if(super.alpha=e,this.roomPlayerDto&&this.roomPlayerDto.id){var i=N.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);i&&(i.alpha=e)}}onAwake(){}backAni(){}idle(){console.log(`${this.roomPlayerDto.id} 播放 待机 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Je.ANI_daiji,!0,!1)}walk(){console.log(`${this.roomPlayerDto.id} 播放 走动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Je.ANI_xingzou,!0,!1)}run(){console.log(`${this.roomPlayerDto.id} 播放 跑动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Je.ANI_shanbi,!0,!1)}playAttackAnimation(e,i,r,n){if(!this._isDead){var o=j.intance.m_dicSkills.get(e);if(console.log(`${this.roomPlayerDto.id} 攻击 , 播放 ${e} 动画`),o.type==1){if(i&&N.instance.onSendAnimation(e,Je.TYPE_GONGJI),this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Je.ANI_gongji+s,!1)}if(i){var l=N.instance.getAttackTarget(o);if(l&&l.length>0){var c=l[0];c.roomPlayerDto.hp>0&&Laya.timer.frameOnce(1,this,this.onRealAttack,[o,c.roomPlayerDto.id])}}Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,n(),this.aniChange=!0}),N.instance.playSound(1)}else if(o.type==2){if(i&&N.instance.onSendAnimation(e,Je.TYPE_TI),this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Je.ANI_ti+s,!1)}i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(30,this,()=>{this.isStop=!1,n(),this.aniChange=!0}),N.instance.playSound(2)}else if(o.type==6)i&&N.instance.onSendAnimation(e,Je.TYPE_DAZHAO),this.isStop=!0,this.heroSk.isReady&&(console.log("EnumHero.ANI_dazhao: "+Je.ANI_dazhao),this.heroSk.sk.play(Je.ANI_dazhao,!1)),i&&Laya.timer.frameOnce(30,this,this.onRealAttack,[o]),Laya.timer.frameOnce(70,this,()=>{this.isStop=!1,n(),this.aniChange=!0}),N.instance.playSound(2);else if(o.type==5){var u=[];if(this.displacementType=o.displacementType,i){var p=o.displacement>0?o.displacement:50;u=Tt.rollCharacterByDir(this.x,this.y,this.roleDirection,p),N.instance.onSendAnimation(e,Je.TYPE_FEI,-1,u[0],u[1])}else u[0]=r.get("newX"),u[1]=r.get("newY");if(this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Je.ANI_ti+s,!1)}if(this.heroVo.heroItem.race!=4){var b=N.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=b,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(5,this,this.onRoll,[u]),Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,this.displacementType=0,n(),this.aniChange=!0}),N.instance.playSound(3)}else if(o.type==3){var u=[];if(i){var p=o.displacement>0?o.displacement:350;u=Tt.rollCharacterByDir(this.x,this.y,this.roleDirection,p),N.instance.onSendAnimation(e,Je.TYPE_HUA,-1,u[0],u[1])}else u[0]=r.get("newX"),u[1]=r.get("newY");if(this.getComponent(Laya.BoxCollider).isSensor=!0,this.isStop=!0,this.heroSk.isReady&&this.heroSk.sk.play(Je.ANI_hua,!1),this.heroVo.heroItem.race!=4){var b=N.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=b,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}Laya.timer.frameOnce(5,this,this.onRoll,[u]),Laya.timer.frameOnce(20,this,()=>{this.getComponent(Laya.BoxCollider).isSensor=!1,this.isStop=!1,n(),this.aniChange=!0}),N.instance.playSound(3)}else if(o.type==4){i&&(this.isLockAni=!0,N.instance.onSendAnimation(e,Je.TYPE_DANG)),this.heroSk.isReady&&this.heroSk.sk.play(Je.ANI_dang,!1),this.dunpaiSk||(this.dunpaiSk=N.instance.dunpaiTemplet.buildArmature(0),this.dunpaiSk.x=-45,this.skNode.addChild(this.dunpaiSk)),this.dunpaiSk.play(0,!0);var x=2e3,_=o.buff;if(_.length>2){var y=_[2],C=j.intance.m_dicBuffs.get(y);x=parseInt(C.time+"")}Laya.timer.once(x,this,()=>{this.isLockAni=!1,this.dunpaiSk&&(this.dunpaiSk.stop(),this.dunpaiSk.visible=!1),n(),this.aniChange=!0}),N.instance.playSound(2)}}}onRoll(e){this.inGround||Laya.Tween.to(this,{x:e[0],y:e[1]},330)}onHuaComplate(){this.huaSpineSk.stop(),this.huaSpineSk.visible=!1}onRealAttack(e,i=-1){if(console.log("onRealAttack",i),i>0)N.instance.onSendAttack(i,1,e.id);else if(e.type==6){var r=N.instance.getAttackTarget(e);r&&r.length>0&&r.forEach(o=>{o&&o.roomPlayerDto.hp>0&&N.instance.onSendAttack(o.roomPlayerDto.id,1,e.id)})}else{var r=N.instance.getAttackTarget(e);if(r&&r.length>0){var n=r[0];n.roomPlayerDto.hp>0&&N.instance.onSendAttack(n.roomPlayerDto.id,1,e.id)}}}playBeijiAnimation(e){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 被击 动画`),this.heroSk.isReady&&this.heroSk.sk.play(Je.ANI_beiji,!1),Laya.timer.once(1e3,this,()=>{e()}))}playChuShengAnimation(e){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 出生 动画`),this.heroSk.isReady&&this.heroSk.sk.play(Je.ANI_ruchang,!1),Laya.timer.once(1e3,this,()=>{e()}))}attack(e=0,i=!0,r=null){if(console.log(`${this.roomPlayerDto.id} 攻击 s`),this._isAttacking||this._isDead){console.log(`${this.roomPlayerDto.id} 没有靠近目标或正在攻击中或技能冷却中或已死亡，无法攻击`);return}this._isAttacking=!0,this.playAttackAnimation(e,i,r,()=>{this._isAttacking=!1})}takeDamage(e,i){var r=e.skill,n=e.attackValue,o=e.defHp;console.log(`${this.roomPlayerDto.id} 受到 ${n} 伤害s`),!this._isDead&&(this.roomPlayerDto.hp=o,console.log(`${this.roomPlayerDto.id} 受到 ${n} 伤害`),this.updateHealthBar(i),this.showDamageLabel(r,n,e),this._isAttacking&&(console.log(`${this.roomPlayerDto.id} 正在攻击中，受到攻击中断攻击 暂时没有中断攻击`),Laya.timer.clear(this,this.onRealAttack),this._isAttacking=!1),this._isTakingDamage=!0,this.isLockAni=!0,this.beijiSk||(this.beijiSk=N.instance.beijiTemplet.buildArmature(0),this.skNode.addChild(this.beijiSk)),this.beijiSk.play(0,!1),this.playBeijiAnimation(()=>{this.beijiSk&&(this.beijiSk.stop(),this.beijiSk.visible=!1),this._isTakingDamage=!1,this.isLockAni=!1,this.backAni()}))}die(e){if(console.log(`${this.roomPlayerDto.id} 死亡s`),!this._isDead){console.log(`${this.roomPlayerDto.id} 死亡`);var i=Tt.judgePosition(e.x-this.x,e.y-this.y);this.roleDirection=i,this._isDead=!0,this.heroSk.isReady&&this.heroSk.sk.play(Je.ANI_siwang,!1),Laya.timer.once(2e3,this,this.setDead)}}applySkillEffect(e){console.log(`${this.roomPlayerDto.id} 受到技能效果: ${e}`)}updateHealthBar(e){this.roomPlayerDto.hp<=0&&(this.roomPlayerDto.hp=0,this.die(e)),this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}showDamageLabel(e,i,r){if(i.length>1)for(var n=j.intance.m_dicSkills.get(e),o=n.section,s=o,l=0;l<i.length;l++){var c=i[l];this.showDamageLabelDetailDelay(c,s[l][1],r)}else i.length==1?this.showDamageLabelDetailDelay(i[0],100,r):this.showDamageLabelDetailDelay(0,100,r);var u=this;if(r.allAtkValue!=0){var p=200;this.originalBlendMode=this.img_hp_bg.blendMode,this.flashCount=0,Laya.timer.loop(p,this,this.flashBlood)}}flashBlood(){var e=2;this.flashCount<e?this.img_hp_bg.blendMode===this.originalBlendMode?this.img_hp_bg.blendMode="lighter":(this.img_hp_bg.blendMode=this.originalBlendMode,this.flashCount++):(this.img_hp_bg.blendMode=this.originalBlendMode,Laya.timer.clear(this,this.flashBlood))}showDamageLabelDetailDelay(e,i,r){Laya.timer.once(i,this,this.showDamageLabelDetail,[e,r],!1)}showDamageLabelDetail(e,i){var r=Laya.Pool.getItemByCreateFun("damageNumber",N.instance.damageNumPrefab.create,N.instance.damageNumPrefab);r.init(e,i),this.addChild(r)}onSendMoveData(){if(!this._isDead){var e=this.speed,i=this.roleDirection,r=this.x,n=this.y;if(Math.abs(r-this.lastX)>2||Math.abs(n-this.lastY)>2||this.lastRoleDirection1!=i||this.lastSpeed1!=e||this.lastArea!=this.currArea){this.pos(r,n),this.lastX=r,this.lastY=n,this.lastRoleDirection1=i,this.lastSpeed1=e,this.lastArea=this.currArea;var o=I.instance.m_serverTime;this.timeStamp=o,N.instance.onSendMove(o,this.roomPlayerDto.id,e,i,r,n,this.currArea)}}}beiTui(e){var i=this.roomPlayerDto.id,r=this.x,n=this.y;if(Math.abs(r-this.lastX)>2||Math.abs(n-this.lastY)>2){this.lastX=r,this.lastY=n;var o=I.instance.m_serverTime;this.timeStamp=o,N.instance.onSendTargetMove(o,e,i,r,n)}}onPushMoveData(e,i,r,n,o,s){if(this.roleDirection=r,this.speed!=i&&(this.speed=i,i==0?this.idle():this.walk()),this.currArea!=s&&(this.currArea=s),e<=this.timeStamp){console.log("位置数据忽略："+e+" < "+this.timeStamp);return}(Math.abs(n-this.lastX)>1||Math.abs(o-this.lastY)>1)&&(this.pos(n,o),this.lastX=n,this.lastY=o)}onPushTargetMoveData(e,i,r){if(e<=this.timeStamp){console.log("推人数据忽略："+e+" < "+this.timeStamp);return}(Math.abs(i-this.lastX)>2||Math.abs(r-this.lastY)>2)&&(this.pos(i,r),this.lastX=i,this.lastY=r)}sendToServer(e){}initBirth(e){e?this.createBirthSpine():this.onPlayBirthEnd()}createBirthSpine(){this.heroSk.visible=!1,this.tf_name.visible=!1,this.box_blood.visible=!1,this.chushengBackSpineSk||(this.chushengBackSpineSk=new Laya.SpineSkeleton,this.spineNodeBack.addChild(this.chushengBackSpineSk)),this.chushengFrontSpineSk||(this.chushengFrontSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.chushengFrontSpineSk)),this.chushengBackSpineSk.on(Laya.Event.READY,this,this.onBirthReady);var e=N.instance.ruchangEffects[this.getRandomAnimationType()];this.destroyed||(this.chushengBackSpineSk.animationName="animation2",this.chushengBackSpineSk.templet=e,this.chushengFrontSpineSk.animationName="animation1",this.chushengFrontSpineSk.templet=e)}getRandomAnimationType(){return Math.floor(Math.random()*3)}onBirthReady(){Laya.timer.once(500,this,this.onPlayBirth1)}onPlayBirth1(){this.isLockAni=!0,this.heroSk.visible=!0,this.playChuShengAnimation(()=>{this.isLockAni=!1,this.aniChange=!0}),this.chushengBackSpineSk.visible=!0,this.chushengBackSpineSk.play("animation2",!1),this.chushengFrontSpineSk.visible=!0,this.chushengFrontSpineSk.play("animation1",!1),Laya.timer.once(1300,this,this.onPlayBirthEnd)}onPlayBirthEnd(){this.chushengBackSpineSk&&(this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),this.chushengBackSpineSk.destroy(),this.chushengBackSpineSk.removeSelf()),this.chushengFrontSpineSk&&(this.chushengFrontSpineSk.destroy(),this.chushengFrontSpineSk.removeSelf()),this.box_d.visible=!0,this.tf_name.visible=!0,this.box_blood.visible=!0}onDisable(){this.chushengBackSpineSk&&this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};bd=m([qx("JIaWsVNzTK2dJIUcev60tQ")],bd);var gd=class extends Laya.Box{};var{regClass:Wx}=Laya,vd=class extends gd{init(){var t=$.instance.currArenaItem.coinType;this.img_bing.skin="gameIcon/map/1001/img_bing_"+t+".png"}set dataSource(t){super.dataSource=t}};vd=m([Wx("W3qDvbUmSa2SFKJ5iEmjsg")],vd);var Ld=class extends Laya.Box{};var{regClass:Kx}=Laya,_d=class extends Ld{init(){var t=$.instance.currArenaItem.coinType;this.img_bing.skin=M.instance.getItemIcon(t),N.instance.allOrders||(N.instance.allOrders=[]),N.instance.allOrders.push(this.img_mtl)}set dataSource(t){super.dataSource=t}};_d=m([Kx("UmH7VSkYTd6D8QA2Eu2OYw")],_d);var wd=class extends Laya.Box{};var{regClass:Yx}=Laya,xd=class extends wd{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){this.roomPlayerDto=e,this.roomPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}setCurrentOutPut(){this.tf_rank.text=this.roomPlayerDto.rankNum+"";let e=this.roomPlayerDto.icon;this.playerIcon.headSkin=e,this.tf_name.text=at.abbreviateString(this.roomPlayerDto.name),this.tf_kill.text=this.roomPlayerDto.kill+"",this.roomPlayerDto.id==N.instance.myPlayer.id?(this.img_bg.skin="res/match1/img_ph2.png",this.tf_rank.color="#000000",this.tf_name.color="#ffe64b",this.img_kill.filters=[ge.YELLOW],this.tf_kill.color="#ffe64b",this.box_item.x=6):(this.img_bg.skin="res/match1/img_ph.png",this.tf_rank.color="#ffffff",this.tf_name.color="#ffffff",this.img_kill.filters=null,this.tf_kill.color="#ffffff",this.box_item.x=15)}};xd=m([Yx("XTVFXeI_R768e0Elv_ePAA")],xd);var Id=class extends Laya.Scene{};var{regClass:$x}=Laya,Ed=class extends Id{constructor(){super(...arguments);this.type=1}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){this.type=e}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}onEnable(){console.log("MatchReadyRT onEnable"),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_random.on(Laya.Event.CLICK,this,()=>{this.generateName()}),this.btn_enter.on(Laya.Event.CLICK,this,()=>{var e=this.input_username.text;if(console.log("phyBtn"),e==""){alert("用户名不能为空");return}Xe.instance.openId=e,Xe.instance.initSocket()})}generateRandomName(e){let i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",r="";for(let n=0;n<e;n++){let o=Math.floor(Math.random()*i.length);r+=i.charAt(o)}return r}generateName(){this.input_username.text=this.generateRandomName(8)}onDestroy(){}};Ed=m([$x("mOlMVGD3TRCKNoddhyUGLw")],Ed);var Sd=class extends Laya.Dialog{};var{regClass:Xx}=Laya,Td=class extends Sd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_PANEL;this.m_iPositionType=R.CENTER}onEnable(){}onOpened(e){this.updateBattleCD()}updateBattleCD(){var e=$.instance.matchDto.startTime-$.instance.matchDto.nowTime;$.instance.startCoolDownTime=Math.round(e/1e3),$.instance.startCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):(Laya.timer.clear(this,this.onSetCoolTime),this.close())}onSetCoolTime(){$.instance.startCoolDownTime>=0?(this.fontClip_reduceTime.value=$.instance.startCoolDownTime+"",this.scaleEffect(),$.instance.startCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),this.onMatchStartEnd())}scaleEffect(){var e=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(e.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}onMatchStartEnd(){Laya.timer.once(5e3,this,this.close)}onDisable(){this.removeEvent(),$.instance.stopAll=!1}removeEvent(){Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};Td=m([Xx("xpPoFvX_SqiYMO5AaOwGyA")],Td);var Cd=class extends Laya.Box{};var{regClass:Qx}=Laya,kd=class extends Cd{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.itemVo&&(this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=this.itemVo)}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===It.TYPE_Equipment?O.intance.openModule(h.EquipDetailDialog,this.itemVo):O.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};kd=m([Qx("WXpxCvqlQ2mKdcJCYlqOeg")],kd);var Ad=class extends Laya.Scene{};var{regClass:Zx}=Laya,Dd=class extends Ad{constructor(){super(...arguments);this.liveNum=0}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP,N.instance.init()}onOpened(e){var i=$.instance.matchDto.startTime-$.instance.matchDto.nowTime;i>0&&O.intance.openModule(h.MatchReadyView);var r=$.instance.matchDto.arenaId,n=j.intance.m_dicArenaDic.get(r);$.instance.currArenaItem=n;var o=$.instance.currArenaItem.mapid,s=Laya.loader.getRes("gameIcon/map/map_"+o+".lh");this.img_smallMap.skin="res/match1/img_map_"+o+".png";var l=Laya.Pool.getItemByCreateFun("MatchMap1001",s.create,s);l.init(),N.instance.gameMap=l,N.instance.box_players=l.box_players,this.matchBox.removeChildren(),this.matchBox.addChild(l);var c=I.instance.playerDto;this.tf_roleName.text=c.name;let u=c.icon;this.playerIcon.headSkin=u,N.instance.initMatch(this,this.onInitEnd),_e.instance.sendCustumEvent(42)}onInitEnd(e){e.updateSkill(),e.updateKill(),e.updateBattleCD(),Laya.timer.frameLoop(10,e,e.updateCharactersOrder)}onRestoreData(){N.instance.updateMatch(this,this.onInitEnd)}updateSkill(){var e=N.instance.myPlayer,i=j.intance.m_dicHeros.get(e.heroId);console.log("updateSkill"),console.log(i.skillIds);for(var r=i.skillIds.length,n=0;n<r;n++){var o=i.skillIds[n],s=j.intance.m_dicSkills.get(o),l=this["matchSkill"+(n+1)];l.keyNum=n+1,l.dataSource=s;var c=e.skillCd.get(o);c&&l.updateSkillCooldown(c),l.updateGlobalCooldown(e.commonCd),l.visible=!0}}updateKill(){N.instance.myPlayer&&(this.tf_kill.text=N.instance.myPlayer.kill+""),this.list_rank.array=this.getSortPlayer(N.instance.matchHeroDic.values),this.tf_remainer.text=this.liveNum+"",this.tf_total.text="/ "+N.instance.matchHeroDic.values.length}getSortPlayer(e){var i=e.slice(),r=i.sort((o,s)=>s.score-o.score);this.liveNum=0;var n=1;return r.forEach(o=>{o.rankNum=n,n++,o.hp>0&&this.liveNum++}),r}updateBattleCD(){$.instance.matchCoolDownTime=Math.round($.instance.matchDto.remainderCd/1e3),$.instance.matchCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):Laya.timer.clear(this,this.onSetCoolTime)}onSetCoolTime(){$.instance.matchCoolDownTime>=0?(this.fontClip_reduceTime.value=Qe.format($.instance.matchCoolDownTime,":",!1),$.instance.matchCoolDownTime>90?this.fontClip_reduceTime.skin="res/match1/fontClip_1.png":$.instance.matchCoolDownTime>10?this.fontClip_reduceTime.skin="res/match1/fontClip_2.png":(this.fontClip_reduceTime.skin="res/match1/fontClip_3.png",this.scaleEffect()),$.instance.stopAll||$.instance.matchCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.once(1e4,this,this.checkMatchRankData))}checkMatchRankData(){$.instance.checkMatchRankData()}scaleEffect(){var e=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(e.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}updateCharactersOrder(){N.instance.allOrders.sort((e,i)=>e.y-i.y);for(let e=0;e<N.instance.allOrders.length;e++)N.instance.allOrders[e].zOrder=e}onFirstBloodPush(e){var i=e.pid,r=N.instance.matchHeroDic.get(i);let n=r.icon;this.img_firstBlood_head.skin=M.instance.getPlayerIcon(n),this.img_firstBlood.visible=!0,this.img_firstBlood.alpha=0,this.img_firstBlood.y=-200,Laya.Tween.to(this.img_firstBlood,{y:92,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood1))}onFirstBlood1(){this.zi_firstBlood.scale(1,1),Laya.Tween.to(this.zi_firstBlood,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood2))}onFirstBlood2(){Laya.Tween.to(this.zi_firstBlood,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood3))}onFirstBlood3(){Laya.Tween.to(this.img_firstBlood,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood4),1500)}onFirstBlood4(){this.img_firstBlood.visible=!1}onMutiKillPush(e){this.fontClip_kill.value=e.kill+"";var i=!1;e.kill>=3?(i=!0,this.img_mutiKill.skin="res/match1/img_kill_3s.png"):this.img_mutiKill.skin="res/match1/img_kill_2s.png";var r=e.pid,n=N.instance.matchHeroDic.get(r);let o=n.icon;this.img_mutiKill_head.skin=M.instance.getPlayerIcon(o),this.img_mutiKill.visible=!0,this.img_mutiKill.alpha=0,this.img_mutiKill.y=-200,Laya.Tween.to(this.img_mutiKill,{y:175,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill1,[i]))}onMutiKill1(e){this.zi_mutiKill.scale(1,1),e?Laya.Tween.to(this.zi_mutiKill,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill2)):this.onMutiKill3(2e3)}onMutiKill2(){Laya.Tween.to(this.zi_mutiKill,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill3,[1500]))}onMutiKill3(e){Laya.Tween.to(this.img_mutiKill,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill4),e)}onMutiKill4(){this.img_mutiKill.visible=!1}onGameSceneGray(){this.matchBox.gray=!0}onEnable(){console.log("MatchScene onEnable"),L.intance.on(v.UPDATE_KILL_NUM,this,this.updateKill),L.intance.on(v.EVENT_RESTORE_DATA,this,this.onRestoreData),L.intance.on(v.EVENT_FirstBlood,this,this.onFirstBloodPush),L.intance.on(v.EVENT_MutiKill,this,this.onMutiKillPush),L.intance.on(v.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.on(Laya.Event.FOCUS,this,this.onWindowFocus)}onWindowFocus(){N.instance.sendRestoreData()}onDisable(){L.intance.off(v.UPDATE_KILL_NUM,this,this.updateKill),L.intance.off(v.EVENT_RESTORE_DATA,this,this.onRestoreData),L.intance.off(v.EVENT_FirstBlood,this,this.onFirstBloodPush),L.intance.off(v.EVENT_MutiKill,this,this.onMutiKillPush),L.intance.off(v.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.off(Laya.Event.FOCUS,this,this.onWindowFocus),Laya.timer.clearAll(this)}};Dd=m([Zx("sX0uLhOQSmm8b-_sHNqe5w")],Dd);var{regClass:Jx,property:pae}=Laya,el=class extends Laya.Script{constructor(){super()}onAwake(){}onStart(){N.instance.playMusic()}onLateUpdate(){N.instance.moveGameWindow()}};el=m([Jx("Ply19emtSrqrBk7nHXToAQ")],el);var Md=class extends Laya.Box{};var{regClass:eI}=Laya,Pd=class extends Md{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.txt_num.text="",this.img_icon.skin=M.instance.getMatchSkillIcon(this.skillItem.icon))}};Pd=m([eI("iwuFUCOEQRyOjxpy6IkQ2Q")],Pd);var Bd=class extends Laya.Button{};var{regClass:tI}=Laya,Rd=class extends Bd{constructor(){super();this.isAddEvent=!1;this.isCanClick=!0;this.skillCooldown=5e3;this.thisGlobalCooldown=1e4;this.globalCooldown=1e4;this.remainingSkillCooldown=0;this.remainingGlobalCooldown=0}onEnable(){this.addEvent()}addEvent(){this.isAddEvent||(L.intance.on(v.EVENT_CLICK_NUM,this,this.onNumberClick),L.intance.on(v.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.onSkillButtonClick),this.on(Laya.Event.MOUSE_UP,this,this.onSkillButtonUp))}onNumberClick(e){e==this.keyNum&&this.onSkillButtonClick(null)}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.isBig=this.skillItem.icon=="1001",this.skillIconItem.dataSource=this.skillItem,this.skillCooldown=this.skillItem.cd,this.thisGlobalCooldown=this.skillItem.commCd,Laya.timer.frameLoop(1,this,this.updateCooldown))}onMouseClick(e){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=0;N.instance.playSound(1),Laya.timer.once(1e3,this,()=>{this.isCanClick=!0})}}onSkillButtonUp(e){e&&e.stopPropagation(),lr.clearClickFilter(this)}onSkillButtonClick(e){e&&e.stopPropagation(),this.remainingSkillCooldown<=0&&this.remainingGlobalCooldown<=0?(console.log("技能释放！"),Laya.Tween.to(this,{scaleX:.8,scaleY:.8},100,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},100,Laya.Ease.linearNone)})),N.instance.myHeroSpr.attack(this.skillItem.id),this.updateSkillCooldown(this.skillCooldown),L.intance.event(v.EVENT_UPDATE_GLOBAL_COOL,[this.thisGlobalCooldown])):console.log("技能或全局冷却还在进行中，无法释放。")}updateSkillCooldown(e){this.remainingSkillCooldown=e}updateGlobalCooldown(e){this.globalCooldown=e,this.remainingGlobalCooldown=e}updateCooldown(){if(this.remainingSkillCooldown>0){this.remainingSkillCooldown-=Laya.timer.delta;let e=this.remainingSkillCooldown/1e3;this.txt_time.text=e.toFixed(1),this.updateCooldownMask(this.skillCooldownMask,this.remainingSkillCooldown/this.skillCooldown,"#000000"),this.img_djs.visible=!0,this.txt_time.visible=!0}else this.img_djs.visible=!1,this.txt_time.visible=!1;this.remainingGlobalCooldown>0?(this.remainingGlobalCooldown-=Laya.timer.delta,this.updateCooldownMask(this.globalCooldownMask,this.remainingGlobalCooldown/this.globalCooldown,"#00000036"),this.globalCooldownMask.visible=!0):this.globalCooldownMask.visible=!1,this.skillIconItem.gray=this.remainingSkillCooldown>0||this.remainingGlobalCooldown>0}updateCooldownMask(e,i,r){let n=this.width/2,o=this.width/2,s=this.height/2;e.graphics.clear(),e.graphics.drawPie(o,s,n,-90+360*(1-i),270,r)}onDisable(){L.intance.off(v.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),L.intance.offAllCaller(this),Laya.timer.clearAll(this)}};Rd=m([tI("x6t-z1VuR52yXWju0qxGBg")],Rd);var Nd=class extends Laya.Dialog{};var{regClass:iI}=Laya,Od=class extends Nd{constructor(){super();this.canClose=!0}onEnable(){this.btn_refresh.on(Laya.Event.CLICK,this,this.onRefresh),this.alertDesc.on(Laya.Event.LINK,this,this.onLink)}onLink(e){console.log("点击了超链接："+e)}onRefresh(){_e.instance.reload()}setOpenData(e){if(e){var i=e[0];if(e.length>2?(this.alertTitle.text=e[1],this.alertDesc.text=e[2]):this.alertDesc.text=e[1],i==1){this.canClose=!1;var r=this.getChildByName("close");r.visible=!1,this.btn_refresh.visible=!0}else this.btn_refresh.visible=!1}}onDisable(){}close(e){this.canClose&&super.close(e)}};Od=m([iI("iB7UvqEcQ1GFKaVEIy6Bmw")],Od);var Hd=class extends Laya.Box{};var{regClass:aI}=Laya,Ud=class extends Hd{};Ud=m([aI("ON5bkSuKSE2gwPDUnRGmrw")],Ud);var Vd=class extends Laya.Box{};var{regClass:rI}=Laya,Gd=class extends Vd{onEnable(){}notice(t){let e=t;this.label_tf.text=e,this.label_tf.x=68,this.image_bg.width=68*2+this.label_tf.textField.textWidth,e.length/45>1&&(this.image_bg.height=this.label_tf.textField.textHeight+25),this.alpha=1,this.visible=!0}get view(){return this}get width(){return this.image_bg.width}onDisable(){console.log("txtNotice recover"),Laya.Pool.recover("txtNotice",this)}};Gd=m([rI("Nm27xWbYSG6mj-EXqPOZ_A")],Gd);var zd=class extends Laya.Box{};var{regClass:nI}=Laya,Fd=class extends zd{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){if(!t)return;super.dataSource=t;let e=t.id===I.instance.playerDto.pid,i=t.rank;this.tf_name.text=t.name;let r=j.intance.m_dicUnions.get(t.unionId);if(r?this.tf_union.text=f.instance.getLanguage(r.name):this.tf_union.text="null",this.tf_rank.text=i,this.tf_score.text=t.score,this.playerIcon.headSkin=t.head,this.img_flag.skin=M.instance.getCountryIcon(t.country),t.unionId){let n=M.instance.getUnionIcon(t.unionId);this.img_lvIcon.skin=n,this.img_lvIcon.visible=!0}else this.img_lvIcon.visible=!1;e?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.bg.skin=i<4?`res/rank/img_guild_${i}di.png`:"res/rank/img_guild_4di.png",i<4?(this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${i}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.img_rankIcon2.skin=e?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1)}};Fd=m([nI("-msKQoZIRI6E80e53qttmw")],Fd);var jd=class extends Laya.Scene{};var{regClass:oI}=Laya,qd=class extends jd{constructor(){super(...arguments);this.myIndex=-1;this.myUnionIndex=-1;this.unionRankData=null;this.currTab=0}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){this.onClickPlayer()}onEnable(){this.rankLanList.visible=!1,this.myBox.visible=!1,this.myUnionBox.visible=!1,this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_4.on(Laya.Event.CLICK,this,this.onClickTab,[4]),this.btn_5.on(Laya.Event.CLICK,this,this.onClickTab,[5]),this.btn_player.on(Laya.Event.CLICK,this,this.onClickPlayer),this.btn_guild.on(Laya.Event.CLICK,this,this.onClickGuild),this.btn_schol.on(Laya.Event.CLICK,this,this.onClickSchol)}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_2.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_3.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_4.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_5.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_player.off(Laya.Event.CLICK,this,this.onClickPlayer),this.btn_guild.off(Laya.Event.CLICK,this,this.onClickGuild),this.btn_schol.off(Laya.Event.CLICK,this,this.onClickSchol),this.rankLanList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.unionRankLanList.scrollBar.off(Laya.Event.CHANGE,this,this.onUnionScrollBarChange)}onClickTab(e){if(this.currTab===e)return;let i={1:"combat scenes",2:"kill count",3:"number of heroes",4:"damage ranking",5:"wealth ranking"};e in i?(this.setTab(e),this.setListData(e),this.rankName.text=i[e]):console.warn(`Tab index ${e} does not have a corresponding name.`)}setTab(e){for(let i=1;i<6;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}async setListData(e){let i=await F.requestPost("wxgame/sys/rank",{type:e});i?(this.updateSelfData(i.self),this.updateRankList(i.rankList)):(console.error("Error fetching data:",i),te.instance.notice(f.instance.getLanguage(135)))}async setGuildListData(){this.unionRankData||(this.unionRankData=await F.requestPost("wxgame/sys/unionRank",{}));let e=[];if(this.unionRankData){let i=this.unionRankData.rankList,r=this.unionRankData.self;if(r&&this.updateSelfUnionData(r),this.unionRankLanList.scrollTo(0),this.unionRankLanList.visible=!0,this.myUnionBox.visible=!0,this.unionRankLanList.selectedIndex=1,i.forEach(n=>{let o=j.intance.m_dicUnions.get(n.id);o&&(o.rank=n.rank,o.score=n.score,r&&r.id&&(o.myUnion=n.id===r.id),e.push(o))}),this.unionRankLanList.array=e,this.myUnionBox.visible=!!r,r){let n=e.findIndex(o=>o.id===r.id);this.myUnionIndex=n}}else console.error(`Error fetching data: ${this.unionRankData}`),te.instance.notice(f.instance.getLanguage(135))}updateSelfData(e){if(!e)return;this.tf_name.text=e.name;let i=j.intance.m_dicUnions.get(e.unionId);if(i?this.tf_union.text=f.instance.getLanguage(i.name):this.tf_union.text="null",this.tf_score.text=`${e.score}`,this.playerIcon.headSkin=e.head,this.img_flag.skin=M.instance.getCountryIcon(e.country),e.unionId){let r=M.instance.getUnionIcon(e.unionId);this.img_lvIcon.skin=r,this.img_lvIcon.visible=!0}else this.img_lvIcon.visible=!1;if(e.rank<0)this.img_rankIcon1.visible=!1,this.tf_rank.text=f.instance.getLanguage(1117),this.img_rankIcon2.visible=!1;else if(e.rank<4)this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${e.rank}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1;else{let r=e.pid===I.instance.playerDto.pid?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png";this.img_rankIcon2.skin=r,this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1,this.tf_rank.text=`${e.rank}`}}updateSelfUnionData(e){if(!e)return;let i=j.intance.m_dicUnions.get(e.id);if(i&&(this.union_name.text=f.instance.getLanguage(i.name),this.unionIcon.dataSource=i),this.union_score.text=e.score,e.rank<0)this.img_unionIcon1.visible=!1,this.union_rank.text=f.instance.getLanguage(1117),this.img_unionIcon2.visible=!1;else if(e.rank<4)this.img_unionIcon1.skin=`res/matchRank1/img_ranking_${e.rank}.png`,this.img_unionIcon1.visible=!0,this.img_unionIcon2.visible=!1;else{let r="res/matchRank1/img_ranking_ranking_me.png";this.img_unionIcon2.skin=r,this.img_unionIcon2.visible=!0,this.img_unionIcon1.visible=!1,this.union_rank.text=`${e.rank}`}}updateRankList(e){if(e){let i=e.findIndex(r=>r.pid===I.instance.playerDto.pid);this.rankLanList.selectedIndex=1,this.rankLanList.array=e,this.myIndex=i,this.rankLanList.scrollTo(0),this.rankLanList.visible=!0,this.myBox.visible=!0}}onScrollBarChange(){if(!this.rankLanList.array||!this.myIndex&&this.myIndex!==0)return;let e=this.rankLanList.startIndex,i=e+this.rankLanList.repeatX*this.rankLanList.repeatY-1,r=this.rankLanList.getCell(this.myIndex);if(r)if(this.myIndex>=e&&this.myIndex<=i){let s=r.localToGlobal(new Laya.Point(0,0)).y-this.myBox.height-57;s=Math.max(57,Math.min(493,s)),this.myBox.y=s}else this.myBox.y=this.myIndex>i?493:57}onUnionScrollBarChange(){if(!this.unionRankLanList.array||!this.myUnionIndex&&this.myUnionIndex!==0)return;let e=this.unionRankLanList.startIndex,i=e+this.unionRankLanList.repeatX*this.unionRankLanList.repeatY-1,r=this.unionRankLanList.getCell(this.myUnionIndex);if(r)if(this.myUnionIndex>=e&&this.myUnionIndex<=i){let s=r.localToGlobal(new Laya.Point(0,0)).y-this.myUnionBox.height-57;s=Math.max(57,Math.min(499,s)),this.myUnionBox.y=s}else this.myUnionBox.y=this.myUnionIndex>i?499:57}setTabState(e,i,r,n){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?r:n}onClickPlayer(){this.onClickTab(1),this.playerRankBox.visible=!0,this.unionBox.visible=!1,this.setTabState(this.btn_player,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!1,"#143f6b","#7ff1fe")}onClickGuild(){this.playerRankBox.visible=!1,this.unionBox.visible=!0,this.setTabState(this.btn_player,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!1,"#143f6b","#7ff1fe"),this.setGuildListData()}onClickSchol(){this.playerRankBox.visible=!1,this.unionBox.visible=!1,this.setTabState(this.btn_player,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!0,"#143f6b","#7ff1fe")}};qd=m([oI("5_oIkEKDQUyqTP8xY9zMUw")],qd);var Wd=class extends Laya.Box{};var{regClass:sI}=Laya,Kd=class extends Wd{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){if(!t)return;let e=t.id===I.instance.playerDto.pid,i=t.rank;this.unionIcon.dataSource=t,this.tf_union.text=f.instance.getLanguage(t.name),this.tf_rank.text=i,this.tf_score.text=t.score,e?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.bg.skin=i<4?`res/rank/img_guild_${i}di.png`:"res/rank/img_guild_4di.png",i<4?(this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${i}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.img_rankIcon2.skin=e?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1)}};Kd=m([sI("O6o6TJNORIGW9WXbhJf91w")],Kd);var Yd=class extends Laya.Box{};var{regClass:lI,property:Lre}=Laya,$d=class extends Yd{constructor(){super();this.isAddEvent=!1}set dataSource(e){if(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=M.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}}async setCurrentOutPut(){this.img_back.skin=M.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=M.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=at.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";st.instance.setStar(this,e),this.box_show.visible=!0,this.destroyed}onChange(e){e?this.selectBox.visible=!0:this.selectBox.visible=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}toDetail(){this.heroVo.id&&O.intance.openModule(h.HeroDetailDialog,this.heroVo)}};$d=m([lI("DixYspEIQnqQazhlHuxLDw")],$d);var Xd=class extends Laya.Dialog{};var{regClass:cI}=Laya,Qd=class extends Xd{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER;this.beforeYearIndex=null;this.beforeMonthIndex=null;this.beforeDayIndex=null;this.dateOpenState=0;this.itemVo=null;this.currentDate=new Date;this.startDate={year:0,month:0,day:0};this.endDate={year:0,month:0,day:0};this.heroVo=null}onEnable(){this.box_date.on(Laya.Event.CLICK,this,this.onOpenDate,[this.img_date_pad,this.box_date]),this.box_date2.on(Laya.Event.CLICK,this,this.onOpenDate,[this.img_date_pad,this.box_date2]),this.yearList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.yearList,"year"]),this.monthList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.monthList,"month"]),this.dayList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.dayList,"day"]),this.yearList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.yearList,"year"]),this.monthList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.monthList,"month"]),this.dayList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.dayList,"day"]),this.tf_uid.on(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),L.intance.on(v.CHANGE_WALLET_HERO,this,this.onHeroChange),L.intance.on(v.CHANGE_WALLET_PROP,this,this.onPropChange),this.hero_box.on(Laya.Event.CLICK,this,this.onHeroBoxClick),this.Img_prop.on(Laya.Event.CLICK,this,this.onPropClick),this.btn_createSubWallet.on(Laya.Event.CLICK,this,this.onCreateSubWallet),this.yearList.scrollBar.rollRatio=0,this.monthList.scrollBar.rollRatio=0,this.dayList.scrollBar.rollRatio=0;let e=new Date;this.startDate={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()},this.endDate={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()},this.refreshStartTime(1),this.refreshStartTime(2),this.showHeroData(),this.initDiciList(),this.box_dividends.on(Laya.Event.CLICK,this,this.onOpeDividends)}onDisable(){this.removeEvent()}removeEvent(){this.box_date.off(Laya.Event.CLICK,this,this.onOpenDate),this.box_date2.off(Laya.Event.CLICK,this,this.onOpenDate),this.yearList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.monthList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.dayList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.yearList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.monthList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.dayList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.tf_uid.off(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.off(Laya.Event.FOCUS,this,this.uidFocus),L.intance.off(v.CHANGE_WALLET_HERO,this,this.onHeroChange),L.intance.off(v.CHANGE_WALLET_PROP,this,this.onPropChange),this.hero_box.off(Laya.Event.CLICK,this,this.onHeroBoxClick),this.Img_prop.off(Laya.Event.CLICK,this,this.onPropClick),this.btn_createSubWallet.off(Laya.Event.CLICK,this,this.onCreateSubWallet),this.box_dividends.off(Laya.Event.CLICK,this,this.onOpeDividends)}resetColors(){for(var e=0;e<this.yearList.cells.length;e++){var i=this.yearList.cells[e];i.tf_date.color="#357cc0"}for(var e=0;e<this.monthList.cells.length;e++){var i=this.monthList.cells[e];i.tf_date.color="#357cc0"}for(var e=0;e<this.dayList.cells.length;e++){var i=this.dayList.cells[e];i.tf_date.color="#357cc0"}}onOpenDate(e,i){this.resetColors(),this.onHideDivi(),e.visible==!1?(i==this.box_date?(e.y=356,this.dateOpenState=1):(e.y=436,this.dateOpenState=2),this.getDateInfo(),e.visible=!0,this.img_bg.on(Laya.Event.CLICK,this,this.hideAllPad)):(e.visible=!1,this.dateOpenState=0)}hideAllPad(){this.img_date_pad.visible=!1,this.img_bg.off(Laya.Event.CLICK,this,this.hideAllPad)}isLeapYear(e){return e%4==0&&e%100!=0||e%400==0}getDaysInMonth(e,i){return i===2?this.isLeapYear(e)?29:28:[4,6,9,11].includes(i)?30:31}getDateInfo(){let e=this.dateOpenState==1?this.startDate:this.endDate;this.fillList(this.yearList,e.year,2e3,2050),this.fillList(this.monthList,e.month,1,12);let i=new Date().getFullYear(),r=new Date().getMonth()+1,n=this.getDaysInMonth(i,r);this.fillList(this.dayList,e.day,1,n)}fillList(e,i,r,n){let o=[];for(let l=r;l<=n;l++)o.push(l.toString());for(let l=1;l<=3;l++)o.push("");o=["",...o],e.array=o;let s=o.indexOf(`${i}`);if(s>-1){e.scrollTo(s-1),e.selectedIndex=s-1;let l=e.getCell(s);l.tf_date.color="#ffffff",e==this.yearList?this.beforeYearIndex=s:e==this.monthList?this.beforeMonthIndex=s:e==this.dayList&&(this.beforeDayIndex=s)}}onYearChange(e){!this.yearList.array||this.monthList.selectedIndex<0||this.updateDayList(parseInt(this.yearList.array[e]),parseInt(this.monthList.array[this.monthList.selectedIndex]))}onMonthChange(e){!this.yearList.array||this.monthList.selectedIndex<0||this.updateDayList(parseInt(this.yearList.array[this.yearList.selectedIndex]),parseInt(this.monthList.array[e]))}updateDayList(e,i){let r=[];for(let n=1;n<=this.getDaysInMonth(e,i);n++)r.push(n.toString());for(let n=1;n<=3;n++)r.push("");r=["",...r],this.dayList.array=r}calculateVisibleHeight(e,i){let r=e.getCell(i);return Math.min(r.y+r.height,e.scrollBar.value+e.height)-Math.max(r.y,e.scrollBar.value)}onListStop(e,i){let r=this.dateOpenState==1?this.startDate:this.endDate,n=Math.floor(e.startIndex),o=n+1,s=this.calculateVisibleHeight(e,n),l=this.calculateVisibleHeight(e,o),c=s+14>=l?n:o;(i==="month"||i==="day")&&(c=Math.min(c,e.array.length-5)),e.scrollTo(c),e.selectedIndex=c;let u=e.getCell(c+1);u.tf_date.color="#ffffff";let p=u.tf_date.text;if(p&&u){switch(i){case"year":this.onYearChange(c+1),r.year=Number(p);break;case"month":this.onMonthChange(c+1),r.month=Number(p);break;default:r.day=Number(p);break}this.refreshStartTime(this.dateOpenState)}}onScrollBarChange(e,i){if(!this.img_date_pad.visible)return;let r=this.dateOpenState==1?this.startDate:this.endDate,n=Math.floor(e.startIndex),o=n+1,s=this.calculateVisibleHeight(e,n),l=this.calculateVisibleHeight(e,o),c=s+14>=l?n:o,u=e.getCell(c+1);u.tf_date.color="#ffffff";let p,b;switch(i){case"year":b=this.beforeYearIndex,this.beforeYearIndex=c+1;break;case"month":b=this.beforeMonthIndex,this.beforeMonthIndex=c+1;break;case"day":b=this.beforeDayIndex,this.beforeDayIndex=c+1;break}b!==c+1&&(p=e.getCell(b),this.resetListStyle(p));let x=u.tf_date.text;if(u.tf_date.color="#ffffff",x&&u){switch(i){case"year":this.onYearChange(c+1),r.year=Number(x);break;case"month":this.onMonthChange(c+1),r.month=Number(x);break;default:r.day=Number(x);break}this.refreshStartTime(this.dateOpenState)}}async setPlayerName(){try{if(this.tf_uid.text=="")return;var e=await F.requestPost("wxgame/sys/queryName",{openid:this.tf_uid.text.toLowerCase()});e&&(console.log(e),this.tf_player_name.text=e.name)}catch{console.log("未找到该玩家，请核对地址")}}uidFocus(){this.tf_uid.text="",this.tf_player_name.text=""}resetListStyle(e){e&&(e.tf_date.color="#357cc0")}refreshStartTime(e){let i=e==1?this.startDate:this.endDate,r=e==1?this.tf_start:this.tf_start2,n=i.month>=10?i.month:`0${i.month}`,o=i.day>=10?i.day:`0${i.day}`;r.text=`${i.year}-${n}-${o}`}onHeroBoxClick(){O.intance.openModule(h.WalletChooseHeroDialog)}onPropClick(){O.intance.openModule(h.WalletChoosePropsDialog)}async onCreateSubWallet(){if(wt.instance.inMinWaiting){te.instance.notice(f.instance.getLanguage(1187));return}let e=Number(this.tf_have.text);if(this.tf_uid.text==Y.instance.walletAddress){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1162),z.YES),this.tf_uid.text="",this.tf_player_name.text="";return}if(e<1){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1166),z.YES);return}let i=this.tf_uid.text;if(i.length<=0||this.tf_player_name.text==""){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1161),z.YES);return}if(!this.heroVo){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1167),z.YES);return}let r=this.itemVo.m_iId;if(r==1001&&this.heroVo.heroItem.level!==3){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1163),z.YES);return}let n=Qe.dateStringToTimestamp(this.tf_start.text),o=Qe.dateStringToTimestamp(this.tf_start2.text),s=Qe.getCurrentDayTimestamp();if(n<s){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1164),z.YES);return}if(o<=n){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1165),z.YES);return}let l=Number(this.tf_div.text.replace("%","")),c=this.heroVo.pk;var u={startTime:n,endTime:o,ticketId:r,ticketCount:e,ratio:l,heroPk:c,openid:i.toLowerCase()};try{var p=await F.requestPost("wxgame/lease/create",u);p&&(te.instance.notice(f.instance.getLanguage(1168)),this.close(),this.heroVo.pk==I.instance.playerDto.fightHeroPk&&(I.instance.playerDto.fightHeroPk=""),Laya.timer.once(200,this,()=>{L.intance.event(v.CREATE_SUB_WALLET_SUCCESS)}))}catch(b){console.log("创建子钱包报错=====》",b)}}showHeroData(){if(this.heroVo){this.img_back.skin=M.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=M.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=at.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";st.instance.setStar(this,e),this.box_show.visible=!0,this.img_back.visible=!0,this.img_noHero.visible=!1}else this.box_show.visible=!1,this.img_back.visible=!1,this.img_noHero.visible=!0}initDiciList(){var e=j.intance.getGeneralValueById(9);this.list_divi.array=e,this.list_divi.selectHandler=new Laya.Handler(this,this.handleSelectDiv),this.list_divi.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_divi.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_divi.scrollBar&&this.list_divi.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown),this.list_divi.selectedIndex=0}handleSelectDiv(e){if(e!=-1){let i=this.list_divi.selectedItem;this.tf_div.text=`${i}%`}}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_divi.selectedIndex=i,this.onHideDivi())}onCountryItemRender(e,i){e.onChange(this.list_divi.selectedIndex==i)}onOpeDividends(){this.img_divi_pad.visible=!0,this.img_bg.once(Laya.Event.MOUSE_DOWN,this,this.onHideDivi)}onHideDivi(){this.img_divi_pad.visible=!1,this.img_bg.off(Laya.Event.MOUSE_DOWN,this,this.onHideDivi)}onScrollBarDown(e){e.stopPropagation()}onHeroChange(e){this.heroVo=e,this.showHeroData()}onPropChange(e,i){this.itemVo=e;let r=j.intance.m_dicItems.get(e.itemItem.id.toString());this.PropBox.visible=!0,r&&(this.img_prop_icon.skin=M.instance.getItemIcon(r.icon),this.img_prop_box.skin="gameIcon/items/itemBg/img_"+r.quality+".png",this.tf_all.text=""+Te.formatNumber(e._m_iNum,2),this.tf_have.text=""+Te.formatNumber(i,2))}};Qd=m([cI("_bHe6-EiQc-KiQ-mElnEIQ")],Qd);var Zd=class extends Laya.ComboBox{};var{regClass:uI}=Laya,Jd=class extends Zd{set defaultLabel(t){}onEnable(){this.getDateInfo()}set dataSource(t){super.dataSource=t;var e=t}set isOpen(t){console.log("isOpen: "+t),this._isOpen!=t&&(this._isOpen=t,this._isOpen?this.img_pad.visible=!0:this.img_pad.visible=!1)}};Jd=m([uI("A2yeugt8S3Ot7ec482gdhQ")],Jd);var eh=class extends Laya.Box{};var{regClass:pI}=Laya,th=class extends eh{set dataSource(e){super.dataSource=e,this.tf_date.text=e}onDisable(){}};th=m([pI("fCHaQKFSQ-ew26uygUCKnQ")],th);var ih=class extends Laya.Box{};var{regClass:mI}=Laya,ah=class extends ih{set dataSource(e){super.dataSource=e,this.tf_rate.text=`${e}%`}onChange(e){e?(this.selectImg.visible=!0,this.tf_rate.color="#ffffff"):(this.tf_rate.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};ah=m([mI("TToplFpGQGmUqT5SfNnVIg")],ah);var rh=class extends Laya.Dialog{};var{regClass:dI}=Laya,nh=class extends rh{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.employList.visible=!1,this.btn_back.on(Laya.Event.CLICK,this,this.closeEmployView)}async setOpenData(e){this.employList.vScrollBarSkin="";let i=e.heroData,r="";if(i){let n=Qe.getYearMonthDat(i.startTime),o=Qe.getYearMonthDat(i.endTime);var e=await F.requestPost("wxgame/lease/heroInfo",{heroPk:i.heroPk});if(e&&e.info){let l=j.intance.m_dicShops.values,c=Re.getTitleByGoodsId(l,e.info.ticketId);c&&(r=f.instance.getLanguage(c)),console.log(c),console.log(e);let u="",p=e.info.allTicketCount,b=e.info.remainTicketCount,x=p-b;x<=0?u="0%":u=`${Math.round(e.info.winTimes/x*100)}%`;let _={"Proxy player":i.playerName,Arena:r,"Remaining ticket":[i.remainCount,e.info.ticketId],"Combat scene":`${x}`,"Winner probability":`${u}`,Deserter:`${e.info.taopao}`,"Start date":n,"End date":o},C=Object.getOwnPropertyNames(_).map(Z=>[Z,_[Z]]);this.employList.array=C;let A=-1;this.employList.selectedIndex=A,this.employList.visible=!0;let H=I.instance.m_heroData.heroVoDic.get(i.heroPk);if(this.img_back.skin=M.instance.getHeroBackIcon(H.heroItem.quality),this.img_front.skin=M.instance.getHeroFrontIcon(H.heroItem.quality),this.img_hero.skin=H.simgurl,this.tf_name.text=at.shortHeroStr(H.name),i.reward&&i.reward.length>0){let Z=Re.findFirstTypeAndNotGold(i.reward);Z?(this.tf_score.text=Z.count,this.img_money.skin=M.instance.getMoneyIcon(Z.id),this.img_money.visible=!0):(this.tf_score.text="0",this.img_money.visible=!1)}else this.tf_score.text="0",this.img_money.visible=!1;let G=H.heroItem.level+"";st.instance.setStar(this,G)}}}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.closeEmployView)}closeEmployView(){this.close()}};nh=m([dI("4pjAWg8HScmRe8ukNRQsGg")],nh);var oh=class extends Laya.Box{};var{regClass:hI}=Laya,sh=class extends oh{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){super.dataSource=t,this.setEmploy(t)}setEmploy(t){if(!t)return;let e=t[0],i=t[1];this.item_name.text=e,e!=="Remaining ticket"&&e!=="Received"&&e!=="Bonus"&&(this.moneyImg.visible=!1),e==="Agent Date"||e==="End Date"?this.item_value.text=Qe.formatTimeStamp(Number(i),"YY-MT-DD"):e=="Remaining ticket"?(this.item_value.text=i[0],this.moneyImg.skin=`gameIcon/items/item/img_${i[1]}.png`):this.item_value.text=i}};sh=m([hI("TAG-i7slRsKkXRu8SsaWHg")],sh);var lh=class extends Laya.Box{};var{regClass:fI,property:Ane}=Laya,ch=class extends lh{constructor(){super();this.isAddEvent=!1}set dataSource(e){if(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=M.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}}async setCurrentOutPut(){this.img_back.skin=M.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=M.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=at.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";st.instance.setStar(this,e),this.box_show.visible=!0,this.heroVo.state==1?(this.img_state.skin="gameIcon/hero/heroDetail/img_hero_state_2.png",this.img_state.visible=!0):this.heroVo.state==2?(this.img_state.skin="gameIcon/hero/heroDetail/img_hero_state_3.png",this.img_state.visible=!0):this.img_state.visible=!1}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}onDisable(){this.off(Laya.Event.CLICK,this,this.toDetail)}toDetail(){this.heroVo.id&&O.intance.openModule(h.HeroDetailDialog,this.heroVo)}};ch=m([fI("vJhsY0hvQjyUXjU0-8xV7g")],ch);var uh=class extends Laya.Box{};var{regClass:bI}=Laya,ph=class extends uh{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,e&&(this.img_coin.skin=M.instance.getMoneyIcon(e.id),this.money_value.text=e.count,this.addEvent())}};ph=m([bI("TjAZ1yG-QkG5fetB03VUuA")],ph);var mh=class extends Laya.Scene{};var{regClass:yI,property:Qne}=Laya,dh=class extends mh{constructor(){super(...arguments);this.text=""}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onEnable(){this.list_hero.vScrollBarSkin="",this.RentalList.visible=!1,this.RevenueList.visible=!1,this.subWalletList.visible=!1,this.btn_sch.on(Laya.Event.CLICK,this,this.onClickSch),this.btn_jia.on(Laya.Event.CLICK,this,this.onClickJia),this.btn_yi.on(Laya.Event.CLICK,this,this.onClickYi),L.intance.on(v.CREATE_SUB_WALLET_SUCCESS,this,this.createSubWalletSuccess),this.btn_subwallet.on(Laya.Event.CLICK,this,this.onClickSubwallet),this.btn_createSubWallet.on(Laya.Event.CLICK,this,this.onClickCreateSubwallet),this.close&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.onClickSch(),this.initHeroData()}async setMoneyData(){let e=await F.requestPost("wxgame/lease/outline",{});if(e&&e.reward){let i=Re.processItemsArray(e.reward)[0];this.RentalList.array=i,this.RentalList.visible=!0}if(e&&e.childReward){let i=Re.processItemsArray(e.childReward)[0];this.RevenueList.array=i,this.RevenueList.visible=!0}}initContainer(e){this.list_hero.visible=!1,this.list_hero.vScrollBarSkin="",this.createHeadList(e)}async createHeadList(e){if(!this)return;let i=e;if(i){this.list_hero.selectedIndex=1,this.list_hero.array=i,this.list_hero.visible=!0;let r=-1;this.list_hero.selectedIndex=r}(!i||i.length<=0)&&(this.noDataBox.visible=!0)}async initHeroData(){await qe.instance.ownerHero(!0)}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}setTabState(e,i,r,n){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?r:n}onClickSch(){this.box_1.visible=!0,this.list_hero.visible=!1,this.subWalletBox.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_sch,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe"),this.setMoneyData()}async onClickJia(){await qe.instance.ownerHero(),this.box_1.visible=!1,this.list_hero.visible=!0,this.subWalletBox.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_jia,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe");let e=I.instance.m_heroData.heroVoDic.values,i=Re.filterObjectsByState(e,1);this.initContainer(i)}async onClickYi(){await qe.instance.ownerHero(),this.box_1.visible=!1,this.list_hero.visible=!0,this.subWalletBox.visible=!1,this.noDataBox.visible=!1;let e=I.instance.m_heroData.heroVoDic.values,i=Re.filterObjectsByState(e,2);this.initContainer(i),this.setTabState(this.btn_yi,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe")}async onClickSubwallet(){this.box_1.visible=!1,this.list_hero.visible=!1,this.subWalletBox.visible=!0,this.noDataBox.visible=!1,this.setTabState(this.btn_subwallet,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe");var e=await F.requestPost("wxgame/lease/list",{});if(e){let i=e.list;for(let r=0;r<i.length;r++)i[r].rank=r+1;if(i){this.subWalletList.selectedIndex=1,this.subWalletList.array=i,this.subWalletList.visible=!0;let r=-1;this.subWalletList.selectedIndex=r}(!i||i.length<=0)&&(this.noDataBox.visible=!0)}}createSubWalletSuccess(){Laya.timer.once(800,this,this.onClickSubwallet)}onClickCreateSubwallet(){O.intance.openModule(h.CreateSubWalletDialog)}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene),this.btn_sch.off(Laya.Event.CLICK,this,this.onClickSch),this.btn_jia.off(Laya.Event.CLICK,this,this.onClickJia),this.btn_yi.off(Laya.Event.CLICK,this,this.onClickYi),this.btn_subwallet.off(Laya.Event.CLICK,this,this.onClickSubwallet),this.btn_createSubWallet.off(Laya.Event.CLICK,this,this.onClickCreateSubwallet)}};dh=m([yI("eB5n1zn1RD2i2F-bAki-sQ")],dh);var hh=class extends Laya.Box{};var{regClass:gI}=Laya,fh=class extends hh{constructor(){super();this.isAddEvent=!1;this.heroPk=null}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,!e)return;let{rank:i,heroPk:r,ticketId:n,playerName:o,remainCount:s,reward:l}=e;this.tf_rank.text=i,this.heroPk=r;let c=j.intance.m_dicShops.values,u=Re.getTitleByGoodsId(c,n);if(u&&(this.tf_arena.text=f.instance.getLanguage(u)),this.tf_name.text=o,this.tf_venue.text=s,this.btn_detail.off(Laya.Event.CLICK,this,this.onClickDetail),this.btn_detail.on(Laya.Event.CLICK,this,this.onClickDetail,[e]),this.addEvent(),l&&l.length>0){let p=Re.findFirstTypeAndNotGold(l);p&&(this.tf_score.text=p.count,this.img_money.skin=M.instance.getMoneyIcon(p.id),this.img_money.visible=!0)}else this.tf_score.text="0",this.img_money.visible=!1}onClickDetail(e){this.heroPk,O.intance.openModule(h.EmployInfoDialog,{heroData:e})}onDisable(){this.btn_detail.off(Laya.Event.CLICK,this,this.onClickDetail)}};fh=m([gI("5iGLLzQkR8mqhVsrdybXCQ")],fh);var bh=class extends Laya.Dialog{};var{regClass:vI}=Laya,yh=class extends bh{constructor(e){super();this.heroList=[]}onEnable(){this.list_hero.visible=!1,this.createHeadList(),this.btn_transfer.on(Laya.Event.CLICK,this,this.onBtnTramsfer)}onBtnTramsfer(){let e=this.list_hero.selectedIndex;if(e<0){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1167),z.YES);return}let i=this.heroList[e];L.intance.event(v.CHANGE_WALLET_HERO,i),console.log("onBtnTramsfer",e),this.close()}async createHeadList(){if(!this)return;await qe.instance.ownerHero();let e=I.instance.m_heroData.heroVoDic.values;if(this.heroList=Re.filterObjectsByState(e,0),this.heroList){this.list_hero.selectedIndex=1,this.list_hero.array=this.heroList,this.list_hero.visible=!0;let i=-1;this.list_hero.selectedIndex=i}}onDisable(){this.btn_transfer.off(Laya.Event.CLICK,this,this.onBtnTramsfer)}};yh=m([vI("8aIFsnkXTaWPXwTKHxCGpQ")],yh);var gh=class extends Laya.Dialog{};var{regClass:LI}=Laya,vh=class extends gh{constructor(e){super();this.propValue=1;this.propNum=1;this.propData=null;this.items=[]}onEnable(){this.txt_num.text="1",this.listPanel1.visible=!1,this.btn_subtract.on(Laya.Event.CLICK,this,this.changePropNum,[!1]),this.btn_add.on(Laya.Event.CLICK,this,this.changePropNum,[!0]),this.listPanel1.selectHandler=new Laya.Handler(this,this.handleSelectProp),this.btn_transfer.on(Laya.Event.CLICK,this,this.onBtnTramsfer),this.initPropList()}changePropNum(e){e?this.propValue=Math.min(this.propValue+1,this.propNum):this.propValue=Math.max(this.propValue-1,1),this.txt_num.text=`${this.propValue}`}async initPropList(){await qe.instance.ownerBag();var e=this.getItemByType();console.log(e),this.propData=e,this.listPanel1.array=e,this.listPanel1.selectedIndex=0,this.listPanel1.visible=!0}handleSelectProp(e){if(e!==-1){this.propValue=1,this.txt_num.text="1";let i=this.listPanel1.selectedItem;i&&(this.propNum=Number(i._m_iNum),console.log(this.propNum))}}onBtnTramsfer(){let e=this.propData[this.listPanel1.selectedIndex],i=this.propValue;if(i<=0||!e){Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(1166),z.YES);return}L.intance.event(v.CHANGE_WALLET_PROP,[e,i]),this.close()}getItemByType(){this.items=[];for(var e=I.instance.m_packageData.getBackByType(It.TYPE_Consumption),i=0;i<e.length;i++){var r=e[i];r&&r.itemItem.id>=1001&&r.itemItem.id<=1009&&this.items.push(r)}return this.items}onDisable(){this.btn_subtract.off(Laya.Event.CLICK,this,this.changePropNum),this.btn_add.off(Laya.Event.CLICK,this,this.changePropNum),this.btn_transfer.off(Laya.Event.CLICK,this,this.onBtnTramsfer)}};vh=m([LI("WY66k0UbQfiwaG80emIzjA")],vh);var Lh=class extends Laya.Box{};var{regClass:_I}=Laya,_h=class extends Lh{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.addEvent(),this.setCurrentOutPut(e)}async setCurrentOutPut(e){if(e){let i=j.intance.m_dicItems.get(e.ticketId.toString());this.txt_num.text=""+Te.formatNumber(e.ticketCount,8),this.img_icon.skin=M.instance.getItemIcon(i.icon),this.img_box.skin="gameIcon/items/itemBg/img_"+i.quality+".png"}else this.txt_num.text="",this.img_icon.skin=null,this.img_box.skin="gameIcon/items/itemBg/img_0.png"}};_h=m([_I("QLIqcx2YSRWf6b4T0P4N6Q")],_h);var wh=class extends Laya.Box{};var{regClass:wI}=Laya,xh=class extends wh{set dataSource(e){super.dataSource=e,e&&(this.tf_data.text=e)}onDisable(){}onChange(e){e?(this.selectImg.visible=!0,this.tf_data.color="#ffffff"):(this.tf_data.color="#357cc0",this.selectImg.visible=!1)}};xh=m([wI("3viWNkWoRRS9EWM3SzguDg")],xh);var Ih=class extends Laya.Box{};var{regClass:xI}=Laya,Eh=class extends Ih{onEnable(){let t=(Laya.stage.width-Q.DESIGN_WIDTH)/2;this.img_coinsBg.right-=t,console.log("dWidth: "+t),this.updateLocalAssets(),L.intance.on(v.ROLE_INFO_CHANGE,this,this.updateLocalAssets),L.intance.on(Bt.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets)}onDisable(){L.intance.off(v.ROLE_INFO_CHANGE,this,this.updateLocalAssets),L.intance.off(Bt.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets)}updateLocalAssets(){this.tf_3001.text=Te.filterNumFormat(I.instance.getConsumeValue(Oe.TYPE_TOX),2),this.tf_3006.text=Te.filterNumFormat(I.instance.getConsumeValue(Oe.TYPE_BTC),8),this.tf_3007.text=Te.filterNumFormat(I.instance.getConsumeValue(Oe.TYPE_ETH),4),this.tf_3004.text=Te.filterNumFormat(I.instance.getConsumeValue(Oe.TYPE_USDT),2),this.tf_3005.text=Te.filterNumFormat(I.instance.getConsumeValue(Oe.TYPE_GOLD),0)}};Eh=m([xI("7P9MlqipSaG6QoKpQowDbQ")],Eh);var Sh=class extends Laya.Box{};var{regClass:II}=Laya,Th=class extends Sh{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.heroVo=e,this.heroVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.heroSk.dataSource=this.heroVo,this.tf_name.text=at.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";st.instance.setStar(this,e)}};Th=m([II("IcuwbMwvRKqMyiXxDzW-dA")],Th);var Ch=class extends Laya.Dialog{};var{regClass:EI}=Laya,kh=class extends Ch{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=R.M_POP;this.m_iPositionType=R.CENTER}onEnable(){this.initContainer(),Ae.instance.playSoundByName(Ae.soundName32)}initContainer(){var e=Ve.instance.getOneItem();e&&this.showItem(e)}showItem(e){let i=this.heroListItem;i.dataSource=e}onDisable(){L.intance.event(v.EVENT_CHECK_REMAIN,h.HeroGetDialog)}};kh=m([EI("mrqJhWahTxuTjeSGIs559Q")],kh);var Ah=class extends Laya.Box{};var{regClass:SI}=Laya,Dh=class extends Ah{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.shopItem=e,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.tf_name.text=f.instance.getLanguage(this.shopItem.title),this.shopItem.cost.length>1?(this.img_const.skin=M.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=Te.formatNumber(this.shopItem.cost[1])+"",this.img_const.visible=!0,this.tf_const.visible=!0,this.disabled=!1):(this.disabled=!0,this.img_const.visible=!1,this.tf_const.visible=!1),this.shopItem.type==1?(this.tf_name.color=La.qualityColors[parseInt(this.shopItem.icon)-1],this.img_bg.skin=M.instance.getHeroQuality(this.shopItem.icon),this.img_icon.skin=M.instance.getHeroEggIcon(this.shopItem.icon)):this.shopItem.type==4&&(this.tf_name.color=La.qualityColors[parseInt(this.shopItem.icon)-1],this.img_bg.skin=M.instance.getHeroQuality(this.shopItem.icon),this.img_icon.skin=M.instance.getChestIcon(this.shopItem.icon))}};Dh=m([SI("awS07ko0RBaxCnxXWqiR4g")],Dh);var Mh=class extends Laya.Box{};var{regClass:TI}=Laya,Ph=class extends Mh{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.shopItem=e,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){if(this.tf_name.text=f.instance.getLanguage(this.shopItem.title),this.img_const.skin=M.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=Te.formatNumber(this.shopItem.cost[1])+"",this.shopItem.type==2){var e=j.intance.m_dicItems.get(this.shopItem.icon);this.img_bg.skin=M.instance.getItemQualityIcon(e.quality+""),this.tf_name.color=La.qualityColors[e.quality-1],this.img_icon.skin=M.instance.getItemIcon(this.shopItem.icon)}}};Ph=m([TI("din69PYeRbSapMB2H6E06g")],Ph);var Bh=class extends Laya.Scene{};var{regClass:CI}=Laya,Rh=class extends Bh{constructor(){super(...arguments);this.currTab=0;this.type=1;this.selectItemId=-1;this.addL=1;this.price=0;this.isSkReady=!1}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){e&&e.length>0&&(this.type=e[0],e[1]!=null&&(this.selectItemId=e[1]),this.onClickTab(this.type))}onEnable(){L.intance.on(v.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),L.intance.on(v.EVENT_END_HEROBUY,this,this.onWaitHeroInfoBack),this.btn_recruit.on(Laya.Event.CLICK,this,this.onRecruit),this.btn_reduce.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_reduce]),this.btn_plus.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_plus]),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,[],!1),this.listPanel2.vScrollBarSkin="",this.listPanel2.selectHandler=Laya.Handler.create(this,this.onSelectItem,[],!1),this.img_sk.on(Laya.Event.PLAYED,this,this.stopAni,[2]),this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-Q.DESIGN_HEIGHT)/2}async onRecruit(){if(this.shopItem.open==0&&Q.Debug==0){te.instance.notice(f.instance.getLanguage(12));return}this.shopItem.type==1?(this.setChou1Ani("animation"+this.shopItem.icon+"_1"),Q.vType>1?await qe.instance.recruit1(this.shopItem.id):await qe.instance.recruit(this.shopItem.id)):await qe.instance.recruitItem(this.shopItem.id,this.addL)}onWaitHeroInfoBack(){this.setChou2Ani("animation"+this.shopItem.icon+"_2"),K.instance.hideLoading()}setTab(e){for(let i=1;i<7;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+"_s.png"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+".png")}async initLuckDrawView(){this.destroyed||(this.type?this.onClickTab(this.type):this.onClickTab(1))}onClickTab(e){if(this.currTab!=e){if(this.setTab(e),this.box_2.visible=!0,e==1){var i=this.getItemByType(1);this.shopItems=i[0],this.listPanel1.array=this.shopItems,this.listPanel1.selectedIndex=-1,this.listPanel1.selectedIndex=i[1],this.listPanel1.visible=!0,this.listPanel2.visible=!1}else if(e==2){var i=this.getItemByType(2);this.shopItems=i[0],this.listPanel2.dataSource=this.shopItems,this.listPanel2.selectedIndex=-1,this.listPanel2.selectedIndex=i[1],this.listPanel2.visible=!0,this.listPanel1.visible=!1}else if(e==3){var i=this.getItemByType(4);this.shopItems=i[0],this.listPanel1.dataSource=this.shopItems,this.listPanel1.selectedIndex=-1,this.listPanel1.selectedIndex=i[1],this.listPanel1.visible=!0,this.listPanel2.visible=!1}}}getItemByType(e){var i=j.intance.m_dicShops.values,r=[],n=-1,o=0;return i.forEach(s=>{s.type==e&&(r.push(s),this.selectItemId!=-1&&s.icon==this.selectItemId&&(n=o,this.selectItemId=-1),o++)}),n==-1&&r.length>0&&(n=0),[r,n]}onSelectItem(e){if(this.shopItem=this.shopItems[e],console.log(this.shopItem),this.shopItem){if(this.tf_name.text=f.instance.getLanguage(this.shopItem.title),this.tf_des.text=f.instance.getLanguage(this.shopItem.des),this.shopItem.cost.length>1)this.img_const.skin=M.instance.getMoneyIcon(this.shopItem.cost[0]),this.addL=1,this.price=Te.formatNumber(this.shopItem.cost[1]);else if(this.shopItem.open==0){te.instance.notice(f.instance.getLanguage(12));return}this.setPriceByNum();var i=this.shopItem.type;i==1?(this.img_icon.visible=!1,this.img_sk.visible=!0,this.setIdleAni("animation"+this.shopItem.icon+"_0"),this.box_count.visible=!1):i==2?(this.img_icon.skin=M.instance.getItemBigIcon(this.shopItem.icon),this.img_icon.y=60,this.img_icon.visible=!0,this.img_sk.visible=!1,this.box_count.visible=!0):i==4&&(this.img_icon.skin=M.instance.getChestBigIcon(this.shopItem.icon),this.img_icon.y=110,this.img_icon.visible=!0,this.img_sk.visible=!1,this.box_count.visible=!1),this.btn_recruit.visible=!0}else this.tf_name.text="",this.tf_des.text="",this.img_icon.visible=!1,this.img_sk.visible=!1,this.box_count.visible=!1,this.btn_recruit.visible=!1}handleClickBtn(e){switch(e){case this.btn_reduce:this.addL>1&&this.addL--,this.setPriceByNum();break;case this.btn_plus:this.addL<100&&this.addL++,this.setPriceByNum();break}}setPriceByNum(){this.tf_num.text=this.addL+"",this.tf_const.text=Te.filterNumFormat(this.addL*this.price,2,!0)}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}stopAni(e){console.log("stopAni: "+e),this.isSkReady||(this.isSkReady=!0,this.callLater(this.stopSk))}stopSk(){this.img_sk.paused(),this.img_sk.stop()}setIdleAni(e){this.isSkReady?(this.img_sk.play(e,!1),this.img_sk.stop()):this.img_sk.animationName=e}setChou1Ani(e){this.isSkReady?this.img_sk.play(e,!0):this.img_sk.animationName=e}setChou2Ani(e){this.isSkReady?this.img_sk.play(e,!1):this.img_sk.animationName=e,Laya.timer.once(800,this,this.openHeroGetView)}openHeroGetView(){Ve.instance.autoPop=!0,Yt.instance.startShow(),this.setIdleAni("animation"+this.shopItem.icon+"_0")}onDrawBack(e){}startAni(){this.img_sk.paused(),this.img_sk.play(0,!1)}removeEvent(){L.intance.off(v.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),L.intance.off(v.EVENT_END_HEROBUY,this,this.onWaitHeroInfoBack)}};Rh=m([CI("IPCUkD5kRse3Gz5tw0Aovw")],Rh);var Nh=class extends Laya.Scene{};var{regClass:kI}=Laya,Oh=class extends Nh{constructor(){super(...arguments);this.currTab=0;this.currUnionId=1}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){this.currUnionId=e,this.initLuckDrawView()}onEnable(){this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_apply.on(Laya.Event.CLICK,this,this.onApply),this.btn_guild_list.on(Laya.Event.CLICK,this,this.onShowGuildList)}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}onApply(){}onShowGuildList(){be.intance.setCurrentScene(re.M_SCENE_UNION)}async initLuckDrawView(){var e=I.instance.playerDto.union,i=await F.requestPost("wxgame/union/info",{unionId:this.currUnionId}),r=i.unionDto;if(r){var n=j.intance.m_dicUnions.get(this.currUnionId);n.unionLv=r.lv,r.memberNum?n.number=r.memberNum:n.number=r.members.length,this.onSetUnionInfo(n),this.list_room.array=r.members}else te.instance.notice(f.instance.getLanguage(135))}onSetUnionInfo(e){e?(this.unionIcon.dataSource=e,this.tf_name.text=f.instance.getLanguage(e.name),this.tf_des.text=f.instance.getLanguage(e.declaration),this.tf_name.text=f.instance.getLanguage(e.name),this.tf_lv.text=f.instance.getUILang("LV.")+e.unionLv,this.tf_num.text="<font color='#25ff63'>"+e.number+"</font>/"+e.maxNumber,this.img_lvIcon.skin="res/union1/img_trade_"+(e.unionLv>3?4:e.unionLv)+".png",this.box_show.visible=!0):this.box_show.visible=!1}removeEvent(){}};Oh=m([kI("KR8HZN1dSv2Bz_62yIgOrg")],Oh);var Hh=class extends Laya.Box{};var{regClass:AI}=Laya,Uh=class extends Hh{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.unionItem=e,this.unionItem&&(this.addEvent(),this.setCurrentOutPut())}set headSkin(e){this.img_head.skin=M.instance.getUnionIcon(e)}async setCurrentOutPut(){if(!this.unionItem)return;let e=this.unionItem.icon;this.img_head.skin=M.instance.getUnionIcon(e)}toDetail(){}};Uh=m([AI("lK37x6YwQ9umJIqReZht4Q")],Uh);var Vh=class extends Laya.Box{};var{regClass:DI}=Laya,Gh=class extends Vh{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_add.on(Laya.Event.CLICK,this,this.onAdd),this.isAddEvent=!0)}async onAdd(){this.unionMemberDto.pid}set dataSource(e){super.dataSource=e,this.unionMemberDto=e,this.unionMemberDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.unionMemberDto.head;this.playerIcon.headSkin=e,this.tf_name.text=this.unionMemberDto.name,this.tf_fightTimes.text=this.unionMemberDto.fightTimes+""}};Gh=m([DI("l73FEB2CRGihzisJBs63MQ")],Gh);var zh=class extends Laya.Box{};var{regClass:MI}=Laya,Fh=class extends zh{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.unionItem=e,this.unionItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.unionIcon.dataSource=this.unionItem,this.tf_name.text=f.instance.getLanguage(this.unionItem.name),this.tf_lv.text=f.instance.getUILang("LV.")+this.unionItem.unionLv,this.tf_num.text="<font color='#25ff63'>"+this.unionItem.number+"</font>/"+this.unionItem.maxNumber,this.img_lvBg.skin="res/union1/img_trade_di_"+(this.unionItem.unionLv>3?4:this.unionItem.unionLv)+".png",this.img_lvIcon.skin="res/union1/img_trade_"+(this.unionItem.unionLv>3?4:this.unionItem.unionLv)+".png"}onChange(e){e?this.bg.skin="res/union1/img_trade_bg_2.png":this.bg.skin="res/union1/img_trade_bg_1.png"}};Fh=m([MI("cbbqawzdSI2g161G69xpUg")],Fh);var jh=class extends Laya.Scene{};var{regClass:PI}=Laya,qh=class extends jh{constructor(){super(...arguments);this.currTab=0;this.type=1;this.items=[]}onAwake(){this.m_iLayerType=R.M_POP,this.m_iPositionType=R.UP}onOpened(e){this.type=e}onEnable(){this.btn_search.on(Laya.Event.CLICK,this,this.onSearch),this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.list_union.vScrollBarSkin="",this.list_union.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.list_union.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1),this.box_show.visible=!1,this.box_list.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-Q.DESIGN_HEIGHT)/2}async initLuckDrawView(){var e=await F.requestPost("wxgame/union/list",{});e?this.unionData=e.unionList:te.instance.notice(f.instance.getLanguage(135)),this.getItemByName(""),this.box_list.visible=!0}getItemByName(e){if(this.list_union.selectedIndex=-1,this.items=[],this.unionData)for(var i=this.unionData.length,r=0;r<i;r++){var n=this.unionData[r],o=j.intance.m_dicUnions.get(n.id),s=f.instance.getLanguage(o.name);at.caseInsensitiveSearchWithRegex(s,e)&&(o.unionLv=n.lv,o.number=n.memberNum,this.items.push(o))}this.list_union.array=this.items,this.items.length>0?this.list_union.selectedIndex=0:this.list_union.selectedIndex=-1}onSearch(){var e=this.input_search.text;this.getItemByName(e)}onJoin(){this.currUnionItem&&(I.instance.playerDto.union>0?be.intance.setCurrentScene(re.M_SCENE_MYUNION,this.currUnionItem.id):Ie.instance().AlertByType(z.BASEALERTVIEW,f.instance.getLanguage(141),z.CANCEL,Laya.Handler.create(this,this.onJoinSure)))}async onJoinSure(){if(this.currUnionItem){var e=await F.requestPost("wxgame/union/join",{unionId:this.currUnionItem.id}),i=e.unionDto;i?(I.instance.playerDto.union=i.id,be.intance.setCurrentScene(re.M_SCENE_MYUNION,i.id),te.instance.notice(f.instance.getLanguage(2e3))):te.instance.notice(f.instance.getLanguage(135))}}onItemRender(e,i){e.onChange(this.list_union.selectedIndex==i)}onSelectItem(e,i){this.currUnionItem=this.items[e],console.log(this.currUnionItem),this.currUnionItem?(this.unionIcon.dataSource=this.currUnionItem,this.tf_name.text=f.instance.getLanguage(this.currUnionItem.name),this.tf_des.text=f.instance.getLanguage(this.currUnionItem.declaration),this.tf_name.text=f.instance.getLanguage(this.currUnionItem.name),this.tf_lv.text=f.instance.getUILang("LV.")+this.currUnionItem.unionLv,this.tf_num.text="<font color='#25ff63'>"+this.currUnionItem.number+"</font>/"+this.currUnionItem.maxNumber,this.img_lvBg.skin="res/union1/img_trade_di_"+(this.currUnionItem.unionLv>3?4:this.currUnionItem.unionLv)+".png",this.img_lvIcon.skin="res/union1/img_trade_"+(this.currUnionItem.unionLv>3?4:this.currUnionItem.unionLv)+".png",I.instance.playerDto.union>0?this.btn_join.label=f.instance.getUILang("Enter"):this.btn_join.label=f.instance.getUILang("Join"),this.box_show.visible=!0):this.box_show.visible=!1}setToMainScene(){be.intance.setCurrentScene(re.M_SCENE_MAIN)}removeEvent(){}};qh=m([PI("VfpfbqXcSQalDIkuosz8Rw")],qh);var{regClass:BI,property:zle}=Laya,tl=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.getComponent(Laya.RigidBody).setVelocity({x:0,y:-10})}onTriggerEnter(t,e,i){this.owner.removeSelf()}onUpdate(){this.owner.y<-10&&this.owner.removeSelf()}onDisable(){Laya.Pool.recover("bullet",this.owner)}};tl=m([BI("hIXP-u9_RfeIwPLhNGNjGw")],tl);var{regClass:RI,property:qle}=Laya,il=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onClick)}onClick(t){Laya.stage.width=1334,Laya.stage.height=750,Laya.stage.scaleMode=Laya.Stage.SCALE_FIXED_WIDTH,Laya.Scene.open("scenes/Index.ls")}onDisable(){this.owner.off(Laya.Event.MOUSE_DOWN,this)}};il=m([RI("DQCudilORvOvMM7hTH8i7w")],il);var{regClass:NI,property:OI}=Laya,_a=class extends Laya.Script{constructor(){super();this.level=1}get itemId(){return this._itemId}set itemId(e){this._itemId=e,this.owner.skin="resources/UI/images/bag/"+e+".png"}onEnable(){this._rig=this.owner.getComponent(Laya.RigidBody),this.level=Math.round(Math.random()*5)+1}onUpdate(){}onCollisionEnter(e){console.log("collision: ",e)}onTriggerEnter(e,i,r){var n=this.owner;if(console.log("owener: ",n),e.label==="buttle"&&n.parent){let o=Laya.Pool.getItemByCreateFun("effect",this.createEffect,this);o.pos(n.x,n.y),n.parent.addChild(o),o.play(0,!0),n.removeSelf(),Laya.SoundManager.playSound("resources/sound/destroy.wav")}}createEffect(){let e=new Laya.Animation;e.loadAnimation("resources/ani/TestAni.ani"),e.on(Laya.Event.COMPLETE,null,i);function i(){e.removeSelf(),Laya.Pool.recover("effect",e)}return e}onDisable(){Laya.Pool.recover("dropBox",this.owner)}};m([OI({type:"number"})],_a.prototype,"level",2),_a=m([NI("3L23NCFLSAieUApqTrVoCQ")],_a);var{regClass:HI,property:Xle}=Laya,Vr=class extends Laya.Script{constructor(){super();this.touchHeroIds=new le;this.touchGlasses=new le;this.updateIndex=0;this.turnSpeed=1;this.turningSpeed=.1;this.lastDirectionAngle=0}onAwake(){}onEnable(){}onCollisionEnter(e){console.log(this.constructor.name+" onCollisionEnter collision",e)}onCollisionStay(e){console.log(this.constructor.name+" onCollisionStay collision",e)}onCollisionExit(e){console.log(this.constructor.name+" onCollisionExit collision",e)}onTriggerEnter(e,i,r){if(e.label==="ground")console.warn("ground in");else if(e.label&&e.label.startsWith("grass"))this.owner.isMe&&(e.owner.alpha=.7,console.warn("grass in"),this.touchGlasses.set(e.label,!0),this.setMyCurrArea());else if(e.label==="item")this.owner.enterItemId=e.owner.getComponent(_a).itemId;else if(e.label==="role"){var n=e.owner.roomPlayerDto.id;if(this.touchHeroIds.set(n,e.owner),this.owner.displacementType==2){var o=N.instance.canAttack(this.owner,e.owner);o&&Laya.Tween.clearAll(this.owner)}}}onTriggerStay(e,i,r){}onTriggerExit(e,i,r){if(e.label==="ground")this.owner.inGround=!1,console.warn("ground exit");else if(e.label&&e.label.startsWith("grass"))this.owner.isMe&&(console.warn("grass out"),e.owner.alpha=1,this.touchGlasses.remove(e.label),this.setMyCurrArea());else if(e.label==="item")this.owner.enterItemId==e.owner.getComponent(_a).itemId&&(this.owner.enterItemId=0);else if(e.label==="role"){var n=e.owner.roomPlayerDto.id;this.touchHeroIds.remove(n)}}setMyCurrArea(){this.touchGlasses.keys.length>0?this.owner.currArea=1:this.owner.currArea=0,this.owner.onSendMoveData()}onUpdate(){if(this.owner.isMe)this.owner._isDead||(N.instance.myHeroSpr.currArea>0?this.owner.alpha=.6:this.owner.alpha=1);else{this.owner._isRealDead?N.instance.myHeroSpr._isDead?this.owner.visible=!1:this.owner.visible=!1:this.owner.currArea>0?N.instance.myHeroSpr.currArea==this.owner.currArea?(this.owner.visible=!0,this.owner.alpha=.6):this.owner.visible=!1:(this.owner.visible=!0,this.owner.alpha=1);return}if(!this.owner.isStop){if(this.owner.speed>0){let e=this.getJoystickDirectionAngle(),i=this.calculateAngleDifference(e,this.lastDirectionAngle);if(Math.abs(i)>10?this.startTurning():this.stopTurning(),this.lastDirectionAngle=e,this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.heroSk.isReady&&this.owner.walk(),this.lastSpeed=this.owner.speed),this.owner.roleDirection>=0){let r=1*this.owner.speed*this.turnSpeed,n=this.owner.roleDirection*(Math.PI/180),o=r*Math.cos(n),s=r*Math.sin(n);this.owner.pos(Math.round(this.owner.x+o),Math.round(this.owner.y+s))}this.owner.inControl&&!this.owner._isDead&&this.touchHeroIds.values.forEach(r=>{var n=N.instance.canTui(this.owner,r);n&&r.beiTui(this.owner.roomPlayerDto.id)})}else this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.idle(),this.lastSpeed=this.owner.speed);this.updateIndex==0&&this.owner.onSendMoveData(),this.updateIndex++,this.updateIndex>0&&(this.updateIndex=0)}}getJoystickDirectionAngle(){return this.owner.roleDirection}calculateAngleDifference(e,i){let r=Math.abs(e-i);return r>180?360-r:r}startTurning(){this.turnSpeed*=this.turningSpeed}stopTurning(){this.turnSpeed=1}onDisable(){}};Vr=m([HI("DknC7B57SZi-09Mz092daQ")],Vr);var{regClass:UI,property:ZL}=Laya,wa=class extends Laya.Script{constructor(){super();this.createBoxInterval=1e3;this._time=0;this._started=!1;this.updateStop=!1}onEnable(){let e=["resources/UI/images/test/b1.png"];Laya.loader.load(e).then(i=>{this._time=Date.now(),this._gameBox=this.owner.getChildByName("gameBox"),Laya.stage.on(Laya.Event.BLUR,this,()=>{this.updateStop=!0}),Laya.stage.on(Laya.Event.FOCUS,this,()=>{this.updateStop=!1}),Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onStageClick)})}onStart(){let e=this.owner.getChildByName("ground").getComponent(Laya.BoxCollider);e.width=Laya.stage.width}onUpdate(){if(this.updateStop)return;let e=Date.now();e-this._time>this.createBoxInterval&&this._started&&(this._time=e,this.createBox())}createBox(){let e=Laya.Pool.getItemByCreateFun("dropBox",this.dropBox.create,this.dropBox);e.pos(Math.random()*(Laya.stage.width-100),-100),this._gameBox.addChild(e)}onStageClick(e){e.stopPropagation();let i=Laya.Pool.getItemByCreateFun("bullet",this.bullet.create,this.bullet);i.pos(Laya.stage.mouseX,Laya.stage.mouseY),this._gameBox.addChild(i)}startGame(){this._started||(this._started=!0,this.enabled=!0)}stopGame(){this._started=!1,this.enabled=!1,this.createBoxInterval=1e3,this._gameBox.removeChildren()}};m([ZL({type:Laya.Prefab})],wa.prototype,"dropBox",2),m([ZL({type:Laya.Prefab})],wa.prototype,"bullet",2),wa=m([UI("5iJgbfCiSn6Rc8upAfHtjA")],wa);var Wh=class extends Laya.Scene{};var{regClass:VI,property:nce}=Laya,Gr=class extends Wh{constructor(){super();Gr.instance=this}onEnable(){this._control=this.getComponent(wa),this.tipLbll.on(Laya.Event.CLICK,this,this.onTipClick)}onTipClick(e){this.tipLbll.visible=!1,this._score=0,this.scoreLbl.text="分数：",this._control.startGame()}addScore(e=1){this._score+=e,this.scoreLbl.text="分数："+this._score,this._control.createBoxInterval>600&&this._score%20==0&&(this._control.createBoxInterval-=20)}stopGame(){this.tipLbll.visible=!0,this.tipLbll.text="游戏结束了，点击屏幕重新开始",this._control.stopGame()}};Gr=m([VI("Y5UkAabiTgWFZQnBL1EpEw")],Gr);var Kh=class extends Laya.Scene{};var{regClass:GI,property:mce}=Laya,al=class extends Kh{constructor(){super()}onOpened(t){t&&(this.msgLab.x=t.point&&t.point.x?t.point.x:Laya.stage.mouseX-50,this.msgLab.y=t.point&&t.point.y?t.point.y:Laya.stage.mouseY-80,this.msgLab.text=t.text,Laya.Tween.to(this.msgLab,{y:this.msgLab.y-100,alpha:0},1e3,Laya.Ease.linearNone))}};al=m([GI("9kGOzpbbSOWSAmN0l9VtfQ")],al);var{regClass:zI,property:Zb}=Laya,rl=Laya.Browser,JL=Laya.Render,e_=Laya.SpriteUtils,vt=class extends Laya.Script{constructor(){super();vt.instance=this}onEnable(){this.videoBtn.on(Laya.Event.MOUSE_DOWN,this,()=>{this.createElementVideo()})}createElementVideo(){rl.window.IframeElementRT=this,this.createScript(),this.createDiv(),this.createIframe("resources/files/video.html?url=layaAir.mp4"),this.setDOMElementInArea(),Laya.stage.on(Laya.Event.RESIZE,this,this.setDOMElementInArea)}setDOMElementInArea(){this.iframeElement!=null&&this.divElement!=null&&(e_.fitDOMElementInArea(this.divElement,this.closeBox,0,0,this.closeBox.width,this.closeBox.height),e_.fitDOMElementInArea(this.iframeElement,this.iframeBox,0,0,this.iframeBox.width,this.iframeBox.height))}createScript(){this.scriptElement=rl.document.createElement("script"),rl.document.body.appendChild(this.scriptElement),this.scriptElement.innerHTML="function closeVideo(){IframeElementRT.closeVideo() }"}createIframe(e){this.iframeElement=rl.createElement("iframe"),rl.document.body.appendChild(this.iframeElement),this.iframeElement.style.zIndex=JL.canvas.style.zIndex+998,this.iframeElement.src=e,this.iframeElement.style.margin="0",this.iframeElement.style.scrolling="no",this.iframeElement.style.frameborder="0",this.iframeElement.style.padding="0",this.iframeElement.style.left="0",this.iframeElement.style.top="0px",this.iframeElement.style.position="absolute"}createDiv(){this.divElement=Laya.Browser.createElement("div"),Laya.Browser.document.body.appendChild(this.divElement),this.divElement.innerHTML="<img src='resources/files/x.png' width='60px' height='60px' onclick='closeVideo()'/>",this.divElement.style.zIndex=JL.canvas.style.zIndex+999}closeVideo(){Laya.Browser.document.body.removeChild(this.scriptElement),Laya.Browser.document.body.removeChild(this.iframeElement),Laya.Browser.document.body.removeChild(this.divElement),this.scriptElement=this.iframeElement=this.divElement=null,Laya.stage.off(Laya.Event.RESIZE,this,this.setDOMElementInArea)}};m([Zb({type:Laya.Button})],vt.prototype,"videoBtn",2),m([Zb({type:Laya.Box})],vt.prototype,"closeBox",2),m([Zb({type:Laya.Box})],vt.prototype,"iframeBox",2),vt=m([zI("ZtMxoJHQTWipjGWyGV51jQ")],vt);var Yh=class extends Laya.Scene{};var{regClass:FI,property:gce}=Laya,nl=class extends Yh{constructor(){super()}onEnable(){Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),this.tabBindViewStack(),this.topTab.selectedIndex=0,this.item0Tab.selectedIndex=0}onClicked(){let t=this.item2Tab.getChildByName("item2"),e=this.item2Tab.getChildByName("item3"),i=this.item2Tab.getChildByName("item4");t.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1)}),e.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenScene.ls",!1)}),i.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/Dialog.ls",!1,{title:"弹窗的标题",text:"弹窗的具体文本……"})})}tabBindViewStack(){this.topTab.selectHandler=new Laya.Handler(this,t=>{this.tabPage.selectedIndex=t,t==1&&(this.item1Tab.selectedIndex=0),t==2&&(this.item2Tab.selectedIndex=0),t==3&&(this.item3Tab.selectedIndex=0),t==4&&(this.item4Tab.selectedIndex=0),Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),vt.instance.iframeElement&&vt.instance.closeVideo(),t==2&&this.item2Page.selectedIndex==1&&!vt.instance.iframeElement&&vt.instance.createElementVideo()}),this.item0Tab.selectHandler=new Laya.Handler(this,t=>{this.item0Page.selectedIndex=t}),this.item1Tab.selectHandler=new Laya.Handler(this,t=>{this.item1Page.selectedIndex=t,t!==4&&Laya.Physics2D.I?Laya.Physics2D.I.enableDebugDraw=!1:t==4&&Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!0)}),this.item2Tab.selectHandler=new Laya.Handler(this,t=>{switch(this.item2Page.selectedIndex=t,t){case 1:!vt.instance.iframeElement&&vt.instance.createElementVideo();break;case 2:Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1);break;case 3:Laya.loader.load("prefab/uiDemo/page/Win.lh").then(e=>{let i=e.create();this.tabPage.parent.addChild(i)});break;case 4:Laya.loader.load("prefab/uiDemo/page/Dialog.lh").then(e=>{e.create().show()});break}t!==1&&vt.instance.iframeElement&&vt.instance.closeVideo()}),this.item3Tab.selectHandler=new Laya.Handler(this,t=>{this.item3Page.selectedIndex=t}),this.item4Tab.selectHandler=new Laya.Handler(this,t=>{this.item4Page.selectedIndex=t})}onDisable(){}};nl=m([FI("gbAKGLFtQ5WL6-NpVocAEA")],nl);var{regClass:jI,property:$h}=Laya,xa=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onAwake(){console.log("创建动画模板"),this.createAniTemplate("moveB"),this.createAniTemplate("moveC"),this.createAniTemplate("moveE"),this.createAniTemplate("moveF"),this.createAniTemplate("moveH"),this.createAniTemplate("moveI"),this.createAniTemplate("moveK"),this.createAniTemplate("moveL"),this.aniSource.play(0,!0,"moveB")}onEnable(){this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.aniSource.play(0,!0,this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.aniSource.play(0,!0,this.selectAni.selectedLabel):this.aniSource.play(0,!1,this.selectAni.selectedLabel)})}createAniTemplate(e,i=8){let r=[];for(let n=0;n<i;n++)r.push("resources/UI/role/atlasAni/139x/"+e+n+".png");Laya.Animation.createFrames(r,e)}onError(e){console.log("加载失败: "+e)}};m([$h({type:Laya.Button})],xa.prototype,"playAni",2),m([$h({type:Laya.Button})],xa.prototype,"stopAni",2),m([$h({type:Laya.ComboBox})],xa.prototype,"selectAni",2),m([$h({type:Laya.Animation})],xa.prototype,"aniSource",2),xa=m([jI("tmkUlMggQi20FZpy6nC1aw")],xa);var{regClass:qI,property:Xh}=Laya,Ia=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onEnable(){this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel),this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.playAnimation(this.selectAni.selectedLabel):this.playAnimation(this.selectAni.selectedLabel,!1)})}playAnimation(e,i=!0,r=7){let n=[];for(let o=0;o<r;o++)n.push("resources/UI/role/frameAni/"+e+o+".png");this.aniSource.loadImages(n).play(0,i)}};m([Xh({type:Laya.Button})],Ia.prototype,"playAni",2),m([Xh({type:Laya.Button})],Ia.prototype,"stopAni",2),m([Xh({type:Laya.ComboBox})],Ia.prototype,"selectAni",2),m([Xh({type:Laya.Animation})],Ia.prototype,"aniSource",2),Ia=m([qI("8gw7FS4iT1q8EhdN3sWklQ")],Ia);var{regClass:WI,property:Tce}=Laya,t_=Laya.Event,KI=Laya.SpineSkeleton,ol=class extends Laya.Script{constructor(){super(...arguments);this.skinArray=["goblin","goblingirl"];this.skinIndex=0;this.spineAniIndex=6}onEnable(){this.createLayaSpine(),this.createSpine()}createLayaSpine(){this.skeletonNode=this.owner.getChildByName("skeletonNode"),Laya.loader.load("resources/UI/role/spineAni/goblins.sk").then(e=>{this.skeletonAni=e.buildArmature(1),this.skeletonNode.addChild(this.skeletonAni),this.skeletonAni.x=128,this.skeletonAni.y=390,this.spineAniNum=this.skeletonAni.getAnimNum(),this.skeletonAni.play(0,!0),this.changeSkin(),this.skeletonNode.on(t_.CLICK,this,this.changeSkin)})}parseComplete(){}createSpine(){this.spineNode=this.owner.getChildByName("spineNode"),Laya.loader.load("resources/UI/role/spineAni/spineboy-pma.skel",Laya.Loader.SPINE).then(e=>{this.spineAni=new KI,this.spineAni.templet=e,this.spineNode.addChild(this.spineAni),this.spineAni.scale(.3,.3),this.spineAni.pos(220,390),this.spineAniNum=this.spineAni.getAnimNum(),this.spineAni.play(this.spineAniIndex,!0),this.spineNode.on(t_.CLICK,this,this.changeAni)})}spineParseComplete(){}changeAni(){++this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=5),this.spineAni.play(this.spineAniIndex,!0,!0)}changeSkin(){this.skeletonAni.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}};ol=m([WI("qTd2xmRXT4i0Re94qly0Lg")],ol);var{regClass:YI,property:sl}=Laya,i_=Laya.Event,$I=Laya.Point,Xi=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new $I;this.angle=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.createMap(),this.sceneWindow.on(i_.MOUSE_UP,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2+26),this.roleAniNode.scale(.6,.6),this.roleAniNode.x=this.lastX=48,this.roleAniNode.y=this.lastY=48,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let e=this._animator.getDefaultState();console.log(e.name),this.createWallMap()}createWallMap(){Laya.loader.load("resources/tiledMap/desert_new.json").then(()=>{let i=Laya.loader.getRes("resources/tiledMap/desert_new.json").data.layers[0].data,r;r=new Array;for(var n=0;n<40;n++){r[n]=new Array;for(var o=0;o<60;o++)i[n*60+o]==30?r[n][o]=1:r[n][o]=0}this.graph=new window.Graph(r),this.opts=[],this.opts.closest=!0,this.opts.heuristic=window.astar.heuristics.diagonal})}mouseUp(e){if(this.isMoving)return;this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let i=this.gameMap.globalToLocal(this.stageMouse);var r=this.graph.grid[Math.ceil(this.roleAniNode.y/32)-1][Math.ceil(this.roleAniNode.x/32)-1],n=this.graph.grid[Math.ceil(i.y/32)-1][Math.ceil(i.x/32)-1];this._everyPath=window.astar.search(this.graph,r,n,{closest:this.opts.closest}),this._everyPath.length>0&&(this.isMoving=!0),Laya.timer.loop(100,this,this.loopfun)}loopfun(){if(this._everyPath.length>0){let e=this._everyPath[0].y*32+16,i=this._everyPath[0].x*32+16;e==this.lastX?i>this.lastY?this.angle=90:this.angle=270:e>this.lastX?this.angle=0:this.angle=180,this.switchAni("run"),this.lastX=e,this.lastY=i,Laya.Tween.to(this.roleAniNode,{x:e,y:i},100),this._everyPath.splice(0,1)}else this.switchAni("stand"),Laya.timer.clear(this,this.loopfun),this.isMoving=!1}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(e=null){this.onLoaded()}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);this._animator.play(i),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}getOrientation(e,i){let r=i.split(","),n=360/r.length;return r[Math.floor(e/n)]}onDisable(){Laya.stage.off(i_.MOUSE_UP,this,this.mouseUp),this.tiledMap&&this.tiledMap.destroy()}};m([sl({type:Laya.Sprite})],Xi.prototype,"gameMap",2),m([sl({type:Laya.Prefab})],Xi.prototype,"roleAni",2),m([sl({type:"string"})],Xi.prototype,"runAniName",2),m([sl({type:"string"})],Xi.prototype,"standAniName",2),m([sl({type:Laya.Panel})],Xi.prototype,"sceneWindow",2),Xi=m([YI("zBb5TGy7Swu5_GpFiGzUng")],Xi);var{regClass:XI,property:Mce}=Laya,a_=Laya.Rectangle,zr=class extends Laya.Script{constructor(){super(...arguments);this._rect1=a_.TEMP;this._rect2=a_.TEMP}rectDetection(e,i){return!(e.x>i.x+i.width||e.x+e.width<i.x||e.y>i.y+i.height||e.y+e.height<i.y)}collisionWith(e,i,r){let n=[];if(r==0){var o=Laya.Point.create(),s=e.width/2,l=e.height/2,c=Laya.Point.create(),u,p;o.x=e.x+s,o.y=e.y+l,u=this.rectToRadius(e.width,e.height)}else if(r==2){var b,x;x=this.arrayToPoint(e)}for(let _=0;_<i.length;_++)if(e!=i[_])switch(r){case 0:c.x=i[_].x+i[_].width/2,c.y=i[_].y+i[_].height/2,p=this.rectToRadius(i[_].width,i[_].height),this.circleDetection(o,c,u+p)&&n.push(i[_]);break;case 1:this.rectDetection(e,i[_])&&n.push(i[_]);break;case 2:e.name==="c1"?(b=this.arrayToPoint(i[_]),this.circleAndPolygonDetection(e,b,i[_])&&n.push(i[_])):i[_].name==="c1"?this.circleAndPolygonDetection(i[_],x,e)&&n.push(i[_]):(b=this.arrayToPoint(i[_]),this.polygonDetection(x,b,e,i[_])&&n.push(i[_]));break}return n}circleAndPolygonDetection(e,i,r){let n=this.getSides(i),o=[],s=Laya.Point.create(),l=Laya.Point.create(),c=e.hitArea._hit._cmds[0].radius,u=this.getNodeCoord(i,r);s.x=e.x+e.hitArea._hit._cmds[0].x,s.y=e.y+e.hitArea._hit._cmds[0].y,l=this.getNearestPoint(s,u),o.push(new Laya.Point(l.x-s.x,l.y-s.y));for(let p=0,b=n.length;p<b;p++)o.push(this.perpendicular(n[p]));for(let p=0,b=o.length;p<b;p++){let x=o[p],_=this.getCircleProjection(s,x,c),y=this.getPolygonProjection(u,x);if(!this.isOverlap(_,y))return!1}return!0}getNearestPoint(e,i){let r=i[0],n=this.getDistance(e,r),o,s;for(let l=1;l<i.length;l++)o=i[l],s=this.getDistance(e,o),s<n&&(n=s,r=o);return r}polygonDetection(e,i,r,n){let o=this.getSides(e).concat(this.getSides(i)),s=[],l=this.getNodeCoord(e,r),c=this.getNodeCoord(i,n);for(let u=0,p=o.length;u<p;u++)s.push(this.perpendicular(o[u]));for(let u=0,p=s.length;u<p;u++){let b=s[u],x=this.getPolygonProjection(l,b),_=this.getPolygonProjection(c,b);if(!this.isOverlap(x,_))return!1}return!0}isOverlap(e,i){let r,n;return r=e.min<i.min?e.min:i.min,n=e.max>i.max?e.max:i.max,e.max-e.min+(i.max-i.min)>=n-r}getNodeCoord(e,i){let r=[];for(let n=0;n<e.length;n++){let o=Laya.Point.create();o.x=e[n].x+i.x+i.hitArea._hit._cmds[0].x,o.y=e[n].y+i.y+i.hitArea._hit._cmds[0].y,r.push(o)}return r}getPolygonProjection(e,i){let r=null,n=null;for(let o=0;o<e.length;o++){let s=this.dotProduct(e[o],i)/this.getLength(i);(r===null||s<r)&&(r=s),(n===null||s>n)&&(n=s)}return{min:r,max:n}}getCircleProjection(e,i,r){let n=this.dotProduct(e,i)/this.getLength(i);return{min:n-r,max:n+r}}rectToRadius(e,i){let r;return e==i?r=e/2:r=Math.sqrt(e*e+i*i)/2,r}circleDetection(e,i,r){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))<=r}circlesCollision(e,i,r,n){let o=this.subtract(e,i),s=this.getCircleProjection(e,o,r),l=this.getCircleProjection(i,o,n);return!!this.isOverlap(s,l)}arrayToPoint(e){let i=[],r=[];if(r=e.hitArea._hit._cmds[0].points,r&&r.length>3)for(let n=0;n<r.length/2;n++)i[n]=Laya.Point.create(),i[n].x=r[n*2],i[n].y=r[n*2+1];return i}perpendicular(e){let i=Laya.Point.create();return i.x=e.y,i.y=-e.x,i}getNormal(e){let i=Math.sqrt(e.x*e.x+e.y*e.y);return new Laya.Point(e.y/i,(0-e.x)/i)}getSides(e){var i=e,r=i.length,n=new Array;if(r>=3){for(var o=1,s=i[0];o<r;o++){let l=i[o];n.push(this.subtract(l,s)),s=l}n.push(this.subtract(i[0],i[r-1]))}return n}getLength(e){return Math.sqrt(e.x*e.x+e.y*e.y)}dotProduct(e,i){return e.x*i.x+e.y*i.y}subtract(e,i){return Laya.Point.create().setTo(e.x-i.x,e.y-i.y)}getDistance(e,i){let r=e.x-i.x,n=e.y-i.y;return Math.sqrt(r*r+n*n)}};zr=m([XI("naI7Ga3ZQzuwHxZXbiaZEw")],zr);var Qh=class extends Laya.View{};var{regClass:QI,property:Nce}=Laya,Ea=class extends Qh{constructor(){super();this._detectionType=0;this.collisionNodes=null;Ea.i=this}onEnable(){this.collisionNodes=[this.c1,this.p1,this.p2],this._script=this.getComponent(zr),this.detectionType.selectHandler=new Laya.Handler(this,this.onSelected),this.detectionType.selectedIndex=0}onSelected(e){switch(console.log("onSelected:"+e),this._detectionType=e,e){case 0:this.setCircleLine([this.c11,this.p11,this.p22]);break;case 1:this.setRectLine([this.c11,this.p11,this.p22]);break;case 2:this.c11.graphics.clear(),this.p11.graphics.clear(),this.p22.graphics.clear();break}}collisionWith(e){let i;i=this._script.collisionWith(e,this.collisionNodes,this._detectionType),i.length>0?(i.push(e),this.setLineWidth(i)):this.retsetLineWidth()}setLineWidth(e){for(let i=0;i<e.length;i++)e[i]._graphics._cmds[0].lineWidth=3}retsetLineWidth(){for(let e=0;e<this.collisionNodes.length;e++)this.collisionNodes[e]._graphics._cmds[0].lineWidth=0}setCircleLine(e,i=1,r="#1e00fb"){for(let n=0;n<e.length;n++){e[n].graphics.clear();let o=e[n].width/2,s=e[n].height/2,l=this._script.rectToRadius(e[n].width,e[n].height);e[n].graphics.drawCircle(o,s,l,null,r,i)}}setRectLine(e,i=1,r="#1e00fb"){for(let n=0;n<e.length;n++)e[n].graphics.clear(),e[n].graphics.drawRect(e[n].x,e[n].y,e[n].width,e[n].height,null,r,i)}};Ea=m([QI("RrGHZH_SROCrF5XxFa05sg")],Ea);var{regClass:ZI,property:po}=Laya,Fr=Laya.Event,r_=Laya.Point,Bi=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new r_;this.axisPivot=new r_;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1;this.mLastX=0;this.mLastY=0}onEnable(){this.createMap(),this.joystickAxis=this.joystickBG.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(Fr.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(Fr.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(Fr.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(Fr.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.sceneWindow.width/2,this.roleAniNode.y=this.sceneWindow.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let e=this._animator.getDefaultState();console.log(e.name)}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(e=null){this.onLoaded()}mouseDown(e){this.touchId=e.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let e=this.joystickBG.globalToLocal(this.stageMouse),i=e.x-this.joystickAxis.width/2,r=e.y-this.joystickAxis.height/2;this.radian=Math.atan2(r-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,e.x,e.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(e.x-this.joystickAxis.width/2,e.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(e){e.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(e){e.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(e,i){let r=i.split(","),n=360/r.length;return r[Math.floor(e/n)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let e=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;this.mLastX+=e,this.mLastY+=i,this.mLastX<0?this.mLastX=0:this.mLastX>1920-this.sceneWindow.width&&(this.mLastX=1920-this.sceneWindow.width),this.mLastY<0?this.mLastY=0:this.mLastY>1280-this.sceneWindow.height&&(this.mLastY=1280-this.sceneWindow.height),this.tiledMap.moveViewPort(this.mLastX,this.mLastY)}getDistance(e,i,r,n){let o=e-r,s=i-n;return Math.sqrt(o*o+s*s)}onDisable(){Laya.stage.off(Fr.MOUSE_DOWN,this,this.mouseDown),Laya.stage.off(Fr.MOUSE_UP,this,this.mouseUp),Laya.stage.off(Fr.MOUSE_MOVE,this,this.mouseMove),this.tiledMap&&this.tiledMap.destroy()}};m([po(Laya.Sprite)],Bi.prototype,"gameMap",2),m([po(Laya.Prefab)],Bi.prototype,"roleAni",2),m([po({type:"string"})],Bi.prototype,"runAniName",2),m([po({type:"string"})],Bi.prototype,"standAniName",2),m([po({type:Laya.Panel})],Bi.prototype,"sceneWindow",2),m([po(Laya.Image)],Bi.prototype,"joystickBG",2),Bi=m([ZI("k2DFVaFIQEyMRaElgOWsVw")],Bi);var Zh=class extends Laya.Box{};var{regClass:JI}=Laya,ll=class extends Zh{constructor(){super();this.lastIndex=-1}onEnable(){let e="resources/json/bagList.json";Laya.loader.fetch(e,"json").then(i=>{i.bagList&&i.bagList.length>0&&(this.bagList.array=i.bagList,this.bagList.renderHandler=new Laya.Handler(this,this.onListRender),this.bagList.selectHandler=new Laya.Handler(this,this.onListSelect),this.bagList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.bagList.vScrollBarSkin="")})}onListRender(e,i){i>this.bagList.array.length||i<0}onListSelect(e){this.tips.visible=!0,this.bagList.array[e].listItemBG={skin:"resources/UI/images/bg/bg100-1.png"},this.lastIndex!==-1&&(this.bagList.array[this.lastIndex].listItemBG={skin:"resources/UI/images/bg/bg100-0.png"}),this.lastIndex=e,this.itemImg.skin=this.bagList.array[e].listItemImg.skin,this.itemNumber.text="数量 "+this.bagList.array[e].listItemNumber.text,this.itemReadme.text=this.bagList.array[e].readme}onListMouse(e,i){}onDisable(){}};ll=m([JI("fimeRTYXT46eMH6komwhJQ")],ll);var{regClass:eE,property:Jb}=Laya,ur=class extends Laya.Script{constructor(){super()}onEnable(){var e=this.getDataSourece();Laya.loader.load("prefab/ComboList.lh").then(i=>{let r=i.create();this.comboList=r,this.comboList.array=e,this.comboList.repeatY=e.length,this.combo2.list=this.comboList,this.combo2.list.width=this.combo2.width,this.combo2.list.hScrollBarSkin="",this.combo2.selectHandler=new Laya.Handler(this,this.onSelected2)}),this.combo1.selectHandler=new Laya.Handler(this,this.onSelected1)}onSelected1(e){this.selectedText.text="您选中了："+this.combo1.selectedLabel}onSelected2(e){this.selectedText.text="您选中了："+(e<0?"":this.comboList.array[e].label)}getDataSourece(){for(var e=[],i=0;i<10;i++)e[i]={optText:{text:"选项"+(i+1)}};return e}onDisable(){}};m([Jb({type:Laya.ComboBox})],ur.prototype,"combo1",2),m([Jb({type:Laya.ComboBox})],ur.prototype,"combo2",2),m([Jb({type:Laya.Label})],ur.prototype,"selectedText",2),ur=m([eE("M6bGyqDSRCGU3TkvNeqvRw")],ur);var Jh=class extends Laya.View{};var{regClass:tE}=Laya,cl=class extends Jh{onEnable(){this.hList.array=this.getListDataSource(),this.hList.scrollTo(1);let e=this.hList.cells[1].getChildByName("icon");e.scaleX=e.scaleY=2,this.hList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange),this.leftLimit=this.getLeftLimit(),this.rightLimit=this.getRightLimit()}onScrollBarChange(){var e=this.hList.scrollBar.value,i=this.hList.array;if(e>this.leftLimit){var r=i.shift();i[i.length]=r,this.hList.array=i,this.hList.scrollBar.value=e-this.hList.cells[0].width-this.hList.spaceX,this.iconTweenToLeft()}else e<this.rightLimit&&(r=i.pop(),i.unshift(r),this.hList.array=i,this.hList.scrollBar.value=e+this.hList.cells[0].width+this.hList.spaceX,this.iconTweenToRight())}iconTweenToLeft(e=200){let i=this.hList.cells[0].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},e);let r=this.hList.cells[1].getChildByName("icon");r.scaleX=r.scaleY=1,Laya.Tween.to(r,{scaleX:2,scaleY:2},e)}iconTweenToRight(e=200){let i=this.hList.cells[1].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},e);let r=this.hList.cells[2].getChildByName("icon");r.scaleX=r.scaleY=1,Laya.Tween.to(r,{scaleX:2,scaleY:2},e)}getRightLimit(){return this.hList.cells[0].width-this.hList.spaceX}getLeftLimit(){return this.hList.cells[0].width*2+this.hList.spaceX}getListDataSource(e=5){let i=[];for(let r=0;r<e;r++)i[r]={},i[r].icon={skin:`resources/UI/role/r${r}.png`};return i}};cl=m([tE("WFag7yYwR9q-iI31OJUedg")],cl);var{regClass:iE,property:ef}=Laya,Sa=class extends Laya.Script{constructor(){super();this.optStatus=[];this.timestampFormat=(e,i)=>{let r=i?new Date(i):new Date,n={"M+":r.getMonth()+1,"D+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"S+":r.getMilliseconds()};new RegExp("(Y+)").test(e)&&(e=e.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in n)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==1?n[o]:("00"+n[o]).substr((""+n[o]).length)));return e}}onEnable(){let e="resources/json/mailList.json";Laya.loader.fetch(e,"json").then(i=>{let r=i.mailList;r&&r.length>0&&(this.mailList.array=r,this.mailList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.mailList.repeatY=r.length,this.mailList.vScrollBarSkin=""),this.addMail.on(Laya.Event.CLICK,this,this.addMialItem),this.selectDel.on(Laya.Event.CLICK,this,this.listSelectDel),this.selectFlag.on(Laya.Event.CLICK,this,this.listSelectFlag)})}listSelectFlag(){if(this.optStatus.length>0){for(let e=0;e<this.optStatus.length;e++){let i=this.optStatus[e];this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功标记"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}listSelectDel(){if(this.optStatus.length>0){this.optStatus.sort(function(e,i){return i-e});for(let e=0;e<this.optStatus.length;e++)this.mailList.array.splice(this.optStatus[e],1);this.optStatus=[],this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功删除"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}addMialItem(){var e=this.mailList.startIndex+1;let i={mailTitle:{text:"这里是新增加的邮件"+e},mailDateTime:{text:this.timestampFormat("YYYY-MM-DD hh:mm")},opt:{visible:!1},flagStatus:{skin:"resources/UI/images/comp/img_mail.png"},flagBtn:{label:"标为已读",labelColors:"#000000,#000000,#000000"}};if(this.mailList.array.splice(e,0,i),this.optStatus.length>0)for(let r=0;r<this.optStatus.length;r++)this.optStatus[r]>=e&&(this.optStatus[r]+=1);this.mailList.refresh()}onListMouse(e,i){if(e.type==Laya.Event.CLICK){var r=this.optStatus.indexOf(i);switch(e.target.name){case"optBG":r===-1?(this.mailList.array[i].opt={visible:!0},this.optStatus.push(i)):(this.mailList.array[i].opt={visible:!1},this.optStatus.splice(r,1)),this.mailList.refresh();break;case"mailTitle":Laya.Scene.open("scenes/uiDemo/Dialog.scene",!1,{title:this.mailList.array[i].mailTitle.text,text:"邮件内容，此处省略1000字……………………"}),this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"},this.mailList.refresh();break;case"flagBtn":this.mailList.array[i].flag===1?(this.mailList.array[i].flag=0,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail.png"},this.mailList.array[i].flagBtn={label:"标为已读",labelColors:"#000000,#000000,#000000"}):(this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}),this.mailList.refresh();break;case"delBtn":if(this.mailList.array.splice(i,1),r>-1){this.optStatus.splice(r,1);for(let n=r;n<this.optStatus.length;n++)this.optStatus[n]-=1}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"删除成功"});break}}}};m([ef({type:Laya.List})],Sa.prototype,"mailList",2),m([ef({type:Laya.Button})],Sa.prototype,"addMail",2),m([ef({type:Laya.Button})],Sa.prototype,"selectDel",2),m([ef({type:Laya.Button})],Sa.prototype,"selectFlag",2),Sa=m([iE("HzpJPDUEQN69Xg1VasHb-w")],Sa);var{regClass:aE,property:mo}=Laya,Ri=class extends Laya.Script{constructor(){super();this.scrollBarIsStop=!1;this.msgIdNow=1;this.itemIsOpen=!1;this.itemOpenId=-1;this.redHotStatus=[];this.mouseDown=!1}onEnable(){this.refreshList.array=this.createListData(9),this.refreshList.repeatY=this.refreshList.array.length,this.refreshList.vScrollBarSkin="",this.toLine.on(Laya.Event.CLICK,this,this.onToLineBtn),this.toTop.on(Laya.Event.CLICK,this,this.onToTopBtn),this.toBottom.on(Laya.Event.CLICK,this,this.onToBottomBtn),this.refreshList.on(Laya.Event.MOUSE_UP,this,this.stageOnMouseUp),this.refreshList.on(Laya.Event.MOUSE_OUT,this,this.stageOnMouseUp),this.refreshList.scrollBar.stopMoveLimit=this.scrollBarIsStopBind.bind(this),this.refreshLimit("dragTopLimit",80),this.refreshLimit("dragBottomLimit",80,20),this.refreshList.mouseHandler=new Laya.Handler(this,this.onListMouse)}stageOnMouseUp(){this.mouseDown=!1}refreshLimit(e,i,r=0,n=2e3){e==="dragTopLimit"?this.refreshList.scrollBar.topMoveLimit=i:e==="dragBottomLimit"&&(this.refreshList.scrollBar.bottomMoveLimit=i),this.refreshList.scrollBar.on(e,this,()=>{if(console.log("达到了滚动限制:"+e),this.refreshLoading.visible=!0,e==="dragTopLimit"){this.refreshLoading.bottom=NaN,this.refreshLoading.top=r;var o=this.createListData(5,"顶部新增的标题");o=o.concat(this.refreshList.array);var s=0+5,l=0;if(this.redHotStatus.length>0)for(let c=0;c<this.redHotStatus.length;c++)this.redHotStatus[c]+=5}else if(e==="dragBottomLimit"){this.refreshList.scrollBar.disableDrag=!0,this.refreshLoading.top=NaN,this.refreshLoading.bottom=r;var o=this.createListData(5,"底部新增的标题");o=this.refreshList.array.concat(o);var s=this.refreshList.array.length-1,l=s+5}this.scrollBarIsStop=!0,Laya.timer.once(n,this,()=>{this.refreshList.array=o,this.refreshList.scrollTo(l),this.refreshList.selectedIndex=s,this.scrollBarIsStop=!1,this.refreshList.scrollBar.backToNormal(),this.refreshLoading.visible=!1})})}onListMouse(e,i){e.type==Laya.Event.MOUSE_DOWN&&(this.mouseDown=!0,this.itemIsOpen?(this.itemIsOpen=!1,this.itemOpenId=-1,Laya.Tween.to(this.openedItem,{x:0},500,null,Laya.Handler.create(this,()=>{this.refreshList.scrollBar.disableDrag=!1}))):(this.moveLastPos=e.target.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),e.target.on(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove,[e.target,i]))),e.type==Laya.Event.MOUSE_UP&&(this.mouseDown=!1,this.itemOnMouseUp()),e.type==Laya.Event.CLICK&&(e.target.name=="flag"&&this.onClickFlag(i),e.target.name=="del"&&this.onClickDel(i))}itemOnMouseUp(){if(this.itemIsOpen){var e;this.openedItem.x<-80?e=-262:(this.itemIsOpen=!1,e=0),e!==this.openedItem.x&&Laya.Tween.to(this.openedItem,{x:e},500),this.refreshList.scrollBar.disableDrag=!1,this.itemOpenId!==-1&&(this.openedItem.off(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove),this.itemOpenId=-1)}}onClickFlag(e){var i=this.redHotStatus.indexOf(e);i==-1?(this.refreshList.array[e].avatar={},this.refreshList.array[e].avatar.redHot={visible:!0},this.refreshList.array[e].flag={flagText:{text:"标记已读"}},this.redHotStatus.push(e)):(this.refreshList.array[e].avatar={redHot:{visible:!1}},this.refreshList.array[e].flag={flagText:{text:"标记未读"}},this.redHotStatus.splice(i,1)),this.refreshList.refresh()}onClickDel(e){this.refreshList.array.splice(e,1),this.itemOpenId=-1;var i=this.redHotStatus.indexOf(e);if(i>-1&&this.redHotStatus.splice(e,1),this.redHotStatus.length>0)for(let r=0;r<this.redHotStatus.length;r++)this.redHotStatus[r]>e&&(this.redHotStatus[r]+=1);this.refreshList.refresh()}onItemBoxMouseMove(e,i){if(this.mouseDown){let r=e.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),n=this.moveLastPos.x-r.x,o=this.moveLastPos.y-r.y;Math.abs(n)>Math.abs(o)&&!this.itemIsOpen&&(this.openedItem=e,this.itemIsOpen=!0,this.refreshList.scrollBar.disableDrag=!0,this.itemOpenId=i),this.itemIsOpen&&(this.openedItem.x-=n,this.openedItem.x<-262?this.openedItem.x=-262:this.openedItem.x>0&&(this.openedItem.x=0))}else this.refreshList.scrollBar.disableDrag=!1}scrollBarIsStopBind(){return this.scrollBarIsStop}onToLineBtn(){let e=parseInt(this.lineNumber.text)-1;this.refreshList.scrollTo(e),e<this.refreshList.array.length&&(this.refreshList.selectedIndex=e)}onToTopBtn(){this.refreshList.scrollTo(0),this.refreshList.selectedIndex=0}onToBottomBtn(){let e=this.refreshList.array.length-1;this.refreshList.scrollTo(e),this.refreshList.selectedIndex=e}createListData(e=5,i="初始测试标题"){let r=new Date,n=r.getHours()<10?"0"+r.getHours():""+r.getHours(),o=r.getMinutes()<10?"0"+r.getMinutes():""+r.getMinutes();for(var s=[],l=0;l<e;l++){let c={text:n+" : "+o};s[l]={},s[l].msgTime=c,s[l].msgTitle={text:i+(this.msgIdNow+l)},s[l].avatar={redHot:{visible:!1}}}return this.msgIdNow+=l,s}onDisable(){}};m([mo({type:Laya.List})],Ri.prototype,"refreshList",2),m([mo({type:Laya.Button})],Ri.prototype,"toLine",2),m([mo({type:Laya.Button})],Ri.prototype,"toTop",2),m([mo({type:Laya.Button})],Ri.prototype,"toBottom",2),m([mo({type:Laya.Box})],Ri.prototype,"refreshLoading",2),m([mo({type:Laya.Label})],Ri.prototype,"lineNumber",2),Ri=m([aE("m0TR8w0gTbWSvHbZTzrORA")],Ri);var tf=class extends Laya.View{};var{regClass:rE,property:nue}=Laya,ul=class extends tf{onEnable(){this.tree1.xml=this.getTreeData(!0),this.tree2.xml=this.getTreeData(!1)}getTreeData(t){let e="<data>";if(t)e+="<dir itemLabel='一级目录一' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><dir itemLabel='一级目录二' isOpen='true'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/></dir><dir itemLabel='一级目录三' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><file itemLabel='一级子项1 '/><file itemLabel='一级子项2 '/>";else for(let i=0;i<5;i++){e+="<item title='目录"+(i+1)+"' isOpen='true'>";for(let r=0;r<5;r++)e+="<subpage title='子项标题"+(r+1)+"' />";e+="</item>"}return e+="</data>",new Laya.XML(e)}};ul=m([rE("GJWtWFwsQoqNpjA1k42SpQ")],ul);var af=class extends Laya.Scene{};var{regClass:nE,property:uue}=Laya,pl=class extends af{onEnable(){}onDisable(){}};pl=m([nE("JQ1fkq03ThewqQWRXQPgmw")],pl);var{regClass:oE,property:due}=Laya,jr=class extends Laya.Script{constructor(){super()}baseUI(e){this.window=e,this.searchCloseButton(e)}searchCloseButton(e){for(let i=0;i<e.numChildren;i++){let r=e.getChildAt(i);r instanceof Laya.Button&&r.name=="closeBtn"?(r.on(Laya.Event.MOUSE_DOWN,this,()=>{this.window.close()}),console.log("baseUI 发现closeBtn，统一添加关闭事件")):this.searchCloseButton(r)}}onDisable(){}};jr=m([oE("7Fkz4T7JQ5ujwNcIx9lGNA")],jr);var{regClass:sE,property:bue}=Laya,ml=class extends jr{constructor(){super()}onEnable(){this.ui=this.owner,this.baseUI(this.ui)}onDisable(){}};ml=m([sE("utN7JQs_T3iw6KqWT-beFQ")],ml);var rf=class extends Laya.Box{};var{regClass:lE,property:_ue}=Laya,n_=Laya.Event,o_=Laya.Mouse,dl=class extends rf{constructor(){super()}onEnable(){Laya.Browser.onPC?(this.panel.on(n_.MOUSE_OVER,this,()=>{o_.cursor="move"}),this.panel.on(n_.MOUSE_OUT,this,()=>{o_.cursor="auto"})):this.topLab.text="背景可拖拽，双指缩放改变大小"}};dl=m([lE("9s1SW9WKRrSodo6JY27VSw")],dl);var{regClass:cE,property:nf}=Laya,Ta=class extends Laya.Script{constructor(){super()}onEnable(){this.graphics=this.graphicsSprite.graphics,Laya.timer.loop(2e3,this,()=>{this.changeImgSkin(),this.changeSpriteTexture(),this.changeFillTexture(),this.changeTexture()})}changeImgSkin(){this.Img.skin=this.randomImg()}changeSpriteTexture(){this.spImg.loadImage(this.randomImg(!0,6,5))}changeFillTexture(){this.graphics.clear();let e=this.randomImg(!0,4);Laya.loader.load(e).then(i=>{this.graphics.fillTexture(i,0,0,1,1)})}changeTexture(){this.textureImg.graphics.clear();let e=Laya.loader.getRes(this.randomImg(!0,8));this.textureImg.graphics.drawTexture(e)}randomImg(e=!1,i=8,r=1){let n=Math.floor(Math.random()*(i-r+1))+r;return e?"resources/UI/role/m"+n+".png":"resources/UI/role/w"+n+".png"}onDisable(){}};m([nf({type:Laya.Image})],Ta.prototype,"Img",2),m([nf({type:Laya.Sprite})],Ta.prototype,"spImg",2),m([nf({type:Laya.Sprite})],Ta.prototype,"graphicsSprite",2),m([nf({type:Laya.Sprite})],Ta.prototype,"textureImg",2),Ta=m([cE("ulgCMWfCQKiihSJynpbJFg")],Ta);var of=class extends Laya.View{};var{regClass:uE,property:Cue}=Laya,sf=Laya.Event,hl=class extends of{onEnable(){this._hitArea.on(sf.MOUSE_DOWN,this,()=>{this._hitArea.off(sf.MOUSE_MOVE,this,this.bg3MaskMove),this._hitArea.startDrag(),this._hitArea.on(sf.MOUSE_MOVE,this,this.bg3MaskMove)}),this._mask.on(sf.MOUSE_MOVE,this,this.maskMove)}bg3MaskMove(t){t.stopPropagation(),this.bg3Mask.x=this._hitArea.x,this.bg3Mask.y=this._hitArea.y}maskMove(){let t=this.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),e=t.x-this._mask.width/this.bg2.scaleX/2,i=t.y-this._mask.height/this.bg2.scaleY/2;e>80&&i>80&&(this._mask.x=t.x-this._mask.width/this.bg2.scaleX/2,this._mask.y=t.y-this._mask.height/this.bg2.scaleY/2,this.bg2.x=(-t.x-this._mask.width/2)*(this.bg2.scaleX-1),this.bg2.y=(-t.y-this._mask.height/2)*(this.bg2.scaleY-1))}};hl=m([uE("zt0rBsEST9KVJgcimd7SFA")],hl);var{regClass:pE,property:qr}=Laya,_i=class extends Laya.Script{constructor(){super()}onEnable(){this.changeMouseCursor(),this.throughTab.selectHandler=new Laya.Handler(this,this.onSwitchTab)}onSwitchTab(e){switch(e){case 0:this.leftBg.hitTestPrior=!0,this.rightBg.hitTestPrior=!0;break;case 1:this.leftBg.hitTestPrior=!1,this.rightBg.hitTestPrior=!1;break}}changeMouseCursor(){this.leftBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.leftBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.rightBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.rightBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.leftBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧的可点击区域",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.leftBg.name)}),this.rightBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧的可点击区域",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.rightBg.name)}),this.btn1.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮1"}),console.log("click btn1")}),this.btn2.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮2"}),console.log("click btn2")}),this.close1.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧关闭按钮",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.close1.name)}),this.close2.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧关闭按钮",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.close2.name)})}onDisable(){}};m([qr({type:Laya.Tab})],_i.prototype,"throughTab",2),m([qr({type:Laya.Sprite})],_i.prototype,"leftBg",2),m([qr({type:Laya.Sprite})],_i.prototype,"rightBg",2),m([qr({type:Laya.Button})],_i.prototype,"btn1",2),m([qr({type:Laya.Button})],_i.prototype,"btn2",2),m([qr({type:Laya.Sprite})],_i.prototype,"close1",2),m([qr({type:Laya.Sprite})],_i.prototype,"close2",2),_i=m([pE("AmLUThtNSaW6zL9W205gyg")],_i);var{regClass:mE,property:lf}=Laya,Ca=class extends Laya.Script{onEnable(){this.bTop.getComponent(Laya.BoxCollider).width=this.bTop.width,this.bBottom.getComponent(Laya.BoxCollider).width=this.bBottom.width,this.bRight.getComponent(Laya.BoxCollider).height=this.bRight.height,this.bLeft.getComponent(Laya.BoxCollider).height=this.bLeft.height}};m([lf({type:Laya.Image})],Ca.prototype,"bTop",2),m([lf({type:Laya.Image})],Ca.prototype,"bBottom",2),m([lf({type:Laya.Image})],Ca.prototype,"bRight",2),m([lf({type:Laya.Image})],Ca.prototype,"bLeft",2),Ca=m([mE("jp5l8WZtQLuVyfU4ljEFyQ")],Ca);var cf=class extends Laya.View{};var{regClass:dE,property:Hue}=Laya,fl=class extends cf{onEnable(){this.testProgress()}testProgress(){this.loading2.value=.01,this.loadText.text="资源加载中……",Laya.timer.loop(100,this,this.changeProgress)}changeProgress(){this.loading2.value+=.05,this.loading2.value==1&&(this.loadText.text="资源加载完成",Laya.timer.clear(this,this.changeProgress),Laya.timer.once(3e3,this,()=>{this.testProgress()}))}};fl=m([dE("9w97n2rXRjiACN_vzizQPw")],fl);var{regClass:hE,property:Gue}=Laya,pr=class extends Laya.Script{constructor(){super()}onStart(){this._anim=this.owner.getComponent(Laya.Animator)}isPlayanimaByName(e=0){let i=this._anim.getControllerLayer(e);if(i==null)return!1;let r=i.getCurrentPlayState();return r==null?!1:r.animatorState.clip.islooping?!0:r._finish}isSameByName(e,i=0){let r=this._anim.getControllerLayer(i);if(r==null)return!1;let n=r.getCurrentPlayState();if(n==null)return!1;if(n.animatorState.name==e)return!0}playAnim(e,i=!1){if(i){if(this.isSameByName(e))return;this._anim.play(e,0,0);return}this.isPlayanimaByName()||this._anim.play(e,0,0)}};pr=m([hE("q0uAMn-DTUm70T4fGtxGlw")],pr);var rt=Laya.InputManager,{regClass:fE,property:$ue}=Laya,bl=class extends Laya.Script{constructor(){super(...arguments);this.currRockerBar=null;this.maxDistance=80;this.isMouseDown=!1;this.mouseDownPosition=new Laya.Point;this._currentMouse=new Laya.Point;this.initRockerBarPosition=new Laya.Point;this.key1Pressed=!1;this.key2Pressed=!1;this.key3Pressed=!1;this.key4Pressed=!1;this.key5Pressed=!1;this.key6Pressed=!1;this.directionOffset=0;this.isKeyRun=!1}onEnable(){Laya.InputManager.multiTouchEnabled=!0}onStart(){this.currRockerBar=this.owner.getChildByName("freebar"),this.img_freebar_arrow=this.owner.getChildByName("img_freebar_arrow"),this.freetrack=this.owner.getChildByName("freetrack"),this.img_arrow_left=this.freetrack.getChildByName("img_arrow_left"),this.img_arrow_right=this.freetrack.getChildByName("img_arrow_right"),this.img_arrow_up=this.freetrack.getChildByName("img_arrow_up"),this.img_arrow_down=this.freetrack.getChildByName("img_arrow_down"),this.img_freebar_arrow.visible=!1,Laya.Browser.onPC?this.freetrack.visible=!0:this.img_arrow_left.visible=this.img_arrow_right.visible=this.img_arrow_up.visible=this.img_arrow_down.visible=!1,this.initialise()}initialise(){this.initRockerBarPosition.setTo(this.currRockerBar.x,this.currRockerBar.y),this.currRockerBar.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onMouseUp)}onSkillKeyDown(e,i,r){switch(e.stopPropagation(),i){case 1:this.key1Pressed=r;break;case 2:this.key2Pressed=r;break;case 3:this.key3Pressed=r;break}}onMouseDown(e){$.instance.stopAll||(e.stopPropagation(),this.isMouseDown=!0,this.currRockerBar.selected=!0,Laya.Browser.onPC||(this.freetrack.visible=!0),this.mouseDownPosition.setTo(this.owner.mouseX,this.owner.mouseY),console.log("onMouseDown this.owner.mouse: ",this.owner.mouseX,this.owner.mouseY),this.isKeyRun=!1,this.touchId=e.touchId)}onMouseUp(e){this.isMouseDown&&this.endClick(e)}endClick(e){this.isMouseDown=!1,this.currRockerBar.x=this.initRockerBarPosition.x,this.currRockerBar.y=this.initRockerBarPosition.y,this.currRockerBar.selected=!1,this.setDir(-4)}onMouseMove(e){if(!this.isMouseDown||!this.currRockerBar)return;e.stopPropagation(),this._currentMouse.setTo(e.stageX,e.stageY);let i=this.owner.globalToLocal(this._currentMouse,!1),r=i.x-this.mouseDownPosition.x,n=i.y-this.mouseDownPosition.y;if(Math.sqrt(r**2+n**2)<this.maxDistance)this.currRockerBar.x=this.initRockerBarPosition.x+r,this.currRockerBar.y=this.initRockerBarPosition.y+n;else{let s=Math.atan2(r,n);this.currRockerBar.x=Math.sin(s)*this.maxDistance+this.initRockerBarPosition.x,this.currRockerBar.y=Math.cos(s)*this.maxDistance+this.initRockerBarPosition.y}if(Math.abs(r)>this.directionOffset||Math.abs(n)>this.directionOffset){let s=Tt.judgePosition(r,n);this.setDir(s)}}onUpdate(){$.instance.stopAll||this.getKeyboardPressed()}setDir(e){if(this.lastDirection!=e&&(N.instance.setMyHeroDirection(e),this.lastDirection=e),e==-4)this.img_freebar_arrow.visible=!1;else{this.img_freebar_arrow.visible=!0;let i=e+90;this.img_freebar_arrow.rotation=i}}getKeyboardPressed(){if(rt.hasKeyDown(Laya.Keyboard.W)&&rt.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(225)):rt.hasKeyDown(Laya.Keyboard.W)&&rt.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(315)):rt.hasKeyDown(Laya.Keyboard.S)&&rt.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(135)):rt.hasKeyDown(Laya.Keyboard.S)&&rt.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(45)):rt.hasKeyDown(Laya.Keyboard.W)?(this.isKeyRun=!0,this.setDir(270)):rt.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(0)):rt.hasKeyDown(Laya.Keyboard.S)?(this.isKeyRun=!0,this.setDir(90)):rt.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(180)):this.isKeyRun&&this.setDir(-4),rt.hasKeyDown(Laya.Keyboard.H)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_1)){if(this.key1Pressed)return;this.key1Pressed=!0,L.intance.event(v.EVENT_CLICK_NUM,1),Laya.timer.once(500,this,this.notKey1Pressed)}if(rt.hasKeyDown(Laya.Keyboard.J)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_2)){if(this.key2Pressed)return;this.key2Pressed=!0,L.intance.event(v.EVENT_CLICK_NUM,2),Laya.timer.once(500,this,this.notKey2Pressed)}if(rt.hasKeyDown(Laya.Keyboard.K)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_3)){if(this.key3Pressed)return;this.key3Pressed=!0,L.intance.event(v.EVENT_CLICK_NUM,3),Laya.timer.once(500,this,this.notKey3Pressed)}if(rt.hasKeyDown(Laya.Keyboard.L)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_4)){if(this.key4Pressed)return;this.key4Pressed=!0,L.intance.event(v.EVENT_CLICK_NUM,4),Laya.timer.once(500,this,this.notKey4Pressed)}if(rt.hasKeyDown(Laya.Keyboard.M)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_5)){if(this.key5Pressed)return;this.key5Pressed=!0,L.intance.event(v.EVENT_CLICK_NUM,5),Laya.timer.once(500,this,this.notKey5Pressed)}if(rt.hasKeyDown(Laya.Keyboard.N)||rt.hasKeyDown(Laya.Keyboard.NUMPAD_6)){if(this.key6Pressed)return;this.key6Pressed=!0,L.intance.event(v.EVENT_CLICK_NUM,6),Laya.timer.once(500,this,this.notKey6Pressed)}}notKey1Pressed(){this.key1Pressed=!1}notKey2Pressed(){this.key2Pressed=!1}notKey3Pressed(){this.key3Pressed=!1}notKey4Pressed(){this.key4Pressed=!1}notKey5Pressed(){this.key5Pressed=!1}notKey6Pressed(){this.key6Pressed=!1}getKeyPressed(e){var i=e.toParentPoint(new Laya.Point(e.x,e.y));return i.x>e.x&&i.x<e.x+e.width&&i.y>e.y&&i.y<e.y+e.height}getDistance(e,i,r,n){let o=e-r,s=i-n;return Math.sqrt(o*o+s*s)}onDisable(){Laya.InputManager.multiTouchEnabled=!1}};bl=m([fE("7cTqWb35RwygSkuWy4QkgQ")],bl);var ho=class{static playSkillEffect(t,e,i){var r=["Attack01","Attack02","Attack03","Attack04"],n=r[e];Laya.Sprite3D.load(t,Laya.Handler.create(null,function(o){i.addChild(o);var s=o.getChildByName(n);s.active=!0;var l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play(),setTimeout(()=>{o.removeSelf()},1e3)}))}static playEnemyHurtSkillEffect(t,e){Laya.Sprite3D.load(t,Laya.Handler.create(null,function(i){e.addChild(i);var r="Attack",n=i.getChildByName(r),o=n.getComponent(Laya.ShurikenParticleRenderer);if(o._particleSystem.play(),n.numChildren>0)for(let c=0;c<n.numChildren;c++){var s=n.getChildAt(c),l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}static playNormalEffect(t,e){Laya.Sprite3D.load(t,Laya.Handler.create(null,function(i){e.addChild(i);var r=i,n=r.getComponent(Laya.ShurikenParticleRenderer);if(n._particleSystem.play(),r.numChildren>0)for(let l=0;l<r.numChildren;l++){var o=r.getChildAt(l),s=o.getComponent(Laya.ShurikenParticleRenderer);s._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}};var{regClass:bE,property:s_}=Laya,Wr=class extends Laya.Script{constructor(){super();this.followTarget=null;this.speed=.02;this.mLife=5;this.mIsEnd=!1;this.mIsAttack=!1;this.mIsAttackStart=!1;this.mCanPlayFirst=!0;this.mAttackDelayTime=0;this.mCurrentIndex=0;this.followTarget=N.instance.getCurrentHero()}onUpdate(){if(!this.mIsEnd){this.followTarget==null&&(this.followTarget=N.instance.getCurrentHero());var e=new Laya.Vector3(this.followTarget.transform.position.x,0,this.followTarget.transform.position.z),i=new Laya.Vector3(this.owner.transform.position.x,0,this.owner.transform.position.z),r=Laya.Vector3.distance(e,i);if(r<10)if(r<=1)this.mIsAttack?this.isAttackendByPlayer():(this.mCanPlayFirst?(this.mCanPlayFirst=!1,this.attackPlayer()):(this.mAttackDelayTime=this.mAttackDelayTime+Laya.timer.delta,this.mAttackDelayTime>1e3&&(this.mAttackDelayTime=0,this.attackPlayer())),this.mIsAttackStart=!1),N.instance.insertValidList(this.owner);else{this.mAttackDelayTime=0;var n=new Laya.Vector3;Laya.Vector3.subtract(e,i,n),Laya.Vector3.normalize(n,n),this.owner.transform.lookAt(e,Laya.Vector3.Up);var o=this.owner.transform.position;o.vadd(new Laya.Vector3(n.x*this.speed,0,n.z*this.speed),o),this.owner.transform.position=o,this.anim&&this.anim.playAnim("run",!0),this.mCanPlayFirst=!0,this.mIsAttackStart=!1,this.mIsAttack=!1}else this.anim&&this.anim.playAnim("ldle",!0),N.instance.removeValidListByValue(this.owner);this.mLife<=0&&(this.mIsEnd=!0,this.anim&&this.anim.playAnim("die",!0),setTimeout(()=>{N.instance.removeValidListByValue(this.owner),this.owner.removeSelf();var s=N.instance.getCurrentPlane(),l=this.mCurrentIndex;N.instance.createEnemy(s.getChildAt(l),l)},600))}}setCurrentIndex(e){this.mCurrentIndex=e}setLife(e){this.mLife=e}attackPlayer(){ho.playEnemyHurtSkillEffect("resources/prefab/eff_monster.lh",this.owner.getChildAt(0)),N.instance.playSound(2),this.anim&&this.anim.playAnim("attack",!0),setTimeout(()=>{this.mIsEnd||this.anim&&this.anim.playAnim("ldle",!0)},500)}isAttackendByPlayer(){this.mIsAttackStart||(this.anim&&this.anim.playAnim("shouji",!0),ho.playNormalEffect("resources/prefab/eff_shouji.lh",this.owner.getChildAt(0)),setTimeout(()=>{this.mIsEnd||(this.anim&&this.anim.playAnim("shouji",!0),this.mIsAttack=!1)},500),this.mIsAttackStart=!0)}getLife(){return this.mLife}setIsAttack(e){this.mIsAttack=e}};m([s_({type:pr})],Wr.prototype,"anim",2),m([s_({type:"number"})],Wr.prototype,"speed",2),Wr=m([bE("eWO-rqURQ6ag7phXtJPZCA")],Wr);var{regClass:yE,property:yl}=Laya,Qi=class extends Laya.Script{constructor(){super();this.animname="";this.force=!1;this.isBig=!1;this.isCanClick=!0}onStart(){L.intance.on(v.EVENT_CLICK_NUM3,this,this.onMouseClick)}onMouseClick(e){this.isCanClick&&(Laya.Tween.to(this.btn_pic,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this.btn_pic,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)})),N.instance.myHeroSpr.getComponent(Vr).catchItem(),N.instance.playSound(1),this.anim1&&(this.anim1.playAnim(this.animname,this.force),setTimeout(()=>{this.anim1.playAnim("idle",this.force),this.isCanClick=!0},500)))}onDestroy(){L.intance.offAllCaller(this)}};m([yl({type:pr})],Qi.prototype,"anim1",2),m([yl({type:"string"})],Qi.prototype,"animname",2),m([yl({type:"boolean"})],Qi.prototype,"force",2),m([yl({type:"boolean"})],Qi.prototype,"isBig",2),m([yl({type:Laya.Sprite})],Qi.prototype,"btn_pic",2),Qi=m([yE("xovkzdhOSuOc_JJKi_7s2g")],Qi);var{regClass:gE,property:l_}=Laya,Kr=class extends Laya.Script{constructor(){super();this.isBig=!1;this.isCanClick=!0}onStart(){L.intance.on(v.EVENT_CLICK_NUM,this,this.onNumberClick)}onNumberClick(e){e==1?this.isBig||this.onMouseClick(null):this.isBig&&this.onMouseClick(null)}onMouseClick(e){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=N.instance.getValidList();Laya.Tween.to(this,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)}));var r=0;this.isBig?(N.instance.myHeroSpr.attack(),N.instance.playSound(3)):(N.instance.myHeroSpr.attack(),N.instance.playSound(1)),setTimeout(()=>{this.isCanClick=!0},500)}}getDistance(e,i){return Math.sqrt(e*e+i*i)}getDistanceByPoint(e,i,r,n){let o=e-r,s=i-n;return Math.sqrt(o*o+s*s)}onDestroy(){L.intance.offAllCaller(this)}};m([l_({type:"boolean"})],Kr.prototype,"isBig",2),m([l_({type:Laya.Sprite})],Kr.prototype,"btn_pic",2),Kr=m([gE("ye1w48wgTbqktuLPDOjmkw")],Kr);var{regClass:vE,property:bpe}=Laya,gl=class extends Laya.Script{constructor(){super(...arguments);this.maxX=0;this.minX=-90;this.maxY=0;this.minY=-580;this.scaleSize=.1;this.lastDistance=0;this.startedSingleTouchDrag=!1}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),this.onMouseWheel()}onMouseWheel(){this.owner.on(Laya.Event.MOUSE_WHEEL,this,e=>{let i=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY));e.delta>0&&(this.owner.scaleX+=this.scaleSize,this.owner.scaleY+=this.scaleSize),e.delta<0&&(this.owner.scaleX-=this.scaleSize,this.owner.scaleY-=this.scaleSize,this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1));let r=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),n=(r.x-i.x)*this.owner.scaleX,o=(r.y-i.y)*this.owner.scaleY;n+=this.owner.x,o+=this.owner.y,this.updateLimit(),n>this.maxX?this.owner.x=this.maxX:n<this.minX?this.owner.x=this.minX:this.owner.x=n,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o})}onStart(){this.updateLimit()}updateLimit(){let e=this.owner.parent;this.minX=Math.min(e.width-this.owner.width*this.owner.scaleX,0),this.minY=Math.min(e.height-this.owner.height*this.owner.scaleY,0)}onMouseDown(e){if(e.stopPropagation(),e.touches&&e.touches.length>1){this.startedSingleTouchDrag&&(this.owner.stopDrag(),this.startedSingleTouchDrag=!1);let i=this.setPivot(e);!i.x||!i.y?console.log("(((((((((((((((((((((((",this.lastPivot,JSON.parse(JSON.stringify(e.touches))):(this.lastDistance=this.getDistance(e),this.lastPivot=i,this.owner.on(Laya.Event.MOUSE_MOVE,this,this.mouseMove))}else this.owner.startDrag(),this.startedSingleTouchDrag=!0}onMouseUp(e){this.owner.off(Laya.Event.MOUSE_MOVE,this,this.mouseMove)}getDistance(e){var i=0;if(e.touches&&e.touches.length>1){let r=e.touches[0].pos.x-e.touches[1].pos.x,n=e.touches[0].pos.y-e.touches[1].pos.y;i=Math.sqrt(r*r+n*n)}return i}mouseMove(e){let i=this.getDistance(e);this.owner.scaleX+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleY+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1),this.owner.scaleX>5&&(this.owner.scaleX=5),this.owner.scaleY>5&&(this.owner.scaleY=5);let r=this.setPivot(e);if(!r.x||!r.y)console.log("$$$$$$$$$$$",r,JSON.parse(JSON.stringify(e.touches)));else{this.updateLimit();let n=(r.x-this.lastPivot.x)*this.owner.scaleX,o=(r.y-this.lastPivot.y)*this.owner.scaleY;n+=this.owner.x,o+=this.owner.y,n>this.maxX?this.owner.x=this.maxX:n<this.minX?this.owner.x=this.minX:this.owner.x=n,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o,this.lastDistance=i}}setPivot(e){if(e.touches&&e.touches.length>=2){let i=this.owner.globalToLocal(new Laya.Point(e.touches[0].pos.x,e.touches[0].pos.y)),r=this.owner.globalToLocal(new Laya.Point(e.touches[1].pos.x,e.touches[1].pos.y));return new Laya.Point((i.x+r.x)/2,(i.y+r.y)/2)}return this.lastPivot}onUpdate(){this.owner.x>this.maxX&&(this.owner.x=this.maxX),this.owner.x<this.minX&&(this.owner.x=this.minX),this.owner.y>this.maxY&&(this.owner.y=this.maxY),this.owner.y<this.minY&&(this.owner.y=this.minY)}addTestPoint(e,i="#ff0000",r=2){let n=new Laya.Sprite;n.graphics.drawCircle(0,0,r,i),this.owner.addChild(n),n.pos(e.x,e.y)}};gl=m([vE("c71-MoP2RIyCrdBAfjnIgw")],gl);var{regClass:LE,property:_E}=Laya,fo=class extends Laya.Script{constructor(){super(...arguments);this.tipsText="";this.isDown=!1}onEnable(){this.tipsText.replace(/(^\s*)|(\s*$)/g,"")}onMouseDown(){this.owner.startDrag(),this.isDown=!0}onMouseUp(){this.isDown=!1}onMouseMove(){this.isDown&&Ea.i.collisionWith(this.owner)}onMouseOver(){Laya.Mouse.cursor="move",this.tipsText!==""&&Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:this.tipsText})}onMouseOut(){Laya.Mouse.cursor="auto"}};m([_E({type:"string"})],fo.prototype,"tipsText",2),fo=m([LE("oWa7FUgoQ6CqtyJh_D1Y2w")],fo);var{regClass:wE,property:vl}=Laya,uf=Laya.Event,c_=Laya.Point,Zi=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new c_;this.axisPivot=new c_;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.joystickBG=this.owner,this.joystickAxis=this.owner.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(uf.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(uf.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(uf.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(uf.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.gameMap.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.gameMap.width/2,this.roleAniNode.y=this.gameMap.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D)}mouseDown(e){this.touchId=e.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let e=this.joystickBG.globalToLocal(this.stageMouse),i=e.x-this.joystickAxis.width/2,r=e.y-this.joystickAxis.height/2;this.radian=Math.atan2(r-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),console.log("radian: "+this.radian+", angle: "+this.angle),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,e.x,e.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(e.x-this.joystickAxis.width/2,e.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(e){e.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(e){e.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(e,i){let r=i.split(","),n=360/r.length;return r[Math.floor(e/n)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let e=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;(e<0&&this.gameMap.x<0||e>0&&this.gameMap.x>this.sceneWindow.width-this.gameMap.width)&&(this.gameMap.x-=e),(i<0&&this.gameMap.y<0||i>0&&this.gameMap.y>this.sceneWindow.height-this.gameMap.height)&&(this.gameMap.y-=i)}getDistance(e,i,r,n){let o=e-r,s=i-n;return Math.sqrt(o*o+s*s)}};m([vl({type:Laya.Prefab})],Zi.prototype,"roleAni",2),m([vl({type:"string"})],Zi.prototype,"runAniName",2),m([vl({type:"string"})],Zi.prototype,"standAniName",2),m([vl({type:Laya.Sprite})],Zi.prototype,"gameMap",2),m([vl({type:Laya.Box})],Zi.prototype,"sceneWindow",2),Zi=m([wE("Pl5-_PonSLe-7mCnxeXfRw")],Zi);var{regClass:xE,property:Ipe}=Laya,Ll=class extends Laya.Script{constructor(){super();this.isOpen=!0}onEnable(){this.toolbarBG=this.owner.parent,this._owner=this.owner,this.menu=this.owner.parent.getChildByName("menu")}onMouseDown(e){e.stopPropagation(),this.isOpen?(Laya.Tween.to(this.toolbarBG,{width:106},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:52,rotation:540},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!1})),Laya.Tween.to(this.menu,{alpha:0},300,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!1}))):(Laya.Tween.to(this.toolbarBG,{width:460},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:402,rotation:-360},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!0})),Laya.Tween.to(this.menu,{alpha:1},200,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!0})))}onDisable(){}};Ll=m([xE("hPkwKQvKQTaeBeEpHxNUEA")],Ll);})();
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
