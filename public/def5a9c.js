(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(t,e,n){"use strict";n.r(e);n(62),n(61),n(91),n(29),n(119),n(33);var r=n(5),o={head:{title:"Nerd sh*t by Blake",link:[{hid:"rss",rel:"alternative",type:"application/rss+xml",title:"btkostner.io Blog",href:"https://btkostner.io/blog.rss.xml"},{hid:"atom",rel:"alternative",type:"application/atom+xml",title:"btkostner.io Blog",href:"https://btkostner.io/blog.atom.xml"},{hid:"feed",rel:"alternative",type:"application/feed+json",title:"btkostner.io Blog",href:"https://btkostner.io/blog.json"}]},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("blog").only(["title","description","slug","createdAt"]).where({published:!0}).sortBy("createdAt","desc").limit(10).fetch();case 3:return r=e.sent,e.next=6,n("blog").only(["tags"]).fetch();case 6:return o=e.sent,e.next=9,o.map((function(p){return p.tags})).reduce((function(a,b){return a.concat(b)})).filter((function(t,i,a){return a.indexOf(t)===i})).sort();case 9:return l=e.sent,e.abrupt("return",{posts:r,tags:l});case 11:case"end":return e.stop()}}),e)})))()},methods:{humanDate:function(t){return new Date(t).toLocaleDateString(void 0,{day:"numeric",month:"long",year:"numeric"})},humanDayOfWeek:function(t){return new Date(t).toLocaleDateString(void 0,{weekday:"long"})}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"p-4 divide-y divide-gray-200 dark:divide-gray-600 transition motion-reduce:transition-none"},[t._m(0),t._v(" "),n("div",[n("ul",{staticClass:"divide-y divide-gray-200 dark:divide-gray-600 transition motion-reduce:transition-none"},t._l(t.posts,(function(e){return n("li",{key:e.slug,staticClass:"py-12"},[n("article",{staticClass:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"},[n("dl",[n("dt",{staticClass:"sr-only"},[t._v("Published on")]),t._v(" "),n("dd",{staticClass:"text-base leading-6 font-medium text-gray-500 dark:text-gray-400"},[n("time",{attrs:{datetime:e.createdAt}},[t._v("\n                "+t._s(t.humanDayOfWeek(e.createdAt))),n("br"),t._v("\n                "+t._s(t.humanDate(e.createdAt))+"\n              ")])])]),t._v(" "),n("div",{staticClass:"space-y-5 xl:col-span-3"},[n("div",{staticClass:"space-y-6"},[n("h2",{staticClass:"text-2xl leading-8 font-bold tracking-tight"},[n("nuxt-link",{staticClass:"text-gray-900 dark:text-gray-200",attrs:{to:"/blog/"+e.slug}},[t._v("\n                  "+t._s(e.title)+"\n                ")])],1),t._v(" "),n("div",{staticClass:"prose max-w-3xl text-gray-500 dark:text-gray-300"},[t._v("\n                "+t._s(e.description)+"\n              ")])]),t._v(" "),n("div",{staticClass:"text-base leading-6 font-medium"},[n("nuxt-link",{staticClass:"text-red-700 hover:text-red-800 dark:text-red-500 dark-hover:text-red-400",attrs:{"aria-label":'Read "'+e.title+'"',to:"/blog/"+e.slug}},[t._v("\n                Read more →\n              ")])],1)])])])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-8 space-y-2 md:space-y-5"},[e("h1",{staticClass:"text-4xl leading-9 font-extrabold font-display text-red-700 dark:text-red-600 md:text-6xl"},[this._v("\n      Nerd sh*t by Blake\n    ")]),this._v(" "),e("p",{staticClass:"text-lg leading-7 text-gray-500 dark:text-gray-300 max-w-3xl"},[this._v("\n      Here's most of my thoughts written out. Nerdy stuff. Helpful tips I\n      don't want to lose. Random rants about technology. It's all here (or\n      soon to be.)\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);