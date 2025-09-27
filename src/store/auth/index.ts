import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { AuthState } from '../types';

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        isAuthenticated: false,
        login: (token) => set({ token, isAuthenticated: true }),
        logout: () => set({ token: null, isAuthenticated: false }),
      }),
      { name: 'auth-storage' }
    ),
    { name: 'AuthStore' }
  )
);

