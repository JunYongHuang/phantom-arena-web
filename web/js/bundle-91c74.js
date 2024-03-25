"use strict";(()=>{var Iv=Object.create;var ul=Object.defineProperty;var ff=Object.getOwnPropertyDescriptor;var Ev=Object.getOwnPropertyNames;var Sv=Object.getPrototypeOf,Tv=Object.prototype.hasOwnProperty;var $=(a,e)=>()=>(a&&(e=a(a=0)),e);var kv=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports),bf=(a,e)=>{for(var t in e)ul(a,t,{get:e[t],enumerable:!0})},Cv=(a,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ev(e))!Tv.call(a,r)&&r!==t&&ul(a,r,{get:()=>e[r],enumerable:!(i=ff(e,r))||i.enumerable});return a};var Av=(a,e,t)=>(t=a!=null?Iv(Sv(a)):{},Cv(e||!a||!a.__esModule?ul(t,"default",{value:a,enumerable:!0}):t,a));var d=(a,e,t,i)=>{for(var r=i>1?void 0:i?ff(e,t):e,n=a.length-1,o;n>=0;n--)(o=a[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ul(e,t,r),r};var vf=kv((Cd,Ad)=>{"use strict";(function(a,e){typeof Cd=="object"&&typeof Ad<"u"?Ad.exports=e():typeof define=="function"&&define.amd?define(e):(a=typeof globalThis<"u"?globalThis:a||self).jsSHA=e()})(Cd,function(){"use strict";var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function e(x,m,v,L){var k,b,P,H=m||[0],j=(v=v||0)>>>3,J=L===-1?3:0;for(k=0;k<x.length;k+=1)b=(P=k+j)>>>2,H.length<=b&&H.push(0),H[b]|=x[k]<<8*(J+L*(P%4));return{value:H,binLen:8*x.length+v}}function t(x,m,v){switch(m){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(x){case"HEX":return function(L,k,b){return function(P,H,j,J){var fe,X,re,_e;if(P.length%2!=0)throw new Error("String of HEX type must be in byte increments");var K=H||[0],Me=(j=j||0)>>>3,Ce=J===-1?3:0;for(fe=0;fe<P.length;fe+=2){if(X=parseInt(P.substr(fe,2),16),isNaN(X))throw new Error("String of HEX type contains invalid characters");for(re=(_e=(fe>>>1)+Me)>>>2;K.length<=re;)K.push(0);K[re]|=X<<8*(Ce+J*(_e%4))}return{value:K,binLen:4*P.length+j}}(L,k,b,v)};case"TEXT":return function(L,k,b){return function(P,H,j,J,fe){var X,re,_e,K,Me,Ce,Ne,Ye,Yi=0,$t=j||[0],vi=(J=J||0)>>>3;if(H==="UTF8")for(Ne=fe===-1?3:0,_e=0;_e<P.length;_e+=1)for(re=[],128>(X=P.charCodeAt(_e))?re.push(X):2048>X?(re.push(192|X>>>6),re.push(128|63&X)):55296>X||57344<=X?re.push(224|X>>>12,128|X>>>6&63,128|63&X):(_e+=1,X=65536+((1023&X)<<10|1023&P.charCodeAt(_e)),re.push(240|X>>>18,128|X>>>12&63,128|X>>>6&63,128|63&X)),K=0;K<re.length;K+=1){for(Me=(Ce=Yi+vi)>>>2;$t.length<=Me;)$t.push(0);$t[Me]|=re[K]<<8*(Ne+fe*(Ce%4)),Yi+=1}else for(Ne=fe===-1?2:0,Ye=H==="UTF16LE"&&fe!==1||H!=="UTF16LE"&&fe===1,_e=0;_e<P.length;_e+=1){for(X=P.charCodeAt(_e),Ye===!0&&(X=(K=255&X)<<8|X>>>8),Me=(Ce=Yi+vi)>>>2;$t.length<=Me;)$t.push(0);$t[Me]|=X<<8*(Ne+fe*(Ce%4)),Yi+=2}return{value:$t,binLen:8*Yi+J}}(L,m,k,b,v)};case"B64":return function(L,k,b){return function(P,H,j,J){var fe,X,re,_e,K,Me,Ce=0,Ne=H||[0],Ye=(j=j||0)>>>3,Yi=J===-1?3:0,$t=P.indexOf("=");if(P.search(/^[a-zA-Z0-9=+/]+$/)===-1)throw new Error("Invalid character in base-64 string");if(P=P.replace(/=/g,""),$t!==-1&&$t<P.length)throw new Error("Invalid '=' found in base-64 string");for(fe=0;fe<P.length;fe+=4){for(_e=P.substr(fe,4),re=0,X=0;X<_e.length;X+=1)re|=a.indexOf(_e.charAt(X))<<18-6*X;for(X=0;X<_e.length-1;X+=1){for(K=(Me=Ce+Ye)>>>2;Ne.length<=K;)Ne.push(0);Ne[K]|=(re>>>16-8*X&255)<<8*(Yi+J*(Me%4)),Ce+=1}}return{value:Ne,binLen:8*Ce+j}}(L,k,b,v)};case"BYTES":return function(L,k,b){return function(P,H,j,J){var fe,X,re,_e,K=H||[0],Me=(j=j||0)>>>3,Ce=J===-1?3:0;for(X=0;X<P.length;X+=1)fe=P.charCodeAt(X),re=(_e=X+Me)>>>2,K.length<=re&&K.push(0),K[re]|=fe<<8*(Ce+J*(_e%4));return{value:K,binLen:8*P.length+j}}(L,k,b,v)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(L,k,b){return function(P,H,j,J){return e(new Uint8Array(P),H,j,J)}(L,k,b,v)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(L,k,b){return e(L,k,b,v)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function i(x,m,v,L){switch(x){case"HEX":return function(k){return function(b,P,H,j){var J,fe,X="",re=P/8,_e=H===-1?3:0;for(J=0;J<re;J+=1)fe=b[J>>>2]>>>8*(_e+H*(J%4)),X+="0123456789abcdef".charAt(fe>>>4&15)+"0123456789abcdef".charAt(15&fe);return j.outputUpper?X.toUpperCase():X}(k,m,v,L)};case"B64":return function(k){return function(b,P,H,j){var J,fe,X,re,_e,K="",Me=P/8,Ce=H===-1?3:0;for(J=0;J<Me;J+=3)for(re=J+1<Me?b[J+1>>>2]:0,_e=J+2<Me?b[J+2>>>2]:0,X=(b[J>>>2]>>>8*(Ce+H*(J%4))&255)<<16|(re>>>8*(Ce+H*((J+1)%4))&255)<<8|_e>>>8*(Ce+H*((J+2)%4))&255,fe=0;fe<4;fe+=1)K+=8*J+6*fe<=P?a.charAt(X>>>6*(3-fe)&63):j.b64Pad;return K}(k,m,v,L)};case"BYTES":return function(k){return function(b,P,H){var j,J,fe="",X=P/8,re=H===-1?3:0;for(j=0;j<X;j+=1)J=b[j>>>2]>>>8*(re+H*(j%4))&255,fe+=String.fromCharCode(J);return fe}(k,m,v)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(k){return function(b,P,H){var j,J=P/8,fe=new ArrayBuffer(J),X=new Uint8Array(fe),re=H===-1?3:0;for(j=0;j<J;j+=1)X[j]=b[j>>>2]>>>8*(re+H*(j%4))&255;return fe}(k,m,v)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(k){return function(b,P,H){var j,J=P/8,fe=H===-1?3:0,X=new Uint8Array(J);for(j=0;j<J;j+=1)X[j]=b[j>>>2]>>>8*(fe+H*(j%4))&255;return X}(k,m,v)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}var r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],n=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s="Chosen SHA variant is not supported";function l(x,m){var v,L,k=x.binLen>>>3,b=m.binLen>>>3,P=k<<3,H=4-k<<3;if(k%4!=0){for(v=0;v<b;v+=4)L=k+v>>>2,x.value[L]|=m.value[v>>>2]<<P,x.value.push(0),x.value[L+1]|=m.value[v>>>2]>>>H;return(x.value.length<<2)-4>=b+k&&x.value.pop(),{value:x.value,binLen:x.binLen+m.binLen}}return{value:x.value.concat(m.value),binLen:x.binLen+m.binLen}}function c(x){var m={outputUpper:!1,b64Pad:"=",outputLen:-1},v=x||{},L="Output length must be a multiple of 8";if(m.outputUpper=v.outputUpper||!1,v.b64Pad&&(m.b64Pad=v.b64Pad),v.outputLen){if(v.outputLen%8!=0)throw new Error(L);m.outputLen=v.outputLen}else if(v.shakeLen){if(v.shakeLen%8!=0)throw new Error(L);m.outputLen=v.shakeLen}if(typeof m.outputUpper!="boolean")throw new Error("Invalid outputUpper formatting option");if(typeof m.b64Pad!="string")throw new Error("Invalid b64Pad formatting option");return m}function u(x,m,v,L){var k=x+" must include a value and format";if(!m){if(!L)throw new Error(k);return L}if(m.value===void 0||!m.format)throw new Error(k);return t(m.format,m.encoding||"UTF8",v)(m.value)}var p=function(){function x(m,v,L){var k=L||{};if(this.t=v,this.i=k.encoding||"UTF8",this.numRounds=k.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=m,this.u=[],this.s=0,this.h=!1,this.v=0,this.A=!1,this.l=[],this.H=[]}return x.prototype.update=function(m){var v,L=0,k=this.S>>>5,b=this.p(m,this.u,this.s),P=b.binLen,H=b.value,j=P>>>5;for(v=0;v<j;v+=k)L+this.S<=P&&(this.m=this.R(H.slice(v,v+k),this.m),L+=this.S);this.v+=L,this.u=H.slice(L>>>5),this.s=P%this.S,this.h=!0},x.prototype.getHash=function(m,v){var L,k,b=this.U,P=c(v);if(this.T){if(P.outputLen===-1)throw new Error("Output length must be specified in options");b=P.outputLen}var H=i(m,b,this.C,P);if(this.A&&this.F)return H(this.F(P));for(k=this.K(this.u.slice(),this.s,this.v,this.B(this.m),b),L=1;L<this.numRounds;L+=1)this.T&&b%32!=0&&(k[k.length-1]&=16777215>>>24-b%32),k=this.K(k,b,0,this.L(this.o),b);return H(k)},x.prototype.setHMACKey=function(m,v,L){if(!this.g)throw new Error("Variant does not support HMAC");if(this.h)throw new Error("Cannot set MAC key after calling update");var k=t(v,(L||{}).encoding||"UTF8",this.C);this.k(k(m))},x.prototype.k=function(m){var v,L=this.S>>>3,k=L/4-1;if(this.numRounds!==1)throw new Error("Cannot set numRounds with MAC");if(this.A)throw new Error("MAC key already set");for(L<m.binLen/8&&(m.value=this.K(m.value,m.binLen,0,this.L(this.o),this.U));m.value.length<=k;)m.value.push(0);for(v=0;v<=k;v+=1)this.l[v]=909522486^m.value[v],this.H[v]=1549556828^m.value[v];this.m=this.R(this.l,this.m),this.v=this.S,this.A=!0},x.prototype.getHMAC=function(m,v){var L=c(v);return i(m,this.U,this.C,L)(this.Y())},x.prototype.Y=function(){var m;if(!this.A)throw new Error("Cannot call getHMAC without first setting MAC key");var v=this.K(this.u.slice(),this.s,this.v,this.B(this.m),this.U);return m=this.R(this.H,this.L(this.o)),m=this.K(v,this.U,this.S,m,this.U)},x}(),y=function(x,m){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,L){v.__proto__=L}||function(v,L){for(var k in L)Object.prototype.hasOwnProperty.call(L,k)&&(v[k]=L[k])})(x,m)};function _(x,m){function v(){this.constructor=x}y(x,m),x.prototype=m===null?Object.create(m):(v.prototype=m.prototype,new v)}function g(x,m){return x<<m|x>>>32-m}function f(x,m){return x>>>m|x<<32-m}function T(x,m){return x>>>m}function C(x,m,v){return x^m^v}function O(x,m,v){return x&m^~x&v}function N(x,m,v){return x&m^x&v^m&v}function Q(x){return f(x,2)^f(x,13)^f(x,22)}function F(x,m){var v=(65535&x)+(65535&m);return(65535&(x>>>16)+(m>>>16)+(v>>>16))<<16|65535&v}function U(x,m,v,L){var k=(65535&x)+(65535&m)+(65535&v)+(65535&L);return(65535&(x>>>16)+(m>>>16)+(v>>>16)+(L>>>16)+(k>>>16))<<16|65535&k}function W(x,m,v,L,k){var b=(65535&x)+(65535&m)+(65535&v)+(65535&L)+(65535&k);return(65535&(x>>>16)+(m>>>16)+(v>>>16)+(L>>>16)+(k>>>16)+(b>>>16))<<16|65535&b}function se(x){return f(x,7)^f(x,18)^T(x,3)}function ke(x){return f(x,6)^f(x,11)^f(x,25)}function Le(x){return[1732584193,4023233417,2562383102,271733878,3285377520]}function we(x,m){var v,L,k,b,P,H,j,J=[];for(v=m[0],L=m[1],k=m[2],b=m[3],P=m[4],j=0;j<80;j+=1)J[j]=j<16?x[j]:g(J[j-3]^J[j-8]^J[j-14]^J[j-16],1),H=j<20?W(g(v,5),O(L,k,b),P,1518500249,J[j]):j<40?W(g(v,5),C(L,k,b),P,1859775393,J[j]):j<60?W(g(v,5),N(L,k,b),P,2400959708,J[j]):W(g(v,5),C(L,k,b),P,3395469782,J[j]),P=b,b=k,k=g(L,30),L=v,v=H;return m[0]=F(v,m[0]),m[1]=F(L,m[1]),m[2]=F(k,m[2]),m[3]=F(b,m[3]),m[4]=F(P,m[4]),m}function nt(x,m,v,L){for(var k,b=15+(m+65>>>9<<4),P=m+v;x.length<=b;)x.push(0);for(x[m>>>5]|=128<<24-m%32,x[b]=4294967295&P,x[b-1]=P/4294967296|0,k=0;k<x.length;k+=16)L=we(x.slice(k,k+16),L);return L}var kt=function(x){function m(v,L,k){var b=this;if(v!=="SHA-1")throw new Error(s);var P=k||{};return(b=x.call(this,v,L,k)||this).g=!0,b.F=b.Y,b.C=-1,b.p=t(b.t,b.i,b.C),b.R=we,b.B=function(H){return H.slice()},b.L=Le,b.K=nt,b.m=[1732584193,4023233417,2562383102,271733878,3285377520],b.S=512,b.U=160,b.T=!1,P.hmacKey&&b.k(u("hmacKey",P.hmacKey,b.C)),b}return _(m,x),m}(p);function gi(x){return x=="SHA-224"?n.slice():o.slice()}function ee(x,m){var v,L,k,b,P,H,j,J,fe,X,re,_e,K=[];for(v=m[0],L=m[1],k=m[2],b=m[3],P=m[4],H=m[5],j=m[6],J=m[7],re=0;re<64;re+=1)K[re]=re<16?x[re]:U(f(_e=K[re-2],17)^f(_e,19)^T(_e,10),K[re-7],se(K[re-15]),K[re-16]),fe=W(J,ke(P),O(P,H,j),r[re],K[re]),X=F(Q(v),N(v,L,k)),J=j,j=H,H=P,P=F(b,fe),b=k,k=L,L=v,v=F(fe,X);return m[0]=F(v,m[0]),m[1]=F(L,m[1]),m[2]=F(k,m[2]),m[3]=F(b,m[3]),m[4]=F(P,m[4]),m[5]=F(H,m[5]),m[6]=F(j,m[6]),m[7]=F(J,m[7]),m}var me=function(x){function m(v,L,k){var b=this;if(v!=="SHA-224"&&v!=="SHA-256")throw new Error(s);var P=k||{};return(b=x.call(this,v,L,k)||this).F=b.Y,b.g=!0,b.C=-1,b.p=t(b.t,b.i,b.C),b.R=ee,b.B=function(H){return H.slice()},b.L=gi,b.K=function(H,j,J,fe){return function(X,re,_e,K,Me){for(var Ce,Ne=15+(re+65>>>9<<4),Ye=re+_e;X.length<=Ne;)X.push(0);for(X[re>>>5]|=128<<24-re%32,X[Ne]=4294967295&Ye,X[Ne-1]=Ye/4294967296|0,Ce=0;Ce<X.length;Ce+=16)K=ee(X.slice(Ce,Ce+16),K);return Me==="SHA-224"?[K[0],K[1],K[2],K[3],K[4],K[5],K[6]]:K}(H,j,J,fe,v)},b.m=gi(v),b.S=512,b.U=v==="SHA-224"?224:256,b.T=!1,P.hmacKey&&b.k(u("hmacKey",P.hmacKey,b.C)),b}return _(m,x),m}(p),S=function(x,m){this.N=x,this.I=m};function Fe(x,m){var v;return m>32?(v=64-m,new S(x.I<<m|x.N>>>v,x.N<<m|x.I>>>v)):m!==0?(v=32-m,new S(x.N<<m|x.I>>>v,x.I<<m|x.N>>>v)):x}function Ee(x,m){var v;return m<32?(v=32-m,new S(x.N>>>m|x.I<<v,x.I>>>m|x.N<<v)):(v=64-m,new S(x.I>>>m|x.N<<v,x.N>>>m|x.I<<v))}function ot(x,m){return new S(x.N>>>m,x.I>>>m|x.N<<32-m)}function Ct(x,m,v){return new S(x.N&m.N^~x.N&v.N,x.I&m.I^~x.I&v.I)}function At(x,m,v){return new S(x.N&m.N^x.N&v.N^m.N&v.N,x.I&m.I^x.I&v.I^m.I&v.I)}function Mi(x){var m=Ee(x,28),v=Ee(x,34),L=Ee(x,39);return new S(m.N^v.N^L.N,m.I^v.I^L.I)}function lt(x,m){var v,L;v=(65535&x.I)+(65535&m.I);var k=(65535&(L=(x.I>>>16)+(m.I>>>16)+(v>>>16)))<<16|65535&v;return v=(65535&x.N)+(65535&m.N)+(L>>>16),L=(x.N>>>16)+(m.N>>>16)+(v>>>16),new S((65535&L)<<16|65535&v,k)}function ya(x,m,v,L){var k,b;k=(65535&x.I)+(65535&m.I)+(65535&v.I)+(65535&L.I);var P=(65535&(b=(x.I>>>16)+(m.I>>>16)+(v.I>>>16)+(L.I>>>16)+(k>>>16)))<<16|65535&k;return k=(65535&x.N)+(65535&m.N)+(65535&v.N)+(65535&L.N)+(b>>>16),b=(x.N>>>16)+(m.N>>>16)+(v.N>>>16)+(L.N>>>16)+(k>>>16),new S((65535&b)<<16|65535&k,P)}function Za(x,m,v,L,k){var b,P;b=(65535&x.I)+(65535&m.I)+(65535&v.I)+(65535&L.I)+(65535&k.I);var H=(65535&(P=(x.I>>>16)+(m.I>>>16)+(v.I>>>16)+(L.I>>>16)+(k.I>>>16)+(b>>>16)))<<16|65535&b;return b=(65535&x.N)+(65535&m.N)+(65535&v.N)+(65535&L.N)+(65535&k.N)+(P>>>16),P=(x.N>>>16)+(m.N>>>16)+(v.N>>>16)+(L.N>>>16)+(k.N>>>16)+(b>>>16),new S((65535&P)<<16|65535&b,H)}function Nt(x,m){return new S(x.N^m.N,x.I^m.I)}function ro(x){var m=Ee(x,1),v=Ee(x,8),L=ot(x,7);return new S(m.N^v.N^L.N,m.I^v.I^L.I)}function Ki(x){var m=Ee(x,14),v=Ee(x,18),L=Ee(x,41);return new S(m.N^v.N^L.N,m.I^v.I^L.I)}var ga=[new S(r[0],3609767458),new S(r[1],602891725),new S(r[2],3964484399),new S(r[3],2173295548),new S(r[4],4081628472),new S(r[5],3053834265),new S(r[6],2937671579),new S(r[7],3664609560),new S(r[8],2734883394),new S(r[9],1164996542),new S(r[10],1323610764),new S(r[11],3590304994),new S(r[12],4068182383),new S(r[13],991336113),new S(r[14],633803317),new S(r[15],3479774868),new S(r[16],2666613458),new S(r[17],944711139),new S(r[18],2341262773),new S(r[19],2007800933),new S(r[20],1495990901),new S(r[21],1856431235),new S(r[22],3175218132),new S(r[23],2198950837),new S(r[24],3999719339),new S(r[25],766784016),new S(r[26],2566594879),new S(r[27],3203337956),new S(r[28],1034457026),new S(r[29],2466948901),new S(r[30],3758326383),new S(r[31],168717936),new S(r[32],1188179964),new S(r[33],1546045734),new S(r[34],1522805485),new S(r[35],2643833823),new S(r[36],2343527390),new S(r[37],1014477480),new S(r[38],1206759142),new S(r[39],344077627),new S(r[40],1290863460),new S(r[41],3158454273),new S(r[42],3505952657),new S(r[43],106217008),new S(r[44],3606008344),new S(r[45],1432725776),new S(r[46],1467031594),new S(r[47],851169720),new S(r[48],3100823752),new S(r[49],1363258195),new S(r[50],3750685593),new S(r[51],3785050280),new S(r[52],3318307427),new S(r[53],3812723403),new S(r[54],2003034995),new S(r[55],3602036899),new S(r[56],1575990012),new S(r[57],1125592928),new S(r[58],2716904306),new S(r[59],442776044),new S(r[60],593698344),new S(r[61],3733110249),new S(r[62],2999351573),new S(r[63],3815920427),new S(3391569614,3928383900),new S(3515267271,566280711),new S(3940187606,3454069534),new S(4118630271,4000239992),new S(116418474,1914138554),new S(174292421,2731055270),new S(289380356,3203993006),new S(460393269,320620315),new S(685471733,587496836),new S(852142971,1086792851),new S(1017036298,365543100),new S(1126000580,2618297676),new S(1288033470,3409855158),new S(1501505948,4234509866),new S(1607167915,987167468),new S(1816402316,1246189591)];function no(x){return x==="SHA-384"?[new S(3418070365,n[0]),new S(1654270250,n[1]),new S(2438529370,n[2]),new S(355462360,n[3]),new S(1731405415,n[4]),new S(41048885895,n[5]),new S(3675008525,n[6]),new S(1203062813,n[7])]:[new S(o[0],4089235720),new S(o[1],2227873595),new S(o[2],4271175723),new S(o[3],1595750129),new S(o[4],2917565137),new S(o[5],725511199),new S(o[6],4215389547),new S(o[7],327033209)]}function Yt(x,m){var v,L,k,b,P,H,j,J,fe,X,re,_e,K,Me,Ce,Ne,Ye=[];for(v=m[0],L=m[1],k=m[2],b=m[3],P=m[4],H=m[5],j=m[6],J=m[7],re=0;re<80;re+=1)re<16?(_e=2*re,Ye[re]=new S(x[_e],x[_e+1])):Ye[re]=ya((K=Ye[re-2],Me=void 0,Ce=void 0,Ne=void 0,Me=Ee(K,19),Ce=Ee(K,61),Ne=ot(K,6),new S(Me.N^Ce.N^Ne.N,Me.I^Ce.I^Ne.I)),Ye[re-7],ro(Ye[re-15]),Ye[re-16]),fe=Za(J,Ki(P),Ct(P,H,j),ga[re],Ye[re]),X=lt(Mi(v),At(v,L,k)),J=j,j=H,H=P,P=lt(b,fe),b=k,k=L,L=v,v=lt(fe,X);return m[0]=lt(v,m[0]),m[1]=lt(L,m[1]),m[2]=lt(k,m[2]),m[3]=lt(b,m[3]),m[4]=lt(P,m[4]),m[5]=lt(H,m[5]),m[6]=lt(j,m[6]),m[7]=lt(J,m[7]),m}var va=function(x){function m(v,L,k){var b=this;if(v!=="SHA-384"&&v!=="SHA-512")throw new Error(s);var P=k||{};return(b=x.call(this,v,L,k)||this).F=b.Y,b.g=!0,b.C=-1,b.p=t(b.t,b.i,b.C),b.R=Yt,b.B=function(H){return H.slice()},b.L=no,b.K=function(H,j,J,fe){return function(X,re,_e,K,Me){for(var Ce,Ne=31+(re+129>>>10<<5),Ye=re+_e;X.length<=Ne;)X.push(0);for(X[re>>>5]|=128<<24-re%32,X[Ne]=4294967295&Ye,X[Ne-1]=Ye/4294967296|0,Ce=0;Ce<X.length;Ce+=32)K=Yt(X.slice(Ce,Ce+32),K);return Me==="SHA-384"?[(K=K)[0].N,K[0].I,K[1].N,K[1].I,K[2].N,K[2].I,K[3].N,K[3].I,K[4].N,K[4].I,K[5].N,K[5].I]:[K[0].N,K[0].I,K[1].N,K[1].I,K[2].N,K[2].I,K[3].N,K[3].I,K[4].N,K[4].I,K[5].N,K[5].I,K[6].N,K[6].I,K[7].N,K[7].I]}(H,j,J,fe,v)},b.m=no(v),b.S=1024,b.U=v==="SHA-384"?384:512,b.T=!1,P.hmacKey&&b.k(u("hmacKey",P.hmacKey,b.C)),b}return _(m,x),m}(p),Pr=[new S(0,1),new S(0,32898),new S(2147483648,32906),new S(2147483648,2147516416),new S(0,32907),new S(0,2147483649),new S(2147483648,2147516545),new S(2147483648,32777),new S(0,138),new S(0,136),new S(0,2147516425),new S(0,2147483658),new S(0,2147516555),new S(2147483648,139),new S(2147483648,32905),new S(2147483648,32771),new S(2147483648,32770),new S(2147483648,128),new S(0,32778),new S(2147483648,2147483658),new S(2147483648,2147516545),new S(2147483648,32896),new S(0,2147483649),new S(2147483648,2147516424)],ol=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function Rr(x){var m,v=[];for(m=0;m<5;m+=1)v[m]=[new S(0,0),new S(0,0),new S(0,0),new S(0,0),new S(0,0)];return v}function Lv(x){var m,v=[];for(m=0;m<5;m+=1)v[m]=x[m].slice();return v}function sl(x,m){var v,L,k,b,P,H,j,J,fe,X=[],re=[];if(x!==null)for(L=0;L<x.length;L+=2)m[(L>>>1)%5][(L>>>1)/5|0]=Nt(m[(L>>>1)%5][(L>>>1)/5|0],new S(x[L+1],x[L]));for(v=0;v<24;v+=1){for(b=Rr(),L=0;L<5;L+=1)X[L]=(P=m[L][0],H=m[L][1],j=m[L][2],J=m[L][3],fe=m[L][4],new S(P.N^H.N^j.N^J.N^fe.N,P.I^H.I^j.I^J.I^fe.I));for(L=0;L<5;L+=1)re[L]=Nt(X[(L+4)%5],Fe(X[(L+1)%5],1));for(L=0;L<5;L+=1)for(k=0;k<5;k+=1)m[L][k]=Nt(m[L][k],re[L]);for(L=0;L<5;L+=1)for(k=0;k<5;k+=1)b[k][(2*L+3*k)%5]=Fe(m[L][k],ol[L][k]);for(L=0;L<5;L+=1)for(k=0;k<5;k+=1)m[L][k]=Nt(b[L][k],new S(~b[(L+1)%5][k].N&b[(L+2)%5][k].N,~b[(L+1)%5][k].I&b[(L+2)%5][k].I));m[0][0]=Nt(m[0][0],Pr[v])}return m}function df(x){var m,v,L=0,k=[0,0],b=[4294967295&x,x/4294967296&2097151];for(m=6;m>=0;m--)(v=b[m>>2]>>>8*m&255)===0&&L===0||(k[L+1>>2]|=v<<8*(L+1),L+=1);return L=L!==0?L:1,k[0]|=L,{value:L+1>4?k:[k[0]],binLen:8+8*L}}function Ed(x){return l(df(x.binLen),x)}function hf(x,m){var v,L=df(m),k=m>>>2,b=(k-(L=l(L,x)).value.length%k)%k;for(v=0;v<b;v++)L.value.push(0);return L.value}var _v=function(x){function m(v,L,k){var b=this,P=6,H=0,j=k||{};if((b=x.call(this,v,L,k)||this).numRounds!==1){if(j.kmacKey||j.hmacKey)throw new Error("Cannot set numRounds with MAC");if(b.o==="CSHAKE128"||b.o==="CSHAKE256")throw new Error("Cannot set numRounds for CSHAKE variants")}switch(b.C=1,b.p=t(b.t,b.i,b.C),b.R=sl,b.B=Lv,b.L=Rr,b.m=Rr(),b.T=!1,v){case"SHA3-224":b.S=H=1152,b.U=224,b.g=!0,b.F=b.Y;break;case"SHA3-256":b.S=H=1088,b.U=256,b.g=!0,b.F=b.Y;break;case"SHA3-384":b.S=H=832,b.U=384,b.g=!0,b.F=b.Y;break;case"SHA3-512":b.S=H=576,b.U=512,b.g=!0,b.F=b.Y;break;case"SHAKE128":P=31,b.S=H=1344,b.U=-1,b.T=!0,b.g=!1,b.F=null;break;case"SHAKE256":P=31,b.S=H=1088,b.U=-1,b.T=!0,b.g=!1,b.F=null;break;case"KMAC128":P=4,b.S=H=1344,b.M(k),b.U=-1,b.T=!0,b.g=!1,b.F=b.X;break;case"KMAC256":P=4,b.S=H=1088,b.M(k),b.U=-1,b.T=!0,b.g=!1,b.F=b.X;break;case"CSHAKE128":b.S=H=1344,P=b.O(k),b.U=-1,b.T=!0,b.g=!1,b.F=null;break;case"CSHAKE256":b.S=H=1088,P=b.O(k),b.U=-1,b.T=!0,b.g=!1,b.F=null;break;default:throw new Error(s)}return b.K=function(J,fe,X,re,_e){return function(K,Me,Ce,Ne,Ye,Yi,$t){var vi,Sd,ll=0,oo=[],cl=Ye>>>5,xv=Me>>>5;for(vi=0;vi<xv&&Me>=Ye;vi+=cl)Ne=sl(K.slice(vi,vi+cl),Ne),Me-=Ye;for(K=K.slice(vi),Me%=Ye;K.length<cl;)K.push(0);for(K[(vi=Me>>>3)>>2]^=Yi<<vi%4*8,K[cl-1]^=2147483648,Ne=sl(K,Ne);32*oo.length<$t&&(Sd=Ne[ll%5][ll/5|0],oo.push(Sd.I),!(32*oo.length>=$t));)oo.push(Sd.N),64*(ll+=1)%Ye==0&&(sl(null,Ne),ll=0);return oo}(J,fe,0,re,H,P,_e)},j.hmacKey&&b.k(u("hmacKey",j.hmacKey,b.C)),b}return _(m,x),m.prototype.O=function(v,L){var k=function(j){var J=j||{};return{funcName:u("funcName",J.funcName,1,{value:[],binLen:0}),customization:u("Customization",J.customization,1,{value:[],binLen:0})}}(v||{});L&&(k.funcName=L);var b=l(Ed(k.funcName),Ed(k.customization));if(k.customization.binLen!==0||k.funcName.binLen!==0){for(var P=hf(b,this.S>>>3),H=0;H<P.length;H+=this.S>>>5)this.m=this.R(P.slice(H,H+(this.S>>>5)),this.m),this.v+=this.S;return 4}return 31},m.prototype.M=function(v){var L=function(P){var H=P||{};return{kmacKey:u("kmacKey",H.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:u("Customization",H.customization,1,{value:[],binLen:0})}}(v||{});this.O(v,L.funcName);for(var k=hf(Ed(L.kmacKey),this.S>>>3),b=0;b<k.length;b+=this.S>>>5)this.m=this.R(k.slice(b,b+(this.S>>>5)),this.m),this.v+=this.S;this.A=!0},m.prototype.X=function(v){var L=l({value:this.u.slice(),binLen:this.s},function(k){var b,P,H=0,j=[0,0],J=[4294967295&k,k/4294967296&2097151];for(b=6;b>=0;b--)(P=J[b>>2]>>>8*b&255)==0&&H===0||(j[H>>2]|=P<<8*H,H+=1);return j[(H=H!==0?H:1)>>2]|=H<<8*H,{value:H+1>4?j:[j[0]],binLen:8+8*H}}(v.outputLen));return this.K(L.value,L.binLen,this.v,this.B(this.m),v.outputLen)},m}(p);return function(){function x(m,v,L){if(m=="SHA-1")this.j=new kt(m,v,L);else if(m=="SHA-224"||m=="SHA-256")this.j=new me(m,v,L);else if(m=="SHA-384"||m=="SHA-512")this.j=new va(m,v,L);else{if(m!="SHA3-224"&&m!="SHA3-256"&&m!="SHA3-384"&&m!="SHA3-512"&&m!="SHAKE128"&&m!="SHAKE256"&&m!="CSHAKE128"&&m!="CSHAKE256"&&m!="KMAC128"&&m!="KMAC256")throw new Error(s);this.j=new _v(m,v,L)}}return x.prototype.update=function(m){this.j.update(m)},x.prototype.getHash=function(m,v){return this.j.getHash(m,v)},x.prototype.setHMACKey=function(m,v,L){this.j.setHMACKey(m,v,L)},x.prototype.getHMAC=function(m,v){return this.j.getHMAC(m,v)},x}()})});function wf(a,e){return a.exec(e)?.groups}var Lf=$(()=>{"use strict"});function wl(a){let e=a.type;if(_f.test(a.type)&&"components"in a){e="(";let t=a.components.length;for(let r=0;r<t;r++){let n=a.components[r];e+=wl(n),r<t-1&&(e+=", ")}let i=wf(_f,a.type);return e+=`)${i?.array??""}`,wl({...a,type:e})}return"indexed"in a&&a.indexed&&(e=`${e} indexed`),a.name?`${e} ${a.name}`:e}var _f,xf=$(()=>{"use strict";Lf();_f=/^tuple(?<array>(\[(\d*)\])*)$/});function zr(a){let e="",t=a.length;for(let i=0;i<t;i++){let r=a[i];e+=wl(r),i!==t-1&&(e+=", ")}return e}var If=$(()=>{"use strict";xf()});function Dd(a){return a.type==="function"?`function ${a.name}(${zr(a.inputs)})${a.stateMutability&&a.stateMutability!=="nonpayable"?` ${a.stateMutability}`:""}${a.outputs.length?` returns (${zr(a.outputs)})`:""}`:a.type==="event"?`event ${a.name}(${zr(a.inputs)})`:a.type==="error"?`error ${a.name}(${zr(a.inputs)})`:a.type==="constructor"?`constructor(${zr(a.inputs)})${a.stateMutability==="payable"?" payable":""}`:a.type==="fallback"?"fallback()":"receive() external payable"}var Ef=$(()=>{"use strict";If()});var Sf=$(()=>{"use strict";Ef()});function Dt(a,{includeName:e=!1}={}){if(a.type!=="function"&&a.type!=="event"&&a.type!=="error")throw new fo(a.type);return`${a.name}(${ho(a.inputs,{includeName:e})})`}function ho(a,{includeName:e=!1}={}){return a?a.map(t=>Nv(t,{includeName:e})).join(e?", ":","):""}function Nv(a,{includeName:e}){return a.type.startsWith("tuple")?`(${ho(a.components,{includeName:e})})${a.type.slice(5)}`:a.type+(e&&a.name?` ${a.name}`:"")}var Qa=$(()=>{"use strict";yt()});function Je(a,{strict:e=!0}={}){return!a||typeof a!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(a):a.startsWith("0x")}var _i=$(()=>{"use strict"});function je(a){return Je(a,{strict:!1})?Math.ceil((a.length-2)/2):a.length}var _a=$(()=>{"use strict";_i()});var Tf,kf=$(()=>{"use strict";Tf="2.8.18"});var Cf,Ja,Af,bo=$(()=>{"use strict";kf();Cf=a=>a,Ja=a=>a,Af=()=>`viem@${Tf}`});function Df(a,e){return e?.(a)?a:a&&typeof a=="object"&&"cause"in a?Df(a.cause,e):e?null:a}var M,Be=$(()=>{"use strict";bo();M=class a extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:Af()});let i=t.cause instanceof a?t.cause.details:t.cause?.message?t.cause.message:t.details,r=t.cause instanceof a&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...r?[`Docs: https://viem.sh${r}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join(`
`),t.cause&&(this.cause=t.cause),this.details=i,this.docsPath=r,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return Df(this,e)}}});var yo,Fr,er,xi,go,vo,wo,tr,Lo,ir,Gr,$i,_o,Ll,xo,li,Ii,Io,Eo,So,fo,yt=$(()=>{"use strict";Qa();_a();Be();yo=class extends M{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}},Fr=class extends M{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}},er=class extends M{constructor({data:e,params:t,size:i}){super([`Data size of ${i} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${ho(t,{includeName:!0})})`,`Data:   ${e} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=i}},xi=class extends M{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}},go=class extends M{constructor({expectedLength:e,givenLength:t,type:i}){super([`ABI encoding array length mismatch for type ${i}.`,`Expected length: ${e}`,`Given length: ${t}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}},vo=class extends M{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${je(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}},wo=class extends M{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${t}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}},tr=class extends M{constructor(e,{docsPath:t}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}},Lo=class extends M{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}},ir=class extends M{constructor(e,{docsPath:t}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}},Gr=class extends M{constructor(e,{docsPath:t}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}},$i=class extends M{constructor(e,{docsPath:t}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}},_o=class extends M{constructor(e,{docsPath:t}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}},Ll=class extends M{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${Dt(e.abiItem)}\`, and`,`\`${t.type}\` in \`${Dt(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}},xo=class extends M{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}},li=class extends M{constructor({abiItem:e,data:t,params:i,size:r}){super([`Data size of ${r} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${ho(i,{includeName:!0})})`,`Data:   ${t} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=i,this.size=r}},Ii=class extends M{constructor({abiItem:e,param:t}){super([`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${Dt(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}},Io=class extends M{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}},Eo=class extends M{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}},So=class extends M{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}},fo=class extends M{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}});var To,ko,Co,xl=$(()=>{"use strict";Be();To=class extends M{constructor({offset:e,position:t,size:i}){super(`Slice ${t==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${i}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}},ko=class extends M{constructor({size:e,targetSize:t,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}},Co=class extends M{constructor({size:e,targetSize:t,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} is expected to be ${t} ${i} long, but is ${e} ${i} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}});function xa(a,{dir:e,size:t=32}={}){return typeof a=="string"?Xi(a,{dir:e,size:t}):Hv(a,{dir:e,size:t})}function Xi(a,{dir:e,size:t=32}={}){if(t===null)return a;let i=a.replace("0x","");if(i.length>t*2)throw new ko({size:Math.ceil(i.length/2),targetSize:t,type:"hex"});return`0x${i[e==="right"?"padEnd":"padStart"](t*2,"0")}`}function Hv(a,{dir:e,size:t=32}={}){if(t===null)return a;if(a.length>t)throw new ko({size:a.length,targetSize:t,type:"bytes"});let i=new Uint8Array(t);for(let r=0;r<t;r++){let n=e==="right";i[n?r:t-r-1]=a[n?r:a.length-r-1]}return i}var Il=$(()=>{"use strict";xl()});var El,Sl,Tl,kl=$(()=>{"use strict";Be();El=class extends M{constructor({max:e,min:t,signed:i,size:r,value:n}){super(`Number "${n}" is not in safe ${r?`${r*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}},Sl=class extends M{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}},Tl=class extends M{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}});function ar(a,{dir:e="left"}={}){let t=typeof a=="string"?a.replace("0x",""):a,i=0;for(let r=0;r<t.length-1&&t[e==="left"?r:t.length-r-1].toString()==="0";r++)i++;return t=e==="left"?t.slice(i):t.slice(0,t.length-i),typeof a=="string"?(t.length===1&&e==="right"&&(t=`${t}0`),`0x${t.length%2===1?`0${t}`:t}`):t}var Cl=$(()=>{"use strict"});function Jt(a,{size:e}){if(je(a)>e)throw new Tl({givenSize:je(a),maxSize:e})}function Ia(a,e={}){let{signed:t}=e;e.size&&Jt(a,{size:e.size});let i=BigInt(a);if(!t)return i;let r=(a.length-2)/2,n=(1n<<BigInt(r)*8n-1n)-1n;return i<=n?i:i-BigInt(`0x${"f".padStart(r*2,"f")}`)-1n}function xt(a,e={}){return Number(Ia(a,e))}var ci=$(()=>{"use strict";kl();_a()});function $e(a,e={}){return typeof a=="number"||typeof a=="bigint"?ce(a,e):typeof a=="string"?rr(a,e):typeof a=="boolean"?Ao(a,e):pt(a,e)}function Ao(a,e={}){let t=`0x${Number(a)}`;return typeof e.size=="number"?(Jt(t,{size:e.size}),xa(t,{size:e.size})):t}function pt(a,e={}){let t="";for(let r=0;r<a.length;r++)t+=Uv[a[r]];let i=`0x${t}`;return typeof e.size=="number"?(Jt(i,{size:e.size}),xa(i,{dir:"right",size:e.size})):i}function ce(a,e={}){let{signed:t,size:i}=e,r=BigInt(a),n;i?t?n=(1n<<BigInt(i)*8n-1n)-1n:n=2n**(BigInt(i)*8n)-1n:typeof a=="number"&&(n=BigInt(Number.MAX_SAFE_INTEGER));let o=typeof n=="bigint"&&t?-n-1n:0;if(n&&r>n||r<o){let l=typeof a=="bigint"?"n":"";throw new El({max:n?`${n}${l}`:void 0,min:`${o}${l}`,signed:t,size:i,value:`${a}${l}`})}let s=`0x${(t&&r<0?(1n<<BigInt(i*8))+BigInt(r):r).toString(16)}`;return i?xa(s,{size:i}):s}function rr(a,e={}){let t=Vv.encode(a);return pt(t,e)}var Uv,Vv,Te=$(()=>{"use strict";kl();Il();ci();Uv=Array.from({length:256},(a,e)=>e.toString(16).padStart(2,"0"));Vv=new TextEncoder});function ei(a,e={}){return typeof a=="number"||typeof a=="bigint"?Gv(a,e):typeof a=="boolean"?Fv(a,e):Je(a)?Al(a,e):Ft(a,e)}function Fv(a,e={}){let t=new Uint8Array(1);return t[0]=Number(a),typeof e.size=="number"?(Jt(t,{size:e.size}),xa(t,{size:e.size})):t}function Mf(a){if(a>=Zi.zero&&a<=Zi.nine)return a-Zi.zero;if(a>=Zi.A&&a<=Zi.F)return a-(Zi.A-10);if(a>=Zi.a&&a<=Zi.f)return a-(Zi.a-10)}function Al(a,e={}){let t=a;e.size&&(Jt(t,{size:e.size}),t=xa(t,{dir:"right",size:e.size}));let i=t.slice(2);i.length%2&&(i=`0${i}`);let r=i.length/2,n=new Uint8Array(r);for(let o=0,s=0;o<r;o++){let l=Mf(i.charCodeAt(s++)),c=Mf(i.charCodeAt(s++));if(l===void 0||c===void 0)throw new M(`Invalid byte sequence ("${i[s-2]}${i[s-1]}" in "${i}").`);n[o]=l*16+c}return n}function Gv(a,e){let t=ce(a,e);return Al(t)}function Ft(a,e={}){let t=zv.encode(a);return typeof e.size=="number"?(Jt(t,{size:e.size}),xa(t,{dir:"right",size:e.size})):t}var zv,Zi,Ei=$(()=>{"use strict";Be();_i();Il();ci();Te();zv=new TextEncoder;Zi={zero:48,nine:57,A:65,F:70,a:97,f:102}});function Do(a){if(!Number.isSafeInteger(a)||a<0)throw new Error(`Wrong positive integer: ${a}`)}function Mo(a,...e){if(!(a instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(a.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${a.length}`)}function Pf(a){if(typeof a!="function"||typeof a.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Do(a.outputLen),Do(a.blockLen)}function Qi(a,e=!0){if(a.destroyed)throw new Error("Hash instance has been destroyed");if(e&&a.finished)throw new Error("Hash#digest() has already been called")}function Dl(a,e){Mo(a);let t=e.outputLen;if(a.length<t)throw new Error(`digestInto() expects output buffer of length at least ${t}`)}var Ml=$(()=>{"use strict"});function jv(a,e=!1){return e?{h:Number(a&Pl),l:Number(a>>Rf&Pl)}:{h:Number(a>>Rf&Pl)|0,l:Number(a&Pl)|0}}function Bf(a,e=!1){let t=new Uint32Array(a.length),i=new Uint32Array(a.length);for(let r=0;r<a.length;r++){let{h:n,l:o}=jv(a[r],e);[t[r],i[r]]=[n,o]}return[t,i]}var Pl,Rf,Of,Nf,Hf,Uf,Vf=$(()=>{"use strict";Pl=BigInt(4294967295),Rf=BigInt(32);Of=(a,e,t)=>a<<t|e>>>32-t,Nf=(a,e,t)=>e<<t|a>>>32-t,Hf=(a,e,t)=>e<<t-32|a>>>64-t,Uf=(a,e,t)=>a<<t-32|e>>>64-t});var Rl,zf=$(()=>{"use strict";Rl=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0});function Wv(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function Sa(a){if(typeof a=="string"&&(a=Wv(a)),!Ff(a))throw new Error(`expected Uint8Array, got ${typeof a}`);return a}function jf(...a){let e=new Uint8Array(a.reduce((i,r)=>i+r.length,0)),t=0;return a.forEach(i=>{if(!Ff(i))throw new Error("Uint8Array expected");e.set(i,t),t+=i.length}),e}function Ol(a){let e=i=>a().update(Sa(i)).digest(),t=a();return e.outputLen=t.outputLen,e.blockLen=t.blockLen,e.create=()=>a(),e}function qf(a){let e=(i,r)=>a(r).update(Sa(i)).digest(),t=a({});return e.outputLen=t.outputLen,e.blockLen=t.blockLen,e.create=i=>a(i),e}function Wf(a=32){if(Rl&&typeof Rl.getRandomValues=="function")return Rl.getRandomValues(new Uint8Array(a));throw new Error("crypto.getRandomValues must be defined")}var Ff,Gf,Bl,Si,qv,Ea,ZS,jr=$(()=>{"use strict";zf();Ff=a=>a instanceof Uint8Array,Gf=a=>new Uint32Array(a.buffer,a.byteOffset,Math.floor(a.byteLength/4)),Bl=a=>new DataView(a.buffer,a.byteOffset,a.byteLength),Si=(a,e)=>a<<32-e|a>>>e,qv=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!qv)throw new Error("Non little-endian hardware is not supported");Ea=class{clone(){return this._cloneInto()}},ZS={}.toString});function e0(a,e=24){let t=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let o=0;o<10;o++)t[o]=a[o]^a[o+10]^a[o+20]^a[o+30]^a[o+40];for(let o=0;o<10;o+=2){let s=(o+8)%10,l=(o+2)%10,c=t[l],u=t[l+1],p=Kf(c,u,1)^t[s],y=Yf(c,u,1)^t[s+1];for(let _=0;_<50;_+=10)a[o+_]^=p,a[o+_+1]^=y}let r=a[2],n=a[3];for(let o=0;o<24;o++){let s=Xf[o],l=Kf(r,n,s),c=Yf(r,n,s),u=$f[o];r=a[u],n=a[u+1],a[u]=l,a[u+1]=c}for(let o=0;o<50;o+=10){for(let s=0;s<10;s++)t[s]=a[o+s];for(let s=0;s<10;s++)a[o+s]^=~t[(s+2)%10]&t[(s+4)%10]}a[0]^=Qv[i],a[1]^=Jv[i]}t.fill(0)}var $f,Xf,Zf,Kv,Po,Yv,$v,Xv,Zv,Qv,Jv,Kf,Yf,Nl,Ta,i1,a1,r1,n1,o1,Qf,s1,l1,Jf,c1,u1,eb=$(()=>{"use strict";Ml();Vf();jr();[$f,Xf,Zf]=[[],[],[]],Kv=BigInt(0),Po=BigInt(1),Yv=BigInt(2),$v=BigInt(7),Xv=BigInt(256),Zv=BigInt(113);for(let a=0,e=Po,t=1,i=0;a<24;a++){[t,i]=[i,(2*t+3*i)%5],$f.push(2*(5*i+t)),Xf.push((a+1)*(a+2)/2%64);let r=Kv;for(let n=0;n<7;n++)e=(e<<Po^(e>>$v)*Zv)%Xv,e&Yv&&(r^=Po<<(Po<<BigInt(n))-Po);Zf.push(r)}[Qv,Jv]=Bf(Zf,!0),Kf=(a,e,t)=>t>32?Hf(a,e,t):Of(a,e,t),Yf=(a,e,t)=>t>32?Uf(a,e,t):Nf(a,e,t);Nl=class a extends Ea{constructor(e,t,i,r=!1,n=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=i,this.enableXOF=r,this.rounds=n,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Do(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Gf(this.state)}keccak(){e0(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Qi(this);let{blockLen:t,state:i}=this;e=Sa(e);let r=e.length;for(let n=0;n<r;){let o=Math.min(t-this.pos,r-n);for(let s=0;s<o;s++)i[this.pos++]^=e[n++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:i,blockLen:r}=this;e[i]^=t,t&128&&i===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){Qi(this,!1),Mo(e),this.finish();let t=this.state,{blockLen:i}=this;for(let r=0,n=e.length;r<n;){this.posOut>=i&&this.keccak();let o=Math.min(i-this.posOut,n-r);e.set(t.subarray(this.posOut,this.posOut+o),r),this.posOut+=o,r+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Do(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Dl(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:i,outputLen:r,rounds:n,enableXOF:o}=this;return e||(e=new a(t,i,r,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=i,e.outputLen=r,e.enableXOF=o,e.destroyed=this.destroyed,e}},Ta=(a,e,t)=>Ol(()=>new Nl(e,a,t)),i1=Ta(6,144,224/8),a1=Ta(6,136,256/8),r1=Ta(6,104,384/8),n1=Ta(6,72,512/8),o1=Ta(1,144,224/8),Qf=Ta(1,136,256/8),s1=Ta(1,104,384/8),l1=Ta(1,72,512/8),Jf=(a,e,t)=>qf((i={})=>new Nl(e,a,i.dkLen===void 0?t:i.dkLen,!0)),c1=Jf(31,168,128/8),u1=Jf(31,136,256/8)});function st(a,e){let t=e||"hex",i=Qf(Je(a,{strict:!1})?ei(a):a);return t==="bytes"?i:$e(i)}var ka=$(()=>{"use strict";eb();_i();Ei();Te()});function tb(a){return t0(a)}var t0,ib=$(()=>{"use strict";Ei();ka();t0=a=>st(ei(a))});function ab(a){let e=!0,t="",i=0,r="",n=!1;for(let o=0;o<a.length;o++){let s=a[o];if(["(",")",","].includes(s)&&(e=!0),s==="("&&i++,s===")"&&i--,!!e){if(i===0){if(s===" "&&["event","function",""].includes(r))r="";else if(r+=s,s===")"){n=!0;break}continue}if(s===" "){a[o-1]!==","&&t!==","&&t!==",("&&(t="",e=!1);continue}r+=s,t+=s}}if(!n)throw new M("Unable to normalize signature.");return r}var rb=$(()=>{"use strict";Be()});var nb,ob=$(()=>{"use strict";Sf();rb();nb=a=>{let e=(()=>typeof a=="string"?a:Dd(a))();return ab(e)}});function Hl(a){return tb(nb(a))}var Md=$(()=>{"use strict";ib();ob()});var qr,Ul=$(()=>{"use strict";Md();qr=Hl});var It,nr=$(()=>{"use strict";Be();It=class extends M{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}});var Vl,sb=$(()=>{"use strict";Vl=class extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}});function or(a,e){let t=e?`${e}${a.toLowerCase()}`:a.substring(2).toLowerCase(),i=st(Ft(t),"bytes"),r=(e?t.substring(`${e}0x`.length):t).split("");for(let n=0;n<40;n+=2)i[n>>1]>>4>=8&&r[n]&&(r[n]=r[n].toUpperCase()),(i[n>>1]&15)>=8&&r[n+1]&&(r[n+1]=r[n+1].toUpperCase());return`0x${r.join("")}`}function lb(a,e){if(!gt(a))throw new It({address:a});return or(a,e)}var Ro=$(()=>{"use strict";nr();Ei();ka();Ca()});function gt(a,{strict:e=!0}={}){if(Pd.has(a))return Pd.get(a);let t=(()=>i0.test(a)?a.toLowerCase()===a?!0:e?or(a)===a:!0:!1)();return Pd.set(a,t),t}var i0,Pd,Ca=$(()=>{"use strict";sb();Ro();i0=/^0x[a-fA-F0-9]{40}$/,Pd=new Vl(8192)});function Mt(a){return typeof a[0]=="string"?Bo(a):a0(a)}function a0(a){let e=0;for(let r of a)e+=r.length;let t=new Uint8Array(e),i=0;for(let r of a)t.set(r,i),i+=r.length;return t}function Bo(a){return`0x${a.reduce((e,t)=>e+t.replace("0x",""),"")}`}var Aa=$(()=>{"use strict"});function sr(a,e,t,{strict:i}={}){return Je(a,{strict:!1})?r0(a,e,t,{strict:i}):Rd(a,e,t,{strict:i})}function cb(a,e){if(typeof e=="number"&&e>0&&e>je(a)-1)throw new To({offset:e,position:"start",size:je(a)})}function ub(a,e,t){if(typeof e=="number"&&typeof t=="number"&&je(a)!==t-e)throw new To({offset:t,position:"end",size:je(a)})}function Rd(a,e,t,{strict:i}={}){cb(a,e);let r=a.slice(e,t);return i&&ub(r,e,t),r}function r0(a,e,t,{strict:i}={}){cb(a,e);let r=`0x${a.replace("0x","").slice((e??0)*2,(t??a.length)*2)}`;return i&&ub(r,e,t),r}var Oo=$(()=>{"use strict";xl();_i();_a()});function Ti(a,e){if(a.length!==e.length)throw new wo({expectedLength:a.length,givenLength:e.length});let t=n0({params:a,values:e}),i=Od(t);return i.length===0?"0x":i}function n0({params:a,values:e}){let t=[];for(let i=0;i<a.length;i++)t.push(Bd({param:a[i],value:e[i]}));return t}function Bd({param:a,value:e}){let t=zl(a.type);if(t){let[i,r]=t;return s0(e,{length:i,param:{...a,type:r}})}if(a.type==="tuple")return m0(e,{param:a});if(a.type==="address")return o0(e);if(a.type==="bool")return c0(e);if(a.type.startsWith("uint")||a.type.startsWith("int")){let i=a.type.startsWith("int");return u0(e,{signed:i})}if(a.type.startsWith("bytes"))return l0(e,{param:a});if(a.type==="string")return p0(e);throw new Io(a.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function Od(a){let e=0;for(let n=0;n<a.length;n++){let{dynamic:o,encoded:s}=a[n];o?e+=32:e+=je(s)}let t=[],i=[],r=0;for(let n=0;n<a.length;n++){let{dynamic:o,encoded:s}=a[n];o?(t.push(ce(e+r,{size:32})),i.push(s),r+=je(s)):t.push(s)}return Mt([...t,...i])}function o0(a){if(!gt(a))throw new It({address:a});return{dynamic:!1,encoded:Xi(a.toLowerCase())}}function s0(a,{length:e,param:t}){let i=e===null;if(!Array.isArray(a))throw new So(a);if(!i&&a.length!==e)throw new go({expectedLength:e,givenLength:a.length,type:`${t.type}[${e}]`});let r=!1,n=[];for(let o=0;o<a.length;o++){let s=Bd({param:t,value:a[o]});s.dynamic&&(r=!0),n.push(s)}if(i||r){let o=Od(n);if(i){let s=ce(n.length,{size:32});return{dynamic:!0,encoded:n.length>0?Mt([s,o]):s}}if(r)return{dynamic:!0,encoded:o}}return{dynamic:!1,encoded:Mt(n.map(({encoded:o})=>o))}}function l0(a,{param:e}){let[,t]=e.type.split("bytes"),i=je(a);if(!t){let r=a;return i%32!==0&&(r=Xi(r,{dir:"right",size:Math.ceil((a.length-2)/2/32)*32})),{dynamic:!0,encoded:Mt([Xi(ce(i,{size:32})),r])}}if(i!==parseInt(t))throw new vo({expectedSize:parseInt(t),value:a});return{dynamic:!1,encoded:Xi(a,{dir:"right"})}}function c0(a){if(typeof a!="boolean")throw new M(`Invalid boolean value: "${a}" (type: ${typeof a}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:Xi(Ao(a))}}function u0(a,{signed:e}){return{dynamic:!1,encoded:ce(a,{size:32,signed:e})}}function p0(a){let e=rr(a),t=Math.ceil(je(e)/32),i=[];for(let r=0;r<t;r++)i.push(Xi(sr(e,r*32,(r+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Mt([Xi(ce(je(e),{size:32})),...i])}}function m0(a,{param:e}){let t=!1,i=[];for(let r=0;r<e.components.length;r++){let n=e.components[r],o=Array.isArray(a)?r:n.name,s=Bd({param:n,value:a[o]});i.push(s),s.dynamic&&(t=!0)}return{dynamic:t,encoded:t?Od(i):Mt(i.map(({encoded:r})=>r))}}function zl(a){let e=a.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}var lr=$(()=>{"use strict";yt();nr();Be();Ca();Aa();Il();_a();Oo();Te()});var Wr,Fl=$(()=>{"use strict";Oo();Md();Wr=a=>sr(Hl(a),0,4)});function Pi(a){let{abi:e,args:t=[],name:i}=a,r=Je(i,{strict:!1}),n=e.filter(s=>r?s.type==="function"?Wr(s)===i:s.type==="event"?qr(s)===i:!1:"name"in s&&s.name===i);if(n.length===0)return;if(n.length===1)return n[0];let o;for(let s of n){if(!("inputs"in s))continue;if(!t||t.length===0){if(!s.inputs||s.inputs.length===0)return s;continue}if(!s.inputs||s.inputs.length===0||s.inputs.length!==t.length)continue;if(t.every((c,u)=>{let p="inputs"in s&&s.inputs[u];return p?Nd(c,p):!1})){if(o&&"inputs"in o&&o.inputs){let c=pb(s.inputs,o.inputs,t);if(c)throw new Ll({abiItem:s,type:c[0]},{abiItem:o,type:c[1]})}o=s}}return o||n[0]}function Nd(a,e){let t=typeof a,i=e.type;switch(i){case"address":return gt(a,{strict:!1});case"bool":return t==="boolean";case"function":return t==="string";case"string":return t==="string";default:return i==="tuple"&&"components"in e?Object.values(e.components).every((r,n)=>Nd(Object.values(a)[n],r)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)?t==="number"||t==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)?t==="string"||a instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)?Array.isArray(a)&&a.every(r=>Nd(r,{...e,type:i.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function pb(a,e,t){for(let i in a){let r=a[i],n=e[i];if(r.type==="tuple"&&n.type==="tuple"&&"components"in r&&"components"in n)return pb(r.components,n.components,t[i]);let o=[r.type,n.type];if((()=>o.includes("address")&&o.includes("bytes20")?!0:o.includes("address")&&o.includes("string")?gt(t[i],{strict:!1}):o.includes("address")&&o.includes("bytes")?gt(t[i],{strict:!1}):!1)())return o}}var Kr=$(()=>{"use strict";yt();_i();Ca();Ul();Fl()});function We(a){return typeof a=="string"?{address:a,type:"json-rpc"}:a}var ti=$(()=>{"use strict"});function fb(a){let{abi:e,args:t,functionName:i}=a,r=e[0];if(i){let n=Pi({abi:e,args:t,name:i});if(!n)throw new $i(i,{docsPath:hb});r=n}if(r.type!=="function")throw new $i(void 0,{docsPath:hb});return{abi:[r],functionName:Wr(Dt(r))}}var hb,bb=$(()=>{"use strict";yt();Fl();Qa();Kr();hb="/docs/contract/encodeFunctionData"});function Et(a){let{args:e}=a,{abi:t,functionName:i}=(()=>a.abi.length===1&&a.functionName?.startsWith("0x")?a:fb(a))(),r=t[0],n=i,o="inputs"in r&&r.inputs?Ti(r.inputs,e??[]):void 0;return Bo([n,o??"0x"])}var Ji=$(()=>{"use strict";Aa();lr();bb()});var jl,yb,gb,ql=$(()=>{"use strict";jl={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},yb={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},gb={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}});var No,Yr,Wl,Hd=$(()=>{"use strict";Be();No=class extends M{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}},Yr=class extends M{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}},Wl=class extends M{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}});function vb(a,{recursiveReadLimit:e=8192}={}){let t=Object.create(d0);return t.bytes=a,t.dataView=new DataView(a.buffer,a.byteOffset,a.byteLength),t.positionReadCount=new Map,t.recursiveReadLimit=e,t}var d0,wb=$(()=>{"use strict";Hd();d0={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Wl({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(a){if(a<0||a>this.bytes.length-1)throw new Yr({length:this.bytes.length,position:a})},decrementPosition(a){if(a<0)throw new No({offset:a});let e=this.position-a;this.assertPosition(e),this.position=e},getReadCount(a){return this.positionReadCount.get(a||this.position)||0},incrementPosition(a){if(a<0)throw new No({offset:a});let e=this.position+a;this.assertPosition(e),this.position=e},inspectByte(a){let e=a??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(a,e){let t=e??this.position;return this.assertPosition(t+a-1),this.bytes.subarray(t,t+a)},inspectUint8(a){let e=a??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(a){let e=a??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(a){let e=a??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(a){let e=a??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushBytes(a){this.assertPosition(this.position+a.length-1),this.bytes.set(a,this.position),this.position+=a.length},pushUint8(a){this.assertPosition(this.position),this.bytes[this.position]=a,this.position++},pushUint16(a){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,a),this.position+=2},pushUint24(a){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,a>>8),this.dataView.setUint8(this.position+2,a&255),this.position+=3},pushUint32(a){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,a),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let a=this.inspectByte();return this.position++,a},readBytes(a,e){this.assertReadLimit(),this._touch();let t=this.inspectBytes(a);return this.position+=e??a,t},readUint8(){this.assertReadLimit(),this._touch();let a=this.inspectUint8();return this.position+=1,a},readUint16(){this.assertReadLimit(),this._touch();let a=this.inspectUint16();return this.position+=2,a},readUint24(){this.assertReadLimit(),this._touch();let a=this.inspectUint24();return this.position+=3,a},readUint32(){this.assertReadLimit(),this._touch();let a=this.inspectUint32();return this.position+=4,a},get remaining(){return this.bytes.length-this.position},setPosition(a){let e=this.position;return this.assertPosition(a),this.position=a,()=>this.position=e},_touch(){if(this.recursiveReadLimit===1/0)return;let a=this.getReadCount();this.positionReadCount.set(this.position,a+1),a>0&&this.recursiveReadCount++}}});function Lb(a,e={}){typeof e.size<"u"&&Jt(a,{size:e.size});let t=pt(a,e);return Ia(t,e)}function _b(a,e={}){let t=a;if(typeof e.size<"u"&&(Jt(t,{size:e.size}),t=ar(t)),t.length>1||t[0]>1)throw new Sl(t);return!!t[0]}function Ri(a,e={}){typeof e.size<"u"&&Jt(a,{size:e.size});let t=pt(a,e);return xt(t,e)}function xb(a,e={}){let t=a;return typeof e.size<"u"&&(Jt(t,{size:e.size}),t=ar(t,{dir:"right"})),new TextDecoder().decode(t)}var Ib=$(()=>{"use strict";kl();Cl();ci();Te()});function cr(a,e){let t=typeof e=="string"?Al(e):e,i=vb(t);if(je(t)===0&&a.length>0)throw new xi;if(je(e)&&je(e)<32)throw new er({data:typeof e=="string"?e:pt(e),params:a,size:je(e)});let r=0,n=[];for(let o=0;o<a.length;++o){let s=a[o];i.setPosition(r);let[l,c]=$r(i,s,{staticPosition:0});r+=c,n.push(l)}return n}function $r(a,e,{staticPosition:t}){let i=zl(e.type);if(i){let[r,n]=i;return f0(a,{...e,type:n},{length:r,staticPosition:t})}if(e.type==="tuple")return v0(a,e,{staticPosition:t});if(e.type==="address")return h0(a);if(e.type==="bool")return b0(a);if(e.type.startsWith("bytes"))return y0(a,e,{staticPosition:t});if(e.type.startsWith("uint")||e.type.startsWith("int"))return g0(a,e);if(e.type==="string")return w0(a,{staticPosition:t});throw new Eo(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function h0(a){let e=a.readBytes(32);return[or(pt(Rd(e,-20))),32]}function f0(a,e,{length:t,staticPosition:i}){if(!t){let o=Ri(a.readBytes(Ud)),s=i+o,l=s+Eb;a.setPosition(s);let c=Ri(a.readBytes(Eb)),u=Ho(e),p=0,y=[];for(let _=0;_<c;++_){a.setPosition(l+(u?_*32:p));let[g,f]=$r(a,e,{staticPosition:l});p+=f,y.push(g)}return a.setPosition(i+32),[y,32]}if(Ho(e)){let o=Ri(a.readBytes(Ud)),s=i+o,l=[];for(let c=0;c<t;++c){a.setPosition(s+c*32);let[u]=$r(a,e,{staticPosition:s});l.push(u)}return a.setPosition(i+32),[l,32]}let r=0,n=[];for(let o=0;o<t;++o){let[s,l]=$r(a,e,{staticPosition:i+r});r+=l,n.push(s)}return[n,r]}function b0(a){return[_b(a.readBytes(32),{size:32}),32]}function y0(a,e,{staticPosition:t}){let[i,r]=e.type.split("bytes");if(!r){let o=Ri(a.readBytes(32));a.setPosition(t+o);let s=Ri(a.readBytes(32));if(s===0)return a.setPosition(t+32),["0x",32];let l=a.readBytes(s);return a.setPosition(t+32),[pt(l),32]}return[pt(a.readBytes(parseInt(r),32)),32]}function g0(a,e){let t=e.type.startsWith("int"),i=parseInt(e.type.split("int")[1]||"256"),r=a.readBytes(32);return[i>48?Lb(r,{signed:t}):Ri(r,{signed:t}),32]}function v0(a,e,{staticPosition:t}){let i=e.components.length===0||e.components.some(({name:o})=>!o),r=i?[]:{},n=0;if(Ho(e)){let o=Ri(a.readBytes(Ud)),s=t+o;for(let l=0;l<e.components.length;++l){let c=e.components[l];a.setPosition(s+n);let[u,p]=$r(a,c,{staticPosition:s});n+=p,r[i?l:c?.name]=u}return a.setPosition(t+32),[r,32]}for(let o=0;o<e.components.length;++o){let s=e.components[o],[l,c]=$r(a,s,{staticPosition:t});r[i?o:s?.name]=l,n+=c}return[r,n]}function w0(a,{staticPosition:e}){let t=Ri(a.readBytes(32)),i=e+t;a.setPosition(i);let r=Ri(a.readBytes(32));if(r===0)return a.setPosition(e+32),["",32];let n=a.readBytes(r,32),o=xb(ar(n));return a.setPosition(e+32),[o,32]}function Ho(a){let{type:e}=a;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return a.components?.some(Ho);let t=zl(a.type);return!!(t&&Ho({...a,type:t[1]}))}var Eb,Ud,Kl=$(()=>{"use strict";yt();Ro();wb();_a();Oo();Cl();Ib();Ei();Te();lr();Eb=32,Ud=32});function Yl(a){let{abi:e,data:t}=a,i=sr(t,0,4);if(i==="0x")throw new xi;let n=[...e||[],yb,gb].find(o=>o.type==="error"&&i===Wr(Dt(o)));if(!n)throw new tr(i,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:n,args:"inputs"in n&&n.inputs&&n.inputs.length>0?cr(n.inputs,sr(t,4)):void 0,errorName:n.name}}var Vd=$(()=>{"use strict";ql();yt();Oo();Fl();Kl();Qa()});var Oe,ii=$(()=>{"use strict";Oe=(a,e,t)=>JSON.stringify(a,(i,r)=>{let n=typeof r=="bigint"?r.toString():r;return typeof e=="function"?e(i,n):n},t)});function zd({abiItem:a,args:e,includeFunctionName:t=!0,includeName:i=!1}){if("name"in a&&"inputs"in a&&a.inputs)return`${t?a.name:""}(${a.inputs.map((r,n)=>`${i&&r.name?`${r.name}: `:""}${typeof e[n]=="object"?Oe(e[n]):e[n]}`).join(", ")})`}var Sb=$(()=>{"use strict";ii()});var Tb,kb,Fd=$(()=>{"use strict";Tb={gwei:9,wei:18},kb={ether:-9,wei:9}});function $l(a,e){let t=a.toString(),i=t.startsWith("-");i&&(t=t.slice(1)),t=t.padStart(e,"0");let[r,n]=[t.slice(0,t.length-e),t.slice(t.length-e)];return n=n.replace(/(0+)$/,""),`${i?"-":""}${r||"0"}${n?`.${n}`:""}`}var Gd=$(()=>{"use strict"});function Xr(a,e="wei"){return $l(a,Tb[e])}var Xl=$(()=>{"use strict";Fd();Gd()});function mt(a,e="wei"){return $l(a,kb[e])}var Zr=$(()=>{"use strict";Fd();Gd()});function Cb(a){return a.reduce((e,{slot:t,value:i})=>`${e}        ${t}: ${i}
`,"")}function Ab(a){return a.reduce((e,{address:t,...i})=>{let r=`${e}    ${t}:
`;return i.nonce&&(r+=`      nonce: ${i.nonce}
`),i.balance&&(r+=`      balance: ${i.balance}
`),i.code&&(r+=`      code: ${i.code}
`),i.state&&(r+=`      state:
`,r+=Cb(i.state)),i.stateDiff&&(r+=`      stateDiff:
`,r+=Cb(i.stateDiff)),r},`  State Override:
`).slice(0,-1)}var Zl,Ql,jd=$(()=>{"use strict";Be();Zl=class extends M{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}},Ql=class extends M{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}});function ur(a){let e=Object.entries(a).map(([i,r])=>r===void 0||r===!1?null:[i,r]).filter(Boolean),t=e.reduce((i,[r])=>Math.max(i,r.length),0);return e.map(([i,r])=>`  ${`${i}:`.padEnd(t+1)}  ${r}`).join(`
`)}var Jl,ec,tc,Qr,Jr,ic,ea=$(()=>{"use strict";Xl();Zr();Be();Jl=class extends M{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}},ec=class extends M{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",ur(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}},tc=class extends M{constructor(e,{account:t,docsPath:i,chain:r,data:n,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:p,value:y}){let _=ur({chain:r&&`${r?.name} (id: ${r?.id})`,from:t?.address,to:p,value:typeof y<"u"&&`${Xr(y)} ${r?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:typeof s<"u"&&`${mt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${mt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${mt(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",_].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}},Qr=class extends M{constructor({blockHash:e,blockNumber:t,blockTag:i,hash:r,index:n}){let o="Transaction";i&&n!==void 0&&(o=`Transaction at block time "${i}" at index "${n}"`),e&&n!==void 0&&(o=`Transaction at block hash "${e}" at index "${n}"`),t&&n!==void 0&&(o=`Transaction at block number "${t}" at index "${n}"`),r&&(o=`Transaction with hash "${r}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}},Jr=class extends M{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}},ic=class extends M{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}});var en,ac,pr,rc,Ma,mr=$(()=>{"use strict";ti();ql();Vd();Qa();Sb();Kr();Xl();Zr();yt();Be();jd();ea();bo();en=class extends M{constructor(e,{account:t,docsPath:i,chain:r,data:n,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:p,value:y,stateOverride:_}){let g=t?We(t):void 0,f=ur({from:g?.address,to:p,value:typeof y<"u"&&`${Xr(y)} ${r?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:typeof s<"u"&&`${mt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${mt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${mt(c)} gwei`,nonce:u});_&&(f+=`
${Ab(_)}`),super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",f].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}},ac=class extends M{constructor(e,{abi:t,args:i,contractAddress:r,docsPath:n,functionName:o,sender:s}){let l=Pi({abi:t,args:i,name:o}),c=l?zd({abiItem:l,args:i,includeFunctionName:!1,includeName:!1}):void 0,u=l?Dt(l,{includeName:!0}):void 0,p=ur({address:r&&Cf(r),function:u,args:c&&c!=="()"&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${c}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=i,this.cause=e,this.contractAddress=r,this.functionName=o,this.sender=s}},pr=class extends M{constructor({abi:e,data:t,functionName:i,message:r}){let n,o,s,l;if(t&&t!=="0x")try{o=Yl({abi:e,data:t});let{abiItem:u,errorName:p,args:y}=o;if(p==="Error")l=y[0];else if(p==="Panic"){let[_]=y;l=jl[_]}else{let _=u?Dt(u,{includeName:!0}):void 0,g=u&&y?zd({abiItem:u,args:y,includeFunctionName:!1,includeName:!1}):void 0;s=[_?`Error: ${_}`:"",g&&g!=="()"?`       ${[...Array(p?.length??0).keys()].map(()=>" ").join("")}${g}`:""]}}catch(u){n=u}else r&&(l=r);let c;n instanceof tr&&(c=n.signature,s=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${i}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${i}" reverted.`,{cause:n,metaMessages:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=o,this.reason=l,this.signature=c}},rc=class extends M{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}},Ma=class extends M{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}});var ui,tn,Uo,an=$(()=>{"use strict";ii();Be();bo();ui=class extends M{constructor({body:e,details:t,headers:i,status:r,url:n}){super("HTTP request failed.",{details:t,metaMessages:[r&&`Status: ${r}`,`URL: ${Ja(n)}`,e&&`Request body: ${Oe(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=i,this.status=r,this.url=n}},tn=class extends M{constructor({body:e,error:t,url:i}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${Ja(i)}`,`Request body: ${Oe(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}},Uo=class extends M{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Ja(t)}`,`Request body: ${Oe(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}});var L0,St,Pa,rn,nn,on,sn,ta,Bi,ln,cn,un,pn,dr,mn,hr,dn,hn,fn,bn,yn,nc,Vo=$(()=>{"use strict";Be();an();L0=-1,St=class extends M{constructor(e,{code:t,docsPath:i,metaMessages:r,shortMessage:n}){super(n,{cause:e,docsPath:i,metaMessages:r||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof tn?e.code:t??L0}},Pa=class extends St{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}},rn=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}};Object.defineProperty(rn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});nn=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}};Object.defineProperty(nn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});on=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}};Object.defineProperty(on,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});sn=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}};Object.defineProperty(sn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});ta=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}};Object.defineProperty(ta,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});Bi=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}};Object.defineProperty(Bi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});ln=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}};Object.defineProperty(ln,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});cn=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}};Object.defineProperty(cn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});un=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}};Object.defineProperty(un,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});pn=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}};Object.defineProperty(pn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});dr=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}};Object.defineProperty(dr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});mn=class a extends St{constructor(e){super(e,{code:a.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}};Object.defineProperty(mn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});hr=class a extends Pa{constructor(e){super(e,{code:a.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}};Object.defineProperty(hr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});dn=class a extends Pa{constructor(e){super(e,{code:a.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}};Object.defineProperty(dn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});hn=class a extends Pa{constructor(e){super(e,{code:a.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}};Object.defineProperty(hn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});fn=class a extends Pa{constructor(e){super(e,{code:a.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}};Object.defineProperty(fn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});bn=class a extends Pa{constructor(e){super(e,{code:a.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}};Object.defineProperty(bn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});yn=class a extends Pa{constructor(e){super(e,{code:a.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}};Object.defineProperty(yn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});nc=class extends St{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}});var aa,Ra,gn,vn,wn,Ln,_n,xn,In,En,Ba,Oi,Sn=$(()=>{"use strict";Zr();Be();aa=class extends M{constructor({cause:e,message:t}={}){let i=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}};Object.defineProperty(aa,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(aa,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});Ra=class extends M{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${mt(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}};Object.defineProperty(Ra,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});gn=class extends M{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${mt(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}};Object.defineProperty(gn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});vn=class extends M{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}};Object.defineProperty(vn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});wn=class extends M{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}};Object.defineProperty(wn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});Ln=class extends M{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}};Object.defineProperty(Ln,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});_n=class extends M{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}};Object.defineProperty(_n,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});xn=class extends M{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}};Object.defineProperty(xn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});In=class extends M{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}};Object.defineProperty(In,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});En=class extends M{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}};Object.defineProperty(En,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});Ba=class extends M{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${mt(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${mt(i)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}};Object.defineProperty(Ba,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});Oi=class extends M{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}});function Tn(a,e){let t=(a.details||"").toLowerCase(),i=a instanceof M?a.walk(r=>r.code===aa.code):a;return i instanceof M?new aa({cause:a,message:i.details}):aa.nodeMessage.test(t)?new aa({cause:a,message:a.details}):Ra.nodeMessage.test(t)?new Ra({cause:a,maxFeePerGas:e?.maxFeePerGas}):gn.nodeMessage.test(t)?new gn({cause:a,maxFeePerGas:e?.maxFeePerGas}):vn.nodeMessage.test(t)?new vn({cause:a,nonce:e?.nonce}):wn.nodeMessage.test(t)?new wn({cause:a,nonce:e?.nonce}):Ln.nodeMessage.test(t)?new Ln({cause:a,nonce:e?.nonce}):_n.nodeMessage.test(t)?new _n({cause:a}):xn.nodeMessage.test(t)?new xn({cause:a,gas:e?.gas}):In.nodeMessage.test(t)?new In({cause:a,gas:e?.gas}):En.nodeMessage.test(t)?new En({cause:a}):Ba.nodeMessage.test(t)?new Ba({cause:a,maxFeePerGas:e?.maxFeePerGas,maxPriorityFeePerGas:e?.maxPriorityFeePerGas}):new Oi({cause:a})}var sc=$(()=>{"use strict";Be();Sn()});function kn(a,{format:e}){if(!e)return{};let t={};function i(n){let o=Object.keys(n);for(let s of o)s in a&&(t[s]=a[s]),n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&i(n[s])}let r=e(a||{});return i(r),t}var lc=$(()=>{"use strict"});function Oa(a){let e={...a};return typeof a.blobs<"u"&&typeof a.blobs[0]!="string"&&(e.blobs=a.blobs.map(t=>pt(t))),typeof a.gas<"u"&&(e.gas=ce(a.gas)),typeof a.gasPrice<"u"&&(e.gasPrice=ce(a.gasPrice)),typeof a.maxFeePerBlobGas<"u"&&(e.maxFeePerBlobGas=ce(a.maxFeePerBlobGas)),typeof a.maxFeePerGas<"u"&&(e.maxFeePerGas=ce(a.maxFeePerGas)),typeof a.maxPriorityFeePerGas<"u"&&(e.maxPriorityFeePerGas=ce(a.maxPriorityFeePerGas)),typeof a.nonce<"u"&&(e.nonce=ce(a.nonce)),typeof a.type<"u"&&(e.type=x0[a.type]),typeof a.value<"u"&&(e.value=ce(a.value)),e}var x0,zo=$(()=>{"use strict";Te();x0={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"}});function Ni(a){let{account:e,gasPrice:t,maxFeePerGas:i,maxPriorityFeePerGas:r,to:n}=a,o=e?We(e):void 0;if(o&&!gt(o.address))throw new It({address:o.address});if(n&&!gt(n))throw new It({address:n});if(typeof t<"u"&&(typeof i<"u"||typeof r<"u"))throw new Jl;if(i&&i>2n**256n-1n)throw new Ra({maxFeePerGas:i});if(r&&i&&r>i)throw new Ba({maxFeePerGas:i,maxPriorityFeePerGas:r})}var Cn=$(()=>{"use strict";ti();nr();Sn();ea();Ca()});function pi(a){let{abi:e,args:t,functionName:i,data:r}=a,n=e[0];if(i){let s=Pi({abi:e,args:t,name:i});if(!s)throw new $i(i,{docsPath:Kd});n=s}if(n.type!=="function")throw new $i(void 0,{docsPath:Kd});if(!n.outputs)throw new _o(n.name,{docsPath:Kd});let o=cr(n.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}var Kd,br=$(()=>{"use strict";yt();Kl();Kr();Kd="/docs/contract/decodeFunctionResult"});var Fo,Nb,bc,Hb,Yd,$d,Ub,yr=$(()=>{"use strict";Fo=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],Nb=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],bc=[...Nb,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],Hb=[...Nb,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],Yd=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],$d=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],Ub=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]});var Vb,zb=$(()=>{"use strict";Vb="0x82ad56cb"});var gr,yc,gc,Go,vc=$(()=>{"use strict";Be();gr=class extends M{constructor({blockNumber:e,chain:t,contract:i}){super(`Chain "${t.name}" does not support contract "${i.name}".`,{metaMessages:["This could be due to any of the following:",...e&&i.blockCreated&&i.blockCreated>e?[`- The contract "${i.name}" was not deployed until block ${i.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${i.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}},yc=class extends M{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}},gc=class extends M{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}},Go=class extends M{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}});function mi({blockNumber:a,chain:e,contract:t}){let i=e?.contracts?.[t];if(!i)throw new gr({chain:e,contract:{name:t}});if(a&&i.blockCreated&&i.blockCreated>a)throw new gr({blockNumber:a,chain:e,contract:{name:t,blockCreated:i.blockCreated}});return i.address}var vr=$(()=>{"use strict";vc()});function Fb(a,{docsPath:e,...t}){let i=(()=>{let r=Tn(a,t);return r instanceof Oi?a:r})();return new en(i,{docsPath:e,...t})}var Gb=$(()=>{"use strict";mr();Sn();sc()});function wc({fn:a,id:e,shouldSplitBatch:t,wait:i=0,sort:r}){let n=async()=>{let u=l();o();let p=u.map(({args:y})=>y);p.length!==0&&a(p).then(y=>{r&&Array.isArray(y)&&y.sort(r);for(let _=0;_<u.length;_++){let{pendingPromise:g}=u[_];g.resolve?.([y[_],y])}}).catch(y=>{for(let _=0;_<u.length;_++){let{pendingPromise:g}=u[_];g.reject?.(y)}})},o=()=>Xd.delete(e),s=()=>l().map(({args:u})=>u),l=()=>Xd.get(e)||[],c=u=>Xd.set(e,[...l(),u]);return{flush:o,async schedule(u){let p={},y=new Promise((f,T)=>{p.resolve=f,p.reject=T});return t?.([...s(),u])&&n(),l().length>0?(c({args:u,pendingPromise:p}),y):(c({args:u,pendingPromise:p}),setTimeout(n,i),y)}}}var Xd,Zd=$(()=>{"use strict";Xd=new Map});var Lc,_c,xc,jb=$(()=>{"use strict";ii();Be();bo();Lc=class extends M{constructor({callbackSelector:e,cause:t,data:i,extraData:r,sender:n,urls:o}){super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map(s=>`    ${Ja(s)}`)],`  Sender: ${n}`,`  Data: ${i}`,`  Callback selector: ${e}`,`  Extra data: ${r}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}},_c=class extends M{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${Ja(t)}`,`Response: ${Oe(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}},xc=class extends M{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}});function qb(a,e){if(!gt(a,{strict:!1}))throw new It({address:a});if(!gt(e,{strict:!1}))throw new It({address:e});return a.toLowerCase()===e.toLowerCase()}var Wb=$(()=>{"use strict";nr();Ca()});var $b={};bf($b,{ccipFetch:()=>Yb,offchainLookup:()=>S0,offchainLookupAbiItem:()=>Kb,offchainLookupSignature:()=>E0});async function S0(a,{blockNumber:e,blockTag:t,data:i,to:r}){let{args:n}=Yl({data:i,abi:[Kb]}),[o,s,l,c,u]=n;try{if(!qb(r,o))throw new xc({sender:o,to:r});let p=await Yb({data:l,sender:o,urls:s}),{data:y}=await Vi(a,{blockNumber:e,blockTag:t,data:Mt([c,Ti([{type:"bytes"},{type:"bytes"}],[p,u])]),to:r});return y}catch(p){throw new Lc({callbackSelector:c,cause:p,data:i,extraData:u,sender:o,urls:s})}}async function Yb({data:a,sender:e,urls:t}){let i=new Error("An unknown error occurred.");for(let r=0;r<t.length;r++){let n=t[r],o=n.includes("{data}")?"GET":"POST",s=o==="POST"?{data:a,sender:e}:void 0;try{let l=await fetch(n.replace("{sender}",e).replace("{data}",a),{body:JSON.stringify(s),method:o}),c;if(l.headers.get("Content-Type")?.startsWith("application/json")?c=(await l.json()).data:c=await l.text(),!l.ok){i=new ui({body:s,details:c?.error?Oe(c.error):l.statusText,headers:l.headers,status:l.status,url:n});continue}if(!Je(c)){i=new _c({result:c,url:n});continue}return c}catch(l){i=new ui({body:s,details:l.message,url:n})}}throw i}var E0,Kb,Xb=$(()=>{"use strict";Bn();jb();an();Vd();lr();Wb();Aa();_i();ii();E0="0x556f1830",Kb={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]}});async function Vi(a,e){let{account:t=a.account,batch:i=!!a.batch?.multicall,blockNumber:r,blockTag:n="latest",accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:y,maxPriorityFeePerGas:_,nonce:g,to:f,value:T,stateOverride:C,...O}=e,N=t?We(t):void 0;try{Ni(e);let F=(r?ce(r):void 0)||n,U=D0(C),W=a.chain?.formatters?.transactionRequest?.format,ke=(W||Oa)({...kn(O,{format:W}),from:N?.address,accessList:o,blobs:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:y,maxPriorityFeePerGas:_,nonce:g,to:f,value:T});if(i&&T0({request:ke})&&!U)try{return await k0(a,{...ke,blockNumber:r,blockTag:n})}catch(we){if(!(we instanceof Go)&&!(we instanceof gr))throw we}let Le=await a.request({method:"eth_call",params:U?[ke,F,U]:[ke,F]});return Le==="0x"?{data:void 0}:{data:Le}}catch(Q){let F=C0(Q),{offchainLookup:U,offchainLookupSignature:W}=await Promise.resolve().then(()=>(Xb(),$b));if(F?.slice(0,10)===W&&f)return{data:await U(a,{data:F,to:f})};throw Fb(Q,{...e,account:N,chain:a.chain})}}function T0({request:a}){let{data:e,to:t,...i}=a;return!(!e||e.startsWith(Vb)||!t||Object.values(i).filter(r=>typeof r<"u").length>0)}async function k0(a,e){let{batchSize:t=1024,wait:i=0}=typeof a.batch?.multicall=="object"?a.batch.multicall:{},{blockNumber:r,blockTag:n="latest",data:o,multicallAddress:s,to:l}=e,c=s;if(!c){if(!a.chain)throw new Go;c=mi({blockNumber:r,chain:a.chain,contract:"multicall3"})}let p=(r?ce(r):void 0)||n,{schedule:y}=wc({id:`${a.uid}.${p}`,wait:i,shouldSplitBatch(f){return f.reduce((C,{data:O})=>C+(O.length-2),0)>t*2},fn:async f=>{let T=f.map(N=>({allowFailure:!0,callData:N.data,target:N.to})),C=Et({abi:Fo,args:[T],functionName:"aggregate3"}),O=await a.request({method:"eth_call",params:[{data:C,to:c},p]});return pi({abi:Fo,args:[T],functionName:"aggregate3",data:O||"0x"})}}),[{returnData:_,success:g}]=await y({data:o,to:l});if(!g)throw new Ma({data:_});return _==="0x"?{data:void 0}:{data:_}}function C0(a){if(!(a instanceof M))return;let e=a.walk();return typeof e?.data=="object"?e.data?.data:e.data}function Zb(a){if(!(!a||a.length===0))return a.reduce((e,{slot:t,value:i})=>{if(t.length!==66)throw new Co({size:t.length,targetSize:66,type:"hex"});if(i.length!==66)throw new Co({size:i.length,targetSize:66,type:"hex"});return e[t]=i,e},{})}function A0(a){let{balance:e,nonce:t,state:i,stateDiff:r,code:n}=a,o={};if(n!==void 0&&(o.code=n),e!==void 0&&(o.balance=ce(e,{size:32})),t!==void 0&&(o.nonce=ce(t,{size:8})),i!==void 0&&(o.state=Zb(i)),r!==void 0){if(o.state)throw new Ql;o.stateDiff=Zb(r)}return o}function D0(a){if(!a)return;let e={};for(let{address:t,...i}of a){if(!gt(t,{strict:!1}))throw new It({address:t});if(e[t])throw new Zl({address:t});e[t]=A0(i)}return e}var Bn=$(()=>{"use strict";ti();yr();zb();nr();Be();vc();mr();xl();jd();br();Ji();Ca();vr();Te();Gb();lc();zo();Zd();Cn()});function Y0(a,e,t,i){if(typeof a.setBigUint64=="function")return a.setBigUint64(e,t,i);let r=BigInt(32),n=BigInt(4294967295),o=Number(t>>r&n),s=Number(t&n),l=i?4:0,c=i?0:4;a.setUint32(e+l,o,i),a.setUint32(e+c,s,i)}var Vc,Hy=$(()=>{"use strict";Ml();jr();Vc=class extends Ea{constructor(e,t,i,r){super(),this.blockLen=e,this.outputLen=t,this.padOffset=i,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Bl(this.buffer)}update(e){Qi(this);let{view:t,buffer:i,blockLen:r}=this;e=Sa(e);let n=e.length;for(let o=0;o<n;){let s=Math.min(r-this.pos,n-o);if(s===r){let l=Bl(e);for(;r<=n-o;o+=r)this.process(l,o);continue}i.set(e.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Qi(this),Dl(e,this),this.finished=!0;let{buffer:t,view:i,blockLen:r,isLE:n}=this,{pos:o}=this;t[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>r-o&&(this.process(i,0),o=0);for(let p=o;p<r;p++)t[p]=0;Y0(i,r-8,BigInt(this.length*8),n),this.process(i,0);let s=Bl(e),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let c=l/4,u=this.get();if(c>u.length)throw new Error("_sha2: outputLen bigger than state");for(let p=0;p<c;p++)s.setUint32(4*p,u[p],n)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let i=e.slice(0,t);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:t,buffer:i,length:r,finished:n,destroyed:o,pos:s}=this;return e.length=r,e.pos=s,e.finished=n,e.destroyed=o,r%t&&e.buffer.set(i),e}}});var $0,X0,Z0,Ga,ja,rh,Uy,Vy=$(()=>{"use strict";Hy();jr();$0=(a,e,t)=>a&e^~a&t,X0=(a,e,t)=>a&e^a&t^e&t,Z0=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ga=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ja=new Uint32Array(64),rh=class extends Vc{constructor(){super(64,32,8,!1),this.A=Ga[0]|0,this.B=Ga[1]|0,this.C=Ga[2]|0,this.D=Ga[3]|0,this.E=Ga[4]|0,this.F=Ga[5]|0,this.G=Ga[6]|0,this.H=Ga[7]|0}get(){let{A:e,B:t,C:i,D:r,E:n,F:o,G:s,H:l}=this;return[e,t,i,r,n,o,s,l]}set(e,t,i,r,n,o,s,l){this.A=e|0,this.B=t|0,this.C=i|0,this.D=r|0,this.E=n|0,this.F=o|0,this.G=s|0,this.H=l|0}process(e,t){for(let p=0;p<16;p++,t+=4)ja[p]=e.getUint32(t,!1);for(let p=16;p<64;p++){let y=ja[p-15],_=ja[p-2],g=Si(y,7)^Si(y,18)^y>>>3,f=Si(_,17)^Si(_,19)^_>>>10;ja[p]=f+ja[p-7]+g+ja[p-16]|0}let{A:i,B:r,C:n,D:o,E:s,F:l,G:c,H:u}=this;for(let p=0;p<64;p++){let y=Si(s,6)^Si(s,11)^Si(s,25),_=u+y+$0(s,l,c)+Z0[p]+ja[p]|0,f=(Si(i,2)^Si(i,13)^Si(i,22))+X0(i,r,n)|0;u=c,c=l,l=s,s=o+_|0,o=n,n=r,r=i,i=_+f|0}i=i+this.A|0,r=r+this.B|0,n=n+this.C|0,o=o+this.D|0,s=s+this.E|0,l=l+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(i,r,n,o,s,l,c,u)}roundClean(){ja.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},Uy=Ol(()=>new rh)});var uh={};bf(uh,{bitGet:()=>rw,bitLen:()=>aw,bitMask:()=>Yo,bitSet:()=>nw,bytesToHex:()=>wr,bytesToNumberBE:()=>ra,bytesToNumberLE:()=>Gc,concatBytes:()=>Fn,createHmacDrbg:()=>ch,ensureBytes:()=>ai,equalBytes:()=>lh,hexToBytes:()=>Lr,hexToNumber:()=>sh,numberToBytesBE:()=>qa,numberToBytesLE:()=>jc,numberToHexUnpadded:()=>Xy,numberToVarBytesBE:()=>tw,utf8ToBytes:()=>iw,validateObject:()=>Wa});function wr(a){if(!Fc(a))throw new Error("Uint8Array expected");let e="";for(let t=0;t<a.length;t++)e+=ew[a[t]];return e}function Xy(a){let e=a.toString(16);return e.length&1?`0${e}`:e}function sh(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);return BigInt(a===""?"0":`0x${a}`)}function Lr(a){if(typeof a!="string")throw new Error("hex string expected, got "+typeof a);let e=a.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);let t=new Uint8Array(e/2);for(let i=0;i<t.length;i++){let r=i*2,n=a.slice(r,r+2),o=Number.parseInt(n,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");t[i]=o}return t}function ra(a){return sh(wr(a))}function Gc(a){if(!Fc(a))throw new Error("Uint8Array expected");return sh(wr(Uint8Array.from(a).reverse()))}function qa(a,e){return Lr(a.toString(16).padStart(e*2,"0"))}function jc(a,e){return qa(a,e).reverse()}function tw(a){return Lr(Xy(a))}function ai(a,e,t){let i;if(typeof e=="string")try{i=Lr(e)}catch(n){throw new Error(`${a} must be valid hex string, got "${e}". Cause: ${n}`)}else if(Fc(e))i=Uint8Array.from(e);else throw new Error(`${a} must be hex string or Uint8Array`);let r=i.length;if(typeof t=="number"&&r!==t)throw new Error(`${a} expected ${t} bytes, got ${r}`);return i}function Fn(...a){let e=new Uint8Array(a.reduce((i,r)=>i+r.length,0)),t=0;return a.forEach(i=>{if(!Fc(i))throw new Error("Uint8Array expected");e.set(i,t),t+=i.length}),e}function lh(a,e){if(a.length!==e.length)return!1;for(let t=0;t<a.length;t++)if(a[t]!==e[t])return!1;return!0}function iw(a){if(typeof a!="string")throw new Error(`utf8ToBytes expected string, got ${typeof a}`);return new Uint8Array(new TextEncoder().encode(a))}function aw(a){let e;for(e=0;a>$y;a>>=zc,e+=1);return e}function rw(a,e){return a>>BigInt(e)&zc}function ch(a,e,t){if(typeof a!="number"||a<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof t!="function")throw new Error("hmacFn must be a function");let i=oh(a),r=oh(a),n=0,o=()=>{i.fill(1),r.fill(0),n=0},s=(...p)=>t(r,i,...p),l=(p=oh())=>{r=s(Yy([0]),p),i=s(),p.length!==0&&(r=s(Yy([1]),p),i=s())},c=()=>{if(n++>=1e3)throw new Error("drbg: tried 1000 values");let p=0,y=[];for(;p<e;){i=s();let _=i.slice();y.push(_),p+=i.length}return Fn(...y)};return(p,y)=>{o(),l(p);let _;for(;!(_=y(c()));)l();return o(),_}}function Wa(a,e,t={}){let i=(r,n,o)=>{let s=ow[n];if(typeof s!="function")throw new Error(`Invalid validator "${n}", expected function`);let l=a[r];if(!(o&&l===void 0)&&!s(l,a))throw new Error(`Invalid param ${String(r)}=${l} (${typeof l}), expected ${n}`)};for(let[r,n]of Object.entries(e))i(r,n,!1);for(let[r,n]of Object.entries(t))i(r,n,!0);return a}var $y,zc,J0,Fc,ew,nw,Yo,oh,Yy,ow,Gn=$(()=>{"use strict";$y=BigInt(0),zc=BigInt(1),J0=BigInt(2),Fc=a=>a instanceof Uint8Array,ew=Array.from({length:256},(a,e)=>e.toString(16).padStart(2,"0"));nw=(a,e,t)=>a|(t?zc:$y)<<BigInt(e),Yo=a=>(J0<<BigInt(a-1))-zc,oh=a=>new Uint8Array(a),Yy=a=>Uint8Array.from(a);ow={bigint:a=>typeof a=="bigint",function:a=>typeof a=="function",boolean:a=>typeof a=="boolean",string:a=>typeof a=="string",stringOrUint8Array:a=>typeof a=="string"||a instanceof Uint8Array,isSafeInteger:a=>Number.isSafeInteger(a),array:a=>Array.isArray(a),field:(a,e)=>e.Fp.isValid(a),hash:a=>typeof a=="function"&&Number.isSafeInteger(a.outputLen)}});function Tt(a,e){let t=a%e;return t>=dt?t:e+t}function uw(a,e,t){if(t<=dt||e<dt)throw new Error("Expected power/modulo > 0");if(t===et)return dt;let i=et;for(;e>dt;)e&et&&(i=i*a%t),a=a*a%t,e>>=et;return i}function ri(a,e,t){let i=a;for(;e-- >dt;)i*=i,i%=t;return i}function Yc(a,e){if(a===dt||e<=dt)throw new Error(`invert: expected positive integers, got n=${a} mod=${e}`);let t=Tt(a,e),i=e,r=dt,n=et,o=et,s=dt;for(;t!==dt;){let c=i/t,u=i%t,p=r-o*c,y=n-s*c;i=t,t=u,r=o,n=s,o=p,s=y}if(i!==et)throw new Error("invert: does not exist");return Tt(r,e)}function pw(a){let e=(a-et)/_r,t,i,r;for(t=a-et,i=0;t%_r===dt;t/=_r,i++);for(r=_r;r<a&&uw(r,e,a)!==a-et;r++);if(i===1){let o=(a+et)/mh;return function(l,c){let u=l.pow(c,o);if(!l.eql(l.sqr(u),c))throw new Error("Cannot find square root");return u}}let n=(t+et)/_r;return function(s,l){if(s.pow(l,e)===s.neg(s.ONE))throw new Error("Cannot find square root");let c=i,u=s.pow(s.mul(s.ONE,r),t),p=s.pow(l,n),y=s.pow(l,t);for(;!s.eql(y,s.ONE);){if(s.eql(y,s.ZERO))return s.ZERO;let _=1;for(let f=s.sqr(y);_<c&&!s.eql(f,s.ONE);_++)f=s.sqr(f);let g=s.pow(u,et<<BigInt(c-_-1));u=s.sqr(g),p=s.mul(p,g),y=s.mul(y,u),c=_}return p}}function mw(a){if(a%mh===sw){let e=(a+et)/mh;return function(i,r){let n=i.pow(r,e);if(!i.eql(i.sqr(n),r))throw new Error("Cannot find square root");return n}}if(a%yg===bg){let e=(a-bg)/yg;return function(i,r){let n=i.mul(r,_r),o=i.pow(n,e),s=i.mul(r,o),l=i.mul(i.mul(s,_r),o),c=i.mul(s,i.sub(l,i.ONE));if(!i.eql(i.sqr(c),r))throw new Error("Cannot find square root");return c}}return a%cw,pw(a)}function dh(a){let e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},t=dw.reduce((i,r)=>(i[r]="function",i),e);return Wa(a,t)}function hw(a,e,t){if(t<dt)throw new Error("Expected power > 0");if(t===dt)return a.ONE;if(t===et)return e;let i=a.ONE,r=e;for(;t>dt;)t&et&&(i=a.mul(i,r)),r=a.sqr(r),t>>=et;return i}function fw(a,e){let t=new Array(e.length),i=e.reduce((n,o,s)=>a.is0(o)?n:(t[s]=n,a.mul(n,o)),a.ONE),r=a.inv(i);return e.reduceRight((n,o,s)=>a.is0(o)?n:(t[s]=a.mul(n,t[s]),a.mul(n,o)),r),t}function hh(a,e){let t=e!==void 0?e:a.toString(2).length,i=Math.ceil(t/8);return{nBitLength:t,nByteLength:i}}function gg(a,e,t=!1,i={}){if(a<=dt)throw new Error(`Expected Field ORDER > 0, got ${a}`);let{nBitLength:r,nByteLength:n}=hh(a,e);if(n>2048)throw new Error("Field lengths over 2048 bytes are not supported");let o=mw(a),s=Object.freeze({ORDER:a,BITS:r,BYTES:n,MASK:Yo(r),ZERO:dt,ONE:et,create:l=>Tt(l,a),isValid:l=>{if(typeof l!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);return dt<=l&&l<a},is0:l=>l===dt,isOdd:l=>(l&et)===et,neg:l=>Tt(-l,a),eql:(l,c)=>l===c,sqr:l=>Tt(l*l,a),add:(l,c)=>Tt(l+c,a),sub:(l,c)=>Tt(l-c,a),mul:(l,c)=>Tt(l*c,a),pow:(l,c)=>hw(s,l,c),div:(l,c)=>Tt(l*Yc(c,a),a),sqrN:l=>l*l,addN:(l,c)=>l+c,subN:(l,c)=>l-c,mulN:(l,c)=>l*c,inv:l=>Yc(l,a),sqrt:i.sqrt||(l=>o(s,l)),invertBatch:l=>fw(s,l),cmov:(l,c,u)=>u?c:l,toBytes:l=>t?jc(l,n):qa(l,n),fromBytes:l=>{if(l.length!==n)throw new Error(`Fp.fromBytes: expected ${n}, got ${l.length}`);return t?Gc(l):ra(l)}});return Object.freeze(s)}function vg(a){if(typeof a!="bigint")throw new Error("field order must be bigint");let e=a.toString(2).length;return Math.ceil(e/8)}function fh(a){let e=vg(a);return e+Math.ceil(e/2)}function wg(a,e,t=!1){let i=a.length,r=vg(e),n=fh(e);if(i<16||i<n||i>1024)throw new Error(`expected ${n}-1024 bytes of input, got ${i}`);let o=t?ra(a):Gc(a),s=Tt(o,e-et)+et;return t?jc(s,r):qa(s,r)}var dt,et,_r,sw,mh,bg,yg,lw,cw,dw,$c=$(()=>{"use strict";Gn();dt=BigInt(0),et=BigInt(1),_r=BigInt(2),sw=BigInt(3),mh=BigInt(4),bg=BigInt(5),yg=BigInt(8),lw=BigInt(9),cw=BigInt(16);dw=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"]});function Lg(a,e){let t=(r,n)=>{let o=n.negate();return r?o:n},i=r=>{let n=Math.ceil(e/r)+1,o=2**(r-1);return{windows:n,windowSize:o}};return{constTimeNegate:t,unsafeLadder(r,n){let o=a.ZERO,s=r;for(;n>yw;)n&bh&&(o=o.add(s)),s=s.double(),n>>=bh;return o},precomputeWindow(r,n){let{windows:o,windowSize:s}=i(n),l=[],c=r,u=c;for(let p=0;p<o;p++){u=c,l.push(u);for(let y=1;y<s;y++)u=u.add(c),l.push(u);c=u.double()}return l},wNAF(r,n,o){let{windows:s,windowSize:l}=i(r),c=a.ZERO,u=a.BASE,p=BigInt(2**r-1),y=2**r,_=BigInt(r);for(let g=0;g<s;g++){let f=g*l,T=Number(o&p);o>>=_,T>l&&(T-=y,o+=bh);let C=f,O=f+Math.abs(T)-1,N=g%2!==0,Q=T<0;T===0?u=u.add(t(N,n[C])):c=c.add(t(Q,n[O]))}return{p:c,f:u}},wNAFCached(r,n,o,s){let l=r._WINDOW_SIZE||1,c=n.get(r);return c||(c=this.precomputeWindow(r,l),l!==1&&n.set(r,s(c))),this.wNAF(l,c,o)}}}function yh(a){return dh(a.Fp),Wa(a,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...hh(a.n,a.nBitLength),...a,p:a.Fp.ORDER})}var yw,bh,_g=$(()=>{"use strict";$c();Gn();yw=BigInt(0),bh=BigInt(1)});function gw(a){let e=yh(a);Wa(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:t,Fp:i,a:r}=e;if(t){if(!i.eql(r,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof t!="object"||typeof t.beta!="bigint"||typeof t.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}function Lw(a){let e=gw(a),{Fp:t}=e,i=e.toBytes||((g,f,T)=>{let C=f.toAffine();return Fn(Uint8Array.from([4]),t.toBytes(C.x),t.toBytes(C.y))}),r=e.fromBytes||(g=>{let f=g.subarray(1),T=t.fromBytes(f.subarray(0,t.BYTES)),C=t.fromBytes(f.subarray(t.BYTES,2*t.BYTES));return{x:T,y:C}});function n(g){let{a:f,b:T}=e,C=t.sqr(g),O=t.mul(C,g);return t.add(t.add(O,t.mul(g,f)),T)}if(!t.eql(t.sqr(e.Gy),n(e.Gx)))throw new Error("bad generator point: equation left != right");function o(g){return typeof g=="bigint"&&na<g&&g<e.n}function s(g){if(!o(g))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function l(g){let{allowedPrivateKeyLengths:f,nByteLength:T,wrapPrivateKey:C,n:O}=e;if(f&&typeof g!="bigint"){if(g instanceof Uint8Array&&(g=wr(g)),typeof g!="string"||!f.includes(g.length))throw new Error("Invalid key");g=g.padStart(T*2,"0")}let N;try{N=typeof g=="bigint"?g:ra(ai("private key",g,T))}catch{throw new Error(`private key must be ${T} bytes, hex or bigint, not ${typeof g}`)}return C&&(N=Tt(N,O)),s(N),N}let c=new Map;function u(g){if(!(g instanceof p))throw new Error("ProjectivePoint expected")}class p{constructor(f,T,C){if(this.px=f,this.py=T,this.pz=C,f==null||!t.isValid(f))throw new Error("x required");if(T==null||!t.isValid(T))throw new Error("y required");if(C==null||!t.isValid(C))throw new Error("z required")}static fromAffine(f){let{x:T,y:C}=f||{};if(!f||!t.isValid(T)||!t.isValid(C))throw new Error("invalid affine point");if(f instanceof p)throw new Error("projective point not allowed");let O=N=>t.eql(N,t.ZERO);return O(T)&&O(C)?p.ZERO:new p(T,C,t.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(f){let T=t.invertBatch(f.map(C=>C.pz));return f.map((C,O)=>C.toAffine(T[O])).map(p.fromAffine)}static fromHex(f){let T=p.fromAffine(r(ai("pointHex",f)));return T.assertValidity(),T}static fromPrivateKey(f){return p.BASE.multiply(l(f))}_setWindowSize(f){this._WINDOW_SIZE=f,c.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint&&!t.is0(this.py))return;throw new Error("bad point: ZERO")}let{x:f,y:T}=this.toAffine();if(!t.isValid(f)||!t.isValid(T))throw new Error("bad point: x or y not FE");let C=t.sqr(T),O=n(f);if(!t.eql(C,O))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y:f}=this.toAffine();if(t.isOdd)return!t.isOdd(f);throw new Error("Field doesn't support isOdd")}equals(f){u(f);let{px:T,py:C,pz:O}=this,{px:N,py:Q,pz:F}=f,U=t.eql(t.mul(T,F),t.mul(N,O)),W=t.eql(t.mul(C,F),t.mul(Q,O));return U&&W}negate(){return new p(this.px,t.neg(this.py),this.pz)}double(){let{a:f,b:T}=e,C=t.mul(T,xg),{px:O,py:N,pz:Q}=this,F=t.ZERO,U=t.ZERO,W=t.ZERO,se=t.mul(O,O),ke=t.mul(N,N),Le=t.mul(Q,Q),we=t.mul(O,N);return we=t.add(we,we),W=t.mul(O,Q),W=t.add(W,W),F=t.mul(f,W),U=t.mul(C,Le),U=t.add(F,U),F=t.sub(ke,U),U=t.add(ke,U),U=t.mul(F,U),F=t.mul(we,F),W=t.mul(C,W),Le=t.mul(f,Le),we=t.sub(se,Le),we=t.mul(f,we),we=t.add(we,W),W=t.add(se,se),se=t.add(W,se),se=t.add(se,Le),se=t.mul(se,we),U=t.add(U,se),Le=t.mul(N,Q),Le=t.add(Le,Le),se=t.mul(Le,we),F=t.sub(F,se),W=t.mul(Le,ke),W=t.add(W,W),W=t.add(W,W),new p(F,U,W)}add(f){u(f);let{px:T,py:C,pz:O}=this,{px:N,py:Q,pz:F}=f,U=t.ZERO,W=t.ZERO,se=t.ZERO,ke=e.a,Le=t.mul(e.b,xg),we=t.mul(T,N),nt=t.mul(C,Q),kt=t.mul(O,F),gi=t.add(T,C),ee=t.add(N,Q);gi=t.mul(gi,ee),ee=t.add(we,nt),gi=t.sub(gi,ee),ee=t.add(T,O);let me=t.add(N,F);return ee=t.mul(ee,me),me=t.add(we,kt),ee=t.sub(ee,me),me=t.add(C,O),U=t.add(Q,F),me=t.mul(me,U),U=t.add(nt,kt),me=t.sub(me,U),se=t.mul(ke,ee),U=t.mul(Le,kt),se=t.add(U,se),U=t.sub(nt,se),se=t.add(nt,se),W=t.mul(U,se),nt=t.add(we,we),nt=t.add(nt,we),kt=t.mul(ke,kt),ee=t.mul(Le,ee),nt=t.add(nt,kt),kt=t.sub(we,kt),kt=t.mul(ke,kt),ee=t.add(ee,kt),we=t.mul(nt,ee),W=t.add(W,we),we=t.mul(me,ee),U=t.mul(gi,U),U=t.sub(U,we),we=t.mul(gi,nt),se=t.mul(me,se),se=t.add(se,we),new p(U,W,se)}subtract(f){return this.add(f.negate())}is0(){return this.equals(p.ZERO)}wNAF(f){return _.wNAFCached(this,c,f,T=>{let C=t.invertBatch(T.map(O=>O.pz));return T.map((O,N)=>O.toAffine(C[N])).map(p.fromAffine)})}multiplyUnsafe(f){let T=p.ZERO;if(f===na)return T;if(s(f),f===di)return this;let{endo:C}=e;if(!C)return _.unsafeLadder(this,f);let{k1neg:O,k1:N,k2neg:Q,k2:F}=C.splitScalar(f),U=T,W=T,se=this;for(;N>na||F>na;)N&di&&(U=U.add(se)),F&di&&(W=W.add(se)),se=se.double(),N>>=di,F>>=di;return O&&(U=U.negate()),Q&&(W=W.negate()),W=new p(t.mul(W.px,C.beta),W.py,W.pz),U.add(W)}multiply(f){s(f);let T=f,C,O,{endo:N}=e;if(N){let{k1neg:Q,k1:F,k2neg:U,k2:W}=N.splitScalar(T),{p:se,f:ke}=this.wNAF(F),{p:Le,f:we}=this.wNAF(W);se=_.constTimeNegate(Q,se),Le=_.constTimeNegate(U,Le),Le=new p(t.mul(Le.px,N.beta),Le.py,Le.pz),C=se.add(Le),O=ke.add(we)}else{let{p:Q,f:F}=this.wNAF(T);C=Q,O=F}return p.normalizeZ([C,O])[0]}multiplyAndAddUnsafe(f,T,C){let O=p.BASE,N=(F,U)=>U===na||U===di||!F.equals(O)?F.multiplyUnsafe(U):F.multiply(U),Q=N(this,T).add(N(f,C));return Q.is0()?void 0:Q}toAffine(f){let{px:T,py:C,pz:O}=this,N=this.is0();f==null&&(f=N?t.ONE:t.inv(O));let Q=t.mul(T,f),F=t.mul(C,f),U=t.mul(O,f);if(N)return{x:t.ZERO,y:t.ZERO};if(!t.eql(U,t.ONE))throw new Error("invZ was invalid");return{x:Q,y:F}}isTorsionFree(){let{h:f,isTorsionFree:T}=e;if(f===di)return!0;if(T)return T(p,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:f,clearCofactor:T}=e;return f===di?this:T?T(p,this):this.multiplyUnsafe(e.h)}toRawBytes(f=!0){return this.assertValidity(),i(p,this,f)}toHex(f=!0){return wr(this.toRawBytes(f))}}p.BASE=new p(e.Gx,e.Gy,t.ONE),p.ZERO=new p(t.ZERO,t.ONE,t.ZERO);let y=e.nBitLength,_=Lg(p,e.endo?Math.ceil(y/2):y);return{CURVE:e,ProjectivePoint:p,normPrivateKeyToScalar:l,weierstrassEquation:n,isWithinCurveOrder:o}}function _w(a){let e=yh(a);return Wa(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function Ig(a){let e=_w(a),{Fp:t,n:i}=e,r=t.BYTES+1,n=2*t.BYTES+1;function o(ee){return na<ee&&ee<t.ORDER}function s(ee){return Tt(ee,i)}function l(ee){return Yc(ee,i)}let{ProjectivePoint:c,normPrivateKeyToScalar:u,weierstrassEquation:p,isWithinCurveOrder:y}=Lw({...e,toBytes(ee,me,S){let Fe=me.toAffine(),Ee=t.toBytes(Fe.x),ot=Fn;return S?ot(Uint8Array.from([me.hasEvenY()?2:3]),Ee):ot(Uint8Array.from([4]),Ee,t.toBytes(Fe.y))},fromBytes(ee){let me=ee.length,S=ee[0],Fe=ee.subarray(1);if(me===r&&(S===2||S===3)){let Ee=ra(Fe);if(!o(Ee))throw new Error("Point is not on curve");let ot=p(Ee),Ct=t.sqrt(ot),At=(Ct&di)===di;return(S&1)===1!==At&&(Ct=t.neg(Ct)),{x:Ee,y:Ct}}else if(me===n&&S===4){let Ee=t.fromBytes(Fe.subarray(0,t.BYTES)),ot=t.fromBytes(Fe.subarray(t.BYTES,2*t.BYTES));return{x:Ee,y:ot}}else throw new Error(`Point of length ${me} was invalid. Expected ${r} compressed bytes or ${n} uncompressed bytes`)}}),_=ee=>wr(qa(ee,e.nByteLength));function g(ee){let me=i>>di;return ee>me}function f(ee){return g(ee)?s(-ee):ee}let T=(ee,me,S)=>ra(ee.slice(me,S));class C{constructor(me,S,Fe){this.r=me,this.s=S,this.recovery=Fe,this.assertValidity()}static fromCompact(me){let S=e.nByteLength;return me=ai("compactSignature",me,S*2),new C(T(me,0,S),T(me,S,2*S))}static fromDER(me){let{r:S,s:Fe}=xr.toSig(ai("DER",me));return new C(S,Fe)}assertValidity(){if(!y(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!y(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(me){return new C(this.r,this.s,me)}recoverPublicKey(me){let{r:S,s:Fe,recovery:Ee}=this,ot=W(ai("msgHash",me));if(Ee==null||![0,1,2,3].includes(Ee))throw new Error("recovery id invalid");let Ct=Ee===2||Ee===3?S+e.n:S;if(Ct>=t.ORDER)throw new Error("recovery id 2 or 3 invalid");let At=Ee&1?"03":"02",Mi=c.fromHex(At+_(Ct)),lt=l(Ct),ya=s(-ot*lt),Za=s(Fe*lt),Nt=c.BASE.multiplyAndAddUnsafe(Mi,ya,Za);if(!Nt)throw new Error("point at infinify");return Nt.assertValidity(),Nt}hasHighS(){return g(this.s)}normalizeS(){return this.hasHighS()?new C(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return Lr(this.toDERHex())}toDERHex(){return xr.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Lr(this.toCompactHex())}toCompactHex(){return _(this.r)+_(this.s)}}let O={isValidPrivateKey(ee){try{return u(ee),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{let ee=fh(e.n);return wg(e.randomBytes(ee),e.n)},precompute(ee=8,me=c.BASE){return me._setWindowSize(ee),me.multiply(BigInt(3)),me}};function N(ee,me=!0){return c.fromPrivateKey(ee).toRawBytes(me)}function Q(ee){let me=ee instanceof Uint8Array,S=typeof ee=="string",Fe=(me||S)&&ee.length;return me?Fe===r||Fe===n:S?Fe===2*r||Fe===2*n:ee instanceof c}function F(ee,me,S=!0){if(Q(ee))throw new Error("first arg must be private key");if(!Q(me))throw new Error("second arg must be public key");return c.fromHex(me).multiply(u(ee)).toRawBytes(S)}let U=e.bits2int||function(ee){let me=ra(ee),S=ee.length*8-e.nBitLength;return S>0?me>>BigInt(S):me},W=e.bits2int_modN||function(ee){return s(U(ee))},se=Yo(e.nBitLength);function ke(ee){if(typeof ee!="bigint")throw new Error("bigint expected");if(!(na<=ee&&ee<se))throw new Error(`bigint expected < 2^${e.nBitLength}`);return qa(ee,e.nByteLength)}function Le(ee,me,S=we){if(["recovered","canonical"].some(Ki=>Ki in S))throw new Error("sign() legacy options not supported");let{hash:Fe,randomBytes:Ee}=e,{lowS:ot,prehash:Ct,extraEntropy:At}=S;ot==null&&(ot=!0),ee=ai("msgHash",ee),Ct&&(ee=ai("prehashed msgHash",Fe(ee)));let Mi=W(ee),lt=u(me),ya=[ke(lt),ke(Mi)];if(At!=null){let Ki=At===!0?Ee(t.BYTES):At;ya.push(ai("extraEntropy",Ki))}let Za=Fn(...ya),Nt=Mi;function ro(Ki){let ga=U(Ki);if(!y(ga))return;let no=l(ga),Yt=c.BASE.multiply(ga).toAffine(),va=s(Yt.x);if(va===na)return;let Pr=s(no*s(Nt+va*lt));if(Pr===na)return;let ol=(Yt.x===va?0:2)|Number(Yt.y&di),Rr=Pr;return ot&&g(Pr)&&(Rr=f(Pr),ol^=1),new C(va,Rr,ol)}return{seed:Za,k2sig:ro}}let we={lowS:e.lowS,prehash:!1},nt={lowS:e.lowS,prehash:!1};function kt(ee,me,S=we){let{seed:Fe,k2sig:Ee}=Le(ee,me,S),ot=e;return ch(ot.hash.outputLen,ot.nByteLength,ot.hmac)(Fe,Ee)}c.BASE._setWindowSize(8);function gi(ee,me,S,Fe=nt){let Ee=ee;if(me=ai("msgHash",me),S=ai("publicKey",S),"strict"in Fe)throw new Error("options.strict was renamed to lowS");let{lowS:ot,prehash:Ct}=Fe,At,Mi;try{if(typeof Ee=="string"||Ee instanceof Uint8Array)try{At=C.fromDER(Ee)}catch(Yt){if(!(Yt instanceof xr.Err))throw Yt;At=C.fromCompact(Ee)}else if(typeof Ee=="object"&&typeof Ee.r=="bigint"&&typeof Ee.s=="bigint"){let{r:Yt,s:va}=Ee;At=new C(Yt,va)}else throw new Error("PARSE");Mi=c.fromHex(S)}catch(Yt){if(Yt.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(ot&&At.hasHighS())return!1;Ct&&(me=e.hash(me));let{r:lt,s:ya}=At,Za=W(me),Nt=l(ya),ro=s(Za*Nt),Ki=s(lt*Nt),ga=c.BASE.multiplyAndAddUnsafe(Mi,ro,Ki)?.toAffine();return ga?s(ga.x)===lt:!1}return{CURVE:e,getPublicKey:N,getSharedSecret:F,sign:kt,verify:gi,ProjectivePoint:c,Signature:C,utils:O}}var vw,ww,xr,na,di,QN,xg,JN,Eg=$(()=>{"use strict";$c();Gn();Gn();_g();({bytesToNumberBE:vw,hexToBytes:ww}=uh),xr={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(a){let{Err:e}=xr;if(a.length<2||a[0]!==2)throw new e("Invalid signature integer tag");let t=a[1],i=a.subarray(2,t+2);if(!t||i.length!==t)throw new e("Invalid signature integer: wrong length");if(i[0]&128)throw new e("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:vw(i),l:a.subarray(t+2)}},toSig(a){let{Err:e}=xr,t=typeof a=="string"?ww(a):a;if(!(t instanceof Uint8Array))throw new Error("ui8a expected");let i=t.length;if(i<2||t[0]!=48)throw new e("Invalid signature tag");if(t[1]!==i-2)throw new e("Invalid signature: incorrect length");let{d:r,l:n}=xr._parseInt(t.subarray(2)),{d:o,l:s}=xr._parseInt(n);if(s.length)throw new e("Invalid signature: left bytes after parsing");return{r,s:o}},hexFromSig(a){let e=c=>Number.parseInt(c[0],16)&8?"00"+c:c,t=c=>{let u=c.toString(16);return u.length&1?`0${u}`:u},i=e(t(a.s)),r=e(t(a.r)),n=i.length/2,o=r.length/2,s=t(n),l=t(o);return`30${t(o+n+4)}02${l}${r}02${s}${i}`}},na=BigInt(0),di=BigInt(1),QN=BigInt(2),xg=BigInt(3),JN=BigInt(4)});var Xc,gh,Sg=$(()=>{"use strict";Ml();jr();Xc=class extends Ea{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,Pf(e);let i=Sa(t);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let r=this.blockLen,n=new Uint8Array(r);n.set(i.length>r?e.create().update(i).digest():i);for(let o=0;o<n.length;o++)n[o]^=54;this.iHash.update(n),this.oHash=e.create();for(let o=0;o<n.length;o++)n[o]^=106;this.oHash.update(n),n.fill(0)}update(e){return Qi(this),this.iHash.update(e),this}digestInto(e){Qi(this),Mo(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:t,iHash:i,finished:r,destroyed:n,blockLen:o,outputLen:s}=this;return e=e,e.finished=r,e.destroyed=n,e.blockLen=o,e.outputLen=s,e.oHash=t._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},gh=(a,e,t)=>new Xc(a,e).update(t).digest();gh.create=(a,e)=>new Xc(a,e)});function xw(a){return{hash:a,hmac:(e,...t)=>gh(a,e,jf(...t)),randomBytes:Wf}}function Tg(a,e){let t=i=>Ig({...a,...xw(i)});return Object.freeze({...t(e),create:t})}var kg=$(()=>{"use strict";Sg();jr();Eg();});function Ew(a){let e=Dg,t=BigInt(3),i=BigInt(6),r=BigInt(11),n=BigInt(22),o=BigInt(23),s=BigInt(44),l=BigInt(88),c=a*a*a%e,u=c*c*a%e,p=ri(u,t,e)*u%e,y=ri(p,t,e)*u%e,_=ri(y,vh,e)*c%e,g=ri(_,r,e)*_%e,f=ri(g,n,e)*g%e,T=ri(f,s,e)*f%e,C=ri(T,l,e)*T%e,O=ri(C,s,e)*f%e,N=ri(O,t,e)*u%e,Q=ri(N,o,e)*g%e,F=ri(Q,i,e)*c%e,U=ri(F,vh,e);if(!wh.eql(wh.sqr(U),a))throw new Error("Cannot find square root");return U}var Dg,Cg,Iw,vh,Ag,wh,Lh,p5,m5,Mg=$(()=>{"use strict";Vy();$c();kg();Dg=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Cg=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Iw=BigInt(1),vh=BigInt(2),Ag=(a,e)=>(a+e/vh)/e;wh=gg(Dg,void 0,void 0,{sqrt:Ew}),Lh=Tg({a:BigInt(0),b:BigInt(7),Fp:wh,n:Cg,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:a=>{let e=Cg,t=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-Iw*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),r=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),n=t,o=BigInt("0x100000000000000000000000000000000"),s=Ag(n*a,e),l=Ag(-i*a,e),c=Tt(a-s*t-l*r,e),u=Tt(-s*i-l*n,e),p=c>o,y=u>o;if(p&&(c=e-c),y&&(u=e-u),c>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+a);return{k1neg:p,k1:c,k2neg:y,k2:u}}}},Uy),p5=BigInt(0),m5=Lh.ProjectivePoint});var pl=class extends Laya.Scene{};var{regClass:Dv,property:X_}=Laya,so=class extends pl{constructor(){super()}onEnable(){console.log("IndexRT onEnable"),this.uiBtn.on(Laya.Event.CLICK,this,()=>{console.log("uiBtn"),Laya.Scene.open("scenes/UiMain.ls")}),this.phyBtn.on(Laya.Event.CLICK,this,()=>{console.log("phyBtn"),Laya.Scene.open("scenes/PhysicsGameMain.ls")}),this.d3Btn.on(Laya.Event.CLICK,this,()=>{console.log("d3Btn"),Laya.Scene.open("scenes/D3Main.ls")})}onDestroy(){}};so=d([Dv("wtSVevJMRPCBIPp2HPhqpw")],so);var ml=class extends Laya.Scene{};var{regClass:Mv,property:Pv}=Laya,lo=class extends ml{constructor(){super();this.text=""}get dataSource(){return super.dataSource}set dataSource(t){if(super.dataSource=t,!!t){if(t.avatar){let i=this.getChildByName("avatar").getChildByName("redHot");i.visible=t.avatar.redHot.visible}if(t.flag){let i=this.getChildByName("flag").getChildByName("flagText");i.text=t.flag.flagText.text}}}};d([Pv({type:"string"})],lo.prototype,"text",2),lo=d([Mv("c-3Sonu7RWOm5ETy2TrBcg")],lo);var dl=class extends Laya.Scene{};var Ae=class{constructor(){this._keys=[];this.THIS_ID="id"}init(e){for(let t in e){this._keys.push(t);let i=e[t];e[t]instanceof String&&String(e[t]).indexOf("[[")>=0&&(i=JSON.parse(e[t])),this[t]=i}}checkItems(){}};var co=class extends Ae{};var te=class{constructor(){this._values=[];this._keys=[];this.SERIALIZATION_NUM=new Date().getTime()}get values(){return this._values}get keys(){return this._keys}set(e,t){let i=this.indexOf(e);if(i>=0){this._values[i]=t;return}this._keys.push(e),this._values.push(t)}unshift(e,t){let i=this.indexOf(e);if(i>=0){this._values[i]=t;return}this._keys.unshift(e),this._values.unshift(t)}indexOf(e){let t=this._keys.indexOf(e);return t>=0?t:(e=e instanceof String?Number(e):e instanceof Number?e.toString():e,this._keys.indexOf(e))}get(e){let t=this.indexOf(e);return t<0?null:this._values[t]}remove(e){let t=this.indexOf(e);return t>=0?(this._keys.splice(t,1),this._values.splice(t,1),!0):!1}clear(){this._values.length=0,this._keys.length=0}};var oe=class oe{constructor(){}static get LoginType(){return oe._LoginType}static set LoginType(e){oe._LoginType=e,oe._LoginType&&oe._LoginType!=""&&Laya.LocalStorage.setItem(oe.COOKIE_CF_LoginType,oe._LoginType)}static get isWhiteList(){return!0}static get intance(){return oe._instance||(oe._instance=new oe),oe._instance}init(){}static get server(){return getServer()}static get requestTime(){return 0}static get loginTime(){return 0}static set m_iTimeFrame(e){if(e>1500){let t=function(){oe._m_iTimeFrame=0};oe._m_iTimeFrame=e,Laya.timer.clear(Laya.timer,t),Laya.timer.once(500,Laya.timer,t)}}static get m_iTimeFrame(){return oe._m_iTimeFrame}};oe.P_APP="app",oe.P_WEB_GW="gw",oe.P_WEB_FB="fb",oe.P_WEB_INSTANT="fbinstantgame",oe.PLATFORM=oe.P_APP,oe.IsRelease=!1,oe.m_bInstantGame=!1,oe.useWebVersion=!1,oe.m_strVersionEX="V003",oe.m_bIsMobWeb=!1,oe.m_strWebTag="",oe.Js_Version="1",oe.Game_Version="20231227_01",oe.App_Version="1.0.0",oe.SDK_Version="1.0.0",oe.M_strCountry="1",oe.M_bAppData=!1,oe.M_strTarget="",oe.UseGuide=!1,oe.m_mobileSameWb=!1,oe.ignoreLang=!1,oe.ignoreSheetNo=!1,oe.m_bIsIphoneX=!1,oe.Debug=0,oe.Res=0,oe.isTest=!0,oe.Server_URL="",oe.IP_User="",oe.Plantform_APPID="17",oe.ServerId=22310001,oe.Login_UID="-1",oe._LoginType="gamecenter",oe.Login_Token="96a3d1daf3b49735ed031c929c98d163",oe.Login_UDID="81BC19A8-B49B-47CC-BEFE-193E723B521A",oe.Device_Info="",oe.FCM_Token="",oe.APP_IsRelease=!0,oe.User_Lan="en",oe.UserAgent="",oe.Login_UserName="",oe.UserBanding=[],oe.APP_RES="",oe.COOKIE_CF_LAN="COOKIE_GG_LAN",oe.COOKIE_CF_LoginType="COOKIE_CF_LoginType",oe.IPHONEX_SCARE=1.22,oe.IPHONEX_TOP=44,oe.IPHONEX_BUTTOM=34,oe.DESIGN_WIDTH=1334,oe.DESIGN_HEIGHT=750,oe._m_iTimeFrame=0,oe.isStopPhysics=!1,oe.isDown=!1;var le=oe;var I=class a{constructor(){this._lanTypesById=new te,this._lanTypesByType=new te,this._configData=new te}static get instance(){return a._instance||(a._instance=new a),a._instance}initLanTypes(e){this._lanTypesById=new te,this._lanTypesByType=new te;for(let t in e){let i=new co;if(i.init(e[t]),parseInt(i.if_open)!=1)continue;let r=i.ID,n=i.type;this._lanTypesById.set(r,i),n&&n!=""&&this._lanTypesByType.set(n,i)}}getLanTypes(){return this._lanTypesById}getLanIdByType(e){if(this._lanTypesByType){let t=this._lanTypesByType.get(e);if(t)return parseInt(t.ID.toString())}return 1}getLanTypeById(e){if(this._lanTypesById){let t=this._lanTypesById.get(e);if(t)return t.type}return"en"}initConfigLan(e){this._configData=e}initUILan(e){Laya.Text.langPacks={};let t;for(t in e){let i=e[t].value;Laya.Text.langPacks[t]=i}}changeBrToN(e){let t=/<br>/g;for(;e.indexOf("<br>")!=-1;)e=e.replace(t,`
`);return e}replacePlaceholder(e,t){if(e=="")return"";let i=/{(\d+)}/g;return t.length>0&&(e=e.replace(i,function(){return t[arguments[1]]})),this.replaceLanByBR(e)}replaceLanByBR(e){return e+""}getLanguage(e,...t){return console.log("languageId: "+e),this.getLanguage2(e,t)}getLanguage2(e,t){if(this._configData&&this._configData[e]){let i=this._configData[e].value;if(i&&i!="")return this.replacePlaceholder(i,t)}return this.replacePlaceholder(e+"",t)}getUILang(e,t=null,i=null,r=null,n=null){if(e=Laya.Text.langPacks&&Laya.Text.langPacks[e]?Laya.Text.langPacks[e]:e,arguments.length>1)for(let o=0,s=arguments.length;o<s;o++)e=e.replace("{"+o+"}",arguments[o+1]);return e}FGM_GetLanguage(){let e=function(i){console.log("initGame->-----------------------------FGM_GetLanguage:=="+i),i&&(i=i.substring(0,2),le.User_Lan=i)},t=Laya.LocalStorage.getItem(le.COOKIE_CF_LAN);!t||t==""?e(this.language):e(t)}get language(){let e,t=Laya.Browser.window.navigator.appName;return t=="Netscape"?e=Laya.Browser.window.navigator.language:e=Laya.Browser.window.navigator.userLanguage,console.log("laya---------lang:"+e+"	type:"+t),e}FGM_SetLanguage(e){e&&e!=""&&Laya.LocalStorage.setItem(le.COOKIE_CF_LAN,e)}dispose(){}};var Br=class extends Ae{constructor(){super()}};var Or=class{constructor(e,t){this._valuesObject={};this.sheetObject=e,this.BaseItemClass=t}get keys(){if(this._keys)return this._keys;this._keys=[];let e;for(let t in this.sheetObject)!t||t==""||this._keys.push(t);return this._keys}get values(){if(this._values)return this._values;this._values=[];let e;for(let t in this.sheetObject)this._valuesObject[t]?e=this._valuesObject[t]:(e=new this.BaseItemClass,e.init(this.sheetObject[t]),this._valuesObject[t]=e),this._values.push(e);return this._values}get(e){if(this._valuesObject[e])return this._valuesObject[e];let t=this.sheetObject[e];if(t)return t;let i;this.BaseItemClass&&(i=new this.BaseItemClass,i.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig()  class : "+this.BaseItemClass),i.init(t)),this._valuesObject;let r=i||t;return this._valuesObject[e]=r,r}indexOf(e){let t=this._keys.indexOf(e);return t>=0?t:(e=e instanceof String?Number(e):e instanceof Number?e.toString():e,this._keys.indexOf(e))}clear(){this.sheetObject=null}};var Nr=class a{constructor(){}static get instance(){return a._instance||(a._instance=new a),a._instance}initSpotCfgData(){if(this.spotDic==null){let e=G.instance.getResByURL("config/spot.json");this.spotDic=new Or(e.data,Br)}}getSpotById(e){return this.initSpotCfgData(),this.spotDic.get(e)}get getSpotDic(){return this.initSpotCfgData(),this.spotDic}};var De=class a{constructor(){}registerCommCallBack(e=null){Laya.LayaEnv.isConch}static get instance(){return a._instance||(a._instance=new a),a._instance}sendCustumEvent(e,t=null,i=null){let r;if(i?r=i:r=Nr.instance.getSpotById(e),!r||!r.Event)return;let n,o=new Object;o.id=r.ID,o.eventKey=r.Event,o.type=r.type,this.sendWebEvent(o)}sendWebEvent(e){}dispose(){}reload(){Laya.Browser.window.location.reload()}testEvnt(){}};var hl=class{constructor(){this.effectMap=new te}loadEffect(e){this.urls=e;for(let t=0;t<this.urls.length;t++){let i=this.urls[t].hasOwnProperty("url")?this.urls[t].url:this.urls[t];i&&!G.instance.hasFormatEffectUrl(i)&&(this.urls[t]==""&&(this.urls[t]={}),this.urls[t].url=G.instance.getEffectUrl(i),this.urls[t].type=Laya.Loader.ATLAS)}Laya.loader.load(this.urls,Laya.Handler.create(this,this.loadAssets))}getEffectByUrl(e){return G.instance.hasFormatEffectUrl(e)||(e=G.instance.getEffectUrl(e)),this.effectMap.get(e)}copyEffectByUrl(e){G.instance.hasFormatEffectUrl(e)||(e=G.instance.getEffectUrl(e));let t=this.effectMap.get(e),i=new Laya.Animation;i.source=e,i.stop();let r=e+"_2";return this.urls.push(r),this.effectMap.set(r,i),i}loadAssets(){if(!this.effectMap)return;let e;for(let t=0;t<this.urls.length;t++)this.effectMap.get(this.urls[t].url)||(e=new Laya.Animation,e.loadAtlas(this.urls[t].url),e.interval=100,e.stop(),this.effectMap.set(this.urls[t].url,e));this.callBak&&this.callBak.run()}destory(){if(this.urls)for(let e=0;e<this.urls.length;e++)this.removeUrlEffect(this.urls[e]);this.effectMap&&this.effectMap.clear(),this.effectMap=null,this.callBak&&(this.callBak.clear(),this.callBak=null)}removeUrlEffect(e){if(e.hasOwnProperty("url")&&(e=e.url),this.effectMap){let t=this.effectMap.get(e)}if(this.effect){this.effect.destroy(),Laya.Loader.clearRes(e),this.effect=null,this.effectMap.remove(e),e=Laya.URL.formatURL(e);let t=Laya.Loader.loadedMap[e];t&&(console.log("clear Res: "+e),t instanceof Laya.Texture&&t.bitmap&&new Laya.Texture(t).destroy(!0),delete Laya.Loader.loadedMap[e])}}};var Y=class a{constructor(){this._isLoading=!1;this.AniConfPath="effect/load/load0.json"}static get instance(){return a._instance||(a._instance=new a),a._instance}get isLoading(){return this._isLoading}init(){this.effectManager==null&&(this.effectManager=new hl),this.loadingMc||this.loadAsset()}loadBgImg(){Laya.loader.load([G.instance.getGuangImg("guang")],Laya.Handler.create(this,this.loadImgAssets))}loadImgAssets(){}loadAsset(){Laya.loader.load(this.AniConfPath,Laya.Loader.ATLAS).then(()=>{this.createAnimation()})}createAnimation(e=null){this.loadingMc=new Laya.Animation,this.loadingMc.loadAtlas(this.AniConfPath),this.loadingMc.interval=30,this.loadingMc.index=1,this.loadingMc.play();var t=this.loadingMc.getGraphicBounds();this.loadingMc.pivot(t.width/2,t.height/2),this.loadingMc.pos(Laya.stage.width/2,Laya.stage.height/2),this.loadingMc.stop()}showLoading(e=!1){if(console.log("showLoading..."),this.loadingMc)e?(this._isLoading=!0,this.showMaskLoading(),this.showLazyLoading(),this._isLoading=!1):(this._isLoading=!0,this.showMaskLoading(),Laya.timer.once(3e3,this,this.showLazyLoading)),this.m_txtLabel&&(this.m_txtLabel.visible=!1);else return}showLoadingByInfo(e=""){if(this.loadingMc)this.showMaskLoading(),this.showLazyLoading(),this.m_txtLabel||(this.m_txtLabel=new Laya.Label),this.m_txtLabel.fontSize=18,this.m_txtLabel.color="#ffffff",this.m_txtLabel.strokeColor="#000000",this.m_txtLabel.stroke=2,this.m_txtLabel.width=150,this.m_txtLabel.y=(Laya.stage.height-this.m_txtLabel.height>>1)+100,Laya.stage.addChild(this.m_txtLabel);else return;this.m_txtLabel.text=e;let t;this.m_txtLabel.textField&&(t=this.m_txtLabel.textField.textWidth),this.m_txtLabel.x=Laya.stage.width-t>>1,this.m_txtLabel.visible=!0}playBg(){this.bgImg&&(this.bgImg.parent?this.bgImg.visible=!0:(Laya.stage.addChild(this.bgImg),this.bgImg.x=Laya.stage.width/2,this.bgImg.y=Laya.stage.height/2),Laya.timer.loop(100,this,this.loopFrame))}stopBg(){this.bgImg&&(this.bgImg.visible=!1,this.bgImg.rotation=0,Laya.timer.clear(this,this.loopFrame))}loopFrame(){this.bgImg.rotation+=3}showMaskLoading(){this._isLoading&&(this._backLayer||(this._backLayer=new Laya.Sprite,this._backLayer.mouseEnabled=!0,this._backLayer.alpha=0,this._backLayer.visible=!1,Laya.stage.addChild(this._backLayer)),this._backLayer.graphics.clear(),this._backLayer.graphics.drawRect(0,0,Laya.stage.width+200,Laya.stage.height,"#000000"),this._backLayer.width=Laya.stage.width,this._backLayer.height=Laya.stage.height,this._backLayer.x=Math.round(Laya.stage.width-this._backLayer.width>>1),this._backLayer.y=Math.round(Laya.stage.height-this._backLayer.height>>1),this._backLayer.visible=!0)}showLazyLoading(){this._isLoading&&(Laya.stage.addChild(this.loadingMc),this._backLayer.alpha=.24,this.loadingMc.x=Laya.stage.width/2,this.loadingMc.y=Laya.stage.height/2,this.loadingMc.play(),this.loadingMc.visible=!0,this.playBg()),Laya.timer.clear(this,this.showLazyLoading)}hideLoading(){if(console.log("hideLoading..."),this._isLoading=!1,this.loadingMc)this.loadingMc.stop(),this.loadingMc.visible=!1,this._backLayer&&(this._backLayer.visible=!1),this.m_txtLabel&&(this.m_txtLabel.visible=!1);else return;this.stopBg()}dispose(){this.loadingMc&&(this.loadingMc.destroy(),this.loadingMc.removeSelf(),this.loadingMc=null),this._backLayer&&(this._backLayer.destroy(),this._backLayer.removeSelf(),this._backLayer=null)}};var q=class q{constructor(){this._touchEnabled=!0;if(q._instance)throw new Error("LayerManager是单例,不可new.");q._instance=this}get m_sprPanelLayer(){return this._m_sprPanelLayer}set m_sprPanelLayer(e){this._m_sprPanelLayer=e}get m_sprMainUILayer(){return this._m_sprMainUILayer}set m_sprMainUILayer(e){this._m_sprMainUILayer=e}get m_sprTipLayer(){return this._m_sprTipLayer}set m_sprTipLayer(e){this._m_sprTipLayer=e}static get instence(){return q._instance||(q._instance=new q),q._instance}init(){this.m_sprSceneLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprSceneLayer),this.m_sprMainUILayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprMainUILayer),this.m_sprPanelLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprPanelLayer),this.m_sprPopLayer=new Laya.Sprite,this.m_sprPopLayer.mouseThrough=!0,Laya.stage.addChild(this.m_sprPopLayer),this.m_sprTipLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTipLayer),this.m_sprGuideLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprGuideLayer),this.m_sprTopLayer=new Laya.Sprite,Laya.stage.addChild(this.m_sprTopLayer)}get touchEnabled(){return this._touchEnabled}set touchEnabled(e){this._touchEnabled!=e&&(this._touchEnabled=e,this.m_sprSceneLayer.mouseEnabled=this._touchEnabled,this.m_sprMainUILayer.mouseEnabled=this._touchEnabled,this.m_sprPanelLayer.mouseEnabled=this._touchEnabled,this.m_sprPopLayer.mouseEnabled=this._touchEnabled,this.m_sprTipLayer.mouseEnabled=this._touchEnabled,this.m_sprGuideLayer.mouseEnabled=this._touchEnabled,this.m_sprTopLayer.mouseEnabled=this._touchEnabled)}addToLayerAndSet(e,t=q.M_PANEL,i=q.CENTER){this.addToLayer(e,t),this.setPosition(e,i)}getLayerIndex(e,t=q.M_PANEL){let i;switch(t){case q.M_SCENE:i=this.m_sprSceneLayer.getChildIndex(e);break;case q.M_MAINUI:i=this.m_sprMainUILayer.getChildIndex(e);break;case q.M_PANEL:i=this.m_sprPanelLayer.getChildIndex(e);break;case q.M_POP:i=this.m_sprPopLayer.getChildIndex(e);break;case q.M_TIP:i=this.m_sprTipLayer.getChildIndex(e);break;case q.M_GUIDE:i=this.m_sprGuideLayer.getChildIndex(e);break;case q.M_TOP:i=this.m_sprTopLayer.getChildIndex(e);break}return i}addToLayerAt(e,t=q.M_PANEL,i=0){switch(t){case q.M_SCENE:this.m_sprSceneLayer.addChildAt(e,i);break;case q.M_MAINUI:this.m_sprMainUILayer.addChildAt(e,i);break;case q.M_PANEL:this.m_sprPanelLayer.addChildAt(e,i);break;case q.M_POP:this.m_sprPopLayer.addChildAt(e,i);break;case q.M_TIP:this.m_sprTipLayer.addChildAt(e,i);break;case q.M_GUIDE:this.m_sprGuideLayer.addChildAt(e,i);break;case q.M_TOP:this.m_sprTopLayer.addChildAt(e,i);break}}addToLayer(e,t=q.M_PANEL){switch(t){case q.M_SCENE:this.m_sprSceneLayer.addChild(e);break;case q.M_MAINUI:this.m_sprMainUILayer.addChild(e);break;case q.M_PANEL:this.m_sprPanelLayer.addChild(e);break;case q.M_POP:this.m_sprPopLayer.addChild(e);break;case q.M_TIP:this.m_sprTipLayer.addChild(e);break;case q.M_GUIDE:this.m_sprGuideLayer.addChild(e);break;case q.M_TOP:this.m_sprTopLayer.addChild(e);break}}removeFromLayer(e,t){switch(t){case q.M_SCENE:this.m_sprSceneLayer.removeChild(e);break;case q.M_MAINUI:this.m_sprMainUILayer.removeChild(e);break;case q.M_PANEL:this.m_sprPanelLayer.removeChild(e);break;case q.M_POP:this.m_sprPopLayer.removeChild(e);break;case q.M_GUIDE:this.m_sprGuideLayer.removeChild(e);break;case q.M_TOP:this.m_sprTopLayer.removeChild(e);break}}clearLayer(e){switch(e){case q.M_SCENE:this.m_sprSceneLayer.removeChildren();break;case q.M_MAINUI:this.m_sprSceneLayer.removeChildren();break;case q.M_PANEL:this.m_sprSceneLayer.removeChildren();break;case q.M_POP:this.m_sprSceneLayer.removeChildren();break;case q.M_TOP:this.m_sprSceneLayer.removeChildren();break}}get stageWidth(){let e;return e=Laya.stage.width,e}get stageHeight(){let e;return e=Laya.stage.height,e}setPosition(e,t,i=0,r=0,n=!1,o=!1){let s=Laya.stage.width,l=Laya.stage.height;switch(this.m_iStageWidth=s,this.m_iStageHeight=l,t){case q.UP:e.x=n?s/2:(s-e.width*e.scaleX)/2,e.y=0;break;case q.DOWN:e.x=n?s/2:(s-e.width*e.scaleX)/2,e.y=l-e.height*e.scaleY;break;case q.LEFT:e.x=0,e.y=o?l/2:(l-e.height*e.scaleY)/2;break;case q.RIGHT:e.x=s-e.width*e.scaleX,e.y=o?l/2:(l-e.height*e.scaleY)/2;break;case q.LEFTUP:e.x=0,e.y=0;break;case q.RIGHTUP:e.x=s-e.width*e.scaleX,e.y=0;break;case q.LEFTDOWN:e.x=0,e.y=l-e.height*e.scaleY;break;case q.RIGHTDOWN:e.x=s-e.width*e.scaleX,e.y=l-e.height*e.scaleY;break;case q.CENTERLEFT:e.x=s/2-e.width*e.scaleX,e.y=o?l/2:(l-e.height*e.scaleY)/2;break;case q.CENTERRIGHT:e.x=s/2,e.y=o?l/2:(l-e.height*e.scaleY)/2;break;case q.CENTER:e.x=n?s/2:(s-e.width*e.scaleX)/2,e.y=o?l/2:(l-e.height*e.scaleY)/2;break;default:break}e.x+=i,e.y+=r}setLayer(e,t,i){if(!e||!t||e.parent!=t.parent)return;let r=e.parent.getChildIndex(e),n=t.parent.getChildIndex(t);i?r>n&&(e.parent.setChildIndex(e,n),e.parent.setChildIndex(t,r)):r<n&&(e.parent.setChildIndex(e,n),e.parent.setChildIndex(t,r))}};q.M_SCENE=1,q.M_MAINUI=2,q.M_PANEL=3,q.M_POP=4,q.M_TIP=5,q.M_GUIDE=7,q.M_TOP=6,q.UP=1,q.DOWN=16,q.LEFT=256,q.RIGHT=4096,q.CENTER=65536,q.LEFTUP=q.LEFT|q.UP,q.RIGHTUP=q.RIGHT|q.UP,q.LEFTDOWN=q.LEFT|q.DOWN,q.RIGHTDOWN=q.RIGHT|q.DOWN,q.CENTERLEFT=q.CENTER|q.LEFT,q.CENTERRIGHT=q.CENTER|q.RIGHT,q.MOVE=-1;var V=q;var ve=class ve{constructor(){this._m_bPlayMusic=!0;this._m_bPlayeSound=!0}static get instance(){return ve._instance||(ve._instance=new ve),ve._instance}get m_bPlayMusic(){return this._m_bPlayMusic}set m_bPlayMusic(e){this._m_bPlayMusic=e,e?this.m_strMusicURL!=null&&this.playMusicByURL(this.m_strMusicURL):this.musicChannel&&this.musicChannel.stop()}init(){Laya.SoundManager.autoStopMusic=!1;let e=Laya.LocalStorage.getItem(ve.COOKIE_CF_MUSIC);e!=null&&e!=""&&(ve.instance.m_bPlayMusic=parseInt(e)==1);let t=Laya.LocalStorage.getItem(ve.COOKIE_CF_SOUND);t!=null&&t!=""&&(ve.instance.m_bPlayeSound=parseInt(t)==1)}get m_bPlayeSound(){return this._m_bPlayeSound}set m_bPlayeSound(e){this._m_bPlayeSound=e}playMusicByURL(e){this.m_bPlayMusic&&(this.m_strMusicURL,this.m_strMusicURL==e&&this.musicChannel,this.m_strMusicURL=e,Laya.SoundManager.stopMusic(),this.musicChannel=Laya.SoundManager.playMusic(e,0,new Laya.Handler(this,this.onComplete)))}playMusicByName(e,t=".ogg"){let i=G.instance.getSoundURL(e,t);this.playMusicByURL(i)}playSound(e,t=1){this.m_bPlayeSound&&Laya.SoundManager.playSound(e,t,new Laya.Handler(this,this.onComplete))}playSoundByName(e,t=1){let i=G.instance.getSoundURLogg(e);this.playSound(i,t)}stopSoundByName(e){let t=G.instance.getSoundURLogg(e);Laya.SoundManager.stopSound(t)}switchMusic(e){let t=e?1:0;ve.instance.m_bPlayMusic=e,Laya.LocalStorage.setItem(ve.COOKIE_CF_MUSIC,t.toString())}switchSound(e){let t=e?1:0;ve.instance.m_bPlayeSound=e,Laya.LocalStorage.setItem(ve.COOKIE_CF_SOUND,t.toString())}onComplete(){}};ve.COOKIE_CF_MUSIC="COOKIE_CF_MUSIC",ve.COOKIE_CF_SOUND="COOKIE_CF_SOUND",ve.soundName_bg="bgm",ve.soundName1="ui01.ogg",ve.soundName2="ui02.ogg",ve.soundName3="ui03.ogg",ve.soundName4="hit.wav",ve.soundName30_1="ui30_1.ogg",ve.soundName28_1_star="ui28_1_star.ogg",ve.soundName28_2_star="ui28_2_stars.ogg",ve.soundName28_3_star="ui28_3_stars.ogg",ve.soundName28_bar="ui28_bar_rise.ogg",ve.soundName32="ui32.ogg",ve.soundName33="ui33.ogg",ve.soundName34="ui34.ogg",ve.soundName35="ui35.ogg",ve.soundName36="ui36.ogg",ve.soundName37="ui37.ogg",ve.soundName38="ui38.ogg",ve.soundName39="ui39.ogg",ve.soundName41="ui41.ogg",ve.soundName42="ui42.ogg",ve.soundName43="ui43.ogg",ve.soundName44="ui44.ogg",ve.soundName45="ui45.ogg",ve.soundNameUi40_1="ui40_1.ogg",ve.soundNameUi40_2="ui40_2.ogg",ve.soundNameUi40_3="ui40_3.ogg",ve.soundNameDressing="dressing_score_sfx.ogg",ve.soundNameAnswer="answer_bonus_points.ogg";var He=ve;var h=class{};h.FindView="FindView",h.FindEndView="FindEndView",h.FindAskDialog="FindAskDialog",h.FindRankUpDialog="FindRankUpDialog",h.QuickTipDialog="QuickTipDialog",h.QuickEndView="QuickEndView",h.QuickShareView="QuickShareView",h.QuickOperatorDialog="QuickOperatorDialog",h.MainView="MainView",h.RoleDialog="RoleDialog",h.QuickRechargeDialog="QuickRechargeDialog",h.CreateNameDialog="CreateNameDialog",h.DailyTaskDialog="DailyTaskDialog",h.ActivityTaskDialog="ActivityTaskDialog",h.ShareDialog="ShareDialog",h.InvitationCenterDialog="InvitationCenterDialog",h.DailyTaskDrawDialog="DailyTaskDrawDialog",h.GuideView="GuideView",h.GuideDialogView="GuideDialogView",h.ShareView="ShareView",h.MainTopView="MainTopView",h.GetMoreDialog="GetMoreDialog",h.ShopView="ShopView",h.ItemGetDialog="ItemGetDialog",h.GetTitleDialog="GetTitleDialog",h.NewFunUnLockDialog="NewFunUnLockDialog",h.DialogView="DialogView",h.MallView="MallView",h.MallCardView="MallCardView",h.MallBuyDialog="MallBuyDialog",h.FittingUiView="FittingUiView",h.TaskDialog="TaskDialog",h.CommentDialog="CommentDialog",h.PotraitChangDialog="PotraitChangDialog",h.ClothespressView="ClothespressView",h.ItemSellDialog="ItemSellDialog",h.ItemInfoDialog="ItemInfoDialog",h.OnlineAward="OnlineAward",h.MaillView="MailView",h.MailSendView="MailSendView",h.GameSettingDialog="GameSettingDialog",h.GamesettingSoundView="GamesettingSoundView",h.GameSettingLanguageDialog="GameSettingLanguageDialog",h.GameSettingVersionDialog="GameSettingVersionDialog",h.FriendMainView="FriendMainView",h.FriendSearchView="FriendSearchView",h.FriendGetRewardDialog="FriendGetRewardDialog",h.FriendRewardDialog="FriendRewardDialog",h.PreLoadingView="PreLoadingView",h.HelpDialog="HelpDialog",h.RechargeDialog="RechargeDialog",h.FirstRechargeDialog="FirstRechargeDialog",h.FirstWeekRechargeView="FirstWeekRechargeView",h.ClientErrView="ClientErrView",h.RoleUpgradeView="RoleUpgradeView",h.ActiveRechargeView="ActiveRechargeView",h.SmallSaleView="SmallSaleView",h.RechargeSelectDialog="RechargeSelectDialog",h.FBLikeView="FBLikeView",h.TurnSuitPreView="TurnSuitPreView",h.SlotMachineView="SlotMachineView",h.SlotMachineRewardPreDialog="SlotMachineRewardPreDialog",h.SlotMachineResultDialog="SlotMachineResultDialog",h.GashaponView="GashaponView",h.GashaponRewardView="GashaponRewardView",h.ActivityRankRewardView="ActivityRankRewardView",h.AddRechargeView="AddRechargeView",h.CupMatchStartDialog="CupMatchStartDialog",h.CupMatchEndDialog="CupMatchEndDialog",h.CreateLoginView="CreateLoginView",h.SelectHeadDialog="SelectHeadDialog",h.RoleInfoDialog="RoleInfoDialog",h.SelectHeroDialog="SelectHeroDialog",h.FriendMemberDialog="FriendMemberDialog",h.FriendMemberMoreDialog="FriendMemberMoreDialog",h.FriendAddDialog="FriendAddDialog",h.FriendApplyBackDialog="FriendApplyBackDialog",h.FriendApplyDialog="FriendApplyDialog",h.WalletDialog="WalletDialog",h.WalletTransferDialog="WalletTransferDialog",h.UnionApplyDialog="UnionApplyDialog",h.GuildEntranceView="GuildEntranceView",h.UnionApplyDialogView="UnionApplyDialogView",h.UnionApplyMemberDialog="UnionApplyMemberDialog",h.CreateNoticeDialog="CreateNoticeDialog",h.UnionNoticeView="UnionNoticeView",h.GuildInfoDialog="GuildInfoDialog",h.CreateUnionDialog="CreateUnionDialog",h.UnionInfoView="UnionInfoView",h.UnionEarningView="UnionEarningView",h.UnionRevenueDetailDialog="UnionRevenueDetailDialog",h.UnionSetRevenueDialog="UnionSetRevenueDialog",h.UnionBattleRecordDialog="UnionBattleRecordDialog",h.UnionRevenueRecordDialog="UnionRevenueRecordDialog",h.RankUnionView="RankUnionView",h.UnionWarView="UnionWarView",h.UnionWarTipDialog="UnionWarTipDialog",h.UnionWarSuccessDialog="UnionWarSuccessDialog",h.UnionWarFailDialog="UnionWarFailDialog",h.GamesettingView="GamesettingView",h.GameSettingGameAccountView="GameSettingGameAccountView",h.GuildMessageView="GuildMessageView",h.GuildMessageEditorView="GuildMessageEditorView",h.UnionMemberView="UnionMemberView",h.SelectUnionHeadDialog="SelectUnionHeadDialog",h.GuildBuildInfoView="GuildBuildInfoView",h.GuildChiefPrivilegeView="GuildChiefPrivilegeView",h.GuildDonationView="GuildDonationView",h.DigView="DigView",h.DigTipDialog="DigTipDialog",h.LuckdrawView="LuckdrawView",h.LoadDialog="LoadDialog",h.ChangeHeadDialog="ChangeHeadDialog",h.CreateRoomDialog="CreateRoomDialog",h.EnterRoomView="EnterRoomView",h.MatchEndRankView="MatchEndRankView",h.MatchReadyView="MatchReadyView",h.MatchEndView="MatchEndView",h.HeroGetDialog="HeroGetDialog",h.InputPwdDialog="InputPwdDialog",h.MailDialog="MailDialog",h.UnionAttrView="UnionAttrView",h.UnionAttrLvUpDialog="UnionAttrLvUpDialog",h.UnionAttributeDetailsDialog="UnionAttributeDetailsDialog",h.NoServerView="NoServerView",h.UnionMemberMoreDialog="UnionMemberMoreDialog",h.HeroUpgradeDialog="HeroUpgradeDialog",h.HeroDetailDialog="HeroDetailDialog",h.SkillTipDialog="SkillTipDialog",h.AFKView="AFKView",h.AFKBagDialog="AFKBagDialog",h.AFKDropDetailDialog="AFKDropDetailDialog",h.AFKMapView="AFKMapView",h.AFKSelectLevelDialog="AFKSelectLevelDialog",h.Knapsack="Knapsack",h.KnapsackTipDialog="KnapsackTipDialog",h.HeroFormationDialog="HeroFormationDialog",h.SignInDialog="SignInDialog",h.InviteRewardDialog="InviteRewardDialog",h.ChallengLoseDialog="ChallengLoseDialog",h.ChallengWinDialog="ChallengWinDialog",h.ChallengBossDialog="ChallengBossDialog",h.ThirbleDropDialog="ThirbleDropDialog",h.LevelDropDialog="LevelDropDialog",h.UseCardDialog="UseCardDialog",h.ArenaView="ArenaView",h.ArenaLoseDialog="ArenaLoseDialog",h.ArenaBattleDialog="ArenaBattleDialog",h.ArenaWinDialog="ArenaWinDialog",h.ArenaWarNotesView="ArenaWarNotesView",h.ArenaRuleDialog="ArenaRuleDialog",h.EquipSelectDialog="EquipSelectDialog",h.EquipDetailDialog="EquipDetailDialog";var E=class{};E.MOUSE_HOLDON="MOUSE_HOLDON",E.EVENT_OPEN_MODULE="EVENT_OPEN_MODULE",E.EVENT_MODULE_ADDED="EVENT_MODULE_ADDED",E.EVENT_CLOSE_MODULE="EVENT_CLOSE_MODULE",E.EVENT_CHECK_REMAIN="EVENT_CHECK_REMAIN",E.EVENT_LOADED_COMPLETE="EVENT_LOAD_COMPLETE",E.EVENT_LOADED_SCENE_BG_COM="EVENT_LOADED_SCENE_BG_COM",E.EVENT_LOAD_SKIN_COMPLETE="EVENT_LOAD_SKIN_COMPLETE",E.EVENT_LOAD_HEAD_SKIN_COMPLETE="EVENT_LOAD_HEAD_SKIN_COMPLETE",E.EVENT_LOADING_SUC="EVENT_LOADING_SUC",E.EVENT_BACK_TO_LOGIN="EVENT_BACK_TO_LOGIN",E.EVENT_LOGIN_GAME_END="EVENT_LOGIN_GAME_END",E.EVENT_ENTER_MAIN="EVENT_ENTER_MAIN",E.EVENT_CHANGE_HEAD="EVENT_CHANGE_HEAD",E.EVENT_MODIFY_HEAD="EVENT_MODIFY_HEAD",E.EVENT_ITEM_UPDATE="EVENT_ITEM_UPDATE",E.EVENT_ROLE_UPDATE="EVENT_ROLE_UPDATE",E.STAGE_ON_BLUR="STAGE_ON_BLUR",E.STAGE_ON_FOCUS="STAGE_ON_FOCUS",E.ACCOUNTVO_UPDATE="ACCOUNTVO_UPDATE",E.EVENT_CHECK_ICON_SELECT="EVENT_CHECK_ICON_SELECT",E.PACKAGE_UPDATE_ITEM="PACKAGE_UPDATE_ITEM",E.IMPROVE_SUCESS_EVENT="IMPROVE_SUCESS_EVENT",E.CHANG_POTRAIT="CHANG_POTRAIT",E.ROLE_INFO_CHANGE="ROLE_INFO_CHANGE",E.UPDATE_ASSETS="UPDATE_ASSETS",E.REFRESH_MAIN_TASK="REFRESH_MAIN_TASK",E.RECIVE_SUCESS_SERVICE="RECIVE_SUCESS_SERVICE",E.SCENE_ROLE_COMPELTE="SCENE_ROLE_COMPELTE",E.FITTING_CLOTH_BTN="FITTING_CLOTH_BTN",E.STORE_CLICKBG_EVENT="STORE_CLICKBG_EVENT",E.CLOSE_BG_VIEW="CLOSE_BG_VIEW",E.EVENT_UPDATE_ONLINE="EVENT_UPDATE_ONLINE",E.VIP_INFO_CHANGE="VIP_INFO_CHANGE",E.EVENT_FUNCTION_OPEN_UPDATE="EVENT_FUNCTION_OPEN_UPDATE",E.EVENT_ADD_ACTIVITY="EVENT_ADD_ACTIVITY",E.EVENT_REMOVE_ACTIVITY="EVENT_REMOVE_ACTIVITY",E.UPDATE_CHAO_PIAO="UPDATE_CHAO_PIAO",E.UPDATE_EXCHANGE_INFO="UPDATE_EXCHANGE_INFO",E.UPDATE_RED_STATE_EVENT="UPDATE_RED_STATE_EVENT",E.SYSTEM_OPEN_TIME_INITED="SYSTEM_OPEN_TIME_INITED",E.EVENT_OPEN_SHARE="EVENT_OPEN_SHARE",E.CHANGE_SCENE_BASE_ROLE_LAYER="CHANGE_SCENE_BASE_ROLE_LAYER",E.EVENT_CLICK_NUM="EVENT_CLICK_NUM",E.EVENT_HERO_DRAW_BACK="EVENT_HERO_DRAW_BACK",E.EVENT_ENTER_MATCH_ROOM="EVENT_ENTER_MATCH_ROOM",E.UPDATE_KILL_NUM="UPDATE_KILL_NUM",E.EVENT_RESTORE_DATA="EVENT_RESTORE_DATA",E.EVENT_FirstBlood="EVENT_FirstBlood",E.EVENT_MutiKill="EVENT_MutiKill",E.EVENT_GameScene_Gray="EVENT_GameScene_Gray",E.EVENT_UPDATE_GLOBAL_COOL="EVENT_UPDATE_GLOBAL_COOL";var w=class a extends Laya.EventDispatcher{static get intance(){return a._instance||(a._instance=new a),a._instance}};var Ht=class extends Laya.Script{constructor(){super();this.m_ioffsetX=0;this.m_ioffsetY=0}onAdded(){this.m_iLayerType=V.M_POP,this.m_iPositionType=V.CENTER,this.m_canTouch_all=!1,this.selfMaskAlpha=.8,this.m_arrMapEvent=[],this.canClickMask=!0,this.maskLayer=new Laya.Sprite,this.useShowAnimation=!0,this.useHideAnimation=!0,this.isAutoRealseRes=!0,this.m_strSound=He.soundName3}onClickMask(t){this.canClickMask&&this.maskClose()}maskClose(){this.close()}onStageResize(){}onEnable(){this._view=this.owner,this._view.addChild(this.maskLayer),this.createUI(),this.createUIEnd(),this.initializeLater()}createUI(){}createUIEnd(){}initializeLater(){this._addEvent(),this.initData(),this.useShowAnimation?(this._view.visible=!1,this.showAnimationEnd=!1,Laya.timer.frameOnce(5,this,this.popTimeOut,[this._view])):this.showAnimationEnd=!0}popTimeOut(t){Laya.timer.clear(this,this.popTimeOut),t.scale(.5,.5),t.visible=!0,Laya.Tween.to(t,{scaleX:1,scaleY:1,ease:Laya.Ease.backOut},300,null,Laya.Handler.create(this,this.onShowAnimationEnd),2),He.instance.playSoundByName(this.m_strSound),this._view.event(Laya.Event.OPEN)}onShowAnimationEnd(){this.showAnimationEnd=!0}_addEvent(){this.maskLayer.on(Laya.Event.CLICK,this,this.onClickMask),Laya.stage.on(Laya.Event.RESIZE,this,this.onStageResize),this.btn_com_back&&this.btn_com_back.on(Laya.Event.CLICK,this,this.onBack),this.btn_com_help&&this.btn_com_help.on(Laya.Event.CLICK,this,this.onHelp),this.addEvent()}addEvent(){}initData(){}_removeEvent(){this.maskLayer.offAll(),Laya.stage.off(Laya.Event.RESIZE,this,this.onStageResize),this.removeEvent()}removeEvent(){}addMapEvent(t,i,r,n,o=null){t.on(i,r,n,o),this.m_arrMapEvent.push(t)}removeAllMapEvent(){if(this.m_arrMapEvent){for(let t=0;t<this.m_arrMapEvent.length;t++)this.m_arrMapEvent[t].offAll();this.m_arrMapEvent.splice(0,this.m_arrMapEvent.length)}}dispose(){if(this.newRoleSpr){for(;this.newRoleSpr.numChildren>0;)this.newRoleSpr.removeChildAt(0);this.newRoleSpr=null}this.isDispose=!0,Z.intance.removeViewFromModuleManger(this),this.m_strName=null,this.m_strSound=null,this._removeEvent(),this.removeAllMapEvent(),Laya.Tween.clearAll(this._view),this.m_arrMapEvent=null,this.btn_com_back&&this.btn_com_back.offAll(),this.btn_com_help&&this.btn_com_help.offAll(),this.maskLayer&&(Laya.timer.clearAll(this.maskLayer),Laya.Tween.clearAll(this.maskLayer),this.maskLayer.offAll(),this.maskLayer.graphics.destroy(),this.maskLayer.removeSelf(),this.maskLayer.destroy(!0)),this.isAutoRealseRes&&G.instance.clearModuleUrl(this.m_strName),this._view&&(Laya.timer.clearAll(this._view),Laya.Tween.clearAll(this._view),this._view.offAll(),this._view.graphics.destroy(),this._view.removeSelf(),this._view.destroy(!0),this._view=null),Laya.timer.clearAll(this),Laya.Tween.clearAll(this),w.intance.event(E.EVENT_CLOSE_MODULE)}sendData(t,i=null){i==null&&(i=[])}close(t=null){this.useHideAnimation&&this._view?Laya.Tween.to(this._view,{scaleX:.5,scaleY:.5,ease:Laya.Ease.backIn},200,null,Laya.Handler.create(this,this.dispose,null),2):this.dispose()}static closeAll(){Z.intance.closeAll()}backToPreScene(){let t=xe.intance.getPreSceneData();xe.intance.setCurrentScene(t[0],t[1],t[2],t[3],!1)}get btn_com_back(){return this._view?this._view.getChildByName("btn_com_back"):null}get btn_com_help(){return this._view?this._view.getChildByName("btn_com_help"):null}onHelp(){this.m_helpId&&Z.intance.openModule(h.HelpDialog,this.m_helpId)}onBack(){this.close()}};var Z=class a extends Laya.DialogManager{constructor(){super();this.views=new te;this.m_arrLoadingArr=[];if(a._instance)throw new Error("LayerManager是单例,不可new.");a._instance=this,Laya.Dialog.manager=this}static get intance(){return a._instance||(a._instance=new a),a._instance}openModule(t,i=null){w.intance.event(E.EVENT_OPEN_MODULE,[t,i])}hasOpenView(t){return this.views.get(t)!=null}getOpenView(t){return this.views.get(t)}disposeView(t){if(this.getOpenView(t)){let i=this.getOpenView(t);if(i instanceof Array)for(let r=0;r<i.length;r++)i[r].close();else i.close()}}init(){w.intance.on(E.EVENT_OPEN_MODULE,this,this.onModulePanel),w.intance.on(E.EVENT_CLOSE_MODULE,this,this.disposeView)}initMainView(){}onModulePanel(t,i=null){console.log("ModuleManager.onModulePanel moudleName:"+t),this.m_arrLoadingArr.indexOf(t)==-1&&(this.getOpenView(t)||(Y.instance.showLoading(!1),this.m_arrLoadingArr.push(t),G.instance.loadModuleUrl(t,Laya.Handler.create(this,this.onLoaded,[t,i]))))}onLoaded(t,i=null){let r=this.m_arrLoadingArr.indexOf(t);r!=-1&&this.m_arrLoadingArr.splice(r,1);let n;var o=G.instance.m_objModuleViews[t];Laya.loader.load(o).then(s=>{if(n=s.create(),i&&n.setOpenData(i),n.m_strName=t,n instanceof Laya.Box)V.instence.addToLayer(n,n.m_iLayerType),V.instence.setPosition(n,n.m_iPositionType,n.m_ioffsetX,n.m_ioffsetY),this.addViewToModuleManger(n);else if(n instanceof Laya.Dialog){let l=n;l.m_iLayerType==V.M_POP?(l.isModal=!0,l.isShowEffect=!0,this.open(l,!1,!0)):(l.isShowEffect=!1,this.open(l)),this.addViewToModuleManger(l)}n&&w.intance.event(E.EVENT_MODULE_ADDED,n),n.hideLoadingBySelf||Y.instance.hideLoading()})}addViewToModuleManger(t){let i=t.m_strName;this.views.get(i)?this.views.get(i)instanceof Array?this.views.get(i).push(t):this.views.set(i,[this.views.get(i),t]):this.views.set(i,t),this.on(Laya.Event.CLOSE,this,this.removeViewFromModuleManger)}removeViewFromModuleManger(t){if(!t||!this.views)return;let i=t.m_strName;console.log("removeViewFromModuleManger viewName: "+i),t.off(Laya.Event.CLOSE,this,this.removeViewFromModuleManger);let r=this.views.get(i);if(r instanceof Array){let n=r.indexOf(t);n!=-1&&(r.splice(n,1),r.length==0&&this.views.remove(i))}else this.views.remove(i)}closeAll(){let t=[];for(let i of this.views.values)if(i instanceof Array)for(let r=0;r<i.length;r++){let n=i[r];n instanceof Ht&&t.push(n)}else i instanceof Ht&&t.push(i);for(let i=0;i<t.length;i++)t[i].dispose();t=[],super.closeAll()}doClose(t){super.doClose(t),this.event(Laya.Event.CLOSE,t)}};var uo=class a{constructor(){this._mapUrl="";this._mapWidth=0;this._mapHeight=0;this._gridWidth=0;this._gridHeight=0;this._xPics=0;this._yPics=0;this._fuzzyName=""}static get instance(){return a._instance||(a._instance=new a),a._instance}loadScene(e,t,i,r,n,o,s){this._fuzzyName!=""&&this._fuzzyName!=o&&this.dispose(),this._mapWidth=e,this._mapHeight=t,this._gridWidth=i,this._gridHeight=r,this._fuzzySprite=n,this._xPics=Math.floor(this._mapWidth/i),this._yPics=Math.floor(this._mapHeight/r),this._fuzzyName=o,this._fuzzyCallBack=s;let l=G.instance.setResURL("scene/subScene/test1/"+o+".json");Laya.loader.load([{url:l,type:Laya.Loader.ATLAS}],Laya.Handler.create(this,this.loadSceneComplete),Laya.Handler.create(this,this.loadProcess,null,!1),null,0,!0,null,!0)}loadProcess(){}loadSceneComplete(){let e=Laya.Loader.getAtlas(G.instance.setResURL("scene/subScene/test1/"+this._fuzzyName+".json"));if(this._fuzzySprite){this._fuzzySprite.graphics.clear();let t=0,i=new Laya.Sprite;i.name="mapSprite",this._fuzzySprite.addChildAt(i,0);for(let r=0;r<this._yPics;r++)for(let n=0;n<this._xPics;n++){let o=Laya.loader.getRes(e[t]),s=new Laya.Image;i.addChild(s),s.texture=o,s.size(o.width,o.height),s.pos(n*this._gridWidth,r*this._gridHeight),t++}}this._fuzzyCallBack!=null&&this._fuzzyCallBack.run()}dispose(){this._fuzzyCallBack=null,this._fuzzyName&&this._fuzzyName!=""&&Laya.loader.clearRes(G.instance.setResURL("atlas/"+this._fuzzyName+".json"))}};var de=class{};de.M_SCENE_MAIN="M_SCENE_MAIN",de.M_SCENE_SHOP="M_SCENE_SHOP",de.M_SCENE_HERO="M_SCENE_HERO",de.M_SCENE_PRE_LOAD="M_SCENE_PRE_LOAD",de.M_SCENE_MATCH_READY="M_SCENE_MATCH_READY",de.M_SCENE_MATCH="M_SCENE_MATCH",de.M_SCENE_AFKBATTLE="M_SCENE_AFKBATTLE",de.M_SCENE_GUILD="M_SCENE_GUILD",de.M_SCENE_RANK="M_SCENE_RANK",de.M_SCENE_UNIONWAR="M_SCENE_UNIONWAR",de.M_SCENE_DIG="M_SCENE_DIG",de.M_SCENE_MAIL="M_SCENE_MAIL",de.M_SCENE_KNAPSACK="M_SCENE_KNAPSACK",de.M_SCENE_UNION="M_SCENE_UNION",de.M_SCENE_ARENA="M_SCENE_ARENA";var wa=class wa{constructor(){this._list=[];this._isNoticing=!1;this._isListener=!1}static get instance(){return wa._instance||(wa._instance=new wa),wa._instance}notice(e){this._isNoticing?this._isListener||(this._isListener=!0,this._list.push(e),Laya.timer.loop(wa.Tip_Interval,this,this.onInterVal)):(this._list.push(e),this.noticeOne())}noticeOne(){var e=G.instance.m_objModuleViews.TxtNoticeView;let t;Laya.loader.load(e).then(i=>{if(!i){console.log("noticeOne : "+e+"  res is null");return}t=Laya.Pool.getItemByCreateFun("myPrefab",i.create,i);let r=this._list.shift();t.notice(r),Laya.stage.addChild(t),t.x=V.instence.stageWidth*.5-t.width*.5,t.y=V.instence.stageHeight*.5-t.height*.5,Laya.Tween.to(t,{y:t.y-250,alpha:.5},1e3,null,Laya.Handler.create(this,this.onFinish,[t]),1e3)})}onFinish(e){e&&(e.visible=!1,e.removeSelf())}onInterVal(){this._list.length>=1?this.noticeOne():(this._isNoticing=!1,this._isListener=!1,Laya.timer.clear(this,this.onInterVal))}};wa.Tip_Interval=1e3;var be=wa;var Ge=class a{constructor(){this._curErrTxt=""}static get instance(){return a._instance||(a._instance=new a),a._instance}initErrData(e){this.errData=e}get(e){return this.errData[e]?this.errData[e].words:(console.warn("服务端错误码语言包未配表 错误码："+e),e)}showErrorWord(e,t=999999){this.errData[e]&&this.errData[e].hasOwnProperty("words")?(this._curErrTxt=this.errData[e].words,t!=999999&&(this._curErrTxt=I.instance.replacePlaceholder(this._curErrTxt,[t]))):this._curErrTxt=""+e,be.instance.notice(this._curErrTxt)}showErrByString(e,t="#ff0000"){this._curErrTxt=e;let i=new Laya.Label(this._curErrTxt);i.width=500,i.align="center",i.height=40,i.fontSize=26,i.color=t,i.mouseEnabled=!1,i.strokeColor="#000000",i.stroke=.5,Laya.stage.addChild(i),i.x=(Laya.stage.width-i.width)/2,i.y=(Laya.stage.height-i.height)/2,Laya.Tween.to(i,{y:i.y-100,alpha:0},500,null,Laya.Handler.create(this,this.completeHandler,[i]),1e3)}completeHandler(e){e&&e.parent&&e.parent.removeChild(e)}dispose(){this.errData=null}};var Re=class{};Re.FUNID_MALL="1004",Re.FUN_ID_TAGGARDEN="2005",Re.FunID_WORK="1006",Re.FUN_ID_BARGAIN_SHOP="1007",Re.TRAVEL_HARD="1012",Re.TRAVEL_REWARD="3006",Re.FUNID_TUJIAN="2105",Re.FUN_ID_PARTY="7003",Re.FUN_ID_FB="9010",Re.FUN_ID_PET="9004",Re.FUN_ID_TURNTABLE="9001",Re.FUN_ID_GASHPOEN="9012",Re.FUN_ID_SHOPEXCHANGE="2104",Re.FUN_ID_TIME_STAGE="9014",Re.FUN_ID_DRAWCARD_PVP="1008613",Re.FUN_ID_PHONE="2004",Re.FUN_ID_DS="9017",Re.FUN_ID_BUY_PS="9030",Re.FUN_ID_DESTINY="3020",Re.FUN_ID_ACTIVITY_SHOP="9026",Re.FUN_ID_WORKSHOP_RECYCLE="3002",Re.FUN_ID_WORKSHOP_COLOR="3004",Re.FUN_ID_WORKSHOP_UPGRADE="3003",Re.FUN_ID_GUILD="1010",Re.FUN_ID_VIP="9022",Re.FUN_ID_MONTHCARD="9100";var fl=class{constructor(){this.bafflesInfo=[[330,740,9],[294,113.95,1],[712.95-80,343.45,3],[1251.35,125.95,7]];this.redHotStateMap=new te;this.openSystem=new te;this.m_dicSystemInfoCfg=new te,this._openTypeList=new te,this.parseJson()}hasRedState(e){let t=this.redHotStateMap.get(e+"");return t&&t.redState>0?t.redState:0}initSystemOpen(e){this.openSystem=new te;for(let t=0;t<e.length;t++)this.openSystem.set(e[t],!0),e[t]+""==Re.FUN_ID_PHONE.toString()}parseJson(){let e=G.instance.getResByURL("config/system_open.json"),t;for(let i in e)if(t=e[i],t){this.m_dicSystemInfoCfg.set(t.functionID,t);let r=this._openTypeList.get(t.open_type);r||(r=[],this._openTypeList.set(t.open_type,r)),r.push(t)}}getSystemsByType(e){let t=[];for(let i=0;i<this.m_dicSystemInfoCfg.values.length;i++){let r=this.m_dicSystemInfoCfg.values[i];r.positionID==e&&t.push(r)}return t}getLockFun(e,t){let i=this._openTypeList.get(e);for(let r of i)if(r.parameter1+""==t+"")return r;return null}getBuildSystem(){}isOpen(e){return le.buildClickState?!0:(e instanceof String&&(e=parseInt(e+"")),this.openSystem.get(e)!=null)}};var bl=class{constructor(){this._vipLv=0}isReceive(e){for(let t of this.isRewards)if(t+""==e.toString())return!0;return!1}addIsReceive(e){this.isReceive(e)||this.isRewards.push(e)}get vipLv(){return this._vipLv}set vipLv(e){this._vipLv!=e&&(this._vipLv=e)}};var Ut=class{constructor(){this._color=1;this.isLvUp=!1;this.newAddCnt=0}get simgurl(){return G.instance.getHeroHeadRes(this.heroItem.serialId,this.color)}get sk(){return G.instance.getHeroSkRes(this.heroItem.serialId,this.color)}get id(){return this._id}set id(e){this._id=e,this.heroItem=ie.intance.m_dicHeros.get(e+"")}get name(){return I.instance.getLanguage(this.heroItem.name)}set name(e){this._name=e}get color(){return this._color}set color(e){e&&(this._color=e)}get m_iNum(){return this._m_iNum}set m_iNum(e){this._m_iNum=e}};var Xt=class a{constructor(e=0){this._m_iLevel=0;this._m_arrDisc=[];this.newAddCnt=0;this.isLvUp=!1;this.needTip=!0;this.m_bSalon=!1;this.m_bIsSetId=!1;e!=0&&(this.m_iId=e)}get m_sIcon(){return this._m_sIcon}set m_sIcon(e){this._m_sIcon=e}get m_iLevel(){return this._m_iLevel>0?this._m_iLevel:1}set m_iLevel(e){this._m_iLevel=e||0}get m_iNum(){return this._m_iNum}set m_iNum(e){this._m_iNum=e}copyItem(){let e=new a;return e.m_iId=this.m_iId,e.m_iOriginalId=this.m_iOriginalId,e}get m_bTry(){return this.m_iId==this.m_iOriginalId?this._m_bSet=!1:this._m_bSet=!0,this._m_bSet}get m_strName(){return I.instance.getLanguage(this.itemItem.name)}set m_bTry(e){this._m_bSet=e}get m_iId(){return this._m_iId}set m_iId(e){this._m_iId=e,this.m_bIsSetId||(this.m_bIsSetId=!0,this.m_iOriginalId=e),this.setConfigData()}initDataByArr(e){this.m_iId=e.id,this.m_iNum=e.count}setConfigData(){if(this.m_iId!=0){if(this.itemItem=ie.intance.m_dicItems.get(this.m_iId.toString()),!this.itemItem){console.log("[          <items> find out id:"+this.m_iId+"             ]");return}if(this.subType=parseInt(this.itemItem.subType+""),this.type=parseInt(this.itemItem.type+""),this.m_sIcon=this.itemItem.icon,this.itemItem.buy_price){this.m_iPrice=this.itemItem.buy_price[0][1];let e=this.itemItem.buy_price[0][0],t=ie.intance.m_dicItems.get(e);t&&(this.m_strBuyIcon=G.instance.getItemIcon(t.icon))}this.itemItem.sell_price&&(this.m_iSellPrice=parseFloat(this.itemItem.sell_price[0][1])),this.m_iQuality=this.itemItem.quality,this.setQualityData()}}setQualityData(){this.m_arrQualityData=this.itemItem.starArr}get getIconURL(){return G.instance.getItemIcon(this.itemItem.icon)}copy(){let e=new a(this.m_iId);return e.m_iLevel=this.m_iLevel,e}compareName(){return I.instance.getLanguage(this.itemItem.name)}compareQuality(){return parseFloat(this.m_iQuality+"")}compareSellPrice(){return parseFloat(this.itemItem.sell_price[1]+"")}compareNum(){return parseFloat(this.m_iNum+"")}compareLevel(){return parseFloat(this.m_iLevel+"")}compareFragment(){let e=this.itemItem.id;return 0}compareTypeId(){return parseInt(this.m_iId+"")}};var Zt=class a{constructor(){this._isPop=!1;w.intance.on(E.EVENT_CHECK_REMAIN,this,this.onCheckRemain)}static get instance(){return a._instance||(a._instance=new a),a._instance}get model(){return Ue.instance}get isPop(){return this._isPop}startShow(){console.log("startShow");var e=this.model.hasRemain();!this._isPop&&e&&(this._isPop=!0,e instanceof Ut?w.intance.event(E.EVENT_OPEN_MODULE,h.HeroGetDialog):w.intance.event(E.EVENT_OPEN_MODULE,h.ItemGetDialog))}onCheckRemain(e){if(e==h.ItemGetDialog||e==h.HeroGetDialog){var t=this.model.hasRemain();t?t instanceof Ut?w.intance.event(E.EVENT_OPEN_MODULE,h.HeroGetDialog):w.intance.event(E.EVENT_OPEN_MODULE,h.ItemGetDialog):this._isPop=!1}}};var Ue=class a{constructor(e){this._list=[];this.needPop=!0;this.autoPop=!0}static get instance(){return a._instance||(a._instance=new a(new Td)),a._instance}get service(){return Zt.instance}addItem(e,t=!1){let i=new Xt;i.m_iId=e.m_iId,i.newAddCnt=e.newAddCnt,i.m_iLevel=e.m_iLevel,i.isLvUp=e.isLvUp,i.m_bNew=e.m_bNew,this._list.push(i),t&&this.service.startShow()}addHeroItem(e,t=!1){let i=new Ut;i.id=e.id,i.newAddCnt=e.newAddCnt,i.lv=e.lv,i.isLvUp=e.isLvUp,i.m_bNew=e.m_bNew,this._list.push(i),t&&this.service.startShow()}addItems(e,t=!1){this._list=this._list.concat(e),t&&this.service.startShow()}hasRemain(){return this._list.length>0?this._list[0]:null}get needListener(){return this._list.length>=2}addConsumeByServer(e){this._list.push(e)}addConsume(e,t){this._list.push([e,t])}getNextItem(){return this._list.length>0?this._list[0]:null}getOneItem(){return this._list.length>0?this._list.shift():null}},Td=class{};var yl=class{};var Xe=class{};Xe.TYPE_EXP=3003,Xe.TYPE_GOLD=3005,Xe.TYPE_TOX=3001,Xe.TYPE_USDT=3004,Xe.TYPE_BTC=3006,Xe.TYPE_ETH=3007;var wi=class{constructor(){}};wi.Item_Type_Cloths=1,wi.Item_Type_Items=2,wi.Item_Type_Materials=3,wi.Item_Type_Designs=4,wi.Item_Type_FacialFeatures=5,wi.Item_Type_Fragment=6,wi.Item_Type_ModelOwner=7;var Se=class Se{static getIsPetType(e){return e.toString()==Se.PET.toString()||e.toString()==Se.PET_FOOD.toString()||e.toString()==Se.PET_THIRSTY.toString()||e.toString()==Se.PET_PLAY.toString()||e.toString()==Se.PET_Bracelet.toString()||e.toString()=="39"||e.toString()=="40"||e.toString()==Se.PET_NECKLACE.toString()}static getPetClothsChild(){return[Se.PET_Bracelet,Se.PET_NECKLACE]}static getVipOpenKeyName(e){let t="";return e.toString()==Se.EYE_ZHU.toString()?t="unlock_contact":e.toString()==Se.FACE_TYPE.toString()?t="unlock_faceshape":e.toString()==Se.Eyebrow.toString()?t="unlock_brows":e.toString()==Se.Eye.toString()?t="unlock_eyes":e.toString()==Se.Nose.toString()?t="unlock_nose":e.toString()==Se.Mouse.toString()&&(t="unlock_mouth"),t}};Se.Eye=18,Se.Nose=19,Se.Mouse=20,Se.Eyebrow=21,Se.SkinColor=26,Se.Hair=23,Se.FACE_TYPE=22,Se.EYE_ZHU=27,Se.MODEL=28,Se.SCENE_STORE_BG=29,Se.SCENE_HOME_BG=32,Se.PET=33,Se.PET_FOOD=34,Se.PET_THIRSTY=35,Se.PET_PLAY=36,Se.PET_Bracelet=37,Se.PET_NECKLACE=38,Se.FRAGRANCE=204,Se.COMBINE_SCORE=99,Se.MATERIAL=101,Se.STAR_FACE=9;var ct=Se;var Lt=class{constructor(){this.m_dicItemList=new te,this.m_dicTypeList=new te,this.m_dicSubTypeList=new te}initData(e){this.m_dicItemList=new te,this.m_dicTypeList=new te,this.m_dicSubTypeList=new te;let t;for(let i=0;i<e.length;i++)t=new Xt,t.initDataByArr(e[i]),t.m_iNum>0&&this.pushItem(t);console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}updateData(e,t){this.updataItemVoByArr(e,t)}getCountById(e,t=!0){return Xe.isConsumeType(e)?A.instance.getConsumeValue(e):ie.intance.m_dicItems.get(e)==null?0:this.getItemCountById(e,t)}pushItem(e){this.m_dicItemList.set(e.m_iId,e),this.m_dicTypeList.get(e.type)==null&&this.m_dicTypeList.set(e.type,new te),this.m_dicSubTypeList.get(e.subType)==null&&this.m_dicSubTypeList.set(e.subType,new te),this.m_dicTypeList.get(e.type).set(e.m_iId,e),this.m_dicSubTypeList.get(e.subType).set(e.m_iId,e)}removeItem(e){this.m_dicItemList.remove(e.m_iId),this.m_dicTypeList.get(e.type).remove(e.m_iId),this.m_dicSubTypeList.get(e.subType).remove(e.m_iId)}updataItemVoByArr(e,t=!1){let i=[],r=!1,n;for(let o=0;o<e.length;o++){e[o]instanceof Array?(n=new yl,n.id=e[o][0],n.count=e[o][1]):n=e[o];let s=this.m_dicItemList.get(n.id);if(s==null&&(s=new Xt(n.id),this.pushItem(s),s.m_bNew=!0),t?(s.newAddCnt=n.count-s.m_iNum,s.m_iNum=n.count):(s.newAddCnt=n.count,s.m_iNum=n.count+n.count),s.initDataByArr(n),i.push(s.m_iId),s.m_iNum<=0&&this.removeItem(s),s.newAddCnt>0&&Ue.instance.needPop){if(s.itemItem.subType.toString()==ct.PET.toString()&&s.itemItem.type.toString()==wi.Item_Type_Items.toString())return;Ue.instance.addItem(s),r=!0}}r&&Ue.instance.needPop&&Ue.instance.autoPop&&Zt.instance.startShow(),i.length>0&&w.intance.event(E.PACKAGE_UPDATE_ITEM,[i])}getItemById(e){return this.m_dicItemList.get(e)}getItemsBySubType(e){let t=this.m_dicSubTypeList.get(e);return t==null&&(t=[]),t}getListByType(e){let t=[];return this.m_dicTypeList.get(e)&&(t=this.m_dicTypeList.get(e).values.slice()),t.sort(this.sortOnQa),t}getListBySubType(e){let t=[];return this.m_dicSubTypeList.get(e)&&(t=this.m_dicSubTypeList.get(e).values.slice()),t.sort(this.sortOnQa),t}sortOnQa(e,t){let i=e.itemItem.quality,r=t.itemItem.quality;return i<r?1:i>r?-1:0}getItemCountById(e,t=!0){let i=this.getItemById(e);return i?i.m_iNum:0}};Lt.TYPE_Consumption=1,Lt.TYPE_Equipment=2,Lt.TYPE_Currency=3,Lt.TYPE_Hero=4;var gl=class a{constructor(e){this._addNewFList=[];this.delayShowNewFun=!1}static get instance(){return a._instace==null&&(a._instace=new a(new kd)),a._instace}addNewOpenFun(e){this._addNewFList=this._addNewFList.concat(e),this.delayShowNewFun||this.showNewFun()}setDelayShowFun(e){this.delayShowNewFun!=e&&(this.delayShowNewFun=e,e||this.showNewFun())}showNewFun(){if(this._addNewFList.length>0){let e=this._addNewFList.pop(),t=A.instance.systemOpenModel.m_dicSystemInfoCfg.get(e.toString());t?t.if_open.toString()=="1"||t.if_pop.toString()!="1"?this.showNewFun():this.swithToNewFun(e):this.showNewFun()}}swithToNewFun(e,t=!1){let i=A.instance.systemOpenModel.m_dicSystemInfoCfg.get(e);if(i){if(i.if_open.toString()=="1"){be.instance.notice("system_open.json-->funId:"+i.functionID+"is close");return}(i.if_pop.toString()=="1"||t)&&w.intance.event(E.EVENT_OPEN_MODULE,[h.NewFunUnLockDialog,e])}}hasUnlockFunction(e,t=!0){let i=A.instance.systemOpenModel.m_dicSystemInfoCfg.get(e+""),r=A.instance.systemOpenModel.isOpen(parseInt(e));return!r&&t&&be.instance.notice(I.instance.getLanguage(i.lock_word)),r}popOutTip(e){e.toString()==Xe.TYPE_ENDURANCE.toString()&&w.intance.event("open_buy",2)}},kd=class{};var he=class{constructor(){}};he.NO_ALL=-1,he.YES=1,he.NO=2,he.SURE=4,he.CANCEL=8,he.CLOSE=16,he.RETURN_YES=1,he.RETURN_NO=2,he.RETURN_NONE=3,he.BASEALERTVIEW="BaseAlertDialog",he.BUYCONFIRMVIEW="BuyConfirmView",he.EnduranceOutTipView="EnduranceOutTipView",he.GUILDQUITVIEW="GuildQuitView",he.BuyItemConfirmView="BuyItemConfirmView",he.DOWNLOADALERT="DownLoadAlert";var Vt=class a{constructor(){}static instance(){return a._instance||(a._instance=new a),a._instance}AlertByType(e,t=null,i=0,r=null,n=null,o=!1,s=null){i==0&&(i=he.YES|he.NO),this.onLoaded(i,e,t,r,n,o,s)}onLoaded(e,t,i,r=null,n=null,o=!1,s=null){Z.intance.openModule(t,{flag:e,okHandler:r,cancelHandler:n,data:i,destroyDoCancel:o,initHandler:s})}};var ge=class ge{static getColorText(e,t="#FFFF00"){return'<font color="'+t+'">'+e+"</font>"}static getChildByName(e,t,i="name"){if(e&&e.hasOwnProperty(i)&&e[i]==t)return e;let r=e;if(r){let n=r.numChildren,o;for(let s=0;s<n;++s)if(o=r.getChildAt(s),o instanceof Laya.Sprite&&(o=ge.getChildByName(o,t,i)),o&&o.hasOwnProperty(i)&&o[i]==t)return o}return null}static getChildByAttri(e,t){if(e&&e.hasOwnProperty(t)&&e[t])return e[t];let i=e;if(i){let r=i.numChildren,n;for(let o=0;o<r;++o)if(n=i.getChildAt(o),n instanceof Laya.Sprite){if(n=ge.getChildByAttri(n,t),n)return n}else if(n&&n.hasOwnProperty(t)&&n[t])return n[t]}return null}static logs(e,t=0,i=!0,r=16777215){if(e=ge.GetLogTime+" "+e,i)switch(t){case 0:r=16777215;break;case 1:r=16777215;break;case 2:r=16711680;break;case 3:r=16777215;break;case 4:r=13434777;break;case 5:r=16742399;break}}static get GetLogTime(){let e=new Date;return e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+":"+e.getMilliseconds()}static get GRAY(){return ge._GRAY||(ge._GRAY=new Laya.ColorFilter([.3,.59,.11,0,0,.3,.59,.11,0,0,.3,.59,.11,0,0,0,0,0,1,0])),ge._GRAY}static get GRAY1(){if(!ge._GRAY1){let e=[.3086,.16094,.082,0,0,.2086,.26094,.082,0,0,.1086,.36094,.082,0,0,0,0,0,1,0];ge._GRAY1=new Laya.ColorFilter(e)}return ge._GRAY1}static get GLOW(){return ge._GLOW||(ge._GLOW=new Laya.GlowFilter("#ffffff",12,0,0)),ge._GLOW}static get BLUR(){if(!ge._BLUR){let e=new Laya.BlurFilter;e.strength=5,ge._BLUR=[e]}return ge._BLUR}static share(e=1001,t=2,i=null,r=null,n=0,o=0,s=null){}static get isParseWWhiteUser(){return ge._isParseWWhiteUser}static get isWhiteName(){return le.isWhiteList}static itemListHandler(e,t){let i=e.dataSource,r=i[0],n=i[1],o=2,s=e.skin;s&&(s.indexOf("xinSmall")!=-1?o=1:s.indexOf("xinBig")!=-1&&(o=3));let l;o==1?l="common/common_clip/clip_xinSmall"+n+".png":o==3?l="common/common_clip/clip_xinBig"+n+".png":l="common/common_clip/clip_xinMiddle"+n+".png",e.skin=l,e.dataSource=r}static setStarList(e,t){e.renderHandler=new Laya.Handler(ge,ge.itemListHandler),e.dataSource=t}static get BLACK(){return ge._BLACK||(ge._BLACK=new Laya.ColorFilter,ge._BLACK.setColor("#000000")),ge._BLACK}static get YELLOW(){return ge._YELLOW||(ge._YELLOW=new Laya.ColorFilter,ge._YELLOW.setColor("#ffe64b")),ge._YELLOW}static get YELLOW1(){return ge._YELLOW1||(ge._YELLOW1=new Laya.ColorFilter,ge._YELLOW1.setColor("#fee14e")),ge._YELLOW1}static get RED1(){return ge._RED1||(ge._RED1=new Laya.ColorFilter,ge._RED1.setColor("#ff4537")),ge._RED1}static get BLUE(){return ge._BLUE||(ge._BLUE=new Laya.ColorFilter,ge._BLUE.setColor("#2f72a7")),ge._BLUE}static setColor(e="#13e2cf"){let t=new Laya.ColorFilter;return t.setColor(e),t}static heroNotEnought(){Vt.instance().AlertByType(he.BASEALERTVIEW,I.instance.getLanguage(1059),he.CANCEL,Laya.Handler.create(this,this.onGetHero))}static onGetHero(){xe.intance.setCurrentScene(de.M_SCENE_SHOP,1)}static titickNotEnought(){Vt.instance().AlertByType(he.BASEALERTVIEW,I.instance.getLanguage(1060),he.CANCEL,Laya.Handler.create(this,this.onGetTitck))}static alertNoAll(e){Vt.instance().AlertByType(he.BASEALERTVIEW,e,he.NO_ALL)}static onGetTitck(){xe.intance.setCurrentScene(de.M_SCENE_SHOP,2)}static moneyNotEnought(){Vt.instance().AlertByType(he.BASEALERTVIEW,[I.instance.getLanguage(6047),I.instance.getLanguage(6048)],he.CANCEL,Laya.Handler.create(this,this.onGetMoney))}static onGetMoney(){window.location.href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x8ff22201d69583b3f081e49e16caf86f3cb708f7"}static openSquidGame(){Vt.instance().AlertByType(he.BASEALERTVIEW,I.instance.getLanguage(6056),he.CANCEL,Laya.Handler.create(this,this.onOpenSquidGame))}static onOpenSquidGame(){window.location.href="https://squidgamefi.io/?invitationCode=2oi"}static otherLogin(){Vt.instance().AlertByType(he.BASEALERTVIEW,I.instance.getLanguage(6054),he.YES,Laya.Handler.create(this,De.instance.reload))}static errorCodeTip(e){Vt.instance().AlertByType(he.BASEALERTVIEW,e,he.YES)}static shakeSprs(e,t=2,i=4,r=32){if(ge.isShake)return;ge.isShake=!0;let n=e.length,o=[];for(let u=0;u<n;u++){let p=e[u];o.push([p.x,p.y])}let s=[0,0],l=0,c=function(){s[l%2]=l++%4<2?0:i,l>t*4+1&&(Laya.timer.clear(Laya.stage,c),l=0,ge.isShake=!1);for(let u=0;u<n;u++){let p=e[u];p.x=s[0]+o[u][0],p.y=s[1]+o[u][1]}};Laya.timer.loop(r,Laya.stage,c)}static shake(e,t=2,i=4,r=32){if(ge.isShake)return;ge.isShake=!0;let n=new Laya.Point(e.x,e.y),o=[0,0],s=0,l=function(){o[s%2]=s++%4<2?0:i,s>t*4+1&&(Laya.timer.clear(Laya.stage,l),s=0,ge.isShake=!1),e.x=o[0]+n.x,e.y=o[1]+n.y};Laya.timer.loop(r,Laya.stage,l)}};ge._isParseWWhiteUser=!1,ge.isWWhiteUser=!1,ge.isShake=!1;var Ve=ge;var La=class{constructor(){}ReadShort(e){let t=new Uint8Array(e.buffer),i=t[e.pos]<<8,r=t[e.pos+1],n=i|r;return e.pos+=2,n}ReadInt(e){let t=new Uint8Array(e.buffer),i=t[e.pos]<<24|t[e.pos+1]<<16|t[e.pos+2]<<8|t[e.pos+3];return e.pos+=4,i}ReadByte(e){return e.getByte()}ReadString(e){let t=this.ReadShort(e);return t==0?"":e.getUTFBytes(t)}ReadBytes(e,t){let i=e.buffer.slice(e.pos,t);return new Laya.Byte(i)}dispose(){}};var vl=class{constructor(){this.writeByt=new Laya.Byte}writeByte(){}writeShort(e){this.writeByt.writeByte(e>>8),this.writeByt.writeByte(e)}writeInt(e){this.writeByt.writeByte(e>>24),this.writeByt.writeByte(e>>16),this.writeByt.writeByte(e>>8),this.writeByt.writeByte(e)}writeString(e){if(e.length==0){this.writeShort(0);return}let i=new Laya.Byte;i.writeUTFBytes(e),this.writeShort(i.length),this.writeByt.writeUTFBytes(e)}dispose(){}};var Hr=class a{constructor(){this.cookie="####1.0.0#0#";this.encryptKey="FFIYD#^3LB954JB90fzj*(d)sO7";this._curSendIndex=-1}static get instance(){return a._instance||(a._instance=new a),a._instance}setLoginCookie(){this.cookie="####1.0.0#"+le.Login_UDID+"#"+le.UserAgent}parseCookie(e,t,i,r="1.0.0"){let n=this.encryptKey+t+e,o=Rv(n);r=A.instance.M_S_VersionServer;let s=o+"#"+e+"#"+t+"#"+i+"#"+r+"#"+this._curSendIndex+"#1#"+le.Login_UDID+"#"+le.UserAgent;this.cookie=s}reflashCookie(){this.parseCookie(this.m_time,this.m_roleID,this.m_accout)}analyClient(e,t){let i=new vl;i.writeString(this.cookie),i.writeShort(e);let r=this.analyData[e];return r&&r.length>0&&this.writeByt(r,t,i),i.writeByt}writeByt(e,t,i){for(let r in e){let n=t[r];if(e[r].indexOf("7/")!=-1){i.writeShort(n.length);let o=this.analyData[String(e[r]).split("7/")[1]];if(o)for(let s in n)this.writeByt(o,n[s],i)}else if(e[r]=="1")i.writeInt(n);else if(e[r]=="2")i.writeShort(n);else if(e[r]=="3")i.writeString(n);else if(e[r]=="4"||e[r]=="5"||e[r]=="6"){i.writeShort(n.length);for(let o in n)e[r]=="4"?i.writeInt(n[o]):e[r]=="5"?i.writeShort(n[o]):e[r]=="6"&&i.writeString(n[o])}}}analyServer(e){let t=new La,i=t.ReadShort(e),r=[i],n=this.analyData[i];return n&&n.length>0&&(r=r.concat(this.readByt(n,e,t))),r}analyCookie(e=""){console.log("RECE_COOKIE: "+e,1);let t=e.split("#");this.m_time=t[0],this.m_roleID=t[1],this.m_accout=t[2];let i=t[3];this._curSendIndex=i,this._curSendIndex++,console.log("cookie:_time:"+this.m_time+"  _roleID："+this.m_roleID+"	  _accout："+this.m_accout),this.parseCookie(this.m_time,this.m_roleID,this.m_accout),A.instance.timeStamp=parseFloat(this.m_time)}readByt(e,t,i){let r=[];for(let n in e)if(e[n].indexOf("7/")!=-1){let o=i.ReadShort(t),s=this.analyData[String(e[n]).split("7/")[1]],l=[];if(s&&o>0)for(let c=0;c<o;c++)l.push(this.readByt(s,t,i));r.push(l)}else if(e[n]=="1")r.push(i.ReadInt(t));else if(e[n]=="2")r.push(i.ReadShort(t));else if(e[n]=="3")r.push(i.ReadString(t));else if(e[n]=="4"||e[n]=="5"||e[n]=="6"){let o=i.ReadShort(t),s=[];for(let l=0;l<o;l++)e[n]=="4"?s.push(i.ReadInt(t)):e[n]=="5"?s.push(i.ReadShort(t)):e[n]=="6"&&s.push(i.ReadString(t));r.push(s)}return r}dispose(){}};function Rv(a){throw new Error("Function not implemented.")}var Qe=class{constructor(){}};Qe.TYPE_NORMAL=0,Qe.TYPE_TRUST=1,Qe.TYPE_WEB3=2,Qe.type=0;async function Bv({timeout:a}={timeout:3e3}){let e=yf();return e||Ov({timeout:a})}async function Ov({timeout:a}={timeout:3e3}){return new Promise(e=>{let t=()=>{e(yf())};window.addEventListener("trustwallet#initialized",t,{once:!0}),setTimeout(()=>{window.removeEventListener("trustwallet#initialized",t,{once:!0}),e(null)},a)})}function yf(){let a=t=>!!t.isTrust;return typeof window<"u"&&typeof window.ethereum<"u"?a(window.ethereum)?window.ethereum:window.ethereum?.providers?window.ethereum.providers.find(a)??null:window.trustwallet??null:null}async function gf(){if(console.log("initWeb3 -0"),console.log("initWeb3 -1"),typeof window<"u"&&typeof window.ethereum<"u"&&!!window.ethereum.isTrust){let e=await Bv();console.log("initWeb3 -2"+e),Qe.trustProvider=e,Qe.type=Qe.TYPE_TRUST,console.log("initWeb3 -6")}else typeof web3<"u"&&(console.log("initWeb3 2"),web3=new Web3(web3.currentProvider),Qe.web3Provider=web3,Qe.type=Qe.TYPE_WEB3,console.log("initWeb3 3"))}var Li=class a{constructor(){this.walletDic=new te}static get instance(){return a._instance||(a._instance=new a),a._instance}getEthValue(e){return a.instance.walletDic.get(e)?a.instance.walletDic.get(e).ethValue:0}getValue(e){return a.instance.walletDic.get(e)?a.instance.walletDic.get(e).value:0}};var zt=class{};zt.ASSETS_TOX=1e4,zt.ASSETS_ARCANITE=10001,zt.ASSETS_CRYSTAL=10002,zt.ASSETS_MITHRIL=10003,zt.ASSETS_REDSTONE=10004,zt.ASSETS_TRUEIRON=10005;var B=class{static initConfig(e){this.configDic=new te;for(let t of e){let i=t.sstringvalue;t.sadditional==="JSON"&&(i=JSON.parse(i)),this.configDic.set(t.skey2,i),this[t.skey2]=i}ie.intance.resetTokenData()}};B.ADDRESS0="0x0000000000000000000000000000000000000000",B.TOX_ADDRESS="0xA7b194Fb8f9b5A3a92bD5e99E2028C922727c770",B.TOKEN_ERC20ABI=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"miner",type:"address"}],name:"addMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_delMinter",type:"address"}],name:"delMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"idx",type:"uint256"}],name:"getMinter",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMinterLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],B.ACCOUNT_ADDRESS="0x5ff2123b0Aa4bD97eeF5F6388EFCB56cd29D6835",B.ACCOUNT_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"nickName",type:"string"},{indexed:!1,internalType:"string",name:"avatar",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthHeight",type:"uint256"},{indexed:!1,internalType:"uint256",name:"birthPlace",type:"uint256"},{indexed:!1,internalType:"uint256",name:"gender",type:"uint256"},{indexed:!1,internalType:"uint256",name:"influence",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_avatar",type:"string"}],name:"changeAvatar",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"}],name:"changeGender",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"changeInfluence",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"changeLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_nickname",type:"string"}],name:"changeNickName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_nickname",type:"string"},{internalType:"string",name:"_avatar",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_birthHeight",type:"uint256"},{internalType:"uint256",name:"_birthPlace",type:"uint256"},{internalType:"uint256",name:"_gender",type:"uint256"},{internalType:"uint256",name:"_influence",type:"uint256"}],name:"createAccount",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getAccountInfo",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"birthHeight",type:"uint256"},{internalType:"uint256",name:"birthPlace",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"uint256",name:"influence",type:"uint256"}],internalType:"struct AccountInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],B.CREATE_ACCOUNT_ADDRESS="0x1f17861277281Fc2A97Ef59F15dE994D4e658e8b",B.CREATE_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"_accountContract",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"uint256[]",name:"_place",type:"uint256[]"}],name:"addBirthPlace",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountInfo",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"birthHeight",type:"uint256"},{internalType:"uint256",name:"birthPlace",type:"uint256"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"uint256",name:"influence",type:"uint256"}],internalType:"struct AccountInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBirthPlace",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWebSit",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"hasCanRegister",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"hasRegistered",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"nickName",type:"string"},{internalType:"uint256",name:"gender",type:"uint256"},{internalType:"string",name:"_avatar",type:"string"}],name:"registerAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_canRegister",type:"bool"}],name:"setCanRegister",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_websit",type:"string"}],name:"setWebsit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],B.EDIT_ACCOUNT_ADDRESS="0xaa1B8FA74Ed295123a6336C2D3a88cB973160dfa",B.EDIT_ACCOUNT_ABI=[{inputs:[{internalType:"address",name:"_accountContract",type:"address"},{internalType:"string",name:"_website",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"rate",type:"uint256"}],internalType:"struct UpdateProfile.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWebsite",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_rate",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_website",type:"string"}],name:"setWebsite",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"nickName",type:"string"},{internalType:"string",name:"avatar",type:"string"}],name:"updateProfile",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],B.STAKING_ARCANITE_ADDRESS="0xc305D92dCAaa73BacB7AADe5a4EB433d3AffFF6f",B.STAKING_CRYSTAL_ADDRESS="0xfE9fCfAA3D434A51dCC9E46C4C7fe26932cbB2C9",B.STAKING_MITHRIL_ADDRESS="0x7E36042672b5302311A9Fd92Ea994422B673C30d",B.STAKING_REDSTONE_ADDRESS="0x4E5C8a36c7CCB5d388ef045505e590B5265e2637",B.STAKING_TRUEIRON_ADDRESS="0xAF88Ff4BfAF5D28adB1a3D9521F5232b59CFC5E2",B.STAKING_POOL_ABI=[{inputs:[{internalType:"uint256",name:"_poolPlace",type:"uint256"},{internalType:"address",name:"_stakeToken",type:"address"},{internalType:"address",name:"_accountContract",type:"address"},{internalType:"address",name:"_rewardsContract",type:"address"},{internalType:"address",name:"_empowerContract",type:"address"},{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"rewards",type:"uint256"}],name:"RewardPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Withdrawn",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"calcPerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"capacityOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_dailyRewards",type:"uint256"}],name:"changeDailyRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimAllReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"claimReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"earned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"earnedAll",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"estimatePerSecondsRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAccountContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokens",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getDailyRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getEmpowerContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastUpdateTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLimitTokensNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPoolPlace",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsPerUnitStored",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRewardsRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getStakeTokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenIdleStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenMiningStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isAccountStakeToken",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_empowerContract",type:"address"}],name:"setEmpowerContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_limitTokensNumber",type:"uint256"}],name:"setLimitTokensNumber",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_idleStatus",type:"uint256"}],name:"setTokenIdleStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_miningStatus",type:"uint256"}],name:"setTokenMiningStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawAllAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"withdrawAndClaim",outputs:[],stateMutability:"nonpayable",type:"function"}],B.STAKING_HERO_POWERCALC_ABI=[{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenLevel",type:"uint256"},{internalType:"bool",name:"isMatchProfession",type:"bool"}],name:"calcCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getFormulaParams",outputs:[{components:[{internalType:"uint256",name:"constantValue",type:"uint256"},{internalType:"uint256",name:"linearCoefficient",type:"uint256"},{internalType:"uint256",name:"quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"percentage",type:"uint256"}],internalType:"struct EmpowerCalcFormula.FormulaParams",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_constantValue",type:"uint256"},{internalType:"uint256",name:"_linearCoefficient",type:"uint256"},{internalType:"uint256",name:"_quadraticCoefficient",type:"uint256"},{internalType:"uint256",name:"_percentage",type:"uint256"}],name:"setFormulaParams",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],B.BLINDBOX_ADDRESS="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",B.BLINDBOX_ABI=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],B.BLINDBOX_ADDRESS_V2="0xaf8d3eb0f0e0a454Ec9B3Fb7207dD70Ba302d653",B.BLINDBOX_ABI_V2=[{inputs:[{internalType:"address",name:"_heroAddress",type:"address"},{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"},{internalType:"string",name:"_baseName",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"accountIsInWhiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_races",type:"uint256[]"}],name:"addRaces",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBaseName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getIsOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxBuyTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMaxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPirce",outputs:[{components:[{internalType:"address",name:"exchangeToken",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct HeroMallV1.Price",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRaces",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReceiverAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhiteListContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"recruit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"}],name:"setBaseName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBuyTimes",type:"uint256"}],name:"setMaxBuyTimes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_isOpen",type:"bool"}],name:"setOpen",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_exchangeToken",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiverAddress",type:"address"}],name:"setReceiverAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whiteListContract",type:"address"}],name:"setWhiteListContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],B.HERO_ADDRESS="0xCC0A4E3Bd1D49D7Ef9C431C0aD87D36B0B342018",B.HERO_ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"name",type:"string"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"rarity",type:"uint256"},{indexed:!1,internalType:"uint256",name:"series",type:"uint256"},{indexed:!1,internalType:"uint256",name:"race",type:"uint256"},{indexed:!1,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"level",type:"uint256"}],name:"UpdateLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"mineralLevel",type:"uint256"}],name:"UpdateMineralLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"string",name:"name",type:"string"}],name:"UpdateName",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"race",type:"uint256"}],name:"UpdateRace",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"rarity",type:"uint256"}],name:"UpdateRatity",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"series",type:"uint256"}],name:"UpdateSeries",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"status",type:"uint256"}],name:"UpdateStatus",type:"event"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"addGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"government",type:"address"}],name:"deletedGovernment",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getGovernment",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGovernmentLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getNFTParams",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"rarity",type:"uint256"},{internalType:"uint256",name:"series",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"},{internalType:"uint256",name:"mineralLevel",type:"uint256"}],internalType:"struct Parmas",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isGovernment",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"_name",type:"string"},{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"},{internalType:"uint256",name:"_race",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"newTokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],name:"updateLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_mineralLevel",type:"uint256"}],name:"updateMineralLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_name",type:"string"}],name:"updateName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"race",type:"uint256"}],name:"updateRace",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_rarity",type:"uint256"}],name:"updateRatity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"_series",type:"uint256"}],name:"updateSeries",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"status",type:"uint256"}],name:"updateStatus",outputs:[],stateMutability:"nonpayable",type:"function"}],B.ASSETS_ARCANITE_ADDRESS="0x9973Fe783b5A1923dEE41E4115AD888573E3f2B5",B.ASSETS_CRYSTAL_ADDRESS="0x362d1C7CfE094fc4B6619Dc0486f0DadAee923A5",B.ASSETS_MITHRIL_ADDRESS="0x3f623e7d2fb52d1f8E718fb94bf82d80F1985ebf",B.ASSETS_REDSTONE_ADDRESS="0x891008aF9d77467f1c48845EAB210F951A8e9e4F",B.ASSETS_TRUEIRON_ADDRESS="0x93C52C6ee7c814f83983Ac20cDe369DA9EFc984a",B.CREATE_UNION_ADDRESS="0xcd62E6a07072Bed38F4126ba5C9361901c71846e",B.CREATE_UNION_ABI="",B.UNION_NUMBER_SYS_ADDRESS="0x45F0de10fA3982c4d18AbaE89a5F0663123f955c",B.UNION_NUMBER_SYS_ABI="",B.UPGRADE_UNION_ADDRESS="0x18320fD38F3806C0A9fb2B41202Ed0bD3f826894",B.UPGRADE_UNION_ABI="",B.UNION_DISTRIBUTE_ADDRESS="0x0f6b4bBa8b01B6ee2CC3232ea963ac702CaDCe04",B.UNION_WAR_ADDRESS="0xF8489Bb617F9DCaBF33bEaeBdA4CCD029E9E247E",B.UNION_DISTRIBUTE_ABI="",B.UNION_WAR_ABI="",B.HERO_TO_TOKEN_POOL_ADDRESS="",B.HERO_TO_TOKEN_POOL_ABI="",B.WITHDRAW_AND_RECHARGE_ADDRESS="",B.WITHDRAW_AND_RECHARGE_ABI="",B.SERIESHEROMALL_ADDRESS="",B.SERIESHEROMALL_ABI="",B.HEROFORMATION_ADDRESS="",B.HEROFORMATION_ABI="",B.HERO_MINT_ADDRESS="",B.HERO_MINT_ABI="";var po=class{constructor(){this.coins={};this.needTip=!0}};var Ur=class a{constructor(){this.create_contract=null;this.edit_account=null;this.account_contract=null;this.tokenId=0}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"||(this.account_contract=new window.web3.eth.Contract(B.ACCOUNT_ABI,B.ACCOUNT_ADDRESS),this.create_contract=new window.web3.eth.Contract(B.CREATE_ACCOUNT_ABI,B.CREATE_ACCOUNT_ADDRESS),this.edit_account=new window.web3.eth.Contract(B.EDIT_ACCOUNT_ABI,B.EDIT_ACCOUNT_ADDRESS))}async getAccountVoFromServer(){let e=await pe.requestPost("cybertron-sys-api/api/v1/account/find",{address:ue.instance.walletAddress},!1,!1);if(e){let t=new po;return Object.assign(t,e),console.log("info========"+JSON.stringify(t)),t}return e}async updateProfile(e,t,i){var r=A.instance.playerDto.sex,n=A.instance.playerDto;let o=await pe.requestPost("wxgame/player/changeInfo",{name:e,sex:r,icon:t,country:i});return o?(n.icon=o.icon,n.country=o.country,n.name=o.name,n.sex=o.sex,n):null}async getTokenId(){return this.tokenId?this.tokenId:(this.tokenId=await this.account_contract.methods.tokenOfOwnerByIndex(ue.instance.walletAddress,0).call(),this.tokenId=parseInt(this.tokenId+""),this.tokenId)}async getAccountInfo(){this.tokenId||await this.getTokenId();let e=await this.account_contract.methods.getAccountInfo(this.tokenId).call(),t=new po;return t.pid=e[0],t.name=e[1],t.icon=e[2],t.lv=e[3],t.birthHeight=e[4],t.birthPlace=e[5],t.sex=e[6],t.influence=e[7],console.log("info========"+JSON.stringify(t)),t}};var si=class{constructor(){}};si.UPDATE_LOCAL_WALLET_LIST_EVENT="WalletEvent:UPDATE_LOCAL_WALLET_LIST_EVENT",si.TRANSFER_LOCAL_WALLET_EVENT="WalletEvent:TRANSFER_LOCAL_WALLET_EVENT";var mo=class{};var Vr=class a{constructor(){this.assets_ary=[[1e4,B.TOX_ADDRESS],[10001,B.ASSETS_ARCANITE_ADDRESS],[10002,B.ASSETS_CRYSTAL_ADDRESS],[10003,B.ASSETS_MITHRIL_ADDRESS],[10004,B.ASSETS_REDSTONE_ADDRESS],[10005,B.ASSETS_TRUEIRON_ADDRESS]];this.assets_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){typeof window.ethereum>"u"||(this.assets_contract=new window.web3.eth.Contract(B.WITHDRAW_AND_RECHARGE_ABI,B.WITHDRAW_AND_RECHARGE_ADDRESS))}async depositWallet(e,t){if(Y.instance.showLoading(!0),!await ue.instance.allowanceAddressByTokenAddress(B.WITHDRAW_AND_RECHARGE_ADDRESS,e)){Y.instance.hideLoading(),be.instance.notice(I.instance.getLanguage(15));return}return t=window.web3.utils.toWei(t+""),await this.assets_contract.methods.recharge(e.toLowerCase(),t).send({from:ue.instance.walletAddress},(r,n)=>{if(r)return Y.instance.hideLoading(),!1}),!0}async withdrawToken(e){return Y.instance.showLoading(!0),await this.assets_contract.methods.withdrawToken(e.tokenAddress,e.to,e.amount,e.timestamp,e.hash,e.r,e.s,e.v).send({from:ue.instance.walletAddress},(t,i)=>{if(t)return Y.instance.hideLoading(),!1}),!0}async updateAssetsBalance(){Li.instance.walletDic==null&&(Li.instance.walletDic=new te);for(let e of this.assets_ary){let t=e[0],i=e[1],r=await ue.instance.getERC20TokenBalance(i);r=parseInt(r);let n=Li.instance.walletDic.get(t);n||(n=new mo,n.itemId=t,n.value=0,Li.instance.walletDic.set(t,n)),n.ethValue=r}w.intance.event(si.UPDATE_LOCAL_WALLET_LIST_EVENT)}updateCwt(e){let t=Li.instance.walletDic.get(zt.ASSETS_TOX);t||(t=new mo,t.itemId=zt.ASSETS_TOX,Li.instance.walletDic.set(zt.ASSETS_TOX,t)),t.ethValue=e}};var _h=Av(vf());var Qt=class{static getInviteUrl(){return window.location.origin+"?invite="+this.encode(ue.instance.walletAddress)}static encode(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.length,r=t.split(""),n="",o,s,l,c,u=0;u<e.length;u++)o=e.charCodeAt(u),s=o%i,o=(o-s)/i,l=o%i,o=(o-l)/i,c=o%i,n+=r[c]+r[l]+r[s];return window.btoa(n)}static decode(e){e=window.atob(e);var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.length,r,n,o,s,l=0,c;c=new Array(Math.floor(e.length/3)),r=c.length;for(var u=0;u<r;u++)n=t.indexOf(e.charAt(l)),l++,o=t.indexOf(e.charAt(l)),l++,s=t.indexOf(e.charAt(l)),l++,c[u]=n*i*i+o*i+s;return r=decodeCharCode(c.join(",")),r}static getQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(t);return i!=null?i[2]:""}static getInviteWalletAddress(){let e=this.getQueryString("invite");return e&&(e=this.decode(e)),e}static toWei(e,t){let i=e*10**parseInt(t);return window.web3.utils.toBN("0x"+i.toString(16)).toString()}static fromWei(e,t,i=0){if(!e)return 0;let r=e.length-t+i;if(r<=0)return 0;let n=e.toString().slice(0,r);if(i){let o=n.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";n=s+n}else n=n.slice(0,n.length-i)+"."+n.slice(n.length-i)}return n}static deepClone(e){let t=new te;for(let i in e)typeof e[i]=="function"?t[i]=e[i]:t[i]=JSON.parse(JSON.stringify(e[i]));return t}};function ae(a,e,t){return i=>a[e.name||t]?.(i)??e(a,i)}yt();Be();var _l=class extends M{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}};Ei();ka();Ul();lr();Qa();Kr();var mb="/docs/contract/encodeEventTopics";function ki(a){let{abi:e,eventName:t,args:i}=a,r=e[0];if(t){let l=Pi({abi:e,name:t});if(!l)throw new Gr(t,{docsPath:mb});r=l}if(r.type!=="event")throw new Gr(void 0,{docsPath:mb});let n=Dt(r),o=qr(n),s=[];if(i&&"inputs"in r){let l=r.inputs?.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(i)?i:Object.values(i).length>0?l?.map(u=>i[u.name])??[]:[];c.length>0&&(s=l?.map((u,p)=>Array.isArray(c[p])?c[p].map((y,_)=>db({param:u,value:c[p][_]})):c[p]?db({param:u,value:c[p]}):null)??[])}return[o,...s]}function db({param:a,value:e}){if(a.type==="string"||a.type==="bytes")return st(ei(e));if(a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/))throw new _l(a.type);return Ti([a],[e])}Te();function Da(a,{method:e}){let t={};return a.transport.type==="fallback"&&a.transport.onResponse?.(({method:i,response:r,status:n,transport:o})=>{n==="success"&&e===i&&(t[r]=o.request)}),i=>t[i]||a.request}async function Gl(a,e){let{address:t,abi:i,args:r,eventName:n,fromBlock:o,strict:s,toBlock:l}=e,c=Da(a,{method:"eth_newFilter"}),u=n?ki({abi:i,args:r,eventName:n}):void 0,p=await a.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof o=="bigint"?ce(o):o,toBlock:typeof l=="bigint"?ce(l):l,topics:u}]});return{abi:i,args:r,eventName:n,id:p,request:c(p),strict:!!s,type:"event"}}ti();Ji();yt();Be();mr();Vo();var _0=3;function ia(a,{abi:e,address:t,args:i,docsPath:r,functionName:n,sender:o}){let{code:s,data:l,message:c,shortMessage:u}=a instanceof Ma?a:a instanceof M?a.walk(y=>"data"in y)||a.walk():{},p=(()=>a instanceof xi?new rc({functionName:n}):[_0,ta.code].includes(s)&&(l||c||u)?new pr({abi:e,data:typeof l=="object"?l.data:l,functionName:n,message:u??c}):a)();return new ac(p,{abi:e,args:i,contractAddress:t,docsPath:r,functionName:n,sender:o})}ti();Te();Xl();Zr();Be();ea();var oc=class extends M{constructor(e,{account:t,docsPath:i,chain:r,data:n,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:p,value:y}){let _=ur({from:t?.address,to:p,value:typeof y<"u"&&`${Xr(y)} ${r?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:typeof s<"u"&&`${mt(s)} gwei`,maxFeePerGas:typeof l<"u"&&`${mt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${mt(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",_].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}};Sn();sc();function Db(a,{docsPath:e,...t}){let i=(()=>{let r=Tn(a,t);return r instanceof Oi?a:r})();return new oc(i,{docsPath:e,...t})}lc();zo();Cn();ti();Zr();Be();var cc=class extends M{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}},Na=class extends M{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}},uc=class extends M{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${mt(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}};ci();Be();var An=class extends M{constructor({blockHash:e,blockNumber:t}){let i="Block";e&&(i=`Block at hash "${e}"`),t&&(i=`Block at number "${t}"`),super(`${i} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}};Te();ci();var qd={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function pc(a){let e={...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,chainId:a.chainId?xt(a.chainId):void 0,gas:a.gas?BigInt(a.gas):void 0,gasPrice:a.gasPrice?BigInt(a.gasPrice):void 0,maxFeePerBlobGas:a.maxFeePerBlobGas?BigInt(a.maxFeePerBlobGas):void 0,maxFeePerGas:a.maxFeePerGas?BigInt(a.maxFeePerGas):void 0,maxPriorityFeePerGas:a.maxPriorityFeePerGas?BigInt(a.maxPriorityFeePerGas):void 0,nonce:a.nonce?xt(a.nonce):void 0,to:a.to?a.to:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,type:a.type?qd[a.type]:void 0,typeHex:a.type?a.type:void 0,value:a.value?BigInt(a.value):void 0,v:a.v?BigInt(a.v):void 0};return e.yParity=(()=>{if(a.yParity)return Number(a.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e.type==="eip1559"&&delete e.maxFeePerBlobGas,e}function mc(a){let e=a.transactions?.map(t=>typeof t=="string"?t:pc(t));return{...a,baseFeePerGas:a.baseFeePerGas?BigInt(a.baseFeePerGas):null,blobGasUsed:a.blobGasUsed?BigInt(a.blobGasUsed):void 0,difficulty:a.difficulty?BigInt(a.difficulty):void 0,excessBlobGas:a.excessBlobGas?BigInt(a.excessBlobGas):void 0,gasLimit:a.gasLimit?BigInt(a.gasLimit):void 0,gasUsed:a.gasUsed?BigInt(a.gasUsed):void 0,hash:a.hash?a.hash:null,logsBloom:a.logsBloom?a.logsBloom:null,nonce:a.nonce?a.nonce:null,number:a.number?BigInt(a.number):null,size:a.size?BigInt(a.size):void 0,timestamp:a.timestamp?BigInt(a.timestamp):void 0,transactions:e,totalDifficulty:a.totalDifficulty?BigInt(a.totalDifficulty):null}}async function Gt(a,{blockHash:e,blockNumber:t,blockTag:i,includeTransactions:r}={}){let n=i??"latest",o=r??!1,s=t!==void 0?ce(t):void 0,l=null;if(e?l=await a.request({method:"eth_getBlockByHash",params:[e,o]}):l=await a.request({method:"eth_getBlockByNumber",params:[s||n,o]}),!l)throw new An({blockHash:e,blockNumber:t});return(a.chain?.formatters?.block?.format||mc)(l)}async function Dn(a){let e=await a.request({method:"eth_gasPrice"});return BigInt(e)}async function Mb(a,e){return Wd(a,e)}async function Wd(a,e){let{block:t,chain:i=a.chain,request:r}=e||{};if(typeof i?.fees?.defaultPriorityFee=="function"){let n=t||await ae(a,Gt,"getBlock")({});return i.fees.defaultPriorityFee({block:n,client:a,request:r})}if(typeof i?.fees?.defaultPriorityFee<"u")return i?.fees?.defaultPriorityFee;try{let n=await a.request({method:"eth_maxPriorityFeePerGas"});return Ia(n)}catch{let[n,o]=await Promise.all([t?Promise.resolve(t):ae(a,Gt,"getBlock")({}),ae(a,Dn,"getGasPrice")({})]);if(typeof n.baseFeePerGas!="bigint")throw new Na;let s=o-n.baseFeePerGas;return s<0n?0n:s}}async function Pb(a,e){return dc(a,e)}async function dc(a,e){let{block:t,chain:i=a.chain,request:r,type:n="eip1559"}=e||{},o=await(async()=>typeof i?.fees?.baseFeeMultiplier=="function"?i.fees.baseFeeMultiplier({block:t,client:a,request:r}):i?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new cc;let l=10**(o.toString().split(".")[1]?.length??0),c=y=>y*BigInt(Math.ceil(o*l))/BigInt(l),u=t||await ae(a,Gt,"getBlock")({});if(typeof i?.fees?.estimateFeesPerGas=="function")return i.fees.estimateFeesPerGas({block:t,client:a,multiply:c,request:r,type:n});if(n==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new Na;let y=typeof r?.maxPriorityFeePerGas=="bigint"?r.maxPriorityFeePerGas:await Wd(a,{block:u,chain:i,request:r}),_=c(u.baseFeePerGas);return{maxFeePerGas:r?.maxFeePerGas??_+y,maxPriorityFeePerGas:y}}return{gasPrice:r?.gasPrice??c(await ae(a,Dn,"getGasPrice")({}))}}ci();Te();async function hc(a,{address:e,blockTag:t="latest",blockNumber:i}){let r=await a.request({method:"eth_getTransactionCount",params:[e,i?ce(i):t]});return xt(r)}Be();var Hi=class extends M{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}};Cn();ea();function Rb(a){if(a.type)return a.type;if(typeof a.blobs<"u"||typeof a.blobVersionedHashes<"u"||typeof a.maxFeePerBlobGas<"u"||typeof a.sidecars<"u")return"eip4844";if(typeof a.maxFeePerGas<"u"||typeof a.maxPriorityFeePerGas<"u")return"eip1559";if(typeof a.gasPrice<"u")return typeof a.accessList<"u"?"eip2930":"legacy";throw new ec({transaction:a})}ci();async function Ui(a){let e=await a.request({method:"eth_chainId"});return xt(e)}async function Ha(a,e){let{account:t=a.account,chain:i,chainId:r,gas:n,nonce:o,parameters:s=["chainId","fees","gas","nonce","type"],type:l}=e,c=t?We(t):void 0,u=await ae(a,Gt,"getBlock")({blockTag:"latest"}),p={...e,...c?{from:c?.address}:{}};if(s.includes("chainId")&&(i?p.chainId=i.id:typeof r<"u"?p.chainId=r:p.chainId=await ae(a,Ui,"getChainId")({})),s.includes("nonce")&&typeof o>"u"&&c&&(p.nonce=await ae(a,hc,"getTransactionCount")({address:c.address,blockTag:"pending"})),(s.includes("fees")||s.includes("type"))&&typeof l>"u")try{p.type=Rb(p)}catch{p.type=typeof u.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(s.includes("fees"))if(p.type==="eip1559"||p.type==="eip4844"){let{maxFeePerGas:y,maxPriorityFeePerGas:_}=await dc(a,{block:u,chain:i,request:p});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<_)throw new uc({maxPriorityFeePerGas:_});p.maxPriorityFeePerGas=_,p.maxFeePerGas=y}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new Na;let{gasPrice:y}=await dc(a,{block:u,chain:i,request:p,type:"legacy"});p.gasPrice=y}return s.includes("gas")&&typeof n>"u"&&(p.gas=await ae(a,Mn,"estimateGas")({...p,account:c?{address:c.address,type:"json-rpc"}:void 0})),Ni(p),delete p.parameters,p}async function Mn(a,e){let t=e.account??a.account,i=t?We(t):void 0;try{let{accessList:r,blobs:n,blockNumber:o,blockTag:s,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:y,maxPriorityFeePerGas:_,nonce:g,to:f,value:T,...C}=i?.type==="local"?await Ha(a,e):e,N=(o?ce(o):void 0)||s;Ni(e);let Q=a.chain?.formatters?.transactionRequest?.format,U=(Q||Oa)({...kn(C,{format:Q}),from:i?.address,accessList:r,blobs:n,data:l,gas:c,gasPrice:u,maxFeePerBlobGas:p,maxFeePerGas:y,maxPriorityFeePerGas:_,nonce:g,to:f,value:T}),W=await a.request({method:"eth_estimateGas",params:N?[U,N]:[U]});return BigInt(W)}catch(r){throw Db(r,{...e,account:i,chain:a.chain})}}async function Bb(a,e){let{abi:t,address:i,args:r,functionName:n,...o}=e,s=Et({abi:t,args:r,functionName:n});try{return await ae(a,Mn,"estimateGas")({data:s,to:i,...o})}catch(l){let c=o.account?We(o.account):void 0;throw ia(l,{abi:t,address:i,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:n,sender:c?.address})}}Kr();yt();_a();Ul();Hd();Kl();Qa();var Ob="/docs/contract/decodeEventLog";function fr(a){let{abi:e,data:t,strict:i,topics:r}=a,n=i??!0,[o,...s]=r;if(!o)throw new Lo({docsPath:Ob});let l=e.find(f=>f.type==="event"&&o===qr(Dt(f)));if(!(l&&"name"in l)||l.type!=="event")throw new ir(o,{docsPath:Ob});let{name:c,inputs:u}=l,p=u?.some(f=>!("name"in f&&f.name)),y=p?[]:{},_=u.filter(f=>"indexed"in f&&f.indexed);for(let f=0;f<_.length;f++){let T=_[f],C=s[f];if(!C)throw new Ii({abiItem:l,param:T});y[T.name||f]=I0({param:T,value:C})}let g=u.filter(f=>!("indexed"in f&&f.indexed));if(g.length>0){if(t&&t!=="0x")try{let f=cr(g,t);if(f)if(p)y=[...y,...f];else for(let T=0;T<g.length;T++)y[g[T].name]=f[T]}catch(f){if(n)throw f instanceof er||f instanceof Yr?new li({abiItem:l,data:t,params:g,size:je(t)}):f}else if(n)throw new li({abiItem:l,data:"0x",params:g,size:0})}return{eventName:c,args:Object.values(y).length>0?y:void 0}}function I0({param:a,value:e}){return a.type==="string"||a.type==="bytes"||a.type==="tuple"||a.type.match(/^(.*)\[(\d+)?\]$/)?e:(cr([a],e)||[])[0]}function Pn({abi:a,eventName:e,logs:t,strict:i=!0}){return t.map(r=>{try{let n=fr({...r,abi:a,strict:i});return e&&!e.includes(n.eventName)?null:{...n,...r}}catch(n){let o,s;if(n instanceof ir)return null;if(n instanceof li||n instanceof Ii){if(i)return null;o=n.abiItem.name,s=n.abiItem.inputs?.some(l=>!("name"in l&&l.name))}return{...r,args:s?[]:{},eventName:o}}}).filter(Boolean)}Te();function Pt(a,{args:e,eventName:t}={}){return{...a,blockHash:a.blockHash?a.blockHash:null,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,logIndex:a.logIndex?Number(a.logIndex):null,transactionHash:a.transactionHash?a.transactionHash:null,transactionIndex:a.transactionIndex?Number(a.transactionIndex):null,...t?{args:e,eventName:t}:{}}}async function Rn(a,{address:e,blockHash:t,fromBlock:i,toBlock:r,event:n,events:o,args:s,strict:l}={}){let c=l??!1,u=o??(n?[n]:void 0),p=[];u&&(p=[u.flatMap(g=>ki({abi:[g],eventName:g.name,args:s}))],n&&(p=p[0]));let y;t?y=await a.request({method:"eth_getLogs",params:[{address:e,topics:p,blockHash:t}]}):y=await a.request({method:"eth_getLogs",params:[{address:e,topics:p,fromBlock:typeof i=="bigint"?ce(i):i,toBlock:typeof r=="bigint"?ce(r):r}]});let _=y.map(g=>Pt(g));return u?Pn({abi:u,logs:_,strict:c}):_}async function fc(a,e){let{abi:t,address:i,args:r,blockHash:n,eventName:o,fromBlock:s,toBlock:l,strict:c}=e,u=o?Pi({abi:t,name:o}):void 0,p=u?void 0:t.filter(y=>y.type==="event");return ae(a,Rn,"getLogs")({address:i,args:r,blockHash:n,event:u,events:p,fromBlock:s,toBlock:l,strict:c})}br();Ji();Bn();async function Rt(a,e){let{abi:t,address:i,args:r,functionName:n,...o}=e,s=Et({abi:t,args:r,functionName:n});try{let{data:l}=await ae(a,Vi,"call")({...o,data:s,to:i});return pi({abi:t,args:r,functionName:n,data:l||"0x"})}catch(l){throw ia(l,{abi:t,address:i,args:r,docsPath:"/docs/contract/readContract",functionName:n})}}ti();br();Ji();Bn();async function Qb(a,e){let{abi:t,address:i,args:r,dataSuffix:n,functionName:o,...s}=e,l=s.account?We(s.account):a.account,c=Et({abi:t,args:r,functionName:o});try{let{data:u}=await ae(a,Vi,"call")({batch:!1,data:`${c}${n?n.replace("0x",""):""}`,to:i,...s,account:l}),p=pi({abi:t,args:r,functionName:o,data:u||"0x"}),y=t.filter(_=>"name"in _&&_.name===e.functionName);return{result:p,request:{abi:y,address:i,args:r,dataSuffix:n,functionName:o,...s,account:l}}}catch(u){throw ia(u,{abi:t,address:i,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:l?.address})}}yt();Vo();var Qd=new Map,Jb=new Map,M0=0;function jt(a,e,t){let i=++M0,r=()=>Qd.get(a)||[],n=()=>{let u=r();Qd.set(a,u.filter(p=>p.id!==i))},o=()=>{let u=Jb.get(a);r().length===1&&u&&u(),n()},s=r();if(Qd.set(a,[...s,{id:i,fns:e}]),s&&s.length>0)return o;let l={};for(let u in e)l[u]=(...p)=>{let y=r();if(y.length!==0)for(let _ of y)_.fns[u]?.(...p)};let c=t(l);return typeof c=="function"&&Jb.set(a,c),o}async function jo(a){return new Promise(e=>setTimeout(e,a))}function zi(a,{emitOnBegin:e,initialWaitTime:t,interval:i}){let r=!0,n=()=>r=!1;return(async()=>{let s;e&&(s=await a({unpoll:n}));let l=await t?.(s)??i;await jo(l);let c=async()=>{r&&(await a({unpoll:n}),await jo(i),c())};c()})(),n}ii();var P0=new Map,R0=new Map;function ey(a){let e=(r,n)=>({clear:()=>n.delete(r),get:()=>n.get(r),set:o=>n.set(r,o)}),t=e(a,P0),i=e(a,R0);return{clear:()=>{t.clear(),i.clear()},promise:t,response:i}}async function ty(a,{cacheKey:e,cacheTime:t=1/0}){let i=ey(e),r=i.response.get();if(r&&t>0&&new Date().getTime()-r.created.getTime()<t)return r.data;let n=i.promise.get();n||(n=a(),i.promise.set(n));try{let o=await n;return i.response.set({created:new Date,data:o}),o}finally{i.promise.clear()}}var B0=a=>`blockNumber.${a}`;async function Fi(a,{cacheTime:e=a.cacheTime}={}){let t=await ty(()=>a.request({method:"eth_blockNumber"}),{cacheKey:B0(a.uid),cacheTime:e});return BigInt(t)}async function Ua(a,{filter:e}){let t="strict"in e&&e.strict,i=await e.request({method:"eth_getFilterChanges",params:[e.id]});if(typeof i[0]=="string")return i;let r=i.map(n=>Pt(n));return!("abi"in e)||!e.abi?r:Pn({abi:e.abi,logs:r,strict:t})}async function Va(a,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}function iy(a,e){let{abi:t,address:i,args:r,batch:n=!0,eventName:o,onError:s,onLogs:l,poll:c,pollingInterval:u=a.pollingInterval,strict:p}=e;return(typeof c<"u"?c:a.transport.type!=="webSocket")?(()=>{let f=p??!1,T=Oe(["watchContractEvent",i,r,n,a.uid,o,u,f]);return jt(T,{onLogs:l,onError:s},C=>{let O,N,Q=!1,F=zi(async()=>{if(!Q){try{N=await ae(a,Gl,"createContractEventFilter")({abi:t,address:i,args:r,eventName:o,strict:f})}catch{}Q=!0;return}try{let U;if(N)U=await ae(a,Ua,"getFilterChanges")({filter:N});else{let W=await ae(a,Fi,"getBlockNumber")({});O&&O!==W?U=await ae(a,fc,"getContractEvents")({abi:t,address:i,args:r,eventName:o,fromBlock:O+1n,toBlock:W,strict:f}):U=[],O=W}if(U.length===0)return;if(n)C.onLogs(U);else for(let W of U)C.onLogs([W])}catch(U){N&&U instanceof Bi&&(Q=!1),C.onError?.(U)}},{emitOnBegin:!0,interval:u});return async()=>{N&&await ae(a,Va,"uninstallFilter")({filter:N}),F()}})})():(()=>{let f=p??!1,T=Oe(["watchContractEvent",i,r,n,a.uid,o,u,f]),C=!0,O=()=>C=!1;return jt(T,{onLogs:l,onError:s},N=>((async()=>{try{let Q=o?ki({abi:t,eventName:o,args:r}):[],{unsubscribe:F}=await a.transport.subscribe({params:["logs",{address:i,topics:Q}],onData(U){if(!C)return;let W=U.result;try{let{eventName:se,args:ke}=fr({abi:t,data:W.data,topics:W.topics,strict:p}),Le=Pt(W,{args:ke,eventName:se});N.onLogs([Le])}catch(se){let ke,Le;if(se instanceof li||se instanceof Ii){if(p)return;ke=se.abiItem.name,Le=se.abiItem.inputs?.some(nt=>!("name"in nt&&nt.name))}let we=Pt(W,{args:Le?[]:{},eventName:ke});N.onLogs([we])}},onError(U){N.onError?.(U)}});O=F,C||O()}catch(Q){s?.(Q)}})(),()=>O()))})()}Ji();ti();vc();function Ic({chain:a,currentChainId:e}){if(!a)throw new gc;if(e!==a.id)throw new yc({chain:a,currentChainId:e})}Sn();ea();sc();function ay(a,{docsPath:e,...t}){let i=(()=>{let r=Tn(a,t);return r instanceof Oi?a:r})();return new tc(i,{docsPath:e,...t})}lc();zo();Cn();async function On(a,{serializedTransaction:e}){return a.request({method:"eth_sendRawTransaction",params:[e]},{retryCount:0})}async function Nn(a,e){let{account:t=a.account,chain:i=a.chain,accessList:r,blobs:n,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:p,nonce:y,to:_,value:g,...f}=e;if(!t)throw new Hi({docsPath:"/docs/actions/wallet/sendTransaction"});let T=We(t);try{Ni(e);let C;if(i!==null&&(C=await ae(a,Ui,"getChainId")({}),Ic({currentChainId:C,chain:i})),T.type==="local"){let F=await ae(a,Ha,"prepareTransactionRequest")({account:T,accessList:r,blobs:n,chain:i,chainId:C,data:o,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:p,nonce:y,to:_,value:g,...f}),U=i?.serializers?.transaction,W=await T.signTransaction(F,{serializer:U});return await ae(a,On,"sendRawTransaction")({serializedTransaction:W})}let O=a.chain?.formatters?.transactionRequest?.format,Q=(O||Oa)({...kn(f,{format:O}),accessList:r,blobs:n,data:o,from:T.address,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:u,maxPriorityFeePerGas:p,nonce:y,to:_,value:g});return await a.request({method:"eth_sendTransaction",params:[Q]},{retryCount:0})}catch(C){throw ay(C,{...e,account:T,chain:e.chain||void 0})}}async function ry(a,e){let{abi:t,address:i,args:r,dataSuffix:n,functionName:o,...s}=e,l=Et({abi:t,args:r,functionName:o});return ae(a,Nn,"sendTransaction")({data:`${l}${n?n.replace("0x",""):""}`,to:i,...s})}Te();async function ny(a,{chain:e}){let{id:t,name:i,nativeCurrency:r,rpcUrls:n,blockExplorers:o}=e;await a.request({method:"wallet_addEthereumChain",params:[{chainId:ce(t),chainName:i,nativeCurrency:r,rpcUrls:n.default.http,blockExplorerUrls:o?Object.values(o).map(({url:s})=>s):void 0}]},{retryCount:0})}ti();var Ec=256,Sc;function oy(a=11){if(!Sc||Ec+a>256*2){Sc="",Ec=0;for(let e=0;e<256;e++)Sc+=(256+Math.random()*256|0).toString(16).substring(1)}return Sc.substring(Ec,Ec+++a)}function Tc(a){let{batch:e,cacheTime:t=a.pollingInterval??4e3,key:i="base",name:r="Base Client",pollingInterval:n=4e3,type:o="base"}=a,s=a.chain,l=a.account?We(a.account):void 0,{config:c,request:u,value:p}=a.transport({chain:s,pollingInterval:n}),y={...c,...p},_={account:l,batch:e,cacheTime:t,chain:s,key:i,name:r,pollingInterval:n,request:u,transport:y,type:o,uid:oy()};function g(f){return T=>{let C=T(f);for(let N in _)delete C[N];let O={...f,...C};return Object.assign(O,{extend:g(O)})}}return Object.assign(_,{extend:g(_)})}Be();an();Vo();function qo(a,{delay:e=100,retryCount:t=2,shouldRetry:i=()=>!0}={}){return new Promise((r,n)=>{let o=async({count:s=0}={})=>{let l=async({error:c})=>{let u=typeof e=="function"?e({count:s,error:c}):e;u&&await jo(u),o({count:s+1})};try{let c=await a();r(c)}catch(c){if(s<t&&await i({count:s,error:c}))return l({error:c});n(c)}};o()})}function sy(a,e={}){return async(t,i={})=>{let{retryDelay:r=150,retryCount:n=3}={...e,...i};return qo(async()=>{try{return await a(t)}catch(o){let s=o;switch(s.code){case rn.code:throw new rn(s);case nn.code:throw new nn(s);case on.code:throw new on(s);case sn.code:throw new sn(s);case ta.code:throw new ta(s);case Bi.code:throw new Bi(s);case ln.code:throw new ln(s);case cn.code:throw new cn(s);case un.code:throw new un(s);case pn.code:throw new pn(s);case dr.code:throw new dr(s);case mn.code:throw new mn(s);case hr.code:throw new hr(s);case dn.code:throw new dn(s);case hn.code:throw new hn(s);case fn.code:throw new fn(s);case bn.code:throw new bn(s);case yn.code:throw new yn(s);case 5e3:throw new hr(s);default:throw o instanceof M?o:new nc(s)}}},{delay:({count:o,error:s})=>{if(s&&s instanceof ui){let l=s?.headers?.get("Retry-After");if(l?.match(/\d/))return parseInt(l)*1e3}return~~(1<<o)*r},retryCount:n,shouldRetry:({error:o})=>O0(o)})}}function O0(a){return"code"in a&&typeof a.code=="number"?a.code===-1||a.code===dr.code||a.code===ta.code:a instanceof ui&&a.status?a.status===403||a.status===408||a.status===413||a.status===429||a.status===500||a.status===502||a.status===503||a.status===504:!0}function kc({key:a,name:e,request:t,retryCount:i=3,retryDelay:r=150,timeout:n,type:o},s){return{config:{key:a,name:e,request:t,retryCount:i,retryDelay:r,timeout:n,type:o},request:sy(t,{retryCount:i,retryDelay:r}),value:s}}function Cc(a,e={}){let{key:t="custom",name:i="Custom Provider",retryDelay:r}=e;return({retryCount:n})=>kc({key:t,name:i,request:a.request.bind(a),retryCount:e.retryCount??n,retryDelay:r,type:"custom"})}an();Be();var Ac=class extends M{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}};Zd();an();function ly(a,{errorInstance:e=new Error("timed out"),timeout:t,signal:i}){return new Promise((r,n)=>{(async()=>{let o;try{let s=new AbortController;t>0&&(o=setTimeout(()=>{i?s.abort():n(e)},t)),r(await a({signal:s?.signal||null}))}catch(s){s.name==="AbortError"&&n(e),n(s)}finally{clearTimeout(o)}})()})}ii();function N0(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var Jd=N0();function cy(a,e={}){return{async request(t){let{body:i,fetchOptions:r={},onResponse:n=e.onResponse,timeout:o=e.timeout??1e4}=t,{headers:s,method:l,signal:c}={...e.fetchOptions,...r};try{let u=await ly(async({signal:y})=>await fetch(a,{...r,body:Array.isArray(i)?Oe(i.map(g=>({jsonrpc:"2.0",id:g.id??Jd.take(),...g}))):Oe({jsonrpc:"2.0",id:i.id??Jd.take(),...i}),headers:{...s,"Content-Type":"application/json"},method:l||"POST",signal:c||(o>0?y:null)}),{errorInstance:new Uo({body:i,url:a}),timeout:o,signal:!0});n&&await n(u);let p;if(u.headers.get("Content-Type")?.startsWith("application/json")?p=await u.json():p=await u.text(),!u.ok)throw new ui({body:i,details:Oe(p.error)||u.statusText,headers:u.headers,status:u.status,url:a});return p}catch(u){throw u instanceof ui||u instanceof Uo?u:new ui({body:i,details:u.message,url:a})}}}}function eh(a,e={}){let{batch:t,fetchOptions:i,key:r="http",name:n="HTTP JSON-RPC",onFetchResponse:o,retryDelay:s}=e;return({chain:l,retryCount:c,timeout:u})=>{let{batchSize:p=1e3,wait:y=0}=typeof t=="object"?t:{},_=e.retryCount??c,g=u??e.timeout??1e4,f=a||l?.rpcUrls.default.http[0];if(!f)throw new Ac;let T=cy(f,{fetchOptions:i,onResponse:o,timeout:g});return kc({key:r,name:n,async request({method:C,params:O}){let N={method:C,params:O},{schedule:Q}=wc({id:`${a}`,wait:y,shouldSplitBatch(se){return se.length>p},fn:se=>T.request({body:se}),sort:(se,ke)=>se.id-ke.id}),F=async se=>t?Q(se):[await T.request({body:se})],[{error:U,result:W}]=await F(N);if(U)throw new tn({body:N,error:U,url:f});return W},retryCount:_,retryDelay:s,timeout:g,type:"http"},{fetchOptions:i,url:f})}}yr();br();Ji();vr();Cl();Te();ql();Be();mr();function Hn(a,e){if(!(a instanceof M))return!1;let t=a.walk(i=>i instanceof pr);return t instanceof pr?!!(t.data?.errorName==="ResolverNotFound"||t.data?.errorName==="ResolverWildcardNotSupported"||t.data?.errorName==="ResolverNotContract"||t.data?.errorName==="ResolverError"||t.data?.errorName==="HttpError"||t.reason?.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&t.reason===jl[50]):!1}Aa();Ei();Te();ka();_i();function Dc(a){if(a.length!==66||a.indexOf("[")!==0||a.indexOf("]")!==65)return null;let e=`0x${a.slice(1,65)}`;return Je(e)?e:null}function Un(a){let e=new Uint8Array(32).fill(0);if(!a)return pt(e);let t=a.split(".");for(let i=t.length-1;i>=0;i-=1){let r=Dc(t[i]),n=r?ei(r):st(Ft(t[i]),"bytes");e=st(Mt([e,n]),"bytes")}return pt(e)}Ei();function uy(a){return`[${a.slice(2)}]`}Ei();Te();ka();function py(a){let e=new Uint8Array(32).fill(0);return a?Dc(a)||st(Ft(a)):pt(e)}function za(a){let e=a.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);let t=new Uint8Array(Ft(e).byteLength+2),i=0,r=e.split(".");for(let n=0;n<r.length;n++){let o=Ft(r[n]);o.byteLength>255&&(o=Ft(uy(py(r[n])))),t[i]=o.length,t.set(o,i+1),i+=o.length+1}return t.byteLength!==i+1?t.slice(0,i+1):t}async function my(a,{blockNumber:e,blockTag:t,coinType:i,name:r,gatewayUrls:n,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=mi({blockNumber:e,chain:a.chain,contract:"ensUniversalResolver"})}try{let c=Et({abi:$d,functionName:"addr",...i!=null?{args:[Un(r),BigInt(i)]}:{args:[Un(r)]}}),u={address:l,abi:bc,functionName:"resolve",args:[$e(za(r)),c],blockNumber:e,blockTag:t},p=ae(a,Rt,"readContract"),y=n?await p({...u,args:[...u.args,n]}):await p(u);if(y[0]==="0x")return null;let _=pi({abi:$d,args:i!=null?[Un(r),BigInt(i)]:void 0,functionName:"addr",data:y[0]});return _==="0x"||ar(_)==="0x00"?null:_}catch(c){if(o)throw c;if(Hn(c,"resolve"))return null;throw c}}Be();var Mc=class extends M{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}},Fa=class extends M{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}},Vn=class extends M{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}},Pc=class extends M{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}};var H0=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,U0=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,V0=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,z0=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function F0(a){try{let e=await fetch(a,{method:"HEAD"});return e.status===200?e.headers.get("content-type")?.startsWith("image/"):!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(t=>{let i=new Image;i.onload=()=>{t(!0)},i.onerror=()=>{t(!1)},i.src=a})}}function dy(a,e){return a?a.endsWith("/")?a.slice(0,-1):a:e}function th({uri:a,gatewayUrls:e}){let t=V0.test(a);if(t)return{uri:a,isOnChain:!0,isEncoded:t};let i=dy(e?.ipfs,"https://ipfs.io"),r=dy(e?.arweave,"https://arweave.net"),n=a.match(H0),{protocol:o,subpath:s,target:l,subtarget:c=""}=n?.groups||{},u=o==="ipns:/"||s==="ipns/",p=o==="ipfs:/"||s==="ipfs/"||U0.test(a);if(a.startsWith("http")&&!u&&!p){let _=a;return e?.arweave&&(_=a.replace(/https:\/\/arweave.net/g,e?.arweave)),{uri:_,isOnChain:!1,isEncoded:!1}}if((u||p)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(o==="ar:/"&&l)return{uri:`${r}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let y=a.replace(z0,"");if(y.startsWith("<svg")&&(y=`data:image/svg+xml;base64,${btoa(y)}`),y.startsWith("data:")||y.startsWith("{"))return{uri:y,isOnChain:!0,isEncoded:!1};throw new Vn({uri:a})}function ih(a){if(typeof a!="object"||!("image"in a)&&!("image_url"in a)&&!("image_data"in a))throw new Mc({data:a});return a.image||a.image_url||a.image_data}async function hy({gatewayUrls:a,uri:e}){try{let t=await fetch(e).then(r=>r.json());return await Rc({gatewayUrls:a,uri:ih(t)})}catch{throw new Vn({uri:e})}}async function Rc({gatewayUrls:a,uri:e}){let{uri:t,isOnChain:i}=th({uri:e,gatewayUrls:a});if(i||await F0(t))return t;throw new Vn({uri:e})}function fy(a){let e=a;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));let[t,i,r]=e.split("/"),[n,o]=t.split(":"),[s,l]=i.split(":");if(!n||n.toLowerCase()!=="eip155")throw new Fa({reason:"Only EIP-155 supported"});if(!o)throw new Fa({reason:"Chain ID not found"});if(!l)throw new Fa({reason:"Contract address not found"});if(!r)throw new Fa({reason:"Token ID not found"});if(!s)throw new Fa({reason:"ERC namespace not found"});return{chainID:parseInt(o),namespace:s.toLowerCase(),contractAddress:l,tokenID:r}}async function by(a,{nft:e}){if(e.namespace==="erc721")return Rt(a,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return Rt(a,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new Pc({namespace:e.namespace})}async function yy(a,{gatewayUrls:e,record:t}){return/eip155:/i.test(t)?G0(a,{gatewayUrls:e,record:t}):Rc({uri:t,gatewayUrls:e})}async function G0(a,{gatewayUrls:e,record:t}){let i=fy(t),r=await by(a,{nft:i}),{uri:n,isOnChain:o,isEncoded:s}=th({uri:r,gatewayUrls:e});if(o&&(n.includes("data:application/json;base64,")||n.startsWith("{"))){let c=s?atob(n.replace("data:application/json;base64,","")):n,u=JSON.parse(c);return Rc({uri:ih(u),gatewayUrls:e})}let l=i.tokenID;return i.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),hy({gatewayUrls:e,uri:n.replace(/(?:0x)?{id}/,l)})}yr();br();Ji();vr();Te();async function Bc(a,{blockNumber:e,blockTag:t,name:i,key:r,gatewayUrls:n,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=mi({blockNumber:e,chain:a.chain,contract:"ensUniversalResolver"})}try{let c={address:l,abi:bc,functionName:"resolve",args:[$e(za(i)),Et({abi:Yd,functionName:"text",args:[Un(i),r]})],blockNumber:e,blockTag:t},u=ae(a,Rt,"readContract"),p=n?await u({...c,args:[...c.args,n]}):await u(c);if(p[0]==="0x")return null;let y=pi({abi:Yd,functionName:"text",data:p[0]});return y===""?null:y}catch(c){if(o)throw c;if(Hn(c,"resolve"))return null;throw c}}async function gy(a,{blockNumber:e,blockTag:t,assetGatewayUrls:i,name:r,gatewayUrls:n,strict:o,universalResolverAddress:s}){let l=await ae(a,Bc,"getEnsText")({blockNumber:e,blockTag:t,key:"avatar",name:r,universalResolverAddress:s,gatewayUrls:n,strict:o});if(!l)return null;try{return await yy(a,{record:l,gatewayUrls:i})}catch{return null}}yr();vr();Te();async function vy(a,{address:e,blockNumber:t,blockTag:i,gatewayUrls:r,strict:n,universalResolverAddress:o}){let s=o;if(!s){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=mi({blockNumber:t,chain:a.chain,contract:"ensUniversalResolver"})}let l=`${e.toLowerCase().substring(2)}.addr.reverse`;try{let c={address:s,abi:Hb,functionName:"reverse",args:[$e(za(l))],blockNumber:t,blockTag:i},u=ae(a,Rt,"readContract"),[p,y]=r?await u({...c,args:[...c.args,r]}):await u(c);return e.toLowerCase()!==y.toLowerCase()?null:p}catch(c){if(n)throw c;if(Hn(c,"reverse"))return null;throw c}}vr();Te();async function wy(a,{blockNumber:e,blockTag:t,name:i,universalResolverAddress:r}){let n=r;if(!n){if(!a.chain)throw new Error("client chain not configured. universalResolverAddress is required.");n=mi({blockNumber:e,chain:a.chain,contract:"ensUniversalResolver"})}let[o]=await ae(a,Rt,"readContract")({address:n,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[$e(za(i))],blockNumber:e,blockTag:t});return o}Bn();async function Ly(a){let e=Da(a,{method:"eth_newBlockFilter"}),t=await a.request({method:"eth_newBlockFilter"});return{id:t,request:e(t),type:"block"}}Te();async function Oc(a,{address:e,args:t,event:i,events:r,fromBlock:n,strict:o,toBlock:s}={}){let l=r??(i?[i]:void 0),c=Da(a,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(y=>ki({abi:[y],eventName:y.name,args:t}))],i&&(u=u[0]));let p=await a.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof n=="bigint"?ce(n):n,toBlock:typeof s=="bigint"?ce(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:t,eventName:i?i.name:void 0,fromBlock:n,id:p,request:c(p),strict:!!o,toBlock:s,type:"event"}}async function Nc(a){let e=Da(a,{method:"eth_newPendingTransactionFilter"}),t=await a.request({method:"eth_newPendingTransactionFilter"});return{id:t,request:e(t),type:"transaction"}}Te();async function _y(a,{address:e,blockNumber:t,blockTag:i="latest"}){let r=t?ce(t):void 0,n=await a.request({method:"eth_getBalance",params:[e,r||i]});return BigInt(n)}async function xy(a){let e=await a.request({method:"eth_blobBaseFee"});return BigInt(e)}ci();Te();async function Iy(a,{blockHash:e,blockNumber:t,blockTag:i="latest"}={}){let r=t!==void 0?ce(t):void 0,n;return e?n=await a.request({method:"eth_getBlockTransactionCountByHash",params:[e]}):n=await a.request({method:"eth_getBlockTransactionCountByNumber",params:[r||i]}),xt(n)}Te();async function Ey(a,{address:e,blockNumber:t,blockTag:i="latest"}){let r=t!==void 0?ce(t):void 0,n=await a.request({method:"eth_getCode",params:[e,r||i]});if(n!=="0x")return n}Te();function Sy(a){return{baseFeePerGas:a.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(e=>e.map(t=>BigInt(t)))}}async function Ty(a,{blockCount:e,blockNumber:t,blockTag:i="latest",rewardPercentiles:r}){let n=t?ce(t):void 0,o=await a.request({method:"eth_feeHistory",params:[ce(e),n||i,r]});return Sy(o)}async function ky(a,{filter:e}){let t=e.strict??!1,r=(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(n=>Pt(n));return e.abi?Pn({abi:e.abi,logs:r,strict:t}):r}Te();function Cy(a){return{formatters:void 0,fees:void 0,serializers:void 0,...a}}var Ay=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Dy=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;yt();nr();Ca();_a();Te();lr();Aa();Te();ka();function My(a){let{domain:e={},message:t,primaryType:i}=a,r={EIP712Domain:Uc({domain:e}),...a.types};Hc({domain:e,message:t,primaryType:i,types:r});let n=["0x1901"];return e&&n.push(j0({domain:e,types:r})),i!=="EIP712Domain"&&n.push(Py({data:t,primaryType:i,types:r})),st(Mt(n))}function j0({domain:a,types:e}){return Py({data:a,primaryType:"EIP712Domain",types:e})}function Py({data:a,primaryType:e,types:t}){let i=Ry({data:a,primaryType:e,types:t});return st(i)}function Ry({data:a,primaryType:e,types:t}){let i=[{type:"bytes32"}],r=[q0({primaryType:e,types:t})];for(let n of t[e]){let[o,s]=Oy({types:t,name:n.name,type:n.type,value:a[n.name]});i.push(o),r.push(s)}return Ti(i,r)}function q0({primaryType:a,types:e}){let t=$e(W0({primaryType:a,types:e}));return st(t)}function W0({primaryType:a,types:e}){let t="",i=By({primaryType:a,types:e});i.delete(a);let r=[a,...Array.from(i).sort()];for(let n of r)t+=`${n}(${e[n].map(({name:o,type:s})=>`${s} ${o}`).join(",")})`;return t}function By({primaryType:a,types:e},t=new Set){let r=a.match(/^\w*/u)?.[0];if(t.has(r)||e[r]===void 0)return t;t.add(r);for(let n of e[r])By({primaryType:n.type,types:e},t);return t}function Oy({types:a,name:e,type:t,value:i}){if(a[t]!==void 0)return[{type:"bytes32"},st(Ry({data:i,primaryType:t,types:a}))];if(t==="bytes")return i=`0x${(i.length%2?"0":"")+i.slice(2)}`,[{type:"bytes32"},st(i)];if(t==="string")return[{type:"bytes32"},st($e(i))];if(t.lastIndexOf("]")===t.length-1){let r=t.slice(0,t.lastIndexOf("[")),n=i.map(o=>Oy({name:e,type:r,types:a,value:o}));return[{type:"bytes32"},st(Ti(n.map(([o])=>o),n.map(([,o])=>o)))]}return[{type:t},i]}function Hc(a){let{domain:e,message:t,primaryType:i,types:r}=a,n=(o,s)=>{for(let l of o){let{name:c,type:u}=l,p=s[c],y=u.match(Dy);if(y&&(typeof p=="number"||typeof p=="bigint")){let[f,T,C]=y;ce(p,{signed:T==="int",size:parseInt(C)/8})}if(u==="address"&&typeof p=="string"&&!gt(p))throw new It({address:p});let _=u.match(Ay);if(_){let[f,T]=_;if(T&&je(p)!==parseInt(T))throw new xo({expectedSize:parseInt(T),givenSize:je(p)})}let g=r[u];g&&n(g,p)}};if(r.EIP712Domain&&e&&n(r.EIP712Domain,e),i!=="EIP712Domain"){let o=r[i];n(o,t)}}function Uc({domain:a}){return[typeof a?.name=="string"&&{name:"name",type:"string"},a?.version&&{name:"version",type:"string"},typeof a?.chainId=="number"&&{name:"chainId",type:"uint256"},a?.verifyingContract&&{name:"verifyingContract",type:"address"},a?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}yt();Aa();lr();var ah="/docs/contract/encodeDeployData";function Wo(a){let{abi:e,args:t,bytecode:i}=a;if(!t||t.length===0)return i;let r=e.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new yo({docsPath:ah});if(!("inputs"in r))throw new Fr({docsPath:ah});if(!r.inputs||r.inputs.length===0)throw new Fr({docsPath:ah});let n=Ti(r.inputs,t);return Bo([i,n])}_i();ci();var K0={"0x0":"reverted","0x1":"success"};function Ny(a){let e={...a,blockNumber:a.blockNumber?BigInt(a.blockNumber):null,contractAddress:a.contractAddress?a.contractAddress:null,cumulativeGasUsed:a.cumulativeGasUsed?BigInt(a.cumulativeGasUsed):null,effectiveGasPrice:a.effectiveGasPrice?BigInt(a.effectiveGasPrice):null,gasUsed:a.gasUsed?BigInt(a.gasUsed):null,logs:a.logs?a.logs.map(t=>Pt(t)):null,to:a.to?a.to:null,transactionIndex:a.transactionIndex?xt(a.transactionIndex):null,status:a.status?K0[a.status]:null,type:a.type?qd[a.type]||a.type:null};return a.blobGasPrice&&(e.blobGasPrice=BigInt(a.blobGasPrice)),a.blobGasUsed&&(e.blobGasUsed=BigInt(a.blobGasUsed)),e}Te();ci();var zy=`Ethereum Signed Message:
`;Aa();Ei();ka();function nh(a,e){let t=(()=>typeof a=="string"?Ft(a):a.raw instanceof Uint8Array?a.raw:ei(a.raw))(),i=Ft(`${zy}${t.length}`);return st(Mt([i,t]),e)}function Q0(a){return a.map(e=>({...e,value:BigInt(e.value)}))}function Fy(a){return{...a,balance:a.balance?BigInt(a.balance):void 0,nonce:a.nonce?xt(a.nonce):void 0,storageProof:a.storageProof?Q0(a.storageProof):void 0}}async function Gy(a,{address:e,blockNumber:t,blockTag:i,storageKeys:r}){let n=i??"latest",o=t!==void 0?ce(t):void 0,s=await a.request({method:"eth_getProof",params:[e,r,o||n]});return Fy(s)}Te();async function jy(a,{address:e,blockNumber:t,blockTag:i="latest",slot:r}){let n=t!==void 0?ce(t):void 0;return await a.request({method:"eth_getStorageAt",params:[e,r,n||i]})}ea();Te();async function zn(a,{blockHash:e,blockNumber:t,blockTag:i,hash:r,index:n}){let o=i||"latest",s=t!==void 0?ce(t):void 0,l=null;if(r?l=await a.request({method:"eth_getTransactionByHash",params:[r]}):e?l=await a.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,ce(n)]}):(s||o)&&(l=await a.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||o,ce(n)]})),!l)throw new Qr({blockHash:e,blockNumber:t,blockTag:o,hash:r,index:n});return(a.chain?.formatters?.transaction?.format||pc)(l)}async function qy(a,{hash:e,transactionReceipt:t}){let[i,r]=await Promise.all([ae(a,Fi,"getBlockNumber")({}),e?ae(a,zn,"getBlockNumber")({hash:e}):void 0]),n=t?.blockNumber||r?.blockNumber;return n?i-n+1n:0n}ea();async function Ko(a,{hash:e}){let t=await a.request({method:"eth_getTransactionReceipt",params:[e]});if(!t)throw new Jr({hash:e});return(a.chain?.formatters?.transactionReceipt?.format||Ny)(t)}yr();yt();Be();mr();br();Ji();vr();async function Wy(a,e){let{allowFailure:t=!0,batchSize:i,blockNumber:r,blockTag:n,multicallAddress:o,stateOverride:s}=e,l=e.contracts,c=i??(typeof a.batch?.multicall=="object"&&a.batch.multicall.batchSize||1024),u=o;if(!u){if(!a.chain)throw new Error("client chain not configured. multicallAddress is required.");u=mi({blockNumber:r,chain:a.chain,contract:"multicall3"})}let p=[[]],y=0,_=0;for(let T=0;T<l.length;T++){let{abi:C,address:O,args:N,functionName:Q}=l[T];try{let F=Et({abi:C,args:N,functionName:Q});_+=(F.length-2)/2,c>0&&_>c&&p[y].length>0&&(y++,_=(F.length-2)/2,p[y]=[]),p[y]=[...p[y],{allowFailure:!0,callData:F,target:O}]}catch(F){let U=ia(F,{abi:C,address:O,args:N,docsPath:"/docs/contract/multicall",functionName:Q});if(!t)throw U;p[y]=[...p[y],{allowFailure:!0,callData:"0x",target:O}]}}let g=await Promise.allSettled(p.map(T=>ae(a,Rt,"readContract")({abi:Fo,address:u,args:[T],blockNumber:r,blockTag:n,functionName:"aggregate3",stateOverride:s}))),f=[];for(let T=0;T<g.length;T++){let C=g[T];if(C.status==="rejected"){if(!t)throw C.reason;for(let N=0;N<p[T].length;N++)f.push({status:"failure",error:C.reason,result:void 0});continue}let O=C.value;for(let N=0;N<O.length;N++){let{returnData:Q,success:F}=O[N],{callData:U}=p[T][N],{abi:W,address:se,functionName:ke,args:Le}=l[f.length];try{if(U==="0x")throw new xi;if(!F)throw new Ma({data:Q});let we=pi({abi:W,args:Le,data:Q,functionName:ke});f.push(t?{result:we,status:"success"}:we)}catch(we){let nt=ia(we,{abi:W,address:se,args:Le,docsPath:"/docs/contract/multicall",functionName:ke});if(!t)throw nt;f.push({error:nt,result:void 0,status:"failure"})}}}if(f.length!==l.length)throw new M("multicall results mismatch");return f}yr();var Ky="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";mr();Gn();Ei();_i();function Zy(a,e){let t=Je(a)?ei(a):a,i=Je(e)?ei(e):e;return lh(t,i)}Bn();async function qc(a,{address:e,hash:t,signature:i,...r}){let n=Je(i)?i:$e(i);try{let{data:o}=await ae(a,Vi,"call")({data:Wo({abi:Ub,args:[e,t,n],bytecode:Ky}),...r});return Zy(o??"0x0","0x1")}catch(o){if(o instanceof en)return!1;throw o}}async function Qy(a,{address:e,message:t,signature:i,...r}){let n=nh(t);return qc(a,{address:e,hash:n,signature:i,...r})}async function Jy(a,e){let{address:t,signature:i,message:r,primaryType:n,types:o,domain:s,...l}=e,c=My({message:r,primaryType:n,types:o,domain:s});return qc(a,{address:t,hash:c,signature:i,...l})}ea();ii();ci();ii();function Wc(a,{emitOnBegin:e=!1,emitMissed:t=!1,onBlockNumber:i,onError:r,poll:n,pollingInterval:o=a.pollingInterval}){let s=typeof n<"u"?n:a.transport.type!=="webSocket",l;return s?(()=>{let p=Oe(["watchBlockNumber",a.uid,e,t,o]);return jt(p,{onBlockNumber:i,onError:r},y=>zi(async()=>{try{let _=await ae(a,Fi,"getBlockNumber")({cacheTime:0});if(l){if(_===l)return;if(_-l>1&&t)for(let g=l+1n;g<_;g++)y.onBlockNumber(g,l),l=g}(!l||_>l)&&(y.onBlockNumber(_,l),l=_)}catch(_){y.onError?.(_)}},{emitOnBegin:e,interval:o}))})():(()=>{let p=Oe(["watchBlockNumber",a.uid,e,t]);return jt(p,{onBlockNumber:i,onError:r},y=>{let _=!0,g=()=>_=!1;return(async()=>{try{let{unsubscribe:f}=await a.transport.subscribe({params:["newHeads"],onData(T){if(!_)return;let C=Ia(T.result?.number);y.onBlockNumber(C,l),l=C},onError(T){y.onError?.(T)}});g=f,_||g()}catch(f){r?.(f)}})(),()=>g()})})()}async function eg(a,{confirmations:e=1,hash:t,onReplaced:i,pollingInterval:r=a.pollingInterval,retryCount:n=6,retryDelay:o=({count:l})=>~~(1<<l)*200,timeout:s}){let l=Oe(["waitForTransactionReceipt",a.uid,t]),c,u,p,y=!1;return new Promise((_,g)=>{s&&setTimeout(()=>g(new ic({hash:t})),s);let f=jt(l,{onReplaced:i,resolve:_,reject:g},T=>{let C=ae(a,Wc,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:r,async onBlockNumber(O){if(y)return;let N=O,Q=F=>{C(),F(),f()};try{if(p){if(e>1&&(!p.blockNumber||N-p.blockNumber+1n<e))return;Q(()=>T.resolve(p));return}if(c||(y=!0,await qo(async()=>{c=await ae(a,zn,"getTransaction")({hash:t}),c.blockNumber&&(N=c.blockNumber)},{delay:o,retryCount:n}),y=!1),p=await ae(a,Ko,"getTransactionReceipt")({hash:t}),e>1&&(!p.blockNumber||N-p.blockNumber+1n<e))return;Q(()=>T.resolve(p))}catch(F){if(F instanceof Qr||F instanceof Jr){if(!c){y=!1;return}try{u=c,y=!0;let U=await qo(()=>ae(a,Gt,"getBlock")({blockNumber:N,includeTransactions:!0}),{delay:o,retryCount:n,shouldRetry:({error:ke})=>ke instanceof An});y=!1;let W=U.transactions.find(({from:ke,nonce:Le})=>ke===u.from&&Le===u.nonce);if(!W||(p=await ae(a,Ko,"getTransactionReceipt")({hash:W.hash}),e>1&&(!p.blockNumber||N-p.blockNumber+1n<e)))return;let se="replaced";W.to===u.to&&W.value===u.value?se="repriced":W.from===W.to&&W.value===0n&&(se="cancelled"),Q(()=>{T.onReplaced?.({reason:se,replacedTransaction:u,transaction:W,transactionReceipt:p}),T.resolve(p)})}catch(U){Q(()=>T.reject(U))}}else Q(()=>T.reject(F))}}})})})}ii();function tg(a,{blockTag:e="latest",emitMissed:t=!1,emitOnBegin:i=!1,onBlock:r,onError:n,includeTransactions:o,poll:s,pollingInterval:l=a.pollingInterval}){let c=typeof s<"u"?s:a.transport.type!=="webSocket",u=o??!1,p;return c?(()=>{let g=Oe(["watchBlocks",a.uid,t,i,u,l]);return jt(g,{onBlock:r,onError:n},f=>zi(async()=>{try{let T=await ae(a,Gt,"getBlock")({blockTag:e,includeTransactions:u});if(T.number&&p?.number){if(T.number===p.number)return;if(T.number-p.number>1&&t)for(let C=p?.number+1n;C<T.number;C++){let O=await ae(a,Gt,"getBlock")({blockNumber:C,includeTransactions:u});f.onBlock(O,p),p=O}}(!p?.number||e==="pending"&&!T?.number||T.number&&T.number>p.number)&&(f.onBlock(T,p),p=T)}catch(T){f.onError?.(T)}},{emitOnBegin:i,interval:l}))})():(()=>{let g=!0,f=()=>g=!1;return(async()=>{try{let{unsubscribe:T}=await a.transport.subscribe({params:["newHeads"],onData(C){if(!g)return;let N=(a.chain?.formatters?.block?.format||mc)(C.result);r(N,p),p=N},onError(C){n?.(C)}});f=T,g||f()}catch(T){n?.(T)}})(),()=>f()})()}ii();yt();Vo();function ig(a,{address:e,args:t,batch:i=!0,event:r,events:n,onError:o,onLogs:s,poll:l,pollingInterval:c=a.pollingInterval,strict:u}){let p=typeof l<"u"?l:a.transport.type!=="webSocket",y=u??!1;return p?(()=>{let f=Oe(["watchEvent",e,t,i,a.uid,r,c]);return jt(f,{onLogs:s,onError:o},T=>{let C,O,N=!1,Q=zi(async()=>{if(!N){try{O=await ae(a,Oc,"createEventFilter")({address:e,args:t,event:r,events:n,strict:y})}catch{}N=!0;return}try{let F;if(O)F=await ae(a,Ua,"getFilterChanges")({filter:O});else{let U=await ae(a,Fi,"getBlockNumber")({});C&&C!==U?F=await ae(a,Rn,"getLogs")({address:e,args:t,event:r,events:n,fromBlock:C+1n,toBlock:U}):F=[],C=U}if(F.length===0)return;if(i)T.onLogs(F);else for(let U of F)T.onLogs([U])}catch(F){O&&F instanceof Bi&&(N=!1),T.onError?.(F)}},{emitOnBegin:!0,interval:c});return async()=>{O&&await ae(a,Va,"uninstallFilter")({filter:O}),Q()}})})():(()=>{let f=!0,T=()=>f=!1;return(async()=>{try{let C=n??(r?[r]:void 0),O=[];C&&(O=[C.flatMap(Q=>ki({abi:[Q],eventName:Q.name,args:t}))],r&&(O=O[0]));let{unsubscribe:N}=await a.transport.subscribe({params:["logs",{address:e,topics:O}],onData(Q){if(!f)return;let F=Q.result;try{let{eventName:U,args:W}=fr({abi:C??[],data:F.data,topics:F.topics,strict:y}),se=Pt(F,{args:W,eventName:U});s([se])}catch(U){let W,se;if(U instanceof li||U instanceof Ii){if(u)return;W=U.abiItem.name,se=U.abiItem.inputs?.some(Le=>!("name"in Le&&Le.name))}let ke=Pt(F,{args:se?[]:{},eventName:W});s([ke])}},onError(Q){o?.(Q)}});T=N,f||T()}catch(C){o?.(C)}})(),()=>T()})()}ii();function ag(a,{batch:e=!0,onError:t,onTransactions:i,poll:r,pollingInterval:n=a.pollingInterval}){return(typeof r<"u"?r:a.transport.type!=="webSocket")?(()=>{let c=Oe(["watchPendingTransactions",a.uid,e,n]);return jt(c,{onTransactions:i,onError:t},u=>{let p,y=zi(async()=>{try{if(!p)try{p=await ae(a,Nc,"createPendingTransactionFilter")({});return}catch(g){throw y(),g}let _=await ae(a,Ua,"getFilterChanges")({filter:p});if(_.length===0)return;if(e)u.onTransactions(_);else for(let g of _)u.onTransactions([g])}catch(_){u.onError?.(_)}},{emitOnBegin:!0,interval:n});return async()=>{p&&await ae(a,Va,"uninstallFilter")({filter:p}),y()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{let{unsubscribe:p}=await a.transport.subscribe({params:["newPendingTransactions"],onData(y){if(!c)return;let _=y.result;i([_])},onError(y){t?.(y)}});u=p,c||u()}catch(p){t?.(p)}})(),()=>u()})()}function rg(a){return{call:e=>Vi(a,e),createBlockFilter:()=>Ly(a),createContractEventFilter:e=>Gl(a,e),createEventFilter:e=>Oc(a,e),createPendingTransactionFilter:()=>Nc(a),estimateContractGas:e=>Bb(a,e),estimateGas:e=>Mn(a,e),getBalance:e=>_y(a,e),getBlobBaseFee:()=>xy(a),getBlock:e=>Gt(a,e),getBlockNumber:e=>Fi(a,e),getBlockTransactionCount:e=>Iy(a,e),getBytecode:e=>Ey(a,e),getChainId:()=>Ui(a),getContractEvents:e=>fc(a,e),getEnsAddress:e=>my(a,e),getEnsAvatar:e=>gy(a,e),getEnsName:e=>vy(a,e),getEnsResolver:e=>wy(a,e),getEnsText:e=>Bc(a,e),getFeeHistory:e=>Ty(a,e),estimateFeesPerGas:e=>Pb(a,e),getFilterChanges:e=>Ua(a,e),getFilterLogs:e=>ky(a,e),getGasPrice:()=>Dn(a),getLogs:e=>Rn(a,e),getProof:e=>Gy(a,e),estimateMaxPriorityFeePerGas:e=>Mb(a,e),getStorageAt:e=>jy(a,e),getTransaction:e=>zn(a,e),getTransactionConfirmations:e=>qy(a,e),getTransactionCount:e=>hc(a,e),getTransactionReceipt:e=>Ko(a,e),multicall:e=>Wy(a,e),prepareTransactionRequest:e=>Ha(a,e),readContract:e=>Rt(a,e),sendRawTransaction:e=>On(a,e),simulateContract:e=>Qb(a,e),verifyMessage:e=>Qy(a,e),verifyTypedData:e=>Jy(a,e),uninstallFilter:e=>Va(a,e),waitForTransactionReceipt:e=>eg(a,e),watchBlocks:e=>tg(a,e),watchBlockNumber:e=>Wc(a,e),watchContractEvent:e=>iy(a,e),watchEvent:e=>ig(a,e),watchPendingTransactions:e=>ag(a,e)}}function ph(a){let{key:e="public",name:t="Public Client"}=a;return Tc({...a,key:e,name:t,type:"publicClient"}).extend(rg)}function ng(a,e){let{abi:t,args:i,bytecode:r,...n}=e,o=Wo({abi:t,args:i,bytecode:r});return Nn(a,{...n,data:o})}Ro();async function og(a){return a.account?.type==="local"?[a.account.address]:(await a.request({method:"eth_accounts"})).map(t=>or(t))}async function sg(a){return await a.request({method:"wallet_getPermissions"})}Ro();async function lg(a){return(await a.request({method:"eth_requestAccounts"},{retryCount:0})).map(t=>lb(t))}async function cg(a,e){return a.request({method:"wallet_requestPermissions",params:[e]},{retryCount:0})}ti();Te();async function ug(a,{account:e=a.account,message:t}){if(!e)throw new Hi({docsPath:"/docs/actions/wallet/signMessage"});let i=We(e);if(i.type==="local")return i.signMessage({message:t});let r=(()=>typeof t=="string"?rr(t):t.raw instanceof Uint8Array?$e(t.raw):t.raw)();return a.request({method:"personal_sign",params:[r,i.address]},{retryCount:0})}ti();Te();zo();Cn();async function pg(a,e){let{account:t=a.account,chain:i=a.chain,...r}=e;if(!t)throw new Hi({docsPath:"/docs/actions/wallet/signTransaction"});let n=We(t);Ni({account:n,...e});let o=await ae(a,Ui,"getChainId")({});i!==null&&Ic({currentChainId:o,chain:i});let l=(i?.formatters||a.chain?.formatters)?.transactionRequest?.format||Oa;return n.type==="local"?n.signTransaction({...r,chainId:o},{serializer:a.chain?.serializers?.transaction}):await a.request({method:"eth_signTransaction",params:[{...l(r),chainId:ce(o),from:n.address}]},{retryCount:0})}ti();_i();ii();async function mg(a,e){let{account:t=a.account,domain:i,message:r,primaryType:n}=e;if(!t)throw new Hi({docsPath:"/docs/actions/wallet/signTypedData"});let o=We(t),s={EIP712Domain:Uc({domain:i}),...e.types};if(Hc({domain:i,message:r,primaryType:n,types:s}),o.type==="local")return o.signTypedData({domain:i,message:r,primaryType:n,types:s});let l=Oe({domain:i??{},message:r,primaryType:n,types:s},(c,u)=>Je(u)?u.toLowerCase():u);return a.request({method:"eth_signTypedData_v4",params:[o.address,l]},{retryCount:0})}Te();async function dg(a,{id:e}){await a.request({method:"wallet_switchEthereumChain",params:[{chainId:ce(e)}]},{retryCount:0})}async function hg(a,e){return await a.request({method:"wallet_watchAsset",params:e},{retryCount:0})}function fg(a){return{addChain:e=>ny(a,e),deployContract:e=>ng(a,e),getAddresses:()=>og(a),getChainId:()=>Ui(a),getPermissions:()=>sg(a),prepareTransactionRequest:e=>Ha(a,e),requestAddresses:()=>lg(a),requestPermissions:e=>cg(a,e),sendRawTransaction:e=>On(a,e),sendTransaction:e=>Nn(a,e),signMessage:e=>ug(a,e),signTransaction:e=>pg(a,e),signTypedData:e=>mg(a,e),switchChain:e=>dg(a,e),watchAsset:e=>hg(a,e),writeContract:e=>ry(a,e)}}function Kc(a){let{key:e="wallet",name:t="Wallet Client",transport:i}=a;return Tc({...a,key:e,name:t,transport:i,type:"walletClient"}).extend(fg)}yt();Te();var Sw=`abdikace
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
`);var Tw=`abandon
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
`);var kw=`abaisser
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
`);var Cw=`abaco
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
`);var Aw=`あいこくしん
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
`);var Dw=`가격
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
`);var Mw=`的
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
`);var Pw=`ábaco
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
`);var Rw=`的
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
`);Mg();Te();function Zc(){return $e(Lh.utils.randomPrivateKey())}var $o=Cy({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var ue=class a{constructor(){this.tokenContract=null;this.hero_contract=null;this.walletClient=Kc({chain:$o,transport:Cc(window.ethereum)})}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){if(typeof window.ethereum>"u"){console.log("2222"),be.instance.notice(I.instance.getLanguage("130"));return}console.log("3333"),De.instance.sendCustumEvent(10),console.log("444"),console.log("5555")}async registerProxy(){console.log("888"),Ur.instance.init()}async getWalletAddress(){if(this.walletAddress)return this.walletAddress;let[e]=await this.walletClient.requestAddresses();return console.log("address:"+e),e;if(await gf(),Qe.type==Qe.TYPE_TRUST)try{console.log("initWeb3 -3");let t=await Qe.trustProvider.request({method:"eth_requestAccounts"});return console.log("initWeb3 -4"),console.log(t),t[0]}catch(t){console.log("initWeb3 -5"+t),t.code===4001&&console.error("User denied connection.")}else if(Qe.type==Qe.TYPE_WEB3)return(await window.ethereum.request({method:"eth_requestAccounts"}))[0];return null}async dappLogin(){console.log("dappLogin this.walletAddress: "+this.walletAddress),De.instance.sendCustumEvent(13),this.walletAddress=await this.getWalletAddress(),De.instance.sendCustumEvent(14),console.log("login to server",1),await this.signAndLogin(),console.log("login success",1)}getChainId(){let e="";return typeof window.ethereum>"u"&&(e="0x38"),(window.ethereum.chainId+"").indexOf("0x")==-1?e="0x"+window.ethereum.chainId.toString(16):e=window.ethereum.chainId,e!=="0x38"&&e!=="0x61"&&be.instance.notice(I.instance.getLanguage(18)),e}async signAndLogin(e=!1){console.log("signAndLogin mustSign: "+e);var t=!0;let i=new Date().getTime(),r="",n="",o="",s="";if(le.Debug!=0)t=!1;else if(!e&&localStorage.getItem("TOX-COOKIE"+this.walletAddress)&&le.Debug==0){let y=localStorage.getItem("TOX-COOKIE"+a.instance.walletAddress),_=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);_=Qt.decode(_);let g=_.split("&");i=parseFloat(g[0]),r=g[1],n=g[2],o=g[3],s=g[4],y&&i&&r&&n&&o&&s&&(t=!1),console.log("needSign: "+t)}if(t){console.log("111");var l=Zc().substring(0,32);r=$e(l,{size:32}),console.log("222"),i=new Date().getTime();let _=this.walletAddress+r+i,g=new _h.default("SHA-256","TEXT",{encoding:"UTF8"});g.update(_);let f=g.getHash("HEX");console.log("进入签名",1);let T=await this.walletClient.signMessage({account:this.walletAddress,message:f});console.log("签名结束",1);let C=T.substring(2);n="0x"+C.substring(0,64),o="0x"+C.substring(64,128),s="0x"+C.substring(128,130)}let c={debug:le.Debug,address:this.walletAddress,time:i,randomHex:r,r:n,s:o,v:s};De.instance.sendCustumEvent(15);let u=await pe.requestPost("wxgame/player/login",c,!1,!1);if(u){console.log("服务器登录成功"),De.instance.sendCustumEvent(16),localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,u.loginToken);var p=Qt.encode(i+"&"+r+"&"+n+"&"+o+"&"+s);localStorage.setItem("TOX-COOKIE-CODE"+a.instance.walletAddress,p)}else Z.intance.openModule(h.NoServerView);w.intance.event(E.EVENT_LOGIN_GAME_END,u)}async main(){let e=ph({chain:$o,transport:eh()}),t=Kc({chain:$o,transport:Cc(window.ethereum)}),i=await e.getBalance({address:"0x55d398326f99059fF775485246999027B3197955"});console.log("balance:"+i);let[r]=await t.requestAddresses();console.log("address:"+r);let n=await t.signMessage({account:r,message:"Hello world!"});console.log("address: "+r),console.log("message: Hello world!"),console.log("signature: "+n);let o=await e.verifyMessage({address:r,message:"Hello world!",signature:n});console.log("valid: "+o);let l=await(await fetch("http://localhost:3000/api/login",{method:"POST",body:JSON.stringify({address:t.account.address,signature:n})})).json();console.log("data: "+l)}async refreshToken(){let e,t=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);t=Qt.decode(t);let i=t.split("&"),r=parseFloat(i[0]),n=i[1],o=i[2],s=i[3],l=i[4];if(r&&n&&o&&s&&l){let c={debug:le.Debug,address:this.walletAddress,time:r,randomHex:n,r:o,s,v:l};e=await pe.requestPost("wxgame/player/getJwt",c,!1,!1).catch(u=>{}),e&&localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,e.loginToken)}return e}async createAcccount(e,t,i,r){console.log("createAcccount");var n=!0;let o=new Date().getTime(),s="",l="",c="",u="";if(le.Debug!=0)n=!1;else{let g=localStorage.getItem("TOX-COOKIE-CODE"+a.instance.walletAddress);g=Qt.decode(g);let f=g.split("&");o=parseFloat(f[0]),s=f[1],l=f[2],c=f[3],u=f[4],o&&s&&l&&c&&u&&(n=!1),console.log("needSign: "+n)}if(n){var p=Zc().substring(0,32);s=$e(p,{size:32}),o=new Date().getTime();let f=this.walletAddress+s+o,T=new _h.default("SHA-256","TEXT",{encoding:"UTF8"});T.update(f);let C=T.getHash("HEX");console.log("进入签名",1);let O=await this.walletClient.signMessage({account:this.walletAddress,message:C});console.log("签名结束",1);let N=O.substring(2);l="0x"+N.substring(0,64),c="0x"+N.substring(64,128),u="0x"+N.substring(128,130)}let y,_={name:e,sex:t,icon:i,country:r,debug:le.Debug,address:this.walletAddress,time:o,randomHex:s,r:l,s:c,v:u};if(y=await pe.requestPost("wxgame/player/create",_,!1,!1).catch(g=>{}),y){let g=y.playerDto;return localStorage.setItem("TOX-COOKIE"+a.instance.walletAddress,y.loginToken),g}return null}async getBalance(){return 0}async allowanceAddress(e){return await this.tokenContract.methods.allowance(this.walletAddress,e).call()=="0"&&(console.log("ERC20 allowance!"),await this.tokenContract.methods.approve(e,"100000000000000000000000000000000000000000000000").send({from:this.walletAddress},(i,r)=>{if(i)return Y.instance.hideLoading(),!1})),!0}async allowanceAddressByTokenAddress(e,t){let i=new window.web3.eth.Contract(B.TOKEN_ERC20ABI,t);return await i.methods.allowance(this.walletAddress,e).call()=="0"&&(console.log("ERC20 allowance!"),await i.methods.approve(e,"100000000000000000000000000000000000000000000000").send({from:this.walletAddress},(n,o)=>{if(n)return Y.instance.hideLoading(),!1})),!0}async getERC20TokenBalance(e){let i=await new window.web3.eth.Contract(B.TOKEN_ERC20ABI,e).methods.balanceOf(this.walletAddress).call();return i=window.web3.utils.fromWei(i),i}async getHeroStatus(e){return await this.hero_contract.methods.getStatus(parseInt(e)).call()}async checkHeroIsBuzy(e){let t=await this.getHeroStatus(e);return parseInt(t)?(be.instance.notice(I.instance.getLanguage(19)),!0):!1}};var oa=class oa{constructor(e,t){this._lineIndex=0;this._isShow=!1;this._alpha=.6;this.isInit=!1;this._isRelease=!0;this._count=0;this.maxCount=1e3;this.prevX=0;this.prevY=0;this._stage=e,this._isRelease=t,this._actionLineList=[],this._time=new Date().getTime();let i,r,n,o,s=function(u){i=u.stageX,r=u.stageY,n=i,o=r},l=function(u){n=u.stageX,o=u.stageY},c=function(u){let p=Laya.stage.width-(n-i)<160,y=Laya.stage.height-(o-r)<160;p&&y&&ni.debugger&&(Laya.Browser.window.console.log=ni.addConsoleLog,ni.debugger.showOrHide())};Laya.stage.on(Laya.Event.MOUSE_DOWN,this,s),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,l),Laya.stage.on(Laya.Event.MOUSE_UP,this,c)}initDebugView(){if(!this.isInit){this.totalW=Laya.stage.width,this.totalH=Laya.stage.height/2,this.bigContainer=new Laya.Sprite,this.bgContainer=new Laya.Sprite,this._bgSp=new Laya.Sprite,this._bgSp.alpha=this._alpha,this._bgSp.graphics.drawRect(0,0,this.totalW,this.totalH,"#000000"),this._bgSp.mouseEnabled=!1,this._debugInfoTf=new Laya.Text,this._debugInfoTf.color="#ffffff",this._debugInfoTf.width=this.totalW-10,this._debugInfoTf.height=this.totalH-10,this._debugInfoTf.overflow="scroll",this._debugInfoTf.wordWrap=!0;let e="[LOADINFO - DEBUGGER]";this.appendText("加载调试信息 "+e,0,!1),this._closeTf=new Laya.Label,this._closeTf.color="#ff0000",this._closeTf.valign="middle",this._closeTf.width=55,this._closeTf.height=55,this._closeTf.borderColor=oa.DEFAULT_COLOR,this._closeTf.text="关闭",this._autoScrollTf=new Laya.Label,this._autoScrollTf.color="#ff0000",this._autoScrollTf.valign="middle",this._autoScrollTf.width=55,this._autoScrollTf.height=55,this._autoScrollTf.borderColor=oa.DEFAULT_COLOR,this._autoScrollTf.text="自动卷屏",this._bgAlpha0=new Laya.Label,this._bgAlpha0.color="#ff0000",this._bgAlpha0.valign="middle",this._bgAlpha0.width=55,this._bgAlpha0.height=55,this._bgAlpha0.borderColor=oa.DEFAULT_COLOR,this._bgAlpha0.text="背景-",this._bgAlpha1=new Laya.Label,this._bgAlpha1.color="#ff0000",this._bgAlpha1.valign="middle",this._bgAlpha1.width=55,this._bgAlpha1.height=55,this._bgAlpha1.borderColor=oa.DEFAULT_COLOR,this._bgAlpha1.text="背景+",this._clearTf=new Laya.Label,this._clearTf.color="#ff0000",this._clearTf.valign="middle",this._clearTf.width=55,this._clearTf.height=55,this._clearTf.borderColor=oa.DEFAULT_COLOR,this._clearTf.text="清理",this._testTf=new Laya.Label,this._testTf.color="#ff0000",this._testTf.width=55,this._testTf.height=55,this._testTf.borderColor=oa.DEFAULT_COLOR,this._testTf.text="点穿",this.bgContainer.x=5,this.bgContainer.y=5,this._debugInfoTf.x=5,this._debugInfoTf.y=5,this.bgContainer.addChild(this._bgSp),this.bgContainer.addChild(this._debugInfoTf),this._closeTf.x=this.totalW-60,this._closeTf.y=5,this.bgContainer.addChild(this._closeTf),this._autoScrollTf.x=this.totalW-60,this._autoScrollTf.y=105,this.bgContainer.addChild(this._autoScrollTf),this._bgAlpha0.x=this.totalW-60,this._bgAlpha0.y=205,this.bgContainer.addChild(this._bgAlpha0),this._bgAlpha1.x=this.totalW-60,this._bgAlpha1.y=305,this.bgContainer.addChild(this._bgAlpha1),this._clearTf.x=this.totalW-60,this._clearTf.y=405,this.bgContainer.addChild(this._clearTf),this._testTf.x=this.totalW-60,this._testTf.y=505,this.bigContainer.addChild(this.bgContainer),this.bigContainer.addChild(this._testTf),this._autoScroll=!0,this._hide=!0,this._debugInfoTf.on(Laya.Event.MOUSE_DOWN,this,this.startScrollText),this._closeTf.on(Laya.Event.CLICK,this,this.onCloseTfClick),this._autoScrollTf.on(Laya.Event.CLICK,this,this.onAutoScrollTfClick),this._bgAlpha0.on(Laya.Event.CLICK,this,this.onBgAlpha0),this._bgAlpha1.on(Laya.Event.CLICK,this,this.onBgAlpha1),this._clearTf.on(Laya.Event.CLICK,this,this.onClearTfClick),this._testTf.on(Laya.Event.CLICK,this,this.onTestTfClick),this.isInit=!0}}show(){this.initDebugView(),this._stage.addChild(this.bigContainer),this._isShow=!0,this.updateView()}hide(){this.initDebugView(),this.bigContainer.parent&&this.bigContainer.parent.removeChild(this.bigContainer),this._isShow=!1,this.updateView()}showOrHide(){this._isShow=!this._isShow,this._isShow?this.show():this.hide()}appendText(e,t=0,i=!0){if(i){let r=new Date().getTime()-this._time;e+="  ["+(r/1e3).toFixed(3)+"]"}this._actionLineList.push([e+`
`,t]),this._lineIndex>=200&&(this._actionLineList.splice(0,20),this._lineIndex-=20),this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf&&(this._debugInfoTf.text="")),this._isShow&&(this._currentLine=this._actionLineList[this._lineIndex++],this._debugInfoTf&&(this._debugInfoTf.text+=this._currentLine[0]),this._autoScroll&&this._debugInfoTf&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY))}updateView(){if(this._isShow){this._count=0,this._debugInfoTf.text="";let e=this._actionLineList.length;for(this._lineIndex=0;this._lineIndex<e;++this._lineIndex)this._currentLine=this._actionLineList[this._lineIndex],this._debugInfoTf.text+=this._currentLine[0],this._count++,this._count>this.maxCount&&(this._count=0,this._debugInfoTf.text="");this._autoScroll&&(this._debugInfoTf.scrollY=this._debugInfoTf.maxScrollY)}else this._debugInfoTf.text=""}onCloseTfClick(e){this.hide()}onAutoScrollTfClick(e){this._autoScroll=!this._autoScroll,this._autoScroll?this._autoScrollTf.text="自动卷屏":this._autoScrollTf.text="手动卷屏"}onBgAlpha0(e){this._alpha-=.1,this._alpha<=0&&(this._alpha=0),this._bgSp.alpha=this._alpha}onBgAlpha1(e){this._alpha+=.1,this._alpha>=1&&(this._alpha=1),this._bgSp.alpha=this._alpha}onClearTfClick(e){this._debugInfoTf.text="",this._actionLineList.length=0,this._lineIndex=0}onTestTfClick(e){this.bgContainer.mouseEnabled=!this.bgContainer.mouseEnabled}set testFun(e){this._testFun=e}get bgSp(){return this._bgSp}startScrollText(e){this.prevX=this._debugInfoTf.mouseX,this.prevY=this._debugInfoTf.mouseY,Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.finishScrollText)}finishScrollText(e){Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.scrollText),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.finishScrollText)}scrollText(e){let t=this._debugInfoTf.mouseX,i=this._debugInfoTf.mouseY;this._debugInfoTf.scrollX+=this.prevX-t,this._debugInfoTf.scrollY+=this.prevY-i,this.prevX=t,this.prevY=i}};oa.DEFAULT_COLOR="#ffffff";var Qc=oa;var ni=class a{static Initialize(e,t){a.isRelease=t,this.debugger==null&&(this.debugger=new Qc(e,t))}static log(e,t=0,i=0){var r=Ve.GetLogTime+" "+e;t&&a.addLog(r,t,i)}static addLog(e,t=0,i=0){this.debugger&&this.debugger.appendText(e,i),console.log(e)}static addConsoleLog(...e){a.debugger&&a.debugger.appendText(e,0)}};var Pg=Laya.HttpRequest,Bt=class Bt{static requestGet(e,t,i=!1,r=!0){return new Promise((n,o)=>{var s=Laya.Pool.getItem("HttpRequest");s||(s=new Pg),s.http.timeout=2e3,s.on(Laya.Event.COMPLETE,null,y),s.on(Laya.Event.ERROR,null,_),s.http.onreadystatechange=()=>{if(s.http.readyState===XMLHttpRequest.DONE){var f=s.http.status;f>=200&&f<400||(o(),g())}};let l=localStorage.getItem("TOX-COOKIE"+ue.instance.walletAddress),c=["Content-Type","application/json"];l&&(c=[...c,"Authorization",l]);let u=Bt.httpRoot+"/"+e+p(t);Bt.httpRoot!="https://api.cybertron.world"&&ni.log("REQUEST_GET "+u,1),s.send(u,null,"get","json",c);function p(f){if(typeof f=="string")return f;let T="";for(let C in f)T+="&"+C+"="+f[C];return T}function y(f){f.code==="0"?n(f.data):(Ge.instance.showErrorWord(parseInt(f.code)),o(f.code)),g()}function _(f,T){debugger;o(f),g()}function g(){s.off(Laya.Event.COMPLETE,null,y),s.off(Laya.Event.ERROR,null,_),Laya.Pool.recover("HttpRequest",s)}})}static startHeart(){Laya.timer.loop(1e3,this,this.onHeart)}static async onHeart(){if(Bt.needHeart){var e=await this.requestPost("wxgame/sys/ping",{},!0,!0),t=e.time;A.instance.m_serverTime=t;var i=e.resChange,r=e.itemChange;i&&i.length>0&&A.instance.moneyInfoHander(i),r&&r.length>0&&A.instance.itemsDataUpdataHandler(r,!0)}}static requestPost(e,t,i=!1,r=!0){let n=localStorage.getItem("TOX-COOKIE"+ue.instance.walletAddress);return i&&!n?[]:new Promise((o,s)=>{var l=Laya.Pool.getItem("HttpRequest");l||(l=new Pg),l.http.timeout=1e4,l.once(Laya.Event.COMPLETE,null,p),l.once(Laya.Event.ERROR,null,y);let c=[];n&&r&&(c=[...c,"Authorization",n]);var u=Bt.seq+1;Bt.seq=u,Bt.httpRoot!="https://api.cybertron.world"&&e!="wxgame/sys/ping"&&console.log(Ve.GetLogTime+" "+u+" >>> HTTP_POST "+Bt.httpRoot+"/"+e+" "+JSON.stringify(t),n),l.send(Bt.httpRoot+"/"+e,t,"post","json",c);async function p(g){if(Bt.httpRoot!="https://api.cybertron.world"&&(le.Debug>0||e!="wxgame/sys/ping")&&console.log(Ve.GetLogTime+" "+u+" <<< hTTP_RCV data: "+JSON.stringify(g),1),g.errorCode==0||g.errorCode==="0")o(g);else{if(g.errorCode===10)Ve.heroNotEnought();else if(g.errorCode===18)Ve.titickNotEnought();else if(g.errorCode===2||g.errorCode===21)Ve.alertNoAll(Ge.instance.get(g.errorCode));else if(g.errorCode===5)if(le.Debug==0){localStorage.setItem("TOX-COOKIE"+ue.instance.walletAddress,"");var f=await ue.instance.refreshToken();f&&Bt.requestPost(e,t,i,r)}else localStorage.setItem("TOX-COOKIE"+ue.instance.walletAddress,""),Ge.instance.showErrorWord(parseInt(g.errorCode));else g.errorCode===17?le.Debug==0?(localStorage.setItem("TOX-COOKIE"+ue.instance.walletAddress,""),ue.instance.signAndLogin(),Ge.instance.showErrorWord(parseInt(g.errorCode))):(localStorage.setItem("TOX-COOKIE"+ue.instance.walletAddress,""),Ge.instance.showErrorWord(parseInt(g.errorCode))):Ge.instance.showErrorWord(parseInt(g.errorCode));s(g.errorCode)}_()}function y(g,f){console.log("errorHandler data: "+g,1),Ge.instance.showErrorWord(500),s(g),_()}function _(){l.off(Laya.Event.COMPLETE,null,p),l.off(Laya.Event.ERROR,null,y),Laya.Pool.recover("HttpRequest",l)}})}};Bt.httpRoot=getServer(),Bt.needHeart=!0,Bt.seq=0;var pe=Bt;var ne=class a{constructor(){this._inited=!1;this.stopAll=!1;this.heroReadyDic=new te;this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}get matchDto(){return this._matchDto}set matchDto(e){this._matchDto=e,e&&e.startTime-e.nowTime>0?this.stopAll=!0:this.stopAll=!1}setMatchRes(){this.heroReadyDic=new te;var e=this.roomDto.members.length,t=[],i=this.currArenaItem.mapid;if(this.heroReadyDic.get("map_"+i)==null){var i=a.instance.currArenaItem.mapid,r=G.instance.getMapImg(i);t.push(r);var n=G.instance.getMapPrefab(i);t.push(n),this.heroReadyDic.set("map_"+i,!0)}for(var o=0;o<e;o++){var s=this.roomDto.members[o];if(this.heroReadyDic.get(s.heroId+"_"+s.heroColor)==null){var l=ie.intance.m_dicHeros.get(s.heroId),c=G.instance.getHeroSkRes(l.serialId,s.heroColor);t.push({url:c,type:Laya.Loader.SPINE}),this.heroReadyDic.set(s.heroId+"_"+s.heroColor,!0)}}t.length>0&&Laya.loader.load(t,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{})}onPreAssetPress1(e){}async checkMatchRankData(){if(this.reward==null){let e=await pe.requestPost("wxgame/room/balanceInfo",{roomId:a.instance.matchDto.roomId});a.instance.reward==null&&(a.instance.reward=e.reward,Z.intance.openModule(h.MatchEndRankView,e.rankList))}}onGoMatchEndRank(e,t){this.reward==null&&(a.instance.reward=t,Z.intance.openModule(h.MatchEndRankView,e))}clearData(){this.roomDto=null,this.matchDto=null,this.reward=null,this.heroReadyDic=null,this.currArenaItem=null,z.instance.clearData()}};var Xo=class Xo{constructor(){this.targetId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return Xo.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeStringStringMap(t.param),e.writeInt(t.skillId),e.writeLong(t.targetId),e.writeInt(t.type))}static read(e){if(!e.readBoolean())return null;let t=new Xo,i=e.readStringStringMap();t.param=i;let r=e.readInt();t.skillId=r;let n=e.readLong();t.targetId=n;let o=e.readInt();return t.type=o,t}};Xo.PROTOCOL_ID=1031;var xh=Xo,Jc=xh;var Zo=class Zo{constructor(){this.targetId=0;this.attackType=0;this.skillId=0}protocolId(){return Zo.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.attackType),e.writeInt(t.skillId),e.writeLong(t.targetId))}static read(e){if(!e.readBoolean())return null;let t=new Zo,i=e.readInt();t.attackType=i;let r=e.readInt();t.skillId=r;let n=e.readLong();return t.targetId=n,t}};Zo.PROTOCOL_ID=1021;var Ih=Zo,eu=Ih;var Qo=class Qo{protocolId(){return Qo.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null}static read(e){return e.readBoolean()?new Qo:null}};Qo.PROTOCOL_ID=1025;var Eh=Qo,tu=Eh;var Jo=class Jo{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return Jo.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.area),e.writeInt(t.dire),e.writeInt(t.speed),e.writeLong(t.time),e.writeInt(t.x),e.writeInt(t.y))}static read(e){if(!e.readBoolean())return null;let t=new Jo,i=e.readInt();t.area=i;let r=e.readInt();t.dire=r;let n=e.readInt();t.speed=n;let o=e.readLong();t.time=o;let s=e.readInt();t.x=s;let l=e.readInt();return t.y=l,t}};Jo.PROTOCOL_ID=1013;var Sh=Jo,iu=Sh;var es=class es{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.skillId=0;this.sourceId=0;this.time=0}protocolId(){return es.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.skillId),e.writeLong(t.sourceId),e.writeLong(t.targetId),e.writeInt(t.targetX),e.writeInt(t.targetY),e.writeLong(t.time))}static read(e){if(!e.readBoolean())return null;let t=new es,i=e.readInt();t.skillId=i;let r=e.readLong();t.sourceId=r;let n=e.readLong();t.targetId=n;let o=e.readInt();t.targetX=o;let s=e.readInt();t.targetY=s;let l=e.readLong();return t.time=l,t}};es.PROTOCOL_ID=1035;var Th=es,au=Th;var qt=class qt{constructor(){this.validEnemyList=[];this.gameWindowX=0;this.gameWindowY=0;this.isControl=!1}get gameMap(){return this._gameMap}set gameMap(e){this._gameMap=e}clearData(){this.gameMap=null,this.box_players=null,this.myHeroSpr=null,this.matchHeroSprDic=null,this.matchHeroSprs=null,this.matchHeroDic=null,this.myPlayer=null}static get instance(){return qt._instance==null&&(qt._instance=new qt),qt._instance}init(){this.validEnemyList=[]}insertValidList(e){this.isFInd(e,this.validEnemyList)||this.validEnemyList.push(e)}isFInd(e,t){var i=!1;(!e||!t||t.length<=0)&&(i=!1);for(let r=0;r<t.length;r++)if(t[r]==e)return!0;return i}isFIndIndex(e,t){var i=-1;(!e||!t||t.length<=0)&&(i=-1);for(let r=0;r<t.length;r++)t[r]==e&&(i=r);return i}removeValidListByValue(e){if(!(!e||!this.validEnemyList||this.validEnemyList.length<=0)){var t=this.isFIndIndex(e,this.validEnemyList);t!=-1&&this.validEnemyList.splice(t,1)}}initMatch(e,t){Laya.loader.load("scenes/match/MatchHeroSpr.lh").then(i=>{this.roleAniPrefab=i,this.createPlayers(),t&&t(e)})}updateMatch(e,t){this.updatePlayers(),t&&t(e)}createPlayers(){this.matchHeroDic=new te,this.matchHeroSprDic=new te,this.matchHeroSprs=[];let e=ne.instance.matchDto.members.length;for(var t=0;t<e;t++){var i=ne.instance.matchDto.members[t];let r=this.roleAniPrefab.create();r.dataSource=i,A.instance.playerDto.pid==i.id&&(this.myPlayer=i,this.setCurrentHero(r)),this.matchHeroDic.set(i.id,i),this.box_players.addChild(r),this.matchHeroSprs.push(r),this.matchHeroSprDic.set(i.id,r)}}updatePlayers(){this.matchHeroSprs=[];let e=ne.instance.matchDto.members.length;for(var t=0;t<e;t++){var i=ne.instance.matchDto.members[t];let r=this.matchHeroSprDic.get(i.id);r.dataSource=i,A.instance.playerDto.pid==i.id&&(this.myPlayer=i,this.setCurrentHero(r)),this.matchHeroDic.set(i.id,i),this.matchHeroSprs.push(r)}}addPlayer(e){if(e.type==1){if(this.matchHeroSprs){if(A.instance.playerDto.pid==e.member.id){console.log("自己不处理 :"+e.member.id);return}let t=this.getRoleById(e.member.id);if(t)t.dataSource=e.member,t.alpha=1;else{let i=this.roleAniPrefab.create();i.dataSource=e.member,this.box_players.addChild(i),this.matchHeroSprs.push(i)}}}else this.removeRoleById(e.member.id)}onSendMove(e,t,i,r,n,o,s){if(A.instance.playerDto.pid==t){let l=new iu;l.time=e,l.speed=i,l.dire=r,l.x=n,l.y=o,l.area=s,Ke.instance.sendData(l)}}onSendTargetMove(e,t,i,r,n,o=0){if(A.instance.playerDto.pid==t){let s=new au;s.time=e,s.targetId=i,s.targetX=r,s.targetY=n,s.skillId=o,s.sourceId=t,Ke.instance.sendData(s)}}onSendAnimation(e,t,i=-1,r=-1,n=-1){let o=new Jc;o.skillId=e,o.type=t,o.targetId=i,o.param.set("newX",`${r}`),o.param.set("newY",`${n}`),Ke.instance.sendData(o)}onRevAnimationPush(e){var t=qt.instance.getRoleById(e.attId);e.attId!=A.instance.playerDto.pid&&t.attack(e.skillId,!1,e.param)}onSendAttack(e,t,i){let r=new eu;r.targetId=e,r.attackType=t,r.skillId=i,Ke.instance.sendData(r)}onRevMovePush(e){if(e.pid!=A.instance.playerDto.pid){var t=qt.instance.getRoleById(e.pid);t?t.onPushMoveData(e.time,e.speed,e.dire,e.x,e.y,e.area):console.log(e.pid+" sprite is null")}}onRevTargetMovePush(e){if(e.sourceId!=A.instance.playerDto.pid){var t=qt.instance.getRoleById(e.targetId);t?t.onPushTargetMoveData(e.time,e.targetX,e.targetY):console.log(e.targetId+" sprite is null")}}onRevAttackPush(e){var t=qt.instance.getRoleById(e.attPid);if(e.attPid!=A.instance.playerDto.pid){var i=ie.intance.m_dicSkills.get(e.skill);i.type!=5&&t.attack(e.skill,!1)}var r=qt.instance.getRoleById(e.defPid);r.takeDamage(e,t);var n=this.matchHeroDic.get(e.attPid),o=this.matchHeroDic.get(e.defPid);if(n.score=e.attScore,o.score=e.defScore,e.defHp<=0){var n=this.matchHeroDic.get(e.attPid);n.kill++}w.intance.event(E.UPDATE_KILL_NUM)}sendRestoreData(){let e=new tu;Ke.instance.sendData(e)}onRevRestorePush(e){ne.instance.matchDto=e,w.intance.event(E.EVENT_RESTORE_DATA)}getRoleById(e){let t;return this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==e){t=i;return}}),t}removeRoleById(e){var t;this.matchHeroSprs&&this.matchHeroSprs.forEach(i=>{if(i.roomPlayerDto.id==e){t=i,i.speed=0,i.alpha=.3;return}})}getValidList(){return this.validEnemyList}playMusic(){He.instance.playMusicByURL("mp3/battle.mp3")}playSound(e){var t="";e==1?t="resources/music/pugong":e==2?t="resources/music/enemyHit":e==3&&(t="resources/music/dazhao"),He.instance.playSound(t+".wav",1)}setCurrentHero(e){e.isMe=!0;var t=this.myHeroSpr==null;this.myHeroSpr=e,qt.instance.moveGameWindow(!0),this.myHeroSpr.initBirth(t)}getAttackTarget(e){console.log("getAttackTarget");var t=e.distance,i=e.targetsType;if(i==2){let r,n=1e4;return this.matchHeroSprs&&this.matchHeroSprs.forEach(o=>{if(!o._isDead&&!o.isMe){var s=this.isEnemyInRange(o,t);s<=t&&s<n&&this.canAttack(this.myHeroSpr,o)&&(r=o,n=s)}}),r}return null}isEnemyInRange(e,t){return Math.sqrt(Math.pow(e.x-this.myHeroSpr.x,2)+Math.pow(e.y-this.myHeroSpr.y,2))}canAttack(e,t){let i=new Laya.Vector2;i.x=t.x-e.x,i.y=t.y-e.y;let r=new Laya.Vector2(1,0);switch(e.roleDirection){case 1:r=new Laya.Vector2(0,-1);break;case 2:r=new Laya.Vector2(1,-1);break;case 3:r=new Laya.Vector2(1,0);break;case 4:r=new Laya.Vector2(1,1);break;case 5:r=new Laya.Vector2(0,1);break;case 6:r=new Laya.Vector2(-1,1);break;case 7:r=new Laya.Vector2(-1,0);break;case 8:r=new Laya.Vector2(-1,-1);break}let n=Math.atan2(i.y,i.x)-Math.atan2(r.y,r.x);n<0&&(n+=2*Math.PI),n=n*180/Math.PI,console.log("angle 2: "+n);let o=45;return n<o||n>360-o}canTui(e,t){let i=new Laya.Vector2;i.x=t.x-e.x,i.y=t.y-e.y;let r=new Laya.Vector2(1,0);switch(e.roleDirection){case 1:r=new Laya.Vector2(0,-1);break;case 2:r=new Laya.Vector2(1,-1);break;case 3:r=new Laya.Vector2(1,0);break;case 4:r=new Laya.Vector2(1,1);break;case 5:r=new Laya.Vector2(0,1);break;case 6:r=new Laya.Vector2(-1,1);break;case 7:r=new Laya.Vector2(-1,0);break;case 8:r=new Laya.Vector2(-1,-1);break}let n=Math.atan2(i.y,i.x)-Math.atan2(r.y,r.x);n<0&&(n+=2*Math.PI),n=n*180/Math.PI,console.log("angle 2: "+n);let o=45;return n<o||n>360-o}setMyHeroDirection(e){this.myHeroSpr&&(e!=-4?(this.myHeroSpr.myRoleDirection=e,this.myHeroSpr.speed=this.myHeroSpr.moveSpeed,this.myHeroSpr.inControl=!0,this.isControl=!0,console.log("this.myHeroSpr.inControl: "+this.myHeroSpr.inControl)):(this.myHeroSpr.speed=0,this.myHeroSpr.inControl=!1,this.isControl=!1,console.log("this.myHeroSpr.inControl: "+this.myHeroSpr.inControl)))}moveGameWindow(e=!1){if(this.myHeroSpr){this.gameWindowX=this.myHeroSpr.x-Laya.stage.width/2,this.gameWindowY=this.myHeroSpr.y-Laya.stage.height/2;var t=-this.gameWindowX,i=-this.gameWindowY,r=Laya.stage.width-this.gameMap.width,n=Laya.stage.height-this.gameMap.height;t>0?t=0:t<r?t=r:t=t,i>0?i=0:i<n?i=n:i=i,e?this.gameMap.pos(t,i,!0):Laya.Tween.to(this.gameMap,{x:t,y:i},500)}}};qt._instance=null;var z=qt;var ts=class ts{constructor(){this.module=0;this.errorCode=0;this.errorMessage=""}protocolId(){return ts.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.errorCode),e.writeString(t.errorMessage),e.writeInt(t.module))}static read(e){if(!e.readBoolean())return null;let t=new ts,i=e.readInt();t.errorCode=i;let r=e.readString();t.errorMessage=r;let n=e.readInt();return t.module=n,t}};ts.PROTOCOL_ID=101;var kh=ts,is=kh;var as=class as{protocolId(){return as.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null}static read(e){return e.readBoolean()?new as:null}};as.PROTOCOL_ID=103;var Ch=as,ru=Ch;var rs=class rs{constructor(){this.time=0}protocolId(){return rs.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||e.writeLong(t.time)}static read(e){if(!e.readBoolean())return null;let t=new rs,i=e.readLong();return t.time=i,t}};rs.PROTOCOL_ID=104;var Ah=rs,Rg=Ah;var ns=class ns{constructor(){this.pid=0;this.roomId=0;this.loginToken=""}protocolId(){return ns.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeString(t.loginToken),e.writeLong(t.pid),e.writeLong(t.roomId))}static read(e){if(!e.readBoolean())return null;let t=new ns,i=e.readString();t.loginToken=i;let r=e.readLong();t.pid=r;let n=e.readLong();return t.roomId=n,t}};ns.PROTOCOL_ID=1001;var Dh=ns,nu=Dh;var os=class os{constructor(){this.errorCode=0;this.pid=0;this.matchDto=null}protocolId(){return os.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.errorCode),e.writePacket(t.matchDto,25010),e.writeLong(t.pid))}static read(e){if(!e.readBoolean())return null;let t=new os,i=e.readInt();t.errorCode=i;let r=e.readPacket(25010);t.matchDto=r;let n=e.readLong();return t.pid=n,t}};os.PROTOCOL_ID=1002;var Mh=os,ou=Mh;var ss=class ss{protocolId(){return ss.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null}static read(e){return e.readBoolean()?new ss:null}};ss.PROTOCOL_ID=1004;var Ph=ss,su=Ph;var ls=class ls{constructor(){this.sequence=0;this.param=""}protocolId(){return ls.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.sequence),e.writeString(t.param))}static read(e){if(!e.readBoolean())return null;let t=new ls;if(!e.isReadable())return t;let i=e.readInt();if(t.sequence=i,!e.isReadable())return t;let r=e.readString();return t.param=r,t}};ls.PROTOCOL_ID=1005;var Rh=ls,Bg=Rh;var cs=class cs{constructor(){this.sequence=0;this.code=0}protocolId(){return cs.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.sequence),e.writeInt(t.code))}static read(e){if(!e.readBoolean())return null;let t=new cs;if(!e.isReadable())return t;let i=e.readInt();if(t.sequence=i,!e.isReadable())return t;let r=e.readInt();return t.code=r,t}};cs.PROTOCOL_ID=1006;var Bh=cs,Og=Bh;var us=class us{constructor(){this.sequence=0;this.token=""}protocolId(){return us.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.sequence),e.writeString(t.token))}static read(e){if(!e.readBoolean())return null;let t=new us;if(!e.isReadable())return t;let i=e.readInt();if(t.sequence=i,!e.isReadable())return t;let r=e.readString();return t.token=r,t}};us.PROTOCOL_ID=1007;var Oh=us,Ng=Oh;var ps=class ps{constructor(){this.sequence=0;this.errorCode=0}protocolId(){return ps.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.sequence),e.writeInt(t.errorCode))}static read(e){if(!e.readBoolean())return null;let t=new ps;if(!e.isReadable())return t;let i=e.readInt();if(t.sequence=i,!e.isReadable())return t;let r=e.readInt();return t.errorCode=r,t}};ps.PROTOCOL_ID=1008;var Nh=ps,Hg=Nh;var ms=class ms{protocolId(){return ms.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null}static read(e){return e.readBoolean()?new ms:null}};ms.PROTOCOL_ID=1010;var Hh=ms,Ug=Hh;var ds=class ds{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return ds.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.type),e.writeInt(t.id),e.writeLong(t.count))}static read(e){if(!e.readBoolean())return null;let t=new ds;if(!e.isReadable())return t;let i=e.readInt();if(t.type=i,!e.isReadable())return t;let r=e.readInt();if(t.id=r,!e.isReadable())return t;let n=e.readLong();return t.count=n,t}};ds.PROTOCOL_ID=1012;var Uh=ds,Vg=Uh;var hs=class hs{constructor(){this.x=0;this.y=0;this.speed=0;this.dire=0;this.errorCode=0;this.time=0}protocolId(){return hs.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.dire),e.writeInt(t.errorCode),e.writeInt(t.speed),e.writeLong(t.time),e.writeInt(t.x),e.writeInt(t.y))}static read(e){if(!e.readBoolean())return null;let t=new hs,i=e.readInt();t.dire=i;let r=e.readInt();t.errorCode=r;let n=e.readInt();t.speed=n;let o=e.readLong();t.time=o;let s=e.readInt();t.x=s;let l=e.readInt();return t.y=l,t}};hs.PROTOCOL_ID=1014;var Vh=hs,zg=Vh;var fs=class fs{constructor(){this.type=0;this.member=null}protocolId(){return fs.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writePacket(t.member,25011),e.writeInt(t.type))}static read(e){if(!e.readBoolean())return null;let t=new fs,i=e.readPacket(25011);t.member=i;let r=e.readInt();return t.type=r,t}};fs.PROTOCOL_ID=1016;var zh=fs,lu=zh;var bs=class bs{constructor(){this.pid=0;this.x=0;this.y=0;this.speed=0;this.dire=0;this.time=0;this.area=0}protocolId(){return bs.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.area),e.writeInt(t.dire),e.writeLong(t.pid),e.writeInt(t.speed),e.writeLong(t.time),e.writeInt(t.x),e.writeInt(t.y))}static read(e){if(!e.readBoolean())return null;let t=new bs,i=e.readInt();t.area=i;let r=e.readInt();t.dire=r;let n=e.readLong();t.pid=n;let o=e.readInt();t.speed=o;let s=e.readLong();t.time=s;let l=e.readInt();t.x=l;let c=e.readInt();return t.y=c,t}};bs.PROTOCOL_ID=1018;var Fh=bs,cu=Fh;var ys=class ys{constructor(){this.roomId=0;this.rankList=[];this.reward=[]}protocolId(){return ys.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writePacketList(t.rankList,25012),e.writePacketList(t.reward,25008),e.writeLong(t.roomId))}static read(e){if(!e.readBoolean())return null;let t=new ys,i=e.readPacketList(25012);t.rankList=i;let r=e.readPacketList(25008);t.reward=r;let n=e.readLong();return t.roomId=n,t}};ys.PROTOCOL_ID=1020;var Gh=ys,uu=Gh;var gs=class gs{constructor(){this.errorCode=0}protocolId(){return gs.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||e.writeInt(t.errorCode)}static read(e){if(!e.readBoolean())return null;let t=new gs,i=e.readInt();return t.errorCode=i,t}};gs.PROTOCOL_ID=1022;var jh=gs,Fg=jh;var vs=class vs{constructor(){this.attPid=0;this.defPid=0;this.attackValue=[];this.allAtkValue=0;this.bj=!1;this.sb=!1;this.skill=0;this.defHp=0;this.attScore=0;this.defScore=0}protocolId(){return vs.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeLong(t.allAtkValue),e.writeLong(t.attPid),e.writeLong(t.attScore),e.writeLongList(t.attackValue),e.writeBoolean(t.bj),e.writeLong(t.defHp),e.writeLong(t.defPid),e.writeLong(t.defScore),e.writeBoolean(t.sb),e.writeInt(t.skill))}static read(e){if(!e.readBoolean())return null;let t=new vs,i=e.readLong();t.allAtkValue=i;let r=e.readLong();t.attPid=r;let n=e.readLong();t.attScore=n;let o=e.readLongList();t.attackValue=o;let s=e.readBoolean();t.bj=s;let l=e.readLong();t.defHp=l;let c=e.readLong();t.defPid=c;let u=e.readLong();t.defScore=u;let p=e.readBoolean();t.sb=p;let y=e.readInt();return t.skill=y,t}};vs.PROTOCOL_ID=1024;var qh=vs,pu=qh;var ws=class ws{constructor(){this.errorCode=0;this.matchDto=null}protocolId(){return ws.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.errorCode),e.writePacket(t.matchDto,25010))}static read(e){if(!e.readBoolean())return null;let t=new ws,i=e.readInt();t.errorCode=i;let r=e.readPacket(25010);return t.matchDto=r,t}};ws.PROTOCOL_ID=1026;var Wh=ws,mu=Wh;var Ls=class Ls{constructor(){this.pid=0}protocolId(){return Ls.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||e.writeLong(t.pid)}static read(e){if(!e.readBoolean())return null;let t=new Ls,i=e.readLong();return t.pid=i,t}};Ls.PROTOCOL_ID=1028;var Kh=Ls,du=Kh;var _s=class _s{constructor(){this.pid=0;this.kill=0}protocolId(){return _s.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.kill),e.writeLong(t.pid))}static read(e){if(!e.readBoolean())return null;let t=new _s,i=e.readInt();t.kill=i;let r=e.readLong();return t.pid=r,t}};_s.PROTOCOL_ID=1030;var Yh=_s,hu=Yh;var xs=class xs{constructor(){this.errorCode=0}protocolId(){return xs.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||e.writeInt(t.errorCode)}static read(e){if(!e.readBoolean())return null;let t=new xs,i=e.readInt();return t.errorCode=i,t}};xs.PROTOCOL_ID=1032;var $h=xs,Gg=$h;var Is=class Is{constructor(){this.attId=0;this.defId=0;this.type=0;this.skillId=0;this.param=new Map}protocolId(){return Is.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeLong(t.attId),e.writeLong(t.defId),e.writeStringStringMap(t.param),e.writeInt(t.skillId),e.writeInt(t.type))}static read(e){if(!e.readBoolean())return null;let t=new Is,i=e.readLong();t.attId=i;let r=e.readLong();t.defId=r;let n=e.readStringStringMap();t.param=n;let o=e.readInt();t.skillId=o;let s=e.readInt();return t.type=s,t}};Is.PROTOCOL_ID=1034;var Xh=Is,fu=Xh;var Es=class Es{constructor(){this.errorCode=0;this.time=0}protocolId(){return Es.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.errorCode),e.writeLong(t.time))}static read(e){if(!e.readBoolean())return null;let t=new Es,i=e.readInt();t.errorCode=i;let r=e.readLong();return t.time=r,t}};Es.PROTOCOL_ID=1036;var Zh=Es,jg=Zh;var Ss=class Ss{constructor(){this.targetId=0;this.targetX=0;this.targetY=0;this.sourceId=0;this.skillId=0;this.time=0}protocolId(){return Ss.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.skillId),e.writeLong(t.sourceId),e.writeLong(t.targetId),e.writeInt(t.targetX),e.writeInt(t.targetY),e.writeLong(t.time))}static read(e){if(!e.readBoolean())return null;let t=new Ss,i=e.readInt();t.skillId=i;let r=e.readLong();t.sourceId=r;let n=e.readLong();t.targetId=n;let o=e.readInt();t.targetX=o;let s=e.readInt();t.targetY=s;let l=e.readLong();return t.time=l,t}};Ss.PROTOCOL_ID=1038;var Qh=Ss,bu=Qh;var Ts=class Ts{constructor(){this.time=0}protocolId(){return Ts.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||e.writeLong(t.time)}static read(e){if(!e.readBoolean())return null;let t=new Ts,i=e.readLong();return t.time=i,t}};Ts.PROTOCOL_ID=1040;var Jh=Ts,yu=Jh;var ks=class ks{constructor(){this.moveList=[]}protocolId(){return ks.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||e.writePacketList(t.moveList,1018)}static read(e){if(!e.readBoolean())return null;let t=new ks,i=e.readPacketList(1018);return t.moveList=i,t}};ks.PROTOCOL_ID=1042;var ef=ks,gu=ef;var Cs=class Cs{constructor(){this.id=0;this.value=!1}protocolId(){return Cs.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.id),e.writeBoolean(t.value))}static read(e){if(!e.readBoolean())return null;let t=new Cs,i=e.readInt();t.id=i;let r=e.readBoolean();return t.value=r,t}};Cs.PROTOCOL_ID=25007;var tf=Cs,qg=tf;var As=class As{constructor(){this.type=0;this.id=0;this.count=0}protocolId(){return As.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeDouble(t.count),e.writeLong(t.id),e.writeInt(t.type))}static read(e){if(!e.readBoolean())return null;let t=new As,i=e.readDouble();t.count=i;let r=e.readLong();t.id=r;let n=e.readInt();return t.type=n,t}};As.PROTOCOL_ID=25008;var af=As,Wg=af;var Ds=class Ds{constructor(){this.id=0;this.map=0;this.maxX=0;this.maxY=0;this.players=[]}protocolId(){return Ds.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeLong(t.id),e.writeInt(t.map),e.writeInt(t.maxX),e.writeInt(t.maxY),e.writePacketList(t.players,25011))}static read(e){if(!e.readBoolean())return null;let t=new Ds,i=e.readLong();t.id=i;let r=e.readInt();t.map=r;let n=e.readInt();t.maxX=n;let o=e.readInt();t.maxY=o;let s=e.readPacketList(25011);return t.players=s,t}};Ds.PROTOCOL_ID=25009;var rf=Ds,Kg=rf;var Ms=class Ms{constructor(){this.arenaId=0;this.coinType=0;this.roomId=0;this.members=[];this.remainderCd=0;this.startTime=0;this.nowTime=0}protocolId(){return Ms.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.arenaId),e.writeInt(t.coinType),e.writePacketList(t.members,25011),e.writeLong(t.nowTime),e.writeLong(t.remainderCd),e.writeLong(t.roomId),e.writeLong(t.startTime))}static read(e){if(!e.readBoolean())return null;let t=new Ms,i=e.readInt();t.arenaId=i;let r=e.readInt();t.coinType=r;let n=e.readPacketList(25011);t.members=n;let o=e.readLong();t.nowTime=o;let s=e.readLong();t.remainderCd=s;let l=e.readLong();t.roomId=l;let c=e.readLong();return t.startTime=c,t}};Ms.PROTOCOL_ID=25010;var nf=Ms,Yg=nf;var Ps=class Ps{constructor(){this.id=0;this.x=0;this.y=0;this.dire=0;this.speed=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.kill=0;this.hp=0;this.maxHp=0;this.atk=0;this.score=0;this.skillCd=new Map;this.commonCd=0;this.area=0}protocolId(){return Ps.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeInt(t.area),e.writeLong(t.atk),e.writeLong(t.commonCd),e.writeInt(t.dire),e.writeInt(t.heroColor),e.writeLong(t.heroId),e.writeLong(t.hp),e.writeString(t.icon),e.writeLong(t.id),e.writeInt(t.kill),e.writeInt(t.leader),e.writeLong(t.maxHp),e.writeString(t.name),e.writeLong(t.score),e.writeIntLongMap(t.skillCd),e.writeInt(t.speed),e.writeInt(t.x),e.writeInt(t.y))}static read(e){if(!e.readBoolean())return null;let t=new Ps,i=e.readInt();t.area=i;let r=e.readLong();t.atk=r;let n=e.readLong();t.commonCd=n;let o=e.readInt();t.dire=o;let s=e.readInt();t.heroColor=s;let l=e.readLong();t.heroId=l;let c=e.readLong();t.hp=c;let u=e.readString();t.icon=u;let p=e.readLong();t.id=p;let y=e.readInt();t.kill=y;let _=e.readInt();t.leader=_;let g=e.readLong();t.maxHp=g;let f=e.readString();t.name=f;let T=e.readLong();t.score=T;let C=e.readIntLongMap();t.skillCd=C;let O=e.readInt();t.speed=O;let N=e.readInt();t.x=N;let Q=e.readInt();return t.y=Q,t}};Ps.PROTOCOL_ID=25011;var of=Ps,$g=of;var Rs=class Rs{constructor(){this.id=0;this.heroId=0;this.heroColor=0;this.name="";this.icon="";this.leader=0;this.rankNum=0;this.kill=0;this.atk=0;this.score=0;this.die=!1}protocolId(){return Rs.PROTOCOL_ID}static write(e,t){e.writePacketFlag(t)||t==null||(e.writeLong(t.atk),e.writeBoolean(t.die),e.writeInt(t.heroColor),e.writeLong(t.heroId),e.writeString(t.icon),e.writeLong(t.id),e.writeInt(t.kill),e.writeInt(t.leader),e.writeString(t.name),e.writeInt(t.rankNum),e.writeLong(t.score))}static read(e){if(!e.readBoolean())return null;let t=new Rs,i=e.readLong();t.atk=i;let r=e.readBoolean();t.die=r;let n=e.readInt();t.heroColor=n;let o=e.readLong();t.heroId=o;let s=e.readString();t.icon=s;let l=e.readLong();t.id=l;let c=e.readInt();t.kill=c;let u=e.readInt();t.leader=u;let p=e.readString();t.name=p;let y=e.readInt();t.rankNum=y;let _=e.readLong();return t.score=_,t}};Rs.PROTOCOL_ID=25012;var sf=Rs,Xg=sf;var Ie=new Map;Ie.set(101,is);Ie.set(103,ru);Ie.set(104,Rg);Ie.set(1001,nu);Ie.set(1002,ou);Ie.set(1004,su);Ie.set(1005,Bg);Ie.set(1006,Og);Ie.set(1007,Ng);Ie.set(1008,Hg);Ie.set(1010,Ug);Ie.set(1012,Vg);Ie.set(1013,iu);Ie.set(1014,zg);Ie.set(1016,lu);Ie.set(1018,cu);Ie.set(1020,uu);Ie.set(1021,eu);Ie.set(1022,Fg);Ie.set(1024,pu);Ie.set(1025,tu);Ie.set(1026,mu);Ie.set(1028,du);Ie.set(1030,hu);Ie.set(1031,Jc);Ie.set(1032,Gg);Ie.set(1034,fu);Ie.set(1035,au);Ie.set(1036,jg);Ie.set(1038,bu);Ie.set(1040,yu);Ie.set(1042,gu);Ie.set(25007,qg);Ie.set(25008,Wg);Ie.set(25009,Kg);Ie.set(25010,Yg);Ie.set(25011,$g);Ie.set(25012,Xg);var lf=class a{static getProtocol(e){let t=Ie.get(e);if(t===null)throw"[protocolId:"+e+"]协议不存在";return t}static write(e,t){let i=t.protocolId();e.writeInt(i),a.getProtocol(i).write(e,t)}static read(e){let t=e.readInt();return a.getProtocol(t).read(e)}},Ot=lf;var Zg={},Qg={},hi;try{hi=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}var D=class D{constructor(e,t,i=!1){this.low=e|0,this.high=t|0,this.unsigned=i}toInt(){return this.unsigned?this.low>>>0:this.low}toNumber(){return this.unsigned?(this.high>>>0)*jn+(this.low>>>0):this.high*jn+(this.low>>>0)}toString(e=10){if(e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.equals(D.MIN_VALUE)){let n=D.fromNumber(e),o=this.divide(n),s=o.multiply(n).subtract(this);return o.toString(e)+s.toInt().toString(e)}else return"-"+this.negate().toString(e);let t=D.fromNumber(Math.pow(e,6),this.unsigned),i="",r=this;for(;;){let n=r.divide(t),s=(r.subtract(n.multiply(t)).toInt()>>>0).toString(e);if(r=n,r.isZero())return s+i;for(;s.length<6;)s="0"+s;i=""+s+i}}getHighBits(){return this.high}getHighBitsUnsigned(){return this.high>>>0}getLowBits(){return this.low}getLowBitsUnsigned(){return this.low>>>0}getNumBitsAbs(){if(this.isNegative())return this.equals(D.MIN_VALUE)?64:this.negate().getNumBitsAbs();let e=this.high!=0?this.high:this.low,t;for(t=31;t>0&&!(e&1<<t);t--);return this.high!=0?t+33:t+1}isZero(){return this.high===0&&this.low===0}isNegative(){return!this.unsigned&&this.high<0}isPositive(){return this.unsigned||this.high>=0}isOdd(){return(this.low&1)===1}isEven(){return(this.low&1)===0}equals(e){return e instanceof D||(e=D.fromValue(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low}notEquals(e){return!this.equals(e)}lessThan(e){return this.compare(e)<0}lessThanOrEqual(e){return this.compare(e)<=0}greaterThan(e){return this.compare(e)>0}greaterThanOrEqual(e){return this.compare(e)>=0}compare(e){if(e instanceof D||(e=D.fromValue(e)),this.equals(e))return 0;let t=this.isNegative(),i=e.isNegative();return t&&!i?-1:!t&&i?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.subtract(e).isNegative()?-1:1}negate(){return!this.unsigned&&this.equals(D.MIN_VALUE)?D.MIN_VALUE:this.not().add(D.ONE)}add(e){e instanceof D||(e=D.fromValue(e));let t=this.high>>>16,i=this.high&65535,r=this.low>>>16,n=this.low&65535,o=e.high>>>16,s=e.high&65535,l=e.low>>>16,c=e.low&65535,u=0,p=0,y=0,_=0;return _+=n+c,y+=_>>>16,_&=65535,y+=r+l,p+=y>>>16,y&=65535,p+=i+s,u+=p>>>16,p&=65535,u+=t+o,u&=65535,D.fromBits(y<<16|_,u<<16|p,this.unsigned)}subtract(e){return e instanceof D||(e=D.fromValue(e)),this.add(e.negate())}multiply(e){if(this.isZero())return D.ZERO;if(e instanceof D||(e=D.fromValue(e)),hi){let g=hi.mul(this.low,this.high,e.low,e.high);return D.fromBits(g,hi.get_high(),this.unsigned)}if(e.isZero())return D.ZERO;if(this.equals(D.MIN_VALUE))return e.isOdd()?D.MIN_VALUE:D.ZERO;if(e.equals(D.MIN_VALUE))return this.isOdd()?D.MIN_VALUE:D.ZERO;if(this.isNegative())return e.isNegative()?this.negate().multiply(e.negate()):this.negate().multiply(e).negate();if(e.isNegative())return this.multiply(e.negate()).negate();if(this.lessThan(tv)&&e.lessThan(tv))return D.fromNumber(this.toNumber()*e.toNumber(),this.unsigned);let t=this.high>>>16,i=this.high&65535,r=this.low>>>16,n=this.low&65535,o=e.high>>>16,s=e.high&65535,l=e.low>>>16,c=e.low&65535,u=0,p=0,y=0,_=0;return _+=n*c,y+=_>>>16,_&=65535,y+=r*c,p+=y>>>16,y&=65535,y+=n*l,p+=y>>>16,y&=65535,p+=i*c,u+=p>>>16,p&=65535,p+=r*l,u+=p>>>16,p&=65535,p+=n*s,u+=p>>>16,p&=65535,u+=t*c+i*l+r*s+n*o,u&=65535,D.fromBits(y<<16|_,u<<16|p,this.unsigned)}divide(e){if(e instanceof D||(e=D.fromValue(e)),e.isZero())throw Error("division by zero");if(hi){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;let n=(this.unsigned?hi.div_u:hi.div_s)(this.low,this.high,e.low,e.high);return D.fromBits(n,hi.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?D.UZERO:D.ZERO;let t,i,r;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.greaterThan(this))return D.UZERO;if(e.greaterThan(this.shiftRightUnsigned(1)))return D.UONE;r=D.UZERO}else{if(this.equals(D.MIN_VALUE))return e.equals(D.ONE)||e.equals(D.NEG_ONE)?D.MIN_VALUE:e.equals(D.MIN_VALUE)?D.ONE:(t=this.shiftRight(1).divide(e).shiftLeft(1),t.equals(D.ZERO)?e.isNegative()?D.ONE:D.NEG_ONE:(i=this.subtract(e.multiply(t)),r=t.add(i.divide(e)),r));if(e.equals(D.MIN_VALUE))return this.unsigned?D.UZERO:D.ZERO;if(this.isNegative())return e.isNegative()?this.negate().divide(e.negate()):this.negate().divide(e).negate();if(e.isNegative())return this.divide(e.negate()).negate();r=D.ZERO}for(i=this;i.greaterThanOrEqual(e);){t=Math.max(1,Math.floor(i.toNumber()/e.toNumber()));let n=Math.ceil(Math.log(t)/Math.LN2),o=n<=48?1:Math.pow(2,n-48),s=D.fromNumber(t),l=s.multiply(e);for(;l.isNegative()||l.greaterThan(i);)t-=o,s=D.fromNumber(t,this.unsigned),l=s.multiply(e);s.isZero()&&(s=D.ONE),r=r.add(s),i=i.subtract(l)}return r}modulo(e){if(e instanceof D||(e=D.fromValue(e)),hi){let t=(this.unsigned?hi.rem_u:hi.rem_s)(this.low,this.high,e.low,e.high);return D.fromBits(t,hi.get_high(),this.unsigned)}return this.subtract(this.divide(e).multiply(e))}not(){return D.fromBits(~this.low,~this.high,this.unsigned)}and(e){return e instanceof D||(e=D.fromValue(e)),D.fromBits(this.low&e.low,this.high&e.high,this.unsigned)}or(e){return e instanceof D||(e=D.fromValue(e)),D.fromBits(this.low|e.low,this.high|e.high,this.unsigned)}xor(e){return e instanceof D||(e=D.fromValue(e)),D.fromBits(this.low^e.low,this.high^e.high,this.unsigned)}shiftLeft(e){if(e instanceof D&&(e=e.toInt()),(e&=63)===0)return this;if(e<32){let t=this.low<<e;return D.fromBits(t,this.high<<e|this.low>>>32-e,this.unsigned)}else return D.fromBits(0,this.low<<e-32,this.unsigned)}shiftRight(e){return e instanceof D&&(e=e.toInt()),(e&=63)===0?this:e<32?D.fromBits(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):D.fromBits(this.high>>e-32,this.high>=0?0:-1,this.unsigned)}shiftRightUnsigned(e){return e instanceof D&&(e=e.toInt()),(e&=63)===0?this:e<32?D.fromBits(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):e===32?D.fromBits(this.high,0,this.unsigned):D.fromBits(this.high>>>e-32,0,this.unsigned)}rotateLeft(e){let t;return e instanceof D&&(e=e.toInt()),(e&=63)===0?this:e===32?D.fromBits(this.high,this.low,this.unsigned):e<32?(t=32-e,D.fromBits(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned)):(e-=32,t=32-e,D.fromBits(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned))}rotateRight(e){let t;return e instanceof D&&(e=e.toInt()),(e&=63)===0?this:e===32?D.fromBits(this.high,this.low,this.unsigned):e<32?(t=32-e,D.fromBits(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned)):(e-=32,t=32-e,D.fromBits(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned))}toSigned(){return this.unsigned?D.fromBits(this.low,this.high,!1):this}toUnsigned(){return this.unsigned?this:D.fromBits(this.low,this.high,!0)}toBytes(e){return e?this.toBytesLE():this.toBytesBE()}toBytesLE(){let e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]}toBytesBE(){let e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]}static fromBytes(e,t,i){return i?D.fromBytesLE(e,t):D.fromBytesBE(e,t)}static fromBytesLE(e,t){return new D(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)}static fromBytesBE(e,t){return new D(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}static fromInt(e,t){let i;if(t){if(e>>>=0,i=0<=e&&e<256){let n=Qg[e];if(n)return n}let r=D.fromBits(e,(e|0)<0?-1:0,!0);return i&&(Qg[e]=r),r}else{if(e|=0,i=-128<=e&&e<128){let n=Zg[e];if(n)return n}let r=D.fromBits(e,e<0?-1:0,!1);return i&&(Zg[e]=r),r}}static fromNumber(e,t){if(isNaN(e))return t?D.UZERO:D.ZERO;if(t){if(e<0)return D.UZERO;if(e>=iv)return D.MAX_UNSIGNED_VALUE}else{if(e<=-ev)return D.MIN_VALUE;if(e+1>=ev)return D.MAX_VALUE}return e<0?D.fromNumber(-e,t).negate():D.fromBits(e%jn|0,e/jn|0,t)}static fromBits(e,t,i){return new D(e,t,i)}static fromString(e,t,i){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return D.ZERO;if(typeof t=="number"?(i=t,t=!1):t=!!t,i=i||10,i<2||36<i)throw RangeError("radix");let r;if((r=e.indexOf("-"))>0)throw Error("interior hyphen");if(r===0)return D.fromString(e.substring(1),t,i).negate();let n=D.fromNumber(Math.pow(i,8)),o=D.ZERO;for(let s=0;s<e.length;s+=8){let l=Math.min(8,e.length-s),c=parseInt(e.substring(s,s+l),i);if(l<8){let u=D.fromNumber(Math.pow(i,l));o=o.multiply(u).add(D.fromNumber(c))}else o=o.multiply(n),o=o.add(D.fromNumber(c))}return o.unsigned=t,o}static fromValue(e,t){return typeof e=="number"?D.fromNumber(e,t):typeof e=="string"?D.fromString(e,t):D.fromBits(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}};D.ZERO=D.fromInt(0),D.UZERO=D.fromInt(0,!0),D.ONE=D.fromInt(1),D.UONE=D.fromInt(1,!0),D.NEG_ONE=D.fromInt(-1),D.MAX_VALUE=D.fromBits(-1,2147483647,!1),D.MAX_UNSIGNED_VALUE=D.fromBits(-1,-1,!0),D.MIN_VALUE=D.fromBits(0,-2147483648,!1);var qn=D,Jg=65536,Bw=1<<24,jn=Jg*Jg,iv=jn*jn,ev=iv/2,tv=qn.fromInt(Bw);var Bs=class a{constructor(e,t){this.lo=e>>>0,this.hi=t>>>0}zzEncode(){let e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this}zzDecode(){let e=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this}toLong(e){return new qn(this.lo|0,this.hi|0,!!e)}static from(e){return typeof e=="number"?a.fromNumber(e):((typeof e=="string"||e instanceof String)&&(e=qn.fromString(e)),e.low||e.high?new a(e.low>>>0,e.high>>>0):av)}static fromNumber(e){if(e===0)return av;let t=e<0;t&&(e=-e);let i=e>>>0,r=(e-i)/4294967296>>>0;return t&&(r=~r>>>0,i=~i>>>0,++i>4294967295&&(i=0,++r>4294967295&&(r=0))),new a(i,r)}},av=new Bs(0,0);function Ow(a,e){let t=0;for(;e.hi;)a.writeByte(e.lo&127|128),e.lo=(e.lo>>>7|e.hi<<25)>>>0,e.hi>>>=7,t=t+7;for(;e.lo>127;){if(t>=56){a.writeByte(e.lo);return}a.writeByte(e.lo&127|128),e.lo=e.lo>>>7,t=t+7}a.writeByte(e.lo)}function Nw(a){let e=new Bs(0,0),t=0,i=a.length,r=0;if(i-r>4){for(;t<4;++t)if(e.lo=(e.lo|(a[r]&127)<<t*7)>>>0,a[r++]<128)return e;if(e.lo=(e.lo|(a[r]&127)<<28)>>>0,e.hi=(e.hi|(a[r]&127)>>4)>>>0,a[r++]<128)return e;t=0}else{for(;t<3;++t)if(e.lo=(e.lo|(a[r]&127)<<t*7)>>>0,a[r++]<128)return e;return e.lo=(e.lo|(a[r++]&127)<<t*7)>>>0,e}for(;t<4;++t){if(r===8)return e.hi=(e.hi|a[r]<<t*7+3)>>>0,e;if(e.hi=(e.hi|(a[r]&127)<<t*7+3)>>>0,a[r++]<128)return e}return e}function rv(a,e){let t=Bs.from(e).zzEncode();Ow(a,t)}function nv(a){return Nw(a).zzDecode().toLong(!1)}var ov="",Hw=128,Uw=655537,Vw=32767,zw=-32768,sv=2147483647,lv=-2147483648,Fw=new TextEncoder,Gw=new TextDecoder;function jw(a,e){if(a.byteLength>e)throw new Error("newLength is too small");let t=new ArrayBuffer(e);return new Uint8Array(t).set(new Uint8Array(a)),t}function qw(a){return a<<1^a>>31}function Ww(a){return a>>>1^-(a&1)}var cf=class{constructor(){this.writeOffset=0,this.readOffset=0,this.buffer=new ArrayBuffer(Hw),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}setWriteOffset(e){if(e>this.buffer.byteLength)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.writeOffset=e}setReadOffset(e){if(e>this.writeOffset)throw new Error("index out of bounds exception:readerIndex:"+this.readOffset+", writerIndex:"+this.writeOffset+"(expected:0 <= readerIndex <= writerIndex <= capacity:"+this.buffer.byteLength);this.readOffset=e}getCapacity(){return this.buffer.byteLength-this.writeOffset}ensureCapacity(e){for(;e-this.getCapacity()>0;){let t=this.buffer.byteLength*2;if(t>Uw)throw new Error("out of memory error");this.buffer=jw(this.buffer,t),this.bufferView=new DataView(this.buffer,0,this.buffer.byteLength)}}isReadable(){return this.writeOffset>this.readOffset}writeBytes(e){let t=e.byteLength;this.ensureCapacity(t),new Uint8Array(this.buffer).set(new Uint8Array(e),this.writeOffset),this.writeOffset+=t}toBytes(){let e=new ArrayBuffer(this.writeOffset);return new Uint8Array(e).set(new Uint8Array(this.buffer.slice(0,this.writeOffset))),e}writeBoolean(e){if(!(e===!0||e===!1))throw new Error("value must be true of false");this.ensureCapacity(1),e===!0?this.bufferView.setInt8(this.writeOffset,1):this.bufferView.setInt8(this.writeOffset,0),this.writeOffset++}readBoolean(){let e=this.bufferView.getInt8(this.readOffset);return this.readOffset++,e===1}writeByte(e){this.ensureCapacity(1),this.bufferView.setInt8(this.writeOffset,e),this.writeOffset++}readByte(){let e=this.bufferView.getInt8(this.readOffset);return this.readOffset++,e}writeShort(e){if(!(zw<=e&&e<=Vw))throw new Error("value must range between minShort:-32768 and maxShort:32767");this.ensureCapacity(2),this.bufferView.setInt16(this.writeOffset,e),this.writeOffset+=2}readShort(){let e=this.bufferView.getInt16(this.readOffset);return this.readOffset+=2,e}writeRawInt(e){if(!(lv<=e&&e<=sv))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");this.ensureCapacity(4),this.bufferView.setInt32(this.writeOffset,e),this.writeOffset+=4}readRawInt(){let e=this.bufferView.getInt32(this.readOffset);return this.readOffset+=4,e}writeInt(e){if(!(lv<=e&&e<=sv))throw new Error("value must range between minInt:-2147483648 and maxInt:2147483647");if(this.ensureCapacity(5),e=qw(e),!(e>>>7)){this.writeByte(e);return}if(!(e>>>14)){this.writeByte(e&127|128),this.writeByte(e>>>7);return}if(!(e>>>21)){this.writeByte(e&127|128),this.writeByte(e>>>7|128),this.writeByte(e>>>14);return}if(!(e>>>28)){this.writeByte(e&127|128),this.writeByte(e>>>7|128),this.writeByte(e>>>14|128),this.writeByte(e>>>21);return}this.writeByte(e&127|128),this.writeByte(e>>>7|128),this.writeByte(e>>>14|128),this.writeByte(e>>>21|128),this.writeByte(e>>>28)}readInt(){let e=this.readByte(),t=e&127;return e&128&&(e=this.readByte(),t|=(e&127)<<7,e&128&&(e=this.readByte(),t|=(e&127)<<14,e&128&&(e=this.readByte(),t|=(e&127)<<21,e&128&&(e=this.readByte(),t|=(e&127)<<28)))),Ww(t)}writeLong(e){if(e==null)throw new Error("value must not be null");this.ensureCapacity(9),rv(this,e)}readLong(){let e=new ArrayBuffer(9),t=new DataView(e,0,e.byteLength),i=0,r=this.readByte();return t.setUint8(i++,r),r&128&&(r=this.readByte(),t.setUint8(i++,r),r&128&&(r=this.readByte(),t.setUint8(i++,r),r&128&&(r=this.readByte(),t.setUint8(i++,r),r&128&&(r=this.readByte(),t.setUint8(i++,r),r&128&&(r=this.readByte(),t.setUint8(i++,r),r&128&&(r=this.readByte(),t.setUint8(i++,r),r&128&&(r=this.readByte(),t.setUint8(i++,r),r&128&&(r=this.readByte(),t.setUint8(i++,r))))))))),nv(new Uint8Array(e.slice(0,i))).toNumber()}writeFloat(e){if(e==null)throw new Error("value must not be null");this.ensureCapacity(4),this.bufferView.setFloat32(this.writeOffset,e),this.writeOffset+=4}readFloat(){let e=this.bufferView.getFloat32(this.readOffset);return this.readOffset+=4,e}writeDouble(e){if(e==null)throw new Error("value must not be null");this.ensureCapacity(8),this.bufferView.setFloat64(this.writeOffset,e),this.writeOffset+=8}readDouble(){let e=this.bufferView.getFloat64(this.readOffset);return this.readOffset+=8,e}writeChar(e){if(e==null||e.length===0){this.writeString(ov);return}this.writeString(e.charAt(0))}readChar(){return this.readString()}writeString(e){if(e==null||e.trim().length===0){this.writeInt(0);return}let t=Fw.encode(e);this.ensureCapacity(5+t.length),this.writeInt(t.length),t.forEach(i=>this.writeByte(i))}readString(){let e=this.readInt();if(e<=0)return ov;let t=new Uint8Array(this.buffer.slice(this.readOffset,this.readOffset+e)),i=Gw.decode(t);return this.readOffset+=e,i}writePacketFlag(e){let t=e==null;return this.writeBoolean(!t),t}writePacket(e,t){Ot.getProtocol(t).write(this,e)}readPacket(e){return Ot.getProtocol(e).read(this)}writeBooleanArray(e){e===null?this.writeInt(0):(this.writeInt(e.length),e.forEach(t=>{this.writeBoolean(t)}))}readBooleanArray(){let e=[],t=this.readInt();if(t>0)for(let i=0;i<t;i++)e.push(this.readBoolean());return e}writeByteArray(e){e===null?this.writeInt(0):(this.writeInt(e.length),e.forEach(t=>{this.writeByte(t)}))}readByteArray(){let e=[],t=this.readInt();if(t>0)for(let i=0;i<t;i++)e.push(this.readByte());return e}writeShortArray(e){e===null?this.writeInt(0):(this.writeInt(e.length),e.forEach(t=>{this.writeShort(t)}))}readShortArray(){let e=[],t=this.readInt();if(t>0)for(let i=0;i<t;i++)e.push(this.readShort());return e}writeIntArray(e){e===null?this.writeInt(0):(this.writeInt(e.length),e.forEach(t=>{this.writeInt(t)}))}readIntArray(){let e=[],t=this.readInt();if(t>0)for(let i=0;i<t;i++)e.push(this.readInt());return e}writeLongArray(e){e===null?this.writeInt(0):(this.writeInt(e.length),e.forEach(t=>{this.writeLong(t)}))}readLongArray(){let e=[],t=this.readInt();if(t>0)for(let i=0;i<t;i++)e.push(this.readLong());return e}writeFloatArray(e){e===null?this.writeInt(0):(this.writeInt(e.length),e.forEach(t=>{this.writeFloat(t)}))}readFloatArray(){let e=[],t=this.readInt();if(t>0)for(let i=0;i<t;i++)e.push(this.readFloat());return e}writeDoubleArray(e){e===null?this.writeInt(0):(this.writeInt(e.length),e.forEach(t=>{this.writeDouble(t)}))}readDoubleArray(){let e=[],t=this.readInt();if(t>0)for(let i=0;i<t;i++)e.push(this.readDouble());return e}writeStringArray(e){e===null?this.writeInt(0):(this.writeInt(e.length),e.forEach(t=>{this.writeString(t)}))}readStringArray(){let e=[],t=this.readInt();if(t>0)for(let i=0;i<t;i++)e.push(this.readString());return e}writeCharArray(e){e===null?this.writeInt(0):(this.writeInt(e.length),e.forEach(t=>{this.writeChar(t)}))}readCharArray(){let e=[],t=this.readInt();if(t>0)for(let i=0;i<t;i++)e.push(this.readChar());return e}writePacketArray(e,t){if(e===null)this.writeInt(0);else{let i=Ot.getProtocol(t);this.writeInt(e.length),e.forEach(r=>{i.write(this,r)})}}readPacketArray(e){let t=[],i=this.readInt();if(i>0){let r=Ot.getProtocol(e);for(let n=0;n<i;n++)t.push(r.read(this))}return t}writeBooleanList(e){this.writeBooleanArray(e)}readBooleanList(){return this.readBooleanArray()}writeByteList(e){this.writeByteArray(e)}readByteList(){return this.readByteArray()}writeShortList(e){this.writeShortArray(e)}readShortList(){return this.readShortArray()}writeIntList(e){this.writeIntArray(e)}readIntList(){return this.readIntArray()}writeLongList(e){this.writeLongArray(e)}readLongList(){return this.readLongArray()}writeFloatList(e){this.writeFloatArray(e)}readFloatList(){return this.readFloatArray()}writeDoubleList(e){this.writeDoubleArray(e)}readDoubleList(){return this.readDoubleArray()}writeStringList(e){this.writeStringArray(e)}readStringList(){return this.readStringArray()}writeCharList(e){this.writeCharArray(e)}readCharList(){return this.readCharArray()}writePacketList(e,t){this.writePacketArray(e,t)}readPacketList(e){return this.readPacketArray(e)}writeBooleanSet(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach(t=>{this.writeBoolean(t)}))}readBooleanSet(){return new Set(this.readBooleanArray())}writeByteSet(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach(t=>{this.writeByte(t)}))}readByteSet(){return new Set(this.readByteArray())}writeShortSet(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach(t=>{this.writeShort(t)}))}readShortSet(){return new Set(this.readShortArray())}writeIntSet(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach(t=>{this.writeInt(t)}))}readIntSet(){return new Set(this.readIntArray())}writeLongSet(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach(t=>{this.writeLong(t)}))}readLongSet(){return new Set(this.readLongArray())}writeFloatSet(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach(t=>{this.writeFloat(t)}))}readFloatSet(){return new Set(this.readFloatArray())}writeDoubleSet(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach(t=>{this.writeDouble(t)}))}readDoubleSet(){return new Set(this.readDoubleArray())}writeStringSet(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach(t=>{this.writeString(t)}))}readStringSet(){return new Set(this.readStringArray())}writeCharSet(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach(t=>{this.writeChar(t)}))}readCharSet(){return new Set(this.readCharArray())}writePacketSet(e,t){if(e===null)this.writeInt(0);else{let i=Ot.getProtocol(t);this.writeInt(e.size),e.forEach(r=>{i.write(this,r)})}}readPacketSet(e){return new Set(this.readPacketArray(e))}writeIntIntMap(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach((t,i)=>{this.writeInt(i),this.writeInt(t)}))}readIntIntMap(){let e=new Map,t=this.readInt();if(t>0)for(let i=0;i<t;i++){let r=this.readInt(),n=this.readInt();e.set(r,n)}return e}writeIntLongMap(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach((t,i)=>{this.writeInt(i),this.writeLong(t)}))}readIntLongMap(){let e=new Map,t=this.readInt();if(t>0)for(let i=0;i<t;i++){let r=this.readInt(),n=this.readLong();e.set(r,n)}return e}writeIntStringMap(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach((t,i)=>{this.writeInt(i),this.writeString(t)}))}readIntStringMap(){let e=new Map,t=this.readInt();if(t>0)for(let i=0;i<t;i++){let r=this.readInt(),n=this.readString();e.set(r,n)}return e}writeIntPacketMap(e,t){if(e===null)this.writeInt(0);else{let i=Ot.getProtocol(t);this.writeInt(e.size),e.forEach((r,n)=>{this.writeInt(n),i.write(this,r)})}}readIntPacketMap(e){let t=new Map,i=this.readInt();if(i>0){let r=Ot.getProtocol(e);for(let n=0;n<i;n++){let o=this.readInt(),s=r.read(this);t.set(o,s)}}return t}writeLongIntMap(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach((t,i)=>{this.writeLong(i),this.writeInt(t)}))}readLongIntMap(){let e=new Map,t=this.readInt();if(t>0)for(let i=0;i<t;i++){let r=this.readLong(),n=this.readInt();e.set(r,n)}return e}writeLongLongMap(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach((t,i)=>{this.writeLong(i),this.writeLong(t)}))}readLongLongMap(){let e=new Map,t=this.readInt();if(t>0)for(let i=0;i<t;i++){let r=this.readLong(),n=this.readLong();e.set(r,n)}return e}writeLongStringMap(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach((t,i)=>{this.writeLong(i),this.writeString(t)}))}readLongStringMap(){let e=new Map,t=this.readInt();if(t>0)for(let i=0;i<t;i++){let r=this.readLong(),n=this.readString();e.set(r,n)}return e}writeLongPacketMap(e,t){if(e===null)this.writeInt(0);else{let i=Ot.getProtocol(t);this.writeInt(e.size),e.forEach((r,n)=>{this.writeLong(n),i.write(this,r)})}}readLongPacketMap(e){let t=new Map,i=this.readInt();if(i>0){let r=Ot.getProtocol(e);for(let n=0;n<i;n++){let o=this.readLong(),s=r.read(this);t.set(o,s)}}return t}writeStringIntMap(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach((t,i)=>{this.writeString(i),this.writeInt(t)}))}readStringIntMap(){let e=new Map,t=this.readInt();if(t>0)for(let i=0;i<t;i++){let r=this.readString(),n=this.readInt();e.set(r,n)}return e}writeStringLongMap(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach((t,i)=>{this.writeString(i),this.writeLong(t)}))}readStringLongMap(){let e=new Map,t=this.readInt();if(t>0)for(let i=0;i<t;i++){let r=this.readString(),n=this.readLong();e.set(r,n)}return e}writeStringStringMap(e){e===null?this.writeInt(0):(this.writeInt(e.size),e.forEach((t,i)=>{this.writeString(i),this.writeString(t)}))}readStringStringMap(){let e=new Map,t=this.readInt();if(t>0)for(let i=0;i<t;i++){let r=this.readString(),n=this.readString();e.set(r,n)}return e}writeStringPacketMap(e,t){if(e===null)this.writeInt(0);else{let i=Ot.getProtocol(t);this.writeInt(e.size),e.forEach((r,n)=>{this.writeString(n),i.write(this,r)})}}readStringPacketMap(e){let t=new Map,i=this.readInt();if(i>0){let r=Ot.getProtocol(e);for(let n=0;n<i;n++){let o=this.readString(),s=r.read(this);t.set(o,s)}}return t}},uf=cf;var ht=class ht{constructor(){this.m_iConnectTimes=0;this.m_iMaxTimes=10;this.m_iHeartTime=6e4;this.isMatching=!1;this.m_socket=new Laya.Socket,this.m_socket.on(Laya.Event.OPEN,this,this.onSocketOpen),this.m_socket.on(Laya.Event.CLOSE,this,this.onSocketClose),this.m_socket.on(Laya.Event.MESSAGE,this,this.onMessageReveived),this.m_socket.on(Laya.Event.ERROR,this,this.onConnectError)}static get instance(){return ht._instance==null&&(ht._instance=new ht),ht._instance}initSocket(){this.isMatching=!0;var e=ne.instance.roomDto.connectAddr;ht.m_strHttpHost=e,this.reconnect()}onSocketOpen(){this.isConnect=!0,this.m_iConnectTimes=0,ni.log("websocket----websocket connected",1),this.onLogin()}onLogin(){let e=new nu;e.roomId=ne.instance.roomDto.roomId,e.loginToken=localStorage.getItem("TOX-COOKIE"+ue.instance.walletAddress),e.pid=A.instance.playerDto.pid,this.sendData(e)}onSocketClose(e){console.log("websocket----closed"),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,console.log("websocket----closed m_iConnectTimes:"+this.m_iConnectTimes+", m_iMaxTimes: "+this.m_iMaxTimes),this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,function(){ht.instance.reconnect(),ht.instance.m_iConnectTimes++}):Y.instance.hideLoading()))}onConnectError(e){console.log("websocket----onConnectError e:"+ +e),this.isMatching&&(this.isOtherLogin||(this.isConnect=!1,this.m_iConnectTimes<=this.m_iMaxTimes?Laya.timer.once(1500,this,function(){ht.instance.reconnect(),ht.instance.m_iConnectTimes++}):Y.instance.hideLoading()))}reconnect(){console.log("websocket----reconnect: "+ht.m_strHttpHost),this.isMatching&&(this.m_socket.connectByUrl(ht.m_strHttpHost),console.log("websocket----connect websocket"))}onSendMessage(){}sendData(e){if(this.isMatching)if(this.isConnect){let t=new uf;t.setWriteOffset(4),Ot.write(t,e),t.writeBoolean(!1);let i=t.writeOffset;t.setWriteOffset(0),t.writeRawInt(i-4),t.setWriteOffset(i),this.m_socket.send(t.buffer),console.log(Ve.GetLogTime+" websocket ------>>>>>>>> send message PROTOCOL_ID:"+e.protocolId()+"，内容："+JSON.stringify(e))}else ni.log("socket send error： "+JSON.stringify(e))}async onMessageReveived(e){let t=e,i=new uf;i.writeBytes(t),i.setReadOffset(4);let r=Ot.read(i),n=r.protocolId();console.log(Ve.GetLogTime+" websocket ------<<<<<<<< recv PROTOCOL_ID: "+n+"，内容："+JSON.stringify(r));let o=r.errorCode;if(o&&o>0){console.warn("errorCode "+o+", errorMessage： "+Ge.instance.get(o)),o==9&&(w.intance.event(E.EVENT_CLOSE_MODULE,h.EnterRoomView),xe.intance.currSceneName!=de.M_SCENE_MATCH&&xe.intance.setCurrentScene(de.M_SCENE_MAIN),Ve.errorCodeTip(Ge.instance.get(o)));return}switch(w.intance.event("msg_"+n,[t]),n){case ou.PROTOCOL_ID:console.log("收到了登录返回");let l=r;pe.needHeart=!1,ne.instance.matchDto=l.matchDto,xe.intance.setCurrentScene(de.M_SCENE_MATCH);break;case yu.PROTOCOL_ID:console.log("收到比赛开始数据");let c=r;Z.intance.disposeView(h.MatchReadyView),ne.instance.stopAll=!1;break;case cu.PROTOCOL_ID:console.log("收到移动数据");let u=r;z.instance.onRevMovePush(u);break;case gu.PROTOCOL_ID:console.log("收到移动数据列表");var s=r.moveList;s.forEach(U=>{z.instance.onRevMovePush(U)});break;case bu.PROTOCOL_ID:console.log("收到推人移动数据");let y=r;z.instance.onRevTargetMovePush(y);break;case pu.PROTOCOL_ID:console.log("收到伤害数据");let _=r;z.instance.onRevAttackPush(_);break;case fu.PROTOCOL_ID:console.log("收到动画数据");let g=r;z.instance.onRevAnimationPush(g);break;case lu.PROTOCOL_ID:console.log("收到玩家加入或离开数据");let f=r;z.instance.addPlayer(f);break;case du.PROTOCOL_ID:console.log("收到第一滴血数据");let T=r;w.intance.event(E.EVENT_FirstBlood,[T]);break;case hu.PROTOCOL_ID:console.log("收到多杀数据");let C=r;w.intance.event(E.EVENT_MutiKill,[C]);break;case uu.PROTOCOL_ID:console.log("收到比赛结束");let O=r;ne.instance.matchDto&&ne.instance.matchDto.roomId==O.roomId&&(ne.instance.onGoMatchEndRank(O.rankList,O.reward),this.isMatching=!1);break;case mu.PROTOCOL_ID:console.log("收到了恢复数据返回");let N=r;z.instance.onRevRestorePush(N.matchDto);break;case is.PROTOCOL_ID:console.log("收到了错误信息返回");let Q=new is;Object.assign(Q,r),console.log("errorMessage： "+Q.errorMessage),Ge.instance.showErrByString(Q.errorMessage);break;case su.PROTOCOL_ID:this.isOtherLogin=!0,Laya.timer.clearAll(this),Ve.otherLogin(),console.log("websocket----------------------------otherLogin");break;case ht.CMD_20001:let F=A.instance.playerDto;Object.assign(F,t),w.intance.event(E.ACCOUNTVO_UPDATE),console.log("accout----------------------------update");break;case ht.CMD_10099:Y.instance.hideLoading(),w.intance.event("SET_HERO_POSTION_SUCCESS"),console.log("formation----------------------------update");break;default:break}}sendHeart(){this.m_socket.connected&&this.sendData(new ru)}};ht.m_strHttpHost=getWSServer(),ht.CMD_99999=99999,ht.CMD_20001=20001,ht.CMD_10099=10099;var Ke=ht;var ye=class ye{constructor(){this._isSending=!1;this._stopSending=!1;this._sendCmd=0;this._callDataArr=[],this._httpReq=new Laya.HttpRequest,this._httpReq.http.timeout=15e3,this._httpReq.http.ontimeout=this.timeoutFunction,this._httpReq.on(Laya.Event.COMPLETE,this,this.reqCompleteHandler),this._httpReq.on(Laya.Event.ERROR,this,this.reqErrorHandler),this._httpReq.on(Laya.Event.PROGRESS,this,this.reqProcessHandler),ye.RepeatHandler=Laya.Handler.create(this,this.repeatCallHandler,null,!1)}static get instance(){return ye._instance||(ye._instance=new ye),ye._instance}repeatCallHandler(){let e=this._callDataArr[0];e&&(e.needReSend?(this._callDataArr.shift(),this._sendByByte(e.command,e.callData,e.isShowLoading,!0)):this._callDataArr.shift())}timeoutFunction(){ye.ErrorIndex++,this._sendCmd==2,ye.timeoutTimes<ye.MaxSendTimes,ye.timeoutTimes++,ye._IS_SEND=!1,this._isSending=!1,ye.ErrorIndex>=ye.RepeatTimesTimeOut?(Y.instance.hideLoading(),ye.ErrorTips=I.instance.getLanguage("5076"),Z.intance.openModule(h.ClientErrView)):ye.RepeatHandler.run()}reqCompleteHandler(e){let t=Laya.Browser.now()-this.m_nSendTime;if(t&&t>ye.RequestTime?(ye.reqTimes<ye.MaxSendTimes,ye.reqTimes++):(ye.reqTimes=0,ye.timeoutTimes=0,ye.errorTimes=0),console.log("cmd time："+(Laya.Browser.now()-this.m_nSendTime)),this._httpReq.data==null){Ge.instance.showErrByString("_buff:null");return}this._isSending=!1,ye.ErrorIndex=0;let i=new Laya.Byte(this._httpReq.data),r;if(i){let n=new La,o=n.ReadString(i);Hr.instance.analyCookie(o);let s=n.ReadByte(i);for(let l=0;l<s;l++){n.ReadByte(i);let c=n.ReadShort(i),u=n.ReadBytes(i,i.pos+c);if(i.pos+=c,u.length<2)continue;u.pos=0;let p=n.ReadBytes(u,u.length);p.pos=0;let y=new Uint8Array(p.buffer),_=new Uint8Array(Kw(y)),g=new Laya.Byte(_.buffer);g.pos=0;let f=Hr.instance.analyServer(g);Laya.LayaEnv.isConch?console.log("REVC_CMD: cmdID:"+f[0]+" data:"+f,1):console.log(Ve.GetLogTime+" REVC_CMD: cmdID:",f[0],f),f[0]==153&&console.log("......"),f[0]==27&&(f[1]==2e4||f[1]==20042)&&(r=!0),w.intance.event("msg_"+f.shift(),[f])}s==0&&console.log("REVC_DATA: NO_DATA",1)}if(this._callDataArr.length>0){let n=this._callDataArr.shift();r&&n&&n.callBackHandler!=null&&n.callBackHandler.run()}ye._IS_SEND=!1,this._callDataArr.length>0?ye.RepeatHandler.run():Y.instance.hideLoading()}reqErrorHandler(e){console.log("[error] HttpNetService reqError: ["+e+"]",1),ye.errorTimes<ye.MaxSendTimes&&this._sendCmd==2,ye.errorTimes++,Y.instance.showLoadingByInfo(I.instance.getLanguage(5205)),ye.ErrorIndex++,ye._IS_SEND=!1,this._isSending=!1,ye.ErrorIndex>=ye.RepeatTimes?(Y.instance.hideLoading(),ye.ErrorTips=I.instance.getLanguage("5075"),Z.intance.openModule(h.ClientErrView),this._callDataArr.length=0):Laya.timer.once(1e3,this,function(){ye.RepeatHandler.run()})}reqProcessHandler(e){}DataToService(e){Laya.LayaEnv.isConch?this._httpReq.send(le.server,e.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded","Connection","close"]):this._httpReq.send(le.server,e.buffer,"post","arraybuffer",["Content-Type","application/x-www-form-urlencoded"])}SendData(e,t,i=null,r=!0,n=!0){this._stopSending||(this.m_nSendTime=Laya.Browser.now(),ye.ErrorIndex=0,n&&this._callDataArr.push({command:e,callData:t,callBackHandler:i,isShowLoading:r,needReSend:n}),this._sendByByte(e,t,r,!1))}_sendByByte(e,t,i=!0,r=!1){this._sendCmd=e,this._sendCmd==2,Ke.instance.sendData({cmd:e,code:"",data:t})}reSendData(){this._callDataArr.length>0&&ye.RepeatHandler.run()}sendOutHandler(){Laya.timer.clear(this,this.sendOutHandler),this._isSending&&(this._isSending=!1,ye.ErrorIndex>=ye.RepeatTimes?(Y.instance.hideLoading(),ye.ErrorTips="Client Error!",Z.intance.openModule(h.ClientErrView),this._callDataArr.length=0):ye.RepeatHandler.run())}EnCodeByte(e){e.pos=0;let i=new La().ReadBytes(e,e.length);i.pos=0;let r=new Laya.Byte,n=0,o,s=0;for(let l=0;l<i.length;l++)n>=6?n=1:n+=1,o=i.getByte(),s=o,o>>=8-n,s<<=n,s|=o,s^=3,r.writeByte(s);return r}DecryptByte(e){e.pos=0;let i=new La().ReadBytes(e,e.length);i.pos=0;let r=new Laya.Byte,n=0,o,s=new Uint8Array(i.buffer);for(let l=0;l<s.length;l++)n>=6?n=1:n+=1,o=s[l],o^=3,o<<=8-n,s[l]^=3,s[l]>>=n,s[l]|=o;return r=new Laya.Byte(s.buffer),r}init(){}HttpLoadProcess(e){}httpLoadComplete(e){Hr.instance.analyData=e}dispose(){}set stopSending(e){this._stopSending=e}};ye._IS_SEND=!1,ye.ErrorIndex=0,ye.RepeatTimes=8,ye.RepeatTimesTimeOut=3,ye.ErrorTips="",ye.LoginTime=5e3,ye.RequestTime=4e3,ye.MaxSendTimes=5,ye.reqTimes=0,ye.timeoutTimes=0,ye.errorTimes=0;var fi=ye;function Kw(a){throw new Error("Function not implemented.")}var vt=class extends Laya.Event{constructor(){super()}};vt.INIT_SUIT_EVENT="HeroEvent:INIT_SUIT_EVENT",vt.EVENT_FIND_ITEM_CLICK="HeroEvent:EVENT_FIND_ITEM_CLICK",vt.EVENT_RELEASE_ITEM_CLICK="HeroEvent:EVENT_RELEASE_ITEM_CLICK",vt.EVENT_FINISH="HeroEvent:EVENT_FINISH",vt.EVENT_START="HeroEvent:EVENT_START",vt.EVENT_AGAIN="HeroEvent:EVENT_AGAIN",vt.EVENT_ENABLE_TIJIAO="HeroEvent:EVENT_ENABLE_TIJIAO",vt.EVENT_HUMANSTAY="HeroEvent:EVENT_HUMANSTAY",vt.EVENT_STOPGAME="HeroEvent:EVENT_STOPGAME",vt.EVENT_RESTORE="HeroEvent:EVENT_RESTORE",vt.EVENT_CANCEL_RESTORE="HeroEvent:EVENT_CANCEL_RESTORE",vt.EVENT_COLLISIONENTER="HeroEvent:EVENT_COLLISIONENTER",vt.EVENT_HERO_DRAW_UPDATE_PRODUCTION="HeroEvent:EVENT_HERO_DRAW_UPDATE_PRODUCTION",vt.SELECT_UI="HeroEvent:SELECT_UI";var vu=class extends Ae{constructor(){super()}};var wu=class extends Ae{constructor(){super()}};var Wt=class a{constructor(){this._inited=!1;this._initUpgrade=!1;this.heroList=[];this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0)}initUpgrade(){if(!this._initUpgrade){let e=ie.intance;e.m_dicHeroLv||(e.m_dicHeroLv=e.initConfig("hero_lv",["hero_lv","hero_star","race"],wu)),e.m_dicHeroAttup||(e.m_dicHeroAttup=e.initConfig("hero_attup",["star_lv","race"],vu)),this._initUpgrade=!0}}getHead(e){let t=Math.floor(Math.random()*3)+1;return"common/common_icon/img_"+e+"_"+t+".png"}getNextHero(e){let t=A.instance.m_heroData.heroVoDic.keys.indexOf(e.pk);return A.instance.m_heroData.heroVoDic.keys.length===1?null:t<=A.instance.m_heroData.heroVoDic.keys.length-2?A.instance.m_heroData.heroVoDic.values[t+1]:null}getLastHero(e){let t=A.instance.m_heroData.heroVoDic.keys.indexOf(e.pk);return t>0?A.instance.m_heroData.heroVoDic.values[t-1]:null}setStar(e,t){console.log("setStar: _star "+t);let i=parseInt(t);var r=Math.floor(i/6),n=i%6,o=r+n;let s=0;for(let u=0;u<r;u++)e["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_2.png",e["img_star"+(u+1)].visible=!0;for(let u=r;u<n;u++)e["img_star"+(u+1)].skin="gameIcon/hero/heroDetail/img_star_1.png",e["img_star"+(u+1)].visible=!0;for(let u=o;u<5;u++)e["img_star"+(u+1)].visible=!1;let l=e.box_star.width,c=46;o==1?e["img_star1"].x=l/2-s:o==2?(e["img_star1"].x=l/2-c/2-s,e["img_star2"].x=l/2+c/2-s):o==3?(e["img_star1"].x=l/2-s,e["img_star2"].x=l/2-c-s,e["img_star3"].x=l/2+c-s):o==4?(e["img_star1"].x=l/2-c/2-s,e["img_star2"].x=l/2+c/2-s,e["img_star3"].x=l/2-c*(1/2+1)-s,e["img_star4"].x=l/2+c*(1/2+1)-s):(e["img_star1"].x=l/2-s,e["img_star2"].x=l/2-c-s,e["img_star3"].x=l/2+c-s,e["img_star4"].x=l/2-c*2-s,e["img_star5"].x=l/2+c*2-s)}getRoundName(e){let t=I.instance.getLanguage(10014,16,8);return e==4?t=I.instance.getLanguage(10014,2,1):e==3?t=I.instance.getLanguage(10014,4,2):e==2&&(t=I.instance.getLanguage(10014,8,4)),t}};var Wn=class{};var Lu=class{};var ft=class a{constructor(){this.mail_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"||(this.mail_contract=new window.web3.eth.Contract(B.BLINDBOX_ABI,B.BLINDBOX_ADDRESS))}async initData(){this.mailList=new te,Y.instance.showLoading(!0);let e=await this.mail_contract.methods.getPricesLength().call();for(let t=0;t<e;t++){let i=await this.mail_contract.methods.getPriceByIndex(t).call(),r=new Wn;r.type=1,r.idx=t,Object.assign(r,i),this.mailList.set(r.idx,r),r.showPrice=window.web3.utils.fromWei(r.currentPrice+"")}Y.instance.hideLoading()}async hasFree(){return await this.mail_contract.methods.getIsFreeOpen().call()?!await this.mail_contract.methods.hasFreeHero(ue.instance.walletAddress).call():!1}async recruit(e){let t=ie.intance.m_dicShops.get(e),i=t.cost[1],r=await ue.instance.getBalance(),n=await pe.requestPost("wxgame/hero/heroBuy",{shopId:t.id},!0,!0);n&&(Ue.instance.autoPop=!1,A.instance.herosDataUpdataHandler(n.reward),n.resChange&&A.instance.moneyInfoHander(n.resChange),n.fightHeroPk&&(A.instance.playerDto.fightHeroPk=n.fightHeroPk),Y.instance.hideLoading())}async recruitItem(e,t){let i=ie.intance.m_dicShops.get(e),r=i.cost[1],n=await ue.instance.getBalance(),o=await pe.requestPost("wxgame/hero/itemBuy",{shopId:i.id,count:t},!0,!0);o&&(A.instance.itemsDataUpdataHandler(o.reward,!1),o.resChange&&A.instance.moneyInfoHander(o.resChange),o.fightHeroPk&&(A.instance.playerDto.fightHeroPk=o.fightHeroPk),Y.instance.hideLoading())}async recruitFree(){Y.instance.showLoading(!0),this.isOpen=await this.mail_contract.methods.getIsOpen().call();let e=await this.hasFree();if(!this.isOpen){Y.instance.hideLoading(),w.intance.event(E.EVENT_HERO_DRAW_BACK,[I.instance.getLanguage(12)]);return}if(!e){w.intance.event(E.EVENT_HERO_DRAW_BACK,[I.instance.getLanguage(17)]);return}await this.mail_contract.methods.recruitFree().send({from:ue.instance.walletAddress},(t,i)=>{if(t){Y.instance.hideLoading(),w.intance.event(E.EVENT_HERO_DRAW_BACK,[I.instance.getLanguage(16)]);return}})}async ownerHero(){let e=await pe.requestPost("wxgame/hero/heroList",{},!0,!0);A.instance.m_heroData.initData(e.heroList),console.log("HERO LIST")}async ownerBag(){let e=await pe.requestPost("wxgame/hero/bagList",{},!0,!0);A.instance.m_packageData.initData(e.data),console.log("BAG LIST")}async heroOutputRate(){if(Wt.instance.heroOutputRateDic)return;let e=await pe.requestPost("cybertron-sys-api/api/v1/heroes/heroOutputRate",{},!0);Wt.instance.heroOutputRateDic=new te;for(let t of e){let i=new Lu;Object.assign(i,t),Wt.instance.heroOutputRateDic.set(i.mineralLevel,i)}console.log("HERO heroOutputRate"),w.intance.event(vt.EVENT_HERO_DRAW_UPDATE_PRODUCTION)}makeHeroVo(e){let t=new Ut;return Object.assign(t,e),t}};var _u=class{constructor(){this.heroVoDic=new te}initData(e){this.heroVoDic||(this.heroVoDic=new te);let t;for(let r=0;r<e.length;r++){t=new Ut;var i=e[r];t.id=i.id,t.lv=i.lv,t.pk=i.pk,t.color=i.color,this.pushItem(t)}console.log("@@@@@@@@@@@@@@@@@@-----------------------------------------packVo: ")}updateData(e){console.dir("更新英雄："+e),this.updataItemVoByArr(e)}pushItem(e){this.heroVoDic.set(e.pk,e)}removeItem(e){this.heroVoDic.remove(e.pk)}updataItemVoByArr(e,t=!1){let i=[],r=!1,n;for(let o=0;o<e.length;o++){n=e[o];let s=this.heroVoDic.get(n.pk);s==null?(s=new Ut,s.id=n.id,s.pk=n.pk,s.lv=n.lv,s.color=n.color,s.m_bNew=!0,s.newAddCnt=1,s.newAddCnt>0&&this.pushItem(s)):s.newAddCnt=1,s.isLvUp=t,i.push(s.pk),s.m_iNum<=0&&this.removeItem(s),s.newAddCnt>0&&Ue.instance.needPop&&(Ue.instance.addHeroItem(s),r=!0)}r&&Ue.instance.needPop&&Ue.instance.autoPop&&Zt.instance.startShow(),i.length>0&&w.intance.event(E.PACKAGE_UPDATE_ITEM,[i])}getItemById(e){return this.heroVoDic.get(e)}};var A=class a{constructor(){this.timeZoneOff=0;this.hearIntervalSceond=10*60;this._timeStamp=0;this._m_strLanguage=1;this.isLanChanged=!1;this.lastTimestamp=0;this._m_serverTime=0;this.M_S_VersionServer="1.0.0";this.headId=10001;this.countryId=1e3;this.initReceiveExp=!0;this.needPopError=!0}async initData(){De.instance.sendCustumEvent(20),await ft.instance.ownerHero(),await ft.instance.ownerBag(),De.instance.sendCustumEvent(21)}addMail(e){this.mailVoDic||(this.mailVoDic=new te),this.mailVoDic.set(e.id,e)}get m_serverTime(){let e=Date.now();return this._m_serverTime+(e-this.lastTimestamp)}set m_serverTime(e){this._m_serverTime=e,this.lastTimestamp=Date.now()}get m_strLanguage(){return this._m_strLanguage}set m_strLanguage(e){this._m_strLanguage=e}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this.vipInfo=new bl,this.m_packageData=new Lt,this.m_heroData=new _u,this.systemOpenModel=new fl,this.m_dicCustomerVo=new te,w.intance.on("msg_27",this,this.commonErrHandler),w.intance.on("msg_7",this,this.roleLeveHandler),w.intance.on("msg_11",this,this.vipInfoHandler),w.intance.on("msg_13",this,this.onVipUpgrade),w.intance.on("msg_6",this,this.moneyInfoHander),w.intance.on("msg_90",this,this.initSystemOpen),w.intance.on("msg_161",this,this.reciveTurnoverVo),w.intance.on("msg_333",this,this.onInitSceneBg),w.intance.on("msg_350",this,this.onInitStoreDiscount),w.intance.on("msg_388",this,this.onInitTitle),w.intance.on("msg_1002",this,this.onLanChange)}initSend(){}onLanChange(e){let t=parseInt(e[0]),i=parseInt(e[1]);switch(t){case 1:i==1&&De.instance.reload();break;case 2:break}}get timeStamp(){return this._timeStamp+(Laya.Browser.now()-this.recordStampTime)/1e3}set timeStamp(e){this.recordStampTime=Laya.Browser.now(),this._timeStamp=e}onReciveBuyTimes(e){a.instance.playerDto.updateRoleBuyTimes(e)}reciveTurnoverVo(e){}onInitSceneBg(e){}onInitTitle(e){}getAdRankById(e){return this.m_adRankDic&&this.m_adRankDic.get(e)?this.m_adRankDic.get(e):""}onGetPvpGrade(e){let t=e[0]}onInitStoreDiscount(e){}getRealExp(e){return parseInt(e.exp)-parseInt(e.nowExp)}getRealNextExp(e){return parseInt(e.nextExp)-parseInt(e.nowExp)}reciveBuyCustomerMsg(e){}onInitStyleAndTag(e){let t=e[0];for(let i=0;i<t.length;i++){let r=t[i],n=r[0],o=r[1],s=r[2]}}reciveFriendList(e){}reciveFirstRecharge(e){}hasReceiveFirst(){return this.firstRechargeState.toString()=="3"}recieveOnlineAward(e){}initFriendsGiftHandler(e){}initSystemOpen(e){this.systemOpenModel.initSystemOpen(e[0])}updateSystemOpen(e){let t=e[0];gl.instance.addNewOpenFun(t);for(let i=0;i<t.length;i++)this.systemOpenModel.openSystem.set(t[i],!0)}serverTimeUpdateHandler(){let e=this.hearIntervalSceond*1e3;Laya.timer.loop(e,this,this.onHear)}onHear(){}initMainTaskHandler(e){}itemsDataUpdataHandler(e,t){this.m_packageData.updateData(e,t),w.intance.event(E.EVENT_ITEM_UPDATE)}herosDataUpdataHandler(e){this.m_heroData.updateData(e)}itemsDataInitHandler(e){this.m_packageData.initData(e)}vipInfoHandler(e){this.vipInfo.trecharge=e[1],this.vipInfo.isRewards=e[2],this.vipInfo.daygift=e[3]}onVipUpgrade(e){}getConsumeValue(e){e=parseInt(e.toString());var t=this.playerDto.coins[e];return t>0?t:0}hasEnoughMoney(e,t,i=!0){switch(e=parseInt(e.toString()),t=parseInt(t.toString()),e){default:return this.playerDto.coins[e]<t&&i&&w.intance.event("open_buy",4),this.playerDto.coins[e]>=t}}moneyInfoHander(e,t=!0,i=!0){let r=!1,n=!1,o=0;for(let s of e)n=!1,s[0]==Xe.TYPE_EXP?(o=parseInt(s[1]+"")-this.playerDto.exp,this.playerDto.exp=parseInt(s[1]+""),n=o>0):(o=parseFloat(s[1]+"")-this.playerDto.coins[s[0]],this.playerDto.coins[s[0]]=parseFloat(s[1]+""),n=o>0),n&&Ue.instance.needPop&&i&&(r=!0,Ue.instance.addConsumeByServer([s[0],o]));t&&w.intance.event(E.ROLE_INFO_CHANGE),r&&Ue.instance.autoPop&&Zt.instance.startShow()}roleLeveHandler(e){let t=this.playerDto.lv>0&&this.playerDto.lv!=e[0],i=this.playerDto.lv;this.playerDto.lv=e[0],this.playerDto.trueiron=e[1];let r=this.playerDto.lv;this.playerDto.deltaExp>0&&Ue.instance.needPop&&!this.initReceiveExp&&Ue.instance.addConsumeByServer([Xe.TYPE_EXP,this.playerDto.deltaExp]),Ue.instance.autoPop&&!this.initReceiveExp&&Zt.instance.startShow(),this.initReceiveExp=!1,t&&(w.intance.event(E.ROLE_INFO_CHANGE),w.intance.event(E.EVENT_OPEN_MODULE,[h.RoleUpgradeView]))}initGuideHandler(e){let t=e[0],i=e[1];le.UseGuide==!1&&(t=0,i=[100,110,120,130,140,150,160,190,200,210,220,230,232,235,245,250,260,270,280,290,293,296,300,310,330])}commonErrHandler(e){if(Y.instance.hideLoading(),parseInt(e[0])==2e4){this.needPopError&&(Ge.instance.showErrorWord(parseInt(e[0])),w.intance.event(E.RECIVE_SUCESS_SERVICE));return}else if(parseInt(e[0])==20008){w.intance.event("open_buy",1);return}else if(parseInt(e[0])==20007){w.intance.event("open_buy",2);return}else if(parseInt(e[0])==20015){w.intance.event("open_buy",3);return}else if(parseInt(e[0])==20016){w.intance.event("open_buy",4);return}else if(parseInt(e[0])==10021){fi.ErrorTips=Ge.instance.get(10021),Z.intance.openModule(h.ClientErrView);return}else if(parseInt(e[0])==10023){fi.ErrorTips=Ge.instance.get(10023),Z.intance.openModule(h.ClientErrView);return}else if(parseInt(e[0])==10019){fi.ErrorTips=Ge.instance.get(10019),Z.intance.openModule(h.ClientErrView);return}else if(parseInt(e[0])!=20053){if(parseInt(e[0])==10002){fi.ErrorTips=I.instance.getLanguage(5085),Z.intance.openModule(h.ClientErrView);return}}Ge.instance.showErrorWord(parseInt(e[0])),console.log("Server Error Code:"+e[0])}dispose(){}parseNumber(e){let t=[];for(let i=0;i<e.length;i++){let r=e[i];r=this.dividedNumber(r),t.push(r.toString())}return t}dividedNumber(e){return e/1e4}};var xu=class extends Ae{constructor(){super()}};var Kn=class{constructor(e,t,i){this._idKeyName="";this._jsonName="";this._sheetItemCls=null;this._isParse=!1;this._idKeyName=t,this._jsonName=e,this._sheetItemCls=i,this._idToValueMap=new te,this._items=[]}parseJson(){if(this._isParse)return;let e=G.instance.getResByURL("config/"+this._jsonName+".json");if(!e)throw new Error("无效的配置数据"+this._jsonName);for(let t of e){let i=new this._sheetItemCls;i.beFill(t),this._idToValueMap.set(t[this._idKeyName],i),this._items.push(i),this.addItemProcess(i)}this._isParse=!0}addItemProcess(e){}getItemById(e){return this.excuteIsParse()&&this._idToValueMap.get(e)?this._idToValueMap.get(e):null}getAllItems(){return this.excuteIsParse()?this._items:null}excuteIsParse(){return this._isParse,this._isParse}};var Iu=class extends Kn{constructor(){super("","","");this._itemsTypeMap=null;this._itemsTypeMap=new te}getCombineKey(t,i,r){return t+r.toString()+i}getItemsByChildType(t,i){let r=this.getCombineKey(t,i,"childType_itemType");if(this._itemsTypeMap.get(r))return this._itemsTypeMap.get(r);this._itemsTypeMap.set(r,[]);let n=ie.intance.m_dicItems.values;for(let o of n)o.child_type==t&&o.itm_type==i&&this._itemsTypeMap.get(r).push(o);return this._itemsTypeMap.get(r)}};var Eu=class extends Ae{realIcon(){return"https://cdn.bunnyswap.cc/images/items/"+this.icon}get starArr(){if(this._starArr)return this._starArr;if(this._starArr=[],this.max_quality==0)return this._starArr;let t=this.quality/this.max_quality*5;for(let i=1;i<=5;i++)t>=i?this._starArr.push(0):i-t<=.5?this._starArr.push(2):this._starArr.push(1);return this._starArr}};var Su=class extends Ae{};var Tu=class{constructor(){}beFill(e){for(let t in e)if(this.hasOwnProperty(t)){let i=e[t];i instanceof String&&String(i).indexOf("[[")>=0&&(i=JSON.parse(i)),this[t]=i}}converNumberStrArr(e){let t=[];for(let i=0;i<e.length;i++)t.push(parseInt(e[i]));return t}};var ku=class extends Tu{constructor(){super();this._childtypeL=""}get icon(){return this._icon}set icon(t){this._icon=t}get childtype(){return this._childtypeL==""&&(this._childtypeL=I.instance.getLanguage(this._childtype)),this._childtypeL}set childtype(t){this._childtype=t}get childtypeID(){return this._childtypeID}set childtypeID(t){this._childtypeID=t}get if_use(){return this._if_use}set if_use(t){this._if_use=t}};var Cu=class extends Kn{constructor(){super("catagory_childtype","childtypeID",ku);this._beautySalonUpgradeItems=null;this._beautySalonSkinItems=null;this._beautySalonFeaturesItems=null;this._beautySlonHairItems=null}getBeautySalonUpgradeItems(){return this._beautySalonUpgradeItems?this._beautySalonUpgradeItems:(this._beautySalonUpgradeItems=[],this._beautySalonUpgradeItems.push(this.getItemById(ct.MODEL)),this._beautySalonUpgradeItems=this._beautySalonUpgradeItems.concat(this.getHairTabItems()),this._beautySalonUpgradeItems)}getSkinTabItems(){return this._beautySalonSkinItems?this._beautySalonSkinItems:(this._beautySalonSkinItems=[],this._beautySalonSkinItems.push(this.getItemById(ct.SkinColor)),this._beautySalonSkinItems.push(this.getItemById(ct.FACE_TYPE)),this._beautySalonSkinItems)}getFeaturesTabItems(){return this._beautySalonFeaturesItems?this._beautySalonFeaturesItems:(this._beautySalonFeaturesItems=[],this._beautySalonFeaturesItems.push(this.getItemById(ct.Eye)),this._beautySalonFeaturesItems.push(this.getItemById(ct.Nose)),this._beautySalonFeaturesItems.push(this.getItemById(ct.Mouse)),this._beautySalonFeaturesItems.push(this.getItemById(ct.Eyebrow)),this._beautySalonFeaturesItems.push(this.getItemById(ct.EYE_ZHU)),this._beautySalonFeaturesItems)}isSalonFeatureType(t){return t=parseInt(t.toString()),t==ct.Eye||t==ct.Nose||t==ct.Mouse||t==ct.Eyebrow||t==ct.EYE_ZHU}getHairTabItems(){return this._beautySlonHairItems?this._beautySlonHairItems:(this._beautySlonHairItems=[],this._beautySlonHairItems)}};var Au=class extends Ae{};var Du=class extends Ae{constructor(){super()}};var Mu=class extends Ae{constructor(){super()}};var Pu=class extends Ae{};var Ru=class extends Ae{};var Bu=class extends Ae{};var Ou=class extends Ae{};var Nu=class extends Ae{constructor(){super()}};var Hu=class extends Ae{};var _t=class _t{get m_fragrances(){if(this._m_fragrances)return this._m_fragrances;this._m_fragrances=[];for(let e of this.m_dicItems.values)e&&e.child_type+""==ct.FRAGRANCE+""&&this._m_fragrances.push(e);return this._m_fragrances}set m_fragrances(e){this._m_fragrances=e}constructor(){if(_t._instance)throw new Error("SheetDataManager是单例,不可new.");_t._instance=this,this._modelList=new te}static get intance(){return _t._instance||(_t._instance=new _t),_t._instance}resetTokenData(){this.m_dicItems.get(1e4).tokenId=B.TOX_ADDRESS,this.m_dicItems.get(10001).tokenId=B.ASSETS_ARCANITE_ADDRESS,this.m_dicItems.get(10002).tokenId=B.ASSETS_CRYSTAL_ADDRESS,this.m_dicItems.get(10003).tokenId=B.ASSETS_MITHRIL_ADDRESS,this.m_dicItems.get(10004).tokenId=B.ASSETS_REDSTONE_ADDRESS,this.m_dicItems.get(10005).tokenId=B.ASSETS_TRUEIRON_ADDRESS,this.m_dicMaps.get(1).tokenId=B.STAKING_ARCANITE_ADDRESS,this.m_dicMaps.get(2).tokenId=B.STAKING_CRYSTAL_ADDRESS,this.m_dicMaps.get(3).tokenId=B.STAKING_MITHRIL_ADDRESS,this.m_dicMaps.get(4).tokenId=B.STAKING_REDSTONE_ADDRESS,this.m_dicMaps.get(5).tokenId=B.STAKING_TRUEIRON_ADDRESS,this.mapsCallBack()}init(){let e=Laya.Browser.now();A.instance.systemOpenModel.parseJson(),this.m_dicItems=this.initConfigObject("item",Eu),this.m_dicShops=this.initConfig("shop",["id"],Au),this.m_dicUnions=this.initConfig("union",["id"],Hu),this.m_dicHeros=this.initConfigObject("hero",Pu),this.m_dicSkills=this.initConfigObject("skill",Bu),this.m_dicBuffs=this.initConfigObject("buff",Ou),this.m_dicArenaDic=new te,this.m_dicArenaMulDic=this.initConfig("arena",["lv","coinType"],Ru,!0,Laya.Handler.create(this,this.onSetArena,null,!1)),this.m_dicMaps=this.initConfigObject("map",Su),this.mapsCallBack(),console.log("-----------------------sheetdata-time1:"+(Laya.Browser.now()-e)),this.m_dicHead=this.initConfig("head",["id"],Mu),this.m_dicCountry=this.initConfig("country",["id"],Nu),this.m_dicGenerate=this.initConfigObject("general",xu),this.m_dicWorldMapChildTypeItem=new te,console.log("-----------------------sheetdata-time2:"+(Laya.Browser.now()-e))}mapsCallBack(){this.m_dicTokenMaps=new te;for(let e of this.m_dicMaps.values)e&&this.m_dicTokenMaps.set(e.tokenId,e)}onSetArena(e){this.m_dicArenaDic.set(e.id,e)}preInit(){this.m_dicScene=this.initConfig("scene",["name"],Du)}getItemModel(){return this.getDataModel(_t.DataType_Items)}getGeneralValueById(e){return this.m_dicGenerate&&this.m_dicGenerate.get(e)?this.m_dicGenerate.get(e).value:0}getSocialShareValueById(e){return this.m_dicSocialShare&&this.m_dicSocialShare.get(e)?this.m_dicSocialShare.get(e).parameter:0}getDataModel(e){if(!this._modelList.get(e))switch(e){case _t.DataType_Items:this._modelList.set(e,new Iu);break;case _t.DataType_CatagoryChildType:this._modelList.set(e,new Cu);break}return this._modelList.get(e)}static getArrFromDictionary(e,t,i){let r=[];for(let n=0;n<e.values.length;n++)e.values[n][t]+""==i+""&&r.push(e.values[n]);return r}getArrFromDicItemByKey(e,t){let i=[];for(let r=0;r<this.m_dicItems.values.length;r++)this.m_dicItems.values[r][e]+""==t+""&&i.push(this.m_dicItems.values[r]);return i}initConfigObject(e,t=null,i=null){let r="config/"+e+".json";console.log("initConfigObject： url: "+r);let n=G.instance.getResByURL(r).data;return new Or(n,t)}initConfig(e,t,i=null,r=!1,n=null){let o="config/"+e+".json";console.log("initConfig url: "+o);let s=G.instance.getResByURL(o).data,l=new te;if(!s)return console.log("ERROR : SheetDataManager -->initConfig()  url:"+o),l;let c;for(let u=0;u<s.length;u++){let p=this.compoundKey(s[u],t);i?(c=new i,c.init==null&&console.log("ERROR :BaseItem> SheetDataManager -->initConfig()  url:"+o),c.init(s[u]),l.set(p,c),n&&n.runWith(c)):(l.set(p,s[u]),n&&n.runWith(s[u]))}if(r){let u=G.instance.setResURL(o);Laya.Loader.clearRes(u)}return l}compoundKey(e,t){let i="",r=t.length;if(r>1)for(let n=0;n<r;n++)i+=e[t[n]],n!=r-1&&(i+="_");else i=e[t[0]];return i}getCompoundKey(e){let t="",i=e.length;if(i>1)for(let r=0;r<i;r++)t+=e[r],r!=i-1&&(t+="_");else t=e[0];return t}initConfig2(e,t,i,r=!0){let n="config/"+e+".json",o=G.instance.getResByURL(n).data,s=new te;if(!o)return console.log("ERROR : SheetDataManager -->initConfig2()  url:"+n),s;let l;for(let c=0;c<o.length;c++){let u=o[c][t],p;s.get(u)==null?(p=[],s.set(u,p)):p=s.get(u),l=new i,l.init==null&&console.log("ERROR :<BaseItem> SheetDataManager -->initConfig2()  url:"+n),l.init(o[c]),p.push(l)}if(r&&e!="items"){let c=G.instance.setResURL(n);Laya.Loader.clearRes(c)}return s}getItemsBy(e,t){let i=this.getArrFromDicItemByKey("itm_type",e),r=[];for(let n of i)n.child_type.toString()==t.toString()&&r.push(n);return r}getSheetDataByMultiKey(e,t){let i=this.getCompoundKey(t);return e.get(i)}};_t.DataType_Items="SheetDataManager:items",_t.DataType_CatagoryChildType="SheetDataManager:CatagoryChildType",_t.DataType_BeautyPiece="SheetDataManager:beautypiece",_t.DataType_BeautyExp="SheetDataManager:beautyexp",_t.DataType_ClothStyleScore="SheetDataManager:clothStyleScore";var ie=_t;var Gi=class Gi{constructor(){this.mainSceneX=10086;this.isCloseAll=!0;this.enterMainSceneTimes=0;this.isTopOpening=!1;this.isBottomOpening=!1;w.intance.on(E.EVENT_MODULE_ADDED,this,this.onAdded)}static get intance(){return Gi._instance||(Gi._instance=new Gi),Gi._instance}init(){}setup(){}onAdded(e){}getPreSceneData(){if(this.m_arrFromScenes.length<1)return[de.M_SCENE_MAIN,!0,1,null];{let e=this.m_arrFromScenes.pop();return console.log("pop-----------route："+this.m_arrFromScenes.join(" | ")),e}return[de.M_SCENE_MAIN,!0,1,null]}removePreSceneData(){this.m_arrFromScenes=[]}setBackScene(){let e=this.getPreSceneData();this.setCurrentScene(e[0],e[1],!1)}setMainScene(e=1,t=null){this.setCurrentScene(de.M_SCENE_MAIN,t)}async setCurrentScene(e,t=null,i=!1,r=!0){let n=!1;if(this.m_sceneCurrent&&this.m_sceneCurrent.name==e){console.log("currentScene："+this.m_sceneCurrent.name+"  openScene：："+e);return}this.isCloseAll?Z.intance.closeAll():this.isCloseAll=!0,this.m_sceneCurrent&&(this.m_arrFromScenes||(this.m_arrFromScenes=[]),i&&this.m_sceneCurrent.m_arrOpenSceneData[3]&&this.m_arrFromScenes.push(this.m_sceneCurrent.m_arrOpenSceneData),console.log("open-----------scene："+this.m_arrFromScenes),this.fromScene=this.m_sceneCurrent.name,console.log("fromSceneName: "+this.fromScene),Gi.m_arrSceneToDialog.indexOf(e)==-1?(this.m_sceneCurrent==this.m_preScene&&(this.m_preScene=null),this.m_sceneCurrent.toScene=e,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),uo.instance.dispose()):this.m_preScene=this.m_sceneCurrent,!i&&Gi.m_arrSceneToDialog.indexOf(e)==-1&&this.m_preScene&&(this.m_sceneCurrent=this.m_preScene,this.m_sceneCurrent.toScene=e,this.m_sceneCurrent.removeSelf(),this.m_sceneCurrent=null,Laya.loader.clearUnLoaded(),uo.instance.dispose()));let o=ie.intance.m_dicScene.get(e);switch(o&&o.music!=null&&o.music!="0"&&o.music!=""&&(console.log("SceneManager.setCurrentScene sceneItem.music: "+o.music),He.instance.playMusicByName(o.music)),e){case de.M_SCENE_MAIN:this.m_arrFromScenes=[],this.m_sceneCurrent=await Laya.Scene.open("scenes/mainView/MainScene.ls"),this.enterMainSceneTimes++;break;case de.M_SCENE_SHOP:this.m_sceneCurrent=await Laya.Scene.open("scenes/shop/ShopScene.ls",!0,t);break;case de.M_SCENE_HERO:this.m_sceneCurrent=await Laya.Scene.open("scenes/hero/MyHeroScene.ls");break;case de.M_SCENE_KNAPSACK:this.m_sceneCurrent=await Laya.Scene.open("scenes/item/KnapsackScene.ls");break;case de.M_SCENE_UNION:this.m_sceneCurrent=await Laya.Scene.open("scenes/union/UnionScene.ls");break;case de.M_SCENE_MATCH_READY:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/MatchReady.ls");break;case de.M_SCENE_MATCH:this.m_sceneCurrent=await Laya.Scene.open("scenes/match/Match.ls");break;default:break}Ve.logs("======================  打开Scene: "+e+"  ======================"),this.m_sceneCurrent.name=e,this.m_sceneCurrent.fromScene=this.fromScene,this.m_sceneCurrent.m_arrOpenSceneData=[e,t,i,r];let s=V.M_SCENE}initPreload(){let e=ie.intance.m_dicScene.get(de.M_SCENE_PRE_LOAD);e&&e.music!=null&&e.music!="0"&&e.music!=""&&(console.log("SceneManager.initPreload sceneItem.music: "+e.music),He.instance.playMusicByName(e.music))}get currSceneName(){return this.m_sceneCurrent?this.m_sceneCurrent.name:""}};Gi.m_arrSceneToDialog=[];var xe=Gi;var tt=class tt{constructor(){this.resArr=["gameIcon/map/1001/img_map.jpg",{url:"gameIcon/map/map_1001.lh",type:Laya.Loader.HIERARCHY},"res/common/comm_bg/img_com_bg.jpg","res/common/comm/img_bg_large.png","res/common/comm/img_bg_medium.png","res/common/comm/img_bg_small.png",{url:"res/common.atlas",type:Laya.Loader.ATLAS},{url:"gameIcon/effect/match/beiji/spine.sk"},{url:"gameIcon/effect/match/dunpai/spine.sk"},{url:"gameIcon/effect/ruchang/effect1.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect2.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/ruchang/effect3.skel",type:Laya.Loader.SPINE},{url:"gameIcon/effect/hua/effect.skel",type:Laya.Loader.SPINE},{url:"scenes/mainView/MainScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/shop/ShopScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/hero/MyHeroScene.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/Match.ls",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchHeroSpr.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/DamageNumber.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/CreateRoomDialog.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/mainView/EnterRoomView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndRankView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchReadyView.lh",type:Laya.Loader.HIERARCHY},{url:"scenes/match/MatchEndView.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/closeBtn.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/defaultButton.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/DropBox.lh",type:Laya.Loader.HIERARCHY},{url:"resources/sound/destroy.wav",type:Laya.Loader.BUFFER},{url:"resources/sound/hit.wav",type:Laya.Loader.BUFFER}];this.m_arrPreResource=["config/spot.json","config/scene.json"];this.m_arrInitResource=["config/general.json","config/head.json","config/country.json","config/variable.json","config/equip.json","config/shop.json","config/union.json","config/hero.json","config/skill.json","config/buff.json","config/item.json","config/arena.json","config/map.json","config/level.json","config/mailmessage.json"];this.m_objModuleReource={FindScene:["res/atlas/find.atlas"],MainScene:[],ShopScene:[],CommentDialog:["res/atlas/comment.atlas"],GuideView:["res/atlas/guide.atlas","res/atlas/ShopView.atlas","config/newplayer.json"],ShareView:["res/atlas/share.atlas"],SelectHeadDialog:[],UnionApplyDialog:["config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json"],GuildScene:["res/atlas/union.atlas","config/alliance_constant.json","config/guild_building_main.json","config/alliance_pos.json","config/guild_level.json","config/guild_apply.json","config/guild_contrubute.json"],UnionWarScene:["res/atlas/unionWar.atlas","config/resource_node.json"],HeroScene:["res/atlas/hero.atlas","config/hero_lv.json","config/hero_attup.json","res/atlas/equip.atlas"],AFKBattleScene:["res/atlas/battle.atlas"],ArenaScene:["res/atlas/Arena.atlas"],KnapsackScene:["res/atlas/mainUI1.atlas"],UnionScene:["res/union1.atlas"]};this.m_objModuleViews={NoServerView:"scenes/createRole/NoServer.lh",CreateLoginView:"scenes/createRole/CreateLoginView.lh",ChangeHeadDialog:"scenes/createRole/ChangeHeadDialog.lh",HeroGetDialog:"scenes/shop/HeroGetDialog.lh",ItemGetDialog:"scenes/item/ItemGetDialog.lh",KnapsackTipDialog:"scenes/item/KnapsackTipDialog.lh",SelectHeadDialog:"scenes/createRole/SelectHeadDialog.lh",TxtNoticeView:"scenes/notice/TxtNoticeView.lh",RoleInfoDialog:"scenes/createRole/RoleInfoDialog.lh",CreateRoomDialog:"scenes/mainView/CreateRoomDialog.lh",EnterRoomView:"scenes/mainView/EnterRoomView.lh",InputPwdDialog:"scenes/mainView/InputPwdDialog.lh",HeroDetailDialog:"scenes/hero/HeroDetailDialog.lh",MatchEndRankView:"scenes/match/MatchEndRankView.lh",MatchReadyView:"scenes/match/MatchReadyView.lh",MatchEndView:"scenes/match/MatchEndView.lh",GameSettingLanguageDialog:"scenes/gameSetting/GameSettingLanguageDialog.lh",SkillTipDialog:"scenes/hero/SkillTipDialog.lh",BaseAlertDialog:"scenes/baseAlert/BaseAlertDialog.lh"};this.m_objConfigReource={};this.m_commonResource=new te;this.loadingView=Laya.Browser.window.loadingView;this.ii=100;this.baseUrl="https://cdn-5ejmbrg9nhxc.vultrcdn.com/hero/";if(tt._instance)throw new Error("LayerManager是单例,不可new.");tt._instance=this}static get instance(){return tt._instance==null&&(tt._instance=new tt),tt._instance}init(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),this.initGameLanguage()}initGameLanguage(){tt.GameLanguage_URL="config/language.json",Laya.loader.load(tt.GameLanguage_URL,Laya.Handler.create(this,this.initGameResource))}initGameResource(e){if(e==null)return;let t=tt.instance.getResBySetURL(tt.GameLanguage_URL);I.instance.initLanTypes(t.data),Laya.loader.clearRes(tt.GameLanguage_URL),this.onConfigLoaded()}onError(e){}onConfigLoaded(){let e=new Br;e.ID=4,e.Event="加载语言包信息",De.instance.sendCustumEvent(4,null,e),le.ignoreLang||(A.instance.m_strLanguage=I.instance.getLanIdByType(le.User_Lan)),this.m_UILang="config/lang_english"+A.instance.m_strLanguage+".json",this.m_NomalLang="config/english"+A.instance.m_strLanguage+".json",this.m_ErrorLang="config/error"+A.instance.m_strLanguage+".json",this.m_arrPreResource.push(this.m_UILang),this.m_arrPreResource.push(this.m_NomalLang),this.m_arrPreResource.push(this.m_ErrorLang),this.initResourceURL(this.m_arrPreResource,!0),this.initResourceURL(this.m_arrInitResource,!0),this.addFont1()}addFont1(){Laya.loader.load("res/font/CookieRun Regular.otf",Laya.Loader.TTF).then(()=>{this.loadDemoResource()})}loadDemoResource(){Laya.loader.load(this.resArr,null,Laya.Handler.create(this,this.onPreAssetPress1,null,!1)).then(()=>{z.instance.damageNumPrefab=Laya.loader.getRes("scenes/match/DamageNumber.lh"),z.instance.roleAniPrefab=Laya.loader.getRes("scenes/match/MatchHeroSpr.lh"),z.instance.ruchangEffects=[Laya.loader.getRes("gameIcon/effect/ruchang/effect1.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect2.skel"),Laya.loader.getRes("gameIcon/effect/ruchang/effect3.skel")],z.instance.huaEffect=Laya.loader.getRes("gameIcon/effect/hua/effect.skel"),z.instance.beijiTemplet=Laya.loader.getRes("gameIcon/effect/match/beiji/spine.sk"),z.instance.dunpaiTemplet=Laya.loader.getRes("gameIcon/effect/match/dunpai/spine.sk");var e=z.instance.roleAniPrefab.create();console.log(" ================ roleAniPrefab: "+e),this.onLoadThreeDimen()})}onLoadThreeDimen(){Laya.loader.load(this.m_arrPreResource,Laya.Handler.create(this,this.onPreAssetLoaded),Laya.Handler.create(this,this.onPreAssetPress2,null,!1))}onPreAssetPress1(e){this.va=(e*100*.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetPress2(e){this.va=(e*100*.5+.5).toFixed(0),this.loadingView&&this.va<100&&this.va>this.m_iPrecess&&this.loadingView.loading(this.va)}onPreAssetLoaded(e){if(!e)return;let t=Laya.Browser.now();Nr.instance.initSpotCfgData(),this.initResourceURL(this.m_objModuleReource),this.initResourceURL(this.m_objConfigReource),De.instance.sendCustumEvent(5),ie.intance.preInit(),this.setGlobalLanguage(),De.instance.sendCustumEvent(6),w.intance.event(E.EVENT_BACK_TO_LOGIN),xe.intance.initPreload(),this.loadingView&&this.loadingView.loading(100),console.log("-----------------------preload-time:"+(Laya.Browser.now()-t))}setGlobalLanguage(){let e=tt.instance.getResByURL(this.m_NomalLang);I.instance.initConfigLan(e.data);let t=tt.instance.getResByURL(this.m_UILang);I.instance.initUILan(t.data);let i=tt.instance.getResByURL(this.m_ErrorLang);Ge.instance.initErrData(i.data),this.clearResUrlByRoot(this.m_UILang,!0),this.clearResUrlByRoot(this.m_NomalLang,!0),this.clearResUrlByRoot(this.m_ErrorLang,!0)}initResourceURL(e,t=!1){if(e instanceof Array)this.setResURLArr(e,t);else if(e instanceof Object)for(let i in e)this.setResURLArr(e[i],t)}setResURLArr(e,t){let i,r;for(let n=0;n<e.length;n++)t?(this.m_commonResource.set(e[n],!0),r=this.setResURL(e[n]),i=this.getTypeFromUrl(r),e[n]={url:r,type:i,size:1,priority:1}):this.m_commonResource.get(e[n])?(e.splice(n,1),n--):(r=this.setResURL(e[n]),i=this.getTypeFromUrl(r),e[n]={url:r,type:i,size:1,priority:1})}getTypeFromUrl(e){let{ext:t,typeId:i,main:r,loaderType:n}=Laya.Loader.getURLInfo(e);tt._extReg.lastIndex=e.lastIndexOf(".");let o=tt._extReg.exec(e);return o&&o.length>1?o[1].toLowerCase():"text"}setResURL(e){return e}clearResUrlByRoot(e,t=!1){let i=e;Laya.loader.clearRes(i)}hasFormatEffectUrl(e){return e.indexOf("effect/")>=0}setItemResURL(e){return e&&e.hasOwnProperty("item_img")?this.setResURL("icon/"+e.item_img+".png"):""}setThreeDimenUrl(e){return e?this.setResURL("threeDimen/"+e):""}getThreeDimenUrl(e){let t=this.setResURL("threeDimen/"+e);return Laya.Loader.getRes(t)}getResByURL(e){let t=tt.instance.setResURL(e);return Laya.Loader.getRes(t)}getResBySetURL(e){return Laya.Loader.getRes(e)}loadModuleUrl(e,t=null,i=null,r=1,n=!0){console.log("loadModuleUrl m_strName: "+e),this.ii++;let o=tt.instance.m_objModuleReource[e];if(o==null||o.length<1){t.run();return}Laya.loader.load(o,Laya.Handler.create(this,this.loadItemComplete,[t,o]),Laya.Handler.create(this,this.onLoadProgress,[e],!1),i,r,n,this.ii.toString())}loadItemComplete(e,t){this.usedUrlDic||(this.usedUrlDic=new te);for(let i in t){let r=t[i].url,n=this.usedUrlDic.get(r);n?this.usedUrlDic.set(r,++n):this.usedUrlDic.set(r,1)}e.run()}clearModuleUrl(e){console.log("clearModuleUrl m_strName: "+e);let t=tt.instance.m_objModuleReource[e];for(let i in t){let r=t[i].url;if(this.usedUrlDic){let n=this.usedUrlDic.get(r);n-=1,n<1?(this.usedUrlDic.remove(r),Laya.loader.clearRes(r)):this.usedUrlDic.set(r,n)}}}onLoadProgress(e,t){}loadResource(e,t=null,i=null,r=null,n=1,o=!0){Laya.loader.load(e,t,i,r,n,o)}getCountryIcon(e){return this.setResURL("gameIcon/country/img_"+e+".png")}getHeroEggIcon(e){return this.setResURL("gameIcon/hero/heroEgg/img_"+e+".png")}getHeroEggBigIcon(e){return this.setResURL("gameIcon/hero/heroEggBig/img_"+e+".png")}getHeroHeadIcon(e){return this.setResURL("gameIcon/hero/heroHead/img_"+e+".png")}getHeroQuality(e){return this.setResURL("gameIcon/hero/heroQuality/img_"+e+".png")}getHeroBackIcon(e){return this.setResURL("gameIcon/hero/heroDetail/img_hero_di_"+e+".png")}getHeroFrontIcon(e){return this.setResURL("gameIcon/hero/heroDetail/img_hero_"+e+".png")}getItemIcon(e){return this.setResURL("gameIcon/items/item/img_"+e+".png")}getItemBgIcon(e){return this.setResURL("gameIcon/items/itemBg/img_"+e+".png")}getItemBigIcon(e){return this.setResURL("gameIcon/items/itemBig/img_"+e+".png")}getItemQualityIcon(e){return this.setResURL("gameIcon/items/itemQuality/img_"+e+".png")}getMoneyIcon(e){return this.setResURL("gameIcon/items/money/img_"+e+".png")}getAttrIcon(e){return this.setResURL("gameIcon/attr/img_attr_"+e+".png")}getSkillIcon(e,t=!1){let i;return t?i=this.setResURL("gameIcon/skill/skills/img_big_"+e+".png"):i=this.setResURL("gameIcon/skill/skills/img_"+e+".png"),i}getPlayerIcon(e){return parseInt(e)>0?this.setResURL("gameIcon/head/headCircle/img_"+e+".png"):e}getSceneBgUrl(e){return"scene/"+e+".jpg"}clearSKinUrl(e){for(let t in e)e[t]instanceof String&&e[t].indexOf("skincolor")==-1&&Laya.loader.clearRes(e[t]);e=[]}getFunctionIcon(e){return this.setResURL("icon/functionIcon/"+e+".png")}getNewFunIcon(e){return this.setResURL("icon/newFunIcon/"+e+".png")}getSoundURL(e,t=".ogg"){let i;return i=this.setResURL("mp3/"+e+t),i}getSoundURLogg(e){let t;return t=this.setResURL("mp3/"+e),t}getSceneUrl(e){return"scene/sceneBg/"+e+".jpg"}getMianSysIcon(e){return this.setResURL("icon/mainSysIcon/btn_"+e+".png")}getEffectUrl(e){return this.setResURL("effect/"+e+".json")}getLoadingUrl(e){return this.setResURL("effect/"+e)}getGuangImg(e){return this.setResURL("swf/"+e+".png")}getGuildProofBg(e){return this.setResURL("scene/guild/proof/"+e+"/1.png")}getGuildProofHots(e){return this.setResURL("scene/guild/proof/"+e+"/"+e+"/"+e+".json")}getShareImgUrl(e,t=!1,i=!1){let r;return i?e:(e=e+".jpg",t?r="https://mutantbox.8686c.com/16/qa/common/share/"+e:r="https://cdn.test.com/16/qa/common/share/"+e,r)}getHeadUrl(e){return"common/common_icon/"+e+".png"}getMapImg(e){return"gameIcon/map/"+e+"/img_map.jpg"}getMapPrefab(e){return"gameIcon/map/map_"+e+".lh"}clearCache(){}getHeroHeadRes(e,t){return le.Res==0?"gameIcon/hero/heroHead/img_"+e+".png":this.baseUrl+`${e}/${t}.png`}getHeroSkRes(e,t){return le.Res==0?`gameIcon/hero/heroSk/${e}/img_hero.skel`:this.baseUrl+`${e}/${t}/img_hero.skel`}};tt._extReg=/\.(\w+)\??/g;var G=tt;var Uu=class extends Laya.Dialog{constructor(){super();this.canClickMask=!0;this.preinitialize()}_onClick(t){let i=t.target;if(i)switch(i.name){case Laya.Dialog.CLOSE:break;case Laya.Dialog.CANCEL:break;case Laya.Dialog.SURE:break;case Laya.Dialog.NO:break;case Laya.Dialog.OK:break;case Laya.Dialog.YES:this.destroy();break}}preinitialize(){this.init()}init(){}createChildren(){super.createChildren(),this.createUI(),this.initialize()}createUI(){}initialize(){this.addEvent(),this.initData()}addEvent(){}initData(){}removeEvent(){}disposeDialog(){Laya.Dialog.manager.close(this)}destroy(t=!0){this.removeEvent(),this._view&&(this._view.destroy(),this._view=null),super.destroy()}sendData(t,i=null){i==null&&(i=[])}};var Vu=class extends Uu{constructor(){super();this.destroyDoCancel=!1}addEvent(){this.okBtn=this._alertView.getChildByName("okBtn"),this.cancleBtn=this._alertView.getChildByName("cancleBtn"),this.alertTitle=this._alertView.getChildByName("alertTitle"),this.descTf=this._alertView.getChildByName("alertDesc"),this._alertView.on(Laya.Event.CLICK,this,this.onClickEvent)}createUI(){this.createAlert()}createAlert(){this._alertView||(this._alertView=new Laya.View),this.addChild(this._alertView)}onClickEvent(t){let i=t.target;i.name=="okBtn"?(this._okHandler&&this._okHandler.runWith(null),this.close()):i.name=="cancleBtn"&&(this.destroyDoCancel=!1,this._cancelHandler&&this._cancelHandler.runWith(null),this.close())}alert(t,i,r,n=null,o=!1,s=null){let l=66;this._okHandler=i,this._cancelHandler=r,this.destroyDoCancel=o,t&he.YES&&!(t&he.NO)?(this.okBtn.x=this._alertView.width-this.okBtn.width>>1,this.cancleBtn.visible=!1,this.okBtn.label="Sure"):t&he.NO&&!(t&he.YES)?this.okBtn.visible=!1:t&he.YES&&t&he.NO,n&&this.descTf&&(n instanceof Array?(this.alertTitle.text=n[0],this.descTf.text=n[1]):this.descTf.text=n),s&&s.runWith(this)}removeSelf(){return this.destroyDoCancel&&this._cancelHandler&&this._cancelHandler.run(),super.removeSelf()}removeEvent(){super.removeEvent(),this._okHandler=null,this._cancelHandler=null}};var Yn=class extends Laya.Script{onAdded(){this.m_iLayerType=V.M_PANEL,this.m_iPositionType=V.CENTER,this.m_canTouch_all=!1,this.m_ioffsetX=0,this.m_ioffsetY=0,this.m_arrMapEvent=[],this.m_iAdaptation_Top=0,this.m_iAdaptation_Buttom=0,this.m_bAutoResizeWidth=!1,this.m_bAutoResizeHeith=!1,this.m_bAutoResize=!1,this.hideLoadingBySelf=!1}get loadPaths(){return this._loadPaths}onStageResize(){}setIphoneX(){if(le.m_bIsIphoneX&&this._view){let t=this._view.numChildren,i=[];if(t)for(let r=0,n=t;r<n;r++){let o=this._view.getChildAt(r);o.name==="ui_top"?isNaN(o.top)?o.y+=this.m_iAdaptation_Top:o.top+=this.m_iAdaptation_Top:o.name=="ui_bottom"&&(o.bottom+=this.m_iAdaptation_Buttom)}}}onAwake(){le.m_bIsIphoneX&&(this.m_iAdaptation_Top=le.IPHONEX_TOP,this.m_iAdaptation_Buttom=le.IPHONEX_BUTTOM),this.loadPaths&&this.loadPaths.length?(this.hideLoadingBySelf=!0,Laya.loader.load(this.loadPaths,Laya.Handler.create(this,this.loadPathsComplete))):(this.createUI(),this.createUILater())}createUILater(){this.createUIEnd()}loadPathsComplete(){this.createUI(),this.loadPathsCompleteLater()}loadPathsCompleteLater(){this.createUIEnd(),this.onStageResize(),Y.instance.hideLoading()}createUI(){}createUIEnd(){this.setIphoneX(),this._addEvent(),this.initData(),this.onLoaded()}_addEvent(){this.btn_com_help&&this.btn_com_help.on(Laya.Event.CLICK,this,this.onHelp),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.addEvent()}addEvent(){}initData(){}onLoaded(){}removeEvent(){}backToPreScene(){let t=xe.intance.getPreSceneData();xe.intance.setCurrentScene(t[0],t[1],t[2],t[3],!1)}setToMainScene(){xe.intance.setCurrentScene(de.M_SCENE_MAIN,!0,!0,1)}addMapEvent(t,i,r,n,o=null){t.on(i,r,n,o),this.m_arrMapEvent.push(t)}removeAllMapEvent(){if(this.m_arrMapEvent){for(let t=0;t<this.m_arrMapEvent.length;t++)this.m_arrMapEvent[t].offAll();this.m_arrMapEvent.splice(0,this.m_arrMapEvent.length),this.m_arrMapEvent=null}}dispose(){console.log("<<< BaseView.dispose() className: "+this.constructor.name+" ==== name: "+this._view.name+" ==== m_strName: "+this.m_strName),Laya.stage.off(Laya.Event.RESIZE,this,this.onStageResize),this.btn_com_help&&this.btn_com_help.off(Laya.Event.CLICK,this,this.onHelp),this.removeEvent(),this.removeAllMapEvent(),Z.intance.removeViewFromModuleManger(this),this.m_arrMapEvent=null,this.m_strName&&this.m_strName!=""||(this.m_strName=this.constructor.name),G.instance.clearModuleUrl(this.m_strName),this.m_strName=null,this._view&&(Laya.timer.clearAll(this._view),Laya.Tween.clearAll(this._view),this._view.offAll(),this._view.removeSelf(),this._view.destroy(!0),this._view=null),Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}sendData(t,i=null,r=null,n=!0){i==null&&(i=[])}get btn_com_help(){return this._view?this._view.getChildByName("btn_com_help"):null}get btn_back(){return this._view?this._view.getChildByName("btn_back"):null}onHelp(){this.m_helpId&&Z.intance.openModule(h.HelpDialog,this.m_helpId)}resetView(){this.onStageResize()}};var Os=class a{constructor(){this.mail_contract=null}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){typeof window.ethereum>"u"||(this.mail_contract=new window.web3.eth.Contract(B.SERIESHEROMALL_ABI,B.SERIESHEROMALL_ADDRESS))}async initData(){this.mailList=new te,Y.instance.showLoading(!0);let e=await this.mail_contract.methods.getPricesLength().call();for(let t=0;t<e;t++){let i=await this.mail_contract.methods.getPriceByIndex(t).call(),r=new Wn;if(r.type=2,r.idx=t,Object.assign(r,i),this.mailList.set(r.idx,r),r.showPrice=window.web3.utils.fromWei(r.currentPrice+""),r.currentToken!=B.ADDRESS0){let n=new window.web3.eth.Contract(B.TOKEN_ERC20ABI,r.currentToken);r.tokenContract=n,r.currentTokenName=await n.methods.symbol().call()}else r.currentTokenName="BNB"}Y.instance.hideLoading()}async recruit(e){if(Y.instance.showLoading(!0),!await this.mail_contract.methods.accountIsInWhiteList(e,ue.instance.walletAddress).call()){Y.instance.hideLoading(),w.intance.event(E.EVENT_HERO_DRAW_BACK,[I.instance.getLanguage(6055)]);return}if(this.isOpen=await this.mail_contract.methods.getIsOpen().call(),!this.isOpen){Y.instance.hideLoading(),w.intance.event(E.EVENT_HERO_DRAW_BACK,[I.instance.getLanguage(12)]);return}let i=this.mailList.get(e);if(i.totalSupply===i.sellAmount){Y.instance.hideLoading(),w.intance.event(E.EVENT_HERO_DRAW_BACK,[I.instance.getLanguage(13)]);return}let r=i.currentPrice,n=i.currentToken,o="0",s="18";n!=B.ADDRESS0?(o=await i.tokenContract.methods.balanceOf(ue.instance.walletAddress).call(),s=await i.tokenContract.methods.decimals().call()):o=window.web3.eth.getBalance(ue.instance.walletAddress);let l=Qt.fromWei(r,s,2);if(parseFloat(o)<parseFloat(l)){Y.instance.hideLoading(),w.intance.event(E.EVENT_HERO_DRAW_BACK,[I.instance.getLanguage(14)]);return}if(n!=B.ADDRESS0){if(!await ue.instance.allowanceAddressByTokenAddress(B.SERIESHEROMALL_ADDRESS,n)){Y.instance.hideLoading(),w.intance.event(E.EVENT_HERO_DRAW_BACK,[I.instance.getLanguage(15)]);return}await this.mail_contract.methods.recruit(e).send({from:ue.instance.walletAddress},(u,p)=>{if(u){Y.instance.hideLoading(),w.intance.event(E.EVENT_HERO_DRAW_BACK,[I.instance.getLanguage(16)]);return}})}else await this.mail_contract.methods.recruit(e).send({from:ue.instance.walletAddress,value:r},(c,u)=>{if(c){Y.instance.hideLoading(),w.intance.event(E.EVENT_HERO_DRAW_BACK,[I.instance.getLanguage(16)]);return}})}};var Pe=class{};Pe.FUN_MYHOME=1,Pe.FUN_STORE=2,Pe.FUN_TRAVEL=3,Pe.FUN_PVP=1011,Pe.FUN_PVPMULTI=7001,Pe.FUN_GUILDPHOTO=1004,Pe.FUN_PET=1003,Pe.FUN_1V1=1014,Pe.FUN_THUMB=9005,Pe.FUN_THUMB_RANKING_REWARD=3008,Pe.FUN_BOYFRIEND=4005,Pe.FUN_TIMESTAGE=1006,Pe.FUN_FARM_MODEL=1008611,Pe.FUN_GROUP_PHOTO=1008612,Pe.FUN_TV=1001,Pe.FUN_PRAY=1005,Pe.FUN_WORKSHOP=1006,Pe.FUN_SHOP_CLOTH=4001,Pe.FUN_SHOP_PRAY=2108,Pe.FUN_SHOP_1V1=2119,Pe.FUN_SHOP_PVP=2107,Pe.FUN_SHOP_THUMB=2113,Pe.FUN_SHOP_GUILD=2111,Pe.FUN_FIRST_RECHARGE=2201,Pe.FUN_ACTIVITY_CENTER=2002,Pe.FUN_LIMITRECRUIT=2003;var Ir=class extends Laya.Script{constructor(){super()}};Ir.INIT_LUCKDEAW_EVENT="DigEvent:INIT_DIG_EVENT";var zu=class extends Yn{constructor(t){super();this.currTab=0;this.type=1;this.hasFree=!1;this.type=t}get view(){return this._view}createUI(){this._view=new Laya.View,this.m_iPositionType=V.UP,this.onStageResize(),w.intance.on(Ir.INIT_LUCKDEAW_EVENT,this,this.luckdrawevevt),w.intance.on(E.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),this.hideLoadingBySelf=!0,this.view.btn_myhero.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.view.btn_myhero]),this.view.box_skill.on(Laya.Event.CLICK,this,this.onShowSkill),this.view.btn_recruit1.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.view.btn_recruit1]),this.view.btn_heroshop.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.view.btn_heroshop]),this.view.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.view.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.view.listPanel1.vScrollBarSkin="",this.view.listPanel2.vScrollBarSkin="",this.view.animation_hreo.visible=!0,this.view.box_1.visible=!1,this.view.box_2.visible=!1,this.view.animation_hreo._complete=Laya.Handler.create(this,this.stopAni,[6]),this.view.tf_congratulation.text=I.instance.getLanguage(131),this.view.tf_congratulation.visible=!1,this.view.img_bg.visible=!1,this.initLuckDrawView(),ft.instance.heroOutputRate();let t=(Laya.stage.height-le.DESIGN_HEIGHT)/2}setTab(t){for(let i=1;i<3;i++)t==i?this.view["btn_"+i].skin="common/common_btn/btn_tab1.png":this.view["btn_"+i].skin="common/common_btn/btn_tab2.png"}async initLuckDrawView(){await ft.instance.initData(),await Os.instance.initData(),this.hasFree=await ft.instance.hasFree(),!this.destroyed&&(this.type==Pe.FUN_LIMITRECRUIT?this.onClickTab(2):this.onClickTab(1))}onClickTab(t){if(this.currTab!=t)if(this.setTab(t),t==1)if(this.hasFree)this.view.img_bg.visible=!0,this.view.box_1.visible=!0,this.view.box_2.visible=!1,this.view.label_cost.text=I.instance.getLanguage(30);else{this.view.box_1.visible=!1,this.view.box_2.visible=!0;let i=ft.instance.mailList;if(this.destroyed)return;i&&i.values.length>0?(this.getItemByStarAndMintLevel(1,1)?this.view.box1_draw_1.dataSource=this.getItemByStarAndMintLevel(1,1):this.view.box1_draw_1.visible=!1,this.getItemByStarAndMintLevel(1,2)?this.view.box1_draw_2.dataSource=this.getItemByStarAndMintLevel(1,2):this.view.box1_draw_2.visible=!1,this.getItemByStarAndMintLevel(2,3)?this.view.box1_draw_3.dataSource=this.getItemByStarAndMintLevel(2,3):this.view.box1_draw_3.visible=!1,this.getItemByStarAndMintLevel(3,4)?this.view.box1_draw_4.dataSource=this.getItemByStarAndMintLevel(3,4):this.view.box1_draw_4.visible=!1,this.view.listPanel1.visible=!0,this.view.listPanel2.visible=!1,this.view.tf_noData.visible=!1):(this.view.tf_noData.visible=!0,this.view.listPanel1.visible=!1,this.view.listPanel2.visible=!1)}else{this.view.box_1.visible=!1,this.view.box_2.visible=!0;let i=Os.instance.mailList;if(this.destroyed)return;i&&i.values.length>0?(i.get(0)?this.view.box2_draw_1.dataSource=i.get(0):this.view.box2_draw_1.visible=!1,i.get(1)?this.view.box2_draw_2.dataSource=i.get(1):this.view.box2_draw_2.visible=!1,i.get(2)?this.view.box2_draw_3.dataSource=i.get(2):this.view.box2_draw_3.visible=!1,this.view.listPanel1.visible=!1,this.view.listPanel2.visible=!0,this.view.tf_noData.visible=!1):(this.view.tf_noData.visible=!0,this.view.listPanel1.visible=!1,this.view.listPanel2.visible=!1)}}getItemByStarAndMintLevel(t,i){let r=ft.instance.mailList;for(let n of r.values){let o=n;if(o.rarity===t+""&&o.mineralLevel===i+"")return o}return!1}onStageResize(){super.onStageResize();let t=Laya.stage.height-le.DESIGN_HEIGHT;this.view.la_img_bg.height+=t,this.view.listPanel2.height+=t}onShowSkill(){Z.intance.openModule(h.SkillTipDialog)}createUIEnd(){this.view.box_sucess2.visible=!1,this.view.btn_recruit1.visible=!0}stopAni(t){console.log("stopAni: "+t),this.view.animation_hreo.paused(),this.view.animation_hreo.stop()}handleClickBtn(t){switch(t){case this.view.btn_myhero:Z.intance.openModule(h.MyHeroView),console.log("My hero");break;case this.view.btn_heroshop:console.log("Hero shop");break;case this.view.btn_recruit1:console.log("Hero Recruit"),this.drawCard();break}}async drawCard(){let t=await ft.instance.recruitFree()}onDrawBack(t){if(t instanceof Array)for(let i of t){let r=i,n=this.view.box_card;n.dataSource=r,this.startAni()}else Ge.instance.showErrorWord(t)}startAni(){this.view.box_sucess2.visible=!0,this.view.animation_hreo.paused(),this.view.animation_hreo.play(0,!1),this.view.tf_congratulation.visible=!0,Laya.timer.once(1500,this,this.showCard)}showCard(){this.hasFree?this.view.box_1.visible=!1:this.view.box_2.visible=!1,this.view.box_sucess2.visible=!0,this.view.box_skill.visible=!1,this.view.btn_recruit1.visible=!1,Laya.Tween.to(this.view.box_card,{scaleX:1.5,scaleY:1.5},100,null,Laya.Handler.create(this,this.onScaleEnd))}onScaleEnd(){Laya.Tween.to(this.view.box_card,{scaleX:1.4,scaleY:1.4},100,null,Laya.Handler.create(this,this.onScaleEnd1))}onScaleEnd1(){}luckdrawevevt(){}removeEvent(){w.intance.off(Ir.INIT_LUCKDEAW_EVENT,this,this.luckdrawevevt),w.intance.off(E.EVENT_HERO_DRAW_BACK,this,this.onDrawBack)}};var Fu=class extends Ht{constructor(){super()}get view(){return this._view}dispose(){super.dispose()}createUI(){this._view=new Laya.View,this.addChild(this._view)}};var Gu=class extends Ht{constructor(t){super();this.vo=t}get view(){return this._view}dispose(){super.dispose()}createUI(){this._view=new Laya.View,this.addChild(this._view)}initData(){this.view.img_icon.skin=`gameIcon/attricon/img_daoju_${this.vo.type-1e3}.png`,this.view.label_hp.text=`${I.instance.getLanguage(this.vo.name)} : ${this.getShowValue(this.vo.value)}`,this.view.label_level.text=I.instance.getLanguage("304")+` : ${this.vo.level}`,this.view.lable_desc.text=`${I.instance.getLanguage(this.vo.desc)}`}getShowValue(t){return this.vo.type===1003||this.vo.type===1005?(parseFloat(t+"")*100).toFixed(1)+"%":parseInt(t)}};var it=class a{static toFixed(e,t){if(e.toString().indexOf(".")==-1)return e;{let i=e.toFixed(t);return parseFloat(i)}}static toFixedWithPercent(e,t,i="+"){let r;return e.toString().indexOf(".")==-1?r=i+e*100+"%":(t=t-2,t<0&&(t=0),r=i+(e*100).toFixed(t)+"%"),r}static getGoldStr(e){let t;return e>999999?t=parseInt(String(e/1e5))+"m":t=e,t}static numStringFormat(e){let t=e;return A.instance.m_strLanguage==2?e.length>4&&(t=String(e).replace(/(\d)(?=(\d{3})+$)/g,"$1 ")):t=String(e).replace(/(\d)(?=(\d{3})+$)/g,"$1,"),t}static numSimple(e){let t=e,i=parseInt(parseInt(t)/1e3+"");return i>0?i+"k":a.numStringFormat(t)}static numStringFormat2(e){let t;if(e>999999)t=a.getNumStr(e,1e6,"M");else if(e>999)t=a.getNumStr(e,1e3,"K");else return e+"";return t}static getNumStr(e,t,i){return parseInt(Math.floor(e/t)+"")+i}static getTimeStr(e){let t;return e<3600?t=I.instance.getLanguage(9024,Math.ceil(e/60)):e<3600*24?t=I.instance.getLanguage(9025,Math.ceil(e/3600)):t=I.instance.getLanguage(9025,Math.ceil(e/(3600*24))),t}static BigInt(e){return 0}static isInteger(e){return e%1===0}static formatNumber(e,t=2){return Number.isInteger(e)?e:parseFloat(e.toFixed(2))}static filterNumFormat(e,t=2){if(!e)return e;if(e<1e3&&e>0)return parseFloat(e).toFixed(t);if(e==="0.00")return e;var i=[{value:1,symbol:""},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"}],r=/\.0+$|(\.[0-9]*[1-9])0+$/,n;for(n=i.length-1;n>0&&!(e>=i[n].value);n--);let o=(e/i[n].value).toString();return o.indexOf(".")>-1&&(t>0?o=o.substr(0,o.indexOf(".")+t+1):o=o.substr(0,o.indexOf(".")+t)),o.replace(r,"$1")+i[n].symbol}static fromWei(e,t,i=0){if(!e)return 0;let r=e.length-t+i;if(r<=0)return 0;let n=e.toString().slice(0,r);if(i){let o=n.length-i;if(o<=0){let s="0.";for(let l=0;l<Math.abs(o);l++)s+="0";n=s+n}else n=n.slice(0,n.length-i)+"."+n.slice(n.length-i)}return n}};var R=class{static RECV_MSG(e){return"msg_"+e}};R.MSG_CLOSE_SESSION_S2C=99998,R.MSG_UNION_GET_MY_UNION_C2S=12001,R.MSG_UNION_GET_MY_UNION_S2C=12002,R.MSG_UNION_GET_RECOMMEND_UNION_C2S=12003,R.MSG_UNION_GET_RECOMMEND_UNION_S2C=12004,R.MSG_UNION_CREATE_UNION_C2S=12005,R.MSG_UNION_CREATE_UNION_S2C=12006,R.MSG_UNION_UPDATE_UNION_C2S=12007,R.MSG_UNION_UPDATE_UNION_S2C=12008,R.MSG_UNION_JOIN_UNION_C2S=12009,R.MSG_UNION_JOIN_UNION_S2C=12010,R.MSG_UNION_LEVEL_UNION_C2S=12011,R.MSG_UNION_LEVEL_UNION_S2C=12012,R.MSG_UNION_GET_UNION_MEMBER_C2S=12013,R.MSG_UNION_GET_UNION_MEMBER_S2C=12014,R.MSG_UNION_GET_MY_UNION_VO_C2S=12015,R.MSG_UNION_GET_MY_UNION_VO_S2C=12016,R.MSG_UNION_GET_UNION_MEMBER_APPLY_C2S=12020,R.MSG_UNION_GET_UNION_MEMBER_APPLY_S2C=12021,R.MSG_UNION_GET_UNION_MEMBER_APPLY_JOIN_C2S=12022,R.MSG_UNION_GET_UNION_MEMBER_APPLY_JOIN_S2C=12023,R.MSG_UNION_GET_UNION_MEMBER_APPLY_AGREE_C2S=12024,R.MSG_UNION_GET_UNION_MEMBER_APPLY_AGREE_S2C=12025,R.MSG_UNION_GET_UNION_MEMBER_APPLY_REFUSE_C2S=12026,R.MSG_UNION_GET_UNION_MEMBER_APPLY_REFUSE_S2C=12027,R.MSG_UNION_GET_UNION_MEMBER_ADMIN_SET_C2S=12028,R.MSG_UNION_GET_UNION_MEMBER_ADMIN_SET_S2C=12029,R.MSG_UNION_GET_UNION_MEMBER_ADMIN_UNSET_C2S=12030,R.MSG_UNION_GET_UNION_MEMBER_ADMIN_UNSET_S2C=12031,R.MSG_UNION_GET_UNION_MEMBER_REMOVE_C2S=12032,R.MSG_UNION_GET_UNION_MEMBER_REMOVE_S2C=12032,R.MSG_UNION_GET_UNION_MEMBER_LEADER_TRANSFER_C2S=12033,R.MSG_UNION_GET_UNION_MEMBER_LEADER_TRANSFER_S2C=12034,R.MSG_UNION_GET_UNION_MEMBER_APPLY_HISTORY_C2S=12040,R.MSG_UNION_GET_UNION_MEMBER_APPLY_HISTORY_S2C=12041,R.MSG_UNION_GET_UNION_MANAGER_INVITATION_C2S=12042,R.MSG_UNION_GET_UNION_MANAGER_INVITATION_S2C=12043,R.MSG_COMM_GET_RED_HOT_C2S=14001,R.MSG_COMM_GET_RED_HOT_S2C=14002,R.MSG_FRIEND_GET_RECOMMEND_FRIEND_S2C=18001,R.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_S2C=18001,R.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_JOIN_S2C=18001,R.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_AGREE_S2C=18001,R.MSG_FRIEND_GET_FRIEND_MEMBER_APPLY_REFUSE_S2C=18001,R.MSG_FRIEND_GET_FRIEND_MEMBER_REMOVE_S2C=18001,R.MSG_FRIEND_GET_RECOMMEND_FRIEND_C2S=18001,R.MSG_FRIEND_GET_FRIEND_MEMBER_C2S=18001,R.MSG_WALLET_UPDATE_WALLET_ITEM_S2C=19001,R.MSG_WALLET_TRANSFER_WALLET_S2C=19002,R.MSG_UNION_PERSONAL_BOUNS_S2C=15003,R.MSG_UNION_SET_BOUNS_RATE_S2C=15004,R.MSG_UNION_BATTLE_CD_C2S=15e3,R.MSG_UNION_BATTLE_CD_S2C=15001,R.MSG_UNION_BATTLE_DIGGINGS_STATUS_S2C=15002,R.MSG_UNION_BATTLE_BOUNS_S2C=15008,R.MSG_COMM_SCROLL_MSG_S2C=16001,R.MSG_ROLE_UPDATE_KNEAD_FACE_S2C=2700,R.MSG_BUY_SUIT_NPC_C2S=87,R.MSG_BUY_SUIT_NPC_S2C=88,R.MSG_INIT_WISHING_TREE_C2S=112,R.MSG_WISHING_TREE_C2S=113,R.MSG_WISHING_TREE_FREE_C2S=114,R.MSG_INIT_WISHING_TREE_EXCHANGE_C2S=115,R.MSG_WISHING_TREE_EXCHANGE_REWARD_C2S=116,R.MSG_WISHING_TREE_FREE_S2C=117,R.MSG_INIT_WISHING_TREE_S2C=118,R.MSG_WISHING_TREE_S2C=119,R.MSG_INIT_WISHING_TREE_EXCHANGE_S2C=120,R.MSG_INIT_SUIT_COLLECT_S2C=130,R.MSG_SUIT_COLLECT_REWARD_C2S=131,R.MSG_ACTIVE_CHECKIN_INIT_C2S=2310,R.MSG_ACTIVE_CHECKIN_INIT_S2C=2311,R.MSG_ACTIVE_CHECKIN_GET_REWARD_C2S=2312,R.MSG_ACTIVE_CHECKIN_GET_REWARD_S2C=2313,R.MSG_ACTIVE_DRAWING_SHOP_INIT_C2S=2320,R.MSG_ACTIVE_DRAWING_SHOP_INIT_S2C=2321,R.MSG_ACTIVE_DRAWING_SHOP_BUY_C2S=2322,R.MSG_ACTIVE_DRAWING_SHOP_BUY_S2C=2323,R.MSG_INIT_ACTIVE_TASK_C2S=800,R.MSG_INIT_ACTIVE_TASK_S2C=801,R.MSG_FINISH_ACTIVE_TASK_C2S=802,R.MSG_INIT_EVERYDAY_QUEST_C2S=83,R.MSG_INIT_EVERYDAY_QUEST_S2C=84,R.MSG_FINISH_EVERYDAY_QUEST_C2S=85,R.MSG_REWARD_ACTIVE_SCORE_GIFT_C2S=176,R.MSG_ACTIVE_SCORE_PRAY_C2S=177,R.MSG_UPDATE_VITALITY_REWARD_S2C=2401,R.MSG_GET_PVP_GRADE_S2C=157,R.MSG_SYS_BASE_INFO_S2C=158,R.MSG_GET_PVP_RANK_RESULT_S2C=278,R.MSG_INVITATIONCENTER_INIT_INVITATION_CODE_C2S=2003,R.MSG_INVITATIONCENTER_INIT_INVITATION_CODE_S2C=2008,R.MSG_INVITATIONCENTER_RECEIVE_MY_CODE_REWARD_C2S=2006,R.MSG_INVITATIONCENTER_RECEIVE_MY_RECOMMEND_REWARD_S2C=2007,R.MSG_INVITATIONCENTER_FILL_IN_THE_INVITATION_CODE_C2S=2004,R.MSG_INVITATIONCENTER_FILL_IN_THE_INVITATION_CODE_S2C=2005,R.MSG_SHARE_INIT_S2C=3e3,R.MSG_SHARE_GET_C2S=3001,R.MSG_SHARE_GET_S2C=3002,R.MSG_UPDATE_SHARE_POPUP_DATA_S2C=3003,R.MSG_CLIENT_ORDER_UPDATE_C2S=3004,R.MSG_REC_SHARE_SHOP_ITEMS_C2S=3005,R.MSG_SHARE_SHOP_ITEMS_RETURN_S2C=3006,R.MSG_DIG_INIT_C2S=4001,R.MSG_LUCKDRAW_INIT_S2C=5002;var Ns=class{};var ju=class{};var qu=class a{constructor(){this.create_union_contract=null;this.member_sys_contract=null;this.union_war_contract=null;this.price=""}static get instance(){return a._instance||(a._instance=new a),a._instance}async init(){this.memberList=new te,!(typeof window.ethereum>"u")&&(this.create_union_contract=new window.web3.eth.Contract(B.CREATE_UNION_ABI,B.CREATE_UNION_ADDRESS),this.member_sys_contract=new window.web3.eth.Contract(B.UNION_NUMBER_SYS_ABI,B.UNION_NUMBER_SYS_ADDRESS),this.union_war_contract=new window.web3.eth.Contract(B.UNION_WAR_ABI,B.UNION_WAR_ADDRESS))}async poolEarned(e,t){let i=await this.union_war_contract.methods.earned(t).call();return window.web3.utils.fromWei(i)}async claim_pool_reward(e,t,i){Y.instance.showLoading(!0),await this.union_war_contract.methods.claimReward(e,t,i).send({from:ue.instance.walletAddress},(r,n)=>{if(r)return Y.instance.hideLoading(),!1})}async claim_member_reward(){Y.instance.showLoading(!0);let{sendBeanDto:e}=await pe.requestPost("cybertron-sys-api/api/v1/alliance/bonus/receiveBonus",{}),t=new WalletValidateItemVo;return Object.assign(t,e),await this.union_war_contract.methods.memberClaim(t.tokenAddress,t.to,t.amount,t.timestamp,t.hash,t.r,t.s,t.v).send({from:ue.instance.walletAddress},(i,r)=>{if(i)return Y.instance.hideLoading(),!1}),!0}async quitOccupy(e,t,i){Y.instance.showLoading(!0),await this.union_war_contract.methods.quitOccupy(e,t,i).send({from:ue.instance.walletAddress},(r,n)=>{if(r)return Y.instance.hideLoading(),!1})}async setManagerBonusPercent(e,t,i){Y.instance.showLoading(!0),fi.instance.SendData(15901,{accountIds:t,bonusPercents:i})}async queryNextGetTime(e,t){return""}async donate(e,t){Y.instance.showLoading(!0),fi.instance.SendData(13e3,{itemId:e,amount:t})}async getCreateCost(){let e=await this.create_union_contract.methods.getCreateUnionPrice().call();return this.price=window.web3.utils.fromWei(e[1]),this.price}async createUnion(e,t,i=""){Y.instance.showLoading(!0),this.price||await this.getCreateCost();let r=await ue.instance.getBalance();return parseInt(r)<parseInt(this.price)?(Y.instance.hideLoading(),Ve.moneyNotEnought(),!1):await ue.instance.allowanceAddress(B.CREATE_UNION_ADDRESS)?(await this.create_union_contract.methods.createUnion(e,t,i).send({from:ue.instance.walletAddress},(o,s)=>{if(o)return Y.instance.hideLoading(),!1}),!0):(Y.instance.hideLoading(),be.instance.notice(I.instance.getLanguage(15)),!1)}async getMemberList(e="1"){let t=await pe.requestPost("cybertron-sys-api/api/v1/allianceMember/memberList",{unionId:e});this.memberList=new te;for(let i of t){let r=new ju;Object.assign(r,i),this.memberList.set(r.accountId,r)}return this.memberList}async getMemberApplyList(e="1"){let t=await pe.requestPost("cybertron-sys-api/api/v1/allianceApply/applyList");GuildModel.instance.applyMembers=new te;for(let i of t){let r=new Ns;Object.assign(r,i),GuildModel.instance.applyMembers.set(r.accountId,r)}return GuildModel.instance.applyMembers}async getMemberApplyHistoryList(e="1"){let t=await pe.requestPost("cybertron-sys-api/api/v1/allianceApply/historyRecordList"),i=new te;for(let r of t){let n=new Ns;Object.assign(n,r),i.set(n.accountId,n)}return i}async editUnion(e,t,i,r=""){Y.instance.showLoading(!0),await this.create_union_contract.methods.updateUnionProfile(e,t,i,r).send({from:ue.instance.walletAddress},(n,o)=>{if(n)return Y.instance.hideLoading(),!1})}async transferUnion(e,t){Y.instance.showLoading(!0),await this.create_union_contract.methods.transferUnion(e,t).send({from:ue.instance.walletAddress},(i,r)=>{if(i)return Y.instance.hideLoading(),!1})}async applyJoinUnion(e,t){await pe.requestPost("cybertron-sys-api/api/v1/allianceMember/applyJoinUnion",{unionId:t}),be.instance.notice(I.instance.getLanguage(2005))}async confirmApplyJoin(e,t){Y.instance.showLoading(!0),await this.member_sys_contract.methods.confirmApplyJoin(e,t).send({from:ue.instance.walletAddress},(i,r)=>{if(i)return Y.instance.hideLoading(),!1})}async refuseApplyJoin(e,t){let i=await pe.requestPost("cybertron-sys-api/api/v1/allianceMember/refuseApplyJoin",{accountId:e,unionId:t});w.intance.event(R.RECV_MSG(R.MSG_UNION_GET_UNION_MEMBER_APPLY_REFUSE_S2C),[[i]])}async kickOutUnion(e,t){Y.instance.showLoading(!0),await this.member_sys_contract.methods.kickOutUnion(e,t).send({from:ue.instance.walletAddress},(i,r)=>{if(i)return Y.instance.hideLoading(),!1})}async quitUnion(e,t){Y.instance.showLoading(!0),await this.member_sys_contract.methods.quitUnion(e,t).send({from:ue.instance.walletAddress},(i,r)=>{if(i)return Y.instance.hideLoading(),!1})}async addManager(e,t){Y.instance.showLoading(!0);let i=await this.member_sys_contract.methods.getMaxManagerCount().call(),r=parseInt(i),n=await this.member_sys_contract.methods.getUnionManagerCount(t).call();if(parseInt(n)>=r)return Y.instance.hideLoading(),be.instance.notice(I.instance.getLanguage("3013")),!1;await this.member_sys_contract.methods.addManager(e,t).send({from:ue.instance.walletAddress},(s,l)=>{if(s)return Y.instance.hideLoading(),!1})}async removeManager(e,t){Y.instance.showLoading(!0),await this.member_sys_contract.methods.removeManager(e,t).send({from:ue.instance.walletAddress},(i,r)=>{if(i)return Y.instance.hideLoading(),!1})}};var Wu=class{};var Ku=class extends Ht{constructor(t){super();this.donateValue=1e3;this.persentAry=[25,50,75,100];this.vo=t,this.detailVo=new Wu,this.view.btn_reduce.on(Laya.Event.CLICK,this,this.clickHandler,[this.view.btn_reduce]),this.view.btn_plus.on(Laya.Event.CLICK,this,this.clickHandler,[this.view.btn_plus]),this.view.btn_donate.on(Laya.Event.CLICK,this,this.clickHandler,[this.view.btn_donate]),w.intance.on(Ke.CMD_13001+"",this,this.onDonateSuccess);for(let i=0;i<4;i++){let r=this.view["p"+i],n=r.getChildByName("img_select");n.visible=!1,r.on(Laya.Event.CLICK,this,this.onClickP,[i])}}removeEvent(){super.removeEvent(),w.intance.off(Ke.CMD_13001+"",this,this.onDonateSuccess)}get view(){return this._view}dispose(){super.dispose()}createUI(){this._view=new Laya.View,this.addChild(this._view)}onClickP(t){if(console.log("selcet==="+t),!this.detailVo.resourcesType)return;let i=this.maxValue/100*this.persentAry[t];if(!(i<1e3)){this.donateValue=i-i%1e3,this.view.lable_num.text=this.donateValue.toString(),this.updateContribute();for(let r=0;r<4;r++){let o=this.view["p"+r].getChildByName("img_select");o.visible=!1,r<=t&&(o.visible=!0)}}}async initData(){this.view.img_icon.skin=`gameIcon/attricon/img_daoju_${this.vo.type-1e3}.png`,this.updateView()}updateContribute(){this.view.label_cb_right.text=I.instance.getLanguage("306")+` : ${parseInt(this.detailVo.contributeValue)+this.donateValue/1e3}`}async onDonateSuccess(){be.instance.notice(I.instance.getLanguage("307")),Y.instance.hideLoading()}async updateView(){if(!this.view)return;let t=await pe.requestPost("cybertron-sys-api/api/v1/alliance/attribute/find",{attributeType:this.vo.type});Object.assign(this.detailVo,t);let i=ie.intance.m_dicItems.get(this.detailVo.resourcesType);this.view.img_cost.skin="https://cdn.bunnyswap.cc/images/items/"+i.icon,this.detailVo.tokenAddress=i.tokenId;let r=WalletModel.instance.getValue(this.detailVo.resourcesType);this.view.lable_title.text=`${I.instance.getLanguage(this.vo.name)} : ${this.getShowValue(this.detailVo.value)}`,this.maxValue=parseFloat(r),this.view.lable_progress.text=I.instance.getLanguage("305")+` 
 ${it.filterNumFormat(this.detailVo.num)}/${it.filterNumFormat(this.detailVo.totalNum)}`,this.view.label_attr_left.text=`${I.instance.getLanguage(this.detailVo.name)} : ${this.getShowValue(this.detailVo.value)}`,this.view.label_attr_right.text=`${I.instance.getLanguage(this.detailVo.name)} : ${this.getShowValue(this.detailVo.toValue)}`,this.view.label_lv_left.text=I.instance.getLanguage("304")+` : ${this.detailVo.level}`,this.view.label_lv_right.text=I.instance.getLanguage("304")+` : ${this.detailVo.toLevel}`,this.view.label_cb_left.text=I.instance.getLanguage("306")+` : ${this.detailVo.contributeValue}`,this.updateContribute()}getShowValue(t){return this.detailVo.type===1003||this.detailVo.type===1005?(parseFloat(t+"")*100).toFixed(1)+"%":parseInt(t)}async clickHandler(t){if(this.detailVo.resourcesType)switch(t){case this.view.btn_reduce:this.donateValue>1e3&&(this.donateValue-=1e3),this.view.lable_num.text=this.donateValue.toString(),this.updateContribute();break;case this.view.btn_plus:this.donateValue+1e3<=this.maxValue&&(this.donateValue+=1e3),this.view.lable_num.text=this.donateValue.toString(),this.updateContribute();break;case this.view.btn_donate:if(this.donateValue>this.maxValue){be.instance.notice(I.instance.getLanguage(14));return}qu.instance.donate(this.detailVo.resourcesType+"",this.donateValue+"");break;default:break}}};var Yu=class extends Yn{constructor(){super()}get view(){return this._view}createUI(){this._view=new Laya.View,this.m_iPositionType=V.UP,this.addChild(this._view),this.onStageResize(),this.view.tab.dataSource=3,this.view.attr_list.vScrollBarSkin="",this.view.attr_list.array=[],w.intance.on(Ke.CMD_13001+"",this,this.getAttrList),this.getAttrList()}async getAttrList(){let e=await pe.requestPost("cybertron-sys-api/api/v1/alliance/attribute/findAll",{});this.destroyed||e.length&&(this.view.attr_list.array=e.slice(0,5))}removeEvent(){super.removeEvent(),w.intance.off(Ke.CMD_13001+"",this,this.getAttrList)}onStageResize(){super.onStageResize();let e=Laya.stage.height-le.DESIGN_HEIGHT;this.view.la_img_bg.height+=e,this.view.attr_list.height+=e,this.view.height+=e}};var $u=class{};var oi=class a{constructor(){this._inited=!1;this.contract=null;this.init()}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0,this.posDic=new te,this.contract=new window.web3.eth.Contract(B.HEROFORMATION_ABI,B.HEROFORMATION_ADDRESS))}async getHeroPos(){return(await pe.requestPost("cybertron-sys-api/api/v1/heroes/positionList",{})).forEach(t=>{let i=new $u;Object.assign(i,t),this.posDic.set(i.position,i)}),this.posDic}async setHeroPos(){if(Y.instance.showLoading(!0),this.checkOnlyChangePos())return await pe.requestPost("cybertron-sys-api/api/v1/heroes/setPosition",this.copyPosDic.values),this.posDic=this.copyPosDic,Y.instance.hideLoading(),w.intance.event("SET_HERO_POSTION_SUCCESS"),this.posDic;{let t=[];this.copyPosDic.values.forEach(i=>{parseInt(i.heroId)&&t.push([parseInt(i.heroId),parseInt(i.position)])}),await this.contract.methods.formation(t).send({from:ue.instance.walletAddress},(i,r)=>{if(i)return Y.instance.hideLoading(),!1})}}checkOnlyChangePos(){let e=[],t=[];for(let i of this.posDic.values)parseInt(i.heroId)&&e.push(parseInt(i.heroId));for(let i of this.copyPosDic.values)parseInt(i.heroId)&&t.push(parseInt(i.heroId));return e.sort(),t.sort(),e.toString()===t.toString()}};var Xu=class extends Ht{constructor(){super()}get view(){return this._view}dispose(){super.dispose()}createUI(){this.addChild(this._view),w.intance.on("CANCEL_HERO_POS",this,this.cancelHero),w.intance.on("SET_HERO_POSTION_SUCCESS",this,this.setHeroPosSuccess),this.view.btn_set.clickHandler=new Laya.Handler(this,this.onSetHeroPos)}async onSetHeroPos(){await oi.instance.setHeroPos()}setHeroPosSuccess(){Ge.instance.showErrorWord(2e4),Z.intance.disposeView(h.HeroFormationDialog)}removeEvent(){w.intance.off("CANCEL_HERO_POS",this,this.cancelHero),w.intance.off("SET_HERO_POSTION_SUCCESS",this,this.setHeroPosSuccess)}async createUIEnd(){this.view.list.vScrollBarSkin="",this.view.list.dataSource=[],this.view.list.mouseHandler=new Laya.Handler(this,this.onListEvent),this.view.list.renderHandler=new Laya.Handler(this,this.onRenderList),await oi.instance.getHeroPos(),oi.instance.copyPosDic=Qt.deepClone(oi.instance.posDic);let e=A.instance.m_heroData.heroVoDic.values;if(e&&e.length>0){let t=e.filter(i=>i.status!=2);this.view.list.array=t}this.updateList()}cancelHero(e){let t=oi.instance.copyPosDic.get(e);t.heroId="0",this.updateList()}updateList(){for(let e of oi.instance.copyPosDic.keys){let t=oi.instance.copyPosDic.get(e);this.view["pos"+e].dataSource=t}this.view.list.refresh()}onListEvent(e,t){switch(e.type){case Laya.Event.CLICK:this.handleSelectHero(t);break}}handleSelectHero(e){let t=this.view.list.array[e];for(let i of oi.instance.copyPosDic.values)if(i.heroId==t.id){this.cancelHero(i.position);return}for(let i of oi.instance.copyPosDic.keys){let r=oi.instance.copyPosDic.get(i);if(!parseInt(r.heroId)){r.heroId=t.id+"",this.view["pos"+i].dataSource=r;break}}this.view.list.refresh()}onRenderList(e,t){}onComplete(){}initData(){}};var Zu=class a{constructor(){if(a._instance)throw new Error("LayerManager是单例,不可new.");a._instance=this}static get intance(){return a._instance||(a._instance=new a),a._instance}init(){Laya.ClassUtils.regClass(he.BASEALERTVIEW,Vu),Laya.ClassUtils.regClass(h.SkillTipDialog,Fu),Laya.ClassUtils.regClass(h.LuckdrawView,zu),Laya.ClassUtils.regClass(h.UnionAttrView,Yu),Laya.ClassUtils.regClass(h.UnionAttrLvUpDialog,Ku),Laya.ClassUtils.regClass(h.UnionAttributeDetailsDialog,Gu),Laya.ClassUtils.regClass(h.HeroFormationDialog,Xu)}};var Qu=class a{constructor(){this.m_sprMap=new Laya.Sprite;this.m_Image=new Laya.Image}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){}showLoading(e=!1){if(this.loadingMc)this.m_sprMap.size(Laya.stage.width,Laya.stage.height),le.m_bIsIphoneX&&(this.m_Image.scaleX=le.IPHONEX_SCARE,this.m_Image.scaleY=le.IPHONEX_SCARE),this.m_Image.x=(this.m_sprMap.width-this.m_Image.width*this.m_Image.scaleX)/2,this.m_Image.y=(this.m_sprMap.height-this.m_Image.height*this.m_Image.scaleY)/2,this.m_sprMap.x=(V.instence.m_iStageWidth-this.m_sprMap.width*this.m_sprMap.scaleX)/2,this.m_sprMap.y=(V.instence.m_iStageHeight-this.m_sprMap.height*this.m_sprMap.scaleY)/2,this.m_sprMap.visible=!0,Laya.timer.clear(this,this.showLazyBg),e?(this.m_Image.alpha=1,this.showLazyBg()):(this.m_Image.alpha=0,this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_sprMap.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,"#000000")),Laya.timer.once(300,this,this.showLazyBg));else return}showLazyBg(){this.m_sprMap&&(this.m_sprMap.graphics.clear(),this.m_Image.alpha=1),this.loadingMc&&(this.loadingMc.x=Laya.stage.width/2,this.loadingMc.y=Laya.stage.height/2,this.loadingMc.play(),this.loadingMc.visible=!0)}hideLoading(){if(this.loadingMc)this.hideLoadingSHow();else return}hideLoadingSHow(){Laya.timer.clear(this,this.showLazyBg),this.loadingMc.stop(),this.loadingMc.visible=!1,this.m_sprMap.visible=!1}get isShow(){return this.loadingMc&&this.loadingMc.visible}dispose(){this.m_sprMap&&this.m_sprMap.graphics.clear(),Laya.timer.clear(this,this.showLazyBg),this.loadingMc&&(this.loadingMc.destroy(),this.loadingMc.removeSelf(),this.loadingMc=null)}};var qe=class qe{static get IsSetRelease(){return qe._IsSetRelease}static get IsSetGuid(){return qe._IsSetGuid}static initParms(){if(Laya.Browser.window.location){let t=Laya.Browser.window.location.href,i=this.getURLParameters(t);if(qe.m_obj=i,console.log("1initgame-->urldata:",qe.m_obj),qe.m_obj.server&&qe.m_obj.server!=""&&(pe.httpRoot=qe.m_obj.server),qe.m_obj.socket&&qe.m_obj.socket!=""){var e=qe.m_obj.socket;Ke.m_strHttpHost=e+"/websocket"}if(qe.m_obj.address&&qe.m_obj.address!=""&&(ue.instance.walletAddress=qe.m_obj.address),qe.m_obj.debug&&qe.m_obj.debug!="0"&&(le.Debug=parseInt(qe.m_obj.debug)),qe.m_obj.res&&qe.m_obj.res!="0"&&(le.Res=parseInt(qe.m_obj.res)),qe.m_obj.lang&&qe.m_obj.lang!=""){let r=parseInt(qe.m_obj.lang);r<1&&(r=1),le.ignoreLang=!0,A.instance.m_strLanguage=r}}}static getURLParameters(e){let t={};return e.replace(/[?&]+([^=&]+)=([^&]*)/gi,(i,r,n)=>t[r]=decodeURIComponent(n)),t}static cheakStr(e){let t=new RegExp("[A-Za-z0-9_-\\s]","g"),i=e.match(t);return!!(i&&i.length==e.length)}};qe._IsSetRelease=!1,qe._IsSetGuid=!1;var Ju=qe;var{regClass:Yw}=Laya,$n=class extends dl{constructor(){super(...arguments);this.isLogout=!1;this.dotNum=0;this.m_nProgress=0}onAwake(){Laya.loader.on(Laya.Event.ERROR,this,this.onError),Laya.loader.load(["res/common/comm_bg/img_loading_bg.jpg","res/loading/progress_load1.png","res/loading/progress_load1$bar.png"]).then(()=>{this.createUI(),this.init()})}onError(t){console.log("加载失败: "+t)}createUI(){this.m_nSendTime=Laya.timer.currTimer,He.instance.init(),He.instance.playMusicByName(He.soundName_bg,".mp3"),w.intance.on(E.EVENT_BACK_TO_LOGIN,this,this.backToLogin),w.intance.on(E.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),w.intance.on(E.EVENT_ENTER_MAIN,this,this.loginCallBack),this.initLoad();let t=le.User_Lan;var i=getGameVersion();this.txtLoad.text=i,console.log("VERSION: "+i),Laya.alertGlobalError(!0),ni.Initialize(Laya.stage,!0)}handleClickBtn(t){switch(t){}}initLoad(){this.onAssetLoaded()}onAssetLoaded(){this.loadingProcess=0,this.m_nProgress=0,Laya.timer.loop(1800,this,this.onLoading,[this.m_nProgress])}set loadingProcess(t){t>1&&(t=1),this.mcProcess.value=t,this.txtProcess.text=Math.floor(t*100)+"%";var i=t*this.mcProcess.width-70;i<0&&(i=0),this.img_guang.x=i,console.log("loadingProcess: "+t+", width: "+this.mcProcess.width)}init(){I.instance.FGM_GetLanguage(),Zu.intance.init(),V.instence.init(),xe.intance.init(),Y.instance.init(),Qu.instance.init(),Z.intance.init(),A.instance.init(),G.instance.init(),Ju.initParms()}backToLogin(){Laya.timer.clear(this,this.onLoading),this.m_nProgress=0,Laya.loader.load(G.instance.m_arrInitResource,Laya.Handler.create(this,this.getLoginData),Laya.Handler.create(this,this.onLoading2,null,!1))}getLoginData(){De.instance.sendCustumEvent(7),this.readyInitGame()}readyInitGame(){if(this.isLogout){w.intance.event(E.EVENT_LOADING_SUC);return}this.mcProcess&&(this.loadingProcess=.8+.2),this.loginGame()}async loginGame(){w.intance.event(E.EVENT_LOADED_COMPLETE),await ue.instance.init(),await ue.instance.dappLogin()}async loginGameEnd(t){De.instance.sendCustumEvent(8),ie.intance.init(),fi.instance.init(),console.log("PreLoadingView.joinGame()");let i=Laya.timer.currTimer-this.m_nSendTime;if(De.instance.sendCustumEvent(22),!t){Z.intance.openModule(h.NoServerView);return}t.loginState==1?(console.log("have no regist"),De.instance.sendCustumEvent(23),Z.intance.openModule(h.CreateLoginView)):(De.instance.sendCustumEvent(30),t.playerDto?(De.instance.sendCustumEvent(31),console.log("registed "+t.playerDto.name),A.instance.playerDto=t.playerDto,this.loginCallBack()):(De.instance.sendCustumEvent(32),console.log("getRegisted error"),be.instance.notice(I.instance.getLanguage(135))))}async loginCallBack(){console.log("loginCallBack++++++++++++++++++++++++++++++++"),Y.instance.hideLoading();var t=A.instance.playerDto;if(t.roomId>0){let i=await pe.requestPost("wxgame/room/info",{roomId:t.roomId});ne.instance.roomDto=i.roomDto,i.roomDto?t.roomState==0?Z.intance.openModule(h.EnterRoomView):t.roomState==1&&Ke.instance.initSocket():be.instance.notice(I.instance.getLanguage(135))}else Ve.logs("进入主界面",5),De.instance.sendCustumEvent(33),xe.intance.setCurrentScene(de.M_SCENE_MAIN);pe.startHeart()}onLoading(t){this.m_nProgress+=.01,this.mcProcess&&t>this.mcProcess.value&&(this.loadingProcess=t*.4)}onLoading2(t){this.mcProcess&&(this.loadingProcess=0+t*1.1)}removeEvent(){w.intance.off(E.EVENT_BACK_TO_LOGIN,this,this.backToLogin),w.intance.off(E.EVENT_LOGIN_GAME_END,this,this.loginGameEnd),w.intance.off(E.EVENT_ENTER_MAIN,this,this.loginCallBack)}};$n.m_iState=1,$n=d([Yw("xmaaYG8AQ1yC07pr_JvyPA")],$n);var{regClass:$w,property:KG}=Laya,Hs=class extends Laya.Script{constructor(){super()}onEnable(){Laya.timer.frameLoop(1,this,this.onRunRoll),this.onScaleEnd1()}onRunRoll(){this.owner.rotation++}onScaleEnd1(){Laya.Tween.to(this.owner,{scaleX:1.1,scaleY:1.1,alpha:.8},500,null,Laya.Handler.create(this,this.onScaleEnd2))}onScaleEnd2(){Laya.Tween.to(this.owner,{scaleX:.8,scaleY:.8,alpha:.5},500,null,Laya.Handler.create(this,this.onScaleEnd1))}onDisable(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};Hs=d([$w("w5pr4pHJTMOM3bYxCyc4Ag")],Hs);var Xn=class Xn extends Laya.ColorFilter{constructor(e=null){super(e)}static addClickFilter(e){let t=e.filters||[];t.push(Xn.clickFilter),e.filters=t}static clearClickFilter(e){let t=e.filters;if(t!=null&&t.length>0){for(let i=t.length-1;i>-1;i--)t[i]instanceof Xn&&t.splice(i,1);e.filters=t}}};Xn.clickFilter=new Xn([1,0,0,0,-34,0,1,0,0,-34,0,0,1,0,-34,0,0,0,1,0]);var Ka=Xn;var{regClass:Xw,property:Zw}=Laya,Zn=class extends Laya.Script{constructor(){super();this.noSound=!1}onEnable(){let t=this.owner.scaleX;this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onUp)}onDown(){this.noSound||He.instance.playSoundByName(He.soundName4),Ka.addClickFilter(this.owner)}onUp(){Ka.clearClickFilter(this.owner)}onDisable(){Ka.clearClickFilter(this.owner),this.owner.off(Laya.Event.MOUSE_DOWN,this,this.onDown),Laya.stage.off(Laya.Event.MOUSE_UP,this,this.onUp)}};d([Zw({type:"boolean"})],Zn.prototype,"noSound",2),Zn=d([Xw("cL1AmqOiTHmtQWKayPNcTA")],Zn);var ep=class extends Laya.Dialog{};var{regClass:Qw}=Laya,tp=class extends ep{constructor(){super();this.destroyDoCancel=!1;this.canClose=!0}onEnable(){this.on(Laya.Event.CLICK,this,this.onClickEvent)}onClickEvent(t){let i=t.target;i.name=="okBtn"?(this._okHandler&&this._okHandler.runWith(null),this.close()):i.name=="cancleBtn"&&(this.destroyDoCancel=!1,this._cancelHandler&&this._cancelHandler.runWith(null),this.close())}setOpenData(t){t&&(this._okHandler=t.okHandler,this._cancelHandler=t.cancelHandler,this.destroyDoCancel=t.destroyDoCancel,t.flag<0?(this.cancleBtn.visible=!1,this.okBtn.visible=!1,this.canClose=!1):t.flag&he.YES&&!(t.flag&he.NO)?(this.okBtn.x=this.width-this.okBtn.width>>1,this.cancleBtn.visible=!1,this.okBtn.label="Sure"):t.flag&he.NO&&!(t.flag&he.YES)?this.okBtn.visible=!1:t.flag&he.YES&&t.flag&he.NO,t.data&&this.alertDesc&&(t.data instanceof Array?(this.alertTitle.text=t.data[0],this.alertDesc.text=t.data[1]):this.alertDesc.text=t.data),t.initHandler&&t.initHandler.runWith(this))}onDisable(){this.destroyDoCancel&&this._cancelHandler&&this._cancelHandler.run(),this._okHandler=null,this._cancelHandler=null}close(t){this.canClose&&super.close(t)}};tp=d([Qw("8G0DBvD7T_2CVupdfQXrBw")],tp);var ip=class extends Laya.Dialog{};var{regClass:Jw}=Laya,ap=class extends ip{constructor(t){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList()}handleSelectHead(t){if(t!=-1){let i=this.list_head.selectedItem;A.instance.headId=i.id,this.playerIcon.headSkin=A.instance.headId}}createHeadList(){let t=ie.intance.m_dicHead;this.list_head.array=t.values,this.list_head.visible=!0;let i=-1,r=0;this.playerIcon.headSkin=A.instance.headId;for(let n of t.values){if(n.id==A.instance.headId){i=r;break}r++}this.list_head.selectedIndex=i}onBtnChangePic(){var t=Laya.Render.canvas.style.zIndex,i=I.instance.getUILang("Upload picture"),r=I.instance.getUILang("Select Image"),n=I.instance.getUILang("Save changes");openUploadPic(this,t,i,r,n)}async openPicEnd(t,i){if(i.length>500){let r=await pe.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);r&&(A.instance.headId=r.imgUrl,t.playerIcon.headSkin=r.imgUrl,console.log(r.imgUrl))}}onRegister(){let t=A.instance.headId;w.intance.event(E.EVENT_MODIFY_HEAD,[t]),this.close()}};ap=d([Jw("BmtPy79ySCyg4IuEQC4zsQ")],ap);var rp=class extends Laya.ComboBox{};var{regClass:eL}=Laya,np=class extends rp{set defaultLabel(e){this._defaultLabel=e,this._selectedIndex<0&&(this._button.label=e),this._button.labelAlign="center"}onEnable(){this.list=this.comboList}set dataSource(e){super.dataSource=e;var t=e;t&&(this.labels=t.join(","),console.log("comboData.length: "+t.length),this.list.repeatY=t.length,this.list.width=this.width,this.list.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1))}onCountryItemRender(e,t){e.onChange(this.list.selectedIndex==t)}set isOpen(e){if(console.log("isOpen: "+e),this._isOpen!=e)if(this._isOpen=e,this._button.selected=this._isOpen,this._isOpen){this._list||this._createList(),this._listChanged&&!this._isCustomList&&this.changeList(),this._itemChanged&&this.changeItem();var t=this.localToGlobal(Laya.Point.TEMP.setTo(0,0)),i=t.y+this._button.height;i=i+this._listHeight<=Laya.stage.height||t.y-this._listHeight<0?i:t.y-this._listHeight,this.img_pad.addChild(this._list),this.img_pad.pos(t.x,i),this.img_pad.visible=!0,Laya.stage.addChild(this.img_pad),this.img_pad.zOrder=1001,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.removeList),Laya.stage.on(Laya.Event.MOUSE_WHEEL,this,this._onStageMouseWheel),this._list.selectedIndex=this._selectedIndex}else this._list&&this._list.removeSelf(),this.img_pad&&this.img_pad.removeSelf()}};np=d([eL("AqEOSlrnRkmI9RUPCJUVqQ")],np);var op=class extends Laya.List{};var{regClass:tL}=Laya,sp=class extends op{};sp=d([tL("7DDHp602Rs6dL3bjAu4ArA")],sp);var lp=class extends Laya.Box{};var{regClass:iL}=Laya,cp=class extends lp{addEvent(){}set dataSource(t){super.dataSource=t;var i=t;i&&i.label&&(this.addEvent(),this.tf_name.text=i.label)}onChange(t){t?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};cp=d([iL("nREGzTKFSX6LuiRnM5nPXA")],cp);var up=class extends Laya.Box{};var{regClass:aL}=Laya,pp=class extends up{addEvent(){}set dataSource(t){super.dataSource=t;var i=t;i&&(this.addEvent(),this.img_icon.skin=G.instance.getCountryIcon(i.id),this.tf_name.text=I.instance.getLanguage(i.name))}onChange(t){t?(this.selectImg.visible=!0,this.tf_name.color="#ffffff"):(this.tf_name.color="#357cc0",this.selectImg.visible=!1)}onDisable(){}};pp=d([aL("LJ8PUf7kRCGUr4eT8Mhy3g")],pp);var mp=class extends Laya.Dialog{};var Qn=class extends Laya.Event{constructor(){super()}};Qn.INIT_CREATELOGIN_EVENT="CreateLoginEvent:INIT_CREATELOGIN_EVENT";var{regClass:rL}=Laya,dp=class extends mp{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_PANEL;this.m_iPositionType=V.CENTER}onEnable(){w.intance.on(Qn.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),w.intance.on(E.EVENT_MODIFY_HEAD,this,this.onChangeModifyHead),this.btn_radio1.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio1]),this.btn_radio2.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_radio2]),this.btn_register.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_register]),this.box_change.on(Laya.Event.CLICK,this,this.onChangeHead),this.input_name.prompt=I.instance.getLanguage("31"),this.selectRadio(1),this.initCountry(),this.initCreateLoginView(),De.instance.sendCustumEvent(23)}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(t,i){t.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(t){t.stopPropagation()}onScrollBarDown(t){t.stopPropagation()}onCountryItemRender(t,i){t.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(t){if(console.log("handleSelectCountry: "+t),t!=-1){let i=this.list_country.selectedItem;A.instance.countryId=i.id,this.img_flag.skin=G.instance.getCountryIcon(i.id),this.tf_country.text=I.instance.getLanguage(i.name)}}createCountryList(){let t=ie.intance.m_dicCountry;this.list_country.array=t.values,this.list_country.visible=!0;let i=-1,r=0;for(let n of t.values){if(n.id==A.instance.countryId){i=r;break}r++}this.list_country.selectedIndex=i}onChangeHeadBack(t,i){this.input_name.text=t,A.instance.headId=i,this.playerIcon.headSkin=i}onChangeModifyHead(t){A.instance.headId=t,this.playerIcon.headSkin=t}onChangeHead(){Z.intance.openModule(h.ChangeHeadDialog)}onBtnChangePic(){var t=Laya.Render.canvas.style.zIndex,i=I.instance.getUILang("Upload picture"),r=I.instance.getUILang("Select Image"),n=I.instance.getUILang("Save changes");openUploadPic(this,t,i,r,n)}async openPicEnd(t,i){if(i.length>500){let r=await pe.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);r&&(A.instance.headId=r.imgUrl,t.playerIcon.headSkin=r.imgUrl,console.log(r.imgUrl))}}selectRadio(t){let i=t==1;this.btn_radio1.selected=i,this.btn_radio2.selected=!i}handleClickBtn(t){switch(t){case this.btn_radio1:this.selectRadio(1);break;case this.btn_radio2:this.selectRadio(2);break;case this.btn_register:this.onRegister();break}}async onRegister(){let t=this.input_name.text,i=this.btn_radio1.selected?1:2;if(t=t.trim(),t==""){be.instance.notice(I.instance.getLanguage(31));return}if(A.instance.countryId==-1){be.instance.notice(I.instance.getLanguage(1048));return}let r=await ue.instance.createAcccount(t,i,A.instance.headId.toString(),A.instance.countryId);r&&(A.instance.playerDto=r,this.close(),w.intance.event(E.EVENT_ENTER_MAIN))}initCreateLoginView(){}onDisable(){this.removeEvent()}removeEvent(){w.intance.off(Qn.INIT_CREATELOGIN_EVENT,this,this.initCreateLoginView),w.intance.off(E.EVENT_CHANGE_HEAD,this,this.onChangeHeadBack)}};dp=d([rL("1K2SyFxcQY-12SasSSRXyQ")],dp);var hp=class extends Laya.Box{};var{regClass:nL}=Laya,fp=class extends hp{set dataSource(e){super.dataSource=e;var t=e;t&&(this.img_icon.skin="res/role/img_icon_"+t[0]+".png",this.tf_name.text=I.instance.getUILang(t[1]),this.tf_num.text=t[2])}};fp=d([nL("WJ5TDeRBSkC9yMqJ72B0Ow")],fp);var bp=class extends Laya.Box{};var{regClass:oL}=Laya,yp=class extends bp{set dataSource(t){super.dataSource=t,this.headItem=t,this.headItem&&this.setCurrentOutPut()}async setCurrentOutPut(){let t=this.headItem.id;this.playerIcon.headSkin=t}onChange(t){}};yp=d([oL("AwN_JFPwQsKswm1N53Bmkg")],yp);var gp=class extends Laya.Dialog{};var{regClass:sL}=Laya,vp=class extends gp{constructor(t){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER}onEnable(){this.btn_copy.on(Laya.Event.CLICK,this,this.onCopy),this.btn_changeHead.on(Laya.Event.CLICK,this,this.onChangeHead),w.intance.on(E.ROLE_INFO_CHANGE,this,this.updateRoleInfo),this.updateRoleInfo()}updateRoleInfo(){let t=A.instance.playerDto;this.tf_name.text=t.name,this.img_sex.skin=t.sex==1?"res/role/img_icon_xb_1.png":"res/role/img_icon_xb_2.png",this.tf_uid.text=t.pid.toString();var i=ie.intance.m_dicCountry.get(t.country);this.img_country.skin=G.instance.getCountryIcon(t.country+""),this.tf_address.text=this.formatWalletAddress(ue.instance.walletAddress);let r=t.icon;this.playerIcon.headSkin=r,this.onGetAttr(t.pid)}formatWalletAddress(t){let n="...";return t.length<=12+10?t:`${t.substring(0,12)}${n}${t.substring(t.length-10)}`}async onGetAttr(t){let i=this,r=await pe.requestPost("wxgame/player/getPlayerInfo",{pid:t});if(r){var n=[["1","Fighting",r.fightTimes],["2","Victory",r.winTimes],["3","Fail",r.fightTimes-r.winTimes],["4","Run away",r.taopao],["5","Winning rate",Math.floor(r.fightTimes==0?0:r.winTimes/r.fightTimes*100)]];i.list_attrs.array=n}else be.instance.notice(I.instance.getLanguage(135))}onChangeHead(){Z.intance.openModule(h.SelectHeadDialog,!0)}onCopy(){let t=ue.instance.walletAddress;doCopy(t),be.instance.notice(I.instance.getLanguage(132))}onDisable(){w.intance.off(E.ROLE_INFO_CHANGE,this,this.updateRoleInfo)}};vp=d([sL("T7g565QQR7-fZgZNjVg92A")],vp);var wp=class extends Laya.Dialog{};var{regClass:lL}=Laya,Lp=class extends wp{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER}setOpenData(t){}onEnable(){this.list_head.vScrollBarSkin="",this.btn_confirm.on(Laya.Event.CLICK,this,this.onRegister),this.btn_custom.on(Laya.Event.CLICK,this,this.onBtnChangePic),this.input_name.prompt=I.instance.getLanguage("31"),this.initContainer()}initContainer(){this.list_head.vScrollBarSkin="",this.list_head.selectHandler=new Laya.Handler(this,this.handleSelectHead),this.createHeadList(),this.initCountry()}handleSelectHead(t){if(t!=-1){let i=this.list_head.selectedItem;A.instance.headId=i.id,this.playerIcon.headSkin=A.instance.headId}}createHeadList(){let t=ie.intance.m_dicHead;this.list_head.array=t.values,this.list_head.visible=!0;let i=-1,r=0;A.instance.headId=A.instance.playerDto.icon,this.playerIcon.headSkin=A.instance.headId,this.input_name.text=A.instance.playerDto.name;for(let n of t.values){if(n.id==A.instance.headId){i=r;break}r++}this.list_head.selectedIndex=i}initCountry(){this.list_country.selectHandler=new Laya.Handler(this,this.handleSelectCountry),this.createCountryList(),this.box_country.on(Laya.Event.CLICK,this,this.onOpenCountry),this.list_country.on(Laya.Event.MOUSE_DOWN,this,this.onListDown),this.list_country.mouseHandler=Laya.Handler.create(this,this.onCountryItemMouse,null,!1),this.list_country.renderHandler=Laya.Handler.create(this,this.onCountryItemRender,null,!1),this.list_country.scrollBar&&this.list_country.scrollBar.on(Laya.Event.MOUSE_DOWN,this,this.onScrollBarDown)}onCountryItemMouse(t,i){t.type===Laya.Event.CLICK&&(this.list_country.selectedIndex=i,this.onHideCountry())}onListDown(t){t.stopPropagation()}onScrollBarDown(t){t.stopPropagation()}onCountryItemRender(t,i){t.onChange(this.list_country.selectedIndex==i)}onOpenCountry(){this.img_country_pad.visible==!1&&(this.img_country_pad.visible=!0,Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.onHideCountry))}onHideCountry(){this.img_country_pad.visible=!1,Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHideCountry)}handleSelectCountry(t){if(console.log("handleSelectCountry: "+t),t!=-1){let i=this.list_country.selectedItem;A.instance.countryId=i.id,this.img_flag.skin=G.instance.getCountryIcon(i.id),this.tf_country.text=I.instance.getLanguage(i.name)}}createCountryList(){let t=ie.intance.m_dicCountry;this.list_country.array=t.values,this.list_country.visible=!0;let i=-1,r=0;A.instance.countryId=A.instance.playerDto.country;for(let n of t.values){if(n.id==A.instance.countryId){i=r;break}r++}this.list_country.selectedIndex=i}onBtnChangePic(){var t=Laya.Render.canvas.style.zIndex,i=I.instance.getUILang("Upload picture"),r=I.instance.getUILang("Select Image"),n=I.instance.getUILang("Save changes");openUploadPic(this,t,i,r,n)}async openPicEnd(t,i){if(i.length>500){let r=await pe.requestPost("wxgame/player/uploadImg",{base64Str:i},!1,!1);r&&(A.instance.headId=r.imgUrl,t.playerIcon.headSkin=r.imgUrl,t.list_head.selectedIndex=-1,console.log(r.imgUrl))}}onRegister(){let t=this.input_name.text;if(t=t.trim(),t==""){be.instance.notice(I.instance.getLanguage(31));return}A.instance.headId!=-1?this.onModify(t,A.instance.headId,A.instance.countryId):be.instance.notice(I.instance.getLanguage(134))}async onModify(t,i,r){if(t==""){be.instance.notice(I.instance.getLanguage(31));return}let n=await Ur.instance.updateProfile(t,i.toString(),r);this.destroyed||(n?(A.instance.playerDto=n,this.close(),w.intance.event(E.ROLE_INFO_CHANGE)):be.instance.notice(I.instance.getLanguage(135)))}};Lp=d([lL("3CibwwHGSPG2Qkeq4rbMag")],Lp);var sa=class sa{constructor(){}static trim(e,t=null){t||(t=[" ","\r",`
`,"	",String.fromCharCode(65279)]);var i,r,n;for(i=e,n=t.length,r=0;r<n;r++)i=sa.getReplace(i,t[r],"");return i}static getReplace(e,t,i){if(!e)return"";var r;return r=e.replace(new RegExp(t,"g"),i),r}static isEmpty(e){return e.length<1?!0:sa.emptyStrDic.hasOwnProperty(e)}static trimLeft(e){var t;t=0;var i;for(i=e.length;sa.isEmpty(e.charAt(t))&&t<i;)t++;return t<i?e.substr(t):""}static trimRight(e){var t;for(t=e.length-1;sa.isEmpty(e.charAt(t))&&t>=0;)t--;var i;return i=e.substring(0,t),t>=0?e.substring(0,t+1):""}static trimSide(e){var t;return t=sa.trimLeft(e),t=sa.trimRight(t),t}static shortStr(e,t){return e.length>t?e.substr(0,t)+"...":e}static shortHeroStr(e,t=10){if(e.length>t){let i=e.split("#"),r=i[0],n=i[1];return r.substr(0,3)+"...#"+n}else return e}static caseInsensitiveSearchWithRegex(e,t){return new RegExp(t,"i").test(e)}};sa.emptyStrDic={" ":!0,"\r":!0,"\n":!0,"	":!0};var Kt=sa;var _p=class extends Laya.Dialog{};var{regClass:cL}=Laya,la=class extends Laya.Script{constructor(){super();this._isLeft=!1}onAwake(){}get isLeft(){return this._isLeft}set isLeft(t){this._isLeft=t,this.btn_bg=this.owner.getChildByName("btn_bg"),this.label_left=this.owner.getChildByName("label_left"),this.label_right=this.owner.getChildByName("label_right"),this.isLeft?(this.btn_bg.x=4,this.label_left.color="#213343",this.label_right.color="#52a5e0"):(this.btn_bg.x=this.owner.width-this.btn_bg.width-4,this.label_left.color="#52a5e0",this.label_right.color="#213343")}};la=d([cL("-1MGS4JRSMOn_RKPUuuV9Q")],la);var{regClass:uL}=Laya,xp=class extends _p{constructor(t){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER}onEnable(){this.musicSwitchButton=this.box_music.getComponent(la),this.soundSwitchButton=this.box_sound.getComponent(la),this.languageSwitchButton=this.box_language.getComponent(la),this.initContainer(),this.box_music.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_music]),this.box_sound.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_sound]),this.box_language.on(Laya.Event.CLICK,this,this.onClickHandler,[this.box_language]),this.btn_copy.clickHandler=new Laya.Handler(this,this.onClickHandler,[this.btn_copy]),this.btn_referral.on(Laya.Event.CLICK,this,this.onClickHandler,[this.btn_referral])}onClickHandler(t){switch(t){case this.box_music:this.musicSwitchButton.isLeft=!this.musicSwitchButton.isLeft,He.instance.switchMusic(this.musicSwitchButton.isLeft);break;case this.box_sound:this.soundSwitchButton.isLeft=!this.soundSwitchButton.isLeft,He.instance.switchSound(this.soundSwitchButton.isLeft);break;case this.btn_referral:Z.intance.openModule(h.InviteRewardDialog);break;case this.box_language:{this.languageSwitchButton.isLeft=!this.languageSwitchButton.isLeft;let i=this.languageSwitchButton.isLeft?"zh":"en";I.instance.FGM_SetLanguage(i),De.instance.reload()}break;case this.btn_copy:{let i=this.inviteUrl;Ve.doCopy(i),be.instance.notice(I.instance.getLanguage(132))}break}}initContainer(){this.musicSwitchButton.isLeft=He.instance.m_bPlayMusic,this.soundSwitchButton.isLeft=He.instance.m_bPlayeSound,this.languageSwitchButton.isLeft=A.instance.m_strLanguage==6,this.inviteUrl=Qt.getInviteUrl(),this.label_url.text=Kt.shortStr(this.inviteUrl,50)}addEvent(){}removeEvent(){}webCopyString(t){let i=t,r=window.document.createElement("textarea");r.value=i,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";let n=window.getSelection(),o=!1;n.rangeCount>0&&(o=n.getRangeAt(0)),window.document.body.appendChild(r),r.select(),r.selectionStart=0,r.selectionEnd=i.length;let s=!1;try{s=window.document.execCommand("copy")}catch(l){console.error(l)}return window.document.body.removeChild(r),o&&(n.removeAllRanges(),n.addRange(o)),s}};xp=d([uL("yJfJZzgZRluE_rgB44yTvg")],xp);var Ip=class extends Laya.Box{};var{regClass:pL}=Laya,Ep=class extends Ip{set dataSource(e){super.dataSource=e;var t=e;t&&(this.img_icon.skin=G.instance.getAttrIcon(t[0]),this.tf_name.text=I.instance.getUILang(t[1]),this.tf_num.text=t[2])}};Ep=d([pL("lWiDi5bCR-CNy4v3ZMd42w")],Ep);var Sp=class extends Laya.Dialog{};var Ci=class{constructor(){}};Ci.UPDATE_HERO_EVENT="HeroEvent:UPDATE_HERO_EVENT",Ci.UPDATE_HERO_UPGRADE_EVENT="HeroEvent:UPDATE_HERO_UPGRADE_EVENT";var{regClass:mL}=Laya,Tp=class extends Sp{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER}setOpenData(t){t&&(this._vo=t)}onComplete(){}onEnable(){this.showViewByVo(this._vo),this.btn_last.on(Laya.Event.CLICK,this,this.onClickLast),this.btn_next.on(Laya.Event.CLICK,this,this.onClickNext),this.btn_upgrade.on(Laya.Event.CLICK,this,this.onClickUpgrade),this.btn_out.on(Laya.Event.CLICK,this,this.onClickOut)}onClickUpgrade(){Z.intance.openModule(h.HeroUpgradeDialog,this._vo)}onClickNext(){let t=Wt.instance.getNextHero(this._vo);t&&(this._vo=t,this.showViewByVo(t))}onClickLast(){let t=Wt.instance.getLastHero(this._vo);t&&(this._vo=t,this.showViewByVo(t))}addEvent(){w.intance.on(Ci.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade),this.stage.on(Laya.Event.CLICK,this,this.hideTips);for(let t=1;t<7;t++)this["equip"+t].on(Laya.Event.CLICK,this,this.onClickEquip)}hideTips(){}onClickEquip(t){}removeEvent(){w.intance.off(Ci.UPDATE_HERO_UPGRADE_EVENT,this,this.onHeroUpgrade)}onHeroUpgrade(){this._vo=A.instance.m_heroData.heroVoDic.get(this._vo.pk),this._vo&&this.showViewByVo(this._vo)}updateEquip(){let t=this._vo.equipDtoList;for(let i=0;i<t.length;i++){let r=t[i];this["equip"+(i+1)].dataSource=r}}async showViewByVo(t){this.txt_name.text=t.name;let i=t.heroItem.level+"";Wt.instance.setStar(this,i),this.box_star.visible=!0,this.heroSk.dataSource=t;var r=[["maxHp","MaxHP",t.heroItem.maxHp],["atk","ATK",t.heroItem.atk],["def","DEF",t.heroItem.def],["mov","MOV",t.heroItem.mov],["crt","CRT",t.heroItem.crt],["crtRate","CrtRate",t.heroItem.crtRate/1e4+"%"],["immunity","Immunity",t.heroItem.immunity],["dex","Dex",t.heroItem.dex],["miss","MISS",t.heroItem.miss]];this.list_attrs.array=r;var n=[];t.heroItem.skillIds.forEach(o=>{var s=ie.intance.m_dicSkills.get(o);n.push(s)}),this.list_skills.array=n,this.updatePk()}updatePk(){A.instance.playerDto.fightHeroPk==this._vo.pk?(this.box_sign.visible=!0,this.btn_out.disabled=!0,this.btn_out.label=I.instance.getLanguage(1038)):(this.box_sign.visible=!1,this.btn_out.disabled=!1,this.btn_out.label=I.instance.getLanguage(1037))}async onClickOut(){let t=this,i=await pe.requestPost("wxgame/hero/heroFight",{pk:this._vo.pk});i?(A.instance.playerDto.fightHeroPk=i.pk,t.updatePk(),w.intance.event(Ci.UPDATE_HERO_EVENT)):be.instance.notice(I.instance.getLanguage(135))}};Tp=d([mL("Qri7gUY9SiWsYhtvNCEOQQ")],Tp);var kp=class extends Laya.Box{};var{regClass:dL}=Laya,Cp=class extends kp{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(t){if(super.dataSource=t,this.heroVo=t,!this.heroVo){this.img_back.skin=G.instance.getHeroBackIcon(0),this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){var t=[];A.instance.playerDto.fightHeroPk==this.heroVo.pk&&t.push({img_state:{skin:"gameIcon/hero/heroDetail/img_hero_state_1.png"}}),this.list_state.dataSource=t,this.img_back.skin=G.instance.getHeroBackIcon(this.heroVo.heroItem.quality),this.img_front.skin=G.instance.getHeroFrontIcon(this.heroVo.heroItem.quality),this.img_hero.skin=this.heroVo.simgurl,this.tf_name.text=Kt.shortHeroStr(this.heroVo.name);let i=this.heroVo.heroItem.level+"";Wt.instance.setStar(this,i),this.box_show.visible=!0,this.destroyed}toDetail(){this.heroVo.id&&Z.intance.openModule(h.HeroDetailDialog,this.heroVo)}};Cp=d([dL("PfeS1F4rQCqM4vXJpBZVWQ")],Cp);var ze=class ze{constructor(){}};ze.ANI_beiji="beiji",ze.ANI_daiji="daiji",ze.ANI_gongji="gongji",ze.ANI_ti="ti",ze.ANI_hua="hua",ze.ANI_dang="gedang",ze.ANI_ruchang="ruchang",ze.ANI_siwang="siwang",ze.ANI_xingzou="xingzou",ze.ANI_chongzhuang="z_chongzhuang",ze.ANI_chongzhuang2="z_chongzhuang2",ze.ANI_daodi="z_daodi",ze.ANI_shanbi="z_shanbi",ze.ANIS=[ze.ANI_daiji,ze.ANI_xingzou,ze.ANI_gongji,ze.ANI_ti,ze.ANI_hua,ze.ANI_dang,ze.ANI_beiji,ze.ANI_siwang],ze.TYPE_GONGJI=1,ze.TYPE_TI=2,ze.TYPE_HUA=3,ze.TYPE_DANG=4,ze.TYPE_FEI=5;var Ze=ze;var Ap=class extends Laya.Box{};var{regClass:hL}=Laya,Dp=class extends Ap{constructor(){super();this.isAddEvent=!1;this.isReady=!1;this.skinIndex=0;this.spineAniIndex=0;this.skinArray=["goblin","goblingirl"]}addEvent(){this.isAddEvent||(this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.changeAni),this.sk.on(Laya.Event.READY,this,this.onSkReady))}onSkReady(){this.isReady=!0}set dataSource(t){super.dataSource=t,this.heroVo=t,this.addEvent(),this.createSpine()}createSpine(){Laya.loader.load(this.heroVo.sk,Laya.Loader.SPINE).then(t=>{this.destroyed||(this.sk.templet=t,this.sk.animationName=Ze.ANI_daiji,this.spineAniNum=Ze.ANIS.length)})}changeAni(){if(this.isReady){this.spineAniIndex++,this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=0);var t=Ze.ANIS[this.spineAniIndex];this.sk.play(t,!0,!0)}}changeSkin(){this.sk.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}onDisable(){this.sk.off(Laya.Event.READY,this,this.onSkReady)}};Dp=d([hL("kS5K53GHRWOdgfXoo6VH1A")],Dp);var Mp=class extends Laya.Scene{};var{regClass:fL}=Laya,Pp=class extends Mp{onAwake(){this.m_iLayerType=V.M_POP,this.m_iPositionType=V.UP}onEnable(){this.list_hero.vScrollBarSkin="",this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),w.intance.on(Ci.UPDATE_HERO_EVENT,this,this.createHeadList),this.initMyHeroView(),this.initContainer()}setToMainScene(){xe.intance.setCurrentScene(de.M_SCENE_MAIN)}async initMyHeroView(){}onListEvent(t,i){switch(t.type){case Laya.Event.CLICK:this.list_hero.selectedIndex=i,this.handleSelectHero(i);break}}onRenderList(t,i){let r=t.dataSource}initContainer(){this.list_hero.visible=!1,this.list_hero.vScrollBarSkin="",this.list_hero.mouseHandler=new Laya.Handler(this,this.onListEvent),this.list_hero.renderHandler=new Laya.Handler(this,this.onRenderList),this.createHeadList()}handleSelectHero(t){let i=this.list_hero.selectedItem}async createHeadList(){if(await ft.instance.ownerHero(),!this)return;let t=A.instance.m_heroData.heroVoDic.values;if(t&&t.length>9){this.list_hero.array=t,this.list_hero.visible=!0,this.tf_noData.visible=!1;let n=-1;this.list_hero.selectedIndex=n}else{let n=[];for(var i=0;i<10;i++){var r=t[i];r?n.push(r):n.push(null)}this.list_hero.array=n,this.list_hero.visible=!0,this.tf_noData.visible=!1}}handleClickBtn(t){switch(t){}}onDisable(){w.intance.off(Ci.UPDATE_HERO_EVENT,this,this.createHeadList)}};Pp=d([fL("eEFn-xcRTXagUEZFDdSujw")],Pp);var Rp=class extends Laya.Box{};var{regClass:bL}=Laya,Bp=class extends Rp{set dataSource(e){super.dataSource=e;var t=e;t&&(this.tf_name.text=I.instance.getUILang(t[1]),this.tf_num.text=t[2])}};Bp=d([bL("BFrnzfZDRh2v3vDKqrNVwA")],Bp);var Op=class extends Laya.Box{};var{regClass:yL}=Laya,Np=class extends Op{constructor(){super();this.isBig=!1;this.isAddEvent=!1}set dataSource(t){super.dataSource=t,this.skillItem=t,this.skillItem&&(this.txt_num.text="",this.img_icon.skin=G.instance.getSkillIcon(this.skillItem.icon,this.isBig))}};Np=d([yL("qJVd2M3_Td-5eIx8PsQpAw")],Np);var Hp=class extends Laya.Box{};var{regClass:gL}=Laya,Up=class extends Hp{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(t){super.dataSource=t,this.skillItem=t,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.dataSource=this.skillItem)}toDetail(){this.skillItem&&Z.intance.openModule(h.SkillTipDialog,this.skillItem)}};Up=d([gL("VRh1GpjHSyqm75euC37ZKw")],Up);var Vp=class extends Laya.Dialog{};var{regClass:vL}=Laya,zp=class extends Vp{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER}setOpenData(t){t&&(this.skillItem=t)}onEnable(){this.item.dataSource=this.skillItem,this.tf_name.text=I.instance.getLanguage(this.skillItem.name);var t=[["type","S_type",I.instance.getUILang("S_type_"+this.skillItem.type)],["distance","S_distance",this.skillItem.distance],["hurt","S_hurt",this.skillItem.hurt/1e4+"%"],["cd","S_cd",this.skillItem.cd+I.instance.getUILang("S_S")],["displacement","S_displacement",this.skillItem.displacement],["targetsType","S_targetsType",I.instance.getUILang("S_targetsType"+this.skillItem.targetsType)]];this.list_skillAttrs.array=t}removeEvent(){}};zp=d([vL("PiBuXnP8ToeveVbB_bfhUQ")],zp);var Fp=class extends Laya.Box{};var{regClass:wL}=Laya,Gp=class extends Fp{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}set dataSource(t){super.dataSource=t,this.itemVo=t,this.itemVo&&this.setCurrentOutPut()}async setCurrentOutPut(){if(!this.itemVo)return;let t=this.itemVo.itemItem;this.knapsackItem.dataSource=this.itemVo,t?this.disabled=!1:this.disabled=!0}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===Lt.TYPE_Equipment?Z.intance.openModule(h.EquipDetailDialog,this.itemVo):Z.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};Gp=d([wL("HYoZb6e-RFKj8fjDKbl-7Q")],Gp);var jp=class extends Laya.Dialog{};var{regClass:LL}=Laya,qp=class extends jp{constructor(t){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER}onEnable(){this.initContainer(),He.instance.playSoundByName(He.soundName32)}initContainer(){var t=Ue.instance.getOneItem();if(t){var i;t instanceof Array?(i=new Xt(t[0]),i.newAddCnt=t[1]):i=t,this.showItem(i)}}showItem(t){this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=t,this.tf_name.text=I.instance.getLanguage(t.itemItem.name)}onDisable(){w.intance.event(E.EVENT_CHECK_REMAIN,h.ItemGetDialog)}};qp=d([LL("tC2uDJDVQMaI41Lys60O5Q")],qp);var Wp=class extends Laya.Box{};var{regClass:_L}=Laya,Kp=class extends Wp{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(t){super.dataSource=t,this.itemVo=t,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){if(!this.itemVo)return;let t=this.itemVo.itemItem;t?(this.showAdd?this.txt_num.text=""+it.formatNumber(this.itemVo.newAddCnt,2):this.txt_num.text=""+it.formatNumber(this.itemVo.m_iNum,2),this.img_icon.skin=G.instance.getItemIcon(t.icon),this.img_box.skin="gameIcon/items/itemBg/img_"+t.quality+".png"):(this.txt_num.text="",this.img_icon.skin=null,this.img_box.skin="gameIcon/items/itemBg/img_0.png")}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===Lt.TYPE_Equipment?Z.intance.openModule(h.EquipDetailDialog,this.itemVo):Z.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};Kp=d([_L("LzxJYKybT_m3CJav3RyDmg")],Kp);var Yp=class extends Laya.Scene{};var{regClass:xL}=Laya,$p=class extends Yp{constructor(){super(...arguments);this.currTab=0;this.type=1;this.items=[];this.hasItem=!1}onAwake(){this.m_iLayerType=V.M_POP,this.m_iPositionType=V.UP}onOpened(t){this.type=t}onEnable(){this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.box_show.visible=!1,this.box_2.visible=!1,this.initLuckDrawView();let t=(Laya.stage.height-le.DESIGN_HEIGHT)/2}setTab(t){for(let i=1;i<3;i++)t==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe")}async initLuckDrawView(){await ft.instance.ownerBag(),!this.destroyed&&(this.type?this.onClickTab(this.type):this.onClickTab(1))}onClickTab(t){if(this.currTab!=t){if(this.setTab(t),t==1){if(this.box_2.visible=!0,this.destroyed)return;var i=this.getItemByType(1);this.listPanel1.array=i}else{if(this.box_2.visible=!0,this.destroyed)return;var i=this.getItemByType(2);this.listPanel1.dataSource=i}this.hasItem?this.listPanel1.selectedIndex=0:this.listPanel1.selectedIndex=-1}}getItemByType(t){var i=t==1?Lt.TYPE_Consumption:Lt.TYPE_Equipment;this.items=[],this.hasItem=!1;for(var r=A.instance.m_packageData.getListByType(i),n=0;n<30;n++){var o=r[n];o?(n==0&&(this.hasItem=!0),this.items.push(o)):this.items.push(new Xt(0))}return this.items}onSelectItem(t,i){var r=this.items[t];if(console.log(r),r){let n=r.itemItem;this.img_icon.skin=G.instance.getItemIcon(n.icon),this.tf_name.text=I.instance.getLanguage(n.name),this.tf_des.text=I.instance.getLanguage(n.des),this.box_show.visible=!0}else this.img_icon.skin=null,this.tf_name.text="",this.tf_des.text="",this.box_show.visible=!1}setToMainScene(){xe.intance.setCurrentScene(de.M_SCENE_MAIN)}onShowSkill(){Z.intance.openModule(h.SkillTipDialog)}stopAni(t){console.log("stopAni: "+t)}onDrawBack(t){}removeEvent(){}};$p=d([xL("6IPqO9JvTmygjIZQXMwq2A")],$p);var Xp=class extends Laya.Dialog{};var{regClass:IL}=Laya,Zp=class extends Xp{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER}setOpenData(t){t&&(this.itemVo=t)}onEnable(){this.item.dataSource=this.itemVo;let t=this.itemVo.itemItem;this.tf_name.text=I.instance.getLanguage(t.name),this.txt_type.text=I.instance.getLanguage("6060")+I.instance.getLanguage(t.type),this.txt_desc.text=I.instance.getLanguage(t.des),this.btn_use.visible=t.use!="0",this.btn_use.clickHandler=new Laya.Handler(this,this.useItem)}async useItem(){this.close()}removeEvent(){}};Zp=d([IL("or8jNdIhRpSbAG2JBhH-wA")],Zp);var Qp=class extends Laya.Box{};var{regClass:EL}=Laya,Jp=class extends Qp{constructor(){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER}onEnable(){console.log("OpenScene onEnable："+this.m_strName)}getName(){console.log(this.m_strName)}onDisable(){}};Jp=d([EL("sQS5mrqRQLWcBk-SgfBGJw")],Jp);var em=class extends Laya.Box{};var{regClass:SL}=Laya,tm=class extends em{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.check_coin.on(Laya.Event.CLICK,this,this.onCheck),this.isAddEvent=!0)}set dataSource(t){super.dataSource=t,this.addEvent();let i=t;this.check_coin.selected=i[1],this.tf_coin.text=i[2]}onCheck(){this._dataSource[1]=this.check_coin.selected,w.intance.event(E.EVENT_CHECK_ICON_SELECT)}};tm=d([SL("UTGHsPbQS6C5FohXv8T25Q")],tm);var im=class extends Laya.Dialog{};var{regClass:TL}=Laya,am=class extends im{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER;this.coinType=3001;this.coinIds=[]}setOpenData(t){t&&(this.arenaLv=t[0])}onEnable(){this.btn_create.on(Laya.Event.CLICK,this,this.onCreate),this.initContainer()}initContainer(){let t=A.instance.playerDto;if(!t)return;this.tf_roleName.text=t.name;let i=t.icon;this.playerIcon.headSkin=i,this.img_country.skin=G.instance.getCountryIcon(t.country+""),this.initCombo()}initCombo(){this.coinIds=ie.intance.getGeneralValueById(5);var t=[];this.coinIds.forEach(i=>{var r=ie.intance.m_dicItems.get(i);t.push(I.instance.getLanguage(r.name))}),this.coinCombo.selectHandler=new Laya.Handler(this,this.onSelected2),this.coinCombo.dataSource=t,this.coinCombo.selectedIndex=0}onSelected2(t){t!=-1&&(this.coinType=this.coinIds[t],console.log("您选中了 coinType"+this.coinType),this.setRoomInfo())}setRoomInfo(){this.arenaItem=ie.intance.getSheetDataByMultiKey(ie.intance.m_dicArenaMulDic,[this.arenaLv,this.coinType]),this.tf_roomName.text=I.instance.getLanguage(this.arenaItem.name),this.tf_min.text=this.arenaItem.numberMin+"",this.tf_max.text=this.arenaItem.numberMax+""}async onCreate(){let t=this.input_pwd.text;var i=this.arenaItem.id;if(i){let r=await pe.requestPost("wxgame/room/create",{password:t,arenaId:i});ne.instance.roomDto=r.roomDto,r.roomDto?(this.close(),Z.intance.openModule(h.EnterRoomView)):be.instance.notice(I.instance.getLanguage(135))}}};am=d([TL("_y9qJpZZRk2p26xdgYPRyA")],am);var at=class at{constructor(){}static formatMM(e){if(e<=0)return"00:000";let t,i;t=e/1e3,i=e%1e3;let r="";return t<=9&&(r+="0"),r+=Math.floor(t),r+=":",i<=9?r+="00":i<=99&&(r+="0"),r+=i,r}static format(e,t=":",i=!0){if(e<=0)return i?"00:00:00":"00:00";let r,n,o,s,l;s=e/3600,o=e%3600,l=o/60,r=o%60;let c="";return i&&(s<=9&&(c+="0"),c+=Math.floor(s)+t),l<=9&&(c+="0"),c+=Math.floor(l)+t,Math.ceil(r)<=9&&(c+="0"),c+=Math.ceil(r),c}static formatWithDay(e,t=":"){if(e<=0)return"00:00";let i,r,n,o,s;r=e/86400,n=e%86400,o=n/3600,n=n%3600,s=n/60,i=n%60;let l="";if(r>=1){let c=r>1?2005:2003;l=I.instance.getLanguage(c,Math.floor(r))+" ",o<=9&&(l+="0"),i%2!=0&&(t=Ve.getColorText(t,"#412b20")),l+=Math.floor(o)+t,s<=9&&(l+="0"),l+=Math.floor(s)}else o<=9&&(l+="0"),l=Math.floor(o)+t,s<=9&&(l+="0"),l+=Math.floor(s)+t,Math.ceil(i)<=9&&(l+="0"),l+=Math.ceil(i);return l}static getTimeArray(e,t="HH-MM-SS"){if(e=Math.max(0,e),t.indexOf("-")==-1)return[];let i=[],r=t.split("-");for(let n of r)n=="DD"?i.push(Math.floor(e/at.OneDaySceond)):n=="HH"?i.push(Math.floor(e%at.OneDaySceond/at.OneHourSceond)):n=="MM"?i.push(Math.floor(e%at.OneHourSceond/at.OneMiniuteSecond)):n=="SS"&&i.push(e%at.OneMiniuteSecond);return i}static getServerDate(e){return new Date(e)}static formatTime(e){return(parseInt(e/60+"")+100).toString().substring(1)+":"+(parseInt(e%60+"")+100).toString().substring(1)}static formatTime000000(e){return e?(parseInt(e/3600+"")+100).toString().substring(1)+":"+(parseInt(e%3600/60+"")+100).toString().substring(1)+":"+(parseInt(e%60+"")+100).toString().substring(1):"00:00:00"}static formatTimeStamp(e,t="YY-MT-DD HH:MM:SS"){let i=at.getServerDate(e),r="";if(t.indexOf("YY")>=0&&(r=i.getFullYear()+"",t=t.replace("YY",r)),t.indexOf("MT")>=0){let n=i.getMonth()+1;n>9?r=n+"":r="0"+n,t=t.replace("MT",r)}if(t.indexOf("DD")>=0){let n=i.getDate();n>9?r=n+"":r="0"+n,t=t.replace("DD",r)}if(t.indexOf("HH")>=0){let n=i.getHours();n>9?r=n+"":r="0"+n,t=t.replace("HH",r)}if(t.indexOf("MM")>=0){let n=i.getMinutes();n>9?r=n+"":r="0"+n,t=t.replace("MM",r)}if(t.indexOf("SS")>=0){let n=i.getSeconds();n>9?r=n+"":r="0"+n,t=t.replace("SS",r)}return t}static formatTimeStamps(e,t="YY-MT-DD HH:MM:SS"){let i=at.getServerDate(e),r=t;return r=at.parseTimeDetail(i,r,"YY",!1),r=at.parseTimeDetail(i,r,"MT",!1),r=at.parseTimeDetail(i,r,"DD",!1),r=at.parseTimeDetail(i,r,"HH",!0),r=at.parseTimeDetail(i,r,"MM",!0),r=at.parseTimeDetail(i,r,"SS",!0),r}static parseTimeDetail(e,t,i,r){if(t.indexOf(i)>=0){let n,o;i=="YY"?o=e.getFullYear():i=="MT"?o=e.getMonth()+1:i=="DD"?o=e.getDate():i=="HH"?o=e.getHours():i=="MM"?o=e.getMinutes():i=="SS"&&(o=e.getSeconds()),o>9||!r?n=o.toString():n="0"+o,t=t.replace(i,n)}return t}static getServerTimeStr(){return at.formatTimeStamp(Laya.timer.currTimer)}static getTimeArr(){return at.getServerTimeStr().split("/")}static get getDay(){let t=at.getServerTimeStr().split("/");return parseInt(t[2])}static parseSheetTime(e){let t="";if(e){let i=e.length;for(let r=0;r<i;r++){let n="";e[r]<10?n="0"+e[r]:n=e[r],r!==i-1&&(n=n+":"),t+=n}}return t}};at.OneDaySceond=24*3600,at.OneHourSceond=3600,at.OneMiniuteSecond=60;var Ya=at;var rm=class extends Laya.Dialog{};var{regClass:kL}=Laya,nm=class extends rm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_PANEL;this.m_iPositionType=V.CENTER}onEnable(){w.intance.event(E.EVENT_ENTER_MATCH_ROOM),this.initContainer()}initContainer(){this.list_wait_hero.visible=!0;var t=ne.instance.roomDto,i=t.roomId,r=t.arenaId,n=t.coinType,o=ie.intance.m_dicArenaDic.get(r);ne.instance.currArenaItem=o,this.tf_roomName.text=I.instance.getLanguage(o.name),this.arenaNo.text=i+"",this.initRoomData(),Laya.timer.loop(1e3,this,this.onRefreshRoom)}updateBattleCD(){ne.instance.coolDownTime=Math.round(ne.instance.roomDto.joinCd/1e3),ne.instance.coolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):(Laya.timer.clear(this,this.onSetCoolTime),this.onGoMatch())}onSetCoolTime(){ne.instance.coolDownTime>=0?(this.tf_coolTime.text=I.instance.getLanguage(1089)+" <font color='#ff5388'>"+Ya.format(ne.instance.coolDownTime)+"</font>",ne.instance.coolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.clear(this,this.onRefreshRoom),this.onGoMatch())}onGoMatch(){Laya.timer.clearAll(this),Ke.instance.initSocket()}handleSelectHead(t){}initRoomData(){var t=ne.instance.roomDto.members.length;if(this.tf_people.text=t+"",t>=30){this.onGoMatch();return}this.heros=[];for(var i=0;i<30;i++){var r=ne.instance.roomDto.members[i];r?this.heros.push(r):this.heros.push(null)}this.list_wait_hero.array=this.heros,this.list_wait_hero.visible=!0,this.updateBattleCD()}async onRefreshRoom(){let t=await pe.requestPost("wxgame/room/info",{roomId:ne.instance.roomDto.roomId});ne.instance.roomDto=t.roomDto,this.initRoomData(),ne.instance.setMatchRes()}handleClickBtn(t){switch(t){}}onDisable(){this.removeEvent(),console.log("EnterRoomView onDisable")}removeEvent(){Laya.timer.clearAll(this)}};nm=d([kL("IwpLh2K2T5Gh7QXYnJakAw")],nm);var om=class extends Laya.Dialog{};var{regClass:CL}=Laya,sm=class extends om{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER}setOpenData(t){t&&(this.roomDto=t[0])}onEnable(){this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.initContainer()}initContainer(){var t=ie.intance.m_dicItems.get(this.roomDto.coinType),i=I.instance.getLanguage(t.name),r=ie.intance.m_dicArenaDic.get(this.roomDto.arenaId);this.tf_roomName.text=I.instance.getLanguage(r.name),this.input_pwd.text=""}async onJoin(){let t=this.input_pwd.text,i=await pe.requestPost("wxgame/room/join",{roomId:this.roomDto.roomId,pass:t});ne.instance.roomDto=i.roomDto,i.roomDto?Z.intance.openModule(h.EnterRoomView):be.instance.notice(I.instance.getLanguage(135))}};sm=d([CL("bn6StZy0ROGBH9GCTateCA")],sm);var lm=class extends Laya.Scene{};var cm=class a{constructor(){this._inited=!1}static getInstance(){return a._instance||(a._instance=new a),a._instance}init(){this._inited||(this._inited=!0,A.instance.initData())}};var{regClass:AL}=Laya,um=class extends lm{constructor(){super(...arguments);this.currTab=0;this.arenaLv=1001;this.coinTypes=[];this.currIconAni=1;this.coinDatas=[]}onAwake(){this.m_iLayerType=V.M_POP,this.m_iPositionType=V.UP,cm.getInstance().init()}onOpened(t){this.mouseThrough=this.mouseThrough=!0,this.headBox.mouseThrough=!0;let i=this.getChildByName("mcMain");i&&(i.mouseThrough=!0),this.updateTopInfo(),this.initCombo(),this.onClickTab(1);var r=Laya.stage.width-le.DESIGN_WIDTH>>1;this.leftX=this.leftMenu.x,this.rightX=this.rightMenu.x,this.leftMenu.x=this.leftX-r-this.leftMenu.width,this.rightMenu.x=this.rightX+r+this.rightMenu.width,Laya.Tween.to(this.leftMenu,{x:this.leftX-r},500),Laya.Tween.to(this.rightMenu,{x:this.rightX+r},500),this.initBtnAni()}initBtnAni(){for(var t=1;t<6;t++)this["spine_"+t].on(Laya.Event.READY,this,this.onSkReady,[this["spine_"+t]])}onSkReady(t){t.stop(),t.visible=!1,t==this.spine_5&&this.startBtnAni()}startBtnAni(){this.currIconAni>5&&(this.currIconAni=1),this["spine_"+this.currIconAni].play(0,!1),this["spine_"+this.currIconAni].visible=!0,this.currIconAni++,Laya.timer.once(2e3,this,this.startBtnAni)}changeMailFlag(){}updateTopInfo(){let t=A.instance.playerDto;if(!t)return;this.tf_roleName.text=t.name,this.levelTF.text=t.lv.toString(),t.needTip=!0,this.playerIcon.dataSource=t,this.updateExp(),this.changeMailFlag();let i=new Date(A.instance.m_serverTime);console.log("server time toLocaleString："+i.toLocaleString()),console.log("server time offset date："+A.instance.timeZoneOff/60/60),this.updateLocalAssets()}updateExp(){let t=A.instance.playerDto,i=A.instance.getRealExp(t)/A.instance.getRealNextExp(t);i?this.txt_exp.text=(i*100).toFixed(0)+"%":this.txt_exp.text="0%",i>1&&(i=1),this.levelTF.text=t.lv.toString(),this.img_exp.width=118*i}requestAssets(){w.intance.event(E.UPDATE_ASSETS)}async updataBalence(){await ue.instance.getBalance()}async updateAssets(){await Vr.instance.updateAssetsBalance()}updateLocalAssets(){this.tf_3005.text=it.filterNumFormat(A.instance.getConsumeValue(Xe.TYPE_GOLD),0)}loopTime(){}onEnable(){this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_3.on(Laya.Event.CLICK,this,this.onClickTab,[3]),this.list_room.vScrollBarSkin="",this.list_room.array=[],this.btn_create.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_create]),this.btn_shop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_shop]),this.btn_guild.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_guild]),this.btn_heroes.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_heroes]),this.btn_backpack.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_backpack]),this.btn_achv.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_achv]),this.btn_scholarshop.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_scholarshop]),this.btn_leaderboard.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_leaderboard]),this.btn_social.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_social]),this.btn_activities.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_activities]),this.btn_collection.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_collection]),this.btn_setting.clickHandler=new Laya.Handler(this,this.onclickBtnHandler,[this.btn_setting]),w.intance.on(E.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),w.intance.on(E.ROLE_INFO_CHANGE,this,this.updateTopInfo),w.intance.on(E.UPDATE_ASSETS,this,this.updateAssets),w.intance.on(si.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),w.intance.on("CHANG_NAME",this,this.changeName),w.intance.on("open_buy",this,this.openBuyDialog),w.intance.on("msg_173",this,this.onFirstRecharge),w.intance.on("ACCOUNTVO_UPDATE",this,this.updateExp),w.intance.on(E.EVENT_REMOVE_ACTIVITY,this,this.onBindStateChange),w.intance.on(E.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),w.intance.on(E.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),this.initBtnBox()}setTab(t){for(let i=1;i<4;i++)t==i?(this["btn_"+i].getChildByName("btn_yellowBg").visible=!0,this["btn_"+i].getChildByName("Label").color="#143268"):(this["btn_"+i].getChildByName("btn_yellowBg").visible=!1,this["btn_"+i].getChildByName("Label").color="#ffffff")}onClickTab(t){if(this.currTab!=t){if(this.setTab(t),t==1){this.arenaLv=1;var i=this.getRoomByType()}else if(t==2){this.arenaLv=2;var i=this.getRoomByType()}else if(t==3){this.arenaLv=3;var i=this.getRoomByType()}}}async getRoomByType(){this.arenaLv,this.coinTypes;let t=await pe.requestPost("wxgame/room/list",{lv:this.arenaLv,coinTypeList:this.coinTypes});this.list_room.array=t.roomList,Laya.timer.once(3e3,this,this.getRoomByType)}initCombo(){this.coinTypes=[];var t=ie.intance.getGeneralValueById(5);this.coinDatas=[],t.forEach(i=>{this.coinTypes.push(i);var r=ie.intance.m_dicItems.get(i);this.coinDatas.push([i,!0,I.instance.getLanguage(r.name)])}),this.list_coin.array=this.coinDatas}onCoinSelected(){this.coinTypes=[],this.coinDatas.forEach(t=>{t[1]&&this.coinTypes.push(t[0])}),console.log("您选中了 coinType"+this.coinTypes),this.getRoomByType()}onBindStateChange(){}onFirstRecharge(t){}initBtnBox(){this.sortIconView()}sortIconView(){}async onclickBtnHandler(t){switch(t){case this.btn_shop:xe.intance.setCurrentScene(de.M_SCENE_SHOP);break;case this.btn_heroes:xe.intance.setCurrentScene(de.M_SCENE_HERO);break;case this.btn_backpack:xe.intance.setCurrentScene(de.M_SCENE_KNAPSACK);break;case this.btn_guild:xe.intance.setCurrentScene(de.M_SCENE_UNION);break;case this.btn_setting:Z.intance.openModule(h.GameSettingLanguageDialog);break;case this.btn_create:Z.intance.openModule(h.CreateRoomDialog,[this.arenaLv]);break;case this.btn5:Z.intance.openModule(h.MailDialog);break;case this.btn_friend:Z.intance.openModule(h.FriendMemberDialog);break;case this.btn_rank:xe.intance.setCurrentScene(de.M_SCENE_RANK);break;case this.btn_wallet:Z.intance.openModule(h.WalletDialog);break;case this.btn_limitRecruit:xe.intance.setCurrentScene(de.M_SCENE_HERO,!0,!0,Pe.FUN_LIMITRECRUIT);break;default:be.instance.notice(I.instance.getLanguage(12));break}}openBuyDialog(t){switch(parseInt(t)){case 1:this.clickPlutPower();break;case 2:this.clickFlyBtn();break;case 3:this.buyGoldBtn();break;case 4:this.clickRecharge();break}}clickPlutPower(){}buyTiCallBack(t){Y.instance.showLoading(),this.sendData(89,[7])}clickRecharge(){if(le.m_bInstantGame==!0){let t=I.instance.getLanguage(500004);Vt.instance().AlertByType(he.BASEALERTVIEW,t,he.YES);return}w.intance.event(E.EVENT_OPEN_MODULE,[h.RechargeDialog])}changeName(t){}buyGoldBtn(){w.intance.event(E.EVENT_OPEN_MODULE,[h.GetMoreDialog])}clickFlyBtn(){}onDisable(){for(var t=1;t<6;t++)this["spine_"+t].off(Laya.Event.READY,this,this.onSkReady);w.intance.off(E.UPDATE_RED_STATE_EVENT,this,this.changeMailFlag),w.intance.off(E.ACCOUNTVO_UPDATE,this,this.updateExp),w.intance.off(E.ROLE_INFO_CHANGE,this,this.updateTopInfo),w.intance.off(E.UPDATE_ASSETS,this,this.updateAssets),w.intance.off(si.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets),w.intance.off("CHANG_NAME",this,this.changeName),w.intance.off("open_buy",this,this.openBuyDialog),w.intance.off("msg_173",this,this.onFirstRecharge),w.intance.off(E.EVENT_REMOVE_ACTIVITY,this,this.onBindStateChange),w.intance.off(E.EVENT_CHECK_ICON_SELECT,this,this.onCoinSelected),w.intance.off(E.EVENT_ENTER_MATCH_ROOM,this,this.onEnterMatchRoom),Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}onEnterMatchRoom(){this.onDisable()}};um=d([AL("pxhiJrX5SkKKvyFr8uIlNA")],um);var pm=class extends Laya.Box{};var{regClass:DL}=Laya,mm=class extends pm{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(t){super.dataSource=t,this.playerDto=t,this.playerDto&&(this.addEvent(),this.setCurrentOutPut())}set headSkin(t){this.img_head.skin=G.instance.getPlayerIcon(t)}async setCurrentOutPut(){if(!this.playerDto)return;let t=this.playerDto.icon;this.img_head.skin=G.instance.getPlayerIcon(t)}toDetail(){!this.playerDto||!this.playerDto.needTip||Z.intance.openModule(h.RoleInfoDialog)}};mm=d([DL("OPT5t2CoSmuYp2zUJWwUWA")],mm);var dm=class extends Laya.Box{};var{regClass:ML}=Laya,hm=class extends dm{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.isAddEvent=!0)}async onJoin(){if(this.roomDto.requirePass)Z.intance.openModule(h.InputPwdDialog,[this.roomDto]);else{let t=await pe.requestPost("wxgame/room/join",{roomId:this.roomDto.roomId});ne.instance.roomDto=t.roomDto,t.roomDto?Z.intance.openModule(h.EnterRoomView):be.instance.notice(I.instance.getLanguage(135))}}set dataSource(t){super.dataSource=t,this.roomDto=t,this.roomDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){let t=this.roomDto.leader.icon;this.playerIcon.headSkin=t,this.tf_name.text=this.roomDto.leader.name;var i=ie.intance.m_dicUnions.get(this.roomDto.leader.unionId);i&&(this.tf_union.text=I.instance.getLanguage(i.simpleName)),this.tf_people.text='<font color="#25ff63">'+this.roomDto.memberCount+"</font>/"+this.roomDto.maxCount,this.tf_seconds.text=Ya.format(Math.round(this.roomDto.joinCd/1e3),":",!1)}};hm=d([ML("YoCqj_dyTb2ZIAnhkSds6Q")],hm);var bi=class a{constructor(){}static judgePosition(e,t){var i=Math.atan2(e,-t)*180/3.141593;return i<-22&&(i=i+360),i=Math.ceil((i+22)/45),i}static distancePoint(e,t,i,r){return Math.sqrt((e-i)*(e-i)+(t-r)*(t-r))}get2D_Distance(e,t){return Math.sqrt(Math.pow(Math.abs(e),2)+Math.pow(Math.abs(t),2))}static rollCharacterByDir(e,t,i,r){let n;switch(i){case 3:n=0;break;case 4:n=45;break;case 5:n=90;break;case 6:n=135;break;case 7:n=180;break;case 8:n=225;break;case 1:n=270;break;case 2:n=315;break;default:n=0;break}return a.rollCharacter(e,t,n,r)}static rollCharacter(e,t,i,r){let n=i*(Math.PI/180);var o=e+r*Math.cos(n),s=t+r*Math.sin(n),l=320;return o<l?o=l:o>3040-l&&(o=3040-l),s<l?s=l:s>2640-l&&(s=2640-l),console.log(`新的坐标：X=${o}, Y=${s}`),[o,s]}static createDirectPath(e,t,i,r=40,n=25){for(var o=[],s=i*Math.PI/180,l=1;l<r;++l){var c=e,u=t+n*l,p=-(u-t)*Math.sin(s)+e,y=(u-t)*Math.cos(s)+t;o.push(p,y)}return o}static pointsBack(e,t){if(t<=0||!e||e.length<4)return e;for(var i=0,r=-1,n=-1,o=0;o<e.length;o+=2){var s=e[o],l=e[o+1];r>0&&n>0&&(i+=this.distancePoint(r,n,s,l)),r=s,n=l}if(i<t)return null;for(var c=e.concat(),u=0,p=0;c&&c.length>=4&&u<t;){var y=c.pop(),_=c.pop(),g=c[c.length-1],f=c[c.length-2];if(u+=this.distancePoint(f,g,_,y),p=u-t,p>0){var T=Math.atan2(g-y,f-_),C=T*180/Math.PI+90;T=C*Math.PI/180;var O=g+p,N=-(O-g)*Math.sin(T)+f,Q=(O-g)*Math.cos(T)+g;c.push(N,Q)}}return c}static createLinePath(e,t,i,r,n=25,o=0){var s=[],l=Math.atan2(r-t,i-e);l=(l*180/Math.PI-90)*Math.PI/180;for(var c=this.distancePoint(e,t,i,r)-o,u=0,p=0;c>u;){var y=e,_=t+n*p,g=-(_-t)*Math.sin(l)+e,f=(_-t)*Math.cos(l)+t;u=this.distancePoint(e,t,g,f),c>u&&s.push(g,f),p++}return o==0&&s.push(i,r),s}static rolePosTransform(e,t,i){var r=new Laya.Matrix;return r.rotate(Math.PI/180*(e.modelAngle-90)),r.translate(t.x,t.y),r.transformPoint(i)}static pointtInPolygon(e,t){for(var i=0,r=0;r<t.length;r++){var n=t[r],o=t[(r+1)%t.length];if(n.y!=o.y&&!(e.y<Math.min(n.y,o.y))&&!(e.y>=Math.max(n.y,o.y))){var s=(e.y-n.y)*(o.x-n.x)/(o.y-n.y)+n.x;s>e.x&&i++}}return i%2==1}static pointInPie(e,t,i,r,n,o){var s=Math.atan2(o.y-t,o.x-e)*180/Math.PI,l=this.distancePoint(e,t,o.x,o.y);return s>=i&&s<=r&&l<=n}static getRandInRound(e,t){return Math.floor(Math.random()*(t-e+1))+e}};var fm=class extends Laya.Box{};var{regClass:PL}=Laya,wt=class extends fm{init(e,t,i=28){var r,n;switch(e!=0?(n=bi.getRandInRound(-30,30),t.bj?r=wt.TYPE_Critical:r=wt.TYPE_Normal):(n=bi.getRandInRound(-30,30),r=wt.TYPE_Miss),this.pos(n,-180),this.alpha=1,this.scale(1,1),this.tf_damage.visible=!1,this.box_crit.visible=!1,this.img_miss.visible=!1,r){case wt.TYPE_Normal:this.tf_damage.text=e+"",this.showNormalDamageEffect();break;case wt.TYPE_Critical:this.fontClip_damage.value=e+"",this.showCriticalDamageEffect();break;case wt.TYPE_Miss:this.showMissEffect();break;default:break}}showNormalDamageEffect(){this.tf_damage.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,this.onComplete))}showCriticalDamageEffect(){this.box_crit.visible=!0,this.scale(.2,.2),Laya.Tween.to(this,{scaleX:1.3,scaleY:1.3,alpha:1,y:this.y-70},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1,alpha:0},500,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}))}showMissEffect(){this.img_miss.visible=!0,Laya.Tween.to(this,{y:this.y-50,alpha:0},1e3,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{this.onComplete()}))}onComplete(){this.removeSelf(),Laya.Pool.recover("damageNumber",this)}};wt.WHITE="#FFFFFF",wt.ORANGE="#FFA500",wt.RED="#FF0000",wt.GREEN="#119c09",wt.TYPE_Normal="Normal",wt.TYPE_Miss="Miss",wt.TYPE_Critical="Critical",wt=d([PL("nHp6WKzZRIWvyhguidEfqg")],wt);var bm=class extends Laya.Box{};var{regClass:RL}=Laya,ym=class extends bm{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(t){super.dataSource=t,this.roomRankPlayerDto=t,this.roomRankPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.roomRankPlayerDto.id==A.instance.playerDto.pid?this.bg.skin="res/matchRank1/img_ranking_bg_me.png":this.roomRankPlayerDto.rankNum<4?this.bg.skin="res/matchRank1/img_ranking_bg_"+this.roomRankPlayerDto.rankNum+".png":this.bg.skin="res/matchRank1/img_ranking_bg_4.png",this.roomRankPlayerDto.rankNum<4?(this.img_rankIcon1.skin="res/matchRank1/img_ranking_"+this.roomRankPlayerDto.rankNum+".png",this.img_rankIcon1.visible=!0,this.img_rankIcon2.visible=!1):(this.roomRankPlayerDto.id==A.instance.playerDto.pid?this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_me.png":this.img_rankIcon2.skin="res/matchRank1/img_ranking_ranking_4.png",this.img_rankIcon2.visible=!0,this.img_rankIcon1.visible=!1);let t=this.roomRankPlayerDto.icon;this.playerIcon.headSkin=t,this.playerIcon.gray=this.roomRankPlayerDto.die,this.tf_name.text=this.roomRankPlayerDto.name,this.tf_rank.text=this.roomRankPlayerDto.rankNum+"",this.tf_kill.text=this.roomRankPlayerDto.kill+"",this.tf_score.text=this.roomRankPlayerDto.score+""}};ym=d([RL("vpTYNMB4TfGFK2gaXiPAeg")],ym);var gm=class extends Laya.Dialog{};var{regClass:BL}=Laya,vm=class extends gm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_PANEL;this.m_iPositionType=V.CENTER;this.allItems=[]}onEnable(){this.btn_back.on(Laya.Event.CLICK,this,this.goMatchEnd)}setOpenData(t){this.mcLanList.vScrollBarSkin="",t.forEach(r=>{if(r.id==A.instance.playerDto.pid){this.myRank=r;return}}),this.mcLanList.array=t;let i=-1;this.mcLanList.selectedIndex=i,this.showListEffect(),z.instance.myPlayer.hp>0?this.successAni.visible=!0:this.successAni.visible=!1}showListEffect(){this.allItems=[];for(var t=this.mcLanList.array.length,i=0;i<t;i++){var r=this.mcLanList.getCell(i);r?(r.skewX=.5,r.alpha=0,this.allItems.push(r),Laya.timer.once(100+i*500,this,this.startShowItem,[i],!1)):console.log("showListEffect _item is null")}}startShowItem(t){var i=this.allItems[t];if(i==null){console.log("no list item now");return}i.scaleX=0,i.alpha=0,this.mcLanList.tweenTo(t,500),Laya.Tween.to(i,{scaleX:1,alpha:1},100,Laya.Ease.circOut,null,0,!1)}goMatchEnd(){Z.intance.openModule(h.MatchEndView,this.myRank),this.close()}onDisable(){this.removeEvent()}removeEvent(){Laya.Tween.clearAll(this),Laya.timer.clearAll(this)}};vm=d([BL("NlnToPI4TTuxIDhRKLPChg")],vm);var wm=class extends Laya.Dialog{};var{regClass:OL}=Laya,Lm=class extends wm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_PANEL;this.m_iPositionType=V.CENTER}onEnable(){this.btn_next.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_receive.on(Laya.Event.CLICK,this,this.onReceive)}setToMainScene(){xe.intance.setCurrentScene(de.M_SCENE_MAIN)}onReceive(){this.setToMainScene(),this.currRoomRankPlayerDto.rankNum<16||be.instance.notice(I.instance.getLanguage(2e3))}setOpenData(t){this.currRoomRankPlayerDto=t,t.rankNum<4?this.img_rankIcon.skin="res/matchRank1/img_battleend_ranking_"+t.rankNum+".png":this.img_rankIcon.skin="res/matchRank1/img_battleend_ranking_4.png",this.mcLanList.vScrollBarSkin="",this.tf_rank.text=t.rankNum+"",t.rankNum<16?this.btn_receive.label=I.instance.getUILang("Redeem CP"):(this.btn_receive.label=I.instance.getUILang("Receive"),this.btn_receive.disabled=!1);var i=[],r=ne.instance.reward;r.forEach(o=>{var s=new Xt(o.id);s.newAddCnt=o.count,i.push(s)}),this.mcLanList.array=i,this.mcLanList.visible=!0;let n=-1;this.mcLanList.selectedIndex=n}onDisable(){this.removeEvent(),ne.instance.clearData(),pe.needHeart=!0}removeEvent(){}};Lm=d([OL("y-nP_lRrQVef9uttVJ0rDw")],Lm);var _m=class extends Laya.Box{};var{regClass:NL}=Laya,xm=class extends _m{constructor(){super();this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(t){if(super.dataSource=t,this.roomPlayer=t,!this.roomPlayer){this.img_back.skin="res/matchReady/img_jjc_0.png",this.box_show.visible=!1;return}this.addEvent(),this.setCurrentOutPut()}async setCurrentOutPut(){if(this.img_back.skin="res/matchReady/img_jjc_1.png",this.tf_name.text=Kt.shortHeroStr(this.roomPlayer.name),this.box_show.visible=!0,this.destroyed)return;let t=this.roomPlayer.icon;this.playerIcon.headSkin=t,this.img_sign.visible=this.roomPlayer.leader>0;var i=ie.intance.m_dicUnions.get(this.roomPlayer.unionId);i&&(this.tf_union.text=I.instance.getLanguage(i.simpleName))}toDetail(){this.heroVo.id}};xm=d([NL("PiGdVEY9T-K8CCfWLChS0w")],xm);var Im=class extends Laya.Sprite{};var{regClass:HL}=Laya,Em=class extends Im{constructor(){super();this.isAddEvent=!1;this.isMe=!1;this.inGround=!1;this.moveSpeed=6;this._speed=6;this.biasSpeed=0;this.lastDirectStr="left";this.directStr="left";this._roleDirection=7;this.inControl=!1;this.isStop=!1;this.isLockAni=!1;this.aniChange=!1;this.displacementType=0;this.timeStamp=0;this.currArea=0;this.flashCount=0;this.lastX=-1;this.lastY=-1;this.lastRoleDirection1=-1;this.lastSpeed1=-1;this.lastArea=-1}get speed(){return this._speed}set speed(t){this._speed=t,this.biasSpeed=Math.round(this.speed*Math.sin(45*Math.PI/180)),console.log("Role speed2: ",this.speed,this.biasSpeed,this.roomPlayerDto.id)}get roleDirection(){return this._roleDirection}set roleDirection(t){this._roleDirection=t,t!=-4&&(t>=2&&t<=4?this.directStr="right":t>=6&&t<=8&&(this.directStr="left"),this.lastDirectStr!=this.directStr&&(this.heroBox.scaleX=this.directStr=="left"?1:-1,this.lastDirectStr=this.directStr))}set myRoleDirection(t){if(this.roleDirection!=t){this.roleDirection=t;for(var i=1;i<9;i++)this["img_d_"+i].visible=i==t}}addEvent(){this.isAddEvent||(Laya.timer.frameLoop(1,this,this.onFrameUpdate),this.isAddEvent=!0)}onFrameUpdate(){this._isRealDead&&!z.instance.myHeroSpr._isDead&&(this.visible=!1)}set dataSource(t){if(this.roomPlayerDto=t,!!this.roomPlayerDto){if(this.pos(this.roomPlayerDto.x,this.roomPlayerDto.y),this.addEvent(),this.speed=this.roomPlayerDto.speed,this.currArea=this.roomPlayerDto.area,console.log("MatchHeroSpr speed: "+this.speed),this.roomPlayerDto.hp<=0){this._isDead=!0,this.setDead();return}this.heroVo=new Ut,this.heroVo.id=this.roomPlayerDto.heroId,this.heroVo.color=this.roomPlayerDto.heroColor,this.moveSpeed=this.heroVo.heroItem.mov/30,this.setCurrentOutPut(),this.updataBlood()}}setDead(){console.log("MatchHeroSpr setDead: "+this.isMe),this._isRealDead=!0,this.alpha=.5,this.img_deadImg.visible=!0;var t=this.img_deadImg.y;this.tf_name.visible=!1,this.box_blood.visible=!1,this.heroSk.visible=!1,this.img_deadImg.y=0,this.img_deadImg.scale(0,0),this.getComponent(Laya.RigidBody).mask=1;var i=this;Laya.Tween.to(this.img_deadImg,{y:t,scaleX:1,scaleY:1},400,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){i.isMe&&w.intance.event(E.EVENT_GameScene_Gray)}))}updataBlood(){this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}setCurrentOutPut(){this.heroSk.dataSource=this.heroVo,this.tf_name.text=Kt.shortHeroStr(this.roomPlayerDto.name)}onAwake(){}backAni(){}idle(){console.log(`${this.roomPlayerDto.id} 播放 待机 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_daiji,!0,!1)}walk(){console.log(`${this.roomPlayerDto.id} 播放 走动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_xingzou,!0,!1)}run(){console.log(`${this.roomPlayerDto.id} 播放 跑动 动画`),!this._isDead&&this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_shanbi,!0,!1)}playAttackAnimation(t,i,r,n){if(!this._isDead){var o=ie.intance.m_dicSkills.get(t);if(console.log(`${this.roomPlayerDto.id} 攻击 , 播放 ${t} 动画`),o.type==1){if(i&&z.instance.onSendAnimation(t,Ze.TYPE_GONGJI),this.isStop=!0,this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_gongji,!1),i){var s=z.instance.getAttackTarget(o);s&&s.roomPlayerDto.hp>0&&Laya.timer.frameOnce(1,this,this.onRealAttack,[o,s.roomPlayerDto.id])}Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,n(),this.aniChange=!0}),z.instance.playSound(1)}else if(o.type==2)i&&z.instance.onSendAnimation(t,Ze.TYPE_TI),this.isStop=!0,this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_ti,!1),i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(30,this,()=>{this.isStop=!1,n(),this.aniChange=!0}),z.instance.playSound(2);else if(o.type==5){var l=[];if(this.displacementType=o.displacementType,i){var c=o.displacement>0?o.displacement:50;l=bi.rollCharacterByDir(this.x,this.y,this.roleDirection,c),z.instance.onSendAnimation(t,Ze.TYPE_FEI,-1,l[0],l[1])}else l[0]=r.get("newX"),l[1]=r.get("newY");if(this.isStop=!0,this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_ti,!1),this.heroVo.heroItem.race!=4){var u=z.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=u,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}i&&Laya.timer.frameOnce(17,this,this.onRealAttack,[o]),Laya.timer.frameOnce(5,this,this.onRoll,[l]),Laya.timer.frameOnce(20,this,()=>{this.isStop=!1,this.displacementType=0,n(),this.aniChange=!0}),z.instance.playSound(3)}else if(o.type==3){var l=[];if(i){var c=o.displacement>0?o.displacement:350;l=bi.rollCharacterByDir(this.x,this.y,this.roleDirection,c),z.instance.onSendAnimation(t,Ze.TYPE_HUA,-1,l[0],l[1])}else l[0]=r.get("newX"),l[1]=r.get("newY");if(this.getComponent(Laya.BoxCollider).isSensor=!0,this.isStop=!0,this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_hua,!1),this.heroVo.heroItem.race!=4){var u=z.instance.huaEffect;this.huaSpineSk||(this.huaSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.huaSpineSk)),this.huaSpineSk.templet=null,this.huaSpineSk.animationName="animation",this.huaSpineSk.templet=u,this.huaSpineSk.visible=!0,this.huaSpineSk.scaleX=this.directStr=="left"?1:-1,Laya.timer.frameOnce(15,this,()=>{this.onHuaComplate()})}Laya.timer.frameOnce(5,this,this.onRoll,[l]),Laya.timer.frameOnce(20,this,()=>{this.getComponent(Laya.BoxCollider).isSensor=!1,this.isStop=!1,n(),this.aniChange=!0}),z.instance.playSound(3)}else if(o.type==4){i&&(this.isLockAni=!0,z.instance.onSendAnimation(t,Ze.TYPE_DANG)),this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_dang,!1),this.dunpaiSk||(this.dunpaiSk=z.instance.dunpaiTemplet.buildArmature(0),this.dunpaiSk.x=-45,this.skNode.addChild(this.dunpaiSk)),this.dunpaiSk.play(0,!0);var p=2e3,y=o.buff;if(y.length>2){var _=y[2],g=ie.intance.m_dicBuffs.get(_);p=parseInt(g.time+"")}Laya.timer.once(p,this,()=>{this.isLockAni=!1,this.dunpaiSk&&(this.dunpaiSk.stop(),this.dunpaiSk.visible=!1),n(),this.aniChange=!0}),z.instance.playSound(2)}}}onRoll(t){this.inGround||Laya.Tween.to(this,{x:t[0],y:t[1]},330)}onHuaComplate(){this.huaSpineSk.stop(),this.huaSpineSk.visible=!1}onRealAttack(t,i=-1){if(console.log("onRealAttack",i),i>0)z.instance.onSendAttack(i,1,t.id);else{var r=z.instance.getAttackTarget(t);r&&r.roomPlayerDto.hp>0&&z.instance.onSendAttack(r.roomPlayerDto.id,1,t.id)}}playBeijiAnimation(t){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 被击 动画`),this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_beiji,!1),Laya.timer.once(1e3,this,()=>{t()}))}playChuShengAnimation(t){this._isDead||(console.log(`${this.roomPlayerDto.id} 播放 出生 动画`),this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_ruchang,!1),Laya.timer.once(1e3,this,()=>{t()}))}attack(t=0,i=!0,r=null){if(console.log(`${this.roomPlayerDto.id} 攻击 s`),this._isAttacking||this._isDead){console.log(`${this.roomPlayerDto.id} 没有靠近目标或正在攻击中或技能冷却中或已死亡，无法攻击`);return}this._isAttacking=!0,this.playAttackAnimation(t,i,r,()=>{this._isAttacking=!1})}takeDamage(t,i){var r=t.skill,n=t.attackValue,o=t.defHp;console.log(`${this.roomPlayerDto.id} 受到 ${n} 伤害s`),!this._isDead&&(this.roomPlayerDto.hp=o,console.log(`${this.roomPlayerDto.id} 受到 ${n} 伤害`),this.updateHealthBar(i),this.showDamageLabel(r,n,t),this._isAttacking&&(console.log(`${this.roomPlayerDto.id} 正在攻击中，受到攻击中断攻击 暂时没有中断攻击`),Laya.timer.clear(this,this.onRealAttack),this._isAttacking=!1),this._isTakingDamage=!0,this.isLockAni=!0,this.beijiSk||(this.beijiSk=z.instance.beijiTemplet.buildArmature(0),this.skNode.addChild(this.beijiSk)),this.beijiSk.play(0,!1),this.playBeijiAnimation(()=>{this.beijiSk&&(this.beijiSk.stop(),this.beijiSk.visible=!1),this._isTakingDamage=!1,this.isLockAni=!1,this.backAni()}))}die(t){if(console.log(`${this.roomPlayerDto.id} 死亡s`),!this._isDead){console.log(`${this.roomPlayerDto.id} 死亡`);var i=bi.judgePosition(t.x-this.x,t.y-this.y);this.roleDirection=i,this._isDead=!0,this.heroSk.isReady&&this.heroSk.sk.play(Ze.ANI_siwang,!1),Laya.timer.once(2e3,this,this.setDead)}}applySkillEffect(t){console.log(`${this.roomPlayerDto.id} 受到技能效果: ${t}`)}updateHealthBar(t){this.roomPlayerDto.hp<=0&&(this.roomPlayerDto.hp=0,this.die(t)),this._healthBar.value=this.roomPlayerDto.hp/this.roomPlayerDto.maxHp}showDamageLabel(t,i,r){if(i.length>1)for(var n=ie.intance.m_dicSkills.get(t),o=n.section,s=o,l=0;l<i.length;l++){var c=i[l];this.showDamageLabelDetailDelay(c,s[l][1],r)}else i.length==1?this.showDamageLabelDetailDelay(i[0],100,r):this.showDamageLabelDetailDelay(0,100,r);var u=this;if(r.allAtkValue!=0){var p=200;this.originalBlendMode=this.img_hp_bg.blendMode,this.flashCount=0,Laya.timer.loop(p,this,this.flashBlood)}}flashBlood(){var t=2;this.flashCount<t?this.img_hp_bg.blendMode===this.originalBlendMode?this.img_hp_bg.blendMode="lighter":(this.img_hp_bg.blendMode=this.originalBlendMode,this.flashCount++):(this.img_hp_bg.blendMode=this.originalBlendMode,Laya.timer.clear(this,this.flashBlood))}showDamageLabelDetailDelay(t,i,r){Laya.timer.once(i,this,this.showDamageLabelDetail,[t,r],!1)}showDamageLabelDetail(t,i){var r=Laya.Pool.getItemByCreateFun("damageNumber",z.instance.damageNumPrefab.create,z.instance.damageNumPrefab);r.init(t,i),this.addChild(r)}onSendMoveData(){if(!this._isDead){var t=this.speed,i=this.roleDirection,r=this.x,n=this.y;if(Math.abs(r-this.lastX)>2||Math.abs(n-this.lastY)>2||this.lastRoleDirection1!=i||this.lastSpeed1!=t||this.lastArea!=this.currArea){this.pos(r,n),this.lastX=r,this.lastY=n,this.lastRoleDirection1=i,this.lastSpeed1=t,this.lastArea=this.currArea;var o=A.instance.m_serverTime;this.timeStamp=o,z.instance.onSendMove(o,this.roomPlayerDto.id,t,i,r,n,this.currArea)}}}beiTui(t){var i=this.roomPlayerDto.id,r=this.x,n=this.y;if(Math.abs(r-this.lastX)>2||Math.abs(n-this.lastY)>2){this.lastX=r,this.lastY=n;var o=A.instance.m_serverTime;this.timeStamp=o,z.instance.onSendTargetMove(o,t,i,r,n)}}onPushMoveData(t,i,r,n,o,s){if(this.roleDirection=r,this.speed!=i&&(this.speed=i,i==0?this.idle():this.walk()),this.currArea!=s&&(this.currArea=s),t<=this.timeStamp){console.log("位置数据忽略："+t+" < "+this.timeStamp);return}(Math.abs(n-this.lastX)>1||Math.abs(o-this.lastY)>1)&&(this.pos(n,o),this.lastX=n,this.lastY=o)}onPushTargetMoveData(t,i,r){if(t<=this.timeStamp){console.log("推人数据忽略："+t+" < "+this.timeStamp);return}(Math.abs(i-this.lastX)>2||Math.abs(r-this.lastY)>2)&&(this.pos(i,r),this.lastX=i,this.lastY=r)}sendToServer(t){}initBirth(t){t?this.createBirthSpine():this.onPlayBirthEnd()}createBirthSpine(){this.heroSk.visible=!1,this.tf_name.visible=!1,this.box_blood.visible=!1,this.chushengBackSpineSk||(this.chushengBackSpineSk=new Laya.SpineSkeleton,this.spineNodeBack.addChild(this.chushengBackSpineSk)),this.chushengFrontSpineSk||(this.chushengFrontSpineSk=new Laya.SpineSkeleton,this.spineNodeFront.addChild(this.chushengFrontSpineSk)),this.chushengBackSpineSk.on(Laya.Event.READY,this,this.onBirthReady);var t=z.instance.ruchangEffects[this.getRandomAnimationType()];this.destroyed||(this.chushengBackSpineSk.animationName="animation2",this.chushengBackSpineSk.templet=t,this.chushengFrontSpineSk.animationName="animation1",this.chushengFrontSpineSk.templet=t)}getRandomAnimationType(){return Math.floor(Math.random()*3)}onBirthReady(){Laya.timer.once(500,this,this.onPlayBirth1)}onPlayBirth1(){this.isLockAni=!0,this.heroSk.visible=!0,this.playChuShengAnimation(()=>{this.isLockAni=!1,this.aniChange=!0}),this.chushengBackSpineSk.visible=!0,this.chushengBackSpineSk.play("animation2",!1),this.chushengFrontSpineSk.visible=!0,this.chushengFrontSpineSk.play("animation1",!1),Laya.timer.once(1300,this,this.onPlayBirthEnd)}onPlayBirthEnd(){this.chushengBackSpineSk&&(this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),this.chushengBackSpineSk.destroy(),this.chushengBackSpineSk.removeSelf()),this.chushengFrontSpineSk&&(this.chushengFrontSpineSk.destroy(),this.chushengFrontSpineSk.removeSelf()),this.img_d.visible=!0,this.tf_name.visible=!0,this.box_blood.visible=!0}onDisable(){this.chushengBackSpineSk&&this.chushengBackSpineSk.off(Laya.Event.READY,this,this.onPlayBirth1),Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};Em=d([HL("JIaWsVNzTK2dJIUcev60tQ")],Em);var Tm=class extends Laya.Box{};var{regClass:UL}=Laya,km=class extends Tm{init(){var e=ne.instance.currArenaItem.coinType;this.img_bing.skin="gameIcon/map/1001/img_bing_"+e+".png"}set dataSource(e){super.dataSource=e}};km=d([UL("W3qDvbUmSa2SFKJ5iEmjsg")],km);var Cm=class extends Laya.Box{};var{regClass:VL}=Laya,Am=class extends Cm{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(t){this.roomPlayerDto=t,this.roomPlayerDto&&(this.addEvent(),this.setCurrentOutPut())}setCurrentOutPut(){this.tf_rank.text=this.roomPlayerDto.rankNum+"";let t=this.roomPlayerDto.icon;this.playerIcon.headSkin=t,this.tf_name.text=I.instance.getLanguage(this.roomPlayerDto.name),this.tf_kill.text=this.roomPlayerDto.kill+"",this.roomPlayerDto.id==z.instance.myPlayer.id?(this.img_bg.skin="res/match1/img_ph2.png",this.tf_rank.color="#000000",this.tf_name.color="#ffe64b",this.img_kill.filters=[Ve.YELLOW],this.tf_kill.color="#ffe64b",this.box_item.x=6):(this.img_bg.skin="res/match1/img_ph.png",this.tf_rank.color="#ffffff",this.tf_name.color="#ffffff",this.img_kill.filters=null,this.tf_kill.color="#ffffff",this.box_item.x=15)}};Am=d([VL("XTVFXeI_R768e0Elv_ePAA")],Am);var Dm=class extends Laya.Scene{};var{regClass:zL}=Laya,Mm=class extends Dm{constructor(){super(...arguments);this.type=1}onAwake(){this.m_iLayerType=V.M_POP,this.m_iPositionType=V.UP}onOpened(t){this.type=t}setToMainScene(){xe.intance.setCurrentScene(de.M_SCENE_MAIN)}onEnable(){console.log("MatchReadyRT onEnable"),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.btn_random.on(Laya.Event.CLICK,this,()=>{this.generateName()}),this.btn_enter.on(Laya.Event.CLICK,this,()=>{var t=this.input_username.text;if(console.log("phyBtn"),t==""){alert("用户名不能为空");return}Ke.instance.openId=t,Ke.instance.initSocket()})}generateRandomName(t){let i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",r="";for(let n=0;n<t;n++){let o=Math.floor(Math.random()*i.length);r+=i.charAt(o)}return r}generateName(){this.input_username.text=this.generateRandomName(8)}onDestroy(){}};Mm=d([zL("mOlMVGD3TRCKNoddhyUGLw")],Mm);var Pm=class extends Laya.Dialog{};var{regClass:FL}=Laya,Rm=class extends Pm{constructor(){super(...arguments);this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_PANEL;this.m_iPositionType=V.CENTER}onEnable(){}onOpened(t){this.updateBattleCD()}updateBattleCD(){var t=ne.instance.matchDto.startTime-ne.instance.matchDto.nowTime;ne.instance.startCoolDownTime=Math.round(t/1e3),ne.instance.startCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):Laya.timer.clear(this,this.onSetCoolTime)}onSetCoolTime(){ne.instance.startCoolDownTime>=0?(this.fontClip_reduceTime.value=ne.instance.startCoolDownTime+"",this.scaleEffect(),ne.instance.startCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),this.onMatchStartEnd())}scaleEffect(){var t=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(t.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}onMatchStartEnd(){Laya.timer.once(1e4,this,this.close)}onDisable(){this.removeEvent(),ne.instance.stopAll=!1}removeEvent(){Laya.timer.clearAll(this),Laya.Tween.clearAll(this)}};Rm=d([FL("xpPoFvX_SqiYMO5AaOwGyA")],Rm);var Bm=class extends Laya.Box{};var{regClass:GL}=Laya,Om=class extends Bm{constructor(){super();this.showAdd=!1;this.isAddEvent=!1}createChildren(){super.createChildren()}addEvent(){this.isAddEvent||(this.on(Laya.Event.CLICK,this,this.toDetail),this.isAddEvent=!0)}set dataSource(t){super.dataSource=t,this.itemVo=t,this.itemVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.itemVo&&(this.knapsackItem.showAdd=!0,this.knapsackItem.dataSource=this.itemVo)}toDetail(){!this.itemVo||!this.itemVo.needTip||(this.itemVo.type===Lt.TYPE_Equipment?Z.intance.openModule(h.EquipDetailDialog,this.itemVo):Z.intance.openModule(h.KnapsackTipDialog,this.itemVo))}};Om=d([GL("WXpxCvqlQ2mKdcJCYlqOeg")],Om);var Nm=class extends Laya.Scene{};var{regClass:jL}=Laya,Hm=class extends Nm{constructor(){super(...arguments);this.liveNum=0}onAwake(){this.m_iLayerType=V.M_POP,this.m_iPositionType=V.UP,z.instance.init()}onOpened(t){var i=ne.instance.matchDto.startTime-ne.instance.matchDto.nowTime;i>0&&Z.intance.openModule(h.MatchReadyView);var r=ne.instance.matchDto.arenaId,n=ie.intance.m_dicArenaDic.get(r);ne.instance.currArenaItem=n;var o=ne.instance.currArenaItem.mapid,s=Laya.loader.getRes("gameIcon/map/map_"+o+".lh"),l=Laya.Pool.getItemByCreateFun("MatchMap1001",s.create,s);l.init(),z.instance.gameMap=l,z.instance.box_players=l.box_players,this.matchBox.removeChildren(),this.matchBox.addChild(l);var c=A.instance.playerDto;this.tf_roleName.text=c.name;let u=c.icon;this.playerIcon.headSkin=u,z.instance.initMatch(this,this.onInitEnd)}onInitEnd(t){t.updateSkill(),t.updateKill(),t.updateBattleCD(),Laya.timer.frameLoop(10,t,t.updateCharactersOrder)}onRestoreData(){z.instance.updateMatch(this,this.onInitEnd)}updateSkill(){for(var t=z.instance.myPlayer,i=ie.intance.m_dicHeros.get(t.heroId),r=i.skillIds.length,n=0;n<r;n++){var o=i.skillIds[n],s=ie.intance.m_dicSkills.get(o),l=this["matchSkill"+(n+1)];l.keyNum=n+1,l.dataSource=s;var c=t.skillCd.get(o);c&&l.updateSkillCooldown(c),l.updateGlobalCooldown(t.commonCd),l.visible=!0}}updateKill(){z.instance.myPlayer&&(this.tf_kill.text=z.instance.myPlayer.kill+""),this.list_rank.array=this.getSortPlayer(z.instance.matchHeroDic.values),this.tf_remainer.text=this.liveNum+"",this.tf_total.text="/ "+z.instance.matchHeroDic.values.length}getSortPlayer(t){var i=t.slice(),r=i.sort((o,s)=>s.score-o.score);this.liveNum=0;var n=1;return r.forEach(o=>{o.rankNum=n,n++,o.hp>0&&this.liveNum++}),r}updateBattleCD(){ne.instance.matchCoolDownTime=Math.round(ne.instance.matchDto.remainderCd/1e3),ne.instance.matchCoolDownTime>0?(this.onSetCoolTime(),Laya.timer.loop(1e3,this,this.onSetCoolTime)):Laya.timer.clear(this,this.onSetCoolTime)}onSetCoolTime(){ne.instance.matchCoolDownTime>=0?(this.fontClip_reduceTime.value=Ya.format(ne.instance.matchCoolDownTime,":",!1),ne.instance.matchCoolDownTime>90?this.fontClip_reduceTime.skin="res/match1/fontClip_1.png":ne.instance.matchCoolDownTime>10?this.fontClip_reduceTime.skin="res/match1/fontClip_2.png":(this.fontClip_reduceTime.skin="res/match1/fontClip_3.png",this.scaleEffect()),ne.instance.stopAll||ne.instance.matchCoolDownTime--):(Laya.timer.clear(this,this.onSetCoolTime),Laya.timer.once(1e4,this,this.checkMatchRankData))}checkMatchRankData(){ne.instance.checkMatchRankData()}scaleEffect(){var t=this;Laya.Tween.to(this.fontClip_reduceTime,{scaleX:1.3,scaleY:1.3},200,Laya.Ease.linearInOut,Laya.Handler.create(this,function(){Laya.Tween.to(t.fontClip_reduceTime,{scaleX:1,scaleY:1},200,Laya.Ease.linearInOut)}))}updateCharactersOrder(){z.instance.matchHeroSprs.sort((t,i)=>t.y-i.y);for(let t=0;t<z.instance.matchHeroSprs.length;t++)z.instance.matchHeroSprs[t].zOrder=t}onFirstBloodPush(t){var i=t.pid,r=z.instance.matchHeroDic.get(i);let n=r.icon;this.img_firstBlood_head.skin=G.instance.getPlayerIcon(n),this.img_firstBlood.visible=!0,this.img_firstBlood.alpha=0,this.img_firstBlood.y=-200,Laya.Tween.to(this.img_firstBlood,{y:92,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood1))}onFirstBlood1(){this.zi_firstBlood.scale(1,1),Laya.Tween.to(this.zi_firstBlood,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood2))}onFirstBlood2(){Laya.Tween.to(this.zi_firstBlood,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onFirstBlood3))}onFirstBlood3(){Laya.Tween.to(this.img_firstBlood,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onFirstBlood4),1500)}onFirstBlood4(){this.img_firstBlood.visible=!1}onMutiKillPush(t){this.fontClip_kill.value=t.kill+"";var i=!1;t.kill>=3?(i=!0,this.img_mutiKill.skin="res/match1/img_kill_3s.png"):this.img_mutiKill.skin="res/match1/img_kill_2s.png";var r=t.pid,n=z.instance.matchHeroDic.get(r);let o=n.icon;this.img_mutiKill_head.skin=G.instance.getPlayerIcon(o),this.img_mutiKill.visible=!0,this.img_mutiKill.alpha=0,this.img_mutiKill.y=-200,Laya.Tween.to(this.img_mutiKill,{y:175,alpha:1},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill1,[i]))}onMutiKill1(t){this.zi_mutiKill.scale(1,1),t?Laya.Tween.to(this.zi_mutiKill,{scaleX:1.5,scaleY:1.5},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill2)):this.onMutiKill3(2e3)}onMutiKill2(){Laya.Tween.to(this.zi_mutiKill,{scaleX:1,scaleY:1},200,Laya.Ease.linearNone,Laya.Handler.create(this,this.onMutiKill3,[1500]))}onMutiKill3(t){Laya.Tween.to(this.img_mutiKill,{y:-200,alpha:0},200,Laya.Ease.linearInOut,Laya.Handler.create(this,this.onMutiKill4),t)}onMutiKill4(){this.img_mutiKill.visible=!1}onGameSceneGray(){this.matchBox.gray=!0}onEnable(){console.log("MatchScene onEnable"),w.intance.on(E.UPDATE_KILL_NUM,this,this.updateKill),w.intance.on(E.EVENT_RESTORE_DATA,this,this.onRestoreData),w.intance.on(E.EVENT_FirstBlood,this,this.onFirstBloodPush),w.intance.on(E.EVENT_MutiKill,this,this.onMutiKillPush),w.intance.on(E.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.on(Laya.Event.FOCUS,this,this.onWindowFocus)}onWindowFocus(){z.instance.sendRestoreData()}onDisable(){w.intance.off(E.UPDATE_KILL_NUM,this,this.updateKill),w.intance.off(E.EVENT_RESTORE_DATA,this,this.onRestoreData),w.intance.off(E.EVENT_FirstBlood,this,this.onFirstBloodPush),w.intance.off(E.EVENT_MutiKill,this,this.onMutiKillPush),w.intance.off(E.EVENT_GameScene_Gray,this,this.onGameSceneGray),Laya.stage.off(Laya.Event.FOCUS,this,this.onWindowFocus),Laya.timer.clearAll(this)}};Hm=d([jL("sX0uLhOQSmm8b-_sHNqe5w")],Hm);var{regClass:qL,property:aX}=Laya,Us=class extends Laya.Script{constructor(){super()}onAwake(){}onStart(){z.instance.playMusic()}onLateUpdate(){z.instance.moveGameWindow()}};Us=d([qL("Ply19emtSrqrBk7nHXToAQ")],Us);var Um=class extends Laya.Button{};var{regClass:WL}=Laya,Vm=class extends Um{constructor(){super();this.isAddEvent=!1;this.isCanClick=!0;this.skillCooldown=5e3;this.thisGlobalCooldown=1e4;this.globalCooldown=1e4;this.remainingSkillCooldown=0;this.remainingGlobalCooldown=0}onEnable(){this.addEvent()}addEvent(){this.isAddEvent||(w.intance.on(E.EVENT_CLICK_NUM,this,this.onNumberClick),w.intance.on(E.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),this.isAddEvent=!0,this.on(Laya.Event.CLICK,this,this.onSkillButtonClick),this.on(Laya.Event.MOUSE_UP,this,this.onSkillButtonUp))}onNumberClick(t){t==this.keyNum&&this.onSkillButtonClick(null)}set dataSource(t){super.dataSource=t,this.skillItem=t,this.skillItem&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.skillItem&&(this.skillIconItem.isBig=this.skillItem.icon=="1001",this.skillIconItem.dataSource=this.skillItem,this.skillCooldown=this.skillItem.cd,this.thisGlobalCooldown=this.skillItem.commCd,Laya.timer.frameLoop(1,this,this.updateCooldown))}onMouseClick(t){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=0;z.instance.playSound(1),Laya.timer.once(1e3,this,()=>{this.isCanClick=!0})}}onSkillButtonUp(t){t&&t.stopPropagation(),Ka.clearClickFilter(this)}onSkillButtonClick(t){t&&t.stopPropagation(),this.remainingSkillCooldown<=0&&this.remainingGlobalCooldown<=0?(console.log("技能释放！"),Laya.Tween.to(this,{scaleX:.8,scaleY:.8},100,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},100,Laya.Ease.linearNone)})),z.instance.myHeroSpr.attack(this.skillItem.id),this.updateSkillCooldown(this.skillCooldown),w.intance.event(E.EVENT_UPDATE_GLOBAL_COOL,[this.thisGlobalCooldown])):console.log("技能或全局冷却还在进行中，无法释放。")}updateSkillCooldown(t){this.remainingSkillCooldown=t}updateGlobalCooldown(t){this.globalCooldown=t,this.remainingGlobalCooldown=t}updateCooldown(){if(this.remainingSkillCooldown>0){this.remainingSkillCooldown-=Laya.timer.delta;let t=this.remainingSkillCooldown/1e3;this.txt_time.text=t.toFixed(1),this.updateCooldownMask(this.skillCooldownMask,this.remainingSkillCooldown/this.skillCooldown,"#000000"),this.img_djs.visible=!0,this.txt_time.visible=!0}else this.img_djs.visible=!1,this.txt_time.visible=!1;this.remainingGlobalCooldown>0?(this.remainingGlobalCooldown-=Laya.timer.delta,this.updateCooldownMask(this.globalCooldownMask,this.remainingGlobalCooldown/this.globalCooldown,"#00000036"),this.globalCooldownMask.visible=!0):this.globalCooldownMask.visible=!1,this.skillIconItem.gray=this.remainingSkillCooldown>0||this.remainingGlobalCooldown>0}updateCooldownMask(t,i,r){let n=this.width/2,o=this.width/2,s=this.height/2;t.graphics.clear(),t.graphics.drawPie(o,s,n,-90+360*(1-i),270,r)}onDisable(){w.intance.off(E.EVENT_UPDATE_GLOBAL_COOL,this,this.updateGlobalCooldown),w.intance.offAllCaller(this),Laya.timer.clearAll(this)}};Vm=d([WL("x6t-z1VuR52yXWju0qxGBg")],Vm);var zm=class extends Laya.Box{};var{regClass:KL}=Laya,Fm=class extends zm{onEnable(){}notice(e){let t=e;this.label_tf.text=t,this.label_tf.x=68,this.image_bg.width=68*2+this.label_tf.textField.textWidth,t.length/45>1&&(this.image_bg.height=this.label_tf.textField.textHeight+25)}get view(){return this}get width(){return this.image_bg.width}};Fm=d([KL("Nm27xWbYSG6mj-EXqPOZ_A")],Fm);var Gm=class extends Laya.Box{};var{regClass:YL}=Laya,jm=class extends Gm{onEnable(){this.updateLocalAssets(),w.intance.on(E.ROLE_INFO_CHANGE,this,this.updateLocalAssets),w.intance.on(si.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets)}onDisable(){w.intance.off(E.ROLE_INFO_CHANGE,this,this.updateLocalAssets),w.intance.off(si.UPDATE_LOCAL_WALLET_LIST_EVENT,this,this.updateLocalAssets)}updateLocalAssets(){this.tf_3001.text=it.filterNumFormat(A.instance.getConsumeValue(Xe.TYPE_TOX),2),this.tf_3006.text=it.filterNumFormat(A.instance.getConsumeValue(Xe.TYPE_BTC),8),this.tf_3007.text=it.filterNumFormat(A.instance.getConsumeValue(Xe.TYPE_ETH),4),this.tf_3004.text=it.filterNumFormat(A.instance.getConsumeValue(Xe.TYPE_USDT),2),this.tf_3005.text=it.filterNumFormat(A.instance.getConsumeValue(Xe.TYPE_GOLD),0)}};jm=d([YL("7P9MlqipSaG6QoKpQowDbQ")],jm);var qm=class extends Laya.Box{};var{regClass:$L}=Laya,Wm=class extends qm{constructor(){super();this.isAddEvent=!1}addEvent(){this.isAddEvent||(this.isAddEvent=!0)}set dataSource(t){super.dataSource=t,this.heroVo=t,this.heroVo&&(this.addEvent(),this.setCurrentOutPut())}async setCurrentOutPut(){this.heroSk.dataSource=this.heroVo,this.tf_name.text=Kt.shortHeroStr(this.heroVo.name);let t=this.heroVo.heroItem.level+"";Wt.instance.setStar(this,t)}};Wm=d([$L("IcuwbMwvRKqMyiXxDzW-dA")],Wm);var Km=class extends Laya.Dialog{};var{regClass:XL}=Laya,Ym=class extends Km{constructor(t){super();this.m_strName="我是OpenSceneRuntime";this.m_iLayerType=V.M_POP;this.m_iPositionType=V.CENTER}onEnable(){this.initContainer(),He.instance.playSoundByName(He.soundName32)}initContainer(){var t=Ue.instance.getOneItem();t&&this.showItem(t)}showItem(t){let i=this.heroListItem;i.dataSource=t}onDisable(){w.intance.event(E.EVENT_CHECK_REMAIN,h.HeroGetDialog)}};Ym=d([XL("mrqJhWahTxuTjeSGIs559Q")],Ym);var rt=class rt{constructor(){}static pointEquil(e,t){return e&&t&&e.x==t.x&&e.y==t.y}static isEmpty(e){for(let t in e)return!1;return!0}static showTxtEffect(e,t){let i=parseInt(e.text),r=Math.floor((t-i)/5),n=0;Laya.timer.loop(60,null,o);let o=function(){n++,i+=r,n>=5&&(i=t,Laya.timer.clear(null,o)),e.text=i+""}}static showTxtFlash(e){let t=e.color;e.color=rt.COLORS[0],Laya.Tween.to(e,{},10,null,Laya.Handler.create(null,i),50);let i=function(){e.color=rt.COLORS[1],Laya.Tween.to(e,{},10,null,Laya.Handler.create(null,r),50)},r=function(){e.color=rt.COLORS[0],Laya.Tween.to(e,{},10,null,Laya.Handler.create(null,n),50)},n=function(){e.color=rt.COLORS[1],Laya.Tween.to(e,{},10,null,Laya.Handler.create(null,o),50)},o=function(){e.color=rt.COLORS[0],Laya.Tween.to(e,{},10,null,Laya.Handler.create(null,s),50)},s=function(){e.color=rt.COLORS[1],Laya.Tween.to(e,{},10,null,Laya.Handler.create(null,l),50)},l=function(){e.color=t}}static getProKey(e){return rt.PRO_DIC[e]?rt.PRO_DIC[e]:e}static getIconName(e){return rt.proList[e]}static clonePoint(e){return new Laya.Point(e.x,e.y)}static copyObj(e){let t={};for(let i in e)t[i]=e[i];return t}static mergeObj(e,t){for(let i in t)e[i]?e[i]=parseFloat(e[i])+parseFloat(t[i]):e[i]=t[i];return e}static checkHit(e){return e.visible&&e.mouseX>0&&e.mouseY>0&&e.mouseX<=e.width&&e.mouseY<=e.height}static separateObj(e,t){if(t)for(let i in t)e[i]&&(e[i]=parseFloat(e[i])-parseFloat(t[i]));return e}static toFixed(e,t=1){if((e+"").indexOf(".")!=-1){let i=parseFloat(e).toFixed(t);return t==1&&i.charAt(i.length-1)=="0"&&(i=parseInt(i)+""),i}return e+""}static formatResWith(e){return e>=1e12?Math.floor(e/1e12)+rt.RES_W[3]:e>=1e9?Math.floor(e/1e9)+rt.RES_W[2]:e>=1e6?Math.floor(e/1e6)+rt.RES_W[1]:e>=1e4?Math.floor(e/1e3)+rt.RES_W[0]:e+""}static formatNumWithSign(e,t=","){e=Math.floor(e);let i=e+"",r=1,n=[];for(let o=i.length-1;o>=0;o--)n.push(i.charAt(o)),r>0&&r%3==0&&n.push(t),r++;return n.reverse(),n[0]==t&&n.shift(),n.join("")}static autoRecyle(e,t=!1){e.on(Laya.Event.COMPLETE,null,i,[e]),e.isPlaying||e.play(1,!1);let i=function(r){r.off(Laya.Event.COMPLETE,null,i),r.stop(),r.removeSelf(),t&&Laya.Pool.recover("Animation",r)}}static createEllipse(e,t,i,r,n,o=1,s="#ffffff"){let l=[],c=r>n?o/r:o/n;for(let u=0;u<2*Math.PI;u+=c)l.push(t+r*Math.cos(u)-r/2,i+n*Math.sin(u));return e&&e.drawPoly(l.shift(),l.shift(),l,s),l}};rt.blackFilter=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.78,0]),rt.blackFilter2=new Laya.ColorFilter([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.5,0]),rt.qualityColors=["#78cefd","#78cefd","#78cefd","#d5a8ff","#fdd378","#ffa8a8","#ffa8a8","#ffa8a8"],rt.COLORS=["#69ff4c","#FFFFFF"],rt.PRO_DIC={HP:"hp",ATK:"attack",DEF:"defense",SPEED:"speed",RES:"resilience",CDMG:"critDamage",CDMGR:"critDamReduct"},rt.proList={hp:"HP",attack:"ATK",defense:"DEF",speed:"SPEED",hit:"hit",dodge:"dodge",crit:"crit",critDamage:"CDMG",resilience:"RES",critDamReduct:"CDMGR"},rt.RES_W=["K","M","B","T"];var Jn=rt;var $m=class extends Laya.Box{};var{regClass:ZL}=Laya,Xm=class extends $m{constructor(){super();this.isAddEvent=!1}set dataSource(t){super.dataSource=t,this.shopItem=t,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.tf_name.text=I.instance.getLanguage(this.shopItem.title),this.img_const.skin=G.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=it.formatNumber(this.shopItem.cost[1])+"",this.shopItem.type==1&&(this.tf_name.color=Jn.qualityColors[parseInt(this.shopItem.icon)-1],this.img_bg.skin=G.instance.getHeroQuality(this.shopItem.icon),this.img_icon.skin=G.instance.getHeroEggIcon(this.shopItem.icon))}};Xm=d([ZL("awS07ko0RBaxCnxXWqiR4g")],Xm);var Zm=class extends Laya.Box{};var{regClass:QL}=Laya,Qm=class extends Zm{constructor(){super();this.isAddEvent=!1}set dataSource(t){super.dataSource=t,this.shopItem=t,this.shopItem&&this.setCurrentOutPut()}async setCurrentOutPut(){if(this.tf_name.text=I.instance.getLanguage(this.shopItem.title),this.img_const.skin=G.instance.getMoneyIcon(this.shopItem.cost[0]),this.tf_const.text=it.formatNumber(this.shopItem.cost[1])+"",this.shopItem.type==2){var t=ie.intance.m_dicItems.get(this.shopItem.icon);this.img_bg.skin=G.instance.getItemQualityIcon(t.quality+""),this.tf_name.color=Jn.qualityColors[t.quality-1],this.img_icon.skin=G.instance.getItemIcon(this.shopItem.icon)}}};Qm=d([QL("din69PYeRbSapMB2H6E06g")],Qm);var Jm=class extends Laya.Scene{};var{regClass:JL}=Laya,ed=class extends Jm{constructor(){super(...arguments);this.currTab=0;this.type=1;this.addL=1;this.price=0;this.isSkReady=!1}onAwake(){this.m_iLayerType=V.M_POP,this.m_iPositionType=V.UP}onOpened(t){t&&(this.type=t,this.onClickTab(this.type))}onEnable(){w.intance.on(E.EVENT_HERO_DRAW_BACK,this,this.onDrawBack),this.btn_recruit.on(Laya.Event.CLICK,this,this.onRecruit),this.btn_reduce.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_reduce]),this.btn_plus.clickHandler=new Laya.Handler(this,this.handleClickBtn,[this.btn_plus]),this.btn_1.on(Laya.Event.CLICK,this,this.onClickTab,[1]),this.btn_2.on(Laya.Event.CLICK,this,this.onClickTab,[2]),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.listPanel1.vScrollBarSkin="",this.listPanel1.selectHandler=Laya.Handler.create(this,this.onSelectItem,[1],!1),this.listPanel2.vScrollBarSkin="",this.listPanel2.selectHandler=Laya.Handler.create(this,this.onSelectItem,[2],!1),this.img_sk.on(Laya.Event.PLAYED,this,this.stopAni,[2]),this.box_2.visible=!1,this.initLuckDrawView();let t=(Laya.stage.height-le.DESIGN_HEIGHT)/2}async onRecruit(){if(this.shopItem.open==0&&le.Debug==0){be.instance.notice(I.instance.getLanguage(12));return}this.shopItem.type==1?(this.setChou1Ani("animation"+this.shopItem.icon+"_1"),await ft.instance.recruit(this.shopItem.id),this.setChou2Ani("animation"+this.shopItem.icon+"_2")):await ft.instance.recruitItem(this.shopItem.id,this.addL)}setTab(t){for(let i=1;i<7;i++)t==i?(this["btn_"+i].getChildByName("selectBox").visible=!0,this["btn_"+i].getChildByName("tf_txt").color="#143f6b",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+"_s.png"):(this["btn_"+i].getChildByName("selectBox").visible=!1,this["btn_"+i].getChildByName("tf_txt").color="#7ff1fe",this["btn_"+i].getChildByName("img_tab_icon").skin="res/shop/img_shop_"+i+".png")}async initLuckDrawView(){this.destroyed||(this.type?this.onClickTab(this.type):this.onClickTab(1))}onClickTab(t){if(this.currTab!=t)if(this.setTab(t),t==1){if(this.box_2.visible=!0,this.destroyed)return;this.shopItems=this.getItemByType(1),this.listPanel1.array=this.shopItems,this.listPanel1.visible=!0,this.listPanel2.visible=!1,this.listPanel1.selectedIndex=-1,this.listPanel1.selectedIndex=0}else{if(this.box_2.visible=!0,this.destroyed)return;this.shopItems=this.getItemByType(2),this.listPanel2.dataSource=this.shopItems,this.listPanel1.visible=!1,this.listPanel2.visible=!0,this.listPanel2.selectedIndex=-1,this.listPanel2.selectedIndex=0}}getItemByType(t){var i=ie.intance.m_dicShops.values,r=[];return i.forEach(n=>{n.type==t&&r.push(n)}),r}onSelectItem(t,i){this.shopItem=this.shopItems[i],console.log(this.shopItem),this.shopItem?(this.tf_name.text=I.instance.getLanguage(this.shopItem.title),this.tf_des.text=I.instance.getLanguage(this.shopItem.des),this.img_const.skin=G.instance.getMoneyIcon(this.shopItem.cost[0]),this.addL=1,this.price=it.formatNumber(this.shopItem.cost[1]),this.setPriceByNum(),t==1?(this.img_icon.visible=!1,this.img_sk.visible=!0,this.setIdleAni("animation"+this.shopItem.icon+"_0"),this.box_count.visible=!1):t==2&&(this.img_icon.skin=G.instance.getItemBigIcon(this.shopItem.icon),this.img_icon.y=60,this.img_icon.visible=!0,this.img_sk.visible=!1,this.box_count.visible=!0),this.btn_recruit.visible=!0):(this.tf_name.text="",this.tf_des.text="",this.img_icon.visible=!1,this.img_sk.visible=!1,this.box_count.visible=!1,this.btn_recruit.visible=!1)}handleClickBtn(t){switch(t){case this.btn_reduce:this.addL>1&&this.addL--,this.setPriceByNum();break;case this.btn_plus:this.addL<100&&this.addL++,this.setPriceByNum();break}}setPriceByNum(){this.tf_num.text=this.addL+"",this.tf_const.text=this.addL*this.price+""}setToMainScene(){xe.intance.setCurrentScene(de.M_SCENE_MAIN)}stopAni(t){console.log("stopAni: "+t),this.isSkReady||(this.isSkReady=!0,this.callLater(this.stopSk))}stopSk(){this.img_sk.paused(),this.img_sk.stop()}setIdleAni(t){this.isSkReady?(this.img_sk.play(t,!1),this.img_sk.stop()):this.img_sk.animationName=t}setChou1Ani(t){this.isSkReady?this.img_sk.play(t,!0):this.img_sk.animationName=t}setChou2Ani(t){this.isSkReady?this.img_sk.play(t,!1):this.img_sk.animationName=t,Laya.timer.once(800,this,this.openHeroGetView)}openHeroGetView(){Ue.instance.autoPop=!0,Zt.instance.startShow(),this.setIdleAni("animation"+this.shopItem.icon+"_0")}onDrawBack(t){}startAni(){this.img_sk.paused(),this.img_sk.play(0,!1)}removeEvent(){w.intance.off(E.EVENT_HERO_DRAW_BACK,this,this.onDrawBack)}};ed=d([JL("IPCUkD5kRse3Gz5tw0Aovw")],ed);var td=class extends Laya.Scene{};var{regClass:e_}=Laya,id=class extends td{constructor(){super(...arguments);this.currTab=0;this.type=1}onAwake(){this.m_iLayerType=LayerManager.M_POP,this.m_iPositionType=LayerManager.UP}onOpened(t){this.type=t}onEnable(){this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.initLuckDrawView();let t=(Laya.stage.height-GameSetting.DESIGN_HEIGHT)/2}async initLuckDrawView(){this.getItemByName(""),this.destroyed}onSetUnionInfo(){var t=this.items[selectIndex];console.log(t),t?(this.tf_name.text=GameLanguageMgr.instance.getLanguage(t.name),this.tf_des.text=GameLanguageMgr.instance.getLanguage(t.declaration),this.tf_name.text=GameLanguageMgr.instance.getLanguage(t.name),this.tf_num.text="<font color='#25ff63'>"+t.number+"</font>/"+t.maxNumber,this.img_lvIcon.skin="res/union1/img_trade_"+(t.unionLv>3?4:t.unionLv)+".png",this.box_show.visible=!0):this.box_show.visible=!1}setToMainScene(){SceneManager.intance.setCurrentScene(SceneType.M_SCENE_MAIN)}removeEvent(){}};id=d([e_("KR8HZN1dSv2Bz_62yIgOrg")],id);var ad=class extends Laya.Box{};var{regClass:t_}=Laya,rd=class extends ad{constructor(){super();this.isAddEvent=!1}set dataSource(t){super.dataSource=t,this.unionItem=t,this.unionItem&&this.setCurrentOutPut()}async setCurrentOutPut(){this.tf_name.text=I.instance.getLanguage(this.unionItem.name),this.tf_lv.text=I.instance.getUILang("LV.")+this.unionItem.unionLv,this.tf_num.text="<font color='#25ff63'>"+this.unionItem.number+"</font>/"+this.unionItem.maxNumber,this.img_lvBg.skin="res/union1/img_trade_di_"+(this.unionItem.unionLv>3?4:this.unionItem.unionLv)+".png",this.img_lvIcon.skin="res/union1/img_trade_"+(this.unionItem.unionLv>3?4:this.unionItem.unionLv)+".png"}onChange(t){t?this.bg.skin="res/union1/img_trade_bg_2.png":this.bg.skin="res/union1/img_trade_bg_1.png"}};rd=d([t_("cbbqawzdSI2g161G69xpUg")],rd);var nd=class extends Laya.Scene{};var{regClass:i_}=Laya,od=class extends nd{constructor(){super(...arguments);this.currTab=0;this.type=1;this.items=[]}onAwake(){this.m_iLayerType=V.M_POP,this.m_iPositionType=V.UP}onOpened(t){this.type=t}onEnable(){this.btn_search.on(Laya.Event.CLICK,this,this.onSearch),this.btn_join.on(Laya.Event.CLICK,this,this.onJoin),this.btn_back&&this.btn_back.on(Laya.Event.CLICK,this,this.setToMainScene),this.list_union.vScrollBarSkin="",this.list_union.selectHandler=Laya.Handler.create(this,this.onSelectItem,null,!1),this.list_union.renderHandler=Laya.Handler.create(this,this.onItemRender,null,!1),this.box_show.visible=!1,this.box_list.visible=!1,this.initLuckDrawView();let t=(Laya.stage.height-le.DESIGN_HEIGHT)/2}async initLuckDrawView(){var t=await pe.requestPost("wxgame/union/list",{});t?this.unionData=t.unionList:be.instance.notice(I.instance.getLanguage(135)),this.getItemByName(""),this.box_list.visible=!0}getItemByName(t){if(this.list_union.selectedIndex=-1,this.items=[],this.unionData)for(var i=this.unionData.length,r=0;r<i;r++){var n=this.unionData[r],o=ie.intance.m_dicUnions.get(n.id),s=I.instance.getLanguage(o.name);Kt.caseInsensitiveSearchWithRegex(s,t)&&(o.unionLv=n.lv,o.number=n.memberNum,this.items.push(o))}this.list_union.array=this.items,this.items.length>0?this.list_union.selectedIndex=0:this.list_union.selectedIndex=-1}onSearch(){var t=this.input_search.text;this.getItemByName(t)}onJoin(){var t=this.list_union.selectedItem;t&&Vt.instance().AlertByType(he.BASEALERTVIEW,I.instance.getLanguage("确认加入公会吗?"),he.CANCEL,Laya.Handler.create(this,this.onJoinSure))}onJoinSure(){}onItemRender(t,i){t.onChange(this.list_union.selectedIndex==i)}onSelectItem(t,i){var r=this.items[t];console.log(r),r?(this.tf_name.text=I.instance.getLanguage(r.name),this.tf_des.text=I.instance.getLanguage(r.declaration),this.tf_name.text=I.instance.getLanguage(r.name),this.tf_lv.text=I.instance.getUILang("LV.")+r.unionLv,this.tf_num.text="<font color='#25ff63'>"+r.number+"</font>/"+r.maxNumber,this.img_lvIcon.skin="res/union1/img_trade_"+(r.unionLv>3?4:r.unionLv)+".png",this.box_show.visible=!0):this.box_show.visible=!1}setToMainScene(){xe.intance.setCurrentScene(de.M_SCENE_MAIN)}removeEvent(){}};od=d([i_("VfpfbqXcSQalDIkuosz8Rw")],od);var{regClass:a_,property:XZ}=Laya,Vs=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.getComponent(Laya.RigidBody).setVelocity({x:0,y:-10})}onTriggerEnter(e,t,i){this.owner.removeSelf()}onUpdate(){this.owner.y<-10&&this.owner.removeSelf()}onDisable(){Laya.Pool.recover("bullet",this.owner)}};Vs=d([a_("hIXP-u9_RfeIwPLhNGNjGw")],Vs);var{regClass:r_,property:JZ}=Laya,zs=class extends Laya.Script{constructor(){super()}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onClick)}onClick(e){Laya.stage.width=1334,Laya.stage.height=750,Laya.stage.scaleMode=Laya.Stage.SCALE_FIXED_WIDTH,Laya.Scene.open("scenes/Index.ls")}onDisable(){this.owner.off(Laya.Event.MOUSE_DOWN,this)}};zs=d([r_("DQCudilORvOvMM7hTH8i7w")],zs);var{regClass:n_,property:o_}=Laya,ca=class extends Laya.Script{constructor(){super();this.level=1}get itemId(){return this._itemId}set itemId(t){this._itemId=t,this.owner.skin="resources/UI/images/bag/"+t+".png"}onEnable(){this._rig=this.owner.getComponent(Laya.RigidBody),this.level=Math.round(Math.random()*5)+1}onUpdate(){}onCollisionEnter(t){console.log("collision: ",t)}onTriggerEnter(t,i,r){var n=this.owner;if(console.log("owener: ",n),t.label==="buttle"&&n.parent){let o=Laya.Pool.getItemByCreateFun("effect",this.createEffect,this);o.pos(n.x,n.y),n.parent.addChild(o),o.play(0,!0),n.removeSelf(),Laya.SoundManager.playSound("resources/sound/destroy.wav")}}createEffect(){let t=new Laya.Animation;t.loadAnimation("resources/ani/TestAni.ani"),t.on(Laya.Event.COMPLETE,null,i);function i(){t.removeSelf(),Laya.Pool.recover("effect",t)}return t}onDisable(){Laya.Pool.recover("dropBox",this.owner)}};d([o_({type:"number"})],ca.prototype,"level",2),ca=d([n_("3L23NCFLSAieUApqTrVoCQ")],ca);var{regClass:s_,property:rQ}=Laya,Er=class extends Laya.Script{constructor(){super();this.touchHeroIds=new te;this.touchGlasses=new te;this.updateIndex=0}onAwake(){}onEnable(){}onCollisionEnter(t){console.log(this.constructor.name+" onCollisionEnter collision",t)}onCollisionStay(t){console.log(this.constructor.name+" onCollisionStay collision",t)}onCollisionExit(t){console.log(this.constructor.name+" onCollisionExit collision",t)}onTriggerEnter(t,i,r){if(console.log(this.constructor.name+" onTriggerEnter other",t,"self",i,r),t.label==="ground")console.warn("ground in");else if(t.label&&t.label.startsWith("grass"))this.owner.isMe&&(console.warn("grass in"),this.touchGlasses.set(t.label,!0),this.setMyCurrArea());else if(t.label==="item")this.owner.enterItemId=t.owner.getComponent(ca).itemId;else if(t.label==="role"){var n=t.owner.roomPlayerDto.id;if(this.touchHeroIds.set(n,t.owner),this.owner.displacementType==2){var o=z.instance.canAttack(this.owner,t.owner);o&&Laya.Tween.clearAll(this.owner)}}}onTriggerStay(t,i,r){console.log(this.constructor.name+" onTriggerStay other",t,"self",i,r)}onTriggerExit(t,i,r){if(console.log(this.constructor.name+" onTriggerExit other",t,"self",i,r),t.label==="ground")this.owner.inGround=!1,console.warn("ground exit");else if(t.label&&t.label.startsWith("grass"))this.owner.isMe&&(console.warn("grass out"),this.touchGlasses.remove(t.label),this.setMyCurrArea());else if(t.label==="item")this.owner.enterItemId==t.owner.getComponent(ca).itemId&&(this.owner.enterItemId=0);else if(t.label==="role"){var n=t.owner.roomPlayerDto.id;this.touchHeroIds.remove(n)}}setMyCurrArea(){this.touchGlasses.keys.length>0?this.owner.currArea=1:this.owner.currArea=0,this.owner.onSendMoveData()}onUpdate(){if(this.owner.isMe)z.instance.myHeroSpr.currArea>0?this.owner.alpha=.6:this.owner.alpha=1;else{this.owner.currArea>0?z.instance.myHeroSpr.currArea==this.owner.currArea?(this.owner.visible=!0,this.owner.alpha=.6):this.owner.visible=!1:(this.owner.visible=!0,this.owner.alpha=1);return}if(!this.owner.isStop){if(this.owner.speed>0){switch(this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.heroSk.isReady&&this.owner.walk(),this.lastSpeed=this.owner.speed),this.owner.roleDirection){case 1:this.owner.y=Math.round(this.owner.y-this.owner.speed);break;case 2:this.owner.x=Math.round(this.owner.x+this.owner.biasSpeed),this.owner.y=Math.round(this.owner.y-this.owner.biasSpeed);break;case 3:this.owner.x=Math.round(this.owner.x+this.owner.speed);break;case 4:this.owner.x=Math.round(this.owner.x+this.owner.biasSpeed),this.owner.y=Math.round(this.owner.y+this.owner.biasSpeed);break;case 5:this.owner.y=Math.round(this.owner.y+this.owner.speed);break;case 6:this.owner.x=Math.round(this.owner.x-this.owner.biasSpeed),this.owner.y=Math.round(this.owner.y+this.owner.biasSpeed);break;case 7:this.owner.x=Math.round(this.owner.x-this.owner.speed);break;case 8:this.owner.x=Math.round(this.owner.x-this.owner.biasSpeed),this.owner.y=Math.round(this.owner.y-this.owner.biasSpeed);break}console.log("this.owner.inControl 0: "+this.owner.inControl+", id: "+this.owner.roomPlayerDto.id),this.owner.inControl&&!this.owner._isDead&&(console.log("this.owner.inControl 1: "+this.owner.inControl+", id: "+this.owner.roomPlayerDto.id),this.touchHeroIds.values.forEach(t=>{var i=z.instance.canTui(this.owner,t);i&&(console.log("this.owner.inControl 2: "+this.owner.inControl+", id: "+this.owner.roomPlayerDto.id),t.beiTui(this.owner.roomPlayerDto.id))}))}else this.owner.isLockAni||(this.lastSpeed!=this.owner.speed||this.owner.aniChange)&&(this.owner.aniChange=!1,this.owner.idle(),this.lastSpeed=this.owner.speed);this.updateIndex==0&&this.owner.onSendMoveData(),this.updateIndex++,this.updateIndex>0&&(this.updateIndex=0)}}onDisable(){}};Er=d([s_("DknC7B57SZi-09Mz092daQ")],Er);var{regClass:l_,property:cv}=Laya,ua=class extends Laya.Script{constructor(){super();this.createBoxInterval=1e3;this._time=0;this._started=!1;this.updateStop=!1}onEnable(){let t=["resources/UI/images/test/b1.png"];Laya.loader.load(t).then(i=>{this._time=Date.now(),this._gameBox=this.owner.getChildByName("gameBox"),Laya.stage.on(Laya.Event.BLUR,this,()=>{this.updateStop=!0}),Laya.stage.on(Laya.Event.FOCUS,this,()=>{this.updateStop=!1}),Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onStageClick)})}onStart(){let t=this.owner.getChildByName("ground").getComponent(Laya.BoxCollider);t.width=Laya.stage.width}onUpdate(){if(this.updateStop)return;let t=Date.now();t-this._time>this.createBoxInterval&&this._started&&(this._time=t,this.createBox())}createBox(){let t=Laya.Pool.getItemByCreateFun("dropBox",this.dropBox.create,this.dropBox);t.pos(Math.random()*(Laya.stage.width-100),-100),this._gameBox.addChild(t)}onStageClick(t){t.stopPropagation();let i=Laya.Pool.getItemByCreateFun("bullet",this.bullet.create,this.bullet);i.pos(Laya.stage.mouseX,Laya.stage.mouseY),this._gameBox.addChild(i)}startGame(){this._started||(this._started=!0,this.enabled=!0)}stopGame(){this._started=!1,this.enabled=!1,this.createBoxInterval=1e3,this._gameBox.removeChildren()}};d([cv({type:Laya.Prefab})],ua.prototype,"dropBox",2),d([cv({type:Laya.Prefab})],ua.prototype,"bullet",2),ua=d([l_("5iJgbfCiSn6Rc8upAfHtjA")],ua);var sd=class extends Laya.Scene{};var{regClass:c_,property:dQ}=Laya,Sr=class extends sd{constructor(){super();Sr.instance=this}onEnable(){this._control=this.getComponent(ua),this.tipLbll.on(Laya.Event.CLICK,this,this.onTipClick)}onTipClick(t){this.tipLbll.visible=!1,this._score=0,this.scoreLbl.text="分数：",this._control.startGame()}addScore(t=1){this._score+=t,this.scoreLbl.text="分数："+this._score,this._control.createBoxInterval>600&&this._score%20==0&&(this._control.createBoxInterval-=20)}stopGame(){this.tipLbll.visible=!0,this.tipLbll.text="游戏结束了，点击屏幕重新开始",this._control.stopGame()}};Sr=d([c_("Y5UkAabiTgWFZQnBL1EpEw")],Sr);var ld=class extends Laya.Scene{};var{regClass:u_,property:wQ}=Laya,Fs=class extends ld{constructor(){super()}onOpened(e){e&&(this.msgLab.x=e.point&&e.point.x?e.point.x:Laya.stage.mouseX-50,this.msgLab.y=e.point&&e.point.y?e.point.y:Laya.stage.mouseY-80,this.msgLab.text=e.text,Laya.Tween.to(this.msgLab,{y:this.msgLab.y-100,alpha:0},1e3,Laya.Ease.linearNone))}};Fs=d([u_("9kGOzpbbSOWSAmN0l9VtfQ")],Fs);var{regClass:p_,property:pf}=Laya,Gs=Laya.Browser,uv=Laya.Render,pv=Laya.SpriteUtils,bt=class extends Laya.Script{constructor(){super();bt.instance=this}onEnable(){this.videoBtn.on(Laya.Event.MOUSE_DOWN,this,()=>{this.createElementVideo()})}createElementVideo(){Gs.window.IframeElementRT=this,this.createScript(),this.createDiv(),this.createIframe("resources/files/video.html?url=layaAir.mp4"),this.setDOMElementInArea(),Laya.stage.on(Laya.Event.RESIZE,this,this.setDOMElementInArea)}setDOMElementInArea(){this.iframeElement!=null&&this.divElement!=null&&(pv.fitDOMElementInArea(this.divElement,this.closeBox,0,0,this.closeBox.width,this.closeBox.height),pv.fitDOMElementInArea(this.iframeElement,this.iframeBox,0,0,this.iframeBox.width,this.iframeBox.height))}createScript(){this.scriptElement=Gs.document.createElement("script"),Gs.document.body.appendChild(this.scriptElement),this.scriptElement.innerHTML="function closeVideo(){IframeElementRT.closeVideo() }"}createIframe(t){this.iframeElement=Gs.createElement("iframe"),Gs.document.body.appendChild(this.iframeElement),this.iframeElement.style.zIndex=uv.canvas.style.zIndex+998,this.iframeElement.src=t,this.iframeElement.style.margin="0",this.iframeElement.style.scrolling="no",this.iframeElement.style.frameborder="0",this.iframeElement.style.padding="0",this.iframeElement.style.left="0",this.iframeElement.style.top="0px",this.iframeElement.style.position="absolute"}createDiv(){this.divElement=Laya.Browser.createElement("div"),Laya.Browser.document.body.appendChild(this.divElement),this.divElement.innerHTML="<img src='resources/files/x.png' width='60px' height='60px' onclick='closeVideo()'/>",this.divElement.style.zIndex=uv.canvas.style.zIndex+999}closeVideo(){Laya.Browser.document.body.removeChild(this.scriptElement),Laya.Browser.document.body.removeChild(this.iframeElement),Laya.Browser.document.body.removeChild(this.divElement),this.scriptElement=this.iframeElement=this.divElement=null,Laya.stage.off(Laya.Event.RESIZE,this,this.setDOMElementInArea)}};d([pf({type:Laya.Button})],bt.prototype,"videoBtn",2),d([pf({type:Laya.Box})],bt.prototype,"closeBox",2),d([pf({type:Laya.Box})],bt.prototype,"iframeBox",2),bt=d([p_("ZtMxoJHQTWipjGWyGV51jQ")],bt);var cd=class extends Laya.Scene{};var{regClass:m_,property:SQ}=Laya,js=class extends cd{constructor(){super()}onEnable(){Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),this.tabBindViewStack(),this.topTab.selectedIndex=0,this.item0Tab.selectedIndex=0}onClicked(){let e=this.item2Tab.getChildByName("item2"),t=this.item2Tab.getChildByName("item3"),i=this.item2Tab.getChildByName("item4");e.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1)}),t.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/OpenScene.ls",!1)}),i.on(Laya.Event.MOUSE_DOWN,this,()=>{Laya.Scene.open("scenes/uiDemo/page/Dialog.ls",!1,{title:"弹窗的标题",text:"弹窗的具体文本……"})})}tabBindViewStack(){this.topTab.selectHandler=new Laya.Handler(this,e=>{this.tabPage.selectedIndex=e,e==1&&(this.item1Tab.selectedIndex=0),e==2&&(this.item2Tab.selectedIndex=0),e==3&&(this.item3Tab.selectedIndex=0),e==4&&(this.item4Tab.selectedIndex=0),Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!1),bt.instance.iframeElement&&bt.instance.closeVideo(),e==2&&this.item2Page.selectedIndex==1&&!bt.instance.iframeElement&&bt.instance.createElementVideo()}),this.item0Tab.selectHandler=new Laya.Handler(this,e=>{this.item0Page.selectedIndex=e}),this.item1Tab.selectHandler=new Laya.Handler(this,e=>{this.item1Page.selectedIndex=e,e!==4&&Laya.Physics2D.I?Laya.Physics2D.I.enableDebugDraw=!1:e==4&&Laya.Physics2D.I&&(Laya.Physics2D.I.enableDebugDraw=!0)}),this.item2Tab.selectHandler=new Laya.Handler(this,e=>{switch(this.item2Page.selectedIndex=e,e){case 1:!bt.instance.iframeElement&&bt.instance.createElementVideo();break;case 2:Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls",!1);break;case 3:Laya.loader.load("prefab/uiDemo/page/Win.lh").then(t=>{let i=t.create();this.tabPage.parent.addChild(i)});break;case 4:Laya.loader.load("prefab/uiDemo/page/Dialog.lh").then(t=>{t.create().show()});break}e!==1&&bt.instance.iframeElement&&bt.instance.closeVideo()}),this.item3Tab.selectHandler=new Laya.Handler(this,e=>{this.item3Page.selectedIndex=e}),this.item4Tab.selectHandler=new Laya.Handler(this,e=>{this.item4Page.selectedIndex=e})}onDisable(){}};js=d([m_("gbAKGLFtQ5WL6-NpVocAEA")],js);var{regClass:d_,property:ud}=Laya,pa=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onAwake(){console.log("创建动画模板"),this.createAniTemplate("moveB"),this.createAniTemplate("moveC"),this.createAniTemplate("moveE"),this.createAniTemplate("moveF"),this.createAniTemplate("moveH"),this.createAniTemplate("moveI"),this.createAniTemplate("moveK"),this.createAniTemplate("moveL"),this.aniSource.play(0,!0,"moveB")}onEnable(){this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.aniSource.play(0,!0,this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.aniSource.play(0,!0,this.selectAni.selectedLabel):this.aniSource.play(0,!1,this.selectAni.selectedLabel)})}createAniTemplate(t,i=8){let r=[];for(let n=0;n<i;n++)r.push("resources/UI/role/atlasAni/139x/"+t+n+".png");Laya.Animation.createFrames(r,t)}onError(t){console.log("加载失败: "+t)}};d([ud({type:Laya.Button})],pa.prototype,"playAni",2),d([ud({type:Laya.Button})],pa.prototype,"stopAni",2),d([ud({type:Laya.ComboBox})],pa.prototype,"selectAni",2),d([ud({type:Laya.Animation})],pa.prototype,"aniSource",2),pa=d([d_("tmkUlMggQi20FZpy6nC1aw")],pa);var{regClass:h_,property:pd}=Laya,ma=class extends Laya.Script{constructor(){super(...arguments);this.isPlay=!1}onEnable(){this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel),this.playAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!0,this.playAnimation(this.selectAni.selectedLabel)}),this.stopAni.on(Laya.Event.MOUSE_DOWN,this,()=>{this.isPlay=!1,this.aniSource.isPlaying&&this.aniSource.stop()}),this.selectAni.selectHandler=new Laya.Handler(this,()=>{this.isPlay?this.playAnimation(this.selectAni.selectedLabel):this.playAnimation(this.selectAni.selectedLabel,!1)})}playAnimation(t,i=!0,r=7){let n=[];for(let o=0;o<r;o++)n.push("resources/UI/role/frameAni/"+t+o+".png");this.aniSource.loadImages(n).play(0,i)}};d([pd({type:Laya.Button})],ma.prototype,"playAni",2),d([pd({type:Laya.Button})],ma.prototype,"stopAni",2),d([pd({type:Laya.ComboBox})],ma.prototype,"selectAni",2),d([pd({type:Laya.Animation})],ma.prototype,"aniSource",2),ma=d([h_("8gw7FS4iT1q8EhdN3sWklQ")],ma);var{regClass:f_,property:BQ}=Laya,mv=Laya.Event,b_=Laya.SpineSkeleton,qs=class extends Laya.Script{constructor(){super(...arguments);this.skinArray=["goblin","goblingirl"];this.skinIndex=0;this.spineAniIndex=6}onEnable(){this.createLayaSpine(),this.createSpine()}createLayaSpine(){this.skeletonNode=this.owner.getChildByName("skeletonNode"),Laya.loader.load("resources/UI/role/spineAni/goblins.sk").then(t=>{this.skeletonAni=t.buildArmature(1),this.skeletonNode.addChild(this.skeletonAni),this.skeletonAni.x=128,this.skeletonAni.y=390,this.spineAniNum=this.skeletonAni.getAnimNum(),this.skeletonAni.play(0,!0),this.changeSkin(),this.skeletonNode.on(mv.CLICK,this,this.changeSkin)})}parseComplete(){}createSpine(){this.spineNode=this.owner.getChildByName("spineNode"),Laya.loader.load("resources/UI/role/spineAni/spineboy-pma.skel",Laya.Loader.SPINE).then(t=>{this.spineAni=new b_,this.spineAni.templet=t,this.spineNode.addChild(this.spineAni),this.spineAni.scale(.3,.3),this.spineAni.pos(220,390),this.spineAniNum=this.spineAni.getAnimNum(),this.spineAni.play(this.spineAniIndex,!0),this.spineNode.on(mv.CLICK,this,this.changeAni)})}spineParseComplete(){}changeAni(){++this.spineAniIndex>=this.spineAniNum&&(this.spineAniIndex=5),this.spineAni.play(this.spineAniIndex,!0,!0)}changeSkin(){this.skeletonAni.showSkinByName(this.skinArray[this.skinIndex]),++this.skinIndex>=this.skinArray.length&&(this.skinIndex=0)}};qs=d([f_("qTd2xmRXT4i0Re94qly0Lg")],qs);var{regClass:y_,property:Ws}=Laya,dv=Laya.Event,g_=Laya.Point,ji=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new g_;this.angle=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.createMap(),this.sceneWindow.on(dv.MOUSE_UP,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2+26),this.roleAniNode.scale(.6,.6),this.roleAniNode.x=this.lastX=48,this.roleAniNode.y=this.lastY=48,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let t=this._animator.getDefaultState();console.log(t.name),this.createWallMap()}createWallMap(){Laya.loader.load("resources/tiledMap/desert_new.json").then(()=>{let i=Laya.loader.getRes("resources/tiledMap/desert_new.json").data.layers[0].data,r;r=new Array;for(var n=0;n<40;n++){r[n]=new Array;for(var o=0;o<60;o++)i[n*60+o]==30?r[n][o]=1:r[n][o]=0}this.graph=new window.Graph(r),this.opts=[],this.opts.closest=!0,this.opts.heuristic=window.astar.heuristics.diagonal})}mouseUp(t){if(this.isMoving)return;this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let i=this.gameMap.globalToLocal(this.stageMouse);var r=this.graph.grid[Math.ceil(this.roleAniNode.y/32)-1][Math.ceil(this.roleAniNode.x/32)-1],n=this.graph.grid[Math.ceil(i.y/32)-1][Math.ceil(i.x/32)-1];this._everyPath=window.astar.search(this.graph,r,n,{closest:this.opts.closest}),this._everyPath.length>0&&(this.isMoving=!0),Laya.timer.loop(100,this,this.loopfun)}loopfun(){if(this._everyPath.length>0){let t=this._everyPath[0].y*32+16,i=this._everyPath[0].x*32+16;t==this.lastX?i>this.lastY?this.angle=90:this.angle=270:t>this.lastX?this.angle=0:this.angle=180,this.switchAni("run"),this.lastX=t,this.lastY=i,Laya.Tween.to(this.roleAniNode,{x:t,y:i},100),this._everyPath.splice(0,1)}else this.switchAni("stand"),Laya.timer.clear(this,this.loopfun),this.isMoving=!1}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(t=null){this.onLoaded()}switchAni(t){if(t=="run"){let i=this.getOrientation(this.angle,this.runAniName);this._animator.play(i),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}getOrientation(t,i){let r=i.split(","),n=360/r.length;return r[Math.floor(t/n)]}onDisable(){Laya.stage.off(dv.MOUSE_UP,this,this.mouseUp),this.tiledMap&&this.tiledMap.destroy()}};d([Ws({type:Laya.Sprite})],ji.prototype,"gameMap",2),d([Ws({type:Laya.Prefab})],ji.prototype,"roleAni",2),d([Ws({type:"string"})],ji.prototype,"runAniName",2),d([Ws({type:"string"})],ji.prototype,"standAniName",2),d([Ws({type:Laya.Panel})],ji.prototype,"sceneWindow",2),ji=d([y_("zBb5TGy7Swu5_GpFiGzUng")],ji);var{regClass:v_,property:VQ}=Laya,hv=Laya.Rectangle,Tr=class extends Laya.Script{constructor(){super(...arguments);this._rect1=hv.TEMP;this._rect2=hv.TEMP}rectDetection(t,i){return!(t.x>i.x+i.width||t.x+t.width<i.x||t.y>i.y+i.height||t.y+t.height<i.y)}collisionWith(t,i,r){let n=[];if(r==0){var o=Laya.Point.create(),s=t.width/2,l=t.height/2,c=Laya.Point.create(),u,p;o.x=t.x+s,o.y=t.y+l,u=this.rectToRadius(t.width,t.height)}else if(r==2){var y,_;_=this.arrayToPoint(t)}for(let g=0;g<i.length;g++)if(t!=i[g])switch(r){case 0:c.x=i[g].x+i[g].width/2,c.y=i[g].y+i[g].height/2,p=this.rectToRadius(i[g].width,i[g].height),this.circleDetection(o,c,u+p)&&n.push(i[g]);break;case 1:this.rectDetection(t,i[g])&&n.push(i[g]);break;case 2:t.name==="c1"?(y=this.arrayToPoint(i[g]),this.circleAndPolygonDetection(t,y,i[g])&&n.push(i[g])):i[g].name==="c1"?this.circleAndPolygonDetection(i[g],_,t)&&n.push(i[g]):(y=this.arrayToPoint(i[g]),this.polygonDetection(_,y,t,i[g])&&n.push(i[g]));break}return n}circleAndPolygonDetection(t,i,r){let n=this.getSides(i),o=[],s=Laya.Point.create(),l=Laya.Point.create(),c=t.hitArea._hit._cmds[0].radius,u=this.getNodeCoord(i,r);s.x=t.x+t.hitArea._hit._cmds[0].x,s.y=t.y+t.hitArea._hit._cmds[0].y,l=this.getNearestPoint(s,u),o.push(new Laya.Point(l.x-s.x,l.y-s.y));for(let p=0,y=n.length;p<y;p++)o.push(this.perpendicular(n[p]));for(let p=0,y=o.length;p<y;p++){let _=o[p],g=this.getCircleProjection(s,_,c),f=this.getPolygonProjection(u,_);if(!this.isOverlap(g,f))return!1}return!0}getNearestPoint(t,i){let r=i[0],n=this.getDistance(t,r),o,s;for(let l=1;l<i.length;l++)o=i[l],s=this.getDistance(t,o),s<n&&(n=s,r=o);return r}polygonDetection(t,i,r,n){let o=this.getSides(t).concat(this.getSides(i)),s=[],l=this.getNodeCoord(t,r),c=this.getNodeCoord(i,n);for(let u=0,p=o.length;u<p;u++)s.push(this.perpendicular(o[u]));for(let u=0,p=s.length;u<p;u++){let y=s[u],_=this.getPolygonProjection(l,y),g=this.getPolygonProjection(c,y);if(!this.isOverlap(_,g))return!1}return!0}isOverlap(t,i){let r,n;return r=t.min<i.min?t.min:i.min,n=t.max>i.max?t.max:i.max,t.max-t.min+(i.max-i.min)>=n-r}getNodeCoord(t,i){let r=[];for(let n=0;n<t.length;n++){let o=Laya.Point.create();o.x=t[n].x+i.x+i.hitArea._hit._cmds[0].x,o.y=t[n].y+i.y+i.hitArea._hit._cmds[0].y,r.push(o)}return r}getPolygonProjection(t,i){let r=null,n=null;for(let o=0;o<t.length;o++){let s=this.dotProduct(t[o],i)/this.getLength(i);(r===null||s<r)&&(r=s),(n===null||s>n)&&(n=s)}return{min:r,max:n}}getCircleProjection(t,i,r){let n=this.dotProduct(t,i)/this.getLength(i);return{min:n-r,max:n+r}}rectToRadius(t,i){let r;return t==i?r=t/2:r=Math.sqrt(t*t+i*i)/2,r}circleDetection(t,i,r){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))<=r}circlesCollision(t,i,r,n){let o=this.subtract(t,i),s=this.getCircleProjection(t,o,r),l=this.getCircleProjection(i,o,n);return!!this.isOverlap(s,l)}arrayToPoint(t){let i=[],r=[];if(r=t.hitArea._hit._cmds[0].points,r&&r.length>3)for(let n=0;n<r.length/2;n++)i[n]=Laya.Point.create(),i[n].x=r[n*2],i[n].y=r[n*2+1];return i}perpendicular(t){let i=Laya.Point.create();return i.x=t.y,i.y=-t.x,i}getNormal(t){let i=Math.sqrt(t.x*t.x+t.y*t.y);return new Laya.Point(t.y/i,(0-t.x)/i)}getSides(t){var i=t,r=i.length,n=new Array;if(r>=3){for(var o=1,s=i[0];o<r;o++){let l=i[o];n.push(this.subtract(l,s)),s=l}n.push(this.subtract(i[0],i[r-1]))}return n}getLength(t){return Math.sqrt(t.x*t.x+t.y*t.y)}dotProduct(t,i){return t.x*i.x+t.y*i.y}subtract(t,i){return Laya.Point.create().setTo(t.x-i.x,t.y-i.y)}getDistance(t,i){let r=t.x-i.x,n=t.y-i.y;return Math.sqrt(r*r+n*n)}};Tr=d([v_("naI7Ga3ZQzuwHxZXbiaZEw")],Tr);var md=class extends Laya.View{};var{regClass:w_,property:jQ}=Laya,da=class extends md{constructor(){super();this._detectionType=0;this.collisionNodes=null;da.i=this}onEnable(){this.collisionNodes=[this.c1,this.p1,this.p2],this._script=this.getComponent(Tr),this.detectionType.selectHandler=new Laya.Handler(this,this.onSelected),this.detectionType.selectedIndex=0}onSelected(t){switch(console.log("onSelected:"+t),this._detectionType=t,t){case 0:this.setCircleLine([this.c11,this.p11,this.p22]);break;case 1:this.setRectLine([this.c11,this.p11,this.p22]);break;case 2:this.c11.graphics.clear(),this.p11.graphics.clear(),this.p22.graphics.clear();break}}collisionWith(t){let i;i=this._script.collisionWith(t,this.collisionNodes,this._detectionType),i.length>0?(i.push(t),this.setLineWidth(i)):this.retsetLineWidth()}setLineWidth(t){for(let i=0;i<t.length;i++)t[i]._graphics._cmds[0].lineWidth=3}retsetLineWidth(){for(let t=0;t<this.collisionNodes.length;t++)this.collisionNodes[t]._graphics._cmds[0].lineWidth=0}setCircleLine(t,i=1,r="#1e00fb"){for(let n=0;n<t.length;n++){t[n].graphics.clear();let o=t[n].width/2,s=t[n].height/2,l=this._script.rectToRadius(t[n].width,t[n].height);t[n].graphics.drawCircle(o,s,l,null,r,i)}}setRectLine(t,i=1,r="#1e00fb"){for(let n=0;n<t.length;n++)t[n].graphics.clear(),t[n].graphics.drawRect(t[n].x,t[n].y,t[n].width,t[n].height,null,r,i)}};da=d([w_("RrGHZH_SROCrF5XxFa05sg")],da);var{regClass:L_,property:eo}=Laya,kr=Laya.Event,fv=Laya.Point,Ai=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new fv;this.axisPivot=new fv;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1;this.mLastX=0;this.mLastY=0}onEnable(){this.createMap(),this.joystickAxis=this.joystickBG.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(kr.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(kr.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(kr.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(kr.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.sceneWindow.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.sceneWindow.width/2,this.roleAniNode.y=this.sceneWindow.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D);let t=this._animator.getDefaultState();console.log(t.name)}createMap(){this.tiledMap=new Laya.TiledMap,this.tiledMap.createMap("resources/tiledMap/desert_new.json",new Laya.Rectangle(0,0,this.sceneWindow.width,this.sceneWindow.height),new Laya.Handler(this,this.completeHandler))}onLoaded(){this.tiledMap.mapSprite().removeSelf(),this.gameMap.addChild(this.tiledMap.mapSprite())}completeHandler(t=null){this.onLoaded()}mouseDown(t){this.touchId=t.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let t=this.joystickBG.globalToLocal(this.stageMouse),i=t.x-this.joystickAxis.width/2,r=t.y-this.joystickAxis.height/2;this.radian=Math.atan2(r-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,t.x,t.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(t.x-this.joystickAxis.width/2,t.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(t){if(t=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(t){t.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(t){t.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(t,i){let r=i.split(","),n=360/r.length;return r[Math.floor(t/n)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let t=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;this.mLastX+=t,this.mLastY+=i,this.mLastX<0?this.mLastX=0:this.mLastX>1920-this.sceneWindow.width&&(this.mLastX=1920-this.sceneWindow.width),this.mLastY<0?this.mLastY=0:this.mLastY>1280-this.sceneWindow.height&&(this.mLastY=1280-this.sceneWindow.height),this.tiledMap.moveViewPort(this.mLastX,this.mLastY)}getDistance(t,i,r,n){let o=t-r,s=i-n;return Math.sqrt(o*o+s*s)}onDisable(){Laya.stage.off(kr.MOUSE_DOWN,this,this.mouseDown),Laya.stage.off(kr.MOUSE_UP,this,this.mouseUp),Laya.stage.off(kr.MOUSE_MOVE,this,this.mouseMove),this.tiledMap&&this.tiledMap.destroy()}};d([eo(Laya.Sprite)],Ai.prototype,"gameMap",2),d([eo(Laya.Prefab)],Ai.prototype,"roleAni",2),d([eo({type:"string"})],Ai.prototype,"runAniName",2),d([eo({type:"string"})],Ai.prototype,"standAniName",2),d([eo({type:Laya.Panel})],Ai.prototype,"sceneWindow",2),d([eo(Laya.Image)],Ai.prototype,"joystickBG",2),Ai=d([L_("k2DFVaFIQEyMRaElgOWsVw")],Ai);var dd=class extends Laya.Box{};var{regClass:__}=Laya,Ks=class extends dd{constructor(){super();this.lastIndex=-1}onEnable(){let t="resources/json/bagList.json";Laya.loader.fetch(t,"json").then(i=>{i.bagList&&i.bagList.length>0&&(this.bagList.array=i.bagList,this.bagList.renderHandler=new Laya.Handler(this,this.onListRender),this.bagList.selectHandler=new Laya.Handler(this,this.onListSelect),this.bagList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.bagList.vScrollBarSkin="")})}onListRender(t,i){i>this.bagList.array.length||i<0}onListSelect(t){this.tips.visible=!0,this.bagList.array[t].listItemBG={skin:"resources/UI/images/bg/bg100-1.png"},this.lastIndex!==-1&&(this.bagList.array[this.lastIndex].listItemBG={skin:"resources/UI/images/bg/bg100-0.png"}),this.lastIndex=t,this.itemImg.skin=this.bagList.array[t].listItemImg.skin,this.itemNumber.text="数量 "+this.bagList.array[t].listItemNumber.text,this.itemReadme.text=this.bagList.array[t].readme}onListMouse(t,i){}onDisable(){}};Ks=d([__("fimeRTYXT46eMH6komwhJQ")],Ks);var{regClass:x_,property:mf}=Laya,$a=class extends Laya.Script{constructor(){super()}onEnable(){var t=this.getDataSourece();Laya.loader.load("prefab/ComboList.lh").then(i=>{let r=i.create();this.comboList=r,this.comboList.array=t,this.comboList.repeatY=t.length,this.combo2.list=this.comboList,this.combo2.list.width=this.combo2.width,this.combo2.list.hScrollBarSkin="",this.combo2.selectHandler=new Laya.Handler(this,this.onSelected2)}),this.combo1.selectHandler=new Laya.Handler(this,this.onSelected1)}onSelected1(t){this.selectedText.text="您选中了："+this.combo1.selectedLabel}onSelected2(t){this.selectedText.text="您选中了："+(t<0?"":this.comboList.array[t].label)}getDataSourece(){for(var t=[],i=0;i<10;i++)t[i]={optText:{text:"选项"+(i+1)}};return t}onDisable(){}};d([mf({type:Laya.ComboBox})],$a.prototype,"combo1",2),d([mf({type:Laya.ComboBox})],$a.prototype,"combo2",2),d([mf({type:Laya.Label})],$a.prototype,"selectedText",2),$a=d([x_("M6bGyqDSRCGU3TkvNeqvRw")],$a);var hd=class extends Laya.View{};var{regClass:I_}=Laya,Ys=class extends hd{onEnable(){this.hList.array=this.getListDataSource(),this.hList.scrollTo(1);let t=this.hList.cells[1].getChildByName("icon");t.scaleX=t.scaleY=2,this.hList.scrollBar.on(Laya.Event.CHANGE,this,this.onScrollBarChange),this.leftLimit=this.getLeftLimit(),this.rightLimit=this.getRightLimit()}onScrollBarChange(){var t=this.hList.scrollBar.value,i=this.hList.array;if(t>this.leftLimit){var r=i.shift();i[i.length]=r,this.hList.array=i,this.hList.scrollBar.value=t-this.hList.cells[0].width-this.hList.spaceX,this.iconTweenToLeft()}else t<this.rightLimit&&(r=i.pop(),i.unshift(r),this.hList.array=i,this.hList.scrollBar.value=t+this.hList.cells[0].width+this.hList.spaceX,this.iconTweenToRight())}iconTweenToLeft(t=200){let i=this.hList.cells[0].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},t);let r=this.hList.cells[1].getChildByName("icon");r.scaleX=r.scaleY=1,Laya.Tween.to(r,{scaleX:2,scaleY:2},t)}iconTweenToRight(t=200){let i=this.hList.cells[1].getChildByName("icon");i.scaleX=i.scaleY=2,Laya.Tween.to(i,{scaleX:1,scaleY:1},t);let r=this.hList.cells[2].getChildByName("icon");r.scaleX=r.scaleY=1,Laya.Tween.to(r,{scaleX:2,scaleY:2},t)}getRightLimit(){return this.hList.cells[0].width-this.hList.spaceX}getLeftLimit(){return this.hList.cells[0].width*2+this.hList.spaceX}getListDataSource(t=5){let i=[];for(let r=0;r<t;r++)i[r]={},i[r].icon={skin:`resources/UI/role/r${r}.png`};return i}};Ys=d([I_("WFag7yYwR9q-iI31OJUedg")],Ys);var{regClass:E_,property:fd}=Laya,ha=class extends Laya.Script{constructor(){super();this.optStatus=[];this.timestampFormat=(t,i)=>{let r=i?new Date(i):new Date,n={"M+":r.getMonth()+1,"D+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"S+":r.getMilliseconds()};new RegExp("(Y+)").test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,RegExp.$1.length==1?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t}}onEnable(){let t="resources/json/mailList.json";Laya.loader.fetch(t,"json").then(i=>{let r=i.mailList;r&&r.length>0&&(this.mailList.array=r,this.mailList.mouseHandler=new Laya.Handler(this,this.onListMouse),this.mailList.repeatY=r.length,this.mailList.vScrollBarSkin=""),this.addMail.on(Laya.Event.CLICK,this,this.addMialItem),this.selectDel.on(Laya.Event.CLICK,this,this.listSelectDel),this.selectFlag.on(Laya.Event.CLICK,this,this.listSelectFlag)})}listSelectFlag(){if(this.optStatus.length>0){for(let t=0;t<this.optStatus.length;t++){let i=this.optStatus[t];this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功标记"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}listSelectDel(){if(this.optStatus.length>0){this.optStatus.sort(function(t,i){return i-t});for(let t=0;t<this.optStatus.length;t++)this.mailList.array.splice(this.optStatus[t],1);this.optStatus=[],this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"已成功删除"})}else Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"没有勾选项，请先勾选"})}addMialItem(){var t=this.mailList.startIndex+1;let i={mailTitle:{text:"这里是新增加的邮件"+t},mailDateTime:{text:this.timestampFormat("YYYY-MM-DD hh:mm")},opt:{visible:!1},flagStatus:{skin:"resources/UI/images/comp/img_mail.png"},flagBtn:{label:"标为已读",labelColors:"#000000,#000000,#000000"}};if(this.mailList.array.splice(t,0,i),this.optStatus.length>0)for(let r=0;r<this.optStatus.length;r++)this.optStatus[r]>=t&&(this.optStatus[r]+=1);this.mailList.refresh()}onListMouse(t,i){if(t.type==Laya.Event.CLICK){var r=this.optStatus.indexOf(i);switch(t.target.name){case"optBG":r===-1?(this.mailList.array[i].opt={visible:!0},this.optStatus.push(i)):(this.mailList.array[i].opt={visible:!1},this.optStatus.splice(r,1)),this.mailList.refresh();break;case"mailTitle":Laya.Scene.open("scenes/uiDemo/Dialog.scene",!1,{title:this.mailList.array[i].mailTitle.text,text:"邮件内容，此处省略1000字……………………"}),this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"},this.mailList.refresh();break;case"flagBtn":this.mailList.array[i].flag===1?(this.mailList.array[i].flag=0,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail.png"},this.mailList.array[i].flagBtn={label:"标为已读",labelColors:"#000000,#000000,#000000"}):(this.mailList.array[i].flag=1,this.mailList.array[i].flagStatus={skin:"resources/UI/images/comp/img_mail_open.png"},this.mailList.array[i].flagBtn={label:"标为未读",labelColors:"#3277f3,#3277f3,#3277f3"}),this.mailList.refresh();break;case"delBtn":if(this.mailList.array.splice(i,1),r>-1){this.optStatus.splice(r,1);for(let n=r;n<this.optStatus.length;n++)this.optStatus[n]-=1}this.mailList.refresh(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"删除成功"});break}}}};d([fd({type:Laya.List})],ha.prototype,"mailList",2),d([fd({type:Laya.Button})],ha.prototype,"addMail",2),d([fd({type:Laya.Button})],ha.prototype,"selectDel",2),d([fd({type:Laya.Button})],ha.prototype,"selectFlag",2),ha=d([E_("HzpJPDUEQN69Xg1VasHb-w")],ha);var{regClass:S_,property:to}=Laya,Di=class extends Laya.Script{constructor(){super();this.scrollBarIsStop=!1;this.msgIdNow=1;this.itemIsOpen=!1;this.itemOpenId=-1;this.redHotStatus=[];this.mouseDown=!1}onEnable(){this.refreshList.array=this.createListData(9),this.refreshList.repeatY=this.refreshList.array.length,this.refreshList.vScrollBarSkin="",this.toLine.on(Laya.Event.CLICK,this,this.onToLineBtn),this.toTop.on(Laya.Event.CLICK,this,this.onToTopBtn),this.toBottom.on(Laya.Event.CLICK,this,this.onToBottomBtn),this.refreshList.on(Laya.Event.MOUSE_UP,this,this.stageOnMouseUp),this.refreshList.on(Laya.Event.MOUSE_OUT,this,this.stageOnMouseUp),this.refreshList.scrollBar.stopMoveLimit=this.scrollBarIsStopBind.bind(this),this.refreshLimit("dragTopLimit",80),this.refreshLimit("dragBottomLimit",80,20),this.refreshList.mouseHandler=new Laya.Handler(this,this.onListMouse)}stageOnMouseUp(){this.mouseDown=!1}refreshLimit(t,i,r=0,n=2e3){t==="dragTopLimit"?this.refreshList.scrollBar.topMoveLimit=i:t==="dragBottomLimit"&&(this.refreshList.scrollBar.bottomMoveLimit=i),this.refreshList.scrollBar.on(t,this,()=>{if(console.log("达到了滚动限制:"+t),this.refreshLoading.visible=!0,t==="dragTopLimit"){this.refreshLoading.bottom=NaN,this.refreshLoading.top=r;var o=this.createListData(5,"顶部新增的标题");o=o.concat(this.refreshList.array);var s=0+5,l=0;if(this.redHotStatus.length>0)for(let c=0;c<this.redHotStatus.length;c++)this.redHotStatus[c]+=5}else if(t==="dragBottomLimit"){this.refreshList.scrollBar.disableDrag=!0,this.refreshLoading.top=NaN,this.refreshLoading.bottom=r;var o=this.createListData(5,"底部新增的标题");o=this.refreshList.array.concat(o);var s=this.refreshList.array.length-1,l=s+5}this.scrollBarIsStop=!0,Laya.timer.once(n,this,()=>{this.refreshList.array=o,this.refreshList.scrollTo(l),this.refreshList.selectedIndex=s,this.scrollBarIsStop=!1,this.refreshList.scrollBar.backToNormal(),this.refreshLoading.visible=!1})})}onListMouse(t,i){t.type==Laya.Event.MOUSE_DOWN&&(this.mouseDown=!0,this.itemIsOpen?(this.itemIsOpen=!1,this.itemOpenId=-1,Laya.Tween.to(this.openedItem,{x:0},500,null,Laya.Handler.create(this,()=>{this.refreshList.scrollBar.disableDrag=!1}))):(this.moveLastPos=t.target.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),t.target.on(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove,[t.target,i]))),t.type==Laya.Event.MOUSE_UP&&(this.mouseDown=!1,this.itemOnMouseUp()),t.type==Laya.Event.CLICK&&(t.target.name=="flag"&&this.onClickFlag(i),t.target.name=="del"&&this.onClickDel(i))}itemOnMouseUp(){if(this.itemIsOpen){var t;this.openedItem.x<-80?t=-262:(this.itemIsOpen=!1,t=0),t!==this.openedItem.x&&Laya.Tween.to(this.openedItem,{x:t},500),this.refreshList.scrollBar.disableDrag=!1,this.itemOpenId!==-1&&(this.openedItem.off(Laya.Event.MOUSE_MOVE,this,this.onItemBoxMouseMove),this.itemOpenId=-1)}}onClickFlag(t){var i=this.redHotStatus.indexOf(t);i==-1?(this.refreshList.array[t].avatar={},this.refreshList.array[t].avatar.redHot={visible:!0},this.refreshList.array[t].flag={flagText:{text:"标记已读"}},this.redHotStatus.push(t)):(this.refreshList.array[t].avatar={redHot:{visible:!1}},this.refreshList.array[t].flag={flagText:{text:"标记未读"}},this.redHotStatus.splice(i,1)),this.refreshList.refresh()}onClickDel(t){this.refreshList.array.splice(t,1),this.itemOpenId=-1;var i=this.redHotStatus.indexOf(t);if(i>-1&&this.redHotStatus.splice(t,1),this.redHotStatus.length>0)for(let r=0;r<this.redHotStatus.length;r++)this.redHotStatus[r]>t&&(this.redHotStatus[r]+=1);this.refreshList.refresh()}onItemBoxMouseMove(t,i){if(this.mouseDown){let r=t.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),n=this.moveLastPos.x-r.x,o=this.moveLastPos.y-r.y;Math.abs(n)>Math.abs(o)&&!this.itemIsOpen&&(this.openedItem=t,this.itemIsOpen=!0,this.refreshList.scrollBar.disableDrag=!0,this.itemOpenId=i),this.itemIsOpen&&(this.openedItem.x-=n,this.openedItem.x<-262?this.openedItem.x=-262:this.openedItem.x>0&&(this.openedItem.x=0))}else this.refreshList.scrollBar.disableDrag=!1}scrollBarIsStopBind(){return this.scrollBarIsStop}onToLineBtn(){let t=parseInt(this.lineNumber.text)-1;this.refreshList.scrollTo(t),t<this.refreshList.array.length&&(this.refreshList.selectedIndex=t)}onToTopBtn(){this.refreshList.scrollTo(0),this.refreshList.selectedIndex=0}onToBottomBtn(){let t=this.refreshList.array.length-1;this.refreshList.scrollTo(t),this.refreshList.selectedIndex=t}createListData(t=5,i="初始测试标题"){let r=new Date,n=r.getHours()<10?"0"+r.getHours():""+r.getHours(),o=r.getMinutes()<10?"0"+r.getMinutes():""+r.getMinutes();for(var s=[],l=0;l<t;l++){let c={text:n+" : "+o};s[l]={},s[l].msgTime=c,s[l].msgTitle={text:i+(this.msgIdNow+l)},s[l].avatar={redHot:{visible:!1}}}return this.msgIdNow+=l,s}onDisable(){}};d([to({type:Laya.List})],Di.prototype,"refreshList",2),d([to({type:Laya.Button})],Di.prototype,"toLine",2),d([to({type:Laya.Button})],Di.prototype,"toTop",2),d([to({type:Laya.Button})],Di.prototype,"toBottom",2),d([to({type:Laya.Box})],Di.prototype,"refreshLoading",2),d([to({type:Laya.Label})],Di.prototype,"lineNumber",2),Di=d([S_("m0TR8w0gTbWSvHbZTzrORA")],Di);var bd=class extends Laya.View{};var{regClass:T_,property:dJ}=Laya,$s=class extends bd{onEnable(){this.tree1.xml=this.getTreeData(!0),this.tree2.xml=this.getTreeData(!1)}getTreeData(e){let t="<data>";if(e)t+="<dir itemLabel='一级目录一' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><dir itemLabel='一级目录二' isOpen='true'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/></dir><dir itemLabel='一级目录三' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><file itemLabel='一级子项1 '/><file itemLabel='一级子项2 '/>";else for(let i=0;i<5;i++){t+="<item title='目录"+(i+1)+"' isOpen='true'>";for(let r=0;r<5;r++)t+="<subpage title='子项标题"+(r+1)+"' />";t+="</item>"}return t+="</data>",new Laya.XML(t)}};$s=d([T_("GJWtWFwsQoqNpjA1k42SpQ")],$s);var yd=class extends Laya.Scene{};var{regClass:k_,property:gJ}=Laya,Xs=class extends yd{onEnable(){}onDisable(){}};Xs=d([k_("JQ1fkq03ThewqQWRXQPgmw")],Xs);var{regClass:C_,property:LJ}=Laya,Cr=class extends Laya.Script{constructor(){super()}baseUI(t){this.window=t,this.searchCloseButton(t)}searchCloseButton(t){for(let i=0;i<t.numChildren;i++){let r=t.getChildAt(i);r instanceof Laya.Button&&r.name=="closeBtn"?(r.on(Laya.Event.MOUSE_DOWN,this,()=>{this.window.close()}),console.log("baseUI 发现closeBtn，统一添加关闭事件")):this.searchCloseButton(r)}}onDisable(){}};Cr=d([C_("7Fkz4T7JQ5ujwNcIx9lGNA")],Cr);var{regClass:A_,property:IJ}=Laya,Zs=class extends Cr{constructor(){super()}onEnable(){this.ui=this.owner,this.baseUI(this.ui)}onDisable(){}};Zs=d([A_("utN7JQs_T3iw6KqWT-beFQ")],Zs);var gd=class extends Laya.Box{};var{regClass:D_,property:CJ}=Laya,bv=Laya.Event,yv=Laya.Mouse,Qs=class extends gd{constructor(){super()}onEnable(){Laya.Browser.onPC?(this.panel.on(bv.MOUSE_OVER,this,()=>{yv.cursor="move"}),this.panel.on(bv.MOUSE_OUT,this,()=>{yv.cursor="auto"})):this.topLab.text="背景可拖拽，双指缩放改变大小"}};Qs=d([D_("9s1SW9WKRrSodo6JY27VSw")],Qs);var{regClass:M_,property:vd}=Laya,fa=class extends Laya.Script{constructor(){super()}onEnable(){this.graphics=this.graphicsSprite.graphics,Laya.timer.loop(2e3,this,()=>{this.changeImgSkin(),this.changeSpriteTexture(),this.changeFillTexture(),this.changeTexture()})}changeImgSkin(){this.Img.skin=this.randomImg()}changeSpriteTexture(){this.spImg.loadImage(this.randomImg(!0,6,5))}changeFillTexture(){this.graphics.clear();let t=this.randomImg(!0,4);Laya.loader.load(t).then(i=>{this.graphics.fillTexture(i,0,0,1,1)})}changeTexture(){this.textureImg.graphics.clear();let t=Laya.loader.getRes(this.randomImg(!0,8));this.textureImg.graphics.drawTexture(t)}randomImg(t=!1,i=8,r=1){let n=Math.floor(Math.random()*(i-r+1))+r;return t?"resources/UI/role/m"+n+".png":"resources/UI/role/w"+n+".png"}onDisable(){}};d([vd({type:Laya.Image})],fa.prototype,"Img",2),d([vd({type:Laya.Sprite})],fa.prototype,"spImg",2),d([vd({type:Laya.Sprite})],fa.prototype,"graphicsSprite",2),d([vd({type:Laya.Sprite})],fa.prototype,"textureImg",2),fa=d([M_("ulgCMWfCQKiihSJynpbJFg")],fa);var wd=class extends Laya.View{};var{regClass:P_,property:OJ}=Laya,Ld=Laya.Event,Js=class extends wd{onEnable(){this._hitArea.on(Ld.MOUSE_DOWN,this,()=>{this._hitArea.off(Ld.MOUSE_MOVE,this,this.bg3MaskMove),this._hitArea.startDrag(),this._hitArea.on(Ld.MOUSE_MOVE,this,this.bg3MaskMove)}),this._mask.on(Ld.MOUSE_MOVE,this,this.maskMove)}bg3MaskMove(e){e.stopPropagation(),this.bg3Mask.x=this._hitArea.x,this.bg3Mask.y=this._hitArea.y}maskMove(){let e=this.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),t=e.x-this._mask.width/this.bg2.scaleX/2,i=e.y-this._mask.height/this.bg2.scaleY/2;t>80&&i>80&&(this._mask.x=e.x-this._mask.width/this.bg2.scaleX/2,this._mask.y=e.y-this._mask.height/this.bg2.scaleY/2,this.bg2.x=(-e.x-this._mask.width/2)*(this.bg2.scaleX-1),this.bg2.y=(-e.y-this._mask.height/2)*(this.bg2.scaleY-1))}};Js=d([P_("zt0rBsEST9KVJgcimd7SFA")],Js);var{regClass:R_,property:Ar}=Laya,yi=class extends Laya.Script{constructor(){super()}onEnable(){this.changeMouseCursor(),this.throughTab.selectHandler=new Laya.Handler(this,this.onSwitchTab)}onSwitchTab(t){switch(t){case 0:this.leftBg.hitTestPrior=!0,this.rightBg.hitTestPrior=!0;break;case 1:this.leftBg.hitTestPrior=!1,this.rightBg.hitTestPrior=!1;break}}changeMouseCursor(){this.leftBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.leftBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.rightBg.on(Laya.Event.MOUSE_OVER,this,()=>{Laya.Mouse.cursor="move"}),this.rightBg.on(Laya.Event.MOUSE_OUT,this,()=>{Laya.Mouse.cursor="auto"}),this.leftBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧的可点击区域",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.leftBg.name)}),this.rightBg.on(Laya.Event.CLICK,this,()=>{Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧的可点击区域",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.rightBg.name)}),this.btn1.on(Laya.Event.CLICK,this,t=>{t.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮1"}),console.log("click btn1")}),this.btn2.on(Laya.Event.CLICK,this,t=>{t.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了测试按钮2"}),console.log("click btn2")}),this.close1.on(Laya.Event.CLICK,this,t=>{t.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了左侧关闭按钮",point:{x:Laya.stage.mouseX-100}}),console.log("click "+this.close1.name)}),this.close2.on(Laya.Event.CLICK,this,t=>{t.stopPropagation(),Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:"点击了右侧关闭按钮",point:{x:Laya.stage.mouseX-120}}),console.log("click "+this.close2.name)})}onDisable(){}};d([Ar({type:Laya.Tab})],yi.prototype,"throughTab",2),d([Ar({type:Laya.Sprite})],yi.prototype,"leftBg",2),d([Ar({type:Laya.Sprite})],yi.prototype,"rightBg",2),d([Ar({type:Laya.Button})],yi.prototype,"btn1",2),d([Ar({type:Laya.Button})],yi.prototype,"btn2",2),d([Ar({type:Laya.Sprite})],yi.prototype,"close1",2),d([Ar({type:Laya.Sprite})],yi.prototype,"close2",2),yi=d([R_("AmLUThtNSaW6zL9W205gyg")],yi);var{regClass:B_,property:_d}=Laya,ba=class extends Laya.Script{onEnable(){this.bTop.getComponent(Laya.BoxCollider).width=this.bTop.width,this.bBottom.getComponent(Laya.BoxCollider).width=this.bBottom.width,this.bRight.getComponent(Laya.BoxCollider).height=this.bRight.height,this.bLeft.getComponent(Laya.BoxCollider).height=this.bLeft.height}};d([_d({type:Laya.Image})],ba.prototype,"bTop",2),d([_d({type:Laya.Image})],ba.prototype,"bBottom",2),d([_d({type:Laya.Image})],ba.prototype,"bRight",2),d([_d({type:Laya.Image})],ba.prototype,"bLeft",2),ba=d([B_("jp5l8WZtQLuVyfU4ljEFyQ")],ba);var xd=class extends Laya.View{};var{regClass:O_,property:WJ}=Laya,el=class extends xd{onEnable(){this.testProgress()}testProgress(){this.loading2.value=.01,this.loadText.text="资源加载中……",Laya.timer.loop(100,this,this.changeProgress)}changeProgress(){this.loading2.value+=.05,this.loading2.value==1&&(this.loadText.text="资源加载完成",Laya.timer.clear(this,this.changeProgress),Laya.timer.once(3e3,this,()=>{this.testProgress()}))}};el=d([O_("9w97n2rXRjiACN_vzizQPw")],el);var{regClass:N_,property:$J}=Laya,Xa=class extends Laya.Script{constructor(){super()}onStart(){this._anim=this.owner.getComponent(Laya.Animator)}isPlayanimaByName(t=0){let i=this._anim.getControllerLayer(t);if(i==null)return!1;let r=i.getCurrentPlayState();return r==null?!1:r.animatorState.clip.islooping?!0:r._finish}isSameByName(t,i=0){let r=this._anim.getControllerLayer(i);if(r==null)return!1;let n=r.getCurrentPlayState();if(n==null)return!1;if(n.animatorState.name==t)return!0}playAnim(t,i=!1){if(i){if(this.isSameByName(t))return;this._anim.play(t,0,0);return}this.isPlayanimaByName()||this._anim.play(t,0,0)}};Xa=d([N_("q0uAMn-DTUm70T4fGtxGlw")],Xa);var ut=Laya.InputManager,{regClass:H_,property:aee}=Laya,tl=class extends Laya.Script{constructor(){super(...arguments);this.currRockerBar=null;this.maxDistance=80;this.isMouseDown=!1;this.mouseDownPosition=new Laya.Point;this._currentMouse=new Laya.Point;this.initRockerBarPosition=new Laya.Point;this.key1Pressed=!1;this.key2Pressed=!1;this.key3Pressed=!1;this.key4Pressed=!1;this.directionOffset=0;this.isKeyRun=!1}onEnable(){Laya.InputManager.multiTouchEnabled=!0}onStart(){this.currRockerBar=this.owner.getChildByName("freebar"),this.img_freebar_arrow=this.currRockerBar.getChildByName("img_freebar_arrow"),this.freetrack=this.owner.getChildByName("freetrack"),this.img_arrow_left=this.freetrack.getChildByName("img_arrow_left"),this.img_arrow_right=this.freetrack.getChildByName("img_arrow_right"),this.img_arrow_up=this.freetrack.getChildByName("img_arrow_up"),this.img_arrow_down=this.freetrack.getChildByName("img_arrow_down"),this.img_freebar_arrow.visible=!1,Laya.Browser.onPC?this.freetrack.visible=!0:this.img_arrow_left.visible=this.img_arrow_right.visible=this.img_arrow_up.visible=this.img_arrow_down.visible=!1,this.initialise()}initialise(){this.initRockerBarPosition.setTo(this.currRockerBar.x,this.currRockerBar.y),this.currRockerBar.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove),Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onMouseUp)}onSkillKeyDown(t,i,r){switch(t.stopPropagation(),i){case 1:this.key1Pressed=r;break;case 2:this.key2Pressed=r;break;case 3:this.key3Pressed=r;break}}onMouseDown(t){ne.instance.stopAll||(t.stopPropagation(),this.isMouseDown=!0,this.currRockerBar.selected=!0,Laya.Browser.onPC||(this.freetrack.visible=!0),this.mouseDownPosition.setTo(this.owner.mouseX,this.owner.mouseY),console.log("onMouseDown this.owner.mouse: ",this.owner.mouseX,this.owner.mouseY),this.isKeyRun=!1,this.touchId=t.touchId)}onMouseUp(t){this.isMouseDown&&this.endClick(t)}endClick(t){this.isMouseDown=!1,this.currRockerBar.x=this.initRockerBarPosition.x,this.currRockerBar.y=this.initRockerBarPosition.y,this.currRockerBar.selected=!1,Laya.Browser.onPC||(this.freetrack.visible=!1),this.setDir(-4)}onMouseMove(t){if(!this.isMouseDown||!this.currRockerBar)return;t.stopPropagation(),this._currentMouse.setTo(t.stageX,t.stageY);let i=this.owner.globalToLocal(this._currentMouse,!1),r=i.x-this.mouseDownPosition.x,n=i.y-this.mouseDownPosition.y;if(Math.sqrt(r**2+n**2)<this.maxDistance)this.currRockerBar.x=this.initRockerBarPosition.x+r,this.currRockerBar.y=this.initRockerBarPosition.y+n;else{let s=Math.atan2(r,n);this.currRockerBar.x=Math.sin(s)*this.maxDistance+this.initRockerBarPosition.x,this.currRockerBar.y=Math.cos(s)*this.maxDistance+this.initRockerBarPosition.y}if(Math.abs(r)>this.directionOffset||Math.abs(n)>this.directionOffset){let s=bi.judgePosition(r,n);console.log("this.direction:"+s),this.setDir(s)}}onUpdate(){ne.instance.stopAll||this.getKeyboardPressed()}setDir(t){if(this.lastDirection!=t&&(z.instance.setMyHeroDirection(t),this.lastDirection=t),t==-4)this.img_freebar_arrow.visible=!1;else{this.img_freebar_arrow.visible=!0;let i=(t-3)*45;this.img_freebar_arrow.rotation=45+i}}getKeyboardPressed(){if(ut.hasKeyDown(Laya.Keyboard.W)&&ut.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(8)):ut.hasKeyDown(Laya.Keyboard.W)&&ut.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(2)):ut.hasKeyDown(Laya.Keyboard.S)&&ut.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(6)):ut.hasKeyDown(Laya.Keyboard.S)&&ut.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(4)):ut.hasKeyDown(Laya.Keyboard.W)?(this.isKeyRun=!0,this.setDir(1)):ut.hasKeyDown(Laya.Keyboard.D)?(this.isKeyRun=!0,this.setDir(3)):ut.hasKeyDown(Laya.Keyboard.S)?(this.isKeyRun=!0,this.setDir(5)):ut.hasKeyDown(Laya.Keyboard.A)?(this.isKeyRun=!0,this.setDir(7)):this.isKeyRun&&this.setDir(-4),ut.hasKeyDown(Laya.Keyboard.H)||ut.hasKeyDown(Laya.Keyboard.NUMPAD_1)){if(this.key1Pressed)return;this.key1Pressed=!0,w.intance.event(E.EVENT_CLICK_NUM,1),Laya.timer.once(500,this,this.notKey1Pressed)}if(ut.hasKeyDown(Laya.Keyboard.J)||ut.hasKeyDown(Laya.Keyboard.NUMPAD_2)){if(this.key2Pressed)return;this.key2Pressed=!0,w.intance.event(E.EVENT_CLICK_NUM,2),Laya.timer.once(500,this,this.notKey2Pressed)}if(ut.hasKeyDown(Laya.Keyboard.K)||ut.hasKeyDown(Laya.Keyboard.NUMPAD_3)){if(this.key3Pressed)return;this.key3Pressed=!0,w.intance.event(E.EVENT_CLICK_NUM,3),Laya.timer.once(500,this,this.notKey3Pressed)}if(ut.hasKeyDown(Laya.Keyboard.L)||ut.hasKeyDown(Laya.Keyboard.NUMPAD_4)){if(this.key4Pressed)return;this.key4Pressed=!0,w.intance.event(E.EVENT_CLICK_NUM,4),Laya.timer.once(500,this,this.notKey4Pressed)}}notKey1Pressed(){this.key1Pressed=!1}notKey2Pressed(){this.key2Pressed=!1}notKey3Pressed(){this.key3Pressed=!1}notKey4Pressed(){this.key4Pressed=!1}getKeyPressed(t){var i=t.toParentPoint(new Laya.Point(t.x,t.y));return i.x>t.x&&i.x<t.x+t.width&&i.y>t.y&&i.y<t.y+t.height}getDistance(t,i,r,n){let o=t-r,s=i-n;return Math.sqrt(o*o+s*s)}onDisable(){Laya.InputManager.multiTouchEnabled=!1}};tl=d([H_("7cTqWb35RwygSkuWy4QkgQ")],tl);var io=class{static playSkillEffect(e,t,i){var r=["Attack01","Attack02","Attack03","Attack04"],n=r[t];Laya.Sprite3D.load(e,Laya.Handler.create(null,function(o){i.addChild(o);var s=o.getChildByName(n);s.active=!0;var l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play(),setTimeout(()=>{o.removeSelf()},1e3)}))}static playEnemyHurtSkillEffect(e,t){Laya.Sprite3D.load(e,Laya.Handler.create(null,function(i){t.addChild(i);var r="Attack",n=i.getChildByName(r),o=n.getComponent(Laya.ShurikenParticleRenderer);if(o._particleSystem.play(),n.numChildren>0)for(let c=0;c<n.numChildren;c++){var s=n.getChildAt(c),l=s.getComponent(Laya.ShurikenParticleRenderer);l._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}static playNormalEffect(e,t){Laya.Sprite3D.load(e,Laya.Handler.create(null,function(i){t.addChild(i);var r=i,n=r.getComponent(Laya.ShurikenParticleRenderer);if(n._particleSystem.play(),r.numChildren>0)for(let l=0;l<r.numChildren;l++){var o=r.getChildAt(l),s=o.getComponent(Laya.ShurikenParticleRenderer);s._particleSystem.play()}setTimeout(()=>{i.removeSelf()},1e3)}))}};var{regClass:U_,property:gv}=Laya,Dr=class extends Laya.Script{constructor(){super();this.followTarget=null;this.speed=.02;this.mLife=5;this.mIsEnd=!1;this.mIsAttack=!1;this.mIsAttackStart=!1;this.mCanPlayFirst=!0;this.mAttackDelayTime=0;this.mCurrentIndex=0;this.followTarget=z.instance.getCurrentHero()}onUpdate(){if(!this.mIsEnd){this.followTarget==null&&(this.followTarget=z.instance.getCurrentHero());var t=new Laya.Vector3(this.followTarget.transform.position.x,0,this.followTarget.transform.position.z),i=new Laya.Vector3(this.owner.transform.position.x,0,this.owner.transform.position.z),r=Laya.Vector3.distance(t,i);if(r<10)if(r<=1)this.mIsAttack?this.isAttackendByPlayer():(this.mCanPlayFirst?(this.mCanPlayFirst=!1,this.attackPlayer()):(this.mAttackDelayTime=this.mAttackDelayTime+Laya.timer.delta,this.mAttackDelayTime>1e3&&(this.mAttackDelayTime=0,this.attackPlayer())),this.mIsAttackStart=!1),z.instance.insertValidList(this.owner);else{this.mAttackDelayTime=0;var n=new Laya.Vector3;Laya.Vector3.subtract(t,i,n),Laya.Vector3.normalize(n,n),this.owner.transform.lookAt(t,Laya.Vector3.Up);var o=this.owner.transform.position;o.vadd(new Laya.Vector3(n.x*this.speed,0,n.z*this.speed),o),this.owner.transform.position=o,this.anim&&this.anim.playAnim("run",!0),this.mCanPlayFirst=!0,this.mIsAttackStart=!1,this.mIsAttack=!1}else this.anim&&this.anim.playAnim("ldle",!0),z.instance.removeValidListByValue(this.owner);this.mLife<=0&&(this.mIsEnd=!0,this.anim&&this.anim.playAnim("die",!0),setTimeout(()=>{z.instance.removeValidListByValue(this.owner),this.owner.removeSelf();var s=z.instance.getCurrentPlane(),l=this.mCurrentIndex;z.instance.createEnemy(s.getChildAt(l),l)},600))}}setCurrentIndex(t){this.mCurrentIndex=t}setLife(t){this.mLife=t}attackPlayer(){io.playEnemyHurtSkillEffect("resources/prefab/eff_monster.lh",this.owner.getChildAt(0)),z.instance.playSound(2),this.anim&&this.anim.playAnim("attack",!0),setTimeout(()=>{this.mIsEnd||this.anim&&this.anim.playAnim("ldle",!0)},500)}isAttackendByPlayer(){this.mIsAttackStart||(this.anim&&this.anim.playAnim("shouji",!0),io.playNormalEffect("resources/prefab/eff_shouji.lh",this.owner.getChildAt(0)),setTimeout(()=>{this.mIsEnd||(this.anim&&this.anim.playAnim("shouji",!0),this.mIsAttack=!1)},500),this.mIsAttackStart=!0)}getLife(){return this.mLife}setIsAttack(t){this.mIsAttack=t}};d([gv({type:Xa})],Dr.prototype,"anim",2),d([gv({type:"number"})],Dr.prototype,"speed",2),Dr=d([U_("eWO-rqURQ6ag7phXtJPZCA")],Dr);var{regClass:V_,property:il}=Laya,qi=class extends Laya.Script{constructor(){super();this.animname="";this.force=!1;this.isBig=!1;this.isCanClick=!0}onStart(){w.intance.on(E.EVENT_CLICK_NUM3,this,this.onMouseClick)}onMouseClick(t){this.isCanClick&&(Laya.Tween.to(this.btn_pic,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this.btn_pic,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)})),z.instance.myHeroSpr.getComponent(Er).catchItem(),z.instance.playSound(1),this.anim1&&(this.anim1.playAnim(this.animname,this.force),setTimeout(()=>{this.anim1.playAnim("idle",this.force),this.isCanClick=!0},500)))}onDestroy(){w.intance.offAllCaller(this)}};d([il({type:Xa})],qi.prototype,"anim1",2),d([il({type:"string"})],qi.prototype,"animname",2),d([il({type:"boolean"})],qi.prototype,"force",2),d([il({type:"boolean"})],qi.prototype,"isBig",2),d([il({type:Laya.Sprite})],qi.prototype,"btn_pic",2),qi=d([V_("xovkzdhOSuOc_JJKi_7s2g")],qi);var{regClass:z_,property:vv}=Laya,Mr=class extends Laya.Script{constructor(){super();this.isBig=!1;this.isCanClick=!0}onStart(){w.intance.on(E.EVENT_CLICK_NUM,this,this.onNumberClick)}onNumberClick(t){t==1?this.isBig||this.onMouseClick(null):this.isBig&&this.onMouseClick(null)}onMouseClick(t){if(this.isCanClick){this.isCanClick&&(this.isCanClick=!1);var i=z.instance.getValidList();Laya.Tween.to(this,{scaleX:1.1,scaleY:1.1},250,Laya.Ease.linearIn,Laya.Handler.create(this,()=>{Laya.Tween.to(this,{scaleX:1,scaleY:1},150,Laya.Ease.linearIn)}));var r=0;this.isBig?(z.instance.myHeroSpr.attack(),z.instance.playSound(3)):(z.instance.myHeroSpr.attack(),z.instance.playSound(1)),setTimeout(()=>{this.isCanClick=!0},500)}}getDistance(t,i){return Math.sqrt(t*t+i*i)}getDistanceByPoint(t,i,r,n){let o=t-r,s=i-n;return Math.sqrt(o*o+s*s)}onDestroy(){w.intance.offAllCaller(this)}};d([vv({type:"boolean"})],Mr.prototype,"isBig",2),d([vv({type:Laya.Sprite})],Mr.prototype,"btn_pic",2),Mr=d([z_("ye1w48wgTbqktuLPDOjmkw")],Mr);var{regClass:F_,property:Iee}=Laya,al=class extends Laya.Script{constructor(){super(...arguments);this.maxX=0;this.minX=-90;this.maxY=0;this.minY=-580;this.scaleSize=.1;this.lastDistance=0;this.startedSingleTouchDrag=!1}onEnable(){this.owner.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),this.onMouseWheel()}onMouseWheel(){this.owner.on(Laya.Event.MOUSE_WHEEL,this,t=>{let i=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY));t.delta>0&&(this.owner.scaleX+=this.scaleSize,this.owner.scaleY+=this.scaleSize),t.delta<0&&(this.owner.scaleX-=this.scaleSize,this.owner.scaleY-=this.scaleSize,this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1));let r=this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY)),n=(r.x-i.x)*this.owner.scaleX,o=(r.y-i.y)*this.owner.scaleY;n+=this.owner.x,o+=this.owner.y,this.updateLimit(),n>this.maxX?this.owner.x=this.maxX:n<this.minX?this.owner.x=this.minX:this.owner.x=n,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o})}onStart(){this.updateLimit()}updateLimit(){let t=this.owner.parent;this.minX=Math.min(t.width-this.owner.width*this.owner.scaleX,0),this.minY=Math.min(t.height-this.owner.height*this.owner.scaleY,0)}onMouseDown(t){if(t.stopPropagation(),t.touches&&t.touches.length>1){this.startedSingleTouchDrag&&(this.owner.stopDrag(),this.startedSingleTouchDrag=!1);let i=this.setPivot(t);!i.x||!i.y?console.log("(((((((((((((((((((((((",this.lastPivot,JSON.parse(JSON.stringify(t.touches))):(this.lastDistance=this.getDistance(t),this.lastPivot=i,this.owner.on(Laya.Event.MOUSE_MOVE,this,this.mouseMove))}else this.owner.startDrag(),this.startedSingleTouchDrag=!0}onMouseUp(t){this.owner.off(Laya.Event.MOUSE_MOVE,this,this.mouseMove)}getDistance(t){var i=0;if(t.touches&&t.touches.length>1){let r=t.touches[0].pos.x-t.touches[1].pos.x,n=t.touches[0].pos.y-t.touches[1].pos.y;i=Math.sqrt(r*r+n*n)}return i}mouseMove(t){let i=this.getDistance(t);this.owner.scaleX+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleY+=(i-this.lastDistance)*(this.scaleSize/10),this.owner.scaleX<1&&(this.owner.scaleX=1),this.owner.scaleY<1&&(this.owner.scaleY=1),this.owner.scaleX>5&&(this.owner.scaleX=5),this.owner.scaleY>5&&(this.owner.scaleY=5);let r=this.setPivot(t);if(!r.x||!r.y)console.log("$$$$$$$$$$$",r,JSON.parse(JSON.stringify(t.touches)));else{this.updateLimit();let n=(r.x-this.lastPivot.x)*this.owner.scaleX,o=(r.y-this.lastPivot.y)*this.owner.scaleY;n+=this.owner.x,o+=this.owner.y,n>this.maxX?this.owner.x=this.maxX:n<this.minX?this.owner.x=this.minX:this.owner.x=n,o>this.maxY?this.owner.y=this.maxY:o<this.minY?this.owner.y=this.minY:this.owner.y=o,this.lastDistance=i}}setPivot(t){if(t.touches&&t.touches.length>=2){let i=this.owner.globalToLocal(new Laya.Point(t.touches[0].pos.x,t.touches[0].pos.y)),r=this.owner.globalToLocal(new Laya.Point(t.touches[1].pos.x,t.touches[1].pos.y));return new Laya.Point((i.x+r.x)/2,(i.y+r.y)/2)}return this.lastPivot}onUpdate(){this.owner.x>this.maxX&&(this.owner.x=this.maxX),this.owner.x<this.minX&&(this.owner.x=this.minX),this.owner.y>this.maxY&&(this.owner.y=this.maxY),this.owner.y<this.minY&&(this.owner.y=this.minY)}addTestPoint(t,i="#ff0000",r=2){let n=new Laya.Sprite;n.graphics.drawCircle(0,0,r,i),this.owner.addChild(n),n.pos(t.x,t.y)}};al=d([F_("c71-MoP2RIyCrdBAfjnIgw")],al);var{regClass:G_,property:j_}=Laya,ao=class extends Laya.Script{constructor(){super(...arguments);this.tipsText="";this.isDown=!1}onEnable(){this.tipsText.replace(/(^\s*)|(\s*$)/g,"")}onMouseDown(){this.owner.startDrag(),this.isDown=!0}onMouseUp(){this.isDown=!1}onMouseMove(){this.isDown&&da.i.collisionWith(this.owner)}onMouseOver(){Laya.Mouse.cursor="move",this.tipsText!==""&&Laya.Scene.open("scenes/uiDemo/Msg.ls",!1,{text:this.tipsText})}onMouseOut(){Laya.Mouse.cursor="auto"}};d([j_({type:"string"})],ao.prototype,"tipsText",2),ao=d([G_("oWa7FUgoQ6CqtyJh_D1Y2w")],ao);var{regClass:q_,property:rl}=Laya,Id=Laya.Event,wv=Laya.Point,Wi=class extends Laya.Script{constructor(){super();this.runAniName="runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";this.standAniName="right,Rdown,down,Ldown,left,Lup,up,Rup";this.stageMouse=new wv;this.axisPivot=new wv;this.angle=0;this.radian=0;this.isMoving=!1;this.isRun=!1}onEnable(){this.joystickBG=this.owner,this.joystickAxis=this.owner.getChildByName("joystickAxis"),this.maxDistance=this.joystickBG.width-this.joystickAxis.width,this.axisPivot.x=this.joystickAxis.x,this.axisPivot.y=this.joystickAxis.y,this.sceneWindow.on(Id.MOUSE_DOWN,this,this.mouseDown),this.sceneWindow.on(Id.MOUSE_MOVE,this,this.mouseMove),this.sceneWindow.on(Id.MOUSE_UP,this,this.mouseUp),this.sceneWindow.on(Id.MOUSE_OUT,this,this.mouseUp),this.roleAniNode=this.roleAni.create(),this.gameMap.addChild(this.roleAniNode),this.roleAniNode.pivot(this.roleAniNode.width/2,this.roleAniNode.height/2),this.roleAniNode.x=this.gameMap.width/2,this.roleAniNode.y=this.gameMap.height/2,this._animator=this.roleAniNode.getComponent(Laya.Animator2D)}mouseDown(t){this.touchId=t.touchId,this.isMoving=!0,this.updateJoystickPoint()}updateJoystickPoint(){this.stageMouse.x=Laya.stage.mouseX,this.stageMouse.y=Laya.stage.mouseY;let t=this.joystickBG.globalToLocal(this.stageMouse),i=t.x-this.joystickAxis.width/2,r=t.y-this.joystickAxis.height/2;this.radian=Math.atan2(r-this.axisPivot.y,i-this.axisPivot.x),this.lastAngle=this.angle,this.angle=Math.round(this.radian*180/Math.PI*10)/10,this.angle<0&&(this.angle+=360),console.log("radian: "+this.radian+", angle: "+this.angle),this.getDistance(this.joystickBG.width/2,this.joystickBG.height/2,t.x,t.y)>this.maxDistance&&this.lastAngle!==this.angle?(this.joystickAxis.x=Math.floor(Math.cos(this.radian)*this.maxDistance)+this.axisPivot.x,this.joystickAxis.y=Math.floor(Math.sin(this.radian)*this.maxDistance)+this.axisPivot.y):this.joystickAxis.pos(t.x-this.joystickAxis.width/2,t.y-this.joystickAxis.height/2),this.switchAni("run")}switchAni(t){if(t=="run"){let i=this.getOrientation(this.angle,this.runAniName);i!==this.lastRunAniName&&(this.lastRunAniName=i,this._animator.play(i)),this.isRun=!0}else{this.isRun=!1;let i=this.getOrientation(this.angle,this.standAniName);this.lastAngle!==this.angle&&this._animator.play(i)}}mouseUp(t){t.touchId==this.touchId&&(this.touchId=null,this.isMoving=!1,this.joystickAxis.pos(this.axisPivot.x,this.axisPivot.y),this.switchAni("stand"))}mouseMove(t){t.touchId==this.touchId&&this.updateJoystickPoint()}getOrientation(t,i){let r=i.split(","),n=360/r.length;return r[Math.floor(t/n)]}onUpdate(){this.isMoving&&this.updateRoleMove()}updateRoleMove(){this.switchAni("run");let t=Math.cos(this.radian)*2,i=Math.sin(this.radian)*2;(t<0&&this.gameMap.x<0||t>0&&this.gameMap.x>this.sceneWindow.width-this.gameMap.width)&&(this.gameMap.x-=t),(i<0&&this.gameMap.y<0||i>0&&this.gameMap.y>this.sceneWindow.height-this.gameMap.height)&&(this.gameMap.y-=i)}getDistance(t,i,r,n){let o=t-r,s=i-n;return Math.sqrt(o*o+s*s)}};d([rl({type:Laya.Prefab})],Wi.prototype,"roleAni",2),d([rl({type:"string"})],Wi.prototype,"runAniName",2),d([rl({type:"string"})],Wi.prototype,"standAniName",2),d([rl({type:Laya.Sprite})],Wi.prototype,"gameMap",2),d([rl({type:Laya.Box})],Wi.prototype,"sceneWindow",2),Wi=d([q_("Pl5-_PonSLe-7mCnxeXfRw")],Wi);var{regClass:W_,property:Mee}=Laya,nl=class extends Laya.Script{constructor(){super();this.isOpen=!0}onEnable(){this.toolbarBG=this.owner.parent,this._owner=this.owner,this.menu=this.owner.parent.getChildByName("menu")}onMouseDown(t){t.stopPropagation(),this.isOpen?(Laya.Tween.to(this.toolbarBG,{width:106},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:52,rotation:540},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!1})),Laya.Tween.to(this.menu,{alpha:0},300,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!1}))):(Laya.Tween.to(this.toolbarBG,{width:460},1e3,Laya.Ease.strongOut),Laya.Tween.to(this._owner,{x:402,rotation:-360},1e3,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.isOpen=!0})),Laya.Tween.to(this.menu,{alpha:1},200,Laya.Ease.strongOut,Laya.Handler.create(this,()=>{this.menu.visible=!0})))}onDisable(){}};nl=d([W_("hPkwKQvKQTaeBeEpHxNUEA")],nl);})();
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
//# sourceMappingURL=bundle.js.map
