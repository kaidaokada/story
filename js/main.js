const audio = document.getElementById("bgm");
const toggle = document.getElementById("audioToggle");
const slider = document.getElementById("volumeSlider");
const consent = document.getElementById("audioConsent");
const acceptBtn = document.getElementById("acceptAudio");
const declineBtn = document.getElementById("declineAudio");
const legal = document.getElementById("legalOverlay");
const openLegalBtn = document.getElementById("openLegal");
const closeLegalBtn = document.getElementById("closeLegal");
const items = Array.from(document.querySelectorAll(".menu-item"));
const contents = Array.from(document.querySelectorAll(".content"));
const contentBox = document.querySelector(".content-box");
const audioStatus = document.getElementById("audioStatus");

const AUDIO_VOLUME_KEY = "kaida-volume";
const AUDIO_CONSENT_KEY = "kaida-audio-consent";
const DEFAULT_SECTION_ID = "prolog";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let activeDialog = null;
let lastFocusedElement = null;

function updateToggleLabel() {
  const isPlaying = !audio.paused;
  toggle.textContent = isPlaying ? "\u23F8 Mukon no Hana" : "\u25B6 Mukon no Hana";
  toggle.setAttribute("aria-pressed", String(isPlaying));
  audioStatus.textContent = isPlaying ? "Musik spielt." : "Musik ist pausiert.";
}

function getSectionById(sectionId) {
  return contents.find((content) => content.id === sectionId) || contents[0];
}

function syncHash(sectionId, replace = false) {
  const nextHash = `#${sectionId}`;

  if (window.location.hash === nextHash) {
    return;
  }

  if (replace) {
    window.history.replaceState(null, "", nextHash);
    return;
  }

  window.history.pushState(null, "", nextHash);
}

function setActiveSection(targetId, visibility, options = {}) {
  const section = getSectionById(targetId);
  const resolvedId = section.id;
  const resolvedVisibility = visibility || items.find((item) => item.dataset.target === resolvedId)?.dataset.visibility || "0.2";

  items.forEach((item) => {
    const isActive = item.dataset.target === resolvedId;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

  contents.forEach((content) => {
    const isActive = content.id === resolvedId;
    content.classList.toggle("active", isActive);
    content.hidden = !isActive;
  });

  document.documentElement.style.setProperty("--visibility", resolvedVisibility);

  if (options.updateHash !== false) {
    syncHash(resolvedId, options.replaceHash === true);
  }

  if (options.focusContent === true) {
    contentBox.tabIndex = -1;
    contentBox.focus();
  }
}

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => !element.hasAttribute("disabled"));
}

function setModalState(isOpen) {
  document.body.classList.toggle("modal-open", isOpen);
}

function openDialog(dialog, trigger) {
  lastFocusedElement = trigger || document.activeElement;
  activeDialog = dialog;
  dialog.classList.remove("hidden");
  dialog.setAttribute("aria-hidden", "false");
  setModalState(true);

  const focusableElements = getFocusableElements(dialog);
  const firstFocusable = focusableElements[0];

  if (firstFocusable) {
    firstFocusable.focus();
  }
}

function closeDialog(dialog) {
  dialog.classList.add("hidden");
  dialog.setAttribute("aria-hidden", "true");

  if (activeDialog === dialog) {
    activeDialog = null;
  }

  if (!activeDialog) {
    setModalState(false);
  }

  if (dialog === legal) {
    openLegalBtn.setAttribute("aria-expanded", "false");
  }

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function openLegal() {
  openLegalBtn.setAttribute("aria-expanded", "true");
  openDialog(legal, openLegalBtn);
}

function closeLegal() {
  closeDialog(legal);
}

function saveVolume() {
  try {
    localStorage.setItem(AUDIO_VOLUME_KEY, slider.value);
  } catch (_error) {
    // Ignore storage issues so the page keeps working in restricted contexts.
  }
}

function saveConsent(value) {
  try {
    localStorage.setItem(AUDIO_CONSENT_KEY, value);
  } catch (_error) {
    // Ignore storage issues so consent still works for this session.
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

  audio.volume = Number.parseFloat(slider.value) || 0.75;

  if (savedConsent === "accepted") {
    consent.classList.add("hidden");
    consent.setAttribute("aria-hidden", "true");
    playAudio();
  } else if (savedConsent === "declined") {
    consent.classList.add("hidden");
    consent.setAttribute("aria-hidden", "true");
  } else {
    openDialog(consent, toggle);
  }
}

async function playAudio() {
  try {
    await audio.play();
  } catch (_error) {
    updateToggleLabel();
  }
}

function closeConsent() {
  closeDialog(consent);
}

function trapFocus(event) {
  if (!activeDialog || event.key !== "Tab") {
    return;
  }

  const focusableElements = getFocusableElements(activeDialog);

  if (focusableElements.length === 0) {
    event.preventDefault();
    return;
  }

  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function handleHashNavigation() {
  const targetId = window.location.hash.replace("#", "");
  const matchingItem = items.find((item) => item.dataset.target === targetId);

  if (matchingItem) {
    setActiveSection(targetId, matchingItem.dataset.visibility, { updateHash: false });
    return;
  }

  setActiveSection(DEFAULT_SECTION_ID, "0.2", { replaceHash: true });
}

slider.addEventListener("input", () => {
  audio.volume = Number.parseFloat(slider.value) || 0;
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

consent.addEventListener("click", (event) => {
  if (event.target === consent) {
    closeConsent();
  }
});

acceptBtn.addEventListener("click", async () => {
  saveConsent("accepted");
  closeConsent();
  await playAudio();
  updateToggleLabel();
});

declineBtn.addEventListener("click", () => {
  saveConsent("declined");
  closeConsent();
  audio.pause();
  updateToggleLabel();
});

document.addEventListener("keydown", (event) => {
  trapFocus(event);

  if (event.key === "Escape") {
    if (activeDialog === legal) {
      closeLegal();
    } else if (activeDialog === consent) {
      closeConsent();
    }
  }
});

window.addEventListener("hashchange", handleHashNavigation);

audio.addEventListener("play", updateToggleLabel);
audio.addEventListener("pause", updateToggleLabel);
audio.addEventListener("ended", updateToggleLabel);

loadPreferences();
handleHashNavigation();
updateToggleLabel();
