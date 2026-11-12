import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/portfolioData';
import DownloadCvButton from './DownloadCvButton';

const sections = [
  { id: 'portofolio', label: 'Portofolio' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'skill', label: 'Skill' },
  { id: 'sertifikasi', label: 'Sertifikasi' },
  { id: 'kontak', label: 'Kontak' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="text-base font-bold tracking-tight whitespace-nowrap text-ink">
          {profile.name}
        </a>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-body hover:text-ink">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <a href="#kontak" className="btn-primary">
              Hubungi
            </a>
          </div>
          <button
            type="button"
            className="btn-secondary px-3 md:hidden"
            aria-expanded={open}
            aria-controls="menu-ponsel"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Tutup menu' : 'Buka menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-ponsel" aria-label="Navigasi ponsel" className="border-t border-rule bg-paper md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-2 sm:hidden">
              <DownloadCvButton />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
