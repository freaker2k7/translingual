var maps = require('./maps.js');

var Trans = function() {
	var that = this;
	
	this.maps = maps;
	
	this.tWord1 = function translingualate(word, from_lang, to_lang) {
		// console.debug(word, that.maps.map[from_lang][to_lang]);
		
		for (var k in that.maps.map[from_lang][to_lang]) {
			// console.debug('k-->', k, word, that.maps.map[from_lang][to_lang][k]);
			if (that.maps.map[from_lang][to_lang].hasOwnProperty(k)) {
				word = word.replace(new RegExp(k, 'g'), that.maps.map[from_lang][to_lang][k]);
			}
		}
		
		return word;
	};
	
	this.tWordN = function translingualate(word, from_lang, to_lang, jumpTo) {
		if (!word) {
			return '';
		}
		
		jumpTo = jumpTo || 0;
		var tmp, parts, keys = Object.keys(that.maps.map[from_lang][to_lang]);
		
		for (; jumpTo < keys.length; ++jumpTo) {
			if (tmp = word.match(new RegExp(keys[jumpTo], 'ig'))) {
				try {
					tmp[0] = tmp[0].replace(/([\()\[\]])/g, "\\$1");
					parts = word.split(new RegExp('(' + tmp[0] + ')')).filter(function (v) {
						return v;
					});
					
					// console.debug('in-->', tmp, word, parts);
					
					for (var i = 0; i < parts.length; ++i) {
						if (parts[i] === tmp[0]) {
							// console.debug('in-->', keys[jumpTo]);
							parts[i] = parts[i].replace(new RegExp(keys[jumpTo], 'ig'), that.maps.map[from_lang][to_lang][keys[jumpTo]]);
						} else {
							parts[i] = that.tWordN(parts[i], from_lang, to_lang, jumpTo + 1);
						}
					}
					word = parts.join('');
				} catch(e) {
					console.error('Failed transliting:', keys[jumpTo], e, jumpTo, tmp, word, from_lang, to_lang);
				}
				
				break;
			}
		}
		
		return word;
	};
	
	this.find_bridge = function (str, from_lang, to_lang) {
		var found_bridge = false;
		
		// console.debug(str, from_lang, to_lang, that.maps.languages);
		
		for (var i = 0; i < that.maps.languages.length && found_bridge === false; ++i) {
			found_bridge = !!that.maps.map[that.maps.languages[i]][to_lang] && that.maps.languages[i];
		}
		
		if (found_bridge) {
			return that.lingualate_helper(that.lingualate_helper(str, from_lang, found_bridge), found_bridge, to_lang);
		}
		return '';
	};
	
	this.tsplit = function (str) {
		return str.split(/[\s\-]/).filter(function (v) { return typeof v !== 'undefined' && v.length; })
	};
	
	this.lingualate_helper = function (str, from_lang, to_lang) {
		// return str;
		// console.debug('rrr!!!', str, from_lang, to_lang);
		if (!str || !that.maps.map[from_lang]) {
			return str || '';
		}
		
		if (!that.maps.map[from_lang][to_lang]) {
			return that.find_bridge(str, from_lang, to_lang);
		}
		
		var words = that.tsplit(str),
			func = ['ru', 'ua', 'sr', 'el', 'trans'].indexOf(from_lang) !== -1 ? that.tWord1 : that.tWordN;
		
		for (var i=0; i < words.length; ++i) {
			words[i] = func(words[i], from_lang, to_lang);
		}
		
		return words.join(' ');
	};
	
	this.up = function (str) {
		return that.tsplit(str).map(function (v) {
			return v.substr(0, 1).toUpperCase() + v.substr(1);
		}).join(' ');
	};
	
	this.lingualate = function (str, from_lang, to_lang) {
		return that.up(that.lingualate_helper(str.toLowerCase(), from_lang, to_lang));
	};
};

module.exports = new Trans();