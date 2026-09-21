import React, { ReactNode } from 'react';

export interface TimelineEventProps {
  title: string;
  time: string;
  children: ReactNode;
}

export interface TimelineProps {
  children: ReactNode;
}

export const TimelineEvent: React.FC<TimelineEventProps> = ({ title, time, children }) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0 group">
      {/* Vertical Connecting Line */}
      <div 
        className="absolute left-[11px] top-3 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700 group-last:hidden" 
        aria-hidden="true" 
      />
      
      {/* Event Dot */}
      <div 
        className="absolute left-0 top-[6px] w-[24px] h-[24px] rounded-full border-4 border-white dark:border-gray-900 bg-blue-600 dark:bg-blue-500 shadow-sm" 
        aria-hidden="true" 
      />

      {/* Content Container */}
      <div className="flex flex-col">
        {/* Time Badge & Title */}
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
            {time}
          </span>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white m-0">
            {title}
          </h3>
        </div>

        {/* Children (MDX Body Content) */}
        <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-1 [&>p]:m-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="my-6 relative border-l-0 pl-0">
      {children}
    </div>
  );
};

export default Timeline;