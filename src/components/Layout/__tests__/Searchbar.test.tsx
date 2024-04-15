/**
 * @jest-environment jsdom
 */
import {render, screen, fireEvent} from "@testing-library/react";
import Searchbar from "@/components/Layout/Searchbar";


describe("Searchbar", () => {
    it("When input is focused dropdown should be visible", () => {
        render(<Searchbar/>);
        const Input = screen.getByRole('textbox')
        fireEvent.focus(Input);
        const DropDown = screen.getByTestId('dropdown-element')

        expect(DropDown).toBeInTheDocument();
    });

    it("Triggers search after input change", async () => {
        render(<Searchbar/>);

        const Input = screen.getByRole('textbox');

        fireEvent.change(Input, {target: {value: "test"}});

        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

        jest.useFakeTimers();
        setTimeout(() => {
            expect(screen.getByText('iPhone 9')).toBeInTheDocument();
        }, 3000);

    });
});