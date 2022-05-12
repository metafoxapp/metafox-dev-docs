(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{bDXj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return s}));var n=a("Fcif"),o=a("+I+c"),i=(a("mXGw"),a("/FXl")),l=a("TjRS"),r=(a("aD51"),{});void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/public/frontend/router.mdx"}});var p={_frontmatter:r},b=l.a;function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(b,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"router"},"Router"),Object(i.b)("p",null,"Table of Contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dynamic/Async Routing"),Object(i.b)("li",{parentName:"ul"},"Router and Code Splitting"),Object(i.b)("li",{parentName:"ul"},"Router and Transition"),Object(i.b)("li",{parentName:"ul"},"Router and Loading progress"),Object(i.b)("li",{parentName:"ul"},"Router and Modal")),Object(i.b)("p",null,"Let's take a look at phpfox's url structure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/"),": Display ",Object(i.b)("inlineCode",{parentName:"li"},"home")," page or ",Object(i.b)("inlineCode",{parentName:"li"},"user.home")," page depend on user authentication state."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/blog"),": Display ",Object(i.b)("inlineCode",{parentName:"li"},"user.browse")," page."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/blog/my"),": Display ",Object(i.b)("inlineCode",{parentName:"li"},"user.browse.my")," page."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/user"),": Display ",Object(i.b)("inlineCode",{parentName:"li"},"user.browse")," page."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/user/profile/1"),": Display profile of user"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/pages/profile/14"),": Display profile of pages"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/groups/profile/12"),": Display profile of groups"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/jack"),": Display ",Object(i.b)("inlineCode",{parentName:"li"},"user.profile")," page, alias of ",Object(i.b)("inlineCode",{parentName:"li"},"/user/profile/1")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/jack/photo"),": Display ",Object(i.b)("inlineCode",{parentName:"li"},"user.profile.photo")," page, alias of ",Object(i.b)("inlineCode",{parentName:"li"},"/user/profile/1/photo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/barca"),": Display ",Object(i.b)("inlineCode",{parentName:"li"},"pages.profile")," as alias of ",Object(i.b)("inlineCode",{parentName:"li"},"/pages/profile/14")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/barca/groups"),": Display ",Object(i.b)("inlineCode",{parentName:"li"},"pages.profile.groups")," as alias of ",Object(i.b)("inlineCode",{parentName:"li"},"/pages/profile/14/photo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/nancy-club"),": Display private ",Object(i.b)("inlineCode",{parentName:"li"},"groups.profile")," as alias of ",Object(i.b)("inlineCode",{parentName:"li"},"/group/profile/12"))),Object(i.b)("p",null,"Using react-router-dom and React.lazy we can structure react component:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'<Router>\n  <Switch>\n    <Route path="/" component={HomePage} />\n    <Route path="/blog" component={BlogPage} />\n    <Route path="/blog/my" component={MyBlogPage} />\n    <Route path="/user/profile/:userId" component={UserProfilePage} />\n    <Route\n      path="/user/profile/:userId/photo"\n      component={UserProfilePhotoPage}\n    />\n    <Route path="/pages/profile/:pageId" component={PageProfilePage} />\n    <Route\n      path="/pages/profile/:pageId/photo"\n      component={PageProfilePhotoPage}\n    />\n    <Route path="/groups/profile/:groupId" component={GroupProfilePage} />\n    ... Others Routes\n    <NoMatchRoute />\n  </Switch>\n</Router>\n')),Object(i.b)("p",null,"As you see ",Object(i.b)("inlineCode",{parentName:"p"},"/"),", ",Object(i.b)("inlineCode",{parentName:"p"},"blog"),",",Object(i.b)("inlineCode",{parentName:"p"},"blog/my")," is static regex url, its solve by regex or literal string."),Object(i.b)("p",null,"While ",Object(i.b)("inlineCode",{parentName:"p"},"/jack"),", ",Object(i.b)("inlineCode",{parentName:"p"},"jack/photo"),", ",Object(i.b)("inlineCode",{parentName:"p"},"/barca"),", ",Object(i.b)("inlineCode",{parentName:"p"},"/barca/groups")," is difficult, we have to query database to know\nterms of ",Object(i.b)("inlineCode",{parentName:"p"},"jack"),", ",Object(i.b)("inlineCode",{parentName:"p"},"barca")," is a username or pages slug."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Challenges")),Object(i.b)("p",null,"We must send an async request to APIS server, get a result after 1-5 seconds depend on network speed and server capability. etc we get result\n",Object(i.b)("inlineCode",{parentName:"p"},"/jack/photo")," should be ",Object(i.b)("inlineCode",{parentName:"p"},"/profile/user/1/photo"),". We hate to update current browser address to ",Object(i.b)("inlineCode",{parentName:"p"},"user/profile/1/photo"),", so we must replace current its state and keep origin path."),Object(i.b)("p",null,"During of waiting to solve ",Object(i.b)("inlineCode",{parentName:"p"},"/jack/photo")," what should be displaying to end users, ",Object(i.b)("inlineCode",{parentName:"p"},"NoMatchRoute")," it depend on result of ",Object(i.b)("inlineCode",{parentName:"p"},"NoMatchRoute")," component, simple solution is display a loading screen. Try to implement solution, when waiting time is 3-5 seconds, it looks good but flash screen if network is faster. Look at instagram and youtube, they have another better solution, browser keeps old screens during loading next, Try with react-router but implement is very difficult. ",Object(i.b)("inlineCode",{parentName:"p"},"react-navi")," supports this feature but we don't like their syntax, it's not popular too.\nOther popular router lib such as ",Object(i.b)("inlineCode",{parentName:"p"},"@reach/router")," does not help to solve our requirement, so we decide to folk ",Object(i.b)("inlineCode",{parentName:"p"},"reac-router-dom")," and do our customization."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"}," 1. Router got /jack/photo pathname\n 2. Try other router path but no matched,\n 3. Keep previous matched Route, showing loading progress bar/empty/loading screen.\n 4. Async request to get canonical pathname of /jack/photo\n 5. If got /user/profile/1/photo => replace current location state, keep location pathname.\n 6. Router try re-run and UI update.\n")),Object(i.b)("p",null,"NOTE:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Application is configurable using Loading progress bar or Empty waiting screen?"),Object(i.b)("li",{parentName:"ul"},"Should use nested route in user/pages/event profile page. TBD.")),Object(i.b)("p",null,"Caveat:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Do not trust browse location."),Object(i.b)("li",{parentName:"ul"},"When develop UI, we use \\$PageContext to ask the context to query content instead of location.")),Object(i.b)("h2",{id:"code-splitting"},"Code Splitting"),Object(i.b)("p",null,"Because of app sizing, we have to split code of every Page components. ",Object(i.b)("a",{parentName:"p",href:"/technical/code-splitting"},"read more")),Object(i.b)("p",null,"At the first time visit ",Object(i.b)("inlineCode",{parentName:"p"},"/user"),", the associate chunk file is not ready, if network around 1 seconds, end users can see a flash animate."),Object(i.b)("h2",{id:"router-and-transition"},"Router and Transition"),Object(i.b)("p",null,"TBD"),Object(i.b)("h2",{id:"modal-route"},"Modal Route"),Object(i.b)("p",null,"Visit ",Object(i.b)("a",{parentName:"p",href:"https://www.instagram.com/leomessi/"},"https://www.instagram.com/leomessi/"),", click on photo item, it shows a modal photo viewer.\nrefresh browser, it shows another screens."),Object(i.b)("p",null,"It helps to improving user experience, Facebook uses the same solutions for photo viewer."),Object(i.b)("p",null,"Our routing support to check any pathname prefix by ",Object(i.b)("inlineCode",{parentName:"p"},"/m/")," to be display modal overlay on last UI. and display original /ui/."),Object(i.b)("p",null,"Then separate modals and pages to 2 Switch, we solve related issues."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Cons")),Object(i.b)("p",null,"Developer have to create two routes, 01 is ModalRoute, and the seconds is Page Route. Declare theme all in 'routes.ts', with the same path but add property \"modal\"."),Object(i.b)("p",null,"How to disable modal dialog on mobile device?"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pros")),Object(i.b)("p",null,"Re-use user experience."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"{\n  sampleModalDialog: {\n    modal: true,\n    path: '/m/example/simple-modal',\n    component: loadable(() => import('./pages/ExampleModal')),\n  },\n  sampleModalPage: {\n    path: '/m/example/simple-modal',\n    component: loadable(() => import('./pages/ExampleModalPage')),\n  },\n}\n")))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/public/frontend/router.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-public-frontend-router-mdx-de176e1071fc1f0fef7c.js.map