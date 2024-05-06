/* eslint-disable react-refresh/only-export-components */
import { create } from "zustand";
import { IncPop, Remove, Update } from "./componments/ActionButtons";

type TState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (bears: number) => void;
};

export const useStore = create<TState>()((set) => ({
  bears: 1,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

function App() {
  // const bears = useStore((state) => state.bears);
  const { bears } = useStore();

  return (
    <>
      <h1>{bears} round here ...</h1>

      <div>
        <IncPop />
        <Remove />
        <Update />
      </div>
    </>
  );
}

export default App;
