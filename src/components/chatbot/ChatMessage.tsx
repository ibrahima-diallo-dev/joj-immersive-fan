type Props = {
  author: string;
  text: string;
};

export function ChatMessage({ author, text }: Props) {
  return (
    <article style={{ marginBottom: '0.75rem', padding: '0.75rem', background: '#fff', borderRadius: '0.75rem', border: '1px solid #eee' }}>
      <strong>{author}</strong>
      <p style={{ margin: '0.5rem 0 0' }}>{text}</p>
    </article>
  );
}
