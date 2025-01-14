import { render } from "@testing-library/react";
import UserList from "../../src/components/UserList";

describe("group", () => {
  it("should render the text no users if there are no users", () => {
    render(<UserList users={[]} />);
  });
});
