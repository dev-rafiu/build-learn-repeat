import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Provider } from "react-redux";
import { createTestStore } from "../../utils";
import { CartContainer } from "../../components/cart-container";

describe("CartContainer", () => {
  beforeEach(() => {
    const store = createTestStore({
      cart: {
        cart: [],
        quantity: 0,
        total: 0,
      },
    });

    render(
      <Provider store={store}>
        <CartContainer />
      </Provider>
    );
  });

  it("renders correctly section header", () => {
    expect(screen.getByText("Your bag")).toBeInTheDocument();
  });

  it("renders empty cart message when cart is empty", () => {
    expect(screen.getByText("is currently empty")).toBeInTheDocument();
  });
});
