import type { Track } from "./types";

export const reactTrack: Track =
{
  id: "react",
  title: "Reaktor-Turm",
  emoji: "⚛️",
  description: "Baue moderne, interaktive UIs mit dem beliebtesten JavaScript-Framework – mit Komponenten, Props und Hooks!",
  color: "rose",
  recommendedAge: "ab 14 Jahren",
  lessons: [
    {
      id: "react-01",
      trackId: "react",
      title: "⚛️ Reaktor-Blöcke bauen (React.createElement)",
      summary: "Im Reaktor-Turm baust du Blöcke aus Code – dein erster React-Block!",
      minutes: 10,
      xp: 40,
      contentMd: `# ⚛️ Der Reaktor-Turm

> *"Im höchsten Turm des Landes liegt der Reaktor. Hier baut man keine Holzblöcke – hier baut man Code-Blöcke. Jeden Block kannst du immer wieder verwenden!"*

## Was ist React?

React ist deine **Block-Baumaschine** für Webseiten. Statt HTML direkt zu schreiben, baust du **Komponenten**: wiederverwendbare Code-Blöcke – wie \`<Schwert />\`, \`<Rüstung />\` oder \`<Inventar />\`.

Dein erster Block entsteht mit \`React.createElement\`:

\`\`\`javascript
const block = React.createElement('h1', null, 'Mein erster Reaktor-Block!');
ReactDOM.render(block, document.getElementById('root'));
\`\`\`

> 💡 Das \`null\` ist der Platz für Block-Eigenschaften (Props) – die lernst du im nächsten Level!`,
      exercise: {
        language: "react",
        title: "Bau deinen ersten Reaktor-Block!",
        instructionsMd: `**Deine Aufgabe:**\n\nBaue mit \`React.createElement\` einen \`<h1>\`-Block mit dem Text "Ich lerne React!" und platziere ihn im \`root\`-Container.`,
        starterCode: `const element = React.createElement('h1', null, '___');
ReactDOM.render(element, document.getElementById('root'));`,
        check: { kind: "contains", needles: ["React.createElement", "ReactDOM.render"] },
        hintMd: "Ersetze `___` mit deinem Block-Text:\n\n```javascript\nconst element = React.createElement('h1', null, 'Ich lerne React!');\nReactDOM.render(element, document.getElementById('root'));\n```",
        solutionCode: `const element = React.createElement('h1', null, 'Ich lerne React!');
ReactDOM.render(element, document.getElementById('root'));`,
      },
    },
    {
      id: "react-02",
      trackId: "react",
      title: "📐 Block-Schablonen (JSX)",
      summary: "JSX ist deine Block-Schablone – schreibe HTML direkt in JavaScript wie ein Bauplan!",
      minutes: 10,
      xp: 40,
      contentMd: `# 📐 Block-Schablonen im Reaktor

> *"Ein erfahrener Baumeister zeichnet erst einen Bauplan, bevor er baut. JSX ist dein Bauplan – du skizzierst Blöcke direkt im Code!"*

## JSX – Der Bauplan-Modus

JSX ist eine Spezial-Schreibweise für React: Du kannst HTML-ähnliche Blöcke direkt in JavaScript zeichnen!

\`\`\`jsx
function Begruessung() {
  return <h1>Hallo, Reaktor-Turm!</h1>;
}

ReactDOM.render(<Begruessung />, document.getElementById('root'));
\`\`\`

JSX sieht wie HTML aus, ist aber eigentlich JavaScript! Babel übersetzt deinen Bauplan automatisch für den Browser.

> 💡 Block-Namen (Komponenten) müssen immer mit einem **Großbuchstaben** beginnen: \`<MeinSchwert />\`, \`<Rüstung />\`.`,
      exercise: {
        language: "react",
        title: "Zeiche deine erste Block-Schablone!",
        instructionsMd: `**Deine Aufgabe:**\n\nErstelle eine Funktion \`App\`, die einen \`<h1>\`-Block mit dem Text "Meine React-App" zurückgibt. Platziere \`<App />\` im \`root\`-Container.`,
        starterCode: `function App() {
  return <h1>___</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));`,
        check: { kind: "contains", needles: ["function App", "return", "<h1>", "ReactDOM.render"] },
        hintMd: "Ersetze `___` mit deinem Block-Text:\n\n```jsx\nfunction App() {\n  return <h1>Meine React-App</h1>;\n}\n```",
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

