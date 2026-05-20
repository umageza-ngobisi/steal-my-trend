import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Cpu, Heart, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  delay: number;
  chartColor: string;
}

const Sparkline = ({ color }: { color: string }) => {
  // Generate a random-looking path for the sparkline
  const points = [
    "0,25", "10,18", "20,28", "30,12", "40,20", "50,8", "60,18", "70,12", "80,24", "90,14", "100,20"
  ].join(" ");

  return (
    <div className="h-10 w-full mt-4 overflow-hidden">
      <svg viewBox="0 0 100 30" className="w-full h-full preserve-3d" preserveAspectRatio="none">
        <motion.path
          d={`M ${points}`}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d={`M ${points} L 100,30 L 0,30 Z`}
          fill={`url(#gradient-${color.replace('#', '')})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <defs>
          <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, icon, delay, chartColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-5 rounded-3xl relative overflow-hidden group hover:border-primary/40 transition-all hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]"
    >
      {/* Background decoration */}
      <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
      
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-2xl bg-white/5 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all">
          {icon}
        </div>
        <div className={`flex items-center gap-0.5 text-xs font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-primary-lime/10 text-primary-lime' : 'bg-red-500/10 text-red-500'}`}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </div>
      </div>
      
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">{title}</p>
        <h3 className="text-3xl font-black tracking-tight">{value}</h3>
      </div>
      
      <Sparkline color={chartColor} />
    </motion.div>
  );
};

const AnalyticsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <StatCard
        title="Viral Products"
        value="1,284"
        change="+12.5%"
        isPositive={true}
        icon={<Zap size={22} />}
        delay={0.1}
        chartColor="#00f2ff"
      />
      <StatCard
        title="Avg. Trend Growth"
        value="342%"
        change="+24.2%"
        isPositive={true}
        icon={<TrendingUp size={22} />}
        delay={0.2}
        chartColor="#bc13fe"
      />
      <StatCard
        title="AI Efficiency"
        value="99.8%"
        change="+0.2%"
        isPositive={true}
        icon={<Cpu size={22} />}
        delay={0.3}
        chartColor="#39ff14"
      />
      <StatCard
        title="Active Users"
        value="8.4k"
        change="+5.1%"
        isPositive={true}
        icon={<Heart size={22} />}
        delay={0.4}
        chartColor="#f43f5e"
      />
    </div>
  );
};

export default AnalyticsSection;
