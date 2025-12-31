import DashboardNavbar from "../components/DashboardNavbar";

export default function Dashboard() {
  return (
    <>
      {/* TOP NAVBAR */}
      <DashboardNavbar />

      {/* DASHBOARD CONTENT */}
      <main className="min-h-screen px-6 py-14">
        <div className="mx-auto max-w-6xl space-y-20">

          {/* Header */}
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold lowercase tracking-tight">
                dashboard
              </h1>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                your quiet place to focus 🌱
              </p>
            </div>

            <span className="rounded-full bg-[var(--sage-soft)] px-4 py-1 text-xs">
              today · calm mode
            </span>
          </header>

          {/* Stats Section */}
          <section className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="card-lavender p-7">
              <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                today
              </p>
              <p className="mt-3 text-3xl font-light">
                0h 00m
              </p>
            </div>

            <div className="card-blush p-7">
              <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                streak
              </p>
              <p className="mt-3 text-3xl font-light">
                0 days
              </p>
            </div>

            <div className="card-sage p-7">
              <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                tasks
              </p>
              <p className="mt-3 text-3xl font-light">
                0
              </p>
            </div>
          </section>

          {/* Main Actions */}
          <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="card p-10">
              <h3 className="text-xl font-medium lowercase">
                start studying
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                one gentle session at a time
              </p>

              <button className="btn-primary mt-8">
                begin →
              </button>
            </div>

            <div className="card p-10">
              <h3 className="text-xl font-medium lowercase">
                study rooms
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                silent company, shared focus
              </p>

              <button className="btn-secondary mt-8">
                join →
              </button>
            </div>
          </section>

          {/* Footer */}
          <p className="text-center text-xs text-[var(--text-muted)]">
            progress doesn’t need pressure 🌸
          </p>

        </div>
      </main>
    </>
  );
}
