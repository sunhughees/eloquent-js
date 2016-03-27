var object1 = {value:100};
var object2 = {value:10};

console.log(object1==object2);

console.log({x:2}==={x:2});

console.log(typeof(object1)=="object");

for (var x in object1)
	console.log(x);

function deepEqual(a,b) {
	if (typeof(a)!=typeof(b))
		return false;
	else if (a==b)
		return true;
	else
	{
		for (var x in a)
			{
				for (var y in b)
				{
					if (a.x==b.x && a.y==b.y)
						return true;
					else
						return false;
				}
			}

	}
}

function deepEqual2(a,b) {
	if (typeof(a)=="object" && a!=null && typeof(b)=="object" && b!=null)
	{
		for (x in a)
		{
			if (a.x == b.x)
				return true;
			else
				return false;
			console.log(a.x);
		}
			
	}
	else
		return a==b;
}


console.log(deepEqual2(object1,object2));
