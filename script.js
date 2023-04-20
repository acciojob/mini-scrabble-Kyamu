//your code here
// JavaScript code
const evaluatedText = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");

evaluatedText.addEventListener("input", () => {
  letterCount.textContent = evaluatedText.value.length;
});

