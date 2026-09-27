"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/app/content";
import { Films } from "@/components/stage/Films";
import { Now } from "@/components/stage/Now";
import { Stack } from "@/components/stage/Stack";
import { Work } from "@/components/stage/Work";
import { Write } from "@/components/stage/Write";
import { Writing } from "@/components/stage/Writing";
import { chime, setMuted, unlock } from "@/components/stage/sound";

const TABS = [
  { id: "about", word: "Now" },
  { id: "experience", word: "Work" },
  { id: "writing", word: "Writing" },
  { id: "videos", word: "Films" },
  { id: "skills", word: "Stack" },
  { id: "contact", word: "Write" },
];

export function Stage({ portrait }: { portrait: boolean }) {
  const [active, setActive] = useState(0);
  const [sound, setSound] = useState(true);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.replace("#", "");
      const index = TABS.findIndex((tab) => tab.id === id);
      if (index >= 0) setActive(index);
    };

    fromHash();
    window.addEventListener("hashchange", fromHash);
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);

    return () => {
      window.removeEventListener("hashchange", fromHash);
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  const go = (index: number, moveFocus = false) => {
    setActive(index);
    chime(true);
    if (moveFocus) buttons.current[index]?.focus();
    window.history.replaceState(null, "", `#${TABS[index].id}`);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = TABS.length - 1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      go(active === last ? 0 : active + 1, true);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      go(active === 0 ? last : active - 1, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      go(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      go(last, true);
    }
  };

  const panels = [
    <Now key="about" portrait={portrait} />,
    <Work key="experience" />,
    <Writing key="writing" />,
    <Films key="videos" active={active === 3} />,
    <Stack key="skills" />,
    <Write key="contact" />,
  ];

  return (
    <div className="relative z-10 flex h-[100dvh] flex-col">
      <header className="masthead enter shrink-0 border-b border-edge px-5 lg:px-10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ash">
            {profile.name}
          </p>
          <span className="flex items-baseline gap-5">
            <span className="hidden font-mono text-[11px] text-ash lg:inline">
              {profile.location}
              <span className="mx-2 text-edge">/</span>
              {profile.availability}
            </span>
            <button
              type="button"
              aria-pressed={sound}
              onClick={() => {
                const next = !sound;
                setSound(next);
                setMuted(!next);
                if (next) {
                  unlock();
                  chime(true);
                }
              }}
              className="flex min-h-[44px] items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ash transition-colors duration-300 hover:text-bone"
            >
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 ${sound ? "bg-signal" : "bg-edge"}`}
              />
              Sound {sound ? "on" : "off"}
            </button>
          </span>
        </div>
        <h1 className="mt-2 font-medium leading-[1.04] tracking-tight lg:mt-3">
          {profile.headlineLead} into{" "}
          <span className="text-signal">adoption</span> stories.
        </h1>
        <p className="mt-2 text-sm text-ash lg:text-base">{profile.role}</p>
      </header>

      <div
        role="tablist"
        aria-label="Sections"
        onKeyDown={onKeyDown}
        className="shrink-0 border-b border-edge px-5 lg:px-10"
      >
        <div className="flex flex-wrap gap-x-4 sm:gap-x-8 lg:gap-x-10">
          {TABS.map((tab, index) => {
            const selected = index === active;
            return (
              <button
                key={tab.id}
                ref={(node) => {
                  buttons.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-controls={tab.id}
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => go(index)}
                className="group flex items-baseline gap-2 py-3"
              >
                <span
                  className={`hidden font-mono text-[10px] tabular-nums lg:inline ${
                    selected ? "text-signal" : "text-edge"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`rail-word border-b-2 pb-1 text-[15px] leading-none min-[420px]:text-[17px] sm:text-xl lg:text-[1.75rem] ${
                    selected
                      ? "border-signal text-bone"
                      : "border-transparent text-ash group-hover:text-bone"
                  }`}
                >
                  {tab.word}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <main
        id="content"
        tabIndex={-1}
        className="flex min-h-0 flex-1 flex-col outline-none"
      >
        {TABS.map((tab, index) => (
          <section
            key={tab.id}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={index !== active}
            className="wipe min-h-0 flex-1"
          >
            {panels[index]}
          </section>
        ))}
      </main>
    </div>
  );
}
