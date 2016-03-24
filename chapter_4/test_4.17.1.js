function range(start, end) {
    var list = [];
    for (var i=start; i<=end; i++)
        list.push(i);
    return list;
}

function sum(list) {
    var result = 0;

    for (var i=0; i<list.length; i++)
        result += list[i];
    return result;
}

console.log(range(1,10));
console.log(sum(range(1,10)));


 
