const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");
const body = document.createTextNode("Hello, World!");
newHeader.appendChild(body);
