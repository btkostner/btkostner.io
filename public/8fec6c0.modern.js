(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{218:function(t,e,n){"use strict";var o=n(13),r=n(20),l=n(4),c=n(14),d=n(17),m=n(24).f,h=n(150),y=l.Symbol;if(r&&"function"==typeof y&&(!("description"in y.prototype)||void 0!==y().description)){var v={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new y(t):void 0===t?y():y(t);return""===t&&(v[e]=!0),e};h(f,y);var w=f.prototype=y.prototype;w.constructor=f;var x=w.toString,k="Symbol(test)"==String(y("test")),_=/^Symbol\((.*)\)[^)]+$/;m(w,"description",{configurable:!0,get:function(){var symbol=d(this)?this.valueOf():this,t=x.call(symbol);if(c(v,symbol))return"";var desc=k?t.slice(7,-1):t.replace(_,"$1");return""===desc?void 0:desc}}),o({global:!0,forced:!0},{Symbol:f})}},227:function(t,e,n){"use strict";n.r(e);var o,r=n(2),l=(n(218),{head(){return{title:this.post.title,meta:[{hid:"description",name:"description",content:this.post.description},{hid:"twitter:title",name:"twitter:title",content:this.post.title},{hid:"twitter:description",name:"twitter:description",content:this.post.description},{hid:"twitter:image",name:"twitter:image",content:"https://btkostner.io".concat(this.post.twitterImage)},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.post.title},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:site",name:"twitter:site",content:"@nerdy_btkostner"}],link:[{hid:"rss",rel:"alternative",type:"application/rss+xml",title:"btkostner.io Blog",href:"https://btkostner.io/blog.rss.xml"},{hid:"atom",rel:"alternative",type:"application/atom+xml",title:"btkostner.io Blog",href:"https://btkostner.io/blog.atom.xml"},{hid:"feed",rel:"alternative",type:"application/feed+json",title:"btkostner.io Blog",href:"https://btkostner.io/blog.json"}]}},asyncData:(o=Object(r.a)((function*(t){var{$content:e,error:n,params:o}=t;return{post:yield e("blog",o.slug).where({published:!0}).fetch().catch((t=>n({statusCode:404,message:"Blog Post Not Found"})))}})),function(t){return o.apply(this,arguments)}),methods:{humanDate:t=>new Date(t).toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"long",year:"numeric"})}}),c=n(11),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"p-4 divide-y divide-gray-200 dark:divide-gray-700 max-w-3xl mx-auto xl:max-w-5xl"},[n("div",{staticClass:"py-8 space-y-2 md:space-y-5"},[n("h1",{staticClass:"text-4xl leading-9 font-extrabold font-display text-gray-900 dark:text-gray-100 md:text-6xl"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),n("p",{staticClass:"text-lg leading-7 text-gray-500 dark:text-gray-400"},[n("span",{staticClass:"sr-only"},[t._v("Published")]),t._v(" "+t._s(t.humanDate(t.post.createdAt))+"\n    ")])]),t._v(" "),n("article",{staticClass:"prose rose-lg lg:prose-xl dark:prose-dark transition motion-reduce:transition-none"},[n("nuxt-content",{attrs:{document:t.post}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);