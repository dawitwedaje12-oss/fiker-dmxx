import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const words = "Digital marketing is the intersection of creative storytelling and data-driven performance. We don't just run ads; we engineer high-converting campaigns that elevate your brand and maximize your return on investment.".split(" ");

export default function Philosophy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "start 25%"]
  });

  return (
    <section ref={containerRef} className="lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mx-auto py-12 md:py-24 px-4 bg-[#0a0a0c]">
      <div className="md:px-12 relative overflow-hidden rounded-[40px] py-16 md:py-32 px-6 border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.01] backdrop-blur-[60px] shadow-[0_32px_64px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_24px_48px_rgba(255,255,255,0.05)]">
        
        {/* Animated Water/Liquid Blobs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/20 mix-blend-screen filter blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-400/20 mix-blend-screen filter blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          className="absolute top-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-purple-500/10 mix-blend-screen filter blur-[80px] pointer-events-none"
        />

        {/* Glass Edge Highlights */}
        <div className="absolute inset-0 rounded-[40px] border border-white/30 [mask-image:linear-gradient(to_bottom_right,white,transparent)] pointer-events-none" />
        <div className="absolute inset-0 rounded-[40px] border border-black/20 [mask-image:linear-gradient(to_top_left,white,transparent)] pointer-events-none" />
        
        {/* Subtle grid background for technical feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="text-center max-w-5xl mx-auto relative z-10">
          <div className="relative inline-block">
            {/* Horizontal connecting wire */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-1/2 right-full w-[100vw] h-[1px] bg-gradient-to-r from-transparent to-blue-500/50 origin-right mr-4 hidden sm:block"
            />
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-mono font-medium tracking-widest uppercase mb-12 relative">
              The Philosophy
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.3] font-sans font-medium text-white mb-12 tracking-tight flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
            {words.map((word, i) => {
              const start = (i / words.length) * 0.8; // Compress the range to 80% of the total scroll
              const end = start + 0.1; // Each word reveals over a very short 10% window
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
              const filter = useTransform(scrollYProgress, [start, end], ["blur(16px)", "blur(0px)"]);
              const color = useTransform(scrollYProgress, [start, end], ["#52525b", "#ffffff"]);
              const y = useTransform(scrollYProgress, [start, end], [12, 0]);
              const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
              
              return (
                <motion.span key={i} style={{ opacity, filter, color, y, scale }} className="transition-all duration-300 inline-block">
                  {word}
                </motion.span>
              );
            })}
          </h2>
          <div className="flex flex-col items-center gap-2 mt-12">
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-mono">
              Data-Driven. ROI-Focused.
            </p>
            <div className="w-12 h-[1px] bg-white/10 mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
