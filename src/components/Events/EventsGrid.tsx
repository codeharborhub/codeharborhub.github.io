import { useState, useMemo } from 'react';
import EventCard from './EventCard';
import { Event, MOCK_EVENTS } from './events';

export default function EventsGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);



  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter((event) => {
      const matchesSearch =
        searchQuery === '' ||
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => event.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

 

  const handleAddToCalendar = (event: Event) => {
    const title = encodeURIComponent(event.name);
    const details = encodeURIComponent(event.description);
    const dates = encodeURIComponent(`${event.start_date} - ${event.end_date}`);

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}%0A%0A${event.official_link}&dates=${dates}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">      
        <>
          <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onAddToCalendar={handleAddToCalendar}
              />
            ))}
          </div>
        </>
    </div>
  );
}
