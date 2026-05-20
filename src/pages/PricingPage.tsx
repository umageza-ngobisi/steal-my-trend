import { motion } from 'framer-motion';
import { Check, HelpCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for beginners starting their dropshipping journey.',
    features: [
      '50 Viral Product Scans/mo',
      'Daily Trend Updates',
      'Basic AI Ad Copy Generator',
      'Chrome Extension Access',
      'Email Support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'The most popular choice for serious ecommerce brands.',
    features: [
      'Unlimited Product Scans',
      'Real-time Trend Intelligence',
      'Advanced AI Ad Scripts & Hooks',
      'Store Page Generator (Shopify)',
      'Competitor Store Tracking',
      'Priority Support',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Elite',
    price: '$199',
    description: 'Scale your operation with dedicated AI resources.',
    features: [
      'Everything in Pro',
      'Dedicated Trend Analyst AI',
      'Custom Creative Generation',
      'API Access for Bulk Scans',
      '1-on-1 Consultation/mo',
      'Dedicated Success Manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const faqs = [
  {
    question: 'How does the AI find viral products?',
    answer: 'Our AI scanners analyze engagement metrics, growth velocity, and comment sentiment across TikTok, Reels, and Shorts to identify products before they hit the saturation point.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings. You will continue to have access until the end of your billing period.',
  },
  {
    question: 'Does the generator work with Shopify?',
    answer: 'Absolutely! Our Store Page Generator creates high-converting product descriptions and structures optimized for Shopify and other major platforms.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 7-day free trial on the Starter and Pro plans so you can experience the power of StealMyTrend risk-free.',
  },
];

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
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Simple, Transparent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">
              Pricing for Growth.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted max-w-2xl mx-auto"
          >
            Choose the plan that fits your scale. All plans include access to our core AI trend intelligence.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 rounded-3xl border relative flex flex-col ${
                plan.popular ? 'border-primary/50 shadow-[0_0_30px_rgba(0,242,255,0.15)]' : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted">/month</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/signup" className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                plan.popular 
                  ? 'bg-primary text-black hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]' 
                  : 'bg-white/5 hover:bg-white/10 border border-white/10'
              }`}>
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Compare Features</h2>
            <p className="text-muted">Everything you need to find your next winner.</p>
          </div>
          
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-6 text-sm font-bold text-muted uppercase tracking-wider">Feature</th>
                    <th className="p-6 text-sm font-bold text-muted uppercase tracking-wider text-center">Starter</th>
                    <th className="p-6 text-sm font-bold text-muted uppercase tracking-wider text-center">Pro</th>
                    <th className="p-6 text-sm font-bold text-muted uppercase tracking-wider text-center">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    'AI Trend Analysis', 'Ad Hook Generator', 'Competitor Analysis', 'Shopify Generator', 'Custom AI Analyst'
                  ].map((feature, i) => (
                    <tr key={feature} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                      <td className="p-6 text-sm font-medium">{feature}</td>
                      <td className="p-6 text-center">
                        <Check size={18} className="mx-auto text-primary" />
                      </td>
                      <td className="p-6 text-center">
                        <Check size={18} className="mx-auto text-primary" />
                      </td>
                      <td className="p-6 text-center">
                        <Check size={18} className="mx-auto text-primary" />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="p-6 text-sm font-medium">Scans Per Month</td>
                    <td className="p-6 text-center text-sm">50</td>
                    <td className="p-6 text-center text-sm font-bold text-primary">Unlimited</td>
                    <td className="p-6 text-center text-sm font-bold text-primary">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Loved by Marketers</h2>
            <p className="text-muted">Join 12,000+ users scaling their stores.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-primary/30" />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-primary font-medium">{t.role}</p>
                  </div>
                </div>
                <p className="text-muted italic leading-relaxed">
                  "{t.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="text-primary" />
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group glass-card rounded-2xl border border-white/10 overflow-hidden">
                <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-bold hover:text-primary transition-colors">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180">
                    <Zap size={16} className="text-muted" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-primary/20 via-accent-purple/10 to-transparent border border-white/10 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to find your winner?</h2>
          <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
            Get started today and join thousands of successful ecommerce brands using AI intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary px-10 py-4 text-lg">Start 7-Day Free Trial</button>
            <button className="btn-secondary px-10 py-4 text-lg">View Demo</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
