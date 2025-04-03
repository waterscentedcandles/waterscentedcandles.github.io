function playTape(section) {
  alert("You selected the " + section + " tape. (Interactive content coming soon!)");
}

function toggleMusic() {
  const jazz = document.getElementById("jazz");
  if (jazz.paused) {
    jazz.play();
  } else {
    jazz.pause();
  }
}
