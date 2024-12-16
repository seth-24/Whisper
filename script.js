// script.js
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");
  
  progressBars.forEach(bar => {
    const progress = bar.getAttribute("data-progress");
    bar.style.width = progress;
  });
});
