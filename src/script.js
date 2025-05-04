function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-content", {
    strings: ["Hello World"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#english-generator");
poemFormElement.addEventListener("submit", generatePoem);
