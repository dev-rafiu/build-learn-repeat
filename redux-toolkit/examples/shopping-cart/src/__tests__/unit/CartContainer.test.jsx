import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Provider } from "react-redux";
import { createTestStore } from "../../utils";
import { CartContainer } from "../../components/cart-container";

vi.mock("../../components/cart-item", () => ({
  CartItem: ({ title, price }) => (
    <div data-testid="cart-item">
      {title} - ${price}
    </div>
  ),
}));

describe("CartContainer", () => {
  it("renders correctly section header", () => {
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

    expect(screen.getByText("Your bag")).toBeInTheDocument();
  });

  it("renders empty cart message when cart is empty", () => {
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

    expect(screen.getByText("is currently empty")).toBeInTheDocument();
  });

  it("renders cart items when cart has items", () => {
    // ← This test needs actual cart items!
    const store = createTestStore({
      cart: {
        cart: [{ id: 1, title: "Test Item", price: "10.00", quantity: 1 }],
        quantity: 1,
        total: 10.0,
      },
    });

    render(
      <Provider store={store}>
        <CartContainer />
      </Provider>
    );

    expect(screen.getByTestId("cart-item")).toBeInTheDocument();
    expect(screen.getByText("Test Item - $10.00")).toBeInTheDocument();
  });

  it("renders cart total when cart has items", () => {
    const store = createTestStore({
      cart: {
        cart: [{ id: 1, title: "Test Item", price: "10.00", quantity: 1 }],
        quantity: 1,
        total: 10.0,
      },
    });

    render(
      <Provider store={store}>
        <CartContainer />
      </Provider>
    );

    // Find the h4 element (the heading) and check its complete text content
    const totalHeading = screen.getByRole("heading", { level: 4 });
    expect(totalHeading).toHaveTextContent("total $10");
  });
});
