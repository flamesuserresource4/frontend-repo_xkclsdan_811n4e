import { Code2, Cpu, Brain, Shield, Database, Globe, Layout, Mail, Github, Linkedin } from 'lucide-react';

function SkillPill({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-3 py-1 text-cyan-100 shadow-[0_0_20px_rgba(0,255,255,0.08)]">
      <Icon className="h-4 w-4 text-cyan-300" />
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default function SkillsContact() {
  return (
    <section id="skills-contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-cyan-50">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Skills */}
        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 shadow-[0_0_40px_rgba(0,255,255,0.08)] backdrop-blur-md">
          <h2
            className="mb-2 bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
            style={{ fontFamily: 'Orbitron, Audiowide, Inter, sans-serif' }}
          >
            Skills & Tech Stack
          </h2>
          <p className="mb-4 text-sm text-cyan-100/80">Organized by the Force:</p>

          <div className="mb-6 rounded-xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 to-cyan-200/5 p-4">
            <h3 className="mb-3 text-cyan-200">The Light Side (Frontend/UI)</h3>
            <div className="flex flex-wrap gap-2">
              <SkillPill icon={Layout} label="React" />
              <SkillPill icon={Globe} label="TypeScript" />
              <SkillPill icon={Code2} label="JavaScript" />
              <SkillPill icon={Globe} label="Tailwind CSS" />
              <SkillPill icon={Code2} label="Framer Motion" />
            </div>
          </div>

          <div className="rounded-xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 to-cyan-200/5 p-4">
            <h3 className="mb-3 text-cyan-200">The Dark Side (Backend/AI/Cyber)</h3>
            <div className="flex flex-wrap gap-2">
              <SkillPill icon={Cpu} label="Python" />
              <SkillPill icon={Brain} label="Machine Learning" />
              <SkillPill icon={Database} label="Databases" />
              <SkillPill icon={Shield} label="Cybersecurity" />
              <SkillPill icon={Code2} label="C++" />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 shadow-[0_0_40px_rgba(0,255,255,0.08)] backdrop-blur-md">
          <h2
            className="mb-2 bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
            style={{ fontFamily: 'Orbitron, Audiowide, Inter, sans-serif' }}
          >
            Contact / Connect
          </h2>
          <p className="mb-4 text-cyan-100/85">Open a comms channel using the console or ping me on the network.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Transmission sent! Beep boop 🤖');
            }}
            className="grid grid-cols-1 gap-3"
          >
            <input
              required
              placeholder="Your Callsign"
              className="rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-3 text-cyan-100 placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            />
            <input
              type="email"
              required
              placeholder="Frequency (Email)"
              className="rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-3 text-cyan-100 placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            />
            <textarea
              required
              placeholder="Message Payload"
              rows={4}
              className="rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-3 text-cyan-100 placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-black/40 px-5 py-3 text-cyan-100 shadow-[0_0_20px_rgba(0,255,255,0.25)_inset] transition hover:shadow-[0_0_30px_rgba(0,255,255,0.5)_inset]"
            >
              Transmit
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-black/40 px-4 py-2 text-cyan-100 hover:shadow-[0_0_18px_rgba(0,255,255,0.4)_inset]"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-black/40 px-4 py-2 text-cyan-100 hover:shadow-[0_0_18px_rgba(0,255,255,0.4)_inset]"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="mailto:vinay@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-black/40 px-4 py-2 text-cyan-100 hover:shadow-[0_0_18px_rgba(0,255,255,0.4)_inset]"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
