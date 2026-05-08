import { useEffect } from 'react';
import GlassHero from '../components/GlassHero';
import Philosophy from '../components/Philosophy';
import Features from '../components/Features';
import Capabilities from '../components/Capabilities';
import HowItWorks from '../components/HowItWorks';
import CTA3D from '../components/CTA3D';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import { Reveal } from '../components/Reveal';

export default function Home() {

  useEffect(() => {
    // Force scroll to top on page load
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#0a0a0c] text-zinc-50 selection:bg-white/20 selection:text-white relative font-sans">
        <GlassHero />
        <Philosophy />
        <Reveal><Features /></Reveal>
        <Reveal><Capabilities /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <CTA3D />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
