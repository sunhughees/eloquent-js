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

function prepend(x, list) {
	var aObject = {};
	aObject.value = x;
	aObject.rest = list;
	return aObject;
}

function nth(list, n) {
	for (var node = list; node; node = node.rest) {
		if (node.value == n)
			return node;
	}
	return null;	
}

var aList = arrayToList([1,2,3,4,5,6,7]);

console.log(aList.rest.rest.rest.rest.rest);

console.log(listToArray(aList));

console.log(prepend(-1, aList));

console.log(nth(aList, 6));

