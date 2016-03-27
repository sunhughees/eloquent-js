function reverseArray(list) {
	var newList=[];
	for (i=0; i<=list.length-1; i++)
		newList.push(list[list.length-1-i]);
	return newList;
}

function reverseArrayInPlace(list) {
	var newList = reverseArray(list);
	for (i=0; i<=list.length-1; i++)
		list[i] = newList[i];
	return list;
}


var aList = [1,2,3];

console.log(reverseArray(aList));
console.log(aList);

console.log(reverseArrayInPlace(aList));
console.log(aList);

