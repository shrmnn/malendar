(this.webpackJsonpmalendar=this.webpackJsonpmalendar||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/arrow.8168175f.svg"},,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=(a(16),a(17),function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("div",{"aria-label":"Site logo",className:"Logo"},"MC"),r.a.createElement("div",{className:"Menu"},r.a.createElement("div",{"aria-label":"Link to update feed",className:"Menu",title:"WIP"},"What's new"),r.a.createElement("div",{"aria-label":"Link to about page",className:"Menu",title:"WIP"},"About")))}),l=a(3),s=a(1),u=a.n(s),m=a(2),d=a(5),f=a(6),h=(a(19),r.a.memo((function(e){var t={background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, #0E0E0E 105%), url(".concat(e.ani?e.ani.image:"",") center center no-repeat")};return r.a.createElement("div",{"aria-label":e.ani.id?"Anime is ".concat(e.ani.title,", their airing date is ").concat(e.ani.airing):"",className:"day ".concat(e.ani.day?"":"filledDay"," ").concat(e.id>e.ldm?"hidden":""),style:e.ani.image?t:null,onClick:function(){e.ani.id&&window.open("https://myanimelist.net/anime/".concat(e.ani.id),"_blank")},rel:"nofollow noreferer",itemType:"Anime",itemScope:!0},r.a.createElement("time",{className:"dayNum ".concat(parseInt(e.id)===e.today?"today":""),dateTime:e.ani.airing,itemType:"startDate"},e.ani.day?e.ani.day.toString().padStart(2,"0"):e.id<=e.ldm?e.id:""),r.a.createElement("div",null,r.a.createElement("div",{className:"dayTitle",itemType:"name"},e.ani?e.ani.title:"\u7537\u5b50\u9ad8\u6821\u751f\u3067\u58f2\u308c\u3063\u5b50\u30e9\u30a4\u30c8\u30ce\u30d9\u30eb\u4f5c\u5bb6\u3092\u3057\u3066\u3044\u308b\u3051\u308c\u3069\u3001\u5e74\u4e0b\u306e\u30af\u30e9\u30b9\u30e1\u30a4\u30c8\u3067\u58f0\u512a\u306e\u5973\u306e\u5b50\u306b\u9996\u3092\u7d5e\u3081\u3089\u308c\u3066\u3044\u308b! The Animation 2nd Season"),r.a.createElement("div",{className:"daySubtitle",itemType:"productionCompany"},e.ani.studio?e.ani.studio.name:"Studio is currently unknown")))}))),g=[],b=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.allorigins.win/raw?url=").concat("https://api.jikan.moe/v3/","season/").concat(t,"/").concat(a,"/")).then((function(e){return 429===e.status&&console.log("Too many requests!"),e.ok||console.error("Could not fetch!"),e}));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.anime);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(e,t,a){var n=[];for(var r in n.push(e.map((function(e){return e}))),n=n[0])n[r]={id:n[r].mal_id,title:n[r].title,airing:n[r].airing_start,image:n[r].image_url,studio:n[r].producers[0]};return g=n,v(),w(t,a),!0},v=function(){var e=Object(m.a)(g);e.sort((function(e,t){return e.airing>t.airing?1:e.airing<t.airing?-1:0})),g=Object(m.a)(e)},y=function(e,t){return new Date(t,new Date("01 ".concat(e," ").concat(t)).getMonth()+1,0).getDate()},w=function(e,t){var a=Object(m.a)(g),n=[];n.length=35,n=E(n,e,t);var r=new Date("01 ".concat(e," ").concat(t)).getTime(),i=new Date("".concat(y(e,t)," ").concat(e," ").concat(t)).getTime();a.forEach((function(e,t){var a=new Date(e.airing).getTime();return a<=i&&a>=r&&(e.day=new Date(e.airing).getDate()+1,n[e.day-1]=e,!0)})),g=Object(m.a)(n)},E=function(e,t,a){var n=Object(m.a)(e);return n.fill({id:"",title:"",airing:"",image:"",studio:{name:""}},0,n.length),n},k=function(){var e=Object(d.a)(u.a.mark((function e(t,a,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t,a);case 2:return r=e.sent,e.next=5,p(r,n,t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),N=a(8),j=a.n(N),O=function(e){return r.a.createElement("div",{"aria-label":"loading...",className:"loading"},e.error.error?"Error has occurred(\u2565\ufe4f\u2565)":"(\u3063\u25d4\u25e1\u25d4)\u3063 \ud83c\udf65",e.error.code?console.log(e.error.code):null)},S=function(e){return r.a.createElement("div",{"aria-label":"head navigation",className:"Head-Container"},r.a.createElement("div",{className:"Date-nav"},r.a.createElement("button",{tabIndex:"0",className:"button",onClick:e.changeDate.bind(void 0,-1),title:"Previous month"},r.a.createElement("img",{alt:"back-arrow",style:{transform:"rotate(180deg)"},src:j.a})),r.a.createElement("div",{"aria-label":"select month",className:"dateMonth padding-left",onClick:e.monthClick,title:"Click for random month"},e.date.month),r.a.createElement("div",{"aria-label":"select year",className:"dateYear padding-right",onClick:e.yearClick,title:"Click for random year"},e.date.year),r.a.createElement("button",{tabIndex:"0",className:"button",onClick:e.changeDate.bind(void 0,1),title:"Next month"},r.a.createElement("img",{alt:"fur-arrow",src:j.a}))),r.a.createElement("div",{"aria-label":"select if you want to see ongoing or new releases",className:"Release-nav"},r.a.createElement("div",{className:"padding-left"},"Ongoing"),r.a.createElement("div",{className:"padding-right active"},"New releases")))},C=function(){var e=Object(n.useState)([g]),t=Object(f.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)({month:"July",year:2020}),c=Object(f.a)(o,2),s=c[0],b=c[1],p=Object(n.useState)(!1),v=Object(f.a)(p,2),w=v[0],E=v[1],N=Object(n.useState)({error:!1,code:""}),j=Object(f.a)(N,2),C=j[0],D=j[1];Object(n.useEffect)((function(){!function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),D([!1]),e.prev=2,e.next=5,k(s.year,x(s.month),s.month);case 5:return console.log("titlelist had updated!"),e.next=8,i((function(e){return Object(m.a)(g)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),D({error:!0,code:e.t0});case 13:document.title="malendar for ".concat(s.month," ").concat(s.year),E(!1);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}()()}),[s]);var x=function(e){return"January"===e||"February"===e?"winter":"March"===e||"April"===e||"May"===e?"spring":"June"===e||"July"===e||"August"===e?"summer":"fall"};return r.a.createElement("main",{className:"Container"},r.a.createElement(S,{monthClick:function(){var e=function e(){var t=["January","February","March","April","May","June","July","August","September","October","November","December"][Math.ceil(11*Math.random())];return t===s.month&&(t=e()),t}();b(Object(l.a)(Object(l.a)({},s),{},{month:e})),console.log("Current season is",x(s.month))},yearClick:function(e){b(Object(l.a)(Object(l.a)({},s),{},{year:Math.ceil(10*Math.random())+2010}))},date:s,changeDate:function(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"];console.log("hey there what about ",s.month,s.year),"January"===s.month&&e<0?b({month:"December",year:s.year-1}):"December"===s.month&&e>0?b({month:"January",year:s.year+1}):b(Object(l.a)(Object(l.a)({},s),{},{month:t[t.findIndex((function(e){return e===s.month}))+e]}))}}),r.a.createElement("div",{className:"Days"},w||C.error?r.a.createElement(O,{error:C}):null,a.map((function(e,t){return r.a.createElement(h,{id:(t+1).toString().padStart(2,"0"),key:t,ani:a[t],ldm:y(s.month,s.year),today:(new Date).getDate()})}))))},D=(a(20),function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",{"aria-label":"Author of site is Alex Shermann, made in 2020",className:"footerRight"},"Alex Shermann [2020]"),r.a.createElement("div",{className:"footerLeft"},r.a.createElement("p",{"aria-label":"Site is recommended for 18+",className:"marker",title:"Site is recommended for 18+"},"18+"),r.a.createElement("a",{"aria-label":"Link to github",href:"https://github.com/shrmnn/malendar",target:"_blank",rel:"noopener noreferrer",title:"GitHub"},r.a.createElement("img",{alt:"github link","aria-label":"github link",height:"32",width:"32",src:"https://unpkg.com/simple-icons@v2/icons/github.svg"}))))}),x=(a(21),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Content"},r.a.createElement(c,null),r.a.createElement(C,null),r.a.createElement(D,null)))}),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/malendar",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/malendar","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.7149a139.chunk.js.map