const audio = document.getElementById("bgm");
const toggle = document.getElementById("audioToggle");
const slider = document.getElementById("volumeSlider");
const consent = document.getElementById("audioConsent");
const acceptBtn = document.getElementById("acceptAudio");
const declineBtn = document.getElementById("declineAudio");
const legal = document.getElementById("legalOverlay");
const openLegalBtn = document.getElementById("openLegal");
const closeLegalBtn = document.getElementById("closeLegal");
const items = document.querySelectorAll(".menu-item");
const contents = document.querySelectorAll(".content");

const AUDIO_VOLUME_KEY = "kaida-volume";
const AUDIO_CONSENT_KEY = "kaida-audio-consent";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateToggleLabel() {
  const isPlaying = !audio.paused;
  toggle.textContent = isPlaying ? "\u23F8 Mukon no Hana" : "\u25B6 Mukon no Hana";
  toggle.setAttribute("aria-pressed", String(isPlaying));
}

function setActiveSection(targetId, visibility) {
  items.forEach((item) => {
    const isActive = item.dataset.target === targetId;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

  contents.forEach((content) => {
    const isActive = content.id === targetId;
    content.classList.toggle("active", isActive);
    content.hidden = !isActive;
  });

  document.documentElement.style.setProperty("--visibility", visibility);
}

function openLegal() {
  legal.classList.remove("hidden");
}

function closeLegal() {
  legal.classList.add("hidden");
}

function saveVolume() {
  try {
    localStorage.setItem(AUDIO_VOLUME_KEY, slider.value);
  } catch (_error) {
    // Ignore storage issues so the page keeps working in restricted contexts.
  }
}

function loadPreferences() {
  let savedVolume = null;
  let savedConsent = null;

  try {
    savedVolume = localStorage.getItem(AUDIO_VOLUME_KEY);
    savedConsent = localStorage.getItem(AUDIO_CONSENT_KEY);
  } catch (_error) {
    savedVolume = null;
    savedConsent = null;
  }

  if (savedVolume !== null) {
    slider.value = savedVolume;
  }

  audio.volume = parseFloat(slider.value);

  if (savedConsent === "accepted" || savedConsent === "declined") {
    consent.classList.add("hidden");
  }
}

async function playAudio() {
  try {
    await audio.play();
  } catch (_error) {
    updateToggleLabel();
  }
}

slider.addEventListener("input", () => {
  audio.volume = parseFloat(slider.value);
  saveVolume();
});

toggle.addEventListener("click", async () => {
  if (audio.paused) {
    await playAudio();
  } else {
    audio.pause();
  }

  updateToggleLabel();
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    setActiveSection(item.dataset.target, item.dataset.visibility);
  });
});

if (!prefersReducedMotion.matches) {
  document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 40;
    const y = (event.clientY / window.innerHeight - 0.5) * 40;

    document.documentElement.style.setProperty("--mouseX", `${x}px`);
    document.documentElement.style.setProperty("--mouseY", `${y}px`);
  });
}

openLegalBtn.addEventListener("click", openLegal);
closeLegalBtn.addEventListener("click", closeLegal);

legal.addEventListener("click", (event) => {
  if (event.target === legal) {
    closeLegal();
  }
});

acceptBtn.addEventListener("click", async () => {
  try {
    localStorage.setItem(AUDIO_CONSENT_KEY, "accepted");
  } catch (_error) {
    // Ignore storage issues so consent still works for this session.
  }
  consent.classList.add("hidden");
  await playAudio();
  updateToggleLabel();
});

declineBtn.addEventListener("click", () => {
  try {
    localStorage.setItem(AUDIO_CONSENT_KEY, "declined");
  } catch (_error) {
    // Ignore storage issues so consent still works for this session.
  }
  consent.classList.add("hidden");
  audio.pause();
  updateToggleLabel();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLegal();
  }
});

audio.addEventListener("play", updateToggleLabel);
audio.addEventListener("pause", updateToggleLabel);

loadPreferences();
setActiveSection("prolog", "0.2");
updateToggleLabel();
