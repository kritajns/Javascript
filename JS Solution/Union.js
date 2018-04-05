function union(arr1, arr2) {
	if((arr1 == null) || (arr2 == null)) {
		return void 0;
	}

	var obj = {};

	for (var i = arr1.length-1; i >= 0; --i) {
		obj[arr1[i]] = arr1[i];
	}

	for (var i = arr2.length-1; i >= 0; --i) {
		obj[arr2[i]] = arr2[i];
	}

	var res = [];
	for (var n in obj) {
		if(obj.hasOwnProperty(n))
			res.push(obj[n]);
	}
	return res;
}
console.log(union([1, 2, 3], [100, 2, 80, 10]));