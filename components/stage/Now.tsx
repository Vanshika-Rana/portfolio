import Image from "next/image";
import { about, experience, figures, profile } from "@/app/content";

export function Now({ portrait }: { portrait: boolean }) {
  const current = experience[0];

  return (
    <div className="pane h-full px-5 pb-8 pt-6 lg:px-10 lg:pb-10 lg:pt-7">
      <div className="stagger mx-auto grid max-w-[66rem] gap-5 lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-10">
        <div className="flex items-end gap-4 lg:order-2 lg:block">
          {portrait ? (
            <Image
              src={profile.portrait}
              alt="Vanshika Rana speaking at a developer event"
              width={640}
              height={800}
              priority
              className="aspect-[4/5] w-24 shrink-0 object-cover sm:w-32 lg:w-full"
            />
          ) : (
            <div className="flex aspect-[4/5] w-24 shrink-0 items-end border border-edge p-2 sm:w-32 lg:w-full">
              <p className="font-mono text-[10px] text-ash">{profile.name}</p>
            </div>
          )}
          <p className="font-mono text-[11px] leading-relaxed text-ash lg:hidden">
            {profile.location}
            <br />
            {profile.availability}
          </p>
        </div>

        <div className="lg:order-1">
          <p className="max-w-[54ch] text-lg leading-relaxed lg:text-xl">
            {profile.standfirst}
          </p>
          <div className="mt-5 space-y-3.5 text-[15px] leading-relaxed text-ash">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="max-w-[62ch]">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ash">
            {profile.education}
          </p>
          <a
            href={profile.fractional.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex min-h-[44px] items-center gap-2.5 bg-signal px-5 font-mono text-[12px] uppercase tracking-[0.2em] text-void transition-colors duration-300 hover:bg-bone"
          >
            {profile.fractional.label}
            <span
              aria-hidden="true"
              className="text-[15px] leading-none transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              &#8599;
            </span>
          </a>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-edge pt-5 sm:grid-cols-4 lg:order-3 lg:col-span-2">
          {figures.map((figure) => (
            <div key={figure.label}>
              <dt className="text-3xl font-medium tabular-nums lg:text-4xl">
                {figure.value}
              </dt>
              <dd className="mt-1 max-w-[12rem] font-mono text-[11px] leading-relaxed text-ash">
                {figure.label}
              </dd>
            </div>
          ))}
        </dl>

        <p className="font-mono text-xs leading-relaxed text-ash lg:order-4 lg:col-span-2">
          <span className="text-signal">Now</span> {current.role} at{" "}
          {current.url ? (
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone underline decoration-edge underline-offset-4 hover:decoration-signal"
            >
              {current.company}
            </a>
          ) : (
            current.company
          )}
          , {current.period.toLowerCase()}
        </p>
      </div>
    </div>
  );
}
