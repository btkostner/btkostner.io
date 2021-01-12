__NUXT_JSONP__("/blog/2020-01-09-hello-world", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa){return {data:[{post:{slug:"2020-01-09-hello-world",description:"I'm starting a new personal site that includes a blog! I'm not a great writer, but hopefully my thoughts will be helpful, if not a little entertaining. This goes over a bit of what the backend.\n",title:"hello world!",image:"\u002F",published:true,tags:[E,"small-talk","web-dev"],toc:[{id:E,depth:q,text:G},{id:H,depth:q,text:I},{id:J,depth:q,text:K},{id:L,depth:q,text:M},{id:N,depth:q,text:O}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"So, after 4 years I finally updated my personal site, and I decided to include\na small blog component. It's a pretty simple website, but it has some cool\nfeatures."}]},{type:a,value:f},{type:b,tag:r,props:{id:E},children:[{type:b,tag:h,props:{href:"#nuxt",ariaHidden:l,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:G}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt is a Vue JS framework similar to Next. I've been a huge fan of it since the\nearly days, and have implemented in numerous "},{type:b,tag:h,props:{href:"https:\u002F\u002Felementary.io",rel:[v,w,x],target:y},children:[{type:a,value:"elementary"}]},{type:a,value:"\nand "},{type:b,tag:h,props:{href:"https:\u002F\u002Fsystem76.com",rel:[v,w,x],target:y},children:[{type:a,value:"System76"}]},{type:a,value:" projects."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"For the blog part, I added "},{type:b,tag:i,props:{},children:[{type:a,value:"@nuxt\u002Fcontent"}]},{type:a,value:", which is a special markdown parser\nand database system for writing any sort of content, and consuming it in your\nnuxt project. Each index page has a couple lines of javascript to lookup a list\nof posts:"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,"language-js"]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:"const"}]},{type:a,value:" posts "},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:"="}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,T,"control-flow"]},children:[{type:a,value:"await"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"$content"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'blog'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,B,m,C]},children:[{type:a,value:"only"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'title'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'description'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'slug'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,B,m,C]},children:[{type:a,value:"where"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"{"}]},{type:a,value:" published"},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:F}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"}"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,B,m,C]},children:[{type:a,value:"sortBy"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'desc'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,B,m,C]},children:[{type:a,value:"limit"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"10"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,B,m,C]},children:[{type:a,value:"fetch"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"And then everything in this blog is just a simple markdown file written like so:"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,"language-md"]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,"front-matter-block"]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,"font-matter","yaml","language-yaml"]},children:[{type:b,tag:c,props:{className:[d,Y,Z]},children:[{type:a,value:"title"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:" Hello world"},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,Y,Z]},children:[{type:a,value:"description"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:" I'm starting a blog"},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]}]},{type:a,value:"\n\nSo, after 4 years I finally updated my personal site,\nand I decided to include a small blog component.\n"}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"The real magic is when you put this all together with the amazing power of Nuxt!\nAll you have to do is run "},{type:b,tag:i,props:{},children:[{type:a,value:"nuxt generate"}]},{type:a,value:" and Nuxt will generate all of the\npages, inline the critical CSS, and output it to the "},{type:b,tag:i,props:{},children:[{type:a,value:"dist"}]},{type:a,value:" folder. All you have\nto do is publish that folder and tada! You have a static site much like the all\nthe other static site generators, but optimized to perfection, and dynamic like\na server hosted website. It doesn't even require JavaScript to view!"}]},{type:a,value:f},{type:b,tag:r,props:{id:H},children:[{type:b,tag:h,props:{href:"#tailwind",ariaHidden:l,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:I}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"It's no secret that I've been a critic of tailwind CSS since I first came across\nit. The whole utility based CSS practice is very counter intuitive from what I am used to,\nand from a lot of \"good practices\" I've seen. There are some other things that\nrub me the wrong way, but this isn't a rant article. Non the less, it's been\ngrowing in popularity, so I decided to try it out for this blog."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"First thing I noticed was how fast it was to prototype. Not knowing the classes\nfeels like I'm learning CSS all over again, but it also makes it super easy to\n"},{type:b,tag:"del",props:{},children:[{type:a,value:"steal"}]},{type:a,value:" get inspiration from other tailwind sites. This was super helpful to get\nstarted. Then it's just a matter of tweaking little by little."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Secondly, the tailwind community is growing. And it's growing fast. Tailwind\nitself has probably the most "},{type:b,tag:p,props:{},children:[{type:a,value:"developer"}]},{type:a,value:" tools compared to any other CSS\nframework."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Two of the big things are when you use the "},{type:b,tag:i,props:{},children:[{type:a,value:"@nuxtjs\u002Ftailwindcss"}]},{type:a,value:"\npackage, you can view "},{type:b,tag:i,props:{},children:[{type:a,value:"http:\u002F\u002Flocalhost:3000\u002F_tailwind\u002F"}]},{type:a,value:" for most of your\ntailwind variables. I wouldn't go so far as to call it a styleguide, but it's\nstill very helpful as a developer, or when you need to show a designer what is\navailable to them."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"The second tool (which isn't out for Nuxt yet) is\n"},{type:b,tag:h,props:{href:"https:\u002F\u002Fui-devtools.com\u002F",rel:[v,w,x],target:y},children:[{type:a,value:"ui-devtools"}]},{type:a,value:". This basically takes things back to the\nglory days of web development with Dreamweaver and Coda, but for tailwind\nclasses. It gives you a nice helpful sidebar with all of your style options, so\nyou don't even need to write classes. Just click and select what color, padding,\nmargin, etc you want."}]},{type:a,value:f},{type:b,tag:r,props:{id:J},children:[{type:b,tag:h,props:{href:"#github-actions",ariaHidden:l,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:K}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"A static site is nice and all, but if it takes human time to deploy, you're\ndoing something wrong. That's why this blog is fully automated with GitHub\nactions. It's incredibly simple actually. When I make some changes and push my\ngit branch to "},{type:b,tag:i,props:{},children:[{type:a,value:"main"}]},{type:a,value:", GitHub will fire off a deploy action that sets up node,\nbuilds the site, and pushes the build folder to the "},{type:b,tag:i,props:{},children:[{type:a,value:"gh-pages"}]},{type:a,value:" branch."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"I'm using GitHub pages to host the site, but I decided to put it behind\ncloudflare. Why you ask? Because I have more control and can adjust the cache\ntimes. This site is set to be fully cachable (even the html) at the edge. So\nanywhere in the world, you should get near "},{type:b,tag:p,props:{},children:[{type:a,value:"instant"}]},{type:a,value:" response times. It also\ngives very basic information about how much traffic this site is getting\n"},{type:b,tag:p,props:{},children:[{type:a,value:"without"}]},{type:a,value:" needing any browser tracking scripts or cookies."}]},{type:a,value:f},{type:b,tag:r,props:{id:L},children:[{type:b,tag:h,props:{href:"#whats-next",ariaHidden:l,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:M}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"As you can see, this site is "},{type:b,tag:p,props:{},children:[{type:a,value:"very"}]},{type:a,value:" basic. I'm hoping to implement a tag feature\nfor the blog so you can filter out posts a bit easier. I also want to implement\na search feature for posts. For the actual posts themselves, I want to start\ngetting into more creative posts. Add more images, maybe animations, and maybe\neven some cool unique blog post pages that end up being more story like."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"A little side tangent, but I have been reading these really interesting articles\nabout dynamically generating social cards with puppeteer screenshotting web\npages. I would love to try that out for this blog with Nuxt. The trick is\ngetting it to work while generating. When I figure that out I "},{type:b,tag:p,props:{},children:[{type:a,value:"might"}]},{type:a,value:" even make\nit a Nuxt plugin for others to use. But that is on my todo list at some point."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Outside of the blog, I'm hoping to add a projects section. This will give me a\nplace to talk about some of the design decisions I've made on my projects.\nHopefully with permission I can talk about some of the elementary and System76\nwork I do as well because that's incredibly fascinating. I also want to start\nworking on landing pages for some of those projects. I think that would be an\namazing way to grow my CSS skills."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"As for infrastructure, it's pretty basic, and I plan to keep it that way. Why\nover complicate things when I don't need to? I do see the "},{type:b,tag:p,props:{},children:[{type:a,value:"extreme"}]},{type:a,value:" caching I do\nbecoming a problem, so I'll probably end up adding another step to my GitHub\ndeploy action to clear the cloudflare cache. Aside from that, it's all finished."}]},{type:a,value:f},{type:b,tag:r,props:{id:N},children:[{type:b,tag:h,props:{href:"#the-code",ariaHidden:l,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:O}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"As with most of the stuff I work on, this website is open source and available\non "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fbtkostner\u002Fbtkostner.io",rel:[v,w,x],target:y},children:[{type:a,value:"my GitHub"}]},{type:a,value:". Please poke at it. If\nyou like this sort of thing, or have recommendations on what I should write\nabout, please "},{type:b,tag:h,props:{href:"https:\u002F\u002Ftwitter.com\u002Fnerdy_btkostner",rel:[v,w,x],target:y},children:[{type:a,value:"tweet at me"}]},{type:a,value:" and let me\nknow. Later y'all."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2020-01-09-hello-world",extension:".md",createdAt:aa,updatedAt:aa,twitterImage:"\u002Fpublic\u002Fsocial\u002F2020-01-09-hello-world-twitter.png"}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","\n","p","a","code"," ","string","true","function","(",")","em",2,"h2",-1,"icon","icon-link","nofollow","noopener","noreferrer","_blank","\n  ",".","method","property-access",",","nuxt",":","Nuxt","tailwind","Tailwind","github-actions","GitHub actions","whats-next","What's next","the-code","The code","div","nuxt-content-highlight","pre","line-numbers","keyword","operator","'createdAt'","---","\n\n","key","atrule","tag","!","2021-01-12T07:05:24.197Z")));