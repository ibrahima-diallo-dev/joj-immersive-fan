export const anthropicExamplePrompt = 'Décrivez l’objet APRÈS l’avoir analysé.';

export async function fetchAnthropicResponse(prompt: string): Promise<string> {
  return Promise.resolve(`Hypothétique réponse d'Anthropic pour : ${prompt}`);
}
