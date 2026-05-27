import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, User as UserIcon, Sparkles, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await signUp(email, password, fullName);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
      setIsLoading(false);
    }
  };

  const isSupabaseConfigured = Boolean(
    import.meta.env.VITE_SUPABASE_URL && 
    import.meta.env.VITE_SUPABASE_ANON_KEY &&
    import.meta.env.VITE_SUPABASE_URL !== 'YOUR_SUPABASE_URL' &&
    import.meta.env.VITE_SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY'
  );

  const handleMockSignup = () => {
    signUp('demo@example.com', 'password', 'Demo User');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/10 blur-[120px] rounded-full animate-pulse-slow" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 relative z-10"
      >
        <div className="text-center space-y-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-primary-purple to-primary-lime flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="text-background" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">STEALMYTREND</span>
            </Link>
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Create your account</h2>
          <p className="text-muted-foreground">Start discovering viral products today.</p>
        </div>

        <div className="glass-card rounded-[2.5rem] p-8 md:p-10 shadow-2xl border-white/5 relative overflow-hidden">
          {/* Subtle inner glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
          
          {!isSupabaseConfigured && (
            <div className="mb-6 p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary text-xs font-medium flex items-center gap-3">
              <Sparkles size={18} className="shrink-0" />
              <p>Supabase is not configured. Use <b>Mock Create Account</b> to explore the dashboard.</p>
            </div>
          )}

          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium flex items-center gap-3"
            >
              <ShieldCheck size={18} className="shrink-0" />
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
              <div className="group relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <UserIcon className="text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
              <div className="group relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                </div>
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Password</label>
              <div className="group relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center gap-2 mt-4 relative overflow-hidden group shadow-[0_0_30px_rgba(0,242,255,0.2)] hover:shadow-[0_0_40px_rgba(0,242,255,0.4)]"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-background/20 border-t-background rounded-full"
                />
              ) : (
                <>
                  <span className="uppercase tracking-widest font-black">Create Account</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {!isSupabaseConfigured && (
              <button
                type="button"
                onClick={handleMockSignup}
                className="w-full mt-4 py-4 rounded-2xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles size={18} className="text-primary" />
                Mock Create Account
              </button>
            )}
          </form>
        </div>

        <p className="text-center text-sm text-muted-foreground pb-10">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-bold hover:text-primary-lime transition-colors">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
