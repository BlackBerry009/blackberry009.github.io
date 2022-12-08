"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"node18",title:"Node18\u66f4\u65b0\u4e86\u4ec0\u4e48",authors:["BlackBerry"],tags:["node"]},l=void 0,s={permalink:"/blog/node18",source:"@site/blog/2022-12-08-node18/index.md",title:"Node18\u66f4\u65b0\u4e86\u4ec0\u4e48",description:"Node 18 \u5df2\u7ecf\u6210\u4e3a\u4e86 LTS \u7248\u672c\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u90fd\u66f4\u65b0\u4e86\u4ec0\u4e48",date:"2022-12-08T00:00:00.000Z",formattedDate:"December 8, 2022",tags:[{label:"node",permalink:"/blog/tags/node"}],readingTime:1.995,hasTruncateMarker:!1,authors:[{name:"BlackBerry",title:"front-end developer",url:"https://github.com/blackberry009",imageURL:"https://github.com/blackberry009.png",key:"BlackBerry"}],frontMatter:{slug:"node18",title:"Node18\u66f4\u65b0\u4e86\u4ec0\u4e48",authors:["BlackBerry"],tags:["node"]}},i={authorsImageUrls:[void 0]},p=[{value:"1.\u5185\u7f6e\u4e86Fetch Api",id:"1\u5185\u7f6e\u4e86fetch-api",level:2},{value:"2.\u5185\u7f6e\u4e86 test \u6a21\u5757",id:"2\u5185\u7f6e\u4e86-test-\u6a21\u5757",level:2},{value:"3.\u652f\u6301 Web Streams API",id:"3\u652f\u6301-web-streams-api",level:2},{value:"4.hmr",id:"4hmr",level:2},{value:"5.\u652f\u6301 import JSON",id:"5\u652f\u6301-import-json",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Node 18 \u5df2\u7ecf\u6210\u4e3a\u4e86 LTS \u7248\u672c\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u90fd\u66f4\u65b0\u4e86\u4ec0\u4e48"),(0,a.kt)("h2",{id:"1\u5185\u7f6e\u4e86fetch-api"},"1.\u5185\u7f6e\u4e86Fetch Api"),(0,a.kt)("p",null,"\u5728 Node 18 \u7248\u672c\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"node-fetch"),"  \u6216\u8005  ",(0,a.kt)("inlineCode",{parentName:"p"},"axios"),"  \u53bb\u53d1\u8d77\u8bf7\u6c42\uff0c\u5728 Node 18\u4e2d\uff0c\u5c31\u4e0d\u5728\u9700\u8981\u5b89\u88c5\u8fd9\u4e9b\u4e86\u3002"),(0,a.kt)("p",null,"\u770b\u4e0b\u5728 Node18 \u4e2d\u5982\u4f55\u53d1\u8d77\u8bf7\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"fetch('https://jsonplaceholder.typicode.com/todos/1')\n  .then(response => response.json())\n  .then(json => console.log(json))\n")),(0,a.kt)("p",null,"\u5199\u5b8c\u4e4b\u540e\u6211\u4eec\u8fd0\u884c\u4e00\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u279c node index.js \n\n(node:30887) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time\n(Use `node --trace-warnings ...` to show where the warning was created)\n{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }\n")),(0,a.kt)("h2",{id:"2\u5185\u7f6e\u4e86-test-\u6a21\u5757"},"2.\u5185\u7f6e\u4e86 test \u6a21\u5757"),(0,a.kt)("p",null,"\u4e4b\u524d\u6211\u4eec\u8981\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u7684\u65f6\u5019\uff0c\u9700\u8981\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Jest"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Mocha"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Chai")," \u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ea\u9700\u8981\u5bfc\u5165\u81ea\u5e26\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," \u6a21\u5757\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u770b\u770b\u8be5\u5982\u4f55\u4f7f\u7528\u4ed6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.mjs"',title:'"index.mjs"'},"export const sum = (a,b) => a+b;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="test.mjs"',title:'"test.mjs"'},"import test from \"node:test\";\nimport assert from 'node:assert/strict'\nimport { sum } from \"./index.mjs\";\n\ntest('sum', async t => {\n    await t.test('true', () => {\n        assert.equal(sum(2,8), 10)\n    })\n    await t.test('false', () => {\n        assert.notEqual(sum(2,5), 8)\n    })\n})\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u4e0b\u770b\u4e0b\u7ed3\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u279c node test.mjs\n\nTAP version 13\n# Subtest: sum\n    # Subtest: true\n    ok 1 - true\n      ---\n      duration_ms: 0.621862\n      ...\n    # Subtest: false\n    ok 2 - false\n      ---\n      duration_ms: 0.135985\n      ...\n    1..2\nok 1 - sum\n  ---\n  duration_ms: 3.034993\n  ...\n1..1\n# tests 1\n# pass 1\n# fail 0\n# cancelled 0\n# skipped 0\n# todo 0\n# duration_ms 7.669003\n")),(0,a.kt)("h2",{id:"3\u652f\u6301-web-streams-api"},"3.\u652f\u6301 Web Streams API"),(0,a.kt)("p",null,"\u5177\u4f53\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API"},"MDN")),(0,a.kt)("h2",{id:"4hmr"},"4.hmr"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u4e0d\u518d\u9700\u8981\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"nodemon")," \u63d2\u4ef6\u6765\u76d1\u542c\u6587\u4ef6\u53d8\u5316 hmr \u4e86\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--watch")," \u6765\u76d1\u542c\u6587\u4ef6\u53d8\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"node --watch index.js\n")),(0,a.kt)("h2",{id:"5\u652f\u6301-import-json"},"5.\u652f\u6301 import JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import json from './package.json' assert {type: 'json'}\nconsole.log(json)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8be5\u5b9e\u9a8c\u6027\u529f\u80fd\u53ef\u80fd\u4f1a\u968f\u65f6\u79fb\u9664")),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://nodesource.com/blog/11-features-nodeJS-18-to-try"},"https://nodesource.com/blog/11-features-nodeJS-18-to-try"))))}u.isMDXComponent=!0}}]);