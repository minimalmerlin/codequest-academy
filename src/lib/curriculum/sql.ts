import type { Track } from "./types";

export const sqlTrack: Track =
{
  id: "sql",
  title: "Daten-Schacht",
  emoji: "🗄️",
  description: "Lerne, wie du Datenbanken abfragst und riesige Datemengen blitzschnell findest – wie ein echter Daten-Detektiv!",
  color: "sky",
  recommendedAge: "ab 12 Jahren",
  lessons: [
    {
      id: "sql-01",
      trackId: "sql",
      title: "⛏️ Datenminen abbauen (SELECT *)",
      summary: "Hack alle Erze auf einmal aus der Daten-Mine heraus – mit SELECT *!",
      minutes: 8,
      xp: 30,
      contentMd: `# ⛏️ Die Daten-Mine aufschlagen

> *"Tief im Daten-Schacht liegen riesige Erz-Adern – Zeilen voller Informationen. Mit dem richtigen Abbau-Befehl holst du alles ans Tageslicht!"*

## Was ist SQL?

SQL ist dein **Spitzhacken-Befehl** für Datenbanken. Du fragst damit riesige Datentabellen ab – wie ein Bergarbeiter der Erze sucht.

Der erste Abbau-Befehl: \`SELECT * FROM tabellenname\` – das \`*\` bedeutet "alle Erze raus!".

\`\`\`sql
SELECT * FROM tiere;
\`\`\`

Das holt dir **alle Zeilen und alle Spalten** aus der Erz-Ader \`tiere\`.

> 💡 Das Semikolon \`;\` am Ende nicht vergessen – es sagt der Mine: "Abbau fertig!"`,
      exercise: {
        language: "sql",
        title: "Hack die Tier-Mine auf!",
        instructionsMd: `**Deine Aufgabe:**\n\nHack alle Erze aus der Daten-Ader \`tiere\` heraus!\n\nErsetze die Lücke \`__\` mit dem richtigen Tabellennamen.`,
        starterCode: "SELECT * FROM __;",
        check: { kind: "sql_result_includes", expected: "Elefant" },
        hintMd: "Die Erz-Ader heißt `tiere`. Benutze: `SELECT * FROM tiere;`",
        solutionCode: "SELECT * FROM tiere;",
      },
    },
    {
      id: "sql-02",
      trackId: "sql",
      title: "🔦 Gezielt abbauen (Spalten wählen)",
      summary: "Nur bestimmte Erz-Adern anzapfen – wähle gezielt die Spalten die du willst!",
      minutes: 8,
      xp: 35,
      contentMd: `# 🔦 Der Abbau-Filter

> *"Ein echter Bergarbeiter nimmt nicht einfach alles mit – er sucht gezielt nach Diamanten. So geht's auch in der Daten-Mine!"*

## Gezielt abbauen statt alles raushacken

Statt \`*\` (alles) sagst du genau, welche Erz-Adern (Spalten) du willst.

\`\`\`sql
SELECT name, art FROM tiere;
\`\`\`

Schreibe die Spaltennamen nach \`SELECT\`, getrennt durch Kommas – wie eine Einkaufsliste für die Mine!

Das spart Zeit wenn eine Tabelle viele Spalten hat und du nur bestimmte Schätze brauchst.

> 💡 Groß- und Kleinschreibung bei Spaltennamen ist egal: \`Name\` und \`name\` funktionieren beide.`,
      exercise: {
        language: "sql",
        title: "Nur Name und Art aus der Mine!",
        instructionsMd: `**Deine Aufgabe:**\n\nHack aus der Daten-Ader \`tiere\` nur die Spalten \`name\` und \`art\` heraus.`,
        starterCode: "SELECT __, __ FROM tiere;",
        check: { kind: "sql_result_includes", expected: "Säugetier" },
        hintMd: "Schreib beide Erz-Namen nach SELECT:\n\n`SELECT name, art FROM tiere;`",
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


