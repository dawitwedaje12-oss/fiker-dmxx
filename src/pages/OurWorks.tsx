import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Instagram, Youtube, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmoothScroll from '../components/SmoothScroll';
import Footer from '../components/Footer';
import { cachedThumbs } from '../assets/cachedThumbs';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const projects: any[] = [
  {
    id: 'tt-0',
    title: 'Your Beauty by Hanna',
    category: 'Viral Beauty',
    platform: 'TikTok',
    Icon: TikTokIcon,
    image: cachedThumbs['tt-0'],
    link: 'https://vt.tiktok.com/ZS9RtSqFE/',
    views: '4M'
  },
  {
    id: 'tt-1',
    title: '@red_redina',
    category: 'Procedure Showcase',
    platform: 'TikTok',
    Icon: TikTokIcon,
    image: cachedThumbs['tt-1'],
    link: 'https://vt.tiktok.com/ZSHQaXjt5/',
    views: '475K'
  },
  {
    id: 'yt-0',
    title: 'Miko Mikee',
    category: 'Brand Anthem',
    platform: 'YouTube',
    Icon: Youtube,
    image: cachedThumbs['yt-0'],
    link: 'https://youtu.be/cWd_m_EhPOU?si=sHhvRF-cWiOpk6Q4',
    views: '3.6M',
    span: 'aspect-[1020/1080]'
  },
  {
    id: 'tt-2',
    title: '@yoma_dental_clinic_1',
    category: 'Behind The Scenes',
    platform: 'TikTok',
    Icon: TikTokIcon,
    image: cachedThumbs['tt-2'],
    link: 'https://vt.tiktok.com/ZSHQuv7ou/',
    views: '823K'
  },
  {
    id: 'tt-3',
    title: '@bkk159',
    category: 'Educational',
    platform: 'TikTok',
    Icon: TikTokIcon,
    image: cachedThumbs['tt-3'],
    link: 'https://vt.tiktok.com/ZSHQHmKUk/',
    views: '541K'
  },
  {
    id: 'yt-1',
    title: "@DaggysLifeClass",
    category: 'Channel Masterclass',
    platform: 'YouTube',
    Icon: Youtube,
    image: cachedThumbs['yt-1'],
    link: 'https://youtu.be/TAIXuZ-wnYE?si=9gOGqYnM7dFK7zJi',
    views: '307K'
  },
  {
    id: 'yt-2',
    title: 'Manyazewal Eshetu',
    category: 'Video Feature',
    platform: 'YouTube',
    Icon: Youtube,
    image: cachedThumbs['yt-2'],
    link: 'https://www.youtube.com/watch?v=XAqF9dZjbqA',
    views: '798K',
    span: 'aspect-[1020/1080]'
  },
  {
    id: 'tt-4',
    title: '@glow_city1',
    category: 'Technique Highlights',
    platform: 'TikTok',
    Icon: TikTokIcon,
    image: cachedThumbs['tt-4'],
    link: 'https://vt.tiktok.com/ZSHQHT5P5/',
    views: '1.2M'
  },
  {
    id: 'ig-1',
    title: '@fikr_dmx',
    category: 'Reels Marketing',
    platform: 'Instagram',
    Icon: Instagram,
    image: cachedThumbs['ig-1'],
    link: 'https://www.instagram.com/reel/DH_ZawFM97t/?igsh=dGk3dW5lMGdncWto',
    views: '151K'
  },
  {
    id: 'yt-beast',
    title: 'Beast Works',
    category: 'Epic Feature',
    platform: 'YouTube',
    Icon: Youtube,
    image: cachedThumbs['yt-beast'],
    link: 'https://youtu.be/vA6yyguu3rc?si=mBgbMs8iPTtG2SDO',
    views: '1M+'
  }
];

const platforms = ['All', 'TikTok', 'YouTube', 'Instagram'];

