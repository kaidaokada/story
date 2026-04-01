const CHARACTER_CONFIG = {
  kaida: {
    title: "Kaida Okada",
    eyebrow: "\u8A18\u61B6\u3068\u5F71\u306E\u7269\u8A9E",
    subtitle: "Eine Geschichte zwischen Erinnerung, Verlust und dem, was im Schatten überlebt.",
    audioLabel: "Mukon no Hana",
    audioTracks: [
      {
        label: "Mukon no Hana",
        src: "assets/audio/kaida.ogg",
        loop: false
      },
      {
        label: "Bossfight",
        src: "assets/audio/bossfight.ogg",
        loop: true
      }
    ],
    galleryImages: [
      "assets/images/gallery_kaida/kaida_glare.png",
      "assets/images/gallery_kaida/kaida_sporty.png"
    ],
    sections: [
      {
        id: "prolog",
        nav: "Prolog",
        title: "Prolog",
        background: "assets/images/backgrounds/Kaida/background_kaida.png",
        paragraphs: [
          "Der Wind trägt Erinnerungen, die längst hätten vergessen sein sollen. Nicht laut, nicht klar, sondern leise, wie ein Echo aus einer Zeit, die niemand mehr greifen kann. Zwischen Schatten und Stille existiert etwas, das sich nicht vollständig zeigen will. Eine Präsenz, die spürbar ist, aber nie ganz sichtbar wird.",
          "Ein Name kehrt dabei immer wieder zurück: Kaida. Für manche ist sie nichts weiter als eine gewöhnliche Frau, für andere etwas, das sich nicht in einfache Worte fassen lässt. Je länger man hinsieht, desto mehr beginnt das Bild zu verschwimmen, als würde sich die Wahrheit selbst entziehen.",
          "Und vielleicht ist genau das der Moment, in dem man begreift, dass Kaida nicht das ist, was man sieht, sondern das, was sich dahinter verbirgt."
        ]
      },
      {
        id: "second",
        nav: "Die Sushimeisterin",
        title: "Kaida - Die Sushimeisterin",
        background: "assets/images/backgrounds/Kaida/background_sushi.png",
        paragraphs: [
          "Im Futomaki ist Kaida eine feste Konstante. Eine Präsenz, die man nicht übersehen kann, nicht weil sie laut ist, sondern weil sie den Raum erfüllt. Ihr Lachen ist warm, ehrlich und frei von jeder Zurückhaltung. Es nimmt Schwere aus Gesprächen und lässt selbst schwierige Tage für einen Moment leichter wirken.",
          "Sie spricht, wie sie denkt: direkt, ungefiltert und ohne jede Form von taktischem Kalkül. Für viele wirkt sie dadurch fast einfach, als hätte sie nie gelernt, Dinge kompliziert zu machen oder sich hinter einer Fassade zu verstecken. Doch genau in dieser Offenheit liegt eine Form von Stärke, die man erst erkennt, wenn man genauer hinsieht.",
          "Denn sobald es um die Personen geht, die ihr nahestehen, verändert sich etwas. Ihre Haltung wird fester, ihr Blick klarer. Ihre Angestellten sind für sie mehr als nur Teil eines Geschäfts, sie sind Verantwortung, vielleicht sogar Familie. Und wer zu ihr gehört, wird beschützt. Ohne Zögern, ohne Diskussion, ohne einen zweiten Gedanken.",
          "Für Außenstehende bleibt sie die Frau hinter dem Tresen, die Sushi macht, lacht und lebt. Doch wer genauer hinsieht, erkennt, dass diese Einfachheit kein Zufall ist. Sie ist gewählt."
        ]
      },
      {
        id: "third",
        nav: "Die Kunoichi",
        title: "Kaida - Kunoichi",
        background: "assets/images/backgrounds/Kaida/background_kunoichi.png",
        paragraphs: [
          "Was niemand sieht, ist das, was aus Kaida gemacht wurde. Sie wurde nicht geformt, um zu leben, sondern um zu funktionieren. Jeder Schritt, jede Bewegung, jeder Gedanke wurde auf ein Ziel reduziert: Effizienz.",
          "Ihr Name innerhalb des Clans lautete Mukon no Hana, die Blume ohne Wurzeln. Ein Titel ohne Wärme, ohne Identität, nur ein Zeichen dafür, dass nichts Menschliches mehr übrig war. Gefühle wurden nicht unterdrückt, sie wurden entfernt. Systematisch, gründlich und ohne Rest.",
          "Was blieb, war Klarheit. Eine kalte, präzise Form von Existenz. Kaida führte Befehle aus, ohne zu zögern, ohne zu hinterfragen und ohne dabei etwas zu empfinden. Genau das machte sie so gefährlich.",
          "Bis zu dem Moment, der niemals hätte passieren dürfen. Kaida lernte, was Liebe ist. Nicht plötzlich und nicht laut, sondern leise und dann unumkehrbar. Etwas in ihr begann zu leben, das längst verloren geglaubt war.",
          "Mit diesem Gefühl kam ein Riss. Ein Bruch zwischen dem, was sie war, und dem, was sie sein wollte. Sie entschied sich gegen ihre Bestimmung und für ein Leben, das ihr nie zugedacht war.",
          "Und sie verlor alles. Ihre Frau. Ihre Tochter.",
          "Seit diesem Tag lässt Kaida niemanden mehr wirklich nah an sich heran. Nicht aus Angst, sondern aus Überzeugung. Denn in ihren Augen ist sie selbst nichts, das Sicherheit geben kann, sondern etwas, das zerstört."
        ]
      },
      {
        id: "fourth",
        nav: "Das Kind?",
        title: "Kaida - Das Kind?",
        background: "assets/images/backgrounds/Kaida/background_child.png",
        paragraphs: [
          "Über ihre Kindheit spricht Kaida nicht. Es ist kein Zögern und kein Ausweichen, sondern eine bewusste Entscheidung. Sie weiß genau, woher sie kommt, kennt ihre Ursprünge bis ins Detail, doch dieser Teil ihrer Geschichte bleibt verschlossen.",
          "Vielleicht, weil er Antworten liefern würde, die niemand hören will. Vielleicht, weil er ein Bild zeichnen würde, das nicht zu dem passt, was man heute sieht. Oder vielleicht, weil genau dort der Punkt liegt, an dem Kaida selbst aufgehört hat, zurückzublicken."
        ]
      },
      {
        id: "fifth",
        nav: "Von Schöpfung und Zerstörung",
        title: "Von Schöpfung und Zerstörung",
        background: "assets/images/backgrounds/Kaida/zerstoerung.png",
        hiddenUntilTrack: 1,
        paragraphs: [
          "Kaidas Ausbildung zur Kunoichi verlangte nie nur Disziplin. Sie verlangte die völlige Zerschlagung jeder Grenze, die ein Mensch instinktiv zieht, wenn Schmerz, Erschöpfung und Schuld zu groß werden. Genau dort begann etwas in ihr zu wachsen, das mit Können allein nicht mehr zu beschreiben ist.",
          "Sie lernte, ihren Körper mit absoluter Präzision zu führen. Jeder Atemzug, jede Haltung, jede Kraftreserve gehorcht ihr. Doch dieselbe Kontrolle hat einen Preis, weil sie auf einem Fundament ruht, das aus Gewalt, Überdehnung und zahllosen Leben gebaut wurde, die in diesem Training bedeutungslos waren.",
          "Deshalb benutzt Kaida diese Kraft nicht mit gutem Gewissen. Nicht, weil sie an ihrer Fähigkeit zweifelt, sondern weil sie genau weiß, wie leicht Perfektion in Vernichtung kippen kann, wenn ein einziger Moment der Unachtsamkeit genügt. Wer kann schon sagen, dass nicht eines Tages wieder ein Leben an ihr hängen bleibt. Eines mehr, von so unendlich vielen."
        ]
      }
    ]
  },
  tori: {
    title: "Torinai Nihal",
    eyebrow: "Mondwächterin",
    subtitle: "Mondwächterin",
    audioLabel: "Torinai Nihal",
    audioTracks: [
      {
        label: "Torinai Nihal",
        src: "assets/audio/tori.ogg",
        loop: true
      }
    ],
    galleryImages: [
      "assets/images/gallery_tori/tori_example.png"
    ],
    sections: [
      {
        id: "prolog",
        nav: "Prolog",
        title: "Prolog",
        background: "assets/images/backgrounds/Tori/background_tori_b.png",
        paragraphs: [
          "Diese Geschichte handelt von einer Heimatlosen, die ihren Hafen gefunden hat. Sie erinnert daran, dass selbst die aussichtslosesten Wege nicht im Nichts enden müssen, sondern in etwas Ganzem, etwas Erfüllendem münden können.",
          "Was Tori einst genommen wurde, schien unwiederbringlich verloren: Herkunft, Zugehörigkeit, der Klang eines wahren Namens. Und doch führte ausgerechnet die Leere sie an einen Punkt, an dem all das in anderer Form zu ihr zurückkehrte.",
          "Am Ende steht keine makellose Heldin, sondern eine Frau, die trotz Verlust, Gewalt und Einsamkeit genau das wiedergefunden hat, was man ihr geraubt hatte: Wurzeln, Familie und einen Ort, an dem sie bleiben darf."
        ]
      },
      {
        id: "second",
        nav: "Torinai - Die Wächterin",
        title: "Torinai - Die Wächterin",
        background: "assets/images/backgrounds/Tori/background_tori_w.png",
        paragraphs: [
          "Auch wenn viele Tori nicht auf diese Weise kennen, trägt sie ein Erbe in sich, dessen volle Tragweite nicht einmal ihr selbst immer vollkommen bewusst ist. In ihr lebt die Linie des Clans Nihal weiter, und mit ihr ein Dienst, der weit über gewöhnliche Pflichterfüllung hinausgeht.",
          "Tori dient der Gottheit ihrer Familie mit Hingabe und Leidenschaft. Was für Außenstehende wie blinder Gehorsam wirken könnte, ist für sie vielmehr ein Einklang aus Bestimmung und Begabung. Gerade im Dienst an diesem Wesen darf sie das sein, worin sie am stärksten ist: entschlossen, scharf, unerschütterlich.",
          "Diese Bindung ist für Tori absolut, weil ihre Gottheit ihr nicht nur Aufgaben gab, sondern ihr die Geschichte ihres Clans öffnete. Wo einst Leere war, fanden sich plötzlich Wurzeln. Wo nur Tori geblieben war, stand auf einmal wieder ein voller Name: Torinai Nihal."
        ]
      },
      {
        id: "third",
        nav: "Tori - Die Söldnerin",
        title: "Tori - Die Söldnerin",
        background: "assets/images/backgrounds/Tori/background_tori_soldner.png",
        paragraphs: [
          "Toris Erwachsenenleben war lange von der Arbeit als Söldnerin bestimmt. Sie reiste weit, sah mehr von der Welt, als sie je für möglich gehalten hätte, und lernte an ungezählten Orten, wie teuer Sicherheit oft erkauft wird.",
          "Auf diesen Wegen begegnete sie Liebe und Verlust, aber auch dem unbedingten Wunsch, jemanden wirklich schützen zu wollen. Dieser Wunsch veränderte sie tiefer als jede Schlacht. Er gab ihrem Leben Richtung, Verantwortung und einen Grund, über sich selbst hinauszuwachsen.",
          "Von der krawallsüchtigen Jugendlichen zur Frau mit Disziplin, Selbstwertgefühl und einem festen Gefühl für Verantwortung war es ein sehr weiter Weg. Gerade deshalb wirkt Tori heute nicht wie jemand, dem Reife einfach zufiel, sondern wie jemand, der jeden einzelnen Schritt dorthin teuer bezahlen musste."
        ]
      },
      {
        id: "fourth",
        nav: "Ein Fass voll Einsamkeit",
        title: "Ein Fass voll Einsamkeit",
        background: "assets/images/backgrounds/Tori/background_tori_child.png",
        paragraphs: [
          "Tori verlor früh alles: Familie, Clan und Identität. Als sie eines Morgens in einem Fass im Hafen von Limsa Lominsa erwachte, war von ihrer Vergangenheit kaum mehr übrig als ein einzelner Name. Tori. Nur Tori.",
          "Ihre Kindheit war von Verwirrung, Überleben und salziger Kälte geprägt. Zwischen Seeleuten, morschem Holz und dem Geruch nach Meer stahl sie sich von Tag zu Tag, schlief in ihrem Fass und hielt sich an dem fest, was notdürftig wie ein Zuhause wirkte.",
          "Wahrscheinlich wäre sie dort irgendwann still zugrunde gegangen, wenn nicht eines Tages eine andere kleine Miqo'te auf sie aufmerksam geworden wäre. Aus einem neugierigen Blick in Tori's Fass entstand zuerst Freundschaft, dann Loyalität und schließlich Familie.",
          "Zum ersten Mal lernte Tori, wie es sich anfühlt, nicht jeden Tag ums nackte Überleben kämpfen zu müssen. Sie wurde adoptiert, Tessia wurde ihre Schwester, und aus einem Kind ohne Herkunft wurde jemand, der bedingungslose Liebe nicht nur erträumen, sondern wirklich erfahren durfte."
        ]
      }
    ]
  }
};

