(function(e){function r(r){for(var a,o,i=r[0],l=r[1],c=r[2],u=0,v=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&v.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(r);while(v.length)v.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,r=0;r<n.length;r++){for(var t=n[r],a=!0,i=1;i<t.length;i++){var l=t[i];0!==s[l]&&(a=!1)}a&&(n.splice(r--,1),e=o(o.s=t[0]))}return e}var a={},s={app:0},n=[];function o(r){if(a[r])return a[r].exports;var t=a[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)o.d(t,a,function(r){return e[r]}.bind(null,a));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=r,i=i.slice();for(var c=0;c<i.length;c++)r(i[c]);var d=l;n.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"034f":function(e,r,t){"use strict";var a=t("85ec"),s=t.n(a);s.a},2305:function(e,r,t){},"25a5":function(e,r,t){},3659:function(e,r,t){"use strict";var a=function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"main"},[t("iframe",{staticStyle:{background:"rgb(236, 240, 234)","border-radius":"10px"},attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSfDiGR7aKSZGCvf6BMZfBgSIyIOWxZaVRm2qi57adRJerXruA/viewform?embedded=true",width:"640",height:"969",frameborder:"0",marginheight:"0",marginwidth:"0"}},[e._v("Загрузка…")])])}],n={},o=n,i=(t("f9d4"),t("2877")),l=Object(i["a"])(o,a,s,!1,null,"0ed264fe",null);r["a"]=l.exports},5185:function(e,r,t){},"551d":function(e,r,t){e.exports=t.p+"img/powerhost.fbd742a9.svg"},"56d7":function(e,r,t){"use strict";t.r(r);var a=t("2b0e"),s=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"nav"},[a("div",{staticClass:"logos"},[a("div",{staticClass:"home"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:t("622a")}})])],1)]),a("div",{class:{menu:!0,active:e.isMenuActive},attrs:{id:"menu"}},[a("router-link",{attrs:{to:"/"},nativeOn:{click:function(r){return e.closeMenuButton(r)}}},[e._v("home")]),a("router-link",{attrs:{to:"/downloads"},nativeOn:{click:function(r){return e.closeMenuButton(r)}}},[e._v("downloads")]),a("a",{attrs:{href:"https://discord.gg/q3zUUEC"}},[e._v("discord")]),a("a",{attrs:{href:"https://wiki.altv.mp/"}},[e._v("wiki")]),a("a",{attrs:{href:"https://hub.altv.mp/"}},[e._v("resources")]),a("button",{attrs:{id:"closebutton"},on:{click:e.closeMenuButton}},[e._v("×")])],1),e._m(0),a("div",{staticClass:"burger",attrs:{id:"openbutton"},on:{click:e.openMenuButton}},[a("span"),a("span"),a("span")])]),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},n=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"social"},[t("a",{attrs:{target:"_blank",href:"https://discord.gg/q3zUUEC"}},[t("i",{staticClass:"fab fa-discord"})]),t("a",{attrs:{target:"_blank",href:"https://twitter.com/altVMP"}},[t("i",{staticClass:"fab fa-twitter"})]),t("a",{attrs:{target:"_blank",href:"https://github.com/altmp"}},[t("i",{staticClass:"fab fa-github"})]),t("a",{attrs:{target:"_blank",href:"https://instagram.com/altvmp/"}},[t("i",{staticClass:"fab fa-instagram"})]),t("a",{attrs:{target:"_blank",href:"https://vk.com/altvmp"}},[t("i",{staticClass:"fab fa-vk"})]),t("a",{attrs:{target:"_blank",href:"https://www.youtube.com/c/altVMP"}},[t("i",{staticClass:"fab fa-youtube"})]),t("a",{attrs:{target:"_blank",href:"https://facebook.com/altvmp/"}},[t("i",{staticClass:"fab fa-facebook"})]),t("a",{attrs:{target:"_blank",href:"https://www.patreon.com/altVMP"}},[t("i",{staticClass:"fab fa-patreon"})])])}],o={data(){return{isMenuActive:!1}},methods:{openMenuButton(){this.isMenuActive=!0},closeMenuButton(){this.isMenuActive=!1}}},i=o,l=(t("034f"),t("2877")),c=Object(l["a"])(i,s,n,!1,null,null,null),d=c.exports,u=t("9483");Object(u["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var v=t("a18c");a["a"].config.devtools=!1,a["a"].config.productionTip=!1,new a["a"]({router:v["a"],render:function(e){return e(d)}}).$mount("#app")},"622a":function(e,r,t){e.exports=t.p+"img/v_logo.b048d1c4.svg"},"768f":function(e,r,t){},"85ec":function(e,r,t){},"93c4":function(e,r,t){"use strict";var a=t("768f"),s=t.n(a);s.a},a049:function(e,r,t){"use strict";var a=function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"main"},[t("iframe",{staticStyle:{background:"rgb(236, 240, 234)","border-radius":"10px"},attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSfT-J-H76N52drXqinpE6LIVNd2qaHBuAWiYsC1b4sUjW_jTA/viewform?embedded=true",width:"640",height:"969",frameborder:"0",marginheight:"0",marginwidth:"0"}},[e._v("Loading…")])])}],n={},o=n,i=(t("a755"),t("2877")),l=Object(i["a"])(o,a,s,!1,null,"48270d00",null);r["a"]=l.exports},a18c:function(e,r,t){"use strict";(function(e){var a=t("2b0e"),s=t("8c4f"),n=t("c3b0"),o=t("fb7b"),i=t("a049"),l=t("3659"),c=t("cecd"),d=t("dd8d");a["a"].use(s["a"]);const u=[{path:"/",alias:"/index.html",component:n["a"],name:"Home",props:{bodyClass:"home"}},{path:"/downloads/",component:o["a"],name:"Downloads",props:{bodyClass:"downloads"}},{path:"/report-violation/",component:i["a"],name:"Report ToS violation",props:{bodyClass:"report-tos"}},{path:"/hosting-application/",component:l["a"],name:"Apply for hosting verification",props:{bodyClass:"hosting-application"}},{path:"/providers/",component:c["a"],name:"Verified Hosting Providers",props:{bodyClass:"providers"}},{path:"/branding/",component:d["a"],name:"Branding Guidelines",props:{bodyClass:"providers"}}],v=new s["a"]({base:e,linkExactActiveClass:"active",base:"/",routes:u});r["a"]=v}).call(this,"/")},a5a6:function(e,r,t){"use strict";var a=t("d594"),s=t.n(a);s.a},a755:function(e,r,t){"use strict";var a=t("25a5"),s=t.n(a);s.a},c3b0:function(e,r,t){"use strict";var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"main"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"text"},[t("h1",[e._v("alt:V Multiplayer")]),e._m(0),t("a",{staticClass:"stats",attrs:{href:"https://altstats.net/",target:"_blank"}},[t("span",{staticClass:"players"},[e._v(" Players online: "),t("i",[e._v(e._s(e.playerCount))])]),t("span",{staticClass:"servers"},[e._v(" Servers online: "),t("i",[e._v(e._s(e.serverCount))])])]),t("div",{staticClass:"sep"}),t("router-link",{staticClass:"btn",attrs:{to:"/downloads"}},[e._v("download client")]),e._m(1)],1),e._m(2)]),e._m(3),e._m(4)])},s=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v(" A free alternative multiplayer client for GTA:V. "),t("br"),e._v("Our client provides perfect synchronization on custom dedicated servers. "),t("br"),e._v("Play with your friends and make your own gamemodes with JS, C# and much more. ")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("span",{staticClass:"launch"},[e._v(" Before starting, unpack "),t("i",[e._v("altv.exe")]),e._v(" to an empty folder. "),t("br"),e._v("Run as administrator. ")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"vid"},[t("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/tcNfEzQamfs",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"copyright"},[t("p",[e._v(" Grand Theft Auto and Grand Theft Auto: V are registered trademarks of Take-Two Interactive Software. "),t("br"),e._v("Any trademarks used belong to their respective owners. alt:V Multiplayer and altMP Project are not affiliated with or endorsed by Take-Two Interactive Software. "),t("br"),e._v("alt:V Multiplayer and altMP Project do not host any user-made servers and is not responsible for user-made content. All user-made content are the property of their respective owners. "),t("br")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"socialMobile"},[t("a",{attrs:{target:"_blank",href:"https://discord.gg/q3zUUEC"}},[t("i",{staticClass:"fab fa-discord"})]),t("a",{attrs:{target:"_blank",href:"https://twitter.com/altVMP"}},[t("i",{staticClass:"fab fa-twitter"})]),t("a",{attrs:{target:"_blank",href:"https://github.com/altmp"}},[t("i",{staticClass:"fab fa-github"})]),t("a",{attrs:{target:"_blank",href:"https://instagram.com/altvmp/"}},[t("i",{staticClass:"fab fa-instagram"})]),t("a",{attrs:{target:"_blank",href:"https://vk.com/altvmp"}},[t("i",{staticClass:"fab fa-vk"})]),t("a",{attrs:{target:"_blank",href:"https://www.youtube.com/c/altVMP"}},[t("i",{staticClass:"fab fa-youtube"})]),t("a",{attrs:{target:"_blank",href:"https://facebook.com/altvmp/"}},[t("i",{staticClass:"fab fa-facebook"})]),t("a",{attrs:{target:"_blank",href:"https://www.patreon.com/altVMP"}},[t("i",{staticClass:"fab fa-patreon"})])])}];async function n(e){const r=new Headers;r.append("Content-Type","application/x-www-form-urlencoded");const t={method:"GET",headers:r},a=await new Promise(r=>{fetch(e,t).then(e=>{r(e.text())}).then(e=>{e&&console.log(e)}).catch(e=>{e&&(console.log(e),r(null))})});return JSON.parse(a)}var o={data(){return{playerCount:0,serverCount:0}},beforeCreate(){document.body.className="home"},methods:{async fetchPlayers(){const e=await n("https://api.altv.mp/servers/");e&&(this.playerCount=e.playersCount,this.serverCount=e.serversCount)}},mounted(){this.fetchPlayers()}},i=o,l=(t("c841"),t("2877")),c=Object(l["a"])(i,a,s,!1,null,"6d73d67d",null);r["a"]=c.exports},c841:function(e,r,t){"use strict";var a=t("2305"),s=t.n(a);s.a},cecd:function(e,r,t){"use strict";var a=function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"main"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"title"},[a("h1",[e._v("Server hosting providers")]),a("p",[e._v(" Want to host alt:V Server at a professional provider? "),a("br"),e._v(" This page provides a list of verified ones. ")])]),a("div",{staticClass:"container"},[a("a",{staticClass:"item",attrs:{href:"https://www.power-host.org/"}},[a("img",{attrs:{src:t("551d"),alt:""}})])])])])}],n={beforeCreate(){document.body.className="providers"}},o=n,i=(t("a5a6"),t("2877")),l=Object(i["a"])(o,a,s,!1,null,"473566ad",null);r["a"]=l.exports},d594:function(e,r,t){},dd8d:function(e,r,t){"use strict";var a=function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"main"},[a("div",{staticClass:"intro"},[a("img",{attrs:{src:t("622a"),alt:""}}),a("h1",[e._v(" alt:V Multiplayer "),a("br"),e._v(" "),a("span",[e._v("Branding")])])]),a("div",{staticClass:"item fonts"},[a("span",{staticClass:"title"},[e._v(" Fonts "),a("span")]),a("div",{staticClass:"head"},[a("h2",[a("a",{attrs:{href:"https://rsms.me/inter/",target:"_blank"}},[e._v("Inter")])]),a("span",[e._v("by Rasmus Andersson")])]),a("div",{staticClass:"samples"},[a("span",{staticClass:"regular"},[e._v(" Regular ")]),a("span",{staticClass:"medium"},[e._v(" Medium ")]),a("span",{staticClass:"bold"},[e._v(" Bold ")]),a("span",{staticClass:"extrabold"},[e._v(" ExtraBold ")])])]),a("div",{staticClass:"item colors"},[a("span",{staticClass:"title"},[e._v(" Colors "),a("span")]),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"color green"},[e._v(" #008736 ")]),a("div",{staticClass:"color white"},[e._v(" #F1F2F2 ")]),a("div",{staticClass:"color dark"},[e._v(" #2D2D2D ")]),a("div",{staticClass:"color black"},[e._v(" #1F1F1F ")])])]),a("div",{staticClass:"item logos"},[a("span",{staticClass:"title"},[e._v(" Logo "),a("span")]),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"logo"},[a("div",{staticClass:"preview"},[a("img",{attrs:{src:"/branding/svg/logo.svg",alt:""}})]),a("div",{staticClass:"info"},[e._v(" Green "),a("div",{staticClass:"links"},[a("a",{attrs:{href:"/branding/svg/logo.svg"}},[e._v("SVG")]),a("a",{attrs:{href:"/branding/png/logo.png"}},[e._v("PNG")])])])]),a("div",{staticClass:"logo"},[a("div",{staticClass:"preview"},[a("img",{attrs:{src:"/branding/svg/logo_black.svg",alt:""}})]),a("div",{staticClass:"info"},[e._v(" Dark "),a("div",{staticClass:"links"},[a("a",{attrs:{href:"/branding/svg/logo_black.svg"}},[e._v("SVG")]),a("a",{attrs:{href:"/branding/png/logo_black.png"}},[e._v("PNG")])])])])])]),a("div",{staticClass:"item naming"},[a("span",{staticClass:"title"},[e._v(" Naming "),a("span")]),a("div",{staticClass:"name correct"},[a("div",{staticClass:"rate"},[a("i",{staticClass:"fas fa-check-circle fa-fw"}),e._v(" Correct: ")]),a("span",[e._v("alt:V Multiplayer, in short alt:V by the altMP Team")])]),a("div",{staticClass:"name incorrect"},[a("div",{staticClass:"rate"},[a("i",{staticClass:"fas fa-times-circle fa-fw"}),e._v(" Incorrect: ")]),a("span",[e._v("AltV, altV, ALTV or altV:MP")])])])])}],n={beforeCreate(){document.body.className="branding"}},o=n,i=(t("93c4"),t("2877")),l=Object(i["a"])(o,a,s,!1,null,"d03b7480",null);r["a"]=l.exports},deef:function(e,r,t){},e56c:function(e,r,t){"use strict";var a=t("5185"),s=t.n(a);s.a},f9d4:function(e,r,t){"use strict";var a=t("deef"),s=t.n(a);s.a},fb7b:function(e,r,t){"use strict";var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"main"},[t("div",{staticClass:"wrapper"},[e._m(0),t("div",{staticClass:"container"},[e._m(1),t("div",{staticClass:"dl server"},[t("h2",[e._v("Server")]),t("div",{staticClass:"options"},[t("div",{staticClass:"os"},[t("label",[e._v(" Windows "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.serverGeneratorForm.isLinux,expression:"serverGeneratorForm.isLinux"}],attrs:{type:"checkbox",name:"os"},domProps:{checked:Array.isArray(e.serverGeneratorForm.isLinux)?e._i(e.serverGeneratorForm.isLinux,null)>-1:e.serverGeneratorForm.isLinux},on:{change:[function(r){var t=e.serverGeneratorForm.isLinux,a=r.target,s=!!a.checked;if(Array.isArray(t)){var n=null,o=e._i(t,n);a.checked?o<0&&e.$set(e.serverGeneratorForm,"isLinux",t.concat([n])):o>-1&&e.$set(e.serverGeneratorForm,"isLinux",t.slice(0,o).concat(t.slice(o+1)))}else e.$set(e.serverGeneratorForm,"isLinux",s)},e.updateServerVersion]}}),t("div",{staticClass:"switch"}),e._v(" Linux ")])]),t("div",{staticClass:"branch"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.serverGeneratorForm.branch,expression:"serverGeneratorForm.branch"}],attrs:{name:"branch"},on:{change:[function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.serverGeneratorForm,"branch",r.target.multiple?t:t[0])},e.updateServerVersion]}},[t("option",{attrs:{value:"release",selected:""}},[e._v("Release")]),t("option",{attrs:{value:"rc"}},[e._v("Release candidate")]),t("option",{attrs:{value:"dev"}},[e._v("Development")])])]),t("div",{staticClass:"addons"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.serverGeneratorForm.includeDataFiles,expression:"serverGeneratorForm.includeDataFiles"}],attrs:{type:"checkbox",name:""},domProps:{checked:Array.isArray(e.serverGeneratorForm.includeDataFiles)?e._i(e.serverGeneratorForm.includeDataFiles,null)>-1:e.serverGeneratorForm.includeDataFiles},on:{change:function(r){var t=e.serverGeneratorForm.includeDataFiles,a=r.target,s=!!a.checked;if(Array.isArray(t)){var n=null,o=e._i(t,n);a.checked?o<0&&e.$set(e.serverGeneratorForm,"includeDataFiles",t.concat([n])):o>-1&&e.$set(e.serverGeneratorForm,"includeDataFiles",t.slice(0,o).concat(t.slice(o+1)))}else e.$set(e.serverGeneratorForm,"includeDataFiles",s)}}}),t("div",{staticClass:"check"}),e._v(" Data files ")]),"release"==e.serverGeneratorForm.branch?t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.serverGeneratorForm.includeNodeJS,expression:"serverGeneratorForm.includeNodeJS"}],attrs:{type:"checkbox",name:""},domProps:{checked:Array.isArray(e.serverGeneratorForm.includeNodeJS)?e._i(e.serverGeneratorForm.includeNodeJS,null)>-1:e.serverGeneratorForm.includeNodeJS},on:{change:function(r){var t=e.serverGeneratorForm.includeNodeJS,a=r.target,s=!!a.checked;if(Array.isArray(t)){var n=null,o=e._i(t,n);a.checked?o<0&&e.$set(e.serverGeneratorForm,"includeNodeJS",t.concat([n])):o>-1&&e.$set(e.serverGeneratorForm,"includeNodeJS",t.slice(0,o).concat(t.slice(o+1)))}else e.$set(e.serverGeneratorForm,"includeNodeJS",s)}}}),t("div",{staticClass:"check"}),e._v(" NodeJS Module ")]):e._e(),"release"!=e.serverGeneratorForm.branch?t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.serverGeneratorForm.includeJS,expression:"serverGeneratorForm.includeJS"}],attrs:{type:"checkbox",name:""},domProps:{checked:Array.isArray(e.serverGeneratorForm.includeJS)?e._i(e.serverGeneratorForm.includeJS,null)>-1:e.serverGeneratorForm.includeJS},on:{change:function(r){var t=e.serverGeneratorForm.includeJS,a=r.target,s=!!a.checked;if(Array.isArray(t)){var n=null,o=e._i(t,n);a.checked?o<0&&e.$set(e.serverGeneratorForm,"includeJS",t.concat([n])):o>-1&&e.$set(e.serverGeneratorForm,"includeJS",t.slice(0,o).concat(t.slice(o+1)))}else e.$set(e.serverGeneratorForm,"includeJS",s)}}}),t("div",{staticClass:"check"}),e._v(" JS Module ")]):e._e(),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.serverGeneratorForm.includeCsharp,expression:"serverGeneratorForm.includeCsharp"}],attrs:{type:"checkbox",name:""},domProps:{checked:Array.isArray(e.serverGeneratorForm.includeCsharp)?e._i(e.serverGeneratorForm.includeCsharp,null)>-1:e.serverGeneratorForm.includeCsharp},on:{change:function(r){var t=e.serverGeneratorForm.includeCsharp,a=r.target,s=!!a.checked;if(Array.isArray(t)){var n=null,o=e._i(t,n);a.checked?o<0&&e.$set(e.serverGeneratorForm,"includeCsharp",t.concat([n])):o>-1&&e.$set(e.serverGeneratorForm,"includeCsharp",t.slice(0,o).concat(t.slice(o+1)))}else e.$set(e.serverGeneratorForm,"includeCsharp",s)}}}),t("div",{staticClass:"check"}),e._v(" C# Module ")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.serverGeneratorForm.includeSampleConfig,expression:"serverGeneratorForm.includeSampleConfig"}],attrs:{type:"checkbox",name:""},domProps:{checked:Array.isArray(e.serverGeneratorForm.includeSampleConfig)?e._i(e.serverGeneratorForm.includeSampleConfig,null)>-1:e.serverGeneratorForm.includeSampleConfig},on:{change:function(r){var t=e.serverGeneratorForm.includeSampleConfig,a=r.target,s=!!a.checked;if(Array.isArray(t)){var n=null,o=e._i(t,n);a.checked?o<0&&e.$set(e.serverGeneratorForm,"includeSampleConfig",t.concat([n])):o>-1&&e.$set(e.serverGeneratorForm,"includeSampleConfig",t.slice(0,o).concat(t.slice(o+1)))}else e.$set(e.serverGeneratorForm,"includeSampleConfig",s)}}}),t("div",{staticClass:"check"}),e._v(" Sample config file ")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.serverGeneratorForm.includeSampleResources,expression:"serverGeneratorForm.includeSampleResources"}],attrs:{type:"checkbox",name:""},domProps:{checked:Array.isArray(e.serverGeneratorForm.includeSampleResources)?e._i(e.serverGeneratorForm.includeSampleResources,null)>-1:e.serverGeneratorForm.includeSampleResources},on:{change:function(r){var t=e.serverGeneratorForm.includeSampleResources,a=r.target,s=!!a.checked;if(Array.isArray(t)){var n=null,o=e._i(t,n);a.checked?o<0&&e.$set(e.serverGeneratorForm,"includeSampleResources",t.concat([n])):o>-1&&e.$set(e.serverGeneratorForm,"includeSampleResources",t.slice(0,o).concat(t.slice(o+1)))}else e.$set(e.serverGeneratorForm,"includeSampleResources",s)}}}),t("div",{staticClass:"check"}),e._v(" Example resource pack ")])])]),t("a",{staticClass:"btn",attrs:{href:"#",disabled:e.serverGeneratorForm.isBundling},on:{click:function(r){return e.bundleServer()}}},[e.serverGeneratorForm.isBundling?t("span",[e._v(" "+e._s(e.serverGeneratorForm.progress)+"% ")]):t("span",[e._v(" Download "),t("i",[e._v("Build #"+e._s(e.latestServerBuild))])])]),t("p",{staticClass:"dlMobile"},[e._v(" Downloads are unavailable on mobile devices, please visit this page from a desktop. ")])])])])])},s=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"title"},[t("h1",[e._v("Downloads")]),t("p",[e._v(" By downloading you accept our"),t("br"),t("a",{attrs:{href:"terms-of-service.pdf"}},[e._v("Terms Of Service")]),e._v(" and "),t("a",{attrs:{href:"#"}},[e._v("Privacy Policy")])]),t("p",{staticClass:"dlMobile"},[e._v(" Downloads are unavailable on mobile devices, please visit this page from a desktop. ")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"dl client"},[t("h2",[e._v("Client")]),t("p",[e._v(" Installer / Updater: "),t("b",[e._v("~2MB")]),t("br"),e._v(" Full client: "),t("b",[e._v("~170MB")])]),t("div",{staticClass:"action"},[t("a",{staticClass:"btn",attrs:{href:"https://cdn.altv.mp/altv-release.zip"}},[e._v(" Download ")]),t("a",{staticClass:"help",attrs:{href:"https://wiki.altv.mp/Troubleshooting",target:"_blank"}},[e._v(" Need help? ")])])])}],n=t("bc3a"),o=t.n(n),i=t("c4e3"),l=t.n(i),c=t("21a6");let d=window.Promise;d||(d=l.a.external.Promise);var u={data(){return{latestServerBuild:"...",serverGeneratorForm:{branch:"release",isLinux:!1,includeDataFiles:!1,includeNodeJS:!1,includeJS:!1,includeCsharp:!1,includeSampleConfig:!1,includeSampleResources:!1,isBundling:!1,progress:0}}},created(){this.updateServerVersion()},beforeCreate(){document.body.className="downloads"},methods:{updateServerVersion(){this.latestServerBuild="...";const e=this.serverGeneratorForm.isLinux?"x64_linux":"x64_win32",r=this.serverGeneratorForm.branch;return this.serverGeneratorForm.includeDataFiles=!1,this.serverGeneratorForm.includeNodeJS=!1,this.serverGeneratorForm.includeJS=!1,this.serverGeneratorForm.includeCsharp=!1,this.serverGeneratorForm.includeSampleConfig=!1,this.serverGeneratorForm.includeSampleResources=!1,o.a.get(`https://cdn.altv.mp/server/${r}/${e}/update.json`).then(e=>{this.latestServerBuild=e.data.latestBuildNumber})},bundleServer:function(){this.serverGeneratorForm.isBundling=!0;const e=new l.a,r=this.serverGeneratorForm.isLinux?"x64_linux":"x64_win32",t=this.serverGeneratorForm.branch,a=function(e){return new d((r,t)=>o.a.get(e,{responseType:"blob"}).then(e=>r(e.data)).catch(e=>t(e)))};let s=[],n=[];n.push({url:`https://cdn.altv.mp/server/${t}/${r}/altv-server`+(this.serverGeneratorForm.isLinux?"":".exe"),path:"altv-server"+(this.serverGeneratorForm.isLinux?"":".exe")}),this.serverGeneratorForm.includeDataFiles&&(n.push({url:`https://cdn.altv.mp/server/${t}/${r}/data/vehmodels.bin`,path:"data/vehmodels.bin"}),n.push({url:`https://cdn.altv.mp/server/${t}/${r}/data/vehmods.bin`,path:"data/vehmods.bin"})),this.serverGeneratorForm.includeNodeJS&&(s.push("node-module"),n.push({url:`https://cdn.altv.mp/node-module/${t}/${r}/modules/`+(this.serverGeneratorForm.isLinux?"libnode-module.so":"node-module.dll"),path:"modules/"+(this.serverGeneratorForm.isLinux?"libnode-module.so":"node-module.dll")}),n.push({url:`https://cdn.altv.mp/node-module/${t}/${r}/`+(this.serverGeneratorForm.isLinux?"libnode.so.72":"libnode.dll"),path:this.serverGeneratorForm.isLinux?"libnode.so.72":"libnode.dll"})),this.serverGeneratorForm.includeJS&&(s.push("js-module"),n.push({url:`https://cdn.altv.mp/js-module/${t}/${r}/modules/js-module/`+(this.serverGeneratorForm.isLinux?"libjs-module.so":"js-module.dll"),path:"modules/js-module/"+(this.serverGeneratorForm.isLinux?"libjs-module.so":"js-module.dll")}),n.push({url:`https://cdn.altv.mp/js-module/${t}/${r}/modules/js-module/`+(this.serverGeneratorForm.isLinux?"libnode.so.72":"libnode.dll"),path:"modules/js-module/"+(this.serverGeneratorForm.isLinux?"libnode.so.72":"libnode.dll")})),this.serverGeneratorForm.includeCsharp&&(s.push("csharp-module"),n.push({url:`https://cdn.altv.mp/coreclr-module/${t}/${r}/modules/`+(this.serverGeneratorForm.isLinux?"libcsharp-module.so":"csharp-module.dll"),path:"modules/"+(this.serverGeneratorForm.isLinux?"libcsharp-module.so":"csharp-module.dll")}),n.push({url:`https://cdn.altv.mp/coreclr-module/${t}/${r}/AltV.Net.Host.dll`,path:"AltV.Net.Host.dll"}),n.push({url:`https://cdn.altv.mp/coreclr-module/${t}/${r}/AltV.Net.Host.runtimeconfig.json`,path:"AltV.Net.Host.runtimeconfig.json"})),this.serverGeneratorForm.isLinux&&n.push({url:"https://cdn.altv.mp/others/start.sh",path:"start.sh"}),this.serverGeneratorForm.includeSampleConfig&&n.push({url:"https://cdn.altv.mp/others/server.cfg",path:"server.cfg"});for(const o of n){let r;r="server.cfg"===o.path?a("https://cdn.altv.mp/others/server.cfg").then(e=>new Blob([e]).text().then(e=>e.replace(/modules:\s*\[[\s\S]*?\]/gm,`modules: [\n${s.join("\n")}\n]`))):a(o.url),e.file(o.path,r,{binary:!0})}new d((r,t)=>this.serverGeneratorForm.includeSampleResources?a("https://cdn.altv.mp/samples/resources.zip").then(l.a.loadAsync).then(t=>{t.forEach((r,t)=>{t.dir||e.file(r,t.async("blob"),{binary:!0})}),r()}):r()).then(()=>e.generateAsync({type:"blob"},e=>{this.serverGeneratorForm.progress=Math.round(e.percent)}).then(e=>{this.serverGeneratorForm.isBundling=!1,this.serverGeneratorForm.progress=0,Object(c["saveAs"])(e,"altv-server.zip")}).catch(e=>{this.serverGeneratorForm.isBundling=!1,alert("Failed to bundle server! Please, contact us on Discord! Error: "+e.message)}))}}},v=u,m=(t("e56c"),t("2877")),p=Object(m["a"])(v,a,s,!1,null,"6bf9e9e3",null);r["a"]=p.exports}});
//# sourceMappingURL=app.aa0adee5.js.map