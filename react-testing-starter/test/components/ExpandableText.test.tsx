import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";

describe("ExpandableText", () => {
  it("should render an article with text if text is less or equal to 255", () => {
    render(<ExpandableText text="hello there" />);

    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });

  it("should render truncated text if text is greater than 255 characters", () => {
    const text = "a".repeat(256);

    render(<ExpandableText text={text} />);

    const truncatedText = text.substring(0, 255) + "...";
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
  });
});
