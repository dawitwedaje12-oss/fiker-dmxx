import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function GlassHero() {
  return (
    <section className="relative min-h-screen w-full bg-[#fbfbfd] text-[#1d1d1f] overflow-hidden font-sans pt-24 pb-20">
      {/* Premium Apple-style Monochrome Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Subtle radial gradients for depth instead of colors */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-white blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-black/[0.02] blur-[120px]" />
        
        {/* Eye-Catchy Luxury Background Blobs */}
        <motion.div
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "60% 40% 30% 70% / 60% 30% 70% 40%"
            ],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: "transform, border-radius" }}
          className="absolute top-[10%] left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-[#d4af37]/25 via-[#f3e5ab]/35 to-amber-300/15 blur-[100px] mix-blend-multiply"
        />

        <motion.div
          animate={{
            borderRadius: [
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "70% 30% 50% 50% / 30% 40% 70% 60%",
              "40% 60% 70% 30% / 40% 50% 60% 50%"
            ],
            rotate: [360, 180, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: "transform, border-radius" }}
          className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-purple-400/20 via-rose-300/25 to-fuchsia-300/15 blur-[100px] mix-blend-multiply"
        />
      </div>

      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-[#1d1d1f]">FIKER<span className="text-[#86868b] font-normal">DMX</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#515154]">
          <Link to="/" className="hover:text-[#1d1d1f] transition-colors">Home</Link>
          <Link to="/our-works" className="hover:text-[#1d1d1f] transition-colors">Portfolio</Link>
          <a href="#services" className="hover:text-[#1d1d1f] transition-colors">Services</a>
          <a href="#contact" className="hover:text-[#1d1d1f] transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/our-works" className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-black/5 px-4 py-2 rounded-full text-sm font-medium text-[#1d1d1f] hover:bg-white transition-colors shadow-sm">
            See Our Work
          </Link>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-4 lg:pt-4 pb-20 flex flex-col items-center text-center min-h-[80vh]">
        
        {/* Centered Content */}
        <div className="max-w-4xl flex flex-col items-center z-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 md:mb-2 relative group mt-16 md:mt-0"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-white/60 blur-xl transition-all group-hover:blur-2xl" />
            
            {/* Premium Glass Pill */}
            <motion.div 
              animate={{
                borderRadius: [
                  "40px 40px 40px 40px",
                  "50px 30px 40px 50px",
                  "30px 50px 50px 30px",
                  "40px 40px 40px 40px"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative px-6 py-3 md:px-8 md:py-4 bg-white/40 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] flex items-center justify-center overflow-hidden"
            >
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#1d1d1f] font-semibold tracking-tight relative z-10 text-center">
                A premium digital marketing agency
              </p>
            </motion.div>
          </motion.div>

          {/* Massive Premium FIKERDMX Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-black tracking-tighter mb-8 leading-none flex items-center justify-center break-words"
          >
            <span className="relative inline-block filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.1)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#86868b] via-[#1d1d1f] to-[#000000]">
                FIKER
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#d2d2d7] via-[#86868b] to-[#434345]">
                DMX
              </span>
            </span>
          </motion.h1>
        </div>

        {/* Picture / Squircle - Centered below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 relative flex justify-center items-center w-full max-w-4xl px-2 md:px-0"
        >
          {/* Premium Apple-style Dark Glass Squircle */}
          <div className="relative w-full min-h-[400px] md:min-h-[250px] md:aspect-[21/9] rounded-[30px] md:rounded-[40px] border border-white/20 bg-black/[0.85] backdrop-blur-[80px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_2px_4px_rgba(255,255,255,0.2)] flex items-center justify-center">
            {/* Inner noise texture utilizing inline CSS svg generator to avoid network lag (luggage) */}
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
            
            {/* Diagonal light streak (Apple style specular highlight) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-100 transform -rotate-45 scale-[1.5] translate-y-1/4 blur-lg" />
            
            {/* 3D Inner Shadow / Edge highlights */}
            <div className="absolute inset-0 rounded-[40px] border border-white/20 [mask-image:linear-gradient(to_bottom_right,white,transparent)]" />
            <div className="absolute inset-0 rounded-[40px] border border-black/50 [mask-image:linear-gradient(to_top_left,white,transparent)]" />

            {/* Metrics Content */}
            <div className="relative z-10 w-full px-8 py-12 flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 w-full mb-10">
                
                {/* Metric 1 */}
                <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 tracking-tighter mb-3 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    4.8x
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                    className="text-xs md:text-sm font-mono text-[#86868b] uppercase tracking-[0.2em]"
                  >
                    Average ROI
                  </motion.div>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 tracking-tighter mb-3 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    150+
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                    className="text-xs md:text-sm font-mono text-[#86868b] uppercase tracking-[0.2em]"
                  >
                    Clients Served
                  </motion.div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 tracking-tighter mb-3 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    94%
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    className="text-xs md:text-sm font-mono text-[#86868b] uppercase tracking-[0.2em]"
                  >
                    Client Retention
                  </motion.div>
                </div>

              </div>

              {/* Long Premium Our Works Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-sm md:max-w-xl mt-5 lg:mt-6"
              >
                <Link to="/our-works" className="group relative w-full flex items-center justify-between p-2.5 pl-6 md:p-3 md:pl-10 lg:p-4 lg:pl-12 rounded-full bg-white shadow-[0_8px_32px_rgba(255,255,255,0.15)] hover:shadow-[0_16px_48px_rgba(255,255,255,0.25)] hover:bg-gray-50 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
                  
                  {/* Hover Sweep Effect */}
                  <div className="absolute top-0 bottom-0 left-0 w-full -translate-x-[150%] bg-gradient-to-r from-transparent via-black/5 to-transparent skew-x-12 group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                  
                  <span className="relative z-10 text-base sm:text-lg md:text-xl lg:text-2xl font-black text-black tracking-[0.1em] md:tracking-[0.15em] uppercase">
                    See Our Work
                  </span>
                  
                  {/* Arrow Pill/Circle */}
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full bg-black flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] group-hover:bg-zinc-900 transition-all duration-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white transform group-hover:translate-x-1.5 transition-transform duration-300">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Luxury Real-Gold Portfolio Section */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center z-20 mt-24 mb-10 px-4">
          
          {/* Eye-Catchy Spotlight Aura behind text */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
             <motion.div 
               animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute w-[90vw] md:w-[80vw] h-[300px] bg-gradient-to-r from-[#d4af37]/30 via-[#fca311]/25 to-[#e8c87c]/30 blur-[100px]" 
             />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center w-full relative z-20"
          >
            {/* Cinematic High-End Serif Font for Portfolio */}
            <h1 className="text-[70px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-serif italic tracking-tighter leading-none mb-6 relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-[linear-gradient(to_bottom_right,#b0891d,#ffea94,#cf9d25,#ffea94,#9e7415)] bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_12px_24px_rgba(176,137,29,0.35)]">
                Portfolio.
              </span>
              
              {/* Realistic 3D Bevel/Base Layer */}
              <span className="absolute left-0 top-[4px] z-0 bg-clip-text text-transparent bg-gradient-to-b from-[#4a3500] to-transparent opacity-60 blur-[3px]">
                Portfolio.
              </span>
            </h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="w-[100px] md:w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#b0891d] to-transparent shadow-[0_0_15px_rgba(255,234,148,0.8)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Text */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-8 mt-8 text-center pb-32"
      >
        <h2 className="text-xl md:text-3xl font-medium tracking-wide text-[#1d1d1f]">
          Expertise in <span className="font-serif italic text-[#b0891d] font-bold text-2xl md:text-4xl drop-shadow-sm">Paid Media</span>, <span className="font-serif italic text-[#b0891d] font-bold text-2xl md:text-4xl drop-shadow-sm">SEO</span>, <br />
          and <span className="font-serif italic text-[#b0891d] font-bold text-2xl md:text-4xl drop-shadow-sm">Conversion Optimization</span>.
        </h2>
      </motion.div>

      {/* Gradient transition to dark section below */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0a0a0c] z-20 pointer-events-none" />
    </section>
  );
}
