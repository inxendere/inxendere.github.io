document.addEventListener("DOMContentLoaded", function () {
  const windows = document.querySelectorAll(".window");

  // getting current screen height. currently used for centering stuff without css cuz fuck css
  // but could later be used for mobile builds
  var w = window.innerWidth;
  var h = window.innerHeight;
  // console.log("browser window width: ", w);
  // console.log("browser window height: ", h);

  let activeWindow = null;
  let initialX, initialY;

  // open greetings by default
  if (shouldRunOnFirstVisit) {
    openGreetings();
  }

  // Event listener for opening windows
  const openButtons = document.querySelectorAll(".open-window-button");
  openButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const imageId = button.id;
      const windowId = "window-" + imageId;
      const window = document.getElementById(windowId);

      if (window) {
        window.style.display = "block";

        centerWindow(window);

        bringWindowToFront(window);
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

  //bring a window to the front by setting a higher z-index
  function bringWindowToFront(window) {
    windows.forEach((w) => {
      w.style.zIndex = w === window ? "9999" : "1";
    });
  }

  function centerWindow(windowToCenter) {
    // centering window on click
    const windowWidth = windowToCenter.offsetWidth;
    const windowHeight = windowToCenter.offsetHeight;
    windowToCenter.style.left = w / 2 - windowWidth / 2 + "px";
    windowToCenter.style.top = h / 2 - windowHeight / 2 + "px";
  }

  function shouldRunOnFirstVisit() {
    // Check if a flag exists in local storage
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    // If the flag exists and is set to 'true', return false
    if (hasVisitedBefore === "true") {
      return false;
    }

    // Otherwise, set the flag in local storage and return true
    localStorage.setItem("hasVisitedBefore", "true");
    return true;
  }

  function openGreetings() {
    const windowId = "window-win-pfp";
    const window = document.getElementById(windowId);

    if (window) {
      window.style.display = "block";

      centerWindow(window);

      bringWindowToFront(window);
    }
  }
});
