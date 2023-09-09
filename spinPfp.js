const pfpImage = document.getElementById("profilepic");

let isSpinning = true;

function toggleSpin() {
  if (isSpinning) {
    pfpImage.classList.add("spinner");
  } else {
    pfpImage.classList.remove("spinner");
  }
}

toggleSpin();
