import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render null if there are no images", () => {
    const imgUrls: string[] = [];

    const result = render(<ProductImageGallery imageUrls={imgUrls} />);
    expect(result.container).toBeEmptyDOMElement();
  });

  it("should render a list of users if there are users", () => {
    const imgUrls = ["url1", "url2"];
    render(<ProductImageGallery imageUrls={imgUrls} />);

    const images = screen.getAllByRole("img");
    imgUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
