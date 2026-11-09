import { ArrowDownRight, MapPin } from 'lucide-react';
import { profile, projects } from '../data/portfolioData';
import DownloadCvButton from './DownloadCvButton';

const liveProjects = projects.filter((p) => p.link);

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
      <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-base font-medium text-muted">
            {profile.role}
          </p>
          <h1 className="mt-3 text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] font-bold tracking-[-0.035em] text-ink">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-ink sm:text-2xl">{profile.headline}</p>
          <p className="mt-5 max-w-[34rem] text-lg leading-relaxed">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-start gap-3">
            <a href="#karya" className="btn-secondary">
              <ArrowDownRight className="size-4" aria-hidden="true" />
              Lihat karya
            </a>
            <DownloadCvButton />
          </div>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <dt className="sr-only">Lokasi</dt>
              <MapPin className="size-4 text-muted" aria-hidden="true" />
              <dd>{profile.location}</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Status</dt>
              <span className="size-2 rounded-full bg-live" aria-hidden="true" />
              <dd>{profile.availability}</dd>
            </div>
          </dl>
        </div>

        <img
          src={profile.photo}
          alt={`Foto ${profile.name}`}
          width="480"
          height="600"
          fetchPriority="high"
          className="aspect-[4/5] w-full max-w-[18rem] rounded-lg object-cover object-top md:w-72"
        />
      </div>

      <div className="mt-16 border-t border-rule pt-6">
        <h2 className="text-sm font-semibold text-ink">Sistem yang sedang berjalan</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {liveProjects.map((p) => (
            <li key={p.id}>
              <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="group block">
                <span className="flex items-center gap-2 text-sm text-muted">
                  <span className="size-2 rounded-full bg-live" aria-hidden="true" />
                  {p.client}
                </span>
                <span className="mt-1 block font-semibold text-ink group-hover:text-accent">{p.title}</span>
                <span className="mt-0.5 block text-sm text-accent">{p.link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
