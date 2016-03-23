function isEven (x) {
	if (x<0)
		return "not a plus number";
	else if (x == 0)
		return true;
	else if (x == 1)
		return false;
	else
		return isEven(x-2);
}

for(var i=50; i<=75; i++)
	console.log(isEven(i));