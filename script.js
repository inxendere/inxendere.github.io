// handles closing windows
document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".open-window-button");

  openButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the ID of the clicked image
      const imageId = button.id;

      // Construct the ID of the associated window
      const windowId = "window-" + imageId;

      // Find the window by its ID
      const window = document.getElementById(windowId);

      // If the window exists, open it
      if (window) {
        window.style.display = "block";
      }
    });
  });

  const closeButtons = document.querySelectorAll(".close-button");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Find the parent window and hide it
      const window = button.closest(".window");
      if (window) {
        window.style.display = "none";
      }
    });
  });
});

// handles dragging window
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const windows = document.querySelectorAll(".window");
  let activeWindow = null;
  let initialX, initialY;

  windows.forEach((window) => {
    const topBar = window.querySelector(".window-top-bar");

    topBar.addEventListener("mousedown", (e) => {
      activeWindow = window;
      initialX = e.clientX - window.getBoundingClientRect().left;
      initialY = e.clientY - window.getBoundingClientRect().top;
      // Bring the clicked window to the front
      windows.forEach((w) => {
        w.style.zIndex = w === window ? "9999" : "1";
      });
    });
  });

  document.addEventListener("mousemove", (e) => {
    if (!activeWindow) return;
    const left = e.clientX - initialX;
    const top = e.clientY - initialY;

    // Ensure the window stays within the viewport
    activeWindow.style.left = left + "px";
    activeWindow.style.top = top + "px";
  });

  document.addEventListener("mouseup", () => {
    activeWindow = null;
  });
});
