"use client";

import { useEffect, useMemo, useState } from "react";

type SQLResult = { columns: string[]; rows: (string | number | null)[][] };
type SQLRunResult = { results: SQLResult[]; error?: string; done: boolean };

function escapeForScript(code: string) {
  return code.replaceAll("</script>", "<\\/script>");
}

// Pre-seeded database schema + data injected into every SQL sandbox
const SEED_SQL = `
CREATE TABLE tiere (id INTEGER PRIMARY KEY, name TEXT, art TEXT, gewicht_kg REAL, schnell INTEGER);
INSERT INTO tiere VALUES
  (1,'Elefant','Säugetier',5000,0),(2,'Gepard','Säugetier',60,1),
  (3,'Delfin','Säugetier',150,1),(4,'Adler','Vogel',5,1),
  (5,'Pinguin','Vogel',4,0),(6,'Python','Reptil',80,0),(7,'Schildkröte','Reptil',30,0);

CREATE TABLE schueler (id INTEGER PRIMARY KEY, name TEXT, klasse INTEGER, punkte INTEGER, lieblingsfach TEXT);
INSERT INTO schueler VALUES
  (1,'Mia',5,95,'Mathe'),(2,'Tim',5,78,'Sport'),(3,'Lena',6,88,'Deutsch'),
  (4,'Max',6,92,'Informatik'),(5,'Sara',7,71,'Kunst'),(6,'Ben',7,84,'Mathe'),
  (7,'Julia',8,96,'Informatik'),(8,'Noah',8,67,'Sport');

CREATE TABLE laender (id INTEGER PRIMARY KEY, name TEXT, hauptstadt TEXT, einwohner_mio REAL, kontinent TEXT);
INSERT INTO laender VALUES
  (1,'Deutschland','Berlin',84,'Europa'),(2,'Frankreich','Paris',68,'Europa'),
  (3,'Japan','Tokio',125,'Asien'),(4,'Brasilien','Brasilia',215,'Südamerika'),
  (5,'Kanada','Ottawa',38,'Nordamerika'),(6,'Australien','Canberra',26,'Australien'),
  (7,'Ägypten','Kairo',104,'Afrika');
`;

export function SQLRunner({
  code,
  runSignal,
  onResult,
}: {
  code: string;
  runSignal: number;
  onResult?: (r: { stdout: string; error?: string; done: boolean }) => void;
}) {
  const [result, setResult] = useState<SQLRunResult>({ results: [], done: false });

  const runId = useMemo(() => `sql_${runSignal}`, [runSignal]);

  const srcDoc = useMemo(() => {
    const userSQL = escapeForScript(code);
    const seedSQL = escapeForScript(SEED_SQL);
    return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { margin: 0; background: #09090b; color: #f4f4f5; font-family: ui-monospace, monospace; font-size: 13px; padding: 12px; }
    table { border-collapse: collapse; width: 100%; margin-bottom: 12px; }
    th { background: #27272a; color: #a1a1aa; text-align: left; padding: 4px 10px; border: 1px solid #3f3f46; }
    td { padding: 4px 10px; border: 1px solid #3f3f46; color: #f4f4f5; }
    tr:nth-child(even) td { background: #18181b; }
    .error { color: #fca5a5; padding: 8px; border: 1px solid #7f1d1d; border-radius: 6px; background: #450a0a; }
    .info { color: #a1a1aa; font-size: 11px; margin-top: 4px; }
    .success { color: #86efac; }
  </style>
</head>
<body>
  <div id="out"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.js" crossorigin="anonymous"></script>
  <script>
    const runId = ${JSON.stringify(runId)};
    function send(type, payload) {
      parent.postMessage({ source: "codequest_sql", runId, type, payload }, "*");
    }
    const out = document.getElementById("out");

    function renderTable(res) {
      if (!res || !res.columns || res.columns.length === 0) {
        out.innerHTML += '<p class="success">✓ Abfrage erfolgreich (keine Rückgabe)</p>';
        return;
      }
      let html = '<table><tr>' + res.columns.map(c => '<th>' + c + '</th>').join('') + '</tr>';
      for (const row of res.values) {
        html += '<tr>' + row.map(v => '<td>' + (v === null ? '<i>NULL</i>' : v) + '</td>').join('') + '</tr>';
      }
      html += '</table>';
      out.innerHTML += html;
      out.innerHTML += '<p class="info">' + res.values.length + ' Zeile(n) · ' + res.columns.length + ' Spalte(n)</p>';
    }

    initSqlJs({ locateFile: f => 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/' + f })
      .then(SQL => {
        const db = new SQL.Database();
        try {
          db.run(${JSON.stringify(SEED_SQL)});
        } catch(e) {
          out.innerHTML = '<div class="error">Seed-Fehler: ' + e.message + '</div>';
          send("done", "");
          return;
        }

        const userSQL = ${JSON.stringify(userSQL)};
        let allText = "";
        try {
          const stmts = db.iterateStatements(userSQL);
          let hasResults = false;
          for (const stmt of stmts) {
            const cols = stmt.getColumnNames();
            if (cols.length > 0) {
              hasResults = true;
              const rows = [];
              while (stmt.step()) rows.push(stmt.getAsObject());
              // build result for table rendering
              const values = rows.map(r => cols.map(c => r[c]));
              const res = { columns: cols, values };
              renderTable(res);
              // collect text for verification
              for (const row of values) {
                allText += row.join("\\t") + "\\n";
              }
            } else {
              stmt.step();
            }
            stmt.free();
          }
          if (!hasResults) {
            out.innerHTML += '<p class="success">✓ SQL ausgeführt</p>';
          }
          send("result", allText);
        } catch(e) {
          const msg = e.message || String(e);
          out.innerHTML += '<div class="error">⚠ ' + msg + '</div>';
          send("error", msg);
        }
        send("done", "");
        db.close();
      })
      .catch(e => {
        out.innerHTML = '<div class="error">sql.js konnte nicht geladen werden: ' + e.message + '</div>';
        send("done", "");
      });
  </script>
</body>
</html>`;
  }, [code, runId]);

  useEffect(() => {
    let stdout = "";
    let error: string | undefined;

    function onMessage(e: MessageEvent) {
      const data = e.data as
        | { source?: string; runId?: string; type?: string; payload?: string }
        | undefined;
      if (!data || data.source !== "codequest_sql" || data.runId !== runId) return;

      if (data.type === "result") stdout = String(data.payload ?? "");
      if (data.type === "error") error = String(data.payload ?? "");
      if (data.type === "done") {
        setResult({ results: [], error, done: true });
        onResult?.({ stdout, error, done: true });
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [runId, onResult]);

  const hasRun = runSignal > 0;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2 text-xs text-zinc-200">
        <div className="font-semibold">🗄️ Datenbank-Ausgabe</div>
      </div>
      {hasRun ? (
        <iframe
          key={runId}
          sandbox="allow-scripts"
          className="h-72 w-full bg-[#09090b]"
          srcDoc={srcDoc}
          title="SQL Ausgabe"
        />
      ) : (
        <div className="flex h-72 items-center justify-center text-sm text-zinc-500">
          ▶️ Klicke auf <span className="mx-1 rounded bg-white/10 px-2 py-0.5 font-semibold text-zinc-300">Ausführen</span> um die Abfrage zu starten
        </div>
      )}
    </div>
  );
}
