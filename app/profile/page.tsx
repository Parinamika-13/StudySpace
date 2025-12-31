"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [mode, setMode] = useState<"light" | "dark">("light");

  const records = [
    {
      type: "Solo",
      name: "Deep Focus Session",
      date: "12 Aug 2025",
    },
    {
      type: "Group",
      name: "AI Study Room",
      date: "15 Aug 2025",
    },
  ];

  const streak = {
    current: 4,
    best: 7,
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("mode") as "light" | "dark";
    if (savedMode) setMode(savedMode);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <main className="profile-page">
      <h2>your profile</h2>

      {/* RECORDS */}
      <section className="profile-card">
        <h3>records</h3>
        {records.map((r, i) => (
          <div key={i} className="record-row">
            <span>{r.type}</span>
            <span>{r.name}</span>
            <span className="muted">{r.date}</span>
          </div>
        ))}
      </section>

      {/* STREAKS */}
      <section className="profile-card">
        <h3>streaks</h3>
        <p>current: <strong>{streak.current} days</strong></p>
        <p>best: <strong>{streak.best} days</strong></p>
      </section>

      {/* NOTES */}
      <section className="profile-card">
        <h3>notes storage</h3>
        <p className="muted">your notes will appear here</p>
      </section>

      {/* MODE */}
      <section className="profile-card">
        <h3>mode</h3>
        <button
          className="mode-btn"
          onClick={() =>
            setMode(mode === "light" ? "dark" : "light")
          }
        >
          switch to {mode === "light" ? "dark" : "light"}
        </button>
      </section>

      {/* LOGOUT */}
      <section className="profile-card danger">
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.clear();
            router.push("/");
          }}
        >
          logout
        </button>
      </section>
    </main>
  );
}
