import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, ReactNode } from 'react';
import { Search, Target, TrendingUp, ShieldCheck, Lock, Activity } from 'lucide-react';

function StackCard({ index, children }: { index: number; children: ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const filter = useTransform(scrollYProgress, [0, 1], ["brightness(100%)", "brightness(50%)"]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        scale, 
        opacity, 
        filter,
        top: `calc(var(--stack-top, 4rem) + ${index * 0.5}rem)`
      }}
      className="sticky overflow-hidden group bg-white/70 backdrop-blur-[40px] w-full border border-white/60 shadow-[0_32px_64px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5),inset_0_24px_48px_rgba(255,255,255,0.8)] rounded-[40px] origin-top [--stack-top:4rem] md:[--stack-top:7rem]"
    >
      {/* Animated White Liquid Blobs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-white/80 filter blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 filter blur-[80px] pointer-events-none"
      />
      
      {/* Glass Edge Highlights */}
      <div className="absolute inset-0 rounded-[40px] border border-white/80 [mask-image:linear-gradient(to_bottom_right,white,transparent)] pointer-events-none" />
      <div className="absolute inset-0 rounded-[40px] border border-black/5 [mask-image:linear-gradient(to_top_left,white,transparent)] pointer-events-none" />

      {/* Subtle grid background for technical feel - updated for light mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>
      
      {children}
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto pt-10 px-6 pb-24 relative bg-[#0a0a0c]" id="process">
      <div className="md:p-12 bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.02)] rounded-3xl p-6 relative overflow-hidden">
        
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-24 items-start relative z-10">
          <div className="relative">
            {/* Horizontal connecting wire */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-8 right-full w-[100vw] h-[1px] bg-gradient-to-r from-transparent to-blue-500/50 origin-right mr-6 hidden sm:block"
            />
            <div className="flex items-center gap-3 mb-6 relative">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-mono font-medium">
                Our Methodology
              </p>
            </div>
            <h2 className="sm:text-5xl text-4xl font-sans font-medium text-white tracking-tight">
              Execution Process.
            </h2>
            <p className="mt-6 text-sm text-zinc-400 max-w-xl leading-relaxed font-sans">
              A systematic, data-driven approach to digital marketing and brand growth.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[35vh] pb-[20vh] relative z-10">
          
          <StackCard index={0}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute top-4 right-6 z-0 pointer-events-none select-none">
              <div className="text-[80px] sm:text-[120px] font-sans font-bold text-slate-900/[0.03] leading-none tracking-tighter">
                01
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 md:p-20 p-8 relative z-10 items-center">
              <div className="relative flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-full max-w-[400px] bg-white/40 border border-white/60 shadow-xl relative p-8 text-center rounded-2xl group-hover:border-blue-400/50 transition-colors duration-500 backdrop-blur-md">
                  <div className="absolute top-0 right-0 p-3 opacity-40">
                    <Lock className="w-3 h-3 text-blue-500" />
                  </div>
                  <div className="w-16 h-16 mx-auto bg-white rounded-xl flex items-center justify-center mb-8 border border-slate-200 shadow-sm">
                    <Search className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Discovery & Audit</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">Deep-level analysis of your current marketing efforts, audience behavior, and competitive landscape.</p>
                </div>
              </div>
              <div className="relative flex flex-col justify-center">
                <h3 className="text-3xl font-sans font-semibold text-slate-900 mb-6 tracking-tight">Identify Growth Opportunities</h3>
                <p className="text-base text-slate-600 leading-relaxed max-w-xl font-sans">
                  Before launching campaigns, we map the entire digital terrain. We conduct a comprehensive audit of your existing channels to identify performance gaps and untapped avenues for expansion.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-blue-200 text-blue-700 font-mono uppercase tracking-widest bg-blue-50">Market Research</span>
                  <span className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 font-mono uppercase tracking-widest bg-white/50">Competitor Analysis</span>
                  <span className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 font-mono uppercase tracking-widest bg-white/50">SEO Audit</span>
                </div>
              </div>
            </div>
          </StackCard>

          <StackCard index={1}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute top-4 right-6 z-0 pointer-events-none select-none">
              <div className="text-[80px] sm:text-[120px] font-sans font-bold text-slate-900/[0.03] leading-none tracking-tighter">
                02
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 md:p-20 p-8 relative z-10 items-center">
              <div className="relative flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-full max-w-[400px] bg-white/40 border border-white/60 shadow-xl relative p-8 text-center rounded-2xl group-hover:border-purple-400/50 transition-colors duration-500 backdrop-blur-md">
                  <div className="absolute top-0 right-0 p-3 opacity-40">
                    <Lock className="w-3 h-3 text-purple-500" />
                  </div>
                  <div className="w-16 h-16 mx-auto bg-white rounded-xl flex items-center justify-center mb-8 border border-slate-200 shadow-sm">
                    <Target className="w-6 h-6 text-purple-500" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Strategic Execution</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">Deploying targeted, multi-channel campaigns designed to acquire high-value customers with precision.</p>
                </div>
              </div>
              <div className="relative flex flex-col justify-center">
                <h3 className="text-3xl font-sans font-semibold text-slate-900 mb-6 tracking-tight">Launch & Acquire</h3>
                <p className="text-base text-slate-600 leading-relaxed max-w-xl font-sans">
                  We craft compelling creatives, establish robust tracking, and execute targeted campaigns across search, social, and email to capture market share and drive conversions.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-purple-200 text-purple-700 font-mono uppercase tracking-widest bg-purple-50">Campaign Launch</span>
                  <span className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 font-mono uppercase tracking-widest bg-white/50">Ad Copywriting</span>
                  <span className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 font-mono uppercase tracking-widest bg-white/50">Audience Targeting</span>
                </div>
              </div>
            </div>
          </StackCard>

          <StackCard index={2}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute top-4 right-6 z-0 pointer-events-none select-none">
              <div className="text-[80px] sm:text-[120px] font-sans font-bold text-slate-900/[0.03] leading-none tracking-tighter">
                03
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 md:p-20 p-8 relative z-10 items-center">
              <div className="relative flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-full max-w-[400px] bg-white/40 border border-white/60 shadow-xl relative p-8 text-center rounded-2xl group-hover:border-blue-400/50 transition-colors duration-500 backdrop-blur-md">
                  <div className="absolute top-0 right-0 p-3 opacity-40">
                    <Lock className="w-3 h-3 text-blue-500" />
                  </div>
                  <div className="w-16 h-16 mx-auto bg-white rounded-xl flex items-center justify-center mb-8 border border-slate-200 shadow-sm">
                    <Activity className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Optimization & Scaling</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">Continuous A/B testing, budget reallocation, and performance analysis to maximize your return on ad spend.</p>
                </div>
              </div>
              <div className="relative flex flex-col justify-center">
                <h3 className="text-3xl font-sans font-semibold text-slate-900 mb-6 tracking-tight">Data-Driven Growth</h3>
                <p className="text-base text-slate-600 leading-relaxed max-w-xl font-sans">
                  Marketing is iterative. We monitor analytics in real-time, pause underperforming ads, and aggressively scale successful campaigns to ensure maximum ROI.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-blue-200 text-blue-700 font-mono uppercase tracking-widest bg-blue-50">A/B Testing</span>
                  <span className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 font-mono uppercase tracking-widest bg-white/50">ROI Maximization</span>
                  <span className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 font-mono uppercase tracking-widest bg-white/50">Performance Analytics</span>
                </div>
              </div>
            </div>
          </StackCard>

        </div>
      </div>
    </section>
  );
}
