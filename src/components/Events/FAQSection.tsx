import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ } from './guide';

interface FAQSectionProps {
  faqs: FAQ[];
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
      >
        <span className="font-semibold text-gray-900 dark:text-white pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 bg-white dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-xl">
          <HelpCircle className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Common questions from new contributors, answered by the community.
      </p>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}
