import { useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';

const PROJECTS = [
  {
    title: 'HoloNav — AR Navigation System',
    blurb: 'Real-time pathfinding overlay with computer vision and sensor fusion.',
    details:
      'Built with Python, OpenCV, and a tiny IMU module. The system detects landmarks, fuses motion data, and renders a minimal AR overlay for indoor navigation.',
    link: '#',
    tags: ['Python', 'OpenCV', 'Sensor Fusion'],
  },
  {
    title: 'Sentinel — Lightweight IDS',
    blurb: 'Behavioral anomaly detection for edge devices using classical ML.',
    details:
      'Designed a compact intrusion detection pipeline using scikit-learn and streaming features from network telemetry. Emphasis on interpretability and speed.',
    link: '#',
    tags: ['Security', 'ML', 'Networking'],
  },
  {
    title: 'Nebula UI — Holographic Components',
    blurb: 'A micro-library of glassy, neon components inspired by sci-fi dashboards.',
    details:
      'Set of accessible, themeable components built in React with Tailwind and Framer Motion, focused on soft depth, glow, and layered parallax.',
    link: '#',
    tags: ['React', 'Design Systems'],
  },
];

const ACHIEVEMENTS = [
  {
    title: 'Top 1% — Galactic Code Jam',
    note: 'Multi-planetary coding challenge, systems category',
  },
  { title: 'AWS Cloud Practitioner', note: 'Foundation certification' },
  { title: 'CySA+ Coursework', note: 'Security analytics specialization' },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openHololog = (project) => {
    setSelected(project);
    setOpen(true);
  };

  const handleGlowMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mx', `${x}%`);
    e.currentTarget.style.setProperty('--my', `${y}%`);
  };

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-cyan-50">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2
          className="bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
          style={{ fontFamily: 'Orbitron, Audiowide, Inter, sans-serif' }}
        >
          Projects
        </h2>
        <div className="flex items-center gap-2 text-cyan-200/80">
          <Star className="h-5 w-5 text-amber-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
          <span className="text-sm">Holographic Showcase</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            onMouseMove={handleGlowMove}
            className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 p-5 shadow-[0_0_40px_rgba(0,255,255,0.08)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]"
          >
            <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" style={{
              background:
                'radial-gradient(120px 120px at var(--mx,50%) var(--my,50%), rgba(0,255,255,0.25), transparent 60%)',
            }} />
            <h3 className="text-lg font-semibold text-cyan-100 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">{p.title}</h3>
            <p className="mt-2 text-sm text-cyan-100/80">{p.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-cyan-400/20 bg-cyan-300/10 px-2 py-0.5 text-[11px] text-cyan-100/80">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={() => openHololog(p)}
                className="rounded-full border border-cyan-400/30 bg-black/40 px-3 py-1.5 text-sm text-cyan-100 hover:shadow-[0_0_18px_rgba(0,255,255,0.4)_inset]"
              >
                Open Hololog
              </button>
              <a
                href={p.link}
                className="inline-flex items-center gap-1 text-sm text-cyan-200/90 hover:text-cyan-100"
              >
                View <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements & Certifications */}
      <div className="mt-20">
        <h3
          className="mb-4 bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-2xl font-extrabold text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
          style={{ fontFamily: 'Orbitron, Audiowide, Inter, sans-serif' }}
        >
          Achievements & Certifications
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a) => (
            <div
              key={a.title}
              className="relative h-32 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-cyan-200/5 p-4 shadow-[0_0_40px_rgba(0,255,255,0.08)] backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-0 animate-pulse bg-[radial-gradient(120px_120px_at_30%_30%,rgba(0,255,255,0.18),transparent_60%)]" />
              <div className="relative z-10">
                <p className="text-cyan-100">{a.title}</p>
                <p className="mt-1 text-sm text-cyan-100/70">{a.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && selected && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-6 max-w-lg rounded-2xl border border-cyan-400/30 bg-[#0b0f11]/95 p-6 text-cyan-100 shadow-[0_0_60px_rgba(0,255,255,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-xl font-semibold drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">{selected.title}</h4>
            <p className="mt-2 text-cyan-100/85">{selected.details}</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full border border-cyan-400/30 bg-black/40 px-4 py-2 text-sm hover:shadow-[0_0_18px_rgba(0,255,255,0.4)_inset]"
            >
              Close Hololog
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
