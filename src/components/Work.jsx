import { ExternalLink, Lock } from 'lucide-react';
import { projects } from '../data/portfolioData';
import Section from './Section';

export default function Work() {
  return (
    <Section
      id="portofolio"
      title="Portofolio"
      intro="Website, aplikasi internal, dan kampanye iklan yang saya rancang dan kelola untuk usaha nyata di Tasikmalaya."
    >
      <ol className="divide-y divide-rule">
        {projects.map((p) => (
          <li key={p.id} className="grid gap-4 py-10 first:pt-0 last:pb-0 lg:grid-cols-[11rem_1fr] lg:gap-10">
            <div className="text-sm">
              <p className="font-semibold text-ink">{p.client}</p>
              <p className="mt-1 text-muted">
                {p.kind}, {p.year}
              </p>
            </div>
            <article>
              <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{p.title}</h3>
              <p className="mt-3 max-w-[65ch] leading-relaxed">{p.summary}</p>
              {p.result && <p className="mt-3 max-w-[65ch] font-semibold text-ink">{p.result}</p>}
              <p className="mt-4 text-sm text-muted">
                <span className="sr-only">Teknologi: </span>
                {p.stack.join(', ')}
              </p>
              {p.link && (
                <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="link mt-4 inline-flex items-center gap-1.5 text-sm">
                  {p.link.label}
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">(buka di tab baru)</span>
                </a>
              )}
              {p.note && (
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
                  <Lock className="size-3.5" aria-hidden="true" />
                  {p.note}
                </p>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
