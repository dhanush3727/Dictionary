const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  let input = document.getElementById("input-value").value;
  fetch(`${url}${input}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `<div class="word">
        <h3>${input}</h3>
        <button onclick = "playSound()"><i class="fa-solid fa-volume-high"></i></button>
      </div>
      <div class="sub-result">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic || ""}</p>
      </div>
      <div class="definition">
        <p>${data[0].meanings[0].definitions[0].definition}</p>
        <p>${data[0].meanings[0].definitions[0].example || ""}</p>
      </div>`;
      sound.setAttribute("src", `https:${data[0].phontics[1].audio}`);
    });
});
function playSound() {
  sound.play();
}
