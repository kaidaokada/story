const items = document.querySelectorAll(".menu-item");
const contents = document.querySelectorAll(".content");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const target = item.dataset.target;
    const visibility = item.dataset.visibility;

    document.documentElement.style.setProperty("--visibility", visibility);

    contents.forEach(c => {
      c.classList.remove("active");
      if (c.id === target) {
        setTimeout(() => c.classList.add("active"), 80);
      }
    });
  });
});

/* Parallax */
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 40;

  document.documentElement.style.setProperty("--mouseX", `${x}px`);
  document.documentElement.style.setProperty("--mouseY", `${y}px`);
});

/* Audio */
const audio = document.getElementById("bgm");
const button = document.getElementById("audioToggle");

let isPlaying = false;

button.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    button.textContent = "▶ Sound";
  } else {
    audio.volume = 0.3;
    audio.play();
    button.textContent = "⏸ Sound";
  }
  isPlaying = !isPlaying;
});

/* Legal */
const openLegal = document.getElementById("openLegal");
const closeLegal = document.getElementById("closeLegal");
const overlay = document.getElementById("legalOverlay");

openLegal.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

closeLegal.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.add("hidden");
  }
});
