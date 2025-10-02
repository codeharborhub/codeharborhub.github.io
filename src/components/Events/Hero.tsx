import { Calendar, Users, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Open Source Events
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover & Join Open Source Events With CodeHarborHub
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mx-auto mb-12">
           Connect with the global open-source community through hackathons, mentorship programs,
            and collaborative coding events. Whether you're a beginner or an experienced developer,
            there's an event for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-all hover:shadow-md">
              <Calendar className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Year-Round Events</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Ongoing opportunities to contribute</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-all hover:shadow-md">
              <Users className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Community Driven</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Connect with developers worldwide</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-all hover:shadow-md">
              <Globe className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Global Programs</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Participate from anywhere</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
    </div>
  );
}
