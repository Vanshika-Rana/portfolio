import { contactNote, offers, profile, socials } from "@/app/content";

export function Write() {
  return (
    <div className="pane flex h-full flex-col justify-between px-5 pb-8 pt-6 lg:px-10 lg:pb-10 lg:pt-9">
      <div className="stagger max-w-[54rem]">
        <p className="text-lg leading-relaxed lg:text-xl">{contactNote}</p>
        <p className="mt-5 flex flex-wrap font-mono text-[11px] uppercase tracking-[0.16em] text-ash">
          {offers.map((offer, index) => (
            <span key={offer}>
              {index > 0 && <span className="mx-2 text-edge">/</span>}
              {offer}
            </span>
          ))}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-7 inline-block break-all text-2xl font-medium underline decoration-edge decoration-2 underline-offset-[8px] transition-colors duration-300 hover:text-signal hover:decoration-signal sm:break-normal lg:text-4xl"
        >
          {profile.email}
        </a>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-px border-t border-edge sm:grid-cols-4">
        {socials.map((social) => (
          <li key={social.href}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[4.5rem] flex-col justify-center gap-1 border-b border-r border-edge px-4 py-4 transition-colors duration-300 hover:bg-stage"
            >
              <span className="text-[15px] font-medium">{social.label}</span>
              <span className="font-mono text-[11px] text-ash">
                {social.handle}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-6 font-mono text-[11px] text-ash">
        {profile.location}
        <span className="mx-2 text-edge">/</span>
        <a
          href={profile.site.href}
          className="underline decoration-edge underline-offset-4 hover:text-signal hover:decoration-signal"
        >
          {profile.site.label}
        </a>
        <span className="mx-2 text-edge">/</span>
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </div>
  );
}
