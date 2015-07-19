// JavaScript Document
function subjson(){
	var position = $(".selectI .text").text();
	var department = $(".selectD .text").text();
	var college = $(".selectC .text").text();
	var name = $(".inputN").val();
	var searchjson = {
		"pos" : position,
		"dep" : department,
		"col" : college,
		"nam" : name };
	var post = { data :JSON.stringify(searchjson) };
	alert(post);
}