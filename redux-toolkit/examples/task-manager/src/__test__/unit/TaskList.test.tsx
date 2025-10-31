import { render, screen } from "@testing-library/react";

import { describe, it, expect, beforeEach } from "vitest";

import { createTestStore } from "../../utils/index";
import { Provider } from "react-redux";
import TaskList from "../../components/TaskList";

describe("Task", () => {
  const store = createTestStore({
    taskSlice: {
      tasks: [],
    },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );
  });

  it("renders the clear all button", () => {
    const clearbutton = screen.getByRole("button");
    expect(clearbutton).toBeInTheDocument();
    expect(clearbutton).toHaveTextContent("Clear list");
  });

  it("renders remove button for each task", () => {
    const removeButton = screen.getByRole("button");
    expect(removeButton).toBeInTheDocument();
  });
});
