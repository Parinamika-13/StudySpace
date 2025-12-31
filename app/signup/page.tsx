"use client";

import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    router.push("/login");
  }

  return (
    <main className="cosmic-wrapper">
      <div className="cosmic-stars" />

      <section className="cosmic-card">
        <h1 className="cosmic-title">create your space</h1>
        <p className="cosmic-subtitle">
          begin your journey among the stars ✨
        </p>

        <form className="cosmic-form" onSubmit={handleSignup}>
          <input className="cosmic-input" placeholder="name" required />
          <input className="cosmic-input" placeholder="email" type="email" required />
          <input className="cosmic-input" placeholder="password" type="password" required />

          <button className="cosmic-button">sign up</button>
        </form>

        <p className="cosmic-footer">
          already have an account?{" "}
          <span onClick={() => router.push("/login")}>log in</span>
        </p>
      </section>
    </main>
  );
}
