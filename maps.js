// Regex for syllable - [^aeiouy]*[aeiouy]+

maps = {
	trans: {
		// https://en.wikipedia.org/wiki/Help:IPA
		he: {
			'ˌ': '',
			'\\.': '"',
			'ˈ': '',
			'ʔ': '',
			'˜': '',

			'ʎ': 'יה',
			'ɦ': 'ה',
			'je': 'י',
			'oʊ': 'ו',
			'juː?': 'יו',
			'aɪ': 'י',
			'ɔɪ': 'ו',
			'eɪ': 'י',

			'œ': 'וי',
			'y': 'ו',
			'ə': '',
			'о': 'ו',
			'а': '',
			'^ə': 'א',
			'e': '',
			'ɛ': '',
			'æ': '',
			'ɔː?': 'ו',
			'iː?': 'י',
			'ɪː?': 'י',
			'uː': 'ו',
			'ɑː?$': 'ה',
			'ɑː': 'א',
			'ɑ': '',
			'ᵿ': 'ו',
			'ᵻ': 'י',
			'ʌ': 'א',
			'ɜː?': '',
			'u': 'יו',
			'ʊ': 'ו',
			'ɪ': 'א',
			'a': 'א',
			'ɒ': 'ו',
			'ʏ': 'ו',

			'g': 'ג',
			'c': 'ק',
			'o': 'או',

			'ɲ': 'ני',
			'ɾ': 'ר',
			'b': 'ב',
			'β': 'ב',
			'd': 'ד',
			'ð': 'ד\'',
			'dʒ': 'ז\'',
			'f$': 'ף',
			'f': 'פ',
			'ɡ': 'ג',
			'ɣ': 'ג',
			'hw': 'וו',
			'^h': 'ח',
			'h$': 'ך',
			'h': 'ח',
			'ç$': 'ך',
			'ç': 'כ',
			'j': 'י',
			'k': 'ק',
			'l': 'ל',
			'm$': 'ם',
			'm': 'מ',
			'n$': 'ן',
			'n': 'נ',
			'ŋ': 'נג',
			'θ': 'ת\'',
			'p': 'פ',
			'r': 'ר',
			'ɹ': 'ר',
			'ʁ': 'ר',
			's': 'ס',
			'dz$': 'ץ',
			'dz': 'צ',
			'ts$': 'ץ',
			'ts': 'צ',
			'tʃ$': 'ץ\'',
			'tʃ': 'צ\'',
			'ʃ': 'ש',
			't': 'ט',
			'v': 'ו',
			'w': 'וו',
			'z': 'ז',
			'ʒ': 'ש',
			'ʂ': 'ש',
			'ɕː': 'ש',
			'ʐ': 'ג\'',
			'x': 'ח',

			'ː': '',
			'([^אהיו])\1+': '$1',
			'([אהיו])\1+': '$1$1'
		},
		ru: {
			'ˌ': 'ь',
			'ˈ': 'ъ',
			'ʔ': '',
			'˜': '',

			'œ': 'ой',
			'y': 'у',
			'je': 'e',
			'ja': 'я',
			'aʊ': 'oу',
			'oʊ': 'oу',
			'ju': 'ю',
			'aɪ': 'я',
			'ɔɪ': 'ё',
			'eɪ': 'е',

			// 'о': 'о',
			// 'а': 'а',
			'^ə': 'a',
			'e': 'е',
			'ə': 'е',
			'ɛ': 'э',
			'æ': 'е',
			'ɔː': 'о',
			'ɔ': 'оу',
			'i': 'и',
			'ɪ': 'и',
			'u': 'у',
			'ɑː?': 'а',
			'ᵿ': 'ю',
			'ᵻ': 'ы',
			'ʌ': 'а',
			'ɜː?': 'е',
			'ʊ': 'у',
			'ɒː?': 'о',
			'ʏ': 'у',

			'ɲ': 'нь',
			'ɾ': 'рь',
			'ʎ': 'я',
			'ɦ': 'г',
			'b': 'б',
			'β': 'в',
			'd': 'д',
			'dʒ': 'дж',
			'ð': 'д',
			'f': 'ф',
			'ɡ': 'г',
			'ɣ': 'Г',
			'hw': 'ю',
			'h': 'х',
			'ç': 'х',
			'j': 'и',
			'k': 'к',
			'l': 'л',
			'm': 'м',
			'n': 'н',
			'ŋ': 'нг',
			'θ': 'ф',
			'p': 'п',
			'r': 'р',
			'ɹ': 'р',
			'ʁ': 'р',
			'ts': 'ц',
			'dz': 'ц',
			's': 'с',
			'tʃ': 'ч',
			'ʃ': 'ш',
			't': 'т',
			'v': 'в',
			'w': 'в',
			'z': 'з',
			'ʒ': 'ш',
			'ʂ': 'ш',
			'ɕː': 'щ',
			'ʐ': 'ж',
			'x': 'х',

			'([чщ])я': '$1а',
			'([чщ])ё': '$1о',
			'([чщ])ю': '$1у',
			'([жш])ы': '$1и',
			'([ао])([рл])([ао])': 'о$2о',
			'ː': ''
		},
		es: {
			'ʔ': '',
			'˜': '',
			'ˌ': '',
			'ˈ': '',

			'y': 'u',
			'je': 'e',
			'ja': 'ia',
			'aʊ': 'o',
			'oʊ': 'o',
			'ju': 'iu',
			'aɪ': 'i',
			'ɔɪ': 'o',
			'eɪ': 'e',

			'œ': 'oi',
			'ɔː': 'o',
			// 'о': 'о',
			// 'а': 'а',
			'^ə': 'a',
			'e': 'е',
			'ə': 'е',
			'ɛ': 'е',
			'æ': 'е',
			'ɔ': 'ou',
			'iː': 'иe',
			// 'i': 'i',
			'ɪ': 'i',
			// 'u': 'u',
			'ɑː?': 'a',
			'ᵿ': 'u',
			'ᵻ': 'i',
			'ʌ': 'a',
			'ɜː?': 'e',
			'ʊ': 'u',
			'ɒː?': 'o',
			'ʏ': 'y',

			'ɲ': 'ñ',
			'ɾ': 'r',
			'ʎ': 'll',
			'ɦ': 'gh',
			'b': 'v',
			'β': 'b',
			'dʒ': 'd',
			// 'd': 'd',
			'ð': 'd',
			// 'f': 'f',
			'ɣ': 'g',
			'hw': 'u',
			'h': 'j',
			'ç': 'j',
			'ks': 'x',
			// 'k': 'k',
			// 'l': 'l',
			// 'm': 'm',
			// 'n': 'n',
			'θ': 's',
			// 'p': 'p',
			'r': 'rr',
			'ɹ': 'r',
			// 'ts': 'ts',
			'dz': 'ts',
			's': 'z',
			'tʃ': 'ch',
			'ʃ': 'sh',
			// 't': 't',
			'v': 'v',
			'z': 's',
			'ʒ': 'z',
			'ʂ': 'sh',
			'ɕː': 'sh',
			'ʐ': 'g',
			'x': 'j',

			'j([aeoiuy])': 'hi$1',
			'j': 'i',
			'w([aeiouy])': 'hu$1',
			'ŋ([^aeoiuy])': 'n$1',
			'ŋ': 'ng',
			'(^|n)ɡw?([ao])': '$1gu$2',
			'(^|n)ɡw([ei])': '$1gü$2',
			'ɡ': 'g',
			'w': '',
			'ʁ': 'r',
			's([ei])': 'c$1',

			'ː': ''
		},
		de: {
			'ʔ': '',
			'˜': '',
			'ˌ': '',
			'ˈ': '',

			'œ': 'oi',
			'iː': 'ie',
			'yː': 'üh',
			'ye': 'ü',
			'y': 'ü',
			'je': 'e',
			// 'ja': 'ja',
			'ia': 'ja',
			'aʊ': 'au',
			'oʊ': 'ou',
			'ju': 'u',
			'aɪ': 'ei',
			'ɔɪ': 'eu',
			'ɔʏ': 'eu',
			'eɪ': 'eh',
			'jɪ': 'gi',

			'ɔː': 'o',
			'оː': 'оh',
			// 'о': 'о',
			'аː': 'аh',
			// 'а': 'а',
			'eː': 'ä',
			// 'e': 'е',
			'^ə': 'a',
			'ə': 'е',
			'ɛ': 'ä',
			'æ': 'ö',
			'ɔ': 'o',
			'ɪ': 'i',
			'u:': 'uh',
			// 'u': 'u',
			'ɑː?': 'a',
			'ᵿ': 'u',
			'ᵻ': 'i',
			'ʌ': 'a',
			'ɜː?': 'e',
			'ʊ': 'u',
			'ɒ:?': 'o',
			'ʏ': 'u',

			'ɲk': 'nk',
			'ɲ': 'ng',
			'ɾ': 'r',
			'ʎ': 'l',
			'ɦ': 'gh',
			// 'b': 'b',
			'ss': 'ß',
			'sz': 'β',
			'β': 'b',
			'dʒ': 'dsch',
			// 'd': 'd',
			'ð': 'd',
			// 'f': 'f',
			'ɡ': 'g',
			'ɣ': 'g',
			'([aou])h': '$1ch',
			'iç$': 'ig',
			'ç(..?n)$': 'chen',
			'k(äei)': 'c$1',
			'^k': 'k',
			// 'k': 'k',
			// 'l': 'l',
			// 'm': 'm',
			// 'n': 'n',
			// 'j': 'j',
			'θ': 't',
			// 'p': 'p',
			// 'r': 'r',
			'ɹ': 'r',
			'ts(äei)': 'c$1',
			// 'ts': 'ts',
			// 'dz': 'dz',
			's': 's',
			// 'tʃ': 'tsch',
			'ʃ': 'sch',
			// 't$': 'd',
			// 't': 't',
			'v': 'w',
			'ʒ': 'dz',
			'ʂ': 'sch',
			'ɕː': 'sch',
			'ʐ': 'g',
			'x': 'h',

			'([aäeioöuüy])p': '$1b',
			'([aäeioöuüy])z($|[aäeioöuüy])': '$1s$2',
			'z': 'ts',
			'ʁ': 'r',
			'h([aäeioöuüy])': 'h$1',
			// 'h': 'h',

			'ː': ''
		}
	},
	en: {
		// https://en.wikipedia.org/wiki/English_orthography
		trans: {
			'xc([ei])': 'ks$1', // before e or i ==> /ks/
			'xh': 'ɡz', // ==> /ɡz/
			'[ts]ion': 'ʃən', // ==> /ɡz/

			'wr': 'r', // ==> /ɹ/
			'rh([^aeiouy])': '$2', // before consonant ==>  Ø
			'([^aeiouy])rr?h([^aeiouy])': '$1$2', // before consonant ==>  Ø
			'rr?h?e?$': '', // finally or before final e ==> Ø
			'rr?h?': 'r', // usually ==> /ɹ/

			'sh': 'ʃ', // ==> /ʃ/
			'sch': 'sk', // ==> /sk/
			'sc([eiy])': 's$1', // ==> /s/
			'tch': 'tʃ', // ==> /tʃ/
			'th': 'θ',

			'who': 'h', // ==> /h/
			'wh': 'w', // usually ==> /w/

			'^ya': 'ia', // usually ==> /w/

			'g([eiy]|(ae)|(or)|(oe))': 'dʒ$1', // before e, i, y, ae, or oe => /dʒ/
			'c([eiy]|(ae)|(or)|(oe))': 's$1', // before e, i, y, ae, or oe ==> /s/
			'cc([eiy])': 'ks$1', // before e, i or y ==> /ks/

			'oar': 'ɔːr', // before r ==> /ɔː/
			'oar': 'ɔːr', // before r ==> /ɔː/
			'oa': 'oʊ', // usually ==> /oʊ/
			'oe': 'iː', // usually ==> /iː/
			'oeu': 'uː', // ==> /uː/
			'oir': 'wɑːr', // before r ==> /wɑː/
			'oi': 'ɔɪ', // usually ==> /ɔɪ/
			'oo([dk])': 'ʊ$1', // before k, d ==> /ʊ/
			'oor': 'ɔər', // before r ==> /ɔə/
			'oo': 'uː', // usually ==> /uː/
			'our': 'ɔːr', // stressed before r ==> /ɔː/
			// 'ou': 'ə', // unstressed ==> /ə/
			'ou': 'aʊ', // stressed ==> /aʊ/
			'owr': 'aʊər', // stressed before r ==> /aʊə/
			// 'ow': 'aʊə', // unstressed ==> /aʊə/
			'ow': 'aʊ', // stressed ==> /aʊ/
			'oy': 'ɔɪ', // ==> /ɔɪ/

			'wa(r($|[^aeiouy]))': 'wɔː$1', // after /w/ before final r or r + cons. /*(and in derived terms)*/ ==> /ɔː/
			'wa([^xkg(ng\w)(nn?k)(nn?g)])': 'wɑː$1', // after /w/ except before /k/, /ɡ/, /ŋ/ ==> /ɒ/ (/ɑː/)*
			'st((en)|(le))': 's$1', // in -sten and -stle ==> Ø
			'y([^aeiouy]((le)|(r[aeiouy])))': 'aɪ$1', // before cons + (-le or r+vowel) ==> /aɪ/
			'u([^aeiouy]((le)|(r[aeiouy])))': 'juː$1', // before cons + (-le or r+vowel) ==> /juː/
			'o([^aeiouy]((le)|(r[aeiouy])))': 'oʊ$1', // before cons + (-le or r+vowel) ==> /oʊ/
			'i([^aeiouy]((le)|(r[aeiouy])))': 'aɪ$1', // before cons + (-le or r+vowel)
			'i([^aeiouy][ei][aeiouy])': 'ɪ$1', // before cons. + e/i + vowel ==> /ɪ/
			'ier': 'ɪə', // before r ==> /ɪə/
			'^(.+)ie(.+)$': '$1iː$2', // medially ==> /iː/

			'^a': 'ə', // unstressed ==> /ə/
			'a$': 'ɑː', // word-final (stressed) ==> /ɑː/
			'a(r($|[^aeiouy]))': 'ɑː$1', // before final r or r + cons. /*(and in derived terms)*/ ==> /ɑː/
			'a(r[aeiouy])': 'ɛ', // before r + vowel ==> /ɛ(ə)/ †
			'a([^aeiouy]{2,})': 'æ$1', // before multiple consonants ==> /æ/
			'a([^aeiouy]+)$': 'æ$1', // final vowel in word ==> /æ/
			'a([^aeiouy][aeiouy][^aeiouy]?[aeiouy])': 'æ$1', // followed by 2 or more unstressed syllables ==> /æ/
			'a((nge)|(ste))$': 'eɪ$1', // before final -nge, -ste ==> /eɪ/
			'a([^aeiouy][aeiouy])': 'eɪ$1', // before single consonant ==> /eɪ/
			'a([^aeiouy]((le)|(r[aeiouy])))': 'eɪ$1', // before cons + (-le or r+vowel) ==> /eɪ/
			// 'a([eiouy])': 'eɪ$1', // before heterosyllabic vowel ==> /eɪ/
			'a(ge)': '', // unstressed, in -age ==> /ɪ, ə/
			'a[ah]': 'ɑː', // ==> /ɑː/
			'aer': 'ɛər', // before r ==> /ɛə/
			'ae': 'ɑːə', // usually ==> /iː/ ||| but my fix !!!
			'air': 'ɛər', // == >/ɛə/
			'a[iy]': 'eɪ', // ay or stressed a with i or  ==> /eɪ/
			// 'ai': 'ɪ, ə', // /*unstressed*/ ==> /ɪ, ə/
			'ao': 'aʊ', // ==> /aʊ/
			'a[uw]': 'ɔː', // ==> /ɔː/

			'uu' : 'juə', // ==> /juə/
			'uy' : 'aɪ', // ==> /aɪ/
			'gue': 'ɡ', // after g ==> Ø
			'ue': 'juː', // elsewhere (except after q) ==> /juː/
			'qu': 'kw', // after q ==> /w/
			'ie[uw]r': 'jʊər', // before r ==> /jʊə/
			'e(r($|[^aeiouy]))': 'ɜː$1', // before final r or r + other cons. /*(and in derived terms)*/ ==> /ɜː/
			'e([^aeiouy][aeiouy])': 'iː$1', // before single consonant ==> /iː/
			'e([^aeiouy]r[aeiouy])': 'iː$1', // before cons + r +vowel ==> /iː/
			'^([^aeiouy]+)e$': '$1iː', // final, only vowel in word ==> /iː/
			// 'e[aiouy]': 'iː$1', // before heterosyllabic vowel ==> /iː/
			'e([^aeiouy]{2,})': 'ɛ$1', // before multiple consonants ==> /ɛ/
			'e([^aeiouy]+)$': 'ɛ$1', // final vowel in word ==> /ɛ/
			'e([^aeiouy][aeiouy][^aeiouy]?[aeiouy])': 'ɛ$1', // bef. 2+ unstressed syllables ==> /ɛ/
			'e(r[aeiouy])': 'ɪə$1', // before r + vowel ==> /ɪə/
			// 'e(.)': 'ə$1', // unstressed ==> /ə/
			'e$': '', // word-final and derivatives ==> Ø
			'ea': 'iː', // usually ==> /iː/
			'ea(r[^aeiouy])': 'ɜː$1', // before r + cons. ==> /ɜː/
			'ea(r($|[aeiouy]))': 'ɪə$1', // before final r or r + vowel /*(and in derived terms)*/ ==> /ɪə/
			'eau': 'oʊ', // ==> /oʊ/
			'eer': 'ɪər', // before r ==> /ɪə/
			'ee': 'iː', // usually ==> /iː/
			'ce[iy]': 'ciː', // after c ==> /iː/
			'e[iy]r': 'ɛər', // before r ==> /ɛə/
			'e[iy]$': 'i', // /*unstressed,*/ word-final ==> /i/
			'e[iy]': 'eɪ', // usually ==> /eɪ/
			'e[uw]e?r': 'jʊər', // before r ==> /jʊə/
			// 'e[uw]e?': '', // unstressed before r ==> /ju(ə)/
			// 'ie[uw]': '', // unstressed before r ==> /ju(ə)/
			'(e[uw]e?)|(ie[uw])': 'juː', // usually ==> /juː/

			'([jr]|([^aeiouy]l))ui': '$1uː', // after j, r, or cons. + l ==> /uː/
			'gui': 'ɡwɪ', // after g ==> /wɪ/
			'ui': 'ɪ', // elsewhere (except after q) ==> /juːɪ/ /ɪ/
			'i(r[aeiouy]($|[aeiouy]))': 'aɪə$1', // before r + vowel (except bef. 2+ unstressed syllables) ==> /aɪə/
			'i(r($|[^aeiouy]))': 'ɜː$1', // before final r or r + cons. (and in derived terms) ==> /ɜː/
			'i([^aeiouy][aeiouy])': 'aɪ$1', // before single consonant ==> /aɪ/
			'i((nd)|(ld)|(gh)|(gn))': 'aɪ$1', // before -nd, -ld, -gh, -gn ==> /aɪ/
			'i$': 'aɪ', // word-final ==> /aɪ/
			// 'i([aeouy])': 'aɪ$1', // before heterosyllabic vowel ==> /aɪ/
			'i([^aeiouy]{2,})': 'ɪ$1', // before multiple consonants ==> /ɪ/
			'i([^aeiouy]*)$': 'ɪ$1', // final vowel in word ==> /ɪ/
			'i([^aeiouy][aeiouy][^aeiouy]?[aeiouy])': 'ɪ$1', // bef. 2+ unstressed syllables ==> /ɪ/
			'i([aeiouy])': 'i$1', // before heterosyllabic vowel ==> /i/ (radii)

			'wor': 'wɜːr', //after w and before r ==> /ɜː/
			'or': 'ɔːr', // before r ==> /ɔː/
			'o([^aeiouy]{2,})': 'ɑː$1', // before multiple consonants ==> /ɒ/ or /ɑː/
			'o([^aeiouy]+)$': 'ɑː$1', // final vowel in word ==> /ɒ/ or /ɑː/
			'o([^aeiouy][aeiouy][^aeiouy]?[aeiouy])': 'ɑː$1', // followed by 2 or more unstressed syllables ==> /ɒ/ or /ɑː/
			'o([^aeiouy][aeiouy])': 'oʊ$1', // before single consonant ==> /oʊ/
			'o$': 'oʊ', // word-final ==> /oʊ/
			// 'o([aeiouy])': 'oʊ$1', // before heterosyllabic vowel (inc. unstressed) ==> /oʊ/

			// 'oe': 'ɪ$1', // unstressed ==> /ɪ/
			'oe([^aeiouy]*)$': 'oʊ$1', // final vowels ==> /oʊ/
			'^o': 'oʊ', // mine ...
			'o': 'ə', // unstressed ==> /ə/

			'^u': 'jʊ', // unstressed ==> /ə/
			'u(r($|[^aeiouy]))': 'ɜː$1', // before final r or r + cons. /*(and in derived terms)*/ ==> /ɜː/
			'u(r[aeiouy])': 'jʊ(ə)$1', // before r + vowel ==> /jʊ(ə)/
			'(r|([^aeiouy]l))ue': '$1uː', // after r or cons. + l ==> /uː/
			'u([^aeiouy]{2,})': 'ʌ$1', // before multiple consonants ==> /ʌ/
			'u([^aeiouy][aeiouy])': 'juː$1', // before single consonant ==> /juː/
			'u$': 'juː', // word-final ==> /juː/
			'gu([aiouy])': 'ɡ$1', // after g and before a vowel ==> Ø
			'u([aeoiy])': 'juː$1', // before heterosyllabic vowel ==> /juː/
			'u([^aeiouy]*)$': 'ʌ$1', // final vowel in word ==> /ʌ/
			'u': 'ə', // unstressed ==> /ə/

			'y([^aeiouy]{2,})': 'ɪ$1', // before multiple consonants ==> /ɪ/
			'y([^aeiouy][aeiouy][^aeiouy]?[aeiouy])': 'ɪ$1', // followed by 2 or more unstressed syllables ==> /ɪ/
			'y([^aeiouy][aeiouy])': 'aɪ$1', // before single consonant ==> /aɪ/
			'y$': 'aɪ', // word-final, stressed ==> /aɪ/
			// 'y$': 'i', // unstressed, word-final ==> /i/
			'y(r($|[^aeiouy]))': 'aɪ$1', // before final r or r + cons. /*(and in derived terms)*/ ==> /aɪ/
			'y(r[aeiouy])': 'aɪə$1', // before r + vowel ==> /aɪə/


			'mb$': '', // finally after m /*(and in derived terms)*/ ==> Ø
			'bb?': 'b', // usually ==> /b/

			'^c([tn])': '$1', // initially before n, t ==> Ø
			'cc': 'k', // elsewhere ==> /k/
			'ch': 'tʃ', // usually ==> /tʃ/
			'ck': 'k', // ==> /k/
			'c': 'k', // elsewhere ==> /k/

			'dg': 'dʒ', // before e, i, or y ==> /dʒ/
			'd[dh]?': 'd', // ==> /d/

			'ff?': 'f', // ==> /f/

			'g([nm])': '$1', // in gm or gn => Ø
			'^gh': 'g', // initially ==> /ɡ/
			'gh': '', // elsewhere => Ø
			'g[gɡ]?': 'ɡ', // elsewhere ==> /ɡ/

			'h$': '', // final ==> Ø
			'([r(ex)])h': '$1', // after r or ex ==> Ø

			'j': 'dʒ', // ==> /dʒ/

			'k[kh]?': 'k', // usually ==> /k/
			'^kn': 'n', // initially before n ==> Ø
			'll?': 'l', // ==> /l/

			'mnn?$': 'm', // finally after m ==> Ø
			'^mm?n': 'n', // initially before n => Ø
			'mm?': 'm', // usually ==> /m/

			'n[gɡ](.)': 'ŋ$1', // before /k/ or /ɡ/ ==> /ŋ/
			'nn?[kgɡ]': 'ŋ', // before /k/ or /ɡ/ ==> /ŋ/
			'nn?': 'n', // usually ==>/n/

			'^p([nst])': '$1', // initially before n, s, t ==> Ø
			'pp?': 'p', // usually ==> /p/

			'q([^u])': 'k$1', // (not before u) ==> /k/

			'ss': 's', // ==> /s/
			'sw': 'sw', // ==> /sw/
			't[sz]': 'ts', // mine...
			's$': 's', // word-final -s morpheme after a voiceless sound ==> /s/
			// '[bdɟɡmnɲŋlrɽjw]s': 's', // word-final -s morpheme after a voiceless sound ==> /s/
			// '[]s': 'z', // word-final -s morpheme after a lenis sound ==> /z/
			'([aeiouy])s([aeiouy])': '$1z$2', // -s- between vowel sounds (see also 'se' below) ==> /z/
			's': 's', // usually ==> /s/

			'tt?': 't', // usually ==> /t/

			'vv?': 'v', // ==> /v/

			'w': 'w', // => /w/

			'^x': 'z', // initially ==> /z/
			'x': 'ks', // elsewhere ==> /ks/

			'zz?': 'z', // ==> /z/

			'h': 'h', // usually ==> /h/

			// 'y([^aeiouy]*ɪ)': 'ɪ$1', // next syllable contains /ɪ/ ==> /ɪ/
			'y': 'j', // unstressed ==> /ɪ/
			// 'i([^aeiouy]*ɪ)': 'ɪ$1', // next syllable contains /ɪ/ ==> /ɪ/
			'i': 'ɪ, ə', // unstressed /ɪ, ə/
			// 'e([^aeiouy]*ɪ)': 'ɛ$1', // next syllable contains /ɪ/ ==> /ɛ/
			// 'a([^aeiouy]*ɪ, ə)': 'æ$1', // next syllable contains /ɪ, ə/ ==> /æ/
			// 'o([^aeiouy]*ɪ)': 'ɑː$1', // next syllable contains /ɪ/ ==> /ɒ/ or /ɑː/
			// '([rʃʒj]|([^aeiouy]l))ie[uw]': '$1uː', // after /r/, /ʃ/, /ʒ/, /j/, cons. + /l/ ==> /uː/
			// '([rʃʒj]|([^aeiouy]l))e[uw]e?': '$1uː', // after /r/, /ʃ/, /ʒ/, /j/, cons. + /l/ ==> /uː/
			// '([rʃʒj]|([^aeiouy]l))u': '$1uː', // above after /r/,/ʃ/,/ʒ/,/j/, cons.+/l/ ==> /uː/
			// 'wa([^kɡŋ])': 'wɑː$1', // after /w/ except before /k/, /ɡ/, /ŋ/ ==> /ɒ/ (/ɑː/)*

			'r': 'ɹ', // fix

            'ß': 'ss', // German
            'β': 'sz', // German
            'ä': 'ɛ', // German
            'ö': 'œ', // German
            'ü': 'ʏ' // German
		}
	},
	ru: {
		// https://en.wikipedia.org/wiki/Russian_alphabet
		trans: {
			// 'a': 'a',
			'б': 'b',
			'в': 'v',
			'г': 'ɡ',
			'д': 'd',
			'е': 'je',
			'ё': 'jo',
			'ж': 'ʐ',
			'з': 'z',
			'и': 'i',
			'й': 'j',
			'к': 'k',
			'л': 'l',
			'м': 'm',
			'н': 'n',
			'о': 'o',
			'п': 'p',
			'р': 'r',
			'с': 's',
			'т': 't',
			'у': 'u',
			'ф': 'f',
			'х': 'x',
			'ц': 'tʃ',
			'ч': 'tɕː',
			'ш': 'ʃ',
			'щ': 'ɕː',
			'ь': 'ˈ',
			'ъ': ' ',
			'ы': 'ɨ',
			'э': 'e',
			'ю': 'ju',
			'я': 'ja'
		},
		el: {
			'а': 'α',
			'б': 'μπ',
			'в': 'β',
			'г': 'γκ',
			'д': 'δ',
			'ж': 'ζ',
			'е': 'γιε',
			'ё': 'γιο',
			'з': 'ζ',
			'и': 'ι',
			'й': 'γη',
			'к': 'κ',
			'л': 'λ',
			'м': 'μ',
			'н': 'ν',
			'о': 'ο',
			'п': 'π',
			'р': 'ρ',
			'с': 'σ',
			'т': 'τ',
			'у': 'ου',
			'Ф': 'φ',
			'х': 'χ',
			'ц': 'τσ',
			'ч': 'τσ',
			'ш': 'σ',
			'щ': 'σ',
			'ь': 'ˌ',
			'ъ': 'ˈ',
			'ы': 'ι',
			'э': 'ε',
			'ю': 'γι',
			'я': 'για'
		},
		sr: {
			'дь': 'đ',
			'ль': 'љ',
			'нь': 'њ',
			'ть': 'ћ',
			'дж': 'џ',
			'ь': '',
			'ъ': ' ',
			'ы': 'i',
			'э': 'е',
			'ю': 'ju',
			'я': 'ja',
			'й': 'j',
			'рр': 'р'
		},

		ru: {
			'йе': 'є',
			'йи': 'ї',
			'й': 'і',
			'г': 'ґ',
			'ъ': '',
			'рр': 'р'
		}
	},
	sr: {
		// https://en.wikipedia.org/wiki/Serbian_Cyrillic_alphabet
		trans: {
			// 'a': 'a',
			'б': 'b',
			'в': 'v',
			'г': 'ɡ',
			'д': 'd',
			'đ': 'dj',
			// 'e': 'e',
			'ж': 'ʒ',
			'з': 'z',
			'и': 'i',
			// 'j': 'j',
			'к': 'k',
			'л': 'l',
			'љ': 'ʎ',
			'м': 'm',
			'н': 'n',
			'њ': 'ɲ',
			'о': 'o',
			'п': 'p',
			'р': 'r',
			'с': 's',
			'т': 't',
			'ћ': 'tɕ',
			'у': 'u',
			'ф': 'f',
			'х': 'x',
			'ц': 'ts',
			'ч': 'tʃ',
			'џ': 'dʒ',
			'ш': 'ʃ'
		},
		ru: {
			'đ': 'дь',
			'љ': 'ль',
			'њ': 'нь',
			'ћ': 'ть',
			'џ': 'дж',
			'j': 'й',
			'рр': 'р'

		}
	},
	de: {
		// https://en.wikipedia.org/wiki/German_orthography
		trans: {
			'([aäeioöuüy])b': '$1p',
			// 'b': 'b',
			'([aou])ch': '$1x',
			'ch(en)$': 'ç$1',
			'c([äei])': 'ts$1',
			'c[hk]?': 'k',
			'd$': 't',
			'dsch': 'dʒ',
			'dt?': 'd',
			// 'f': 'f',
			'([aäeioöuüy]i)g$': '$1k',
			'ig$': 'iç',
			// 'g': 'g',
			'h([aäeioöuüy])': 'h$1',
			'([aäeioöuüy])h': '$1',
			// 'j': 'j',
			// 'k': 'k',
			// 'l': 'l',
			// 'm': 'm',
			'ng': 'ŋ',
			'nk': 'ŋk',
			// 'n': 'n',
			'^pf': 'f',
			'ph': 'f',
			// 'p': 'p',
			'qu': 'kv',
			'([aäeioöuüy])s($|[aäeioöuüy])': '$1z$2',
			's$': 's',
			's([^aäeioöuüy])': 's$1',
			'^s([pt])': 'ʃ$1',
			's([^aäeioöuüy]*($|[aäeioöuüy]))': 'ʃ$1',
			'sch': 'ʃ',
			'ss?': 's',
			'ß': 'ss',
			'β': 'sz',
			'ti((on)|(är)|(al)|(ell))': 'tsɪ̯$1',
			'((tsch)|(zsch))': 'tʃ',
			'tz': 'ts',
			'th?': 't',
			'v': 'f',
			'w': 'v',
			'x': 'ks',
			'z': 'ts',
			'[ae][iy]': 'aɪ',
			'au': 'aʊ',
			'a[ah]?': 'a:',
			// 'a': 'a',
			'(eu)|(äu)': 'ɔʏ',
			'äh?': 'e:',
			'ä': 'ɛ',
			'e[eh]': 'e:',
			'e': 'ɛ',
			'ie?h?': 'i:',
			'i': 'ɪ',
			'o[oh]': 'o:',
			'o': 'ɔ',
			'öh': '',
			'ö': 'œ',
			'uh': 'u:',
			'u': 'ʊ',
			'üh': 'y:',
			'ü': 'ʏ',
			'y': 'ʏ',
			// 'r': 'r'
		}
	},
	fr: {
		// https://en.wikipedia.org/wiki/French_orthography

		// /** Tautology is useful to not goto next !!! */
		trans: {
			'x$': '', // to solve potential conflict with the rule "next to a voiceless consonant"
			'[bcgpt]s$': '',
			'(œu)[df]s$': '$1',
			'bb?': 'b',
			'ç': 's',
			'sc': 'sk',
			'xc([eiy])': 'ks',
			'xc': 'ksk',
			'([ãɛõœ])ct': '', // Nasal vowels ==> ∅
			'ct': 'kt',
			'ch': 'ʃ',
			'cc([eiy])': 'ks$1',
			'c([eiy])': 's$1',
			'cc?': 'k',
			'dd?$': '',
			'dd?': 'd',
			'ff?': 'f',
			'gn': 'ɲ',
			'gg([eiy])': 'ɡʒ',
			'g$': '',
			'g([eiy])': 'ʒ',
			'gg?': 'ɡ',
			'h': '', // lol
			'j': 'ʒ',
			'k': 'k',
			'll?': 'l',
			'mm?': 'm',
			'ng': 'ŋ',
			'nn?': 'n',
			'pt': 'pt',
			'ph': 'f',
			'pp?$': '',
			'pp?': 'p',
			'ss': '',
			'sc([eiy])': 's$1',
			'([^s])s$': '$1',
			'^s([^s])': 's$1',
			'([^aàâeéêëiîïoôœuûy])s([^aàâeéêëiîïoôœuûy])': '$1s$2',
			'([ãɛõœ])s': '$1s',
			'th': 't',
			'tt?$': '',
			'tt?': 't',
			'v': 'v',
			'w': 'w',
			'^x': 'ks',
			'([aàâeéêëiîïoôœuûy])x([aàâeéêëiîïoôœuûy])': '$1ɡz$2',
			'z$': '',
			'z': 'z',
			'oue': 'u',
			'eau': 'o',
			'aie': 'ɛ',
			'([cg])ue': '$1œ',
			'ue$': 'y',
			'ue': 'ɥɛ',
			'œu': 'œ',
			'oie?': 'wa',
			'oe': 'oe',
			'ou([aàâeéêëiîïoôœuûy])': 'w$1',
			'o[uû]': 'u',
			'oï': 'oi',
			'oê': 'wa',
			'oë': 'ɔɛ',
			'oy': 'waj',
			'oz': 'oz',
			'ao[uû]': 'au',
			'aï': 'ai',
			'aî': 'ɛ',
			'ay$': 'ɛ',
			'ay': 'ɛj',
			'au': 'o',
			'ai': 'e',
			'e([^aàâeéêëiîïoôœuûy]+)': 'ɛ$1', // ???
			'e[iî]': 'ɛ',
			'eû': '',
			'eu(z?)$': '$1',
			'eu': 'œ',
			'i([aàâeéêëiîïoôœuûy])': 'j$1',
			'^ï': 'j',
			'([aàâeéêëiîïoôœuûy])ï([aàâeéêëiîïoôœuûy])': '$1j$2',
			'u([aàâeéêëiîïoôœuûy]+)': 'ɥ',
			'^y([aàâeéêëiîïoôœuûy])': 'j$1',
			'â': 'ɑ',
			'a|à': 'a',
			'ie?': 'i',
			'e$': '',
			'e': 'ə',
			'ée?': 'e',
			'ê|è': 'ɛ',
			'[îï]': 'i',
			'o': 'ɔ',
			'ô': 'o',
			'œ': 'o',
			'y': 'i',
			'[uû]': 'y',
			'rr?': 'ʁ'
		}
	},
	es: {
		// https://en.wikipedia.org/wiki/Spanish_orthography
		trans: {
			'([mn])[bv]': '$1b',
			'^[bv]': 'b',
			'[bv]': 'β',
			'c([ei])': 's$1',
			'ch': 'tʃ',
			'c': 'k',
			'^d': 'd',
			'd([ln])': 'd',
			'd': 'ð',
			// 'f': 'f',
			'(^|n)gu([ao])': '$1ɡw$2',
			'gu([ao])': 'ɣw$2',
			'(^|n)gu([ei])?': '$1ɡ$2',
			'gu([ei])': 'ɣ$1',
			'(^|n)gü([ei])?': '$1ɡw$2',
			'gü([ei])': 'ɣw$1',
			'g([ei])': 'x$1',
			'(^|n)g([^ei])?': '$1ɡ$2',
			'g([^ei])?': 'ɣ$1',
			'sh': 'ʃ',
			'hu([aeoiuy])': 'w$1',
			'hi([aeoiuy])': 'j$1',
			'h': '',
			'j': 'x',
			// 'k': 'k',
			'll': 'ʎ',
			// 'l': 'l',
			'm$': 'n',
			// 'm': 'm',
			'n([^aeoiuy])': 'ŋ$1',
			// 'n': 'n',
			'ñ': 'ɲ',
			// 'p': 'p',
			'qu([ei])': 'k$1',
			'([aeoiuy])rr([aeoiuy])': '$1r$2',
			'^r': 'r',
			'r([lns])': 'r$1',
			'rr': 'r',
			'r': 'ɾ',
			's([^aeoiuy])': 'z',
			// 's': 's',
			't[xz]': 'tʃ',
			// 't': 't',
			// 'w': 'w',
			'([aeoiuy])x([aeoiuy])': '$1ks$2',
			'([^aeoiuy])x([^aeoiuy])': '$1s$2',
			'x': 'ks',
			'y': 'i',
			'z': 's',
			// 'a': 'a',
			// 'e': 'e',
			// 'i': 'i',
			// 'o': 'o',
			// 'u': 'u'
		}
	},
	el: {
		en: {
			'αυ': 'av',
			'ει': 'i',
			'οι': 'i',
			'ου': 'u',
			'αι': 'e',
			'ντ': 'd',
			'μπ': 'b',
			'γγ': 'g',
			'γκ': 'g',
			'τσ': 'ts',
			'τζ': 'j',
			'αϊ': 'y',
			'ευ': 'ev',
			'α': 'a',
			'β': 'v',
			'γ': 'g',
			'δ': 'd',
			'ε': 'e',
			'ζ': 'z',
			'η': 'i',
			'θ': 'th',
			'ι': 'i',
			'κ': 'k',
			'λ': 'l',
			'μ': 'm',
			'ν': 'n',
			'ξ': 'x',
			'ο': 'o',
			'π': 'p',
			'ρ': 'r',
			'σ': 's',
			'τ': 't',
			'υ': 'i',
			'φ': 'f',
			'χ': 'h',
			'ψ': 'ps',
			'ω': 'o',
			'ς': 's' // only last and lowercase
		},
		ru: {
			'αυ': 'ав',
			'ει': 'и',
			'οι': 'и',
			'ου': 'у',
			'αι': 'е',
			'ντ': 'д',
			'μπ': 'б',
			'γγ': 'г',
			'γκ': 'г',
			'τσ': 'ц',
			'τζ': 'ж',
			'αϊ': 'ай',
			'ευ': 'ев',
			'α': 'а',
			'β': 'в',
			'γ': 'г',
			'δ': 'д',
			'ε': 'е',
			'ζ': 'з',
			'η': 'и',
			'θ': 'ф',
			'ι': 'и',
			'κ': 'к',
			'λ': 'л',
			'μ': 'м',
			'ν': 'н',
			'ξ': 'кс',
			'ο': 'о',
			'π': 'п',
			'ρ': 'р',
			'σ': 'с',
			'τ': 'т',
			'υ': 'и',
			'φ': 'ф',
			'χ': 'х',
			'ψ': 'пс',
			'ω': 'о',
			'ς': 'с' // only last and lowercase
		}
	},
	ua: {
		trans: {
			'а': 'a',
			'б': 'b',
			'в': 'v',
			'г': 'ɦ',
			'ґ': 'ɡ',
			'д': 'd',
			'е': 'ɛ',
			'є': 'jɛ',
			'ж': 'ʐ',
			'з': 'z',
			'и': 'ɪ',
			'і': 'i',
			'ї': 'ji',
			'к': 'k',
			'л': 'l',
			'м': 'm',
			'н': 'n',
			'о': 'ɔ',
			'п': 'p',
			'р': 'r',
			'с': 's',
			'т': 't',
			'у': 'u',
			'ф': 'f',
			'х': 'x',
			'ц': 'ts',
			'ч': 'tʃ',
			'ш': 'ʃ',
			'щ': 'ɕː',
			'ь': 'ˌ',
			'ю': 'ju',
			'я': 'ja'
		},
		ru: {
			'ґ': 'г',
			'є': 'йе',
			'і': 'й',
			'ї': 'йи'
		}
	}
};


module.exports = {
	languages: Object.keys(maps),
	map: maps
}