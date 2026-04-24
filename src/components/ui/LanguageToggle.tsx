'use client';

import { useState } from 'react';

export function LanguageToggle() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <button
      type="button"
      onClick={() => setLanguage((current) => (current === 'fr' ? 'en' : 'fr'))}
      style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid #ccc' }}
    >
      Langue : {language === 'fr' ? 'Français' : 'English'}
    </button>
  );
}
