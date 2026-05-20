import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Zap, ChevronRight, Play, Cpu, Globe, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  const testimonials = [
    {
      name: 'Sarah J.',
      role: '7-Figure Dropshipper',
      content: 'StealMyTrend found me three winning products in my first week. The AI ad copy alone saved me hours of work.',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
    },
    {
      name: 'Marcus K.',
      role: 'Affiliate Marketer',
      content: 'The real-time trend scanning is a game changer. I am finally ahead of the competition instead of just copying them.',
      avatar: 'https://i.pravatar.cc/150?u=marcus',
    },
    {
      name: 'Elena R.',
      role: 'Ecom Store Owner',
      content: 'The store page generator is worth the price alone. Clean, SEO-optimized descriptions in seconds.',
      avatar: 'https://i.pravatar.cc/150?u=elena',
    },
  ];

  const features = [
    {
      title: 'Real-time Scanning',
      description: 'Our AI never sleeps, continuously monitoring social signals across all major platforms.',
      icon: <Globe size={24} className="text-primary" />,
      color: 'primary'
    },
    {
      title: 'Virality Scoring',
      description: 'Proprietary algorithms predict which products will explode before they go mainstream.',
      icon: <TrendingUp size={24} className="text-accent-purple" />,
      color: 'accent-purple'
    },
    {
      title: 'AI Ad Architect',
      description: 'Generate high-converting TikTok hooks, scripts, and captions tailored to each trend.',
      icon: <Zap size={24} className="text-accent-cyan" />,
      color: 'accent-cyan'
    },
    {
      title: 'Store Sync',
      description: 'Export winning product data directly to your Shopify or WooCommerce store with one click.',
      icon: <Cpu size={24} className="text-accent-lime" />,
      color: 'accent-lime'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-background min-h-screen">
      <Navbar />
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-accent-purple/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles className="text-accent-cyan" size={16} />
          <span className="text-xs font-medium text-white/80">AI-Powered Trend Intelligence</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Find Viral Products <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-purple to-accent-lime">
            Before Everyone Else.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI-powered trend intelligence for dropshippers, affiliates, and ecommerce brands. Stop guessing, start stealing trends.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/pricing" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
            Start Scanning Now
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
            <Play size={18} fill="currentColor" />
            Watch Demo
          </button>
        </motion.div>

        {/* Dashboard Preview Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative group"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-3xl transform scale-90 group-hover:scale-100 transition-transform duration-700"></div>
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl border-white/20 aspect-video md:aspect-[21/9] flex items-center justify-center bg-black/40 backdrop-blur-sm relative">
            <div className="text-center px-6">
              <TrendingUp className="text-primary mx-auto mb-4 animate-bounce" size={48} />
              <p className="text-2xl font-bold mb-2">Live Trend Feed Scanning...</p>
              <div className="flex gap-2 justify-center">
                <div className="h-1 w-12 bg-primary rounded-full animate-pulse"></div>
                <div className="h-1 w-12 bg-accent-purple rounded-full animate-pulse delay-75"></div>
                <div className="h-1 w-12 bg-accent-lime rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
            
            {/* Overlay simulation */}
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-primary/5 to-transparent"></div>
            </div>
          </div>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 glass-card p-4 rounded-xl hidden lg:block border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-lime/20 rounded-full flex items-center justify-center">
                <TrendingUp size={20} className="text-accent-lime" />
              </div>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Viral Potential</p>
                <p className="text-lg font-black text-accent-lime">98.4%</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-10 glass-card p-4 rounded-xl hidden lg:block border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Zap size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-bold">AI Analysis</p>
                <p className="text-sm font-bold text-primary">Scanning Tik Tok...</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/5 relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Products Scanned', value: '1.2M+' },
            { label: 'Winning Trends', value: '85k+' },
            { label: 'Active Users', value: '12k+' },
            { label: 'Ad ROI Avg.', value: '4.2x' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-2 text-white">{stat.value}</h3>
              <p className="text-sm text-muted uppercase tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Built for Explosive Growth.</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Our platform provides the end-to-end intelligence you need to dominate the ecommerce landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Loved by Top Marketers.</h2>
              <p className="text-muted text-lg">
                Join thousands of dropshippers and ecommerce brands who have transformed their business with our AI.
              </p>
            </div>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="fill-primary text-primary" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-primary/30" />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-primary font-medium">{t.role}</p>
                  </div>
                </div>
                <p className="text-muted italic leading-relaxed flex-1">
                  "{t.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden p-12 md:p-20 border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-purple/10 to-transparent -z-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                Stop Guessing. <br />
                <span className="text-primary">Start Winning.</span>
              </h2>
              <p className="text-lg text-muted mb-10 max-w-lg">
                The difference between a failing store and a 7-figure brand is the data. Get the data everyone else is missing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup" className="btn-primary px-10 py-4 text-lg flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight size={20} />
                </Link>
                <Link to="/pricing" className="btn-secondary px-10 py-4 text-lg flex items-center justify-center">
                  View Pricing
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="glass-card p-8 rounded-3xl border-primary/30 shadow-[0_0_50px_rgba(0,242,255,0.1)]">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-bold text-xl">Top Trend Right Now</h4>
                  <span className="bg-primary-lime/20 text-primary-lime text-xs font-black px-2 py-1 rounded">HOT</span>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Virality Probability</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent-purple"
                      initial={{ width: 0 }}
                      whileInView={{ width: '84%' }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Profit Margin Est.</span>
                    <span className="font-bold">84%</span>
                  </div>
                </div>
                <button className="w-full mt-8 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">
                  Unlock Product Details
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
