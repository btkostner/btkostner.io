(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{246:function(t,e,r){"use strict";var n=r(2),o=r(72),l=r(22),c=r(14),d=r(3),f=r(247),h=r(129),v=r(248),x=r(249),m=r(71),y=r(250),k=[],_=k.sort,C=d((function(){k.sort(void 0)})),w=d((function(){k.sort(null)})),A=h("sort"),D=!d((function(){if(m)return m<70;if(!(v&&v>3)){if(x)return!0;if(y)return y<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)k.push({k:t+r,v:e})}for(k.sort((function(a,b){return b.v-a.v})),r=0;r<k.length;r++)t=k[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:C||!w||!A||!D},{sort:function(t){void 0!==t&&o(t);var e=l(this);if(D)return void 0===t?_.call(e):_.call(e,t);var r,n,d=[],h=c(e.length);for(n=0;n<h;n++)n in e&&d.push(e[n]);for(r=(d=f(d,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:String(e)>String(r)?1:-1}}(t))).length,n=0;n<r;)e[n]=d[n++];for(;n<h;)delete e[n++];return e}})},247:function(t,e){var r=Math.floor,n=function(t,e){var c=t.length,d=r(c/2);return c<8?o(t,e):l(n(t.slice(0,d),e),n(t.slice(d),e),e)},o=function(t,e){for(var element,r,n=t.length,i=1;i<n;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},l=function(t,e,r){for(var n=t.length,o=e.length,l=0,c=0,d=[];l<n||c<o;)l<n&&c<o?d.push(r(t[l],e[c])<=0?t[l++]:e[c++]):d.push(l<n?t[l++]:e[c++]);return d};t.exports=n},248:function(t,e,r){var n=r(70).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},249:function(t,e,r){var n=r(70);t.exports=/MSIE|Trident/.test(n)},250:function(t,e,r){var n=r(70).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},265:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(40),r(246),r(33),r(39),r(73),{head:{title:"Nerd sh*t by Blake",link:[{hid:"rss",rel:"alternative",type:"application/rss+xml",title:"btkostner.io Blog",href:"https://btkostner.io/blog.rss.xml"},{hid:"atom",rel:"alternative",type:"application/atom+xml",title:"btkostner.io Blog",href:"https://btkostner.io/blog.atom.xml"},{hid:"feed",rel:"alternative",type:"application/feed+json",title:"btkostner.io Blog",href:"https://btkostner.io/blog.json"}]},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("blog").only(["title","description","slug","createdAt"]).where({published:!0}).sortBy("createdAt","desc").limit(10).fetch();case 3:return n=e.sent,e.next=6,r("blog").only(["tags"]).fetch();case 6:return o=e.sent,e.next=9,o.map((function(p){return p.tags})).reduce((function(a,b){return a.concat(b)})).filter((function(t,i,a){return a.indexOf(t)===i})).sort();case 9:return l=e.sent,e.abrupt("return",{posts:n,tags:l});case 11:case"end":return e.stop()}}),e)})))()},methods:{humanDate:function(t){return new Date(t).toLocaleDateString(undefined,{day:"numeric",month:"long",year:"numeric"})},humanDayOfWeek:function(t){return new Date(t).toLocaleDateString(undefined,{weekday:"long"})}}}),l=r(24),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"p-4 divide-y divide-gray-200 dark:divide-gray-600 transition motion-reduce:transition-none"},[t._m(0),t._v(" "),r("div",[r("ul",{staticClass:"divide-y divide-gray-200 dark:divide-gray-600 transition motion-reduce:transition-none"},t._l(t.posts,(function(e){return r("li",{key:e.slug,staticClass:"py-12"},[r("article",{staticClass:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"},[r("dl",[r("dt",{staticClass:"sr-only"},[t._v("Published on")]),t._v(" "),r("dd",{staticClass:"text-base leading-6 font-medium text-gray-500 dark:text-gray-400"},[r("time",{attrs:{datetime:e.createdAt}},[t._v("\n                "+t._s(t.humanDayOfWeek(e.createdAt))),r("br"),t._v("\n                "+t._s(t.humanDate(e.createdAt))+"\n              ")])])]),t._v(" "),r("div",{staticClass:"space-y-5 xl:col-span-3"},[r("div",{staticClass:"space-y-6"},[r("h2",{staticClass:"text-2xl leading-8 font-bold tracking-tight"},[r("nuxt-link",{staticClass:"text-gray-900 dark:text-gray-200",attrs:{to:"/blog/"+e.slug}},[t._v("\n                  "+t._s(e.title)+"\n                ")])],1),t._v(" "),r("div",{staticClass:"prose max-w-3xl text-gray-500 dark:text-gray-300"},[t._v("\n                "+t._s(e.description)+"\n              ")])]),t._v(" "),r("div",{staticClass:"text-base leading-6 font-medium"},[r("nuxt-link",{staticClass:"text-red-700 hover:text-red-800 dark:text-red-500 dark-hover:text-red-400",attrs:{"aria-label":'Read "'+e.title+'"',to:"/blog/"+e.slug}},[t._v("\n                Read more →\n              ")])],1)])])])})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-8 space-y-2 md:space-y-5"},[r("h1",{staticClass:"text-4xl leading-9 font-extrabold font-display text-red-700 dark:text-red-600 md:text-6xl"},[t._v("\n      Nerd sh*t by Blake\n    ")]),t._v(" "),r("p",{staticClass:"text-lg leading-7 text-gray-500 dark:text-gray-300 max-w-3xl"},[t._v("\n      Here's most of my thoughts written out. Nerdy stuff. Helpful tips I\n      don't want to lose. Random rants about technology. It's all here (or\n      soon to be.)\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);