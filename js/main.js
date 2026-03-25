const audio = document.getElementById("bgm");
const toggle = document.getElementById("audioToggle");
const slider = document.getElementById("volumeSlider");
const consent = document.getElementById("audioConsent");
const acceptBtn = document.getElementById("acceptAudio");
const declineBtn = document.getElementById("declineAudio");
const legal = document.getElementById("legalOverlay");
const openLegalBtn = document.getElementById("openLegal");
const closeLegalBtn = document.getElementById("closeLegal");
const galleryGrid = document.getElementById("galleryGrid");
const galleryLightbox = document.getElementById("galleryLightbox");
const galleryLightboxImage = document.getElementById("galleryLightboxImage");
const galleryLightboxCaption = document.getElementById("galleryLightboxCaption");
const closeGalleryLightboxBtn = document.getElementById("closeGalleryLightbox");
const items = Array.from(document.querySelectorAll(".menu-item"));
const contents = Array.from(document.querySelectorAll(".content"));
const contentBox = document.querySelector(".content-box");
const audioStatus = document.getElementById("audioStatus");

const AUDIO_VOLUME_KEY = "kaida-volume";
const AUDIO_CONSENT_KEY = "kaida-audio-consent";
const DEFAULT_SECTION_ID = "prolog";
const GALLERY_DIRECTORY = "assets/images/gallery/";
const GALLERY_FILE_PATTERN = /\.(avif|gif|jpe?g|png|webp)$/i;
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

function closeGalleryLightbox() {
  closeDialog(galleryLightbox);
}

function formatGalleryLabel(fileName) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function createGalleryCard(imagePath) {
  const fileName = imagePath.split("/").pop() || imagePath;
  const label = formatGalleryLabel(fileName);
  const button = document.createElement("button");
  const image = document.createElement("img");
  const labelBox = document.createElement("span");
  const title = document.createElement("span");
  const meta = document.createElement("span");

  button.type = "button";
  button.className = "gallery-card";
  button.setAttribute("aria-label", `${label} vergroessern`);
  button.dataset.imagePath = imagePath;
  button.dataset.imageLabel = label;

  image.src = imagePath;
  image.alt = label;
  image.loading = "lazy";
  image.decoding = "async";

  labelBox.className = "gallery-card-label";
  title.className = "gallery-card-title";
  title.textContent = label;
  meta.className = "gallery-card-meta";
  meta.textContent = "Klicken zum Oeffnen";

  labelBox.append(title, meta);
  button.append(image, labelBox);

  button.addEventListener("click", () => {
    galleryLightboxImage.src = imagePath;
    galleryLightboxImage.alt = label;
    galleryLightboxCaption.textContent = label;
    openDialog(galleryLightbox, button);
  });

  return button;
}

function renderGallery(imagePaths) {
  galleryGrid.replaceChildren();

  if (imagePaths.length === 0) {
    const empty = document.createElement("p");
    empty.className = "gallery-empty";
    empty.textContent = "Im Galerieordner wurden noch keine unterstuetzten Bilddateien gefunden.";
    galleryGrid.append(empty);
    return;
  }

  imagePaths.forEach((imagePath) => {
    galleryGrid.append(createGalleryCard(imagePath));
  });
}

async function loadGallery() {
  try {
    const response = await fetch(GALLERY_DIRECTORY, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Gallery request failed with status ${response.status}`);
    }

    const markup = await response.text();
    const parser = new DOMParser();
    const documentFragment = parser.parseFromString(markup, "text/html");
    const imagePaths = Array.from(documentFragment.querySelectorAll("a[href]"))
      .map((link) => link.getAttribute("href") || "")
      .filter((href) => GALLERY_FILE_PATTERN.test(href))
      .map((href) => new URL(href, `${window.location.origin}/${GALLERY_DIRECTORY}`).pathname.replace(/^\//, ""))
      .sort((left, right) => left.localeCompare(right, undefined, { sensitivity: "base" }));

    renderGallery(imagePaths);
  } catch (_error) {
    galleryGrid.innerHTML = '<p class="gallery-empty">Die Galerie konnte nicht automatisch aus dem Ordner gelesen werden. Bitte nutze einen lokalen Server mit aktivierter Verzeichnisanzeige, damit neue Bilder automatisch erscheinen.</p>';
  }
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
    } else if (activeDialog === galleryLightbox) {
      closeGalleryLightbox();
    }
  }
});

window.addEventListener("hashchange", handleHashNavigation);

audio.addEventListener("play", updateToggleLabel);
audio.addEventListener("pause", updateToggleLabel);
audio.addEventListener("ended", updateToggleLabel);

galleryLightbox.addEventListener("click", (event) => {
  if (event.target === galleryLightbox) {
    closeGalleryLightbox();
  }
});

closeGalleryLightboxBtn.addEventListener("click", closeGalleryLightbox);

loadPreferences();
handleHashNavigation();
updateToggleLabel();
loadGallery();
