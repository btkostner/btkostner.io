(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{240:function(t,e,n){"use strict";n.r(e);var r=n(4),l={head:{title:"TILs by Blake"},asyncData:t=>Object(r.a)((function*(){var{$content:e}=t;return{tils:yield e("tils").sortBy("createdAt","desc").limit(10).fetch()}}))(),methods:{humanDate:t=>new Date(t).toLocaleDateString(undefined,{day:"numeric",month:"long",weekday:"long",year:"numeric"})}},d=n(14),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"p-4 transition motion-reduce:transition-none"},[t._m(0),t._v(" "),n("div",{staticClass:"block max-w-3xl mx-auto"},[n("ul",{staticClass:"divide-y divide-gray-200 dark:divide-gray-600 transition motion-reduce:transition-none"},t._l(t.tils,(function(e){return n("li",{key:e.slug,staticClass:"py-12"},[n("article",{staticClass:"space-y-2"},[n("dl",[n("dt",{staticClass:"sr-only"},[t._v("Learned on")]),t._v(" "),n("dd",{staticClass:"text-base leading-6 font-medium text-gray-500 dark:text-gray-400"},[n("time",{attrs:{datetime:e.createdAt}},[t._v("\n                "+t._s(t.humanDate(e.createdAt))+"\n              ")])])]),t._v(" "),n("div",{staticClass:"space-y-5 xl:col-span-3"},[n("div",{staticClass:"space-y-6"},[n("h2",{staticClass:"text-2xl leading-8 font-bold tracking-tight"},[n("nuxt-link",{staticClass:"text-gray-900 dark:text-gray-200",attrs:{to:"/til/"+e.slug}},[t._v("\n                  "+t._s(e.title)+"\n                ")])],1),t._v(" "),n("div",{staticClass:"prose max-w-full dark:prose-dark transition motion-reduce:transition-none"},[n("nuxt-content",{attrs:{document:e}})],1)])])])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-8 space-y-4 md:space-y-5"},[n("h1",{staticClass:"text-6xl leading-9 font-extrabold font-display text-center text-red-700 dark:text-red-600 md:text-8xl"},[t._v("\n      TIL\n    ")]),t._v(" "),n("p",{staticClass:"text-lg leading-7 text-center text-gray-500 dark:text-gray-300"},[t._v("\n      Today I learned something interesting,"),n("br"),t._v("and now it's saved here forever.\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);