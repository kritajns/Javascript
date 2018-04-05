function random_item(items) {
	return items[Math.floor(Math.random()*items.length)];
}
var items = [54, 38, 115, 256, 1200];
console.log(random_item(items));