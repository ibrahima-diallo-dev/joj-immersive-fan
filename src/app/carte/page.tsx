import { MapClient } from '../../components/carte/MapClient';

export default function CartePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Carte immersive</h1>
      <p>Explorez des sites et affichez des informations interactives.</p>
      <MapClient />
    </main>
  );
}
