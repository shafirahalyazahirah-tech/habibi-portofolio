import { ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolioData';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy; {year} {profile.name}. {profile.location}.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-ink">
          <ArrowUp className="size-4" aria-hidden="true" />
          Kembali ke atas
        </a>
      </div>
    </footer>
  );
}
