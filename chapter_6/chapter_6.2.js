var rabbit = {};
rabbit.speak = function(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'");
};

rabbit.speak("I'm alive.");

var whiteRabbit = {type: "White", speak: rabbit.speak};

whiteRabbit.speak("I'm alive.");

// function speak(line) {
// 	console.log(this.type);
// }
// speak();

rabbit.speak.apply(whiteRabbit, ["Burp"]);

var empty = {};
console.log(empty.toString);
console.log(Object.prototype);
console.log(Object.getPrototypeOf({}));

var protoRabbit = {
	speak: function(line) {
		console.log("The " + this.type + " rabit says '" + line + "'");
	}
};

function Rabbit(type) {
	this.type= type;
};

console.log([1,2].toString());
console.log(Object.prototype.toString.call([1,2]));

var killerRabbit = new Rabbit("killer");

Rabbit.prototype.speak = function(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'");
};

Rabbit.prototype.dance = function() {
	console.log("The " + this.type + " rabbit dances a jig.");
};

killerRabbit.speak("SKREEEE!");

killerRabbit.dance();

var map = {};
function storePhi(event, phi) {
	map[event] = phi;
};

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

Object.prototype.nonsense = "hi";

for (var name in map)
	console.log(name);

delete Object.prototype.nonsense;

for (var name in map)
	console.log(name);

//无原型对象（不存在默认定义的属性或方法）
var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
console.log("pizza" in map);
