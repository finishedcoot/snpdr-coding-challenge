/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Header from "@/components/Layout/Header";


describe("Layout",  () => {
    it("renders the heading", () => {
        render(<Header/>);

        const heading =  screen.getByRole("heading", {
            name: /CHALLENGE/i,
        });

        expect(heading).toBeInTheDocument();
    });
});