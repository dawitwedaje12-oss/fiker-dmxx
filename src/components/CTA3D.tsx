import { motion } from 'motion/react';
import { Shield, MapPin, Mail, Phone, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CTA3D() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0a0a0c] border-t border-white/5" id="contact">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent"
          >
            <div className="absolute inset-0 bg-blue-500/5 blur-2xl" />
            
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-blue-500/30 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500/30 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-blue-500/30 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-blue-500/30 rounded-br-3xl" />

              {/* Header */}
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 font-mono text-sm tracking-[0.2em] uppercase font-bold">
                    Partner With Us
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-semibold text-white mb-6 tracking-tight">
                  Scale Your Brand.
                </h2>
                <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Transparent pricing. Direct communication. We only partner with brands ready for aggressive expansion and market dominance.
                </p>
              </div>

              {/* Grid Layout for Pricing & Contact */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                
                {/* Pricing Column */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-white font-semibold text-xl tracking-wide">Growth Retainer</h3>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold text-white">Custom Pricing</span>
                    </div>
                    <p className="text-zinc-400 text-base mt-3">Comprehensive digital marketing infrastructure tailored for scaling businesses. Please call us to discuss a customized growth package.</p>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {[
                      'Full-service campaign management',
                      'High-converting content creation',
                      'Advanced analytics & ROI tracking',
                      'Dedicated account manager',
                      'Weekly performance strategy calls'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-base text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="tel:+251929177388" className="group relative flex items-center justify-center gap-2 w-full h-12 bg-white text-black font-medium text-sm rounded-xl hover:bg-zinc-200 transition-all duration-300">
                    Call Us Now
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                </div>

                {/* Contact & Location Column */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-xl tracking-wide mb-8">Contact & Location</h3>
                    
                    <div className="space-y-8">
                      {/* Location */}
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                          <MapPin className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-white text-base font-medium mb-1">Headquarters</div>
                          <div className="text-zinc-400 text-sm leading-relaxed">
                            Bole Ruwanda Street<br />
                            Addis Ababa, Ethiopia
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                          <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-white text-base font-medium mb-1">Email Us</div>
                          <a href="mailto:fikreslasi@gmail.com" className="text-zinc-400 text-sm hover:text-white transition-colors block mb-1">fikreslasi@gmail.com</a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                          <Phone className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-white text-base font-medium mb-1">Call Us</div>
                          <a href="tel:+251929177388" className="text-zinc-400 text-sm hover:text-white transition-colors block mb-1">+251 929 177 388</a>
                          <div className="text-zinc-500 text-xs mt-1">Mon-Fri, 9:00 AM - 6:00 PM (EAT)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Status Bar */}
              <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Capacity: Limited</span>
                </div>
                <div>Onboarding: Active</div>
                <div>ROI: Maximized</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
