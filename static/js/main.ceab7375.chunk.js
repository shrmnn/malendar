(this.webpackJsonpmalendar=this.webpackJsonpmalendar||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),c=t.n(i),o=(t(14),t(15),function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("div",{"aria-label":"Site logo",className:"Logo"},"MC"),r.a.createElement("div",{className:"Menu"},r.a.createElement("div",{"aria-label":"Link to update feed",className:"Menu"},"What's new"),r.a.createElement("div",{"aria-label":"Link to about page",className:"Menu"},"About")))}),l=t(1),s=t.n(l),u=t(2),m=t(5),d=t(3),g=(t(17),function(e){var a={background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, #0E0E0E 105%), url(".concat(e.ani?e.ani.image:"",") center center no-repeat")};return r.a.createElement("div",{"aria-label":"Anime is ".concat(e.ani.title,", their airing date is ").concat(e.ani.airing),className:"day \n      ".concat(e.ani.day?"":"filledDay"," \n      ").concat(e.id>e.ldm?"hidden":"","\n      "),style:e.ani.image?a:null,onClick:function(){console.log("day is clicked!"),e.ani.id&&window.open("https://myanimelist.net/anime/".concat(e.ani.id))}},r.a.createElement("div",{className:"dayNum"},e.ani.day?e.ani.day.toString().padStart(2,"0"):e.id<=e.ldm?e.id:""),r.a.createElement("div",null,r.a.createElement("div",{className:"dayTitle"},e.ani?e.ani.title:"\u7537\u5b50\u9ad8\u6821\u751f\u3067\u58f2\u308c\u3063\u5b50\u30e9\u30a4\u30c8\u30ce\u30d9\u30eb\u4f5c\u5bb6\u3092\u3057\u3066\u3044\u308b\u3051\u308c\u3069\u3001\u5e74\u4e0b\u306e\u30af\u30e9\u30b9\u30e1\u30a4\u30c8\u3067\u58f0\u512a\u306e\u5973\u306e\u5b50\u306b\u9996\u3092\u7d5e\u3081\u3089\u308c\u3066\u3044\u308b! The Animation 2nd Season"),r.a.createElement("div",{className:"daySubtitle"},e.ani.studio?e.ani.studio.name:"Studio is currently unknown")))}),f=[],h=function(){var e=Object(m.a)(s.a.mark((function e(a,t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.codetabs.com/v1/proxy?quest=https://api.jikan.moe/v3/","season/").concat(a,"/").concat(t,"/")).then((function(e){return 429===e.status&&console.log("Too many requests!"),e.ok||console.error("Could not fetch!"),e}));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.anime);case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),p=function(e,a,t){var n=[];for(var r in n.push(e.map((function(e){return e}))),n=n[0])n[r]={id:n[r].mal_id,title:n[r].title,airing:n[r].airing_start,image:n[r].image_url,studio:n[r].producers[0]};return f=n,b(),E(a,t),!0},b=function(){var e=Object(u.a)(f);e.sort((function(e,a){return e.airing>a.airing?1:e.airing<a.airing?-1:0})),f=Object(u.a)(e)},v=function(e,a){return new Date(a,new Date("01 ".concat(e," ").concat(a)).getMonth()+1,0).getDate()},E=function(e,a){var t=Object(u.a)(f),n=[];n.length=v(e,a),n.length=35,n=y(n,e,a),t.forEach((function(t,r){return new Date(t.airing).getTime()<=new Date("31 ".concat(e," ").concat(a)).getTime()&&new Date(t.airing).getTime()>=new Date("01 ".concat(e," ").concat(a)).getTime()&&(t.day=new Date(t.airing).getDate(),n[t.day-1]=t,!0)})),f=Object(u.a)(n)},y=function(e,a,t){var n=Object(u.a)(e);return n.fill({id:"",title:"",airing:"",image:"",studio:{name:""}},0,n.length),n},w=function(){var e=Object(m.a)(s.a.mark((function e(a,t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(a,t);case 2:return r=e.sent,e.next=5,p(r,n,a);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),N=function(e){return r.a.createElement("span",{role:"img","aria-label":"loading...",className:"loading"},e.text?e.text:"(\u3063\u25d4\u25e1\u25d4)\u3063 \ud83c\udf65")},k=function(){var e=Object(n.useState)([f]),a=Object(d.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)("February"),o=Object(d.a)(c,2),l=o[0],h=o[1],p=Object(n.useState)(2020),b=Object(d.a)(p,2),E=b[0],y=b[1],k=Object(n.useState)(!1),j=Object(d.a)(k,2),O=j[0],S=j[1],x=Object(n.useState)(!1),M=Object(d.a)(x,2),D=M[0],A=M[1];Object(n.useEffect)((function(){!function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),console.log("year: ".concat(E," and month: ").concat(l)),e.prev=2,e.next=5,w(E,C(l),l);case 5:return console.log("titlelist had updated!"),e.next=8,i((function(e){return Object(u.a)(f)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),A(!0);case 13:S(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}()()}),[l,E]);var C=function(e){return"January"===e||"February"===e?"winter":"March"===e||"April"===e||"May"===e?"spring":"June"===e||"July"===e||"August"===e?"summer":"fall"};return r.a.createElement("main",{className:"Container"},r.a.createElement("div",{"aria-label":"head navigation",className:"Head-Container"},r.a.createElement("div",{className:"Date-nav"},r.a.createElement("div",{"aria-label":"select month",className:"dateMonth padding-left",onClick:function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];h((function(a){return e[Math.ceil(11*Math.random())]})),console.log("Current season is",C(l))}},l),r.a.createElement("div",{"aria-label":"select year",className:"dateYear padding-right",onClick:function(){y((function(e){return Math.ceil(20*Math.random())+2e3}))}},E)),r.a.createElement("div",{"aria-label":"select if you want to see ongoing or new releases",className:"Release-nav"},r.a.createElement("div",{className:"padding-left"},"Ongoing"),r.a.createElement("div",{className:"padding-right active"},"New releases"))),r.a.createElement("div",{className:"Days"},O?r.a.createElement(N,null):D?r.a.createElement(N,{text:"Error has occurred(\u2565\ufe4f\u2565)"}):t.map((function(e,a){return r.a.createElement(g,{id:(a+1).toString().padStart(2,"0"),key:a,ani:t[a],ldm:v(l,E)})}))))},j=(t(18),function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",{"aria-label":"Author of site is Alex Shermann, made in 2020",className:"footerRight"},"Alex Shermann [2020]"),r.a.createElement("div",{className:"footerLeft"},r.a.createElement("p",{"aria-label":"Site is recommended for 18+",className:"marker"},"18+"),r.a.createElement("a",{"aria-label":"Link to github",href:"https://github.com/shrmnn/malendar",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"github link","aria-label":"github link",height:"32",width:"32",src:"https://unpkg.com/simple-icons@v2/icons/github.svg"}))))}),O=(t(19),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Content"},r.a.createElement(o,null),r.a.createElement(k,null),r.a.createElement(j,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ceab7375.chunk.js.map