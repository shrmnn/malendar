(this.webpackJsonpmalendar=this.webpackJsonpmalendar||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),o=(n(14),n(15),function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("div",{className:"Logo"},"MC"),r.a.createElement("div",{className:"Menu"},r.a.createElement("div",{className:"Menu"},"What's new"),r.a.createElement("div",{className:"Menu"},"About")))}),l=n(1),s=n.n(l),u=n(2),m=n(4),d=n(6),g=(n(17),function(e){var t={background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, #0E0E0E 105%), url(".concat(e.ani?e.ani.image:"",") center center no-repeat")};return r.a.createElement("div",{className:"day ".concat(e.ani.day?"":"poshelnahuy"," ").concat(e.id>e.ldm?"hidden":""),style:e.ani.image?t:null,onClick:function(){console.log("day is clicked!")}},r.a.createElement("div",{className:"dayNum"},e.ani.day?e.ani.day.toString().padStart(2,"0"):e.id<=e.ldm?e.id:""),r.a.createElement("div",null,r.a.createElement("div",{className:"dayTitle"},e.ani?e.ani.title:"\u7537\u5b50\u9ad8\u6821\u751f\u3067\u58f2\u308c\u3063\u5b50\u30e9\u30a4\u30c8\u30ce\u30d9\u30eb\u4f5c\u5bb6\u3092\u3057\u3066\u3044\u308b\u3051\u308c\u3069\u3001\u5e74\u4e0b\u306e\u30af\u30e9\u30b9\u30e1\u30a4\u30c8\u3067\u58f0\u512a\u306e\u5973\u306e\u5b50\u306b\u9996\u3092\u7d5e\u3081\u3089\u308c\u3066\u3044\u308b! The Animation 2nd Season"),r.a.createElement("div",{className:"daySubtitle"},e.ani.studio?e.ani.studio.name:"Studio is currently unknown")))}),f="https://private-anon-98ba329006-jikan.apiary-proxy.com/v3/",h=[],p=function(){var e=Object(m.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"season/").concat(t,"/").concat(n,"/")).then((function(e){return 429===e.status&&console.log("Too many requests!"),e.ok||console.error("Could not fetch!"),e}));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r.anime);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(e,t,n){var a=[];for(var r in a.push(e.map((function(e){return e}))),a=a[0])a[r]={id:a[r].mal_id,title:a[r].title,airing:a[r].airing_start,image:a[r].image_url,studio:a[r].producers[0]};return h=a,b(),y(t,n),!0},b=function(){var e=Object(u.a)(h);e.sort((function(e,t){return e.airing>t.airing?1:e.airing<t.airing?-1:0})),h=Object(u.a)(e)},E=function(e,t){return new Date(t,new Date("01 ".concat(e," ").concat(t)).getMonth()+1,0).getDate()},y=function(e,t){var n=Object(u.a)(h),a=[];a.length=E(e,t),a.length=35,a=w(a,e,t),console.log("newlist is",a),n.forEach((function(n,r){return new Date(n.airing).getTime()<=new Date("31 ".concat(e," ").concat(t)).getTime()&&new Date(n.airing).getTime()>=new Date("01 ".concat(e," ").concat(t)).getTime()&&(n.day=new Date(n.airing).getDate(),a[n.day-1]=n,!0)})),console.log("animelist after gabm is",a),h=Object(u.a)(a)},w=function(e,t,n){var a=Object(u.a)(e);return a.fill({id:"",title:"",airing:"",image:"",studio:{name:""}},0,a.length),console.log("Filled list is ",a),a},N=function(){var e=Object(m.a)(s.a.mark((function e(t,n,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("".concat(f,"season/").concat(t,"/").concat(n,"/")),e.next=3,p(t,n);case 3:return r=e.sent,e.next=6,v(r,a,t);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(a.useState)([h]),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)("February"),o=Object(d.a)(i,2),l=o[0],f=o[1],p=Object(a.useState)(2020),v=Object(d.a)(p,2),b=v[0],y=v[1];Object(a.useEffect)((function(){!function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("year: ".concat(b," and month: ").concat(l)),e.next=3,N(b,w(l),l);case 3:return console.log("titlelist had updated!"),e.next=6,c((function(e){return Object(u.a)(h)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l,b]);var w=function(e){return"January"===e||"February"===e?"winter":"March"===e||"April"===e||"May"===e?"spring":"June"===e||"July"===e||"August"===e?"summer":"fall"};return r.a.createElement("main",{className:"Container"},r.a.createElement("div",{className:"Head-Container"},r.a.createElement("div",{className:"Date-nav"},r.a.createElement("div",{className:"dateMonth padding-left",onClick:function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];f((function(t){return e[Math.ceil(11*Math.random())]})),console.log("Current season is",w(l))}},l),r.a.createElement("div",{className:"dateYear padding-right",onClick:function(){y((function(e){return Math.ceil(20*Math.random())+2e3}))}},b)),r.a.createElement("div",{className:"Release-nav"},r.a.createElement("div",{className:"padding-left"},"Ongoing"),r.a.createElement("div",{className:"padding-right active"},"New releases"))),r.a.createElement("div",{className:"Days"},n.length>0?n.map((function(e,t){return r.a.createElement(g,{id:(t+1).toString().padStart(2,"0"),key:t,ani:n[t],ldm:E(l,b)})})):r.a.createElement("div",{className:"simpleText"},"There is no data on this period")))},j=(n(18),function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",{className:"footerRight"},"Alex Shermann [2020]"),r.a.createElement("div",{className:"footerLeft"},r.a.createElement("a",{href:"https://github.com/shrmnn/malendar",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"github link","aria-label":"github link",height:"32",width:"32",src:"https://unpkg.com/simple-icons@v2/icons/github.svg"}))))}),O=(n(19),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Content"},r.a.createElement(o,null),r.a.createElement(k,null),r.a.createElement(j,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.81d0af3e.chunk.js.map