function displayPoem(response) {
  new Typewriter("#poem-content", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let formInputInstructions = document.querySelector(
    "#form-input-instructions"
  );
  let apiKey = `8944f371f4bfa78290t3baa86a330do0`;
  let prompt = `User instructions: Generate an English poem about ${formInputInstructions.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 5 line poem in basic html and separate each line with a <br />.Do not include ```html in the poem. Make sure to follow the user instructions. You can include the title of the poem as a heading but not inside the poem. Break a line with <br /> at the end of poem and sign the poem with 'SheCodes AI' inside a <strong> element after the <br /> at the end of poem and NOT at the beginning of the poem .";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);

  let poemElement = document.querySelector("#poem-content");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = ` <div class="generating"> ⏳Generating a poem: ${formInputInstructions.value} </div>`;
}

let poemFormElement = document.querySelector("#english-generator");
poemFormElement.addEventListener("submit", generatePoem);
