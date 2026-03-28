import type { Track } from "./types";

export const webTrack: Track =
{
  id: "web",
  title: "Web-Welt",
  emoji: "🌐",
  description: "Baue eigene Webseiten mit HTML & CSS – von der ersten Überschrift bis zu coolen Animationen!",
  color: "indigo",
  recommendedAge: "ab 9 Jahren",
  lessons: [
    {
      id: "web-01",
      trackId: "web",
      title: "🏗️ Bau deinen ersten Block!",
      summary: "HTML-Tags sind wie Minecraft-Blöcke – platziere deinen ersten Block und baue eine Webseite!",
      minutes: 12,
      xp: 40,
      contentMd: `# HTML – Blöcke für das Internet!

Stell dir vor, du baust in **Minecraft** – aber statt Erde und Stein verwendest du **HTML-Tags**!

Jede Webseite (YouTube, TikTok, Wikipedia) besteht aus HTML-Blöcken!

## Tags – deine Bauklötze ⛏️

HTML funktioniert mit **Tags**. Ein Tag hat immer einen Anfang und ein Ende – wie ein Block der gesetzt und wieder aufgehoben wird:

\`\`\`html
<h1>Das ist ein GOLDBLOCK – riesige Überschrift!</h1>
<p>Das ist ein ERDBLOCK – normaler Text-Absatz.</p>
\`\`\`

> 💡 **Crafting-Tipp:** Tags sind wie Blöcke – was dazwischen steht, gehört dazu!

## Die wichtigsten Blöcke

| Block (Tag) | Typ | Was er macht |
|-------------|-----|-------------|
| \`<h1>\` | 🏆 Goldblock | Riesige Überschrift |
| \`<h2>\` | ⚡ Redstone-Block | Mittlere Überschrift |
| \`<p>\` | 🟫 Erdblock | Textabsatz |`,
      exercise: {
        language: "html",
        title: "Platziere deinen ersten Block!",
        instructionsMd: `**Deine Mission:**

Du bist Steve und baust deine erste Basis! Platziere diese Blöcke:

1. Einen \`<h1>\` Goldblock mit deinem Spieler-Namen
2. Einen \`<p>\` Erdblock, was deine Lieblingsblöcke sind

**Beispiel:**
\`\`\`html
<h1>Spieler: Alex</h1>
<p>Meine Lieblingsblöcke: Diamant und Redstone!</p>
\`\`\``,
        starterCode: "<h1>Spieler: ??</h1>\n<p>Meine Lieblingsblöcke: ??</p>\n",
        check: { kind: "contains", needles: ["<h1", "</h1>", "<p", "</p>"] },
        hintMd: "Schreib deinen Spieler-Namen **zwischen** die Tags:\n\n`<h1>Spieler: Steve</h1>`",
        solutionCode: "<h1>Spieler: Alex</h1>\n<p>Meine Lieblingsblöcke: Diamant und Redstone!</p>\n",
      },
    },
    {
      id: "web-02",
      trackId: "web",
      title: "🔗 Portal-Links & Bildrahmen",
      summary: "Baue Nether-Portale (Links) die zu anderen Seiten führen und hänge Gemälde (Bilder) auf!",
      minutes: 15,
      xp: 50,
      contentMd: `# Portal-Links & Bildrahmen

## Links – Nether-Portale ins Internet 🟪

In Minecraft gibt es **Nether-Portale** – du trittst hinein und landest woanders.
In HTML heißen diese Portale **Links**:

\`\`\`html
<a href="https://youtube.com">Portal zu YouTube!</a>
\`\`\`

- \`href\` = die Ziel-Koordinaten des Portals
- Der Text dazwischen ist das Schild am Portal

## Bilder – Gemälde an die Wand hängen 🖼️

In Minecraft kannst du Gemälde an Wände hängen. In HTML geht das so:

\`\`\`html
<img src="https://picsum.photos/400/200" alt="Ein cooles Gemälde" />
\`\`\`

- \`src\` = wo das Gemälde liegt (URL)
- \`alt\` = Beschreibung (wichtig wenn das Gemälde nicht lädt!)

> 🎨 Tipp: \`picsum.photos\` liefert zufällige Fotos – jedes Mal ein neues Gemälde!`,
      exercise: {
        language: "html",
        title: "Portal bauen + Gemälde aufhängen",
        instructionsMd: `**Deine Mission:**

Du baust deine erste Minecraft-Basis und willst sie dekorieren:

1. Baue ein Portal (Link) zu \`https://scratch.mit.edu\` mit dem Text **Scratch-Portal**
2. Hänge darunter ein Gemälde auf (nutze: \`https://picsum.photos/seed/quest/640/240\`)

**Portal-Bauplan:**
\`\`\`html
<a href="ZIEL-URL">Portal-Schild</a>
\`\`\``,
        starterCode: "<h1>Meine Minecraft-Basis</h1>\n\n<!-- Portal (Link) hier -->\n\n<!-- Gemälde (Bild) hier -->\n",
        check: {
          kind: "contains",
          needles: ["<a", "href=", "scratch.mit.edu", "</a>", "<img"],
        },
        hintMd: "Vergiss nicht das `alt`-Attribut beim Gemälde!\n\n`<img src=\"...\" alt=\"Gemälde-Beschreibung\" />`",
        solutionCode: `<h1>Meine Minecraft-Basis</h1>
<p><a href="https://scratch.mit.edu">Scratch-Portal</a></p>
<img src="https://picsum.photos/seed/quest/640/240" alt="Basis-Gemälde" />
`,
      },
    },
    {
      id: "web-03",
      trackId: "web",
      title: "📋 Listen",
      summary: "Ordne Dinge übersichtlich in Listen!",
      minutes: 12,
      xp: 45,
      contentMd: `# Listen in HTML

Listen helfen dabei, Dinge übersichtlich zu zeigen – wie eine Einkaufsliste!

## Arten von Listen

**Ungeordnete Liste** (mit Punkten):
\`\`\`html
<ul>
  <li>Pizza</li>
  <li>Pasta</li>
  <li>Burger</li>
</ul>
\`\`\`

**Geordnete Liste** (mit Zahlen):
\`\`\`html
<ol>
  <li>Aufstehen</li>
  <li>Frühstücken</li>
  <li>Zocken</li>
</ol>
\`\`\`

> 💡 \`ul\` = **u**nordered **l**ist · \`ol\` = **o**rdered **l**ist · \`li\` = **l**ist **i**tem`,
      exercise: {
        language: "html",
        title: "Deine Top-5 Lieblingsdinge",
        instructionsMd: `**Deine Aufgabe:**

Erstelle eine Liste mit **mindestens 3** Dingen, die du magst!

Nutze entweder \`<ul>\` (Punkte) oder \`<ol>\` (Zahlen).`,
        starterCode: "<h1>Meine Lieblingsdinge 🌟</h1>\n\n<!-- Liste hier -->\n",
        check: { kind: "contains", needles: ["<ul", "<li", "</li>", "</ul>"] },
        solutionCode: `<h1>Meine Lieblingsdinge 🌟</h1>
<ul>
  <li>Videospiele</li>
  <li>Pizza</li>
  <li>Fußball</li>
</ul>
`,
      },
    },
    {
      id: "web-04",
      trackId: "web",
      title: "🎨 Erstes CSS",
      summary: "Gib deiner Seite Farbe und Style!",
      minutes: 18,
      xp: 60,
      contentMd: `# CSS – Die Kleidung deiner Webseite

HTML ist das Skelett – **CSS** macht es hübsch!

CSS steht für **C**ascading **S**tyle **S**heets.

## So funktioniert CSS

\`\`\`html
<style>
  body {
    background: #1a1a2e;
    color: white;
  }

  h1 {
    color: #e94560;
    font-size: 40px;
  }
</style>
\`\`\`

## Farben in CSS

Du kannst Farben auf verschiedene Arten angeben:
- **Name:** \`red\`, \`blue\`, \`hotpink\`, \`lime\`
- **Hex-Code:** \`#ff6600\` (Orange), \`#00ff88\` (Grün)

> 🎨 Probiere verschiedene Farben aus – es macht Spaß!`,
      exercise: {
        language: "html",
        title: "Style-Upgrade!",
        instructionsMd: `**Deine Aufgabe:**

1. Füge ein \`<style>\`-Tag hinzu
2. Setze einen farbigen Hintergrund (\`background\`)
3. Mache die Überschrift in einer anderen Farbe

**Tipp für coole Farben:**
- \`background: #1a1a2e\` (Dunkles Blau)
- \`color: #e94560\` (Pink-Rot)
- \`color: #00d4ff\` (Cyan)`,
        starterCode: "<h1>Meine bunte Seite 🎨</h1>\n<p>CSS macht alles schöner!</p>\n",
        check: { kind: "contains", needles: ["<style", "background"] },
        hintMd: "CSS-Regeln: `selektor { eigenschaft: wert; }`\n\nBeispiel: `h1 { color: hotpink; }`",
        solutionCode: `<style>
  body { background: #1a1a2e; color: #e0e0e0; font-family: Arial; padding: 20px; }
  h1 { color: #e94560; }
</style>

<h1>Meine bunte Seite 🎨</h1>
<p>CSS macht alles schöner!</p>
`,
      },
    },
    {
      id: "web-05",
      trackId: "web",
      title: "📦 Boxen & Abstände",
      summary: "Lerne das Box-Modell – wie CSS Abstand und Rahmen macht!",
      minutes: 15,
      xp: 55,
      contentMd: `# Das Box-Modell

In CSS ist **alles eine Box**! Jede Box hat:

- **Content** – der eigentliche Inhalt (Text, Bild)
- **Padding** – Abstand innen (zwischen Inhalt und Rand)
- **Border** – der Rahmen
- **Margin** – Abstand außen (zwischen dieser und anderen Boxen)

\`\`\`html
<style>
  .card {
    background: #2d2d44;
    padding: 20px;
    margin: 10px;
    border: 2px solid #7c3aed;
    border-radius: 12px;
  }
</style>
\`\`\`

> 💡 \`border-radius\` macht die Ecken rund – größer = runder!`,
      exercise: {
        language: "html",
        title: "Baue eine Karte",
        instructionsMd: `**Deine Aufgabe:**

Baue eine hübsche Karte mit:
- \`padding\` (Abstand innen)
- \`border-radius\` (runde Ecken)
- \`border\` (Rahmen)
- Einem Text darin`,
        starterCode: `<style>
  .card {
    /* Füge hier dein CSS ein */
  }
</style>

<div class="card">
  <h2>Meine Karte 🃏</h2>
  <p>Das ist mein erster styled Container!</p>
</div>
`,
        check: { kind: "contains", needles: ["padding", "border-radius", ".card"] },
        hintMd: "Probiere: `padding: 20px; border-radius: 16px; border: 2px solid purple;`",
        solutionCode: `<style>
  body { background: #111; font-family: Arial; padding: 20px; }
  .card {
    background: #1e1e3f;
    color: white;
    padding: 24px;
    border-radius: 16px;
    border: 2px solid #7c3aed;
    max-width: 400px;
  }
</style>

<div class="card">
  <h2>Meine Karte 🃏</h2>
  <p>Das ist mein erster styled Container!</p>
</div>
`,
      },
    },
    {
      id: "web-06",
      trackId: "web",
      title: "↔️ Flexbox – Reihen & Spalten",
      summary: "Ordne Elemente nebeneinander oder untereinander mit Flexbox!",
      minutes: 20,
      xp: 70,
      contentMd: `# Flexbox – Layout leicht gemacht

Mit **Flexbox** kannst du Elemente nebeneinander oder in Reihen anordnen.

\`\`\`html
<style>
  .container {
    display: flex;
    gap: 10px;
  }
</style>

<div class="container">
  <div>Box 1</div>
  <div>Box 2</div>
  <div>Box 3</div>
</div>
\`\`\`

## Nützliche Flexbox-Eigenschaften

| Eigenschaft | Was es macht |
|-------------|-------------|
| \`display: flex\` | Flexbox einschalten |
| \`gap: 10px\` | Abstand zwischen Elementen |
| \`justify-content: center\` | Horizontal zentrieren |
| \`align-items: center\` | Vertikal zentrieren |
| \`flex-wrap: wrap\` | Zeilenumbruch erlauben |

> 💡 Flexbox ist wie ein **Regal** – du bestimmst, wie die Dinge darin angeordnet sind!`,
      exercise: {
        language: "html",
        title: "Karten nebeneinander",
        instructionsMd: `**Deine Aufgabe:**

Baue 3 farbige Karten, die **nebeneinander** stehen!

Nutze \`display: flex\` und \`gap\` im Container.`,
        starterCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; padding: 20px; }
  .container {
    /* Flexbox hier */
  }
  .card {
    padding: 20px;
    border-radius: 12px;
    text-align: center;
  }
</style>

<div class="container">
  <div class="card" style="background: #e94560;">🎮 Gaming</div>
  <div class="card" style="background: #0f3460;">🎵 Musik</div>
  <div class="card" style="background: #16213e;">🎨 Kunst</div>
</div>
`,
        check: { kind: "contains", needles: ["display: flex", ".container"] },
        hintMd: "`.container { display: flex; gap: 16px; }`",
        solutionCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; padding: 20px; }
  .container {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
  .card {
    padding: 24px;
    border-radius: 12px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    flex: 1;
  }
</style>

<div class="container">
  <div class="card" style="background: #e94560;">🎮 Gaming</div>
  <div class="card" style="background: #0f3460;">🎵 Musik</div>
  <div class="card" style="background: #16213e;">🎨 Kunst</div>
</div>
`,
      },
    },
    {
      id: "web-07",
      trackId: "web",
      title: "📝 Formulare",
      summary: "Baue ein Formular mit Eingabefeldern und Buttons!",
      minutes: 18,
      xp: 65,
      contentMd: `# Formulare – Eingaben einsammeln

Formulare sind überall: Login-Seiten, Suchfelder, Kontaktseiten.

## Die wichtigsten Formular-Elemente

\`\`\`html
<form>
  <!-- Texteingabe -->
  <input type="text" placeholder="Dein Name" />

  <!-- Passwort -->
  <input type="password" placeholder="Passwort" />

  <!-- Dropdown -->
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>

  <!-- Button -->
  <button type="submit">Absenden!</button>
</form>
\`\`\`

## Labels

Labels beschreiben das Feld:
\`\`\`html
<label>Dein Name:</label>
<input type="text" placeholder="z.B. Alex" />
\`\`\`

> 💡 Formulare senden Daten – aber das Empfangen braucht einen Server. Für jetzt machen wir nur das Design!`,
      exercise: {
        language: "html",
        title: "Baue ein Anmelde-Formular",
        instructionsMd: `**Deine Aufgabe:**

Baue ein einfaches Formular mit:
1. Einem Text-Eingabefeld für den Namen
2. Einem Button "Los geht's!"

Style es mit CSS!`,
        starterCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; padding: 30px; }
  /* Dein CSS hier */
</style>

<form>
  <!-- Dein Formular hier -->
</form>
`,
        check: { kind: "contains", needles: ["<input", "<button", "<form"] },
        hintMd: "`<input type=\"text\" placeholder=\"Dein Name\" />`\n`<button>Los geht's!</button>`",
        solutionCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; padding: 30px; }
  input {
    padding: 12px 16px;
    border-radius: 8px;
    border: 2px solid #7c3aed;
    background: #1e1e3f;
    color: white;
    font-size: 16px;
    display: block;
    margin: 10px 0;
    width: 250px;
  }
  button {
    padding: 12px 24px;
    border-radius: 8px;
    background: #7c3aed;
    color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-top: 8px;
  }
  button:hover { background: #6d28d9; }
</style>

<h2>Anmelden 🚀</h2>
<form>
  <label>Dein Name:</label>
  <input type="text" placeholder="z.B. Alex" />
  <button type="submit">Los geht's!</button>
</form>
`,
      },
    },
    {
      id: "web-08",
      trackId: "web",
      title: "✨ Animationen",
      summary: "Bringe deine Seite zum Leben mit CSS-Animationen!",
      minutes: 20,
      xp: 80,
      contentMd: `# CSS Animationen – Bewegung!

Mit CSS kannst du Elemente animieren – ganz ohne JavaScript!

## Hover-Effekte

Etwas passiert, wenn man mit der Maus drüberfährt:

\`\`\`css
button:hover {
  background: hotpink;
  transform: scale(1.1);
}
\`\`\`

## Keyframe-Animationen

Für komplexere Bewegungen:

\`\`\`css
@keyframes hüpfen {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.ball {
  animation: hüpfen 1s infinite;
}
\`\`\`

## Übergänge (Transitions)

Für sanfte Farbwechsel:
\`\`\`css
button {
  transition: background 0.3s;
}
\`\`\`

> 🎬 Animationen machen Seiten lebendig – aber zu viel davon nervt!`,
      exercise: {
        language: "html",
        title: "Animierter Button",
        instructionsMd: `**Deine Aufgabe:**

Baue einen Button, der:
1. Beim Hover die Farbe ändert (mit \`transition\`)
2. Eine Animation hat (z.B. Puls oder Hüpfen)`,
        starterCode: `<style>
  body { background: #0f0f1a; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }

  @keyframes puls {
    /* Deine Animation hier */
  }

  .btn {
    padding: 16px 32px;
    font-size: 20px;
    border: none;
    border-radius: 12px;
    background: #7c3aed;
    color: white;
    cursor: pointer;
    /* Animation hier */
  }
</style>

<button class="btn">🚀 Klick mich!</button>
`,
        check: { kind: "contains", needles: ["@keyframes", "animation"] },
        hintMd: "`animation: puls 1s infinite;`\n\nFür Puls: `0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); }`",
        solutionCode: `<style>
  body { background: #0f0f1a; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }

  @keyframes puls {
    0%   { transform: scale(1); box-shadow: 0 0 0 0 rgba(124,58,237,0.6); }
    50%  { transform: scale(1.08); box-shadow: 0 0 0 12px rgba(124,58,237,0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(124,58,237,0); }
  }

  .btn {
    padding: 16px 32px;
    font-size: 20px;
    border: none;
    border-radius: 12px;
    background: #7c3aed;
    color: white;
    cursor: pointer;
    animation: puls 1.5s infinite;
    transition: background 0.2s;
  }
  .btn:hover { background: #6d28d9; }
</style>

<button class="btn">🚀 Klick mich!</button>
`,
      },
    },
    {
      id: "web-09",
      trackId: "web",
      title: "🧭 Navigation & Sektionen",
      summary: "Baue eine Seite mit mehreren Bereichen und einer Navigation!",
      minutes: 22,
      xp: 75,
      contentMd: `# Sektionen & Navigation

Echte Webseiten haben mehrere **Bereiche** (Sektionen) und eine **Navigation** oben.

## HTML-Struktur

\`\`\`html
<nav>
  <a href="#home">Home</a>
  <a href="#über-mich">Über mich</a>
</nav>

<section id="home">
  <h1>Willkommen!</h1>
</section>

<section id="über-mich">
  <h2>Über mich</h2>
</section>
\`\`\`

## Ankerverlinkung

Mit \`#id\` springst du zu einem bestimmten Bereich auf der Seite!

## Semantische Tags

HTML hat spezielle Tags für Seitenbereiche:

| Tag | Bedeutung |
|-----|-----------|
| \`<header>\` | Kopfbereich |
| \`<nav>\` | Navigation |
| \`<main>\` | Hauptinhalt |
| \`<footer>\` | Fußbereich |
| \`<section>\` | Abschnitt |`,
      exercise: {
        language: "html",
        title: "Mini-Seite mit Navigation",
        instructionsMd: `**Deine Aufgabe:**

Baue eine Seite mit:
1. Einer \`<nav>\` oben mit mindestens 2 Links
2. Zwei \`<section>\` Bereichen mit je einer Überschrift
3. CSS für die Navigation (Flexbox!)`,
        starterCode: `<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #0f0f1a; color: white; font-family: Arial; }
  nav { /* Dein Nav-Style */ }
  section { padding: 60px 40px; }
</style>

<!-- Navigation -->
<nav>
  <!-- Links hier -->
</nav>

<!-- Sektionen hier -->
`,
        check: { kind: "contains", needles: ["<nav", "<section", "display: flex"] },
        hintMd: "Nav-Style: `nav { display: flex; gap: 20px; padding: 16px; background: #1e1e3f; }`",
        solutionCode: `<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #0f0f1a; color: white; font-family: Arial; }
  nav {
    display: flex;
    gap: 20px;
    padding: 16px 32px;
    background: #1e1e3f;
    position: sticky;
    top: 0;
  }
  nav a { color: #a78bfa; text-decoration: none; font-weight: bold; }
  nav a:hover { color: white; }
  section { padding: 80px 40px; }
  #start { background: #16213e; }
  #hobbys { background: #0f3460; }
  h1 { font-size: 3rem; margin-bottom: 16px; }
  h2 { font-size: 2rem; margin-bottom: 16px; }
</style>

<nav>
  <a href="#start">🏠 Start</a>
  <a href="#hobbys">🎮 Hobbys</a>
</nav>

<section id="start">
  <h1>👋 Hey, ich bin Alex!</h1>
  <p>Willkommen auf meiner Seite.</p>
</section>

<section id="hobbys">
  <h2>🎮 Meine Hobbys</h2>
  <ul>
    <li>Videospiele</li>
    <li>Fußball</li>
    <li>Coding</li>
  </ul>
</section>
`,
      },
    },
    {
      id: "web-10",
      trackId: "web",
      title: "🏆 Projekt: Meine Homepage",
      summary: "Baue deine eigene persönliche Webseite mit allem, was du gelernt hast!",
      minutes: 35,
      xp: 120,
      contentMd: `# 🏆 Abschlussprojekt: Meine Homepage

Du hast HTML und CSS gelernt. Jetzt ist es Zeit, alles zusammenzubringen!

## Was du bauen sollst

Eine persönliche Homepage mit:

### Pflicht ✅
- Navigation mit Links
- Mindestens 2 Sektionen
- Ein Bild von dir (oder einem Platzhalter)
- Eine Liste mit Hobbys oder Fakten
- Schönes CSS mit Farben

### Bonus ⭐
- Animationen
- Hover-Effekte auf Buttons
- Flexbox-Layout

## Inspirationen

| Stil | Farben |
|------|--------|
| Neon-Dark | \`#0f0f1a\`, \`#7c3aed\`, \`#e94560\` |
| Ocean | \`#0f3460\`, \`#16213e\`, \`#00d4ff\` |
| Forest | \`#1a2e1a\`, \`#16a34a\`, \`#a3e635\` |

> 🎉 Wenn du fertig bist: Zeig deine Seite deinen Eltern oder Freunden!`,
      exercise: {
        language: "html",
        title: "Deine persönliche Homepage",
        instructionsMd: `**Baue deine eigene Homepage!**

Sie muss enthalten:
- \`<nav>\` mit Links
- Mindestens 2 Sektionen (\`<section>\`)
- Ein \`<img>\` Bild
- Eine \`<ul>\` Liste
- \`<style>\` mit Farben und Flexbox

Kein eigenes Bild? Nutze: \`https://picsum.photos/seed/mich/300/300\``,
        starterCode: `<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #0f0f1a; color: white; font-family: Arial; }
  /* Dein CSS kommt hier */
</style>

<!-- Deine Homepage -->
<nav>
  <!-- Navigation -->
</nav>

<section id="home">
  <!-- Start-Bereich -->
</section>

<section id="über-mich">
  <!-- Über-mich-Bereich -->
</section>
`,
        check: {
          kind: "contains",
          needles: ["<nav", "<section", "<img", "<li", "<style"],
        },
        hintMd: "Kein Bild? Nutze `https://picsum.photos/seed/mich/300/300` als `src`.",
      },
    },
    // ═══ KAPITEL 3: LAYOUT-MAGIE ═══
    {
      id: "web-11",
      trackId: "web",
      title: "🏗️ CSS Grid – Die Schatzkammer",
      summary: "Ordne deine Schätze in einem perfekten Raster!",
      minutes: 20,
      xp: 75,
      contentMd: `# Die Schatzkammer des Grid-Meisters

> *"Tiefer im Schloss entdeckst du die legendäre Schatzkammer. Hier liegen hunderte von Schätzen – aber alles ist durcheinander! Der alte Grid-Meister flüstert dir das Geheimnis zu..."*

## CSS Grid – Das perfekte Raster

Mit **CSS Grid** kannst du Elemente in Zeilen **und** Spalten gleichzeitig anordnen!

\`\`\`css
.schatzkammer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 gleiche Spalten */
  gap: 16px;
}
\`\`\`

## Nützliche Grid-Eigenschaften

| Eigenschaft | Was es macht |
|-------------|-------------|
| \`grid-template-columns: repeat(3, 1fr)\` | 3 gleiche Spalten |
| \`grid-template-rows: 200px auto\` | Zeilen definieren |
| \`gap: 16px\` | Abstand zwischen Feldern |
| \`grid-column: span 2\` | Element über 2 Spalten |

> 💡 \`fr\` = **fr**action – ein Bruchteil des verfügbaren Platzes!`,
      exercise: {
        language: "html",
        title: "Ordne die Schatzkammer",
        instructionsMd: `*"Der Grid-Meister übergibt dir seine Kräfte. Ordne die 6 Schätze in einem 3×2-Raster!"*

**Deine Aufgabe:**
1. Nutze \`display: grid\` im Container
2. Setze \`grid-template-columns\` auf 3 gleiche Spalten
3. Füge einen \`gap\` zwischen den Schätzen ein`,
        starterCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; padding: 20px; }
  .kammer {
    /* Grid hier */
  }
  .schatz {
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    font-size: 24px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
  }
</style>

<div class="kammer">
  <div class="schatz">💎</div>
  <div class="schatz">🥇</div>
  <div class="schatz">💍</div>
  <div class="schatz">🗡️</div>
  <div class="schatz">🛡️</div>
  <div class="schatz">📜</div>
</div>
`,
        check: { kind: "contains", needles: ["display: grid", "grid-template-columns"] },
        hintMd: "`.kammer { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }`",
        solutionCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; padding: 20px; }
  .kammer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    max-width: 500px;
  }
  .schatz {
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    font-size: 32px;
    background: rgba(255,200,0,0.1);
    border: 1px solid rgba(255,200,0,0.3);
  }
</style>
<div class="kammer">
  <div class="schatz">💎</div>
  <div class="schatz">🥇</div>
  <div class="schatz">💍</div>
  <div class="schatz">🗡️</div>
  <div class="schatz">🛡️</div>
  <div class="schatz">📜</div>
</div>`,
      },
    },
    {
      id: "web-12",
      trackId: "web",
      title: "📱 Responsive Design – Magie für alle Geräte",
      summary: "Deine Seite soll auf Handy und PC gleich gut aussehen!",
      minutes: 20,
      xp: 75,
      contentMd: `# Responsive – Die Verwandlungs-Magie

> *"Du hast eine wunderbare Webseite gebaut. Aber als du sie auf dem Handy deines Freundes öffnest – Katastrophe! Alles sieht komisch aus. Du brauchst die Verwandlungs-Magie: Responsive Design!"*

## Media Queries – Verschiedene Regeln für verschiedene Größen

\`\`\`css
/* Standard: Handy-First */
.container {
  grid-template-columns: 1fr; /* 1 Spalte auf Handy */
}

/* Tablet (ab 768px) */
@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr; /* 2 Spalten */
  }
}

/* Desktop (ab 1024px) */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr); /* 3 Spalten */
  }
}
\`\`\`

## Viewport Meta-Tag

Unverzichtbar in jeder HTML-Seite:
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1" />
\`\`\`

> 📱 Ohne diesen Tag ignoriert das Handy dein responsive CSS!`,
      exercise: {
        language: "html",
        title: "Responsive Karten-Layout",
        instructionsMd: `*"Brich den Verwandlungs-Fluch! Baue ein Layout, das sich anpasst."*

**Deine Aufgabe:**
1. Füge den \`<meta name="viewport"...>\` Tag ein
2. Auf kleinen Bildschirmen: 1 Karte pro Zeile
3. Auf großen Bildschirmen (ab 768px): 3 Karten nebeneinander`,
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <!-- Viewport Meta-Tag hier -->
  <style>
    body { background: #0f0f1a; color: white; font-family: Arial; padding: 20px; }
    .grid { display: grid; gap: 16px; }
    /* Media Query hier */
    .card { padding: 20px; background: rgba(124,58,237,0.2); border-radius: 12px; border: 1px solid rgba(124,58,237,0.4); }
  </style>
</head>
<body>
  <div class="grid">
    <div class="card">🌐 HTML</div>
    <div class="card">🎨 CSS</div>
    <div class="card">⚡ JavaScript</div>
  </div>
</body>
</html>`,
        check: { kind: "contains", needles: ["viewport", "@media", "min-width"] },
        hintMd: "`@media (min-width: 768px) { .grid { grid-template-columns: repeat(3, 1fr); } }`",
      },
    },
    {
      id: "web-13",
      trackId: "web",
      title: "🎨 CSS Variablen – Das Zauberbuch",
      summary: "Definiere Farben einmal und nutze sie überall!",
      minutes: 15,
      xp: 65,
      contentMd: `# Das Zauberbuch der CSS-Variablen

> *"Der Hofmagier zeigt dir sein wertvollstes Buch: Das Zauberbuch der Variablen. 'Schreibe einen Zauber einmal auf,' sagt er, 'und du kannst ihn überall benutzen. Ändere ihn einmal – und alles ändert sich!'"*

## CSS Custom Properties (Variablen)

\`\`\`css
:root {
  --primary: #7c3aed;
  --secondary: #e94560;
  --bg: #0f0f1a;
  --text: #f0f0ff;
  --radius: 12px;
}

.button {
  background: var(--primary);
  color: var(--text);
  border-radius: var(--radius);
}

.alert {
  background: var(--secondary);
  border-radius: var(--radius);
}
\`\`\`

## Warum ist das super?

Wenn du die Farbe ändern willst, änderst du sie nur **an einer Stelle** – und alles im Design passt sich an!

> 💡 Variablen beginnen immer mit \`--\` und werden mit \`var(--name)\` benutzt!`,
      exercise: {
        language: "html",
        title: "Baue mit Variablen",
        instructionsMd: `*"Schreibe dein eigenes Zauberbuch! Definiere Farb-Variablen und nutze sie überall."*

**Deine Aufgabe:**
1. Definiere in \`:root\`: \`--primary\`, \`--bg\`, \`--text\`
2. Nutze \`var(--primary)\` als Hintergrund eines Buttons
3. Nutze \`var(--bg)\` für den Body-Hintergrund`,
        starterCode: `<style>
  :root {
    /* Deine Variablen hier */
  }

  body {
    /* background: var(...) */
    font-family: Arial;
    padding: 30px;
  }

  .btn {
    /* background: var(...) */
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
  }
</style>

<button class="btn">🧙 Zauber aktivieren!</button>
`,
        check: { kind: "contains", needles: [":root", "--", "var("] },
        hintMd: "`:root { --primary: #7c3aed; --bg: #0f0f1a; --text: white; }`",
      },
    },
    {
      id: "web-14",
      trackId: "web",
      title: "🧩 Pseudo-Klassen – Lebendige Elemente",
      summary: "Reagiere auf Hover, Focus und mehr mit CSS!",
      minutes: 18,
      xp: 70,
      contentMd: `# Pseudo-Klassen – Wenn Elemente lebendig werden

> *"Die Schlosstore öffnen sich, wenn du näher kommst. Die Fackeln leuchten heller, wenn du sie berührst. Das ist die Magie der Pseudo-Klassen – Elemente reagieren auf deine Aktionen!"*

## Die wichtigsten Pseudo-Klassen

\`\`\`css
/* Wenn die Maus drüber ist */
button:hover {
  background: hotpink;
  transform: scale(1.05);
}

/* Wenn ein Eingabefeld aktiv ist */
input:focus {
  border-color: #7c3aed;
  outline: none;
}

/* Jedes zweite Element */
li:nth-child(even) {
  background: rgba(255,255,255,0.05);
}

/* Erstes Element */
li:first-child { border-radius: 8px 8px 0 0; }

/* Letztes Element */
li:last-child { border-radius: 0 0 8px 8px; }
\`\`\`

## Transitions für sanfte Übergänge

\`\`\`css
button {
  transition: all 0.2s ease;
}
\`\`\`

> ✨ \`transition\` macht den Wechsel sanft statt abrupt!`,
      exercise: {
        language: "html",
        title: "Magische Menü-Liste",
        instructionsMd: `*"Bringe deine Liste zum Leben! Jedes Item soll sich beim Hover verändern."*

**Deine Aufgabe:**
1. Baue eine \`<ul>\` mit 4 Einträgen
2. Bei \`:hover\` soll sich Farbe und Hintergrund ändern
3. Nutze \`transition\` für sanfte Übergänge
4. \`:nth-child(even)\` soll einen anderen Hintergrund haben`,
        starterCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; padding: 30px; }
  ul { list-style: none; padding: 0; max-width: 300px; }
  li {
    padding: 14px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    cursor: pointer;
    /* transition hier */
  }
  /* :hover hier */
  /* :nth-child(even) hier */
</style>

<ul>
  <li>🗡️ Schwert des Lichts</li>
  <li>🛡️ Schild der Wahrheit</li>
  <li>🏹 Bogen der Stille</li>
  <li>📜 Karte des Wissens</li>
</ul>
`,
        check: { kind: "contains", needles: [":hover", "transition", "nth-child"] },
        hintMd: "`li:hover { background: rgba(124,58,237,0.3); color: #a78bfa; }`\n`li:nth-child(even) { background: rgba(255,255,255,0.03); }`",
      },
    },
    {
      id: "web-15",
      trackId: "web",
      title: "🌐 JavaScript im HTML – Dein erstes Skript",
      summary: "Verbinde HTML und JavaScript für interaktive Seiten!",
      minutes: 18,
      xp: 75,
      contentMd: `# JavaScript betritt das Schloss

> *"Du hast das Schloss wunderschön gebaut. Aber es ist still – keine Bewegung, keine Reaktion. Dann erscheint ein Bote mit einer Schriftrolle: 'Willst du dein Schloss lebendig machen? Dann lerne JavaScript!'"*

## Script-Tag in HTML

\`\`\`html
<button id="tor">🏰 Tor öffnen</button>
<p id="status">Das Tor ist geschlossen.</p>

<script>
  const btn = document.getElementById("tor");
  const status = document.getElementById("status");

  btn.addEventListener("click", function() {
    status.textContent = "Das Tor ist offen! 🎉";
    status.style.color = "lime";
  });
</script>
\`\`\`

## Die Brücke: document

\`document\` ist das Werkzeug, mit dem JavaScript auf HTML zugreift:

| Methode | Was sie macht |
|---------|-------------|
| \`document.getElementById("id")\` | Element per ID finden |
| \`element.textContent = "..."\` | Text ändern |
| \`element.style.color = "red"\` | CSS ändern |
| \`element.classList.add("klasse")\` | CSS-Klasse hinzufügen |`,
      exercise: {
        language: "html",
        title: "Das lebendige Schloss",
        instructionsMd: `*"Bringe dein erstes Element zum Leben mit JavaScript!"*

**Deine Aufgabe:**
1. Füge einen Button und eine \`<p>\` Nachricht ein
2. Per \`getElementById\` beide finden
3. Beim Klick: ändere den Text der Nachricht
4. Ändere auch die Farbe!`,
        starterCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; text-align: center; padding: 60px; }
  button { padding: 14px 28px; font-size: 18px; border-radius: 12px; border: none; background: #7c3aed; color: white; cursor: pointer; }
  #nachricht { font-size: 24px; margin-top: 30px; }
</style>

<button id="btn">🏰 Klick mich!</button>
<p id="nachricht">Noch nichts passiert...</p>

<script>
  // Dein JavaScript hier
</script>
`,
        check: { kind: "contains", needles: ["getElementById", "addEventListener", "textContent"] },
        hintMd: "`document.getElementById(\"btn\").addEventListener(\"click\", function() { document.getElementById(\"nachricht\").textContent = \"Es ist Magie! ✨\"; });`",
      },
    },
    {
      id: "web-16",
      trackId: "web",
      title: "📋 Projekt: To-Do Burg",
      summary: "Baue eine interaktive To-Do Liste mit HTML, CSS und JavaScript!",
      minutes: 35,
      xp: 110,
      contentMd: `# 🏰 Projekt: Die To-Do Burg

> *"Das Königreich ist in Gefahr! Es gibt so viele Aufgaben zu erledigen, aber niemand behält den Überblick. Du wirst eine To-Do Burg bauen – ein magisches System, das alle Aufgaben verwaltet!"*

## Was du baust

Eine To-Do Liste mit:
- ✅ Aufgaben hinzufügen (Eingabefeld + Button)
- ✅ Aufgaben abhaken (durchstreichen)
- ✅ Aufgaben löschen
- ✅ Schickes Design

## Wichtige JavaScript-Konzepte

\`\`\`js
// Neues Element erstellen
const li = document.createElement("li");
li.textContent = eingabe.value;
liste.appendChild(li);

// Klick-Event auf dynamisch erstellte Elemente
li.addEventListener("click", function() {
  li.style.textDecoration = "line-through";
});
\`\`\``,
      exercise: {
        language: "html",
        title: "Baue die To-Do Burg!",
        instructionsMd: `*"Das Königreich wartet auf deinen Helden! Baue die To-Do Burg."*

**Deine Aufgabe:**
1. Eingabefeld + Button zum Hinzufügen
2. Aufgaben erscheinen als Liste (\`<li>\`)
3. Klick auf Aufgabe = durchgestrichen
4. Löschen-Button bei jeder Aufgabe

**Tipp:** Nutze \`document.createElement\` und \`appendChild\``,
        starterCode: `<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #0f0f1a; color: white; font-family: Arial; max-width: 500px; margin: 40px auto; padding: 20px; }
  h1 { font-size: 2rem; margin-bottom: 20px; }
  .eingabe { display: flex; gap: 8px; margin-bottom: 20px; }
  input { flex: 1; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: white; font-size: 16px; }
  button { padding: 12px 20px; border-radius: 8px; border: none; background: #7c3aed; color: white; cursor: pointer; font-size: 16px; }
  #liste { list-style: none; }
  #liste li { display: flex; justify-content: space-between; align-items: center; padding: 14px; margin-bottom: 8px; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer; }
  #liste li.fertig { text-decoration: line-through; opacity: 0.5; }
  .del { background: #e94560; padding: 4px 10px; border-radius: 6px; font-size: 12px; border: none; color: white; cursor: pointer; }
</style>

<h1>🏰 To-Do Burg</h1>
<div class="eingabe">
  <input id="eingabe" placeholder="Neue Aufgabe..." />
  <button id="add">+ Hinzufügen</button>
</div>
<ul id="liste"></ul>

<script>
  // Dein Code hier
</script>
`,
        check: { kind: "contains", needles: ["createElement", "appendChild", "addEventListener"] },
        hintMd: "```js\ndocument.getElementById('add').addEventListener('click', function() {\n  const text = document.getElementById('eingabe').value;\n  if (!text) return;\n  const li = document.createElement('li');\n  li.textContent = text;\n  li.addEventListener('click', () => li.classList.toggle('fertig'));\n  document.getElementById('liste').appendChild(li);\n});\n```",
      },
    },
    {
      id: "web-17",
      trackId: "web",
      title: "💾 localStorage – Der Gedächtnis-Zauber",
      summary: "Speichere Daten im Browser – auch nach dem Neuladen!",
      minutes: 20,
      xp: 80,
      contentMd: `# Der Gedächtnis-Zauber: localStorage

> *"Deine To-Do Burg ist großartig – aber wenn du die Seite neu lädst, sind alle Aufgaben weg! Der weise Archivar zeigt dir den Gedächtnis-Zauber: localStorage. Damit erinnert sich der Browser an alles!"*

## localStorage – Daten behalten

\`\`\`js
// Speichern
localStorage.setItem("name", "Mila");
localStorage.setItem("punkte", "1500");

// Lesen
const name = localStorage.getItem("name");    // "Mila"
const punkte = localStorage.getItem("punkte"); // "1500" (immer ein String!)

// Löschen
localStorage.removeItem("name");

// Alles löschen
localStorage.clear();
\`\`\`

## Objekte speichern (mit JSON)

\`\`\`js
const held = { name: "Aria", level: 7 };

// Speichern (in String umwandeln)
localStorage.setItem("held", JSON.stringify(held));

// Lesen (zurück zu Objekt)
const geladen = JSON.parse(localStorage.getItem("held"));
console.log(geladen.name); // "Aria"
\`\`\``,
      exercise: {
        language: "html",
        title: "Name merken",
        instructionsMd: `*"Lerne den Gedächtnis-Zauber! Der Browser soll deinen Namen nicht vergessen."*

**Deine Aufgabe:**
1. Ein Eingabefeld für den Namen + Speicher-Button
2. Beim Klick: Name in \`localStorage\` speichern
3. Beim Laden der Seite: gespeicherten Namen anzeigen`,
        starterCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; text-align: center; padding: 60px; }
  input { padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: white; font-size: 16px; margin-right: 8px; }
  button { padding: 12px 20px; border-radius: 8px; border: none; background: #7c3aed; color: white; cursor: pointer; font-size: 16px; }
  #anzeige { font-size: 28px; margin-top: 30px; color: #a78bfa; }
</style>

<h2>🧙 Gedächtnis-Zauber</h2>
<input id="nameEingabe" placeholder="Dein Name..." />
<button id="speichern">💾 Merken!</button>
<p id="anzeige">Kein Name gespeichert.</p>

<script>
  // Beim Laden: prüfen ob Name vorhanden
  const gespeichert = localStorage.getItem("heldenname");
  if (gespeichert) {
    document.getElementById("anzeige").textContent = "Willkommen zurück, " + gespeichert + "! 👋";
  }

  // Speichern beim Klick
  // Dein Code hier
</script>
`,
        check: { kind: "contains", needles: ["localStorage.setItem", "localStorage.getItem"] },
        hintMd: "`localStorage.setItem(\"heldenname\", document.getElementById(\"nameEingabe\").value);`",
      },
    },
    {
      id: "web-18",
      trackId: "web",
      title: "🌈 Gradient & Schatten",
      summary: "Mache dein Design mit Verläufen und Schatten professionell!",
      minutes: 18,
      xp: 70,
      contentMd: `# Verläufe und Schatten – Profi-Design

> *"Du hast die Grundfähigkeiten gemeistert. Nun zeigt dir die Hofmalerin, wie man Seiten wirklich beeindruckend macht: mit Verläufen und Licht-Schatten!"*

## Gradienten (Verläufe)

\`\`\`css
/* Linearer Verlauf */
.hero {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

/* Radialer Verlauf */
.glow {
  background: radial-gradient(circle, #7c3aed, #1e1e3f);
}

/* Mehrere Farben */
.regenbogen {
  background: linear-gradient(90deg, #ff0080, #ff8c00, #ffe100, #00ff80);
}
\`\`\`

## Box-Shadow (Schatten)

\`\`\`css
.card {
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
  /* x  y  blur  farbe */
}

/* Neon-Glow Effekt */
.neon {
  box-shadow:
    0 0 10px #7c3aed,
    0 0 20px #7c3aed,
    0 0 40px #7c3aed;
}
\`\`\``,
      exercise: {
        language: "html",
        title: "Neon-Helden-Karte",
        instructionsMd: `*"Baue eine Helden-Karte mit Verlauf-Hintergrund und Neon-Glow!"*

**Deine Aufgabe:**
1. Eine Karte mit \`linear-gradient\` Hintergrund
2. \`box-shadow\` für einen Glow-Effekt
3. Helden-Info: Name, Klasse, Level`,
        starterCode: `<style>
  body { background: #050510; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; font-family: Arial; }
  .helden-karte {
    padding: 30px;
    border-radius: 20px;
    width: 280px;
    text-align: center;
    color: white;
    /* Gradient + Shadow hier */
  }
  .name { font-size: 28px; font-weight: bold; }
  .klasse { color: rgba(255,255,255,0.7); margin: 8px 0; }
  .level { font-size: 40px; font-weight: bold; color: #fbbf24; }
</style>

<div class="helden-karte">
  <div style="font-size: 64px">⚔️</div>
  <div class="name">Aria</div>
  <div class="klasse">Kriegerin des Lichts</div>
  <div class="level">Lvl 42</div>
</div>
`,
        check: { kind: "contains", needles: ["linear-gradient", "box-shadow"] },
        hintMd: "`background: linear-gradient(135deg, #1a1a3e, #7c3aed);`\n`box-shadow: 0 0 30px rgba(124,58,237,0.6);`",
      },
    },
    {
      id: "web-19",
      trackId: "web",
      title: "🔄 CSS Transform – Drehen & Vergrößern",
      summary: "Drehe, skaliere und verschiebe Elemente mit CSS!",
      minutes: 18,
      xp: 70,
      contentMd: `# Transform – Die Verwandlungs-Kunst

> *"Der Zauberer der Formen tritt vor dich: 'Ich kann alles drehen, vergrößern, verschieben! Lerne meine Kunst, junger Code-Held.'"*

## CSS Transform-Funktionen

\`\`\`css
/* Drehen */
.karte:hover { transform: rotate(5deg); }

/* Vergrößern/Verkleinern */
.btn:hover { transform: scale(1.1); }

/* Verschieben */
.icon { transform: translateX(10px) translateY(-5px); }

/* Kombinieren */
.epic:hover {
  transform: scale(1.05) rotate(-2deg);
}
\`\`\`

## Mit Transition kombinieren

\`\`\`css
.karte {
  transition: transform 0.3s ease;
}
.karte:hover {
  transform: scale(1.05) rotate(2deg);
}
\`\`\`

## Perspektive (3D!)

\`\`\`css
.container { perspective: 1000px; }
.card:hover {
  transform: rotateY(20deg);
}
\`\`\``,
      exercise: {
        language: "html",
        title: "Helden-Karten mit Transform",
        instructionsMd: `*"Baue 3 Helden-Karten. Beim Hover sollen sie sich drehen und vergrößern!"*

**Deine Aufgabe:**
1. 3 Karten mit Helden-Icons
2. \`:hover\` mit \`transform: scale() rotate()\`
3. \`transition\` für sanfte Bewegung`,
        starterCode: `<style>
  body { background: #0f0f1a; display: flex; gap: 20px; justify-content: center; align-items: center; min-height: 100vh; margin: 0; font-family: Arial; }
  .karte {
    padding: 30px;
    border-radius: 16px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    text-align: center;
    color: white;
    cursor: pointer;
    /* transition hier */
  }
  /* hover transform hier */
  .emoji { font-size: 48px; }
  .name { font-weight: bold; margin-top: 8px; }
</style>

<div class="karte"><div class="emoji">⚔️</div><div class="name">Krieger</div></div>
<div class="karte"><div class="emoji">🧙</div><div class="name">Magier</div></div>
<div class="karte"><div class="emoji">🏹</div><div class="name">Bogenschütze</div></div>
`,
        check: { kind: "contains", needles: ["transform", "transition", ":hover"] },
        hintMd: "`.karte { transition: transform 0.3s ease; }`\n`.karte:hover { transform: scale(1.1) rotate(-3deg); }`",
      },
    },
    {
      id: "web-20",
      trackId: "web",
      title: "🗺️ Tabellen – Die Karte des Reiches",
      summary: "Strukturiere Daten in übersichtlichen Tabellen!",
      minutes: 15,
      xp: 65,
      contentMd: `# Tabellen – Geordnetes Wissen

> *"Der Kartograph des Reiches braucht deine Hilfe! Er muss eine Übersicht aller Helden und ihrer Stärken erstellen. 'Nur HTML-Tabellen können so viele Daten ordentlich darstellen!'"*

## HTML-Tabellen-Struktur

\`\`\`html
<table>
  <thead>
    <tr>
      <th>Held</th>
      <th>Level</th>
      <th>Klasse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Aria</td>
      <td>42</td>
      <td>Kriegerin</td>
    </tr>
    <tr>
      <td>Zara</td>
      <td>38</td>
      <td>Magierin</td>
    </tr>
  </tbody>
</table>
\`\`\`

| Tag | Bedeutung |
|-----|-----------|
| \`<table>\` | Die Tabelle |
| \`<thead>\` | Kopfbereich |
| \`<tbody>\` | Datenbereich |
| \`<tr>\` | Zeile (table row) |
| \`<th>\` | Kopfzelle (fett) |
| \`<td>\` | Datenzelle |`,
      exercise: {
        language: "html",
        title: "Die Helden-Tabelle",
        instructionsMd: `*"Erstelle die Tabelle für den Kartographen!"*

**Deine Aufgabe:**
Baue eine Tabelle mit 3 Spalten (Name, Level, Klasse) und mindestens **3 Helden-Zeilen**. Style sie mit CSS!`,
        starterCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; padding: 30px; }
  table { width: 100%; border-collapse: collapse; }
  th { background: rgba(124,58,237,0.3); padding: 12px 16px; text-align: left; }
  td { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); }
  tr:hover td { background: rgba(255,255,255,0.05); }
</style>

<!-- Tabelle hier -->
`,
        check: { kind: "contains", needles: ["<table", "<thead", "<tr", "<th", "<td"] },
        hintMd: "Struktur: `<table><thead><tr><th>Name</th>...</tr></thead><tbody><tr><td>Aria</td>...</tr></tbody></table>`",
      },
    },
    {
      id: "web-21",
      trackId: "web",
      title: "🖌️ Dark Mode & Themes",
      summary: "Wechsle zwischen Light und Dark Mode per JavaScript!",
      minutes: 22,
      xp: 85,
      contentMd: `# Dark Mode – Die Wächter des Lichts und der Dunkelheit

> *"Das Schloss hat zwei Modi: Tagsüber strahlt es im Licht, nachts hüllt es sich in Dunkel. Du sollst einen Schalter bauen, der zwischen beiden wechselt!"*

## Theme-Wechsel mit JavaScript

\`\`\`js
// Klasse am body hinzufügen/entfernen
document.body.classList.toggle("dark");

// Prüfen welches Theme aktiv ist
if (document.body.classList.contains("dark")) {
  btn.textContent = "☀️ Light Mode";
} else {
  btn.textContent = "🌙 Dark Mode";
}
\`\`\`

## CSS für beide Themes

\`\`\`css
/* Light Mode (Standard) */
body {
  background: #ffffff;
  color: #111111;
}

/* Dark Mode */
body.dark {
  background: #0f0f1a;
  color: #f0f0ff;
}
\`\`\`

## localStorage für Theme-Speicherung

\`\`\`js
// Theme beim Start laden
const theme = localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");

// Theme beim Wechsel speichern
localStorage.setItem("theme", "dark");
\`\`\``,
      exercise: {
        language: "html",
        title: "Licht/Dunkel-Schalter",
        instructionsMd: `*"Baue den magischen Schalter des Schlosses!"*

**Deine Aufgabe:**
1. Zwei CSS-Klassen: normal und \`.dark\`
2. Button zum Umschalten
3. \`classList.toggle("dark")\` beim Klick
4. Button-Text wechselt zwischen ☀️ und 🌙`,
        starterCode: `<style>
  body { font-family: Arial; padding: 40px; transition: background 0.3s, color 0.3s; background: #ffffff; color: #111; }
  body.dark { background: #0f0f1a; color: #f0f0ff; }
  .card { padding: 30px; border-radius: 16px; max-width: 400px; border: 2px solid currentColor; }
  button { padding: 12px 24px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px; margin-bottom: 20px; }
</style>

<button id="theme-btn">🌙 Dark Mode</button>
<div class="card">
  <h2>⚔️ Held des Lichts</h2>
  <p>Dieser Held kämpft sowohl im Licht als auch im Dunkeln!</p>
</div>

<script>
  // Theme-Toggle hier
</script>
`,
        check: { kind: "contains", needles: ["classList.toggle", "dark", "addEventListener"] },
        hintMd: "`document.getElementById('theme-btn').addEventListener('click', function() { document.body.classList.toggle('dark'); this.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode'; });`",
      },
    },
    {
      id: "web-22",
      trackId: "web",
      title: "🎬 Scroll-Animationen",
      summary: "Lass Elemente erscheinen, wenn man zur Seite scrollt!",
      minutes: 22,
      xp: 85,
      contentMd: `# Scroll-Animationen – Die erwachende Welt

> *"Während du durch das Schloss wanderst, erwachen die Gemälde zum Leben – eines nach dem anderen! Das ist die Kunst der Scroll-Animationen: Elemente erscheinen genau dann, wenn du sie siehst."*

## IntersectionObserver

\`\`\`js
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("sichtbar");
    }
  });
});

// Alle .fade-in Elemente beobachten
document.querySelectorAll(".fade-in").forEach(function(el) {
  observer.observe(el);
});
\`\`\`

## CSS für den Effekt

\`\`\`css
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.sichtbar {
  opacity: 1;
  transform: translateY(0);
}
\`\`\``,
      exercise: {
        language: "html",
        title: "Erwachende Karten",
        instructionsMd: `*"Lass 5 Karten beim Scrollen erscheinen!"*

**Deine Aufgabe:**
1. 5 Karten mit der Klasse \`fade-in\`
2. CSS: Karten starten unsichtbar (\`opacity: 0\`)
3. JavaScript: \`IntersectionObserver\` der \`sichtbar\`-Klasse hinzufügt
4. CSS: \`.sichtbar\` macht Karten sichtbar`,
        starterCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; padding: 20px; }
  .karte { max-width: 500px; margin: 20px auto; padding: 30px; border-radius: 16px; background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.3); }
  .fade-in {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-in.sichtbar {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<div class="karte fade-in"><h2>⚔️ Quest 1: Das Schwert</h2></div>
<div class="karte fade-in"><h2>🛡️ Quest 2: Der Schild</h2></div>
<div class="karte fade-in"><h2>🏹 Quest 3: Der Bogen</h2></div>
<div class="karte fade-in"><h2>🧙 Quest 4: Der Zauberstab</h2></div>
<div class="karte fade-in"><h2>🏆 Quest 5: Die Krone</h2></div>

<script>
  // IntersectionObserver hier
</script>
`,
        check: { kind: "contains", needles: ["IntersectionObserver", "classList.add", "sichtbar"] },
        hintMd: "```js\nconst obs = new IntersectionObserver(entries => {\n  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('sichtbar'); });\n});\ndocument.querySelectorAll('.fade-in').forEach(el => obs.observe(el));\n```",
      },
    },
    {
      id: "web-23",
      trackId: "web",
      title: "⌨️ Keyboard Events & Shortcuts",
      summary: "Reagiere auf Tastatureingaben für Spiele und Apps!",
      minutes: 20,
      xp: 80,
      contentMd: `# Keyboard Events – Die Macht der Tasten

> *"Der Spielmeister erscheint: 'Ein wirklich gutes Spiel braucht Tastatursteuerung! Lerne, auf jede Taste zu reagieren, und deine Spiele werden legendär!'"*

## keydown Event

\`\`\`js
document.addEventListener("keydown", function(event) {
  console.log(event.key);  // "ArrowUp", "Enter", "a", etc.

  if (event.key === "ArrowUp") {
    console.log("Held bewegt sich hoch!");
  }
});
\`\`\`

## Wichtige Tasten-Keys

| \`event.key\` | Taste |
|-------------|-------|
| \`"ArrowUp"\` | Pfeil hoch |
| \`"ArrowDown"\` | Pfeil runter |
| \`" "\` | Leertaste |
| \`"Enter"\` | Enter |
| \`"Escape"\` | Escape |

## Bewegen mit Tastatur

\`\`\`js
let x = 200;

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") x -= 10;
  if (e.key === "ArrowRight") x += 10;
  held.style.left = x + "px";
});
\`\`\``,
      exercise: {
        language: "html",
        title: "Bewege deinen Helden!",
        instructionsMd: `*"Bringe deinen Helden zum Laufen mit den Pfeiltasten!"*

**Deine Aufgabe:**
1. Einen Helden (Emoji in einem \`div\`) auf der Seite anzeigen
2. Mit \`keydown\` auf Pfeiltasten reagieren
3. Den Helden links/rechts bewegen
4. Den Helden hüpfen lassen (Pfeil hoch)`,
        starterCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; overflow: hidden; margin: 0; }
  #arena { width: 100vw; height: 100vh; position: relative; }
  #held {
    position: absolute;
    font-size: 48px;
    bottom: 20px;
    left: 200px;
    transition: left 0.1s, bottom 0.2s;
    user-select: none;
  }
  #info { position: fixed; top: 20px; left: 20px; color: #a78bfa; }
</style>

<div id="arena">
  <div id="held">🧙</div>
</div>
<div id="info">⬅️➡️ Bewegen · ⬆️ Springen</div>

<script>
  const held = document.getElementById("held");
  let x = 200;

  document.addEventListener("keydown", function(e) {
    // Dein Code hier
  });
</script>
`,
        check: { kind: "contains", needles: ["keydown", "event.key", "ArrowLeft"] },
        hintMd: "`if (e.key === \"ArrowLeft\") { x -= 20; }`\n`if (e.key === \"ArrowRight\") { x += 20; }`\n`held.style.left = x + \"px\";`",
      },
    },
    {
      id: "web-24",
      trackId: "web",
      title: "🎨 CSS Custom Animations – Komplex",
      summary: "Baue mehrstufige Animationen mit @keyframes!",
      minutes: 22,
      xp: 90,
      contentMd: `# Epische Animationen – Die Kunst der Bewegung

> *"Die großen Meister des Schlosses enthüllen dir das letzte Geheimnis: Mehrstufige Keyframe-Animationen. Mit ihnen kannst du Dinge fliegen, leuchten und tanzen lassen!"*

## Mehrstufige @keyframes

\`\`\`css
@keyframes fliegen {
  0%   { transform: translateY(0) rotate(0); opacity: 1; }
  25%  { transform: translateY(-40px) rotate(5deg); }
  50%  { transform: translateY(-20px) rotate(-5deg); }
  75%  { transform: translateY(-50px) rotate(3deg); }
  100% { transform: translateY(0) rotate(0); opacity: 1; }
}

.vogel {
  animation: fliegen 3s ease-in-out infinite;
}
\`\`\`

## Animationen steuern

\`\`\`css
.element {
  animation-name: meinAnimation;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite; /* oder eine Zahl */
  animation-direction: alternate; /* vor und zurück */
  animation-delay: 0.5s; /* Verzögerung */
}
\`\`\`

## Mehrere Animationen kombinieren

\`\`\`css
.stern {
  animation:
    drehen 4s linear infinite,
    leuchten 2s ease-in-out infinite;
}
\`\`\``,
      exercise: {
        language: "html",
        title: "Animierter Charakter",
        instructionsMd: `*"Erschaffe einen Charakter mit mindestens 2 verschiedenen Animationen!"*

**Deine Aufgabe:**
1. Mindestens 2 \`@keyframes\` (z.B. schwebend + leuchtend)
2. Ein Charakter (Emoji oder div) mit beiden Animationen
3. \`animation-iteration-count: infinite\``,
        starterCode: `<style>
  body { background: #050510; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }

  @keyframes schweben {
    /* Deine Keyframes hier */
  }

  @keyframes leuchten {
    /* Deine Keyframes hier */
  }

  .held {
    font-size: 80px;
    /* animation hier */
  }
</style>

<div class="held">🧙‍♂️</div>
`,
        check: { kind: "contains", needles: ["@keyframes", "animation", "infinite"] },
        hintMd: "@keyframes schweben: `0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); }`",
      },
    },
    {
      id: "web-25",
      trackId: "web",
      title: "🏆 Abschlussprojekt: Portfolio-Schloss",
      summary: "Baue dein episches Portfolio mit allem, was du gelernt hast!",
      minutes: 45,
      xp: 150,
      contentMd: `# 🏆 Das Portfolio-Schloss

> *"Du hast alle Lektionen des Web-Tracks gemeistert! Nun ist es Zeit für dein größtes Werk: Das Portfolio-Schloss – eine Webseite, die zeigt, wer du bist und was du kannst!"*

## Was du baust

Dein persönliches Portfolio mit:

### Pflicht ✅
- Navigation mit Sprunglinks
- Hero-Section mit deinem Namen + Animations
- Über-mich-Section mit Bild
- Skills-Section (Grid mit Karten)
- Projekte-Section
- Dark/Light Mode Toggle
- Responsive (funktioniert auf Handy)
- CSS Variablen für Farben
- Mindestens eine @keyframes Animation

### Bonus ⭐
- Scroll-Animationen (IntersectionObserver)
- Tastatur-Shortcut (z.B. \`d\` für Dark Mode)
- localStorage (Theme wird gemerkt)

## Empfohlene Struktur

\`\`\`html
<nav>...</nav>
<section id="start">Hero</section>
<section id="über-mich">Info</section>
<section id="skills">Fähigkeiten</section>
<section id="projekte">Meine Werke</section>
<footer>...</footer>
\`\`\`

> 🎉 Dein Portfolio ist deine Visitenkarte – zeige es stolz!`,
      exercise: {
        language: "html",
        title: "Baue dein Portfolio-Schloss!",
        instructionsMd: `*"Das ist dein Meisterwerk! Keine Einschränkungen – sei kreativ!"*

**Pflicht-Elemente:**
- \`<nav>\` mit Links
- Mindestens 3 \`<section>\` Bereiche
- CSS Variablen (\`:root { --... }\`)
- Mindestens 1 \`@keyframes\` Animation
- Dark Mode Toggle
- Responsive Layout`,
        starterCode: `<style>
  :root {
    --primary: #7c3aed;
    --bg: #0f0f1a;
    --text: #f0f0ff;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: var(--bg); color: var(--text); font-family: Arial; }

  /* Dein CSS hier */
</style>

<nav><!-- Navigation --></nav>

<section id="start">
  <!-- Deine Hero-Section -->
</section>

<section id="über-mich">
  <!-- Über-mich -->
</section>

<section id="skills">
  <!-- Skills/Fähigkeiten -->
</section>

<script>
  /* Dark Mode Toggle, Scroll-Animationen etc. */
</script>
`,
        check: {
          kind: "contains",
          needles: ["--primary", "@keyframes", "<nav", "<section", "dark"],
        },
        hintMd: "Beginne mit der Hero-Section und dem Dark Mode Toggle. Dann baue Schritt für Schritt die anderen Sektionen.",
      },
    },
  ],
};


