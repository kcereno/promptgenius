import { faqData } from '@/data';
import { FAQDataPointI } from '@/models/interfaces';
import Link from 'next/link';
import React from 'react';

const FAQPage = () => {
  return (
    <div className="mx-4 mt-10">
      <h1 className="mb-10 text-center ">Frequently Asked Questions</h1>
      {faqData.map((dataPoint) => (
        <div
          key={dataPoint.question}
          className="mt-5"
        >
          <h2>{dataPoint.question}</h2>
          <p className="mt-2">{dataPoint.answer}</p>
          <div className="divider"></div>
        </div>
      ))}

      <div className="mt-10 text-center">
        <h1>
          Learn more about AI prompts{' '}
          <span>
            <Link
              href="https://learnprompting.org/"
              className="text-center hover:cursor-pointer text-accent"
            >
              here
            </Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default FAQPage;
