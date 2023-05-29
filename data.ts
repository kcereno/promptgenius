import { PromptI } from './models/interfaces';

export const prompts: PromptI[] = [
  {
    goal: 'Understand the pain points of a job description',
    prompt:
      'Based on this job description, what is the biggest challenge someone in this position would face day to day? // <PASTE JOB DESCRIPTION HERE>',
    note: 'Useful for analyzing job descriptions and understanding the potential challenges that individuals in specific positions may face on a daily basis. By evaluating the requirements, responsibilities, and expectations outlined in the job description, it becomes possible to identify the key challenges someone in that role might encounter. // If youre considering applying for a position, understanding the challenges associated with the role can help you evaluate whether it aligns with your skills, interests, and ability to handle those challenges.',
    tags: ['programming', 'learning', 'Python'],
  },
  {
    goal: 'Write a book',
    prompt: 'What is the topic of your book?',
    note: 'Allocate dedicated time each day for writing.',
    tags: ['writing', 'author', 'book'],
  },
  {
    goal: 'Start a meditation practice',
    prompt: 'How many minutes do you want to meditate each day?',
    note: 'Create a quiet and peaceful space for your practice.',
    tags: ['meditation', 'mindfulness', 'self-care'],
  },
  {
    goal: 'Exercise regularly',
    prompt: 'What type of exercise do you enjoy?',
    note: 'Set realistic and achievable fitness goals.',
    tags: ['fitness', 'health', 'exercise'],
  },
  {
    goal: 'Learn to play a musical instrument',
    prompt: 'Which instrument would you like to learn?',
    note: 'Find a qualified instructor or use online resources for guidance.',
    tags: ['music', 'instrument', 'learning'],
  },
  {
    goal: 'Travel to a new country',
    prompt: 'Which country would you like to visit?',
    note: 'Research visa requirements and plan your itinerary in advance.',
    tags: ['travel', 'adventure', 'exploration'],
  },
  {
    goal: 'Start a blog',
    prompt: 'What will be the main focus of your blog?',
    note: 'Create engaging content and promote your blog on social media.',
    tags: ['blogging', 'writing', 'online'],
  },
  {
    goal: 'Learn a new recipe',
    prompt: 'What type of cuisine do you want to explore?',
    note: 'Experiment with different ingredients and cooking techniques.',
    tags: ['cooking', 'recipe', 'food'],
  },
  {
    goal: 'Organize your workspace',
    prompt: 'What items do you need to declutter or rearrange?',
    note: 'Create an efficient and inspiring work environment.',
    tags: ['organization', 'productivity', 'workspace'],
  },
  {
    goal: 'Volunteer for a charitable cause',
    prompt: 'Which cause or organization do you want to support?',
    note: 'Research local volunteer opportunities and commit your time.',
    tags: ['volunteering', 'charity', 'giving back'],
  },
];
