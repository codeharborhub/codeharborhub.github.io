import { CheckCircle2, Lightbulb, Code } from 'lucide-react';
import { GuideStep as GuideStepType } from '../types/guide';

interface GuideStepProps {
  step: GuideStepType;
  index: number;
}

export default function GuideStep({ step, index }: GuideStepProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-bold text-lg shadow-lg">
        {index + 1}
      </div>

      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-200 dark:from-blue-500 dark:to-blue-900 last:hidden"></div>

      <div className="ml-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {step.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {step.description}
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <ul className="space-y-3">
            {step.content.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>

          {step.codeExample && (
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Code Example</h4>
              </div>
              <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm border border-gray-700">
                <code>{step.codeExample}</code>
              </pre>
            </div>
          )}

          {step.tips && step.tips.length > 0 && (
            <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-semibold text-amber-900 dark:text-amber-300">Pro Tips</h4>
              </div>
              <ul className="space-y-2">
                {step.tips.map((tip, i) => (
                  <li key={i} className="text-amber-800 dark:text-amber-200 text-sm flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