const BACKGROUND_FADE_MS = 650;

const body = document.body;
const siteShell = document.getElementById("siteShell");
const pageBackgroundPrimary = document.getElementById("pageBackgroundPrimary");
const pageBackgroundSecondary = document.getElementById("pageBackgroundSecondary");
const selectionScreen = document.getElementById("selectionScreen");
const selectionButtons = Array.from(document.querySelectorAll("[data-character-choice]"));
const menuItemsContainer = document.getElementById("menuItems");
const audio = document.getElementById("bgm");
const audioSource = document.getElementById("bgmSource");
const toggle = document.getElementById("audioToggle");
const slider = document.getElementById("volumeSlider");
const consent = document.getElementById("audioConsent");
const acceptBtn = document.getElementById("acceptAudio");
const declineBtn = document.getElementById("declineAudio");
const legal = document.getElementById("legalOverlay");
const openLegalBtn = document.getElementById("openLegal");
const closeLegalBtn = document.getElementById("closeLegal");
const openSelectionBtn = document.getElementById("openSelection");
const jumpToGalleryBtn = document.getElementById("jumpToGallery");
const galleryOverlay = document.getElementById("galleryOverlay");
const closeGalleryOverlayBtn = document.getElementById("closeGalleryOverlay");
const galleryGrid = document.getElementById("galleryGrid");
const galleryLightbox = document.getElementById("galleryLightbox");
const galleryLightboxImage = document.getElementById("galleryLightboxImage");
const galleryLightboxCaption = document.getElementById("galleryLightboxCaption");
const galleryPrevBtn = document.getElementById("galleryPrev");
const galleryNextBtn = document.getElementById("galleryNext");
const closeGalleryLightboxBtn = document.getElementById("closeGalleryLightbox");
const contentItemsContainer = document.getElementById("contentItems");
const contentBox = document.getElementById("contentBox");
const audioStatus = document.getElementById("audioStatus");
const titleElement = document.getElementById("characterTitle");
const eyebrowElement = document.getElementById("characterEyebrow");
const subtitleElement = document.getElementById("characterSubtitle");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let activeDialog = null;
const dialogStack = [];
const dialogReturnFocus = new WeakMap();
let currentCharacterKey = null;
let currentSections = [];
let currentAudioTracks = [];
let currentTrackIndex = 0;
let currentAudioLabel = "Musik";
let activeBackgroundLayer = pageBackgroundPrimary;
let inactiveBackgroundLayer = pageBackgroundSecondary;
let backgroundFadeTimeoutId = null;
let currentGalleryImages = [];
let currentGalleryIndex = -1;

