import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Provider } from "react-redux";
import { createTestStore } from "../../utils";
import { Navbar } from "../../components/navbar";

describe("Navbar", () => {
  const store = createTestStore({
    cart: {
      cart: [],
      quantity: 0,
      total: 0,
    },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  });

  it("renders correctly site name", () => {
    expect(screen.getByText("redux toolkit")).toBeInTheDocument();
  });

  it("renders correctly cart quantity", () => {
    const cartQuantityElement = document.querySelector(".total-quantity");
    expect(cartQuantityElement).toBeInTheDocument();
    expect(cartQuantityElement.tagName).toBe("P");
  });
});
