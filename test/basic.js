var assert = require('assert');

var trans = require('./index.js');

assert.strictEqual(trans.lingualate('Hello', 'en', 'ru'), 'Эллoу');
assert.strictEqual(trans.lingualate('Hello', 'en', 'he'), 'ללו');