import Layout from "@theme/Layout";
import { useState } from "react";

import Hero from "@site/src/components/Events/Hero";
import EventsGrid from "@site/src/components/Events/EventsGrid";
import ContributionGuide from "@site/src/components/Events/ContributionGuide";

export default function EventsPage() {
  const [currentView, setCurrentView] = useState<"events" | "guide">("events");
  return (
    <Layout
      title="Open Source Events"
      description="Discover amazing global open-source events, join communities, and contribute to real-world projects."
    >
      {currentView === "events" ? (
        <>
          <Hero />
          <EventsGrid />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">New to Open Source?</h3>
              <p className="mb-6 text-green-50">
                Check out our comprehensive guide to learn how to make your
                first contribution.
              </p>
              <button
                onClick={() => setCurrentView("guide")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg"
              >
                View Contribution Guide
              </button>
            </div>
          </div>
        </>
      ) : (
        <ContributionGuide onBackToEvents={() => setCurrentView("events")} />
      )}
    </Layout>
  );
}
