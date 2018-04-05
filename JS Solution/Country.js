function longest_country_name(Country_name) {
	return Country_name.reduce(function(lname, country) {
		return lname.length > country.length ? lname: country;
	},
	"");
}
console.log(longest_country_name(["Australia", "Dominican Republic", "United Kingdom", "Uzbekistan"]));