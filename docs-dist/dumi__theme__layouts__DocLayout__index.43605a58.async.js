"use strict";(self.webpackChunknovojs_kit=self.webpackChunknovojs_kit||[]).push([[367],{73876:function(ie,I,i){var E=i(27415),l=i(67294),j=i(85893),V=(0,l.memo)(function(){return(0,j.jsxs)(E.ql,{children:[(0,j.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,j.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,j.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,j.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/site.webmanifest",rel:"manifest"}),(0,j.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,j.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,j.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,j.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,j.jsx)("meta",{content:"#000000",name:"theme-color"})]})});I.Z=V},86473:function(ie,I,i){i.r(I),i.d(I,{default:function(){return Do}});var E=i(21445),l=i(67294),j=i(76248),V=i(73876),$=i(19632),K=i.n($),T=i(13769),w=i.n(T),Se=i(9783),le=i.n(Se),je=i(51914),S=i(27415),Te=i(64063),C=i.n(Te),X=i(84827),Ce=["setLoading"],ke=["setLoading"],He=typeof window!="undefined",se={},De=function(t,o){(0,l.useEffect)(function(){l.startTransition(function(){t()})},o)},Le=function(t,o){(0,je.Z)(function(){t()},o,{maxWait:96,wait:32})},we=typeof l.startTransition=="function"?De:Le,Y=function(t,o,r){var a=r||function(s,v){return X.H.setState(le()({},s,v))};!He&&!se[t]&&(a(t,o),se[t]=!0),we(function(){a(t,o)},[o])},H={activePath:"/",link:"/",title:"Home"},u=function(){var t=(0,S.WF)(),o=(0,S.tx)(),r=(0,S.eL)(),a=(0,S.zh)(),s=(0,S.OK)(),v=(0,S.TH)(),p=(0,S.bU)();return Y("siteData",t,function(){var f=t.setLoading,g=w()(t,Ce),b=X.H.getState(),x=b.siteData,m=x.setLoading,z=w()(x,ke);C()(g,z)||X.H.setState({siteData:t})}),Y("sidebar",o),Y("routeMeta",r),Y("location",v),Y("tabMeta",a),Y("locale",p),Y("navData",s,function(){var f=t.themeConfig.hideHomeNav?s:[H].concat(K()(s));X.H.setState({navData:f})}),!1},h=i(68400),c=i.n(h),y=i(54956),M,Q=(0,y.vJ)(M||(M=c()([`

#nprogress {
  .bar {
    background: `,`;
  }
	
  .peg {
	  display: none !important;
  }

  .spinner {
    display: none;
  }
}




`])),function(n){var t=n.theme;return t.colorText}),D=Q,d=i(47637),Z=function(){return{contentMaxWidth:960,footerHeight:300,headerHeight:64,sidebarWidth:240,tocWidth:176}},N=Z,pe=i(59879),F=i(27950),ee=i(1322),W=i(56978),fe=i(77381),ce=i(259),re=i(96074),ue=i(78957),de=i(19162),Be=i(25169),B=i(17542),Me,ge,Ze,Ne,Ue,En=(0,y.kc)(function(n){var t=n.css,o=n.token,r=n.responsive,a=n.stylish;return{desc:t(Me||(Me=c()([`
      font-size: `,`px;
      line-height: `,`px;
    `])),o.fontSizeLG,o.lineHeightLG),label:t(ge||(ge=c()([`
      width: 80px;
    `]))),meta:t(Ze||(Ze=c()([""]))),text:t(Ne||(Ne=c()([`
      `,`
    `])),a.resetLinkColor),title:t(Ue||(Ue=c()([`
      `,` {
        margin-block: 0;
        font-size: 32px !important;
      }
    `])),r.mobile)}}),e=i(85893),Ae=(0,l.memo)(function(n){var t=n.title,o=n.type,r=n.componentName,a=n.description,s=n.defaultImport,v=n.pkg,p=n.sourceUrl,f=n.docUrl,g=n.serviceList,b=g===void 0?[]:g,x=En(),m=x.styles,z=(0,F.F)(),q=z.mobile,ne=o==="doc",te=[p&&{children:"Source",icon:(0,e.jsx)(W.Z,{icon:de.Z}),url:p},f&&{children:"Edit",icon:(0,e.jsx)(W.Z,{icon:Be.Z}),url:f}].filter(Boolean),L=s?"import ".concat(r," from '").concat(v,"';"):"import { ".concat(r," } from '").concat(v,"';");return(0,e.jsxs)(B.D,{id:"api-header",children:[(0,e.jsx)(ce.Z.Title,{className:m.title,children:t}),a&&(0,e.jsx)("div",{children:(0,e.jsx)(ce.Z.Text,{className:m.desc,type:"secondary",children:a})}),!ne&&(0,e.jsxs)(B.D,{gap:q?16:24,style:{marginTop:16},children:[r&&(0,e.jsx)("div",{style:{display:"flex"},children:(0,e.jsx)(fe.Z,{spotlight:!0,children:L})}),(0,e.jsx)(re.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,e.jsxs)(B.D,{distribution:"space-between",gap:q?24:0,horizontal:!q,children:[(0,e.jsx)(ue.Z,{split:(0,e.jsx)(re.Z,{type:"vertical"}),wrap:!0,children:b.map(function(k){return(0,e.jsx)("a",{href:k.url,rel:"noreferrer",target:"_blank",title:k.label,children:(0,e.jsxs)(B.D,{align:"center",className:m.text,gap:8,horizontal:!0,children:[k.icon,k.children]})},k.label)})}),(0,e.jsx)(ue.Z,{className:m.meta,split:(0,e.jsx)(re.Z,{type:"vertical"}),children:te.map(function(k,A){return(0,e.jsx)("a",{href:k.url,rel:"noreferrer",target:"_blank",children:(0,e.jsxs)(B.D,{align:"center",className:m.text,gap:8,horizontal:!0,children:[k.icon,k.children]})},A)})})]})]})]})}),$e,Xe,We,Ge=(0,y.kc)(function(n){var t=n.cx,o=n.css,r=n.token,a=n.stylish;return{background:t(a.gradientAnimation,o($e||($e=c()([`
      pointer-events: none;

      position: absolute;
      z-index: 0;
      top: -100px;
      right: -20vw;
      transform: rotate(4deg);

      width: 60vw;
      height: 200px;

      opacity: 0.2;
      filter: blur(100px);
    `])))),changelog:o(Xe||(Xe=c()([`
    .markdown {
      font-size: 16px;

      h1 {
        display: none;
      }

      h2,
      h3 {
        margin-bottom: 0;
        font-size: 28px;
      }

      sup {
        color: `,`;
      }

      details {
        font-size: 14px;
      }

      summary > kbd {
        margin-left: 6px;
      }

      a[href='/changelog#readme-top'] {
        display: block;
        margin-bottom: 32px;
        padding-bottom: 32px;
        border-bottom: 1px solid `,`;

        > img {
          display: none;
        }
      }
    }
  `])),r.colorTextDescription,r.colorBorderSecondary),content:o(We||(We=c()([`
    width: 100%;
    max-width: `,`px;
    margin: 0 auto;
  `])),r.contentMaxWidth)}}),Zn=i(97857),R=i.n(Zn),Nn=i(21687),Un=i(53219),An=i(82701),Ve,Ke,Ye,Je,$n=(0,y.kc)(function(n){var t=n.token,o=n.css;return{alignmentEnd:o(Ve||(Ve=c()([`
    justify-content: flex-end;
  `]))),container:o(Ke||(Ke=c()([`
    cursor: pointer;

    min-width: 250px;
    padding: 16px 24px;

    background: `,`;
    border-radius: 8px;

    &:hover {
      background: `,`;
    }
  `])),t.colorBgContainer,t.colorFillTertiary),nav:o(Ye||(Ye=c()([`
    font-size: 12px;
    color: `,`;
  `])),t.colorTextTertiary),title:o(Je||(Je=c()([`
    font-size: 16px;
  `])))}}),Xn=(0,l.memo)(function(n){var t=n.title,o=n.link,r=n.type,a=$n(),s=a.styles,v=a.cx,p=(0,l.useMemo)(function(){switch(r){case"prev":return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(W.Z,{icon:Un.Z}),(0,e.jsx)("span",{style:{lineHeight:1},children:"Previous"})]});case"next":return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{style:{lineHeight:1},children:"Next"}),(0,e.jsx)(W.Z,{icon:An.Z})]})}},[r]);return(0,e.jsx)(S.rU,{to:o,children:(0,e.jsxs)(B.D,{className:s.container,gap:8,children:[(0,e.jsx)(B.D,{className:v(s.nav,r==="next"&&s.alignmentEnd),gap:4,horizontal:!0,children:p}),(0,e.jsx)(B.D,{className:v(s.title,r==="next"&&s.alignmentEnd),horizontal:!0,children:t})]})})}),Qe=Xn,Wn=(0,l.memo)(function(){var n=(0,d.HX)(d.e9,C()),t=n.prev,o=n.next,r=(0,F.F)(),a=r.mobile;return(0,e.jsxs)(B.D,{distribution:"space-between",gap:a?12:0,horizontal:!a,style:{margin:a?12:0},children:[t?(0,e.jsx)(Qe,R()({type:"prev"},t)):(0,e.jsx)("div",{}),o?(0,e.jsx)(Qe,R()({type:"next"},o)):(0,e.jsx)("div",{})]})}),Gn=Wn,qe,_e,Vn=(0,y.kc)(function(n,t){var o=n.cx,r=n.token,a=n.responsive,s=n.css,v=n.stylish;return{content:o(!t&&s(qe||(qe=c()([`
          padding: 24px 48px;
          background-color: `,`;
          border-radius: 10px;

          `,` {
            padding: 8px 16px;
            border-radius: 0;
          }
        `])),r.colorBgContainer,a.mobile),s(_e||(_e=c()([`
        flex: 1;
        box-sizing: border-box;
        width: 100%;
        min-height: 400px;

        &:has([data-page-tabs='true']) {
          padding-top: 8px;
        }

        .markdown {
          `,`;
          h2,
          h3 {
            &[id^='version'] {
              color: `,`;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            transition: all 400ms `,`;

            > a[aria-hidden]:first-child {
              float: left;

              width: 20px;
              margin-inline-start: -24px;
              padding-inline-end: 4px;

              font-size: inherit;
              line-height: inherit;
              color: `,`;
              text-align: right;

              &:hover {
                border: 0;
              }

              > .icon-link::before {
                content: '#';
                font-size: inherit;
                color: `,`;
              }
            }

            &:hover {
              color: `,`;
            }

            &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
              visibility: hidden;
            }
          }

          ol,
          ul {
            padding-inline-start: 18px;
          }
        }
      `])),v.markdown,r.colorText,r.motionEaseOut,r.colorText,r.colorTextTertiary,r.colorText))}}),Kn=["children"],Yn=(0,l.memo)(function(n){var t=n.children,o=w()(n,Kn),r=(0,d.HX)(function(x){return x.siteData.loading}),a=(0,d.HX)(d.c6,C()),s=a.docStyle,v=Vn(s==="pure"),p=v.styles,f=v.cx,g=(0,F.F)(),b=g.mobile;return(0,l.useEffect)(function(){document.body.scrollTo(0,0)},[r]),(0,e.jsxs)(B.D,R()(R()({gap:b?0:24,width:"100%"},o),{},{children:[(0,e.jsx)("div",{style:{height:0}}),(0,e.jsxs)("div",{className:f("dumi-antd-style-content",p.content),children:[(0,e.jsx)(Nn.Z,{active:!0,loading:r,paragraph:!0,style:{minHeight:"50vh"}}),(0,e.jsx)("div",{style:{display:r?"none":void 0},children:t})]}),(0,e.jsx)(Gn,{})]}))}),en=Yn,Jn=(0,l.memo)(function(){var n=(0,S.pC)(),t=(0,F.F)(),o=t.mobile,r=(0,d.HX)(function(g){return{repoBase:(0,d.BB)(g)}},j.X),a=r.repoBase,s=(0,d.HX)(function(g){return{fm:g.routeMeta.frontmatter}},C()),v=s.fm,p=Ge(),f=p.styles;return(0,l.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:f.background}),(0,e.jsxs)(ee.Z,{className:f.content,style:{padding:o?0:24},children:[(0,e.jsx)("div",{style:{padding:o?16:0,width:"100%"},children:(0,e.jsx)(Ae,{description:v.description,docUrl:"".concat(a,"/blob/master/CHANGELOG.md"),sourceUrl:"".concat(a,"/blob/master/CHANGELOG.md"),title:v.title})}),(0,e.jsx)(en,{className:f.changelog,children:n})]})]})}),Qn=Jn,qn=i(97770),_n=(0,l.memo)(function(){return(0,e.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"64 64 896 896",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z",fillRule:"evenodd"})})}),et=(0,l.memo)(function(){return(0,e.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),nt=(0,l.memo)(function(){return(0,e.jsx)("svg",{height:"14px",version:"1.1",viewBox:"0 0 14 14",width:"14px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,e.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),tt=(0,l.memo)(function(){return(0,e.jsxs)("svg",{height:"1em",viewBox:"0 0 108 108",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("defs",{children:(0,e.jsxs)("linearGradient",{id:"main",children:[(0,e.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,e.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,e.jsx)("path",{d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",fill:"url(#main)",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),ot=(0,l.memo)(function(){return(0,e.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),rt=(0,l.memo)(function(){var n=(0,d.HX)(d.UQ,C()),t=n.pkg,o=(0,l.useMemo)(function(){var r=encodeURIComponent(String(t));return[{children:"NPM",icon:(0,e.jsx)(nt,{}),label:"NPM",url:"https://www.npmjs.com/package/".concat(r)},{children:"UNPKG",icon:(0,e.jsx)(ot,{}),label:"Check package files",url:"https://unpkg.com/browse/".concat(r,"/")},{children:"BundlePhobia",icon:(0,e.jsx)(_n,{}),label:"Check bundle size",url:"https://bundlephobia.com/package/".concat(r)},{children:"PackagePhobia",icon:(0,e.jsx)(tt,{}),label:"Check package size",url:"https://packagephobia.com/result?p=".concat(r)},{children:"Anvaka Graph",icon:(0,e.jsx)(et,{}),label:"Dependence graph",url:"https://npm.anvaka.com/#/view/2d/".concat(encodeURIComponent(r))}]},[t]);return(0,e.jsx)(Ae,R()({serviceList:o},n))}),at=rt,it=(0,l.memo)(function(){var n=(0,S.pC)(),t=(0,F.F)(),o=t.mobile,r=(0,d.HX)(function(g){return{giscus:(0,d.nP)(g),isApiPage:(0,d.Yo)(g)}},j.X),a=r.isApiPage,s=r.giscus,v=Ge(),p=v.styles;(0,l.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[location.pathname]);var f=(0,l.useCallback)(function(){return s&&(0,e.jsx)("div",{style:{marginTop:64},children:(0,e.jsx)(qn.Z,{category:s.category,categoryId:s.categoryId,id:"lobehub",mapping:"title",repo:s.repo,repoId:s.repoId})})},[s,location.pathname]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:p.background}),(0,e.jsxs)(ee.Z,{className:p.content,style:{marginBottom:48,padding:o?0:24},children:[a?(0,e.jsx)("div",{style:{padding:o?16:0,width:"100%"},children:(0,e.jsx)(at,{})}):void 0,(0,e.jsxs)(en,{children:[n,s&&(0,e.jsx)(f,{})]})]})]})}),lt=it,st=i(24681),ct=(0,l.memo)(function(){var n=(0,d.HX)(d.SL,C()),t=(0,y.Fg)();if(n!=null&&n.length)return(0,e.jsx)(st.Z,{items:n,style:{margin:"0 16px",maxWidth:t.contentMaxWidth}})}),ut=ct,dt=i(81871),vt=(0,l.memo)(function(){var n=(0,d.HX)(d.aH),t=(0,d.HX)(d.S2),o=(0,d.HX)(d.Vd);return(0,e.jsx)(dt.Z,{actions:o,description:t,title:n})}),ht=vt,mt=(0,l.memo)(function(){var n=(0,S.pC)();return(0,l.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,e.jsxs)(B.D,{align:"center",gap:64,style:{minHeight:"64vh",padding:"64px 24px"},children:[(0,e.jsx)(ht,{}),(0,e.jsx)(ut,{}),n]})}),pt=mt,ft=i(84607),gt=i(10381),xt=i(4775),bt=i(78884),yt=function(t){var o=t.github,r={items:[{description:"AIGC Components",openExternal:!0,title:"Lobe UI",url:"https://github.com/lobehub/lobe-ui"},{description:"Awesome lint configs",openExternal:!0,title:"Lobe Lint",url:"https://github.com/lobehub/lobe-chat"},{description:"Lobe Dumi Theme",openExternal:!0,title:"Designed for Dumi 2",url:"https://github.com/lobehub/lobe-flow"}],title:"Resources"},a={items:[o&&{icon:(0,e.jsx)(W.Z,{icon:gt.Z,size:"small"}),openExternal:!0,title:"Report Bug",url:"".concat(o,"/issues/new/choose")},o&&{icon:(0,e.jsx)(W.Z,{icon:xt.Z,size:"small"}),openExternal:!0,title:"Request Feature",url:"".concat(o,"/issues/new/choose")}].filter(Boolean),title:"Community"},s={items:[o&&{icon:(0,e.jsx)(W.Z,{icon:de.Z,size:"small"}),openExternal:!0,title:"GitHub",url:o},{LinkComponent:S.rU,icon:(0,e.jsx)(W.Z,{icon:bt.Z,size:"small"}),title:"Changelog",url:"/changelog"}].filter(Boolean),title:"Help"},v={items:[{description:"OpenAI Chat Bot",openExternal:!0,title:"\u{1F916} Lobe Chat",url:"https://github.com/lobehub/lobe-chat"},{description:"Stable Diffusion Extension",openExternal:!0,title:"\u{1F92F} Lobe Theme",url:"https://github.com/lobehub/sd-webui-lobe-theme"},{description:"Gen intelligently",openExternal:!0,title:"\u{1F4DD} Readme Generator",url:"https://ui.lobehub.com"},{description:"AI Commit CLI",openExternal:!0,title:"\u{1F48C} Lobe Commit",url:"https://github.com/lobehub/lobe-commit"},{description:"AI i18n CLI",openExternal:!0,title:"\u{1F310} Lobe i18n",url:"https://github.com/lobehub/lobe-commit"}],title:"More Products"};return[r,a,s,v]},nn,tn,St=(0,y.kc)(function(n){var t=n.css,o=n.responsive,r=n.token,a="rc-footer";return{container:t(nn||(nn=c()([`
      grid-area: footer;
      align-self: stretch;

      color: `,`;
      text-align: center;

      border-top: 1px solid `,`;

      `,` {
        flex-direction: column;
        border: none;
      }
    `])),r.colorTextDescription,r.colorSplit,o.mobile),footer:t(tn||(tn=c()([`
      font-size: 14px;
      line-height: 1.5;
      color: `,`;
      background-color: `,`;

      &.`,` {
        a {
          color: `,`;
          text-decoration: none;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }

      .`,` {
        &-container {
          width: 100%;
          max-width: `,`px;
          margin: auto;
          padding: 60px 0 20px;
        }

        &-columns {
          display: flex;
          justify-content: space-around;
        }

        &-column {
          h2 {
            position: relative;

            margin: 0 auto;

            font-size: 16px;
            font-weight: 500;
            color: `,`;
          }

          &-icon {
            position: relative;
            top: -1px;

            display: inline-block;

            width: 22px;
            margin-inline-end: 0.5em;

            text-align: center;
            vertical-align: middle;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }
        }

        &-item {
          margin: 12px 0;

          &-icon {
            position: relative;
            top: -1px;

            display: inline-block;

            width: 16px;
            margin-inline-end: 0.4em;

            text-align: center;
            vertical-align: middle;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }

          &-separator {
            margin: 0 0.3em;
          }
        }

        &-bottom {
          &-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px 0;

            font-size: 16px;
            line-height: 32px;
            text-align: center;

            border-top: 1px solid `,`;
          }
        }

        &-light {
          color: rgba(0, 0, 0, 85%);
          background-color: transparent;

          h2,
          a {
            color: rgba(0, 0, 0, 85%);
          }
        }

        &-light &-bottom-container {
          border-top-color: #e8e8e8;
        }

        &-light &-item-separator,
        &-light &-item-description {
          color: rgba(0, 0, 0, 45%);
        }
      }

      `,` {
        .`,` {
          text-align: center;

          &-container {
            padding: 40px 0;
          }

          &-columns {
            display: block;
          }

          &-column {
            display: block;
            margin-bottom: 40px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    `])),r.colorTextSecondary,r.colorBgLayout,a,r.colorTextTertiary,r.colorLinkHover,a,r.contentMaxWidth,r.colorText,r.colorBorderSecondary,o.mobile,a)}}),jt=(0,l.memo)(function(){var n=(0,d.HX)(function(z){return z.siteData},C()),t=n.themeConfig,o=n.pkg,r=t.footerConfig,a=t.footer,s=(0,d.HX)(d.BB,j.X),v=St(),p=v.styles,f=v.theme,g=(0,F.F)(),b=g.mobile;if(a){var x=r!=null&&r.columns?r==null?void 0:r.columns:yt({github:s||o.homepage});r!=null&&r.resources&&(x[0]=r==null?void 0:r.resources),r!=null&&r.moreProducts&&(x[3]=r==null?void 0:r.moreProducts);var m=(r==null?void 0:r.bottom)||a;return(0,e.jsx)(ft.Z,{bottom:b?(0,e.jsxs)(ee.Z,{className:p.container,children:["Copyright \xA9 2022-",new Date().getFullYear(),(0,e.jsx)(B.D,{align:"center",dangerouslySetInnerHTML:{__html:m},horizontal:!0})]}):(0,e.jsxs)(ee.Z,{horizontal:!0,children:["Copyright \xA9 2022-",new Date().getFullYear()," ",(0,e.jsx)(re.Z,{type:"vertical"}),(0,e.jsx)("span",{dangerouslySetInnerHTML:{__html:m}})]}),columns:x,contentMaxWidth:f.contentMaxWidth,theme:f.appearance})}}),Tt=jt,Ct=i(61314),kt=i(78458),Ht=i(83813),Dt=i(77540),on,Lt=(0,y.kc)(function(n){var t=n.css,o=n.responsive,r=n.token;return t(on||(on=c()([`
    display: inline-flex;
    align-items: center;

    font-size: 22px;
    font-weight: 500;
    line-height: 1;
    color: `,`;
    text-decoration: none;

    `,` {
      font-size: 18px;
    }
  `])),r.colorText,o.mobile)}),wt=(0,l.memo)(function(){var n=(0,X.H)(Dt.c6,C()),t=(0,X.H)(function(p){return p.locale},C()),o=Lt(),r=o.styles,a=o.cx,s=(0,F.F)(),v=s.mobile;return n&&(0,e.jsx)(S.rU,{className:a(r),to:"base"in t?t.base:"/",children:n.logo?(0,e.jsxs)(ue.Z,{children:[(0,e.jsx)(kt.Z,{avatar:n.logo,size:v?32:36}),n.name]}):(0,e.jsx)(Ht.Z,{extra:n.name,size:v?32:36,type:n.logoType||"combine"})})}),Bt=wt,Mt=i(94088),Pt=i(40123),rn,an,It=(0,y.kc)(function(n){var t=n.css,o=n.stylish,r=n.token,a=n.responsive,s=n.prefixCls;return{link:t(rn||(rn=c()([`
        `,`
      `])),o.resetLinkColor),tabs:t(an||(an=c()([`
        .`,`-tabs-tab-active a {
          color: `,` !important;
        }
        `,` {
          display: none;
        }
      `])),s,r.colorText,a.mobile)}}),Ft=(0,l.memo)(function(){var n=It(),t=n.styles,o=(0,d.HX)(function(a){return a.navData},j.X),r=(0,d.HX)(d.K1);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Mt.Z,{activeKey:r,className:t.tabs,items:o.map(function(a){return{key:String(a.activePath||a.link),label:/^(\w+:)\/\/|^(mailto|tel):/.test(a.link||"")?(0,e.jsx)("a",{className:t.link,href:String(a.link),rel:"noreferrer",target:"_blank",children:a.title}):(0,e.jsx)(S.rU,{className:t.link,to:String(a.link),children:a.title})}})}),(0,e.jsx)(Pt.Z,{})]})}),Rt=Ft,Ot=i(5574),U=i.n(Ot),zt=i(46782),Et=i(74932),ln,sn,cn,un,dn,Zt=(0,y.kc)(function(n){var t=n.token,o=n.responsive,r=n.css,a=n.cx;return{container:r(ln||(ln=c()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),o.mobile),input:r(sn||(sn=c()([`
      box-sizing: border-box;
      width: 280px;
      height: `,`px;
      padding: 0;
      padding-inline-start: 40px;
      padding-inline-end: 12px;

      font-size: 14px;
      color: `,`;

      background-color: transparent;
      border: 1px solid `,`;
      border-radius: 20px;
      outline: none;

      transition: all 0.3s;

      &::input-placeholder {
        color: `,`;
      }

      &:focus {
        background: `,`;
        border-color: `,`;

        ~ .site-header-shortcut {
          opacity: 0;
        }
      }
    `])),t.controlHeightLG,t.colorTextSecondary,t.colorBorder,t.colorTextPlaceholder,t.colorBgElevated,t.colorBorderSecondary),popover:r(cn||(cn=c()([`
      position: absolute;
      top: 100%;
      inset-inline-end: 0;

      overflow: auto;
      overscroll-behavior: contain;
      flex: 1;

      width: 540px;
      min-height: 60px;
      max-height: 400px;
      margin-top: 8px;

      background-color: `,`;
      border: 1px solid `,`;
      border-radius: `,`px;
      box-shadow: `,`;

      -webkit-overflow-scrolling: touch;

      .dumi-default-search-result {
        > dl {
          > dt {
            color: `,`;
            background: `,`;
          }

          > dd {
            > a {
              > h4 {
                color: `,`;
              }

              > p {
                color: `,`;
              }

              &:hover {
                background: `,`;
              }
            }

            + dd {
              border-color: `,`;
            }
          }
        }

        mark {
          color: #000;
          background: `,`;
        }
      }
    `])),t.colorBgElevated,t.colorBorder,t.borderRadiusLG,t.boxShadow,t.colorText,t.colorFillTertiary,t.colorTextSecondary,t.colorTextDescription,t.colorFillSecondary,t.colorBorderSecondary,t.yellow9),shortcut:a("site-header-shortcut",r(un||(un=c()([`
        pointer-events: none;

        position: absolute;
        top: 50%;
        inset-inline-end: 11px;
        transform: translateY(-50%);

        display: inline-block;

        padding: 4px 8px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        white-space: nowrap;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: 11px;

        transition: all 0.3s;

        `,` {
          display: none;
        }
      `])),t.colorTextDescription,t.colorFillSecondary,t.colorBorderSecondary,o.mobile)),svg:a(r(dn||(dn=c()([`
      position: absolute;
      top: 50%;
      inset-inline-start: 16px;
      transform: translateY(-50%);

      width: 16px;
      margin-top: 1px;

      color: `,`;
    `])),t.colorTextPlaceholder))}}),Nt=(0,l.memo)(function(){var n=Zt(),t=n.styles,o=(0,l.useState)(!1),r=U()(o,2),a=r[0],s=r[1],v=(0,S.OO)(),p=v.keywords,f=v.setKeywords,g=v.result,b=v.loading;return(0,e.jsxs)("div",{className:t.container,children:[(0,e.jsx)(zt.Z,{enableShortKey:!0,onBlur:function(){setTimeout(function(){s(!1)},1)},onChange:function(m){return f(m.target.value)},onFocus:function(){return s(!0)},spotlight:!0}),p.trim()&&a&&(g.length>0||!b)&&(0,e.jsx)("div",{className:t.popover,children:(0,e.jsx)(Et.Z,{data:g,loading:b})})]})}),Ut=Nt,At=i(11565),$t=i(53192),Xt=(0,l.memo)(function(){var n=(0,l.useState)(!1),t=U()(n,2),o=t[0],r=t[1],a=(0,d.HX)(function(b){return b.navData},C()),s=(0,d.HX)(function(b){return b.sidebar},C()),v=(0,d.HX)(function(b){return{activePath:(0,d.K1)(b),pathname:b.location.pathname}},j.X),p=v.pathname,f=v.activePath,g=(0,l.useMemo)(function(){var b=s==null?void 0:s.map(function(x){return!x.link&&{children:x.children.map(function(m){return{key:"s-".concat(m.link),label:(0,e.jsx)(S.rU,{onClick:function(){r(!1)},to:m.link,children:m.title})}}),label:x.title,type:"group"}});return a.map(function(x){return{children:(x.activePath||x.link)===f&&b,key:x.activePath||x.link,label:(0,e.jsx)(S.rU,{to:String(x.link),children:x.title})}})},[a,f,s]);return(0,e.jsx)(At.Z,{items:g,openKeys:[f],opened:o,selectedKeys:(0,$t.Z)([f,"s-".concat(p)]),setOpened:r})}),Wt=Xt,vn=i(51606),Gt=i(72919),hn,Vt=(0,Gt.Z)("Discord",[["path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",key:"18tl5t"}]]),Kt=(0,y.kc)(function(n){var t=n.css;return t(hn||(hn=c()([`
    svg {
      overflow: visible !important;
    }
  `])))}),Yt=(0,l.memo)(function(){var n=(0,d.HX)(d.jp),t=Kt(),o=t.styles;return n?(0,e.jsx)("a",{href:n,rel:"noreferrer",target:"_blank",children:(0,e.jsx)(vn.Z,{className:o,icon:Vt,size:"site"})}):void 0}),Jt=Yt,Qt=(0,l.memo)(function(){var n=(0,d.HX)(d.BB);return n?(0,e.jsx)("a",{href:n,rel:"noreferrer",target:"_blank",children:(0,e.jsx)(vn.Z,{icon:de.Z,size:"site"})}):void 0}),qt=Qt,_t=i(14726),O=i(18482),ve=i(1371),eo=i(29545),no=i(76010),mn,pn,fn,to=(0,y.kc)(function(n,t){var o=n.css,r=n.cx,a=n.token;return{active:r("".concat(t,"-item-active"),o(mn||(mn=c()([`
      background: `,`;
    `])),a.colorFillTertiary)),item:r("".concat(t,"-item"),o(pn||(pn=c()([`
      all: unset;

      user-select: none;
      scroll-margin: 50px;

      display: block;

      box-sizing: inherit;
      width: 100%;
      padding: 12px 10px;

      font-family: `,`;
      font-weight: normal;
      line-height: 1;
      color: `,`;

      background: transparent;
      border-radius: 5px;

      &:hover {
        background: `,`;
      }
    `])),a.fontFamily,a.colorText,a.colorFillTertiary)),selected:r("".concat(t,"-item-selected"),o(fn||(fn=c()([`
      font-weight: bold;
      color: `,`;
      background: `,`;

      &:hover {
        color: `,`;
        background: `,`;
      }
    `])),a.colorPrimaryText,a.colorPrimaryBg,a.colorPrimaryTextHover,a.colorPrimaryBgHover))}}),oo=["value","label","prefixCls","isSelected","isActive","disabled"],ro=(0,l.memo)((0,l.forwardRef)(function(n,t){var o=n.value,r=n.label,a=n.prefixCls,s=n.isSelected,v=n.isActive,p=n.disabled,f=w()(n,oo),g=to(a),b=g.styles,x=g.cx;return(0,e.jsx)("button",R()(R()({"aria-selected":s,className:x(b.item,le()(le()({},b.selected,s),b.active,v)),disabled:p,ref:t,role:"option",tabIndex:-1,type:"button"},f),{},{children:r}),o)})),ao=ro,gn,xn,io=(0,y.kc)(function(n,t){var o=n.css,r=n.stylish,a=n.cx,s=n.token;return{button:a("".concat(t,"-button"),o(gn||(gn=c()([`
        `,`
        all: unset;

        cursor: default;
        user-select: none;

        padding: 8px;

        font-size: `,`px;
        line-height: 0;
        color: `,`;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        -webkit-tap-highlight-color: transparent;

        &:focus-visible {
          border-color: `,`;
          box-shadow: 0 0 0 2px `,`;
        }
      `])),r.buttonDefaultHover,s.fontSize,s.colorTextSecondary,s.colorBgContainer,s.colorBorder,s.borderRadius,s.colorPrimary,s.colorPrimaryBg)),container:a(t,o(xn||(xn=c()([`
        user-select: none;
        scrollbar-width: none;

        overflow-y: auto;
        overscroll-behavior: contain;

        box-sizing: border-box;
        width: 160px;
        padding: 5px;

        font-size: `,`;

        background: `,`;
        border: 1px solid `,`;
        border-radius: 8px;
        outline: 0;
        box-shadow: `,`;

        &::-webkit-scrollbar {
          display: none;
        }
      `])),s.fontSize,s.colorBgElevated,s.colorBorder,s.boxShadowSecondary))}}),lo=(0,l.memo)(function(n){var t=n.options,o=t===void 0?[]:t,r=n.value,a=n.prefixCls,s=n.onChange,v=n.renderValue,p=n.renderItem,f=n.style,g=a!=null?a:"native-select",b=(0,no.Z)(0,{onChange:s,value:r}),x=U()(b,2),m=x[0],z=x[1],q=io(g),ne=q.styles,te=(0,l.useRef)([]),L=(0,l.useRef)([]),k=(0,l.useRef)(null),A=(0,l.useRef)(!1),_=(0,l.useRef)(!0),be=(0,l.useRef)(),ye=(0,l.useRef)(null),Lo=(0,l.useState)(!1),kn=U()(Lo,2),ae=kn[0],Pe=kn[1],wo=(0,l.useState)(null),Hn=U()(wo,2),Ie=Hn[0],Dn=Hn[1],Bo=(0,l.useState)(!1),Ln=U()(Bo,2),Fe=Ln[0],wn=Ln[1],Mo=(0,l.useState)(0),Bn=U()(Mo,2),Mn=Bn[0],Pn=Bn[1],Po=(0,l.useState)(!1),In=U()(Po,2),Re=In[0],Fn=In[1],Io=(0,l.useState)(!1),Rn=U()(Io,2),On=Rn[0],Fo=Rn[1];ae||(Mn!==0&&Pn(0),Fe&&wn(!1),On&&Fo(!1));var he=(0,O.YF)({middleware:Fe?[(0,ve.cv)(5),Re?(0,ve.uY)({crossAxis:!0,padding:10}):(0,ve.RR)({padding:10}),(0,ve.dp)({apply:function(P){var G,me,Uo=P.availableHeight;Object.assign((G=(me=ye.current)===null||me===void 0?void 0:me.style)!==null&&G!==void 0?G:{},{maxHeight:"".concat(Uo,"px")})},padding:10})]:[(0,O.aN)({index:m,listRef:te,minItemsVisible:Re?8:4,offset:Mn,onFallbackChange:wn,overflowRef:k,padding:10,referenceOverflowThreshold:20,scrollRef:ye}),(0,ve.cv)({crossAxis:-4})],onOpenChange:Pe,open:ae,placement:"bottom-start",whileElementsMounted:eo.Me}),Oe=he.x,ze=he.y,Ro=he.strategy,zn=he.refs,oe=he.context,Ee=(0,O.NI)([(0,O.eS)(oe,{event:"mousedown"}),(0,O.bQ)(oe),(0,O.qs)(oe,{role:"listbox"}),(0,O.Rz)(oe,{enabled:!Fe,onChange:Pn,overflowRef:k,scrollRef:ye}),(0,O.c0)(oe,{activeIndex:Ie,listRef:te,onNavigate:Dn,selectedIndex:m}),(0,O.ox)(oe,{activeIndex:Ie,listRef:L,onMatch:ae?Dn:z})]),Oo=Ee.getReferenceProps,zo=Ee.getFloatingProps,Eo=Ee.getItemProps;(0,l.useEffect)(function(){if(ae)return be.current=setTimeout(function(){A.current=!0},300),function(){clearTimeout(be.current)};A.current=!1,_.current=!0},[ae]);var Zo=o[m]||{},No=Zo.label;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("button",R()(R()({"aria-label":"selected-item",className:ne.button,ref:zn.setReference,style:f,type:"button"},Oo({onPointerMove:function(P){var G=P.pointerType;G==="mouse"&&Fn(!1)},onTouchStart:function(){Fn(!0)}})),{},{children:v?v(m):No})),(0,e.jsx)(O.ll,{children:ae&&(0,e.jsx)(O.y0,{lockScroll:!Re,style:{zIndex:3e3},children:(0,e.jsx)(O.wD,{context:oe,initialFocus:-1,modal:!1,children:(0,e.jsx)("div",{ref:zn.setFloating,style:{left:Oe!=null?Oe:0,position:Ro,top:ze!=null?ze:0},children:(0,e.jsx)("div",R()(R()({className:ne.container,ref:ye,style:{overflowY:"auto"}},zo({onContextMenu:function(P){P.preventDefault()}})),{},{children:o.map(function(J,P){return(0,e.jsx)(ao,R()({disabled:On,isActive:P===Ie,isSelected:P===m,label:p?p(J,P):J.label,prefixCls:g,ref:function(me){te.current[P]=me,L.current[P]=J.label},value:J.value},Eo({onClick:function(){A.current&&(z(P),Pe(!1))},onKeyDown:function(){A.current=!0},onMouseUp:function(){_.current&&(A.current&&(z(P),Pe(!1)),clearTimeout(be.current),be.current=setTimeout(function(){A.current=!0}))},onTouchStart:function(){A.current=!0,_.current=!1}})),J.value)})}))})})})})]})}),so=lo;function xe(n){var t=n.pathname,o=n.current,r=n.target,a="base"in o?t.replace(o.base.replace(/\/$/,""),"")||"/":t.replace(new RegExp("".concat(o.suffix,"$")),"");return"base"in r?"".concat(r.base.replace(/\/$/,"")).concat(a).replace(/([^/])\/$/,"$1"):"".concat(a).concat(r.suffix)}var co={"de-DE":"\u{1F1E9}\u{1F1EA}","en-US":"\u{1F1FA}\u{1F1F8}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","pt-BR":"\u{1F1E7}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}","zh-CN":"\u{1F1E8}\u{1F1F3}"},bn={"en-US":"EN","zh-CN":"\u4E2D"},uo=(0,l.memo)(function(n){var t=n.locale,o=n.current,r=(0,S.TH)(),a=r.pathname,s=(0,l.useState)(function(){return xe({current:o,pathname:a,target:t})}),v=U()(s,2),p=v[0],f=v[1];return(0,l.useEffect)(function(){f(xe({current:o,pathname:a,target:t}))},[a,o.id,t.id]),(0,e.jsx)(S.rU,{to:p,children:(0,e.jsx)(_t.ZP,{style:{alignItems:"center",display:"flex",justifyContent:"center",minWidth:34,padding:0},children:bn[t.id]})})}),vo=(0,l.memo)(function(){var n=(0,d.HX)(function(o){return o.siteData.locales}),t=(0,d.HX)(function(o){return o.locale});if(!(n.length<=1))return n.length>2?(0,e.jsx)(so,{onChange:function(r){console.log(xe({current:t,pathname:location.pathname,target:n[r]})),S.m8.push(xe({current:t,pathname:location.pathname,target:n[r]}))},options:n.map(function(o){return{label:bn[o.id],value:o.id}}),renderItem:function(r,a){return"".concat(co[n[a].id]," ").concat(n[a].name)},style:{alignItems:"center",display:"flex",height:32,justifyContent:"center",minWidth:32,padding:0},value:n.findIndex(function(o){return o.id===t.id})}):(0,e.jsx)(uo,{current:t,locale:n.find(function(o){var r=o.id;return r!==t.id})})}),ho=vo,mo=i(4),yn=i(53530),po=(0,l.memo)(function(){var n=(0,yn.f)(function(o){return o.themeMode}),t=(0,S.OI)()[2];return(0,l.useEffect)(function(){return t(n)},[n]),(0,e.jsx)(mo.Z,{onThemeSwitch:function(r){yn.f.setState({themeMode:r})},themeMode:n})}),Sn=po,fo=(0,l.memo)(function(){var n=(0,X.H)(function(r){return!!r.routeMeta.frontmatter}),t=(0,F.F)(),o=t.mobile;if(n)return(0,e.jsx)(Ct.Z,{actions:o?(0,e.jsx)(Sn,{}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ut,{})," ",(0,e.jsx)(ho,{}),(0,e.jsx)(qt,{}),(0,e.jsx)(Jt,{}),(0,e.jsx)(Sn,{})]}),logo:(0,e.jsx)(Bt,{}),nav:o?(0,e.jsx)(Wt,{}):(0,e.jsx)(Rt,{})})}),go=fo,jn,Tn,xo=(0,y.kc)(function(n){var t=n.css,o=n.token;return{sidebar:t(jn||(jn=c()([`
    margin-top: `,`px;
  `])),o.headerHeight),sidebarInner:t(Tn||(Tn=c()([`
    overflow: auto;
    width: 100%;
    height: 100%;
    padding: 16px;

    dl {
      margin: 0;
      padding: 0;
      line-height: 1;

      > dt {
        overflow: hidden;

        margin: 8px 0;

        font-weight: 500;
        color: `,`;
        text-overflow: ellipsis;
        text-transform: uppercase;
        white-space: nowrap;
      }

      > dd {
        margin: 0;
        padding: 2px 0;

        > a {
          overflow: hidden;
          display: block;

          padding: 6px 12px;

          font-size: `,`px;
          line-height: `,`;
          color: `,`;
          text-decoration: none;
          text-overflow: ellipsis;
          white-space: nowrap;

          border-radius: 6px;

          transition: color 600ms `,`,
            background-color 100ms `,`;

          &:hover {
            color: `,`;
            background: `,`;
          }

          &:active {
            color: `,`;
            background-color: `,`;
          }

          &.active {
            color: `,`;
            background-color: `,`;

            &:hover {
              color: `,`;
              background: `,`;
            }

            &:active {
              color: `,`;
              background-color: `,`;
            }
          }
        }
      }

      + dl {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px dashed `,`;
      }
    }
  `])),o.colorText,o.fontSize,o.lineHeight,o.colorTextSecondary,o.motionEaseOut,o.motionEaseOut,o.colorText,o.colorFillTertiary,o.colorText,o.colorFill,o.colorText,o.colorFillSecondary,o.colorText,o.colorFillSecondary,o.colorText,o.colorFill,o.colorBorder)}}),bo=(0,l.memo)(function(){var n=(0,X.H)(function(a){return a.sidebar},C()),t=xo(),o=t.styles,r=!n||n.length===0;return r?void 0:(0,e.jsx)("section",{className:o.sidebarInner,children:n.map(function(a,s){return(0,e.jsxs)("dl",{children:[a.title&&(0,e.jsx)("dt",{children:a.title}),a.children.map(function(v){return(0,e.jsx)("dd",{children:(0,e.jsx)(S.OL,{end:!0,title:v.title,to:v.link,children:v.title})},v.link)})]},String(s))})})}),yo=bo,So=i(49114),Cn=48,jo=(0,l.memo)(function(){var n=(0,d.HX)(d.TL,C()),t=(0,F.F)(),o=t.mobile,r=(0,y.Fg)(),a=(0,l.useState)(Cn),s=U()(a,2),v=s[0],p=s[1];if((0,l.useEffect)(function(){var f=document.querySelector("#api-header");f&&p(f.clientHeight+Cn)},[window.location.href,n]),!((n==null?void 0:n.length)<1))return(0,e.jsxs)(e.Fragment,{children:[!o&&(0,e.jsx)("div",{style:{height:v}}),(0,e.jsx)(So.Z,{getContainer:function(){return document.body},headerHeight:r.headerHeight,isMobile:o,items:n,tocWidth:r.tocWidth})]})}),To=jo,Co=(0,l.memo)(function(){var n=(0,S.YB)(),t=(0,S.TH)(),o=t.hash,r=(0,y.Fg)(),a=(0,F.F)(),s=a.mobile,v=a.laptop,p=(0,d.HX)(function(L){var k=L.location.pathname==="/changelog",A=(0,d.D$)(L),_;return A?_="home":k?_="changelog":_="docs",{loading:L.siteData.loading,noToc:(0,d.TL)(L).length===0,page:_,siteTitle:(0,d.TG)(L)}},j.X),f=p.loading,g=p.page,b=p.siteTitle,x=p.noToc,m=(0,d.HX)(function(L){return L.routeMeta.frontmatter},C()),z=g!=="docs"||s||m.sidebar===!1,q=m.toc===!1||x,ne=s?q:!v||q;console.log(m);var te=(0,l.useCallback)(function(){return(0,e.jsxs)(S.ql,{children:[(0,e.jsx)("html",{lang:n.locale.replace(/-.+$/,"")}),m.title&&(0,e.jsx)("meta",{content:m.title,property:"og:title"}),m.description&&(0,e.jsx)("meta",{content:m.description,name:"description"}),m.description&&(0,e.jsx)("meta",{content:m.description,property:"og:description"}),m.keywords&&(0,e.jsx)("meta",{content:m.keywords.join(","),name:"keywords"}),m.keywords&&(0,e.jsx)("meta",{content:m.keywords.join(","),property:"og:keywords"}),!m.title||g==="home"?(0,e.jsx)("title",{children:b}):(0,e.jsxs)("title",{children:[m.title," - ",b||"------------------}"]})]})},[n,m,b,g]);return(0,l.useEffect)(function(){var L=o.replace("#","");L&&setTimeout(function(){var k=document.querySelector("#".concat(decodeURIComponent(L)));k&&(k.scrollIntoView(),window.scrollBy({top:-80}))},1)},[f,o]),(0,l.useEffect)(function(){document.body.scrollTo(0,0)},[b]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(te,{}),(0,e.jsxs)(pe.ZP,{asideWidth:r.sidebarWidth,footer:(0,e.jsx)(Tt,{}),header:(0,e.jsx)(go,{}),headerHeight:s&&g!=="home"?r.headerHeight+36:r.headerHeight,sidebar:z?void 0:(0,e.jsx)(yo,{}),toc:ne?void 0:(0,e.jsx)(To,{}),tocWidth:ne?0:r.tocWidth,children:[g==="home"&&(0,e.jsx)(pt,{}),g==="changelog"&&(0,e.jsx)(Qn,{}),g==="docs"&&(0,e.jsx)(lt,{})]})]})}),ko=Co,Ho=(0,l.memo)(function(){var n=(0,d.fl)(function(o){return o.themeMode},j.X),t=(0,d.HX)(d.b8.token);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(V.Z,{}),(0,e.jsx)(u,{}),(0,e.jsxs)(E.Z,{customToken:function(r){return Object.assign({},N(r),t)},themeMode:n,children:[(0,e.jsx)(D,{}),(0,e.jsx)(ko,{})]})]})}),Do=Ho},47637:function(ie,I,i){i.d(I,{K1:function(){return ke},UQ:function(){return C},e9:function(){return De},jp:function(){return $.jp},SL:function(){return je},nP:function(){return $.nP},BB:function(){return $.BB},Vd:function(){return le},S2:function(){return Se},aH:function(){return w},Yo:function(){return Te},D$:function(){return K},b8:function(){return Y},TG:function(){return $.TG},c6:function(){return $.c6},TL:function(){return He},HX:function(){return Le.H},fl:function(){return we.f}});var E=i(97857),l=i.n(E),j=i(19632),V=i.n(j),$=i(77540),K=function(u){return!!u.routeMeta.frontmatter.hero},T=function(u,h){if(h)return h[u.locale.id]?h[u.locale.id]:h},w=function(u){var h,c;return((h=u.routeMeta.frontmatter.hero)===null||h===void 0?void 0:h.title)||((c=T(u,u.siteData.themeConfig.hero))===null||c===void 0?void 0:c.title)||T(u,u.siteData.themeConfig.title)||u.siteData.themeConfig.name},Se=function(u){var h,c;return((h=u.routeMeta.frontmatter.hero)===null||h===void 0?void 0:h.description)||((c=T(u,u.siteData.themeConfig.hero))===null||c===void 0?void 0:c.description)||T(u,u.siteData.themeConfig.description)},le=function(u){var h,c;return((h=u.routeMeta.frontmatter.hero)===null||h===void 0?void 0:h.actions)||((c=T(u,u.siteData.themeConfig.hero))===null||c===void 0?void 0:c.actions)||T(u,u.siteData.themeConfig.actions)},je=function(u){var h;return K(u)?((h=T(u,u.siteData.themeConfig.hero))===null||h===void 0?void 0:h.features)||T(u,u.siteData.themeConfig.features)||u.routeMeta.frontmatter.features||[]:[]},S=function(u){return u===!1?!1:typeof u=="string"},Te=function(u){var h,c=u.routeMeta.frontmatter;if(u.siteData.themeConfig.apiHeader===!1||c.apiHeader===!1)return!1;if(c.apiHeader)return!0;var y=["/api","/components"].concat(V()(((h=u.siteData.themeConfig.apiHeader)===null||h===void 0?void 0:h.match)||[]));return y.some(function(M){return u.location.pathname.startsWith(M)})},C=function(u){var h,c,y,M,Q=(0,$.BB)(u),D=u.routeMeta.frontmatter,d=u.locale.id,Z=function(ge){return ge.replace("{github}",Q).replace("{atomId}",D.atomId||"").replace("{title}",D.title).replace("{locale}",d)},N=u.siteData.themeConfig.apiHeader||{},pe=N.type,F=pe===void 0?"component":pe,ee=N.pkg,W=ee===void 0?u.siteData.pkg.name:ee,fe=N.sourceUrl,ce=N.docUrl,re=((h=D.apiHeader)===null||h===void 0?void 0:h.pkg)||W,ue=D.atomId||D.title,de=((c=D.apiHeader)===null||c===void 0?void 0:c.defaultImport)||!1,Be=((y=D.apiHeader)===null||y===void 0?void 0:y.sourceUrl)||(S(fe)?Z(fe):void 0),B=((M=D.apiHeader)===null||M===void 0?void 0:M.docUrl)||(S(ce)?Z(ce):void 0);return{componentName:ue,defaultImport:de,description:D.description,docUrl:B,pkg:re,sourceUrl:Be,title:D.title,type:F}},X=i(12686),Ce=function(u){var h=u.routeMeta.frontmatter;return(0,X.Z)({},h.token,u.siteData.themeConfig.siteToken)},ke=function(u){if(u.location.pathname==="/")return"/";var h=u.navData.filter(function(c){return c.link!=="/"}).find(function(c){return u.location.pathname.startsWith(String(c.activePath||c.link))});return(h==null?void 0:h.activePath)||(h==null?void 0:h.link)||""},He=function(u){var h,c,y=u.routeMeta,M=y.toc,Q=y.frontmatter;(h=u.tabMeta)!==null&&h!==void 0&&h.toc&&(M=u.tabMeta.toc),(c=u.tabMeta)!==null&&c!==void 0&&c.frontmatter&&(Q=u.tabMeta.frontmatter);var D=function(Z){if(!Q.tocDepth||typeof Q.tocDepth=="number"&&Q.tocDepth>Z-1)return!0};return M.reduce(function(d,Z){if(Z.depth===2&&D(2))d.push(l()({},Z));else if(Z.depth===3&&D(3)){var N=d.at(-1);N&&(N.children=N.children||[],N.children.push(l()({},Z)))}return d},[])},se=function(u){var h;return((h=u.sidebar)===null||h===void 0?void 0:h.map(function(c){return c.children}).flat())||[]},De=function(u){var h=se(u),c=u.location.pathname,y=h.findIndex(function(M){return M.link===c});return{currentIndex:y,next:h[y+1],prev:h[y-1]}},Le=i(84827),we=i(53530),Y={apiHeader:C,flattenSidebar:se,token:Ce}},77540:function(ie,I,i){i.d(I,{BB:function(){return j},TG:function(){return l},c6:function(){return E},jp:function(){return V},nP:function(){return $}});var E=function(T){return T.siteData.themeConfig},l=function(T){return T.siteData.themeConfig.title},j=function(T){var w;return((w=T.siteData.themeConfig.socialLinks)===null||w===void 0?void 0:w.github)||""},V=function(T){var w;return((w=T.siteData.themeConfig.socialLinks)===null||w===void 0?void 0:w.discord)||""},$=function(T){return T.siteData.themeConfig.giscus}},84827:function(ie,I,i){i.d(I,{H:function(){return V}});var E=i(64529),l=i(782),j={locale:{id:"zh-CN",name:"\u4E2D\u6587",suffix:""},location:{hash:"",key:"",pathname:"",search:"",state:""},navData:[],routeMeta:{frontmatter:{},tabs:void 0,texts:[],toc:[]},sidebar:[],siteData:{components:{},demos:{},entryExports:{},loading:!0,locales:[],pkg:{},setLoading:void 0,themeConfig:{}}},V=(0,E.Ue)()((0,l.mW)(function(){return j},{name:"dumi-theme-lobehub"}))},53530:function(ie,I,i){i.d(I,{f:function(){return j}});var E=i(64529),l=i(782),j=(0,E.Ue)()((0,l.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))}}]);
