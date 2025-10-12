import WhoWeAre from "./sections/WhoWeAre";
import Offerings from "./sections/Offerings";
import CoreValues from "./sections/CoreValues";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* <HeroSection /> */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(15,23,42,1),rgba(15,23,42,0.6))]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  ABOUT CODEHARBORHUB
                </span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Where Knowledge Meets
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">Innovation</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 mx-auto">
              At CodeHarborHub, we believe that learning is more than just
              acquiring knowledge — it’s about transforming ideas into reality,
              creativity into innovation, and passion into purpose. Our mission
              is to empower learners, creators, and dreamers from every corner
              of the world to explore their potential, build real-world
              projects, and grow with a community that values collaboration and
              curiosity.
            </p>
          </div>
        </div>
      </section>
      {/* Our Mission */}
      <section className="py-20">
        <h2 className="text-4xl md:text-5xl text-center pb-8 font-bold">
          Our Mission
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  We're on a mission to democratize education and make
                  high-quality learning accessible to everyone, regardless of
                  their background, location, or financial circumstances.
                </p>
                <p className="text-lg leading-relaxed">
                  By breaking down traditional barriers in tech education, we're
                  creating pathways for millions to unlock their potential and
                  build the skills needed for tomorrow's world.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white dark:bg-gray-700 p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    10M+
                  </div>
                  <div className="text-sm">Learners Worldwide</div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm">Expert Instructors</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    100+
                  </div>
                  <div className="text-sm">Courses Available</div>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    150+
                  </div>
                  <div className="text-sm">Countries Reached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhoWeAre />
      <Offerings />
      <CoreValues />
    </div>
  );
};

export default About;
