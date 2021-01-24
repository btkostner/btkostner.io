---

title: dynamic social images with Nuxt and Tailwind

published: false
createdAt: 2021-01-10T08:00:00.730Z

description: |
  Create dynamic social media previews with a stack you are already using! Nuxt
  static generation and Tailwind CSS!

tags:
  - hacking
  - nuxt
  - tailwind
  - web-dev

---

I'm lazy. And I'm not a great designer. So when I started to blog about things,
I wanted to automate as much as possible. Enter dynamic generated social media
preview images. Obviously I would still need to design a template, so I decided
to use the same stack I know and love and build it right into my site!

## The good

- it's dynamic, do nothing awesomeness
- it uses tailwind to design em
- you get hot reloading when developing them

## The bad

- could be slow
- the code is kinda messy, not going to lie

## Improvements

- cache images between builds
- hash the images

## Things I'm not sure on yet

Nuxt hooks are kinda hard to understand. Content from `@nuxt/content` is
generated before the server even starts, so you need to create the public url
early so you can insert it into the content doc. Secondly, I couldn't find a
hook for when the server is started and the build is finished.

NEED TO UPDATE / investigate
