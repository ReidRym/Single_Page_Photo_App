//   code for tooltips
const tooltips = document.querySelectorAll('.tt');
tooltips.forEach(t => {
  new bootstrap.Tooltip(t);
});

document.addEventListener("DOMContentLoaded", function () {
  const tooltips = document.querySelectorAll(".tt");
  tooltips.forEach((t) => {
    new bootstrap.Tooltip(t);
  });
});

