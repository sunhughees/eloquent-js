// 使用高阶函数构建新函数

function greaterThan(n) {
	return function(m) { return m > n; };
}

console.log(greaterThan(13)(11));

// 使用高阶函数修改其它函数

function noisy(f) {
	return function(arg) {
		console.log('calling with', arg);
		var val = f(arg);
		console.log("called with", arg, "- got", val);
		return val;
	};
}

noisy(Boolean)("");

function unless(test, then) {
	if (!test) then();
}

function repeat(times, body) {
	for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
	unless(n % 2, function () {
		console.log(n, 'is even');
	})
});

function reduce(array, combine, start) {
	 /* body... */ 
	 var current = start;
	 for (var i = 0; i < array.length; i++) 
	 	current = combine(current, array[i]);
	 return current;
}

console.log(reduce([1,2,3,4], function(a, b){return a+b;}, 0));


















