import { createContext, useState, useContext, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { login, register } from '../services/api';

interface AuthContextType {
  user: any;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const handleLogin = async (username: string, password: string) => {
    const response = await login(username, password);
    setUser(response.data);
    router.push('/');
  };

  const handleRegister = async (username: string, password: string) => {
    const response = await register(username, password);
    setUser(response.data);
    router.push('/');
  };

  const handleLogout = () => {
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, register: handleRegister, logout: handleLogout }}>
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
