import { create } from "zustand";

export interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<CountState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
