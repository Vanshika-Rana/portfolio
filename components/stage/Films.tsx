"use client";

import { useState } from "react";
import { videos } from "@/app/content";
import { chime } from "@/components/stage/sound";

export function Films({ active }: { active: boolean }) {
  const [index, setIndex] = useState(0);
  const film = videos[index];

  return (
    <div className="pane h-full px-5 pb-8 pt-6 lg:px-10 lg:pb-10 lg:pt-10">
      <div className="mx-auto grid max-w-[64rem] gap-6 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-10">
        <div className="enter border border-edge bg-stage p-2 lg:p-3">
          <div className="aspect-video bg-black">
            {active ? (
              <iframe
                key={film.id}
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${film.id}`}
                title={film.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : null}
          </div>
        </div>

        <div role="group" aria-label="Films" className="flex flex-col gap-1">
          {videos.map((video, position) => {
            const selected = position === index;
            return (
              <button
                key={video.id}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setIndex(position);
                  chime();
                }}
                className={`min-h-[44px] border-l-2 py-3 pl-4 text-left transition-colors duration-300 ${
                  selected
                    ? "border-signal text-bone"
                    : "border-edge text-ash hover:text-bone"
                }`}
              >
                <span className="font-mono text-[11px] text-ash">
                  {String(position + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-[15px] font-medium leading-snug">
                  {video.title}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-ash">
                  {video.note}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
