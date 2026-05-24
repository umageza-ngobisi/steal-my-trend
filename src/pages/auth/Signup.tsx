import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User as UserIcon, Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';
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
      // Supabase might require email verification, but usually redirects or logs in
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/10 blur-[120px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 relative z-10"
      >
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 group mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-purple flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <Sparkles className="text-background" size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">STEALMYTREND</span>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Create your account</h2>
          <p className="text-muted-foreground">Start discovering viral products today.</p>
        </div>

        <div className="glass-card rounded-3xl p-8 shadow-2xl border-white/5">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center gap-2 mt-4 relative overflow-hidden group"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full"
                />
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-bold hover:underline">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
