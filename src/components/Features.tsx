import { motion } from 'motion/react';
import { Search, Mail, Target, TrendingUp, Users, Smartphone, BarChart, Zap, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto pt-32 px-4 pb-32 bg-[#0a0a0c]" id="services">
      <div className="md:p-16 lg:p-20 relative overflow-hidden rounded-[40px] p-8 border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.01] backdrop-blur-[60px] shadow-[0_32px_64px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_24px_48px_rgba(255,255,255,0.05)]">
        
        {/* Animated Water/Liquid Blobs */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 mix-blend-screen filter blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/20 mix-blend-screen filter blur-[100px] pointer-events-none"
        />

        {/* Glass Edge Highlights */}
        <div className="absolute inset-0 rounded-[40px] border border-white/30 [mask-image:linear-gradient(to_bottom_right,white,transparent)] pointer-events-none" />
        <div className="absolute inset-0 rounded-[40px] border border-black/20 [mask-image:linear-gradient(to_top_left,white,transparent)] pointer-events-none" />
        
        {/* Subtle grid background for technical feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16 items-start relative z-10">
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
              <Shield className="w-4 h-4 text-blue-400" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-mono font-medium">
                Core Capabilities
              </p>
            </div>
            <h2 className="sm:text-5xl text-4xl font-sans font-medium text-white tracking-tight">
              Full-Spectrum Marketing.
            </h2>
            <p className="mt-6 text-sm text-zinc-400 max-w-xl leading-relaxed font-sans">
              From initial awareness to complete market capture, we engineer campaigns that acquire, engage, and monetize high-value audiences.
            </p>
          </div>
          <Link to="/our-works" className="inline-flex text-sm font-medium transition-all hover:bg-white/10 text-white border border-white/20 bg-transparent h-10 rounded-lg px-6 items-center">
            View Campaigns
          </Link>
        </div>

        <div className="flex w-full relative items-center justify-center z-10">
          {/* LEFT INTEGRATIONS RAIL */}
          <div className="hidden lg:block w-[260px] h-[440px] relative translate-x-6">
            <svg className="absolute top-0 right-0 bottom-0 left-0 w-[260px] h-[440px]" viewBox="0 0 260 440" fill="none" strokeWidth="2">
              <defs>
                <linearGradient id="beam-gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"></stop>
                  <stop offset="50%" stopColor="#3b82f6"></stop>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M 52 144 C 150 144, 150 220, 260 220" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"></path>
              <path d="M 52 144 C 150 144, 150 220, 260 220" stroke="url(#beam-gradient-left)" strokeWidth="1.5" fill="none" className="animate-beam-path beam-delay-100" strokeLinecap="round"></path>
              
              <path d="M 52 220 C 120 220, 180 220, 260 220" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"></path>
              <path d="M 52 220 C 120 220, 180 220, 260 220" stroke="url(#beam-gradient-left)" strokeWidth="1.5" fill="none" className="animate-beam-path" strokeLinecap="round"></path>
              
              <path d="M 52 296 C 150 296, 150 220, 260 220" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"></path>
              <path d="M 52 296 C 150 296, 150 220, 260 220" stroke="url(#beam-gradient-left)" strokeWidth="1.5" fill="none" className="animate-beam-path beam-delay-200" strokeLinecap="round"></path>
            </svg>

            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group/node transition-all hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-md">
                <Search className="text-zinc-500 group-hover/node:text-blue-400 transition-colors w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group/node transition-all hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-md">
                <Target className="text-zinc-500 group-hover/node:text-blue-400 transition-colors w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group/node transition-all hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-md">
                <Lock className="text-zinc-500 group-hover/node:text-blue-400 transition-colors w-5 h-5" />
              </div>
            </div>
          </div>

          {/* DESKTOP CARD (Center - Omnichannel Engine) */}
          <div className="relative">
            <div className="hidden lg:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20 border border-[#0a0a0c] rotate-45 rounded-sm"></div>
            <div className="hidden lg:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-20 border border-[#0a0a0c] rotate-45 rounded-sm"></div>

            <div className="overflow-hidden flex flex-col group/card bg-black/40 backdrop-blur-xl w-full lg:h-[440px] max-w-[700px] z-10 rounded-2xl border border-white/10 mx-auto p-6 relative shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Target className="w-24 h-24 text-white" />
              </div>
              
              <div className="flex justify-center w-full mb-8 relative z-20">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-lg transition-all hover:bg-white/10 cursor-default group">
                  <Zap className="text-blue-400 animate-pulse w-4 h-4" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-blue-400 tracking-widest uppercase">Campaign Engine Active</span>
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse ml-1"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full relative z-10 overflow-y-auto md:overflow-hidden">
                {/* Col 1 */}
                <div className="col-span-1 pt-6 flex flex-col gap-4">
                  <div className="bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 border border-white/5 rounded-xl p-4 flex flex-col gap-3 shadow-sm cursor-pointer">
                    <div className="flex items-center gap-2 justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.4)]"></div>
                        <span className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest">Awareness</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-medium text-white mb-1">Organic Search</div>
                      <div className="text-sm text-zinc-500 font-sans">Technical SEO & Content</div>
                      <div className="w-full h-[2px] bg-white/5 mt-3 overflow-hidden rounded-full">
                        <div className="h-full bg-blue-500 w-[75%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300 border border-white/5 rounded-xl p-4 flex flex-col gap-2 shadow-sm cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.4)]"></div>
                      <span className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest">Acquisition</span>
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500 font-sans mb-1">Paid Media</div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-purple-400 font-mono border border-purple-500/20 bg-purple-500/10 px-2 py-1 rounded uppercase tracking-widest">ROAS 4.5x</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 border border-white/5 rounded-xl p-4 flex flex-col gap-2 shadow-sm h-full cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.4)]"></div>
                      <span className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest">Conversion</span>
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500 font-sans mb-1">A/B Testing</div>
                      <div className="text-sm text-zinc-400 font-mono">+22% Conv. Rate</div>
                    </div>
                  </div>
                </div>

                {/* Col 3 */}
                <div className="col-span-1 flex flex-col gap-4 pt-10">
                  <div className="bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300 border border-white/5 rounded-xl p-4 flex flex-col gap-2 shadow-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.4)]"></div>
                      <span className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest">Retention</span>
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500 font-sans mb-1">Email Marketing</div>
                      <div className="text-sm text-zinc-400 font-mono">35% Open Rate</div>
                    </div>
                  </div>
                  <div className="bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 border border-white/5 rounded-xl p-4 flex flex-col gap-2 shadow-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.4)]"></div>
                      <span className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest">Analytics</span>
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500 font-sans mb-1">Data Visualization</div>
                      <div className="text-sm text-zinc-400 font-mono">Real-time Dashboards</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20"></div>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                <div className="relative flex items-center justify-center w-16 h-16">
                  <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[ping_3s_ease-out_infinite] opacity-50"></div>
                  <div className="absolute inset-2 border border-blue-500/30 rounded-full animate-[ping_3s_ease-out_1s_infinite] opacity-50"></div>
                  <div className="relative w-12 h-12 bg-black/50 backdrop-blur-md rounded-full border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)] flex items-center justify-center group overflow-hidden">
                    <TrendingUp className="text-blue-400 w-5 h-5" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT INTEGRATIONS RAIL */}
          <div className="relative hidden lg:block w-[260px] h-[440px]">
            <svg className="absolute top-0 right-0 bottom-0 left-0 w-[260px] h-[440px]" viewBox="0 0 260 440" fill="none" strokeWidth="2">
              <defs>
                <linearGradient id="beam-gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0"></stop>
                  <stop offset="50%" stopColor="#a855f7"></stop>
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M 0 220 C 100 220, 100 68, 208 68" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"></path>
              <path d="M 0 220 C 100 220, 100 68, 208 68" stroke="url(#beam-gradient-right)" strokeWidth="1.5" fill="none" className="animate-beam-path beam-delay-300" strokeLinecap="round"></path>
              
              <path d="M 0 220 C 100 220, 100 144, 208 144" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"></path>
              <path d="M 0 220 C 100 220, 100 144, 208 144" stroke="url(#beam-gradient-right)" strokeWidth="1.5" fill="none" className="animate-beam-path beam-delay-100" strokeLinecap="round"></path>
              
              <path d="M 0 220 C 100 220, 100 220, 208 220" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"></path>
              <path d="M 0 220 C 100 220, 100 220, 208 220" stroke="url(#beam-gradient-right)" strokeWidth="1.5" fill="none" className="animate-beam-path beam-delay-500" strokeLinecap="round"></path>
              
              <path d="M 0 220 C 100 220, 100 296, 208 296" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"></path>
              <path d="M 0 220 C 100 220, 100 296, 208 296" stroke="url(#beam-gradient-right)" strokeWidth="1.5" fill="none" className="animate-beam-path beam-delay-200" strokeLinecap="round"></path>
              
              <path d="M 0 220 C 100 220, 100 372, 208 372" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"></path>
              <path d="M 0 220 C 100 220, 100 372, 208 372" stroke="url(#beam-gradient-right)" strokeWidth="1.5" fill="none" className="animate-beam-path beam-delay-300" strokeLinecap="round"></path>
            </svg>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center transition-all hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md group/node">
                <BarChart className="text-zinc-500 group-hover/node:text-purple-400 transition-colors w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center transition-all hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md group/node">
                <Users className="text-zinc-500 group-hover/node:text-purple-400 transition-colors w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center transition-all hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md group/node">
                <Smartphone className="text-zinc-500 group-hover/node:text-purple-400 transition-colors w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
