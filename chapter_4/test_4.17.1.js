function range(start, end, interval) {
        	
    if (start<=end)
	{
        if (arguments.length==2)
            interval=1;
        var list = [];
        for (var i=start; i<=end; i = i+interval)
            list.push(i);
        return list;
	}
    else
    {
        if (arguments.length==2)
            interval=-1;
        var list = [];
        for (var i=end; i<=start; i = i-interval)
            list.unshift(i);
        return list; 
    }	
}

function sum(list) {
    var result = 0;

    for (var i=0; i<list.length; i++)
        result += list[i];
    return result;
}

console.log(range(10,1,-2));
console.log(range(10,1));
console.log(range(1,10));
console.log(sum(range(1,10)));


 
