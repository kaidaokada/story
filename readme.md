# Kaida Story

Atmosphaerische Single-Page-Story ueber die Figur Kaida. Das Projekt ist ein statisches Frontend mit HTML, CSS, JavaScript, Hintergrundgrafik und optionaler Musik.

## Projektstruktur

- `index.html`: Semantische Struktur, Story-Inhalte, Audio- und Dialog-Markup
- `css/styles.css`: Layout, Atmosphaere, responsive Verhalten, Dialog- und Audio-Styling
- `js/main.js`: Kapitelwechsel, Audio-Steuerung, Consent-Speicherung, Dialog-Interaktion
- `assets/images/background.png`: Hintergrundmotiv
- `assets/audio/kaida.ogg`: Hintergrundmusik

## Verhalten

- Kapitel werden ohne Seitenwechsel umgeschaltet.
- Die aktive Sektion kann ueber den URL-Hash direkt verlinkt werden.
- Lautstaerke und Audio-Consent werden in `localStorage` gespeichert, falls verfuegbar.
- Bei reduziertem Bewegungsschema werden Maus-Parallax und Animationen abgeschwaecht.
- Die Galerie liest neue Bilder automatisch aus `assets/images/gallery`, wenn die Seite ueber einen lokalen oder produktiven Webserver mit Verzeichnisanzeige ausgeliefert wird.

## Lokale Nutzung

Da es sich um ein statisches Projekt handelt, reicht ein einfacher Webserver. Beispiele:

```powershell
python -m http.server 8000
```

Danach ist die Seite unter [http://localhost:8000](http://localhost:8000) erreichbar.

Die Galerie sollte nicht direkt per `file:///...` geoeffnet werden, weil Browser dort keinen Ordnerinhalt nachladen koennen.

## Wartungshinweise

- Wenn neue Kapitel hinzukommen, brauchen `data-target`, `id` und optional `data-visibility` konsistente Werte.
- Falls Audio ersetzt wird, sollte das Format weiterhin als `.ogg` vorliegen oder mit zusaetzlichen Quellen erweitert werden.
- Externe Schriftarten werden derzeit ueber Google Fonts geladen; ohne Netzwerk greift die lokale Serif-Fallback-Kette.
