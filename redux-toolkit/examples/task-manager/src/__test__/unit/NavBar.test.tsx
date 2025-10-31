import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Provider } from "react-redux";
import { createTestStore } from "../../utils/index";
import NavBar from "../../components/NavBar";

describe("NavBar", () => {
  const store = createTestStore({
    taskSlice: {
      tasks: [],
    },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(
      screen.getByText("Redux Tk: (Task manager example)")
    ).toBeInTheDocument();
  });

  it("renders correctly the total tasks", () => {
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
