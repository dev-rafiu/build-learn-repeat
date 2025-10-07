import { describe } from "vitest";
import { render } from "@testing-library/react";
import { Modal } from "../../components/Modal";
import { Provider } from "react-redux";
import { createTestStore } from "../../utils";

describe("Modal", () => {
  const store = createTestStore({
    modal: {
      isOpen: false,
    },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
  });

  it("renders modal when user clicks on clear cart button", () => {});
});
