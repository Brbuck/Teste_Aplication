import React, { createContext, useEffect, useState, useContext } from 'react';
import * as api from '../services/auth'

export const authContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');


        if (storagedToken && storagedUser) {
            setUser(JSON.parse(storagedUser));
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
        setLoading(false);
    }, [])

    async function handleLogin() {
        const response = await api.post('https://localhost:3000');
        setUser(response.data.user);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        localStorage.setItem('@App:user', JSON.stringify(response.data.user));
        localStorage.setItem('@App:token', response.data.token);
    }

    function Logout() {
        localStorage.removeItem('@App:token');
        setUser(null);
    }



    return (
        <authContext.Provider value={{ signed: Boolean(user), user, handleLogin, Logout, loading }}>
            {children}
        </authContext.Provider>
    );
}

export default AuthProvider;

export function useAuth(){
    const context = useContext(authContext)

    return context
}

/* import React, { createContext, useState, useEffect, useContext } from 'react';

import * as api from '../services/auth';



export const authContext = createContext({})

export default function AuthProvider ({ children }){
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function handleLogin(userData) {
    const response = await api.signIn('https://localhost:3000', userData);

    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
    sessionStorage.setItem('@App:token', response.data.token);
  }

  function Logout() {
    setUser(null);
  }

  return (
    <authContext.Provider
      value={{ signed: Boolean(user), user, handleLogin, Logout, }}
    >
      {children}
    </authContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(authContext);

  return context;
} */
