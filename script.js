document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelector(".close-button");
  const window = document.querySelector(".window");

  closeButton.addEventListener("click", function () {
    window.style.display = "none"; // Hide the window (can use 'remove' instead of 'none' to remove it from the DOM)
  });
});
