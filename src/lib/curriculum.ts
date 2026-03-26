export type TrackId = "web" | "js" | "python";
export type ExerciseLanguage = "html" | "javascript" | "python";

export type ExerciseCheck =
  | {
      kind: "contains";
      needles: string[];
      caseSensitive?: boolean;
    }
  | {
      kind: "js_console_includes";
      expected: string;
    }
  | {
      kind: "python_stdout_includes";
      expected: string;
    };

export type Exercise = {
  language: ExerciseLanguage;
  title: string;
  instructionsMd: string;
  starterCode: string;
  check: ExerciseCheck;
  hintMd?: string;
  solutionCode?: string;
};

export type Lesson = {
  id: string;
  trackId: TrackId;
  title: string;
  summary: string;
  minutes: number;
  xp: number;
  contentMd: string;
  exercise: Exercise;
};

export type Track = {
  id: TrackId;
  title: string;
  emoji: string;
  description: string;
  color: "indigo" | "emerald" | "amber";
  recommendedAge: string;
  lessons: Lesson[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  trackIds: TrackId[];
  difficulty: "leicht" | "mittel" | "knifflig";
  deliverable: string;
};

const WEB: Track = {
  id: "web",
  title: "Web‑Explorer",
  emoji: "🌐",
  description: "Baue eigene Webseiten mit HTML & CSS – von der ersten Überschrift bis zu coolen Animationen!",
  color: "indigo",
  recommendedAge: "ab 9 Jahren",
  lessons: [
    {
      id: "web-01",
      trackId: "web",
      title: "🏗️ Was ist HTML?",
      summary: "Schreibe dein allererstes Stück Code und erstelle eine Webseite!",
      minutes: 12,
      xp: 40,
      contentMd: `# Was ist HTML?

HTML ist die **Sprache des Internets** – damit sagst du dem Browser, was er anzeigen soll.

Jede Webseite (YouTube, TikTok, Wikipedia) besteht aus HTML!

## Tags – die Bausteine

HTML funktioniert mit **Tags**. Ein Tag hat immer einen Anfang und ein Ende:

\`\`\`html
<h1>Das ist eine große Überschrift</h1>
<p>Das ist ein normaler Text-Absatz.</p>
\`\`\`

> 💡 **Tipp:** Tags sind wie Klammern – was dazwischen steht, gehört dazu!

## Die wichtigsten Tags

| Tag | Was es macht |
|-----|-------------|
| \`<h1>\` | Riesige Überschrift |
| \`<h2>\` | Mittlere Überschrift |
| \`<p>\` | Textabsatz |`,
      exercise: {
        language: "html",
        title: "Baue deine erste Seite!",
        instructionsMd: `**Deine Aufgabe:**

1. Schreibe eine \`<h1>\` Überschrift mit deinem Namen
2. Schreibe darunter einen \`<p>\` Absatz, was du magst

**Beispiel:**
\`\`\`html
<h1>Ich bin Alex!</h1>
<p>Ich mag Pizza und Videospiele.</p>
\`\`\``,
        starterCode: "<h1>Hallo!</h1>\n<p>Ich lerne Programmieren.</p>\n",
        check: { kind: "contains", needles: ["<h1", "</h1>", "<p", "</p>"] },
        hintMd: "Schreib deinen Text **zwischen** die Tags:\n\n`<h1>Dein Text hier</h1>`",
        solutionCode: "<h1>Ich bin Alex!</h1>\n<p>Ich mag Pizza und Videospiele.</p>\n",
      },
    },
    {
      id: "web-02",
      trackId: "web",
      title: "🔗 Links & Bilder",
      summary: "Mache deine Seite klickbar und füge Bilder ein!",
      minutes: 15,
      xp: 50,
      contentMd: `# Links & Bilder

## Links – Türen zu anderen Seiten

Ein Link bringt dich zu einer anderen Seite. Er sieht so aus:

\`\`\`html
<a href="https://youtube.com">Zu YouTube!</a>
\`\`\`

- \`href\` = die Adresse, wohin der Link führt
- Der Text dazwischen ist das, was du siehst und anklickst

## Bilder einfügen

\`\`\`html
<img src="https://picsum.photos/400/200" alt="Ein cooles Bild" />
\`\`\`

- \`src\` = wo das Bild liegt (Adresse)
- \`alt\` = Beschreibung (wichtig für blinde Menschen!)

> 🎨 Das Bild von \`picsum.photos\` ist ein zufälliges Foto – jedes Mal anders!`,
      exercise: {
        language: "html",
        title: "Link + Bild einbauen",
        instructionsMd: `**Deine Aufgabe:**

1. Erstelle einen Link zu \`https://scratch.mit.edu\` mit dem Text **Scratch**
2. Füge darunter ein Bild ein (nutze: \`https://picsum.photos/seed/quest/640/240\`)

**So sieht ein Link aus:**
\`\`\`html
<a href="ADRESSE">Linktext</a>
\`\`\``,
        starterCode: "<h1>Meine coolen Links</h1>\n\n<!-- Link hier -->\n\n<!-- Bild hier -->\n",
        check: {
          kind: "contains",
          needles: ["<a", "href=", "scratch.mit.edu", "</a>", "<img"],
        },
        hintMd: "Vergiss nicht das `alt`-Attribut beim Bild!\n\n`<img src=\"...\" alt=\"Beschreibung\" />`",
        solutionCode: `<h1>Meine coolen Links</h1>
<p><a href="https://scratch.mit.edu">Scratch</a></p>
<img src="https://picsum.photos/seed/quest/640/240" alt="Ein buntes Bild" />
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
| Neon-Dark | `#0f0f1a`, `#7c3aed`, `#e94560` |
| Ocean | `#0f3460`, `#16213e`, `#00d4ff` |
| Forest | `#1a2e1a`, `#16a34a`, `#a3e635` |

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
  ],
};

const JS: Track = {
  id: "js",
  title: "JavaScript‑Quest",
  emoji: "⚡",
  description: "Lerne Programmierlogik und bringe Webseiten zum Leben – mit Variablen, Schleifen und coolen Spielen!",
  color: "amber",
  recommendedAge: "ab 10 Jahren",
  lessons: [
    {
      id: "js-01",
      trackId: "js",
      title: "⚡ Hello JavaScript",
      summary: "Dein erster Code! Schreibe eine Nachricht in die Konsole.",
      minutes: 12,
      xp: 45,
      contentMd: `# Hello JavaScript!

JavaScript ist die **Programmiersprache des Browsers**.

Damit kannst du Webseiten lebendig machen – Spiele, Animationen, Reaktionen auf Klicks!

## console.log – dein Tagebuch

Mit \`console.log()\` kannst du Nachrichten ausgeben:

\`\`\`js
console.log("Hallo, Welt!");
console.log("Ich lerne JavaScript!");
\`\`\`

## Anführungszeichen

Text (Strings) musst du in Anführungszeichen schreiben:
- \`"doppelte Anführungszeichen"\` ✅
- \`'einfache Anführungszeichen'\` ✅
- \`Ohne Anführungszeichen\` ❌ (Fehler!)

> 💡 Die Ausgabe erscheint hier unten im Ergebnis-Bereich!`,
      exercise: {
        language: "javascript",
        title: "Sage Hallo!",
        instructionsMd: `**Deine Aufgabe:**

Gib genau diesen Text aus:

\`Hallo, CodeQuest!\`

⚠️ Achte auf Groß/Kleinschreibung und das Ausrufezeichen!`,
        starterCode: 'console.log("Hallo, Welt!");\n',
        check: { kind: "js_console_includes", expected: "Hallo, CodeQuest!" },
        hintMd: "Ersetze `Welt` durch `CodeQuest` – und vergiss das `!` nicht!",
        solutionCode: 'console.log("Hallo, CodeQuest!");\n',
      },
    },
    {
      id: "js-02",
      trackId: "js",
      title: "📦 Variablen",
      summary: "Speichere Werte in beschrifteten Boxen!",
      minutes: 15,
      xp: 55,
      contentMd: `# Variablen – Boxen mit Namen

Eine Variable ist wie eine **beschriftete Box** – du legst etwas rein und kannst es später wieder rausholen.

\`\`\`js
const name = "Mila";
const alter = 12;
const liebt_pizza = true;
\`\`\`

## const vs. let

- \`const\` = die Box **bleibt immer gleich** (constant)
- \`let\` = der Wert **kann sich ändern**

\`\`\`js
let punkte = 0;
punkte = 10; // Geht mit let!
\`\`\`

## Datentypen

| Typ | Beispiel | Was ist das? |
|-----|---------|-------------|
| String | \`"Hallo"\` | Text |
| Number | \`42\` | Zahl |
| Boolean | \`true\` / \`false\` | Ja/Nein |

## String zusammenbauen

\`\`\`js
const name = "Alex";
console.log("Hallo, " + name + "!"); // Hallo, Alex!
// Oder mit Template-Literal:
console.log(\`Hallo, \${name}!\`);     // Hallo, Alex!
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Dein Steckbrief",
        instructionsMd: `**Deine Aufgabe:**

1. Lege eine Variable \`name\` mit deinem Namen an
2. Lege eine Variable \`alter\` mit deinem Alter an
3. Gib aus: \`Ich bin [Name] und [Alter] Jahre alt.\`

**Beispiel-Ausgabe:** \`Ich bin Alex und 12 Jahre alt.\``,
        starterCode: "// Variablen anlegen\n\n// Ausgabe\n",
        check: { kind: "js_console_includes", expected: "Jahre alt" },
        hintMd: "Template-Literal: `` console.log(`Ich bin ${name} und ${alter} Jahre alt.`) ``",
      },
    },
    {
      id: "js-03",
      trackId: "js",
      title: "🔀 Wenn‑Dann (if/else)",
      summary: "Dein Programm trifft eigene Entscheidungen!",
      minutes: 18,
      xp: 65,
      contentMd: `# if/else – Entscheidungen treffen

Stell dir vor, du spielst ein Abenteuer-Spiel. Wenn du den Schlüssel hast, öffnest du die Tür – **sonst nicht**.

\`\`\`js
const hatSchlüssel = true;

if (hatSchlüssel) {
  console.log("Die Tür öffnet sich!");
} else {
  console.log("Die Tür ist verschlossen.");
}
\`\`\`

## Vergleiche

| Operator | Bedeutung |
|----------|-----------|
| \`===\` | Genau gleich |
| \`!==\` | Nicht gleich |
| \`>\` | Größer als |
| \`<\` | Kleiner als |
| \`>=\` | Größer oder gleich |

\`\`\`js
const punkte = 85;

if (punkte >= 90) {
  console.log("Sehr gut! ⭐");
} else if (punkte >= 70) {
  console.log("Gut! 👍");
} else {
  console.log("Weiter üben! 💪");
}
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Levelcheck",
        instructionsMd: `**Deine Aufgabe:**

1. Erstelle \`const level = 5;\`
2. Wenn \`level >= 5\`, gib aus: \`Bosskampf freigeschaltet! 🐉\`
3. Sonst gib aus: \`Noch nicht stark genug...\``,
        starterCode: "const level = 5;\n\n// if/else hier\n",
        check: { kind: "js_console_includes", expected: "Bosskampf freigeschaltet!" },
        hintMd: "Vergiss die geschweiften Klammern `{ }` nicht!",
      },
    },
    {
      id: "js-04",
      trackId: "js",
      title: "🔄 Schleifen",
      summary: "Wiederhole Code – ohne ihn 100× zu schreiben!",
      minutes: 18,
      xp: 70,
      contentMd: `# Schleifen – Code wiederholen

Stell dir vor, du willst "Münze!" 100 Mal ausgeben. Ohne Schleife müsstest du 100 Zeilen schreiben!

## for-Schleife

\`\`\`js
for (let i = 1; i <= 5; i++) {
  console.log("Runde " + i);
}
// Ausgabe: Runde 1, Runde 2, Runde 3, Runde 4, Runde 5
\`\`\`

Die drei Teile der for-Schleife:
1. \`let i = 1\` – Startwert
2. \`i <= 5\` – Bedingung (solange das gilt, weiter)
3. \`i++\` – nach jeder Runde um 1 erhöhen

## Rückwärtszählen

\`\`\`js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("🚀 Start!");
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Countdown!",
        instructionsMd: `**Deine Aufgabe:**

1. Schreibe eine Schleife, die von **5 bis 1** runterzählt
2. Gib danach **\`🚀 Start!\`** aus`,
        starterCode: "// Countdown-Schleife hier\n",
        check: { kind: "js_console_includes", expected: "🚀 Start!" },
        hintMd: "Von 5 runterzählen: `for (let i = 5; i >= 1; i--)`\n\nDann: `console.log(\"🚀 Start!\")`",
      },
    },
    {
      id: "js-05",
      trackId: "js",
      title: "🧩 Funktionen",
      summary: "Baue wiederverwendbare Code-Blöcke!",
      minutes: 20,
      xp: 80,
      contentMd: `# Funktionen – Code in Bausteinen

Eine Funktion ist wie ein **Zaubertrank-Rezept** – du schreibst es einmal und kannst es immer wieder benutzen!

\`\`\`js
function berechneSchaden(angriff, rüstung) {
  const schaden = angriff - rüstung;
  return schaden > 0 ? schaden : 0;
}

console.log(berechneSchaden(10, 3)); // 7
console.log(berechneSchaden(5, 8));  // 0
\`\`\`

## Aufbau einer Funktion

\`\`\`js
function name(parameter1, parameter2) {
  // Code hier
  return ergebnis;
}
\`\`\`

## return – das Ergebnis

Mit \`return\` gibt die Funktion einen Wert zurück:

\`\`\`js
function begrüße(name) {
  return "Hallo, " + name + "! 👋";
}

const nachricht = begrüße("Mila");
console.log(nachricht); // Hallo, Mila! 👋
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Schaden-Rechner",
        instructionsMd: `**Deine Aufgabe:**

1. Schreibe eine Funktion \`greet(name)\`
2. Sie soll \`"Hallo, [name]! Willkommen bei CodeQuest! 🎮"\` zurückgeben
3. Rufe sie mit \`greet("Sam")\` auf und gib das Ergebnis aus`,
        starterCode: "// Funktion hier\n\n// Aufruf und Ausgabe\n",
        check: { kind: "js_console_includes", expected: "Hallo, Sam!" },
        hintMd: "Funktion: `function greet(name) { return \"Hallo, \" + name + \"! ...\"; }`\n\nAufruf: `console.log(greet(\"Sam\"));`",
      },
    },
    {
      id: "js-06",
      trackId: "js",
      title: "📚 Arrays",
      summary: "Speichere mehrere Werte in einer Liste!",
      minutes: 18,
      xp: 75,
      contentMd: `# Arrays – Listen in JavaScript

Ein Array ist wie ein **Rucksack** mit nummerierten Fächern.

\`\`\`js
const helden = ["Krieger", "Magier", "Schurke"];

console.log(helden[0]); // "Krieger" (Erstes Element = Index 0!)
console.log(helden[1]); // "Magier"
console.log(helden.length); // 3
\`\`\`

> ⚠️ Arrays starten bei **Index 0**, nicht bei 1!

## Nützliche Array-Methoden

\`\`\`js
const items = ["Schwert", "Schild"];

items.push("Trank");     // Hinzufügen: ["Schwert", "Schild", "Trank"]
items.pop();             // Letztes entfernen: ["Schwert", "Schild"]
console.log(items.length); // Länge: 2
\`\`\`

## Array mit Schleife durchgehen

\`\`\`js
const früchte = ["🍎", "🍌", "🍊"];

for (const frucht of früchte) {
  console.log(frucht);
}
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Inventar-System",
        instructionsMd: `**Deine Aufgabe:**

1. Erstelle ein Array \`inventar\` mit 3 Items (z.B. "Schwert", "Schild", "Trank")
2. Füge mit \`.push()\` ein weiteres Item hinzu
3. Gib mit einer \`for...of\` Schleife jedes Item aus`,
        starterCode: "const inventar = [];\n\n// Item hinzufügen\n\n// Schleife hier\n",
        check: { kind: "js_console_includes", expected: "Schwert" },
        hintMd: "`for (const item of inventar) { console.log(item); }`",
      },
    },
    {
      id: "js-07",
      trackId: "js",
      title: "🗂️ Objekte",
      summary: "Beschreibe Dinge mit mehreren Eigenschaften!",
      minutes: 20,
      xp: 80,
      contentMd: `# Objekte – Dinge beschreiben

Ein Objekt sammelt **zusammengehörige Informationen** – wie ein Steckbrief!

\`\`\`js
const held = {
  name: "Aria",
  klasse: "Magierin",
  level: 7,
  hp: 80,
  aktiv: true
};

console.log(held.name);   // "Aria"
console.log(held.level);  // 7
\`\`\`

## Werte ändern

\`\`\`js
held.level = 8;     // Level hochsetzen
held.hp -= 10;      // 10 HP abziehen
\`\`\`

## Methoden (Funktionen in Objekten)

\`\`\`js
const held = {
  name: "Aria",
  level: 5,
  vorstellung() {
    console.log(\`Ich bin \${this.name}, Level \${this.level}!\`);
  }
};

held.vorstellung(); // "Ich bin Aria, Level 5!"
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Dein Spielcharakter",
        instructionsMd: `**Deine Aufgabe:**

1. Erstelle ein Objekt \`charakter\` mit:
   - \`name\` (dein Name)
   - \`klasse\` (z.B. "Krieger", "Magier")
   - \`level\` (Zahl)
2. Gib aus: \`[Name] der [Klasse], Level [Zahl]\``,
        starterCode: "const charakter = {\n  // Eigenschaften hier\n};\n\n// Ausgabe\n",
        check: { kind: "js_console_includes", expected: "Level" },
        hintMd: "`` console.log(`${charakter.name} der ${charakter.klasse}, Level ${charakter.level}`) ``",
      },
    },
    {
      id: "js-08",
      trackId: "js",
      title: "🖱️ DOM – HTML verändern",
      summary: "Verändere Webseiten-Inhalt mit JavaScript!",
      minutes: 22,
      xp: 85,
      contentMd: `# Das DOM – Die Brücke zu HTML

DOM = **D**ocument **O**bject **M**odel

JavaScript kann HTML-Elemente **lesen und verändern**!

\`\`\`html
<h1 id="titel">Hallo!</h1>

<script>
  // Element finden
  const titel = document.getElementById("titel");

  // Text ändern
  titel.textContent = "Hello JavaScript! 🎉";

  // CSS ändern
  titel.style.color = "hotpink";
  titel.style.fontSize = "60px";
</script>
\`\`\`

## Elemente erstellen und einfügen

\`\`\`js
const neuerText = document.createElement("p");
neuerText.textContent = "Ich wurde von JS erstellt!";
document.body.appendChild(neuerText);
\`\`\`

> 💡 Mit dem DOM kannst du Webseiten dynamisch machen – ohne Neuladen!`,
      exercise: {
        language: "html",
        title: "Text per JavaScript ändern",
        instructionsMd: `**Deine Aufgabe:**

1. Ändere den Text des \`<h1>\` auf **"JavaScript ist MEGA! 🚀"**
2. Ändere die Farbe auf eine coole Farbe deiner Wahl
3. Füge einen neuen \`<p>\` mit einem Text hinzu`,
        starterCode: `<h1 id="titel">Ich werde gleich verändert...</h1>

<script>
  const titel = document.getElementById("titel");

  // Dein Code hier

</script>
`,
        check: { kind: "contains", needles: ["getElementById", "textContent", "style"] },
        hintMd: "`titel.textContent = \"JavaScript ist MEGA! 🚀\";`\n`titel.style.color = \"hotpink\";`",
        solutionCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; padding: 30px; }
</style>

<h1 id="titel">Ich werde gleich verändert...</h1>

<script>
  const titel = document.getElementById("titel");
  titel.textContent = "JavaScript ist MEGA! 🚀";
  titel.style.color = "hotpink";
  titel.style.fontSize = "48px";

  const neuerText = document.createElement("p");
  neuerText.textContent = "DOM-Manipulation macht Spaß!";
  neuerText.style.color = "#a78bfa";
  document.body.appendChild(neuerText);
</script>
`,
      },
    },
    {
      id: "js-09",
      trackId: "js",
      title: "🎮 Events – Auf Klicks reagieren",
      summary: "Reagiere auf Mausklicks und Tastatureingaben!",
      minutes: 22,
      xp: 90,
      contentMd: `# Events – Warte auf Aktionen

Events sind **Ereignisse**: Klick, Tastendruck, Mausbewegung...

\`\`\`html
<button id="btn">Klick mich!</button>

<script>
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function() {
    console.log("Du hast geklickt! 🎉");
  });
</script>
\`\`\`

## Häufige Events

| Event | Wann? |
|-------|-------|
| \`click\` | Mausklick |
| \`mouseover\` | Maus drüber |
| \`keydown\` | Taste gedrückt |
| \`input\` | Text eingegeben |

## Zähler-Beispiel

\`\`\`js
let punkte = 0;

btn.addEventListener("click", function() {
  punkte++;
  document.getElementById("anzeige").textContent = punkte;
});
\`\`\``,
      exercise: {
        language: "html",
        title: "Klick-Zähler",
        instructionsMd: `**Deine Aufgabe:**

Baue einen Klick-Zähler:
1. Ein \`<p>\` zeigt die Anzahl der Klicks
2. Ein Button erhöht den Zähler bei jedem Klick
3. Starte bei 0`,
        starterCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; text-align: center; padding: 60px; }
  button { padding: 16px 32px; font-size: 20px; border-radius: 12px; border: none; background: #7c3aed; color: white; cursor: pointer; }
  button:hover { background: #6d28d9; }
  #anzeige { font-size: 80px; font-weight: bold; color: #e94560; }
</style>

<p id="anzeige">0</p>
<button id="btn">⚡ Klick!</button>

<script>
  let zähler = 0;
  // Event Listener hier
</script>
`,
        check: { kind: "contains", needles: ["addEventListener", "click", "zähler"] },
        hintMd: "`btn.addEventListener(\"click\", function() { zähler++; anzeige.textContent = zähler; });`",
        solutionCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; text-align: center; padding: 60px; }
  button { padding: 16px 32px; font-size: 20px; border-radius: 12px; border: none; background: #7c3aed; color: white; cursor: pointer; transition: transform 0.1s; }
  button:active { transform: scale(0.95); }
  button:hover { background: #6d28d9; }
  #anzeige { font-size: 80px; font-weight: bold; color: #e94560; margin-bottom: 20px; }
</style>

<p id="anzeige">0</p>
<button id="btn">⚡ Klick!</button>

<script>
  let zähler = 0;
  const anzeige = document.getElementById("anzeige");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function() {
    zähler++;
    anzeige.textContent = zähler;
  });
</script>
`,
      },
    },
    {
      id: "js-10",
      trackId: "js",
      title: "🏆 Projekt: Klick-Spiel",
      summary: "Baue ein richtiges Spiel mit Punkten, Timer und Gewinn-Screen!",
      minutes: 35,
      xp: 120,
      contentMd: `# 🏆 Abschlussprojekt: Klick-Spiel

Du hast alles gelernt – jetzt bauen wir ein **richtiges Spiel**!

## Das Spiel

- Du hast **10 Sekunden** Zeit
- Klicke so oft wie möglich auf den Button
- Am Ende siehst du deinen Score

## Zutaten

\`\`\`js
let punkte = 0;
let zeit = 10;

// Timer (zählt runter)
const timer = setInterval(function() {
  zeit--;
  if (zeit <= 0) {
    clearInterval(timer); // Timer stoppen
    // Spiel beenden
  }
}, 1000); // alle 1000ms = 1 Sekunde
\`\`\`

## Tipps

- \`setInterval(fn, ms)\` führt Code regelmäßig aus
- \`clearInterval(timer)\` stoppt den Timer
- Deaktiviere den Button am Ende: \`btn.disabled = true\``,
      exercise: {
        language: "html",
        title: "Baue das Klick-Spiel!",
        instructionsMd: `**Baue ein vollständiges Klick-Spiel:**

1. Punkte-Anzeige (startet bei 0)
2. Timer-Anzeige (startet bei 10)
3. Klick-Button
4. Timer zählt runter mit \`setInterval\`
5. Button wird nach 10s deaktiviert
6. Nachricht "Spiel vorbei! Du hast X Punkte!" am Ende`,
        starterCode: `<style>
  body { background: #0f0f1a; color: white; font-family: Arial; text-align: center; padding: 40px; }
  .stats { display: flex; justify-content: center; gap: 40px; margin-bottom: 30px; }
  .stat { font-size: 48px; font-weight: bold; }
  .label { font-size: 14px; color: #a0a0a0; }
  #btn { padding: 20px 40px; font-size: 24px; border-radius: 16px; border: none; background: #e94560; color: white; cursor: pointer; transition: transform 0.1s; }
  #btn:active { transform: scale(0.95); }
  #btn:disabled { background: #444; cursor: not-allowed; }
  #nachricht { font-size: 28px; margin-top: 30px; color: #fbbf24; display: none; }
</style>

<div class="stats">
  <div>
    <div class="stat" id="punkte-anzeige">0</div>
    <div class="label">Punkte</div>
  </div>
  <div>
    <div class="stat" id="timer-anzeige">10</div>
    <div class="label">Sekunden</div>
  </div>
</div>

<button id="btn">🎯 KLICK!</button>
<div id="nachricht"></div>

<script>
  let punkte = 0;
  let zeit = 10;

  // Dein Code hier

</script>
`,
        check: { kind: "contains", needles: ["setInterval", "clearInterval", "disabled"] },
        hintMd: "Timer: `const timer = setInterval(function() { zeit--; if (zeit <= 0) { clearInterval(timer); btn.disabled = true; } }, 1000);`",
      },
    },
  ],
};

const PY: Track = {
  id: "python",
  title: "Python‑Playground",
  emoji: "🐍",
  description: "Python ist einfach zu lernen und super mächtig – perfekt für Spiele, Rechner und sogar KI!",
  color: "emerald",
  recommendedAge: "ab 10 Jahren",
  lessons: [
    {
      id: "py-01",
      trackId: "python",
      title: "🐍 Hello Python",
      summary: "Dein erstes Python-Programm – ausgeben und rechnen!",
      minutes: 12,
      xp: 45,
      contentMd: `# Hello Python!

Python ist eine der **beliebtesten Programmiersprachen der Welt**.

Netflix, Instagram, YouTube – alle nutzen Python!

## print() – Dinge ausgeben

\`\`\`python
print("Hallo, Welt!")
print("Ich lerne Python!")
print(2 + 2)  # Gibt 4 aus
\`\`\`

## Python kann rechnen!

\`\`\`python
print(10 + 5)   # 15
print(10 - 3)   # 7
print(4 * 6)    # 24
print(15 / 3)   # 5.0
print(2 ** 10)  # 1024 (2 hoch 10)
\`\`\`

## Kein Semikolon!

Anders als JavaScript braucht Python **kein** \`;\` am Ende!

> 💡 Python liest sich fast wie normales Englisch – das macht es super einfach!`,
      exercise: {
        language: "python",
        title: "Dein erstes Python-Programm",
        instructionsMd: `**Deine Aufgabe:**

Gib genau diesen Text aus:

\`Hallo aus Python! 🐍\``,
        starterCode: "print('Hallo!')\n",
        check: { kind: "python_stdout_includes", expected: "Hallo aus Python!" },
        solutionCode: "print('Hallo aus Python! 🐍')\n",
      },
    },
    {
      id: "py-02",
      trackId: "python",
      title: "📦 Variablen & Typen",
      summary: "Speichere Zahlen, Text und mehr in Variablen!",
      minutes: 15,
      xp: 55,
      contentMd: `# Variablen in Python

Variablen funktionieren in Python einfacher als in vielen anderen Sprachen!

\`\`\`python
name = "Mila"
alter = 12
größe = 1.58
liebt_pizza = True
\`\`\`

Kein \`const\` oder \`let\` nötig – einfach zuweisen!

## f-Strings – Text zusammenbauen

\`\`\`python
name = "Alex"
alter = 11

print(f"Ich bin {name} und {alter} Jahre alt!")
# Gibt aus: Ich bin Alex und 11 Jahre alt!
\`\`\`

> 💡 Das \`f\` vor dem String steht für **f**ormatted – praktisch!

## Typen

| Typ | Beispiel | Python-Name |
|-----|---------|------------|
| Text | \`"Hallo"\` | \`str\` |
| Ganzzahl | \`42\` | \`int\` |
| Kommazahl | \`3.14\` | \`float\` |
| Wahrheitswert | \`True\` | \`bool\` |`,
      exercise: {
        language: "python",
        title: "Dein Python-Steckbrief",
        instructionsMd: `**Deine Aufgabe:**

1. Erstelle Variablen \`name\` und \`alter\`
2. Gib aus: \`Ich heiße [Name] und bin [Alter] Jahre alt.\`

Nutze einen f-String!`,
        starterCode: "# Variablen anlegen\n\n# Ausgabe mit f-String\n",
        check: { kind: "python_stdout_includes", expected: "Ich heiße" },
        hintMd: '`print(f"Ich heiße {name} und bin {alter} Jahre alt.")`',
      },
    },
    {
      id: "py-03",
      trackId: "python",
      title: "🔀 if / elif / else",
      summary: "Dein Programm trifft Entscheidungen!",
      minutes: 18,
      xp: 65,
      contentMd: `# Entscheidungen in Python

\`\`\`python
energie = 3

if energie >= 5:
    print("Los geht's! ⚔️")
elif energie >= 2:
    print("Noch ein bisschen... 😴")
else:
    print("Pause machen! 💤")
\`\`\`

## Wichtig: Einrückung!

Python nutzt **Einrückung** (4 Leerzeichen oder Tab) statt \`{}\`:

\`\`\`python
if True:
    print("Das wird ausgeführt")  # 4 Leerzeichen Einrückung!
print("Das immer")
\`\`\`

## Vergleiche

| Operator | Bedeutung |
|----------|-----------|
| \`==\` | Gleich |
| \`!=\` | Ungleich |
| \`>\` | Größer |
| \`<\` | Kleiner |
| \`>=\` | Größer-gleich |

> ⚠️ In Python: \`==\` (zwei Gleichheitszeichen) zum Vergleichen, \`=\` zum Zuweisen!`,
      exercise: {
        language: "python",
        title: "Noten-Rechner",
        instructionsMd: `**Deine Aufgabe:**

1. Setze \`note = 2\`
2. Wenn \`note == 1\`: gib \`"Super! Einser! 🌟"\` aus
3. Wenn \`note <= 3\`: gib \`"Gut gemacht! 👍"\` aus
4. Sonst: gib \`"Weiter üben! 💪"\` aus`,
        starterCode: "note = 2\n\n# if/elif/else hier\n",
        check: { kind: "python_stdout_includes", expected: "Gut gemacht!" },
        hintMd: "Nutze `elif` für die zweite Bedingung:\n```python\nif note == 1:\n    ...\nelif note <= 3:\n    ...\nelse:\n    ...\n```",
      },
    },
    {
      id: "py-04",
      trackId: "python",
      title: "🔄 for‑Schleifen",
      summary: "Wiederhole Aktionen elegant mit for!",
      minutes: 18,
      xp: 70,
      contentMd: `# for-Schleifen in Python

Python-Schleifen sind super lesbar!

## Mit range()

\`\`\`python
for i in range(1, 6):
    print(f"Runde {i}")
# Gibt aus: Runde 1 bis Runde 5
\`\`\`

## Über eine Liste gehen

\`\`\`python
früchte = ["🍎", "🍌", "🍊", "🍇"]

for frucht in früchte:
    print(f"Ich mag {frucht}")
\`\`\`

## range() genauer

\`\`\`python
range(5)       # 0, 1, 2, 3, 4
range(1, 6)    # 1, 2, 3, 4, 5
range(0, 10, 2) # 0, 2, 4, 6, 8 (Schritt 2)
\`\`\`

> 💡 \`range(start, stop, schritt)\` – \`stop\` wird **nicht** mitgezählt!`,
      exercise: {
        language: "python",
        title: "Münzen sammeln",
        instructionsMd: `**Deine Aufgabe:**

1. Schreibe eine Schleife, die **5 Mal** \`"Münze gesammelt! 🪙"\` ausgibt
2. Gib danach \`"Gesamt: 5 Münzen! 💰"\` aus`,
        starterCode: "# for-Schleife hier\n",
        check: { kind: "python_stdout_includes", expected: "Gesamt: 5 Münzen!" },
        hintMd: "`for i in range(5):`\n    `print(\"Münze gesammelt! 🪙\")`\n`print(\"Gesamt: 5 Münzen! 💰\")`",
      },
    },
    {
      id: "py-05",
      trackId: "python",
      title: "⏳ while‑Schleifen",
      summary: "Wiederhole, solange eine Bedingung gilt!",
      minutes: 18,
      xp: 70,
      contentMd: `# while-Schleifen

Eine while-Schleife läuft **solange** eine Bedingung wahr ist.

\`\`\`python
leben = 3

while leben > 0:
    print(f"❤️ Leben: {leben}")
    leben -= 1  # leben = leben - 1

print("Game Over! 💀")
\`\`\`

## Unterschied for vs while

| for | while |
|-----|-------|
| Wenn du die Anzahl weißt | Wenn du die Bedingung prüfst |
| \`for i in range(5):\` | \`while hp > 0:\` |
| Genau 5 Mal | Solange HP > 0 |

## break – Schleife vorzeitig beenden

\`\`\`python
for i in range(100):
    if i == 5:
        break  # Schleife sofort beenden
    print(i)
# Gibt nur 0, 1, 2, 3, 4 aus
\`\`\`

> ⚠️ Infinite Loop! Wenn die Bedingung nie \`False\` wird, läuft die Schleife ewig!`,
      exercise: {
        language: "python",
        title: "Countdown-Rakete",
        instructionsMd: `**Deine Aufgabe:**

1. Starte \`countdown = 5\`
2. Schreibe eine while-Schleife, die runterzählt und bei jedem Schritt \`"T-[Zahl]"\` ausgibt
3. Gib danach \`"🚀 Abflug!"\` aus`,
        starterCode: "countdown = 5\n\n# while-Schleife hier\n",
        check: { kind: "python_stdout_includes", expected: "🚀 Abflug!" },
        hintMd: "`while countdown > 0:`\n    `print(f\"T-{countdown}\")`\n    `countdown -= 1`\n`print(\"🚀 Abflug!\")`",
      },
    },
    {
      id: "py-06",
      trackId: "python",
      title: "📚 Listen",
      summary: "Speichere viele Werte in einer Liste!",
      minutes: 20,
      xp: 75,
      contentMd: `# Listen in Python

Eine Liste kann viele Werte speichern:

\`\`\`python
inventar = ["Schwert", "Schild", "Trank", "Karte"]

print(inventar[0])    # "Schwert" (Index 0!)
print(inventar[-1])   # "Karte" (letztes Element!)
print(len(inventar))  # 4
\`\`\`

## Listen verändern

\`\`\`python
inventar.append("Bogen")    # Hinzufügen
inventar.remove("Trank")    # Entfernen
inventar.sort()              # Sortieren
\`\`\`

## Alle Items ausgeben

\`\`\`python
for item in inventar:
    print(f"→ {item}")
\`\`\`

## List Comprehension (Profi-Trick!)

\`\`\`python
zahlen = [1, 2, 3, 4, 5]
doppelt = [x * 2 for x in zahlen]
print(doppelt)  # [2, 4, 6, 8, 10]
\`\`\``,
      exercise: {
        language: "python",
        title: "Abenteurer-Inventar",
        instructionsMd: `**Deine Aufgabe:**

1. Erstelle eine Liste \`inventar\` mit 3 Items
2. Füge mit \`.append()\` ein 4. Item hinzu
3. Gib die Gesamtanzahl aus: \`"Inventar: X Items"\`
4. Gib alle Items mit einer Schleife aus`,
        starterCode: "inventar = []\n\n# Items hinzufügen\n\n# Ausgabe\n",
        check: { kind: "python_stdout_includes", expected: "Inventar:" },
        hintMd: "`inventar = [\"Schwert\", \"Schild\", \"Trank\"]`\n`inventar.append(\"Bogen\")`\n`print(f\"Inventar: {len(inventar)} Items\")`",
      },
    },
    {
      id: "py-07",
      trackId: "python",
      title: "🧩 Funktionen (def)",
      summary: "Schreibe eigene wiederverwendbare Funktionen!",
      minutes: 20,
      xp: 80,
      contentMd: `# Funktionen in Python

Funktionen verpacken Code, den du **wiederverwenden** möchtest:

\`\`\`python
def begrüße(name):
    print(f"Hallo, {name}! Willkommen! 👋")

begrüße("Mila")   # Hallo, Mila! Willkommen! 👋
begrüße("Sam")    # Hallo, Sam! Willkommen! 👋
\`\`\`

## Funktionen mit return

\`\`\`python
def berechne_xp(level, basis_xp):
    return level * basis_xp

xp = berechne_xp(5, 100)
print(f"Du hast {xp} XP!")  # Du hast 500 XP!
\`\`\`

## Standard-Parameter

\`\`\`python
def angriff(schaden, rüstung=0):
    treffer = schaden - rüstung
    return max(treffer, 0)  # Minimum 0, kein negativer Schaden

print(angriff(10))      # 10
print(angriff(10, 3))   # 7
\`\`\``,
      exercise: {
        language: "python",
        title: "Schaden-Rechner",
        instructionsMd: `**Deine Aufgabe:**

1. Schreibe eine Funktion \`berechne_schaden(angriff, rüstung)\`
2. Sie soll \`angriff - rüstung\` zurückgeben (mindestens 0!)
3. Gib aus: \`"Schaden: [Zahl]"\` für \`angriff=15, rüstung=5\``,
        starterCode: "# Funktion hier\n\n# Aufruf und Ausgabe\n",
        check: { kind: "python_stdout_includes", expected: "Schaden: 10" },
        hintMd: "`def berechne_schaden(angriff, rüstung):`\n    `return max(angriff - rüstung, 0)`\n`print(f\"Schaden: {berechne_schaden(15, 5)}\")`",
      },
    },
    {
      id: "py-08",
      trackId: "python",
      title: "🗂️ Dictionaries",
      summary: "Speichere Daten als Schlüssel-Wert-Paare!",
      minutes: 20,
      xp: 80,
      contentMd: `# Dictionaries – Wörterbücher

Ein Dictionary speichert Daten als **Schlüssel: Wert** Paare:

\`\`\`python
held = {
    "name": "Aria",
    "klasse": "Magierin",
    "level": 7,
    "hp": 80
}

print(held["name"])    # "Aria"
print(held["level"])   # 7
\`\`\`

## Werte ändern und hinzufügen

\`\`\`python
held["level"] = 8         # Ändern
held["mana"] = 50         # Neu hinzufügen
\`\`\`

## Über ein Dictionary gehen

\`\`\`python
for schlüssel, wert in held.items():
    print(f"{schlüssel}: {wert}")
\`\`\`

## Prüfen ob ein Schlüssel existiert

\`\`\`python
if "name" in held:
    print("Name gefunden!")
\`\`\``,
      exercise: {
        language: "python",
        title: "Spieler-Profil",
        instructionsMd: `**Deine Aufgabe:**

1. Erstelle ein Dictionary \`spieler\` mit: \`name\`, \`klasse\`, \`level\`, \`hp\`
2. Erhöhe \`level\` um 1
3. Gib aus: \`"[Name] der [Klasse] ist jetzt Level [Zahl]!"\``,
        starterCode: "spieler = {}\n\n# Level erhöhen\n\n# Ausgabe\n",
        check: { kind: "python_stdout_includes", expected: "ist jetzt Level" },
        hintMd: '`spieler = {"name": "Alex", "klasse": "Krieger", "level": 4, "hp": 100}`\n`spieler["level"] += 1`',
      },
    },
    {
      id: "py-09",
      trackId: "python",
      title: "🔤 String-Methoden",
      summary: "Manipuliere Texte wie ein Profi!",
      minutes: 18,
      xp: 75,
      contentMd: `# Strings bearbeiten

Strings haben viele nützliche **Methoden** (eingebaute Funktionen):

\`\`\`python
text = "  Hallo, Python!  "

print(text.upper())        # "  HALLO, PYTHON!  "
print(text.lower())        # "  hallo, python!  "
print(text.strip())        # "Hallo, Python!" (Leerzeichen weg)
print(text.replace("Python", "Welt"))  # "  Hallo, Welt!  "
print(len(text))           # 18
\`\`\`

## String prüfen

\`\`\`python
name = "Alex123"

print(name.startswith("Alex"))  # True
print(name.endswith("3"))       # True
print("123" in name)            # True
\`\`\`

## String aufteilen

\`\`\`python
satz = "Apfel,Banane,Orange"
früchte = satz.split(",")
print(früchte)  # ["Apfel", "Banane", "Orange"]
\`\`\``,
      exercise: {
        language: "python",
        title: "Text-Transformer",
        instructionsMd: `**Deine Aufgabe:**

1. Erstelle \`text = "hallo codequest"\`
2. Gib ihn in **Großbuchstaben** aus
3. Ersetze \`"codequest"\` durch \`"welt"\` und gib das Ergebnis aus
4. Gib die **Länge** des originalen Textes aus`,
        starterCode: 'text = "hallo codequest"\n\n# Dein Code hier\n',
        check: { kind: "python_stdout_includes", expected: "HALLO CODEQUEST" },
        hintMd: "`print(text.upper())`\n`print(text.replace(\"codequest\", \"welt\"))`\n`print(len(text))`",
      },
    },
    {
      id: "py-10",
      trackId: "python",
      title: "🏆 Projekt: Zahlen‑Rätsel",
      summary: "Baue ein vollständiges Zahlenratespiel mit Python!",
      minutes: 35,
      xp: 120,
      contentMd: `# 🏆 Abschlussprojekt: Zahlen-Rätsel

Du hast alles gelernt – jetzt bauen wir ein richtiges Spiel!

## Das Spiel

- Computer "denkt" sich eine Zahl zwischen 1 und 100
- Spieler tippt Zahlen ein (wir simulieren mit Variablen)
- Computer gibt Hinweise: "zu groß", "zu klein", "richtig!"

## Das brauchst du

\`\`\`python
import random

geheimzahl = random.randint(1, 100)  # Zufallszahl!
\`\`\`

## Tipps

- Nutze eine \`while\`-Schleife für mehrere Versuche
- Zähle die Versuche mit einer Variable
- Gib am Ende aus, wie viele Versuche gebraucht wurden

## Beispiel-Ausgabe

\`\`\`
Versuch 1: 50 → Zu groß!
Versuch 2: 25 → Zu klein!
Versuch 3: 37 → Zu groß!
Versuch 4: 31 → Zu klein!
Versuch 5: 34 → 🎉 Richtig! 5 Versuche gebraucht!
\`\`\``,
      exercise: {
        language: "python",
        title: "Zahlen-Rätsel bauen",
        instructionsMd: `**Deine Aufgabe:**

Baue das Zahlen-Rätsel:

1. Importiere \`random\` und generiere \`geheimzahl = random.randint(1, 100)\`
2. Erstelle eine Liste \`versuche = [45, 70, 55, 60, 58]\` (simulierte Eingaben)
3. Gehe mit einer \`for\`-Schleife durch die Versuche
4. Vergleiche jeden Versuch mit der Geheimzahl
5. Gib Hinweise aus und beende mit \`break\` wenn richtig
6. Gib am Ende aus wie viele Versuche gebraucht wurden`,
        starterCode: `import random

# Für diesen Test fixieren wir die Geheimzahl
random.seed(42)
geheimzahl = random.randint(1, 100)

versuche = [50, 25, 37, 31, 34]

# Dein Code hier - gehe durch die Versuche
`,
        check: { kind: "python_stdout_includes", expected: "Versuche" },
        hintMd: "```python\nfor i, versuch in enumerate(versuche, 1):\n    if versuch < geheimzahl:\n        print(f\"Versuch {i}: {versuch} → Zu klein!\")\n    elif versuch > geheimzahl:\n        print(f\"Versuch {i}: {versuch} → Zu groß!\")\n    else:\n        print(f\"🎉 Richtig! {i} Versuche gebraucht!\")\n        break\n```",
      },
    },
  ],
};

export const TRACKS: Track[] = [WEB, JS, PY];

export function getTrack(trackId: TrackId): Track {
  const track = TRACKS.find((t) => t.id === trackId);
  if (!track) {
    throw new Error(`Unknown trackId: ${trackId}`);
  }
  return track;
}

export function getLesson(trackId: TrackId, lessonId: string): Lesson {
  const track = getTrack(trackId);
  const lesson = track.lessons.find((l) => l.id === lessonId);
  if (!lesson) {
    throw new Error(`Unknown lessonId: ${lessonId} (trackId: ${trackId})`);
  }
  return lesson;
}

export const PROJECTS: Project[] = [
  {
    id: "project-homepage",
    title: "🌐 Meine persönliche Homepage",
    description: "Eine coole Homepage über dich – mit Bild, Links, Hobbys und einem tollen Design!",
    skills: ["HTML-Struktur", "CSS-Farben & Flexbox", "Animationen", "Navigation"],
    trackIds: ["web"],
    difficulty: "leicht",
    deliverable: "Eine fertige Webseite mit Navigation und 2+ Sektionen.",
  },
  {
    id: "project-quiz",
    title: "❓ Quiz-Spiel",
    description: "Baue ein Multiple-Choice-Quiz zu deinem Lieblingsthema – mit Punktestand und Timer!",
    skills: ["Arrays", "Objekte", "Events", "DOM-Manipulation"],
    trackIds: ["js"],
    difficulty: "mittel",
    deliverable: "Ein spielbares Quiz mit Punkten und Auswertung.",
  },
  {
    id: "project-adventure",
    title: "📖 Text-Adventure",
    description: "Schreibe eine Geschichte, in der der Spieler Entscheidungen trifft und verschiedene Enden erreicht!",
    skills: ["if/else", "Funktionen", "Dictionaries", "Listen"],
    trackIds: ["python"],
    difficulty: "mittel",
    deliverable: "Ein Python-Abenteuer mit mindestens 3 verschiedenen Wegen.",
  },
  {
    id: "project-calculator",
    title: "🧮 Browser-Rechner",
    description: "Baue einen echten Taschenrechner im Browser – mit Buttons und Display!",
    skills: ["HTML Buttons", "CSS Grid", "JS Events", "DOM"],
    trackIds: ["web", "js"],
    difficulty: "mittel",
    deliverable: "Ein funktionierender Rechner mit +, -, ×, ÷.",
  },
  {
    id: "project-game",
    title: "🎮 Capstone: Mini-Spiel",
    description: "Baue ein vollständiges Spiel: Snake, Pong, Memory oder deine eigene Idee!",
    skills: ["Alles kombiniert", "Game Loop", "Canvas oder DOM", "State Management"],
    trackIds: ["web", "js"],
    difficulty: "knifflig",
    deliverable: "Ein spielbares Spiel mit Start- und Game-Over-Screen.",
  },
  {
    id: "project-chatbot",
    title: "🤖 Einfacher Chatbot",
    description: "Baue einen Python-Chatbot, der auf Fragen antwortet – der erste Schritt Richtung KI!",
    skills: ["Dictionaries", "Funktionen", "String-Methoden", "Schleifen"],
    trackIds: ["python"],
    difficulty: "knifflig",
    deliverable: "Ein Chatbot, der mindestens 10 verschiedene Fragen beantwortet.",
  },
];
