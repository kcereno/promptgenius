import { prompts } from '@/data';

export const getPrompt = (prompt: string) =>
  prompts.find((p) => p.prompt === prompt);
