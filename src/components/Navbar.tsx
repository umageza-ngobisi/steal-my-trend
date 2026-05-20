import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.4)]">
          <Zap className="text-black fill-current" size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight">StealMyTrend</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
        <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
        <Link to="/dashboard/scanner" className="text-sm font-medium hover:text-primary transition-colors">Trends</Link>
        <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/login" className="text-sm font-medium px-4 py-2 hover:text-primary transition-colors">Login</Link>
        <Link to="/signup" className="btn-primary py-2 px-6 text-sm">Get Started</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
