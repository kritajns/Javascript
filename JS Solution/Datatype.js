function detect_data_type(value) {
	var dtypes = [Function, RegExp, Number, String, Boolean, Object], x , len;
	if (typeof value === "Object" || typeof value === "Function") {
		len = dtypes.length;
		for (var i = 0; i < len; i++) {
			if (value instanceof dtypes[i]) {
				return dtypes[i];
			}
		}
	}
	return typeof value;
}
console.log(detect_data_type(9));
console.log(detect_data_type('Where is this?'));
console.log(detect_data_type(false));