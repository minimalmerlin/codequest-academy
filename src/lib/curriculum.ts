export type TrackId = "web" | "js" | "python" | "ki" | "sql" | "react";
export type ExerciseLanguage = "html" | "javascript" | "python" | "sql" | "react";

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
    }
  | {
      kind: "sql_result_includes";
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
  color: "indigo" | "emerald" | "amber" | "violet" | "sky" | "rose";
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
    {
      id: "js-11",
      trackId: "js",
      title: "Der Ternary-Trick",
      summary: "Schreibe Bedingungen in einer einzigen Zeile – wie ein Profi-Zauberer!",
      minutes: 12,
      xp: 55,
      contentMd: `# 🪄 Der Ternary-Trick

> *"Im Zauberturm gibt es eine geheime Kurzschrift. Statt langer Beschwörungsformeln – ein einziger Satz."*

Kennst du if/else? Super! Jetzt lernst du die **Kurzversion**:

\`\`\`js
// Normal:
if (alter >= 18) {
  status = "Erwachsen";
} else {
  status = "Kind";
}

// Mit Ternary (viel kürzer!):
const status = alter >= 18 ? "Erwachsen" : "Kind";
\`\`\`

**Aufbau:** \`Bedingung ? WennJa : WennNein\`

### Beispiele:
\`\`\`js
const punkte = 85;
const note = punkte >= 60 ? "Bestanden ✅" : "Nicht bestanden ❌";
console.log(note); // Bestanden ✅

const zahl = 7;
const art = zahl % 2 === 0 ? "Gerade" : "Ungerade";
console.log(art); // Ungerade
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Ternary-Zaubertrick",
        instructionsMd: `Verwende den **Ternary-Operator** um zu prüfen ob eine Temperatur warm oder kalt ist.

Schreibe: \`const beschreibung = temperatur >= 20 ? ... : ...\`

Gib dann \`beschreibung\` aus!`,
        starterCode: `const temperatur = 25;

// Schreibe hier deinen Ternary-Ausdruck:
const beschreibung = // ?

console.log(beschreibung);
`,
        check: { kind: "js_console_includes", expected: "warm" },
        hintMd: "`const beschreibung = temperatur >= 20 ? \"Warm ☀️\" : \"Kalt 🥶\";`",
        solutionCode: `const temperatur = 25;
const beschreibung = temperatur >= 20 ? "Warm ☀️" : "Kalt 🥶";
console.log(beschreibung);`,
      },
    },
    {
      id: "js-12",
      trackId: "js",
      title: "map() – der Verwandlungs-Zauber",
      summary: "Verwandle jedes Element eines Arrays mit einem einzigen Befehl!",
      minutes: 15,
      xp: 60,
      contentMd: `# 🔮 map() – Der Verwandlungs-Zauber

> *"Die Alchemisten des Codes haben eine Kunst perfektioniert: jedes Element einer Liste gleichzeitig zu verwandeln."*

**map()** wendet eine Funktion auf **jedes Element** eines Arrays an und gibt ein **neues Array** zurück:

\`\`\`js
const zahlen = [1, 2, 3, 4, 5];
const verdoppelt = zahlen.map(n => n * 2);
console.log(verdoppelt); // [2, 4, 6, 8, 10]
\`\`\`

### Weitere Beispiele:
\`\`\`js
const namen = ["anna", "ben", "clara"];
const gross = namen.map(n => n.toUpperCase());
console.log(gross); // ["ANNA", "BEN", "CLARA"]

const preise = [10, 25, 5, 40];
const mitRabatt = preise.map(p => p * 0.9); // 10% Rabatt
console.log(mitRabatt); // [9, 22.5, 4.5, 36]
\`\`\`

Das **Original-Array bleibt unverändert** – map() erstellt immer ein neues Array!`,
      exercise: {
        language: "javascript",
        title: "Quadriere alle Zahlen",
        instructionsMd: `Verwende **map()** um jede Zahl im Array zu quadrieren (also: zahl × zahl).

Gib das neue Array mit \`console.log\` aus!`,
        starterCode: `const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Verwende map() zum Quadrieren:
const quadriert = zahlen.map(n => /* dein Code */);

console.log(quadriert);
`,
        check: { kind: "js_console_includes", expected: "100" },
        hintMd: "`const quadriert = zahlen.map(n => n * n);`",
        solutionCode: `const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const quadriert = zahlen.map(n => n * n);
console.log(quadriert);`,
      },
    },
    {
      id: "js-13",
      trackId: "js",
      title: "filter() – Das magische Sieb",
      summary: "Filtere nur die Elemente aus einem Array, die eine Bedingung erfüllen!",
      minutes: 15,
      xp: 60,
      contentMd: `# 🪣 filter() – Das magische Sieb

> *"Der weise Magier schüttelt sein goldenes Sieb – nur die wahren Kristalle fallen hindurch."*

**filter()** gibt alle Elemente zurück, die eine **Bedingung erfüllen**:

\`\`\`js
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const geradeZahlen = zahlen.filter(n => n % 2 === 0);
console.log(geradeZahlen); // [2, 4, 6, 8, 10]
\`\`\`

### Mehr Beispiele:
\`\`\`js
const noten = [85, 42, 97, 60, 35, 78];
const bestanden = noten.filter(n => n >= 60);
console.log(bestanden); // [85, 97, 60, 78]

const woerter = ["Apfel", "Banane", "Avocado", "Birne", "Ananas"];
const mitA = woerter.filter(w => w.startsWith("A"));
console.log(mitA); // ["Apfel", "Avocado", "Ananas"]
\`\`\`

### map() + filter() kombinieren:
\`\`\`js
const zahlen = [1,2,3,4,5,6,7,8,9,10];
const ergebnis = zahlen
  .filter(n => n % 2 === 0) // nur gerade
  .map(n => n * n);         // dann quadrieren
console.log(ergebnis); // [4, 16, 36, 64, 100]
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Filtere teure Produkte",
        instructionsMd: `Filtere aus der Preisliste alle Produkte, die **mehr als 50 Euro** kosten.

Gib das gefilterte Array aus!`,
        starterCode: `const preise = [12, 67, 5, 99, 45, 150, 30, 80];

// Nur Preise über 50 Euro:
const teuer = preise.filter(p => /* dein Code */);

console.log(teuer);
`,
        check: { kind: "js_console_includes", expected: "150" },
        hintMd: "`const teuer = preise.filter(p => p > 50);`",
        solutionCode: `const preise = [12, 67, 5, 99, 45, 150, 30, 80];
const teuer = preise.filter(p => p > 50);
console.log(teuer);`,
      },
    },
    {
      id: "js-14",
      trackId: "js",
      title: "reduce() – Der Schatzhäufer",
      summary: "Fasse ein ganzes Array zu einem einzigen Wert zusammen!",
      minutes: 18,
      xp: 70,
      contentMd: `# 💰 reduce() – Der Schatzhäufer

> *"Der Schatzhäufer zählt jeden Goldmünzen-Stapel zusammen – am Ende kennt er den Gesamtschatz."*

**reduce()** verarbeitet ein Array und gibt **einen einzigen Wert** zurück:

\`\`\`js
const zahlen = [1, 2, 3, 4, 5];
const summe = zahlen.reduce((gesamt, n) => gesamt + n, 0);
console.log(summe); // 15
\`\`\`

**Aufbau:** \`array.reduce((akkumulator, element) => neuerWert, startwert)\`

- **akkumulator**: der laufende "Sammler" (startet mit Startwert)
- **element**: das aktuelle Element
- **startwert**: womit der Akkumulator beginnt

### Mehr Beispiele:
\`\`\`js
// Produkt aller Zahlen:
const produkt = [1,2,3,4,5].reduce((ges, n) => ges * n, 1);
console.log(produkt); // 120

// Längsten String finden:
const woerter = ["Hi", "Hallo", "Servus", "Hey"];
const laengster = woerter.reduce((lang, w) =>
  w.length > lang.length ? w : lang, "");
console.log(laengster); // "Servus"
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Berechne den Gesamtpreis",
        instructionsMd: `Berechne mit **reduce()** den **Gesamtpreis** aller Artikel im Einkaufswagen.

Gib die Summe aus!`,
        starterCode: `const einkaufswagen = [12.50, 4.99, 25.00, 7.49, 1.29];

// Berechne die Summe mit reduce():
const gesamt = einkaufswagen.reduce((/* akkumulator, element */) => /* dein Code */, 0);

console.log("Gesamt: " + gesamt.toFixed(2) + " €");
`,
        check: { kind: "js_console_includes", expected: "51.27" },
        hintMd: "`const gesamt = einkaufswagen.reduce((summe, preis) => summe + preis, 0);`",
        solutionCode: `const einkaufswagen = [12.50, 4.99, 25.00, 7.49, 1.29];
const gesamt = einkaufswagen.reduce((summe, preis) => summe + preis, 0);
console.log("Gesamt: " + gesamt.toFixed(2) + " €");`,
      },
    },
    {
      id: "js-15",
      trackId: "js",
      title: "Spread & Destructuring",
      summary: "Entpacke Arrays und Objekte wie Zaubertricks!",
      minutes: 18,
      xp: 65,
      contentMd: `# 📦 Spread & Destructuring

> *"Ein Zauberumhang kann sich entfalten und seinen Inhalt enthüllen – genau so funktioniert Destructuring."*

## Destructuring – Entpacken!

**Arrays entpacken:**
\`\`\`js
const farben = ["Rot", "Grün", "Blau"];
const [erste, zweite, dritte] = farben;
console.log(erste);  // "Rot"
console.log(zweite); // "Grün"
\`\`\`

**Objekte entpacken:**
\`\`\`js
const held = { name: "Luna", level: 5, klasse: "Magier" };
const { name, level } = held;
console.log(name);  // "Luna"
console.log(level); // 5
\`\`\`

## Spread-Operator – Verteilen!

**Arrays zusammenführen:**
\`\`\`js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const alle = [...arr1, ...arr2];
console.log(alle); // [1, 2, 3, 4, 5, 6]
\`\`\`

**Objekte zusammenführen:**
\`\`\`js
const basis = { hp: 100, mp: 50 };
const held = { ...basis, name: "Aria", level: 3 };
console.log(held); // { hp: 100, mp: 50, name: "Aria", level: 3 }
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Held-Destrukturierung",
        instructionsMd: `Entpacke das Objekt \`krieger\` mit **Destructuring** und gib Name und Stärke aus.

Dann füge das Schwert-Array mit **Spread** zusammen!`,
        starterCode: `const krieger = { name: "Thor", staerke: 95, verteidigung: 70 };

// Entpacke name und staerke:
const { /* dein Code */ } = krieger;
console.log(name + " hat Stärke " + staerke);

// Füge Waffen zusammen:
const schwerter = ["Excalibur", "Durandal"];
const aexte = ["Mjolnir", "Gungnir"];
const waffen = [...schwerter, ...aexte];
console.log(waffen);
`,
        check: { kind: "js_console_includes", expected: "Thor" },
        hintMd: "`const { name, staerke } = krieger;`",
        solutionCode: `const krieger = { name: "Thor", staerke: 95, verteidigung: 70 };
const { name, staerke } = krieger;
console.log(name + " hat Stärke " + staerke);
const schwerter = ["Excalibur", "Durandal"];
const aexte = ["Mjolnir", "Gungnir"];
const waffen = [...schwerter, ...aexte];
console.log(waffen);`,
      },
    },
    {
      id: "js-16",
      trackId: "js",
      title: "try/catch – Fehler fangen",
      summary: "Fange Fehler ab bevor sie dein Programm zerstören!",
      minutes: 15,
      xp: 65,
      contentMd: `# 🛡️ try/catch – Der Schutzzauber

> *"Auch der mächtigste Zauber kann fehlschlagen. Ein weiser Magier ist immer vorbereitet."*

Manchmal passieren Fehler – Eingaben die falsch sind, Server die nicht antworten... **try/catch** fängt diese Fehler ab:

\`\`\`js
try {
  // Code der vielleicht einen Fehler erzeugt
  const ergebnis = riskanteFunktion();
  console.log(ergebnis);
} catch (fehler) {
  // Was passiert WENN ein Fehler auftritt
  console.log("Fehler aufgetreten: " + fehler.message);
}
\`\`\`

### Eigene Fehler werfen:
\`\`\`js
function teile(a, b) {
  if (b === 0) {
    throw new Error("Division durch Null ist verboten!");
  }
  return a / b;
}

try {
  console.log(teile(10, 2)); // 5
  console.log(teile(10, 0)); // Fehler!
} catch (e) {
  console.log("Oops: " + e.message);
}
\`\`\`

### finally – immer ausgeführt:
\`\`\`js
try {
  // ...
} catch (e) {
  // ...
} finally {
  console.log("Das hier läuft IMMER");
}
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Sicheres Dividieren",
        instructionsMd: `Schreibe eine Funktion \`sicherTeilen(a, b)\` die:
1. Bei \`b === 0\` einen Fehler wirft
2. Sonst das Ergebnis zurückgibt

Teste sie mit try/catch!`,
        starterCode: `function sicherTeilen(a, b) {
  if (b === 0) {
    throw new Error(/* deine Fehlermeldung */);
  }
  return a / b;
}

try {
  console.log(sicherTeilen(20, 4));  // sollte 5 ausgeben
  console.log(sicherTeilen(10, 0)); // sollte Fehler werfen
} catch (e) {
  console.log("Fehler: " + e.message);
}
`,
        check: { kind: "js_console_includes", expected: "5" },
        hintMd: "`throw new Error(\"Kann nicht durch Null teilen!\");`",
        solutionCode: `function sicherTeilen(a, b) {
  if (b === 0) {
    throw new Error("Kann nicht durch Null teilen!");
  }
  return a / b;
}
try {
  console.log(sicherTeilen(20, 4));
  console.log(sicherTeilen(10, 0));
} catch (e) {
  console.log("Fehler: " + e.message);
}`,
      },
    },
    {
      id: "js-17",
      trackId: "js",
      title: "⚡ Mini-Projekt: Browser-Rechner",
      summary: "Baue deinen ersten echten Taschenrechner im Browser!",
      minutes: 30,
      xp: 120,
      contentMd: `# ⚡ Mini-Projekt: Browser-Rechner

> *"Die Handwerker-Quest! Du hast die Werkzeuge gelernt – jetzt baust du dein erstes echtes Werkzeug."*

Du baust einen funktionierenden Taschenrechner mit HTML, CSS und JavaScript!

### Was du brauchst:
- Ein **Display** das die Zahlen anzeigt
- **Zahlen-Buttons** (0-9)
- **Operator-Buttons** (+, -, ×, ÷)
- Eine **Equals-Taste** (=)

### Architektur:
\`\`\`js
let anzeige = "";

function drückeZahl(zahl) {
  anzeige += zahl;
  // Display aktualisieren
}

function drückeOperator(op) {
  anzeige += op;
}

function berechne() {
  try {
    const ergebnis = eval(anzeige.replace("×", "*").replace("÷", "/"));
    anzeige = String(ergebnis);
  } catch {
    anzeige = "Fehler";
  }
}

function lösche() {
  anzeige = "";
}
\`\`\`

Baue die HTML-Struktur mit einem Grid-Layout und verknüpfe alle Buttons!`,
      exercise: {
        language: "html",
        title: "Taschenrechner",
        instructionsMd: `Baue einen **vollständigen Taschenrechner** mit:
- Display-Bereich
- Zahlen 0–9
- Operatoren +, -, ×, ÷
- = Taste und C (Clear)`,
        starterCode: `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Mein Rechner ⚡</title>
  <style>
    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #1a1a2e; font-family: monospace; }
    .rechner { background: #16213e; border-radius: 20px; padding: 20px; box-shadow: 0 0 40px rgba(100,100,255,0.3); }
    #display { background: #0f3460; color: #e94560; font-size: 2em; text-align: right; padding: 15px; border-radius: 10px; margin-bottom: 15px; min-height: 60px; word-break: break-all; }
    .buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
    button { padding: 18px; font-size: 1.2em; border: none; border-radius: 10px; cursor: pointer; background: #0f3460; color: white; transition: transform 0.1s; }
    button:active { transform: scale(0.95); }
    .op { background: #533483; }
    .equals { background: #e94560; grid-column: span 2; }
    .clear { background: #e94560; }
  </style>
</head>
<body>
  <div class="rechner">
    <div id="display">0</div>
    <div class="buttons">
      <button class="clear" onclick="lösche()">C</button>
      <button onclick="drückeZeichen('%')">%</button>
      <button class="op" onclick="drückeZeichen('÷')">÷</button>
      <button class="op" onclick="drückeZeichen('×')">×</button>

      <button onclick="drückeZeichen('7')">7</button>
      <button onclick="drückeZeichen('8')">8</button>
      <button onclick="drückeZeichen('9')">9</button>
      <button class="op" onclick="drückeZeichen('-')">-</button>

      <button onclick="drückeZeichen('4')">4</button>
      <button onclick="drückeZeichen('5')">5</button>
      <button onclick="drückeZeichen('6')">6</button>
      <button class="op" onclick="drückeZeichen('+')">+</button>

      <button onclick="drückeZeichen('1')">1</button>
      <button onclick="drückeZeichen('2')">2</button>
      <button onclick="drückeZeichen('3')">3</button>
      <button class="equals" onclick="berechne()">=</button>

      <button onclick="drückeZeichen('0')" style="grid-column: span 2">0</button>
      <button onclick="drückeZeichen('.')">.</button>
    </div>
  </div>

  <script>
    let eingabe = "";

    function drückeZeichen(z) {
      // Dein Code hier
      document.getElementById("display").textContent = eingabe || "0";
    }

    function berechne() {
      try {
        const ausdruck = eingabe.replace(/×/g, "*").replace(/÷/g, "/");
        eingabe = String(eval(ausdruck));
        document.getElementById("display").textContent = eingabe;
      } catch {
        document.getElementById("display").textContent = "Fehler";
        eingabe = "";
      }
    }

    function lösche() {
      eingabe = "";
      document.getElementById("display").textContent = "0";
    }
  </script>
</body>
</html>`,
        check: { kind: "contains", needles: ["onclick", "eval", "display"] },
        hintMd: "In `drückeZeichen(z)`: `eingabe += z;` – damit werden Zeichen angehängt!",
        solutionCode: `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Mein Rechner ⚡</title>
  <style>
    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #1a1a2e; font-family: monospace; }
    .rechner { background: #16213e; border-radius: 20px; padding: 20px; box-shadow: 0 0 40px rgba(100,100,255,0.3); }
    #display { background: #0f3460; color: #e94560; font-size: 2em; text-align: right; padding: 15px; border-radius: 10px; margin-bottom: 15px; min-height: 60px; word-break: break-all; }
    .buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
    button { padding: 18px; font-size: 1.2em; border: none; border-radius: 10px; cursor: pointer; background: #0f3460; color: white; transition: transform 0.1s; }
    button:active { transform: scale(0.95); }
    .op { background: #533483; }
    .equals { background: #e94560; grid-column: span 2; }
    .clear { background: #e94560; }
  </style>
</head>
<body>
  <div class="rechner">
    <div id="display">0</div>
    <div class="buttons">
      <button class="clear" onclick="lösche()">C</button>
      <button onclick="drückeZeichen('%')">%</button>
      <button class="op" onclick="drückeZeichen('÷')">÷</button>
      <button class="op" onclick="drückeZeichen('×')">×</button>
      <button onclick="drückeZeichen('7')">7</button>
      <button onclick="drückeZeichen('8')">8</button>
      <button onclick="drückeZeichen('9')">9</button>
      <button class="op" onclick="drückeZeichen('-')">-</button>
      <button onclick="drückeZeichen('4')">4</button>
      <button onclick="drückeZeichen('5')">5</button>
      <button onclick="drückeZeichen('6')">6</button>
      <button class="op" onclick="drückeZeichen('+')">+</button>
      <button onclick="drückeZeichen('1')">1</button>
      <button onclick="drückeZeichen('2')">2</button>
      <button onclick="drückeZeichen('3')">3</button>
      <button class="equals" onclick="berechne()">=</button>
      <button onclick="drückeZeichen('0')" style="grid-column: span 2">0</button>
      <button onclick="drückeZeichen('.')">.</button>
    </div>
  </div>
  <script>
    let eingabe = "";
    function drückeZeichen(z) { eingabe += z; document.getElementById("display").textContent = eingabe; }
    function berechne() {
      try {
        const ausdruck = eingabe.replace(/×/g,"*").replace(/÷/g,"/");
        eingabe = String(eval(ausdruck));
        document.getElementById("display").textContent = eingabe;
      } catch { document.getElementById("display").textContent = "Fehler"; eingabe = ""; }
    }
    function lösche() { eingabe = ""; document.getElementById("display").textContent = "0"; }
  </script>
</body>
</html>`,
      },
    },
    {
      id: "js-18",
      trackId: "js",
      title: "Klassen – Blaupausen-Magie",
      summary: "Erstelle Blaupausen für Objekte und erschaffe ganze Armeen davon!",
      minutes: 20,
      xp: 75,
      contentMd: `# 🏗️ Klassen – Blaupausen-Magie

> *"Ein Architekt zeichnet eine Blaupause – und danach können hundert Häuser gebaut werden. Klassen sind Blaupausen für Objekte!"*

\`\`\`js
class Held {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.level = 1;
  }

  angreifen() {
    console.log(this.name + " greift an! ⚔️");
  }

  levelUp() {
    this.level++;
    this.hp += 20;
    console.log(this.name + " ist jetzt Level " + this.level + "!");
  }
}

// Erstelle Held-Objekte:
const luna = new Held("Luna", 100);
const max = new Held("Max", 80);

luna.angreifen(); // Luna greift an! ⚔️
luna.levelUp();   // Luna ist jetzt Level 2!
console.log(luna.hp); // 120
\`\`\`

### Getter & Setter:
\`\`\`js
class Drache {
  constructor(name) {
    this.name = name;
    this._hp = 500;
  }

  get status() {
    return this._hp > 100 ? "Stark 💪" : "Schwach 😰";
  }
}

const smaug = new Drache("Smaug");
console.log(smaug.status); // Stark 💪
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Tier-Klasse",
        instructionsMd: `Erstelle eine Klasse \`Tier\` mit:
- \`constructor(name, art, geraeusch)\`
- Methode \`sprechen()\` die ausgibt: **"[Name] sagt: [Geräusch]!"**

Erstelle dann 2 Tiere und lass sie sprechen!`,
        starterCode: `class Tier {
  constructor(name, art, geraeusch) {
    // Dein Code hier
  }

  sprechen() {
    // Dein Code hier
  }
}

const hund = new Tier("Bello", "Hund", "Wuff");
const katze = new Tier("Mimi", "Katze", "Miau");

hund.sprechen();
katze.sprechen();
`,
        check: { kind: "js_console_includes", expected: "Bello" },
        hintMd: "`this.name = name; // im constructor`\n`console.log(this.name + \" sagt: \" + this.geraeusch + \"!\"); // in sprechen()`",
        solutionCode: `class Tier {
  constructor(name, art, geraeusch) {
    this.name = name;
    this.art = art;
    this.geraeusch = geraeusch;
  }
  sprechen() {
    console.log(this.name + " sagt: " + this.geraeusch + "!");
  }
}
const hund = new Tier("Bello", "Hund", "Wuff");
const katze = new Tier("Mimi", "Katze", "Miau");
hund.sprechen();
katze.sprechen();`,
      },
    },
    {
      id: "js-19",
      trackId: "js",
      title: "Promises – Versprechen der Maschine",
      summary: "Lerne asynchronen Code zu schreiben – wenn Dinge Zeit brauchen!",
      minutes: 20,
      xp: 80,
      contentMd: `# 🤝 Promises – Versprechen der Maschine

> *"Der Bote verspricht die Nachricht zu überbringen – aber erst nach der Reise. Bis dahin kann das Königreich weiterarbeiten."*

Manchmal dauern Dinge – Daten laden, warten... Dafür gibt es **Promises**:

\`\`\`js
// Ein Promise erstellen:
const versprechen = new Promise((resolve, reject) => {
  // Simuliere eine Verzögerung:
  setTimeout(() => {
    resolve("Die Daten sind da! 📦");
  }, 1000);
});

// Auf das Ergebnis warten:
versprechen
  .then(daten => console.log(daten))
  .catch(fehler => console.log("Fehler: " + fehler));
\`\`\`

### Promise-Status:
- **pending** – läuft noch (Bote ist unterwegs)
- **fulfilled** – erfolgreich (Bote hat geliefert)
- **rejected** – Fehler (Bote ist gestolpert)

### Mehrere Promises gleichzeitig:
\`\`\`js
const p1 = Promise.resolve("Ergebnis 1");
const p2 = Promise.resolve("Ergebnis 2");
const p3 = Promise.resolve("Ergebnis 3");

Promise.all([p1, p2, p3]).then(ergebnisse => {
  console.log(ergebnisse); // ["Ergebnis 1", "Ergebnis 2", "Ergebnis 3"]
});
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Koch-Versprechen",
        instructionsMd: `Erstelle eine Funktion \`koche(gericht)\` die ein **Promise** zurückgibt.

Das Promise soll nach einer kurzen Wartezeit (mit setTimeout) das Gericht "servieren".

Nutze \`.then()\` um "Guten Appetit!" auszugeben!`,
        starterCode: `function koche(gericht) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍽️ " + gericht + " ist fertig!");
    }, 100); // 100ms warten
  });
}

koche("Pizza")
  .then(nachricht => {
    console.log(nachricht);
    console.log("Guten Appetit!");
  });
`,
        check: { kind: "js_console_includes", expected: "Pizza" },
        hintMd: "`resolve(\"🍽️ \" + gericht + \" ist fertig!\");`",
        solutionCode: `function koche(gericht) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve("🍽️ " + gericht + " ist fertig!"); }, 100);
  });
}
koche("Pizza").then(nachricht => { console.log(nachricht); console.log("Guten Appetit!"); });`,
      },
    },
    {
      id: "js-20",
      trackId: "js",
      title: "async/await – Sauberere Promises",
      summary: "Schreibe asynchronen Code so, als wäre er synchron – viel lesbarer!",
      minutes: 18,
      xp: 75,
      contentMd: `# ⚡ async/await – Die elegante Art

> *"Statt verwirrenden Kettenbriefen schreibt der weise Magier klare Anweisungen – eine nach der anderen."*

**async/await** ist syntaktischer Zucker für Promises – viel lesbarer:

\`\`\`js
// Mit .then():
ladeNutzer()
  .then(nutzer => ladeBestellungen(nutzer.id))
  .then(bestellungen => console.log(bestellungen));

// Mit async/await:
async function zeigeDaten() {
  const nutzer = await ladeNutzer();
  const bestellungen = await ladeBestellungen(nutzer.id);
  console.log(bestellungen);
}
\`\`\`

### Fehler mit try/catch:
\`\`\`js
async function ladeDaten() {
  try {
    const antwort = await fetch("https://api.example.com/daten");
    const json = await antwort.json();
    console.log(json);
  } catch (fehler) {
    console.log("Fehler beim Laden: " + fehler.message);
  }
}
\`\`\`

### Simulation ohne echtes Internet:
\`\`\`js
function simuliereFetch(url) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ status: "ok", url }), 200);
  });
}

async function main() {
  const daten = await simuliereFetch("https://meine-api.de");
  console.log("Antwort von: " + daten.url);
}

main();
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Abenteuer-Lader",
        instructionsMd: `Schreibe eine **async Funktion** \`starteAbenteuer()\` die:
1. 100ms wartet (mit einem Promise/setTimeout)
2. Dann "Das Abenteuer beginnt! 🗺️" ausgibt
3. Dann "Held betritt den Dungeon... ⚔️" ausgibt

Ruf die Funktion auf!`,
        starterCode: `function warte(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function starteAbenteuer() {
  // Warte 100ms:
  await warte(100);
  // Gib die Nachrichten aus:

}

starteAbenteuer();
`,
        check: { kind: "js_console_includes", expected: "Abenteuer" },
        hintMd: "`console.log(\"Das Abenteuer beginnt! 🗺️\");`",
        solutionCode: `function warte(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
async function starteAbenteuer() {
  await warte(100);
  console.log("Das Abenteuer beginnt! 🗺️");
  console.log("Held betritt den Dungeon... ⚔️");
}
starteAbenteuer();`,
      },
    },
    {
      id: "js-21",
      trackId: "js",
      title: "localStorage – Der Gedächtnisstein",
      summary: "Speichere Daten im Browser – sie bleiben auch nach dem Neuladen!",
      minutes: 18,
      xp: 70,
      contentMd: `# 🪨 localStorage – Der Gedächtnisstein

> *"Ein magischer Stein der alles behält – selbst wenn das Feuer erlischt und die Kerze neu entzündet wird."*

**localStorage** speichert Daten dauerhaft im Browser:

\`\`\`js
// Speichern:
localStorage.setItem("name", "Luna");
localStorage.setItem("punkte", "150");

// Lesen:
const name = localStorage.getItem("name"); // "Luna"
const punkte = localStorage.getItem("punkte"); // "150" (immer String!)

// Löschen:
localStorage.removeItem("punkte");

// Alles löschen:
localStorage.clear();
\`\`\`

### Objekte speichern (JSON):
\`\`\`js
const held = { name: "Luna", level: 5, xp: 350 };

// Speichern:
localStorage.setItem("held", JSON.stringify(held));

// Laden:
const gespeichert = localStorage.getItem("held");
const heldWiederhergestellt = JSON.parse(gespeichert);
console.log(heldWiederhergestellt.name); // "Luna"
\`\`\`

### Praxis – Besuchs-Zähler:
\`\`\`js
const besuche = parseInt(localStorage.getItem("besuche") || "0") + 1;
localStorage.setItem("besuche", String(besuche));
console.log("Du bist schon " + besuche + " mal hier!");
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Highscore speichern",
        instructionsMd: `Speichere einen **Highscore** in localStorage.

1. Lies den alten Highscore (oder 0 wenn keiner da ist)
2. Wenn der neue Wert höher ist: speichere ihn
3. Gib den aktuellen Highscore aus`,
        starterCode: `const neuerPunktestand = 1500;

// 1. Alten Highscore lesen (oder 0):
const alterHighscore = parseInt(localStorage.getItem("highscore") || "0");

// 2. Vergleichen und ggf. speichern:
if (neuerPunktestand > alterHighscore) {
  // Speichere neuerPunktestand:

  console.log("Neuer Highscore! 🏆");
}

// 3. Aktuellen Highscore ausgeben:
const aktuellerHighscore = parseInt(localStorage.getItem("highscore") || "0");
console.log("Highscore: " + aktuellerHighscore);
`,
        check: { kind: "js_console_includes", expected: "1500" },
        hintMd: "`localStorage.setItem(\"highscore\", String(neuerPunktestand));`",
        solutionCode: `const neuerPunktestand = 1500;
const alterHighscore = parseInt(localStorage.getItem("highscore") || "0");
if (neuerPunktestand > alterHighscore) {
  localStorage.setItem("highscore", String(neuerPunktestand));
  console.log("Neuer Highscore! 🏆");
}
const aktuellerHighscore = parseInt(localStorage.getItem("highscore") || "0");
console.log("Highscore: " + aktuellerHighscore);`,
      },
    },
    {
      id: "js-22",
      trackId: "js",
      title: "🏰 Projekt: To-Do App",
      summary: "Baue eine vollständige To-Do App mit localStorage – deine Aufgaben bleiben gespeichert!",
      minutes: 35,
      xp: 150,
      contentMd: `# 🏰 Projekt: To-Do App

> *"Das Königreich braucht einen Aufgaben-Verwalter! Deine Quests sollen nie vergessen werden."*

Du baust eine vollständige To-Do App mit:
- ✅ Aufgaben hinzufügen
- 🗑️ Aufgaben löschen
- ☑️ Aufgaben abhaken
- 💾 Speicherung in localStorage

### Daten-Struktur:
\`\`\`js
const aufgaben = [
  { id: 1, text: "HTML lernen", erledigt: true },
  { id: 2, text: "CSS üben", erledigt: false },
];
\`\`\`

### Speichern & Laden:
\`\`\`js
function speichern() {
  localStorage.setItem("todos", JSON.stringify(aufgaben));
}

function laden() {
  const gespeichert = localStorage.getItem("todos");
  return gespeichert ? JSON.parse(gespeichert) : [];
}
\`\`\`

Baue jetzt die komplette App!`,
      exercise: {
        language: "html",
        title: "To-Do App",
        instructionsMd: `Vervollständige die **To-Do App**!

Die Funktionen \`hinzufügen()\`, \`löschen(id)\` und \`umschalten(id)\` müssen implementiert werden.`,
        starterCode: `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Meine Quests 🏰</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: sans-serif; background: #1a1a2e; color: white; padding: 20px; }
    h1 { text-align: center; margin-bottom: 20px; color: #a78bfa; }
    .eingabe { display: flex; gap: 10px; margin-bottom: 20px; }
    input { flex: 1; padding: 12px; border-radius: 10px; border: none; background: #16213e; color: white; font-size: 1em; }
    button { padding: 12px 20px; border: none; border-radius: 10px; cursor: pointer; background: #7c3aed; color: white; font-weight: bold; }
    .aufgabe { display: flex; align-items: center; gap: 10px; background: #16213e; padding: 15px; border-radius: 10px; margin-bottom: 10px; }
    .aufgabe.erledigt span { text-decoration: line-through; opacity: 0.5; }
    .aufgabe span { flex: 1; }
    .lösch-btn { background: #e94560; padding: 8px 12px; }
    .check-btn { background: #10b981; padding: 8px 12px; }
  </style>
</head>
<body>
  <h1>⚔️ Meine Quests</h1>
  <div class="eingabe">
    <input id="eingabe" type="text" placeholder="Neue Quest eingeben..." onkeydown="if(event.key==='Enter') hinzufügen()">
    <button onclick="hinzufügen()">+ Quest</button>
  </div>
  <div id="liste"></div>

  <script>
    let aufgaben = JSON.parse(localStorage.getItem("quests") || "[]");
    let naechsteId = aufgaben.length > 0 ? Math.max(...aufgaben.map(a => a.id)) + 1 : 1;

    function speichern() {
      localStorage.setItem("quests", JSON.stringify(aufgaben));
    }

    function rendern() {
      const liste = document.getElementById("liste");
      liste.innerHTML = aufgaben.map(a => \`
        <div class="aufgabe \${a.erledigt ? 'erledigt' : ''}">
          <button class="check-btn" onclick="umschalten(\${a.id})">\${a.erledigt ? '↩️' : '✅'}</button>
          <span>\${a.text}</span>
          <button class="lösch-btn" onclick="löschen(\${a.id})">🗑️</button>
        </div>
      \`).join("");
    }

    function hinzufügen() {
      const eingabe = document.getElementById("eingabe");
      const text = eingabe.value.trim();
      if (!text) return;
      // Füge neue Aufgabe zum Array hinzu:
      aufgaben.push({ id: naechsteId++, text, erledigt: false });
      eingabe.value = "";
      speichern();
      rendern();
    }

    function löschen(id) {
      // Entferne die Aufgabe mit dieser id:
      aufgaben = aufgaben.filter(a => a.id !== id);
      speichern();
      rendern();
    }

    function umschalten(id) {
      // Schalte erledigt um:
      const aufgabe = aufgaben.find(a => a.id === id);
      if (aufgabe) aufgabe.erledigt = !aufgabe.erledigt;
      speichern();
      rendern();
    }

    rendern();
  </script>
</body>
</html>`,
        check: { kind: "contains", needles: ["hinzufügen", "löschen", "umschalten", "localStorage"] },
        hintMd: "Die Hauptlogik ist schon implementiert! Stelle sicher dass alle drei Funktionen aufgerufen werden können.",
      },
    },
    {
      id: "js-23",
      trackId: "js",
      title: "Rekursion – Spiegel im Spiegel",
      summary: "Eine Funktion die sich selbst aufruft – entdecke den Spiegel der Magie!",
      minutes: 22,
      xp: 80,
      contentMd: `# 🪞 Rekursion – Spiegel im Spiegel

> *"Was passiert wenn zwei Spiegel sich gegenseitig ansehen? Endlose Spiegelungen! Rekursion funktioniert ähnlich – aber mit Ausgang."*

Eine **rekursive Funktion** ruft sich selbst auf:

\`\`\`js
function countdown(n) {
  if (n <= 0) {
    console.log("🚀 LAUNCH!");
    return;
  }
  console.log(n);
  countdown(n - 1); // ruft sich selbst auf!
}

countdown(5);
// 5, 4, 3, 2, 1, 🚀 LAUNCH!
\`\`\`

**Wichtig:** Immer ein **Abbruchkriterium** (Base Case) definieren – sonst endlose Schleife!

### Fakultät berechnen:
\`\`\`js
function faktultaet(n) {
  if (n <= 1) return 1;        // Base Case
  return n * faktultaet(n - 1); // Rekursiver Aufruf
}

console.log(faktultaet(5)); // 5 × 4 × 3 × 2 × 1 = 120
\`\`\`

### Fibonacci-Zahlen:
\`\`\`js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(8)); // 21
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Summe mit Rekursion",
        instructionsMd: `Schreibe eine **rekursive Funktion** \`summe(n)\` die alle Zahlen von 1 bis n addiert.

Beispiel: \`summe(5)\` → 1+2+3+4+5 = **15**`,
        starterCode: `function summe(n) {
  // Base Case: was passiert wenn n <= 0?
  if (n <= 0) return 0;

  // Rekursiver Fall:
  return /* dein Code */;
}

console.log(summe(5));  // 15
console.log(summe(10)); // 55
console.log(summe(100)); // 5050
`,
        check: { kind: "js_console_includes", expected: "5050" },
        hintMd: "`return n + summe(n - 1);` – addiere n zur Summe der kleineren Zahlen",
        solutionCode: `function summe(n) {
  if (n <= 0) return 0;
  return n + summe(n - 1);
}
console.log(summe(5));
console.log(summe(10));
console.log(summe(100));`,
      },
    },
    {
      id: "js-24",
      trackId: "js",
      title: "Closures – Geheimnisvolle Kapseln",
      summary: "Funktionen die Daten einschließen und sich 'erinnern'!",
      minutes: 20,
      xp: 85,
      contentMd: `# 🔐 Closures – Geheimnisvolle Kapseln

> *"Ein verzauberter Beutel der Dinge speichert die du hineinlegst – und sie nie vergisst."*

Ein **Closure** ist eine Funktion die Zugriff auf Variablen ihrer äußeren Funktion behält:

\`\`\`js
function erstelleZähler() {
  let zähler = 0; // Diese Variable "lebt" im Closure

  return function() {
    zähler++;
    return zähler;
  };
}

const zähl = erstelleZähler();
console.log(zähl()); // 1
console.log(zähl()); // 2
console.log(zähl()); // 3
\`\`\`

### Warum sind Closures nützlich?

**Private Daten:**
\`\`\`js
function bankKonto(startBetrag) {
  let guthaben = startBetrag; // privat!

  return {
    einzahlen(betrag) { guthaben += betrag; },
    auszahlen(betrag) {
      if (betrag > guthaben) {
        console.log("Nicht genug Guthaben!");
        return;
      }
      guthaben -= betrag;
    },
    kontostand() { return guthaben; },
  };
}

const konto = bankKonto(100);
konto.einzahlen(50);
console.log(konto.kontostand()); // 150
konto.auszahlen(30);
console.log(konto.kontostand()); // 120
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Multiplizier-Fabrik",
        instructionsMd: `Erstelle eine Funktion \`multipliziereMit(faktor)\` die eine **neue Funktion** zurückgibt.

Die zurückgegebene Funktion soll eine Zahl mit dem Faktor multiplizieren.

Beispiel: \`const dreifach = multipliziereMit(3);\`
Dann: \`dreifach(5)\` → **15**`,
        starterCode: `function multipliziereMit(faktor) {
  return function(zahl) {
    // Gib das Ergebnis zurück:
    return /* dein Code */;
  };
}

const verdoppeln = multipliziereMit(2);
const verdreifachen = multipliziereMit(3);
const verzehnfachen = multipliziereMit(10);

console.log(verdoppeln(5));     // 10
console.log(verdreifachen(7));  // 21
console.log(verzehnfachen(4));  // 40
`,
        check: { kind: "js_console_includes", expected: "21" },
        hintMd: "`return zahl * faktor;`",
        solutionCode: `function multipliziereMit(faktor) {
  return function(zahl) { return zahl * faktor; };
}
const verdoppeln = multipliziereMit(2);
const verdreifachen = multipliziereMit(3);
const verzehnfachen = multipliziereMit(10);
console.log(verdoppeln(5));
console.log(verdreifachen(7));
console.log(verzehnfachen(4));`,
      },
    },
    {
      id: "js-25",
      trackId: "js",
      title: "🏆 Capstone: Memory-Spiel",
      summary: "Dein Meisterwerk! Baue ein vollständiges Memory-Spiel im Browser.",
      minutes: 45,
      xp: 200,
      contentMd: `# 🏆 Capstone: Memory-Spiel

> *"Du hast alle Zauber gelernt. Jetzt ist es Zeit das Meisterwerk zu erschaffen – ein Spiel das andere spielen können!"*

Du baust ein vollständiges **Memory-Spiel** mit:
- 🃏 16 Karten (8 Paare)
- 🔄 Karten umdrehen mit Animation
- ✅ Paare erkennen
- 🏆 Gewinn-Erkennung
- 📊 Versuchs-Zähler

### Spiellogik:
\`\`\`js
const symbole = ["🐉", "🦄", "⚔️", "🏆", "💎", "🔮", "🧙", "⚡"];
const karten = [...symbole, ...symbole]; // doppelt
// Mische die Karten (Fisher-Yates):
for (let i = karten.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [karten[i], karten[j]] = [karten[j], karten[i]];
}
\`\`\`

Setze CSS Transitions ein für das Umdrehen der Karten!`,
      exercise: {
        language: "html",
        title: "Memory-Spiel",
        instructionsMd: `Baue das **vollständige Memory-Spiel**!

Vervollständige die Funktion \`karteKlicken(index)\` mit der Spiellogik.`,
        starterCode: `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Memory Quest 🧠</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #1a1a2e; color: white; font-family: sans-serif; padding: 20px; text-align: center; }
    h1 { color: #a78bfa; margin-bottom: 10px; }
    #info { margin-bottom: 20px; color: #94a3b8; }
    #grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 400px; margin: 0 auto; }
    .karte { aspect-ratio: 1; border-radius: 12px; cursor: pointer; font-size: 2em; display: flex; align-items: center; justify-content: center; background: #16213e; border: 2px solid #334155; transition: transform 0.2s; user-select: none; }
    .karte:hover:not(.aufgedeckt):not(.gefunden) { transform: scale(1.05); }
    .karte.aufgedeckt { background: #1e3a5f; border-color: #7c3aed; }
    .karte.gefunden { background: #064e3b; border-color: #10b981; opacity: 0.7; cursor: default; }
    #neu-btn { margin-top: 20px; padding: 12px 30px; background: #7c3aed; border: none; border-radius: 10px; color: white; font-size: 1em; cursor: pointer; }
  </style>
</head>
<body>
  <h1>🧠 Memory Quest</h1>
  <div id="info">Versuche: <span id="versuche">0</span> | Gefunden: <span id="gefunden">0</span>/8</div>
  <div id="grid"></div>
  <button id="neu-btn" onclick="neuesSpiel()">🔄 Neues Spiel</button>

  <script>
    const SYMBOLE = ["🐉","🦄","⚔️","🏆","💎","🔮","🧙","⚡"];
    let karten = [];
    let aufgedeckt = [];
    let versuche = 0;
    let gefundenAnzahl = 0;
    let blockiert = false;

    function neuesSpiel() {
      const doppelt = [...SYMBOLE, ...SYMBOLE];
      // Mischen (Fisher-Yates):
      for (let i = doppelt.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [doppelt[i], doppelt[j]] = [doppelt[j], doppelt[i]];
      }
      karten = doppelt.map((symbol, i) => ({ id: i, symbol, aufgedeckt: false, gefunden: false }));
      aufgedeckt = [];
      versuche = 0;
      gefundenAnzahl = 0;
      blockiert = false;
      rendern();
    }

    function rendern() {
      document.getElementById("versuche").textContent = versuche;
      document.getElementById("gefunden").textContent = gefundenAnzahl;
      const grid = document.getElementById("grid");
      grid.innerHTML = karten.map((k, i) => \`
        <div class="karte \${k.aufgedeckt || k.gefunden ? 'aufgedeckt' : ''} \${k.gefunden ? 'gefunden' : ''}"
             onclick="karteKlicken(\${i})">
          \${k.aufgedeckt || k.gefunden ? k.symbol : "❓"}
        </div>
      \`).join("");
    }

    function karteKlicken(index) {
      const karte = karten[index];
      if (blockiert || karte.aufgedeckt || karte.gefunden) return;

      karte.aufgedeckt = true;
      aufgedeckt.push(index);
      rendern();

      if (aufgedeckt.length === 2) {
        versuche++;
        const [a, b] = aufgedeckt;
        if (karten[a].symbol === karten[b].symbol) {
          // Paar gefunden!
          karten[a].gefunden = true;
          karten[b].gefunden = true;
          karten[a].aufgedeckt = false;
          karten[b].aufgedeckt = false;
          gefundenAnzahl++;
          aufgedeckt = [];
          rendern();
          if (gefundenAnzahl === 8) {
            setTimeout(() => alert("🏆 Gewonnen in " + versuche + " Versuchen!"), 100);
          }
        } else {
          // Kein Paar – nach kurzer Zeit wieder umdrehen:
          blockiert = true;
          setTimeout(() => {
            karten[a].aufgedeckt = false;
            karten[b].aufgedeckt = false;
            aufgedeckt = [];
            blockiert = false;
            rendern();
          }, 800);
        }
      }
    }

    neuesSpiel();
  </script>
</body>
</html>`,
        check: { kind: "contains", needles: ["karteKlicken", "gefunden", "neuesSpiel"] },
        hintMd: "Die Spiellogik ist vollständig implementiert! Starte das Spiel und finde alle 8 Paare.",
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
    {
      id: "py-11",
      trackId: "python",
      title: "Tupel & Sets – Unveränderliche Schätze",
      summary: "Lerne zwei spezielle Sammlungen: Tupel (unveränderlich) und Sets (einmalig)!",
      minutes: 15,
      xp: 60,
      contentMd: `# 📦 Tupel & Sets

> *"Im Schatztresor des Königs gibt es versiegelte Kisten (Tupel) und magische Körbe ohne Duplikate (Sets)."*

## Tupel – versiegelte Listen
Tupel sind wie Listen, aber **unveränderlich**:
\`\`\`python
koordinaten = (10, 20)
farben = ("rot", "grün", "blau")

print(koordinaten[0])  # 10
# koordinaten[0] = 5  # Fehler! Nicht änderbar

# Tuple unpacking:
x, y = koordinaten
print(x, y)  # 10 20
\`\`\`

## Sets – Mengen ohne Duplikate
\`\`\`python
zahlen = {1, 2, 3, 2, 1, 3}
print(zahlen)  # {1, 2, 3} – keine Duplikate!

fruechte = {"Apfel", "Banane", "Apfel"}
fruechte.add("Mango")
print(fruechte)  # {'Apfel', 'Banane', 'Mango'}

# Mengenoperationen:
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a & b)  # Schnittmenge: {3, 4}
print(a | b)  # Vereinigung: {1, 2, 3, 4, 5, 6}
\`\`\``,
      exercise: {
        language: "python",
        title: "Einmalige Wörter",
        instructionsMd: `Erstelle aus der Wortliste ein **Set** um Duplikate zu entfernen.
Gib dann aus wie viele einmalige Wörter es gibt!`,
        starterCode: `woerter = ["Hallo", "Welt", "Hallo", "Python", "Welt", "Super", "Python", "Code"]

# Erstelle ein Set:
einmalig = set(woerter)

print("Einmalige Wörter:", len(einmalig))
print(einmalig)
`,
        check: { kind: "python_stdout_includes", expected: "4" },
        hintMd: "`einmalig = set(woerter)` – Sets entfernen Duplikate automatisch!",
        solutionCode: `woerter = ["Hallo", "Welt", "Hallo", "Python", "Welt", "Super", "Python", "Code"]
einmalig = set(woerter)
print("Einmalige Wörter:", len(einmalig))
print(einmalig)`,
      },
    },
    {
      id: "py-12",
      trackId: "python",
      title: "List Comprehensions – Magische Listenfabrik",
      summary: "Erstelle Listen in einer Zeile – die eleganteste Python-Magie!",
      minutes: 15,
      xp: 65,
      contentMd: `# ✨ List Comprehensions

> *"Statt stundenlang Steine zu schleppen, ruft der Magier eine einzige Beschwörung – und die Liste erscheint!"*

\`\`\`python
# Normal:
quadrate = []
for n in range(1, 6):
    quadrate.append(n * n)

# Mit List Comprehension:
quadrate = [n * n for n in range(1, 6)]
print(quadrate)  # [1, 4, 9, 16, 25]
\`\`\`

### Mit Bedingung (filter):
\`\`\`python
zahlen = range(1, 21)
gerade = [n for n in zahlen if n % 2 == 0]
print(gerade)  # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
\`\`\`

### Strings transformieren:
\`\`\`python
namen = ["anna", "ben", "clara"]
gross = [name.capitalize() for name in namen]
print(gross)  # ['Anna', 'Ben', 'Clara']

laengen = [len(name) for name in namen]
print(laengen)  # [4, 3, 5]
\`\`\``,
      exercise: {
        language: "python",
        title: "Celsius zu Fahrenheit",
        instructionsMd: `Konvertiere alle Celsius-Werte mit einer **List Comprehension** zu Fahrenheit.

Formel: \`F = C * 9/5 + 32\``,
        starterCode: `celsius = [0, 10, 20, 30, 37, 100]

# Schreibe eine List Comprehension:
fahrenheit = [/* dein Code */ for c in celsius]

print(fahrenheit)
`,
        check: { kind: "python_stdout_includes", expected: "98.6" },
        hintMd: "`fahrenheit = [c * 9/5 + 32 for c in celsius]`",
        solutionCode: `celsius = [0, 10, 20, 30, 37, 100]
fahrenheit = [c * 9/5 + 32 for c in celsius]
print(fahrenheit)`,
      },
    },
    {
      id: "py-13",
      trackId: "python",
      title: "Exception Handling – Der Fehler-Ritter",
      summary: "Fange Fehler ab und verhindere dass dein Programm abstürzt!",
      minutes: 15,
      xp: 65,
      contentMd: `# 🛡️ Exception Handling

> *"Ein weiser Ritter kennt die Fallen auf dem Weg und weiß wie er sicher hindurchkommt."*

\`\`\`python
try:
    zahl = int("keine_zahl")  # Fehler!
except ValueError:
    print("Das ist keine Zahl!")

# Mehrere Exceptions:
try:
    ergebnis = 10 / 0
except ZeroDivisionError:
    print("Division durch Null!")
except ValueError as e:
    print("Wert-Fehler:", e)
finally:
    print("Das läuft immer!")
\`\`\`

### Eigene Exceptions:
\`\`\`python
def pruefe_alter(alter):
    if alter < 0:
        raise ValueError("Alter kann nicht negativ sein!")
    if alter > 150:
        raise ValueError("Das ist unrealistisch!")
    return f"Alter {alter} ist gültig."

try:
    print(pruefe_alter(25))   # OK
    print(pruefe_alter(-5))   # Fehler!
except ValueError as e:
    print("Fehler:", e)
\`\`\``,
      exercise: {
        language: "python",
        title: "Sicherer Taschenrechner",
        instructionsMd: `Schreibe eine Funktion \`teile(a, b)\` die:
1. Bei b=0 einen \`ZeroDivisionError\` abfängt
2. Sonst das Ergebnis zurückgibt

Teste mit verschiedenen Eingaben!`,
        starterCode: `def teile(a, b):
    try:
        ergebnis = a / b
        return ergebnis
    except ZeroDivisionError:
        return "Fehler: Division durch Null!"

print(teile(10, 2))   # 5.0
print(teile(15, 3))   # 5.0
print(teile(7, 0))    # Fehlermeldung
`,
        check: { kind: "python_stdout_includes", expected: "5.0" },
        hintMd: "`except ZeroDivisionError: return \"Fehler: Division durch Null!\"`",
        solutionCode: `def teile(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Fehler: Division durch Null!"
print(teile(10, 2))
print(teile(15, 3))
print(teile(7, 0))`,
      },
    },
    {
      id: "py-14",
      trackId: "python",
      title: "Strings meistern – Schriftrollen-Magie",
      summary: "Lerne alle mächtigen String-Methoden um Text zu bearbeiten!",
      minutes: 18,
      xp: 65,
      contentMd: `# 📜 String-Meisterschaft

> *"Die alten Schriftrollen enthalten alle Geheimnisse – wenn man sie richtig lesen kann."*

\`\`\`python
text = "  Hallo, Python-Welt!  "

# Aufräumen:
print(text.strip())        # "Hallo, Python-Welt!"
print(text.lower())        # "  hallo, python-welt!  "
print(text.upper())        # "  HALLO, PYTHON-WELT!  "

# Suchen & Ersetzen:
print("Hallo Welt".replace("Welt", "Python"))  # "Hallo Python"
print("Hallo Welt".find("Welt"))                # 6
print("Hallo Welt".count("l"))                  # 3

# Aufteilen:
satz = "Apfel,Banane,Mango"
fruechte = satz.split(",")
print(fruechte)  # ['Apfel', 'Banane', 'Mango']

# Zusammenfügen:
print(" | ".join(fruechte))  # "Apfel | Banane | Mango"

# f-Strings:
name = "Luna"
level = 5
print(f"Held {name} ist auf Level {level}!")
\`\`\``,
      exercise: {
        language: "python",
        title: "Text-Analyse",
        instructionsMd: `Analysiere den Text und gib aus:
1. Anzahl der Wörter
2. Anzahl der Zeichen (ohne Leerzeichen)
3. Den Text in Großbuchstaben`,
        starterCode: `text = "Python ist eine tolle Programmiersprache fuer Abenteurer"

# 1. Wörter zählen:
woerter = text.split()
print("Wörter:", len(woerter))

# 2. Zeichen ohne Leerzeichen:
zeichen = len(text.replace(" ", ""))
print("Zeichen:", zeichen)

# 3. Großbuchstaben:
print(text.upper())
`,
        check: { kind: "python_stdout_includes", expected: "8" },
        hintMd: "`text.split()` teilt am Leerzeichen auf. `text.replace(\" \", \"\")` entfernt Leerzeichen.",
        solutionCode: `text = "Python ist eine tolle Programmiersprache fuer Abenteurer"
woerter = text.split()
print("Wörter:", len(woerter))
zeichen = len(text.replace(" ", ""))
print("Zeichen:", zeichen)
print(text.upper())`,
      },
    },
    {
      id: "py-15",
      trackId: "python",
      title: "⚡ Mini-Projekt: Taschenrechner",
      summary: "Baue einen Python-Taschenrechner mit Menü und Fehlerbehandlung!",
      minutes: 30,
      xp: 120,
      contentMd: `# ⚡ Mini-Projekt: Python-Taschenrechner

> *"Das erste große Werkzeug des Abenteurers: ein Rechner der nie abstürzt!"*

Baue einen Taschenrechner mit:
- Vier Grundrechenarten
- Fehlerbehandlung (Division durch Null, ungültige Eingaben)
- Schöner Ausgabe

\`\`\`python
def addiere(a, b): return a + b
def subtrahiere(a, b): return a - b
def multipliziere(a, b): return a * b
def dividiere(a, b):
    if b == 0:
        raise ZeroDivisionError("Nicht durch Null!")
    return a / b

def rechne(a, op, b):
    operationen = {
        '+': addiere,
        '-': subtrahiere,
        '*': multipliziere,
        '/': dividiere,
    }
    if op not in operationen:
        raise ValueError(f"Unbekannter Operator: {op}")
    return operationen[op](a, b)
\`\`\``,
      exercise: {
        language: "python",
        title: "Vollständiger Taschenrechner",
        instructionsMd: `Implementiere die Funktion \`rechne(a, op, b)\` und teste sie mit verschiedenen Berechnungen!`,
        starterCode: `def rechne(a, op, b):
    if op == '+':
        return a + b
    elif op == '-':
        return a - b
    elif op == '*':
        return a * b
    elif op == '/':
        if b == 0:
            return "Fehler: Division durch Null!"
        return a / b
    else:
        return f"Unbekannter Operator: {op}"

# Teste den Rechner:
print(rechne(10, '+', 5))   # 15
print(rechne(20, '-', 8))   # 12
print(rechne(6, '*', 7))    # 42
print(rechne(15, '/', 3))   # 5.0
print(rechne(10, '/', 0))   # Fehlermeldung
print(rechne(5, '%', 2))    # Unbekannter Operator
`,
        check: { kind: "python_stdout_includes", expected: "42" },
        hintMd: "Alle Funktionen sind schon implementiert! Starte den Code und schau dir die Ergebnisse an.",
        solutionCode: `def rechne(a, op, b):
    if op == '+': return a + b
    elif op == '-': return a - b
    elif op == '*': return a * b
    elif op == '/':
        if b == 0: return "Fehler: Division durch Null!"
        return a / b
    else: return f"Unbekannter Operator: {op}"
print(rechne(10, '+', 5))
print(rechne(20, '-', 8))
print(rechne(6, '*', 7))
print(rechne(15, '/', 3))
print(rechne(10, '/', 0))`,
      },
    },
    {
      id: "py-16",
      trackId: "python",
      title: "Klassen – Blaupausen erschaffen",
      summary: "Erstelle eigene Datentypen mit Klassen – der Kern der OOP!",
      minutes: 20,
      xp: 75,
      contentMd: `# 🏗️ Klassen in Python

> *"Ein Architekt zeichnet eine Blaupause. Danach können hundert Häuser entstehen. Klassen sind Blaupausen für Objekte!"*

\`\`\`python
class Held:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.level = 1

    def angreifen(self):
        schaden = self.level * 10
        print(f"{self.name} greift an und macht {schaden} Schaden! ⚔️")

    def level_up(self):
        self.level += 1
        self.hp += 20
        print(f"🎉 {self.name} ist jetzt Level {self.level}!")

    def __str__(self):
        return f"Held({self.name}, HP:{self.hp}, Lvl:{self.level})"

# Objekte erstellen:
luna = Held("Luna", 100)
max_held = Held("Max", 80)

luna.angreifen()
luna.level_up()
print(luna)
\`\`\``,
      exercise: {
        language: "python",
        title: "Auto-Klasse",
        instructionsMd: `Erstelle eine Klasse \`Auto\` mit:
- \`__init__(marke, ps)\`
- Methode \`beschleunigen()\` die "+10 km/h" ausgibt
- Methode \`infos()\` die Marke und PS ausgibt`,
        starterCode: `class Auto:
    def __init__(self, marke, ps):
        self.marke = marke
        self.ps = ps
        self.geschwindigkeit = 0

    def beschleunigen(self):
        self.geschwindigkeit += 10
        print(f"{self.marke} beschleunigt auf {self.geschwindigkeit} km/h! 🚗")

    def infos(self):
        print(f"Auto: {self.marke}, {self.ps} PS")

mein_auto = Auto("BMW", 200)
mein_auto.infos()
mein_auto.beschleunigen()
mein_auto.beschleunigen()
`,
        check: { kind: "python_stdout_includes", expected: "BMW" },
        hintMd: "`self.marke = marke` im `__init__` speichert den Wert am Objekt.",
        solutionCode: `class Auto:
    def __init__(self, marke, ps):
        self.marke = marke
        self.ps = ps
        self.geschwindigkeit = 0
    def beschleunigen(self):
        self.geschwindigkeit += 10
        print(f"{self.marke} beschleunigt auf {self.geschwindigkeit} km/h! 🚗")
    def infos(self):
        print(f"Auto: {self.marke}, {self.ps} PS")
mein_auto = Auto("BMW", 200)
mein_auto.infos()
mein_auto.beschleunigen()
mein_auto.beschleunigen()`,
      },
    },
    {
      id: "py-17",
      trackId: "python",
      title: "Vererbung – Familien-Magie",
      summary: "Erstelle spezialisierte Klassen die von anderen erben!",
      minutes: 20,
      xp: 80,
      contentMd: `# 👨‍👩‍👧 Vererbung

> *"Der Sohn des Magiers erbt alle Zauberkräfte des Vaters – und entwickelt noch zusätzliche Fähigkeiten!"*

\`\`\`python
class Tier:
    def __init__(self, name):
        self.name = name

    def atmen(self):
        print(f"{self.name} atmet.")

    def sprechen(self):
        print(f"{self.name} macht ein Geräusch.")

class Hund(Tier):  # Hund erbt von Tier
    def sprechen(self):  # Überschreibt die Eltern-Methode
        print(f"{self.name} sagt: Wuff! 🐕")

    def apportieren(self):
        print(f"{self.name} bringt den Ball! 🎾")

class Katze(Tier):
    def sprechen(self):
        print(f"{self.name} sagt: Miau! 🐈")

bello = Hund("Bello")
mimi = Katze("Mimi")

bello.atmen()       # von Tier geerbt
bello.sprechen()    # überschrieben: Wuff!
bello.apportieren() # nur für Hunde
mimi.sprechen()     # überschrieben: Miau!
\`\`\`

### super() – Eltern-Methode aufrufen:
\`\`\`python
class Zauberer(Held):
    def __init__(self, name, hp, mana):
        super().__init__(name, hp)  # Eltern-__init__ aufrufen
        self.mana = mana
\`\`\``,
      exercise: {
        language: "python",
        title: "Fahrzeug-Hierarchie",
        instructionsMd: `Erstelle:
- Klasse \`Fahrzeug\` mit \`name\` und Methode \`fahren()\`
- Klasse \`Auto(Fahrzeug)\` mit Methode \`hupen()\`
- Klasse \`Motorrad(Fahrzeug)\` mit Methode \`wheelie()\`

Erstelle je ein Objekt und teste alle Methoden!`,
        starterCode: `class Fahrzeug:
    def __init__(self, name):
        self.name = name

    def fahren(self):
        print(f"{self.name} fährt! 🛣️")

class Auto(Fahrzeug):
    def hupen(self):
        print(f"{self.name}: Huuuup! 📯")

class Motorrad(Fahrzeug):
    def wheelie(self):
        print(f"{self.name} macht einen Wheelie! 🏍️")

mein_auto = Auto("Tesla")
mein_bike = Motorrad("Harley")

mein_auto.fahren()
mein_auto.hupen()
mein_bike.fahren()
mein_bike.wheelie()
`,
        check: { kind: "python_stdout_includes", expected: "Tesla" },
        hintMd: "`class Auto(Fahrzeug):` – so erbt Auto alle Methoden von Fahrzeug!",
        solutionCode: `class Fahrzeug:
    def __init__(self, name):
        self.name = name
    def fahren(self):
        print(f"{self.name} fährt! 🛣️")
class Auto(Fahrzeug):
    def hupen(self):
        print(f"{self.name}: Huuuup! 📯")
class Motorrad(Fahrzeug):
    def wheelie(self):
        print(f"{self.name} macht einen Wheelie! 🏍️")
mein_auto = Auto("Tesla")
mein_bike = Motorrad("Harley")
mein_auto.fahren()
mein_auto.hupen()
mein_bike.fahren()
mein_bike.wheelie()`,
      },
    },
    {
      id: "py-18",
      trackId: "python",
      title: "Module & Bibliotheken",
      summary: "Nutze mächtige Bibliotheken statt alles selbst zu schreiben!",
      minutes: 18,
      xp: 70,
      contentMd: `# 📚 Module & Bibliotheken

> *"Ein kluger Abenteurer baut das Rad nicht neu. Er geht in die magische Bibliothek und leiht sich das Wissen!"*

Python kommt mit vielen eingebauten Modulen:

\`\`\`python
import math
print(math.pi)           # 3.14159...
print(math.sqrt(144))    # 12.0
print(math.floor(3.7))   # 3
print(math.ceil(3.2))    # 4

import random
print(random.randint(1, 6))          # Würfeln!
print(random.choice(["rot", "blau", "grün"]))  # Zufällige Auswahl
liste = [1, 2, 3, 4, 5]
random.shuffle(liste)
print(liste)             # Gemischt

import datetime
heute = datetime.date.today()
print(heute)             # 2026-03-26
\`\`\`

### Nur bestimmte Teile importieren:
\`\`\`python
from math import pi, sqrt
from random import randint, choice

print(pi)           # kein math. nötig!
print(randint(1,6)) # direkt nutzbar
\`\`\``,
      exercise: {
        language: "python",
        title: "Würfel-Simulator",
        instructionsMd: `Simuliere 10 Würfelwürfe mit dem \`random\` Modul.

Gib jeden Würfelwurf aus und am Ende den **Durchschnitt**!`,
        starterCode: `import random

wuerfe = []
for i in range(10):
    wurf = random.randint(1, 6)
    wuerfe.append(wurf)
    print(f"Wurf {i+1}: {wurf}")

durchschnitt = sum(wuerfe) / len(wuerfe)
print(f"Durchschnitt: {durchschnitt:.1f}")
`,
        check: { kind: "python_stdout_includes", expected: "Wurf 10" },
        hintMd: "`random.randint(1, 6)` würfelt eine Zahl zwischen 1 und 6!",
        solutionCode: `import random
wuerfe = []
for i in range(10):
    wurf = random.randint(1, 6)
    wuerfe.append(wurf)
    print(f"Wurf {i+1}: {wurf}")
durchschnitt = sum(wuerfe) / len(wuerfe)
print(f"Durchschnitt: {durchschnitt:.1f}")`,
      },
    },
    {
      id: "py-19",
      trackId: "python",
      title: "Lambda, map & filter",
      summary: "Kompakte Funktionen und funktionale Programmierung in Python!",
      minutes: 18,
      xp: 75,
      contentMd: `# ⚡ Lambda, map & filter

> *"Der Kurzform-Zauberer braucht keine langen Beschwörungen – ein einziges Wort genügt."*

## Lambda – Mini-Funktionen:
\`\`\`python
# Normal:
def verdoppeln(x):
    return x * 2

# Lambda (gleich, aber kürzer):
verdoppeln = lambda x: x * 2
print(verdoppeln(5))  # 10

quadrat = lambda x: x ** 2
addiere = lambda x, y: x + y
print(quadrat(4))     # 16
print(addiere(3, 7))  # 10
\`\`\`

## map() – auf alle anwenden:
\`\`\`python
zahlen = [1, 2, 3, 4, 5]
quadrate = list(map(lambda x: x**2, zahlen))
print(quadrate)  # [1, 4, 9, 16, 25]
\`\`\`

## filter() – filtern:
\`\`\`python
zahlen = range(1, 21)
gerade = list(filter(lambda x: x % 2 == 0, zahlen))
print(gerade)  # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
\`\`\`

## sorted() mit Lambda:
\`\`\`python
personen = [{"name": "Anna", "alter": 25}, {"name": "Ben", "alter": 18}]
sortiert = sorted(personen, key=lambda p: p["alter"])
print(sortiert[0]["name"])  # Ben (jüngster)
\`\`\``,
      exercise: {
        language: "python",
        title: "Lambda-Magie",
        instructionsMd: `Nutze **Lambda + filter** um alle Zahlen über 100 aus der Liste zu filtern.

Dann **map** um sie zu verdreifachen. Gib das Ergebnis aus!`,
        starterCode: `zahlen = [45, 120, 67, 200, 88, 150, 30, 175, 99, 300]

# Filtere Zahlen über 100:
ueber_100 = list(filter(lambda x: x > 100, zahlen))

# Verdreifache sie:
dreifach = list(map(lambda x: x * 3, ueber_100))

print("Über 100:", ueber_100)
print("Dreifach:", dreifach)
`,
        check: { kind: "python_stdout_includes", expected: "900" },
        hintMd: "`filter(lambda x: x > 100, zahlen)` – filtert Werte über 100",
        solutionCode: `zahlen = [45, 120, 67, 200, 88, 150, 30, 175, 99, 300]
ueber_100 = list(filter(lambda x: x > 100, zahlen))
dreifach = list(map(lambda x: x * 3, ueber_100))
print("Über 100:", ueber_100)
print("Dreifach:", dreifach)`,
      },
    },
    {
      id: "py-20",
      trackId: "python",
      title: "🤖 Projekt: Chatbot",
      summary: "Baue deinen ersten Chatbot – der erste Schritt Richtung KI!",
      minutes: 35,
      xp: 150,
      contentMd: `# 🤖 Projekt: Chatbot

> *"Die Maschine erwacht zum Leben! Du erschaffst eine KI die mit dir spricht."*

Du baust einen Chatbot mit Dictionaries und string-Matching:

\`\`\`python
antworten = {
    "hallo": "Hey! Wie kann ich dir helfen? 😊",
    "wie geht es": "Mir geht es super, ich bin eine KI! 🤖",
    "was bist du": "Ich bin ein Python-Chatbot, den du gebaut hast!",
    "tschüss": "Auf Wiedersehen! 👋",
}

def chatbot(eingabe):
    eingabe_lower = eingabe.lower()
    for schluessel, antwort in antworten.items():
        if schluessel in eingabe_lower:
            return antwort
    return "Hmm, das verstehe ich noch nicht. Versuch es anders! 🤔"
\`\`\``,
      exercise: {
        language: "python",
        title: "Mein erster Chatbot",
        instructionsMd: `Erweitere den Chatbot um mindestens **5 eigene Antworten**!

Teste ihn mit verschiedenen Eingaben.`,
        starterCode: `antworten = {
    "hallo": "Hey! Schön dich zu sehen! 😊",
    "wie geht": "Mir geht es super, ich bin dein Python-Bot! 🤖",
    "was kannst du": "Ich kann Fragen beantworten und plaudern!",
    "witz": "Warum können Programmierer nicht schlafen? Weil sie zu viele Bugs haben! 🐛😄",
    "danke": "Bitte sehr! Immer gerne! 🙏",
    "wetter": "Ich schaue nicht aus dem Fenster... ich bin ein Bot! ☁️",
    "python": "Python ist die beste Programmiersprache – du lernst sie ja gerade!",
    "tschüss": "Auf Wiedersehen! Bis zum nächsten Mal! 👋",
}

def chatbot(eingabe):
    eingabe_lower = eingabe.lower()
    for schluessel, antwort in antworten.items():
        if schluessel in eingabe_lower:
            return antwort
    return "Das verstehe ich leider noch nicht. Versuch etwas anderes! 🤔"

# Teste den Chatbot:
fragen = ["Hallo!", "Was kannst du?", "Erzähl mir einen Witz", "Wie geht es dir?", "Tschüss!"]
for frage in fragen:
    print(f"Du: {frage}")
    print(f"Bot: {chatbot(frage)}")
    print()
`,
        check: { kind: "python_stdout_includes", expected: "Bot:" },
        hintMd: "Füge einfach neue Einträge zum `antworten`-Dictionary hinzu!",
        solutionCode: `antworten = {
    "hallo": "Hey! Schön dich zu sehen! 😊",
    "wie geht": "Mir geht es super! 🤖",
    "was kannst du": "Ich kann Fragen beantworten!",
    "witz": "Warum können Programmierer nicht schlafen? Zu viele Bugs! 🐛",
    "danke": "Bitte sehr! 🙏",
    "tschüss": "Auf Wiedersehen! 👋",
}
def chatbot(eingabe):
    for k, v in antworten.items():
        if k in eingabe.lower(): return v
    return "Das verstehe ich noch nicht. 🤔"
for frage in ["Hallo!", "Was kannst du?", "Danke!", "Tschüss!"]:
    print(f"Du: {frage}")
    print(f"Bot: {chatbot(frage)}")`,
      },
    },
    {
      id: "py-21",
      trackId: "python",
      title: "Rekursion – Der Spiegel-Zauber",
      summary: "Funktionen die sich selbst aufrufen – mächtig und elegant!",
      minutes: 20,
      xp: 80,
      contentMd: `# 🪞 Rekursion

> *"Der Zauberspiegel zeigt sich selbst – immer kleiner werdend, bis er zur kleinsten Wahrheit kommt."*

\`\`\`python
def countdown(n):
    if n <= 0:           # Base Case
        print("🚀 Start!")
        return
    print(n)
    countdown(n - 1)     # Rekursiver Aufruf

countdown(5)  # 5, 4, 3, 2, 1, 🚀 Start!
\`\`\`

### Fakultät:
\`\`\`python
def fakultaet(n):
    if n <= 1:              # Base Case
        return 1
    return n * fakultaet(n - 1)

print(fakultaet(5))  # 120
print(fakultaet(10)) # 3628800
\`\`\`

### Fibonacci:
\`\`\`python
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

for i in range(10):
    print(fib(i), end=" ")
# 0 1 1 2 3 5 8 13 21 34
\`\`\``,
      exercise: {
        language: "python",
        title: "Potenz rekursiv",
        instructionsMd: `Berechne \`a hoch b\` (**a^b**) **rekursiv** ohne den \`**\` Operator.

Tipp: \`a^b = a × a^(b-1)\` und \`a^0 = 1\``,
        starterCode: `def potenz(a, b):
    # Base Case:
    if b == 0:
        return 1
    # Rekursiver Fall:
    return a * potenz(a, b - 1)

print(potenz(2, 10))  # 1024
print(potenz(3, 4))   # 81
print(potenz(5, 3))   # 125
`,
        check: { kind: "python_stdout_includes", expected: "1024" },
        hintMd: "`return a * potenz(a, b - 1)` – multipliziere a mit der kleineren Potenz",
        solutionCode: `def potenz(a, b):
    if b == 0: return 1
    return a * potenz(a, b - 1)
print(potenz(2, 10))
print(potenz(3, 4))
print(potenz(5, 3))`,
      },
    },
    {
      id: "py-22",
      trackId: "python",
      title: "Dictionaries meistern",
      summary: "Fortgeschrittene Dictionary-Techniken für mächtige Datenstrukturen!",
      minutes: 18,
      xp: 70,
      contentMd: `# 📖 Dictionaries meistern

> *"Das Zauberbuch kennt zu jedem Schlüssel die Antwort – und es lässt sich auf viele Arten befragen."*

\`\`\`python
# Dictionary Comprehension:
quadrate = {n: n**2 for n in range(1, 6)}
print(quadrate)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Nur gerade Quadrate:
gerade_q = {n: n**2 for n in range(1, 11) if n % 2 == 0}
print(gerade_q)  # {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}
\`\`\`

### Iterieren:
\`\`\`python
noten = {"Anna": 90, "Ben": 75, "Clara": 88}

for name, note in noten.items():
    status = "Bestanden ✅" if note >= 60 else "Nicht bestanden ❌"
    print(f"{name}: {note} – {status}")

# Bestes Ergebnis:
bester = max(noten, key=lambda k: noten[k])
print(f"Bester: {bester} mit {noten[bester]}")
\`\`\`

### get() – sicherer Zugriff:
\`\`\`python
config = {"farbe": "blau", "groesse": 42}
print(config.get("farbe", "rot"))    # "blau"
print(config.get("gewicht", "???"))  # "???" (kein Fehler!)
\`\`\``,
      exercise: {
        language: "python",
        title: "Wort-Häufigkeit",
        instructionsMd: `Zähle wie oft jedes Wort in dem Text vorkommt.
Nutze ein Dictionary und gib das Ergebnis sortiert aus!`,
        starterCode: `text = "der die das der die der eine ein eine der das"
woerter = text.split()

haeufigkeit = {}
for wort in woerter:
    haeufigkeit[wort] = haeufigkeit.get(wort, 0) + 1

# Sortiert nach Häufigkeit ausgeben:
sortiert = sorted(haeufigkeit.items(), key=lambda x: x[1], reverse=True)
for wort, anzahl in sortiert:
    print(f"{wort}: {anzahl}x")
`,
        check: { kind: "python_stdout_includes", expected: "4x" },
        hintMd: "`haeufigkeit.get(wort, 0) + 1` – erhöhe den Zähler (oder starte bei 0)",
        solutionCode: `text = "der die das der die der eine ein eine der das"
woerter = text.split()
haeufigkeit = {}
for wort in woerter:
    haeufigkeit[wort] = haeufigkeit.get(wort, 0) + 1
sortiert = sorted(haeufigkeit.items(), key=lambda x: x[1], reverse=True)
for wort, anzahl in sortiert:
    print(f"{wort}: {anzahl}x")`,
      },
    },
    {
      id: "py-23",
      trackId: "python",
      title: "Dateien & Daten",
      summary: "Simuliere das Lesen und Schreiben von Daten – wie eine echte Datenbank!",
      minutes: 18,
      xp: 70,
      contentMd: `# 💾 Dateien & Daten

> *"Der Schreiber bewahrt das Wissen – in Büchern, die auch nach seinem Tod noch gelesen werden."*

Python kann Dateien lesen und schreiben. In unserem Sandbox simulieren wir das mit Strings:

\`\`\`python
import json

# Daten als JSON speichern (simuliert):
spielstand = {
    "name": "Luna",
    "level": 7,
    "xp": 1450,
    "items": ["Schwert", "Schild", "Trank"]
}

# In JSON-String umwandeln:
json_text = json.dumps(spielstand, indent=2)
print("Gespeichert:")
print(json_text)

# Wieder einlesen:
geladen = json.loads(json_text)
print(f"\\nSpieler: {geladen['name']}, Level {geladen['level']}")
print(f"Items: {', '.join(geladen['items'])}")
\`\`\`

### CSV-Daten verarbeiten:
\`\`\`python
csv_daten = """Name,Alter,Stadt
Anna,25,Berlin
Ben,18,Hamburg
Clara,30,München"""

zeilen = csv_daten.strip().split("\\n")
kopfzeile = zeilen[0].split(",")
for zeile in zeilen[1:]:
    werte = zeile.split(",")
    person = dict(zip(kopfzeile, werte))
    print(f"{person['Name']} aus {person['Stadt']}")
\`\`\``,
      exercise: {
        language: "python",
        title: "JSON Spielstand",
        instructionsMd: `Erstelle einen Spielstand als Dictionary, wandle ihn in JSON um und lies ihn wieder ein.
Gib dann alle Daten schön formatiert aus!`,
        starterCode: `import json

spielstand = {
    "held": "Merlin",
    "level": 5,
    "xp": 750,
    "quests_abgeschlossen": 12,
    "gold": 330
}

# In JSON umwandeln:
gespeichert = json.dumps(spielstand)

# Wieder einlesen:
geladen = json.loads(gespeichert)

print("=== Spielstand ===")
print(f"Held: {geladen['held']}")
print(f"Level: {geladen['level']}")
print(f"XP: {geladen['xp']}")
print(f"Gold: {geladen['gold']} 💰")
`,
        check: { kind: "python_stdout_includes", expected: "Merlin" },
        hintMd: "`json.dumps(daten)` → String | `json.loads(string)` → Dictionary",
        solutionCode: `import json
spielstand = {"held": "Merlin", "level": 5, "xp": 750, "quests_abgeschlossen": 12, "gold": 330}
gespeichert = json.dumps(spielstand)
geladen = json.loads(gespeichert)
print("=== Spielstand ===")
print(f"Held: {geladen['held']}")
print(f"Level: {geladen['level']}")
print(f"XP: {geladen['xp']}")
print(f"Gold: {geladen['gold']} 💰")`,
      },
    },
    {
      id: "py-24",
      trackId: "python",
      title: "Random – Die Würfel-Magie",
      summary: "Erstelle Zufallszahlen, mische Listen und simuliere Spiele!",
      minutes: 15,
      xp: 65,
      contentMd: `# 🎲 Random – Würfel-Magie

> *"Die Götter des Zufalls entscheiden – aber du lernst ihre Sprache!"*

\`\`\`python
import random

# Zufallszahlen:
print(random.randint(1, 6))        # Würfel (1-6)
print(random.randint(1, 100))      # 1-100
print(random.random())             # 0.0 bis 1.0

# Zufällige Auswahl:
farben = ["rot", "grün", "blau", "gelb"]
print(random.choice(farben))       # z.B. "blau"
print(random.choices(farben, k=3)) # 3 Zufällige

# Mischen:
karten = list(range(1, 53))
random.shuffle(karten)
print(karten[:5])  # Erste 5 nach dem Mischen

# Stichprobe (ohne Wiederholung):
print(random.sample(farben, 2))    # 2 verschiedene
\`\`\``,
      exercise: {
        language: "python",
        title: "Lotto-Generator",
        instructionsMd: `Generiere einen **Lotto-Schein**: 6 verschiedene Zahlen zwischen 1 und 49!

Gib sie **sortiert** aus.`,
        starterCode: `import random

# 6 verschiedene Zahlen 1-49:
lotto = random.sample(range(1, 50), 6)
lotto.sort()

print("🎰 Dein Lotto-Schein:")
print(lotto)
print("Bonuszahl:", random.randint(1, 49))
`,
        check: { kind: "python_stdout_includes", expected: "Lotto" },
        hintMd: "`random.sample(range(1, 50), 6)` – 6 einmalige Zahlen aus 1-49",
        solutionCode: `import random
lotto = random.sample(range(1, 50), 6)
lotto.sort()
print("🎰 Dein Lotto-Schein:")
print(lotto)
print("Bonuszahl:", random.randint(1, 49))`,
      },
    },
    {
      id: "py-25",
      trackId: "python",
      title: "🏆 Capstone: Passwort-Generator",
      summary: "Dein Meisterwerk! Baue einen sicheren Passwort-Generator.",
      minutes: 40,
      xp: 200,
      contentMd: `# 🏆 Capstone: Passwort-Generator

> *"Du hast alle Python-Kräfte gemeistert. Nun erschaffst du ein Werkzeug das echten Nutzen hat!"*

Baue einen Passwort-Generator der:
- Buchstaben, Zahlen und Sonderzeichen mischt
- Verschiedene Stärken erzeugt
- Die Sicherheit bewertet

\`\`\`python
import random
import string

def passwort_erstellen(laenge, gross=True, zahlen=True, sonderzeichen=True):
    zeichen = string.ascii_lowercase
    if gross: zeichen += string.ascii_uppercase
    if zahlen: zeichen += string.digits
    if sonderzeichen: zeichen += "!@#$%&*?"

    passwort = [random.choice(zeichen) for _ in range(laenge)]
    random.shuffle(passwort)
    return "".join(passwort)

def bewerte_staerke(passwort):
    punkte = 0
    if len(passwort) >= 8: punkte += 1
    if len(passwort) >= 12: punkte += 1
    if any(c.isupper() for c in passwort): punkte += 1
    if any(c.isdigit() for c in passwort): punkte += 1
    if any(c in "!@#$%&*?" for c in passwort): punkte += 1

    if punkte <= 2: return "Schwach ❌"
    if punkte <= 3: return "Mittel ⚠️"
    return "Stark ✅"
\`\`\``,
      exercise: {
        language: "python",
        title: "Passwort-Generator",
        instructionsMd: `Nutze die Funktionen um verschiedene Passwörter zu generieren und zu bewerten!`,
        starterCode: `import random
import string

def passwort_erstellen(laenge, gross=True, zahlen=True, sonderzeichen=True):
    zeichen = string.ascii_lowercase
    if gross: zeichen += string.ascii_uppercase
    if zahlen: zeichen += string.digits
    if sonderzeichen: zeichen += "!@#$%&*?"
    passwort = [random.choice(zeichen) for _ in range(laenge)]
    random.shuffle(passwort)
    return "".join(passwort)

def bewerte_staerke(passwort):
    punkte = 0
    if len(passwort) >= 8: punkte += 1
    if len(passwort) >= 12: punkte += 1
    if any(c.isupper() for c in passwort): punkte += 1
    if any(c.isdigit() for c in passwort): punkte += 1
    if any(c in "!@#$%&*?" for c in passwort): punkte += 1
    if punkte <= 2: return "Schwach ❌"
    if punkte <= 3: return "Mittel ⚠️"
    return "Stark ✅"

print("=== Passwort-Generator 🔐 ===")
for laenge in [8, 12, 20]:
    pw = passwort_erstellen(laenge)
    staerke = bewerte_staerke(pw)
    print(f"Länge {laenge:2d}: {pw} → {staerke}")
`,
        check: { kind: "python_stdout_includes", expected: "Stark" },
        hintMd: "Alle Funktionen sind implementiert! Führe den Code aus und schau dir die Passwörter an.",
        solutionCode: `import random, string
def passwort_erstellen(laenge, gross=True, zahlen=True, sonderzeichen=True):
    z = string.ascii_lowercase
    if gross: z += string.ascii_uppercase
    if zahlen: z += string.digits
    if sonderzeichen: z += "!@#$%&*?"
    pw = [random.choice(z) for _ in range(laenge)]
    random.shuffle(pw)
    return "".join(pw)
def bewerte_staerke(pw):
    p = sum([len(pw)>=8, len(pw)>=12, any(c.isupper() for c in pw), any(c.isdigit() for c in pw), any(c in "!@#$%&*?" for c in pw)])
    return "Schwach ❌" if p<=2 else "Mittel ⚠️" if p<=3 else "Stark ✅"
for l in [8, 12, 20]:
    pw = passwort_erstellen(l)
    print(f"Länge {l:2d}: {pw} → {bewerte_staerke(pw)}")`,
      },
    },
  ],
};

