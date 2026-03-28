import type { Track } from "./types";

export const jsTrack: Track =
{
  id: "js",
  title: "Script-Mine",
  emoji: "⚡",
  description: "Lerne Programmierlogik und bringe Webseiten zum Leben – mit Variablen, Schleifen und coolen Spielen!",
  color: "amber",
  recommendedAge: "ab 10 Jahren",
  lessons: [
    {
      id: "js-01",
      trackId: "js",
      title: "⚡ Sende eine Redstone-Nachricht!",
      summary: "console.log ist wie ein Redstone-Signal – du sendest eine Nachricht durch das ganze System!",
      minutes: 12,
      xp: 45,
      contentMd: `# Redstone-Signale senden!

In Minecraft gibt es **Redstone** – ein roter Staub, mit dem du elektrische Signale durch deine Basis schickst.

In JavaScript heißt das **console.log()** – du sendest damit eine Nachricht durch den Browser!

\`\`\`js
console.log("Hallo, Welt!");
console.log("Redstone aktiviert!");
\`\`\`

## Signale richtig formulieren ⚡

Text (Strings) musst du in Anführungszeichen schreiben:
- \`"doppelte Anführungszeichen"\` ✅
- \`'einfache Anführungszeichen'\` ✅
- \`Ohne Anführungszeichen\` ❌ (Redstone kurzschluss!)

> 💡 Das Signal erscheint hier unten im Ergebnis-Bereich!`,
      exercise: {
        language: "javascript",
        title: "Schicke ein Redstone-Signal!",
        instructionsMd: `**Deine Mission:**

Die CodeQuest-Zentrale wartet auf dein Redstone-Signal! Schicke genau diese Nachricht:

\`Hallo, CodeQuest!\`

⚠️ Achte auf Groß/Kleinschreibung und das Ausrufezeichen – sonst kommt das Signal nicht an!`,
        starterCode: 'console.log("Redstone-Signal: ???");\n',
        check: { kind: "js_console_includes", expected: "Hallo, CodeQuest!" },
        hintMd: "Ersetze den Text in den Anführungszeichen durch `Hallo, CodeQuest!`",
        solutionCode: 'console.log("Hallo, CodeQuest!");\n',
      },
    },
    {
      id: "js-02",
      trackId: "js",
      title: "📦 Truhen mit Namen (Variablen)",
      summary: "Variablen sind wie Minecraft-Truhen – const ist eine Obsidian-Truhe, let ist eine Holz-Truhe!",
      minutes: 15,
      xp: 55,
      contentMd: `# Truhen mit Namen – Variablen!

In Minecraft sammelst du Diamanten, Schwerter und Essen in **Truhen**.
In JavaScript heißen diese Truhen **Variablen**!

\`\`\`js
const spielerName = "Steve";   // 📦 Truhe mit dem Namen
const diamanten = 64;           // 💎 64 Diamanten drin
const hatRüstung = true;        // ⚔️ Rüstung: ja!
\`\`\`

## Obsidian-Truhe vs. Holz-Truhe 🪵

- \`const\` = **Obsidian-Truhe** – unzerstörbar, Inhalt ändert sich nie
- \`let\` = **Holz-Truhe** – kann geleert und neu befüllt werden

\`\`\`js
let leben = 20;
leben = 18; // Zwei Herzen verloren – geht mit let!
\`\`\`

## Was passt in eine Truhe?

| Typ | Minecraft-Beispiel | Code |
|-----|--------------------|------|
| Text (String) | Spieler-Name | \`"Steve"\` |
| Zahl (Number) | Diamanten | \`64\` |
| Ja/Nein (Boolean) | Rüstung an? | \`true\` |

## Truhen kombinieren 🔗

\`\`\`js
const name = "Alex";
console.log("Spieler: " + name); // Spieler: Alex
// Oder mit Template-Literal:
console.log(\`Spieler: \${name} mit \${diamanten} Diamanten!\`);
\`\`\``,
      exercise: {
        language: "javascript",
        title: "Fülle deine Minecraft-Truhen!",
        instructionsMd: `**Deine Mission:**

Steve braucht seinen Inventar-Steckbrief! Befülle die Truhen:

1. Erstelle eine \`const\`-Variable \`spielerName\` mit deinem Spieler-Namen
2. Erstelle eine \`let\`-Variable \`alter\` mit deinem Alter
3. Gib aus: \`Spieler: [Name] ist [Alter] Jahre alt.\`

**Beispiel-Ausgabe:** \`Spieler: Steve ist 12 Jahre alt.\``,
        starterCode: "// Obsidian-Truhe anlegen\nconst spielerName = \"???\";\n\n// Holz-Truhe anlegen\nlet alter = 0;\n\n// Inventar ausgeben\n",
        check: { kind: "js_console_includes", expected: "Jahre alt" },
        hintMd: "Template-Literal: `` console.log(`Spieler: ${spielerName} ist ${alter} Jahre alt.`) ``",
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


