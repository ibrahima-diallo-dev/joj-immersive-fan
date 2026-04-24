import { ChatBot } from '../../components/chatbot/ChatBot';

export default function ChatbotPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Assistant conversationnel</h1>
      <p>Discutez avec l'agent virtuel et obtenez des réponses instantanées.</p>
      <ChatBot />
    </main>
  );
}
