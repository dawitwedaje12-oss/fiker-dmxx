import { motion } from 'motion/react';
import { Instagram, Youtube, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 text-zinc-500 font-sans border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-32">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="text-3xl font-bold tracking-widest uppercase text-white mb-6">
              FIKER<span className="text-zinc-500 font-normal">DMX</span>
            </div>
            <p className="text-zinc-400 text-lg max-w-sm leading-relaxed font-light mb-8">
              Engineering high-converting digital campaigns that elevate your brand and maximize ROI.
            </p>
            <a href="mailto:fikreslasi@gmail.com" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors group">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">fikreslasi@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium tracking-widest uppercase text-xs mb-4">Navigation</h4>
            <Link to="/" className="hover:text-white transition-colors w-fit">Home</Link>
            <Link to="/our-works" className="hover:text-white transition-colors w-fit">Portfolio</Link>
            <a href="#services" className="hover:text-white transition-colors w-fit">Services</a>
            <a href="#about" className="hover:text-white transition-colors w-fit">About Us</a>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium tracking-widest uppercase text-xs mb-4">Socials</h4>
            <a href="https://www.instagram.com/fikr_dmx?igsh=ZGMwbTB6cmdpMGFs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors w-fit group">
              <Instagram className="w-4 h-4 group-hover:text-pink-500 transition-colors" />
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@fikrdmx?_r=1&_t=ZS-95hIQK1YhtM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors w-fit group">
              <TikTokIcon className="w-4 h-4 group-hover:text-white transition-colors" />
              <span>TikTok</span>
            </a>
            <a href="https://www.youtube.com/@fikr_dmx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors w-fit group">
              <Youtube className="w-4 h-4 group-hover:text-red-500 transition-colors" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Massive Text */}
        <div className="w-full flex justify-center mb-12 overflow-hidden">
          <h2 className="text-[12vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none">
            FIKERDMX
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-xs tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-400">Accepting New Clients</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <div className="text-zinc-500">
            © {new Date().getFullYear()} FIKERDMX. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
