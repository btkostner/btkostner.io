<div align="center">
  <h1 align="center"><center>btkostner.io</center></h1>
  <h3 align="center"><center>Personal Website</center></h3>
  <br>
  <br>
</div>

<p align="center">
  <img src="https://github.com/btkostner/btkostner.io/workflows/Deploy/badge.svg" alt="Deploy">
</p>

---

This repository is my personal website built with
[Nuxt.JS](https://nuxtjs.org/), [Tailwind CSS](https://tailwindcss.com/), and
[Font Awesome](https://fontawesome.com/).

## Running

First off, you will need a font awesome pro key to install the packages. The
easiest way to continue is to set your `FONTAWESOME_NPM_AUTH_TOKEN` environment
variable.

Second, you will need `node` and `npm` installed. The official node website has
[good instructions for installing](https://nodejs.org/en/download/package-manager/),
or you can use most Linux distribution versions.

Next, just run `npm ci` to install the packages.

And finally, do `npm start` to start the development server. You should now be
able to view the site on [`localhost:3000`](http://localhost:3000).

## Deploying

This repository is setup with continuous integration and deployment. If you want
to deploy your changes, all you need to do is open a PR to the main branch.
Once your PR is accepted and merged in, it will automatically be deployed.
