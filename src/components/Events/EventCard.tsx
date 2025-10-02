import { Calendar, ExternalLink, CalendarPlus } from 'lucide-react';
import { Event } from './events';

interface EventCardProps {
  event: Event;
  onAddToCalendar: (event: Event) => void;
}

export default function EventCard({ event, onAddToCalendar }: EventCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      <div className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-750 flex items-center justify-center h-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={event.logo_url}
          alt={`${event.name} logo`}
          className="max-w-full max-h-full object-contain filter group-hover:scale-105 transition-transform duration-300 relative z-10 bg-gray-700 p-4 rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'text-4xl font-bold text-gray-400 dark:text-gray-600';
            fallback.textContent = event.name.charAt(0);
            target.parentElement?.appendChild(fallback);
          }}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {event.name}
        </h3>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{event.start_date} – {event.end_date}</span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
          {event.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-100 dark:border-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={event.official_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Learn More
          </a>

          <button
            onClick={() => onAddToCalendar(event)}
            className="flex items-center justify-center px-4 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors duration-200 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md"
            title="Add to Calendar"
          >
            <CalendarPlus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
