import { useStore } from "../App";

export const IncPop = () => {
  const { increasePopulation } = useStore();

  return (
    <div>
      <button onClick={increasePopulation}>Inc Pop</button>
    </div>
  );
};

export const Remove = () => {
  const { removeAllBears } = useStore();

  return (
    <div>
      <button onClick={removeAllBears}>Remove</button>
    </div>
  );
};

export const Update = () => {
  const { updateBears } = useStore();

  return (
    <div>
      <button onClick={() => updateBears(2)}>Update</button>
    </div>
  );
};
