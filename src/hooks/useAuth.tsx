import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Session, User } from '@supabase/supabase-js';

const isSupabaseConfigured = Boolean(
  import.meta.env.VITE_SUPABASE_URL && 
  import.meta.env.VITE_SUPABASE_ANON_KEY &&
  import.meta.env.VITE_SUPABASE_URL !== 'YOUR_SUPABASE_URL' &&
  import.meta.env.VITE_SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY'
);

const MOCK_USER: User = {
  id: 'mock-user-id',
  email: 'demo@stealmytrend.com',
  user_metadata: {
    full_name: 'Demo User',
    avatar_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100'
  },
  aud: 'authenticated',
  role: 'authenticated',
  created_at: new Date().toISOString(),
  app_metadata: {},
} as any;

const MOCK_SESSION: Session = {
  access_token: 'mock-token',
  refresh_token: 'mock-refresh',
  expires_in: 3600,
  expires_at: Math.floor(Date.now() / 1000) + 3600,
  user: MOCK_USER,
  token_type: 'bearer',
};

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
  signInWithOtp: (email: string) => Promise<void>;
  signInWithOAuth: (provider: 'google' | 'github') => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      const mockSession = localStorage.getItem('mock_session');
      if (mockSession === 'true') {
        setSession(MOCK_SESSION);
        setUser(MOCK_USER);
      }
      setLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    if (!isSupabaseConfigured) {
      localStorage.removeItem('mock_session');
      setSession(null);
      setUser(null);
      return;
    }
    await supabase.auth.signOut();
  };

  const signInWithOAuth = async (provider: 'google' | 'github') => {
    if (!isSupabaseConfigured) {
      localStorage.setItem('mock_session', 'true');
      setSession(MOCK_SESSION);
      setUser(MOCK_USER);
      return;
    }
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin + '/dashboard',
      },
    });
    if (error) throw error;
  };

  const signInWithOtp = async (email: string) => {
    if (!isSupabaseConfigured) {
      localStorage.setItem('mock_session', 'true');
      setSession(MOCK_SESSION);
      setUser(MOCK_USER);
      return;
    }
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin + '/dashboard',
      },
    });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    if (!isSupabaseConfigured) {
      localStorage.setItem('mock_session', 'true');
      setSession(MOCK_SESSION);
      setUser({ ...MOCK_USER, email, user_metadata: { ...MOCK_USER.user_metadata, full_name: fullName } });
      return;
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: window.location.origin + '/dashboard',
      },
    });
    if (error) throw error;
  };

  const signIn = async (email: string, password: string) => {
    if (!isSupabaseConfigured) {
      localStorage.setItem('mock_session', 'true');
      setSession(MOCK_SESSION);
      setUser(MOCK_USER);
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ session, user, loading, signOut, signInWithOtp, signInWithOAuth, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
