'use client';

import { VRScene } from './VRScene';

export function VRViewer() {
  return (
    <section style={{ border: '1px solid #ddd', borderRadius: '0.75rem', padding: '1.5rem' }}>
      <h2>Visionneuse VR</h2>
      <p>Profitez d’une scène virtuelle simple pour l’instant.</p>
      <VRScene />
    </section>
  );
}
