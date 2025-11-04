import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import SkillsContact from './components/SkillsContact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0D0D0D]">
      {/* Star field background layer */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50 [background-image:radial-gradient(2px_2px_at_20px_30px,rgba(255,255,255,0.6),transparent_20%),radial-gradient(1.5px_1.5px_at_120px_80px,rgba(0,255,255,0.5),transparent_20%),radial-gradient(1.5px_1.5px_at_220px_130px,rgba(255,30,30,0.55),transparent_20%),radial-gradient(2px_2px_at_360px_200px,rgba(255,255,255,0.5),transparent_20%)] [background-size:400px_400px,600px_600px,800px_800px,1000px_1000px] [background-position:0_0,0_0,0_0,0_0]" />

      <LoadingScreen />

      <Hero />
      <About />
      <Projects />
      <SkillsContact />

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-16 text-center text-cyan-100/60">
        <div className="mx-auto h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <p className="mt-6 text-sm">© {new Date().getFullYear()} Elif.absrd (Vinay Lunawat). May the Source be with you.</p>
      </footer>
    </div>
  );
}
