'use client';

import { useMemo, useState } from 'react';
import { ChatMessage } from './ChatMessage';
import type { ChatMessageItem } from '../../types';

const initialMessages: ChatMessageItem[] = [
  { id: '1', author: 'Assistant', text: 'Bonjour ! Comment puis-je vous aider aujourd’hui ?' },
];

export function ChatBot() {
  const [messages, setMessages] = useState<ChatMessageItem[]>(initialMessages);
  const [input, setInput] = useState('');

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const handleSend = () => {
    if (!canSend) return;

    setMessages((current) => [
      ...current,
      { id: String(current.length + 1), author: 'Vous', text: input.trim() },
      { id: String(current.length + 2), author: 'Assistant', text: 'Merci ! Je travaille sur votre demande...' },
    ]);
    setInput('');
  };

  return (
    <section style={{ display: 'grid', gap: '1rem' }}>
      <div style={{ border: '1px solid #ddd', borderRadius: '0.75rem', padding: '1rem' }}>
        {messages.map((message) => (
          <ChatMessage key={message.id} author={message.author} text={message.text} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Écrivez un message..."
          style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
        />
        <button type="button" onClick={handleSend} disabled={!canSend} style={{ padding: '0.75rem 1rem' }}>
          Envoyer
        </button>
      </div>
    </section>
  );
}
