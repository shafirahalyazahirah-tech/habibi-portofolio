import { Mail, MessageCircle } from 'lucide-react';
import { profile, waLink } from '../data/portfolioData';
import { InstagramIcon as Instagram, LinkedinIcon as Linkedin } from './BrandIcons';
import DownloadCvButton from './DownloadCvButton';
import Section from './Section';

const channels = [
  { label: 'WhatsApp', value: profile.phoneDisplay, href: waLink('Halo Habibi, saya ingin berdiskusi.'), Icon: MessageCircle, external: true },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'LinkedIn', value: 'in/hbibinrhmn', href: profile.linkedin, Icon: Linkedin, external: true },
  { label: 'Instagram', value: '@hbibinrhmnn', href: profile.instagram, Icon: Instagram, external: true },
  { label: 'Instagram Hanucazari', value: '@hanucazari.id', href: profile.hanucazariInstagram, Icon: Instagram, external: true },
];

export default function Contact() {
  return (
    <Section id="kontak" title="Kontak" intro="Pilih jalur yang sesuai dengan keperluan Anda.">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-lg border border-rule bg-surface p-6">
          <h3 className="text-lg font-bold text-ink">Untuk pemilik usaha</h3>
          <p className="mt-2 leading-relaxed">
            Ceritakan usaha Anda dan apa yang ingin dibenahi: website, kasir, pencatatan, atau iklan. Saya bantu petakan
            mana yang perlu dikerjakan lebih dulu.
          </p>
          <a
            href={waLink('Halo Habibi, saya punya usaha dan ingin konsultasi soal website atau sistem.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Diskusi lewat WhatsApp
          </a>
        </div>

        <div className="rounded-lg border border-rule bg-surface p-6">
          <h3 className="text-lg font-bold text-ink">Untuk rekruter</h3>
          <p className="mt-2 leading-relaxed">
            CV dalam format PDF berisi teks asli, jadi bisa dibaca sistem ATS. Undangan wawancara bisa langsung dikirim
            lewat email.
          </p>
          <div className="mt-5 flex flex-wrap items-start gap-3">
            <DownloadCvButton />
            <a href={`mailto:${profile.email}?subject=${encodeURIComponent('Undangan wawancara')}`} className="btn-secondary">
              <Mail className="size-4" aria-hidden="true" />
              Kirim email
            </a>
          </div>
        </div>
      </div>

      <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
        {channels.map(({ label, value, href, Icon, external }) => (
          <li key={label} className="border-b border-rule">
            <a
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              className="group flex items-center gap-3 py-4"
            >
              <Icon className="size-5 shrink-0 text-muted group-hover:text-accent" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-sm text-muted">{label}</span>
                <span className="block truncate font-medium text-ink group-hover:text-accent">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
