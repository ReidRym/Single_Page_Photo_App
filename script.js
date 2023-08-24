//   code for tooltips
const tooltips = document.querySelectorAll(".tt");
tooltips.forEach(t => {
  new bootstrap.Tooltip(t);
});

document.addEventListener("DOMContentLoaded", function () {
  const tooltips = document.querySelectorAll(".tt");
  tooltips.forEach(t => {
    new bootstrap.Tooltip(t);
  });
});

document.getElementById("superhero-link").onclick = function () {
  document.getElementById("image").src = "./assets/DSC_0316.jpg"; //  image source
  document.getElementById("image-modal").style.display = "block";
};

document.getElementById("session-scare").onclick = function () {
  document.getElementById("image").src = "./assets/DSC_0343.jpg"; //  image source
  document.getElementById("image-modal").style.display = "block";
};
document.getElementById("levelling-up").onclick = function () {
  document.getElementById("image").src = "./assets/DSC_0343.jpg"; //  image source
  document.getElementById("image-modal").style.display = "block";
};

document.getElementsByClassName("close")[0].onclick = function () {
  document.getElementById("image-modal").style.display = "none";
};
