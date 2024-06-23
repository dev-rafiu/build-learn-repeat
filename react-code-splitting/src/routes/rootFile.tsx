import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function RootElement() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default RootElement;
