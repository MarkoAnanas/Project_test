import { create } from "zustand";

const useCurrentScene = create((set) => ({
  currentState: "Welcome",
  setCurrentState: (state) => set({ currentState: state }),
}));

export { useCurrentScene };
