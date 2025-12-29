import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../home/Hero";

//test suite
describe("Hero Component", () => {
  //test case 1
  test("renders Hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Online investing platform banner");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src","media/images/homeHero.png");
  });
});
