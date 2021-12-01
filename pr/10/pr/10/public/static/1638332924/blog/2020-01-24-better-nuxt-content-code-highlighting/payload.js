__NUXT_JSONP__("/blog/2020-01-24-better-nuxt-content-code-highlighting", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay){return {data:[{post:{slug:"2020-01-24-better-nuxt-content-code-highlighting",description:"TIL you can use shiki as the default highlighter for nuxt content. This gives you a better tokenizing than the default highlighter, and allows you to use VS Code themes for your website. Bonus points for hacking together a working dark mode!",title:"better nuxt content code highlighting",authorName:"Blake Kostner",published:true,createdAt:"2021-01-24T08:00:00.730Z",twitterImage:"\u002Fpr\u002F10\u002Fpublic\u002Fimages\u002Fblog\u002F2020-01-24-better-nuxt-content-code-highlighting-twitterImage.jpg",tags:["nuxt","TIL","tip"],toc:[{id:G,depth:H,text:I},{id:J,depth:H,text:K},{id:L,depth:x,text:M},{id:N,depth:x,text:O},{id:P,depth:x,text:Q}],body:{type:"root",children:[{type:b,tag:R,props:{id:G},children:[{type:b,tag:l,props:{href:"#tldr",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:I}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"You can use "},{type:b,tag:m,props:{},children:[{type:a,value:w}]},{type:a,value:" as your "},{type:b,tag:m,props:{},children:[{type:a,value:"@nuxt\u002Fcontent"}]},{type:a,value:" highlighter. If you do a\nquick regex replace, you can even support dark mode! You can look at this blog\nfor working code:"}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Fbtkostner\u002Fbtkostner.io\u002Ftree\u002Fmain\u002Fmodules\u002Fcontent-config.js",rel:[o,p,q],target:r},children:[{type:a,value:"The @nuxt\u002Fcontent configuration and hacks"}]}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:l,props:{href:z,rel:[o,p,q],target:r},children:[{type:a,value:"The shiki theme for base16 css variables"}]}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Fbtkostner\u002Fbtkostner.io\u002Ftree\u002Fmain\u002Fassets\u002Fstyles\u002Fcode-highlighting.css",rel:[o,p,q],target:r},children:[{type:a,value:"The base16 css variables"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:R,props:{id:J},children:[{type:b,tag:l,props:{href:"#a-longer-story",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:K}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Today I was working on dark mode support for this blog and I noticed that the\ncode blocks don't line up with my editor. This bothered me more than it probably\nshould have, so I decided to dig into it."}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Not shortly down the line, I found "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Fshikijs\u002Fshiki",rel:[o,p,q],target:r},children:[{type:a,value:w}]},{type:a,value:". This project powers the code\nhighlighting on the VS Code website, and the TypeScript website, so you know it\nmeans business."}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Integration with nuxt is pretty simple. There is even an "},{type:b,tag:l,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org\u002Fsnippets#custom-highlighter",rel:[o,p,q],target:r},children:[{type:a,value:"example in the\ndocs"}]},{type:a,value:". What was not included was how to integrate this with "},{type:b,tag:l,props:{href:"https:\u002F\u002Ftailwindcss.nuxtjs.org\u002F",rel:[o,p,q],target:r},children:[{type:a,value:"tailwind"}]},{type:a,value:" and\n"},{type:b,tag:l,props:{href:"https:\u002F\u002Fcolor-mode.nuxtjs.org\u002F",rel:[o,p,q],target:r},children:[{type:a,value:"nuxt color mode"}]},{type:a,value:". So I took a stab. The first two ideas did not work out so\nwell, but I finally found a simple way of doing it."}]},{type:a,value:e},{type:b,tag:A,props:{id:L},children:[{type:b,tag:l,props:{href:"#first-idea",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:M}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Looking at the "},{type:b,tag:l,props:{href:z,rel:[o,p,q],target:r},children:[{type:a,value:"shiki theme files"}]},{type:a,value:" it's pretty easy to see the colors. So\nmy first idea was pretty simple. Replace the colors with "},{type:b,tag:m,props:{},children:[{type:a,value:S}]},{type:a,value:" CSS\nvariables. Sadly this attempt ended pretty quickly. Turns out that shiki will\ntry to parse those values into hex codes, error out, and just return "},{type:b,tag:m,props:{},children:[{type:a,value:T}]},{type:a,value:"."}]},{type:a,value:e},{type:b,tag:A,props:{id:N},children:[{type:b,tag:l,props:{href:"#second-idea",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:O}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Alright, so that didn't work. What if we could change out how it parses the\ncolor codes? Instead of using the "},{type:b,tag:m,props:{},children:[{type:a,value:U}]},{type:a,value:" function, I tried out the\n"},{type:b,tag:m,props:{},children:[{type:a,value:"codeToThemedTokens"}]},{type:a,value:" function. This basically lets you write your own output\nfrom all of the code tokens shiki makes. It's a really cool feature that lets\nyou do crazy things, like output code blocks to svgs instead of html. Sadly,\nit ended up with the same result because color parsing happens before either of\nthose two functions. Whoops."}]},{type:a,value:e},{type:b,tag:A,props:{id:P},children:[{type:b,tag:l,props:{href:"#success",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:Q}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Finally I went back to the drawing board. I obviously needed to feed in hex\ncolor codes. At this point I already knew I wanted to use the base16 color setup\nfor my code blocks. The interesting thing about that setup, there are only 16\ncodes... So instead of writing out my colors like "},{type:b,tag:m,props:{},children:[{type:a,value:S}]},{type:a,value:", I just did\n"},{type:b,tag:m,props:{},children:[{type:a,value:T}]},{type:a,value:". Not seeing it yet? How about "},{type:b,tag:m,props:{},children:[{type:a,value:"var(--code-0F)"}]},{type:a,value:" to "},{type:b,tag:m,props:{},children:[{type:a,value:"#00000F"}]},{type:a,value:". Pretty\ncheeky eh? Now I just needed to add a simple regex, and tada, CSS variables for\ncolors!"}]},{type:a,value:e},{type:b,tag:V,props:{className:[W]},children:[{type:b,tag:X,props:{className:[w],style:Y},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:B},children:[{type:a,value:Z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" ("}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:_}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:$}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:") {"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:aa},children:[{type:a,value:"return"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" "}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:Z}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ab}]},{type:b,tag:c,props:{style:B},children:[{type:a,value:U}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ac}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:_}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:$}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ab}]},{type:b,tag:c,props:{style:B},children:[{type:a,value:"replace"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ac}]},{type:b,tag:c,props:{style:E},children:[{type:a,value:ad}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"color\\:"}]},{type:b,tag:c,props:{style:ae},children:[{type:a,value:"\\s"}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#00000("}]},{type:b,tag:c,props:{style:ae},children:[{type:a,value:"[0-9A-F]"}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:E},children:[{type:a,value:ad}]},{type:b,tag:c,props:{style:aa},children:[{type:a,value:"g"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:E},children:[{type:a,value:"'color:var(--code-0$1)'"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:F}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"And a pretty basic "},{type:b,tag:m,props:{},children:[{type:a,value:"code-highlighting.css"}]},{type:a,value:" file:"}]},{type:a,value:e},{type:b,tag:V,props:{className:[W]},children:[{type:b,tag:X,props:{className:[w],style:Y},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:af},children:[{type:a,value:"\u002F** Base16 Solarized Light Theme *\u002F"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:ag},children:[{type:a,value:":root"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ah}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ai}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#fdf6e3"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aj}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#eee8d5"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ak}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#93a1a1"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:al}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#839496"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:am}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#657b83"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:an}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#586e75"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ao}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#073642"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ap}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#002b36"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aq}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:ar}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:as}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:ar}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:at}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#b58900"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:au}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#859900"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:av}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#2aa198"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aw}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#268bd2"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ax}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#6c71c4"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ay}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#d33682"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:F}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:af},children:[{type:a,value:"\u002F** Base16 Tomorrow Dark *\u002F"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:ag},children:[{type:a,value:".dark-mode"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ah}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ai}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#1d1f21"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aj}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#282a2e"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ak}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#373b41"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:al}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#969896"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:am}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#b4b7b4"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:an}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#c5c8c6"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ao}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#e0e0e0"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ap}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#ffffff"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aq}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#cc6666"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:as}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#de935f"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:at}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#f0c674"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:au}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#b5bd68"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:av}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#8abeb7"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aw}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#81a2be"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ax}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#b294bb"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ay}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"#a3685a"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:F}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"I won't post the whole shiki theme here, but it's "},{type:b,tag:l,props:{href:z,rel:[o,p,q],target:r},children:[{type:a,value:"up on GitHub"}]},{type:a,value:" if you\nwant to see it."}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Click the lightbulb in the footer to see the final product!"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2020-01-24-better-nuxt-content-code-highlighting",extension:".md",updatedAt:"2021-12-01T04:27:14.607Z"},_img:{}}],fetch:{},mutations:void 0}}("text","element","span","color:var(--code-05)","\n","line","color:var(--code-08)","color:var(--code-0C)","  ",": ",";","a","code","p","nofollow","noopener","noreferrer","_blank","true",-1,"icon","icon-link","shiki",3,"li","https:\u002F\u002Fgithub.com\u002Fbtkostner\u002Fbtkostner.io\u002Ftree\u002Fmain\u002Fassets\u002Fshiki-themes\u002Fbase16-css-vars.json","h3","color:var(--code-0D)",", ",")","color:var(--code-0B)","}","tldr",2,"TL;DR","a-longer-story","A longer story","first-idea","First idea","second-idea","Second idea","success","Success","h2","var(--code-00)","#000000","codeToHtml","div","nuxt-content-highlight","pre","background-color:var(--code-00)","highlighter","rawCode","lang","color:var(--code-0E)","    .","(","\u002F","color:var(--code-09)","color:var(--code-03); font-style: italic","color:var(--code-09); font-style: italic"," {","--code-00","--code-01","--code-02","--code-03","--code-04","--code-05","--code-06","--code-07","--code-08","#cb4b16","--code-09","--code-0A","--code-0B","--code-0C","--code-0D","--code-0E","--code-0F")));