import {
  DecBears,
  IncBears,
  ResetBears,
  UpdateBears,
} from "./componments/ActionButtons";
import { useBearStore } from "./store/useBearStore";

function App() {
  // const bears = useBearStore((state) => state.bears);
  const { bears } = useBearStore((state) => state);

  return (
    <>
      <h1 className="bears-count">{bears} Bears</h1>

      <ul className="button-list">
        <li>
          <IncBears />
        </li>
        <li>
          <DecBears />
        </li>
        <li>
          <UpdateBears />
        </li>
        <li>
          <ResetBears />
        </li>
      </ul>
    </>
  );
}

export default App;
