!(function(){"use strict";var It=Object.defineProperty,Pt=Object.defineProperties;var Rt=Object.getOwnPropertyDescriptors;var lr=Object.getOwnPropertySymbols;var kn=Object.prototype.hasOwnProperty,En=Object.prototype.propertyIsEnumerable;var jn=(j,u,e)=>u in j?It(j,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):j[u]=e,se=(j,u)=>{for(var e in u||(u={}))kn.call(u,e)&&jn(j,e,u[e]);if(lr)for(var e of lr(u))En.call(u,e)&&jn(j,e,u[e]);return j},cn=(j,u)=>Pt(j,Rt(u));var ln=(j,u)=>{var e={};for(var r in j)kn.call(j,r)&&u.indexOf(r)<0&&(e[r]=j[r]);if(j!=null&&lr)for(var r of lr(j))u.indexOf(r)<0&&En.call(j,r)&&(e[r]=j[r]);return e};(self.webpackChunknovojs_kit=self.webpackChunknovojs_kit||[]).push([[5297],{99882:function(j,u,e){e.d(u,{E_:function(){return N},nc:function(){return R}});var r=e(67294);function g(_){var l=[];if(_.length===0)return"";if(typeof _[0]!="string")throw new TypeError("Url must be a string. Received "+_[0]);if(_[0].match(/^[^/:]+:\/*$/)&&_.length>1){var T=_.shift();_[0]=T+_[0]}_[0].match(/^file:\/\/\//)?_[0]=_[0].replace(/^([^/:]+):\/*/,"$1:///"):_[0]=_[0].replace(/^([^/:]+):\/*/,"$1://");for(var w=0;w<_.length;w++){var x=_[w];if(typeof x!="string")throw new TypeError("Url must be a string. Received "+x);x!==""&&(w>0&&(x=x.replace(/^[\/]+/,"")),w<_.length-1?x=x.replace(/[\/]+$/,""):x=x.replace(/[\/]+$/,"/"),l.push(x))}var v=l.join("/");v=v.replace(/\/(\?|&|#[^!])/g,"$1");var d=v.split("?");return v=d.shift()+(d.length>0?"?":"")+d.join("&"),v}function o(){var _;return typeof arguments[0]=="object"?_=arguments[0]:_=[].slice.call(arguments),g(_)}var Z="https://unpkg.com",O="https://registry.npmmirror.com",J=function(l){var T=l.pkg,w=l.version,x=w===void 0?"latest":w,v=l.path,d=l.proxy;switch(d){case"unpkg":return o(Z,"".concat(T,"@").concat(x),v);default:return o(O,T,x,"files",v)}},K=e(85893),N=(0,r.createContext)(null),W=null,H=function(l){var T=l.pkg,w=l.version,x=l.path;return J({path:x,pkg:T,proxy:"aliyun",version:w})},R=function(){var l=(0,r.useContext)(N);return l?(l==null?void 0:l.proxy)!=="custom"?function(T){var w=T.pkg,x=T.version,v=T.path;return J({path:v,pkg:w,proxy:l.proxy,version:x})}:(l==null?void 0:l.customCdnFn)||H:H},A=null},21445:function(j,u,e){e.d(u,{Z:function(){return Zt}});var r=e(1413),g=e(91),o=e(67294),Z=e(93967),O=e.n(Z),J=e(27288),K=e(53124),N=e(16474),W=e(94423),H=e(48311),R=e(66968),A=e(91945);const _=n=>{const{componentCls:f,colorText:s,fontSize:a,lineHeight:C,fontFamily:I}=n;return{[f]:{color:s,fontSize:a,lineHeight:C,fontFamily:I}}},l=()=>({});var T=(0,A.I$)("App",_,l);const w=()=>o.useContext(R.Z),x=n=>{const{prefixCls:f,children:s,className:a,rootClassName:C,message:I,notification:re,style:de,component:ce="div"}=n,{getPrefixCls:xe}=(0,o.useContext)(K.E_),me=xe("app",f),[Se,je,we]=T(me),he=O()(je,me,a,C,we),ge=(0,o.useContext)(R.J),ye=o.useMemo(()=>({message:Object.assign(Object.assign({},ge.message),I),notification:Object.assign(Object.assign({},ge.notification),re)}),[I,re,ge.message,ge.notification]),[cr,sn]=(0,N.Z)(ye.message),[fe,Ot]=(0,H.Z)(ye.notification),[An,At]=(0,W.Z)(),jt=o.useMemo(()=>({message:cr,notification:fe,modal:An}),[cr,fe,An]);(0,J.ln)("App")(!(we&&ce===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");const kt=ce===!1?o.Fragment:ce,Et={className:he,style:de};return Se(o.createElement(R.Z.Provider,{value:jt},o.createElement(R.J.Provider,{value:ye},o.createElement(kt,Object.assign({},ce===!1?void 0:Et),At,sn,Ot,s))))};x.useApp=w;var v=x,d=e(54956),p=e(99882),b=function(f){var s=document.createElement("link");return s.rel="stylesheet",s.href=f,s},S=(0,o.memo)(function(n){var f=n.url,s=(0,o.useRef)(!1);return(0,o.useEffect)(function(){if(!s.current){s.current=!0;var a=b(f);document.head.append(a)}},[]),null}),h=S,E=e(30168),M,k,z,y,X,Q,$,ne,B=function(f){var s=f.css,a=f.token,C=f.isDarkMode,I=(0,d.F4)(M||(M=(0,E.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:s(k||(k=(0,E.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:s(z||(z=(0,E.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:s(y||(y=(0,E.Z)([`
      ::-webkit-scrollbar {
        width: 0;
        height: 4px;
        background-color: transparent;

        &-thumb {
          background-color: `,`;
          border-radius: 4px;
          transition: background-color 500ms `,`;
        }

        &-corner {
          display: none;
          width: 0;
          height: 0;
        }
      }
    `])),a.colorFill,a.motionEaseOut),gradientAnimation:s(X||(X=(0,E.Z)([`
      background-image: linear-gradient(
        -45deg,
        `,`,
        `,`,
        `,`,
        `,`
      );
      background-size: 400% 400%;
      border-radius: inherit;
      animation: 5s `,` 5s ease infinite;
    `])),a.gold,a.magenta,a.geekblue,a.cyan,I),markdown:s(Q||(Q=(0,E.Z)([`
      --lobe-markdown-font-size: 16px;
      --lobe-markdown-header-multiple: 1;
      --lobe-markdown-margin-multiple: 1.5;

      position: relative;

      width: 100%;

      font-size: var(--lobe-markdown-font-size);
      line-height: 1.6;
      word-break: break-word;

      p {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        line-height: 1.6;
        letter-spacing: 0.02em;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin-block: max(
          calc(var(--lobe-markdown-header-multiple) * var(--lobe-markdown-margin-multiple) * 0.5em),
          var(--lobe-markdown-font-size)
        );
        font-weight: 600;
      }

      h1 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 1.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h2 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + var(--lobe-markdown-header-multiple))
        );
      }

      h3 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h4 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.25 * var(--lobe-markdown-header-multiple))
        );
      }

      h5 {
        font-size: calc(var(--lobe-markdown-font-size) * 1);
      }

      li {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }

      ul,
      ol {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline-start: 1em;
        list-style-position: outside;

        li {
          margin-inline-start: 1em;
        }
      }

      ol {
        li {
          &::marker {
            color: `,`;
          }
        }
      }

      ul {
        list-style-type: none;

        li {
          &::before {
            content: '-';
            display: inline-block;
            margin-inline: -1em 0.5em;
            color: `,`;
          }
        }
      }

      strong {
        font-weight: 600;
      }

      code:not(:has(span)) {
        display: inline-block;

        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        line-height: 1;
        word-break: break-word;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      kbd {
        cursor: default;
        user-select: none;

        transform: translateY(-0.2em);

        display: inline-block;

        min-width: 1em;
        margin-inline: 0.25em;
        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        font-weight: 500;
        line-height: 1;
        color: `,`;
        text-align: center;

        background: `,`;
        border: 1px solid `,`;
        border-radius: 0.25em;
        box-shadow: 0 2px 0 1px `,`;

        &:hover {
          transform: translateY(0);
          box-shadow: none;
        }
      }

      blockquote {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline: 0;
        padding-block: 0;
        padding-inline: 1em;

        color: `,`;

        border-inline-start: solid 4px `,`;
      }

      hr {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1.5em);

        border-color: `,`;
        border-style: dashed;
        border-width: 1px;
        border-block-start: none;
        border-inline-start: none;
        border-inline-end: none;
      }

      details {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        padding-block: 0.75em;
        padding-inline: 1em;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        summary {
          cursor: pointer;
          display: flex;
          align-items: center;
          list-style: none;

          &::before {
            content: '';

            position: absolute;
            inset-inline-end: 1.25em;
            transform: rotateZ(-45deg);

            display: block;

            width: 0.4em;
            height: 0.4em;

            font-family: `,`;

            border-block-end: 1.5px solid `,`;
            border-inline-end: 1.5px solid `,`;

            transition: transform 200ms `,`;
          }
        }

        &[open] {
          padding-block-end: 0;

          summary {
            padding-block-end: 12px;
            border-block-end: 1px dashed `,`;

            &::before {
              transform: rotateZ(45deg);
            }
          }
        }
      }

      img,
      video {
        max-width: 100%;
      }

      table {
        overflow: hidden;
        display: table;
        border-spacing: 0;
        border-collapse: collapse;

        box-sizing: border-box;
        width: 100%;
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

        text-align: start;
        overflow-wrap: break-word;

        background: `,`;
        border-radius: `,`px;
        box-shadow: inset 0 0 0 1px `,`;
      }

      thead {
        background: `,`;
      }

      tr {
        box-shadow: inset 0 -1px 0 `,`;
      }

      th,
      td {
        padding-block: 0.75em;
        padding-inline: 1em;
        text-align: start;
        vertical-align: top;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;

        > code {
          padding: 0 !important;

          font-family: `,`;
          font-size: 0.875em;
          line-height: 1.6;

          border: none !important;
        }
      }
    `])),a.colorTextSecondary,a.colorTextDescription,a.fontFamilyCode,a.colorFillSecondary,a.colorBorderSecondary,a.borderRadius,a.fontFamily,a.colorBgLayout,C?a.colorText:"#333",C?a.colorTextSecondary:"#000",C?a.colorTextSecondary:"#000",a.colorTextSecondary,a.colorBorder,a.colorBorderSecondary,a.colorFillTertiary,a.colorBorderSecondary,a.borderRadius,a.fontFamily,a.colorTextSecondary,a.colorTextSecondary,a.motionEaseOut,a.colorBorder,a.colorFillTertiary,a.borderRadius,a.colorBorderSecondary,a.colorFillQuaternary,a.colorBorderSecondary,a.fontFamilyCode),noScrollbar:s($||($=(0,E.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:s(ne||(ne=(0,E.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),a.colorTextSecondary,a.colorText)}},F=e(97685),P=e(37762),m=e(4942),D=e(17685),q=e(74073),pe=e(27771),L=e(93589),G=e(18533),oe="[object Symbol]";function ie(n){return typeof n=="symbol"||(0,G.Z)(n)&&(0,L.Z)(n)==oe}var be=ie,Fe=1/0,De=D.Z?D.Z.prototype:void 0,Le=De?De.toString:void 0;function ze(n){if(typeof n=="string")return n;if((0,pe.Z)(n))return(0,q.Z)(n,ze)+"";if(be(n))return Le?Le.call(n):"";var f=n+"";return f=="0"&&1/n==-Fe?"-0":f}var ur=ze;function Ue(n){return n==null?"":ur(n)}var Te=Ue;function dr(n,f,s){var a=-1,C=n.length;f<0&&(f=-f>C?0:C+f),s=s>C?C:s,s<0&&(s+=C),C=f>s?0:s-f>>>0,f>>>=0;for(var I=Array(C);++a<C;)I[a]=n[a+f];return I}var fr=dr;function Ne(n,f,s){var a=n.length;return s=s===void 0?a:s,!f&&s>=a?n:fr(n,f,s)}var Be=Ne,ke="\\ud800-\\udfff",He="\\u0300-\\u036f",pr="\\ufe20-\\ufe2f",vr="\\u20d0-\\u20ff",gr=He+pr+vr,br="\\ufe0e\\ufe0f",hr="\\u200d",mr=RegExp("["+hr+ke+gr+br+"]");function yr(n){return mr.test(n)}var We=yr;function Ge(n){return n.split("")}var _r=Ge,Je="\\ud800-\\udfff",xr="\\u0300-\\u036f",Sr="\\ufe20-\\ufe2f",Tr="\\u20d0-\\u20ff",Cr=xr+Sr+Tr,Ee="\\ufe0e\\ufe0f",wr="["+Je+"]",Ie="["+Cr+"]",Pe="\\ud83c[\\udffb-\\udfff]",Zr="(?:"+Ie+"|"+Pe+")",Ke="[^"+Je+"]",Ve="(?:\\ud83c[\\udde6-\\uddff]){2}",$e="[\\ud800-\\udbff][\\udc00-\\udfff]",Or="\\u200d",Ye=Zr+"?",Xe="["+Ee+"]?",Ar="(?:"+Or+"(?:"+[Ke,Ve,$e].join("|")+")"+Xe+Ye+")*",jr=Xe+Ye+Ar,kr="(?:"+[Ke+Ie+"?",Ie,Ve,$e,wr].join("|")+")",Er=RegExp(Pe+"(?="+Pe+")|"+kr+jr,"g");function Qe(n){return n.match(Er)||[]}var Ir=Qe;function Pr(n){return We(n)?Ir(n):_r(n)}var Rr=Pr;function Mr(n){return function(f){f=Te(f);var s=We(f)?Rr(f):void 0,a=s?s[0]:f.charAt(0),C=s?Be(s,1).join(""):f.slice(1);return a[n]()+C}}var qe=Mr,Fr=qe("toUpperCase"),Dr=Fr;function er(n){return Dr(Te(n).toLowerCase())}var rr=er;function Lr(n,f,s,a){var C=-1,I=n==null?0:n.length;for(a&&I&&(s=n[++C]);++C<I;)s=f(s,n[C],C,n);return s}var nr=Lr;function zr(n){return function(f){return n==null?void 0:n[f]}}var Ur=zr,Nr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Br=Ur(Nr),Hr=Br,Wr=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Gr="\\u0300-\\u036f",Jr="\\ufe20-\\ufe2f",Kr="\\u20d0-\\u20ff",Vr=Gr+Jr+Kr,$r="["+Vr+"]",Yr=RegExp($r,"g");function Xr(n){return n=Te(n),n&&n.replace(Wr,Hr).replace(Yr,"")}var Qr=Xr,qr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function en(n){return n.match(qr)||[]}var rn=en,nn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function tn(n){return nn.test(n)}var an=tn,tr="\\ud800-\\udfff",on="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",c=on+t+i,U="\\u2700-\\u27bf",Y="a-z\\xdf-\\xf6\\xf8-\\xff",ee="\\xac\\xb1\\xd7\\xf7",ae="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",V="\\u2000-\\u206f",te=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Re="A-Z\\xc0-\\xd6\\xd8-\\xde",le="\\ufe0e\\ufe0f",_e=ee+ae+V+te,Ze="['\u2019]",Oe="["+_e+"]",ar="["+c+"]",un="\\d+",In="["+U+"]",dn="["+Y+"]",fn="[^"+tr+_e+un+U+Y+Re+"]",Pn="\\ud83c[\\udffb-\\udfff]",Rn="(?:"+ar+"|"+Pn+")",Mn="[^"+tr+"]",pn="(?:\\ud83c[\\udde6-\\uddff]){2}",vn="[\\ud800-\\udbff][\\udc00-\\udfff]",Ae="["+Re+"]",Fn="\\u200d",gn="(?:"+dn+"|"+fn+")",Dn="(?:"+Ae+"|"+fn+")",bn="(?:"+Ze+"(?:d|ll|m|re|s|t|ve))?",hn="(?:"+Ze+"(?:D|LL|M|RE|S|T|VE))?",mn=Rn+"?",yn="["+le+"]?",Ln="(?:"+Fn+"(?:"+[Mn,pn,vn].join("|")+")"+yn+mn+")*",zn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Un="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Nn=yn+mn+Ln,Bn="(?:"+[In,pn,vn].join("|")+")"+Nn,Hn=RegExp([Ae+"?"+dn+"+"+bn+"(?="+[Oe,Ae,"$"].join("|")+")",Dn+"+"+hn+"(?="+[Oe,Ae+gn,"$"].join("|")+")",Ae+"?"+gn+"+"+bn,Ae+"+"+hn,Un,zn,un,Bn].join("|"),"g");function Wn(n){return n.match(Hn)||[]}var Gn=Wn;function Jn(n,f,s){return n=Te(n),f=s?void 0:f,f===void 0?an(n)?Gn(n):rn(n):n.match(f)||[]}var Kn=Jn,Vn="['\u2019]",$n=RegExp(Vn,"g");function Yn(n){return function(f){return nr(Kn(Qr(f).replace($n,"")),n,"")}}var Xn=Yn,Qn=Xn(function(n,f,s){return f=f.toLowerCase(),n+(s?rr(f):f)}),qn=Qn,ue=e(79535),et=function(f){var s,a=f.name,C=f.scale,I=f.appearance;return s={},(0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)(s,"".concat(a,"Bg"),C["".concat(I,"A")][1]),"".concat(a,"BgHover"),C["".concat(I,"A")][2]),"".concat(a,"Border"),C[I][4]),"".concat(a,"BorderSecondary"),C[I][3]),"".concat(a,"BorderHover"),C[I][5]),"".concat(a,"Hover"),C[I][10]),"".concat(a),C[I][9]),"".concat(a,"Active"),C[I][7]),"".concat(a,"TextHover"),C["".concat(I,"A")][10]),"".concat(a,"Text"),C["".concat(I,"A")][9]),(0,m.Z)(s,"".concat(a,"TextActive"),C["".concat(I,"A")][7])},rt=function(f){var s=f.name,a=f.scale,C=f.appearance,I={},re=(0,P.Z)(a[C].entries()),de;try{for(re.s();!(de=re.n()).done;){var ce=(0,F.Z)(de.value,2),xe=ce[0],me=ce[1];xe===0||xe===12||(I["".concat(s).concat(xe)]=me)}}catch(ye){re.e(ye)}finally{re.f()}var Se=(0,P.Z)(a["".concat(C,"A")].entries()),je;try{for(Se.s();!(je=Se.n()).done;){var we=(0,F.Z)(je.value,2),he=we[0],ge=we[1];he===0||he===12||(I["".concat(s).concat(he,"A")]=ge)}}catch(ye){Se.e(ye)}finally{Se.f()}return(0,r.Z)((0,r.Z)({},I),et({appearance:C,name:s,scale:a}))},nt=function(f){for(var s=f.isDarkMode,a={},C=0,I=Object.entries(ue._);C<I.length;C++){var re=(0,F.Z)(I[C],2),de=re[0],ce=re[1];a=(0,r.Z)((0,r.Z)({},a),rt({appearance:s?"dark":"light",name:qn(de),scale:ce}))}return a},ve=function(f){var s=f.type,a=f.scale,C=f.appearance,I=rr(s),re=C==="dark";return(0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)({},"color".concat(I,"Bg"),a[C][1]),"color".concat(I,"BgHover"),a[C][2]),"color".concat(I,"Border"),a[C][4]),"color".concat(I,"BorderHover"),a[C][re?5:3]),"color".concat(I,"Hover"),a[C][re?10:8]),"color".concat(I),a[C][9]),"color".concat(I,"Active"),a[C][re?7:10]),"color".concat(I,"TextHover"),a[C][re?10:8]),"color".concat(I,"Text"),a[C][9]),"color".concat(I,"TextActive"),a[C][re?7:10])},or=function(f){var s=f.scale,a=f.appearance;return{colorBgContainer:a==="dark"?s[a][1]:s[a][0],colorBgElevated:a==="dark"?s[a][2]:s[a][0],colorBgLayout:a==="dark"?s[a][0]:s[a][1],colorBgMask:s.lightA[8],colorBgSpotlight:s[a][5],colorBorder:s[a][4],colorBorderSecondary:s[a][3],colorFill:s["".concat(a,"A")][3],colorFillQuaternary:s["".concat(a,"A")][0],colorFillSecondary:s["".concat(a,"A")][2],colorFillTertiary:s["".concat(a,"A")][1],colorText:s[a][12],colorTextQuaternary:s[a][6],colorTextSecondary:s[a][10],colorTextTertiary:s[a][8]}},_n={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},tt=ve({appearance:"dark",scale:ue._.bnw,type:"Primary"}),xn=or({appearance:"dark",scale:ue._.gray}),at=ve({appearance:"dark",scale:ue._.lime,type:"Success"}),ot=ve({appearance:"dark",scale:ue._.gold,type:"Warning"}),it=ve({appearance:"dark",scale:ue._.red,type:"Error"}),ir=ve({appearance:"dark",scale:ue._.blue,type:"Info"}),st=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},tt),xn),at),ot),it),ir),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:ir.colorInfoText,colorLinkActive:ir.colorInfoTextActive,colorLinkHover:ir.colorInfoTextHover,colorTextLightSolid:xn.colorBgLayout}),ct=st,lt=function(f,s){var a=f.primaryColor,C=f.neutralColor,I={},re={},de=ue._[a];de&&(I=ve({appearance:"dark",scale:de,type:"Primary"}));var ce=_n[C];return ce&&(re=or({appearance:"dark",scale:ce})),(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},s),ct),I),re)},ut=ve({appearance:"light",scale:ue._.bnw,type:"Primary"}),Sn=or({appearance:"light",scale:ue._.gray}),dt=ve({appearance:"light",scale:ue._.green,type:"Success"}),ft=ve({appearance:"light",scale:ue._.orange,type:"Warning"}),pt=ve({appearance:"light",scale:ue._.volcano,type:"Error"}),sr=ve({appearance:"light",scale:ue._.geekblue,type:"Info"}),vt=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},ut),Sn),dt),ft),pt),sr),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:sr.colorInfoText,colorLinkActive:sr.colorInfoTextActive,colorLinkHover:sr.colorInfoTextHover,colorTextLightSolid:Sn.colorBgLayout}),gt=vt,bt=function(f,s){var a=f.primaryColor,C=f.neutralColor,I={},re={},de=ue._[a];de&&(I=ve({appearance:"light",scale:de,type:"Primary"}));var ce=_n[C];return ce&&(re=or({appearance:"light",scale:ce})),(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},s),gt),I),re)},Tn='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',ht='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',Cn='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',mt="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",yt={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[ht,Cn,Tn].join(","),fontFamilyCode:[mt,Cn,Tn].join(",")},_t=function(f){var s=f.neutralColor,a=f.appearance,C=f.primaryColor,I=a==="dark";return{algorithm:I?lt:bt,token:(0,r.Z)((0,r.Z)({},yt),{},{neutralColor:s,primaryColor:C})}},Me=e(52062),wn,xt=function(n){return(0,d.iv)(wn||(wn=(0,E.Z)([`
  .`,`-checkbox-inner:after {
    border-color: `,` !important;
  }

  .`,`-btn {
    box-shadow: none;
  }

  .`,`-btn-primary:not(:disabled) {
    color: `,` !important;

    &:hover {
      color: `,` !important;
    }

    &:active {
      color: `,` !important;
    }
  }

  .`,`-tooltip-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: unset;
    padding-block: 4px;
    padding-inline: 8px;

    color: `,` !important;

    background-color: `,` !important;
    border-radius: `,`px !important;
  }

  .`,`-tooltip-arrow {
    &::before,
    &::after {
      background: `,` !important;
    }
  }

  .`,`-switch-handle::before {
    background: `,` !important;
  }

  .`,`-image-preview-close,
    .`,"-image-preview-switch-right,.",`-image-preview-switch-left {
    `,`;
    border-radius: `,`px;
    background: `,`;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
  }

  .`,`-popover-inner {
    border: 1px solid `,`;
    box-shadow: `,`;
  }

  ul.`,`-dropdown-menu {
    border: 1px solid `,`;
    border-radius: `,`px !important;
    box-shadow: `,`;
  }
`])),n.prefixCls,(0,Me.XV)(n.colorPrimary),n.prefixCls,n.prefixCls,(0,Me.XV)(n.colorPrimary),(0,Me.XV)(n.colorPrimary),(0,Me.XV)(n.colorPrimaryActive),n.prefixCls,n.colorBgLayout,n.colorText,n.borderRadiusSM,n.prefixCls,n.colorText,n.prefixCls,n.colorBgContainer,n.prefixCls,n.prefixCls,n.prefixCls,n.stylish.blur,n.borderRadiusLG,(0,Me.m4)(n.colorBgMask,.1),n.prefixCls,n.colorBorderSecondary,n.boxShadowSecondary,n.prefixCls,n.colorBorderSecondary,n.borderRadius,n.boxShadowSecondary)},Zn,St=function(n){return(0,d.iv)(Zn||(Zn=(0,E.Z)([`
  :root {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;
  }

  html {
    overscroll-behavior: none;
    color-scheme: `,`;
  }

  body {
    overflow: hidden auto;

    min-height: 100vh;
    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    word-wrap: break-word;
    vertical-align: baseline;

    background-color: `,`;

    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    scrollbar-color: `,` transparent;
    scrollbar-width: thin;
    box-sizing: border-box;
    vertical-align: baseline;
  }
`])),n.isDarkMode?"dark":"light",n.fontFamily,n.fontSize,n.colorTextBase,n.colorBgLayout,n.fontFamilyCode,n.fontFamilyCode,n.yellow9,n.colorFill)},Tt=(0,d.vJ)(function(n){var f=n.theme;return[St(f),xt(f)]}),Ct=Tt,Ce=e(85893),wt=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],On=(0,o.memo)(function(n){var f=n.children,s=n.customStylish,a=n.customToken,C=n.enableWebfonts,I=C===void 0?!0:C,re=n.enableGlobalStyle,de=re===void 0?!0:re,ce=n.webfonts,xe=n.customTheme,me=xe===void 0?{}:xe,Se=n.className,je=n.style,we=(0,g.Z)(n,wt),he=(0,p.nc)(),ge=ce||[he({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),he({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),he({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),he({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],ye=(0,o.useCallback)(function(fe){return(0,r.Z)((0,r.Z)({},B(fe)),s==null?void 0:s(fe))},[s]),cr=(0,o.useCallback)(function(fe){return(0,r.Z)((0,r.Z)({},nt(fe)),a==null?void 0:a(fe))},[a]),sn=(0,o.useCallback)(function(fe){return _t({appearance:fe,neutralColor:me.neutralColor,primaryColor:me.primaryColor})},[me.primaryColor,me.neutralColor]);return(0,Ce.jsxs)(Ce.Fragment,{children:[I&&(ge==null?void 0:ge.length)>0&&ge.map(function(fe){return(0,Ce.jsx)(h,{url:fe},fe)}),(0,Ce.jsx)(d.V9,{speedy:!0,children:(0,Ce.jsxs)(d.f6,(0,r.Z)((0,r.Z)({customStylish:ye,customToken:cr},we),{},{theme:sn,children:[de&&(0,Ce.jsx)(Ct,{}),(0,Ce.jsx)(v,{className:Se,style:(0,r.Z)({minHeight:"inherit",width:"inherit"},je),children:f})]}))})]})});On.displayName="LobeThemeProvider";var Zt=On},64063:function(j){j.exports=function u(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var g,o,Z;if(Array.isArray(e)){if(g=e.length,g!=r.length)return!1;for(o=g;o--!==0;)if(!u(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(Z=Object.keys(e),g=Z.length,g!==Object.keys(r).length)return!1;for(o=g;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,Z[o]))return!1;for(o=g;o--!==0;){var O=Z[o];if(!u(e[O],r[O]))return!1}return!0}return e!==e&&r!==r}},53250:function(j,u,e){var r=e(67294);function g(A,_){return A===_&&(A!==0||1/A===1/_)||A!==A&&_!==_}var o=typeof Object.is=="function"?Object.is:g,Z=r.useState,O=r.useEffect,J=r.useLayoutEffect,K=r.useDebugValue;function N(A,_){var l=_(),T=Z({inst:{value:l,getSnapshot:_}}),w=T[0].inst,x=T[1];return J(function(){w.value=l,w.getSnapshot=_,W(w)&&x({inst:w})},[A,l,_]),O(function(){return W(w)&&x({inst:w}),A(function(){W(w)&&x({inst:w})})},[A]),K(l),l}function W(A){var _=A.getSnapshot;A=A.value;try{var l=_();return!o(A,l)}catch(T){return!0}}function H(A,_){return _()}var R=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?H:N;u.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:R},50139:function(j,u,e){var r=e(67294),g=e(89120);function o(H,R){return H===R&&(H!==0||1/H===1/R)||H!==H&&R!==R}var Z=typeof Object.is=="function"?Object.is:o,O=g.useSyncExternalStore,J=r.useRef,K=r.useEffect,N=r.useMemo,W=r.useDebugValue;u.useSyncExternalStoreWithSelector=function(H,R,A,_,l){var T=J(null);if(T.current===null){var w={hasValue:!1,value:null};T.current=w}else w=T.current;T=N(function(){function v(h){if(!d){if(d=!0,p=h,h=_(h),l!==void 0&&w.hasValue){var E=w.value;if(l(E,h))return b=E}return b=h}if(E=b,Z(p,h))return E;var M=_(h);return l!==void 0&&l(E,M)?E:(p=h,b=M)}var d=!1,p,b,S=A===void 0?null:A;return[function(){return v(R())},S===null?void 0:function(){return v(S())}]},[R,A,_,l]);var x=O(H,T[0],T[1]);return K(function(){w.hasValue=!0,w.value=x},[x]),W(x),x}},89120:function(j,u,e){j.exports=e(53250)},52798:function(j,u,e){j.exports=e(50139)},37762:function(j,u,e){e.d(u,{Z:function(){return g}});var r=e(40181);function g(o,Z){var O=typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!O){if(Array.isArray(o)||(O=(0,r.Z)(o))||Z&&o&&typeof o.length=="number"){O&&(o=O);var J=0,K=function(){};return{s:K,n:function(){return J>=o.length?{done:!0}:{done:!1,value:o[J++]}},e:function(A){throw A},f:K}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var N,W=!0,H=!1;return{s:function(){O=O.call(o)},n:function(){var A=O.next();return W=A.done,A},e:function(A){H=!0,N=A},f:function(){try{W||O.return==null||O.return()}finally{if(H)throw N}}}}},67308:function(j,u,e){e.d(u,{Z:function(){return x}});function r(){this.__data__=[],this.size=0}var g=r,o=e(79651);function Z(v,d){for(var p=v.length;p--;)if((0,o.Z)(v[p][0],d))return p;return-1}var O=Z,J=Array.prototype,K=J.splice;function N(v){var d=this.__data__,p=O(d,v);if(p<0)return!1;var b=d.length-1;return p==b?d.pop():K.call(d,p,1),--this.size,!0}var W=N;function H(v){var d=this.__data__,p=O(d,v);return p<0?void 0:d[p][1]}var R=H;function A(v){return O(this.__data__,v)>-1}var _=A;function l(v,d){var p=this.__data__,b=O(p,v);return b<0?(++this.size,p.push([v,d])):p[b][1]=d,this}var T=l;function w(v){var d=-1,p=v==null?0:v.length;for(this.clear();++d<p;){var b=v[d];this.set(b[0],b[1])}}w.prototype.clear=g,w.prototype.delete=W,w.prototype.get=R,w.prototype.has=_,w.prototype.set=T;var x=w},86183:function(j,u,e){var r=e(83042),g=e(66092),o=(0,r.Z)(g.Z,"Map");u.Z=o},37834:function(j,u,e){e.d(u,{Z:function(){return pe}});var r=e(83042),g=(0,r.Z)(Object,"create"),o=g;function Z(){this.__data__=o?o(null):{},this.size=0}var O=Z;function J(L){var G=this.has(L)&&delete this.__data__[L];return this.size-=G?1:0,G}var K=J,N="__lodash_hash_undefined__",W=Object.prototype,H=W.hasOwnProperty;function R(L){var G=this.__data__;if(o){var oe=G[L];return oe===N?void 0:oe}return H.call(G,L)?G[L]:void 0}var A=R,_=Object.prototype,l=_.hasOwnProperty;function T(L){var G=this.__data__;return o?G[L]!==void 0:l.call(G,L)}var w=T,x="__lodash_hash_undefined__";function v(L,G){var oe=this.__data__;return this.size+=this.has(L)?0:1,oe[L]=o&&G===void 0?x:G,this}var d=v;function p(L){var G=-1,oe=L==null?0:L.length;for(this.clear();++G<oe;){var ie=L[G];this.set(ie[0],ie[1])}}p.prototype.clear=O,p.prototype.delete=K,p.prototype.get=A,p.prototype.has=w,p.prototype.set=d;var b=p,S=e(67308),h=e(86183);function E(){this.size=0,this.__data__={hash:new b,map:new(h.Z||S.Z),string:new b}}var M=E;function k(L){var G=typeof L;return G=="string"||G=="number"||G=="symbol"||G=="boolean"?L!=="__proto__":L===null}var z=k;function y(L,G){var oe=L.__data__;return z(G)?oe[typeof G=="string"?"string":"hash"]:oe.map}var X=y;function Q(L){var G=X(this,L).delete(L);return this.size-=G?1:0,G}var $=Q;function ne(L){return X(this,L).get(L)}var B=ne;function F(L){return X(this,L).has(L)}var P=F;function m(L,G){var oe=X(this,L),ie=oe.size;return oe.set(L,G),this.size+=oe.size==ie?0:1,this}var D=m;function q(L){var G=-1,oe=L==null?0:L.length;for(this.clear();++G<oe;){var ie=L[G];this.set(ie[0],ie[1])}}q.prototype.clear=M,q.prototype.delete=$,q.prototype.get=B,q.prototype.has=P,q.prototype.set=D;var pe=q},17685:function(j,u,e){var r=e(66092),g=r.Z.Symbol;u.Z=g},87668:function(j,u,e){e.d(u,{Z:function(){return R}});function r(A,_){for(var l=-1,T=Array(A);++l<A;)T[l]=_(l);return T}var g=r,o=e(29169),Z=e(27771),O=e(77008),J=e(56009),K=e(70908),N=Object.prototype,W=N.hasOwnProperty;function H(A,_){var l=(0,Z.Z)(A),T=!l&&(0,o.Z)(A),w=!l&&!T&&(0,O.Z)(A),x=!l&&!T&&!w&&(0,K.Z)(A),v=l||T||w||x,d=v?g(A.length,String):[],p=d.length;for(var b in A)(_||W.call(A,b))&&!(v&&(b=="length"||w&&(b=="offset"||b=="parent")||x&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||(0,J.Z)(b,p)))&&d.push(b);return d}var R=H},74073:function(j,u){function e(r,g){for(var o=-1,Z=r==null?0:r.length,O=Array(Z);++o<Z;)O[o]=g(r[o],o,r);return O}u.Z=e},93589:function(j,u,e){e.d(u,{Z:function(){return w}});var r=e(17685),g=Object.prototype,o=g.hasOwnProperty,Z=g.toString,O=r.Z?r.Z.toStringTag:void 0;function J(x){var v=o.call(x,O),d=x[O];try{x[O]=void 0;var p=!0}catch(S){}var b=Z.call(x);return p&&(v?x[O]=d:delete x[O]),b}var K=J,N=Object.prototype,W=N.toString;function H(x){return W.call(x)}var R=H,A="[object Null]",_="[object Undefined]",l=r.Z?r.Z.toStringTag:void 0;function T(x){return x==null?x===void 0?_:A:l&&l in Object(x)?K(x):R(x)}var w=T},87215:function(j,u){function e(r,g){var o=-1,Z=r.length;for(g||(g=Array(Z));++o<Z;)g[o]=r[o];return g}u.Z=e},13413:function(j,u){var e=typeof global=="object"&&global&&global.Object===Object&&global;u.Z=e},83042:function(j,u,e){e.d(u,{Z:function(){return M}});var r=e(73234),g=e(66092),o=g.Z["__core-js_shared__"],Z=o,O=function(){var k=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||"");return k?"Symbol(src)_1."+k:""}();function J(k){return!!O&&O in k}var K=J,N=e(77226),W=Function.prototype,H=W.toString;function R(k){if(k!=null){try{return H.call(k)}catch(z){}try{return k+""}catch(z){}}return""}var A=R,_=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,T=Function.prototype,w=Object.prototype,x=T.toString,v=w.hasOwnProperty,d=RegExp("^"+x.call(v).replace(_,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p(k){if(!(0,N.Z)(k)||K(k))return!1;var z=(0,r.Z)(k)?d:l;return z.test(A(k))}var b=p;function S(k,z){return k==null?void 0:k[z]}var h=S;function E(k,z){var y=h(k,z);return b(y)?y:void 0}var M=E},56009:function(j,u){var e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function g(o,Z){var O=typeof o;return Z=Z==null?e:Z,!!Z&&(O=="number"||O!="symbol"&&r.test(o))&&o>-1&&o%1==0&&o<Z}u.Z=g},72764:function(j,u){var e=Object.prototype;function r(g){var o=g&&g.constructor,Z=typeof o=="function"&&o.prototype||e;return g===Z}u.Z=r},1851:function(j,u){function e(r,g){return function(o){return r(g(o))}}u.Z=e},66092:function(j,u,e){var r=e(13413),g=typeof self=="object"&&self&&self.Object===Object&&self,o=r.Z||g||Function("return this")();u.Z=o},79651:function(j,u){function e(r,g){return r===g||r!==r&&g!==g}u.Z=e},29169:function(j,u,e){e.d(u,{Z:function(){return H}});var r=e(93589),g=e(18533),o="[object Arguments]";function Z(R){return(0,g.Z)(R)&&(0,r.Z)(R)==o}var O=Z,J=Object.prototype,K=J.hasOwnProperty,N=J.propertyIsEnumerable,W=O(function(){return arguments}())?O:function(R){return(0,g.Z)(R)&&K.call(R,"callee")&&!N.call(R,"callee")},H=W},27771:function(j,u){var e=Array.isArray;u.Z=e},50585:function(j,u,e){var r=e(73234),g=e(1656);function o(Z){return Z!=null&&(0,g.Z)(Z.length)&&!(0,r.Z)(Z)}u.Z=o},77008:function(j,u,e){e.d(u,{Z:function(){return H}});var r=e(66092);function g(){return!1}var o=g,Z=typeof exports=="object"&&exports&&!exports.nodeType&&exports,O=Z&&typeof module=="object"&&module&&!module.nodeType&&module,J=O&&O.exports===Z,K=J?r.Z.Buffer:void 0,N=K?K.isBuffer:void 0,W=N||o,H=W},73234:function(j,u,e){var r=e(93589),g=e(77226),o="[object AsyncFunction]",Z="[object Function]",O="[object GeneratorFunction]",J="[object Proxy]";function K(N){if(!(0,g.Z)(N))return!1;var W=(0,r.Z)(N);return W==Z||W==O||W==o||W==J}u.Z=K},1656:function(j,u){var e=9007199254740991;function r(g){return typeof g=="number"&&g>-1&&g%1==0&&g<=e}u.Z=r},77226:function(j,u){function e(r){var g=typeof r;return r!=null&&(g=="object"||g=="function")}u.Z=e},18533:function(j,u){function e(r){return r!=null&&typeof r=="object"}u.Z=e},70908:function(j,u,e){e.d(u,{Z:function(){return oe}});var r=e(93589),g=e(1656),o=e(18533),Z="[object Arguments]",O="[object Array]",J="[object Boolean]",K="[object Date]",N="[object Error]",W="[object Function]",H="[object Map]",R="[object Number]",A="[object Object]",_="[object RegExp]",l="[object Set]",T="[object String]",w="[object WeakMap]",x="[object ArrayBuffer]",v="[object DataView]",d="[object Float32Array]",p="[object Float64Array]",b="[object Int8Array]",S="[object Int16Array]",h="[object Int32Array]",E="[object Uint8Array]",M="[object Uint8ClampedArray]",k="[object Uint16Array]",z="[object Uint32Array]",y={};y[d]=y[p]=y[b]=y[S]=y[h]=y[E]=y[M]=y[k]=y[z]=!0,y[Z]=y[O]=y[x]=y[J]=y[v]=y[K]=y[N]=y[W]=y[H]=y[R]=y[A]=y[_]=y[l]=y[T]=y[w]=!1;function X(ie){return(0,o.Z)(ie)&&(0,g.Z)(ie.length)&&!!y[(0,r.Z)(ie)]}var Q=X;function $(ie){return function(be){return ie(be)}}var ne=$,B=e(13413),F=typeof exports=="object"&&exports&&!exports.nodeType&&exports,P=F&&typeof module=="object"&&module&&!module.nodeType&&module,m=P&&P.exports===F,D=m&&B.Z.process,q=function(){try{var ie=P&&P.require&&P.require("util").types;return ie||D&&D.binding&&D.binding("util")}catch(be){}}(),pe=q,L=pe&&pe.isTypedArray,G=L?ne(L):Q,oe=G},12686:function(j,u,e){e.d(u,{Z:function(){return on}});var r=e(67308);function g(){this.__data__=new r.Z,this.size=0}var o=g;function Z(t){var i=this.__data__,c=i.delete(t);return this.size=i.size,c}var O=Z;function J(t){return this.__data__.get(t)}var K=J;function N(t){return this.__data__.has(t)}var W=N,H=e(86183),R=e(37834),A=200;function _(t,i){var c=this.__data__;if(c instanceof r.Z){var U=c.__data__;if(!H.Z||U.length<A-1)return U.push([t,i]),this.size=++c.size,this;c=this.__data__=new R.Z(U)}return c.set(t,i),this.size=c.size,this}var l=_;function T(t){var i=this.__data__=new r.Z(t);this.size=i.size}T.prototype.clear=o,T.prototype.delete=O,T.prototype.get=K,T.prototype.has=W,T.prototype.set=l;var w=T,x=e(83042),v=function(){try{var t=(0,x.Z)(Object,"defineProperty");return t({},"",{}),t}catch(i){}}(),d=v;function p(t,i,c){i=="__proto__"&&d?d(t,i,{configurable:!0,enumerable:!0,value:c,writable:!0}):t[i]=c}var b=p,S=e(79651);function h(t,i,c){(c!==void 0&&!(0,S.Z)(t[i],c)||c===void 0&&!(i in t))&&b(t,i,c)}var E=h;function M(t){return function(i,c,U){for(var Y=-1,ee=Object(i),ae=U(i),V=ae.length;V--;){var te=ae[t?V:++Y];if(c(ee[te],te,ee)===!1)break}return i}}var k=M,z=k(),y=z,X=e(66092),Q=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$=Q&&typeof module=="object"&&module&&!module.nodeType&&module,ne=$&&$.exports===Q,B=ne?X.Z.Buffer:void 0,F=B?B.allocUnsafe:void 0;function P(t,i){if(i)return t.slice();var c=t.length,U=F?F(c):new t.constructor(c);return t.copy(U),U}var m=P,D=X.Z.Uint8Array,q=D;function pe(t){var i=new t.constructor(t.byteLength);return new q(i).set(new q(t)),i}var L=pe;function G(t,i){var c=i?L(t.buffer):t.buffer;return new t.constructor(c,t.byteOffset,t.length)}var oe=G,ie=e(87215),be=e(77226),Fe=Object.create,De=function(){function t(){}return function(i){if(!(0,be.Z)(i))return{};if(Fe)return Fe(i);t.prototype=i;var c=new t;return t.prototype=void 0,c}}(),Le=De,ze=e(1851),ur=(0,ze.Z)(Object.getPrototypeOf,Object),Ue=ur,Te=e(72764);function dr(t){return typeof t.constructor=="function"&&!(0,Te.Z)(t)?Le(Ue(t)):{}}var fr=dr,Ne=e(29169),Be=e(27771),ke=e(50585),He=e(18533);function pr(t){return(0,He.Z)(t)&&(0,ke.Z)(t)}var vr=pr,gr=e(77008),br=e(73234),hr=e(93589),mr="[object Object]",yr=Function.prototype,We=Object.prototype,Ge=yr.toString,_r=We.hasOwnProperty,Je=Ge.call(Object);function xr(t){if(!(0,He.Z)(t)||(0,hr.Z)(t)!=mr)return!1;var i=Ue(t);if(i===null)return!0;var c=_r.call(i,"constructor")&&i.constructor;return typeof c=="function"&&c instanceof c&&Ge.call(c)==Je}var Sr=xr,Tr=e(70908);function Cr(t,i){if(!(i==="constructor"&&typeof t[i]=="function")&&i!="__proto__")return t[i]}var Ee=Cr,wr=Object.prototype,Ie=wr.hasOwnProperty;function Pe(t,i,c){var U=t[i];(!(Ie.call(t,i)&&(0,S.Z)(U,c))||c===void 0&&!(i in t))&&b(t,i,c)}var Zr=Pe;function Ke(t,i,c,U){var Y=!c;c||(c={});for(var ee=-1,ae=i.length;++ee<ae;){var V=i[ee],te=U?U(c[V],t[V],V,c,t):void 0;te===void 0&&(te=t[V]),Y?b(c,V,te):Zr(c,V,te)}return c}var Ve=Ke,$e=e(87668);function Or(t){var i=[];if(t!=null)for(var c in Object(t))i.push(c);return i}var Ye=Or,Xe=Object.prototype,Ar=Xe.hasOwnProperty;function jr(t){if(!(0,be.Z)(t))return Ye(t);var i=(0,Te.Z)(t),c=[];for(var U in t)U=="constructor"&&(i||!Ar.call(t,U))||c.push(U);return c}var kr=jr;function Er(t){return(0,ke.Z)(t)?(0,$e.Z)(t,!0):kr(t)}var Qe=Er;function Ir(t){return Ve(t,Qe(t))}var Pr=Ir;function Rr(t,i,c,U,Y,ee,ae){var V=Ee(t,c),te=Ee(i,c),Re=ae.get(te);if(Re){E(t,c,Re);return}var le=ee?ee(V,te,c+"",t,i,ae):void 0,_e=le===void 0;if(_e){var Ze=(0,Be.Z)(te),Oe=!Ze&&(0,gr.Z)(te),ar=!Ze&&!Oe&&(0,Tr.Z)(te);le=te,Ze||Oe||ar?(0,Be.Z)(V)?le=V:vr(V)?le=(0,ie.Z)(V):Oe?(_e=!1,le=m(te,!0)):ar?(_e=!1,le=oe(te,!0)):le=[]:Sr(te)||(0,Ne.Z)(te)?(le=V,(0,Ne.Z)(V)?le=Pr(V):(!(0,be.Z)(V)||(0,br.Z)(V))&&(le=fr(te))):_e=!1}_e&&(ae.set(te,le),Y(le,te,U,ee,ae),ae.delete(te)),E(t,c,le)}var Mr=Rr;function qe(t,i,c,U,Y){t!==i&&y(i,function(ee,ae){if(Y||(Y=new w),(0,be.Z)(ee))Mr(t,i,ae,c,qe,U,Y);else{var V=U?U(Ee(t,ae),ee,ae+"",t,i,Y):void 0;V===void 0&&(V=ee),E(t,ae,V)}},Qe)}var Fr=qe;function Dr(t){return t}var er=Dr;function rr(t,i,c){switch(c.length){case 0:return t.call(i);case 1:return t.call(i,c[0]);case 2:return t.call(i,c[0],c[1]);case 3:return t.call(i,c[0],c[1],c[2])}return t.apply(i,c)}var Lr=rr,nr=Math.max;function zr(t,i,c){return i=nr(i===void 0?t.length-1:i,0),function(){for(var U=arguments,Y=-1,ee=nr(U.length-i,0),ae=Array(ee);++Y<ee;)ae[Y]=U[i+Y];Y=-1;for(var V=Array(i+1);++Y<i;)V[Y]=U[Y];return V[i]=c(ae),Lr(t,this,V)}}var Ur=zr;function Nr(t){return function(){return t}}var Br=Nr,Hr=d?function(t,i){return d(t,"toString",{configurable:!0,enumerable:!1,value:Br(i),writable:!0})}:er,Wr=Hr,Gr=800,Jr=16,Kr=Date.now;function Vr(t){var i=0,c=0;return function(){var U=Kr(),Y=Jr-(U-c);if(c=U,Y>0){if(++i>=Gr)return arguments[0]}else i=0;return t.apply(void 0,arguments)}}var $r=Vr,Yr=$r(Wr),Xr=Yr;function Qr(t,i){return Xr(Ur(t,i,er),t+"")}var qr=Qr,en=e(56009);function rn(t,i,c){if(!(0,be.Z)(c))return!1;var U=typeof i;return(U=="number"?(0,ke.Z)(c)&&(0,en.Z)(i,c.length):U=="string"&&i in c)?(0,S.Z)(c[i],t):!1}var nn=rn;function tn(t){return qr(function(i,c){var U=-1,Y=c.length,ee=Y>1?c[Y-1]:void 0,ae=Y>2?c[2]:void 0;for(ee=t.length>3&&typeof ee=="function"?(Y--,ee):void 0,ae&&nn(c[0],c[1],ae)&&(ee=Y<3?void 0:ee,Y=1),i=Object(i);++U<Y;){var V=c[U];V&&t(i,V,U,ee)}return i})}var an=tn,tr=an(function(t,i,c){Fr(t,i,c)}),on=tr},64529:function(j,u,e){e.d(u,{Ue:function(){return A}});const r=l=>{let T;const w=new Set,x=(E,M)=>{const k=typeof E=="function"?E(T):E;if(!Object.is(k,T)){const z=T;T=(M!=null?M:typeof k!="object"||k===null)?k:Object.assign({},T,k),w.forEach(y=>y(T,z))}},v=()=>T,S={setState:x,getState:v,getInitialState:()=>h,subscribe:E=>(w.add(E),()=>w.delete(E)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),w.clear()}},h=T=l(x,v,S);return S},g=l=>l?r(l):r;var o=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),g(l)),Z=e(67294),O=e(52798);const{useDebugValue:J}=Z,{useSyncExternalStoreWithSelector:K}=O;let N=!1;const W=l=>l;function H(l,T=W,w){w&&!N&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),N=!0);const x=K(l.subscribe,l.getState,l.getServerState||l.getInitialState,T,w);return J(x),x}const R=l=>{typeof l!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const T=typeof l=="function"?g(l):l,w=(x,v)=>H(T,x,v);return Object.assign(w,T),w},A=l=>l?R(l):R;var _=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),A(l))},782:function(j,u,e){e.d(u,{mW:function(){return K},tJ:function(){return x}});const r=(v,d)=>(p,b,S)=>(S.dispatch=h=>(p(E=>v(E,h),!1,h),h),S.dispatchFromDevtools=!0,se({dispatch:(...h)=>S.dispatch(...h)},d)),g=null,o=new Map,Z=v=>{const d=o.get(v);return d?Object.fromEntries(Object.entries(d.stores).map(([p,b])=>[p,b.getState()])):{}},O=(v,d,p)=>{if(v===void 0)return{type:"untracked",connection:d.connect(p)};const b=o.get(p.name);if(b)return se({type:"tracked",store:v},b);const S={connection:d.connect(p),stores:{}};return o.set(p.name,S),se({type:"tracked",store:v},S)},K=(v,d={})=>(p,b,S)=>{const B=d,{enabled:h,anonymousActionType:E,store:M}=B,k=ln(B,["enabled","anonymousActionType","store"]);let z;try{z=(h!=null?h:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(P){}if(!z)return h&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),v(p,b,S);const F=O(M,z,k),{connection:y}=F,X=ln(F,["connection"]);let Q=!0;S.setState=(P,m,D)=>{const q=p(P,m);if(!Q)return q;const pe=D===void 0?{type:E||"anonymous"}:typeof D=="string"?{type:D}:D;return M===void 0?(y==null||y.send(pe,b()),q):(y==null||y.send(cn(se({},pe),{type:`${M}/${pe.type}`}),cn(se({},Z(k.name)),{[M]:S.getState()})),q)};const $=(...P)=>{const m=Q;Q=!1,p(...P),Q=m},ne=v(S.setState,b,S);if(X.type==="untracked"?y==null||y.init(ne):(X.stores[X.store]=S,y==null||y.init(Object.fromEntries(Object.entries(X.stores).map(([P,m])=>[P,P===X.store?ne:m.getState()])))),S.dispatchFromDevtools&&typeof S.dispatch=="function"){let P=!1;const m=S.dispatch;S.dispatch=(...D)=>{D[0].type==="__setState"&&!P&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),P=!0),m(...D)}}return y.subscribe(P=>{var m;switch(P.type){case"ACTION":if(typeof P.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return N(P.payload,D=>{if(D.type==="__setState"){if(M===void 0){$(D.state);return}Object.keys(D.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const q=D.state[M];if(q==null)return;JSON.stringify(S.getState())!==JSON.stringify(q)&&$(q);return}S.dispatchFromDevtools&&typeof S.dispatch=="function"&&S.dispatch(D)});case"DISPATCH":switch(P.payload.type){case"RESET":return $(ne),M===void 0?y==null?void 0:y.init(S.getState()):y==null?void 0:y.init(Z(k.name));case"COMMIT":if(M===void 0){y==null||y.init(S.getState());return}return y==null?void 0:y.init(Z(k.name));case"ROLLBACK":return N(P.state,D=>{if(M===void 0){$(D),y==null||y.init(S.getState());return}$(D[M]),y==null||y.init(Z(k.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return N(P.state,D=>{if(M===void 0){$(D);return}JSON.stringify(S.getState())!==JSON.stringify(D[M])&&$(D[M])});case"IMPORT_STATE":{const{nextLiftedState:D}=P.payload,q=(m=D.computedStates.slice(-1)[0])==null?void 0:m.state;if(!q)return;$(M===void 0?q:q[M]),y==null||y.send(null,D);return}case"PAUSE_RECORDING":return Q=!Q}return}}),ne},N=(v,d)=>{let p;try{p=JSON.parse(v)}catch(b){console.error("[zustand devtools middleware] Could not parse the received json",b)}p!==void 0&&d(p)},W=v=>(d,p,b)=>{const S=b.subscribe;return b.subscribe=(E,M,k)=>{let z=E;if(M){const y=(k==null?void 0:k.equalityFn)||Object.is;let X=E(b.getState());z=Q=>{const $=E(Q);if(!y(X,$)){const ne=X;M(X=$,ne)}},k!=null&&k.fireImmediately&&M(X,X)}return S(z)},v(d,p,b)},H=null,R=(v,d)=>(...p)=>Object.assign({},v,d(...p));function A(v,d){let p;try{p=v()}catch(S){return}return{getItem:S=>{var h;const E=k=>k===null?null:JSON.parse(k,d==null?void 0:d.reviver),M=(h=p.getItem(S))!=null?h:null;return M instanceof Promise?M.then(E):E(M)},setItem:(S,h)=>p.setItem(S,JSON.stringify(h,d==null?void 0:d.replacer)),removeItem:S=>p.removeItem(S)}}const _=v=>d=>{try{const p=v(d);return p instanceof Promise?p:{then(b){return _(b)(p)},catch(b){return this}}}catch(p){return{then(b){return this},catch(b){return _(b)(p)}}}},l=(v,d)=>(p,b,S)=>{let h=se({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:F=>F,version:0,merge:(F,P)=>se(se({},P),F)},d),E=!1;const M=new Set,k=new Set;let z;try{z=h.getStorage()}catch(F){}if(!z)return v((...F)=>{console.warn(`[zustand persist middleware] Unable to update item '${h.name}', the given storage is currently unavailable.`),p(...F)},b,S);const y=_(h.serialize),X=()=>{const F=h.partialize(se({},b()));let P;const m=y({state:F,version:h.version}).then(D=>z.setItem(h.name,D)).catch(D=>{P=D});if(P)throw P;return m},Q=S.setState;S.setState=(F,P)=>{Q(F,P),X()};const $=v((...F)=>{p(...F),X()},b,S);let ne;const B=()=>{var F;if(!z)return;E=!1,M.forEach(m=>m(b()));const P=((F=h.onRehydrateStorage)==null?void 0:F.call(h,b()))||void 0;return _(z.getItem.bind(z))(h.name).then(m=>{if(m)return h.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==h.version){if(h.migrate)return h.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var D;return ne=h.merge(m,(D=b())!=null?D:$),p(ne,!0),X()}).then(()=>{P==null||P(ne,void 0),E=!0,k.forEach(m=>m(ne))}).catch(m=>{P==null||P(void 0,m)})};return S.persist={setOptions:F=>{h=se(se({},h),F),F.getStorage&&(z=F.getStorage())},clearStorage:()=>{z==null||z.removeItem(h.name)},getOptions:()=>h,rehydrate:()=>B(),hasHydrated:()=>E,onHydrate:F=>(M.add(F),()=>{M.delete(F)}),onFinishHydration:F=>(k.add(F),()=>{k.delete(F)})},B(),ne||$},T=(v,d)=>(p,b,S)=>{let h=se({storage:A(()=>localStorage),partialize:B=>B,version:0,merge:(B,F)=>se(se({},F),B)},d),E=!1;const M=new Set,k=new Set;let z=h.storage;if(!z)return v((...B)=>{console.warn(`[zustand persist middleware] Unable to update item '${h.name}', the given storage is currently unavailable.`),p(...B)},b,S);const y=()=>{const B=h.partialize(se({},b()));return z.setItem(h.name,{state:B,version:h.version})},X=S.setState;S.setState=(B,F)=>{X(B,F),y()};const Q=v((...B)=>{p(...B),y()},b,S);S.getInitialState=()=>Q;let $;const ne=()=>{var B,F;if(!z)return;E=!1,M.forEach(m=>{var D;return m((D=b())!=null?D:Q)});const P=((F=h.onRehydrateStorage)==null?void 0:F.call(h,(B=b())!=null?B:Q))||void 0;return _(z.getItem.bind(z))(h.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==h.version){if(h.migrate)return h.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var D;return $=h.merge(m,(D=b())!=null?D:Q),p($,!0),y()}).then(()=>{P==null||P($,void 0),$=b(),E=!0,k.forEach(m=>m($))}).catch(m=>{P==null||P(void 0,m)})};return S.persist={setOptions:B=>{h=se(se({},h),B),B.storage&&(z=B.storage)},clearStorage:()=>{z==null||z.removeItem(h.name)},getOptions:()=>h,rehydrate:()=>ne(),hasHydrated:()=>E,onHydrate:B=>(M.add(B),()=>{M.delete(B)}),onFinishHydration:B=>(k.add(B),()=>{k.delete(B)})},h.skipHydration||ne(),$||Q},x=(v,d)=>"getStorage"in d||"serialize"in d||"deserialize"in d?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),l(v,d)):T(v,d)}}]);
}());