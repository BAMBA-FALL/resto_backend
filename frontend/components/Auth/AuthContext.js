// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Logique de connexion (mettez à jour l'état d'authentification, stockez le jeton, etc.)
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Logique de déconnexion (mettez à jour l'état d'authentification, supprimez le jeton, etc.)
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
