function playTape(section) {
  const existing = document.getElementById("dynamic-section");
  if (existing) existing.remove();

  const content = {
    about: `
      <h2 class="neon-text">About Me</h2>
      <p class="loading-text">
        I'm Audrey, and I like creating things and trying new ideas.<br>
        Here’s my portfolio — a space for experimenting, exploring, and expressing.
      </p>
    `,
    projects: `
      <h2 class="neon-text">Projects</h2>
      <p class="loading-text">Coming soon: film stills, short stories, and visual experiments.</p>
    `,
    contact: `
      <h2 class="neon-text">Contact</h2>
      <p class="loading-text">Hit me up: <br><a href="mailto:your@email.com">your@email.com</a></p>
    `
  };

  const div = document.createElement("div");
  div.id = "dynamic-section";
  div.innerHTML = content[section] || "";
  document.body.appendChild(div);
}


function toggleMusic() {
  const jazz = document.getElementById("jazz");
  if (jazz.paused) {
    jazz.play();
  } else {
    jazz.pause();
  }
}
