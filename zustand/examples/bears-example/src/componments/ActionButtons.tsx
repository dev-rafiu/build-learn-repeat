import { useBearStore } from "../store/useBearStore";

export const IncBears = () => {
  const increaseBears = useBearStore((state) => state.increaseBears);
  return <button onClick={increaseBears}>Inc Bears</button>;
};

export const DecBears = () => {
  const decreaseBears = useBearStore((state) => state.decreaseBears);
  return <button onClick={decreaseBears}>Decrease Bears</button>;
};

export const UpdateBears = () => {
  const updateBears = useBearStore((state) => state.updateBears);
  return <button onClick={() => updateBears(2)}>Update Bears</button>;
};

export const ResetBears = () => {
  const resetBears = useBearStore((state) => state.resetBears);
  return <button onClick={resetBears}>Reset Bears</button>;
};
