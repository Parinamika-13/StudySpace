"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    router.push("/dashboard");
  }

  return (
    <main className="cosmic-wrapper">
      <div className="cosmic-stars" />

      <section className="cosmic-card">
        <h1 className="cosmic-title">welcome back</h1>
        <p className="cosmic-subtitle">
          your universe is waiting 🌙
        </p>

        <form className="cosmic-form" onSubmit={handleLogin}>
          <input className="cosmic-input" placeholder="email" type="email" required />
          <input className="cosmic-input" placeholder="password" type="password" required />

          <button className="cosmic-button">log in</button>
        </form>

        <p className="cosmic-footer">
          new here?{" "}
          <span onClick={() => router.push("/signup")}>create an account</span>
        </p>
      </section>
    </main>
  );
}
