var object1 = {value:100, data:2};
var object2 = {value:100, data:3};

console.log(object1==object2);

console.log({x:2}==={x:2});

console.log(typeof(object1)=="object");

for (var x in object1)
	console.log(x);

function checkObject(a) {
	var x = [];
	for (var i in a)
		x.push(i);
	return x;
}

function deepEqual(a,b) {
	if (typeof(a)=="object" && a!=null && typeof(b)=="object" && b!=null)
	{
		
		var aProps = checkObject(a);
		var bProps = checkObject(b);

		if (aProps.length != bProps.length)
			return false;

		for (var i=0; i<aProps.length; i++) {
			var propName = aProps[i];

			if(a[propName] !== b[propName])
				return false;
		}
		return true;
	}
	else
		return a==b;
}

console.log(object1[checkObject(object1)[0]]);

console.log(deepEqual(object1,object2));

// console.log(Object.getOwnPropertyNames(object1));




