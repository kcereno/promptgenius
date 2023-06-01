export interface PromptI {
  id: string;
  author: string;
  goal: string;
  prompt: string;
  note?: string;
  tags: string[];
}
