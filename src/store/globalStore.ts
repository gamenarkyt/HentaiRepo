import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isSidebarOpened: false,
  setIsSidebarOpened: () =>
    set((state) => ({
      isSidebarOpened: !state.isSidebarOpened,
    })),
}));
