import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ArrowRight, Sparkles, Wand2, CheckCircle2, ShieldCheck, Github } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { signIn, signInWithOtp, signInWithOAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMode, setAuthMode] = useState<'password' | 'magic-link'>('password');
  const [isSent, setIsSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in. Please check your credentials.');
      setIsLoading(false);
    }
  };

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      await signInWithOtp(email);
      setIsSent(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send magic link.');
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    setIsLoading(true);
    setError(null);
    try {
      await signInWithOAuth(provider);
    } catch (err: any) {
      setError(err.message || `Failed to sign in with ${provider}`);
      setIsLoading(false);
    }
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
          <h2 className="text-3xl font-bold tracking-tight text-white">Welcome back</h2>
          <p className="text-muted-foreground">Sign in to access your trend intelligence.</p>
        </div>

        <div className="glass-card rounded-[2.5rem] p-8 md:p-10 shadow-2xl border-white/5 relative overflow-hidden">
          {/* Subtle inner glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
          
          <AnimatePresence mode="wait">
            {isSent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="py-8 text-center space-y-6"
              >
                <div className="relative">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
                  >
                    <CheckCircle2 size={48} className="text-primary" />
                  </motion.div>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-24 h-24 bg-primary/20 rounded-full mx-auto -z-10"
                  />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Check your email</h3>
                  <p className="text-muted-foreground px-4">
                    We've sent a magic link to <br/>
                    <span className="text-primary font-semibold">{email}</span>
                  </p>
                </div>
                
                <div className="pt-4 space-y-4">
                  <button
                    onClick={() => setIsSent(false)}
                    className="btn-secondary w-full py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2"
                  >
                    Use a different email
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Didn't receive it? Check your spam folder or try again.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
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

                {/* Auth Mode Toggle */}
                <div className="flex p-1.5 bg-white/5 rounded-2xl mb-8 relative">
                  <button
                    onClick={() => { setAuthMode('password'); setError(null); }}
                    className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-xl transition-all relative z-10 ${authMode === 'password' ? 'text-background' : 'text-muted-foreground hover:text-white'}`}
                  >
                    Password
                  </button>
                  <button
                    onClick={() => { setAuthMode('magic-link'); setError(null); }}
                    className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-xl transition-all relative z-10 ${authMode === 'magic-link' ? 'text-background' : 'text-muted-foreground hover:text-white'}`}
                  >
                    Magic Link
                  </button>
                  
                  {/* Sliding Background */}
                  <motion.div
                    className="absolute inset-y-1.5 left-1.5 w-[calc(50%-6px)] bg-primary rounded-xl shadow-[0_0_20px_rgba(0,242,255,0.4)]"
                    animate={{ 
                      x: authMode === 'password' ? '0%' : '100%',
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>

                <form onSubmit={authMode === 'password' ? handleLogin : handleMagicLink} className="space-y-6">
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

                  <AnimatePresence mode="wait">
                    {authMode === 'password' && (
                      <motion.div 
                        key="password-field"
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        className="space-y-2 overflow-hidden"
                      >
                        <div className="flex items-center justify-between ml-1">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Password</label>
                          <a href="#" className="text-[10px] font-bold text-primary hover:text-primary-lime transition-colors uppercase tracking-widest">Forgot?</a>
                        </div>
                        <div className="group relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock className="text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                          </div>
                          <input
                            type="password"
                            placeholder="••••••••"
                            required={authMode === 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

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
                        <span className="uppercase tracking-widest font-black">
                          {authMode === 'password' ? 'Sign In' : 'Send Magic Link'}
                        </span>
                        {authMode === 'password' ? (
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        ) : (
                          <Wand2 size={18} className="group-hover:rotate-12 transition-transform" />
                        )}
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
                    <span className="bg-[#0a0a0a] px-4 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleOAuthLogin('google')}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-bold text-white disabled:opacity-50"
                  >
                     <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
                     Google
                  </button>
                  <button
                    onClick={() => handleOAuthLogin('github')}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-bold text-white disabled:opacity-50"
                  >
                     <Github size={16} className="text-white" />
                     GitHub
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <p className="text-center text-sm text-muted-foreground pb-10">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary font-bold hover:text-primary-lime transition-colors">Create account</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
