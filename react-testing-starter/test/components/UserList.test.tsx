import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render the text no users if there are no users", () => {
    const users: User[] = [];
    render(<UserList users={users} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render a list of users if there are users", () => {
    const users: User[] = [
      { id: 1, name: "dev" },
      { id: 2, name: "abd" },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
