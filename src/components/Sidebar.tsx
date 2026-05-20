import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { 
  Zap, 
  Search, 
  TrendingUp, 
  Heart, 
  Video, 
  Store, 
  Settings, 
  ChevronRight,
  LogOut
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import UserProfile from './UserProfile';

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  href, 
  active 
}: { 
  icon: LucideIcon, 
  label: string, 
  href: string, 
  active: boolean 
}) => {
  return (
    <Link to={href}>
      <motion.div
        whileHover={{ x: 4 }}
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
          active 
            ? "bg-primary/10 text-primary border border-primary/20" 
            : "text-muted hover:text-white hover:bg-white/5"
        )}
      >
        <Icon size={20} className={cn(
          "transition-colors",
          active ? "text-primary" : "group-hover:text-white"
        )} />
        <span className="font-medium text-sm">{label}</span>
        {active && (
          <motion.div 
            layoutId="sidebar-active"
            className="ml-auto"
          >
            <ChevronRight size={14} />
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Search, label: 'Discovery', href: '/dashboard' },
    { icon: TrendingUp, label: 'Trend Scanner', href: '/dashboard/scanner' },
    { icon: Heart, label: 'Saved Products', href: '/dashboard/saved' },
    { icon: Video, label: 'AI Ad Generator', href: '/dashboard/ad-generator' },
    { icon: Store, label: 'Store Page Gen', href: '/dashboard/store-generator' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="w-64 h-screen border-r border-white/10 bg-background/50 backdrop-blur-xl flex flex-col p-4 fixed left-0 top-0 z-40">
      <div className="flex items-center gap-2 px-4 mb-8">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.3)]">
          <Zap className="text-black fill-current" size={18} />
        </div>
        <span className="text-lg font-bold tracking-tight">StealMyTrend</span>
      </div>

      <div className="px-2 mb-8">
        <UserProfile className="p-2 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-white/5" />
      </div>

      <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold px-4 mb-2">Main Menu</p>
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.href}
            {...item}
            active={location.pathname === item.href}
          />
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <SidebarItem 
          icon={Settings} 
          label="Settings" 
          href="/dashboard/settings" 
          active={location.pathname === '/dashboard/settings'}
        />
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 mt-2"
        >
          <LogOut size={20} />
          <span className="font-medium text-sm">Logout</span>
        </button>
        
        <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-purple/10 border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
            <Zap size={40} className="text-primary" />
          </div>
          <p className="text-xs font-bold mb-1">Upgrade to Pro</p>
          <p className="text-[10px] text-muted mb-3 leading-tight">Get unlimited trend scans and AI generations.</p>
          <Link to="/pricing" className="block w-full py-2 bg-primary text-black text-[10px] text-center font-bold rounded-lg hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all">
            Upgrade Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
