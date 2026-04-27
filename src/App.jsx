import React, { useState, useEffect } from 'react'
import { 
  Rocket, 
  Target, 
  PenTool, 
  MousePointer, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Menu,
  X,
  Shield,
  Layout
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Process', href: '#process' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Pricing', href: '#pricing' },
  ]

  const whatsappUrl = "https://wa.me/9361373852?text=Hello,%20I'm%20interested%20in%20a%20landing%20page%20from%20CyberFuture!"

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tighter">
          Cyber<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">Future</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all">
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300">
                  {link.name}
                </a>
              ))}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 rounded-xl text-center font-semibold">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600 rounded-full blur-[120px] mix-blend-screen" />
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-violet-300 mb-8"
        >
          <Rocket size={14} /> Trusted by 100+ Brands Worldwide
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
        >
          Stop Losing Customers.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400">
            Start Converting Them.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12"
        >
          Most businesses don’t have a traffic problem. They have a conversion problem. We build landing pages that turn clicks into customers.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://wa.me/9361373852?text=Hello,%20I'm%20ready%20to%20start%20my%20CyberFuture%20project!" className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
            Get My Landing Page
          </a>
          <a href="#process" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-semibold">
            Learn More
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale"
        >
          <div className="text-2xl font-bold italic">GOOGLE</div>
          <div className="text-2xl font-bold italic">STRIPE</div>
          <div className="text-2xl font-bold italic">SHOPIFY</div>
          <div className="text-2xl font-bold italic">AMAZON</div>
        </motion.div>
      </div>
    </section>
  )
}

const Problem = () => {
  const problems = [
    { title: "Visitors leave without action", desc: "You have seconds to grab attention. Most sites fail the 5-second test." },
    { title: "Ads are wasting money", desc: "Sending paid traffic to a weak page is like pouring water into a leaky bucket." },
    { title: "No clear message or CTA", desc: "If customers have to think about what to do next, you've already lost them." },
    { title: "Slow and confusing design", desc: "A cluttered UI and slow load times kill trust and conversions instantly." },
  ]

  return (
    <section id="problem" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              Why Your Website <span className="text-red-500">Isn’t Converting</span>
            </h2>
            <div className="space-y-6">
              {problems.map((p, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                    <p className="text-slate-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-violet-500/20 rounded-3xl blur-2xl -z-10" />
            <img src="hero_abstract_tech_1777297564991.png" alt="Tech Visual" className="rounded-3xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

const Solution = () => {
  const solutions = [
    { icon: <Target className="text-violet-500" />, title: "Attention Headlines", desc: "Hook your audience the moment they land with powerful hooks." },
    { icon: <PenTool className="text-blue-500" />, title: "Conversion Copy", desc: "Persuasive storytelling that addresses pain points effectively." },
    { icon: <MousePointer className="text-cyan-500" />, title: "Strategic CTA", desc: "Guiding users naturally toward the conversion goal." },
    { icon: <Layout className="text-emerald-500" />, title: "Mobile-First", desc: "Flawless performance on every device your customers use." },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          What <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">CyberFuture</span> Does Differently
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Process = () => {
  const steps = [
    { num: '01', title: 'Analyze', desc: 'We deep-dive into your business and target audience.' },
    { num: '02', title: 'Design', desc: 'We craft a high-converting layout from scratch.' },
    { num: '03', title: 'Copy', desc: 'We write persuasive words that drive massive action.' },
    { num: '04', title: 'Deliver', desc: 'You get a ready-to-use page focused on ROI.' },
  ]

  return (
    <section id="process" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-extrabold mb-16">Our <span className="text-violet-500">Simple Process</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="text-8xl font-black text-white/5 absolute -top-8 left-0 group-hover:text-violet-500/10 transition-colors">{s.num}</div>
              <div className="relative pt-8">
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Benefits = () => {
  return (
    <section id="benefits" className="py-24">
      <div className="container mx-auto px-6">
        <div className="p-8 md:p-16 rounded-[40px] bg-gradient-to-br from-violet-900/20 via-blue-900/10 to-transparent border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-[100px]" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-8">What <span className="text-violet-500">You Get</span></h2>
              <div className="space-y-4">
                {['More leads every single day', 'Higher conversion rates', 'Better ROI on your ad spend', 'Strong brand positioning'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg">
                    <CheckCircle className="text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="landing_page_mockup_1_1777297580114.png" alt="ROI" className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => {
  const reviews = [
    { name: "Sarah Jenkins", role: "Founder, Bloom E-comm", text: "Our conversions increased 3x in just 2 weeks. CyberFuture completely transformed how we capture leads." },
    { name: "David Chen", role: "Marketing Consultant", text: "We started getting leads immediately after the new page went live. They focus on results, not just design." },
    { name: "Mark Thompson", role: "CEO, TechGrowth SaaS", text: "The copywriting is pure magic and the page loads instantly on mobile. Best investment this year." },
  ]

  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-extrabold mb-16">What Our <span className="text-blue-500">Clients Say</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-3xl bg-black/40 border border-white/10">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 italic mb-6">"{r.text}"</p>
              <div>
                <div className="font-bold">{r.name}</div>
                <div className="text-sm text-slate-500">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto p-12 rounded-[40px] bg-white/5 border-2 border-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest text-violet-400">Get Your Custom Page</h3>
          <div className="text-7xl font-black mb-4">Starting From <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">$99</span></div>
          <p className="text-slate-400 mb-10 text-lg">Pricing depends on features, copy length, and complexity. Every page is custom-built for ROI.</p>
          <a href="https://wa.me/9361373852?text=Hello,%20I'd%20like%20to%20get%20a%20custom%20quote%20for%20a%20landing%20page." target="_blank" className="inline-block bg-white text-black px-10 py-5 rounded-full text-xl font-black hover:bg-violet-500 hover:text-white transition-all shadow-xl">
            Get My Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          Don’t Lose Another <span className="text-red-500">Customer</span>
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Your competitors are already optimizing. It’s your turn to dominate the market.
        </p>
        <a href="https://wa.me/9361373852" className="inline-flex items-center gap-4 bg-gradient-to-r from-violet-600 to-blue-600 px-12 py-6 rounded-full text-2xl font-black hover:scale-105 transition-transform shadow-[0_0_40px_rgba(139,92,246,0.4)]">
          Start Now <ArrowRight />
        </a>
        <p className="mt-8 text-slate-500 flex items-center justify-center gap-2">
          <Shield size={18} /> 100% Satisfaction Guarantee
        </p>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-2xl font-extrabold tracking-tighter mb-2">
            Cyber<span className="gradient-text">Future</span>
          </div>
          <p className="text-sm text-slate-500 italic">Building the future of conversions.</p>
        </div>
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-xs text-slate-600">
          &copy; 2026 CyberFuture Agency. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#030305] text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <Benefits />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
