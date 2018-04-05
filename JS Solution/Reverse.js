function revNum(n){
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(revNum(123456));