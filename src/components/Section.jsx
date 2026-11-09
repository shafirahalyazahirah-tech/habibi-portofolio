// Shared section frame: title column on the left, content on the right (stacked on phones).
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-judul`} className="border-t border-rule">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[13rem_1fr] md:gap-12 md:py-24">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 id={`${id}-judul`} className="text-2xl font-bold tracking-tight text-ink">
            {title}
          </h2>
          {intro && <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{intro}</p>}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
