!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"novojs-kit","b":"webpack","f":[["dumi__theme__layouts__DocLayout__index.eec80432.chunk.css",367],["dumi__theme__layouts__DocLayout__index.43605a58.async.js",367],["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",1009],["nm__dumi__dist__client__pages__Demo__index.3b27a53b.async.js",1009],["dumi__theme__layouts__DemoLayout__index.54bbf303.async.js",1406],["dumi__tmp-production__dumi__theme__ContextWrapper.23111bb9.async.js",1923],["docs__guide.md.aae9f1f8.chunk.css",2937],["docs__guide.md.0d8890ea.async.js",2937],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",3065],["nm__dumi__dist__client__pages__404.19a31c12.async.js",3065],["5297.a51651a1.async.js",5297],["5519.6cb72f49.async.js",5519],["docs__index.md.aae9f1f8.chunk.css",6935],["docs__index.md.44b772a7.async.js",6935],["8336.019ee415.async.js",8336],["docs__cli__guid.md.aae9f1f8.chunk.css",8717],["docs__cli__guid.md.f8be6ab0.async.js",8717],["docs__blog.md.aae9f1f8.chunk.css",9032],["docs__blog.md.ba4c4d59.async.js",9032]],"r":{"/*":[8,9,0,1,10,14,5],"/":[11,12,13,0,1,10,14,5],"/guide":[6,7,11,0,1,10,14,5],"/blog":[11,17,18,0,1,10,14,5],"/~demos/:id":[2,3,4,10,5],"/cli/guid":[11,15,16,0,1,10,14,5]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();