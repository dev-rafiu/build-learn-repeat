import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Provider } from "react-redux";
import { createTestStore } from "../../utils";
import { CartItem } from "../../components/cart-item";

describe("CartItem", () => {
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
        <CartItem />
      </Provider>
    );
  });

  it("renders correctly cart item product image", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders correctly cart item product title", () => {
    const titleElement = document.getElementById("title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H4");
  });

  it("renders correctly cart item product price", () => {
    const priceElement = document.querySelector(".item-price");
    expect(priceElement).toBeInTheDocument();
    expect(priceElement.tagName).toBe("H5");
  });

  it("renders correctly cart item remove button", () => {
    expect(screen.getByText("remove")).toBeInTheDocument();
  });

  it("renders correctly cart item quantity", () => {
    const quantityElement = document.querySelector(".quantity");
    expect(quantityElement).toBeInTheDocument();
    expect(quantityElement.tagName).toBe("SPAN");
  });

  it("renders correctly cart item quantity increase and decrease buttons", () => {
    const quantityIncreaseElement = document.querySelector(".quantity-btn");
    expect(quantityIncreaseElement).toBeInTheDocument();
    expect(quantityIncreaseElement.tagName).toBe("BUTTON");
  });
});
