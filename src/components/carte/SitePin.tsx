import type { Site } from '../../types';

type Props = {
  site: Site;
  onSelect: () => void;
};

export function SitePin({ site, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        padding: '0.75rem',
        background: '#fff',
        cursor: 'pointer',
      }}
    >
      {site.name}
    </button>
  );
}
