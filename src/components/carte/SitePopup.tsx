import type { Site } from '../../types';

type Props = {
  site: Site;
};

export function SitePopup({ site }: Props) {
  return (
    <aside style={{ padding: '1rem', border: '1px solid #bbb', borderRadius: '0.75rem', background: '#f9f9f9' }}>
      <h3>{site.name}</h3>
      <p>{site.description}</p>
      <dl>
        <dt>Latitude</dt>
        <dd>{site.lat}</dd>
        <dt>Longitude</dt>
        <dd>{site.lng}</dd>
      </dl>
    </aside>
  );
}
