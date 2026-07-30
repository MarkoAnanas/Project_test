import { create } from "zustand";

const useCurrentScene = create((set) => ({
  currentState: "Scene1",
  setCurrentState: (state) => set({ currentState: state }),
}));

export { useCurrentScene };
