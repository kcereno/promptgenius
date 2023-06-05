import { FAQDataPointI, PromptI } from './models/interfaces';

export const prompts: PromptI[] = [
  {
    id: 'prompt_1',
    author: 'John Doe',
    goal: 'Identify the biggest challenge someone in a specific position would face on a daily basis, based on the provided job description',
    prompt:
      'Based on this job description, what is the biggest challenge someone in this position would face day to day? \n \n  *PASTE JOB DESCRIPTION*',
    note: 'Understanding the biggest challenge in a specific position helps job seekers by allowing them to prepare, tailor their responses, demonstrate adaptability, and align their skills with the roles requirements, increasing their chances of getting hired.',
    tags: ['career', 'job hunt'],
  },
  {
    id: 'prompt_2',
    author: 'Jane Smith',
    goal: 'Identifying the 3 most important responsibilities in a job descriptionn',
    prompt:
      'You are an expert resume writer with over 20 years of experience working with job seekers trying to land a role in the *INSERT INDUSTRY* industry. \n  \n Highlight the 3 most important responsibilities in this job description. \n \n *PASTE JOB DESCRIPTION*',
    note: 'Understanding the biggest responsibilities in a specific position helps job seekers by allowing them to prepare, tailor their responses, demonstrate adaptability, and align their skills with the roles requirements, increasing their chances of getting hired.',
    tags: ['career', 'job hunt'],
  },
  {
    id: 'prompt_3',
    author: 'Mark Johnson',
    goal: 'Write a captivating hook for a cover letter',
    prompt:
      'You are currently working as a *INSERT POSITION* in the *INSERT INDUSTRY* industry and you’re applying for the *INSERT POSITION* at *INSERT COMPANY*. \n  \n   Write an attention-grabbing hook for your cover letter that highlights your experience and qualification in a way that shows you empathize and can successfully take of the challenges of the *INSERT POSITION* role. \n  \n  Consider incorporating specific example of how you’ve tackled these challenges in your past work and explore creative ways to express your enthusiasm for the opportunity. Keep your hook within 100 characters.',
    note: 'You can use this hook for the "Develop a cover letter" prompt.',
    tags: ['career', 'job hunt', 'cover letter'],
  },
  {
    id: 'prompt_4',
    author: 'Sarah Williams',
    goal: 'Write a cover letter that highlights your experience and qualifications',
    prompt:
      'You are writing a cover letter applying for the *INSERT POSITION* at *INSERT COMPANY*. Here’s what you have so far: \n  \n  *HOOK FROM  "WRITE A CAPTIVATING HOOK" PROMPT* \n  \n  Finish writing the cover letter based in your resume and keep it within 250 words. \n  \n  Heres your resume paste resume \n  \n  *PASTE RESUME*',
    tags: ['career', 'job hunt', 'cover letter'],
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
