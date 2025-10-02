import { BookOpenCheck, ArrowLeft } from 'lucide-react';
import GuideStep from './GuideStep';
import FAQSection from './FAQSection';
import ResourcesSection from './ResourcesSection';
import { GUIDE_STEPS, FAQS, RESOURCES } from './guide';

interface ContributionGuideProps {
  onBackToEvents: () => void;
}

export default function ContributionGuide({ onBackToEvents }: ContributionGuideProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={onBackToEvents}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Events</span>
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-green-600 dark:bg-green-500 rounded-2xl shadow-lg">
              <BookOpenCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Contribution Guide
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Your step-by-step journey into open source
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            Contributing to open source can seem intimidating at first, but it's one of the most rewarding
            ways to learn, teach, and build experience. This guide will walk you through every step of making
            your first contribution, from finding a project to getting your pull request merged.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Getting Started
            </h2>
          </div>

          <div className="space-y-0">
            {GUIDE_STEPS.map((step, index) => (
              <GuideStep key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <FAQSection faqs={FAQS} />
          <ResourcesSection resources={RESOURCES} />
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
          <p className="mb-6 text-blue-50">
            Browse open source events and find the perfect project for your first contribution.
          </p>
          <button
            onClick={onBackToEvents}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Events
          </button>
        </div>
      </div>
    </div>
  );
}
