import { useState } from 'react';
import { FileDown, LoaderCircle } from 'lucide-react';

// jsPDF is loaded only when someone asks for the CV, keeping it out of the first page load.
export default function DownloadCvButton({ label = 'Unduh CV (PDF)' }) {
  const [state, setState] = useState('idle');

  const download = async () => {
    setState('loading');
    try {
      const { downloadCvPdf } = await import('../utils/cvPdf.js');
      downloadCvPdf();
      setState('idle');
    } catch (err) {
      console.error('CV PDF gagal dibuat:', err);
      setState('error');
    }
  };

  return (
    <span className="inline-flex flex-col gap-1">
      <button type="button" onClick={download} disabled={state === 'loading'} className="btn-primary">
        {state === 'loading' ? (
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <FileDown className="size-4" aria-hidden="true" />
        )}
        {state === 'loading' ? 'Menyiapkan PDF' : label}
      </button>
      {state === 'error' && (
        <span role="alert" className="text-xs text-red-700">
          PDF gagal dibuat. Muat ulang halaman lalu coba lagi.
        </span>
      )}
    </span>
  );
}
