function goToMeme() {
  localStorage.setItem("playSax", "true");
  window.location.href = "meme.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("sax");

  if (audio && localStorage.getItem("playSax") === "true") {
    audio.volume = 0.35;
    audio.play();
  }
});
