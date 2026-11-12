import { ArrowDownRight, MapPin } from 'lucide-react';
import { profile } from '../data/portfolioData';
import DownloadCvButton from './DownloadCvButton';

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
            <a href="#portofolio" className="btn-secondary">
              <ArrowDownRight className="size-4" aria-hidden="true" />
              Lihat portofolio
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
    </section>
  );
}
