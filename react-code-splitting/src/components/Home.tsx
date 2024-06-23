import { lazy, Suspense, useState } from "react";
import { wait } from "../utils/wait.tsx";

const AdminData = lazy(() => wait(1000).then(() => import("./AdminData.tsx")));

function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          import("../sum.tsx").then((module) => {
            alert(module.sum(2, 2));
          });
        }}
      >
        add 2+2
      </button>

      <button onClick={() => setIsAdmin((prev) => !prev)}>Toggle Admin</button>
      <Suspense fallback={<p>Loading admin Dashboard...</p>}>
        {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
      </Suspense>
    </>
  );
}

export default Home;
