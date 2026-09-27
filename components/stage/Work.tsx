import { communityRoles, experience } from "@/app/content";

export function Work() {
  return (
    <div className="pane-x flex h-full gap-4 px-5 pb-8 pt-6 lg:gap-5 lg:px-10 lg:pb-10 lg:pt-10">
      {experience.map((job, index) => (
        <article
          key={job.company}
          className="snap-card pane flex w-[84vw] max-w-[30rem] shrink-0 flex-col border border-edge bg-stage px-5 py-6 lg:px-7 lg:py-8"
        >
          <p className="font-mono text-[11px] text-ash">
            <span className="text-signal">{String(index + 1).padStart(2, "0")}</span>{" "}
            {job.period} / {job.location}
          </p>
          <h3 className="mt-4 text-2xl font-medium leading-tight lg:text-3xl">
            {job.url ? (
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-edge underline-offset-[6px] hover:decoration-signal"
              >
                {job.company}
              </a>
            ) : (
              job.company
            )}
          </h3>
          <p className="mt-2 text-[15px] text-bone">{job.role}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-ash">
            {job.narrative}
          </p>
          {job.metrics.length > 0 && (
            <ul className="mt-6 space-y-2 border-t border-edge pt-5 font-mono text-[11px] leading-relaxed text-bone">
              {job.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          )}
        </article>
      ))}

      {communityRoles.map((role) => (
        <article
          key={role.org}
          className="snap-card pane flex w-[84vw] max-w-[24rem] shrink-0 flex-col border border-dashed border-edge px-5 py-6 lg:px-7 lg:py-8"
        >
          <p className="font-mono text-[11px] text-ash">
            <span className="text-signal">Community</span> {role.period}
          </p>
          <h3 className="mt-4 text-xl font-medium leading-tight lg:text-2xl">
            {role.org}
          </h3>
          <p className="mt-2 text-[15px] text-bone">{role.role}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-ash">
            {role.narrative}
          </p>
        </article>
      ))}
    </div>
  );
}
