"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki/bundle/web";
import materialDarker from 'shiki/themes/material-theme-darker.mjs';
import materialLighter from 'shiki/themes/material-theme-lighter.mjs';

interface CodeHighlighterProps {
  code: string;
  language?: string;
}

export function CodeHighlighter({ code, language = "tsx" }: CodeHighlighterProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    async function highlight() {
      const html = await codeToHtml(code, {
        lang: language,
        theme: materialDarker,
        themes: {
          light: materialLighter,
          dark: materialDarker
        },
        transformers: [
          {
            pre(node) {
              node.properties.style = '';
              node.properties.className = 'bg-transparent dark:bg-transparent';
              return node;
            },
            code(node) {
              node.properties.style = '';
              node.properties.className = 'block w-full';
              return node;
            },
            line(node) {
              node.properties.className = 'line';
              return node;
            }
          },
        ],
      });
      setHighlightedCode(html);
    }

    highlight();
  }, [code, language]);

  return (
    <div className="relative rounded-lg bg-muted dark:bg-muted p-2">
      <div
        className="font-mono text-[13px] leading-relaxed overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
}