function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: "100",
    cursor: "",
  });
}

function poemGenerator(event) {
  event.preventDefault();
  let userInstruction = document.querySelector("#user-instruction");
  let apiKey = "8tc45bb70811ad02c7716f84fe4ocbe3";
  let prompt = `Write a Persian poem about ${userInstruction.value}`;
  let context =
    "You are a romantic poeom generator AI an love short poems. Your maission is to generate a four line Dari poem from Afgan and Persian poets and separate each line with a <br />.  Make sure to follow the user instruction. please sign it with the <strong>poet Name</strong>  ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let peomElement = document.querySelector("#poem-generator");
peomElement.addEventListener("submit", poemGenerator);
