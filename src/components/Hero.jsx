import { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const handleLaunch = useCallback(() => {
    // Smooth scroll to portfolio
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });

    // Simple lightsaber-like sound using Web Audio API
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(80, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.65);
    } catch (e) {
      // ignore if not supported
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0D0D0D]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80">A portfolio from a galaxy far, far away</p>
        <h1
          className="select-none bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text font-extrabold text-transparent"
          style={{ fontFamily: 'Orbitron, Audiowide, Inter, sans-serif' }}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
            Elif.absrd
          </span>
        </h1>
        <p
          className="mt-4 max-w-2xl text-cyan-100/90 drop-shadow-[0_0_8px_rgba(0,255,255,0.35)]"
          style={{ fontFamily: 'Roboto, Open Sans, IBM Plex Sans, system-ui, sans-serif' }}
        >
          Computer Science Undergrad | Developer | Tech Explorer
        </p>

        <button
          onClick={handleLaunch}
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-black/40 px-6 py-3 text-cyan-100 shadow-[0_0_20px_rgba(0,255,255,0.25)_inset,0_0_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.6)_inset,0_0_30px_rgba(0,255,255,0.3)]"
          aria-label="Launch Portfolio"
        >
          <span className="relative mr-2 inline-block h-1 w-8 overflow-hidden rounded-full bg-gradient-to-r from-cyan-300 via-white to-red-500 shadow-[0_0_16px_#00FFFF,0_0_24px_#FF1E1E] transition-all group-hover:w-10" />
          <span className="font-semibold tracking-wide">Launch Portfolio</span>
          <Rocket className="h-5 w-5 text-cyan-300 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
