import type { Track } from "./types";

export const kiTrack: Track =
{
  id: "ki",
  title: "KI-Festung",
  emoji: "🤖",
  description: "Lerne wie du ChatGPT, Gemini und andere KIs richtig nutzt – werde zum Prompt-Meister!",
  color: "violet",
  recommendedAge: "ab 9 Jahren",
  lessons: [
    {
      id: "ki-01",
      trackId: "ki",
      title: "🤖 Die KI-Festung entdecken",
      summary: "Tief im Nether versteckt sich die KI-Festung – lerne was darin wohnt!",
      minutes: 10,
      xp: 40,
      contentMd: `# 🏰 Die KI-Festung

> *"Jenseits des Nethers liegt eine gewaltige Festung. Darin wohnt kein Drache – sondern ein Gehirn aus Millionen Zahlen. Es hat alle Bücher der Welt gelesen. Du kannst mit ihm sprechen!"*

## Was ist Künstliche Intelligenz?

Eine **KI (Künstliche Intelligenz)** ist wie ein mächtiger NPC in der Festung:
- Sie liest und schreibt Texte (wie ein Bibliotheks-Villager)
- Sie beantwortet Fragen (wie ein Orakel-Block)
- Sie erstellt Bilder (wie ein Maler-Enderman)
- Sie hilft beim Lernen (wie ein Lehrer-Golem)

## Bekannte KI-Festungen:
| KI | Gebaut von | Superkraft |
|----|-------------|------------|
| **ChatGPT** | OpenAI | Text, Code, Bilder |
| **Gemini** | Google | Text, Bilder, Suche |
| **Claude** | Anthropic | Text, Analyse, Code |
| **Copilot** | Microsoft | Text, Bilder, Office |

## Was eine KI NICHT ist:
- ❌ Ein Roboter mit Körper (kein Iron Golem!)
- ❌ Allwissend (sie macht Fehler wie ein Creeper)
- ❌ Bewusst oder lebendig
- ❌ Immer richtig

## Was eine KI IST:
- ✅ Dein mächtigster Assistent in der Festung
- ✅ Ein Erklärungs-Champion
- ✅ Kreativ wie ein Baumeister
- ✅ Schnell wie ein Ender-Pearl-Wurf`,
      exercise: {
        language: "javascript",
        title: "Betritt die KI-Festung!",
        instructionsMd: `Du stehst vor dem Tor der KI-Festung. Um einzutreten, musst du deinen **Beschwörungs-Prompt** aufschreiben!

Schreibe deinen Prompt (deine Frage an eine KI) als JavaScript-String in die Variable \`meinPrompt\`.

Ein guter Prompt enthält das Wort "KI" oder "Künstliche Intelligenz"!`,
        starterCode: `// Schreibe hier deinen Prompt für die KI-Festung:
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
      title: "📜 Beschwörungsformeln (Prompts)",
      summary: "Lerne die Zauberformel: ein guter Prompt öffnet alle Tore der KI-Festung!",
      minutes: 12,
      xp: 45,
      contentMd: `# 📜 Die Kunst der Beschwörungsformel

> *"In der KI-Festung gibt es ein Zauberbuch. Wer die richtige Formel eingibt, bekommt die mächtigste Antwort. Wer zu vage flüstert, bekommt nur Nebel..."*

## Prompt = Deine Beschwörungsformel für die KI

Wenn du mit ChatGPT oder Gemini schreibst, heißt deine Nachricht **Prompt** – wie eine Zauberformel!

## Schwache vs. Mächtige Formeln:

### ❌ Schwache Formel (Creeper-Explosion 💥):
\`\`\`
"Erkläre Dinosaurier"
\`\`\`
*Problem: Zu vage! Was soll erklärt werden? Wie lang? Für wen?*

### ✅ Mächtige Formel (Diamant-Schwert ⚔️):
\`\`\`
"Erkläre mir Dinosaurier so als wärst du ein Museumsführer
für 10-jährige Kinder. Nenn mir 3 interessante Fakten
und mach es spannend!"
\`\`\`
*Besser! Du sagst: WAS, WIE, FÜR WEN und WIE VIELE Infos.*

## Das Diamant-Rezept:
**WAS** du wissen willst + **WIE** es erklärt werden soll + **FÜR WEN** es ist

## Beispiel-Formeln:
- *"Erkläre Mathematik wie ein Piraten-Kapitän für Kinder"*
- *"Schreibe ein Creeper-Gedicht im Stil von Dr. Seuss"*
- *"Fasse diesen Text in 3 Sätzen zusammen"*`,
      exercise: {
        language: "javascript",
        title: "Schmied die Diamant-Formel!",
        instructionsMd: `Die schwache Formel ist bereits gegeben. Schmiede eine **mächtigere Beschwörungsformel** die erklärt:
- WAS du lernen willst (Schwerkraft)
- WIE (einfach, lustig)
- FÜR WEN (für dich, 10 Jahre alt)`,
        starterCode: `const schlechterPrompt = "Erkläre Schwerkraft";

// Schmiede eine mächtigere Beschwörungsformel:
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


