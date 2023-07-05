//! String creation
// const str1 = "webbrain";
// const str2 = 'webbrain';
// const str3 = `webbrain`;
// const str4 = new String("webbrain");
// console.log(str1, str2, str3, str4);

//! Escape character
// const title1 = "Welcome to 'Webbrain'";
// const title2 = 'Welcome to "Webbrain"';
// const title3 = 'Welcome to \'Webbrain\'';
// const title4 = "Welcome to \"Webbrain\"";
// console.log(title1);
// console.log(title2);
// console.log(title3);
// console.log(title4);

//! \n => enter, \t => 4ta probel
// const title1 = "Welcome to \n\"Webbrain\"";
// const title2 = "Welcome to \t \"Webbrain\"";
// console.log(title1);
// console.log(title2);

//! str1.localeCompare(str2)
//? Keyin => -1
//? Teng => 0
//? Oldin => 1
// let str1 = "Webbrain";
// let str2 = "Webbrain";
// let str3 = "Wya";
// let str4 = "Aebbrain";
// let str5 = "";
// console.log(str2.localeCompare(str3));

//! Accessing
//! Mutable vs immutable
// const title = "Webbrain";
//? 1. []
// console.log(title[0]);
// console.log(title[1]);
// console.log(title[2]);
// console.log(title[3]);
// console.log(title[-1]); // undefined
// title[0] = "A";
// console.log(title);
//? 2. str.at()
// console.log(title.at(0));
// console.log(title.at(1));
// console.log(title.at(2));
// console.log(title.at(3));
// console.log(title.at(-1));
// console.log(title.at(-2));
// console.log(title.at(-3));
//? 3. str.charAt()
// console.log(title.charAt(0));
// console.log(title.charAt(1));
// console.log(title.charAt(-4)); // ""

//! Ascii table
// console.log("a".charCodeAt());
// console.log(String.fromCharCode(97));

//! str.length
// let title = "wba ";
// console.log(title.length);

//! toUpperCase(), toLowerCase()
// let title = "wba";
// console.log(title.toUpperCase());
// title = title.toUpperCase();
// console.log(title);
// console.log(title.toLowerCase());
// title = title.toLowerCase();
// console.log(title);

// const title = "Webbrain Academy";
//! indexOf()
// console.log(title.indexOf("e"));
// console.log(title.indexOf("bra"));
// console.log(title.indexOf("rain"));
// console.log(title.indexOf("g"));
// console.log(title.indexOf("e", 2));
// console.log(title.indexOf("e", 14));

//! lastIndexOf()
// console.log(title.lastIndexOf("e"));
// console.log(title.lastIndexOf("e", 0));

//! includes()
// console.log(title.includes("e"));
// console.log(title.includes("We"));
// console.log(title.includes("Webbrain Academy"));
// console.log(title.includes("WebbrainAcademy"));
// console.log(title.includes("Academy"));
// console.log(title.includes("G"));
// console.log(title.includes("r", 6));

//! startsWith(), endsWith()
// console.log(title.startsWith("W"));
// console.log(title.startsWith("y"));
// console.log(title.endsWith("y"));
// console.log(title.endsWith("W"));

//! padStart(), padEnd()
// console.log(title.padEnd(20, "."));
// console.log(title.padEnd(16, "."));
// console.log(title.padEnd(20, "web"));
// console.log(title.padEnd(20, "webbrain"));
// console.log(title.padStart(20, "."));
// console.log(title.padStart(16, "."));
// console.log(title.padStart(20, "web"));
// console.log(title.padStart(20, "webbrain"));

//! trim()
// const str = "   Webbrain Academy   ";
// console.log(str);
// console.log(str.trim());

//! trimStart()
// console.log(str.trimStart());

//! trimEnd()
// console.log(str.trimEnd(), "a");

//! slice(startIndex, endIndex)
// const title = "Webbrain Academy";
// console.log(title.slice(0, 8));
// console.log(title.slice(0, -2));
// console.log(title);

//! substr(startIndex, length)
// const title = "Webbrain Academy";
// console.log(title.substr(0, 8));
// console.log(title.substr(0, 2));
// console.log(title);

//! substring(startIndex, endIndex)
// const title = "Webbrain Academy";
// console.log(title.substring(0, 8));
// console.log(title.substring(0, 2));
// console.log(title.substring(2, 0));
// console.log(title.substring(0, -2));
// console.log(title);

//! split()
// const title = "Webb/rain/Aca/demy";
// console.log(title.split());
// console.log(title.split(""));
// console.log(title.split(" "));
// console.log(title.split("b"));
// console.log(title.split("/"));

//! concat()
// const title1 = "Web";
// const title2 = "brain";
// const title3 = " Aca";
// const title4 = "demy";
// console.log(title1 + title2 + title3 + title4);
// console.log(title1.concat(title2, title3, title4));
// console.log(title1);

//! valueOf()
// const str4 = new String("webbrain");
// console.log(str4);
// console.log(str4.valueOf());

//! String.raw
// const title = String.raw `Webbrain ${1+2}`;
// console.log(title);

//! replace()
// const title = "Webbrain Academy";
// console.log(title.replace("W", "T"));
// console.log(title.replace("e", "q"));
// console.log(title.replace("Web", "Bew"));
// console.log(title.replace(/e/g, "w"));

//! loops
// const title = "Webbrain Academy";
// for(let i = 0; i < title.length; i++) {
// 	console.log(title[i]);
// }
// for(let index in title) {
// 	console.log(index, title[index]);
// }
// for(let char of title) {
// 	console.log(char);
// }

//! Text da nechta bosh harf va nechta kichik harf borligini topish
// const countLetter = (str) => {
// 	let result = {capital: 0, lower: 0};
// 	for(let char of str) {
// 		if(char.toUpperCase() !== char) {
// 			result.lower += 1;
// 		} else if(char.toLowerCase() !== char) {
// 			result.capital += 1;
// 		}
// 	}
// 	return result;
// }
// console.log(countLetter("Webbrain Academy"));

//! Text da nechta qanaqa harf ishlatilgan
// const letters = (str) => {
// 	let result = {};
// 	str = str.toLowerCase();
// 	for(let char of str) {
// 		if(result[char]) result[char]++
// 		else result[char] = 1;
// 	}
// 	return result;
// }
// console.log(letters("Wwebbrain"));