import { profile, skillGroups } from "@/app/content";

export function Stack() {
  return (
    <div className="pane h-full px-5 pb-8 pt-6 lg:px-10 lg:pb-10 lg:pt-10">
      <div className="stagger mx-auto max-w-[68rem]">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <section key={group.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash">
                <span className="text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {group.title}
              </h3>
              <ul className="mt-4 border-t border-edge">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-edge py-1 text-sm leading-snug"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.2em] text-ash">
          {profile.education}
        </p>
      </div>
    </div>
  );
}
