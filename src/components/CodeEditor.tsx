"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ExerciseLanguage } from "@/lib/curriculum";
import { safeStorage } from "@/lib/storage";

function draftKey(lessonId: string) {
  return `codequest_draft_v1:${lessonId}`;
}

export function CodeEditor({
  lessonId,
  language,
  initialCode,
  onChange,
}: {
  lessonId: string;
  language: ExerciseLanguage;
  initialCode: string;
  onChange: (code: string) => void;
}) {
  const key = useMemo(() => draftKey(lessonId), [lessonId]);
  const [code, setCode] = useState(initialCode);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const raw = safeStorage.getItem(key);
    if (raw && raw.trim().length > 0) {
      setCode(raw);
      onChange(raw);
    } else {
      setCode(initialCode);
      onChange(initialCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    safeStorage.setItem(key, code);
  }, [key, code]);

  function update(next: string) {
    setCode(next);
    onChange(next);
  }

  return (
    <div className="crafting-panel p-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="font-pixel text-[8px] leading-loose text-[#44F7E0]">
          ⚒️ Crafting-Tisch · {language.toUpperCase()}
        </div>
        <button
          type="button"
          className="btn-pixel btn-pixel--stone px-2 py-1"
          onClick={() => update(initialCode)}
        >
          Reset
        </button>
      </div>
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => update(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== "Tab") return;
          e.preventDefault();
          const el = textareaRef.current;
          if (!el) return;
          const start = el.selectionStart ?? 0;
          const end = el.selectionEnd ?? 0;
          const next = code.slice(0, start) + "  " + code.slice(end);
          update(next);
          requestAnimationFrame(() => {
            el.selectionStart = el.selectionEnd = start + 2;
          });
        }}
        spellCheck={false}
        className="h-64 w-full resize-y bg-transparent p-3 font-mono text-sm leading-6 text-zinc-50 outline-none ring-1 ring-[#44F7E0]/20 focus:ring-2 focus:ring-[#44F7E0]/40"
      />
    </div>
  );
}
