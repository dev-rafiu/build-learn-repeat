import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";

import FormContainer from "../../components/FormContainer";
import { createTestStore } from "../../utils/index";
import { Provider } from "react-redux";

describe("TaskForm", () => {
  const store = createTestStore({
    taskSlice: {
      tasks: [],
    },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormContainer />
      </Provider>
    );
  });

  it("renders the input field", () => {
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders the save button", () => {
    const saveButton = screen.getByRole("button");
    expect(saveButton).toBeInTheDocument();
    expect(saveButton).toHaveTextContent(/save/i);
  });
});
