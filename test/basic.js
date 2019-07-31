var assert = require('assert');

var trans = require('../src/index.js');

assert.strictEqual(trans.ling('Hello', 'en', 'ru'), 'Эллoу');
assert.strictEqual(trans.ling('Hello', 'en', 'he'), 'ללו');