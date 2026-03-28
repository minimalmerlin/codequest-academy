import type { Project } from "./types";

export const PROJECTS: Project[] =
[
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

