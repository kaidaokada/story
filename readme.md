# Kaida Story

Atmosphaerische Single-Page-Story fuer zwei Figuren, Kaida Okada und Torinai Nihal. Das Projekt ist ein statisches Frontend mit Charakterauswahl, dynamischen Hintergruenden, getrennten Galerien und optionaler Musik.

## Projektstruktur

- `index.html`: Charakterauswahl, gemeinsame Seitenhuelle, Audio- und Dialog-Markup
- `css/styles.css`: Selection-Screen, Charakter-Themes, Layout, Overlay-Galerie und Dialog-Styling
- `js/main.js`: Charakterdaten, Kapitelwechsel, statische Galerielisten, Audio-Steuerung, Overlay-Logik und Consent-Speicherung
- `assets/images/backgrounds/selection/torikaida.png`: Hintergrund der Charakterauswahl
- `assets/images/backgrounds/Kaida`: Kaidas Hintergruende
- `assets/images/backgrounds/Tori`: Toris Hintergruende
- `assets/images/gallery_kaida`: Automatisch geladene Kaida-Galerie
- `assets/images/gallery_tori`: Automatisch geladene Tori-Galerie
- `assets/audio/kaida.ogg` und `assets/audio/tori.ogg`: Charaktermusik

## Verhalten

- Beim Laden erscheint immer zuerst die Charakterauswahl.
- Kapitel werden danach ohne Seitenwechsel umgeschaltet.
- Die aktive Sektion kann ueber den URL-Hash direkt verlinkt werden.
- Lautstaerke und Audio-Consent werden in `localStorage` gespeichert, falls verfuegbar.
- Bei reduziertem Bewegungsschema werden Maus-Parallax und Animationen abgeschwaecht.
- Die Galerie oeffnet als Overlay mit Thumbnail-Raster und navigierbarer Vollansicht.
- Die Galerie wird statisch aus den Bildlisten in `js/main.js` aufgebaut. Neue Bilder muessen dort pro Charakter in `galleryImages` eingetragen werden.

## Lokale Nutzung

Da es sich um ein statisches Projekt handelt, reicht ein einfacher Webserver. Beispiele:

```powershell
python -m http.server 8000
```

Danach ist die Seite unter [http://localhost:8000](http://localhost:8000) erreichbar.

## Wartungshinweise

- Wenn neue Kapitel hinzukommen, sollten sie in `js/main.js` innerhalb von `CHARACTER_CONFIG` gepflegt werden.
- Wenn neue Galeriebilder hinzukommen, muessen ihre Dateinamen in `js/main.js` innerhalb von `galleryImages` gepflegt werden.
- Falls Audio ersetzt wird, sollte das Format weiterhin als `.ogg` vorliegen oder mit zusaetzlichen Quellen erweitert werden.
- Externe Schriftarten werden derzeit ueber Google Fonts geladen; ohne Netzwerk greift die lokale Serif-Fallback-Kette.
