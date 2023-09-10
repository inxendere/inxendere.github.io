document.addEventListener("DOMContentLoaded", function () {
  const windows = document.querySelectorAll(".window");
  let activeWindow = null;
  let initialX, initialY;

  // Function to bring a window to the front by setting a higher z-index
  function bringWindowToFront(window) {
    windows.forEach((w) => {
      w.style.zIndex = w === window ? "9999" : "1";
    });
  }

  // Event listener for opening windows
  const openButtons = document.querySelectorAll(".open-window-button");
  openButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const imageId = button.id;
      const windowId = "window-" + imageId;
      const window = document.getElementById(windowId);
      if (window) {
        bringWindowToFront(window);
        window.style.display = "block";
      }
    });
  });

  // Event listener for closing windows
  const closeButtons = document.querySelectorAll(".close-button");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const window = button.closest(".window");
      if (window) {
        window.style.display = "none";
      }
    });
  });

  // Event listeners for dragging windows
  windows.forEach((window) => {
    const topBar = window.querySelector(".window-top-bar");

    topBar.addEventListener("mousedown", (e) => {
      activeWindow = window;
      initialX = e.clientX - window.getBoundingClientRect().left;
      initialY = e.clientY - window.getBoundingClientRect().top;
      bringWindowToFront(window);
    });
  });

  document.addEventListener("mousemove", (e) => {
    if (!activeWindow) return;
    const left = e.clientX - initialX;
    const top = e.clientY - initialY;

    activeWindow.style.left = left + "px";
    activeWindow.style.top = top + "px";
  });

  document.addEventListener("mouseup", () => {
    activeWindow = null;
  });
});
