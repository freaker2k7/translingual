# Translingual - Multilingual transliteration - phonetic visualization using transcription.


[![npm version](https://badge.fury.io/js/translingual.svg)](https://badge.fury.io/js/translingual)
[![node version](https://img.shields.io/node/v/translingual)](https://www.npmjs.com/package/translingual)
[![npm downloads](https://img.shields.io/npm/dw/translingual.svg)](https://www.npmjs.com/package/translingual)
[![Gitter](https://badges.gitter.im/freaker2k7-translingual/community.svg)](https://gitter.im/freaker2k7-translingual/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/freaker2k7/translingual.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/freaker2k7/translingual/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/freaker2k7/translingual.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/freaker2k7/translingual/context:javascript)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/freaker2k7/translingual/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/freaker2k7/translingual/?branch=master)
[![License](https://img.shields.io/badge/license-Apache-brightgreen.svg)](https://opensource.org/licenses/Apache-2.0)
[![Bungle size](https://img.shields.io/bundlephobia/minzip/translingual)](https://bundlephobia.com/result?p=translingual)
[![Repo size](https://img.shields.io/github/repo-size/freaker2k7/translingual)](https://github.com/freaker2k7/translingual)
[![Build status](https://ci.appveyor.com/api/projects/status/rwbo4jvqp4032boj/branch/master?svg=true)](https://ci.appveyor.com/project/freaker2k7/translingual/branch/master)
[![Beerpay](https://beerpay.io/freaker2k7/translingual/badge.svg?style=flat)](https://beerpay.io/freaker2k7/translingual)
[![Liberapay](http://img.shields.io/liberapay/receives/evgy.svg?logo=liberapay)](https://liberapay.com/evgy/)
[![GitHub stars](https://img.shields.io/github/stars/freaker2k7/translingual.svg?style=social&label=Stars)](https://github.com/freaker2k7/translingual/stargazers/)
<!-- [![Known Vulnerabilities](https://snyk.io//test/github/freaker2k7/translingual/badge.svg?targetFile=package.json)](https://snyk.io//test/github/freaker2k7/translingual) -->


<center>
  <img src="https://i.imgur.com/L508wvt.jpg" alt="Translingual Logo" title="Translingual Logo" style="box-shadow: none;" style="max-width: 100%; border: 0; box-shadow: none;" height="300">
</center>


## Install
`npm i -g translingual`


## Usage
Via bash:
```bash
$ trans 'Hello world!' en ru
```

Or as code:
```javascript
const trans = require('translingual');

var result = trans.lingualate('Hello world!', 'en', 'ru');
console.log( result ); // This will print: "Эллoу Вoурлд!"
```

## Spported Languages
* en
* he
* ru
* es
* de
* el
* sr
* fr
* ua

## Roadmap
* Add more languages.

## License
APACHE-2.0 (see the LICENSE files in the repository).

## Donate
Have fun and if you like it, leave a tip for a cup of **beer** <a href="https://beerpay.io/freaker2k7/translingual">
  <img style="display: inline-block; vertical-align: text-bottom;" alt="Beerpay" src="https://beerpay.io/freaker2k7/translingual/badge.svg?style=beer">
</a>
or directly donate to our cause <a href="https://liberapay.com/evgy/donate">
  <img style="display: inline-block; vertical-align: text-bottom;" alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg">
</a>