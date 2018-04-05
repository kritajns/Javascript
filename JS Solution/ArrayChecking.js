is_array = function(input) {
	if (toString.call(input) === "[object Array]") {
		return true;
	}
	return false;
};
console.log(is_array('This is new'));
console.log(is_array([11, 2, 34, 9]));