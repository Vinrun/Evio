import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Info = Record<string, unknown> | null;

interface LoginState {
  userInfo: Info;
  setUserInfo: (userInfo: Info) => void;
}

const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (userInfo) => set(() => ({ userInfo })),
    }),
    {
      name: 'userInfo',
    },
  ),
);

export default useLoginStore;
