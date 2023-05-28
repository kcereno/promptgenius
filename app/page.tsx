import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex-grow mx-5">
      <div className="mt-10">
        <h1>
          Prompt
          <span className="text-primary">Genius</span>
        </h1>
        <p className="mt-2">
          Find the right prompts for AI engines you need without digging the
          through the web
        </p>
      </div>
      <div className="mt-10">
        <p className="font-bold text-primary">I want to:</p>
        <select className="w-full max-w-xs mt-4 select select-bordered">
          <option
            disabled
            selected
          >
            ...
          </option>
          <option>Analyze a job description</option>
          <option>Write a cover letter </option>
        </select>
      </div>

      <div className="mt-10">
        <h1>Prompt</h1>
        <div className="w-full mt-2 shadow-xl bg-neutral card ">
          <div className="card-body">
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1>Note</h1>
        <div className="w-full mt-2 shadow-xl bg-neutral card ">
          <div className="card-body">
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </main>
  );
}
