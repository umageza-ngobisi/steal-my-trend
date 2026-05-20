import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Search, LogOut, User, Settings, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';

const TopNav = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-16 border-b border-white/10 bg-background/50 backdrop-blur-md flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-30">
      <div className="flex-1 max-w-md relative group">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <input 
          type="text" 
          placeholder="Search for products, trends or niches..." 
          className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-white/5 transition-colors relative text-muted hover:text-white">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
        
        <div className="relative" ref={dropdownRef}>
          <div 
            className="flex items-center gap-3 pl-2 cursor-pointer group"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <UserProfile showDetails={false} />
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold group-hover:text-primary transition-colors">Alex Hunter</p>
              <p className="text-[10px] text-muted">Pro Plan</p>
            </div>
          </div>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-4 w-56 bg-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 p-2"
              >
                <div className="px-4 py-3 border-b border-white/5 mb-1">
                  <p className="text-sm font-bold">Alex Hunter</p>
                  <p className="text-[10px] text-muted">alex@example.com</p>
                </div>
                
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-white hover:bg-white/5 rounded-xl transition-all">
                  <User size={16} />
                  <span>Profile</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-white hover:bg-white/5 rounded-xl transition-all">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-white hover:bg-white/5 rounded-xl transition-all">
                  <CreditCard size={16} />
                  <span>Billing</span>
                </button>
                
                <div className="h-[1px] bg-white/5 my-1" />
                
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
