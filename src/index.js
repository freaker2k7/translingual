var maps = require('./maps.js');


var tWord1 = function(word, from_lang, to_lang) {
	// console.debug(word, maps.map[from_lang][to_lang]);
	
	for (var k in maps.map[from_lang][to_lang]) {
		// console.debug('k-->', k, word, maps.map[from_lang][to_lang][k]);
		if (maps.map[from_lang][to_lang].hasOwnProperty(k)) {
			word = word.replace(new RegExp(k, 'g'), maps.map[from_lang][to_lang][k]);
		}
	}
	
	return word;
};

var tWordN = function(word, from_lang, to_lang, jumpTo) {
	if (!word) {
		return '';
	}
	
	jumpTo = jumpTo || 0;
	var tmp, parts, keys = Object.keys(maps.map[from_lang][to_lang]);
	
	for (; jumpTo < keys.length; ++jumpTo) {
		if (tmp = word.match(new RegExp(keys[jumpTo], 'ig'))) {
			try {
				tmp[0] = tmp[0].replace(/([\()\[\]])/g, "\\$1");
				parts = word.split(new RegExp('(' + tmp[0] + ')')).filter(function(v) {
					return v;
				});
				
				// console.debug('in-->', tmp, word, parts);
				
				for (var i = 0; i < parts.length; ++i) {
					if (parts[i] === tmp[0]) {
						// console.debug('in-->', keys[jumpTo]);
						parts[i] = parts[i].replace(new RegExp(keys[jumpTo], 'ig'), maps.map[from_lang][to_lang][keys[jumpTo]]);
					} else {
						parts[i] = tWordN(parts[i], from_lang, to_lang, jumpTo + 1);
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

var find_bridge = function(str, from_lang, to_lang) {
	var found_bridge = false;
	
	// console.debug(str, from_lang, to_lang, maps.languages);
	
	for (var i = 0; i < maps.languages.length && found_bridge === false; ++i) {
		found_bridge = !!maps.map[maps.languages[i]][to_lang] && maps.languages[i];
	}
	
	if (found_bridge) {
		return lingualate_helper(lingualate_helper(str, from_lang, found_bridge), found_bridge, to_lang);
	}
	return '';
};

var tsplit = function(str) {
	return str.split(/[\s\-]/).filter(function(v) { return typeof v !== 'undefined' && v.length; })
};

var lingualate_helper = function(str, from_lang, to_lang) {
	// return str;
	// console.debug('rrr!!!', str, from_lang, to_lang);
	if (!str || !maps.map[from_lang]) {
		return str || '';
	}
	
	if (!maps.map[from_lang][to_lang]) {
		return find_bridge(str, from_lang, to_lang);
	}
	
	var words = tsplit(str),
		func = ['ru', 'uk', 'sr', 'el', 'trans'].indexOf(from_lang) !== -1 ? tWord1 : tWordN;
	
	for (var i=0; i < words.length; ++i) {
		words[i] = func(words[i], from_lang, to_lang);
	}
	
	return words.join(' ');
};

var up = function(str) {
	return tsplit(str).map(function(v) {
		return v.substr(0, 1).toUpperCase() + v.substr(1);
	}).join(' ');
};

var lingualate = function(str, from_lang, to_lang) {
	return up(lingualate_helper(str.toLowerCase(), from_lang, to_lang));
};


module.exports = {
	maps: maps,
	ling: lingualate
};