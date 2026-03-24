<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Kaida - Story</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <div class="particles"></div>

  <header>
    <h1>KAIDA</h1>
    <p class="subtitle">記憶と影の物語</p>
  </header>

  <main class="layout">

    <aside class="menu">
      <div class="menu-item active" data-target="prolog" data-visibility="0.2">Prolog</div>
      <div class="menu-item" data-target="sushi" data-visibility="0.45">Die Sushimeisterin</div>
      <div class="menu-item" data-target="ninja" data-visibility="0.8">Der Ninja</div>
      <div class="menu-item" data-target="child" data-visibility="1">Das Kind?</div>
    </aside>

    <section class="content-box">

      <div class="content active" id="prolog">
        <h2>Prolog</h2>
        <p>
          Der Wind trägt Erinnerungen, die längst hätten vergessen sein sollen. Nicht laut, nicht klar, sondern leise – wie ein Echo aus einer Zeit, die niemand mehr greifen kann. Zwischen Schatten und Stille existiert etwas, das sich nicht vollständig zeigen will.
        </p>
        <p>
          Ein Name kehrt immer wieder zurück: Kaida. Für manche eine gewöhnliche Frau, für andere etwas, das sich nicht greifen lässt. Je länger man hinsieht, desto mehr verschwimmt die Wahrheit.
        </p>
        <p>
          Und vielleicht ist genau das der Punkt, an dem man begreift: Kaida ist nicht das, was man sieht – sondern das, was sich dahinter verbirgt.
        </p>
      </div>

      <div class="content" id="sushi">
        <h2>Kaida - Die Sushimeisterin</h2>
        <p>
          Im Futomaki ist Kaida eine feste Konstante. Ihr Lachen ist warm, ehrlich und frei von jeder Zurückhaltung. Es nimmt Schwere aus Gesprächen und lässt selbst schwierige Tage leichter wirken.
        </p>
        <p>
          Sie spricht, wie sie denkt: direkt und ungefiltert. Für viele wirkt sie dadurch fast einfach – doch genau darin liegt ihre Stärke.
        </p>
        <p>
          Ihre Angestellten sind für sie mehr als Kollegen. Wer zu ihr gehört, wird beschützt. Ohne Zögern.
        </p>
        <p>
          Und vielleicht ist genau dieses Bild das, was sie am besten schützt.
        </p>
      </div>

      <div class="content" id="ninja">
        <h2>Kaida - Der Ninja</h2>
        <p>
          Kaida wurde geformt, um zu funktionieren. Jeder Gedanke, jede Bewegung war auf Effizienz reduziert.
        </p>
        <p>
          Mukon no Hana – die seelenlose Blüte. Gefühle wurden nicht unterdrückt, sondern entfernt.
        </p>
        <p>
          Was blieb, war Kälte. Präzision. Kontrolle.
        </p>
        <p>
          Bis sie lernte, was Liebe ist – und alles verlor.
        </p>
        <p>
          Seitdem lässt sie niemanden mehr wirklich nah an sich heran. Nicht aus Angst, sondern aus Überzeugung.
        </p>
      </div>

      <div class="content" id="child">
        <h2>Kaida - Das Kind?</h2>
        <p>
          Über ihre Kindheit spricht Kaida nicht. Es ist keine Lücke – es ist eine Entscheidung.
        </p>
        <p>
          Sie weiß, woher sie kommt. Doch dieser Teil bleibt verschlossen.
        </p>
      </div>

    </section>

  </main>

  <!-- Audio -->
  <div class="audio-control">
    <button id="audioToggle">▶ Sound</button>
  </div>

  <audio id="bgm" loop>
    <source src="assets/audio/kaida.ogg" type="audio/ogg">
  </audio>

  <!-- Rechtshinweise Button -->
  <div class="legal-button">
    <button id="openLegal">Rechtshinweise</button>
  </div>

  <!-- Overlay -->
  <div id="legalOverlay" class="legal-overlay hidden">
    <div class="legal-card">
      <button class="close-btn" id="closeLegal">✕</button>

      <h2>Rechtshinweise</h2>

      <p>
        Die Inhalte dieser Website, einschließlich Texte, Gestaltung, Audioinhalte sowie Quellcode, sind urheberrechtlich geschützt.
      </p>

      <p>
        Soweit nicht anders angegeben, liegen die Rechte beim Betreiber dieser Website.
      </p>

      <p>
        Eine Nutzung, Vervielfältigung oder Weiterverbreitung der Inhalte – ganz oder teilweise – ist ohne vorherige schriftliche Zustimmung nicht gestattet.
      </p>

      <p>
        Die Inhalte dürfen ausschließlich zu privaten, nicht-kommerziellen Zwecken betrachtet werden.
      </p>

    </div>
  </div>

  <script src="js/main.js"></script>
</body>
</html>
