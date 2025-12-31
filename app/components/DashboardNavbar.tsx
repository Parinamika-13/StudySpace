"use client";

import { useRouter } from "next/navigation";

export default function DashboardNavbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[var(--bg-main)]">
      
      {/* Left: App name */}
      <h1 className="text-lg font-medium lowercase">
        study space 🌱
      </h1>

      {/* Right: Profile */}
      <button
        onClick={() => router.push("/profile")}
        className="h-10 w-10 rounded-full overflow-hidden border border-neutral-300"
      >
        <img
          src="/avatar-placeholder.png"
          alt="profile"
          className="h-full w-full object-cover"
        />
      </button>

    </nav>
  );
}
