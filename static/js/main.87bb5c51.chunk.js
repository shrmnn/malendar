(this.webpackJsonpmalendar=this.webpackJsonpmalendar||[]).push([[0],[,,function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(16),r=new function e(){var t=this;Object(n.a)(this,e),this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.getRandomMonth=function(e){var a=t.months[Math.ceil(11*Math.random())];return a===e.month&&(a=t.getRandomMonth(e)),a},this.getSeasonByMonth=function(e){return"January"===e||"February"===e||"March"===e?"winter":"April"===e||"May"===e||"June"===e?"spring":"July"===e||"August"===e||"September"===e?"summer":"fall"},this.getCurrentMonth=function(){return t.months[(new Date).getMonth()]},this.getLastDayOfMonth=function(e,a){return new Date(a,t.convertToLocale("en-US",new Date("".concat(e," 01 ").concat(a))).getMonth()+1,0).getDate()},this.convertToLocale=function(e,t){return new Date(new Date(t).toLocaleString(e))},this.convertToJapanTime=function(e){return new Date(e).toLocaleString("en-US",{timeZone:"Japan"})},this.getFirstWeekDayOfMonth=function(e,a){return new Date(t.convertToLocale("en-US","".concat(e," 01 ").concat(a))).getDay()}},l=new function e(){var t=this;Object(n.a)(this,e),this.getCurrentYear=function(){return(new Date).getFullYear()},this.getRandomYear=function(e){var a=Math.ceil(15*Math.random())+2e3;return a===e.year&&(a=t.getRandomYear(e)),a}}},,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/arrow.2c511b88.svg"},,function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r);t.a=function(e,t){var a=l.a.useState((function(){var a=window.localStorage.getItem(t);return null!==a?JSON.parse(a):e})),r=Object(n.a)(a,2),i=r[0],c=r[1];return l.a.useEffect((function(){window.localStorage.setItem(t,JSON.stringify(i))}),[t,i]),[i,c]}},,,,,,function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),i=function(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),l=a[0],i=a[1];return Object(r.useEffect)((function(){var t=new Image;t.src=e,t.onload=function(){return i(e)}}),[e]),l},c=a(19),o=l.a.memo((function(e){var t=e.ani,a=Object(n.a)(e.month,2),r=a[0],o=a[1],m=Object(c.a)(t.image,t.id),s=Object(n.a)(m,1)[0],u=i(t.image.split(".jpg")[0]+"l.jpg"),d={background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, #0E0E0E 105%), url(".concat(t?u||s:"",") center center / cover no-repeat")};return l.a.createElement("section",{"aria-label":t.id?"[".concat(t.id,"] Anime is ").concat(t.title,", their airing date is ").concat(t.airing):"",className:"Days__Day ".concat(t.day&&"string"!==typeof t.day?"":"Days__Day--filledDay"," ").concat(e.id>r.getLastDayOfMonth(o.getCurrentYear(),r.getCurrentMonth())?"--hidden":""),style:t.image?d:null,onClick:function(){t.id&&window.open("https://myanimelist.net/anime/".concat(t.id),"_blank")},rel:"nofollow noreferer",itemType:"Anime",itemScope:!0},l.a.createElement("div",{className:"Days__Day_Notificators"},l.a.createElement("time",{className:"Days__Day_DayNum ".concat(parseInt(e.id)===e.today?"Days__Day_DayNum--mToday":""),dateTime:t.airing,itemType:"startDate"},t.day&&"string"!==typeof t.day?t.day.toString().padStart(2,"0"):e.id),t.multi?l.a.createElement("div",{itemType:"alsoThisDay",className:"Days__Day_DayNum Days__Day_DayNum--MultititleNotification",onClick:function(a){a.stopPropagation(),e.changeMV(t.day-1)},title:"Also ".concat(t.titleArray.length," anime this day")},"+"+t.titleArray.length):null),l.a.createElement("div",{className:"Days__Day_CardTitle"},l.a.createElement("div",{className:"Days__Day_CardTitle--DayTitle",itemType:"name"},t?t.title:"\u7537\u5b50\u9ad8\u6821\u751f\u3067\u58f2\u308c\u3063\u5b50\u30e9\u30a4\u30c8\u30ce\u30d9\u30eb\u4f5c\u5bb6\u3092\u3057\u3066\u3044\u308b\u3051\u308c\u3069\u3001\u5e74\u4e0b\u306e\u30af\u30e9\u30b9\u30e1\u30a4\u30c8\u3067\u58f0\u512a\u306e\u5973\u306e\u5b50\u306b\u9996\u3092\u7d5e\u3081\u3089\u308c\u3066\u3044\u308b! The Animation 2nd Season"),l.a.createElement("div",{className:"Days__Day_CardTitle--DaySubtitle",itemType:"productionCompany"},t.studio?t.studio.name:"Studio is currently unknown")))}));t.a=o},,,function(e,t,a){e.exports=a.p+"static/media/moon.d58b953a.svg"},function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),i=a.n(l),c=(a(34),a(10)),o=a(1),m=(a(35),function(){return r.a.createElement("header",{className:"Header"},r.a.createElement(c.b,{"aria-label":"Site logo",className:"Logo",to:"/malendar/"},r.a.createElement("div",{className:"Header__Logo--M"},"M"),"C"),r.a.createElement("nav",{className:"Menu"},r.a.createElement(c.c,{"aria-label":"Link to update feed",className:"Menu",to:"/malendar/news",title:"WIP",activeClassName:"Header--active"},"What's new"),r.a.createElement(c.c,{"aria-label":"Link to about page",className:"Menu",to:"/malendar/about",title:"WIP",activeClassName:"Header--active"},"About")))}),s=a(13),u=a(8),d=a.n(u),h=a(11),y=a(9),f=a(3),g=(a(42),a(16)),E=a(2),b=new function e(){var t=this;Object(g.a)(this,e),this.titlelist=[],this.animeScissors=function(){var e=Object(h.a)(d.a.mark((function e(a,n,r){var l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getSeason(a,n);case 2:return l=e.sent,e.next=5,t.getAnimelist(l,r,a);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.getSeason=function(){var e=Object(h.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("").concat("https://malendar.herokuapp.com/","season/").concat(t,"/").concat(a,"/")).then((function(e){return 429===e.status&&console.log("Too many requests!"),e.ok||console.error("Could not fetch!"),e}));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.anime);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.getAnimelist=function(e,a,n){var r=[];for(var l in r.push(e.map((function(e){return e}))),r=r[0])r[l]={id:r[l].mal_id,title:r[l].title,airing:E.a.convertToJapanTime(r[l].airing_start),image:r[l].image_url,studio:r[l].producers[0],members:r[l].members,titleArray:[]};return t.titlelist=r,t.getAnimeByMonth(a,n),!0},this.sortAnime=function(e){void 0===e&&(e=3);var a=Object(y.a)(t.titlelist);0===e?a.sort((function(e,t){return e.title>t.title?1:e.title<t.title?-1:0})):1===e?a.sort((function(e,t){return e.members>t.members?1:e.members<t.members?-1:0})):a.sort((function(e,t){return e.airing>t.airing?1:e.airing<t.airing?-1:0})),t.titlelist=Object(y.a)(a)},this.getAnimeByMonth=function(e,a){t.sortAnime(1);var n=Object(y.a)(t.titlelist).reverse(),r=[];r.length=E.a.getLastDayOfMonth(e,a),r=t.fillNewList(r);var l=new Date("01 ".concat(e," ").concat(a)).getTime(),i=new Date("".concat(E.a.getLastDayOfMonth(e,a)," ").concat(e," ").concat(a)).getTime();n.forEach((function(e,t){var a=new Date(e.airing).getTime();return a<=i&&a>=l&&(e.day=new Date(e.airing).getDate(),r[e.day-1].id?(r[e.day-1].multi=!0,r[e.day-1].titleArray.push(e)):r[e.day-1]=e,!0)})),t.titlelist=Object(y.a)(r)},this.fillNewList=function(e){var t=Object(y.a)(e);return t.fill({id:"",title:"",airing:"",image:"",studio:{name:""},multi:!1,titleArray:[]},0,t.length),t}},p=function(e){return r.a.createElement("div",{"aria-label":"loading...",className:"Loading"},e.error.error?"Error has occurred(\u2565\ufe4f\u2565)":"(\u3063\u25d4\u25e1\u25d4)\u3063 \ud83c\udf5c",e.error.code?console.log(e.error.code):null)},_=a(17),v=a.n(_),D=r.a.memo((function(e){var t=Object(o.f)();return r.a.createElement("div",{"aria-label":"head navigation",className:"HeadContainer"},r.a.createElement("div",{className:"HeadContainer__DateNav"},e.withParams?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{tabIndex:"0",className:"HeadContainer__Button",onClick:function(){return t.push("/malendar/".concat(e.changeDate(-1,!0)))},title:"Previous month"},r.a.createElement("img",{alt:"back-arrow",style:{transform:"rotate(180deg)"},src:v.a})),r.a.createElement("button",{tabIndex:"0",className:"HeadContainer__Button",onClick:function(){return t.push("/malendar/".concat(e.changeDate(1,!0)))},title:"Next month"},r.a.createElement("img",{alt:"fur-arrow",src:v.a}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{tabIndex:"0",className:"HeadContainer__Button",onClick:e.changeDate.bind(void 0,-1),title:"Previous month"},r.a.createElement("img",{alt:"back-arrow",style:{transform:"rotate(180deg)"},src:v.a})),r.a.createElement("button",{tabIndex:"0",className:"HeadContainer__Button",onClick:e.changeDate.bind(void 0,1),title:"Next month"},r.a.createElement("img",{alt:"fur-arrow",src:v.a}))),r.a.createElement("div",{"aria-label":"select month",className:"HeadContainer__DateNav_DateMonth",onClick:e.monthClick,title:"Click for random month"},e.date.month),r.a.createElement("div",{"aria-label":"select year",className:"HeadContainer__DateNav_DateYear",onClick:e.yearClick,title:"Click for random year"},e.date.year)),r.a.createElement("div",{"aria-label":"select if you want to see ongoing or new releases",className:"HeadContainer__ReleaseNav"},r.a.createElement(c.c,{className:"padding-left",exact:!0,to:"/malendar/ongoing",activeClassName:"HeadContainer__ReleaseNav--active"},"Ongoing"),r.a.createElement(c.c,{strict:!0,className:"padding-right",to:"/malendar/".concat(e.date.year).concat("/"+e.date.month),activeClassName:"HeadContainer__ReleaseNav--active"},"New releases")))})),k=a(25),w=function(e){return r.a.createElement("div",{className:"MultiDay",style:{display:"none"}},r.a.createElement("h1",{className:"MultiDay__Header",content:"There is no content"},""),r.a.createElement("div",{className:"MultiDay__Titles"},""))},N=function(){return r.a.createElement("div",{className:"Days__Day Days__Day--filledDay","aria-label":"There is no anime for this day"},r.a.createElement("div",{className:"Days__Day_Notificators"},r.a.createElement("time",{className:"Days__Day_DayNum"}," ")),r.a.createElement("div",{className:"Days__Day_CardTitle"},r.a.createElement("div",{className:"Days__Day_CardTitle--DayTitle",itemType:"name"}," "),r.a.createElement("div",{className:"Days__Day_CardTitle--DaySubtitle",itemType:"productionCompany"},"  ")))},O=r.a.memo((function(e){var t=Object(n.useState)([]),l=Object(f.a)(t,2),i=l[0],c=l[1],o=Object(n.useState)(-1),m=Object(f.a)(o,2),s=m[0],u=m[1],d=r.a.lazy((function(){return a.e(3).then(a.bind(null,48))})),h=e.i,g=e.titles,b=e.filler;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"Days__DayContainer ".concat(g[h].day&&"string"!==typeof g[h].day?"":"Days__Day--filledDay"),key:"Container__"+h},g[h].id?r.a.createElement(k.a,{id:b?" ":(h+1).toString().padStart(2,"0"),key:g[h].id,ani:g[h],month:[E.a,E.b],today:(new Date).getDate(),changeMV:function(e){var t=i;t.length=31,t.fill(!1),e!==s?(t[e]=!0,u(e)):(t[e]=!1,u(-1)),c((function(e){return Object(y.a)(t)}))}}):r.a.createElement(N,null)),r.a.createElement(n.Suspense,{fallback:r.a.createElement(w,null)},g[h].multi?r.a.createElement(d,{date:g[h].airing,titles:g[h].titleArray,MV:i[g[h].day-1],key:g[h].id+i[g[h].day-1]}):""))})),C=function(){return[r.a.createElement("li",{key:"mm_1"},"\u6559\u3048\u3066\u3000\u6559\u3048\u3066\u3088\u3000\u305d\u306e\u4ed5\u7d44\u307f\u3092\u3000\u50d5\u306e\u4e2d\u306b\u8ab0\u304c\u3044\u308b\u306e\uff1f"),r.a.createElement("li",{key:"mm_2"},"\u58ca\u308c\u305f\u3000\u58ca\u308c\u305f\u3088\u3000\u3053\u306e\u4e16\u754c\u3067\u3000\u541b\u304c\u7b11\u3046\u3000\u4f55\u3082\u898b\u3048\u305a\u306b"),r.a.createElement("li",{key:"mm_3"},"\u58ca\u308c\u305f\u50d5\u306a\u3093\u3066\u3055\u3000\u606f\u3092\u6b62\u3081\u3066"),r.a.createElement("li",{key:"mm_4"},"\u307b\u3069\u3051\u306a\u3044\u3000\u3082\u3046\u3000\u307b\u3069\u3051\u306a\u3044\u3088\u3000\u771f\u5b9f\u3055\u3048\u3000freeze"),r.a.createElement("li",{key:"mm_5"},"\u58ca\u305b\u308b\u3000\u58ca\u305b\u306a\u3044\u3000\u72c2\u3048\u308b\u3000\u72c2\u3048\u306a\u3044"),r.a.createElement("li",{key:"mm_6"},"\u3042\u306a\u305f\u3092\u898b\u3064\u3051\u3066\u3000\u63fa\u308c\u305f"),r.a.createElement("li",{key:"mm_7"},"\u6b6a\u3093\u3060\u4e16\u754c\u306b\u3060\u3093\u3060\u3093\u50d5\u306f\u900f\u304d\u901a\u3063\u3066\u898b\u3048\u306a\u304f\u306a\u3063\u3066"),r.a.createElement("li",{key:"mm_8"},"\u898b\u3064\u3051\u306a\u3044\u3067\u3000\u50d5\u306e\u3053\u3068\u3092\u3000\u898b\u3064\u3081\u306a\u3044\u3067"),r.a.createElement("li",{key:"mm_9"},"\u8ab0\u304b\u304c\u63cf\u3044\u305f\u4e16\u754c\u306e\u4e2d\u3067\u3000\u3042\u306a\u305f\u3092\u50b7\u3064\u3051\u305f\u304f\u306f\u306a\u3044\u3088"),r.a.createElement("li",{key:"mm_10"},"\u61b6\u3048\u3066\u3044\u3066\u3000\u50d5\u306e\u3053\u3068\u3092\u3000\u9bae\u3084\u304b\u306a\u307e\u307e"),r.a.createElement("li",{key:"mm_11"},"\u7121\u9650\u306b\u5e83\u304c\u308b\u5b64\u72ec\u304c\u7d61\u307e\u308b\u3000\u7121\u90aa\u6c17\u306b\u7b11\u3063\u305f\u8a18\u61b6\u304c\u523a\u3055\u3063\u3066"),r.a.createElement("li",{key:"mm_12"},"\u52d5\u3051\u306a\u3044\u3000\u52d5\u3051\u306a\u3044\u3000\u52d5\u3051\u306a\u3044\u3000\u52d5\u3051\u306a\u3044\u3000\u52d5\u3051\u306a\u3044\u3000\u52d5\u3051\u306a\u3044\u3088"),r.a.createElement("li",{key:"mm_13"},"unraveling the world"),r.a.createElement("li",{key:"mm_14"},"\u5909\u308f\u3063\u3066\u3057\u307e\u3063\u305f\u3000\u5909\u3048\u3089\u308c\u306a\u304b\u3063\u305f"),r.a.createElement("li",{key:"mm_15"},"2\u3064\u304c\u7d61\u307e\u308b\u30002\u4eba\u304c\u6ec5\u3073\u308b"),r.a.createElement("li",{key:"mm_16"},"\u58ca\u305b\u308b\u3000\u58ca\u305b\u306a\u3044\u3000\u72c2\u3048\u308b\u3000\u72c2\u3048\u306a\u3044"),r.a.createElement("li",{key:"mm_17"},"\u3042\u306a\u305f\u3092\u6c5a\u305b\u306a\u3044\u3088\u3000\u63fa\u308c\u305f"),r.a.createElement("li",{key:"mm_18"},"\u6b6a\u3093\u3060\u4e16\u754c\u306b\u3060\u3093\u3060\u3093\u50d5\u306f\u900f\u304d\u901a\u3063\u3066\u898b\u3048\u306a\u304f\u306a\u3063\u3066"),r.a.createElement("li",{key:"mm_19"},"\u898b\u3064\u3051\u306a\u3044\u3067\u3000\u50d5\u306e\u3053\u3068\u3092\u3000\u898b\u3064\u3081\u306a\u3044\u3067"),r.a.createElement("li",{key:"mm_20"},"\u8ab0\u304b\u304c\u4ed5\u7d44\u3093\u3060\u5b64\u72ec\u306a\u7f60\u306b\u3000\u672a\u6765\u304c\u307b\u3069\u3051\u3066\u3057\u307e\u3046\u524d\u306b"),r.a.createElement("li",{key:"mm_21"},"\u601d\u3044\u51fa\u3057\u3066\u3000\u50d5\u306e\u3053\u3068\u3092\u3000\u9bae\u3084\u304b\u306a\u307e\u307e"),r.a.createElement("li",{key:"mm_22"},"\u5fd8\u308c\u306a\u3044\u3067\u3000\u5fd8\u308c\u306a\u3044\u3067\u3000\u5fd8\u308c\u306a\u3044\u3067\u3000\u5fd8\u308c\u306a\u3044\u3067"),r.a.createElement("li",{key:"mm_23"},"\u5909\u308f\u3063\u3066\u3057\u307e\u3063\u305f\u3053\u3068\u306b paralyze"),r.a.createElement("li",{key:"mm_24"},"\u5909\u3048\u3089\u308c\u306a\u3044\u3053\u3068\u3060\u3089\u3051paradise"),r.a.createElement("li",{key:"mm_25"},"\u61b6\u3048\u3066\u3066\u3000\u50d5\u306e\u3053\u3068\u3092"),r.a.createElement("li",{key:"mm_26"},"\u6559\u3048\u3066\u3000\u6559\u3048\u3066\u3000\u50d5\u306e\u4e2d\u306b\u8ab0\u304b\u3044\u308b\u306e\uff1f")]},j=function(){return r.a.createElement("ul",{className:"Days__WeekDays"},r.a.createElement("li",null,"M"),r.a.createElement("li",null,"T"),r.a.createElement("li",null,"W"),r.a.createElement("li",null,"T"),r.a.createElement("li",null,"F"),r.a.createElement("li",null,"S"),r.a.createElement("li",null,"S"))},S=function(){var e=E.a.getCurrentMonth(),t=E.b.getCurrentYear(),a=Object(o.g)(),l=a.navYear,i=a.navMonth;l&&l>=1917&&l<=2022&&i&&(e=i,t=l);var c=Object(n.useState)([]),m=Object(f.a)(c,2),u=m[0],g=m[1],_=Object(n.useState)({month:e,year:t}),v=Object(f.a)(_,2),k=v[0],w=v[1],S=Object(n.useState)(!1),M=Object(f.a)(S,2),x=M[0],T=M[1],A=Object(n.useState)({error:!1,code:""}),L=Object(f.a)(A,2),F=L[0],I=L[1],J=Object(n.useState)([]),H=Object(f.a)(J,2),W=H[0],R=H[1];Object(n.useEffect)((function(){function e(){var e=[],t=E.a.getFirstWeekDayOfMonth(k.month,k.year)-1;return t<0&&(t=6),e.length=t,e=b.fillNewList(e,{day:" "}),R((function(t){return Object(y.a)(e)})),console.log("sFD calculated"),e}function t(){return(t=Object(h.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return T(!0),document.body.classList.add("--overflow"),I({error:!1,code:""}),e(),t.prev=4,t.next=7,b.animeScissors(k.year,E.a.getSeasonByMonth(k.month),k.month);case 7:return console.log("titlelist had updated!"),t.next=10,g((function(e){return Object(y.a)(b.titlelist)}));case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),I({error:!0,code:t.t0});case 15:document.title="malendar for ".concat(k.month," ").concat(k.year),T(!1),document.body.classList.remove("--overflow");case 18:case"end":return t.stop()}}),t,null,[[4,12]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[k]);return r.a.createElement("main",{className:"Container"},r.a.createElement(D,{monthClick:function(){var e=E.a.getRandomMonth(k);w(Object(s.a)(Object(s.a)({},k),{},{month:e})),console.log("Current season is",E.a.getSeasonByMonth(k.month))},yearClick:function(){var e=E.b.getRandomYear(k);w(Object(s.a)(Object(s.a)({},k),{},{year:e}))},date:k,changeDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("January"===k.month&&e<0){if(w({month:"December",year:parseInt(k.year)-1}),t)return parseInt(k.year)-1+"/December"}else if("December"===k.month&&e>0){if(w({month:"January",year:parseInt(k.year)+1}),t)return parseInt(k.year)+1+"/January"}else if(w(Object(s.a)(Object(s.a)({},k),{},{month:E.a.months[E.a.months.findIndex((function(e){return e===k.month}))+e]})),t)return parseInt(k.year)+"/"+E.a.months[E.a.months.findIndex((function(e){return e===k.month}))+e]},withParams:!(!l||!i)}),x||F.error?r.a.createElement(p,{error:F}):null,r.a.createElement(j,null),r.a.createElement("ol",{className:"Days"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/malendar/ongoing"},r.a.createElement(C,null)),r.a.createElement(o.a,{exact:!0,path:"/malendar/:navYear/:navMonth"},W.map((function(e,t){return r.a.createElement("li",{className:"Days__DayContainer Days__Day--filledDay",key:"Container__"+t},r.a.createElement(N,{key:"DayPlaceholder__"+t}))})),u.map((function(e,t){return r.a.createElement(O,{i:t,titles:u,key:"DayContainer__"+t})}))),r.a.createElement(o.a,{exact:!0,path:"/malendar/"},W.map((function(e,t){return r.a.createElement("li",{className:"Days__DayContainer Days__Day--filledDay",key:"Container__"+t},r.a.createElement(N,{key:"DayPlaceholder__"+t}))})),u.map((function(e,t){return r.a.createElement(O,{i:t,titles:u,key:"DayContainer__"+t,filler:!1})}))))))},M=function(){var e=Object(n.useState)(0),t=Object(f.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){!function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://malendar.herokuapp.com/anime/1").then((function(e){return e.status.toString()}));case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),r.a.createElement("main",{className:"Container About"},r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"narutomaki is a symbol of malendar"},"\ud83c\udf65"),"malendar",r.a.createElement("span",{role:"img","aria-label":"narutomaki is a symbol of malendar"},"\ud83c\udf65")),r.a.createElement("section",null,r.a.createElement("p",null,"Malendar is a web-application that allows you to see calendar for upcoming (and past) anime releases!")),r.a.createElement("section",null,"Server status: ",a))},x=(a(43),function(){return r.a.createElement("div",{className:"News"},r.a.createElement("h1",null,"What's new?"),r.a.createElement("section",null,r.a.createElement("h2",null,"07.15.2020 update"),r.a.createElement("ul",null,r.a.createElement("h3",null,"Features: "),r.a.createElement("li",null,"Implemented header navigation"),r.a.createElement("li",null,"Added weekdays and w-d marks"),r.a.createElement("li",null,"You can open strict date using links: ",r.a.createElement("br",null),r.a.createElement("small",null,"https://shrmnn.github.io/malendar/1999/January for example; ",r.a.createElement("br",null),"Doesn't work for random dates (yet)")),r.a.createElement("h3",null,"Bugfixes: "),r.a.createElement("li",null,"Fixed bug with macOS bounce scroll background color"),r.a.createElement("li",null,"Fixed bug with incorrect number of days per month"),r.a.createElement("h3",null,"In nearest future: "),r.a.createElement("li",null,"Ongoing page"),r.a.createElement("li",null,"About page"),r.a.createElement("li",null,"Slightly beautiful 404 page"))))}),T=a(19),A=(a(44),a(28)),L=a.n(A),F=r.a.memo((function(){var e=Object(T.a)(!0,"toggled"),t=Object(f.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){a?document.documentElement.classList.remove("blue"):document.documentElement.classList.add("blue")}),[a]);return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",{"aria-label":"Author of site is Alex Shermann, made in 2020",className:"Footer__Right"},"Alex Shermann [2020]"),r.a.createElement("div",{className:"Footer__Left"},r.a.createElement("p",{"aria-label":"Site is recommended for 18+",className:"marker",title:"Site is recommended for 18+"},"18+"),r.a.createElement("img",{alt:"change theme","aria-label":"change theme",height:"32",width:"32",src:L.a,onClick:function(){l(!a)},className:a?"Footer__Left--toggled":""}),r.a.createElement("a",{"aria-label":"Link to github",href:"https://github.com/shrmnn/malendar",target:"_blank",rel:"noopener noreferrer",title:"GitHub"},r.a.createElement("img",{alt:"github link","aria-label":"github link",height:"32",width:"32",className:"Footer__Left--github",src:"https://unpkg.com/simple-icons@v3/icons/github.svg"}))))})),I=(a(45),a(46),function(){var e="https://shrmnn.github.io/malendar/"+E.b.getRandomYear(2020)+"/"+E.a.getRandomMonth("January");return r.a.createElement("div",{className:"FourZeroFour"},r.a.createElement("h1",null,"404"),r.a.createElement("h2",null,"\u252c\u2534\u252c\u2534\u2524(\uff65_\u251c\u252c\u2534\u252c\u2534"),r.a.createElement("h5",null,"no jokes"),r.a.createElement("h6",null,"What about ",r.a.createElement("a",{href:e},e)))}),J=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Content"},r.a.createElement(m,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/malendar/about"},r.a.createElement(M,null)),r.a.createElement(o.a,{exact:!0,path:"/malendar/news"},r.a.createElement(x,null)),r.a.createElement(o.a,{exact:!0,path:"/malendar/ongoing"},r.a.createElement(S,null)),r.a.createElement(o.a,{exact:!0,path:"/malendar/:navYear/:navMonth"},r.a.createElement(S,null)),r.a.createElement(o.a,{exact:!0,path:"/malendar/"},r.a.createElement(S,null)),r.a.createElement(o.a,null,r.a.createElement(I,null))),r.a.createElement(F,null))))},H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/malendar",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/malendar","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()}],[[29,1,2]]]);
//# sourceMappingURL=main.87bb5c51.chunk.js.map