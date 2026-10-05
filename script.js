function firstWord(s) {
  // your code here
	if(!s || s.trim() === "") return "";

	return s.trim().split(" ")[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
