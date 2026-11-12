import { GraduationCap } from 'lucide-react';
import { education, skills } from '../data/portfolioData';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skill" title="Skill" intro="Yang saya pakai sehari-hari, bukan sekadar pernah dicoba.">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.id}>
            <h3 className="font-bold text-ink">{s.group}</h3>
            <ul className="mt-3 space-y-1.5">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-rule pt-10">
        <h3 className="flex items-center gap-2 font-bold text-ink">
          <GraduationCap className="size-5 text-muted" aria-hidden="true" />
          Pendidikan
        </h3>
        <p className="mt-3 font-semibold text-ink">{education.degree}</p>
        <p className="text-muted">
          {education.school}, {education.period}
        </p>
        <ul className="mt-3 max-w-[65ch] list-disc space-y-1.5 pl-5 marker:text-rule">
          {education.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
