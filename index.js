var subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";
subHeading.style.fontStyle = "italic";
document.getElementById("header").appendChild(subHeading);


var totalFruitsParagraph = document.createElement("p");
totalFruitsParagraph.textContent = "Total fruits: 4";
totalFruitsParagraph.id = "fruits-total";
document.querySelector("div:nth-child(2)").insertBefore(totalFruitsParagraph, document.querySelector(".fruits"));

var newFruit = document.createElement("li");
newFruit.textContent = "Grapes";
document.querySelector(".fruits").appendChild(newFruit);