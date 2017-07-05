# mat-autoprefixer

## Installation

```sh
npm install --save-dev mat-autoprefixer
```

## Basic Usage

```javascript
var mat   = require('mat')
var less  = require('mat-less')
var autoprefixer = require('mat-autoprefixer')

mat.task('less', function () {
  mat.url([/.*\.css/])
    .rewrite([
      [/\.css/g, '.less']
    ])
    .use(less({sourceMap: {sourceMapFileInline: true}}))
    .use(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
})
```
## Options

See the Autoprefixer [options](https://github.com/postcss/autoprefixer#options).
