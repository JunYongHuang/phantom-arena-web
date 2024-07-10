"use strict";(()=>{var dw=Object.create;var zl=Object.defineProperty;var Gv=Object.getOwnPropertyDescriptor;var hw=Object.getOwnPropertyNames;var fw=Object.getPrototypeOf,yw=Object.prototype.hasOwnProperty;var ne=(a,t)=>()=>(a&&(t=a(a=0)),t);var bw=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),jv=(a,t)=>{for(var e in t)zl(a,e,{get:t[e],enumerable:!0})},gw=(a,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of hw(t))!yw.call(a,n)&&n!==e&&zl(a,n,{get:()=>t[n],enumerable:!(i=Gv(t,n))||i.enumerable});return a};var vw=(a,t,e)=>(e=a!=null?dw(fw(a)):{},gw(t||!a||!a.__esModule?zl(e,"default",{value:a,enumerable:!0}):e,a));var p=(a,t,e,i)=>{for(var n=i>1?void 0:i?Gv(t,e):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&zl(t,e,n),n};function Wv(a,t){return a.exec(t)?.groups}var qv=ne(()=>{"use strict"});function gc(a){let t=a.type;if(Yv.test(a.type)&&"components"in a){t="(";let e=a.components.length;for(let n=0;n<e;n++){let r=a.components[n];t+=gc(r),n<e-1&&(t+=", ")}let i=Wv(Yv,a.type);return t+=`)${i?.array??""}`,gc({...a,type:t})}return"indexed"in a&&a.indexed&&(t=`${t} indexed`),a.name?`${t} ${a.name}`:t}var Yv,$v=ne(()=>{"use strict";qv();Yv=/^tuple(?<array>(\[(\d*)\])*)$/});function nr(a){let t="",e=a.length;for(let i=0;i<e;i++){let n=a[i];t+=gc(n),i!==e-1&&(t+=", ")}return t}var Xv=ne(()=>{"use strict";$v()});function jb(a){return a.type==="function"?`function ${a.name}(${nr(a.inputs)})${a.stateMutability&&a.stateMutability!=="nonpayable"?` ${a.stateMutability}`:""}${a.outputs.length?` returns (${nr(a.outputs)})`:""}`:a.type==="event"?`event ${a.name}(${nr(a.inputs)})`:a.type==="error"?`error ${a.name}(${nr(a.inputs)})`:a.type==="constructor"?`constructor(${nr(a.inputs)})${a.stateMutability==="payable"?" payable":""}`:a.type==="fallback"?"fallback()":"receive() external payable"}var Qv=ne(()=>{"use strict";Xv()});var Zv=ne(()=>{"use strict";Qv()});function Kt(a,{includeName:t=!1}={}){if(a.type!=="function"&&a.type!=="event"&&a.type!=="error")throw new No(a.type);return`${a.name}(${Ro(a.inputs,{includeName:t})})`}function Ro(a,{includeName:t=!1}={}){return a?a.map(e=>Ew(e,{includeName:t})).join(t?", ":","):""}function Ew(a,{includeName:t}){return a.type.startsWith("tuple")?`(${Ro(a.components,{includeName:t})})${a.type.slice(5)}`:a.type+(t&&a.name?` ${a.name}`:"")}var _n=ne(()=>{"use strict";St()});function lt(a,{strict:t=!0}={}){return!a||typeof a!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(a):a.startsWith("0x")}var bi=ne(()=>{"use strict"});function $e(a){return lt(a,{strict:!1})?Math.ceil((a.length-2)/2):a.length}var qi=ne(()=>{"use strict";bi()});var Jv,eL=ne(()=>{"use strict";Jv="2.9.3"});var tL,xn,iL,Oo=ne(()=>{"use strict";eL();tL=a=>a,xn=a=>a,iL=()=>`viem@${Jv}`});function aL(a,t){return t?.(a)?a:a&&typeof a=="object"&&"cause"in a?aL(a.cause,t):t?null:a}var U,Ge=ne(()=>{"use strict";Oo();U=class a extends Error{constructor(t,e={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:iL()});let i=e.cause instanceof a?e.cause.details:e.cause?.message?e.cause.message:e.details,n=e.cause instanceof a&&e.cause.docsPath||e.docsPath;this.message=[t||"An error occurred.","",...e.metaMessages?[...e.metaMessages,""]:[],...n?[`Docs: https://viem.sh${n}${e.docsSlug?`#${e.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join(`
`),e.cause&&(this.cause=e.cause),this.details=i,this.docsPath=n,this.metaMessages=e.metaMessages,this.shortMessage=t}walk(t){return aL(this,t)}}});var Ho,rr,wn,Di,Uo,Vo,Fo,In,zo,En,or,ba,Go,vc,jo,gi,Mi,Ko,Wo,qo,No,St=ne(()=>{"use strict";_n();qi();Ge();Ho=class extends U{constructor({docsPath:t}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}},rr=class extends U{constructor({docsPath:t}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}},wn=class extends U{constructor({data:t,params:e,size:i}){super([`Data size of ${i} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${Ro(e,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=e,this.size=i}},Di=class extends U{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}},Uo=class extends U{constructor({expectedLength:t,givenLength:e,type:i}){super([`ABI encoding array length mismatch for type ${i}.`,`Expected length: ${t}`,`Given length: ${e}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}},Vo=class extends U{constructor({expectedSize:t,value:e}){super(`Size of bytes "${e}" (bytes${$e(e)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}},Fo=class extends U{constructor({expectedLength:t,givenLength:e}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${e}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}},In=class extends U{constructor(t,{docsPath:e}){super([`Encoded error signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}},zo=class extends U{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}},En=class extends U{constructor(t,{docsPath:e}){super([`Encoded event signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}},or=class extends U{constructor(t,{docsPath:e}={}){super([`Event ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}},ba=class extends U{constructor(t,{docsPath:e}={}){super([`Function ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}},Go=class extends U{constructor(t,{docsPath:e}){super([`Function "${t}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}},vc=class extends U{constructor(t,e){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${t.type}\` in \`${Kt(t.abiItem)}\`, and`,`\`${e.type}\` in \`${Kt(e.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}},jo=class extends U{constructor({expectedSize:t,givenSize:e}){super(`Expected bytes${t}, got bytes${e}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}},gi=class extends U{constructor({abiItem:t,data:e,params:i,size:n}){super([`Data size of ${n} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${Ro(i,{includeName:!0})})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=e,this.params=i,this.size=n}},Mi=class extends U{constructor({abiItem:t,param:e}){super([`Expected a topic for indexed event parameter${e.name?` "${e.name}"`:""} on event "${Kt(t,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}},Ko=class extends U{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}},Wo=class extends U{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}},qo=class extends U{constructor(t){super([`Value "${t}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}},No=class extends U{constructor(t){super([`"${t}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}});var Yo,$o,Xo,_c=ne(()=>{"use strict";Ge();Yo=class extends U{constructor({offset:t,position:e,size:i}){super(`Slice ${e==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${i}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}},$o=class extends U{constructor({size:t,targetSize:e,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${t}) exceeds padding size (${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}},Xo=class extends U{constructor({size:t,targetSize:e,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} is expected to be ${e} ${i} long, but is ${t} ${i} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}});function ja(a,{dir:t,size:e=32}={}){return typeof a=="string"?ga(a,{dir:t,size:e}):Tw(a,{dir:t,size:e})}function ga(a,{dir:t,size:e=32}={}){if(e===null)return a;let i=a.replace("0x","");if(i.length>e*2)throw new $o({size:Math.ceil(i.length/2),targetSize:e,type:"hex"});return`0x${i[t==="right"?"padEnd":"padStart"](e*2,"0")}`}function Tw(a,{dir:t,size:e=32}={}){if(e===null)return a;if(a.length>e)throw new $o({size:a.length,targetSize:e,type:"bytes"});let i=new Uint8Array(e);for(let n=0;n<e;n++){let r=t==="right";i[r?n:e-n-1]=a[r?n:a.length-n-1]}return i}var xc=ne(()=>{"use strict";_c()});var wc,Ic,Ec,Tc=ne(()=>{"use strict";Ge();wc=class extends U{constructor({max:t,min:e,signed:i,size:n,value:r}){super(`Number "${r}" is not in safe ${n?`${n*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${t?`(${e} to ${t})`:`(above ${e})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}},Ic=class extends U{constructor(t){super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}},Ec=class extends U{constructor({givenSize:t,maxSize:e}){super(`Size cannot exceed ${e} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}});function Yi(a,{dir:t="left"}={}){let e=typeof a=="string"?a.replace("0x",""):a,i=0;for(let n=0;n<e.length-1&&e[t==="left"?n:e.length-n-1].toString()==="0";n++)i++;return e=t==="left"?e.slice(i):e.slice(0,e.length-i),typeof a=="string"?(e.length===1&&t==="right"&&(e=`${e}0`),`0x${e.length%2===1?`0${e}`:e}`):e}var Qo=ne(()=>{"use strict"});function ci(a,{size:t}){if($e(a)>t)throw new Ec({givenSize:$e(a),maxSize:t})}function ti(a,t={}){let{signed:e}=t;t.size&&ci(a,{size:t.size});let i=BigInt(a);if(!e)return i;let n=(a.length-2)/2,r=(1n<<BigInt(n)*8n-1n)-1n;return i<=r?i:i-BigInt(`0x${"f".padStart(n*2,"f")}`)-1n}function Ct(a,t={}){return Number(ti(a,t))}var ii=ne(()=>{"use strict";Tc();qi()});function _e(a,t={}){return typeof a=="number"||typeof a=="bigint"?be(a,t):typeof a=="string"?Tn(a,t):typeof a=="boolean"?Zo(a,t):qe(a,t)}function Zo(a,t={}){let e=`0x${Number(a)}`;return typeof t.size=="number"?(ci(e,{size:t.size}),ja(e,{size:t.size})):e}function qe(a,t={}){let e="";for(let n=0;n<a.length;n++)e+=Sw[a[n]];let i=`0x${e}`;return typeof t.size=="number"?(ci(i,{size:t.size}),ja(i,{dir:"right",size:t.size})):i}function be(a,t={}){let{signed:e,size:i}=t,n=BigInt(a),r;i?e?r=(1n<<BigInt(i)*8n-1n)-1n:r=2n**(BigInt(i)*8n)-1n:typeof a=="number"&&(r=BigInt(Number.MAX_SAFE_INTEGER));let o=typeof r=="bigint"&&e?-r-1n:0;if(r&&n>r||n<o){let l=typeof a=="bigint"?"n":"";throw new wc({max:r?`${r}${l}`:void 0,min:`${o}${l}`,signed:e,size:i,value:`${a}${l}`})}let s=`0x${(e&&n<0?(1n<<BigInt(i*8))+BigInt(n):n).toString(16)}`;return i?ja(s,{size:i}):s}function Tn(a,t={}){let e=Cw.encode(a);return qe(e,t)}var Sw,Cw,Me=ne(()=>{"use strict";Tc();xc();ii();Sw=Array.from({length:256},(a,t)=>t.toString(16).padStart(2,"0"));Cw=new TextEncoder});function Wt(a,t={}){return typeof a=="number"||typeof a=="bigint"?Dw(a,t):typeof a=="boolean"?Aw(a,t):lt(a)?ui(a,t):ai(a,t)}function Aw(a,t={}){let e=new Uint8Array(1);return e[0]=Number(a),typeof t.size=="number"?(ci(e,{size:t.size}),ja(e,{size:t.size})):e}function nL(a){if(a>=va.zero&&a<=va.nine)return a-va.zero;if(a>=va.A&&a<=va.F)return a-(va.A-10);if(a>=va.a&&a<=va.f)return a-(va.a-10)}function ui(a,t={}){let e=a;t.size&&(ci(e,{size:t.size}),e=ja(e,{dir:"right",size:t.size}));let i=e.slice(2);i.length%2&&(i=`0${i}`);let n=i.length/2,r=new Uint8Array(n);for(let o=0,s=0;o<n;o++){let l=nL(i.charCodeAt(s++)),c=nL(i.charCodeAt(s++));if(l===void 0||c===void 0)throw new U(`Invalid byte sequence ("${i[s-2]}${i[s-1]}" in "${i}").`);r[o]=l*16+c}return r}function Dw(a,t){let e=be(a,t);return ui(e)}function ai(a,t={}){let e=kw.encode(a);return typeof t.size=="number"?(ci(e,{size:t.size}),ja(e,{dir:"right",size:t.size})):e}var kw,va,Nt=ne(()=>{"use strict";Ge();bi();xc();ii();Me();kw=new TextEncoder;va={zero:48,nine:57,A:65,F:70,a:97,f:102}});function Jo(a){if(!Number.isSafeInteger(a)||a<0)throw new Error(`Wrong positive integer: ${a}`)}function es(a,...t){if(!(a instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(a.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${a.length}`)}function rL(a){if(typeof a!="function"||typeof a.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Jo(a.outputLen),Jo(a.blockLen)}function La(a,t=!0){if(a.destroyed)throw new Error("Hash instance has been destroyed");if(t&&a.finished)throw new Error("Hash#digest() has already been called")}function Sc(a,t){es(a);let e=t.outputLen;if(a.length<e)throw new Error(`digestInto() expects output buffer of length at least ${e}`)}var Cc=ne(()=>{"use strict"});function Mw(a,t=!1){return t?{h:Number(a&kc),l:Number(a>>oL&kc)}:{h:Number(a>>oL&kc)|0,l:Number(a&kc)|0}}function sL(a,t=!1){let e=new Uint32Array(a.length),i=new Uint32Array(a.length);for(let n=0;n<a.length;n++){let{h:r,l:o}=Mw(a[n],t);[e[n],i[n]]=[r,o]}return[e,i]}var kc,oL,lL,cL,uL,pL,mL=ne(()=>{"use strict";kc=BigInt(4294967295),oL=BigInt(32);lL=(a,t,e)=>a<<e|t>>>32-e,cL=(a,t,e)=>t<<e|a>>>32-e,uL=(a,t,e)=>t<<e-32|a>>>64-e,pL=(a,t,e)=>a<<e-32|t>>>64-e});var Ac,dL=ne(()=>{"use strict";Ac=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0});function Pw(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function Wa(a){if(typeof a=="string"&&(a=Pw(a)),!hL(a))throw new Error(`expected Uint8Array, got ${typeof a}`);return a}function yL(...a){let t=new Uint8Array(a.reduce((i,n)=>i+n.length,0)),e=0;return a.forEach(i=>{if(!hL(i))throw new Error("Uint8Array expected");t.set(i,e),e+=i.length}),t}function Mc(a){let t=i=>a().update(Wa(i)).digest(),e=a();return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=()=>a(),t}function bL(a){let t=(i,n)=>a(n).update(Wa(i)).digest(),e=a({});return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=i=>a(i),t}function gL(a=32){if(Ac&&typeof Ac.getRandomValues=="function")return Ac.getRandomValues(new Uint8Array(a));throw new Error("crypto.getRandomValues must be defined")}var hL,fL,Dc,Bi,Bw,Ka,uM,sr=ne(()=>{"use strict";dL();hL=a=>a instanceof Uint8Array,fL=a=>new Uint32Array(a.buffer,a.byteOffset,Math.floor(a.byteLength/4)),Dc=a=>new DataView(a.buffer,a.byteOffset,a.byteLength),Bi=(a,t)=>a<<32-t|a>>>t,Bw=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Bw)throw new Error("Non little-endian hardware is not supported");Ka=class{clone(){return this._cloneInto()}},uM={}.toString});function zw(a,t=24){let e=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let o=0;o<10;o++)e[o]=a[o]^a[o+10]^a[o+20]^a[o+30]^a[o+40];for(let o=0;o<10;o+=2){let s=(o+8)%10,l=(o+2)%10,c=e[l],u=e[l+1],m=vL(c,u,1)^e[s],b=LL(c,u,1)^e[s+1];for(let _=0;_<50;_+=10)a[o+_]^=m,a[o+_+1]^=b}let n=a[2],r=a[3];for(let o=0;o<24;o++){let s=xL[o],l=vL(n,r,s),c=LL(n,r,s),u=_L[o];n=a[u],r=a[u+1],a[u]=l,a[u+1]=c}for(let o=0;o<50;o+=10){for(let s=0;s<10;s++)e[s]=a[o+s];for(let s=0;s<10;s++)a[o+s]^=~e[(s+2)%10]&e[(s+4)%10]}a[0]^=Vw[i],a[1]^=Fw[i]}e.fill(0)}var _L,xL,wL,Rw,ts,Nw,Ow,Hw,Uw,Vw,Fw,vL,LL,Bc,qa,fM,yM,bM,gM,vM,IL,LM,_M,EL,xM,wM,TL=ne(()=>{"use strict";Cc();mL();sr();[_L,xL,wL]=[[],[],[]],Rw=BigInt(0),ts=BigInt(1),Nw=BigInt(2),Ow=BigInt(7),Hw=BigInt(256),Uw=BigInt(113);for(let a=0,t=ts,e=1,i=0;a<24;a++){[e,i]=[i,(2*e+3*i)%5],_L.push(2*(5*i+e)),xL.push((a+1)*(a+2)/2%64);let n=Rw;for(let r=0;r<7;r++)t=(t<<ts^(t>>Ow)*Uw)%Hw,t&Nw&&(n^=ts<<(ts<<BigInt(r))-ts);wL.push(n)}[Vw,Fw]=sL(wL,!0),vL=(a,t,e)=>e>32?uL(a,t,e):lL(a,t,e),LL=(a,t,e)=>e>32?pL(a,t,e):cL(a,t,e);Bc=class a extends Ka{constructor(t,e,i,n=!1,r=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=i,this.enableXOF=n,this.rounds=r,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Jo(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=fL(this.state)}keccak(){zw(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){La(this);let{blockLen:e,state:i}=this;t=Wa(t);let n=t.length;for(let r=0;r<n;){let o=Math.min(e-this.pos,n-r);for(let s=0;s<o;s++)i[this.pos++]^=t[r++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:e,pos:i,blockLen:n}=this;t[i]^=e,e&128&&i===n-1&&this.keccak(),t[n-1]^=128,this.keccak()}writeInto(t){La(this,!1),es(t),this.finish();let e=this.state,{blockLen:i}=this;for(let n=0,r=t.length;n<r;){this.posOut>=i&&this.keccak();let o=Math.min(i-this.posOut,r-n);t.set(e.subarray(this.posOut,this.posOut+o),n),this.posOut+=o,n+=o}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Jo(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(Sc(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:e,suffix:i,outputLen:n,rounds:r,enableXOF:o}=this;return t||(t=new a(e,i,n,o,r)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=r,t.suffix=i,t.outputLen=n,t.enableXOF=o,t.destroyed=this.destroyed,t}},qa=(a,t,e)=>Mc(()=>new Bc(t,a,e)),fM=qa(6,144,224/8),yM=qa(6,136,256/8),bM=qa(6,104,384/8),gM=qa(6,72,512/8),vM=qa(1,144,224/8),IL=qa(1,136,256/8),LM=qa(1,104,384/8),_M=qa(1,72,512/8),EL=(a,t,e)=>bL((i={})=>new Bc(t,a,i.dkLen===void 0?e:i.dkLen,!0)),xM=EL(31,168,128/8),wM=EL(31,136,256/8)});function gt(a,t){let e=t||"hex",i=IL(lt(a,{strict:!1})?Wt(a):a);return e==="bytes"?i:_e(i)}var Ya=ne(()=>{"use strict";TL();bi();Nt();Me()});function SL(a){return Gw(a)}var Gw,CL=ne(()=>{"use strict";Nt();Ya();Gw=a=>gt(Wt(a))});function kL(a){let t=!0,e="",i=0,n="",r=!1;for(let o=0;o<a.length;o++){let s=a[o];if(["(",")",","].includes(s)&&(t=!0),s==="("&&i++,s===")"&&i--,!!t){if(i===0){if(s===" "&&["event","function",""].includes(n))n="";else if(n+=s,s===")"){r=!0;break}continue}if(s===" "){a[o-1]!==","&&e!==","&&e!==",("&&(e="",t=!1);continue}n+=s,e+=s}}if(!r)throw new U("Unable to normalize signature.");return n}var AL=ne(()=>{"use strict";Ge()});var DL,ML=ne(()=>{"use strict";Zv();AL();DL=a=>{let t=(()=>typeof a=="string"?a:jb(a))();return kL(t)}});function Pc(a){return SL(DL(a))}var Kb=ne(()=>{"use strict";CL();ML()});var lr,Rc=ne(()=>{"use strict";Kb();lr=Pc});var nt,$i=ne(()=>{"use strict";Ge();nt=class extends U{constructor({address:t}){super(`Address "${t}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}});var Nc,BL=ne(()=>{"use strict";Nc=class extends Map{constructor(t){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=t}set(t,e){return super.set(t,e),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}});function Sn(a,t){let e=t?`${t}${a.toLowerCase()}`:a.substring(2).toLowerCase(),i=gt(ai(e),"bytes"),n=(t?e.substring(`${t}0x`.length):e).split("");for(let r=0;r<40;r+=2)i[r>>1]>>4>=8&&n[r]&&(n[r]=n[r].toUpperCase()),(i[r>>1]&15)>=8&&n[r+1]&&(n[r+1]=n[r+1].toUpperCase());return`0x${n.join("")}`}function PL(a,t){if(!tt(a))throw new nt({address:a});return Sn(a,t)}var is=ne(()=>{"use strict";$i();Nt();Ya();Pi()});function tt(a,{strict:t=!0}={}){if(Wb.has(a))return Wb.get(a);let e=(()=>jw.test(a)?a.toLowerCase()===a?!0:t?Sn(a)===a:!0:!1)();return Wb.set(a,e),e}var jw,Wb,Pi=ne(()=>{"use strict";BL();is();jw=/^0x[a-fA-F0-9]{40}$/,Wb=new Nc(8192)});function qt(a){return typeof a[0]=="string"?Ri(a):Kw(a)}function Kw(a){let t=0;for(let n of a)t+=n.length;let e=new Uint8Array(t),i=0;for(let n of a)e.set(n,i),i+=n.length;return e}function Ri(a){return`0x${a.reduce((t,e)=>t+e.replace("0x",""),"")}`}var Xi=ne(()=>{"use strict"});function _a(a,t,e,{strict:i}={}){return lt(a,{strict:!1})?Ww(a,t,e,{strict:i}):qb(a,t,e,{strict:i})}function RL(a,t){if(typeof t=="number"&&t>0&&t>$e(a)-1)throw new Yo({offset:t,position:"start",size:$e(a)})}function NL(a,t,e){if(typeof t=="number"&&typeof e=="number"&&$e(a)!==e-t)throw new Yo({offset:e,position:"end",size:$e(a)})}function qb(a,t,e,{strict:i}={}){RL(a,t);let n=a.slice(t,e);return i&&NL(n,t,e),n}function Ww(a,t,e,{strict:i}={}){RL(a,t);let n=`0x${a.replace("0x","").slice((t??0)*2,(e??a.length)*2)}`;return i&&NL(n,t,e),n}var cr=ne(()=>{"use strict";_c();bi();qi()});function Ni(a,t){if(a.length!==t.length)throw new Fo({expectedLength:a.length,givenLength:t.length});let e=qw({params:a,values:t}),i=$b(e);return i.length===0?"0x":i}function qw({params:a,values:t}){let e=[];for(let i=0;i<a.length;i++)e.push(Yb({param:a[i],value:t[i]}));return e}function Yb({param:a,value:t}){let e=Oc(a.type);if(e){let[i,n]=e;return $w(t,{length:i,param:{...a,type:n}})}if(a.type==="tuple")return eI(t,{param:a});if(a.type==="address")return Yw(t);if(a.type==="bool")return Qw(t);if(a.type.startsWith("uint")||a.type.startsWith("int")){let i=a.type.startsWith("int");return Zw(t,{signed:i})}if(a.type.startsWith("bytes"))return Xw(t,{param:a});if(a.type==="string")return Jw(t);throw new Ko(a.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function $b(a){let t=0;for(let r=0;r<a.length;r++){let{dynamic:o,encoded:s}=a[r];o?t+=32:t+=$e(s)}let e=[],i=[],n=0;for(let r=0;r<a.length;r++){let{dynamic:o,encoded:s}=a[r];o?(e.push(be(t+n,{size:32})),i.push(s),n+=$e(s)):e.push(s)}return qt([...e,...i])}function Yw(a){if(!tt(a))throw new nt({address:a});return{dynamic:!1,encoded:ga(a.toLowerCase())}}function $w(a,{length:t,param:e}){let i=t===null;if(!Array.isArray(a))throw new qo(a);if(!i&&a.length!==t)throw new Uo({expectedLength:t,givenLength:a.length,type:`${e.type}[${t}]`});let n=!1,r=[];for(let o=0;o<a.length;o++){let s=Yb({param:e,value:a[o]});s.dynamic&&(n=!0),r.push(s)}if(i||n){let o=$b(r);if(i){let s=be(r.length,{size:32});return{dynamic:!0,encoded:r.length>0?qt([s,o]):s}}if(n)return{dynamic:!0,encoded:o}}return{dynamic:!1,encoded:qt(r.map(({encoded:o})=>o))}}function Xw(a,{param:t}){let[,e]=t.type.split("bytes"),i=$e(a);if(!e){let n=a;return i%32!==0&&(n=ga(n,{dir:"right",size:Math.ceil((a.length-2)/2/32)*32})),{dynamic:!0,encoded:qt([ga(be(i,{size:32})),n])}}if(i!==parseInt(e))throw new Vo({expectedSize:parseInt(e),value:a});return{dynamic:!1,encoded:ga(a,{dir:"right"})}}function Qw(a){if(typeof a!="boolean")throw new U(`Invalid boolean value: "${a}" (type: ${typeof a}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:ga(Zo(a))}}function Zw(a,{signed:t}){return{dynamic:!1,encoded:be(a,{size:32,signed:t})}}function Jw(a){let t=Tn(a),e=Math.ceil($e(t)/32),i=[];for(let n=0;n<e;n++)i.push(ga(_a(t,n*32,(n+1)*32),{dir:"right"}));return{dynamic:!0,encoded:qt([ga(be($e(t),{size:32})),...i])}}function eI(a,{param:t}){let e=!1,i=[];for(let n=0;n<t.components.length;n++){let r=t.components[n],o=Array.isArray(a)?n:r.name,s=Yb({param:r,value:a[o]});i.push(s),s.dynamic&&(e=!0)}return{dynamic:e,encoded:e?$b(i):qt(i.map(({encoded:n})=>n))}}function Oc(a){let t=a.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}var Cn=ne(()=>{"use strict";St();$i();Ge();Pi();Xi();xc();qi();cr();Me()});var ur,Hc=ne(()=>{"use strict";cr();Kb();ur=a=>_a(Pc(a),0,4)});function Qi(a){let{abi:t,args:e=[],name:i}=a,n=lt(i,{strict:!1}),r=t.filter(s=>n?s.type==="function"?ur(s)===i:s.type==="event"?lr(s)===i:!1:"name"in s&&s.name===i);if(r.length===0)return;if(r.length===1)return r[0];let o;for(let s of r){if(!("inputs"in s))continue;if(!e||e.length===0){if(!s.inputs||s.inputs.length===0)return s;continue}if(!s.inputs||s.inputs.length===0||s.inputs.length!==e.length)continue;if(e.every((c,u)=>{let m="inputs"in s&&s.inputs[u];return m?Xb(c,m):!1})){if(o&&"inputs"in o&&o.inputs){let c=OL(s.inputs,o.inputs,e);if(c)throw new vc({abiItem:s,type:c[0]},{abiItem:o,type:c[1]})}o=s}}return o||r[0]}function Xb(a,t){let e=typeof a,i=t.type;switch(i){case"address":return tt(a,{strict:!1});case"bool":return e==="boolean";case"function":return e==="string";case"string":return e==="string";default:return i==="tuple"&&"components"in t?Object.values(t.components).every((n,r)=>Xb(Object.values(a)[r],n)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)?e==="number"||e==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)?e==="string"||a instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)?Array.isArray(a)&&a.every(n=>Xb(n,{...t,type:i.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function OL(a,t,e){for(let i in a){let n=a[i],r=t[i];if(n.type==="tuple"&&r.type==="tuple"&&"components"in n&&"components"in r)return OL(n.components,r.components,e[i]);let o=[n.type,r.type];if((()=>o.includes("address")&&o.includes("bytes20")?!0:o.includes("address")&&o.includes("string")?tt(e[i],{strict:!1}):o.includes("address")&&o.includes("bytes")?tt(e[i],{strict:!1}):!1)())return o}}var pr=ne(()=>{"use strict";St();bi();Pi();Rc();Hc()});function rt(a){return typeof a=="string"?{address:a,type:"json-rpc"}:a}var pi=ne(()=>{"use strict"});function FL(a){let{abi:t,args:e,functionName:i}=a,n=t[0];if(i){let r=Qi({abi:t,args:e,name:i});if(!r)throw new ba(i,{docsPath:VL});n=r}if(n.type!=="function")throw new ba(void 0,{docsPath:VL});return{abi:[n],functionName:ur(Kt(n))}}var VL,zL=ne(()=>{"use strict";St();Hc();_n();pr();VL="/docs/contract/encodeFunctionData"});function Ot(a){let{args:t}=a,{abi:e,functionName:i}=(()=>a.abi.length===1&&a.functionName?.startsWith("0x")?a:FL(a))(),n=e[0],r=i,o="inputs"in n&&n.inputs?Ni(n.inputs,t??[]):void 0;return Ri([r,o??"0x"])}var xa=ne(()=>{"use strict";Xi();Cn();zL()});var Vc,GL,jL,Fc=ne(()=>{"use strict";Vc={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},GL={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},jL={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}});var as,mr,zc,Qb=ne(()=>{"use strict";Ge();as=class extends U{constructor({offset:t}){super(`Offset \`${t}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}},mr=class extends U{constructor({length:t,position:e}){super(`Position \`${e}\` is out of bounds (\`0 < position < ${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}},zc=class extends U{constructor({count:t,limit:e}){super(`Recursive read limit of \`${e}\` exceeded (recursive read count: \`${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}});function dr(a,{recursiveReadLimit:t=8192}={}){let e=Object.create(tI);return e.bytes=a,e.dataView=new DataView(a.buffer,a.byteOffset,a.byteLength),e.positionReadCount=new Map,e.recursiveReadLimit=t,e}var tI,Gc=ne(()=>{"use strict";Qb();tI={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new zc({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(a){if(a<0||a>this.bytes.length-1)throw new mr({length:this.bytes.length,position:a})},decrementPosition(a){if(a<0)throw new as({offset:a});let t=this.position-a;this.assertPosition(t),this.position=t},getReadCount(a){return this.positionReadCount.get(a||this.position)||0},incrementPosition(a){if(a<0)throw new as({offset:a});let t=this.position+a;this.assertPosition(t),this.position=t},inspectByte(a){let t=a??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(a,t){let e=t??this.position;return this.assertPosition(e+a-1),this.bytes.subarray(e,e+a)},inspectUint8(a){let t=a??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(a){let t=a??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(a){let t=a??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(a){let t=a??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushBytes(a){this.assertPosition(this.position+a.length-1),this.bytes.set(a,this.position),this.position+=a.length},pushUint8(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushUint16(a){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,a),this.position+=2},pushUint24(a){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,a>>8),this.dataView.setUint8(this.position+2,a&255),this.position+=3},pushUint32(a){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,a),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let a=this.inspectByte();return this.position++,a},readBytes(a,t){this.assertReadLimit(),this._touch();let e=this.inspectBytes(a);return this.position+=t??a,e},readUint8(){this.assertReadLimit(),this._touch();let a=this.inspectUint8();return this.position+=1,a},readUint16(){this.assertReadLimit(),this._touch();let a=this.inspectUint16();return this.position+=2,a},readUint24(){this.assertReadLimit(),this._touch();let a=this.inspectUint24();return this.position+=3,a},readUint32(){this.assertReadLimit(),this._touch();let a=this.inspectUint32();return this.position+=4,a},get remaining(){return this.bytes.length-this.position},setPosition(a){let t=this.position;return this.assertPosition(a),this.position=a,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let a=this.getReadCount();this.positionReadCount.set(this.position,a+1),a>0&&this.recursiveReadCount++}}});function KL(a,t={}){typeof t.size<"u"&&ci(a,{size:t.size});let e=qe(a,t);return ti(e,t)}function WL(a,t={}){let e=a;if(typeof t.size<"u"&&(ci(e,{size:t.size}),e=Yi(e)),e.length>1||e[0]>1)throw new Ic(e);return!!e[0]}function Zi(a,t={}){typeof t.size<"u"&&ci(a,{size:t.size});let e=qe(a,t);return Ct(e,t)}function qL(a,t={}){let e=a;return typeof t.size<"u"&&(ci(e,{size:t.size}),e=Yi(e,{dir:"right"})),new TextDecoder().decode(e)}var YL=ne(()=>{"use strict";Tc();Qo();ii();Me()});function kn(a,t){let e=typeof t=="string"?ui(t):t,i=dr(e);if($e(e)===0&&a.length>0)throw new Di;if($e(t)&&$e(t)<32)throw new wn({data:typeof t=="string"?t:qe(t),params:a,size:$e(t)});let n=0,r=[];for(let o=0;o<a.length;++o){let s=a[o];i.setPosition(n);let[l,c]=hr(i,s,{staticPosition:0});n+=c,r.push(l)}return r}function hr(a,t,{staticPosition:e}){let i=Oc(t.type);if(i){let[n,r]=i;return aI(a,{...t,type:r},{length:n,staticPosition:e})}if(t.type==="tuple")return sI(a,t,{staticPosition:e});if(t.type==="address")return iI(a);if(t.type==="bool")return nI(a);if(t.type.startsWith("bytes"))return rI(a,t,{staticPosition:e});if(t.type.startsWith("uint")||t.type.startsWith("int"))return oI(a,t);if(t.type==="string")return lI(a,{staticPosition:e});throw new Wo(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function iI(a){let t=a.readBytes(32);return[Sn(qe(qb(t,-20))),32]}function aI(a,t,{length:e,staticPosition:i}){if(!e){let o=Zi(a.readBytes(Zb)),s=i+o,l=s+$L;a.setPosition(s);let c=Zi(a.readBytes($L)),u=ns(t),m=0,b=[];for(let _=0;_<c;++_){a.setPosition(l+(u?_*32:m));let[w,v]=hr(a,t,{staticPosition:l});m+=v,b.push(w)}return a.setPosition(i+32),[b,32]}if(ns(t)){let o=Zi(a.readBytes(Zb)),s=i+o,l=[];for(let c=0;c<e;++c){a.setPosition(s+c*32);let[u]=hr(a,t,{staticPosition:s});l.push(u)}return a.setPosition(i+32),[l,32]}let n=0,r=[];for(let o=0;o<e;++o){let[s,l]=hr(a,t,{staticPosition:i+n});n+=l,r.push(s)}return[r,n]}function nI(a){return[WL(a.readBytes(32),{size:32}),32]}function rI(a,t,{staticPosition:e}){let[i,n]=t.type.split("bytes");if(!n){let o=Zi(a.readBytes(32));a.setPosition(e+o);let s=Zi(a.readBytes(32));if(s===0)return a.setPosition(e+32),["0x",32];let l=a.readBytes(s);return a.setPosition(e+32),[qe(l),32]}return[qe(a.readBytes(parseInt(n),32)),32]}function oI(a,t){let e=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256"),n=a.readBytes(32);return[i>48?KL(n,{signed:e}):Zi(n,{signed:e}),32]}function sI(a,t,{staticPosition:e}){let i=t.components.length===0||t.components.some(({name:o})=>!o),n=i?[]:{},r=0;if(ns(t)){let o=Zi(a.readBytes(Zb)),s=e+o;for(let l=0;l<t.components.length;++l){let c=t.components[l];a.setPosition(s+r);let[u,m]=hr(a,c,{staticPosition:s});r+=m,n[i?l:c?.name]=u}return a.setPosition(e+32),[n,32]}for(let o=0;o<t.components.length;++o){let s=t.components[o],[l,c]=hr(a,s,{staticPosition:e});n[i?o:s?.name]=l,r+=c}return[n,r]}function lI(a,{staticPosition:t}){let e=Zi(a.readBytes(32)),i=t+e;a.setPosition(i);let n=Zi(a.readBytes(32));if(n===0)return a.setPosition(t+32),["",32];let r=a.readBytes(n,32),o=qL(Yi(r));return a.setPosition(t+32),[o,32]}function ns(a){let{type:t}=a;if(t==="string"||t==="bytes"||t.endsWith("[]"))return!0;if(t==="tuple")return a.components?.some(ns);let e=Oc(a.type);return!!(e&&ns({...a,type:e[1]}))}var $L,Zb,jc=ne(()=>{"use strict";St();is();Gc();qi();cr();Qo();YL();Nt();Me();Cn();$L=32,Zb=32});function Kc(a){let{abi:t,data:e}=a,i=_a(e,0,4);if(i==="0x")throw new Di;let r=[...t||[],GL,jL].find(o=>o.type==="error"&&i===ur(Kt(o)));if(!r)throw new In(i,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:r,args:"inputs"in r&&r.inputs&&r.inputs.length>0?kn(r.inputs,_a(e,4)):void 0,errorName:r.name}}var Jb=ne(()=>{"use strict";Fc();St();cr();Hc();jc();_n()});var Xe,mi=ne(()=>{"use strict";Xe=(a,t,e)=>JSON.stringify(a,(i,n)=>{let r=typeof n=="bigint"?n.toString():n;return typeof t=="function"?t(i,r):r},e)});function eg({abiItem:a,args:t,includeFunctionName:e=!0,includeName:i=!1}){if("name"in a&&"inputs"in a&&a.inputs)return`${e?a.name:""}(${a.inputs.map((n,r)=>`${i&&n.name?`${n.name}: `:""}${typeof t[r]=="object"?Xe(t[r]):t[r]}`).join(", ")})`}var XL=ne(()=>{"use strict";mi()});var Wc,QL,qc=ne(()=>{"use strict";Wc={gwei:9,wei:18},QL={ether:-9,wei:9}});function Xa(a,t){let e=a.toString(),i=e.startsWith("-");i&&(e=e.slice(1)),e=e.padStart(t,"0");let[n,r]=[e.slice(0,e.length-t),e.slice(e.length-t)];return r=r.replace(/(0+)$/,""),`${i?"-":""}${n||"0"}${r?`.${r}`:""}`}var Yc=ne(()=>{"use strict"});function fr(a,t="wei"){return Xa(a,Wc[t])}var $c=ne(()=>{"use strict";qc();Yc()});function It(a,t="wei"){return Xa(a,QL[t])}var yr=ne(()=>{"use strict";qc();Yc()});function ZL(a){return a.reduce((t,{slot:e,value:i})=>`${t}        ${e}: ${i}
`,"")}function JL(a){return a.reduce((t,{address:e,...i})=>{let n=`${t}    ${e}:
`;return i.nonce&&(n+=`      nonce: ${i.nonce}
`),i.balance&&(n+=`      balance: ${i.balance}
`),i.code&&(n+=`      code: ${i.code}
`),i.state&&(n+=`      state:
`,n+=ZL(i.state)),i.stateDiff&&(n+=`      stateDiff:
`,n+=ZL(i.stateDiff)),n},`  State Override:
`).slice(0,-1)}var Xc,Qc,tg=ne(()=>{"use strict";Ge();Xc=class extends U{constructor({address:t}){super(`State for account "${t}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}},Qc=class extends U{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}});function An(a){let t=Object.entries(a).map(([i,n])=>n===void 0||n===!1?null:[i,n]).filter(Boolean),e=t.reduce((i,[n])=>Math.max(i,n.length),0);return t.map(([i,n])=>`  ${`${i}:`.padEnd(e+1)}  ${n}`).join(`
`)}var Zc,Jc,eu,tu,iu,br,gr,au,Hi=ne(()=>{"use strict";$c();yr();Ge();Zc=class extends U{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}},Jc=class extends U{constructor({v:t}){super(`Invalid \`v\` value "${t}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}},eu=class extends U{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",An(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}},tu=class extends U{constructor({storageKey:t}){super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}},iu=class extends U{constructor(t,{account:e,docsPath:i,chain:n,data:r,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:m,value:b}){let _=An({chain:n&&`${n?.name} (id: ${n?.id})`,from:e?.address,to:m,value:typeof b<"u"&&`${fr(b)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:r,gas:o,gasPrice:typeof s<"u"&&`${It(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${It(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${It(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",_].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}},br=class extends U{constructor({blockHash:t,blockNumber:e,blockTag:i,hash:n,index:r}){let o="Transaction";i&&r!==void 0&&(o=`Transaction at block time "${i}" at index "${r}"`),t&&r!==void 0&&(o=`Transaction at block hash "${t}" at index "${r}"`),e&&r!==void 0&&(o=`Transaction at block number "${e}" at index "${r}"`),n&&(o=`Transaction with hash "${n}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}},gr=class extends U{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}},au=class extends U{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}});var Dn,rs,Bt,os,wa,Qa=ne(()=>{"use strict";pi();Fc();Jb();_n();XL();pr();$c();yr();St();Ge();tg();Hi();Oo();Dn=class extends U{constructor(t,{account:e,docsPath:i,chain:n,data:r,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:m,value:b,stateOverride:_}){let w=e?rt(e):void 0,v=An({from:w?.address,to:m,value:typeof b<"u"&&`${fr(b)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:r,gas:o,gasPrice:typeof s<"u"&&`${It(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${It(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${It(c)} gwei`,nonce:u});_&&(v+=`
${JL(_)}`),super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}},rs=class extends U{constructor(t,{abi:e,args:i,contractAddress:n,docsPath:r,functionName:o,sender:s}){let l=Qi({abi:e,args:i,name:o}),c=l?eg({abiItem:l,args:i,includeFunctionName:!1,includeName:!1}):void 0,u=l?Kt(l,{includeName:!0}):void 0,m=An({address:n&&tL(n),function:u,args:c&&c!=="()"&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${c}`,sender:s});super(t.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",m].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=e,this.args=i,this.cause=t,this.contractAddress=n,this.functionName=o,this.sender=s}},Bt=class extends U{constructor({abi:t,data:e,functionName:i,message:n}){let r,o,s,l;if(e&&e!=="0x")try{o=Kc({abi:t,data:e});let{abiItem:u,errorName:m,args:b}=o;if(m==="Error")l=b[0];else if(m==="Panic"){let[_]=b;l=Vc[_]}else{let _=u?Kt(u,{includeName:!0}):void 0,w=u&&b?eg({abiItem:u,args:b,includeFunctionName:!1,includeName:!1}):void 0;s=[_?`Error: ${_}`:"",w&&w!=="()"?`       ${[...Array(m?.length??0).keys()].map(()=>" ").join("")}${w}`:""]}}catch(u){r=u}else n&&(l=n);let c;r instanceof In&&(c=r.signature,s=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${i}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${i}" reverted.`,{cause:r,metaMessages:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=o,this.reason=l,this.signature=c}},os=class extends U{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}},wa=class extends U{constructor({data:t,message:e}){super(e||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}});var vi,vr,ss,Lr=ne(()=>{"use strict";mi();Ge();Oo();vi=class extends U{constructor({body:t,details:e,headers:i,status:n,url:r}){super("HTTP request failed.",{details:e,metaMessages:[n&&`Status: ${n}`,`URL: ${xn(r)}`,t&&`Request body: ${Xe(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=i,this.status=n,this.url=r}},vr=class extends U{constructor({body:t,error:e,url:i}){super("RPC Request failed.",{cause:e,details:e.message,metaMessages:[`URL: ${xn(i)}`,`Request body: ${Xe(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=e.code}},ss=class extends U{constructor({body:t,url:e}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${xn(e)}`,`Request body: ${Xe(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}});var cI,Ht,Za,_r,xr,wr,Ir,Ia,Ji,Er,Tr,Sr,Cr,Mn,kr,Bn,Ar,Dr,Mr,Br,Pr,nu,ls=ne(()=>{"use strict";Ge();Lr();cI=-1,Ht=class extends U{constructor(t,{code:e,docsPath:i,metaMessages:n,shortMessage:r}){super(r,{cause:t,docsPath:i,metaMessages:n||t?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof vr?t.code:e??cI}},Za=class extends Ht{constructor(t,e){super(t,e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e.data}},_r=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}};Object.defineProperty(_r,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});xr=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}};Object.defineProperty(xr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});wr=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}};Object.defineProperty(wr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});Ir=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}};Object.defineProperty(Ir,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});Ia=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}};Object.defineProperty(Ia,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});Ji=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}};Object.defineProperty(Ji,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});Er=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}};Object.defineProperty(Er,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});Tr=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}};Object.defineProperty(Tr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});Sr=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}};Object.defineProperty(Sr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});Cr=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}};Object.defineProperty(Cr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});Mn=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}};Object.defineProperty(Mn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});kr=class a extends Ht{constructor(t){super(t,{code:a.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}};Object.defineProperty(kr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});Bn=class a extends Za{constructor(t){super(t,{code:a.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}};Object.defineProperty(Bn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});Ar=class a extends Za{constructor(t){super(t,{code:a.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}};Object.defineProperty(Ar,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});Dr=class a extends Za{constructor(t){super(t,{code:a.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}};Object.defineProperty(Dr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});Mr=class a extends Za{constructor(t){super(t,{code:a.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}};Object.defineProperty(Mr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});Br=class a extends Za{constructor(t){super(t,{code:a.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}};Object.defineProperty(Br,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});Pr=class a extends Za{constructor(t){super(t,{code:a.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}};Object.defineProperty(Pr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});nu=class extends Ht{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}});var Ta,Li,Rr,Nr,Or,Hr,Ur,Vr,Fr,zr,ea,ta,Pn=ne(()=>{"use strict";yr();Ge();Ta=class extends U{constructor({cause:t,message:e}={}){let i=e?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}};Object.defineProperty(Ta,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Ta,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});Li=class extends U{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${It(e)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}};Object.defineProperty(Li,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});Rr=class extends U{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${e?` = ${It(e)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}};Object.defineProperty(Rr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});Nr=class extends U{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}};Object.defineProperty(Nr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});Or=class extends U{constructor({cause:t,nonce:e}={}){super([`Nonce provided for the transaction ${e?`(${e}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}};Object.defineProperty(Or,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});Hr=class extends U{constructor({cause:t,nonce:e}={}){super(`Nonce provided for the transaction ${e?`(${e}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}};Object.defineProperty(Hr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});Ur=class extends U{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}};Object.defineProperty(Ur,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});Vr=class extends U{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}};Object.defineProperty(Vr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});Fr=class extends U{constructor({cause:t,gas:e}={}){super(`The amount of gas ${e?`(${e}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}};Object.defineProperty(Fr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});zr=class extends U{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}};Object.defineProperty(zr,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});ea=class extends U{constructor({cause:t,maxPriorityFeePerGas:e,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${e?` = ${It(e)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${It(i)} gwei`:""}).`].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}};Object.defineProperty(ea,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});ta=class extends U{constructor({cause:t}){super(`An error occurred while executing: ${t?.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}});function Gr(a,t){let e=(a.details||"").toLowerCase(),i=a instanceof U?a.walk(n=>n.code===Ta.code):a;return i instanceof U?new Ta({cause:a,message:i.details}):Ta.nodeMessage.test(e)?new Ta({cause:a,message:a.details}):Li.nodeMessage.test(e)?new Li({cause:a,maxFeePerGas:t?.maxFeePerGas}):Rr.nodeMessage.test(e)?new Rr({cause:a,maxFeePerGas:t?.maxFeePerGas}):Nr.nodeMessage.test(e)?new Nr({cause:a,nonce:t?.nonce}):Or.nodeMessage.test(e)?new Or({cause:a,nonce:t?.nonce}):Hr.nodeMessage.test(e)?new Hr({cause:a,nonce:t?.nonce}):Ur.nodeMessage.test(e)?new Ur({cause:a}):Vr.nodeMessage.test(e)?new Vr({cause:a,gas:t?.gas}):Fr.nodeMessage.test(e)?new Fr({cause:a,gas:t?.gas}):zr.nodeMessage.test(e)?new zr({cause:a}):ea.nodeMessage.test(e)?new ea({cause:a,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new ta({cause:a})}var ou=ne(()=>{"use strict";Ge();Pn()});function jr(a,{format:t}){if(!t)return{};let e={};function i(r){let o=Object.keys(r);for(let s of o)s in a&&(e[s]=a[s]),r[s]&&typeof r[s]=="object"&&!Array.isArray(r[s])&&i(r[s])}let n=t(a||{});return i(n),e}var su=ne(()=>{"use strict"});function Kr(a,t){return({exclude:e,format:i})=>({exclude:e,format:n=>{let r=t(n);if(e)for(let o of e)delete r[o];return{...r,...i(n)}},type:a})}var lu=ne(()=>{"use strict"});function Ja(a){let t={...a};return typeof a.blobs<"u"&&typeof a.blobs[0]!="string"&&(t.blobs=a.blobs.map(e=>qe(e))),typeof a.gas<"u"&&(t.gas=be(a.gas)),typeof a.gasPrice<"u"&&(t.gasPrice=be(a.gasPrice)),typeof a.maxFeePerBlobGas<"u"&&(t.maxFeePerBlobGas=be(a.maxFeePerBlobGas)),typeof a.maxFeePerGas<"u"&&(t.maxFeePerGas=be(a.maxFeePerGas)),typeof a.maxPriorityFeePerGas<"u"&&(t.maxPriorityFeePerGas=be(a.maxPriorityFeePerGas)),typeof a.nonce<"u"&&(t.nonce=be(a.nonce)),typeof a.type<"u"&&(t.type=pI[a.type]),typeof a.value<"u"&&(t.value=be(a.value)),t}var pI,cs=ne(()=>{"use strict";Me();pI={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"}});function ia(a){let{account:t,gasPrice:e,maxFeePerGas:i,maxPriorityFeePerGas:n,to:r}=a,o=t?rt(t):void 0;if(o&&!tt(o.address))throw new nt({address:o.address});if(r&&!tt(r))throw new nt({address:r});if(typeof e<"u"&&(typeof i<"u"||typeof n<"u"))throw new Zc;if(i&&i>2n**256n-1n)throw new Li({maxFeePerGas:i});if(n&&i&&n>i)throw new ea({maxFeePerGas:i,maxPriorityFeePerGas:n})}var Wr=ne(()=>{"use strict";pi();$i();Pn();Hi();Pi()});function _i(a){let{abi:t,args:e,functionName:i,data:n}=a,r=t[0];if(i){let s=Qi({abi:t,args:e,name:i});if(!s)throw new ba(i,{docsPath:ng});r=s}if(r.type!=="function")throw new ba(void 0,{docsPath:ng});if(!r.outputs)throw new Go(r.name,{docsPath:ng});let o=kn(r.outputs,n);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}var ng,On=ne(()=>{"use strict";St();jc();pr();ng="/docs/contract/decodeFunctionResult"});var ps,s_,fu,l_,rg,og,c_,Hn=ne(()=>{"use strict";ps=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],s_=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],fu=[...s_,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],l_=[...s_,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],rg=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],og=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],c_=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]});var u_,p_=ne(()=>{"use strict";u_="0x82ad56cb"});var Un,yu,bu,ms,Zr,ds=ne(()=>{"use strict";Ge();Un=class extends U{constructor({blockNumber:t,chain:e,contract:i}){super(`Chain "${e.name}" does not support contract "${i.name}".`,{metaMessages:["This could be due to any of the following:",...t&&i.blockCreated&&i.blockCreated>t?[`- The contract "${i.name}" was not deployed until block ${i.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${i.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}},yu=class extends U{constructor({chain:t,currentChainId:e}){super(`The current chain of the wallet (id: ${e}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${e}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}},bu=class extends U{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}},ms=class extends U{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}},Zr=class extends U{constructor({chainId:t}){super(typeof t=="number"?`Chain ID "${t}" is invalid.`:"Chain ID is invalid."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}});function xi({blockNumber:a,chain:t,contract:e}){let i=t?.contracts?.[e];if(!i)throw new Un({chain:t,contract:{name:e}});if(a&&i.blockCreated&&i.blockCreated>a)throw new Un({blockNumber:a,chain:t,contract:{name:e,blockCreated:i.blockCreated}});return i.address}var Vn=ne(()=>{"use strict";ds()});function m_(a,{docsPath:t,...e}){let i=(()=>{let n=Gr(a,e);return n instanceof ta?a:n})();return new Dn(i,{docsPath:t,...e})}var d_=ne(()=>{"use strict";Qa();Pn();ou()});function gu({fn:a,id:t,shouldSplitBatch:e,wait:i=0,sort:n}){let r=async()=>{let u=l();o();let m=u.map(({args:b})=>b);m.length!==0&&a(m).then(b=>{n&&Array.isArray(b)&&b.sort(n);for(let _=0;_<u.length;_++){let{pendingPromise:w}=u[_];w.resolve?.([b[_],b])}}).catch(b=>{for(let _=0;_<u.length;_++){let{pendingPromise:w}=u[_];w.reject?.(b)}})},o=()=>sg.delete(t),s=()=>l().map(({args:u})=>u),l=()=>sg.get(t)||[],c=u=>sg.set(t,[...l(),u]);return{flush:o,async schedule(u){let m={},b=new Promise((v,E)=>{m.resolve=v,m.reject=E});return e?.([...s(),u])&&r(),l().length>0?(c({args:u,pendingPromise:m}),b):(c({args:u,pendingPromise:m}),setTimeout(r,i),b)}}}var sg,lg=ne(()=>{"use strict";sg=new Map});var vu,Lu,_u,h_=ne(()=>{"use strict";mi();Ge();Oo();vu=class extends U{constructor({callbackSelector:t,cause:e,data:i,extraData:n,sender:r,urls:o}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map(s=>`    ${xn(s)}`)],`  Sender: ${r}`,`  Data: ${i}`,`  Callback selector: ${t}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}},Lu=class extends U{constructor({result:t,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${xn(e)}`,`Response: ${Xe(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}},_u=class extends U{constructor({sender:t,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}});function f_(a,t){if(!tt(a,{strict:!1}))throw new nt({address:a});if(!tt(t,{strict:!1}))throw new nt({address:t});return a.toLowerCase()===t.toLowerCase()}var y_=ne(()=>{"use strict";$i();Pi()});var v_={};jv(v_,{ccipRequest:()=>g_,offchainLookup:()=>hI,offchainLookupAbiItem:()=>b_,offchainLookupSignature:()=>dI});async function hI(a,{blockNumber:t,blockTag:e,data:i,to:n}){let{args:r}=Kc({data:i,abi:[b_]}),[o,s,l,c,u]=r,{ccipRead:m}=a,b=m&&typeof m?.request=="function"?m.request:g_;try{if(!f_(n,o))throw new _u({sender:o,to:n});let _=await b({data:l,sender:o,urls:s}),{data:w}=await ra(a,{blockNumber:t,blockTag:e,data:qt([c,Ni([{type:"bytes"},{type:"bytes"}],[_,u])]),to:n});return w}catch(_){throw new vu({callbackSelector:c,cause:_,data:i,extraData:u,sender:o,urls:s})}}async function g_({data:a,sender:t,urls:e}){let i=new Error("An unknown error occurred.");for(let n=0;n<e.length;n++){let r=e[n],o=r.includes("{data}")?"GET":"POST",s=o==="POST"?{data:a,sender:t}:void 0;try{let l=await fetch(r.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(s),method:o}),c;if(l.headers.get("Content-Type")?.startsWith("application/json")?c=(await l.json()).data:c=await l.text(),!l.ok){i=new vi({body:s,details:c?.error?Xe(c.error):l.statusText,headers:l.headers,status:l.status,url:r});continue}if(!lt(c)){i=new Lu({result:c,url:r});continue}return c}catch(l){i=new vi({body:s,details:l.message,url:r})}}throw i}var dI,b_,L_=ne(()=>{"use strict";Jr();h_();Lr();Jb();Cn();y_();Xi();bi();mi();dI="0x556f1830",b_={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]}});async function ra(a,t){let{account:e=a.account,batch:i=!!a.batch?.multicall,blockNumber:n,blockTag:r="latest",accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:b,maxPriorityFeePerGas:_,nonce:w,to:v,value:E,stateOverride:B,...G}=t,j=e?rt(e):void 0;try{ia(t);let q=(n?be(n):void 0)||r,Y=vI(B),V=a.chain?.formatters?.transactionRequest?.format,Ue=(V||Ja)({...jr(G,{format:V}),from:j?.address,accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:b,maxPriorityFeePerGas:_,nonce:w,to:v,value:E});if(i&&fI({request:Ue})&&!Y)try{return await yI(a,{...Ue,blockNumber:n,blockTag:r})}catch(Be){if(!(Be instanceof ms)&&!(Be instanceof Un))throw Be}let Pe=await a.request({method:"eth_call",params:Y?[Ue,q,Y]:[Ue,q]});return Pe==="0x"?{data:void 0}:{data:Pe}}catch(Z){let q=bI(Z),{offchainLookup:Y,offchainLookupSignature:V}=await Promise.resolve().then(()=>(L_(),v_));if(a.ccipRead!==!1&&q?.slice(0,10)===V&&v)return{data:await Y(a,{data:q,to:v})};throw m_(Z,{...t,account:j,chain:a.chain})}}function fI({request:a}){let{data:t,to:e,...i}=a;return!(!t||t.startsWith(u_)||!e||Object.values(i).filter(n=>typeof n<"u").length>0)}async function yI(a,t){let{batchSize:e=1024,wait:i=0}=typeof a.batch?.multicall=="object"?a.batch.multicall:{},{blockNumber:n,blockTag:r="latest",data:o,multicallAddress:s,to:l}=t,c=s;if(!c){if(!a.chain)throw new ms;c=xi({blockNumber:n,chain:a.chain,contract:"multicall3"})}let m=(n?be(n):void 0)||r,{schedule:b}=gu({id:`${a.uid}.${m}`,wait:i,shouldSplitBatch(v){return v.reduce((B,{data:G})=>B+(G.length-2),0)>e*2},fn:async v=>{let E=v.map(j=>({allowFailure:!0,callData:j.data,target:j.to})),B=Ot({abi:ps,args:[E],functionName:"aggregate3"}),G=await a.request({method:"eth_call",params:[{data:B,to:c},m]});return _i({abi:ps,args:[E],functionName:"aggregate3",data:G||"0x"})}}),[{returnData:_,success:w}]=await b({data:o,to:l});if(!w)throw new wa({data:_});return _==="0x"?{data:void 0}:{data:_}}function bI(a){if(!(a instanceof U))return;let t=a.walk();return typeof t?.data=="object"?t.data?.data:t.data}function __(a){if(!(!a||a.length===0))return a.reduce((t,{slot:e,value:i})=>{if(e.length!==66)throw new Xo({size:e.length,targetSize:66,type:"hex"});if(i.length!==66)throw new Xo({size:i.length,targetSize:66,type:"hex"});return t[e]=i,t},{})}function gI(a){let{balance:t,nonce:e,state:i,stateDiff:n,code:r}=a,o={};if(r!==void 0&&(o.code=r),t!==void 0&&(o.balance=be(t,{size:32})),e!==void 0&&(o.nonce=be(e,{size:8})),i!==void 0&&(o.state=__(i)),n!==void 0){if(o.state)throw new Qc;o.stateDiff=__(n)}return o}function vI(a){if(!a)return;let t={};for(let{address:e,...i}of a){if(!tt(e,{strict:!1}))throw new nt({address:e});if(t[e])throw new Xc({address:e});t[e]=gI(i)}return t}var Jr=ne(()=>{"use strict";pi();Hn();p_();$i();Ge();ds();Qa();_c();tg();On();xa();Pi();Vn();Me();d_();su();cs();lg();Wr()});function HI(a,t,e,i){if(typeof a.setBigUint64=="function")return a.setBigUint64(t,e,i);let n=BigInt(32),r=BigInt(4294967295),o=Number(e>>n&r),s=Number(e&r),l=i?4:0,c=i?0:4;a.setUint32(t+l,o,i),a.setUint32(t+c,s,i)}var Ou,c0=ne(()=>{"use strict";Cc();sr();Ou=class extends Ka{constructor(t,e,i,n){super(),this.blockLen=t,this.outputLen=e,this.padOffset=i,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Dc(this.buffer)}update(t){La(this);let{view:e,buffer:i,blockLen:n}=this;t=Wa(t);let r=t.length;for(let o=0;o<r;){let s=Math.min(n-this.pos,r-o);if(s===n){let l=Dc(t);for(;n<=r-o;o+=n)this.process(l,o);continue}i.set(t.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===n&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){La(this),Sc(t,this),this.finished=!0;let{buffer:e,view:i,blockLen:n,isLE:r}=this,{pos:o}=this;e[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>n-o&&(this.process(i,0),o=0);for(let m=o;m<n;m++)e[m]=0;HI(i,n-8,BigInt(this.length*8),r),this.process(i,0);let s=Dc(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let c=l/4,u=this.get();if(c>u.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<c;m++)s.setUint32(4*m,u[m],r)}digest(){let{buffer:t,outputLen:e}=this;this.digestInto(t);let i=t.slice(0,e);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());let{blockLen:e,buffer:i,length:n,finished:r,destroyed:o,pos:s}=this;return t.length=n,t.pos=s,t.finished=r,t.destroyed=o,n%e&&t.buffer.set(i),t}}});var UI,VI,FI,ln,cn,fg,Hu,yg=ne(()=>{"use strict";c0();sr();UI=(a,t,e)=>a&t^~a&e,VI=(a,t,e)=>a&t^a&e^t&e,FI=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ln=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),cn=new Uint32Array(64),fg=class extends Ou{constructor(){super(64,32,8,!1),this.A=ln[0]|0,this.B=ln[1]|0,this.C=ln[2]|0,this.D=ln[3]|0,this.E=ln[4]|0,this.F=ln[5]|0,this.G=ln[6]|0,this.H=ln[7]|0}get(){let{A:t,B:e,C:i,D:n,E:r,F:o,G:s,H:l}=this;return[t,e,i,n,r,o,s,l]}set(t,e,i,n,r,o,s,l){this.A=t|0,this.B=e|0,this.C=i|0,this.D=n|0,this.E=r|0,this.F=o|0,this.G=s|0,this.H=l|0}process(t,e){for(let m=0;m<16;m++,e+=4)cn[m]=t.getUint32(e,!1);for(let m=16;m<64;m++){let b=cn[m-15],_=cn[m-2],w=Bi(b,7)^Bi(b,18)^b>>>3,v=Bi(_,17)^Bi(_,19)^_>>>10;cn[m]=v+cn[m-7]+w+cn[m-16]|0}let{A:i,B:n,C:r,D:o,E:s,F:l,G:c,H:u}=this;for(let m=0;m<64;m++){let b=Bi(s,6)^Bi(s,11)^Bi(s,25),_=u+b+UI(s,l,c)+FI[m]+cn[m]|0,v=(Bi(i,2)^Bi(i,13)^Bi(i,22))+VI(i,n,r)|0;u=c,c=l,l=s,s=o+_|0,o=r,r=n,n=i,i=_+v|0}i=i+this.A|0,n=n+this.B|0,r=r+this.C|0,o=o+this.D|0,s=s+this.E|0,l=l+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(i,n,r,o,s,l,c,u)}roundClean(){cn.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},Hu=Mc(()=>new fg)});var Ig={};jv(Ig,{bitGet:()=>eE,bitLen:()=>JI,bitMask:()=>Ls,bitSet:()=>tE,bytesToHex:()=>Fn,bytesToNumberBE:()=>Sa,bytesToNumberLE:()=>qu,concatBytes:()=>co,createHmacDrbg:()=>wg,ensureBytes:()=>di,equalBytes:()=>xg,hexToBytes:()=>zn,hexToNumber:()=>_g,numberToBytesBE:()=>un,numberToBytesLE:()=>Yu,numberToHexUnpadded:()=>C0,numberToVarBytesBE:()=>QI,utf8ToBytes:()=>ZI,validateObject:()=>pn});function Fn(a){if(!Wu(a))throw new Error("Uint8Array expected");let t="";for(let e=0;e<a.length;e++)t+=XI[a[e]];return t}function C0(a){let t=a.toString(16);return t.length&1?`0${t}`:t}function _g(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);return BigInt(a===""?"0":`0x${a}`)}function zn(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);let t=a.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);let e=new Uint8Array(t/2);for(let i=0;i<e.length;i++){let n=i*2,r=a.slice(n,n+2),o=Number.parseInt(r,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");e[i]=o}return e}function Sa(a){return _g(Fn(a))}function qu(a){if(!Wu(a))throw new Error("Uint8Array expected");return _g(Fn(Uint8Array.from(a).reverse()))}function un(a,t){return zn(a.toString(16).padStart(t*2,"0"))}function Yu(a,t){return un(a,t).reverse()}function QI(a){return zn(C0(a))}function di(a,t,e){let i;if(typeof t=="string")try{i=zn(t)}catch(r){throw new Error(`${a} must be valid hex string, got "${t}". Cause: ${r}`)}else if(Wu(t))i=Uint8Array.from(t);else throw new Error(`${a} must be hex string or Uint8Array`);let n=i.length;if(typeof e=="number"&&n!==e)throw new Error(`${a} expected ${e} bytes, got ${n}`);return i}function co(...a){let t=new Uint8Array(a.reduce((i,n)=>i+n.length,0)),e=0;return a.forEach(i=>{if(!Wu(i))throw new Error("Uint8Array expected");t.set(i,e),e+=i.length}),t}function xg(a,t){if(a.length!==t.length)return!1;for(let e=0;e<a.length;e++)if(a[e]!==t[e])return!1;return!0}function ZI(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function JI(a){let t;for(t=0;a>S0;a>>=Ku,t+=1);return t}function eE(a,t){return a>>BigInt(t)&Ku}function wg(a,t,e){if(typeof a!="number"||a<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof e!="function")throw new Error("hmacFn must be a function");let i=Lg(a),n=Lg(a),r=0,o=()=>{i.fill(1),n.fill(0),r=0},s=(...m)=>e(n,i,...m),l=(m=Lg())=>{n=s(T0([0]),m),i=s(),m.length!==0&&(n=s(T0([1]),m),i=s())},c=()=>{if(r++>=1e3)throw new Error("drbg: tried 1000 values");let m=0,b=[];for(;m<t;){i=s();let _=i.slice();b.push(_),m+=i.length}return co(...b)};return(m,b)=>{o(),l(m);let _;for(;!(_=b(c()));)l();return o(),_}}function pn(a,t,e={}){let i=(n,r,o)=>{let s=iE[r];if(typeof s!="function")throw new Error(`Invalid validator "${r}", expected function`);let l=a[n];if(!(o&&l===void 0)&&!s(l,a))throw new Error(`Invalid param ${String(n)}=${l} (${typeof l}), expected ${r}`)};for(let[n,r]of Object.entries(t))i(n,r,!1);for(let[n,r]of Object.entries(e))i(n,r,!0);return a}var S0,Ku,$I,Wu,XI,tE,Ls,Lg,T0,iE,uo=ne(()=>{"use strict";S0=BigInt(0),Ku=BigInt(1),$I=BigInt(2),Wu=a=>a instanceof Uint8Array,XI=Array.from({length:256},(a,t)=>t.toString(16).padStart(2,"0"));tE=(a,t,e)=>a|(e?Ku:S0)<<BigInt(t),Ls=a=>($I<<BigInt(a-1))-Ku,Lg=a=>new Uint8Array(a),T0=a=>Uint8Array.from(a);iE={bigint:a=>typeof a=="bigint",function:a=>typeof a=="function",boolean:a=>typeof a=="boolean",string:a=>typeof a=="string",stringOrUint8Array:a=>typeof a=="string"||a instanceof Uint8Array,isSafeInteger:a=>Number.isSafeInteger(a),array:a=>Array.isArray(a),field:(a,t)=>t.Fp.isValid(a),hash:a=>typeof a=="function"&&Number.isSafeInteger(a.outputLen)}});function Ut(a,t){let e=a%t;return e>=Et?e:t+e}function oE(a,t,e){if(e<=Et||t<Et)throw new Error("Expected power/modulo > 0");if(e===mt)return Et;let i=mt;for(;t>Et;)t&mt&&(i=i*a%e),a=a*a%e,t>>=mt;return i}function hi(a,t,e){let i=a;for(;t-- >Et;)i*=i,i%=e;return i}function Qu(a,t){if(a===Et||t<=Et)throw new Error(`invert: expected positive integers, got n=${a} mod=${t}`);let e=Ut(a,t),i=t,n=Et,r=mt,o=mt,s=Et;for(;e!==Et;){let c=i/e,u=i%e,m=n-o*c,b=r-s*c;i=e,e=u,n=o,r=s,o=m,s=b}if(i!==mt)throw new Error("invert: does not exist");return Ut(n,t)}function sE(a){let t=(a-mt)/Gn,e,i,n;for(e=a-mt,i=0;e%Gn===Et;e/=Gn,i++);for(n=Gn;n<a&&oE(n,t,a)!==a-mt;n++);if(i===1){let o=(a+mt)/Eg;return function(l,c){let u=l.pow(c,o);if(!l.eql(l.sqr(u),c))throw new Error("Cannot find square root");return u}}let r=(e+mt)/Gn;return function(s,l){if(s.pow(l,t)===s.neg(s.ONE))throw new Error("Cannot find square root");let c=i,u=s.pow(s.mul(s.ONE,n),e),m=s.pow(l,r),b=s.pow(l,e);for(;!s.eql(b,s.ONE);){if(s.eql(b,s.ZERO))return s.ZERO;let _=1;for(let v=s.sqr(b);_<c&&!s.eql(v,s.ONE);_++)v=s.sqr(v);let w=s.pow(u,mt<<BigInt(c-_-1));u=s.sqr(w),m=s.mul(m,w),b=s.mul(b,u),c=_}return m}}function lE(a){if(a%Eg===aE){let t=(a+mt)/Eg;return function(i,n){let r=i.pow(n,t);if(!i.eql(i.sqr(r),n))throw new Error("Cannot find square root");return r}}if(a%$0===Y0){let t=(a-Y0)/$0;return function(i,n){let r=i.mul(n,Gn),o=i.pow(r,t),s=i.mul(n,o),l=i.mul(i.mul(s,Gn),o),c=i.mul(s,i.sub(l,i.ONE));if(!i.eql(i.sqr(c),n))throw new Error("Cannot find square root");return c}}return a%rE,sE(a)}function Tg(a){let t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},e=cE.reduce((i,n)=>(i[n]="function",i),t);return pn(a,e)}function uE(a,t,e){if(e<Et)throw new Error("Expected power > 0");if(e===Et)return a.ONE;if(e===mt)return t;let i=a.ONE,n=t;for(;e>Et;)e&mt&&(i=a.mul(i,n)),n=a.sqr(n),e>>=mt;return i}function pE(a,t){let e=new Array(t.length),i=t.reduce((r,o,s)=>a.is0(o)?r:(e[s]=r,a.mul(r,o)),a.ONE),n=a.inv(i);return t.reduceRight((r,o,s)=>a.is0(o)?r:(e[s]=a.mul(r,e[s]),a.mul(r,o)),n),e}function Sg(a,t){let e=t!==void 0?t:a.toString(2).length,i=Math.ceil(e/8);return{nBitLength:e,nByteLength:i}}function X0(a,t,e=!1,i={}){if(a<=Et)throw new Error(`Expected Field ORDER > 0, got ${a}`);let{nBitLength:n,nByteLength:r}=Sg(a,t);if(r>2048)throw new Error("Field lengths over 2048 bytes are not supported");let o=lE(a),s=Object.freeze({ORDER:a,BITS:n,BYTES:r,MASK:Ls(n),ZERO:Et,ONE:mt,create:l=>Ut(l,a),isValid:l=>{if(typeof l!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);return Et<=l&&l<a},is0:l=>l===Et,isOdd:l=>(l&mt)===mt,neg:l=>Ut(-l,a),eql:(l,c)=>l===c,sqr:l=>Ut(l*l,a),add:(l,c)=>Ut(l+c,a),sub:(l,c)=>Ut(l-c,a),mul:(l,c)=>Ut(l*c,a),pow:(l,c)=>uE(s,l,c),div:(l,c)=>Ut(l*Qu(c,a),a),sqrN:l=>l*l,addN:(l,c)=>l+c,subN:(l,c)=>l-c,mulN:(l,c)=>l*c,inv:l=>Qu(l,a),sqrt:i.sqrt||(l=>o(s,l)),invertBatch:l=>pE(s,l),cmov:(l,c,u)=>u?c:l,toBytes:l=>e?Yu(l,r):un(l,r),fromBytes:l=>{if(l.length!==r)throw new Error(`Fp.fromBytes: expected ${r}, got ${l.length}`);return e?qu(l):Sa(l)}});return Object.freeze(s)}function Q0(a){if(typeof a!="bigint")throw new Error("field order must be bigint");let t=a.toString(2).length;return Math.ceil(t/8)}function Cg(a){let t=Q0(a);return t+Math.ceil(t/2)}function Z0(a,t,e=!1){let i=a.length,n=Q0(t),r=Cg(t);if(i<16||i<r||i>1024)throw new Error(`expected ${r}-1024 bytes of input, got ${i}`);let o=e?Sa(a):qu(a),s=Ut(o,t-mt)+mt;return e?Yu(s,n):un(s,n)}var Et,mt,Gn,aE,Eg,Y0,$0,nE,rE,cE,Zu=ne(()=>{"use strict";uo();Et=BigInt(0),mt=BigInt(1),Gn=BigInt(2),aE=BigInt(3),Eg=BigInt(4),Y0=BigInt(5),$0=BigInt(8),nE=BigInt(9),rE=BigInt(16);cE=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"]});function J0(a,t){let e=(n,r)=>{let o=r.negate();return n?o:r},i=n=>{let r=Math.ceil(t/n)+1,o=2**(n-1);return{windows:r,windowSize:o}};return{constTimeNegate:e,unsafeLadder(n,r){let o=a.ZERO,s=n;for(;r>dE;)r&kg&&(o=o.add(s)),s=s.double(),r>>=kg;return o},precomputeWindow(n,r){let{windows:o,windowSize:s}=i(r),l=[],c=n,u=c;for(let m=0;m<o;m++){u=c,l.push(u);for(let b=1;b<s;b++)u=u.add(c),l.push(u);c=u.double()}return l},wNAF(n,r,o){let{windows:s,windowSize:l}=i(n),c=a.ZERO,u=a.BASE,m=BigInt(2**n-1),b=2**n,_=BigInt(n);for(let w=0;w<s;w++){let v=w*l,E=Number(o&m);o>>=_,E>l&&(E-=b,o+=kg);let B=v,G=v+Math.abs(E)-1,j=w%2!==0,Z=E<0;E===0?u=u.add(e(j,r[B])):c=c.add(e(Z,r[G]))}return{p:c,f:u}},wNAFCached(n,r,o,s){let l=n._WINDOW_SIZE||1,c=r.get(n);return c||(c=this.precomputeWindow(n,l),l!==1&&r.set(n,s(c))),this.wNAF(l,c,o)}}}function Ag(a){return Tg(a.Fp),pn(a,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Sg(a.n,a.nBitLength),...a,p:a.Fp.ORDER})}var dE,kg,ex=ne(()=>{"use strict";Zu();uo();dE=BigInt(0),kg=BigInt(1)});function hE(a){let t=Ag(a);pn(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:e,Fp:i,a:n}=t;if(e){if(!i.eql(n,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof e!="object"||typeof e.beta!="bigint"||typeof e.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}function bE(a){let t=hE(a),{Fp:e}=t,i=t.toBytes||((w,v,E)=>{let B=v.toAffine();return co(Uint8Array.from([4]),e.toBytes(B.x),e.toBytes(B.y))}),n=t.fromBytes||(w=>{let v=w.subarray(1),E=e.fromBytes(v.subarray(0,e.BYTES)),B=e.fromBytes(v.subarray(e.BYTES,2*e.BYTES));return{x:E,y:B}});function r(w){let{a:v,b:E}=t,B=e.sqr(w),G=e.mul(B,w);return e.add(e.add(G,e.mul(w,v)),E)}if(!e.eql(e.sqr(t.Gy),r(t.Gx)))throw new Error("bad generator point: equation left != right");function o(w){return typeof w=="bigint"&&Ca<w&&w<t.n}function s(w){if(!o(w))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function l(w){let{allowedPrivateKeyLengths:v,nByteLength:E,wrapPrivateKey:B,n:G}=t;if(v&&typeof w!="bigint"){if(w instanceof Uint8Array&&(w=Fn(w)),typeof w!="string"||!v.includes(w.length))throw new Error("Invalid key");w=w.padStart(E*2,"0")}let j;try{j=typeof w=="bigint"?w:Sa(di("private key",w,E))}catch{throw new Error(`private key must be ${E} bytes, hex or bigint, not ${typeof w}`)}return B&&(j=Ut(j,G)),s(j),j}let c=new Map;function u(w){if(!(w instanceof m))throw new Error("ProjectivePoint expected")}class m{constructor(v,E,B){if(this.px=v,this.py=E,this.pz=B,v==null||!e.isValid(v))throw new Error("x required");if(E==null||!e.isValid(E))throw new Error("y required");if(B==null||!e.isValid(B))throw new Error("z required")}static fromAffine(v){let{x:E,y:B}=v||{};if(!v||!e.isValid(E)||!e.isValid(B))throw new Error("invalid affine point");if(v instanceof m)throw new Error("projective point not allowed");let G=j=>e.eql(j,e.ZERO);return G(E)&&G(B)?m.ZERO:new m(E,B,e.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(v){let E=e.invertBatch(v.map(B=>B.pz));return v.map((B,G)=>B.toAffine(E[G])).map(m.fromAffine)}static fromHex(v){let E=m.fromAffine(n(di("pointHex",v)));return E.assertValidity(),E}static fromPrivateKey(v){return m.BASE.multiply(l(v))}_setWindowSize(v){this._WINDOW_SIZE=v,c.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint&&!e.is0(this.py))return;throw new Error("bad point: ZERO")}let{x:v,y:E}=this.toAffine();if(!e.isValid(v)||!e.isValid(E))throw new Error("bad point: x or y not FE");let B=e.sqr(E),G=r(v);if(!e.eql(B,G))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y:v}=this.toAffine();if(e.isOdd)return!e.isOdd(v);throw new Error("Field doesn't support isOdd")}equals(v){u(v);let{px:E,py:B,pz:G}=this,{px:j,py:Z,pz:q}=v,Y=e.eql(e.mul(E,q),e.mul(j,G)),V=e.eql(e.mul(B,q),e.mul(Z,G));return Y&&V}negate(){return new m(this.px,e.neg(this.py),this.pz)}double(){let{a:v,b:E}=t,B=e.mul(E,tx),{px:G,py:j,pz:Z}=this,q=e.ZERO,Y=e.ZERO,V=e.ZERO,he=e.mul(G,G),Ue=e.mul(j,j),Pe=e.mul(Z,Z),Be=e.mul(G,j);return Be=e.add(Be,Be),V=e.mul(G,Z),V=e.add(V,V),q=e.mul(v,V),Y=e.mul(B,Pe),Y=e.add(q,Y),q=e.sub(Ue,Y),Y=e.add(Ue,Y),Y=e.mul(q,Y),q=e.mul(Be,q),V=e.mul(B,V),Pe=e.mul(v,Pe),Be=e.sub(he,Pe),Be=e.mul(v,Be),Be=e.add(Be,V),V=e.add(he,he),he=e.add(V,he),he=e.add(he,Pe),he=e.mul(he,Be),Y=e.add(Y,he),Pe=e.mul(j,Z),Pe=e.add(Pe,Pe),he=e.mul(Pe,Be),q=e.sub(q,he),V=e.mul(Pe,Ue),V=e.add(V,V),V=e.add(V,V),new m(q,Y,V)}add(v){u(v);let{px:E,py:B,pz:G}=this,{px:j,py:Z,pz:q}=v,Y=e.ZERO,V=e.ZERO,he=e.ZERO,Ue=t.a,Pe=e.mul(t.b,tx),Be=e.mul(E,j),yt=e.mul(B,Z),zt=e.mul(G,q),Ci=e.add(E,B),se=e.add(j,Z);Ci=e.mul(Ci,se),se=e.add(Be,yt),Ci=e.sub(Ci,se),se=e.add(E,G);let ve=e.add(j,q);return se=e.mul(se,ve),ve=e.add(Be,zt),se=e.sub(se,ve),ve=e.add(B,G),Y=e.add(Z,q),ve=e.mul(ve,Y),Y=e.add(yt,zt),ve=e.sub(ve,Y),he=e.mul(Ue,se),Y=e.mul(Pe,zt),he=e.add(Y,he),Y=e.sub(yt,he),he=e.add(yt,he),V=e.mul(Y,he),yt=e.add(Be,Be),yt=e.add(yt,Be),zt=e.mul(Ue,zt),se=e.mul(Pe,se),yt=e.add(yt,zt),zt=e.sub(Be,zt),zt=e.mul(Ue,zt),se=e.add(se,zt),Be=e.mul(yt,se),V=e.add(V,Be),Be=e.mul(ve,se),Y=e.mul(Ci,Y),Y=e.sub(Y,Be),Be=e.mul(Ci,yt),he=e.mul(ve,he),he=e.add(he,Be),new m(Y,V,he)}subtract(v){return this.add(v.negate())}is0(){return this.equals(m.ZERO)}wNAF(v){return _.wNAFCached(this,c,v,E=>{let B=e.invertBatch(E.map(G=>G.pz));return E.map((G,j)=>G.toAffine(B[j])).map(m.fromAffine)})}multiplyUnsafe(v){let E=m.ZERO;if(v===Ca)return E;if(s(v),v===Ii)return this;let{endo:B}=t;if(!B)return _.unsafeLadder(this,v);let{k1neg:G,k1:j,k2neg:Z,k2:q}=B.splitScalar(v),Y=E,V=E,he=this;for(;j>Ca||q>Ca;)j&Ii&&(Y=Y.add(he)),q&Ii&&(V=V.add(he)),he=he.double(),j>>=Ii,q>>=Ii;return G&&(Y=Y.negate()),Z&&(V=V.negate()),V=new m(e.mul(V.px,B.beta),V.py,V.pz),Y.add(V)}multiply(v){s(v);let E=v,B,G,{endo:j}=t;if(j){let{k1neg:Z,k1:q,k2neg:Y,k2:V}=j.splitScalar(E),{p:he,f:Ue}=this.wNAF(q),{p:Pe,f:Be}=this.wNAF(V);he=_.constTimeNegate(Z,he),Pe=_.constTimeNegate(Y,Pe),Pe=new m(e.mul(Pe.px,j.beta),Pe.py,Pe.pz),B=he.add(Pe),G=Ue.add(Be)}else{let{p:Z,f:q}=this.wNAF(E);B=Z,G=q}return m.normalizeZ([B,G])[0]}multiplyAndAddUnsafe(v,E,B){let G=m.BASE,j=(q,Y)=>Y===Ca||Y===Ii||!q.equals(G)?q.multiplyUnsafe(Y):q.multiply(Y),Z=j(this,E).add(j(v,B));return Z.is0()?void 0:Z}toAffine(v){let{px:E,py:B,pz:G}=this,j=this.is0();v==null&&(v=j?e.ONE:e.inv(G));let Z=e.mul(E,v),q=e.mul(B,v),Y=e.mul(G,v);if(j)return{x:e.ZERO,y:e.ZERO};if(!e.eql(Y,e.ONE))throw new Error("invZ was invalid");return{x:Z,y:q}}isTorsionFree(){let{h:v,isTorsionFree:E}=t;if(v===Ii)return!0;if(E)return E(m,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:v,clearCofactor:E}=t;return v===Ii?this:E?E(m,this):this.multiplyUnsafe(t.h)}toRawBytes(v=!0){return this.assertValidity(),i(m,this,v)}toHex(v=!0){return Fn(this.toRawBytes(v))}}m.BASE=new m(t.Gx,t.Gy,e.ONE),m.ZERO=new m(e.ZERO,e.ONE,e.ZERO);let b=t.nBitLength,_=J0(m,t.endo?Math.ceil(b/2):b);return{CURVE:t,ProjectivePoint:m,normPrivateKeyToScalar:l,weierstrassEquation:r,isWithinCurveOrder:o}}function gE(a){let t=Ag(a);return pn(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function ix(a){let t=gE(a),{Fp:e,n:i}=t,n=e.BYTES+1,r=2*e.BYTES+1;function o(se){return Ca<se&&se<e.ORDER}function s(se){return Ut(se,i)}function l(se){return Qu(se,i)}let{ProjectivePoint:c,normPrivateKeyToScalar:u,weierstrassEquation:m,isWithinCurveOrder:b}=bE({...t,toBytes(se,ve,A){let et=ve.toAffine(),Oe=e.toBytes(et.x),bt=co;return A?bt(Uint8Array.from([ve.hasEvenY()?2:3]),Oe):bt(Uint8Array.from([4]),Oe,e.toBytes(et.y))},fromBytes(se){let ve=se.length,A=se[0],et=se.subarray(1);if(ve===n&&(A===2||A===3)){let Oe=Sa(et);if(!o(Oe))throw new Error("Point is not on curve");let bt=m(Oe),Gt=e.sqrt(bt),jt=(Gt&Ii)===Ii;return(A&1)===1!==jt&&(Gt=e.neg(Gt)),{x:Oe,y:Gt}}else if(ve===r&&A===4){let Oe=e.fromBytes(et.subarray(0,e.BYTES)),bt=e.fromBytes(et.subarray(e.BYTES,2*e.BYTES));return{x:Oe,y:bt}}else throw new Error(`Point of length ${ve} was invalid. Expected ${n} compressed bytes or ${r} uncompressed bytes`)}}),_=se=>Fn(un(se,t.nByteLength));function w(se){let ve=i>>Ii;return se>ve}function v(se){return w(se)?s(-se):se}let E=(se,ve,A)=>Sa(se.slice(ve,A));class B{constructor(ve,A,et){this.r=ve,this.s=A,this.recovery=et,this.assertValidity()}static fromCompact(ve){let A=t.nByteLength;return ve=di("compactSignature",ve,A*2),new B(E(ve,0,A),E(ve,A,2*A))}static fromDER(ve){let{r:A,s:et}=jn.toSig(di("DER",ve));return new B(A,et)}assertValidity(){if(!b(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!b(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(ve){return new B(this.r,this.s,ve)}recoverPublicKey(ve){let{r:A,s:et,recovery:Oe}=this,bt=V(di("msgHash",ve));if(Oe==null||![0,1,2,3].includes(Oe))throw new Error("recovery id invalid");let Gt=Oe===2||Oe===3?A+t.n:A;if(Gt>=e.ORDER)throw new Error("recovery id 2 or 3 invalid");let jt=Oe&1?"03":"02",Ki=c.fromHex(jt+_(Gt)),_t=l(Gt),Fa=s(-bt*_t),Ln=s(et*_t),Zt=c.BASE.multiplyAndAddUnsafe(Ki,Fa,Ln);if(!Zt)throw new Error("point at infinify");return Zt.assertValidity(),Zt}hasHighS(){return w(this.s)}normalizeS(){return this.hasHighS()?new B(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return zn(this.toDERHex())}toDERHex(){return jn.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return zn(this.toCompactHex())}toCompactHex(){return _(this.r)+_(this.s)}}let G={isValidPrivateKey(se){try{return u(se),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{let se=Cg(t.n);return Z0(t.randomBytes(se),t.n)},precompute(se=8,ve=c.BASE){return ve._setWindowSize(se),ve.multiply(BigInt(3)),ve}};function j(se,ve=!0){return c.fromPrivateKey(se).toRawBytes(ve)}function Z(se){let ve=se instanceof Uint8Array,A=typeof se=="string",et=(ve||A)&&se.length;return ve?et===n||et===r:A?et===2*n||et===2*r:se instanceof c}function q(se,ve,A=!0){if(Z(se))throw new Error("first arg must be private key");if(!Z(ve))throw new Error("second arg must be public key");return c.fromHex(ve).multiply(u(se)).toRawBytes(A)}let Y=t.bits2int||function(se){let ve=Sa(se),A=se.length*8-t.nBitLength;return A>0?ve>>BigInt(A):ve},V=t.bits2int_modN||function(se){return s(Y(se))},he=Ls(t.nBitLength);function Ue(se){if(typeof se!="bigint")throw new Error("bigint expected");if(!(Ca<=se&&se<he))throw new Error(`bigint expected < 2^${t.nBitLength}`);return un(se,t.nByteLength)}function Pe(se,ve,A=Be){if(["recovered","canonical"].some(ha=>ha in A))throw new Error("sign() legacy options not supported");let{hash:et,randomBytes:Oe}=t,{lowS:bt,prehash:Gt,extraEntropy:jt}=A;bt==null&&(bt=!0),se=di("msgHash",se),Gt&&(se=di("prehashed msgHash",et(se)));let Ki=V(se),_t=u(ve),Fa=[Ue(_t),Ue(Ki)];if(jt!=null){let ha=jt===!0?Oe(e.BYTES):jt;Fa.push(di("extraEntropy",ha))}let Ln=co(...Fa),Zt=Ki;function So(ha){let za=Y(ha);if(!b(za))return;let Co=l(za),si=c.BASE.multiply(za).toAffine(),Ga=s(si.x);if(Ga===Ca)return;let Jn=s(Co*s(Zt+Ga*_t));if(Jn===Ca)return;let Hl=(si.x===Ga?0:2)|Number(si.y&Ii),er=Jn;return bt&&w(Jn)&&(er=v(Jn),Hl^=1),new B(Ga,er,Hl)}return{seed:Ln,k2sig:So}}let Be={lowS:t.lowS,prehash:!1},yt={lowS:t.lowS,prehash:!1};function zt(se,ve,A=Be){let{seed:et,k2sig:Oe}=Pe(se,ve,A),bt=t;return wg(bt.hash.outputLen,bt.nByteLength,bt.hmac)(et,Oe)}c.BASE._setWindowSize(8);function Ci(se,ve,A,et=yt){let Oe=se;if(ve=di("msgHash",ve),A=di("publicKey",A),"strict"in et)throw new Error("options.strict was renamed to lowS");let{lowS:bt,prehash:Gt}=et,jt,Ki;try{if(typeof Oe=="string"||Oe instanceof Uint8Array)try{jt=B.fromDER(Oe)}catch(si){if(!(si instanceof jn.Err))throw si;jt=B.fromCompact(Oe)}else if(typeof Oe=="object"&&typeof Oe.r=="bigint"&&typeof Oe.s=="bigint"){let{r:si,s:Ga}=Oe;jt=new B(si,Ga)}else throw new Error("PARSE");Ki=c.fromHex(A)}catch(si){if(si.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(bt&&jt.hasHighS())return!1;Gt&&(ve=t.hash(ve));let{r:_t,s:Fa}=jt,Ln=V(ve),Zt=l(Fa),So=s(Ln*Zt),ha=s(_t*Zt),za=c.BASE.multiplyAndAddUnsafe(Ki,So,ha)?.toAffine();return za?s(za.x)===_t:!1}return{CURVE:t,getPublicKey:j,getSharedSecret:q,sign:zt,verify:Ci,ProjectivePoint:c,Signature:B,utils:G}}var fE,yE,jn,Ca,Ii,Cz,tx,kz,ax=ne(()=>{"use strict";Zu();uo();uo();ex();({bytesToNumberBE:fE,hexToBytes:yE}=Ig),jn={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(a){let{Err:t}=jn;if(a.length<2||a[0]!==2)throw new t("Invalid signature integer tag");let e=a[1],i=a.subarray(2,e+2);if(!e||i.length!==e)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:fE(i),l:a.subarray(e+2)}},toSig(a){let{Err:t}=jn,e=typeof a=="string"?yE(a):a;if(!(e instanceof Uint8Array))throw new Error("ui8a expected");let i=e.length;if(i<2||e[0]!=48)throw new t("Invalid signature tag");if(e[1]!==i-2)throw new t("Invalid signature: incorrect length");let{d:n,l:r}=jn._parseInt(e.subarray(2)),{d:o,l:s}=jn._parseInt(r);if(s.length)throw new t("Invalid signature: left bytes after parsing");return{r:n,s:o}},hexFromSig(a){let t=c=>Number.parseInt(c[0],16)&8?"00"+c:c,e=c=>{let u=c.toString(16);return u.length&1?`0${u}`:u},i=t(e(a.s)),n=t(e(a.r)),r=i.length/2,o=n.length/2,s=e(r),l=e(o);return`30${e(o+r+4)}02${l}${n}02${s}${i}`}},Ca=BigInt(0),Ii=BigInt(1),Cz=BigInt(2),tx=BigInt(3),kz=BigInt(4)});var Ju,Dg,nx=ne(()=>{"use strict";Cc();sr();Ju=class extends Ka{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,rL(t);let i=Wa(e);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,r=new Uint8Array(n);r.set(i.length>n?t.create().update(i).digest():i);for(let o=0;o<r.length;o++)r[o]^=54;this.iHash.update(r),this.oHash=t.create();for(let o=0;o<r.length;o++)r[o]^=106;this.oHash.update(r),r.fill(0)}update(t){return La(this),this.iHash.update(t),this}digestInto(t){La(this),es(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));let{oHash:e,iHash:i,finished:n,destroyed:r,blockLen:o,outputLen:s}=this;return t=t,t.finished=n,t.destroyed=r,t.blockLen=o,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Dg=(a,t,e)=>new Ju(a,t).update(e).digest();Dg.create=(a,t)=>new Ju(a,t)});function vE(a){return{hash:a,hmac:(t,...e)=>Dg(a,t,yL(...e)),randomBytes:gL}}function rx(a,t){let e=i=>ix({...a,...vE(i)});return Object.freeze({...e(t),create:e})}var ox=ne(()=>{"use strict";nx();sr();ax();});function _E(a){let t=cx,e=BigInt(3),i=BigInt(6),n=BigInt(11),r=BigInt(22),o=BigInt(23),s=BigInt(44),l=BigInt(88),c=a*a*a%t,u=c*c*a%t,m=hi(u,e,t)*u%t,b=hi(m,e,t)*u%t,_=hi(b,Mg,t)*c%t,w=hi(_,n,t)*_%t,v=hi(w,r,t)*w%t,E=hi(v,s,t)*v%t,B=hi(E,l,t)*E%t,G=hi(B,s,t)*v%t,j=hi(G,e,t)*u%t,Z=hi(j,o,t)*w%t,q=hi(Z,i,t)*c%t,Y=hi(q,Mg,t);if(!Bg.eql(Bg.sqr(Y),a))throw new Error("Cannot find square root");return Y}var cx,sx,LE,Mg,lx,Bg,Pg,Fz,zz,ux=ne(()=>{"use strict";yg();Zu();ox();cx=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),sx=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),LE=BigInt(1),Mg=BigInt(2),lx=(a,t)=>(a+t/Mg)/t;Bg=X0(cx,void 0,void 0,{sqrt:_E}),Pg=rx({a:BigInt(0),b:BigInt(7),Fp:Bg,n:sx,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:a=>{let t=sx,e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-LE*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),n=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),r=e,o=BigInt("0x100000000000000000000000000000000"),s=lx(r*a,t),l=lx(-i*a,t),c=Ut(a-s*e-l*n,t),u=Ut(-s*i-l*r,t),m=c>o,b=u>o;if(m&&(c=t-c),b&&(u=t-u),c>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+a);return{k1neg:m,k1:c,k2neg:b,k2:u}}}},Hu),Fz=BigInt(0),zz=Pg.ProjectivePoint});var jx=bw((Sv,Cv)=>{"use strict";(function(a,t){typeof Sv=="object"&&typeof Cv<"u"?Cv.exports=t():typeof define=="function"&&define.amd?define(t):(a=typeof globalThis<"u"?globalThis:a||self).jsSHA=t()})(Sv,function(){"use strict";var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function t(S,g,I,T){var D,x,W,$=g||[0],J=(I=I||0)>>>3,oe=T===-1?3:0;for(D=0;D<S.length;D+=1)x=(W=D+J)>>>2,$.length<=x&&$.push(0),$[x]|=S[D]<<8*(oe+T*(W%4));return{value:$,binLen:8*S.length+I}}function e(S,g,I){switch(g){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(S){case"HEX":return function(T,D,x){return function(W,$,J,oe){var we,re,ue,Re;if(W.length%2!=0)throw new Error("String of HEX type must be in byte increments");var ae=$||[0],Ke=(J=J||0)>>>3,Ve=oe===-1?3:0;for(we=0;we<W.length;we+=2){if(re=parseInt(W.substr(we,2),16),isNaN(re))throw new Error("String of HEX type contains invalid characters");for(ue=(Re=(we>>>1)+Ke)>>>2;ae.length<=ue;)ae.push(0);ae[ue]|=re<<8*(Ve+oe*(Re%4))}return{value:ae,binLen:4*W.length+J}}(T,D,x,I)};case"TEXT":return function(T,D,x){return function(W,$,J,oe,we){var re,ue,Re,ae,Ke,Ve,Ze,ot,fa=0,li=J||[0],ki=(oe=oe||0)>>>3;if($==="UTF8")for(Ze=we===-1?3:0,Re=0;Re<W.length;Re+=1)for(ue=[],128>(re=W.charCodeAt(Re))?ue.push(re):2048>re?(ue.push(192|re>>>6),ue.push(128|63&re)):55296>re||57344<=re?ue.push(224|re>>>12,128|re>>>6&63,128|63&re):(Re+=1,re=65536+((1023&re)<<10|1023&W.charCodeAt(Re)),ue.push(240|re>>>18,128|re>>>12&63,128|re>>>6&63,128|63&re)),ae=0;ae<ue.length;ae+=1){for(Ke=(Ve=fa+ki)>>>2;li.length<=Ke;)li.push(0);li[Ke]|=ue[ae]<<8*(Ze+we*(Ve%4)),fa+=1}else for(Ze=we===-1?2:0,ot=$==="UTF16LE"&&we!==1||$!=="UTF16LE"&&we===1,Re=0;Re<W.length;Re+=1){for(re=W.charCodeAt(Re),ot===!0&&(re=(ae=255&re)<<8|re>>>8),Ke=(Ve=fa+ki)>>>2;li.length<=Ke;)li.push(0);li[Ke]|=re<<8*(Ze+we*(Ve%4)),fa+=2}return{value:li,binLen:8*fa+oe}}(T,g,D,x,I)};case"B64":return function(T,D,x){return function(W,$,J,oe){var we,re,ue,Re,ae,Ke,Ve=0,Ze=$||[0],ot=(J=J||0)>>>3,fa=oe===-1?3:0,li=W.indexOf("=");if(W.search(/^[a-zA-Z0-9=+/]+$/)===-1)throw new Error("Invalid character in base-64 string");if(W=W.replace(/=/g,""),li!==-1&&li<W.length)throw new Error("Invalid '=' found in base-64 string");for(we=0;we<W.length;we+=4){for(Re=W.substr(we,4),ue=0,re=0;re<Re.length;re+=1)ue|=a.indexOf(Re.charAt(re))<<18-6*re;for(re=0;re<Re.length-1;re+=1){for(ae=(Ke=Ve+ot)>>>2;Ze.length<=ae;)Ze.push(0);Ze[ae]|=(ue>>>16-8*re&255)<<8*(fa+oe*(Ke%4)),Ve+=1}}return{value:Ze,binLen:8*Ve+J}}(T,D,x,I)};case"BYTES":return function(T,D,x){return function(W,$,J,oe){var we,re,ue,Re,ae=$||[0],Ke=(J=J||0)>>>3,Ve=oe===-1?3:0;for(re=0;re<W.length;re+=1)we=W.charCodeAt(re),ue=(Re=re+Ke)>>>2,ae.length<=ue&&ae.push(0),ae[ue]|=we<<8*(Ve+oe*(Re%4));return{value:ae,binLen:8*W.length+J}}(T,D,x,I)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(T,D,x){return function(W,$,J,oe){return t(new Uint8Array(W),$,J,oe)}(T,D,x,I)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(T,D,x){return t(T,D,x,I)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function i(S,g,I,T){switch(S){case"HEX":return function(D){return function(x,W,$,J){var oe,we,re="",ue=W/8,Re=$===-1?3:0;for(oe=0;oe<ue;oe+=1)we=x[oe>>>2]>>>8*(Re+$*(oe%4)),re+="0123456789abcdef".charAt(we>>>4&15)+"0123456789abcdef".charAt(15&we);return J.outputUpper?re.toUpperCase():re}(D,g,I,T)};case"B64":return function(D){return function(x,W,$,J){var oe,we,re,ue,Re,ae="",Ke=W/8,Ve=$===-1?3:0;for(oe=0;oe<Ke;oe+=3)for(ue=oe+1<Ke?x[oe+1>>>2]:0,Re=oe+2<Ke?x[oe+2>>>2]:0,re=(x[oe>>>2]>>>8*(Ve+$*(oe%4))&255)<<16|(ue>>>8*(Ve+$*((oe+1)%4))&255)<<8|Re>>>8*(Ve+$*((oe+2)%4))&255,we=0;we<4;we+=1)ae+=8*oe+6*we<=W?a.charAt(re>>>6*(3-we)&63):J.b64Pad;return ae}(D,g,I,T)};case"BYTES":return function(D){return function(x,W,$){var J,oe,we="",re=W/8,ue=$===-1?3:0;for(J=0;J<re;J+=1)oe=x[J>>>2]>>>8*(ue+$*(J%4))&255,we+=String.fromCharCode(oe);return we}(D,g,I)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(D){return function(x,W,$){var J,oe=W/8,we=new ArrayBuffer(oe),re=new Uint8Array(we),ue=$===-1?3:0;for(J=0;J<oe;J+=1)re[J]=x[J>>>2]>>>8*(ue+$*(J%4))&255;return we}(D,g,I)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(D){return function(x,W,$){var J,oe=W/8,we=$===-1?3:0,re=new Uint8Array(oe);for(J=0;J<oe;J+=1)re[J]=x[J>>>2]>>>8*(we+$*(J%4))&255;return re}(D,g,I)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}var n=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],r=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s="Chosen SHA variant is not supported";function l(S,g){var I,T,D=S.binLen>>>3,x=g.binLen>>>3,W=D<<3,$=4-D<<3;if(D%4!=0){for(I=0;I<x;I+=4)T=D+I>>>2,S.value[T]|=g.value[I>>>2]<<W,S.value.push(0),S.value[T+1]|=g.value[I>>>2]>>>$;return(S.value.length<<2)-4>=x+D&&S.value.pop(),{value:S.value,binLen:S.binLen+g.binLen}}return{value:S.value.concat(g.value),binLen:S.binLen+g.binLen}}function c(S){var g={outputUpper:!1,b64Pad:"=",outputLen:-1},I=S||{},T="Output length must be a multiple of 8";if(g.outputUpper=I.outputUpper||!1,I.b64Pad&&(g.b64Pad=I.b64Pad),I.outputLen){if(I.outputLen%8!=0)throw new Error(T);g.outputLen=I.outputLen}else if(I.shakeLen){if(I.shakeLen%8!=0)throw new Error(T);g.outputLen=I.shakeLen}if(typeof g.outputUpper!="boolean")throw new Error("Invalid outputUpper formatting option");if(typeof g.b64Pad!="string")throw new Error("Invalid b64Pad formatting option");return g}function u(S,g,I,T){var D=S+" must include a value and format";if(!g){if(!T)throw new Error(D);return T}if(g.value===void 0||!g.format)throw new Error(D);return e(g.format,g.encoding||"UTF8",I)(g.value)}var m=function(){function S(g,I,T){var D=T||{};if(this.t=I,this.i=D.encoding||"UTF8",this.numRounds=D.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=g,this.u=[],this.s=0,this.h=!1,this.v=0,this.A=!1,this.l=[],this.H=[]}return S.prototype.update=function(g){var I,T=0,D=this.S>>>5,x=this.p(g,this.u,this.s),W=x.binLen,$=x.value,J=W>>>5;for(I=0;I<J;I+=D)T+this.S<=W&&(this.m=this.R($.slice(I,I+D),this.m),T+=this.S);this.v+=T,this.u=$.slice(T>>>5),this.s=W%this.S,this.h=!0},S.prototype.getHash=function(g,I){var T,D,x=this.U,W=c(I);if(this.T){if(W.outputLen===-1)throw new Error("Output length must be specified in options");x=W.outputLen}var $=i(g,x,this.C,W);if(this.A&&this.F)return $(this.F(W));for(D=this.K(this.u.slice(),this.s,this.v,this.B(this.m),x),T=1;T<this.numRounds;T+=1)this.T&&x%32!=0&&(D[D.length-1]&=16777215>>>24-x%32),D=this.K(D,x,0,this.L(this.o),x);return $(D)},S.prototype.setHMACKey=function(g,I,T){if(!this.g)throw new Error("Variant does not support HMAC");if(this.h)throw new Error("Cannot set MAC key after calling update");var D=e(I,(T||{}).encoding||"UTF8",this.C);this.k(D(g))},S.prototype.k=function(g){var I,T=this.S>>>3,D=T/4-1;if(this.numRounds!==1)throw new Error("Cannot set numRounds with MAC");if(this.A)throw new Error("MAC key already set");for(T<g.binLen/8&&(g.value=this.K(g.value,g.binLen,0,this.L(this.o),this.U));g.value.length<=D;)g.value.push(0);for(I=0;I<=D;I+=1)this.l[I]=909522486^g.value[I],this.H[I]=1549556828^g.value[I];this.m=this.R(this.l,this.m),this.v=this.S,this.A=!0},S.prototype.getHMAC=function(g,I){var T=c(I);return i(g,this.U,this.C,T)(this.Y())},S.prototype.Y=function(){var g;if(!this.A)throw new Error("Cannot call getHMAC without first setting MAC key");var I=this.K(this.u.slice(),this.s,this.v,this.B(this.m),this.U);return g=this.R(this.H,this.L(this.o)),g=this.K(I,this.U,this.S,g,this.U)},S}(),b=function(S,g){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(I,T){I.__proto__=T}||function(I,T){for(var D in T)Object.prototype.hasOwnProperty.call(T,D)&&(I[D]=T[D])})(S,g)};function _(S,g){function I(){this.constructor=S}b(S,g),S.prototype=g===null?Object.create(g):(I.prototype=g.prototype,new I)}function w(S,g){return S<<g|S>>>32-g}function v(S,g){return S>>>g|S<<32-g}function E(S,g){return S>>>g}function B(S,g,I){return S^g^I}function G(S,g,I){return S&g^~S&I}function j(S,g,I){return S&g^S&I^g&I}function Z(S){return v(S,2)^v(S,13)^v(S,22)}function q(S,g){var I=(65535&S)+(65535&g);return(65535&(S>>>16)+(g>>>16)+(I>>>16))<<16|65535&I}function Y(S,g,I,T){var D=(65535&S)+(65535&g)+(65535&I)+(65535&T);return(65535&(S>>>16)+(g>>>16)+(I>>>16)+(T>>>16)+(D>>>16))<<16|65535&D}function V(S,g,I,T,D){var x=(65535&S)+(65535&g)+(65535&I)+(65535&T)+(65535&D);return(65535&(S>>>16)+(g>>>16)+(I>>>16)+(T>>>16)+(D>>>16)+(x>>>16))<<16|65535&x}function he(S){return v(S,7)^v(S,18)^E(S,3)}function Ue(S){return v(S,6)^v(S,11)^v(S,25)}function Pe(S){return[1732584193,4023233417,2562383102,271733878,3285377520]}function Be(S,g){var I,T,D,x,W,$,J,oe=[];for(I=g[0],T=g[1],D=g[2],x=g[3],W=g[4],J=0;J<80;J+=1)oe[J]=J<16?S[J]:w(oe[J-3]^oe[J-8]^oe[J-14]^oe[J-16],1),$=J<20?V(w(I,5),G(T,D,x),W,1518500249,oe[J]):J<40?V(w(I,5),B(T,D,x),W,1859775393,oe[J]):J<60?V(w(I,5),j(T,D,x),W,2400959708,oe[J]):V(w(I,5),B(T,D,x),W,3395469782,oe[J]),W=x,x=D,D=w(T,30),T=I,I=$;return g[0]=q(I,g[0]),g[1]=q(T,g[1]),g[2]=q(D,g[2]),g[3]=q(x,g[3]),g[4]=q(W,g[4]),g}function yt(S,g,I,T){for(var D,x=15+(g+65>>>9<<4),W=g+I;S.length<=x;)S.push(0);for(S[g>>>5]|=128<<24-g%32,S[x]=4294967295&W,S[x-1]=W/4294967296|0,D=0;D<S.length;D+=16)T=Be(S.slice(D,D+16),T);return T}var zt=function(S){function g(I,T,D){var x=this;if(I!=="SHA-1")throw new Error(s);var W=D||{};return(x=S.call(this,I,T,D)||this).g=!0,x.F=x.Y,x.C=-1,x.p=e(x.t,x.i,x.C),x.R=Be,x.B=function($){return $.slice()},x.L=Pe,x.K=yt,x.m=[1732584193,4023233417,2562383102,271733878,3285377520],x.S=512,x.U=160,x.T=!1,W.hmacKey&&x.k(u("hmacKey",W.hmacKey,x.C)),x}return _(g,S),g}(m);function Ci(S){return S=="SHA-224"?r.slice():o.slice()}function se(S,g){var I,T,D,x,W,$,J,oe,we,re,ue,Re,ae=[];for(I=g[0],T=g[1],D=g[2],x=g[3],W=g[4],$=g[5],J=g[6],oe=g[7],ue=0;ue<64;ue+=1)ae[ue]=ue<16?S[ue]:Y(v(Re=ae[ue-2],17)^v(Re,19)^E(Re,10),ae[ue-7],he(ae[ue-15]),ae[ue-16]),we=V(oe,Ue(W),G(W,$,J),n[ue],ae[ue]),re=q(Z(I),j(I,T,D)),oe=J,J=$,$=W,W=q(x,we),x=D,D=T,T=I,I=q(we,re);return g[0]=q(I,g[0]),g[1]=q(T,g[1]),g[2]=q(D,g[2]),g[3]=q(x,g[3]),g[4]=q(W,g[4]),g[5]=q($,g[5]),g[6]=q(J,g[6]),g[7]=q(oe,g[7]),g}var ve=function(S){function g(I,T,D){var x=this;if(I!=="SHA-224"&&I!=="SHA-256")throw new Error(s);var W=D||{};return(x=S.call(this,I,T,D)||this).F=x.Y,x.g=!0,x.C=-1,x.p=e(x.t,x.i,x.C),x.R=se,x.B=function($){return $.slice()},x.L=Ci,x.K=function($,J,oe,we){return function(re,ue,Re,ae,Ke){for(var Ve,Ze=15+(ue+65>>>9<<4),ot=ue+Re;re.length<=Ze;)re.push(0);for(re[ue>>>5]|=128<<24-ue%32,re[Ze]=4294967295&ot,re[Ze-1]=ot/4294967296|0,Ve=0;Ve<re.length;Ve+=16)ae=se(re.slice(Ve,Ve+16),ae);return Ke==="SHA-224"?[ae[0],ae[1],ae[2],ae[3],ae[4],ae[5],ae[6]]:ae}($,J,oe,we,I)},x.m=Ci(I),x.S=512,x.U=I==="SHA-224"?224:256,x.T=!1,W.hmacKey&&x.k(u("hmacKey",W.hmacKey,x.C)),x}return _(g,S),g}(m),A=function(S,g){this.N=S,this.I=g};function et(S,g){var I;return g>32?(I=64-g,new A(S.I<<g|S.N>>>I,S.N<<g|S.I>>>I)):g!==0?(I=32-g,new A(S.N<<g|S.I>>>I,S.I<<g|S.N>>>I)):S}function Oe(S,g){var I;return g<32?(I=32-g,new A(S.N>>>g|S.I<<I,S.I>>>g|S.N<<I)):(I=64-g,new A(S.I>>>g|S.N<<I,S.N>>>g|S.I<<I))}function bt(S,g){return new A(S.N>>>g,S.I>>>g|S.N<<32-g)}function Gt(S,g,I){return new A(S.N&g.N^~S.N&I.N,S.I&g.I^~S.I&I.I)}function jt(S,g,I){return new A(S.N&g.N^S.N&I.N^g.N&I.N,S.I&g.I^S.I&I.I^g.I&I.I)}function Ki(S){var g=Oe(S,28),I=Oe(S,34),T=Oe(S,39);return new A(g.N^I.N^T.N,g.I^I.I^T.I)}function _t(S,g){var I,T;I=(65535&S.I)+(65535&g.I);var D=(65535&(T=(S.I>>>16)+(g.I>>>16)+(I>>>16)))<<16|65535&I;return I=(65535&S.N)+(65535&g.N)+(T>>>16),T=(S.N>>>16)+(g.N>>>16)+(I>>>16),new A((65535&T)<<16|65535&I,D)}function Fa(S,g,I,T){var D,x;D=(65535&S.I)+(65535&g.I)+(65535&I.I)+(65535&T.I);var W=(65535&(x=(S.I>>>16)+(g.I>>>16)+(I.I>>>16)+(T.I>>>16)+(D>>>16)))<<16|65535&D;return D=(65535&S.N)+(65535&g.N)+(65535&I.N)+(65535&T.N)+(x>>>16),x=(S.N>>>16)+(g.N>>>16)+(I.N>>>16)+(T.N>>>16)+(D>>>16),new A((65535&x)<<16|65535&D,W)}function Ln(S,g,I,T,D){var x,W;x=(65535&S.I)+(65535&g.I)+(65535&I.I)+(65535&T.I)+(65535&D.I);var $=(65535&(W=(S.I>>>16)+(g.I>>>16)+(I.I>>>16)+(T.I>>>16)+(D.I>>>16)+(x>>>16)))<<16|65535&x;return x=(65535&S.N)+(65535&g.N)+(65535&I.N)+(65535&T.N)+(65535&D.N)+(W>>>16),W=(S.N>>>16)+(g.N>>>16)+(I.N>>>16)+(T.N>>>16)+(D.N>>>16)+(x>>>16),new A((65535&W)<<16|65535&x,$)}function Zt(S,g){return new A(S.N^g.N,S.I^g.I)}function So(S){var g=Oe(S,1),I=Oe(S,8),T=bt(S,7);return new A(g.N^I.N^T.N,g.I^I.I^T.I)}function ha(S){var g=Oe(S,14),I=Oe(S,18),T=Oe(S,41);return new A(g.N^I.N^T.N,g.I^I.I^T.I)}var za=[new A(n[0],3609767458),new A(n[1],602891725),new A(n[2],3964484399),new A(n[3],2173295548),new A(n[4],4081628472),new A(n[5],3053834265),new A(n[6],2937671579),new A(n[7],3664609560),new A(n[8],2734883394),new A(n[9],1164996542),new A(n[10],1323610764),new A(n[11],3590304994),new A(n[12],4068182383),new A(n[13],991336113),new A(n[14],633803317),new A(n[15],3479774868),new A(n[16],2666613458),new A(n[17],944711139),new A(n[18],2341262773),new A(n[19],2007800933),new A(n[20],1495990901),new A(n[21],1856431235),new A(n[22],3175218132),new A(n[23],2198950837),new A(n[24],3999719339),new A(n[25],766784016),new A(n[26],2566594879),new A(n[27],3203337956),new A(n[28],1034457026),new A(n[29],2466948901),new A(n[30],3758326383),new A(n[31],168717936),new A(n[32],1188179964),new A(n[33],1546045734),new A(n[34],1522805485),new A(n[35],2643833823),new A(n[36],2343527390),new A(n[37],1014477480),new A(n[38],1206759142),new A(n[39],344077627),new A(n[40],1290863460),new A(n[41],3158454273),new A(n[42],3505952657),new A(n[43],106217008),new A(n[44],3606008344),new A(n[45],1432725776),new A(n[46],1467031594),new A(n[47],851169720),new A(n[48],3100823752),new A(n[49],1363258195),new A(n[50],3750685593),new A(n[51],3785050280),new A(n[52],3318307427),new A(n[53],3812723403),new A(n[54],2003034995),new A(n[55],3602036899),new A(n[56],1575990012),new A(n[57],1125592928),new A(n[58],2716904306),new A(n[59],442776044),new A(n[60],593698344),new A(n[61],3733110249),new A(n[62],2999351573),new A(n[63],3815920427),new A(3391569614,3928383900),new A(3515267271,566280711),new A(3940187606,3454069534),new A(4118630271,4000239992),new A(116418474,1914138554),new A(174292421,2731055270),new A(289380356,3203993006),new A(460393269,320620315),new A(685471733,587496836),new A(852142971,1086792851),new A(1017036298,365543100),new A(1126000580,2618297676),new A(1288033470,3409855158),new A(1501505948,4234509866),new A(1607167915,987167468),new A(1816402316,1246189591)];function Co(S){return S==="SHA-384"?[new A(3418070365,r[0]),new A(1654270250,r[1]),new A(2438529370,r[2]),new A(355462360,r[3]),new A(1731405415,r[4]),new A(41048885895,r[5]),new A(3675008525,r[6]),new A(1203062813,r[7])]:[new A(o[0],4089235720),new A(o[1],2227873595),new A(o[2],4271175723),new A(o[3],1595750129),new A(o[4],2917565137),new A(o[5],725511199),new A(o[6],4215389547),new A(o[7],327033209)]}function si(S,g){var I,T,D,x,W,$,J,oe,we,re,ue,Re,ae,Ke,Ve,Ze,ot=[];for(I=g[0],T=g[1],D=g[2],x=g[3],W=g[4],$=g[5],J=g[6],oe=g[7],ue=0;ue<80;ue+=1)ue<16?(Re=2*ue,ot[ue]=new A(S[Re],S[Re+1])):ot[ue]=Fa((ae=ot[ue-2],Ke=void 0,Ve=void 0,Ze=void 0,Ke=Oe(ae,19),Ve=Oe(ae,61),Ze=bt(ae,6),new A(Ke.N^Ve.N^Ze.N,Ke.I^Ve.I^Ze.I)),ot[ue-7],So(ot[ue-15]),ot[ue-16]),we=Ln(oe,ha(W),Gt(W,$,J),za[ue],ot[ue]),re=_t(Ki(I),jt(I,T,D)),oe=J,J=$,$=W,W=_t(x,we),x=D,D=T,T=I,I=_t(we,re);return g[0]=_t(I,g[0]),g[1]=_t(T,g[1]),g[2]=_t(D,g[2]),g[3]=_t(x,g[3]),g[4]=_t(W,g[4]),g[5]=_t($,g[5]),g[6]=_t(J,g[6]),g[7]=_t(oe,g[7]),g}var Ga=function(S){function g(I,T,D){var x=this;if(I!=="SHA-384"&&I!=="SHA-512")throw new Error(s);var W=D||{};return(x=S.call(this,I,T,D)||this).F=x.Y,x.g=!0,x.C=-1,x.p=e(x.t,x.i,x.C),x.R=si,x.B=function($){return $.slice()},x.L=Co,x.K=function($,J,oe,we){return function(re,ue,Re,ae,Ke){for(var Ve,Ze=31+(ue+129>>>10<<5),ot=ue+Re;re.length<=Ze;)re.push(0);for(re[ue>>>5]|=128<<24-ue%32,re[Ze]=4294967295&ot,re[Ze-1]=ot/4294967296|0,Ve=0;Ve<re.length;Ve+=32)ae=si(re.slice(Ve,Ve+32),ae);return Ke==="SHA-384"?[(ae=ae)[0].N,ae[0].I,ae[1].N,ae[1].I,ae[2].N,ae[2].I,ae[3].N,ae[3].I,ae[4].N,ae[4].I,ae[5].N,ae[5].I]:[ae[0].N,ae[0].I,ae[1].N,ae[1].I,ae[2].N,ae[2].I,ae[3].N,ae[3].I,ae[4].N,ae[4].I,ae[5].N,ae[5].I,ae[6].N,ae[6].I,ae[7].N,ae[7].I]}($,J,oe,we,I)},x.m=Co(I),x.S=1024,x.U=I==="SHA-384"?384:512,x.T=!1,W.hmacKey&&x.k(u("hmacKey",W.hmacKey,x.C)),x}return _(g,S),g}(m),Jn=[new A(0,1),new A(0,32898),new A(2147483648,32906),new A(2147483648,2147516416),new A(0,32907),new A(0,2147483649),new A(2147483648,2147516545),new A(2147483648,32777),new A(0,138),new A(0,136),new A(0,2147516425),new A(0,2147483658),new A(0,2147516555),new A(2147483648,139),new A(2147483648,32905),new A(2147483648,32771),new A(2147483648,32770),new A(2147483648,128),new A(0,32778),new A(2147483648,2147483658),new A(2147483648,2147516545),new A(2147483648,32896),new A(0,2147483649),new A(2147483648,2147516424)],Hl=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function er(S){var g,I=[];for(g=0;g<5;g+=1)I[g]=[new A(0,0),new A(0,0),new A(0,0),new A(0,0),new A(0,0)];return I}function uw(S){var g,I=[];for(g=0;g<5;g+=1)I[g]=S[g].slice();return I}function Ul(S,g){var I,T,D,x,W,$,J,oe,we,re=[],ue=[];if(S!==null)for(T=0;T<S.length;T+=2)g[(T>>>1)%5][(T>>>1)/5|0]=Zt(g[(T>>>1)%5][(T>>>1)/5|0],new A(S[T+1],S[T]));for(I=0;I<24;I+=1){for(x=er(),T=0;T<5;T+=1)re[T]=(W=g[T][0],$=g[T][1],J=g[T][2],oe=g[T][3],we=g[T][4],new A(W.N^$.N^J.N^oe.N^we.N,W.I^$.I^J.I^oe.I^we.I));for(T=0;T<5;T+=1)ue[T]=Zt(re[(T+4)%5],et(re[(T+1)%5],1));for(T=0;T<5;T+=1)for(D=0;D<5;D+=1)g[T][D]=Zt(g[T][D],ue[T]);for(T=0;T<5;T+=1)for(D=0;D<5;D+=1)x[D][(2*T+3*D)%5]=et(g[T][D],Hl[T][D]);for(T=0;T<5;T+=1)for(D=0;D<5;D+=1)g[T][D]=Zt(x[T][D],new A(~x[(T+1)%5][D].N&x[(T+2)%5][D].N,~x[(T+1)%5][D].I&x[(T+2)%5][D].I));g[0][0]=Zt(g[0][0],Jn[I])}return g}function Fv(S){var g,I,T=0,D=[0,0],x=[4294967295&S,S/4294967296&2097151];for(g=6;g>=0;g--)(I=x[g>>2]>>>8*g&255)===0&&T===0||(D[T+1>>2]|=I<<8*(T+1),T+=1);return T=T!==0?T:1,D[0]|=T,{value:T+1>4?D:[D[0]],binLen:8+8*T}}function Vb(S){return l(Fv(S.binLen),S)}function zv(S,g){var I,T=Fv(g),D=g>>>2,x=(D-(T=l(T,S)).value.length%D)%D;for(I=0;I<x;I++)T.value.push(0);return T.value}var pw=function(S){function g(I,T,D){var x=this,W=6,$=0,J=D||{};if((x=S.call(this,I,T,D)||this).numRounds!==1){if(J.kmacKey||J.hmacKey)throw new Error("Cannot set numRounds with MAC");if(x.o==="CSHAKE128"||x.o==="CSHAKE256")throw new Error("Cannot set numRounds for CSHAKE variants")}switch(x.C=1,x.p=e(x.t,x.i,x.C),x.R=Ul,x.B=uw,x.L=er,x.m=er(),x.T=!1,I){case"SHA3-224":x.S=$=1152,x.U=224,x.g=!0,x.F=x.Y;break;case"SHA3-256":x.S=$=1088,x.U=256,x.g=!0,x.F=x.Y;break;case"SHA3-384":x.S=$=832,x.U=384,x.g=!0,x.F=x.Y;break;case"SHA3-512":x.S=$=576,x.U=512,x.g=!0,x.F=x.Y;break;case"SHAKE128":W=31,x.S=$=1344,x.U=-1,x.T=!0,x.g=!1,x.F=null;break;case"SHAKE256":W=31,x.S=$=1088,x.U=-1,x.T=!0,x.g=!1,x.F=null;break;case"KMAC128":W=4,x.S=$=1344,x.M(D),x.U=-1,x.T=!0,x.g=!1,x.F=x.X;break;case"KMAC256":W=4,x.S=$=1088,x.M(D),x.U=-1,x.T=!0,x.g=!1,x.F=x.X;break;case"CSHAKE128":x.S=$=1344,W=x.O(D),x.U=-1,x.T=!0,x.g=!1,x.F=null;break;case"CSHAKE256":x.S=$=1088,W=x.O(D),x.U=-1,x.T=!0,x.g=!1,x.F=null;break;default:throw new Error(s)}return x.K=function(oe,we,re,ue,Re){return function(ae,Ke,Ve,Ze,ot,fa,li){var ki,Fb,Vl=0,ko=[],Fl=ot>>>5,mw=Ke>>>5;for(ki=0;ki<mw&&Ke>=ot;ki+=Fl)Ze=Ul(ae.slice(ki,ki+Fl),Ze),Ke-=ot;for(ae=ae.slice(ki),Ke%=ot;ae.length<Fl;)ae.push(0);for(ae[(ki=Ke>>>3)>>2]^=fa<<ki%4*8,ae[Fl-1]^=2147483648,Ze=Ul(ae,Ze);32*ko.length<li&&(Fb=Ze[Vl%5][Vl/5|0],ko.push(Fb.I),!(32*ko.length>=li));)ko.push(Fb.N),64*(Vl+=1)%ot==0&&(Ul(null,Ze),Vl=0);return ko}(oe,we,0,ue,$,W,Re)},J.hmacKey&&x.k(u("hmacKey",J.hmacKey,x.C)),x}return _(g,S),g.prototype.O=function(I,T){var D=function(J){var oe=J||{};return{funcName:u("funcName",oe.funcName,1,{value:[],binLen:0}),customization:u("Customization",oe.customization,1,{value:[],binLen:0})}}(I||{});T&&(D.funcName=T);var x=l(Vb(D.funcName),Vb(D.customization));if(D.customization.binLen!==0||D.funcName.binLen!==0){for(var W=zv(x,this.S>>>3),$=0;$<W.length;$+=this.S>>>5)this.m=this.R(W.slice($,$+(this.S>>>5)),this.m),this.v+=this.S;return 4}return 31},g.prototype.M=function(I){var T=function(W){var $=W||{};return{kmacKey:u("kmacKey",$.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:u("Customization",$.customization,1,{value:[],binLen:0})}}(I||{});this.O(I,T.funcName);for(var D=zv(Vb(T.kmacKey),this.S>>>3),x=0;x<D.length;x+=this.S>>>5)this.m=this.R(D.slice(x,x+(this.S>>>5)),this.m),this.v+=this.S;this.A=!0},g.prototype.X=function(I){var T=l({value:this.u.slice(),binLen:this.s},function(D){var x,W,$=0,J=[0,0],oe=[4294967295&D,D/4294967296&2097151];for(x=6;x>=0;x--)(W=oe[x>>2]>>>8*x&255)==0&&$===0||(J[$>>2]|=W<<8*$,$+=1);return J[($=$!==0?$:1)>>2]|=$<<8*$,{value:$+1>4?J:[J[0]],binLen:8+8*$}}(I.outputLen));return this.K(T.value,T.binLen,this.v,this.B(this.m),I.outputLen)},g}(m);return function(){function S(g,I,T){if(g=="SHA-1")this.j=new zt(g,I,T);else if(g=="SHA-224"||g=="SHA-256")this.j=new ve(g,I,T);else if(g=="SHA-384"||g=="SHA-512")this.j=new Ga(g,I,T);else{if(g!="SHA3-224"&&g!="SHA3-256"&&g!="SHA3-384"&&g!="SHA3-512"&&g!="SHAKE128"&&g!="SHAKE256"&&g!="CSHAKE128"&&g!="CSHAKE256"&&g!="KMAC128"&&g!="KMAC256")throw new Error(s);this.j=new pw(g,I,T)}}return S.prototype.update=function(g){this.j.update(g)},S.prototype.getHash=function(g,I){return this.j.getHash(g,I)},S.prototype.setHMACKey=function(g,I,T){this.j.setHMACKey(g,I,T)},S.prototype.getHMAC=function(g,I){return this.j.getHMAC(g,I)},S}()})});var Gl=class extends Laya.Scene{};var{regClass:Lw,property:O1}=Laya,Ao=class extends Gl{constructor(){super()}onEnable(){console.log("IndexRT onEnable"),this.uiBtn.on(Laya.Event.CLICK,this,()=>{console.log("uiBtn"),Laya.Scene.open("scenes/UiMain.ls")}),this.phyBtn.on(Laya.Event.CLICK,this,()=>{console.log("phyBtn"),Laya.Scene.open("scenes/PhysicsGameMain.ls")}),this.d3Btn.on(Laya.Event.CLICK,this,()=>{console.log("d3Btn"),Laya.Scene.open("scenes/D3Main.ls")})}onDestroy(){}};Ao=p([Lw("wtSVevJMRPCBIPp2HPhqpw")],Ao);var jl=class extends Laya.Scene{};var{regClass:_w,property:xw}=Laya,Do=class extends jl{constructor(){super();this.text=""}get dataSource(){return super.dataSource}set dataSource(e){if(super.dataSource=e,!!e){if(e.avatar){let i=this.getChildByName("avatar").getChildByName("redHot");i.visible=e.avatar.redHot.visible}if(e.flag){let i=this.getChildByName("flag").getChildByName("flagText");i.text=e.flag.flagText.text}}}};p([xw({type:"string"})],Do.prototype,"text",2),Do=p([_w("c-3Sonu7RWOm5ETy2TrBcg")],Do);var Kl=class extends Laya.Scene{};var Le=class{constructor(){this._keys=[];this.THIS_ID="id"}init(t){for(let e in t){this._keys.push(e);let i=t[e];t[e]instanceof String&&String(t[e]).indexOf("[[")>=0&&(i=JSON.parse(t[e])),this[e]=i}}checkItems(){}};var Mo=class extends Le{};var te=class{constructor(){this._values=[];this._keys=[];this.SERIALIZATION_NUM=new Date().getTime()}get values(){return this._values}get keys(){return this._keys}set(t,e){let i=this.indexOf(t);if(i>=0){this._values[i]=e;return}this._keys.push(t),this._values.push(e)}unshift(t,e){let i=this.indexOf(t);if(i>=0){this._values[i]=e;return}this._keys.unshift(t),this._values.unshift(e)}indexOf(t){let e=this._keys.indexOf(t);return e>=0?e:(t=t instanceof String?Number(t):t instanceof Number?t.toString():t,this._keys.indexOf(t))}get(t){let e=this.indexOf(t);return e<0?null:this._values[e]}remove(t){let e=this.indexOf(t);return e>=0?(this._keys.splice(e,1),this._values.splice(e,1),!0):!1}clear(){this._values.length=0,this._keys.length=0}};var fe=class fe{constructor(){}static get LoginType(){return fe._LoginType}static set LoginType(t){fe._LoginType=t,fe._LoginType&&fe._LoginType!=""&&Laya.LocalStorage.setItem(fe.COOKIE_CF_LoginType,fe._LoginType)}static get isWhiteList(){return!0}static get intance(){return fe._instance||(fe._instance=new fe),fe._instance}init(){}static get server(){return getServer()}static get vType(){return getVType()}static get requestTime(){return 0}static get loginTime(){return 0}static set m_iTimeFrame(t){if(t>1500){let e=function(){fe._m_iTimeFrame=0};fe._m_iTimeFrame=t,Laya.timer.clear(Laya.timer,e),Laya.timer.once(500,Laya.timer,e)}}static get m_iTimeFrame(){return fe._m_iTimeFrame}};fe.IsRelease=!1,fe.m_bInstantGame=!1,fe.useWebVersion=!1,fe.m_strVersionEX="V003",fe.m_bIsMobWeb=!1,fe.m_strWebTag="",fe.Js_Version="1",fe.Game_Version="20231227_01",fe.App_Version="1.0.0",fe.SDK_Version="1.0.0",fe.M_strCountry="1",fe.M_bAppData=!1,fe.M_strTarget="",fe.UseGuide=!1,fe.m_mobileSameWb=!1,fe.ignoreLang=!1,fe.ignoreSheetNo=!1,fe.m_bIsIphoneX=!1,fe.Debug=0,fe.Res=0,fe.isTest=!0,fe.Server_URL="",fe.IP_User="",fe.Plantform_APPID="17",fe.ServerId=22310001,fe.Login_UID="-1",fe._LoginType="gamecenter",fe.isInto=!1,fe.isFull=!1,fe.justFull=!1,fe.Login_UDID="81BC19A8-B49B-47CC-BEFE-193E723B521A",fe.Device_Info="",fe.FCM_Token="",fe.APP_IsRelease=!0,fe.User_Lan="en",fe.UserAgent="",fe.Login_UserName="",fe.isWhite=!1,fe.APP_RES="",fe.COOKIE_CF_LAN="COOKIE_GG_LAN",fe.COOKIE_CF_LoginType="COOKIE_CF_LoginType",fe.IPHONEX_SCARE=1.22,fe.IPHONEX_TOP=44,fe.IPHONEX_BUTTOM=34,fe.DESIGN_WIDTH=1334,fe.DESIGN_HEIGHT=750,fe._m_iTimeFrame=0,fe.isStopPhysics=!1,fe.isDown=!1;var X=fe;var ee=class ee{constructor(){this._touchEnabled=!0;if(ee._instance)throw new Error("LayerManager是单例,不可new.");ee._instance=this}get m_sprPanelLayer(){return this._m_sprPanelLayer}set m_sprPanelLayer(t){this._m_sprPanelLayer=t}get m_sprMainUILayer(){return this._m_sprMainUILayer}set m_sprMainUILayer(t){this._m_sprMainUILayer=t}get m_sprTipLayer(){return this._m_sprTipLayer}set m_sprTipLayer(t){this._m_sprTipLayer=t}static get instence(){return ee._instance||(ee._instance=new ee),ee._instance}init(){this.m_sprSceneLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprSceneLayer),this.m_sprMainUILayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprMainUILayer),this.m_sprPanelLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprPanelLayer),this.m_sprPopLayer=new Laya.Sprite,this.m_sprPopLayer.mouseThrough=!0,Laya.stage.addChild(this.m_sprPopLayer),this.m_sprTipLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTipLayer),this.m_sprGuideLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprGuideLayer),this.m_sprTopLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTopLayer)}get touchEnabled(){return this._touchEnabled}set touchEnabled(t){this._touchEnabled!=t&&(this._touchEnabled=t,this.m_sprSceneLayer.mouseEnabled=this._touchEnabled,this.m_sprMainUILayer.mouseEnabled=this._touchEnabled,this.m_sprPanelLayer.mouseEnabled=this._touchEnabled,this.m_sprPopLayer.mouseEnabled=this._touchEnabled,this.m_sprTipLayer.mouseEnabled=this._touchEnabled,this.m_sprGuideLayer.mouseEnabled=this._touchEnabled,this.m_sprTopLayer.mouseEnabled=this._touchEnabled)}addToLayerAndSet(t,e=ee.M_PANEL,i=ee.CENTER){this.addToLayer(t,e),this.setPosition(t,i)}getLayerIndex(t,e=ee.M_PANEL){let i;switch(e){case ee.M_SCENE:i=this.m_sprSceneLayer.getChildIndex(t);break;case ee.M_MAINUI:i=this.m_sprMainUILayer.getChildIndex(t);break;case ee.M_PANEL:i=this.m_sprPanelLayer.getChildIndex(t);break;case ee.M_POP:i=this.m_sprPopLayer.getChildIndex(t);break;case ee.M_TIP:i=this.m_sprTipLayer.getChildIndex(t);break;case ee.M_GUIDE:i=this.m_sprGuideLayer.getChildIndex(t);break;case ee.M_TOP:i=this.m_sprTopLayer.getChildIndex(t);break}return i}addToLayerAt(t,e=ee.M_PANEL,i=0){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.addChildAt(t,i);break;case ee.M_MAINUI:this.m_sprMainUILayer.addChildAt(t,i);break;case ee.M_PANEL:this.m_sprPanelLayer.addChildAt(t,i);break;case ee.M_POP:this.m_sprPopLayer.addChildAt(t,i);break;case ee.M_TIP:this.m_sprTipLayer.addChildAt(t,i);break;case ee.M_GUIDE:this.m_sprGuideLayer.addChildAt(t,i);break;case ee.M_TOP:this.m_sprTopLayer.addChildAt(t,i);break}}addToLayer(t,e=ee.M_PANEL){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.addChild(t);break;case ee.M_MAINUI:this.m_sprMainUILayer.addChild(t);break;case ee.M_PANEL:this.m_sprPanelLayer.addChild(t);break;case ee.M_POP:this.m_sprPopLayer.addChild(t);break;case ee.M_TIP:this.m_sprTipLayer.addChild(t);break;case ee.M_GUIDE:this.m_sprGuideLayer.addChild(t);break;case ee.M_TOP:this.m_sprTopLayer.addChild(t);break}}removeFromLayer(t,e){switch(e){case ee.M_SCENE:this.m_sprSceneLayer.removeChild(t);break;case ee.M_MAINUI:this.m_sprMainUILayer.removeChild(t);break;case ee.M_PANEL:this.m_sprPanelLayer.removeChild(t);break;case ee.M_POP:this.m_sprPopLayer.removeChild(t);break;case ee.M_GUIDE:this.m_sprGuideLayer.removeChild(t);break;case ee.M_TOP:this.m_sprTopLayer.removeChild(t);break}}clearLayer(t){switch(t){case ee.M_SCENE:this.m_sprSceneLayer.removeChildren();break;case ee.M_MAINUI:this.m_sprSceneLayer.removeChildren();break;case ee.M_PANEL:this.m_sprSceneLayer.removeChildren();break;case ee.M_POP:this.m_sprSceneLayer.removeChildren();break;case ee.M_TOP:this.m_sprSceneLayer.removeChildren();break}}get stageWidth(){let t;return t=Laya.stage.width,t}get stageHeight(){let t;return t=Laya.stage.height,t}setPosition(t,e,i=0,n=0,r=!1,o=!1){let s=Laya.stage.width,l=Laya.stage.height;switch(this.m_iStageWidth=s,this.m_iStageHeight=l,e){case ee.UP:t.x=r?s/2:(s-t.width*t.scaleX)/2,t.y=0;break;case ee.DOWN:t.x=r?s/2:(s-t.width*t.scaleX)/2,t.y=l-t.height*t.scaleY;break;case ee.LEFT:t.x=0,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.RIGHT:t.x=s-t.width*t.scaleX,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.LEFTUP:t.x=0,t.y=0;break;case ee.RIGHTUP:t.x=s-t.width*t.scaleX,t.y=0;break;case ee.LEFTDOWN:t.x=0,t.y=l-t.height*t.scaleY;break;case ee.RIGHTDOWN:t.x=s-t.width*t.scaleX,t.y=l-t.height*t.scaleY;break;case ee.CENTERLEFT:t.x=s/2-t.width*t.scaleX,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.CENTERRIGHT:t.x=s/2,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;case ee.CENTER:t.x=r?s/2:(s-t.width*t.scaleX)/2,t.y=o?l/2:(l-t.height*t.scaleY)/2;break;default:break}t.x+=i,t.y+=n}setLayer(t,e,i){if(!t||!e||t.parent!=e.parent)return;let n=t.parent.getChildIndex(t),r=e.parent.getChildIndex(e);i?n>r&&(t.parent.setChildIndex(t,r),t.parent.setChildIndex(e,n)):n<r&&(t.parent.setChildIndex(t,r),t.parent.setChildIndex(e,n))}};ee.M_SCENE=1,ee.M_MAINUI=2,ee.M_PANEL=3,ee.M_POP=4,ee.M_TIP=5,ee.M_GUIDE=7,ee.M_TOP=6,ee.UP=1,ee.DOWN=16,ee.LEFT=256,ee.RIGHT=4096,ee.CENTER=65536,ee.LEFTUP=ee.LEFT|ee.UP,ee.RIGHTUP=ee.RIGHT|ee.UP,ee.LEFTDOWN=ee.LEFT|ee.DOWN,ee.RIGHTDOWN=ee.RIGHT|ee.DOWN,ee.CENTERLEFT=ee.CENTER|ee.LEFT,ee.CENTERRIGHT=ee.CENTER|ee.RIGHT,ee.MOVE=-1;var P=ee;var ya=class extends Le{constructor(){super()}};var tr=class{constructor(t,e){this._valuesObject={};this.sheetObject=t,this.BaseItemClass=e}get keys(){if(this._keys)return this._keys;this._keys=[];let t;for(let e in this.sheetObject)!e||e==""||this._keys.push(e);return this._keys}get values(){if(this._values)return this._values;this._values=[];let t;for(let e in this.sheetObject)this._valuesObject[e]?t=this._valuesObject[e]:(t=new this.BaseItemClass,t.init(this.sheetObject[e]),this._valuesObject[e]=t),this._values.push(t);return this._values}get(t){return this._valuesObject[t]?this._valuesObject[t]:this.sheetObject[t]}get1(t){if(this._valuesObject[t])return this._valuesObject[t];let e=this.sheetObject[t];if(e)return e;let i;this.BaseItemClass&&(i=new this.BaseItemClass,i.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig()  class : "+this.BaseItemClass),i.init(e)),this._valuesObject;let n=i||e;return this._valuesObject[t]=n,n}indexOf(t){let e=this._keys.indexOf(t);return e>=0?e:(t=t instanceof String?Number(t):t instanceof Number?t.toString():t,this._keys.indexOf(t))}clear(){this.sheetObject=null}};var ir=class a{constructor(){}static get instance(){return a._instance||(a._instance=new a),a._instance}initSpotCfgData(){if(this.spotDic==null){let t=C.instance.getResByURL("config/spot.json");this.spotDic=new tr(t.data,ya)}}getSpotById(t){return this.initSpotCfgData(),this.spotDic.get(t)}get getSpotDic(){return this.initSpotCfgData(),this.spotDic}};var Se=class a{constructor(){}registerCommCallBack(t=null){Laya.LayaEnv.isConch}static get instance(){return a._instance||(a._instance=new a),a._instance}sendCustumEvent(t,e=null,i=null){let n;if(i?n=i:n=ir.instance.getSpotById(t),!n||!n.Event)return;let r,o=new Object;o.id=n.ID,o.eventKey=n.Event,o.type=n.type,this.sendWebEvent(o)}sendWebEvent(t){}dispose(){}reload(){Laya.Browser.window.location.reload()}testEvnt(){}};var de=class a{constructor(){this._isLoading=!1}static get instance(){return a._instance||(a._instance=new a),a._instance}get isLoading(){return this._isLoading}init(){if(!this.txtLoadingView){var t=Laya.loader.getRes("scenes/notice/TxtLoadingView.lh");this.txtLoadingView=t.create()}}showLoading(t=!1){if(console.log("showLoading..."+t),this.txtLoadingView)t?(this._isLoading=!0,this.showMaskLoading(),this.showLazyLoading(),this._isLoading=!1):(this._isLoading=!0,this.showMaskLoading(),Laya.timer.once(3e3,this,this.showLazyLoading)),this.txtLoadingView.m_txtLabel&&(this.txtLoadingView.m_txtLabel.visible=!1);else return}showLoadingByInfo(t=""){console.log("showLoadingByInfo..."+t),this._isLoading=!0,this.showMaskLoading(),this.showLazyLoading(),this.txtLoadingView.m_txtLabel.text=t,this.txtLoadingView.m_txtLabel.visible=!0}showMaskLoading(){this._isLoading&&(this.txtLoadingView.backLayer.name="backLayer",this.txtLoadingView.backLayer.mouseEnabled=!0,this.txtLoadingView.backLayer.mouseThrough=!1,this.txtLoadingView.backLayer.visible=!0)}showLazyLoading(){this._isLoading&&(console.log("showLazyLoading..."),this.txtLoadingView.visible=!0,Laya.stage.addChild(this.txtLoadingView),this.txtLoadingView.x=(Laya.stage.width-this.txtLoadingView.width)/2,this.txtLoadingView.y=(Laya.stage.height-this.txtLoadingView.height)/2),Laya.timer.clear(this,this.showLazyLoading)}hideLoading(){if(console.log("hideLoading..."),this._isLoading=!1,this.txtLoadingView)this.txtLoadingView.removeSelf();else return}dispose(){this.txtLoadingView&&(this.txtLoadingView.destroy(),this.txtLoadingView.removeSelf(),this.txtLoadingView=null),this.txtLoadingView.backLayer&&(this.txtLoadingView.backLayer.destroy(),this.txtLoadingView.backLayer.removeSelf(),this.txtLoadingView.backLayer=null)}};var De=class De{constructor(){this._m_bPlayMusic=!0;this._m_bPlayeSound=!0}static get instance(){return De._instance||(De._instance=new De),De._instance}get m_bPlayMusic(){return this._m_bPlayMusic}set m_bPlayMusic(t){this._m_bPlayMusic=t,t?this.m_strMusicURL!=null&&this.playMusicByURL(this.m_strMusicURL):this.musicChannel&&this.musicChannel.stop()}init(){Laya.SoundManager.autoStopMusic=!1;let t=Laya.LocalStorage.getItem(De.COOKIE_CF_MUSIC);t!=null&&t!=""&&(De.instance.m_bPlayMusic=parseInt(t)==1);let e=Laya.LocalStorage.getItem(De.COOKIE_CF_SOUND);e!=null&&e!=""&&(De.instance.m_bPlayeSound=parseInt(e)==1)}get m_bPlayeSound(){return this._m_bPlayeSound}set m_bPlayeSound(t){this._m_bPlayeSound=t}playMusicByURL(t){this.m_bPlayMusic&&(this.m_strMusicURL,this.m_strMusicURL==t&&this.musicChannel,this.m_strMusicURL=t,Laya.SoundManager.stopMusic(),this.musicChannel=Laya.SoundManager.playMusic(t,0,new Laya.Handler(this,this.onComplete)))}playMusicByName(t,e=".ogg"){let i=C.instance.getSoundURL(t,e);this.playMusicByURL(i)}playSound(t,e=1){this.m_bPlayeSound&&Laya.SoundManager.playSound(t,e,new Laya.Handler(this,this.onComplete))}playSoundByName(t,e=1){let i=C.instance.getSoundURLogg(t);this.playSound(i,e)}stopSoundByName(t){let e=C.instance.getSoundURLogg(t);Laya.SoundManager.stopSound(e)}switchMusic(t){let e=t?1:0;De.instance.m_bPlayMusic=t,Laya.LocalStorage.setItem(De.COOKIE_CF_MUSIC,e.toString())}switchSound(t){let e=t?1:0;De.instance.m_bPlayeSound=t,Laya.LocalStorage.setItem(De.COOKIE_CF_SOUND,e.toString())}onComplete(){}};De.COOKIE_CF_MUSIC="COOKIE_CF_MUSIC",De.COOKIE_CF_SOUND="COOKIE_CF_SOUND",De.soundName_bg="bgm",De.soundName2="ui02.ogg",De.soundName3="ui03.ogg",De.soundName4="hit.wav",De.soundName30_1="ui30_1.ogg",De.soundName28_1_star="ui28_1_star.ogg",De.soundName28_2_star="ui28_2_stars.ogg",De.soundName28_3_star="ui28_3_stars.ogg",De.soundName28_bar="ui28_bar_rise.ogg",De.soundName32="ui32.ogg",De.soundName33="ui33.ogg",De.soundName34="ui34.ogg",De.soundName35="ui35.ogg",De.soundName36="ui36.ogg",De.soundName37="ui37.ogg",De.soundName38="ui38.ogg",De.soundName39="ui39.ogg",De.soundName41="ui41.ogg",De.soundName42="ui42.ogg",De.soundName43="ui43.ogg",De.soundName44="ui44.ogg",De.soundName45="ui45.ogg",De.soundNameUi40_1="ui40_1.ogg",De.soundNameUi40_2="ui40_2.ogg",De.soundNameUi40_3="ui40_3.ogg",De.soundNameDressing="dressing_score_sfx.ogg",De.soundNameAnswer="answer_bonus_points.ogg";var He=De;var f=class{};f.FindView="FindView",f.FindEndView="FindEndView",f.FindAskDialog="FindAskDialog",f.FindRankUpDialog="FindRankUpDialog",f.QuickTipDialog="QuickTipDialog",f.QuickEndView="QuickEndView",f.QuickShareView="QuickShareView",f.QuickOperatorDialog="QuickOperatorDialog",f.MainView="MainView",f.RoleDialog="RoleDialog",f.RemGetDialog="RemGetDialog",f.QuickRechargeDialog="QuickRechargeDialog",f.CreateNameDialog="CreateNameDialog",f.DailyTaskDialog="DailyTaskDialog",f.ActivityTaskDialog="ActivityTaskDialog",f.ShareDialog="ShareDialog",f.InvitationCenterDialog="InvitationCenterDialog",f.DailyTaskDrawDialog="DailyTaskDrawDialog",f.GuideView="GuideView",f.GuideDialogView="GuideDialogView",f.ShareView="ShareView",f.MainTopView="MainTopView",f.GetMoreDialog="GetMoreDialog",f.ShopView="ShopView",f.ItemGetDialog="ItemGetDialog",f.RewardGetDialog="RewardGetDialog",f.GetTitleDialog="GetTitleDialog",f.NewFunUnLockDialog="NewFunUnLockDialog",f.DialogView="DialogView",f.MallView="MallView",f.MallCardView="MallCardView",f.MallBuyDialog="MallBuyDialog",f.FittingUiView="FittingUiView",f.TaskDialog="TaskDialog",f.CommentDialog="CommentDialog",f.PotraitChangDialog="PotraitChangDialog",f.ClothespressView="ClothespressView",f.ItemSellDialog="ItemSellDialog",f.ItemInfoDialog="ItemInfoDialog",f.OnlineAward="OnlineAward",f.MaillView="MailView",f.MailSendView="MailSendView",f.GameSettingDialog="GameSettingDialog",f.GamesettingSoundView="GamesettingSoundView",f.GameSettingLanguageDialog="GameSettingLanguageDialog",f.GameSettingVersionDialog="GameSettingVersionDialog",f.FriendMainView="FriendMainView",f.FriendSearchView="FriendSearchView",f.FriendGetRewardDialog="FriendGetRewardDialog",f.FriendRewardDialog="FriendRewardDialog",f.PreLoadingView="PreLoadingView",f.RechargeDialog="RechargeDialog",f.WalletChooseHeroDialog="WalletChooseHeroDialog",f.EmployInfoDialog="EmployInfoDialog",f.WalletChoosePropsDialog="WalletChoosePropsDialog",f.FirstRechargeDialog="FirstRechargeDialog",f.FirstWeekRechargeView="FirstWeekRechargeView",f.ClientErrView="ClientErrView",f.RoleUpgradeView="RoleUpgradeView",f.ActiveRechargeView="ActiveRechargeView",f.SmallSaleView="SmallSaleView",f.RechargeSelectDialog="RechargeSelectDialog",f.FBLikeView="FBLikeView",f.TurnSuitPreView="TurnSuitPreView",f.SlotMachineView="SlotMachineView",f.SlotMachineRewardPreDialog="SlotMachineRewardPreDialog",f.SlotMachineResultDialog="SlotMachineResultDialog",f.GashaponView="GashaponView",f.GashaponRewardView="GashaponRewardView",f.ActivityRankRewardView="ActivityRankRewardView",f.AddRechargeView="AddRechargeView",f.CupMatchStartDialog="CupMatchStartDialog",f.CupMatchEndDialog="CupMatchEndDialog",f.CreateLoginView="CreateLoginView",f.SelectHeadDialog="SelectHeadDialog",f.RoleInfoDialog="RoleInfoDialog",f.SelectHeroDialog="SelectHeroDialog",f.CreateSubWalletDialog="CreateSubWalletDialog",f.FriendMemberDialog="FriendMemberDialog",f.FriendMemberMoreDialog="FriendMemberMoreDialog",f.FriendAddDialog="FriendAddDialog",f.FriendApplyBackDialog="FriendApplyBackDialog",f.FriendApplyDialog="FriendApplyDialog",f.WalletDialog="WalletDialog",f.WalletTransferDialog="WalletTransferDialog",f.UnionApplyDialog="UnionApplyDialog",f.GuildEntranceView="GuildEntranceView",f.UnionApplyDialogView="UnionApplyDialogView",f.UnionApplyMemberDialog="UnionApplyMemberDialog",f.CreateNoticeDialog="CreateNoticeDialog",f.UnionNoticeView="UnionNoticeView",f.GuildInfoDialog="GuildInfoDialog",f.CreateUnionDialog="CreateUnionDialog",f.UnionInfoView="UnionInfoView",f.UnionEarningView="UnionEarningView",f.UnionRevenueDetailDialog="UnionRevenueDetailDialog",f.UnionSetRevenueDialog="UnionSetRevenueDialog",f.UnionBattleRecordDialog="UnionBattleRecordDialog",f.UnionRevenueRecordDialog="UnionRevenueRecordDialog",f.RankUnionView="RankUnionView",f.UnionWarView="UnionWarView",f.UnionWarTipDialog="UnionWarTipDialog",f.UnionWarSuccessDialog="UnionWarSuccessDialog",f.UnionWarFailDialog="UnionWarFailDialog",f.GamesettingView="GamesettingView",f.GameSettingGameAccountView="GameSettingGameAccountView",f.GuildMessageView="GuildMessageView",f.GuildMessageEditorView="GuildMessageEditorView",f.UnionMemberView="UnionMemberView",f.UnionListView="UnionListView",f.CreateSubUnionView="CreateSubUnionView",f.ChangeUnionIconDialog="ChangeUnionIconDialog",f.MySubUnionView="MySubUnionView",f.UnionMemberApplyView="UnionMemberApplyView",f.UnionReferralView="UnionReferralView",f.UnionTransferView="UnionTransferView",f.TicketTransferView="TicketTransferView",f.HeroTransferView="HeroTransferView",f.GuildChiefPrivilegeView="GuildChiefPrivilegeView",f.GuildDonationView="GuildDonationView",f.NoticeDialog="NoticeDialog",f.HelpDialog="HelpDialog",f.ChampDetailDialog="ChampDetailDialog",f.ChampRecordDialog="ChampRecordDialog",f.LoadDialog="LoadDialog",f.ChangeHeadDialog="ChangeHeadDialog",f.CreateRoomDialog="CreateRoomDialog",f.EnterRoomView="EnterRoomView",f.MatchEndRankView="MatchEndRankView",f.MatchReadyView="MatchReadyView",f.MatchEndView="MatchEndView",f.HeroGetDialog="HeroGetDialog",f.InputPwdDialog="InputPwdDialog",f.MailDialog="MailDialog",f.UnionAttrView="UnionAttrView",f.UnionAttrLvUpDialog="UnionAttrLvUpDialog",f.UnionAttributeDetailsDialog="UnionAttributeDetailsDialog",f.NoServerView="NoServerView",f.UnionMemberMoreDialog="UnionMemberMoreDialog",f.HeroUpgradeDialog="HeroUpgradeDialog",f.HeroDetailDialog="HeroDetailDialog",f.SkillTipDialog="SkillTipDialog",f.TransferRecordDialog="TransferRecordDialog",f.AFKView="AFKView",f.AFKBagDialog="AFKBagDialog",f.AFKDropDetailDialog="AFKDropDetailDialog",f.AFKMapView="AFKMapView",f.AFKSelectLevelDialog="AFKSelectLevelDialog",f.Knapsack="Knapsack",f.KnapsackTipDialog="KnapsackTipDialog",f.HeroFormationDialog="HeroFormationDialog",f.SignInDialog="SignInDialog",f.InviteRewardDialog="InviteRewardDialog",f.ChallengLoseDialog="ChallengLoseDialog",f.ChallengWinDialog="ChallengWinDialog",f.ChallengBossDialog="ChallengBossDialog",f.ThirbleDropDialog="ThirbleDropDialog",f.LevelDropDialog="LevelDropDialog",f.UseCardDialog="UseCardDialog",f.ArenaView="ArenaView",f.ArenaLoseDialog="ArenaLoseDialog",f.ArenaBattleDialog="ArenaBattleDialog",f.ArenaWinDialog="ArenaWinDialog",f.ArenaWarNotesView="ArenaWarNotesView",f.ArenaRuleDialog="ArenaRuleDialog",f.EquipSelectDialog="EquipSelectDialog",f.EquipDetailDialog="EquipDetailDialog",f.HireDetailDialog="HireDetailDialog",f.ProxyDetailDialog="ProxyDetailDialog",f.WithDrawRecordDialog="WithDrawRecordDialog",f.RentalRecordDialog="RentalRecordDialog",f.PrivateChatDialog="PrivateChatDialog",f.AirdropRecordDialog="AirdropRecordDialog";var h=class{};h.MOUSE_HOLDON="MOUSE_HOLDON",h.EVENT_OPEN_MODULE="EVENT_OPEN_MODULE",h.EVENT_MODULE_ADDED="EVENT_MODULE_ADDED",h.EVENT_CLOSE_MODULE="EVENT_CLOSE_MODULE",h.EVENT_CHECK_REMAIN="EVENT_CHECK_REMAIN",h.EVENT_LOADED_COMPLETE="EVENT_LOAD_COMPLETE",h.EVENT_LOADED_SCENE_BG_COM="EVENT_LOADED_SCENE_BG_COM",h.EVENT_LOAD_SKIN_COMPLETE="EVENT_LOAD_SKIN_COMPLETE",h.EVENT_LOAD_HEAD_SKIN_COMPLETE="EVENT_LOAD_HEAD_SKIN_COMPLETE",h.EVENT_LOADING_SUC="EVENT_LOADING_SUC",h.EVENT_BACK_TO_LOGIN="EVENT_BACK_TO_LOGIN",h.EVENT_LOGIN_GAME_END="EVENT_LOGIN_GAME_END",h.EVENT_ENTER_MAIN="EVENT_ENTER_MAIN",h.EVENT_CHANGE_HEAD="EVENT_CHANGE_HEAD",h.EVENT_MODIFY_HEAD="EVENT_MODIFY_HEAD",h.EVENT_ITEM_UPDATE="EVENT_ITEM_UPDATE",h.EVENT_ROLE_UPDATE="EVENT_ROLE_UPDATE",h.STAGE_ON_BLUR="STAGE_ON_BLUR",h.STAGE_ON_FOCUS="STAGE_ON_FOCUS",h.ACCOUNTVO_UPDATE="ACCOUNTVO_UPDATE",h.EVENT_WAIT_PLAYERINFO="EVENT_WAIT_PLAYERINFO",h.EVENT_END_HEROBUY="EVENT_END_HEROBUY",h.EVENT_END_HEROTRANSFER="EVENT_END_HEROTRANSFER",h.EVENT_REFRESH_HEROTRANSFER="EVENT_REFRESH_HEROTRANSFER",h.EVENT_REFRESH_UNIONMEMBER_TRANSFER="EVENT_REFRESH_UNIONMEMBER_TRANSFER",h.EVENT_REFRESH_KNAPSACK="EVENT_REFRESH_KNAPSACK",h.EVENT_ADD_UNIONMEMBER_ADDRESS="EVENT_ADD_UNIONMEMBER_ADDRESS",h.EVENT_ADD_TICKET_ADDRESS="EVENT_ADD_TICKET_ADDRESS",h.EVENT_EMOJI_ICON_SELECT="EVENT_EMOJI_ICON_SELECT",h.EVENT_COLOR_ICON_SELECT="EVENT_COLOR_ICON_SELECT",h.EVENT_CHECK_ICON_SELECT="EVENT_CHECK_ICON_SELECT",h.EVENT_CHECK_NODE_SELECT="EVENT_CHECK_NODE_SELECT",h.PACKAGE_UPDATE_ITEM="PACKAGE_UPDATE_ITEM",h.IMPROVE_SUCESS_EVENT="IMPROVE_SUCESS_EVENT",h.CHANG_POTRAIT="CHANG_POTRAIT",h.ROLE_INFO_CHANGE="ROLE_INFO_CHANGE",h.UPDATE_ASSETS="UPDATE_ASSETS",h.REFRESH_MAIN_TASK="REFRESH_MAIN_TASK",h.RECIVE_SUCESS_SERVICE="RECIVE_SUCESS_SERVICE",h.SCENE_ROLE_COMPELTE="SCENE_ROLE_COMPELTE",h.FITTING_CLOTH_BTN="FITTING_CLOTH_BTN",h.STORE_CLICKBG_EVENT="STORE_CLICKBG_EVENT",h.CLOSE_BG_VIEW="CLOSE_BG_VIEW",h.EVENT_UPDATE_ONLINE="EVENT_UPDATE_ONLINE",h.VIP_INFO_CHANGE="VIP_INFO_CHANGE",h.EVENT_FUNCTION_OPEN_UPDATE="EVENT_FUNCTION_OPEN_UPDATE",h.EVENT_ADD_ACTIVITY="EVENT_ADD_ACTIVITY",h.EVENT_REMOVE_ACTIVITY="EVENT_REMOVE_ACTIVITY",h.UPDATE_CHAO_PIAO="UPDATE_CHAO_PIAO",h.UPDATE_EXCHANGE_INFO="UPDATE_EXCHANGE_INFO",h.UPDATE_RED_STATE_EVENT="UPDATE_RED_STATE_EVENT",h.SYSTEM_OPEN_TIME_INITED="SYSTEM_OPEN_TIME_INITED",h.EVENT_OPEN_SHARE="EVENT_OPEN_SHARE",h.CHANGE_SCENE_BASE_ROLE_LAYER="CHANGE_SCENE_BASE_ROLE_LAYER",h.EVENT_CLICK_NUM="EVENT_CLICK_NUM",h.EVENT_HERO_DRAW_BACK="EVENT_HERO_DRAW_BACK",h.EVENT_Close_CreateRoom="EVENT_Close_CreateRoom",h.EVENT_ENTER_MATCH_ROOM="EVENT_ENTER_MATCH_ROOM",h.EVENT_UPDATE_MATCH_ROOM="EVENT_UPDATE_MATCH_ROOM",h.UPDATE_KILL_NUM="UPDATE_KILL_NUM",h.EVENT_RESTORE_DATA="EVENT_RESTORE_DATA",h.EVENT_FirstBlood="EVENT_FirstBlood",h.EVENT_MutiKill="EVENT_MutiKill",h.EVENT_GameScene_Gray="EVENT_GameScene_Gray",h.EVENT_Game_Delay="EVENT_Game_Delay",h.EVENT_UPDATE_GLOBAL_COOL="EVENT_UPDATE_GLOBAL_COOL",h.EVENT_SUB_GUILD_UPDATE="EVENT_SUB_GUILD_UPDATE",h.EVENT_UNION_APPLY_MEMBER_UPDATE="EVENT_UNION_APPLY_MEMBER_UPDATE",h.EVENT_WELFARE_CLAIM="EVENT_WELFARE_CLAIM",h.EVENT_RECHARGE_GET="EVENT_RECHARGE_GET",h.CHANGE_WALLET_HERO="CHANGE_WALLET_HERO",h.CHANGE_ASSET_CHAIN="CHANGE_ASSET_CHAIN",h.CHANGE_WALLET_PROP="CHANGE_WALLET_PROP",h.CREATE_SUB_WALLET_SUCCESS="CREATE_SUB_WALLET_SUCCESS",h.REFRESH_ALL_WITHDRAW_DATA="REFRESH_ALL_WITHDRAW_DATA",h.CHANGE_FRIEND_APPLY_LIST="CHANGE_FRIEND_APPLY_LIST",h.CHANGE_FRIEND_LIST="CHANGE_FRIEND_LIST",h.REFRSH_RED="REFRSH_RED",h.REFRSH_APPLY_FRIEND_LIST="REFRSH_APPLY_FRIEND_LIST",h.ADD_AIR_WALLET_ITEM="ADD_AIR_WALLET_ITEM",h.ADD_AIR_SUB_WALLET_NAME="ADD_AIR_SUB_WALLET_NAME",h.AIR_SUB_WALLET_OPENHERO="AIR_SUB_WALLET_OPENHERO",h.CHANGE_WALLET_HERO_AIR="CHANGE_WALLET_HERO_AIR",h.UPDATE_UNION_MEMBER_LIST="UPDATE_UNION_MEMBER_LIST",h.EVENT_ADD_MONEY_ADDRESS="EVENT_ADD_MONEY_ADDRESS";var y=class a extends Laya.EventDispatcher{static get intance(){return a._instance||(a._instance=new a),a._instance}};var ar=class extends Laya.Script{constructor(){super();this.m_ioffsetX=0;this.m_ioffsetY=0}onAdded(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.CENTER,this.m_canTouch_all=!1,this.selfMaskAlpha=.8,this.m_arrMapEvent=[],this.canClickMask=!0,this.maskLayer=new Laya.Sprite,this.useShowAnimation=!0,this.useHideAnimation=!0,this.isAutoRealseRes=!0,this.m_strSound=He.soundName3}onClickMask(e){this.canClickMask&&this.maskClose()}maskClose(){this.close()}onStageResize(){}onEnable(){this._view=this.owner,this._view.addChild(this.maskLayer),this.createUI(),this.createUIEnd(),this.initializeLater()}createUI(){}createUIEnd(){}initializeLater(){this._addEvent(),this.initData(),this.useShowAnimation?(this._view.visible=!1,this.showAnimationEnd=!1,Laya.timer.frameOnce(5,this,this.popTimeOut,[this._view])):this.showAnimationEnd=!0}popTimeOut(e){Laya.timer.clear(this,this.popTimeOut),e.scale(.5,.5),e.visible=!0,Laya.Tween.to(e,{scaleX:1,scaleY:1,ease:Laya.Ease.backOut},300,null,Laya.Handler.create(this,this.onShowAnimationEnd),2),He.instance.playSoundByName(this.m_strSound),this._view.event(Laya.Event.OPEN)}onShowAnimationEnd(){this.showAnimationEnd=!0}_addEvent(){this.maskLayer.on(Laya.Event.CLICK,this,this.onClickMask),Laya.stage.on(Laya.Event.RESIZE,this,this.onStageResize),this.btn_com_back&&this.btn_com_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_com_help&&this.btn_com_help.on(Laya.Event.CLICK,this,this.onHelp),this.addEvent()}addEvent(){}initData(){}_removeEvent(){this.maskLayer.offAll(),Laya.stage.off(Laya.Event.RESIZE,this,this.onStageResize),this.removeEvent()}removeEvent(){}addMapEvent(e,i,n,r,o=null){e.on(i,n,r,o),this.m_arrMapEvent.push(e)}removeAllMapEvent(){if(this.m_arrMapEvent){for(let e=0;e<this.m_arrMapEvent.length;e++)this.m_arrMapEvent[e].offAll();this.m_arrMapEvent.splice(0,this.m_arrMapEvent.length)}}dispose(){if(this.newRoleSpr){for(;this.newRoleSpr.numChildren>0;)this.newRoleSpr.removeChildAt(0);this.newRoleSpr=null}this.isDispose=!0,H.intance.removeViewFromModuleManger(this),this.m_strName=null,this.m_strSound=null,this._removeEvent(),this.removeAllMapEvent(),Laya.Tween.clearAll(this._view),this.m_arrMapEvent=null,this.btn_com_back&&this.btn_com_back.offAll(),this.btn_com_help&&this.btn_com_help.offAll(),this.maskLayer&&(Laya.timer.clearAll(this.maskLayer),Laya.Tween.clearAll(this.maskLayer),this.maskLayer.offAll(),this.maskLayer.graphics.destroy(),this.maskLayer.removeSelf(),this.maskLayer.destroy(!0)),this.isAutoRealseRes&&C.instance.clearModuleUrl(this.m_strName),this._view&&(Laya.timer.clearAll(this._view),Laya.Tween.clearAll(this._view),this._view.offAll(),this._view.graphics.destroy(),this._view.removeSelf(),this._view.destroy(!0),this._view=null),Laya.timer.clearAll(this),Laya.Tween.clearAll(this),y.intance.event(h.EVENT_CLOSE_MODULE)}sendData(e,i=null){i==null&&(i=[])}close(e=null){this.useHideAnimation&&this._view?Laya.Tween.to(this._view,{scaleX:.5,scaleY:.5,ease:Laya.Ease.backIn},200,null,Laya.Handler.create(this,this.dispose,null),2):this.dispose()}static closeAll(){H.intance.closeAll()}backToPreScene(){let e=ye.intance.getPreSceneData();ye.intance.setCurrentScene(e[0],e[1],e[2],e[3],!1)}get btn_com_back(){return this._view?this._view.getChildByName("btn_com_back"):null}get btn_com_help(){return this._view?this._view.getChildByName("btn_com_help"):null}onHelp(){this.m_helpId&&H.intance.openModule(f.HelpDialog,this.m_helpId)}onBack(){this.close()}};var H=class a extends Laya.DialogManager{constructor(){super();this.views=new te;this.m_arrLoadingArr=[];if(a._instance)throw new Error("LayerManager是单例,不可new.");a._instance=this,Laya.Dialog.manager=this}static get intance(){return a._instance||(a._instance=new a),a._instance}openModule(e,i=null){y.intance.event(h.EVENT_OPEN_MODULE,[e,i])}hasOpenView(e){return this.views.get(e)!=null}getOpenView(e){return this.views.get(e)}disposeView(e){if(this.getOpenView(e)){let i=this.getOpenView(e);if(i instanceof Array)for(let n=0;n<i.length;n++)i[n].close();else i.close()}}init(){y.intance.on(h.EVENT_OPEN_MODULE,this,this.onModulePanel),y.intance.on(h.EVENT_CLOSE_MODULE,this,this.disposeView)}initMainView(){}onModulePanel(e,i=null){console.log("ModuleManager.onModulePanel moudleName:"+e),this.m_arrLoadingArr.indexOf(e)==-1&&(this.getOpenView(e)||(de.instance.showLoading(!1),this.m_arrLoadingArr.push(e),C.instance.loadModuleUrl(e,Laya.Handler.create(this,this.onLoaded,[e,i]))))}onLoaded(e,i=null){let n=this.m_arrLoadingArr.indexOf(e);n!=-1&&this.m_arrLoadingArr.splice(n,1);let r;var o=C.instance.m_objModuleViews[e];console.log("onLoaded: ",e,o),Laya.loader.load(o).then(s=>{if(r=s.create(),i&&r.setOpenData(i),r.m_strName=e,r instanceof Laya.Box)P.instence.addToLayer(r,r.m_iLayerType),P.instence.setPosition(r,r.m_iPositionType,r.m_ioffsetX,r.m_ioffsetY),this.addViewToModuleManger(r);else if(r instanceof Laya.Dialog){let l=r;l.m_iLayerType==P.M_POP?(l.isModal=!0,l.isShowEffect=!0,this.open(l,!1,!0)):(l.isShowEffect=!1,this.open(l)),this.addViewToModuleManger(l)}r&&y.intance.event(h.EVENT_MODULE_ADDED,r),r.hideLoadingBySelf||de.instance.hideLoading()}).catch(s=>{console.error("onLoaded 加载失败",s)})}addViewToModuleManger(e){let i=e.m_strName;this.views.get(i)?this.views.get(i)instanceof Array?this.views.get(i).push(e):this.views.set(i,[this.views.get(i),e]):this.views.set(i,e),this.on(Laya.Event.CLOSE,this,this.removeViewFromModuleManger)}removeViewFromModuleManger(e){if(!e||!this.views)return;let i=e.m_strName;console.log("removeViewFromModuleManger viewName: "+i),e.off(Laya.Event.CLOSE,this,this.removeViewFromModuleManger);let n=this.views.get(i);if(n instanceof Array){let r=n.indexOf(e);r!=-1&&(n.splice(r,1),n.length==0&&this.views.remove(i))}else this.views.remove(i)}closeAll(){let e=[];for(let i of this.views.values)if(i instanceof Array)for(let n=0;n<i.length;n++){let r=i[n];r instanceof ar&&e.push(r)}else i instanceof ar&&e.push(i);for(let i=0;i<e.length;i++)e[i].dispose();e=[],super.closeAll()}doClose(e){super.doClose(e),this.event(Laya.Event.CLOSE,e)}};var Bo=class a{constructor(){this._mapUrl="";this._mapWidth=0;this._mapHeight=0;this._gridWidth=0;this._gridHeight=0;this._xPics=0;this._yPics=0;this._fuzzyName=""}static get instance(){return a._instance||(a._instance=new a),a._instance}loadScene(t,e,i,n,r,o,s){this._fuzzyName!=""&&this._fuzzyName!=o&&this.dispose(),this._mapWidth=t,this._mapHeight=e,this._gridWidth=i,this._gridHeight=n,this._fuzzySprite=r,this._xPics=Math.floor(this._mapWidth/i),this._yPics=Math.floor(this._mapHeight/n),this._fuzzyName=o,this._fuzzyCallBack=s;let l=C.instance.setResURL("scene/subScene/test1/"+o+".json");Laya.loader.load([{url:l,type:Laya.Loader.ATLAS}],Laya.Handler.create(this,this.loadSceneComplete),Laya.Handler.create(this,this.loadProcess,null,!1),null,0,!0,null,!0)}loadProcess(){}loadSceneComplete(){let t=Laya.Loader.getAtlas(C.instance.setResURL("scene/subScene/test1/"+this._fuzzyName+".json"));if(this._fuzzySprite){this._fuzzySprite.graphics.clear();let e=0,i=new Laya.Sprite;i.name="mapSprite",this._fuzzySprite.addChildAt(i,0);for(let n=0;n<this._yPics;n++)for(let r=0;r<this._xPics;r++){let o=Laya.loader.getRes(t[e]),s=new Laya.Image;i.addChild(s),s.texture=o,s.size(o.width,o.height),s.pos(r*this._gridWidth,n*this._gridHeight),e++}}this._fuzzyCallBack!=null&&this._fuzzyCallBack.run()}dispose(){this._fuzzyCallBack=null,this._fuzzyName&&this._fuzzyName!=""&&Laya.loader.clearRes(C.instance.setResURL("atlas/"+this._fuzzyName+".json"))}};var Q=class{};Q.M_SCENE_MAIN="M_SCENE_MAIN",Q.M_SCENE_SHOP="M_SCENE_SHOP",Q.M_SCENE_AIRDROP="M_SCENE_AIRDROP",Q.M_SCENE_HERO="M_SCENE_HERO",Q.M_SCENE_PRE_LOAD="M_SCENE_PRE_LOAD",Q.M_SCENE_MATCH_READY="M_SCENE_MATCH_READY",Q.M_SCENE_MATCH="M_SCENE_MATCH",Q.M_SCENE_AFKBATTLE="M_SCENE_AFKBATTLE",Q.M_SCENE_GUILD="M_SCENE_GUILD",Q.M_SCENE_RANK="M_SCENE_RANK",Q.M_SCENE_SHOLARSHIP="M_SCENE_SHOLARSHIP",Q.M_SCENE_GET_MAT="M_SCENE_GET_MAT",Q.M_SCENE_OPEN_GAME="M_SCENE_OPEN_GAME",Q.M_SCENE_ASSET="M_SCENE_ASSET",Q.M_SCENE_DIG="M_SCENE_DIG",Q.M_SCENE_MAIL="M_SCENE_MAIL",Q.M_SCENE_KNAPSACK="M_SCENE_KNAPSACK",Q.M_SCENE_UNION="M_SCENE_UNION",Q.M_SCENE_MYUNION="M_SCENE_MYUNION",Q.M_SCENE_ARENA="M_SCENE_ARENA",Q.M_SCENE_FRIEND="M_SCENE_FRIEND";var Wl=class extends Le{constructor(){super()}};var ql=class{constructor(t,e,i){this._idKeyName="";this._jsonName="";this._sheetItemCls=null;this._isParse=!1;this._idKeyName=e,this._jsonName=t,this._sheetItemCls=i,this._idToValueMap=new te,this._items=[]}parseJson(){if(this._isParse)return;let t=C.instance.getResByURL("config/"+this._jsonName+".json");if(!t)throw new Error("无效的配置数据"+this._jsonName);for(let e of t){let i=new this._sheetItemCls;i.beFill(e),this._idToValueMap.set(e[this._idKeyName],i),this._items.push(i),this.addItemProcess(i)}this._isParse=!0}addItemProcess(t){}getItemById(t){return this.excuteIsParse()&&this._idToValueMap.get(t)?this._idToValueMap.get(t):null}getAllItems(){return this.excuteIsParse()?this._items:null}excuteIsParse(){return this._isParse,this._isParse}};var Yl=class extends ql{constructor(){super("","","");this._itemsTypeMap=null;this._itemsTypeMap=new te}getCombineKey(e,i,n){return e+n.toString()+i}getItemsByChildType(e,i){let n=this.getCombineKey(e,i,"childType_itemType");if(this._itemsTypeMap.get(n))return this._itemsTypeMap.get(n);this._itemsTypeMap.set(n,[]);let r=R.intance.m_dicItems.values;for(let o of r)o.child_type==e&&o.itm_type==i&&this._itemsTypeMap.get(n).push(o);return this._itemsTypeMap.get(n)}};var $l=class extends Le{realIcon(){return"https://cdn.bunnyswap.cc/images/items/"+this.icon}get starArr(){if(this._starArr)return this._starArr;if(this._starArr=[],this.max_quality==0)return this._starArr;let e=this.quality/this.max_quality*5;for(let i=1;i<=5;i++)e>=i?this._starArr.push(0):i-e<=.5?this._starArr.push(2):this._starArr.push(1);return this._starArr}};var Xl=class extends Le{};var Ql=class extends Le{constructor(){super()}};var Zl=class extends Le{constructor(){super()}};var Jl=class extends Le{};var ec=class extends Le{};var tc=class extends Le{};var ic=class extends Le{};var ac=class extends Le{constructor(){super()}};var nc=class extends Le{};var rc=class extends Le{};var oc=class extends Le{};var sc=class extends Le{};var lc=class extends Le{};var cc=class extends Le{};var Po=class extends Le{};var uc=class extends Le{constructor(){super()}};var pc=class extends Le{};var mc=class extends Le{constructor(){super(...arguments);this.dT=1e4}async testUrl(){this.getUrl()}getUrl(){var e=this.url;let i=new Date().getTime(),n=this,r=new XMLHttpRequest;r.open("GET",e,!0),r.onload=function(){if(r.status>=200&&r.status<300)try{let s=r.responseText;var o=new Date().getTime()-i;n.dT=o}catch{console.log("Response is not valid JSON")}else console.error(`Error: ${r.status}`)},r.onerror=function(){console.error("Network error")},r.send()}};var dc=class extends Le{};var hc=class extends Le{};var fc=class extends Le{};var yc=class extends Le{constructor(){super()}};var bc=class extends Le{constructor(){super()}};var st=class st{constructor(){if(st._instance)throw new Error("SheetDataManager是单例,不可new.");st._instance=this,this._modelList=new te}static get intance(){return st._instance||(st._instance=new st),st._instance}init(){let t=Laya.Browser.now();L.instance.systemOpenModel.parseJson(),this.m_dicMail=this.initConfigObject("mailmessage",pc),this.m_dicItems=this.initConfigObject("item",$l),this.m_dicShops=new te,this.m_dicShopMulDic=this.initConfig("shop",["type","icon"],Xl,!0,Laya.Handler.create(this,this.onSetShopItem,null,!1)),this.m_dicUnions=this.initConfig("union",["id"],nc),this.m_dicHeros=this.initConfigObject("hero",Jl),this.m_dicSkills=this.initConfigObject("skill",tc),this.m_dicBuffs=this.initConfigObject("buff",ic),this.m_dicArenaDic=new te,this.m_dicArenaMulDic=this.initConfig("arena",["type","lv","coinType"],ec,!0,Laya.Handler.create(this,this.onSetArena,null,!1)),this.m_dicArenaTypes=this.initConfig("arenaType",["id"],dc);var e=this.initConfig("node",["id"],mc);this.m_dicNodes=this.initNodes(e),this.m_dicWelfareBags=this.initConfig("welfarebag",["id"],oc),this.m_dicMaps=this.initConfigObject("map",rc),console.log("-----------------------sheetdata-time1:"+(Laya.Browser.now()-t)),this.m_dicHead=this.initConfig("head",["id"],Zl),this.m_dicIconBadge=this.initConfig("iconBadge",["id"],uc),this.m_dicCountry=this.initConfig("country",["id"],ac),this.m_dicExpression=this.initConfig("expression",["id"],yc),this.m_dicFontColor=this.initConfig("fontColor",["id"],bc),this.m_dicCurrencyAddress=this.initConfig("currencyAddress",["sn"],sc),this.m_dicCoinAddress=this.initConfig("coinAddress",["id"],cc),this.m_dicBuyHeroes=this.initConfig("buyHeroes",["id"],Po),this.m_dicACoin=this.initConfigObject("aCoin",lc),this.m_dicBuyHeroes=this.initConfig("buyHeroes",["id"],Po),this.m_dicPuzzleExchange=this.initConfig("puzzleExchange",["id"],hc),this.m_dicDropCashAddresse=this.initConfig("DropCashAddress",["sn"],fc),this.m_dicGenerate=this.initConfigObject("general",Wl),this.m_dicWorldMapChildTypeItem=new te,console.log("-----------------------sheetdata-time2:"+(Laya.Browser.now()-t))}getArenaTypesInSub(){var t=[];for(let e of this.m_dicArenaTypes.values)e.inSub==1&&t.push(e);return t}getArenaTypesInSubByType(t){var e=[];for(let i of this.m_dicArenaTypes.values)if(i.arenaType==t)return i;return[]}onSetShopItem(t){this.m_dicShops.set(t.id,t)}onSetArena(t){this.m_dicArenaDic.set(t.id,t)}preInit(){this.m_dicScene=this.initConfig("scene",["name"],Ql)}getItemModel(){return this.getDataModel(st.DataType_Items)}getGeneralValueById(t){return this.m_dicGenerate&&this.m_dicGenerate.get(t)?this.m_dicGenerate.get(t).value:0}getSocialShareValueById(t){return this.m_dicSocialShare&&this.m_dicSocialShare.get(t)?this.m_dicSocialShare.get(t).parameter:0}getDataModel(t){if(!this._modelList.get(t))switch(t){case st.DataType_Items:this._modelList.set(t,new Yl);break}return this._modelList.get(t)}getWelfareBagId(t){var e=this.m_dicWelfareBags;for(let n=0;n<e.values.length;n++){var i=e.values[n];if(t>=i.rankingMin&&t<=i.rankingMax)return i.id}return 0}initNodes(t){var e=new te;for(let n=0;n<t.values.length;n++){var i=t.values[n];i.open==1&&(X.vType==2?i.type==2&&(e.set(i.id,i),i.testUrl()):i.type==1&&(e.set(i.id,i),i.testUrl()))}return e}testNodes(){var t=this.m_dicNodes;for(let i=0;i<t.values.length;i++){var e=t.values[i];e.testUrl()}}getNodeByAddr(t){var e=this.m_dicNodes;for(let n=0;n<e.values.length;n++){var i=e.values[n];if(i&&i.socketUrl==t)return i}return null}getCurrencyAddress(t){let i=st.intance.m_dicCurrencyAddress.values;for(let r=0;r<i.length;r++){var n=i[r];if(X.vType==n.isSN&&t==n.id)return n.token}}getCurrency(t){let i=st.intance.m_dicCurrencyAddress.values;for(let r=0;r<i.length;r++){var n=i[r];if(X.vType==n.isSN&&t==n.id)return n}}getDropCashAddress(t,e){let n=st.intance.m_dicDropCashAddresse.values;for(let o=0;o<n.length;o++){var r=n[o];if(X.vType==r.isSN&&t==r.chainId&&e==r.name)return r}}getPuzzleExchange(t){let i=st.intance.m_dicPuzzleExchange.values;for(let r=0;r<i.length;r++){var n=i[r];if(t==n.id)return n}}getPuzzleExchangeByName(t){let i=st.intance.m_dicPuzzleExchange.values;for(let r=0;r<i.length;r++){var n=i[r];if(t==n.name)return n}}getNetAddress(t){let i=st.intance.m_dicCoinAddress.values;for(let r=0;r<i.length;r++){var n=i[r];if(X.vType==n.type&&t==n.tokenid)return n.tokenAddress}}getBuyHeroAddress(t){let i=st.intance.m_dicBuyHeroes.values;for(let r=0;r<i.length;r++){var n=i[r];if(X.vType==n.type&&t==n.tokenid)return n.tokenAddress}}getACoin(t,e){let n=st.intance.m_dicACoin.values;for(let o=0;o<n.length;o++){var r=n[o];if(t==r.token&&e==r.currency)return r}}static getArrFromDictionary(t,e,i){let n=[];for(let r=0;r<t.values.length;r++)t.values[r][e]+""==i+""&&n.push(t.values[r]);return n}getArrFromDicItemByKey(t,e){let i=[];for(let n=0;n<this.m_dicItems.values.length;n++)this.m_dicItems.values[n][t]+""==e+""&&i.push(this.m_dicItems.values[n]);return i}initConfigObject(t,e=null,i=null){let n="config/"+t+".json";console.log("initConfigObject： url: "+n);let r=C.instance.getResByURL(n).data;return new tr(r,e)}initConfig(t,e,i=null,n=!1,r=null){let o="config/"+t+".json";console.log("initConfig url: "+o);let s=C.instance.getResByURL(o).data,l=new te;if(!s)return console.log("ERROR : SheetDataManager -->initConfig()  url:"+o),l;let c;for(let u=0;u<s.length;u++){let m=this.compoundKey(s[u],e);i?(c=new i,c.init==null&&console.log("ERROR :BaseItem> SheetDataManager -->initConfig()  url:"+o),c.init(s[u]),l.set(m,c),r&&r.runWith(c)):(l.set(m,s[u]),r&&r.runWith(s[u]))}if(n){let u=C.instance.setResURL(o);Laya.Loader.clearRes(u)}return l}compoundKey(t,e){let i="",n=e.length;if(n>1)for(let r=0;r<n;r++)i+=t[e[r]],r!=n-1&&(i+="_");else i=t[e[0]];return i}getCompoundKey(t){let e="",i=t.length;if(i>1)for(let n=0;n<i;n++)e+=t[n],n!=i-1&&(e+="_");else e=t[0];return e}initConfig2(t,e,i,n=!0){let r="config/"+t+".json",o=C.instance.getResByURL(r).data,s=new te;if(!o)return console.log("ERROR : SheetDataManager -->initConfig2()  url:"+r),s;let l;for(let c=0;c<o.length;c++){let u=o[c][e],m;s.get(u)==null?(m=[],s.set(u,m)):m=s.get(u),l=new i,l.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig2()  url:"+r),l.init(o[c]),m.push(l)}if(n&&t!="items"){let c=C.instance.setResURL(r);Laya.Loader.clearRes(c)}return s}getItemsBy(t,e){let i=this.getArrFromDicItemByKey("itm_type",t),n=[];for(let r of i)r.child_type.toString()==e.toString()&&n.push(r);return n}getSheetDataByMultiKey(t,e){let i=this.getCompoundKey(e);return t.get(i)}};st.DataType_Items="SheetDataManager:items",st.DataType_CatagoryChildType="SheetDataManager:CatagoryChildType",st.DataType_BeautyPiece="SheetDataManager:beautypiece",st.DataType_BeautyExp="SheetDataManager:beautyexp",st.DataType_ClothStyleScore="SheetDataManager:clothStyleScore";var R=st;var N=class{constructor(){}};N.NO_ALL=-1,N.YES=1,N.NO=2,N.SURE=4,N.CANCEL=8,N.CLOSE=16,N.RETURN_YES=1,N.RETURN_NO=2,N.RETURN_NONE=3,N.BASEALERTVIEW="BaseAlertDialog",N.MatchConfimDialog="MatchConfimDialog",N.BUYCONFIRMVIEW="BuyConfirmView",N.GUILDQUITVIEW="GuildQuitView",N.BuyItemConfirmView="BuyItemConfirmView",N.DOWNLOADALERT="DownLoadAlert";var le=class a{constructor(){}static instance(){return a._instance||(a._instance=new a),a._instance}AlertByType(t,e=null,i=0,n=null,r=null,o=!1,s=null){i==0&&(i=N.YES|N.NO),this.onLoaded(i,t,e,n,r,o,s)}onLoaded(t,e,i,n=null,r=null,o=!1,s=null){H.intance.openModule(e,{flag:t,okHandler:n,cancelHandler:r,data:i,destroyDoCancel:o,initHandler:s})}};var xe=class{};xe.TYPE_EXP=3003,xe.TYPE_GOLD=3005,xe.TYPE_TOX=3001,xe.TYPE_USDT=3004,xe.TYPE_BTC=3006,xe.TYPE_ETH=3007,xe.TYPE_BTOX=3011,xe.TYPE_GALA=3010,xe.TYPE_BNB=3013,xe.TYPE_GGG=3017,xe.TYPE_KLAY=3015,xe.TYPE_BNRY=3016;var Ce=class Ce{static getColorText(t,e="#FFFF00"){return'<font color="'+e+'">'+t+"</font>"}static getChildByName(t,e,i="name"){if(t&&t.hasOwnProperty(i)&&t[i]==e)return t;let n=t;if(n){let r=n.numChildren,o;for(let s=0;s<r;++s)if(o=n.getChildAt(s),o instanceof Laya.Sprite&&(o=Ce.getChildByName(o,e,i)),o&&o.hasOwnProperty(i)&&o[i]==e)return o}return null}static getChildByAttri(t,e){if(t&&t.hasOwnProperty(e)&&t[e])return t[e];let i=t;if(i){let n=i.numChildren,r;for(let o=0;o<n;++o)if(r=i.getChildAt(o),r instanceof Laya.Sprite){if(r=Ce.getChildByAttri(r,e),r)return r}else if(r&&r.hasOwnProperty(e)&&r[e])return r[e]}return null}static logs(t,e=0,i=!0,n=16777215){if(t=Ce.GetLogTime+" "+t,i)switch(e){case 0:n=16777215;break;case 1:n=16777215;break;case 2:n=16711680;break;case 3:n=16777215;break;case 4:n=13434777;break;case 5:n=16742399;break}}static get GetLogTime(){let t=new Date;return t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+":"+t.getMilliseconds()}static get GRAY(){return Ce._GRAY||(Ce._GRAY=new Laya.ColorFilter([.3,.59,.11,0,0,.3,.59,.11,0,0,.3,.59,.11,0,0,0,0,0,1,0])),Ce._GRAY}static get GRAY1(){if(!Ce._GRAY1){let t=[.3086,.16094,.082,0,0,.2086,.26094,.082,0,0,.1086,.36094,.082,0,0,0,0,0,1,0];Ce._GRAY1=new Laya.ColorFilter(t)}return Ce._GRAY1}static get GLOW(){return Ce._GLOW||(Ce._GLOW=new Laya.GlowFilter("#ffffff",12,0,0)),Ce._GLOW}static get BLUR(){if(!Ce._BLUR){let t=new Laya.BlurFilter;t.strength=5,Ce._BLUR=[t]}return Ce._BLUR}static share(t=1001,e=2,i=null,n=null,r=0,o=0,s=null){}static get isParseWWhiteUser(){return Ce._isParseWWhiteUser}static get isWhiteName(){return X.isWhiteList}static itemListHandler(t,e){let i=t.dataSource,n=i[0],r=i[1],o=2,s=t.skin;s&&(s.indexOf("xinSmall")!=-1?o=1:s.indexOf("xinBig")!=-1&&(o=3));let l;o==1?l="common/common_clip/clip_xinSmall"+r+".png":o==3?l="common/common_clip/clip_xinBig"+r+".png":l="common/common_clip/clip_xinMiddle"+r+".png",t.skin=l,t.dataSource=n}static setStarList(t,e){t.renderHandler=new Laya.Handler(Ce,Ce.itemListHandler),t.dataSource=e}static get BLACK(){return Ce._BLACK||(Ce._BLACK=new Laya.ColorFilter,Ce._BLACK.setColor("#000000")),Ce._BLACK}static get YELLOW(){return Ce._YELLOW||(Ce._YELLOW=new Laya.ColorFilter,Ce._YELLOW.setColor("#ffe64b")),Ce._YELLOW}static get YELLOW1(){return Ce._YELLOW1||(Ce._YELLOW1=new Laya.ColorFilter,Ce._YELLOW1.setColor("#fee14e")),Ce._YELLOW1}static get RED1(){return Ce._RED1||(Ce._RED1=new Laya.ColorFilter,Ce._RED1.setColor("#ff4537")),Ce._RED1}static get BLUE(){return Ce._BLUE||(Ce._BLUE=new Laya.ColorFilter,Ce._BLUE.setColor("#2f72a7")),Ce._BLUE}static setColor(t="#13e2cf"){let e=new Laya.ColorFilter;return e.setColor(t),e}static heroNotEnought(t=1286){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(t),N.YES,null)}static popTip(t){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(t),N.YES,null)}static onGetHero(t=-1){ye.intance.setCurrentScene(Q.M_SCENE_SHOP,[1,t])}static isFightHero(t){return L.instance.playerDto.fightHeroPk==t||t==L.instance.playerDto.newFightHeroPk}static titickNotEnought(t=-1){var e=2,i=R.intance.getSheetDataByMultiKey(R.intance.m_dicShopMulDic,[e,t]);if(i&&i.open==1)le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1060),N.CANCEL,Laya.Handler.create(this,this.onGetTitck,[t]));else{var n=R.intance.m_dicItems.get(t);n?M.instance.notice(d.instance.getLanguage(1282,d.instance.getLanguage(n.name))):pe.instance.showErrorWord(18)}}static RemError(){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1124),N.YES,null)}static NoHeroError(t){le.instance().AlertByType(N.BASEALERTVIEW,t,N.YES,null)}static TransactionErrorTip(){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1224),N.YES,null)}static alertNoAll(t){le.instance().AlertByType(N.BASEALERTVIEW,t,N.NO_ALL)}static onGetTitck(t=-1){ye.intance.setCurrentScene(Q.M_SCENE_SHOP,[2,t])}static moneyNotEnought(t=xe.TYPE_TOX){var e=R.intance.m_dicItems.get(t),i=d.instance.getLanguage(e.name);M.instance.notice(d.instance.getLanguage(1170,i))}static onGetMoney(t){ye.intance.setCurrentScene(Q.M_SCENE_ASSET,[1,t])}static openSquidGame(){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(6056),N.CANCEL,Laya.Handler.create(this,this.onOpenSquidGame))}static onOpenSquidGame(){window.location.href="https://squidgamefi.io/?invitationCode=2oi"}static otherLogin(){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(6054),N.YES,Laya.Handler.create(this,Se.instance.reload))}static netError(){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1307),N.YES,Laya.Handler.create(this,Se.instance.reload))}static commTipWithYes(t){le.instance().AlertByType(N.BASEALERTVIEW,t,N.YES)}static shakeSprs(t,e=2,i=4,n=32){if(Ce.isShake)return;Ce.isShake=!0;let r=t.length,o=[];for(let u=0;u<r;u++){let m=t[u];o.push([m.x,m.y])}let s=[0,0],l=0,c=function(){s[l%2]=l++%4<2?0:i,l>e*4+1&&(Laya.timer.clear(Laya.stage,c),l=0,Ce.isShake=!1);for(let u=0;u<r;u++){let m=t[u];m.x=s[0]+o[u][0],m.y=s[1]+o[u][1]}};Laya.timer.loop(n,Laya.stage,c)}static shake(t,e=2,i=4,n=32){if(Ce.isShake)return;Ce.isShake=!0;let r=new Laya.Point(t.x,t.y),o=[0,0],s=0,l=function(){o[s%2]=s++%4<2?0:i,s>e*4+1&&(Laya.timer.clear(Laya.stage,l),s=0,Ce.isShake=!1),t.x=o[0]+r.x,t.y=o[1]+r.y};Laya.timer.loop(n,Laya.stage,l)}static checkIsFull(){}static fullScreen(t){var e,i=Laya.Browser.window.location.href;t?(i+="&isFull=1",e={type:"openChildPage",data:{url:i,fullScreen:"1",close:"0"}}):e={type:"closePage",data:""};var n=JSON.stringify(e);Laya.Browser.onIOS?(console.log("onIOS"),typeof webkit<"u"&&(console.log("onIOS1"),webkit.messageHandlers._tw_.postMessage(n),console.log("onIOS2"))):Laya.Browser.onAndroid&&(console.log("onAndriod0"),window&&typeof window._tw_<"u"&&(console.log("onAndriod1 str: "+n),window._tw_.callInto(n),console.log("onAndriod2")))}};Ce._isParseWWhiteUser=!1,Ce.isWWhiteUser=!1,Ce.isShake=!1,Ce.isFullScreen=!1;var ge=Ce;var Wi=class Wi{constructor(){this.mainSceneX=10086;this.isCloseAll=!0;this.enterMainSceneTimes=0;this.isTopOpening=!1;this.isBottomOpening=!1;y.intance.on(h.EVENT_MODULE_ADDED,this,this.onAdded)}static get intance(){return Wi._instance||(Wi._instance=new Wi),Wi._instance}init(){}setup(){}onAdded(t){}getPreSceneData(){if(this.m_arrFromScenes.length<1)return[Q.M_SCENE_MAIN,!0,1,null];{let t=this.m_arrFromScenes.pop();return console.log("pop-----------route："+this.m_arrFromScenes.join(" | ")),t}return[Q.M_SCENE_MAIN,!0,1,null]}removePreSceneData(){this.m_arrFromScenes=[]}setBackScene(){let t=this.getPreSceneData();this.setCurrentScene(t[0],t[1],!1)}setMainScene(t=1,e=null){this.setCurrentScene(Q.M_SCENE_MAIN,e)}async setCurrentScene(t,e=null,i=!1,n=!0){console.log("setCurrentScene: ",t,e);let r=!1;if(this.m_sceneCurrent&&this.m_sceneCurrent.name==t){console.log("currentScene："+this.m_sceneCurrent.name+"  openScene：："+t);return}this.isCloseAll?H.intance.closeAll():this.isCloseAll=!0,this.m_sceneCurrent&&(this.m_arrFromScenes||(this.m_arrFromScenes=[]),i&&this.m_sceneCurrent.m_arrOpenSceneData[3]&&this.m_arrFromScenes.push(this.m_sceneCurrent.m_arrOpenSceneData),console.log("open-----------scene："+this.m_arrFromScenes),this.fromScene=this.m_sceneCurrent.name,console.log("fromSceneName: "+this.fromScene),Wi.m_arrSceneToDialog.indexOf(t)==-1?(this.m_sceneCurrent==this.m_preScene&&(this.m_preScene=null),this.m_sceneCurrent.toScene=t,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),Bo.instance.dispose()):this.m_preScene=this.m_sceneCurrent,!i&&Wi.m_arrSceneToDialog.indexOf(t)==-1&&this.m_preScene&&(this.m_sceneCurrent=this.m_preScene,this.m_sceneCurrent.toScene=t,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),Bo.instance.dispose()));let o=R.intance.m_dicScene.get(t);switch(o&&o.music!=null&&o.music!="0"&&o.music!=""&&(console.log("SceneManager.setCurrentScene sceneItem.music: "+o.music),He.instance.playMusicByName(o.music)),t){case Q.M_SCENE_MAIN:this.m_arrFromScenes=[],this.m_sceneCurrent=await Laya.Scene.open("scenes/mainView/MainScene.ls"),this.enterMainSceneTimes++;break;case Q.M_SCENE_AIRDROP:this.m_sceneCurrent=await Laya.Scene.open("scenes/airdrop/AirdropScene.ls",!0,e);break;case Q.M_SCENE_SHOP:this.m_sceneCurrent=await Laya.Scene.open("scenes/shop/ShopScene.ls",!0,e);break;case Q.M_SCENE_RANK:this.m_sceneCurrent=await Laya.Scene.open("scenes/rank/RankScene.ls");break;case Q.M_SCENE_SHOLARSHIP:this.m_sceneCurrent=await Laya.Scene.open("scenes/scholarship/ScholarshipScene.ls");break;case Q.M_SCENE_FRIEND:this.m_sceneCurrent=await Laya.Scene.open("scenes/friend/FriendScene.ls");break;case Q.M_SCENE_HERO:this.m_sceneCurrent=await Laya.Scene.open("scenes/hero/MyHeroScene.ls");break;case Q.M_SCENE_KNAPSACK:this.m_sceneCurrent=await Laya.Scene.open("scenes/item/KnapsackScene.ls");break;case Q.M_SCENE_MAIL:this.m_sceneCurrent=await Laya.Scene.open("scenes/mail/MailScene.ls");break;case Q.M_SCENE_UNION:this.m_sceneCurrent=await Laya.Scene.open("scenes/union/UnionScene.ls");break;case Q.M_SCENE_MYUNION:this.m_sceneCurrent=await Laya.Scene.open("scenes/union/MyUnionScene.ls",!0,e);break;case Q.M_SCENE_MATCH_READY:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/MatchReady.ls");break;case Q.M_SCENE_MATCH:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/Match.ls");break;case Q.M_SCENE_ASSET:this.m_sceneCurrent=await Laya.Scene.open("scenes/asset/AssetScene.ls",!0,e);break;case Q.M_SCENE_GET_MAT:this.m_sceneCurrent=await Laya.Scene.open("scenes/getMat/GetMatScene.ls",!1,e);break;case Q.M_SCENE_OPEN_GAME:this.m_sceneCurrent=await Laya.Scene.open("scenes/getMat/OpenGameScene.ls",!1,e);break;default:break}ge.logs("======================  打开Scene: "+t+"  ======================"),this.m_sceneCurrent.name=t,this.m_sceneCurrent.fromScene=this.fromScene,this.m_sceneCurrent.m_arrOpenSceneData=[t,e,i,n];let s=P.M_SCENE}initPreload(){let t=R.intance.m_dicScene.get(Q.M_SCENE_PRE_LOAD);t&&t.music!=null&&t.music!="0"&&t.music!=""&&(console.log("SceneManager.initPreload sceneItem.music: "+t.music),He.instance.playMusicByName(t.music))}get currSceneName(){return this.m_sceneCurrent?this.m_sceneCurrent.name:""}};Wi.m_arrSceneToDialog=[];var ye=Wi;var Rt=class{constructor(){this._color=1;this.isLvUp=!1;this.newAddCnt=0}get simgurl(){return C.instance.getHeroHeadRes(this.heroItem.serialId,this.color)}get sk(){return C.instance.getHeroSkRes(this.heroItem.serialId,this.color)}get id(){return this._id}set id(t){this._id=t,this.heroItem=R.intance.m_dicHeros.get(t+"")}get name(){return d.instance.getLanguage(this.heroItem.name)}set name(t){this._name=t}get color(){return this._color}set color(t){t&&(this._color=t)}get m_iNum(){return this._m_iNum}set m_iNum(t){this._m_iNum=t}};var Fe=class a{constructor(t=0){this._m_iLevel=0;this._m_arrDisc=[];this.newAddCnt=0;this.isScholarship=!1;this.isLvUp=!1;this.needTip=!0;this.m_bSalon=!1;this.m_bIsSetId=!1;t!=0&&(this.m_iId=t)}get m_sIcon(){return this._m_sIcon}set m_sIcon(t){this._m_sIcon=t}get m_iLevel(){return this._m_iLevel>0?this._m_iLevel:1}set m_iLevel(t){this._m_iLevel=t||0}get m_iNum(){return this._m_iNum}set m_iNum(t){this._m_iNum=t}copyItem(){let t=new a;return t.m_iId=this.m_iId,t.m_iOriginalId=this.m_iOriginalId,t}get m_bTry(){return this.m_iId==this.m_iOriginalId?this._m_bSet=!1:this._m_bSet=!0,this._m_bSet}get m_strName(){return d.instance.getLanguage(this.itemItem.name)}set m_bTry(t){this._m_bSet=t}get m_iId(){return this._m_iId}set m_iId(t){this._m_iId=t,this.m_bIsSetId||(this.m_bIsSetId=!0,this.m_iOriginalId=t),this.setConfigData()}setConfigData(){if(this.m_iId!=0){if(this.itemItem=R.intance.m_dicItems.get(this.m_iId.toString()),!this.itemItem){console.log("[          <items> find out id:"+this.m_iId+"             ]");return}if(this.subType=parseInt(this.itemItem.subType+""),this.backType=parseInt(this.itemItem.backPack+""),this.type=parseInt(this.itemItem.type+""),this.m_sIcon=this.itemItem.icon,this.itemItem.buy_price){this.m_iPrice=this.itemItem.buy_price[0][1];let t=this.itemItem.buy_price[0][0],e=R.intance.m_dicItems.get(t);e&&(this.m_strBuyIcon=C.instance.getItemIcon(e.icon))}this.itemItem.sell_price&&(this.m_iSellPrice=parseFloat(this.itemItem.sell_price[0][1])),this.m_iQuality=this.itemItem.quality,this.setQualityData()}}setQualityData(){this.m_arrQualityData=this.itemItem.starArr}get getIconURL(){return C.instance.getItemIcon(this.itemItem.icon)}copy(){let t=new a(this.m_iId);return t.m_iLevel=this.m_iLevel,t}compareName(){return d.instance.getLanguage(this.itemItem.name)}compareQuality(){return parseFloat(this.m_iQuality+"")}compareSellPrice(){return parseFloat(this.itemItem.sell_price[1]+"")}compareNum(){return parseFloat(this.m_iNum+"")}compareLevel(){return parseFloat(this.m_iLevel+"")}compareFragment(){let t=this.itemItem.id;return 0}compareTypeId(){return parseInt(this.m_iId+"")}};var Jt=class a{constructor(){this._isPop=!1;y.intance.on(h.EVENT_CHECK_REMAIN,this,this.onCheckRemain)}static get instance(){return a._instance||(a._instance=new a),a._instance}get model(){return We.instance}get isPop(){return this._isPop}startShow(){console.log("startShow");var t=this.model.hasRemain();!this._isPop&&t&&(this._isPop=!0,t instanceof Rt?y.intance.event(h.EVENT_OPEN_MODULE,f.HeroGetDialog):y.intance.event(h.EVENT_OPEN_MODULE,f.ItemGetDialog))}onCheckRemain(t){if(t==f.ItemGetDialog||t==f.HeroGetDialog){var e=this.model.hasRemain();e?e instanceof Rt?y.intance.event(h.EVENT_OPEN_MODULE,f.HeroGetDialog):y.intance.event(h.EVENT_OPEN_MODULE,f.ItemGetDialog):this._isPop=!1}}};var We=class a{constructor(t){this._list=[];this.needPop=!0;this.autoPop=!0}static get instance(){return a._instance||(a._instance=new a(new zb)),a._instance}get service(){return Jt.instance}addItem(t,e=!1){let i=new Fe;i.m_iId=t.m_iId,i.newAddCnt=t.newAddCnt,i.m_iLevel=t.m_iLevel,i.isLvUp=t.isLvUp,i.m_bNew=t.m_bNew,this._list.push(i),e&&this.service.startShow()}addHeroItem(t,e=!1){let i=new Rt;i.id=t.id,i.newAddCnt=t.newAddCnt,i.lv=t.lv,i.isLvUp=t.isLvUp,i.m_bNew=t.m_bNew,this._list.push(i),e&&this.service.startShow()}addItems(t,e=!1){this._list=this._list.concat(t),e&&this.service.startShow()}hasRemain(){return this._list.length>0?this._list[0]:null}get needListener(){return this._list.length>=2}addConsumeByServer(t){this._list.push(t)}addConsume(t,e){this._list.push([t,e])}getNextItem(){return this._list.length>0?this._list[0]:null}getOneItem(){return this._list.length>0?this._list.shift():null}},zb=class{};var wt=class{constructor(){}};wt.TYPE_NORMAL=0,wt.TYPE_TRUST=1,wt.TYPE_WEB3=2,wt.type=0;async function ww({timeout:a}={timeout:3e3}){let t=Kv();return t||Iw({timeout:a})}async function Iw({timeout:a}={timeout:3e3}){return new Promise(t=>{let e=()=>{t(Kv())};window.addEventListener("trustwallet#initialized",e,{once:!0}),setTimeout(()=>{window.removeEventListener("trustwallet#initialized",e,{once:!0}),t(null)},a)})}function Kv(){let a=e=>!!e.isTrust;return typeof window<"u"&&typeof window.ethereum<"u"?a(window.ethereum)?window.ethereum:window.ethereum?.providers?window.ethereum.providers.find(a)??null:window.trustwallet??null:null}async function Gb(){if(console.log("initWeb3 -0"),console.log("initWeb3 -1"),typeof window<"u"&&typeof window.ethereum<"u"&&!!window.ethereum.isTrust){let t=await ww();console.log("initWeb3 -2"+t),wt.trustProvider=t,wt.type=wt.TYPE_TRUST,console.log("initWeb3 -6")}else typeof web3<"u"&&(console.log("initWeb3 2"),web3=new Web3(web3.currentProvider),wt.web3Provider=web3,wt.type=wt.TYPE_WEB3,console.log("initWeb3 3"))}var Ai=class a{constructor(){this.walletDic=new te}static get instance(){return a._instance||(a._instance=new a),a._instance}getEthValue(t){return a.instance.walletDic.get(t)?a.instance.walletDic.get(t).ethValue:0}getValue(t){return a.instance.walletDic.get(t)?a.instance.walletDic.get(t).value:0}};var ei=class{};ei.ASSETS_TOX=1e4,ei.ASSETS_ARCANITE=10001,ei.ASSETS_CRYSTAL=10002,ei.ASSETS_MITHRIL=10003,ei.ASSETS_REDSTONE=10004,ei.ASSETS_TRUEIRON=10005;var ie=class{static initConfig(t){this.configDic=new te;for(let e of t){let i=e.sstringvalue;e.sadditional==="JSON"&&(i=JSON.parse(i)),this.configDic.set(e.skey2,i),this[e.skey2]=i}}};ie.ADDRESS0="0x0000000000000000000000000000000000000000",ie.TOKEN_ERC20ABI=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"miner",type:"address"}],name:"addMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_delMinter",type:"address"}],name:"delMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"idx",type:"uint256"}],name:"getMinter",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMinterLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.PUZZLE_ABI=[{inputs:[{internalType:"address",name:"_signAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidShortString",type:"error"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"StringTooLong",type:"error"},{anonymous:!1,inputs:[],name:"EIP712DomainChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"orderId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"deadline",type:"uint256"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"TOX",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"USDT",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"WBNB",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"eip712Domain",outputs:[{internalType:"bytes1",name:"fields",type:"bytes1"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"version",type:"string"},{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"address",name:"verifyingContract",type:"address"},{internalType:"bytes32",name:"salt",type:"bytes32"},{internalType:"uint256[]",name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],name:"getAmountsOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address",name:"token",type:"address"}],name:"getTokenAmountsOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"hasUsed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"",type:"bytes"}],name:"hashList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"isSigner",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"router",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_signAddress",type:"address"}],name:"setSigner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"signAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],ie.PUZZLE_ABI_ETH=[{inputs:[{internalType:"address",name:"_signAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidShortString",type:"error"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"StringTooLong",type:"error"},{anonymous:!1,inputs:[],name:"EIP712DomainChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"orderId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"deadline",type:"uint256"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"GALA",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"USDT",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"eip712Domain",outputs:[{internalType:"bytes1",name:"fields",type:"bytes1"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"version",type:"string"},{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"address",name:"verifyingContract",type:"address"},{internalType:"bytes32",name:"salt",type:"bytes32"},{internalType:"uint256[]",name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],name:"getAmountsOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"hasUsed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"",type:"bytes"}],name:"hashList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"isSigner",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"router",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_signAddress",type:"address"}],name:"setSigner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"signAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.ACCOUNT_ADDRESS="0x5ff2123b0Aa4bD97eeF5F6388EFCB56cd29D6835",ie.ACCOUNT_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"nickName",type:"string"},{indexed:!1,internalType:"string",name:"avatar",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthHeight",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthPlace",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gender",type:"uint256"},{indexed:!1,internalType:"uint256",name:"influence",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_avatar",type:"string"}],name:"changeAvatar",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"}],name:"changeGender",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"changeInfluence",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"changeLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_nickname",type:"string"}],name:"changeNickName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_nickname",type:"string"},{internalType:"string",name:"_avatar",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_birthHeight",type:"uint256"},{internalType:"uint256",name:"_birthPlace",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"createAccount",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getAccountInfo",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"birthHeight",type:"uint256"},{internalType:"uint256",name:"birthPlace",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"uint256",name:"influence",type:"uint256"}],internalType:"struct AccountInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.CREATE_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"AccountToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"accounts",type:"address[]"}],name:"BurnAccount",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"string",name:"nickname",type:"string"},{indexed:!1,internalType:"uint256",name:"country",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gender",type:"uint256"},{indexed:!1,internalType:"string",name:"icon",type:"string"}],name:"RegisterAccount",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"}],name:"burnAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"currentId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"iAccount",outputs:[{internalType:"contract IAccount",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"isExists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"nickname",type:"string"},{internalType:"uint256",name:"country",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"string",name:"icon",type:"string"}],name:"register",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"registerId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],ie.BUY_HERO_ABI=[{inputs:[{internalType:"address",name:"_Phantom",type:"address"},{internalType:"address",name:"_TOX",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"Phantom",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOX",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOXPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNFTParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],internalType:"struct PhantomMall.Params[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNameIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"union",type:"address"}],name:"list",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSeriesCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"tos",type:"address[]"}],name:"mintByOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintByTOX",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"nameCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"random",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_toxPrice",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.HERO_LIST_ABI=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_fromTokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_toTokenId",type:"uint256"}],name:"BatchMetadataUpdate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"MetadataUpdate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"uri",type:"string"}],name:"TokenBaseURIUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"}],name:"UpdateLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"}],name:"UpdateName",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"}],name:"UpdateSeries",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"currentId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"endId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"exist",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"}],internalType:"struct PhantomHero.Params",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"list",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_endId",type:"uint256"}],name:"setEndId",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"uri",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],name:"updateLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"name",type:"string"}],name:"updateName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"}],name:"updateSeries",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.TRANSFER_HERO_ABI=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"uids",type:"uint256[]"}],name:"BatchTransfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"uids",type:"uint256[]"}],name:"batchTransfer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"hero",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],ie.EDIT_ACCOUNT_ADDRESS="0xaa1B8FA74Ed295123a6336C2D3a88cB973160dfa",ie.EDIT_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"_accountContract",type:"address"},{internalType:"string",name:"_website",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"rate",type:"uint256"}],internalType:"struct UpdateProfile.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWebsite",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_rate",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_website",type:"string"}],name:"setWebsite",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"}],name:"updateProfile",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.STAKING_POOL_ABI=[{inputs:[{internalType:"uint256",name:"_poolPlace",type:"uint256"},{internalType:"address",name:"_stakeToken",type:"address"},{internalType:"address",name:"_accountContract",type:"address"},{internalType:"address",name:"_rewardsContract",type:"address"},{internalType:"address",name:"_empowerContract",type:"address"},{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Withdrawn",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcPerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"capacityOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],name:"changeDailyRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimAllReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"claimReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"earned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"earnedAll",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"estimatePerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAccountContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokens",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getDailyRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getEmpowerContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastUpdateTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLimitTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPoolPlace",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsPerUnitStored",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getStakeTokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenIdleStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenMiningStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isAccountStakeToken",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_empowerContract",type:"address"}],name:"setEmpowerContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_limitTokensNumber",type:"uint256"}],name:"setLimitTokensNumber",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_idleStatus",type:"uint256"}],name:"setTokenIdleStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_miningStatus",type:"uint256"}],name:"setTokenMiningStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawAllAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"withdrawAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.STAKING_HERO_POWERCALC_ABI=[{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenLevel",type:"uint256"},{internalType:"bool",name:"isMatchProfession",type:"bool"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getFormulaParams",outputs:[{components:[{internalType:"uint256",name:"constantValue",type:"uint256"},{internalType:"uint256",name:"linearCoefficient",type:"uint256"},{internalType:"uint256",name:"quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"percentage",type:"uint256"}],internalType:"struct EmpowerCalcFormula.FormulaParams",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],name:"setFormulaParams",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.BLINDBOX_ADDRESS="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",ie.BLINDBOX_ABI=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.BLINDBOX_ADDRESS_V2="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",ie.BLINDBOX_ABI_V2=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.HERO_ADDRESS="0xCC0A4E3Bd1D49D7Ef9C431C0aD87D36B0B342018",ie.HERO_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"rarity",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"},{indexed:!1,internalType:"uint256",name:"race",type:"uint256"},{indexed:!1,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"level",type:"uint256"}],name:"UpdateLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"UpdateMineralLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"string",name:"name",type:"string"}],name:"UpdateName",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"race",type:"uint256"}],name:"UpdateRace",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"rarity",type:"uint256"}],name:"UpdateRatity",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"series",type:"uint256"}],name:"UpdateSeries",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"status",type:"uint256"}],name:"UpdateStatus",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getNFTParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"rarity",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"},{internalType:"uint256",name:"mineralLevel",type:"uint256"}],internalType:"struct Parmas",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_name",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"},{internalType:"uint256",name:"_race",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"updateLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"updateMineralLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_name",type:"string"}],name:"updateName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"}],name:"updateRace",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"}],name:"updateRatity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"}],name:"updateSeries",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"status",type:"uint256"}],name:"updateStatus",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.CREATE_UNION_ADDRESS="0xcd62E6a07072Bed38F4126ba5C9361901c71846e",ie.CREATE_UNION_ABI="",ie.UNION_NUMBER_SYS_ADDRESS="0x45F0de10fA3982c4d18AbaE89a5F0663123f955c",ie.UNION_NUMBER_SYS_ABI="",ie.UPGRADE_UNION_ADDRESS="0x18320fD38F3806C0A9fb2B41202Ed0bD3f826894",ie.UPGRADE_UNION_ABI="",ie.UNION_DISTRIBUTE_ADDRESS="0x0f6b4bBa8b01B6ee2CC3232ea963ac702CaDCe04",ie.UNION_WAR_ADDRESS="0xF8489Bb617F9DCaBF33bEaeBdA4CCD029E9E247E",ie.UNION_DISTRIBUTE_ABI="",ie.UNION_WAR_ABI="",ie.HERO_TO_TOKEN_POOL_ADDRESS="",ie.HERO_TO_TOKEN_POOL_ABI="",ie.WITHDRAW_AND_RECHARGE_ADDRESS="",ie.WITHDRAW_AND_RECHARGE_ABI="",ie.SERIESHEROMALL_ADDRESS="",ie.SERIESHEROMALL_ABI="",ie.HEROFORMATION_ADDRESS="",ie.HEROFORMATION_ABI="",ie.HERO_MINT_ADDRESS="",ie.HERO_MINT_ABI="",ie.RECHANGE_ADDRESS_TOX="0x32926612d9399C1088045AEB821CCB5Ba904D697",ie.RECHANGE_ADDRESS="0x4952981D44cb95c52F0a62D4Fe8702081338D824",ie.RECHANGE_ABI=[{inputs:[{internalType:"address",name:"_signer",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidShortString",type:"error"},{inputs:[{internalType:"string",name:"str",type:"string"}],name:"StringTooLong",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[],name:"EIP712DomainChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"deadline",type:"uint256"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"depositETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"eip712Domain",outputs:[{internalType:"bytes1",name:"fields",type:"bytes1"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"version",type:"string"},{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"address",name:"verifyingContract",type:"address"},{internalType:"bytes32",name:"salt",type:"bytes32"},{internalType:"uint256[]",name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"isSigner",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_signer",type:"address"}],name:"setSigner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"signer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.RECHANGE_ABI_BSC=[{inputs:[{internalType:"address",name:"_receiveAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"orderId",type:"uint256"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"depositETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"hasUsed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"receiveAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiveAddress",type:"address"}],name:"setAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.RECHANGE_ABI_ETH=[{inputs:[{internalType:"address",name:"_receiveAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"orderId",type:"uint256"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"depositETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"hasUsed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"receiveAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiveAddress",type:"address"}],name:"setAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.RECHANGE_ABI_OPT=[{inputs:[{internalType:"address",name:"_receiveAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"orderId",type:"uint256"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"depositETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"hasUsed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"receiveAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiveAddress",type:"address"}],name:"setAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.RECHANGE_ABI_KLAYTN=[{inputs:[{internalType:"address",name:"_receiveAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"orderId",type:"uint256"}],name:"WithdrawToken",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"depositETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"depositToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"hasUsed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"receiveAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiveAddress",type:"address"}],name:"setAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"orderId",type:"uint256"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],ie.SAT_ADDRESS="0x424CaA5beA9bDfeF9F49796D7C7005632fAbE2E8",ie.SAT_ABI=[{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAuthStatus",outputs:[{internalType:"bool",name:"",type:"bool"}],type:"function"}];function ce(a,t,e){return i=>a[t.name||e]?.(i)??t(a,i)}St();Ge();var Lc=class extends U{constructor(t){super(`Filter type "${t}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}};Nt();Ya();Rc();Cn();_n();pr();var HL="/docs/contract/encodeEventTopics";function Oi(a){let{abi:t,eventName:e,args:i}=a,n=t[0];if(e){let l=Qi({abi:t,name:e});if(!l)throw new or(e,{docsPath:HL});n=l}if(n.type!=="event")throw new or(void 0,{docsPath:HL});let r=Kt(n),o=lr(r),s=[];if(i&&"inputs"in n){let l=n.inputs?.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(i)?i:Object.values(i).length>0?l?.map(u=>i[u.name])??[]:[];c.length>0&&(s=l?.map((u,m)=>Array.isArray(c[m])?c[m].map((b,_)=>UL({param:u,value:c[m][_]})):c[m]?UL({param:u,value:c[m]}):null)??[])}return[o,...s]}function UL({param:a,value:t}){if(a.type==="string"||a.type==="bytes")return gt(Wt(t));if(a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/))throw new Lc(a.type);return Ni([a],[t])}Me();function $a(a,{method:t}){let e={};return a.transport.type==="fallback"&&a.transport.onResponse?.(({method:i,response:n,status:r,transport:o})=>{r==="success"&&t===i&&(e[n]=o.request)}),i=>e[i]||a.request}async function Uc(a,t){let{address:e,abi:i,args:n,eventName:r,fromBlock:o,strict:s,toBlock:l}=t,c=$a(a,{method:"eth_newFilter"}),u=r?Oi({abi:i,args:n,eventName:r}):void 0,m=await a.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?be(o):o,toBlock:typeof l=="bigint"?be(l):l,topics:u}]});return{abi:i,args:n,eventName:r,id:m,request:c(m),strict:!!s,type:"event"}}pi();xa();St();Ge();Qa();ls();var uI=3;function Ea(a,{abi:t,address:e,args:i,docsPath:n,functionName:r,sender:o}){let{code:s,data:l,message:c,shortMessage:u}=a instanceof wa?a:a instanceof U?a.walk(b=>"data"in b)||a.walk():{},m=(()=>a instanceof Di?new os({functionName:r}):[uI,Ia.code].includes(s)&&(l||c||u)?new Bt({abi:t,data:typeof l=="object"?l.data:l,functionName:r,message:u??c}):a)();return new rs(m,{abi:t,args:i,contractAddress:e,docsPath:n,functionName:r,sender:o})}pi();Me();$c();yr();Ge();Hi();var ru=class extends U{constructor(t,{account:e,docsPath:i,chain:n,data:r,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:m,value:b}){let _=An({from:e?.address,to:m,value:typeof b<"u"&&`${fr(b)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:r,gas:o,gasPrice:typeof s<"u"&&`${It(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${It(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${It(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",_].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}};Pn();ou();function e_(a,{docsPath:t,...e}){let i=(()=>{let n=Gr(a,e);return n instanceof ta?a:n})();return new ru(i,{docsPath:t,...e})}su();cs();Wr();pi();yr();Ge();var cu=class extends U{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}},en=class extends U{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}},uu=class extends U{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${It(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}};ii();Ge();var qr=class extends U{constructor({blockHash:t,blockNumber:e}){let i="Block";t&&(i=`Block at hash "${t}"`),e&&(i=`Block at number "${e}"`),super(`${i} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}};Me();lu();ii();lu();var ig={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function Rn(a){let t={...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,chainId:a.chainId?Ct(a.chainId):void 0,gas:a.gas?BigInt(a.gas):void 0,gasPrice:a.gasPrice?BigInt(a.gasPrice):void 0,maxFeePerBlobGas:a.maxFeePerBlobGas?BigInt(a.maxFeePerBlobGas):void 0,maxFeePerGas:a.maxFeePerGas?BigInt(a.maxFeePerGas):void 0,maxPriorityFeePerGas:a.maxPriorityFeePerGas?BigInt(a.maxPriorityFeePerGas):void 0,nonce:a.nonce?Ct(a.nonce):void 0,to:a.to?a.to:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,type:a.type?ig[a.type]:void 0,typeHex:a.type?a.type:void 0,value:a.value?BigInt(a.value):void 0,v:a.v?BigInt(a.v):void 0};return t.yParity=(()=>{if(a.yParity)return Number(a.yParity);if(typeof t.v=="bigint"){if(t.v===0n||t.v===27n)return 0;if(t.v===1n||t.v===28n)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),t.type==="eip2930"&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t.type==="eip1559"&&delete t.maxFeePerBlobGas,t}var t_=Kr("transaction",Rn);function us(a){let t=a.transactions?.map(e=>typeof e=="string"?e:Rn(e));return{...a,baseFeePerGas:a.baseFeePerGas?BigInt(a.baseFeePerGas):null,blobGasUsed:a.blobGasUsed?BigInt(a.blobGasUsed):void 0,difficulty:a.difficulty?BigInt(a.difficulty):void 0,excessBlobGas:a.excessBlobGas?BigInt(a.excessBlobGas):void 0,gasLimit:a.gasLimit?BigInt(a.gasLimit):void 0,gasUsed:a.gasUsed?BigInt(a.gasUsed):void 0,hash:a.hash?a.hash:null,logsBloom:a.logsBloom?a.logsBloom:null,nonce:a.nonce?a.nonce:null,number:a.number?BigInt(a.number):null,size:a.size?BigInt(a.size):void 0,timestamp:a.timestamp?BigInt(a.timestamp):void 0,transactions:t,totalDifficulty:a.totalDifficulty?BigInt(a.totalDifficulty):null}}var i_=Kr("block",us);async function ni(a,{blockHash:t,blockNumber:e,blockTag:i,includeTransactions:n}={}){let r=i??"latest",o=n??!1,s=e!==void 0?be(e):void 0,l=null;if(t?l=await a.request({method:"eth_getBlockByHash",params:[t,o]}):l=await a.request({method:"eth_getBlockByNumber",params:[s||r,o]}),!l)throw new qr({blockHash:t,blockNumber:e});return(a.chain?.formatters?.block?.format||us)(l)}async function Yr(a){let t=await a.request({method:"eth_gasPrice"});return BigInt(t)}async function a_(a,t){return ag(a,t)}async function ag(a,t){let{block:e,chain:i=a.chain,request:n}=t||{};if(typeof i?.fees?.defaultPriorityFee=="function"){let r=e||await ce(a,ni,"getBlock")({});return i.fees.defaultPriorityFee({block:r,client:a,request:n})}if(typeof i?.fees?.defaultPriorityFee<"u")return i?.fees?.defaultPriorityFee;try{let r=await a.request({method:"eth_maxPriorityFeePerGas"});return ti(r)}catch{let[r,o]=await Promise.all([e?Promise.resolve(e):ce(a,ni,"getBlock")({}),ce(a,Yr,"getGasPrice")({})]);if(typeof r.baseFeePerGas!="bigint")throw new en;let s=o-r.baseFeePerGas;return s<0n?0n:s}}async function n_(a,t){return pu(a,t)}async function pu(a,t){let{block:e,chain:i=a.chain,request:n,type:r="eip1559"}=t||{},o=await(async()=>typeof i?.fees?.baseFeeMultiplier=="function"?i.fees.baseFeeMultiplier({block:e,client:a,request:n}):i?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new cu;let l=10**(o.toString().split(".")[1]?.length??0),c=b=>b*BigInt(Math.ceil(o*l))/BigInt(l),u=e||await ce(a,ni,"getBlock")({});if(typeof i?.fees?.estimateFeesPerGas=="function")return i.fees.estimateFeesPerGas({block:e,client:a,multiply:c,request:n,type:r});if(r==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new en;let b=typeof n?.maxPriorityFeePerGas=="bigint"?n.maxPriorityFeePerGas:await ag(a,{block:u,chain:i,request:n}),_=c(u.baseFeePerGas);return{maxFeePerGas:n?.maxFeePerGas??_+b,maxPriorityFeePerGas:b}}return{gasPrice:n?.gasPrice??c(await ce(a,Yr,"getGasPrice")({}))}}ii();Me();async function mu(a,{address:t,blockTag:e="latest",blockNumber:i}){let n=await a.request({method:"eth_getTransactionCount",params:[t,i?be(i):e]});return Ct(n)}Ge();var aa=class extends U{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}};Wr();Hi();function du(a){if(a.type)return a.type;if(typeof a.blobs<"u"||typeof a.blobVersionedHashes<"u"||typeof a.maxFeePerBlobGas<"u"||typeof a.sidecars<"u")return"eip4844";if(typeof a.maxFeePerGas<"u"||typeof a.maxPriorityFeePerGas<"u")return"eip1559";if(typeof a.gasPrice<"u")return typeof a.accessList<"u"?"eip2930":"legacy";throw new eu({transaction:a})}ii();async function na(a){let t=await a.request({method:"eth_chainId"});return Ct(t)}async function tn(a,t){let{account:e=a.account,chain:i,chainId:n,gas:r,nonce:o,parameters:s=["chainId","fees","gas","nonce","type"],type:l}=t,c=e?rt(e):void 0,u={...t,...c?{from:c?.address}:{}};s.includes("chainId")&&(i?u.chainId=i.id:typeof n<"u"?u.chainId=n:u.chainId=await ce(a,na,"getChainId")({})),s.includes("nonce")&&typeof o>"u"&&c&&(u.nonce=await ce(a,mu,"getTransactionCount")({address:c.address,blockTag:"pending"}));let m=await(()=>{if(!(typeof u.type<"u"))return ce(a,ni,"getBlock")({blockTag:"latest"})})();if((s.includes("fees")||s.includes("type"))&&typeof l>"u")try{u.type=du(u)}catch{u.type=typeof m?.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(s.includes("fees"))if(u.type==="eip1559"||u.type==="eip4844"){if(typeof u.maxFeePerGas>"u"||typeof u.maxPriorityFeePerGas>"u"){let{maxFeePerGas:b,maxPriorityFeePerGas:_}=await pu(a,{block:m,chain:i,request:u});if(typeof t.maxPriorityFeePerGas>"u"&&t.maxFeePerGas&&t.maxFeePerGas<_)throw new uu({maxPriorityFeePerGas:_});u.maxPriorityFeePerGas=_,u.maxFeePerGas=b}}else{if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")throw new en;let{gasPrice:b}=await pu(a,{block:m,chain:i,request:u,type:"legacy"});u.gasPrice=b}return s.includes("gas")&&typeof r>"u"&&(u.gas=await ce(a,$r,"estimateGas")({...u,account:c?{address:c.address,type:"json-rpc"}:void 0})),ia(u),delete u.parameters,u}async function $r(a,t){let e=t.account??a.account,i=e?rt(e):void 0;try{let{accessList:n,blobs:r,blockNumber:o,blockTag:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:b,maxPriorityFeePerGas:_,nonce:w,to:v,value:E,...B}=i?.type==="local"?await tn(a,t):t,j=(o?be(o):void 0)||s;ia(t);let Z=a.chain?.formatters?.transactionRequest?.format,Y=(Z||Ja)({...jr(B,{format:Z}),from:i?.address,accessList:n,blobs:r,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:m,maxFeePerGas:b,maxPriorityFeePerGas:_,nonce:w,to:v,value:E}),V=await a.request({method:"eth_estimateGas",params:j?[Y,j]:[Y]});return BigInt(V)}catch(n){throw e_(n,{...t,account:i,chain:a.chain})}}async function r_(a,t){let{abi:e,address:i,args:n,functionName:r,...o}=t,s=Ot({abi:e,args:n,functionName:r});try{return await ce(a,$r,"estimateGas")({data:s,to:i,...o})}catch(l){let c=o.account?rt(o.account):void 0;throw Ea(l,{abi:e,address:i,args:n,docsPath:"/docs/contract/estimateContractGas",functionName:r,sender:c?.address})}}pr();St();qi();Rc();Qb();jc();_n();var o_="/docs/contract/decodeEventLog";function Nn(a){let{abi:t,data:e,strict:i,topics:n}=a,r=i??!0,[o,...s]=n;if(!o)throw new zo({docsPath:o_});let l=t.find(v=>v.type==="event"&&o===lr(Kt(v)));if(!(l&&"name"in l)||l.type!=="event")throw new En(o,{docsPath:o_});let{name:c,inputs:u}=l,m=u?.some(v=>!("name"in v&&v.name)),b=m?[]:{},_=u.filter(v=>"indexed"in v&&v.indexed);for(let v=0;v<_.length;v++){let E=_[v],B=s[v];if(!B)throw new Mi({abiItem:l,param:E});b[E.name||v]=mI({param:E,value:B})}let w=u.filter(v=>!("indexed"in v&&v.indexed));if(w.length>0){if(e&&e!=="0x")try{let v=kn(w,e);if(v)if(m)b=[...b,...v];else for(let E=0;E<w.length;E++)b[w[E].name]=v[E]}catch(v){if(r)throw v instanceof wn||v instanceof mr?new gi({abiItem:l,data:e,params:w,size:$e(e)}):v}else if(r)throw new gi({abiItem:l,data:"0x",params:w,size:0})}return{eventName:c,args:Object.values(b).length>0?b:void 0}}function mI({param:a,value:t}){return a.type==="string"||a.type==="bytes"||a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/)?t:(kn([a],t)||[])[0]}function Xr({abi:a,eventName:t,logs:e,strict:i=!0}){return e.map(n=>{try{let r=Nn({...n,abi:a,strict:i});return t&&!t.includes(r.eventName)?null:{...r,...n}}catch(r){let o,s;if(r instanceof En)return null;if(r instanceof gi||r instanceof Mi){if(i)return null;o=r.abiItem.name,s=r.abiItem.inputs?.some(l=>!("name"in l&&l.name))}return{...n,args:s?[]:{},eventName:o}}}).filter(Boolean)}Me();function Yt(a,{args:t,eventName:e}={}){return{...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,logIndex:a.logIndex?Number(a.logIndex):null,transactionHash:a.transactionHash?a.transactionHash:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,...e?{args:t,eventName:e}:{}}}async function Qr(a,{address:t,blockHash:e,fromBlock:i,toBlock:n,event:r,events:o,args:s,strict:l}={}){let c=l??!1,u=o??(r?[r]:void 0),m=[];u&&(m=[u.flatMap(w=>Oi({abi:[w],eventName:w.name,args:s}))],r&&(m=m[0]));let b;e?b=await a.request({method:"eth_getLogs",params:[{address:t,topics:m,blockHash:e}]}):b=await a.request({method:"eth_getLogs",params:[{address:t,topics:m,fromBlock:typeof i=="bigint"?be(i):i,toBlock:typeof n=="bigint"?be(n):n}]});let _=b.map(w=>Yt(w));return u?Xr({abi:u,logs:_,strict:c}):_}async function hu(a,t){let{abi:e,address:i,args:n,blockHash:r,eventName:o,fromBlock:s,toBlock:l,strict:c}=t,u=o?Qi({abi:e,name:o}):void 0,m=u?void 0:e.filter(b=>b.type==="event");return ce(a,Qr,"getLogs")({address:i,args:n,blockHash:r,event:u,events:m,fromBlock:s,toBlock:l,strict:c})}On();xa();Jr();async function $t(a,t){let{abi:e,address:i,args:n,functionName:r,...o}=t,s=Ot({abi:e,args:n,functionName:r});try{let{data:l}=await ce(a,ra,"call")({...o,data:s,to:i});return _i({abi:e,args:n,functionName:r,data:l||"0x"})}catch(l){throw Ea(l,{abi:e,address:i,args:n,docsPath:"/docs/contract/readContract",functionName:r})}}pi();On();xa();Jr();async function x_(a,t){let{abi:e,address:i,args:n,dataSuffix:r,functionName:o,...s}=t,l=s.account?rt(s.account):a.account,c=Ot({abi:e,args:n,functionName:o});try{let{data:u}=await ce(a,ra,"call")({batch:!1,data:`${c}${r?r.replace("0x",""):""}`,to:i,...s,account:l}),m=_i({abi:e,args:n,functionName:o,data:u||"0x"}),b=e.filter(_=>"name"in _&&_.name===t.functionName);return{result:m,request:{abi:b,address:i,args:n,dataSuffix:r,functionName:o,...s,account:l}}}catch(u){throw Ea(u,{abi:e,address:i,args:n,docsPath:"/docs/contract/simulateContract",functionName:o,sender:l?.address})}}St();ls();var cg=new Map,w_=new Map,LI=0;function ri(a,t,e){let i=++LI,n=()=>cg.get(a)||[],r=()=>{let u=n();cg.set(a,u.filter(m=>m.id!==i))},o=()=>{let u=w_.get(a);n().length===1&&u&&u(),r()},s=n();if(cg.set(a,[...s,{id:i,fns:t}]),s&&s.length>0)return o;let l={};for(let u in t)l[u]=(...m)=>{let b=n();if(b.length!==0)for(let _ of b)_.fns[u]?.(...m)};let c=e(l);return typeof c=="function"&&w_.set(a,c),o}async function hs(a){return new Promise(t=>setTimeout(t,a))}function oa(a,{emitOnBegin:t,initialWaitTime:e,interval:i}){let n=!0,r=()=>n=!1;return(async()=>{let s;t&&(s=await a({unpoll:r}));let l=await e?.(s)??i;await hs(l);let c=async()=>{n&&(await a({unpoll:r}),await hs(i),c())};c()})(),r}mi();var _I=new Map,xI=new Map;function I_(a){let t=(n,r)=>({clear:()=>r.delete(n),get:()=>r.get(n),set:o=>r.set(n,o)}),e=t(a,_I),i=t(a,xI);return{clear:()=>{e.clear(),i.clear()},promise:e,response:i}}async function E_(a,{cacheKey:t,cacheTime:e=1/0}){let i=I_(t),n=i.response.get();if(n&&e>0&&new Date().getTime()-n.created.getTime()<e)return n.data;let r=i.promise.get();r||(r=a(),i.promise.set(r));try{let o=await r;return i.response.set({created:new Date,data:o}),o}finally{i.promise.clear()}}var wI=a=>`blockNumber.${a}`;async function sa(a,{cacheTime:t=a.cacheTime}={}){let e=await E_(()=>a.request({method:"eth_blockNumber"}),{cacheKey:wI(a.uid),cacheTime:t});return BigInt(e)}async function an(a,{filter:t}){let e="strict"in t&&t.strict,i=await t.request({method:"eth_getFilterChanges",params:[t.id]});if(typeof i[0]=="string")return i;let n=i.map(r=>Yt(r));return!("abi"in t)||!t.abi?n:Xr({abi:t.abi,logs:n,strict:e})}async function nn(a,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}function T_(a,t){let{abi:e,address:i,args:n,batch:r=!0,eventName:o,onError:s,onLogs:l,poll:c,pollingInterval:u=a.pollingInterval,strict:m}=t;return(typeof c<"u"?c:a.transport.type!=="webSocket")?(()=>{let v=m??!1,E=Xe(["watchContractEvent",i,n,r,a.uid,o,u,v]);return ri(E,{onLogs:l,onError:s},B=>{let G,j,Z=!1,q=oa(async()=>{if(!Z){try{j=await ce(a,Uc,"createContractEventFilter")({abi:e,address:i,args:n,eventName:o,strict:v})}catch{}Z=!0;return}try{let Y;if(j)Y=await ce(a,an,"getFilterChanges")({filter:j});else{let V=await ce(a,sa,"getBlockNumber")({});G&&G!==V?Y=await ce(a,hu,"getContractEvents")({abi:e,address:i,args:n,eventName:o,fromBlock:G+1n,toBlock:V,strict:v}):Y=[],G=V}if(Y.length===0)return;if(r)B.onLogs(Y);else for(let V of Y)B.onLogs([V])}catch(Y){j&&Y instanceof Ji&&(Z=!1),B.onError?.(Y)}},{emitOnBegin:!0,interval:u});return async()=>{j&&await ce(a,nn,"uninstallFilter")({filter:j}),q()}})})():(()=>{let v=m??!1,E=Xe(["watchContractEvent",i,n,r,a.uid,o,u,v]),B=!0,G=()=>B=!1;return ri(E,{onLogs:l,onError:s},j=>((async()=>{try{let Z=o?Oi({abi:e,eventName:o,args:n}):[],{unsubscribe:q}=await a.transport.subscribe({params:["logs",{address:i,topics:Z}],onData(Y){if(!B)return;let V=Y.result;try{let{eventName:he,args:Ue}=Nn({abi:e,data:V.data,topics:V.topics,strict:m}),Pe=Yt(V,{args:Ue,eventName:he});j.onLogs([Pe])}catch(he){let Ue,Pe;if(he instanceof gi||he instanceof Mi){if(m)return;Ue=he.abiItem.name,Pe=he.abiItem.inputs?.some(yt=>!("name"in yt&&yt.name))}let Be=Yt(V,{args:Pe?[]:{},eventName:Ue});j.onLogs([Be])}},onError(Y){j.onError?.(Y)}});G=q,B||G()}catch(Z){s?.(Z)}})(),()=>G()))})()}xa();pi();ds();function xu({chain:a,currentChainId:t}){if(!a)throw new bu;if(t!==a.id)throw new yu({chain:a,currentChainId:t})}Pn();Hi();ou();function S_(a,{docsPath:t,...e}){let i=(()=>{let n=Gr(a,e);return n instanceof ta?a:n})();return new iu(i,{docsPath:t,...e})}su();cs();Wr();async function eo(a,{serializedTransaction:t}){return a.request({method:"eth_sendRawTransaction",params:[t]},{retryCount:0})}async function to(a,t){let{account:e=a.account,chain:i=a.chain,accessList:n,blobs:r,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:m,nonce:b,to:_,value:w,...v}=t;if(!e)throw new aa({docsPath:"/docs/actions/wallet/sendTransaction"});let E=rt(e);try{ia(t);let B;if(i!==null&&(B=await ce(a,na,"getChainId")({}),xu({currentChainId:B,chain:i})),E.type==="local"){let q=await ce(a,tn,"prepareTransactionRequest")({account:E,accessList:n,blobs:r,chain:i,chainId:B,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:m,nonce:b,to:_,value:w,...v}),Y=i?.serializers?.transaction,V=await E.signTransaction(q,{serializer:Y});return await ce(a,eo,"sendRawTransaction")({serializedTransaction:V})}let G=a.chain?.formatters?.transactionRequest?.format,Z=(G||Ja)({...jr(v,{format:G}),accessList:n,blobs:r,data:o,from:E.address,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:m,nonce:b,to:_,value:w});return await a.request({method:"eth_sendTransaction",params:[Z]},{retryCount:0})}catch(B){throw S_(B,{...t,account:E,chain:t.chain||void 0})}}async function C_(a,t){let{abi:e,address:i,args:n,dataSuffix:r,functionName:o,...s}=t,l=Ot({abi:e,args:n,functionName:o});return ce(a,to,"sendTransaction")({data:`${l}${r?r.replace("0x",""):""}`,to:i,...s})}Me();async function k_(a,{chain:t}){let{id:e,name:i,nativeCurrency:n,rpcUrls:r,blockExplorers:o}=t;await a.request({method:"wallet_addEthereumChain",params:[{chainId:be(e),chainName:i,nativeCurrency:n,rpcUrls:r.default.http,blockExplorerUrls:o?Object.values(o).map(({url:s})=>s):void 0}]},{retryCount:0})}pi();var wu=256,Iu;function A_(a=11){if(!Iu||wu+a>256*2){Iu="",wu=0;for(let t=0;t<256;t++)Iu+=(256+Math.random()*256|0).toString(16).substring(1)}return Iu.substring(wu,wu+++a)}function Eu(a){let{batch:t,cacheTime:e=a.pollingInterval??4e3,ccipRead:i,key:n="base",name:r="Base Client",pollingInterval:o=4e3,type:s="base"}=a,l=a.chain,c=a.account?rt(a.account):void 0,{config:u,request:m,value:b}=a.transport({chain:l,pollingInterval:o}),_={...u,...b},w={account:c,batch:t,cacheTime:e,ccipRead:i,chain:l,key:n,name:r,pollingInterval:o,request:m,transport:_,type:s,uid:A_()};function v(E){return B=>{let G=B(E);for(let Z in w)delete G[Z];let j={...E,...G};return Object.assign(j,{extend:v(j)})}}return Object.assign(w,{extend:v(w)})}Ge();Lr();ls();function fs(a,{delay:t=100,retryCount:e=2,shouldRetry:i=()=>!0}={}){return new Promise((n,r)=>{let o=async({count:s=0}={})=>{let l=async({error:c})=>{let u=typeof t=="function"?t({count:s,error:c}):t;u&&await hs(u),o({count:s+1})};try{let c=await a();n(c)}catch(c){if(s<e&&await i({count:s,error:c}))return l({error:c});r(c)}};o()})}function D_(a,t={}){return async(e,i={})=>{let{retryDelay:n=150,retryCount:r=3}={...t,...i};return fs(async()=>{try{return await a(e)}catch(o){let s=o;switch(s.code){case _r.code:throw new _r(s);case xr.code:throw new xr(s);case wr.code:throw new wr(s);case Ir.code:throw new Ir(s);case Ia.code:throw new Ia(s);case Ji.code:throw new Ji(s);case Er.code:throw new Er(s);case Tr.code:throw new Tr(s);case Sr.code:throw new Sr(s);case Cr.code:throw new Cr(s);case Mn.code:throw new Mn(s);case kr.code:throw new kr(s);case Bn.code:throw new Bn(s);case Ar.code:throw new Ar(s);case Dr.code:throw new Dr(s);case Mr.code:throw new Mr(s);case Br.code:throw new Br(s);case Pr.code:throw new Pr(s);case 5e3:throw new Bn(s);default:throw o instanceof U?o:new nu(s)}}},{delay:({count:o,error:s})=>{if(s&&s instanceof vi){let l=s?.headers?.get("Retry-After");if(l?.match(/\d/))return parseInt(l)*1e3}return~~(1<<o)*n},retryCount:r,shouldRetry:({error:o})=>II(o)})}}function II(a){return"code"in a&&typeof a.code=="number"?a.code===-1||a.code===Mn.code||a.code===Ia.code:a instanceof vi&&a.status?a.status===403||a.status===408||a.status===413||a.status===429||a.status===500||a.status===502||a.status===503||a.status===504:!0}function Tu({key:a,name:t,request:e,retryCount:i=3,retryDelay:n=150,timeout:r,type:o},s){return{config:{key:a,name:t,request:e,retryCount:i,retryDelay:n,timeout:r,type:o},request:D_(e,{retryCount:i,retryDelay:n}),value:s}}function io(a,t={}){let{key:e="custom",name:i="Custom Provider",retryDelay:n}=t;return({retryCount:r})=>Tu({key:e,name:i,request:a.request.bind(a),retryCount:t.retryCount??r,retryDelay:n,type:"custom"})}Lr();Ge();var Su=class extends U{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}};lg();Lr();function M_(a,{errorInstance:t=new Error("timed out"),timeout:e,signal:i}){return new Promise((n,r)=>{(async()=>{let o;try{let s=new AbortController;e>0&&(o=setTimeout(()=>{i?s.abort():r(t)},e)),n(await a({signal:s?.signal||null}))}catch(s){s.name==="AbortError"&&r(t),r(s)}finally{clearTimeout(o)}})()})}mi();function EI(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var ug=EI();function B_(a,t={}){return{async request(e){let{body:i,fetchOptions:n={},onResponse:r=t.onResponse,timeout:o=t.timeout??1e4}=e,{headers:s,method:l,signal:c}={...t.fetchOptions,...n};try{let u=await M_(async({signal:b})=>await fetch(a,{...n,body:Array.isArray(i)?Xe(i.map(w=>({jsonrpc:"2.0",id:w.id??ug.take(),...w}))):Xe({jsonrpc:"2.0",id:i.id??ug.take(),...i}),headers:{...s,"Content-Type":"application/json"},method:l||"POST",signal:c||(o>0?b:null)}),{errorInstance:new ss({body:i,url:a}),timeout:o,signal:!0});r&&await r(u);let m;if(u.headers.get("Content-Type")?.startsWith("application/json")?m=await u.json():m=await u.text(),!u.ok)throw new vi({body:i,details:Xe(m.error)||u.statusText,headers:u.headers,status:u.status,url:a});return m}catch(u){throw u instanceof vi||u instanceof ss?u:new vi({body:i,details:u.message,url:a})}}}}function ys(a,t={}){let{batch:e,fetchOptions:i,key:n="http",name:r="HTTP JSON-RPC",onFetchResponse:o,retryDelay:s}=t;return({chain:l,retryCount:c,timeout:u})=>{let{batchSize:m=1e3,wait:b=0}=typeof e=="object"?e:{},_=t.retryCount??c,w=u??t.timeout??1e4,v=a||l?.rpcUrls.default.http[0];if(!v)throw new Su;let E=B_(v,{fetchOptions:i,onResponse:o,timeout:w});return Tu({key:n,name:r,async request({method:B,params:G}){let j={method:B,params:G},{schedule:Z}=gu({id:`${a}`,wait:b,shouldSplitBatch(he){return he.length>m},fn:he=>E.request({body:he}),sort:(he,Ue)=>he.id-Ue.id}),q=async he=>e?Z(he):[await E.request({body:he})],[{error:Y,result:V}]=await q(j);if(Y)throw new vr({body:j,error:Y,url:v});return V},retryCount:_,retryDelay:s,timeout:w,type:"http"},{fetchOptions:i,url:v})}}Hn();On();xa();Vn();Qo();Me();Fc();Ge();Qa();function ao(a,t){if(!(a instanceof U))return!1;let e=a.walk(i=>i instanceof Bt);return e instanceof Bt?!!(e.data?.errorName==="ResolverNotFound"||e.data?.errorName==="ResolverWildcardNotSupported"||e.data?.errorName==="ResolverNotContract"||e.data?.errorName==="ResolverError"||e.data?.errorName==="HttpError"||e.reason?.includes("Wildcard on non-extended resolvers is not supported")||t==="reverse"&&e.reason===Vc[50]):!1}Xi();Nt();Me();Ya();bi();function Cu(a){if(a.length!==66||a.indexOf("[")!==0||a.indexOf("]")!==65)return null;let t=`0x${a.slice(1,65)}`;return lt(t)?t:null}function no(a){let t=new Uint8Array(32).fill(0);if(!a)return qe(t);let e=a.split(".");for(let i=e.length-1;i>=0;i-=1){let n=Cu(e[i]),r=n?Wt(n):gt(ai(e[i]),"bytes");t=gt(qt([t,r]),"bytes")}return qe(t)}Nt();function P_(a){return`[${a.slice(2)}]`}Nt();Me();Ya();function R_(a){let t=new Uint8Array(32).fill(0);return a?Cu(a)||gt(ai(a)):qe(t)}function rn(a){let t=a.replace(/^\.|\.$/gm,"");if(t.length===0)return new Uint8Array(1);let e=new Uint8Array(ai(t).byteLength+2),i=0,n=t.split(".");for(let r=0;r<n.length;r++){let o=ai(n[r]);o.byteLength>255&&(o=ai(P_(R_(n[r])))),e[i]=o.length,e.set(o,i+1),i+=o.length+1}return e.byteLength!==i+1?e.slice(0,i+1):e}async function N_(a,{blockNumber:t,blockTag:e,coinType:i,name:n,gatewayUrls:r,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=xi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}try{let c=Ot({abi:og,functionName:"addr",...i!=null?{args:[no(n),BigInt(i)]}:{args:[no(n)]}}),u={address:l,abi:fu,functionName:"resolve",args:[_e(rn(n)),c],blockNumber:t,blockTag:e},m=ce(a,$t,"readContract"),b=r?await m({...u,args:[...u.args,r]}):await m(u);if(b[0]==="0x")return null;let _=_i({abi:og,args:i!=null?[no(n),BigInt(i)]:void 0,functionName:"addr",data:b[0]});return _==="0x"||Yi(_)==="0x00"?null:_}catch(c){if(o)throw c;if(ao(c,"resolve"))return null;throw c}}Ge();var ku=class extends U{constructor({data:t}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}},on=class extends U{constructor({reason:t}){super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}},ro=class extends U{constructor({uri:t}){super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}},Au=class extends U{constructor({namespace:t}){super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}};var TI=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,SI=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,CI=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,kI=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function AI(a){try{let t=await fetch(a,{method:"HEAD"});return t.status===200?t.headers.get("content-type")?.startsWith("image/"):!1}catch(t){return typeof t=="object"&&typeof t.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(e=>{let i=new Image;i.onload=()=>{e(!0)},i.onerror=()=>{e(!1)},i.src=a})}}function O_(a,t){return a?a.endsWith("/")?a.slice(0,-1):a:t}function pg({uri:a,gatewayUrls:t}){let e=CI.test(a);if(e)return{uri:a,isOnChain:!0,isEncoded:e};let i=O_(t?.ipfs,"https://ipfs.io"),n=O_(t?.arweave,"https://arweave.net"),r=a.match(TI),{protocol:o,subpath:s,target:l,subtarget:c=""}=r?.groups||{},u=o==="ipns:/"||s==="ipns/",m=o==="ipfs:/"||s==="ipfs/"||SI.test(a);if(a.startsWith("http")&&!u&&!m){let _=a;return t?.arweave&&(_=a.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:_,isOnChain:!1,isEncoded:!1}}if((u||m)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(o==="ar:/"&&l)return{uri:`${n}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let b=a.replace(kI,"");if(b.startsWith("<svg")&&(b=`data:image/svg+xml;base64,${btoa(b)}`),b.startsWith("data:")||b.startsWith("{"))return{uri:b,isOnChain:!0,isEncoded:!1};throw new ro({uri:a})}function mg(a){if(typeof a!="object"||!("image"in a)&&!("image_url"in a)&&!("image_data"in a))throw new ku({data:a});return a.image||a.image_url||a.image_data}async function H_({gatewayUrls:a,uri:t}){try{let e=await fetch(t).then(n=>n.json());return await Du({gatewayUrls:a,uri:mg(e)})}catch{throw new ro({uri:t})}}async function Du({gatewayUrls:a,uri:t}){let{uri:e,isOnChain:i}=pg({uri:t,gatewayUrls:a});if(i||await AI(e))return e;throw new ro({uri:t})}function U_(a){let t=a;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[e,i,n]=t.split("/"),[r,o]=e.split(":"),[s,l]=i.split(":");if(!r||r.toLowerCase()!=="eip155")throw new on({reason:"Only EIP-155 supported"});if(!o)throw new on({reason:"Chain ID not found"});if(!l)throw new on({reason:"Contract address not found"});if(!n)throw new on({reason:"Token ID not found"});if(!s)throw new on({reason:"ERC namespace not found"});return{chainID:parseInt(o),namespace:s.toLowerCase(),contractAddress:l,tokenID:n}}async function V_(a,{nft:t}){if(t.namespace==="erc721")return $t(a,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if(t.namespace==="erc1155")return $t(a,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new Au({namespace:t.namespace})}async function F_(a,{gatewayUrls:t,record:e}){return/eip155:/i.test(e)?DI(a,{gatewayUrls:t,record:e}):Du({uri:e,gatewayUrls:t})}async function DI(a,{gatewayUrls:t,record:e}){let i=U_(e),n=await V_(a,{nft:i}),{uri:r,isOnChain:o,isEncoded:s}=pg({uri:n,gatewayUrls:t});if(o&&(r.includes("data:application/json;base64,")||r.startsWith("{"))){let c=s?atob(r.replace("data:application/json;base64,","")):r,u=JSON.parse(c);return Du({uri:mg(u),gatewayUrls:t})}let l=i.tokenID;return i.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),H_({gatewayUrls:t,uri:r.replace(/(?:0x)?{id}/,l)})}Hn();On();xa();Vn();Me();async function Mu(a,{blockNumber:t,blockTag:e,name:i,key:n,gatewayUrls:r,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=xi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}try{let c={address:l,abi:fu,functionName:"resolve",args:[_e(rn(i)),Ot({abi:rg,functionName:"text",args:[no(i),n]})],blockNumber:t,blockTag:e},u=ce(a,$t,"readContract"),m=r?await u({...c,args:[...c.args,r]}):await u(c);if(m[0]==="0x")return null;let b=_i({abi:rg,functionName:"text",data:m[0]});return b===""?null:b}catch(c){if(o)throw c;if(ao(c,"resolve"))return null;throw c}}async function z_(a,{blockNumber:t,blockTag:e,assetGatewayUrls:i,name:n,gatewayUrls:r,strict:o,universalResolverAddress:s}){let l=await ce(a,Mu,"getEnsText")({blockNumber:t,blockTag:e,key:"avatar",name:n,universalResolverAddress:s,gatewayUrls:r,strict:o});if(!l)return null;try{return await F_(a,{record:l,gatewayUrls:i})}catch{return null}}Hn();Vn();Me();async function G_(a,{address:t,blockNumber:e,blockTag:i,gatewayUrls:n,strict:r,universalResolverAddress:o}){let s=o;if(!s){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=xi({blockNumber:e,chain:a.chain,contract:"ensUniversalResolver"})}let l=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let c={address:s,abi:l_,functionName:"reverse",args:[_e(rn(l))],blockNumber:e,blockTag:i},u=ce(a,$t,"readContract"),[m,b]=n?await u({...c,args:[...c.args,n]}):await u(c);return t.toLowerCase()!==b.toLowerCase()?null:m}catch(c){if(r)throw c;if(ao(c,"reverse"))return null;throw c}}Vn();Me();async function j_(a,{blockNumber:t,blockTag:e,name:i,universalResolverAddress:n}){let r=n;if(!r){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");r=xi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}let[o]=await ce(a,$t,"readContract")({address:r,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[_e(rn(i))],blockNumber:t,blockTag:e});return o}Jr();async function K_(a){let t=$a(a,{method:"eth_newBlockFilter"}),e=await a.request({method:"eth_newBlockFilter"});return{id:e,request:t(e),type:"block"}}Me();async function Bu(a,{address:t,args:e,event:i,events:n,fromBlock:r,strict:o,toBlock:s}={}){let l=n??(i?[i]:void 0),c=$a(a,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(b=>Oi({abi:[b],eventName:b.name,args:e}))],i&&(u=u[0]));let m=await a.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof r=="bigint"?be(r):r,toBlock:typeof s=="bigint"?be(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:e,eventName:i?i.name:void 0,fromBlock:r,id:m,request:c(m),strict:!!o,toBlock:s,type:"event"}}async function Pu(a){let t=$a(a,{method:"eth_newPendingTransactionFilter"}),e=await a.request({method:"eth_newPendingTransactionFilter"});return{id:e,request:t(e),type:"transaction"}}Me();async function W_(a,{address:t,blockNumber:e,blockTag:i="latest"}){let n=e?be(e):void 0,r=await a.request({method:"eth_getBalance",params:[t,n||i]});return BigInt(r)}async function q_(a){let t=await a.request({method:"eth_blobBaseFee"});return BigInt(t)}ii();Me();async function Y_(a,{blockHash:t,blockNumber:e,blockTag:i="latest"}={}){let n=e!==void 0?be(e):void 0,r;return t?r=await a.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):r=await a.request({method:"eth_getBlockTransactionCountByNumber",params:[n||i]}),Ct(r)}Me();async function $_(a,{address:t,blockNumber:e,blockTag:i="latest"}){let n=e!==void 0?be(e):void 0,r=await a.request({method:"eth_getCode",params:[t,n||i]});if(r!=="0x")return r}Me();function X_(a){return{baseFeePerGas:a.baseFeePerGas.map(t=>BigInt(t)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(t=>t.map(e=>BigInt(e)))}}async function Q_(a,{blockCount:t,blockNumber:e,blockTag:i="latest",rewardPercentiles:n}){let r=e?be(e):void 0,o=await a.request({method:"eth_feeHistory",params:[be(t),r||i,n]});return X_(o)}async function Z_(a,{filter:t}){let e=t.strict??!1,n=(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(r=>Yt(r));return t.abi?Xr({abi:t.abi,logs:n,strict:e}):n}Me();function wi(a){return{formatters:void 0,fees:void 0,serializers:void 0,...a}}var J_=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,e0=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;St();$i();Pi();qi();Me();Cn();Xi();Me();Ya();function t0(a){let{domain:t={},message:e,primaryType:i}=a,n={EIP712Domain:Nu({domain:t}),...a.types};Ru({domain:t,message:e,primaryType:i,types:n});let r=["0x1901"];return t&&r.push(MI({domain:t,types:n})),i!=="EIP712Domain"&&r.push(i0({data:e,primaryType:i,types:n})),gt(qt(r))}function MI({domain:a,types:t}){return i0({data:a,primaryType:"EIP712Domain",types:t})}function i0({data:a,primaryType:t,types:e}){let i=a0({data:a,primaryType:t,types:e});return gt(i)}function a0({data:a,primaryType:t,types:e}){let i=[{type:"bytes32"}],n=[BI({primaryType:t,types:e})];for(let r of e[t]){let[o,s]=r0({types:e,name:r.name,type:r.type,value:a[r.name]});i.push(o),n.push(s)}return Ni(i,n)}function BI({primaryType:a,types:t}){let e=_e(PI({primaryType:a,types:t}));return gt(e)}function PI({primaryType:a,types:t}){let e="",i=n0({primaryType:a,types:t});i.delete(a);let n=[a,...Array.from(i).sort()];for(let r of n)e+=`${r}(${t[r].map(({name:o,type:s})=>`${s} ${o}`).join(",")})`;return e}function n0({primaryType:a,types:t},e=new Set){let n=a.match(/^\w*/u)?.[0];if(e.has(n)||t[n]===void 0)return e;e.add(n);for(let r of t[n])n0({primaryType:r.type,types:t},e);return e}function r0({types:a,name:t,type:e,value:i}){if(a[e]!==void 0)return[{type:"bytes32"},gt(a0({data:i,primaryType:e,types:a}))];if(e==="bytes")return i=`0x${(i.length%2?"0":"")+i.slice(2)}`,[{type:"bytes32"},gt(i)];if(e==="string")return[{type:"bytes32"},gt(_e(i))];if(e.lastIndexOf("]")===e.length-1){let n=e.slice(0,e.lastIndexOf("[")),r=i.map(o=>r0({name:t,type:n,types:a,value:o}));return[{type:"bytes32"},gt(Ni(r.map(([o])=>o),r.map(([,o])=>o)))]}return[{type:e},i]}function Ru(a){let{domain:t,message:e,primaryType:i,types:n}=a,r=(o,s)=>{for(let l of o){let{name:c,type:u}=l,m=s[c],b=u.match(e0);if(b&&(typeof m=="number"||typeof m=="bigint")){let[v,E,B]=b;be(m,{signed:E==="int",size:parseInt(B)/8})}if(u==="address"&&typeof m=="string"&&!tt(m))throw new nt({address:m});let _=u.match(J_);if(_){let[v,E]=_;if(E&&$e(m)!==parseInt(E))throw new jo({expectedSize:parseInt(E),givenSize:$e(m)})}let w=n[u];w&&r(w,m)}};if(n.EIP712Domain&&t&&r(n.EIP712Domain,t),i!=="EIP712Domain"){let o=n[i];r(o,e)}}function Nu({domain:a}){return[typeof a?.name=="string"&&{name:"name",type:"string"},a?.version&&{name:"version",type:"string"},typeof a?.chainId=="number"&&{name:"chainId",type:"uint256"},a?.verifyingContract&&{name:"verifyingContract",type:"address"},a?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}St();Xi();Cn();var dg="/docs/contract/encodeDeployData";function bs(a){let{abi:t,args:e,bytecode:i}=a;if(!e||e.length===0)return i;let n=t.find(o=>"type"in o&&o.type==="constructor");if(!n)throw new Ho({docsPath:dg});if(!("inputs"in n))throw new rr({docsPath:dg});if(!n.inputs||n.inputs.length===0)throw new rr({docsPath:dg});let r=Ni(n.inputs,e);return Ri([i,r])}Gc();Nt();Me();function sn(a,t="hex"){let e=o0(a),i=dr(new Uint8Array(e.length));return e.encode(i),t==="hex"?qe(i.bytes):i.bytes}function o0(a){return Array.isArray(a)?RI(a.map(t=>o0(t))):NI(a)}function RI(a){let t=a.reduce((n,r)=>n+r.length,0),e=s0(t);return{length:(()=>t<=55?1+t:1+e+t)(),encode(n){t<=55?n.pushByte(192+t):(n.pushByte(192+55+e),e===1?n.pushUint8(t):e===2?n.pushUint16(t):e===3?n.pushUint24(t):n.pushUint32(t));for(let{encode:r}of a)r(n)}}}function NI(a){let t=typeof a=="string"?ui(a):a,e=s0(t.length);return{length:(()=>t.length===1&&t[0]<128?1:t.length<=55?1+t.length:1+e+t.length)(),encode(n){t.length===1&&t[0]<128?n.pushBytes(t):t.length<=55?(n.pushByte(128+t.length),n.pushBytes(t)):(n.pushByte(128+55+e),e===1?n.pushUint8(t.length):e===2?n.pushUint16(t.length):e===3?n.pushUint24(t.length):n.pushUint32(t.length),n.pushBytes(t))}}}function s0(a){if(a<2**8)return 1;if(a<2**16)return 2;if(a<2**24)return 3;if(a<2**32)return 4;throw new U("Length is too large.")}bi();ii();lu();var OI={"0x0":"reverted","0x1":"success"};function hg(a){let t={...a,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,contractAddress:a.contractAddress?a.contractAddress:null,cumulativeGasUsed:a.cumulativeGasUsed?BigInt(a.cumulativeGasUsed):null,effectiveGasPrice:a.effectiveGasPrice?BigInt(a.effectiveGasPrice):null,gasUsed:a.gasUsed?BigInt(a.gasUsed):null,logs:a.logs?a.logs.map(e=>Yt(e)):null,to:a.to?a.to:null,transactionIndex:a.transactionIndex?Ct(a.transactionIndex):null,status:a.status?OI[a.status]:null,type:a.type?ig[a.type]||a.type:null};return a.blobGasPrice&&(t.blobGasPrice=BigInt(a.blobGasPrice)),a.blobGasUsed&&(t.blobGasUsed=BigInt(a.blobGasUsed)),t}var l0=Kr("transactionReceipt",hg);Me();ii();yg();bi();Nt();Me();function u0(a,t){let e=t||"hex",i=Hu(lt(a,{strict:!1})?Wt(a):a);return e==="bytes"?i:_e(i)}var p0=`Ethereum Signed Message:
`;Xi();Nt();Ya();function bg(a,t){let e=(()=>typeof a=="string"?ai(a):a.raw instanceof Uint8Array?a.raw:Wt(a.raw))(),i=ai(`${p0}${e.length}`);return gt(qt([i,e]),t)}$i();Ge();Ge();var Uu=class extends U{constructor({maxSize:t,size:e}){super("Blob size is too large.",{metaMessages:[`Max: ${t} bytes`,`Given: ${e} bytes`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlobSizeTooLargeError"})}},oo=class extends U{constructor(){super("Blob data must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EmptyBlobError"})}},Vu=class extends U{constructor({hash:t,size:e}){super(`Versioned hash "${t}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashSizeError"})}},Fu=class extends U{constructor({hash:t,version:e}){super(`Versioned hash "${t}" version is invalid.`,{metaMessages:[`Expected: ${1}`,`Received: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashVersionError"})}};ds();Pn();Pi();qi();cr();ii();function m0(a){let{blobVersionedHashes:t}=a;if(t){if(t.length===0)throw new oo;for(let e of t){let i=$e(e),n=Ct(_a(e,0,1));if(i!==32)throw new Vu({hash:e,size:i});if(n!==1)throw new Fu({hash:e,version:n})}}gg(a)}function gg(a){let{chainId:t,maxPriorityFeePerGas:e,maxFeePerGas:i,to:n}=a;if(t<=0)throw new Zr({chainId:t});if(n&&!tt(n))throw new nt({address:n});if(i&&i>2n**256n-1n)throw new Li({maxFeePerGas:i});if(e&&i&&e>i)throw new ea({maxFeePerGas:i,maxPriorityFeePerGas:e})}function d0(a){let{chainId:t,maxPriorityFeePerGas:e,gasPrice:i,maxFeePerGas:n,to:r}=a;if(t<=0)throw new Zr({chainId:t});if(r&&!tt(r))throw new nt({address:r});if(e||n)throw new U("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(i&&i>2n**256n-1n)throw new Li({maxFeePerGas:i})}function h0(a){let{chainId:t,maxPriorityFeePerGas:e,gasPrice:i,maxFeePerGas:n,to:r,accessList:o}=a;if(r&&!tt(r))throw new nt({address:r});if(typeof t<"u"&&t<=0)throw new Zr({chainId:t});if(e||n)throw new U("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(i&&i>2n**256n-1n)throw new Li({maxFeePerGas:i});if(o)throw new U("`accessList` is not a valid Legacy Transaction attribute.")}Nt();Me();function zu(a){let{kzg:t}=a,e=a.to??(typeof a.blobs[0]=="string"?"hex":"bytes"),i=typeof a.blobs[0]=="string"?a.blobs.map(r=>ui(r)):a.blobs,n=[];for(let r of i)n.push(Uint8Array.from(t.blobToKzgCommitment(r)));return e==="bytes"?n:n.map(r=>qe(r))}Nt();Me();function Gu(a){let{kzg:t}=a,e=a.to??(typeof a.blobs[0]=="string"?"hex":"bytes"),i=typeof a.blobs[0]=="string"?a.blobs.map(o=>ui(o)):a.blobs,n=typeof a.commitments[0]=="string"?a.commitments.map(o=>ui(o)):a.commitments,r=[];for(let o=0;o<i.length;o++){let s=i[o],l=n[o];r.push(Uint8Array.from(t.computeBlobKzgProof(s,l)))}return e==="bytes"?r:r.map(o=>qe(o))}Gc();qi();Nt();Me();function f0(a){let t=a.to??(typeof a.data=="string"?"hex":"bytes"),e=typeof a.data=="string"?ui(a.data):a.data,i=$e(e);if(!i)throw new oo;if(i>761855)throw new Uu({maxSize:761855,size:i});let n=[],r=!0,o=0;for(;r;){let s=dr(new Uint8Array(131072)),l=0;for(;l<4096;){let c=e.slice(o,o+(32-1));if(s.pushByte(0),s.pushBytes(c),c.length<31){s.pushByte(128),r=!1;break}l++,o+=31}n.push(s)}return t==="bytes"?n.map(s=>s.bytes):n.map(s=>qe(s.bytes))}function y0(a){let{data:t,kzg:e,to:i}=a,n=a.blobs??f0({data:t,to:i}),r=a.commitments??zu({blobs:n,kzg:e,to:i}),o=a.proofs??Gu({blobs:n,commitments:r,kzg:e,to:i}),s=[];for(let l=0;l<n.length;l++)s.push({blob:n[l],commitment:r[l],proof:o[l]});return s}Hi();Me();function b0(a){let{commitment:t,version:e=1}=a,i=a.to??(typeof t=="string"?"hex":"bytes"),n=u0(t,"bytes");return n.set([e],0),i==="bytes"?n:qe(n)}function g0(a){let{commitments:t,version:e}=a,i=a.to??(typeof t[0]=="string"?"hex":"bytes"),n=[];for(let r of t)n.push(b0({commitment:r,to:i,version:e}));return n}Xi();Qo();Me();$i();Hi();Pi();function ju(a){if(!a||a.length===0)return[];let t=[];for(let e=0;e<a.length;e++){let{address:i,storageKeys:n}=a[e];for(let r=0;r<n.length;r++)if(n[r].length-2!==64)throw new tu({storageKey:n[r]});if(!tt(i,{strict:!1}))throw new nt({address:i});t.push([i,n])}return t}function v0(a,t){let e=du(a);return e==="eip1559"?KI(a,t):e==="eip2930"?WI(a,t):e==="eip4844"?jI(a,t):qI(a,t)}function jI(a,t){let{chainId:e,gas:i,nonce:n,to:r,value:o,maxFeePerBlobGas:s,maxFeePerGas:l,maxPriorityFeePerGas:c,accessList:u,data:m}=a;m0(a);let b=a.blobVersionedHashes,_=a.sidecars;if(a.blobs){let j=typeof a.blobs[0]=="string"?a.blobs:a.blobs.map(V=>qe(V)),Z=a.kzg,q=zu({blobs:j,kzg:Z}),Y=Gu({blobs:j,commitments:q,kzg:Z});b=g0({commitments:q}),_!==!1&&(_=y0({blobs:j,commitments:q,proofs:Y}))}let w=ju(u),v=[_e(e),n?_e(n):"0x",c?_e(c):"0x",l?_e(l):"0x",i?_e(i):"0x",r??"0x",o?_e(o):"0x",m??"0x",w,s?_e(s):"0x",b??[],...vg(a,t)],E=[],B=[],G=[];if(_)for(let j=0;j<_.length;j++){let{blob:Z,commitment:q,proof:Y}=_[j];E.push(Z),B.push(q),G.push(Y)}return Ri(["0x03",_?sn([v,E,B,G]):sn(v)])}function KI(a,t){let{chainId:e,gas:i,nonce:n,to:r,value:o,maxFeePerGas:s,maxPriorityFeePerGas:l,accessList:c,data:u}=a;gg(a);let m=ju(c),b=[_e(e),n?_e(n):"0x",l?_e(l):"0x",s?_e(s):"0x",i?_e(i):"0x",r??"0x",o?_e(o):"0x",u??"0x",m,...vg(a,t)];return Ri(["0x02",sn(b)])}function WI(a,t){let{chainId:e,gas:i,data:n,nonce:r,to:o,value:s,accessList:l,gasPrice:c}=a;d0(a);let u=ju(l),m=[_e(e),r?_e(r):"0x",c?_e(c):"0x",i?_e(i):"0x",o??"0x",s?_e(s):"0x",n??"0x",u,...vg(a,t)];return Ri(["0x01",sn(m)])}function qI(a,t){let{chainId:e=0,gas:i,data:n,nonce:r,to:o,value:s,gasPrice:l}=a;h0(a);let c=[r?_e(r):"0x",l?_e(l):"0x",i?_e(i):"0x",o??"0x",s?_e(s):"0x",n??"0x"];if(t){let u=(()=>{if(t.v>=35n)return(t.v-35n)/2n>0?t.v:27n+(t.v===35n?0n:1n);if(e>0)return BigInt(e*2)+BigInt(35n+t.v-27n);let m=27n+(t.v===27n?0n:1n);if(t.v!==m)throw new Jc({v:t.v});return m})();c=[...c,_e(u),t.r,t.s]}else e>0&&(c=[...c,_e(e),"0x","0x"]);return sn(c)}function vg(a,t){let{r:e,s:i,v:n,yParity:r}=t??a;return typeof e>"u"?[]:typeof i>"u"?[]:typeof n>"u"&&typeof r>"u"?[]:[(()=>typeof r=="number"?r?_e(1):"0x":n===0n?"0x":n===1n?_e(1):n===27n?"0x":_e(1))(),Yi(e),Yi(i)]}function gs(a,t){let[e,i="0"]=a.split("."),n=e.startsWith("-");if(n&&(e=e.slice(1)),i=i.replace(/(0+)$/,""),t===0)Math.round(+`.${i}`)===1&&(e=`${BigInt(e)+1n}`),i="";else if(i.length>t){let[r,o,s]=[i.slice(0,t-1),i.slice(t-1,t),i.slice(t)],l=Math.round(+`${o}.${s}`);l>9?i=`${BigInt(r)+BigInt(1)}0`.padStart(r.length+1,"0"):i=`${r}${l}`,i.length>t&&(i=i.slice(1),e=`${BigInt(e)+1n}`),i=i.slice(0,t)}else i=i.padEnd(t,"0");return BigInt(`${n?"-":""}${e}${i}`)}qc();function so(a,t="wei"){return gs(a,Wc[t])}function YI(a){return a.map(t=>({...t,value:BigInt(t.value)}))}function L0(a){return{...a,balance:a.balance?BigInt(a.balance):void 0,nonce:a.nonce?Ct(a.nonce):void 0,storageProof:a.storageProof?YI(a.storageProof):void 0}}async function _0(a,{address:t,blockNumber:e,blockTag:i,storageKeys:n}){let r=i??"latest",o=e!==void 0?be(e):void 0,s=await a.request({method:"eth_getProof",params:[t,n,o||r]});return L0(s)}Me();async function x0(a,{address:t,blockNumber:e,blockTag:i="latest",slot:n}){let r=e!==void 0?be(e):void 0;return await a.request({method:"eth_getStorageAt",params:[t,n,r||i]})}Hi();Me();async function lo(a,{blockHash:t,blockNumber:e,blockTag:i,hash:n,index:r}){let o=i||"latest",s=e!==void 0?be(e):void 0,l=null;if(n?l=await a.request({method:"eth_getTransactionByHash",params:[n]}):t?l=await a.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,be(r)]}):(s||o)&&(l=await a.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||o,be(r)]})),!l)throw new br({blockHash:t,blockNumber:e,blockTag:o,hash:n,index:r});return(a.chain?.formatters?.transaction?.format||Rn)(l)}async function w0(a,{hash:t,transactionReceipt:e}){let[i,n]=await Promise.all([ce(a,sa,"getBlockNumber")({}),t?ce(a,lo,"getBlockNumber")({hash:t}):void 0]),r=e?.blockNumber||n?.blockNumber;return r?i-r+1n:0n}Hi();async function vs(a,{hash:t}){let e=await a.request({method:"eth_getTransactionReceipt",params:[t]});if(!e)throw new gr({hash:t});return(a.chain?.formatters?.transactionReceipt?.format||hg)(e)}Hn();St();Ge();Qa();On();xa();Vn();async function I0(a,t){let{allowFailure:e=!0,batchSize:i,blockNumber:n,blockTag:r,multicallAddress:o,stateOverride:s}=t,l=t.contracts,c=i??(typeof a.batch?.multicall=="object"&&a.batch.multicall.batchSize||1024),u=o;if(!u){if(!a.chain)throw new Error("client chain not configured. multicallAddress is required.");u=xi({blockNumber:n,chain:a.chain,contract:"multicall3"})}let m=[[]],b=0,_=0;for(let E=0;E<l.length;E++){let{abi:B,address:G,args:j,functionName:Z}=l[E];try{let q=Ot({abi:B,args:j,functionName:Z});_+=(q.length-2)/2,c>0&&_>c&&m[b].length>0&&(b++,_=(q.length-2)/2,m[b]=[]),m[b]=[...m[b],{allowFailure:!0,callData:q,target:G}]}catch(q){let Y=Ea(q,{abi:B,address:G,args:j,docsPath:"/docs/contract/multicall",functionName:Z});if(!e)throw Y;m[b]=[...m[b],{allowFailure:!0,callData:"0x",target:G}]}}let w=await Promise.allSettled(m.map(E=>ce(a,$t,"readContract")({abi:ps,address:u,args:[E],blockNumber:n,blockTag:r,functionName:"aggregate3",stateOverride:s}))),v=[];for(let E=0;E<w.length;E++){let B=w[E];if(B.status==="rejected"){if(!e)throw B.reason;for(let j=0;j<m[E].length;j++)v.push({status:"failure",error:B.reason,result:void 0});continue}let G=B.value;for(let j=0;j<G.length;j++){let{returnData:Z,success:q}=G[j],{callData:Y}=m[E][j],{abi:V,address:he,functionName:Ue,args:Pe}=l[v.length];try{if(Y==="0x")throw new Di;if(!q)throw new wa({data:Z});let Be=_i({abi:V,args:Pe,data:Z,functionName:Ue});v.push(e?{result:Be,status:"success"}:Be)}catch(Be){let yt=Ea(Be,{abi:V,address:he,args:Pe,docsPath:"/docs/contract/multicall",functionName:Ue});if(!e)throw yt;v.push({error:yt,result:void 0,status:"failure"})}}}if(v.length!==l.length)throw new U("multicall results mismatch");return v}Hn();var E0="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";Qa();uo();Nt();bi();function k0(a,t){let e=lt(a)?Wt(a):a,i=lt(t)?Wt(t):t;return xg(e,i)}Jr();async function $u(a,{address:t,hash:e,signature:i,...n}){let r=lt(i)?i:_e(i);try{let{data:o}=await ce(a,ra,"call")({data:bs({abi:c_,args:[t,e,r],bytecode:E0}),...n});return k0(o??"0x0","0x1")}catch(o){if(o instanceof Dn)return!1;throw o}}async function A0(a,{address:t,message:e,signature:i,...n}){let r=bg(e);return $u(a,{address:t,hash:r,signature:i,...n})}async function D0(a,t){let{address:e,signature:i,message:n,primaryType:r,types:o,domain:s,...l}=t,c=t0({message:n,primaryType:r,types:o,domain:s});return $u(a,{address:e,hash:c,signature:i,...l})}Hi();mi();ii();mi();function Xu(a,{emitOnBegin:t=!1,emitMissed:e=!1,onBlockNumber:i,onError:n,poll:r,pollingInterval:o=a.pollingInterval}){let s=typeof r<"u"?r:a.transport.type!=="webSocket",l;return s?(()=>{let m=Xe(["watchBlockNumber",a.uid,t,e,o]);return ri(m,{onBlockNumber:i,onError:n},b=>oa(async()=>{try{let _=await ce(a,sa,"getBlockNumber")({cacheTime:0});if(l){if(_===l)return;if(_-l>1&&e)for(let w=l+1n;w<_;w++)b.onBlockNumber(w,l),l=w}(!l||_>l)&&(b.onBlockNumber(_,l),l=_)}catch(_){b.onError?.(_)}},{emitOnBegin:t,interval:o}))})():(()=>{let m=Xe(["watchBlockNumber",a.uid,t,e]);return ri(m,{onBlockNumber:i,onError:n},b=>{let _=!0,w=()=>_=!1;return(async()=>{try{let{unsubscribe:v}=await a.transport.subscribe({params:["newHeads"],onData(E){if(!_)return;let B=ti(E.result?.number);b.onBlockNumber(B,l),l=B},onError(E){b.onError?.(E)}});w=v,_||w()}catch(v){n?.(v)}})(),()=>w()})})()}async function M0(a,{confirmations:t=1,hash:e,onReplaced:i,pollingInterval:n=a.pollingInterval,retryCount:r=6,retryDelay:o=({count:l})=>~~(1<<l)*200,timeout:s}){let l=Xe(["waitForTransactionReceipt",a.uid,e]),c,u,m,b=!1;return new Promise((_,w)=>{s&&setTimeout(()=>w(new au({hash:e})),s);let v=ri(l,{onReplaced:i,resolve:_,reject:w},E=>{let B=ce(a,Xu,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:n,async onBlockNumber(G){if(b)return;let j=G,Z=q=>{B(),q(),v()};try{if(m){if(t>1&&(!m.blockNumber||j-m.blockNumber+1n<t))return;Z(()=>E.resolve(m));return}if(c||(b=!0,await fs(async()=>{c=await ce(a,lo,"getTransaction")({hash:e}),c.blockNumber&&(j=c.blockNumber)},{delay:o,retryCount:r}),b=!1),m=await ce(a,vs,"getTransactionReceipt")({hash:e}),t>1&&(!m.blockNumber||j-m.blockNumber+1n<t))return;Z(()=>E.resolve(m))}catch(q){if(q instanceof br||q instanceof gr){if(!c){b=!1;return}try{u=c,b=!0;let Y=await fs(()=>ce(a,ni,"getBlock")({blockNumber:j,includeTransactions:!0}),{delay:o,retryCount:r,shouldRetry:({error:Ue})=>Ue instanceof qr});b=!1;let V=Y.transactions.find(({from:Ue,nonce:Pe})=>Ue===u.from&&Pe===u.nonce);if(!V||(m=await ce(a,vs,"getTransactionReceipt")({hash:V.hash}),t>1&&(!m.blockNumber||j-m.blockNumber+1n<t)))return;let he="replaced";V.to===u.to&&V.value===u.value?he="repriced":V.from===V.to&&V.value===0n&&(he="cancelled"),Z(()=>{E.onReplaced?.({reason:he,replacedTransaction:u,transaction:V,transactionReceipt:m}),E.resolve(m)})}catch(Y){Z(()=>E.reject(Y))}}else Z(()=>E.reject(q))}}})})})}mi();function B0(a,{blockTag:t="latest",emitMissed:e=!1,emitOnBegin:i=!1,onBlock:n,onError:r,includeTransactions:o,poll:s,pollingInterval:l=a.pollingInterval}){let c=typeof s<"u"?s:a.transport.type!=="webSocket",u=o??!1,m;return c?(()=>{let w=Xe(["watchBlocks",a.uid,t,e,i,u,l]);return ri(w,{onBlock:n,onError:r},v=>oa(async()=>{try{let E=await ce(a,ni,"getBlock")({blockTag:t,includeTransactions:u});if(E.number&&m?.number){if(E.number===m.number)return;if(E.number-m.number>1&&e)for(let B=m?.number+1n;B<E.number;B++){let G=await ce(a,ni,"getBlock")({blockNumber:B,includeTransactions:u});v.onBlock(G,m),m=G}}(!m?.number||t==="pending"&&!E?.number||E.number&&E.number>m.number)&&(v.onBlock(E,m),m=E)}catch(E){v.onError?.(E)}},{emitOnBegin:i,interval:l}))})():(()=>{let w=!0,v=()=>w=!1;return(async()=>{try{let{unsubscribe:E}=await a.transport.subscribe({params:["newHeads"],onData(B){if(!w)return;let j=(a.chain?.formatters?.block?.format||us)(B.result);n(j,m),m=j},onError(B){r?.(B)}});v=E,w||v()}catch(E){r?.(E)}})(),()=>v()})()}mi();St();ls();function P0(a,{address:t,args:e,batch:i=!0,event:n,events:r,onError:o,onLogs:s,poll:l,pollingInterval:c=a.pollingInterval,strict:u}){let m=typeof l<"u"?l:a.transport.type!=="webSocket",b=u??!1;return m?(()=>{let v=Xe(["watchEvent",t,e,i,a.uid,n,c]);return ri(v,{onLogs:s,onError:o},E=>{let B,G,j=!1,Z=oa(async()=>{if(!j){try{G=await ce(a,Bu,"createEventFilter")({address:t,args:e,event:n,events:r,strict:b})}catch{}j=!0;return}try{let q;if(G)q=await ce(a,an,"getFilterChanges")({filter:G});else{let Y=await ce(a,sa,"getBlockNumber")({});B&&B!==Y?q=await ce(a,Qr,"getLogs")({address:t,args:e,event:n,events:r,fromBlock:B+1n,toBlock:Y}):q=[],B=Y}if(q.length===0)return;if(i)E.onLogs(q);else for(let Y of q)E.onLogs([Y])}catch(q){G&&q instanceof Ji&&(j=!1),E.onError?.(q)}},{emitOnBegin:!0,interval:c});return async()=>{G&&await ce(a,nn,"uninstallFilter")({filter:G}),Z()}})})():(()=>{let v=!0,E=()=>v=!1;return(async()=>{try{let B=r??(n?[n]:void 0),G=[];B&&(G=[B.flatMap(Z=>Oi({abi:[Z],eventName:Z.name,args:e}))],n&&(G=G[0]));let{unsubscribe:j}=await a.transport.subscribe({params:["logs",{address:t,topics:G}],onData(Z){if(!v)return;let q=Z.result;try{let{eventName:Y,args:V}=Nn({abi:B??[],data:q.data,topics:q.topics,strict:b}),he=Yt(q,{args:V,eventName:Y});s([he])}catch(Y){let V,he;if(Y instanceof gi||Y instanceof Mi){if(u)return;V=Y.abiItem.name,he=Y.abiItem.inputs?.some(Pe=>!("name"in Pe&&Pe.name))}let Ue=Yt(q,{args:he?[]:{},eventName:V});s([Ue])}},onError(Z){o?.(Z)}});E=j,v||E()}catch(B){o?.(B)}})(),()=>E()})()}mi();function R0(a,{batch:t=!0,onError:e,onTransactions:i,poll:n,pollingInterval:r=a.pollingInterval}){return(typeof n<"u"?n:a.transport.type!=="webSocket")?(()=>{let c=Xe(["watchPendingTransactions",a.uid,t,r]);return ri(c,{onTransactions:i,onError:e},u=>{let m,b=oa(async()=>{try{if(!m)try{m=await ce(a,Pu,"createPendingTransactionFilter")({});return}catch(w){throw b(),w}let _=await ce(a,an,"getFilterChanges")({filter:m});if(_.length===0)return;if(t)u.onTransactions(_);else for(let w of _)u.onTransactions([w])}catch(_){u.onError?.(_)}},{emitOnBegin:!0,interval:r});return async()=>{m&&await ce(a,nn,"uninstallFilter")({filter:m}),b()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{let{unsubscribe:m}=await a.transport.subscribe({params:["newPendingTransactions"],onData(b){if(!c)return;let _=b.result;i([_])},onError(b){e?.(b)}});u=m,c||u()}catch(m){e?.(m)}})(),()=>u()})()}function N0(a){return{call:t=>ra(a,t),createBlockFilter:()=>K_(a),createContractEventFilter:t=>Uc(a,t),createEventFilter:t=>Bu(a,t),createPendingTransactionFilter:()=>Pu(a),estimateContractGas:t=>r_(a,t),estimateGas:t=>$r(a,t),getBalance:t=>W_(a,t),getBlobBaseFee:()=>q_(a),getBlock:t=>ni(a,t),getBlockNumber:t=>sa(a,t),getBlockTransactionCount:t=>Y_(a,t),getBytecode:t=>$_(a,t),getChainId:()=>na(a),getContractEvents:t=>hu(a,t),getEnsAddress:t=>N_(a,t),getEnsAvatar:t=>z_(a,t),getEnsName:t=>G_(a,t),getEnsResolver:t=>j_(a,t),getEnsText:t=>Mu(a,t),getFeeHistory:t=>Q_(a,t),estimateFeesPerGas:t=>n_(a,t),getFilterChanges:t=>an(a,t),getFilterLogs:t=>Z_(a,t),getGasPrice:()=>Yr(a),getLogs:t=>Qr(a,t),getProof:t=>_0(a,t),estimateMaxPriorityFeePerGas:t=>a_(a,t),getStorageAt:t=>x0(a,t),getTransaction:t=>lo(a,t),getTransactionConfirmations:t=>w0(a,t),getTransactionCount:t=>mu(a,t),getTransactionReceipt:t=>vs(a,t),multicall:t=>I0(a,t),prepareTransactionRequest:t=>tn(a,t),readContract:t=>$t(a,t),sendRawTransaction:t=>eo(a,t),simulateContract:t=>x_(a,t),verifyMessage:t=>A0(a,t),verifyTypedData:t=>D0(a,t),uninstallFilter:t=>nn(a,t),waitForTransactionReceipt:t=>M0(a,t),watchBlocks:t=>B0(a,t),watchBlockNumber:t=>Xu(a,t),watchContractEvent:t=>T_(a,t),watchEvent:t=>P0(a,t),watchPendingTransactions:t=>R0(a,t)}}function _s(a){let{key:t="public",name:e="Public Client"}=a;return Eu({...a,key:t,name:e,type:"publicClient"}).extend(N0)}function O0(a,t){let{abi:e,args:i,bytecode:n,...r}=t,o=bs({abi:e,args:i,bytecode:n});return to(a,{...r,data:o})}is();async function H0(a){return a.account?.type==="local"?[a.account.address]:(await a.request({method:"eth_accounts"})).map(e=>Sn(e))}async function U0(a){return await a.request({method:"wallet_getPermissions"})}is();async function V0(a){return(await a.request({method:"eth_requestAccounts"},{retryCount:0})).map(e=>PL(e))}async function F0(a,t){return a.request({method:"wallet_requestPermissions",params:[t]},{retryCount:0})}pi();Me();async function z0(a,{account:t=a.account,message:e}){if(!t)throw new aa({docsPath:"/docs/actions/wallet/signMessage"});let i=rt(t);if(i.type==="local")return i.signMessage({message:e});let n=(()=>typeof e=="string"?Tn(e):e.raw instanceof Uint8Array?_e(e.raw):e.raw)();return a.request({method:"personal_sign",params:[n,i.address]},{retryCount:0})}pi();Me();cs();Wr();async function G0(a,t){let{account:e=a.account,chain:i=a.chain,...n}=t;if(!e)throw new aa({docsPath:"/docs/actions/wallet/signTransaction"});let r=rt(e);ia({account:r,...t});let o=await ce(a,na,"getChainId")({});i!==null&&xu({currentChainId:o,chain:i});let l=(i?.formatters||a.chain?.formatters)?.transactionRequest?.format||Ja;return r.type==="local"?r.signTransaction({...n,chainId:o},{serializer:a.chain?.serializers?.transaction}):await a.request({method:"eth_signTransaction",params:[{...l(n),chainId:be(o),from:r.address}]},{retryCount:0})}pi();bi();mi();async function j0(a,t){let{account:e=a.account,domain:i,message:n,primaryType:r}=t;if(!e)throw new aa({docsPath:"/docs/actions/wallet/signTypedData"});let o=rt(e),s={EIP712Domain:Nu({domain:i}),...t.types};if(Ru({domain:i,message:n,primaryType:r,types:s}),o.type==="local")return o.signTypedData({domain:i,message:n,primaryType:r,types:s});let l=Xe({domain:i??{},message:n,primaryType:r,types:s},(c,u)=>lt(u)?u.toLowerCase():u);return a.request({method:"eth_signTypedData_v4",params:[o.address,l]},{retryCount:0})}Me();async function K0(a,{id:t}){await a.request({method:"wallet_switchEthereumChain",params:[{chainId:be(t)}]},{retryCount:0})}async function W0(a,t){return await a.request({method:"wallet_watchAsset",params:t},{retryCount:0})}function q0(a){return{addChain:t=>k_(a,t),deployContract:t=>O0(a,t),getAddresses:()=>H0(a),getChainId:()=>na(a),getPermissions:()=>U0(a),prepareTransactionRequest:t=>tn(a,t),requestAddresses:()=>V0(a),requestPermissions:t=>F0(a,t),sendRawTransaction:t=>eo(a,t),sendTransaction:t=>to(a,t),signMessage:t=>z0(a,t),signTransaction:t=>G0(a,t),signTypedData:t=>j0(a,t),switchChain:t=>K0(a,t),watchAsset:t=>W0(a,t),writeContract:t=>C_(a,t)}}function po(a){let{key:t="wallet",name:e="Wallet Client",transport:i}=a;return Eu({...a,key:t,name:e,transport:i,type:"walletClient"}).extend(q0)}St();Ge();Qa();Me();Yc();var ep=class{constructor(){this.coins={};this.needTip=!0}};var Ei=(V=>(V[V.MAINNET=1]="MAINNET",V[V.TESTNET_RINKEBY=4]="TESTNET_RINKEBY",V[V.ARBITRUM=42161]="ARBITRUM",V[V.ARBITRUM_TESTNET=421611]="ARBITRUM_TESTNET",V[V.AVALANCHE=43114]="AVALANCHE",V[V.AVALANCHE_TESTNET=43113]="AVALANCHE_TESTNET",V[V.POLYGON=137]="POLYGON",V[V.POLYGON_TESTNET=80001]="POLYGON_TESTNET",V[V.FANTOM=250]="FANTOM",V[V.FANTOM_TESTNET=4002]="FANTOM_TESTNET",V[V.OPTIMISM=10]="OPTIMISM",V[V.OPTIMISM_TESTNET=69]="OPTIMISM_TESTNET",V[V.BOBA=288]="BOBA",V[V.BOBA_TESTNET=28]="BOBA_TESTNET",V[V.ESC=20]="ESC",V[V.HECO=128]="HECO",V[V.BSC=56]="BSC",V[V.BSC_TESTNET=97]="BSC_TESTNET",V[V.MATCH=9001]="MATCH",V[V.MATCH_TESTNET=9e3]="MATCH_TESTNET",V[V.CC=1331]="CC",V[V.SEPOLIA=11155111]="SEPOLIA",V[V.Klaytn=8217]="Klaytn",V))(Ei||{});var ut={id:9001,name:"MATCH",network:"MATCH",iconUrl:"",iconBackground:"#fff",nativeCurrency:{decimals:18,name:"MATCH",symbol:"MATCH"},rpcUrls:{default:{http:["https://rpc.matchscan.io"]},public:{http:["https://rpc.matchscan.io"]}},blockExplorers:{default:{name:"matchscan",url:"https://lisbon.matchscan.io"},etherscan:{name:"matchscan",url:"https://lisbon.matchscan.io"}},testnet:!1};var uG={9001:"0x3f76562685E9Cd18ba88C062bBC5999D78275734",56:"0x837656c3f5858692cCdce13BA66e09d2685073df",97:"0x6f4DceCEe81bfB85872BEaBC44C303b7c2f6c108"},pG={9001:"0x96397347Ea2beE29713Bc48749eB277D6A36A407",56:"0x837656c3f5858692cCdce13BA66e09d2685073df",97:"0x6f4DceCEe81bfB85872BEaBC44C303b7c2f6c108"},mG={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9",56:"0x55d398326f99059ff775485246999027b3197955",97:"0x44004827f2F72566E12884A38f63f72F2a5143ea"},dG={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9"},hG={9001:"0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9"},fG={9001:"0x2418F7F0486deBc9270E16126F36526925EDAAE4"},Rg={97:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab",9001:"0x84d225321122E69406B198e3A9B82Dc1BdF897e6"},px={9001:"0x945103b2fEa1EAc6cea4d25e9BBaA5284d128b29"},yG={97:"0xfe261946218873F6eaec714BF757493256817534",9001:"0xfB51603B7863267a19736B070Bf9Cb2e5Fa256AF"},bG={9001:"0xa2f97A458c62f321f9565f03289f30BF4E0377Ab"},xs={97:"0x85438A19C4E1B399d54Fa7F49888430A3C19707b",9001:"0xee3b4CaFc7fa18c0Ef0B9208Bab702f37A619BE0"},Ng={9001:"0xCd970FEA9838B28F67B7b7ab00Bf61Cdd33b26CE"},Og={97:"0xfe261946218873F6eaec714BF757493256817534",9001:"0xE3a61771Ce3CA772D446e687AFd52DC28eC9cCb8"},mx={9001:"0x45712193316F963A949539605b22AA4242BCc9E5"};var dx={gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}};ii();var hx={block:i_({format(a){return{transactions:a.transactions?.map(e=>{if(typeof e=="string")return e;let i=Rn(e);return i.typeHex==="0x7e"&&(i.isSystemTx=e.isSystemTx,i.mint=e.mint?ti(e.mint):void 0,i.sourceHash=e.sourceHash,i.type="deposit"),i}),stateRoot:a.stateRoot}}}),transaction:t_({format(a){let t={};return a.type==="0x7e"&&(t.isSystemTx=a.isSystemTx,t.mint=a.mint?ti(a.mint):void 0,t.sourceHash=a.sourceHash,t.type="deposit"),t}}),transactionReceipt:l0({format(a){return{l1GasPrice:a.l1GasPrice?ti(a.l1GasPrice):null,l1GasUsed:a.l1GasUsed?ti(a.l1GasUsed):null,l1Fee:a.l1Fee?ti(a.l1Fee):null,l1FeeScalar:a.l1FeeScalar?Number(a.l1FeeScalar):null}}})};$i();Pi();Xi();Me();function xE(a,t){return IE(a)?wE(a):v0(a,t)}var fx={transaction:xE};function wE(a){EE(a);let{sourceHash:t,data:e,from:i,gas:n,isSystemTx:r,mint:o,to:s,value:l}=a,c=[t,i,s??"0x",o?_e(o):"0x",l?_e(l):"0x",n?_e(n):"0x",r?"0x1":"0x",e??"0x"];return Ri(["0x7e",sn(c)])}function IE(a){return a.type==="deposit"||typeof a.sourceHash<"u"}function EE(a){let{from:t,to:e}=a;if(t&&!tt(t))throw new nt({address:t});if(e&&!tt(e))throw new nt({address:e})}var Hg={contracts:dx,formatters:hx,serializers:fx};var la=wi({id:56,name:"BNB Smart Chain",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{default:{name:"BscScan",url:"https://bscscan.com",apiUrl:"https://api.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}});var kt=wi({id:97,name:"Binance Smart Chain Testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]}},blockExplorers:{default:{name:"BscScan",url:"https://testnet.bscscan.com",apiUrl:"https://testnet.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0});var mo=wi({id:8217,name:"Klaytn",nativeCurrency:{decimals:18,name:"Klaytn",symbol:"KLAY"},rpcUrls:{default:{http:["https://public-en-cypress.klaytn.net"]}},blockExplorers:{default:{name:"KlaytnScope",url:"https://scope.klaytn.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:96002415}}});var Ui=wi({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var tp=1,ho=wi({...Hg,id:10,name:"OP Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.optimism.io"]}},blockExplorers:{default:{name:"Optimism Explorer",url:"https://optimistic.etherscan.io",apiUrl:"https://api-optimistic.etherscan.io/api"}},contracts:{...Hg.contracts,l2OutputOracle:{[tp]:{address:"0xdfe97868233d1aa22e815a266982f2cf17685a27"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263},portal:{[tp]:{address:"0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"}},l1StandardBridge:{[tp]:{address:"0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"}}},sourceId:tp});var ws=wi({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",blockCreated:5317080}},testnet:!0});var fo=class a{constructor(){this.create_contract=null;this.edit_account=null;this.account_contract=null;this.tokenId=0}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"}async getAccountVoFromServer(){let t=await k.requestPost("cybertron-sys-api/api/v1/account/find",{address:K.instance.walletAddress},!1,!1);if(t){let e=new ep;return Object.assign(e,t),console.log("info========"+JSON.stringify(e)),e}return t}async createAcccount(t,e,i,n){try{var r;let c;X.vType==2?(r=ut.id,c=px[r]):X.vType==1?(r=ut.id,c=Rg[r]):(r=kt.id,c=Rg[r]);let u=await K.instance.walletClient.getChainId();if(r!==u){var o=await K.instance.switchChain(r);if(!o){de.instance.hideLoading(),console.log("切换失败，请手动切换");return}}if(!c)return de.instance.hideLoading(),M.instance.notice(d.instance.getLanguage(1173,u)),!1;var s=await K.instance.walletClient.writeContract({account:K.instance.walletAddress,address:c,abi:ie.CREATE_ACCOUNT_ABI,functionName:"register",args:[t,n,e,i]});console.log("============"+s);let m=await K.instance.publicClient.waitForTransactionReceipt({hash:s});return console.log(`Tx with hash: ${s}`,m),m&&m.status=="success"?(console.log(`Tx successful with hash: ${s}`),s):(de.instance.hideLoading(),ge.TransactionErrorTip(),!1)}catch(c){de.instance.hideLoading();var l=c.shortMessage;if(l&&l.indexOf("does not match")!=-1&&(l=d.instance.getLanguage(1118)),console.log(l),M.instance.notice(l),c instanceof U){let u=c.walk(m=>m instanceof Bt);if(u instanceof Bt){let m=u.data?.errorName??"";console.log("============errorName: "+m)}}return null}}async updateProfile(t,e,i){var n=L.instance.playerDto.sex,r=L.instance.playerDto;let o=await k.requestPost("wxgame/player/changeInfo",{name:t,sex:n,icon:e,country:i});return o?(r.icon=o.icon,r.country=o.country,r.name=o.name,r.sex=o.sex,r):null}async getTokenId(){return this.tokenId?this.tokenId:(this.tokenId=await this.account_contract.methods.tokenOfOwnerByIndex(K.instance.walletAddress,0).call(),this.tokenId=parseInt(this.tokenId+""),this.tokenId)}};var At=class{constructor(){}};At.UPDATE_LOCAL_WALLET_LIST_EVENT="WalletEvent:UPDATE_LOCAL_WALLET_LIST_EVENT",At.TRANSFER_LOCAL_WALLET_EVENT="WalletEvent:TRANSFER_LOCAL_WALLET_EVENT";var Is=class{};var Vi=class{};var ke=class{};ke.ACTION_CREATE=1,ke.ACTION_JOIN=2,ke.ACTION_SIGNUP=3,ke.ACTION_WATCH=4,ke.STATE_WAIT=0,ke.STATE_SIGNUP=2,ke.STATE_GROUPED=3,ke.STATE_START=1,ke.ARENA_TYPE_PROFESSIONAL=1,ke.ARENA_TYPE_AIRDROP=2,ke.ARENA_TYPE_TRAINING=3;var Je=class a{constructor(){this.inMinWaiting=!1}openMinView(){this.enterRoomSpr||(this.enterRoomSpr=this.enterRoomPrefab.create()),this.enterRoomSpr.x=Laya.stage.width>>1,this.enterRoomSpr.y=0,this.enterRoomSpr.zOrder=1e3,Laya.stage.addChild(this.enterRoomSpr),this.inMinWaiting=!0}closeMinView(){this.enterRoomSpr&&this.enterRoomSpr.removeSelf(),this.inMinWaiting=!1}openMaxView(){this.closeMinView();var t=!0;H.intance.openModule(f.EnterRoomView,t)}openEnterView(){if(this.inMinWaiting==!0){this.closeMinView();var t=!0;H.intance.openModule(f.EnterRoomView,t)}else H.intance.openModule(f.EnterRoomView)}static get instance(){return a._instance==null&&(a._instance=new a),a._instance}init(){this.closeMinView(),this.initRoomData(),Laya.timer.loop(1500,this,this.onRefreshRoom)}onRefreshRoomImditely(){Laya.timer.clear(this,this.onRefreshRoom),this.onRefreshRoom(),Laya.timer.loop(1500,this,this.onRefreshRoom)}updateBattleCD(){F.instance.coolDownTime=Math.round(F.instance.roomDto.joinCd/1e3),y.intance.event(h.EVENT_UPDATE_MATCH_ROOM),F.instance.coolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):this.onGoMatch()}onSetCoolTime(){F.instance.coolDownTime>=0?F.instance.coolDownTime--:this.onGoMatch()}async onGoMatch(){Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.clear(this,this.onRefreshRoom);let t=await k.requestPost("wxgame/room/info",{roomId:F.instance.roomDto.roomId});var e=t.roomDto;e.joinCd==0?t.roomDto.enterGame==1?(Laya.timer.clearAll(this),vt.instance.initSocket(),this.closeMinView()):(this.close(),y.intance.event(h.EVENT_ENTER_MATCH_ROOM,!0),ge.commTipWithYes(pe.instance.get(25))):(F.instance.roomDto=e,this.updateBattleCD())}initRoomData(){var t=F.instance.roomDto.members.length,e=F.instance.currArenaItem.numberMax;if(F.instance.roomDto.state==ke.STATE_START&&t>=e){this.onGoMatch();return}this.updateBattleCD()}async onRefreshRoom(){let t=await k.requestPost("wxgame/room/info",{roomId:F.instance.roomDto.roomId});F.instance.roomDto=t.roomDto,this.initRoomData(),F.instance.setMatchRes()}close(){Laya.timer.clearAll(this),y.intance.event(h.EVENT_CLOSE_MODULE,f.EnterRoomView),this.closeMinView()}async onCreateAndJoinWithPwd(t,e,i){if(t!=ke.ACTION_SIGNUP){var n=R.intance.m_dicNodes.get(e.nodeId);if(n&&n.dT>800&&X.Debug<2){M.instance.notice(d.instance.getLanguage(1306));return}}let r=!1;var o=R.intance.m_dicArenaDic.get(e.arenaId),s=o.item[0];let l=L.instance.playerDto;if(o.type==3){if(!l.newFightHeroPk){ge.heroNotEnought(1353);return}}else if(l.fightHeroPk){let q=L.instance.m_heroData.heroVoDic.get(l.fightHeroPk);if(q){if(r=q.state==2,t!=ke.ACTION_SIGNUP&&q.state==1){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1176),N.YES,null);return}}else if(t!=ke.ACTION_SIGNUP){ge.heroNotEnought();return}}else if(t!=ke.ACTION_SIGNUP){ge.heroNotEnought();return}if(o.item&&o.item.length>1){var s=o.item[0],c=o.item[1];t==ke.ACTION_SIGNUP&&(c=c*2);var u=L.instance.m_packageData.getCountById(s);let Y=R.intance.getArenaTypesInSubByType(o.type).heroType;var m=O.instance.arenaType;if(r){var b=await k.requestPost("wxgame/lease/heroInfo",{heroPk:l.fightHeroPk});if(b.info.leaseType==1){if(b.info.remainTicketCount<=0&&m==1){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1175),N.YES,null);return}if(Y.indexOf(b.info.leaseType)<0){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(127),N.YES,null);return}if(s!==b.info.ticketId){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1178),N.YES,null);return}}else if(b.info.leaseType==2&&Y.indexOf(b.info.leaseType)<0){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1299),N.YES,null);return}}if(console.log("currNum: "+u,"needNum: "+c,"itemId: "+s),t!=ke.ACTION_SIGNUP&&u<c&&(!r||b.info.leaseType==2)){ge.titickNotEnought(s);return}}let _;if(t==ke.ACTION_CREATE)_=await k.requestPost("wxgame/room/create",{nodeId:e.nodeId,password:i,arenaId:e.arenaId,roomName:e.roomName,customName:e.customName});else if(t==ke.ACTION_JOIN)_=await k.requestPost("wxgame/room/join",{roomId:e.roomId,pass:i});else if(t==ke.ACTION_SIGNUP&&(_=await k.requestPost("wxgame/room/joinGroup",{roomId:e.roomId}),_)){M.instance.notice(d.instance.getLanguage(1373)),this.onRefreshRoomImditely();return}if(F.instance.roomDto=_.roomDto,_.roomDto){if(y.intance.event(h.EVENT_Close_CreateRoom),a.instance.openEnterView(),t==ke.ACTION_CREATE){var w=o.type,v="";w==1?v="Professional Arena":w==2?v="Airdrop Arena":w==3&&(v="Training Arena");var E=o.lv,B="";E==1?B="Novice":E==2?B="Elite":E==3&&(B="Master");var G=o.coinType,j=R.intance.m_dicItems.get(G),Z=d.instance.getEnglishLanguage(j.name);gtag("event","new_arena",{event_category:v,arena_type:v,coin_type:Z,arena_lv:B})}}else M.instance.notice(d.instance.getLanguage(135))}};var ka=class ka{constructor(t,e){this._lineIndex=0;this._isShow=!1;this._alpha=.6;this.isInit=!1;this._isRelease=!0;this._count=0;this.maxCount=1e3;this.prevX=0;this.prevY=0;this._stage=t,this._isRelease=e,this._actionLineList=[],this._time=new Date().getTime();let i,n,r,o,s=function(u){i=u.stageX,n=u.stageY,r=i,o=n},l=function(u){r=u.stageX,o=u.stageY},c=function(u){let m=Laya.stage.width-(r-i)<160,b=Laya.stage.height-(o-n)<160;m&&b&&fi.debugger&&(Laya.Browser.window.console.log=fi.addConsoleLog,fi.debugger.showOrHide())};Laya.stage.on(Laya.Event.MOUSE_DOWN,this,s),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,l),Laya.stage.on(Laya.Event.MOUSE_UP,this,c)}initDebugView(){if(!this.isInit){this.totalW=Laya.stage.width,this.totalH=Laya.stage.height/2,this.bigContainer=new Laya.Sprite,this.bigContainer.zOrder=2e3,this.bigContainer.name="bigContainerDebug",this.bgContainer=new Laya.Sprite,this._bgSp=new Laya.Sprite,this._bgSp.alpha=this._alpha,this._bgSp.graphics.drawRect(0,0,this.totalW,this.totalH,"#000000"),this._bgSp.mouseEnabled=!1,this._debugInfoTf=new Laya.Text,this._debugInfoTf.color="#ffffff",this._debugInfoTf.width=this.totalW-10,this._debugInfoTf.height=this.totalH-10,this._debugInfoTf.overflow="scroll",this._debugInfoTf.wordWrap=!0;let t="[LOADINFO - DEBUGGER]";this.appendText("加载调试信息 "+t,0,!1),this._closeTf=new Laya.Label,this._closeTf.color="#ff0000",this._closeTf.valign="middle",this._closeTf.width=55,this._closeTf.height=55,this._closeTf.borderColor=ka.DEFAULT_COLOR,this._closeTf.text="关闭",this._autoScrollTf=new Laya.Label,this._autoScrollTf.color="#ff0000",this._autoScrollTf.valign="middle",this._autoScrollTf.width=55,this._autoScrollTf.height=55,this._autoScrollTf.borderColor=ka.DEFAULT_COLOR,this._autoScrollTf.text="自动卷屏",this._bgAlpha0=new Laya.Label,this._bgAlpha0.color="#ff0000",this._bgAlpha0.valign="middle",this._bgAlpha0.width=55,this._bgAlpha0.height=55,this._bgAlpha0.borderColor=ka.DEFAULT_COLOR,this._bgAlpha0.text="背景-",this._bgAlpha1=new Laya.Label,this._bgAlpha1.color="#ff0000",this._bgAlpha1.valign="middle",this._bgAlpha1.width=55,this._bgAlpha1.height=55,this._bgAlpha1.borderColor=ka.DEFAULT_COLOR,this._bgAlpha1.text="背景+",this._clearTf=new Laya.Label,this._clearTf.color="#ff0000",this._clearTf.valign="middle",this._clearTf.width=55,this._clearTf.height=55,this._clearTf.borderColor=ka.DEFAULT_COLOR,this._clearTf.text="清理",this._testTf=new Laya.Label,this._testTf.color="#ff0000",this._testTf.width=55,this._testTf.height=55,this._testTf.borderColor=ka.DEFAULT_COLOR,this._testTf.text="点穿",this.bgContainer.x=5,this.bgContainer.y=5,this._debugInfoTf.x=5,this._debugInfoTf.y=5,this.bgContainer.addChild(this._bgSp),this.bgContainer.addChild(this._debugInfoTf),this._closeTf.x=this.totalW-60,this._closeTf.y=5,this.bgContainer.addChild(this._closeTf),this._autoScrollTf.x=this.totalW-60,this._autoScrollTf.y=105,this.bgContainer.addChild(this._autoScrollTf),this._bgAlpha0.x=this.totalW-60,this._bgAlpha0.y=205,this.bgContainer.addChild(this._bgAlpha0),this._bgAlpha1.x=this.totalW-60,this._bgAlpha1.y=305,this.bgContainer.addChild(this._bgAlpha1),this._clearTf.x=this.totalW-60,this._clearTf.y=405,this.bgContainer.addChild(this._clearTf),this._testTf.x=this.totalW-60,this._testTf.y=505,this.bigContainer.addChild(this.bgContainer),this.bigContainer.addChild(this._testTf),this._autoScroll=!0,this._hide=!0,this._debugInfoTf.on(Laya.Event.MOUSE_DOWN,this,this.startScrollText),this._closeTf.on(Laya.Event.CLICK,this,this.onCloseTfClick),this._autoScrollTf.on(Laya.Event.CLICK,this,this.onAutoScrollTfClick),this._bgAlpha0.on(Laya.Event.CLICK,this,this.onBgAlpha0),this._bgAlpha1.on(Laya.Event.CLICK,this,this.onBgAlpha1),this._clearTf.on(Laya.Event.CLICK,this,this.onClearTfClick),this._testTf.on(Laya.Event.CLICK,this,this.onTestTfClick),this.isInit=!0}}show(){this.initDebugView(),this._stage.addChild(this.bigContainer),this._isShow=!0,this.updateView()}hide(){this.initDebugView(),this.bigContainer.parent&&this.bigContainer.parent.removeChild(this.bigContainer),this._isShow=!1,this.updateView()}showOrHide(){this._isShow=!this._isShow,this._isShow?this.show():this.hide()}appendText(t,e=0,i=!0){if(i){let n=new Date().getTime()-this._time;t+="  ["+(n/1e3).toFixed(3)+"]"}this._actionLineList.push([t+`
`,e]),this._lineIndex>=200&&(this._actionLineList.splice(0,20),this._lineIndex-=20),this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf&&(this._debugInfoTf.text="")),this._isShow&&(this._currentLine=this._actionLineList[this._lineIndex++],this._debugInfoTf&&(this._debugInfoTf.text+=this._currentLine[0]),this._autoScroll&&this._debugInfoTf&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY))}updateView(){if(this._isShow){this._count=0,this._debugInfoTf.text="";let t=this._actionLineList.length;for(this._lineIndex=0;this._lineIndex<t;++this._lineIndex)this._currentLine=this._actionLineList[this._lineIndex],this._debugInfoTf.text+=this._currentLine[0],this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf.text="");this._autoScroll&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY)}else this._debugInfoTf.text=""}onCloseTfClick(t){this.hide()}onAutoScrollTfClick(t){this._autoScroll=!this._autoScroll,this._autoScroll?this._autoScrollTf.text="自动卷屏":this._autoScrollTf.text="手动卷屏"}onBgAlpha0(t){this._alpha-=.1,this._alpha<=0&&(this._alpha=0),this._bgSp.alpha=this._alpha}onBgAlpha1(t){this._alpha+=.1,this._alpha>=1&&(this._alpha=1),this._bgSp.alpha=this._alpha}onClearTfClick(t){this._debugInfoTf.text="",this._actionLineList.length=0,this._lineIndex=0}onTestTfClick(t){this.bgContainer.mouseEnabled=!this.bgContainer.mouseEnabled}set testFun(t){this._testFun=t}get bgSp(){return this._bgSp}startScrollText(t){this.prevX=this._debugInfoTf.mouseX,this.prevY=this._debugInfoTf.mouseY,Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.finishScrollText)}finishScrollText(t){Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.finishScrollText)}scrollText(t){let e=this._debugInfoTf.mouseX,i=this._debugInfoTf.mouseY;this._debugInfoTf.scrollX+=this.prevX-e,this._debugInfoTf.scrollY+=this.prevY-i,this.prevX=e,this.prevY=i}};ka.DEFAULT_COLOR="#ffffff";var ip=ka;var fi=class a{static Initialize(t,e){a.isRelease=e,this.debugger==null&&(this.debugger=new ip(t,e))}static log(t,e=0,i=0){var n=ge.GetLogTime+" "+t;e&&a.addLog(n,e,i)}static addLog(t,e=0,i=0){this.debugger&&this.debugger.appendText(t,i),console.log(t)}static addConsoleLog(...t){a.debugger&&a.debugger.appendText(t,0)}};var Es=class Es{constructor(){this.module=0;this.errorCode=0;this.errorMessage=""}protocolId(){return Es.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writeString(e.errorMessage),t.writeInt(e.module))}static read(t){if(!t.readBoolean())return null;let e=new Es,i=t.readInt();e.errorCode=i;let n=t.readString();e.errorMessage=n;let r=t.readInt();return e.module=r,e}};Es.PROTOCOL_ID=101;var Ug=Es,Ts=Ug;var Ss=class Ss{protocolId(){return Ss.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new Ss:null}};Ss.PROTOCOL_ID=103;var Vg=Ss,ap=Vg;var Cs=class Cs{constructor(){this.time=0}protocolId(){return Cs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.time)}static read(t){if(!t.readBoolean())return null;let e=new Cs,i=t.readLong();return e.time=i,e}};Cs.PROTOCOL_ID=104;var Fg=Cs,yx=Fg;var ks=class ks{constructor(){this.pid=0;this.roomId=0;this.loginToken=""}protocolId(){return ks.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeString(e.loginToken),t.writeLong(e.pid),t.writeLong(e.roomId))}static read(t){if(!t.readBoolean())return null;let e=new ks,i=t.readString();e.loginToken=i;let n=t.readLong();e.pid=n;let r=t.readLong();return e.roomId=r,e}};ks.PROTOCOL_ID=1001;var zg=ks,np=zg;var As=class As{constructor(){this.errorCode=0;this.pid=0;this.matchDto=null;this.socketToken=""}protocolId(){return As.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writePacket(e.matchDto,25010),t.writeLong(e.pid),t.writeString(e.socketToken))}static read(t){if(!t.readBoolean())return null;let e=new As,i=t.readInt();e.errorCode=i;let n=t.readPacket(25010);e.matchDto=n;let r=t.readLong();e.pid=r;let o=t.readString();return e.socketToken=o,e}};As.PROTOCOL_ID=1002;var Gg=As,rp=Gg;var Ds=class Ds{protocolId(){return Ds.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new Ds:null}};Ds.PROTOCOL_ID=1004;var jg=Ds,op=jg;var Ms=class Ms{constructor(){this.sequence=0;this.param=""}protocolId(){return Ms.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeString(e.param))}static read(t){if(!t.readBoolean())return null;let e=new Ms;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let n=t.readString();return e.param=n,e}};Ms.PROTOCOL_ID=1005;var Kg=Ms,bx=Kg;var Bs=class Bs{constructor(){this.sequence=0;this.code=0}protocolId(){return Bs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.sequence),t.writeInt(e.code))}static read(t){if(!t.readBoolean())return null;let e=new Bs;if(!t.isReadable())return e;let i=t.readInt();if(e.sequence=i,!t.isReadable())return e;let n=t.readInt();return e.code=n,e}};Bs.PROTOCOL_ID=1006;var Wg=Bs,gx=Wg;var Ps=class Ps{constructor(){this.token=""}protocolId(){return Ps.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeString(e.token)}static read(t){if(!t.readBoolean())return null;let e=new Ps,i=t.readString();return e.token=i,e}};Ps.PROTOCOL_ID=1007;var qg=Ps,sp=qg;var Rs=class Rs{constructor(){this.errorCode=0}protocolId(){return Rs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new Rs,i=t.readInt();return e.errorCode=i,e}};Rs.PROTOCOL_ID=1008;var Yg=Rs,lp=Yg;var Ns=class Ns{protocolId(){return Ns.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new Ns:null}};Ns.PROTOCOL_ID=1010;var $g=Ns,vx=$g;var Os=class Os{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return Os.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.type),t.writeInt(e.id),t.writeLong(e.count))}static read(t){if(!t.readBoolean())return null;let e=new Os;if(!t.isReadable())return e;let i=t.readInt();if(e.type=i,!t.isReadable())return e;let n=t.readInt();if(e.id=n,!t.isReadable())return e;let r=t.readLong();return e.count=r,e}};Os.PROTOCOL_ID=1012;var Xg=Os,Lx=Xg;var Hs=class Hs{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return Hs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeInt(e.dire),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new Hs,i=t.readInt();e.area=i;let n=t.readInt();e.dire=n;let r=t.readInt();e.speed=r;let o=t.readLong();e.time=o;let s=t.readInt();e.x=s;let l=t.readInt();return e.y=l,e}};Hs.PROTOCOL_ID=1013;var Qg=Hs,cp=Qg;var Us=class Us{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.errorCode=0;this.time=0}protocolId(){return Us.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.dire),t.writeInt(e.errorCode),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new Us,i=t.readInt();e.dire=i;let n=t.readInt();e.errorCode=n;let r=t.readInt();e.speed=r;let o=t.readLong();e.time=o;let s=t.readInt();e.x=s;let l=t.readInt();return e.y=l,e}};Us.PROTOCOL_ID=1014;var Zg=Us,_x=Zg;var Vs=class Vs{constructor(){this.type=0;this.member=null}protocolId(){return Vs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writePacket(e.member,25011),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Vs,i=t.readPacket(25011);e.member=i;let n=t.readInt();return e.type=n,e}};Vs.PROTOCOL_ID=1016;var Jg=Vs,up=Jg;var Fs=class Fs{constructor(){this.pid=0;this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return Fs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeInt(e.dire),t.writeLong(e.pid),t.writeInt(e.speed),t.writeLong(e.time),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new Fs,i=t.readInt();e.area=i;let n=t.readInt();e.dire=n;let r=t.readLong();e.pid=r;let o=t.readInt();e.speed=o;let s=t.readLong();e.time=s;let l=t.readInt();e.x=l;let c=t.readInt();return e.y=c,e}};Fs.PROTOCOL_ID=1018;var ev=Fs,pp=ev;var zs=class zs{constructor(){this.roomId=0;this.rankList=[];this.reward=[];this.arenaType=0;this.groupData=[]}protocolId(){return zs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.arenaType),e.groupData===null?t.writeInt(0):(t.writeInt(e.groupData.length),e.groupData.forEach(i=>{t.writePacketList(i,25013)})),t.writePacketList(e.rankList,25012),t.writePacketList(e.reward,25008),t.writeLong(e.roomId))}static read(t){if(!t.readBoolean())return null;let e=new zs,i=t.readInt();e.arenaType=i;let n=new Array,r=t.readInt();if(r>0)for(let c=0;c<r;c++){let u=t.readPacketList(25013);n.push(u)}e.groupData=n;let o=t.readPacketList(25012);e.rankList=o;let s=t.readPacketList(25008);e.reward=s;let l=t.readLong();return e.roomId=l,e}};zs.PROTOCOL_ID=1020;var tv=zs,mp=tv;var Gs=class Gs{constructor(){this.targetId=0;this.attackType=0;this.skillId=0}protocolId(){return Gs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.attackType),t.writeInt(e.skillId),t.writeLong(e.targetId))}static read(t){if(!t.readBoolean())return null;let e=new Gs,i=t.readInt();e.attackType=i;let n=t.readInt();e.skillId=n;let r=t.readLong();return e.targetId=r,e}};Gs.PROTOCOL_ID=1021;var iv=Gs,dp=iv;var js=class js{constructor(){this.errorCode=0}protocolId(){return js.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new js,i=t.readInt();return e.errorCode=i,e}};js.PROTOCOL_ID=1022;var av=js,xx=av;var Ks=class Ks{constructor(){this.attPid=0;this.defPid=0;this.attackValue=[];this.allAtkValue=0;this.bj=!1;this.sb=!1;this.skill=0;this.defHp=0;this.attScore=0;this.defScore=0}protocolId(){return Ks.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.allAtkValue),t.writeLong(e.attPid),t.writeLong(e.attScore),t.writeLongList(e.attackValue),t.writeBoolean(e.bj),t.writeLong(e.defHp),t.writeLong(e.defPid),t.writeLong(e.defScore),t.writeBoolean(e.sb),t.writeInt(e.skill))}static read(t){if(!t.readBoolean())return null;let e=new Ks,i=t.readLong();e.allAtkValue=i;let n=t.readLong();e.attPid=n;let r=t.readLong();e.attScore=r;let o=t.readLongList();e.attackValue=o;let s=t.readBoolean();e.bj=s;let l=t.readLong();e.defHp=l;let c=t.readLong();e.defPid=c;let u=t.readLong();e.defScore=u;let m=t.readBoolean();e.sb=m;let b=t.readInt();return e.skill=b,e}};Ks.PROTOCOL_ID=1024;var nv=Ks,hp=nv;var Ws=class Ws{protocolId(){return Ws.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null}static read(t){return t.readBoolean()?new Ws:null}};Ws.PROTOCOL_ID=1025;var rv=Ws,fp=rv;var qs=class qs{constructor(){this.errorCode=0;this.matchDto=null}protocolId(){return qs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writePacket(e.matchDto,25010))}static read(t){if(!t.readBoolean())return null;let e=new qs,i=t.readInt();e.errorCode=i;let n=t.readPacket(25010);return e.matchDto=n,e}};qs.PROTOCOL_ID=1026;var ov=qs,yp=ov;var Ys=class Ys{constructor(){this.pid=0}protocolId(){return Ys.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.pid)}static read(t){if(!t.readBoolean())return null;let e=new Ys,i=t.readLong();return e.pid=i,e}};Ys.PROTOCOL_ID=1028;var sv=Ys,bp=sv;var $s=class $s{constructor(){this.pid=0;this.kill=0}protocolId(){return $s.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.kill),t.writeLong(e.pid))}static read(t){if(!t.readBoolean())return null;let e=new $s,i=t.readInt();e.kill=i;let n=t.readLong();return e.pid=n,e}};$s.PROTOCOL_ID=1030;var lv=$s,gp=lv;var Xs=class Xs{constructor(){this.targetId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return Xs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeStringStringMap(e.param),t.writeInt(e.skillId),t.writeLong(e.targetId),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Xs,i=t.readStringStringMap();e.param=i;let n=t.readInt();e.skillId=n;let r=t.readLong();e.targetId=r;let o=t.readInt();return e.type=o,e}};Xs.PROTOCOL_ID=1031;var cv=Xs,vp=cv;var Qs=class Qs{constructor(){this.errorCode=0}protocolId(){return Qs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeInt(e.errorCode)}static read(t){if(!t.readBoolean())return null;let e=new Qs,i=t.readInt();return e.errorCode=i,e}};Qs.PROTOCOL_ID=1032;var uv=Qs,wx=uv;var Zs=class Zs{constructor(){this.attId=0;this.defId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return Zs.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.attId),t.writeLong(e.defId),t.writeStringStringMap(e.param),t.writeInt(e.skillId),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new Zs,i=t.readLong();e.attId=i;let n=t.readLong();e.defId=n;let r=t.readStringStringMap();e.param=r;let o=t.readInt();e.skillId=o;let s=t.readInt();return e.type=s,e}};Zs.PROTOCOL_ID=1034;var pv=Zs,Lp=pv;var Js=class Js{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.skillId=0;this.sourceId=0;this.time=0}protocolId(){return Js.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.skillId),t.writeLong(e.sourceId),t.writeLong(e.targetId),t.writeInt(e.targetX),t.writeInt(e.targetY),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new Js,i=t.readInt();e.skillId=i;let n=t.readLong();e.sourceId=n;let r=t.readLong();e.targetId=r;let o=t.readInt();e.targetX=o;let s=t.readInt();e.targetY=s;let l=t.readLong();return e.time=l,e}};Js.PROTOCOL_ID=1035;var mv=Js,_p=mv;var el=class el{constructor(){this.errorCode=0;this.time=0}protocolId(){return el.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.errorCode),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new el,i=t.readInt();e.errorCode=i;let n=t.readLong();return e.time=n,e}};el.PROTOCOL_ID=1036;var dv=el,Ix=dv;var tl=class tl{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.sourceId=0;this.skillId=0;this.time=0}protocolId(){return tl.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.skillId),t.writeLong(e.sourceId),t.writeLong(e.targetId),t.writeInt(e.targetX),t.writeInt(e.targetY),t.writeLong(e.time))}static read(t){if(!t.readBoolean())return null;let e=new tl,i=t.readInt();e.skillId=i;let n=t.readLong();e.sourceId=n;let r=t.readLong();e.targetId=r;let o=t.readInt();e.targetX=o;let s=t.readInt();e.targetY=s;let l=t.readLong();return e.time=l,e}};tl.PROTOCOL_ID=1038;var hv=tl,xp=hv;var il=class il{constructor(){this.time=0}protocolId(){return il.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writeLong(e.time)}static read(t){if(!t.readBoolean())return null;let e=new il,i=t.readLong();return e.time=i,e}};il.PROTOCOL_ID=1040;var fv=il,wp=fv;var al=class al{constructor(){this.moveList=[]}protocolId(){return al.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||t.writePacketList(e.moveList,1018)}static read(t){if(!t.readBoolean())return null;let e=new al,i=t.readPacketList(1018);return e.moveList=i,e}};al.PROTOCOL_ID=1042;var yv=al,Ip=yv;var nl=class nl{constructor(){this.id=0;this.value=!1}protocolId(){return nl.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.id),t.writeBoolean(e.value))}static read(t){if(!t.readBoolean())return null;let e=new nl,i=t.readInt();e.id=i;let n=t.readBoolean();return e.value=n,e}};nl.PROTOCOL_ID=25007;var bv=nl,Ex=bv;var rl=class rl{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return rl.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeDouble(e.count),t.writeLong(e.id),t.writeInt(e.type))}static read(t){if(!t.readBoolean())return null;let e=new rl,i=t.readDouble();e.count=i;let n=t.readLong();e.id=n;let r=t.readInt();return e.type=r,e}};rl.PROTOCOL_ID=25008;var gv=rl,Tx=gv;var ol=class ol{constructor(){this.id=0;this.map=0;this.maxX=0;this.maxY=0;this.players=[]}protocolId(){return ol.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.id),t.writeInt(e.map),t.writeInt(e.maxX),t.writeInt(e.maxY),t.writePacketList(e.players,25011))}static read(t){if(!t.readBoolean())return null;let e=new ol,i=t.readLong();e.id=i;let n=t.readInt();e.map=n;let r=t.readInt();e.maxX=r;let o=t.readInt();e.maxY=o;let s=t.readPacketList(25011);return e.players=s,e}};ol.PROTOCOL_ID=25009;var vv=ol,Sx=vv;var sl=class sl{constructor(){this.arenaId=0;this.coinType=0;this.roomId=0;this.members=[];this.remainderCd=0;this.startTime=0;this.nowTime=0;this.arenaType=0}protocolId(){return sl.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.arenaId),t.writeInt(e.arenaType),t.writeInt(e.coinType),t.writePacketList(e.members,25011),t.writeLong(e.nowTime),t.writeLong(e.remainderCd),t.writeLong(e.roomId),t.writeLong(e.startTime))}static read(t){if(!t.readBoolean())return null;let e=new sl,i=t.readInt();e.arenaId=i;let n=t.readInt();e.arenaType=n;let r=t.readInt();e.coinType=r;let o=t.readPacketList(25011);e.members=o;let s=t.readLong();e.nowTime=s;let l=t.readLong();e.remainderCd=l;let c=t.readLong();e.roomId=c;let u=t.readLong();return e.startTime=u,e}};sl.PROTOCOL_ID=25010;var Lv=sl,Cx=Lv;var ll=class ll{constructor(){this.id=0;this.x=0;this.y=0;this.dire=0;this.speed=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.kill=0;this.hp=0;this.maxHp=0;this.atk=0;this.score=0;this.skillCd=new Map;this.commonCd=0;this.area=0;this.country=0;this.nodeId=0;this.lease=0}protocolId(){return ll.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeInt(e.area),t.writeLong(e.atk),t.writeLong(e.commonCd),t.writeInt(e.country),t.writeInt(e.dire),t.writeInt(e.heroColor),t.writeLong(e.heroId),t.writeLong(e.hp),t.writeString(e.icon),t.writeLong(e.id),t.writeInt(e.kill),t.writeInt(e.leader),t.writeInt(e.lease),t.writeLong(e.maxHp),t.writeString(e.name),t.writeInt(e.nodeId),t.writeLong(e.score),t.writeIntLongMap(e.skillCd),t.writeInt(e.speed),t.writeInt(e.x),t.writeInt(e.y))}static read(t){if(!t.readBoolean())return null;let e=new ll,i=t.readInt();e.area=i;let n=t.readLong();e.atk=n;let r=t.readLong();e.commonCd=r;let o=t.readInt();e.country=o;let s=t.readInt();e.dire=s;let l=t.readInt();e.heroColor=l;let c=t.readLong();e.heroId=c;let u=t.readLong();e.hp=u;let m=t.readString();e.icon=m;let b=t.readLong();e.id=b;let _=t.readInt();e.kill=_;let w=t.readInt();e.leader=w;let v=t.readInt();e.lease=v;let E=t.readLong();e.maxHp=E;let B=t.readString();e.name=B;let G=t.readInt();e.nodeId=G;let j=t.readLong();e.score=j;let Z=t.readIntLongMap();e.skillCd=Z;let q=t.readInt();e.speed=q;let Y=t.readInt();e.x=Y;let V=t.readInt();return e.y=V,e}};ll.PROTOCOL_ID=25011;var _v=ll,kx=_v;var cl=class cl{constructor(){this.id=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.rankNum=0;this.kill=0;this.atk=0;this.score=0;this.die=!1;this.country=0;this.heroPk="";this.nodeId=0;this.lease=0}protocolId(){return cl.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.atk),t.writeInt(e.country),t.writeBoolean(e.die),t.writeInt(e.heroColor),t.writeLong(e.heroId),t.writeString(e.heroPk),t.writeString(e.icon),t.writeLong(e.id),t.writeInt(e.kill),t.writeInt(e.leader),t.writeInt(e.lease),t.writeString(e.name),t.writeInt(e.nodeId),t.writeInt(e.rankNum),t.writeLong(e.score))}static read(t){if(!t.readBoolean())return null;let e=new cl,i=t.readLong();e.atk=i;let n=t.readInt();e.country=n;let r=t.readBoolean();e.die=r;let o=t.readInt();e.heroColor=o;let s=t.readLong();e.heroId=s;let l=t.readString();e.heroPk=l;let c=t.readString();e.icon=c;let u=t.readLong();e.id=u;let m=t.readInt();e.kill=m;let b=t.readInt();e.leader=b;let _=t.readInt();e.lease=_;let w=t.readString();e.name=w;let v=t.readInt();e.nodeId=v;let E=t.readInt();e.rankNum=E;let B=t.readLong();return e.score=B,e}};cl.PROTOCOL_ID=25012;var xv=cl,Ax=xv;var ul=class ul{constructor(){this.pid=0;this.rank=0;this.reward=[]}protocolId(){return ul.PROTOCOL_ID}static write(t,e){t.writePacketFlag(e)||e==null||(t.writeLong(e.pid),t.writeInt(e.rank),t.writePacketList(e.reward,25008))}static read(t){if(!t.readBoolean())return null;let e=new ul,i=t.readLong();e.pid=i;let n=t.readInt();e.rank=n;let r=t.readPacketList(25008);return e.reward=r,e}};ul.PROTOCOL_ID=25013;var wv=ul,Dx=wv;var Ne=new Map;Ne.set(101,Ts);Ne.set(103,ap);Ne.set(104,yx);Ne.set(1001,np);Ne.set(1002,rp);Ne.set(1004,op);Ne.set(1005,bx);Ne.set(1006,gx);Ne.set(1007,sp);Ne.set(1008,lp);Ne.set(1010,vx);Ne.set(1012,Lx);Ne.set(1013,cp);Ne.set(1014,_x);Ne.set(1016,up);Ne.set(1018,pp);Ne.set(1020,mp);Ne.set(1021,dp);Ne.set(1022,xx);Ne.set(1024,hp);Ne.set(1025,fp);Ne.set(1026,yp);Ne.set(1028,bp);Ne.set(1030,gp);Ne.set(1031,vp);Ne.set(1032,wx);Ne.set(1034,Lp);Ne.set(1035,_p);Ne.set(1036,Ix);Ne.set(1038,xp);Ne.set(1040,wp);Ne.set(1042,Ip);Ne.set(25007,Ex);Ne.set(25008,Tx);Ne.set(25009,Sx);Ne.set(25010,Cx);Ne.set(25011,kx);Ne.set(25012,Ax);Ne.set(25013,Dx);var Iv=class a{static getProtocol(t){let e=Ne.get(t);if(e===null)throw"[protocolId:"+t+"]协议不存在";return e}static write(t,e){let i=e.protocolId();t.writeInt(i),a.getProtocol(i).write(t,e)}static read(t){let e=t.readInt();return a.getProtocol(e).read(t)}},Xt=Iv;var Mx={},Bx={},Ti;try{Ti=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}var z=class z{constructor(t,e,i=!1){this.low=t|0,this.high=e|0,this.unsigned=i}toInt(){return this.unsigned?this.low>>>0:this.low}toNumber(){return this.unsigned?(this.high>>>0)*yo+(this.low>>>0):this.high*yo+(this.low>>>0)}toString(t=10){if(t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.equals(z.MIN_VALUE)){let r=z.fromNumber(t),o=this.divide(r),s=o.multiply(r).subtract(this);return o.toString(t)+s.toInt().toString(t)}else return"-"+this.negate().toString(t);let e=z.fromNumber(Math.pow(t,6),this.unsigned),i="",n=this;for(;;){let r=n.divide(e),s=(n.subtract(r.multiply(e)).toInt()>>>0).toString(t);if(n=r,n.isZero())return s+i;for(;s.length<6;)s="0"+s;i=""+s+i}}getHighBits(){return this.high}getHighBitsUnsigned(){return this.high>>>0}getLowBits(){return this.low}getLowBitsUnsigned(){return this.low>>>0}getNumBitsAbs(){if(this.isNegative())return this.equals(z.MIN_VALUE)?64:this.negate().getNumBitsAbs();let t=this.high!=0?this.high:this.low,e;for(e=31;e>0&&!(t&1<<e);e--);return this.high!=0?e+33:e+1}isZero(){return this.high===0&&this.low===0}isNegative(){return!this.unsigned&&this.high<0}isPositive(){return this.unsigned||this.high>=0}isOdd(){return(this.low&1)===1}isEven(){return(this.low&1)===0}equals(t){return t instanceof z||(t=z.fromValue(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low}notEquals(t){return!this.equals(t)}lessThan(t){return this.compare(t)<0}lessThanOrEqual(t){return this.compare(t)<=0}greaterThan(t){return this.compare(t)>0}greaterThanOrEqual(t){return this.compare(t)>=0}compare(t){if(t instanceof z||(t=z.fromValue(t)),this.equals(t))return 0;let e=this.isNegative(),i=t.isNegative();return e&&!i?-1:!e&&i?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.subtract(t).isNegative()?-1:1}negate(){return!this.unsigned&&this.equals(z.MIN_VALUE)?z.MIN_VALUE:this.not().add(z.ONE)}add(t){t instanceof z||(t=z.fromValue(t));let e=this.high>>>16,i=this.high&65535,n=this.low>>>16,r=this.low&65535,o=t.high>>>16,s=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,m=0,b=0,_=0;return _+=r+c,b+=_>>>16,_&=65535,b+=n+l,m+=b>>>16,b&=65535,m+=i+s,u+=m>>>16,m&=65535,u+=e+o,u&=65535,z.fromBits(b<<16|_,u<<16|m,this.unsigned)}subtract(t){return t instanceof z||(t=z.fromValue(t)),this.add(t.negate())}multiply(t){if(this.isZero())return z.ZERO;if(t instanceof z||(t=z.fromValue(t)),Ti){let w=Ti.mul(this.low,this.high,t.low,t.high);return z.fromBits(w,Ti.get_high(),this.unsigned)}if(t.isZero())return z.ZERO;if(this.equals(z.MIN_VALUE))return t.isOdd()?z.MIN_VALUE:z.ZERO;if(t.equals(z.MIN_VALUE))return this.isOdd()?z.MIN_VALUE:z.ZERO;if(this.isNegative())return t.isNegative()?this.negate().multiply(t.negate()):this.negate().multiply(t).negate();if(t.isNegative())return this.multiply(t.negate()).negate();if(this.lessThan(Nx)&&t.lessThan(Nx))return z.fromNumber(this.toNumber()*t.toNumber(),this.unsigned);let e=this.high>>>16,i=this.high&65535,n=this.low>>>16,r=this.low&65535,o=t.high>>>16,s=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,m=0,b=0,_=0;return _+=r*c,b+=_>>>16,_&=65535,b+=n*c,m+=b>>>16,b&=65535,b+=r*l,m+=b>>>16,b&=65535,m+=i*c,u+=m>>>16,m&=65535,m+=n*l,u+=m>>>16,m&=65535,m+=r*s,u+=m>>>16,m&=65535,u+=e*c+i*l+n*s+r*o,u&=65535,z.fromBits(b<<16|_,u<<16|m,this.unsigned)}divide(t){if(t instanceof z||(t=z.fromValue(t)),t.isZero())throw Error("division by zero");if(Ti){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;let r=(this.unsigned?Ti.div_u:Ti.div_s)(this.low,this.high,t.low,t.high);return z.fromBits(r,Ti.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?z.UZERO:z.ZERO;let e,i,n;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.greaterThan(this))return z.UZERO;if(t.greaterThan(this.shiftRightUnsigned(1)))return z.UONE;n=z.UZERO}else{if(this.equals(z.MIN_VALUE))return t.equals(z.ONE)||t.equals(z.NEG_ONE)?z.MIN_VALUE:t.equals(z.MIN_VALUE)?z.ONE:(e=this.shiftRight(1).divide(t).shiftLeft(1),e.equals(z.ZERO)?t.isNegative()?z.ONE:z.NEG_ONE:(i=this.subtract(t.multiply(e)),n=e.add(i.divide(t)),n));if(t.equals(z.MIN_VALUE))return this.unsigned?z.UZERO:z.ZERO;if(this.isNegative())return t.isNegative()?this.negate().divide(t.negate()):this.negate().divide(t).negate();if(t.isNegative())return this.divide(t.negate()).negate();n=z.ZERO}for(i=this;i.greaterThanOrEqual(t);){e=Math.max(1,Math.floor(i.toNumber()/t.toNumber()));let r=Math.ceil(Math.log(e)/Math.LN2),o=r<=48?1:Math.pow(2,r-48),s=z.fromNumber(e),l=s.multiply(t);for(;l.isNegative()||l.greaterThan(i);)e-=o,s=z.fromNumber(e,this.unsigned),l=s.multiply(t);s.isZero()&&(s=z.ONE),n=n.add(s),i=i.subtract(l)}return n}modulo(t){if(t instanceof z||(t=z.fromValue(t)),Ti){let e=(this.unsigned?Ti.rem_u:Ti.rem_s)(this.low,this.high,t.low,t.high);return z.fromBits(e,Ti.get_high(),this.unsigned)}return this.subtract(this.divide(t).multiply(t))}not(){return z.fromBits(~this.low,~this.high,this.unsigned)}and(t){return t instanceof z||(t=z.fromValue(t)),z.fromBits(this.low&t.low,this.high&t.high,this.unsigned)}or(t){return t instanceof z||(t=z.fromValue(t)),z.fromBits(this.low|t.low,this.high|t.high,this.unsigned)}xor(t){return t instanceof z||(t=z.fromValue(t)),z.fromBits(this.low^t.low,this.high^t.high,this.unsigned)}shiftLeft(t){if(t instanceof z&&(t=t.toInt()),(t&=63)===0)return this;if(t<32){let e=this.low<<t;return z.fromBits(e,this.high<<t|this.low>>>32-t,this.unsigned)}else return z.fromBits(0,this.low<<t-32,this.unsigned)}shiftRight(t){return t instanceof z&&(t=t.toInt()),(t&=63)===0?this:t<32?z.fromBits(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):z.fromBits(this.high>>t-32,this.high>=0?0:-1,this.unsigned)}shiftRightUnsigned(t){return t instanceof z&&(t=t.toInt()),(t&=63)===0?this:t<32?z.fromBits(this.low>>>t|this.high<<32-t,this.high>>>t,this.unsigned):t===32?z.fromBits(this.high,0,this.unsigned):z.fromBits(this.high>>>t-32,0,this.unsigned)}rotateLeft(t){let e;return t instanceof z&&(t=t.toInt()),(t&=63)===0?this:t===32?z.fromBits(this.high,this.low,this.unsigned):t<32?(e=32-t,z.fromBits(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned)):(t-=32,e=32-t,z.fromBits(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned))}rotateRight(t){let e;return t instanceof z&&(t=t.toInt()),(t&=63)===0?this:t===32?z.fromBits(this.high,this.low,this.unsigned):t<32?(e=32-t,z.fromBits(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned)):(t-=32,e=32-t,z.fromBits(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned))}toSigned(){return this.unsigned?z.fromBits(this.low,this.high,!1):this}toUnsigned(){return this.unsigned?this:z.fromBits(this.low,this.high,!0)}toBytes(t){return t?this.toBytesLE():this.toBytesBE()}toBytesLE(){let t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}toBytesBE(){let t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]}static fromBytes(t,e,i){return i?z.fromBytesLE(t,e):z.fromBytesBE(t,e)}static fromBytesLE(t,e){return new z(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)}static fromBytesBE(t,e){return new z(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)}static fromInt(t,e){let i;if(e){if(t>>>=0,i=0<=t&&t<256){let r=Bx[t];if(r)return r}let n=z.fromBits(t,(t|0)<0?-1:0,!0);return i&&(Bx[t]=n),n}else{if(t|=0,i=-128<=t&&t<128){let r=Mx[t];if(r)return r}let n=z.fromBits(t,t<0?-1:0,!1);return i&&(Mx[t]=n),n}}static fromNumber(t,e){if(isNaN(t))return e?z.UZERO:z.ZERO;if(e){if(t<0)return z.UZERO;if(t>=Ox)return z.MAX_UNSIGNED_VALUE}else{if(t<=-Rx)return z.MIN_VALUE;if(t+1>=Rx)return z.MAX_VALUE}return t<0?z.fromNumber(-t,e).negate():z.fromBits(t%yo|0,t/yo|0,e)}static fromBits(t,e,i){return new z(t,e,i)}static fromString(t,e,i){if(t.length===0)throw Error("empty string");if(t==="NaN"||t==="Infinity"||t==="+Infinity"||t==="-Infinity")return z.ZERO;if(typeof e=="number"?(i=e,e=!1):e=!!e,i=i||10,i<2||36<i)throw RangeError("radix");let n;if((n=t.indexOf("-"))>0)throw Error("interior hyphen");if(n===0)return z.fromString(t.substring(1),e,i).negate();let r=z.fromNumber(Math.pow(i,8)),o=z.ZERO;for(let s=0;s<t.length;s+=8){let l=Math.min(8,t.length-s),c=parseInt(t.substring(s,s+l),i);if(l<8){let u=z.fromNumber(Math.pow(i,l));o=o.multiply(u).add(z.fromNumber(c))}else o=o.multiply(r),o=o.add(z.fromNumber(c))}return o.unsigned=e,o}static fromValue(t,e){return typeof t=="number"?z.fromNumber(t,e):typeof t=="string"?z.fromString(t,e):z.fromBits(t.low,t.high,typeof e=="boolean"?e:t.unsigned)}};z.ZERO=z.fromInt(0),z.UZERO=z.fromInt(0,!0),z.ONE=z.fromInt(1),z.UONE=z.fromInt(1,!0),z.NEG_ONE=z.fromInt(-1),z.MAX_VALUE=z.fromBits(-1,2147483647,!1),z.MAX_UNSIGNED_VALUE=z.fromBits(-1,-1,!0),z.MIN_VALUE=z.fromBits(0,-2147483648,!1);var bo=z,Px=65536,TE=1<<24,yo=Px*Px,Ox=yo*yo,Rx=Ox/2,Nx=bo.fromInt(TE);var pl=class a{constructor(t,e){this.lo=t>>>0,this.hi=e>>>0}zzEncode(){let t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this}zzDecode(){let t=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this}toLong(t){return new bo(this.lo|0,this.hi|0,!!t)}static from(t){return typeof t=="number"?a.fromNumber(t):((typeof t=="string"||t instanceof String)&&(t=bo.fromString(t)),t.low||t.high?new a(t.low>>>0,t.high>>>0):Hx)}static fromNumber(t){if(t===0)return Hx;let e=t<0;e&&(t=-t);let i=t>>>0,n=(t-i)/4294967296>>>0;return e&&(n=~n>>>0,i=~i>>>0,++i>4294967295&&(i=0,++n>4294967295&&(n=0))),new a(i,n)}},Hx=new pl(0,0);function SE(a,t){let e=0;for(;t.hi;)a.writeByte(t.lo&127|128),t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7,e=e+7;for(;t.lo>127;){if(e>=56){a.writeByte(t.lo);return}a.writeByte(t.lo&127|128),t.lo=t.lo>>>7,e=e+7}a.writeByte(t.lo)}function CE(a){let t=new pl(0,0),e=0,i=a.length,n=0;if(i-n>4){for(;e<4;++e)if(t.lo=(t.lo|(a[n]&127)<<e*7)>>>0,a[n++]<128)return t;if(t.lo=(t.lo|(a[n]&127)<<28)>>>0,t.hi=(t.hi|(a[n]&127)>>4)>>>0,a[n++]<128)return t;e=0}else{for(;e<3;++e)if(t.lo=(t.lo|(a[n]&127)<<e*7)>>>0,a[n++]<128)return t;return t.lo=(t.lo|(a[n++]&127)<<e*7)>>>0,t}for(;e<4;++e){if(n===8)return t.hi=(t.hi|a[n]<<e*7+3)>>>0,t;if(t.hi=(t.hi|(a[n]&127)<<e*7+3)>>>0,a[n++]<128)return t}return t}function Ux(a,t){let e=pl.from(t).zzEncode();SE(a,e)}function Vx(a){return CE(a).zzDecode().toLong(!1)}var Fx="",kE=128,AE=655537,DE=32767,ME=-32768,zx=2147483647,Gx=-2147483648,BE=new TextEncoder,PE=new TextDecoder;function RE(a,t){if(a.byteLength>t)throw new Error("newLength is too small");let e=new ArrayBuffer(t);return new Uint8Array(e).set(new Uint8Array(a)),e}function NE(a){return a<<1^a>>31}function OE(a){return a>>>1^-(a&1)}var Ev=class{constructor(){this.writeOffset=0,this.readOffset=0,this.buffer=new ArrayBuffer(kE),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}setWriteOffset(t){if(t>this.buffer.byteLength)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.writeOffset=t}setReadOffset(t){if(t>this.writeOffset)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.readOffset=t}getCapacity(){return this.buffer.byteLength-this.writeOffset}ensureCapacity(t){for(;t-this.getCapacity()>0;){let e=this.buffer.byteLength*2;if(e>AE)throw new Error("out of memory error");this.buffer=RE(this.buffer,e),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}}isReadable(){return this.writeOffset>this.readOffset}writeBytes(t){let e=t.byteLength;this.ensureCapacity(e),new Uint8Array(this.buffer).set(new Uint8Array(t),this.writeOffset),this.writeOffset+=e}toBytes(){let t=new ArrayBuffer(this.writeOffset);return new Uint8Array(t).set(new Uint8Array(this.buffer.slice(0,this.writeOffset))),t}writeBoolean(t){if(!(t===!0||t===!1))throw new Error("value must be true of false");this.ensureCapacity(1),t===!0?this.bufferView.setInt8(this.writeOffset,1):this.bufferView.setInt8(this.writeOffset,0),this.writeOffset++}readBoolean(){let t=this.bufferView.getInt8(this.readOffset);return this.readOffset++,t===1}writeByte(t){this.ensureCapacity(1),this.bufferView.setInt8(this.writeOffset,t),this.writeOffset++}readByte(){let t=this.bufferView.getInt8(this.readOffset);return this.readOffset++,t}writeShort(t){if(!(ME<=t&&t<=DE))throw new Error("value must range between minShort:-32768 and maxShort:32767");this.ensureCapacity(2),this.bufferView.setInt16(this.writeOffset,t),this.writeOffset+=2}readShort(){let t=this.bufferView.getInt16(this.readOffset);return this.readOffset+=2,t}writeRawInt(t){if(!(Gx<=t&&t<=zx))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");this.ensureCapacity(4),this.bufferView.setInt32(this.writeOffset,t),this.writeOffset+=4}readRawInt(){let t=this.bufferView.getInt32(this.readOffset);return this.readOffset+=4,t}writeInt(t){if(!(Gx<=t&&t<=zx))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");if(this.ensureCapacity(5),t=NE(t),!(t>>>7)){this.writeByte(t);return}if(!(t>>>14)){this.writeByte(t&127|128),this.writeByte(t>>>7);return}if(!(t>>>21)){this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14);return}if(!(t>>>28)){this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14|128),this.writeByte(t>>>21);return}this.writeByte(t&127|128),this.writeByte(t>>>7|128),this.writeByte(t>>>14|128),this.writeByte(t>>>21|128),this.writeByte(t>>>28)}readInt(){let t=this.readByte(),e=t&127;return t&128&&(t=this.readByte(),e|=(t&127)<<7,t&128&&(t=this.readByte(),e|=(t&127)<<14,t&128&&(t=this.readByte(),e|=(t&127)<<21,t&128&&(t=this.readByte(),e|=(t&127)<<28)))),OE(e)}writeLong(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(9),Ux(this,t)}readLong(){let t=new ArrayBuffer(9),e=new DataView(t,0,t.byteLength),i=0,n=this.readByte();return e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n),n&128&&(n=this.readByte(),e.setUint8(i++,n))))))))),Vx(new Uint8Array(t.slice(0,i))).toNumber()}writeFloat(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(4),this.bufferView.setFloat32(this.writeOffset,t),this.writeOffset+=4}readFloat(){let t=this.bufferView.getFloat32(this.readOffset);return this.readOffset+=4,t}writeDouble(t){if(t==null)throw new Error("value must not be null");this.ensureCapacity(8),this.bufferView.setFloat64(this.writeOffset,t),this.writeOffset+=8}readDouble(){let t=this.bufferView.getFloat64(this.readOffset);return this.readOffset+=8,t}writeChar(t){if(t==null||t.length===0){this.writeString(Fx);return}this.writeString(t.charAt(0))}readChar(){return this.readString()}writeString(t){if(t==null||t.trim().length===0){this.writeInt(0);return}let e=BE.encode(t);this.ensureCapacity(5+e.length),this.writeInt(e.length),e.forEach(i=>this.writeByte(i))}readString(){let t=this.readInt();if(t<=0)return Fx;let e=new Uint8Array(this.buffer.slice(this.readOffset,this.readOffset+t)),i=PE.decode(e);return this.readOffset+=t,i}writePacketFlag(t){let e=t==null;return this.writeBoolean(!e),e}writePacket(t,e){Xt.getProtocol(e).write(this,t)}readPacket(t){return Xt.getProtocol(t).read(this)}writeBooleanArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeBoolean(e)}))}readBooleanArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readBoolean());return t}writeByteArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeByte(e)}))}readByteArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readByte());return t}writeShortArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeShort(e)}))}readShortArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readShort());return t}writeIntArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeInt(e)}))}readIntArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readInt());return t}writeLongArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeLong(e)}))}readLongArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readLong());return t}writeFloatArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeFloat(e)}))}readFloatArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readFloat());return t}writeDoubleArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeDouble(e)}))}readDoubleArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readDouble());return t}writeStringArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeString(e)}))}readStringArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readString());return t}writeCharArray(t){t===null?this.writeInt(0):(this.writeInt(t.length),t.forEach(e=>{this.writeChar(e)}))}readCharArray(){let t=[],e=this.readInt();if(e>0)for(let i=0;i<e;i++)t.push(this.readChar());return t}writePacketArray(t,e){if(t===null)this.writeInt(0);else{let i=Xt.getProtocol(e);this.writeInt(t.length),t.forEach(n=>{i.write(this,n)})}}readPacketArray(t){let e=[],i=this.readInt();if(i>0){let n=Xt.getProtocol(t);for(let r=0;r<i;r++)e.push(n.read(this))}return e}writeBooleanList(t){this.writeBooleanArray(t)}readBooleanList(){return this.readBooleanArray()}writeByteList(t){this.writeByteArray(t)}readByteList(){return this.readByteArray()}writeShortList(t){this.writeShortArray(t)}readShortList(){return this.readShortArray()}writeIntList(t){this.writeIntArray(t)}readIntList(){return this.readIntArray()}writeLongList(t){this.writeLongArray(t)}readLongList(){return this.readLongArray()}writeFloatList(t){this.writeFloatArray(t)}readFloatList(){return this.readFloatArray()}writeDoubleList(t){this.writeDoubleArray(t)}readDoubleList(){return this.readDoubleArray()}writeStringList(t){this.writeStringArray(t)}readStringList(){return this.readStringArray()}writeCharList(t){this.writeCharArray(t)}readCharList(){return this.readCharArray()}writePacketList(t,e){this.writePacketArray(t,e)}readPacketList(t){return this.readPacketArray(t)}writeBooleanSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeBoolean(e)}))}readBooleanSet(){return new Set(this.readBooleanArray())}writeByteSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeByte(e)}))}readByteSet(){return new Set(this.readByteArray())}writeShortSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeShort(e)}))}readShortSet(){return new Set(this.readShortArray())}writeIntSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeInt(e)}))}readIntSet(){return new Set(this.readIntArray())}writeLongSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeLong(e)}))}readLongSet(){return new Set(this.readLongArray())}writeFloatSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeFloat(e)}))}readFloatSet(){return new Set(this.readFloatArray())}writeDoubleSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeDouble(e)}))}readDoubleSet(){return new Set(this.readDoubleArray())}writeStringSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeString(e)}))}readStringSet(){return new Set(this.readStringArray())}writeCharSet(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach(e=>{this.writeChar(e)}))}readCharSet(){return new Set(this.readCharArray())}writePacketSet(t,e){if(t===null)this.writeInt(0);else{let i=Xt.getProtocol(e);this.writeInt(t.size),t.forEach(n=>{i.write(this,n)})}}readPacketSet(t){return new Set(this.readPacketArray(t))}writeIntIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeInt(e)}))}readIntIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readInt(),r=this.readInt();t.set(n,r)}return t}writeIntLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeLong(e)}))}readIntLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readInt(),r=this.readLong();t.set(n,r)}return t}writeIntStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeInt(i),this.writeString(e)}))}readIntStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readInt(),r=this.readString();t.set(n,r)}return t}writeIntPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=Xt.getProtocol(e);this.writeInt(t.size),t.forEach((n,r)=>{this.writeInt(r),i.write(this,n)})}}readIntPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let n=Xt.getProtocol(t);for(let r=0;r<i;r++){let o=this.readInt(),s=n.read(this);e.set(o,s)}}return e}writeLongIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeInt(e)}))}readLongIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readLong(),r=this.readInt();t.set(n,r)}return t}writeLongLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeLong(e)}))}readLongLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readLong(),r=this.readLong();t.set(n,r)}return t}writeLongStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeLong(i),this.writeString(e)}))}readLongStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readLong(),r=this.readString();t.set(n,r)}return t}writeLongPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=Xt.getProtocol(e);this.writeInt(t.size),t.forEach((n,r)=>{this.writeLong(r),i.write(this,n)})}}readLongPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let n=Xt.getProtocol(t);for(let r=0;r<i;r++){let o=this.readLong(),s=n.read(this);e.set(o,s)}}return e}writeStringIntMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeInt(e)}))}readStringIntMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readString(),r=this.readInt();t.set(n,r)}return t}writeStringLongMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeLong(e)}))}readStringLongMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readString(),r=this.readLong();t.set(n,r)}return t}writeStringStringMap(t){t===null?this.writeInt(0):(this.writeInt(t.size),t.forEach((e,i)=>{this.writeString(i),this.writeString(e)}))}readStringStringMap(){let t=new Map,e=this.readInt();if(e>0)for(let i=0;i<e;i++){let n=this.readString(),r=this.readString();t.set(n,r)}return t}writeStringPacketMap(t,e){if(t===null)this.writeInt(0);else{let i=Xt.getProtocol(e);this.writeInt(t.size),t.forEach((n,r)=>{this.writeString(r),i.write(this,n)})}}readStringPacketMap(t){let e=new Map,i=this.readInt();if(i>0){let n=Xt.getProtocol(t);for(let r=0;r<i;r++){let o=this.readString(),s=n.read(this);e.set(o,s)}}return e}},Tv=Ev;var Vt=class Vt{constructor(){this.m_iConnectTimes=0;this.m_iMaxTimes=10;this.m_iHeartTime=6e4;this._isMatching=!1;this.isFirst=!0;this.m_socket=new Laya.Socket,this.m_socket.on(Laya.Event.OPEN,this,this.onSocketOpen),this.m_socket.on(Laya.Event.CLOSE,this,this.onSocketClose),this.m_socket.on(Laya.Event.MESSAGE,this,this.onMessageReveived),this.m_socket.on(Laya.Event.ERROR,this,this.onConnectError)}static get instance(){return Vt._instance==null&&(Vt._instance=new Vt),Vt._instance}get isMatching(){return this._isMatching}set isMatching(t){this._isMatching=t,t||(this.m_socket.close(),this.isConnect=!1)}initSocket(){this.isMatching=!0,this.isFirst=!0;var t=F.instance.roomDto.connectAddr;Vt.m_strHttpHost=t,this.connect()}onSocketOpen(){this.isConnect=!0,this.m_iConnectTimes=0,fi.log("websocket----websocket connected",1),this.onLogin()}onLogin(){if(this.isFirst){let t=new np;t.roomId=F.instance.roomDto.roomId,t.loginToken=localStorage.getItem("TOX-COOKIE"+K.instance.walletAddress),t.pid=L.instance.playerDto.pid,this.sendData(t)}else{let t=new sp;t.token=this.socketToken,this.sendData(t)}}onSocketClose(t){console.log("websocket----closed"),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,console.log("websocket----closed m_iConnectTimes:"+this.m_iConnectTimes+", m_iMaxTimes: "+this.m_iMaxTimes),this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,this.onReconnect):de.instance.hideLoading()))}onReconnect(){Vt.instance.reconnect(),Vt.instance.m_iConnectTimes++}onConnectError(t){console.log("websocket----onConnectError e:"+ +t),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,this.onReconnect):de.instance.hideLoading()))}connect(){console.log("websocket----connect: "+Vt.m_strHttpHost),this.isMatching&&(this.isConnect||(Laya.timer.once(1e4,this,this.showTip),this.m_socket.connectByUrl(Vt.m_strHttpHost),console.log("websocket----connect websocket")))}clearShowTip(){Laya.timer.clear(this,this.showTip)}showTip(){ge.netError()}reconnect(){console.log("websocket----reconnect: "+Vt.m_strHttpHost),this.isMatching&&(this.isConnect||(this.m_socket.connectByUrl(Vt.m_strHttpHost),console.log("websocket----connect websocket")))}onSendMessage(){}sendData(t){if(this.isMatching)if(this.isConnect){let e=new Tv;e.setWriteOffset(4),Xt.write(e,t),e.writeBoolean(!1);let i=e.writeOffset;e.setWriteOffset(0),e.writeRawInt(i-4),e.setWriteOffset(i),this.m_socket.send(e.buffer),console.log(ge.GetLogTime+" websocket ------>>>>>>>> send message PROTOCOL_ID:"+t.protocolId()+"，内容："+JSON.stringify(t))}else fi.log("socket send error： "+JSON.stringify(t))}async onMessageReveived(t){let e=t,i=new Tv;i.writeBytes(e),i.setReadOffset(4);let n=Xt.read(i),r=n.protocolId();console.log(ge.GetLogTime+" websocket ------<<<<<<<< recv PROTOCOL_ID: "+r+"，内容："+JSON.stringify(n));let o=n.errorCode;if(o&&o>0){console.warn("errorCode "+o+", errorMessage： "+pe.instance.get(o)),(o==24||o==25)&&(this.isMatching=!1,Je.instance.close(),Vt.instance.clearShowTip(),ye.intance.currSceneName!=Q.M_SCENE_MATCH&&(ye.intance.setCurrentScene(Q.M_SCENE_MAIN),ge.commTipWithYes(pe.instance.get(o))));return}switch(y.intance.event("msg_"+r,[e]),r){case rp.PROTOCOL_ID:console.log("收到了登录返回"),this.isFirst=!1;let l=n;k.needHeart=!1,F.instance.matchDto=l.matchDto,this.socketToken=l.socketToken,ye.intance.setCurrentScene(Q.M_SCENE_MATCH),this.clearShowTip();break;case lp.PROTOCOL_ID:console.log("断线重连 返回");break;case wp.PROTOCOL_ID:console.log("收到比赛开始数据");let c=n;H.intance.disposeView(f.MatchReadyView),F.instance.stopAll=!1;break;case pp.PROTOCOL_ID:console.log("收到移动数据");let u=n;O.instance.onRevMovePush(u);break;case Ip.PROTOCOL_ID:var s=n.moveList;s.forEach(q=>{O.instance.onRevMovePush(q)});break;case xp.PROTOCOL_ID:let b=n;O.instance.onRevTargetMovePush(b);break;case hp.PROTOCOL_ID:console.log("收到伤害数据");let _=n;O.instance.onRevAttackPush(_);break;case Lp.PROTOCOL_ID:console.log("收到动画数据");let w=n;O.instance.onRevAnimationPush(w);break;case up.PROTOCOL_ID:console.log("收到玩家加入或离开数据");let v=n;O.instance.addPlayer(v);break;case bp.PROTOCOL_ID:console.log("收到第一滴血数据");let E=n;y.intance.event(h.EVENT_FirstBlood,[E]);break;case gp.PROTOCOL_ID:console.log("收到多杀数据");let B=n;y.intance.event(h.EVENT_MutiKill,[B]);break;case mp.PROTOCOL_ID:console.log("收到比赛结束");let G=n;F.instance.matchDto&&F.instance.onGoMatchEndRank(G);break;case yp.PROTOCOL_ID:console.log("收到了恢复数据返回");let j=n;O.instance.onRevRestorePush(j.matchDto);break;case Ts.PROTOCOL_ID:console.log("收到了错误信息返回");let Z=new Ts;Object.assign(Z,n),console.log("errorMessage： "+Z.errorMessage),pe.instance.showErrByString(Z.errorMessage);break;case op.PROTOCOL_ID:this.isOtherLogin=!0,Laya.timer.clearAll(this),console.log("websocket----------------------------otherLogin");break;default:break}}sendHeart(){this.m_socket.connected&&this.sendData(new ap)}};Vt.m_strHttpHost=getWSServer(),Vt.CMD_99999=99999;var vt=Vt;var ze=class ze{static get IsSetRelease(){return ze._IsSetRelease}static get IsSetGuid(){return ze._IsSetGuid}static initParms(){if(Laya.Browser.window.location){let e=Laya.Browser.window.location.href,i=this.getURLParameters(e);if(ze.m_obj=i,console.log("1initgame-->urldata:",ze.m_obj),ze.m_obj.server&&ze.m_obj.server!=""&&(k.httpRoot=ze.m_obj.server),ze.m_obj.socket&&ze.m_obj.socket!=""){var t=ze.m_obj.socket;vt.m_strHttpHost=t+"/websocket"}if(ze.m_obj.address&&ze.m_obj.address!=""&&(K.instance.walletAddress=ze.m_obj.address),ze.m_obj.from&&ze.m_obj.from=="into"&&(X.isInto=!0),ze.m_obj.isFull&&ze.m_obj.isFull=="1"&&(X.isFull=!0),ze.m_obj.justFull&&ze.m_obj.justFull=="1"&&(X.justFull=!0),ze.m_obj.white&&ze.m_obj.white=="1"&&(X.isWhite=!0),ze.m_obj.debug&&ze.m_obj.debug!="0"&&(X.Debug=parseInt(ze.m_obj.debug)),ze.m_obj.res&&ze.m_obj.res!="0"&&(X.Res=parseInt(ze.m_obj.res)),ze.m_obj.lang&&ze.m_obj.lang!=""){let n=parseInt(ze.m_obj.lang);n<1&&(n=1),X.ignoreLang=!0,L.instance.m_strLanguage=n}}}static getURLParameters(t){let e={};return t.replace(/[?&]+([^=&]+)=([^&]*)/gi,(i,n,r)=>e[n]=decodeURIComponent(r)),e}static cheakStr(t){let e=new RegExp("[A-Za-z0-9_-\\s]","g"),i=t.match(e);return!!(i&&i.length==t.length)}static isNumber(t){return/^(?!0\d)\d*\.?\d*$/.test(t)}static roundToTwoDecimals(t){return t%1===0?t.toString():Number(t.toFixed(2)).toString()}static filterObjectsByState(t,e,i=void 0){return i?t.filter(n=>n.state===e&&i.indexOf(n.pk)<0&&n.newFightFlag!==1):t.filter(n=>n.state===e&&n.newFightFlag!==1)}static filterObjectsByNewFightFlag(t){return t.filter(e=>e.newFightFlag!==1)}static getArenaByTicketId(t){let e=R.intance.m_dicArenaDic.values;for(let i of e)if(Array.isArray(i.item)&&i.item.length>0&&i.item[0]===t)return i.name}static processItemsArray(t,e=!0){let i=R.intance.getGeneralValueById(20),n={},r={};var o=[];t.forEach(c=>{i.indexOf(c.id)>-1?r[c.id]?r[c.id].count+=c.count:r[c.id]=c:(n[c.id]=c,o.push(c))}),e&&i.forEach(c=>{r[c]||(r[c]={type:1,id:c,count:0})});let s=Object.values(r),l=Object.values(n);return s=s.sort((c,u)=>i.indexOf(c.id)-i.indexOf(u.id)),[s,l,o]}static sumItemCount(t){let e=new Map;return t.forEach(n=>{n.reward.forEach(r=>{let{type:o,id:s,count:l}=r;e.has(s)?e.set(s,{type:o,id:s,count:e.get(s).count+l}):e.set(s,{type:o,id:s,count:l})})}),Array.from(e.values())}static addIndexToObjects(t){return t.forEach((e,i)=>{e.index=i}),t}static findFirstTypeAndNotGold(t){for(let e=0;e<t.length;e++)if(t[e].id>=3001&&t[e].id<=3021&&t[e].id!==3005)return t[e]}static getTitleByGoodsId(t,e){for(let i of t)if(i.goods===e)return i.title;return null}static getCurrencyIdByName(t){let e=xe.TYPE_TOX;switch(t){case"TOX":e=xe.TYPE_TOX;break;case"ETH":e=xe.TYPE_ETH;break;case"BTC":e=xe.TYPE_BTC;break;case"USDT":e=xe.TYPE_USDT;break;case"BTOX":e=xe.TYPE_BTOX;break;case"GALA":e=xe.TYPE_GALA;break;case"BNRY":e=xe.TYPE_BNRY;break;case"KLAY":e=xe.TYPE_KLAY;break;case"BNB":e=xe.TYPE_BNB;break;case"GGG":e=xe.TYPE_GGG;break}return e}static formatNumber(t,e=7){let i=t.toString(),n=i.indexOf(".");return n!==-1&&i.length-n>e?(i=i.slice(0,n+e),parseFloat(i)):t}static truncateToTwoDecimalPlaces(t){let e=t.toString(),i=e.indexOf(".");if(i===-1)return t;let n=e.substring(0,i+5);return parseFloat(n)}static getKeyByValue(t,e){return Object.keys(t).find(i=>t[i]===e)}static powerOf10(t,e){return t*Math.pow(10,e)}static isLeapYear(t){return t%4==0&&t%100!=0||t%400==0}static getDaysInMonth(t,e){return e===2?this.isLeapYear(t)?29:28:[4,6,9,11].includes(e)?30:31}static shortenString(t,e,i){return t.length<=e+i?t:t.substr(0,e)+"..."+t.substr(-i)}static multiplyBigDecimals(t,e){let n=Math.pow(10,1e4),r=parseFloat(String(t))*parseFloat(String(e));return Math.round(r*n)/n}};ze._IsSetRelease=!1,ze._IsSetGuid=!1;var me=ze;var mn=class a{constructor(){this.assets_ary=[];this.assets_contract=null;this.startRecharge=!1}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){typeof window.ethereum>"u"||(y.intance.on(h.EVENT_RECHARGE_GET,this,this.rechargeEnd),this.assets_contract=new window.web3.eth.Contract(ie.WITHDRAW_AND_RECHARGE_ABI,ie.WITHDRAW_AND_RECHARGE_ADDRESS))}async depositWallet(t,e){if(de.instance.showLoading(!0),!await K.instance.allowanceAddressByTokenAddress(ie.WITHDRAW_AND_RECHARGE_ADDRESS,t)){de.instance.hideLoading(),M.instance.notice(d.instance.getLanguage(15));return}return e=window.web3.utils.toWei(e+""),await this.assets_contract.methods.recharge(t.toLowerCase(),e).send({from:K.instance.walletAddress},(n,r)=>{if(n)return de.instance.hideLoading(),!1}),!0}async withdrawToken(t){return de.instance.showLoading(!0),await this.assets_contract.methods.withdrawToken(t.tokenAddress,t.to,t.amount,t.timestamp,t.hash,t.r,t.s,t.v).send({from:K.instance.walletAddress},(e,i)=>{if(e)return de.instance.hideLoading(),!1}),!0}async updateAssetsBalance(){Ai.instance.walletDic==null&&(Ai.instance.walletDic=new te);for(let t of this.assets_ary){let e=t[0],i=t[1],n=await K.instance.getERC20TokenBalance(i);n=parseInt(n);let r=Ai.instance.walletDic.get(e);r||(r=new Is,r.itemId=e,r.value=0,Ai.instance.walletDic.set(e,r)),r.ethValue=n}y.intance.event(At.UPDATE_LOCAL_WALLET_LIST_EVENT)}updateCwt(t){let e=Ai.instance.walletDic.get(ei.ASSETS_TOX);e||(e=new Is,e.itemId=ei.ASSETS_TOX,Ai.instance.walletDic.set(ei.ASSETS_TOX,e)),e.ethValue=t}async rechargeToken(t,e=null,i){try{if(e.token&&e.token!==ie.ADDRESS0&&!await K.instance.newAllowanceAddress(i,e.token))return de.instance.hideLoading(),M.instance.notice(d.instance.getLanguage(15)),!1;let n=gs(t+"",e.tokenDecimals),r,o="depositToken";switch(e.chainId){case 11155111:case 1:r=ie.RECHANGE_ABI_ETH;break;case 10:r=ie.RECHANGE_ABI_OPT;break;case 8217:r=ie.RECHANGE_ABI_KLAYTN;break;case 56:case 97:r=ie.RECHANGE_ABI_BSC;break;default:r=ie.RECHANGE_ABI;break}let s;!e.token||e.token==ie.ADDRESS0?s=await K.instance.walletClient.writeContract({account:K.instance.walletAddress,address:i,abi:r,functionName:"depositETH",value:n,args:[]}):s=await K.instance.walletClient.writeContract({account:K.instance.walletAddress,address:i,abi:r,functionName:o,args:[e.token,n]}),this.startRecharge=!0,Laya.timer.once(6e4,this,this.clearRecharge);let l,c=!1;if(l=await K.instance.publicClient.waitForTransactionReceipt({hash:s,pollingInterval:1e3}),l&&l.status=="success"||c){if(!this.startRecharge)return;Laya.timer.clear(this,this.clearRecharge),console.log(`Tx successful with hash: ${s}`);let u=await K.instance.walletClient.getChainId(),m=[u,s];return this.getReward(u,s),Laya.timer.loop(2e3,this,this.getReward,m),Laya.timer.once(6e4,this,this.clearRecharge),s}else{de.instance.hideLoading(),ge.TransactionErrorTip();return}}catch(n){de.instance.hideLoading(),console.log(n),n instanceof Error?n.message.includes("does not match the target chain for the transaction")?y.intance.event(h.CHANGE_ASSET_CHAIN):console.log("Error message does not contain the specified character."):console.log("An error occurred, but it is not an instance of Error.")}}async getReward(t,e){let i=await k.requestPost("wxgame/sys/payCallPack",{chainId:t,hashId:e});if(i&&i.coin){Laya.timer.clear(this,this.clearRecharge);let r=i.coin[0];if(!r)return;y.intance.event(At.UPDATE_LOCAL_WALLET_LIST_EVENT);var n=new Vi;n.id=r[0],n.count=r[1],de.instance.hideLoading(),H.intance.openModule(f.RewardGetDialog,[n]),this.rechargeEnd()}}rechargeEnd(){L.instance.rechargeEnd=!1,Laya.timer.clear(this,this.getReward)}clearRecharge(){this.startRecharge=!1,de.instance.hideLoading(),M.instance.notice(d.instance.getLanguage(1350)),this.rechargeEnd()}parseGwei(t){return t*1e9}async getAmountsOut(t,e,i,n=void 0){try{let r=18,o=18;n&&(r=n.usdtDecimals,o=n.tokenDecimals);let s=me.powerOf10(i,r),l;if(t=="BNB"||t=="GALA"?l=await K.instance.publicClient.readContract({address:e,abi:ie.PUZZLE_ABI,functionName:"getAmountsOut",args:[s]}):l=await K.instance.publicClient.readContract({address:e,abi:ie.PUZZLE_ABI,functionName:"getTokenAmountsOut",args:[s,n.token]}),l){let c=Number(l)/Math.pow(10,o);return console.log(c),c}}catch(r){if(r instanceof Error){let o=r.message;return 0}}return 0}async withdrawAirToken(t,e=null,i,n,r,o,s,l){try{let u;l==1||l==11155111?u=ie.PUZZLE_ABI_ETH:u=ie.PUZZLE_ABI;var c=await K.instance.walletClient.writeContract({account:K.instance.walletAddress,address:t,abi:u,functionName:"withdrawToken",args:[e,i,n,r,o,s]});return c}catch(u){de.instance.hideLoading(),console.log(u)}}};var Ep=vw(jx());var ca=class{static getInviteUrl(){return window.location.origin+"?invite="+this.encode(K.instance.walletAddress)}static encode(t){for(var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=e.length,n=e.split(""),r="",o,s,l,c,u=0;u<t.length;u++)o=t.charCodeAt(u),s=o%i,o=(o-s)/i,l=o%i,o=(o-l)/i,c=o%i,r+=n[c]+n[l]+n[s];return window.btoa(r)}static decode(t){t=window.atob(t);var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=e.length,n,r,o,s,l=0,c;c=new Array(Math.floor(t.length/3)),n=c.length;for(var u=0;u<n;u++)r=e.indexOf(t.charAt(l)),l++,o=e.indexOf(t.charAt(l)),l++,s=e.indexOf(t.charAt(l)),l++,c[u]=r*i*i+o*i+s;return n=decodeCharCode(c.join(",")),n}static getQueryString(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return i!=null?i[2]:""}static getInviteWalletAddress(){let t=this.getQueryString("invite");return t&&(t=this.decode(t)),t}static toWei(t,e){let i=t*10**parseInt(e);return window.web3.utils.toBN("0x"+i.toString(16)).toString()}static fromWei(t,e,i=0){if(!t)return 0;let n=t.length-e+i;if(n<=0)return 0;let r=t.toString().slice(0,n);if(i){let o=r.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";r=s+r}else r=r.slice(0,r.length-i)+"."+r.slice(r.length-i)}return r}static deepClone(t){let e=new te;for(let i in t)typeof t[i]=="function"?e[i]=t[i]:e[i]=JSON.parse(JSON.stringify(t[i]));return e}};var HE=`abdikace
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
`);var UE=`abandon
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
`);var VE=`abaisser
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
`);var FE=`abaco
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
`);var zE=`あいこくしん
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
`);var GE=`가격
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
`);var jE=`的
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
`);var KE=`ábaco
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
`);var WE=`的
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
`);ux();Me();function ml(){return _e(Pg.utils.randomPrivateKey())}var K=class a{constructor(){this.tokenContract=null;this.hero_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){if(typeof window.ethereum>"u"){console.log("2222"),M.instance.notice(d.instance.getLanguage(130));return}console.log("ethereum",window.ethereum),Se.instance.sendCustumEvent(10),this.walletClient=po({transport:io(window.ethereum)});let t=await a.instance.walletClient.getChainId();var e=this.getChain(t);e||(M.instance.notice(d.instance.getLanguage(1171)),e=ut),this.publicClient=_s({chain:e,transport:ys()}),this.walletClient=po({chain:e,transport:io(window.ethereum)});let i=await a.instance.publicClient.getChainId();console.log("clientChainId",t,i),await Gb(),console.log("5555"),console.log("6666"),Se.instance.sendCustumEvent(12),this.registerProxy(),console.log("7777"),Se.instance.sendCustumEvent(17)}async registerProxy(){console.log("888"),fo.instance.init()}async getWalletAddress(){if(this.walletAddress)return this.walletAddress;let[t]=await this.walletClient.requestAddresses();return console.log("address:"+t),t;if(await Gb(),wt.type==wt.TYPE_TRUST)try{console.log("initWeb3 -3");let e=await wt.trustProvider.request({method:"eth_requestAccounts"});return console.log("initWeb3 -4"),console.log(e),e[0]}catch(e){console.log("initWeb3 -5"+e),e.code===4001&&console.error("User denied connection.")}else if(wt.type==wt.TYPE_WEB3)return(await window.ethereum.request({method:"eth_requestAccounts"}))[0];return null}async dappLogin(){console.log("dappLogin this.walletAddress: "+this.walletAddress),Se.instance.sendCustumEvent(13),this.walletAddress=await this.getWalletAddress(),Se.instance.sendCustumEvent(14),console.log("login to server",1),await this.signAndLogin(),console.log("login success",1)}getChainId(){let t="";return typeof window.ethereum>"u"&&(t="0x38"),(window.ethereum.chainId+"").indexOf("0x")==-1?t="0x"+window.ethereum.chainId.toString(16):t=window.ethereum.chainId,t!=="0x38"&&t!=="0x61"&&M.instance.notice(d.instance.getLanguage(18)),t}async signAndLogin(t=!1){console.log("signAndLogin mustSign: "+t);var e=!0;let i=new Date().getTime(),n="",r="",o="",s="";if(X.Debug!=0)e=!1;else if(!t&&localStorage.getItem("TOX-COOKIE"+this.walletAddress)&&X.Debug==0){let b=localStorage.getItem("TOX-COOKIE"+a.instance.walletAddress),_=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);_=ca.decode(_);let w=_.split("&");i=parseFloat(w[0]),n=w[1],r=w[2],o=w[3],s=w[4],b&&i&&n&&r&&o&&s&&(e=!1),console.log("needSign: "+e)}if(e){console.log("111");var l=ml().substring(0,32);n=_e(l,{size:32}),console.log("222"),i=new Date().getTime();let _=this.walletAddress+n+i,w=new Ep.default("SHA-256","TEXT",{encoding:"UTF8"});w.update(_);let v=w.getHash("HEX");console.log("进入签名",1);let E=await this.walletClient.signMessage({account:this.walletAddress,message:v});console.log("签名结束",1);let B=E.substring(2);r="0x"+B.substring(0,64),o="0x"+B.substring(64,128),s="0x"+B.substring(128,130)}let c={debug:X.Debug,address:this.walletAddress,time:i,randomHex:n,r,s:o,v:s};Se.instance.sendCustumEvent(15);let u=await k.requestPost("wxgame/player/login",c,!1,!1);if(u){console.log("服务器登录成功"),Se.instance.sendCustumEvent(16),localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,u.loginToken);var m=ca.encode(i+"&"+n+"&"+r+"&"+o+"&"+s);localStorage.setItem("TOX-COOKIE-CODE"+a.instance.walletAddress,m)}else H.intance.openModule(f.NoServerView);y.intance.event(h.EVENT_LOGIN_GAME_END,u)}async main(){let t=_s({chain:Ui,transport:ys()}),e=po({chain:Ui,transport:io(window.ethereum)}),i=await t.getBalance({address:"0x55d398326f99059fF775485246999027B3197955"});console.log("balance:"+i);let[n]=await e.requestAddresses();console.log("address:"+n);let r=await e.signMessage({account:n,message:"Hello world!"});console.log("address: "+n),console.log("message: Hello world!"),console.log("signature: "+r);let o=await t.verifyMessage({address:n,message:"Hello world!",signature:r});console.log("valid: "+o);let l=await(await fetch("http://localhost:3000/api/login",{method:"POST",body:JSON.stringify({address:e.account.address,signature:r})})).json();console.log("data: "+l)}async refreshToken(){let t,e=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);e=ca.decode(e);let i=e.split("&"),n=parseFloat(i[0]),r=i[1],o=i[2],s=i[3],l=i[4];if(n&&r&&o&&s&&l){let c={debug:X.Debug,address:this.walletAddress,time:n,randomHex:r,r:o,s,v:l};t=await k.requestPost("wxgame/player/getJwt",c,!1,!1).catch(u=>{}),t&&localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,t.loginToken)}return t}async checkNickName(t){console.log("checkNickName");let e={name:t,address:this.walletAddress};return await k.requestPost("wxgame/player/nameCheck",e,!1,!1).catch(n=>{de.instance.hideLoading(),console.log("checkResult 失败")})}waitGetAccount(){Laya.timer.loop(2e3,this,this.getAcccount)}async getAcccount(){console.log("getAcccount");var t=!0;let e=new Date().getTime(),i="",n="",r="",o="";if(X.Debug!=0)t=!1;else{let u=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);u=ca.decode(u);let m=u.split("&");e=parseFloat(m[0]),i=m[1],n=m[2],r=m[3],o=m[4],e&&i&&n&&r&&o&&(t=!1),console.log("needSign: "+t)}if(t){var s=ml().substring(0,32);i=_e(s,{size:32}),e=new Date().getTime();let m=this.walletAddress+i+e,b=new Ep.default("SHA-256","TEXT",{encoding:"UTF8"});b.update(m);let _=b.getHash("HEX");console.log("进入签名",1);let w=await this.walletClient.signMessage({account:this.walletAddress,message:_});console.log("签名结束",1);let v=w.substring(2);n="0x"+v.substring(0,64),r="0x"+v.substring(64,128),o="0x"+v.substring(128,130)}let l,c={address:this.walletAddress,time:e,randomHex:i,r:n,s:r,v:o};if(l=await k.requestPost("wxgame/player/getAccount",c,!1,!1).catch(u=>{}),l){Laya.timer.clear(this,this.getAcccount);let u=l.playerDto;localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,l.loginToken),y.intance.event(h.EVENT_WAIT_PLAYERINFO,u)}}async createAcccount(t,e,i,n){console.log("createAcccount");var r=!0;let o=new Date().getTime(),s="",l="",c="",u="";if(X.Debug!=0)r=!1;else{let w=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);w=ca.decode(w);let v=w.split("&");o=parseFloat(v[0]),s=v[1],l=v[2],c=v[3],u=v[4],o&&s&&l&&c&&u&&(r=!1),console.log("needSign: "+r)}if(r){var m=ml().substring(0,32);s=_e(m,{size:32}),o=new Date().getTime();let v=this.walletAddress+s+o,E=new Ep.default("SHA-256","TEXT",{encoding:"UTF8"});E.update(v);let B=E.getHash("HEX");console.log("进入签名",1);let G=await this.walletClient.signMessage({account:this.walletAddress,message:B});console.log("签名结束",1);let j=G.substring(2);l="0x"+j.substring(0,64),c="0x"+j.substring(64,128),u="0x"+j.substring(128,130)}let b,_={name:t,sex:e,icon:i,country:n,debug:X.Debug,address:this.walletAddress,time:o,randomHex:s,r:l,s:c,v:u};if(b=await k.requestPost("wxgame/player/create",_,!1,!1).catch(w=>{}),b){let w=b.playerDto;return localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,b.loginToken),w}return null}async getBalance(){return 0}async allowanceAddress(t){}async newAllowanceAddress(t,e){let i=a.instance.walletAddress,n=t;try{console.log("查看是否已经授权, owner:"+i+", spender:"+n+", publicClient.chain.id:"+this.publicClient.chain.id);let r=await a.instance.publicClient.readContract({address:e,abi:ie.TOKEN_ERC20ABI,functionName:"allowance",args:[i,n]});if(r=="0"){console.log("未授权，进行授权, owner:"+i+", allowance:"+r+", walletClient.chain.id:"+this.walletClient.chain.id);let o=await a.instance.walletClient.writeContract({address:e,abi:ie.TOKEN_ERC20ABI,functionName:"approve",args:[n,"100000000000000000000000000000000000000000000000"],account:i});console.log("授权hash============"+o);let s=await a.instance.publicClient.waitForTransactionReceipt({hash:o});return console.log(`Tx with hash: ${o}`,s),s&&s.status=="success"?(console.log(`Tx successful with hash: ${o}`),!0):!1}else return console.log("已授权, owner:"+i+", allowance:"+r),!0}catch(r){if(console.log("授权错误====》",r),r instanceof Error){let o=r.message;console.log("授权错误====》",o)}}}async allowanceAddressByTokenAddress(t,e){let i=new window.web3.eth.Contract(ie.TOKEN_ERC20ABI,e);return await i.methods.allowance(this.walletAddress,t).call()=="0"&&(console.log("ERC20 allowance!"),await i.methods.approve(t,"100000000000000000000000000000000000000000000000").send({from:this.walletAddress},(r,o)=>{if(r)return de.instance.hideLoading(),!1})),!0}async getERC20TokenBalance(t){return window.ethereum,await new window.web3.eth.Contract(ie.TOKEN_ERC20ABI,t).methods.balanceOf(this.walletAddress).call()}async getBalance2(t,e=void 0){let i=this.walletAddress;e&&(i=e);let n;return!t||t==ie.ADDRESS0?n=await a.instance.publicClient.getBalance({address:a.instance.walletAddress}):n=await this.publicClient.readContract({address:t,abi:ie.TOKEN_ERC20ABI,functionName:"balanceOf",args:[i]}),console.log("getBalance2 publicClient.chain.id:"+this.publicClient.chain.id,"代币地址",t,"余额：",n),n}async getContractBalance(t,e,i){if(i=="WBNB"){let n=await a.instance.publicClient.getBalance({address:e});if(n)return n}else{let n=this.getBalance2(t,e);if(n)return n}}async getHeroStatus(t){return await this.hero_contract.methods.getStatus(parseInt(t)).call()}async checkHeroIsBuzy(t){let e=await this.getHeroStatus(t);return parseInt(e)?(M.instance.notice(d.instance.getLanguage(19)),!0):!1}async switchChain(t){var e=this.getChainName(t);let i=await a.instance.walletClient.getChainId();if(X.isInto&&Laya.Browser.onIOS&&i!==t)return M.instance.notice(d.instance.getLanguage(1172,e)),!1;try{console.log("switchChain id:"+t),await this.walletClient.switchChain({id:t})}catch(n){if(console.log(n),n instanceof Error){let r=n.message;console.log("切换错误====》",r)}return M.instance.notice(d.instance.getLanguage(1172,e)),!1}return await this.resetPublicAndWallet(t),!0}async addChain(t){console.log(t);let e=null;switch(t){case 97:e=kt;break;case 9001:e=ut;break;case 56:e=la;break;case 10:e=ho;break;case 8217:e=mo;break}let i=await this.walletClient.addChain({chain:e});console.log(i)}getChainNameByID(t){for(let e in Ei)if(Number(Ei[e])==t)return e;return""}getChain(t){var e=null;switch(t){case kt.id:e=kt;break;case ut.id:e=ut;break;case Ui.id:e=Ui;break;case la.id:e=la;break}return e}getChainName(t){var e="";switch(t){case kt.id:e=kt.name;break;case ut.id:e=ut.name;break;case Ui.id:e=Ui.name;break;case la.id:e=la.name;break}return e}async resetPublicAndWallet(t){switch(console.log("resetPublicAndWallet chain:"+t),t){case kt.id:await a.instance.reInitPublicClient(kt),await a.instance.reInitWalletClient(kt);break;case ut.id:await a.instance.reInitPublicClient(ut),await a.instance.reInitWalletClient(ut);break;case Ui.id:await a.instance.reInitPublicClient(Ui),await a.instance.reInitWalletClient(Ui);break;case la.id:await a.instance.reInitPublicClient(la),await a.instance.reInitWalletClient(la);break;case ws.id:await a.instance.reInitPublicClient(ws),await a.instance.reInitWalletClient(ws);break;case ho.id:await a.instance.reInitPublicClient(ho),await a.instance.reInitWalletClient(ho);break;case mo.id:await a.instance.reInitPublicClient(mo),await a.instance.reInitWalletClient(mo);break}}reInitPublicClient(t){console.log("reInitPublicClient chain:"+t),this.publicClient=_s({chain:t,transport:ys()})}reInitWalletClient(t){console.log("reInitWalletClient chain:"+t),this.walletClient=po({chain:t,transport:io(window.ethereum)})}async getAuthStatus(){let t=a.instance.walletAddress;try{return await a.instance.publicClient.readContract({address:ie.SAT_ADDRESS,abi:ie.SAT_ABI,functionName:"getAuthStatus",args:[t]})}catch(e){if(console.log("授权错误====》",e),e instanceof Error){let i=e.message;console.log("授权错误====》",i)}}}};var Kx=Laya.HttpRequest,Qt=class Qt{static requestGet(t,e,i=!1,n=!0,r=!1){return new Promise((o,s)=>{var l=Laya.Pool.getItem("HttpRequest");l||(l=new Kx),l.http.timeout=2e3,l.on(Laya.Event.COMPLETE,null,_),l.on(Laya.Event.ERROR,null,w),l.http.onreadystatechange=()=>{if(l.http.readyState===XMLHttpRequest.DONE){var E=l.http.status;E>=200&&E<400||(s(),v())}};let c=localStorage.getItem("TOX-COOKIE"+K.instance.walletAddress),u=["Content-Type","application/json"];c&&(u=[...u,"Authorization",c]);let m;t.startsWith("http")?(m=t+b(e),l.send(t,e,"post","json",u)):m=Qt.httpRoot+"/"+t+b(e),Qt.httpRoot!="https://api.phantomarena.co"&&fi.log("REQUEST_GET "+m,1),l.send(m,null,"get","json",u);function b(E){if(typeof E=="string")return E;let B="";for(let G in E)B+="&"+G+"="+E[G];return B}function _(E){E.code==="0"?o(E.data):(pe.instance.showErrorWord(parseInt(E.code)),s(E.code)),v()}function w(E,B){debugger;s(E),v()}function v(){l.off(Laya.Event.COMPLETE,null,_),l.off(Laya.Event.ERROR,null,w),Laya.Pool.recover("HttpRequest",l)}})}static startHeart(){Laya.stage.on(Laya.Event.BLUR,this,()=>{this.stopHeartInStage=!0,console.log("失去焦点, 停止心跳")}),Laya.stage.on(Laya.Event.FOCUS,this,()=>{this.stopHeartInStage=!1,console.log("获取焦点, 开始心跳")}),Laya.timer.loop(3e3,this,this.onHeart)}static async onHeart(){if(!Qt.needHeart||this.stopHeartInStage||this.stopHeartInRoom)return;let t=new Date().getTime();var e=await this.requestPost("wxgame/sys/ping",{},!0,!0),n=new Date().getTime()-t;y.intance.event(h.EVENT_Game_Delay,n);var r=e.time;L.instance.m_serverTime=r;var o=e.resChange;L.instance.playerDto.fightHeroPk=e.fightHeroPk;var s=e.itemChange,l=!1;o&&o.length>0&&(l=!0,L.instance.moneyInfoHander(o,!0,!1),y.intance.event(At.UPDATE_LOCAL_WALLET_LIST_EVENT),y.intance.event(h.REFRESH_ALL_WITHDRAW_DATA)),s&&s.length>0&&(l=!0,L.instance.itemsDataUpdataHandler(s,!0,!1)),e.redPoint&&(L.instance.redDotData=e.redPoint),l&&console.log("onHeart: data =============> ",e)}static requestPost(t,e,i=!1,n=!0,r=!1){let o=localStorage.getItem("TOX-COOKIE"+K.instance.walletAddress);return i&&!o?[]:new Promise((s,l)=>{var c=Laya.Pool.getItem("HttpRequest");c||(c=new Kx),c.http.timeout=1e4,c.once(Laya.Event.COMPLETE,null,b),c.once(Laya.Event.ERROR,null,_);let u=[];o&&n&&(u=[...u,"Authorization",o]);var m=Qt.seq+1;Qt.seq=m,X.Debug>0&&t!="wxgame/sys/ping"&&console.log(ge.GetLogTime+" "+m+" >>> HTTP_POST "+Qt.httpRoot+"/"+t+" "+JSON.stringify(e),o),t.startsWith("http")?c.send(t,e,"post","json",u):c.send(Qt.httpRoot+"/"+t,e,"post","json",u);async function b(v){if(X.Debug>0&&t!="wxgame/sys/ping"&&console.log(ge.GetLogTime+" "+m+" <<< hTTP_RCV data: "+JSON.stringify(v),1),v.errorCode==0||v.errorCode==="0")s(v);else{if(v.errorCode===10)ge.heroNotEnought();else if(v.errorCode===18)ge.titickNotEnought();else if(v.errorCode===26)ge.RemError();else if(v.errorCode!==29)if(v.errorCode===30)ge.NoHeroError(pe.instance.get(v.errorCode));else if(v.errorCode===32)ge.NoHeroError(pe.instance.get(v.errorCode));else if(v.errorCode===2||v.errorCode===21)ge.alertNoAll(pe.instance.get(v.errorCode));else if(v.errorCode===5)if(X.Debug==0){localStorage.setItem("TOX-COOKIE"+K.instance.walletAddress,"");var E=await K.instance.refreshToken();E&&Qt.requestPost(t,e,i,n)}else localStorage.setItem("TOX-COOKIE"+K.instance.walletAddress,""),pe.instance.showErrorWord(parseInt(v.errorCode));else v.errorCode===17?X.Debug==0?(localStorage.setItem("TOX-COOKIE"+K.instance.walletAddress,""),K.instance.signAndLogin(),pe.instance.showErrorWord(parseInt(v.errorCode))):(localStorage.setItem("TOX-COOKIE"+K.instance.walletAddress,""),pe.instance.showErrorWord(parseInt(v.errorCode))):v.errorCode===9?(Je.instance.close(),ge.commTipWithYes(pe.instance.get(v.errorCode))):v.errorCode===51?ge.commTipWithYes(pe.instance.get(v.errorCode)):r||pe.instance.showErrorWord(parseInt(v.errorCode),v.errorParams);l(v.errorCode)}w()}function _(v,E){console.log("errorHandler data: "+v,1),r||pe.instance.showErrorWord(500),l(v),w()}function w(){c.off(Laya.Event.COMPLETE,null,b),c.off(Laya.Event.ERROR,null,_),Laya.Pool.recover("HttpRequest",c)}})}};Qt.httpRoot=getServer(),Qt.needHeart=!0,Qt.stopHeartInRoom=!1,Qt.stopHeartInStage=!1,Qt.seq=0;var k=Qt;var F=class a{constructor(){this._inited=!1;this.stopAll=!1;this.heroReadyDic=new te;this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}get matchDto(){return this._matchDto}set matchDto(t){this._matchDto=t,t&&t.startTime-t.nowTime>0?this.stopAll=!0:this.stopAll=!1}setMatchRes(){this.heroReadyDic=new te;var t=this.roomDto.members.length,e=[],i=this.currArenaItem.mapid;if(this.heroReadyDic.get("map_"+i)==null){var i=a.instance.currArenaItem.mapid,n=C.instance.getMapImg(i);e.push(n);var r=C.instance.getMapPrefab(i);e.push(r),this.heroReadyDic.set("map_"+i,!0)}for(var o=0;o<t;o++){var s=this.roomDto.members[o];if(this.heroReadyDic.get(s.heroId+"_"+s.heroColor)==null){var l=R.intance.m_dicHeros.get(s.heroId),c=C.instance.getHeroSkRes(l.serialId,s.heroColor);e.push({url:c,type:Laya.Loader.SPINE}),this.heroReadyDic.set(s.heroId+"_"+s.heroColor,!0)}}e.length>0&&Laya.loader.load(e,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{})}onPreAssetPress1(t){}async checkMatchRankData(){if(this.reward==null){let t=await k.requestPost("wxgame/room/balanceInfo",{roomId:a.instance.matchDto.roomId});this.onGoMatchEndRank(t)}}onGoMatchEndRank(t){var e=t.rankList,i=t.reward,n=t.groupData;vt.instance.isMatching=!1,this.reward==null&&(a.instance.reward=i,H.intance.openModule(f.MatchEndRankView,[e,n]))}clearData(){this.roomDto=null,this.matchDto=null,this.reward=null,this.playerJoinDic=null,this.playerEndDic=null,this.heroReadyDic=null,this.currArenaItem=null,O.instance.clearData(),k.needHeart=!0,He.instance.playMusicByName(He.soundName_bg,".mp3"),We.instance.needPop=!0,Jt.instance.startShow()}};var Pt=class a{constructor(){}static judgePosition(t,e){let i=Math.atan2(e,t)*180/Math.PI;return i<0&&(i+=360),Math.floor(i)}static distancePoint(t,e,i,n){return Math.sqrt((t-i)*(t-i)+(e-n)*(e-n))}get2D_Distance(t,e){return Math.sqrt(Math.pow(Math.abs(t),2)+Math.pow(Math.abs(e),2))}static rollCharacterByDir(t,e,i,n){let r=i;return a.rollCharacter(t,e,r,n)}static rollCharacter(t,e,i,n){let r=i*(Math.PI/180);var o=t+n*Math.cos(r),s=e+n*Math.sin(r),l=F.instance.currArenaItem.mapid,c=R.intance.m_dicMaps.get(l),u=c.offset;return o<u?o=u:o>c.width-u&&(o=c.width-u),s<u?s=u:s>c.height-u&&(s=c.height-u),console.log(`新的坐标：X=${o}, Y=${s}`),[o,s]}static createDirectPath(t,e,i,n=40,r=25){for(var o=[],s=i*Math.PI/180,l=1;l<n;++l){var c=t,u=e+r*l,m=-(u-e)*Math.sin(s)+t,b=(u-e)*Math.cos(s)+e;o.push(m,b)}return o}static pointsBack(t,e){if(e<=0||!t||t.length<4)return t;for(var i=0,n=-1,r=-1,o=0;o<t.length;o+=2){var s=t[o],l=t[o+1];n>0&&r>0&&(i+=this.distancePoint(n,r,s,l)),n=s,r=l}if(i<e)return null;for(var c=t.concat(),u=0,m=0;c&&c.length>=4&&u<e;){var b=c.pop(),_=c.pop(),w=c[c.length-1],v=c[c.length-2];if(u+=this.distancePoint(v,w,_,b),m=u-e,m>0){var E=Math.atan2(w-b,v-_),B=E*180/Math.PI+90;E=B*Math.PI/180;var G=w+m,j=-(G-w)*Math.sin(E)+v,Z=(G-w)*Math.cos(E)+w;c.push(j,Z)}}return c}static createLinePath(t,e,i,n,r=25,o=0){var s=[],l=Math.atan2(n-e,i-t);l=(l*180/Math.PI-90)*Math.PI/180;for(var c=this.distancePoint(t,e,i,n)-o,u=0,m=0;c>u;){var b=t,_=e+r*m,w=-(_-e)*Math.sin(l)+t,v=(_-e)*Math.cos(l)+e;u=this.distancePoint(t,e,w,v),c>u&&s.push(w,v),m++}return o==0&&s.push(i,n),s}static rolePosTransform(t,e,i){var n=new Laya.Matrix;return n.rotate(Math.PI/180*(t.modelAngle-90)),n.translate(e.x,e.y),n.transformPoint(i)}static pointtInPolygon(t,e){for(var i=0,n=0;n<e.length;n++){var r=e[n],o=e[(n+1)%e.length];if(r.y!=o.y&&!(t.y<Math.min(r.y,o.y))&&!(t.y>=Math.max(r.y,o.y))){var s=(t.y-r.y)*(o.x-r.x)/(o.y-r.y)+r.x;s>t.x&&i++}}return i%2==1}static pointInPie(t,e,i,n,r,o){var s=Math.atan2(o.y-e,o.x-t)*180/Math.PI,l=this.distancePoint(t,e,o.x,o.y);return s>=i&&s<=n&&l<=r}static getRandInRound(t,e){return Math.floor(Math.random()*(e-t+1))+t}static getUnitVector(t){let i=t*(Math.PI/180),n=1*Math.cos(i),r=1*Math.sin(i);return new Laya.Point(n,r)}static subtract(t,e){let i=new Laya.Point;return i.x=t.x-e.x,i.y=t.y-e.y,i}};var oi=class oi{constructor(){this.arenaType=1;this.validEnemyList=[];this.gameWindowX=0;this.gameWindowY=0;this.isControl=!1}get gameMap(){return this._gameMap}set gameMap(t){this._gameMap=t}clearData(){this.gameMap=null,this.box_players=null,this.myHeroSpr=null,this.matchHeroSmallDic=null,this.matchHeroSprDic=null,this.matchHeroSprs=null,this.matchHeroDic=null,this.myPlayer=null,this.allOrders=null}static get instance(){return oi._instance==null&&(oi._instance=new oi),oi._instance}init(){this.validEnemyList=[]}insertValidList(t){this.isFInd(t,this.validEnemyList)||this.validEnemyList.push(t)}isFInd(t,e){var i=!1;(!t||!e||e.length<=0)&&(i=!1);for(let n=0;n<e.length;n++)if(e[n]==t)return!0;return i}isFIndIndex(t,e){var i=-1;(!t||!e||e.length<=0)&&(i=-1);for(let n=0;n<e.length;n++)e[n]==t&&(i=n);return i}removeValidListByValue(t){if(!(!t||!this.validEnemyList||this.validEnemyList.length<=0)){var e=this.isFIndIndex(t,this.validEnemyList);e!=-1&&this.validEnemyList.splice(e,1)}}initMatch(t,e){Laya.loader.load("scenes/match/MatchHeroSpr.lh").then(i=>{this.roleAniPrefab=i,this.createPlayers(t),e&&e(t)})}updateMatch(t,e){this.updatePlayers(),e&&e(t)}createPlayers(t){this.matchHeroDic=new te,this.matchHeroSprDic=new te,this.matchHeroSmallDic=new te,this.matchHeroSprs=[],this.allOrders||(this.allOrders=[]);let e=F.instance.matchDto.members.length;for(var i=0;i<e;i++){var n=F.instance.matchDto.members[i],r=new Laya.Image;r.anchorX=0,r.anchorY=0,r.skin="res/match1/img_point_1.png",t.img_smallMap.addChild(r),this.matchHeroSmallDic.set(n.id,r);let o=this.roleAniPrefab.create();o.dataSource=n,L.instance.playerDto.pid==n.id&&(this.myPlayer=n,r.skin="res/match1/img_point_2.png",this.setCurrentHero(o)),this.matchHeroDic.set(n.id,n),this.box_players.addChild(o),this.matchHeroSprs.push(o),this.allOrders.push(o),this.matchHeroSprDic.set(n.id,o)}}updatePlayers(){this.matchHeroSprs=[];let t=F.instance.matchDto.members.length;for(var e=0;e<t;e++){var i=F.instance.matchDto.members[e];let n=this.matchHeroSprDic.get(i.id);n.dataSource=i,L.instance.playerDto.pid==i.id&&(this.myPlayer=i,this.setCurrentHero(n)),this.matchHeroDic.set(i.id,i),this.matchHeroSprs.push(n)}}addPlayer(t){if(t.type==1){if(this.matchHeroSprs){if(L.instance.playerDto.pid==t.member.id){console.log("自己不处理 :"+t.member.id);return}let e=this.getRoleById(t.member.id);if(e)e.dataSource=t.member,e.alpha=1;else{let i=this.roleAniPrefab.create();i.dataSource=t.member,this.box_players.addChild(i),this.matchHeroSprs.push(i)}}}else this.removeRoleById(t.member.id)}onSendMove(t,e,i,n,r,o,s){if(L.instance.playerDto.pid==e){let l=new cp;l.time=t,l.speed=i,l.dire=n,l.x=r,l.y=o,l.area=s,vt.instance.sendData(l)}}onSendTargetMove(t,e,i,n,r,o=0){if(L.instance.playerDto.pid==e){let s=new _p;s.time=t,s.targetId=i,s.targetX=n,s.targetY=r,s.skillId=o,s.sourceId=e,vt.instance.sendData(s)}}onSendAnimation(t,e,i=-1,n=-1,r=-1){let o=new vp;o.skillId=t,o.type=e,o.targetId=i,o.param.set("newX",`${n}`),o.param.set("newY",`${r}`),vt.instance.sendData(o)}onRevAnimationPush(t){var e=oi.instance.getRoleById(t.attId);t.attId!=L.instance.playerDto.pid&&e.attack(t.skillId,!1,t.param)}onSendAttack(t,e,i){let n=new dp;n.targetId=t,n.attackType=e,n.skillId=i,vt.instance.sendData(n)}onRevMovePush(t){if(!(t==null||t.pid==L.instance.playerDto.pid)){var e=oi.instance.getRoleById(t.pid);e?e.onPushMoveData(t.time,t.speed,t.dire,t.x,t.y,t.area):console.log(t.pid+" sprite is null")}}onRevTargetMovePush(t){if(t.sourceId!=L.instance.playerDto.pid){var e=oi.instance.getRoleById(t.targetId);e?e.onPushTargetMoveData(t.time,t.targetX,t.targetY):console.log(t.targetId+" sprite is null")}}onRevAttackPush(t){var e=oi.instance.getRoleById(t.attPid);if(t.attPid!=L.instance.playerDto.pid){var i=R.intance.m_dicSkills.get(t.skill);i.type!=5&&e.attack(t.skill,!1)}var n=oi.instance.getRoleById(t.defPid);n.takeDamage(t,e);var r=this.matchHeroDic.get(t.attPid),o=this.matchHeroDic.get(t.defPid);if(r.score=t.attScore,o.score=t.defScore,t.defHp<=0){var r=this.matchHeroDic.get(t.attPid);r.kill++}y.intance.event(h.UPDATE_KILL_NUM)}sendRestoreData(){if(F.instance.reward==null){let t=new fp;vt.instance.sendData(t)}}onRevRestorePush(t){F.instance.matchDto=t,y.intance.event(h.EVENT_RESTORE_DATA),t&&t.startTime-t.nowTime<=0&&H.intance.disposeView(f.MatchReadyView)}getRoleById(t){let e;return this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==t){e=i;return}}),e}removeRoleById(t){var e;this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==t){e=i,i.speed=0,i.alpha=.3;return}})}getValidList(){return this.validEnemyList}playMusic(){He.instance.playMusicByURL("mp3/battle.mp3"),We.instance.needPop=!1}playSound(t){var e="";t==1?e="resources/music/pugong":t==2?e="resources/music/enemyHit":t==3&&(e="resources/music/dazhao"),He.instance.playSound(e+".wav",1)}setCurrentHero(t){t.isMe=!0;var e=this.myHeroSpr==null;this.myHeroSpr=t,oi.instance.moveGameWindow(!0),this.myHeroSpr.initBirth(e)}getAttackTarget(t){console.log("getAttackTarget");var e=t.distance,i=t.targetsType;if(i==1){let r=new Laya.Point(this.myHeroSpr.x,this.myHeroSpr.y),o=Pt.getUnitVector(this.myHeroSpr.roleDirection);var n=[];return this.matchHeroSprs&&this.matchHeroSprs.forEach(s=>{if(!s._isDead&&!s.isMe){var l=this.getEnemyDistance(s);if(l<=e){let c=new Laya.Point(s.x,s.y),u=Pt.subtract(c,r);u.x*o.x+u.y*o.y>0&&n.push(s)}}}),n}else if(i==2){let r,o=1e4;if(this.matchHeroSprs&&this.matchHeroSprs.forEach(s=>{if(!s._isDead&&!s.isMe){var l=this.getEnemyDistance(s);l<=e&&l<o&&this.canAttack(this.myHeroSpr,s)&&(r=s,o=l)}}),r)return[r]}return[]}getEnemyDistance(t){return Math.sqrt(Math.pow(t.x-this.myHeroSpr.x,2)+Math.pow(t.y-this.myHeroSpr.y,2))}canAttack(t,e){let i=new Laya.Vector2;i.x=e.x-t.x,i.y=e.y-t.y;let n=Pt.getUnitVector(this.myHeroSpr.roleDirection),r=Math.atan2(i.y,i.x)-Math.atan2(n.y,n.x);r<0&&(r+=2*Math.PI),r=r*180/Math.PI,console.log("angle 2: "+r);let o=90;return r<o||r>360-o}canTui(t,e){let i=new Laya.Vector2;i.x=e.x-t.x,i.y=e.y-t.y;let n=Pt.getUnitVector(this.myHeroSpr.roleDirection),r=Math.atan2(i.y,i.x)-Math.atan2(n.y,n.x);r<0&&(r+=2*Math.PI),r=r*180/Math.PI,console.log("angle 2: "+r);let o=45;return r<o||r>360-o}setMyHeroDirection(t){this.myHeroSpr&&(t!=-4?(this.myHeroSpr.myRoleDirection=t,this.myHeroSpr.speed=this.myHeroSpr.moveSpeed,this.myHeroSpr.inControl=!0,this.isControl=!0):(this.myHeroSpr.speed=0,this.myHeroSpr.inControl=!1,this.isControl=!1))}moveGameWindow(t=!1){if(this.myHeroSpr){this.gameWindowX=this.myHeroSpr.x-Laya.stage.width/2,this.gameWindowY=this.myHeroSpr.y-Laya.stage.height/2;var e=-this.gameWindowX,i=-this.gameWindowY,n=Laya.stage.width-this.gameMap.width,r=Laya.stage.height-this.gameMap.height;e>0?e=0:e<n?e=n:e=e,i>0?i=0:i<r?i=r:i=i,t?this.gameMap.pos(e,i,!0):Laya.Tween.to(this.gameMap,{x:e,y:i},500)}}};oi._instance=null;var O=oi;var pt=class pt{constructor(){this.resArr=["gameIcon/map/1001/img_map.jpg","gameIcon/map/1002/img_map.jpg",{url:"gameIcon/map/map_1001.lh",type:Laya.Loader.HIERARCHY},{url:"gameIcon/map/map_1002.lh",type:Laya.Loader.HIERARCHY},"res/common/comm_bg/img_com_bg.jpg","res/common/comm/img_bg_large.png","res/common/comm/img_bg_medium.png","res/common/comm/img_bg_small.png",{url:"res/common.atlas",type:Laya.Loader.ATLAS},{url:"gameIcon/effect/match/beiji/spine.sk"},{url:"gameIcon/effect/match/dunpai/spine.sk"},{url:"gameIcon/effect/ruchang/effect1.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect2.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect3.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/hua/effect.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_3.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_4.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_5.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/diquan/img_6.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_4.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_5.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/baoqi/img_6.skel",type:Laya.Loader.SPINE},{url:"scenes/mainView/MainScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/shop/ShopScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/hero/MyHeroScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/Match.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchHeroSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/DamageNumber.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/EnterRoomSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/notice/TxtLoadingView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/notice/TxtNoticeView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/BarrageSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/CreateRoomDialog.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/EnterRoomView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndRankView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchReadyView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndView.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/closeBtn.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/defaultButton.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/DropBox.lh",type:Laya.Loader.HIERARCHY},{url:"resources/sound/destroy.wav",type:Laya.Loader.BUFFER},{url:"resources/sound/hit.wav",type:Laya.Loader.BUFFER}];this.m_arrPreResource=["config/spot.json","config/scene.json"];this.m_arrInitResource=["config/general.json","config/head.json","config/iconBadge.json","config/country.json","config/expression.json","config/fontColor.json","config/variable.json","config/equip.json","config/shop.json","config/union.json","config/hero.json","config/skill.json","config/buff.json","config/item.json","config/arena.json","config/arenaType.json","config/node.json","config/map.json","config/level.json","config/welfarebag.json","config/mailmessage.json","config/currencyAddress.json","config/aCoin.json","config/coinAddress.json","config/buyHeroes.json","config/puzzleExchange.json","config/DropCashAddress.json"];this.m_objModuleReource={FindScene:["res/atlas/find.atlas"],MainScene:[],ShopScene:[],RankScene:[],GetMatScene:[],OpenGameScene:[],ScholarshipScene:[],FriendScene:[],CommentDialog:["res/atlas/comment.atlas"],GuideView:["res/atlas/guide.atlas","res/atlas/ShopView.atlas","config/newplayer.json"],ShareView:["res/atlas/share.atlas"],SelectHeadDialog:[],UnionApplyDialog:["config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json"],GuildScene:["res/atlas/union.atlas","config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json","config/guild_apply.json","config/guild_contrubute.json"],UnionWarScene:["res/atlas/unionWar.atlas","config/resource_node.json"],HeroScene:["res/atlas/hero.atlas","config/hero_lv.json","config/hero_attup.json","res/atlas/equip.atlas"],AFKBattleScene:["res/atlas/battle.atlas"],ArenaScene:["res/atlas/Arena.atlas"],MailScene:[],KnapsackScene:["res/atlas/mainUI1.atlas"],UnionScene:["res/union1.atlas"]};this.m_objModuleViews={NoServerView:"scenes/createRole/NoServer.lh",CreateLoginView:"scenes/createRole/CreateLoginView.lh",ChangeHeadDialog:"scenes/createRole/ChangeHeadDialog.lh",HeroGetDialog:"scenes/shop/HeroGetDialog.lh",ItemGetDialog:"scenes/item/ItemGetDialog.lh",RewardGetDialog:"scenes/item/RewardGetDialog.lh",KnapsackTipDialog:"scenes/item/KnapsackTipDialog.lh",SelectHeadDialog:"scenes/createRole/SelectHeadDialog.lh",TxtNoticeView:"scenes/notice/TxtNoticeView.lh",NoticeDialog:"scenes/notice/NoticeDialog.lh",HelpDialog:"scenes/notice/HelpDialog.lh",ChampDetailDialog:"scenes/asset/ChampDetailDialog.lh",ChampRecordDialog:"scenes/asset/ChampRecordDialog.lh",RoleInfoDialog:"scenes/createRole/RoleInfoDialog.lh",RemGetDialog:"scenes/createRole/RemGetDialog.lh",CreateRoomDialog:"scenes/mainView/CreateRoomDialog.lh",EnterRoomView:"scenes/mainView/EnterRoomView.lh",InputPwdDialog:"scenes/mainView/InputPwdDialog.lh",HeroDetailDialog:"scenes/hero/HeroDetailDialog.lh",MatchEndRankView:"scenes/match/MatchEndRankView.lh",UnionMemberView:"scenes/union/UnionMemberView.lh",UnionListView:"scenes/union/UnionListView.lh",CreateSubUnionView:"scenes/union/CreateSubUnionView.lh",ChangeUnionIconDialog:"scenes/union/ChangeUnionIconDialog.lh",MySubUnionView:"scenes/union/MySubUnionView.lh",UnionMemberApplyView:"scenes/union/UnionMemberApplyView.lh",UnionReferralView:"scenes/union/UnionReferralView.lh",UnionTransferView:"scenes/union/UnionTransferView.lh",TicketTransferView:"scenes/union/TicketTransferView.lh",HeroTransferView:"scenes/hero/HeroTransferView.lh",MatchReadyView:"scenes/match/MatchReadyView.lh",MatchEndView:"scenes/match/MatchEndView.lh",GameSettingLanguageDialog:"scenes/gameSetting/GameSettingLanguageDialog.lh",SkillTipDialog:"scenes/hero/SkillTipDialog.lh",TransferRecordDialog:"scenes/hero/TransferRecordDialog.lh",BaseAlertDialog:"scenes/baseAlert/BaseAlertDialog.lh",MatchConfimDialog:"scenes/baseAlert/MatchConfimDialog.lh",CreateSubWalletDialog:"scenes/scholarship/CreateSubWalletDialog.lh",WalletChooseHeroDialog:"scenes/scholarship/WalletChooseHeroDialog.lh",WalletChoosePropsDialog:"scenes/scholarship/WalletChoosePropsDialog.lh",EmployInfoDialog:"scenes/scholarship/EmployInfoDialog.lh",HireDetailDialog:"scenes/asset/HireDetailDialog.lh",ProxyDetailDialog:"scenes/asset/ProxyDetailDialog.lh",WithDrawRecordDialog:"scenes/asset/WithDrawRecordDialog.lh",RentalRecordDialog:"scenes/scholarship/RentalRecordDialog.lh",PrivateChatDialog:"scenes/friend/PrivateChatDialog.lh",AirdropRecordDialog:"scenes/asset/AirdropRecordDialog.lh"};this.m_objConfigReource={};this.m_commonResource=new te;this.loadingView=Laya.Browser.window.loadingView;this.ii=100;this.baseUrl="https://cdn-5ejmbrg9nhxc.vultrcdn.com/hero/";if(pt._instance)throw new Error("LayerManager是单例,不可new.");pt._instance=this}static get instance(){return pt._instance==null&&(pt._instance=new pt),pt._instance}init(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),this.initGameLanguage()}initGameLanguage(){pt.GameLanguage_URL="config/language.json",Laya.loader.load(pt.GameLanguage_URL,Laya.Handler.create(this,this.initGameResource))}initGameResource(t){if(t==null)return;let e=pt.instance.getResBySetURL(pt.GameLanguage_URL);d.instance.initLanTypes(e.data),Laya.loader.clearRes(pt.GameLanguage_URL),this.onConfigLoaded()}onError(t){}onConfigLoaded(){let t=new ya;t.ID=4,t.Event="加载语言包信息",Se.instance.sendCustumEvent(4,null,t),X.ignoreLang||(L.instance.m_strLanguage=d.instance.getLanIdByType(X.User_Lan)),this.m_UILang="config/lang_english"+L.instance.m_strLanguage+".json",this.m_NomalLang="config/english"+L.instance.m_strLanguage+".json",this.m_NomalLang1="config/english1.json",this.m_ErrorLang="config/error"+L.instance.m_strLanguage+".json",this.m_arrPreResource.push(this.m_UILang),this.m_arrPreResource.push(this.m_NomalLang),this.m_arrPreResource.push(this.m_NomalLang1),this.m_arrPreResource.push(this.m_ErrorLang),this.initResourceURL(this.m_arrPreResource,!0),this.initResourceURL(this.m_arrInitResource,!0),this.addFont1()}addFont1(){Laya.loader.load("res/font/CookieRun Regular.otf",Laya.Loader.TTF).then(()=>{this.loadDemoResource()})}loadDemoResource(){Laya.loader.load(this.resArr,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{de.instance.init(),O.instance.damageNumPrefab=Laya.loader.getRes("scenes/match/DamageNumber.lh"),Je.instance.enterRoomPrefab=Laya.loader.getRes("scenes/mainView/EnterRoomSpr.lh"),Je.instance.barrageSprPrefab=Laya.loader.getRes("scenes/mainView/BarrageSpr.lh"),O.instance.roleAniPrefab=Laya.loader.getRes("scenes/match/MatchHeroSpr.lh"),O.instance.ruchangEffects=[Laya.loader.getRes("gameIcon/effect/ruchang/effect1.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect2.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect3.skel")],O.instance.huaEffect=Laya.loader.getRes("gameIcon/effect/hua/effect.skel"),O.instance.beijiTemplet=Laya.loader.getRes("gameIcon/effect/match/beiji/spine.sk"),O.instance.dunpaiTemplet=Laya.loader.getRes("gameIcon/effect/match/dunpai/spine.sk"),O.instance.diquanEffect3=Laya.loader.getRes("gameIcon/effect/diquan/img_3.skel"),O.instance.diquanEffect4=Laya.loader.getRes("gameIcon/effect/diquan/img_4.skel"),O.instance.diquanEffect5=Laya.loader.getRes("gameIcon/effect/diquan/img_5.skel"),O.instance.diquanEffect6=Laya.loader.getRes("gameIcon/effect/diquan/img_6.skel"),O.instance.baoqiEffect4=Laya.loader.getRes("gameIcon/effect/baoqi/img_4.skel"),O.instance.baoqiEffect5=Laya.loader.getRes("gameIcon/effect/baoqi/img_5.skel"),O.instance.baoqiEffect6=Laya.loader.getRes("gameIcon/effect/baoqi/img_6.skel");var t=O.instance.roleAniPrefab.create();console.log(" ================ roleAniPrefab: "+t),this.onLoadThreeDimen()})}onLoadThreeDimen(){Laya.loader.load(this.m_arrPreResource,Laya.Handler.create(this,this.onPreAssetLoaded),Laya.Handler.create(this,this.onPreAssetPress2,null,!1))}onPreAssetPress1(t){this.va=(t*100*.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetPress2(t){this.va=(t*100*.5+.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetLoaded(t){if(!t)return;let e=Laya.Browser.now();ir.instance.initSpotCfgData(),this.initResourceURL(this.m_objModuleReource),this.initResourceURL(this.m_objConfigReource),Se.instance.sendCustumEvent(5),R.intance.preInit(),this.setGlobalLanguage(),Se.instance.sendCustumEvent(6),y.intance.event(h.EVENT_BACK_TO_LOGIN),ye.intance.initPreload(),this.loadingView&&this.loadingView.loading(100),console.log("-----------------------preload-time:"+(Laya.Browser.now()-e))}setGlobalLanguage(){let t=pt.instance.getResByURL(this.m_NomalLang);d.instance.initConfigLan(t.data);let e=pt.instance.getResByURL(this.m_NomalLang1);d.instance.initConfigLan1(e.data);let i=pt.instance.getResByURL(this.m_UILang);d.instance.initUILan(i.data);let n=pt.instance.getResByURL(this.m_ErrorLang);pe.instance.initErrData(n.data),this.clearResUrlByRoot(this.m_UILang,!0),this.clearResUrlByRoot(this.m_NomalLang,!0),this.clearResUrlByRoot(this.m_NomalLang1,!0),this.clearResUrlByRoot(this.m_ErrorLang,!0)}initResourceURL(t,e=!1){if(t instanceof Array)this.setResURLArr(t,e);else if(t instanceof Object)for(let i in t)this.setResURLArr(t[i],e)}setResURLArr(t,e){let i,n;for(let r=0;r<t.length;r++)e?(this.m_commonResource.set(t[r],!0),n=this.setResURL(t[r]),i=this.getTypeFromUrl(n),t[r]={url:n,type:i,size:1,priority:1}):this.m_commonResource.get(t[r])?(t.splice(r,1),r--):(n=this.setResURL(t[r]),i=this.getTypeFromUrl(n),t[r]={url:n,type:i,size:1,priority:1})}getTypeFromUrl(t){let{ext:e,typeId:i,main:n,loaderType:r}=Laya.Loader.getURLInfo(t);pt._extReg.lastIndex=t.lastIndexOf(".");let o=pt._extReg.exec(t);return o&&o.length>1?o[1].toLowerCase():"text"}setResURL(t){return t}clearResUrlByRoot(t,e=!1){let i=t;Laya.loader.clearRes(i)}hasFormatEffectUrl(t){return t.indexOf("effect/")>=0}setItemResURL(t){return t&&t.hasOwnProperty("item_img")?this.setResURL("icon/"+t.item_img+".png"):""}setThreeDimenUrl(t){return t?this.setResURL("threeDimen/"+t):""}getThreeDimenUrl(t){let e=this.setResURL("threeDimen/"+t);return Laya.Loader.getRes(e)}getResByURL(t){let e=pt.instance.setResURL(t);return Laya.Loader.getRes(e)}getResBySetURL(t){return Laya.Loader.getRes(t)}loadModuleUrl(t,e=null,i=null,n=1,r=!0){console.log("loadModuleUrl m_strName: "+t),this.ii++;let o=pt.instance.m_objModuleReource[t];if(o==null||o.length<1){e.run();return}Laya.loader.load(o,Laya.Handler.create(this,this.loadItemComplete,[e,o]),Laya.Handler.create(this,this.onLoadProgress,[t],!1),i,n,r,this.ii.toString())}loadItemComplete(t,e){this.usedUrlDic||(this.usedUrlDic=new te);for(let i in e){let n=e[i].url,r=this.usedUrlDic.get(n);r?this.usedUrlDic.set(n,++r):this.usedUrlDic.set(n,1)}t.run()}clearModuleUrl(t){console.log("clearModuleUrl m_strName: "+t);let e=pt.instance.m_objModuleReource[t];for(let i in e){let n=e[i].url;if(this.usedUrlDic){let r=this.usedUrlDic.get(n);r-=1,r<1?(this.usedUrlDic.remove(n),Laya.loader.clearRes(n)):this.usedUrlDic.set(n,r)}}}onLoadProgress(t,e){}loadResource(t,e=null,i=null,n=null,r=1,o=!0){Laya.loader.load(t,e,i,n,r,o)}getNodeIcon(t){return this.setResURL("gameIcon/node/img_"+t+".png")}getCountryIcon(t){return this.setResURL("gameIcon/country/img_"+t+".png")}getChestIcon(t){return this.setResURL("gameIcon/items/chest/img_"+t+".png")}getChestBigIcon(t){return this.setResURL("gameIcon/items/chestBig/img_"+t+".png")}getHeroEggIcon(t){return this.setResURL("gameIcon/hero/heroEgg/img_"+t+".png")}getHeroEggBigIcon(t){return this.setResURL("gameIcon/hero/heroEggBig/img_"+t+".png")}getHeroHeadIcon(t){return this.setResURL("gameIcon/hero/heroHead/img_"+t+".png")}getHeroQuality(t){return this.setResURL("gameIcon/hero/heroQuality/img_"+t+".png")}getHeroBackIcon(t){return this.setResURL("gameIcon/hero/heroDetail/img_hero_di_"+t+".png")}getHeroFrontIcon(t){return this.setResURL("gameIcon/hero/heroDetail/img_hero_"+t+".png")}getItemIcon(t){return this.setResURL("gameIcon/items/item/img_"+t+".png")}getItemBgIcon(t){return this.setResURL("gameIcon/items/itemBg/img_"+t+".png")}getItemBigIcon(t){return this.setResURL("gameIcon/items/itemBig/img_"+t+".png")}getItemQualityIcon(t){return this.setResURL("gameIcon/items/itemQuality/img_"+t+".png")}getMoneyIcon(t){return this.setResURL("gameIcon/items/money/img_"+t+".png")}getAttrIcon(t){return this.setResURL("gameIcon/attr/img_attr_"+t+".png")}getSkillIcon(t,e=!1){let i;return e?i=this.setResURL("gameIcon/skill/skills/img_big_"+t+".png"):i=this.setResURL("gameIcon/skill/skills/img_"+t+".png"),i}getMatchSkillIcon(t){return this.setResURL("gameIcon/skill/matchSkills/img_"+t+".png")}getPlayerIcon(t){return parseInt(t)>0?this.setResURL("gameIcon/head/headCircle/img_"+t+".png"):t}getUnionIcon(t){return parseInt(t)>0?this.setResURL("gameIcon/union/badge/img_trade_"+t+".png"):t}getUnionLvIcon(t){return this.setResURL("gameIcon/union/lvIcon/img_trade_"+(t>3?4:t)+".png")}getUnionLvDiIcon(t){return this.setResURL("gameIcon/union/lvIcon/img_trade_di_"+(t>3?4:t)+".png")}getEmoji(t,e){return this.setResURL("gameIcon/emoji/tab"+t+"/img_"+e+".png")}getFontColor(t){return this.setResURL("gameIcon/emoji/img_color_"+t+".png")}getSceneBgUrl(t){return"scene/"+t+".jpg"}clearSKinUrl(t){for(let e in t)t[e]instanceof String&&t[e].indexOf("skincolor")==-1&&Laya.loader.clearRes(t[e]);t=[]}getFunctionIcon(t){return this.setResURL("icon/functionIcon/"+t+".png")}getNewFunIcon(t){return this.setResURL("icon/newFunIcon/"+t+".png")}getSoundURL(t,e=".ogg"){let i;return i=this.setResURL("mp3/"+t+e),i}getSoundURLogg(t){let e;return e=this.setResURL("mp3/"+t),e}getSceneUrl(t){return"scene/sceneBg/"+t+".jpg"}getMianSysIcon(t){return this.setResURL("icon/mainSysIcon/btn_"+t+".png")}getEffectUrl(t){return this.setResURL("effect/"+t+".json")}getLoadingUrl(t){return this.setResURL("effect/"+t)}getGuangImg(t){return this.setResURL("swf/"+t+".png")}getGuildProofBg(t){return this.setResURL("scene/guild/proof/"+t+"/1.png")}getGuildProofHots(t){return this.setResURL("scene/guild/proof/"+t+"/"+t+"/"+t+".json")}getShareImgUrl(t,e=!1,i=!1){let n;return i?t:(t=t+".jpg",e?n="https://mutantbox.8686c.com/16/qa/common/share/"+t:n="https://cdn.test.com/16/qa/common/share/"+t,n)}getHeadUrl(t){return"common/common_icon/"+t+".png"}getMapImg(t){return"gameIcon/map/"+t+"/img_map.jpg"}getMapPrefab(t){return"gameIcon/map/map_"+t+".lh"}clearCache(){}getHeroHeadRes(t,e){return X.Res==0?"gameIcon/hero/heroHead/img_"+t+".png":this.baseUrl+`${t}/${e}.png`}getHeroSkRes(t,e){return X.Res==0?`gameIcon/hero/heroSk/${t}/img_hero.skel`:this.baseUrl+`${t}/${e}/img_hero.skel`}};pt._extReg=/\.(\w+)\??/g;var C=pt;var dn=class dn{constructor(){this._list=[];this._isNoticing=!1;this._isListener=!1}static get instance(){return dn._instance||(dn._instance=new dn),dn._instance}notice(t){this._isNoticing?this._isListener||(this._isListener=!0,this._list.push(t),Laya.timer.loop(dn.Tip_Interval,this,this.onInterVal)):(this._list.push(t),this.noticeOne())}noticeOne(){var t=C.instance.m_objModuleViews.TxtNoticeView;let e;Laya.loader.load(t).then(i=>{if(!i){console.log("noticeOne : "+t+"  res is null");return}e=Laya.Pool.getItemByCreateFun("txtNotice",i.create,i);let n=this._list.shift();e.notice(n),Laya.stage.addChild(e),e.x=P.instence.stageWidth*.5-e.width*.5,e.y=P.instence.stageHeight*.5-e.height*.5,Laya.Tween.to(e,{y:e.y-250,alpha:.5},1e3,null,Laya.Handler.create(this,this.onFinish,[e]),1e3)})}onFinish(t){t&&(t.visible=!1,t.removeSelf())}onInterVal(){this._list.length>=1?this.noticeOne():(this._isNoticing=!1,this._isListener=!1,Laya.timer.clear(this,this.onInterVal))}};dn.Tip_Interval=1e3;var M=dn;var pe=class a{constructor(){this._curErrTxt=""}static get instance(){return a._instance||(a._instance=new a),a._instance}initErrData(t){this.errData=t}get(t){return this.errData[t]?this.errData[t].words:(console.warn("服务端错误码语言包未配表 错误码："+t),t)}showErrorWord(t,...e){var i=this.getLanguage2(t,e);M.instance.notice(i)}getLanguage2(t,e){if(this.errData&&this.errData[t]){let i=this.errData[t].words;if(i&&i!="")return this._curErrTxt=d.instance.replacePlaceholder(i,e),this._curErrTxt}return this._curErrTxt=d.instance.replacePlaceholder(t+"",e),this._curErrTxt}showErrByString(t,e="#ff0000"){this._curErrTxt=t;let i=new Laya.Label(this._curErrTxt);i.width=500,i.align="center",i.height=40,i.fontSize=26,i.color=e,i.mouseEnabled=!1,i.strokeColor="#000000",i.stroke=.5,Laya.stage.addChild(i),i.x=(Laya.stage.width-i.width)/2,i.y=(Laya.stage.height-i.height)/2,Laya.Tween.to(i,{y:i.y-100,alpha:0},500,null,Laya.Handler.create(this,this.completeHandler,[i]),1e3)}completeHandler(t){t&&t.parent&&t.parent.removeChild(t)}dispose(){this.errData=null}};var Qe=class{};Qe.FUNID_MALL="1004",Qe.FUN_ID_TAGGARDEN="2005",Qe.FunID_WORK="1006",Qe.FUN_ID_BARGAIN_SHOP="1007",Qe.TRAVEL_HARD="1012",Qe.TRAVEL_REWARD="3006",Qe.FUNID_TUJIAN="2105",Qe.FUN_ID_PARTY="7003",Qe.FUN_ID_FB="9010",Qe.FUN_ID_PET="9004",Qe.FUN_ID_TURNTABLE="9001",Qe.FUN_ID_GASHPOEN="9012",Qe.FUN_ID_SHOPEXCHANGE="2104",Qe.FUN_ID_TIME_STAGE="9014",Qe.FUN_ID_DRAWCARD_PVP="1008613",Qe.FUN_ID_PHONE="2004",Qe.FUN_ID_DS="9017",Qe.FUN_ID_BUY_PS="9030",Qe.FUN_ID_DESTINY="3020",Qe.FUN_ID_ACTIVITY_SHOP="9026",Qe.FUN_ID_WORKSHOP_RECYCLE="3002",Qe.FUN_ID_WORKSHOP_COLOR="3004",Qe.FUN_ID_WORKSHOP_UPGRADE="3003",Qe.FUN_ID_GUILD="1010",Qe.FUN_ID_VIP="9022",Qe.FUN_ID_MONTHCARD="9100";var Tp=class{constructor(){this.bafflesInfo=[[330,740,9],[294,113.95,1],[712.95-80,343.45,3],[1251.35,125.95,7]];this.redHotStateMap=new te;this.openSystem=new te;this.m_dicSystemInfoCfg=new te,this._openTypeList=new te,this.parseJson()}hasRedState(t){let e=this.redHotStateMap.get(t+"");return e&&e.redState>0?e.redState:0}initSystemOpen(t){this.openSystem=new te;for(let e=0;e<t.length;e++)this.openSystem.set(t[e],!0),t[e]+""==Qe.FUN_ID_PHONE.toString()}parseJson(){let t=C.instance.getResByURL("config/system_open.json"),e;for(let i in t)if(e=t[i],e){this.m_dicSystemInfoCfg.set(e.functionID,e);let n=this._openTypeList.get(e.open_type);n||(n=[],this._openTypeList.set(e.open_type,n)),n.push(e)}}getSystemsByType(t){let e=[];for(let i=0;i<this.m_dicSystemInfoCfg.values.length;i++){let n=this.m_dicSystemInfoCfg.values[i];n.positionID==t&&e.push(n)}return e}getLockFun(t,e){let i=this._openTypeList.get(t);for(let n of i)if(n.parameter1+""==e+"")return n;return null}getBuildSystem(){}isOpen(t){return X.buildClickState?!0:(t instanceof String&&(t=parseInt(t+"")),this.openSystem.get(t)!=null)}};var Sp=class{constructor(){this._vipLv=0}isReceive(t){for(let e of this.isRewards)if(e+""==t.toString())return!0;return!1}addIsReceive(t){this.isReceive(t)||this.isRewards.push(t)}get vipLv(){return this._vipLv}set vipLv(t){this._vipLv!=t&&(this._vipLv=t)}};var Cp=class{constructor(){this.m_dicItemList=new te,this.m_dicTypeList=new te,this.m_dicSubTypeList=new te,this.m_dicBackList=new te}initData(t){this.m_dicItemList=new te,this.m_dicTypeList=new te,this.m_dicSubTypeList=new te,this.m_dicBackList=new te;let e;for(let n=0;n<t.length;n++){e=new Fe;var i=t[n];e.m_iId=i.id,e.m_iNum=i.count,e.m_iNum>0&&this.pushItem(e)}console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}getCountById(t,e=!0){return R.intance.m_dicItems.get(t)==null?0:this.getItemCountById(t,e)}pushItem(t){this.m_dicItemList.set(t.m_iId,t),this.m_dicTypeList.get(t.type)==null&&this.m_dicTypeList.set(t.type,new te),this.m_dicSubTypeList.get(t.subType)==null&&this.m_dicSubTypeList.set(t.subType,new te),this.m_dicBackList.get(t.backType)==null&&this.m_dicBackList.set(t.backType,new te),this.m_dicTypeList.get(t.type).set(t.m_iId,t),this.m_dicSubTypeList.get(t.subType).set(t.m_iId,t),this.m_dicBackList.get(t.backType).set(t.m_iId,t)}removeItem(t){this.m_dicItemList.remove(t.m_iId),this.m_dicTypeList.get(t.type).remove(t.m_iId),this.m_dicSubTypeList.get(t.subType).remove(t.m_iId),this.m_dicBackList.get(t.backType).remove(t.m_iId)}updateData(t,e=!1,i=!0){console.log("updateData: ",t,e,i);let n=[],r=!1,o;for(let s=0;s<t.length;s++){t[s]instanceof Array?(o=new Vi,o.id=t[s][0],o.count=t[s][1]):o=t[s];let l=this.m_dicItemList.get(o.id);l==null&&(l=new Fe(o.id),this.pushItem(l),l.m_bNew=!0),e?l.m_iNum=o.count:(l.newAddCnt=o.count,l.m_iNum=l.m_iNum+o.count),n.push(l.m_iId),l.m_iNum<=0&&this.removeItem(l),l.newAddCnt>0&&We.instance.needPop&&i&&(We.instance.addItem(l),r=!0)}r&&We.instance.needPop&&We.instance.autoPop&&Jt.instance.startShow(),n.length>0&&y.intance.event(h.PACKAGE_UPDATE_ITEM,[n])}getItemById(t){return this.m_dicItemList.get(t)}getItemsBySubType(t){let e=this.m_dicSubTypeList.get(t);return e==null&&(e=[]),e}getListByType(t){let e=[];return this.m_dicTypeList.get(t)&&(e=this.m_dicTypeList.get(t).values.slice()),e.sort(this.sortOnQa),e}getBackByType(t){let e=[];return this.m_dicBackList.get(t)&&(e=this.m_dicBackList.get(t).values.slice()),e.sort(this.sortOnQa),e}getListBySubType(t){let e=[];return this.m_dicSubTypeList.get(t)&&(e=this.m_dicSubTypeList.get(t).values.slice()),e.sort(this.sortOnQa),e}sortOnQa(t,e){let i=t.itemItem.sort,n=e.itemItem.sort;return i<n?-1:i>n?1:0}getItemCountById(t,e=!0){let i=this.getItemById(t);return i?i.m_iNum:0}};var kp=class a{constructor(t){this._addNewFList=[];this.delayShowNewFun=!1}static get instance(){return a._instace==null&&(a._instace=new a(new kv)),a._instace}addNewOpenFun(t){this._addNewFList=this._addNewFList.concat(t),this.delayShowNewFun||this.showNewFun()}setDelayShowFun(t){this.delayShowNewFun!=t&&(this.delayShowNewFun=t,t||this.showNewFun())}showNewFun(){if(this._addNewFList.length>0){let t=this._addNewFList.pop(),e=L.instance.systemOpenModel.m_dicSystemInfoCfg.get(t.toString());e?e.if_open.toString()=="1"||e.if_pop.toString()!="1"?this.showNewFun():this.swithToNewFun(t):this.showNewFun()}}swithToNewFun(t,e=!1){let i=L.instance.systemOpenModel.m_dicSystemInfoCfg.get(t);if(i){if(i.if_open.toString()=="1"){M.instance.notice("system_open.json-->funId:"+i.functionID+"is close");return}(i.if_pop.toString()=="1"||e)&&y.intance.event(h.EVENT_OPEN_MODULE,[f.NewFunUnLockDialog,t])}}hasUnlockFunction(t,e=!0){let i=L.instance.systemOpenModel.m_dicSystemInfoCfg.get(t+""),n=L.instance.systemOpenModel.isOpen(parseInt(t));return!n&&e&&M.instance.notice(d.instance.getLanguage(i.lock_word)),n}},kv=class{};var hn=class{constructor(){}ReadShort(t){let e=new Uint8Array(t.buffer),i=e[t.pos]<<8,n=e[t.pos+1],r=i|n;return t.pos+=2,r}ReadInt(t){let e=new Uint8Array(t.buffer),i=e[t.pos]<<24|e[t.pos+1]<<16|e[t.pos+2]<<8|e[t.pos+3];return t.pos+=4,i}ReadByte(t){return t.getByte()}ReadString(t){let e=this.ReadShort(t);return e==0?"":t.getUTFBytes(e)}ReadBytes(t,e){let i=t.buffer.slice(t.pos,e);return new Laya.Byte(i)}dispose(){}};var Ap=class{constructor(){this.writeByt=new Laya.Byte}writeByte(){}writeShort(t){this.writeByt.writeByte(t>>8),this.writeByt.writeByte(t)}writeInt(t){this.writeByt.writeByte(t>>24),this.writeByt.writeByte(t>>16),this.writeByt.writeByte(t>>8),this.writeByt.writeByte(t)}writeString(t){if(t.length==0){this.writeShort(0);return}let i=new Laya.Byte;i.writeUTFBytes(t),this.writeShort(i.length),this.writeByt.writeUTFBytes(t)}dispose(){}};var go=class a{constructor(){this.cookie="####1.0.0#0#";this.encryptKey="FFIYD#^3LB954JB90fzj*(d)sO7";this._curSendIndex=-1}static get instance(){return a._instance||(a._instance=new a),a._instance}setLoginCookie(){this.cookie="####1.0.0#"+X.Login_UDID+"#"+X.UserAgent}parseCookie(t,e,i,n="1.0.0"){let r=this.encryptKey+e+t,o=qE(r);n=L.instance.M_S_VersionServer;let s=o+"#"+t+"#"+e+"#"+i+"#"+n+"#"+this._curSendIndex+"#1#"+X.Login_UDID+"#"+X.UserAgent;this.cookie=s}reflashCookie(){this.parseCookie(this.m_time,this.m_roleID,this.m_accout)}analyClient(t,e){let i=new Ap;i.writeString(this.cookie),i.writeShort(t);let n=this.analyData[t];return n&&n.length>0&&this.writeByt(n,e,i),i.writeByt}writeByt(t,e,i){for(let n in t){let r=e[n];if(t[n].indexOf("7/")!=-1){i.writeShort(r.length);let o=this.analyData[String(t[n]).split("7/")[1]];if(o)for(let s in r)this.writeByt(o,r[s],i)}else if(t[n]=="1")i.writeInt(r);else if(t[n]=="2")i.writeShort(r);else if(t[n]=="3")i.writeString(r);else if(t[n]=="4"||t[n]=="5"||t[n]=="6"){i.writeShort(r.length);for(let o in r)t[n]=="4"?i.writeInt(r[o]):t[n]=="5"?i.writeShort(r[o]):t[n]=="6"&&i.writeString(r[o])}}}analyServer(t){let e=new hn,i=e.ReadShort(t),n=[i],r=this.analyData[i];return r&&r.length>0&&(n=n.concat(this.readByt(r,t,e))),n}analyCookie(t=""){console.log("RECE_COOKIE: "+t,1);let e=t.split("#");this.m_time=e[0],this.m_roleID=e[1],this.m_accout=e[2];let i=e[3];this._curSendIndex=i,this._curSendIndex++,console.log("cookie:_time:"+this.m_time+"  _roleID："+this.m_roleID+"	  _accout："+this.m_accout),this.parseCookie(this.m_time,this.m_roleID,this.m_accout),L.instance.timeStamp=parseFloat(this.m_time)}readByt(t,e,i){let n=[];for(let r in t)if(t[r].indexOf("7/")!=-1){let o=i.ReadShort(e),s=this.analyData[String(t[r]).split("7/")[1]],l=[];if(s&&o>0)for(let c=0;c<o;c++)l.push(this.readByt(s,e,i));n.push(l)}else if(t[r]=="1")n.push(i.ReadInt(e));else if(t[r]=="2")n.push(i.ReadShort(e));else if(t[r]=="3")n.push(i.ReadString(e));else if(t[r]=="4"||t[r]=="5"||t[r]=="6"){let o=i.ReadShort(e),s=[];for(let l=0;l<o;l++)t[r]=="4"?s.push(i.ReadInt(e)):t[r]=="5"?s.push(i.ReadShort(e)):t[r]=="6"&&s.push(i.ReadString(e));n.push(s)}return n}dispose(){}};function qE(a){throw new Error("Function not implemented.")}var Ee=class Ee{constructor(){this._isSending=!1;this._stopSending=!1;this._sendCmd=0;this._callDataArr=[],this._httpReq=new Laya.HttpRequest,this._httpReq.http.timeout=15e3,this._httpReq.http.ontimeout=this.timeoutFunction,this._httpReq.on(Laya.Event.COMPLETE,this,this.reqCompleteHandler),this._httpReq.on(Laya.Event.ERROR,this,this.reqErrorHandler),this._httpReq.on(Laya.Event.PROGRESS,this,this.reqProcessHandler),Ee.RepeatHandler=Laya.Handler.create(this,this.repeatCallHandler,null,!1)}static get instance(){return Ee._instance||(Ee._instance=new Ee),Ee._instance}repeatCallHandler(){let t=this._callDataArr[0];t&&(t.needReSend?(this._callDataArr.shift(),this._sendByByte(t.command,t.callData,t.isShowLoading,!0)):this._callDataArr.shift())}timeoutFunction(){Ee.ErrorIndex++,this._sendCmd==2,Ee.timeoutTimes<Ee.MaxSendTimes,Ee.timeoutTimes++,Ee._IS_SEND=!1,this._isSending=!1,Ee.ErrorIndex>=Ee.RepeatTimesTimeOut?(de.instance.hideLoading(),Ee.ErrorTips=d.instance.getLanguage(5076),H.intance.openModule(f.ClientErrView)):Ee.RepeatHandler.run()}reqCompleteHandler(t){let e=Laya.Browser.now()-this.m_nSendTime;if(e&&e>Ee.RequestTime?(Ee.reqTimes<Ee.MaxSendTimes,Ee.reqTimes++):(Ee.reqTimes=0,Ee.timeoutTimes=0,Ee.errorTimes=0),console.log("cmd time："+(Laya.Browser.now()-this.m_nSendTime)),this._httpReq.data==null){pe.instance.showErrByString("_buff:null");return}this._isSending=!1,Ee.ErrorIndex=0;let i=new Laya.Byte(this._httpReq.data),n;if(i){let r=new hn,o=r.ReadString(i);go.instance.analyCookie(o);let s=r.ReadByte(i);for(let l=0;l<s;l++){r.ReadByte(i);let c=r.ReadShort(i),u=r.ReadBytes(i,i.pos+c);if(i.pos+=c,u.length<2)continue;u.pos=0;let m=r.ReadBytes(u,u.length);m.pos=0;let b=new Uint8Array(m.buffer),_=new Uint8Array(YE(b)),w=new Laya.Byte(_.buffer);w.pos=0;let v=go.instance.analyServer(w);Laya.LayaEnv.isConch?console.log("REVC_CMD: cmdID:"+v[0]+" data:"+v,1):console.log(ge.GetLogTime+" REVC_CMD: cmdID:",v[0],v),v[0]==153&&console.log("......"),v[0]==27&&(v[1]==2e4||v[1]==20042)&&(n=!0),y.intance.event("msg_"+v.shift(),[v])}s==0&&console.log("REVC_DATA: NO_DATA",1)}if(this._callDataArr.length>0){let r=this._callDataArr.shift();n&&r&&r.callBackHandler!=null&&r.callBackHandler.run()}Ee._IS_SEND=!1,this._callDataArr.length>0?Ee.RepeatHandler.run():de.instance.hideLoading()}reqErrorHandler(t){console.log("[error] HttpNetService reqError: ["+t+"]",1),Ee.errorTimes<Ee.MaxSendTimes&&this._sendCmd==2,Ee.errorTimes++,de.instance.showLoadingByInfo(d.instance.getLanguage(5205)),Ee.ErrorIndex++,Ee._IS_SEND=!1,this._isSending=!1,Ee.ErrorIndex>=Ee.RepeatTimes?(de.instance.hideLoading(),Ee.ErrorTips=d.instance.getLanguage(5075),H.intance.openModule(f.ClientErrView),this._callDataArr.length=0):Laya.timer.once(1e3,this,function(){Ee.RepeatHandler.run()})}reqProcessHandler(t){}DataToService(t){Laya.LayaEnv.isConch?this._httpReq.send(X.server,t.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded","Connection","close"]):this._httpReq.send(X.server,t.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded"])}SendData(t,e,i=null,n=!0,r=!0){this._stopSending||(this.m_nSendTime=Laya.Browser.now(),Ee.ErrorIndex=0,r&&this._callDataArr.push({command:t,callData:e,callBackHandler:i,isShowLoading:n,needReSend:r}),this._sendByByte(t,e,n,!1))}_sendByByte(t,e,i=!0,n=!1){this._sendCmd=t,this._sendCmd==2,vt.instance.sendData({cmd:t,code:"",data:e})}reSendData(){this._callDataArr.length>0&&Ee.RepeatHandler.run()}sendOutHandler(){Laya.timer.clear(this,this.sendOutHandler),this._isSending&&(this._isSending=!1,Ee.ErrorIndex>=Ee.RepeatTimes?(de.instance.hideLoading(),Ee.ErrorTips="Client Error!",H.intance.openModule(f.ClientErrView),this._callDataArr.length=0):Ee.RepeatHandler.run())}EnCodeByte(t){t.pos=0;let i=new hn().ReadBytes(t,t.length);i.pos=0;let n=new Laya.Byte,r=0,o,s=0;for(let l=0;l<i.length;l++)r>=6?r=1:r+=1,o=i.getByte(),s=o,o>>=8-r,s<<=r,s|=o,s^=3,n.writeByte(s);return n}DecryptByte(t){t.pos=0;let i=new hn().ReadBytes(t,t.length);i.pos=0;let n=new Laya.Byte,r=0,o,s=new Uint8Array(i.buffer);for(let l=0;l<s.length;l++)r>=6?r=1:r+=1,o=s[l],o^=3,o<<=8-r,s[l]^=3,s[l]>>=r,s[l]|=o;return n=new Laya.Byte(s.buffer),n}init(){}HttpLoadProcess(t){}httpLoadComplete(t){go.instance.analyData=t}dispose(){}set stopSending(t){this._stopSending=t}};Ee._IS_SEND=!1,Ee.ErrorIndex=0,Ee.RepeatTimes=8,Ee.RepeatTimesTimeOut=3,Ee.ErrorTips="",Ee.LoginTime=5e3,Ee.RequestTime=4e3,Ee.MaxSendTimes=5,Ee.reqTimes=0,Ee.timeoutTimes=0,Ee.errorTimes=0;var Aa=Ee;function YE(a){throw new Error("Function not implemented.")}var Dt=class extends Laya.Event{constructor(){super()}};Dt.INIT_SUIT_EVENT="HeroEvent:INIT_SUIT_EVENT",Dt.EVENT_FIND_ITEM_CLICK="HeroEvent:EVENT_FIND_ITEM_CLICK",Dt.EVENT_RELEASE_ITEM_CLICK="HeroEvent:EVENT_RELEASE_ITEM_CLICK",Dt.EVENT_FINISH="HeroEvent:EVENT_FINISH",Dt.EVENT_START="HeroEvent:EVENT_START",Dt.EVENT_AGAIN="HeroEvent:EVENT_AGAIN",Dt.EVENT_ENABLE_TIJIAO="HeroEvent:EVENT_ENABLE_TIJIAO",Dt.EVENT_HUMANSTAY="HeroEvent:EVENT_HUMANSTAY",Dt.EVENT_STOPGAME="HeroEvent:EVENT_STOPGAME",Dt.EVENT_RESTORE="HeroEvent:EVENT_RESTORE",Dt.EVENT_CANCEL_RESTORE="HeroEvent:EVENT_CANCEL_RESTORE",Dt.EVENT_COLLISIONENTER="HeroEvent:EVENT_COLLISIONENTER",Dt.EVENT_HERO_DRAW_UPDATE_PRODUCTION="HeroEvent:EVENT_HERO_DRAW_UPDATE_PRODUCTION",Dt.SELECT_UI="HeroEvent:SELECT_UI";var Dp=class extends Le{constructor(){super()}};var Mp=class extends Le{constructor(){super()}};var at=class a{constructor(){this._inited=!1;this._initUpgrade=!1;this.heroList=[];this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}initUpgrade(){if(!this._initUpgrade){let t=R.intance;t.m_dicHeroLv||(t.m_dicHeroLv=t.initConfig("hero_lv",["hero_lv","hero_star","race"],Mp)),t.m_dicHeroAttup||(t.m_dicHeroAttup=t.initConfig("hero_attup",["star_lv","race"],Dp)),this._initUpgrade=!0}}getHead(t){let e=Math.floor(Math.random()*3)+1;return"common/common_icon/img_"+t+"_"+e+".png"}getNextHero(t){let e=L.instance.m_heroData.heroVoDic.keys.indexOf(t.pk);return L.instance.m_heroData.heroVoDic.keys.length===1?null:e<=L.instance.m_heroData.heroVoDic.keys.length-2?L.instance.m_heroData.heroVoDic.values[e+1]:null}getLastHero(t){let e=L.instance.m_heroData.heroVoDic.keys.indexOf(t.pk);return e>0?L.instance.m_heroData.heroVoDic.values[e-1]:null}setStar(t,e){let i=parseInt(e);var n=Math.floor(i/6),r=i%6,o=n+r;let s=0;for(let u=0;u<n;u++)t["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_2.png",t["img_star"+(u+1)].visible=!0;for(let u=n;u<r;u++)t["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_1.png",t["img_star"+(u+1)].visible=!0;for(let u=o;u<5;u++)t["img_star"+(u+1)].visible=!1;let l=t.box_star.width,c=46;o==1?t["img_star1"].x=l/2-s:o==2?(t["img_star1"].x=l/2-c/2-s,t["img_star2"].x=l/2+c/2-s):o==3?(t["img_star1"].x=l/2-s,t["img_star2"].x=l/2-c-s,t["img_star3"].x=l/2+c-s):o==4?(t["img_star1"].x=l/2-c/2-s,t["img_star2"].x=l/2+c/2-s,t["img_star3"].x=l/2-c*(1/2+1)-s,t["img_star4"].x=l/2+c*(1/2+1)-s):(t["img_star1"].x=l/2-s,t["img_star2"].x=l/2-c-s,t["img_star3"].x=l/2+c-s,t["img_star4"].x=l/2-c*2-s,t["img_star5"].x=l/2+c*2-s)}getRoundName(t){let e=d.instance.getLanguage(10014,16,8);return t==4?e=d.instance.getLanguage(10014,2,1):t==3?e=d.instance.getLanguage(10014,4,2):t==2&&(e=d.instance.getLanguage(10014,8,4)),e}};var Bp=class{};var Pp=class{};var xt=class a{constructor(){this.mail_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"||(this.mail_contract=new window.web3.eth.Contract(ie.BLINDBOX_ABI,ie.BLINDBOX_ADDRESS))}async initData(){this.mailList=new te,de.instance.showLoading(!0);let t=await this.mail_contract.methods.getPricesLength().call();for(let e=0;e<t;e++){let i=await this.mail_contract.methods.getPriceByIndex(e).call(),n=new Bp;n.type=1,n.idx=e,Object.assign(n,i),this.mailList.set(n.idx,n),n.showPrice=so(n.currentPrice+"")}de.instance.hideLoading()}async hasFree(){return await this.mail_contract.methods.getIsFreeOpen().call()?!await this.mail_contract.methods.hasFreeHero(K.instance.walletAddress).call():!1}async recruit(t){console.log("成功",66),console.log("失败",66),de.instance.showLoading(!0);let e=R.intance.m_dicShops.get(t),i=e.cost[0];try{var n;X.vType==2?n=ut.id:X.vType==1?n=ut.id:n=kt.id;let l=R.intance.getBuyHeroAddress(n),c=await K.instance.walletClient.getChainId();if(n!==c){var r=await K.instance.switchChain(n);if(!r){this.onEndHeroBuy(),console.log("切换失败，请手动切换");return}c=await K.instance.walletClient.getChainId()}let u=R.intance.getCurrencyAddress(3001,c);if(!u)return this.onEndHeroBuy(),M.instance.notice(d.instance.getLanguage(1177,c)),!1;if(!l)return this.onEndHeroBuy(),M.instance.notice(d.instance.getLanguage(1174,c)),!1;let m=e.cost[1],b=await K.instance.getBalance2(u),_=so(m+"");if(parseFloat(b)<parseFloat(_)){this.onEndHeroBuy(),ge.moneyNotEnought(i);return}if(console.log("判断授权 tokenAddress: "+u+", chainIDData:"+n),!await K.instance.newAllowanceAddress(l,u))return console.log("未授权"),this.onEndHeroBuy(),M.instance.notice(d.instance.getLanguage(15)),de.instance.hideLoading(),!1;console.log("授权成功 开始购买");var o=await K.instance.walletClient.writeContract({account:K.instance.walletAddress,address:l,abi:ie.BUY_HERO_ABI,functionName:"mintByTOX",args:[]});console.log("============"+o);let v=await K.instance.publicClient.waitForTransactionReceipt({hash:o});return console.log(`Tx with hash: ${o}`,v),v&&v.status=="success"?(console.log(`Tx successful with hash: ${o}`),o):(this.onEndHeroBuy(),ge.TransactionErrorTip(),!1)}catch(l){this.onEndHeroBuy();var s=l.shortMessage;if(s&&s.indexOf("does not match")!=-1&&(s=d.instance.getLanguage(1118)),console.log(s),l instanceof U){let c=l.walk(u=>u instanceof Bt);if(c instanceof Bt){let u=c.data?.errorName??"";console.log("============errorName: "+u)}}return null}}waitGetHero(){Laya.timer.loop(2e3,this,this.getHero)}async getHero(){var t=await k.requestPost("wxgame/hero/heroBuyChainCheck",{}).catch(e=>{});t&&t.heroList&&t.heroList.length>0&&(Laya.timer.clear(this,this.getHero),this.onNewAddHero(t.heroList))}onNewAddHero(t){We.instance.autoPop=!1,L.instance.herosDataUpdataHandler(t),this.onEndHeroBuy()}onAddHero(t){We.instance.autoPop=!1,L.instance.herosDataUpdataHandler(t.reward),t.resChange&&L.instance.moneyInfoHander(t.resChange),t.fightHeroPk&&(L.instance.playerDto.fightHeroPk=t.fightHeroPk),this.onEndHeroBuy()}onEndHeroBuy(){de.instance.hideLoading(),y.intance.event(h.EVENT_END_HEROBUY)}async recruit1(t){let e=R.intance.m_dicShops.get(t),i=e.cost[1],n=await K.instance.getBalance(),r=await k.requestPost("wxgame/hero/heroBuy",{shopId:e.id},!0,!0);r?this.onAddHero(r):this.onEndHeroBuy()}async recruitItem(t,e){let i=R.intance.m_dicShops.get(t),n=i.cost[1],r=await K.instance.getBalance(),o=await k.requestPost("wxgame/hero/itemBuy",{shopId:i.id,count:e},!0,!0);o&&(o.reward&&H.intance.openModule(f.RewardGetDialog,o.reward),o.resChange&&L.instance.moneyInfoHander(o.resChange),o.fightHeroPk&&(L.instance.playerDto.fightHeroPk=o.fightHeroPk),de.instance.hideLoading())}async recruitFree(){de.instance.showLoading(!0),this.isOpen=await this.mail_contract.methods.getIsOpen().call();let t=await this.hasFree();if(!this.isOpen){de.instance.hideLoading(),y.intance.event(h.EVENT_HERO_DRAW_BACK,[d.instance.getLanguage(12)]);return}if(!t){y.intance.event(h.EVENT_HERO_DRAW_BACK,[d.instance.getLanguage(17)]);return}await this.mail_contract.methods.recruitFree().send({from:K.instance.walletAddress},(e,i)=>{if(e){de.instance.hideLoading(),y.intance.event(h.EVENT_HERO_DRAW_BACK,[d.instance.getLanguage(16)]);return}})}async ownerHero(t=!1){let e=await k.requestPost("wxgame/hero/heroList",{},!0,!0);L.instance.m_heroData.initData(e.heroList,t),console.log("HERO LIST")}async ownerBag(){let t=await k.requestPost("wxgame/hero/bagList",{},!0,!0);L.instance.m_packageData.initData(t.data),console.log("BAG LIST")}async heroOutputRate(){if(at.instance.heroOutputRateDic)return;let t=await k.requestPost("cybertron-sys-api/api/v1/heroes/heroOutputRate",{},!0);at.instance.heroOutputRateDic=new te;for(let e of t){let i=new Pp;Object.assign(i,e),at.instance.heroOutputRateDic.set(i.mineralLevel,i)}console.log("HERO heroOutputRate"),y.intance.event(Dt.EVENT_HERO_DRAW_UPDATE_PRODUCTION)}makeHeroVo(t){let e=new Rt;return Object.assign(e,t),e}};var je=class je{constructor(){}};je.TYPE_Professional=1,je.TYPE_Training=2,je.ANI_beiji="beiji",je.ANI_daiji="daiji",je.ANI_gongji="gongji",je.ANI_ti="ti",je.ANI_hua="hua",je.ANI_dang="gedang",je.ANI_dazhao="z_dazhao",je.ANI_ruchang="ruchang",je.ANI_siwang="siwang",je.ANI_xingzou="xingzou",je.ANI_chongzhuang="z_chongzhuang",je.ANI_chongzhuang2="z_chongzhuang2",je.ANI_daodi="z_daodi",je.ANI_shanbi="z_shanbi",je.ANIS=[je.ANI_daiji,je.ANI_xingzou,je.ANI_gongji,je.ANI_ti,je.ANI_hua,je.ANI_dang,je.ANI_beiji,je.ANI_siwang],je.TYPE_GONGJI=1,je.TYPE_TI=2,je.TYPE_HUA=3,je.TYPE_DANG=4,je.TYPE_FEI=5,je.TYPE_DAZHAO=6;var Ye=je;var Rp=class{constructor(){this.heroVoDic=new te}initData(t,e=!1){(!this.heroVoDic||e)&&(this.heroVoDic=new te);let i;for(let r=0;r<t.length;r++){i=new Rt;var n=t[r];i.id=n.id,i.lv=n.lv,i.pk=n.pk,i.color=n.color,i.state=n.state,i.newFightFlag=n.newFightFlag,this.pushItem(i)}console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}updateData(t){console.dir("更新英雄："+t),this.updataItemVoByArr(t)}herosDataRemoveHandler(t){console.dir("删除英雄："+t);for(let i=0;i<t.length;i++){var e=t[i];this.removeItemPk(e)}}pushItem(t){this.heroVoDic.set(t.pk,t)}removeItem(t){this.removeItemPk(t.pk)}removeItemPk(t){this.heroVoDic.remove(t+"")}updataItemVoByArr(t,e=!1){let i=[],n=!1,r;for(let o=0;o<t.length;o++){r=t[o];let s=this.heroVoDic.get(r.pk);s==null?(s=new Rt,s.id=r.id,s.pk=r.pk,s.lv=r.lv,s.color=r.color,s.state=r.state,s.newFightFlag=r.newFightFlag,s.m_bNew=!0,s.newAddCnt=1,s.newAddCnt>0&&this.pushItem(s)):s.newAddCnt=1,s.isLvUp=e,i.push(s.pk),s.m_iNum<=0&&this.removeItem(s),s.newAddCnt>0&&We.instance.needPop&&(We.instance.addHeroItem(s),n=!0)}n&&We.instance.needPop&&We.instance.autoPop&&Jt.instance.startShow(),i.length>0&&y.intance.event(h.PACKAGE_UPDATE_ITEM,[i])}getItemById(t){return this.heroVoDic.get(t)}getCount(){return this.heroVoDic.values.length}getCanTransferHero(t){let e=this.heroVoDic.get(t+"");return e&&e.state==0&&e.pk!=L.instance.playerDto.fightHeroPk?e:null}getListByType(t){let e=[],i=t==Ye.TYPE_Training?1:0;for(let n=0;n<this.heroVoDic.values.length;n++){let r=this.heroVoDic.values[n];r.newFightFlag==i&&e.push(r)}return e}};var Np=class{constructor(){this.m_redData={system:!1,friend:!1,announce:!1};this.m_dicItemList=new te,this.m_dicTypeList=new te}initData(t){this.m_dicItemList=new te,this.m_dicTypeList=new te,this.m_redData={system:!1,friend:!1,announce:!1};let e;for(let i=0;i<t.length;i++)switch(e=t[i],this.pushItem(e),e.type){case 1:e.state==0&&(this.m_redData.system=!0);break;case 2:e.state==0&&(this.m_redData.friend=!0);break;case 3:e.state==0&&(this.m_redData.announce=!0);break}console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}parseItem(t){if(t.mailId>0){var e=R.intance.m_dicMail.get(t.mailId);t.title=d.instance.getLanguage(e.title),t.content=d.instance.getLanguageMulti(e.text,t.params)}}pushItem(t){this.parseItem(t),this.m_dicItemList.set(t.id,t),this.m_dicTypeList.get(t.type)==null&&this.m_dicTypeList.set(t.type,new te),this.m_dicTypeList.get(t.type).set(t.id,t)}removeItem(t){this.m_dicItemList.remove(t.id),this.m_dicTypeList.get(t.type).remove(t.id)}getItemById(t){return this.m_dicItemList.get(t)}getListByType(t){let e=[];return this.m_dicTypeList.get(t)&&(e=this.m_dicTypeList.get(t).values.slice()),e}getRedData(){return this.m_redData}};var L=class a{constructor(){this.timeZoneOff=0;this.hearIntervalSceond=10*60;this._timeStamp=0;this._m_strLanguage=1;this.isLanChanged=!1;this.lastTimestamp=0;this._m_serverTime=0;this.M_S_VersionServer="1.0.0";this.redDotData=[];this.friendNum=0;this.headId=10001;this.countryId=1010;this.colorId=1;this._guildIcon=2006;this.rechargeEnd=!1;this.needPopError=!0}async initData(){Se.instance.sendCustumEvent(20),await xt.instance.ownerHero(),await xt.instance.ownerBag(),Se.instance.sendCustumEvent(21)}get m_serverTime(){let t=Date.now();return this._m_serverTime+(t-this.lastTimestamp)}set m_serverTime(t){this._m_serverTime=t,this.lastTimestamp=Date.now()}get guildIcon(){return this._guildIcon}set guildIcon(t){console.log("guildIcon: "+t),this._guildIcon=t}get m_strLanguage(){return this._m_strLanguage}set m_strLanguage(t){this._m_strLanguage=t}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this.vipInfo=new Sp,this.m_packageData=new Cp,this.m_mailData=new Np,this.m_heroData=new Rp,this.systemOpenModel=new Tp,this.m_dicCustomerVo=new te,y.intance.on("msg_27",this,this.commonErrHandler),y.intance.on("msg_11",this,this.vipInfoHandler),y.intance.on("msg_13",this,this.onVipUpgrade),y.intance.on("msg_90",this,this.initSystemOpen),y.intance.on("msg_161",this,this.reciveTurnoverVo),y.intance.on("msg_333",this,this.onInitSceneBg),y.intance.on("msg_350",this,this.onInitStoreDiscount),y.intance.on("msg_388",this,this.onInitTitle),y.intance.on("msg_1002",this,this.onLanChange)}initSend(){}onLanChange(t){let e=parseInt(t[0]),i=parseInt(t[1]);switch(e){case 1:i==1&&Se.instance.reload();break;case 2:break}}get timeStamp(){return this._timeStamp+(Laya.Browser.now()-this.recordStampTime)/1e3}set timeStamp(t){this.recordStampTime=Laya.Browser.now(),this._timeStamp=t}onReciveBuyTimes(t){a.instance.playerDto.updateRoleBuyTimes(t)}reciveTurnoverVo(t){}onInitSceneBg(t){}onInitTitle(t){}getAdRankById(t){return this.m_adRankDic&&this.m_adRankDic.get(t)?this.m_adRankDic.get(t):""}onGetPvpGrade(t){let e=t[0]}onInitStoreDiscount(t){}reciveBuyCustomerMsg(t){}onInitStyleAndTag(t){let e=t[0];for(let i=0;i<e.length;i++){let n=e[i],r=n[0],o=n[1],s=n[2]}}reciveFriendList(t){}reciveFirstRecharge(t){}hasReceiveFirst(){return this.firstRechargeState.toString()=="3"}recieveOnlineAward(t){}initFriendsGiftHandler(t){}initSystemOpen(t){this.systemOpenModel.initSystemOpen(t[0])}updateSystemOpen(t){let e=t[0];kp.instance.addNewOpenFun(e);for(let i=0;i<e.length;i++)this.systemOpenModel.openSystem.set(e[i],!0)}serverTimeUpdateHandler(){let t=this.hearIntervalSceond*1e3;Laya.timer.loop(t,this,this.onHear)}onHear(){}itemsDataUpdataHandler(t,e,i){this.m_packageData.updateData(t,e,i),y.intance.event(h.EVENT_ITEM_UPDATE)}herosDataUpdataHandler(t){this.m_heroData.updateData(t)}vipInfoHandler(t){this.vipInfo.trecharge=t[1],this.vipInfo.isRewards=t[2],this.vipInfo.daygift=t[3]}onVipUpgrade(t){}getConsumeValue(t){t=parseInt(t.toString());var e=this.playerDto.coins[t];return e>0?e:0}hasEnoughMoney(t,e,i=!0){switch(t=parseInt(t.toString()),e=parseInt(e.toString()),t){default:return this.playerDto.coins[t]<e&&i&&y.intance.event("open_buy",4),this.playerDto.coins[t]>=e}}moneyInfoHander(t,e=!0,i=!0){let n=!1,r=!1,o=0;for(let s of t)r=!1,s[0]==xe.TYPE_EXP?(o=parseInt(s[1]+"")-this.playerDto.exp,this.playerDto.exp=parseInt(s[1]+""),r=o>0):(o=parseFloat(s[1]+"")-this.playerDto.coins[s[0]],this.playerDto.coins[s[0]]=parseFloat(s[1]+""),r=o>0),r&&We.instance.needPop&&i&&(n=!0,We.instance.addConsumeByServer([s[0],o]));e&&y.intance.event(h.ROLE_INFO_CHANGE),n&&We.instance.autoPop&&Jt.instance.startShow()}commonErrHandler(t){if(de.instance.hideLoading(),parseInt(t[0])==2e4){this.needPopError&&(pe.instance.showErrorWord(parseInt(t[0])),y.intance.event(h.RECIVE_SUCESS_SERVICE));return}else if(parseInt(t[0])==20008){y.intance.event("open_buy",1);return}else if(parseInt(t[0])==20007){y.intance.event("open_buy",2);return}else if(parseInt(t[0])==20015){y.intance.event("open_buy",3);return}else if(parseInt(t[0])==20016){y.intance.event("open_buy",4);return}else if(parseInt(t[0])==10021){Aa.ErrorTips=pe.instance.get(10021),H.intance.openModule(f.ClientErrView);return}else if(parseInt(t[0])==10023){Aa.ErrorTips=pe.instance.get(10023),H.intance.openModule(f.ClientErrView);return}else if(parseInt(t[0])==10019){Aa.ErrorTips=pe.instance.get(10019),H.intance.openModule(f.ClientErrView);return}else if(parseInt(t[0])!=20053){if(parseInt(t[0])==10002){Aa.ErrorTips=d.instance.getLanguage(5085),H.intance.openModule(f.ClientErrView);return}}pe.instance.showErrorWord(parseInt(t[0])),console.log("Server Error Code:"+t[0])}dispose(){}parseNumber(t){let e=[];for(let i=0;i<t.length;i++){let n=t[i];n=this.dividedNumber(n),e.push(n.toString())}return e}dividedNumber(t){return t/1e4}getRedDotById(t){return!!(this.redDotData&&this.redDotData.indexOf(t)>-1)}};var d=class a{constructor(){this._lanTypesById=new te,this._lanTypesByType=new te,this._configData=new te,this._configData1=new te}static get instance(){return a._instance||(a._instance=new a),a._instance}initLanTypes(t){this._lanTypesById=new te,this._lanTypesByType=new te;for(let e in t){let i=new Mo;if(i.init(t[e]),parseInt(i.if_open)!=1)continue;let n=i.ID,r=i.type;this._lanTypesById.set(n,i),r&&r!=""&&this._lanTypesByType.set(r,i)}}getLanTypes(){return this._lanTypesById}getLanIdByType(t){if(this._lanTypesByType){let e=this._lanTypesByType.get(t);if(e)return parseInt(e.ID.toString())}return 1}getLanTypeById(t){if(this._lanTypesById){let e=this._lanTypesById.get(t);if(e)return e.type}return"en"}initConfigLan(t){this._configData=t}initConfigLan1(t){this._configData1=t}initUILan(t){Laya.Text.langPacks={};let e;for(e in t){let i=t[e].value;Laya.Text.langPacks[e]=i}}changeBrToN(t){let e=/<br>/g;for(;t.indexOf("<br>")!=-1;)t=t.replace(e,`
`);return t}replacePlaceholder(t,e){if(t=="")return"";let i=/{(\d+)}/g;return e.length>0&&(t=t.replace(i,function(){return e[arguments[1]]})),this.replaceLanByBR(t)}replaceLanByBR(t){return t+""}getEnglishLanguage(t,...e){return this.getEnglishLanguageReplace(t,e)}getEnglishLanguageReplace(t,e){if(this._configData1&&this._configData1[t]){let i=this._configData1[t].value;if(i&&i!="")return this.replacePlaceholder(i,e)}return this.replacePlaceholder(t+"",e)}getLanguage(t,...e){return this.getLanguageReplace(t,e)}getLanguageReplace(t,e){if(this._configData&&this._configData[t]){let i=this._configData[t].value;if(i&&i!="")return this.replacePlaceholder(i,e)}return this.replacePlaceholder(t+"",e)}getLanguageMulti(t,e){if(console.log("getLanguageMulti",e),this._configData&&this._configData[t]){let i=this._configData[t].value;if(i&&i!="")return this.replacePlaceholderMulti(i,e)}return this.replacePlaceholder(t+"",e)}replacePlaceholderMulti(t,e){if(t=="")return"";let i=/{(\d+)}/g;return e.length>0&&(t=t.replace(i,function(){var n=e[arguments[1]];if(typeof n=="object")n=JSON.parse(n),n=a.instance.parseObj(n);else if(typeof n=="string")try{n=JSON.parse(n),typeof n=="object"&&(n=a.instance.parseObj(n))}catch{}return n})),this.replaceLanByBR(t)}parseObj(t){if(t.hasOwnProperty("tableType")){if(t.tableType==1){var e=R.intance.m_dicItems.get(t.id);e&&(t=a.instance.getLanguage(e.name))}}else t=a.instance.getMultiLan(t);return t}getUILang(t,e=null,i=null,n=null,r=null){if(t=Laya.Text.langPacks&&Laya.Text.langPacks[t]?Laya.Text.langPacks[t]:t,arguments.length>1)for(let o=0,s=arguments.length;o<s;o++)t=t.replace("{"+o+"}",arguments[o+1]);return t}getMultiLan(t){var e=parseInt(L.instance.m_strLanguage.toString()),i;return t&&(i=t[e]),i}FGM_GetLanguage(){let t=function(i){console.log("initGame->-----------------------------FGM_GetLanguage:=="+i),i&&(i=i.substring(0,2),X.User_Lan=i)},e=Laya.LocalStorage.getItem(X.COOKIE_CF_LAN);!e||e==""?t(this.language):t(e)}get language(){return"en"}FGM_SetLanguage(t){t&&t!=""&&Laya.LocalStorage.setItem(X.COOKIE_CF_LAN,t)}dispose(){}};var Op=class a{constructor(){this.m_sprMap=new Laya.Sprite;this.m_Image=new Laya.Image}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){}showLoading(t=!1){if(this.loadingMc)this.m_sprMap.size(Laya.stage.width,Laya.stage.height),X.m_bIsIphoneX&&(this.m_Image.scaleX=X.IPHONEX_SCARE,this.m_Image.scaleY=X.IPHONEX_SCARE),this.m_Image.x=(this.m_sprMap.width-this.m_Image.width*this.m_Image.scaleX)/2,this.m_Image.y=(this.m_sprMap.height-this.m_Image.height*this.m_Image.scaleY)/2,this.m_sprMap.x=(P.instence.m_iStageWidth-this.m_sprMap.width*this.m_sprMap.scaleX)/2,this.m_sprMap.y=(P.instence.m_iStageHeight-this.m_sprMap.height*this.m_sprMap.scaleY)/2,this.m_sprMap.visible=!0,Laya.timer.clear(this,this.showLazyBg),t?(this.m_Image.alpha=1,this.showLazyBg()):(this.m_Image.alpha=0,this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_sprMap.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,"#000000")),Laya.timer.once(300,this,this.showLazyBg));else return}showLazyBg(){this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_Image.alpha=1),this.loadingMc&&(this.loadingMc.x=Laya.stage.width/2,this.loadingMc.y=Laya.stage.height/2,this.loadingMc.play(),this.loadingMc.visible=!0)}hideLoading(){if(this.loadingMc)this.hideLoadingSHow();else return}hideLoadingSHow(){Laya.timer.clear(this,this.showLazyBg),this.loadingMc.stop(),this.loadingMc.visible=!1,this.m_sprMap.visible=!1}get isShow(){return this.loadingMc&&this.loadingMc.visible}dispose(){this.m_sprMap&&this.m_sprMap.graphics.clear(),Laya.timer.clear(this,this.showLazyBg),this.loadingMc&&(this.loadingMc.destroy(),this.loadingMc.removeSelf(),this.loadingMc=null)}};var{regClass:$E}=Laya,vo=class extends Kl{constructor(){super(...arguments);this.isLogout=!1;this.dotNum=0;this.m_nProgress=0}onAwake(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),Laya.loader.load(["res/common/comm_bg/img_loading1_bg.jpg","res/loading/progress_load1.png","res/loading/progress_load1$bar.png"]).then(()=>{this.createUI(),this.init()})}onError(e){console.log("加载失败: "+e)}createUI(){this.m_nSendTime=Laya.timer.currTimer,He.instance.init(),He.instance.playMusicByName(He.soundName_bg,".mp3"),y.intance.on(h.EVENT_BACK_TO_LOGIN,this,this.backToLogin),y.intance.on(h.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),y.intance.on(h.EVENT_ENTER_MAIN,this,this.loginCallBack),this.initLoad(),d.instance.FGM_GetLanguage(),X.User_Lan=="zh"?this.img_loading_tip.skin="res/loading1/img_loading_tip_6.png":this.img_loading_tip.skin="res/loading1/img_loading_tip_1.png";var i=getGameVersion();this.txtLoad.text=i,console.log("VERSION: "+i);let n=new ya;n.ID=1,n.Event="加载版本信息 "+i,Se.instance.sendCustumEvent(1,null,n),fi.Initialize(Laya.stage,!0)}initLoad(){this.onAssetLoaded()}onAssetLoaded(){this.loadingProcess=0,this.m_nProgress=0,Laya.timer.loop(1800,this,this.onLoading,[this.m_nProgress])}set loadingProcess(e){e>1&&(e=1),this.mcProcess.value=e,this.txtProcess.text=Math.floor(e*100)+"%";var i=e*this.mcProcess.width-70;i<0&&(i=0),this.img_guang.x=i,console.log("loadingProcess: "+e)}init(){P.instence.init(),ye.intance.init(),Op.instance.init(),H.intance.init(),L.instance.init();let e=new ya;e.ID=3,e.Event="加载资源信息",Se.instance.sendCustumEvent(3,null,e),C.instance.init(),me.initParms()}backToLogin(){Laya.timer.clear(this,this.onLoading),this.m_nProgress=0,Laya.loader.load(C.instance.m_arrInitResource,Laya.Handler.create(this,this.getLoginData),Laya.Handler.create(this,this.onLoading2,null,!1))}getLoginData(){Se.instance.sendCustumEvent(7),this.readyInitGame()}readyInitGame(){if(this.isLogout){y.intance.event(h.EVENT_LOADING_SUC);return}this.mcProcess&&(this.loadingProcess=.8+.2),X.isWhite?this.loginGame():this.onGetNotice()}async onGetNotice(){Laya.loader.maxLoader=50,k.requestPost("wxgame/sys/notice",{type:1},!1,!1).then(e=>{var i=e;if(i.list&&i.list.length>0){H.intance.openModule(f.NoticeDialog,[1,i]);return}this.loginGame()}).catch(e=>{H.intance.openModule(f.NoServerView)})}async loginGame(){y.intance.event(h.EVENT_LOADED_COMPLETE),await K.instance.init(),await K.instance.dappLogin()}async loginGameEnd(e){de.instance.showLoading(!0),Se.instance.sendCustumEvent(8),R.intance.init(),Aa.instance.init(),console.log("PreLoadingView.joinGame()");let i=Laya.timer.currTimer-this.m_nSendTime;if(Se.instance.sendCustumEvent(22),!e){H.intance.openModule(f.NoServerView);return}e.loginState==1?(console.log("have no regist"),Se.instance.sendCustumEvent(23),H.intance.openModule(f.CreateLoginView)):(Se.instance.sendCustumEvent(30),e.playerDto?(Se.instance.sendCustumEvent(31),console.log("registed "+e.playerDto.name),L.instance.playerDto=e.playerDto,this.loginCallBack()):(Se.instance.sendCustumEvent(32),console.log("getRegisted error"),M.instance.notice(d.instance.getLanguage(135))))}async loginCallBack(){console.log("loginCallBack++++++++++++++++++++++++++++++++"),X.vType==2&&X.Debug==0&&(Laya.Browser.window.console.log=function(){}),L.instance.initData(),de.instance.hideLoading();var e=L.instance.playerDto;if(e.roomId>0){let i=await k.requestPost("wxgame/room/info",{roomId:e.roomId});F.instance.roomDto=i.roomDto,i.roomDto?e.roomState==0?H.intance.openModule(f.EnterRoomView):e.roomState==1&&vt.instance.initSocket():M.instance.notice(d.instance.getLanguage(135))}else ge.logs("进入主界面",5),Se.instance.sendCustumEvent(33),ye.intance.setCurrentScene(Q.M_SCENE_MAIN);k.startHeart()}onLoading(e){this.m_nProgress+=.01,this.mcProcess&&e>this.mcProcess.value&&(this.loadingProcess=e*.4)}onLoading2(e){this.mcProcess&&(this.loadingProcess=0+e*1.1)}removeEvent(){y.intance.off(h.EVENT_BACK_TO_LOGIN,this,this.backToLogin),y.intance.off(h.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),y.intance.off(h.EVENT_ENTER_MAIN,this,this.loginCallBack)}};vo.m_iState=1,vo=p([$E("xmaaYG8AQ1yC07pr_JvyPA")],vo);var{regClass:XE,property:zX}=Laya,dl=class extends Laya.Script{constructor(){super()}onEnable(){Laya.timer.frameLoop(1,this,this.onRunRoll),this.onScaleEnd1()}onRunRoll(){this.owner.rotation++}onScaleEnd1(){Laya.Tween.to(this.owner,{scaleX:1.1,scaleY:1.1,alpha:.8},500,null,Laya.Handler.create(this,this.onScaleEnd2))}onScaleEnd2(){Laya.Tween.to(this.owner,{scaleX:.8,scaleY:.8,alpha:.5},500,null,Laya.Handler.create(this,this.onScaleEnd1))}onDisable(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};dl=p([XE("w5pr4pHJTMOM3bYxCyc4Ag")],dl);var Lo=class Lo extends Laya.ColorFilter{constructor(t=null){super(t)}static addClickFilter(t){let e=t.filters||[];e.push(Lo.clickFilter),t.filters=e}static clearClickFilter(t){let e=t.filters;if(e!=null&&e.length>0){for(let i=e.length-1;i>-1;i--)e[i]instanceof Lo&&e.splice(i,1);t.filters=e}}};Lo.clickFilter=new Lo([1,0,0,0,-34,0,1,0,0,-34,0,0,1,0,-34,0,0,0,1,0]);var fn=Lo;var{regClass:QE,property:ZE}=Laya,_o=class extends Laya.Script{constructor(){super();this.noSound=!1}onEnable(){let e=this.owner.scaleX;this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onUp)}onDown(){this.noSound||He.instance.playSoundByName(He.soundName4),fn.addClickFilter(this.owner)}onUp(){fn.clearClickFilter(this.owner)}onDisable(){fn.clearClickFilter(this.owner),this.owner.off(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.onUp)}};p([ZE({type:"boolean"})],_o.prototype,"noSound",2),_o=p([QE("cL1AmqOiTHmtQWKayPNcTA")],_o);var Fi=class Fi{constructor(){this.ROOM_1=1;this.ROOM_2=2;this.ROOM_3=3;this.ROOM_1_1=1;this.ROOM_1_2=2;this.ROOM_1_3=3;this.ROOM_2_1=201;this.ROOM_2_2=202;this.ROOM_2_3=203;this.ROOM_3_1=301;this.ROOM_3_2=302;this.ROOM_3_3=303}static get instance(){return Fi._instance==null&&(Fi._instance=new Fi),Fi._instance}};Fi._instance=null,Fi.ROOM_FRIEND_APPLY=4,Fi.ROOM_MAIL=5,Fi.RED_GUILD_APPLY=6;var it=Fi;var Te=class a{static toFixed(t,e){if(t.toString().indexOf(".")==-1)return t;{let i=t.toFixed(e);return parseFloat(i)}}static toFixedWithPercent(t,e,i="+"){let n;return t.toString().indexOf(".")==-1?n=i+t*100+"%":(e=e-2,e<0&&(e=0),n=i+(t*100).toFixed(e)+"%"),n}static getGoldStr(t){let e;return t>999999?e=parseInt(String(t/1e5))+"m":e=t,e}static numStringFormat(t){let e=t;return L.instance.m_strLanguage==2?t.length>4&&(e=String(t).replace(/(\d)(?=(\d{3})+$)/g,"$1 ")):e=String(t).replace(/(\d)(?=(\d{3})+$)/g,"$1,"),e}static numSimple(t){let e=t,i=parseInt(parseInt(e)/1e3+"");return i>0?i+"k":a.numStringFormat(e)}static numStringFormat2(t){let e;if(t>999999)e=a.getNumStr(t,1e6,"M");else if(t>999)e=a.getNumStr(t,1e3,"K");else return t+"";return e}static getNumStr(t,e,i){return parseInt(Math.floor(t/e)+"")+i}static getTimeStr(t){let e;return t<3600?e=d.instance.getLanguage(9024,Math.ceil(t/60)):t<3600*24?e=d.instance.getLanguage(9025,Math.ceil(t/3600)):e=d.instance.getLanguage(9025,Math.ceil(t/(3600*24))),e}static BigInt(t){return 0}static isInteger(t){return t%1===0}static formatNumber(t,e=8){return Number.isInteger(t)?t:parseFloat(t.toFixed(e))}static formatNumberStr(t,e=2){return Number.isInteger(t)?t:parseFloat(t.toFixed(e)).toString()}static filterNumFormat(t,e=2,i=!1,n=!1){if(!t)return t;if(t<1e3&&t>0)if(n){var r=Math.floor(t*10**e)/10**e;return parseFloat(r.toFixed(e)).toString()}else return parseFloat(t.toFixed(e)).toString();if(t==="0.00")return t;var o=[{value:1,symbol:""},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"}];i&&(o=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"}]);var s=/\.0+$|(\.[0-9]*[1-9])0+$/,l;for(l=o.length-1;l>0&&!(t>=o[l].value);l--);let c=(t/o[l].value).toString();return c.indexOf(".")>-1&&(e>0?c=c.substr(0,c.indexOf(".")+e+1):c=c.substr(0,c.indexOf(".")+e)),c.replace(s,"$1")+o[l].symbol}static fromWei(t,e,i=0){if(!t)return 0;let n=t.length-e+i;if(n<=0)return 0;let r=t.toString().slice(0,n);if(i){let o=r.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";r=s+r}else r=r.slice(0,r.length-i)+"."+r.slice(r.length-i)}return r}};var Hp=class extends Laya.Scene{};var{regClass:JE}=Laya,hl=class extends Hp{constructor(){super(...arguments);this.currTab=0;this.arenaLv=1001;this.coinTypes=[];this.arenaType=1;this.nodeIds=[];this.coinDatas=[];this.nodeDatas=[]}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP}async onOpened(e){this.mouseThrough=this.mouseThrough=!0,this.updateTopInfo(),this.initNodeCombo(),this.initCoinCombo(),this.initArenaTypes(),this.onClickTab(1);var i=Laya.stage.width-X.DESIGN_WIDTH>>1;this.leftX=this.leftMenu.x,this.leftMenu.x=this.leftX-i-this.leftMenu.width,Laya.Tween.to(this.leftMenu,{x:this.leftX-i},500),R.intance.testNodes()}updateTopInfo(){this.arenaType=O.instance.arenaType;var e=R.intance.m_dicArenaTypes.get(this.arenaType);this.tf_name.text=d.instance.getLanguage(e.name),this.updateLocalAssets()}updateLocalAssets(){this.tf_3005.text=Te.filterNumFormat(L.instance.getConsumeValue(xe.TYPE_GOLD),0)}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.list_room.vScrollBarSkin="",this.list_room.array=[],Laya.timer.loop(1e3,this,this.refreshRoomTime),this.btn_create.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_create]),y.intance.on(h.ROLE_INFO_CHANGE,this,this.updateTopInfo),y.intance.on(At.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),y.intance.on(h.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),y.intance.on(h.EVENT_CHECK_NODE_SELECT,this,this.onNodeSelected),y.intance.on(h.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom)}setTab(e){for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("btn_yellowBg").visible=!0,this["btn_"+i].getChildByName("Label").color="#143268"):(this["btn_"+i].getChildByName("btn_yellowBg").visible=!1,this["btn_"+i].getChildByName("Label").color="#ffffff")}onClickTab(e){if(this.currTab!=e){if(this.list_room.visible=!1,this.setTab(e),e==1){this.arenaLv=1;var i=this.getRoomByType()}else if(e==2){this.arenaLv=2;var i=this.getRoomByType()}else if(e==3){this.arenaLv=3;var i=this.getRoomByType()}}}async getRoomByType(){Laya.timer.clear(this,this.getRoomByType),this.arenaType=O.instance.arenaType;let e=await k.requestPost("wxgame/room/list",{lv:this.arenaLv,coinTypeList:this.coinTypes,arenaType:this.arenaType,nodeIds:this.nodeIds});this.list_room.array=e.roomList,this.list_room.array.length>0?this.noDataBox.visible=!1:this.noDataBox.visible=!0,this.list_room.visible=!0,Laya.timer.once(3e3,this,this.getRoomByType)}refreshRoomTime(){this.refreshRoomBtnRed();let e=this.list_room.array;if(!(e.length<1)){for(let i=0;i<e.length;i++)if(e[i]){let n=e[i];n.state==0?n.joinCd-=1e3:n.fightEndTime-=1e3}this.list_room.refresh()}}initArenaTypes(){var e=R.intance.m_dicArenaTypes.get(O.instance.arenaType),i=e.arenaLvs,n=[1,2,3];n.forEach(r=>{var o=this["btn_"+r],s=o.getChildByName("img_lock"),l=o.getChildByName("img_red");i.indexOf(r)!=-1?(o.disabled=!1,s.visible=!1):(o.disabled=!0,s.visible=!0)})}initCoinCombo(){O.instance.arenaType==3&&(this.list_coin.visible=!1);var e=R.intance.m_dicArenaTypes.get(O.instance.arenaType);this.coinTypes=[];var i=e.coinTypes;this.coinDatas=[],i.forEach(n=>{this.coinTypes.push(n);var r=R.intance.m_dicItems.get(n);this.coinDatas.push([n,!0,d.instance.getLanguage(r.name)])}),this.list_coin.array=this.coinDatas}onCoinSelected(){this.coinTypes=[],this.coinDatas.forEach(e=>{e[1]&&this.coinTypes.push(e[0])}),console.log("您选中了 coinType"+this.coinTypes),this.getRoomByType()}initNodeCombo(){this.nodeIds=[];var e=R.intance.m_dicNodes.values;this.nodeDatas=[],e.forEach(i=>{this.nodeIds.push(i.id),this.nodeDatas.push([i.id,!0,i])}),this.list_node.array=this.nodeDatas}onNodeSelected(){this.nodeIds=[],this.nodeDatas.forEach(e=>{e[1]&&this.nodeIds.push(e[0])}),console.log("您选中了 nodeType"+this.nodeIds),this.getRoomByType()}refreshRoomBtnRed(){var e=O.instance.arenaType;this.img_red_1.visible=L.instance.getRedDotById(it.instance["ROOM_"+e+"_1"]),this.img_red_2.visible=L.instance.getRedDotById(it.instance["ROOM_"+e+"_2"]),this.img_red_3.visible=L.instance.getRedDotById(it.instance["ROOM_"+e+"_3"])}async onclickBtnHandler(e){switch(e){case this.btn_create:H.intance.openModule(f.CreateRoomDialog,[this.arenaLv]);break;default:M.instance.notice(d.instance.getLanguage(12));break}}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}onDisable(){y.intance.off(h.ROLE_INFO_CHANGE,this,this.updateTopInfo),y.intance.off(At.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),y.intance.off(h.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),y.intance.off(h.EVENT_CHECK_NODE_SELECT,this,this.onNodeSelected),y.intance.off(h.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}onEnterMatchRoom(e){e?Laya.timer.once(3e3,this,this.getRoomByType):Laya.timer.clear(this,this.getRoomByType)}};hl.M_B_FIRST_Open=!0,hl=p([JE("Kvjumjs4Q--HdgEZ8LzawA")],hl);var Up=class extends Laya.Box{};var{regClass:eT}=Laya,Vp=class extends Up{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.check_coin.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,!e)return;this.addEvent();let i=e;this.check_coin.selected=i[1];var n=i[2];this.img_node.skin=C.instance.getNodeIcon(n.area)}onCheck(){this._dataSource[1]=this.check_coin.selected,y.intance.event(h.EVENT_CHECK_NODE_SELECT)}};Vp=p([eT("81z6wk15RUi5m_pFud3KHg")],Vp);var yi=class{constructor(){}};yi.GREEN="#2ac84b",yi.YELLOW="#e8c833",yi.RED="#e04343";var Fp=class extends Laya.Box{};var{regClass:tT}=Laya,zp=class extends Fp{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.nodeItem=e,this.img_node.skin=C.instance.getNodeIcon(this.nodeItem.area),this.tf_node.text=d.instance.getLanguage(this.nodeItem.name),this.onGameDelay(this.nodeItem.dT)}onGameDelay(e){var i=R.intance.getGeneralValueById(6),n=i[0],r=i[1];this.tf_delay.text=e+"ms",e>r?(this.img_delay.skin="res/common/comm/img_com_xinhao3.png",this.tf_delay.color=yi.RED):e>n?(this.img_delay.skin="res/common/comm/img_com_xinhao2.png",this.tf_delay.color=yi.YELLOW):(this.img_delay.skin="res/common/comm/img_com_xinhao1.png",this.tf_delay.color=yi.GREEN)}startTest(){Laya.timer.loop(5e3,this,this.onTestUrl)}onTestUrl(){k.stopHeartInStage||(this.nodeItem&&this.nodeItem.testUrl(),this.onGameDelay(this.nodeItem.dT))}onDisable(){Laya.timer.clearAll(this)}};zp=p([tT("hhMSfaGLSJmVqJcF08xLgA")],zp);var Gp=class extends Laya.Box{};var{regClass:iT}=Laya,jp=class extends Gp{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&(this.addEvent(),this.img_icon.skin=C.instance.getNodeIcon(i.area),this.tf_name.text=d.instance.getLanguage(i.name),this.nodeDelaySign.dataSource=i)}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};jp=p([iT("3WEF588kThqDCYUgf5gM6w")],jp);var Kp=class extends Laya.Dialog{};var{regClass:aT}=Laya,Wp=class extends Kp{constructor(){super()}onEnable(){this.list_airdrop.visible=!1,this.tf_consume.text=d.instance.getUILang("Consume items"),this.tf_value.text=d.instance.getUILang("value/U"),this.setOpenData()}async setOpenData(){var t=await k.requestPost("wxgame/money/drawTokenPayOutRecord",{});t&&(t.records.push(void 0),this.list_airdrop.array=t.records,this.list_airdrop.visible=!0,!t.records||t.records.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1)}onDisable(){}};Wp=p([aT("u4LW1QxJTQOj64w92cnRVg")],Wp);var dt=class dt{constructor(){}static formatMM(t){if(t<=0)return"00:000";let e,i;e=t/1e3,i=t%1e3;let n="";return e<=9&&(n+="0"),n+=Math.floor(e),n+=":",i<=9?n+="00":i<=99&&(n+="0"),n+=i,n}static format(t,e=":",i=!0){if(t<=0)return i?"00:00:00":"00:00";let n,r,o,s,l;s=t/3600,o=t%3600,l=o/60,n=o%60;let c="";return i&&(s<=9&&(c+="0"),c+=Math.floor(s)+e),l<=9&&(c+="0"),c+=Math.floor(l)+e,Math.ceil(n)<=9&&(c+="0"),c+=Math.ceil(n),c}static formatWithDay(t,e=":"){if(t<=0)return"00:00";let i,n,r,o,s;n=t/86400,r=t%86400,o=r/3600,r=r%3600,s=r/60,i=r%60;let l="";if(n>=1){let c=n>1?2005:2003;l=d.instance.getLanguage(c,Math.floor(n))+" ",o<=9&&(l+="0"),i%2!=0&&(e=ge.getColorText(e,"#412b20")),l+=Math.floor(o)+e,s<=9&&(l+="0"),l+=Math.floor(s)}else o<=9&&(l+="0"),l=Math.floor(o)+e,s<=9&&(l+="0"),l+=Math.floor(s)+e,Math.ceil(i)<=9&&(l+="0"),l+=Math.ceil(i);return l}static getTimeArray(t,e="HH-MM-SS"){if(t=Math.max(0,t),e.indexOf("-")==-1)return[];let i=[],n=e.split("-");for(let r of n)r=="DD"?i.push(Math.floor(t/dt.OneDaySceond)):r=="HH"?i.push(Math.floor(t%dt.OneDaySceond/dt.OneHourSceond)):r=="MM"?i.push(Math.floor(t%dt.OneHourSceond/dt.OneMiniuteSecond)):r=="SS"&&i.push(t%dt.OneMiniuteSecond);return i}static getServerDate(t){return new Date(t)}static formatTime(t){return(parseInt(t/60+"")+100).toString().substring(1)+":"+(parseInt(t%60+"")+100).toString().substring(1)}static formatTime000000(t){return t?(parseInt(t/3600+"")+100).toString().substring(1)+":"+(parseInt(t%3600/60+"")+100).toString().substring(1)+":"+(parseInt(t%60+"")+100).toString().substring(1):"00:00:00"}static formatTimeStamp(t,e="YY-MT-DD HH:MM:SS"){let i=dt.getServerDate(t),n="";if(e.indexOf("YY")>=0&&(n=i.getFullYear()+"",e=e.replace("YY",n)),e.indexOf("MT")>=0){let r=i.getMonth()+1;r>9?n=r+"":n="0"+r,e=e.replace("MT",n)}if(e.indexOf("DD")>=0){let r=i.getDate();r>9?n=r+"":n="0"+r,e=e.replace("DD",n)}if(e.indexOf("HH")>=0){let r=i.getHours();r>9?n=r+"":n="0"+r,e=e.replace("HH",n)}if(e.indexOf("MM")>=0){let r=i.getMinutes();r>9?n=r+"":n="0"+r,e=e.replace("MM",n)}if(e.indexOf("SS")>=0){let r=i.getSeconds();r>9?n=r+"":n="0"+r,e=e.replace("SS",n)}return e}static formatTimeStamps(t,e="YY-MT-DD HH:MM:SS"){let i=dt.getServerDate(t),n=e;return n=dt.parseTimeDetail(i,n,"YY",!1),n=dt.parseTimeDetail(i,n,"MT",!1),n=dt.parseTimeDetail(i,n,"DD",!1),n=dt.parseTimeDetail(i,n,"HH",!0),n=dt.parseTimeDetail(i,n,"MM",!0),n=dt.parseTimeDetail(i,n,"SS",!0),n}static parseTimeDetail(t,e,i,n){if(e.indexOf(i)>=0){let r,o;i=="YY"?o=t.getFullYear():i=="MT"?o=t.getMonth()+1:i=="DD"?o=t.getDate():i=="HH"?o=t.getHours():i=="MM"?o=t.getMinutes():i=="SS"&&(o=t.getSeconds()),o>9||!n?r=o.toString():r="0"+o,e=e.replace(i,r)}return e}static getServerTimeStr(){return dt.formatTimeStamp(Laya.timer.currTimer)}static getTimeArr(){return dt.getServerTimeStr().split("/")}static get getDay(){let e=dt.getServerTimeStr().split("/");return parseInt(e[2])}static parseSheetTime(t){let e="";if(t){let i=t.length;for(let n=0;n<i;n++){let r="";t[n]<10?r="0"+t[n]:r=t[n],n!==i-1&&(r=r+":"),e+=r}}return e}static dateStringToTimestamp(t,e){let[i,n,r]=t.split("-").map(Number),o=Number(e),s=new Date(i,n-1,r,o).getTime();return Number(s)}static getCurrentDayTimestamp(){let t=new Date,e=t.getHours();return t.setHours(e,0,0,0),t.getTime()}static getYearMonthDat(t){let e=new Date(t),i=e.getFullYear(),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):""+(e.getMonth()+1),r=e.getDate()<10?"0"+e.getDate():""+e.getDate();return`${i}-${n}-${r}`}static formatDayAndTime(t,e="-"){let i=new Date(t),n=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),o=String(i.getDate()).padStart(2,"0"),s=String(i.getHours()).padStart(2,"0"),l=String(i.getMinutes()).padStart(2,"0");return{date:`${n}${e}${r}${e}${o}`,time:`${s}:${l}`}}static formatTimeAgo(t){return t<60*1e3?d.instance.getLanguage(1188):t<60*60*1e3?d.instance.getLanguage(2004,Math.floor(t/6e4)):t<24*60*60*1e3?d.instance.getLanguage(2003,Math.floor(t/36e5)):d.instance.getLanguage(2002,Math.floor(t/(24*60*60*1e3)))}static colorTimeAgo(t){return t<60*1e3?"#43ef74":"#b4b4b4"}static formatTimeExpires(t){return t<60*1e3?d.instance.getLanguage(1214,t):t<60*60*1e3?d.instance.getLanguage(1215,Math.floor(t/6e4)):t<24*60*60*1e3?d.instance.getLanguage(1216,Math.floor(t/36e5)):d.instance.getLanguage(1217,Math.floor(t/(24*60*60*1e3)))}};dt.OneDaySceond=24*3600,dt.OneHourSceond=3600,dt.OneMiniuteSecond=60;var Ie=dt;var qp=class extends Laya.Box{};var{regClass:nT}=Laya,Yp=class extends qp{constructor(){super()}addEvent(){}set dataSource(t){if(super.dataSource=t,!t){this.visible=!1;return}this.setData(t),this.addEvent()}setData(t){let e=R.intance.getPuzzleExchangeByName("WBNB").value,i=Ie.formatDayAndTime(t.time);this.tf_day.text=i.date,this.tf_consume.text=`${t.count}`,this.tf_value.text=`${t.count*e}`,t.puzzleId==1?this.tf_limit.text=`${Te.filterNumFormat(t.coinValue,2)}`:this.tf_limit.text=`${Te.filterNumFormat(t.coinValue,6)}`;let n=R.intance.getPuzzleExchange(t.puzzleId).name;this.tf_type.text=`${n}`}};Yp=p([nT("gHc-YmsARYaK65kwDLBAAw")],Yp);var $p=class extends Laya.Scene{};var ht=class{constructor(){}};ht.TYPE_Consumption=1,ht.TYPE_Equipment=2,ht.TYPE_Currency=3,ht.TYPE_Hero=4,ht.TYPE_Fragment=5,ht.BACKTYPE_Consumption=1,ht.BACKTYPE_Equipment=3,ht.BACKTYPE_PA_CUP=4;function Xp(a,t){var e;t===void 0&&(t="0");var i=0,n=-1;a[0]=="-"&&(a=a.substring(1),Mv(a)||(i++,n=1,a.length)),t[0]=="-"&&(t=t.substring(1),Mv(t)||(i++,n=2,t.length)),a=Ft(a),t=Ft(t),e=Ov(Ft(a),Ft(t)),a=e[0],t=e[1],i==1&&(n===1?a=Av(a):n===2&&(t=Av(t)));var r=Qx(a,t);return i?i==2?"-"+Ft(r):a.length<r.length?Ft(r.substring(1)):"-"+Ft(Av(r)):Ft(r)}function Av(a){if(Mv(a))return a;for(var t="",e=a.length,i=a.split(".")[1],n=i?i.length:0,r=0;r<e;r++)a[r]>="0"&&a[r]<="9"?t+=9-parseInt(a[r]):t+=a[r];var o=n>0?"0."+new Array(n).join("0")+"1":"1";return Qx(t,o)}function Ft(a){var t=a.split(".");for(t[0]||(t[0]="0");t[0][0]=="0"&&t[0].length>1;)t[0]=t[0].substring(1);return t[0]+(t[1]?"."+t[1]:"")}function Ov(a,t){var e=a.split("."),i=t.split("."),n=e[0].length,r=i[0].length;return n>r?i[0]=new Array(Math.abs(n-r)+1).join("0")+(i[0]?i[0]:""):e[0]=new Array(Math.abs(n-r)+1).join("0")+(e[0]?e[0]:""),n=e[1]?e[1].length:0,r=i[1]?i[1].length:0,(n||r)&&(n>r?i[1]=(i[1]?i[1]:"")+new Array(Math.abs(n-r)+1).join("0"):e[1]=(e[1]?e[1]:"")+new Array(Math.abs(n-r)+1).join("0")),a=e[0]+(e[1]?"."+e[1]:""),t=i[0]+(i[1]?"."+i[1]:""),[a,t]}function Qx(a,t){var e;e=Ov(a,t),a=e[0],t=e[1];for(var i="",n=0,r=a.length-1;r>=0;r--){if(a[r]==="."){i="."+i;continue}var o=parseInt(a[r])+parseInt(t[r])+n;i=o%10+i,n=Math.floor(o/10)}return n?n.toString()+i:i}function Mv(a){return/^0[0]*[.]{0,1}[0]*$/.test(a)}function Wx(a){return(typeof a=="number"||typeof a=="bigint")&&(a=a.toString()),a[0]=="-"?a.substring(1):a}var Lt;(function(a){a[a.CEILING=0]="CEILING",a[a.DOWN=1]="DOWN",a[a.FLOOR=2]="FLOOR",a[a.HALF_DOWN=3]="HALF_DOWN",a[a.HALF_EVEN=4]="HALF_EVEN",a[a.HALF_UP=5]="HALF_UP",a[a.UNNECESSARY=6]="UNNECESSARY",a[a.UP=7]="UP"})(Lt||(Lt={}));function fl(a,t,e){if(t===void 0&&(t=0),e===void 0&&(e=Lt.HALF_EVEN),e===Lt.UNNECESSARY)throw new Error("UNNECESSARY Rounding Mode has not yet been implemented");(typeof a=="number"||typeof a=="bigint")&&(a=a.toString());var i=!1;a[0]==="-"&&(i=!0,a=a.substring(1));var n=a.split("."),r=n[0],o=n[1];if(t<0){if(t=-t,r.length<=t)return"0";var s=r.substr(0,r.length-t);return a=s+"."+r.substr(r.length-t)+o,s=fl(a,0,e),(i?"-":"")+s+new Array(t+1).join("0")}if(t==0)return r.length,qx(n[1],r,i,e)&&(r=Dv(r)),(i&&parseInt(r)?"-":"")+r;if(n[1]){if(n[1].length<t)return(i?"-":"")+r+"."+n[1]+new Array(t-n[1].length+1).join("0")}else return(i?"-":"")+r+"."+new Array(t+1).join("0");o=n[1].substring(0,t);var l=n[1].substring(t);return l&&qx(l,o,i,e)&&(o=Dv(o),o.length>t)?(i?"-":"")+Dv(r,parseInt(o[0]))+"."+o.substring(1):(i&&(parseInt(r)||parseInt(o))?"-":"")+r+"."+o}function qx(a,t,e,i){if(!a||a===new Array(a.length+1).join("0")||i===Lt.DOWN||!e&&i===Lt.FLOOR||e&&i===Lt.CEILING)return!1;if(i===Lt.UP||e&&i===Lt.FLOOR||!e&&i===Lt.CEILING)return!0;var n="5"+new Array(a.length).join("0");if(a>n)return!0;if(a<n)return!1;switch(i){case Lt.HALF_DOWN:return!1;case Lt.HALF_UP:return!0;case Lt.HALF_EVEN:default:return parseInt(t[t.length-1])%2==1}}function Dv(a,t){t===void 0&&(t=0),t||(t=1),typeof a=="number"&&a.toString();for(var e=a.length-1,i="",n=e;n>=0;n--){var r=parseInt(a[n])+t;r==10?(t=1,r=0):t=0,i+=r}return t&&(i+=t),i.split("").reverse().join("")}function yn(a){var t=a[0]==="-";for(t&&(a=a.substr(1));a[0]=="0";)a=a.substr(1);if(a.indexOf(".")!=-1)for(;a[a.length-1]=="0";)a=a.substr(0,a.length-1);return a==""||a=="."?a="0":a[a.length-1]=="."&&(a=a.substr(0,a.length-1)),a[0]=="."&&(a="0"+a),t&&a!="0"&&(a="-"+a),a}function Bv(a,t){a=a.toString(),t=t.toString();var e=0;a[0]=="-"&&(e++,a=a.substr(1)),t[0]=="-"&&(e++,t=t.substr(1)),a=yn(a),t=yn(t);var i=0,n=0;a.indexOf(".")!=-1&&(i=a.length-a.indexOf(".")-1),t.indexOf(".")!=-1&&(n=t.length-t.indexOf(".")-1);var r=i+n;if(a=yn(a.replace(".","")),t=yn(t.replace(".","")),a.length<t.length){var o=a;a=t,t=o}if(t=="0")return"0";for(var s=t.length,l=0,c=[],u=s-1,m="",b=0;b<s;b++)c[b]=a.length-1;for(var b=0;b<2*a.length;b++){for(var _=0,w=t.length-1;w>=u&&w>=0;w--)c[w]>-1&&c[w]<a.length&&(_+=parseInt(a[c[w]--])*parseInt(t[w]));_+=l,l=Math.floor(_/10),m=_%10+m,u--}return m=yn(rT(m,r)),e==1&&(m="-"+m),m}function rT(a,t){return t==0?a:(a=t>=a.length?new Array(t-a.length+1).join("0")+a:a,a.substr(0,a.length-t)+"."+a.substr(a.length-t,t))}function Pv(a,t,e){if(e===void 0&&(e=8),t==0)throw new Error("Cannot divide by 0");if(a=a.toString(),t=t.toString(),a=a.replace(/(\.\d*?[1-9])0+$/g,"$1").replace(/\.0+$/,""),t=t.replace(/(\.\d*?[1-9])0+$/g,"$1").replace(/\.0+$/,""),a==0)return"0";var i=0;t[0]=="-"&&(t=t.substring(1),i++),a[0]=="-"&&(a=a.substring(1),i++);var n=t.indexOf(".")>0?t.length-t.indexOf(".")-1:-1;if(t=Ft(t.replace(".","")),n>=0){var r=a.indexOf(".")>0?a.length-a.indexOf(".")-1:-1;if(r==-1)a=Ft(a+new Array(n+1).join("0"));else if(n>r)a=a.replace(".",""),a=Ft(a+new Array(n-r+1).join("0"));else if(n<r){a=a.replace(".","");var o=a.length-r+n;a=Ft(a.substring(0,o)+"."+a.substring(o))}else n==r&&(a=Ft(a.replace(".","")))}var s=0,l=t.length,c="",u=a.indexOf(".")>-1&&a.indexOf(".")<l?a.substring(0,l+1):a.substring(0,l);if(a=a.indexOf(".")>-1&&a.indexOf(".")<l?a.substring(l+1):a.substring(l),u.indexOf(".")>-1){var m=u.length-u.indexOf(".")-1;u=u.replace(".",""),l>u.length&&(m+=l-u.length,u=u+new Array(l-u.length+1).join("0")),s=m,c="0."+new Array(m).join("0")}for(e=e+2;s<=e;){for(var b=0;parseInt(u)>=parseInt(t);)u=Xp(u,"-"+t),b++;c+=b,a?(a[0]=="."&&(c+=".",s++,a=a.substring(1)),u=u+a.substring(0,1),a=a.substring(1)):(s||(c+="."),s++,u=u+"0")}return(i==1?"-":"")+Ft(fl(c,e-2))}function Rv(a,t){return a=a.toString(),t=t.toString(),t=Nv(t),Xp(a,t)}function Nv(a){return a[0]=="-"?a=a.substr(1):a="-"+a,a}function Yx(a,t){if(t==0)throw new Error("Cannot divide by 0");a=a.toString(),t=t.toString(),$x(a),$x(t);var e="";a[0]=="-"&&(e="-",a=a.substr(1)),t[0]=="-"&&(t=t.substr(1));var i=Rv(a,Bv(t,fl(Pv(a,t),0,Lt.FLOOR)));return e+i}function $x(a){if(a.indexOf(".")!=-1)throw new Error("Modulus of non-integers not supported")}function Xx(a,t){var e,i,n=!1;if(e=[a,t].map(function(o){return yn(o)}),a=e[0],t=e[1],a[0]=="-"&&t[0]!="-")return-1;if(a[0]!="-"&&t[0]=="-")return 1;if(a[0]=="-"&&t[0]=="-"&&(a=a.substr(1),t=t.substr(1),n=!0),i=Ov(a,t),a=i[0],t=i[1],a.localeCompare(t)==0)return 0;for(var r=0;r<a.length;r++)if(a[r]!=t[r])return a[r]>t[r]?n?-1:1:n?1:-1;return 0}var Hv=function(){function a(t){t===void 0&&(t="0"),this.value=a.validate(t)}return a.validate=function(t){if(t){if(t=t.toString(),isNaN(t))throw Error("Parameter is not a number: "+t);t[0]=="+"&&(t=t.substring(1))}else t="0";if(t.startsWith(".")?t="0"+t:t.startsWith("-.")&&(t="-0"+t.substr(1)),/e/i.test(t)){var e=t.split(/[eE]/),i=e[0],n=e[1];i=Ft(i);var r="";i[0]=="-"&&(r="-",i=i.substring(1)),i.indexOf(".")>=0?(n=parseInt(n)+i.indexOf("."),i=i.replace(".","")):n=parseInt(n)+i.length,i.length<n?t=r+i+new Array(n-i.length+1).join("0"):i.length>=n&&n>0?t=r+Ft(i.substring(0,n))+(i.length>n?"."+i.substring(n):""):t=r+"0."+new Array(-n+1).join("0")+i}return t},a.prototype.getValue=function(){return this.value},a.prototype.setValue=function(t){this.value=a.validate(t)},a.getPrettyValue=function(t,e,i){e===void 0&&(e=3),i===void 0&&(i=","),t=a.validate(t);var n=t.charAt(0)=="-";n&&(t=t.substring(1));var r=t.indexOf(".");r=r>0?r:t.length;for(var o="",s=r;s>0;)s<e?(e=s,s=0):s-=e,o=t.substring(s,s+e)+(s<r-e&&s>=0?i:"")+o;return(n?"-":"")+o+t.substring(r)},a.prototype.getPrettyValue=function(t,e){return t===void 0&&(t=3),e===void 0&&(e=","),a.getPrettyValue(this.value,t,e)},a.round=function(t,e,i){if(e===void 0&&(e=0),i===void 0&&(i=Lt.HALF_EVEN),t=a.validate(t),isNaN(e))throw Error("Precision is not a number: "+e);return fl(t,e,i)},a.prototype.round=function(t,e){if(t===void 0&&(t=0),e===void 0&&(e=Lt.HALF_EVEN),isNaN(t))throw Error("Precision is not a number: "+t);return new a(fl(this.value,t,e))},a.abs=function(t){return t=a.validate(t),Wx(t)},a.prototype.abs=function(){return new a(Wx(this.value))},a.floor=function(t){return t=a.validate(t),t.indexOf(".")===-1?t:a.round(t,0,Lt.FLOOR)},a.prototype.floor=function(){return this.value.indexOf(".")===-1?new a(this.value):new a(this.value).round(0,Lt.FLOOR)},a.ceil=function(t){return t=a.validate(t),t.indexOf(".")===-1?t:a.round(t,0,Lt.CEILING)},a.prototype.ceil=function(){return this.value.indexOf(".")===-1?new a(this.value):new a(this.value).round(0,Lt.CEILING)},a.add=function(t,e){return t=a.validate(t),e=a.validate(e),Xp(t,e)},a.prototype.add=function(t){return new a(Xp(this.value,t.getValue()))},a.subtract=function(t,e){return t=a.validate(t),e=a.validate(e),Rv(t,e)},a.prototype.subtract=function(t){return new a(Rv(this.value,t.getValue()))},a.multiply=function(t,e){return t=a.validate(t),e=a.validate(e),Bv(t,e)},a.prototype.multiply=function(t){return new a(Bv(this.value,t.getValue()))},a.divide=function(t,e,i){return t=a.validate(t),e=a.validate(e),Pv(t,e,i)},a.prototype.divide=function(t,e){return new a(Pv(this.value,t.getValue(),e))},a.modulus=function(t,e){return t=a.validate(t),e=a.validate(e),Yx(t,e)},a.prototype.modulus=function(t){return new a(Yx(this.value,t.getValue()))},a.compareTo=function(t,e){return t=a.validate(t),e=a.validate(e),Xx(t,e)},a.prototype.compareTo=function(t){return Xx(this.value,t.getValue())},a.negate=function(t){return t=a.validate(t),Nv(t)},a.prototype.negate=function(){return new a(Nv(this.value))},a.stripTrailingZero=function(t){return t=a.validate(t),yn(t)},a.prototype.stripTrailingZero=function(){return new a(yn(this.value))},a.RoundingModes=Lt,a}();var Qp=class{};var{regClass:oT}=Laya,Zp=class extends $p{constructor(){super(...arguments);this.withdrawText=null;this.allProp=[];this.puzzleNum=0;this.addPuzzleNum=0;this.wbnbRate=0;this.webData=["MATCH","BSC","BSC_TESTNET","Ethereum"];this.webDataAir=["BSC"];this.tokenData=[];this.tokenDataAir=[];this.tokenTransData=[];this.currTab=0;this.type=1;this.coinType=-1;this.tokenIndex=0;this.tokenIndex2=0;this.items=[]}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP}onOpened(e){this.list_champ.array=[],e&&e.length>1&&(this.type=e[0],this.coinType=e[1],this.onClickTab(this.type)),this.withdrawText=this.withdrawCode.prompt}onEnable(){y.intance.on(h.EVENT_WELFARE_CLAIM,this,this.onClaimWelfare),this.btn_champDetail.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_champDetail]),this.btn_champRecord.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_champRecord]),this.btn_withdrawRecord.label=d.instance.getUILang("ExtractionRecords"),this.btn_airRecord.label=d.instance.getUILang("ExtractionRecords"),this.tf_serviceRate1.text=d.instance.getUILang("service rate"),this.tf_tokenLabMont.text=d.instance.getUILang("token"),this.initTokenWebData(),this.initTokenWebDataAir(),this.initTokenTransData(),this.handleSelectTokenTrans(0),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_4.on(Laya.Event.CLICK,this,this.onClickTab,[4]),this.btn_5.on(Laya.Event.CLICK,this,this.onClickTab,[5]),this.btn_7.on(Laya.Event.CLICK,this,this.onClickTab,[7]),this.btn_8.on(Laya.Event.CLICK,this,this.onClickTab,[8]),this.btn_transferMoney.on(Laya.Event.CLICK,this,this.onTransferMoney),this.rechargeCode.on(Laya.Event.INPUT,this,this.onRechargeCodeInput),this.rechargeCode.on(Laya.Event.BLUR,this,this.testRechargeCodeInput),this.withdrawCode.on(Laya.Event.INPUT,this,this.onRechargewithdrawCodeInput),this.withdrawCode.on(Laya.Event.BLUR,this,this.testInputData),y.intance.on(h.CHANGE_ASSET_CHAIN,this,this.changeAssetChain),this.btn_hireRecord.on(Laya.Event.CLICK,this,this.onHireRecord),this.btn_proxyRecord.on(Laya.Event.CLICK,this,this.onProxyRecord),this.btn_claimHire.on(Laya.Event.CLICK,this,this.onClaimHire),this.btn_claimProxy.on(Laya.Event.CLICK,this,this.onClaimProxy),this.list_web.renderHandler=Laya.Handler.create(this,this.onWebItemRender,null,!1),this.list_token.renderHandler=Laya.Handler.create(this,this.onTokenItemRender,null,!1),this.list_web2.renderHandler=Laya.Handler.create(this,this.onWebItemRender2,null,!1),this.list_token2.renderHandler=Laya.Handler.create(this,this.onTokenItemRender2,null,!1),this.list_token3.renderHandler=Laya.Handler.create(this,this.onTokenItemRender3,null,!1),this.list_token4.renderHandler=Laya.Handler.create(this,this.onTokenItemRender4,null,!1),this.box_web.on(Laya.Event.CLICK,this,this.onOpenWeb,[this.img_web_pad]),this.box_web2.on(Laya.Event.CLICK,this,this.onOpenWeb,[this.img_web_pad2]),this.box_tokenTrans.on(Laya.Event.CLICK,this,this.onOpenWeb,[this.img_token_pad4]),this.box_token.on(Laya.Event.CLICK,this,this.onOpenToken,[this.img_token_pad]),this.box_token2.on(Laya.Event.CLICK,this,this.onOpenToken,[this.img_token_pad2]),this.box_token3.on(Laya.Event.CLICK,this,this.onOpenToken,[this.img_token_pad3]),this.box_token4.on(Laya.Event.CLICK,this,this.onOpenToken,[this.img_token_pad4]),this.btn_confirm.on(Laya.Event.CLICK,this,this.onbtnConfirm),this.btn_max.on(Laya.Event.CLICK,this,this.onbtnMax),this.list_web.selectHandler=new Laya.Handler(this,this.handleSelectWeb),this.list_token.selectHandler=new Laya.Handler(this,this.handleSelectToken),this.list_web2.selectHandler=new Laya.Handler(this,this.handleSelectWebWithdraw),this.list_token2.selectHandler=new Laya.Handler(this,this.handleSelectTokenWithdraw),this.list_token3.selectHandler=new Laya.Handler(this,this.handleSelectTokenAir),this.list_token4.selectHandler=new Laya.Handler(this,this.handleSelectTokenTrans),this.tf_adress.text=K.instance.walletAddress,this.tf_adressAir.text=K.instance.walletAddress,this.btn_withdraw.on(Laya.Event.CLICK,this,this.onBtnWithdraw),this.btn_withdrawRecord.on(Laya.Event.CLICK,this,this.onBtnWithdrawRecord),this.btn_jianE.on(Laya.Event.CLICK,this,this.onBtnJianE),this.btn_addE.on(Laya.Event.CLICK,this,this.onBtnAddE),this.btn_addMax.on(Laya.Event.CLICK,this,this.onBtnAddMax),this.btn_airRecord.on(Laya.Event.CLICK,this,this.onBtnAirRecord),y.intance.on(h.EVENT_ADD_MONEY_ADDRESS,this,this.onAddMoneyAddress),y.intance.on(h.REFRESH_ALL_WITHDRAW_DATA,this,this.refreshWithdrawData),this.btn_Combine.on(Laya.Event.CLICK,this,this.onBtnCombine),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.box_all.visible=!1,this.initDataView()}setTab(e){for(let i=1;i<9;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b",this["box_"+i]&&(this["box_"+i].visible=!0)):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#4e87b7",this["box_"+i]&&(this["box_"+i].visible=!1))}async initDataView(){this.destroyed||(this.type?this.onClickTab(this.type):this.onClickTab(5),this.list_hire.visible=!1,this.list_proxy.visible=!1,this.list_reward.visible=!1,this.listHireReward.visible=!1)}async showHireData(){var e=await k.requestPost("wxgame/lease/outline",{});if(e&&e.reward){let n=me.processItemsArray(e.reward);e.reward.length>0?this.btn_claimHire.disabled=!1:this.btn_claimHire.disabled=!0;let r=n[0];this.list_hire.array=r,this.list_hire.selectedIndex=-1,this.list_hire.visible=!0,e.leaderCount?this.tf_hireNum.text=d.instance.getLanguage(1179,e.leaderCount):this.tf_hireNum.text=d.instance.getLanguage(1179,0);let o=n[1];var i=[];o.forEach(s=>{var l=new Fe(s.id);l.newAddCnt=s.count,i.push(l)}),this.listHireReward.array=i,this.listHireReward.selectedIndex=-1,this.listHireReward.visible=!0}}async showProxyData(){var e=await k.requestPost("wxgame/lease/outline",{});if(e&&e.childReward){let r=me.processItemsArray(e.childReward),o=r[0],s=r[2];e.childReward.length>0?this.btn_claimProxy.disabled=!1:this.btn_claimProxy.disabled=!0;var i=[],n=s;n.forEach(l=>{var c=new Fe(l.id);c.newAddCnt=l.count,i.push(c)}),this.list_reward.array=i,this.list_reward.visible=!0,this.list_proxy.array=o,this.list_proxy.visible=!0,this.list_proxy.selectedIndex=-1,e.childCount?this.tf_proxyNum.text=d.instance.getLanguage(1180,e.childCount):this.tf_proxyNum.text=d.instance.getLanguage(1180,0)}}async onClickTab(e){if(this.currTab=e,this.setTab(e),this.box_all.visible=!0,e==1)this.box_1.visible=!0,await this.initContainer();else if(e==2)await this.initContainer();else if(e==3)this.showHireData();else if(e==4)this.showProxyData();else if(e==5){var i=await k.requestPost("wxgame/welfare/outline",{});i?(this.tf_champNum.text=d.instance.getLanguage(1133)+" "+i.welfareCount,this.list_champ.array=i.welfareDtoList,!i.welfareDtoList||i.welfareDtoList.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1):M.instance.notice(d.instance.getLanguage(135))}else e==7?this.initContainerAir():e==8&&(this.list_address.array=[null],console.log(88888))}async handleClickBtn(e){switch(e){case this.btn_champDetail:{let i=await k.requestPost("wxgame/welfare/list",{});i.welfareDtoList?H.intance.openModule(f.ChampDetailDialog,i.welfareDtoList):M.instance.notice(d.instance.getLanguage(135))}break;case this.btn_champRecord:{let i=await k.requestPost("wxgame/welfare/takeList",{});i.welfareDtoList?H.intance.openModule(f.ChampRecordDialog,i.welfareDtoList):M.instance.notice(d.instance.getLanguage(135))}break}}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}onClaimWelfare(e){var i=this.list_champ.array;if(i instanceof Array){for(let n of i)if(n.coinType==e.coinType){n.takeValue=0;continue}this.list_champ.refresh()}}onDisable(){this.removeEvent()}removeEvent(){y.intance.off(h.EVENT_WELFARE_CLAIM,this,this.onClaimWelfare),this.btn_1.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_2.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_3.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_4.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_5.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_7.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_8.off(Laya.Event.CLICK,this,this.onClickTab),this.rechargeCode.off(Laya.Event.INPUT,this,this.onRechargeCodeInput),y.intance.off(h.CHANGE_ASSET_CHAIN,this,this.changeAssetChain),this.btn_hireRecord.off(Laya.Event.CLICK,this,this.onHireRecord),this.btn_proxyRecord.off(Laya.Event.CLICK,this,this.onProxyRecord),this.btn_claimHire.off(Laya.Event.CLICK,this,this.onClaimHire),this.btn_claimProxy.off(Laya.Event.CLICK,this,this.onClaimProxy),this.box_web.off(Laya.Event.CLICK,this,this.onOpenWeb),this.box_web2.off(Laya.Event.CLICK,this,this.onOpenWeb),this.box_token.off(Laya.Event.CLICK,this,this.onOpenToken),this.box_token2.off(Laya.Event.CLICK,this,this.onOpenToken),this.box_token3.off(Laya.Event.CLICK,this,this.onOpenToken),this.box_token4.off(Laya.Event.CLICK,this,this.onOpenToken),this.btn_confirm.off(Laya.Event.CLICK,this,this.onbtnConfirm),this.btn_max.off(Laya.Event.CLICK,this,this.onbtnMax),this.btn_transferMoney.off(Laya.Event.CLICK,this,this.onTransferMoney),this.rechargeCode.off(Laya.Event.INPUT,this,this.onRechargeCodeInput),this.rechargeCode.off(Laya.Event.BLUR,this,this.testRechargeCodeInput),this.withdrawCode.off(Laya.Event.INPUT,this,this.onRechargewithdrawCodeInput),this.withdrawCode.off(Laya.Event.BLUR,this,this.testInputData),this.box_tokenTrans.off(Laya.Event.CLICK,this,this.onOpenWeb),this.btn_withdraw.off(Laya.Event.CLICK,this,this.onBtnWithdraw),this.btn_withdrawRecord.off(Laya.Event.CLICK,this,this.onBtnWithdrawRecord),this.btn_jianE.off(Laya.Event.CLICK,this,this.onBtnJianE),this.btn_addE.off(Laya.Event.CLICK,this,this.onBtnAddE),this.btn_addMax.off(Laya.Event.CLICK,this,this.onBtnAddMax),this.btn_airRecord.off(Laya.Event.CLICK,this,this.onBtnAirRecord),this.btn_Combine.off(Laya.Event.CLICK,this,this.onBtnCombine),y.intance.offAllCaller(this)}onOpenWeb(e){e.visible==!1&&(e.visible=!0,e==this.img_token_pad4||Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onOpenToken(e){e.visible==!1&&(e.visible=!0,Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHideList))}onWebItemRender(e,i){e&&e.onChange&&e.onChange(this.list_web.selectedIndex==i)}onWebItemRender2(e,i){e&&e.onChange&&e.onChange(this.list_web2.selectedIndex==i)}onTokenItemRender(e,i){e&&e.onChange&&e.onChange(this.list_token.selectedIndex==i)}onTokenItemRender2(e,i){e&&e.onChange&&e.onChange(this.list_token2.selectedIndex==i)}onTokenItemRender3(e,i){e&&e.onChange&&e.onChange(this.list_token3.selectedIndex==i)}onTokenItemRender4(e,i){e&&e.onChange&&e.onChange(this.list_token4.selectedIndex==i)}async createWebList(){this.currTab==1?(this.list_web.array=this.webData,this.list_web.visible=!0):(this.list_web2.array=this.webData,this.list_web2.visible=!0),await this.initNetComboBox()}async createWebListAir(){await this.initNetComboBox()}async createTokenList(){if(await this.initTokenData(),this.tokenIndex=0,!(this.tokenData.length<=0))switch(this.currTab){case 1:this.list_token.array=this.tokenData,this.list_token.visible=!0,this.list_token.selectedIndex!==0&&(this.list_token.selectedIndex=0),this.tf_token.text=`${this.tokenData[0]}`;break;case 2:this.list_token2.array=this.tokenData,this.list_token2.visible=!0,this.list_token2.selectedIndex=0,this.tf_token2.text=`${this.tokenData[0]}`;break;case 7:this.list_token3.array=this.tokenDataAir,this.list_token3.visible=!0,this.list_token3.selectedIndex=0,this.tf_token3.text=`${this.tokenDataAir[0]}`;break;default:break}}onHideList(){this.img_web_pad.visible=!1,this.img_token_pad.visible=!1,this.img_web_pad2.visible=!1,this.img_token_pad2.visible=!1,this.img_token_pad3.visible=!1,this.img_token_pad4.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideList)}async initContainer(){await this.createWebList(),this.createTokenList(),this.currTab==1&&this.handleSelectWeb(1)}async initContainerAir(){await this.createWebListAir(),this.createTokenList(),this.currTab==1?this.handleSelectWeb(1):this.currTab==7&&this.handleSelectWebAir(1)}async getRestCoin(e){try{let i=await K.instance.getBalance2(e.token),n=e.tokenDecimals,r=Xa(i,n);this.tf_rest.text=`${me.truncateToTwoDecimalPlaces(Number(r))}`}catch(i){if(i instanceof Error){let n=i.message;console.log("剩余货币错误",n)}this.tf_rest.text="0"}}async initNetComboBox(){let e=await K.instance.walletClient.getChainId();if(!e)return;let i=K.instance.getChainNameByID(e);i==="MAINNET"&&(i="Ethereum");let n=this.getListIndexByName(i);switch(this.currTab){case 1:this.list_web.selectedIndex=n;break;case 2:this.list_web2.selectedIndex=n,this.handleSelectTokenWithdraw(0);break;case 7:this.handleSelectTokenAir(0);break;default:break}}getListIndexByName(e){return this.list_web.array.findIndex(i=>i==e)}async switchChain(e=!0){try{let i,n;switch(this.currTab){case 1:i=this.tf_web.text;break;case 2:i=this.tf_web2.text;break;case 7:break;default:break}i==="Ethereum"&&(i="MAINNET"),n=Ei[i];let r=await K.instance.walletClient.getChainId();if((n!==r||e)&&!await K.instance.switchChain(n)){console.log("切换失败，请手动切换"),await this.addChain(),await this.initNetComboBox();return}this.currTab===7&&await this.initTokenDataAir(),await this.createTokenList(),r=await K.instance.walletClient.getChainId(),console.log(this.tokenData),await this.initTokenData();let o=xe[`TYPE_${this.tokenData[0]}`]||xe.TYPE_TOX,s=R.intance.getCurrency(o);this.initNetComboBox()}catch(i){i instanceof Error&&i.message.includes("Unrecognized chain ID")&&await this.addChain(),this.initNetComboBox()}}async addChain(){let e;this.currTab===1?e=Ei[this.tf_web.text]:e=Ei[this.tf_web2.text],await K.instance.addChain(e);let i=await K.instance.walletClient.getChainId();i&&this.switchChain(i)}async handleSelectWeb(e){if(e!=-1){let i=this.list_web.selectedItem;this.tf_web.text=`${i}`,this.tokenIndex=0,await this.switchChain(!0),this.handleSelectToken(0)}}async handleSelectWebWithdraw(e){if(e!=-1){let i=this.list_web2.selectedItem;this.tf_web2.text=`${i}`,this.tokenIndex=0,await this.switchChain(!0),this.handleSelectTokenWithdraw(0)}}async handleSelectWebAir(e){}handleSelectToken(e){e!=-1&&(this.tf_token.text=`${this.tokenData[e]}`,this.tokenIndex=e,this.refreshToken())}async refreshWithdrawData(){this.handleSelectTokenWithdraw(this.list_token2.selectedIndex)}async handleSelectTokenWithdraw(e){if(e!=-1){console.log(this.tokenData),this.tf_token2.text=`${this.tokenData[e]}`;let n=0,r=me.getCurrencyIdByName(this.tf_token2.text),o=await K.instance.walletClient.getChainId();n=L.instance.getConsumeValue(r),this.tf_appAmount.text=`${me.truncateToTwoDecimalPlaces(n)}`;let s=R.intance.getACoin(o,r);s&&(this.tf_servicerate.text=`${s.Commission/100}%`);var i=await k.requestPost("wxgame/payOrder/query",{chainId:o});if(i&&i.selfData){let l=this.searchRestMoney(i.selfData,r);this.tf_canAmount.text=`${me.truncateToTwoDecimalPlaces(l)}`}}}async handleSelectTokenAir(e){if(e!=-1){this.wbnbRate=0,this.tf_token3.text=`${this.tokenDataAir[e]}`,this.allProp=await this.getItemByType();let i=R.intance.getPuzzleExchangeByName(this.tf_token3.text),n=i.items,r=i.redeemTickets,o=new Fe;o.m_iId=r[0],o.m_iNum=r[1],this.img_extRe.skin=C.instance.getItemIcon(o.itemItem.icon);let s=this.getAirdropArrData(this.allProp,n);this.puzzleNum==0?this.btn_Combine.disabled=!0:this.btn_Combine.disabled=!1,this.listPuzzle.array=s,this.addPuzzleNum=0,this.tf_token3.text=="WICP"||this.tf_token3.text=="WKLAY"||this.tf_token3.text=="WBNRY",this.puzzleNum==0?(this.tf_extraRec.text="0",this.tf_ExtractNum.text="0",this.addPuzzleNum=0):(this.addPuzzleNum=1,this.showExtraNum(1))}}handleSelectTokenTrans(e){if(e!=-1){this.tf_tokenName.text=`${this.tokenTransData[e]}`;let i=me.getCurrencyIdByName(this.tf_tokenName.text),n=L.instance.getConsumeValue(i);this.tf_tokenAmount.text=`${me.formatNumber(n)}`,this.img_token.skin=C.instance.getMoneyIcon(i)}this.img_token_pad4.visible=!1}async showExtraNum(e){this.tf_extraRec.text=`${e}`,this.tf_ExtractNum.text=`${this.addPuzzleNum}`}getAirdropArrData(e,i){let n=[];this.puzzleNum=0;for(let o=0;o<i.length;o++){let s=e.find(l=>l.itemItem.id==i[o][0]);if(s){n.push(s);let l=Te.formatNumber(s.m_iNum,8);n.length==1?this.puzzleNum=l:this.puzzleNum=Math.min(this.puzzleNum,l)}else{var r=new Fe(i[o][0]);r.newAddCnt=0,n.push(r),this.puzzleNum=0}}return this.refreshRestExtraValue(),n}refreshRestExtraValue(){let e=R.intance.getPuzzleExchangeByName(this.tf_token3.text).value,i=R.intance.getPuzzleExchangeByName("WBNB").value,n=`${this.puzzleNum*i}U / `;switch(this.tf_token3.text){case"WTOX":n+=`${Te.filterNumFormat(this.puzzleNum*e,2)}WTOX`;break;case"WBNB":n+=`${Te.filterNumFormat(this.puzzleNum*e*this.wbnbRate,6)}WBNB`;break;case"WGALA":n+=`${Te.filterNumFormat(this.puzzleNum*e*this.wbnbRate,6)}WGALA`;break;case"WGGG":n+=`${Te.filterNumFormat(this.puzzleNum*e*this.wbnbRate,6)}WGGG`;break;case"WICP":n+="?WICP";break;case"WKLAY":n+="?WKLAY";break;case"WBNRY":n+="?WBNRY";break;default:break}this.tf_extraVal.text=n}onRechargeCodeInput(){let e=Number(this.rechargeCode.text),i=me.isNumber(this.rechargeCode.text);(e<0||!i)&&(this.rechargeCode.text="0")}testRechargeCodeInput(){let e=Number(this.rechargeCode.text);this.rechargeCode.text=`${me.formatNumber(e)}`}async onbtnConfirm(){this.testRechargeCodeInput();let e=Number(this.tf_rest.text),i=Number(this.rechargeCode.text),n=await K.instance.walletClient.getChainId();if(!i){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(33),N.YES);return}if(e<i){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(34),N.YES);return}de.instance.showLoadingByInfo();let r=R.intance.getNetAddress(n),o=xe[`TYPE_${this.tf_token.text}`]||xe.TYPE_TOX,s=R.intance.getCurrency(o);await mn.instance.rechargeToken(i,s,r)&&(this.getRestCoin(s),L.instance.rechargeEnd=!0)}async refreshToken(){try{let e=xe[`TYPE_${this.tf_token.text}`]||xe.TYPE_TOX,i=R.intance.getCurrency(e),n=await K.instance.getBalance2(i.token),r=R.intance.getCurrency(e).tokenDecimals,o=Xa(n,r);this.tf_rest.text!==o&&(this.tf_rest.text=`${me.truncateToTwoDecimalPlaces(Number(o))}`,Laya.timer.clear(this,this.refreshToken))}catch{this.tf_rest.text="0"}}onbtnMax(){let e=Number(this.tf_rest.text);this.rechargeCode.text=`${e}`}initTokenWebData(){this.webData=[];var e=R.intance.getGeneralValueById(7);if(e){for(let i=0;i<e.length;i++)switch(e[i]){case 1:this.webData.push("MATCH");break;case 2:this.webData.push("BSC");break}X.vType!==2?(this.webData.push("BSC_TESTNET"),this.webData.push("SEPOLIA"),this.webData.push("OPTIMISM"),this.webData.push("Klaytn")):(this.webData.push("Ethereum"),this.webData.push("OPTIMISM"),this.webData.push("Klaytn"))}this.initTokenData()}initTokenWebDataAir(){this.webDataAir=[],X.vType!==2?(this.webDataAir.push("BSC_TESTNET"),this.webDataAir.push("SEPOLIA"),this.webDataAir.push("ICP"),this.webDataAir.push("Klaytn"),this.webDataAir.push("Optimism")):(this.webDataAir.push("BSC"),this.webDataAir.push("Ethereum"),this.webDataAir.push("ICP"),this.webDataAir.push("Klaytn"),this.webDataAir.push("Optimism")),this.initTokenDataAir()}initTokenTransData(){this.tokenTransData=["TOX","BTOX","BNB","BTC","GGG","ETH","GALA","KLAY","BNRY"],this.list_token4.array=this.tokenTransData}changeAssetChain(){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(36),N.YES,Laya.Handler.create(this,()=>{this.switchChain(!0)}))}async initTokenData(){let e=await K.instance.walletClient.getChainId();this.tokenData=[],e==56||e==97?this.tokenData=["BTOX","BNB","GGG"]:e==1||e==11155111?this.tokenData=["GALA","ETH"]:e==10?this.tokenData=["BNRY"]:e==8217?this.tokenData=["KLAY"]:this.tokenData=["TOX"]}async initTokenDataAir(){this.tokenDataAir=["WTOX","WBNB","WGGG","WGALA","WICP","WKLAY","WBNRY"]}onHireRecord(){H.intance.openModule(f.HireDetailDialog)}onProxyRecord(){H.intance.openModule(f.ProxyDetailDialog)}async onClaimHire(){var e=await k.requestPost("wxgame/lease/take",{});if(e&&e.reward.length>0){let i=e.reward,n=[];i.forEach(r=>{var o=new Vi;o.id=r.id,o.count=r.count,n.push(o)}),H.intance.openModule(f.RewardGetDialog,n)}this.showHireData()}async onClaimProxy(){var e=await k.requestPost("wxgame/lease/childTake",{});if(e&&e.reward&&e.reward.length>0){let i=e.reward;H.intance.openModule(f.RewardGetDialog,i)}this.showProxyData()}onRechargewithdrawCodeInput(){let e=Number(this.withdrawCode.text),i=me.isNumber(this.withdrawCode.text);(e<0||!i)&&this.withdrawCode.text!==this.withdrawText&&(this.withdrawCode.text="0")}async testInputData(){let e=Number(this.withdrawCode.text),i=me.getCurrencyIdByName(this.tf_token2.text),n=await K.instance.walletClient.getChainId(),r=R.intance.getACoin(n,i);if(!r)return;let o=Number(this.tf_appAmount.text);e>o?M.instance.notice(pe.instance.get(111)):e>r.maxAmount?M.instance.notice(d.instance.getLanguage(1211,r.maxAmount)):e<r.minAmount&&M.instance.notice(d.instance.getLanguage(1212,r.minAmount));let s=r.Commission,l=e*(1-s/1e4);i==xe.TYPE_TOX&&n==56?this.tf_arrive.text=`${l.toFixed(2).replace(/0+$/,"")}`:this.tf_arrive.text=`${l.toFixed(8).replace(/0+$/,"")}`}async onBtnWithdraw(){let e=Number(this.tf_appAmount.text),i=await K.instance.walletClient.getChainId(),n=Number(this.withdrawCode.text),r=xe[`TYPE_${this.tf_token2.text}`]||xe.TYPE_TOX,o=R.intance.getACoin(i,r);if(!o)return;let s=o.Commission,l=new Hv(s/1e4),c=new Hv(n),u=l.multiply(c).getValue();if(n>e){M.instance.notice(pe.instance.get(111));return}if(n>o.maxAmount){M.instance.notice(d.instance.getLanguage(1211,o.maxAmount));return}else if(n<o.minAmount){M.instance.notice(d.instance.getLanguage(1212,o.minAmount));return}let m=await K.instance.getAuthStatus();if(X.vType==2&&!m&&i==9001){M.instance.notice(pe.instance.get(113));return}let b=Number(this.tf_arrive.text),_=n*(1-s/1e4);r==xe.TYPE_TOX&&i==56?b=Number(parseFloat(_.toFixed(2))):b=_;let v=R.intance.getCurrency(r).token||ie.ADDRESS0,E=await k.requestPost("wxgame/payOrder/create",{chainId:i,coinType:r,payMoney:n,fee:u,arriveMoney:b,token:v});E&&E.errorCode==0&&ge.NoHeroError("Pending Review")}onBtnWithdrawRecord(){H.intance.openModule(f.WithDrawRecordDialog)}searchRestMoney(e,i){for(let n=0;n<e.length;n++)if(e[n][0]===i)return e[n][1];return 0}async onBtnCombine(){let i=R.intance.getPuzzleExchangeByName(this.tf_token3.text).id;var n=await k.requestPost("wxgame/equip/puzzleExchangeTicket",{puzzleId:i,count:this.addPuzzleNum});if(n){let o=await k.requestPost("wxgame/hero/bagList",{},!0,!0);L.instance.m_packageData.initData(o.data),this.handleSelectTokenAir(this.list_token3.selectedIndex);let s=n.reward;if(s){var r=new Vi;r.id=s[0].id,r.count=s[0].count,H.intance.openModule(f.RewardGetDialog,[r])}}}async onBtnAddExtr(){}async getItemByType(){var e=ht.TYPE_Consumption;this.items=[];for(var i=L.instance.m_packageData.getBackByType(e),n=0;n<i.length;n++){var r=i[n];r?this.items.push(r):this.items.push(new Fe(0))}return this.items}onBtnJianE(){this.addPuzzleNum=Math.max(0,this.addPuzzleNum-1),this.addPuzzleNum<=0?(this.tf_extraRec.text="0",this.tf_ExtractNum.text="0",this.btn_Combine.disabled=!0):this.showExtraNum(this.addPuzzleNum)}onBtnAddE(){this.addPuzzleNum=Math.min(this.puzzleNum,this.addPuzzleNum+1),this.showExtraNum(this.addPuzzleNum),this.addPuzzleNum>0&&(this.btn_Combine.disabled=!1)}onBtnAddMax(){}onBtnAirRecord(){H.intance.openModule(f.AirdropRecordDialog)}onAddMoneyAddress(){console.log("onAddMoneyAddress: ",this.list_address.array);let e=new Qp;e.num=0,this.list_address.array||(this.list_address.array=[null]),this.list_address.setItem(this.list_address.array.length-1,e),this.list_address.addItem(null),this.list_address.refresh(),this.list_address.tweenTo(this.list_address.array.length-1)}async onTransferMoney(){var e=[];let i=0;this.list_address.array.forEach(o=>{o&&o.checked&&o.playerName&&o.openid&&o.num>0&&(e.push({address:o.openid,num:o.num}),i+=o.num)});let n=Number(this.tf_tokenAmount.text);if(i>n){M.instance.notice(pe.instance.get(56));return}if(e.length>0){let o=me.getCurrencyIdByName(this.tf_tokenName.text);var r=await k.requestPost("wxgame/welfare/coinTransfer",{list:e,id:o});if(r){let s=r.remainingCoin;o==s[0]&&(this.tf_tokenAmount.text=`${me.formatNumber(s[1])}`),M.instance.notice(d.instance.getLanguage(2e3))}else M.instance.notice(d.instance.getLanguage(135))}else M.instance.notice("Please enter the recipient address.")}};Zp=p([oT("lWg_-biNSI2538WxA3KVVw")],Zp);var Jp=class extends Laya.Dialog{};var{regClass:sT}=Laya,em=class extends Jp{constructor(){super()}onEnable(){this.list_champ.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1)}setOpenData(t){t&&t instanceof Array&&(this.list_champ.array=t,!t||t.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1)}onItemRender(t,e){t.onSetIndex(e)}onDisable(){}};em=p([sT("mXj9kkXUQny2iuvlC1REmA")],em);var tm=class extends Laya.Box{};var{regClass:lT}=Laya,im=class extends tm{set dataSource(e){super.dataSource=e,this.welfareDto=e,this.welfareDto&&this.setCurrentOutPut()}onSetIndex(e){this.tf_id.text=e+1+""}setCurrentOutPut(){this.tf_createDate.text=Ie.formatTimeStamp(this.welfareDto.createDate,"YY-MT-DD");let e=this.welfareDto.coinType;this.img_coinType.skin=C.instance.getMoneyIcon(e),this.tf_type.text=d.instance.getUILang("Staking_Type_"+this.welfareDto.type),this.tf_coinValue.text=Te.formatNumberStr(this.welfareDto.coinValue,8),this.tf_remainValue.text=Te.formatNumberStr(this.welfareDto.remainValue,8),this.tf_remainDays.text=this.welfareDto.remainDays+""}};im=p([lT("b0cMZEy9S5q2q_vqsjWzDA")],im);var am=class extends Laya.Box{};var{regClass:cT}=Laya,nm=class extends am{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.btn_claim.on(Laya.Event.CLICK,this,this.onClaim),this.isAddEvent=!0)}async onClaim(){if(this.welfareOutlineDto.takeValue>0){let i=await k.requestPost("wxgame/welfare/take",{coinType:this.welfareOutlineDto.coinType});if(i){var e=new Vi;e.id=i.coinType,e.count=i.coinValue,H.intance.openModule(f.RewardGetDialog,[e]),y.intance.event(h.EVENT_WELFARE_CLAIM,i)}else M.instance.notice(d.instance.getLanguage(135))}}set dataSource(e){super.dataSource=e,this.welfareOutlineDto=e,this.welfareOutlineDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.welfareOutlineDto.coinType;this.img_coinType.skin=C.instance.getItemIcon(e),this.tf_allValue.text=Te.formatNumberStr(this.welfareOutlineDto.allValue,8),this.tf_todayRelease.text=Te.formatNumberStr(this.welfareOutlineDto.todayRelease,8),this.tf_takeValue.text=Te.formatNumberStr(this.welfareOutlineDto.takeValue,8),this.btn_claim.disabled=this.welfareOutlineDto.takeValue<=0}};nm=p([cT("XTGeF2FhTp2j7VZIhqRAtg")],nm);var rm=class extends Laya.Dialog{};var{regClass:uT}=Laya,om=class extends rm{constructor(){super()}onEnable(){this.list_champ.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1)}setOpenData(t){t&&t instanceof Array&&(this.list_champ.array=t,!t||t.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1)}onItemRender(t,e){t.onSetIndex(e)}onDisable(){}};om=p([uT("RzcjHDjIS62Ejw744kaKKw")],om);var sm=class extends Laya.Box{};var{regClass:pT}=Laya,lm=class extends sm{set dataSource(e){super.dataSource=e,this.welfareTakeDto=e,this.welfareTakeDto&&this.setCurrentOutPut()}onSetIndex(e){this.tf_id.text=e+1+""}setCurrentOutPut(){this.tf_takeTime.text=Ie.formatTimeStamp(this.welfareTakeDto.takeTime,"YY-MT-DD");var e=this.welfareTakeDto.reward,i=[];e&&e.forEach(n=>{var r=new Fe(n.id);r.newAddCnt=n.count,i.push(r)}),this.list_reward.array=i}};lm=p([pT("0TASbeEtRlmozr-j6sElTw")],lm);var cm=class extends Laya.Dialog{};var{regClass:mT}=Laya,um=class extends cm{constructor(){super()}onEnable(){this.setOpenData(),this.list_sum.visible=!1,this.list_sumProp.visible=!1,this.list_champ.visible=!1}async setOpenData(){var t=await k.requestPost("wxgame/lease/takeList",{});if(t){let i=t.list;i=me.addIndexToObjects(i),this.list_champ.array=i,this.list_champ.visible=!0;let n=me.sumItemCount(i),r=me.processItemsArray(n,!1),o=r[0],s=r[1];this.list_sum.array=o,this.list_sum.visible=!0,o.length>3?this.list_sum.y=506:this.list_sum.y=533;var e=[];s.forEach(l=>{var c=new Fe(l.id);c.newAddCnt=l.count,e.push(c)}),this.list_sumProp.array=e,this.list_sumProp.visible=!0}}onDisable(){}};um=p([mT("ZG7XYFvMTD-oZPNAmJhfIQ")],um);var pm=class extends Laya.Box{};var{regClass:dT}=Laya,mm=class extends pm{constructor(){super()}set dataSource(e){super.dataSource=e,this.itemDto=e,this.itemDto&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.itemDto.id;this.img_coinType.skin=C.instance.getItemIcon(e),this.tf_takeValue.text=Te.formatNumberStr(this.itemDto.count,8)}};mm=p([dT("S4XctoHfRm66A2jjw3rSsQ")],mm);var dm=class extends Laya.Box{};var{regClass:hT}=Laya,hm=class extends dm{constructor(){super();this.isAddEvent=!1;this.addL=1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.tf_uid.on(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),this.btn_add.on(Laya.Event.CLICK,this,this.onAdd),this.btn_reduce.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_reduce]),this.btn_plus.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_plus]),this.isAddEvent=!0,this.tf_num.on(Laya.Event.BLUR,this,this.testRechargeCodeInput))}testRechargeCodeInput(){let e=Number(this.tf_num.text),i=me.isNumber(this.tf_num.text);if(e<0||!i)this.tf_num.text="",this.addL=0;else{let n=me.formatNumber(e);this.tf_num.text=`${n}`,this.addL=n}this.setItemNum()}set dataSource(e){super.dataSource=e,this.moneyAddressVo=e,this.moneyAddressVo?(this.btn_add.visible=!1,this.box_address.visible=!0,this.tf_uid.text=this.moneyAddressVo.openid,this.tf_player_name.text=this.moneyAddressVo.playerName,console.log("data1: ",e),this.addL=this.moneyAddressVo.num,this.setItemNum()):(this.btn_add.visible=!0,this.box_address.visible=!1,console.log("data2: ",e)),this.addEvent()}onAdd(){y.intance.event(h.EVENT_ADD_MONEY_ADDRESS)}async setPlayerName(){try{if(this.tf_uid.text=="")return;this.moneyAddressVo.openid=this.tf_uid.text.toLowerCase();var e=await k.requestPost("wxgame/sys/queryName",{openid:this.tf_uid.text.toLowerCase()});e&&(console.log(e),this.tf_player_name.text=e.name,this.moneyAddressVo.checked=!0,this.moneyAddressVo.playerName=e.name)}catch{}}uidFocus(){this.moneyAddressVo.openid="",this.moneyAddressVo.playerName="",this.moneyAddressVo.checked=!1,this.tf_uid.text="",this.tf_player_name.text=""}handleClickBtn(e){switch(e){case this.btn_reduce:this.addL>1&&(this.addL=me.formatNumber(this.addL-1)),this.setItemNum();break;case this.btn_plus:this.addL=me.formatNumber(this.addL+1),this.setItemNum();break}}setItemNum(){this.addL?this.tf_num.text=this.addL+"":this.tf_num.text="",this.moneyAddressVo.num=this.addL}onDisable(){this.removeEvent()}removeEvent(){this.tf_uid.off(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.off(Laya.Event.FOCUS,this,this.uidFocus),this.btn_add.off(Laya.Event.CLICK,this,this.onAdd),this.tf_num.off(Laya.Event.BLUR,this,this.testRechargeCodeInput)}};hm=p([hT("J6QFYTIIQjqstznXD28nBA")],hm);var fm=class extends Laya.Box{};var{regClass:fT}=Laya,ym=class extends fm{constructor(){super();this.isAddEvent=!1}addEvent(){}set dataSource(e){super.dataSource=e,this.pledgeData=e,this.pledgeData&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.pledgeData.reward,i=me.processItemsArray(e,!1),n=i[0],r=i[1];this.list_champ.array=n,n.length>3?this.list_champ.y=14:this.list_champ.y=40,this.tf_id.text=`${this.pledgeData.index+1}`;var o=[];r.forEach(s=>{var l=new Fe(s.id);l.newAddCnt=s.count,o.push(l)}),this.listHireReward.array=o,this.tf_days.text=Ie.getYearMonthDat(this.pledgeData.takeTime)}};ym=p([fT("_mG5oDuaQY6l5yGUFmpG4w")],ym);var bm=class extends Laya.Box{};var{regClass:yT}=Laya,gm=class extends bm{constructor(){super();this.isAddEvent=!1}addEvent(){}set dataSource(e){super.dataSource=e,this.pledgeData=e,e&&(this.addEvent(),this.setCurrentOutPut(e))}async setCurrentOutPut(e){this.img_coinType.skin=C.instance.getItemIcon(e.id),this.tf_coinValue.text=Te.formatNumberStr(e.count,8)}};gm=p([yT("5t1LQunTRFOali6ENPwdqQ")],gm);var vm=class extends Laya.Dialog{};var{regClass:bT}=Laya,Lm=class extends vm{constructor(){super()}onEnable(){this.setOpenData(),this.list_sum.visible=!1,this.list_sumProp.visible=!1,this.list_champ.visible=!1}async setOpenData(){var t=await k.requestPost("wxgame/lease/childTakeList",{});if(t){let i=t.list;i=me.addIndexToObjects(i),this.list_champ.array=i,this.list_champ.visible=!0;let n=me.sumItemCount(i),r=me.processItemsArray(n,!1),o=r[0],s=r[1];this.list_sum.array=o,this.list_sum.visible=!0,o.length>3?this.list_sum.y=506:this.list_sum.y=533;var e=[];s.forEach(l=>{var c=new Fe(l.id);c.newAddCnt=l.count,e.push(c)}),this.list_sumProp.array=e}}onDisable(){}};Lm=p([bT("hbicTwT0TxSxlRep4P48Tw")],Lm);var _m=class extends Laya.Dialog{};var{regClass:gT}=Laya,xm=class extends _m{constructor(){super()}onEnable(){this.list_champ.visible=!1,this.setOpenData()}async setOpenData(){var t=await k.requestPost("wxgame/payOrder/list",{});if(t){let e=t.orderItems;this.list_champ.array=e,this.list_champ.visible=!0}!t.orderItems||t.orderItems.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1}onDisable(){}};xm=p([gT("y0xiZs-qSDWRAXN_oE10yg")],xm);var wm=class extends Laya.Box{};var{regClass:vT}=Laya,Im=class extends wm{constructor(){super()}addEvent(){}set dataSource(t){if(super.dataSource=t,!t){this.visible=!1;return}this.setData(t),this.addEvent()}setData(t){let e=Ie.formatDayAndTime(t.createTime);switch(this.tf_day.text=e.date,this.tf_minute.text=e.time,this.img_coinType.skin=C.instance.getMoneyIcon(t.coinType),this.tf_amounte.text=`${t.payMoney}`,this.tf_serviceRate.text=`${t.fee.toFixed(8).replace(/\.?0+$/,"")}`,this.tf_arrive.text=`${t.arriveMoney.toFixed(8).replace(/\.?0+$/,"")}`,this.tf_network.text=`${me.getKeyByValue(Ei,t.matchId)}`,t.status){case 0:this.tf_status.text="Pending review",this.tf_status.color="#4be063";break;case 1:this.tf_status.text="Approved",this.tf_status.color="#4be063";break;case 2:this.tf_status.text="Not passed",this.tf_status.color="#cd4a4a";break;case 3:this.tf_status.text="Uploading",this.tf_status.color="#ffffff";break;case 4:this.tf_status.text="Upload Failed",this.tf_status.color="#cd4a4a";break;case 5:var i=d.instance.getUILang("successfully");this.tf_status.text=i,this.tf_status.color="#4be063";break;case 6:this.tf_status.text="Withdraw success",this.tf_status.color="#4be063";break}}};Im=p([vT("tbS8gPlOTWuMdXb9g8wZAg")],Im);var Em=class extends Laya.Dialog{};var{regClass:LT}=Laya,Tm=class extends Em{constructor(){super();this.destroyDoCancel=!1;this.canClose=!0}onEnable(){this.on(Laya.Event.CLICK,this,this.onClickEvent)}onClickEvent(e){let i=e.target;i.name=="okBtn"?(this._okHandler&&this._okHandler.runWith(null),this.close()):i.name=="cancleBtn"&&(this.destroyDoCancel=!1,this._cancelHandler&&this._cancelHandler.runWith(null),this.close())}setOpenData(e){e&&(this._okHandler=e.okHandler,this._cancelHandler=e.cancelHandler,this.destroyDoCancel=e.destroyDoCancel,e.flag<0?(this.cancleBtn.visible=!1,this.okBtn.visible=!1,this.canClose=!1):e.flag&N.YES&&!(e.flag&N.NO)?(this.okBtn.x=this.width-this.okBtn.width>>1,this.cancleBtn.visible=!1,this.okBtn.label="Sure"):e.flag&N.NO&&!(e.flag&N.YES)?this.okBtn.visible=!1:e.flag&N.YES&&e.flag&N.NO,e.data&&this.alertDesc&&(e.data instanceof Array?(this.alertTitle.text=e.data[0],this.alertDesc.text=e.data[1]):this.alertDesc.text=e.data),e.initHandler&&e.initHandler.runWith(this))}onDisable(){this.destroyDoCancel&&this._cancelHandler&&this._cancelHandler.run(),this._okHandler=null,this._cancelHandler=null}close(e){this.canClose&&super.close(e)}};Tm=p([LT("8G0DBvD7T_2CVupdfQXrBw")],Tm);var Sm=class extends Laya.Dialog{};var{regClass:_T}=Laya,Cm=class extends Sm{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem;L.instance.headId=i.id,this.playerIcon.headSkin=L.instance.headId}}createHeadList(){let e=R.intance.m_dicHead;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,n=0;this.playerIcon.headSkin=L.instance.headId;for(let r of e.values){if(r.id==L.instance.headId){i=n;break}n++}this.list_head.selectedIndex=i}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=d.instance.getUILang("Upload picture"),n=d.instance.getUILang("Select Image"),r=d.instance.getUILang("Save changes");openUploadPic(this,e,i,n,r)}async openPicEnd(e,i){if(i.length>500){let n=await k.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);n&&(L.instance.headId=n.imgUrl,e.playerIcon.headSkin=n.imgUrl,console.log(n.imgUrl))}}onRegister(){let e=L.instance.headId;y.intance.event(h.EVENT_MODIFY_HEAD,[e]),this.close()}};Cm=p([_T("BmtPy79ySCyg4IuEQC4zsQ")],Cm);var km=class extends Laya.ComboBox{};var{regClass:xT}=Laya,Am=class extends km{set defaultLabel(t){this._defaultLabel=t,this._selectedIndex<0&&(this._button.label=t),this._button.labelAlign="center"}onEnable(){this.list=this.comboList}set dataSource(t){super.dataSource=t;var e=t;e&&(this.labels=e.join(","),console.log("comboData.length: "+e.length),this.list.repeatY=e.length,this.list.width=this.width,this.list.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1))}onCountryItemRender(t,e){t.onChange(this.list.selectedIndex==e)}set isOpen(t){if(console.log("isOpen: "+t),this._isOpen!=t)if(this._isOpen=t,this._button.selected=this._isOpen,this._isOpen){this._list||this._createList(),this._listChanged&&!this._isCustomList&&this.changeList(),this._itemChanged&&this.changeItem();var e=this.localToGlobal(Laya.Point.TEMP.setTo(0,0)),i=e.y+this._button.height;i=i+this._listHeight<=Laya.stage.height||e.y-this._listHeight<0?i:e.y-this._listHeight,this.img_pad.addChild(this._list),this.img_pad.pos(e.x,i),this.img_pad.visible=!0,Laya.stage.addChild(this.img_pad),this.img_pad.zOrder=1001,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.removeList),Laya.stage.on(Laya.Event.MOUSE_WHEEL,this,this._onStageMouseWheel),this._list.selectedIndex=this._selectedIndex}else this._list&&this._list.removeSelf(),this.img_pad&&this.img_pad.removeSelf()}};Am=p([xT("AqEOSlrnRkmI9RUPCJUVqQ")],Am);var Dm=class extends Laya.List{};var{regClass:wT}=Laya,Mm=class extends Dm{};Mm=p([wT("7DDHp602Rs6dL3bjAu4ArA")],Mm);var Bm=class extends Laya.Box{};var{regClass:IT}=Laya,Pm=class extends Bm{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&i.label&&(this.addEvent(),this.tf_name.text=i.label)}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};Pm=p([IT("nREGzTKFSX6LuiRnM5nPXA")],Pm);var Rm=class extends Laya.Box{};var{regClass:ET}=Laya,Nm=class extends Rm{addEvent(){}set dataSource(e){super.dataSource=e;var i=e;i&&(this.addEvent(),this.img_icon.skin=C.instance.getCountryIcon(i.id),this.tf_name.text=d.instance.getLanguage(i.name))}onChange(e){e?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};Nm=p([ET("LJ8PUf7kRCGUr4eT8Mhy3g")],Nm);var Om=class extends Laya.Dialog{};var xo=class extends Laya.Event{constructor(){super()}};xo.INIT_CREATELOGIN_EVENT="CreateLoginEvent:INIT_CREATELOGIN_EVENT";var{regClass:TT}=Laya,Hm=class extends Om{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER}onEnable(){y.intance.on(xo.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),y.intance.on(h.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),y.intance.on(h.EVENT_WAIT_PLAYERINFO,this,this.onWaitPlayerInfoBack),this.btn_setting.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_setting]),this.btn_radio1.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio1]),this.btn_radio2.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio2]),this.btn_register.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_register]),this.box_change.on(Laya.Event.CLICK,this,this.onChangeHead),this.input_name.prompt=d.instance.getLanguage(31),this.selectRadio(1),this.initCountry(),this.initCreateLoginView(),Se.instance.sendCustumEvent(23)}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onCountryItemRender(e,i){e.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(e){if(console.log("handleSelectCountry: "+e),e!=-1){let i=this.list_country.selectedItem;L.instance.countryId=i.id,this.img_flag.skin=C.instance.getCountryIcon(i.id),this.tf_country.text=d.instance.getLanguage(i.name)}}createCountryList(){let e=R.intance.m_dicCountry;this.list_country.array=e.values,this.list_country.visible=!0;let i=-1,n=0;for(let r of e.values){if(r.id==L.instance.countryId){i=n;break}n++}this.list_country.selectedIndex=i}onChangeHeadBack(e,i){this.input_name.text=e,L.instance.headId=i,this.playerIcon.headSkin=i}onChangeModifyHead(e){L.instance.headId=e,this.playerIcon.headSkin=e}onChangeHead(){H.intance.openModule(f.ChangeHeadDialog)}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=d.instance.getUILang("Upload picture"),n=d.instance.getUILang("Select Image"),r=d.instance.getUILang("Save changes");openUploadPic(this,e,i,n,r)}async openPicEnd(e,i){if(i.length>500){let n=await k.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);n&&(L.instance.headId=n.imgUrl,e.playerIcon.headSkin=n.imgUrl,console.log(n.imgUrl))}}selectRadio(e){let i=e==1;this.btn_radio1.selected=i,this.btn_radio2.selected=!i}handleClickBtn(e){switch(e){case this.btn_radio1:this.selectRadio(1);break;case this.btn_radio2:this.selectRadio(2);break;case this.btn_register:this.onRegister();break;case this.btn_setting:H.intance.openModule(f.GameSettingLanguageDialog);break}}async onRegister(){let e=this.input_name.text,i=this.btn_radio1.selected?1:2;if(e=e.trim(),e==""){M.instance.notice(d.instance.getLanguage(31));return}if(L.instance.countryId==-1){M.instance.notice(d.instance.getLanguage(1048));return}let n=await K.instance.createAcccount(e,i,L.instance.headId.toString(),L.instance.countryId);this.onWaitPlayerInfoBack(n)}onWaitPlayerInfoBack(e){e&&(de.instance.hideLoading(),L.instance.playerDto=e,this.close(),y.intance.event(h.EVENT_ENTER_MAIN))}initCreateLoginView(){}onDisable(){this.removeEvent()}removeEvent(){y.intance.off(xo.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),y.intance.off(h.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),y.intance.off(h.EVENT_WAIT_PLAYERINFO,this,this.onWaitPlayerInfoBack)}};Hm=p([TT("1K2SyFxcQY-12SasSSRXyQ")],Hm);var Um=class extends Laya.Dialog{};var{regClass:ST}=Laya,Vm=class extends Um{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}onEnable(){He.instance.playSoundByName(He.soundName32)}onDisable(){}};Vm=p([ST("szfg-Zt_RRWZ_nHMppjUMA")],Vm);var Fm=class extends Laya.Box{};var{regClass:CT}=Laya,zm=class extends Fm{set dataSource(t){super.dataSource=t;var e=t;e&&(this.img_icon.skin="res/role/img_icon_"+e[0]+".png",this.tf_name.text=d.instance.getUILang(e[1]),this.tf_num.text=e[2])}};zm=p([CT("WJ5TDeRBSkC9yMqJ72B0Ow")],zm);var Gm=class extends Laya.Box{};var{regClass:kT}=Laya,jm=class extends Gm{set dataSource(e){super.dataSource=e,this.headItem=e,this.headItem&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.headItem.id;this.playerIcon.headSkin=e}onChange(e){}};jm=p([kT("AwN_JFPwQsKswm1N53Bmkg")],jm);var ua=class ua{constructor(){}static trim(t,e=null){e||(e=[" ","\r",`
`,"	",String.fromCharCode(65279)]);var i,n,r;for(i=t,r=e.length,n=0;n<r;n++)i=ua.getReplace(i,e[n],"");return i}static getReplace(t,e,i){if(!t)return"";var n;return n=t.replace(new RegExp(e,"g"),i),n}static isEmpty(t){return t.length<1?!0:ua.emptyStrDic.hasOwnProperty(t)}static trimLeft(t){var e;e=0;var i;for(i=t.length;ua.isEmpty(t.charAt(e))&&e<i;)e++;return e<i?t.substr(e):""}static trimRight(t){var e;for(e=t.length-1;ua.isEmpty(t.charAt(e))&&e>=0;)e--;var i;return i=t.substring(0,e),e>=0?t.substring(0,e+1):""}static trimSide(t){var e;return e=ua.trimLeft(t),e=ua.trimRight(e),e}static shortStr(t,e){return t.length>e?t.substr(0,e)+"...":t}static shortHeroStr(t,e=10){return ua.abbreviateString(t,e)}static abbreviateString(t,e=11){if(t.length<=e)return t;{let i=Math.floor((e-3)/2);return t.slice(0,i)+"..."+t.slice(-i)}}static caseInsensitiveSearchWithRegex(t,e){return new RegExp(e,"i").test(t)}static formatWalletAddress(t){let n="...";return t.length<=12+10?t:`${t.substring(0,12)}${n}${t.substring(t.length-10)}`}};ua.emptyStrDic={" ":!0,"\r":!0,"\n":!0,"	":!0};var Ae=ua;var Km=class extends Laya.Dialog{};var{regClass:AT}=Laya,Wm=class extends Km{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}onEnable(){this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.btn_copy2.on(Laya.Event.CLICK,this,this.onCopy2),this.btn_changeHead.on(Laya.Event.CLICK,this,this.onChangeHead),this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.redemptionCode.on(Laya.Event.FOCUS,this,this.redemFocus),y.intance.on(h.ROLE_INFO_CHANGE,this,this.updateRoleInfo),this.updateRoleInfo()}redemFocus(){this.redemptionCode.text=""}updateRoleInfo(){let e=L.instance.playerDto;this.tf_name.text=e.name,this.img_sex.skin=e.sex==1?"res/role/img_icon_xb_1.png":"res/role/img_icon_xb_2.png",this.tf_uid.text=e.pid.toString(),this.tf_myCode.text=e.remCode,this.ally_num.text=`${e.remCount}`,this.tf_myCode.text==""?this.btn_copy2.disabled=!0:this.btn_copy2.disabled=!1,e.superRemCode?(this.btn_receive.disabled=!0,this.redemptionCode.text=`${e.superRemCode}`,this.yf_receive.text="Received"):this.yf_receive.text="Receive";var i=R.intance.m_dicCountry.get(e.country);this.img_country.skin=C.instance.getCountryIcon(e.country+""),this.tf_address.text=Ae.formatWalletAddress(K.instance.walletAddress);let n=e.icon;this.playerIcon.headSkin=n,this.onGetAttr(e.pid)}async onGetAttr(e){let i=this,n=await k.requestPost("wxgame/player/getPlayerInfo",{pid:e});n?(this.fighting_value.text=n.fightTimes,this.victory_num.text=n.winTimes,this.fail_num.text=`${n.fightTimes-n.winTimes}`,this.runAway_num.text=n.taopao):M.instance.notice(d.instance.getLanguage(135))}onChangeHead(){H.intance.openModule(f.SelectHeadDialog,!0)}async onReceive(){if(this.redemptionCode.text=="Enter the redemption code to claim equipment(unique)"||this.redemptionCode.text=="輸入兌換碼領取裝備（唯一）"||this.redemptionCode.text==""){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1123),N.YES,null);return}if(this.redemptionCode.text==this.tf_myCode.text&&this.redemptionCode.text!==""){le.instance().AlertByType(N.BASEALERTVIEW,"You cannot enter your own invitation code.",N.YES,null);return}let e=this.redemptionCode.text,i=await k.requestPost("wxgame/player/setRem",{code:e});i&&(H.intance.openModule(f.RemGetDialog),L.instance.playerDto.superRemCode=i.code,this.btn_receive.disabled=!0,this.yf_receive.text="Received",this.tf_myCode.text=i.recommendCode,L.instance.playerDto.remCode=i.recommendCode,this.tf_myCode.text==""?this.btn_copy2.disabled=!0:this.btn_copy2.disabled=!1)}onCopy(){let e=K.instance.walletAddress;doCopy(e),M.instance.notice(d.instance.getLanguage(132))}onCopy2(){let e=this.tf_myCode.text;doCopy(e),M.instance.notice(d.instance.getLanguage(132))}onDisable(){y.intance.off(h.ROLE_INFO_CHANGE,this,this.updateRoleInfo),this.redemptionCode.off(Laya.Event.FOCUS,this,this.redemFocus)}};Wm=p([AT("T7g565QQR7-fZgZNjVg92A")],Wm);var qm=class extends Laya.Dialog{};var{regClass:DT}=Laya,Ym=class extends qm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}setOpenData(e){}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.input_name.prompt=d.instance.getLanguage(31),this.initContainer();let e=R.intance.getGeneralValueById(13);this.tf_nameGold.text=e[1],this.img_nameGold.skin=C.instance.getMoneyIcon(e[0]),console.log(e)}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList(),this.initCountry()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem;L.instance.headId=i.id,this.playerIcon.headSkin=L.instance.headId}}createHeadList(){let e=R.intance.m_dicHead;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,n=0;L.instance.headId=L.instance.playerDto.icon,this.playerIcon.headSkin=L.instance.headId,this.input_name.text=L.instance.playerDto.name;for(let r of e.values){if(r.id==L.instance.headId){i=n;break}n++}this.list_head.selectedIndex=i}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onCountryItemRender(e,i){e.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(e){if(console.log("handleSelectCountry: "+e),e!=-1){let i=this.list_country.selectedItem;L.instance.countryId=i.id,this.img_flag.skin=C.instance.getCountryIcon(i.id),this.tf_country.text=d.instance.getLanguage(i.name)}}createCountryList(){let e=R.intance.m_dicCountry;this.list_country.array=e.values,this.list_country.visible=!0;let i=-1,n=0;L.instance.countryId=L.instance.playerDto.country;for(let r of e.values){if(r.id==L.instance.countryId){i=n;break}n++}this.list_country.selectedIndex=i}onBtnChangePic(){var e=Laya.Render.canvas.style.zIndex,i=d.instance.getUILang("Upload picture"),n=d.instance.getUILang("Select Image"),r=d.instance.getUILang("Save changes");openUploadPic(this,e,i,n,r)}async openPicEnd(e,i){if(i.length>500){let n=await k.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);n&&(L.instance.headId=n.imgUrl,e.playerIcon.headSkin=n.imgUrl,e.list_head.selectedIndex=-1,console.log(n.imgUrl))}}onRegister(){let e=this.input_name.text;if(e=e.trim(),e==""){M.instance.notice(d.instance.getLanguage(31));return}if(L.instance.playerDto.name!==e&&L.instance.getConsumeValue(xe.TYPE_GOLD)<Number(this.tf_nameGold.text)){M.instance.notice(pe.instance.get(51));return}L.instance.headId!=-1?this.onModify(e,L.instance.headId,L.instance.countryId):M.instance.notice(d.instance.getLanguage(134))}async onModify(e,i,n){if(e==""){M.instance.notice(d.instance.getLanguage(31));return}let r=await fo.instance.updateProfile(e,i.toString(),n);this.destroyed||(r?(L.instance.playerDto=r,this.close(),y.intance.event(h.ROLE_INFO_CHANGE)):M.instance.notice(d.instance.getLanguage(135)))}};Ym=p([DT("3CibwwHGSPG2Qkeq4rbMag")],Ym);var $m=class extends Laya.Scene{};var{regClass:MT,property:Die}=Laya,Xm=class extends $m{constructor(){super(...arguments);this.text=""}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP}onEnable(){}};Xm=p([MT("lukqyw9IQG6emThMQcQxNg")],Xm);var Qm=class extends Laya.Box{};var{regClass:BT}=Laya,Zm=class extends Qm{constructor(){super();this.friendData=null}addEvent(){this.btn_cancel.on(Laya.Event.CLICK,this,this.onClickCancel),this.btn_claim.on(Laya.Event.CLICK,this,this.onClickClaim)}onDisable(){this.removeEvent()}removeEvent(){this.btn_cancel.off(Laya.Event.CLICK,this,this.onClickCancel),this.btn_claim.off(Laya.Event.CLICK,this,this.onClickClaim)}set dataSource(e){super.dataSource=e,e&&(this.friendData=e,this.btn_claim.label=d.instance.getUILang("agree"),this.setData(e),this.addEvent())}setData(e){this.tf_name.text=e.name,this.img_flag.skin=C.instance.getCountryIcon(e.country),this.playerIcon.headSkin=e.icon}async onClickCancel(){let e=await k.requestPost("wxgame/friend/friendApplyHandle",{fid:this.friendData.id,agree:!1});console.log(e),e&&le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(310),N.YES,Laya.Handler.create(this,()=>{y.intance.event(h.CHANGE_FRIEND_APPLY_LIST,this.friendData.id)}))}async onClickClaim(){let e=R.intance.getGeneralValueById(11);if(L.instance.friendNum>=e){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(301),N.YES);return}let i=await k.requestPost("wxgame/friend/friendApplyHandle",{fid:this.friendData.id,agree:!0});console.log(i),i&&(le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(309),N.YES),y.intance.event(h.CHANGE_FRIEND_APPLY_LIST))}};Zm=p([BT("5M3de4CbRMertZBZtmoOIQ")],Zm);var Jm=class extends Laya.Box{};var{regClass:PT}=Laya,ed=class extends Jm{constructor(){super();this.friendData=null}addEvent(){this.btn_app.on(Laya.Event.CLICK,this,this.onClickApp)}onDisable(){this.removeEvent()}removeEvent(){this.btn_app.off(Laya.Event.CLICK,this,this.onClickApp)}async onClickApp(){let e=R.intance.getGeneralValueById(11);if(L.instance.friendNum>=e){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(301),N.YES);return}let i=await k.requestPost("wxgame/friend/addFriend",{openid:this.friendData.openid});console.log(i),i&&le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(307),N.YES,Laya.Handler.create(this,()=>{y.intance.event(h.REFRSH_APPLY_FRIEND_LIST,this.friendData.id)}))}set dataSource(e){if(super.dataSource=e,!e){this.visible=!1;return}this.btn_app.label=d.instance.getUILang("application"),console.log(e),this.friendData=e,this.setData(e),this.addEvent()}setData(e){this.tf_name.text=e.name,this.img_flag.skin=C.instance.getCountryIcon(e.country),this.playerIcon.headSkin=e.icon}};ed=p([PT("EI72MOH9RbqdGkjSCxI8Kg")],ed);var td=class extends Laya.Box{};var{regClass:RT}=Laya,id=class extends td{constructor(){super();this.friendData=null}addEvent(){this.btn_remove.on(Laya.Event.CLICK,this,this.onClickRemove),this.btn_talk.on(Laya.Event.CLICK,this,this.onClickTalk)}onDisable(){this.removeEvent()}removeEvent(){this.btn_remove.off(Laya.Event.CLICK,this,this.onClickRemove),this.btn_talk.off(Laya.Event.CLICK,this,this.onClickTalk)}set dataSource(e){super.dataSource=e,e&&(this.friendData=e,this.setData(e),this.addEvent())}setData(e){this.tf_name.text=e.name,this.img_flag.skin=C.instance.getCountryIcon(e.country),this.playerIcon.headSkin=e.icon,e.online?(this.tf_online.text="on line",this.tf_online.color="#43ef74"):(this.tf_online.text=Ie.formatTimeAgo(e.lastLoginTime),this.tf_online.color="#b4b4b4")}async onClickRemove(){await k.requestPost("wxgame/friend/delFriend",{fid:this.friendData.id})&&(le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(308),N.YES),y.intance.event(h.CHANGE_FRIEND_LIST,this.friendData.id))}async onClickTalk(){H.intance.openModule(f.PrivateChatDialog,this.friendData)}};id=p([RT("hh1cVJJ6Sr2JZvqUJFzF6Q")],id);var ad=class extends Laya.Scene{};var{regClass:NT,property:Uae}=Laya,nd=class extends ad{constructor(){super(...arguments);this.text="";this.refreshCd=0;this.friendData=null;this.recommendFriend=null;this.applyFriend=null;this.inputFriendAddress=!1}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP}onEnable(){this.list_friend.visible=!1,this.list_apply.visible=!1,this.list_add.visible=!1,this.btn_myFriend.on(Laya.Event.CLICK,this,this.onClickMy),this.btn_addFriend.on(Laya.Event.CLICK,this,this.onClickAdd),this.btn_application.on(Laya.Event.CLICK,this,this.onClickApp),this.btn_addByDress.on(Laya.Event.CLICK,this,this.onClickAddByDress),this.btn_lookup.on(Laya.Event.CLICK,this,this.onClickLookup),this.btn_refresh.on(Laya.Event.CLICK,this,this.onClickRefresh),this.tf_nickname.on(Laya.Event.FOCUS,this,this.nameFocus),y.intance.on(h.REFRSH_APPLY_FRIEND_LIST,this,this.deleApplyFriendList),y.intance.on(h.CHANGE_FRIEND_APPLY_LIST,this,this.onClickApp),y.intance.on(h.CHANGE_FRIEND_LIST,this,this.deleFriendList),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),this.close&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.onClickMy(),this.refreshRed()}setTabState(e,i,n,r){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?n:r}onClickMy(){this.box_1.visible=!0,this.box_2.visible=!1,this.box_3.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_myFriend,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_addFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_application,!1,"#143f6b","#7ff1fe"),this.setFriendData()}async setFriendData(){let e=await k.requestPost("wxgame/friend/friendList",{});if(e&&e.list){L.instance.friendNum=e.list.length,this.list_friend.array=e.list,this.list_friend.visible=!0,this.friendData=e.list;let i=this.countOnlineUsers(e.list);console.log(i);let n=R.intance.getGeneralValueById(11);this.tf_friendNum.text=`${L.instance.friendNum}/${n}`}else this.tf_friendNum.text="0/0";(!e||!e.list||e.list.length<1)&&(this.noDataBox.visible=!0),console.log(e)}async onClickAdd(){if(this.box_1.visible=!1,this.box_2.visible=!0,this.box_3.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_addFriend,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_myFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_application,!1,"#143f6b","#7ff1fe"),!this.recommendFriend||this.recommendFriend.length<=0){let e=await k.requestPost("wxgame/friend/recommend",{});e&&e.list&&(this.recommendFriend=e.list,this.list_apply.array=e.list,this.list_apply.visible=!0,this.list_apply.vScrollBarSkin="")}}async onClickAddByDress(){if(this.tf_uid.text==K.instance.walletAddress){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1162),N.YES),this.tf_uid.text="";return}let e=this.tf_uid.text;if(e.length<=0||!this.inputFriendAddress){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1298),N.YES);return}let i=R.intance.getGeneralValueById(11);if(L.instance.friendNum>=i){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(301),N.YES);return}if(this.friendData.findIndex(r=>r.openid==e.toLowerCase())>-1){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(302),N.YES);return}le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(303),N.SURE,Laya.Handler.create(this,async()=>{let r=await k.requestPost("wxgame/friend/addFriend",{openid:e});console.log(r),r&&M.instance.notice(pe.instance.get(307))}))}nameFocus(){this.tf_nickname.text=""}uidFocus(){this.tf_uid.text="",this.inputFriendAddress=!0}async onClickApp(){this.box_1.visible=!1,this.box_2.visible=!1,this.box_3.visible=!0,this.noDataBox.visible=!1,this.setTabState(this.btn_addFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_myFriend,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_application,!0,"#143f6b","#7ff1fe");let e=await k.requestPost("wxgame/friend/friendApplyList",{});e&&e.list&&(this.list_add.array=e.list,this.list_add.visible=!0,this.applyFriend=e.list,e.list.length<=0&&(this.Img_social.visible=!1)),(!e||!e.list||e.list.length<1)&&(this.noDataBox.visible=!0)}onDisable(){this.removeEvent()}removeEvent(){this.btn_myFriend.off(Laya.Event.CLICK,this,this.onClickMy),this.btn_addFriend.off(Laya.Event.CLICK,this,this.onClickAdd),this.btn_application.off(Laya.Event.CLICK,this,this.onClickApp),this.btn_addByDress.off(Laya.Event.CLICK,this,this.onClickAddByDress),this.btn_lookup.off(Laya.Event.CLICK,this,this.onClickLookup),this.btn_refresh.off(Laya.Event.CLICK,this,this.onClickRefresh),this.tf_nickname.off(Laya.Event.FOCUS,this,this.nameFocus),y.intance.off(h.REFRSH_APPLY_FRIEND_LIST,this,this.deleApplyFriendList),y.intance.off(h.CHANGE_FRIEND_APPLY_LIST,this,this.onClickApp),y.intance.off(h.CHANGE_FRIEND_LIST,this,this.deleFriendList),this.tf_uid.off(Laya.Event.FOCUS,this,this.uidFocus),this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene)}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}countOnlineUsers(e){return e.filter(i=>i.online).length}async onClickLookup(){if(this.tf_nickname.text==""){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(304),N.YES);return}let e=this.tf_nickname.text,i=await k.requestPost("wxgame/friend/search",{nickName:e});i&&i.list&&(this.recommendFriend=i.list,this.list_apply.array=i.list)}deleApplyFriendList(e){let i=this.recommendFriend.findIndex(n=>n.id==e);i>-1&&this.recommendFriend.splice(i,1),this.list_apply.array=this.recommendFriend}deleFriendList(e){let i=this.friendData.findIndex(r=>r.id==e);i>-1&&this.friendData.splice(i,1),this.list_friend.array=this.friendData,L.instance.friendNum=this.friendData.length;let n=R.intance.getGeneralValueById(11);this.tf_friendNum.text=`${L.instance.friendNum}/${n}`,this.list_friend.array.length<=0&&(this.noDataBox.visible=!0)}async onClickRefresh(){if(this.refreshCd>0){M.instance.notice(d.instance.getLanguage(1287,this.refreshCd));return}let e=await k.requestPost("wxgame/friend/recommend",{});e&&e.list&&(this.recommendFriend=e.list,this.list_apply.array=e.list),console.log(e),this.tf_nickname.text="PLEASE ENTER A NICKNAME TO FIND FRIENDS",this.tf_uid.text="Enter wallet address to add friends",this.inputFriendAddress=!1,M.instance.notice(pe.instance.get(306)),this.refreshCd=5,Laya.timer.loop(1e3,this,this.RefreshCount)}RefreshCount(){this.refreshCd-=1,this.refreshCd<=0&&Laya.timer.clear(this,this.RefreshCount)}refreshRed(){this.Img_social.visible=L.instance.getRedDotById(it.ROOM_FRIEND_APPLY)}};nd=p([NT("W8WIf5GlS3S-dEWvgrU0ow")],nd);var rd=class extends Laya.Dialog{};var{regClass:OT}=Laya,od=class extends rd{constructor(e){super();this.friendData=null}onEnable(){this.btn_send.on(Laya.Event.CLICK,this,this.onClickSend),this.giftInput.on(Laya.Event.INPUT,this,this.onGoldInput)}setOpenData(e){e&&(this.friendData=e),this.playerIcon.headSkin=this.friendData.icon,this.tf_name.text=this.friendData.name,this.tf_gold.text=Te.filterNumFormat(L.instance.getConsumeValue(xe.TYPE_GOLD),0)}async onClickSend(){if(console.log(this.messageInput.text==""),this.messageInput.text.length<10){M.instance.notice(d.instance.getLanguage(1288,10));return}let e=Number(this.giftInput.text),i=Number(this.tf_gold.text);if(e>i){M.instance.notice(pe.instance.get(313));return}await k.requestPost("wxgame/friend/sendMassage",{fid:this.friendData.id,content:this.messageInput.text,sendGold:e})&&le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(314),N.YES,Laya.Handler.create(this,()=>{this.close()}))}onGoldInput(){let e=Number(this.giftInput.text),i=me.isNumber(this.giftInput.text),n=this.giftInput.text.includes(".");(e<0||!i||n)&&(this.giftInput.text="0")}onDisable(){this.btn_send.off(Laya.Event.CLICK,this,this.onClickSend),this.giftInput.off(Laya.Event.INPUT,this,this.onGoldInput)}};od=p([OT("MBJ6xxrTTGe8qOrAIMZfeQ")],od);var sd=class extends Laya.Dialog{};var{regClass:HT}=Laya,Da=class extends Laya.Script{constructor(){super();this._isLeft=!1}onAwake(){}get isLeft(){return this._isLeft}set isLeft(e){this._isLeft=e,this.btn_bg=this.owner.getChildByName("btn_bg"),this.label_left=this.owner.getChildByName("label_left"),this.label_right=this.owner.getChildByName("label_right"),this.isLeft?(this.btn_bg.x=4,this.label_left.color="#213343",this.label_right.color="#52a5e0"):(this.btn_bg.x=this.owner.width-this.btn_bg.width-4,this.label_left.color="#52a5e0",this.label_right.color="#213343")}};Da=p([HT("-1MGS4JRSMOn_RKPUuuV9Q")],Da);var{regClass:UT}=Laya,ld=class extends sd{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}onEnable(){this.musicSwitchButton=this.box_music.getComponent(Da),this.soundSwitchButton=this.box_sound.getComponent(Da),this.languageSwitchButton=this.box_language.getComponent(Da),this.initContainer(),this.box_music.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_music]),this.box_sound.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_sound]),this.box_language.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_language]),this.btn_copy.clickHandler=new Laya.Handler(this,this.onClickHandler,[this.btn_copy]),this.btn_referral.on(Laya.Event.CLICK,this,this.onClickHandler,[this.btn_referral])}onClickHandler(e){switch(e){case this.box_music:this.musicSwitchButton.isLeft=!this.musicSwitchButton.isLeft,He.instance.switchMusic(this.musicSwitchButton.isLeft);break;case this.box_sound:this.soundSwitchButton.isLeft=!this.soundSwitchButton.isLeft,He.instance.switchSound(this.soundSwitchButton.isLeft);break;case this.btn_referral:H.intance.openModule(f.InviteRewardDialog);break;case this.box_language:{this.languageSwitchButton.isLeft=!this.languageSwitchButton.isLeft;let i=this.languageSwitchButton.isLeft?"zh":"en";d.instance.FGM_SetLanguage(i),Se.instance.reload()}break;case this.btn_copy:{let i=this.inviteUrl;ge.doCopy(i),M.instance.notice(d.instance.getLanguage(132))}break}}initContainer(){this.musicSwitchButton.isLeft=He.instance.m_bPlayMusic,this.soundSwitchButton.isLeft=He.instance.m_bPlayeSound,this.languageSwitchButton.isLeft=L.instance.m_strLanguage==6,this.inviteUrl=ca.getInviteUrl(),this.label_url.text=Ae.shortStr(this.inviteUrl,50)}addEvent(){}removeEvent(){}webCopyString(e){let i=e,n=window.document.createElement("textarea");n.value=i,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let r=window.getSelection(),o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),window.document.body.appendChild(n),n.select(),n.selectionStart=0,n.selectionEnd=i.length;let s=!1;try{s=window.document.execCommand("copy")}catch(l){console.error(l)}return window.document.body.removeChild(n),o&&(r.removeAllRanges(),r.addRange(o)),s}};ld=p([UT("yJfJZzgZRluE_rgB44yTvg")],ld);var cd=class extends Laya.Scene{};var{regClass:VT}=Laya,ud=class extends cd{onAwake(){}onOpened(e){this.closeHandle=e[0]}onEnable(){this.btn_next.on(Laya.Event.CLICK,this,this.onBtnNext),this.btn_receive.on(Laya.Event.CLICK,this,this.onClickRec),this.tf_address.text=K.instance.walletAddress}onDisable(){this.closeHandle&&this.closeHandle.run(),this.removeEvent()}removeEvent(){}onBtnNext(){this.close()}async onClickRec(){let e=K.instance.walletAddress,i=await k.requestPost("wxgame/money/matQuery",{address:e});if(i&&i.use==1){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(122),N.YES,Laya.Handler.create(this,()=>{this.onBtnNext()}));return}try{(await k.requestPost("wxgame/money/matTake",{address:e})).errorcode==0?le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getUILang("You have applied to claim the MAT Tokens and they will be sent to your address [0X...]."),N.YES,Laya.Handler.create(this,()=>{this.onBtnNext()})):le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(122),N.YES,Laya.Handler.create(this,()=>{this.onBtnNext()}))}catch{le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(122),N.YES,Laya.Handler.create(this,()=>{this.onBtnNext()}))}}};ud=p([VT("wkgHnIZwR_-St6rzEoxYPQ")],ud);var pd=class extends Laya.Scene{};var{regClass:FT}=Laya,md=class extends pd{constructor(){super(...arguments);this.restTime=5}onAwake(){}onOpened(e){console.log(e),this.closeHandle=e[0]}onEnable(){this.skipBox.on(Laya.Event.CLICK,this,this.onBtnSkip),L.instance.m_strLanguage==6,L.instance.m_strLanguage==6?this.img_bg.skin="res/getMat/img_open_chn.jpg":this.img_bg.skin="res/getMat/img_open_eng.jpg",console.log("langid:",L.instance.m_strLanguage),this.restTime=5,this.runTime(),this.tf_skip.text=d.instance.getUILang("Skip")}runTime(){Laya.timer.loop(1e3,this,this.countTime)}countTime(){this.restTime-=1,this.tf_restTime.text=`${this.restTime}`,this.restTime==0&&(Laya.timer.clear(this,this.countTime),this.close())}onDisable(){this.closeHandle&&this.closeHandle.run(),this.removeEvent()}removeEvent(){}async onBtnSkip(){Laya.timer.clear(this,this.countTime),this.close()}};md=p([FT("t3HJXNipRty7KBcnDKApfA")],md);var dd=class extends Laya.Box{};var{regClass:zT}=Laya,hd=class extends dd{set dataSource(t){super.dataSource=t;var e=t;e&&(this.img_icon.skin=C.instance.getAttrIcon(e[0]),this.tf_name.text=d.instance.getUILang(e[1]),this.tf_num.text=e[2])}};hd=p([zT("lWiDi5bCR-CNy4v3ZMd42w")],hd);var fd=class extends Laya.Dialog{};var zi=class{constructor(){}};zi.UPDATE_HERO_EVENT="HeroEvent:UPDATE_HERO_EVENT",zi.UPDATE_HERO_UPGRADE_EVENT="HeroEvent:UPDATE_HERO_UPGRADE_EVENT";var{regClass:GT}=Laya,yd=class extends fd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}setOpenData(e){e&&(this._vo=e)}onComplete(){}onEnable(){this.showViewByVo(this._vo),this.btn_last.on(Laya.Event.CLICK,this,this.onClickLast),this.btn_next.on(Laya.Event.CLICK,this,this.onClickNext),this.btn_upgrade.on(Laya.Event.CLICK,this,this.onClickUpgrade),this.btn_out.on(Laya.Event.CLICK,this,this.onClickOut)}onClickUpgrade(){H.intance.openModule(f.HeroUpgradeDialog,this._vo)}onClickNext(){let e=at.instance.getNextHero(this._vo);e&&(this._vo=e,this.showViewByVo(e))}onClickLast(){let e=at.instance.getLastHero(this._vo);e&&(this._vo=e,this.showViewByVo(e))}addEvent(){y.intance.on(zi.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade),this.stage.on(Laya.Event.CLICK,this,this.hideTips);for(let e=1;e<7;e++){let i=this["equip"+e];i.on(Laya.Event.CLICK,this,this.onClickEquip),this._vo.state!==0&&(i.disabled=!0)}}hideTips(){}onClickEquip(e){}removeEvent(){y.intance.off(zi.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade)}onHeroUpgrade(){this._vo=L.instance.m_heroData.heroVoDic.get(this._vo.pk),this._vo&&this.showViewByVo(this._vo)}updateEquip(){let e=this._vo.equipDtoList;for(let i=0;i<e.length;i++){let n=e[i];this["equip"+(i+1)].dataSource=n}}async showViewByVo(e){this.txt_name.text=e.name;let i=e.heroItem.level+"";at.instance.setStar(this,i),this.box_star.visible=!0,this.heroSk.dataSource=e;var n=[["maxHp","MaxHP",e.heroItem.maxHp],["atk","ATK",e.heroItem.atk],["def","DEF",e.heroItem.def],["mov","MOV",e.heroItem.mov],["crt","CRT",e.heroItem.crt/100+"%"],["crtRate","CrtRate",e.heroItem.crtRate/100+"%"],["immunity","Immunity",e.heroItem.immunity],["dex","Dex",(e.heroItem.dex/100).toFixed(2)+"%"],["miss","MISS",e.heroItem.miss]];this.list_attrs.array=n;var r=[];e.heroItem.skillIds.forEach(o=>{var s=R.intance.m_dicSkills.get(o);r.push(s)}),this.list_skills.array=r,this.updatePk()}async updatePk(){let e=null;this._vo.state!==0?(e=await k.requestPost("wxgame/lease/heroInfo",{heroPk:this._vo.pk}),this._vo.state==1?(this.btn_out.disabled=!0,this.btn_upgrade.disabled=!0,this.btn_out.label=d.instance.getLanguage(1037)):this._vo.state==2&&(this.btn_upgrade.disabled=!0,ge.isFightHero(this._vo.pk)?(this.box_sign.visible=!0,this.btn_out.disabled=!0,this.btn_out.label=d.instance.getLanguage(1038)):(this.box_sign.visible=!1,this.btn_out.disabled=!1,this.btn_out.label=d.instance.getLanguage(1037))),e&&e.info&&e.info.startTime&&e.info.startTime>Ie.getCurrentDayTimestamp()&&(this.btn_out.disabled=!0,this.btn_upgrade.disabled=!0)):ge.isFightHero(this._vo.pk)?(this.box_sign.visible=!0,this.btn_out.disabled=!0,this.btn_out.label=d.instance.getLanguage(1038)):(this.box_sign.visible=!1,this.btn_out.disabled=!1,this.btn_out.label=d.instance.getLanguage(1037))}async onClickOut(){if(Je.instance.inMinWaiting){M.instance.notice(d.instance.getLanguage(1187));return}let e=this,i=this._vo.newFightFlag==1?1:0,n=await k.requestPost("wxgame/hero/heroFight",{pk:this._vo.pk,type:i});n?(n.type==1?L.instance.playerDto.newFightHeroPk=n.pk:L.instance.playerDto.fightHeroPk=n.pk,e.updatePk(),y.intance.event(zi.UPDATE_HERO_EVENT,i)):M.instance.notice(d.instance.getLanguage(135))}};yd=p([GT("Qri7gUY9SiWsYhtvNCEOQQ")],yd);var bd=class extends Laya.Box{};var{regClass:jT}=Laya,gd=class extends bd{constructor(){super();this.isAddEvent=!1;this.needPop=!0}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=C.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.needPop&&this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){var e=[];ge.isFightHero(this.heroVo.pk)&&e.push(1),this.heroVo.state==2&&e.push(3),this.heroVo.state==1&&e.push(2),this.heroVo.newFightFlag==1?(e.push(5),this.img_newFightFlag.visible=!0):this.img_newFightFlag.visible=!1,this.list_state.array=e,this.img_back.skin=C.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ae.shortHeroStr(this.heroVo.name);let i=this.heroVo.heroItem.level+"";at.instance.setStar(this,i),this.box_show.visible=!0,this.destroyed}toDetail(){this.heroVo.id&&H.intance.openModule(f.HeroDetailDialog,this.heroVo)}};gd=p([jT("PfeS1F4rQCqM4vXJpBZVWQ")],gd);var vd=class extends Laya.Box{};var{regClass:KT}=Laya,Ld=class extends vd{constructor(){super();this.isAddEvent=!1;this.isReady=!1;this.skinIndex=0;this.spineAniIndex=0;this.skinArray=["goblin","goblingirl"]}addEvent(){this.isAddEvent||(this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.changeAni),this.sk.on(Laya.Event.READY,this,this.onSkReady))}onSkReady(){this.isReady=!0}set dataSource(e){super.dataSource=e,this.heroVo=e,this.addEvent(),this.createSpine()}createSpine(){Laya.loader.load(this.heroVo.sk,Laya.Loader.SPINE).then(e=>{this.destroyed||(this.sk.templet=e,this.sk.animationName=Ye.ANI_daiji,this.spineAniNum=Ye.ANIS.length)})}changeAni(){if(this.isReady){this.spineAniIndex++,this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=0);var e=Ye.ANIS[this.spineAniIndex];this.sk.play(e,!0,!0)}}changeSkin(){this.sk.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}onDisable(){this.sk.off(Laya.Event.READY,this,this.onSkReady)}};Ld=p([KT("kS5K53GHRWOdgfXoo6VH1A")],Ld);var _d=class extends Laya.Box{};var{regClass:WT}=Laya,xd=class extends _d{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.heroVo=e,this.heroVo&&(this.img_checked.visible=this.heroVo.checked,this.heroListItem.needPop=!1,this.heroListItem.dataSource=this.heroVo,this.addEvent())}toDetail(){this.heroVo.checked=!this.heroVo.checked,y.intance.event(h.EVENT_REFRESH_HEROTRANSFER)}};xd=p([WT("tzBcfqNYSL6KP4NjtslyHA")],xd);var wd=class{constructor(){this.pool_contract=null;this.rewardTokenAddress=""}stakeTokenAndReward(){return this.heroesId?[[this.heroesId,this.capacity/24]]:[]}async calcCapacity(t){for(let e of t){let i=at.instance.heroOutputRateDic.get(e.mineralLevel);e.staking_second_rewards=i.capacity*this.baseYield/24+""}return t}async earnedAll(){return this.yieldValue}async refreshVo(){let t=await k.requestPost("cybertron-sys-api/api/v1/mineral/getMineralPool",{mineralId:this.id});this.heroesId=0,this.yieldValue=0,Object.assign(this,t)}async stake(t){if(!await K.instance.checkHeroIsBuzy(t))return de.instance.showLoading(!0),await this.pool_contract.methods.stake(t,this.id).send({from:K.instance.walletAddress},(i,n)=>{if(i)return de.instance.hideLoading(),!1}),!0}async withdrawAllAndClaim(){return de.instance.showLoading(!0),await this.pool_contract.methods.withdraw(this.heroesId).send({from:K.instance.walletAddress},(t,e)=>{if(t)return de.instance.hideLoading(),!1}),await this.refreshVo(),!0}async claimAllReward(){de.instance.showLoading(!0),await k.requestPost("cybertron-sys-api/api/v1/mineral/collect",{mineralId:this.id}),await this.refreshVo(),de.instance.hideLoading()}async getAccountTokens(){await this.refreshVo()}};var yl=class a{constructor(){this.poolAry=[];this.pool_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this.poolDic=new te}async initPoolList(){this.poolAry=[];let t=await k.requestPost("cybertron-sys-api/api/v1/mineral/getMineralPoolList",{});for(let e of t){let i=new wd;Object.assign(i,e);let n=R.intance.m_dicItems.get(i.resourcesType);i.rewardTokenAddress=n.tokenId,i.pool_contract=this.pool_contract,this.poolDic.set(i.rewardTokenAddress,i),this.poolAry.push(i)}}async getHeroTokenIds(){let t=K.instance.walletAddress;try{console.log("getHeroTokenIds, account:"+t);var e;let n;X.vType==2?(e=ut.id,n=Ng[e]):X.vType==1?(e=ut.id,n=xs[e]):(e=kt.id,n=xs[e]);let r=await K.instance.walletClient.getChainId();if(e!==r){var i=await K.instance.switchChain(e);if(!i)return this.onEndHeroList(),console.log("切换失败，请手动切换"),null}return n?await K.instance.publicClient.readContract({address:n,abi:ie.HERO_LIST_ABI,functionName:"list",args:[t]}):(this.onEndHeroList(),M.instance.notice(d.instance.getLanguage(1219,r)),null)}catch(n){if(console.log("获取英雄列表错误====》",n),n instanceof Error){let r=n.message;console.log("获取英雄列表 错误====》",r)}}}async transferHero(t,e){de.instance.showLoadingByInfo(d.instance.getLanguage(1119));try{var i;let s;X.vType==2?(i=ut.id,s=mx[i]):X.vType==1?(i=ut.id,s=Og[i]):(i=kt.id,s=Og[i]);let l=await K.instance.walletClient.getChainId();if(i!==l){var n=await K.instance.switchChain(i);if(!n){this.onEndHeroList(),console.log("切换失败，请手动切换");return}}if(!s)return this.onEndHeroList(),M.instance.notice(d.instance.getLanguage(1220,l)),!1;if(console.log("判断授权 transferHeroAddress: "+s+", acceptAddress:"+t+", chainIDData:"+i),!await this.setApprovalForAll(s))return console.log("未授权"),this.onEndHeroList(),M.instance.notice(d.instance.getLanguage(15)),!1;console.log("授权成功 开始购买");var r=await K.instance.walletClient.writeContract({account:K.instance.walletAddress,address:s,abi:ie.TRANSFER_HERO_ABI,functionName:"batchTransfer",args:[t,e]});console.log("============"+r);let u=await K.instance.publicClient.waitForTransactionReceipt({hash:r});return console.log(`Tx with hash: ${r}`,u),u&&u.status=="success"?(this.delHero(e),this.waitGetHero(i,r),console.log(`Tx successful with hash: ${r}`),r):(this.onEndHeroList(),ge.TransactionErrorTip(),!1)}catch(s){this.onEndHeroList();var o=s.shortMessage;if(o&&o.indexOf("does not match")!=-1&&(o=d.instance.getLanguage(1118)),console.log(o),M.instance.notice(o),s instanceof U){let l=s.walk(c=>c instanceof Bt);if(l instanceof Bt){let c=l.data?.errorName??"";console.log("============errorName: "+c)}}return null}}async setApprovalForAll(t){let e=K.instance.walletAddress;try{console.log("查看是否已经授权, owner:"+e+", spender:"+t),console.log("未授权，进行授权, owner:"+e);var i;let n;X.vType==2?(i=ut.id,n=Ng[i]):X.vType==1?(i=ut.id,n=xs[i]):(i=kt.id,n=xs[i]);let r=await K.instance.walletClient.writeContract({address:n,abi:ie.HERO_LIST_ABI,functionName:"setApprovalForAll",args:[t,!0],account:e});console.log("============"+r);let o=await K.instance.publicClient.waitForTransactionReceipt({hash:r});return console.log(`setApprovalForAll with hash: ${r}`,o),o&&o.status=="success"?(console.log(`setApprovalForAll successful with hash: ${r}`),!0):!1}catch(n){if(console.log("授权错误====》",n),n instanceof Error){let r=n.message;console.log("授权错误====》",r)}}}onEndHeroList(t=null){de.instance.hideLoading(),t&&y.intance.event(h.EVENT_END_HEROTRANSFER,[t])}waitGetHero(t,e){this.chainId=t,this.hashId=e,Laya.timer.loop(2e3,this,this.getHero)}delHero(t=null){var e=k.requestPost("wxgame/mutiNft/delHero",{heroList:t}).catch(i=>{})}async getHero(){var t=await k.requestPost("wxgame/mutiNft/check",{chainId:this.chainId,hashId:this.hashId}).catch(e=>{});t&&t.heroList&&t.heroList.length>0&&(Laya.timer.clear(this,this.getHero),this.onNewAddHero(t.heroList))}onNewAddHero(t){L.instance.m_heroData.herosDataRemoveHandler(t),this.onEndHeroList(t)}};var Id=class extends Laya.Dialog{};var{regClass:qT}=Laya,Ed=class extends Id{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER;this.myHeroesNum=0;this.selectedNum=0}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_readClipboard.disabled=!navigator.clipboard,this.btn_readClipboard.on(Laya.Event.CLICK,this,this.readClipboard),this.btn_transferRecords.on(Laya.Event.CLICK,this,this.onShowTransferRecord),this.btn_approve.on(Laya.Event.CLICK,this,this.onTransferHero),this.btn_checkBox.on(Laya.Event.CLICK,this,this.onSelectAll),y.intance.on(h.EVENT_END_HEROTRANSFER,this,this.onEndHeroTransfer),y.intance.on(h.EVENT_REFRESH_HEROTRANSFER,this,this.onRefreshHeroTransfer),this.list_hero.array=[]}async readClipboard(){navigator.clipboard?navigator.clipboard.readText().then(e=>{console.log("剪切板中的文本内容:",e),this.input_acceptAddress.text=e}).catch(e=>{console.error("无法读取剪切板内容:",e)}):console.error("当前浏览器不支持 Clipboard API")}onOpened(e){this.getHeroTokenIds()}async getHeroTokenIds(){var e=await yl.instance.getHeroTokenIds();console.log("获得链上英雄ID heroTokenIds: ",e),this.heroVos=[],e&&e.length>0&&e.forEach(i=>{i=parseInt(i);var n=L.instance.m_heroData.getCanTransferHero(i);n&&this.heroVos.push(n)}),this.list_hero.array=this.heroVos,this.updateNum()}onEndHeroTransfer(e){this.heroVos=this.heroVos.filter(i=>!e.includes(i.pk)),this.list_hero.array=this.heroVos,this.updateNum()}onRefreshHeroTransfer(){this.list_hero.refresh(),this.updateNum()}updateNum(){!this.heroVos||this.heroVos.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1,this.selectedNum=0,this.heroVos.forEach(e=>{e&&e.checked&&this.selectedNum++}),this.myHeroesNum=this.heroVos.length,this.tf_myHeroesNum.text=d.instance.getLanguage(1222,this.heroVos.length),this.tf_selectedNum.text=d.instance.getLanguage(1223,this.selectedNum)}onSelectAll(){var e=this.btn_checkBox.selected;this.heroVos.forEach(i=>{i&&(i.checked=e)}),this.list_hero.refresh(),this.updateNum()}onBack(){this.close()}async onTransferHero(){var e=this.input_acceptAddress.text;if(e==""){M.instance.notice(d.instance.getUILang("PLEASE ENTER THE ACCEPT ADDRESS"));return}var i=[];this.heroVos.forEach(n=>{n.checked&&i.push(n.pk)}),i.length>0?await yl.instance.transferHero(e,i):M.instance.notice(d.instance.getLanguage(1218))}onShowTransferRecord(){H.intance.openModule(f.TransferRecordDialog)}onDisable(){this.removeEvent()}removeEvent(){y.intance.off(h.EVENT_END_HEROTRANSFER,this,this.onEndHeroTransfer),y.intance.off(h.EVENT_REFRESH_HEROTRANSFER,this,this.onRefreshHeroTransfer)}};Ed=p([qT("rERE5ZadTfqASnxDrsNtyw")],Ed);var Td=class extends Laya.Scene{};var{regClass:YT}=Laya,Sd=class extends Td{constructor(){super(...arguments);this.currTab=0;this.type=1;this.items=[];this.hasItem=!1}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP}onOpened(e){this.type=e}onEnable(){this.list_hero.vScrollBarSkin="",this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_transfer.on(Laya.Event.CLICK,this,this.onTransfer),y.intance.on(zi.UPDATE_HERO_EVENT,this,this.updateHero),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.initContainer()}initContainer(){this.list_hero.visible=!1,this.list_hero.vScrollBarSkin="",this.createHeadList();let e=L.instance.m_heroData.heroVoDic.values,i=me.filterObjectsByState(e,1),n=me.filterObjectsByState(e,2),r=me.filterObjectsByNewFightFlag(e);this.tf_hireHero.text=`${i.length}`,this.tf_proxyTotal.text=`${n.length}`,this.tf_heroTotal.text=`${r.length}`,console.log(i,n)}updateHero(e){this.type=e+1,this.createHeadList()}async createHeadList(){await xt.instance.ownerHero(!0),!this.destroyed&&(this.type?this.onClickTab(this.type):this.onClickTab(1))}async onClickTab(e){if(this.currTab!=e){if(this.setTab(e),e==1){if(this.destroyed)return;var i=await this.getItemByType(1);this.list_hero.array=i,this.list_hero.visible=!0,this.btn_transfer.visible=!0}else{if(this.list_hero.visible=!0,this.destroyed)return;var i=await this.getItemByType(2);this.list_hero.dataSource=i,this.btn_transfer.visible=!1}this.list_hero.selectedIndex=-1,this.hasItem&&(this.list_hero.selectedIndex=0)}}async getItemByType(e){var i=e==1?Ye.TYPE_Professional:Ye.TYPE_Training;this.items=[],this.hasItem=!1;let n=L.instance.m_heroData.getListByType(i);for(var r=n.length>10?n.length:10,o=0;o<r;o++){var s=n[o];s?(o==0&&(this.hasItem=!0),this.items.push(s)):this.items.push(null)}return this.items}setTab(e){for(let i=1;i<3;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}onTransfer(){H.intance.openModule(f.HeroTransferView)}onDisable(){y.intance.off(zi.UPDATE_HERO_EVENT,this,this.updateHero)}};Sd=p([YT("eEFn-xcRTXagUEZFDdSujw")],Sd);var Cd=class extends Laya.Box{};var{regClass:$T}=Laya,kd=class extends Cd{set dataSource(t){super.dataSource=t;var e=t;e&&(this.tf_name.text=d.instance.getUILang(e[1]),this.tf_num.text=e[2])}};kd=p([$T("BFrnzfZDRh2v3vDKqrNVwA")],kd);var Ad=class extends Laya.Box{};var{regClass:XT}=Laya,Dd=class extends Ad{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.txt_num.text="",this.img_icon.skin=C.instance.getSkillIcon(this.skillItem.icon,this.isBig))}};Dd=p([XT("qJVd2M3_Td-5eIx8PsQpAw")],Dd);var Md=class extends Laya.Box{};var{regClass:QT}=Laya,Bd=class extends Md{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.dataSource=this.skillItem)}toDetail(){this.skillItem&&H.intance.openModule(f.SkillTipDialog,this.skillItem)}};Bd=p([QT("VRh1GpjHSyqm75euC37ZKw")],Bd);var Pd=class extends Laya.Dialog{};var{regClass:ZT}=Laya,Rd=class extends Pd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}setOpenData(e){e&&(this.skillItem=e)}onEnable(){this.item.dataSource=this.skillItem,this.tf_name.text=d.instance.getLanguage(this.skillItem.name);var e=[["type","S_type",d.instance.getUILang("S_type_"+this.skillItem.type)],["distance","S_distance",this.skillItem.distance],["hurt","S_hurt",this.skillItem.hurt/100+"%"],["cd","S_cd",this.skillItem.cd/1e3+d.instance.getUILang("S_S")],["displacement","S_displacement",this.skillItem.displacement],["targetsType","S_targetsType",d.instance.getUILang("S_targetsType"+this.skillItem.targetsType)]];this.list_skillAttrs.array=e}removeEvent(){}};Rd=p([ZT("PiBuXnP8ToeveVbB_bfhUQ")],Rd);var Nd=class extends Laya.Box{};var{regClass:JT}=Laya,Od=class extends Nd{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,e&&(this.img_icon.skin=`gameIcon/hero/heroDetail/img_hero_state_${e}.png`)}};Od=p([JT("kgETBhusT2WQRM1T39-4EA")],Od);var Hd=class extends Laya.Dialog{};var{regClass:eS}=Laya,Ud=class extends Hd{constructor(){super()}onOpened(t){this.list_record.array=[],this.onGetList()}async onGetList(){var t=await k.requestPost("wxgame/mutiNft/record",{});t&&t.record?(this.list_record.array=t.record,!t.record||t.record.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1):M.instance.notice(d.instance.getLanguage(135))}};Ud=p([eS("nkhiH9TpSY6e2tWJ07b86g")],Ud);var Vd=class extends Laya.Box{};var{regClass:tS}=Laya,Fd=class extends Vd{constructor(){super(...arguments);this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.isAddEvent=!0)}onCopy(){let e=this.heroTransferDto.toAddress;doCopy(e),M.instance.notice(d.instance.getLanguage(132))}set dataSource(e){super.dataSource=e,this.heroTransferDto=e,this.heroTransferDto&&(this.addEvent(),this.setCurrentOutPut())}setCurrentOutPut(){if(this.tf_createDate.text=Ie.formatTimeStamp(this.heroTransferDto.createTime,"YY-MT-DD HH:MM"),this.tf_tokenId.text=this.heroTransferDto.nftId,this.tf_from.text=Ae.abbreviateString(this.heroTransferDto.fromAddress,18),this.tf_to.text=Ae.abbreviateString(this.heroTransferDto.toAddress,18),this.heroTransferDto.id>0){var e=new Rt;e.id=this.heroTransferDto.id,e.lv=this.heroTransferDto.lv,e.color=this.heroTransferDto.color,this.heroListItem.needPop=!1,this.heroListItem.dataSource=e}}};Fd=p([tS("STy30_L-RjafQhbdmoDLDw")],Fd);var zd=class extends Laya.Box{};var{regClass:iS}=Laya,Gd=class extends zd{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&this.setCurrentOutPut()}async setCurrentOutPut(){if(!this.itemVo)return;let e=this.itemVo.itemItem;this.knapsackItem.dataSource=this.itemVo,e?this.disabled=!1:this.disabled=!0}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===ht.TYPE_Equipment?H.intance.openModule(f.EquipDetailDialog,this.itemVo):H.intance.openModule(f.KnapsackTipDialog,this.itemVo))}};Gd=p([iS("HYoZb6e-RFKj8fjDKbl-7Q")],Gd);var jd=class extends Laya.Box{};var{regClass:aS}=Laya,Kd=class extends jd{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.coinItems=e,this.coinItems&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){if(this.coinItems){var e=this.coinItems[0];this.txt_num.text=Te.filterNumFormat(L.instance.getConsumeValue(this.coinItems[0]),this.coinItems[1],!1,!0),this.img_icon.skin=C.instance.getMoneyIcon(this.coinItems[0]),this.img_add.visible=e!=xe.TYPE_GOLD}}toDetail(){var e=this.coinItems[0];!this.coinItems||e==xe.TYPE_GOLD||(console.log(e),ge.onGetMoney(e))}};Kd=p([aS("NIAfVcg_S72kTvDQGuZ7vA")],Kd);var Wd=class extends Laya.Dialog{};var{regClass:nS}=Laya,qd=class extends Wd{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}onEnable(){this.initContainer(),He.instance.playSoundByName(He.soundName32)}initContainer(){var e=We.instance.getOneItem();if(e){var i;e instanceof Array?(i=new Fe(e[0]),i.newAddCnt=e[1]):i=e,this.showItem(i)}}showItem(e){this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=e,this.tf_name.text=d.instance.getLanguage(e.itemItem.name)}onDisable(){y.intance.event(h.EVENT_CHECK_REMAIN,f.ItemGetDialog)}};qd=p([nS("tC2uDJDVQMaI41Lys60O5Q")],qd);var Yd=class extends Laya.Box{};var{regClass:rS}=Laya,$d=class extends Yd{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=new Fe;if(!this.itemVo)return;let i=this.itemVo.itemItem;i?(this.showAdd?this.txt_num.text=""+Te.formatNumber(this.itemVo.newAddCnt,8):this.itemVo.m_iNum?this.txt_num.text=""+Te.formatNumber(this.itemVo.m_iNum,8):this.txt_num.text=""+Te.formatNumber(this.itemVo.newAddCnt,8),this.img_icon.skin=C.instance.getItemIcon(i.icon),this.img_box.skin="gameIcon/items/itemBg/img_"+i.quality+".png"):(this.txt_num.text="",this.img_icon.skin=null,this.img_box.skin="gameIcon/items/itemBg/img_0.png"),this.tf_isSch.visible=this.itemVo.isScholarship}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===ht.TYPE_Equipment?H.intance.openModule(f.EquipDetailDialog,this.itemVo):H.intance.openModule(f.KnapsackTipDialog,this.itemVo))}};$d=p([rS("LzxJYKybT_m3CJav3RyDmg")],$d);var Xd=class extends Laya.Scene{};var{regClass:oS}=Laya,Qd=class extends Xd{constructor(){super(...arguments);this.subBagInfo=null;this.currTab=0;this.type=1;this.isWhite=!1;this.items=[];this.hasItem=!1}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP,this.listPanel1.visible=!1}onOpened(e){this.type=e}onEnable(){y.intance.on(h.EVENT_REFRESH_KNAPSACK,this,this.onRefreshKnapsack),this.btn_transfer.on(Laya.Event.CLICK,this,this.onShowTransfer),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.box_show.visible=!1,this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-X.DESIGN_HEIGHT)/2}setTab(e){for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}async initLuckDrawView(){await xt.instance.ownerBag();let e=await k.requestPost("wxgame/player/getWhiteListInfo",{type:1});e&&(this.isWhite=e.in),!this.destroyed&&(this.type?this.onClickTab(this.type):this.onClickTab(1))}async onClickTab(e){if(this.currTab!=e&&(this.setTab(e),this.box_2.visible=!0,!this.destroyed)){var i=await this.getItemByType(e);this.listPanel1.array=i,this.listPanel1.visible=!0,this.listPanel1.selectedIndex=-1,this.hasItem&&(this.listPanel1.selectedIndex=0)}}async getItemByType(e){var i;switch(e){case 1:i=ht.BACKTYPE_Consumption;break;case 2:i=ht.BACKTYPE_Equipment;break;case 3:i=ht.BACKTYPE_PA_CUP;break}this.items=[],this.hasItem=!1;var n=L.instance.m_packageData.getBackByType(i);if(e==1){if(!this.subBagInfo){let u=(await k.requestPost("wxgame/lease/bag",{})).list,m={};for(let b of u)b.ticketId in m?m[b.ticketId]+=b.ticketCount:m[b.ticketId]=b.ticketCount;this.subBagInfo=Object.keys(m).map(b=>({ticketId:b,ticketCount:m[b]}))}if(this.subBagInfo)for(let c=0;c<this.subBagInfo.length;c++){let u=this.subBagInfo[c];if(u.ticketCount){var r=new Fe(u.ticketId);r.newAddCnt=u.ticketCount,r.isScholarship=!0,console.log(r),n.push(r)}}console.log(this.subBagInfo)}for(var o=n.length>30?n.length:30,s=0;s<o;s++){var l=n[s];l?(s==0&&(this.hasItem=!0),this.items.push(l)):this.items.push(new Fe(0))}return this.items}onSelectItem(e,i){if(this.itemVo=this.items[e],console.log(this.itemVo),this.itemVo){let n=this.itemVo.itemItem;this.img_icon.skin=C.instance.getItemIcon(n.icon),this.tf_name.text=d.instance.getLanguage(n.name),this.tf_des.text=d.instance.getLanguage(n.des),this.box_show.visible=!0,n.transfer==1&&L.instance.playerDto.unionLeader==1&&this.itemVo.subType==8?this.btn_transfer.visible=!0:n.subType==7?(this.btn_transfer.visible=!0,this.isWhite?this.btn_transfer.disabled=!1:this.btn_transfer.disabled=!0):this.btn_transfer.visible=!1}else this.img_icon.skin=null,this.tf_name.text="",this.tf_des.text="",this.box_show.visible=!1}onShowTransfer(){this.itemVo.itemItem.transfer==1&&L.instance.playerDto.unionLeader==1&&this.itemVo.subType==8?H.intance.openModule(f.UnionTransferView,this.itemVo):this.isWhite&&this.itemVo.subType==7&&H.intance.openModule(f.TicketTransferView,this.itemVo)}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}stopAni(e){console.log("stopAni: "+e)}onRefreshKnapsack(e){this.initLuckDrawView()}removeEvent(){y.intance.off(h.EVENT_REFRESH_KNAPSACK,this,this.onRefreshKnapsack)}};Qd=p([oS("6IPqO9JvTmygjIZQXMwq2A")],Qd);var Zd=class extends Laya.Dialog{};var{regClass:sS}=Laya,Jd=class extends Zd{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}setOpenData(e){e&&(this.itemVo=e)}onEnable(){this.item.dataSource=this.itemVo;let e=this.itemVo.itemItem;this.tf_name.text=d.instance.getLanguage(e.name),this.txt_type.text=d.instance.getLanguage(6060)+d.instance.getLanguage(e.type),this.txt_desc.text=d.instance.getLanguage(e.des),this.btn_use.visible=e.use!="0",this.btn_use.clickHandler=new Laya.Handler(this,this.useItem)}async useItem(){this.close()}removeEvent(){}};Jd=p([sS("or8jNdIhRpSbAG2JBhH-wA")],Jd);var eh=class extends Laya.Dialog{};var{regClass:lS}=Laya,th=class extends eh{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}onEnable(){He.instance.playSoundByName(He.soundName32)}setOpenData(e){e&&(this.reward=e);var i=[],n=this.reward;n.forEach(c=>{if(c.id&&c.id>0){var u=new Fe(c.id);u.newAddCnt=c.count,c.id==3011&&(u.itemItem.icon=c.id),i.push(u)}});var r=this.list_reward.spaceX,o=this.list_reward.itemTemplate.width,s=i.length;this.list_reward.repeatX=s;var l=s*o+r*(s-1);this.list_reward.width=l,this.list_reward.x=this.width-l>>1,this.list_reward.array=i}};th=p([lS("xwYUFnd4S3uJGIJSjjbRag")],th);var ih=class extends Laya.Box{};var{regClass:cS}=Laya,ah=class extends ih{constructor(){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}onEnable(){console.log("OpenScene onEnable："+this.m_strName)}getName(){console.log(this.m_strName)}onDisable(){}};ah=p([cS("sQS5mrqRQLWcBk-SgfBGJw")],ah);var nh=class extends Laya.Box{};var{regClass:uS}=Laya,rh=class extends nh{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}set dataSource(e){super.dataSource=e,this.mailDto=e,this.mailDto&&this.setCurrentOutPut()}async setCurrentOutPut(){this.mailDto&&(this.mailDto.type==2?(this.tf_title.visible=!1,this.fromBox.visible=!0,this.mailDto.fromPlayerName?this.tf_from.text=`From ${this.mailDto.fromPlayerName}`:this.tf_from.text=""):(this.tf_title.visible=!0,this.fromBox.visible=!1,this.tf_title.text=this.mailDto.title),this.tf_time.text=Ie.formatDayAndTime(this.mailDto.createTime,".").date,this.img_reward.visible=this.mailDto.reward.length>0,this.img_red.visible=this.mailDto.state==0,this.img_box.skin=this.mailDto.state==0?"res/mail/img_mail_state_0.png":"res/mail/img_mail_state_1.png")}};rh=p([uS("UKoifNR5Qmm4eq8sXy0K3A")],rh);var oh=class extends Laya.Scene{};var{regClass:pS}=Laya,sh=class extends oh{constructor(){super(...arguments);this.subBagInfo=null;this.noOpenLock=!1;this.currTab=0;this.type=1;this.items=[];this.hasItem=!1}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP,this.listPanel1.visible=!1}onOpened(e){this.type=e}onEnable(){this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.btn_one_claim.on(Laya.Event.CLICK,this,this.onOneClaim),this.btn_one_deletior.on(Laya.Event.CLICK,this,this.noRead),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1,!1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2,!1]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3,!1]),this.btn_copy.on(Laya.Event.CLICK,this,this.onClickCopy),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.box_show.visible=!1,this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-X.DESIGN_HEIGHT)/2}setTab(e){this.currTab=e;for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}async initLuckDrawView(){let e=await k.requestPost("wxgame/mail/list",{},!0,!0);await L.instance.m_mailData.initData(e.data),this.resetRedData(),!this.destroyed&&(this.type?this.onClickTab(this.type):this.onClickTab(1))}async refreshView(e=!0){let i=await k.requestPost("wxgame/mail/list",{},!0,!0);await L.instance.m_mailData.initData(i.data),this.resetRedData(),e&&this.onClickTab(this.currTab,!0)}refreshMailRed(){let e=L.instance.m_mailData.m_dicTypeList.get(1)}async onClickTab(e,i=!1){if(!i){if(this.currTab==e)return;this.setTab(e)}if(e>0){if(this.box_2.visible=!0,this.destroyed)return;var n=await this.getItemByType(e);this.listPanel1.array=n,this.listPanel1.visible=!0}this.listPanel1.selectedIndex=-1,this.box_show.visible=!1,this.hasItem?(this.noDataBox.visible=!1,this.listPanel1.selectedIndex=0,this.btn_one_deletior.visible=!0):(this.noDataBox.visible=!0,this.btn_one_deletior.visible=!1)}async getItemByType(e){var i=e;return this.items=[],this.hasItem=!1,this.items=L.instance.m_mailData.getListByType(i),this.hasItem=this.items.length>0,this.items}async onSelectItem(e,i){if(console.log("onSelectItem selectIndex: "+e),this.currMailDto=this.items[e],console.log(this.currMailDto),this.currMailDto){this.tf_title.text=this.currMailDto.title,this.tf_des.text=this.currMailDto.content,this.tf_time.text=Ie.formatDayAndTime(this.currMailDto.createTime,".").date;var n=[],r=this.currMailDto.reward;if(r.forEach(s=>{var l=new Fe(s.id);l.newAddCnt=s.count,n.push(l)}),this.list_reward.array=n,this.list_reward.gray=this.currMailDto.receive==1,this.box_show.visible=!0,this.btn_receive.labelSize=28,this.currMailDto.state==0&&!this.noOpenLock){var o=await k.requestPost("wxgame/mail/read",{id:this.currMailDto.id});if(o.errorCode==0){let s=this.listPanel1.selectedIndex;await this.refreshView(),this.listPanel1.selectedIndex=s}}this.noOpenLock=!1,this.currMailDto.type==2?(this.btn_receive.disabled=!1,this.tf_title.visible=!1,this.fromBox.visible=!0,this.tf_des.y=145,this.tf_re.text=`Re ${L.instance.playerDto.name}`,this.tf_re.visible=!0,this.address=this.currMailDto.fromPlayerAddress,this.address?this.tf_from.text=`From ${me.shortenString(this.address,8,6)}`:this.tf_from.text="",n.length>0?this.currMailDto.receive==0?(this.btn_receive.label="Receive and reply",this.btn_receive.labelSize=24):this.btn_receive.label="Reply":this.btn_receive.label="Reply"):(this.tf_des.y=112,this.tf_re.visible=!1,this.tf_title.visible=!0,this.fromBox.visible=!1,this.btn_receive.disabled=this.currMailDto.state>0,this.btn_receive.label="Mark as read")}else this.box_show.visible=!1}async onReceive(){if(this.currMailDto&&this.currMailDto.type==2){let i={icon:this.currMailDto.fromPlayerIcon,name:this.currMailDto.fromPlayerName,id:this.currMailDto.fromPlayerId};if(this.currMailDto.reward.length>0&&this.currMailDto.receive==0){var e=await k.requestPost("wxgame/mail/receive",{id:this.currMailDto.id});e.errorCode==0?(e.reward&&e.reward.length>0?(H.intance.openModule(f.PrivateChatDialog,i),H.intance.openModule(f.RewardGetDialog,e.reward)):(M.instance.notice(d.instance.getLanguage(2e3)),H.intance.openModule(f.PrivateChatDialog,i)),this.refreshView()):M.instance.notice(d.instance.getLanguage(135))}else H.intance.openModule(f.PrivateChatDialog,i)}}async onOneClaim(){if(this.currMailDto){var e=await k.requestPost("wxgame/mail/readOneKey",{});e.errorCode==0?(e.reward&&e.reward.length>0?H.intance.openModule(f.RewardGetDialog,e.reward):M.instance.notice(d.instance.getLanguage(2e3)),this.refreshView()):M.instance.notice(d.instance.getLanguage(135))}}async onOneDeletior(){if(this.currMailDto){var e=await k.requestPost("wxgame/mail/delOneKey",{});e.errorCode==0?(M.instance.notice(d.instance.getLanguage(2e3)),this.refreshView()):M.instance.notice(d.instance.getLanguage(135))}}async noRead(){let e=this.listPanel1.array[this.listPanel1.selectedIndex];if(this.noOpenLock=!1,console.log(e),e){let n=this.listPanel1.selectedIndex;var i=await k.requestPost("wxgame/mail/noRead",{id:e.id});this.listPanel1.selectedIndex=n,i.errorCode==0&&(this.listPanel1.selectedIndex==0&&(this.noOpenLock=!0),this.refreshView())}}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}onClickCopy(){this.address&&(doCopy(this.address),M.instance.notice(d.instance.getLanguage(132)))}removeEvent(){}resetRedData(){this.img_sysRed.visible=!1,this.img_friendRed.visible=!1,this.img_annRed.visible=!1;let e=L.instance.m_mailData.getRedData();e.system&&(this.img_sysRed.visible=!0),e.friend&&(this.img_friendRed.visible=!0),e.announce&&(this.img_annRed.visible=!0)}};sh=p([pS("XwqkX1FmRISr-BmvQwE88Q")],sh);var lh=class extends Laya.Box{};var{regClass:mS}=Laya,ch=class extends lh{onEnable(){}notice(e){this.speed=2+Math.random()*1;let i=e;this.label_tf.text=e,console.log("notice: ",e),this.image_bg.width=this.label_tf.textField.textWidth+100,this.alpha=1,this.visible=!0}get view(){return this}get width(){return this.image_bg.width}update(){this.x-=this.speed}isOffScreen(){return this.x+this.width<0}onDisable(){console.log("barrageSpr recover"),Laya.Pool.recover("barrageSpr",this)}};ch=p([mS("pMWsUZPhS4iK2yN8OCI4Yw")],ch);var uh=class extends Laya.Box{};var{regClass:dS}=Laya,ph=class extends uh{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.check_coin.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,!e)return;this.addEvent();let i=e;this.check_coin.selected=i[1],this.tf_coin.text=i[2]}onCheck(){this._dataSource[1]=this.check_coin.selected,y.intance.event(h.EVENT_CHECK_ICON_SELECT)}};ph=p([dS("UTGHsPbQS6C5FohXv8T25Q")],ph);var mh=class{constructor(){this.connectAddr="ws://120.53.94.125:10001";this.groupApplyList=[];this.groupData=[]}};var dh=class extends Laya.Dialog{};var{regClass:hS}=Laya,hh=class extends dh{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER;this.coinType=3001;this.nodeId=-1;this.coinIds=[];this.no=0}setOpenData(e){e&&(this.arenaLv=e[0])}onEnable(){y.intance.on(h.EVENT_Close_CreateRoom,this,this.onClose),this.btn_create.on(Laya.Event.CLICK,this,this.onCreate),this.input_customName.on(Laya.Event.INPUT,this,this.onInputChange),this.initContainer()}onClose(){this.close()}onDisable(){y.intance.off(h.EVENT_Close_CreateRoom,this,this.onClose)}initContainer(){let e=L.instance.playerDto;if(!e)return;this.tf_roleName.text=e.name;let i=e.icon;this.playerIcon.headSkin=i,this.img_country.skin=C.instance.getCountryIcon(e.country+"");var n=R.intance.m_dicArenaTypes.get(O.instance.arenaType),r=n.passwordSwitch==1;r?this.img_box_pwd.visible=!0:this.img_box_pwd.visible=!1,this.initNode(),this.initCoinCombo(n),this.initCustomName()}initCustomName(){let e=R.intance.getGeneralValueById(14);this.tf_nameGold.text=e[1],this.img_nameGold.skin=C.instance.getMoneyIcon(e[0]),console.log(e)}initCoinCombo(e){O.instance.arenaType==3&&(this.coinCombo.visible=!1,this.box_node.y+=50),this.coinIds=e.coinTypes;var i=[];this.coinIds.forEach(n=>{var r=R.intance.m_dicItems.get(n);i.push(d.instance.getLanguage(r.name))}),this.coinCombo.selectHandler=new Laya.Handler(this,this.onSelected2),this.coinCombo.dataSource=i,this.coinCombo.selectedIndex=0}onSelected2(e){e!=-1&&(this.coinType=this.coinIds[e],console.log("您选中了 coinType"+this.coinType),this.setRoomInfo())}setRoomInfo(){var e=O.instance.arenaType;this.arenaItem=R.intance.getSheetDataByMultiKey(R.intance.m_dicArenaMulDic,[e,this.arenaLv,this.coinType]),this.tf_arenaName.text=d.instance.getLanguage(this.arenaItem.name),this.tf_min.text=this.arenaItem.numberMin+"",this.tf_max.text=this.arenaItem.numberMax+"",this.onGetRoomNo()}async onGetRoomNo(){this.btn_create.disabled=!0;let e=this,i=await k.requestPost("wxgame/room/getRoomNameSequence",{arenald:this.arenaItem.id});i?(this.no=i.no,this.onSetRoomName()):M.instance.notice(d.instance.getLanguage(135))}onSetRoomName(){var e=R.intance.m_dicItems.get(this.coinType),i=d.instance.getLanguage(e.name),n="";O.instance.arenaType==1?n="PRO."+i:O.instance.arenaType==2?n="AD."+i:O.instance.arenaType==3&&(n="TRG"),n=n+"."+this.no,this.tf_roomName.text=n,this.btn_create.disabled=!1}onInputChange(){Laya.timer.frameOnce(1,this,this.checkAndTruncate)}checkAndTruncate(){let e=this.input_customName.text,i=0,n="";for(let r=0;r<e.length;r++){let o=e.charAt(r),s=this.isDoubleByte(o)?2:1;if(i+s<=15)n+=o,i+=s;else break}e!==n&&(this.input_customName.text=n,this.input_customName.focus=!0,this.input_customName.editable=!0)}isDoubleByte(e){return e.charCodeAt(0)>255}initNode(){this.list_node.selectHandler=new Laya.Handler(this,this.handleSelectNode),this.createNodeList(),this.box_node.on(Laya.Event.CLICK,this,this.onOpenNode),this.list_node.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_node.mouseHandler=Laya.Handler.create(this,this.onNodeItemMouse,null,!1),this.list_node.renderHandler=Laya.Handler.create(this,this.onNodeItemRender,null,!1),this.list_node.scrollBar&&this.list_node.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onNodeItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_node.selectedIndex=i,this.onHideNode())}onListDown(e){e.stopPropagation()}onScrollBarDown(e){e.stopPropagation()}onNodeItemRender(e,i){e.onChange(this.list_node.selectedIndex==i)}onOpenNode(){this.img_node_pad.visible==!1&&(this.img_node_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideNode))}onHideNode(){this.img_node_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideNode)}handleSelectNode(e){if(console.log("handleSelectNode: "+e),e!=-1){let i=this.list_node.selectedItem;this.nodeId=i.id,this.img_node.skin=C.instance.getNodeIcon(i.area),this.tf_node.text=d.instance.getLanguage(i.name),this.nodeDelaySign.dataSource=i}}createNodeList(){let e=R.intance.m_dicNodes;this.list_node.array=e.values,this.list_node.visible=!0;let i=-1,n=0;e.values.length>0&&(i=0),this.list_node.selectedIndex=i}async onCreate(){let e=this.input_customName.text;if(e!=""&&L.instance.getConsumeValue(xe.TYPE_GOLD)<Number(this.tf_nameGold.text)){M.instance.notice(d.instance.getLanguage(1362));return}let i=this.tf_roomName.text;if(!i||i==""){M.instance.notice(d.instance.getLanguage(1361));return}let n=this.input_pwd.text;var r=this.arenaItem.id,o=new mh;o.arenaId=r,o.nodeId=this.nodeId,o.roomName=i,o.customName=e,Je.instance.onCreateAndJoinWithPwd(ke.ACTION_CREATE,o,n)}};hh=p([hS("_y9qJpZZRk2p26xdgYPRyA")],hh);var fh=class extends Laya.Box{};var{regClass:fS}=Laya,yh=class extends fh{constructor(){super(...arguments);this.hasOpened=!1}onEnable(){this.on(Laya.Event.CLICK,this,this.openMaxView),y.intance.on(h.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom)}onUpdateMatchRoom(){this.tf_coolTime.text=Ie.format(F.instance.coolDownTime,":",!1),F.instance.coolDownTime==5&&!this.hasOpened&&(console.log("onUpdateMatchRoom "+F.instance.coolDownTime),this.openMaxView(),this.hasOpened=!0)}openMaxView(){Je.instance.openMaxView()}onDisable(){y.intance.on(h.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom)}};yh=p([fS("7hINWNN3S8SmWSveWJQJSw")],yh);var bh=class{constructor(t){this.barrages=[];this.screenWidth=t.width,this.screenHeight=t.height,this.barrageContainer=t}addBarrage(t,e,i){let n=Laya.Pool.getItemByCreateFun("barrageSpr",Je.instance.barrageSprPrefab.create,Je.instance.barrageSprPrefab);n.notice(t),n.x=this.screenWidth,n.y=i,this.barrages.push(n),this.barrageContainer.addChild(n)}update(){for(let t=this.barrages.length-1;t>=0;t--){let e=this.barrages[t];e.update(),e.isOffScreen()&&(this.barrages.splice(t,1),this.barrageContainer.removeChild(e))}}findAvailableYPosition(t){let i=new Array(Math.floor(this.screenHeight/(t+10))).fill(!0);for(let n of this.barrages){let r=Math.floor(n.y/(t+10));i[r]=!1}for(let n=0;n<i.length;n++)if(i[n])return n*(t+10);return-1}};var gh=class extends Laya.Dialog{};var{regClass:yS}=Laya,vh=class extends gh{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER;this.isMax=!1;this.lastState=-1;this.currTab=0}onEnable(){y.intance.on(h.EVENT_CHANGE_HEAD,this,this.onColorSelect),this.btn_switch.on(Laya.Event.CLICK,this,this.onSwitchClick),this.btn_emoji.on(Laya.Event.CLICK,this,this.onEmojiClick),this.btn_color.on(Laya.Event.CLICK,this,this.onColorClick),this.btn_send.on(Laya.Event.CLICK,this,this.onSendClick),this.tf_launch.on(Laya.Event.CLICK,this,this.onShowBarrageBtn),this.img_bg.on(Laya.Event.CLICK,this,this.onHideMenu),this.list_wait_hero.on(Laya.Event.CLICK,this,this.onHideMenu),this.input_chat.on(Laya.Event.ENTER,this,this.onSendClick),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_help.on(Laya.Event.CLICK,this,this.onHelp),this.btn_showSignUp.on(Laya.Event.CLICK,this,this.onShowSignUp),this.btn_min.on(Laya.Event.CLICK,this,this.onMinClick),this.btn_exit.on(Laya.Event.CLICK,this,this.onExitClick),y.intance.event(h.EVENT_ENTER_MATCH_ROOM,!1),y.intance.on(h.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom),k.stopHeartInRoom=!0,this.initContainer(),Se.instance.sendCustumEvent(40)}setOpenData(e){e&&(this.isMax=e)}initContainer(){this.list_wait_hero.visible=!0,this.onSetStateTest();var e=F.instance.roomDto,i=e.roomId,n=e.arenaId,r=e.coinType,o=e.state,s=R.intance.m_dicArenaDic.get(n);F.instance.currArenaItem=s,this.tf_arenaName.text=d.instance.getLanguage(s.name),this.arenaNo.text=i+"",Je.instance.init(),this.tf_roomName.text=F.instance.roomDto.roomName;var l=F.instance.roomDto.nodeId;if(l){var c=R.intance.m_dicNodes.get(l);this.nodeDelaySign.dataSource=c,this.nodeDelaySign.startTest()}this.updateExitCD(),(o==ke.STATE_WAIT||o==ke.STATE_SIGNUP)&&this.initChat(),this.initCumulative()}updateExitCD(){var e=Math.round(F.instance.roomDto.joinCd/1e3),i=e-F.instance.currArenaItem.notQuit;i>F.instance.currArenaItem.exitTime&&(i=F.instance.currArenaItem.exitTime),F.instance.limitCd=i,F.instance.limitCd>0?(this.onSetExitTime(),Laya.timer.loop(1e3,this,this.onSetExitTime)):(Laya.timer.clear(this,this.onSetExitTime),this.btn_exit.disabled=!0,this.tf_exit.text="Exit")}onSetExitTime(){F.instance.limitCd>=0?(this.tf_exit.text=d.instance.getUILang("Exit")+" ("+F.instance.limitCd+"s)",F.instance.limitCd--,this.btn_exit.disabled=!1):(Laya.timer.clear(this,this.onSetExitTime),this.btn_exit.disabled=!0,this.tf_exit.text="Exit")}onMinClick(){var e=F.instance.roomDto.state;e==ke.STATE_WAIT?F.instance.coolDownTime>5&&(this.close(),Je.instance.openMinView()):console.log("不是房间等待状态，不能最小化")}async onExitClick(){var e=F.instance.roomDto.state;e==ke.STATE_WAIT?await k.requestPost("wxgame/room/leave",{roomId:F.instance.roomDto.roomId})?Je.instance.close():M.instance.notice(d.instance.getLanguage(135)):console.log("不是房间等待状态，不能退出")}onUpdateMatchRoom(){this.onSetStateTest();var e=F.instance.roomDto.state,i=F.instance.roomDto.groupData;this.lastState!=e&&(this.lastState=e,e==ke.STATE_WAIT?(this.list_wait_hero.visible=!0,this.box_barrage.visible=!0,this.box_barrage_btn.visible=!0,this.box_state_signUp.visible=!1,this.box_state_group.visible=!1):e==ke.STATE_SIGNUP?F.instance.currArenaItem.type==ke.ARENA_TYPE_PROFESSIONAL?(this.list_wait_hero.visible=!0,this.box_barrage.visible=!0,this.box_barrage_btn.visible=!0,this.box_state_signUp.visible=!0,this.box_state_group.visible=!1,this.onShowSignUp(null)):(this.list_wait_hero.visible=!0,this.box_barrage.visible=!0,this.box_barrage_btn.visible=!0,this.box_state_signUp.visible=!1,this.box_state_group.visible=!1):e==ke.STATE_GROUPED&&(i&&i.length>0?(this.list_wait_hero.visible=!1,this.box_barrage.visible=!1,this.box_barrage_btn.visible=!1,this.box_state_signUp.visible=!1,this.box_state_group.visible=!0,this.clearChat()):(this.list_wait_hero.visible=!0,this.box_barrage.visible=!0,this.box_barrage_btn.visible=!0,this.box_state_signUp.visible=!1,this.box_state_group.visible=!1)));var n=F.instance.roomDto.members.length;this.tf_people.text=n+"";var r=F.instance.currArenaItem.numberMax;F.instance.playerJoinDic==null&&(F.instance.playerJoinDic=new te),this.heros=[];for(var o=0;o<r;o++){var s=F.instance.roomDto.members[o];s?(this.heros.push(s),F.instance.playerJoinDic.set(s.id,s)):this.heros.push(null)}var l="";if(e==ke.STATE_GROUPED?i&&i.length>0?l=d.instance.getLanguage(1376):l=d.instance.getLanguage(1525):e==ke.STATE_SIGNUP?F.instance.currArenaItem.type==ke.ARENA_TYPE_PROFESSIONAL?l=d.instance.getLanguage(1089):l=d.instance.getLanguage(1525):l=d.instance.getLanguage(1089),this.tf_coolTime.text=l+" <font color='#ff5388'>"+Ie.format(F.instance.coolDownTime,":",!1)+"</font>",e==ke.STATE_WAIT?F.instance.coolDownTime>5?this.btn_min.disabled=!1:this.btn_min.disabled=!0:this.btn_min.disabled=!0,e==ke.STATE_WAIT)this.list_wait_hero.array=this.heros,this.list_wait_hero.visible=!0;else if(e==ke.STATE_SIGNUP)this.list_wait_hero.array=this.heros,this.list_wait_hero.visible=!0,F.instance.currArenaItem.type==ke.ARENA_TYPE_PROFESSIONAL&&(this.tf_cumulative.text=d.instance.getLanguage(1374,F.instance.roomDto.groupApplyList.length),this.list_groupApply.array=F.instance.roomDto.groupApplyList);else if(e==ke.STATE_GROUPED&&this.groupInfos==null){var i=F.instance.roomDto.groupData;if(this.groupInfos=[],i){var c=1;i.forEach(m=>{this.groupInfos.push([c,m]),c++})}this.list_group.array=this.groupInfos}}initChat(){this.lastSendTime=0,this.box_barrage.width=Laya.stage.width,this.box_barrage.x=this.width-this.box_barrage.width>>1,this.box_barrage.visible=!0,this.barrageManager=new bh(this.box_barrage),Laya.timer.frameLoop(1,this,this.update),Laya.timer.loop(1500,this,this.onRecvMsg),this.onEmojiHide(),this.onColorHide(),this.list_wait_hero.selectHandler=new Laya.Handler(this,this.onUserSelected),this.list_color.selectHandler=new Laya.Handler(this,this.handleSelectColor),this.list_emoji.selectHandler=Laya.Handler.create(this,this.onSelectEmojiItem,[],!1),this.createColorList(),this.onClickTab(1)}clearChat(){Laya.timer.clear(this,this.update),Laya.timer.clear(this,this.onRecvMsg)}update(){this.barrageManager.update()}handleSelectColor(e){if(e!=-1){let i=this.list_color.selectedItem;i&&(L.instance.colorId=i.id),this.onColorHide()}}createColorList(){let e=R.intance.m_dicFontColor;this.list_color.array=e.values,this.list_color.visible=!0;let i=-1,n=0;for(let r of e.values){if(r.id==L.instance.colorId){i=n;break}n++}this.list_color.selectedIndex=i}onUserSelected(e,i){if(console.log("onUserSelected: ",e,i),this.img_box_btn_2.visible){var n=this.list_wait_hero.selectedItem;if(n){var r=n.name,o=`@${r}`,s=this.input_chat.text;s.indexOf(o)==-1&&(this.input_chat.text=`${o}  ${s}`),this.list_wait_hero.selectedIndex=-1}}}onColorSelect(e){console.log("fontColorItem: ",e)}onSwitchClick(){console.log("onSwitchClick"),this.box_barrage.visible=!this.box_barrage.visible,this.box_barrage.visible?(this.btn_switch.skin="res/chat/img_chat_switch_1.png",this.btn_send.disabled=!1):(this.btn_switch.skin="res/chat/img_chat_switch_2.png",this.btn_send.disabled=!0)}onEmojiClick(){console.log("onEmojiClick"),this.img_box_emoji.visible==!1?this.onEmojiShow():this.onEmojiHide(),this.onColorHide()}onColorClick(){console.log("onColorClick"),this.img_box_color.visible==!1?this.onColorShow():this.onColorHide(),this.onEmojiHide()}onEmojiShow(){console.log("onEmojiShow"),this.img_box_emoji.visible=!0,this.btn_emoji.skin="res/chat/btn_emoji_1.png"}onEmojiHide(){console.log("onEmojiHide"),this.img_box_emoji.visible=!1,this.btn_emoji.skin="res/chat/btn_emoji_2.png"}onColorShow(){console.log("onColorShow"),this.img_box_color.visible=!0,this.btn_color.skin="res/chat/btn_color_1.png"}onColorHide(){console.log("onColorHide"),this.img_box_color.visible=!1,this.btn_color.skin="res/chat/btn_color_2.png"}onShowBarrageBtn(){this.img_box_btn_2.visible=!0,this.img_box_btn_1.visible=!1}onHideMenu(){this.onEmojiHide(),this.onColorHide()}onSendClick(){console.log("onSendClick");var e=this.input_chat.text;if(!e||e=="")return;let i=Date.now();if(i-this.lastSendTime<1e3){M.instance.notice(d.instance.getLanguage(1359,1));return}this.lastSendTime=i;var n=R.intance.m_dicFontColor.get(L.instance.colorId);let r=n.colorValue;var o=F.instance.roomDto,s=o.roomId;k.requestPost("wxgame/room/danmuPublish",{roomId:s,msg:e,color:r}),this.input_chat.text=""}async onRecvMsg(){console.log("onRecvMsg");var i=(await k.requestPost("wxgame/room/danmuLoop",{roomId:F.instance.roomDto.roomId})).msgList;i&&i.forEach(n=>{this.onSetMsg(n)})}onSetMsg(e){var i=e.msg;if(!i||i=="")return;var n=e.color;let r=44,o=this.barrageManager.findAvailableYPosition(r);if(o!==-1){var s=this.parseEmojis(i);i=s[0];var l=s[1],c=e.name;i=`${c}: ${i}`,i=`<font  color='${n}'>${i}</font>`,this.barrageManager.addBarrage(i,l,o)}else console.log("No available position for new barrage")}parseEmojis(e){let i=e,n=/\[:(\d+)\]/g,r,o=0;for(;(r=n.exec(e))!==null;){let c=parseInt(r[1]);console.log("parseEmojis: ",r[0],r[1]);let u;var s=R.intance.m_dicExpression.get(c);if(s){var l=C.instance.getEmoji(s.type,s.icon);u=`<img src='${l}' width='55' height='55'/>`,o++}else u=r[0];i=i.replace(r[0],u)}return[i,o]}onClickTab(e){if(this.currTab!=e){this.setTab(e);var i=this.getItemByType(e);this.list_emoji.array=i}}setTab(e){for(let i=1;i<4;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("img_tab_icon").skin="res/chat/img_tab_"+i+"_1.png"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("img_tab_icon").skin="res/chat/img_tab_"+i+"_2.png")}getItemByType(e){var i=R.intance.m_dicExpression.values,n=[],r=-1,o=0;return i.forEach(s=>{s.type==e&&n.push(s)}),n}onSelectEmojiItem(e){var i=this.list_emoji.selectedItem;if(console.log("onSelectItem expressionItem: ",i),i){let n=`[:${i.id}]`;this.input_chat.text+=n,this.onEmojiHide(),this.list_emoji.selectedIndex=-1}}isOnlyEmojis(e){return/^(\[:\d+\])*$/.test(e)}initCumulative(){}onHelp(){var e=d.instance.getLanguage(1377),i=d.instance.getLanguage(1378);H.intance.openModule(f.HelpDialog,[2,e,i])}onShowSignUp(e){console.log("onShowSignUp");var i=F.instance.roomDto.groupApplyList,n=!1;if(i&&i.forEach(_=>{_==L.instance.playerDto.pid&&(n=!0)}),n)e!=null&&M.instance.notice(d.instance.getLanguage(1375));else{var r="",o=F.instance.currArenaItem;if(o.item&&o.item.length>1){var s=o.item[0],l=o.item[1];let _=R.intance.getGeneralValueById(15);var c=2,u=R.intance.m_dicItems.get(s);if(u.itemValue.length>1){var m=C.instance.getMoneyIcon(u.itemValue[0]),b=Te.formatNumber(u.itemValue[1]*l)+"";r=d.instance.getLanguage(1363,_,b,m)}else{var m=C.instance.getMoneyIcon(3005);r=d.instance.getLanguage(1363,_,0,m)}}le.instance().AlertByType(N.MatchConfimDialog,r,N.CANCEL,Laya.Handler.create(this,this.onSignUp))}}onSignUp(){var e=F.instance.roomDto;Je.instance.onCreateAndJoinWithPwd(ke.ACTION_SIGNUP,e,"")}onSetStateTest(){}onDisable(){this.removeEvent(),console.log("EnterRoomView onDisable"),y.intance.off(h.EVENT_UPDATE_MATCH_ROOM,this,this.onUpdateMatchRoom),ye.intance.currSceneName!=Q.M_SCENE_AIRDROP?(O.instance.arenaType=F.instance.currArenaItem.type,ye.intance.setCurrentScene(Q.M_SCENE_AIRDROP)):y.intance.event(h.EVENT_ENTER_MATCH_ROOM,!0),k.stopHeartInRoom=!1}removeEvent(){Laya.timer.clearAll(this),y.intance.off(h.EVENT_CHANGE_HEAD,this,this.onColorSelect),Laya.Pool.clearBySign("barrageSpr")}};vh=p([yS("IwpLh2K2T5Gh7QXYnJakAw")],vh);var Lh=class extends Laya.Box{};var{regClass:bS}=Laya,_h=class extends Lh{constructor(){super(...arguments);this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.expressionItem=e,this.expressionItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.expressionItem.id;this.img_emoji.skin=C.instance.getEmoji(this.expressionItem.type,this.expressionItem.icon)}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}onCheck(){y.intance.event(h.EVENT_EMOJI_ICON_SELECT,this.expressionItem)}};_h=p([bS("UrCKcS-wTbm0LjT3KCsUYA")],_h);var xh=class extends Laya.Box{};var{regClass:gS}=Laya,wh=class extends xh{set dataSource(e){super.dataSource=e,this.fontColorItem=e,this.fontColorItem&&this.setCurrentOutPut()}async setCurrentOutPut(){let e=this.fontColorItem.id;this.img_color.skin=C.instance.getFontColor(e)}onChange(e){}};wh=p([gS("Vf8n1XGhQRK0Y2ndcK1U3g")],wh);var Ih=class extends Laya.Dialog{};var{regClass:vS}=Laya,Eh=class extends Ih{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}setOpenData(e){e&&(this.roomDto=e[0])}onEnable(){y.intance.on(h.EVENT_Close_CreateRoom,this,this.onClose),this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.initContainer()}onClose(){this.close()}onDisable(){y.intance.off(h.EVENT_Close_CreateRoom,this,this.onClose)}initContainer(){var e=R.intance.m_dicItems.get(this.roomDto.coinType),i=d.instance.getLanguage(e.name),n=R.intance.m_dicArenaDic.get(this.roomDto.arenaId);this.tf_roomName.text=d.instance.getLanguage(n.name),this.input_pwd.text=""}async onJoin(){let e=this.input_pwd.text;Je.instance.onCreateAndJoinWithPwd(ke.ACTION_JOIN,this.roomDto,e)}};Eh=p([vS("bn6StZy0ROGBH9GCTateCA")],Eh);var Th=class extends Laya.Scene{};var Sh=class a{constructor(){this._inited=!1}static getInstance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}};var{regClass:LS}=Laya,bn=class extends Th{constructor(){super(...arguments);this.currIconAni=1}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP,Sh.getInstance().init()}async onOpened(e){this.mouseThrough=this.mouseThrough=!0,this.headBox.mouseThrough=!0;let i=this.getChildByName("mcMain");i&&(i.mouseThrough=!0),this.btn_fullScreen.visible=X.isInto,X.isInto&&X.isFull&&(ge.isFullScreen=!0,ge.isFullScreen?this.img_fullScreen.skin="res/main/img_full_2.png":this.img_fullScreen.skin="res/main/img_full_1.png"),this.updateTopInfo();var n=Laya.stage.width-X.DESIGN_WIDTH>>1;if(this.leftX=this.leftMenu.x,this.rightX=this.rightMenu.x,this.leftMenu.x=this.leftX-n-this.leftMenu.width,this.rightMenu.x=this.rightX+n+this.rightMenu.width,Laya.Tween.to(this.leftMenu,{x:this.leftX-n},500),Laya.Tween.to(this.rightMenu,{x:this.rightX+n},500),this.initBtnAni(),Se.instance.sendCustumEvent(34),bn.M_B_FIRST_Open&&k.requestPost("wxgame/sys/notice",{type:2},!0,!0).then(s=>{console.log(s);var l=s,l=s;if(l.list&&l.list.length>0){H.intance.openModule(f.NoticeDialog,[2,l]);return}}),bn.M_B_FIRST_Open=!1,!!L.instance.playerDto){var o=null;showChatBtn(!0,K.instance.walletAddress,o)}}initBtnAni(){for(var e=1;e<6;e++)this["spine_"+e].on(Laya.Event.READY,this,this.onSkReady,[this["spine_"+e]])}onSkReady(e){e.stop(),e.visible=!1,e==this.spine_5&&this.startBtnAni()}startBtnAni(){this.currIconAni>5&&(this.currIconAni=1),this["spine_"+this.currIconAni].play(0,!1),this["spine_"+this.currIconAni].visible=!0,this.currIconAni++,Laya.timer.once(2e3,this,this.startBtnAni)}changeMailFlag(){}updateTopInfo(){let e=L.instance.playerDto;if(!e)return;this.tf_roleName.text=e.name,this.levelTF.text=e.lv.toString(),e.needTip=!0,this.playerIcon.dataSource=e,this.updateExp(),this.changeMailFlag();let i=new Date(L.instance.m_serverTime);console.log("server time toLocaleString："+i.toLocaleString()),console.log("server time offset date："+L.instance.timeZoneOff/60/60),this.updateLocalAssets()}updateExp(){}requestAssets(){y.intance.event(h.UPDATE_ASSETS)}async updataBalence(){await K.instance.getBalance()}async updateAssets(){await mn.instance.updateAssetsBalance()}updateLocalAssets(){this.tf_3005.text=Te.filterNumFormat(L.instance.getConsumeValue(xe.TYPE_GOLD),0)}onEnable(){this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),Laya.timer.loop(1e3,this,this.refreshRoomTime),this.btn_shop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_shop]),this.btn_guild.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_guild]),this.btn_heroes.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_heroes]),this.btn_backpack.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_backpack]),this.btn_asset.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_asset]),this.btn_scholarshop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_scholarshop]),this.btn_leaderboard.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_leaderboard]),this.btn_social.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_social]),this.btn_mail.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_mail]),this.btn_activities.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_activities]),this.btn_setting.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_setting]),this.btn_fullScreen.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_fullScreen]),y.intance.on(h.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),y.intance.on(h.ROLE_INFO_CHANGE,this,this.updateTopInfo),y.intance.on(h.UPDATE_ASSETS,this,this.updateAssets),y.intance.on(At.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),y.intance.on("CHANG_NAME",this,this.changeName),y.intance.on("open_buy",this,this.openBuyDialog),y.intance.on("msg_173",this,this.onFirstRecharge),y.intance.on("ACCOUNTVO_UPDATE",this,this.updateExp),y.intance.on(h.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),this.initBtnBox()}onClickTab(e){e==1?(O.instance.arenaType=1,ye.intance.setCurrentScene(Q.M_SCENE_AIRDROP)):e==2?(O.instance.arenaType=2,ye.intance.setCurrentScene(Q.M_SCENE_AIRDROP)):e==3&&(O.instance.arenaType=3,ye.intance.setCurrentScene(Q.M_SCENE_AIRDROP))}refreshRoomTime(){this.refreshRoomBtnRed()}refreshRoomBtnRed(){this.img_red_1.visible=L.instance.getRedDotById(it.instance.ROOM_1_1)||L.instance.getRedDotById(it.instance.ROOM_1_2)||L.instance.getRedDotById(it.instance.ROOM_1_3),this.img_red_2.visible=L.instance.getRedDotById(it.instance.ROOM_2_1)||L.instance.getRedDotById(it.instance.ROOM_2_2)||L.instance.getRedDotById(it.instance.ROOM_2_3),this.img_red_3.visible=L.instance.getRedDotById(it.instance.ROOM_3_1)||L.instance.getRedDotById(it.instance.ROOM_3_2)||L.instance.getRedDotById(it.instance.ROOM_3_3),this.Img_social.visible=L.instance.getRedDotById(it.ROOM_FRIEND_APPLY),this.red_mail.visible=L.instance.getRedDotById(it.ROOM_MAIL),this.red_guild.visible=L.instance.getRedDotById(it.RED_GUILD_APPLY)}onFirstRecharge(e){}initBtnBox(){this.sortIconView()}sortIconView(){}async onclickBtnHandler(e){switch(e){case this.btn_shop:ye.intance.setCurrentScene(Q.M_SCENE_SHOP);break;case this.btn_heroes:ye.intance.setCurrentScene(Q.M_SCENE_HERO);break;case this.btn_backpack:ye.intance.setCurrentScene(Q.M_SCENE_KNAPSACK);break;case this.btn_social:{ye.intance.setCurrentScene(Q.M_SCENE_FRIEND);break}case this.btn_mail:ye.intance.setCurrentScene(Q.M_SCENE_MAIL);break;case this.btn_guild:L.instance.playerDto.union>0?ye.intance.setCurrentScene(Q.M_SCENE_MYUNION,L.instance.playerDto.union):ye.intance.setCurrentScene(Q.M_SCENE_UNION);break;case this.btn_setting:H.intance.openModule(f.GameSettingLanguageDialog);break;case this.btn_fullScreen:ge.fullScreen(!ge.isFullScreen);break;case this.btn_friend:H.intance.openModule(f.FriendMemberDialog);break;case this.btn_asset:ye.intance.setCurrentScene(Q.M_SCENE_ASSET);break;case this.btn_scholarshop:ye.intance.setCurrentScene(Q.M_SCENE_SHOLARSHIP);break;case this.btn_wallet:H.intance.openModule(f.WalletDialog);break;case this.btn_leaderboard:ye.intance.setCurrentScene(Q.M_SCENE_RANK);break;default:M.instance.notice(d.instance.getLanguage(12));break}}openBuyDialog(e){switch(parseInt(e)){case 3:this.buyGoldBtn();break;case 4:this.clickRecharge();break}}clickRecharge(){if(X.m_bInstantGame==!0){let e=d.instance.getLanguage(500004);le.instance().AlertByType(N.BASEALERTVIEW,e,N.YES);return}y.intance.event(h.EVENT_OPEN_MODULE,[f.RechargeDialog])}changeName(e){}buyGoldBtn(){y.intance.event(h.EVENT_OPEN_MODULE,[f.GetMoreDialog])}onDisable(){for(var e=1;e<6;e++)this["spine_"+e].off(Laya.Event.READY,this,this.onSkReady);y.intance.off(h.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),y.intance.off(h.ACCOUNTVO_UPDATE,this,this.updateExp),y.intance.off(h.ROLE_INFO_CHANGE,this,this.updateTopInfo),y.intance.off(h.UPDATE_ASSETS,this,this.updateAssets),y.intance.off(At.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),y.intance.off("CHANG_NAME",this,this.changeName),y.intance.off("open_buy",this,this.openBuyDialog),y.intance.off("msg_173",this,this.onFirstRecharge),y.intance.off(h.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),Laya.Tween.clearAll(this),Laya.timer.clearAll(this),showChatBtn(!1)}onEnterMatchRoom(e){e?Laya.timer.once(2e3,this,this.startBtnAni):Laya.timer.clear(this,this.startBtnAni)}};bn.M_B_FIRST_Open=!0,bn=p([LS("pxhiJrX5SkKKvyFr8uIlNA")],bn);var Ch=class extends Laya.Box{};var{regClass:_S}=Laya,kh=class extends Ch{constructor(){super();this.isAddEvent=!1}onEnable(){y.intance.on(h.EVENT_Game_Delay,this,this.onGameDelay)}onGameDelay(e){var i=R.intance.getGeneralValueById(6),n=i[0],r=i[1];this.tf_delay.text=e+"ms",e>r?(this.img_delay.skin="res/common/comm/img_com_xinhao3.png",this.tf_delay.color=yi.RED):e>n?(this.img_delay.skin="res/common/comm/img_com_xinhao2.png",this.tf_delay.color=yi.YELLOW):(this.img_delay.skin="res/common/comm/img_com_xinhao1.png",this.tf_delay.color=yi.GREEN)}onDisable(){y.intance.off(h.EVENT_Game_Delay,this,this.onGameDelay)}};kh=p([_S("AhgzWGWoRFetvSMsEOSkSg")],kh);var Ah=class extends Laya.Box{};var{regClass:xS}=Laya,Dh=class extends Ah{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.playerDto=e,this.playerDto&&(this.addEvent(),this.setCurrentOutPut())}set headSkin(e){parseInt(e)>0?this.img_head.skin=C.instance.getPlayerIcon(e):this.setImage(e)}async setCurrentOutPut(){if(!this.playerDto)return;let e=this.playerDto.icon;parseInt(e)>0?this.img_head.skin=C.instance.getPlayerIcon(e):this.setImage(e)}setImage(e){this.clearImage();var i=this;Laya.loader.load(e,Laya.Handler.create(this,()=>{if(i.destroyed)return;let n=Laya.loader.getRes(e);this.img_head.texture=n}),null,Laya.Loader.IMAGE,-1,!0,"1111",!1,!1)}clearImage(){this.img_head&&(this.img_head.texture=null)}destroy(e=!0){this.clearImage(),super.destroy(e)}toDetail(){!this.playerDto||!this.playerDto.needTip||H.intance.openModule(f.RoleInfoDialog)}};Dh=p([xS("OPT5t2CoSmuYp2zUJWwUWA")],Dh);var Mh=class extends Laya.Box{};var{regClass:wS}=Laya,Bh=class extends Mh{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.isAddEvent=!0)}onEnable(){}async onJoin(){if(this.roomDto.requirePass){var e=R.intance.m_dicNodes.get(this.roomDto.nodeId);if(e&&e.dT>800&&X.Debug<2){M.instance.notice(d.instance.getLanguage(1306));return}H.intance.openModule(f.InputPwdDialog,[this.roomDto])}else Je.instance.onCreateAndJoinWithPwd(ke.ACTION_JOIN,this.roomDto,"")}set dataSource(e){super.dataSource=e,this.roomDto=e,this.roomDto&&(this.roomDto.state==0?(this.btn_join.visible=!0,this.img_underway.visible=!1):(this.btn_join.visible=!1,this.img_underway.visible=!0),this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.roomDto.leader.icon;this.playerIcon.headSkin=e,this.tf_name.text=this.roomDto.roomName,this.tf_customName.text=this.roomDto.customName,this.roomDto.customName?this.tf_name.y=19:this.tf_name.y=35,this.tf_union.text=d.instance.getMultiLan(this.roomDto.leader.shortUnionName),this.tf_people.text='<font color="#25ff63">'+this.roomDto.memberCount+"</font>/"+this.roomDto.maxCount,this.img_coin.visible=this.roomDto.coinType!=xe.TYPE_GOLD,this.img_coin.skin=C.instance.getMoneyIcon(this.roomDto.coinType);var i=R.intance.m_dicNodes.get(this.roomDto.nodeId);this.nodeDelaySign.dataSource=i,this.roomDto.state==0?(this.btn_join.visible=!0,this.img_underway.visible=!1,this.tf_seconds.text=Ie.format(Math.round(this.roomDto.joinCd/1e3),":",!1)):(this.btn_join.visible=!1,this.img_underway.visible=!0,this.tf_seconds.text=Ie.format(Math.round(this.roomDto.fightEndTime/1e3),":",!1))}refreshTime(){this.roomDto.state==0?(this.btn_join.visible=!0,this.img_underway.visible=!1,this.tf_seconds.text=Ie.format(Math.round(this.roomDto.joinCd/1e3),":",!1),this.roomDto.joinCd-=1e3):(this.btn_join.visible=!1,this.img_underway.visible=!0,this.tf_seconds.text=Ie.format(Math.round(this.roomDto.fightEndTime/1e3),":",!1),this.roomDto.fightEndTime-=1e3)}};Bh=p([wS("YoCqj_dyTb2ZIAnhkSds6Q")],Bh);var Ph=class extends Laya.Box{};var{regClass:IS}=Laya,Mt=class extends Ph{init(t,e,i=28){var n,r;switch(t!=0?(r=Pt.getRandInRound(-30,30),e.bj?n=Mt.TYPE_Critical:n=Mt.TYPE_Normal):(r=Pt.getRandInRound(-30,30),n=Mt.TYPE_Miss),this.pos(r,-180),this.alpha=1,this.scale(1,1),this.tf_damage.visible=!1,this.box_crit.visible=!1,this.img_miss.visible=!1,n){case Mt.TYPE_Normal:this.tf_damage.text=t+"",this.showNormalDamageEffect();break;case Mt.TYPE_Critical:this.fontClip_damage.value=t+"",this.showCriticalDamageEffect();break;case Mt.TYPE_Miss:this.showMissEffect();break;default:break}}showNormalDamageEffect(){this.tf_damage.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,this.onComplete))}showCriticalDamageEffect(){this.box_crit.visible=!0,this.scale(.2,.2),Laya.Tween.to(this,{scaleX:1.3,scaleY:1.3,alpha:1,y:this.y-70},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1,alpha:0},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}))}showMissEffect(){this.img_miss.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}onComplete(){this.removeSelf(),Laya.Pool.recover("damageNumber",this)}};Mt.WHITE="#FFFFFF",Mt.ORANGE="#FFA500",Mt.RED="#FF0000",Mt.GREEN="#119c09",Mt.TYPE_Normal="Normal",Mt.TYPE_Miss="Miss",Mt.TYPE_Critical="Critical",Mt=p([IS("nHp6WKzZRIWvyhguidEfqg")],Mt);var Rh=class extends Laya.Box{};var{regClass:ES}=Laya,Nh=class extends Rh{set dataSource(t){if(super.dataSource=t,!!t){var e=t[0];this.tf_groupNum.text=d.instance.getLanguage(1364,e);for(var i=t[1],n=0;n<4;n++){var r=i[n],o=this["listItem_"+(n+1)],s=this["img_line_"+(n+1)];r?(o&&(o.visible=!0,o.dataSource=r),s&&(s.visible=!0)):(o&&(o.visible=!1),s&&(s.visible=!1))}}}};Nh=p([ES("nt2hpNSsSwWkkun3CZxOCg")],Nh);var Oh=class extends Laya.Box{};var{regClass:TS}=Laya,Hh=class extends Oh{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.roomGroupDataDto=e,this.roomGroupDataDto&&(this.roomRankPlayerDto=F.instance.playerEndDic.get(this.roomGroupDataDto.pid),this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.tf_name.text=Ae.abbreviateString(this.roomRankPlayerDto.name);let e=this.roomRankPlayerDto.icon;this.playerIcon.headSkin=e,this.tf_rank.text=d.instance.getLanguage(1365,this.roomRankPlayerDto.rankNum);var i=this.roomGroupDataDto.reward;if(i&&i.length>0){var n=i[0];this.img_reward_icon.skin=C.instance.getItemIcon(n.id),this.tf_reward_num.text=n.count+"",this.box_reward.visible=!0}else this.box_reward.visible=!1;var r=this.roomGroupDataDto.pid==L.instance.playerDto.pid,o=r?"#ffce58":"#96d2fc";this.tf_name.color=this.tf_rank.color=this.tf_reward_num.color=o,this.isFirst=this.roomGroupDataDto.rank==1}set isFirst(e){this.img_no1.visible=e}toDetail(){}};Hh=p([TS("aVUehRpFSl-pkUZJISXahg")],Hh);var Uh=class extends Laya.Box{};var{regClass:SS}=Laya,Vh=class extends Uh{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.roomRankPlayerDto=e,this.roomRankPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.roomRankPlayerDto.id==L.instance.playerDto.pid?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.roomRankPlayerDto.rankNum<4?this.bg.skin="res/matchRank1/img_ranking_bg_"+this.roomRankPlayerDto.rankNum+".png":this.bg.skin="res/matchRank1/img_ranking_bg_4.png",this.roomRankPlayerDto.rankNum<4?(this.img_rankIcon1.skin="res/matchRank1/img_ranking_"+this.roomRankPlayerDto.rankNum+".png",this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.roomRankPlayerDto.id==L.instance.playerDto.pid?this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_me.png":this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1);let e=this.roomRankPlayerDto.icon;this.playerIcon.headSkin=e,this.playerIcon.gray=this.roomRankPlayerDto.die,this.img_die.visible=this.roomRankPlayerDto.die,this.tf_name.text=this.roomRankPlayerDto.name,this.tf_rank.text=this.roomRankPlayerDto.rankNum+"",this.tf_kill.text=this.roomRankPlayerDto.kill+"",this.tf_score.text=this.roomRankPlayerDto.score+""}};Vh=p([SS("vpTYNMB4TfGFK2gaXiPAeg")],Vh);var Fh=class extends Laya.Dialog{};var{regClass:CS}=Laya,zh=class extends Fh{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER;this.allItems=[]}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.goMatchEnd)}setOpenData(e){var i=e[0];this.groupData=e[1],this.mcLanList.vScrollBarSkin="",F.instance.playerEndDic=new te,i.forEach(r=>{if(F.instance.playerEndDic.set(r.id,r),r.id==L.instance.playerDto.pid){this.myRank=r;return}}),this.mcLanList.array=i;let n=-1;this.mcLanList.selectedIndex=n,this.showListEffect(),O.instance.myPlayer.hp>0?this.successAni.visible=!0:this.successAni.visible=!1,Se.instance.sendCustumEvent(43)}showListEffect(){this.allItems=[];for(var e=this.mcLanList.array.length,i=0;i<e;i++){var n=this.mcLanList.getCell(i);n?(n.skewX=.5,n.alpha=0,this.allItems.push(n),Laya.timer.once(100+i*500,this,this.startShowItem,[i],!1)):console.log("showListEffect _item is null")}}startShowItem(e){var i=this.allItems[e];if(i==null){console.log("no list item now");return}i.scaleX=0,i.alpha=0,this.mcLanList.tweenTo(e,500),Laya.Tween.to(i,{scaleX:1,alpha:1},100,Laya.Ease.circOut,null,0,!1)}goMatchEnd(){H.intance.openModule(f.MatchEndView,[this.myRank,this.groupData]),this.close()}onDisable(){this.removeEvent(),this.myRank=this.groupData=null}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};zh=p([CS("NlnToPI4TTuxIDhRKLPChg")],zh);var Gh=class extends Laya.Dialog{};var{regClass:kS}=Laya,jh=class extends Gh{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER}onEnable(){this.btn_next.on(Laya.Event.CLICK,this,this.onNext),this.btn_goBattle.on(Laya.Event.CLICK,this,this.setToAirdropScene),this.btn_buy.on(Laya.Event.CLICK,this,this.onBuy),this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive),this.btn_help.on(Laya.Event.CLICK,this,this.onHelp),Se.instance.sendCustumEvent(43)}onHelp(){ge.commTipWithYes(d.instance.getLanguage("HELP"))}onNext(){this.groupInfos.length>0?(this.box_cumulative.visible=!0,this.box_outside.visible=!1):this.setToAirdropScene()}setToAirdropScene(){O.instance.arenaType=F.instance.matchDto.arenaType,ye.intance.setCurrentScene(Q.M_SCENE_AIRDROP)}onBuy(){ye.intance.setCurrentScene(Q.M_SCENE_SHOP,[3])}async onReceive(){if(this.welfareBagId>0){let e=await k.requestPost("wxgame/welfare/buy",{id:this.welfareBagId});e&&e.reward&&(H.intance.openModule(f.RewardGetDialog,e.reward),this.btn_receive.disabled=!0)}else M.instance.notice(d.instance.getLanguage(2e3))}setOpenData(e){var i=F.instance.matchDto;this.myRankPlayerDto=e[0];var n=e[1];if(this.groupInfos=[],n){var r=1;n.forEach(E=>{this.groupInfos.push([r,E]),r++})}this.myRankPlayerDto.rankNum<4?this.img_rankIcon.skin="res/matchEnd1/img_battleend_ranking_"+this.myRankPlayerDto.rankNum+".png":this.img_rankIcon.skin="res/matchEnd1/img_battleend_ranking_4.png",this.list_reward.vScrollBarSkin="",this.tf_rank.text=this.myRankPlayerDto.rankNum+"";var o=[],s=new te,l=F.instance.reward;l.forEach(E=>{var B=s.get(E.id);B?B.newAddCnt=B.newAddCnt+E.count:(B=new Fe(E.id),B.newAddCnt=E.count,o.push(B),s.set(E.id,B))});var c=this.list_reward.spaceX,u=this.list_reward.itemTemplate.width,m=o.length,b=m*u+c*(m-1);this.list_reward.repeatX=m,this.list_reward.width=b;var _=!1,w=!1;i.arenaType==1&&(i.coinType==xe.TYPE_TOX&&(this.welfareBagId=R.intance.getWelfareBagId(this.myRankPlayerDto.rankNum),this.welfareBagId>0&&this.myRankPlayerDto.lease==0&&(_=!0)),w=this.myRankPlayerDto.lease==0),_?(this.btn_receive.visible=!0,this.btn_receive.disabled=!0,this.btn_next.visible=!0,this.btn_buy.visible=!1,this.reward_cp.visible=!0,this.list_reward.x=this.btn_next.x+this.btn_next.width/2-b/2):(this.btn_receive.visible=!1,this.reward_cp.visible=!1,this.btn_next.visible=!0,w?this.btn_buy.visible=!0:(this.btn_buy.visible=!1,this.btn_next.x=this.box_outside.width-this.btn_next.width>>1),this.list_reward.x=this.box_outside.width-this.list_reward.width>>1),this.list_reward.array=o,this.list_reward.visible=!0,!this.list_reward.array||this.list_reward.array.length<=0?this.noDataBox1.visible=!0:this.noDataBox1.visible=!1;let v=-1;this.list_reward.selectedIndex=v,this.onShowCumulative()}onShowCumulative(){this.groupInfos.length>0?this.btn_next.label=d.instance.getUILang("Next"):this.btn_next.label=d.instance.getUILang("Go Battle"),this.list_group.array=this.groupInfos}onDisable(){this.removeEvent(),F.instance.clearData()}removeEvent(){}};jh=p([kS("y-nP_lRrQVef9uttVJ0rDw")],jh);var Kh=class extends Laya.Box{};var{regClass:AS}=Laya,Wh=class extends Kh{set dataSource(t){if(super.dataSource=t,!!t){var e=t[0];this.tf_groupNum.text=d.instance.getLanguage(1364,e);var i=t[1];this.list_group_players.array=i}}};Wh=p([AS("hRg5i0IfRMaPkSUsg-i-Lg")],Wh);var qh=class extends Laya.Box{};var{regClass:DS}=Laya,Yh=class extends qh{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.roomPlayer=e,!this.roomPlayer){this.img_back.skin="res/matchReady/img_jjc_0.png",this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){if(this.img_back.skin="res/matchReady/img_jjc_1.png",this.tf_name.text=Ae.abbreviateString(this.roomPlayer.name),this.box_show.visible=!0,this.destroyed)return;let e=this.roomPlayer.icon;this.playerIcon.headSkin=e,this.img_sign.visible=this.roomPlayer.leader>0,this.tf_union.text=d.instance.getMultiLan(this.roomPlayer.shortUnionName)}toDetail(){this.heroVo.id}};Yh=p([DS("PiGdVEY9T-K8CCfWLChS0w")],Yh);var ft=class ft{constructor(){}static pointEquil(t,e){return t&&e&&t.x==e.x&&t.y==e.y}static isEmpty(t){for(let e in t)return!1;return!0}static showTxtEffect(t,e){let i=parseInt(t.text),n=Math.floor((e-i)/5),r=0;Laya.timer.loop(60,null,o);let o=function(){r++,i+=n,r>=5&&(i=e,Laya.timer.clear(null,o)),t.text=i+""}}static showTxtFlash(t){let e=t.color;t.color=ft.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,i),50);let i=function(){t.color=ft.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,n),50)},n=function(){t.color=ft.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,r),50)},r=function(){t.color=ft.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,o),50)},o=function(){t.color=ft.COLORS[0],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,s),50)},s=function(){t.color=ft.COLORS[1],Laya.Tween.to(t,{},10,null,Laya.Handler.create(null,l),50)},l=function(){t.color=e}}static getProKey(t){return ft.PRO_DIC[t]?ft.PRO_DIC[t]:t}static getIconName(t){return ft.proList[t]}static clonePoint(t){return new Laya.Point(t.x,t.y)}static copyObj(t){let e={};for(let i in t)e[i]=t[i];return e}static mergeObj(t,e){for(let i in e)t[i]?t[i]=parseFloat(t[i])+parseFloat(e[i]):t[i]=e[i];return t}static checkHit(t){return t.visible&&t.mouseX>0&&t.mouseY>0&&t.mouseX<=t.width&&t.mouseY<=t.height}static separateObj(t,e){if(e)for(let i in e)t[i]&&(t[i]=parseFloat(t[i])-parseFloat(e[i]));return t}static toFixed(t,e=1){if((t+"").indexOf(".")!=-1){let i=parseFloat(t).toFixed(e);return e==1&&i.charAt(i.length-1)=="0"&&(i=parseInt(i)+""),i}return t+""}static formatResWith(t){return t>=1e12?Math.floor(t/1e12)+ft.RES_W[3]:t>=1e9?Math.floor(t/1e9)+ft.RES_W[2]:t>=1e6?Math.floor(t/1e6)+ft.RES_W[1]:t>=1e4?Math.floor(t/1e3)+ft.RES_W[0]:t+""}static formatNumWithSign(t,e=","){t=Math.floor(t);let i=t+"",n=1,r=[];for(let o=i.length-1;o>=0;o--)r.push(i.charAt(o)),n>0&&n%3==0&&r.push(e),n++;return r.reverse(),r[0]==e&&r.shift(),r.join("")}static autoRecyle(t,e=!1){t.on(Laya.Event.COMPLETE,null,i,[t]),t.isPlaying||t.play(1,!1);let i=function(n){n.off(Laya.Event.COMPLETE,null,i),n.stop(),n.removeSelf(),e&&Laya.Pool.recover("Animation",n)}}static createEllipse(t,e,i,n,r,o=1,s="#ffffff"){let l=[],c=n>r?o/n:o/r;for(let u=0;u<2*Math.PI;u+=c)l.push(e+n*Math.cos(u)-n/2,i+r*Math.sin(u));return t&&t.drawPoly(l.shift(),l.shift(),l,s),l}};ft.blackFilter=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.78,0]),ft.blackFilter2=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.5,0]),ft.qualityColors=["#78cefd","#78cefd","#78cefd","#d5a8ff","#fdd378","#ffa8a8","#ffa8a8","#ffa8a8"],ft.COLORS=["#69ff4c","#FFFFFF"],ft.PRO_DIC={HP:"hp",ATK:"attack",DEF:"defense",SPEED:"speed",RES:"resilience",CDMG:"critDamage",CDMGR:"critDamReduct"},ft.proList={hp:"HP",attack:"ATK",defense:"DEF",speed:"SPEED",hit:"hit",dodge:"dodge",crit:"crit",critDamage:"CDMG",resilience:"RES",critDamReduct:"CDMGR"},ft.RES_W=["K","M","B","T"];var Ma=ft;var $h=class extends Laya.Sprite{};var{regClass:MS}=Laya,Xh=class extends $h{constructor(){super();this.isAddEvent=!1;this.isMe=!1;this.inGround=!1;this.moveSpeed=6;this._speed=6;this.biasSpeed=0;this.lastDirectStr="left";this.directStr="left";this._roleDirection=-1;this.inControl=!1;this.isStop=!1;this.isLockAni=!1;this.aniChange=!1;this.displacementType=0;this.timeStamp=0;this.currArea=0;this.flashCount=0;this.lastX=-1;this.lastY=-1;this.lastRoleDirection1=-1;this.lastSpeed1=-1;this.lastArea=-1}get speed(){return this._speed}set speed(e){this._speed=e,this.biasSpeed=Math.round(this.speed*Math.sin(45*Math.PI/180)),console.log("Role speed2: ",this.speed,this.biasSpeed,this.roomPlayerDto.id)}get roleDirection(){return this._roleDirection}set roleDirection(e){this._roleDirection=e,e!=-4&&(e>270||e<90?this.directStr="right":e>90&&e<270&&(this.directStr="left"),this.lastDirectStr!=this.directStr&&(this.heroBox.scaleX=this.directStr=="left"?1:-1,this.lastDirectStr=this.directStr))}set myRoleDirection(e){if(this.roleDirection!=e){this.roleDirection=e;let i=28+Math.sin(e*(Math.PI/180))*(28/4),n=24+Math.sin(e*(Math.PI/180))*(14/2),r=this.img_d.width/2+Math.cos(e*(Math.PI/180))*(this.img_d.width/2),o=this.img_d.height/2+ +Math.sin(e*(Math.PI/180))*(this.img_d.height/2);this.img_arrow.pos(r,o),this.img_gj.rotation=e+90,this.img_arrow.rotation=e,this.img_arrow.width=i,this.img_arrow.height=n}}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(this.roomPlayerDto=e,!!this.roomPlayerDto){if(this.pos(this.roomPlayerDto.x,this.roomPlayerDto.y),this.addEvent(),this.speed=this.roomPlayerDto.speed,this.currArea=this.roomPlayerDto.area,console.log("MatchHeroSpr speed: "+this.speed),this.heroVo=new Rt,this.heroVo.id=this.roomPlayerDto.heroId,this.heroVo.color=this.roomPlayerDto.heroColor,this.moveSpeed=this.heroVo.heroItem.mov/30,this.setCurrentOutPut(),this.updataBlood(),this.roomPlayerDto.hp<=0){this._isDead=!0,this.setDead();return}this.addDiquanAndBaoqi()}}setDead(){console.log("MatchHeroSpr setDead: "+this.isMe),this._isRealDead=!0,this.alpha=.5,this.img_deadImg.visible=!0;var e=this.img_deadImg.y;this.tf_name.visible=!1,this.box_blood.visible=!1,this.spineNodeBack.visible=!1,this.spineNodeFront.visible=!1,this.heroSk.visible=!1,this.img_deadImg.y=0,this.img_deadImg.scale(0,0),this.getComponent(Laya.RigidBody).mask=1;var i=this;Laya.Tween.to(this.img_deadImg,{y:e,scaleX:1,scaleY:1},400,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){i.isMe&&y.intance.event(h.EVENT_GameScene_Gray)}))}updataBlood(){this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}addDiquanAndBaoqi(){if(console.log("addDiquanAndBaoqi"),!this.destroyed){var e=this.heroVo.heroItem.level,i=this.heroVo.heroItem.level;if(!this.baoqiSpineSk){if(i<4)return;this.baoqiSpineSk=new Laya.SpineSkeleton,this.spineNodeBack.addChild(this.baoqiSpineSk),this.baoqiSpineSk.animationName="animation";var n=O.instance["baoqiEffect"+i];this.baoqiSpineSk.templet=n}}}setCurrentOutPut(){this.roomPlayerDto.hp>0&&(this.heroSk.dataSource=this.heroVo),this.tf_name.color=Ma.qualityColors[this.heroVo.heroItem.quality-1],this.tf_name.text=Ae.abbreviateString(this.roomPlayerDto.name),this.img_country.skin=C.instance.getCountryIcon(this.roomPlayerDto.country+""),L.instance.playerDto.pid==this.roomPlayerDto.id?this.myRoleDirection=this.roomPlayerDto.dire:this.roleDirection=this.roomPlayerDto.dire}pos(e,i,n){if(super.pos(e,i,n),this.roomPlayerDto&&this.roomPlayerDto.id&&O.instance.matchHeroSmallDic){var r=O.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);if(r){var o=F.instance.currArenaItem.mapid;o==1002&&(e-=160,i-=160);var s=e*216/3040,l=i*216/3040;r.pos(s,l,n)}}return this}set visible(e){if(super.visible=e,this.roomPlayerDto&&this.roomPlayerDto.id&&O.instance.matchHeroSmallDic){var i=O.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);i&&(i.visible=e)}}set alpha(e){if(super.alpha=e,this.roomPlayerDto&&this.roomPlayerDto.id&&O.instance.matchHeroSmallDic){var i=O.instance.matchHeroSmallDic.get(this.roomPlayerDto.id);i&&(i.alpha=e)}}onAwake(){}backAni(){}idle(){console.log(`${this.roomPlayerDto.id} 播放 待机 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Ye.ANI_daiji,!0,!1)}walk(){console.log(`${this.roomPlayerDto.id} 播放 走动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Ye.ANI_xingzou,!0,!1)}run(){console.log(`${this.roomPlayerDto.id} 播放 跑动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Ye.ANI_shanbi,!0,!1)}playAttackAnimation(e,i,n,r){if(!this._isDead){var o=R.intance.m_dicSkills.get(e);if(console.log(`${this.roomPlayerDto.id} 攻击 , 播放 ${e} 动画`),o.type==1){if(i&&O.instance.onSendAnimation(e,Ye.TYPE_GONGJI),this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Ye.ANI_gongji+s,!1)}if(i){var l=O.instance.getAttackTarget(o);if(l&&l.length>0){var c=l[0];c.roomPlayerDto.hp>0&&Laya.timer.frameOnce(1,this,this.onRealAttack,[o,c.roomPlayerDto.id])}}Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,r(),this.aniChange=!0}),O.instance.playSound(1)}else if(o.type==2){if(i&&O.instance.onSendAnimation(e,Ye.TYPE_TI),this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Ye.ANI_ti+s,!1)}i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(30,this,()=>{this.isStop=!1,r(),this.aniChange=!0}),O.instance.playSound(2)}else if(o.type==6)i&&O.instance.onSendAnimation(e,Ye.TYPE_DAZHAO),this.isStop=!0,this.heroSk.isReady&&(console.log("EnumHero.ANI_dazhao: "+Ye.ANI_dazhao),this.heroSk.sk.play(Ye.ANI_dazhao,!1)),i&&Laya.timer.frameOnce(30,this,this.onRealAttack,[o]),Laya.timer.frameOnce(70,this,()=>{this.isStop=!1,r(),this.aniChange=!0}),O.instance.playSound(2);else if(o.type==5){var u=[];if(this.displacementType=o.displacementType,i){var m=o.displacement>0?o.displacement:50;u=Pt.rollCharacterByDir(this.x,this.y,this.roleDirection,m),O.instance.onSendAnimation(e,Ye.TYPE_FEI,-1,u[0],u[1])}else u[0]=n.get("newX"),u[1]=n.get("newY");if(this.isStop=!0,this.heroSk.isReady){var s=this.heroVo.heroItem.quality>3?this.heroVo.heroItem.quality:"";this.heroSk.sk.play(Ye.ANI_ti+s,!1)}if(this.heroVo.heroItem.race!=4){var b=O.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=b,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(5,this,this.onRoll,[u]),Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,this.displacementType=0,r(),this.aniChange=!0}),O.instance.playSound(3)}else if(o.type==3){var u=[];if(i){var m=o.displacement>0?o.displacement:350;u=Pt.rollCharacterByDir(this.x,this.y,this.roleDirection,m),O.instance.onSendAnimation(e,Ye.TYPE_HUA,-1,u[0],u[1])}else u[0]=n.get("newX"),u[1]=n.get("newY");if(this.getComponent(Laya.BoxCollider).isSensor=!0,this.isStop=!0,this.heroSk.isReady&&this.heroSk.sk.play(Ye.ANI_hua,!1),this.heroVo.heroItem.race!=4){var b=O.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=b,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}Laya.timer.frameOnce(5,this,this.onRoll,[u]),Laya.timer.frameOnce(20,this,()=>{this.getComponent(Laya.BoxCollider).isSensor=!1,this.isStop=!1,r(),this.aniChange=!0}),O.instance.playSound(3)}else if(o.type==4){i&&(this.isLockAni=!0,O.instance.onSendAnimation(e,Ye.TYPE_DANG)),this.heroSk.isReady&&this.heroSk.sk.play(Ye.ANI_dang,!1),this.dunpaiSk||(this.dunpaiSk=O.instance.dunpaiTemplet.buildArmature(0),this.dunpaiSk.x=-45,this.skNode.addChild(this.dunpaiSk)),this.dunpaiSk.play(0,!0);var _=2e3,w=o.buff;if(w.length>2){var v=w[2],E=R.intance.m_dicBuffs.get(v);_=parseInt(E.time+"")}Laya.timer.once(_,this,()=>{this.isLockAni=!1,this.dunpaiSk&&(this.dunpaiSk.stop(),this.dunpaiSk.visible=!1),r(),this.aniChange=!0}),O.instance.playSound(2)}}}onRoll(e){this.inGround||Laya.Tween.to(this,{x:e[0],y:e[1]},330)}onHuaComplate(){this.huaSpineSk.stop(),this.huaSpineSk.visible=!1}onRealAttack(e,i=-1){if(console.log("onRealAttack",i),i>0)O.instance.onSendAttack(i,1,e.id);else if(e.type==6){var n=O.instance.getAttackTarget(e);n&&n.length>0&&n.forEach(o=>{o&&o.roomPlayerDto.hp>0&&O.instance.onSendAttack(o.roomPlayerDto.id,1,e.id)})}else{var n=O.instance.getAttackTarget(e);if(n&&n.length>0){var r=n[0];r.roomPlayerDto.hp>0&&O.instance.onSendAttack(r.roomPlayerDto.id,1,e.id)}}}playBeijiAnimation(e){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 被击 动画`),this.heroSk.isReady&&this.heroSk.sk.play(Ye.ANI_beiji,!1),Laya.timer.once(1e3,this,()=>{e()}))}playChuShengAnimation(e){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 出生 动画`),this.heroSk.isReady&&this.heroSk.sk.play(Ye.ANI_ruchang,!1),Laya.timer.once(1e3,this,()=>{e()}))}attack(e=0,i=!0,n=null){if(console.log(`${this.roomPlayerDto.id} 攻击 s`),this._isAttacking||this._isDead){console.log(`${this.roomPlayerDto.id} 没有靠近目标或正在攻击中或技能冷却中或已死亡，无法攻击`);return}this._isAttacking=!0,this.playAttackAnimation(e,i,n,()=>{this._isAttacking=!1})}takeDamage(e,i){var n=e.skill,r=e.attackValue,o=e.defHp;console.log(`${this.roomPlayerDto.id} 受到 ${r} 伤害s`),!this._isDead&&(this.roomPlayerDto.hp=o,console.log(`${this.roomPlayerDto.id} 受到 ${r} 伤害`),this.updateHealthBar(i),this.showDamageLabel(n,r,e),this._isAttacking&&(console.log(`${this.roomPlayerDto.id} 正在攻击中，受到攻击中断攻击 暂时没有中断攻击`),Laya.timer.clear(this,this.onRealAttack),this._isAttacking=!1),this._isTakingDamage=!0,this.isLockAni=!0,this.beijiSk||(this.beijiSk=O.instance.beijiTemplet.buildArmature(0),this.skNode.addChild(this.beijiSk)),this.beijiSk.play(0,!1),this.playBeijiAnimation(()=>{this.beijiSk&&(this.beijiSk.stop(),this.beijiSk.visible=!1),this._isTakingDamage=!1,this.isLockAni=!1,this.backAni()}))}die(e){if(console.log(`${this.roomPlayerDto.id} 死亡s`),!this._isDead){console.log(`${this.roomPlayerDto.id} 死亡`);var i=Pt.judgePosition(e.x-this.x,e.y-this.y);this.roleDirection=i,this._isDead=!0,this.heroSk.isReady&&this.heroSk.sk.play(Ye.ANI_siwang,!1),Laya.timer.once(2e3,this,this.setDead)}}applySkillEffect(e){console.log(`${this.roomPlayerDto.id} 受到技能效果: ${e}`)}updateHealthBar(e){this.roomPlayerDto.hp<=0&&(this.roomPlayerDto.hp=0,this.die(e)),this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}showDamageLabel(e,i,n){if(i.length>1)for(var r=R.intance.m_dicSkills.get(e),o=r.section,s=o,l=0;l<i.length;l++){var c=i[l];this.showDamageLabelDetailDelay(c,s[l][1],n)}else i.length==1?this.showDamageLabelDetailDelay(i[0],100,n):this.showDamageLabelDetailDelay(0,100,n);var u=this;if(n.allAtkValue!=0){var m=200;this.originalBlendMode=this.img_hp_bg.blendMode,this.flashCount=0,Laya.timer.loop(m,this,this.flashBlood)}}flashBlood(){var e=2;this.flashCount<e?this.img_hp_bg.blendMode===this.originalBlendMode?this.img_hp_bg.blendMode="lighter":(this.img_hp_bg.blendMode=this.originalBlendMode,this.flashCount++):(this.img_hp_bg.blendMode=this.originalBlendMode,Laya.timer.clear(this,this.flashBlood))}showDamageLabelDetailDelay(e,i,n){Laya.timer.once(i,this,this.showDamageLabelDetail,[e,n],!1)}showDamageLabelDetail(e,i){var n=Laya.Pool.getItemByCreateFun("damageNumber",O.instance.damageNumPrefab.create,O.instance.damageNumPrefab);n.init(e,i),this.addChild(n)}onSendMoveData(){if(!this._isDead){var e=this.speed,i=this.roleDirection,n=this.x,r=this.y;if(Math.abs(n-this.lastX)>2||Math.abs(r-this.lastY)>2||this.lastRoleDirection1!=i||this.lastSpeed1!=e||this.lastArea!=this.currArea){this.pos(n,r),this.lastX=n,this.lastY=r,this.lastRoleDirection1=i,this.lastSpeed1=e,this.lastArea=this.currArea;var o=L.instance.m_serverTime;this.timeStamp=o,O.instance.onSendMove(o,this.roomPlayerDto.id,e,i,n,r,this.currArea)}}}beiTui(e){var i=this.roomPlayerDto.id,n=this.x,r=this.y;if(Math.abs(n-this.lastX)>2||Math.abs(r-this.lastY)>2){this.lastX=n,this.lastY=r;var o=L.instance.m_serverTime;this.timeStamp=o,O.instance.onSendTargetMove(o,e,i,n,r)}}onPushMoveData(e,i,n,r,o,s){if(this.roleDirection=n,this.speed!=i&&(this.speed=i,i==0?this.idle():this.walk()),this.currArea!=s&&(this.currArea=s),e<=this.timeStamp){console.log("位置数据忽略："+e+" < "+this.timeStamp);return}(Math.abs(r-this.lastX)>1||Math.abs(o-this.lastY)>1)&&(this.pos(r,o),this.lastX=r,this.lastY=o)}onPushTargetMoveData(e,i,n){if(e<=this.timeStamp){console.log("推人数据忽略："+e+" < "+this.timeStamp);return}(Math.abs(i-this.lastX)>2||Math.abs(n-this.lastY)>2)&&(this.pos(i,n),this.lastX=i,this.lastY=n)}sendToServer(e){}initBirth(e){e?this.createBirthSpine():this.onPlayBirthEnd()}createBirthSpine(){this.heroSk.visible=!1,this.tf_name.visible=!1,this.box_blood.visible=!1,this.chushengBackSpineSk||(this.chushengBackSpineSk=new Laya.SpineSkeleton,this.spineNodeBack.addChild(this.chushengBackSpineSk)),this.chushengFrontSpineSk||(this.chushengFrontSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.chushengFrontSpineSk)),this.chushengBackSpineSk.on(Laya.Event.READY,this,this.onBirthReady);var e=O.instance.ruchangEffects[this.getRandomAnimationType()];this.destroyed||(this.chushengBackSpineSk.animationName="animation2",this.chushengBackSpineSk.templet=e,this.chushengFrontSpineSk.animationName="animation1",this.chushengFrontSpineSk.templet=e)}getRandomAnimationType(){return Math.floor(Math.random()*3)}onBirthReady(){Laya.timer.once(500,this,this.onPlayBirth1)}onPlayBirth1(){this.isLockAni=!0,this.heroSk.visible=!0,this.playChuShengAnimation(()=>{this.isLockAni=!1,this.aniChange=!0});try{this.chushengBackSpineSk.visible=!0,this.chushengBackSpineSk.play("animation2",!1),this.chushengFrontSpineSk.visible=!0,this.chushengFrontSpineSk.play("animation1",!1)}catch{}Laya.timer.once(1300,this,this.onPlayBirthEnd)}onPlayBirthEnd(){this.chushengBackSpineSk&&(this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),this.chushengBackSpineSk.destroy(),this.chushengBackSpineSk.removeSelf()),this.chushengFrontSpineSk&&(this.chushengFrontSpineSk.destroy(),this.chushengFrontSpineSk.removeSelf()),this.box_d.visible=!0,this.tf_name.visible=!0,this.box_blood.visible=!0}onDisable(){this.chushengBackSpineSk&&this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};Xh=p([MS("JIaWsVNzTK2dJIUcev60tQ")],Xh);var Zh=class extends Laya.Box{};var{regClass:BS}=Laya,Jh=class extends Zh{init(){var t=F.instance.currArenaItem.coinType;this.img_bing.skin="gameIcon/map/1001/img_bing_"+t+".png"}set dataSource(t){super.dataSource=t}};Jh=p([BS("W3qDvbUmSa2SFKJ5iEmjsg")],Jh);var ef=class extends Laya.Box{};var{regClass:PS}=Laya,tf=class extends ef{init(){var t=F.instance.currArenaItem.coinType;this.img_bing.skin=C.instance.getItemIcon(t),O.instance.allOrders||(O.instance.allOrders=[]),O.instance.allOrders.push(this.img_mtl)}set dataSource(t){super.dataSource=t}};tf=p([PS("UmH7VSkYTd6D8QA2Eu2OYw")],tf);var af=class extends Laya.Box{};var{regClass:RS}=Laya,nf=class extends af{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e;var i=e;this.roomPlayer=F.instance.playerJoinDic.get(i),this.roomPlayer&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.tf_name.text=Ae.abbreviateString(this.roomPlayer.name);let e=this.roomPlayer.icon;this.playerIcon.headSkin=e;var i=this.roomPlayer.id==L.instance.playerDto.pid,n=i?"#ffce58":"#96d2fc";this.tf_name.color=n}toDetail(){}};nf=p([RS("YQ6pCsb4S0ibRtZ73-V9-Q")],nf);var rf=class extends Laya.Box{};var{regClass:NS}=Laya,of=class extends rf{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e;var i=e;i&&(this.roomRankPlayerDto=F.instance.playerJoinDic.get(i),this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.tf_name.text=Ae.abbreviateString(this.roomRankPlayerDto.name);let e=this.roomRankPlayerDto.icon;this.playerIcon.headSkin=e;var i=this.roomRankPlayerDto.id==L.instance.playerDto.pid,n=i?"#ffce58":"#96d2fc";this.tf_name.color=n}toDetail(){}};of=p([NS("U8opa1YySD-Mm6RRAvEq9g")],of);var sf=class extends Laya.Box{};var{regClass:OS}=Laya,lf=class extends sf{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){this.roomPlayerDto=e,this.roomPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}setCurrentOutPut(){this.tf_rank.text=this.roomPlayerDto.rankNum+"";let e=this.roomPlayerDto.icon;this.playerIcon.headSkin=e,this.tf_name.text=Ae.abbreviateString(this.roomPlayerDto.name),this.tf_kill.text=this.roomPlayerDto.kill+"",this.roomPlayerDto.id==O.instance.myPlayer.id?(this.img_bg.skin="res/match1/img_ph2.png",this.tf_rank.color="#000000",this.tf_name.color="#ffe64b",this.img_kill.filters=[ge.YELLOW],this.tf_kill.color="#ffe64b",this.box_item.x=6):(this.img_bg.skin="res/match1/img_ph.png",this.tf_rank.color="#ffffff",this.tf_name.color="#ffffff",this.img_kill.filters=null,this.tf_kill.color="#ffffff",this.box_item.x=15)}};lf=p([OS("XTVFXeI_R768e0Elv_ePAA")],lf);var cf=class extends Laya.Scene{};var{regClass:HS}=Laya,uf=class extends cf{constructor(){super(...arguments);this.type=1}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP}onOpened(e){this.type=e}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}onEnable(){console.log("MatchReadyRT onEnable"),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_random.on(Laya.Event.CLICK,this,()=>{this.generateName()}),this.btn_enter.on(Laya.Event.CLICK,this,()=>{var e=this.input_username.text;if(console.log("phyBtn"),e==""){alert("用户名不能为空");return}vt.instance.openId=e,vt.instance.initSocket()})}generateRandomName(e){let i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n="";for(let r=0;r<e;r++){let o=Math.floor(Math.random()*i.length);n+=i.charAt(o)}return n}generateName(){this.input_username.text=this.generateRandomName(8)}onDestroy(){}};uf=p([HS("mOlMVGD3TRCKNoddhyUGLw")],uf);var pf=class extends Laya.Dialog{};var{regClass:US}=Laya,mf=class extends pf{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER}onEnable(){}onOpened(e){this.updateBattleCD()}updateBattleCD(){var e=F.instance.matchDto.startTime-F.instance.matchDto.nowTime;F.instance.startCoolDownTime=Math.round(e/1e3),F.instance.startCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):(Laya.timer.clear(this,this.onSetCoolTime),this.close())}onSetCoolTime(){F.instance.startCoolDownTime>=0?(this.fontClip_reduceTime.value=F.instance.startCoolDownTime+"",this.scaleEffect(),F.instance.startCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),this.onMatchStartEnd())}scaleEffect(){var e=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(e.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}onMatchStartEnd(){Laya.timer.once(5e3,this,this.close)}onDisable(){this.removeEvent(),F.instance.stopAll=!1}removeEvent(){Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};mf=p([US("xpPoFvX_SqiYMO5AaOwGyA")],mf);var df=class extends Laya.Box{};var{regClass:VS}=Laya,hf=class extends df{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.itemVo=e,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.itemVo&&(this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=this.itemVo)}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===ht.TYPE_Equipment?H.intance.openModule(f.EquipDetailDialog,this.itemVo):H.intance.openModule(f.KnapsackTipDialog,this.itemVo))}};hf=p([VS("WXpxCvqlQ2mKdcJCYlqOeg")],hf);var ff=class extends Laya.Scene{};var{regClass:FS}=Laya,yf=class extends ff{constructor(){super(...arguments);this.liveNum=0}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP,O.instance.init()}onOpened(e){var i=F.instance.matchDto.startTime-F.instance.matchDto.nowTime;i>0&&H.intance.openModule(f.MatchReadyView);var n=F.instance.matchDto.arenaId,r=R.intance.m_dicArenaDic.get(n);F.instance.currArenaItem=r;var o=F.instance.currArenaItem.mapid,s=Laya.loader.getRes("gameIcon/map/map_"+o+".lh");this.img_smallMap.skin="res/match1/img_map_"+o+".png";var l=Laya.Pool.getItemByCreateFun("MatchMap1001",s.create,s);l.init(),O.instance.gameMap=l,O.instance.box_players=l.box_players,this.matchBox.removeChildren(),this.matchBox.addChild(l);var c=L.instance.playerDto;this.tf_roleName.text=c.name;let u=c.icon;this.playerIcon.headSkin=u,O.instance.initMatch(this,this.onInitEnd),Se.instance.sendCustumEvent(42);var m=F.instance.roomDto.roomId;this.arenaNo.text=m+"";var b=F.instance.roomDto.nodeId;if(b){var _=R.intance.m_dicNodes.get(b);this.nodeDelaySign.dataSource=_,this.nodeDelaySign.startTest()}}onInitEnd(e){e.updateSkill(),e.updateKill(),e.updateBattleCD(),Laya.timer.frameLoop(10,e,e.updateCharactersOrder)}onRestoreData(){O.instance.updateMatch(this,this.onInitEnd)}updateSkill(){var e=O.instance.myPlayer,i=R.intance.m_dicHeros.get(e.heroId);console.log("updateSkill"),console.log(i.skillIds);for(var n=i.skillIds.length,r=0;r<n;r++){var o=i.skillIds[r],s=R.intance.m_dicSkills.get(o),l=this["matchSkill"+(r+1)];l.keyNum=r+1,l.dataSource=s;var c=e.skillCd.get(o);c&&l.updateSkillCooldown(c),l.updateGlobalCooldown(e.commonCd),l.visible=!0}}updateKill(){O.instance.myPlayer&&(this.tf_kill.text=O.instance.myPlayer.kill+""),this.list_rank.array=this.getSortPlayer(O.instance.matchHeroDic.values),this.tf_remainer.text=this.liveNum+"",this.tf_total.text="/ "+O.instance.matchHeroDic.values.length}getSortPlayer(e){var i=e.slice(),n=i.sort((s,l)=>l.score-s.score),r=[];this.liveNum=0;var o=1;return n.forEach(s=>{s.rankNum=o,s.hp>0&&this.liveNum++,(o<4||s.id==L.instance.playerDto.pid)&&r.push(s),o++}),r}updateBattleCD(){F.instance.matchCoolDownTime=Math.round(F.instance.matchDto.remainderCd/1e3),F.instance.matchCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):Laya.timer.clear(this,this.onSetCoolTime)}onSetCoolTime(){F.instance.matchCoolDownTime>=0?(this.fontClip_reduceTime.value=Ie.format(F.instance.matchCoolDownTime,":",!1),F.instance.matchCoolDownTime>90?this.fontClip_reduceTime.skin="res/match1/fontClip_1.png":F.instance.matchCoolDownTime>10?this.fontClip_reduceTime.skin="res/match1/fontClip_2.png":(this.fontClip_reduceTime.skin="res/match1/fontClip_3.png",this.scaleEffect()),F.instance.stopAll||F.instance.matchCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.once(1e4,this,this.checkMatchRankData))}checkMatchRankData(){F.instance.checkMatchRankData()}scaleEffect(){var e=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(e.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}updateCharactersOrder(){O.instance.allOrders.sort((e,i)=>e.y-i.y);for(let e=0;e<O.instance.allOrders.length;e++)O.instance.allOrders[e].zOrder=e}onFirstBloodPush(e){var i=e.pid,n=O.instance.matchHeroDic.get(i);let r=n.icon;this.playerIcon_first.headSkin=r,this.img_firstBlood.visible=!0,this.img_firstBlood.alpha=0,this.img_firstBlood.y=-200,Laya.Tween.to(this.img_firstBlood,{y:92,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood1))}onFirstBlood1(){this.zi_firstBlood.scale(1,1),Laya.Tween.to(this.zi_firstBlood,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood2))}onFirstBlood2(){Laya.Tween.to(this.zi_firstBlood,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood3))}onFirstBlood3(){Laya.Tween.to(this.img_firstBlood,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood4),1500)}onFirstBlood4(){this.img_firstBlood.visible=!1}onMutiKillPush(e){this.fontClip_kill.value=e.kill+"";var i=!1;e.kill>=3?(i=!0,this.img_mutiKill.skin="res/match1/img_kill_3s.png"):this.img_mutiKill.skin="res/match1/img_kill_2s.png";var n=e.pid,r=O.instance.matchHeroDic.get(n);let o=r.icon;this.playerIcon_second.headSkin=o,this.img_mutiKill.visible=!0,this.img_mutiKill.alpha=0,this.img_mutiKill.y=-200,Laya.Tween.to(this.img_mutiKill,{y:175,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill1,[i]))}onMutiKill1(e){this.zi_mutiKill.scale(1,1),e?Laya.Tween.to(this.zi_mutiKill,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill2)):this.onMutiKill3(2e3)}onMutiKill2(){Laya.Tween.to(this.zi_mutiKill,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill3,[1500]))}onMutiKill3(e){Laya.Tween.to(this.img_mutiKill,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill4),e)}onMutiKill4(){this.img_mutiKill.visible=!1}onGameSceneGray(){this.matchBox.gray=!0}onEnable(){console.log("MatchScene onEnable"),y.intance.on(h.UPDATE_KILL_NUM,this,this.updateKill),y.intance.on(h.EVENT_RESTORE_DATA,this,this.onRestoreData),y.intance.on(h.EVENT_FirstBlood,this,this.onFirstBloodPush),y.intance.on(h.EVENT_MutiKill,this,this.onMutiKillPush),y.intance.on(h.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.on(Laya.Event.FOCUS,this,this.onWindowFocus)}onWindowFocus(){O.instance.sendRestoreData()}onDisable(){y.intance.off(h.UPDATE_KILL_NUM,this,this.updateKill),y.intance.off(h.EVENT_RESTORE_DATA,this,this.onRestoreData),y.intance.off(h.EVENT_FirstBlood,this,this.onFirstBloodPush),y.intance.off(h.EVENT_MutiKill,this,this.onMutiKillPush),y.intance.off(h.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.off(Laya.Event.FOCUS,this,this.onWindowFocus),Laya.timer.clearAll(this)}};yf=p([FS("sX0uLhOQSmm8b-_sHNqe5w")],yf);var{regClass:zS,property:Fhe}=Laya,bl=class extends Laya.Script{constructor(){super()}onAwake(){}onStart(){O.instance.playMusic()}onLateUpdate(){O.instance.moveGameWindow()}};bl=p([zS("Ply19emtSrqrBk7nHXToAQ")],bl);var bf=class extends Laya.Box{};var{regClass:GS}=Laya,gf=class extends bf{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.txt_num.text="",this.img_icon.skin=C.instance.getMatchSkillIcon(this.skillItem.icon))}};gf=p([GS("iwuFUCOEQRyOjxpy6IkQ2Q")],gf);var vf=class extends Laya.Button{};var{regClass:jS}=Laya,Lf=class extends vf{constructor(){super();this.isAddEvent=!1;this.isCanClick=!0;this.skillCooldown=5e3;this.thisGlobalCooldown=1e4;this.globalCooldown=1e4;this.remainingSkillCooldown=0;this.remainingGlobalCooldown=0}onEnable(){this.addEvent()}addEvent(){this.isAddEvent||(y.intance.on(h.EVENT_CLICK_NUM,this,this.onNumberClick),y.intance.on(h.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.onSkillButtonClick),this.on(Laya.Event.MOUSE_UP,this,this.onSkillButtonUp))}onNumberClick(e){e==this.keyNum&&this.onSkillButtonClick(null)}set dataSource(e){super.dataSource=e,this.skillItem=e,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.isBig=this.skillItem.icon=="1001",this.skillIconItem.dataSource=this.skillItem,this.skillCooldown=this.skillItem.cd,this.thisGlobalCooldown=this.skillItem.commCd,Laya.timer.frameLoop(1,this,this.updateCooldown))}onMouseClick(e){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=0;O.instance.playSound(1),Laya.timer.once(1e3,this,()=>{this.isCanClick=!0})}}onSkillButtonUp(e){e&&e.stopPropagation(),fn.clearClickFilter(this)}onSkillButtonClick(e){e&&e.stopPropagation(),this.remainingSkillCooldown<=0&&this.remainingGlobalCooldown<=0?(console.log("技能释放！"),Laya.Tween.to(this,{scaleX:.8,scaleY:.8},100,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},100,Laya.Ease.linearNone)})),O.instance.myHeroSpr.attack(this.skillItem.id),this.updateSkillCooldown(this.skillCooldown),y.intance.event(h.EVENT_UPDATE_GLOBAL_COOL,[this.thisGlobalCooldown])):console.log("技能或全局冷却还在进行中，无法释放。")}updateSkillCooldown(e){this.remainingSkillCooldown=e}updateGlobalCooldown(e){this.globalCooldown=e,this.remainingGlobalCooldown=e}updateCooldown(){if(this.remainingSkillCooldown>0){this.remainingSkillCooldown-=Laya.timer.delta;let e=this.remainingSkillCooldown/1e3;this.txt_time.text=e.toFixed(1),this.updateCooldownMask(this.skillCooldownMask,this.remainingSkillCooldown/this.skillCooldown,"#000000"),this.img_djs.visible=!0,this.txt_time.visible=!0}else this.img_djs.visible=!1,this.txt_time.visible=!1;this.remainingGlobalCooldown>0?(this.remainingGlobalCooldown-=Laya.timer.delta,this.updateCooldownMask(this.globalCooldownMask,this.remainingGlobalCooldown/this.globalCooldown,"#00000036"),this.globalCooldownMask.visible=!0):this.globalCooldownMask.visible=!1,this.skillIconItem.gray=this.remainingSkillCooldown>0||this.remainingGlobalCooldown>0}updateCooldownMask(e,i,n){let r=this.width/2,o=this.width/2,s=this.height/2;e.graphics.clear(),e.graphics.drawPie(o,s,r,-90+360*(1-i),270,n)}onDisable(){y.intance.off(h.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),y.intance.offAllCaller(this),Laya.timer.clearAll(this)}};Lf=p([jS("x6t-z1VuR52yXWju0qxGBg")],Lf);var _f=class extends Laya.Dialog{};var{regClass:KS}=Laya,xf=class extends _f{constructor(){super();this.canClose=!0}onEnable(){this.btn_refresh.on(Laya.Event.CLICK,this,this.onRefresh),this.alertDesc.on(Laya.Event.LINK,this,this.onLink)}onLink(e){console.log("点击了超链接："+e)}onRefresh(){Se.instance.reload()}setOpenData(e){if(e){var i=e[0];if(e.length>2?(this.alertTitle.text=e[1],this.alertDesc.text=e[2]):this.alertDesc.text=e[1],i==1){this.canClose=!1;var n=this.getChildByName("close");n.visible=!1,this.btn_refresh.visible=!0}else this.btn_refresh.visible=!1}}onDisable(){}close(e){this.canClose&&super.close(e)}};xf=p([KS("xATCTfSDSkaGtuYn669ofQ")],xf);var wf=class extends Laya.Dialog{};var{regClass:WS}=Laya,If=class extends wf{constructor(){super();this.canClose=!0}onEnable(){this.btn_refresh.on(Laya.Event.CLICK,this,this.onRefresh),this.alertDesc.on(Laya.Event.LINK,this,this.onLink),this.btn_left.on(Laya.Event.CLICK,this,this.onChangePage,[!1]),this.btn_right.on(Laya.Event.CLICK,this,this.onChangePage,[!0])}onLink(e){console.log("点击了超链接："+e)}onRefresh(){Se.instance.reload()}setOpenData(e){if(e){var i=e[0],n=e[1];if(this.list=n.list,this.pageNo=1,this.pageTotal=this.list.length,this.pageTotal<2&&(this.box_page.visible=!1),this.updatePageList(),i==1){this.canClose=!1;var r=this.getChildByName("close");r.visible=!1,this.btn_refresh.visible=!0}else this.btn_refresh.visible=!1}}async onChangePage(e){if(e)this.pageNo++;else{if(this.pageNo<=1)return;this.pageNo--}this.updatePageList()}updatePageList(){this.txt_page.text=this.pageNo+"/"+this.pageTotal,this.btn_left.disabled=this.pageNo<=1,this.btn_right.disabled=this.pageNo>=this.pageTotal,this.setNoticeDetail()}setNoticeDetail(){if(this.pageNo){var e=this.list[this.pageNo-1];e&&(this.alertTitle.text=d.instance.getMultiLan(e.title),this.alertDesc.text=d.instance.getMultiLan(e.contents))}}onDisable(){}close(e){this.canClose&&super.close(e)}};If=p([WS("iB7UvqEcQ1GFKaVEIy6Bmw")],If);var Ef=class extends Laya.Box{};var{regClass:qS}=Laya,Tf=class extends Ef{};Tf=p([qS("ON5bkSuKSE2gwPDUnRGmrw")],Tf);var Sf=class extends Laya.Box{};var{regClass:YS}=Laya,Cf=class extends Sf{onEnable(){}notice(t){let e=t;this.label_tf.text=e,this.label_tf.x=68,this.image_bg.width=68*2+this.label_tf.textField.textWidth,e.length/45>1&&(this.image_bg.height=this.label_tf.textField.textHeight+25),this.alpha=1,this.visible=!0}get view(){return this}get width(){return this.image_bg.width}onDisable(){console.log("txtNotice recover"),Laya.Pool.recover("txtNotice",this)}};Cf=p([YS("Nm27xWbYSG6mj-EXqPOZ_A")],Cf);var kf=class extends Laya.Box{};var{regClass:$S}=Laya,Af=class extends kf{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){if(!t)return;super.dataSource=t;let e=t.id===L.instance.playerDto.pid,i=t.rank;if(this.tf_name.text=t.name,this.tf_union.text=d.instance.getMultiLan(t.shortUnionName),this.tf_rank.text=i,this.tf_score.text=t.score,this.playerIcon.headSkin=t.head,this.img_flag.skin=C.instance.getCountryIcon(t.country),t.icon){let n=C.instance.getUnionIcon(t.icon);this.img_lvIcon.skin=n,this.img_lvIcon.visible=!0}else this.img_lvIcon.visible=!1;e?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.bg.skin=i<4?`res/rank/img_guild_${i}di.png`:"res/rank/img_guild_4di.png",i<4?(this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${i}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.img_rankIcon2.skin=e?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1)}};Af=p([$S("-msKQoZIRI6E80e53qttmw")],Af);var Df=class extends Laya.Scene{};var{regClass:XS}=Laya,Mf=class extends Df{constructor(){super(...arguments);this.myIndex=-1;this.myUnionIndex=-1;this.unionRankData=null;this.currTab=0}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP}onOpened(e){this.onClickPlayer()}onEnable(){this.rankLanList.visible=!1,this.myBox.visible=!1,this.myUnionBox.visible=!1,this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_4.on(Laya.Event.CLICK,this,this.onClickTab,[4]),this.btn_5.on(Laya.Event.CLICK,this,this.onClickTab,[5]),this.btn_player.on(Laya.Event.CLICK,this,this.onClickPlayer),this.btn_guild.on(Laya.Event.CLICK,this,this.onClickGuild),this.btn_schol.on(Laya.Event.CLICK,this,this.onClickSchol)}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene),this.btn_1.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_2.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_3.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_4.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_5.off(Laya.Event.CLICK,this,this.onClickTab),this.btn_player.off(Laya.Event.CLICK,this,this.onClickPlayer),this.btn_guild.off(Laya.Event.CLICK,this,this.onClickGuild),this.btn_schol.off(Laya.Event.CLICK,this,this.onClickSchol),this.rankLanList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.unionRankLanList.scrollBar.off(Laya.Event.CHANGE,this,this.onUnionScrollBarChange)}onClickTab(e){if(this.currTab===e)return;let i={1:"combat scenes",2:"KILL COUNT",3:"number of heroes",4:"damage ranking",5:"wealth ranking"};e in i?(this.setTab(e),this.setListData(e),this.rankName.text=i[e]):console.warn(`Tab index ${e} does not have a corresponding name.`)}setTab(e){for(let i=1;i<6;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}async setListData(e){let i=await k.requestPost("wxgame/sys/rank",{type:e});i?(this.updateSelfData(i.self),this.updateRankList(i.rankList)):(console.error("Error fetching data:",i),M.instance.notice(d.instance.getLanguage(135)))}async setGuildListData(){this.unionRankData||(this.unionRankData=await k.requestPost("wxgame/sys/unionRank",{}));let e=[];if(this.unionRankData){let i=this.unionRankData.rankList,n=this.unionRankData.self;if(n&&this.updateSelfUnionData(n),this.unionRankLanList.scrollTo(0),this.unionRankLanList.visible=!0,this.myUnionBox.visible=!0,this.unionRankLanList.selectedIndex=1,this.unionRankLanList.array=i,this.myUnionBox.visible=!!n,n){let r=i.findIndex(o=>o.id===n.id);this.myUnionIndex=r}}else console.error(`Error fetching data: ${this.unionRankData}`),M.instance.notice(d.instance.getLanguage(135))}updateSelfData(e){if(e){if(this.tf_name.text=e.name,this.tf_union.text=d.instance.getMultiLan(e.shortUnionName),this.tf_score.text=`${e.score}`,this.playerIcon.headSkin=e.head,this.img_flag.skin=C.instance.getCountryIcon(e.country),e.unionId){let i=C.instance.getUnionIcon(e.unionId);this.img_lvIcon.skin=i,this.img_lvIcon.visible=!0}else this.img_lvIcon.visible=!1;if(e.rank<0)this.img_rankIcon1.visible=!1,this.tf_rank.text=d.instance.getLanguage(1117),this.img_rankIcon2.visible=!1;else if(e.rank<4)this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${e.rank}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1;else{let i=e.pid===L.instance.playerDto.pid?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png";this.img_rankIcon2.skin=i,this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1,this.tf_rank.text=`${e.rank}`}}}updateSelfUnionData(e){if(e)if(this.union_name.text=d.instance.getMultiLan(e.unionName),this.unionIcon.dataSource=e,this.union_score.text=e.score+"",e.rank<0)this.img_unionIcon1.visible=!1,this.union_rank.text=d.instance.getLanguage(1117),this.img_unionIcon2.visible=!1;else if(e.rank<4)this.img_unionIcon1.skin=`res/matchRank1/img_ranking_${e.rank}.png`,this.img_unionIcon1.visible=!0,this.img_unionIcon2.visible=!1;else{let i="res/matchRank1/img_ranking_ranking_me.png";this.img_unionIcon2.skin=i,this.img_unionIcon2.visible=!0,this.img_unionIcon1.visible=!1,this.union_rank.text=`${e.rank}`}}updateRankList(e){if(e){let i=e.findIndex(n=>n.pid===L.instance.playerDto.pid);this.rankLanList.selectedIndex=1,this.rankLanList.array=e,this.myIndex=i,this.rankLanList.scrollTo(0),this.rankLanList.visible=!0,this.myBox.visible=!0}}onScrollBarChange(){if(!this.rankLanList.array||!this.myIndex&&this.myIndex!==0)return;let e=this.rankLanList.startIndex,i=e+this.rankLanList.repeatX*this.rankLanList.repeatY-1,n=this.rankLanList.getCell(this.myIndex);if(n)if(this.myIndex>=e&&this.myIndex<=i){let s=n.localToGlobal(new Laya.Point(0,0)).y-this.myBox.height-57;s=Math.max(57,Math.min(493,s)),this.myBox.y=s}else this.myBox.y=this.myIndex>i?493:57}onUnionScrollBarChange(){if(!this.unionRankLanList.array||!this.myUnionIndex&&this.myUnionIndex!==0)return;let e=this.unionRankLanList.startIndex,i=e+this.unionRankLanList.repeatX*this.unionRankLanList.repeatY-1,n=this.unionRankLanList.getCell(this.myUnionIndex);if(n)if(this.myUnionIndex>=e&&this.myUnionIndex<=i){let s=n.localToGlobal(new Laya.Point(0,0)).y-this.myUnionBox.height-57;s=Math.max(57,Math.min(499,s)),this.myUnionBox.y=s}else this.myUnionBox.y=this.myUnionIndex>i?499:57}setTabState(e,i,n,r){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?n:r}onClickPlayer(){this.onClickTab(1),this.playerRankBox.visible=!0,this.unionBox.visible=!1,this.setTabState(this.btn_player,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!1,"#143f6b","#7ff1fe")}onClickGuild(){this.playerRankBox.visible=!1,this.unionBox.visible=!0,this.setTabState(this.btn_player,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!1,"#143f6b","#7ff1fe"),this.setGuildListData()}onClickSchol(){this.playerRankBox.visible=!1,this.unionBox.visible=!1,this.setTabState(this.btn_player,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_guild,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_schol,!0,"#143f6b","#7ff1fe")}};Mf=p([XS("5_oIkEKDQUyqTP8xY9zMUw")],Mf);var Bf=class extends Laya.Box{};var{regClass:QS}=Laya,Pf=class extends Bf{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){if(!t)return;let e=t.id===L.instance.playerDto.pid,i=t.rank;this.unionIcon.dataSource=t,this.tf_union.text=d.instance.getMultiLan(t.shortUnionName),this.tf_rank.text=i+"",this.tf_score.text=t.score+"",e?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.bg.skin=i<4?`res/rank/img_guild_${i}di.png`:"res/rank/img_guild_4di.png",i<4?(this.img_rankIcon1.skin=`res/matchRank1/img_ranking_${i}.png`,this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.img_rankIcon2.skin=e?"res/matchRank1/img_ranking_ranking_me.png":"res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1)}};Pf=p([QS("O6o6TJNORIGW9WXbhJf91w")],Pf);var Rf=class extends Laya.Box{};var{regClass:ZS,property:eye}=Laya,Nf=class extends Rf{constructor(){super();this.isAddEvent=!1}set dataSource(e){if(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=C.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}}async setCurrentOutPut(){this.img_back.skin=C.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ae.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";at.instance.setStar(this,e),this.box_show.visible=!0,this.destroyed}onChange(e){e?this.selectBox.visible=!0:this.selectBox.visible=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}toDetail(){this.heroVo.id&&H.intance.openModule(f.HeroDetailDialog,this.heroVo)}};Nf=p([ZS("DixYspEIQnqQazhlHuxLDw")],Nf);var Of=class extends Laya.Dialog{};var{regClass:JS}=Laya,Hf=class extends Of{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER;this.beforeYearIndex=null;this.beforeMonthIndex=null;this.beforeDayIndex=null;this.beforeHourIndex=null;this.dateOpenState=0;this.dateOpenStateAir=0;this.itemVo=null;this.walletType=0;this.heroPkList=[];this.airWalletDataArray=[];this.currentDate=new Date;this.startDate={year:0,month:0,day:0,hour:0};this.endDate={year:0,month:0,day:0,hour:0};this.heroVo=null}onEnable(){this.box_date.on(Laya.Event.CLICK,this,this.onOpenDate,[this.img_date_pad,this.box_date]),this.box_date2.on(Laya.Event.CLICK,this,this.onOpenDate,[this.img_date_pad,this.box_date2]),this.box_date3.on(Laya.Event.CLICK,this,this.onOpenDateAir,[this.img_date_pad2,this.box_date3]),this.box_date4.on(Laya.Event.CLICK,this,this.onOpenDateAir,[this.img_date_pad2,this.box_date4]),this.yearList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.yearList,"year"]),this.monthList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.monthList,"month"]),this.dayList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.dayList,"day"]),this.hourList.on(Laya.Event.MOUSE_UP,this,this.onListStop,[this.hourList,"hour"]),this.yearList2.on(Laya.Event.MOUSE_UP,this,this.onListStopAir,[this.yearList2,"year"]),this.monthList2.on(Laya.Event.MOUSE_UP,this,this.onListStopAir,[this.monthList2,"month"]),this.dayList2.on(Laya.Event.MOUSE_UP,this,this.onListStopAir,[this.dayList2,"day"]),this.hourList2.on(Laya.Event.MOUSE_UP,this,this.onListStopAir,[this.hourList2,"hour"]),this.yearList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.yearList,"year",this.img_date_pad]),this.monthList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.monthList,"month",this.img_date_pad]),this.dayList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.dayList,"day",this.img_date_pad]),this.hourList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.hourList,"hour",this.img_date_pad]),this.yearList2.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.yearList2,"year",this.img_date_pad2]),this.monthList2.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.monthList2,"month",this.img_date_pad2]),this.dayList2.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.dayList2,"day",this.img_date_pad2]),this.hourList2.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange,[this.hourList2,"hour",this.img_date_pad2]),this.tf_uid.on(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),y.intance.on(h.CHANGE_WALLET_HERO,this,this.onHeroChange),y.intance.on(h.CHANGE_WALLET_HERO_AIR,this,this.onAirHeroChange),y.intance.on(h.CHANGE_WALLET_PROP,this,this.onPropChange),y.intance.on(h.ADD_AIR_WALLET_ITEM,this,this.addAirWalletItem),y.intance.on(h.ADD_AIR_SUB_WALLET_NAME,this,this.addAirWalletNameItem),y.intance.on(h.AIR_SUB_WALLET_OPENHERO,this,this.airdropOpenHeroView),this.hero_box.on(Laya.Event.CLICK,this,this.onHeroBoxClick),this.Img_prop.on(Laya.Event.CLICK,this,this.onPropClick),this.btn_createSubWallet.on(Laya.Event.CLICK,this,this.onCreateSubWallet),this.btn_createSubWalletAir.on(Laya.Event.CLICK,this,this.onCreateSubWalletAir),this.box_Arean.on(Laya.Event.CLICK,this,this.onOpenType),this.tab1.on(Laya.Event.CLICK,this,this.onTabClick,[1]),this.tab2.on(Laya.Event.CLICK,this,this.onTabClick,[2]),this.yearList.scrollBar.rollRatio=0,this.monthList.scrollBar.rollRatio=0,this.dayList.scrollBar.rollRatio=0,this.hourList.scrollBar.rollRatio=0,this.yearList2.scrollBar.rollRatio=0,this.monthList2.scrollBar.rollRatio=0,this.dayList2.scrollBar.rollRatio=0,this.hourList2.scrollBar.rollRatio=0,this.initTime(),this.showHeroData(),this.initDiciList(),this.initTypeList(),this.box_dividends.on(Laya.Event.CLICK,this,this.onOpeDividends),this.tab1.getChildByName("tf_tit").text=`${d.instance.getLanguage(1261)}`,this.tab2.getChildByName("tf_tit").text=`${d.instance.getLanguage(1260)}`}onDisable(){this.removeEvent()}removeEvent(){this.box_date.off(Laya.Event.CLICK,this,this.onOpenDate),this.box_date2.off(Laya.Event.CLICK,this,this.onOpenDate),this.box_date3.off(Laya.Event.CLICK,this,this.onOpenDateAir),this.box_date4.off(Laya.Event.CLICK,this,this.onOpenDateAir),this.yearList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.monthList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.dayList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.hourList.off(Laya.Event.MOUSE_UP,this,this.onListStop),this.yearList2.off(Laya.Event.MOUSE_UP,this,this.onListStopAir),this.monthList2.off(Laya.Event.MOUSE_UP,this,this.onListStopAir),this.dayList2.off(Laya.Event.MOUSE_UP,this,this.onListStopAir),this.hourList2.off(Laya.Event.MOUSE_UP,this,this.onListStopAir),this.yearList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.monthList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.dayList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.hourList.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.yearList2.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.monthList2.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.dayList2.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.hourList2.scrollBar.off(Laya.Event.CHANGE,this,this.onScrollBarChange),this.tf_uid.off(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.off(Laya.Event.FOCUS,this,this.uidFocus),this.hero_box.off(Laya.Event.CLICK,this,this.onHeroBoxClick),this.Img_prop.off(Laya.Event.CLICK,this,this.onPropClick),this.btn_createSubWallet.off(Laya.Event.CLICK,this,this.onCreateSubWallet),this.box_dividends.off(Laya.Event.CLICK,this,this.onOpeDividends),y.intance.off(h.CHANGE_WALLET_HERO,this,this.onHeroChange),y.intance.off(h.CHANGE_WALLET_HERO_AIR,this,this.onAirHeroChange),y.intance.off(h.CHANGE_WALLET_PROP,this,this.onPropChange),y.intance.off(h.ADD_AIR_WALLET_ITEM,this,this.addAirWalletItem),y.intance.off(h.ADD_AIR_SUB_WALLET_NAME,this,this.addAirWalletNameItem),y.intance.off(h.AIR_SUB_WALLET_OPENHERO,this,this.airdropOpenHeroView),this.btn_createSubWalletAir.off(Laya.Event.CLICK,this,this.onCreateSubWalletAir),this.box_Arean.off(Laya.Event.CLICK,this,this.onOpenType),this.tab1.off(Laya.Event.CLICK,this,this.onTabClick),this.tab2.off(Laya.Event.CLICK,this,this.onTabClick)}resetColors(e,i,n){let r=[e,i,n];for(let l of r)for(var o=0;o<l.cells.length;o++){var s=l.cells[o];s.tf_date.color="#357cc0"}}onOpenDate(e,i){this.resetColors(this.yearList,this.monthList,this.dayList),this.onHideDivi(),e.visible==!1?(i==this.box_date?(e.y=306,this.dateOpenState=1):(e.y=20,this.dateOpenState=2),this.getDateInfo(),e.visible=!0,this.img_bg.on(Laya.Event.CLICK,this,this.hideAllPad)):(e.visible=!1,this.dateOpenState=0)}onOpenDateAir(e,i){this.resetColors(this.yearList2,this.monthList2,this.dayList2),this.onHideDivi(),e.visible==!1?(i==this.box_date3?(e.x=125,this.dateOpenState=1):(e.x=664,this.dateOpenState=2),this.getDateInfoAir(),e.visible=!0,this.img_bg.on(Laya.Event.CLICK,this,this.hideAllPad)):(e.visible=!1,this.dateOpenStateAir=0)}hideAllPad(){this.img_date_pad.visible=!1,this.img_date_pad2.visible=!1,this.img_bg.off(Laya.Event.CLICK,this,this.hideAllPad)}initTypeList(){let e=R.intance.getArenaTypesInSub(),i={name:"Professional & Airdrop"};e.push(i),this.list_type.array=e,this.list_type.selectHandler=new Laya.Handler(this,this.handleSelectType),this.list_type.mouseHandler=Laya.Handler.create(this,this.onTypeItemMouse,null,!1),this.list_type.renderHandler=Laya.Handler.create(this,this.onTypeItemRender,null,!1),this.list_type.selectedIndex=0}getDateInfo(){this.renderDateInfo(this.dateOpenState,this.startDate,this.endDate,this.yearList,this.monthList,this.dayList,this.hourList)}getDateInfoAir(){this.renderDateInfo(this.dateOpenState,this.startDate,this.endDate,this.yearList2,this.monthList2,this.dayList2,this.hourList2)}renderDateInfo(e,i,n,r,o,s,l){let c=e==1?i:n;this.fillList(r,c.year,2e3,2050),this.fillList(o,c.month,1,12);let u=new Date().getFullYear(),m=new Date().getMonth()+1,b=me.getDaysInMonth(u,m);this.fillList(s,c.day,1,b),this.fillList(l,c.hour,0,23)}fillList(e,i,n,r){let o=[],s=this.walletType?this.yearList2:this.yearList,l=this.walletType?this.monthList2:this.monthList,c=this.walletType?this.dayList2:this.dayList,u=this.walletType?this.hourList2:this.hourList;for(let b=n;b<=r;b++)o.push(b.toString());for(let b=1;b<=3;b++)o.push("");o=["",...o],e.array=o;let m=o.indexOf(`${i}`);if(m>-1){e.scrollTo(m-1),e.selectedIndex=m-1;let b=e.getCell(m);b.tf_date.color="#ffffff",e==s?this.beforeYearIndex=m:e==l?this.beforeMonthIndex=m:e==c?this.beforeDayIndex=m:e==u&&(this.beforeHourIndex=m)}}onYearChange(e){!this.yearList.array||this.monthList.selectedIndex<0||this.updateDayList(parseInt(this.yearList.array[e]),parseInt(this.monthList.array[this.monthList.selectedIndex]))}onMonthChange(e){!this.yearList.array||this.monthList.selectedIndex<0||this.updateDayList(parseInt(this.yearList.array[this.yearList.selectedIndex]),parseInt(this.monthList.array[e]))}onYearChangeAir(e){!this.yearList2.array||this.monthList2.selectedIndex<0||this.updateDayListAir(parseInt(this.yearList2.array[e]),parseInt(this.monthList2.array[this.monthList.selectedIndex]))}onMonthChangeAir(e){!this.yearList2.array||this.monthList2.selectedIndex<0||this.updateDayListAir(parseInt(this.yearList2.array[this.yearList2.selectedIndex]),parseInt(this.monthList2.array[e]))}updateDayList(e,i){let n=[];for(let r=1;r<=me.getDaysInMonth(e,i);r++)n.push(r.toString());for(let r=1;r<=3;r++)n.push("");n=["",...n],this.dayList.array=n}updateDayListAir(e,i){let n=[];for(let r=1;r<=me.getDaysInMonth(e,i);r++)n.push(r.toString());for(let r=1;r<=3;r++)n.push("");n=["",...n],this.dayList2.array=n}calculateVisibleHeight(e,i){let n=e.getCell(i);return Math.min(n.y+n.height,e.scrollBar.value+e.height)-Math.max(n.y,e.scrollBar.value)}onListStop(e,i){let n=this.dateOpenState==1?this.startDate:this.endDate,r=Math.floor(e.startIndex),o=r+1,s=this.calculateVisibleHeight(e,r),l=this.calculateVisibleHeight(e,o),c=s+14>=l?r:o;(i==="month"||i==="day"||i==="hour")&&(c=Math.min(c,e.array.length-5)),e.scrollTo(c),e.selectedIndex=c;let u=e.getCell(c+1);u.tf_date.color="#ffffff";let m=u.tf_date.text;if(m&&u){switch(i){case"year":this.onYearChange(c+1),n.year=Number(m);break;case"month":this.onMonthChange(c+1),n.month=Number(m);break;case"day":n.day=Number(m);break;default:n.hour=Number(m);break}this.refreshStartTime(this.dateOpenState)}}onListStopAir(e,i){let n=this.dateOpenState==1?this.startDate:this.endDate,r=Math.floor(e.startIndex),o=r+1,s=this.calculateVisibleHeight(e,r),l=this.calculateVisibleHeight(e,o),c=s+14>=l?r:o;(i==="month"||i==="day"||i==="hour")&&(c=Math.min(c,e.array.length-5)),e.scrollTo(c),e.selectedIndex=c;let u=e.getCell(c+1);u.tf_date.color="#ffffff";let m=u.tf_date.text;if(m&&u){switch(i){case"year":this.onYearChangeAir(c+1),n.year=Number(m);break;case"month":this.onMonthChangeAir(c+1),n.month=Number(m);break;case"day":n.day=Number(m);break;default:n.hour=Number(m);break}this.refreshStartTime(this.dateOpenState)}}onScrollBarChange(e,i,n){if(!n.visible)return;let r=this.dateOpenState==1?this.startDate:this.endDate;console.log("startDate",this.startDate);let o=Math.floor(e.startIndex),s=o+1,l=this.calculateVisibleHeight(e,o),c=this.calculateVisibleHeight(e,s),u=l+14>=c?o:s,m=e.getCell(u+1);m.tf_date.color="#ffffff";let b,_;switch(i){case"year":_=this.beforeYearIndex,this.beforeYearIndex=u+1;break;case"month":_=this.beforeMonthIndex,this.beforeMonthIndex=u+1;break;case"day":_=this.beforeDayIndex,this.beforeDayIndex=u+1;break;case"hour":_=this.beforeHourIndex,this.beforeHourIndex=u+1;break}_!==u+1&&(b=e.getCell(_),this.resetListStyle(b));let w=m.tf_date.text;if(m.tf_date.color="#ffffff",w&&m){switch(i){case"year":this.onYearChange(u+1),r.year=Number(w);break;case"month":this.onMonthChange(u+1),r.month=Number(w);break;case"day":r.day=Number(w);break;default:r.hour=Number(w);break}this.refreshStartTime(this.dateOpenState)}}async setPlayerName(){try{if(this.tf_uid.text=="")return;var e=await k.requestPost("wxgame/sys/queryName",{openid:this.tf_uid.text.toLowerCase()});e&&(this.tf_player_name.text=e.name)}catch{}}uidFocus(){this.tf_uid.text="",this.tf_player_name.text=""}resetListStyle(e){e&&(e.tf_date.color="#357cc0")}refreshStartTime(e){let i,n,r;this.walletType==1?(i=e==1?this.startDate:this.endDate,n=e==1?this.tf_startAir:this.tf_startAir2,r=e==1?this.tf_hourAir:this.tf_hourAir2):(i=e==1?this.startDate:this.endDate,n=e==1?this.tf_start:this.tf_start2,r=e==1?this.tf_hour:this.tf_hour2);let o=i.month>=10?i.month:`0${i.month}`,s=i.day>=10?i.day:`0${i.day}`;n.text=`${i.year}-${o}-${s}`,r.text=`${i.hour}:00`}onHeroBoxClick(){H.intance.openModule(f.WalletChooseHeroDialog,[-1])}onPropClick(){this.list_type.selectedIndex!=1&&H.intance.openModule(f.WalletChoosePropsDialog)}async onCreateSubWallet(){if(console.log("this.proCheckBox.selected",this.proCheckBox.selected),console.log("this.airCheckBox.selected",this.airCheckBox.selected),Je.instance.inMinWaiting){M.instance.notice(d.instance.getLanguage(1187));return}if(this.tf_uid.text==K.instance.walletAddress){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1162),N.YES),this.tf_uid.text="",this.tf_player_name.text="";return}let e=this.tf_uid.text;if(e.length<=0||this.tf_player_name.text==""){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1161),N.YES);return}if(!this.heroVo){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1167),N.YES);return}let i,n=Number(this.tf_have.text);if(this.list_type.selectedIndex!==1){if(i=this.itemVo&&this.itemVo.m_iId,i==1001&&this.heroVo.heroItem.level!==3){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1163),N.YES);return}if((n<1||!this.itemVo)&&this.list_type.selectedIndex==0){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1166),N.YES);return}}else n=0,i=0;let r=Ie.dateStringToTimestamp(this.tf_start.text,`${this.startDate.hour}`),o=Ie.dateStringToTimestamp(this.tf_start2.text,`${this.endDate.hour}`),s=Ie.getCurrentDayTimestamp();if(r<s){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1164),N.YES);return}if(o<=r){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1165),N.YES);return}let l=this.list_type.selectedIndex+1,c=Number(this.tf_div.text.replace("%","")),u=this.heroVo.pk;var m={startTime:r,endTime:o,ticketId:i,ticketCount:n,ratio:c,heroPk:u,openid:e.toLowerCase(),type:l};try{var b=await k.requestPost("wxgame/lease/create",m);b&&(M.instance.notice(d.instance.getLanguage(1168)),this.heroVo.pk==L.instance.playerDto.fightHeroPk&&(L.instance.playerDto.fightHeroPk=""),Laya.timer.once(200,this,()=>{y.intance.event(h.CREATE_SUB_WALLET_SUCCESS)}),this.close())}catch{}}async onCreateSubWalletAir(){let e=Ie.dateStringToTimestamp(this.tf_startAir.text,`${this.startDate.hour}`),i=Ie.dateStringToTimestamp(this.tf_startAir2.text,`${this.endDate.hour}`),n=Ie.getCurrentDayTimestamp(),r=this.getEfficientList(this.airWalletDataArray);if(r.length<=0){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1352),N.YES);return}if(e<n){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1164),N.YES);return}if(i<=e){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1165),N.YES);return}console.log(e,i,n);var o=await k.requestPost("wxgame/lease/mutiCreate",{startTime:e,endTime:i,ratio:0,type:2,data:r});o&&(M.instance.notice(d.instance.getLanguage(1168)),this.close(),Laya.timer.once(200,this,()=>{y.intance.event(h.CREATE_SUB_WALLET_SUCCESS)}))}getEfficientList(e){let i=[];for(let n=0;n<e.length;n++){let r=e[n];r.name.length>0&&r.hero&&i.push({address:r.walletAddress,heroPk:r.hero.pk.toLowerCase()})}return i}showHeroData(){if(this.heroVo){this.img_back.skin=C.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ae.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";at.instance.setStar(this,e),this.box_show.visible=!0,this.img_back.visible=!0,this.img_noHero.visible=!1}else this.box_show.visible=!1,this.img_back.visible=!1,this.img_noHero.visible=!0}initDiciList(){var e=R.intance.getGeneralValueById(9);this.list_divi.array=e,this.list_divi.selectHandler=new Laya.Handler(this,this.handleSelectDiv),this.list_divi.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_divi.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_divi.scrollBar&&this.list_divi.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown),this.list_divi.selectedIndex=0}initDiciList2(e){if(e==1){var i=R.intance.getGeneralValueById(9);this.list_divi.array=i,this.list_divi.selectedIndex=0}else{var i=R.intance.getGeneralValueById(18);this.list_divi.array=i,this.list_divi.selectedIndex=0}this.handleSelectDiv(0)}handleSelectDiv(e){if(e!=-1){let i=this.list_divi.selectedItem;this.tf_div.text=`${i}%`}}handleSelectType(e){if(this.itemVo=null,e!=-1){let i=this.list_type.selectedItem;this.tf_type.text=`${d.instance.getLanguage(i.name)}`,e==0?(this.clearProp(),this.initDiciList2(1),this.img_lock.visible=!1,this.img_jia.visible=!0):e==2?(this.initDiciList2(2),this.clearProp()):(this.initDiciList2(1),this.img_lock.visible=!0,this.tf_div.text="0%",this.img_jia.visible=!1,this.PropBox.visible=!1)}}onCountryItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_divi.selectedIndex=i,this.onHideDivi())}onTypeItemMouse(e,i){e.type===Laya.Event.CLICK&&(this.list_type.selectedIndex=i,this.onHideDivi())}onCountryItemRender(e,i){e.onChange(this.list_divi.selectedIndex==i)}onTypeItemRender(e,i){e.onChange(this.list_type.selectedIndex==i)}onOpeDividends(){this.list_type.selectedIndex!=1&&(this.img_divi_pad.visible=!0,this.img_bg.once(Laya.Event.MOUSE_DOWN,this,this.onHideDivi))}onHideDivi(){this.img_divi_pad.visible=!1,this.img_type_pad.visible=!1,this.img_bg.off(Laya.Event.MOUSE_DOWN,this,this.onHideDivi)}onScrollBarDown(e){e.stopPropagation()}onHeroChange(e){this.heroVo=e,this.showHeroData()}onOpenType(){this.img_type_pad.visible=!0,this.img_bg.once(Laya.Event.MOUSE_DOWN,this,this.onHideDivi)}onPropChange(e,i){this.itemVo||this.initDiciList2(1),this.itemVo=e;let n=R.intance.m_dicItems.get(e.itemItem.id.toString());this.PropBox.visible=!0,this.img_jia.visible=!1,n&&(this.img_prop_icon.skin=C.instance.getItemIcon(n.icon),this.img_prop_box.skin="gameIcon/items/itemBg/img_"+n.quality+".png",this.tf_all.text=""+Te.formatNumber(e._m_iNum,2),this.tf_have.text=""+Te.formatNumber(i,2))}clearProp(){this.PropBox.visible=!1,this.img_jia.visible=!0}onTabClick(e){e==1?(this.tab1.getChildByName("tf_tit").color="#143268",this.tab1.skin="res/scholarship/img_transfer_tab2.png",this.tab2.getChildByName("tf_tit").color="#429fdf",this.tab2.skin="res/scholarship/img_transfer_tab1.png",this.airBox.visible=!1,this.proBox.visible=!0,this.walletType=0,this.heroVo=null,this.heroPkList=[],this.showHeroData(),this.initTime()):(this.tab1.getChildByName("tf_tit").color="#429fdf",this.tab1.skin="res/scholarship/img_transfer_tab1.png",this.tab2.getChildByName("tf_tit").color="#143268",this.tab2.skin="res/scholarship/img_transfer_tab2.png",this.proBox.visible=!1,this.airBox.visible=!0,this.walletType=1,this.airWalletDataArray=[],this.initAirSubWallet(),this.initTime())}initTime(){let e=new Date;this.startDate={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours()},this.endDate={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours()},this.refreshStartTime(1),this.refreshStartTime(2)}initAirSubWallet(){this.airWalletDataArray=[],this.airWalletDataArray.push({hero:0,walletAddress:"",name:"",establish:!0,index:0}),this.airWalletDataArray.push({hero:0,walletAddress:"",name:"",establish:!1,index:1}),this.subAirdropWalletList.array=this.airWalletDataArray}addAirWalletItem(){let e={hero:0,walletAddress:"",name:"",establish:!1,index:this.airWalletDataArray.length};this.subAirdropWalletList.visible=!1,this.airWalletDataArray[this.airWalletDataArray.length-1].establish=!0,this.airWalletDataArray.push(e),this.subAirdropWalletList.array=[],this.subAirdropWalletList.array=this.airWalletDataArray,this.subAirdropWalletList.repeatY=this.airWalletDataArray.length-10,this.subAirdropWalletList.scrollTo(this.airWalletDataArray.length-1),this.subAirdropWalletList.visible=!0}addAirWalletNameItem(e){if(e){let i=e.index;this.airWalletDataArray[i].name=e.name,this.airWalletDataArray[i].walletAddress=e.walletAddress}}airdropOpenHeroView(e){H.intance.openModule(f.WalletChooseHeroDialog,[e,this.heroPkList])}onAirHeroChange(e,i){this.airWalletDataArray[i].hero=e,this.heroPkList.push(e.pk)}};Hf=p([JS("_bHe6-EiQc-KiQ-mElnEIQ")],Hf);var Uf=class extends Laya.ComboBox{};var{regClass:eC}=Laya,Vf=class extends Uf{set defaultLabel(t){}onEnable(){this.getDateInfo()}set dataSource(t){super.dataSource=t;var e=t}set isOpen(t){console.log("isOpen: "+t),this._isOpen!=t&&(this._isOpen=t,this._isOpen?this.img_pad.visible=!0:this.img_pad.visible=!1)}};Vf=p([eC("A2yeugt8S3Ot7ec482gdhQ")],Vf);var Ff=class extends Laya.Box{};var{regClass:tC}=Laya,zf=class extends Ff{set dataSource(e){super.dataSource=e,this.tf_date.text=e}onDisable(){}};zf=p([tC("fCHaQKFSQ-ew26uygUCKnQ")],zf);var Gf=class extends Laya.Box{};var{regClass:iC}=Laya,jf=class extends Gf{set dataSource(e){super.dataSource=e,this.tf_rate.text=`${e}%`}onChange(e){e?(this.selectImg.visible=!0,this.tf_rate.color="#ffffff"):(this.tf_rate.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};jf=p([iC("TToplFpGQGmUqT5SfNnVIg")],jf);var Kf=class extends Laya.Dialog{};var{regClass:aC}=Laya,Wf=class extends Kf{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}onEnable(){this.employList.visible=!1,this.btn_back.on(Laya.Event.CLICK,this,this.closeEmployView)}async setOpenData(e){this.employList.vScrollBarSkin="";let i=e.heroData,n="";if(i){let r=Ie.formatTimeStamp(Number(i.startTime),"YY-MT-DD HH:MM:SS"),o=Ie.formatTimeStamp(Number(i.endTime),"YY-MT-DD HH:MM:SS");var e=await k.requestPost("wxgame/lease/heroInfo",{heroPk:i.heroPk});if(e&&e.info){let l=R.intance.m_dicShops.values,c=i.leaseType;if(c==0){let Z=me.getTitleByGoodsId(l,e.info.ticketId);Z&&(n=d.instance.getLanguage(Z)),e.info.ticketId==0&&(n=d.instance.getLanguage(1260))}else switch(c){case 1:n=d.instance.getLanguage(1261);break;case 2:n=d.instance.getLanguage(1260);break;case 3:n=`${d.instance.getLanguage(1260)}+${d.instance.getLanguage(1261)}`;break}let u="",m=e.info.allTicketCount,b=e.info.remainTicketCount,_=m-b;_<=0?u="0%":u=`${Math.round(e.info.winTimes/_*100)}%`;let w={"Proxy player":i.playerName,Arena:n,"Remaining ticket":[i.remainCount,e.info.ticketId],"Combat scene":`${_}`,"Winner probability":`${u}`,Deserter:`${e.info.taopao}`,"Start date":r,"End date":o},E=Object.getOwnPropertyNames(w).map(Z=>[Z,w[Z]]);this.employList.array=E;let B=-1;this.employList.selectedIndex=B,this.employList.visible=!0;let G=L.instance.m_heroData.heroVoDic.get(i.heroPk);if(this.img_back.skin=C.instance.getHeroBackIcon(G.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(G.heroItem.quality),this.img_hero.skin=G.simgurl,this.tf_name.text=Ae.shortHeroStr(G.name),i.reward&&i.reward.length>0){let Z=me.findFirstTypeAndNotGold(i.reward);Z?(this.tf_score.text=Z.count,this.img_money.skin=C.instance.getMoneyIcon(Z.id),this.img_money.visible=!0):(this.tf_score.text="0",this.img_money.visible=!1)}else this.tf_score.text="0",this.img_money.visible=!1;let j=G.heroItem.level+"";at.instance.setStar(this,j)}}}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.closeEmployView)}closeEmployView(){this.close()}};Wf=p([aC("4pjAWg8HScmRe8ukNRQsGg")],Wf);var qf=class extends Laya.Box{};var{regClass:nC}=Laya,Yf=class extends qf{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){super.dataSource=t,this.setEmploy(t)}setEmploy(t){if(!t)return;let e=t[0],i=t[1];this.item_name.text=e,e!=="Remaining ticket"&&e!=="Received"&&e!=="Bonus"&&(this.moneyImg.visible=!1),e==="Agent Date"||e==="End Date"?this.item_value.text=Ie.formatTimeStamp(Number(i),"YY-MT-DD HH:MM:SS"):e=="Remaining ticket"?(this.item_value.text=i[0],this.moneyImg.skin=`gameIcon/items/item/img_${i[1]}.png`):this.item_value.text=i}};Yf=p([nC("TAG-i7slRsKkXRu8SsaWHg")],Yf);var $f=class extends Laya.Dialog{};var{regClass:rC}=Laya,Xf=class extends $f{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}onEnable(){this.list_rental.visible=!1,this.showRentalData(),this.tf_rentedEarned.text=d.instance.getUILang("Rented-earned"),this.tf_proxyEarned.text=d.instance.getUILang("Proxy-earned"),this.tf_winRate.text=d.instance.getUILang("victory")}async showRentalData(){var e=await k.requestPost("wxgame/lease/listAll",{});this.list_rental.array=e.list,this.list_rental.visible=!0,!e.list||e.list.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1,console.log(e)}onDisable(){this.removeEvent()}removeEvent(){}};Xf=p([rC("peF5WS5zQgGqZq82ro5IyQ")],Xf);var Qf=class extends Laya.Box{};var{regClass:oC}=Laya,Zf=class extends Qf{constructor(){super()}createChildren(){super.createChildren()}set dataSource(t){super.dataSource=t,this.setEmploy(t)}setEmploy(t){if(!t)return;let e=Ie.formatDayAndTime(t.startTime),i=Ie.formatDayAndTime(t.endTime);this.tf_createDate.text=e.date,this.tf_endDate.text=i.date,this.tf_player.text=t.playerName;let n=R.intance.m_dicShops.values,r=t.leaseType;if(r==0){let l=me.getTitleByGoodsId(n,t.ticketId);l&&(this.tf_arena.text=d.instance.getLanguage(l)),t.ticketId==0&&(this.tf_arena.text=d.instance.getLanguage(1260))}else switch(r){case 1:this.tf_arena.text=d.instance.getLanguage(1261);break;case 2:this.tf_arena.text=d.instance.getLanguage(1260);break;case 3:this.tf_arena.text=`${d.instance.getLanguage(1260)}+${d.instance.getLanguage(1261)}`;break}this.tf_dividends.text=`${t.leaseRatio}%`,this.tf_fight.text=`${t.fightTimes}`,this.tf_vic.text=`${t.winRate}%`;let o=t.leaseReward,s=t.proxyReward;if(o&&o.length>0){let l=me.findFirstTypeAndNotGold(o);l&&(this.tf_earned.text=Te.filterNumFormat(l.count,2),this.img_coinType.skin=C.instance.getMoneyIcon(l.id),this.img_coinType.visible=!0)}else this.tf_earned.text="0",this.img_coinType.visible=!1;if(s&&s.length>0){let l=me.findFirstTypeAndNotGold(s);l&&(this.tf_proxy.text=Te.filterNumFormat(l.count,2),this.img_coinType2.skin=C.instance.getMoneyIcon(l.id),this.img_coinType2.visible=!0)}else this.tf_proxy.text="0",this.img_coinType2.visible=!1}};Zf=p([oC("bVHWCHZxQDSIcXWzNcq-MA")],Zf);var Jf=class extends Laya.Box{};var{regClass:sC,property:Cbe}=Laya,ey=class extends Jf{constructor(){super();this.isAddEvent=!1}set dataSource(e){if(e){if(super.dataSource=e,this.heroVo=e,!this.heroVo){this.img_back.skin=C.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}}async setCurrentOutPut(){this.img_back.skin=C.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Ae.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";at.instance.setStar(this,e),this.box_show.visible=!0,this.heroVo.state==1?(this.img_state.skin="gameIcon/hero/heroDetail/img_hero_state_2.png",this.img_state.visible=!0):this.heroVo.state==2?(this.img_state.skin="gameIcon/hero/heroDetail/img_hero_state_3.png",this.img_state.visible=!0):this.img_state.visible=!1}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}onDisable(){this.off(Laya.Event.CLICK,this,this.toDetail)}toDetail(){this.heroVo.id&&H.intance.openModule(f.HeroDetailDialog,this.heroVo)}};ey=p([sC("vJhsY0hvQjyUXjU0-8xV7g")],ey);var ty=class extends Laya.Box{};var{regClass:lC}=Laya,iy=class extends ty{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,e&&(this.img_coin.skin=C.instance.getMoneyIcon(e.id),this.money_value.text=e.count,this.addEvent())}};iy=p([lC("TjAZ1yG-QkG5fetB03VUuA")],iy);var ay=class extends Laya.Scene{};var{regClass:cC,property:$be}=Laya,ny=class extends ay{constructor(){super(...arguments);this.text=""}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP}onEnable(){this.list_hero.vScrollBarSkin="",this.RentalList.visible=!1,this.RevenueList.visible=!1,this.subWalletList.visible=!1,this.btn_sch.on(Laya.Event.CLICK,this,this.onClickSch),this.btn_jia.on(Laya.Event.CLICK,this,this.onClickJia),this.btn_yi.on(Laya.Event.CLICK,this,this.onClickYi),y.intance.on(h.CREATE_SUB_WALLET_SUCCESS,this,this.createSubWalletSuccess),this.btn_subwallet.on(Laya.Event.CLICK,this,this.onClickSubwallet),this.btn_createSubWallet.on(Laya.Event.CLICK,this,this.onClickCreateSubwallet),this.btn_rental.on(Laya.Event.CLICK,this,this.onClickRentalRecord),this.close&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.onClickSch(),this.initHeroData()}async setMoneyData(){let e=await k.requestPost("wxgame/lease/outline",{});if(e&&e.reward){let i=me.processItemsArray(e.reward)[0];this.RentalList.array=i,this.RentalList.visible=!0}if(e&&e.childReward){let i=me.processItemsArray(e.childReward)[0];this.RevenueList.array=i,this.RevenueList.visible=!0}}initContainer(e){this.list_hero.visible=!1,this.list_hero.vScrollBarSkin="",this.createHeadList(e)}async createHeadList(e){if(!this)return;let i=e;if(i){this.list_hero.selectedIndex=1,this.list_hero.array=i,this.list_hero.visible=!0,this.tf_heroTotal.text=`${this.list_hero.array.length}`;let n=-1;this.list_hero.selectedIndex=n}(!i||i.length<=0)&&(this.noDataBox.visible=!0)}async initHeroData(){await xt.instance.ownerHero(!0)}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}setTabState(e,i,n,r){e.getChildByName("selectBox").visible=i,e.getChildByName("tf_txt").color=i?n:r}onClickSch(){this.box_1.visible=!0,this.list_hero.visible=!1,this.subWalletBox.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_sch,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe"),this.setMoneyData()}async onClickJia(){await xt.instance.ownerHero(),this.box_1.visible=!1,this.list_hero.visible=!0,this.subWalletBox.visible=!1,this.noDataBox.visible=!1,this.setTabState(this.btn_jia,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe");let e=L.instance.m_heroData.heroVoDic.values,i=me.filterObjectsByState(e,1);this.initContainer(i)}async onClickYi(){await xt.instance.ownerHero(),this.box_1.visible=!1,this.list_hero.visible=!0,this.subWalletBox.visible=!1,this.noDataBox.visible=!1;let e=L.instance.m_heroData.heroVoDic.values,i=me.filterObjectsByState(e,2);this.initContainer(i),this.setTabState(this.btn_yi,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_subwallet,!1,"#143f6b","#7ff1fe")}async onClickSubwallet(){this.box_1.visible=!1,this.list_hero.visible=!1,this.subWalletBox.visible=!0,this.noDataBox.visible=!1,this.setTabState(this.btn_subwallet,!0,"#143f6b","#7ff1fe"),this.setTabState(this.btn_sch,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_jia,!1,"#143f6b","#7ff1fe"),this.setTabState(this.btn_yi,!1,"#143f6b","#7ff1fe");var e=await k.requestPost("wxgame/lease/list",{});if(e){let i=e.list;i.sort((r,o)=>o.createTime-r.createTime);let n=e.list.length;for(let r=0;r<i.length;r++)i[r].rank=r+1;if(i){this.subWalletList.selectedIndex=1,i.push(void 0),i.push(void 0),i.push(void 0),this.subWalletList.array=i,this.tf_subTotal.text=`${n}`,this.subWalletList.visible=!0;let r=-1;this.subWalletList.selectedIndex=r}(!i||i.length<=0)&&(this.noDataBox.visible=!0)}}createSubWalletSuccess(){Laya.timer.once(800,this,this.onClickSubwallet)}onClickCreateSubwallet(){H.intance.openModule(f.CreateSubWalletDialog)}onClickRentalRecord(){H.intance.openModule(f.RentalRecordDialog)}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.setToMainScene),this.btn_sch.off(Laya.Event.CLICK,this,this.onClickSch),this.btn_jia.off(Laya.Event.CLICK,this,this.onClickJia),this.btn_yi.off(Laya.Event.CLICK,this,this.onClickYi),this.btn_subwallet.off(Laya.Event.CLICK,this,this.onClickSubwallet),this.btn_createSubWallet.off(Laya.Event.CLICK,this,this.onClickCreateSubwallet)}};ny=p([cC("eB5n1zn1RD2i2F-bAki-sQ")],ny);var ry=class extends Laya.Box{};var{regClass:uC}=Laya,oy=class extends ry{constructor(){super();this.isAddEvent=!1;this.allData=null}set dataSource(e){if(super.dataSource=e,!e){this.visible=!1;return}this.allData=e,y.intance.on(h.CHANGE_WALLET_HERO_AIR,this,this.onAirHeroChange),this.btn_add.on(Laya.Event.CLICK,this,this.onClickAdd,[e]),this.img_noHero.on(Laya.Event.CLICK,this,this.onClickNohero),this.tf_address.on(Laya.Event.BLUR,this,this.setPlayerName),this.setData()}setData(){this.dataBox.visible=this.allData.establish,this.btn_add.visible=!this.allData.establish,this.allData.hero?this.showHeroData(this.allData.hero):(this.box_show.visible=!1,this.img_back.visible=!1,this.img_noHero.visible=!0),this.allData.walletAddress.length>0?this.tf_address.text=this.allData.walletAddress:this.tf_address.text="",this.allData.name.length>0?this.tf_playerName.text=this.allData.name:this.tf_playerName.text=""}onClickAdd(){y.intance.event(h.ADD_AIR_WALLET_ITEM,[this.allData.index])}onClickNohero(){y.intance.event(h.AIR_SUB_WALLET_OPENHERO,[this.allData.index])}onAirHeroChange(e,i){!e||i!==this.allData.index||this.showHeroData(e)}showHeroData(e){this.allData.hero=e,this.box_show.visible=!0,this.img_back.visible=!0,this.img_noHero.visible=!1,this.img_back.skin=C.instance.getHeroBackIcon(e.heroItem.quality),this.img_front.skin=C.instance.getHeroFrontIcon(e.heroItem.quality),this.img_hero.skin=e.simgurl,this.tf_name.text=Ae.shortHeroStr(e.name);let i=e.heroItem.level+"";at.instance.setStar(this,i)}async setPlayerName(){try{if(this.tf_address.text=="")return;if(this.tf_address.text==K.instance.walletAddress){M.instance.notice(d.instance.getLanguage(1162));return}var e=await k.requestPost("wxgame/sys/queryName",{openid:this.tf_address.text.toLowerCase()});e&&(console.log(e),this.tf_playerName.text=e.name,y.intance.event(h.ADD_AIR_SUB_WALLET_NAME,[{name:e.name,walletAddress:this.tf_address.text,index:this.allData.index}]))}catch{console.log("未找到该玩家，请核对地址")}}onDisable(){y.intance.off(h.CHANGE_WALLET_HERO_AIR,this,this.onAirHeroChange),this.btn_add.off(Laya.Event.CLICK,this,this.onClickAdd),this.img_noHero.off(Laya.Event.CLICK,this,this.onClickNohero),this.tf_address.off(Laya.Event.BLUR,this,this.setPlayerName)}};oy=p([uC("8bSpqI3UR8KoEpwSxDv_7g")],oy);var sy=class extends Laya.Box{};var{regClass:pC}=Laya,ly=class extends sy{constructor(){super();this.isAddEvent=!1;this.heroPk=null}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,!e){this.visible=!1;return}let{rank:i,heroPk:n,ticketId:r,playerName:o,remainCount:s,reward:l,leaseType:c}=e;this.tf_rank.text=i,this.heroPk=n;let u=R.intance.m_dicShops.values;if(c==0){let m=me.getTitleByGoodsId(u,r);m&&(this.tf_arena.text=d.instance.getLanguage(m)),r==0&&(this.tf_arena.text=d.instance.getLanguage(1260))}else switch(c){case 1:this.tf_arena.text=d.instance.getLanguage(1261);break;case 2:this.tf_arena.text=d.instance.getLanguage(1260);break;case 3:this.tf_arena.text=`${d.instance.getLanguage(1260)}+${d.instance.getLanguage(1261)}`;break}if(this.tf_name.text=o,this.tf_venue.text=s,this.btn_detail.off(Laya.Event.CLICK,this,this.onClickDetail),this.btn_detail.on(Laya.Event.CLICK,this,this.onClickDetail,[e]),this.addEvent(),l&&l.length>0){let m=me.findFirstTypeAndNotGold(l);m&&(this.tf_score.text=m.count,this.img_money.skin=C.instance.getMoneyIcon(m.id),this.img_money.visible=!0)}else this.tf_score.text="0",this.img_money.visible=!1}onClickDetail(e){H.intance.openModule(f.EmployInfoDialog,{heroData:e})}onDisable(){this.btn_detail&&this.btn_detail.off(Laya.Event.CLICK,this,this.onClickDetail)}};ly=p([pC("5iGLLzQkR8mqhVsrdybXCQ")],ly);var cy=class extends Laya.Box{};var{regClass:mC}=Laya,uy=class extends cy{set dataSource(e){e&&(super.dataSource=e,e.name=="Professional & Airdrop"?this.tf_rate.text="Professional & Airdrop":this.tf_rate.text=`${d.instance.getLanguage(e.name)}`)}onChange(e){e?(this.selectImg.visible=!0,this.tf_rate.color="#ffffff"):(this.tf_rate.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};uy=p([mC("_iWKrJX7QK6BqGFWXcrKUw")],uy);var py=class extends Laya.Dialog{};var{regClass:dC}=Laya,my=class extends py{constructor(e){super();this.itemIndex=-1;this.heroList=[];this.useHeroList=[]}onEnable(){console.log(L.instance.playerDto.fightHeroPk),this.list_hero.visible=!1,this.createHeadList(),this.btn_transfer.on(Laya.Event.CLICK,this,this.onBtnTramsfer)}async setOpenData(e){this.itemIndex=e[0],this.useHeroList=e[1]}onBtnTramsfer(){let e=this.list_hero.selectedIndex;if(e<0){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1167),N.YES);return}let i=this.heroList[e];this.itemIndex!==-1?y.intance.event(h.CHANGE_WALLET_HERO_AIR,[i,this.itemIndex]):y.intance.event(h.CHANGE_WALLET_HERO,i),console.log("onBtnTramsfer",e),this.close()}async createHeadList(){if(!this)return;await xt.instance.ownerHero();let e=L.instance.m_heroData.heroVoDic.values;if(this.itemIndex!==-1?this.heroList=me.filterObjectsByState(e,0,this.useHeroList):this.heroList=me.filterObjectsByState(e,0),this.heroList){this.list_hero.selectedIndex=1,this.list_hero.array=this.heroList,this.list_hero.visible=!0;let i=-1;this.list_hero.selectedIndex=i}}onDisable(){this.btn_transfer.off(Laya.Event.CLICK,this,this.onBtnTramsfer)}};my=p([dC("8aIFsnkXTaWPXwTKHxCGpQ")],my);var dy=class extends Laya.Dialog{};var{regClass:hC}=Laya,hy=class extends dy{constructor(e){super();this.propValue=1;this.propNum=1;this.propData=null;this.items=[]}onEnable(){this.txt_num.text="1",this.listPanel1.visible=!1,this.btn_subtract.on(Laya.Event.CLICK,this,this.changePropNum,[!1]),this.btn_add.on(Laya.Event.CLICK,this,this.changePropNum,[!0]),this.listPanel1.selectHandler=new Laya.Handler(this,this.handleSelectProp),this.btn_transfer.on(Laya.Event.CLICK,this,this.onBtnTramsfer),this.initPropList()}changePropNum(e){e?this.propValue=Math.min(this.propValue+1,this.propNum):this.propValue=Math.max(this.propValue-1,1),this.txt_num.text=`${this.propValue}`}async initPropList(){await xt.instance.ownerBag();var e=this.getItemByType();console.log(e),this.propData=e,this.listPanel1.array=e,this.listPanel1.selectedIndex=0,this.listPanel1.visible=!0}handleSelectProp(e){if(e!==-1){this.propValue=1,this.txt_num.text="1";let i=this.listPanel1.selectedItem;i&&(this.propNum=Number(i._m_iNum),console.log(this.propNum))}}onBtnTramsfer(){let e=this.propData[this.listPanel1.selectedIndex],i=this.propValue;if(i<=0||!e){le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(1166),N.YES);return}y.intance.event(h.CHANGE_WALLET_PROP,[e,i]),this.close()}getItemByType(){this.items=[];for(var e=L.instance.m_packageData.getListBySubType(7),i=0;i<e.length;i++){var n=e[i];this.items.push(n)}return this.items}onDisable(){this.btn_subtract.off(Laya.Event.CLICK,this,this.changePropNum),this.btn_add.off(Laya.Event.CLICK,this,this.changePropNum),this.btn_transfer.off(Laya.Event.CLICK,this,this.onBtnTramsfer)}};hy=p([hC("WY66k0UbQfiwaG80emIzjA")],hy);var fy=class extends Laya.Box{};var{regClass:fC}=Laya,yy=class extends fy{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.addEvent(),this.setCurrentOutPut(e)}async setCurrentOutPut(e){if(e){let i=R.intance.m_dicItems.get(e.ticketId.toString());this.txt_num.text=""+Te.formatNumber(e.ticketCount,8),this.img_icon.skin=C.instance.getItemIcon(i.icon),this.img_box.skin="gameIcon/items/itemBg/img_"+i.quality+".png"}else this.txt_num.text="",this.img_icon.skin=null,this.img_box.skin="gameIcon/items/itemBg/img_0.png"}};yy=p([fC("QLIqcx2YSRWf6b4T0P4N6Q")],yy);var by=class extends Laya.Box{};var{regClass:yC}=Laya,gy=class extends by{set dataSource(e){super.dataSource=e,e&&(this.tf_data.text=e)}onDisable(){}onChange(e){e?(this.selectImg.visible=!0,this.tf_data.color="#ffffff"):(this.tf_data.color="#357cc0",this.selectImg.visible=!1)}};gy=p([yC("3viWNkWoRRS9EWM3SzguDg")],gy);var vy=class extends Laya.Box{};var{regClass:bC}=Laya,Ly=class extends vy{constructor(){super(...arguments);this.coins=[[3001,2],[3011,2],[3013,4],[3010,2],[3007,4],[3006,6],[3015,2],[3016,2],[3005,0]]}onEnable(){let e=(Laya.stage.width-X.DESIGN_WIDTH)/2;this.img_coinsBg.right-=e,console.log("dWidth: "+e),this.updateLocalAssets(),y.intance.on(h.ROLE_INFO_CHANGE,this,this.updateLocalAssets),y.intance.on(At.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),this.coins=R.intance.getGeneralValueById(19),this.list_coin.array=this.coins}onDisable(){y.intance.off(h.ROLE_INFO_CHANGE,this,this.updateLocalAssets),y.intance.off(At.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets)}updateLocalAssets(){this.list_coin.refresh()}};Ly=p([bC("7P9MlqipSaG6QoKpQowDbQ")],Ly);var _y=class extends Laya.Box{};var{regClass:gC}=Laya,xy=class extends _y{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.heroVo=e,this.heroVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.heroSk.dataSource=this.heroVo,this.tf_name.text=Ae.shortHeroStr(this.heroVo.name);let e=this.heroVo.heroItem.level+"";at.instance.setStar(this,e)}};xy=p([gC("IcuwbMwvRKqMyiXxDzW-dA")],xy);var wy=class extends Laya.Dialog{};var{regClass:vC}=Laya,Iy=class extends wy{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}onEnable(){this.initContainer(),He.instance.playSoundByName(He.soundName32)}initContainer(){var e=We.instance.getOneItem();e&&this.showItem(e)}showItem(e){let i=this.heroListItem;i.dataSource=e}onDisable(){y.intance.event(h.EVENT_CHECK_REMAIN,f.HeroGetDialog)}};Iy=p([vC("mrqJhWahTxuTjeSGIs559Q")],Iy);var Ey=class extends Laya.Box{};var{regClass:LC}=Laya,Ty=class extends Ey{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.shopItem=e,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.tf_name.text=d.instance.getLanguage(this.shopItem.title),this.shopItem.cost.length>1?(this.img_const.skin=C.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=Te.formatNumber(this.shopItem.cost[1])+"",this.img_const.visible=!0,this.tf_const.visible=!0,this.gray=this.shopItem.open==0,this.disabled=!1):(this.disabled=!0,this.img_const.visible=!1,this.tf_const.visible=!1),this.shopItem.type==1?(this.tf_name.color=Ma.qualityColors[parseInt(this.shopItem.icon)-1],this.img_bg.skin=C.instance.getHeroQuality(this.shopItem.icon),this.img_icon.skin=C.instance.getHeroEggIcon(this.shopItem.icon)):this.shopItem.type==4&&(this.tf_name.color=Ma.qualityColors[parseInt(this.shopItem.icon)-1],this.img_bg.skin=C.instance.getHeroQuality(this.shopItem.icon),this.img_icon.skin=C.instance.getChestIcon(this.shopItem.icon))}};Ty=p([LC("awS07ko0RBaxCnxXWqiR4g")],Ty);var Sy=class extends Laya.Box{};var{regClass:_C}=Laya,Cy=class extends Sy{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.shopItem=e,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){if(this.tf_name.text=d.instance.getLanguage(this.shopItem.title),this.img_const.skin=C.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=Te.formatNumber(this.shopItem.cost[1])+"",this.shopItem.type==2){var e=R.intance.m_dicItems.get(this.shopItem.icon);this.img_bg.skin=C.instance.getItemQualityIcon(e.quality+""),this.tf_name.color=Ma.qualityColors[e.quality-1],this.img_icon.skin=C.instance.getItemIcon(this.shopItem.icon)}}};Cy=p([_C("din69PYeRbSapMB2H6E06g")],Cy);var ky=class extends Laya.Scene{};var{regClass:xC}=Laya,Ay=class extends ky{constructor(){super(...arguments);this.currTab=0;this.type=1;this.selectItemId=-1;this.addL=1;this.price=0;this.isSkReady=!1}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP}onOpened(e){e&&e.length>0&&(this.type=e[0],e[1]!=null&&(this.selectItemId=e[1]),this.onClickTab(this.type))}onEnable(){y.intance.on(h.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),y.intance.on(h.EVENT_END_HEROBUY,this,this.onWaitHeroInfoBack),this.tf_num.on(Laya.Event.BLUR,this,this.setItemNum),this.btn_recruit.on(Laya.Event.CLICK,this,this.onRecruit),this.btn_reduce.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_reduce]),this.btn_plus.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_plus]),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,[],!1),this.listPanel2.vScrollBarSkin="",this.listPanel2.selectHandler=Laya.Handler.create(this,this.onSelectItem,[],!1),this.img_sk.on(Laya.Event.PLAYED,this,this.stopAni,[2]),this.box_2.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-X.DESIGN_HEIGHT)/2}async onRecruit(){if(this.shopItem.open==0&&X.Debug==0){M.instance.notice(d.instance.getLanguage(12));return}this.shopItem.type==1?X.Debug==2?(this.setChou1Ani("animation"+this.shopItem.icon+"_1"),await xt.instance.recruit1(this.shopItem.id)):M.instance.notice(d.instance.getLanguage(12)):await xt.instance.recruitItem(this.shopItem.id,this.addL)}onWaitHeroInfoBack(){this.setChou2Ani("animation"+this.shopItem.icon+"_2"),de.instance.hideLoading()}setTab(e){for(let i=1;i<7;i++)e==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+"_s.png"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+".png")}async initLuckDrawView(){this.destroyed||(this.type?this.onClickTab(this.type):this.onClickTab(1))}onClickTab(e){if(this.currTab!=e){if(this.setTab(e),this.box_2.visible=!0,e==1){var i=this.getItemByType(1);this.shopItems=i[0],this.listPanel1.array=this.shopItems,this.listPanel1.selectedIndex=-1,this.listPanel1.selectedIndex=i[1],this.listPanel1.visible=!0,this.listPanel2.visible=!1}else if(e==2){var i=this.getItemByType(2);this.shopItems=i[0],this.listPanel2.dataSource=this.shopItems,this.listPanel2.selectedIndex=-1,this.listPanel2.selectedIndex=i[1],this.listPanel2.visible=!0,this.listPanel1.visible=!1}else if(e==3){var i=this.getItemByType(4);this.shopItems=i[0],this.listPanel1.dataSource=this.shopItems,this.listPanel1.selectedIndex=-1,this.listPanel1.selectedIndex=i[1],this.listPanel1.visible=!0,this.listPanel2.visible=!1}}}getItemByType(e){var i=R.intance.m_dicShops.values,n=[],r=-1,o=0;return i.forEach(s=>{s.type==e&&(n.push(s),this.selectItemId!=-1&&s.icon==this.selectItemId&&(r=o,this.selectItemId=-1),o++)}),r==-1&&n.length>0&&(r=0),[n,r]}onSelectItem(e){if(this.shopItem=this.shopItems[e],console.log(this.shopItem),this.shopItem){if(this.tf_name.text=d.instance.getLanguage(this.shopItem.title),this.tf_des.text=d.instance.getLanguage(this.shopItem.des),this.shopItem.cost.length>1)this.img_const.skin=C.instance.getMoneyIcon(this.shopItem.cost[0]),this.addL=1,this.price=Te.formatNumber(this.shopItem.cost[1]);else if(this.shopItem.open==0){M.instance.notice(d.instance.getLanguage(12));return}this.setPriceByNum();var i=this.shopItem.type;this.btn_recruit.disabled=!1,i==1?(X.Debug<2&&(this.btn_recruit.disabled=!0),this.img_icon.visible=!1,this.img_sk.visible=!0,this.setIdleAni("animation"+this.shopItem.icon+"_0"),this.box_count.visible=!1):i==2?(this.img_icon.skin=C.instance.getItemBigIcon(this.shopItem.icon),this.img_icon.y=60,this.img_icon.visible=!0,this.img_sk.visible=!1,this.box_count.visible=!0):i==4&&(this.img_icon.skin=C.instance.getChestBigIcon(this.shopItem.icon),this.img_icon.y=110,this.img_icon.visible=!0,this.img_sk.visible=!1,this.box_count.visible=!1),this.btn_recruit.visible=!0}else this.tf_name.text="",this.tf_des.text="",this.img_icon.visible=!1,this.img_sk.visible=!1,this.box_count.visible=!1,this.btn_recruit.visible=!1}setItemNum(){var e=parseInt(this.tf_num.text);(!e||e<1)&&(e=1),this.addL=e,this.setPriceByNum()}handleClickBtn(e){switch(e){case this.btn_reduce:this.addL>1&&this.addL--,this.setPriceByNum();break;case this.btn_plus:this.addL<9999&&this.addL++,this.setPriceByNum();break}}setPriceByNum(){this.tf_num.text=this.addL+"",this.tf_const.text=Te.filterNumFormat(this.addL*this.price,8,!0)}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}stopAni(e){console.log("stopAni: "+e),this.isSkReady||(this.isSkReady=!0,this.callLater(this.stopSk))}stopSk(){this.img_sk.paused(),this.img_sk.stop()}setIdleAni(e){this.isSkReady?(this.img_sk.play(e,!1),this.img_sk.stop()):this.img_sk.animationName=e}setChou1Ani(e){this.isSkReady?this.img_sk.play(e,!0):this.img_sk.animationName=e}setChou2Ani(e){this.isSkReady?this.img_sk.play(e,!1):this.img_sk.animationName=e,Laya.timer.once(800,this,this.openHeroGetView)}openHeroGetView(){We.instance.autoPop=!0,Jt.instance.startShow(),this.setIdleAni("animation"+this.shopItem.icon+"_0")}onDrawBack(e){}startAni(){this.img_sk.paused(),this.img_sk.play(0,!1)}removeEvent(){y.intance.off(h.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),y.intance.off(h.EVENT_END_HEROBUY,this,this.onWaitHeroInfoBack)}};Ay=p([xC("IPCUkD5kRse3Gz5tw0Aovw")],Ay);var Dy=class extends Laya.Dialog{};var{regClass:wC}=Laya,My=class extends Dy{constructor(e){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_POP;this.m_iPositionType=P.CENTER}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList()}handleSelectHead(e){if(e!=-1){let i=this.list_head.selectedItem.id;L.instance.guildIcon=i,this.unionIcon.headSkin=L.instance.guildIcon}}createHeadList(){let e=R.intance.m_dicIconBadge;this.list_head.array=e.values,this.list_head.visible=!0;let i=-1,n=0;this.unionIcon.headSkin=L.instance.guildIcon;for(let r of e.values){if(r.id==L.instance.guildIcon){i=n;break}n++}this.list_head.selectedIndex=i}onRegister(){let e=L.instance.guildIcon;y.intance.event(h.EVENT_MODIFY_HEAD,[e]),this.close()}};My=p([wC("VhAfw9RDSVu06yGY3eOJbg")],My);var By=class extends Laya.Dialog{};var{regClass:IC}=Laya,Py=class extends By{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER}onEnable(){y.intance.on(h.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_change.on(Laya.Event.CLICK,this,this.onChangeHead),this.btn_apply.on(Laya.Event.CLICK,this,this.onApply)}setOpenData(e){if(console.log("setOpenData: ",e),e){var i=e[0];this.onSetUnionInfo(i),this.subUnionDto=e[1],this.onSetSubUnionInfo(this.subUnionDto)}}onBack(){this.close()}onSetUnionInfo(e){e&&(this.tf_guildName.text=d.instance.getMultiLan(e.unionName)),this.tf_heroNum.text=L.instance.m_heroData.getCount()+"",this.tf_address.text=Ae.formatWalletAddress(K.instance.walletAddress)}onSetSubUnionInfo(e){if(this.subUnionDto){this.input_name.text=d.instance.getMultiLan(e.unionName),this.textArea_des.text=d.instance.getMultiLan(e.desc),this.input_address.text=e.collectionToken,this.unionIcon.headSkin=e.icon;var i=e.status;this.onSetState(i)}else this.unionIcon.headSkin=L.instance.guildIcon,this.onSetState(0)}onSetState(e){e==1?(this.img_underReview.visible=!0,this.img_notPassed.visible=!1,this.btn_apply.visible=!1):e==2?(this.img_underReview.visible=!1,this.img_notPassed.visible=!0,this.btn_apply.visible=!0):(this.img_underReview.visible=!1,this.img_notPassed.visible=!1,this.btn_apply.visible=!0)}onChangeModifyHead(e){L.instance.guildIcon=e,this.unionIcon.headSkin=e}onChangeHead(){H.intance.openModule(f.ChangeUnionIconDialog)}async onApply(){let e=this.input_name.text,i=this.textArea_des.text,n=this.input_address.text;if(e=e.trim(),!L.instance.guildIcon){M.instance.notice(d.instance.getLanguage(1189));return}if(e==""){M.instance.notice(d.instance.getLanguage(31));return}if(i==""){M.instance.notice(d.instance.getLanguage(1190));return}if(n==""){M.instance.notice(d.instance.getLanguage(1191));return}let r={icon:L.instance.guildIcon,name:e,intro:i,recAddress:n};var o=await k.requestPost("wxgame/union/create",r);if(o&&o.unionBaseDto){var s=o.unionBaseDto.status;this.onSetState(s),M.instance.notice(d.instance.getLanguage(1192)),y.intance.event(h.EVENT_SUB_GUILD_UPDATE)}}onDisable(){this.removeEvent()}removeEvent(){y.intance.off(h.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead)}};Py=p([IC("K1XqPbcNQUGnysSD4yhBLQ")],Py);var Ry=class extends Laya.Dialog{};var{regClass:EC}=Laya,Ny=class extends Ry{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER}onEnable(){this.btn_memberList.on(Laya.Event.CLICK,this,this.onShowMemberList),this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_applicationList.on(Laya.Event.CLICK,this,this.onShowApplicationList),this.btn_referral.on(Laya.Event.CLICK,this,this.onShowReferralList),this.refreshApplyBtnRed(),Laya.timer.loop(1e3,this,this.refreshApplyBtnRed)}setOpenData(e){if(console.log("setOpenData: ",e),e){var i=e[0];this.onSetUnionInfo(i),this.subUnionDto=e[1],this.onSetSubUnionInfo(this.subUnionDto)}}onShowApplicationList(){H.intance.openModule(f.UnionMemberApplyView,this.subUnionDto.id)}onShowReferralList(){H.intance.openModule(f.UnionReferralView,this.subUnionDto.id)}onBack(){this.close()}onShowMemberList(){this.subUnionDto&&H.intance.openModule(f.UnionMemberView,[this.subUnionDto,!0])}onSetUnionInfo(e){e&&(this.tf_guildName.text=d.instance.getMultiLan(e.unionName)),this.tf_heroNum.text=L.instance.m_heroData.getCount()+"",this.tf_address.text=Ae.formatWalletAddress(K.instance.walletAddress)}refreshApplyBtnRed(){this.img_red_1.visible=L.instance.getRedDotById(it.RED_GUILD_APPLY)}onSetSubUnionInfo(e){e?(this.unionIcon.dataSource=e,this.tf_name.text=d.instance.getMultiLan(e.unionName),this.tf_des.text=d.instance.getMultiLan(e.desc),this.tf_lv.text=d.instance.getUILang("LV.")+e.lv,this.tf_num.text="<font color='#25ff63'>"+e.memberNum+"</font>/"+e.maxMemberNum,this.img_lvIcon.skin=C.instance.getUnionLvIcon(e.lv),this.box_show.visible=!0,this.tf_receiveAddress.text=Ae.formatWalletAddress(e.collectionToken),this.btn_applicationList.visible=e.leader==L.instance.playerDto.pid,this.btn_referral.visible=e.leader==L.instance.playerDto.pid):this.box_show.visible=!1}onDisable(){Laya.timer.clearAll(this)}};Ny=p([EC("qhJFEWQoRbixaYt5MGd9TQ")],Ny);var Oy=class extends Laya.Scene{};var{regClass:TC}=Laya,Hy=class extends Oy{constructor(){super(...arguments);this.currTab=0;this.currUnionId=1;this.createStatus=0}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP}onOpened(e){this.box_show.visible=!1,this.currUnionId=e,this.initLuckDrawView()}onEnable(){y.intance.on(h.EVENT_SUB_GUILD_UPDATE,this,this.initSubGuild),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_apply.on(Laya.Event.CLICK,this,this.onApply),this.btn_memberList.on(Laya.Event.CLICK,this,this.onShowMemberList),this.btn_guildList.on(Laya.Event.CLICK,this,this.onShowGuildList),this.btn_applicationList.on(Laya.Event.CLICK,this,this.onShowApplicationList),this.btn_referral.on(Laya.Event.CLICK,this,this.onShowReferralList),Laya.timer.loop(1e3,this,this.refreshApplyBtnRed)}refreshApplyBtnRed(){!this.btn_apply.disabled&&this.tf_createSub.text==d.instance.getUILang("My Guild")?this.img_red_1.visible=L.instance.getRedDotById(it.RED_GUILD_APPLY):this.img_red_1.visible=!1,this.btn_applicationList.disabled?this.img_red_2.visible=!1:this.img_red_2.visible=L.instance.getRedDotById(it.RED_GUILD_APPLY)}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}onApply(){this.createStatus==2?this.subUnionDto.status==0?H.intance.openModule(f.MySubUnionView,[this.unionDto,this.subUnionDto]):H.intance.openModule(f.CreateSubUnionView,[this.unionDto,this.subUnionDto]):H.intance.openModule(f.CreateSubUnionView,[this.unionDto,this.subUnionDto])}onShowMemberList(){this.unionDto&&H.intance.openModule(f.UnionMemberView,[this.unionDto,!1])}onShowGuildList(){H.intance.openModule(f.UnionListView)}onShowApplicationList(){H.intance.openModule(f.UnionMemberApplyView,this.unionDto.id)}onShowReferralList(){H.intance.openModule(f.UnionReferralView,this.unionDto.id)}async initLuckDrawView(){var e=L.instance.playerDto.union,i=await k.requestPost("wxgame/union/info",{unionId:this.currUnionId});this.unionDto=i.unionDto,this.unionDto?this.onSetUnionInfo(this.unionDto):M.instance.notice(d.instance.getLanguage(135)),this.initSubGuild()}async initSubGuild(){var e=await k.requestPost("wxgame/union/createInfo",{});e?(this.createStatus=e.createStatus,e.unionBaseDto?(this.subUnionDto=e.unionBaseDto,this.btn_apply.disabled=!1,this.tf_createSub.text=d.instance.getUILang("My Guild")):this.createStatus==0?this.btn_apply.disabled=!0:this.createStatus==1?this.btn_apply.disabled=!1:this.createStatus==2&&(e.unionBaseDto.status==0?(this.btn_apply.disabled=!1,this.tf_createSub.text=d.instance.getUILang("My Guild")):(this.btn_apply.disabled=!1,this.tf_createSub.text=d.instance.getUILang("My Guild")))):M.instance.notice(d.instance.getLanguage(135))}onSetUnionInfo(e){e?(this.unionIcon.dataSource=e,this.tf_name.text=d.instance.getMultiLan(e.unionName),this.tf_des.text=d.instance.getMultiLan(e.desc),this.tf_lv.text=d.instance.getUILang("LV.")+e.lv,this.tf_num.text="<font color='#25ff63'>"+e.memberNum+"</font>/"+e.maxMemberNum,this.img_lvIcon.skin=C.instance.getUnionLvIcon(e.lv),this.box_show.visible=!0,e.parentId>0?(this.btn_applicationList.disabled=!0,this.btn_referral.disabled=!0):e.leader!=L.instance.playerDto.pid?(this.btn_applicationList.disabled=!0,this.btn_referral.disabled=!0):this.subUnionDto?(this.btn_applicationList.disabled=!1,this.btn_referral.disabled=!1):(this.btn_applicationList.disabled=!1,this.btn_referral.disabled=!1)):this.box_show.visible=!1}onDisable(){y.intance.off(h.EVENT_SUB_GUILD_UPDATE,this,this.initSubGuild),Laya.timer.clearAll(this)}};Hy=p([TC("KR8HZN1dSv2Bz_62yIgOrg")],Hy);var Uy=class extends Laya.Box{};var{regClass:SC}=Laya,Vy=class extends Uy{constructor(){super();this.isAddEvent=!1;this.addL=1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.tf_uid.on(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),this.btn_add.on(Laya.Event.CLICK,this,this.onAdd),this.btn_reduce.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_reduce]),this.btn_plus.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_plus]),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.ticketMemberAddressVo=e,this.ticketMemberAddressVo?(this.btn_add.visible=!1,this.box_address.visible=!0,this.tf_uid.text=this.ticketMemberAddressVo.openid,this.tf_player_name.text=this.ticketMemberAddressVo.playerName,console.log("data1: ",e),this.knapsackItem.dataSource=this.ticketMemberAddressVo.itemVo,this.tf_num.text=this.ticketMemberAddressVo.num+""):(this.btn_add.visible=!0,this.box_address.visible=!1,console.log("data2: ",e)),this.addEvent()}onAdd(){y.intance.event(h.EVENT_ADD_TICKET_ADDRESS)}async setPlayerName(){try{if(this.tf_uid.text=="")return;this.ticketMemberAddressVo.openid=this.tf_uid.text.toLowerCase();var e=await k.requestPost("wxgame/sys/queryName",{openid:this.tf_uid.text.toLowerCase()});e&&(console.log(e),this.tf_player_name.text=e.name,this.ticketMemberAddressVo.checked=!0,this.ticketMemberAddressVo.playerName=e.name)}catch{console.log("未找到该玩家，请核对地址")}}uidFocus(){this.ticketMemberAddressVo.openid="",this.ticketMemberAddressVo.playerName="",this.ticketMemberAddressVo.checked=!1,this.tf_uid.text="",this.tf_player_name.text=""}handleClickBtn(e){switch(e){case this.btn_reduce:this.addL>1&&this.addL--,this.setItemNum();break;case this.btn_plus:this.addL<100&&this.addL++,this.setItemNum();break}}setItemNum(){this.tf_num.text=this.addL+"",this.ticketMemberAddressVo.num=this.addL}};Vy=p([SC("KK3UEIk8ToiricaiUr9L3A")],Vy);var Fy=class extends Laya.Dialog{};var zy=class{};var{regClass:CC}=Laya,Gy=class extends Fy{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_transfer.on(Laya.Event.CLICK,this,this.onTransferItem),y.intance.on(h.EVENT_ADD_TICKET_ADDRESS,this,this.onAddticketAddress)}setOpenData(e){console.log("setOpenData: ",e),this.itemVo=e,this.list_address.array=[null]}onBack(){this.close()}async onTransferItem(){var e=[];if(this.list_address.array.forEach(n=>{n&&n.checked&&n.playerName&&n.openid&&n.num>0&&e.push({address:n.openid,num:n.num})}),e.length>0){var i=await k.requestPost("wxgame/equip/ticketTransfer",{list:e,id:this.itemVo.m_iId});i?(M.instance.notice(d.instance.getLanguage(2e3)),y.intance.event(h.EVENT_REFRESH_KNAPSACK)):M.instance.notice(d.instance.getLanguage(135))}else M.instance.notice(d.instance.getLanguage(1348))}onAddticketAddress(){console.log("onAddticketAddress: ",this.list_address.array);let e=new zy;e.num=1,e.itemVo=this.itemVo,this.list_address.array||(this.list_address.array=[null]),this.list_address.setItem(this.list_address.array.length-1,e),this.list_address.addItem(null),this.list_address.refresh(),this.list_address.tweenTo(this.list_address.array.length-1)}onDisable(){this.removeEvent()}removeEvent(){this.btn_back.off(Laya.Event.CLICK,this,this.onBack),this.btn_transfer.off(Laya.Event.CLICK,this,this.onTransferItem),y.intance.off(h.EVENT_ADD_TICKET_ADDRESS,this,this.onAddticketAddress)}};Gy=p([CC("oLjG6sBpQqemEHt7q1F9GA")],Gy);var jy=class extends Laya.Box{};var{regClass:kC}=Laya,Ky=class extends jy{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(e){this.unionItem=e,this.unionItem&&(this.addEvent(),this.setCurrentOutPut())}set headSkin(e){this.img_head.skin=C.instance.getUnionIcon(e)}async setCurrentOutPut(){if(!this.unionItem)return;let e=this.unionItem.icon;this.img_head.skin=C.instance.getUnionIcon(e)}toDetail(){}};Ky=p([kC("lK37x6YwQ9umJIqReZht4Q")],Ky);var Wy=class extends Laya.Box{};var{regClass:AC}=Laya,qy=class extends Wy{set dataSource(e){super.dataSource=e,this.iconBadgeItem=e,this.iconBadgeItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.unionIcon.headSkin=this.iconBadgeItem.id}};qy=p([AC("TRVoEDtUSRaEW71V6oCpew")],qy);var Yy=class extends Laya.Box{};var{regClass:DC}=Laya,$y=class extends Yy{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.btn_viewMembers.on(Laya.Event.CLICK,this,this.onViewMeber),this.isAddEvent=!0)}onViewMeber(){H.intance.openModule(f.UnionMemberView,[this.unionDto,!1])}set dataSource(e){super.dataSource=e,this.unionDto=e,this.unionDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.unionIcon.dataSource=this.unionDto,this.tf_name.text=d.instance.getMultiLan(this.unionDto.unionName),this.tf_lv.text=d.instance.getUILang("LV.")+this.unionDto.lv,this.tf_num.text="<font color='#25ff63'>"+this.unionDto.memberNum+"</font>/"+this.unionDto.maxMemberNum,this.img_lvBg.skin=C.instance.getUnionLvDiIcon(this.unionDto.lv),this.img_lvIcon.skin=C.instance.getUnionLvIcon(this.unionDto.lv)}onChange(e){e?this.bg.skin="res/union1/img_trade_bg_2.png":this.bg.skin="res/union1/img_trade_bg_1.png"}};$y=p([DC("eauuiADeT9SAqEYe1ms81w")],$y);var Xy=class extends Laya.Dialog{};var{regClass:MC}=Laya,Qy=class extends Xy{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack)}onOpened(e){this.initLuckDrawView()}setOpenData(e){}async initLuckDrawView(){var e=await k.requestPost("wxgame/union/list",{});if(e){this.list_guild.array=e.unionList;let i=-1;this.list_guild.selectedIndex=i}else M.instance.notice(d.instance.getLanguage(135))}onBack(){this.close()}onDisable(){this.removeEvent()}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};Qy=p([MC("vJwx3qloTmiGGRpFF6Qm1A")],Qy);var Zy=class extends Laya.Box{};var{regClass:BC}=Laya,Jy=class extends Zy{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_agree.on(Laya.Event.CLICK,this,this.onAgree),this.btn_refuse.on(Laya.Event.CLICK,this,this.onRefuse),this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.isAddEvent=!0)}onCopy(){let e=this.unionApplyMemberDto.address;doCopy(e),M.instance.notice(d.instance.getLanguage(132))}async onAgree(){if(this.unionApplyMemberDto.pid){var e=await k.requestPost("wxgame/union/doAudit",{uid:this.unionApplyMemberDto.uid,playerId:this.unionApplyMemberDto.pid,agree:!0});e&&M.instance.notice(d.instance.getLanguage(1193)),y.intance.event(h.EVENT_UNION_APPLY_MEMBER_UPDATE)}}async onRefuse(){if(this.unionApplyMemberDto.pid){var e=await k.requestPost("wxgame/union/doAudit",{uid:this.unionApplyMemberDto.uid,playerId:this.unionApplyMemberDto.pid,agree:!1});e&&M.instance.notice(d.instance.getLanguage(1194)),y.intance.event(h.EVENT_UNION_APPLY_MEMBER_UPDATE)}}set dataSource(e){super.dataSource=e,this.unionApplyMemberDto=e,this.unionApplyMemberDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.unionApplyMemberDto.head;this.playerIcon.headSkin=e,this.img_flag.skin=C.instance.getCountryIcon(this.unionApplyMemberDto.country),this.tf_name.text=this.unionApplyMemberDto.name,this.tf_fightTimes.text=this.unionApplyMemberDto.fightTimes+"",this.tf_state.text=Ie.formatTimeAgo(this.unionApplyMemberDto.lastLoginTime),this.tf_state.color=Ie.colorTimeAgo(this.unionApplyMemberDto.lastLoginTime),this.tf_address.text=Ae.abbreviateString(this.unionApplyMemberDto.address,10)}};Jy=p([BC("FPhs_TdtQbCxXS40Ic50Wg")],Jy);var eb=class extends Laya.Dialog{};var{regClass:PC}=Laya,tb=class extends eb{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_agreeAll.on(Laya.Event.CLICK,this,this.onAgreeAll),y.intance.on(h.EVENT_UNION_APPLY_MEMBER_UPDATE,this,this.onUpdateApplyMember),this.list_member.array=[]}setOpenData(e){console.log("setOpenData: ",e),Number.isInteger(e)&&(this.currUnionId=e,this.onUpdateApplyMember())}async onUpdateApplyMember(){var e=await k.requestPost("wxgame/union/auditList",{unionId:this.currUnionId});e&&e.auditList?this.list_member.array=e.auditList:M.instance.notice(d.instance.getLanguage(135))}onBack(){this.close()}async onAgreeAll(){if(this.list_member.array.length>0){var e=await k.requestPost("wxgame/union/doAudit",{uid:this.currUnionId,playerId:0,agree:!0});e&&M.instance.notice(d.instance.getLanguage(1195)),y.intance.event(h.EVENT_UNION_APPLY_MEMBER_UPDATE)}}onDisable(){this.removeEvent()}removeEvent(){y.intance.off(h.EVENT_UNION_APPLY_MEMBER_UPDATE,this,this.onUpdateApplyMember)}};tb=p([PC("LXw-3_bwSmqCzdUAekakYg")],tb);var ib=class extends Laya.Box{};var{regClass:RC}=Laya,ab=class extends ib{constructor(){super();this.isAddEvent=!1;this.tgUrl=""}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_add.on(Laya.Event.CLICK,this,this.onAdd),this.btn_move.on(Laya.Event.CLICK,this,this.onMoveClick),this.btn_tg.on(Laya.Event.CLICK,this,this.onBtnTgClick),this.isAddEvent=!0)}async onAdd(){if(this.unionMemberDto.isfriend){let e={icon:this.unionMemberDto.head,name:this.unionMemberDto.name,id:this.unionMemberDto.pid};H.intance.openModule(f.PrivateChatDialog,e);return}if(this.unionMemberDto.pid){let e=R.intance.getGeneralValueById(11);if(L.instance.friendNum>=e){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(301),N.YES);return}if(this.unionMemberDto.openid==K.instance.walletAddress){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(200),N.YES);return}if(this.unionMemberDto.isfriend){le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(202),N.YES);return}let i=await k.requestPost("wxgame/friend/addFriend",{openid:this.unionMemberDto.openid});console.log(i),i&&le.instance().AlertByType(N.BASEALERTVIEW,pe.instance.get(307),N.YES,Laya.Handler.create(this,()=>{this.btn_add.disabled=!0}))}}set dataSource(e){super.dataSource=e,this.unionMemberDto=e,this.unionMemberDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let e=this.unionMemberDto.head;this.playerIcon.headSkin=e,this.img_flag.skin=C.instance.getCountryIcon(this.unionMemberDto.country),this.tf_name.text=this.unionMemberDto.name;let i=this.unionMemberDto.isMy;L.instance.playerDto.unionLeader&&i&&this.unionMemberDto.pid!==L.instance.playerDto.pid?this.btn_move.visible=!0:this.btn_move.visible=!1,this.unionMemberDto.isLeader&&!i?(this.tgUrl=this.unionMemberDto.tgUrl,this.img_hui.visible=!0,this.btn_tg.visible=!0,!this.tgUrl||this.tgUrl.length<=0?this.btn_tg.visible=!1:this.btn_tg.visible=!0):(this.img_hui.visible=!1,this.btn_tg.visible=!1),this.tf_unionName.text=d.instance.getMultiLan(this.unionMemberDto.unionName),this.tf_fightTimes.text=this.unionMemberDto.fightTimes+"",this.tf_state.text=Ie.formatTimeAgo(this.unionMemberDto.lastLoginTime),this.tf_state.color=Ie.colorTimeAgo(this.unionMemberDto.lastLoginTime),this.unionMemberDto.openid==K.instance.walletAddress&&(this.btn_add.visible=!1),this.btn_add.label="Add as a friend",this.unionMemberDto.isfriend&&(this.btn_add.label="send msg")}async onMoveClick(){let e=this.unionMemberDto.unionId;await k.requestPost("wxgame/union/doKickOutMember",{unionId:e,playerId:this.unionMemberDto.pid})&&y.intance.event(h.UPDATE_UNION_MEMBER_LIST,this.unionMemberDto.pid)}onBtnTgClick(){this.tgUrl?window.open(this.tgUrl,"_blank"):M.instance.notice(d.instance.getLanguage(1524))}};ab=p([RC("l73FEB2CRGihzisJBs63MQ")],ab);var nb=class extends Laya.Dialog{};var{regClass:NC}=Laya,rb=class extends nb{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER;this.pageIndex=1;this.pages=0;this.currUnionId=0;this.isMy=!1;this.scrolLock=!0;this.pageSize=20}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),y.intance.on(h.UPDATE_UNION_MEMBER_LIST,this,this.updateUnionMemberList),this.list_member.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange)}async setOpenData(e){this.myFriendData=await k.requestPost("wxgame/friend/friendList",{}),this.myFriendData&&this.myFriendData.list&&(L.instance.friendNum=this.myFriendData.list.length),this.unionData=e[0],this.isMy=e[1],console.log("setOpenData: ",this.unionData);var i=this.unionData.id;this.initLuckDrawView(i)}async initLuckDrawView(e){this.currUnionId=e;var i;this.isMy?i=await k.requestPost("wxgame/union/myUnionMemberPageList",{pageSize:this.pageSize,pageIndex:this.pageIndex}):i=await k.requestPost("wxgame/union/memberPageList",{unionId:e,pageSize:this.pageSize,pageIndex:this.pageIndex});var n=i.list;this.pages=i.pages;var r=i.memberNum,o=i.maxMemberNum;this.tf_num.text="<font color='#25ff63'>"+r+"</font>/"+o;let s=this.isMyFriendData(n,this.myFriendData.list,e);console.log(s),this.list_member.array=s}isMyFriendData(e,i,n){for(let r of e){let o=!1;for(let s of i)if(r.openid===s.openid){o=!0;break}r.isfriend=o,r.unionId=n,r.isMy=this.isMy,r.isLeader=r.pid==this.unionData.leader,r.tgUrl=this.unionData.tgUrl}return e}onBack(){this.close()}updateUnionMemberList(e){console.log(e),console.log(this.list_member.array),this.list_member.array=this.deleteItemByPid(this.list_member.array,e),console.log(this.list_member.array)}deleteItemByPid(e,i){return e.filter(n=>n.pid!==i)}onDisable(){this.removeEvent()}onScrollBarChange(){this.list_member.scrollBar.value>=this.list_member.scrollBar.max&&this.loadMoreData()}refreshLock(){this.scrolLock=!0,console.log("重置锁")}async loadMoreData(){if(this.scrolLock&&(this.scrolLock=!1,console.log("到底了"),Laya.timer.once(1e4,this,this.refreshLock),this.pageIndex<this.pages)){this.pageIndex+=1;var e;if(this.isMy?e=await k.requestPost("wxgame/union/myUnionMemberPageList",{pageSize:this.pageSize,pageIndex:this.pageIndex}):e=await k.requestPost("wxgame/union/memberPageList",{unionId:this.currUnionId,pageSize:this.pageSize,pageIndex:this.pageIndex}),e){var i=e.list;this.pages=e.pages,this.scrolLock=!0;var n=e.memberNum,r=e.maxMemberNum;this.tf_num.text="<font color='#25ff63'>"+n+"</font>/"+r;let o=this.isMyFriendData(i,this.myFriendData.list,this.currUnionId);this.list_member.array.push(...o),this.list_member.array=this.list_member.array,Laya.timer.clear(this,this.refreshLock)}}}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};rb=p([NC("439XbfImQxS4I-Vced8JKA")],rb);var ob=class extends Laya.Box{};var{regClass:OC}=Laya,sb=class extends ob{constructor(){super();this.isAddEvent=!1}set dataSource(e){super.dataSource=e,this.unionDto=e,this.unionDto&&this.setCurrentOutPut()}async setCurrentOutPut(){this.unionIcon.dataSource=this.unionDto,this.tf_name.text=d.instance.getMultiLan(this.unionDto.unionName),this.tf_lv.text=d.instance.getUILang("LV.")+this.unionDto.lv,this.tf_num.text="<font color='#25ff63'>"+this.unionDto.memberNum+"</font>/"+this.unionDto.maxMemberNum,this.img_lvBg.skin=C.instance.getUnionLvDiIcon(this.unionDto.lv),this.img_lvIcon.skin=C.instance.getUnionLvIcon(this.unionDto.lv)}onChange(e){e?this.bg.skin="res/union1/img_trade_bg_2.png":this.bg.skin="res/union1/img_trade_bg_1.png"}};sb=p([OC("cbbqawzdSI2g161G69xpUg")],sb);var lb=class extends Laya.Box{};var{regClass:HC}=Laya,cb=class extends lb{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.isAddEvent=!0)}onCopy(){let e=this.unionDto.collectionToken;doCopy(e),M.instance.notice(d.instance.getLanguage(132))}set dataSource(e){super.dataSource=e,this.unionDto=e,this.unionDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.unionIcon.dataSource=this.unionDto,this.tf_name.text=d.instance.getMultiLan(this.unionDto.unionName),this.tf_lv.text=d.instance.getUILang("LV.")+this.unionDto.lv,this.tf_num.text="<font color='#25ff63'>"+this.unionDto.memberNum+"</font>/"+this.unionDto.maxMemberNum,this.img_lvBg.skin=C.instance.getUnionLvDiIcon(this.unionDto.lv),this.img_lvIcon.skin=C.instance.getUnionLvIcon(this.unionDto.lv),this.tf_address.text=Ae.abbreviateString(this.unionDto.collectionToken,24)}};cb=p([HC("NTRu0sy9SDCKgxglHtnEdw")],cb);var ub=class extends Laya.Dialog{};var{regClass:UC}=Laya,pb=class extends ub{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.list_junior.array=[]}setOpenData(e){console.log("setOpenData: ",e),Number.isInteger(e)&&(this.currUnionId=e,this.onUpdateApplyMember())}async onUpdateApplyMember(){var e=await k.requestPost("wxgame/union/unionRelation",{unionId:this.currUnionId});e?(this.tf_referralNum.text=d.instance.getLanguage(1308,e.childUnionNum),this.tf_memberNum.text=d.instance.getLanguage(1309,e.childUnionMemberNum),this.list_senior.array=e.parent?[e.parent]:[],!this.list_senior.array||this.list_senior.array.length<=0?this.noDataBox1.visible=!0:this.noDataBox1.visible=!1,e.childList&&(this.list_junior.array=e.childList),!e.childList||e.childList.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1):M.instance.notice(d.instance.getLanguage(135))}onBack(){this.close()}onDisable(){this.removeEvent()}removeEvent(){}};pb=p([UC("Ls1FVCY8RxeSChhaMnjcKA")],pb);var mb=class extends Laya.Scene{};var{regClass:VC}=Laya,db=class extends mb{constructor(){super(...arguments);this.currTab=0;this.type=1;this.joinStatusDic=new te;this.items=[]}onAwake(){this.m_iLayerType=P.M_POP,this.m_iPositionType=P.UP}onOpened(e){this.type=e}onEnable(){this.btn_search.on(Laya.Event.CLICK,this,this.onSearch),this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.list_union.vScrollBarSkin="",this.list_union.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.list_union.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1),this.box_show.visible=!1,this.box_list.visible=!1,this.initLuckDrawView();let e=(Laya.stage.height-X.DESIGN_HEIGHT)/2}async initLuckDrawView(){var e=await k.requestPost("wxgame/union/list",{});e?this.unionData=e.unionList:M.instance.notice(d.instance.getLanguage(135)),this.getJoinStatus()}async getJoinStatus(){var e=await k.requestPost("wxgame/union/joinStatus",{});e?(this.joinStatusDic=new te,this.joinStatusDic.set(e.unionId,e.joinStatus)):M.instance.notice(d.instance.getLanguage(135)),this.getItemByName(""),this.box_list.visible=!0}getItemByName(e){if(this.list_union.selectedIndex=-1,this.items=[],this.unionData){var i=this.unionData.length;this.tf_totalNum.text=d.instance.getLanguage(1355,i);for(var n=0;n<i;n++){var r=this.unionData[n],o=d.instance.getMultiLan(r.unionName);Ae.caseInsensitiveSearchWithRegex(o,e)&&this.items.push(r)}}this.list_union.array=this.items,this.items.length>0?this.list_union.selectedIndex=0:this.list_union.selectedIndex=-1}onSearch(){var e=this.input_search.text;this.getItemByName(e)}onJoin(){this.currUnionDto&&(L.instance.playerDto.union>0?ye.intance.setCurrentScene(Q.M_SCENE_MYUNION,this.currUnionDto.id):le.instance().AlertByType(N.BASEALERTVIEW,d.instance.getLanguage(141),N.CANCEL,Laya.Handler.create(this,this.onJoinSure)))}async onJoinSure(){if(this.currUnionDto){var e=await k.requestPost("wxgame/union/join",{unionId:this.currUnionDto.id});e.errorCode==0?e.unionId&&e.unionId>0?(L.instance.playerDto.union=e.unionId,ye.intance.setCurrentScene(Q.M_SCENE_MYUNION,L.instance.playerDto.union),M.instance.notice(d.instance.getLanguage(2e3))):M.instance.notice(d.instance.getLanguage(1196)):M.instance.notice(d.instance.getLanguage(135))}}onItemRender(e,i){e.onChange(this.list_union.selectedIndex==i)}onSelectItem(e,i){if(this.currUnionDto=this.items[e],console.log(this.currUnionDto),this.currUnionDto){this.unionIcon.dataSource=this.currUnionDto,this.tf_name.text=d.instance.getMultiLan(this.currUnionDto.unionName),this.tf_des.text=d.instance.getMultiLan(this.currUnionDto.desc),this.tf_lv.text=d.instance.getUILang("LV.")+this.currUnionDto.lv,this.tf_num.text="<font color='#25ff63'>"+this.currUnionDto.memberNum+"</font>/"+this.currUnionDto.maxMemberNum,this.img_lvBg.skin=C.instance.getUnionLvDiIcon(this.currUnionDto.lv),this.img_lvIcon.skin=C.instance.getUnionLvIcon(this.currUnionDto.lv);var n=this.joinStatusDic.get(this.currUnionDto.id);L.instance.playerDto.union>0?this.btn_join.label=d.instance.getUILang("Enter"):n?n==1?this.btn_join.label=d.instance.getLanguage(1210):n==2?this.btn_join.label=d.instance.getUILang("Enter"):this.btn_join.label=d.instance.getUILang("Join"):this.btn_join.label=d.instance.getUILang("Join"),this.box_show.visible=!0}else this.box_show.visible=!1}setToMainScene(){ye.intance.setCurrentScene(Q.M_SCENE_MAIN)}removeEvent(){}};db=p([VC("VfpfbqXcSQalDIkuosz8Rw")],db);var hb=class extends Laya.Box{};var{regClass:FC}=Laya,fb=class extends hb{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.tf_uid.on(Laya.Event.BLUR,this,this.setPlayerName),this.tf_uid.on(Laya.Event.FOCUS,this,this.uidFocus),this.btn_add.on(Laya.Event.CLICK,this,this.onAdd),this.isAddEvent=!0)}set dataSource(e){super.dataSource=e,this.unionMemberAddressVo=e,console.log("data: ",e),this.unionMemberAddressVo?(this.btn_add.visible=!1,this.box_address.visible=!0,this.tf_uid.text=this.unionMemberAddressVo.openid,this.tf_player_name.text=this.unionMemberAddressVo.playerName,console.log("data1: ",e)):(this.btn_add.visible=!0,this.box_address.visible=!1,console.log("data2: ",e)),this.addEvent()}onAdd(){y.intance.event(h.EVENT_ADD_UNIONMEMBER_ADDRESS)}async setPlayerName(){try{if(this.tf_uid.text=="")return;this.unionMemberAddressVo.openid=this.tf_uid.text.toLowerCase();var e=await k.requestPost("wxgame/sys/queryName",{openid:this.tf_uid.text.toLowerCase()});e&&(console.log(e),this.tf_player_name.text=e.name,this.unionMemberAddressVo.checked=!0,this.unionMemberAddressVo.playerName=e.name)}catch{console.log("未找到该玩家，请核对地址")}}uidFocus(){this.unionMemberAddressVo.openid="",this.unionMemberAddressVo.playerName="",this.unionMemberAddressVo.checked=!1,this.tf_uid.text="",this.tf_player_name.text=""}};fb=p([FC("JU_R7IZ9Q9uq6BU_eahAuQ")],fb);var yb=class extends Laya.Box{};var{regClass:zC}=Laya,bb=class extends yb{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}set dataSource(e){if(super.dataSource=e,this.unionMemberVo=e,!this.unionMemberVo)return;this.check_coin.selected=this.unionMemberVo.checked,this.unionMemberDto=this.unionMemberVo.unionMemberDto;let i=this.unionMemberDto.head;this.playerIcon.headSkin=i,this.tf_name.text=this.unionMemberDto.name,this.addEvent()}onCheck(){this.unionMemberVo.checked=!this.unionMemberVo.checked,console.log("onCheck: ",this.unionMemberVo.checked),y.intance.event(h.EVENT_REFRESH_UNIONMEMBER_TRANSFER)}};bb=p([zC("gGFdZxctQPm-SO2zLew1hg")],bb);var gb=class{};var vb=class extends Laya.Dialog{};var Lb=class{};var{regClass:GC}=Laya,_b=class extends vb{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=P.M_PANEL;this.m_iPositionType=P.CENTER;this.myHeroesNum=0;this.selectedNum=0;this.addL=1}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_transfer.on(Laya.Event.CLICK,this,this.onTransferItem),this.btn_checkBox.on(Laya.Event.CLICK,this,this.onSelectAll),this.btn_reduce.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_reduce]),this.btn_plus.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_plus]),y.intance.on(h.EVENT_REFRESH_UNIONMEMBER_TRANSFER,this,this.onRefreshUnionMemberTransfer),y.intance.on(h.EVENT_ADD_UNIONMEMBER_ADDRESS,this,this.onAddUnionMemberAddress),this.list_members.array=[]}setOpenData(e){console.log("setOpenData: ",e),this.itemVo=e,this.showItem(),this.getUnionMembers(),this.list_address.array=[null]}showItem(){this.knapsackItem.dataSource=this.itemVo}async getUnionMembers(){var e=await k.requestPost("wxgame/union/members",{}),i=e.list;console.log("获得公会成员 unionMemberDtos: ",i),this.unionMemberVos=[],i&&i.length>0&&i.forEach(n=>{if(n&&n.pid!=L.instance.playerDto.pid){var r=new gb;r.unionMemberDto=n,this.unionMemberVos.push(r)}}),this.list_members.array=this.unionMemberVos,this.updateNum()}onAddUnionMemberAddress(){console.log("onAddUnionMemberAddress: ",this.list_address.array),this.list_address.setItem(this.list_address.array.length-1,new Lb),this.list_address.addItem(null),this.list_address.refresh(),this.list_address.tweenTo(this.list_address.array.length-1)}onRefreshUnionMemberTransfer(){this.list_members.refresh(),this.updateNum()}updateNum(){!this.unionMemberVos||this.unionMemberVos.length<=0?this.noDataBox.visible=!0:this.noDataBox.visible=!1,this.selectedNum=0,this.unionMemberVos.forEach(e=>{e&&e.checked&&this.selectedNum++}),this.myHeroesNum=this.unionMemberVos.length,this.tf_selectedNum.text=d.instance.getLanguage(1223,this.selectedNum)}onSelectAll(){var e=this.btn_checkBox.selected;this.unionMemberVos.forEach(i=>{i&&(i.checked=e)}),this.list_members.refresh(),this.updateNum()}handleClickBtn(e){switch(e){case this.btn_reduce:this.addL>1&&this.addL--,this.setItemNum();break;case this.btn_plus:this.addL<100&&this.addL++,this.setItemNum();break}}setItemNum(){this.tf_num.text=this.addL+""}onBack(){this.close()}async onTransferItem(){var e=[];if(this.unionMemberVos.forEach(n=>{n.checked&&e.push(n.unionMemberDto.openid)}),this.list_address.array.forEach(n=>{n&&n.checked&&e.push(n.openid)}),e.length>0){var i=await k.requestPost("wxgame/equip/airdropTicketTransfer",{addressList:e,id:this.itemVo.m_iId,transferNum:this.addL});i?(M.instance.notice(d.instance.getLanguage(2e3)),y.intance.event(h.EVENT_REFRESH_KNAPSACK)):M.instance.notice(d.instance.getLanguage(135))}else M.instance.notice(d.instance.getLanguage(1348))}onDisable(){this.removeEvent()}removeEvent(){y.intance.off(h.EVENT_REFRESH_UNIONMEMBER_TRANSFER,this,this.onRefreshUnionMemberTransfer),y.intance.off(h.EVENT_ADD_UNIONMEMBER_ADDRESS,this,this.onAddUnionMemberAddress)}};_b=p([GC("xnUTxKqCQUuIl8QBpuYoxg")],_b);var{regClass:jC,property:mwe}=Laya,gl=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.getComponent(Laya.RigidBody).setVelocity({x:0,y:-10})}onTriggerEnter(t,e,i){this.owner.removeSelf()}onUpdate(){this.owner.y<-10&&this.owner.removeSelf()}onDisable(){Laya.Pool.recover("bullet",this.owner)}};gl=p([jC("hIXP-u9_RfeIwPLhNGNjGw")],gl);var{regClass:KC,property:fwe}=Laya,vl=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onClick)}onClick(t){Laya.stage.width=1334,Laya.stage.height=750,Laya.stage.scaleMode=Laya.Stage.SCALE_FIXED_WIDTH,Laya.Scene.open("scenes/Index.ls")}onDisable(){this.owner.off(Laya.Event.MOUSE_DOWN,this)}};vl=p([KC("DQCudilORvOvMM7hTH8i7w")],vl);var{regClass:WC,property:qC}=Laya,Ba=class extends Laya.Script{constructor(){super();this.level=1}get itemId(){return this._itemId}set itemId(e){this._itemId=e,this.owner.skin="resources/UI/images/bag/"+e+".png"}onEnable(){this._rig=this.owner.getComponent(Laya.RigidBody),this.level=Math.round(Math.random()*5)+1}onUpdate(){}onCollisionEnter(e){console.log("collision: ",e)}onTriggerEnter(e,i,n){var r=this.owner;if(console.log("owener: ",r),e.label==="buttle"&&r.parent){let o=Laya.Pool.getItemByCreateFun("effect",this.createEffect,this);o.pos(r.x,r.y),r.parent.addChild(o),o.play(0,!0),r.removeSelf(),Laya.SoundManager.playSound("resources/sound/destroy.wav")}}createEffect(){let e=new Laya.Animation;e.loadAnimation("resources/ani/TestAni.ani"),e.on(Laya.Event.COMPLETE,null,i);function i(){e.removeSelf(),Laya.Pool.recover("effect",e)}return e}onDisable(){Laya.Pool.recover("dropBox",this.owner)}};p([qC({type:"number"})],Ba.prototype,"level",2),Ba=p([WC("3L23NCFLSAieUApqTrVoCQ")],Ba);var{regClass:YC,property:Lwe}=Laya,Kn=class extends Laya.Script{constructor(){super();this.touchHeroIds=new te;this.touchGlasses=new te;this.updateIndex=0;this.turnSpeed=1;this.turningSpeed=.1;this.lastDirectionAngle=0}onAwake(){}onEnable(){}onCollisionEnter(e){console.log(this.constructor.name+" onCollisionEnter collision",e)}onCollisionStay(e){console.log(this.constructor.name+" onCollisionStay collision",e)}onCollisionExit(e){console.log(this.constructor.name+" onCollisionExit collision",e)}onTriggerEnter(e,i,n){if(e.label==="ground")console.warn("ground in");else if(e.label&&e.label.startsWith("grass"))this.owner.isMe&&(e.owner.alpha=.7,console.warn("grass in"),this.touchGlasses.set(e.label,!0),this.setMyCurrArea());else if(e.label==="item")this.owner.enterItemId=e.owner.getComponent(Ba).itemId;else if(e.label==="role"){var r=e.owner.roomPlayerDto.id;if(this.touchHeroIds.set(r,e.owner),this.owner.displacementType==2){var o=O.instance.canAttack(this.owner,e.owner);o&&Laya.Tween.clearAll(this.owner)}}}onTriggerStay(e,i,n){}onTriggerExit(e,i,n){if(e.label==="ground")this.owner.inGround=!1,console.warn("ground exit");else if(e.label&&e.label.startsWith("grass"))this.owner.isMe&&(console.warn("grass out"),e.owner.alpha=1,this.touchGlasses.remove(e.label),this.setMyCurrArea());else if(e.label==="item")this.owner.enterItemId==e.owner.getComponent(Ba).itemId&&(this.owner.enterItemId=0);else if(e.label==="role"){var r=e.owner.roomPlayerDto.id;this.touchHeroIds.remove(r)}}setMyCurrArea(){this.touchGlasses.keys.length>0?this.owner.currArea=1:this.owner.currArea=0,this.owner.onSendMoveData()}onUpdate(){if(this.owner.isMe)this.owner._isDead||(O.instance.myHeroSpr.currArea>0?this.owner.alpha=.6:this.owner.alpha=1);else{this.owner._isRealDead?O.instance.myHeroSpr._isDead?this.owner.visible=!1:this.owner.visible=!1:this.owner.currArea>0?O.instance.myHeroSpr.currArea==this.owner.currArea?(this.owner.visible=!0,this.owner.alpha=.6):this.owner.visible=!1:(this.owner.visible=!0,this.owner.alpha=1);return}if(!this.owner.isStop){if(this.owner.speed>0){let e=this.getJoystickDirectionAngle(),i=this.calculateAngleDifference(e,this.lastDirectionAngle);if(Math.abs(i)>10?this.startTurning():this.stopTurning(),this.lastDirectionAngle=e,this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.heroSk.isReady&&this.owner.walk(),this.lastSpeed=this.owner.speed),this.owner.roleDirection>=0){let n=1*this.owner.speed*this.turnSpeed,r=this.owner.roleDirection*(Math.PI/180),o=n*Math.cos(r),s=n*Math.sin(r);this.owner.pos(Math.round(this.owner.x+o),Math.round(this.owner.y+s))}this.owner.inControl&&!this.owner._isDead&&this.touchHeroIds.values.forEach(n=>{var r=O.instance.canTui(this.owner,n);r&&n.beiTui(this.owner.roomPlayerDto.id)})}else this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.idle(),this.lastSpeed=this.owner.speed);this.updateIndex==0&&this.owner.onSendMoveData(),this.updateIndex++,this.updateIndex>0&&(this.updateIndex=0)}}getJoystickDirectionAngle(){return this.owner.roleDirection}calculateAngleDifference(e,i){let n=Math.abs(e-i);return n>180?360-n:n}startTurning(){this.turnSpeed*=this.turningSpeed}stopTurning(){this.turnSpeed=1}onDisable(){}};Kn=p([YC("DknC7B57SZi-09Mz092daQ")],Kn);var{regClass:$C,property:Zx}=Laya,Pa=class extends Laya.Script{constructor(){super();this.createBoxInterval=1e3;this._time=0;this._started=!1;this.updateStop=!1}onEnable(){let e=["resources/UI/images/test/b1.png"];Laya.loader.load(e).then(i=>{this._time=Date.now(),this._gameBox=this.owner.getChildByName("gameBox"),Laya.stage.on(Laya.Event.BLUR,this,()=>{this.updateStop=!0}),Laya.stage.on(Laya.Event.FOCUS,this,()=>{this.updateStop=!1}),Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onStageClick)})}onStart(){let e=this.owner.getChildByName("ground").getComponent(Laya.BoxCollider);e.width=Laya.stage.width}onUpdate(){if(this.updateStop)return;let e=Date.now();e-this._time>this.createBoxInterval&&this._started&&(this._time=e,this.createBox())}createBox(){let e=Laya.Pool.getItemByCreateFun("dropBox",this.dropBox.create,this.dropBox);e.pos(Math.random()*(Laya.stage.width-100),-100),this._gameBox.addChild(e)}onStageClick(e){e.stopPropagation();let i=Laya.Pool.getItemByCreateFun("bullet",this.bullet.create,this.bullet);i.pos(Laya.stage.mouseX,Laya.stage.mouseY),this._gameBox.addChild(i)}startGame(){this._started||(this._started=!0,this.enabled=!0)}stopGame(){this._started=!1,this.enabled=!1,this.createBoxInterval=1e3,this._gameBox.removeChildren()}};p([Zx({type:Laya.Prefab})],Pa.prototype,"dropBox",2),p([Zx({type:Laya.Prefab})],Pa.prototype,"bullet",2),Pa=p([$C("5iJgbfCiSn6Rc8upAfHtjA")],Pa);var xb=class extends Laya.Scene{};var{regClass:XC,property:kwe}=Laya,Wn=class extends xb{constructor(){super();Wn.instance=this}onEnable(){this._control=this.getComponent(Pa),this.tipLbll.on(Laya.Event.CLICK,this,this.onTipClick)}onTipClick(e){this.tipLbll.visible=!1,this._score=0,this.scoreLbl.text="分数：",this._control.startGame()}addScore(e=1){this._score+=e,this.scoreLbl.text="分数："+this._score,this._control.createBoxInterval>600&&this._score%20==0&&(this._control.createBoxInterval-=20)}stopGame(){this.tipLbll.visible=!0,this.tipLbll.text="游戏结束了，点击屏幕重新开始",this._control.stopGame()}};Wn=p([XC("Y5UkAabiTgWFZQnBL1EpEw")],Wn);var wb=class extends Laya.Scene{};var{regClass:QC,property:Nwe}=Laya,Ll=class extends wb{constructor(){super()}onOpened(t){t&&(this.msgLab.x=t.point&&t.point.x?t.point.x:Laya.stage.mouseX-50,this.msgLab.y=t.point&&t.point.y?t.point.y:Laya.stage.mouseY-80,this.msgLab.text=t.text,Laya.Tween.to(this.msgLab,{y:this.msgLab.y-100,alpha:0},1e3,Laya.Ease.linearNone))}};Ll=p([QC("9kGOzpbbSOWSAmN0l9VtfQ")],Ll);var{regClass:ZC,property:Uv}=Laya,_l=Laya.Browser,Jx=Laya.Render,ew=Laya.SpriteUtils,Tt=class extends Laya.Script{constructor(){super();Tt.instance=this}onEnable(){this.videoBtn.on(Laya.Event.MOUSE_DOWN,this,()=>{this.createElementVideo()})}createElementVideo(){_l.window.IframeElementRT=this,this.createScript(),this.createDiv(),this.createIframe("resources/files/video.html?url=layaAir.mp4"),this.setDOMElementInArea(),Laya.stage.on(Laya.Event.RESIZE,this,this.setDOMElementInArea)}setDOMElementInArea(){this.iframeElement!=null&&this.divElement!=null&&(ew.fitDOMElementInArea(this.divElement,this.closeBox,0,0,this.closeBox.width,this.closeBox.height),ew.fitDOMElementInArea(this.iframeElement,this.iframeBox,0,0,this.iframeBox.width,this.iframeBox.height))}createScript(){this.scriptElement=_l.document.createElement("script"),_l.document.body.appendChild(this.scriptElement),this.scriptElement.innerHTML="function closeVideo(){IframeElementRT.closeVideo() }"}createIframe(e){this.iframeElement=_l.createElement("iframe"),_l.document.body.appendChild(this.iframeElement),this.iframeElement.style.zIndex=Jx.canvas.style.zIndex+998,this.iframeElement.src=e,this.iframeElement.style.margin="0",this.iframeElement.style.scrolling="no",this.iframeElement.style.frameborder="0",this.iframeElement.style.padding="0",this.iframeElement.style.left="0",this.iframeElement.style.top="0px",this.iframeElement.style.position="absolute"}createDiv(){this.divElement=Laya.Browser.createElement("div"),Laya.Browser.document.body.appendChild(this.divElement),this.divElement.innerHTML="<img src='resources/files/x.png' width='60px' height='60px' onclick='closeVideo()'/>",this.divElement.style.zIndex=Jx.canvas.style.zIndex+999}closeVideo(){Laya.Browser.document.body.removeChild(this.scriptElement),Laya.Browser.document.body.removeChild(this.iframeElement),Laya.Browser.document.body.removeChild(this.divElement),this.scriptElement=this.iframeElement=this.divElement=null,Laya.stage.off(Laya.Event.RESIZE,this,this.setDOMElementInArea)}};p([Uv({type:Laya.Button})],Tt.prototype,"videoBtn",2),p([Uv({type:Laya.Box})],Tt.prototype,"closeBox",2),p([Uv({type:Laya.Box})],Tt.prototype,"iframeBox",2),Tt=p([ZC("ZtMxoJHQTWipjGWyGV51jQ")],Tt);var Ib=class extends Laya.Scene{};var{regClass:JC,property:zwe}=Laya,xl=class extends Ib{constructor(){super()}onEnable(){Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),this.tabBindViewStack(),this.topTab.selectedIndex=0,this.item0Tab.selectedIndex=0}onClicked(){let t=this.item2Tab.getChildByName("item2"),e=this.item2Tab.getChildByName("item3"),i=this.item2Tab.getChildByName("item4");t.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1)}),e.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenScene.ls",!1)}),i.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/Dialog.ls",!1,{title:"弹窗的标题",text:"弹窗的具体文本……"})})}tabBindViewStack(){this.topTab.selectHandler=new Laya.Handler(this,t=>{this.tabPage.selectedIndex=t,t==1&&(this.item1Tab.selectedIndex=0),t==2&&(this.item2Tab.selectedIndex=0),t==3&&(this.item3Tab.selectedIndex=0),t==4&&(this.item4Tab.selectedIndex=0),Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),Tt.instance.iframeElement&&Tt.instance.closeVideo(),t==2&&this.item2Page.selectedIndex==1&&!Tt.instance.iframeElement&&Tt.instance.createElementVideo()}),this.item0Tab.selectHandler=new Laya.Handler(this,t=>{this.item0Page.selectedIndex=t}),this.item1Tab.selectHandler=new Laya.Handler(this,t=>{this.item1Page.selectedIndex=t,t!==4&&Laya.Physics2D.I?Laya.Physics2D.I.enableDebugDraw=!1:t==4&&Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!0)}),this.item2Tab.selectHandler=new Laya.Handler(this,t=>{switch(this.item2Page.selectedIndex=t,t){case 1:!Tt.instance.iframeElement&&Tt.instance.createElementVideo();break;case 2:Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1);break;case 3:Laya.loader.load("prefab/uiDemo/page/Win.lh").then(e=>{let i=e.create();this.tabPage.parent.addChild(i)});break;case 4:Laya.loader.load("prefab/uiDemo/page/Dialog.lh").then(e=>{e.create().show()});break}t!==1&&Tt.instance.iframeElement&&Tt.instance.closeVideo()}),this.item3Tab.selectHandler=new Laya.Handler(this,t=>{this.item3Page.selectedIndex=t}),this.item4Tab.selectHandler=new Laya.Handler(this,t=>{this.item4Page.selectedIndex=t})}onDisable(){}};xl=p([JC("gbAKGLFtQ5WL6-NpVocAEA")],xl);var{regClass:e1,property:Eb}=Laya,Ra=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onAwake(){console.log("创建动画模板"),this.createAniTemplate("moveB"),this.createAniTemplate("moveC"),this.createAniTemplate("moveE"),this.createAniTemplate("moveF"),this.createAniTemplate("moveH"),this.createAniTemplate("moveI"),this.createAniTemplate("moveK"),this.createAniTemplate("moveL"),this.aniSource.play(0,!0,"moveB")}onEnable(){this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.aniSource.play(0,!0,this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.aniSource.play(0,!0,this.selectAni.selectedLabel):this.aniSource.play(0,!1,this.selectAni.selectedLabel)})}createAniTemplate(e,i=8){let n=[];for(let r=0;r<i;r++)n.push("resources/UI/role/atlasAni/139x/"+e+r+".png");Laya.Animation.createFrames(n,e)}onError(e){console.log("加载失败: "+e)}};p([Eb({type:Laya.Button})],Ra.prototype,"playAni",2),p([Eb({type:Laya.Button})],Ra.prototype,"stopAni",2),p([Eb({type:Laya.ComboBox})],Ra.prototype,"selectAni",2),p([Eb({type:Laya.Animation})],Ra.prototype,"aniSource",2),Ra=p([e1("tmkUlMggQi20FZpy6nC1aw")],Ra);var{regClass:t1,property:Tb}=Laya,Na=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onEnable(){this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel),this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.playAnimation(this.selectAni.selectedLabel):this.playAnimation(this.selectAni.selectedLabel,!1)})}playAnimation(e,i=!0,n=7){let r=[];for(let o=0;o<n;o++)r.push("resources/UI/role/frameAni/"+e+o+".png");this.aniSource.loadImages(r).play(0,i)}};p([Tb({type:Laya.Button})],Na.prototype,"playAni",2),p([Tb({type:Laya.Button})],Na.prototype,"stopAni",2),p([Tb({type:Laya.ComboBox})],Na.prototype,"selectAni",2),p([Tb({type:Laya.Animation})],Na.prototype,"aniSource",2),Na=p([t1("8gw7FS4iT1q8EhdN3sWklQ")],Na);var{regClass:i1,property:Qwe}=Laya,tw=Laya.Event,a1=Laya.SpineSkeleton,wl=class extends Laya.Script{constructor(){super(...arguments);this.skinArray=["goblin","goblingirl"];this.skinIndex=0;this.spineAniIndex=6}onEnable(){this.createLayaSpine(),this.createSpine()}createLayaSpine(){this.skeletonNode=this.owner.getChildByName("skeletonNode"),Laya.loader.load("resources/UI/role/spineAni/goblins.sk").then(e=>{this.skeletonAni=e.buildArmature(1),this.skeletonNode.addChild(this.skeletonAni),this.skeletonAni.x=128,this.skeletonAni.y=390,this.spineAniNum=this.skeletonAni.getAnimNum(),this.skeletonAni.play(0,!0),this.changeSkin(),this.skeletonNode.on(tw.CLICK,this,this.changeSkin)})}parseComplete(){}createSpine(){this.spineNode=this.owner.getChildByName("spineNode"),Laya.loader.load("resources/UI/role/spineAni/spineboy-pma.skel",Laya.Loader.SPINE).then(e=>{this.spineAni=new a1,this.spineAni.templet=e,this.spineNode.addChild(this.spineAni),this.spineAni.scale(.3,.3),this.spineAni.pos(220,390),this.spineAniNum=this.spineAni.getAnimNum(),this.spineAni.play(this.spineAniIndex,!0),this.spineNode.on(tw.CLICK,this,this.changeAni)})}spineParseComplete(){}changeAni(){++this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=5),this.spineAni.play(this.spineAniIndex,!0,!0)}changeSkin(){this.skeletonAni.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}};wl=p([i1("qTd2xmRXT4i0Re94qly0Lg")],wl);var{regClass:n1,property:Il}=Laya,iw=Laya.Event,r1=Laya.Point,pa=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new r1;this.angle=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.createMap(),this.sceneWindow.on(iw.MOUSE_UP,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2+26),this.roleAniNode.scale(.6,.6),this.roleAniNode.x=this.lastX=48,this.roleAniNode.y=this.lastY=48,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let e=this._animator.getDefaultState();console.log(e.name),this.createWallMap()}createWallMap(){Laya.loader.load("resources/tiledMap/desert_new.json").then(()=>{let i=Laya.loader.getRes("resources/tiledMap/desert_new.json").data.layers[0].data,n;n=new Array;for(var r=0;r<40;r++){n[r]=new Array;for(var o=0;o<60;o++)i[r*60+o]==30?n[r][o]=1:n[r][o]=0}this.graph=new window.Graph(n),this.opts=[],this.opts.closest=!0,this.opts.heuristic=window.astar.heuristics.diagonal})}mouseUp(e){if(this.isMoving)return;this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let i=this.gameMap.globalToLocal(this.stageMouse);var n=this.graph.grid[Math.ceil(this.roleAniNode.y/32)-1][Math.ceil(this.roleAniNode.x/32)-1],r=this.graph.grid[Math.ceil(i.y/32)-1][Math.ceil(i.x/32)-1];this._everyPath=window.astar.search(this.graph,n,r,{closest:this.opts.closest}),this._everyPath.length>0&&(this.isMoving=!0),Laya.timer.loop(100,this,this.loopfun)}loopfun(){if(this._everyPath.length>0){let e=this._everyPath[0].y*32+16,i=this._everyPath[0].x*32+16;e==this.lastX?i>this.lastY?this.angle=90:this.angle=270:e>this.lastX?this.angle=0:this.angle=180,this.switchAni("run"),this.lastX=e,this.lastY=i,Laya.Tween.to(this.roleAniNode,{x:e,y:i},100),this._everyPath.splice(0,1)}else this.switchAni("stand"),Laya.timer.clear(this,this.loopfun),this.isMoving=!1}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(e=null){this.onLoaded()}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);this._animator.play(i),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}getOrientation(e,i){let n=i.split(","),r=360/n.length;return n[Math.floor(e/r)]}onDisable(){Laya.stage.off(iw.MOUSE_UP,this,this.mouseUp),this.tiledMap&&this.tiledMap.destroy()}};p([Il({type:Laya.Sprite})],pa.prototype,"gameMap",2),p([Il({type:Laya.Prefab})],pa.prototype,"roleAni",2),p([Il({type:"string"})],pa.prototype,"runAniName",2),p([Il({type:"string"})],pa.prototype,"standAniName",2),p([Il({type:Laya.Panel})],pa.prototype,"sceneWindow",2),pa=p([n1("zBb5TGy7Swu5_GpFiGzUng")],pa);var{regClass:o1,property:iIe}=Laya,aw=Laya.Rectangle,qn=class extends Laya.Script{constructor(){super(...arguments);this._rect1=aw.TEMP;this._rect2=aw.TEMP}rectDetection(e,i){return!(e.x>i.x+i.width||e.x+e.width<i.x||e.y>i.y+i.height||e.y+e.height<i.y)}collisionWith(e,i,n){let r=[];if(n==0){var o=Laya.Point.create(),s=e.width/2,l=e.height/2,c=Laya.Point.create(),u,m;o.x=e.x+s,o.y=e.y+l,u=this.rectToRadius(e.width,e.height)}else if(n==2){var b,_;_=this.arrayToPoint(e)}for(let w=0;w<i.length;w++)if(e!=i[w])switch(n){case 0:c.x=i[w].x+i[w].width/2,c.y=i[w].y+i[w].height/2,m=this.rectToRadius(i[w].width,i[w].height),this.circleDetection(o,c,u+m)&&r.push(i[w]);break;case 1:this.rectDetection(e,i[w])&&r.push(i[w]);break;case 2:e.name==="c1"?(b=this.arrayToPoint(i[w]),this.circleAndPolygonDetection(e,b,i[w])&&r.push(i[w])):i[w].name==="c1"?this.circleAndPolygonDetection(i[w],_,e)&&r.push(i[w]):(b=this.arrayToPoint(i[w]),this.polygonDetection(_,b,e,i[w])&&r.push(i[w]));break}return r}circleAndPolygonDetection(e,i,n){let r=this.getSides(i),o=[],s=Laya.Point.create(),l=Laya.Point.create(),c=e.hitArea._hit._cmds[0].radius,u=this.getNodeCoord(i,n);s.x=e.x+e.hitArea._hit._cmds[0].x,s.y=e.y+e.hitArea._hit._cmds[0].y,l=this.getNearestPoint(s,u),o.push(new Laya.Point(l.x-s.x,l.y-s.y));for(let m=0,b=r.length;m<b;m++)o.push(this.perpendicular(r[m]));for(let m=0,b=o.length;m<b;m++){let _=o[m],w=this.getCircleProjection(s,_,c),v=this.getPolygonProjection(u,_);if(!this.isOverlap(w,v))return!1}return!0}getNearestPoint(e,i){let n=i[0],r=this.getDistance(e,n),o,s;for(let l=1;l<i.length;l++)o=i[l],s=this.getDistance(e,o),s<r&&(r=s,n=o);return n}polygonDetection(e,i,n,r){let o=this.getSides(e).concat(this.getSides(i)),s=[],l=this.getNodeCoord(e,n),c=this.getNodeCoord(i,r);for(let u=0,m=o.length;u<m;u++)s.push(this.perpendicular(o[u]));for(let u=0,m=s.length;u<m;u++){let b=s[u],_=this.getPolygonProjection(l,b),w=this.getPolygonProjection(c,b);if(!this.isOverlap(_,w))return!1}return!0}isOverlap(e,i){let n,r;return n=e.min<i.min?e.min:i.min,r=e.max>i.max?e.max:i.max,e.max-e.min+(i.max-i.min)>=r-n}getNodeCoord(e,i){let n=[];for(let r=0;r<e.length;r++){let o=Laya.Point.create();o.x=e[r].x+i.x+i.hitArea._hit._cmds[0].x,o.y=e[r].y+i.y+i.hitArea._hit._cmds[0].y,n.push(o)}return n}getPolygonProjection(e,i){let n=null,r=null;for(let o=0;o<e.length;o++){let s=this.dotProduct(e[o],i)/this.getLength(i);(n===null||s<n)&&(n=s),(r===null||s>r)&&(r=s)}return{min:n,max:r}}getCircleProjection(e,i,n){let r=this.dotProduct(e,i)/this.getLength(i);return{min:r-n,max:r+n}}rectToRadius(e,i){let n;return e==i?n=e/2:n=Math.sqrt(e*e+i*i)/2,n}circleDetection(e,i,n){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))<=n}circlesCollision(e,i,n,r){let o=this.subtract(e,i),s=this.getCircleProjection(e,o,n),l=this.getCircleProjection(i,o,r);return!!this.isOverlap(s,l)}arrayToPoint(e){let i=[],n=[];if(n=e.hitArea._hit._cmds[0].points,n&&n.length>3)for(let r=0;r<n.length/2;r++)i[r]=Laya.Point.create(),i[r].x=n[r*2],i[r].y=n[r*2+1];return i}perpendicular(e){let i=Laya.Point.create();return i.x=e.y,i.y=-e.x,i}getNormal(e){let i=Math.sqrt(e.x*e.x+e.y*e.y);return new Laya.Point(e.y/i,(0-e.x)/i)}getSides(e){var i=e,n=i.length,r=new Array;if(n>=3){for(var o=1,s=i[0];o<n;o++){let l=i[o];r.push(this.subtract(l,s)),s=l}r.push(this.subtract(i[0],i[n-1]))}return r}getLength(e){return Math.sqrt(e.x*e.x+e.y*e.y)}dotProduct(e,i){return e.x*i.x+e.y*i.y}subtract(e,i){return Laya.Point.create().setTo(e.x-i.x,e.y-i.y)}getDistance(e,i){let n=e.x-i.x,r=e.y-i.y;return Math.sqrt(n*n+r*r)}};qn=p([o1("naI7Ga3ZQzuwHxZXbiaZEw")],qn);var Sb=class extends Laya.View{};var{regClass:s1,property:oIe}=Laya,Oa=class extends Sb{constructor(){super();this._detectionType=0;this.collisionNodes=null;Oa.i=this}onEnable(){this.collisionNodes=[this.c1,this.p1,this.p2],this._script=this.getComponent(qn),this.detectionType.selectHandler=new Laya.Handler(this,this.onSelected),this.detectionType.selectedIndex=0}onSelected(e){switch(console.log("onSelected:"+e),this._detectionType=e,e){case 0:this.setCircleLine([this.c11,this.p11,this.p22]);break;case 1:this.setRectLine([this.c11,this.p11,this.p22]);break;case 2:this.c11.graphics.clear(),this.p11.graphics.clear(),this.p22.graphics.clear();break}}collisionWith(e){let i;i=this._script.collisionWith(e,this.collisionNodes,this._detectionType),i.length>0?(i.push(e),this.setLineWidth(i)):this.retsetLineWidth()}setLineWidth(e){for(let i=0;i<e.length;i++)e[i]._graphics._cmds[0].lineWidth=3}retsetLineWidth(){for(let e=0;e<this.collisionNodes.length;e++)this.collisionNodes[e]._graphics._cmds[0].lineWidth=0}setCircleLine(e,i=1,n="#1e00fb"){for(let r=0;r<e.length;r++){e[r].graphics.clear();let o=e[r].width/2,s=e[r].height/2,l=this._script.rectToRadius(e[r].width,e[r].height);e[r].graphics.drawCircle(o,s,l,null,n,i)}}setRectLine(e,i=1,n="#1e00fb"){for(let r=0;r<e.length;r++)e[r].graphics.clear(),e[r].graphics.drawRect(e[r].x,e[r].y,e[r].width,e[r].height,null,n,i)}};Oa=p([s1("RrGHZH_SROCrF5XxFa05sg")],Oa);var{regClass:l1,property:wo}=Laya,Yn=Laya.Event,nw=Laya.Point,Gi=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new nw;this.axisPivot=new nw;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1;this.mLastX=0;this.mLastY=0}onEnable(){this.createMap(),this.joystickAxis=this.joystickBG.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(Yn.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(Yn.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(Yn.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(Yn.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.sceneWindow.width/2,this.roleAniNode.y=this.sceneWindow.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let e=this._animator.getDefaultState();console.log(e.name)}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(e=null){this.onLoaded()}mouseDown(e){this.touchId=e.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let e=this.joystickBG.globalToLocal(this.stageMouse),i=e.x-this.joystickAxis.width/2,n=e.y-this.joystickAxis.height/2;this.radian=Math.atan2(n-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,e.x,e.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(e.x-this.joystickAxis.width/2,e.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(e){e.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(e){e.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(e,i){let n=i.split(","),r=360/n.length;return n[Math.floor(e/r)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let e=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;this.mLastX+=e,this.mLastY+=i,this.mLastX<0?this.mLastX=0:this.mLastX>1920-this.sceneWindow.width&&(this.mLastX=1920-this.sceneWindow.width),this.mLastY<0?this.mLastY=0:this.mLastY>1280-this.sceneWindow.height&&(this.mLastY=1280-this.sceneWindow.height),this.tiledMap.moveViewPort(this.mLastX,this.mLastY)}getDistance(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}onDisable(){Laya.stage.off(Yn.MOUSE_DOWN,this,this.mouseDown),Laya.stage.off(Yn.MOUSE_UP,this,this.mouseUp),Laya.stage.off(Yn.MOUSE_MOVE,this,this.mouseMove),this.tiledMap&&this.tiledMap.destroy()}};p([wo(Laya.Sprite)],Gi.prototype,"gameMap",2),p([wo(Laya.Prefab)],Gi.prototype,"roleAni",2),p([wo({type:"string"})],Gi.prototype,"runAniName",2),p([wo({type:"string"})],Gi.prototype,"standAniName",2),p([wo({type:Laya.Panel})],Gi.prototype,"sceneWindow",2),p([wo(Laya.Image)],Gi.prototype,"joystickBG",2),Gi=p([l1("k2DFVaFIQEyMRaElgOWsVw")],Gi);var Cb=class extends Laya.Box{};var{regClass:c1}=Laya,El=class extends Cb{constructor(){super();this.lastIndex=-1}onEnable(){let e="resources/json/bagList.json";Laya.loader.fetch(e,"json").then(i=>{i.bagList&&i.bagList.length>0&&(this.bagList.array=i.bagList,this.bagList.renderHandler=new Laya.Handler(this,this.onListRender),this.bagList.selectHandler=new Laya.Handler(this,this.onListSelect),this.bagList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.bagList.vScrollBarSkin="")})}onListRender(e,i){i>this.bagList.array.length||i<0}onListSelect(e){this.tips.visible=!0,this.bagList.array[e].listItemBG={skin:"resources/UI/images/bg/bg100-1.png"},this.lastIndex!==-1&&(this.bagList.array[this.lastIndex].listItemBG={skin:"resources/UI/images/bg/bg100-0.png"}),this.lastIndex=e,this.itemImg.skin=this.bagList.array[e].listItemImg.skin,this.itemNumber.text="数量 "+this.bagList.array[e].listItemNumber.text,this.itemReadme.text=this.bagList.array[e].readme}onListMouse(e,i){}onDisable(){}};El=p([c1("fimeRTYXT46eMH6komwhJQ")],El);var{regClass:u1,property:Vv}=Laya,gn=class extends Laya.Script{constructor(){super()}onEnable(){var e=this.getDataSourece();Laya.loader.load("prefab/ComboList.lh").then(i=>{let n=i.create();this.comboList=n,this.comboList.array=e,this.comboList.repeatY=e.length,this.combo2.list=this.comboList,this.combo2.list.width=this.combo2.width,this.combo2.list.hScrollBarSkin="",this.combo2.selectHandler=new Laya.Handler(this,this.onSelected2)}),this.combo1.selectHandler=new Laya.Handler(this,this.onSelected1)}onSelected1(e){this.selectedText.text="您选中了："+this.combo1.selectedLabel}onSelected2(e){this.selectedText.text="您选中了："+(e<0?"":this.comboList.array[e].label)}getDataSourece(){for(var e=[],i=0;i<10;i++)e[i]={optText:{text:"选项"+(i+1)}};return e}onDisable(){}};p([Vv({type:Laya.ComboBox})],gn.prototype,"combo1",2),p([Vv({type:Laya.ComboBox})],gn.prototype,"combo2",2),p([Vv({type:Laya.Label})],gn.prototype,"selectedText",2),gn=p([u1("M6bGyqDSRCGU3TkvNeqvRw")],gn);var kb=class extends Laya.View{};var{regClass:p1}=Laya,Tl=class extends kb{onEnable(){this.hList.array=this.getListDataSource(),this.hList.scrollTo(1);let e=this.hList.cells[1].getChildByName("icon");e.scaleX=e.scaleY=2,this.hList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange),this.leftLimit=this.getLeftLimit(),this.rightLimit=this.getRightLimit()}onScrollBarChange(){var e=this.hList.scrollBar.value,i=this.hList.array;if(e>this.leftLimit){var n=i.shift();i[i.length]=n,this.hList.array=i,this.hList.scrollBar.value=e-this.hList.cells[0].width-this.hList.spaceX,this.iconTweenToLeft()}else e<this.rightLimit&&(n=i.pop(),i.unshift(n),this.hList.array=i,this.hList.scrollBar.value=e+this.hList.cells[0].width+this.hList.spaceX,this.iconTweenToRight())}iconTweenToLeft(e=200){let i=this.hList.cells[0].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},e);let n=this.hList.cells[1].getChildByName("icon");n.scaleX=n.scaleY=1,Laya.Tween.to(n,{scaleX:2,scaleY:2},e)}iconTweenToRight(e=200){let i=this.hList.cells[1].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},e);let n=this.hList.cells[2].getChildByName("icon");n.scaleX=n.scaleY=1,Laya.Tween.to(n,{scaleX:2,scaleY:2},e)}getRightLimit(){return this.hList.cells[0].width-this.hList.spaceX}getLeftLimit(){return this.hList.cells[0].width*2+this.hList.spaceX}getListDataSource(e=5){let i=[];for(let n=0;n<e;n++)i[n]={},i[n].icon={skin:`resources/UI/role/r${n}.png`};return i}};Tl=p([p1("WFag7yYwR9q-iI31OJUedg")],Tl);var{regClass:m1,property:Ab}=Laya,Ha=class extends Laya.Script{constructor(){super();this.optStatus=[];this.timestampFormat=(e,i)=>{let n=i?new Date(i):new Date,r={"M+":n.getMonth()+1,"D+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"S+":n.getMilliseconds()};new RegExp("(Y+)").test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in r)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==1?r[o]:("00"+r[o]).substr((""+r[o]).length)));return e}}onEnable(){let e="resources/json/mailList.json";Laya.loader.fetch(e,"json").then(i=>{let n=i.mailList;n&&n.length>0&&(this.mailList.array=n,this.mailList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.mailList.repeatY=n.length,this.mailList.vScrollBarSkin=""),this.addMail.on(Laya.Event.CLICK,this,this.addMialItem),this.selectDel.on(Laya.Event.CLICK,this,this.listSelectDel),this.selectFlag.on(Laya.Event.CLICK,this,this.listSelectFlag)})}listSelectFlag(){if(this.optStatus.length>0){for(let e=0;e<this.optStatus.length;e++){let i=this.optStatus[e];this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功标记"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}listSelectDel(){if(this.optStatus.length>0){this.optStatus.sort(function(e,i){return i-e});for(let e=0;e<this.optStatus.length;e++)this.mailList.array.splice(this.optStatus[e],1);this.optStatus=[],this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功删除"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}addMialItem(){var e=this.mailList.startIndex+1;let i={mailTitle:{text:"这里是新增加的邮件"+e},mailDateTime:{text:this.timestampFormat("YYYY-MM-DD hh:mm")},opt:{visible:!1},flagStatus:{skin:"resources/UI/images/comp/img_mail.png"},flagBtn:{label:"标为已读",labelColors:"#000000,#000000,#000000"}};if(this.mailList.array.splice(e,0,i),this.optStatus.length>0)for(let n=0;n<this.optStatus.length;n++)this.optStatus[n]>=e&&(this.optStatus[n]+=1);this.mailList.refresh()}onListMouse(e,i){if(e.type==Laya.Event.CLICK){var n=this.optStatus.indexOf(i);switch(e.target.name){case"optBG":n===-1?(this.mailList.array[i].opt={visible:!0},this.optStatus.push(i)):(this.mailList.array[i].opt={visible:!1},this.optStatus.splice(n,1)),this.mailList.refresh();break;case"mailTitle":Laya.Scene.open("scenes/uiDemo/Dialog.scene",!1,{title:this.mailList.array[i].mailTitle.text,text:"邮件内容，此处省略1000字……………………"}),this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"},this.mailList.refresh();break;case"flagBtn":this.mailList.array[i].flag===1?(this.mailList.array[i].flag=0,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail.png"},this.mailList.array[i].flagBtn={label:"标为已读",labelColors:"#000000,#000000,#000000"}):(this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}),this.mailList.refresh();break;case"delBtn":if(this.mailList.array.splice(i,1),n>-1){this.optStatus.splice(n,1);for(let r=n;r<this.optStatus.length;r++)this.optStatus[r]-=1}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"删除成功"});break}}}};p([Ab({type:Laya.List})],Ha.prototype,"mailList",2),p([Ab({type:Laya.Button})],Ha.prototype,"addMail",2),p([Ab({type:Laya.Button})],Ha.prototype,"selectDel",2),p([Ab({type:Laya.Button})],Ha.prototype,"selectFlag",2),Ha=p([m1("HzpJPDUEQN69Xg1VasHb-w")],Ha);var{regClass:d1,property:Io}=Laya,ji=class extends Laya.Script{constructor(){super();this.scrollBarIsStop=!1;this.msgIdNow=1;this.itemIsOpen=!1;this.itemOpenId=-1;this.redHotStatus=[];this.mouseDown=!1}onEnable(){this.refreshList.array=this.createListData(9),this.refreshList.repeatY=this.refreshList.array.length,this.refreshList.vScrollBarSkin="",this.toLine.on(Laya.Event.CLICK,this,this.onToLineBtn),this.toTop.on(Laya.Event.CLICK,this,this.onToTopBtn),this.toBottom.on(Laya.Event.CLICK,this,this.onToBottomBtn),this.refreshList.on(Laya.Event.MOUSE_UP,this,this.stageOnMouseUp),this.refreshList.on(Laya.Event.MOUSE_OUT,this,this.stageOnMouseUp),this.refreshList.scrollBar.stopMoveLimit=this.scrollBarIsStopBind.bind(this),this.refreshLimit("dragTopLimit",80),this.refreshLimit("dragBottomLimit",80,20),this.refreshList.mouseHandler=new Laya.Handler(this,this.onListMouse)}stageOnMouseUp(){this.mouseDown=!1}refreshLimit(e,i,n=0,r=2e3){e==="dragTopLimit"?this.refreshList.scrollBar.topMoveLimit=i:e==="dragBottomLimit"&&(this.refreshList.scrollBar.bottomMoveLimit=i),this.refreshList.scrollBar.on(e,this,()=>{if(console.log("达到了滚动限制:"+e),this.refreshLoading.visible=!0,e==="dragTopLimit"){this.refreshLoading.bottom=NaN,this.refreshLoading.top=n;var o=this.createListData(5,"顶部新增的标题");o=o.concat(this.refreshList.array);var s=0+5,l=0;if(this.redHotStatus.length>0)for(let c=0;c<this.redHotStatus.length;c++)this.redHotStatus[c]+=5}else if(e==="dragBottomLimit"){this.refreshList.scrollBar.disableDrag=!0,this.refreshLoading.top=NaN,this.refreshLoading.bottom=n;var o=this.createListData(5,"底部新增的标题");o=this.refreshList.array.concat(o);var s=this.refreshList.array.length-1,l=s+5}this.scrollBarIsStop=!0,Laya.timer.once(r,this,()=>{this.refreshList.array=o,this.refreshList.scrollTo(l),this.refreshList.selectedIndex=s,this.scrollBarIsStop=!1,this.refreshList.scrollBar.backToNormal(),this.refreshLoading.visible=!1})})}onListMouse(e,i){e.type==Laya.Event.MOUSE_DOWN&&(this.mouseDown=!0,this.itemIsOpen?(this.itemIsOpen=!1,this.itemOpenId=-1,Laya.Tween.to(this.openedItem,{x:0},500,null,Laya.Handler.create(this,()=>{this.refreshList.scrollBar.disableDrag=!1}))):(this.moveLastPos=e.target.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),e.target.on(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove,[e.target,i]))),e.type==Laya.Event.MOUSE_UP&&(this.mouseDown=!1,this.itemOnMouseUp()),e.type==Laya.Event.CLICK&&(e.target.name=="flag"&&this.onClickFlag(i),e.target.name=="del"&&this.onClickDel(i))}itemOnMouseUp(){if(this.itemIsOpen){var e;this.openedItem.x<-80?e=-262:(this.itemIsOpen=!1,e=0),e!==this.openedItem.x&&Laya.Tween.to(this.openedItem,{x:e},500),this.refreshList.scrollBar.disableDrag=!1,this.itemOpenId!==-1&&(this.openedItem.off(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove),this.itemOpenId=-1)}}onClickFlag(e){var i=this.redHotStatus.indexOf(e);i==-1?(this.refreshList.array[e].avatar={},this.refreshList.array[e].avatar.redHot={visible:!0},this.refreshList.array[e].flag={flagText:{text:"标记已读"}},this.redHotStatus.push(e)):(this.refreshList.array[e].avatar={redHot:{visible:!1}},this.refreshList.array[e].flag={flagText:{text:"标记未读"}},this.redHotStatus.splice(i,1)),this.refreshList.refresh()}onClickDel(e){this.refreshList.array.splice(e,1),this.itemOpenId=-1;var i=this.redHotStatus.indexOf(e);if(i>-1&&this.redHotStatus.splice(e,1),this.redHotStatus.length>0)for(let n=0;n<this.redHotStatus.length;n++)this.redHotStatus[n]>e&&(this.redHotStatus[n]+=1);this.refreshList.refresh()}onItemBoxMouseMove(e,i){if(this.mouseDown){let n=e.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),r=this.moveLastPos.x-n.x,o=this.moveLastPos.y-n.y;Math.abs(r)>Math.abs(o)&&!this.itemIsOpen&&(this.openedItem=e,this.itemIsOpen=!0,this.refreshList.scrollBar.disableDrag=!0,this.itemOpenId=i),this.itemIsOpen&&(this.openedItem.x-=r,this.openedItem.x<-262?this.openedItem.x=-262:this.openedItem.x>0&&(this.openedItem.x=0))}else this.refreshList.scrollBar.disableDrag=!1}scrollBarIsStopBind(){return this.scrollBarIsStop}onToLineBtn(){let e=parseInt(this.lineNumber.text)-1;this.refreshList.scrollTo(e),e<this.refreshList.array.length&&(this.refreshList.selectedIndex=e)}onToTopBtn(){this.refreshList.scrollTo(0),this.refreshList.selectedIndex=0}onToBottomBtn(){let e=this.refreshList.array.length-1;this.refreshList.scrollTo(e),this.refreshList.selectedIndex=e}createListData(e=5,i="初始测试标题"){let n=new Date,r=n.getHours()<10?"0"+n.getHours():""+n.getHours(),o=n.getMinutes()<10?"0"+n.getMinutes():""+n.getMinutes();for(var s=[],l=0;l<e;l++){let c={text:r+" : "+o};s[l]={},s[l].msgTime=c,s[l].msgTitle={text:i+(this.msgIdNow+l)},s[l].avatar={redHot:{visible:!1}}}return this.msgIdNow+=l,s}onDisable(){}};p([Io({type:Laya.List})],ji.prototype,"refreshList",2),p([Io({type:Laya.Button})],ji.prototype,"toLine",2),p([Io({type:Laya.Button})],ji.prototype,"toTop",2),p([Io({type:Laya.Button})],ji.prototype,"toBottom",2),p([Io({type:Laya.Box})],ji.prototype,"refreshLoading",2),p([Io({type:Laya.Label})],ji.prototype,"lineNumber",2),ji=p([d1("m0TR8w0gTbWSvHbZTzrORA")],ji);var Db=class extends Laya.View{};var{regClass:h1,property:kIe}=Laya,Sl=class extends Db{onEnable(){this.tree1.xml=this.getTreeData(!0),this.tree2.xml=this.getTreeData(!1)}getTreeData(t){let e="<data>";if(t)e+="<dir itemLabel='一级目录一' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><dir itemLabel='一级目录二' isOpen='true'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/></dir><dir itemLabel='一级目录三' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><file itemLabel='一级子项1 '/><file itemLabel='一级子项2 '/>";else for(let i=0;i<5;i++){e+="<item title='目录"+(i+1)+"' isOpen='true'>";for(let n=0;n<5;n++)e+="<subpage title='子项标题"+(n+1)+"' />";e+="</item>"}return e+="</data>",new Laya.XML(e)}};Sl=p([h1("GJWtWFwsQoqNpjA1k42SpQ")],Sl);var Mb=class extends Laya.Scene{};var{regClass:f1,property:PIe}=Laya,Cl=class extends Mb{onEnable(){}onDisable(){}};Cl=p([f1("JQ1fkq03ThewqQWRXQPgmw")],Cl);var{regClass:y1,property:OIe}=Laya,$n=class extends Laya.Script{constructor(){super()}baseUI(e){this.window=e,this.searchCloseButton(e)}searchCloseButton(e){for(let i=0;i<e.numChildren;i++){let n=e.getChildAt(i);n instanceof Laya.Button&&n.name=="closeBtn"?(n.on(Laya.Event.MOUSE_DOWN,this,()=>{this.window.close()}),console.log("baseUI 发现closeBtn，统一添加关闭事件")):this.searchCloseButton(n)}}onDisable(){}};$n=p([y1("7Fkz4T7JQ5ujwNcIx9lGNA")],$n);var{regClass:b1,property:VIe}=Laya,kl=class extends $n{constructor(){super()}onEnable(){this.ui=this.owner,this.baseUI(this.ui)}onDisable(){}};kl=p([b1("utN7JQs_T3iw6KqWT-beFQ")],kl);var Bb=class extends Laya.Box{};var{regClass:g1,property:KIe}=Laya,rw=Laya.Event,ow=Laya.Mouse,Al=class extends Bb{constructor(){super()}onEnable(){Laya.Browser.onPC?(this.panel.on(rw.MOUSE_OVER,this,()=>{ow.cursor="move"}),this.panel.on(rw.MOUSE_OUT,this,()=>{ow.cursor="auto"})):this.topLab.text="背景可拖拽，双指缩放改变大小"}};Al=p([g1("9s1SW9WKRrSodo6JY27VSw")],Al);var{regClass:v1,property:Pb}=Laya,Ua=class extends Laya.Script{constructor(){super()}onEnable(){this.graphics=this.graphicsSprite.graphics,Laya.timer.loop(2e3,this,()=>{this.changeImgSkin(),this.changeSpriteTexture(),this.changeFillTexture(),this.changeTexture()})}changeImgSkin(){this.Img.skin=this.randomImg()}changeSpriteTexture(){this.spImg.loadImage(this.randomImg(!0,6,5))}changeFillTexture(){this.graphics.clear();let e=this.randomImg(!0,4);Laya.loader.load(e).then(i=>{this.graphics.fillTexture(i,0,0,1,1)})}changeTexture(){this.textureImg.graphics.clear();let e=Laya.loader.getRes(this.randomImg(!0,8));this.textureImg.graphics.drawTexture(e)}randomImg(e=!1,i=8,n=1){let r=Math.floor(Math.random()*(i-n+1))+n;return e?"resources/UI/role/m"+r+".png":"resources/UI/role/w"+r+".png"}onDisable(){}};p([Pb({type:Laya.Image})],Ua.prototype,"Img",2),p([Pb({type:Laya.Sprite})],Ua.prototype,"spImg",2),p([Pb({type:Laya.Sprite})],Ua.prototype,"graphicsSprite",2),p([Pb({type:Laya.Sprite})],Ua.prototype,"textureImg",2),Ua=p([v1("ulgCMWfCQKiihSJynpbJFg")],Ua);var Rb=class extends Laya.View{};var{regClass:L1,property:ZIe}=Laya,Nb=Laya.Event,Dl=class extends Rb{onEnable(){this._hitArea.on(Nb.MOUSE_DOWN,this,()=>{this._hitArea.off(Nb.MOUSE_MOVE,this,this.bg3MaskMove),this._hitArea.startDrag(),this._hitArea.on(Nb.MOUSE_MOVE,this,this.bg3MaskMove)}),this._mask.on(Nb.MOUSE_MOVE,this,this.maskMove)}bg3MaskMove(t){t.stopPropagation(),this.bg3Mask.x=this._hitArea.x,this.bg3Mask.y=this._hitArea.y}maskMove(){let t=this.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),e=t.x-this._mask.width/this.bg2.scaleX/2,i=t.y-this._mask.height/this.bg2.scaleY/2;e>80&&i>80&&(this._mask.x=t.x-this._mask.width/this.bg2.scaleX/2,this._mask.y=t.y-this._mask.height/this.bg2.scaleY/2,this.bg2.x=(-t.x-this._mask.width/2)*(this.bg2.scaleX-1),this.bg2.y=(-t.y-this._mask.height/2)*(this.bg2.scaleY-1))}};Dl=p([L1("zt0rBsEST9KVJgcimd7SFA")],Dl);var{regClass:_1,property:Xn}=Laya,Si=class extends Laya.Script{constructor(){super()}onEnable(){this.changeMouseCursor(),this.throughTab.selectHandler=new Laya.Handler(this,this.onSwitchTab)}onSwitchTab(e){switch(e){case 0:this.leftBg.hitTestPrior=!0,this.rightBg.hitTestPrior=!0;break;case 1:this.leftBg.hitTestPrior=!1,this.rightBg.hitTestPrior=!1;break}}changeMouseCursor(){this.leftBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.leftBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.rightBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.rightBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.leftBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧的可点击区域",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.leftBg.name)}),this.rightBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧的可点击区域",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.rightBg.name)}),this.btn1.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮1"}),console.log("click btn1")}),this.btn2.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮2"}),console.log("click btn2")}),this.close1.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧关闭按钮",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.close1.name)}),this.close2.on(Laya.Event.CLICK,this,e=>{e.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧关闭按钮",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.close2.name)})}onDisable(){}};p([Xn({type:Laya.Tab})],Si.prototype,"throughTab",2),p([Xn({type:Laya.Sprite})],Si.prototype,"leftBg",2),p([Xn({type:Laya.Sprite})],Si.prototype,"rightBg",2),p([Xn({type:Laya.Button})],Si.prototype,"btn1",2),p([Xn({type:Laya.Button})],Si.prototype,"btn2",2),p([Xn({type:Laya.Sprite})],Si.prototype,"close1",2),p([Xn({type:Laya.Sprite})],Si.prototype,"close2",2),Si=p([_1("AmLUThtNSaW6zL9W205gyg")],Si);var{regClass:x1,property:Ob}=Laya,Va=class extends Laya.Script{onEnable(){this.bTop.getComponent(Laya.BoxCollider).width=this.bTop.width,this.bBottom.getComponent(Laya.BoxCollider).width=this.bBottom.width,this.bRight.getComponent(Laya.BoxCollider).height=this.bRight.height,this.bLeft.getComponent(Laya.BoxCollider).height=this.bLeft.height}};p([Ob({type:Laya.Image})],Va.prototype,"bTop",2),p([Ob({type:Laya.Image})],Va.prototype,"bBottom",2),p([Ob({type:Laya.Image})],Va.prototype,"bRight",2),p([Ob({type:Laya.Image})],Va.prototype,"bLeft",2),Va=p([x1("jp5l8WZtQLuVyfU4ljEFyQ")],Va);var Hb=class extends Laya.View{};var{regClass:w1,property:lEe}=Laya,Ml=class extends Hb{onEnable(){this.testProgress()}testProgress(){this.loading2.value=.01,this.loadText.text="资源加载中……",Laya.timer.loop(100,this,this.changeProgress)}changeProgress(){this.loading2.value+=.05,this.loading2.value==1&&(this.loadText.text="资源加载完成",Laya.timer.clear(this,this.changeProgress),Laya.timer.once(3e3,this,()=>{this.testProgress()}))}};Ml=p([w1("9w97n2rXRjiACN_vzizQPw")],Ml);var{regClass:I1,property:pEe}=Laya,vn=class extends Laya.Script{constructor(){super()}onStart(){this._anim=this.owner.getComponent(Laya.Animator)}isPlayanimaByName(e=0){let i=this._anim.getControllerLayer(e);if(i==null)return!1;let n=i.getCurrentPlayState();return n==null?!1:n.animatorState.clip.islooping?!0:n._finish}isSameByName(e,i=0){let n=this._anim.getControllerLayer(i);if(n==null)return!1;let r=n.getCurrentPlayState();if(r==null)return!1;if(r.animatorState.name==e)return!0}playAnim(e,i=!1){if(i){if(this.isSameByName(e))return;this._anim.play(e,0,0);return}this.isPlayanimaByName()||this._anim.play(e,0,0)}};vn=p([I1("q0uAMn-DTUm70T4fGtxGlw")],vn);var ct=Laya.InputManager,{regClass:E1,property:vEe}=Laya,Bl=class extends Laya.Script{constructor(){super(...arguments);this.currRockerBar=null;this.maxDistance=80;this.isMouseDown=!1;this.mouseDownPosition=new Laya.Point;this._currentMouse=new Laya.Point;this.initRockerBarPosition=new Laya.Point;this.key1Pressed=!1;this.key2Pressed=!1;this.key3Pressed=!1;this.key4Pressed=!1;this.key5Pressed=!1;this.key6Pressed=!1;this.directionOffset=0;this.isKeyRun=!1}onEnable(){Laya.InputManager.multiTouchEnabled=!0}onStart(){this.currRockerBar=this.owner.getChildByName("freebar"),this.img_freebar_arrow=this.owner.getChildByName("img_freebar_arrow"),this.freetrack=this.owner.getChildByName("freetrack"),this.img_arrow_left=this.freetrack.getChildByName("img_arrow_left"),this.img_arrow_right=this.freetrack.getChildByName("img_arrow_right"),this.img_arrow_up=this.freetrack.getChildByName("img_arrow_up"),this.img_arrow_down=this.freetrack.getChildByName("img_arrow_down"),this.img_freebar_arrow.visible=!1,Laya.Browser.onPC?this.freetrack.visible=!0:this.img_arrow_left.visible=this.img_arrow_right.visible=this.img_arrow_up.visible=this.img_arrow_down.visible=!1,this.initialise()}initialise(){this.initRockerBarPosition.setTo(this.currRockerBar.x,this.currRockerBar.y),this.currRockerBar.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onMouseUp)}onSkillKeyDown(e,i,n){switch(e.stopPropagation(),i){case 1:this.key1Pressed=n;break;case 2:this.key2Pressed=n;break;case 3:this.key3Pressed=n;break}}onMouseDown(e){F.instance.stopAll||(e.stopPropagation(),this.isMouseDown=!0,this.currRockerBar.selected=!0,Laya.Browser.onPC||(this.freetrack.visible=!0),this.mouseDownPosition.setTo(this.owner.mouseX,this.owner.mouseY),console.log("onMouseDown this.owner.mouse: ",this.owner.mouseX,this.owner.mouseY),this.isKeyRun=!1,this.touchId=e.touchId)}onMouseUp(e){this.isMouseDown&&this.endClick(e)}endClick(e){this.isMouseDown=!1,this.currRockerBar.x=this.initRockerBarPosition.x,this.currRockerBar.y=this.initRockerBarPosition.y,this.currRockerBar.selected=!1,this.setDir(-4)}onMouseMove(e){if(!this.isMouseDown||!this.currRockerBar)return;e.stopPropagation(),this._currentMouse.setTo(e.stageX,e.stageY);let i=this.owner.globalToLocal(this._currentMouse,!1),n=i.x-this.mouseDownPosition.x,r=i.y-this.mouseDownPosition.y;if(Math.sqrt(n**2+r**2)<this.maxDistance)this.currRockerBar.x=this.initRockerBarPosition.x+n,this.currRockerBar.y=this.initRockerBarPosition.y+r;else{let s=Math.atan2(n,r);this.currRockerBar.x=Math.sin(s)*this.maxDistance+this.initRockerBarPosition.x,this.currRockerBar.y=Math.cos(s)*this.maxDistance+this.initRockerBarPosition.y}if(Math.abs(n)>this.directionOffset||Math.abs(r)>this.directionOffset){let s=Pt.judgePosition(n,r);this.setDir(s)}}onUpdate(){F.instance.stopAll||this.getKeyboardPressed()}setDir(e){if(this.lastDirection!=e&&(O.instance.setMyHeroDirection(e),this.lastDirection=e),e==-4)this.img_freebar_arrow.visible=!1;else{this.img_freebar_arrow.visible=!0;let i=e+90;this.img_freebar_arrow.rotation=i}}getKeyboardPressed(){if(ct.hasKeyDown(Laya.Keyboard.W)&&ct.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(225)):ct.hasKeyDown(Laya.Keyboard.W)&&ct.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(315)):ct.hasKeyDown(Laya.Keyboard.S)&&ct.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(135)):ct.hasKeyDown(Laya.Keyboard.S)&&ct.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(45)):ct.hasKeyDown(Laya.Keyboard.W)?(this.isKeyRun=!0,this.setDir(270)):ct.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(0)):ct.hasKeyDown(Laya.Keyboard.S)?(this.isKeyRun=!0,this.setDir(90)):ct.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(180)):this.isKeyRun&&this.setDir(-4),ct.hasKeyDown(Laya.Keyboard.H)||ct.hasKeyDown(Laya.Keyboard.NUMPAD_1)){if(this.key1Pressed)return;this.key1Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,1),Laya.timer.once(500,this,this.notKey1Pressed)}if(ct.hasKeyDown(Laya.Keyboard.J)||ct.hasKeyDown(Laya.Keyboard.NUMPAD_2)){if(this.key2Pressed)return;this.key2Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,2),Laya.timer.once(500,this,this.notKey2Pressed)}if(ct.hasKeyDown(Laya.Keyboard.K)||ct.hasKeyDown(Laya.Keyboard.NUMPAD_3)){if(this.key3Pressed)return;this.key3Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,3),Laya.timer.once(500,this,this.notKey3Pressed)}if(ct.hasKeyDown(Laya.Keyboard.L)||ct.hasKeyDown(Laya.Keyboard.NUMPAD_4)){if(this.key4Pressed)return;this.key4Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,4),Laya.timer.once(500,this,this.notKey4Pressed)}if(ct.hasKeyDown(Laya.Keyboard.M)||ct.hasKeyDown(Laya.Keyboard.NUMPAD_5)){if(this.key5Pressed)return;this.key5Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,5),Laya.timer.once(500,this,this.notKey5Pressed)}if(ct.hasKeyDown(Laya.Keyboard.N)||ct.hasKeyDown(Laya.Keyboard.NUMPAD_6)){if(this.key6Pressed)return;this.key6Pressed=!0,y.intance.event(h.EVENT_CLICK_NUM,6),Laya.timer.once(500,this,this.notKey6Pressed)}}notKey1Pressed(){this.key1Pressed=!1}notKey2Pressed(){this.key2Pressed=!1}notKey3Pressed(){this.key3Pressed=!1}notKey4Pressed(){this.key4Pressed=!1}notKey5Pressed(){this.key5Pressed=!1}notKey6Pressed(){this.key6Pressed=!1}getKeyPressed(e){var i=e.toParentPoint(new Laya.Point(e.x,e.y));return i.x>e.x&&i.x<e.x+e.width&&i.y>e.y&&i.y<e.y+e.height}getDistance(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}onDisable(){Laya.InputManager.multiTouchEnabled=!1}};Bl=p([E1("7cTqWb35RwygSkuWy4QkgQ")],Bl);var Eo=class{static playSkillEffect(t,e,i){var n=["Attack01","Attack02","Attack03","Attack04"],r=n[e];Laya.Sprite3D.load(t,Laya.Handler.create(null,function(o){i.addChild(o);var s=o.getChildByName(r);s.active=!0;var l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play(),setTimeout(()=>{o.removeSelf()},1e3)}))}static playEnemyHurtSkillEffect(t,e){Laya.Sprite3D.load(t,Laya.Handler.create(null,function(i){e.addChild(i);var n="Attack",r=i.getChildByName(n),o=r.getComponent(Laya.ShurikenParticleRenderer);if(o._particleSystem.play(),r.numChildren>0)for(let c=0;c<r.numChildren;c++){var s=r.getChildAt(c),l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}static playNormalEffect(t,e){Laya.Sprite3D.load(t,Laya.Handler.create(null,function(i){e.addChild(i);var n=i,r=n.getComponent(Laya.ShurikenParticleRenderer);if(r._particleSystem.play(),n.numChildren>0)for(let l=0;l<n.numChildren;l++){var o=n.getChildAt(l),s=o.getComponent(Laya.ShurikenParticleRenderer);s._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}};var{regClass:T1,property:sw}=Laya,Qn=class extends Laya.Script{constructor(){super();this.followTarget=null;this.speed=.02;this.mLife=5;this.mIsEnd=!1;this.mIsAttack=!1;this.mIsAttackStart=!1;this.mCanPlayFirst=!0;this.mAttackDelayTime=0;this.mCurrentIndex=0;this.followTarget=O.instance.getCurrentHero()}onUpdate(){if(!this.mIsEnd){this.followTarget==null&&(this.followTarget=O.instance.getCurrentHero());var e=new Laya.Vector3(this.followTarget.transform.position.x,0,this.followTarget.transform.position.z),i=new Laya.Vector3(this.owner.transform.position.x,0,this.owner.transform.position.z),n=Laya.Vector3.distance(e,i);if(n<10)if(n<=1)this.mIsAttack?this.isAttackendByPlayer():(this.mCanPlayFirst?(this.mCanPlayFirst=!1,this.attackPlayer()):(this.mAttackDelayTime=this.mAttackDelayTime+Laya.timer.delta,this.mAttackDelayTime>1e3&&(this.mAttackDelayTime=0,this.attackPlayer())),this.mIsAttackStart=!1),O.instance.insertValidList(this.owner);else{this.mAttackDelayTime=0;var r=new Laya.Vector3;Laya.Vector3.subtract(e,i,r),Laya.Vector3.normalize(r,r),this.owner.transform.lookAt(e,Laya.Vector3.Up);var o=this.owner.transform.position;o.vadd(new Laya.Vector3(r.x*this.speed,0,r.z*this.speed),o),this.owner.transform.position=o,this.anim&&this.anim.playAnim("run",!0),this.mCanPlayFirst=!0,this.mIsAttackStart=!1,this.mIsAttack=!1}else this.anim&&this.anim.playAnim("ldle",!0),O.instance.removeValidListByValue(this.owner);this.mLife<=0&&(this.mIsEnd=!0,this.anim&&this.anim.playAnim("die",!0),setTimeout(()=>{O.instance.removeValidListByValue(this.owner),this.owner.removeSelf();var s=O.instance.getCurrentPlane(),l=this.mCurrentIndex;O.instance.createEnemy(s.getChildAt(l),l)},600))}}setCurrentIndex(e){this.mCurrentIndex=e}setLife(e){this.mLife=e}attackPlayer(){Eo.playEnemyHurtSkillEffect("resources/prefab/eff_monster.lh",this.owner.getChildAt(0)),O.instance.playSound(2),this.anim&&this.anim.playAnim("attack",!0),setTimeout(()=>{this.mIsEnd||this.anim&&this.anim.playAnim("ldle",!0)},500)}isAttackendByPlayer(){this.mIsAttackStart||(this.anim&&this.anim.playAnim("shouji",!0),Eo.playNormalEffect("resources/prefab/eff_shouji.lh",this.owner.getChildAt(0)),setTimeout(()=>{this.mIsEnd||(this.anim&&this.anim.playAnim("shouji",!0),this.mIsAttack=!1)},500),this.mIsAttackStart=!0)}getLife(){return this.mLife}setIsAttack(e){this.mIsAttack=e}};p([sw({type:vn})],Qn.prototype,"anim",2),p([sw({type:"number"})],Qn.prototype,"speed",2),Qn=p([T1("eWO-rqURQ6ag7phXtJPZCA")],Qn);var{regClass:S1,property:Pl}=Laya,ma=class extends Laya.Script{constructor(){super();this.animname="";this.force=!1;this.isBig=!1;this.isCanClick=!0}onStart(){y.intance.on(h.EVENT_CLICK_NUM3,this,this.onMouseClick)}onMouseClick(e){this.isCanClick&&(Laya.Tween.to(this.btn_pic,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this.btn_pic,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)})),O.instance.myHeroSpr.getComponent(Kn).catchItem(),O.instance.playSound(1),this.anim1&&(this.anim1.playAnim(this.animname,this.force),setTimeout(()=>{this.anim1.playAnim("idle",this.force),this.isCanClick=!0},500)))}onDestroy(){y.intance.offAllCaller(this)}};p([Pl({type:vn})],ma.prototype,"anim1",2),p([Pl({type:"string"})],ma.prototype,"animname",2),p([Pl({type:"boolean"})],ma.prototype,"force",2),p([Pl({type:"boolean"})],ma.prototype,"isBig",2),p([Pl({type:Laya.Sprite})],ma.prototype,"btn_pic",2),ma=p([S1("xovkzdhOSuOc_JJKi_7s2g")],ma);var{regClass:C1,property:lw}=Laya,Zn=class extends Laya.Script{constructor(){super();this.isBig=!1;this.isCanClick=!0}onStart(){y.intance.on(h.EVENT_CLICK_NUM,this,this.onNumberClick)}onNumberClick(e){e==1?this.isBig||this.onMouseClick(null):this.isBig&&this.onMouseClick(null)}onMouseClick(e){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=O.instance.getValidList();Laya.Tween.to(this,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)}));var n=0;this.isBig?(O.instance.myHeroSpr.attack(),O.instance.playSound(3)):(O.instance.myHeroSpr.attack(),O.instance.playSound(1)),setTimeout(()=>{this.isCanClick=!0},500)}}getDistance(e,i){return Math.sqrt(e*e+i*i)}getDistanceByPoint(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}onDestroy(){y.intance.offAllCaller(this)}};p([lw({type:"boolean"})],Zn.prototype,"isBig",2),p([lw({type:Laya.Sprite})],Zn.prototype,"btn_pic",2),Zn=p([C1("ye1w48wgTbqktuLPDOjmkw")],Zn);var{regClass:k1,property:VEe}=Laya,Rl=class extends Laya.Script{constructor(){super(...arguments);this.maxX=0;this.minX=-90;this.maxY=0;this.minY=-580;this.scaleSize=.1;this.lastDistance=0;this.startedSingleTouchDrag=!1}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),this.onMouseWheel()}onMouseWheel(){this.owner.on(Laya.Event.MOUSE_WHEEL,this,e=>{let i=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY));e.delta>0&&(this.owner.scaleX+=this.scaleSize,this.owner.scaleY+=this.scaleSize),e.delta<0&&(this.owner.scaleX-=this.scaleSize,this.owner.scaleY-=this.scaleSize,this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1));let n=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),r=(n.x-i.x)*this.owner.scaleX,o=(n.y-i.y)*this.owner.scaleY;r+=this.owner.x,o+=this.owner.y,this.updateLimit(),r>this.maxX?this.owner.x=this.maxX:r<this.minX?this.owner.x=this.minX:this.owner.x=r,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o})}onStart(){this.updateLimit()}updateLimit(){let e=this.owner.parent;this.minX=Math.min(e.width-this.owner.width*this.owner.scaleX,0),this.minY=Math.min(e.height-this.owner.height*this.owner.scaleY,0)}onMouseDown(e){if(e.stopPropagation(),e.touches&&e.touches.length>1){this.startedSingleTouchDrag&&(this.owner.stopDrag(),this.startedSingleTouchDrag=!1);let i=this.setPivot(e);!i.x||!i.y?console.log("(((((((((((((((((((((((",this.lastPivot,JSON.parse(JSON.stringify(e.touches))):(this.lastDistance=this.getDistance(e),this.lastPivot=i,this.owner.on(Laya.Event.MOUSE_MOVE,this,this.mouseMove))}else this.owner.startDrag(),this.startedSingleTouchDrag=!0}onMouseUp(e){this.owner.off(Laya.Event.MOUSE_MOVE,this,this.mouseMove)}getDistance(e){var i=0;if(e.touches&&e.touches.length>1){let n=e.touches[0].pos.x-e.touches[1].pos.x,r=e.touches[0].pos.y-e.touches[1].pos.y;i=Math.sqrt(n*n+r*r)}return i}mouseMove(e){let i=this.getDistance(e);this.owner.scaleX+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleY+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1),this.owner.scaleX>5&&(this.owner.scaleX=5),this.owner.scaleY>5&&(this.owner.scaleY=5);let n=this.setPivot(e);if(!n.x||!n.y)console.log("$$$$$$$$$$$",n,JSON.parse(JSON.stringify(e.touches)));else{this.updateLimit();let r=(n.x-this.lastPivot.x)*this.owner.scaleX,o=(n.y-this.lastPivot.y)*this.owner.scaleY;r+=this.owner.x,o+=this.owner.y,r>this.maxX?this.owner.x=this.maxX:r<this.minX?this.owner.x=this.minX:this.owner.x=r,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o,this.lastDistance=i}}setPivot(e){if(e.touches&&e.touches.length>=2){let i=this.owner.globalToLocal(new Laya.Point(e.touches[0].pos.x,e.touches[0].pos.y)),n=this.owner.globalToLocal(new Laya.Point(e.touches[1].pos.x,e.touches[1].pos.y));return new Laya.Point((i.x+n.x)/2,(i.y+n.y)/2)}return this.lastPivot}onUpdate(){this.owner.x>this.maxX&&(this.owner.x=this.maxX),this.owner.x<this.minX&&(this.owner.x=this.minX),this.owner.y>this.maxY&&(this.owner.y=this.maxY),this.owner.y<this.minY&&(this.owner.y=this.minY)}addTestPoint(e,i="#ff0000",n=2){let r=new Laya.Sprite;r.graphics.drawCircle(0,0,n,i),this.owner.addChild(r),r.pos(e.x,e.y)}};Rl=p([k1("c71-MoP2RIyCrdBAfjnIgw")],Rl);var{regClass:A1,property:D1}=Laya,To=class extends Laya.Script{constructor(){super(...arguments);this.tipsText="";this.isDown=!1}onEnable(){this.tipsText.replace(/(^\s*)|(\s*$)/g,"")}onMouseDown(){this.owner.startDrag(),this.isDown=!0}onMouseUp(){this.isDown=!1}onMouseMove(){this.isDown&&Oa.i.collisionWith(this.owner)}onMouseOver(){Laya.Mouse.cursor="move",this.tipsText!==""&&Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:this.tipsText})}onMouseOut(){Laya.Mouse.cursor="auto"}};p([D1({type:"string"})],To.prototype,"tipsText",2),To=p([A1("oWa7FUgoQ6CqtyJh_D1Y2w")],To);var{regClass:M1,property:Nl}=Laya,Ub=Laya.Event,cw=Laya.Point,da=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new cw;this.axisPivot=new cw;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.joystickBG=this.owner,this.joystickAxis=this.owner.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(Ub.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(Ub.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(Ub.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(Ub.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.gameMap.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.gameMap.width/2,this.roleAniNode.y=this.gameMap.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D)}mouseDown(e){this.touchId=e.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let e=this.joystickBG.globalToLocal(this.stageMouse),i=e.x-this.joystickAxis.width/2,n=e.y-this.joystickAxis.height/2;this.radian=Math.atan2(n-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),console.log("radian: "+this.radian+", angle: "+this.angle),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,e.x,e.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(e.x-this.joystickAxis.width/2,e.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(e){if(e=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(e){e.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(e){e.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(e,i){let n=i.split(","),r=360/n.length;return n[Math.floor(e/r)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let e=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;(e<0&&this.gameMap.x<0||e>0&&this.gameMap.x>this.sceneWindow.width-this.gameMap.width)&&(this.gameMap.x-=e),(i<0&&this.gameMap.y<0||i>0&&this.gameMap.y>this.sceneWindow.height-this.gameMap.height)&&(this.gameMap.y-=i)}getDistance(e,i,n,r){let o=e-n,s=i-r;return Math.sqrt(o*o+s*s)}};p([Nl({type:Laya.Prefab})],da.prototype,"roleAni",2),p([Nl({type:"string"})],da.prototype,"runAniName",2),p([Nl({type:"string"})],da.prototype,"standAniName",2),p([Nl({type:Laya.Sprite})],da.prototype,"gameMap",2),p([Nl({type:Laya.Box})],da.prototype,"sceneWindow",2),da=p([M1("Pl5-_PonSLe-7mCnxeXfRw")],da);var{regClass:B1,property:YEe}=Laya,Ol=class extends Laya.Script{constructor(){super();this.isOpen=!0}onEnable(){this.toolbarBG=this.owner.parent,this._owner=this.owner,this.menu=this.owner.parent.getChildByName("menu")}onMouseDown(e){e.stopPropagation(),this.isOpen?(Laya.Tween.to(this.toolbarBG,{width:106},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:52,rotation:540},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!1})),Laya.Tween.to(this.menu,{alpha:0},300,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!1}))):(Laya.Tween.to(this.toolbarBG,{width:460},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:402,rotation:-360},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!0})),Laya.Tween.to(this.menu,{alpha:1},200,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!0})))}onDisable(){}};Ol=p([B1("hPkwKQvKQTaeBeEpHxNUEA")],Ol);})();
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
