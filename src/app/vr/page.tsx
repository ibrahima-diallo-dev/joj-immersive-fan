import { VRViewer } from '../../components/vr/VRViewer';

export default function VRPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Expérience VR</h1>
      <p>Plongez dans une scène VR immersive et explorez un monde virtuel.</p>
      <VRViewer />
    </main>
  );
}
