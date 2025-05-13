function poemGenerator(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "به روز مرگ چو تابوت من روان باشد",
    autoStart: true,
    delay: "100",
    cursor: "",
  });
}

let peomElement = document.querySelector("#poem-generator");
peomElement.addEventListener("submit", poemGenerator);
