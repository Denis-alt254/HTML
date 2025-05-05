// by id

const element = document.getElementById("myElement");
console.log(element); // Logs the element with id "myElement"

// by class name

const elements = document.getElementsByClassName("myClass");
console.log(elements); // Logs a collection of elements with class "myClass"

// by tag name
const listItems = document.getElementsByTagName("li");
console.log(listItems); // Logs a collection of <li> elements

// by query selector
const firstItem = document.querySelector(".myClass"); // Selects the first element with class "myClass"
console.log(firstItem); // Logs the first element with class "myClass"