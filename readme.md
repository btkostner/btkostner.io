# btkostner.io

This is the webpage of Blake Kostner

## Table of contents

- [Quick Start](#quick-start)
- [What is included](#what-is-included)
- [Versioning](#versioning)
- [Authors](#authors)
- [Copyright and license](#copyright-and-license)

## Quick Start

This is currently a basic site, just html (in the form of jade) and css
(in the form of stylus css).

Dependencies:
```
$ npm install jade stylus nib -g
```

Compiling:
```
$ stylus main.styl -u nib
$ jade index.jade
```

## What is included

This is a basic site, so the obvious things are here. Html `index.jade` for the
single jade web page, and `main.styl` for the stylus css.

## Versioning

btkostner.io is maintained under the Semantic Versioning guidelines.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

- Breaking backward compatibility **bumps the major** while resetting minor and patch
- New additions without breaking backward compatibility **bumps the minor** while resetting the patch
- Bug fixes and misc changes **bumps only the patch**

For more information on SemVer, please visit <http://semver.org/>.

## Authors

**Blake Kostner**
- <btkostner@gmail.com>
- <http://plus.google.com/u/0/+BlakeKostner>
- <http://github.com/btkostner>

## Copyright and license

Original code released under [the MIT license](LICENSE)
