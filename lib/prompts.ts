import { prompts } from '@/data';
import { PromptI } from '@/models/interfaces';

export const getPrompt = (prompt: string) =>
  prompts.find((p) => p.prompt === prompt);

export const getUniqueTags = (prompts: PromptI[]): string[] => {
  const uniqueTags: string[] = [];
  prompts.forEach((prompt) => {
    prompt.tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
    });
  });
  return uniqueTags;
};
