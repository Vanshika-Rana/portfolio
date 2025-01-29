"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-8">
      {/* Profile Section */}
      <Link href="/">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/avatar.jpeg"
            alt="Your Name"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1 className="font-semibold text-white">Vanshika Rana</h1>
            <p className="text-sm text-gray-400">Developer Advocate</p>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="space-y-4">
        <Section title="Explore">
          <NavItem
            href="/about"
            label="About"
            isActive={pathname === "/about"}
          />
          <NavItem
            href="/work"
            label="Work"
            isActive={pathname === "/work"}
          />
          <NavItem
            href="/projects"
            label="Projects"
            isActive={pathname === "/projects"}
          />
          <NavItem
            href="/community"
            label="Community"
            isActive={pathname === "/community"}
          />
          <NavItem
            href="/contact"
            label="Get In Touch"
            isActive={pathname === "/contact"}
          />
        </Section>

        <Section title="Quick Links">
          {/* For external links, `isActive` won't matter since they won't match `pathname`. */}
          <NavItem href="https://aahiknsv.hashnode.dev" label="Blog" />
          <NavItem href="https://x.com/aahiknsv" label="Twitter / X" />
          <NavItem
            href="https://linkedin.com/in/vanshikarana"
            label="LinkedIn"
          />
          <NavItem href="https://github.com/Vanshika-Rana" label="Github" />
          <NavItem
            href="/read-cv"
            label="Read CV"
            isActive={pathname === "/read-cv"}
          />
        </Section>
      </nav>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase text-gray-400 mb-2">
        {title}
      </h2>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function NavItem({
  href,
  label,
  newBadge,
  isActive,
}: {
  href: string;
  label: string;
  newBadge?: boolean;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between text-sm px-2 py-1 rounded 
        ${
          isActive
            ? "bg-gray-700 text-white font-medium"
            : "text-gray-300 hover:bg-gray-800"
        }
      `}
    >
      <span>{label}</span>
      {newBadge && (
        <span className="text-xs bg-green-700 text-green-50 px-1.5 rounded">
          new
        </span>
      )}
    </Link>
  );
}
