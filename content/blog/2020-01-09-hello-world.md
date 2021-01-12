---

title: hello world!

published: true
createdAt: 2021-01-09T08:00:00.730Z

twitterImage: /_public/social/twitter

description: >
  I'm starting a new personal site that includes a blog! I'm not a great writer,
  but hopefully my thoughts will be helpful, if not a little entertaining. This
  goes over a bit of what the backend.

tags:
  - nuxt
  - small-talk
  - web-dev

---

So, after 4 years I finally updated my personal site, and I decided to include
a small blog component. It's a pretty simple website, but it has some cool
features.

## Nuxt

Nuxt is a Vue JS framework similar to Next. I've been a huge fan of it since the
early days, and have implemented in numerous [elementary](https://elementary.io)
and [System76](https://system76.com) projects.

For the blog part, I added `@nuxt/content`, which is a special markdown parser
and database system for writing any sort of content, and consuming it in your
nuxt project. Each index page has a couple lines of javascript to lookup a list
of posts:

```js
const posts = await $content('blog')
  .only(['title', 'description', 'slug', 'createdAt'])
  .where({ published: true })
  .sortBy('createdAt', 'desc')
  .limit(10)
  .fetch()
```

And then everything in this blog is just a simple markdown file written like so:

```md
---

title: Hello world!
description: I'm starting a blog!

---

So, after 4 years I finally updated my personal site,
and I decided to include a small blog component.
```

The real magic is when you put this all together with the amazing power of Nuxt!
All you have to do is run `nuxt generate` and Nuxt will generate all of the
pages, inline the critical CSS, and output it to the `dist` folder. All you have
to do is publish that folder and tada! You have a static site much like the all
the other static site generators, but optimized to perfection, and dynamic like
a server hosted website. It doesn't even require JavaScript to view!

## Tailwind

It's no secret that I've been a critic of tailwind CSS since I first came across
it. The whole utility based CSS practice is very counter intuitive from what I am used to,
and from a lot of "good practices" I've seen. There are some other things that
rub me the wrong way, but this isn't a rant article. Non the less, it's been
growing in popularity, so I decided to try it out for this blog.

First thing I noticed was how fast it was to prototype. Not knowing the classes
feels like I'm learning CSS all over again, but it also makes it super easy to
~steal~ get inspiration from other tailwind sites. This was super helpful to get
started. Then it's just a matter of tweaking little by little.

Secondly, the tailwind community is growing. And it's growing fast. Tailwind
itself has probably the most _developer_ tools compared to any other CSS
framework.

Two of the big things are when you use the `@nuxtjs/tailwindcss`
package, you can view `http://localhost:3000/_tailwind/` for most of your
tailwind variables. I wouldn't go so far as to call it a styleguide, but it's
still very helpful as a developer, or when you need to show a designer what is
available to them.

The second tool (which isn't out for Nuxt yet) is
[ui-devtools](https://ui-devtools.com/). This basically takes things back to the
glory days of web development with Dreamweaver and Coda, but for tailwind
classes. It gives you a nice helpful sidebar with all of your style options, so
you don't even need to write classes. Just click and select what color, padding,
margin, etc you want.

## GitHub actions

A static site is nice and all, but if it takes human time to deploy, you're
doing something wrong. That's why this blog is fully automated with GitHub
actions. It's incredibly simple actually. When I make some changes and push my
git branch to `main`, GitHub will fire off a deploy action that sets up node,
builds the site, and pushes the build folder to the `gh-pages` branch.

I'm using GitHub pages to host the site, but I decided to put it behind
cloudflare. Why you ask? Because I have more control and can adjust the cache
times. This site is set to be fully cachable (even the html) at the edge. So
anywhere in the world, you should get near _instant_ response times. It also
gives very basic information about how much traffic this site is getting
_without_ needing any browser tracking scripts or cookies.

## What's next

As you can see, this site is _very_ basic. I'm hoping to implement a tag feature
for the blog so you can filter out posts a bit easier. I also want to implement
a search feature for posts. For the actual posts themselves, I want to start
getting into more creative posts. Add more images, maybe animations, and maybe
even some cool unique blog post pages that end up being more story like.

A little side tangent, but I have been reading these really interesting articles
about dynamically generating social cards with puppeteer screenshotting web
pages. I would love to try that out for this blog with Nuxt. The trick is
getting it to work while generating. When I figure that out I _might_ even make
it a Nuxt plugin for others to use. But that is on my todo list at some point.

Outside of the blog, I'm hoping to add a projects section. This will give me a
place to talk about some of the design decisions I've made on my projects.
Hopefully with permission I can talk about some of the elementary and System76
work I do as well because that's incredibly fascinating. I also want to start
working on landing pages for some of those projects. I think that would be an
amazing way to grow my CSS skills.

As for infrastructure, it's pretty basic, and I plan to keep it that way. Why
over complicate things when I don't need to? I do see the _extreme_ caching I do
becoming a problem, so I'll probably end up adding another step to my GitHub
deploy action to clear the cloudflare cache. Aside from that, it's all finished.

## The code

As with most of the stuff I work on, this website is open source and available
on [my GitHub](https://github.com/btkostner/btkostner.io). Please poke at it. If
you like this sort of thing, or have recommendations on what I should write
about, please [tweet at me](https://twitter.com/nerdy_btkostner) and let me
know. Later y'all.
