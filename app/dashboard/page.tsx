export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#fafafa] px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-14">

        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-medium tracking-tight">
              dashboard
            </h1>
            <p className="mt-1 text-sm text-neutral-500">
              take it slow. stay consistent.
            </p>
          </div>

          <span className="text-xs text-neutral-400">
            today · calm mode 🌱
          </span>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: "today", value: "0h 00m" },
            { label: "streak", value: "0 days" },
            { label: "tasks", value: "0" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-wide text-neutral-400">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-light">
                {item.value}
              </p>
            </div>
          ))}
        </section>

        {/* Actions */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Start studying */}
          <div className="rounded-3xl bg-[var(--accent-soft)] p-8 shadow-sm">
            <h3 className="text-lg font-medium">
              start studying
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              one focused session at a time
            </p>

            <button
              className="mt-6 rounded-full px-6 py-2 text-sm text-white shadow-sm"
              style={{ backgroundColor: "var(--accent)" }}
            >
              begin →
            </button>
          </div>

          {/* Study rooms */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-lg font-medium">
              study rooms
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              quiet company, shared focus
            </p>

            <button className="mt-6 rounded-full border border-neutral-200 px-6 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition">
              join →
            </button>
          </div>

        </section>

        {/* Footer note */}
        <p className="text-center text-xs text-neutral-400">
          progress doesn’t have to be loud 🌿
        </p>

      </div>
    </main>
  );
}
