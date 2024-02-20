function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userinstructionsInput = document.querySelector("#user-instructions");

  let apiKey = "a41b6cct8f269ddeo4da44bf9300d179";
  let context =
    " Your mission is to write Hungarian poem in seperated lines with <br/>.Do not include the title of the poem. Include the author of the poem";
  let prompt = `Please generate Hungarian poem about${userinstructionsInput.value}`;
  let ApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Hungarian poem about ${userinstructionsInput.value}</div>`;
  axios.get(ApiUrl).then(displayPoem);
}

let poemGeneratorElement = document.querySelector("#poemGenerator");
poemGeneratorElement.addEventListener("submit", generatePoem);
