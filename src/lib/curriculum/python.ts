import type { Track } from "./types";

export const pythonTrack: Track =
{
  id: "python",
  title: "Schlangen-Tempel",
  emoji: "🐍",
  description: "Python ist einfach zu lernen und super mächtig – perfekt für Spiele, Rechner und sogar KI!",
  color: "emerald",
  recommendedAge: "ab 10 Jahren",
  lessons: [
    {
      id: "py-01",
      trackId: "python",
      title: "🐍 Wecke die Schlange auf!",
      summary: "Die Python-Schlange schläft im Tempel – wecke sie mit print() auf!",
      minutes: 12,
      xp: 45,
      contentMd: `# Wecke die Schlange auf!

Tief im **Schlangen-Tempel** schläft eine mächtige Python-Schlange.
Sie kann alles – Spiele, Rechner, sogar KI! Aber zuerst musst du sie wecken.

Das geheime Zauberwort heißt **print()** – damit flüstert die Schlange:

\`\`\`python
print("Ich bin wach!")
print("Ssssss... Python ist bereit!")
\`\`\`

## Die Schlange kann auch rechnen! 🧮

\`\`\`python
print(10 + 5)   # 15 Diamanten
print(10 - 3)   # 7 Herzen übrig
print(4 * 6)    # 24 Blöcke abgebaut
print(2 ** 10)  # 1024 Erfahrungspunkte
\`\`\`

## Kein Semikolon!

Anders als JavaScript braucht Python **kein** \`;\` am Ende – die Schlange versteht dich auch so!

> 💡 Python liest sich fast wie normales Deutsch – das macht es super einfach!`,
      exercise: {
        language: "python",
        title: "Wecke die Python-Schlange!",
        instructionsMd: `**Deine Mission:**

Die Schlange im Tempel wartet auf das Zauberwort. Ruf ihr genau zu:

\`Hallo aus Python! 🐍\``,
        starterCode: "print('???')\n",
        check: { kind: "python_stdout_includes", expected: "Hallo aus Python!" },
        solutionCode: "print('Hallo aus Python! 🐍')\n",
      },
    },
    {
      id: "py-02",
      trackId: "python",
      title: "🎒 Rucksack-Variablen",
      summary: "Variablen sind wie Rucksack-Slots – pack deine Items rein und ruf sie ab!",
      minutes: 15,
      xp: 55,
      contentMd: `# Rucksack-Variablen!

In Minecraft hast du einen **Rucksack** mit Slots für verschiedene Items.
In Python heißen diese Slots **Variablen** – du packst etwas rein und holst es wieder raus!

\`\`\`python
spieler_name = "Alex"        # 👤 Name-Slot
creeper_schaden = 49         # 💥 Schaden durch Creeper
diamanten = 64               # 💎 Diamanten im Rucksack
hat_ruestung = True          # ⚔️ Rüstung angelegt?
\`\`\`

Kein \`const\` oder \`let\` nötig – Python packt einfach rein!

## Inventar anzeigen – f-Strings 📋

\`\`\`python
spieler_name = "Steve"
leben = 20

print(f"Spieler: {spieler_name}")
print(f"Leben: {leben} Herzen")
# Gibt aus: Spieler: Steve / Leben: 20 Herzen
\`\`\`

> 💡 Das \`f\` vor dem String steht für **f**ormatted – super praktisch!

## Was passt in einen Rucksack-Slot?

| Slot-Typ | Minecraft-Beispiel | Python-Name |
|----------|-------------------|------------|
| Text | Spieler-Name | \`str\` |
| Ganzzahl | Diamanten | \`int\` |
| Kommazahl | Schaden-Multiplikator | \`float\` |
| Ja/Nein | Rüstung an? | \`bool\` |`,
      exercise: {
        language: "python",
        title: "Dein Minecraft-Inventar-Steckbrief!",
        instructionsMd: `**Deine Mission:**

Die Schlange braucht deinen Steckbrief für das Abenteuer:

1. Erstelle Variablen \`name\` und \`alter\`
2. Gib aus: \`Ich heiße [Name] und bin [Alter] Jahre alt.\`

Nutze einen f-String!`,
        starterCode: "# Rucksack befüllen\nname = \"???\"\nalter = 0\n\n# Inventar ausgeben\n",
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


