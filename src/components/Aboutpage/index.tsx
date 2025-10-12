import WhoWeAre from "./sections/WhoWeAre";
import Offerings from "./sections/Offerings";
import CoreValues from "./sections/CoreValues";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* <HeroSection /> */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">ABOUT CODEHARBORHUB</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent p-2">
              Where Knowledge Meets Innovation
            </h1>
            <p className="text-xl text-blue-100 mx-auto leading-relaxed">
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
        <h2 className="text-4xl md:text-5xl text-center pb-6 font-bold">Our Mission</h2>
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
