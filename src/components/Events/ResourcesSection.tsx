import { ExternalLink, BookOpen } from 'lucide-react';
import { Resource } from './guide';

interface ResourcesSectionProps {
  resources: Resource[];
}

export default function ResourcesSection({ resources }: ResourcesSectionProps) {
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-green-600 dark:bg-green-500 rounded-xl">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Helpful Resources
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Curated collection of guides, tools, and learning materials to help you on your open-source journey.
      </p>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources
                .filter((r) => r.category === category)
                .map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gray-50 dark:bg-gray-750 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {resource.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {resource.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 transition-colors" />
                    </div>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
