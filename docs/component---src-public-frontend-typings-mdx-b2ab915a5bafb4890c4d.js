(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{t1R6:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n("Fcif"),r=n("+I+c"),o=(n("mXGw"),n("/FXl")),c=n("TjRS"),l=(n("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/public/frontend/typings.mdx"}});var i={_frontmatter:l},p=c.a;function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(p,Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"declaration-merging"},"Declaration Merging"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html"},"https://www.typescriptlang.org/docs/handbook/declaration-merging.html")),Object(o.b)("h4",{id:"typests"},"types.ts"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"// file blog/src/types.ts\n\ninterface BlogItemShape {}\n\nexport interface AppState {\n  entities: {\n    blog: Record<string, BlogItemShape>;\n  };\n}\n")),Object(o.b)("h4",{id:"moduledts"},"module.d.ts"),Object(o.b)("p",null,"file module.d.ts is auto loaded by typescript"),Object(o.b)("p",null,"Extend global service manager"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"// file blog/src/module.d.ts\nimport '@metafox/core/Manager';\nimport { BlogList } from './types';\n\ndeclare module '@metafox/core/Manager' {\n  interface Manager {\n    BlogList?: React.FC<{}>;\n  }\n}\n")),Object(o.b)("h3",{id:"extends-global-state"},"Extends global state"),Object(o.b)("p",null,"Extend global service manager"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"// file blog/src/module.d.ts\nimport '@metafox/core/Manager';\nimport { AppState } from './types';\n\ndeclare module '@metafox/core/Manager' {\n  interface GlobalState {\n    blog?: AppState;\n  }\n}\n")))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/public/frontend/typings.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-public-frontend-typings-mdx-b2ab915a5bafb4890c4d.js.map