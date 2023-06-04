import { FAQDataPointI, PromptI } from './models/interfaces';

export const prompts: PromptI[] = [
  {
    id: 'prompt_1',
    author: 'John Doe',
    goal: 'Write a blog post',
    prompt: 'What are the benefits of exercise?',
    tags: ['fitness', 'health'],
  },
  {
    id: 'prompt_2',
    author: 'Jane Smith',
    goal: 'Create a presentation',
    prompt: 'Explain the principles of quantum mechanics',
    note: 'Use visual aids',
    tags: ['physics', 'science'],
  },
  {
    id: 'prompt_3',
    author: 'Mark Johnson',
    goal: 'Write a short story',
    prompt: 'Write about a detective solving a mysterious case',
    tags: ['mystery', 'fiction'],
  },
  {
    id: 'prompt_4',
    author: 'Sarah Williams',
    goal: 'Compose a song',
    prompt: 'Write lyrics for a love song',
    note: 'Make it upbeat',
    tags: ['music', 'love'],
  },
  {
    id: 'prompt_5',
    author: 'David Brown',
    goal: 'Design a logo',
    prompt: 'Create a logo for a new tech startup',
    note: 'Incorporate elements of artificial intelligence',
    tags: ['design', 'technology'],
  },
  {
    id: 'prompt_6',
    author: 'Emily Taylor',
    goal: 'Prepare a speech',
    prompt: 'Discuss the importance of education in society',
    tags: ['education', 'society'],
  },
  {
    id: 'prompt_7',
    author: 'Michael Anderson',
    goal: 'Write a poem',
    prompt: 'Compose a haiku about nature',
    tags: ['poetry', 'nature'],
  },
  {
    id: 'prompt_8',
    author: 'Amy Wilson',
    goal: 'Create a recipe',
    prompt: 'Develop a recipe for a healthy breakfast smoothie',
    note: 'Include a variety of fruits and vegetables',
    tags: ['food', 'recipe'],
  },
  {
    id: 'prompt_9',
    author: 'Alex Thompson',
    goal: 'Write a research paper',
    prompt: 'Explore the effects of climate change on marine life',
    tags: ['environment', 'research'],
  },
  {
    id: 'prompt_10',
    author: 'Sam Robinson',
    goal: 'Design a website',
    prompt: 'Create a website for an online clothing store',
    note: 'Make it user-friendly and visually appealing',
    tags: ['web design', 'fashion'],
  },
];

export const faqData: FAQDataPointI[] = [
  {
    question: 'What are AI prompts?',
    answer:
      'AI prompts are instructions that we give to a smart computer program called an AI model. These instructions help the AI model understand what we want it to do or say.',
  },
  {
    question: 'What are AI prompts used for?',
    answer:
      'We use AI prompts for many things. They can help us write stories, get answers from virtual assistants, translate languages, and even help us with programming. AI prompts make our work easier and help us be more creative.',
  },
  {
    question: 'How do I use AI prompts effectively?',
    answer:
      "To use AI prompts well, we need to be clear about what we want. We should give the AI model specific instructions about what we expect it to do. We can also provide more information to help the AI model understand our task. It's okay to try different instructions and see what works best.",
  },
  {
    question: 'What are the limits of AI prompts?',
    answer:
      'While AI prompts are helpful, they have some limitations. Sometimes the AI model can make mistakes or give wrong information. It may not understand complex things or give very detailed answers. We should also be careful to check the information it gives us. We need to use AI prompts responsibly and be aware of any problems or mistakes that might come up.',
  },
];