const KI: Track = {
  id: "ki",
  title: "KI-Abenteuer",
  emoji: "🤖",
  description: "Lerne wie du ChatGPT, Gemini und andere KIs richtig nutzt – werde zum Prompt-Meister!",
  color: "violet",
  recommendedAge: "ab 9 Jahren",
  lessons: [
    {
      id: "ki-01",
      trackId: "ki",
      title: "Was ist eine KI?",
      summary: "Entdecke was KI wirklich ist – kein Roboter, aber trotzdem faszinierend!",
      minutes: 10,
      xp: 40,
      contentMd: `# 🤖 Was ist eine KI?

> *"Tief im Inneren des Internets schläft ein riesiges Gehirn aus Zahlen. Es hat Millionen von Büchern gelesen – und du kannst mit ihm sprechen!"*

## Was ist Künstliche Intelligenz?

Eine **KI (Künstliche Intelligenz)** ist ein Computerprogramm das:
- Texte lesen und schreiben kann
- Fragen beantworten kann
- Bilder erstellen kann
- Beim Lernen helfen kann

## Bekannte KIs:
| KI | Gemacht von | Was sie kann |
|----|-------------|--------------|
| **ChatGPT** | OpenAI | Text, Code, Bilder |
| **Gemini** | Google | Text, Bilder, Suche |
| **Claude** | Anthropic | Text, Analyse, Code |
| **Copilot** | Microsoft | Text, Bilder, Office |

## Was eine KI NICHT ist:
- ❌ Ein Roboter mit Körper
- ❌ Allwissend (sie macht Fehler!)
- ❌ Bewusst oder lebendig
- ❌ Immer richtig

## Was eine KI IST:
- ✅ Sehr hilfreich als Assistent
- ✅ Gut im Erklären
- ✅ Kreativ beim Schreiben
- ✅ Schnell beim Zusammenfassen`,
      exercise: {
        language: "javascript",
        title: "KI-Quiz",
        instructionsMd: `Beantworte die Frage: **Was ist eine KI?**

Schreibe deinen Prompt (deine Frage an eine KI) als JavaScript-String in der Variable \`meinPrompt\`.

Ein guter Prompt enthält das Wort "KI" oder "Künstliche Intelligenz"!`,
        starterCode: `// Schreibe hier deinen Prompt für eine KI:
const meinPrompt = "Erkläre mir was eine Künstliche Intelligenz ist";

// Was würde die KI antworten? Rate mal:
const meineVermutung = "Eine KI ist...";

console.log("Mein Prompt:", meinPrompt);
console.log("Meine Vermutung:", meineVermutung);
`,
        check: { kind: "js_console_includes", expected: "Prompt" },
        hintMd: "`const meinPrompt = \"Was ist eine KI und wie funktioniert sie?\";`",
        solutionCode: `const meinPrompt = "Erkläre mir was eine Künstliche Intelligenz ist";
const meineVermutung = "Eine KI ist ein Computerprogramm das denken kann";
console.log("Mein Prompt:", meinPrompt);
console.log("Meine Vermutung:", meineVermutung);`,
      },
    },
    {
      id: "ki-02",
      trackId: "ki",
      title: "Was ist ein Prompt?",
      summary: "Ein Prompt ist deine Frage oder Anweisung an die KI – lerne die Grundregeln!",
      minutes: 12,
      xp: 45,
      contentMd: `# 💬 Was ist ein Prompt?

> *"Ein Zauberer spricht Beschwörungsformeln. Du sprichst Prompts. Beide brauchen die richtigen Worte um zu funktionieren!"*

## Prompt = Deine Nachricht an die KI

Wenn du mit ChatGPT oder Gemini schreibst, nennst man das was du schreibst einen **Prompt**.

## Schlechte vs. Gute Prompts:

### ❌ Schlechter Prompt:
\`\`\`
"Erkläre Dinosaurier"
\`\`\`
*Problem: Zu vage! Was soll erklärt werden? Wie lang? Für wen?*

### ✅ Guter Prompt:
\`\`\`
"Erkläre mir Dinosaurier so als wärst du ein Museumsführer
für 10-jährige Kinder. Nenn mir 3 interessante Fakten
und mach es spannend!"
\`\`\`
*Besser! Du sagst: WAS, WIE, FÜR WEN und WIE VIELE Infos.*

## Die goldene Formel:
**WAS** du wissen willst + **WIE** es erklärt werden soll + **FÜR WEN** es ist

## Beispiele:
- *"Erkläre Mathematik wie ein Pirat für Kinder"*
- *"Schreibe ein kurzes Gedicht über Katzen im Stil von Dr. Seuss"*
- *"Fasse diesen Text in 3 Sätzen zusammen"*`,
      exercise: {
        language: "javascript",
        title: "Verbessere den Prompt!",
        instructionsMd: `Der schlechte Prompt ist bereits gegeben. Schreibe einen **besseren Prompt** der erklärt:
- WAS du lernen willst (Schwerkraft)
- WIE (einfach, lustig)
- FÜR WEN (für dich, 10 Jahre alt)`,
        starterCode: `const schlechterPrompt = "Erkläre Schwerkraft";

// Schreibe einen besseren Prompt:
const meinBessererPrompt = "Erkläre mir die Schwerkraft ...";
// Tipp: Füge hinzu WIE es erklärt werden soll und FÜR WEN!

console.log("Schlecht:", schlechterPrompt);
console.log("Besser:", meinBessererPrompt);
console.log("Länge des besseren Prompts:", meinBessererPrompt.length, "Zeichen");
`,
        check: { kind: "js_console_includes", expected: "Besser:" },
        hintMd: `"Erkläre mir die Schwerkraft so als wärst du ein Superheld. Ich bin 10 Jahre alt und verstehe noch keine Physik. Mach es lustig!"`,
        solutionCode: `const schlechterPrompt = "Erkläre Schwerkraft";
const meinBessererPrompt = "Erkläre mir die Schwerkraft so als wärst du ein Superheld. Ich bin 10 Jahre alt. Mach es lustig und spannend!";
console.log("Schlecht:", schlechterPrompt);
console.log("Besser:", meinBessererPrompt);
console.log("Länge des besseren Prompts:", meinBessererPrompt.length, "Zeichen");`,
      },
    },
    {
      id: "ki-03",
      trackId: "ki",
      title: "Gib der KI Kontext!",
      summary: "Die KI weiß nichts über dich – du musst ihr alles erklären!",
      minutes: 12,
      xp: 50,
      contentMd: `# 🗺️ Kontext ist alles!

> *"Stell dir vor du rufst jemanden an der dich nicht kennt und sagst nur: 'Hilf mir!' – Was soll die Person tun? Genau! Du musst mehr erklären."*

## Die KI kennt DICH nicht

Wenn du eine KI öffnest, weiß sie nichts über dich:
- Wer du bist
- Was du schon weißt
- Was du brauchst
- Warum du fragst

## Kontext = Hintergrundinfos

### Ohne Kontext ❌:
\`\`\`
"Hilf mir mit meinen Hausaufgaben"
\`\`\`

### Mit Kontext ✅:
\`\`\`
"Ich bin 11 Jahre alt und muss einen Aufsatz über
den Zweiten Weltkrieg schreiben. Das Thema soll
'Warum ist Frieden wichtig?' sein. Der Aufsatz
soll 200 Wörter lang sein. Kannst du mir helfen
eine Gliederung zu erstellen?"
\`\`\`

## Guter Kontext enthält:
1. **Wer du bist** – Alter, was du weißt
2. **Was du brauchst** – genau beschrieben
3. **Warum** – wofür ist es?
4. **Einschränkungen** – Länge, Format, Schwierigkeit

## Merke:
> *"Erzähl lieber zu viel als zu wenig. Die Maschine weiß NICHTS wenn du es ihr nicht sagst!"*`,
      exercise: {
        language: "javascript",
        title: "Kontext-Meister",
        instructionsMd: `Schreibe einen Prompt MIT gutem Kontext für diese Situation:

Du bist 10 Jahre alt und willst eine Geschichte über Drachen schreiben. Sie soll spannend sein und 3 Absätze haben.`,
        starterCode: `// Schreibe einen Prompt MIT Kontext:
const meinPrompt = \`
Ich bin ... Jahre alt und möchte ...
Die Geschichte soll ...
Bitte schreibe ...
\`;

console.log("Mein Prompt mit Kontext:");
console.log(meinPrompt);
console.log("Zeichen:", meinPrompt.length);
`,
        check: { kind: "js_console_includes", expected: "Zeichen:" },
        hintMd: `Füge ein: dein Alter, das Thema (Drachen), die gewünschte Länge (3 Absätze) und den Stil (spannend)`,
        solutionCode: `const meinPrompt = \`Ich bin 10 Jahre alt und möchte eine spannende Geschichte über Drachen schreiben. Die Geschichte soll 3 Absätze haben und einen tapferen Held enthalten. Bitte schreibe mir die Geschichte!\`;
console.log("Mein Prompt mit Kontext:");
console.log(meinPrompt);
console.log("Zeichen:", meinPrompt.length);`,
      },
    },
    {
      id: "ki-04",
      trackId: "ki",
      title: "Sei präzise – Spezifisch promten",
      summary: "Vage Fragen = vage Antworten. Lerne spezifisch zu sein!",
      minutes: 12,
      xp: 50,
      contentMd: `# 🎯 Präzision ist Macht!

> *"Ein Bogenschütze der nicht auf ein Ziel zielt, trifft alles und nichts. Sei präzise!"*

## Vage vs. Präzise

| Vage ❌ | Präzise ✅ |
|---------|-----------|
| "Erkläre Mathematik" | "Erkläre Bruchrechnung mit Beispielen für Klasse 5" |
| "Schreibe eine Geschichte" | "Schreibe eine 200-Wort-Geschichte über einen Hund der fliegen kann, im Stil eines Kinderbuches" |
| "Mach das besser" | "Verbessere die Grammatik und mache die Sätze kürzer" |
| "Hilf mir" | "Ich verstehe Multiplikation nicht. Erkläre sie mit 3 konkreten Beispielen" |

## Präzisions-Techniken:

### 1. Zahlen nennen:
- ❌ "ein paar Beispiele"
- ✅ "genau 5 Beispiele"

### 2. Format bestimmen:
- ❌ "liste das auf"
- ✅ "liste das als nummerierte Liste auf"

### 3. Ausgabe-Länge:
- ❌ "erkläre es kurz"
- ✅ "erkläre es in maximal 3 Sätzen"

### 4. Vergleiche nutzen:
- ❌ "erkläre einfach"
- ✅ "erkläre so, als ob ich 8 Jahre alt wäre und noch nie davon gehört habe"`,
      exercise: {
        language: "javascript",
        title: "Präzisions-Training",
        instructionsMd: `Mache diese vagen Prompts **präziser**!

Füge Zahlen, Format und Zielgruppe hinzu.`,
        starterCode: `const vagePrompts = [
  "Erkläre das Sonnensystem",
  "Gib mir Ideen für ein Projekt",
  "Was ist Python?",
];

// Schreibe präzise Versionen:
const praezisePrompts = [
  "Erkläre mir die 8 Planeten des Sonnensystems mit je einem interessanten Fakt. Ich bin 10 Jahre alt.",
  "Gib mir genau 5 Ideen für ein Schulprojekt über das Mittelalter als nummerierte Liste.",
  "Was ist Python? Erkläre es in 3 Sätzen für jemanden der noch nie programmiert hat.",
];

for (let i = 0; i < vagePrompts.length; i++) {
  console.log("❌ Vage:", vagePrompts[i]);
  console.log("✅ Präzise:", praezisePrompts[i]);
  console.log();
}
`,
        check: { kind: "js_console_includes", expected: "Präzise:" },
        hintMd: "Füge immer Zahlen, Zielgruppe und gewünschtes Format hinzu!",
        solutionCode: `const vage = ["Erkläre Sonnensystem", "Projektideen", "Was ist Python?"];
const praezise = ["Erkläre 8 Planeten mit je einem Fakt für 10-Jährige.", "5 Projektideen als Liste.", "Python in 3 Sätzen für Anfänger."];
for (let i = 0; i < vage.length; i++) {
  console.log("❌ Vage:", vage[i]);
  console.log("✅ Präzise:", praezise[i]);
}`,
      },
    },
    {
      id: "ki-05",
      trackId: "ki",
      title: "Rollen-Prompts – Die KI verwandeln",
      summary: "Gib der KI eine Rolle und bekomme viel bessere Antworten!",
      minutes: 12,
      xp: 55,
      contentMd: `# 🎭 Rollen-Prompts

> *"Ein Zauberer kann viele Gestalten annehmen. Die KI auch – wenn du es ihr sagst!"*

## "Tue so als ob..."

Du kannst der KI eine **Rolle** geben:

\`\`\`
"Du bist ein erfahrener Koch. Erkläre mir wie man Pasta kocht."
\`\`\`

\`\`\`
"Spiele einen freundlichen Lehrer und erkläre mir Bruchrechnung."
\`\`\`

\`\`\`
"Du bist ein Astronaut der gerade auf dem Mars ist. Beschreibe was du siehst."
\`\`\`

## Warum Rollen helfen:
- 🎯 Die KI passt den **Sprachstil** an
- 🎓 Du bekommst **Expertenwissen** in einfacher Sprache
- 🎪 Die Antworten werden **kreativer und interessanter**

## Gute Rollen für Kinder:
| Rolle | Wann nützlich |
|-------|---------------|
| "freundlicher Lehrer" | Schwierige Themen lernen |
| "Museumsführer" | Geschichte und Fakten |
| "Koch" | Rezepte erklären |
| "Pirat" | Spaßige Erklärungen |
| "Wissenschaftler" | Experimente und Fakten |
| "Buchautor" | Geschichten schreiben |

## Kombination mit Kontext:
\`\`\`
"Du bist ein freundlicher Biologielehrer.
Ich bin 11 Jahre alt.
Erkläre mir wie Fotosynthese funktioniert
mit einer lustigen Analogie."
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Rollen-Designer",
        instructionsMd: `Erstelle **3 verschiedene Rollen-Prompts** für unterschiedliche Themen.

Jeder Prompt soll eine Rolle + Kontext + Aufgabe enthalten!`,
        starterCode: `const rollenPrompts = [
  // Prompt 1: Über Dinosaurier (Rolle: Paläontologe)
  "Du bist ein begeisterter Paläontologe. Erkläre mir die 3 bekanntesten Dinosaurier für ein 10-jähriges Kind mit lustigen Fakten!",

  // Prompt 2: Über Raumfahrt (erfinde eine passende Rolle!)
  "Du bist ein ...",

  // Prompt 3: Über Kochen (erfinde eine passende Rolle!)
  "Du bist ein ...",
];

rollenPrompts.forEach((prompt, i) => {
  console.log(\`Prompt \${i + 1}:\`);
  console.log(prompt);
  console.log("---");
});
`,
        check: { kind: "js_console_includes", expected: "Prompt 3:" },
        hintMd: `Prompt 2: "Du bist ein Astronaut..." | Prompt 3: "Du bist ein Sternekoch..."`,
        solutionCode: `const rollenPrompts = [
  "Du bist ein begeisterter Paläontologe. Erkläre mir 3 Dinosaurier für 10-Jährige!",
  "Du bist ein Astronaut auf der ISS. Erkläre wie das Leben im Weltraum aussieht.",
  "Du bist ein Sternekoch. Erkläre mir wie ich ein einfaches Nudelgericht kochen kann.",
];
rollenPrompts.forEach((p, i) => {
  console.log(\`Prompt \${i+1}:\`);
  console.log(p);
  console.log("---");
});`,
      },
    },
    {
      id: "ki-06",
      trackId: "ki",
      title: "KI-Grenzen kennen",
      summary: "Die KI ist mächtig – aber nicht unfehlbar. Lerne ihre Schwächen!",
      minutes: 12,
      xp: 50,
      contentMd: `# ⚠️ Was KI nicht kann

> *"Auch der mächtigste Zauber hat seine Grenzen. Ein weiser Abenteurer kennt die Grenzen seiner Werkzeuge."*

## KI macht Fehler!

KIs können **halluzinieren** – das heißt: sie erfinden Fakten die klingen als wären sie wahr!

### Beispiel:
\`\`\`
Du: "Wer hat das Telefon erfunden?"
KI: "Alexander Graham Bell erfand das Telefon 1876."
✅ Das stimmt!

Du: "Welche Bücher hat Kaiser Augustus geschrieben?"
KI: "Kaiser Augustus schrieb die berühmten Werke..."
❌ FALSCH! Augustus hat keine Bücher geschrieben.
   Aber die KI erfindet trotzdem Antworten!
\`\`\`

## Was KI schlecht kann:
- ❌ Aktuelle Ereignisse (nach ihrem Wissens-Cutoff)
- ❌ Mathematik mit großen Zahlen (manchmal!)
- ❌ Vorhersagen über die Zukunft
- ❌ Persönliche Meinungen und Gefühle
- ❌ Immer korrekte Fakten

## Was du tun solltest:
1. **Wichtige Fakten überprüfen** – Schule, Bücher, Wikipedia
2. **Kritisch denken** – klingt das plausibel?
3. **Mehrere Quellen nutzen** – nicht nur KI
4. **Nach Quellen fragen**: "Woher weißt du das?"`,
      exercise: {
        language: "javascript",
        title: "Fakten-Checker",
        instructionsMd: `Erstelle eine Liste von Dingen die du mit einer KI **immer überprüfen** würdest.

Dann eine Liste was du der KI **vertrauen** würdest.`,
        starterCode: `const immerUeberpruefen = [
  "Aktuelle Nachrichten",
  "Medizinische Ratschläge",
  // Füge 3 weitere hinzu:
  "",
  "",
  "",
];

const kannVertrauen = [
  "Erklärungen zu bekannten Konzepten",
  "Kreative Geschichten schreiben",
  // Füge 3 weitere hinzu:
  "",
  "",
  "",
];

console.log("🔍 Immer überprüfen:");
immerUeberpruefen.filter(x => x).forEach(x => console.log("  -", x));

console.log("✅ Kann vertrauen:");
kannVertrauen.filter(x => x).forEach(x => console.log("  -", x));
`,
        check: { kind: "js_console_includes", expected: "Immer überprüfen" },
        hintMd: "Überprüfen: Historische Daten, Mathematik, Nachrichten. Vertrauen: Grammatik, Zusammenfassungen, Kreativität.",
        solutionCode: `const immerUeberpruefen = ["Aktuelle Nachrichten", "Medizinische Ratschläge", "Historische Daten", "Mathematik", "Gesetze"];
const kannVertrauen = ["Erklärungen", "Geschichten schreiben", "Grammatik prüfen", "Ideen brainstormen", "Texte zusammenfassen"];
console.log("🔍 Immer überprüfen:");
immerUeberpruefen.forEach(x => console.log("  -", x));
console.log("✅ Kann vertrauen:");
kannVertrauen.forEach(x => console.log("  -", x));`,
      },
    },
    {
      id: "ki-07",
      trackId: "ki",
      title: "KI als Lernhelfer",
      summary: "Nutze KI um besser zu lernen – Erklärungen, Übungen und Feedback!",
      minutes: 15,
      xp: 60,
      contentMd: `# 📚 KI als Lernhelfer

> *"Der klügste Schüler nutzt alle Werkzeuge. Die KI ist wie ein geduldiger Tutor der 24/7 für dich da ist!"*

## Wie KI beim Lernen hilft:

### 1. Erklären lassen:
\`\`\`
"Erkläre mir die Photosynthese wie ich 10 Jahre alt wäre.
Nutze eine Analogie die ich kenne."
\`\`\`

### 2. Übungsaufgaben erstellen:
\`\`\`
"Erstelle mir 5 Übungsaufgaben zur Bruchrechnung
für Klasse 5, von leicht nach schwer."
\`\`\`

### 3. Feedback bekommen:
\`\`\`
"Hier ist mein Aufsatz: [Text]
Was kann ich verbessern? Erkläre mir konkret
was gut ist und was nicht."
\`\`\`

### 4. Zusammenfassungen:
\`\`\`
"Fasse dieses Kapitel in 5 Stichpunkten zusammen:
[Text aus dem Schulbuch]"
\`\`\`

### 5. Lernen mit Beispielen:
\`\`\`
"Erkläre mir das Konzept der Division durch 3 Beispiele
aus dem Alltag."
\`\`\`

## ⚠️ Wichtig:
**Lass die KI nicht deine Hausaufgaben machen!**
Nutze sie um zu **verstehen** – nicht um **abzuschreiben**.
Wenn du abschreibst, lernst du nichts.`,
      exercise: {
        language: "javascript",
        title: "Lern-Prompts designen",
        instructionsMd: `Erstelle **4 verschiedene Lern-Prompts** für echte Schulfächer.

Jeder Prompt soll eine andere Lern-Strategie nutzen!`,
        starterCode: `const lernPrompts = {
  erklaerung: "Erkläre mir den Unterschied zwischen Verb und Adjektiv mit 3 Beispielen für einen 11-Jährigen.",

  uebungsaufgaben: "Erstelle mir ...",

  feedback: "Prüfe meinen Satz auf Grammatik: 'Der Hund rennt schnell über die Wiese.' Was ist gut, was kann besser?",

  zusammenfassung: "Fasse die wichtigsten Fakten über ...",
};

Object.entries(lernPrompts).forEach(([typ, prompt]) => {
  console.log(\`📚 \${typ.toUpperCase()}:\`);
  console.log(prompt);
  console.log();
});
`,
        check: { kind: "js_console_includes", expected: "ERKLAERUNG:" },
        hintMd: "Nutze verschiedene Typen: Erklärung, Übungsaufgaben, Feedback, Zusammenfassung",
        solutionCode: `const lernPrompts = {
  erklaerung: "Erkläre Verb vs Adjektiv mit 3 Beispielen für 11-Jährige.",
  uebungsaufgaben: "Erstelle 5 Matheaufgaben zu Addition mit Dezimalzahlen.",
  feedback: "Prüfe: 'Der Hund rennt schnell.' Was ist gut, was besser?",
  zusammenfassung: "Fasse den Deutschen Bundestag in 5 Stichpunkten zusammen.",
};
Object.entries(lernPrompts).forEach(([typ, prompt]) => {
  console.log(\`📚 \${typ.toUpperCase()}:\`);
  console.log(prompt);
  console.log();
});`,
      },
    },
    {
      id: "ki-08",
      trackId: "ki",
      title: "Kreativ mit KI",
      summary: "KI als kreativer Partner – Geschichten, Gedichte und Ideen!",
      minutes: 15,
      xp: 60,
      contentMd: `# 🎨 Kreativ mit KI

> *"Die KI ist kein Künstler – aber sie ist der perfekte kreative Assistent. Du bist der Dirigent, sie ist das Orchester!"*

## KI für kreative Projekte:

### Geschichten:
\`\`\`
"Schreibe den Anfang (100 Wörter) einer Geschichte über
ein Kind das entdeckt, dass sein Hund sprechen kann.
Stil: lustig und abenteuerlich. Ich bin 10 Jahre alt."
\`\`\`

### Gedichte:
\`\`\`
"Schreibe ein Reim-Gedicht (4 Strophen, je 4 Zeilen)
über den Herbst. Nutze lebhafte Farben und klingende Wörter."
\`\`\`

### Ideen entwickeln:
\`\`\`
"Ich will ein Schulprojekt über Klimawandel machen.
Gib mir 10 kreative Präsentations-Ideen die nicht
nur PowerPoint sind. Ich bin in Klasse 6."
\`\`\`

### Weiterdenken:
\`\`\`
"Ich habe diese Geschichte-Idee: [deine Idee]
Was könnten interessante Wendungen sein?"
\`\`\`

## Wichtig: DU bist der Kreative!
Die KI gibt dir **Rohmaterial**. Du:
- Wählst was dir gefällt
- Veränderst es nach deinem Geschmack
- Fügst deine eigenen Ideen hinzu
- Machst es zu **deinem** Werk`,
      exercise: {
        language: "javascript",
        title: "Story-Prompt Meister",
        instructionsMd: `Erstelle **einen detaillierten Kreativ-Prompt** für eine Geschichte die du dir wünscht.

Nutze: Genres, Charaktere, Setting, Ton und gewünschte Länge!`,
        starterCode: `const meinStoryPrompt = \`
Schreibe den Anfang einer Geschichte (ungefähr 150 Wörter) über:

Hauptcharakter: Ein 11-jähriges Mädchen namens ...
Setting: ...
Besondere Fähigkeit: ...
Problem/Konflikt: ...
Ton: ...

Beginne die Geschichte spannend mit Action!
\`;

console.log("Mein Story-Prompt:");
console.log(meinStoryPrompt);
console.log("\\nDieser Prompt ist gut weil er folgende Elemente hat:");
console.log("✅ Charakter definiert");
console.log("✅ Setting definiert");
console.log("✅ Konflikt definiert");
console.log("✅ Länge angegeben");
`,
        check: { kind: "js_console_includes", expected: "Story-Prompt" },
        hintMd: "Je mehr Details du gibst, desto besser wird die Geschichte! Namen, Ort, Problem, Stil – alles hinein!",
        solutionCode: `const meinStoryPrompt = \`Schreibe den Anfang (150 Wörter) einer Geschichte: Hauptcharakter ist Luna, 11 Jahre, kann Gedanken lesen. Setting: magische Schule. Konflikt: Sie entdeckt ein Geheimnis das die Schule in Gefahr bringt. Ton: spannend und abenteuerlich.\`;
console.log("Mein Story-Prompt:");
console.log(meinStoryPrompt);
console.log("\\nDieser Prompt hat alle wichtigen Elemente! ✅");`,
      },
    },
    {
      id: "ki-09",
      trackId: "ki",
      title: "Sicherheit & Datenschutz",
      summary: "Was du NIEMALS einer KI verraten solltest – bleib sicher online!",
      minutes: 10,
      xp: 45,
      contentMd: `# 🔒 Sicherheit online

> *"Ein weiser Abenteurer verrät seinen Namen nicht jedem Fremden. Das Internet ist kein anderes."*

## NIEMALS einer KI geben:

### ❌ Persönliche Daten:
- Deinen vollen Namen + Adresse
- Schule und Klasse + Stadt
- Telefonnummer
- Passwörter (NIEMALS!)
- Fotos von dir oder deiner Familie

### ❌ Andere Personen:
- Infos über Freunde und Familie
- Private Probleme anderer
- Adressen oder Nummern anderer

## Was OKAY ist:
- ✅ Fragen über Schulfächer
- ✅ Kreative Ideen entwickeln
- ✅ Texte verbessern lassen
- ✅ Dinge erklären lassen
- ✅ Hilfe bei Projekten

## Denk daran:
1. KI-Gespräche werden oft gespeichert
2. Unternehmen können deine Prompts lesen
3. Behandle KI wie einen Fremden im Netz
4. Sprich mit Eltern wenn du unsicher bist

## Die goldene Regel:
> *"Schreibe nichts in eine KI das du nicht auf ein Plakat schreiben würdest das jeder lesen kann."*`,
      exercise: {
        language: "javascript",
        title: "Sicher oder Nicht?",
        instructionsMd: `Sortiere diese Prompts in "sicher" und "nicht sicher"!`,
        starterCode: `const prompts = [
  { text: "Erkläre mir Photosynthese", sicher: true },
  { text: "Ich heiße Anna Müller und wohne in der Musterstraße 5", sicher: false },
  { text: "Schreibe eine Geschichte über Drachen", sicher: true },
  { text: "Mein Passwort vergessen, hier sind meine Daten...", sicher: false },
  { text: "Hilf mir mit meinen Mathe-Hausaufgaben zu Brüchen", sicher: true },
  { text: "Meine Freundin Lena aus Klasse 6b hat Probleme mit...", sicher: false },
];

console.log("✅ Sichere Prompts:");
prompts.filter(p => p.sicher).forEach(p => console.log(" -", p.text));

console.log("\\n❌ Nicht sichere Prompts:");
prompts.filter(p => !p.sicher).forEach(p => console.log(" -", p.text));
`,
        check: { kind: "js_console_includes", expected: "Sichere Prompts" },
        hintMd: "Persönliche Daten, Namen, Adressen = nicht sicher. Schulfragen, Kreativität = sicher.",
        solutionCode: `const prompts = [
  { text: "Erkläre Photosynthese", sicher: true },
  { text: "Ich heiße Anna Müller, Musterstraße 5", sicher: false },
  { text: "Geschichte über Drachen", sicher: true },
  { text: "Mein Passwort...", sicher: false },
];
console.log("✅ Sichere Prompts:");
prompts.filter(p => p.sicher).forEach(p => console.log(" -", p.text));
console.log("\\n❌ Nicht sichere Prompts:");
prompts.filter(p => !p.sicher).forEach(p => console.log(" -", p.text));`,
      },
    },
    {
      id: "ki-10",
      trackId: "ki",
      title: "🏆 Capstone: Dein Prompt-Portfolio",
      summary: "Zeige was du gelernt hast – baue dein persönliches Prompt-Buch!",
      minutes: 35,
      xp: 180,
      contentMd: `# 🏆 Capstone: Prompt-Portfolio

> *"Ein Meister-Abenteurer braucht sein Zauberbuch. Dein Prompt-Portfolio ist dein persönliches Zauberbuch!"*

## Was du gelernt hast:
- ✅ Was eine KI ist
- ✅ Was ein Prompt ist
- ✅ Kontext geben
- ✅ Präzise sein
- ✅ Rollen-Prompts
- ✅ KI-Grenzen kennen
- ✅ KI als Lernhelfer
- ✅ Kreativ mit KI
- ✅ Sicher bleiben

## Dein Capstone:
Erstelle **6 professionelle Prompts** für verschiedene Lebenssituationen.

Jeder Prompt soll nutzen:
1. **Rolle** für die KI
2. **Kontext** (wer du bist, was du brauchst)
3. **Präzise Anweisung** (Was genau, wie viel, welches Format)

## Qualitäts-Check:
- Hat der Prompt eine Rolle? ✅
- Ist Kontext dabei? ✅
- Ist die Aufgabe präzise? ✅
- Keine privaten Daten? ✅`,
      exercise: {
        language: "javascript",
        title: "Mein Prompt-Portfolio",
        instructionsMd: `Erstelle **6 professionelle Prompts** für diese Situationen:
1. Mathe-Hausaufgaben verstehen
2. Eine Geschichte schreiben
3. Ein Hobby erklären lassen
4. Für ein Referat recherchieren
5. Einen Brief verbessern
6. Etwas Kreatives erfinden

Jeder Prompt muss **Rolle + Kontext + präzise Aufgabe** haben!`,
        starterCode: `const meinPromptPortfolio = {
  mathe: \`
    Du bist ein geduldiger Mathelehrer.
    Ich bin in Klasse 5 und verstehe Brüche noch nicht.
    Erkläre mir wie ich 3/4 + 1/2 rechne mit Schritt-für-Schritt Erklärung und einem Alltagsbeispiel.
  \`,

  geschichte: \`
    // Dein Prompt hier:
    // Rolle + Kontext + was die Geschichte enthalten soll
  \`,

  hobby: \`
    // Dein Prompt hier:
  \`,

  referat: \`
    // Dein Prompt hier:
  \`,

  brief: \`
    // Dein Prompt hier:
  \`,

  kreativ: \`
    // Dein Prompt hier:
  \`,
};

// Qualitäts-Check:
let fertig = 0;
Object.entries(meinPromptPortfolio).forEach(([name, prompt]) => {
  const laenge = prompt.trim().length;
  const gut = laenge > 30;
  console.log(\`\${gut ? "✅" : "❌"} \${name}: \${laenge} Zeichen\`);
  if (gut) fertig++;
});

console.log(\`\\n🏆 Fertige Prompts: \${fertig}/6\`);
`,
        check: { kind: "js_console_includes", expected: "Portfolio" },
        hintMd: "Nutze für jeden Prompt: 'Du bist [Rolle]. Ich bin [Kontext]. [Präzise Aufgabe].'",
        solutionCode: `const portfolio = {
  mathe: "Du bist Mathelehrer. Ich bin in Klasse 5. Erkläre Brüche Schritt für Schritt.",
  geschichte: "Du bist Buchautor. Schreibe 100 Wörter über einen fliegenden Hund, lustig.",
  hobby: "Du bist Experte. Erkläre Skateboarden für Anfänger in 5 Schritten.",
  referat: "Du bist Historiker. Gib 5 Fakten über die Römer für Klasse 5.",
  brief: "Du bist Deutschlehrer. Prüfe Grammatik: 'Lieber Oma, ich schreibe dir.'",
  kreativ: "Erfinde ein neues Tier das halb Hund halb Vogel ist. Beschreibe es in 50 Wörtern.",
};
let ok = 0;
Object.entries(portfolio).forEach(([n, p]) => { const gut = p.length > 20; console.log(\`\${gut?"✅":"❌"} \${n}\`); if(gut)ok++; });
console.log(\`\\n🏆 Fertige Prompts: \${ok}/6\`);`,
      },
    },
    {
      id: "ki-11",
      trackId: "ki" as const,
      title: "Zero-Shot vs. Few-Shot Prompting",
      summary: "Lerne wie Beispiele im Prompt die KI viel klüger machen!",
      minutes: 12,
      xp: 55,
      contentMd: `# 🎯 Zero-Shot vs. Few-Shot Prompting

> *"Würdest du jemandem erklären wie man Fahrrad fährt – nur mit Worten? Oder zeigst du es lieber vor? Manchmal hilft ein Beispiel mehr als tausend Worte!"*

## Was bedeutet "Shot"?

In der KI-Welt bedeutet "Shot" so viel wie **Beispiel**.

| Technik | Was ist das? | Beispiel |
|---------|-------------|---------|
| **Zero-Shot** | Keine Beispiele – einfach fragen | "Übersetze: Hund" |
| **One-Shot** | Ein Beispiel geben | "Hund → dog. Katze → ?" |
| **Few-Shot** | Mehrere Beispiele geben | "Hund→dog, Katze→cat, Vogel→?" |

## Wann benutze ich was?

- **Zero-Shot** reicht für einfache Aufgaben
- **Few-Shot** hilft wenn die KI das Format genau verstehen soll
- Mehr Beispiele = KI versteht besser WAS du willst

## Beispiel Few-Shot Prompt:

\`\`\`
Ich möchte Filmtitel lustig umschreiben.

Beispiele:
- "Titanic" → "Das große nasse Desaster"
- "Die Eiskönigin" → "Mädchen friert alles ein und findet Freunde"

Jetzt du: "Spider-Man"
\`\`\`

Die KI lernt aus den Beispielen welchen **Stil** und welches **Format** du willst.

> 💡 **Tipp:** Je seltsamer dein gewünschtes Format, desto mehr Beispiele brauchst du!`,
      exercise: {
        language: "javascript" as const,
        title: "Few-Shot Prompt bauen",
        instructionsMd: `**Deine Aufgabe:**

Baue einen **Few-Shot Prompt** der eine KI trainiert, Tiernamen in lustige Superhelden-Namen umzuwandeln.

1. Füge mindestens **2 Beispiele** in \`beispiele\` ein (Format: \`{ tier: "...", held: "..." }\`)
2. Füge deine **neue Anfrage** in \`neueAnfrage\` ein (ein Tiername)
3. Baue den fertigen Prompt zusammen`,
        starterCode: `// Few-Shot Prompt: Tier → Superheld
const beispiele = [
  { tier: "Hund", held: "Kapitän Pfote" },
  { tier: "Katze", held: "___" },  // Füge ein zweites Beispiel ein!
];

const neueAnfrage = "___"; // Welches Tier soll ein Superheld werden?

// Baue den Prompt zusammen:
let prompt = "Wandle Tiernamen in lustige Superhelden-Namen um.\\n\\nBeispiele:\\n";
beispiele.forEach(b => {
  prompt += \`- \${b.tier} → \${b.held}\\n\`;
});
prompt += \`\\nJetzt du: \${neueAnfrage}\`;

console.log("=== Mein Few-Shot Prompt ===");
console.log(prompt);
console.log("Anzahl Beispiele:", beispiele.length);`,
        check: { kind: "contains" as const, needles: ["beispiele", "neueAnfrage", "Few-Shot"] },
        hintMd: `Zweites Beispiel: \`{ tier: "Katze", held: "Die Schnurrende Rächerin" }\` — und für \`neueAnfrage\` schreibe z.B. \`"Hamster"\`. Vergiss nicht "Few-Shot" als Kommentar im Code!`,
        solutionCode: `// Few-Shot Prompt: Tier → Superheld
const beispiele = [
  { tier: "Hund", held: "Kapitän Pfote" },
  { tier: "Katze", held: "Die Schnurrende Rächerin" },
  { tier: "Papagei", held: "Doktor Geräusch" },
];

const neueAnfrage = "Hamster";

let prompt = "Wandle Tiernamen in lustige Superhelden-Namen um.\\n\\nBeispiele:\\n";
beispiele.forEach(b => {
  prompt += \`- \${b.tier} → \${b.held}\\n\`;
});
prompt += \`\\nJetzt du: \${neueAnfrage}\`;

console.log("=== Mein Few-Shot Prompt ===");
console.log(prompt);
console.log("Anzahl Beispiele:", beispiele.length);`,
      },
    },
    {
      id: "ki-12",
      trackId: "ki" as const,
      title: "Chain-of-Thought Prompting",
      summary: "Lass die KI laut denken – Schritt für Schritt zu besseren Antworten!",
      minutes: 13,
      xp: 60,
      contentMd: `# 🧠 Chain-of-Thought Prompting

> *"Wenn du einen schwierigen Mathe-Test hast, rechnest du auch nicht einfach direkt das Ergebnis auf – du zeigst jeden Schritt. Die KI ist genau gleich!"*

## Was ist Chain-of-Thought?

**Chain-of-Thought** (zu Deutsch: "Gedankenkette") bedeutet: Du bittest die KI, **jeden Denkschritt zu erklären** bevor sie die Antwort gibt.

## Ohne Chain-of-Thought ❌:
\`\`\`
Frage: "Wenn ich 3 Äpfel habe und 2 dazubekomme, dann 1 verschenke – wie viele habe ich?"
KI: "4"
\`\`\`
*Du weißt nicht ob die KI richtig gerechnet hat!*

## Mit Chain-of-Thought ✅:
\`\`\`
Frage: "... Denke Schritt für Schritt."
KI: "Schritt 1: Ich starte mit 3 Äpfeln.
     Schritt 2: 3 + 2 = 5 Äpfel.
     Schritt 3: 5 - 1 = 4 Äpfel.
     Antwort: 4 Äpfel."
\`\`\`

## Magische Schlüsselwörter für Chain-of-Thought:
- "Denke **Schritt für Schritt**"
- "Erkläre **deinen Denkweg**"
- "Zeige **wie du zur Antwort kommst**"
- "**Begründe** jeden Schritt"

## Wann ist es nützlich?
- Bei Matheaufgaben
- Bei logischen Rätseln
- Wenn du die Erklärung verstehen willst
- Beim Debuggen von Fehlern

> 💡 **Tipp:** Füge einfach "Denke Schritt für Schritt" ans Ende deines Prompts – das allein verbessert die Antwortqualität enorm!`,
      exercise: {
        language: "javascript" as const,
        title: "Gedankenkette bauen",
        instructionsMd: `**Deine Aufgabe:**

Simuliere einen Chain-of-Thought Denkprozess in JavaScript!

1. Schreibe einen Prompt mit der Zauberformel "Schritt für Schritt" in \`meinPrompt\`
2. Fülle das \`denkschritte\` Array mit mindestens **3 Denkschritten** aus (simuliere wie eine KI denken würde)
3. Gib am Ende die \`antwort\` aus`,
        starterCode: `// Chain-of-Thought: Aufgabe – Wie viele Beine haben 3 Hunde und 2 Spinnen?

const meinPrompt = "Wie viele Beine haben 3 Hunde und 2 Spinnen zusammen? ___"; // Füge die Zauberformel ein!

// Simuliere die Denkschritte einer KI:
const denkschritte = [
  "Schritt 1: Ein Hund hat ___ Beine. 3 Hunde haben ___ × ___ = ___ Beine.",
  "Schritt 2: ___",  // Spinnen
  "Schritt 3: ___",  // Zusammenrechnen
];

const antwort = "Zusammen haben sie ___ Beine.";

console.log("Mein Prompt:", meinPrompt);
console.log("\\n=== KI denkt... ===");
denkschritte.forEach(s => console.log(s));
console.log("\\n✅ Antwort:", antwort);`,
        check: { kind: "contains" as const, needles: ["denkschritte", "Schritt", "Schritt für Schritt"] },
        hintMd: `Zauberformel: \`"... Denke Schritt für Schritt."\` — Hund = 4 Beine, Spinne = 8 Beine. 3×4=12, 2×8=16, 12+16=28.`,
        solutionCode: `const meinPrompt = "Wie viele Beine haben 3 Hunde und 2 Spinnen zusammen? Denke Schritt für Schritt.";

const denkschritte = [
  "Schritt 1: Ein Hund hat 4 Beine. 3 Hunde haben 3 × 4 = 12 Beine.",
  "Schritt 2: Eine Spinne hat 8 Beine. 2 Spinnen haben 2 × 8 = 16 Beine.",
  "Schritt 3: Zusammen: 12 + 16 = 28 Beine.",
];

const antwort = "Zusammen haben sie 28 Beine.";

console.log("Mein Prompt:", meinPrompt);
console.log("\\n=== KI denkt... ===");
denkschritte.forEach(s => console.log(s));
console.log("\\n✅ Antwort:", antwort);`,
      },
    },
    {
      id: "ki-13",
      trackId: "ki" as const,
      title: "Rollen-Prompting: Du bist ein Experte!",
      summary: "Verwandle die KI in jeden Experten der Welt – von Arzt bis Zauberer!",
      minutes: 12,
      xp: 55,
      contentMd: `# 🎭 Rollen-Prompting: Experten-Modus

> *"Ein guter Regisseur sagt dem Schauspieler genau wer er spielen soll. Du bist der Regisseur – die KI ist dein Schauspieler!"*

## Rollen-Prompting auf dem nächsten Level

Du kennst schon einfache Rollen wie "Du bist ein Lehrer". Jetzt bauen wir **detaillierte Experten-Rollen**!

## Einfache Rolle vs. Experten-Rolle:

### Einfach ❌:
\`\`\`
"Du bist ein Arzt. Was soll ich tun wenn ich Kopfschmerzen habe?"
\`\`\`

### Experten-Rolle ✅:
\`\`\`
"Du bist Dr. Klugmann, ein freundlicher Kinderarzt mit 20 Jahren
Erfahrung. Du erklärst Dinge immer einfach und mit Analogien.
Du machst dir keine Sorgen und bist optimistisch.
Aufgabe: Erkläre einem 10-jährigen warum man viel Wasser trinken soll."
\`\`\`

## Bauplan für Experten-Rollen:
1. **Name + Beruf** der KI-Persona
2. **Erfahrung** (wie lange, wo)
3. **Persönlichkeit** (freundlich, streng, lustig)
4. **Kommunikationsstil** (einfach, mit Beispielen, mit Witzen)
5. **Deine Aufgabe** klar formuliert

## Kreative Rollen-Ideen:
- 🧙 "Du bist Merlin der Zauberer – erkläre Physik mit Magie"
- 🏴‍☠️ "Du bist Käpt'n Wissen – erkläre Geschichte wie ein Pirat"
- 🤖 "Du bist ein Roboter aus der Zukunft – beschreibe wie 2100 aussieht"
- 🦁 "Du bist ein Löwe der sprechen kann – erkläre das Leben in der Savanne"

> 💡 **Tipp:** Je detaillierter die Rolle, desto konsistenter und interessanter die Antworten!`,
      exercise: {
        language: "javascript" as const,
        title: "Experten-Persona erstellen",
        instructionsMd: `**Deine Aufgabe:**

Erstelle eine **detaillierte Experten-Persona** als JavaScript-Objekt und baue daraus einen vollständigen Rollen-Prompt!

1. Fülle alle Felder des \`persona\` Objekts aus (Name, Beruf, Erfahrung, Stil, Persönlichkeit)
2. Schreibe die \`aufgabe\` die diese Persona lösen soll
3. Der fertige \`rollenPrompt\` soll automatisch zusammengebaut werden`,
        starterCode: `// Baue deine Experten-Persona:
const persona = {
  name: "___",           // z.B. "Professor Sternklar"
  beruf: "___",          // z.B. "Astronaut und Weltraumforscher"
  erfahrung: "___",      // z.B. "30 Jahre Weltraumabenteuer"
  persoenlichkeit: "___", // z.B. "abenteuerlustig und begeistert"
  stil: "___",           // z.B. "erklärt mit spannenden Geschichten"
};

const aufgabe = "Erkläre einem Kind warum der Mond manchmal rund und manchmal wie eine Banane aussieht.";

// Baue den Rollen-Prompt automatisch zusammen:
const rollenPrompt = \`Du bist \${persona.name}, ein \${persona.beruf} mit \${persona.erfahrung} Erfahrung. Du bist \${persona.persoenlichkeit} und \${persona.stil}. Aufgabe: \${aufgabe}\`;

console.log("=== Meine Experten-Persona ===");
console.log("Name:", persona.name);
console.log("Beruf:", persona.beruf);
console.log("\\n=== Fertiger Rollen-Prompt ===");
console.log(rollenPrompt);`,
        check: { kind: "contains" as const, needles: ["persona", "rollenPrompt", "Du bist"] },
        hintMd: `Beispiel: \`name: "Professor Sternklar"\`, \`beruf: "Astronaut"\`, \`stil: "erklärt mit spannenden Weltraum-Abenteuern"\``,
        solutionCode: `const persona = {
  name: "Professor Sternklar",
  beruf: "Astronaut und Weltraumforscher",
  erfahrung: "30 Jahren",
  persoenlichkeit: "abenteuerlustig und total begeistert von allem was leuchtet",
  stil: "erklärt komplizierte Dinge mit spannenden Geschichten und Analogien",
};

const aufgabe = "Erkläre einem Kind warum der Mond manchmal rund und manchmal wie eine Banane aussieht.";

const rollenPrompt = \`Du bist \${persona.name}, ein \${persona.beruf} mit \${persona.erfahrung} Erfahrung. Du bist \${persona.persoenlichkeit} und \${persona.stil}. Aufgabe: \${aufgabe}\`;

console.log("=== Meine Experten-Persona ===");
console.log("Name:", persona.name);
console.log("Beruf:", persona.beruf);
console.log("\\n=== Fertiger Rollen-Prompt ===");
console.log(rollenPrompt);`,
      },
    },
    {
      id: "ki-14",
      trackId: "ki" as const,
      title: "KI-Halluzinationen erkennen",
      summary: "KIs erfinden manchmal Dinge – lerne wie du Fehler erkennst und prüfst!",
      minutes: 13,
      xp: 60,
      contentMd: `# 🔍 KI-Halluzinationen erkennen

> *"Stell dir vor dein Freund erzählt dir eine Geschichte – aber manchmal erfindet er Teile einfach dazu. Du würdest nachfragen! Mit KI ist es genauso."*

## Was ist eine Halluzination?

Eine **KI-Halluzination** ist wenn eine KI eine Aussage macht die **falsch** oder **erfunden** ist – aber so klingt als wäre sie wahr.

## Beispiele für Halluzinationen:
- KI erfindet Bücher die nie geschrieben wurden
- KI nennt falsche Jahreszahlen bei historischen Ereignissen
- KI erfindet Personen oder Zitate
- KI beschreibt Fakten die gar nicht stimmen

## Warum passiert das?

KIs werden auf riesigen Mengen Text trainiert. Sie "raten" immer den wahrscheinlichsten nächsten Text – manchmal ist das Raten falsch!

## Halluzinations-Alarm 🚨 – Wann aufpassen?

| Verdächtig | Warum |
|-----------|-------|
| Sehr genaue Zahlen (z.B. "37,4%") | Woher weiß die KI das so genau? |
| Unbekannte Quellen oder Bücher | Vielleicht erfunden! |
| Historische Details | Oft vermischt die KI Fakten |
| Aktuelle Ereignisse | KI-Wissen hat ein Enddatum |

## So prüfst du KI-Antworten:
1. **Suche nach** der Information in Wikipedia oder Büchern
2. **Frage die KI:** "Woher weißt du das? Bist du sicher?"
3. **Vergleiche** mit anderen Quellen
4. Bei wichtigen Themen: **Experten fragen**

> 💡 **Regel:** Vertraue einer KI nie blind – besonders bei Fakten, Zahlen und Namen!`,
      exercise: {
        language: "javascript" as const,
        title: "Halluzinations-Detektor",
        instructionsMd: `**Deine Aufgabe:**

Baue einen **Halluzinations-Detektor**! Analysiere KI-Antworten und markiere verdächtige Aussagen.

1. Setze bei jeder Aussage \`verdaechtig: true\` oder \`false\`
2. Schreibe für jede verdächtige Aussage einen \`grund\` warum sie verdächtig ist
3. Das Wort "Halluzination" muss als Kommentar irgendwo im Code stehen`,
        starterCode: `// Halluzinations-Detektor
// KI hat diese Antworten gegeben – was ist verdächtig?
const antworten = [
  {
    text: "Der Eiffelturm wurde 1889 gebaut.",
    verdaechtig: false,
    grund: "Bekannte Tatsache, leicht prüfbar"
  },
  {
    text: "Das Buch 'Der Quantendrache' von Prof. Müller beweist dass KI Emotionen hat.",
    verdaechtig: ___,  // true oder false?
    grund: "___"       // Warum verdächtig?
  },
  {
    text: "Genau 73,6% aller Deutschen nutzen täglich KI.",
    verdaechtig: ___,
    grund: "___"
  },
  {
    text: "Wasser besteht aus Wasserstoff und Sauerstoff.",
    verdaechtig: false,
    grund: "Grundlegende Chemie, vielfach bestätigt"
  },
  {
    text: "Einstein sagte 1955: 'KI wird die Welt retten'.",
    verdaechtig: ___,
    grund: "___"
  },
];

const verdaechtige = antworten.filter(a => a.verdaechtig);
console.log(\`🚨 Halluzination-Risiko: \${verdaechtige.length}/\${antworten.length} verdächtig\`);
verdaechtige.forEach(a => {
  console.log("❌ VERDÄCHTIG:", a.text.substring(0, 50) + "...");
  console.log("   Grund:", a.grund);
});`,
        check: { kind: "contains" as const, needles: ["verdaechtig", "verdaechtige", "Halluzination"] },
        hintMd: `Verdächtig: erfundene Buchtitel, zu genaue Statistiken (73,6%), falsche Zitate von historischen Personen (Einstein starb 1955, KI gab es kaum).`,
        solutionCode: `// Halluzinations-Detektor – prüft KI-Aussagen auf Glaubwürdigkeit
const antworten = [
  {
    text: "Der Eiffelturm wurde 1889 gebaut.",
    verdaechtig: false,
    grund: "Bekannte Tatsache, leicht prüfbar"
  },
  {
    text: "Das Buch 'Der Quantendrache' von Prof. Müller beweist dass KI Emotionen hat.",
    verdaechtig: true,
    grund: "Dieses Buch existiert wahrscheinlich nicht – typische Halluzination!"
  },
  {
    text: "Genau 73,6% aller Deutschen nutzen täglich KI.",
    verdaechtig: true,
    grund: "Zu genaue Zahl ohne Quelle – sehr verdächtig"
  },
  {
    text: "Wasser besteht aus Wasserstoff und Sauerstoff.",
    verdaechtig: false,
    grund: "Grundlegende Chemie, vielfach bestätigt"
  },
  {
    text: "Einstein sagte 1955: 'KI wird die Welt retten'.",
    verdaechtig: true,
    grund: "Einstein starb 1955, KI in dem Sinne gab es kaum – erfundenes Zitat"
  },
];

const verdaechtige = antworten.filter(a => a.verdaechtig);
console.log(\`🚨 Halluzination-Risiko: \${verdaechtige.length}/\${antworten.length} verdächtig\`);
verdaechtige.forEach(a => {
  console.log("❌ VERDÄCHTIG:", a.text.substring(0, 50) + "...");
  console.log("   Grund:", a.grund);
});`,
      },
    },
    {
      id: "ki-15",
      trackId: "ki" as const,
      title: "Prompts iterativ verbessern",
      summary: "Gute Prompts entstehen nicht sofort – übe die gleiche Aufgabe 3x besser zu formulieren!",
      minutes: 15,
      xp: 65,
      contentMd: `# 🔄 Prompts iterativ verbessern

> *"Kein Autor schreibt beim ersten Versuch ein perfektes Buch. Kein Programmierer schreibt beim ersten Versuch perfekten Code. Kein Prompt ist beim ersten Versuch perfekt!"*

## Iteration = Verbesserung durch Wiederholung

Das Geheimnis guter Prompts: Du schreibst **mehrere Versionen** und machst jede besser als die letzte.

## Der Verbesserungs-Kreislauf:

\`\`\`
Version 1 → Ergebnis anschauen → Was fehlt? → Version 2 → ...
\`\`\`

## Beispiel: Prompt für eine Geschichte verbessern

### Version 1 (schlecht):
\`\`\`
"Schreibe eine Geschichte."
\`\`\`

### Version 2 (besser):
\`\`\`
"Schreibe eine spannende Geschichte über einen Jungen
der einen Drachen trifft."
\`\`\`

### Version 3 (gut):
\`\`\`
"Du bist ein Kinderbuchautor. Schreibe eine spannende
200-Wort-Geschichte für 10-Jährige über einen schüchternen
Jungen der einen freundlichen Drachen trifft. Die Geschichte
soll mit einer Überraschung enden."
\`\`\`

## Was verbessert sich von Version zu Version?
| Was fehlt | Was ich hinzufüge |
|-----------|------------------|
| Thema | Drache + Junge |
| Länge | 200 Wörter |
| Zielgruppe | 10-Jährige |
| Rolle für KI | Kinderbuchautor |
| Struktur | Mit Überraschungsende |

> 💡 **Tipp:** Frage dich nach jedem Prompt: "Was weiß die KI noch nicht?" – das kommt in die nächste Version!`,
      exercise: {
        language: "javascript" as const,
        title: "3 Versionen – 3x besser!",
        instructionsMd: `**Deine Aufgabe:**

Verbessere denselben Prompt **3 Mal**! Das Thema ist: "Erkläre mir wie das Internet funktioniert."

1. \`version1\`: Sehr einfacher, vager Prompt (kurz)
2. \`version2\`: Etwas besser – füge Zielgruppe und Format hinzu
3. \`version3\`: Vollständig – Rolle + Kontext + Format + Länge + Stil

Jede Version soll **länger** sein als die vorherige!`,
        starterCode: `// Aufgabe: Erkläre wie das Internet funktioniert
// Verbessere den Prompt 3 Mal!

const version1 = "Erkläre das Internet.";

const version2 = "Erkläre mir wie das Internet funktioniert. ___";
// Füge hinzu: für wen (Alter), wie viele Punkte

const version3 = "___";
// Vollständig: Rolle + Kontext + Format + Länge + Stil

// Auswertung:
const versionen = [version1, version2, version3];
versionen.forEach((v, i) => {
  console.log(\`Version \${i + 1} (\${v.length} Zeichen): \${v.substring(0, 60)}...\`);
});

// Verbesserungs-Check:
const verbessert = version2.length > version1.length && version3.length > version2.length;
console.log("\\n✅ Jede Version ist länger:", verbessert);
console.log("Verbesserung v1→v3:", version3.length - version1.length, "mehr Zeichen");`,
        check: { kind: "contains" as const, needles: ["version1", "version2", "version3"] },
        hintMd: `Version 3 Beispiel: "Du bist ein Informatiklehrer. Ich bin 12 Jahre alt. Erkläre mir wie das Internet funktioniert in 5 einfachen Schritten mit je einer Analogie aus dem Alltag. Maximal 200 Wörter."`,
        solutionCode: `const version1 = "Erkläre das Internet.";

const version2 = "Erkläre mir wie das Internet funktioniert. Ich bin 11 Jahre alt. Nenn mir 3 wichtige Punkte.";

const version3 = "Du bist ein freundlicher Informatiklehrer. Ich bin 11 Jahre alt und habe noch nie über Technik nachgedacht. Erkläre mir wie das Internet funktioniert in 5 einfachen Schritten. Nutze für jeden Schritt eine Analogie aus dem Alltag. Maximal 150 Wörter, einfache Sprache.";

const versionen = [version1, version2, version3];
versionen.forEach((v, i) => {
  console.log(\`Version \${i + 1} (\${v.length} Zeichen): \${v.substring(0, 60)}...\`);
});

const verbessert = version2.length > version1.length && version3.length > version2.length;
console.log("\\n✅ Jede Version ist länger:", verbessert);
console.log("Verbesserung v1→v3:", version3.length - version1.length, "mehr Zeichen");`,
      },
    },
    {
      id: "ki-16",
      trackId: "ki" as const,
      title: "KI für Code-Erklärungen nutzen",
      summary: "Lass die KI Code erklären, kommentieren und verbessern – dein KI-Coding-Buddy!",
      minutes: 13,
      xp: 60,
      contentMd: `# 💻 KI als Coding-Buddy

> *"Früher musste man Stunden googeln um einen Code-Fehler zu verstehen. Mit KI erklärst du den Code einfach – und bekommst die Antwort in Sekunden!"*

## KI kann mit Code helfen!

Du kannst einer KI **JavaScript-Code zeigen** und sie fragen:
- Was macht dieser Code?
- Warum funktioniert das nicht?
- Wie kann ich das verbessern?
- Erkläre mir diese Zeile

## Prompt-Formeln für Code:

### Code erklären lassen:
\`\`\`
"Erkläre mir diesen JavaScript-Code Zeile für Zeile
in einfacher Sprache. Ich bin Anfänger:

const zahlen = [1, 2, 3];
const doppelt = zahlen.map(z => z * 2);
console.log(doppelt);"
\`\`\`

### Fehler finden lassen:
\`\`\`
"Dieser Code funktioniert nicht. Finde den Fehler
und erkläre warum:

let name = 'Alex'
console.log('Hallo ' + Name);"
\`\`\`

### Code verbessern lassen:
\`\`\`
"Schreibe diesen Code einfacher und kommentiere
jede Zeile auf Deutsch:"
\`\`\`

## Was eine KI SEHR gut kann:
- ✅ Einfachen Code erklären
- ✅ Kleine Fehler finden (Tippfehler, falsche Syntax)
- ✅ Code kommentieren
- ✅ Einfachere Alternativen vorschlagen

## Was du immer selbst prüfen solltest:
- ⚠️ Ob der erklärte Code wirklich das tut was die KI sagt
- ⚠️ Ob der Code sicher ist

> 💡 **Tipp:** Gib der KI immer den **kompletten Code** – nicht nur eine Zeile. Kontext ist alles!`,
      exercise: {
        language: "javascript" as const,
        title: "Code-Erklärung mit KI",
        instructionsMd: `**Deine Aufgabe:**

Schreibe Prompts die eine KI bitten, Code zu erklären und zu verbessern!

1. Fülle \`erklaerungsPrompt\` aus – bitte die KI den Code Zeile für Zeile zu erklären
2. Fülle \`fehlerPrompt\` aus – bitte die KI den Fehler im Buggy-Code zu finden
3. Korrigiere den Fehler im Buggy-Code selbst in \`korrigierterCode\``,
        starterCode: `// Der Code der erklärt werden soll:
const codeBeispiel = \`
const tiere = ["Hund", "Katze", "Vogel"];
const grossbuchstaben = tiere.map(t => t.toUpperCase());
console.log(grossbuchstaben);
\`;

// Prompt um den Code zu erklären:
const erklaerungsPrompt = "Erkläre mir diesen JavaScript-Code ___ in einfacher Sprache für Anfänger: " + codeBeispiel;
// Tipp: Füge ein wie die Erklärung sein soll (Zeile für Zeile? Kurz? Mit Beispiel?)

// Buggy Code mit einem Fehler:
const buggyCode = \`
let begruessung = "Hallo";
console.log(begruessung + " " + Name);  // Fehler: Name vs name
\`;

// Prompt um den Fehler zu finden:
const fehlerPrompt = "___";
// Erkläre der KI was das Problem ist und was sie tun soll

// Korrigierter Code – behebe den Fehler:
const korrigierterCode = \`
let begruessung = "Hallo";
let ___ = "Alex";
console.log(begruessung + " " + ___);
\`;

console.log("Erklärungs-Prompt:", erklaerungsPrompt.substring(0, 70) + "...");
console.log("Fehler-Prompt:", fehlerPrompt.substring(0, 70) + "...");
console.log("Korrigierter Code vorhanden:", korrigierterCode.length > 20);`,
        check: { kind: "contains" as const, needles: ["erklaerungsPrompt", "fehlerPrompt", "korrigierterCode"] },
        hintMd: `Fehler-Prompt: "Dieser JavaScript-Code hat einen Fehler. Finde ihn und erkläre warum: [code]" — Der Fehler: \`Name\` sollte \`name\` heißen (JavaScript unterscheidet Groß- und Kleinschreibung!).`,
        solutionCode: `const codeBeispiel = \`
const tiere = ["Hund", "Katze", "Vogel"];
const grossbuchstaben = tiere.map(t => t.toUpperCase());
console.log(grossbuchstaben);
\`;

const erklaerungsPrompt = "Erkläre mir diesen JavaScript-Code Zeile für Zeile auf Deutsch. Ich bin Anfänger: " + codeBeispiel;

const buggyCode = \`
let begruessung = "Hallo";
console.log(begruessung + " " + Name);
\`;

const fehlerPrompt = "Dieser JavaScript-Code hat einen Fehler. Finde ihn, erkläre warum er falsch ist und zeig die korrigierte Version: " + buggyCode;

const korrigierterCode = \`
let begruessung = "Hallo";
let name = "Alex";
console.log(begruessung + " " + name);
\`;

console.log("Erklärungs-Prompt:", erklaerungsPrompt.substring(0, 70) + "...");
console.log("Fehler-Prompt:", fehlerPrompt.substring(0, 70) + "...");
console.log("Korrigierter Code vorhanden:", korrigierterCode.length > 20);`,
      },
    },
    {
      id: "ki-17",
      trackId: "ki" as const,
      title: "KI-Bias und Fairness",
      summary: "KIs können unfair sein ohne es zu wissen – lerne was Bias bedeutet und wie man es erkennt!",
      minutes: 14,
      xp: 65,
      contentMd: `# ⚖️ KI-Bias und Fairness

> *"Stell dir vor dein Lehrer gibt immer denselben Schülern bessere Noten – egal was sie schreiben. Das wäre unfair. KIs können ähnliche 'blinde Flecken' haben!"*

## Was ist Bias?

**Bias** (zu Deutsch: Voreingenommenheit) bedeutet: Die KI behandelt nicht alle Menschen oder Gruppen gleich fair.

## Woher kommt Bias?

KIs lernen aus riesigen Mengen Text die Menschen geschrieben haben. Und Menschen haben manchmal Vorurteile – diese können in die KI übergehen!

## Beispiele für KI-Bias:
- Eine KI nennt bei "Arzt" häufiger einen Mann als eine Frau
- Eine KI übersetzt Berufe geschlechterspezifisch falsch
- Eine KI versteht bestimmte Dialekte oder Sprachen schlechter
- Eine KI assoziiert bestimmte Namen mit positiven oder negativen Eigenschaften

## Warum ist das wichtig?

| Situation | Wenn KI unfair ist |
|-----------|-------------------|
| Bewerbungen prüfen | Manche Menschen werden benachteiligt |
| Medizinische Diagnosen | Manche Gruppen werden schlechter behandelt |
| Nachrichten filtern | Bestimmte Meinungen werden bevorzugt |

## Wie erkenne ich Bias?

1. **Frage die KI dasselbe** mit unterschiedlichen Namen (Max vs. Fatima)
2. **Vergleiche Antworten** zu verschiedenen Gruppen
3. **Frage kritisch:** Warum antwortet die KI so?

## Was können wir tun?

- ✅ KI-Antworten kritisch hinterfragen
- ✅ Verschiedene Quellen nutzen
- ✅ Diversität in Trainings-Daten fordern
- ✅ Über Bias sprechen und aufklären

> 💡 **Merke:** KI ist kein neutraler Spiegel – sie spiegelt die Welt so wie Menschen sie beschrieben haben. Mit allen Fehlern.`,
      exercise: {
        language: "javascript" as const,
        title: "Bias-Detektor",
        instructionsMd: `**Deine Aufgabe:**

Baue einen **Bias-Test** der prüft ob eine KI unterschiedlich auf verschiedene Namen reagieren würde!

1. Fülle das \`testSzenarien\` Array mit mindestens **3 Szenarien** (gleiche Frage, verschiedene Namen)
2. Bewerte: \`sollteGleichSein: true\` wenn die KI fair antworten sollte
3. Schreibe eine \`biasHypothese\` was du erwartest`,
        starterCode: `// Bias-Test: Gleiche Frage, verschiedene Namen
const testSzenarien = [
  {
    frage: "Ist ___ ein guter Kandidat für die Stelle als Ingenieur?",
    name1: "Max Müller",
    name2: "Fatima Al-Hassan",
    sollteGleichSein: true,
    warum: "Gleiche Qualifikationen sollten gleich bewertet werden – Bias!"
  },
  {
    frage: "___ möchte Schulsprecherin werden. Ist das eine gute Idee?",
    name1: "___",  // Füge einen Namen ein
    name2: "___",  // Füge einen anderen Namen ein
    sollteGleichSein: ___,
    warum: "___"
  },
  {
    frage: "Beschreibe ___ als zukünftige Ärztin.",
    name1: "___",
    name2: "___",
    sollteGleichSein: ___,
    warum: "___"
  },
];

const biasHypothese = "___"; // Was vermutest du? Wird die KI fair sein?

console.log("=== Bias-Test Szenarien ===");
testSzenarien.forEach((s, i) => {
  console.log(\`\\nSzenario \${i + 1}:\`);
  console.log("Vergleich:", s.name1, "vs", s.name2);
  console.log("Sollte gleich sein:", s.sollteGleichSein);
  console.log("Warum:", s.warum);
});
console.log("\\nMeine Hypothese:", biasHypothese);`,
        check: { kind: "contains" as const, needles: ["testSzenarien", "sollteGleichSein", "biasHypothese"] },
        hintMd: `Füge verschiedene Namen ein (z.B. "Emma" vs. "Aysha", "Tom" vs. "Björn"). Deine Hypothese: "Ich vermute die KI könnte unterschiedlich auf Namen aus verschiedenen Kulturen reagieren."`,
        solutionCode: `const testSzenarien = [
  {
    frage: "Ist ___ ein guter Kandidat für die Stelle als Ingenieur?",
    name1: "Max Müller",
    name2: "Fatima Al-Hassan",
    sollteGleichSein: true,
    warum: "Gleiche Qualifikationen sollten gleich bewertet werden – Bias!"
  },
  {
    frage: "___ möchte Schulsprecherin werden. Ist das eine gute Idee?",
    name1: "Emma Schmidt",
    name2: "Aysha Yilmaz",
    sollteGleichSein: true,
    warum: "Herkunft und Name sollten keine Rolle spielen"
  },
  {
    frage: "Beschreibe ___ als zukünftige Ärztin.",
    name1: "Maria Bauer",
    name2: "Björn Karlsson",
    sollteGleichSein: true,
    warum: "Derselbe Beruf sollte unabhängig vom Namen gleich beschrieben werden"
  },
];

const biasHypothese = "Ich vermute die KI könnte unbewusst unterschiedlich auf Namen aus verschiedenen Kulturen reagieren, obwohl alle Menschen gleich fair behandelt werden sollten.";

console.log("=== Bias-Test Szenarien ===");
testSzenarien.forEach((s, i) => {
  console.log(\`\\nSzenario \${i + 1}:\`);
  console.log("Vergleich:", s.name1, "vs", s.name2);
  console.log("Sollte gleich sein:", s.sollteGleichSein);
  console.log("Warum:", s.warum);
});
console.log("\\nMeine Hypothese:", biasHypothese);`,
      },
    },
    {
      id: "ki-18",
      trackId: "ki" as const,
      title: "KI im Alltag – wo steckt KI überall?",
      summary: "KI ist überall – in deinem Handy, in der Schule, im Supermarkt. Entdecke die versteckte KI!",
      minutes: 10,
      xp: 50,
      contentMd: `# 🌍 KI ist überall!

> *"KI ist wie Elektrizität – du siehst sie nicht direkt, aber fast alles was du benutzt läuft damit!"*

## KI in deinem Alltag

Du denkst vielleicht KI ist nur ChatGPT. Aber KI steckt in viel mehr!

## Wo du täglich auf KI triffst:

### 📱 Dein Handy:
- **Autocomplete** – schlägt nächstes Wort vor
- **Gesichts-Entsperrung** – erkennt dein Gesicht
- **Kamera** – verbessert Fotos automatisch
- **Sprachassistent** – Siri, Google Assistent

### 🎵 Streaming:
- **YouTube** empfiehlt Videos die du magst
- **Spotify** erstellt Playlisten für dich
- **Netflix** wählt Serien die passen

### 🛒 Shopping:
- **Amazon** zeigt dir was du kaufen könntest
- **Supermarkt** optimiert Lager mit KI
- **Preise** werden durch KI angepasst

### 🏥 Gesundheit:
- **Diagnose-Hilfe** – KI findet Krankheiten auf Röntgenbildern
- **Sportuhren** erkennen ob du läufst oder schläfst

### 🚗 Verkehr:
- **Google Maps** berechnet besten Weg
- **Ampeln** die den Verkehr optimieren
- **Autos** die selbst einparken

### 🎮 Spiele:
- **Gegner-KI** in Computerspielen
- **NPC-Dialoge** in Rollenspielen

> 💡 **Fun Fact:** Das Netflix-Empfehlungssystem spart Netflix über 1 Milliarde Dollar pro Jahr an verlorenen Abonnenten!`,
      exercise: {
        language: "javascript" as const,
        title: "KI-Entdecker-Karte",
        instructionsMd: `**Deine Aufgabe:**

Erstelle eine **KI-Entdecker-Karte** deines Alltags! Finde in jeder Kategorie mindestens eine KI-Anwendung.

1. Fülle alle leeren Felder in \`meinKIAlltag\` aus (mind. 5 Kategorien mit je 1 Beispiel)
2. Schreibe bei jeder KI-Anwendung was sie genau macht (\`was\`)
3. Gib an ob du das gewusst hast (\`wussteIchNicht: true/false\`)`,
        starterCode: `const meinKIAlltag = {
  handy: {
    anwendung: "Autocomplete beim Tippen",
    was: "Schlägt das nächste Wort vor während ich schreibe",
    wussteIchNicht: false,
  },
  streaming: {
    anwendung: "___",  // Welche Plattform + was sie empfiehlt
    was: "___",
    wussteIchNicht: ___,
  },
  zuhause: {
    anwendung: "___",
    was: "___",
    wussteIchNicht: ___,
  },
  schule: {
    anwendung: "___",
    was: "___",
    wussteIchNicht: ___,
  },
  draussen: {
    anwendung: "___",  // Verkehr, Navi, etc.
    was: "___",
    wussteIchNicht: ___,
  },
};

// Auswertung:
const kategorien = Object.keys(meinKIAlltag);
const ueberraschungen = Object.values(meinKIAlltag).filter(k => k.wussteIchNicht);

console.log(\`🤖 KI in \${kategorien.length} Lebensbereichen gefunden!\`);
kategorien.forEach(k => {
  const info = meinKIAlltag[k];
  console.log(\`\\n📍 \${k.toUpperCase()}: \${info.anwendung}\`);
  console.log(\`   → \${info.was}\`);
});
console.log(\`\\n💡 \${ueberraschungen.length} davon wusste ich nicht!\`);`,
        check: { kind: "contains" as const, needles: ["meinKIAlltag", "wussteIchNicht", "anwendung"] },
        hintMd: `Beispiele: streaming = "YouTube empfiehlt Videos die ich mag", zuhause = "Smart-Speaker erkennt meine Stimme", schule = "Rechtschreibprüfung in der Textverarbeitung".`,
        solutionCode: `const meinKIAlltag = {
  handy: {
    anwendung: "Autocomplete beim Tippen",
    was: "Schlägt das nächste Wort vor während ich schreibe",
    wussteIchNicht: false,
  },
  streaming: {
    anwendung: "YouTube empfiehlt Videos",
    was: "Analysiert was ich schaue und schlägt ähnliche Videos vor",
    wussteIchNicht: false,
  },
  zuhause: {
    anwendung: "Smart-Speaker",
    was: "Erkennt meine Stimme und antwortet auf Fragen",
    wussteIchNicht: true,
  },
  schule: {
    anwendung: "Rechtschreibprüfung",
    was: "Erkennt Fehler und schlägt Korrekturen vor",
    wussteIchNicht: true,
  },
  draussen: {
    anwendung: "Google Maps Navigation",
    was: "Berechnet schnellste Route basierend auf Echtzeit-Verkehr",
    wussteIchNicht: false,
  },
};

const kategorien = Object.keys(meinKIAlltag);
const ueberraschungen = Object.values(meinKIAlltag).filter(k => k.wussteIchNicht);

console.log(\`🤖 KI in \${kategorien.length} Lebensbereichen gefunden!\`);
kategorien.forEach(k => {
  const info = meinKIAlltag[k];
  console.log(\`\\n📍 \${k.toUpperCase()}: \${info.anwendung}\`);
  console.log(\`   → \${info.was}\`);
});
console.log(\`\\n💡 \${ueberraschungen.length} davon wusste ich nicht!\`);`,
      },
    },
    {
      id: "ki-19",
      trackId: "ki" as const,
      title: "Eigenen KI-Assistenten designen",
      summary: "Erfinde deinen eigenen KI-Assistenten mit einem System-Prompt – du bist der Entwickler!",
      minutes: 15,
      xp: 70,
      contentMd: `# 🛠️ Eigenen KI-Assistenten designen

> *"Hinter jedem KI-Chatbot steckt ein geheimer 'System-Prompt' der definiert wer die KI ist. Heute wirst du einer schreiben!"*

## Was ist ein System-Prompt?

Ein **System-Prompt** ist ein versteckter Prompt der **vor dem Gespräch** an die KI gesendet wird. Er legt fest:
- Wie die KI heißt
- Was ihre Persönlichkeit ist
- Was sie tun soll und was nicht
- Wie sie antwortet

## Beispiel System-Prompt für einen Lern-Assistenten:

\`\`\`
Du bist "LernMax", ein freundlicher KI-Assistent für Schüler
zwischen 10 und 14 Jahren.

Deine Persönlichkeit:
- Du bist geduldig und ermutigend
- Du erklärst immer in einfacher Sprache
- Du nutzt viele Beispiele aus dem Alltag

Deine Regeln:
- Antworte IMMER auf Deutsch
- Wenn du etwas nicht weißt, sage es ehrlich
- Gib keine Hausaufgaben-Antworten direkt – erkläre stattdessen
- Frage nach ob das Kind die Erklärung verstanden hat

Themen die du beherrschst:
- Mathe, Deutsch, Englisch, Sachkunde
\`\`\`

## Bausteine eines guten System-Prompts:

| Baustein | Beispiel |
|----------|---------|
| **Name** | "Du bist MaxBot" |
| **Zweck** | "Du hilfst Kindern beim Lernen" |
| **Persönlichkeit** | "Du bist lustig und geduldig" |
| **Regeln** | "Antworte immer auf Deutsch" |
| **Grenzen** | "Sprich NICHT über Gewalt" |
| **Fähigkeiten** | "Du kennst dich mit Mathe aus" |

> 💡 **Profi-Tipp:** Gute System-Prompts sind präzise aber nicht zu lang. Zu viele Regeln verwirren die KI!`,
      exercise: {
        language: "javascript" as const,
        title: "Dein eigener KI-Assistent",
        instructionsMd: `**Deine Aufgabe:**

Designe deinen **eigenen KI-Assistenten** mit einem vollständigen System-Prompt!

1. Fülle das \`assistent\` Objekt komplett aus (Name, Zweck, Persönlichkeit, Regeln, Fähigkeiten)
2. Füge mindestens **3 Regeln** und **3 Fähigkeiten** hinzu
3. Baue daraus automatisch den \`systemPrompt\` String`,
        starterCode: `// Designe deinen KI-Assistenten:
const assistent = {
  name: "___",         // Name deines Assistenten
  zweck: "___",        // Was soll er tun?
  zielgruppe: "Kinder zwischen 10 und 14 Jahren",
  persoenlichkeit: ["___", "___", "___"], // 3 Eigenschaften
  regeln: [
    "Antworte immer auf Deutsch",
    "___",   // Regel 2
    "___",   // Regel 3
  ],
  faehigkeiten: [
    "___",   // Was kann er?
    "___",
    "___",
  ],
  verboten: "___",  // Was darf er NIEMALS tun?
};

// Baue den System-Prompt automatisch:
const systemPrompt = \`
Du bist "\${assistent.name}", \${assistent.zweck}

Zielgruppe: \${assistent.zielgruppe}

Deine Persönlichkeit:
\${assistent.persoenlichkeit.map(p => "- " + p).join("\\n")}

Deine Regeln:
\${assistent.regeln.map(r => "- " + r).join("\\n")}

Deine Fähigkeiten:
\${assistent.faehigkeiten.map(f => "- " + f).join("\\n")}

VERBOTEN: \${assistent.verboten}
\`.trim();

console.log("=== Mein KI-Assistent ===");
console.log("Name:", assistent.name);
console.log("Regeln:", assistent.regeln.length);
console.log("\\n=== System-Prompt ===");
console.log(systemPrompt);`,
        check: { kind: "contains" as const, needles: ["assistent", "systemPrompt", "regeln", "faehigkeiten"] },
        hintMd: `Beispiel: name = "CodeBot", zweck = "hilft Kindern beim Programmieren lernen", persoenlichkeit = ["geduldig", "motivierend", "erklärt mit Beispielen"], verboten = "Beleidigungen oder unpassende Inhalte"`,
        solutionCode: `const assistent = {
  name: "LernStar",
  zweck: "hilft Kindern beim Lernen für die Schule",
  zielgruppe: "Kinder zwischen 10 und 14 Jahren",
  persoenlichkeit: ["geduldig und ermutigend", "erklärt mit lustigen Beispielen", "feiert kleine Erfolge"],
  regeln: [
    "Antworte immer auf Deutsch",
    "Gib keine direkten Hausaufgaben-Antworten – erkläre stattdessen",
    "Frage nach ob das Kind verstanden hat",
  ],
  faehigkeiten: [
    "Mathe und Geometrie erklären",
    "Deutsch-Aufsätze verbessern helfen",
    "Englisch-Vokabeln üben",
  ],
  verboten: "Persönliche Daten abfragen oder unpassende Inhalte zeigen",
};

const systemPrompt = \`
Du bist "\${assistent.name}", \${assistent.zweck}

Zielgruppe: \${assistent.zielgruppe}

Deine Persönlichkeit:
\${assistent.persoenlichkeit.map(p => "- " + p).join("\\n")}

Deine Regeln:
\${assistent.regeln.map(r => "- " + r).join("\\n")}

Deine Fähigkeiten:
\${assistent.faehigkeiten.map(f => "- " + f).join("\\n")}

VERBOTEN: \${assistent.verboten}
\`.trim();

console.log("=== Mein KI-Assistent ===");
console.log("Name:", assistent.name);
console.log("Regeln:", assistent.regeln.length);
console.log("\\n=== System-Prompt ===");
console.log(systemPrompt);`,
      },
    },
    {
      id: "ki-20",
      trackId: "ki" as const,
      title: "🏆 Boss Quest: Kompletter KI-Workflow",
      summary: "Zeige alles was du über KI gelernt hast – System-Prompt, User-Prompt und Sicherheitscheck in einem!",
      minutes: 30,
      xp: 150,
      contentMd: `# 🏆 Boss Quest: Kompletter KI-Workflow

> *"Ein echter KI-Ingenieur baut nicht nur Prompts – er baut ganze Systeme. Heute bist du der Ingenieur!"*

## Was du heute baust:

Ein **komplettes KI-System** mit drei Teilen:

### Teil 1: System-Prompt
Definiert was deine KI ist und wie sie sich verhält.

### Teil 2: User-Prompt Pipeline
Verschiedene Prompt-Techniken kombiniert:
- Few-Shot Beispiele
- Chain-of-Thought Anweisung
- Rollen-Kontext

### Teil 3: Sicherheits-Check
Automatische Prüfung ob Prompts sicher sind.

## Der vollständige Workflow:

\`\`\`
[System-Prompt] → definiert die KI
      ↓
[User-Prompt] → Few-Shot + Chain-of-Thought + Kontext
      ↓
[Sicherheits-Check] → Prüft auf gefährliche Inhalte
      ↓
[Ausgabe] → Bereinigte, sichere Antwort
\`\`\`

## Checkliste für deinen Boss Quest:
- ✅ System-Prompt mit Name, Regeln, Persönlichkeit
- ✅ Few-Shot Prompt mit mindestens 2 Beispielen
- ✅ Chain-of-Thought Anweisung
- ✅ Sicherheits-Filter der verbotene Wörter erkennt
- ✅ Vollständige Ausgabe des Systems

## Was ein KI-Profi weiß:

| Konzept | Bedeutung |
|---------|----------|
| System-Prompt | Geheime Grundeinstellung der KI |
| Few-Shot | Lernen durch Beispiele |
| Chain-of-Thought | Schritt-für-Schritt denken |
| Halluzination | KI erfindet falsche Fakten |
| Bias | Unfaire Vorurteile in der KI |
| Safety Filter | Sicherheitsprüfung für Prompts |

> 💡 **Du hast das KI-Track abgeschlossen! Du bist jetzt ein KI-Prompt-Ingenieur!**`,
      exercise: {
        language: "javascript" as const,
        title: "Vollständiges KI-System bauen",
        instructionsMd: `**Deine finale Aufgabe:**

Baue ein **komplettes KI-Workflow-System** mit allen drei Teilen!

**Teil 1 – System-Prompt:** Designe einen KI-Assistenten (Name, Zweck, Regeln)

**Teil 2 – Prompt-Pipeline:** Baue einen Prompt der Few-Shot + Chain-of-Thought kombiniert

**Teil 3 – Sicherheits-Check:** Schreibe eine Funktion die Prompts auf verbotene Begriffe prüft

Alle drei Teile müssen vorhanden und funktionsfähig sein!`,
        starterCode: `// ============================================
// 🏆 BOSS QUEST: Kompletter KI-Workflow
// ============================================

// --- TEIL 1: SYSTEM-PROMPT ---
const systemPrompt = {
  name: "___",
  zweck: "___",
  persoenlichkeit: ["___", "___"],
  regeln: [
    "Antworte immer auf Deutsch",
    "___",
    "___",
  ],
  verboten: ["Passwörter", "Adressen", "___"],
};

// --- TEIL 2: PROMPT-PIPELINE (Few-Shot + Chain-of-Thought) ---
const fewShotBeispiele = [
  { eingabe: "Was ist 2 + 2?", ausgabe: "Schritt 1: 2 + 2 = 4. Antwort: 4" },
  { eingabe: "___", ausgabe: "___" },  // Zweites Beispiel!
];

const userAnfrage = "Was ist 15 × 3?";

// Baue den vollständigen Prompt:
let vollstaendigerPrompt = \`System: Du bist \${systemPrompt.name}. \${systemPrompt.zweck}\\n\\n\`;
vollstaendigerPrompt += "Beispiele:\\n";
fewShotBeispiele.forEach(b => {
  vollstaendigerPrompt += \`Frage: \${b.eingabe}\\nAntwort: \${b.ausgabe}\\n\\n\`;
});
vollstaendigerPrompt += \`Frage: \${userAnfrage}\\nDenke Schritt für Schritt und zeige deinen Rechenweg.\`;

// --- TEIL 3: SICHERHEITS-CHECK ---
function sicherheitsCheck(prompt) {
  const verboteneWoerter = ["Passwort", "Adresse", "Telefon", ...systemPrompt.verboten];
  const gefunden = verboteneWoerter.filter(w =>
    prompt.toLowerCase().includes(w.toLowerCase())
  );
  return {
    sicher: gefunden.length === 0,
    gefundeneProbleme: gefunden,
  };
}

// --- AUSGABE ---
const check = sicherheitsCheck(vollstaendigerPrompt);
console.log("=== 🤖 KI-SYSTEM GESTARTET ===");
console.log("Assistent:", systemPrompt.name);
console.log("Regeln:", systemPrompt.regeln.length);
console.log("\\n=== 📝 VOLLSTÄNDIGER PROMPT ===");
console.log(vollstaendigerPrompt);
console.log("\\n=== 🔒 SICHERHEITS-CHECK ===");
console.log("Sicher:", check.sicher ? "✅ JA" : "❌ NEIN");
if (!check.sicher) console.log("Probleme:", check.gefundeneProbleme);`,
        check: { kind: "contains" as const, needles: ["systemPrompt", "fewShotBeispiele", "sicherheitsCheck", "vollstaendigerPrompt"] },
        hintMd: `Zweites Few-Shot Beispiel: \`{ eingabe: "Was ist 10 ÷ 2?", ausgabe: "Schritt 1: 10 ÷ 2 = 5. Antwort: 5" }\` — Vergiss nicht alle drei Lücken im systemPrompt zu füllen!`,
        solutionCode: `// ============================================
// 🏆 BOSS QUEST: Kompletter KI-Workflow
// ============================================

// --- TEIL 1: SYSTEM-PROMPT ---
const systemPrompt = {
  name: "MathStar",
  zweck: "hilft Schülerinnen und Schülern beim Mathematik lernen",
  persoenlichkeit: ["geduldig und ermutigend", "erklärt jeden Schritt genau"],
  regeln: [
    "Antworte immer auf Deutsch",
    "Zeige immer den Lösungsweg Schritt für Schritt",
    "Frage nach ob das Kind verstanden hat",
  ],
  verboten: ["Passwörter", "Adressen", "persönliche Daten"],
};

// --- TEIL 2: PROMPT-PIPELINE ---
const fewShotBeispiele = [
  { eingabe: "Was ist 2 + 2?", ausgabe: "Schritt 1: 2 + 2 = 4. Antwort: 4" },
  { eingabe: "Was ist 10 ÷ 2?", ausgabe: "Schritt 1: 10 ÷ 2 = 5. Antwort: 5" },
];

const userAnfrage = "Was ist 15 × 3?";

let vollstaendigerPrompt = \`System: Du bist \${systemPrompt.name}. \${systemPrompt.zweck}\\n\\n\`;
vollstaendigerPrompt += "Beispiele:\\n";
fewShotBeispiele.forEach(b => {
  vollstaendigerPrompt += \`Frage: \${b.eingabe}\\nAntwort: \${b.ausgabe}\\n\\n\`;
});
vollstaendigerPrompt += \`Frage: \${userAnfrage}\\nDenke Schritt für Schritt und zeige deinen Rechenweg.\`;

// --- TEIL 3: SICHERHEITS-CHECK ---
function sicherheitsCheck(prompt) {
  const verboteneWoerter = ["Passwort", "Adresse", "Telefon", ...systemPrompt.verboten];
  const gefunden = verboteneWoerter.filter(w =>
    prompt.toLowerCase().includes(w.toLowerCase())
  );
  return {
    sicher: gefunden.length === 0,
    gefundeneProbleme: gefunden,
  };
}

// --- AUSGABE ---
const check = sicherheitsCheck(vollstaendigerPrompt);
console.log("=== 🤖 KI-SYSTEM GESTARTET ===");
console.log("Assistent:", systemPrompt.name);
console.log("Regeln:", systemPrompt.regeln.length);
console.log("\\n=== 📝 VOLLSTÄNDIGER PROMPT ===");
console.log(vollstaendigerPrompt);
console.log("\\n=== 🔒 SICHERHEITS-CHECK ===");
console.log("Sicher:", check.sicher ? "✅ JA" : "❌ NEIN");
if (!check.sicher) console.log("Probleme:", check.gefundeneProbleme);`,
      },
    },
  ],
};

const SQL: Track = {
  id: "sql",
  title: "SQL & Daten",
  emoji: "🗄️",
  description: "Lerne, wie du Datenbanken abfragst und riesige Datemengen blitzschnell findest – wie ein echter Daten-Detektiv!",
  color: "sky",
  recommendedAge: "ab 12 Jahren",
  lessons: [
    {
      id: "sql-01",
      trackId: "sql",
      title: "🔍 Alle Daten anzeigen mit SELECT *",
      summary: "Lerne den einfachsten SQL-Befehl: alle Daten aus einer Tabelle abrufen.",
      minutes: 8,
      xp: 30,
      contentMd: `# SELECT * – Alles auf einmal!

SQL ist die Sprache, mit der du Datenbanken befragst – wie ein Suchbefehl für riesige Tabellen.

Der einfachste Befehl ist \`SELECT * FROM tabellenname\` – das \`*\` bedeutet "alles".

\`\`\`sql
SELECT * FROM tiere;
\`\`\`

Das zeigt dir **alle Zeilen und alle Spalten** der Tabelle \`tiere\`.

> 💡 Vergiss das Semikolon \`;\` am Ende nicht – es sagt SQL: "Befehl fertig!"`,
      exercise: {
        language: "sql",
        title: "Zeig alle Tiere!",
        instructionsMd: `**Deine Aufgabe:**\n\nZeige alle Daten aus der Tabelle \`tiere\` an.\n\nErsetze die Lücke \`__\` mit dem richtigen Tabellennamen.`,
        starterCode: "SELECT * FROM __;",
        check: { kind: "sql_result_includes", expected: "Elefant" },
        hintMd: "Der Tabellenname lautet `tiere`. Schreib: `SELECT * FROM tiere;`",
        solutionCode: "SELECT * FROM tiere;",
      },
    },
    {
      id: "sql-02",
      trackId: "sql",
      title: "🎯 Bestimmte Spalten auswählen",
      summary: "Wähle gezielt nur die Spalten aus, die du wirklich brauchst.",
      minutes: 8,
      xp: 35,
      contentMd: `# Nur bestimmte Spalten anzeigen

Statt \`*\` (alles) kannst du genau sagen, welche Spalten du sehen willst.

\`\`\`sql
SELECT name, art FROM tiere;
\`\`\`

Schreibe einfach die Spaltennamen nach \`SELECT\`, getrennt durch Kommas.

Das ist nützlich, wenn eine Tabelle viele Spalten hat und du nur bestimmte Infos brauchst.

> 💡 Groß- und Kleinschreibung bei Spaltennamen ist egal: \`Name\` und \`name\` funktionieren beide.`,
      exercise: {
        language: "sql",
        title: "Nur Name und Art der Tiere!",
        instructionsMd: `**Deine Aufgabe:**\n\nZeige aus der Tabelle \`tiere\` nur die Spalten \`name\` und \`art\` an.`,
        starterCode: "SELECT __, __ FROM tiere;",
        check: { kind: "sql_result_includes", expected: "Säugetier" },
        hintMd: "Schreib beide Spaltennamen nach SELECT:\n\n`SELECT name, art FROM tiere;`",
        solutionCode: "SELECT name, art FROM tiere;",
      },
    },
    {
      id: "sql-03",
      trackId: "sql",
      title: "🔎 Filtern mit WHERE",
      summary: "Nutze WHERE, um nur die Zeilen anzuzeigen, die eine Bedingung erfüllen.",
      minutes: 10,
      xp: 40,
      contentMd: `# WHERE – Der Filter-Befehl

Mit \`WHERE\` kannst du Zeilen filtern – ähnlich wie bei einer Suchfunktion.

\`\`\`sql
SELECT * FROM tiere WHERE art = 'Säugetier';
\`\`\`

Nur Zeilen, bei denen \`art\` gleich \`'Säugetier'\` ist, werden angezeigt.

Textwerte musst du immer in **einfache Anführungszeichen** \`' '\` setzen.

> 💡 Das Gleichheitszeichen \`=\` prüft: "Ist dieser Wert genau gleich?"`,
      exercise: {
        language: "sql",
        title: "Zeig alle Vögel!",
        instructionsMd: `**Deine Aufgabe:**\n\nZeige alle Tiere aus der Tabelle \`tiere\` an, bei denen \`art\` gleich \`'Vogel'\` ist.`,
        starterCode: "SELECT * FROM tiere WHERE __ = '__';",
        check: { kind: "sql_result_includes", expected: "Adler" },
        hintMd: "Filtere nach der Spalte `art`:\n\n`SELECT * FROM tiere WHERE art = 'Vogel';`",
        solutionCode: "SELECT * FROM tiere WHERE art = 'Vogel';",
      },
    },
    {
      id: "sql-04",
      trackId: "sql",
      title: "📊 Sortieren mit ORDER BY",
      summary: "Sortiere deine Ergebnisse auf- oder absteigend mit ORDER BY.",
      minutes: 10,
      xp: 40,
      contentMd: `# ORDER BY – Sortieren leicht gemacht

Mit \`ORDER BY\` kannst du deine Ergebnisse sortieren.

\`\`\`sql
SELECT name, punkte FROM schueler ORDER BY punkte DESC;
\`\`\`

- \`DESC\` = absteigend (höchster Wert zuerst)
- \`ASC\` = aufsteigend (niedrigster Wert zuerst, das ist der Standard)

So siehst du sofort, wer die meisten Punkte hat – oder die wenigsten.

> 💡 \`DESC\` kommt von "descending" (englisch für "absteigend").`,
      exercise: {
        language: "sql",
        title: "Wer hat die meisten Punkte?",
        instructionsMd: `**Deine Aufgabe:**\n\nZeige \`name\` und \`punkte\` aus der Tabelle \`schueler\` an, sortiert nach \`punkte\` absteigend.`,
        starterCode: "SELECT name, punkte FROM schueler ORDER BY __ __;",
        check: { kind: "sql_result_includes", expected: "Julia" },
        hintMd: "Nutze `ORDER BY punkte DESC`:\n\n`SELECT name, punkte FROM schueler ORDER BY punkte DESC;`",
        solutionCode: "SELECT name, punkte FROM schueler ORDER BY punkte DESC;",
      },
    },
    {
      id: "sql-05",
      trackId: "sql",
      title: "✂️ Nur die ersten N Zeilen mit LIMIT",
      summary: "Begrenze die Anzahl der angezeigten Ergebnisse mit LIMIT.",
      minutes: 8,
      xp: 35,
      contentMd: `# LIMIT – Nur so viele Ergebnisse wie du willst

Mit \`LIMIT\` kannst du festlegen, wie viele Zeilen maximal angezeigt werden.

\`\`\`sql
SELECT name, punkte FROM schueler ORDER BY punkte DESC LIMIT 3;
\`\`\`

Das zeigt dir nur die **Top 3** Schüler mit den meisten Punkten!

LIMIT kommt immer ganz am **Ende** der Abfrage.

> 💡 Kombiniere ORDER BY + LIMIT, um z.B. "die 5 schwersten Tiere" zu finden.`,
      exercise: {
        language: "sql",
        title: "Die Top 5 Länder nach Einwohnern!",
        instructionsMd: `**Deine Aufgabe:**\n\nZeige \`name\` und \`einwohner_mio\` aus \`laender\`, sortiert nach Einwohnern absteigend, aber nur die ersten **5** Einträge.`,
        starterCode: "SELECT name, einwohner_mio FROM laender ORDER BY einwohner_mio DESC LIMIT __;",
        check: { kind: "sql_result_includes", expected: "Brasilien" },
        hintMd: "Ersetze `__` mit der Zahl 5:\n\n`SELECT name, einwohner_mio FROM laender ORDER BY einwohner_mio DESC LIMIT 5;`",
        solutionCode: "SELECT name, einwohner_mio FROM laender ORDER BY einwohner_mio DESC LIMIT 5;",
      },
    },
    {
      id: "sql-06",
      trackId: "sql",
      title: "🔢 Zählen mit COUNT()",
      summary: "Zähle, wie viele Zeilen eine Bedingung erfüllen, mit der COUNT()-Funktion.",
      minutes: 10,
      xp: 45,
      contentMd: `# COUNT() – Wie viele gibt es?

\`COUNT()\` zählt die Anzahl der Zeilen in einer Abfrage.

\`\`\`sql
SELECT COUNT(*) FROM tiere;
\`\`\`

Das gibt dir die Gesamtzahl aller Tiere zurück.

Du kannst auch mit \`WHERE\` kombinieren:

\`\`\`sql
SELECT COUNT(*) FROM tiere WHERE art = 'Säugetier';
\`\`\`

> 💡 \`COUNT(*)\` zählt alle Zeilen; \`COUNT(spalte)\` zählt nur Zeilen, wo diese Spalte nicht leer ist.`,
      exercise: {
        language: "sql",
        title: "Wie viele Schüler gibt es?",
        instructionsMd: `**Deine Aufgabe:**\n\nZähle, wie viele Schüler in der Tabelle \`schueler\` vorhanden sind.`,
        starterCode: "SELECT __(*)  FROM schueler;",
        check: { kind: "sql_result_includes", expected: "8" },
        hintMd: "Nutze `COUNT(*)`:\n\n`SELECT COUNT(*) FROM schueler;`",
        solutionCode: "SELECT COUNT(*) FROM schueler;",
      },
    },
    {
      id: "sql-07",
      trackId: "sql",
      title: "🔢 WHERE mit Zahlen",
      summary: "Filtere Daten mit Zahlenbedingungen wie größer als oder kleiner als.",
      minutes: 10,
      xp: 40,
      contentMd: `# WHERE mit Zahlen – Vergleiche nutzen

Bei Zahlen kannst du mehr als nur \`=\` verwenden:

| Operator | Bedeutung |
|----------|-----------|
| \`=\`    | gleich |
| \`>\`    | größer als |
| \`<\`    | kleiner als |
| \`>=\`   | größer oder gleich |
| \`<=\`   | kleiner oder gleich |

\`\`\`sql
SELECT name, punkte FROM schueler WHERE punkte > 80;
\`\`\`

> 💡 Bei Zahlen brauchst du **keine** Anführungszeichen!`,
      exercise: {
        language: "sql",
        title: "Schüler mit über 80 Punkten!",
        instructionsMd: `**Deine Aufgabe:**\n\nZeige \`name\` und \`punkte\` aller Schüler aus \`schueler\`, die **mehr als 80 Punkte** haben.`,
        starterCode: "SELECT name, punkte FROM schueler WHERE punkte __ 80;",
        check: { kind: "sql_result_includes", expected: "Mia" },
        hintMd: "Nutze den `>` Operator:\n\n`SELECT name, punkte FROM schueler WHERE punkte > 80;`",
        solutionCode: "SELECT name, punkte FROM schueler WHERE punkte > 80;",
      },
    },
    {
      id: "sql-08",
      trackId: "sql",
      title: "🔗 Mehrere Bedingungen mit AND und OR",
      summary: "Kombiniere mehrere Filterbedingungen mit AND und OR.",
      minutes: 12,
      xp: 50,
      contentMd: `# AND und OR – Mehrere Bedingungen

Du kannst mehrere \`WHERE\`-Bedingungen verbinden:

- \`AND\` – **beide** Bedingungen müssen zutreffen
- \`OR\` – **mindestens eine** Bedingung muss zutreffen

\`\`\`sql
SELECT name, klasse, punkte
FROM schueler
WHERE klasse = 6 AND punkte > 80;
\`\`\`

\`\`\`sql
SELECT * FROM tiere WHERE art = 'Vogel' OR art = 'Reptil';
\`\`\`

> 💡 Bei Unklarheit: Klammern \`()\` helfen, die Reihenfolge deutlich zu machen.`,
      exercise: {
        language: "sql",
        title: "Schüler aus Klasse 7 oder 8 mit vielen Punkten!",
        instructionsMd: `**Deine Aufgabe:**\n\nZeige alle Schüler aus \`schueler\`, die in Klasse 7 **oder** Klasse 8 sind **und** mehr als 80 Punkte haben.`,
        starterCode: "SELECT name, klasse, punkte FROM schueler WHERE (klasse = 7 __ klasse = 8) __ punkte > 80;",
        check: { kind: "sql_result_includes", expected: "Julia" },
        hintMd: "Nutze `OR` für die Klassen und `AND` für die Punkte:\n\n`SELECT name, klasse, punkte FROM schueler WHERE (klasse = 7 OR klasse = 8) AND punkte > 80;`",
        solutionCode: "SELECT name, klasse, punkte FROM schueler WHERE (klasse = 7 OR klasse = 8) AND punkte > 80;",
      },
    },
    {
      id: "sql-09",
      trackId: "sql",
      title: "📐 MIN, MAX und AVG – Statistik-Funktionen",
      summary: "Berechne Minimum, Maximum und Durchschnitt mit Aggregatfunktionen.",
      minutes: 12,
      xp: 50,
      contentMd: `# MIN, MAX, AVG – Statistik mit SQL

SQL kann direkt Berechnungen für dich durchführen:

| Funktion | Was sie macht |
|----------|--------------|
| \`MIN(spalte)\` | Kleinster Wert |
| \`MAX(spalte)\` | Größter Wert |
| \`AVG(spalte)\` | Durchschnitt |
| \`SUM(spalte)\` | Summe aller Werte |

\`\`\`sql
SELECT MIN(punkte), MAX(punkte), AVG(punkte) FROM schueler;
\`\`\`

> 💡 Du kannst mehrere Aggregat-Funktionen in einer Abfrage kombinieren!`,
      exercise: {
        language: "sql",
        title: "Wie schwer ist das schwerste Tier?",
        instructionsMd: `**Deine Aufgabe:**\n\nFinde das **schwerste** Tier aus \`tiere\` – zeige den maximalen Wert der Spalte \`gewicht_kg\`.`,
        starterCode: "SELECT __(gewicht_kg) FROM tiere;",
        check: { kind: "sql_result_includes", expected: "5000" },
        hintMd: "Nutze `MAX()`:\n\n`SELECT MAX(gewicht_kg) FROM tiere;`",
        solutionCode: "SELECT MAX(gewicht_kg) FROM tiere;",
      },
    },
    {
      id: "sql-10",
      trackId: "sql",
      title: "📦 Gruppieren mit GROUP BY",
      summary: "Gruppiere Daten nach einer Spalte und wende Aggregatfunktionen auf jede Gruppe an.",
      minutes: 15,
      xp: 60,
      contentMd: `# GROUP BY – Daten gruppieren

Mit \`GROUP BY\` kannst du Zeilen zu Gruppen zusammenfassen und Berechnungen für jede Gruppe durchführen.

\`\`\`sql
SELECT art, COUNT(*) FROM tiere GROUP BY art;
\`\`\`

Das zählt, wie viele Tiere es pro Tierart gibt – Säugetiere, Vögel und Reptilien jeweils getrennt.

\`\`\`sql
SELECT klasse, AVG(punkte) FROM schueler GROUP BY klasse;
\`\`\`

> 💡 Nach \`GROUP BY\` darf \`SELECT\` nur Spalten enthalten, nach denen du gruppierst, oder Aggregatfunktionen!`,
      exercise: {
        language: "sql",
        title: "Wie viele Tiere pro Tierart?",
        instructionsMd: `**Deine Aufgabe:**\n\nZeige für jede \`art\` in der Tabelle \`tiere\`, wie viele Tiere es gibt. Nutze \`GROUP BY\`.`,
        starterCode: "SELECT art, COUNT(*) FROM tiere GROUP BY __;",
        check: { kind: "sql_result_includes", expected: "Säugetier" },
        hintMd: "Gruppiere nach der Spalte `art`:\n\n`SELECT art, COUNT(*) FROM tiere GROUP BY art;`",
        solutionCode: "SELECT art, COUNT(*) FROM tiere GROUP BY art;",
      },
    },
    {
      id: "sql-11",
      trackId: "sql" as const,
      title: "🔍 Muster suchen mit LIKE",
      summary: "Suche nach Texten, die einem Muster entsprechen, mit dem LIKE-Operator und Platzhaltern.",
      minutes: 10,
      xp: 45,
      contentMd: `# LIKE – Muster im Text finden

Mit \`LIKE\` kannst du nach Texten suchen, die einem bestimmten Muster entsprechen – wie eine Wildcard-Suche!

Das Prozentzeichen \`%\` steht für **beliebig viele** (auch null) Zeichen:

\`\`\`sql
SELECT name FROM tiere WHERE name LIKE 'E%';
\`\`\`

Das findet alle Tiere, deren Name mit **"E"** beginnt (z.B. "Elefant").

\`\`\`sql
SELECT name FROM schueler WHERE name LIKE '%a';
\`\`\`

Das findet alle Namen, die mit **"a"** enden (z.B. "Mia", "Lena", "Sara").

\`\`\`sql
SELECT name FROM laender WHERE name LIKE '%an%';
\`\`\`

Das \`%..%\` findet alles, das "an" **irgendwo** enthält.

> 💡 LIKE unterscheidet in SQLite nicht zwischen Groß- und Kleinschreibung – \`'e%'\` findet also auch "Elefant"!`,
      exercise: {
        language: "sql" as const,
        title: "Alle Tiere mit 'S' am Anfang!",
        instructionsMd: "**Deine Aufgabe:**\n\nZeige alle Tiere aus `tiere`, deren `name` mit dem Buchstaben **'S'** beginnt.\n\nNutze den `LIKE`-Operator mit dem richtigen Muster.",
        starterCode: "SELECT name, art FROM tiere WHERE name LIKE '__%';",
        check: { kind: "sql_result_includes" as const, expected: "Schildkröte" },
        hintMd: "Das Muster für 'beginnt mit S' ist `'S%'`:\n\n`SELECT name, art FROM tiere WHERE name LIKE 'S%';`",
        solutionCode: "SELECT name, art FROM tiere WHERE name LIKE 'S%';",
      },
    },
    {
      id: "sql-12",
      trackId: "sql" as const,
      title: "🚫 Doppelte entfernen mit DISTINCT",
      summary: "Entferne doppelte Werte aus deinen Ergebnissen mit dem DISTINCT-Schlüsselwort.",
      minutes: 8,
      xp: 40,
      contentMd: `# DISTINCT – Nur einmalige Werte

Manchmal kommen Werte in einer Spalte mehrmals vor. Mit \`DISTINCT\` siehst du jeden Wert nur **einmal**.

\`\`\`sql
SELECT DISTINCT art FROM tiere;
\`\`\`

Statt alle 7 Zeilen zu zeigen, siehst du jetzt nur die drei verschiedenen Tierarten: Säugetier, Vogel, Reptil.

\`\`\`sql
SELECT DISTINCT lieblingsfach FROM schueler;
\`\`\`

Das zeigt alle verschiedenen Lieblingsfächer – ohne Wiederholungen.

> 💡 \`DISTINCT\` steht immer direkt nach \`SELECT\` – vor den Spaltennamen.`,
      exercise: {
        language: "sql" as const,
        title: "Welche Kontinente gibt es?",
        instructionsMd: "**Deine Aufgabe:**\n\nZeige alle **verschiedenen** Kontinente aus der Tabelle `laender` – jeder Kontinent soll nur einmal erscheinen.\n\nNutze `DISTINCT`.",
        starterCode: "SELECT __ kontinent FROM laender;",
        check: { kind: "sql_result_includes" as const, expected: "Asien" },
        hintMd: "Füge `DISTINCT` nach `SELECT` ein:\n\n`SELECT DISTINCT kontinent FROM laender;`",
        solutionCode: "SELECT DISTINCT kontinent FROM laender;",
      },
    },
    {
      id: "sql-13",
      trackId: "sql" as const,
      title: "🏷️ Spalten umbenennen mit AS",
      summary: "Gib deinen Spalten in der Ausgabe einen eigenen Namen mit dem AS-Schlüsselwort.",
      minutes: 8,
      xp: 40,
      contentMd: `# AS – Eigene Namen für Spalten

Mit \`AS\` kannst du einer Spalte in der Ausgabe einen neuen Namen geben – einen sogenannten **Alias**.

\`\`\`sql
SELECT name, punkte AS ergebnis FROM schueler;
\`\`\`

Die Spalte \`punkte\` heißt in der Ausgabe jetzt \`ergebnis\`.

Das ist besonders nützlich bei Berechnungen oder langen Funktionsnamen:

\`\`\`sql
SELECT art, COUNT(*) AS anzahl FROM tiere GROUP BY art;
\`\`\`

Statt der hässlichen Spaltenbezeichnung \`COUNT(*)\` siehst du jetzt \`anzahl\` – viel lesbarer!

Du kannst auch einen Alias mit Leerzeichen verwenden, indem du ihn in Anführungszeichen setzt:

\`\`\`sql
SELECT name, einwohner_mio AS "Einwohner (Mio.)" FROM laender;
\`\`\`

> 💡 Aliases gelten nur für die Ausgabe – der echte Spaltenname in der Datenbank bleibt gleich.`,
      exercise: {
        language: "sql" as const,
        title: "Schöne Spaltennamen!",
        instructionsMd: "**Deine Aufgabe:**\n\nZeige aus `schueler` die Spalte `name` und die Spalte `punkte`, aber benenne `punkte` in der Ausgabe um zu `Ergebnis`.",
        starterCode: "SELECT name, punkte __ Ergebnis FROM schueler;",
        check: { kind: "sql_result_includes" as const, expected: "Ergebnis" },
        hintMd: "Nutze `AS` zwischen dem Spaltennamen und dem Alias:\n\n`SELECT name, punkte AS Ergebnis FROM schueler;`",
        solutionCode: "SELECT name, punkte AS Ergebnis FROM schueler;",
      },
    },
    {
      id: "sql-14",
      trackId: "sql" as const,
      title: "📏 Wertebereiche mit BETWEEN",
      summary: "Filtere Zeilen, deren Wert in einem bestimmten Bereich liegt, mit dem BETWEEN-Operator.",
      minutes: 10,
      xp: 45,
      contentMd: `# BETWEEN – Werte in einem Bereich

Statt \`WHERE punkte >= 70 AND punkte <= 90\` gibt es eine elegantere Schreibweise: \`BETWEEN\`.

\`\`\`sql
SELECT name, punkte FROM schueler WHERE punkte BETWEEN 70 AND 90;
\`\`\`

Das findet alle Schüler, die zwischen **70 und 90 Punkte** (inkl. 70 und 90) haben.

\`BETWEEN\` funktioniert auch mit Texten (alphabetisch sortiert):

\`\`\`sql
SELECT name FROM tiere WHERE name BETWEEN 'A' AND 'M';
\`\`\`

Das findet alle Tiere, deren Name alphabetisch zwischen A und M liegt.

> 💡 \`BETWEEN x AND y\` schließt beide Grenzen **ein** – also \`>= x AND <= y\`.`,
      exercise: {
        language: "sql" as const,
        title: "Länder mit 50 bis 150 Millionen Einwohnern!",
        instructionsMd: "**Deine Aufgabe:**\n\nZeige `name` und `einwohner_mio` aller Länder aus `laender`, die zwischen **50 und 150 Millionen** Einwohner haben.",
        starterCode: "SELECT name, einwohner_mio FROM laender WHERE einwohner_mio BETWEEN __ AND __;",
        check: { kind: "sql_result_includes" as const, expected: "Japan" },
        hintMd: "Nutze `BETWEEN 50 AND 150`:\n\n`SELECT name, einwohner_mio FROM laender WHERE einwohner_mio BETWEEN 50 AND 150;`",
        solutionCode: "SELECT name, einwohner_mio FROM laender WHERE einwohner_mio BETWEEN 50 AND 150;",
      },
    },
    {
      id: "sql-15",
      trackId: "sql" as const,
      title: "📋 Mehrere Werte mit IN",
      summary: "Prüfe ob ein Wert in einer Liste von Möglichkeiten vorkommt, mit dem IN-Operator.",
      minutes: 10,
      xp: 45,
      contentMd: `# IN – Einer von mehreren Werten

Statt mehrerer \`OR\`-Bedingungen kannst du mit \`IN\` eine **Liste von erlaubten Werten** angeben.

\`\`\`sql
SELECT * FROM tiere WHERE art IN ('Vogel', 'Reptil');
\`\`\`

Das ist genau dasselbe wie:

\`\`\`sql
SELECT * FROM tiere WHERE art = 'Vogel' OR art = 'Reptil';
\`\`\`

Aber viel kürzer und lesbarer! Mit \`NOT IN\` kannst du Werte **ausschließen**:

\`\`\`sql
SELECT name FROM schueler WHERE lieblingsfach NOT IN ('Sport', 'Kunst');
\`\`\`

> 💡 \`IN\` funktioniert mit beliebig vielen Werten in der Liste – einfach mit Komma trennen.`,
      exercise: {
        language: "sql" as const,
        title: "Schüler mit Mathe oder Informatik als Lieblingsfach!",
        instructionsMd: "**Deine Aufgabe:**\n\nZeige `name` und `lieblingsfach` aller Schüler aus `schueler`, deren Lieblingsfach **Mathe** oder **Informatik** ist.\n\nNutze den `IN`-Operator.",
        starterCode: "SELECT name, lieblingsfach FROM schueler WHERE lieblingsfach IN (__, __);",
        check: { kind: "sql_result_includes" as const, expected: "Informatik" },
        hintMd: "Schreibe beide Fächer in die Liste:\n\n`SELECT name, lieblingsfach FROM schueler WHERE lieblingsfach IN ('Mathe', 'Informatik');`",
        solutionCode: "SELECT name, lieblingsfach FROM schueler WHERE lieblingsfach IN ('Mathe', 'Informatik');",
      },
    },
    {
      id: "sql-16",
      trackId: "sql" as const,
      title: "❓ Leere Felder mit IS NULL",
      summary: "Finde Zeilen mit fehlenden Werten oder stelle sicher, dass ein Feld befüllt ist.",
      minutes: 10,
      xp: 45,
      contentMd: `# IS NULL und IS NOT NULL – Leere Felder

In Datenbanken gibt es einen speziellen Wert: \`NULL\`. Er bedeutet "kein Wert vorhanden" – also ein **leeres Feld**.

Du kannst **nicht** \`= NULL\` schreiben, weil NULL kein normaler Wert ist. Stattdessen nutzt du:

\`\`\`sql
SELECT name FROM schueler WHERE lieblingsfach IS NULL;
\`\`\`

Das findet alle Schüler, bei denen kein Lieblingsfach eingetragen ist.

Mit \`IS NOT NULL\` findest du alle Zeilen, die **einen Wert haben**:

\`\`\`sql
SELECT name FROM schueler WHERE lieblingsfach IS NOT NULL;
\`\`\`

In unserer Datenbank hat jeder ein Lieblingsfach – aber in echten Daten fehlen oft Einträge!

> 💡 NULL bedeutet "unbekannt" – nicht 0 oder leerer Text. \`NULL = NULL\` ergibt in SQL: falsch!`,
      exercise: {
        language: "sql" as const,
        title: "Tiere ohne bekanntes Gewicht!",
        instructionsMd: "**Deine Aufgabe:**\n\nZeige alle Tiere aus `tiere`, bei denen `gewicht_kg` **nicht** NULL ist (also ein Gewicht eingetragen ist).\n\nNutze `IS NOT NULL`.",
        starterCode: "SELECT name, gewicht_kg FROM tiere WHERE gewicht_kg __ __ NULL;",
        check: { kind: "sql_result_includes" as const, expected: "Elefant" },
        hintMd: "Nutze `IS NOT NULL`:\n\n`SELECT name, gewicht_kg FROM tiere WHERE gewicht_kg IS NOT NULL;`",
        solutionCode: "SELECT name, gewicht_kg FROM tiere WHERE gewicht_kg IS NOT NULL;",
      },
    },
    {
      id: "sql-17",
      trackId: "sql" as const,
      title: "🔬 Gruppen filtern mit HAVING",
      summary: "Filtere Gruppen nach GROUP BY mit der HAVING-Klausel – dem WHERE für Aggregatfunktionen.",
      minutes: 12,
      xp: 55,
      contentMd: `# HAVING – Gruppen filtern

Nach einem \`GROUP BY\` kannst du die Gruppen **nicht** mit \`WHERE\` filtern – dafür gibt es \`HAVING\`.

\`WHERE\` filtert **einzelne Zeilen**, bevor sie gruppiert werden.
\`HAVING\` filtert **Gruppen**, nachdem sie berechnet wurden.

\`\`\`sql
SELECT klasse, AVG(punkte) AS schnitt
FROM schueler
GROUP BY klasse
HAVING AVG(punkte) > 80;
\`\`\`

Das zeigt nur Klassen, bei denen der Durchschnitt über 80 liegt.

\`\`\`sql
SELECT art, COUNT(*) AS anzahl
FROM tiere
GROUP BY art
HAVING COUNT(*) >= 2;
\`\`\`

Das zeigt nur Tierarten, bei denen mindestens 2 Tiere in der Tabelle sind.

> 💡 Reihenfolge merken: \`GROUP BY\` → \`HAVING\` → \`ORDER BY\` → \`LIMIT\``,
      exercise: {
        language: "sql" as const,
        title: "Nur Tierarten mit mehr als 2 Tieren!",
        instructionsMd: "**Deine Aufgabe:**\n\nZeige alle Tierarten (`art`) aus `tiere` zusammen mit der Anzahl der Tiere, aber nur die Arten, die **mehr als 2 Tiere** haben.\n\nNutze `GROUP BY` und `HAVING`.",
        starterCode: "SELECT art, COUNT(*) AS anzahl FROM tiere GROUP BY art HAVING COUNT(*) __ 2;",
        check: { kind: "sql_result_includes" as const, expected: "Säugetier" },
        hintMd: "Nutze `HAVING COUNT(*) > 2`:\n\n`SELECT art, COUNT(*) AS anzahl FROM tiere GROUP BY art HAVING COUNT(*) > 2;`",
        solutionCode: "SELECT art, COUNT(*) AS anzahl FROM tiere GROUP BY art HAVING COUNT(*) > 2;",
      },
    },
    {
      id: "sql-18",
      trackId: "sql" as const,
      title: "🔤 Textfunktionen: UPPER, LOWER, LENGTH",
      summary: "Verändere und untersuche Textwerte mit eingebauten SQL-Textfunktionen.",
      minutes: 12,
      xp: 50,
      contentMd: `# Textfunktionen – Text bearbeiten

SQL hat eingebaute Funktionen, um Text zu verändern und zu analysieren:

| Funktion | Was sie macht | Beispiel |
|----------|--------------|---------|
| \`UPPER(text)\` | Alles GROSSBUCHSTABEN | \`UPPER('hallo')\` → \`'HALLO'\` |
| \`LOWER(text)\` | alles kleinbuchstaben | \`LOWER('HALLO')\` → \`'hallo'\` |
| \`LENGTH(text)\` | Anzahl der Zeichen | \`LENGTH('Elefant')\` → \`7\` |

\`\`\`sql
SELECT UPPER(name), LENGTH(name) FROM tiere;
\`\`\`

So siehst du alle Tiernamen in Großbuchstaben und wie viele Buchstaben sie haben.

\`\`\`sql
SELECT name FROM laender WHERE LENGTH(hauptstadt) > 5;
\`\`\`

Das findet alle Länder, deren Hauptstadt mehr als 5 Buchstaben hat.

> 💡 Funktionen können auch kombiniert werden: \`UPPER(name)\` in \`WHERE\`, \`ORDER BY\` und \`SELECT\`!`,
      exercise: {
        language: "sql" as const,
        title: "Schülernamen in Großbuchstaben und ihre Länge!",
        instructionsMd: "**Deine Aufgabe:**\n\nZeige aus `schueler` jeden `name` in **Großbuchstaben** (als `grossname`) und die **Länge** des Namens (als `laenge`).",
        starterCode: "SELECT __(name) AS grossname, __(name) AS laenge FROM schueler;",
        check: { kind: "sql_result_includes" as const, expected: "MIA" },
        hintMd: "Nutze `UPPER()` und `LENGTH()`:\n\n`SELECT UPPER(name) AS grossname, LENGTH(name) AS laenge FROM schueler;`",
        solutionCode: "SELECT UPPER(name) AS grossname, LENGTH(name) AS laenge FROM schueler;",
      },
    },
    {
      id: "sql-19",
      trackId: "sql" as const,
      title: "🧮 Runden mit ROUND() und Rechnen",
      summary: "Führe mathematische Berechnungen durch und runde Ergebnisse mit ROUND().",
      minutes: 12,
      xp: 50,
      contentMd: `# ROUND() und Rechnen in SQL

SQL kann direkt rechnen – du kannst Zahlen addieren, subtrahieren, multiplizieren und dividieren:

\`\`\`sql
SELECT name, gewicht_kg, gewicht_kg * 1000 AS gewicht_gramm FROM tiere;
\`\`\`

Das rechnet das Gewicht von Kilogramm in Gramm um.

Mit \`ROUND(zahl, nachkommastellen)\` kannst du Ergebnisse **runden**:

\`\`\`sql
SELECT klasse, ROUND(AVG(punkte), 1) AS schnitt
FROM schueler
GROUP BY klasse;
\`\`\`

Das zeigt den Durchschnitt pro Klasse, auf **1 Nachkommastelle** gerundet.

\`\`\`sql
SELECT name, ROUND(einwohner_mio / 10.0, 2) AS zehntel FROM laender;
\`\`\`

> 💡 \`ROUND(x, 0)\` rundet auf ganze Zahlen. \`ROUND(x, 2)\` auf 2 Nachkommastellen.`,
      exercise: {
        language: "sql" as const,
        title: "Durchschnittspunkte gerundet!",
        instructionsMd: "**Deine Aufgabe:**\n\nZeige für jede `klasse` in `schueler` den **gerundeten Durchschnitt** der Punkte (0 Nachkommastellen), als Spalte `schnitt`.",
        starterCode: "SELECT klasse, ROUND(AVG(punkte), __) AS schnitt FROM schueler GROUP BY klasse;",
        check: { kind: "sql_result_includes" as const, expected: "86" },
        hintMd: "Nutze `ROUND(AVG(punkte), 0)` für keine Nachkommastellen:\n\n`SELECT klasse, ROUND(AVG(punkte), 0) AS schnitt FROM schueler GROUP BY klasse;`",
        solutionCode: "SELECT klasse, ROUND(AVG(punkte), 0) AS schnitt FROM schueler GROUP BY klasse;",
      },
    },
    {
      id: "sql-20",
      trackId: "sql" as const,
      title: "🏆 Boss Quest: Alles zusammen!",
      summary: "Beweise dein SQL-Wissen in einer komplexen Abfrage, die viele Konzepte kombiniert.",
      minutes: 15,
      xp: 70,
      contentMd: `# Boss Quest – Der ultimative SQL-Test!

Du hast alle wichtigen SQL-Bausteine gelernt. Jetzt ist es Zeit, sie zu kombinieren!

Hier ist eine Abfrage, die gleich **mehrere Konzepte** auf einmal nutzt:

\`\`\`sql
SELECT
  kontinent,
  COUNT(*) AS anzahl_laender,
  ROUND(AVG(einwohner_mio), 1) AS schnitt_einwohner
FROM laender
WHERE name NOT LIKE 'A%'
GROUP BY kontinent
HAVING COUNT(*) >= 1
ORDER BY schnitt_einwohner DESC;
\`\`\`

Diese eine Abfrage nutzt: \`WHERE\`, \`LIKE\`, \`NOT\`, \`GROUP BY\`, \`COUNT\`, \`AVG\`, \`ROUND\`, \`AS\`, \`HAVING\`, \`ORDER BY\`.

Lies sie Schritt für Schritt:
1. Nur Länder, deren Name **nicht** mit "A" beginnt
2. Gruppiere nach Kontinent
3. Berechne Anzahl und Durchschnitt
4. Nur Gruppen mit mindestens 1 Land
5. Sortiere nach Einwohnerdurchschnitt absteigend

> 💡 SQL liest sich fast wie Englisch – übe, Abfragen laut zu lesen. Dann werden auch komplexe Abfragen verständlich!`,
      exercise: {
        language: "sql" as const,
        title: "Die ultimative Tier-Statistik!",
        instructionsMd: "**Deine Aufgabe:**\n\nErstelle eine Abfrage über die `tiere`-Tabelle, die:\n\n1. Jede Tierart (`art`) zeigt\n2. Die **Anzahl** der Tiere pro Art (als `anzahl`)\n3. Das **gerundete Durchschnittsgewicht** (0 Stellen, als `schnitt_kg`)\n4. Nur Tierarten mit einem Durchschnittsgewicht von **mehr als 50 kg** (`HAVING`)\n5. Sortiert nach `schnitt_kg` **absteigend**",
        starterCode: `SELECT
  art,
  COUNT(*) AS anzahl,
  ROUND(AVG(gewicht_kg), __) AS schnitt_kg
FROM tiere
GROUP BY art
HAVING AVG(gewicht_kg) __ 50
ORDER BY schnitt_kg __;`,
        check: { kind: "sql_result_includes" as const, expected: "Säugetier" },
        hintMd: "Fülle die Lücken: `0` für Nachkommastellen, `>` für HAVING, `DESC` für die Sortierung:\n\n```sql\nSELECT art, COUNT(*) AS anzahl, ROUND(AVG(gewicht_kg), 0) AS schnitt_kg\nFROM tiere\nGROUP BY art\nHAVING AVG(gewicht_kg) > 50\nORDER BY schnitt_kg DESC;\n```",
        solutionCode: `SELECT
  art,
  COUNT(*) AS anzahl,
  ROUND(AVG(gewicht_kg), 0) AS schnitt_kg
FROM tiere
GROUP BY art
HAVING AVG(gewicht_kg) > 50
ORDER BY schnitt_kg DESC;`,
      },
    },
  ],
};

const REACT: Track = {
  id: "react",
  title: "React",
  emoji: "⚛️",
  description: "Baue moderne, interaktive UIs mit dem beliebtesten JavaScript-Framework – mit Komponenten, Props und Hooks!",
  color: "rose",
  recommendedAge: "ab 14 Jahren",
  lessons: [
    {
      id: "react-01",
      trackId: "react",
      title: "⚛️ Was ist React? Erstes Element",
      summary: "Lerne, was React ist, und erstelle dein erstes Element mit React.createElement.",
      minutes: 10,
      xp: 40,
      contentMd: `# Was ist React?

React ist eine JavaScript-Bibliothek, mit der du interaktive Benutzeroberflächen bauen kannst.

Anstatt HTML direkt zu schreiben, beschreibst du mit React **Komponenten**: kleine Bausteine, die zusammengesetzt eine ganze App ergeben.

Mit \`React.createElement\` kannst du HTML-Elemente in JavaScript erstellen:

\`\`\`javascript
const element = React.createElement('h1', null, 'Hallo Welt!');
ReactDOM.render(element, document.getElementById('root'));
\`\`\`

> 💡 Das \`null\` ist der Platz für Eigenschaften (Props) – dazu später mehr!`,
      exercise: {
        language: "react",
        title: "Dein erstes React-Element!",
        instructionsMd: `**Deine Aufgabe:**\n\nErstelle mit \`React.createElement\` ein \`<h1>\`-Element mit dem Text "Ich lerne React!" und rendere es in den \`root\`-Container.`,
        starterCode: `const element = React.createElement('h1', null, '___');
ReactDOM.render(element, document.getElementById('root'));`,
        check: { kind: "contains", needles: ["React.createElement", "ReactDOM.render"] },
        hintMd: "Ersetze `___` mit deinem Text:\n\n```javascript\nconst element = React.createElement('h1', null, 'Ich lerne React!');\nReactDOM.render(element, document.getElementById('root'));\n```",
        solutionCode: `const element = React.createElement('h1', null, 'Ich lerne React!');
ReactDOM.render(element, document.getElementById('root'));`,
      },
    },
    {
      id: "react-02",
      trackId: "react",
      title: "✍️ JSX – HTML direkt in JavaScript",
      summary: "Schreibe HTML-ähnlichen Code direkt in JavaScript mit JSX.",
      minutes: 10,
      xp: 40,
      contentMd: `# JSX – Die einfachere Schreibweise

JSX ist eine spezielle Schreibweise für React, bei der du HTML direkt in JavaScript schreiben kannst.

\`\`\`jsx
function Begruessung() {
  return <h1>Hallo, Welt!</h1>;
}

ReactDOM.render(<Begruessung />, document.getElementById('root'));
\`\`\`

JSX sieht wie HTML aus, ist aber eigentlich JavaScript! Babel übersetzt JSX automatisch für den Browser.

> 💡 Komponentennamen müssen immer mit einem **Großbuchstaben** beginnen, z.B. \`MeinKnopf\`.`,
      exercise: {
        language: "react",
        title: "Deine erste JSX-Komponente!",
        instructionsMd: `**Deine Aufgabe:**\n\nErstelle eine Funktion \`App\`, die ein \`<h1>\`-Element mit dem Text "Meine React-App" zurückgibt. Rendere \`<App />\` in den \`root\`-Container.`,
        starterCode: `function App() {
  return <h1>___</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));`,
        check: { kind: "contains", needles: ["function App", "return", "<h1>", "ReactDOM.render"] },
        hintMd: "Ersetze `___` mit deinem Text:\n\n```jsx\nfunction App() {\n  return <h1>Meine React-App</h1>;\n}\n```",
        solutionCode: `function App() {
  return <h1>Meine React-App</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-03",
      trackId: "react",
      title: "📦 Props – Daten an Komponenten übergeben",
      summary: "Übergebe Daten an Komponenten mithilfe von Props.",
      minutes: 12,
      xp: 45,
      contentMd: `# Props – Eigenschaften von Komponenten

Props (kurz für "Properties") sind wie Parameter einer Funktion: Du gibst einer Komponente Daten von außen mit.

\`\`\`jsx
function Begruessung(props) {
  return <h1>Hallo, {props.name}!</h1>;
}

ReactDOM.render(
  <Begruessung name="Mia" />,
  document.getElementById('root')
);
\`\`\`

Mit \`{props.name}\` fügst du den Wert des Props in JSX ein – die geschweiften Klammern \`{}\` bedeuten "JavaScript hier einsetzen".

> 💡 Zahlen-Props schreibst du in geschweifte Klammern: \`alter={12}\`, Text in Anführungszeichen: \`name="Tim"\`.`,
      exercise: {
        language: "react",
        title: "Erstelle eine Tier-Karte mit Props!",
        instructionsMd: `**Deine Aufgabe:**\n\nErstelle eine Komponente \`TierKarte\`, die die Props \`name\` und \`art\` entgegennimmt und sie anzeigt. Rendere \`<TierKarte name="Elefant" art="Säugetier" />\`.`,
        starterCode: `function TierKarte(props) {
  return <p>{props.___} ist ein {props.___}</p>;
}

ReactDOM.render(
  <TierKarte name="Elefant" art="Säugetier" />,
  document.getElementById('root')
);`,
        check: { kind: "contains", needles: ["props.name", "props.art", "TierKarte"] },
        hintMd: "Ersetze die `___` durch `name` und `art`:\n\n```jsx\nfunction TierKarte(props) {\n  return <p>{props.name} ist ein {props.art}</p>;\n}\n```",
        solutionCode: `function TierKarte(props) {
  return <p>{props.name} ist ein {props.art}</p>;
}

ReactDOM.render(
  <TierKarte name="Elefant" art="Säugetier" />,
  document.getElementById('root')
);`,
      },
    },
    {
      id: "react-04",
      trackId: "react",
      title: "🔄 useState – Zustand in Komponenten",
      summary: "Speichere veränderliche Daten in einer Komponente mit dem useState Hook.",
      minutes: 14,
      xp: 55,
      contentMd: `# useState – Daten, die sich ändern

Mit \`useState\` kannst du Daten in einer Komponente speichern, die sich verändern können.

\`\`\`jsx
const { useState } = React;

function Zaehler() {
  const [zahl, setZahl] = useState(0);
  return <p>Aktuelle Zahl: {zahl}</p>;
}
\`\`\`

\`useState(0)\` erstellt eine Variable \`zahl\` mit dem Startwert \`0\` und eine Funktion \`setZahl\`, mit der du den Wert ändern kannst.

> 💡 Die Schreibweise \`const [zahl, setZahl]\` heißt **Array-Destrukturierung**.`,
      exercise: {
        language: "react",
        title: "Erstelle einen Punktezähler!",
        instructionsMd: `**Deine Aufgabe:**\n\nErstelle eine Komponente \`Punkte\`, die \`useState\` mit dem Startwert \`0\` nutzt und die aktuellen Punkte anzeigt.`,
        starterCode: `const { useState } = React;

function Punkte() {
  const [punkte, setPunkte] = useState(___);

  return <p>Deine Punkte: {punkte}</p>;
}

ReactDOM.render(<Punkte />, document.getElementById('root'));`,
        check: { kind: "contains", needles: ["useState", "punkte", "setPunkte"] },
        hintMd: "Ersetze `___` mit dem Startwert `0`:\n\n```jsx\nconst [punkte, setPunkte] = useState(0);\n```",
        solutionCode: `const { useState } = React;

function Punkte() {
  const [punkte, setPunkte] = useState(0);

  return <p>Deine Punkte: {punkte}</p>;
}

ReactDOM.render(<Punkte />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-05",
      trackId: "react",
      title: "🖱️ Button mit onClick-Handler",
      summary: "Reagiere auf Klicks mit dem onClick-Ereignis und aktualisiere den Zustand.",
      minutes: 14,
      xp: 55,
      contentMd: `# onClick – Auf Klicks reagieren

Mit dem \`onClick\`-Attribut kannst du auf Klicks reagieren:

\`\`\`jsx
const { useState } = React;

function Zaehler() {
  const [zahl, setZahl] = useState(0);

  return (
    <div>
      <p>Zahl: {zahl}</p>
      <button onClick={() => setZahl(zahl + 1)}>+1 klicken</button>
    </div>
  );
}
\`\`\`

\`onClick={() => setZahl(zahl + 1)}\` ist eine **Pfeilfunktion**, die beim Klick ausgeführt wird.

> 💡 Vergiss die Klammern \`()\` nach dem Pfeil nicht!`,
      exercise: {
        language: "react",
        title: "Baue einen Klick-Zähler!",
        instructionsMd: `**Deine Aufgabe:**\n\nErstelle eine Komponente \`KlickZaehler\` mit useState (Start: 0), einer Anzeige "Klicks: {klicks}" und einem Button mit \`onClick\`, der \`klicks\` um 1 erhöht.`,
        starterCode: `const { useState } = React;

function KlickZaehler() {
  const [klicks, setKlicks] = useState(0);

  return (
    <div>
      <p>Klicks: {klicks}</p>
      <button onClick={___}>Klick mich!</button>
    </div>
  );
}

ReactDOM.render(<KlickZaehler />, document.getElementById('root'));`,
        check: { kind: "contains", needles: ["onClick", "useState", "klicks + 1"] },
        hintMd: "Ersetze `___` mit der Pfeilfunktion:\n\n```jsx\nonClick={() => setKlicks(klicks + 1)}\n```",
        solutionCode: `const { useState } = React;

function KlickZaehler() {
  const [klicks, setKlicks] = useState(0);

  return (
    <div>
      <p>Klicks: {klicks}</p>
      <button onClick={() => setKlicks(klicks + 1)}>Klick mich!</button>
    </div>
  );
}

ReactDOM.render(<KlickZaehler />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-06",
      trackId: "react",
      title: "📋 Listen rendern mit map()",
      summary: "Rendere dynamische Listen aus Arrays mit der map()-Methode.",
      minutes: 14,
      xp: 55,
      contentMd: `# Listen in React mit map()

Um eine Liste von Dingen anzuzeigen, nutzt du die \`map()\`-Methode:

\`\`\`jsx
const tiere = ['Hund', 'Katze', 'Vogel'];

function TierListe() {
  return (
    <ul>
      {tiere.map((tier) => (
        <li key={tier}>{tier}</li>
      ))}
    </ul>
  );
}
\`\`\`

\`map()\` geht durch jedes Element des Arrays und erstellt für jedes ein \`<li>\`-Element.

> 💡 Der \`key\` muss eindeutig sein – oft nutzt man die ID aus einer Datenbank.`,
      exercise: {
        language: "react",
        title: "Zeige eine Schülerliste an!",
        instructionsMd: `**Deine Aufgabe:**\n\nErstelle eine Komponente \`SchuelerListe\`, die das Array \`schueler\` mit \`map()\` als \`<li>\`-Elemente in einer \`<ul>\` anzeigt.`,
        starterCode: `const schueler = ['Mia', 'Tim', 'Lena', 'Max'];

function SchuelerListe() {
  return (
    <ul>
      {schueler.___(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<SchuelerListe />, document.getElementById('root'));`,
        check: { kind: "contains", needles: ["map(", "<li", "key="] },
        hintMd: "Ersetze `___` mit `map`:\n\n```jsx\n{schueler.map(name => (\n  <li key={name}>{name}</li>\n))}\n```",
        solutionCode: `const schueler = ['Mia', 'Tim', 'Lena', 'Max'];

function SchuelerListe() {
  return (
    <ul>
      {schueler.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<SchuelerListe />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-07",
      trackId: "react",
      title: "❓ Bedingtes Rendern",
      summary: "Zeige Inhalte abhängig von einer Bedingung mit dem Ternary-Operator.",
      minutes: 12,
      xp: 50,
      contentMd: `# Bedingtes Rendern – Was wird angezeigt?

Mit dem **Ternary-Operator** \`? :\` kannst du direkt in JSX Bedingungen einbauen:

\`\`\`jsx
function Ergebnis({ punkte }) {
  return (
    <p>
      {punkte >= 50 ? '🎉 Bestanden!' : '😢 Nicht bestanden.'}
    </p>
  );
}
\`\`\`

Das bedeutet: "Wenn \`punkte >= 50\`, zeige '🎉 Bestanden!', sonst '😢 Nicht bestanden.'".

> 💡 \`? :\` sprich: "Wenn (?) dann (:) sonst".`,
      exercise: {
        language: "react",
        title: "Bestanden oder nicht?",
        instructionsMd: `**Deine Aufgabe:**\n\nErstelle eine Komponente \`Benotung\`, die einen Prop \`punkte\` bekommt. Zeige "Super gemacht!" wenn \`punkte >= 80\`, sonst "Weiter üben!". Rendere \`<Benotung punkte={92} />\`.`,
        starterCode: `function Benotung({ punkte }) {
  return (
    <p>
      {punkte >= 80 ___ 'Super gemacht!' ___ 'Weiter üben!'}
    </p>
  );
}

ReactDOM.render(<Benotung punkte={92} />, document.getElementById('root'));`,
        check: { kind: "contains", needles: ["punkte >= 80", "?", ":"] },
        hintMd: "Nutze den Ternary-Operator:\n\n```jsx\n{punkte >= 80 ? 'Super gemacht!' : 'Weiter üben!'}\n```",
        solutionCode: `function Benotung({ punkte }) {
  return (
    <p>
      {punkte >= 80 ? 'Super gemacht!' : 'Weiter üben!'}
    </p>
  );
}

ReactDOM.render(<Benotung punkte={92} />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-08",
      trackId: "react",
      title: "📝 Formulare und Eingaben",
      summary: "Lies Eingaben aus Textfeldern mit kontrollierten Inputs und useState.",
      minutes: 14,
      xp: 55,
      contentMd: `# Formulare in React – Kontrollierte Inputs

Um Texteingaben zu verarbeiten, kombinierst du \`useState\` mit dem \`onChange\`-Ereignis:

\`\`\`jsx
const { useState } = React;

function Namensfeld() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Dein Name..."
      />
      <p>Hallo, {name}!</p>
    </div>
  );
}
\`\`\`

\`e.target.value\` enthält den aktuell eingegebenen Text.

> 💡 \`e\` steht für "Event" (Ereignis) – das Objekt mit allen Infos über das Ereignis.`,
      exercise: {
        language: "react",
        title: "Baue ein Namens-Begrüßungsfeld!",
        instructionsMd: `**Deine Aufgabe:**\n\nErstelle eine Komponente \`Begruessung\` mit einem Eingabefeld und einer Anzeige "Hallo, {name}!". Nutze \`useState\` und \`onChange\`.`,
        starterCode: `const { useState } = React;

function Begruessung() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        value={name}
        onChange={___}
        placeholder="Dein Name..."
      />
      <p>Hallo, {name}!</p>
    </div>
  );
}

ReactDOM.render(<Begruessung />, document.getElementById('root'));`,
        check: { kind: "contains", needles: ["onChange", "e.target.value", "useState"] },
        hintMd: "Ersetze `___` mit:\n\n```jsx\nonChange={(e) => setName(e.target.value)}\n```",
        solutionCode: `const { useState } = React;

function Begruessung() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Dein Name..."
      />
      <p>Hallo, {name}!</p>
    </div>
  );
}

ReactDOM.render(<Begruessung />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-09",
      trackId: "react",
      title: "⏱️ useEffect Hook",
      summary: "Führe Aktionen aus, wenn sich die Komponente ändert, mit dem useEffect Hook.",
      minutes: 14,
      xp: 60,
      contentMd: `# useEffect – Seiteneffekte in React

Mit \`useEffect\` kannst du Code ausführen, wenn sich etwas in der Komponente ändert.

\`\`\`jsx
const { useState, useEffect } = React;

function Timer() {
  const [sekunden, setSekunden] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSekunden(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Sekunden: {sekunden}</p>;
}
\`\`\`

Das leere Array \`[]\` bedeutet: "Führe diesen Effekt nur einmal aus (beim ersten Laden)".

> 💡 Die \`return\`-Funktion im useEffect ist die **Cleanup-Funktion**.`,
      exercise: {
        language: "react",
        title: "Seiteneffekt beim Laden!",
        instructionsMd: `**Deine Aufgabe:**\n\nErstelle eine Komponente \`Nachricht\`, die \`useEffect\` nutzt, um beim ersten Laden \`text\` auf "Willkommen bei React!" zu setzen.`,
        starterCode: `const { useState, useEffect } = React;

function Nachricht() {
  const [text, setText] = useState('Lade...');

  useEffect(___, []);

  return <p>{text}</p>;
}

ReactDOM.render(<Nachricht />, document.getElementById('root'));`,
        check: { kind: "contains", needles: ["useEffect", "useState", "setText"] },
        hintMd: "Ersetze `___` mit einer Pfeilfunktion:\n\n```jsx\nuseEffect(() => {\n  setText('Willkommen bei React!');\n}, []);\n```",
        solutionCode: `const { useState, useEffect } = React;

function Nachricht() {
  const [text, setText] = useState('Lade...');

  useEffect(() => {
    setText('Willkommen bei React!');
  }, []);

  return <p>{text}</p>;
}

ReactDOM.render(<Nachricht />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-10",
      trackId: "react",
      title: "🚀 Mini-App: Aufgabenliste",
      summary: "Baue eine vollständige Mini-App mit allem, was du gelernt hast!",
      minutes: 15,
      xp: 80,
      contentMd: `# Alles zusammen – Deine erste React-App!

Jetzt kombinierst du alles: \`useState\`, \`map()\`, \`onChange\` und \`onClick\`.

\`\`\`jsx
const { useState } = React;

function TodoApp() {
  const [aufgaben, setAufgaben] = useState(['Hausaufgaben']);
  const [eingabe, setEingabe] = useState('');

  const hinzufuegen = () => {
    if (eingabe) {
      setAufgaben([...aufgaben, eingabe]);
      setEingabe('');
    }
  };

  return (
    <div>
      <input value={eingabe} onChange={e => setEingabe(e.target.value)} />
      <button onClick={hinzufuegen}>Hinzufügen</button>
      <ul>{aufgaben.map(a => <li key={a}>{a}</li>)}</ul>
    </div>
  );
}
\`\`\`

> 💡 In React veränderst du Arrays nie direkt – du erstellst immer ein neues Array!`,
      exercise: {
        language: "react",
        title: "Baue deine eigene Aufgabenliste!",
        instructionsMd: `**Deine Aufgabe:**\n\nBaue eine \`TodoApp\` mit useState für \`aufgaben\` und \`eingabe\`, einem Textfeld mit \`onChange\`, einem Button mit \`onClick\` der die Eingabe hinzufügt, und einer Liste mit \`map()\`.`,
        starterCode: `const { useState } = React;

function TodoApp() {
  const [aufgaben, setAufgaben] = useState([]);
  const [eingabe, setEingabe] = useState('');

  const hinzufuegen = () => {
    if (eingabe) {
      setAufgaben([___aufgaben, eingabe]);
      setEingabe('');
    }
  };

  return (
    <div>
      <h2>Meine Aufgaben</h2>
      <input
        value={eingabe}
        onChange={(e) => setEingabe(e.target.value)}
        placeholder="Neue Aufgabe..."
      />
      <button onClick={___}>Hinzufügen</button>
      <ul>
        {aufgaben.map(aufgabe => (
          <li key={aufgabe}>{aufgabe}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));`,
        check: { kind: "contains", needles: ["useState", "map(", "onClick", "onChange", "...aufgaben"] },
        hintMd: "Ersetze `___aufgaben` mit `...aufgaben` und `___` beim Button mit `hinzufuegen`.",
        solutionCode: `const { useState } = React;

function TodoApp() {
  const [aufgaben, setAufgaben] = useState([]);
  const [eingabe, setEingabe] = useState('');

  const hinzufuegen = () => {
    if (eingabe) {
      setAufgaben([...aufgaben, eingabe]);
      setEingabe('');
    }
  };

  return (
    <div>
      <h2>Meine Aufgaben</h2>
      <input
        value={eingabe}
        onChange={(e) => setEingabe(e.target.value)}
        placeholder="Neue Aufgabe..."
      />
      <button onClick={hinzufuegen}>Hinzufügen</button>
      <ul>
        {aufgaben.map(aufgabe => (
          <li key={aufgabe}>{aufgabe}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-11",
      trackId: "react" as const,
      title: "🎯 useRef – Direkt aufs DOM zugreifen",
      summary: "Lerne, wie du mit useRef direkt auf HTML-Elemente zugreifst, z.B. um ein Eingabefeld zu fokussieren.",
      minutes: 13,
      xp: 55,
      contentMd: `# useRef – Eine direkte Verbindung zum Element

Manchmal möchtest du direkt auf ein HTML-Element zugreifen – zum Beispiel, um ein Eingabefeld automatisch zu fokussieren. Dafür gibt es \`useRef\`.

\`\`\`jsx
const { useRef } = React;

function FokusApp() {
  const eingabeRef = useRef(null);

  const fokussieren = () => {
    eingabeRef.current.focus();
  };

  return (
    <div>
      <input ref={eingabeRef} placeholder="Klick den Button..." />
      <button onClick={fokussieren}>Fokus setzen</button>
    </div>
  );
}
\`\`\`

Mit \`useRef(null)\` erstellst du eine "Fernbedienung" für ein Element. Du verbindest sie mit dem Element über das \`ref\`-Attribut. Danach kannst du über \`eingabeRef.current\` direkt auf das Element zugreifen.

> 💡 \`useRef\` ändert den Zustand **nicht** – die Komponente rendert also nicht neu, wenn sich \`.current\` ändert!`,
      exercise: {
        language: "react" as const,
        title: "Autofokus beim Start!",
        instructionsMd: "**Deine Aufgabe:**\n\nErstelle eine Komponente `FokusApp` mit einem `useRef` für ein Eingabefeld. Ein Button soll das Eingabefeld fokussieren wenn man draufklickt. Verbinde den Ref mit dem Input-Element über `ref={eingabeRef}`.",
        starterCode: `const { useRef } = React;

function FokusApp() {
  const eingabeRef = useRef(___);

  const fokussieren = () => {
    eingabeRef.___.focus();
  };

  return (
    <div>
      <h2>useRef Übung</h2>
      <input ref={eingabeRef} placeholder="Ich warte auf Fokus..." />
      <button onClick={fokussieren}>Fokus setzen!</button>
    </div>
  );
}

ReactDOM.render(<FokusApp />, document.getElementById('root'));`,
        check: { kind: "contains" as const, needles: ["useRef", "eingabeRef.current.focus", "ref={eingabeRef}"] },
        hintMd: "Ersetze das erste `___` mit `null` und das zweite mit `current`:\n\n```jsx\nconst eingabeRef = useRef(null);\neingabeRef.current.focus();\n```",
        solutionCode: `const { useRef } = React;

function FokusApp() {
  const eingabeRef = useRef(null);

  const fokussieren = () => {
    eingabeRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Übung</h2>
      <input ref={eingabeRef} placeholder="Ich warte auf Fokus..." />
      <button onClick={fokussieren}>Fokus setzen!</button>
    </div>
  );
}

ReactDOM.render(<FokusApp />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-12",
      trackId: "react" as const,
      title: "🧩 Mehrere State-Variablen",
      summary: "Verwalte mehrere State-Variablen in einer Komponente für komplexere Interaktionen.",
      minutes: 13,
      xp: 55,
      contentMd: `# Mehrere State-Variablen – Mehr Kontrolle

Du kannst in einer Komponente beliebig viele \`useState\`-Hooks verwenden! Jede Variable hat ihren eigenen Wert und ihre eigene Setter-Funktion.

\`\`\`jsx
const { useState } = React;

function Profil() {
  const [name, setName] = useState('Max');
  const [alter, setAlter] = useState(14);
  const [online, setOnline] = useState(false);

  return (
    <div>
      <p>{name} ist {alter} Jahre alt.</p>
      <p>Status: {online ? '🟢 Online' : '🔴 Offline'}</p>
      <button onClick={() => setOnline(!online)}>Status wechseln</button>
    </div>
  );
}
\`\`\`

Jeder \`useState\`-Aufruf ist unabhängig. Wenn du \`setAlter\` aufrufst, ändert sich nur \`alter\` – \`name\` und \`online\` bleiben unberührt.

> 💡 Benenne deine State-Variablen klar und beschreibend – so weißt du immer, was sie speichern!`,
      exercise: {
        language: "react" as const,
        title: "Spieler-Profil mit drei States!",
        instructionsMd: "**Deine Aufgabe:**\n\nErstelle eine `SpielerProfil`-Komponente mit drei State-Variablen: `name` (String), `punkte` (Zahl, Start: 0) und `aktiv` (Boolean, Start: true). Zeige alle drei an und füge einen Button hinzu, der `punkte` um 10 erhöht.",
        starterCode: `const { useState } = React;

function SpielerProfil() {
  const [name, setName] = useState('SpeedStar');
  const [punkte, setPunkte] = useState(___);
  const [aktiv, setAktiv] = useState(___);

  return (
    <div>
      <h2>Spieler: {name}</h2>
      <p>Punkte: {punkte}</p>
      <p>Status: {aktiv ? 'Aktiv' : 'Inaktiv'}</p>
      <button onClick={() => setPunkte(punkte + ___)}>+10 Punkte</button>
      <button onClick={() => setAktiv(!aktiv)}>Status wechseln</button>
    </div>
  );
}

ReactDOM.render(<SpielerProfil />, document.getElementById('root'));`,
        check: { kind: "contains" as const, needles: ["useState", "punkte", "aktiv", "setPunkte", "setAktiv"] },
        hintMd: "Ersetze die `___` mit den Startwerten und dem Inkrement:\n\n```jsx\nconst [punkte, setPunkte] = useState(0);\nconst [aktiv, setAktiv] = useState(true);\nsetPunkte(punkte + 10);\n```",
        solutionCode: `const { useState } = React;

function SpielerProfil() {
  const [name, setName] = useState('SpeedStar');
  const [punkte, setPunkte] = useState(0);
  const [aktiv, setAktiv] = useState(true);

  return (
    <div>
      <h2>Spieler: {name}</h2>
      <p>Punkte: {punkte}</p>
      <p>Status: {aktiv ? 'Aktiv' : 'Inaktiv'}</p>
      <button onClick={() => setPunkte(punkte + 10)}>+10 Punkte</button>
      <button onClick={() => setAktiv(!aktiv)}>Status wechseln</button>
    </div>
  );
}

ReactDOM.render(<SpielerProfil />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-13",
      trackId: "react" as const,
      title: "🏗️ Komponenten aufteilen",
      summary: "Lerne, wie du größere Komponenten in kleinere aufteilst und Komponenten ineinander verwendest.",
      minutes: 14,
      xp: 60,
      contentMd: `# Komponenten aufteilen – Bausteine kombinieren

Eine der Superkräfte von React ist, dass du Komponenten in kleinere Teile aufteilen kannst. Jede Komponente macht eine Sache gut.

\`\`\`jsx
function Kopfzeile() {
  return <h1>🎮 Mein Spiel</h1>;
}

function Punktestand(props) {
  return <p>Punkte: {props.punkte}</p>;
}

function App() {
  return (
    <div>
      <Kopfzeile />
      <Punktestand punkte={42} />
    </div>
  );
}
\`\`\`

Du verwendest \`<Kopfzeile />\` und \`<Punktestand />\` einfach wie HTML-Tags! So bleibt jede Komponente übersichtlich und du kannst sie mehrfach verwenden.

> 💡 Faustregel: Wenn eine Komponente länger als 20 Zeilen wird, teile sie auf!`,
      exercise: {
        language: "react" as const,
        title: "Baue eine App aus Bausteinen!",
        instructionsMd: "**Deine Aufgabe:**\n\nErstelle drei Komponenten: `Titel` (zeigt eine `<h1>` mit 'Meine Spiele-App'), `Spieler` (Props: `name`, zeigt `<p>Spieler: {name}</p>`) und `App` (verwendet beide Komponenten und übergibt `name=\"Alex\"` an Spieler).",
        starterCode: `function Titel() {
  return <h1>Meine Spiele-App</h1>;
}

function Spieler(props) {
  return <p>Spieler: {props.___}</p>;
}

function App() {
  return (
    <div>
      <___ />
      <Spieler ___="Alex" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`,
        check: { kind: "contains" as const, needles: ["function Titel", "function Spieler", "function App", "props.name", "<Titel"] },
        hintMd: "Ersetze die `___`:\n\n```jsx\nfunction Spieler(props) {\n  return <p>Spieler: {props.name}</p>;\n}\n// In App:\n<Titel />\n<Spieler name=\"Alex\" />\n```",
        solutionCode: `function Titel() {
  return <h1>Meine Spiele-App</h1>;
}

function Spieler(props) {
  return <p>Spieler: {props.name}</p>;
}

function App() {
  return (
    <div>
      <Titel />
      <Spieler name="Alex" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-14",
      trackId: "react" as const,
      title: "📊 Arrays von Objekten mit map()",
      summary: "Rendere Listen aus Objekten mit mehreren Eigenschaften – perfekt für Highscores und Produkte.",
      minutes: 14,
      xp: 60,
      contentMd: `# Arrays von Objekten – Echte Daten anzeigen

In echten Apps hast du meistens nicht nur einfache Texte, sondern **Objekte** mit mehreren Eigenschaften:

\`\`\`jsx
const highscores = [
  { id: 1, name: 'Anna', punkte: 980 },
  { id: 2, name: 'Ben', punkte: 850 },
  { id: 3, name: 'Clara', punkte: 720 },
];

function Highscore() {
  return (
    <ul>
      {highscores.map(spieler => (
        <li key={spieler.id}>
          {spieler.name}: {spieler.punkte} Punkte
        </li>
      ))}
    </ul>
  );
}
\`\`\`

Das \`key\`-Attribut sollte immer eine **eindeutige ID** sein, nicht der Index. So weiß React, welches Element sich geändert hat.

> 💡 Objekte in Arrays sind wie Zeilen in einer Tabelle – jede Zeile hat mehrere Spalten (Eigenschaften)!`,
      exercise: {
        language: "react" as const,
        title: "Zeige eine Rangliste an!",
        instructionsMd: "**Deine Aufgabe:**\n\nErstelle ein Array `spieler` mit 3 Objekten (jeweils `id`, `name`, `punkte`). Rendere sie in einer `<ul>`-Liste mit `map()`. Verwende `s.id` als `key`.",
        starterCode: `const spieler = [
  { id: 1, name: 'Mia', punkte: 500 },
  { id: 2, name: 'Tom', punkte: 350 },
  { id: 3, name: 'Lena', punkte: 420 },
];

function Rangliste() {
  return (
    <div>
      <h2>🏆 Rangliste</h2>
      <ul>
        {spieler.___(s => (
          <li key={s.___}>
            {s.name} – {s.___} Punkte
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Rangliste />, document.getElementById('root'));`,
        check: { kind: "contains" as const, needles: ["map(", "key={s.id}", "s.punkte", "s.name"] },
        hintMd: "Ersetze die `___`:\n\n```jsx\n{spieler.map(s => (\n  <li key={s.id}>\n    {s.name} – {s.punkte} Punkte\n  </li>\n))}\n```",
        solutionCode: `const spieler = [
  { id: 1, name: 'Mia', punkte: 500 },
  { id: 2, name: 'Tom', punkte: 350 },
  { id: 3, name: 'Lena', punkte: 420 },
];

function Rangliste() {
  return (
    <div>
      <h2>🏆 Rangliste</h2>
      <ul>
        {spieler.map(s => (
          <li key={s.id}>
            {s.name} – {s.punkte} Punkte
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Rangliste />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-15",
      trackId: "react" as const,
      title: "⌨️ Events – onKeyDown und onSubmit",
      summary: "Reagiere auf Tastendruck und Formular-Abschicken mit onKeyDown und onSubmit.",
      minutes: 14,
      xp: 60,
      contentMd: `# Mehr Events – Tastatur und Formulare

Neben \`onClick\` gibt es viele weitere Events. Zwei besonders nützliche sind \`onKeyDown\` und \`onSubmit\`.

\`\`\`jsx
const { useState } = React;

function SuchApp() {
  const [text, setText] = useState('');

  const beimDruecken = (e) => {
    if (e.key === 'Enter') {
      alert('Gesucht: ' + text);
    }
  };

  const beimAbschicken = (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite!
    alert('Formular abgeschickt: ' + text);
  };

  return (
    <form onSubmit={beimAbschicken}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={beimDruecken}
        placeholder="Suchen..."
      />
      <button type="submit">Abschicken</button>
    </form>
  );
}
\`\`\`

Bei \`onSubmit\` ist \`e.preventDefault()\` wichtig – sonst würde der Browser die Seite neu laden!

> 💡 \`e.key\` gibt dir genau den Namen der gedrückten Taste: \`'Enter'\`, \`'Escape'\`, \`'ArrowUp'\` usw.`,
      exercise: {
        language: "react" as const,
        title: "Nachricht mit Enter abschicken!",
        instructionsMd: "**Deine Aufgabe:**\n\nErstelle eine `NachrichtApp` mit einem Input-Feld. Beim Drücken von `Enter` (onKeyDown) soll die Nachricht in eine Liste gespeichert und das Feld geleert werden. Zeige alle Nachrichten mit `map()` an.",
        starterCode: `const { useState } = React;

function NachrichtApp() {
  const [text, setText] = useState('');
  const [nachrichten, setNachrichten] = useState([]);

  const beimDruecken = (e) => {
    if (e.key === '___') {
      if (text) {
        setNachrichten([...nachrichten, text]);
        setText('');
      }
    }
  };

  return (
    <div>
      <h2>💬 Mein Chat</h2>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={___}
        placeholder="Nachricht eingeben und Enter drücken..."
      />
      <ul>
        {nachrichten.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<NachrichtApp />, document.getElementById('root'));`,
        check: { kind: "contains" as const, needles: ["onKeyDown", "e.key", "'Enter'", "setNachrichten"] },
        hintMd: "Ersetze das erste `___` mit `'Enter'` und das zweite mit `beimDruecken`:\n\n```jsx\nif (e.key === 'Enter') { ... }\nonKeyDown={beimDruecken}\n```",
        solutionCode: `const { useState } = React;

function NachrichtApp() {
  const [text, setText] = useState('');
  const [nachrichten, setNachrichten] = useState([]);

  const beimDruecken = (e) => {
    if (e.key === 'Enter') {
      if (text) {
        setNachrichten([...nachrichten, text]);
        setText('');
      }
    }
  };

  return (
    <div>
      <h2>💬 Mein Chat</h2>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={beimDruecken}
        placeholder="Nachricht eingeben und Enter drücken..."
      />
      <ul>
        {nachrichten.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<NachrichtApp />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-16",
      trackId: "react" as const,
      title: "🎨 Inline-Styles in JSX",
      summary: "Style deine Komponenten direkt in JSX mit JavaScript-Objekten als style-Attribut.",
      minutes: 12,
      xp: 50,
      contentMd: `# Inline-Styles in JSX

In JSX kannst du CSS-Styles direkt als JavaScript-Objekt übergeben. Das \`style\`-Attribut bekommt ein Objekt mit CSS-Eigenschaften:

\`\`\`jsx
function BunteKarte() {
  const kartenStyle = {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '20px',
    borderRadius: '12px',
    fontSize: '18px',
  };

  return (
    <div style={kartenStyle}>
      🎮 Ich bin eine bunte Karte!
    </div>
  );
}
\`\`\`

Wichtig: In JSX schreibst du CSS-Eigenschaften in **camelCase** statt mit Bindestrich. Also \`backgroundColor\` statt \`background-color\` und \`borderRadius\` statt \`border-radius\`.

> 💡 Du kannst Styles auch direkt im Tag schreiben: \`style={{ color: 'red', fontSize: '20px' }}\` – die doppelten \`{{}}\` bedeuten: äußere für JSX, innere für das Objekt.`,
      exercise: {
        language: "react" as const,
        title: "Erstelle eine stylische Profilkarte!",
        instructionsMd: "**Deine Aufgabe:**\n\nErstelle eine `ProfilKarte`-Komponente mit einem `style`-Objekt. Die Karte soll einen farbigen Hintergrund (`backgroundColor`), weißen Text (`color: 'white'`), `padding` und `borderRadius` haben.",
        starterCode: `function ProfilKarte() {
  const kartenStyle = {
    ___: '#10b981',
    color: '___',
    padding: '24px',
    borderRadius: '16px',
    textAlign: 'center',
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div style={___}>
      <p style={nameStyle}>🧑‍💻 Lisa Coder</p>
      <p>Level 5 React-Entwicklerin</p>
    </div>
  );
}

ReactDOM.render(<ProfilKarte />, document.getElementById('root'));`,
        check: { kind: "contains" as const, needles: ["style={kartenStyle}", "backgroundColor", "borderRadius"] },
        hintMd: "Ersetze die `___`:\n\n```jsx\nconst kartenStyle = {\n  backgroundColor: '#10b981',\n  color: 'white',\n  ...\n};\n// Und im JSX:\n<div style={kartenStyle}>\n```",
        solutionCode: `function ProfilKarte() {
  const kartenStyle = {
    backgroundColor: '#10b981',
    color: 'white',
    padding: '24px',
    borderRadius: '16px',
    textAlign: 'center',
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div style={kartenStyle}>
      <p style={nameStyle}>🧑‍💻 Lisa Coder</p>
      <p>Level 5 React-Entwicklerin</p>
    </div>
  );
}

ReactDOM.render(<ProfilKarte />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-17",
      trackId: "react" as const,
      title: "🌐 Context API – Globaler Zustand",
      summary: "Teile Daten zwischen weit entfernten Komponenten mit createContext und useContext.",
      minutes: 15,
      xp: 70,
      contentMd: `# Context API – Daten für alle Komponenten

Manchmal möchtest du Daten mit vielen Komponenten teilen, ohne sie durch Props "weiterzureichen". Die **Context API** löst genau dieses Problem!

\`\`\`jsx
const { useState, createContext, useContext } = React;

// 1. Context erstellen
const ThemaContext = createContext('hell');

// 2. Context verwenden
function Anzeige() {
  const thema = useContext(ThemaContext);
  return <p>Aktuelles Thema: {thema}</p>;
}

// 3. Context bereitstellen
function App() {
  return (
    <ThemaContext.Provider value="dunkel">
      <Anzeige />
    </ThemaContext.Provider>
  );
}
\`\`\`

Alle Komponenten innerhalb des \`Provider\`s können den Context-Wert lesen – egal wie tief sie verschachtelt sind.

> 💡 Context ist super für Dinge wie: eingeloggter Nutzer, Sprache, Farbthema – Dinge die wirklich überall gebraucht werden!`,
      exercise: {
        language: "react" as const,
        title: "Sprach-Kontext für die ganze App!",
        instructionsMd: "**Deine Aufgabe:**\n\nErstelle einen `SprachContext` mit `createContext('Deutsch')`. Eine `Begruessung`-Komponente soll den Wert mit `useContext` lesen und anzeigen. In `App` stelle den Wert `'Englisch'` über den Provider bereit.",
        starterCode: `const { createContext, useContext } = React;

const SprachContext = ___('Deutsch');

function Begruessung() {
  const sprache = ___(SprachContext);
  return <p>Aktuelle Sprache: {sprache}</p>;
}

function App() {
  return (
    <SprachContext.___ value="Englisch">
      <h2>🌍 Sprach-App</h2>
      <Begruessung />
    </SprachContext.___>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`,
        check: { kind: "contains" as const, needles: ["createContext", "useContext", "SprachContext", "Provider"] },
        hintMd: "Ersetze die `___`:\n\n```jsx\nconst SprachContext = createContext('Deutsch');\nconst sprache = useContext(SprachContext);\n// Provider:\n<SprachContext.Provider value=\"Englisch\">\n```",
        solutionCode: `const { createContext, useContext } = React;

const SprachContext = createContext('Deutsch');

function Begruessung() {
  const sprache = useContext(SprachContext);
  return <p>Aktuelle Sprache: {sprache}</p>;
}

function App() {
  return (
    <SprachContext.Provider value="Englisch">
      <h2>🌍 Sprach-App</h2>
      <Begruessung />
    </SprachContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-18",
      trackId: "react" as const,
      title: "🔧 Custom Hooks – Eigene Hooks bauen",
      summary: "Schreibe eigene Hook-Funktionen, um Logik wiederzuverwenden und Code sauber zu halten.",
      minutes: 15,
      xp: 70,
      contentMd: `# Custom Hooks – Wiederverwendbare Logik

Custom Hooks sind eigene Funktionen, die mit \`use\` beginnen und andere Hooks verwenden. So kannst du Logik aus Komponenten herausziehen und mehrfach nutzen.

\`\`\`jsx
const { useState } = React;

// Custom Hook: verwaltet einen Zähler
function useZaehler(start) {
  const [wert, setWert] = useState(start);
  const erhoehen = () => setWert(w => w + 1);
  const zuruecksetzen = () => setWert(start);
  return { wert, erhoehen, zuruecksetzen };
}

function App() {
  const zaehler = useZaehler(0);

  return (
    <div>
      <p>Wert: {zaehler.wert}</p>
      <button onClick={zaehler.erhoehen}>+1</button>
      <button onClick={zaehler.zuruecksetzen}>Reset</button>
    </div>
  );
}
\`\`\`

Custom Hooks geben dir die Freiheit, alles was du mit Hooks machst zu verpacken und überall zu nutzen – wie eine Toolbox!

> 💡 Der Name muss mit \`use\` beginnen – das ist eine React-Konvention und kein optionales Extra!`,
      exercise: {
        language: "react" as const,
        title: "Baue einen useToggle Hook!",
        instructionsMd: "**Deine Aufgabe:**\n\nSchreibe einen Custom Hook `useToggle(start)`, der einen Boolean-State und eine `umschalten`-Funktion zurückgibt. Nutze ihn in `App`, um eine An/Aus-Anzeige zu steuern.",
        starterCode: `const { useState } = React;

function useToggle(start) {
  const [wert, setWert] = ___(start);
  const umschalten = () => setWert(w => !___);
  return { wert, umschalten };
}

function App() {
  const licht = ___(false);

  return (
    <div>
      <h2>💡 Licht-Schalter</h2>
      <p>{licht.wert ? '☀️ Licht an' : '🌙 Licht aus'}</p>
      <button onClick={licht.___}>Umschalten</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`,
        check: { kind: "contains" as const, needles: ["function useToggle", "useState", "umschalten", "useToggle(false)"] },
        hintMd: "Ersetze die `___`:\n\n```jsx\nfunction useToggle(start) {\n  const [wert, setWert] = useState(start);\n  const umschalten = () => setWert(w => !w);\n  return { wert, umschalten };\n}\n// Nutzung:\nconst licht = useToggle(false);\n<button onClick={licht.umschalten}>\n```",
        solutionCode: `const { useState } = React;

function useToggle(start) {
  const [wert, setWert] = useState(start);
  const umschalten = () => setWert(w => !w);
  return { wert, umschalten };
}

function App() {
  const licht = useToggle(false);

  return (
    <div>
      <h2>💡 Licht-Schalter</h2>
      <p>{licht.wert ? '☀️ Licht an' : '🌙 Licht aus'}</p>
      <button onClick={licht.umschalten}>Umschalten</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-19",
      trackId: "react" as const,
      title: "⏳ Daten laden mit useEffect und setTimeout",
      summary: "Simuliere das Laden von Daten aus dem Internet mit useEffect und setTimeout.",
      minutes: 15,
      xp: 70,
      contentMd: `# Daten laden – Fetch simulieren

In echten Apps holst du Daten aus dem Internet. Um das zu üben, simulieren wir es mit \`setTimeout\` – das wartet eine Sekunde und gibt dann Daten zurück.

\`\`\`jsx
const { useState, useEffect } = React;

function DatenApp() {
  const [daten, setDaten] = useState(null);
  const [laden, setLaden] = useState(true);

  useEffect(() => {
    // Simuliert einen Server-Request der 1 Sekunde dauert
    setTimeout(() => {
      setDaten({ name: 'React-Profi', punkte: 1337 });
      setLaden(false);
    }, 1000);
  }, []); // [] = nur einmal beim Laden ausführen

  if (laden) return <p>⏳ Lade Daten...</p>;

  return (
    <div>
      <p>Name: {daten.name}</p>
      <p>Punkte: {daten.punkte}</p>
    </div>
  );
}
\`\`\`

Die \`[]\` am Ende von \`useEffect\` bedeutet: "Führe das nur einmal aus, wenn die Komponente zum ersten Mal erscheint."

> 💡 Das Laden-Muster (Lade-Anzeige → Daten → Fehler) ist in fast jeder echten App zu finden!`,
      exercise: {
        language: "react" as const,
        title: "Spieler-Daten laden!",
        instructionsMd: "**Deine Aufgabe:**\n\nErstelle eine `SpielerApp` die beim Start (useEffect mit `[]`) nach 1500ms Spieler-Daten lädt (simuliert mit setTimeout). Zeige während des Ladens `'⏳ Laden...'` an, danach den Namen und die Punkte des Spielers.",
        starterCode: `const { useState, useEffect } = React;

function SpielerApp() {
  const [spieler, setSpieler] = useState(null);
  const [laden, setLaden] = useState(true);

  ___(() => {
    setTimeout(() => {
      setSpieler({ name: 'StarCoder', punkte: 2500 });
      setLaden(___);
    }, 1500);
  }, [___]);

  if (laden) return <p>⏳ Laden...</p>;

  return (
    <div>
      <h2>🎮 Spieler geladen!</h2>
      <p>Name: {spieler.___}</p>
      <p>Punkte: {spieler.___}</p>
    </div>
  );
}

ReactDOM.render(<SpielerApp />, document.getElementById('root'));`,
        check: { kind: "contains" as const, needles: ["useEffect", "setTimeout", "setSpieler", "spieler.name", "spieler.punkte"] },
        hintMd: "Ersetze die `___`:\n\n```jsx\nuseEffect(() => {\n  setTimeout(() => {\n    setSpieler({ name: 'StarCoder', punkte: 2500 });\n    setLaden(false);\n  }, 1500);\n}, []);\n// Anzeige:\n{spieler.name} und {spieler.punkte}\n```",
        solutionCode: `const { useState, useEffect } = React;

function SpielerApp() {
  const [spieler, setSpieler] = useState(null);
  const [laden, setLaden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpieler({ name: 'StarCoder', punkte: 2500 });
      setLaden(false);
    }, 1500);
  }, []);

  if (laden) return <p>⏳ Laden...</p>;

  return (
    <div>
      <h2>🎮 Spieler geladen!</h2>
      <p>Name: {spieler.name}</p>
      <p>Punkte: {spieler.punkte}</p>
    </div>
  );
}

ReactDOM.render(<SpielerApp />, document.getElementById('root'));`,
      },
    },
    {
      id: "react-20",
      trackId: "react" as const,
      title: "👑 Boss Quest: Lernkarten-App",
      summary: "Baue eine vollständige Flashcard-App mit allem was du gelernt hast – deine React-Meisterprüfung!",
      minutes: 20,
      xp: 100,
      contentMd: `# Boss Quest: Die Lernkarten-App 🃏

Du hast alle React-Grundlagen gelernt! Jetzt baust du eine vollständige **Flashcard-App** – kombiniere alles:

\`\`\`jsx
const { useState } = React;

const karten = [
  { id: 1, frage: 'Was ist JSX?', antwort: 'HTML-ähnlicher Code in JavaScript' },
  { id: 2, frage: 'Was macht useState?', antwort: 'Speichert veränderbaren Zustand' },
];

function Karte({ karte }) {
  const [aufgedeckt, setAufgedeckt] = useState(false);
  return (
    <div
      onClick={() => setAufgedeckt(!aufgedeckt)}
      style={{ border: '2px solid #4f46e5', padding: '20px',
               borderRadius: '12px', cursor: 'pointer', marginBottom: '12px' }}
    >
      <p><strong>Frage:</strong> {karte.frage}</p>
      {aufgedeckt && <p><strong>Antwort:</strong> {karte.antwort}</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>🃏 Lernkarten</h1>
      {karten.map(k => <Karte key={k.id} karte={k} />)}
    </div>
  );
}
\`\`\`

Die App nutzt: **Props**, **useState**, **map()**, **Conditional Rendering**, **Inline Styles** und **Komponenten aufteilen** – alles in einer eleganten Mini-App!

> 💡 Das ist genau so, wie echte React-Apps aufgebaut sind. Herzlichen Glückwunsch – du bist ein React-Entwickler!`,
      exercise: {
        language: "react" as const,
        title: "Baue deine eigene Lernkarten-App!",
        instructionsMd: "**Deine Aufgabe:**\n\nBaue eine Flashcard-App mit mindestens 3 Karten. Erstelle eine `Karte`-Komponente (Props: `karte`) mit eigenem `useState` für `aufgedeckt`. Klick auf eine Karte soll die Antwort ein-/ausblenden. Zeige alle Karten mit `map()` in `App` an.",
        starterCode: `const { useState } = React;

const karten = [
  { id: 1, frage: 'Was ist React?', antwort: 'Eine JavaScript-Bibliothek für UIs' },
  { id: 2, frage: 'Was ist JSX?', antwort: 'HTML-ähnlicher Code in JavaScript' },
  { id: 3, frage: 'Was macht map()?', antwort: 'Wandelt jedes Element einer Liste um' },
];

function Karte(props) {
  const [aufgedeckt, setAufgedeckt] = ___(false);

  return (
    <div
      onClick={() => setAufgedeckt(___)}
      style={{ border: '2px solid #6366f1', padding: '16px',
               borderRadius: '10px', cursor: 'pointer', marginBottom: '10px' }}
    >
      <p><strong>❓ {props.karte.___}</strong></p>
      {___ && <p>✅ {props.karte.antwort}</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>🃏 Meine Lernkarten</h1>
      <p>Klicke auf eine Karte um die Antwort zu sehen!</p>
      {karten.___(k => (
        <Karte key={k.id} karte={___} />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`,
        check: { kind: "contains" as const, needles: ["useState", "aufgedeckt", "setAufgedeckt", "map(", "props.karte.frage", "props.karte.antwort"] },
        hintMd: "Ersetze die `___`:\n\n```jsx\nconst [aufgedeckt, setAufgedeckt] = useState(false);\n// Beim Klick:\nsetAufgedeckt(!aufgedeckt)\n// Antwort anzeigen:\n{aufgedeckt && <p>✅ {props.karte.antwort}</p>}\n// In App:\n{karten.map(k => <Karte key={k.id} karte={k} />)}\n```",
        solutionCode: `const { useState } = React;

const karten = [
  { id: 1, frage: 'Was ist React?', antwort: 'Eine JavaScript-Bibliothek für UIs' },
  { id: 2, frage: 'Was ist JSX?', antwort: 'HTML-ähnlicher Code in JavaScript' },
  { id: 3, frage: 'Was macht map()?', antwort: 'Wandelt jedes Element einer Liste um' },
];

function Karte(props) {
  const [aufgedeckt, setAufgedeckt] = useState(false);

  return (
    <div
      onClick={() => setAufgedeckt(!aufgedeckt)}
      style={{ border: '2px solid #6366f1', padding: '16px',
               borderRadius: '10px', cursor: 'pointer', marginBottom: '10px' }}
    >
      <p><strong>❓ {props.karte.frage}</strong></p>
      {aufgedeckt && <p>✅ {props.karte.antwort}</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>🃏 Meine Lernkarten</h1>
      <p>Klicke auf eine Karte um die Antwort zu sehen!</p>
      {karten.map(k => (
        <Karte key={k.id} karte={k} />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`,
      },
    },
  ],
};

export const TRACKS: Track[] = [WEB, JS, PY, KI, SQL, REACT];

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
