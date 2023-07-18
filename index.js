const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");
// document.body.append(newHeader)
newHeader.setAttribute("id", "victory")
newHeader.textContent = "Alvin is the champion"