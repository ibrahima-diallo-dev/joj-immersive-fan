'use client';

import { useState } from 'react';
import { SitePin } from './SitePin';
import { SitePopup } from './SitePopup';
import type { Site } from '../../types';

const sites: Site[] = [
  {
    id: '1',
    name: 'Tour Eiffel',
    description: 'Point de repère emblématique de Paris.',
    lat: 48.8584,
    lng: 2.2945,
  },
  {
    id: '2',
    name: 'Musée du Louvre',
    description: 'L’un des plus grands musées du monde.',
    lat: 48.8606,
    lng: 2.3376,
  },
];

export function MapClient() {
  const [selectedSite, setSelectedSite] = useState<Site | null>(sites[0]);

  return (
    <section style={{ display: 'grid', gap: '1rem' }}>
      <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '0.75rem' }}>
        <h2>Carte interactive</h2>
        <p>Ce composant affiche des marqueurs et une fenêtre d’information.</p>
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {sites.map((site) => (
          <SitePin key={site.id} site={site} onSelect={() => setSelectedSite(site)} />
        ))}
      </div>
      {selectedSite && <SitePopup site={selectedSite} />}
    </section>
  );
}
