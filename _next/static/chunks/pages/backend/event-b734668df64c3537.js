(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2643],{3238:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/backend/event",function(){return t(5185)}])},5185:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return l}});var s=t(5893),a=t(2673),r=t(5759),o=t(3114);t(7954);var i=t(2643);let l=[{depth:2,value:"Dispatch Event",id:"dispatch-event"},{depth:2,value:"Listeners",id:"listeners"},{depth:2,value:"Response",id:"response"},{depth:2,value:"Bail",id:"bail"}];function c(e){let n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",em:"em",code:"code",h2:"h2",pre:"pre",span:"span",strong:"strong",a:"a"},(0,i.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Event"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Laravel's ",(0,s.jsx)(n.em,{children:"Events"})," provides a simple Observer pattern implementation, allowing you to subscribe and listen to various events that occur within your application. ",(0,s.jsx)(n.em,{children:"Event"})," classes are typically stored in the ",(0,s.jsx)(n.code,{children:"app/Events"})," directory, while their ",(0,s.jsx)(n.em,{children:"Listeners"})," are stored in ",(0,s.jsx)(n.code,{children:"app/Listeners"})," directory. Don't worry if you don't see these directories in your application as they will be created automatically as you generate events and listeners using ",(0,s.jsx)(n.em,{children:"Artisan console"})," commands."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Events serve as a great way to decouple various aspects of your application, since a single event can have multiple listeners that do not depend on each other. For example, you may wish to send a Slack notification to your user each time an order has shipped. Instead of coupling your order processing code to your Slack notification code, you can raise an ",(0,s.jsx)(n.code,{children:"App\\Events\\OrderShipped"})," event which a listener can receive and use to dispatch a Slack notification."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dispatch-event",children:"Dispatch Event"}),"\n",(0,s.jsxs)(n.p,{children:["For example, dispatch an event named ",(0,s.jsx)(n.code,{children:"search.updated"})," and pass ",(0,s.jsx)(n.code,{children:"$model"})," argurment. All ",(0,s.jsx)(n.em,{children:"Listener"})," classes registered with the ",(0,s.jsx)(n.code,{children:"search.updated"})," event will be processed."]}),"\n",(0,s.jsx)(n.pre,{"data-language":"php","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"php","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<?"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"php"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"app"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'events'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"dispatch"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'search.updated'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" [$model]"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "})]})}),"\n",(0,s.jsx)(n.h2,{id:"listeners",children:"Listeners"}),"\n",(0,s.jsxs)(n.p,{children:["Define ",(0,s.jsx)(n.em,{children:"Event Listener"})]}),"\n",(0,s.jsx)(n.pre,{"data-language":"php","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"php","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<?"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"php"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// file packages/metafox/blog/src/Listeners/SearchUpdatedListener.php"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MetaFox"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"\\"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Blog"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"\\"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Listeners"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"SearchUpdatedListener"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"    * Handle event"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"    */"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"public"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"handle"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"($model)"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"   {"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"   }"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "})]})}),"\n",(0,s.jsxs)(n.p,{children:["To improve performance, ",(0,s.jsx)(n.strong,{children:"MetaFox"})," requires manual event listener registration via ",(0,s.jsx)(n.code,{children:"PackageSettingListener"})," class."]}),"\n",(0,s.jsx)(n.pre,{"data-language":"php","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"php","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<?"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"php"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MetaFox"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"\\"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"ToDo"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"\\"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Listeners"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"PackageSettingListener"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"BasePackageSettingListener"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"     * Get array of events"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"     */"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"public"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getEvents"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    {"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'search.updated'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"SearchUpdatedListener"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"::class"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            ]"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        ];"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TBD"})}),"\n",(0,s.jsxs)(n.p,{children:["For futher info, please read ",(0,s.jsx)(n.a,{href:"https://laravel.com/docs/9.x/events#main-content",children:"Laravel Event"})]}),"\n",(0,s.jsx)(n.h2,{id:"bail",children:"Bail"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes, you may need dispatcher to stop running other listeners whenever a listener returns a not-null value."}),"\n",(0,s.jsx)(n.pre,{"data-language":"php","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"php","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<?"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"php"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"$response "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"app"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'events'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"dispatch"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'search.updated'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" [$model]"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" $bail"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "})]})}),"\n",(0,s.jsxs)(n.p,{children:["In the above sample code, with ",(0,s.jsx)(n.code,{children:"$bail=true"})," parameter, at the first time a listener returns not-null value, the dispatcher will stop running remaining registered ",(0,s.jsx)(n.em,{children:"Listener"})," and returns to ",(0,s.jsx)(n.code,{children:"$response"})," value."]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"src/pages/backend/event.mdx",route:"/backend/event",frontMatter:{route:"/backend/event",name:"Event",menu:"Backend"},timestamp:168974249e4,pageMap:[{kind:"Meta",data:{index:"Getting Started",backend:"Backend",frontend:"Frontend",mobile:"Mobile","---1":{type:"separator"},"new-app":"New App","new-theme":{title:"New Theme"},"export-package":{title:"Export Package",display:"hidden"},"new-language":"New Language","---2":{type:"separator"},"rest-api":{title:"RESTful API",href:"https://dev-docs.metafoxapp.com/rest-api",newWindow:!0},postman:{title:"Postman Collection",href:"https://dev-docs.metafoxapp.com/rest-api/collection.json",newWindow:!0},"open-api":{title:"OpenAPI Spec",href:"https://dev-docs.metafoxapp.com/rest-api/openapi.yaml",newWindow:!0},"php-api":{title:"Class References",href:"https://dev-docs.metafoxapp.com/php-api",newWindow:!0},"---3":{type:"separator"},community:{title:"Community",href:"https://community.phpfox.com/forum",newWindow:!0},demo:{title:"Demo Site",href:"https://demo.metafox.app",newWindow:!0},store:{title:"AppStore",href:"https://appstore.phpfox.com",newWindow:!0},user:{href:"https://docs.phpfox.com/",title:"User Manuals",newWindow:!0},client:{href:"https://clients.phpfox.com/",title:"Client Area",newWindow:!0},developer:{href:"https://www.phpfox.com/developers/",title:"Developer Program",newWindow:!0}}},{kind:"Folder",name:"backend",route:"/backend",children:[{kind:"Meta",data:{installation:"Installation",structure:"Directory Structure",commands:"Commands",package:"Package",controller:"Controller",eloquent:"Eloquent",datagrid:"Datagrid",content:"Content",category:"Category",event:"Event","event-list":"Support Events",form:"Form Builder",mailer:"Mailer",routing:"Routing",interfaces:"Interfaces","load-reduce":"Load Reduce",octane:"Octane"}},{kind:"MdxPage",name:"category",route:"/backend/category",frontMatter:{route:"/backend/category",name:"Category",menu:"Backend"}},{kind:"MdxPage",name:"commands",route:"/backend/commands",frontMatter:{route:"/backend/appendix/commands",name:"Commands",menu:"Backend"}},{kind:"MdxPage",name:"content",route:"/backend/content",frontMatter:{route:"/backend/content",name:"Content",menu:"Backend"}},{kind:"MdxPage",name:"controller",route:"/backend/controller",frontMatter:{name:"Controller",menu:"Backend",route:"/backend/controller"}},{kind:"MdxPage",name:"datagrid",route:"/backend/datagrid"},{kind:"MdxPage",name:"eloquent",route:"/backend/eloquent",frontMatter:{name:"Eloquent",menu:"Backend",route:"/backend/eloquent"}},{kind:"MdxPage",name:"event-list",route:"/backend/event-list",frontMatter:{name:"Event List",menu:"Backend"}},{kind:"MdxPage",name:"event",route:"/backend/event",frontMatter:{route:"/backend/event",name:"Event",menu:"Backend"}},{kind:"MdxPage",name:"form",route:"/backend/form",frontMatter:{route:"/backend/form",name:"Forms",menu:"Backend"}},{kind:"MdxPage",name:"installation",route:"/backend/installation",frontMatter:{name:"Installation",route:"/backend/installation",menu:"Backend"}},{kind:"MdxPage",name:"interfaces",route:"/backend/interfaces"},{kind:"MdxPage",name:"load-reduce",route:"/backend/load-reduce"},{kind:"MdxPage",name:"mailer",route:"/backend/mailer",frontMatter:{route:"/backend/mailer",name:"Mailer",menu:"Backend"}},{kind:"MdxPage",name:"octane",route:"/backend/octane"},{kind:"MdxPage",name:"package",route:"/backend/package",frontMatter:{name:"Package",menu:"Backend",route:"/backend/package"}},{kind:"MdxPage",name:"routing",route:"/backend/routing",frontMatter:{name:"Routing",menu:"Backend",route:"/backend/routing"}},{kind:"MdxPage",name:"structure",route:"/backend/structure",frontMatter:{route:"/backend/structure",name:"Structure",menu:"Backend"}}]},{kind:"MdxPage",name:"export-package",route:"/export-package"},{kind:"Folder",name:"frontend",route:"/frontend",children:[{kind:"Meta",data:{concepts:"Concepts",cookie:"Cookie",dialog:"Dialog",form:"Form Builder",gridview:"Grid View",home:"Get Started",layout:"Layouts","local-store":"Local Store",routing:"Routing",sagas:"Sagas",service:"Service",theme:"Theme",typings:"Typings",validation:"Validation","when-lib":"When Lib",translation:"Translation"}},{kind:"MdxPage",name:"concepts",route:"/frontend/concepts"},{kind:"MdxPage",name:"cookie",route:"/frontend/cookie",frontMatter:{route:"/frontend/cookie",name:"Cookie",menu:"Frontend"}},{kind:"MdxPage",name:"dialog",route:"/frontend/dialog"},{kind:"MdxPage",name:"form",route:"/frontend/form"},{kind:"MdxPage",name:"gridview",route:"/frontend/gridview",frontMatter:{menu:"Frontend",route:"/frontend/gridview"}},{kind:"MdxPage",name:"home",route:"/frontend/home"},{kind:"MdxPage",name:"layout",route:"/frontend/layout"},{kind:"MdxPage",name:"local-store",route:"/frontend/local-store",frontMatter:{route:"/frontend/local-store",name:"Local Storage",menu:"Frontend"}},{kind:"MdxPage",name:"routing",route:"/frontend/routing",frontMatter:{route:"/frontend/router",name:"Router",menu:"Frontend"}},{kind:"MdxPage",name:"sagas",route:"/frontend/sagas",frontMatter:{route:"/frontend/sagas",name:"sagas",menu:"Frontend"}},{kind:"MdxPage",name:"service",route:"/frontend/service",frontMatter:{route:"/frontend/service",name:"service",menu:"Frontend"}},{kind:"MdxPage",name:"theme",route:"/frontend/theme",frontMatter:{route:"/frontend/theme",name:"Theme",menu:"Frontend"}},{kind:"MdxPage",name:"translation",route:"/frontend/translation",frontMatter:{route:"/frontend/translation",name:"service",menu:"Frontend"}},{kind:"MdxPage",name:"typings",route:"/frontend/typings",frontMatter:{name:"Typescript",menu:"Frontend"}},{kind:"MdxPage",name:"validation",route:"/frontend/validation",frontMatter:{menu:"Frontend",route:"/frontend/validation",name:"Validation"}},{kind:"MdxPage",name:"when-lib",route:"/frontend/when-lib",frontMatter:{menu:"Frontend",route:"/frontend/when",name:"Validation"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"mobile",route:"/mobile",children:[{kind:"Meta",data:{flatlist:"FlatList View",layout:"Layouts",reducers:"Reducers",sagas:"Sagas",service:"Services",translation:"Translation",router:"Router",translations:"Translations"}},{kind:"MdxPage",name:"flatlist",route:"/mobile/flatlist",frontMatter:{route:"/mobile/flatlist",hidden:!0}},{kind:"MdxPage",name:"layout",route:"/mobile/layout",frontMatter:{route:"/mobile/layout",hidden:!0}},{kind:"MdxPage",name:"reducers",route:"/mobile/reducers",frontMatter:{route:"/mobile/reducers",hidden:!0}},{kind:"MdxPage",name:"router",route:"/mobile/router",frontMatter:{hidden:!0,route:"/mobile/router"}},{kind:"MdxPage",name:"sagas",route:"/mobile/sagas",frontMatter:{hidden:!0,route:"/mobile/sagas"}},{kind:"MdxPage",name:"service",route:"/mobile/service",frontMatter:{hidden:!0,route:"/mobile/services"}},{kind:"MdxPage",name:"translations",route:"/mobile/translations",frontMatter:{hidden:!0,route:"/mobile/translations"}}]},{kind:"MdxPage",name:"new-app",route:"/new-app"},{kind:"MdxPage",name:"new-language",route:"/new-language",frontMatter:{route:"/language",name:"Language"}},{kind:"MdxPage",name:"new-theme",route:"/new-theme"}],flexsearch:{codeblocks:!0},title:"Event",headings:l},pageNextRoute:"/backend/event",nextraLayout:r.ZP,themeConfig:o.Z};n.default=(0,a.j)(d)},3114:function(e,n,t){"use strict";var s=t(5893),a=t(7294),r=t(1785),o=t.n(r);let i={logo:(0,s.jsx)("img",{src:"/logo.png",alt:"document",height:"32px",width:112}),logoLink:"/",chat:{},docsRepositoryBase:"https://github.com/metafoxapp/metafox-dev-docs/blob/develop",project:{link:"https://github.com/metafoxapp/metafox-dev-docs"},sidebar:{defaultMenuCollapseLevel:1},useNextSeoProps:()=>({titleTemplate:"%s - MetaFox"}),head:()=>(a.useEffect(()=>{o().initialize({gtmId:"GTM-WB52HRS"})},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{property:"og:title",content:"MetaFox"}),(0,s.jsx)("meta",{property:"og:description",content:"MetaFox Developer Documentation"})]})),footer:{text:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("noscript",{children:(0,s.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-WB52HRS",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),(0,s.jsxs)("span",{children:["Copyright \xa9 2023 \xa0",(0,s.jsx)("a",{href:"https://phpfox.com",target:"_blank",children:"phpFox LLC"}),". All rights reserved."]})]})}};n.Z=i}},function(e){e.O(0,[9774,831,2888,179],function(){return e(e.s=3238)}),_N_E=e.O()}]);