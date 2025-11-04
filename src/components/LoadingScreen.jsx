import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function LoadingScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const onReady = () => {
      // Give the Spline a moment to animate to ~100%, then fade out
      const t = setTimeout(() => setHide(true), 1800);
      return () => clearTimeout(t);
    };

    if (document.readyState === 'complete') {
      onReady();
    } else {
      window.addEventListener('load', onReady, { once: true });
      return () => window.removeEventListener('load', onReady);
    }
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      <p className="relative z-10 mt-80 select-none text-center text-sm tracking-[0.35em] text-cyan-200/80">
        INITIALIZING HYPERDRIVE…
      </p>
    </div>
  );
}