function updateToggleLabel() {
  const isPlaying = !audio.paused;
  toggle.textContent = isPlaying ? `\u23F8 ${currentAudioLabel}` : `\u25B6 ${currentAudioLabel}`;
  toggle.setAttribute("aria-pressed", String(isPlaying));
  audioStatus.textContent = isPlaying ? "Musik spielt." : "Musik ist pausiert.";
}

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => !element.hasAttribute("disabled"));
}

function setModalState(isOpen) {
  body.classList.toggle("modal-open", isOpen);
}

function openDialog(dialog, trigger) {
  dialogReturnFocus.set(dialog, trigger || document.activeElement);

  if (!dialogStack.includes(dialog)) {
    dialogStack.push(dialog);
  }

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

  const stackIndex = dialogStack.indexOf(dialog);

  if (stackIndex !== -1) {
    dialogStack.splice(stackIndex, 1);
  }

  activeDialog = dialogStack[dialogStack.length - 1] || null;

  if (!activeDialog) {
    setModalState(false);
  }

  if (dialog === legal) {
    openLegalBtn.setAttribute("aria-expanded", "false");
  }

  if (dialog === galleryOverlay) {
    jumpToGalleryBtn.setAttribute("aria-expanded", "false");
  }

  const returnFocusElement = dialogReturnFocus.get(dialog);

  if (returnFocusElement instanceof HTMLElement) {
    returnFocusElement.focus();
  }
}

