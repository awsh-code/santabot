const { create } = require("zustand");

export const useUser = create((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
}));
