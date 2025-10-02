import Link from "@docusaurus/Link";
import { Event } from "../data/events";

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center">
      <img
        src={event.logo}
        alt={event.name}
        className="w-24 h-24 object-contain mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {event.name}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        {event.dates}
      </p>
      <p className="text-gray-700 dark:text-gray-400 mt-3">{event.description}</p>
      <div className="flex gap-2 flex-wrap mt-3">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-4">
        <Link
          href={`/events/${event.id}`}
          className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          View Details
        </Link>
        <a
          href={event.link}
          target="_blank"
          className="px-4 py-2 rounded-xl border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition"
        >
          Official Site
        </a>
      </div>
    </div>
  );
}
