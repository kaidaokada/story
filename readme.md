# Kaida Story

Atmosphärische Single-Page-Story für zwei Figuren, Kaida Okada und Torinai Nihal. Das Projekt ist ein statisches Frontend mit Charakterauswahl, dynamischen Hintergründen, getrennten Galerien und optionaler Musik.

## Projektstruktur

- `index.html`: Charakterauswahl, gemeinsame Seitenhülle, Audio- und Dialog-Markup
- `css/styles.css`: Selection-Screen, Charakter-Themes, Layout, Overlay-Galerie und Dialog-Styling
- `js/main.js`: Charakterdaten, Kapitelwechsel, statische Galerielisten, Audio-Steuerung, Overlay-Logik und Consent-Speicherung
- `assets/images/backgrounds/selection/torikaida.png`: Hintergrund der Charakterauswahl
- `assets/images/backgrounds/Kaida`: Kaidas Hintergründe
- `assets/images/backgrounds/Tori`: Toris Hintergründe
- `assets/images/gallery_kaida`: Statisch gepflegte Kaida-Galerie
- `assets/images/gallery_tori`: Statisch gepflegte Tori-Galerie
- `assets/audio/kaida.ogg` und `assets/audio/tori.ogg`: Charaktermusik

## Verhalten

- Beim Laden erscheint immer zuerst die Charakterauswahl.
- Kapitel werden danach ohne Seitenwechsel umgeschaltet.
- Die aktive Sektion kann ueber den URL-Hash direkt verlinkt werden.
- Lautstaerke und Audio-Consent werden in `localStorage` gespeichert, falls verfuegbar.
- Bei reduziertem Bewegungsschema werden Maus-Parallax und Animationen abgeschwaecht.
- Die Galerie öffnet als Overlay mit Thumbnail-Raster und navigierbarer Vollansicht.
- Die Galerie wird statisch aus den Bildlisten in `js/main.js` aufgebaut. Neue Bilder müssen dort pro Charakter in `galleryImages` eingetragen werden.

## Lokale Nutzung

Da es sich um ein statisches Projekt handelt, reicht ein einfacher Webserver. Beispiele:

```powershell
python -m http.server 8000
```

Danach ist die Seite unter [http://localhost:8000](http://localhost:8000) erreichbar.

## Wartungshinweise

- Wenn neue Kapitel hinzukommen, sollten sie in `js/main.js` innerhalb von `CHARACTER_CONFIG` gepflegt werden.
- Wenn neue Galeriebilder hinzukommen, müssen ihre Dateinamen in `js/main.js` innerhalb von `galleryImages` gepflegt werden.
- Falls Audio ersetzt wird, sollte das Format weiterhin als `.ogg` vorliegen oder mit zusaetzlichen Quellen erweitert werden.
- Externe Schriftarten werden derzeit über Google Fonts geladen; ohne Netzwerk greift die lokale Serif-Fallback-Kette.