function openLegal() {
  openLegalBtn.setAttribute("aria-expanded", "true");
  openDialog(legal, openLegalBtn);
}

function closeLegal() {
  closeDialog(legal);
}

function openSelectionScreen() {
  closeDialog(legal);
  closeDialog(consent);
  closeDialog(galleryOverlay);
  closeDialog(galleryLightbox);
  audio.pause();
  updateToggleLabel();
  body.dataset.character = "none";
  siteShell.classList.add("hidden");
  selectionScreen.classList.remove("hidden");
  selectionButtons[0]?.focus();
}

function closeSelectionScreen() {
  selectionScreen.classList.add("hidden");
  siteShell.classList.remove("hidden");
}

function loadVolume() {
  audio.volume = Number.parseFloat(slider.value) || 0.75;
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

function maybeAskForAudio(trigger) {
  openDialog(consent, trigger);
}

function closeGalleryLightbox() {
  closeDialog(galleryLightbox);
}

function openGalleryOverlay() {
  jumpToGalleryBtn.setAttribute("aria-expanded", "true");
  openDialog(galleryOverlay, jumpToGalleryBtn);
}

function closeGalleryOverlay() {
  closeDialog(galleryOverlay);
}

function showGalleryImage(index, trigger) {
  if (currentGalleryImages.length === 0) {
    return;
  }

  currentGalleryIndex = (index + currentGalleryImages.length) % currentGalleryImages.length;

  const imagePath = currentGalleryImages[currentGalleryIndex];
  const fileName = imagePath.split("/").pop() || imagePath;
  const label = formatGalleryLabel(fileName);

  galleryLightboxImage.src = imagePath;
  galleryLightboxImage.alt = label;
  galleryLightboxCaption.textContent = label;

  openDialog(galleryLightbox, trigger);
}

function showPreviousGalleryImage() {
  showGalleryImage(currentGalleryIndex - 1, galleryPrevBtn);
}

function showNextGalleryImage() {
  showGalleryImage(currentGalleryIndex + 1, galleryNextBtn);
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
  const imageIndex = currentGalleryImages.indexOf(imagePath);
  const button = document.createElement("button");
  const image = document.createElement("img");
  const labelBox = document.createElement("span");
  const title = document.createElement("span");
  const meta = document.createElement("span");

  button.type = "button";
  button.className = "gallery-card";
  button.setAttribute("aria-label", `${label} vergrößern`);

  image.src = imagePath;
  image.alt = label;
  image.loading = "lazy";
  image.decoding = "async";

  labelBox.className = "gallery-card-label";
  title.className = "gallery-card-title";
  title.textContent = label;
  meta.className = "gallery-card-meta";
  meta.textContent = "Klicken zum Öffnen";

  labelBox.append(title, meta);
  button.append(image, labelBox);

  button.addEventListener("click", () => {
    showGalleryImage(imageIndex, button);
  });

  return button;
}

function renderGallery(imagePaths) {
  currentGalleryImages = [...imagePaths];
  galleryGrid.replaceChildren();

  if (imagePaths.length === 0) {
    const empty = document.createElement("p");
    empty.className = "gallery-empty";
    empty.textContent = "Im Galerieordner wurden noch keine unterstützten Bilddateien gefunden.";
    galleryGrid.append(empty);
    return;
  }

  imagePaths.forEach((imagePath) => {
    galleryGrid.append(createGalleryCard(imagePath));
  });
}

function loadGallery(imagePaths) {
  currentGalleryIndex = imagePaths.length > 0 ? 0 : -1;
  renderGallery(imagePaths);
}

function setPageBackground(imagePath) {
  if (activeBackgroundLayer.style.backgroundImage.includes(imagePath)) {
    return;
  }

  inactiveBackgroundLayer.style.backgroundImage = `url("${imagePath}")`;
  inactiveBackgroundLayer.classList.add("is-active");
  activeBackgroundLayer.classList.remove("is-active");

  if (backgroundFadeTimeoutId) {
    window.clearTimeout(backgroundFadeTimeoutId);
  }

  const previousActiveLayer = activeBackgroundLayer;
  activeBackgroundLayer = inactiveBackgroundLayer;
  inactiveBackgroundLayer = previousActiveLayer;

  backgroundFadeTimeoutId = window.setTimeout(() => {
    inactiveBackgroundLayer.style.backgroundImage = "";
  }, BACKGROUND_FADE_MS);
}

function getSectionById(sectionId) {
  const visibleSections = getVisibleSections();
  return visibleSections.find((section) => section.id === sectionId) || visibleSections[0];
}

function getVisibleSections() {
  return currentSections.filter((section) => {
    if (typeof section.hiddenUntilTrack !== "number") {
      return true;
    }

    return currentTrackIndex >= section.hiddenUntilTrack;
  });
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

function setActiveSection(targetId, options = {}) {
  const section = getSectionById(targetId);

  if (!section) {
    return;
  }

  const items = Array.from(menuItemsContainer.querySelectorAll(".menu-item"));
  const contents = Array.from(contentItemsContainer.querySelectorAll(".content"));

  items.forEach((item) => {
    const isActive = item.dataset.target === section.id;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

  contents.forEach((content) => {
    const isActive = content.id === section.id;
    content.classList.toggle("active", isActive);
    content.hidden = !isActive;
  });

  setPageBackground(section.background);

  if (options.updateHash !== false) {
    syncHash(section.id, options.replaceHash === true);
  }

  if (options.focusContent === true) {
    contentBox.tabIndex = -1;
    contentBox.focus();
  }
}

function createMenuItem(section, isActive = false) {
  const button = document.createElement("button");
  button.className = `menu-item${isActive ? " active" : ""}`;
  button.type = "button";
  button.dataset.target = section.id;
  button.setAttribute("aria-controls", section.id);
  button.setAttribute("aria-pressed", String(isActive));
  button.textContent = section.nav;
  return button;
}

function createContentSection(section, isActive = false) {
  const article = document.createElement("article");
  const heading = document.createElement("h2");
  const bodyContainer = document.createElement("div");

  article.className = `content${isActive ? " active" : ""}`;
  article.id = section.id;
  article.hidden = !isActive;

  heading.textContent = section.title;
  bodyContainer.className = "content-body";
  bodyContainer.replaceChildren(
    ...section.paragraphs.map((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      return element;
    })
  );

  article.append(heading, bodyContainer);
  return article;
}

function populateSections(character, activeSectionId = "prolog") {
  currentSections = character.sections;
  const visibleSections = getVisibleSections();
  const nextActiveSectionId = visibleSections.some((section) => section.id === activeSectionId)
    ? activeSectionId
    : visibleSections[0]?.id;

  menuItemsContainer.replaceChildren(
    ...visibleSections.map((section) => createMenuItem(section, section.id === nextActiveSectionId))
  );

  contentItemsContainer.replaceChildren(
    ...visibleSections.map((section) => createContentSection(section, section.id === nextActiveSectionId))
  );
}

function updateAudioSource(trackIndex) {
  const track = currentAudioTracks[trackIndex];

  if (!track) {
    return;
  }

  currentTrackIndex = trackIndex;
  currentAudioLabel = track.label || CHARACTER_CONFIG[currentCharacterKey]?.audioLabel || "Musik";
  audio.pause();
  audio.loop = track.loop === true;
  audioSource.src = track.src;
  audio.load();
  updateToggleLabel();
}

function maybeRevealTrackLockedSections() {
  const visibleSectionIds = new Set(getVisibleSections().map((section) => section.id));
  const renderedSectionIds = new Set(
    Array.from(menuItemsContainer.querySelectorAll(".menu-item")).map((item) => item.dataset.target)
  );

  if (visibleSectionIds.size === renderedSectionIds.size) {
    return;
  }

  const activeSectionId =
    menuItemsContainer.querySelector(".menu-item.active")?.dataset.target || getVisibleSections()[0]?.id;

  populateSections(CHARACTER_CONFIG[currentCharacterKey], activeSectionId);
}

async function advanceToNextTrack() {
  if (currentTrackIndex >= currentAudioTracks.length - 1) {
    updateToggleLabel();
    return;
  }

  updateAudioSource(currentTrackIndex + 1);
  maybeRevealTrackLockedSections();
  await playAudio();
}

function applyCharacter(characterKey, trigger) {
  const character = CHARACTER_CONFIG[characterKey];

  currentCharacterKey = characterKey;
  currentAudioTracks = character.audioTracks || [
    {
      label: character.audioLabel,
      src: character.audioSource,
      loop: true
    }
  ];
  currentTrackIndex = 0;
  body.dataset.character = characterKey;

  eyebrowElement.textContent = character.eyebrow;
  titleElement.textContent = character.title;
  subtitleElement.textContent = character.subtitle;

  populateSections(character);
  updateAudioSource(0);

  closeSelectionScreen();
  handleHashNavigation();
  loadGallery(character.galleryImages);
  maybeAskForAudio(trigger);
}

function handleHashNavigation() {
  if (!currentCharacterKey) {
    return;
  }

  const targetId = window.location.hash.replace("#", "");
  const matchingSection = currentSections.find((section) => section.id === targetId);

  if (matchingSection) {
    setActiveSection(targetId, { updateHash: false });
    return;
  }

  setActiveSection("prolog", { replaceHash: true });
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

slider.addEventListener("input", () => {
  audio.volume = Number.parseFloat(slider.value) || 0;
});

toggle.addEventListener("click", async () => {
  if (audio.paused) {
    await playAudio();
  } else {
    audio.pause();
  }

  updateToggleLabel();
});

menuItemsContainer.addEventListener("click", (event) => {
  const target = event.target.closest(".menu-item");

  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  setActiveSection(target.dataset.target);
});

selectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyCharacter(button.dataset.characterChoice, button);
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
openSelectionBtn.addEventListener("click", openSelectionScreen);
jumpToGalleryBtn.addEventListener("click", openGalleryOverlay);
closeGalleryOverlayBtn.addEventListener("click", closeGalleryOverlay);

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

galleryOverlay.addEventListener("click", (event) => {
  if (event.target === galleryOverlay) {
    closeGalleryOverlay();
  }
});

galleryPrevBtn.addEventListener("click", showPreviousGalleryImage);
galleryNextBtn.addEventListener("click", showNextGalleryImage);

acceptBtn.addEventListener("click", async () => {
  closeConsent();
  await playAudio();
  updateToggleLabel();
});

declineBtn.addEventListener("click", () => {
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
    } else if (activeDialog === galleryOverlay) {
      closeGalleryOverlay();
    } else if (activeDialog === galleryLightbox) {
      closeGalleryLightbox();
    }
  }

  if (activeDialog === galleryLightbox) {
    if (event.key === "ArrowLeft") {
      showPreviousGalleryImage();
    } else if (event.key === "ArrowRight") {
      showNextGalleryImage();
    }
  }
});

window.addEventListener("hashchange", handleHashNavigation);

audio.addEventListener("play", updateToggleLabel);
audio.addEventListener("pause", updateToggleLabel);
audio.addEventListener("ended", () => {
  advanceToNextTrack();
});

galleryLightbox.addEventListener("click", (event) => {
  if (event.target === galleryLightbox) {
    closeGalleryLightbox();
  }
});

closeGalleryLightboxBtn.addEventListener("click", closeGalleryLightbox);

loadVolume();
updateToggleLabel();
openSelectionScreen();

