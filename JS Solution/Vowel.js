function vowel_count(str) {
	var vowel_list = 'aeiouAEIOU';
	var vcount = 0;

	for (var i = 0; i < str.length; i++) {
		if (vowel_list.indexOf(str[i]) !== -1) {
			vcount += 1;
		}
	}
	return vcount;
}
console.log(vowel_count("The elephant has just arrived"));