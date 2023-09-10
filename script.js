// handles closing windows
document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".open-window-button");
  const windows = document.querySelectorAll(".window");

  openButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      windows[index].style.display = "block"; // Show the corresponding window
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
  let initialOffsetX, initialOffsetY;

  windows.forEach((window) => {
    const topBar = window.querySelector(".window-top-bar");

    topBar.addEventListener("mousedown", (e) => {
      activeWindow = window;
      initialOffsetX = e.clientX - topBar.getBoundingClientRect().left;
      initialOffsetY = e.clientY - topBar.getBoundingClientRect().top;
      window.style.zIndex = "9999"; // Bring the window to the front
    });
  });

  document.addEventListener("mousemove", (e) => {
    if (!activeWindow) return;
    const left = e.clientX - initialOffsetX;
    const top = e.clientY - initialOffsetY;

    // Ensure the window stays within the viewport
    activeWindow.style.left =
      Math.min(
        window.innerWidth - activeWindow.offsetWidth,
        Math.max(0, left)
      ) + "px";
    activeWindow.style.top =
      Math.min(
        window.innerHeight - activeWindow.offsetHeight,
        Math.max(0, top)
      ) + "px";
  });

  document.addEventListener("mouseup", () => {
    activeWindow = null;
  });
});
