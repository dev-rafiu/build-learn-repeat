import {
  DecBears,
  IncBears,
  ResetBears,
  UpdateBears,
} from "./componments/ActionButtons";
import { useBearStore } from "./store/useBearsStore";

function App() {
  const bears = useBearStore((state) => state.bears);

  return (
    <>
      <h1>{bears} Bears</h1>

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
