import { create } from "zustand";

type State = {
  bears: number;
};

type Action = {
  increaseBears: () => void;
  decreaseBears: () => void;
  updateBears: (num: number) => void;
  resetBears: () => void;
};

export const useBearStore = create<State & Action>()((set) => ({
  bears: 0,
  increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
  decreaseBears: () =>
    set((state) => ({ bears: state.bears == 0 ? 0 : state.bears - 1 })),
  updateBears: (num: number) => set({ bears: num }),
  resetBears: () => set({ bears: 0 }),
}));
