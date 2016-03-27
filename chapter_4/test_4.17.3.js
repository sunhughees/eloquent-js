function arrayToList(array) {
	var aObject = {};
	if (array.length == 0) 
		return "Need at list one value"
	if (array.length == 1) {
		aObject.value = array[0];
		aObject.rest = null;
	}
	else {
		aObject.value = array[0];
		array.shift();
		aObject.rest = arrayToList(array);
	}
	return aObject;
}

function listToArray(list) {
	var array = [];
	while (list.rest !== null) {
		array.push(list.value);
		list = list.rest;
	}
	array.push(list.value);
	return array;
}


var x = arrayToList([1,2,3,4,5,6,7]);

console.log(x.rest.rest.rest.rest.rest);

console.log(listToArray(x));

