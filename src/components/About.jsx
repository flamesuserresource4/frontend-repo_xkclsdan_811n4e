export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-cyan-50">
      <div className="mx-auto rounded-2xl border border-cyan-400/20 bg-white/5 p-8 shadow-[0_0_40px_rgba(0,255,255,0.08)] backdrop-blur-md">
        <h2
          className="mb-4 bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
          style={{ fontFamily: 'Orbitron, Audiowide, Inter, sans-serif' }}
        >
          About Me
        </h2>
        <p className="text-cyan-100/90" style={{ fontFamily: 'Roboto, Open Sans, IBM Plex Sans, system-ui, sans-serif' }}>
          I’m Vinay Lunawat, known across the network as
          <span className="mx-1 font-semibold text-cyan-300">Elif.absrd</span> — a B.Tech Computer Science student with a
          passion for building futuristic experiences. I explore the edges of programming, AI, and cybersecurity,
          blending creativity with rigorous engineering to craft systems that feel like they’re from tomorrow.
        </p>
        <p className="mt-4 text-cyan-100/80">
          From low-level algorithms to immersive UIs, I enjoy turning ideas into tangible prototypes, and prototypes into
          polished products. My toolkit includes React, Python, C++, Node, and a fascination with ML and secure systems.
        </p>
        <blockquote className="mt-6 rounded-xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 to-cyan-200/5 p-4 text-center italic text-cyan-100 shadow-[0_0_30px_rgba(0,255,255,0.08)]">
          “In a galaxy full of data, I bring balance with code.”
        </blockquote>
      </div>
    </section>
  );
}
