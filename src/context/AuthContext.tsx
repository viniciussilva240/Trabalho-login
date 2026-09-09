import { createContext, useContext, useState, ReactNode } from 'react';

export type Contato = {
  nome: string;
  telefone: string;
};

type AuthContextType = {
  contatos: Contato[];
  adicionarContato: (contato: Contato) => void;
  logar: (nome: string, telefone: string) => boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [contatos, setContatos] = useState<Contato[]>([]);

  function adicionarContato(contato: Contato) {
    setContatos(prev => [...prev, contato]);
  }

  // Login: valida se existe um contato com esse nome e telefone
  function logar(nome: string, telefone: string): boolean {
    return contatos.some(
      c =>
        c.nome.trim().toLowerCase() === nome.trim().toLowerCase() &&
        c.telefone.trim() === telefone.trim()
    );
  }

  return (
    <AuthContext.Provider value={{ contatos, adicionarContato, logar }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider');
  return ctx;
}
