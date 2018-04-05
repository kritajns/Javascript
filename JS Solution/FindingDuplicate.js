function find_duplicates(arr1) {
	var i,
	len=arr1.length,
	result = [],
	obj = {};
	for(i = 0; i < len; i++) {
		obj[arr1[i]]=0;
	}
	for(i in obj) {
		result.push(i);
	}
	return result;
}
var arr = [1, 3, -2, 4, 5, 4, 7, 8, 3, 51, 6, 9];
console.log(find_duplicates(arr));