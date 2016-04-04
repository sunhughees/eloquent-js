var mat = [[1, 2], [3, 4]];

matNew = mat.reduce(function(a,b) { return a.concat(b)});

console.log(mat);

console.log(matNew);
