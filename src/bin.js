#!/usr/bin/env node

var trans = require('./index.js');

var to_lang = process.argv.pop();
if (to_lang.length !== 2 || !~trans.maps.languages.indexOf(to_lang) && !~Object.keys(trans.maps.map.trans).indexOf(to_lang)) {
	throw "No language to translate to!";
}

var from_lang = process.argv.pop();
if (from_lang.length !== 2 || !~trans.maps.languages.indexOf(from_lang)) {
	throw "No language to translate from!";
}

var str = process.argv.pop();
if (!str.length ||  process.argv > 2) {
	throw "No string to translate!";
}

console.log(trans.ling(str, from_lang, to_lang));