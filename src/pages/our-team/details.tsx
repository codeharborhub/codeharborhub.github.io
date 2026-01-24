import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { teamMembers } from "@site/src/data/team";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  CheckCircle2,
  ChevronRight, Home
} from "lucide-react";

const Header = ({ memberName }) => {
  return (
    <div className="relative bg-slate-900 py-24 px-6 overflow-hidden border-b border-white/5">
      
      {/* 1. Animated Background Mesh Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `radial-gradient(var(--ifm-color-primary) 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }} 
        />
        {/* 2. Gradient Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--ifm-color-primary)] blur-[120px] opacity-20 rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600 blur-[120px] opacity-10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Badge Style Subtitle */}
        <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--ifm-color-primary)] bg-[var(--ifm-color-primary)]/10 border border-[var(--ifm-color-primary)]/20 rounded-full">
          Member Profile
        </span>

        {/* Dynamic Title with Text Gradient */}
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Member <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--ifm-color-primary)] to-white bg-[length:200%_auto] animate-gradient">
            Information
          </span>
        </h1>

        {/* 3. Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-sm font-medium">
          <Link 
            to="/" 
            className="flex items-center gap-1 text-slate-400 hover:text-[var(--ifm-color-primary)] transition-colors duration-200"
          >
            <Home size={14} />
            Home
          </Link>
          
          <ChevronRight size={14} className="text-slate-600" />
          
          <Link 
            to="/our-team" 
            className="text-slate-400 hover:text-[var(--ifm-color-primary)] transition-colors duration-200"
          >
            Our Team
          </Link>

          <ChevronRight size={14} className="text-slate-600" />

          <span className="text-[var(--ifm-color-primary)] font-bold">
            {memberName}
          </span>
        </nav>
      </div>

      {/* 4. Bottom Decorative Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Internal CSS for the text gradient animation */}
      <style jsx>{`
        .animate-gradient {
          animation: shine 3s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default function MemberDetailsPage() {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  // Get slug from URL: /our-team/details?member=ajay-dhangar
  const params = new URLSearchParams(location.search);
  const memberSlug = params.get("member");

  const member = teamMembers.find((m) => m.slug === memberSlug);

  if (!member) {
    return (
      <Layout title="Member Not Found">
        <div className="py-20 text-center">
          <h1>Member not found</h1>
          <a href="/our-team" className="text-[var(--ifm-color-primary)]">
            Back to Team
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${member.name} | ${siteConfig.title}`}>
      <div className="min-h-screen bg-[var(--ifm-bg-color)] text-[var(--ifm-text-color)] transition-colors duration-300">
        {/* Header Section */}
        
        <Header memberName={member.name} />

        <main className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Image with Skewed Label (Branding from your image) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                {/* Brand Skew Label */}
                <div className="absolute bottom-10 left-0 bg-[var(--ifm-color-primary)] py-4 px-8 transform -skew-x-12 -translate-x-2">
                  <div className="skew-x-12">
                    <h2 className="text-2xl font-bold text-white leading-tight">
                      {member.name}
                    </h2>
                    <p className="text-white/80 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Social Sidebar */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-black/30 backdrop-blur-md p-4 rounded-l-2xl border border-white/10">
                  <a
                    href={member.socials.github}
                    className="text-white hover:text-[var(--ifm-color-primary)]"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="text-white hover:text-[var(--ifm-color-primary)]"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="text-white hover:text-[var(--ifm-color-primary)]"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Skills */}
            <div className="lg:col-span-7 space-y-10">
              <section>
                <h2 className="text-3xl font-bold mb-4">Biography</h2>
                <p className="text-lg opacity-80 leading-relaxed">
                  {member.bio}
                </p>
              </section>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-[var(--ifm-color-primary)]/10">
                <div className="flex items-center gap-3">
                  <Mail className="text-[var(--ifm-color-primary)]" />
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-50">
                      Email
                    </p>
                    <p className="font-semibold">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[var(--ifm-color-primary)]" />
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-50">
                      Location
                    </p>
                    <p className="font-semibold">{member.location}</p>
                  </div>
                </div>
              </div>

              {/* Skills Ability */}
              <section className="p-8 bg-slate-100/50 dark:bg-slate-800/30 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Terminal
                    size={20}
                    className="text-[var(--ifm-color-primary)]"
                  />
                  Skills & Abilities
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {member.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[var(--ifm-color-primary)]"
                      />
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
