function reverseArray(list) {
	var newList=[];
	for (i=0; i<=list.length-1; i++)
		newList.push(list[list.length-1-i]);
	return newList;
}


var aList = [1,2,3];

console.log(reverseArray(aList));
console.log(aList);


