function countBs(s) {
		var n = 0;
		for (i=0; i<=(s.length-1); i++) {
				if (s.charAt(i)=="B")
						n += 1;
		}
		return n;
}

function countChar(s, letter) {
		var n = 0;
		for (i=0; i<=(s.length-1); i++) {
				if (s.charAt(i)==letter)
						n += 1;
		}
		return n;
}

function countBs2(s) {
	var l = "B";
	return countChar(s, l);
}

console.log(countBs("fsdBsdBfsBe"));

console.log(countChar("fsdBsdBfsBe", "B"));

console.log(countBs2("fsdBsdBfsBe"));





