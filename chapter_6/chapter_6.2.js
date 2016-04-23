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
