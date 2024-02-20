function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "The poem will go header";
}

let poemGeneratorElement = document.querySelector("#poemGenerator");
poemGeneratorElement.addEventListener("submit", generatePoem);
