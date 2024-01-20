import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      primaryColor: '#247fff',
      setPrimaryColor: (primaryColor) => set(() => ({ primaryColor })),
    }),
    {
      name: 'primaryColor',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            ['primaryColor'].includes(key),
          ),
        ),
    },
  ),
);

export default useThemeStore;
