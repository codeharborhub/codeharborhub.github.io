import HeroSection from "./sections/Hero";
import MissionVision from "./sections/MissionVision";
import WhoWeAre from "./sections/WhoWeAre";
import Offerings from "./sections/Offerings";
import CoreValues from "./sections/CoreValues";
import TeamSection from "./sections/TeamSection";
import CallToAction from "./sections/CallToAction";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <HeroSection />
      <MissionVision />
      <WhoWeAre />
      <Offerings />
      <CoreValues />
      <TeamSection />
      <CallToAction />
    </div>
  );
};

export default About;