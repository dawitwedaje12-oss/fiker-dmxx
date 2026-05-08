import { motion } from 'motion/react';
import { ShoppingCart, CreditCard, TrendingUp, Search, BarChart, Users, ArrowUpRight, MousePointerClick, Zap, Target, Shield, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Capabilities() {
  return (
    <section className="max-w-7xl mx-auto pt-24 px-4 pb-24 bg-[#0a0a0c]" id="case-studies">
      <div className="md:p-12 relative overflow-hidden rounded-[40px] p-6 border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.01] backdrop-blur-[60px] shadow-[0_32px_64px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_24px_48px_rgba(255,255,255,0.05)]">
        
        {/* Animated Water/Liquid Blobs */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 mix-blend-screen filter blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/20 mix-blend-screen filter blur-[100px] pointer-events-none"
        />

        {/* Glass Edge Highlights */}
        <div className="absolute inset-0 rounded-[40px] border border-white/30 [mask-image:linear-gradient(to_bottom_right,white,transparent)] pointer-events-none" />
        <div className="absolute inset-0 rounded-[40px] border border-black/20 [mask-image:linear-gradient(to_top_left,white,transparent)] pointer-events-none" />
        
        {/* Subtle grid background for technical feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between items-start mb-16 relative z-10">
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
              <BarChart className="w-4 h-4 text-blue-400" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-mono font-medium">
                Our Results
              </p>
            </div>
            <h2 className="sm:text-5xl text-4xl font-sans font-medium text-white tracking-tight">
              Recent Campaigns.
            </h2>
            <p className="mt-6 text-sm text-zinc-400 max-w-xl leading-relaxed font-sans">
              Documented execution of high-yield digital marketing strategies across competitive sectors.
            </p>
          </div>
          <Link to="/our-works" className="inline-flex text-sm font-medium transition-all hover:bg-white/10 text-white border border-white/20 bg-transparent h-10 rounded-lg px-6 items-center">
            View All Campaigns
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3 relative z-10">
          
          {/* Card 1: E-commerce */}
          <div className="group flex flex-col overflow-hidden bg-black/40 backdrop-blur-xl h-[400px] border border-white/5 hover:border-blue-500/30 transition-colors duration-500 rounded-2xl p-4 relative">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <LockKeyhole className="w-3 h-3 text-blue-400" />
            </div>
            <div className="flex flex-col h-full relative gap-6">
              <div className="relative flex items-center justify-center h-48 overflow-hidden bg-white/[0.02] w-full shrink-0 border border-white/5 rounded-xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <div className="relative z-10 w-48 h-48 scale-90">
                  <div className="absolute inset-4 rounded-full border border-white/5"></div>
                  <div className="absolute inset-4 rounded-full border-t border-t-blue-500/50 border-l-0 border-r-0 border-b-0" style={{ transform: 'rotate(40deg)' }}></div>
                  <div className="absolute inset-12 rounded-full border border-white/5"></div>
                  <div className="absolute inset-12 rounded-full border-t border-t-blue-500/50 border-l-0 border-r-0 border-b-0" style={{ transform: 'rotate(-20deg)' }}></div>
                  
                  <div className="absolute inset-[76px] rounded-full bg-black/50 backdrop-blur-md border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] flex items-center justify-center z-20">
                    <ShoppingCart className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                  </div>
                  
                  <div className="absolute inset-0 z-10 pointer-events-none" style={{ animation: 'orbit 40s linear infinite' }}>
                    <div className="absolute -left-2 top-16 h-6 w-6 rounded-full border border-white/10 bg-black flex items-center justify-center" style={{ animation: 'orbit-reverse 40s linear infinite' }}>
                      <CreditCard className="w-3 h-3 text-zinc-500" />
                    </div>
                    <div className="absolute right-0 top-8 h-6 w-6 rounded-full border border-white/10 bg-black flex items-center justify-center" style={{ animation: 'orbit-reverse 40s linear infinite' }}>
                      <TrendingUp className="w-3 h-3 text-zinc-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-auto pb-2 px-2">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <h3 className="text-xl font-medium text-white">E-Commerce Scaling</h3>
                  <span className="text-xs font-mono font-medium bg-blue-500/10 text-blue-400 px-2 py-1 border border-blue-500/20 rounded tracking-widest uppercase shrink-0">+240% ROAS</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-4">
                  Executed a high-frequency paid media strategy for a D2C brand, scaling revenue from $50k to $170k MRR via targeted social ads.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: B2B SaaS */}
          <div className="group flex flex-col overflow-hidden bg-black/40 backdrop-blur-xl h-[400px] border border-white/5 hover:border-purple-500/30 transition-colors duration-500 rounded-2xl p-4 relative">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <LockKeyhole className="w-3 h-3 text-purple-400" />
            </div>
            <div className="flex flex-col h-full relative gap-6">
              <div className="flex overflow-hidden h-48 bg-white/[0.02] relative items-center justify-center w-full shrink-0 border border-white/5 rounded-xl">
                <div className="grid grid-cols-3 w-full h-full z-10 p-4 gap-2" style={{ maskImage: 'linear-gradient(180deg, transparent, black 20%, black 80%, transparent)' }}>
                  {/* Col 1 */}
                  <div className="flex flex-col gap-2 animate-col-down">
                    <div className="aspect-square bg-black/50 rounded-lg border border-white/5 flex items-center justify-center"><Search className="w-4 h-4 text-zinc-600" /></div>
                    <div className="aspect-square bg-black/50 rounded-lg border border-white/5 flex items-center justify-center"><MousePointerClick className="w-4 h-4 text-zinc-600" /></div>
                    <div className="aspect-square bg-black/50 rounded-lg border border-purple-500/20 flex items-center justify-center"><Target className="w-4 h-4 text-purple-400" /></div>
                    <div className="aspect-square bg-black/50 rounded-lg border border-white/5 flex items-center justify-center"><Search className="w-4 h-4 text-zinc-600" /></div>
                  </div>
                  {/* Col 2 */}
                  <div className="flex flex-col gap-2 animate-col-up">
                    <div className="aspect-square bg-black/50 rounded-lg border border-purple-500/20 flex items-center justify-center"><ArrowUpRight className="w-4 h-4 text-purple-400" /></div>
                    <div className="aspect-square bg-black/50 rounded-lg border border-white/5 flex items-center justify-center"><BarChart className="w-4 h-4 text-zinc-500" /></div>
                    <div className="aspect-square bg-black/50 rounded-lg border border-white/5 flex items-center justify-center"><Users className="w-4 h-4 text-zinc-500" /></div>
                    <div className="aspect-square bg-black/50 rounded-lg border border-purple-500/20 flex items-center justify-center"><ArrowUpRight className="w-4 h-4 text-purple-400" /></div>
                  </div>
                  {/* Col 3 */}
                  <div className="flex flex-col gap-2 animate-col-down">
                    <div className="aspect-square bg-black/50 rounded-lg border border-purple-500/20 flex items-center justify-center"><Zap className="w-4 h-4 text-purple-400" /></div>
                    <div className="aspect-square bg-black/50 rounded-lg border border-white/5 flex items-center justify-center"><TrendingUp className="w-4 h-4 text-zinc-600" /></div>
                    <div className="aspect-square bg-black/50 rounded-lg border border-white/5 flex items-center justify-center"><Target className="w-4 h-4 text-zinc-600" /></div>
                    <div className="aspect-square bg-black/50 rounded-lg border border-purple-500/20 flex items-center justify-center"><Zap className="w-4 h-4 text-purple-400" /></div>
                  </div>
                </div>
              </div>
              <div className="relative mt-auto pb-2 px-2">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <h3 className="text-xl font-medium text-white">B2B Lead Generation</h3>
                  <span className="text-xs font-mono font-medium bg-purple-500/10 text-purple-400 px-2 py-1 border border-purple-500/20 rounded tracking-widest uppercase shrink-0">-45% CPA</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-4">
                  Restructured search campaigns and optimized landing pages for a B2B SaaS, tripling high-quality lead volume.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: SEO */}
          <div className="group flex flex-col overflow-hidden bg-black/40 backdrop-blur-xl h-[400px] border border-white/5 hover:border-blue-500/30 transition-colors duration-500 rounded-2xl p-4 relative">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <LockKeyhole className="w-3 h-3 text-blue-400" />
            </div>
            <div className="flex flex-col h-full relative gap-6">
              <div className="relative flex items-center justify-center h-48 overflow-hidden bg-white/[0.02] w-full shrink-0 border border-white/5 rounded-xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-black/50 backdrop-blur-md rounded-xl border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.1)] animate-pulse-logo z-20 relative">
                    <Shield className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-20 -translate-y-10 bg-black/50 border border-white/10 p-2 rounded-lg animate-bounce duration-[2000ms]">
                    <div className="w-6 h-1 bg-blue-500/50 rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-x-12 translate-y-6 bg-black/50 border border-white/10 p-2 rounded-lg animate-bounce duration-[3000ms]">
                    <div className="w-10 h-1 bg-blue-500/50 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="relative mt-auto pb-2 px-2">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <h3 className="text-xl font-medium text-white">Organic Search Growth</h3>
                  <span className="text-xs font-mono font-medium bg-blue-500/10 text-blue-400 px-2 py-1 border border-blue-500/20 rounded tracking-widest uppercase shrink-0">100k+ Traffic</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-4">
                  Engineered an SEO content strategy that captured high-intent search queries, driving 100k+ monthly organic sessions in 8 months.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
