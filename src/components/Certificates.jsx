import { useRef, useState } from 'react';
import { BadgeCheck, ExternalLink, Image as ImageIcon, X } from 'lucide-react';
import { certificates } from '../data/portfolioData';
import Section from './Section';

const certs = certificates.filter((c) => c.kind === 'cert');
const events = certificates.filter((c) => c.kind === 'event');

function ViewButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="link inline-flex items-center gap-1.5 text-sm">
      <ImageIcon className="size-3.5" aria-hidden="true" />
      Lihat sertifikat
    </button>
  );
}

export default function Certificates() {
  const dialogRef = useRef(null);
  const [active, setActive] = useState(null);

  const show = (cert) => {
    setActive(cert);
    dialogRef.current?.showModal();
  };

  return (
    <Section id="sertifikasi" title="Sertifikasi" intro="Klik untuk melihat sertifikat aslinya.">
      <ul className="divide-y divide-rule">
        {certs.map((c) => (
          <li key={c.id} className="flex flex-col gap-3 py-5 first:pt-0 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="flex items-start gap-2 font-semibold text-ink">
                <BadgeCheck className="mt-0.5 size-4 shrink-0 text-live" aria-hidden="true" />
                {c.name}
              </h3>
              <p className="mt-1 pl-6 text-sm text-muted">
                {c.issuer}, {c.expires ? `berlaku ${c.issued} sampai ${c.expires}` : `terbit ${c.issued}`}
              </p>
              <p className="mt-0.5 pl-6 text-xs break-all text-muted">ID kredensial {c.credentialId}</p>
            </div>
            <div className="flex shrink-0 gap-5 pl-6 sm:pl-0">
              <ViewButton onClick={() => show(c)} />
              {c.verifyUrl && (
                <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 text-sm">
                  Verifikasi
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">(buka di tab baru)</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 font-bold text-ink">Seminar dan pelatihan</h3>
      <ul className="mt-3 space-y-3">
        {events.map((e) => (
          <li key={e.id} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <span>
              {e.name} <span className="text-sm text-muted">({e.issuer}, {e.issued})</span>
            </span>
            <ViewButton onClick={() => show(e)} />
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="sertifikat-judul"
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
        className="m-auto w-[min(56rem,calc(100%-2rem))] rounded-lg bg-surface p-0 shadow-xl"
      >
        {active && (
          <div>
            <div className="flex items-start justify-between gap-4 border-b border-rule px-5 py-4">
              <div>
                <h3 id="sertifikat-judul" className="font-bold text-ink">{active.name}</h3>
                <p className="text-sm text-muted">{active.issuer}</p>
              </div>
              <button type="button" onClick={() => dialogRef.current.close()} className="btn-secondary px-2.5 py-2" autoFocus>
                <X className="size-4" aria-hidden="true" />
                <span className="sr-only">Tutup</span>
              </button>
            </div>
            <img src={active.image} alt={`Sertifikat ${active.name} dari ${active.issuer}`} className="max-h-[75vh] w-full bg-paper object-contain" />
          </div>
        )}
      </dialog>
    </Section>
  );
}
