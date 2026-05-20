import { TrendingUp, MessageCircle, Camera, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp size={20} className="text-black" />
              </div>
              <span className="text-xl font-black tracking-tighter">StealMyTrend</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              AI-powered trend intelligence for the next generation of ecommerce entrepreneurs. Find winners, scale faster.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/dashboard" className="text-muted text-sm hover:text-primary transition-colors">Trend Scanner</Link></li>
              <li><Link to="/dashboard" className="text-muted text-sm hover:text-primary transition-colors">Product Discovery</Link></li>
              <li><Link to="/dashboard" className="text-muted text-sm hover:text-primary transition-colors">Ad Copy Gen</Link></li>
              <li><Link to="/pricing" className="text-muted text-sm hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted text-sm hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted text-sm hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="mailto:support@stealmytrend.ai" className="flex items-center gap-2 text-muted text-sm hover:text-primary transition-colors">
                <Mail size={14} />
                Contact Us
              </a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} StealMyTrend AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2 text-[10px] text-muted uppercase tracking-widest font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-lime animate-pulse"></div>
              System Status: Optimal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