export default function OurWorks() {
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter projects based on the active tab
  const filteredProjects = activeTab === 'All' 
    ? projects
    : projects.filter(p => p.platform === activeTab);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#050505] text-zinc-50 selection:bg-white/20 selection:text-white relative font-sans">
        
        {/* Minimalist Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-8 mix-blend-difference">
          <Link to="/" className="flex items-center gap-3 text-white hover:opacity-70 transition-opacity group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="text-sm font-medium tracking-widest uppercase">Back</span>
          </Link>
          <div className="text-xl font-bold tracking-widest uppercase">
            FIKER<span className="text-zinc-500 font-normal">DMX</span>
          </div>
        </header>

        {/* Premium Hero Section */}
        <section className="pt-48 pb-32 px-8 max-w-[1400px] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono tracking-[0.2em] uppercase text-zinc-400 bg-white/[0.02] backdrop-blur-md">
                Selected Works
              </span>
            </motion.div>
            
            <h1 className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold tracking-tighter leading-[0.9] mb-8">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Digital
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/10">
                Mastery.
              </span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              A curated collection of our most impactful campaigns. We don't just chase views; we engineer cultural moments that convert.
            </p>
          </motion.div>
        </section>

        {/* Elite Partners / Top 5 Companies Section */}
        <section className="px-4 md:px-8 pb-32 max-w-[1200px] mx-auto relative z-10 w-full overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center border-y border-white/5 py-16 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="text-center mb-12 relative z-10">
              <h2 className="text-[#b0891d] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3">
                <span className="w-8 h-[1px] bg-[#b0891d]/50" />
                Our Elite Partners
                <span className="w-8 h-[1px] bg-[#b0891d]/50" />
              </h2>
              <p className="text-xl md:text-3xl font-light text-zinc-300 max-w-3xl leading-relaxed">
                Trusted by industry-leading brands to engineer <span className="font-medium text-white">high-stakes</span> digital growth and cultural dominance.
              </p>
            </div>

            {/* 3 Premium Brand Logos (Typography-based) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 w-full items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-700 relative z-10 px-4 max-w-4xl mx-auto">
              
              {/* Brand 1: Teklehaimanot Hospital */}
              <a href="https://www.tiktok.com/@teklehaimanothospital?_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center group cursor-pointer text-center">
                <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white group-hover:text-[#d4af37] transition-colors duration-500 leading-none">
                  Teklehaimanot
                  <span className="block text-sm md:text-base font-light tracking-widest mt-1 opacity-70 group-hover:opacity-100 uppercase">Hospital</span>
                </span>
              </a>

              {/* Brand 2: Glow City */}
              <a href="https://www.tiktok.com/@glow_city1?_r=1&_d=efdm66j4h8mh70&sec_uid=MS4wLjABAAAAVW0jLYtSfUnMbKaBvGcut_CJuneQPgxb_XzwLwVPfihyHVzw1A5ksFvGxZ_hv1qO&share_author_id=6678537448476492805&sharer_language=en&source=h5_m&u_code=efkde5mlgcgk06&timestamp=1776687568&user_id=7404848859208549382&sec_user_id=MS4wLjABAAAA3_V0fCnj9pJEnjZ5DYsbn8O-b1SOSoCSiGySDbD3ZFd_DplSNbXe84V55AXCob8F&item_author_type=2&utm_source=telegram&utm_campaign=client_share&utm_medium=android&share_iid=7627901562903480084&share_link_id=dcb87969-5c74-448d-aa8c-98a59f296994&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b2001%2Cb5836&social_share_type=5&enable_checksum=1" target="_blank" rel="noopener noreferrer" className="flex items-center group cursor-pointer text-center">
                <span className="text-2xl md:text-3xl font-black tracking-widest text-white uppercase group-hover:scale-105 transition-transform duration-500">
                  GLOW<span className="text-zinc-500 group-hover:text-white transition-colors duration-500">CITY</span>
                </span>
              </a>

              {/* Brand 3: Daggy's Lifeclass */}
              <a href="https://www.youtube.com/@DaggysLifeClass" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:border-[#d4af37] transition-colors duration-500 shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full group-hover:bg-[#d4af37] transition-colors duration-500" />
                </div>
                <span className="text-lg md:text-xl font-light tracking-[0.1em] text-white uppercase group-hover:text-[#d4af37] transition-colors duration-500 whitespace-nowrap">
                  Daggy's
                  <span className="block text-xs md:text-sm font-medium tracking-widest mt-0.5 opacity-70 group-hover:opacity-100">Lifeclass</span>
                </span>
              </a>

            </div>
          </motion.div>
        </section>

        {/* Premium Filters / Tabs */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-12 flex flex-wrap justify-center gap-2 md:gap-4 relative z-10">
          {platforms.map(platform => (
            <button
              key={platform}
              onClick={() => setActiveTab(platform)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeTab === platform 
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'bg-white/[0.05] text-zinc-400 hover:text-white hover:bg-white/[0.1]'
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        {/* Premium Bento/Masonry Grid */}
        <section className="px-4 md:px-8 pb-40 max-w-[1400px] mx-auto relative z-10">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden rounded-[2.5rem] bg-[#111113] block ${project.span || 'aspect-[1020/1200]'} border border-white/5`}
                >
                  {/* High Quality Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 filter brightness-90 group-hover:brightness-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Professional Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75 pointer-events-none" />
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Smooth Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center border border-white/30 text-white shadow-2xl">
                      <Play className="w-6 h-6 ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Elite Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-start">
                      <div className="px-5 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-2.5 transition-colors group-hover:border-white/30">
                        <project.Icon className="w-3.5 h-3.5 text-white/90" />
                        <span className="text-[10px] font-bold tracking-[0.15em] text-white uppercase">
                          {project.platform}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 backdrop-blur-md border border-green-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-green-500 uppercase tracking-tighter">Live Portfolio</span>
                      </div>
                    </div>

                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="h-[1px] w-4 bg-[#b0891d]/60 group-hover:w-8 transition-all duration-500" />
                        <span className="text-zinc-400 text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer pointer-events-auto">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3 group-hover:text-[#f8f8f8] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-widest">{project.views}</span>
                          <span className="text-[9px] font-medium uppercase tracking-[0.1em] opacity-60">Verified Views</span>
                        </div>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </motion.a>
            ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
