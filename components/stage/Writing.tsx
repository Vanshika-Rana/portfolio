"use client";

import { useState } from "react";
import { archives, articles, newsletter } from "@/app/content";
import { chime } from "@/components/stage/sound";

type Entry = {
  title: string;
  publication: string;
  category: string;
  date: string;
  readTime: string;
  url: string;
  description: string;
};

const entries: Entry[] = [
  { ...newsletter, category: "Newsletter" },
  ...articles,
];

export function Writing() {
  const [active, setActive] = useState(0);
  const shown = entries[active];

  return (
    <div className="grid h-full min-h-0 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_19rem]">
      <ol className="pane px-5 pb-8 pt-6 lg:px-10 lg:pb-10 lg:pt-10">
        {entries.map((entry, index) => {
          const selected = index === active;
          return (
            <li key={entry.url}>
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => {
                  setActive(index);
                  chime();
                }}
                onFocus={() => setActive(index)}
                className={`flex flex-col gap-1 border-b border-edge py-4 transition-colors duration-300 sm:flex-row sm:items-baseline sm:gap-5 ${
                  selected ? "text-bone" : "text-ash hover:text-bone"
                }`}
              >
                <span
                  className={`font-mono text-[11px] tabular-nums ${
                    selected ? "text-signal" : "text-ash"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[17px] font-medium leading-snug text-bone lg:text-xl">
                  {entry.title}
                </span>
                <span className="font-mono text-[11px] text-ash sm:text-right">
                  {entry.publication}
                  <span className="mx-2 text-edge">/</span>
                  {entry.readTime}
                </span>
              </a>
              <p className="border-b border-edge pb-4 text-sm leading-relaxed text-ash lg:hidden">
                {entry.description}
              </p>
            </li>
          );
        })}

        <li className="flex flex-wrap gap-x-8 gap-y-3 pt-6">
          {archives.map((archive) => (
            <a
              key={archive.href}
              href={archive.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-ash underline decoration-edge underline-offset-4 hover:text-signal hover:decoration-signal"
            >
              {archive.label}
            </a>
          ))}
        </li>
      </ol>

      <aside
        aria-hidden="true"
        className="hidden min-h-0 flex-col justify-end border-l border-edge px-7 pb-12 pt-10 lg:flex"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
          {shown.category}
        </p>
        <p key={shown.url} className="enter mt-4 text-lg leading-snug">
          {shown.title}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ash">
          {shown.description}
        </p>
        <p className="mt-6 border-t border-edge pt-4 font-mono text-[11px] text-ash">
          {shown.publication}
          <span className="mx-2 text-edge">/</span>
          {shown.date}
          <span className="mx-2 text-edge">/</span>
          {shown.readTime}
        </p>
      </aside>
    </div>
  );
}
