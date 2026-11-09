import { experience, profile } from '../data/portfolioData';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="pengalaman" title="Pengalaman" intro="Bekerja sejak 2020, dari sales lapangan sampai membangun sistem.">
      <div className="mb-12 max-w-[65ch] space-y-4 text-lg leading-relaxed">
        {profile.about.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>

      <ol className="divide-y divide-rule border-t border-rule">
        {experience.map((job) => (
          <li key={job.id} className="grid gap-3 py-8 sm:grid-cols-[11rem_1fr] sm:gap-10">
            <p className="text-sm text-muted">
              <span className="block font-medium text-body">{job.period}</span>
              {job.location}
            </p>
            <div>
              <h3 className="text-lg font-bold text-ink">{job.role}</h3>
              <p className="text-body">{job.company}</p>
              <ul className="mt-3 max-w-[65ch] list-disc space-y-1.5 pl-5 leading-relaxed marker:text-rule">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
