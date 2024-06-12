"use strict";(self.webpackChunknovojs_kit=self.webpackChunknovojs_kit||[]).push([[1406],{73876:function(C,s,n){var d=n(27415),f=n(67294),r=n(85893),h=(0,f.memo)(function(){return(0,r.jsxs)(d.ql,{children:[(0,r.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,r.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,r.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,r.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/site.webmanifest",rel:"manifest"}),(0,r.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,r.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,r.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,r.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,r.jsx)("meta",{content:"#000000",name:"theme-color"})]})});s.Z=h},78658:function(C,s,n){n.r(s);var d=n(21445),f=n(27415),r=n(64063),h=n.n(r),m=n(67294),p=n(73876),o=n(47637),i=n(85893);s.default=(0,m.memo)(function(){var _=(0,o.fl)(function(P){return P.themeMode},h()),E=(0,f.pC)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p.Z,{}),(0,i.jsx)(d.Z,{themeMode:_,children:E})]})})},47637:function(C,s,n){n.d(s,{K1:function(){return j},UQ:function(){return U},e9:function(){return y},jp:function(){return m.jp},SL:function(){return P},nP:function(){return m.nP},BB:function(){return m.BB},Vd:function(){return E},S2:function(){return _},aH:function(){return i},Yo:function(){return H},D$:function(){return p},b8:function(){return k},TG:function(){return m.TG},c6:function(){return m.c6},TL:function(){return L},HX:function(){return W.H},fl:function(){return K.f}});var d=n(97857),f=n.n(d),r=n(19632),h=n.n(r),m=n(77540),p=function(e){return!!e.routeMeta.frontmatter.hero},o=function(e,t){if(t)return t[e.locale.id]?t[e.locale.id]:t},i=function(e){var t,a;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.title)||((a=o(e,e.siteData.themeConfig.hero))===null||a===void 0?void 0:a.title)||o(e,e.siteData.themeConfig.title)||e.siteData.themeConfig.name},_=function(e){var t,a;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.description)||((a=o(e,e.siteData.themeConfig.hero))===null||a===void 0?void 0:a.description)||o(e,e.siteData.themeConfig.description)},E=function(e){var t,a;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.actions)||((a=o(e,e.siteData.themeConfig.hero))===null||a===void 0?void 0:a.actions)||o(e,e.siteData.themeConfig.actions)},P=function(e){var t;return p(e)?((t=o(e,e.siteData.themeConfig.hero))===null||t===void 0?void 0:t.features)||o(e,e.siteData.themeConfig.features)||e.routeMeta.frontmatter.features||[]:[]},b=function(e){return e===!1?!1:typeof e=="string"},H=function(e){var t,a=e.routeMeta.frontmatter;if(e.siteData.themeConfig.apiHeader===!1||a.apiHeader===!1)return!1;if(a.apiHeader)return!0;var c=["/api","/components"].concat(h()(((t=e.siteData.themeConfig.apiHeader)===null||t===void 0?void 0:t.match)||[]));return c.some(function(v){return e.location.pathname.startsWith(v)})},U=function(e){var t,a,c,v,S=(0,m.BB)(e),u=e.routeMeta.frontmatter,M=e.locale.id,D=function(Y){return Y.replace("{github}",S).replace("{atomId}",u.atomId||"").replace("{title}",u.title).replace("{locale}",M)},g=e.siteData.themeConfig.apiHeader||{},T=g.type,R=T===void 0?"component":T,B=g.pkg,V=B===void 0?e.siteData.pkg.name:B,I=g.sourceUrl,x=g.docUrl,z=((t=u.apiHeader)===null||t===void 0?void 0:t.pkg)||V,F=u.atomId||u.title,N=((a=u.apiHeader)===null||a===void 0?void 0:a.defaultImport)||!1,Z=((c=u.apiHeader)===null||c===void 0?void 0:c.sourceUrl)||(b(I)?D(I):void 0),G=((v=u.apiHeader)===null||v===void 0?void 0:v.docUrl)||(b(x)?D(x):void 0);return{componentName:F,defaultImport:N,description:u.description,docUrl:G,pkg:z,sourceUrl:Z,title:u.title,type:R}},A=n(12686),$=function(e){var t=e.routeMeta.frontmatter;return(0,A.Z)({},t.token,e.siteData.themeConfig.siteToken)},j=function(e){if(e.location.pathname==="/")return"/";var t=e.navData.filter(function(a){return a.link!=="/"}).find(function(a){return e.location.pathname.startsWith(String(a.activePath||a.link))});return(t==null?void 0:t.activePath)||(t==null?void 0:t.link)||""},L=function(e){var t,a,c=e.routeMeta,v=c.toc,S=c.frontmatter;(t=e.tabMeta)!==null&&t!==void 0&&t.toc&&(v=e.tabMeta.toc),(a=e.tabMeta)!==null&&a!==void 0&&a.frontmatter&&(S=e.tabMeta.frontmatter);var u=function(D){if(!S.tocDepth||typeof S.tocDepth=="number"&&S.tocDepth>D-1)return!0};return v.reduce(function(M,D){if(D.depth===2&&u(2))M.push(f()({},D));else if(D.depth===3&&u(3)){var g=M.at(-1);g&&(g.children=g.children||[],g.children.push(f()({},D)))}return M},[])},O=function(e){var t;return((t=e.sidebar)===null||t===void 0?void 0:t.map(function(a){return a.children}).flat())||[]},y=function(e){var t=O(e),a=e.location.pathname,c=t.findIndex(function(v){return v.link===a});return{currentIndex:c,next:t[c+1],prev:t[c-1]}},W=n(84827),K=n(53530),k={apiHeader:U,flattenSidebar:O,token:$}},77540:function(C,s,n){n.d(s,{BB:function(){return r},TG:function(){return f},c6:function(){return d},jp:function(){return h},nP:function(){return m}});var d=function(o){return o.siteData.themeConfig},f=function(o){return o.siteData.themeConfig.title},r=function(o){var i;return((i=o.siteData.themeConfig.socialLinks)===null||i===void 0?void 0:i.github)||""},h=function(o){var i;return((i=o.siteData.themeConfig.socialLinks)===null||i===void 0?void 0:i.discord)||""},m=function(o){return o.siteData.themeConfig.giscus}},84827:function(C,s,n){n.d(s,{H:function(){return h}});var d=n(64529),f=n(782),r={locale:{id:"zh-CN",name:"\u4E2D\u6587",suffix:""},location:{hash:"",key:"",pathname:"",search:"",state:""},navData:[],routeMeta:{frontmatter:{},tabs:void 0,texts:[],toc:[]},sidebar:[],siteData:{components:{},demos:{},entryExports:{},loading:!0,locales:[],pkg:{},setLoading:void 0,themeConfig:{}}},h=(0,d.Ue)()((0,f.mW)(function(){return r},{name:"dumi-theme-lobehub"}))},53530:function(C,s,n){n.d(s,{f:function(){return r}});var d=n(64529),f=n(782),r=(0,d.Ue)()((0,f.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))}}]);
