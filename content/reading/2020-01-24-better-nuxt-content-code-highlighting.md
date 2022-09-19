---
title: better nuxt content code highlighting
description: >
  TIL you can use shiki as the default highlighter for nuxt content. This gives
  you a better tokenizing than the default highlighter, and allows you to use VS
  Code themes for your website. Bonus points for hacking together a working dark
  mode!
tags:
  - nuxt
  - til
  - tip
authorName: Blake Kostner
published: true
createdAt: 2021-01-24T08:00:00.730Z
---

## TL;DR

You can use `shiki` as your `@nuxt/content` highlighter. If you do a
quick regex replace, you can even support dark mode! You can look at this blog
for working code:

- [The @nuxt/content configuration and hacks][1]
- [The shiki theme for base16 css variables][2]
- [The base16 css variables][3]

## A longer story

Today I was working on dark mode support for this blog and I noticed that the
code blocks don't line up with my editor. This bothered me more than it probably
should have, so I decided to dig into it.

Not shortly down the line, I found [shiki][4]. This project powers the code
highlighting on the VS Code website, and the TypeScript website, so you know it
means business.

Integration with nuxt is pretty simple. There is even an [example in the
docs][5]. What was not included was how to integrate this with [tailwind][7] and
[nuxt color mode][6]. So I took a stab. The first two ideas did not work out so
well, but I finally found a simple way of doing it.

### First idea

Looking at the [shiki theme files][2] it's pretty easy to see the colors. So
my first idea was pretty simple. Replace the colors with `var(--code-00)` CSS
variables. Sadly this attempt ended pretty quickly. Turns out that shiki will
try to parse those values into hex codes, error out, and just return `#000000`.

### Second idea

Alright, so that didn't work. What if we could change out how it parses the
color codes? Instead of using the `codeToHtml` function, I tried out the
`codeToThemedTokens` function. This basically lets you write your own output
from all of the code tokens shiki makes. It's a really cool feature that lets
you do crazy things, like output code blocks to svgs instead of html. Sadly,
it ended up with the same result because color parsing happens before either of
those two functions. Whoops.

### Success

Finally I went back to the drawing board. I obviously needed to feed in hex
color codes. At this point I already knew I wanted to use the base16 color setup
for my code blocks. The interesting thing about that setup, there are only 16
codes... So instead of writing out my colors like `var(--code-00)`, I just did
`#000000`. Not seeing it yet? How about `var(--code-0F)` to `#00000F`. Pretty
cheeky eh? Now I just needed to add a simple regex, and tada, CSS variables for
colors!

```js
highlighter (rawCode, lang) {
  return highlighter
    .codeToHtml(rawCode, lang)
    .replace(/color\:\s#00000([0-9A-F])/g, 'color:var(--code-0$1)')
}
```

And a pretty basic `code-highlighting.css` file:

```css
/** Base16 Solarized Light Theme */
:root {
  --code-00: #fdf6e3;
  --code-01: #eee8d5;
  --code-02: #93a1a1;
  --code-03: #839496;
  --code-04: #657b83;
  --code-05: #586e75;
  --code-06: #073642;
  --code-07: #002b36;

  --code-08: #cb4b16;
  --code-09: #cb4b16;
  --code-0A: #b58900;
  --code-0B: #859900;
  --code-0C: #2aa198;
  --code-0D: #268bd2;
  --code-0E: #6c71c4;
  --code-0F: #d33682;
}

/** Base16 Tomorrow Dark */
.dark-mode {
  --code-00: #1d1f21;
  --code-01: #282a2e;
  --code-02: #373b41;
  --code-03: #969896;
  --code-04: #b4b7b4;
  --code-05: #c5c8c6;
  --code-06: #e0e0e0;
  --code-07: #ffffff;

  --code-08: #cc6666;
  --code-09: #de935f;
  --code-0A: #f0c674;
  --code-0B: #b5bd68;
  --code-0C: #8abeb7;
  --code-0D: #81a2be;
  --code-0E: #b294bb;
  --code-0F: #a3685a;
}
```

I won't post the whole shiki theme here, but it's [up on GitHub][2] if you
want to see it.

Click the lightbulb in the footer to see the final product!

[1]: https://github.com/btkostner/btkostner.io/tree/main/modules/content-config.js
[2]: https://github.com/btkostner/btkostner.io/tree/main/assets/shiki-themes/base16-css-vars.json
[3]: https://github.com/btkostner/btkostner.io/tree/main/assets/styles/code-highlighting.css
[4]: https://github.com/shikijs/shiki
[5]: https://content.nuxtjs.org/snippets#custom-highlighter
[6]: https://color-mode.nuxtjs.org/
[7]: https://tailwindcss.nuxtjs.org/
