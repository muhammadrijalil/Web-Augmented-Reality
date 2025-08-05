function toggleInfo() {
  const box = document.getElementById("detailBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}
function toggleInfo() {
  const box = document.getElementById("detailBox");
  box.classList.toggle("hide");
}
function launchAR() {
  const viewer = document.querySelector("model-viewer");
  viewer.activateAR();
}
