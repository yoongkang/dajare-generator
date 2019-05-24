const dajareList = [
  "アルミ缶の上にあるみかん",
  "ウランは売らん",
  "ニューヨークで入浴",
  "レモンの入れもん",
  "車でクルまで来るまあで"
];

const updateText = () => {
  let textElement = document.getElementById("dajare");
  let randomNumber = Math.floor(Math.random() * dajareList.length);
  textElement.textContent = dajareList[randomNumber];
}

document.addEventListener("DOMContentLoaded", () => {
  updateText();
  let btn = document.querySelector("button");
  btn.addEventListener("click", e => {
    updateText();
  });
});
