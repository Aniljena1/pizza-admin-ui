import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "./login";

describe("Login Page", () => {
  test("Should render with required fields", async () => {
    render(<LoginPage />);
    // getBy   -> Throughs an error
    // queryBy -> Not throug error it return null
    // FindBy  -> Async
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Remember me" })
    ).toBeInTheDocument();
    expect(screen.getByText(/Forgot password/i)).toBeInTheDocument();
  });
});
