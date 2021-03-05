/******************
 * YOUR CODE HERE *
 ******************/

function xify(str) {
	newStr = "";
	for (letter of str) {
		newStr += "x";
	}
	return newStr;
}

function yellingChars(str) {
	newStr = "";
	for (letter of str) {
		newStr += letter + "!";
	}
	return newStr;
}

function indexedChars(str) {
	newStr = "";
	for (i = 0; i < str.length; i++) {
		newStr += i + str[i];
	}
	return newStr;
}

function numberedChars(str) {
	newStr = "";
	for (i = 0; i < str.length; i++) {
		newStr += `(${i + 1})` + str[i];
	}
	return newStr;
}

function exclaim(str) {
	newStr = "";
	for (char of str) {
		if (char === "?" || char === ".") {
			newStr += "!";
		} else {
			newStr += char;
		}
	}
	return newStr;
}

function repeatIt(str, n) {
  newStr = ''
	for (i = 0; i < n; i++) {
		newStr = newStr + str;
	}
	return newStr;
}

function truncate(str) {
	newStr = "";
	if (str.length >= 19) {
		for (i = 0; i <= 14; i++) {
			newStr += str[i];
		}
		newStr;
		newStr += "...";
		return newStr;
	} else {
		return str;
	}
}
test = truncate("Well, that's 15st, like, your opinion man.");
test;

function ciEmailify(str) {
	newName = "";
	for (char of str) {
		if (char === " ") {
			newName += ".";
		} else {
			newName += char;
		}
	}
	return newName.toLowerCase() + "@codeimmersives.com";
}

function reverse(str) {
	revStr = "";
	for (i = str.length - 1; i >= 0; i--) {
		revStr += str[i];
	}
	return revStr;
}

function onlyVowels(str) {
	vowStr = "";
	for (letter of str) {
		if (
			letter === "a" ||
			letter === "A" ||
			letter === "e" ||
			letter === "E" ||
			letter === "i" ||
			letter === "I" ||
			letter === "o" ||
			letter === "O" ||
			letter === "u" ||
			letter === "U"
		) {
			vowStr += letter;
		}
	}
	return vowStr;
}

//Not Working yet and getting annoyed...moving on for now
function crazyCase(str) {
	crazyStr = "";
	for (i = 0; i > str.length; i++) {
		if (i % 2 === 0) {
			crazyStr += str[i].toUpperCase();
		} else {
			crazyStr += str[i].toLowerCase();
		}
	}
	return crazyStr;
}

function titleCase(str) {
	title = "";
	for (i = 0; i < str.length; i++) {
		if (i === 0 || (str[i - 1] === " " && i >= 1)) {
			title += str[i].toUpperCase();
		} else {
			title += str[i].toLowerCase();
		}
	}
	return title;
}

function camelCase(str) {
	camel1 = "";
	camel2 = "";
	for (i = 0; i < str.length; i++) {
		if (str[i - 1] === " " && i >= 1) {
			camel1 += str[i].toUpperCase();
		} else {
			camel1 += str[i].toLowerCase();
		}
	}
	for (letter of camel1) {
		if (letter !== " ") {
			camel2 += letter;
		}
	}
	return camel2;
}

function crazyCase2ReturnOfCrazyCase(str) {}
/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === "undefined") {
	xify = undefined;
}

if (typeof smilify === "undefined") {
	smilify = undefined;
}

if (typeof yellingChars === "undefined") {
	yellingChars = undefined;
}

if (typeof numberedChars === "undefined") {
	numberedChars = undefined;
}

if (typeof indexedChars === "undefined") {
	indexedChars = undefined;
}

if (typeof exclaim === "undefined") {
	exclaim = undefined;
}

if (typeof repeatIt === "undefined") {
	repeatIt = undefined;
}

if (typeof truncate === "undefined") {
	truncate = undefined;
}

if (typeof ciEmailify === "undefined") {
	ciEmailify = undefined;
}

if (typeof reverse === "undefined") {
	reverse = undefined;
}

if (typeof onlyVowels === "undefined") {
	onlyVowels = undefined;
}

if (typeof crazyCase === "undefined") {
	crazyCase = undefined;
}

if (typeof titleCase === "undefined") {
	titleCase = undefined;
}

if (typeof camelCase === "undefined") {
	camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === "undefined") {
	crazyCase2ReturnOfCrazyCase = undefined;
}

module.exports = {
	xify,
	smilify,
	indexedChars,
	yellingChars, // <-- add this line here (no need for the comment, obvs)
	numberedChars,
	exclaim,
	repeatIt,
	truncate,
	ciEmailify,
	reverse,
	onlyVowels,
	crazyCase,
	titleCase,
	camelCase,
	crazyCase2ReturnOfCrazyCase,
};
