import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Zap, Activity, Globe, Filter, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTrends } from '../hooks/useTrends';

const categories = ['all', 'fitness', 'beauty', 'gadgets', 'pets', 'home improvement', 'fashion'];

const TrendScanner: React.FC = () => {
  const [isScanning, setIsScanning] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  
  const { trends } = useTrends(selectedCategory === 'all' ? undefined : selectedCategory);

  const visibleTrends = useMemo(() => {
    if (isScanning) return [];
    return trends;
  }, [isScanning, trends]);

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsScanning(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      const logs = [
        "Initializing neural network...",
        "Connecting to TikTok API...",
        "Scraping Instagram Reels...",
        "Analyzing engagement metrics...",
        "Detecting virality patterns...",
        "Filtering noise from data...",
        "Identifying emerging hashtags...",
        "Calculating growth projections...",
        "Finalizing trend report..."
      ];

      let logIndex = 0;
      const logInterval = setInterval(() => {
        if (logIndex < logs.length) {
          setScanLogs((prev) => [logs[logIndex], ...prev].slice(0, 5));
          logIndex++;
        } else {
          clearInterval(logInterval);
        }
      }, 600);

      return () => {
        clearInterval(interval);
        clearInterval(logInterval);
      };
    }
  }, [isScanning]);

  const handleRefresh = () => {
    setIsScanning(true);
    setScanProgress(0);
    setScanLogs([]);
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-purple to-primary-lime bg-clip-text text-transparent"
        >
          Trend Scanner
        </motion.h1>
        <p className="text-muted text-lg max-w-2xl">
          Our AI is continuously scanning social media platforms to find the next viral hits before they go mainstream.
        </p>
      </div>

      {/* Scanner Control Center */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-card border border-white/10 rounded-2xl p-8 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full ${isScanning ? 'bg-primary/20 text-primary animate-pulse' : 'bg-primary-lime/20 text-primary-lime'}`}>
                {isScanning ? <Activity className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{isScanning ? 'System Scanning...' : 'Scan Complete'}</h3>
                <p className="text-muted text-sm">{isScanning ? 'Analyzing real-time data' : '8 new trends discovered'}</p>
              </div>
            </div>
            
            {!isScanning && (
              <button 
                onClick={handleRefresh}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                Run New Scan
              </button>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-muted">Progress</span>
              <span className="text-primary font-mono">{scanProgress}%</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative">
              {isScanning && (
                <motion.div
                  className="absolute top-0 h-full w-20 bg-primary/40 blur-md z-10"
                  animate={{ x: ['-100%', '1000%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              )}
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary-purple relative z-0"
                initial={{ width: 0 }}
                animate={{ width: `${scanProgress}%` }}
              />
              </div>
              </div>

              {/* Terminal/Logs */}
          <div className="bg-black/50 rounded-xl p-4 font-mono text-sm border border-white/5 h-32 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {scanLogs.map((log, index) => (
                <motion.div
                  key={log + index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex items-center gap-2 mb-1"
                >
                  <span className="text-primary-lime">›</span>
                  <span className={index === 0 ? 'text-white' : 'text-muted'}>{log}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            {isScanning && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-primary ml-1"
              />
            )}
          </div>
        </div>

        {/* Stats/Info Cards */}
        <div className="space-y-4">
          <div className="bg-card border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-5 h-5 text-primary-purple" />
              <span className="text-sm text-muted">Global Coverage</span>
            </div>
            <div className="text-2xl font-bold">4 Platforms</div>
            <div className="text-xs text-muted mt-1">TikTok, Reels, Shorts, FB</div>
          </div>
          <div className="bg-card border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-primary-lime" />
              <span className="text-sm text-muted">Scanning Speed</span>
            </div>
            <div className="text-2xl font-bold">12.5k nodes/s</div>
            <div className="text-xs text-muted mt-1">Ultra-fast AI processing</div>
          </div>
          <div className="bg-card border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted">Confidence Level</span>
            </div>
            <div className="text-2xl font-bold">98.2%</div>
            <div className="text-xs text-muted mt-1">Based on engagement data</div>
          </div>
        </div>
      </div>

      {/* Filters and Feed */}
      {!isScanning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
              <Filter className="w-4 h-4 text-muted mr-2" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
                    selectedCategory === cat 
                      ? 'bg-primary text-background font-medium' 
                      : 'bg-white/5 text-muted hover:bg-white/10'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input 
                type="text" 
                placeholder="Search trends..." 
                className="w-full bg-card border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
            <AnimatePresence mode="popLayout">
              {visibleTrends.map((trend, index) => (
                <motion.div
                  key={trend.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={trend.thumbnail} 
                      alt={trend.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-black/60 backdrop-blur-md text-xs px-2 py-1 rounded-md border border-white/10">
                        {trend.platform}
                      </span>
                      <span className="bg-primary/90 text-background font-bold text-xs px-2 py-1 rounded-md">
                        Score: {trend.viralityScore}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] uppercase tracking-wider text-primary font-bold">{trend.category}</span>
                      <span className="text-[10px] text-muted">{trend.timestamp}</span>
                    </div>
                    <h4 className="font-semibold mb-3 line-clamp-1">{trend.name}</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-primary-lime">
                        <Activity className="w-3 h-3" />
                        <span className="text-xs font-mono">+{trend.growth}%</span>
                      </div>
                      <span className="text-xs text-muted">{trend.engagement}</span>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-background text-xs font-bold py-2 rounded-lg transition-all">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {visibleTrends.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted">No trends found for this category.</p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default TrendScanner;
